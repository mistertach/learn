#!/usr/bin/env node
/* Re-genera los audios que contienen {N} con el nombre 'Luna' en lugar de 'Nico' */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const RAIZ = path.join(__dirname, '..');
const AUDIO_DIR = path.join(RAIZ, 'audio');

// Cargar .env
try {
  const envContent = fs.readFileSync(path.join(RAIZ, '.env'), 'utf8');
  for (const line of envContent.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
} catch (e) {}

const { GOOGLE_LOCAL, SERVICIOS } = require('../servidor/voces');

const NOMBRE_DEFECTO = 'Luna';
const soloArg = (process.argv.find(x => x.startsWith('--solo=')) || '').split('=')[1];
const IDIOMAS = soloArg ? [soloArg] : ['es', 'en', 'fr', 'it', 'ar'];

function obtenerCapitulosDisponibles() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(RAIZ, 'capitulos.js'), 'utf8'), ctx);
  return ctx.window.CAPITULOS || [];
}

function cargarCapitulo(capId) {
  const TEXTOS = {}, PACKS = {}, BASES = {};
  const ctx = {
    window: {},
    registrarIdioma: (o) => { PACKS[o.codigo] = o; },
    registrarCapitulo: (o) => { BASES[o.id] = o; },
    registrarTextos: (id, lg, o) => { (TEXTOS[id] = TEXTOS[id] || {})[lg] = o; },
    console
  };
  ctx.window = ctx;
  vm.createContext(ctx);

  for (const l of ['es', 'en', 'fr', 'it', 'ar']) {
    const f = path.join(RAIZ, 'idiomas', `${l}.js`);
    if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx);
  }

  const fBase = path.join(RAIZ, 'capitulos', capId, 'base.js');
  if (fs.existsSync(fBase)) vm.runInContext(fs.readFileSync(fBase, 'utf8'), ctx);

  for (const l of ['es', 'en', 'fr', 'it', 'ar']) {
    const fLang = path.join(RAIZ, 'capitulos', capId, `${l}.js`);
    if (fs.existsSync(fLang)) vm.runInContext(fs.readFileSync(fLang, 'utf8'), ctx);
  }

  return { PACKS, base: BASES[capId], textos: TEXTOS[capId] };
}

function textoHabla(s, lang) {
  s = String(s ?? '').replace(/\{N\}/g, NOMBRE_DEFECTO).replace(/\{n\}/g, '5').replace(/\*/g, '');
  if (lang === 'ar' && s.includes('|')) {
    const i = s.indexOf('|');
    return s.slice(i + 1).trim();
  }
  return s.trim();
}

function sincronizarManifest(nuevasEntradas) {
  const manifestFile = path.join(AUDIO_DIR, 'manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestFile)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8')); } catch (e) {}
  }
  Object.assign(manifest, nuevasEntradas);
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));

  const audioJsContent = `/* Generado automáticamente por scripts/audios.js */
window.STATIC_AUDIO = new Map(${JSON.stringify(Object.entries(manifest))});
`;
  fs.writeFileSync(path.join(AUDIO_DIR, 'audio.js'), audioJsContent);
}

(async () => {
  const S = SERVICIOS.google;
  if (!S.configurado()) {
    console.error('ERROR: Falta GOOGLE_TTS_API_KEY en .env');
    process.exit(1);
  }

  const caps = obtenerCapitulosDisponibles();
  const items = [];

  for (const capId of caps) {
    const datos = cargarCapitulo(capId);
    for (const lang of IDIOMAS) {
      const b = datos.base, t = datos.textos && datos.textos[lang];
      if (!b || !t) continue;

      for (const k of (b.orden || [])) {
        const te = t.estaciones && t.estaciones[k];
        if (!te || !te.cuento || !te.cuento.paginas) continue;

        te.cuento.paginas.forEach((rawText, i) => {
          const raw = typeof rawText === 'string' ? rawText : (rawText && rawText.texto);
          if (raw && raw.includes('{N}')) {
            const id = `${lang}:${capId}:${k}:cuento:${i}`;
            const texto = textoHabla(raw, lang);
            const archivo = `${k}-cuento-${i}.mp3`;
            const relPath = `audio/${lang}/${capId}/${archivo}`;
            const dest = path.join(AUDIO_DIR, lang, capId, archivo);
            items.push({ capId, lang, k, i, id, raw, texto, relPath, dest });
          }
        });
      }
    }
  }

  console.log(`Encontrados ${items.length} audios de cuentos con {N} para actualizar a Luna.`);
  const soloVer = process.argv.includes('--ver');
  if (soloVer) {
    console.log('Muestra de los primeros 5:');
    console.log(items.slice(0, 5).map(x => `[${x.lang}] ${x.id}: "${x.texto}" -> ${x.relPath}`).join('\n'));
    return;
  }

  const manifestUpdates = {};
  let hechos = 0, errores = 0;

  for (const it of items) {
    const vozLeda = `${GOOGLE_LOCAL[it.lang]}-Chirp3-HD-Leda`;
    let intentos = 0;
    while (intentos < 3) {
      try {
        const audioBuf = await S.generar(it.texto, it.lang, vozLeda);
        fs.mkdirSync(path.dirname(it.dest), { recursive: true });
        fs.writeFileSync(it.dest, audioBuf);
        manifestUpdates[it.id] = it.relPath;
        hechos++;
        if (hechos % 20 === 0 || hechos === items.length) {
          console.log(`Progreso: ${hechos} / ${items.length}`);
        }
        break;
      } catch (e) {
        intentos++;
        if (/429|RESOURCE_EXHAUSTED/i.test(e.message)) {
          console.log(`Pausa por tasa de peticiones (429)... esperando 10s`);
          await new Promise(r => setTimeout(r, 10000));
        } else {
          console.error(`Error en ${it.id} (${it.texto}):`, e.message);
          await new Promise(r => setTimeout(r, 1500));
        }
        if (intentos >= 3) errores++;
      }
    }
    await new Promise(r => setTimeout(r, 150));
  }

  sincronizarManifest(manifestUpdates);
  console.log(`\n¡Finalizado! ${hechos} audios actualizados a 'Luna'. Errores: ${errores}`);
})();
