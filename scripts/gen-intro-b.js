#!/usr/bin/env node
/* Genera idiomas/nivel0b.js (la parte B de la intro: "Mi mundo" y "Frases de todos los días") a partir de scripts/datos/intro-b/*.txt.
   Una sola fuente para los cinco idiomas, así no se desparejan. Formato de cada archivo:
     === #color               (empieza un grupo; el color de la tarjeta)
     N es: Nombre || Explicación          (nombre e intro de ese idioma; en árabe "latino|عربي")
     dibujo | es | en | fr | it | ar      (una palabra por línea)
   El dibujo es un emoji, o @#RRGGBB para una mancha de color. Cada celda es "texto" o "texto=sí-la-bas".
   Español e italiano se dividen en sílabas solos si no se indica; inglés, francés y árabe las llevan en la celda
   (árabe: "latino|عربي=la-ti-no|عَ-رَ-بِي"). Cada celda de árabe lleva las dos caras.
   Uso: node scripts/gen-intro-b.js */
const fs = require('fs'), path = require('path');
const DIR = path.join(__dirname, 'datos', 'intro-b'), SALIDA = path.join(__dirname, '..', 'idiomas', 'nivel0b.js');
const LANGS = ['es', 'en', 'fr', 'it', 'ar'];

/* ---- sílabas del español ---- */
const V = 'aeiouáéíóúü', FUERTE = 'aeoáéíúó'.replace('í', '').replace('ú', ''), DEBIL = 'iuü';
function silabasEsPalabra(w) {
  w = w.toLowerCase(); if (w.length <= 1) return [w];
  const u = []; // unidades: {t, v: es vocal}
  for (let i = 0; i < w.length; i++) {
    const c = w[i], d = w.slice(i, i + 2);
    if (['ch', 'll', 'rr'].includes(d)) { u.push({ t: d, v: false }); i++; }
    else if ((c === 'q' || c === 'g') && w[i + 1] === 'u' && 'eiéí'.includes(w[i + 2] || '#')) { u.push({ t: c + 'u', v: false }); i++; }
    else if (c === 'y' && i === w.length - 1 && i > 0 && V.includes(w[i - 1])) u.push({ t: c, v: true, y: true });
    else u.push({ t: c, v: V.includes(c) });
  }
  const fuerte = x => 'aeoáéó'.includes(x.t) || 'íú'.includes(x.t), debil = x => 'iuü'.includes(x.t) || x.y;
  // núcleos: grupos de vocales con diptongo/hiato
  const nucleos = []; let i = 0;
  while (i < u.length) {
    if (!u[i].v) { i++; continue; }
    let j = i + 1;
    while (j < u.length && u[j].v) { const a = u[j - 1], b = u[j]; if (fuerte(a) && fuerte(b)) break; if ('íú'.includes(a.t) || 'íú'.includes(b.t)) break; j++; }
    nucleos.push([i, j]); i = j;
  }
  if (nucleos.length <= 1) return [w];
  const CL = ['pr', 'br', 'fr', 'tr', 'dr', 'cr', 'gr', 'pl', 'bl', 'fl', 'cl', 'gl'];
  const cortes = [];
  for (let k = 0; k < nucleos.length - 1; k++) {
    const a = nucleos[k][1], b = nucleos[k + 1][0], n = b - a; // consonantes entre medio
    if (n === 0) cortes.push(a);
    else if (n === 1) cortes.push(a);
    else { const ult = u[b - 2].t + u[b - 1].t; cortes.push(CL.includes(ult) ? b - 2 : b - 1); }
  }
  const r = []; let ini = 0; for (const c of cortes) { r.push(u.slice(ini, c).map(x => x.t).join('')); ini = c; } r.push(u.slice(ini).map(x => x.t).join('')); return r.filter(Boolean);
}
/* ---- sílabas del italiano (aproximado) ---- */
function silabasItPalabra(w) {
  w = w.toLowerCase(); const VI = 'aeiouàèéìòù'; if (w.length <= 1) return [w];
  const u = [];
  for (let i = 0; i < w.length; i++) { const t3 = w.slice(i, i + 3), d = w.slice(i, i + 2);
    if (t3 === 'gli' && VI.includes(w[i + 3] || '#')) { u.push({ t: 'gl', v: false }); i++; } else if (['gn', 'sc', 'ch', 'gh', 'qu'].includes(d) && !(d === 'sc' && !'ei'.includes(w[i + 2] || '#'))) { u.push({ t: d, v: false }); i++; }
    else u.push({ t: w[i], v: VI.includes(w[i]) }); }
  const nuc = []; let i = 0;
  while (i < u.length) { if (!u[i].v) { i++; continue; } let j = i + 1; while (j < u.length && u[j].v) { const a = u[j - 1].t, b = u[j].t; const dipt = ('iu'.includes(a) && 'aeiou'.includes(b)) || ('aeo'.includes(a) && 'iu'.includes(b)); if (!dipt || 'àèéìòù'.includes(a) || 'àèéìòù'.includes(b)) break; j++; } nuc.push([i, j]); i = j; }
  if (nuc.length <= 1) return [w];
  const CL = ['pr', 'br', 'fr', 'tr', 'dr', 'cr', 'gr', 'pl', 'bl', 'fl', 'cl', 'gl', 'vr'];
  const cortes = [];
  for (let k = 0; k < nuc.length - 1; k++) { const a = nuc[k][1], b = nuc[k + 1][0], n = b - a; if (n <= 1) { cortes.push(a); continue; }
    const t = u.slice(a, b).map(x => x.t); if (t[0] === t[1] || (t[0].length === 1 && t[1].length === 1 && t[0] === t[1])) { cortes.push(a + 1); continue; }
    if (t[0] === 's') { cortes.push(a); continue; }
    const ult = t[n - 2] + t[n - 1]; cortes.push(CL.includes(ult) ? b - 2 : (n >= 2 ? b - 1 : a)); }
  const r = []; let ini = 0; for (const c of cortes) { r.push(u.slice(ini, c).map(x => x.t).join('')); ini = c; } r.push(u.slice(ini).map(x => x.t).join('')); return r.filter(Boolean);
}
const silabasFrase = (t, f) => t.split(/\s+/).flatMap(w => { const m = w.match(/^([¿¡"«]*)(.*?)([?!.,;:»"]*)$/); const s = f(m[2]); if (m[1]) s[0] = m[1] + s[0]; if (m[3]) s[s.length - 1] += m[3]; return s; });

