'use strict';
/* =========================================================
   LAS AVENTURAS DE NICO — motor del juego
   Los lugares viven en capitulos/<id>.js y se listan en capitulos.js.
   ========================================================= */

/* ---------- arte común + íconos ---------- */
const ART = {
  globo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20 16h60a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H46L28 86V70h-8A12 12 0 0 1 8 58V28a12 12 0 0 1 12-12z" fill="#8B6FE8"/><circle cx="34" cy="43" r="6" fill="#fff"/><circle cx="50" cy="43" r="6" fill="#fff"/><circle cx="66" cy="43" r="6" fill="#fff"/></svg>`,
  pez:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M72 50l22-18v36z" fill="#FF7A1A"/><path d="M42 30l12-14 8 16z" fill="#FF7A1A"/><ellipse cx="44" cy="50" rx="33" ry="22" fill="#FF9B3D"/><path d="M50 31c-4 6-4 32 0 38M62 34c-3 6-3 26 0 32" stroke="#FFC27A" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="25" cy="45" r="6.5" fill="#fff"/><circle cx="24" cy="45" r="3.4" fill="#22314F"/><path d="M13 55q5 4 10 1" stroke="#22314F" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
  corazon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 86C20 64 10 48 10 34a20 20 0 0 1 40-6 20 20 0 0 1 40 6c0 14-10 30-40 52z" fill="#FF6F8F"/><ellipse cx="32" cy="34" rx="7" ry="5" fill="#fff" opacity=".6"/></svg>`
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
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const IMG = {};
function imgEl(id){ if(!IMG[id] && ART[id]){ const i=new Image(); i.src=svgUri(ART[id]); IMG[id]=i; } return IMG[id]; }
document.querySelectorAll('[data-ico]').forEach(el=>{ el.outerHTML = ICON[el.dataset.ico]; });

/* ---------- personajes ---------- */
const CHARACTERS = [
  {id:'luna',  name:'Luna',  kind:'cat',   g:'f', fur:'#8E95A8', fur2:'#F3F1F7', seed:.3},
  {id:'tigre', name:'Tigre', kind:'cat',   g:'m', fur:'#F2994A', fur2:'#FFE9CF', stripes:'#C9712C', seed:1.1},
  {id:'mishi', name:'Mishi', kind:'cat',   g:'f', fur:'#3B3B4A', fur2:'#EDEBF2', eye:'#F5D547', seed:2.2},
  {id:'toby',  name:'Toby',  kind:'dog',   g:'m', fur:'#C08552', fur2:'#F5E1C8', ear:'#7A4B2A', seed:.7},
  {id:'coco',  name:'Coco',  kind:'bunny', g:'m', fur:'#F2EDE8', fur2:'#FFFFFF', inner:'#FFB3C7', seed:1.6},
  {id:'pipo',  name:'Pipo',  kind:'bear',  g:'m', fur:'#8B5E3C', fur2:'#DDBA94', seed:2.8}
];
const animalName = ch => { const a=T.animales[ch.kind]||{}; return a[ch.g]||a.m||''; };

/* ---------- idiomas ---------- */
const PACKS = {};
function registrarIdioma(l){ PACKS[l.codigo]=l; }
window.registrarIdioma = registrarIdioma;
let LANG = null;     // paquete del idioma actual
const T = new Proxy({}, {get:(_,k)=>{ const p=LANG||PACKS.es; return p && p.t[k]!==undefined ? p.t[k] : (PACKS.es && PACKS.es.t[k]); }});
const langCode = () => (LANG && LANG.codigo) || 'es';

/* ---------- capítulos: base común + textos por idioma ---------- */
const BASES = {}, TEXTOS = {};
let CAP_LIST = [];
function registrarCapitulo(c){ BASES[c.id]=c; Object.assign(ART, c.arte||{}); }
function registrarTextos(id, lang, t){ (TEXTOS[id] || (TEXTOS[id]={}))[lang]=t; }
window.registrarCapitulo = registrarCapitulo; window.registrarTextos = registrarTextos;
function buildCap(id, lang){
  const b=BASES[id], t=TEXTOS[id] && TEXTOS[id][lang]; if(!b || !t) return null;
  const c={
    id, key:`${lang}:${id}`, num:b.num, arteTapa:b.arteTapa, titulo:t.titulo,
    lugar:{...t.lugar, arte:b.lugarArte}, bienvenida:t.bienvenida, orden:b.orden,
    niveles:b.niveles.map((n,i)=>({...n, ...t.niveles[i]})),
    estaciones:{}, objetos:{...(t.objetos||{})},
    final:{npc:b.final.npc, anim:b.final.anim||'vuelo', propina:b.final.propina||0, ...t.final, frase:{...t.final.frase, arte:b.final.arte}},
    uniforme:b.uniforme||null,
    numeros:t.numeros||null,
    microjuego: b.microjuego ? {...b.microjuego, ...(t.microjuego||{}), ingredientes:(b.microjuego.ingredientes||[]).map((k,i)=>({k, ...(((t.microjuego||{}).ingredientes||[])[i]||{})}))} : null,
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
const sonido = sl => { const m=(LANG&&LANG.sonido)||{}; return m[sl.trim().toLowerCase()] || sl; };
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
    setTimeout(()=>els.forEach(el=>{ const v=t[el.dataset.t]; if(typeof v==='string') el.textContent=v; el.lang=code; el.classList.remove('swap'); }), 280);
  }, 3000);
}
function applyLang(){
  document.querySelectorAll('[data-t]').forEach(el=>{ const v=T[el.dataset.t]; if(typeof v==='string') el.textContent=v; el.removeAttribute('lang'); });
  updateNames();
  const lb=$('#langBtn'); if(lb && LANG) lb.innerHTML=`<img src="${svgUri(LANG.bandera)}" alt="">`;
}

