/* Contraseñas (scrypt) y sesiones (cookie firmada con SESSION_SECRET). Sin dependencias. */
const crypto = require('crypto');
const COOKIE = 'aventuras_sesion';
const DURA = 1000*60*60*24*180;   // 180 días: que no tengan que entrar a cada rato

function secreto(){
  const s = process.env.SESSION_SECRET || '';
  if(s.length < 16) throw Object.assign(new Error('Falta SESSION_SECRET (mínimo 16 caracteres)'), {status:500});
  return s;
}
const firmar = txt => crypto.createHmac('sha256', secreto()).update(txt).digest('base64url');

function hashClave(clave){
  const sal = crypto.randomBytes(16);
  const h = crypto.scryptSync(clave, sal, 64);
  return `scrypt$${sal.toString('base64')}$${h.toString('base64')}`;
}
function claveOk(clave, guardado){
  const [tipo, sal, h] = String(guardado).split('$'); if(tipo !== 'scrypt') return false;
  const esperado = Buffer.from(h, 'base64');
  const otro = crypto.scryptSync(clave, Buffer.from(sal, 'base64'), esperado.length);
  return crypto.timingSafeEqual(esperado, otro);
}

/* v = la versión de la contraseña (usuarios.clave_ver): si cambia, la cookie deja de valer */
function ponerSesion(res, uid, v=0){
  const datos = Buffer.from(JSON.stringify({uid, v, exp: Date.now()+DURA})).toString('base64url');
  const valor = `${datos}.${firmar(datos)}`;
  const seguro = process.env.VERCEL || process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${COOKIE}=${valor}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${Math.floor(DURA/1000)}${seguro}`);
}
function borrarSesion(res){ res.setHeader('Set-Cookie', `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`); }
function leerSesion(req){
  const m = String(req.headers.cookie || '').match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`)); if(!m) return null;
  const [datos, firma] = m[1].split('.'); if(!datos || !firma) return null;
  const esperado = firmar(datos);
  if(firma.length !== esperado.length || !crypto.timingSafeEqual(Buffer.from(firma), Buffer.from(esperado))) return null;
  try{ const s = JSON.parse(Buffer.from(datos, 'base64url').toString()); return s.exp > Date.now() ? s : null; }catch(e){ return null; }
}

/* una contraseña provisoria fácil de dictar (sin 0/O ni 1/l) */
function claveProvisoria(){
  const letras = 'abcdefghjkmnpqrstuvwxyz23456789', b = crypto.randomBytes(10);
  let s = ''; for(let i=0;i<10;i++){ s += letras[b[i] % letras.length]; if(i===4) s += '-'; }
  return s;
}
const hashToken = t => crypto.createHash('sha256').update(String(t)).digest('hex');
const nuevoToken = () => crypto.randomBytes(32).toString('base64url');

module.exports = { hashClave, claveOk, ponerSesion, borrarSesion, leerSesion, claveProvisoria, hashToken, nuevoToken };
