#!/usr/bin/env node
/* Revisa el CONTENIDO del juego (no solo que los .js compilen): los textos de todos los idiomas tienen la misma forma,
   no hay números en lo que se dice en voz alta, el árabe lleva sus dos caras, cada lugar tiene sus dibujos, y todo lo hablado
   tiene su grabación. Es lo que hay que correr antes de subir cambios: npm run lint
   Opciones:  --audio   además mide los mp3 con ffmpeg (sílabas mudas, deletreadas o cortadas)
              --solo=es,fr   limitar los idiomas */
const fs = require('fs'), path = require('path'), vm = require('vm'), { spawnSync } = require('child_process');
const RAIZ = path.join(__dirname, '..');
const arg = n => { const a = process.argv.find(x => x === '--' + n || x.startsWith('--' + n + '=')); return a == null ? null : (a.split('=')[1] ?? true); };
const IDIOMAS = (arg('solo') || 'es,fr,it,en,ar,ru').split(','), REF = 'es';
const errores = [], avisos = [];
const mal = (m) => errores.push(m), aviso = (m) => avisos.push(m);

/* ---- cargar todo como lo hace el navegador ---- */
const PACKS = {}, BASES = {}, TEXTOS = {};
const ctx = { console, registrarIdioma: o => { PACKS[o.codigo] = o; }, registrarCapitulo: o => { BASES[o.id] = o; }, registrarTextos: (id, l, o) => { (TEXTOS[id] = TEXTOS[id] || {})[l] = o; } };
ctx.window = ctx; vm.createContext(ctx);
const cargar = f => { try { vm.runInContext(fs.readFileSync(path.join(RAIZ, f), 'utf8'), ctx, { filename: f }); } catch (e) { mal(`${f}: no se pudo cargar (${e.message})`); } };
for (const l of ['es', 'fr', 'it', 'en', 'ar', 'ru']) cargar(`idiomas/${l}.js`);
['capitulos.js', 'escenas.js', 'idiomas/nivel0.js', 'idiomas/nivel0-arte.js', 'idiomas/nivel0-ru.js', 'idiomas/nivel0b.js'].forEach(cargar);
cargar('idiomas/grandes.js');
cargar('idiomas/rincon.js');
const CAPS = ctx.CAPITULOS || [];
const ARTE_BASE = new Set(); { const j = fs.readFileSync(path.join(RAIZ, 'juego.js'), 'utf8'), a = j.indexOf('const ART = {'), b = j.indexOf('\n};', a); for (const m of j.slice(a, b).matchAll(/^  ([A-Za-z0-9_]+):`/gm)) ARTE_BASE.add(m[1]); }
const hayArte = k => ARTE_BASE.has(k) || Object.values(BASES).some(o => (o.arte || {})[k]);
for (const id of CAPS) { cargar(`capitulos/${id}/base.js`); for (const l of ['es', 'fr', 'it', 'en', 'ar', 'ru']) if (fs.existsSync(path.join(RAIZ, `capitulos/${id}/${l}.js`))) cargar(`capitulos/${id}/${l}.js`); }

/* ---- forma de un dato: claves y largos, sin los textos ---- */
const IGNORAR = new Set(['ingles']);
const LARGO_LIBRE = new Set(['silabas', 'partes']);   // cada idioma parte las palabras y las frases a su manera
function forma(x) {
  if (typeof x === 'string') return 's';
  if (typeof x === 'function') return 'f';
  if (Array.isArray(x)) return `[${x.length}]`;
  if (x && typeof x === 'object') return Object.keys(x).filter(k => !IGNORAR.has(k)).sort().join(',');
  return typeof x;
}
function comparar(ref, otro, ruta, lang, salida) {
  if (typeof ref !== typeof otro || Array.isArray(ref) !== Array.isArray(otro)) { salida.push(`${lang} ${ruta}: tipo distinto`); return; }
  if (Array.isArray(ref)) {
    if (LARGO_LIBRE.has(ruta.split('.').pop())) return;
    if (ref.length !== otro.length) { salida.push(`${lang} ${ruta}: ${otro.length} elementos (en ${REF}: ${ref.length})`); return; }
    ref.forEach((x, i) => comparar(x, otro[i], `${ruta}[${i}]`, lang, salida)); return;
  }
  if (ref && typeof ref === 'object') {
    for (const k of Object.keys(ref)) { if (IGNORAR.has(k)) continue; if (!(k in otro)) salida.push(`${lang} ${ruta}.${k}: falta`); else comparar(ref[k], otro[k], `${ruta}.${k}`, lang, salida); }
    for (const k of Object.keys(otro)) if (!IGNORAR.has(k) && !(k in ref)) salida.push(`${lang} ${ruta}.${k}: sobra (no está en ${REF})`);
  }
}
function hojas(x, ruta, f) {
  if (typeof x === 'string') f(x, ruta);
  else if (Array.isArray(x)) x.forEach((y, i) => hojas(y, `${ruta}[${i}]`, f));
  else if (x && typeof x === 'object') for (const k in x) hojas(x[k], `${ruta}.${k}`, f);
}
const CLAVES_SIN_VOZ = new Set(['nombre', 'tag', 'bandera', 'codigo', 'letras', 'sonido', 'rankVoz', 'numTexto']);
const arabe = /[؀-ۿ]/;
const DOBLE = { ar: /[؀-ۿ]/, ru: /[Ѐ-ӿ]/ };   // idiomas con dos caras "latino|escritura propia" (el latino del ruso se arma solo)

/* ---- 1 · cada lugar y cada idioma ---- */
for (const id of CAPS) {
  const b = BASES[id], T = TEXTOS[id] || {};
  if (!b) { mal(`${id}: falta base.js`); continue; }
  if (!T[REF]) { mal(`${id}: falta ${REF}.js`); continue; }
  for (const l of IDIOMAS) {
    if (!T[l]) { if (!DOBLE[l]) mal(`${id}: falta ${l}.js`); else aviso(`${id}: sin ${l}`); continue; }
    const dif = []; comparar(T[REF], T[l], id, l, dif); dif.slice(0, 6).forEach(mal); if (dif.length > 6) mal(`${id} ${l}: …y ${dif.length - 6} diferencias más`);
    // largos que deben coincidir con la base
    for (const [k, kb] of [['palabrasExtra', 'palabrasExtra'], ['frasesExtra', 'frasesExtra'], ['preguntas', 'preguntas']]) if ((b[kb] || []).length !== (T[l][k] || []).length) mal(`${id} ${l}: ${k} tiene ${(T[l][k] || []).length}, la base ${(b[kb] || []).length}`);
    if ((b.niveles || []).length !== (T[l].niveles || []).length) mal(`${id} ${l}: niveles`);
    for (const k of b.orden) if (!(T[l].estaciones || {})[k]) mal(`${id} ${l}: falta la estación ${k}`);
    // conversaciones: la forma exacta
    (T[l].charlas || []).forEach((c, i) => { if ((c.pasos || []).length !== 4) mal(`${id} ${l} charla ${i}: ${(c.pasos || []).length} pasos (deben ser 4)`);
      (c.pasos || []).forEach((p, j) => { if (!!p.di !== (j % 2 === 0)) mal(`${id} ${l} charla ${i} paso ${j}: ${j % 2 ? 'el chico pregunta (sin di)' : 'el amigo pregunta (con di)'}`); if ((p.op || []).length !== 2) mal(`${id} ${l} charla ${i} paso ${j}: ${(p.op || []).length} opciones`); }); });
    if ((T[l].charlas || []).length && (T[l].charlas || []).length !== (b.charlas || []).length) mal(`${id} ${l}: ${(T[l].charlas || []).length} charlas, la base ${(b.charlas || []).length}`);
    // lo que se dice en voz alta
    hojas(T[l], `${id}/${l}`, (s, r) => {
      const clave = r.split('.').pop().replace(/\[\d+\]/g, '');
      if (CLAVES_SIN_VOZ.has(clave) || /\.ingles/.test(r) || /\.silabas|\.partes/.test(r) && false) return;
      const sin = s.replace(/\{[nN]\}/g, '');
      if (/\d/.test(sin)) mal(`${r}: tiene un número ("${s.slice(0, 40)}"): la voz lo lee mal; escribilo con letras`);
      if (DOBLE[l]) { if (!s.includes('|') || !DOBLE[l].test(s)) { if (!/\.numTexto/.test(r)) mal(`${r}: en ${l} falta una de las dos caras ("${s.slice(0, 40)}")`); } }
      else { if (s.includes('|')) mal(`${r}: tiene "|" fuera de los idiomas de dos caras`); for (const [k, re] of Object.entries(DOBLE)) if (re.test(s)) mal(`${r}: letras de ${k} fuera de ${k}`); }
    });
    // {n} (números) en el mismo lugar en todos los idiomas; en árabe, {N}/{n} en las dos caras
    const cuenta = (x) => { const o = {}; hojas(x, '', (t, r) => { const n = (t.match(/\{n\}/g) || []).length; if (n) o[r] = n; }); return o; };
    const cr = cuenta(T[REF]), co = cuenta(T[l]); for (const k of new Set([...Object.keys(cr), ...Object.keys(co)])) if (!DOBLE[l] && cr[k] !== co[k]) mal(`${id} ${l}${k}: {n} ${co[k] || 0} veces (en ${REF}: ${cr[k] || 0})`);
    if (DOBLE[l]) hojas(T[l], `${id}/${l}`, (t, r) => { if (!t.includes('|')) return; const [lat, arb] = [t.slice(0, t.indexOf('|')), t.slice(t.indexOf('|') + 1)]; for (const m of ['{N}', '{n}']) if (lat.split(m).length !== arb.split(m).length) mal(`${r}: ${m} no está igual en las dos caras ("${t.slice(0, 40)}")`); });
  }
  // dibujos y escenas
  const art = b.arte || {};
  for (const e of Object.values(b.estaciones || {})) if (e.item && !hayArte(e.item)) mal(`${id}: falta el dibujo "${e.item}"`);
  (b.charlas || []).forEach((c, i) => { if (!c.npc) mal(`${id} charla ${i}: sin npc`); if (c.est !== 'final' && !b.orden.includes(c.est)) mal(`${id} charla ${i}: est "${c.est}" no es una estación`); if (!hayArte(c.arte)) mal(`${id} charla ${i}: falta el dibujo "${c.arte}"`); });
  const es = (ctx.ESCENAS || {})[id]; if (!es) mal(`${id}: falta la escena en escenas.js`); else if (es.capas.length !== 8) mal(`${id}: la escena tiene ${es.capas.length} capas (deben ser 8)`);
}

/* ---- 2 · nivel 0 ---- */
const N0 = ctx.NIVEL0 || {}, ARTE = ctx.NIVEL0_ARTE || [];
for (const l of IDIOMAS) {
  if (!N0[l]) { mal(`nivel0: falta ${l}`); continue; }
  const dif = []; comparar(N0[REF], N0[l], 'nivel0', l, dif); dif.slice(0, 5).forEach(mal);
  N0[l].grupos.forEach((g, gi) => { if (!g.intro) mal(`nivel0 ${l} grupo ${gi}: sin intro`); g.palabras.forEach((w, wi) => { if (!w.silabas || !w.silabas.length) mal(`nivel0 ${l} ${gi}:${wi}: sin sílabas`);
    if (/\d/.test(w.texto)) mal(`nivel0 ${l} ${gi}:${wi}: número en "${w.texto}"`); if (!!DOBLE[l] !== w.texto.includes('|')) mal(`nivel0 ${l} ${gi}:${wi}: caras ("${w.texto}")`); }); });
}
(N0[REF] ? N0[REF].grupos : []).forEach((g, gi) => { if ((ARTE[gi] || []).length !== g.palabras.length) mal(`nivel0-arte: grupo ${gi} tiene ${(ARTE[gi] || []).length} dibujos y ${g.palabras.length} palabras`); });
for (const gi in ARTE) ARTE[gi].forEach((f, wi) => { try { const s = f('#000'); if (/undefined|NaN|\[object/.test(s)) mal(`nivel0-arte ${gi}:${wi}: dibujo roto`); } catch (e) { mal(`nivel0-arte ${gi}:${wi}: ${e.message}`); } });

/* ---- 3 · cada idioma tiene las mismas cosas en su paquete ---- */
for (const l of IDIOMAS) { if (!PACKS[l]) { mal(`idiomas/${l}.js no registró el idioma`); continue; } if (l === REF) continue;
  const dif = []; comparar(PACKS[REF].t, PACKS[l].t, 'pack', l, dif); dif.filter(d => !/pack\.(ropa|animales|objetos)/.test(d)).slice(0, 8).forEach(mal); }
for (const l of ['en', 'es', 'fr', 'it']) { const g = (ctx.GRANDES || {})[l]; if (!g) { mal(`grandes.js: falta ${l}`); continue; } for (const k of Object.keys((ctx.GRANDES.en) || {})) if (!(k in g)) mal(`grandes.js ${l}: falta "${k}"`); }

/* ---- 4 · grabaciones: lo que se habla de las conversaciones y el nivel 0 tiene su archivo ---- */
try {
  const pctx = { window: {} }, actx = { window: {} }; vm.createContext(pctx); vm.createContext(actx);
  for (const l of IDIOMAS) { vm.runInContext(fs.readFileSync(path.join(RAIZ, `audio/prompts-${l}.js`), 'utf8'), pctx); vm.runInContext(fs.readFileSync(path.join(RAIZ, `audio/audio-${l}.js`), 'utf8'), actx); }
  const SP = pctx.window.STATIC_PROMPTS || {}, SA = actx.window.STATIC_AUDIO || new Map();
  const norm = s => String(s || '').trim().toLowerCase().replace(/[ً-ٰٟ]/g, '').replace(/[¡!¿?.,:«»"']/g, '').replace(/\s+/g, ' ');
  const hablado = s => { s = String(s); const i = s.indexOf('|'); return i < 0 ? s : s.slice(i + 1); };
  for (const l of IDIOMAS) {
    const mapa = SP[l] || {}, faltan = [];
    const tiene = t => { const k = norm(t); return mapa[k] || mapa[norm(hablado(t))]; };
    for (const id of CAPS) for (const c of ((TEXTOS[id] || {})[l] || {}).charlas || []) {
      const voz = ((BASES[id] || {}).charlas || [])[(((TEXTOS[id] || {})[l] || {}).charlas || []).indexOf(c)];
      const v = voz && voz.voz, tieneV = t => { const k = norm(t); return mapa[`${v}~${k}`] || mapa[`${v}~${norm(hablado(t))}`]; };
      const lineas = [[c.titulo, false], [c.chau, true]]; (c.pasos || []).forEach(p => { lineas.push([p.di, true]); (p.op || []).forEach(o => lineas.push([o.t, false], [o.r, true])); });
      lineas.filter(([t]) => t && !/\{N\}/.test(t)).forEach(([t, conVoz]) => { if (!(conVoz && v ? tieneV(t) : tiene(t))) faltan.push(t.slice(0, 40)); });
    }
    ((N0[l] || {}).grupos || []).forEach((g, gi) => { [g.nombre, g.intro].forEach(t => { if (!tiene(t)) faltan.push(t.slice(0, 40)); }); g.palabras.forEach((w, wi) => { if (!SA.get(`${l}:n0:${gi}:${wi}`)) faltan.push(`palabra ${w.texto}`); w.silabas.forEach((s, j) => { const u = SA.get(`${l}:n0:${gi}:${wi}:s${j}`); if (!u || !fs.existsSync(path.join(RAIZ, u))) faltan.push(`sílaba ${s}`); }); }); });
    if (faltan.length) mal(`${l}: ${faltan.length} líneas habladas sin grabación (corré: node scripts/audios.js --prompts / --cap=nivel0). Ej: ${faltan.slice(0, 3).join(' · ')}`);
  }
} catch (e) { aviso('no se pudo revisar las grabaciones: ' + e.message); }

/* ---- 5 · (opcional) calidad de los mp3 de sílabas ---- */
if (arg('audio')) {
  const medir = f => { const r = spawnSync('ffmpeg', ['-v', 'quiet', '-i', f, '-f', 's16le', '-ac', '1', '-ar', '16000', 'pipe:1'], { maxBuffer: 1 << 26 }); const n = Math.floor((r.stdout || []).length / 2); if (n < 400) return { pico: 0, golpes: 0 };
    let pico = 0; const e = []; for (let i = 0; i + 160 <= n; i += 160) { let s = 0; for (let j = 0; j < 160; j++) { const v = Math.abs(r.stdout.readInt16LE((i + j) * 2) / 32768); s += v * v; if (v > pico) pico = v; } e.push(Math.sqrt(s / 160)); }
    const thr = Math.max(0.02, Math.max(...e) * 0.12); let g = 0, gap = 99, prev = false; for (const x of e) { const on = x > thr; if (on && !prev && gap >= 7) g++; gap = on ? 0 : gap + 1; prev = on; } return { pico, golpes: g }; };
  for (const l of IDIOMAS) { const dir = path.join(RAIZ, 'audio', l, 'silabas'); if (!fs.existsSync(dir)) continue; const mudas = [], multi = [];
    for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.mp3'))) { const m = medir(path.join(dir, f)); if (m.pico < (l === 'en' ? 0.12 : 0.15)) mudas.push(f.slice(0, -4)); else if (m.golpes >= 3) multi.push(f.slice(0, -4)); }
    if (mudas.length) mal(`${l}: ${mudas.length} sílabas casi mudas: ${mudas.slice(0, 12).join(', ')}  (node scripts/audios.js --silabas --malas --solo=${l})`);
    if (multi.length) aviso(`${l}: ${multi.length} sílabas con 3 o más golpes de voz (¿deletreadas?): ${multi.slice(0, 12).join(', ')}`); }
}

avisos.forEach(a => console.log('· ' + a));
if (errores.length) { console.error(`\n${errores.length} problema(s):\n` + errores.slice(0, 60).map(e => '✗ ' + e).join('\n') + (errores.length > 60 ? `\n…y ${errores.length - 60} más` : '')); process.exit(1); }
console.log(`Contenido en orden (${CAPS.length} lugares, ${IDIOMAS.length} idiomas).`);