/* ---------- guardado ---------- */
const STORE_KEY='aventuras-nico.v3';
const defaultSave = () => ({name:'', lang:null, charId:null, grownup:false, voces:{}, pausa:1, caps:{}, puntos:0, armario:{tiene:{}, puesto:{}}, juegos:{}});
function loadSave(){
  try{ const s=JSON.parse(localStorage.getItem(STORE_KEY)); if(s && typeof s==='object'){ const d=defaultSave(); return Object.assign(d, s, {armario:Object.assign(d.armario, s.armario||{})}); } }catch(e){}
  // migración desde la versión anterior (solo castellano)
  try{ const o=JSON.parse(localStorage.getItem('aventuras-nico.v2')); if(o && typeof o==='object'){
    const s=defaultSave(); s.name=o.name||''; s.charId=o.charId||null; s.grownup=!!o.grownup; s.pausa=o.pausa||1; s.puntos=o.puntos||0; s.lang='es';
    if(o.voice) s.voces.es=o.voice; for(const k in (o.caps||{})) s.caps['es:'+k]=o.caps[k]; return s; } }catch(e){}
  return defaultSave();
}
function mezclarSave(d){ const s=defaultSave(); return Object.assign(s, d||{}, {armario:Object.assign(s.armario, (d&&d.armario)||{})}); }
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

let dbp=null;
function idb(){ if(dbp) return dbp; dbp=new Promise((res,rej)=>{ try{ const r=indexedDB.open('aventuras-nico-audio',1); r.onupgradeneeded=()=>r.result.createObjectStore('clips'); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); }catch(e){ rej(e); } }); return dbp; }
async function idbOp(mode, fn){ const db=await idb(); return new Promise((res,rej)=>{ const tx=db.transaction('clips',mode); const r=fn(tx.objectStore('clips')); tx.oncomplete=()=>res(r && r.result); tx.onerror=()=>rej(tx.error); }); }
const clips = {
  ids:new Set(), cache:new Map(),
  nube:new Set(), global:new Set(),   // grabaciones en el servidor: las de esta cuenta y las del administrador (para todos)
  has(id){ return this.ids.has(id) || this.nube.has(id) || this.global.has(id); },
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
    const u=new SpeechSynthesisUtterance(text); const v=voiceFor(code);
    u.lang = v ? v.lang : (PACKS[code] ? PACKS[code].tag : code);
    if(v) u.voice=v;
    u.rate=rate; u.pitch=1.05; u.onend=fin; u.onerror=fin;
    const tm=setTimeout(fin, 2500+text.length*120);
    try{ speechSynthesis.speak(u); }catch(e){ fin(); }
  });
}
let curAudio=null, curAudioDone=null;
function playBlob(b){ return new Promise(res=>{ const url=URL.createObjectURL(b); const a=new Audio(url); curAudio=a; const done=()=>{ URL.revokeObjectURL(url); if(curAudio===a){ curAudio=null; curAudioDone=null; } res(); }; curAudioDone=done; a.onended=done; a.onerror=done; a.play().catch(done); }); }
function stopAudio(){ if(curAudio){ try{ curAudio.pause(); }catch(e){} curAudioDone && curAudioDone(); } }
let sayTok=0;
/* parts: textos, o {t:'texto', id:'grabación', lento:true, lang:'fr'} */
async function sayAll(parts){
  const my=++sayTok; try{ speechSynthesis.cancel(); }catch(e){} stopAudio();
  for(let p of parts){
    if(my!==sayTok) return false;
    if(typeof p==='string') p={t:p};
    const b=(p.id && clips.has(p.id)) ? await clips.get(p.id) : null;
    if(my!==sayTok) return false;
    if(b) await playBlob(b); else await speak(p.t, p.lento ? .62 : .85, p.lang||langCode());
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
  jet:()=>noise(3.5,.1,150,1600)
};

/* =========================================================
   DIBUJO
   ========================================================= */
function rr(c,x,y,w,h,r){ r=Math.max(0,Math.min(r,w/2,h/2)); c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
function ell(c,x,y,rx,ry,fill,rot=0){ c.beginPath(); c.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),rot,0,Math.PI*2); c.fillStyle=fill; c.fill(); }
function poly(c,pts,fill){ c.beginPath(); c.moveTo(pts[0],pts[1]); for(let i=2;i<pts.length;i+=2) c.lineTo(pts[i],pts[i+1]); c.closePath(); c.fillStyle=fill; c.fill(); }
function drawImg(c,id,x,y,size,rot=0){ const im=imgEl(id); if(!im||!im.complete||!im.naturalWidth) return; c.save(); c.translate(x,y); if(rot) c.rotate(rot); c.drawImage(im,-size/2,-size/2,size,size); c.restore(); }

