/* Ayudas comunes para las funciones de api/: leer el cuerpo, responder, errores. */
const { leerSesion } = require('./sesion');
const { q } = require('./db');

function responder(res, status, datos){
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(datos));
}
/* codigo: para que el juego muestre el error en el idioma que eligió el grande (idiomas/grandes.js → err_<codigo>) */
const error = (status, mensaje, codigo) => Object.assign(new Error(mensaje), {status, codigo});

async function cuerpo(req){
  if(req.body !== undefined && req.body !== null && typeof req.body === 'object') return req.body;
  if(typeof req.body === 'string') return req.body ? JSON.parse(req.body) : {};
  let txt = '';
  for await (const parte of req){ txt += parte; if(txt.length > 3e6) throw error(413, 'Demasiado grande'); }
  try{ return txt ? JSON.parse(txt) : {}; }catch(e){ throw error(400, 'JSON inválido'); }
}
function parametros(req){
  if(req.query) return req.query;
  const u = new URL(req.url, 'http://x'); return Object.fromEntries(u.searchParams);
}

/* el usuario de la sesión (o null) */
async function usuarioDe(req){
  const s = leerSesion(req); if(!s) return null;
  const filas = await q('SELECT id, email, nombre, es_admin FROM usuarios WHERE id=$1', [s.uid]);
  return filas[0] || null;
}
async function exigirUsuario(req){ const u = await usuarioDe(req); if(!u) throw error(401, 'Tenés que entrar con tu cuenta', 'sin_sesion'); return u; }

/* envuelve un manejador: métodos permitidos + errores prolijos */
function manejar(metodos){
  return async (req, res) => {
    try{
      const fn = metodos[req.method];
      if(!fn) throw error(405, 'Método no permitido');
      const r = await fn(req, res);
      if(!res.writableEnded) responder(res, 200, r === undefined ? {ok:true} : r);
    }catch(e){
      if(!e.status) console.error(e);
      responder(res, e.status || 500, {error: e.status ? e.message : 'Error del servidor', codigo: e.codigo});
    }
  };
}

module.exports = { responder, error, cuerpo, parametros, usuarioDe, exigirUsuario, manejar };
