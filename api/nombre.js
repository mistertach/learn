/* El nombre del chico dicho con la voz natural del relator (Google Chirp 3 HD), una sola vez por nombre e idioma.
   GET /api/nombre?n=Nico&l=es → audio/mpeg
   Queda guardado en la tabla nombres_voz (sin base de datos, en un archivo de la carpeta temporal), así el mismo nombre
   no se vuelve a pedir nunca: los chicos con el mismo nombre comparten el audio. Hay un límite por dirección para que
   nadie pueda gastar la cuenta de Google. Necesita GOOGLE_TTS_API_KEY. */
const crypto = require('crypto'), fs = require('fs'), os = require('os'), path = require('path');
const { q } = require('../servidor/db');
const { responder, error, parametros } = require('../servidor/http');
const { IDIOMAS, GOOGLE_LOCAL, SERVICIOS } = require('../servidor/voces');

const NOMBRE_OK = /^[\p{L}\p{M}' -]{1,14}$/u;
const ipDe = req => String(String(req.headers['x-forwarded-for'] || '').split(',')[0] || (req.socket && req.socket.remoteAddress) || 'sin-ip').trim().slice(0, 64);
const CARPETA = path.join(process.env.VERCEL ? os.tmpdir() : path.join(__dirname, '..', '.cache'), 'nombres');
const conBase = () => !!process.env.DATABASE_URL;

async function buscar(clave){
  if(conBase()){ const [r] = await q('SELECT audio FROM nombres_voz WHERE clave=$1', [clave]); return r ? Buffer.from(r.audio, 'base64') : null; }
  try{ return fs.readFileSync(path.join(CARPETA, crypto.createHash('sha256').update(clave).digest('hex') + '.mp3')); }catch(e){ return null; }
}
async function guardar(clave, buf){
  if(conBase()){ await q('INSERT INTO nombres_voz (clave, audio) VALUES ($1,$2) ON CONFLICT (clave) DO NOTHING', [clave, buf.toString('base64')]); return; }
  try{ fs.mkdirSync(CARPETA, {recursive:true}); fs.writeFileSync(path.join(CARPETA, crypto.createHash('sha256').update(clave).digest('hex') + '.mp3'), buf); }catch(e){}
}
/* como mucho 30 nombres nuevos por hora y por dirección */
async function limitar(req){
  if(!conBase()) return;
  const k = `nom:${ipDe(req)}`;
  const [r] = await q(`SELECT n FROM intentos WHERE clave=$1 AND desde > NOW() - INTERVAL '60 minutes'`, [k]);
  if(r && r.n >= 30) throw error(429, 'Demasiados nombres nuevos. Probá más tarde.', 'demasiados_intentos');
  await q(`INSERT INTO intentos (clave, n, desde) VALUES ($1, 1, NOW())
    ON CONFLICT (clave) DO UPDATE SET
      n = CASE WHEN intentos.desde > NOW() - INTERVAL '60 minutes' THEN intentos.n + 1 ELSE 1 END,
      desde = CASE WHEN intentos.desde > NOW() - INTERVAL '60 minutes' THEN intentos.desde ELSE NOW() END`, [k]);
}

module.exports = async (req, res) => {
  try{
    if(req.method !== 'GET') throw error(405, 'Método no permitido');
    const p = parametros(req), nombre = String(p.n || '').normalize('NFC').trim(), lang = String(p.l || '');
    if(!NOMBRE_OK.test(nombre) || !IDIOMAS.includes(lang)) throw error(400, 'Datos inválidos');
    const clave = `${lang}|${nombre.toLocaleLowerCase()}`;
    let buf = await buscar(clave);
    if(!buf){
      const S = SERVICIOS.google;
      if(!S.configurado()) throw error(503, 'Falta GOOGLE_TTS_API_KEY', 'sin_voz');
      await limitar(req);
      buf = await S.generar(`${nombre}.`, lang, `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Leda`).catch(e => { if(e.servicio) throw error(502, e.message); throw e; });
      await guardar(clave, buf);
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.end(buf);
  }catch(e){
    if(!e.status) console.error(e);
    responder(res, e.status || 500, {error: e.status ? e.message : 'Error del servidor', codigo: e.codigo});
  }
};
