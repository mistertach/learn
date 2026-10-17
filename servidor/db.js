/* La base de datos. En Vercel usa Neon (por HTTP); en tu compu, cualquier Postgres.
   Las tablas se crean solas la primera vez. */
const URL_DB = process.env.DATABASE_URL || '';
let consultar = null, listo = null;

function conectar(){
  if(consultar) return consultar;
  if(!URL_DB) throw Object.assign(new Error('Falta DATABASE_URL'), {status:500});
  if(/neon\.tech/.test(URL_DB)){
    const { neon } = require('@neondatabase/serverless');
    const sql = neon(URL_DB);
    consultar = (texto, params=[]) => sql.query(texto, params);
  } else {
    const { Pool } = require('pg');
    const pool = new Pool({ connectionString: URL_DB });
    consultar = async (texto, params=[]) => (await pool.query(texto, params)).rows;
  }
  return consultar;
}

const ESQUEMA = [
  `CREATE TABLE IF NOT EXISTS usuarios (
     id SERIAL PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     nombre TEXT NOT NULL DEFAULT '',
     hash TEXT NOT NULL,
     es_admin BOOLEAN NOT NULL DEFAULT FALSE,
     creado TIMESTAMPTZ NOT NULL DEFAULT NOW())`,
  `CREATE TABLE IF NOT EXISTS alumnos (
     id SERIAL PRIMARY KEY,
     usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
     nombre TEXT NOT NULL,
     datos JSONB NOT NULL DEFAULT '{}'::jsonb,
     bloqueados JSONB NOT NULL DEFAULT '[]'::jsonb,
     creado TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     actualizado TIMESTAMPTZ NOT NULL DEFAULT NOW())`,
  `CREATE TABLE IF NOT EXISTS grabaciones (
     usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
     clave TEXT NOT NULL,
     tipo TEXT NOT NULL,
     audio TEXT NOT NULL,
     global BOOLEAN NOT NULL DEFAULT FALSE,
     actualizado TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     PRIMARY KEY (usuario_id, clave))`,
  `CREATE INDEX IF NOT EXISTS alumnos_usuario ON alumnos(usuario_id)`,
  // al cambiar la contraseña sube clave_ver y se cierran las sesiones viejas
  `ALTER TABLE usuarios ADD COLUMN IF NOT EXISTS clave_ver INTEGER NOT NULL DEFAULT 0`,
  // el administrador puede abrir todo a un chico (lugares y juegos) para probar
  `ALTER TABLE alumnos ADD COLUMN IF NOT EXISTS todo_abierto BOOLEAN NOT NULL DEFAULT FALSE`,
  // pedidos de "olvidé mi contraseña": se guarda el hash del token, no el token
  `CREATE TABLE IF NOT EXISTS recuperos (
     token TEXT PRIMARY KEY,
     usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
     creado TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     vence TIMESTAMPTZ NOT NULL)`,
  // límite de intentos (entrar, registrarse, "olvidé mi contraseña"): clave, cuántos y desde cuándo
  `CREATE TABLE IF NOT EXISTS intentos (
     clave TEXT PRIMARY KEY,
     n INTEGER NOT NULL DEFAULT 1,
     desde TIMESTAMPTZ NOT NULL DEFAULT NOW())`,
  `CREATE INDEX IF NOT EXISTS grabaciones_global ON grabaciones(global) WHERE global`,
  // audios de la prueba de voces (voces.html): se guardan para no pagar dos veces el mismo
  // el nombre de cada chico dicho con la voz natural (api/nombre.js), compartido entre quienes se llaman igual
  `CREATE TABLE IF NOT EXISTS nombres_voz (
     clave TEXT PRIMARY KEY,
     audio TEXT NOT NULL,
     creado TIMESTAMPTZ NOT NULL DEFAULT NOW())`,
  `CREATE TABLE IF NOT EXISTS voces_prueba (
     clave TEXT PRIMARY KEY,
     servicio TEXT NOT NULL,
     lang TEXT NOT NULL,
     voz TEXT NOT NULL,
     texto TEXT NOT NULL,
     caracteres INTEGER NOT NULL,
     tipo TEXT NOT NULL,
     audio TEXT NOT NULL,
     creado TIMESTAMPTZ NOT NULL DEFAULT NOW())`
];

async function q(texto, params){
  const c = conectar();
  if(!listo) listo = (async()=>{ for(const s of ESQUEMA) await c(s); })().catch(e=>{ listo=null; throw e; });
  await listo;
  return c(texto, params);
}

module.exports = { q };
