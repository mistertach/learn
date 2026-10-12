/* GET  /api/sesion                         → {usuario, alumnos}  (usuario null si no entró)
   POST /api/sesion {accion:'registro', email, clave, nombre}
   POST /api/sesion {accion:'entrar', email, clave}
   POST /api/sesion {accion:'salir'} */
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, usuarioDe } = require('../servidor/http');
const { hashClave, claveOk, ponerSesion, borrarSesion } = require('../servidor/sesion');

const esAdminEmail = email => !!process.env.ADMIN_EMAIL && email === process.env.ADMIN_EMAIL.trim().toLowerCase();
const alumnosDe = uid => q('SELECT id, nombre, datos, bloqueados, actualizado FROM alumnos WHERE usuario_id=$1 ORDER BY id', [uid]);
const publico = u => u && {id:u.id, email:u.email, nombre:u.nombre, admin:!!u.es_admin};

module.exports = manejar({
  async GET(req){
    const u = await usuarioDe(req);
    return {usuario: publico(u), alumnos: u ? await alumnosDe(u.id) : []};
  },
  async POST(req, res){
    const b = await cuerpo(req);
    if(b.accion === 'salir'){ borrarSesion(res); return {ok:true}; }
    const email = String(b.email||'').trim().toLowerCase(), clave = String(b.clave||'');
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw error(400, 'Ese email no parece válido', 'email_invalido');
    if(b.accion === 'registro'){
      if(clave.length < 8) throw error(400, 'La contraseña tiene que tener al menos 8 caracteres', 'clave_corta');
      const nombre = String(b.nombre||'').trim().slice(0, 60);
      const ya = await q('SELECT 1 FROM usuarios WHERE email=$1', [email]);
      if(ya.length) throw error(409, 'Ya hay una cuenta con ese email. Probá entrar.', 'email_existe');
      const [u] = await q('INSERT INTO usuarios (email, nombre, hash, es_admin) VALUES ($1,$2,$3,$4) RETURNING id, email, nombre, es_admin',
        [email, nombre, hashClave(clave), esAdminEmail(email)]);
      ponerSesion(res, u.id);
      return {usuario: publico(u), alumnos: []};
    }
    if(b.accion === 'entrar'){
      const [u] = await q('SELECT id, email, nombre, hash, es_admin FROM usuarios WHERE email=$1', [email]);
      if(!u || !claveOk(clave, u.hash)) throw error(401, 'El email o la contraseña no coinciden', 'credenciales');
      if(esAdminEmail(email) && !u.es_admin){ await q('UPDATE usuarios SET es_admin=TRUE WHERE id=$1', [u.id]); u.es_admin = true; }
      ponerSesion(res, u.id);
      return {usuario: publico(u), alumnos: await alumnosDe(u.id)};
    }
    throw error(400, 'Acción desconocida');
  }
});
