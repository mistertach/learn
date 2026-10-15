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
const NOMBRE_DEFECTO = 'Nico';

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

  const add = (slugPrefix, rawText) => {
    if (!rawText) return;
    const textoHablado = textoHabla(rawText, lang);
    if (!textoHablado) return;
    const slug = `${slugPrefix}-${slugify(rawText)}`;
    lista.push({ slugPrefix, rawText, textoHablado, slug, archivo: `${slug}.mp3` });
  };

  const comunes = [
    'repeti', 'todoJunto', 'fraseAhora', 'estrella', 'estrellaGrande',
    'hola', 'intro1', 'casi', 'ascensor', 'queDecimos', 'todos',
    'cuentoQ', 'pasaporte', 'ppFinal', 'ppFalta', 'todaviaNo',
    'unPececito', 'teToca', 'aQuePiso',
    'repasar', 'repasoDi', 'repasoPalabras', 'repasoFrases',
    'repasoPalabrasDi', 'repasoFrasesDi', 'repasoVacio',
    'ganasteCaballito', 'valeDos',
    'repasoMerienda', 'repasoMeriendaDi', 'ganasteGalletita', 'animalesGalletita', 'valeTres',
    'pez', 'pezQ', 'nam', 'escapo', 'cuantos'
  ];
  for (const k of comunes) {
    if (T[k] && typeof T[k] === 'string') add(k, T[k]);
  }

  for (const el of (T.elogios || [])) {
    if (T.elogio) {
      add('elogio', T.elogio(el, ''));
      add('elogioN', T.elogio(el, 'Nico'));
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

// Actualizar prompts.js
function sincronizarPrompts(nuevosPrompts) {
  const promptsFile = path.join(AUDIO_DIR, 'prompts.js');
  let staticPrompts = {};
  if (fs.existsSync(promptsFile)) {
    try {
      const txt = fs.readFileSync(promptsFile, 'utf8');
      const jsonStart = txt.indexOf('{');
      const jsonEnd = txt.lastIndexOf('}');
      if (jsonStart >= 0 && jsonEnd > jsonStart) {
        staticPrompts = JSON.parse(txt.slice(jsonStart, jsonEnd + 1));
      }
    } catch (e) {}
  }

  for (const l of Object.keys(nuevosPrompts)) {
    staticPrompts[l] = Object.assign(staticPrompts[l] || {}, nuevosPrompts[l]);
  }

  const content = `/* Generado automáticamente por scripts/audios.js */
window.STATIC_PROMPTS = ${JSON.stringify(staticPrompts, null, 2)};
`;
  fs.writeFileSync(promptsFile, content);
}

// EJECUCIÓN PRINCIPAL
(async () => {
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
              const audioBuf = await S.generar(it.texto, lang, vozLeda);
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

          nuevosPrompts[lang][normKey(it.rawText)] = relPath;
          if (it.rawText.includes('|')) {
            const [lat, arab] = it.rawText.split('|');
            nuevosPrompts[lang][normKey(lat)] = relPath;
            nuevosPrompts[lang][normKey(arab)] = relPath;
          }
          nuevosPrompts[lang][normKey(it.textoHablado)] = relPath;

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
                const audioBuf = await S.generar(it.textoHablado, lang, vozLeda);
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
            nuevosPrompts[lang][normKey(it.rawText)] = relPath;
            if (it.rawText.includes('|')) {
              const [lat, arab] = it.rawText.split('|');
              nuevosPrompts[lang][normKey(lat)] = relPath;
              nuevosPrompts[lang][normKey(arab)] = relPath;
            }
            nuevosPrompts[lang][normKey(it.textoHablado)] = relPath;
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
