#!/usr/bin/env node
/* Genera los audios de los nombres de los 6 personajes en los 5 idiomas */

const fs = require('fs');
const path = require('path');

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

const IDIOMAS = ['es', 'en', 'fr', 'it', 'ar'];

const NOMBRES = {
  luna:   { es: 'Luna',   en: 'Luna',  fr: 'Luna',  it: 'Luna',  ar: 'luna|لونا' },
  toby:   { es: 'Toby',   en: 'Toby',  fr: 'Toby',  it: 'Toby',  ar: 'toby|توبي' },
  coco:   { es: 'Coco',   en: 'Coco',  fr: 'Coco',  it: 'Coco',  ar: 'coco|كوكو' },
  tigre:  { es: 'Tigre',  en: 'Tiger', fr: 'Tigre', it: 'Tigre', ar: 'an-nimr|النمر' },
  leon:   { es: 'Leo',    en: 'Leo',   fr: 'Léo',   it: 'Leo',   ar: 'layth|ليث' },
  jirafa: { es: 'Rafa',   en: 'Raffi', fr: 'Rafa',  it: 'Raffa', ar: 'zarafa|زرافة' }
};

function textoHabla(s, lang) {
  s = String(s ?? '').trim();
  if (lang === 'ar' && s.includes('|')) {
    const i = s.indexOf('|');
    return s.slice(i + 1).trim();
  }
  return s;
}

(async () => {
  const S = SERVICIOS.google;
  if (!S.configurado()) {
    console.error('ERROR: Falta GOOGLE_TTS_API_KEY en .env');
    process.exit(1);
  }

  const manifestFile = path.join(AUDIO_DIR, 'manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestFile)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8')); } catch (e) {}
  }

  console.log('Generando audios para los nombres de los 6 personajes...');

  for (const lang of IDIOMAS) {
    const vozLeda = `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Leda`;
    const targetDir = path.join(AUDIO_DIR, lang, 'personajes');
    fs.mkdirSync(targetDir, { recursive: true });

    for (const [charId, langs] of Object.entries(NOMBRES)) {
      const raw = langs[lang];
      const texto = textoHabla(raw, lang);
      const dest = path.join(targetDir, `${charId}.mp3`);
      const relPath = `audio/${lang}/personajes/${charId}.mp3`;
      const id = `${lang}:personaje:${charId}`;

      try {
        const audioBuf = await S.generar(texto, lang, vozLeda);
        fs.writeFileSync(dest, audioBuf);
        manifest[id] = relPath;
        console.log(`[${lang}] ${id} -> "${texto}" (${relPath})`);
      } catch (e) {
        console.error(`Error en ${id}:`, e.message);
      }
      await new Promise(r => setTimeout(r, 120));
    }
  }

  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));
  const audioJsContent = `/* Generado automáticamente por scripts/audios.js */
window.STATIC_AUDIO = new Map(${JSON.stringify(Object.entries(manifest))});
`;
  fs.writeFileSync(path.join(AUDIO_DIR, 'audio.js'), audioJsContent);
  console.log('\n¡Audios de personajes sincronizados en manifest.json y audio.js!');
})();
