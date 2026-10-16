/* GET  /api/sesion                         → {usuario, alumnos}  (usuario null si no entró)
   POST /api/sesion {accion:'registro', email, clave, nombre}
   POST /api/sesion {accion:'entrar', email, clave}
   POST /api/sesion {accion:'salir'}
   POST /api/sesion {accion:'olvide', email, idioma}      → manda un link para elegir otra contraseña
   POST /api/sesion {accion:'nueva_clave', token, clave}  → con ese link: cambia la contraseña y entra
   POST /api/sesion {accion:'cambiar_clave', actual, clave} (con la sesión abierta) */
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, usuarioDe, exigirUsuario } = require('../servidor/http');
const { hashClave, claveOk, ponerSesion, borrarSesion, hashToken, nuevoToken } = require('../servidor/sesion');
const { mandarRecupero, exigirCorreo } = require('../servidor/correo');

const esAdminEmail = email => !!process.env.ADMIN_EMAIL && email === process.env.ADMIN_EMAIL.trim().toLowerCase();
const alumnosDe = uid => q('SELECT id, nombre, datos, bloqueados, todo_abierto, actualizado FROM alumnos WHERE usuario_id=$1 ORDER BY id', [uid]);
const publico = u => u && {id:u.id, email:u.email, nombre:u.nombre, admin:!!u.es_admin};
const claveValida = clave => { if(String(clave||'').length < 8) throw error(400, 'La contraseña tiene que tener al menos 8 caracteres', 'clave_corta'); return String(clave); };
/* la dirección del juego para el link del email: APP_URL si está, si no la del pedido */
function direccion(req){
  if(process.env.APP_URL) return process.env.APP_URL.replace(/\/+$/, '');
  const h = req.headers, host = h['x-forwarded-host'] || h.host;
  const proto = h['x-forwarded-proto'] || (process.env.VERCEL ? 'https' : 'http');
  return `${proto}://${host}`;
}
/* cambia la contraseña y cierra todas las sesiones de ese usuario (salvo la que se abre ahora) */
async function cambiarClave(uid, clave){
  const [u] = await q('UPDATE usuarios SET hash=$2, clave_ver=clave_ver+1 WHERE id=$1 RETURNING id, email, nombre, es_admin, clave_ver', [uid, hashClave(clave)]);
  await q('DELETE FROM recuperos WHERE usuario_id=$1', [uid]);
  return u;
}

/* límite de intentos: pocas contraseñas equivocadas por email y por dirección, y pocos registros / pedidos de recupero por hora */
const ipDe = req => String(String(req.headers['x-forwarded-for'] || '').split(',')[0] || (req.socket && req.socket.remoteAddress) || 'sin-ip').trim().slice(0, 64);
async function limitar(clave, max, minutos){
  const [r] = await q(`SELECT n FROM intentos WHERE clave=$1 AND desde > NOW() - ($2 || ' minutes')::interval`, [clave, String(minutos)]);
  if(r && r.n >= max) throw error(429, 'Demasiados intentos. Esperá unos minutos.', 'demasiados_intentos');
}
async function anotar(clave, minutos){
  await q(`INSERT INTO intentos (clave, n, desde) VALUES ($1, 1, NOW())
    ON CONFLICT (clave) DO UPDATE SET
      n = CASE WHEN intentos.desde > NOW() - ($2 || ' minutes')::interval THEN intentos.n + 1 ELSE 1 END,
      desde = CASE WHEN intentos.desde > NOW() - ($2 || ' minutes')::interval THEN intentos.desde ELSE NOW() END`, [clave, String(minutos)]);
}
const olvidar = clave => q('DELETE FROM intentos WHERE clave=$1', [clave]);

