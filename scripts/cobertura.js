#!/usr/bin/env node
/* ¿Cuánto del vocabulario más frecuente enseña (o dice) el juego?
   Compara las 250 palabras más frecuentes de un idioma (scripts/datos/top250-<idioma>.txt, de subtítulos de películas)
   con todo lo que hay en los textos del juego, y dice de cada una si:
     ENSEÑADA = el chico la repite (palabras y frases de los lugares, lo que dice en las charlas, el nivel 0, los juegos)
     OÍDA     = aparece en lo que dice el relator (intros, respuestas, cuentos, lo que contestan los amigos) pero no la repite
     FALTA    = no aparece
   Uso:  node scripts/cobertura.js --lang=es [--top=250] [--md]    (--md imprime el informe en markdown)
   Es por formas de la palabra (con una tablita de verbos, incluido el voseo); no es un lematizador. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const RAIZ = path.join(__dirname, '..');
const arg = n => { const a = process.argv.find(x => x === '--' + n || x.startsWith('--' + n + '=')); return a == null ? null : (a.split('=')[1] ?? true); };
const LANG = arg('lang') || 'es', TOP = +(arg('top') || 250), MD = !!arg('md');

const PACKS = {}, TEXTOS = {}, BASES = {};
const ctx = { console, registrarIdioma: o => { PACKS[o.codigo] = o; }, registrarCapitulo: o => { BASES[o.id] = o; }, registrarTextos: (id, l, o) => { (TEXTOS[id] = TEXTOS[id] || {})[l] = o; } };
ctx.window = ctx; vm.createContext(ctx);
const cargar = f => vm.runInContext(fs.readFileSync(path.join(RAIZ, f), 'utf8'), ctx, { filename: f });
cargar('capitulos.js'); cargar('idiomas/nivel0.js'); cargar(`idiomas/${LANG}.js`);
for (const id of ctx.CAPITULOS) { cargar(`capitulos/${id}/base.js`); const f = `capitulos/${id}/${LANG}.js`; if (fs.existsSync(path.join(RAIZ, f))) cargar(f); }

/* ---- el texto del juego: lo que el chico repite (enseñado) y lo que solo oye ---- */
const ensenado = [], oido = [];
const limpio = s => String(s).replace(/\{[nN]\}/g, ' ').replace(/\*/g, '');
const hojas = (x, f, clave = '') => { if (typeof x === 'string') f(x, clave); else if (Array.isArray(x)) x.forEach(y => hojas(y, f, clave)); else if (x && typeof x === 'object') for (const k in x) hojas(x[k], f, k); };
const SALTAR = new Set(['silabas', 'partes', 'numTexto', 'ingles', 'nombre', 'tag', 'bandera', 'codigo', 'letras', 'sonido', 'rankVoz']);
for (const id of ctx.CAPITULOS) {
  const t = (TEXTOS[id] || {})[LANG]; if (!t) continue;
  for (const e of Object.values(t.estaciones || {})) { ensenado.push(e.palabra && e.palabra.texto, e.frase && e.frase.texto); }
  (t.palabrasExtra || []).forEach(p => ensenado.push(p.texto)); (t.frasesExtra || []).forEach(p => ensenado.push(p.texto));
  if (t.final && t.final.frase) ensenado.push(t.final.frase.texto); if (t.lugar) ensenado.push(t.lugar.texto);
  ((t.microjuego || {}).ingredientes || []).forEach(i => ensenado.push(typeof i === 'string' ? i : i.texto));
  for (const c of t.charlas || []) for (const p of c.pasos) for (const o of p.op) { ensenado.push(o.t); oido.push(o.r); if (p.di) oido.push(p.di); }
  const ya = new Set(ensenado);
  hojas(t, (s, k) => { if (SALTAR.has(k) || ya.has(s)) return; oido.push(s); });
}
for (const g of ((ctx.NIVEL0 || {})[LANG] || {}).grupos || []) { oido.push(g.intro); g.palabras.forEach(w => ensenado.push(w.texto)); }
const pack = PACKS[LANG];
if (pack) for (const k in pack.t) { const v = pack.t[k]; if (typeof v === 'string') oido.push(v); else if (typeof v === 'function') { try { const r = v('Nico', 'Nico'); if (typeof r === 'string') oido.push(r); } catch (e) {} } else hojas(v, s => oido.push(s)); }

