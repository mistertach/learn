/* Grabaciones de voz. Las del administrador son para todos (global); las de cada cuenta, solo para esa cuenta.
   GET    /api/grabaciones                  → {mias:[clave], globales:[clave]}
   GET    /api/grabaciones?clave=K&de=mia|global → {tipo, audio(base64)}
   PUT    /api/grabaciones {clave, tipo, audio(base64)}
   DELETE /api/grabaciones?clave=K */
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, parametros, usuarioDe, exigirUsuario } = require('../servidor/http');

const MAX_AUDIO = 1500000;   // ~1 MB de audio en base64: sobra para una frase
const MAX_POR_CUENTA = 3000;
const claveValida = c => typeof c === 'string' && /^[a-z]{2}:[\w:.-]{1,120}$/.test(c);

module.exports = manejar({
  async GET(req){
    const u = await usuarioDe(req), p = parametros(req);
    if(!p.clave){
      const globales = await q('SELECT clave FROM grabaciones WHERE global ORDER BY clave');
      const mias = u ? await q('SELECT clave FROM grabaciones WHERE usuario_id=$1 AND NOT global ORDER BY clave', [u.id]) : [];
      return {mias: mias.map(r=>r.clave), globales: globales.map(r=>r.clave)};
    }
    if(!claveValida(p.clave)) throw error(400, 'Clave inválida');
    const filas = p.de === 'global'
      ? await q('SELECT tipo, audio FROM grabaciones WHERE global AND clave=$1 ORDER BY actualizado DESC LIMIT 1', [p.clave])
      : u ? await q('SELECT tipo, audio FROM grabaciones WHERE usuario_id=$1 AND clave=$2', [u.id, p.clave]) : [];
    if(!filas.length) throw error(404, 'No hay grabación');
    return filas[0];
  },
  async PUT(req){
    const u = await exigirUsuario(req), b = await cuerpo(req);
    if(!claveValida(b.clave)) throw error(400, 'Clave inválida');
    if(typeof b.audio !== 'string' || !b.audio || b.audio.length > MAX_AUDIO) throw error(413, 'El audio es muy largo');
    const tipo = /^audio\/[\w.+-]+(;[\w=.+ -]*)?$/.test(b.tipo||'') ? b.tipo : 'audio/webm';
    const [{n}] = await q('SELECT COUNT(*)::int AS n FROM grabaciones WHERE usuario_id=$1', [u.id]);
    if(n >= MAX_POR_CUENTA) throw error(400, 'Llegaste al máximo de grabaciones');
    await q(`INSERT INTO grabaciones (usuario_id, clave, tipo, audio, global) VALUES ($1,$2,$3,$4,$5)
      ON CONFLICT (usuario_id, clave) DO UPDATE SET tipo=$3, audio=$4, global=$5, actualizado=NOW()`,
      [u.id, b.clave, tipo, b.audio, !!u.es_admin]);
    return {ok:true, global:!!u.es_admin};
  },
  async DELETE(req){
    const u = await exigirUsuario(req), p = parametros(req);
    if(!claveValida(p.clave)) throw error(400, 'Clave inválida');
    await q('DELETE FROM grabaciones WHERE usuario_id=$1 AND clave=$2', [u.id, p.clave]);
  }
});
