'use strict';
/* =========================================================
   LAS AVENTURAS DE NICO — motor del juego
   Los lugares viven en capitulos/<id>.js y se listan en capitulos.js.
   ========================================================= */

/* ---------- arte común + íconos ---------- */
const ART = {
  globo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20 16h60a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H46L28 86V70h-8A12 12 0 0 1 8 58V28a12 12 0 0 1 12-12z" fill="#8B6FE8"/><circle cx="34" cy="43" r="6" fill="#fff"/><circle cx="50" cy="43" r="6" fill="#fff"/><circle cx="66" cy="43" r="6" fill="#fff"/></svg>`,
  caballito:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M46 14c14-4 26 6 24 20-1 6-6 10-12 11 6 6 10 14 8 24-2 12-12 20-22 18-8-2-10-10-6-14 4-3 9-1 9 3 0 3-3 4-5 3 6 3 14-4 13-12-1-10-10-14-16-20-6-6-8-16-2-24-6 0-10-2-12-6 6 1 12-1 21-3z" fill="#FF8FB8"/><path d="M58 18c4 2 6 6 5 10" fill="none" stroke="#E86A9A" stroke-width="3" stroke-linecap="round"/><path d="M44 52c-6-2-10 2-10 6 4-1 8 0 10-2z" fill="#FFC93C"/><path d="M52 30l-6-12M58 26l-2-12M64 30l4-10" stroke="#E86A9A" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="27" r="3.5" fill="#22314F"/><circle cx="61" cy="26" r="1.2" fill="#fff"/><path d="M70 34l12 3-12 4z" fill="#FF8FB8"/><path d="M50 60q6 4 4 10M48 72q4 2 2 6" fill="none" stroke="#E86A9A" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  pez:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M72 50l22-18v36z" fill="#FF7A1A"/><path d="M42 30l12-14 8 16z" fill="#FF7A1A"/><ellipse cx="44" cy="50" rx="33" ry="22" fill="#FF9B3D"/><path d="M50 31c-4 6-4 32 0 38M62 34c-3 6-3 26 0 32" stroke="#FFC27A" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="25" cy="45" r="6.5" fill="#fff"/><circle cx="24" cy="45" r="3.4" fill="#22314F"/><path d="M13 55q5 4 10 1" stroke="#22314F" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
  corazon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 86C20 64 10 48 10 34a20 20 0 0 1 40-6 20 20 0 0 1 40 6c0 14-10 30-40 52z" fill="#FF6F8F"/><ellipse cx="32" cy="34" rx="7" ry="5" fill="#fff" opacity=".6"/></svg>`,
  galletita:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="#E6A15C"/><circle cx="50" cy="50" r="40" fill="#F4B266"/><circle cx="48" cy="48" r="37" fill="#F9C784"/><circle cx="34" cy="38" r="5.5" fill="#6A3B14"/><circle cx="58" cy="32" r="5" fill="#6A3B14"/><circle cx="42" cy="58" r="6" fill="#6A3B14"/><circle cx="64" cy="55" r="5.5" fill="#6A3B14"/><circle cx="50" cy="42" r="4" fill="#7D471B"/><circle cx="30" cy="58" r="4" fill="#7D471B"/><circle cx="60" cy="70" r="3.5" fill="#7D471B"/><path d="M78 28c3 4 5 10 3 15-4 1-8-2-9-6-1-4 2-8 6-9z" fill="#E6A15C" opacity=".4"/></svg>`
};
const ICON = {
  play:'<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  speaker:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  star:'<svg viewBox="0 0 24 24"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" fill="currentColor"/></svg>',
  next:'<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back:'<svg viewBox="0 0 24 24"><path d="M19 12H6M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home:'<svg viewBox="0 0 24 24"><path d="M3 11.5L12 4l9 7.5M5.5 10v9.5h13V10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="14" width="4" height="5.5" fill="currentColor"/></svg>',
  close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',
  book:'<svg viewBox="0 0 24 24"><path d="M3 5.5C6 4 9 4 12 6c3-2 6-2 9-.5V19c-3-1.5-6-1.5-9 .5-3-2-6-2-9-.5z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M12 6v13.5" stroke="currentColor" stroke-width="2.2"/></svg>',
  talk:'<svg viewBox="0 0 24 24"><path d="M4 5h16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 17h-8l-5 4v-4H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 5z" fill="currentColor"/><circle cx="8" cy="11" r="1.4" fill="#fff"/><circle cx="12" cy="11" r="1.4" fill="#fff"/><circle cx="16" cy="11" r="1.4" fill="#fff"/></svg>',
  cookie:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="currentColor"/><circle cx="9" cy="9" r="1.3" fill="#fff"/><circle cx="15" cy="8" r="1.1" fill="#fff"/><circle cx="11" cy="14" r="1.4" fill="#fff"/><circle cx="16" cy="13" r="1.2" fill="#fff"/></svg>',
  gear:'<svg viewBox="0 0 24 24"><g fill="currentColor"><rect x="10.3" y="1.8" width="3.4" height="4.4" rx="1"/><rect x="10.3" y="17.8" width="3.4" height="4.4" rx="1"/><rect x="1.8" y="10.3" width="4.4" height="3.4" rx="1"/><rect x="17.8" y="10.3" width="4.4" height="3.4" rx="1"/><rect x="10.3" y="1.8" width="3.4" height="4.4" rx="1" transform="rotate(45 12 12)"/><rect x="10.3" y="17.8" width="3.4" height="4.4" rx="1" transform="rotate(45 12 12)"/><rect x="1.8" y="10.3" width="4.4" height="3.4" rx="1" transform="rotate(45 12 12)"/><rect x="17.8" y="10.3" width="4.4" height="3.4" rx="1" transform="rotate(45 12 12)"/></g><circle cx="12" cy="12" r="6.6" fill="currentColor"/><circle cx="12" cy="12" r="2.6" fill="#fff"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  del:'<svg viewBox="0 0 24 24"><path d="M9 5h11a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 20 19H9l-6.5-7z" fill="currentColor"/><path d="M11.5 9.5l5 5M16.5 9.5l-5 5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>',
  bag:'<svg viewBox="0 0 24 24"><path d="M5 8h14l-1.2 12.5H6.2z" fill="currentColor"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  lock:'<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>',
  replay:'<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v5h5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  up:'<svg viewBox="0 0 24 24"><path d="M12 5l7 9H5z" fill="currentColor"/></svg>',
  down:'<svg viewBox="0 0 24 24"><path d="M12 19l7-9H5z" fill="currentColor"/></svg>',
  left:'<svg viewBox="0 0 24 24"><path d="M5 12l9-7v14z" fill="currentColor"/></svg>',
  right:'<svg viewBox="0 0 24 24"><path d="M19 12l-9-7v14z" fill="currentColor"/></svg>'
};
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r=>setTimeout(r,ms));
const svgUri = s => 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
const img = id => ART[id] ? `<img src="${svgUri(ART[id])}" alt="">` : '';
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* textos de dos caras (árabe): "marhaba|مرحبا". La voz dice la cara de la derecha (la escritura árabe);
   en pantalla se ven las letras latinas y abajo, chiquita, la escritura árabe (partirDobles). */
const caraLatina = s => { s=String(s??''); const i=s.indexOf('|'); return i<0 ? s : s.slice(0,i); };
const caraHablada = s => { s=String(s??''); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const esDoble = s => typeof s==='string' && s.includes('|') && /[\u0600-\u06FF]/.test(s);
function partirDobles(raiz){
  if(!raiz) return;
  if(raiz.nodeType===3){ if(esDoble(raiz.nodeValue)) partirNodo(raiz); return; }
  const w=document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {acceptNode:n=>esDoble(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP});
  const nodos=[]; while(w.nextNode()) nodos.push(w.currentNode);
  nodos.forEach(partirNodo);
}
function partirNodo(n){
  if(!n.parentNode || n.parentNode.closest && n.parentNode.closest('title,script,style,option')) return;
  const v=n.nodeValue, i=v.indexOf('|'), f=document.createDocumentFragment(), sm=document.createElement('small');
  sm.className='arab'; sm.lang='ar'; sm.dir='rtl'; sm.textContent=v.slice(i+1);
  f.append(v.slice(0,i), sm); n.replaceWith(f);
}
if(typeof MutationObserver!=='undefined') new MutationObserver(ms=>{ for(const m of ms){ if(m.type==='characterData') partirDobles(m.target); else m.addedNodes.forEach(partirDobles); } }).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
// en los lienzos, solo la cara latina
if(typeof CanvasRenderingContext2D!=='undefined') for(const fn of ['fillText','strokeText']){ const o=CanvasRenderingContext2D.prototype[fn]; CanvasRenderingContext2D.prototype[fn]=function(t,...r){ return o.call(this, esDoble(t)?caraLatina(t):t, ...r); }; }
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const IMG = {};
function imgEl(id){ if(!IMG[id] && ART[id]){ const i=new Image(); i.src=svgUri(ART[id]); IMG[id]=i; } return IMG[id]; }
document.querySelectorAll('[data-ico]').forEach(el=>{ el.outerHTML = ICON[el.dataset.ico]; });

/* ---------- personajes ---------- */
const CHARACTERS = [
  // 3 desbloqueados por defecto (gratuitos)
  {id:'luna',   name:'Luna',  kind:'cat',     g:'f', fur:'#8E95A8', fur2:'#F3F1F7', seed:.3, precio:0},
  {id:'toby',   name:'Toby',  kind:'dog',     g:'m', fur:'#C08552', fur2:'#F5E1C8', ear:'#7A4B2A', seed:.7, precio:0},
  {id:'coco',   name:'Coco',  kind:'bunny',   g:'m', fur:'#F2EDE8', fur2:'#FFFFFF', inner:'#FFB3C7', seed:1.6, precio:0},

  // 3 animales premium desbloqueables con pececitos
  {id:'tigre',  name:'Tigre', kind:'tiger',   g:'m', fur:'#FF7A1A', fur2:'#FFF6ED', stripes:'#1E2436', seed:1.1, precio:15},
  {id:'leon',   name:'Leo',   kind:'lion',    g:'m', fur:'#F7B044', fur2:'#FFF4D9', mane:'#A34400', ear:'#D9822B', seed:2.4, precio:20},
  {id:'jirafa', name:'Rafa',  kind:'giraffe', g:'f', fur:'#FFCE54', fur2:'#FFF9E6', spots:'#9E5014', seed:3.1, precio:25}
];

const charDisplayName = ch => {
  if(!ch) return '';
  const lang = typeof langCode === 'function' ? langCode() : 'es';
  if(lang === 'en'){
    if(ch.id === 'tigre') return 'Tiger';
    if(ch.id === 'jirafa') return 'Raffi';
  }
  if(lang === 'fr'){
    if(ch.id === 'leon') return 'Léo';
  }
  if(lang === 'it'){
    if(ch.id === 'jirafa') return 'Raffa';
  }
  if(lang === 'ar'){
    if(ch.id === 'tigre') return 'an-nimr|النمر';
    if(ch.id === 'leon') return 'layth|ليث';
    if(ch.id === 'jirafa') return 'zarafa|زرافة';
  }
  return ch.name;
};
const animalName = ch => { const a=T.animales[ch.kind]||{}; return a[ch.g]||a.m||''; };

/* ---------- idiomas ---------- */
const PACKS = {};
function registrarIdioma(l){ PACKS[l.codigo]=l; }
window.registrarIdioma = registrarIdioma;
let LANG = null;     // paquete del idioma actual
const T = new Proxy({}, {get:(_,k)=>{
  const p=LANG||PACKS.es; const v = p && p.t[k]!==undefined ? p.t[k] : (PACKS.es && PACKS.es.t[k]);
  // con idioma de ayuda, las frases que se arman con una función también guardan su traducción
  const a=ayuda(), hv=a && PACKS[a].t[k];
  return (typeof v==='function' && typeof hv==='function') ? conTraduccion(v, ()=>hv) : v;
}});
const langCode = () => (LANG && LANG.codigo) || 'es';

/* ---------- idioma de ayuda ----------
   Para aprender desde cero: cada cosa que dice el relator en el idioma que se aprende va seguida
   de su traducción en el idioma de la familia (save.ayuda). Las traducciones salen de los otros
   archivos de textos, emparejados por posición (como el inglés de los grandes). Las sílabas y las
   partes de una frase no se traducen. Un paquete con `ayudaPorDefecto` (el árabe) la trae prendida. */
function ayudaSugerida(){
  const nav=String((navigator.languages&&navigator.languages[0])||navigator.language||'').slice(0,2);
  return [nav,'en','es'].find(c=>PACKS[c] && c!==langCode()) || null;
}
function ayuda(){
  if(!LANG || typeof save==='undefined' || !save) return null;
  let a=save.ayuda; if(a===undefined) a = LANG.ayudaPorDefecto ? ayudaSugerida() : null;
  return a && a!==LANG.codigo && PACKS[a] ? a : null;
}
let TRAD=null, TRADpar='';
const sinMarcas = s => String(s).replace(/\*/g,'');
function zipTrad(map, t, h){
  if(typeof t==='string'){ if(typeof h==='string' && t!==h && !map.has(t)) map.set(t,h); return; }
  if(!t || !h || typeof t!=='object') return;
  for(const k in t){ if(k==='silabas'||k==='partes'||k==='numTexto'||k==='ingles') continue; zipTrad(map, t[k], h[k]); }
}
function mapaTrad(){
  const a=ayuda(), par=`${langCode()}>${a}`;
  if(TRAD && TRADpar===par) return TRAD;
  const m=new Map();
  for(const id in TEXTOS){ const t=TEXTOS[id][langCode()], h=TEXTOS[id][a]; if(t && h) zipTrad(m,t,h); }
  if(PACKS[a]) zipTrad(m, LANG.t, PACKS[a].t);
  // también sin las marcas *así* (los cuentos se dicen sin ellas)
  for(const [k,v] of [...m]) if(k.includes('*')) m.set(sinMarcas(k), v);
  TRAD=m; TRADpar=par; return m;
}
/* la traducción de lo que se va a decir (o null) */
function traducir(s){
  if(!ayuda() || !s) return null;
  const M=mapaTrad(), n=save.name||'';
  let r=M.get(s);
  if(r==null){ let k=sinMarcas(s); if(n) k=k.split(n).join('{N}'); r=M.get(k); }
  if(r==null) return null;
  r=sinMarcas(r); if(n) r=r.split('{N}').join(n);
  return r;
}
/* para traducir lo que reciben las funciones: palabras, números escritos y objetos con texto */
function trArg(x){
  if(typeof x==='string') return traducir(x) ?? x;
  if(Array.isArray(x)) return x.map(trArg);
  if(x && typeof x==='object'){ const o={...x}; for(const k in o) if(typeof o[k]==='string') o[k]=traducir(o[k]) ?? o[k]; return o; }
  return x;
}
/* envuelve una función de textos: devuelve lo mismo, y anota la traducción de lo que armó.
   dameAyuda() da la misma función en el idioma de ayuda (o nada). */
function conTraduccion(f, dameAyuda){
  return (...args)=>{
    const r=f(...args), g=ayuda() && dameAyuda();
    if(typeof r==='string' && typeof g==='function'){ try{ const tr=g(...args.map(trArg)); if(typeof tr==='string' && tr!==r) mapaTrad().set(r, tr); }catch(e){} }
    return r;
  };
}

/* ---------- capítulos: base común + textos por idioma ---------- */
const BASES = {}, TEXTOS = {};
let CAP_LIST = [];
function registrarCapitulo(c){
  // los dibujos de todos los lugares comparten nombres: si uno pisa a otro, se ve el dibujo equivocado en otro lugar
  for(const k in c.arte||{}) if(ART[k]) console.warn(`El dibujo "${k}" de ${c.id} pisa otro con el mismo nombre`);
  BASES[c.id]=c; Object.assign(ART, c.arte||{});
}
function registrarTextos(id, lang, t){ (TEXTOS[id] || (TEXTOS[id]={}))[lang]=t; }
window.registrarCapitulo = registrarCapitulo; window.registrarTextos = registrarTextos;
/* las funciones de los textos de un microjuego ("Poné tres manzanas…") anotan su traducción */
function envolverMj(id, mj){
  const o={...(mj||{})};
  for(const k in o) if(typeof o[k]==='function') o[k]=conTraduccion(o[k], ()=>{ const a=ayuda(); return a && ((TEXTOS[id][a]||{}).microjuego||{})[k]; });
  return o;
}
function buildCap(id, lang){
  const b=BASES[id], t=TEXTOS[id] && TEXTOS[id][lang]; if(!b || !t) return null;
  const c={
    id, key:`${lang}:${id}`, num:b.num, arteTapa:b.arteTapa, titulo:t.titulo,
    lugar:{...t.lugar, arte:b.lugarArte}, bienvenida:t.bienvenida, orden:b.orden,
    niveles:b.niveles.map((n,i)=>({...n, ...t.niveles[i]})),
    estaciones:{}, objetos:{...(t.objetos||{})},
    final:{npc:b.final.npc, anim:b.final.anim||'vuelo', propina:b.final.propina||0, icono:b.final.icono||'puerta', desfile:b.final.desfile||null, ...t.final, frase:{...t.final.frase, arte:b.final.arte}, ordenes:(b.final.ordenes||[]).map((a,i)=>({accion:a, texto:(t.final.ordenes||[])[i]||''}))},
    uniforme:b.uniforme||null,
    numeros:t.numeros||null, meses:t.meses||null,
    microjuego: b.microjuego ? {...b.microjuego, ...envolverMj(id, t.microjuego), ingredientes:(b.microjuego.ingredientes||[]).map((k,i)=>({k, ...(((t.microjuego||{}).ingredientes||[])[i]||{})}))} : null,
    palabrasExtra:(b.palabrasExtra||[]).map((a,i)=>({...t.palabrasExtra[i], arte:a})),
    frasesExtra:(b.frasesExtra||[]).map((a,i)=>({...t.frasesExtra[i], arte:a})),
    preguntas:(b.preguntas||[]).map((q,i)=>({...q, ...t.preguntas[i]}))
  };
  for(const k of b.orden){
    const be=b.estaciones[k], te=t.estaciones[k];
    c.estaciones[k]={...be, ...te, cuento: te.cuento ? {titulo:te.cuento.titulo, paginas:te.cuento.paginas.map((x,i)=>({texto:x, escena:be.escenas[i]||{}}))} : null};
  }
  c.palabras = [
    {id:`${c.key}:lugar`, ...c.lugar},
    ...c.orden.map(k=>({id:`${c.key}:${k}:palabra`, ...c.estaciones[k].palabra, arte:c.estaciones[k].item, est:k})),
    ...c.palabrasExtra.map((p,i)=>({id:`${c.key}:xp${i}`, ...p}))
  ];
  c.frases = [
    ...c.orden.map(k=>({id:`${c.key}:${k}:frase`, ...c.estaciones[k].frase, arte:c.estaciones[k].item, est:k})),
    {id:`${c.key}:final`, ...c.final.frase},
    ...c.frasesExtra.map((p,i)=>({id:`${c.key}:xf${i}`, ...p}))
  ];
  return c;
}
/* ---------- inglés para los grandes ----------
   Cada lugar tiene capitulos/<id>/en.js con la misma forma que los textos de cada idioma:
   se emparejan por posición. Un idioma puede corregir alguna traducción con `ingles: {texto: 'english'}`.
   Solo se muestra en pantalla al tocar un texto: el relator nunca habla en inglés. */
const EN = {};
let ENT = {};
function zipEn(map, t, en){
  if(typeof t==='string'){ if(typeof en==='string' && !map[t]) map[t]=en; return; }
  if(!t || !en || typeof t!=='object') return;
  for(const k in t){ if(k==='silabas'||k==='partes'||k==='numTexto'||k==='ingles') continue; zipEn(map, t[k], en[k]); }
}
function armarIngles(){
  ENT=(PACKS.en||{}).t||{};
  for(const l of (window.IDIOMAS||['es'])){
    if(l==='en') continue;   // quien aprende inglés no necesita la traducción al inglés
    const m=EN[l]={};
    for(const id in TEXTOS){ const t=TEXTOS[id][l]; if(!t) continue; Object.assign(m, t.ingles||{}); zipEn(m, t, TEXTOS[id].en); }
    const P=PACKS[l]; if(P) zipEn(m, P.t, ENT);
  }
}
const enDe = s => { if(langCode()==='en') return ''; const m=EN[langCode()]||{}; return m[s] || m[String(s||'').trim()] || ''; };
const enT = (k,...a) => { if(langCode()==='en') return ''; const v=ENT[k]; return typeof v==='function' ? v(...a) : (v||''); };
const enAttr = en => en ? ` data-en="${esc(en)}"` : '';
/* una sílaba sola (una vocal, a veces con acento) se lee como letra: le decimos a la voz cómo suena */
/* además, en castellano e italiano (sinTilde) la tilde de una sílaba suelta se saca: suelta ya va acentuada,
   y algunas voces deletrean "tó" como "t, o con acento" */
const sonido = sl => { const m=(LANG&&LANG.sonido)||{}, k=sl.trim().toLowerCase(); if(m[k]) return m[k]; return (LANG&&LANG.sinTilde) ? sl.normalize('NFD').replace(/[\u0300\u0301]/g,'').normalize('NFC') : sl; };
const palabraDe = (c,k) => c.palabras.find(p=>p.est===k);
const fraseDe = (c,k) => c.frases.find(p=>p.est===k);
function cargarScript(src){ return new Promise(res=>{ const s=document.createElement('script'); s.src=src; s.onload=res; s.onerror=()=>{ console.warn('No se pudo cargar', src); res(); }; document.head.appendChild(s); }); }
async function cargarTodo(){
  const langs=window.IDIOMAS||['es'], ids=window.CAPITULOS||[];
  await Promise.all([
    ...[...new Set([...langs,'en'])].map(l=>cargarScript(`idiomas/${l}.js`)),   // inglés siempre: de ahí salen las traducciones para los grandes
    cargarScript('tienda.js'),
    ...ids.map(id=>cargarScript(`capitulos/${id}/base.js`)),
    ...ids.flatMap(id=>langs.map(l=>cargarScript(`capitulos/${id}/${l}.js`))),
    cargarScript('idiomas/grandes.js'),
    ...(langs.includes('en') ? [] : ids.map(id=>cargarScript(`capitulos/${id}/en.js`)))
  ]);
  armarIngles();
}
const idiomasDisponibles = () => (window.IDIOMAS||['es']).filter(l=>PACKS[l]);
function setLang(code, guardar=true){
  if(!PACKS[code]) code=idiomasDisponibles()[0]||'es';
  LANG=PACKS[code]; if(guardar){ save.lang=code; persist(); }
  document.documentElement.lang=code;
  CAP_LIST=(window.CAPITULOS||[]).map(id=>buildCap(id,code)).filter(Boolean);
  CAP_LIST.forEach((c,i)=>c.num=i+1);   // el número de semana sale del orden de capitulos.js
  applyLang();
}
/* la primera vez (todavía sin idioma), la pantalla de inicio va pasando por todos los idiomas */
let rotTm=0;
function rotarInicio(){
  clearInterval(rotTm);
  const langs=idiomasDisponibles(); if(save.lang || langs.length<2) return;
  let i=Math.max(0, langs.indexOf(langCode()));
  rotTm=setInterval(()=>{
    if(save.lang || scr.start.hidden){ clearInterval(rotTm); if(save.lang) applyLang(); return; }
    i=(i+1)%langs.length; const code=langs[i], t=PACKS[code].t, els=scr.start.querySelectorAll('[data-t]');
    els.forEach(el=>el.classList.add('swap'));
    setTimeout(()=>els.forEach(el=>{ const v=t[el.dataset.t]; if(typeof v==='string'){ if(esDoble(v)){ el.innerHTML=`${esc(caraLatina(v))}<small class="arab" lang="ar" dir="rtl">${esc(caraHablada(v))}</small>`; } else { el.textContent=v; } } el.lang=code; el.classList.remove('swap'); }), 280);
  }, 3000);
}
function applyLang(){
  document.querySelectorAll('[data-t]').forEach(el=>{
    const v=T[el.dataset.t];
    if(typeof v==='string'){
      if(esDoble(v)){
        el.innerHTML=`${esc(caraLatina(v))}<small class="arab" lang="ar" dir="rtl">${esc(caraHablada(v))}</small>`;
      } else {
        el.textContent=v;
      }
    }
    el.removeAttribute('lang');
  });
  updateNames();
  const lb=$('#langBtn'); if(lb && LANG) lb.innerHTML=`<img src="${svgUri(LANG.bandera)}" alt="">`;
}

/* ---------- guardado ---------- */
const STORE_KEY='aventuras-nico.v3';
const defaultSave = () => ({name:'', lang:null, charId:null, grownup:false, voces:{}, pausa:1, caps:{}, puntos:0, caballitos:0, galletitas:0, cuenta:{}, personajes:{luna:true, toby:true, coco:true}, armario:{tiene:{}, puesto:{}}, juegos:{}});
function loadSave(){
  try{ const s=JSON.parse(localStorage.getItem(STORE_KEY)); if(s && typeof s==='object'){ const d=defaultSave(); return Object.assign(d, s, {personajes:Object.assign({luna:true, toby:true, coco:true}, s.personajes||{}), armario:Object.assign(d.armario, s.armario||{})}); } }catch(e){}
  // migración desde la versión anterior (solo castellano)
  try{ const o=JSON.parse(localStorage.getItem('aventuras-nico.v2')); if(o && typeof o==='object'){
    const s=defaultSave(); s.name=o.name||''; s.charId=o.charId||null; s.grownup=!!o.grownup; s.pausa=o.pausa||1; s.puntos=o.puntos||0; s.lang='es';
    if(o.voice) s.voces.es=o.voice; for(const k in (o.caps||{})) s.caps['es:'+k]=o.caps[k]; return s; } }catch(e){}
  return defaultSave();
}
function mezclarSave(d){ const s=defaultSave(); return Object.assign(s, d||{}, {personajes:Object.assign({luna:true, toby:true, coco:true}, (d&&d.personajes)||{}), armario:Object.assign(s.armario, (d&&d.armario)||{})}); }
/* con cuenta, cada chico tiene su copia local (por si se corta internet) y la del servidor */
const storeKey = () => NUBE.alumno ? `${STORE_KEY}:alumno:${NUBE.alumno.id}` : STORE_KEY;
function persist(){
  save._t=Date.now();
  try{ localStorage.setItem(storeKey(), JSON.stringify(save)); }catch(e){}
  if(NUBE.alumno) nubeGuardarLuego();
}
let save = loadSave();
function capSave(id){ const k=`${langCode()}:${id}`; if(!save.caps[k]) save.caps[k]={sellos:{}, final:false, pos:null}; return save.caps[k]; }
const char = () => CHARACTERS.find(c=>c.id===save.charId) || CHARACTERS[0];

function normPromptKey(s){
  return String(s||'').trim().toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[¡!¿?.,:«»"']/g, '')
    .replace(/\s+/g, ' ');
}
function promptAudioUrl(lang, text){
  if(!text || !window.STATIC_PROMPTS) return null;
  const map = window.STATIC_PROMPTS[lang];
  if(!map) return null;
  const k = normPromptKey(text);
  if(map[k]) return map[k];
  if(window.save && save.name && text.includes(save.name)){
    const kNico = normPromptKey(text.replace(save.name, 'Nico'));
    if(map[kNico]) return map[kNico];
    const kSin = normPromptKey(text.replace(save.name, ''));
    if(map[kSin]) return map[kSin];
  }
  const h = caraHablada(text);
  if(h !== text){
    const kh = normPromptKey(h);
    if(map[kh]) return map[kh];
  }
  return null;
}
function staticAudioUrl(id){
  if(!id || !window.STATIC_AUDIO) return null;
  if(window.STATIC_AUDIO.get){
    const u = window.STATIC_AUDIO.get(id);
    if(u) return u;
  }
  if(window.STATIC_AUDIO[id]) return window.STATIC_AUDIO[id];
  if(window.STATIC_AUDIO.has && window.STATIC_AUDIO.has(id)){
    const p = id.split(':');
    if(p.length < 3) return null;
    return `audio/${p[0]}/${p[1]}/${p.slice(2).join('-')}.mp3`;
  }
  return null;
}
let dbp=null;
function idb(){ if(dbp) return dbp; dbp=new Promise((res,rej)=>{ try{ const r=indexedDB.open('aventuras-nico-audio',1); r.onupgradeneeded=()=>r.result.createObjectStore('clips'); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); }catch(e){ rej(e); } }); return dbp; }
async function idbOp(mode, fn){ const db=await idb(); return new Promise((res,rej)=>{ const tx=db.transaction('clips',mode); const r=fn(tx.objectStore('clips')); tx.oncomplete=()=>res(r && r.result); tx.onerror=()=>rej(tx.error); }); }
const clips = {
  ids:new Set(), cache:new Map(),
  nube:new Set(), global:new Set(),   // grabaciones en el servidor: las de esta cuenta y las del administrador (para todos)
  has(id){ return !!staticAudioUrl(id) || this.ids.has(id) || this.nube.has(id) || this.global.has(id); },
  mia(id){ return this.ids.has(id) || this.nube.has(id) || (!!NUBE.usuario && NUBE.usuario.admin && this.global.has(id)); },
  async cargarNube(){
    this.nube.clear(); this.global.clear(); this.cache.clear();
    if(!NUBE.on) return;
    try{ const j=await api('grabaciones'); (j.mias||[]).forEach(k=>this.nube.add(k)); (j.globales||[]).forEach(k=>this.global.add(k)); }catch(e){}
  },
  async bajar(id){
    for(const de of ['mia','global']){
      if(!(de==='mia' ? this.nube.has(id) : this.global.has(id))) continue;
      try{ const j=await api(`grabaciones?clave=${encodeURIComponent(id)}&de=${de}`); return base64ABlob(j.audio, j.tipo); }catch(e){}
    }
    return null;
  },
  async init(){
    try{
      const keys=(await idbOp('readonly',s=>s.getAllKeys()))||[], langs=window.IDIOMAS||['es'];
      for(const k of keys){
        if(langs.includes(String(k).split(':')[0])){ this.ids.add(k); continue; }
        const b=await idbOp('readonly',s=>s.get(k)); if(b){ await idbOp('readwrite',s=>s.put(b,'es:'+k)); this.ids.add('es:'+k); }
        await idbOp('readwrite',s=>s.delete(k));
      }
    }catch(e){}
  },
  async get(id){
    if(this.cache.has(id)) return this.cache.get(id);
    let b=null;
    if(this.ids.has(id)){ try{ b=await idbOp('readonly',s=>s.get(id)); }catch(e){} }
    if(!b) b=await this.bajar(id);
    if(b) this.cache.set(id,b); return b;
  },
  /* con cuenta, la grabación también se sube: así no se pierde y (si sos el administrador) la escuchan todos */
  async put(id,b){
    this.cache.set(id,b);
    if(NUBE.usuario){
      const j=await api('grabaciones',{method:'PUT', body:{clave:id, tipo:b.type||'audio/webm', audio:await blobABase64(b)}});
      (j.global ? this.global : this.nube).add(id);
      return;
    }
    this.ids.add(id); try{ await idbOp('readwrite',s=>s.put(b,id)); }catch(e){}
  },
  async del(id){
    this.cache.delete(id);
    if(this.ids.has(id)){ this.ids.delete(id); try{ await idbOp('readwrite',s=>s.delete(id)); }catch(e){} }
    if(NUBE.usuario && this.mia(id)){ try{ await api(`grabaciones?clave=${encodeURIComponent(id)}`,{method:'DELETE'}); }catch(e){} this.nube.delete(id); if(NUBE.usuario.admin) this.global.delete(id); }
  },
  async clear(){ for(const id of [...this.ids, ...this.nube, ...(NUBE.usuario&&NUBE.usuario.admin?this.global:[])]) await this.del(id); }
};

/* ---------- voz ----------
   Cada idioma usa SIEMPRE una voz de ese idioma. Si el navegador todavía no cargó
   sus voces, esperamos: hablar sin voz elegida hace que use la voz en inglés. */
let voices=[], voicesReady=null;
function refreshVoices(){ try{ voices=speechSynthesis.getVoices()||[]; }catch(e){ voices=[]; } }
if('speechSynthesis' in window){ refreshVoices(); try{ speechSynthesis.addEventListener('voiceschanged', refreshVoices); }catch(e){} }
function ensureVoices(){
  if(voices.length || !('speechSynthesis' in window)) return Promise.resolve();
  if(!voicesReady) voicesReady=new Promise(res=>{ const t0=Date.now(); const poll=()=>{ refreshVoices(); if(voices.length || Date.now()-t0>2500) res(); else setTimeout(poll,120); }; poll(); });
  return voicesReady;
}
const normLang = l => String(l||'').toLowerCase().replace('_','-');
const voicesFor = code => voices.filter(v=>normLang(v.lang).startsWith(code));
function voiceFor(code){
  const pack=PACKS[code]; const pref=save.voces && save.voces[code];
  const list=voicesFor(code);
  if(pref){ const v=list.find(v=>v.voiceURI===pref); if(v) return v; }
  const nice=v=>/natural|neural|online|premium|enhanced|google/i.test(v.name)?0:1;
  // las voces "Multilingual" adivinan el idioma de cada frase: una sílaba suelta como "to" la leen en inglés
  const multi=v=>/multilingual|multilingüe/i.test(v.name)?1:0;
  list.sort((a,b)=>multi(a)-multi(b) || ((pack?pack.rankVoz(normLang(a.lang)):0)-(pack?pack.rankVoz(normLang(b.lang)):0)) || nice(a)-nice(b));
  return list[0]||null;
}
async function speak(text, rate=.85, code=langCode()){
  await ensureVoices();
  return new Promise(res=>{
    if(!('speechSynthesis' in window)) return setTimeout(res, 400);
    let done=false; const fin=()=>{ if(!done){ done=true; clearTimeout(tm); res(); } };
    const u=new SpeechSynthesisUtterance(caraHablada(text)); const v=voiceFor(code);
    u.lang = v ? v.lang : (PACKS[code] ? PACKS[code].tag : code);
    if(v) u.voice=v;
    u.rate=rate; u.pitch=1.05; u.onend=fin; u.onerror=fin;
    const tm=setTimeout(fin, 2500+text.length*120);
    try{ speechSynthesis.speak(u); }catch(e){ fin(); }
  });
}
let curAudio=null, curAudioDone=null;
function playBlob(b){ return new Promise(res=>{ const url=URL.createObjectURL(b); const a=new Audio(url); curAudio=a; const done=()=>{ URL.revokeObjectURL(url); if(curAudio===a){ curAudio=null; curAudioDone=null; } res(); }; curAudioDone=done; a.onended=done; a.onerror=done; a.play().catch(done); }); }
function playUrl(url){ return new Promise(res=>{ const a=new Audio(url); curAudio=a; const done=()=>{ if(curAudio===a){ curAudio=null; curAudioDone=null; } res(); }; curAudioDone=done; a.onended=done; a.onerror=done; a.play().catch(done); }); }
function stopAudio(){ if(curAudio){ try{ curAudio.pause(); }catch(e){} curAudioDone && curAudioDone(); } }
let sayTok=0;
/* parts: textos, o {t:'texto', id:'grabación', lento:true, lang:'fr'} */
async function sayAll(parts){
  const my=++sayTok; try{ speechSynthesis.cancel(); }catch(e){} stopAudio();
  for(let p of parts){
    if(my!==sayTok) return false;
    if(typeof p==='string') p={t:p};
    const sUrl = (p.id ? staticAudioUrl(p.id) : null) || (p.t ? promptAudioUrl(p.lang||langCode(), p.t) : null);
    const b = (!sUrl && p.id && clips.has(p.id)) ? await clips.get(p.id) : null;
    if(my!==sayTok) return false;
    if(sUrl) await playUrl(sUrl);
    else if(b) await playBlob(b);
    else await speak(p.t, p.lento ? .62 : .85, p.lang||langCode());
    // idioma de ayuda: enseguida, la traducción (nunca de una sílaba o de un pedazo de frase)
    if(!p.lento && !p.sinTrad && !p.lang && my===sayTok){ const tr=traducir(p.t); if(tr){ await sleep(150); if(my!==sayTok) return false; await speak(tr, .9, ayuda()); } }
  }
  return my===sayTok;
}
function hush(){ sayTok++; seqTok++; turno(false); try{ speechSynthesis.cancel(); }catch(e){} stopAudio(); }

let ac=null;
function actx(){ try{ if(!ac) ac=new (window.AudioContext||window.webkitAudioContext)(); if(ac.state==='suspended') ac.resume(); }catch(e){} return ac; }
function tone(f,d=.12,type='sine',v=.12,when=0,slide=0){ const a=actx(); if(!a) return; const t=a.currentTime+when; const o=a.createOscillator(), g=a.createGain(); o.type=type; o.frequency.setValueAtTime(f,t); if(slide) o.frequency.exponentialRampToValueAtTime(slide,t+d); g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(v,t+.012); g.gain.exponentialRampToValueAtTime(.0001,t+d); o.connect(g).connect(a.destination); o.start(t); o.stop(t+d+.05); }
function noise(d=.3,v=.12,f0=800,f1=3000,when=0){ const a=actx(); if(!a) return; const t=a.currentTime+when; const n=Math.floor(a.sampleRate*d); const buf=a.createBuffer(1,n,a.sampleRate); const ch=buf.getChannelData(0); for(let i=0;i<n;i++) ch[i]=Math.random()*2-1; const s=a.createBufferSource(); s.buffer=buf; const fl=a.createBiquadFilter(); fl.type='bandpass'; fl.frequency.setValueAtTime(f0,t); fl.frequency.exponentialRampToValueAtTime(f1,t+d); const g=a.createGain(); g.gain.setValueAtTime(.0001,t); g.gain.exponentialRampToValueAtTime(v,t+d*.3); g.gain.exponentialRampToValueAtTime(.0001,t+d); s.connect(fl).connect(g).connect(a.destination); s.start(t); }
const sfx = {
  step:()=>tone(560,.05,'triangle',.035),
  bump:()=>tone(150,.12,'square',.04,0,110),
  yay:()=>[523,659,784,1047].forEach((f,i)=>tone(f,.2,'triangle',.11,i*.09)),
  oops:()=>tone(330,.25,'sine',.1,0,200),
  stamp:()=>{ tone(95,.18,'square',.16,0,60); noise(.12,.18,400,200); },
  ding:()=>{ tone(880,.6,'sine',.12); tone(660,.7,'sine',.12,.28); },
  whoosh:()=>noise(.45,.12,300,2400),
  tick:()=>tone(1200,.05,'sine',.05),
  jet:()=>noise(3.5,.1,150,1600),
  splash:()=>{ noise(.14,.08,1600,400); tone(450,.08,'sine',.08,0,620); },
  music:()=>{ const n=[523,659,784,880,1047][Math.floor(Math.random()*5)]; tone(n,.25,'sine',.09); },
  bubble:()=>tone(650,.07,'sine',.07,0,900),
  star:()=>[880,1175,1568].forEach((f,i)=>tone(f,.11,'triangle',.05,i*.04)),
  party:()=>{ tone(480,.07,'sawtooth',.06,0,920); tone(960,.14,'triangle',.08,.04); },
  gadgetSwitch:()=>tone(760,.06,'triangle',.06,0,980)
};

/* =========================================================
   DIBUJO
   ========================================================= */
function rr(c,x,y,w,h,r){ r=Math.max(0,Math.min(r,w/2,h/2)); c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
function ell(c,x,y,rx,ry,fill,rot=0){ c.beginPath(); c.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),rot,0,Math.PI*2); c.fillStyle=fill; c.fill(); }
function poly(c,pts,fill){ c.beginPath(); c.moveTo(pts[0],pts[1]); for(let i=2;i<pts.length;i+=2) c.lineTo(pts[i],pts[i+1]); c.closePath(); c.fillStyle=fill; c.fill(); }
const ACCIONES=['saltar','girar','aplaudir','agacharse','arriba','bailar','correr'];
function drawImg(c,id,x,y,size,rot=0){ const im=imgEl(id); if(!im||!im.complete||!im.naturalWidth) return; c.save(); c.translate(x,y); if(rot) c.rotate(rot); c.drawImage(im,-size/2,-size/2,size,size); c.restore(); }

/* un animal: x,y = pies; s = alto */
const fx0 = s => s*.26*.14;   // el centro de la cara (para las manos al aplaudir)
function drawAnimal(c,a,x,y,s,o={}){
  const t=(o.t||0)+(a.seed||0), f=o.facing||1, walk=o.walk||o.accion==='correr';
  const bob = walk ? Math.abs(Math.sin(t*14))*s*.06 : Math.sin(t*2.2)*s*.012;
  if(!o.noShadow){ c.save(); c.globalAlpha=.16; ell(c,x,y,s*.26,s*.06,'#000'); c.restore(); }
  // acciones (Simón dice, la plaza): saltar, girar, aplaudir, agacharse, arriba, bailar, correr
  const ac=o.accion, salto=ac==='saltar'?Math.abs(Math.sin(t*5))*s*.22:0;
  const sx=ac==='girar'?Math.cos(t*7):1, sy=ac==='agacharse'?.72+.28*Math.abs(Math.cos(t*3)):1;
  c.save(); c.translate(x,y-bob-(o.lift||0)-salto); if(ac==='bailar') c.rotate(Math.sin(t*6)*.16); c.scale(f*sx,sy);
  const fur=a.fur, fur2=a.fur2||'#fff';
  if(a.kind==='cat'){ c.strokeStyle=fur; c.lineWidth=s*.085; c.lineCap='round'; const w=Math.sin(t*3)*s*.05; c.beginPath(); c.moveTo(-s*.15,-s*.16); c.bezierCurveTo(-s*.42,-s*.14,-s*.40+w,-s*.42,-s*.30+w,-s*.52); c.stroke(); }
  if(a.kind==='tiger'){ c.strokeStyle=fur; c.lineWidth=s*.085; c.lineCap='round'; const w=Math.sin(t*3)*s*.05; c.beginPath(); c.moveTo(-s*.15,-s*.16); c.bezierCurveTo(-s*.42,-s*.14,-s*.40+w,-s*.42,-s*.30+w,-s*.52); c.stroke(); ell(c,-s*.29+w,-s*.51,s*.035,s*.035,'#1E2436'); }
  if(a.kind==='lion'){ c.strokeStyle=fur; c.lineWidth=s*.08; c.lineCap='round'; const w=Math.sin(t*2.8)*s*.04; c.beginPath(); c.moveTo(-s*.15,-s*.16); c.bezierCurveTo(-s*.4,-s*.14,-s*.38+w,-s*.4,-s*.28+w,-s*.48); c.stroke(); ell(c,-s*.27+w,-s*.48,s*.055,s*.055,a.mane||'#A34400'); }
  if(a.kind==='giraffe'){ c.strokeStyle=fur; c.lineWidth=s*.055; c.lineCap='round'; const w=Math.sin(t*2.5)*s*.03; c.beginPath(); c.moveTo(-s*.15,-s*.16); c.bezierCurveTo(-s*.32,-s*.14,-s*.34+w,-s*.35,-s*.28+w,-s*.44); c.stroke(); ell(c,-s*.27+w,-s*.44,s*.04,s*.06,a.spots||'#9E5014',-.3); }
  if(a.kind==='dog'){ c.strokeStyle=fur; c.lineWidth=s*.07; c.lineCap='round'; c.beginPath(); c.moveTo(-s*.16,-s*.22); c.lineTo(-s*.32,-s*.36+Math.sin(t*10)*s*.04); c.stroke(); }
  if(a.kind==='bunny') ell(c,-s*.2,-s*.2,s*.07,s*.07,fur2);
  if(a.kind==='bear') ell(c,-s*.19,-s*.2,s*.05,s*.05,fur);
  const R=o.ropa||{};
  if(R.espalda) drawCapa(c,R.espalda,s,t);
  else if(o.backpack){ c.fillStyle='#FF6F59'; rr(c,-s*.31,-s*.45,s*.15,s*.26,s*.05); c.fill(); c.fillStyle='#E04E39'; rr(c,-s*.30,-s*.33,s*.13,s*.08,s*.03); c.fill(); }
  const st = walk ? Math.sin(t*14)*s*.04 : 0;
  ell(c,-s*.09+st,-s*.03,s*.08,s*.05,fur2); ell(c,s*.10-st,-s*.03,s*.08,s*.05,fur2);
  ell(c,0,-s*.22,s*.2,s*.2,fur);
  ell(c,s*.03,-s*.19,s*.12,s*.14,fur2);
  if(a.kind==='tiger'){
    c.strokeStyle=a.stripes||'#1E2436'; c.lineWidth=s*.022; c.lineCap='round';
    for(const [sx,sy] of [[-.15,-.24], [-.12,-.16], [-.14,-.3]]){
      c.beginPath(); c.moveTo(sx*s,sy*s); c.lineTo((sx+.06)*s,sy*s); c.stroke();
    }
  }
  if(a.kind==='giraffe'){
    const sp = a.spots||'#9E5014';
    ell(c,-s*.1,-s*.26,s*.035,s*.025,sp,.3);
    ell(c,-s*.08,-s*.16,s*.03,s*.028,sp,-.2);
    ell(c,-s*.02,-s*.31,s*.03,s*.022,sp,.4);
    ell(c,-s*.01,-s*.14,s*.025,s*.03,sp);
  }
  if(R.piernas) drawPiernas(c,R.piernas,s,st);
  if(R.torso) drawTorso(c,R.torso,s);
  if(ac==='arriba'||ac==='saltar'||ac==='bailar'){ for(const sd of [1,-1]){ const ang=-.8+Math.sin(t*8+sd)*.18; c.save(); c.translate(sd*s*.12,-s*.3); c.scale(sd,1); c.rotate(ang); ell(c,s*.15,0,s*.16,s*.055,fur); c.restore(); } }
  else if(o.wave){ const ang=-1.9+Math.sin(t*8)*.35; c.save(); c.translate(s*.14,-s*.3); c.rotate(ang); ell(c,s*.09,0,s*.1,s*.05,fur); c.restore(); if(R.torso) ell(c,s*.14,-s*.3,s*.055,s*.05,R.torso.color); }
  else {
    ell(c,s*.16,-s*.22,s*.05,s*.085,fur,-.3); if(R.torso) ell(c,s*.15,-s*.275,s*.058,s*.045,R.torso.color,-.3);
    const previewGadget = (o.probar && o.probar.lugar==='gadget') 
      ? GADGETS.find(g => g.id === o.probar.id || g.tipo === o.probar.id || ('gadget_' + g.tipo) === o.probar.id) 
      : null;
    const gToShow = previewGadget || (typeof getEquippedGadget === 'function' ? getEquippedGadget() : null);
    if(o.gadget!==false && gToShow && typeof drawHeldGadget==='function'){
      drawHeldGadget(c, gToShow.tipo, s);
    }
  }
  const hy=-s*.6, hr=s*.26, fx=hr*.14;
  if(a.kind==='lion'){
    const mc=a.mane||'#A34400';
    for(let ang=0; ang<Math.PI*2; ang+=Math.PI/7){
      ell(c, Math.cos(ang)*hr*.96, hy+Math.sin(ang)*hr*.96, hr*.38, hr*.38, mc);
    }
  }
  if(a.kind==='cat'){ for(const sd of [-1,1]){ poly(c,[sd*hr*.95,hy-hr*.2, sd*hr*.74,hy-hr*1.18, sd*hr*.2,hy-hr*.82],fur); poly(c,[sd*hr*.8,hy-hr*.38, sd*hr*.72,hy-hr*.95, sd*hr*.38,hy-hr*.76],'#FFA3BC'); } }
  if(a.kind==='tiger'){ for(const sd of [-1,1]){ ell(c,sd*hr*.75,hy-hr*.75,hr*.3,hr*.3,'#1E2436'); ell(c,sd*hr*.75,hy-hr*.75,hr*.22,hr*.22,fur); ell(c,sd*hr*.75,hy-hr*.75,hr*.14,hr*.14,'#FFA3BC'); } }
  if(a.kind==='lion'){ for(const sd of [-1,1]){ ell(c,sd*hr*.74,hy-hr*.7,hr*.24,hr*.24,a.ear||fur); ell(c,sd*hr*.74,hy-hr*.7,hr*.13,hr*.13,'#FFF4D9'); } }
  if(a.kind==='giraffe'){
    c.strokeStyle=fur; c.lineWidth=s*.032; c.lineCap='round';
    for(const sd of [-1,1]){ c.beginPath(); c.moveTo(sd*hr*.28,hy-hr*.7); c.lineTo(sd*hr*.36,hy-hr*1.18); c.stroke(); ell(c,sd*hr*.36,hy-hr*1.2,hr*.12,hr*.12,a.spots||'#9E5014'); }
    for(const sd of [-1,1]){ ell(c,sd*hr*.88,hy-hr*.48,hr*.3,hr*.15,fur,sd*.35); ell(c,sd*hr*.86,hy-hr*.48,hr*.2,hr*.09,'#FFB3C7',sd*.35); }
  }
  if(a.kind==='bunny'){ for(const sd of [-1,1]){ ell(c,sd*hr*.38,hy-hr*1.25,hr*.21,hr*.64,fur,sd*.14); ell(c,sd*hr*.38,hy-hr*1.22,hr*.1,hr*.46,a.inner||'#FFB3C7',sd*.14); } }
  if(a.kind==='bear'){ for(const sd of [-1,1]){ ell(c,sd*hr*.72,hy-hr*.72,hr*.3,hr*.3,fur); ell(c,sd*hr*.72,hy-hr*.72,hr*.15,hr*.15,fur2); } }
  ell(c,0,hy,hr,hr*.94,fur);
  if(a.kind==='tiger'){
    for(const sd of [-1,1]) ell(c,sd*hr*.85,hy+hr*.22,hr*.26,hr*.18,fur2);
    c.strokeStyle='#1E2436'; c.lineWidth=s*.022; c.lineCap='round';
    for(const dx of [-.07,0,.07]){ c.beginPath(); c.moveTo(dx*s+fx,hy-hr*.92); c.lineTo(dx*s*.6+fx,hy-hr*.6); c.stroke(); }
    for(const sd of [-1,1]){ c.beginPath(); c.moveTo(sd*hr*.88,hy); c.lineTo(sd*hr*.6,hy+hr*.05); c.stroke(); c.beginPath(); c.moveTo(sd*hr*.88,hy+hr*.18); c.lineTo(sd*hr*.65,hy+hr*.18); c.stroke(); }
  }
  if(a.kind==='giraffe'){
    const sp=a.spots||'#9E5014';
    ell(c,fx-hr*.08,hy-hr*.6,hr*.12,hr*.09,sp,.2);
    ell(c,fx+hr*.14,hy-hr*.42,hr*.11,hr*.1,sp,-.2);
    ell(c,fx-hr*.22,hy-hr*.3,hr*.09,hr*.08,sp);
  }
  if(a.stripes && a.kind!=='tiger'){ c.strokeStyle=a.stripes; c.lineWidth=s*.026; c.lineCap='round'; for(const dx of [-.08,0,.08]){ c.beginPath(); c.moveTo(dx*s+fx,hy-hr*.93); c.lineTo(dx*s*.75+fx,hy-hr*.58); c.stroke(); } }
  if(a.kind==='dog'){ for(const sd of [-1,1]) ell(c,sd*hr*.9,hy+hr*.08,hr*.24,hr*.52,a.ear||fur,-sd*.32); }
  ell(c,fx,hy+hr*.38,hr*.46,hr*.32,fur2);
  c.save(); c.globalAlpha=.35; ell(c,fx-hr*.56,hy+hr*.3,hr*.13,hr*.09,'#FF7FA0'); ell(c,fx+hr*.6,hy+hr*.3,hr*.13,hr*.09,'#FF7FA0'); c.restore();
  const blink = (t % 4.2) < .13;
  for(const ex of [fx-hr*.34, fx+hr*.36]){
    if(blink){ c.strokeStyle='#22314F'; c.lineWidth=s*.02; c.beginPath(); c.moveTo(ex-hr*.11,hy-hr*.02); c.lineTo(ex+hr*.11,hy-hr*.02); c.stroke(); }
    else { ell(c,ex,hy-hr*.02,hr*.12,hr*.14,a.eye||'#22314F'); if(a.eye) ell(c,ex,hy-hr*.02,hr*.05,hr*.11,'#22314F'); ell(c,ex+hr*.04,hy-hr*.07,hr*.045,hr*.045,'#fff'); }
  }
  if(R.cara) drawAnteojos(c,R.cara,fx,hy,hr,s);
  if(a.kind==='cat' || a.kind==='tiger') poly(c,[fx-hr*.1,hy+hr*.18, fx+hr*.1,hy+hr*.18, fx,hy+hr*.29],'#FF7FA0');
  else if(a.kind==='giraffe'){ ell(c,fx,hy+hr*.26,hr*.18,hr*.12,'#5C2E0B'); ell(c,fx-hr*.08,hy+hr*.26,hr*.04,hr*.05,'#22314F'); ell(c,fx+hr*.08,hy+hr*.26,hr*.04,hr*.05,'#22314F'); }
  else if(a.kind==='lion') ell(c,fx,hy+hr*.22,hr*.14,hr*.1,'#7A3508');
  else ell(c,fx,hy+hr*.22,hr*.12,hr*.08,'#22314F');
  c.strokeStyle='#22314F'; c.lineWidth=s*.016; c.lineCap='round';
  if(o.mood==='wow') ell(c,fx,hy+hr*.47,hr*.1,hr*.13,'#22314F');
  else if(o.mood==='triste'){ c.beginPath(); c.moveTo(fx-hr*.15,hy+hr*.44); c.quadraticCurveTo(fx,hy+hr*.3,fx+hr*.15,hy+hr*.44); c.stroke(); ell(c,fx+hr*.4,hy+hr*.16+((t*.6)%1)*hr*.2,hr*.06,hr*.09,'#7CC6F0'); }
  else if(o.mood==='talk'){ const m=.06+Math.abs(Math.sin(t*9))*.09; ell(c,fx,hy+hr*.45,hr*.13,hr*m,'#22314F'); }
  else { c.beginPath(); c.moveTo(fx-hr*.15,hy+hr*.36); c.quadraticCurveTo(fx-hr*.07,hy+hr*.46,fx,hy+hr*.33); c.quadraticCurveTo(fx+hr*.07,hy+hr*.46,fx+hr*.15,hy+hr*.36); c.stroke(); }
  if(a.kind==='cat' || a.kind==='tiger'){ c.lineWidth=s*.01; c.strokeStyle='rgba(34,49,79,.55)'; for(const sd of [-1,1]) for(const dy of [-.04,.06]){ c.beginPath(); c.moveTo(fx+sd*hr*.32,hy+hr*(.32+dy)); c.lineTo(fx+sd*hr*.82,hy+hr*(.26+dy*1.8)); c.stroke(); } }
  if(R.cuello) drawCuello(c,R.cuello,fx,hy,hr,s);
  if(R.espalda) ell(c,0,hy+hr*.98,hr*.12,hr*.12,R.espalda.color2||'#FFC93C');
  if(a.toque) drawToque(c,hy,hr,s);
  else if(o.hat) drawGorra(c,o.hat,hy,hr,s);
  else if(R.cabeza) drawCabeza(c,R.cabeza,hy,hr,s);
  c.restore();
}
function drawGorra(c,col,hy,hr,s){
  c.fillStyle=col; c.beginPath(); c.ellipse(0,hy-hr*.5,hr*.82,hr*.52,0,Math.PI,0); c.fill(); ell(c,hr*.5,hy-hr*.5,hr*.6,hr*.13,col);
  if(col==='#FFFFFF'){ c.strokeStyle='#22314F'; c.lineWidth=s*.02; c.beginPath(); c.moveTo(-hr*.82,hy-hr*.5); c.lineTo(hr*1.1,hy-hr*.5); c.stroke(); ell(c,0,hy-hr*.72,hr*.14,hr*.1,'#FFC93C'); }
  else ell(c,0,hy-hr*.72,hr*.12,hr*.1,'#FFE07A');
}
function drawToque(c,hy,hr,s){
  const by=hy-hr*.62;
  c.fillStyle='#FFFFFF'; rr(c,-hr*.58,by-hr*.5,hr*1.16,hr*.56,hr*.1); c.fill();
  ell(c,-hr*.36,by-hr*.62,hr*.34,hr*.32,'#FFFFFF'); ell(c,hr*.36,by-hr*.62,hr*.34,hr*.32,'#FFFFFF'); ell(c,0,by-hr*.8,hr*.4,hr*.38,'#FFFFFF');
  c.fillStyle='rgba(34,49,79,.12)'; c.fillRect(-hr*.58,by-hr*.08,hr*1.16,hr*.12);
}
/* ---------- ropa ---------- */
function clipBody(c,s){ c.beginPath(); c.ellipse(0,-s*.22,s*.2,s*.2,0,0,Math.PI*2); c.clip(); }
function drawTorso(c,it,s){
  const top=-s*.44, bot=-s*.135;
  c.save(); clipBody(c,s);
  c.fillStyle=it.color; c.fillRect(-s*.25,top,s*.5,bot-top);
  c.fillStyle=it.color2||'#fff';
  if(it.estilo==='rayas') for(let yy=top+s*.05; yy<bot; yy+=s*.062) c.fillRect(-s*.25,yy,s*.5,s*.03);
  if(it.estilo==='vertical') for(let xx=-s*.19; xx<s*.25; xx+=s*.085) c.fillRect(xx,top,s*.038,bot-top);
  if(it.estilo==='estrella') star5(c,s*.04,-s*.27,s*.075,it.color2);
  if(it.estilo==='jardinero'){ c.fillStyle=it.color2; c.fillRect(-s*.25,top,s*.5,bot-top); c.fillStyle='rgba(255,255,255,.25)'; for(let yy=top; yy<bot; yy+=s*.05) c.fillRect(-s*.25,yy,s*.5,s*.012); c.fillStyle=it.color; rr(c,-s*.1,-s*.32,s*.24,s*.2,s*.02); c.fill(); c.fillRect(-s*.25,-s*.22,s*.5,s*.1); c.fillRect(-s*.08,top,s*.04,s*.14); c.fillRect(s*.08,top,s*.04,s*.14); ell(c,-s*.06,-s*.31,s*.015,s*.015,'#FFC93C'); ell(c,s*.1,-s*.31,s*.015,s*.015,'#FFC93C'); }
  if(it.estilo==='bata'){ poly(c,[-s*.03,top, s*.09,top, s*.03,-s*.24],it.color2); poly(c,[s*.09,top, s*.21,top, s*.03,-s*.24],it.color2); c.fillStyle='rgba(34,49,79,.15)'; c.fillRect(s*.025,-s*.24,s*.012,bot+s*.24); c.fillStyle='#E8483B'; c.fillRect(s*.1,-s*.23,s*.06,s*.018); c.fillRect(s*.121,-s*.251,s*.018,s*.06); }
  if(it.estilo==='delantal'){ rr(c,-s*.12,-s*.34,s*.26,s*.24,s*.03); c.fill(); c.fillRect(-s*.25,-s*.27,s*.5,s*.025); c.fillStyle='rgba(255,255,255,.35)'; rr(c,-s*.04,-s*.25,s*.1,s*.06,s*.015); c.fill(); }
  c.fillStyle='rgba(0,0,0,.13)'; c.fillRect(-s*.25,bot-s*.022,s*.5,s*.022);
  c.restore();
}
function drawPiernas(c,it,s,st){
  c.save(); clipBody(c,s);
  c.fillStyle=it.color; c.fillRect(-s*.25,-s*.15,s*.5,s*.2);
  c.fillStyle='rgba(0,0,0,.14)'; c.fillRect(-s*.25,-s*.15,s*.5,s*.025);
  c.restore();
  if(it.estilo==='largo'){ ell(c,-s*.09+st,-s*.045,s*.085,s*.038,it.color); ell(c,s*.10-st,-s*.045,s*.085,s*.038,it.color); }
}
function drawCapa(c,it,s,t){
  const sw=Math.sin(t*3)*s*.03;
  c.beginPath(); c.moveTo(-s*.12,-s*.42); c.lineTo(s*.1,-s*.42); c.lineTo(s*.06,-s*.03); c.quadraticCurveTo(-s*.14,s*.02,-s*.36+sw,-s*.06); c.closePath(); c.fillStyle=it.color; c.fill();
  c.beginPath(); c.moveTo(-s*.12,-s*.42); c.lineTo(-s*.03,-s*.42); c.lineTo(-s*.2+sw,-s*.05); c.lineTo(-s*.36+sw,-s*.06); c.closePath(); c.fillStyle='rgba(0,0,0,.16)'; c.fill();
}
function drawAnteojos(c,it,fx,hy,hr,s){
  const ey=hy-hr*.02;
  c.strokeStyle=it.color; c.lineWidth=s*.02;
  for(const ex of [fx-hr*.34, fx+hr*.36]){ ell(c,ex,ey,hr*.22,hr*.18,'rgba(25,30,50,.9)'); c.beginPath(); c.ellipse(ex,ey,hr*.22,hr*.18,0,0,Math.PI*2); c.stroke(); ell(c,ex-hr*.07,ey-hr*.07,hr*.06,hr*.035,'rgba(255,255,255,.65)'); }
  c.beginPath(); c.moveTo(fx-hr*.12,ey-hr*.03); c.lineTo(fx+hr*.14,ey-hr*.03); c.stroke();
}
function drawCuello(c,it,fx,hy,hr,s){
  const ny=hy+hr*.97;
  if(it.estilo==='estetoscopio'){
    c.strokeStyle=it.color; c.lineWidth=s*.022; c.lineCap='round'; c.beginPath(); c.moveTo(fx-hr*.5,ny-hr*.05); c.quadraticCurveTo(fx-hr*.45,ny+hr*.75,fx,ny+hr*.8); c.quadraticCurveTo(fx+hr*.45,ny+hr*.75,fx+hr*.5,ny-hr*.05); c.stroke();
    c.beginPath(); c.moveTo(fx,ny+hr*.8); c.lineTo(fx+hr*.15,ny+hr*1.25); c.stroke(); ell(c,fx+hr*.17,ny+hr*1.32,hr*.13,hr*.13,'#AEB8C8'); ell(c,fx+hr*.17,ny+hr*1.32,hr*.07,hr*.07,'#E3E8F0');
    return;
  }
  if(it.estilo==='mono'){
    poly(c,[fx,ny, fx-hr*.36,ny-hr*.18, fx-hr*.36,ny+hr*.18],it.color); poly(c,[fx,ny, fx+hr*.36,ny-hr*.18, fx+hr*.36,ny+hr*.18],it.color);
    ell(c,fx,ny,hr*.1,hr*.1,it.color); ell(c,fx,ny,hr*.1,hr*.1,'rgba(0,0,0,.2)');
  } else {
    c.fillStyle=it.color; rr(c,-hr*.8,ny-hr*.14,hr*1.6,hr*.3,hr*.15); c.fill(); rr(c,-hr*.46,ny,hr*.28,hr*.72,hr*.08); c.fill();
    c.fillStyle=it.color2||'#fff'; c.fillRect(-hr*.46,ny+hr*.38,hr*.28,hr*.08); c.fillRect(-hr*.46,ny+hr*.55,hr*.28,hr*.08); c.fillRect(hr*.22,ny-hr*.14,hr*.09,hr*.3); c.fillRect(-hr*.12,ny-hr*.14,hr*.09,hr*.3);
  }
}
function drawCabeza(c,it,hy,hr,s){
  if(it.estilo==='gorra') return drawGorra(c,it.color,hy,hr,s);
  if(it.estilo==='cumple'){ const b=hy-hr*.62; poly(c,[-hr*.46,b, hr*.46,b, hr*.08,b-hr*1.05],it.color); c.fillStyle=it.color2||'#FFC93C'; for(const [dx,dy] of [[-.18,-.18],[.14,-.34],[-.04,-.58],[.2,-.08]]) ell(c,dx*hr,b+dy*hr,hr*.07,hr*.07,it.color2||'#FFC93C'); ell(c,hr*.08,b-hr*1.08,hr*.13,hr*.13,'#fff'); return; }
  if(it.estilo==='paja'){ ell(c,0,hy-hr*.62,hr*1.35,hr*.22,it.color); c.fillStyle=it.color; c.beginPath(); c.ellipse(0,hy-hr*.66,hr*.66,hr*.62,0,Math.PI,0); c.fill(); c.fillStyle=it.color2||'#E8483B'; c.fillRect(-hr*.66,hy-hr*.82,hr*1.32,hr*.14); c.strokeStyle='rgba(138,86,54,.35)'; c.lineWidth=s*.008; for(const dx of [-.4,0,.4]){ c.beginPath(); c.moveTo(dx*hr,hy-hr*.9); c.lineTo(dx*hr*1.1,hy-hr*1.2); c.stroke(); } return; }
  if(it.estilo==='lana'){
    c.fillStyle=it.color; c.beginPath(); c.ellipse(0,hy-hr*.4,hr*.94,hr*.72,0,Math.PI,0); c.fill();
    c.strokeStyle='rgba(0,0,0,.12)'; c.lineWidth=s*.012; for(const dx of [-.5,-.17,.17,.5]){ c.beginPath(); c.moveTo(dx*hr,hy-hr*.42); c.lineTo(dx*hr*.7,hy-hr*1.02); c.stroke(); }
    c.fillStyle=it.color2||'#fff'; rr(c,-hr*.98,hy-hr*.5,hr*1.96,hr*.26,hr*.12); c.fill(); ell(c,0,hy-hr*1.16,hr*.22,hr*.22,it.color2||'#fff');
    return;
  }
  if(it.estilo==='corona'){
    const by=hy-hr*.7;
    poly(c,[-hr*.56,by, hr*.56,by, hr*.64,by-hr*.56, hr*.3,by-hr*.24, 0,by-hr*.64, -hr*.3,by-hr*.24, -hr*.64,by-hr*.56],it.color);
    c.fillStyle='rgba(0,0,0,.12)'; c.fillRect(-hr*.56,by-hr*.12,hr*1.12,hr*.12);
    for(const [x,yy] of [[-hr*.64,by-hr*.56],[0,by-hr*.64],[hr*.64,by-hr*.56]]) ell(c,x,yy,hr*.08,hr*.08,it.color);
    ell(c,0,by-hr*.26,hr*.1,hr*.1,it.color2||'#E8483B'); ell(c,-hr*.32,by-hr*.06,hr*.06,hr*.06,'#2E86DE'); ell(c,hr*.32,by-hr*.06,hr*.06,hr*.06,'#2FBF8F');
  }
}
/* el personaje del jugador, con la ropa puesta */
const TIENDA_MAP = () => Object.fromEntries((window.TIENDA||[]).map(i=>[i.id,i]));
function outfit(extra, uni){
  const m=TIENDA_MAP(), r={}, p=save.armario.puesto||{};
  for(const k in p){ const it=m[p[k]]; if(it) r[it.lugar]=it; }
  if(uni) Object.assign(r, uni);
  if(extra) r[extra.lugar]=extra;
  return r;
}
/* uniforme de trabajo del capítulo (por ejemplo, el de mozo): se pone al ganar el sello de la estación `desde` */
const uniformeActivo = () => (CAP && cs && CAP.uniforme && !scr.game.hidden && cs.sellos[CAP.uniforme.desde]) ? CAP.uniforme.ropa : null;
function drawHero(c,x,y,s,o={}){
  const uni = o.uniforme!==undefined ? o.uniforme : uniformeActivo();
  const shooting = (performance.now() - gadgetShootAnim) < 320;
  drawAnimal(c,char(),x,y,s,{...o, action: shooting ? 'arriba' : o.action, mood: shooting ? 'wow' : o.mood, backpack:o.backpack && !uni, ropa:outfit(o.probar, uni)});
}

/* lienzos vivos (retratos, cuentos, vuelo) */
const lives=new Set();
function live(cv, fn){ if(cv) lives.add({cv, fn}); }
function drawLive(L,t){ const cv=L.cv; const r=cv.getBoundingClientRect(); if(!r.width||!r.height) return; const dpr=Math.min(2,window.devicePixelRatio||1); const W=Math.round(r.width*dpr), H=Math.round(r.height*dpr); if(cv.width!==W||cv.height!==H){ cv.width=W; cv.height=H; } const c=cv.getContext('2d'); c.setTransform(dpr,0,0,dpr,0,0); c.clearRect(0,0,r.width,r.height); L.fn(c,r.width,r.height,t); }

/* =========================================================
   ACCESORIOS Y DISPOSITIVOS (GADGETS)
   ========================================================= */
const GADGETS = [
  { id: 'gadget_agua',      tipo: 'agua',      ico: '💦', color: '#2E86DE', sfx: 'splash' },
  { id: 'gadget_musica',    tipo: 'musica',    ico: '🎵', color: '#E8483B', sfx: 'music' },
  { id: 'gadget_burbujas',  tipo: 'burbujas',  ico: '🫧', color: '#2FBF8F', sfx: 'bubble' },
  { id: 'gadget_estrellas', tipo: 'estrellas', ico: '⭐', color: '#FFC93C', sfx: 'star' },
  { id: 'gadget_fiesta',    tipo: 'fiesta',    ico: '🎉', color: '#8B6FE8', sfx: 'party' },
];

let gadgetParticles = [];
let gadgetShootAnim = 0;
const objBounces = new Map();

const gadgetName = g => (T.ropa && (T.ropa[g.id] || T.ropa['gadget_' + g.tipo])) || g.tipo;

function getEquippedGadget(){
  if(typeof save === 'undefined' || !save.armario) return null;
  const p = save.armario.puesto?.gadget;
  if(!p) return null;
  const g = GADGETS.find(x => x.id === p || x.tipo === p || ('gadget_' + x.tipo) === p);
  if(!g) return null;
  if(!save.armario.tiene?.[g.id] && !save.armario.tiene?.[g.tipo]) return null;
  return g;
}

function getOwnedGadgets(){
  if(typeof save === 'undefined' || !save.armario || !save.armario.tiene) return [];
  return GADGETS.filter(g => save.armario.tiene[g.id] || save.armario.tiene[g.tipo]);
}

function updateGadgetHud(){
  const g = getEquippedGadget();
  const ico = $('#gadgetIco'), name = $('#gadgetName');
  if(!g){
    if(ico) ico.textContent = '🏪';
    if(name) name.textContent = T.tienda || 'Tienda';
    return;
  }
  if(ico) ico.textContent = g.ico;
  if(name) {
    const full = gadgetName(g);
    name.textContent = full.split(' ')[0] || full;
  }
}

function showGadgetBanner(g){
  let banner = $('#gadgetBanner');
  if(!banner){
    banner = document.createElement('div');
    banner.id = 'gadgetBanner';
    banner.className = 'gadget-banner';
    $('#stage')?.appendChild(banner);
  }
  const name = g.nombre || gadgetName(g);
  banner.textContent = `${g.ico} ${name}`;
  banner.classList.remove('show');
  void banner.offsetWidth;
  banner.classList.add('show');
  clearTimeout(banner._t);
  banner._t = setTimeout(() => banner.classList.remove('show'), 1600);
}

function setGadget(id, announce=true){
  const g = GADGETS.find(x => x.id === id || x.tipo === id || ('gadget_' + x.tipo) === id);
  if(!g) return;
  if(typeof save !== 'undefined' && save.armario){
    save.armario.puesto.gadget = g.id;
    save.gadget = g.tipo;
    persist();
  }
  updateGadgetHud();
  sfx.gadgetSwitch();
  if(announce) showGadgetBanner(g);
}

function nextGadget(){
  const owned = getOwnedGadgets();
  if(!owned.length){
    sfx.bump();
    const aviso = (save && save.lang==='es') ? '¡Conseguí un accesorio en la tienda!' : (T.tienda || 'Tienda');
    showGadgetBanner({ ico: '🏪', nombre: aviso });
    return;
  }
  const cur = getEquippedGadget();
  const idx = cur ? owned.findIndex(x => x.id === cur.id) : -1;
  const next = owned[(idx + 1) % owned.length];
  setGadget(next.id);
}

function dispararGadget(){
  if(scr.game.hidden || !CAP || !modal.hidden) return;
  actx();
  const g = getEquippedGadget();
  if(!g){
    sfx.bump();
    const aviso = (save && save.lang==='es') ? '¡Conseguí un accesorio en la tienda!' : (T.tienda || 'Tienda');
    showGadgetBanner({ ico: '🏪', nombre: aviso });
    return;
  }
  sfx[g.sfx]();
  gadgetShootAnim = performance.now();
  spawnGadgetParticles(g.tipo);
}

function drawHeldGadget(c, id, s){
  c.save();
  if(id === 'agua'){
    rr(c, 0, -s*.04, s*.14, s*.07, s*.02); c.fillStyle = '#2E86DE'; c.fill();
    rr(c, s*.12, -s*.025, s*.04, s*.04, s*.01); c.fillStyle = '#FFC93C'; c.fill();
    ell(c, s*.05, -s*.06, s*.04, s*.04, '#7CC6F0');
  } else if(id === 'musica'){
    rr(c, -s*.02, -s*.06, s*.14, s*.1, s*.02); c.fillStyle = '#E8483B'; c.fill();
    ell(c, s*.02, -s*.01, s*.025, s*.025, '#1E2436');
    ell(c, s*.08, -s*.01, s*.025, s*.025, '#1E2436');
  } else if(id === 'burbujas'){
    c.strokeStyle = '#2FBF8F'; c.lineWidth = Math.max(1.5, s*.018);
    c.beginPath(); c.moveTo(-s*.02, s*.04); c.lineTo(s*.06, -s*.04); c.stroke();
    ell(c, s*.08, -s*.06, s*.035, s*.035, '#2FBF8F');
    ell(c, s*.08, -s*.06, s*.02, s*.02, 'rgba(255,255,255,.7)');
  } else if(id === 'estrellas'){
    c.strokeStyle = '#8B6FE8'; c.lineWidth = Math.max(1.5, s*.018);
    c.beginPath(); c.moveTo(-s*.02, s*.04); c.lineTo(s*.06, -s*.04); c.stroke();
    star5(c, s*.07, -s*.06, s*.04, '#FFC93C');
  } else if(id === 'fiesta'){
    poly(c, [-s*.02, s*.02, s*.12, -s*.06, s*.08, s*.06], '#8B6FE8');
    ell(c, s*.13, -s*.04, s*.02, s*.02, '#FFC93C');
  }
  c.restore();
}

function spawnGadgetParticles(tipo){
  const T = view.T;
  const dir = player.facing || 1;
  const startX = (player.rx + dir * 0.35) * T + T * 0.5;
  const startY = (player.ry - 0.25) * T + T * 0.5;
  const now = performance.now();

  const fwdX = player.x + dir, fwdY = player.y;
  const hitCh = tileAt(cur, fwdX, fwdY);
  if(hitCh && hitCh !== ' ' && hitCh !== '.' && hitCh !== 'P'){
    objBounces.set(`${fwdX},${fwdY}`, now);
  }

  if(tipo === 'agua'){
    for(let i=0; i<9; i++){
      const angle = (dir > 0 ? 0 : Math.PI) + (Math.random() - 0.5) * 0.45;
      const spd = (3.5 + Math.random() * 4.5) * (T / 40);
      gadgetParticles.push({
        tipo: 'agua', x: startX, y: startY,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 1.2 * (T / 40),
        size: (4 + Math.random() * 5) * (T / 40),
        life: 0.9 + Math.random() * 0.3,
        birth: now
      });
    }
  } else if(tipo === 'musica'){
    const notas = ['♪','♫','♬','♩'];
    const cols = ['#FF6F8F','#FFC93C','#2FBF8F','#2E86DE','#A88DF2'];
    for(let i=0; i<4; i++){
      gadgetParticles.push({
        tipo: 'musica', char: notas[i % notas.length],
        col: cols[Math.floor(Math.random()*cols.length)],
        x: startX + (Math.random()-0.5)*10,
        y: startY + (Math.random()-0.5)*10,
        vx: dir * (1.2 + Math.random()*2) * (T/40),
        vy: -(1.5 + Math.random()*2.2) * (T/40),
        size: (16 + Math.random()*8) * (T/40),
        life: 1.2 + Math.random()*0.4,
        birth: now + i*70
      });
    }
  } else if(tipo === 'burbujas'){
    for(let i=0; i<6; i++){
      gadgetParticles.push({
        tipo: 'burbujas',
        x: startX + dir*i*4,
        y: startY + (Math.random()-0.5)*12,
        vx: dir * (1.2 + Math.random()*2.4) * (T/40),
        vy: -(0.6 + Math.random()*1.8) * (T/40),
        rad: (6 + Math.random()*10) * (T/40),
        life: 1.4 + Math.random()*0.5,
        wobble: Math.random()*Math.PI*2,
        birth: now + i*50
      });
    }
  } else if(tipo === 'estrellas'){
    for(let i=0; i<8; i++){
      const angle = (dir > 0 ? 0 : Math.PI) + (Math.random() - 0.5) * 0.8;
      const spd = (2.5 + Math.random() * 4.2) * (T / 40);
      gadgetParticles.push({
        tipo: 'estrellas', x: startX, y: startY,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 1 * (T / 40),
        rad: (7 + Math.random() * 7) * (T / 40),
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 8,
        col: ['#FFC93C','#FFE07A','#FF9B3D','#FFFFFF'][Math.floor(Math.random()*4)],
        life: 0.95 + Math.random() * 0.35,
        birth: now
      });
    }
  } else if(tipo === 'fiesta'){
    const cols = ['#E8483B','#FF9B3D','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8','#FF6F8F'];
    for(let i=0; i<16; i++){
      const angle = (dir > 0 ? 0 : Math.PI) + (Math.random() - 0.5) * 1.1;
      const spd = (2.2 + Math.random() * 5.2) * (T / 40);
      const isHeart = Math.random() < 0.25;
      gadgetParticles.push({
        tipo: 'fiesta', isHeart, col: cols[i % cols.length],
        x: startX, y: startY,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 2 * (T / 40),
        w: (4 + Math.random()*4) * (T/40),
        h: (6 + Math.random()*7) * (T/40),
        rot: Math.random()*Math.PI,
        spin: (Math.random() - 0.5) * 10,
        life: 1.1 + Math.random()*0.4,
        birth: now
      });
    }
  }
}

function renderGadgetParticles(c, now, t){
  if(!gadgetParticles.length) return;
  const T = view.T;
  const gravity = 0.08 * (T / 40);
  const remaining = [];

  for(const p of gadgetParticles){
    if(now < p.birth){ remaining.push(p); continue; }
    const age = (now - p.birth) / 1000;
    if(age >= p.life) continue;
    const alpha = Math.max(0, 1 - (age / p.life));

    c.save();
    c.globalAlpha = alpha;

    if(p.tipo === 'agua'){
      p.x += p.vx; p.y += p.vy; p.vy += gravity * 1.5;
      ell(c, p.x, p.y, p.size, p.size * 0.8, '#5DADE2');
      ell(c, p.x - p.size*0.2, p.y - p.size*0.2, p.size * 0.35, p.size * 0.3, '#EBF5FB');
    } else if(p.tipo === 'musica'){
      p.x += p.vx; p.y += p.vy;
      const wave = Math.sin(t * 6 + p.x * 0.05) * 1.2;
      c.fillStyle = p.col;
      c.font = `800 ${Math.round(p.size)}px 'Baloo 2',sans-serif`;
      c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText(p.char, p.x + wave, p.y);
    } else if(p.tipo === 'burbujas'){
      p.x += p.vx; p.y += p.vy; p.vy -= 0.015;
      const wob = Math.sin(t * 7 + p.wobble) * p.rad * 0.15;
      c.strokeStyle = '#4DD0E1'; c.lineWidth = 2;
      c.fillStyle = 'rgba(224,247,250,0.35)';
      c.beginPath();
      c.ellipse(p.x, p.y, p.rad + wob, p.rad - wob, 0, 0, Math.PI*2);
      c.fill(); c.stroke();
      ell(c, p.x - p.rad*0.35, p.y - p.rad*0.35, p.rad*0.25, p.rad*0.2, '#FFFFFF');
    } else if(p.tipo === 'estrellas'){
      p.x += p.vx; p.y += p.vy; p.vy += gravity * 0.8;
      p.rot += p.spin * 0.02;
      c.translate(p.x, p.y); c.rotate(p.rot);
      star5(c, 0, 0, p.rad, p.col);
      ell(c, 0, 0, p.rad * 0.3, p.rad * 0.3, '#FFFFFF');
    } else if(p.tipo === 'fiesta'){
      p.x += p.vx; p.y += p.vy; p.vy += gravity * 1.2;
      p.rot += p.spin * 0.03;
      c.translate(p.x, p.y); c.rotate(p.rot);
      if(p.isHeart){
        c.fillStyle = '#FF4081';
        c.font = `${Math.round(p.h * 1.8)}px sans-serif`;
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText('💖', 0, 0);
      } else {
        c.fillStyle = p.col;
        c.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      }
    }

    c.restore();
    remaining.push(p);
  }

  gadgetParticles = remaining;
}

/* =========================================================
   MUNDO
   ========================================================= */
/* cada piso tiene su tamaño y su forma: ' ' en el mapa es afuera del edificio */
let COLS=15, ROWS=9; const T_STEP=170;
function medirPiso(){ if(!CAP) return; const m=CAP.niveles[cur].mapa; ROWS=m.length; COLS=Math.max(...m.map(r=>r.length)); }
const esVacio = ch => ch===' ';
const esPared = ch => ch==='#' || ch==='~' || ch==='G' || ch==='W';
const WALK=new Set(['.','P','U','D','L']);
const PASS=new Set(['.','P']);
let CAP=null, cs=null, cur=0;
const player={x:6,y:6,rx:6,ry:6,facing:1,moving:null,path:null,bump:null,goal:null};
let busy=false, inputLock=false, keys=[], lastBump=0, flowTok=0, seqTok=0;
const worldCv=$('#world'), wc=worldCv.getContext('2d');
let view={T:40,ox:0,oy:0,w:0,h:0};
/* el mapa ocupa lo que queda libre: con pantalla táctil, las flechas van abajo (vertical) o al costado (horizontal) */
function resizeWorld(){
  const st=$('#stage').getBoundingClientRect(); if(!st.width) return; medirPiso();
  const dpr=Math.min(2,window.devicePixelRatio||1); worldCv.width=Math.round(st.width*dpr); worldCv.height=Math.round(st.height*dpr); wc.setTransform(dpr,0,0,dpr,0,0);
  const pad=$('#dpad'), conPad=pad && getComputedStyle(pad).display!=='none', pr=conPad?pad.getBoundingClientRect():null;
  const vertical=st.height>st.width;
  const libreW=st.width-(conPad&&!vertical?pr.width+20:0), libreH=st.height-(conPad&&vertical?pr.height+16:0);
  const T=Math.max(14,Math.floor(Math.min(libreW/COLS,(libreH-8)/(ROWS+.45))));
  const oy = conPad&&vertical ? Math.ceil(T*.7) : Math.max(Math.ceil(T*.42),Math.floor((libreH-T*ROWS)/2+T*.2));   // vertical: el mapa arriba, las flechas abajo
  view={T,w:st.width,h:st.height,ox:Math.floor((libreW-T*COLS)/2),oy};
}
new ResizeObserver(resizeWorld).observe($('#stage'));
const tileAt=(lv,x,y)=>{ const row=CAP.niveles[lv].mapa[y]; return row ? (row[x]||' ') : ' '; };
function findTile(lv,ch){ const m=CAP.niveles[lv].mapa; for(let y=0;y<m.length;y++){ const x=m[y].indexOf(ch); if(x>=0) return {level:lv,x,y}; } return null; }
function findAny(ch){ for(let l=0;l<CAP.niveles.length;l++){ const t=findTile(l,ch); if(t) return t; } return null; }
const allStamped=()=>CAP.orden.every(k=>cs.sellos[k]);
const isStation=ch=>!!CAP.estaciones[ch];
function guideTarget(){
  const next=CAP.orden.find(k=>!cs.sellos[k]) || 'G';
  const tl=findAny(next); if(!tl) return null;
  if(tl.level===cur) return tl;
  return findTile(cur, tl.level>cur?'U':'D') || findTile(cur,'L');
}
function windowSpan(lv,y){ const row=CAP.niveles[lv].mapa[y]; return [row.indexOf('W'), row.lastIndexOf('W')]; }

function drawArrow(c,ax,ay,ang,T){
  c.save(); c.translate(ax,ay); c.rotate(ang);
  c.fillStyle='#FFC93C'; c.strokeStyle='#22314F'; c.lineWidth=Math.max(2,T*.05); c.lineJoin='round';
  c.beginPath(); c.moveTo(0,-T*.34); c.lineTo(T*.26,-T*.06); c.lineTo(T*.1,-T*.06); c.lineTo(T*.1,T*.24); c.lineTo(-T*.1,T*.24); c.lineTo(-T*.1,-T*.06); c.lineTo(-T*.26,-T*.06); c.closePath(); c.fill(); c.stroke();
  c.restore();
}
function drawWorld(t){
  const L=CAP.niveles[cur], T=view.T, c=wc;
  c.clearRect(0,0,view.w,view.h);
  c.save(); c.translate(view.ox,view.oy);
  // sombra del edificio, después piso y paredes tile por tile (así cada piso puede tener otra forma)
  c.save(); c.globalAlpha=.16; c.fillStyle='#22314F'; c.beginPath();
  for(let y=0;y<ROWS;y++) for(let x=0;x<COLS;x++) if(!esVacio(tileAt(cur,x,y))) c.rect(x*T+5,y*T+9,T+.5,T+.5);
  c.fill('nonzero'); c.restore();
  let esquina=null;
  for(let y=0;y<ROWS;y++) for(let x=0;x<COLS;x++){
    const ch=tileAt(cur,x,y); if(esVacio(ch)) continue;
    const X=x*T, Y=y*T;
    if(esPared(ch)){
      if(!esquina) esquina={x,y};
      c.fillStyle=L.pared; c.fillRect(X,Y,T+.5,T+.5);
      const arriba=tileAt(cur,x,y-1), abajo=tileAt(cur,x,y+1);
      if(!esPared(arriba)){ c.fillStyle='rgba(255,255,255,.2)'; c.fillRect(X,Y,T+.5,T*.3); }
      if(!esPared(abajo) && !esVacio(abajo)){ c.fillStyle=L.paredOscura; c.fillRect(X,Y+T*.86,T+.5,T*.14); }
      if(!esPared(tileAt(cur,x-1,y)) && !esVacio(tileAt(cur,x-1,y))){ c.fillStyle='rgba(255,255,255,.14)'; c.fillRect(X,Y,T*.12,T); }
      if(!esPared(tileAt(cur,x+1,y)) && !esVacio(tileAt(cur,x+1,y))){ c.fillStyle='rgba(0,0,0,.1)'; c.fillRect(X+T*.88,Y,T*.12,T); }
    } else { c.fillStyle=L.piso[(x+y)&1]; c.fillRect(X,Y,T+.5,T+.5); }
  }
  if(esquina){ const bx=esquina.x*T+T*.5, by=esquina.y*T+T*.5; ell(c,bx,by,T*.36,T*.36,'#fff'); c.fillStyle='#22314F'; c.font=`800 ${Math.round(T*.5)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillText(String(L.num),bx,by+T*.04); }
  // destino del clic
  if(player.goal){ const g=player.goal; c.save(); c.globalAlpha=.55+.25*Math.sin(t*8); c.strokeStyle='#FFC93C'; c.lineWidth=T*.08; c.beginPath(); c.ellipse(g.x*T+T*.5,g.y*T+T*.82,T*.32,T*.12,0,0,Math.PI*2); c.stroke(); c.restore(); }
  const pr=Math.round(player.ry);
  for(let y=0;y<ROWS;y++){
    for(let x=0;x<COLS;x++) drawTileObj(tileAt(cur,x,y), x, y, t);
    const fz=fishes[cur]; if(fz && fz.y===y) drawFish(fz,t);
    if(y===pr) drawHero(c,player.rx*T+T*.5,player.ry*T+T*.92,T*.95,{t,facing:player.facing,walk:!!player.moving,backpack:true});
  }
  for(let y=0;y<ROWS;y++) for(let x=0;x<COLS;x++) drawSign(tileAt(cur,x,y),x,y,t);
  renderGadgetParticles(c, performance.now(), t);
  const g=guideTarget();
  if(g && !player.path){
    let gx=g.x; if(tileAt(cur,g.x,g.y)==='W'){ const [a,b]=windowSpan(cur,g.y); gx=Math.round((a+b)/2); }
    let nb=null; for(const [dx,dy] of [[0,1],[1,0],[-1,0],[0,-1]]){ if(WALK.has(tileAt(cur,gx+dx,g.y+dy))){ nb=[dx,dy]; break; } }
    if(nb){ const bnc=Math.sin(t*7)*T*.08, ux=-nb[0], uy=-nb[1]; drawArrow(c,(gx+nb[0])*T+T*.5+ux*(T*.05+bnc),(g.y+nb[1])*T+T*.5+uy*(T*.05+bnc),Math.atan2(uy,ux)+Math.PI/2,T); }
  }
  c.restore();
}
function drawTileObj(ch,x,y,t){
  const T=view.T, c=wc;
  let X=x*T, Y=y*T;
  const bTime=objBounces.get(x+','+y);
  if(bTime){
    const elapsed=(performance.now()-bTime)/1000;
    if(elapsed<0.45){
      const bounceY=Math.sin(elapsed*Math.PI*4)*(1-elapsed/0.45)*(T*0.16);
      Y-=bounceY;
    } else {
      objBounces.delete(x+','+y);
    }
  }
  if(ch==='b'){ c.fillStyle='#5A8BEA'; rr(c,X+T*.1,Y+T*.22,T*.8,T*.24,T*.08); c.fill(); c.fillStyle='#3D6FD9'; rr(c,X+T*.08,Y+T*.44,T*.84,T*.26,T*.08); c.fill(); c.fillStyle='#2A4FA8'; c.fillRect(X+T*.16,Y+T*.7,T*.07,T*.18); c.fillRect(X+T*.77,Y+T*.7,T*.07,T*.18); return; }
  if(ch==='p'){ poly(c,[X+T*.28,Y+T*.6, X+T*.72,Y+T*.6, X+T*.64,Y+T*.94, X+T*.36,Y+T*.94],'#D9774A'); ell(c,X+T*.5,Y+T*.42,T*.26,T*.24,'#3CB371'); ell(c,X+T*.36,Y+T*.34,T*.15,T*.15,'#2E9E5E'); ell(c,X+T*.62,Y+T*.28,T*.14,T*.14,'#4FCB83'); return; }
  if(ch==='a'){ drawCar(c,X+T*.5,Y+T*.86,T*.92,t,x+y*3); return; }
  if(ch==='f'){ for(const [dx,dy,col] of [[.3,.55,'#FF8FB8'],[.62,.45,'#FFC93C'],[.5,.75,'#8B6FE8'],[.75,.72,'#E8483B']]){ c.strokeStyle='#2E9E5E'; c.lineWidth=T*.04; c.beginPath(); c.moveTo(X+T*dx,Y+T*dy); c.lineTo(X+T*dx,Y+T*(dy+.2)); c.stroke(); for(let k=0;k<5;k++){ const a=k*1.256+t*.3; ell(c,X+T*dx+Math.cos(a)*T*.06,Y+T*dy+Math.sin(a)*T*.06,T*.05,T*.05,col); } ell(c,X+T*dx,Y+T*dy,T*.035,T*.035,'#FFF59A'); } return; }
  if(ch==='r'){ c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.9,T*.34,T*.08,'#000'); c.restore(); c.fillStyle='#8A5636'; c.fillRect(X+T*.43,Y+T*.5,T*.14,T*.4); ell(c,X+T*.5,Y+T*.38,T*.36,T*.3,'#3CB371'); ell(c,X+T*.36,Y+T*.3,T*.2,T*.18,'#4FCB83'); ell(c,X+T*.64,Y+T*.26,T*.18,T*.16,'#2E9E5E'); ell(c,X+T*.6,Y+T*.42,T*.04,T*.04,'#E8483B'); ell(c,X+T*.38,Y+T*.46,T*.04,T*.04,'#E8483B'); return; }
  if(ch==='s'){ c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.9,T*.42,T*.07,'#000'); c.restore(); c.fillStyle='#8B6FE8'; rr(c,X+T*.06,Y+T*.3,T*.88,T*.32,T*.1); c.fill(); c.fillStyle='#A88DF2'; rr(c,X+T*.12,Y+T*.5,T*.76,T*.26,T*.08); c.fill(); c.fillStyle='#6A50C4'; rr(c,X+T*.02,Y+T*.44,T*.16,T*.36,T*.06); c.fill(); rr(c,X+T*.82,Y+T*.44,T*.16,T*.36,T*.06); c.fill(); c.fillStyle='#4E3A99'; c.fillRect(X+T*.14,Y+T*.78,T*.06,T*.1); c.fillRect(X+T*.8,Y+T*.78,T*.06,T*.1); return; }
  if(ch==='c'){ c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.9,T*.4,T*.07,'#000'); c.restore(); c.fillStyle='#B5753A'; rr(c,X+T*.1,Y+T*.48,T*.8,T*.38,T*.05); c.fill(); c.fillStyle='#C98B4E'; c.fillRect(X+T*.1,Y+T*.58,T*.8,T*.05); c.fillRect(X+T*.1,Y+T*.72,T*.8,T*.05); const col=['#E8483B','#FF9B3D','#FFC93C','#2FBF8F','#8B6FE8'][(x*3+y)%5]; for(const [dx,dy] of [[.28,.42],[.5,.38],[.72,.42],[.39,.32],[.61,.32]]) ell(c,X+T*dx,Y+T*dy,T*.11,T*.1,col); return; }
  if(ch==='j'){ c.fillStyle='#E8483B'; rr(c,X+T*.16,Y+T*.48,T*.68,T*.38,T*.06); c.fill(); c.fillStyle='#FFC93C'; c.fillRect(X+T*.16,Y+T*.56,T*.68,T*.06); ell(c,X+T*.34,Y+T*.44,T*.12,T*.12,'#2E86DE'); c.fillStyle='#2FBF8F'; c.fillRect(X+T*.5,Y+T*.3,T*.18,T*.18); star5(c,X+T*.7,Y+T*.38,T*.1,'#FFC93C'); return; }
  if(ch==='o'){ const cols=['#E8483B','#FFC93C','#2E86DE','#2FBF8F','#FF8FB8','#8B6FE8'], k=(x*3+y)%6; for(const [dx,dy,j] of [[.32,.36,0],[.6,.28,2],[.48,.5,4]]){ const bx=X+T*dx, by=Y+T*dy+Math.sin(t*2+x+j)*T*.03; c.strokeStyle='rgba(34,49,79,.4)'; c.lineWidth=1; c.beginPath(); c.moveTo(bx,by+T*.14); c.lineTo(X+T*.5,Y+T*.9); c.stroke(); ell(c,bx,by,T*.12,T*.15,cols[(k+j)%6]); ell(c,bx-T*.04,by-T*.05,T*.03,T*.04,'rgba(255,255,255,.5)'); } return; }
  if(ch==='q'){ c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.92,T*.4,T*.06,'#000'); c.restore(); c.fillStyle='#8A96AA'; c.fillRect(X+T*.18,Y+T*.5,T*.05,T*.4); c.fillRect(X+T*.77,Y+T*.5,T*.05,T*.4); c.fillStyle='#E7B26A'; rr(c,X+T*.08,Y+T*.3,T*.84,T*.24,T*.05); c.fill(); c.fillStyle='#C98B4E'; c.fillRect(X+T*.08,Y+T*.48,T*.84,T*.06); c.fillStyle='#fff'; c.fillRect(X+T*.3,Y+T*.33,T*.2,T*.12); c.fillStyle=['#E8483B','#2E86DE','#2FBF8F'][(x+y)%3]; c.fillRect(X+T*.58,Y+T*.36,T*.22,T*.04); return; }
  if(ch==='h'){ c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.9,T*.42,T*.07,'#000'); c.restore(); c.fillStyle='#E8C66A'; rr(c,X+T*.08,Y+T*.34,T*.84,T*.54,T*.08); c.fill(); c.strokeStyle='#C9A23E'; c.lineWidth=T*.025; for(const yy of [.48,.62,.76]){ c.beginPath(); c.moveTo(X+T*.12,Y+T*yy); c.lineTo(X+T*.88,Y+T*yy); c.stroke(); } c.strokeStyle='#B5753A'; c.lineWidth=T*.04; c.beginPath(); c.moveTo(X+T*.32,Y+T*.34); c.lineTo(X+T*.32,Y+T*.88); c.moveTo(X+T*.68,Y+T*.34); c.lineTo(X+T*.68,Y+T*.88); c.stroke(); return; }
  if(ch==='x'){ c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.9,T*.42,T*.07,'#000'); c.restore(); c.fillStyle='#8A96AA'; c.fillRect(X+T*.14,Y+T*.6,T*.06,T*.3); c.fillRect(X+T*.8,Y+T*.6,T*.06,T*.3); c.fillStyle='#7CC6F0'; rr(c,X+T*.06,Y+T*.4,T*.88,T*.24,T*.06); c.fill(); c.fillStyle='#fff'; rr(c,X+T*.08,Y+T*.34,T*.3,T*.14,T*.06); c.fill(); c.fillStyle='#E9F5F2'; c.fillRect(X+T*.4,Y+T*.42,T*.5,T*.05); return; }
  if(ch==='k'){ c.fillStyle='#C98B4E'; rr(c,X+T*.04,Y+T*.12,T*.92,T*.8,T*.1); c.fill(); c.fillStyle='#F2DC9B'; rr(c,X+T*.12,Y+T*.2,T*.76,T*.64,T*.06); c.fill(); ell(c,X+T*.4,Y+T*.6,T*.16,T*.08,'#E6CB80'); const col=['#E8483B','#2E86DE','#FFC93C'][(x+y)%3]; poly(c,[X+T*.56,Y+T*.38, X+T*.76,Y+T*.38, X+T*.72,Y+T*.62, X+T*.6,Y+T*.62],col); c.strokeStyle=col; c.lineWidth=T*.03; c.beginPath(); c.arc(X+T*.66,Y+T*.38,T*.09,Math.PI,0); c.stroke(); return; }
  if(ch==='e'){ drawEngranaje(c,X+T*.5,Y+T*.52,T*.36,(x+y)%2?t*.8:-t*.8,(x+y)%2?'#C9A27A':'#8A96AA'); return; }
  if(ch==='m'){
    c.save(); c.globalAlpha=.16; ell(c,X+T*.5,Y+T*.9,T*.4,T*.07,'#000'); c.restore();
    c.fillStyle='#8A5636'; c.fillRect(X+T*.22,Y+T*.7,T*.07,T*.2); c.fillRect(X+T*.71,Y+T*.7,T*.07,T*.2);
    c.save(); c.beginPath(); c.ellipse(X+T*.5,Y+T*.42,T*.44,T*.16,0,Math.PI,0); c.lineTo(X+T*.94,Y+T*.74); c.quadraticCurveTo(X+T*.5,Y+T*.82,X+T*.06,Y+T*.74); c.closePath(); c.clip();
    c.fillStyle='#FFFFFF'; c.fillRect(X,Y+T*.2,T,T*.7);
    c.fillStyle='#E8483B'; const q=T*.11; for(let i=0;i<9;i++) for(let j=0;j<6;j++) if((i+j)%2===0) c.fillRect(X+T*.06+i*q,Y+T*.26+j*q,q,q);
    c.fillStyle='rgba(0,0,0,.08)'; c.fillRect(X,Y+T*.48,T,T*.4);
    c.restore();
    ell(c,X+T*.42,Y+T*.4,T*.15,T*.055,'#E3E8F0'); ell(c,X+T*.42,Y+T*.39,T*.1,T*.035,'#FFFFFF');
    c.fillStyle='#CDEBFF'; rr(c,X+T*.64,Y+T*.24,T*.1,T*.17,T*.03); c.fill(); c.fillStyle='#7CC6F0'; c.fillRect(X+T*.65,Y+T*.31,T*.08,T*.09);
    return;
  }
  if(ch==='~'){ c.fillStyle='#CFEFFF'; c.fillRect(X+T*.05,Y+T*.12,T*.9,T*.6); c.strokeStyle='#9FD3EE'; c.lineWidth=T*.04; c.strokeRect(X+T*.05,Y+T*.12,T*.9,T*.6); return; }
  if(ch==='U'||ch==='D'){
    c.fillStyle='#8A96AA'; rr(c,X+T*.1,Y+T*.02,T*.8,T*.96,T*.12); c.fill();
    c.fillStyle='#4E586B'; rr(c,X+T*.2,Y+T*.08,T*.6,T*.86,T*.06); c.fill();
    c.save(); rr(c,X+T*.2,Y+T*.08,T*.6,T*.86,T*.06); c.clip(); c.strokeStyle='#A8B3C6'; c.lineWidth=T*.05;
    const sp=T*.17, off=(((ch==='U'?-1:1)*t*T*.6)%sp+sp)%sp;
    for(let yy=Y-sp; yy<Y+T+sp; yy+=sp){ c.beginPath(); c.moveTo(X+T*.2,yy+off); c.lineTo(X+T*.8,yy+off); c.stroke(); }
    c.restore();
    const cxp=X+T*.5, cyp=Y+T*.55; ell(c,cxp,cyp,T*.21,T*.21,'#FFC93C');
    if(ch==='U') poly(c,[cxp,cyp-T*.11, cxp-T*.11,cyp+T*.07, cxp+T*.11,cyp+T*.07],'#22314F'); else poly(c,[cxp,cyp+T*.11, cxp-T*.11,cyp-T*.07, cxp+T*.11,cyp-T*.07],'#22314F');
    return;
  }
  if(ch==='L'){
    c.fillStyle='#AEB8C8'; rr(c,X+T*.06,Y+T*.02,T*.88,T*.94,T*.1); c.fill();
    c.fillStyle='#E3E8F0'; c.fillRect(X+T*.15,Y+T*.1,T*.34,T*.82); c.fillRect(X+T*.51,Y+T*.1,T*.34,T*.82);
    c.fillStyle='rgba(255,255,255,.6)'; c.fillRect(X+T*.2,Y+T*.14,T*.06,T*.7); c.fillRect(X+T*.56,Y+T*.14,T*.06,T*.7);
    return;
  }
  if(ch==='W'){ if(tileAt(cur,x-1,y)!=='W') drawWindow(x, windowSpan(cur,y)[1], Y, t); return; }
  if(ch==='G'){
    const open=allStamped();
    c.fillStyle=open?'#2FBF8F':'#9AA6B8'; rr(c,X+T*.06,Y-T*.12,T*.86,T*1.22,T*.14); c.fill();
    c.fillStyle=open?'#C6F5E3':'#D5DCE6'; rr(c,X+T*.16,Y,T*.66,T*.98,T*.08); c.fill();
    if(open){ c.save(); c.globalAlpha=.25+.2*Math.sin(t*5); ell(c,X+T*.49,Y+T*.5,T*.42,T*.55,'#FFF59A'); c.restore(); }
    else { c.fillStyle='#5C6A86'; rr(c,X+T*.33,Y+T*.48,T*.32,T*.26,T*.05); c.fill(); c.strokeStyle='#5C6A86'; c.lineWidth=T*.06; c.beginPath(); c.arc(X+T*.49,Y+T*.48,T*.1,Math.PI,0); c.stroke(); }
    return;
  }
  const s=CAP.estaciones[ch]; if(!s) return;
  if(s.puerta){
    c.fillStyle='#E9EEF5'; rr(c,X+T*.08,Y+T*.02,T*.84,T*.94,T*.1); c.fill();
    c.fillStyle='#4A90E2'; rr(c,X+T*.17,Y+T*.1,T*.66,T*.84,T*.08); c.fill();
    ell(c,X+T*.72,Y+T*.58,T*.05,T*.05,'#FFC93C'); drawImg(c,s.item,X+T*.5,Y+T*.36,T*.36);
  } else {
    drawAnimal(c,s.npc,X+T*.5,Y+T*.66,T*.82,{t,hat:s.npc.hat,noShadow:true});
    c.fillStyle=s.mostrador||'#2E86DE'; rr(c,X+T*.03,Y+T*.48,T*.94,T*.46,T*.1); c.fill();
    if(s.mantel){ c.save(); rr(c,X+T*.03,Y+T*.48,T*.94,T*.46,T*.1); c.clip(); c.fillStyle='#FFFFFF'; for(let i=0;i<5;i++) for(let j=0;j<3;j++) if((i+j)%2===0) c.fillRect(X+T*(.03+i*.19),Y+T*(.48+j*.155),T*.19,T*.155); c.restore(); }
    c.fillStyle='rgba(255,255,255,.35)'; rr(c,X+T*.03,Y+T*.48,T*.94,T*.1,T*.05); c.fill();
    drawImg(c,s.item,X+T*.76,Y+T*.5,T*.3);
  }
}
function drawEngranaje(c,x,y,r,rot,col){
  c.save(); c.translate(x,y); c.rotate(rot); c.fillStyle=col;
  for(let i=0;i<8;i++){ c.save(); c.rotate(i*Math.PI/4); c.fillRect(-r*.16,-r*1.08,r*.32,r*.4); c.restore(); }
  c.beginPath(); c.arc(0,0,r*.8,0,Math.PI*2); c.fill();
  ell(c,0,0,r*.32,r*.32,'rgba(0,0,0,.25)'); c.restore();
}
const AUTOS=['#E8483B','#2E86DE','#FFC93C','#2FBF8F','#8B6FE8'];
/* un auto de costado: x = centro, y = piso, s = largo */
function drawCar(c,x,y,s,t,n=0,quien=null,color=null){
  const col=color||AUTOS[n%AUTOS.length], h=s*.42;
  c.save(); c.globalAlpha=.16; ell(c,x,y,s*.5,s*.06,'#000'); c.restore();
  c.fillStyle=col; rr(c,x-s*.3,y-h*1.05,s*.56,h*.6,h*.3); c.fill();
  c.fillStyle='#CDEBFF'; rr(c,x-s*.24,y-h*.95,s*.2,h*.42,h*.12); c.fill(); rr(c,x-s*.01,y-h*.95,s*.2,h*.42,h*.12); c.fill();
  if(quien){ c.save(); rr(c,x-s*.01,y-h*.95,s*.2,h*.42,h*.12); c.clip(); drawAnimal(c,quien,x+s*.09,y-h*.1,h*.95,{t,hat:quien.hat,noShadow:true,wave:true}); c.restore(); }
  c.fillStyle=col; rr(c,x-s*.48,y-h*.62,s*.96,h*.46,h*.2); c.fill();
  c.fillStyle='rgba(255,255,255,.3)'; c.fillRect(x-s*.42,y-h*.52,s*.84,h*.06);
  ell(c,x+s*.44,y-h*.42,s*.03,h*.07,'#FFE07A'); ell(c,x-s*.46,y-h*.42,s*.02,h*.06,'#E04E39');
  for(const wx of [x-s*.27,x+s*.27]){ ell(c,wx,y-h*.15,h*.24,h*.24,'#22314F'); ell(c,wx,y-h*.15,h*.11,h*.11,'#C9D3E6'); }
}
function drawWindow(x0,x1,Y,t){
  const T=view.T, c=wc, X=x0*T, w=(x1-x0+1)*T, top=Y-T*.6, h=T*1.5;
  c.save(); rr(c,X+T*.05,top,w-T*.1,h,T*.12); c.clip();
  const g=c.createLinearGradient(0,top,0,top+h); g.addColorStop(0,'#8ED1FF'); g.addColorStop(1,'#DDF2FF'); c.fillStyle=g; c.fillRect(X,top,w,h);
  for(let i=0;i<3;i++){ const cxp=X+(((i*.37+t*.015)%1.2)-.1)*w; ell(c,cxp,top+h*(.2+i*.12),T*.3,T*.1,'rgba(255,255,255,.9)'); }
  c.fillStyle='#8E99AA'; c.fillRect(X,top+h*.72,w,h*.28);
  c.fillStyle='#fff'; for(let xx=X; xx<X+w; xx+=T*.5) c.fillRect(xx,top+h*.84,T*.25,T*.04);
  drawImg(c,'avion',X+w*.74,top+h*.66,T*1.3);
  const p=(t*.07)%1.6, px=X-T+p*(w+2*T), py=top+h*.74-Math.max(0,p-.5)*T*1.1;
  drawImg(c,'avion',px,py,T*.9,-Math.max(0,Math.min(.3,(p-.5)*.6)));
  c.restore();
  c.strokeStyle='#fff'; c.lineWidth=T*.08; rr(c,X+T*.05,top,w-T*.1,h,T*.12); c.stroke();
  c.lineWidth=T*.05; for(let i=1;i<=x1-x0;i++){ c.beginPath(); c.moveTo(X+i*T,top); c.lineTo(X+i*T,top+h); c.stroke(); }
  c.fillStyle='rgba(255,255,255,.75)'; c.fillRect(X+T*.05,Y+T*.78,w-T*.1,T*.06);
}
function drawSign(ch,x,y,t){
  const T=view.T, c=wc, X=x*T, Y=y*T, bob=Math.sin(t*2.5+x)*T*.04;
  const bubble=(bx,by,id,done)=>{ c.fillStyle='#fff'; rr(c,bx-T*.33,by-T*.33,T*.66,T*.62,T*.18); c.fill(); poly(c,[bx-T*.08,by+T*.27, bx+T*.08,by+T*.27, bx,by+T*.38],'#fff'); drawImg(c,id,bx,by-T*.03,T*.5); if(done){ ell(c,bx+T*.3,by-T*.28,T*.15,T*.15,'#2FBF8F'); c.strokeStyle='#fff'; c.lineWidth=T*.05; c.lineCap='round'; c.beginPath(); c.moveTo(bx+T*.23,by-T*.28); c.lineTo(bx+T*.29,by-T*.22); c.lineTo(bx+T*.38,by-T*.35); c.stroke(); } };
  if(ch==='W'){ if(tileAt(cur,x-1,y)==='W') return; const [a,b]=windowSpan(cur,y); bubble(((a+b)/2)*T+T*.5, Y-T*.98+bob, CAP.estaciones.W.item, cs.sellos.W); return; }
  if(isStation(ch)){ bubble(X+T*.5, Y-T*.44+bob, CAP.estaciones[ch].item, cs.sellos[ch]); return; }
  if(ch==='G'){ bubble(X+T*.45, Y-T*.62+bob, CAP.final.icono, cs.final); return; }
  if(ch==='U'||ch==='D'||ch==='L'){
    const by=Y-T*.3; c.fillStyle=ch==='L'?'#5C6A86':'#FFC93C'; rr(c,X+T*.16,by-T*.16,T*.68,T*.32,T*.14); c.fill();
    const fc=ch==='L'?'#fff':'#22314F';
    if(ch==='L'){ poly(c,[X+T*.38,by-T*.09, X+T*.3,by+T*.06, X+T*.46,by+T*.06],fc); poly(c,[X+T*.62,by+T*.09, X+T*.54,by-T*.06, X+T*.7,by-T*.06],fc); }
    else { const dest=CAP.niveles[cur+(ch==='U'?1:-1)]; const ax=X+T*.34; if(ch==='U') poly(c,[ax,by-T*.1, ax-T*.09,by+T*.07, ax+T*.09,by+T*.07],fc); else poly(c,[ax,by+T*.1, ax-T*.09,by-T*.07, ax+T*.09,by-T*.07],fc); if(dest){ c.fillStyle=fc; c.font=`800 ${Math.round(T*.3)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillText(String(dest.num),X+T*.62,by+T*.02); } }
  }
}

/* =========================================================
   MOVIMIENTO (teclado + clic)
   ========================================================= */
let lastBumpCh='', lastBumpSay=0;
const DIRS={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};
function heldDir(){ for(let i=keys.length-1;i>=0;i--){ const d=DIRS[keys[i]]; if(d) return d; } return null; }
function clearPath(){ player.path=null; player.bump=null; player.goal=null; }
function update(now){
  const p=player;
  if(p.moving){ const k=Math.min(1,(now-p.moving.start)/T_STEP); p.rx=p.moving.fx+(p.x-p.moving.fx)*k; p.ry=p.moving.fy+(p.y-p.moving.fy)*k; if(k>=1){ p.moving=null; p.rx=p.x; p.ry=p.y; arrived(); } return; }
  if(busy) return;
  const d=!inputLock && heldDir();
  if(d){ clearPath(); tryStep(d[0],d[1],now); return; }
  if(p.path){
    if(p.path.length){ const [nx,ny]=p.path.shift(); if(!tryStep(nx-p.x, ny-p.y, now)) clearPath(); }
    else { const b=p.bump; clearPath(); if(b) tryStep(b[0],b[1],now); }
  }
}
function tryStep(dx,dy,now){
  if(dx) player.facing=dx;
  const nx=player.x+dx, ny=player.y+dy, ch=tileAt(cur,nx,ny);
  if(WALK.has(ch)){ player.moving={fx:player.x,fy:player.y,start:now}; player.x=nx; player.y=ny; sfx.step(); return true; }
  if(isStation(ch)){ clearPath(); busy=true; inputLock=true; runStation(ch); return true; }
  if(ch==='G'){ clearPath(); busy=true; inputLock=true; runGate(); return true; }
  if(now-lastBump>350){ lastBump=now; sfx.bump(); }
  const nombre=(CAP.objetos&&CAP.objetos[ch]) || (T.objetos||{})[ch];
  if(nombre && (ch!==lastBumpCh || now-lastBumpSay>2500)){ lastBumpCh=ch; lastBumpSay=now; sayAll([nombre]); }
  return false;
}
/* camino más corto por el piso (las escaleras y el ascensor solo como destino final) */
function findPath(goals){
  const key=(x,y)=>x+','+y, start=[player.x,player.y], prev=new Map([[key(...start),null]]), q=[start];
  const isGoal=(x,y)=>goals.find(g=>g.x===x&&g.y===y);
  if(isGoal(...start)) return {path:[], goal:isGoal(...start)};
  while(q.length){
    const [x,y]=q.shift();
    for(const [dx,dy] of [[0,1],[1,0],[-1,0],[0,-1]]){
      const nx=x+dx, ny=y+dy, k=key(nx,ny); if(prev.has(k)) continue;
      const g=isGoal(nx,ny), ch=tileAt(cur,nx,ny);
      if(!g && !PASS.has(ch)) continue;
      prev.set(k,[x,y]);
      if(g){ const path=[]; let c=[nx,ny]; while(c && key(...c)!==key(...start)){ path.unshift(c); c=prev.get(key(...c)); } return {path, goal:g}; }
      q.push([nx,ny]);
    }
  }
  return null;
}
function goTo(tx,ty){
  let ch=tileAt(cur,tx,ty);
  if(ch==='#'){ const below=tileAt(cur,tx,ty+1); if(isStation(below)||below==='W'){ ty++; ch=below; } }
  if(ch==='W'){ const [a,b]=windowSpan(cur,ty); tx=Math.round((a+b)/2); }
  const goals=[];
  if(isStation(ch)||ch==='G'){ for(const [dx,dy] of [[0,1],[1,0],[-1,0],[0,-1]]){ const nx=tx+dx, ny=ty+dy; if(PASS.has(tileAt(cur,nx,ny))) goals.push({x:nx,y:ny,bump:[-dx,-dy]}); } }
  else if(WALK.has(ch)) goals.push({x:tx,y:ty});
  if(!goals.length) return;
  const r=findPath(goals); if(!r) return;
  player.path=r.path; player.bump=r.goal.bump||null; player.goal={x:r.goal.x,y:r.goal.y};
  if(!r.path.length && !player.bump) clearPath();
}
worldCv.addEventListener('pointerdown',e=>{
  if(busy || !modal.hidden || !CAP) return; actx();
  const r=worldCv.getBoundingClientRect();
  const x=Math.floor((e.clientX-r.left-view.ox)/view.T), y=Math.floor((e.clientY-r.top-view.oy)/view.T);
  goTo(x,y);
});
function savePos(){ cs.pos={level:cur,x:player.x,y:player.y}; persist(); }
function placePlayer(x,y){ player.x=x; player.y=y; player.rx=x; player.ry=y; player.moving=null; clearPath(); }
function arrived(){
  savePos();
  if(player.goal && player.goal.x===player.x && player.goal.y===player.y && !player.bump) player.goal=null;
  const fz=fishes[cur];
  if(fz && fz.x===player.x && fz.y===player.y){ clearPath(); busy=true; runFish(); return; }
  const ch=tileAt(cur,player.x,player.y);
  if(ch==='U'){ clearPath(); goFloor(cur+1,'D'); }
  else if(ch==='D'){ clearPath(); goFloor(cur-1,'U'); }
  else if(ch==='L'){ clearPath(); busy=true; runLift(); }
}
async function goFloor(n, arriveAt){
  busy=true; inputLock=true; sfx.whoosh();
  $('#fade').classList.add('on'); await sleep(330);
  cur=n; const tl=findTile(n,arriveAt); placePlayer(tl.x,tl.y+1); savePos(); updateHud();
  $('#fade').classList.remove('on'); await sleep(260);
  busy=false; if(!keys.length) inputLock=false;
  const L=CAP.niveles[n]; sayAll([T.piso(L.numTexto, L.nombre)]);
}

/* =========================================================
   PANTALLAS
   ========================================================= */
const scr={cuenta:$('#scr-cuenta'),alumnos:$('#scr-alumnos'),start:$('#scr-start'),lang:$('#scr-lang'),name:$('#scr-name'),pick:$('#scr-pick'),home:$('#scr-home'),lib:$('#scr-lib'),shop:$('#scr-shop'),game:$('#scr-game')};
function show(name){ for(const k in scr) scr[k].hidden = k!==name; if(name==='game') resizeWorld(); }
const ptsHtml = () => `${img('pez')}<b>${save.puntos||0}</b>${save.caballitos?`<i class="cab">${img('caballito')}<b>${save.caballitos}</b></i>`:''}${save.galletitas?`<i class="gal">${img('galletita')}<b>${save.galletitas}</b></i>`:''}`;
/* lo que tiene para gastar: cada caballito vale 2 pececitos, cada galletita vale 3 pececitos */
const riqueza = () => (save.puntos||0) + 2*(save.caballitos||0) + 3*(save.galletitas||0);
/* paga n: primero con pececitos; si no alcanzan, cambia caballitos por 2 pececitos y luego galletitas por 3 */
function gastar(n){
  if(riqueza()<n) return false;
  while((save.puntos||0)<n){
    if(save.caballitos > 0){
      save.caballitos--;
      save.puntos = (save.puntos||0) + 2;
    } else if(save.galletitas > 0){
      save.galletitas--;
      save.puntos = (save.puntos||0) + 3;
    } else {
      break;
    }
  }
  save.puntos-=n; return true;
}
function updateNames(){
  const n=save.name||'', el=$('#startName');
  // sin nombre todavía: en vez de "Las aventuras de ?", solo "¡Aventuras!" (y va cambiando de idioma como el resto del inicio)
  $('#scr-start .kicker').hidden=!n;
  if(n){ delete el.dataset.t; el.removeAttribute('lang'); el.textContent=n; } else { el.dataset.t='aventuras'; el.textContent=T.aventuras; }
  const len=Math.max(4,(el.textContent||'').length); el.style.fontSize=`clamp(48px, ${Math.min(17, 78/len).toFixed(1)}vw, ${Math.min(156, Math.round(760/len))}px)`;
  $('#hello').innerHTML=`${esc(T.holaX(n))}<small>${esc(T.holaSub)}</small>`;
  ['#homePts','#shopPts'].forEach(id=>{ const e=$(id); if(e) e.innerHTML=ptsHtml(); });
  document.title = n ? `${caraLatina(T.titulo)} ${n}` : 'Las Aventuras';
}
function updateHud(){
  resizeWorld();   // el piso nuevo puede tener otro tamaño
  const L=CAP.niveles[cur], fp=$('#floorPill');
  fp.style.setProperty('--fc',L.pared); fp.innerHTML=`<b>${L.num}</b><span${enAttr(enDe(L.nombre))}>${L.nombre}</span>`;
  $('#pts').innerHTML = ptsHtml();
  $('#slots').innerHTML = CAP.orden.map(k=>`<i class="slot ${cs.sellos[k]?'got':''}">${img(CAP.estaciones[k].item)}</i>`).join('') + `<i class="slot gate ${cs.final?'got':''}">${img(CAP.final.icono)}</i>`;
  // en pantallas angostas, en vez de los sellos uno por uno: el pasaporte y cuántos van
  $('#ppCount').innerHTML = `${ICON.star}<b>${CAP.orden.filter(k=>cs.sellos[k]).length}/${CAP.orden.length}</b>`;
  updateGadgetHud();
}
function buildPicker(){
  const box=$('#chars'); box.innerHTML='';
  const pickPts=$('#pickPts'); if(pickPts) pickPts.innerHTML=ptsHtml();
  CHARACTERS.forEach(ch=>{
    const own = !!(save.personajes && save.personajes[ch.id]) || (ch.precio || 0) === 0;
    const dName = charDisplayName(ch);
    const aName = animalName(ch);
    const b = document.createElement('button');
    b.className = 'char' + (own ? (save.charId === ch.id ? ' current' : '') : ' locked');
    b.innerHTML = `<canvas></canvas><b>${esc(dName)}</b><small>${esc(aName)}</small>${own ? '' : `<span class="char-lock-badge">🔒 ${img('pez')} <b>${ch.precio}</b></span>`}`;
    b.addEventListener('focus', () => {
      if(own) sayAll([`${dName}, ${aName}.`]);
      else sayAll([`${dName}, ${aName}. ${T.cuesta ? T.cuesta(T.peces ? T.peces(ch.precio) : `${ch.precio}`) : `${ch.precio}`}`]);
    });
    b.addEventListener('mouseenter', () => b.focus());
    b.addEventListener('click', async () => {
      if(!own){
        const p = riqueza();
        if(p < ch.precio){
          sfx.oops();
          b.classList.add('shake');
          setTimeout(() => b.classList.remove('shake'), 400);
          sayAll([T.noAlcanza(T.peces(ch.precio - p))]);
          return;
        }
        if(gastar(ch.precio)){
          if(!save.personajes) save.personajes = {};
          save.personajes[ch.id] = true;
          save.charId = ch.id;
          persist();
          sfx.stamp();
          sfx.yay();
          updateNames();
          buildPicker();
          await sayAll([T.comprado ? T.comprado(dName) : T.holaX(dName)]);
          goHome();
        }
        return;
      }
      save.charId = ch.id;
      persist();
      sfx.yay();
      await sayAll([T.holaX(dName)]);
      goHome();
    });
    live(b.querySelector('canvas'), (c,w,h,t) => drawAnimal(c, ch, w/2, h*.94, h*.86, {t, wave: document.activeElement === b, backpack: true}));
    box.appendChild(b);
  });
}
function goPicker(){ hush(); show('pick'); buildPicker(); setTimeout(()=>$('#chars button')?.focus(),50); sayAll([T.quienDi]); }
/* un lugar se abre cuando se terminó el anterior (en el idioma que está aprendiendo), salvo que un grande
   los abra todos desde el rincón; además, el administrador puede cerrar lugares a un chico */
const capPrevio = c => { const i=CAP_LIST.indexOf(c); return i>0 ? CAP_LIST[i-1] : null; };
/* si ya lo había empezado (con otro orden de lugares), se queda abierto */
const capEmpezado = c => { const k=`${langCode()}:${c.id}`, s=save.caps[k]; return !!s && (s.final || Object.values(s.sellos||{}).some(Boolean)); };
/* se abre cuando todos los lugares de antes están terminados (así, cambiar el orden no salta lugares) */
const capPorOrden = c => { const i=CAP_LIST.indexOf(c); return i<=0 || save.todoAbierto || capEmpezado(c) || CAP_LIST.slice(0,i).every(x=>capSave(x.id).final); };
/* el administrador le puede abrir todo a un chico (lugares y juegos, gratis) para probar */
const pruebaTodo = () => !!(NUBE.alumno && NUBE.alumno.todo_abierto);
const capAbierto = c => pruebaTodo() || (!(NUBE.alumno && (NUBE.alumno.bloqueados||[]).includes(c.id)) && capPorOrden(c));
function goHome(){
  hush(); show('home'); updateNames();
  const box=$('#weeks'); box.innerHTML='';
  CAP_LIST.forEach(c=>{
    if(!capAbierto(c)){
      const b=document.createElement('button'); b.className='week locked';
      b.innerHTML=`<span class="art">${ICON.lock}</span><span class="wk">${esc(T.semana)} ${c.num}</span><b>${esc(c.titulo)}</b>`;
      b.addEventListener('focus',()=>sayAll([c.titulo]));
      b.addEventListener('click',()=>sayAll([capPorOrden(c) ? T.capCerrado : T.capPrimero((CAP_LIST.find(x=>!capSave(x.id).final)||capPrevio(c)).lugar.texto)]));
      box.appendChild(b); return;
    }
    const s=capSave(c.id);
    const b=document.createElement('button'); b.className='week';
    b.innerHTML=`<span class="art">${img(c.arteTapa)}</span><span class="wk">${esc(T.semana)} ${c.num}</span><b>${c.titulo}</b><span class="dots">${c.orden.map(k=>`<i class="${s.sellos[k]?'on':''}"></i>`).join('')}<i class="${s.final?'gold':''}"></i></span>`;
    b.addEventListener('focus',()=>sayAll([c.titulo]));
    b.addEventListener('click',()=>enterCap(c));
    box.appendChild(b);
  });
  (window.PROXIMOS||[]).forEach(u=>{
    const num = typeof u==='object' ? u.num : u;
    const b=document.createElement('button'); b.className='week locked';
    b.innerHTML=`<span class="art">${ICON.lock}</span><span class="wk">${esc(T.semana)} ${num}</span><b>${esc(T.pronto)}</b>`;
    b.addEventListener('click',()=>sayAll([T.prontoDi]));
    box.appendChild(b);
  });
  setTimeout(()=>box.querySelector('button')?.focus(),60);
  sayAll([T.holaDi(save.name)]);
}
async function enterCap(c){
  hush(); CAP=c; cs=capSave(c.id);
  const sp=cs.pos;
  if(sp && CAP.niveles[sp.level] && PASS.has(tileAt(sp.level,sp.x,sp.y))){ cur=sp.level; placePlayer(sp.x,sp.y); }
  else { cur=0; const p=findTile(0,'P'); placePlayer(p.x,p.y); }
  busy=true; inputLock=keys.length>0; show('game'); updateHud();
  for(const k in fishes) delete fishes[k]; scheduleFish(7000,14000);
  await runPlaceIntro();
}

/* =========================================================
   VENTANAS (modal) + piezas de práctica
   ========================================================= */
const modal=$('#modal'), card=$('#card');
let acts={};
card.addEventListener('click',e=>{ const b=e.target.closest('[data-act]'); if(!b||b.disabled) return; const a=b.dataset.act; if(a==='close'){ closeModal(); return; } const h=acts[a]; if(h) h(b,e); });
function onAct(a,fn){ acts[a]=fn; }
function waitAct(list){ return new Promise(res=>{ (Array.isArray(list)?list:[list]).forEach(a=>acts[a]=b=>res({act:a,btn:b})); }); }
function openModal(html, cls=''){ hideEn(); hush(); narrTok++; acts={}; card.className='card '+cls; card.innerHTML=html; modal.hidden=false; card.scrollTop=0; setTimeout(()=>{ (card.querySelector('.go')||card.querySelector('button:not(.xbtn)'))?.focus(); },30); }
function closeModal(){ hideEn(); hush(); flowTok++; stopRecording(); releaseMic(); modal.hidden=true; card.innerHTML=''; acts={}; busy=false; inputLock=keys.length>0; if(!scr.game.hidden && CAP) updateHud(); }
/* mientras el relator habla, los botones esperan */
let narrTok=0;
function setWait(on){ card.querySelectorAll('.actions .mbtn, .choice').forEach(b=>b.disabled=on); card.classList.toggle('talking',on); if(!on) setTimeout(()=>{ if(!card.contains(document.activeElement)||document.activeElement.disabled) (card.querySelector('.actions .go:not([disabled])')||card.querySelector('.choice:not([disabled])')||card.querySelector('.actions .mbtn:not([disabled])'))?.focus(); },20); }
async function narrar(fn){ const my=++narrTok; setWait(true); try{ await fn(); } finally { if(my===narrTok) setWait(false); } }
const X_BTN = `<button class="xbtn" data-act="close" tabindex="-1" aria-label="Cerrar">${ICON.close}</button>`;
function B(act,icon,label,cls=''){ return `<button class="mbtn ${cls}" data-act="${act}">${ICON[icon]}<span>${label}</span></button>`; }
function shell({steps=0, step=0, npc=null, bubble='', sub='', en='', center='', actions=''}){
  return `${X_BTN}
  ${steps?`<div class="steps">${Array.from({length:steps},(_,i)=>`<i class="${i<step?'done':i===step?'on':''}"></i>`).join('')}</div>`:''}
  ${npc?`<div class="scene"><canvas data-npc></canvas><div class="bubble"${enAttr(en)}><b>${bubble}</b>${sub?`<small>${esc(sub)}</small>`:''}</div></div>`:''}
  <div class="center">${center}</div>
  <div class="actions">${actions}</div>`;
}
function liveNpc(npc){ live(card.querySelector('[data-npc]'),(c,w,h,t)=>drawAnimal(c,npc,w/2,h*.97,h*.94,{t,hat:npc.hat,noShadow:true})); }
function holdify(btn, ms, done){
  let on=false, start=0, raf=0;
  const stop=()=>{ on=false; cancelAnimationFrame(raf); btn.style.setProperty('--p',0); };
  const go=()=>{ if(on) return; on=true; start=performance.now(); const tick=()=>{ if(!on) return; const p=Math.min(1,(performance.now()-start)/ms); btn.style.setProperty('--p',p); if(p>=1){ stop(); done(); } else raf=requestAnimationFrame(tick); }; raf=requestAnimationFrame(tick); };
  btn.addEventListener('pointerdown',e=>{ e.preventDefault(); go(); });
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>btn.addEventListener(ev,stop));
  btn.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); if(!e.repeat) go(); } });
  btn.addEventListener('keyup',e=>{ if(e.key==='Enter'||e.key===' ') stop(); });
  btn.addEventListener('contextmenu',e=>e.preventDefault());
}
const praise=(name)=>{ const e=T.elogios; return T.elogio(e[Math.floor(Math.random()*e.length)], name ? save.name : ''); };

/* chips: sílabas de una palabra o partes de una frase */
function agruparSilabasPorPalabra(texto, silabas){
  if(!texto || !silabas || !silabas.length) return [silabas || []];
  const palabras = String(texto).trim().split(/\s+/);
  if(palabras.length <= 1) return [silabas];

  const grupos = [];
  let sIdx = 0;
  for(let pIdx = 0; pIdx < palabras.length; pIdx++){
    const pClean = palabras[pIdx].toLowerCase().replace(/[^a-z0-9\u0600-\u06FFáéíóúüñàèìòù]/g, '');
    const silabasPal = [];
    let acumulado = '';
    while(sIdx < silabas.length){
      const s = silabas[sIdx];
      const sClean = s.toLowerCase().replace(/[^a-z0-9\u0600-\u06FFáéíóúüñàèìòù]/g, '');
      silabasPal.push(s);
      acumulado += sClean;
      sIdx++;
      if(acumulado.length >= pClean.length && pIdx < palabras.length - 1){
        break;
      }
    }
    grupos.push(silabasPal);
  }
  while(sIdx < silabas.length){
    grupos[grupos.length - 1].push(silabas[sIdx++]);
  }
  return grupos;
}
function chipsWord(w){
  const grupos = agruparSilabasPorPalabra(w.texto, w.silabas);
  const htmlGrupos = grupos.map(g => {
    const chipsHtml = g.map((s, i) => `${i ? '<span class="dot">·</span>' : ''}<span class="chip">${esc(s)}</span>`).join('');
    return `<span class="chip-word">${chipsHtml}</span>`;
  }).join('<span class="word-gap"></span>');
  return `<div class="chips"${enAttr(enDe(w.texto))}>${htmlGrupos}</div>`;
}
function chipsPhrase(f){ return `<div class="chips"${enAttr(enDe(f.texto))}>${f.partes.map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>`; }
const turnHtml = () => `<div class="turno" data-turno><canvas data-me></canvas><span>${esc(T.teToca)}</span></div>`;
let turnoOn=false;
function turno(on){ turnoOn=on; const el=card.querySelector('[data-turno]'); if(el) el.classList.toggle('on',on); }
function liveMe(){ live(card.querySelector('[data-me]'),(c,w,h,t)=>drawHero(c,w/2,h*.97,h*.94,{t,noShadow:true,mood:turnoOn?'talk':null,wave:turnoOn})); }
function mark(idx){ card.querySelectorAll('.chip').forEach((c,i)=>c.classList.toggle('on', idx==='all' || (Array.isArray(idx) && idx.includes(i)))); }
const pausaPara = txt => (save.pausa||1) * (1100 + txt.length*95);
async function waitTurn(txt, my){ turno(true); await sleep(pausaPara(txt)); if(my===seqTok) turno(false); return my===seqTok; }

/* cada sílaba se puede grabar aparte en el rincón de los grandes (la voz de la compu dice mal algunas sueltas) */
const silabaId = (w,i) => `${w.id}:s${i}`;
/* sílaba por sílaba, después la palabra entera */
/* con idioma de ayuda, antes de repetir se dice una vez la palabra con su traducción (si la introducción no la dijo) */
const conPresentacion = (intro, item) => (intro.length && ayuda() && !intro.some(x=>String(x&&x.t||x).includes(item.texto))) ? [...intro, {t:item.texto, id:item.id}] : intro;
async function silabear(w, intro=[T.repeti]){
  const my=++seqTok; const ok=()=>my===seqTok;
  intro=conPresentacion(intro, w);
  if(intro.length && !(await sayAll(intro))) return false;
  for(let i=0;i<w.silabas.length;i++){
    if(!ok()) return false; mark([i]); sfx.tick();
    await sayAll([{t:sonido(w.silabas[i]), id:silabaId(w,i), lento:true}]); if(!ok()) return false;
    if(!(await waitTurn(w.silabas[i]+'  ', my))) return false;
  }
  mark('all'); await sayAll([{t:w.texto, id:w.id, sinTrad:true}]); if(!ok()) return false;
  if(!(await waitTurn(w.texto, my))) return false;
  mark('none'); return true;
}
/* la frase en partes: cada parte, y se va juntando */
async function construirFrase(f, intro=[T.repeti]){
  const my=++seqTok; const ok=()=>my===seqTok, P=f.partes;
  intro=conPresentacion(intro, f);
  if(intro.length && !(await sayAll(intro))) return false;
  if(P.length===1){
    for(let r=0;r<2;r++){ mark('all'); await sayAll([{t:f.texto,id:f.id,sinTrad:true}]); if(!ok()) return false; if(!(await waitTurn(f.texto,my))) return false; }
    mark('none'); return true;
  }
  for(let i=0;i<P.length;i++){
    if(!ok()) return false; mark([i]); sfx.tick();
    await sayAll([{t:P[i], id:f.id?`${f.id}:p${i}`:null, sinTrad:true}]); if(!ok()) return false;
    if(!(await waitTurn(P[i],my))) return false;
    if(i>0){
      const last=i===P.length-1;
      if(last){ await sayAll([T.todoJunto]); if(!ok()) return false; }
      mark(Array.from({length:i+1},(_,j)=>j));
      const txt = last ? f.texto : P.slice(0,i+1).join(' ');
      await sayAll([last ? {t:txt,id:f.id,sinTrad:true} : {t:txt,id:f.id?`${f.id}:c${i}`:null,sinTrad:true}]); if(!ok()) return false;
      if(!(await waitTurn(txt,my))) return false;
    }
  }
  mark('none'); return true;
}

/* micrófono (solo para las grabaciones de los grandes) */
let micStream=null, micOK=null, curRec=null;
async function getMic(){ if(micStream && micStream.active) return micStream; if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) throw new Error('sin micrófono'); micStream=await navigator.mediaDevices.getUserMedia({audio:true}); micOK=true; return micStream; }
function releaseMic(){ if(micStream){ micStream.getTracks().forEach(t=>t.stop()); micStream=null; } }
function record(stream, maxMs){ return new Promise((res,rej)=>{ let rec; try{ rec=new MediaRecorder(stream); }catch(e){ return rej(e); } const chunks=[]; rec.ondataavailable=e=>{ if(e.data && e.data.size) chunks.push(e.data); }; rec.onstop=()=>{ curRec=null; res(new Blob(chunks,{type:rec.mimeType||'audio/webm'})); }; rec.onerror=e=>{ curRec=null; rej(e); }; rec.start(); const tm=setTimeout(()=>{ if(rec.state!=='inactive') rec.stop(); },maxMs); curRec={stop:()=>{ clearTimeout(tm); if(rec.state!=='inactive') rec.stop(); }}; }); }
function stopRecording(){ if(curRec) curRec.stop(); }

/* la estrella (con o sin control de un grande) */
function starPress(){
  return new Promise(res=>{
    const star=card.querySelector('.star');
    if(save.grownup){ star.classList.add('holdable'); star.querySelector('span').textContent=T.apretado; holdify(star,1100,()=>res()); }
    else onAct('star',()=>res());
  });
}

/* =========================================================
   LLEGADA AL LUGAR — la palabra del lugar en sílabas
   ========================================================= */
async function runPlaceIntro(){
  const tok=++flowTok, w=CAP.palabras[0];
  openModal(`${X_BTN}
    <h2 class="mtitle"${enAttr(enDe(CAP.bienvenida))}>${esc(CAP.bienvenida)}</h2>
    <div class="center"><div class="hero-item">${img(w.arte)}</div></div>
    ${chipsWord(w)}${turnHtml()}
    <div class="actions">${B('again','replay',T.otraVez)}${B('go','next',T.vamos,'go')}</div>`);
  liveMe();
  const first=!cs.visto;
  onAct('again',()=>narrar(()=>silabear(w,[])));
  narrar(async()=>{ if(await sayAll([{t:CAP.bienvenida, id:`${CAP.key}:bienvenida`}])) await silabear(w); });
  await waitAct('go'); if(tok!==flowTok) return;
  closeModal();
  if(first){ cs.visto=true; persist(); sayAll([T.intro1]); }
}

/* =========================================================
   ESTACIÓN — mirá, buscá, decí, sello, cuento
   ========================================================= */
async function runStation(key){
  const st=CAP.estaciones[key], tok=++flowTok, alive=()=>tok===flowTok;
  const w=palabraDe(CAP,key), f=fraseDe(CAP,key);
  // 0 · (el reloj) contar los números de la esfera
  if(st.contar && (st.meses ? CAP.meses : CAP.numeros)){ await runContar(st, tok); if(!alive()) return; }
  // 1 · mirá y repetí la palabra
  openModal(shell({steps:4,step:0,npc:st.npc,bubble:esc(T.hola),sub:st.intro,en:[enT('hola'),enDe(st.intro)].filter(Boolean).join(' '),
    center:`<div class="hero-item small">${img(st.item)}</div><div class="stack">${chipsWord(w)}${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('next','next',T.seguir,'go')}));
  liveNpc(st.npc); liveMe();
  onAct('again',()=>narrar(()=>silabear(w,[])));
  narrar(async()=>{ if(await sayAll([T.hola, {t:st.intro, id:`${CAP.key}:${key}:intro`}, T.mira(w.texto)])) await silabear(w); });
  await waitAct('next'); if(!alive()) return;
  // 2 · buscá
  const opts=shuffle([key,...shuffle(CAP.orden.filter(k=>k!==key)).slice(0,2)]);
  // cada estación puede traer su propia pregunta ("¿Qué reloj dice las cinco y media?")
  const pregunta = st.buscar || T.donde(w.texto), preguntaEn = st.buscar ? enDe(st.buscar) : (enDe(w.texto)&&enT('donde',enDe(w.texto)));
  openModal(shell({steps:4,step:1,npc:st.npc,bubble:esc(pregunta),en:preguntaEn,
    center:opts.map(k=>`<button class="choice" data-act="pick" data-k="${k}" aria-label="${esc(palabraDe(CAP,k).texto)}">${img(CAP.estaciones[k].item)}</button>`).join(''),
    actions:B('again','speaker',T.otraVez)}));
  liveNpc(st.npc);
  onAct('again',()=>narrar(()=>sayAll([pregunta])));
  narrar(()=>sayAll([pregunta]));
  for(;;){
    const {btn}=await waitAct('pick'); if(!alive()) return;
    if(btn.dataset.k===key){ btn.classList.add('right'); sfx.yay(); await sayAll([{t:praise(), id:`${CAP.key}:${key}:respuesta`}]); if(!alive()) return; break; }
    btn.classList.add('wrong'); sfx.oops(); setTimeout(()=>btn.classList.remove('wrong'),500);
    sayAll(st.buscar ? [T.casi, st.buscar] : [T.ups(w.texto)]);
  }
  // 3 · decí la frase en partes
  openModal(shell({steps:4,step:2,npc:st.npc,bubble:esc(f.texto),en:enDe(f.texto),
    center:`<div class="stack">${chipsPhrase(f)}${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')}));
  liveNpc(st.npc); liveMe();
  onAct('again',()=>narrar(()=>construirFrase(f,[])));
  const starTxt = save.grownup ? T.estrellaGrande : T.estrella;
  narrar(async()=>{ if(await sayAll([T.fraseAhora])) if(await construirFrase(f)) await sayAll([starTxt]); });
  await starPress(); if(!alive()) return;
  // 4 · sello
  const first=!cs.sellos[key];
  cs.sellos[key]=true; persist(); updateHud();
  scheduleFish(7000, 15000);
  const nowAll=first && allStamped();
  openModal(shell({steps:4,step:3,npc:st.npc,bubble:esc(st.respuesta),en:enDe(st.respuesta),
    center:`<div class="page"><div class="stamp">${img(st.item)}<em${enAttr(enDe(w.texto))}>${esc(w.texto)}</em></div></div>`,
    actions:(st.cuento?B('story','book',T.unCuento,'story go'):'')+B('map','next',T.seguir,'soft')}));
  liveNpc(st.npc);
  sfx.stamp(); setTimeout(()=>sfx.yay(),350);
  const msg=[st.respuesta, praise(true)];
  if(st.despues) msg.push(st.despues);
  if(nowAll) msg.push(CAP.final.todos||T.todos);
  if(st.cuento) msg.push(T.cuentoQ);
  narrar(()=>sayAll(msg));
  const {act}=await waitAct(['map','story']); if(!alive()) return;
  if(act==='story') runStory(CAP,key); else closeModal();
}

/* =========================================================
   RELOJES — una esfera con números y agujas (la torre del reloj, su microjuego, el final)
   ========================================================= */
/* h y m pueden tener decimales (las agujas se mueven suave). o.marca = número resaltado */
function drawReloj(c,x,y,r,h,m,o={}){
  c.save(); c.globalAlpha=.16; ell(c,x+r*.04,y+r*.08,r*1.04,r*1.04,'#000'); c.restore();
  ell(c,x,y,r*1.08,r*1.08,o.borde||'#8B6FE8'); ell(c,x,y,r,r,o.fondo||'#FFFDF8');
  for(let i=0;i<60;i++){ const a=i*Math.PI/30, big=i%5===0, r1=r*(big?.86:.9), r2=r*.95; c.strokeStyle=big?'#22314F':'#B7C3D4'; c.lineWidth=r*(big?.03:.012); c.beginPath(); c.moveTo(x+Math.sin(a)*r1,y-Math.cos(a)*r1); c.lineTo(x+Math.sin(a)*r2,y-Math.cos(a)*r2); c.stroke(); }
  if(o.numeros!==false){
    c.textAlign='center'; c.textBaseline='middle';
    for(let n=1;n<=12;n++){
      const a=n*Math.PI/6, nx=x+Math.sin(a)*r*.7, ny=y-Math.cos(a)*r*.7;
      if(o.marca===n){ ell(c,nx,ny,r*.15,r*.15,'#FFC93C'); }
      c.fillStyle=o.marca===n?'#22314F':'#3A4A6B'; c.font=`800 ${Math.round(r*(o.marca===n?.22:.18))}px 'Baloo 2',sans-serif`; c.fillText(String(n),nx,ny+r*.015);
    }
  }
  const mano=(ang,len,wd,col)=>{ c.save(); c.translate(x,y); c.rotate(ang); c.strokeStyle=col; c.lineWidth=wd; c.lineCap='round'; c.beginPath(); c.moveTo(0,len*.18); c.lineTo(0,-len); c.stroke(); c.restore(); };
  if(o.chica!==false) mano(((h%12)+m/60)*Math.PI/6, r*.5, r*.1, o.chica||'#22314F');
  if(o.grande!==false) mano(m*Math.PI/30, r*.78, r*.055, o.grande||'#22314F');
  ell(c,x,y,r*.07,r*.07,'#E8483B');
}
/* paso extra de la estación del reloj: contar del 1 al 12 en la esfera, y repetir cada número */
/* los doce meses en un calendario (st.meses): se ilumina el que se está diciendo */
function drawMeses(c,w,h,t,marca){
  const est=['#7CC6F0','#7CC6F0','#8CCB6B','#8CCB6B','#8CCB6B','#FFC93C','#FFC93C','#FFC93C','#FF9B3D','#FF9B3D','#FF9B3D','#7CC6F0'];
  const cw=Math.min(w/4.4,h/3.4), x0=w/2-cw*2, y0=h/2-cw*1.5;
  for(let i=0;i<12;i++){ const x=x0+(i%4)*cw+cw*.5, y=y0+Math.floor(i/4)*cw+cw*.5, on=marca===i+1, k=on?1+.08*Math.sin(t*8):.86;
    c.fillStyle=on?est[i]:'#EEF2F8'; rr(c,x-cw*.45*k,y-cw*.45*k,cw*.9*k,cw*.9*k,cw*.14); c.fill(); c.fillStyle=on?'#fff':est[i]; c.fillRect(x-cw*.45*k,y-cw*.45*k,cw*.9*k,cw*.16*k);
    c.font=`800 ${Math.round(cw*.38*k)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillStyle=on?'#fff':'#22314F'; c.fillText(String(i+1),x,y+cw*.08); }
}
async function runContar(st, tok){
  const nums=st.meses ? CAP.meses : CAP.numeros; let marca=0;
  openModal(shell({npc:st.npc,bubble:esc(st.contar),en:enDe(st.contar),
    center:`<div class="stack"><canvas class="contar" data-reloj></canvas>${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('next','next',T.seguir,'go')}));
  liveNpc(st.npc); liveMe();
  live(card.querySelector('[data-reloj]'),(c,w,h,t)=>{ if(st.meses) return drawMeses(c,w,h,t,marca); const r=Math.min(w,h)*.42; drawReloj(c,w/2,h/2,r,marca||12,0,{marca, grande: marca?'#22314F':'#22314F'}); });
  const contar=async(intro)=>{
    const my=++seqTok; const ok=()=>my===seqTok;
    if(intro && !(await sayAll([st.contar]))) return;
    for(let i=1;i<=12;i++){
      if(!ok()) return; marca=i; sfx.tick();
      await sayAll([{t:sonido(nums[i-1]), lento:true}]); if(!ok()) return;
      if(!(await waitTurn(nums[i-1], my))) return;
    }
    marca=0;
  };
  onAct('again',()=>narrar(()=>contar(false)));
  narrar(()=>contar(true));
  await waitAct('next'); if(tok!==flowTok) return;
  hush();
}

/* =========================================================
   ASCENSOR
   ========================================================= */
async function runLift(){
  const tok=++flowTok;
  openModal(`<button class="xbtn" data-act="lclose" tabindex="-1" aria-label="Cerrar">${ICON.close}</button>
    <div class="scene" style="justify-content:center;padding-right:0"><div class="bubble" style="flex:0 1 auto"${enAttr(enT('aQuePiso'))}><b>${esc(T.aQuePiso)}</b></div></div>
    <div class="lift">${CAP.niveles.map((L,i)=>`<button class="floorbtn ${i===cur?'here':''}" style="--fc:${L.pared}" data-act="f" data-n="${i}"><b>${L.num}</b><span>${L.nombre}</span></button>`).join('')}</div>`);
  card.querySelectorAll('.floorbtn').forEach(b=>b.addEventListener('focus',()=>{ sayAll([CAP.niveles[+b.dataset.n].numTexto]); }));
  setTimeout(()=>card.querySelector('.floorbtn:not(.here)')?.focus(),40);
  sfx.ding(); sayAll([T.ascensor]);
  const lt={x:player.x,y:player.y};
  const {act,btn}=await waitAct(['f','lclose']); if(tok!==flowTok) return;
  closeModal();
  const n = act==='f' ? +btn.dataset.n : cur;
  if(n===cur){ placePlayer(lt.x,lt.y+1); savePos(); return; }
  sfx.ding(); goFloor(n,'L');
}

/* =========================================================
   PASAPORTE
   ========================================================= */
function runPassport(){
  if(busy) return; busy=true; ++flowTok;
  const cells=CAP.orden.map(k=>{ const s=CAP.estaciones[k], got=cs.sellos[k]; return `<button class="pp-cell ${got?'got':''}" data-act="pp" data-k="${k}">${img(s.item)}<em>${got?esc(palabraDe(CAP,k).texto):'?'}</em></button>`; }).join('')
    + `<button class="pp-cell gate ${cs.final?'got':''}" data-act="pp" data-k="G">${img(CAP.final.icono)}<em>${cs.final?esc(CAP.final.despedida):'?'}</em></button>`;
  openModal(`${X_BTN}
    <h2 class="mtitle">${esc(T.pasaporte)}</h2>
    <div class="pp-grid">${cells}</div>
    <div class="actions">${B('closepp','next',T.seguir,'go')}</div>`);
  onAct('closepp',()=>closeModal());
  onAct('pp',b=>{ const k=b.dataset.k; if(k==='G'){ sayAll(cs.final?[CAP.final.despedida]:[CAP.final.ppFinal||T.ppFinal]); return; } if(!cs.sellos[k]){ sayAll([T.ppFalta]); return; } const w=palabraDe(CAP,k), f=fraseDe(CAP,k); sayAll([{t:w.texto,id:w.id},{t:f.texto,id:f.id}]); });
  sayAll([T.pasaporte]);
}

/* =========================================================
   CUENTOS
   ========================================================= */
const storyFill = s => s.replace(/\{N\}/g, charDisplayName(char()) || char().name);
const marcarCuento = s => esc(s).replace(/\*(.+?)\*/g,'<mark>$1</mark>');
const storyHtml = s => { const f=storyFill(s); return esDoble(f) ? `${marcarCuento(caraLatina(f))}<small class="arab" lang="ar" dir="rtl">${marcarCuento(caraHablada(f))}</small>` : marcarCuento(f); };
const storySpeech = s => storyFill(s).replace(/\*/g,'');

function buildStorySpeechParts(texto, pgId){
  const ch = char();
  const lang = langCode();
  if(ch.id === 'luna' && pgId && staticAudioUrl(pgId)){
    return [{ t: storySpeech(texto), id: pgId }];
  }
  if(!texto || !texto.includes('{N}')){
    return [{ t: storySpeech(texto), id: pgId }];
  }
  const charAudioId = `${lang}:personaje:${ch.id}`;
  const chName = charDisplayName(ch);
  if(/^\s*\{N\}/.test(texto)){
    const rest = texto.replace(/^\s*\{N\}\s*[:,]?\s*/, '').replace(/\*/g,'');
    return [
      { id: charAudioId, t: chName, sinTrad: true },
      { t: rest }
    ];
  }
  if(/\{N\}[\.\?!«»"'\s]*$/.test(texto)){
    const before = texto.replace(/\s*\{N\}[\.\?!«»"'\s]*$/, '').replace(/\*/g,'');
    return [
      { t: before, sinTrad: true },
      { id: charAudioId, t: chName }
    ];
  }
  const halves = texto.split('{N}');
  return [
    { t: halves[0].replace(/\*/g,''), sinTrad: true },
    { id: charAudioId, t: chName, sinTrad: true },
    { t: halves.slice(1).join('').replace(/\*/g,'') }
  ];
}

async function runStory(c, key, fromLib=false){
  const tok=++flowTok, S=c.estaciones[key].cuento; busy=true;
  let i=0;
  for(;;){
    const pg=S.paginas[i], last=i===S.paginas.length-1;
    openModal(`${X_BTN}
      <h3 class="stitle"${enAttr(enDe(S.titulo))}>${esc(S.titulo)}<small>${i+1} / ${S.paginas.length}</small></h3>
      <canvas data-story></canvas>
      <p class="storytext"${enAttr(storySpeech(enDe(pg.texto)))}>${storyHtml(pg.texto)}</p>
      <div class="actions">${i>0?B('prev','back',T.atras,'soft'):''}${B('again','replay',T.otraVez)}${last?B('done','star',T.fin,'go'):B('next','next',T.seguir,'go')}</div>`,'story');
    const t0=performance.now()/1000;
    live(card.querySelector('[data-story]'),(cx,w,h,t)=>drawScene(cx,w,h,c,pg.escena,t-t0));
    const pgId = `${c.key}:${key}:cuento:${i}`, titId = `${c.key}:${key}:cuento:titulo`;
    const storyParts = buildStorySpeechParts(pg.texto, pgId);
    onAct('again',()=>narrar(()=>sayAll(storyParts)));
    narrar(()=>sayAll(i===0 ? [{t:S.titulo, id:titId}, ...storyParts] : storyParts));
    const {act}=await waitAct(['prev','next','done']); if(tok!==flowTok) return;
    if(act==='done'){ closeModal(); if(fromLib){ busy=false; } return; }
    i += act==='next' ? 1 : -1;
  }
}
function bgTerminal(c,w,h){
  c.fillStyle='#4FA3D1'; c.fillRect(0,0,w,h*.55);
  for(let i=0;i<4;i++){ const x=w*(.06+i*.24); c.fillStyle='#CDEBFF'; rr(c,x,h*.1,w*.18,h*.3,10); c.fill(); }
  c.fillStyle='#2F7BAA'; c.fillRect(0,h*.52,w,h*.04);
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<4;j++){ c.fillStyle=(i+j)%2?'#F1D9B2':'#F8E6C6'; c.fillRect(i*cw,h*.56+j*ch,cw+1,ch+1); }
}
function cloud(c,x,y,r){ ell(c,x,y,r*1.6,r,'#fff'); ell(c,x-r*.9,y+r*.2,r,r*.75,'#fff'); ell(c,x+r*1,y+r*.15,r*1.1,r*.8,'#fff'); }
function bgSky(c,w,h,t){ const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#7FC8F5'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h); cloud(c,w*.2+Math.sin(t*.5)*10,h*.2,h*.06); cloud(c,w*.8,h*.15,h*.05); cloud(c,(w*.5+t*12)%(w*1.2)-w*.1,h*.35,h*.04); c.fillStyle='#8E99AA'; c.fillRect(0,h*.82,w,h*.18); c.fillStyle='#fff'; for(let x=0;x<w;x+=60) c.fillRect(x,h*.9,30,4); }
function bgWindow(c,w,h,t){
  c.fillStyle='#4DB58A'; c.fillRect(0,0,w,h*.6);
  const X=w*.06, Y=h*.06, W=w*.88, H=h*.5;
  c.save(); rr(c,X,Y,W,H,14); c.clip();
  const g=c.createLinearGradient(0,Y,0,Y+H); g.addColorStop(0,'#8ED1FF'); g.addColorStop(1,'#DDF2FF'); c.fillStyle=g; c.fillRect(X,Y,W,H);
  cloud(c,X+W*.2,Y+H*.25,H*.08); cloud(c,X+W*.75,Y+H*.2,H*.07);
  c.fillStyle='#8E99AA'; c.fillRect(X,Y+H*.78,W,H*.22);
  c.restore();
  c.strokeStyle='#fff'; c.lineWidth=8; rr(c,X,Y,W,H,14); c.stroke(); c.lineWidth=5; for(let i=1;i<4;i++){ c.beginPath(); c.moveTo(X+W*i/4,Y); c.lineTo(X+W*i/4,Y+H); c.stroke(); }
  c.fillStyle='#348E68'; c.fillRect(0,h*.58,w,h*.03);
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<3;j++){ c.fillStyle=(i+j)%2?'#DAD2F2':'#E8E2F8'; c.fillRect(i*cw,h*.61+j*ch,cw+1,ch+1); }
}
function bgSalon(c,w,h){
  c.fillStyle='#F28F6B'; c.fillRect(0,0,w,h*.55);
  c.fillStyle='#FBE3C8'; c.fillRect(0,h*.36,w,h*.19);
  c.fillStyle='#C96A4A'; c.fillRect(0,h*.34,w,h*.025);
  for(let i=0;i<3;i++){ const x=w*(.2+i*.3); c.strokeStyle='#22314F'; c.lineWidth=2; c.beginPath(); c.moveTo(x,0); c.lineTo(x,h*.12); c.stroke(); poly(c,[x-h*.06,h*.17, x+h*.06,h*.17, x+h*.03,h*.11, x-h*.03,h*.11],'#FFC93C'); c.save(); c.globalAlpha=.25; ell(c,x,h*.22,h*.09,h*.05,'#FFF59A'); c.restore(); }
  c.fillStyle='#C96A4A'; c.fillRect(0,h*.52,w,h*.04);
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<4;j++){ c.fillStyle=(i+j)%2?'#2B2B36':'#F4F1EA'; c.fillRect(i*cw,h*.56+j*ch,cw+1,ch+1); }
}
function bgRelojes(c,w,h,t){
  c.fillStyle='#6A50C4'; c.fillRect(0,0,w,h*.58);
  c.fillStyle='rgba(255,255,255,.06)'; for(let x=0;x<w;x+=w*.08) c.fillRect(x,0,w*.04,h*.58);
  const rel=[[.12,.2,.08,3,0],[.3,.3,.06,9,15],[.5,.17,.09,(t*.5)%12,(t*30)%60],[.7,.3,.065,6,30],[.88,.2,.08,10,45]];
  for(const [x,y,r,hh,mm] of rel) drawReloj(c,w*x,h*y,h*r*1.6,hh,mm,{numeros:false,borde:'#FFC93C'});
  c.fillStyle='#4E3A99'; c.fillRect(0,h*.55,w,h*.04);
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<3;j++){ c.fillStyle=(i+j)%2?'#C98B4E':'#B5753A'; c.fillRect(i*cw,h*.59+j*ch,cw+1,ch+1); }
}
function bgFeria(c,w,h,t){
  const g=c.createLinearGradient(0,0,0,h*.6); g.addColorStop(0,'#7FC8F5'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h*.6);
  cloud(c,w*.8+Math.sin(t*.3)*8,h*.1,h*.04);
  // puestos con toldos a rayas y cajones de fruta
  const toldos=[['#E8483B','#fff'],['#2FBF8F','#fff'],['#2E86DE','#fff']];
  toldos.forEach(([a,b2],i)=>{ const x=w*(.02+i*.34), tw=w*.3;
    c.fillStyle='#C98B4E'; c.fillRect(x+tw*.05,h*.22,tw*.04,h*.36); c.fillRect(x+tw*.91,h*.22,tw*.04,h*.36);
    for(let k=0;k<6;k++){ c.fillStyle=k%2?b2:a; c.fillRect(x+k*tw/6,h*.14,tw/6+1,h*.1); poly(c,[x+k*tw/6,h*.24, x+(k+1)*tw/6,h*.24, x+(k+.5)*tw/6,h*.29],k%2?b2:a); }
    c.fillStyle='#B5753A'; c.fillRect(x,h*.44,tw,h*.14);
    const cols=[['#E8483B','#FFC93C','#FF9B3D'],['#2FBF8F','#FF9B3D','#E8483B'],['#FFC93C','#8B6FE8','#2FBF8F']][i];
    cols.forEach((col,j)=>{ for(let n=0;n<4;n++) ell(c,x+tw*(.12+j*.3)+n*tw*.05,h*(.42-(n%2)*.025),h*.028,h*.026,col); });
  });
  c.fillStyle='#8E99AA'; c.fillRect(0,h*.58,w,h*.42);
  c.fillStyle='rgba(255,255,255,.18)'; for(let x=0;x<w;x+=w*.1) c.fillRect(x,h*.58,2,h*.42);
}
function bgCasa(c,w,h,t){
  c.fillStyle='#FFE3C2'; c.fillRect(0,0,w,h*.6);
  c.fillStyle='rgba(232,132,107,.18)'; for(let x=0;x<w;x+=w*.06) c.fillRect(x,0,w*.03,h*.6);
  // ventana y cuadros de la familia
  c.fillStyle='#fff'; rr(c,w*.62,h*.08,w*.26,h*.3,10); c.fill(); const g=c.createLinearGradient(0,h*.1,0,h*.36); g.addColorStop(0,'#8ED1FF'); g.addColorStop(1,'#DDF2FF'); c.fillStyle=g; c.fillRect(w*.635,h*.1,w*.23,h*.26);
  cloud(c,w*.7+Math.sin(t*.4)*6,h*.18,h*.03); c.fillStyle='#fff'; c.fillRect(w*.745,h*.1,w*.01,h*.26);
  for(const [x,y,col] of [[.12,.12,'#E8483B'],[.28,.2,'#2E86DE'],[.42,.1,'#2FBF8F']]){ c.fillStyle=col; rr(c,w*x,h*y,w*.1,h*.14,6); c.fill(); c.fillStyle='#FFF6E5'; rr(c,w*x+w*.012,h*y+h*.02,w*.076,h*.1,4); c.fill(); heart(c,w*x+w*.05,h*y+h*.07,h*.018); }
  c.fillStyle='#C4664F'; c.fillRect(0,h*.57,w,h*.03);
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<3;j++){ c.fillStyle=(i+j)%2?'#E9C99E':'#F3DDBA'; c.fillRect(i*cw,h*.6+j*ch,cw+1,ch+1); }
}
function bgJardin(c,w,h,t){
  const g=c.createLinearGradient(0,0,0,h*.6); g.addColorStop(0,'#7FC8F5'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h*.6);
  ell(c,w*.88,h*.13,h*.07,h*.07,'#FFE07A'); cloud(c,w*.25+Math.sin(t*.3)*8,h*.15,h*.045);
  // la casa al fondo y la cerca
  c.fillStyle='#F28F6B'; c.fillRect(w*.08,h*.22,w*.3,h*.36); poly(c,[w*.04,h*.24, w*.42,h*.24, w*.23,h*.06],'#C4664F');
  c.fillStyle='#CDEBFF'; rr(c,w*.12,h*.3,w*.08,h*.1,4); c.fill(); c.fillStyle='#8A5636'; rr(c,w*.25,h*.36,w*.07,h*.22,4); c.fill();
  c.fillStyle='#fff'; for(let x=w*.45;x<w;x+=w*.04){ poly(c,[x,h*.58, x+w*.03,h*.58, x+w*.03,h*.42, x+w*.015,h*.38, x,h*.42],'#fff'); } c.fillRect(w*.45,h*.46,w*.55,h*.025);
  c.fillStyle='#7FC46A'; c.fillRect(0,h*.58,w,h*.42); c.fillStyle='#6DB559'; for(let i=0;i<14;i++){ const x=(i*97)%w, y=h*(.66+((i*37)%30)/100); c.fillRect(x,y,3,8); c.fillRect(x+5,y+2,3,6); }
}
function bgNoche(c,w,h,t){
  c.fillStyle='#3B3A7A'; c.fillRect(0,0,w,h*.6);
  c.fillStyle='#22314F'; rr(c,w*.58,h*.08,w*.3,h*.3,10); c.fill(); c.fillStyle='#1B1F45'; c.fillRect(w*.6,h*.1,w*.26,h*.26);
  ell(c,w*.78,h*.18,h*.05,h*.05,'#FFE07A'); ell(c,w*.795,h*.165,h*.045,h*.045,'#1B1F45');
  for(let i=0;i<6;i++){ const tw=.5+.5*Math.sin(t*2+i); star5(c,w*(.63+(i*.037)%.2),h*(.14+(i*.07)%.18),h*.012*(.6+tw*.6),'#FFF59A'); }
  for(let i=0;i<8;i++) star5(c,w*(.05+i*.07),h*(.08+(i%3)*.12),h*.01,'rgba(255,245,154,.5)');
  c.fillStyle='#2B2A5E'; c.fillRect(0,h*.57,w,h*.03);
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<3;j++){ c.fillStyle=(i+j)%2?'#5A5297':'#4E4789'; c.fillRect(i*cw,h*.6+j*ch,cw+1,ch+1); }
}
function bgCocina(c,w,h){
  c.fillStyle='#EAF4FA'; c.fillRect(0,0,w,h*.6);
  c.strokeStyle='#CFE2EE'; c.lineWidth=2; const tl=h*.08; for(let y=0;y<h*.6;y+=tl){ c.beginPath(); c.moveTo(0,y); c.lineTo(w,y); c.stroke(); } for(let x=0;x<w;x+=tl){ c.beginPath(); c.moveTo(x,0); c.lineTo(x,h*.6); c.stroke(); }
  c.fillStyle='#AEB8C8'; poly(c,[w*.55,0, w*.85,0, w*.9,h*.14, w*.5,h*.14],'#AEB8C8');
  c.fillStyle='#8A96AA'; c.fillRect(w*.42,h*.42,w*.56,h*.18); c.fillStyle='#5C6A86'; c.fillRect(w*.42,h*.42,w*.56,h*.025);
  c.fillStyle='#22314F'; for(const x of [.52,.72,.9]) ell(c,w*x,h*.45,h*.05,h*.012,'#22314F');
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<3;j++){ c.fillStyle=(i+j)%2?'#C9D3E6':'#E3E8F0'; c.fillRect(i*cw,h*.6+j*ch,cw+1,ch+1); }
}
function bgCalle(c,w,h,t){
  const g=c.createLinearGradient(0,0,0,h*.6); g.addColorStop(0,'#7FC8F5'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h*.6);
  cloud(c,w*.75+Math.sin(t*.4)*10,h*.14,h*.05);
  c.fillStyle='#F28F6B'; c.fillRect(w*.04,h*.16,w*.42,h*.46);
  for(let i=0;i<7;i++){ c.fillStyle=i%2?'#FFFFFF':'#E8483B'; c.fillRect(w*.04+i*w*.06,h*.16,w*.06,h*.08); }
  c.fillStyle='#CDEBFF'; rr(c,w*.08,h*.3,w*.12,h*.14,6); c.fill(); rr(c,w*.3,h*.3,w*.12,h*.14,6); c.fill();
  c.fillStyle='#8A5636'; rr(c,w*.205,h*.36,w*.08,h*.26,4); c.fill();
  drawImg(c,'restaurante',w*.25,h*.08,h*.16);
  c.fillStyle='#6C7686'; c.fillRect(0,h*.6,w,h*.4); c.fillStyle='#fff'; for(let x=0;x<w;x+=70) c.fillRect(x,h*.62,8,h*.3);
}
function star5(c,x,y,r,fill){ c.beginPath(); for(let i=0;i<10;i++){ const a=-Math.PI/2+i*Math.PI/5, rr2=i%2?r*.45:r; c.lineTo(x+Math.cos(a)*rr2,y+Math.sin(a)*rr2); } c.closePath(); c.fillStyle=fill; c.fill(); }
function heart(c,x,y,s){ c.fillStyle='#FF6F8F'; c.beginPath(); c.moveTo(x,y+s*.9); c.bezierCurveTo(x-s*1.4,y,x-s*.7,y-s,x,y-s*.3); c.bezierCurveTo(x+s*.7,y-s,x+s*1.4,y,x,y+s*.9); c.fill(); }
function drawScene(c,w,h,cap,esc2,t){
  const fondo=esc2.fondo||'terminal', gy=h*.92, S=h*.52;
  if(fondo==='cielo') bgSky(c,w,h,t); else if(fondo==='ventana') bgWindow(c,w,h,t);
  else if(fondo==='relojes') bgRelojes(c,w,h,t);
  else if(fondo==='feria') bgFeria(c,w,h,t); else if(fondo==='plaza') bgPlaza(c,w,h,t); else if(fondo==='consultorio') bgConsultorio(c,w,h); else if(fondo==='granja') bgGranja(c,w,h,t); else if(fondo==='escuela') bgEscuela(c,w,h); else if(fondo==='fiesta') bgFiesta(c,w,h,t);
  else if(fondo==='casa') bgCasa(c,w,h,t); else if(fondo==='jardin') bgJardin(c,w,h,t); else if(fondo==='noche') bgNoche(c,w,h,t);
  else if(fondo==='salon') bgSalon(c,w,h); else if(fondo==='cocina') bgCocina(c,w,h); else if(fondo==='calle') bgCalle(c,w,h,t);
  else bgTerminal(c,w,h);
  const escY=(p)=>gy+p*(h*.24-gy);
  for(const a of esc2.actores||[]){
    if(a.tipo==='escalera'){ c.save(); c.strokeStyle='#5C6A86'; c.lineWidth=h*.14; c.lineCap='round'; c.beginPath(); c.moveTo(w*.12,gy); c.lineTo(w*.86,h*.24); c.stroke(); c.strokeStyle='#A8B3C6'; c.lineWidth=3; for(let k=0;k<12;k++){ const p=((k/12)+t*.15)%1; const x=w*.12+p*w*.74, y=escY(p); c.beginPath(); c.moveTo(x-12,y-6); c.lineTo(x+12,y+6); c.stroke(); } c.restore(); }
    else if(a.tipo==='heroe'){ const lift=a.gesto==='salto'?Math.abs(Math.sin(t*4))*h*.1:0; drawHero(c,(a.x??.4)*w,gy,S*(a.tam||1),{t,lift,facing:a.mira||1,backpack:true,uniforme:(a.uniforme&&cap.uniforme)?cap.uniforme.ropa:null,wave:a.gesto==='saludo',mood:a.gesto==='sorpresa'?'wow':a.gesto==='triste'?'triste':null,accion:ACCIONES.includes(a.gesto)?a.gesto:null}); }
    else if(a.tipo==='npc'){ const n=a.de==='final'?cap.final.npc:cap.estaciones[a.de].npc; drawAnimal(c,n,(a.x??.7)*w,gy,S*(a.tam||.95),{t,facing:a.mira||1,hat:n.hat,mood:a.gesto==='triste'?'triste':a.gesto==='sorpresa'?'wow':null,wave:a.gesto==='saludo',accion:ACCIONES.includes(a.gesto)?a.gesto:null}); }
    else if(a.tipo==='cosa'){
      let x=(a.x??.5)*w, y=(a.y??.65)*h, s=(a.tam??.3)*h, rot=0, sc=1;
      switch(a.anim){
        case 'flotar': y+=Math.sin(t*3)*h*.02; break;
        case 'latir': sc=1+.08*Math.sin(t*6); break;
        case 'saltar': y-=Math.abs(Math.sin(t*4))*h*.12; break;
        case 'rodar': x=((((a.x??0)+t*.2)%1.25)-.12)*w; rot=Math.sin(t*14)*.14; break;
        case 'cruzar': x=((((a.x??0)+t*.16)%1.3)-.15)*w; y+=Math.sin(t*3)*h*.06; rot=Math.sin(t*3)*.25; break;
        case 'volar': { const p=(t*.16)%1; x=(.05+p*1.0)*w; y=(.82-p*.7)*h; rot=-.3; break; }
        case 'hamacar': rot=Math.sin(t*2.2)*.35; x+=Math.sin(t*2.2)*h*.06; break;
        case 'balancear': rot=Math.sin(t*1.8)*.2; break;
        case 'subir': { const p=(t*.18)%1; x=(.12+p*.74)*w; y=escY(p)-s*.45; rot=-.45; break; }
      }
      drawImg(c,a.arte,x,y,s*sc,rot);
    }
    else if(a.tipo==='efecto'){
      const ex=(a.x??.5)*w, ey=(a.y??.4)*h;
      if(a.cual==='estrellas'){ for(let k=0;k<8;k++){ const ang=k*Math.PI/4+t*.4, d=h*(.18+.04*Math.sin(k*2)); const sc=.6+.4*Math.abs(Math.sin(t*3+k)); star5(c,ex+Math.cos(ang)*d*1.3,ey+Math.sin(ang)*d,h*.03*sc,'#FFC93C'); } }
      if(a.cual==='corazones'){ for(let k=0;k<6;k++){ const p=(t*.3+k/6)%1; c.save(); c.globalAlpha=1-p; heart(c,ex+Math.sin(t*2+k)*h*.08+(k-2.5)*h*.04,ey-p*h*.4,h*(.025+.008*(k%3))); c.restore(); } }
      if(a.cual==='burbujas'){ for(let k=0;k<10;k++){ const p=(t*.25+k/10)%1; const x=ex+Math.sin(t*1.5+k*1.7)*h*.18, y=ey-p*h*.55, r=h*(.02+.015*(k%3)); c.save(); c.globalAlpha=.85*(1-p); c.fillStyle='rgba(255,255,255,.55)'; c.strokeStyle='#7CC6F0'; c.lineWidth=2; c.beginPath(); c.arc(x,y,r,0,Math.PI*2); c.fill(); c.stroke(); c.restore(); } }
      if(a.cual==='zzz'){ c.font=`800 ${Math.round(h*.07)}px 'Baloo 2',sans-serif`; c.fillStyle='#5C6A86'; for(let k=0;k<3;k++){ const p=(t*.35+k/3)%1; c.save(); c.globalAlpha=1-p; c.fillText('z',ex+p*h*.12+k*4,ey-p*h*.25); c.restore(); } }
    }
  }
}


/* =========================================================
   PECECITOS — aparecen en el mapa; para comerlos hay que contestar
   ========================================================= */
const fishes={};               // nivel -> {x,y}
let nextFishAt=Infinity;
const FISH_COOLDOWN_MS = 5 * 60 * 1000;
function scheduleFish(min=18000,max=32000){ nextFishAt=performance.now()+min+Math.random()*(max-min); }
function fishCatchCooldown(){ scheduleFish(FISH_COOLDOWN_MS, FISH_COOLDOWN_MS + 20000); }
function maybeSpawnFish(now){
  if(busy || !modal.hidden || fishes[cur] || now<nextFishAt) return;
  const cands=[];
  for(let y=1;y<ROWS-1;y++) for(let x=1;x<COLS-1;x++){
    if(!PASS.has(tileAt(cur,x,y))) continue;
    if(Math.abs(x-player.x)+Math.abs(y-player.y)<3) continue;
    if(isStation(tileAt(cur,x,y-1))) continue;            // no tapar la entrada de una estación
    cands.push([x,y]);
  }
  if(!cands.length){ scheduleFish(); return; }
  const [x,y]=cands[Math.floor(Math.random()*cands.length)];
  fishes[cur]={x,y}; nextFishAt=Infinity;
  sfx.tick(); setTimeout(()=>sfx.tick(),120);
  sayAll([T.pez]);
}
function drawFish(f,t){
  const T=view.T, c=wc, X=f.x*T+T*.5, Y=f.y*T+T*.55+Math.sin(t*4)*T*.06;
  c.save(); c.globalAlpha=.25; ell(c,X,f.y*T+T*.88,T*.24,T*.07,'#22314F'); c.restore();
  for(let k=0;k<3;k++){ const a=t*2+k*2.1; star5(c,X+Math.cos(a)*T*.38,Y+Math.sin(a)*T*.28,T*.06*(.6+.4*Math.abs(Math.sin(t*4+k))),'#FFC93C'); }
  drawImg(c,'pez',X,Y,T*.72,Math.sin(t*3)*.12);
}
const COLORES=[{k:'rojo',c:'#E8483B'},{k:'azul',c:'#2E6BD9'},{k:'amarillo',c:'#FFC93C'},{k:'verde',c:'#2FBF8F'},{k:'violeta',c:'#8B6FE8'},{k:'naranja',c:'#FF9B3D'},{k:'rosa',c:'#FF8FB8'},{k:'negro',c:'#2B2B36'},{k:'blanco',c:'#FFFFFF'}];
const blob = c => `<img src="${svgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10c24 0 40 16 40 38S74 90 50 90 10 72 10 48 26 10 50 10z" fill="${c}" stroke="#22314F" stroke-opacity=".15" stroke-width="3"/><ellipse cx="36" cy="34" rx="10" ry="6" fill="#fff" opacity=".5"/></svg>`)}" alt="">`;
const pick1 = a => a[Math.floor(Math.random()*a.length)];
function makeQuestion(){
  const r=Math.random(), qs=CAP.preguntas||[];
  if(r<.45 && qs.length){
    const q=pick1(qs);
    return {texto:q.p, en:enDe(q.p), ops:shuffle([{html:img(q.ok),ok:true},...q.no.map(a=>({html:img(a),ok:false}))]), bien:q.r};
  }
  if(r<.65){
    const ws=CAP.palabras.filter(w=>ART[w.arte]), w=pick1(ws);
    const others=shuffle(ws.filter(x=>x.arte!==w.arte)).slice(0,2);
    return {texto:T.cualEs(w.texto), en:enDe(w.texto)&&enT('cualEs',enDe(w.texto)), ops:shuffle([{html:img(w.arte),ok:true},...others.map(o=>({html:img(o.arte),ok:false}))]), bien:T.si(w.texto), id:w.id};
  }
  if(r<.83){
    const cs3=shuffle(COLORES).slice(0,3), k=cs3[0], nm=T.colores[k.k];
    return {texto:T.color(nm), en:enT('color',(ENT.colores||{})[k.k]||''), ops:shuffle(cs3.map((c,i)=>({html:blob(c.c),ok:i===0}))), bien:T.si(nm)};
  }
  const n=1+Math.floor(Math.random()*5);
  const opts=shuffle([n,...shuffle([1,2,3,4,5,6].filter(x=>x!==n)).slice(0,2)]);
  return {texto:T.cuantos, en:enT('cuantos'), img:`<div class="fishrow">${Array.from({length:n},()=>img('pez')).join('')}</div>`, ops:opts.map(x=>({html:`<span class="num">${x}</span>`,ok:x===n})), bien:T.si(T.numeros[n])};
}
async function runFish(){
  const tok=++flowTok, alive=()=>tok===flowTok, q=makeQuestion(), lv=cur;
  openModal(`${X_BTN}
    <div class="scene"><div class="fishpic">${img('pez')}</div><div class="bubble"${enAttr(q.en)}><b>${esc(q.texto)}</b></div></div>
    ${q.img?`<div class="center">${q.img}</div>`:''}
    <div class="center" data-opts>${q.ops.map((o,i)=>`<button class="choice" data-act="pick" data-i="${i}">${o.html}</button>`).join('')}</div>
    <div class="actions" data-acts>${B('again','speaker',T.otraVez)}</div>`);
  onAct('again',()=>narrar(()=>sayAll([q.texto])));
  narrar(()=>sayAll([T.pezQ, q.texto]));
  let tries=0;
  for(;;){
    const {btn}=await waitAct('pick'); if(!alive()) return;
    const o=q.ops[+btn.dataset.i];
    if(o.ok){
      btn.classList.add('right'); sfx.yay();
      card.querySelectorAll('[data-act="pick"]').forEach(b=>{ if(b!==btn) b.style.opacity='.35'; b.disabled=true; });
      const bbl=card.querySelector('.bubble');
      if(bbl){ bbl.innerHTML=`<b>${esc(q.bien)}</b>`; if(q.en) bbl.setAttribute('data-en',q.en); }
      const optsEl=card.querySelector('[data-opts]');
      const turnDiv=document.createElement('div');
      turnDiv.className='stack'; turnDiv.style.margin='10px auto';
      turnDiv.innerHTML=turnHtml();
      optsEl.insertAdjacentElement('afterend', turnDiv);
      liveMe();
      const actsEl=card.querySelector('[data-acts]');
      actsEl.innerHTML=B('again','speaker',T.otraVez)+B('star','star',T.loDije,'star go');
      onAct('again',()=>narrar(()=>sayAll([q.bien])));
      const starTxt=save.grownup?T.estrellaGrande:T.estrella;
      narrar(async()=>{
        if(await sayAll([q.bien, T.repeti, q.bien])) await sayAll([starTxt]);
      });
      await starPress();
      if(!alive()) return;

      save.puntos=(save.puntos||0)+1; persist(); updateHud();
      delete fishes[lv]; fishCatchCooldown();
      card.querySelector('.fishpic').classList.add('eaten');
      setWait(true);
      await sayAll([T.nam, T.tenesPeces(T.peces(save.puntos))]);
      if(alive()) closeModal(); return;
    }
    tries++; btn.classList.add('wrong'); sfx.oops(); btn.disabled=true;
    if(tries>=2){
      delete fishes[lv]; scheduleFish();
      card.querySelector('.fishpic').classList.add('away'); setWait(true);
      await sayAll([T.escapo]);
      if(alive()) closeModal(); return;
    }
    narrar(()=>sayAll([T.casi, q.texto])).then(()=>btn.disabled=true);
  }
}

/* =========================================================
   PUERTA FINAL + VUELO
   ========================================================= */
async function runGate(){
  const tok=++flowTok, F=CAP.final, alive=()=>tok===flowTok;
  const have=CAP.orden.filter(k=>cs.sellos[k]).length;
  if(have<CAP.orden.length){
    openModal(shell({npc:F.npc,bubble:esc(T.todaviaNo),en:enT('todaviaNo'),
      center:`<div class="slots" style="flex-wrap:wrap;justify-content:center;background:#1F3A7A;padding:10px;border-radius:18px">${CAP.orden.map(k=>`<i class="slot ${cs.sellos[k]?'got':''}">${img(CAP.estaciones[k].item)}</i>`).join('')}</div>`,
      actions:B('ok','next',T.bueno,'go')}));
    liveNpc(F.npc);
    narrar(()=>sayAll([T.todaviaNo, T.faltan(have, CAP.orden.length)]));
    await waitAct('ok'); if(alive()) closeModal(); return;
  }
  const f=CAP.frases.find(p=>p.id===`${CAP.key}:final`);
  openModal(shell({npc:F.npc,bubble:esc(F.pregunta),en:enDe(F.pregunta),
    center:`<div class="stack">${chipsPhrase(f)}${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')}));
  liveNpc(F.npc); liveMe();
  onAct('again',()=>narrar(()=>construirFrase(f,[])));
  narrar(async()=>{ if(await sayAll([F.pregunta,T.queDecimos])) if(await construirFrase(f)) await sayAll([save.grownup?T.estrellaGrande:T.estrella]); });
  await starPress(); if(!alive()) return;
  openModal(`<canvas class="fly" data-fly></canvas><div class="actions" data-end hidden>${B('again','replay',F.otraVezB||T.otroViajeB,'soft')}${B('home','home',T.inicio,'go')}</div>`,'wide');
  const t0=performance.now()/1000, conf=Array.from({length:70},(_,i)=>({x:Math.random(),s:.6+Math.random()*.8,c:['#FF6F59','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8'][i%5],r:Math.random()*6}));
  if(F.anim==='compras'){
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawCompras(c,w,h,t-t0,t,conf,F));
    [.3,.6,.9,1.2,1.5].forEach(s=>setTimeout(()=>alive()&&tone(1200,.08,'triangle',.08),s*1000));
    [2.2,2.6,3,3.4].forEach((s,i)=>setTimeout(()=>alive()&&tone(520+i*130,.12,'sine',.1),s*1000));
  } else if(F.anim==='simon'){
    const S={acc:null, texto:'', habla:false, fin:0};
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawSimon(c,w,h,t-t0,t,conf,F,S));
    sfx.ding();
    for(const o of F.ordenes){ S.texto=o.texto; S.acc=null; S.habla=true; await sayAll([o.texto]); if(!alive()) return; S.habla=false; S.acc=o.accion; tone(660,.1,'triangle',.1); await sleep(1600); if(!alive()) return; }
    S.fin=performance.now()/1000; S.acc=null; sfx.yay();
  } else if(F.anim==='fiesta'){
    const S={texto:'', linea:0, fin:0}, invitados=CAP_LIST.filter(c=>c.id!==CAP.id).map(c=>c.final.npc);
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawFiesta(c,w,h,t-t0,t,conf,F,S,invitados,CAP.uniforme));
    const melodia=[[392,392,440,392,523,494],[392,392,440,392,587,523],[392,392,784,659,523,494,440],[698,698,659,523,587,523]];
    for(let i=0;i<(F.cancion||[]).length;i++){
      S.linea=i+1; S.texto=F.cancion[i].replaceAll('{N}', save.name||'');
      (melodia[i]||[]).forEach((f,j)=>setTimeout(()=>alive()&&tone(f,.28,'triangle',.07),j*260));
      await sayAll([S.texto]); if(!alive()) return; await sleep(300); if(!alive()) return;
    }
    S.fin=performance.now()/1000; sfx.yay();
  } else if(F.anim==='semana'){
    const S={n:0, fin:0};
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawSemana(c,w,h,t-t0,t,conf,F,S));
    for(let i=0;i<(F.dias||[]).length;i++){ S.n=i+1; tone(440+i*60,.12,'triangle',.1); await sayAll([F.dias[i]]); if(!alive()) return; await sleep(350); if(!alive()) return; }
    S.fin=performance.now()/1000; sfx.yay();
  } else if(F.anim==='saludo'){
    const S={n:0, texto:'', fin:0}, amigos=CAP.orden.map(k=>CAP.estaciones[k].npc);
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawSaludo(c,w,h,t,conf,F,S,amigos));
    for(let i=0;i<amigos.length;i++){ S.n=i+1; S.texto=(F.palabras||[])[i]||''; tone(520+i*80,.12,'triangle',.1); await sayAll([{t:S.texto, id:`${CAP.key}:final:palabra:${i}`}]); if(!alive()) return; await sleep(350); if(!alive()) return; }
    S.fin=performance.now()/1000; sfx.yay();
  } else if(F.anim==='desfile'){
    const S={n:0, texto:'', fin:0};
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawDesfile(c,w,h,t-t0,t,conf,F,S,CAP.uniforme));
    for(let i=0;i<(F.desfile||[]).length;i++){ S.n=i+1; S.texto=(F.sonidos||[])[i]||''; tone(520+i*90,.12,'triangle',.1); await sayAll([S.texto]); if(!alive()) return; await sleep(500); if(!alive()) return; }
    S.fin=performance.now()/1000; sfx.yay();
  } else if(F.anim==='abrazo'){
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawAbrazo(c,w,h,t-t0,t,conf,F,CAP.uniforme));
    setTimeout(()=>alive()&&sfx.ding(),1700); setTimeout(()=>alive()&&sfx.yay(),3000);
  } else if(F.anim==='llamada'){
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawLlamada(c,w,h,t-t0,t,conf,F));
    [0,.45,1.6,2.05].forEach(s=>setTimeout(()=>{ if(alive()){ tone(880,.18,'sine',.1); tone(1320,.18,'sine',.06,.05); } }, s*1000));
    setTimeout(()=>alive()&&sfx.yay(),3200);
  } else if(F.anim==='campanas'){
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawCampanas(c,w,h,t-t0,t,conf,F));
    [3.1,3.8,4.5,5.2].forEach(s=>setTimeout(()=>{ if(alive()){ tone(196,1.4,'sine',.16); tone(392,1.1,'triangle',.05); } }, s*1000));
  } else if(F.anim==='propina'){
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawTip(c,w,h,t-t0,t,conf,F,CAP.uniforme));
    setTimeout(()=>alive()&&sfx.ding(),1500); setTimeout(()=>alive()&&noise(2,.07,120,500),2400);
  } else {
    live(card.querySelector('[data-fly]'),(c,w,h,t)=>drawFlight(c,w,h,t-t0,t,conf,F.despedida));
    sfx.jet(); setTimeout(()=>alive()&&sfx.jet(),3300);
  }
  await sayAll([F.chau||F.despedida]); if(!alive()) return;
  await sleep(Math.max(0,5200-(performance.now()/1000-t0)*1000)); if(!alive()) return;
  const nuevoJuego = CAP.microjuego && !juegoAbierto(CAP);
  cs.final=true;
  if(F.propina) save.puntos=(save.puntos||0)+F.propina;
  if(CAP.microjuego){ save.juegos=save.juegos||{}; const g=save.juegos[CAP.id]=save.juegos[CAP.id]||{}; g.gratis=(g.gratis||0)+1; }   // terminar el lugar regala una partida
  persist(); updateHud(); sfx.yay();
  card.querySelector('[data-end]').hidden=false; setTimeout(()=>card.querySelector('.go')?.focus(),30);
  if(CAP.microjuego) card.querySelector('[data-end]').insertAdjacentHTML('afterbegin', B('jugar','star',T.aJugar,'go'));
  setTimeout(()=>card.querySelector('.go')?.focus(),30);
  sayAll([T.conNombre(F.despedida, save.name), F.lograste||T.lograste, ...(F.propina?[T.premio(T.peces(F.propina))]:[]), ...(nuevoJuego?[T.juegoNuevo]:[])]);
  const {act}=await waitAct(['again','home','jugar']); if(!alive()) return;
  closeModal();
  if(act==='home'){ goHome(); return; }
  if(act==='jugar'){ runMicro(CAP); return; }
  cs.sellos={}; cur=0; const p=findTile(0,'P'); placePlayer(p.x,p.y); savePos(); updateHud();
  sayAll([F.otraVez||T.otroViaje]);
}
/* final de la feria: el chico paga con pececitos y las frutas saltan a la bolsa */
function drawCompras(c,w,h,u,t,conf,F){
  bgFeria(c,w,h,t);
  const vx=w*.72, hx=w*.26, gy=h*.95;
  drawAnimal(c,F.npc,vx,gy,h*.5,{t,hat:F.npc.hat,facing:-1,mood:u>2?'talk':null,wave:u>4});
  c.fillStyle='#B5753A'; rr(c,vx-h*.28,h*.66,h*.56,h*.3,10); c.fill(); c.fillStyle='#C98B4E'; c.fillRect(vx-h*.28,h*.72,h*.56,h*.03);
  drawHero(c,hx,gy,h*.5,{t,wave:u>4,mood:u>2&&u<4?'wow':null,facing:1});
  // la bolsa
  const bx=hx+h*.17, by=h*.74;
  c.fillStyle='#F3E3C8'; rr(c,bx-h*.08,by-h*.06,h*.16,h*.16,8); c.fill(); c.strokeStyle='#C98B4E'; c.lineWidth=h*.012; c.beginPath(); c.arc(bx,by-h*.06,h*.05,Math.PI,0); c.stroke();
  // 1) pececitos al vendedor
  for(let i=0;i<5;i++){ const k=Math.min(1,Math.max(0,(u-.3-i*.3)/.5)); if(k<=0||k>=1) continue; const x=bx+(vx-bx)*k, y=by-Math.sin(k*Math.PI)*h*.25; drawImg(c,'pez',x,y,h*.08); }
  // 2) frutas a la bolsa
  const frutas=['manzana','banana','naranja','frutilla'];
  frutas.forEach((f,i)=>{ const k=Math.min(1,Math.max(0,(u-2.1-i*.4)/.6)); if(k<=0) return; if(k>=1){ drawImg(c,f,bx-h*.04+i*h*.027,by-h*.07,h*.06); return; } const x=vx+(bx-vx)*k, y=h*.62-Math.sin(k*Math.PI)*h*.3+(by-h*.62)*k; drawImg(c,f,x,y,h*.09,k*6); });
  if(u>4.4){ const kk=u-4.4; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); }); }
  if(u>4.6){ c.save(); c.globalAlpha=Math.min(1,(u-4.6)*2); c.font=`800 ${Math.round(h*.12)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.16); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.16); c.restore(); }
}
/* final del consultorio: el osito está triste; el doctor le pone una curita, lo abraza y el osito se pone contento */
function drawAbrazo(c,w,h,u,t,conf,F,uni){
  bgConsultorio(c,w,h);
  const gy=h*.95, ox=w*.64, k=Math.min(1,Math.max(0,(u-2.2)/.8)), hx=w*.24+(ox-w*.24-h*.3)*k, feliz=u>2.6;
  drawAnimal(c,F.npc,ox,gy,h*.5,{t,facing:-1,mood:feliz?null:'triste',accion:u>3.2?'arriba':null});
  drawHero(c,hx,gy,h*.55,{t,facing:1,wave:u<1.2,uniforme:uni?uni.ropa:null,accion:u>3.2?'arriba':null});
  // la curita vuela hasta la cabeza del osito
  const kc=Math.min(1,Math.max(0,(u-1)/.7)); if(kc>0){ const x=hx+(ox-hx-h*.04)*kc, y=h*.55-Math.sin(kc*Math.PI)*h*.25+(h*.32-h*.55)*kc; drawImg(c,'curita',x,y,h*.11,kc>=1?-.4:kc*6); }
  if(u>2.8){ for(let i=0;i<6;i++){ const p=((u-2.8)*.35+i/6)%1; c.save(); c.globalAlpha=1-p; heart(c,(hx+ox)/2+Math.sin(t*2+i)*h*.08+(i-2.5)*h*.04,h*.5-p*h*.4,h*(.025+.008*(i%3))); c.restore(); } }
  if(u>4.2){ const kk=u-4.2; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); }); }
  if(u>4.4){ c.save(); c.globalAlpha=Math.min(1,(u-4.4)*2); c.font=`800 ${Math.round(h*.11)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.16); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.16); c.restore(); }
}
/* final de la plaza: Simón dice. El amigo da las órdenes y el personaje las hace (acc = la acción de ahora) */
function drawSimon(c,w,h,u,t,conf,F,S){
  bgPlaza(c,w,h,t);
  const gy=h*.95, hx=w*.3, nx=w*.72;
  drawAnimal(c,F.npc,nx,gy,h*.52,{t,hat:F.npc.hat,facing:-1,mood:S.habla?'talk':null,accion:S.fin?'bailar':null,wave:!S.fin&&S.habla});
  drawHero(c,hx,gy,h*.55,{t,facing:1,accion:S.fin?'bailar':S.acc,mood:S.acc==='saltar'||S.fin?'wow':null});
  if(S.texto && !S.fin){ c.save(); c.font=`800 ${Math.round(h*.085)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.02; c.strokeStyle='#22314F'; c.strokeText(S.texto,w/2,h*.14); c.fillStyle='#fff'; c.fillText(S.texto,w/2,h*.14); c.restore(); }
  if(S.fin){ const kk=t-S.fin; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); });
    c.save(); c.globalAlpha=Math.min(1,kk*2); c.font=`800 ${Math.round(h*.12)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.16); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.16); c.restore(); }
}
function bgFiesta(c,w,h,t){
  c.fillStyle='#FFE9F0'; c.fillRect(0,0,w,h*.6); c.fillStyle='#FFD6E3'; for(let x=0;x<w;x+=w*.08) c.fillRect(x,0,w*.04,h*.6);
  // banderines
  const cols=['#E8483B','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8','#FF9B3D'];
  for(const [y0,amp] of [[h*.06,h*.05],[h*.16,h*.04]]){ c.strokeStyle='#8A5636'; c.lineWidth=1.5; c.beginPath(); for(let x=0;x<=w;x+=w/40){ const y=y0+Math.sin(x/w*Math.PI*2)*amp; x?c.lineTo(x,y):c.moveTo(x,y); } c.stroke();
    for(let i=0;i<14;i++){ const x=(i+.5)*w/14, y=y0+Math.sin(x/w*Math.PI*2)*amp; poly(c,[x-w*.025,y, x+w*.025,y, x,y+h*.07],cols[(i+(y0>h*.1?3:0))%6]); } }
  // globos que flotan
  for(let i=0;i<7;i++){ const x=w*(.06+i*.145), y=h*(.36+((i*37)%10)/100)+Math.sin(t*1.5+i)*h*.02; c.strokeStyle='rgba(34,49,79,.35)'; c.lineWidth=1; c.beginPath(); c.moveTo(x,y+h*.06); c.lineTo(x+Math.sin(i)*8,h*.6); c.stroke(); ell(c,x,y,h*.045,h*.058,cols[i%6]); ell(c,x-h*.015,y-h*.02,h*.01,h*.015,'rgba(255,255,255,.55)'); }
  c.fillStyle='#F5D9A8'; c.fillRect(0,h*.6,w,h*.4); c.strokeStyle='#E6C48A'; c.lineWidth=2; for(let x=0;x<w;x+=h*.12){ c.beginPath(); c.moveTo(x,h*.6); c.lineTo(x,h); c.stroke(); }
}
/* final de la fiesta: llegan los amigos de todos los lugares y cantamos el cumpleaños feliz */
function drawFiesta(c,w,h,u,t,conf,F,S,invitados,uni){
  bgFiesta(c,w,h,t);
  const gy=h*.97;
  invitados.forEach((n,i)=>{ const fila=i%2, x=w*(.08+(i/(Math.max(1,invitados.length-1)))*.84), y=h*(fila?.78:.7); drawAnimal(c,n,x,y,h*(fila?.3:.26),{t:t+i,hat:n.hat,facing:x<w/2?1:-1,accion:S.fin?(i%3?'saltar':'bailar'):(S.linea?'aplaudir':null),noShadow:true}); });
  // la torta en la mesa
  c.fillStyle='#fff'; rr(c,w*.56,h*.8,w*.2,h*.05,6); c.fill(); drawImg(c,'torta',w*.66,h*.72,h*.22);
  drawHero(c,w*.42,gy,h*.5,{t,facing:1,uniforme:uni?uni.ropa:null,accion:S.fin?'saltar':null,wave:!S.fin,mood:S.fin?'wow':null});
  if(S.texto && !S.fin){ c.save(); c.font=`800 ${Math.round(h*.075)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.02; c.strokeStyle='#22314F'; c.strokeText(S.texto,w/2,h*.36); c.fillStyle='#fff'; c.fillText(S.texto,w/2,h*.36); c.restore(); }
  if(S.fin){ const kk=t-S.fin; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); });
    c.save(); c.globalAlpha=Math.min(1,kk*2); c.font=`800 ${Math.round(h*.11)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.36); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.36); c.restore(); }
}
function bgEscuela(c,w,h){
  c.fillStyle='#FFF4D6'; c.fillRect(0,0,w,h*.6); c.fillStyle='#F7E3B0'; c.fillRect(0,h*.46,w,h*.14);
  // el pizarrón, las letras de arriba y la ventana
  c.fillStyle='#B5753A'; rr(c,w*.2,h*.1,w*.5,h*.34,8); c.fill(); c.fillStyle='#2E5E4E'; rr(c,w*.215,h*.12,w*.47,h*.3,6); c.fill();
  c.fillStyle='#fff'; c.fillRect(w*.42,h*.42,w*.06,h*.015); c.fillStyle='#FFC93C'; c.fillRect(w*.5,h*.42,w*.03,h*.015);
  const cols=['#E8483B','#FF9B3D','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8']; for(let i=0;i<14;i++){ c.fillStyle=cols[i%6]; rr(c,w*(.02+i*.07),h*.02,w*.05,h*.05,4); c.fill(); }
  c.fillStyle='#CDEBFF'; rr(c,w*.78,h*.12,w*.18,h*.28,8); c.fill(); c.strokeStyle='#fff'; c.lineWidth=h*.015; c.beginPath(); c.moveTo(w*.87,h*.12); c.lineTo(w*.87,h*.4); c.moveTo(w*.78,h*.26); c.lineTo(w*.96,h*.26); c.stroke();
  c.fillStyle='#E7B26A'; c.fillRect(0,h*.6,w,h*.4); c.strokeStyle='#D19A55'; c.lineWidth=2; for(let y=h*.66;y<h;y+=h*.07){ c.beginPath(); c.moveTo(0,y); c.lineTo(w,y); c.stroke(); }
}
/* final de la escuela: cantamos los días de la semana y aparecen escritos en el pizarrón */
function drawSemana(c,w,h,u,t,conf,F,S){
  bgEscuela(c,w,h);
  const gy=h*.97;
  drawAnimal(c,F.npc,w*.86,gy,h*.46,{t,hat:F.npc.hat,facing:-1,mood:S.n&&!S.fin?'talk':null,wave:!!S.fin});
  drawHero(c,w*.1,gy,h*.44,{t,facing:1,backpack:true,accion:S.fin?'saltar':S.n?'aplaudir':null});
  const dias=F.dias||[];
  c.save(); c.textAlign='center'; c.textBaseline='middle';
  for(let i=0;i<S.n;i++){ const col=i<4?0:1, fila=col?i-4:i, x=w*(col?.56:.33), y=h*(.16+fila*.07), ult=i===S.n-1&&!S.fin, k=ult?1.25+.1*Math.sin(t*8):1;
    c.font=`800 ${Math.round(h*.055*k)}px 'Baloo 2',sans-serif`; c.fillStyle=ult?'#FFE07A':'#fff'; c.fillText(dias[i]||'',x,y); }
  c.restore();
  if(S.fin){ const kk=t-S.fin; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); });
    c.save(); c.globalAlpha=Math.min(1,kk*2); c.font=`800 ${Math.round(h*.11)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.62); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.62); c.restore(); }
}
function bgGranja(c,w,h,t,noche){
  const g=c.createLinearGradient(0,0,0,h*.6); g.addColorStop(0,noche?'#F28F6B':'#7FC8F5'); g.addColorStop(1,noche?'#FFE3A8':'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h*.6);
  ell(c,w*.86,noche?h*.42:h*.13,h*.07,h*.07,noche?'#FFB13C':'#FFE07A'); cloud(c,w*.3+Math.sin(t*.3)*10,h*.12,h*.04);
  ell(c,w*.2,h*.62,w*.35,h*.16,'#9ED67E'); ell(c,w*.75,h*.62,w*.4,h*.14,'#8CCB6B');
  // el granero rojo
  const bx=w*.06, bw=w*.26; c.fillStyle='#C9352B'; c.fillRect(bx,h*.28,bw,h*.32); poly(c,[bx-w*.02,h*.3, bx+bw/2,h*.12, bx+bw+w*.02,h*.3],'#8B2E2E');
  c.fillStyle='#fff'; c.fillRect(bx+bw*.3,h*.38,bw*.4,h*.22); c.fillStyle='#C9352B'; c.fillRect(bx+bw*.33,h*.4,bw*.34,h*.2); c.strokeStyle='#fff'; c.lineWidth=h*.012; c.beginPath(); c.moveTo(bx+bw*.33,h*.4); c.lineTo(bx+bw*.67,h*.6); c.moveTo(bx+bw*.67,h*.4); c.lineTo(bx+bw*.33,h*.6); c.stroke();
  // el molino y la cerca
  c.fillStyle='#AEB8C8'; c.fillRect(w*.8,h*.22,w*.015,h*.36); c.save(); c.translate(w*.807,h*.22); c.rotate(t*.8); c.fillStyle='#E3E8F0'; for(let k=0;k<4;k++){ c.rotate(Math.PI/2); c.fillRect(0,-h*.012,h*.12,h*.024); } c.restore();
  c.fillStyle='#fff'; for(let x=w*.36;x<w;x+=w*.05) c.fillRect(x,h*.46,w*.012,h*.14); c.fillRect(w*.36,h*.49,w*.64,h*.018); c.fillRect(w*.36,h*.55,w*.64,h*.018);
  c.fillStyle='#86CC6E'; c.fillRect(0,h*.6,w,h*.4); c.fillStyle='#74BC5C'; for(let i=0;i<16;i++){ const x=(i*89)%w, y=h*(.66+((i*41)%30)/100); c.fillRect(x,y,3,8); c.fillRect(x+5,y+2,3,6); }
}
/* final de las primeras palabras: los amigos de cada estación aparecen uno por uno y dicen su palabra */
function drawSaludo(c,w,h,t,conf,F,S,amigos){
  bgJardin(c,w,h,t);
  const gy=h*.97;
  drawHero(c,w*.1,gy,h*.42,{t,facing:1,wave:!S.fin,accion:S.fin?'saltar':null});
  drawAnimal(c,F.npc,w*.92,gy,h*.42,{t,hat:F.npc.hat,facing:-1,wave:!!S.fin});
  for(let i=0;i<S.n;i++){ const n=amigos[i], x=w*(.22+i*(.56/Math.max(1,amigos.length-1))), ult=i===S.n-1&&!S.fin, sal=(ult||S.fin)?Math.abs(Math.sin(t*(S.fin?4:6)+i))*h*.05:0;
    drawAnimal(c,n,x,gy-h*.08-sal,h*(ult?.34:.28),{t:t+i,hat:n.hat,facing:x<w/2?1:-1,wave:ult,accion:S.fin?'bailar':null,mood:ult?'talk':null}); }
  if(S.texto && !S.fin){ c.save(); c.font=`800 ${Math.round(h*.11)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.02; c.strokeStyle='#22314F'; c.strokeText(S.texto,w/2,h*.2); c.fillStyle='#fff'; c.fillText(S.texto,w/2,h*.2); c.restore(); }
  if(S.fin){ const kk=t-S.fin; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); });
    c.save(); c.globalAlpha=Math.min(1,kk*2); c.font=`800 ${Math.round(h*.11)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.2); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.2); c.restore(); }
}
/* final de la granja: cae la tarde y los animales aparecen uno por uno, cada uno con su sonido */
function drawDesfile(c,w,h,u,t,conf,F,S,uni){
  bgGranja(c,w,h,t,true);
  const gy=h*.97, an=F.desfile||[];
  drawAnimal(c,F.npc,w*.9,gy,h*.42,{t,hat:F.npc.hat,facing:-1,wave:!!S.fin});
  drawHero(c,w*.1,gy,h*.44,{t,facing:1,uniforme:uni?uni.ropa:null,wave:!S.fin,accion:S.fin?'bailar':null});
  for(let i=0;i<S.n;i++){ const x=w*(.24+i*(.52/Math.max(1,an.length-1))), ult=i===S.n-1&&!S.fin, sal=(ult||S.fin)?Math.abs(Math.sin(t*(S.fin?4:6)+i))*h*.06:0; drawImg(c,an[i],x,h*.72-sal,h*(ult?.2:.16)); }
  if(S.texto && !S.fin){ c.save(); c.font=`800 ${Math.round(h*.1)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.02; c.strokeStyle='#22314F'; c.strokeText(S.texto,w/2,h*.2); c.fillStyle='#fff'; c.fillText(S.texto,w/2,h*.2); c.restore(); }
  if(S.fin){ const kk=t-S.fin; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); });
    c.save(); c.globalAlpha=Math.min(1,kk*2); c.font=`800 ${Math.round(h*.11)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.18); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.18); c.restore(); }
}
function bgConsultorio(c,w,h){
  c.fillStyle='#E9F5F2'; c.fillRect(0,0,w,h*.6); c.fillStyle='#CFE9E2'; c.fillRect(0,h*.44,w,h*.16);
  // el cartel de las letras, el botiquín y la ventana
  c.fillStyle='#fff'; rr(c,w*.08,h*.08,w*.12,h*.3,6); c.fill(); c.fillStyle='#22314F'; [[.6,.13],[.5,.2],[.4,.26],[.3,.31]].forEach(([k,y])=>{ for(let i=0;i<4-Math.round(k*3);i++) c.fillRect(w*.14-w*.04*k+i*w*.025*k*1.6,h*y,w*.015*k*1.6,h*.035*k*1.4); });
  c.fillStyle='#fff'; rr(c,w*.42,h*.08,w*.16,h*.22,8); c.fill(); c.fillStyle='#E8483B'; c.fillRect(w*.485,h*.13,w*.03,h*.12); c.fillRect(w*.455,h*.175,w*.09,h*.03);
  c.fillStyle='#CDEBFF'; rr(c,w*.74,h*.08,w*.18,h*.26,8); c.fill(); c.strokeStyle='#fff'; c.lineWidth=h*.015; c.beginPath(); c.moveTo(w*.83,h*.08); c.lineTo(w*.83,h*.34); c.moveTo(w*.74,h*.21); c.lineTo(w*.92,h*.21); c.stroke();
  // la camilla
  c.fillStyle='#8A96AA'; c.fillRect(w*.66,h*.5,w*.02,h*.12); c.fillRect(w*.92,h*.5,w*.02,h*.12); c.fillStyle='#7CC6F0'; rr(c,w*.64,h*.44,w*.32,h*.08,6); c.fill(); c.fillStyle='#fff'; rr(c,w*.64,h*.42,w*.08,h*.05,6); c.fill();
  const cw=w/10, ch=h/7; for(let i=0;i<10;i++) for(let j=0;j<3;j++){ c.fillStyle=(i+j)%2?'#D6E4F0':'#EEF4FA'; c.fillRect(i*cw,h*.6+j*ch,cw+1,ch+1); }
}
function bgPlaza(c,w,h,t){
  const g=c.createLinearGradient(0,0,0,h*.6); g.addColorStop(0,'#6EC1F2'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h*.6);
  ell(c,w*.1,h*.12,h*.07,h*.07,'#FFE07A'); cloud(c,w*.42+Math.sin(t*.3)*10,h*.1,h*.04); cloud(c,w*.85+Math.sin(t*.25+2)*8,h*.2,h*.035);
  // árboles, el tobogán y la hamaca al fondo
  for(const [x,r] of [[.06,.13],[.94,.15],[.55,.1]]){ c.fillStyle='#8A5636'; c.fillRect(w*x-h*.02,h*.4,h*.04,h*.2); ell(c,w*x,h*.36,h*r,h*r*.9,'#3CB371'); ell(c,w*x-h*r*.4,h*.3,h*r*.6,h*r*.55,'#2E9E5E'); }
  c.strokeStyle='#E8483B'; c.lineWidth=h*.02; c.beginPath(); c.moveTo(w*.2,h*.6); c.lineTo(w*.2,h*.3); c.moveTo(w*.26,h*.6); c.lineTo(w*.26,h*.3); c.stroke();
  c.lineWidth=h*.012; for(let k=0;k<4;k++){ c.beginPath(); c.moveTo(w*.2,h*(.36+k*.06)); c.lineTo(w*.26,h*(.36+k*.06)); c.stroke(); }
  c.fillStyle='#FFC93C'; c.beginPath(); c.moveTo(w*.26,h*.3); c.quadraticCurveTo(w*.34,h*.34,w*.38,h*.58); c.lineTo(w*.35,h*.6); c.quadraticCurveTo(w*.31,h*.4,w*.26,h*.36); c.closePath(); c.fill();
  c.strokeStyle='#2E86DE'; c.lineWidth=h*.016; c.beginPath(); c.moveTo(w*.66,h*.6); c.lineTo(w*.7,h*.28); c.lineTo(w*.82,h*.28); c.lineTo(w*.86,h*.6); c.stroke();
  const sw=Math.sin(t*1.6)*.25; c.save(); c.translate(w*.76,h*.29); c.rotate(sw); c.strokeStyle='#5C6A86'; c.lineWidth=2; c.beginPath(); c.moveTo(-h*.04,0); c.lineTo(-h*.04,h*.2); c.moveTo(h*.04,0); c.lineTo(h*.04,h*.2); c.stroke(); c.fillStyle='#FF6F59'; c.fillRect(-h*.055,h*.2,h*.11,h*.025); c.restore();
  c.fillStyle='#86CC6E'; c.fillRect(0,h*.58,w,h*.42); c.fillStyle='#74BC5C'; for(let i=0;i<16;i++){ const x=(i*89)%w, y=h*(.64+((i*41)%32)/100); c.fillRect(x,y,3,8); c.fillRect(x+5,y+2,3,6); }
  c.fillStyle='#EBD49A'; c.beginPath(); c.ellipse(w*.5,h*.9,w*.32,h*.06,0,0,Math.PI*2); c.fill();
}
/* final de nuestra casa: la abuela llama por videollamada, el teléfono suena y después se mandan besos */
function drawLlamada(c,w,h,u,t,conf,F){
  bgCasa(c,w,h,t);
  const pw=h*.52, ph=h*.86, px=w*.62, py=h*.5, ring=u<2.6;
  const sh=ring ? Math.sin(t*40)*h*.008 : 0;
  c.save(); c.translate(px+sh,py);
  c.fillStyle='#22314F'; rr(c,-pw/2,-ph/2,pw,ph,h*.06); c.fill();
  c.save(); rr(c,-pw/2+h*.025,-ph/2+h*.06,pw-h*.05,ph-h*.12,h*.03); c.clip();
  const g=c.createLinearGradient(0,-ph/2,0,ph/2); g.addColorStop(0,ring?'#8B6FE8':'#FFE3C2'); g.addColorStop(1,ring?'#5A3FB8':'#F3DDBA'); c.fillStyle=g; c.fillRect(-pw/2,-ph/2,pw,ph);
  if(ring){ c.fillStyle='#fff'; c.font=`800 ${Math.round(h*.05)}px 'Baloo 2',sans-serif`; c.textAlign='center'; for(let k=0;k<3;k++){ const p=((t*.8)+k/3)%1; c.save(); c.globalAlpha=1-p; c.strokeStyle='#fff'; c.lineWidth=h*.008; c.beginPath(); c.arc(0,-h*.08,h*(.08+p*.12),0,Math.PI*2); c.stroke(); c.restore(); } }
  drawAnimal(c,F.npc,0,ph*.42,ph*.62,{t,hat:F.npc.hat,noShadow:true,wave:!ring,mood:ring?null:'talk'});
  c.restore();
  // botón verde de atender
  if(ring){ ell(c,0,ph/2-h*.1,h*.045,h*.045,'#2FBF8F'); }
  c.restore();
  drawHero(c,w*.25,h*.95,h*.55,{t,wave:!ring,mood:ring?'wow':'talk',facing:1});
  if(!ring){ for(let k=0;k<7;k++){ const p=((u-2.6)*.35+k/7)%1; c.save(); c.globalAlpha=1-p; heart(c,w*(.32+p*.3)+Math.sin(t*2+k)*h*.04,h*(.45-p*.25)+Math.cos(t*1.5+k)*h*.03,h*.03); c.restore(); } }
  if(u>4.4){ const kk=u-4.4; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); }); }
  if(u>4.6){ c.save(); c.globalAlpha=Math.min(1,(u-4.6)*2); c.font=`800 ${Math.round(h*.12)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.16); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.16); c.restore(); }
}
/* final de la torre del reloj: las agujas giran hasta las doce y suenan las campanas */
function drawCampanas(c,w,h,u,t,conf,F){
  const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#5DB8F0'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
  cloud(c,w*.15+Math.sin(t*.3)*10,h*.2,h*.05); cloud(c,w*.85,h*.3,h*.045);
  c.fillStyle='#7FC46A'; c.fillRect(0,h*.88,w,h*.12);
  const tx=w*.5, tw=h*.5;
  c.fillStyle='#C98B4E'; c.fillRect(tx-tw/2,h*.3,tw,h*.6); c.fillStyle='#B5753A'; c.fillRect(tx-tw/2,h*.3,tw*.12,h*.6);
  poly(c,[tx-tw*.62,h*.31, tx+tw*.62,h*.31, tx,h*.02],'#8B6FE8');
  c.fillStyle='#8A5636'; rr(c,tx-tw*.16,h*.72,tw*.32,h*.18,tw*.16); c.fill();
  // las agujas giran rápido y frenan justo en las doce
  const k=Math.min(1,u/3), mins=(1-Math.pow(1-k,3))*180;   // de las 9 a las 12: tres vueltas de la aguja grande
  drawReloj(c,tx,h*.46,tw*.36,9+Math.floor(mins/60),mins%60,{borde:'#FFC93C'});
  if(u>3){ for(const sd of [-1,1]){ const sw=Math.sin((u-3)*7)*.4; c.save(); c.translate(tx+sd*tw*.85,h*.28); c.rotate(sw*sd); c.fillStyle='#FFC93C'; c.beginPath(); c.moveTo(-h*.06,h*.12); c.quadraticCurveTo(-h*.06,0,0,0); c.quadraticCurveTo(h*.06,0,h*.06,h*.12); c.closePath(); c.fill(); ell(c,0,h*.13,h*.02,h*.02,'#D99A00'); c.restore(); } }
  if(u>4.4){ const kk=u-4.4; conf.forEach(p=>{ const y=((p.x*h*1.3 + kk*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(kk*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(kk*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); }); }
  if(u>4.6){ c.save(); c.globalAlpha=Math.min(1,(u-4.6)*2); c.font=`800 ${Math.round(h*.12)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.16); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.16); c.restore(); }
}
/* final del restaurante: la clienta se va en su auto y le tira una propina al mozo */
function drawTip(c,w,h,u,t,conf,F,uni){
  bgCalle(c,w,h,t);
  const gy=h*.9, S=h*.42, hx=w*.26;
  const drive=Math.max(0,u-2.6), cx=w*.66+drive*drive*w*.12, cy=gy;
  drawCar(c,cx,cy,h*.62,t,0,F.npc,'#8B6FE8');
  const lift = (u>1.7 && u<2.6) ? Math.abs(Math.sin((u-1.7)*7))*h*.07 : 0;
  drawHero(c,hx,gy,S,{t,lift,wave:u>2.6,mood:u>1.7&&u<2.6?'wow':null,facing:1,uniforme:uni?uni.ropa:null});
  // la moneda vuela del auto a las manos del mozo
  if(u<1.7){ const p=Math.min(1,u/1.5), x=w*.7+(hx+S*.2-w*.7)*p, y=h*.62-Math.sin(p*Math.PI)*h*.3+(p*h*.06); drawImg(c,'propina',x,y,h*.12,u*8); }
  else { drawImg(c,'propina',hx+S*.2,gy-S*.5-lift,h*.12); for(let k=0;k<6;k++){ const a=t*2+k*1.05; star5(c,hx+S*.2+Math.cos(a)*h*.09,gy-S*.5-lift+Math.sin(a)*h*.07,h*.018,'#FFC93C'); } }
  if(u>4.4){ const k=u-4.4; conf.forEach(p=>{ const y=((p.x*h*1.3 + k*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(k*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(k*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); }); }
  if(u>4.6){ c.save(); c.globalAlpha=Math.min(1,(u-4.6)*2); c.font=`800 ${Math.round(h*.13)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(F.despedida,w/2,h*.2); c.fillStyle='#FFC93C'; c.fillText(F.despedida,w/2,h*.2); c.restore(); }
}
function drawJet(c,x,y,s,rot,t){
  const L=s*2, H=s*.5; c.save(); c.translate(x,y); c.rotate(rot);
  poly(c,[-L*.42,-H*.3, -L*.56,-H*1.5, -L*.4,-H*1.5, -L*.2,-H*.3],'#FF6F59');
  poly(c,[-L*.2,-H*.1, -L*.04,-H*.1, -L*.16,-H*.95, -L*.26,-H*.95],'#B8C4D8');
  c.fillStyle='#fff'; rr(c,-L*.5,-H*.5,L,H,H*.5); c.fill(); c.strokeStyle='#9AA9C2'; c.lineWidth=s*.02; c.stroke();
  ell(c,L*.42,-H*.1,H*.16,H*.12,'#2E6BD9');
  c.fillStyle='#FF6F59'; c.fillRect(-L*.46,H*.14,L*.84,H*.09);
  for(let i=0;i<5;i++) ell(c,-L*.4+i*L*.08,-H*.08,H*.07,H*.09,'#2E6BD9');
  const wx=L*.13, wy=-H*.04, r=H*.38;
  c.save(); c.beginPath(); c.arc(wx,wy,r,0,Math.PI*2); c.fillStyle='#CDEBFF'; c.fill(); c.clip(); drawHero(c,wx,wy+r*1.62,r*2.7,{t,noShadow:true,wave:true}); c.restore();
  c.strokeStyle='#22314F'; c.lineWidth=s*.03; c.beginPath(); c.arc(wx,wy,r,0,Math.PI*2); c.stroke();
  poly(c,[-L*.24,H*.1, -L*.04,H*.1, -L*.22,H*1.05, -L*.34,H*1.05],'#D5DDEA');
  c.restore();
}
function drawFlight(c,w,h,u,t,conf,bye){
  const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#5DB8F0'); g.addColorStop(1,'#CDEEFF'); c.fillStyle=g; c.fillRect(0,0,w,h);
  ell(c,w*.86,h*.17,h*.08,h*.08,'#FFE07A');
  const d = u<2.2 ? u*30 : 66+(u-2.2)*170;
  for(let i=0;i<7;i++){ const span=w*1.5; const xx=(((i*w*.37 - d*(.5+(i%3)*.25)) % span)+span)%span - w*.25; cloud(c,xx,h*(.12+((i*.17)%.6)),h*(.05+(i%3)*.018)); }
  const climb=Math.max(0,u-2.2), groundY=h*.8+climb*climb*h*.09;
  if(groundY<h){ c.fillStyle='#7FC46A'; c.fillRect(0,groundY,w,h-groundY); c.fillStyle='#6C7686'; c.fillRect(0,groundY+h*.04,w,h*.1); c.fillStyle='#fff'; const off=(d*4)%80; for(let x=-off;x<w;x+=80) c.fillRect(x,groundY+h*.085,40,5); }
  const px=w*(.32+Math.min(.14,u*.04)), lift=Math.min(h*.42, climb*climb*h*.07+climb*h*.05), py=h*.74-lift;
  drawJet(c,px,py,h*.3,-Math.min(.2,climb*.16)+(climb>2.5?Math.sin(t*2)*.03:0),t);
  if(u>4.6){ const k=u-4.6; conf.forEach(p=>{ const y=((p.x*h*1.3 + k*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(k*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(k*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-5,-3,10,6); c.restore(); }); }
  if(u>4.8){ c.save(); c.globalAlpha=Math.min(1,(u-4.8)*2); c.font=`800 ${Math.round(h*.13)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; c.strokeText(bye,w/2,h*.2); c.fillStyle='#FFC93C'; c.fillText(bye,w/2,h*.2); c.restore(); }
}

/* =========================================================
   BIBLIOTECAS: cuentos y práctica (todos los lugares)
   ========================================================= */
/* un cuento se abre al ganar el sello de su estación (o si el administrador le abrió todo al chico) */
const cuentoAbierto = (c,k) => pruebaTodo() || !!capSave(c.id).sellos[k];
function goLib(mode){
  hush(); show('lib'); libMode=mode;
  const body=$('#libBody'); body.innerHTML='';
  $('#libTitle').textContent = mode==='cuentos' ? T.cuentos : T.practicar;
  CAP_LIST.filter(capAbierto).forEach(c=>{
    const sec=document.createElement('section'); sec.className='shelf';
    if(mode==='cuentos'){
      sec.innerHTML=`<h3${enAttr(enDe(c.titulo))}>${esc(c.titulo)}</h3><div class="books">${c.orden.filter(k=>c.estaciones[k].cuento).map(k=>{ const st=c.estaciones[k], open=cuentoAbierto(c,k); return `<button class="book ${open?'':'locked'}" style="--bc:${st.mostrador||'#4A90E2'}" data-c="${c.id}" data-k="${k}">${img(st.item)}<b>${open?esc(st.cuento.titulo):''}</b>${open?'':ICON.lock}</button>`; }).join('')}</div>`;
    } else {
      sec.innerHTML=`<h3${enAttr(enDe(c.titulo))}>${esc(c.titulo)}</h3>
        <h4>${esc(T.palabras)}</h4><div class="cards">${c.palabras.map(p=>`<button class="pcard" data-c="${c.id}" data-w="${esc(p.id)}">${img(p.arte)}<b>${esc(p.texto)}</b></button>`).join('')}</div>
        <h4>${esc(T.frases)}</h4><div class="cards">${c.frases.map(p=>`<button class="pcard frase" data-c="${c.id}" data-f="${esc(p.id)}">${img(p.arte)}<b>${esc(p.texto)}</b></button>`).join('')}</div>`;
    }
    body.appendChild(sec);
  });
  body.querySelectorAll('.book').forEach(b=>{
    const c=CAP_LIST.find(x=>x.id===b.dataset.c), k=b.dataset.k;
    b.addEventListener('focus',()=>sayAll([cuentoAbierto(c,k) ? c.estaciones[k].cuento.titulo : T.cerrado]));
    b.addEventListener('click',()=>{ if(!cuentoAbierto(c,k)){ sayAll([T.abrirCuento(palabraDe(c,k).texto)]); return; } runStory(c,k,true); });
  });
  body.querySelectorAll('.pcard').forEach(b=>{
    const c=CAP_LIST.find(x=>x.id===b.dataset.c);
    const item = b.dataset.w ? c.palabras.find(p=>p.id===b.dataset.w) : c.frases.find(p=>p.id===b.dataset.f);
    b.addEventListener('focus',()=>sayAll([{t:item.texto,id:item.id}]));
    b.addEventListener('click',()=>runPractice(item, !!b.dataset.w));
  });
  setTimeout(()=>body.querySelector('button')?.focus(),60);
  sayAll([mode==='cuentos' ? T.cuentosDi : T.practicarDi]);
}
async function runPractice(item, isWord){
  const tok=++flowTok; busy=true;
  openModal(`${X_BTN}
    <div class="center"><div class="hero-item small">${img(item.arte)}</div></div>
    ${isWord?chipsWord(item):chipsPhrase(item)}${turnHtml()}
    <div class="actions">${B('again','replay',T.otraVez)}${B('done','star',T.listo,'go')}</div>`);
  liveMe();
  const run = intro => isWord ? silabear(item,intro) : construirFrase(item,intro);
  onAct('again',()=>narrar(()=>run([])));
  narrar(()=>run([T.repeti]));
  await waitAct('done'); if(tok!==flowTok) return;
  sfx.yay(); closeModal(); busy=false;
}

/* =========================================================
   REPASO (fuera de los lugares)
   · palabras: un juego de "¿cuál es…?" que mezcla las palabras de todos los lugares
     que ya jugó (las de las estaciones con sello); al final gana un caballito de mar.
   · frases: una frase al azar entre las menos practicadas (save.cuenta[id] = cuántas
     veces la dijo), así se reparten parejo; cada frase da un pececito y cada 3, un caballito.
   Un caballito de mar vale 2 pececitos (riqueza/gastar).
   ========================================================= */
function repasoPool(){
  const todo=pruebaTodo(), pal=[], fra=[];
  for(const c of CAP_LIST){
    const s=capSave(c.id), alguno=s.final || Object.values(s.sellos||{}).some(Boolean);
    const vale = p => todo || (p.est ? !!s.sellos[p.est] : p.id.endsWith(':lugar') ? alguno : !!s.final);
    c.palabras.forEach(p=>{ if(vale(p) && ART[p.arte]) pal.push(p); });
    c.frases.forEach(f=>{ if(vale(f)) fra.push(f); });
  }
  return {pal, fra};
}
async function goRepaso(){
  hush(); const tok=++flowTok; busy=true;
  openModal(`${X_BTN}<h3 class="stitle">${esc(T.repasar)}</h3>
    <div class="center"><div class="hero-item small">${img('galletita')}</div></div>
    <div class="actions repaso-ops">${B('merienda','cookie',T.repasoMerienda,'go star')}${B('pal','book',T.repasoPalabras,'go')}${B('fra','talk',T.repasoFrases,'go')}</div>`);
  narrar(()=>sayAll([T.repasoDi]));
  const {act}=await waitAct(['merienda','pal','fra']); if(tok!==flowTok) return;
  if(act==='merienda') runRepasoMerienda();
  else if(act==='pal') runRepasoPalabras();
  else runRepasoFrases();
}
async function sinRepaso(){ const tok=flowTok; await sayAll([T.repasoVacio]); if(tok===flowTok) closeModal(); }
async function runRepasoMerienda(){
  const {pal, fra} = repasoPool();
  if(!pal.length && !fra.length) return sinRepaso();
  const tok = ++flowTok, alive = () => tok === flowTok; busy = true;
  const C = save.cuenta || (save.cuenta = {});
  const RONDAS = 5;

  for(let r = 0; r < RONDAS; r++){
    const tocaFrase = (fra.length && (!pal.length || r % 2 === 1));
    if(tocaFrase){
      const minFra = Math.min(...fra.map(f => C[f.id] || 0));
      const candFra = fra.filter(f => (C[f.id] || 0) === minFra);
      const f = candFra[Math.floor(Math.random() * candFra.length)];

      openModal(shell({steps:RONDAS, step:r,
        center:`<div class="stack"><div class="center"><div class="hero-item small">${img(f.arte)}</div><span class="tally">${ICON.check}${C[f.id]||0}</span></div>${chipsPhrase(f)}${turnHtml()}</div>`,
        actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')}));
      liveMe();
      onAct('again',()=>narrar(()=>construirFrase(f,[])));
      narrar(()=>construirFrase(f, r===0 ? [T.repasoMeriendaDi] : []));
      await starPress(); if(!alive()) return;

      C[f.id] = (C[f.id] || 0) + 1;
      save.puntos = (save.puntos || 0) + 1;
      persist(); updateNames(); sfx.yay();
      setWait(true);
      await sayAll([praise(), T.unPececito]);
      if(!alive()) return;
    } else {
      const minPal = Math.min(...pal.map(w => C[w.id] || 0));
      const candPal = pal.filter(w => (C[w.id] || 0) === minPal);
      const w = candPal[Math.floor(Math.random() * candPal.length)];
      const otros = shuffle(pal.filter(x => x.arte !== w.arte)).slice(0, 2);
      const ops = shuffle([{w, ok:true}, ...otros.map(o => ({w:o, ok:false}))]);
      const pregunta = T.cualEs(w.texto);

      openModal(shell({steps:RONDAS, step:r,
        center:`<div class="scene"><div class="fishpic">${img('galletita')}</div><div class="bubble"${enAttr(enDe(w.texto)&&enT('cualEs',enDe(w.texto)))}><b>${esc(pregunta)}</b></div></div>`,
        actions:B('again','speaker',T.otraVez)}).replace('<div class="actions">', `<div class="center">${ops.map((o,i)=>`<button class="choice" data-act="pick" data-i="${i}">${img(o.w.arte)}</button>`).join('')}</div><div class="actions">`));

      onAct('again',()=>narrar(()=>sayAll([pregunta])));
      narrar(()=>sayAll(r===0 ? [T.repasoMeriendaDi, pregunta] : [pregunta]));

      for(;;){
        const {btn} = await waitAct('pick'); if(!alive()) return;
        const o = ops[+btn.dataset.i];
        if(o.ok){
          btn.classList.add('right'); sfx.yay(); setWait(true);
          C[w.id] = (C[w.id] || 0) + 1;
          save.puntos = (save.puntos || 0) + 1;
          persist(); updateNames();
          await sayAll([praise(), {t:w.texto, id:w.id}, T.unPececito]);
          if(!alive()) return;
          break;
        }
        btn.classList.add('wrong'); btn.disabled = true; sfx.oops();
        narrar(()=>sayAll([{t:o.w.texto, id:o.w.id}, pregunta])).then(()=>{ btn.disabled=true; });
      }
    }
  }

  save.galletitas = (save.galletitas || 0) + 1;
  persist(); updateNames();
  premioGalletita(runRepasoMerienda);
}
async function premioGalletita(otra){
  const tok = ++flowTok; busy = true;
  openModal(`${X_BTN}<div class="center"><div class="premio">${img('galletita')}</div></div>
    <div class="actions">${B('again','replay',T.otraVez,'soft')}${B('home','home',T.inicio,'go')}</div>`);
  sfx.stamp(); setTimeout(()=>sfx.yay(), 300);
  narrar(()=>sayAll([T.ganasteGalletita, T.animalesGalletita, T.valeTres]));
  const {act} = await waitAct(['again','home']); if(tok !== flowTok) return;
  if(act === 'again') otra(); else closeModal();
}
async function runRepasoPalabras(){
  const {pal}=repasoPool();
  if(pal.length<3) return sinRepaso();
  const tok=++flowTok, alive=()=>tok===flowTok, RONDAS=6, orden=shuffle(pal), C=save.cuenta||(save.cuenta={}); busy=true;
  for(let r=0;r<RONDAS;r++){
    const w=orden[r%orden.length], otros=shuffle(pal.filter(x=>x.arte!==w.arte)).slice(0,2);
    const ops=shuffle([{w,ok:true}, ...otros.map(o=>({w:o,ok:false}))]);
    const pregunta=T.cualEs(w.texto);
    openModal(shell({steps:RONDAS, step:r, center:`<div class="scene"><div class="fishpic">${img('caballito')}</div><div class="bubble"${enAttr(enDe(w.texto)&&enT('cualEs',enDe(w.texto)))}><b>${esc(pregunta)}</b></div></div>`,
      actions:B('again','speaker',T.otraVez)}).replace('<div class="actions">', `<div class="center">${ops.map((o,i)=>`<button class="choice" data-act="pick" data-i="${i}">${img(o.w.arte)}</button>`).join('')}</div><div class="actions">`));
    onAct('again',()=>narrar(()=>sayAll([pregunta])));
    narrar(()=>sayAll(r?[pregunta]:[T.repasoPalabrasDi, pregunta]));
    for(;;){
      const {btn}=await waitAct('pick'); if(!alive()) return;
      const o=ops[+btn.dataset.i];
      if(o.ok){ btn.classList.add('right'); sfx.yay(); setWait(true); C[w.id]=(C[w.id]||0)+1; await sayAll([praise(), {t:w.texto, id:w.id}]); if(!alive()) return; break; }
      btn.classList.add('wrong'); btn.disabled=true; sfx.oops();
      narrar(()=>sayAll([{t:o.w.texto, id:o.w.id}, pregunta])).then(()=>{ btn.disabled=true; });
    }
  }
  save.caballitos=(save.caballitos||0)+1; persist(); updateNames();
  premioCaballito(runRepasoPalabras);
}
async function runRepasoFrases(n=0){
  const {fra}=repasoPool();
  if(!fra.length) return sinRepaso();
  const tok=++flowTok, C=save.cuenta||(save.cuenta={}); busy=true;
  const menos=Math.min(...fra.map(f=>C[f.id]||0)), cand=fra.filter(f=>(C[f.id]||0)===menos);
  const f=cand[Math.floor(Math.random()*cand.length)];
  openModal(shell({steps:3, step:n%3,
    center:`<div class="stack"><div class="center"><div class="hero-item small">${img(f.arte)}</div><span class="tally">${ICON.check}${C[f.id]||0}</span></div>${chipsPhrase(f)}${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')}));
  liveMe();
  onAct('again',()=>narrar(()=>construirFrase(f,[])));
  narrar(()=>construirFrase(f, n?[]:[T.repasoFrasesDi]));
  await starPress(); if(tok!==flowTok) return;
  C[f.id]=(C[f.id]||0)+1; save.puntos=(save.puntos||0)+1; n++;
  const caballito = n%3===0; if(caballito) save.caballitos=(save.caballitos||0)+1;
  persist(); updateNames(); sfx.yay();
  if(caballito) return premioCaballito(()=>runRepasoFrases(n));
  setWait(true); await sayAll([praise(), T.unPececito]); if(tok!==flowTok) return;
  runRepasoFrases(n);
}
async function premioCaballito(otra){
  const tok=++flowTok; busy=true;
  openModal(`${X_BTN}<div class="center"><div class="premio">${img('caballito')}</div></div>
    <div class="actions">${B('again','replay',T.otraVez,'soft')}${B('home','home',T.inicio,'go')}</div>`);
  sfx.stamp(); setTimeout(()=>sfx.yay(),300);
  narrar(()=>sayAll([T.ganasteCaballito, T.valeDos]));
  const {act}=await waitAct(['again','home']); if(tok!==flowTok) return;
  if(act==='again') otra(); else closeModal();
}

/* =========================================================
   RINCÓN DE LOS GRANDES
   ========================================================= */
function recRows(){
  const rows=[];
  CAP_LIST.forEach(c=>{
    rows.push({group:`Semana ${c.num} · ${c.titulo} · palabras y sílabas (${PACKS[langCode()].nombre})`});
    c.palabras.forEach(p=>{ rows.push(p); p.silabas.forEach((sl,i)=>rows.push({id:silabaId(p,i), texto:sl, silaba:true})); });
    rows.push({group:`Semana ${c.num} · ${c.titulo} · frases (${PACKS[langCode()].nombre})`});
    c.frases.forEach(p=>rows.push(p));
  });
  return rows;
}
function recRowHtml(r){
  if(r.group) return `<tr><td class="grp" colspan="3">${esc(r.group)}</td></tr>`;
  const mine=clips.mia(r.id), shared=!mine && clips.global.has(r.id), st=!!staticAudioUrl(r.id);
  const pill = mine ? (NUBE.usuario&&NUBE.usuario.admin&&clips.global.has(r.id) ? 'Tu voz · para todos' : 'Tu voz') : shared ? 'Voz compartida' : st ? 'Voz Google' : 'Voz de la compu';
  return `<tr data-id="${esc(r.id)}" class="${r.silaba?'syl':''}"><td>${r.silaba?`<span class="sylmark">sílaba</span> `:''}<b>${esc(r.texto)}</b></td><td><span class="pill ${mine||shared?'mine':''}">${pill}</span></td><td class="rb"><button data-r="rec">Grabar</button><button data-r="play">Escuchar</button><label class="up">Subir<input type="file" accept="audio/*" data-r="up"></label><button data-r="del" ${mine?'':'disabled'}>Borrar</button></td></tr>`;
}
function armConfirm(btn, fn){ btn.addEventListener('click',()=>{ if(btn.dataset.armed){ delete btn.dataset.armed; fn(); return; } btn.dataset.armed='1'; const old=btn.textContent; btn.textContent='Tocá otra vez para confirmar'; setTimeout(()=>{ if(btn.dataset.armed){ delete btn.dataset.armed; btn.textContent=old; } },3500); }); }
function resetProgress(){
  const keep={grownup:save.grownup, pausa:save.pausa, voces:save.voces, lang:save.lang};
  save=Object.assign(defaultSave(), keep, NUBE.alumno?{name:NUBE.alumno.nombre}:{}); persist();
  CAP=null; cs=null; modal.hidden=true; card.innerHTML=''; busy=false; flowTok++; hush();
  setLang(save.lang||'es', false); show('start'); rotarInicio(); setTimeout(()=>$('#playBtn').focus(),60);
}
function openParent(){
  if(!modal.hidden && card.classList.contains('parent')) return;
  busy=true; ++flowTok; hush();
  const code=langCode(), vs=voicesFor(code), auto=voiceFor(code), pref=(save.voces||{})[code]||'';
  const langOpts=idiomasDisponibles().map(l=>`<option value="${l}" ${l===code?'selected':''}>${esc(PACKS[l].nombre)}</option>`).join('');
  openModal(`<button class="xbtn" data-act="pclose" aria-label="Cerrar">${ICON.close}</button>
    <h2>Rincón de los grandes</h2>
    ${cuentaHtml()}
    <div class="reset">
      <div><b>Empezar de cero</b><span>Borra el nombre, el personaje, los sellos, los cuentos abiertos, los pececitos y la ropa. Se guardan las voces y tus grabaciones.</span></div>
      <button class="pbtn danger" id="p-reset">Empezar de cero</button>
    </div>
    <div class="pgrid">
      <label>Nombre<input type="text" id="p-name" value="${esc(save.name)}" maxlength="14"></label>
      <label>Idioma que aprende<select id="p-lang">${langOpts}</select></label>
      <label>Voz (${esc(PACKS[code].nombre)})<select id="p-voice"><option value="">Automática${auto?` (${esc(auto.name)})`:''}</option>${vs.map(v=>`<option value="${esc(v.voiceURI)}" ${v.voiceURI===pref?'selected':''}>${esc(v.name)} · ${esc(v.lang)}</option>`).join('')}</select></label>
      <label>Tiempo para repetir<select id="p-pausa"><option value="0.75" ${save.pausa==0.75?'selected':''}>Corto</option><option value="1" ${save.pausa==1?'selected':''}>Normal</option><option value="1.5" ${save.pausa==1.5?'selected':''}>Largo</option></select></label>
      <button class="pbtn" id="p-test">Probar la voz</button>
    </div>
    ${vs.length?'':`<p class="note warn">Este navegador no tiene ninguna voz en ${esc(PACKS[code].nombre.toLowerCase())}, así que la pronunciación va a salir mal (con acento inglés). Abrí el juego en Microsoft Edge, que trae voces de todos estos idiomas, o grabá tu voz abajo.</p>`}
    <label class="chk"><input type="checkbox" id="p-grown" ${save.grownup?'checked':''}> Yo controlo cuando habla: la estrella se mantiene apretada un segundo para dar el sello.</label>
    <label class="chk"><input type="checkbox" id="p-todo" ${save.todoAbierto?'checked':''}> Abrir todos los lugares (si no, cada lugar se abre al terminar el anterior).</label>
    <label class="chk ayuda">Idioma de ayuda: <select id="p-ayuda"><option value="">Sin ayuda</option>${idiomasDisponibles().filter(c=>c!==langCode()).map(c=>`<option value="${c}" ${ayuda()===c?'selected':''}>${esc(PACKS[c].nombre)}</option>`).join('')}</select>
      <span class="note">Para empezar de cero: el relator dice todo en ${esc(PACKS[langCode()].nombre)} y enseguida lo traduce a este idioma (menos las sílabas, que se repiten tal cual).</span></label>
    <label class="chk"><input type="checkbox" id="p-ingles" ${save.ingles!==false?'checked':''}> Traducción al inglés: al tocar una frase (el globo, las sílabas, el cuento) aparece en inglés. Solo se lee, el relator no la dice.</label>
    <div class="prow"><button class="pbtn" id="p-char">Elegir otro personaje</button><button class="pbtn" id="p-fish">Regalar 5 pececitos</button><span class="note" id="p-fishn">Tiene ${save.puntos||0}.</span></div>
    <h3>Grabar tu voz (${esc(PACKS[code].nombre)})</h3>
    <p class="note">Tu grabación reemplaza la voz de la compu. Podés grabar la palabra entera, cada sílaba por separado (sirve cuando la compu dice mal una sílaba suelta, como la «ro» de aeropuerto) y las frases enteras (las partes de la frase las sigue diciendo la compu). Hablá despacio. ${NUBE.usuario ? (NUBE.usuario.admin ? 'Como sos el administrador, tus grabaciones se guardan online y las escuchan todos los chicos.' : 'Se guardan online en tu cuenta.') : 'Se guarda solo en este navegador.'}</p>
    <p class="note warn" id="p-micnote" ${micOK===false?'':'hidden'}>Acá no hay micrófono. Usá «Subir» con un audio del teléfono, o abrí el juego desde los archivos en Chrome o Edge para grabar directo.</p>
    <div class="tablewrap"><table><tbody>${recRows().map(recRowHtml).join('')}</tbody></table></div>
    <div class="prow"><button class="pbtn danger" id="p-clips">Borrar todas mis grabaciones</button></div>`,'parent');
  onAct('pclose',()=>{ closeModal(); if(!scr.home.hidden) goHome(); else if(!scr.start.hidden) applyLang(); });
  $('#p-name').addEventListener('input',e=>{ save.name=fmtName(e.target.value); persist(); updateNames(); if(NUBE.alumno && save.name){ NUBE.alumno.nombre=save.name; nubeRenombrar(); } });
  $('#p-lang').addEventListener('change',e=>{
    setLang(e.target.value); const inGame=!scr.game.hidden || !scr.lib.hidden || !scr.shop.hidden;
    closeModal(); if(inGame || !scr.home.hidden) goHome(); openParent();
  });
  $('#p-voice').addEventListener('change',e=>{ save.voces=save.voces||{}; save.voces[code]=e.target.value; persist(); });
  $('#p-pausa').addEventListener('change',e=>{ save.pausa=parseFloat(e.target.value)||1; persist(); });
  $('#p-test').addEventListener('click',()=>{ const c=CAP_LIST[0]; sayAll([T.holaX(save.name||char().name), ...(c?[c.palabras[0].silabas.join(' '), c.palabras[0].texto]:[])]); });
  $('#p-grown').addEventListener('change',e=>{ save.grownup=e.target.checked; persist(); });
  $('#p-ingles').addEventListener('change',e=>{ save.ingles=e.target.checked; persist(); });
  $('#p-todo').addEventListener('change',e=>{ save.todoAbierto=e.target.checked; persist(); });
  $('#p-ayuda').addEventListener('change',e=>{ save.ayuda=e.target.value||null; TRAD=null; persist(); const a=ayuda(); if(a) sayAll([{t:PACKS[a].nombre, lang:a}]); });
  $('#p-char').addEventListener('click',()=>{ closeModal(); goPicker(); });
  $('#p-fish').addEventListener('click',()=>{ save.puntos=(save.puntos||0)+5; persist(); updateNames(); if(CAP) updateHud(); $('#p-fishn').textContent=`Tiene ${save.puntos}.`; sfx.yay(); });
  armConfirm($('#p-reset'),resetProgress);
  conectarCuentaParent();
  armConfirm($('#p-clips'),async()=>{ await clips.clear(); card.querySelector('tbody').innerHTML=recRows().map(recRowHtml).join(''); });
  const tbody=card.querySelector('tbody');
  const findRow=id=>recRows().find(x=>x.id===id);
  const refreshRow=id=>{ const tr=[...tbody.querySelectorAll('tr[data-id]')].find(t=>t.dataset.id===id); const r=findRow(id); if(tr&&r) tr.outerHTML=recRowHtml(r); };
  tbody.addEventListener('click',async e=>{
    const b=e.target.closest('button[data-r]'); if(!b) return; const id=b.closest('tr').dataset.id, r=findRow(id), kind=b.dataset.r;
    if(kind==='play'){ hush(); sayAll([{t:r.silaba?sonido(r.texto):r.texto, id, lento:r.silaba}]); }
    if(kind==='del'){ await clips.del(id); refreshRow(id); }
    if(kind==='rec'){
      if(curRec){ curRec.stop(); return; }
      hush();
      try{ const s=await getMic(); tbody.querySelectorAll('button[data-r=rec]').forEach(x=>{ if(x!==b) x.disabled=true; }); b.classList.add('rec'); b.textContent='Parar'; const blob=await record(s,7000); await clips.put(id,blob); refreshRow(id); tbody.querySelectorAll('button[data-r=rec]').forEach(x=>x.disabled=false); await playBlob(blob); }
      catch(err){ micOK=false; curRec=null; $('#p-micnote').hidden=false; b.classList.remove('rec'); b.textContent='Grabar'; tbody.querySelectorAll('button[data-r=rec]').forEach(x=>x.disabled=false); }
    }
  });
  tbody.addEventListener('change',async e=>{ const inp=e.target.closest('input[data-r=up]'); if(!inp||!inp.files[0]) return; const id=inp.closest('tr').dataset.id; await clips.put(id,inp.files[0]); refreshRow(id); playBlob(inp.files[0]); });
}

/* =========================================================
   LA NUBE: cuentas, progreso y grabaciones en el servidor (api/)
   Si el juego se abre como archivo o el sitio no tiene api/, todo sigue
   funcionando como antes, guardado solo en este navegador.
   Las pantallas de la cuenta son para los grandes (en castellano).
   ========================================================= */
const NUBE = {on:false, usuario:null, alumnos:[], alumno:null, sinCuenta:false};
const ALUMNO_KEY='aventuras.alumno', SIN_CUENTA_KEY='aventuras.sinCuenta';
const lsGet = k => { try{ return localStorage.getItem(k); }catch(e){ return null; } };
const lsSet = (k,v) => { try{ v==null ? localStorage.removeItem(k) : localStorage.setItem(k,v); }catch(e){} };
async function api(ruta, {method='GET', body}={}){
  const r=await fetch('/api/'+ruta, {method, credentials:'same-origin', headers: body?{'Content-Type':'application/json'}:{}, body: body?JSON.stringify(body):undefined});
  let j=null; try{ j=await r.json(); }catch(e){}
  if(!j) throw Object.assign(new Error('Sin servidor'), {status:r.status, sinServidor:true});
  if(!r.ok) throw Object.assign(new Error(j.error||'Error'), {status:r.status, codigo:j.codigo});
  return j;
}
function blobABase64(b){ return new Promise((res,rej)=>{ const fr=new FileReader(); fr.onload=()=>res(String(fr.result).split(',')[1]||''); fr.onerror=()=>rej(fr.error); fr.readAsDataURL(b); }); }
function base64ABlob(b64, tipo){ const bin=atob(b64), u=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return new Blob([u],{type:tipo||'audio/webm'}); }
/* idioma de los textos para los grandes en las pantallas de la cuenta (no el que aprende el chico). Por defecto, inglés. */
const UI_KEY='aventuras.grandes';
let uiLang = lsGet(UI_KEY) || 'en';
const G = new Proxy({}, {get:(_,k)=>{ const g=window.GRANDES||{}; const v=(g[uiLang]||{})[k]; return v!==undefined ? v : ((g.en||{})[k] ?? ''); }});
const errTxt = e => e.sinServidor ? G.sinServidor : (e.codigo && G['err_'+e.codigo]) || e.message;
const idiomasGrandes = () => Object.keys(window.GRANDES||{en:1});
const banderaDe = code => code==='en' ? (window.BANDERA_EN||'') : (PACKS[code] ? PACKS[code].bandera : '');
function elegirUi(code){
  uiLang=code; lsSet(UI_KEY, code);
  if(PACKS[code] && !save.lang) setLang(code, false);   // si ese idioma también se puede aprender, el relator lo usa hasta que el chico elija
}
async function nubeInit(){
  if(location.protocol==='file:') return;
  try{ const j=await api('sesion'); NUBE.on=true; NUBE.usuario=j.usuario; NUBE.alumnos=j.alumnos||[]; NUBE.sinCuenta=!j.usuario && lsGet(SIN_CUENTA_KEY)==='1'; }
  catch(e){ NUBE.on=false; }
}
/* elegir un chico: su progreso es el del servidor, salvo que la copia de este navegador sea más nueva (se cortó internet) */
function usarAlumno(a){
  NUBE.alumno=a; lsSet(ALUMNO_KEY, String(a.id));
  let local=null; try{ local=JSON.parse(localStorage.getItem(storeKey())); }catch(e){}
  const remoto=a.datos||{};
  const d = (local && (local._t||0) > (remoto._t||0)) ? local : remoto;
  const dev={grownup:save.grownup, voces:save.voces, pausa:save.pausa, ingles:save.ingles};   // preferencias de este aparato
  save=mezclarSave({...dev, ...d}); if(!save.name) save.name=a.nombre;
  try{ localStorage.setItem(storeKey(), JSON.stringify(save)); }catch(e){}
  if(d===local) nubeGuardarLuego(0);
  if(save.lang) setLang(save.lang, false);
}
let nubeTm=0, nubePend=false;
function nubeGuardarLuego(ms=1500){ nubePend=true; clearTimeout(nubeTm); nubeTm=setTimeout(nubeGuardar, ms); }
async function nubeGuardar(){
  const a=NUBE.alumno; if(!a || !nubePend) return;
  nubePend=false;
  try{ await api(`alumnos?id=${a.id}`,{method:'PUT', body:{datos:save}}); a.datos=save; }
  catch(e){ nubePend=true; if(e.status!==401 && e.status!==404){ clearTimeout(nubeTm); nubeTm=setTimeout(nubeGuardar, 20000); } }
}
/* al cerrar o esconder la página, lo que falte subir se manda igual */
function nubeUltimo(){ const a=NUBE.alumno; if(!a || !nubePend || !navigator.sendBeacon) return; nubePend=false; navigator.sendBeacon(`/api/alumnos?id=${a.id}&guardar=1`, new Blob([JSON.stringify({datos:save})],{type:'application/json'})); }
addEventListener('pagehide', nubeUltimo);
document.addEventListener('visibilitychange',()=>{ if(document.visibilityState==='hidden') nubeUltimo(); });
let renTm=0;
function nubeRenombrar(){ clearTimeout(renTm); const a=NUBE.alumno; renTm=setTimeout(()=>api(`alumnos?id=${a.id}`,{method:'PATCH', body:{nombre:a.nombre}}).catch(()=>{}),800); }

/* pantalla de la cuenta (para los grandes) */
let cuentaModo='entrar';
function goCuenta(){
  hush(); show('cuenta'); renderCuenta();
  if(PACKS[uiLang] || save.lang) sayAll([T.cuentaDi]);   // en inglés no se habla: el relator solo dice idiomas que se aprenden
}
/* modos: entrar · registro · olvide (pedir el link por email) · nueva (llegó con el link: elegir otra contraseña) */
function renderCuenta(msg='', bien=false){
  const m=cuentaModo, reg=m==='registro', f0=$('#cuentaForm'), prev=f0 ? Object.fromEntries(new FormData(f0)) : {};
  $('#scr-cuenta').lang=uiLang; $('#cuentaTit').textContent=G.titulo; $('#cuentaSub').textContent=m==='nueva'?G.nuevaClave:G.sub;
  const campoEmail=`<label>${esc(G.email)}<input name="email" type="email" autocomplete="email" required value="${esc(prev.email||'')}"></label>`;
  const campos = m==='olvide' ? campoEmail
    : m==='nueva' ? `<label>${esc(G.claveNueva)}<input name="clave" type="password" autocomplete="new-password" minlength="8" required></label>`
    : `${reg?`<label>${esc(G.tuNombre)}<input name="nombre" autocomplete="name" maxlength="60" value="${esc(prev.nombre||'')}"></label>`:''}${campoEmail}
      <label>${esc(reg?G.claveMin:G.clave)}<input name="clave" type="password" autocomplete="${reg?'new-password':'current-password'}" minlength="${reg?8:1}" required></label>`;
  const boton = m==='olvide' ? G.enviar : m==='nueva' ? G.guardarClave : reg ? G.crear : G.entrar;
  $('#cuentaBox').innerHTML=`
    <div class="uilangs" role="group" aria-label="${esc(G.idiomaGrandes)}">${idiomasGrandes().map(c=>`<button type="button" class="uilang ${c===uiLang?'on':''}" data-l="${c}" lang="${c}" aria-pressed="${c===uiLang}"><img src="${svgUri(banderaDe(c))}" alt=""><span>${esc(window.GRANDES[c].nombre)}</span></button>`).join('')}</div>
    ${m==='entrar'||reg ? `<div class="tabs"><button class="tab ${reg?'':'on'}" data-m="entrar">${esc(G.entrar)}</button><button class="tab ${reg?'on':''}" data-m="registro">${esc(G.crear)}</button></div>` : ''}
    ${m==='olvide' ? `<p class="note">${esc(G.olvideNota)}</p>` : ''}
    <form id="cuentaForm" class="cform">
      ${campos}
      <p class="cmsg ${bien?'bien':''}" ${msg?'':'hidden'}>${esc(msg)}</p>
      <button class="mbtn go" type="submit">${ICON.check}<span>${esc(boton)}</span></button>
    </form>
    ${m==='entrar' ? `<button class="linkbtn" data-m="olvide">${esc(G.olvide)}</button>` : ''}
    ${m==='olvide'||m==='nueva' ? `<button class="linkbtn" data-m="entrar">${esc(G.volverEntrar)}</button>` : `<p class="note">${esc(reg?G.notaCrear:G.notaEntrar)}</p>`}
    <button class="linkbtn" id="sinCuenta">${esc(G.sinCuenta)}</button>`;
  $('#cuentaBox').querySelectorAll('[data-m]').forEach(b=>b.addEventListener('click',()=>{ cuentaModo=b.dataset.m; renderCuenta(); }));
  $('#cuentaBox').querySelectorAll('.uilang').forEach(b=>b.addEventListener('click',()=>{ elegirUi(b.dataset.l); renderCuenta(); }));
  $('#sinCuenta').addEventListener('click',()=>{ NUBE.sinCuenta=true; lsSet(SIN_CUENTA_KEY,'1'); nextStep(); });
  $('#cuentaForm').addEventListener('submit',async e=>{
    e.preventDefault(); const f=new FormData(e.target), btn=e.target.querySelector('button'); btn.disabled=true;
    try{
      if(m==='olvide'){
        await api('sesion',{method:'POST', body:{accion:'olvide', email:f.get('email'), idioma:uiLang}});
        renderCuenta(G.olvideEnviado, true); return;
      }
      const body = m==='nueva' ? {accion:'nueva_clave', token:tokenClave, clave:f.get('clave')}
        : {accion:m, email:f.get('email'), clave:f.get('clave'), nombre:f.get('nombre')||''};
      const j=await api('sesion',{method:'POST', body});
      if(m==='nueva'){ tokenClave=null; cuentaModo='entrar'; }
      NUBE.usuario=j.usuario; NUBE.alumnos=j.alumnos||[]; NUBE.sinCuenta=false; lsSet(SIN_CUENTA_KEY,null);
      await clips.cargarNube(); sfx.yay(); nextStep();
    }catch(err){ btn.disabled=false; renderCuenta(errTxt(err)); }
  });
  setTimeout(()=>$('#cuentaBox input')?.focus(),60);
}
/* el link del email de "olvidé mi contraseña" trae ?clave=<token>: se guarda y se saca de la barra de direcciones */
let tokenClave = new URLSearchParams(location.search).get('clave');
if(tokenClave){ try{ history.replaceState(null, '', location.pathname); }catch(e){} }
/* ¿quién juega? — los chicos de la cuenta */
function goAlumnos(){
  hush(); show('alumnos');
  $('#scr-alumnos').lang=uiLang; $('#alumnosTit').textContent=G.quienJuega; $('#alumnosSub').textContent=G.quienSub;
  const box=$('#alumnosBox'); box.innerHTML='';
  NUBE.alumnos.forEach(a=>{
    const ch=CHARACTERS.find(c=>c.id===(a.datos||{}).charId);
    const b=document.createElement('button'); b.className='char';
    b.innerHTML=`<canvas></canvas><b>${esc(a.nombre)}</b>`;
    b.addEventListener('focus',()=>sayAll([a.nombre]));
    b.addEventListener('mouseenter',()=>b.focus());
    b.addEventListener('click',()=>{ usarAlumno(a); sfx.yay(); nextStep(); });
    live(b.querySelector('canvas'),(c,w,h,t)=>{ if(ch) drawAnimal(c,ch,w/2,h*.94,h*.86,{t,wave:document.activeElement===b,backpack:true}); else { c.fillStyle='#E3E9F2'; ell(c,w/2,h*.55,h*.3,h*.3,'#E3E9F2'); c.fillStyle='#9AA6B8'; c.font=`800 ${Math.round(h*.3)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillText(a.nombre.charAt(0),w/2,h*.56); } });
    box.appendChild(b);
  });
  const add=document.createElement('form'); add.className='addkid';
  add.innerHTML=`<b>${esc(G.agregar)}</b><input name="nombre" maxlength="14" placeholder="${esc(G.nombreChico)}" required><button class="mbtn go" type="submit">${ICON.check}<span>${esc(G.agregarBtn)}</span></button><p class="cmsg" hidden></p>`;
  add.addEventListener('submit',async e=>{
    e.preventDefault(); const nombre=fmtName(add.nombre.value).trim(); if(!nombre) return;
    try{ const a=await api('alumnos',{method:'POST', body:{nombre}}); NUBE.alumnos.push(a); usarAlumno(a); sfx.yay(); nextStep(); }
    catch(err){ const m=add.querySelector('.cmsg'); m.hidden=false; m.textContent=errTxt(err); }
  });
  box.appendChild(add);
  setTimeout(()=>box.querySelector('button')?.focus(),60);
  if(PACKS[uiLang] || save.lang) sayAll([T.quienJuega]);
}
/* en el rincón de los grandes */
function cuentaHtml(){
  if(!NUBE.on) return '';
  if(!NUBE.usuario) return `<div class="reset acct" lang="${uiLang}"><div><b>${esc(G.cuentaSin)}</b><span>${esc(G.cuentaSinTxt)}</span></div><button class="pbtn" id="p-login">${esc(G.cuentaEntrar)}</button></div>`;
  const u=NUBE.usuario;
  return `<div class="reset acct" lang="${uiLang}"><div><b>${esc(G.cuenta(u.nombre||u.email))}</b><span>${esc(u.email)}${NUBE.alumno?` · ${esc(G.juega(NUBE.alumno.nombre))}`:''}. ${esc(G.online)}</span></div>
    <div class="prow acctbtns">${u.admin?`<a class="pbtn" href="admin.html" target="_blank" rel="noopener">${esc(G.administrar)}</a>`:''}<button class="pbtn" id="p-kids">${esc(G.cambiar)}</button><button class="pbtn" id="p-clave">${esc(G.cambiarClave)}</button><button class="pbtn" id="p-logout">${esc(G.salir)}</button></div>
    <form class="cform pclave" id="p-claveForm" hidden><label>${esc(G.claveActual)}<input name="actual" type="password" autocomplete="current-password" required></label>
      <label>${esc(G.claveNueva)}<input name="clave" type="password" autocomplete="new-password" minlength="8" required></label>
      <p class="cmsg" hidden></p><button class="pbtn" type="submit">${esc(G.guardarClave)}</button></form></div>`;
}
function conectarCuentaParent(){
  $('#p-login')?.addEventListener('click',()=>{ NUBE.sinCuenta=false; lsSet(SIN_CUENTA_KEY,null); closeModal(); goCuenta(); });
  $('#p-clave')?.addEventListener('click',()=>{ const f=$('#p-claveForm'); f.hidden=!f.hidden; if(!f.hidden) f.querySelector('input').focus(); });
  $('#p-claveForm')?.addEventListener('submit',async e=>{
    e.preventDefault(); const f=e.target, msg=f.querySelector('.cmsg'), btn=f.querySelector('button'); btn.disabled=true;
    try{ await api('sesion',{method:'POST', body:{accion:'cambiar_clave', actual:f.actual.value, clave:f.clave.value}}); f.reset(); msg.textContent=G.claveCambiada; msg.classList.add('bien'); }
    catch(err){ msg.textContent=errTxt(err); msg.classList.remove('bien'); }
    msg.hidden=false; btn.disabled=false;
  });
  $('#p-kids')?.addEventListener('click',async()=>{ await nubeGuardar(); NUBE.alumno=null; lsSet(ALUMNO_KEY,null); closeModal(); goAlumnos(); });
  $('#p-logout')?.addEventListener('click',async()=>{
    await nubeGuardar();
    try{ await api('sesion',{method:'POST', body:{accion:'salir'}}); }catch(e){}
    NUBE.usuario=null; NUBE.alumno=null; NUBE.alumnos=[]; lsSet(ALUMNO_KEY,null);
    save=loadSave(); await clips.cargarNube(); closeModal(); setLang(save.lang||'es', false); goCuenta();
  });
}

/* =========================================================
   PRIMEROS PASOS: idioma → nombre → personaje
   ========================================================= */
function nextStep(){
  if(NUBE.on && !NUBE.usuario && !NUBE.sinCuenta) return goCuenta();
  if(NUBE.usuario && !NUBE.alumno) return goAlumnos();
  if(!save.lang) return goLangScreen();
  if(!save.name) return goName();
  if(!save.charId) return goPicker();
  goHome();
}
function goLangScreen(){
  hush(); show('lang');
  const box=$('#langs'); box.innerHTML='';
  idiomasDisponibles().forEach(code=>{
    const P=PACKS[code];
    const b=document.createElement('button'); b.className='langcard';
    b.innerHTML=`<img src="${svgUri(P.bandera)}" alt=""><b>${esc(P.nombre)}</b>`;
    b.addEventListener('focus',()=>sayAll([{t:P.nombre, lang:code}]));
    b.addEventListener('mouseenter',()=>b.focus());
    b.addEventListener('click',()=>{ setLang(code); sfx.yay(); nextStep(); });
    box.appendChild(b);
  });
  setTimeout(()=>(box.querySelector(`button:nth-child(${Math.max(1,idiomasDisponibles().indexOf(save.lang)+1)})`)||box.querySelector('button'))?.focus(),60);
}
const fmtName = v => { v=String(v||'').replace(/[^\p{L}\p{M}' -]/gu,'').replace(/\s+/g,' ').trimStart().slice(0,14); return v ? v.charAt(0).toLocaleUpperCase()+v.slice(1).toLocaleLowerCase() : ''; };
let nameDraft='';
function renderName(){ $('#nameShow').textContent=nameDraft; $('#nameOk').disabled=!nameDraft.trim(); }
function nameKey(ch){
  if(ch==='⌫'){ nameDraft=nameDraft.slice(0,-1); sfx.tick(); }
  else if(nameDraft.length<14){ nameDraft=fmtName(nameDraft+ch); sayAll([{t:ch.toLocaleLowerCase(), lento:true}]); }
  renderName();
}
function goName(){
  hush(); show('name'); nameDraft=save.name||'';
  const box=$('#keys'); box.innerHTML='';
  [...(LANG.letras||'ABCDEFGHIJKLMNOPQRSTUVWXYZ')].forEach(ch=>{
    const b=document.createElement('button'); b.className='key'; b.textContent=ch;
    b.addEventListener('click',()=>nameKey(ch)); box.appendChild(b);
  });
  renderName();
  setTimeout(()=>box.querySelector('button')?.focus(),60);
  sayAll([T.nombreQ]);
}
function confirmName(){
  const n=fmtName(nameDraft).trim(); if(!n) return;
  save.name=n; persist(); updateNames(); sfx.yay();
  sayAll([T.holaX(n)]).then(()=>{ if(!scr.name.hidden) nextStep(); });
}

/* =========================================================
   MICROJUEGOS — uno por lugar (microjuegos.js). Se abren al terminar el lugar
   (con una partida gratis) y después cada partida cuesta pececitos.
   ========================================================= */
const juegoAbierto = c => pruebaTodo() || Object.keys(save.caps||{}).some(k=>k.split(':')[1]===c.id && save.caps[k].final);
const juegoGratis = c => pruebaTodo() ? 1 : ((save.juegos||{})[c.id]||{}).gratis||0;
/* paga la partida (o usa una gratis); false si no alcanzan los peces */
function pagarJuego(c){
  const mj=c.microjuego, g=juegoGratis(c);
  if(pruebaTodo()) return {gratis:true};
  if(g>0){ save.juegos[c.id].gratis=g-1; persist(); return {gratis:true}; }
  const p=riqueza();
  if(p<mj.precio){ sfx.oops(); sayAll([T.noAlcanza(T.peces(mj.precio-p))]); return null; }
  gastar(mj.precio); persist(); updateNames(); if(CAP && !scr.game.hidden) updateHud();
  return {gratis:false};
}
async function runMicro(c){
  const mj=c.microjuego, juego=(window.MICROJUEGOS||{})[mj && mj.id]; if(!juego) return;
  const pago=pagarJuego(c); if(!pago){ busy=false; return; }
  const tok=++flowTok; busy=true;
  openModal(`${X_BTN}<h3 class="stitle"${enAttr(enDe(mj.titulo))}>${esc(mj.titulo)}</h3>
    <canvas class="mj" data-mj></canvas><div class="actions" data-mjact></div>`,'wide');
  sfx.stamp();
  const M={canvas:card.querySelector('[data-mj]'), actions:card.querySelector('[data-mjact]'), alive:()=>tok===flowTok,
    aviso: pago.gratis ? T.juegoGratis : T.cuesta(T.peces(mj.precio))};
  const fin=await juego(c, M); if(!M.alive()) return;
  // al terminar: otra partida (paga) o volver
  M.actions.innerHTML = B('again','replay',`${esc(T.otraVez)} <i class="mjprecio">${juegoGratis(c)>0?'★':img('pez')+mj.precio}</i>`,'soft') + B('back','back',T.atras,'go');
  setTimeout(()=>M.actions.querySelector('.go')?.focus(),30);
  const {act}=await waitAct(['again','back']); if(!M.alive()) return;
  if(act==='again'){ runMicro(c); return; }
  closeModal(); if(!scr.lib.hidden && libMode==='juegos') goJuegos();
}
let libMode='';
function goJuegos(){
  hush(); show('lib'); libMode='juegos';
  const body=$('#libBody'); body.innerHTML='';
  $('#libTitle').textContent=T.juegos;
  const lista=CAP_LIST.filter(c=>c.microjuego && capAbierto(c));
  body.innerHTML=`<div class="books games">${lista.map(c=>{ const mj=c.microjuego, open=juegoAbierto(c), g=juegoGratis(c);
    return `<button class="book ${open?'':'locked'}" style="--bc:${mj.color||'#FFB13C'}" data-c="${c.id}">${img(mj.arte)}<b>${open?esc(mj.titulo):''}</b>${open?`<span class="precio">${g>0?'★':`${img('pez')}${mj.precio}`}</span>`:ICON.lock}</button>`; }).join('')}</div>`;
  body.querySelectorAll('.book').forEach(b=>{
    const c=CAP_LIST.find(x=>x.id===b.dataset.c);
    b.addEventListener('focus',()=>sayAll([juegoAbierto(c) ? c.microjuego.titulo : T.juegoCerrado(c.lugar.texto)]));
    b.addEventListener('click',()=>{ if(!juegoAbierto(c)){ sayAll([T.juegoCerrado(c.lugar.texto)]); return; } runMicro(c); });
  });
  setTimeout(()=>body.querySelector('button')?.focus(),60);
  sayAll([T.juegosDi]);
}

/* =========================================================
   LA TIENDA
   ========================================================= */
let shopSel=null;
const ropaNombre = it => (T.ropa||{})[it.id] || it.id;
function itemSvg(it){
  const c=it.color, c2=it.color2||'#fff', W=b=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${b}</svg>`;
  const line=d=>`<path d="${d}" fill="none" stroke="#22314F" stroke-opacity=".28" stroke-width="3" stroke-linejoin="round"/>`;
  const star=(cx,cy,r)=>{ let d=''; for(let i=0;i<10;i++){ const a=-Math.PI/2+i*Math.PI/5, q=i%2?r*.45:r; d+=(i?'L':'M')+(cx+Math.cos(a)*q).toFixed(1)+' '+(cy+Math.sin(a)*q).toFixed(1); } return d+'Z'; };
  switch(it.estilo){
    case 'liso': case 'rayas': case 'vertical': case 'estrella': {
      const sh='M32 16L42 12Q50 20 58 12L68 16L90 32L79 48L70 42L70 88L30 88L30 42L21 48L10 32Z'; let pat='';
      if(it.estilo==='rayas') for(let y=24;y<88;y+=12) pat+=`<rect x="0" y="${y}" width="100" height="6" fill="${c2}"/>`;
      if(it.estilo==='vertical') for(let x=33;x<70;x+=12) pat+=`<rect x="${x}" y="0" width="6" height="100" fill="${c2}"/>`;
      if(it.estilo==='estrella') pat=`<path d="${star(50,52,15)}" fill="${c2}"/>`;
      return W(`<defs><clipPath id="k"><path d="${sh}"/></clipPath></defs><path d="${sh}" fill="${c}"/><g clip-path="url(#k)">${pat}</g>${line(sh)}`);
    }
    case 'short': { const d='M20 18H80L86 72H58L50 46L42 72H14Z'; return W(`<path d="${d}" fill="${c}"/><rect x="20" y="18" width="60" height="9" fill="#000" opacity=".15"/>${line(d)}`); }
    case 'largo': { const d='M26 8H74L80 92H57L50 38L43 92H20Z'; return W(`<path d="${d}" fill="${c}"/><rect x="26" y="8" width="48" height="8" fill="#000" opacity=".15"/>${line(d)}`); }
    case 'gorra': return W(`<path d="M16 60c0-22 15-36 34-36s34 14 34 36z" fill="${c}"/><path d="M50 62h40c-2 9-13 13-24 13H50z" fill="${c}"/><path d="M50 62h40c-2 9-13 13-24 13H50z" fill="#000" opacity=".18"/><rect x="14" y="58" width="72" height="7" rx="3.5" fill="#000" opacity=".12"/><circle cx="50" cy="25" r="5" fill="#FFE07A"/>`);
    case 'lana': return W(`<path d="M16 70c0-28 15-46 34-46s34 18 34 46z" fill="${c}"/><path d="M34 34v34M50 26v42M66 34v34" stroke="#000" stroke-opacity=".12" stroke-width="4"/><rect x="12" y="62" width="76" height="16" rx="8" fill="${c2}"/><circle cx="50" cy="20" r="11" fill="${c2}"/>`);
    case 'corona': return W(`<path d="M16 76L12 30L32 50L50 22L68 50L88 30L84 76Z" fill="${c}"/><rect x="16" y="66" width="68" height="10" fill="#000" opacity=".12"/><circle cx="50" cy="56" r="7" fill="${c2}"/><circle cx="30" cy="64" r="4.5" fill="#2E86DE"/><circle cx="70" cy="64" r="4.5" fill="#2FBF8F"/><circle cx="12" cy="30" r="5" fill="${c}"/><circle cx="50" cy="22" r="5" fill="${c}"/><circle cx="88" cy="30" r="5" fill="${c}"/>`);
    case 'anteojos': return W(`<path d="M10 42h80" stroke="${c}" stroke-width="5"/><ellipse cx="30" cy="52" rx="19" ry="15" fill="#1E2436" stroke="${c}" stroke-width="5"/><ellipse cx="70" cy="52" rx="19" ry="15" fill="#1E2436" stroke="${c}" stroke-width="5"/><ellipse cx="24" cy="46" rx="6" ry="3.5" fill="#fff" opacity=".6"/><ellipse cx="64" cy="46" rx="6" ry="3.5" fill="#fff" opacity=".6"/>`);
    case 'mono': return W(`<path d="M50 50L14 28V72Z" fill="${c}"/><path d="M50 50L86 28V72Z" fill="${c}"/><circle cx="50" cy="50" r="10" fill="${c}"/><circle cx="50" cy="50" r="10" fill="#000" opacity=".2"/>`);
    case 'bufanda': return W(`<rect x="12" y="26" width="76" height="20" rx="10" fill="${c}"/><rect x="26" y="38" width="20" height="50" rx="6" fill="${c}"/><rect x="26" y="66" width="20" height="6" fill="${c2}"/><rect x="26" y="78" width="20" height="6" fill="${c2}"/><rect x="58" y="26" width="7" height="20" fill="${c2}"/><rect x="72" y="26" width="7" height="20" fill="${c2}"/>`);
    case 'capa': return W(`<path d="M36 14H64L88 90Q50 98 12 90Z" fill="${c}"/><path d="M36 14H50L40 94Q26 93 12 90Z" fill="#000" opacity=".15"/><circle cx="50" cy="16" r="7" fill="${c2}"/>`);
    case 'agua': return W(`<rect x="18" y="44" width="48" height="20" rx="10" fill="${c}"/><rect x="60" y="49" width="22" height="10" rx="5" fill="#FFC93C"/><circle cx="44" cy="34" r="14" fill="${c2}" opacity=".85"/><path d="M26 62v18a6 6 0 0 0 6 6h6v-24z" fill="#E8483B"/><ellipse cx="88" cy="54" rx="6" ry="4" fill="${c2}"/>`);
    case 'musica': return W(`<rect x="16" y="32" width="68" height="48" rx="12" fill="${c}"/><path d="M28 32v-12a8 8 0 0 1 8-8h28a8 8 0 0 1 8 8v12" fill="none" stroke="${c2}" stroke-width="7"/><circle cx="34" cy="56" r="13" fill="#1E2436"/><circle cx="34" cy="56" r="6" fill="${c2}"/><circle cx="66" cy="56" r="13" fill="#1E2436"/><circle cx="66" cy="56" r="6" fill="${c2}"/><rect x="44" y="42" width="12" height="6" rx="2" fill="${c2}"/>`);
    case 'burbujas': return W(`<circle cx="46" cy="38" r="16" fill="none" stroke="${c}" stroke-width="7"/><path d="M46 54l28 32" stroke="#FF9B3D" stroke-width="8" stroke-linecap="round"/><circle cx="30" cy="24" r="10" fill="${c2}" opacity=".6"/><circle cx="68" cy="28" r="7" fill="${c2}" opacity=".6"/><circle cx="28" cy="22" r="3" fill="#fff"/>`);
    case 'estrellas': return W(`<path d="M30 76l38-48" stroke="#8B6FE8" stroke-width="8" stroke-linecap="round"/><path d="${star(72,24,18)}" fill="${c}"/><circle cx="72" cy="24" r="6" fill="${c2}"/><circle cx="42" cy="34" r="3" fill="${c}"/><circle cx="26" cy="54" r="3" fill="${c2}"/>`);
    case 'fiesta': return W(`<path d="M20 80L44 26L78 60Z" fill="${c}"/><path d="M44 26L78 60" stroke="${c2}" stroke-width="6"/><circle cx="58" cy="22" r="4" fill="#FFC93C"/><circle cx="74" cy="36" r="5" fill="#2FBF8F"/><circle cx="82" cy="20" r="4" fill="#E8483B"/><path d="M70 12q6-4 10 2t-4 8" fill="none" stroke="#2E86DE" stroke-width="3"/>`);
  }
  return W('');
}
function goShop(){ hush(); show('shop'); shopSel=null; renderShop(); setTimeout(()=>$('#shopGrid button')?.focus(),60); sayAll([T.tiendaHola]); }
function renderShop(){
  const A=save.armario, list=window.TIENDA||[];
  updateNames();
  $('#shopGrid').innerHTML=list.map(it=>{
    const own=!!A.tiene[it.id], worn=A.puesto[it.lugar]===it.id, sel=shopSel===it.id;
    return `<button class="item ${own?'own':''} ${worn?'worn':''} ${sel?'sel':''}" data-id="${it.id}" aria-label="${esc(ropaNombre(it))}"><img src="${svgUri(itemSvg(it))}" alt=""><span class="price">${own?ICON.check:`${img('pez')}<b>${it.precio}</b>`}</span></button>`;
  }).join('');
  $('#shopGrid').querySelectorAll('.item').forEach(b=>{
    const it=list.find(x=>x.id===b.dataset.id);
    b.addEventListener('focus',()=>sayAll([ropaNombre(it)]));
    b.addEventListener('click',()=>selectItem(it));
  });
  const box=$('#shopSel'), it=list.find(x=>x.id===shopSel);
  if(!it){ box.innerHTML=''; return; }
  const own=!!A.tiene[it.id], worn=A.puesto[it.lugar]===it.id, can=riqueza()>=it.precio;
  box.innerHTML=`<b class="iname">${esc(ropaNombre(it))}</b>
    ${!own?`<button class="mbtn go buy ${can?'':'cant'}" id="shopAct">${img('pez')}<span>${esc(T.comprar)} · ${it.precio}</span></button>`
         :`<button class="mbtn ${worn?'soft':'go'}" id="shopAct">${worn?ICON.close:ICON.check}<span>${esc(worn?T.sacarme:T.ponerme)}</span></button>`}`;
  $('#shopAct').addEventListener('click',()=>shopAction(it));
}
function selectItem(it){
  shopSel=it.id; renderShop();
  setTimeout(()=>$('#shopAct')?.focus(),20);
  const own=save.armario.tiene[it.id];
  sayAll(own ? [ropaNombre(it)] : [ropaNombre(it), T.cuesta(T.peces(it.precio))]);
}
function shopAction(it){
  const A=save.armario, name=ropaNombre(it);
  if(!A.tiene[it.id]){
    const p=riqueza();
    if(p<it.precio){ sfx.oops(); const b=$('#shopAct'); b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),450); sayAll([T.noAlcanza(T.peces(it.precio-p))]); return; }
    gastar(it.precio); A.tiene[it.id]=true; A.puesto[it.lugar]=it.id; persist();
    sfx.stamp(); setTimeout(()=>sfx.yay(),300); renderShop(); setTimeout(()=>$('#shopAct')?.focus(),20);
    sayAll([T.quiero(name), T.comprado(name), T.queda]);
    return;
  }
  if(A.puesto[it.lugar]===it.id){ delete A.puesto[it.lugar]; sfx.whoosh(); }
  else { A.puesto[it.lugar]=it.id; sfx.yay(); sayAll([T.queda]); }
  persist(); renderShop(); setTimeout(()=>$('#shopAct')?.focus(),20);
}
const SHOPKEEPER={kind:'dog', fur:'#F2C46B', fur2:'#FFF3D6', ear:'#C9913C', seed:.8};

/* =========================================================
   CARTELITO EN INGLÉS (al tocar un texto con data-en)
   ========================================================= */
const enTip=document.createElement('div'); enTip.id='enTip'; enTip.hidden=true; enTip.setAttribute('lang','en'); document.body.appendChild(enTip);
let enTm=0;
function hideEn(){ enTip.hidden=true; clearTimeout(enTm); }
function showEn(el){ showTip(el, el.dataset.en, 'EN'); }
function showTip(el, txt, tag){
  enTip.innerHTML=`<b>${esc(tag)}</b><span>${esc(txt)}</span>`; enTip.lang=tag==='EN'?'en':'es'; enTip.hidden=false;
  const r=el.getBoundingClientRect(), tr=enTip.getBoundingClientRect();
  const x=Math.max(8,Math.min(innerWidth-tr.width-8, r.left+r.width/2-tr.width/2));
  let y=r.top-tr.height-10; if(y<8) y=Math.min(innerHeight-tr.height-8, r.bottom+10);
  enTip.style.left=x+'px'; enTip.style.top=y+'px';
  clearTimeout(enTm); enTm=setTimeout(hideEn,6000);
}
document.addEventListener('click',e=>{
  const el=e.target.closest && e.target.closest('[data-en]');
  if(e.target.closest && e.target.closest('.holdable')) return;
  if(!el || el.closest('button') || save.ingles===false || !el.dataset.en){ hideEn(); return; }
  if(!enTip.hidden && enTip.dataset.src===el.dataset.en){ hideEn(); enTip.dataset.src=''; return; }
  enTip.dataset.src=el.dataset.en; showEn(el);
});

/* =========================================================
   ENTRADA (teclado, tacto, botones)
   ========================================================= */
function navFocus(container, dir){
  const els=[...container.querySelectorAll('button:not([disabled]):not([tabindex="-1"]),input,select')].filter(el=>!el.hidden && el.offsetParent!==null && !el.closest('label.up'));
  if(!els.length) return;
  const curEl=document.activeElement; if(!els.includes(curEl)){ els[0].focus(); return; }
  const r0=curEl.getBoundingClientRect(), c0={x:r0.left+r0.width/2,y:r0.top+r0.height/2};
  let best=null, bs=Infinity;
  for(const el of els){ if(el===curEl) continue; const r=el.getBoundingClientRect(), dx=r.left+r.width/2-c0.x, dy=r.top+r.height/2-c0.y;
    const along=dir[0]?dx*dir[0]:dy*dir[1], across=dir[0]?Math.abs(dy):Math.abs(dx); if(along<=4) continue; const sc=along+across*2.2; if(sc<bs){ bs=sc; best=el; } }
  if(!best){ const i=els.indexOf(curEl); best=els[(i+(dir[0]+dir[1]>0?1:-1)+els.length)%els.length]; }
  best.focus(); best.scrollIntoView({block:'nearest'});
}
window.addEventListener('keydown',e=>{
  const d=DIRS[e.key];
  if(!modal.hidden){ const tg=e.target; if(d && !(tg && (tg.tagName==='INPUT'||tg.tagName==='SELECT'))){ e.preventDefault(); navFocus(card,d); } return; }
  if(!scr.game.hidden){
    if(e.code==='Space' || e.key===' '){ e.preventDefault(); dispararGadget(); return; }
    if(e.key==='Tab' || e.key==='e' || e.key==='E' || e.key==='q' || e.key==='Q'){ e.preventDefault(); nextGadget(); return; }
    if(e.key>='1' && e.key<='5'){ e.preventDefault(); const idx=parseInt(e.key)-1; if(GADGETS[idx]) setGadget(GADGETS[idx].id); return; }
    if(d){ e.preventDefault(); if(!keys.includes(e.key)) keys.push(e.key); }
    return;
  }
  if(!scr.name.hidden){
    const tg=e.target, onBtn=tg && tg.tagName==='BUTTON';
    if(e.key==='Backspace'){ e.preventDefault(); nameKey('⌫'); return; }
    if(e.key==='Enter' && !onBtn){ e.preventDefault(); confirmName(); return; }
    if(e.key.length===1 && /\p{L}/u.test(e.key) && !e.ctrlKey && !e.metaKey){ e.preventDefault(); nameKey(e.key.toLocaleUpperCase()); return; }
  }
  const vis=Object.values(scr).find(s=>!s.hidden);
  if(e.target && (e.target.tagName==='INPUT' || e.target.tagName==='SELECT')) return;   // dejar mover el cursor en los formularios
  if(d && vis){ e.preventDefault(); navFocus(vis,d); }
});
window.addEventListener('keyup',e=>{ keys=keys.filter(k=>k!==e.key); if(!keys.length) inputLock=false; });
window.addEventListener('blur',()=>{ keys=[]; inputLock=false; });
document.addEventListener('contextmenu',e=>e.preventDefault());
document.querySelectorAll('#dpad button').forEach(b=>{
  const k=b.dataset.k;
  b.addEventListener('pointerdown',e=>{ e.preventDefault(); actx(); clearPath(); if(!keys.includes(k)) keys.push(k); });
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>{ keys=keys.filter(x=>x!==k); if(!keys.length) inputLock=false; }));
});
$('#gadgetCycleBtn')?.addEventListener('click', e => { e.preventDefault(); actx(); nextGadget(); });
$('#gadgetFireBtn')?.addEventListener('click', e => { e.preventDefault(); actx(); dispararGadget(); });
$('#playBtn').addEventListener('click',()=>{ actx(); sfx.yay(); nextStep(); });
$('#langBtn').addEventListener('click',goLangScreen);
$('#nameDel').addEventListener('click',()=>nameKey('⌫'));
$('#nameOk').addEventListener('click',confirmName);
$('#shopBack').addEventListener('click',goHome);
$('#meBtn').addEventListener('click',goPicker);
$('#homeBtn').addEventListener('click',()=>{ if(!modal.hidden) return; if(CAP) savePos(); goHome(); });
$('#ppBtn').addEventListener('click',()=>{ if(modal.hidden) runPassport(); });
$('#libBack').addEventListener('click',goHome);
function closeSidebar(){
  $('#homeSidebar')?.classList.remove('open');
  $('#sidebarBackdrop')?.classList.remove('open');
}
function openSidebar(){
  $('#homeSidebar')?.classList.add('open');
  $('#sidebarBackdrop')?.classList.add('open');
}
$('#burgerBtn')?.addEventListener('click',()=>{
  if($('#homeSidebar')?.classList.contains('open')) closeSidebar();
  else openSidebar();
});
$('#sidebarClose')?.addEventListener('click',closeSidebar);
$('#sidebarBackdrop')?.addEventListener('click',closeSidebar);
$('#btnCuentos').addEventListener('click',()=>{ closeSidebar(); goLib('cuentos'); });
$('#btnPracticar').addEventListener('click',()=>{ closeSidebar(); goLib('practicar'); });
$('#btnTienda').addEventListener('click',()=>{ closeSidebar(); goShop(); });
$('#btnJuegos').addEventListener('click',()=>{ closeSidebar(); goJuegos(); });
$('#btnRepaso').addEventListener('click',()=>{ closeSidebar(); goRepaso(); });
holdify($('#gearHome'),1500,openParent);
/* un toque corto no abre nada (para que no entren los chicos): le avisamos al grande qué hacer */
['#gearHome','#gearGame'].forEach(id=>$(id).addEventListener('click',e=>{ if(!modal.hidden && card.classList.contains('parent')) return; showTip(e.currentTarget, G.engranaje, 'ℹ'); }));
holdify($('#gearGame'),1500,()=>{ if(!modal.hidden) closeModal(); openParent(); });
live($('#shopCv'),(c,w,h,t)=>{
  const it=(window.TIENDA||[]).find(x=>x.id===shopSel);
  const S=Math.min(h*.9, w*.62);
  drawAnimal(c,SHOPKEEPER,w*.18,h*.96,S*.62,{t,hat:'#2FBF8F',facing:1});
  drawHero(c,w*.62,h*.96,S,{t,probar:it,wave:!!it,facing:-1});
});
live($('#meCv'),(c,w,h,t)=>drawHero(c,w/2,h*.98,h*.95,{t,backpack:true}));
live($('#parade'),(c,w,h,t)=>{ const n=CHARACTERS.length, sz=Math.min(h*.88,w/n*1.05); CHARACTERS.forEach((ch,i)=>{ const x=w*(i+.5)/n; drawAnimal(c,ch,x,h*.96-Math.abs(Math.sin(t*3+i*.9))*h*.06,sz,{t,wave:i%2===0,backpack:true}); }); });

function frame(now){
  const t=now/1000;
  if(!scr.game.hidden && CAP){ update(now); maybeSpawnFish(now); drawWorld(t); }
  for(const L of lives){ if(!L.cv.isConnected){ lives.delete(L); continue; } drawLive(L,t); }
  requestAnimationFrame(frame);
}
clips.init();
Promise.all([cargarTodo(), nubeInit()]).then(async ()=>{
  if(NUBE.usuario){ const id=+lsGet(ALUMNO_KEY); const a=NUBE.alumnos.find(x=>x.id===id); if(a) usarAlumno(a); }
  await clips.cargarNube();
  setLang(save.lang || 'es', false); rotarInicio();
  $('#playBtn').disabled=false; setTimeout(()=>$('#playBtn').focus(),60);
  if(tokenClave && NUBE.on){ cuentaModo='nueva'; goCuenta(); }
});
requestAnimationFrame(frame);
