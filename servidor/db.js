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
  `CREATE INDEX IF NOT EXISTS grabaciones_global ON grabaciones(global) WHERE global`
];

async function q(texto, params){
  const c = conectar();
  if(!listo) listo = (async()=>{ for(const s of ESQUEMA) await c(s); })().catch(e=>{ listo=null; throw e; });
  await listo;
  return c(texto, params);
}

module.exports = { q };
