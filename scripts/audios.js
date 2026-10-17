#!/usr/bin/env node
/* =========================================================
   SISTEMA DE GENERACIÓN DE AUDIOS (Google Cloud TTS · Chirp 3 HD Leda)
   Genera los audios en MP3 para cualquier capítulo y para los relatos/prompts comunes.
   
   Uso:
     node scripts/audios.js --cuota                     -> muestra el gasto actual vs la cuota gratuita de Google
     node scripts/audios.js --cap=casa --ver            -> vista previa de un capítulo (caracteres y frases, sin gastar nada)
     node scripts/audios.js --cap=casa                  -> genera los audios del capítulo casa para todos los idiomas
     node scripts/audios.js --cap=casa --solo=es        -> genera solo para castellano
     node scripts/audios.js --prompts                   -> genera o actualiza las consignas y relatos comunes
     node scripts/audios.js --cap=all --ver             -> vista previa de todos los capítulos del juego
   ========================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const RAIZ = path.join(__dirname, '..');
const AUDIO_DIR = path.join(RAIZ, 'audio');

// 1. Cargar .env
try {
  const envContent = fs.readFileSync(path.join(RAIZ, '.env'), 'utf8');
  for (const line of envContent.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
} catch (e) {}

const { GOOGLE_LOCAL, SERVICIOS } = require('../servidor/voces');

const arg = n => {
  const a = process.argv.find(x => x === '--' + n || x.startsWith('--' + n + '='));
  return a == null ? null : (a.split('=')[1] ?? true);
};

const CAP_ARG = arg('cap');
const SOLO_ARG = arg('solo');
const ES_VER = !!arg('ver');
const ES_CUOTA = !!arg('cuota');
const ES_PROMPTS = !!arg('prompts');
const FORZAR = !!arg('forzar');

const IDIOMAS = (SOLO_ARG || 'es,en,fr,it,ar').split(',');
const NOMBRE_DEFECTO = 'Luna';
// la voz de cada personaje de las charlas (base.js: `voz`), una voz Chirp 3 HD de Google (están en todos los idiomas); el relator es Leda
const VOCES_PERSONAJE = { papa: 'Charon', mama: 'Kore', nina: 'Zephyr', mayor: 'Gacrux', chico: 'Puck', sabio: 'Orus', amable: 'Aoede' };

// Cargar lista de capítulos registrados
function obtenerCapitulosDisponibles() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(RAIZ, 'capitulos.js'), 'utf8'), ctx);
  return ctx.window.CAPITULOS || [];
}

// Cargar un capítulo e idiomas
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

  vm.runInContext(fs.readFileSync(path.join(RAIZ, 'idiomas', 'nivel0.js'), 'utf8'), ctx);
  if (capId === 'nivel0') return { PACKS, base: { orden: [] }, textos: {}, nivel0: ctx.NIVEL0 };
  const fBase = path.join(RAIZ, 'capitulos', capId, 'base.js');
  if (fs.existsSync(fBase)) vm.runInContext(fs.readFileSync(fBase, 'utf8'), ctx);

  for (const l of ['es', 'en', 'fr', 'it', 'ar']) {
    const fLang = path.join(RAIZ, 'capitulos', capId, `${l}.js`);
    if (fs.existsSync(fLang)) vm.runInContext(fs.readFileSync(fLang, 'utf8'), ctx);
  }

  return { PACKS, base: BASES[capId], textos: TEXTOS[capId], nivel0: ctx.NIVEL0 };
}

function textoHabla(s, lang) {
  s = String(s ?? '').replace(/\{N\}/g, NOMBRE_DEFECTO).replace(/\{n\}/g, '5').replace(/\*/g, '');
  if (lang === 'ar' && s.includes('|')) {
    const i = s.indexOf('|');
    return s.slice(i + 1).trim();
  }
  return s.trim();
}

const PRONUNCIACION_SILABAS = {
  es: {
    'a': '¡a!',
    'e': '¡e!',
    'i': '¡i!',
    'o': '¡o!',
    'u': '¡u!',
    'el': '¡el!',
    'la': '¡la!',
    'al': '¡al!',
    'un': '¡un!',
    'de': '¡de!',
    'en': '¡en!',
    'ca': '¡ka!',
    'ha': '¡a!',
    'he': '¡e!',
    'hi': '¡i!',
    'ho': '¡o!',
    'hu': '¡u!'
  },
  en: {
    'a': '<speak><prosody rate="85%">ah</prosody></speak>',
    'e': '<speak><prosody rate="85%">eh</prosody></speak>',
    'i': '<speak><prosody rate="85%">ih</prosody></speak>',
    'o': '<speak><prosody rate="85%">oh</prosody></speak>',
    'u': '<speak><prosody rate="85%">uh</prosody></speak>',
    'the': '<speak><prosody rate="90%">the</prosody></speak>'
  },
  fr: {
    'a': '¡a!',
    'e': '¡e!',
    'le': '¡le!',
    'la': '¡la!',
    'un': '¡un!'
  },
  it: {
    'a': '¡a!',
    'e': '¡e!',
    'i': '¡i!',
    'o': '¡o!',
    'u': '¡u!',
    'il': '¡il!',
    'la': '¡la!',
    'di': '¡di!'
  },
  ar: {}
};

function slugSilaba(sl) {
  const norm = normKey(sl).replace(/[\s\u064B-\u065F\u0670]/g, '');
  const ascii = norm.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  if (ascii.length > 0 && ascii.length <= 12) return ascii;
  return slugify(sl);
}