const ERRORES = [];
function celda(c, lang) {
  c = c.trim(); let texto = c, sil = null;
  if (c.includes('=')) { const i = c.lastIndexOf('='); texto = c.slice(0, i).trim(); sil = c.slice(i + 1).trim(); }
  if (lang === 'ar') {
    const [tl, ta] = texto.split('|'); let s;
    if (sil) { const [sl, sa] = sil.split('|'); const L = sl.split('-'), A = sa.split('-'); if (L.length !== A.length) { ERRORES.push(`árabe: ${L.length} sílabas latinas y ${A.length} árabes en "${c}"`); } s = L.map((x, i) => `${x}|${A[i]}`); }
    else { const L = [tl], A = [ta]; s = [`${tl}|${ta}`]; }
    return { texto: `${tl}|${ta}`, silabas: s };
  }
  if (sil) return { texto, silabas: sil.split('-').map(x => x.replace(/_/g, ' ')) };
  if (lang === 'es') return { texto, silabas: silabasFrase(texto, silabasEsPalabra) };
  if (lang === 'it') return { texto, silabas: silabasFrase(texto, silabasItPalabra) };
  return { texto, silabas: texto.split(/\s+/) };   // en/fr sin indicar: una sílaba por palabra
}

const grupos = [];
for (const f of fs.readdirSync(DIR).filter(x => x.endsWith('.txt')).sort()) {
  let g = null;
  for (const raw of fs.readFileSync(path.join(DIR, f), 'utf8').split('\n')) {
    const l = raw.trim(); if (!l || l.startsWith('#')) continue;
    if (l.startsWith('===')) { g = { color: l.slice(3).trim() || '#7C5CFF', nombre: {}, intro: {}, filas: [] }; grupos.push(g); continue; }
    const m = l.match(/^N (es|en|fr|it|ar):\s*(.*?)\s*\|\|\s*(.*)$/);
    if (m) { g.nombre[m[1]] = m[2]; g.intro[m[1]] = m[3]; continue; }
    const p = l.split('|'); // el árabe lleva | adentro: el dibujo es la primera celda, y el árabe las dos últimas
    const partes = []; let resto = l; const sep = ' | ';
    const celdas = l.split(sep); if (celdas.length !== 6) throw new Error(`${f}: línea con ${celdas.length} celdas (hacen falta 6): ${l}`);
    g.filas.push(celdas);
  }
}
let n = 0, sal = `/* GENERADO por scripts/gen-intro-b.js desde scripts/datos/intro-b/*.txt: no se edita a mano.
   Parte B de la intro: grupos que se suman a los de la parte A (idiomas/nivel0.js). */
(()=>{
const A = window.NIVEL0_ARTE, COL = window.NIVEL0_COLORES;
${fs.readFileSync(path.join(__dirname, 'datos', 'intro-b-dibujos.js.txt'), 'utf8')}
`;
const data = { arte: grupos.map(g => g.filas.map(r => r[0].trim())), colores: grupos.map(g => g.color), langs: {} };
for (const l of LANGS) {
  data.langs[l] = grupos.map((g, gi) => {
    if (!g.nombre[l]) throw new Error(`grupo ${gi + 1} sin nombre en ${l}`);
    return { nombre: g.nombre[l], intro: g.intro[l], palabras: g.filas.map(r => celda(r[1 + LANGS.indexOf(l)], l)) };
  });
}
sal += `const ARTE_B = ${JSON.stringify(data.arte)};\nconst COL_B = ${JSON.stringify(data.colores)};\nconst LANG_B = ${JSON.stringify(data.langs)};\n`;
sal += `ARTE_B.forEach((g,gi)=>{ A.push(g.map(emo)); COL.push(COL_B[gi]); });\nfor (const l in LANG_B) window.NIVEL0[l].grupos.push(...LANG_B[l]);\nwindow.NIVEL0_PARTE_B = ${grupos.length};   // cuántos grupos son de la parte B (los últimos)\n})();\n`;
if (ERRORES.length) { console.error(ERRORES.join('\n')); process.exit(1); }
fs.writeFileSync(SALIDA, sal);
console.log(`nivel0b.js: ${grupos.length} grupos, ${grupos.reduce((a, g) => a + g.filas.length, 0)} palabras`);
