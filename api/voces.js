/* Prueba de voces generadas (ElevenLabs y Google), solo para el administrador. La página es voces.html.
   Cada audio se pide una sola vez y queda guardado en la base (tabla voces_prueba), así escucharlo de nuevo no gasta.
   GET    /api/voces                              → {servicios:{eleven,google}, gastado:{eleven,google}, voz:{eleven:{es…},google:{es…}}}
   GET    /api/voces?lista=eleven|google&lang=xx  → [{id, nombre}] las voces que se pueden elegir
   POST   /api/voces {servicio, lang, voz, texto} → {tipo, audio(base64), nuevo}
   DELETE /api/voces                              → borra los audios de prueba guardados */
const crypto = require('crypto');
const { q } = require('../servidor/db');
const { manejar, cuerpo, error, parametros, exigirUsuario } = require('../servidor/http');
const { IDIOMAS, SERVICIOS, vozDe } = require('../servidor/voces');

async function exigirAdmin(req){ const u = await exigirUsuario(req); if(!u.es_admin) throw error(403, 'Solo para el administrador'); return u; }
const servicioValido = s => Object.prototype.hasOwnProperty.call(SERVICIOS, s);
const fallaServicio = e => { if(e.servicio) throw error(502, e.message); throw e; };

module.exports = manejar({
  async GET(req){
    await exigirAdmin(req);
    const p = parametros(req);
    if(p.lista){
      if(!servicioValido(p.lista) || !IDIOMAS.includes(p.lang)) throw error(400, 'Datos inválidos');
      if(!SERVICIOS[p.lista].configurado()) throw error(400, `Falta la clave de ${SERVICIOS[p.lista].nombre} en Vercel`);
      return SERVICIOS[p.lista].voces(p.lang).catch(fallaServicio);
    }
    const servicios = {}, voz = {}, gastado = {};
    for(const [k, S] of Object.entries(SERVICIOS)){
      servicios[k] = S.configurado();
      voz[k] = Object.fromEntries(IDIOMAS.map(l => [l, S.vozPorDefecto(l) || '']));
      gastado[k] = 0;
    }
    for(const r of await q('SELECT servicio, SUM(caracteres)::int AS n FROM voces_prueba GROUP BY servicio')) gastado[r.servicio] = r.n;
    return {servicios, voz, gastado};
  },
  async POST(req){
    await exigirAdmin(req);
    const b = await cuerpo(req);
    if(!servicioValido(b.servicio) || !IDIOMAS.includes(b.lang)) throw error(400, 'Datos inválidos');
    if(typeof b.texto !== 'string' || !b.texto.trim() || b.texto.length > 400) throw error(400, 'Texto inválido');
    if(b.voz != null && !(typeof b.voz === 'string' && /^[\w.-]{0,80}$/.test(b.voz))) throw error(400, 'Voz inválida');
    const S = SERVICIOS[b.servicio];
    if(!S.configurado()) throw error(400, `Falta la clave de ${S.nombre} en Vercel`);
    const voz = await vozDe(b.servicio, b.lang, b.voz).catch(fallaServicio);
    const clave = crypto.createHash('sha256').update([b.servicio, voz, b.lang, b.texto].join('\n')).digest('hex');
    const [ya] = await q('SELECT tipo, audio FROM voces_prueba WHERE clave=$1', [clave]);
    if(ya) return {...ya, nuevo:false};
    const audio = (await S.generar(b.texto, b.lang, voz).catch(fallaServicio)).toString('base64');
    await q(`INSERT INTO voces_prueba (clave, servicio, lang, voz, texto, caracteres, tipo, audio) VALUES ($1,$2,$3,$4,$5,$6,'audio/mpeg',$7)
      ON CONFLICT (clave) DO NOTHING`, [clave, b.servicio, b.lang, voz, b.texto, b.texto.length, audio]);
    return {tipo:'audio/mpeg', audio, nuevo:true};
  },
  async DELETE(req){
    await exigirAdmin(req);
    await q('DELETE FROM voces_prueba');
  }
});