module.exports = manejar({
  async GET(req){
    const u = await usuarioDe(req);
    return {usuario: publico(u), alumnos: u ? await alumnosDe(u.id) : []};
  },
  async POST(req, res){
    const b = await cuerpo(req);
    if(b.accion === 'salir'){ borrarSesion(res); return {ok:true}; }
    if(b.accion === 'nueva_clave'){
      const clave = claveValida(b.clave);
      const [r] = await q('SELECT usuario_id FROM recuperos WHERE token=$1 AND vence > NOW()', [hashToken(b.token)]);
      if(!r) throw error(400, 'El link venció o ya se usó', 'token');
      const u = await cambiarClave(r.usuario_id, clave);
      ponerSesion(res, u.id, u.clave_ver);
      return {usuario: publico(u), alumnos: await alumnosDe(u.id)};
    }
    if(b.accion === 'borrar_cuenta'){
      const yo = await exigirUsuario(req); await limitar(`cc:${yo.id}`, 8, 15);
      const [u0] = await q('SELECT hash FROM usuarios WHERE id=$1', [yo.id]);
      if(!claveOk(String(b.clave||''), u0.hash)){ await anotar(`cc:${yo.id}`, 15); throw error(401, 'La contraseña no coincide', 'clave_actual'); }
      await q('DELETE FROM usuarios WHERE id=$1', [yo.id]);   // los chicos, las grabaciones y los pedidos de recupero se borran con la cuenta
      borrarSesion(res); return {ok:true};
    }
    if(b.accion === 'cambiar_clave'){
      const yo = await exigirUsuario(req), clave = claveValida(b.clave); await limitar(`cc:${yo.id}`, 8, 15);
      const [u0] = await q('SELECT hash FROM usuarios WHERE id=$1', [yo.id]);
      if(!claveOk(String(b.actual||''), u0.hash)){ await anotar(`cc:${yo.id}`, 15); throw error(401, 'La contraseña actual no coincide', 'clave_actual'); }
      const u = await cambiarClave(yo.id, clave);
      ponerSesion(res, u.id, u.clave_ver);
      return {ok:true};
    }
    const email = String(b.email||'').trim().toLowerCase(), clave = String(b.clave||'');
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw error(400, 'Ese email no parece válido', 'email_invalido');
    if(b.accion === 'olvide'){
      // siempre responde lo mismo, haya o no una cuenta con ese email
      exigirCorreo(); await limitar(`olv:${ipDe(req)}`, 10, 60); await anotar(`olv:${ipDe(req)}`, 60);
      const [u] = await q('SELECT id, nombre FROM usuarios WHERE email=$1', [email]);
      if(!u) return {ok:true};
      const [reciente] = await q(`SELECT 1 FROM recuperos WHERE usuario_id=$1 AND creado > NOW() - INTERVAL '2 minutes'`, [u.id]);
      if(reciente) return {ok:true};
      await q('DELETE FROM recuperos WHERE usuario_id=$1 OR vence < NOW()', [u.id]);
      const token = nuevoToken();
      await q(`INSERT INTO recuperos (token, usuario_id, vence) VALUES ($1,$2,NOW() + INTERVAL '1 hour')`, [hashToken(token), u.id]);
      try{ await mandarRecupero(email, u.nombre, `${direccion(req)}/?clave=${token}`, String(b.idioma||'en')); }
      catch(e){ await q('DELETE FROM recuperos WHERE usuario_id=$1', [u.id]); throw e; }
      return {ok:true};
    }
    if(b.accion === 'registro'){
      claveValida(clave); await limitar(`reg:${ipDe(req)}`, 10, 60); await anotar(`reg:${ipDe(req)}`, 60);
      const nombre = String(b.nombre||'').trim().slice(0, 60);
      const ya = await q('SELECT 1 FROM usuarios WHERE email=$1', [email]);
      if(ya.length) throw error(409, 'Ya hay una cuenta con ese email. Probá entrar.', 'email_existe');
      const [u] = await q('INSERT INTO usuarios (email, nombre, hash, es_admin) VALUES ($1,$2,$3,$4) RETURNING id, email, nombre, es_admin, clave_ver',
        [email, nombre, hashClave(clave), esAdminEmail(email)]);
      ponerSesion(res, u.id, u.clave_ver);
      return {usuario: publico(u), alumnos: []};
    }
    if(b.accion === 'entrar'){
      const ip = ipDe(req); await limitar(`ent:${email}`, 8, 15); await limitar(`ip:${ip}`, 40, 15);
      const [u] = await q('SELECT id, email, nombre, hash, es_admin, clave_ver FROM usuarios WHERE email=$1', [email]);
      if(!u || !claveOk(clave, u.hash)){ await anotar(`ent:${email}`, 15); await anotar(`ip:${ip}`, 15); throw error(401, 'El email o la contraseña no coinciden', 'credenciales'); }
      await olvidar(`ent:${email}`);
      if(esAdminEmail(email) && !u.es_admin){ await q('UPDATE usuarios SET es_admin=TRUE WHERE id=$1', [u.id]); u.es_admin = true; }
      ponerSesion(res, u.id, u.clave_ver);
      return {usuario: publico(u), alumnos: await alumnosDe(u.id)};
    }
    throw error(400, 'Acción desconocida');
  }
});
