/* Los chicos de una cuenta y su progreso (el objeto `save` del juego).
   POST   /api/alumnos {nombre}             → crea un chico
   PUT    /api/alumnos?id=N {datos}         → guarda el progreso
   POST   /api/alumnos?id=N&guardar=1       → igual que PUT (lo usa sendBeacon al cerrar la página)
   PATCH  /api/alumnos?id=N {nombre}        → cambia el nombre
   DELETE /api/alumnos?id=N                 → borra el chico y su progreso */
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, parametros, exigirUsuario } = require('../servidor/http');

const MAX_DATOS = 200000;
async function propio(req){
  const u = await exigirUsuario(req), id = parseInt(parametros(req).id, 10);
  if(!id) throw error(400, 'Falta el id');
  const [a] = await q('SELECT id FROM alumnos WHERE id=$1 AND usuario_id=$2', [id, u.id]);
  if(!a) throw error(404, 'No existe ese chico en tu cuenta');
  return id;
}
async function guardar(req){
  const id = await propio(req), b = await cuerpo(req);
  if(!b.datos || typeof b.datos !== 'object') throw error(400, 'Faltan los datos');
  const txt = JSON.stringify(b.datos); if(txt.length > MAX_DATOS) throw error(413, 'Demasiados datos');
  const [a] = await q('UPDATE alumnos SET datos=$2::jsonb, actualizado=NOW() WHERE id=$1 RETURNING actualizado', [id, txt]);
  return {ok:true, actualizado:a.actualizado};
}

module.exports = manejar({
  async POST(req){
    if(parametros(req).guardar) return guardar(req);
    const u = await exigirUsuario(req), b = await cuerpo(req);
    const nombre = String(b.nombre||'').trim().slice(0, 14);
    if(!nombre) throw error(400, 'Falta el nombre', 'falta_nombre');
    const [{n}] = await q('SELECT COUNT(*)::int AS n FROM alumnos WHERE usuario_id=$1', [u.id]);
    if(n >= 30) throw error(400, 'Ya hay muchos chicos en esta cuenta', 'muchos_chicos');
    const [a] = await q(`INSERT INTO alumnos (usuario_id, nombre, datos) VALUES ($1,$2,$3::jsonb)
      RETURNING id, nombre, datos, bloqueados, actualizado`, [u.id, nombre, JSON.stringify({name:nombre})]);
    return a;
  },
  PUT: guardar,
  async PATCH(req){
    const id = await propio(req), b = await cuerpo(req);
    const nombre = String(b.nombre||'').trim().slice(0, 14); if(!nombre) throw error(400, 'Falta el nombre', 'falta_nombre');
    await q('UPDATE alumnos SET nombre=$2 WHERE id=$1', [id, nombre]);
  },
  async DELETE(req){
    const id = await propio(req);
    await q('DELETE FROM alumnos WHERE id=$1', [id]);
  }
});