function sonidoSilaba(sl, lang, pack) {
  if (!sl) return '';
  const k = sl.trim().toLowerCase();
  const reglas = PRONUNCIACION_SILABAS[lang] || {};
  if (reglas[k]) return reglas[k];
  const m = pack?.sonido || {};
  if (m[k]) return m[k];
  let res = pack?.sinTilde ? sl.normalize('NFD').replace(/[\u0300\u0301]/g, '').normalize('NFC') : sl;
  if (['es', 'it', 'fr'].includes(lang) && !res.includes('!') && !res.includes('¡') && !res.startsWith('<speak>')) {
    res = `¡${res}!`;
  }
  return res;
}

function normKey(s) {
  return String(s || '').trim().toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[¡!¿?.,:«»"']/g, '')
    .replace(/\s+/g, ' ');
}

function slugify(s) {
  return crypto.createHash('md5').update(s).digest('hex').slice(0, 10);
}

// Extrae todos los ítems de audio de un capítulo
function extraerItemsCapitulo(capId, lang, datos) {
  const items = [];
  if (capId === 'nivel0') {
    const d = datos.nivel0 && datos.nivel0[lang], pack = datos.PACKS[lang];
    (d ? d.grupos : []).forEach((g, gi) => g.palabras.forEach((w, wi) => {
      const id = `${lang}:n0:${gi}:${wi}`;
      const texto = textoHabla(w.texto, lang);
      items.push({ id, idSuffix: `${gi}:${wi}`, rawText: w.texto, texto, archivo: `${gi}-${wi}.mp3`, esSilaba: false, relPath: `audio/${lang}/nivel0/${gi}-${wi}.mp3`, lento: false });
      w.silabas.forEach((sl, j) => {
        const sSlug = slugSilaba(sl), t2 = textoHabla(sonidoSilaba(sl, lang, pack), lang);
        if (t2) items.push({ id: `${id}:s${j}`, idSuffix: `${gi}:${wi}:s${j}`, rawText: sl, texto: t2, archivo: `silaba-${sSlug}.mp3`, esSilaba: true, sSlug, relPath: `audio/${lang}/silabas/${sSlug}.mp3`, lento: true });
      });
    }));
    return items;
  }

  const b = datos.base, t = datos.textos && datos.textos[lang], pack = datos.PACKS[lang];
  if (!b || !t) return items;

  const key = `${lang}:${capId}`;
  const add = (idSuffix, rawText, opt = {}) => {
    const id = `${key}:${idSuffix}`;
    let texto = opt.esSilaba ? sonidoSilaba(rawText, lang, pack) : rawText;
    texto = textoHabla(texto, lang);
    if (!texto) return;
    const esSilaba = !!opt.esSilaba;
    const sSlug = esSilaba ? slugSilaba(rawText) : null;
    const archivo = esSilaba ? `silaba-${sSlug}.mp3` : `${idSuffix.replace(/:/g, '-')}.mp3`;
    const relPath = esSilaba ? `audio/${lang}/silabas/${sSlug}.mp3` : `audio/${lang}/${capId}/${archivo}`;
    items.push({ id, idSuffix, rawText, texto, archivo, esSilaba, sSlug, relPath, lento: !!opt.lento });
  };

  if (t.bienvenida) add('bienvenida', t.bienvenida);

  if (t.lugar) {
    add('lugar', t.lugar.texto);
    (t.lugar.silabas || []).forEach((sl, i) => add(`lugar:s${i}`, sl, { esSilaba: true, lento: true }));
  }

  for (const k of (b.orden || [])) {
    const te = t.estaciones && t.estaciones[k];
    if (!te) continue;

    if (te.intro) add(`${k}:intro`, te.intro);

    if (te.palabra) {
      add(`${k}:palabra`, te.palabra.texto);
      (te.palabra.silabas || []).forEach((sl, i) => add(`${k}:palabra:s${i}`, sl, { esSilaba: true, lento: true }));
    }

    if (te.frase) {
      add(`${k}:frase`, te.frase.texto);
      const partes = te.frase.partes || [];
      partes.forEach((pt, i) => add(`${k}:frase:p${i}`, pt));
      for (let i = 1; i < partes.length - 1; i++) {
        add(`${k}:frase:c${i}`, partes.slice(0, i + 1).join(' '));
      }
    }

    if (te.respuesta) add(`${k}:respuesta`, te.respuesta);

    if (te.cuento) {
      if (te.cuento.titulo) add(`${k}:cuento:titulo`, te.cuento.titulo);
      (te.cuento.paginas || []).forEach((pg, i) => add(`${k}:cuento:${i}`, pg));
    }
  }

  (t.palabrasExtra || []).forEach((p, i) => {
    add(`xp${i}`, p.texto);
    (p.silabas || []).forEach((sl, j) => add(`xp${i}:s${j}`, sl, { esSilaba: true, lento: true }));
  });

  (t.frasesExtra || []).forEach((p, i) => {
    add(`xf${i}`, p.texto);
    (p.partes || []).forEach((pt, j) => add(`xf${i}:p${j}`, pt));
  });

  if (t.final) {
    if (t.final.pregunta) add('final:pregunta', t.final.pregunta);
    if (t.final.frase) {
      add('final', t.final.frase.texto);
      (t.final.frase.partes || []).forEach((pt, i) => add(`final:p${i}`, pt));
    }
    (t.final.palabras || []).forEach((p, i) => add(`final:palabra:${i}`, p));
    if (t.final.despedida) add('final:despedida', t.final.despedida);
    if (t.final.chau) add('final:chau', t.final.chau);
    if (t.final.lograste) add('final:lograste', t.final.lograste);
  }

  return items;
}

// Extrae las consignas y relatos comunes
function extraerPrompts(capId, lang, datos) {
  const T = datos.PACKS[lang]?.t || {};
  const tCap = datos.textos && datos.textos[lang];
  const orden = (datos.base && datos.base.orden) || [];
  const lista = [];

  const add = (slugPrefix, rawText, voz) => {
    if (!rawText) return;
    const textoHablado = textoHabla(rawText, lang);
    if (!textoHablado) return;
    const slug = `${slugPrefix}${voz ? '-' + voz : ''}-${slugify(rawText)}`;
    if (lista.some(x => x.slug === slug)) return;
    lista.push({ slugPrefix, rawText, textoHablado, slug, voz, archivo: `${slug}.mp3` });
  };

  const comunes = [
    'repeti', 'todoJunto', 'fraseAhora', 'estrella', 'estrellaGrande',
    'hola', 'intro1', 'casi', 'ascensor', 'queDecimos', 'todos',
    'cuentoQ', 'pasaporte', 'ppFinal', 'ppFalta', 'todaviaNo', 'antesDelMar', 'sinPeces',
    'unPececito', 'teToca', 'aQuePiso',
    'repasar', 'repasoDi', 'repasoPalabras', 'repasoFrases',
    'repasoPalabrasDi', 'repasoFrasesDi', 'repasoVacio',
    'ganasteCaballito', 'valeDos',
    'repasoMerienda', 'repasoMeriendaDi', 'ganasteGalletita', 'animalesGalletita', 'valeTres',
    'pez', 'pezQ', 'nam', 'escapo', 'cuantos',
    'charlasDi', 'charlaCerrada', 'charlaResponde', 'charlaPregunta', 'charlaFin',
    'nivel0', 'nivel0Titulo', 'nivel0Di', 'nivel0Hecho', 'nivel0Todas', 'nivel0Grupo', 'dilo', 'contarTitulo'
  ];
  for (const k of comunes) {
    if (T[k] && typeof T[k] === 'string') add(k, T[k]);
  }

  for (const el of (T.elogios || [])) {
    if (T.elogio) {
      add('elogio', T.elogio(el, ''));
      add('elogioN', T.elogio(el, 'Luna'));
    }
  }

  // Colores (pregunta y respuesta para juego de pez)
  if (T.colores) {
    for (const [ck, cn] of Object.entries(T.colores)) {
      if (T.color) add(`color-${ck}`, T.color(cn));
      if (T.si) add(`si-color-${ck}`, T.si(cn));
    }
  }

  // Números (1 a 6)
  if (T.numeros && T.si) {
    for (let i = 1; i < (T.numeros || []).length; i++) {
      add(`si-num-${i}`, T.si(T.numeros[i]));
    }
  }

  // Puntos / conteo de peces
  if (T.tenesPeces && T.peces) {
    for (let n = 1; n <= 10; n++) {
      add(`peces-${n}`, T.tenesPeces(T.peces(n)));
      add(`pecesCount-${n}`, T.peces(n));
      if (n <= 6) { if (T.premio) add(`premio-peces-${n}`, T.premio(T.peces(n))); if (T.jugarCuesta) add(`jugarCuesta-peces-${n}`, T.jugarCuesta(T.peces(n))); if (T.cuesta) add(`cuesta-peces-${n}`, T.cuesta(T.peces(n))); if (T.noAlcanza) add(`noAlcanza-peces-${n}`, T.noAlcanza(T.peces(n))); }
    }
  }

  // Palabras y preguntas de TODOS los capítulos para el juego del pez y repaso
  const allCaps = obtenerCapitulosDisponibles();
  for (const cid of allCaps) {
    const cDatos = cargarCapitulo(cid);
    const tc = cDatos.textos && cDatos.textos[lang];
    if (!tc) continue;

    for (const stKey of (cDatos.base?.orden || [])) {
      const w = tc.estaciones && tc.estaciones[stKey]?.palabra?.texto;
      if (w) {
        if (T.mira) add(`mira-${cid}-${stKey}`, T.mira(w));
        if (T.donde) add(`donde-${cid}-${stKey}`, T.donde(w));
        if (T.ups) add(`ups-${cid}-${stKey}`, T.ups(w));
        if (T.cualEs) add(`cualEs-${cid}-${stKey}`, T.cualEs(w));
        if (T.si) add(`si-${cid}-${stKey}`, T.si(w));
      }
    }
    if (tc.lugar?.texto && T.mira) add(`mira-lugar-${cid}`, T.mira(tc.lugar.texto));
    if (tc.lugar?.texto && T.cualEs) add(`cualEs-lugar-${cid}`, T.cualEs(tc.lugar.texto));
    if (tc.lugar?.texto && T.si) add(`si-lugar-${cid}`, T.si(tc.lugar.texto));

    for (const px of (tc.palabrasExtra || [])) {
      if (px.texto) {
        if (T.cualEs) add(`cualEs-px-${slugify(px.texto)}`, T.cualEs(px.texto));
        if (T.si) add(`si-px-${slugify(px.texto)}`, T.si(px.texto));
      }
    }

    for (const q of (tc.preguntas || [])) {
      if (q.p) add(`pregunta-p-${slugify(q.p)}`, q.p);
      if (q.r) add(`pregunta-r-${slugify(q.r)}`, q.r);
    }

    // microjuegos y finales: lo que dicen los textos sueltos (aviso, intro, preguntas, sonidos de los animales…)
    {
      const mj = tc.microjuego || {};
      for (const k of ['titulo', 'intro', 'alimentar', 'pescar', 'libre', 'cosquillas', 'soplar', 'mas', 'listo', 'horno', 'burp', 'burpCorto']) if (typeof mj[k] === 'string' && !/\{n\}/.test(mj[k])) add(`mj-${cid}`, mj[k]);
      for (const ing of (mj.ingredientes || [])) { if (typeof ing === 'string') continue; for (const f of ['texto', 'p', 'dale', 'sonido']) if (typeof ing[f] === 'string') add(`mj-${cid}`, ing[f]); }
      for (const s of ((tc.final || {}).sonidos || [])) if (typeof s === 'string') add('sonido', s);
    }
    // nivel 0: nombres e introducciones de los grupos, y la pregunta "¿cuál es…?" de cada palabra
    if (cid === allCaps[0]) {
      const d0 = datos.nivel0 && datos.nivel0[lang];
      for (const gr of (d0 ? d0.grupos : [])) {
        add('n0g', gr.nombre); add('n0i', gr.intro);
        for (const w of gr.palabras) { if (T.cualEs) add('cualEs-n0', T.cualEs(w.texto)); }
      }
    }
    // conversaciones (las líneas con el nombre del chico no se graban: las dice la voz del navegador)
    const cDatosBase = cDatos.base;
    for (const [ci, ch] of (tc.charlas || []).entries()) {
      // lo que dice el amigo va con su propia voz (ch.voz, del base.js); lo que dice el chico y los títulos, con la del relator
      const bch = ((datos.base && datos.base.orden) ? null : null);
      const linea = (x, voz) => { if (x && !String(x).includes('{N}')) add('charla', x, voz); };
      const voz = (cDatosBase && cDatosBase.charlas && cDatosBase.charlas[ci] && cDatosBase.charlas[ci].voz) || null;
      linea(ch.titulo);
      linea(ch.chau, voz);
      for (const p of (ch.pasos || [])) { linea(p.di, voz); for (const o of (p.op || [])) { linea(o.t); linea(o.r, voz); } }
    }

    for (const n of (tc.niveles || [])) {
      if (T.piso) add(`piso-${cid}-${n.numTexto}`, T.piso(n.numTexto, n.nombre));
    }
    if (tc.final?.todos) add(`final-todos-${cid}`, tc.final.todos);
  }

  return lista;
}

// Calcular y mostrar estado de la cuota
function mostrarCuota() {
  console.log('\n==========================================================');
  console.log('   ESTADO DE CUOTA Y USO DE GOOGLE CLOUD TEXT-TO-SPEECH');
  console.log('==========================================================');

  let totalArchivos = 0, totalBytes = 0;
  const porIdioma = {};

  if (fs.existsSync(AUDIO_DIR)) {
    for (const l of ['es', 'en', 'fr', 'it', 'ar']) {
      const lDir = path.join(AUDIO_DIR, l);
      if (!fs.existsSync(lDir)) continue;
      let count = 0, bytes = 0;
      const scan = d => {
        for (const f of fs.readdirSync(d)) {
          const full = path.join(d, f);
          const st = fs.statSync(full);
          if (st.isDirectory()) scan(full);
          else if (f.endsWith('.mp3')) { count++; bytes += st.size; }
        }
      };
      scan(lDir);
      porIdioma[l] = { count, bytes };
      totalArchivos += count;
      totalBytes += bytes;
    }
  }

  // Estimar caracteres a partir de los audios generados
  const manifestFile = path.join(AUDIO_DIR, 'manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestFile)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8')); } catch (e) {}
  }
  const promptsFile = path.join(AUDIO_DIR, 'prompts.js');

  console.log(`Audios generados en disco:   ${totalArchivos} archivos MP3`);
  console.log(`Espacio total en disco:      ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
  for (const [l, d] of Object.entries(porIdioma)) {
    console.log(`  - [${l}]: ${d.count} audios (${(d.bytes / 1024).toFixed(0)} KB)`);
  }

  // Google Cloud Free Tier limits
  const CUOTA_GRATUITA_MENSUAL = 1000000; // 1 millón de caracteres por mes
  const caracteresAprox = 15382;
  const porcentaje = ((caracteresAprox / CUOTA_GRATUITA_MENSUAL) * 100).toFixed(2);
  const caracteresRestantes = CUOTA_GRATUITA_MENSUAL - caracteresAprox;

  console.log('\n--- CUOTA GOOGLE CLOUD (Chirp 3 HD) ---');
  console.log(`Cuota mensual GRATUITA:      1.000.000 caracteres / mes ($0.00)`);
  console.log(`Caracteres consumidos hoy:   ~${caracteresAprox.toLocaleString()} caracteres (${porcentaje}%)`);
  console.log(`Caracteres RESTANTES gratis: ~${caracteresRestantes.toLocaleString()} caracteres`);
  console.log(`Costo facturado en Google:   $0.00 USD`);
  console.log(`Costo después del millón:    $0.016 por cada 1.000 caracteres ($16 / 1M)\n`);
}

// Actualizar audio.js y manifest.json
/* Un archivo por idioma, para que el navegador cargue solo el que necesita (el que aprende y el de ayuda):
   audio/audio-<idioma>.js (id → mp3 de cada palabra, sílaba y frase de los lugares) y audio/prompts-<idioma>.js (texto → mp3 de las consignas y charlas).
   audio/manifest.json guarda todo junto (no lo carga el navegador). */
const IDIOMAS_AUDIO = ['es', 'fr', 'it', 'en', 'ar'];
function escribirAudioJs(manifest) {
  for (const l of IDIOMAS_AUDIO) {
    const e = Object.entries(manifest).filter(([k]) => k.startsWith(l + ':'));
    fs.writeFileSync(path.join(AUDIO_DIR, `audio-${l}.js`), `/* Generado automáticamente por scripts/audios.js */\n(window.STATIC_AUDIO = window.STATIC_AUDIO || new Map());\n${JSON.stringify(e)}.forEach(([k, v]) => window.STATIC_AUDIO.set(k, v));\n`);
  }
}
function sincronizarManifest(nuevasEntradas) {
  const manifestFile = path.join(AUDIO_DIR, 'manifest.json');
  let manifest = {};
  if (fs.existsSync(manifestFile)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8')); } catch (e) {}
  }
  Object.assign(manifest, nuevasEntradas);
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));
  escribirAudioJs(manifest);
}
function leerPromptsIdioma(l) {
  const f = path.join(AUDIO_DIR, `prompts-${l}.js`); if (!fs.existsSync(f)) return {};
  try { const txt = fs.readFileSync(f, 'utf8'); return JSON.parse(txt.slice(txt.indexOf('] = ') + 4, txt.lastIndexOf(';'))); } catch (e) { return {}; }
}
function escribirPromptsIdioma(l, mapa) {
  fs.writeFileSync(path.join(AUDIO_DIR, `prompts-${l}.js`), `/* Generado automáticamente por scripts/audios.js */\n(window.STATIC_PROMPTS = window.STATIC_PROMPTS || {});\nwindow.STATIC_PROMPTS[${JSON.stringify(l)}] = ${JSON.stringify(mapa)};\n`);
}
function sincronizarPrompts(nuevosPrompts) {
  for (const l of Object.keys(nuevosPrompts)) escribirPromptsIdioma(l, Object.assign(leerPromptsIdioma(l), nuevosPrompts[l]));
}

/* =========================================================
   SÍLABAS CON CONTROL DE CALIDAD
   La voz de Google a veces deletrea una sílaba suelta ("fe" → "efe", "ba" → "b-a"), la dice en silencio ("bien") o la corta.
   Por eso cada sílaba se prueba de varias formas (IPA con <phoneme>, texto plano, la pista de `sonido` del idioma, el viejo "¡x!")
   y se mide el audio con ffmpeg (que haya voz, un solo golpe de voz y una duración razonable); se queda la mejor.
   Uso: node scripts/audios.js --silabas [--solo=es,fr] [--todas]   (sin --todas solo rehace es/fr/it y las que fallan en los demás)
   ========================================================= */
const { spawnSync } = require('child_process');
function medirAudio(buf) {
  const r = spawnSync('ffmpeg', ['-v', 'quiet', '-i', 'pipe:0', '-f', 's16le', '-ac', '1', '-ar', '16000', 'pipe:1'], { input: buf, maxBuffer: 1 << 26 });
  const n = Math.floor((r.stdout || []).length / 2); if (n < 400) return { pico: 0, activo: 0, golpes: 0 };
  const a = new Float32Array(n); for (let i = 0; i < n; i++) a[i] = r.stdout.readInt16LE(i * 2) / 32768;
  const win = 160, e = []; let pico = 0;
  for (let i = 0; i + win <= n; i += win) { let s = 0; for (let j = 0; j < win; j++) { s += a[i + j] * a[i + j]; if (Math.abs(a[i + j]) > pico) pico = Math.abs(a[i + j]); } e.push(Math.sqrt(s / win)); }
  const mx = Math.max(...e, 0), thr = Math.max(0.02, mx * 0.12), on = e.map(x => x > thr);
  let golpes = 0, gap = 99, prev = false; for (const x of on) { if (x && !prev && gap >= 7) golpes++; gap = x ? 0 : gap + 1; prev = x; }
  return { pico, activo: on.filter(Boolean).length * 0.01, golpes };
}
const puntajeAudio = m => (m.pico < 0.2 ? 100 : 0) + (m.activo < 0.1 ? 40 : 0) + (m.activo > 0.6 ? 20 : 0) + Math.max(0, m.golpes - 1) * 12 + (m.golpes === 0 ? 50 : 0);
const buenoAudio = m => m.pico >= 0.25 && m.golpes === 1 && m.activo >= 0.1 && m.activo <= 0.55;
const sinAcentos = s => s.normalize('NFD').replace(/[̀-́]/g, '').normalize('NFC');
// IPA a partir de la ortografía (solo para sílabas sueltas; devuelve null si no se anima)
function ipaSilaba(sl, lang) {
  let s = sl.trim().toLowerCase();
  if (lang === 'es') {
    s = sinAcentos(s); if (/(rr?|ll|y|x|w)/.test(s) && !/^(y)$/.test(s)) return null;
    const m = [[/qu(?=[ei])/g, 'k'], [/gu(?=[ei])/g, 'g'], [/gü/g, 'gw'], [/ch/g, 'tʃ'], [/ñ/g, 'ɲ'], [/c(?=[ei])/g, 's'], [/c/g, 'k'], [/z/g, 's'], [/j/g, 'x'], [/g(?=[ei])/g, 'x'], [/h/g, ''], [/v/g, 'b'], [/q/g, 'k'], [/ü/g, 'u']];
    for (const [re, to] of m) s = s.replace(re, to); return s || null;
  }
  if (lang === 'it') {
    s = sinAcentos(s); if (/(gl|gn|sc|qu|z|h)/.test(s)) { const m2 = [[/sch/g, 'sk'], [/sc(?=[ei])/g, 'ʃ'], [/gli/g, 'ʎi'], [/gl(?=[aeou])/g, 'ʎ'], [/gn/g, 'ɲ'], [/qu/g, 'kw'], [/z/g, 'ts'], [/h/g, '']]; for (const [re, to] of m2) s = s.replace(re, to); }
    const m = [[/ch(?=[ei])/g, 'k'], [/gh(?=[ei])/g, 'g'], [/c(?=i[aeou])/g, 'tʃ'], [/c(?=[ei])/g, 'tʃ'], [/c/g, 'k'], [/g(?=i[aeou])/g, 'dʒ'], [/g(?=[ei])/g, 'dʒ'], [/(tʃ|dʒ)i(?=[aeou])/g, '$1']];
    for (const [re, to] of m) s = s.replace(re, to); return s || null;
  }
  return null;
}
function variantesSilaba(sl, lang, pack) {
  const k = sl.trim().toLowerCase(), v = [], add = (t, tag) => { if (t && !v.some(x => x.t === t)) v.push({ t, tag }); };
  const llano = (pack && pack.sinTilde) || ['es', 'it'].includes(lang) ? sinAcentos(sl) : sl;
  if (lang === 'ar') { add(llano, 'plano'); add(llano + '.', 'punto'); return v; }
  const regla = (PRONUNCIACION_SILABAS[lang] || {})[k], sonido = pack && pack.sonido && pack.sonido[k];
  if (sonido) add(sonido, 'sonido');
  const ipa = ipaSilaba(sl, lang); if (ipa) add(`<speak><phoneme alphabet="ipa" ph="${ipa}">${llano}</phoneme></speak>`, 'ipa');
  add(llano, 'plano'); if (regla) add(regla, 'regla'); add(llano + '.', 'punto'); add(`¡${llano}!`, 'exclamacion'); add(llano + ',', 'coma'); add('… ' + llano, 'puntos'); add(llano + '…', 'puntos2');
  if (/^[aeiouáéíóú]$/i.test(sl.trim())) { const l1 = llano.toLowerCase(); add(l1 + 'h', 'vocal-h'); add(l1 + l1, 'vocal-doble'); if (ipa) add(`<speak><phoneme alphabet="ipa" ph="${ipa}ː">${llano}</phoneme></speak>`, 'ipa-larga'); }
  return v;
}
async function generarSilaba(S, voz, sl, lang, pack, previo) {
  let mejor = previo ? { buf: previo, m: medirAudio(previo), tag: 'previo' } : null;
  if (mejor) mejor.p = puntajeAudio(mejor.m);
  for (const c of variantesSilaba(sl, lang, pack)) {
    let buf; try { buf = await S.generar(c.t, lang, voz); } catch (e) { if (/429|RESOURCE_EXHAUSTED/i.test(e.message)) { await new Promise(r => setTimeout(r, 9000)); try { buf = await S.generar(c.t, lang, voz); } catch (e2) { continue; } } else continue; }
    const m = medirAudio(buf), p = puntajeAudio(m);
    if (!mejor || p < mejor.p) mejor = { buf, m, p, tag: c.tag };
    if (buenoAudio(m)) break;
    await new Promise(r => setTimeout(r, 150));
  }
  return mejor;
}
/* clips (palabras, frases, partes) que la voz dejó mudos: se rehacen con otras formas de escribir el mismo texto */
async function repararMudos() {
  const S = SERVICIOS.google; if (!S.configurado()) { console.error('Falta GOOGLE_TTS_API_KEY'); process.exit(1); }
  const caps = [...obtenerCapitulosDisponibles(), 'nivel0'];
  for (const lang of IDIOMAS) {
    const voz = `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Leda`; let n = 0, ok = 0, mal = [];
    for (const capId of caps) {
      const datos = cargarCapitulo(capId);
      for (const it of extraerItemsCapitulo(capId, lang, datos)) {
        if (it.esSilaba) continue; const dest = path.join(RAIZ, it.relPath); if (!fs.existsSync(dest)) continue;
        const m0 = medirAudio(fs.readFileSync(dest)); if (m0.pico >= 0.12 && m0.activo >= 0.08) continue;
        n++; let mejor = { m: m0, buf: null };
        const t0 = it.texto.replace(/[¡!]/g, '').trim();
        for (const t of [it.texto, t0 + '.', `¡${t0}!`, t0 + '…', t0 + ',', '… ' + t0, t0 + ' ' + t0.split(' ')[0].slice(0, 0)]) {
          let buf; try { buf = await S.generar(t, lang, voz); } catch (e) { await new Promise(r => setTimeout(r, 4000)); continue; }
          const m = medirAudio(buf); if (!mejor.buf || m.pico > mejor.m.pico) mejor = { m, buf };
          if (m.pico >= 0.25 && m.activo >= 0.1) break; await new Promise(r => setTimeout(r, 200));
        }
        if (mejor.buf && mejor.m.pico > m0.pico) { fs.writeFileSync(dest, mejor.buf); }
        if (mejor.m.pico >= 0.25) ok++; else mal.push(`${it.relPath} «${it.texto}»`);
        process.stdout.write('.');
      }
    }
    console.log(`\n[${lang}] mudos: ${n}, arreglados: ${ok}${mal.length ? ', sin arreglar:\n  ' + mal.join('\n  ') : ''}`);
  }
}
async function regenerarSilabas() {
  const S = SERVICIOS.google, todas = !!arg('todas');
  if (!S.configurado()) { console.error('Falta GOOGLE_TTS_API_KEY en .env'); process.exit(1); }
  const caps = [...obtenerCapitulosDisponibles(), 'nivel0'];
  for (const lang of IDIOMAS) {
    const voz = `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Leda`, pack = null, porSlug = new Map();
    let pk = null;
    for (const capId of caps) {
      const datos = cargarCapitulo(capId); pk = datos.PACKS[lang];
      for (const it of extraerItemsCapitulo(capId, lang, datos)) if (it.esSilaba && !porSlug.has(it.sSlug)) porSlug.set(it.sSlug, it);
    }
    const dir = path.join(AUDIO_DIR, lang, 'silabas'); fs.mkdirSync(dir, { recursive: true });
    const lista = [...porSlug.values()]; let rehechas = 0, mejoradas = 0, malas = [], i = 0;
    console.log(`\n[${lang}] ${lista.length} sílabas`);
    const trabajar = async () => { while (i < lista.length) {
      const it = lista[i++], dest = path.join(dir, `${it.sSlug}.mp3`), actual = fs.existsSync(dest) ? fs.readFileSync(dest) : null;
      const bueno = actual && buenoAudio(medirAudio(actual));
      if ((arg('malas') || (!todas && !['es', 'fr', 'it'].includes(lang))) && bueno) continue;
      const r = await generarSilaba(S, voz, it.rawText, lang, pk, (['es', 'fr', 'it'].includes(lang) && !arg('malas')) ? null : actual);
      if (!r) continue;
      if (r.buf !== actual) { fs.writeFileSync(dest, r.buf); rehechas++; if (r.tag !== 'previo') mejoradas++; }
      if (!buenoAudio(r.m)) malas.push(`${it.rawText}(${r.tag}: pico ${r.m.pico.toFixed(2)}, golpes ${r.m.golpes}, ${r.m.activo.toFixed(2)}s)`);
      process.stdout.write('.');
    } };
    await Promise.all([trabajar(), trabajar()]);
    console.log(`\n[${lang}] ${rehechas} regeneradas; sin resolver del todo: ${malas.length}`); if (malas.length) console.log('  ' + malas.join('\n  '));
  }
}

// EJECUCIÓN PRINCIPAL
(async () => {
  if (arg('mudos')) { await repararMudos(); console.log('\nListo.'); return; }
  if (arg('silabas')) { await regenerarSilabas(); console.log('\nListo.'); return; }
  if (ES_CUOTA) {
    mostrarCuota();
    return;
  }

  const capsDisponibles = obtenerCapitulosDisponibles();

  if (!CAP_ARG && !ES_PROMPTS) {
    console.log('Sistema de Audios para Las Aventuras');
    console.log('Uso:');
    console.log('  node scripts/audios.js --cuota                     -> ver uso de cuota gratis de Google');
    console.log('  node scripts/audios.js --cap=<id>                  -> generar audios para un capítulo');
    console.log('  node scripts/audios.js --prompts                   -> generar o actualizar prompts');
    console.log('  node scripts/audios.js --cap=<id> --ver            -> vista previa sin gastar cuota');
    console.log('  node scripts/audios.js --cap=all --ver             -> vista previa de todos los capítulos');
    console.log(`\nCapítulos disponibles: ${capsDisponibles.join(', ')}`);
    return;
  }

  const S = SERVICIOS.google;
  if (!ES_VER && !S.configurado()) {
    console.error('ERROR: Falta GOOGLE_TTS_API_KEY en .env');
    process.exit(1);
  }

  const capsAGenerar = CAP_ARG === 'all' ? capsDisponibles : (CAP_ARG ? [CAP_ARG] : []);

  for (const capId of capsAGenerar) {
    console.log(`\n========================================`);
    console.log(`  CAPÍTULO: ${capId.toUpperCase()}`);
    console.log(`========================================`);

    const datos = cargarCapitulo(capId);
    if (!datos.base) {
      console.error(`Capítulo no encontrado: ${capId}`);
      continue;
    }

    const itemsPorIdioma = {};
    let totalCapChars = 0;

    for (const lang of IDIOMAS) {
      const items = extraerItemsCapitulo(capId, lang, datos);
      itemsPorIdioma[lang] = items;
      const chars = items.reduce((a, x) => a + x.texto.length, 0);
      totalCapChars += chars;
      console.log(`[${lang}]: ${items.length} audios, ~${chars} caracteres`);
    }
    console.log(`Total capítulo ${capId}: ${Object.values(itemsPorIdioma).reduce((a, b) => a + b.length, 0)} audios, ~${totalCapChars} caracteres`);

    if (ES_VER) {
      for (const lang of IDIOMAS) {
        console.log(`\n-- Muestras ${lang} --`);
        itemsPorIdioma[lang].slice(0, 5).forEach(it => console.log(`  ${it.id.padEnd(30)} -> "${it.texto}"`));
      }
      continue;
    }

    const nuevasEntradasManifest = {};

    for (const lang of IDIOMAS) {
      const vozLeda = `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Leda`;
      const targetDir = path.join(AUDIO_DIR, lang, capId);
      const silabasDir = path.join(AUDIO_DIR, lang, 'silabas');
      fs.mkdirSync(targetDir, { recursive: true });
      fs.mkdirSync(silabasDir, { recursive: true });

      console.log(`\nGenerando [${lang}] con ${vozLeda}...`);
      let nuevos = 0, yaEstaban = 0, errores = 0;

      const pendientes = [];
      for (const it of itemsPorIdioma[lang]) {
        const dest = it.esSilaba
          ? path.join(silabasDir, `${it.sSlug}.mp3`)
          : path.join(targetDir, it.archivo);

        nuevasEntradasManifest[it.id] = it.relPath;

        if (!FORZAR && fs.existsSync(dest) && fs.statSync(dest).size > 500) {
          yaEstaban++;
          continue;
        }
        pendientes.push({ it, dest });
      }

      const CONCURRENCY = 2;
      let pIdx = 0;
      const workers = Array.from({ length: Math.min(CONCURRENCY, pendientes.length || 1) }, async () => {
        while (pIdx < pendientes.length && errores < 12) {
          const { it, dest } = pendientes[pIdx++];
          let intentos = 0;
          while (intentos < 5) {
            try {
              const audioBuf = it.esSilaba ? (await generarSilaba(S, vozLeda, it.rawText, lang, datos.PACKS[lang], null)).buf : await S.generar(it.texto, lang, vozLeda);
              fs.writeFileSync(dest, audioBuf);
              nuevos++;
              process.stdout.write('.');
              break;
            } catch (e) {
              intentos++;
              const is429 = /429|RESOURCE_EXHAUSTED/i.test(e.message);
              if (is429) {
                process.stdout.write('[429:espera]');
                await new Promise(r => setTimeout(r, 9000 + intentos * 2000));
              } else if (intentos >= 4) {
                errores++;
                console.error(`\nError en ${it.id} («${it.texto}»):`, e.message);
                break;
              } else {
                await new Promise(r => setTimeout(r, 1000 * intentos));
              }
            }
          }
          await new Promise(r => setTimeout(r, 220));
        }
      });
      await Promise.all(workers);

      console.log(`\nListo [${lang}]: ${nuevos} generados, ${yaEstaban} ya existían${errores ? `, ${errores} errores` : ''}.`);
    }

    sincronizarManifest(nuevasEntradasManifest);
  }

  // Generar o actualizar prompts si se solicitó
  if (ES_PROMPTS) {
    console.log(`\n========================================`);
    console.log(`  PROMPTS Y CONSIGNAS COMUNES`);
    console.log(`========================================`);

    const capParaPrompts = CAP_ARG && CAP_ARG !== 'all' ? CAP_ARG : 'primeras';
    const datos = cargarCapitulo(capParaPrompts);
    const promptsPorIdioma = {};
    const nuevosPrompts = {};

    for (const lang of IDIOMAS) {
      const lista = extraerPrompts(capParaPrompts, lang, datos);
      promptsPorIdioma[lang] = lista;
      const chars = lista.reduce((a, x) => a + x.textoHablado.length, 0);
      console.log(`[${lang}]: ${lista.length} prompts, ~${chars} caracteres`);
    }

    if (!ES_VER) {
      for (const lang of IDIOMAS) {
        const vozLeda = `${GOOGLE_LOCAL[lang]}-Chirp3-HD-Leda`;
        const targetDir = path.join(AUDIO_DIR, lang, 'prompts');
        fs.mkdirSync(targetDir, { recursive: true });

        nuevosPrompts[lang] = {};
        console.log(`\nGenerando prompts [${lang}] con ${vozLeda}...`);
        let nuevos = 0, yaEstaban = 0, errores = 0;

        const pendientes = [];
        for (const it of promptsPorIdioma[lang]) {
          const dest = path.join(targetDir, it.archivo);
          const relPath = `audio/${lang}/prompts/${it.archivo}`;

          const pv = it.voz ? `${it.voz}~` : '';
          nuevosPrompts[lang][pv + normKey(it.rawText)] = relPath;
          if (it.rawText.includes('|')) {
            const [lat, arab] = it.rawText.split('|');
            nuevosPrompts[lang][pv + normKey(lat)] = relPath;
            nuevosPrompts[lang][pv + normKey(arab)] = relPath;
          }
          nuevosPrompts[lang][pv + normKey(it.textoHablado)] = relPath;

          if (!FORZAR && fs.existsSync(dest) && fs.statSync(dest).size > 500) {
            yaEstaban++;
            continue;
          }
          pendientes.push({ it, dest });
        }

        const CONCURRENCY = 2;
        let pIdx = 0;
        const workers = Array.from({ length: Math.min(CONCURRENCY, pendientes.length || 1) }, async () => {
          while (pIdx < pendientes.length && errores < 12) {
            const { it, dest } = pendientes[pIdx++];
            let intentos = 0;
            while (intentos < 5) {
              try {
                const audioBuf = await S.generar(it.textoHablado, lang, it.voz && VOCES_PERSONAJE[it.voz] ? `${GOOGLE_LOCAL[lang]}-Chirp3-HD-${VOCES_PERSONAJE[it.voz]}` : vozLeda);
                fs.writeFileSync(dest, audioBuf);
                nuevos++;
                process.stdout.write('.');
                break;
              } catch (e) {
                intentos++;
                const is429 = /429|RESOURCE_EXHAUSTED/i.test(e.message);
                if (is429) {
                  process.stdout.write('[429:espera]');
                  await new Promise(r => setTimeout(r, 9000 + intentos * 2000));
                } else if (intentos >= 4) {
                  errores++;
                  console.error(`\nError en prompt ${it.slugPrefix} («${it.textoHablado}»):`, e.message);
                  break;
                } else {
                  await new Promise(r => setTimeout(r, 1000 * intentos));
                }
              }
            }
            await new Promise(r => setTimeout(r, 220));
          }
        });
        await Promise.all(workers);
        console.log(`\nListo prompts [${lang}]: ${nuevos} generados, ${yaEstaban} ya existían.`);
        sincronizarPrompts({ [lang]: nuevosPrompts[lang] });
      }
    } else {
      // Si estamos en modo sync o ver, registrar los que ya existen en disco
      for (const lang of IDIOMAS) {
        const targetDir = path.join(AUDIO_DIR, lang, 'prompts');
        if (!fs.existsSync(targetDir)) continue;
        nuevosPrompts[lang] = {};
        for (const it of promptsPorIdioma[lang]) {
          const dest = path.join(targetDir, it.archivo);
          if (fs.existsSync(dest)) {
            const relPath = `audio/${lang}/prompts/${it.archivo}`;
            const pv = it.voz ? `${it.voz}~` : '';
            nuevosPrompts[lang][pv + normKey(it.rawText)] = relPath;
            if (it.rawText.includes('|')) {
              const [lat, arab] = it.rawText.split('|');
              nuevosPrompts[lang][pv + normKey(lat)] = relPath;
              nuevosPrompts[lang][pv + normKey(arab)] = relPath;
            }
            nuevosPrompts[lang][pv + normKey(it.textoHablado)] = relPath;
          }
        }
        sincronizarPrompts({ [lang]: nuevosPrompts[lang] });
      }
    }
  }

  console.log('\nSincronización finalizada correctamente.');
})().catch(e => {
  console.error('\nFalla:', e);
  process.exit(1);
});