/* un animal: x,y = pies; s = alto */
function drawAnimal(c,a,x,y,s,o={}){
  const t=(o.t||0)+(a.seed||0), f=o.facing||1, walk=o.walk;
  const bob = walk ? Math.abs(Math.sin(t*14))*s*.06 : Math.sin(t*2.2)*s*.012;
  if(!o.noShadow){ c.save(); c.globalAlpha=.16; ell(c,x,y,s*.26,s*.06,'#000'); c.restore(); }
  c.save(); c.translate(x,y-bob-(o.lift||0)); c.scale(f,1);
  const fur=a.fur, fur2=a.fur2||'#fff';
  if(a.kind==='cat'){ c.strokeStyle=fur; c.lineWidth=s*.085; c.lineCap='round'; const w=Math.sin(t*3)*s*.05; c.beginPath(); c.moveTo(-s*.15,-s*.16); c.bezierCurveTo(-s*.42,-s*.14,-s*.40+w,-s*.42,-s*.30+w,-s*.52); c.stroke(); }
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
  if(R.piernas) drawPiernas(c,R.piernas,s,st);
  if(R.torso) drawTorso(c,R.torso,s);
  if(o.wave){ const ang=-1.9+Math.sin(t*8)*.35; c.save(); c.translate(s*.14,-s*.3); c.rotate(ang); ell(c,s*.09,0,s*.1,s*.05,fur); c.restore(); if(R.torso) ell(c,s*.14,-s*.3,s*.055,s*.05,R.torso.color); }
  else { ell(c,s*.16,-s*.22,s*.05,s*.085,fur,-.3); if(R.torso) ell(c,s*.15,-s*.275,s*.058,s*.045,R.torso.color,-.3); }
  const hy=-s*.6, hr=s*.26, fx=hr*.14;
  if(a.kind==='cat'){ for(const sd of [-1,1]){ poly(c,[sd*hr*.95,hy-hr*.2, sd*hr*.74,hy-hr*1.18, sd*hr*.2,hy-hr*.82],fur); poly(c,[sd*hr*.8,hy-hr*.38, sd*hr*.72,hy-hr*.95, sd*hr*.38,hy-hr*.76],'#FFA3BC'); } }
  if(a.kind==='bunny'){ for(const sd of [-1,1]){ ell(c,sd*hr*.38,hy-hr*1.25,hr*.21,hr*.64,fur,sd*.14); ell(c,sd*hr*.38,hy-hr*1.22,hr*.1,hr*.46,a.inner||'#FFB3C7',sd*.14); } }
  if(a.kind==='bear'){ for(const sd of [-1,1]){ ell(c,sd*hr*.72,hy-hr*.72,hr*.3,hr*.3,fur); ell(c,sd*hr*.72,hy-hr*.72,hr*.15,hr*.15,fur2); } }
  ell(c,0,hy,hr,hr*.94,fur);
  if(a.stripes){ c.strokeStyle=a.stripes; c.lineWidth=s*.026; c.lineCap='round'; for(const dx of [-.08,0,.08]){ c.beginPath(); c.moveTo(dx*s+fx,hy-hr*.93); c.lineTo(dx*s*.75+fx,hy-hr*.58); c.stroke(); } }
  if(a.kind==='dog'){ for(const sd of [-1,1]) ell(c,sd*hr*.9,hy+hr*.08,hr*.24,hr*.52,a.ear||fur,-sd*.32); }
  ell(c,fx,hy+hr*.38,hr*.46,hr*.32,fur2);
  c.save(); c.globalAlpha=.35; ell(c,fx-hr*.56,hy+hr*.3,hr*.13,hr*.09,'#FF7FA0'); ell(c,fx+hr*.6,hy+hr*.3,hr*.13,hr*.09,'#FF7FA0'); c.restore();
  const blink = (t % 4.2) < .13;
  for(const ex of [fx-hr*.34, fx+hr*.36]){
    if(blink){ c.strokeStyle='#22314F'; c.lineWidth=s*.02; c.beginPath(); c.moveTo(ex-hr*.11,hy-hr*.02); c.lineTo(ex+hr*.11,hy-hr*.02); c.stroke(); }
    else { ell(c,ex,hy-hr*.02,hr*.12,hr*.14,a.eye||'#22314F'); if(a.eye) ell(c,ex,hy-hr*.02,hr*.05,hr*.11,'#22314F'); ell(c,ex+hr*.04,hy-hr*.07,hr*.045,hr*.045,'#fff'); }
  }
  if(R.cara) drawAnteojos(c,R.cara,fx,hy,hr,s);
  if(a.kind==='cat') poly(c,[fx-hr*.1,hy+hr*.18, fx+hr*.1,hy+hr*.18, fx,hy+hr*.29],'#FF7FA0');
  else ell(c,fx,hy+hr*.22,hr*.12,hr*.08,'#22314F');
  c.strokeStyle='#22314F'; c.lineWidth=s*.016; c.lineCap='round';
  if(o.mood==='wow') ell(c,fx,hy+hr*.47,hr*.1,hr*.13,'#22314F');
  else if(o.mood==='talk'){ const m=.06+Math.abs(Math.sin(t*9))*.09; ell(c,fx,hy+hr*.45,hr*.13,hr*m,'#22314F'); }
  else { c.beginPath(); c.moveTo(fx-hr*.15,hy+hr*.36); c.quadraticCurveTo(fx-hr*.07,hy+hr*.46,fx,hy+hr*.33); c.quadraticCurveTo(fx+hr*.07,hy+hr*.46,fx+hr*.15,hy+hr*.36); c.stroke(); }
  if(a.kind==='cat'){ c.lineWidth=s*.01; c.strokeStyle='rgba(34,49,79,.55)'; for(const sd of [-1,1]) for(const dy of [-.04,.06]){ c.beginPath(); c.moveTo(fx+sd*hr*.32,hy+hr*(.32+dy)); c.lineTo(fx+sd*hr*.82,hy+hr*(.26+dy*1.8)); c.stroke(); } }
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
  drawAnimal(c,char(),x,y,s,{...o, backpack:o.backpack && !uni, ropa:outfit(o.probar, uni)});
}

