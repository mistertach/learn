/* Solo para el administrador (ADMIN_EMAIL).
   GET /api/admin                            → {usuarios:[{id,email,nombre,creado,alumnos:[{id,nombre,bloqueados,datos,actualizado}]}]}
   PUT /api/admin?alumno=N {bloqueados:[id de lugar]} → qué lugares no puede abrir ese chico */
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, parametros, exigirUsuario } = require('../servidor/http');

async function exigirAdmin(req){ const u = await exigirUsuario(req); if(!u.es_admin) throw error(403, 'Solo para el administrador'); return u; }

module.exports = manejar({
  async GET(req){
    await exigirAdmin(req);
    const usuarios = await q('SELECT id, email, nombre, es_admin, creado FROM usuarios ORDER BY creado DESC');
    const alumnos = await q('SELECT id, usuario_id, nombre, datos, bloqueados, actualizado FROM alumnos ORDER BY id');
    return {usuarios: usuarios.map(u=>({...u, alumnos: alumnos.filter(a=>a.usuario_id===u.id)}))};
  },
  async PUT(req){
    await exigirAdmin(req);
    const id = parseInt(parametros(req).alumno, 10), b = await cuerpo(req);
    if(!id || !Array.isArray(b.bloqueados) || !b.bloqueados.every(x=>typeof x==='string' && /^[\w-]{1,40}$/.test(x))) throw error(400, 'Datos inválidos');
    const filas = await q('UPDATE alumnos SET bloqueados=$2::jsonb WHERE id=$1 RETURNING id', [id, JSON.stringify(b.bloqueados)]);
    if(!filas.length) throw error(404, 'No existe ese chico');
  }
});