const quitaAc = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
const tokens = lista => { const set = new Set(); for (const s of lista) { if (!s) continue; for (const w of limpio(s).toLowerCase().split(/[^\p{L}']+/u)) { const x = w.replace(/^'+|'+$/g, ''); if (x) set.add(x); } } return set; };
const tEns = tokens(ensenado), tOid = tokens(oido);

/* ---- formas equivalentes (verbos y voseo) ---- */
const FORMAS = LANG === 'es' ? {
  es: 'es soy eres sos somos son era fue sea ser', está: 'está estoy estás estás estamos están estaba estar', estoy: 'estoy está estás estamos', estás: 'estás estás está estamos',
  tengo: 'tengo tienes tenés tiene tenemos tienen tenía tener', tienes: 'tienes tenés tiene tengo tener', tienen: 'tienen tiene tenemos tengo', tiene: 'tiene tienes tenés tengo tenemos',
  voy: 'voy vas va vamos van ir iba', vamos: 'vamos voy vas va van vamos', va: 'va vas voy vamos van', hace: 'hace haces hago hacemos hacer hizo hecho', hacer: 'hacer hace haces hago hizo hecho', hizo: 'hizo hace hacer hecho',
  puedo: 'puedo puedes podés puede podemos pueden poder', puedes: 'puedes podés puede puedo poder', puede: 'puede puedes podés puedo poder',
  dice: 'dice dices decís digo decir dijo dicho', digo: 'digo dices decís dice decir dijo', dije: 'dije dijo digo dice decir', dicho: 'dicho dijo dice decir', dijo: 'dijo dice digo decir',
  sé: 'sé sabes sabés sabe saber sabemos', saber: 'saber sé sabes sabés sabe', quiero: 'quiero quieres querés quiere queremos quieren querer quería', quiere: 'quiere quieres querés quiero querer', quería: 'quería quiero quieres querés quiere querer',
  ven: 'ven vení viene vengo venir', viene: 'viene vienes venís vengo venir vení ven', visto: 'visto ver veo ves ve vemos mirá mira', ver: 'ver veo ves ve vemos visto mirá mira', mira: 'mira mirá mirar miro', dame: 'dame dar da doy das',
  ha: 'ha he hemos hay había haber', hay: 'hay había haber', hemos: 'hemos ha he hay haber', haber: 'haber hay ha he', 'tú': 'tú vos', tu: 'tu tus', 'estás ': '', 'gusta': 'gusta gustan gustó gustar', 'crees': 'crees creés cree creo creer',
  'necesito': 'necesito necesitas necesita necesitás necesitar', 'oye': 'oye oí oíste escuchá escucha', 'dónde': 'dónde donde', 'vosotros': 'vosotros ustedes', 'conmigo': 'conmigo contigo', 'contigo': 'contigo conmigo',
  aquí: 'aquí acá', allí: 'allí allá', eres: 'eres sos es soy', quieres: 'quieres querés quiere quiero', has: 'has ha he hemos', madre: 'madre mamá mami', padre: 'padre papá papi', hijo: 'hijo hija nene nena', señor: 'señor señora', mujer: 'mujer señora', hombre: 'hombre señor', acuerdo: 'acuerdo vale ok', tener: 'tener tengo tenés tiene', estado: 'estado estar está', sido: 'sido ser es', sabe: 'sabe sabés sé sabes saber', parece: 'parece parecer', será: 'será sea ser es', sea: 'sea ser es', 'mío': 'mío mía mi', 'nuestra': 'nuestra nuestro nuestros nuestras', 'estas': 'estas estos esta este', 'todas': 'todas todo toda todos'
} : {
  'be': "be is are am was were been being 's 're 'm i'm you're he's she's it's we're they're that's what's there's", 'is': "is 's it's he's she's that's what's there's", 'are': "are you're we're they're 're", 'am': "am i'm 'm",
  was: 'was were', do: "do does did don't doesn't didn't", does: 'does do', did: 'did do', have: "have has had i've you've we've they've", has: 'has have', had: 'had have', go: 'go goes going went gone gonna', going: 'going go goes went gonna',
  get: 'get gets getting got', got: 'got get gets getting', know: 'know knows knew known', see: 'see sees saw seen seeing', come: 'come comes came coming', coming: 'coming come comes came', want: 'want wants wanted', wanted: 'wanted want wants',
  think: 'think thinks thought', say: 'say says said saying', said: 'said say says', tell: 'tell tells told', make: 'make makes made', take: 'take takes took taken', look: 'look looks looked looking', looking: 'looking look looks looked',
  love: 'love loves loved', like: 'like likes liked', need: 'need needs needed', let: "let lets let's", "let's": "let's let", mean: 'mean means meant', help: 'help helps helped', give: 'give gives gave given', find: 'find found finds', found: 'found find finds',
  talk: 'talk talks talked talking', talking: 'talking talk talks talked', try: 'try tries tried trying', ask: 'ask asks asked', feel: 'feel feels felt', leave: 'leave leaves left', left: 'left leave leaves', call: 'call calls called', play: 'play plays played playing',
  me: 'me my mine', my: 'my me mine', your: "your you're yours", you: "you you're your yours", i: "i i'm i'll i've i'd", we: "we we're we'll we've", they: "they they're they'll they've", it: "it it's", he: "he he's", she: "she she's", that: "that that's", what: "what what's", there: "there there's",
  'don\'t': "don't do does did", 'can\'t': "can't can cannot", "won't": "won't will", 'didn\'t': "didn't did", "doesn't": "doesn't does", "isn't": "isn't is", gonna: 'gonna going', okay: 'okay ok', ok: 'ok okay', yeah: 'yeah yes yep', hi: 'hi hello', thanks: 'thanks thank',
  mom: 'mom mother mommy mama', mother: 'mother mom', dad: 'dad father daddy papa', son: 'son boy', woman: 'woman women lady', children: 'children kids kid'
};
const cubierta = (w, set) => { const alt = (FORMAS[w] || w).split(' ').filter(Boolean); alt.push(w); return alt.some(x => set.has(x) || set.has(quitaAc(x)) || [...set].some(y => quitaAc(y) === quitaAc(x))); };

/* ---- palabras que no sirven para un chico de 5 años (no se enseñan; se saltean en el plan) ---- */
const RELLENO = new Set(LANG === 'es' ? ['oh', 'eh', 'ah', 'uh', 'vale', 'oye', 'hey'] : ['oh', 'uh', 'hey', 'hi', 'ok', 'okay', 'yeah', 'huh', 'um', 'ah', 'gonna']);
const NO_APTAS = new Set(LANG === 'es' ? ['mierda', 'maldito', 'maldita', 'muerto', 'matar', 'dinero', 'amor', 'puta', 'joder', 'diablos', 'infierno', 'demonios']
  : ['kill', 'dead', 'hell', 'damn', 'shit', 'fuck', 'god', 'sir', 'money', 'killed', 'die', 'dying', 'death', 'sex']);

const lista = fs.readFileSync(path.join(__dirname, 'datos', `top250-${LANG}.txt`), 'utf8').split('\n').filter(l => l && !l.startsWith('#')).slice(0, TOP);
const res = lista.map((w, i) => ({ w, rank: i + 1, estado: NO_APTAS.has(w) ? 'NO_APTA' : RELLENO.has(w) ? 'RELLENO' : cubierta(w, tEns) ? 'ENSEÑADA' : cubierta(w, tOid) ? 'OÍDA' : 'FALTA' }));
const cuenta = (e, n = TOP) => res.filter(r => r.estado === e && r.rank <= n).length;
const resumen = n => `top ${n}: enseñadas ${cuenta('ENSEÑADA', n)}, oídas ${cuenta('OÍDA', n)}, faltan ${cuenta('FALTA', n)}, no aptas ${cuenta('NO_APTA', n)}, relleno ${cuenta('RELLENO', n)}`;
if (MD) {
  console.log(`## ${LANG === 'es' ? 'Español' : 'Inglés'}\n`); for (const n of [50, 100, 250]) if (n <= TOP) console.log(`- ${resumen(n)}`);
  console.log('\n| Estado | Palabras (en orden de frecuencia) |\n|---|---|');
  for (const e of ['FALTA', 'OÍDA', 'NO_APTA', 'RELLENO']) console.log(`| ${e} | ${res.filter(r => r.estado === e).map(r => `${r.w} (${r.rank})`).join(', ')} |`);
} else {
  for (const n of [50, 100, 250]) if (n <= TOP) console.log(resumen(n));
  for (const e of ['FALTA', 'OÍDA', 'NO_APTA', 'RELLENO']) console.log(`\n${e}:\n  ` + res.filter(r => r.estado === e).map(r => `${r.w}(${r.rank})`).join(' '));
}