/* lienzos vivos (retratos, cuentos, vuelo) */
const lives=new Set();
function live(cv, fn){ if(cv) lives.add({cv, fn}); }
function drawLive(L,t){ const cv=L.cv; const r=cv.getBoundingClientRect(); if(!r.width||!r.height) return; const dpr=Math.min(2,window.devicePixelRatio||1); const W=Math.round(r.width*dpr), H=Math.round(r.height*dpr); if(cv.width!==W||cv.height!==H){ cv.width=W; cv.height=H; } const c=cv.getContext('2d'); c.setTransform(dpr,0,0,dpr,0,0); c.clearRect(0,0,r.width,r.height); L.fn(c,r.width,r.height,t); }

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
  const g=guideTarget();
  if(g && !player.path){
    let gx=g.x; if(tileAt(cur,g.x,g.y)==='W'){ const [a,b]=windowSpan(cur,g.y); gx=Math.round((a+b)/2); }
    let nb=null; for(const [dx,dy] of [[0,1],[1,0],[-1,0],[0,-1]]){ if(WALK.has(tileAt(cur,gx+dx,g.y+dy))){ nb=[dx,dy]; break; } }
    if(nb){ const bnc=Math.sin(t*7)*T*.08, ux=-nb[0], uy=-nb[1]; drawArrow(c,(gx+nb[0])*T+T*.5+ux*(T*.05+bnc),(g.y+nb[1])*T+T*.5+uy*(T*.05+bnc),Math.atan2(uy,ux)+Math.PI/2,T); }
  }
  c.restore();
}
function drawTileObj(ch,x,y,t){
  const T=view.T, X=x*T, Y=y*T, c=wc;
  if(ch==='b'){ c.fillStyle='#5A8BEA'; rr(c,X+T*.1,Y+T*.22,T*.8,T*.24,T*.08); c.fill(); c.fillStyle='#3D6FD9'; rr(c,X+T*.08,Y+T*.44,T*.84,T*.26,T*.08); c.fill(); c.fillStyle='#2A4FA8'; c.fillRect(X+T*.16,Y+T*.7,T*.07,T*.18); c.fillRect(X+T*.77,Y+T*.7,T*.07,T*.18); return; }
  if(ch==='p'){ poly(c,[X+T*.28,Y+T*.6, X+T*.72,Y+T*.6, X+T*.64,Y+T*.94, X+T*.36,Y+T*.94],'#D9774A'); ell(c,X+T*.5,Y+T*.42,T*.26,T*.24,'#3CB371'); ell(c,X+T*.36,Y+T*.34,T*.15,T*.15,'#2E9E5E'); ell(c,X+T*.62,Y+T*.28,T*.14,T*.14,'#4FCB83'); return; }
  if(ch==='a'){ drawCar(c,X+T*.5,Y+T*.86,T*.92,t,x+y*3); return; }
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
  if(ch==='G'){ bubble(X+T*.45, Y-T*.62+bob, 'puerta', cs.final); return; }
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
const ptsHtml = () => `${img('pez')}<b>${save.puntos||0}</b>`;
function updateNames(){
  const n=save.name||'', el=$('#startName');
  // sin nombre todavía: en vez de "Las aventuras de ?", solo "¡Aventuras!" (y va cambiando de idioma como el resto del inicio)
  $('#scr-start .kicker').hidden=!n;
  if(n){ delete el.dataset.t; el.removeAttribute('lang'); el.textContent=n; } else { el.dataset.t='aventuras'; el.textContent=T.aventuras; }
  const len=Math.max(4,(el.textContent||'').length); el.style.fontSize=`clamp(48px, ${Math.min(17, 78/len).toFixed(1)}vw, ${Math.min(156, Math.round(760/len))}px)`;
  $('#hello').innerHTML=`${esc(T.holaX(n))}<small>${esc(T.holaSub)}</small>`;
  ['#homePts','#shopPts'].forEach(id=>{ const e=$(id); if(e) e.innerHTML=ptsHtml(); });
  document.title = n ? `${T.titulo} ${n}` : 'Las Aventuras';
}
function updateHud(){
  resizeWorld();   // el piso nuevo puede tener otro tamaño
  const L=CAP.niveles[cur], fp=$('#floorPill');
  fp.style.setProperty('--fc',L.pared); fp.innerHTML=`<b>${L.num}</b><span${enAttr(enDe(L.nombre))}>${L.nombre}</span>`;
  $('#pts').innerHTML = ptsHtml();
  $('#slots').innerHTML = CAP.orden.map(k=>`<i class="slot ${cs.sellos[k]?'got':''}">${img(CAP.estaciones[k].item)}</i>`).join('') + `<i class="slot gate ${cs.final?'got':''}">${img('puerta')}</i>`;
  // en pantallas angostas, en vez de los sellos uno por uno: el pasaporte y cuántos van
  $('#ppCount').innerHTML = `${ICON.star}<b>${CAP.orden.filter(k=>cs.sellos[k]).length}/${CAP.orden.length}</b>`;
}
function buildPicker(){
  const box=$('#chars'); box.innerHTML='';
  CHARACTERS.forEach(ch=>{
    const b=document.createElement('button'); b.className='char'; b.innerHTML=`<canvas></canvas><b>${ch.name}</b><small>${esc(animalName(ch))}</small>`;
    b.addEventListener('focus',()=>sayAll([`${ch.name}, ${animalName(ch)}.`]));
    b.addEventListener('mouseenter',()=>b.focus());
    b.addEventListener('click',async()=>{ save.charId=ch.id; persist(); sfx.yay(); await sayAll([T.holaX(ch.name)]); goHome(); });
    live(b.querySelector('canvas'),(c,w,h,t)=>drawAnimal(c,ch,w/2,h*.94,h*.86,{t,wave:document.activeElement===b,backpack:true}));
    box.appendChild(b);
  });
}
function goPicker(){ hush(); show('pick'); buildPicker(); setTimeout(()=>$('#chars button')?.focus(),50); sayAll([T.quienDi]); }
const capAbierto = c => !(NUBE.alumno && (NUBE.alumno.bloqueados||[]).includes(c.id));
function goHome(){
  hush(); show('home'); updateNames();
  const box=$('#weeks'); box.innerHTML='';
  CAP_LIST.forEach(c=>{
    if(!capAbierto(c)){
      const b=document.createElement('button'); b.className='week locked';
      b.innerHTML=`<span class="art">${ICON.lock}</span><span class="wk">${esc(T.semana)} ${c.num}</span><b>${esc(c.titulo)}</b>`;
      b.addEventListener('focus',()=>sayAll([c.titulo]));
      b.addEventListener('click',()=>sayAll([T.capCerrado]));
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
function chipsWord(w){ return `<div class="chips"${enAttr(enDe(w.texto))}>${w.silabas.map((s,i)=>`${i?'<span class="dot">·</span>':''}<span class="chip">${esc(s)}</span>`).join('')}</div>`; }
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
async function silabear(w, intro=[T.repeti]){
  const my=++seqTok; const ok=()=>my===seqTok;
  if(intro.length && !(await sayAll(intro))) return false;
  for(let i=0;i<w.silabas.length;i++){
    if(!ok()) return false; mark([i]); sfx.tick();
    await sayAll([{t:sonido(w.silabas[i]), id:silabaId(w,i), lento:true}]); if(!ok()) return false;
    if(!(await waitTurn(w.silabas[i]+'  ', my))) return false;
  }
  mark('all'); await sayAll([{t:w.texto, id:w.id}]); if(!ok()) return false;
  if(!(await waitTurn(w.texto, my))) return false;
  mark('none'); return true;
}
/* la frase en partes: cada parte, y se va juntando */
async function construirFrase(f, intro=[T.repeti]){
  const my=++seqTok; const ok=()=>my===seqTok, P=f.partes;
  if(intro.length && !(await sayAll(intro))) return false;
  if(P.length===1){
    for(let r=0;r<2;r++){ mark('all'); await sayAll([{t:f.texto,id:f.id}]); if(!ok()) return false; if(!(await waitTurn(f.texto,my))) return false; }
    mark('none'); return true;
  }
  for(let i=0;i<P.length;i++){
    if(!ok()) return false; mark([i]); sfx.tick();
    await sayAll([P[i]]); if(!ok()) return false;
    if(!(await waitTurn(P[i],my))) return false;
    if(i>0){
      const last=i===P.length-1;
      if(last){ await sayAll([T.todoJunto]); if(!ok()) return false; }
      mark(Array.from({length:i+1},(_,j)=>j));
      const txt = last ? f.texto : P.slice(0,i+1).join(' ');
      await sayAll([last ? {t:txt,id:f.id} : txt]); if(!ok()) return false;
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
  narrar(async()=>{ if(await sayAll([CAP.bienvenida])) await silabear(w); });
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
  if(st.contar && CAP.numeros){ await runContar(st, tok); if(!alive()) return; }
  // 1 · mirá y repetí la palabra
  openModal(shell({steps:4,step:0,npc:st.npc,bubble:esc(T.hola),sub:st.intro,en:[enT('hola'),enDe(st.intro)].filter(Boolean).join(' '),
    center:`<div class="hero-item small">${img(st.item)}</div><div class="stack">${chipsWord(w)}${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('next','next',T.seguir,'go')}));
  liveNpc(st.npc); liveMe();
  onAct('again',()=>narrar(()=>silabear(w,[])));
  narrar(async()=>{ if(await sayAll([T.hola, st.intro, T.mira(w.texto)])) await silabear(w); });
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
    if(btn.dataset.k===key){ btn.classList.add('right'); sfx.yay(); await sayAll([praise()]); if(!alive()) return; break; }
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
async function runContar(st, tok){
  const nums=CAP.numeros; let marca=0;
  openModal(shell({npc:st.npc,bubble:esc(st.contar),en:enDe(st.contar),
    center:`<div class="stack"><canvas class="contar" data-reloj></canvas>${turnHtml()}</div>`,
    actions:B('again','replay',T.otraVez)+B('next','next',T.seguir,'go')}));
  liveNpc(st.npc); liveMe();
  live(card.querySelector('[data-reloj]'),(c,w,h,t)=>{ const r=Math.min(w,h)*.42; drawReloj(c,w/2,h/2,r,marca||12,0,{marca, grande: marca?'#22314F':'#22314F'}); });
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
    + `<button class="pp-cell gate ${cs.final?'got':''}" data-act="pp" data-k="G">${img('puerta')}<em>${cs.final?esc(CAP.final.despedida):'?'}</em></button>`;
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
const storyFill = s => s.replace(/\{N\}/g, char().name);
const storyHtml = s => esc(storyFill(s)).replace(/\*(.+?)\*/g,'<mark>$1</mark>');
const storySpeech = s => storyFill(s).replace(/\*/g,'');
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
    onAct('again',()=>narrar(()=>sayAll([storySpeech(pg.texto)])));
    narrar(()=>sayAll(i===0 ? [S.titulo, storySpeech(pg.texto)] : [storySpeech(pg.texto)]));
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
  else if(fondo==='salon') bgSalon(c,w,h); else if(fondo==='cocina') bgCocina(c,w,h); else if(fondo==='calle') bgCalle(c,w,h,t);
  else bgTerminal(c,w,h);
  const escY=(p)=>gy+p*(h*.24-gy);
  for(const a of esc2.actores||[]){
    if(a.tipo==='escalera'){ c.save(); c.strokeStyle='#5C6A86'; c.lineWidth=h*.14; c.lineCap='round'; c.beginPath(); c.moveTo(w*.12,gy); c.lineTo(w*.86,h*.24); c.stroke(); c.strokeStyle='#A8B3C6'; c.lineWidth=3; for(let k=0;k<12;k++){ const p=((k/12)+t*.15)%1; const x=w*.12+p*w*.74, y=escY(p); c.beginPath(); c.moveTo(x-12,y-6); c.lineTo(x+12,y+6); c.stroke(); } c.restore(); }
    else if(a.tipo==='heroe'){ const lift=a.gesto==='salto'?Math.abs(Math.sin(t*4))*h*.1:0; drawHero(c,(a.x??.4)*w,gy,S*(a.tam||1),{t,lift,facing:a.mira||1,backpack:true,uniforme:(a.uniforme&&cap.uniforme)?cap.uniforme.ropa:null,wave:a.gesto==='saludo',mood:a.gesto==='sorpresa'?'wow':null}); }
    else if(a.tipo==='npc'){ const n=a.de==='final'?cap.final.npc:cap.estaciones[a.de].npc; drawAnimal(c,n,(a.x??.7)*w,gy,S*(a.tam||.95),{t,facing:a.mira||1,hat:n.hat}); }
    else if(a.tipo==='cosa'){
      let x=(a.x??.5)*w, y=(a.y??.65)*h, s=(a.tam??.3)*h, rot=0, sc=1;
      switch(a.anim){
        case 'flotar': y+=Math.sin(t*3)*h*.02; break;
        case 'latir': sc=1+.08*Math.sin(t*6); break;
        case 'saltar': y-=Math.abs(Math.sin(t*4))*h*.12; break;
        case 'rodar': x=((((a.x??0)+t*.2)%1.25)-.12)*w; rot=Math.sin(t*14)*.14; break;
        case 'cruzar': x=((((a.x??0)+t*.16)%1.3)-.15)*w; y+=Math.sin(t*3)*h*.06; rot=Math.sin(t*3)*.25; break;
        case 'volar': { const p=(t*.16)%1; x=(.05+p*1.0)*w; y=(.82-p*.7)*h; rot=-.3; break; }
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
function scheduleFish(min=18000,max=32000){ nextFishAt=performance.now()+min+Math.random()*(max-min); }
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
    <div class="center">${q.ops.map((o,i)=>`<button class="choice" data-act="pick" data-i="${i}">${o.html}</button>`).join('')}</div>
    <div class="actions">${B('again','speaker',T.otraVez)}</div>`);
  onAct('again',()=>narrar(()=>sayAll([q.texto])));
  narrar(()=>sayAll([T.pezQ, q.texto]));
  let tries=0;
  for(;;){
    const {btn}=await waitAct('pick'); if(!alive()) return;
    const o=q.ops[+btn.dataset.i];
    if(o.ok){
      btn.classList.add('right'); sfx.yay();
      save.puntos=(save.puntos||0)+1; persist(); updateHud();
      delete fishes[lv]; scheduleFish();
      card.querySelector('.fishpic').classList.add('eaten');
      setWait(true);
      await sayAll([q.bien, T.nam, T.tenesPeces(T.peces(save.puntos))]);
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
  if(F.anim==='campanas'){
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
function goLib(mode){
  hush(); show('lib'); libMode=mode;
  const body=$('#libBody'); body.innerHTML='';
  $('#libTitle').textContent = mode==='cuentos' ? T.cuentos : T.practicar;
  CAP_LIST.filter(capAbierto).forEach(c=>{
    const s=capSave(c.id);
    const sec=document.createElement('section'); sec.className='shelf';
    if(mode==='cuentos'){
      sec.innerHTML=`<h3${enAttr(enDe(c.titulo))}>${esc(c.titulo)}</h3><div class="books">${c.orden.filter(k=>c.estaciones[k].cuento).map(k=>{ const st=c.estaciones[k], open=s.sellos[k]; return `<button class="book ${open?'':'locked'}" style="--bc:${st.mostrador||'#4A90E2'}" data-c="${c.id}" data-k="${k}">${img(st.item)}<b>${open?esc(st.cuento.titulo):''}</b>${open?'':ICON.lock}</button>`; }).join('')}</div>`;
    } else {
      sec.innerHTML=`<h3${enAttr(enDe(c.titulo))}>${esc(c.titulo)}</h3>
        <h4>${esc(T.palabras)}</h4><div class="cards">${c.palabras.map(p=>`<button class="pcard" data-c="${c.id}" data-w="${esc(p.id)}">${img(p.arte)}<b>${esc(p.texto)}</b></button>`).join('')}</div>
        <h4>${esc(T.frases)}</h4><div class="cards">${c.frases.map(p=>`<button class="pcard frase" data-c="${c.id}" data-f="${esc(p.id)}">${img(p.arte)}<b>${esc(p.texto)}</b></button>`).join('')}</div>`;
    }
    body.appendChild(sec);
  });
  body.querySelectorAll('.book').forEach(b=>{
    const c=CAP_LIST.find(x=>x.id===b.dataset.c), k=b.dataset.k;
    b.addEventListener('focus',()=>sayAll([capSave(c.id).sellos[k] ? c.estaciones[k].cuento.titulo : T.cerrado]));
    b.addEventListener('click',()=>{ if(!capSave(c.id).sellos[k]){ sayAll([T.abrirCuento(palabraDe(c,k).texto)]); return; } runStory(c,k,true); });
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
  const mine=clips.mia(r.id), shared=!mine && clips.global.has(r.id);
  const pill = mine ? (NUBE.usuario&&NUBE.usuario.admin&&clips.global.has(r.id) ? 'Tu voz · para todos' : 'Tu voz') : shared ? 'Voz compartida' : 'Voz de la compu';
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
function renderCuenta(msg=''){
  const reg=cuentaModo==='registro', f0=$('#cuentaForm'), prev=f0 ? Object.fromEntries(new FormData(f0)) : {};
  $('#scr-cuenta').lang=uiLang; $('#cuentaTit').textContent=G.titulo; $('#cuentaSub').textContent=G.sub;
  $('#cuentaBox').innerHTML=`
    <div class="uilangs" role="group" aria-label="${esc(G.idiomaGrandes)}">${idiomasGrandes().map(c=>`<button type="button" class="uilang ${c===uiLang?'on':''}" data-l="${c}" lang="${c}" aria-pressed="${c===uiLang}"><img src="${svgUri(banderaDe(c))}" alt=""><span>${esc(window.GRANDES[c].nombre)}</span></button>`).join('')}</div>
    <div class="tabs"><button class="tab ${reg?'':'on'}" data-m="entrar">${esc(G.entrar)}</button><button class="tab ${reg?'on':''}" data-m="registro">${esc(G.crear)}</button></div>
    <form id="cuentaForm" class="cform">
      ${reg?`<label>${esc(G.tuNombre)}<input name="nombre" autocomplete="name" maxlength="60" value="${esc(prev.nombre||'')}"></label>`:''}
      <label>${esc(G.email)}<input name="email" type="email" autocomplete="email" required value="${esc(prev.email||'')}"></label>
      <label>${esc(reg?G.claveMin:G.clave)}<input name="clave" type="password" autocomplete="${reg?'new-password':'current-password'}" minlength="${reg?8:1}" required></label>
      <p class="cmsg" ${msg?'':'hidden'}>${esc(msg)}</p>
      <button class="mbtn go" type="submit">${ICON.check}<span>${esc(reg?G.crear:G.entrar)}</span></button>
    </form>
    <p class="note">${esc(reg?G.notaCrear:G.notaEntrar)}</p>
    <button class="linkbtn" id="sinCuenta">${esc(G.sinCuenta)}</button>`;
  $('#cuentaBox').querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{ cuentaModo=b.dataset.m; renderCuenta(); }));
  $('#cuentaBox').querySelectorAll('.uilang').forEach(b=>b.addEventListener('click',()=>{ elegirUi(b.dataset.l); renderCuenta(); }));
  $('#sinCuenta').addEventListener('click',()=>{ NUBE.sinCuenta=true; lsSet(SIN_CUENTA_KEY,'1'); nextStep(); });
  $('#cuentaForm').addEventListener('submit',async e=>{
    e.preventDefault(); const f=new FormData(e.target), btn=e.target.querySelector('button'); btn.disabled=true;
    try{
      const j=await api('sesion',{method:'POST', body:{accion:cuentaModo, email:f.get('email'), clave:f.get('clave'), nombre:f.get('nombre')||''}});
      NUBE.usuario=j.usuario; NUBE.alumnos=j.alumnos||[]; NUBE.sinCuenta=false; lsSet(SIN_CUENTA_KEY,null);
      await clips.cargarNube(); sfx.yay(); nextStep();
    }catch(err){ btn.disabled=false; renderCuenta(errTxt(err)); }
  });
  setTimeout(()=>$('#cuentaBox input[name=email]')?.focus(),60);
}
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
    <div class="prow acctbtns">${u.admin?`<a class="pbtn" href="admin.html" target="_blank" rel="noopener">${esc(G.administrar)}</a>`:''}<button class="pbtn" id="p-kids">${esc(G.cambiar)}</button><button class="pbtn" id="p-logout">${esc(G.salir)}</button></div></div>`;
}
function conectarCuentaParent(){
  $('#p-login')?.addEventListener('click',()=>{ NUBE.sinCuenta=false; lsSet(SIN_CUENTA_KEY,null); closeModal(); goCuenta(); });
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
const juegoAbierto = c => Object.keys(save.caps||{}).some(k=>k.split(':')[1]===c.id && save.caps[k].final);
const juegoGratis = c => ((save.juegos||{})[c.id]||{}).gratis||0;
/* paga la partida (o usa una gratis); false si no alcanzan los peces */
function pagarJuego(c){
  const mj=c.microjuego, g=juegoGratis(c);
  if(g>0){ save.juegos[c.id].gratis=g-1; persist(); return {gratis:true}; }
  const p=save.puntos||0;
  if(p<mj.precio){ sfx.oops(); sayAll([T.noAlcanza(T.peces(mj.precio-p))]); return null; }
  save.puntos=p-mj.precio; persist(); updateNames(); if(CAP && !scr.game.hidden) updateHud();
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
  const own=!!A.tiene[it.id], worn=A.puesto[it.lugar]===it.id, can=(save.puntos||0)>=it.precio;
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
    const p=save.puntos||0;
    if(p<it.precio){ sfx.oops(); const b=$('#shopAct'); b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),450); sayAll([T.noAlcanza(T.peces(it.precio-p))]); return; }
    save.puntos=p-it.precio; A.tiene[it.id]=true; A.puesto[it.lugar]=it.id; persist();
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
  if(!scr.game.hidden){ if(d){ e.preventDefault(); if(!keys.includes(e.key)) keys.push(e.key); } return; }
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
$('#playBtn').addEventListener('click',()=>{ actx(); sfx.yay(); nextStep(); });
$('#langBtn').addEventListener('click',goLangScreen);
$('#nameDel').addEventListener('click',()=>nameKey('⌫'));
$('#nameOk').addEventListener('click',confirmName);
$('#shopBack').addEventListener('click',goHome);
$('#meBtn').addEventListener('click',goPicker);
$('#homeBtn').addEventListener('click',()=>{ if(!modal.hidden) return; if(CAP) savePos(); goHome(); });
$('#ppBtn').addEventListener('click',()=>{ if(modal.hidden) runPassport(); });
$('#libBack').addEventListener('click',goHome);
$('#btnCuentos').addEventListener('click',()=>goLib('cuentos'));
$('#btnPracticar').addEventListener('click',()=>goLib('practicar'));
$('#btnTienda').addEventListener('click',goShop);
$('#btnJuegos').addEventListener('click',goJuegos);
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
});
requestAnimationFrame(frame);
