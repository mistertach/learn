/* Solo para el administrador (ADMIN_EMAIL).
   GET  /api/admin                                → {yo, usuarios:[{id,email,nombre,creado,alumnos:[{id,nombre,bloqueados,todo_abierto,datos,actualizado}]}]}
   PUT  /api/admin?alumno=N {bloqueados:[id de lugar]} → qué lugares no puede abrir ese chico
   PUT  /api/admin?alumno=N {todoAbierto:true|false}   → abrirle todo (lugares y juegos, gratis), para probar
   POST /api/admin?usuario=N {accion:'clave'}          → le pone una contraseña provisoria y la devuelve {clave} */
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, parametros, exigirUsuario } = require('../servidor/http');
const { hashClave, claveProvisoria } = require('../servidor/sesion');

async function exigirAdmin(req){ const u = await exigirUsuario(req); if(!u.es_admin) throw error(403, 'Solo para el administrador'); return u; }

module.exports = manejar({
  async GET(req){
    const yo = await exigirAdmin(req);
    const usuarios = await q('SELECT id, email, nombre, es_admin, creado FROM usuarios ORDER BY creado DESC');
    const alumnos = await q('SELECT id, usuario_id, nombre, datos, bloqueados, todo_abierto, actualizado FROM alumnos ORDER BY id');
    return {yo: yo.id, usuarios: usuarios.map(u=>({...u, alumnos: alumnos.filter(a=>a.usuario_id===u.id)}))};
  },
  async PUT(req){
    await exigirAdmin(req);
    const id = parseInt(parametros(req).alumno, 10), b = await cuerpo(req);
    if(!id) throw error(400, 'Datos inválidos');
    let filas;
    if(typeof b.todoAbierto === 'boolean'){
      filas = await q('UPDATE alumnos SET todo_abierto=$2 WHERE id=$1 RETURNING id', [id, b.todoAbierto]);
    } else {
      if(!Array.isArray(b.bloqueados) || !b.bloqueados.every(x=>typeof x==='string' && /^[\w-]{1,40}$/.test(x))) throw error(400, 'Datos inválidos');
      filas = await q('UPDATE alumnos SET bloqueados=$2::jsonb WHERE id=$1 RETURNING id', [id, JSON.stringify(b.bloqueados)]);
    }
    if(!filas.length) throw error(404, 'No existe ese chico');
  },
  async POST(req){
    const yo = await exigirAdmin(req);
    const id = parseInt(parametros(req).usuario, 10), b = await cuerpo(req);
    if(!id || b.accion !== 'clave') throw error(400, 'Datos inválidos');
    if(id === yo.id) throw error(400, 'Para tu propia cuenta, usá «Cambiar contraseña» en el rincón de los grandes del juego');
    const clave = claveProvisoria();
    // la contraseña nueva cierra las sesiones abiertas de esa cuenta
    const filas = await q('UPDATE usuarios SET hash=$2, clave_ver=clave_ver+1 WHERE id=$1 RETURNING id', [id, hashClave(clave)]);
    if(!filas.length) throw error(404, 'No existe esa cuenta');
    await q('DELETE FROM recuperos WHERE usuario_id=$1', [id]);
    return {clave};
  }
});
