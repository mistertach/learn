/* =========================================================
   EL CAMINO — el supergame: un recorrido de lado a lado (como un Mario) donde el chico corre, salta, nada y usa sus herramientas.
   Los obstáculos (fuego, un chancho embarrado, un león que ruge, una abeja…) piden una herramienta (agua, burbujas, música),
   y antes de usarla el chico tiene que DECIR la palabra del obstáculo (la misma ventana de «repetí y tocá la estrella»
   que usan las estaciones). Las palabras salen de la Intro (partes A y B), así que repasa lo que ya aprendió.
   Los niveles se abren a medida que sabe más palabras (UMBRALES). No se pierde nunca: si se cae, vuelve al último punto.
   save.camino[id] = {hecho, mejor}
   ========================================================= */
(()=>{
const FILAS=12, GRAV=36, ANCHO=.6, ALTO=.92;
const UMBRALES=[0,15,35,60,90,130];                 // palabras sabidas para abrir cada nivel
/* obstáculos: la palabra de la Intro [grupo, palabra] que hay que decir y la herramienta que lo resuelve */
const OBS={ f:{herr:'agua'}, p:{herr:'agua'}, z:{herr:'musica'}, b:{herr:'burbujas'}, B:{herr:'jefe'} };   // el tipo de baldosa dice qué herramienta pide; la criatura se sortea (camino-obstaculos.js)
const HERR={agua:{emo:'💦', col:'#2E86DE'}, burbujas:{emo:'🫧', col:'#2FBF8F'}, musica:{emo:'🎵', col:'#E8483B'}};
const JEFES=['🐲','🦖','🦈'];
const ESTILOS=[ {cielo:['#8FD3FF','#E9F8FF'], colina:['#9BE08A','#79CC6A'], suelo:['#7ACB5B','#8B6B45'], emo:'🌼'},
                {cielo:['#FFD9A0','#FFF3DC'], colina:['#C7DD7E','#A8C95F'], suelo:['#8DC258','#8A5E3B'], emo:'🐄'},
                {cielo:['#9EE3FF','#FFF6D8'], colina:['#F3DFA2','#E6C97A'], suelo:['#F4D88E','#D9B96B'], emo:'🏖️'} ];

/* lo que se recoge: todo suma pececitos al final */
const ITEMS={c:{e:'🐟',v:1,n:0}, a:{e:'🍎',v:2,n:1}, r:{e:'🍒',v:2,n:2}, s:{e:'⭐',v:3,n:3}, g:{e:'💎',v:5,n:4}};
let ultItem=0;
/* de vez en cuando (no siempre, porque son muchas) el relator dice cómo se llama lo que se comió */
function nombrarItem(it){ const ahora=performance.now(); if(ahora-ultItem<6000||Math.random()>.3) return; const n=(T.caminoItems||[])[it.n]; if(!n) return; ultItem=ahora; sayAll([{t:n,sinTrad:true}]); }
const TODAS=['agua','burbujas','musica'];
/* ---- cómo se arman los niveles ---- */
function armar(W,f){
  const g=Array.from({length:FILAS},()=>Array(W).fill('.')), masc=new Set(), set=(x,y,c)=>{ if(x>=0&&x<W&&y>=0&&y<FILAS) g[y][x]=c; };
  const api={ set,
    suelo:(a,b)=>{ for(let x=a;x<=b;x++){ set(x,10,'#'); set(x,11,'#'); } },
    hueco:(a,b)=>{ for(let x=a;x<=b;x++){ set(x,10,'.'); set(x,11,'.'); } },
    bloque:(x,y,w=1,h=1)=>{ for(let i=0;i<w;i++) for(let j=0;j<h;j++) set(x+i,y+j,'#'); },
    plataforma:(x,y,l)=>{ for(let i=0;i<l;i++) set(x+i,y,'='); },
    fila:(x,y,txt)=>{ [...txt].forEach((ch,i)=>{ if(ch!==' ') set(x+i,y,ch); }); },
    sorpresa:(x,y)=>set(x,y,'?'),                       // se golpea desde abajo y suelta cosas
    obstaculo:(x,ch)=>{ for(let i=0;i<2;i++) for(let j=7;j<=9;j++) set(x+i,j,ch); for(let i=0;i<2;i++) for(let j=0;j<=6;j++) set(x+i,j,'^'); },
    agua:(a,b)=>{ for(let x=a;x<=b;x++) for(let y=8;y<=10;y++){ set(x,y,'~'); masc.add(x+','+y); } },
    jefe:(x)=>{ for(let i=0;i<4;i++){ for(let j=5;j<=9;j++) set(x+i,j,'B'); for(let j=0;j<=4;j++) set(x+i,j,'^'); } },
    resorte:(x)=>set(x,9,'j') };
  f(api); const filas=g.map(r=>r.join('')); filas.agua=masc; return filas;
}
/* los tramos con que se arma cada nivel: cada uno recibe la x donde empieza y devuelve la x donde termina */
const SEG={
  llano:(a,x)=>{ a.fila(x+1,9,'carca'); return x+8; },
  hueco:(a,x)=>{ a.hueco(x+1,x+3); a.fila(x,6,'cacac'); a.fila(x+1,5,'rgr'); return x+8; },
  hueco4:(a,x)=>{ a.hueco(x+1,x+4); a.fila(x,5,'cscsc'); return x+9; },
  escalera:(a,x)=>{ a.fila(x+1,9,'carcarca'); [[1,8],[5,6],[9,4],[13,2]].forEach(([dx,y],i)=>{ a.plataforma(x+dx,y,3); a.fila(x+dx,y-1,['car','sac','rsr','gsg'][i]); });
    a.plataforma(x+17,4,2); a.fila(x+17,3,'cc'); a.plataforma(x+20,6,2); a.fila(x+20,5,'ar'); return x+24; },
  torre:(a,x)=>{ a.plataforma(x,8,2); a.fila(x,7,'ca'); a.bloque(x+4,5,2,5); a.fila(x+4,4,'gsg'); a.plataforma(x+8,7,2); a.fila(x+8,6,'rc'); a.fila(x+11,9,'ca'); return x+13; },
  resorte:(a,x)=>{ a.resorte(x+1); a.plataforma(x+3,3,5); a.fila(x+3,2,'gsgsg'); a.plataforma(x+9,6,2); a.fila(x+9,5,'rr'); return x+12; },
  sorpresas:(a,x)=>{ a.plataforma(x+1,8,2); a.sorpresa(x+4,7); a.sorpresa(x+6,7); a.fila(x+4,6,'c c'); a.fila(x+8,9,'car'); return x+11; },
  cima:(a,x)=>{ [[0,8],[3,6],[6,4],[9,2],[12,4],[15,6],[18,8]].forEach(([dx,y],i)=>{ a.plataforma(x+dx,y,2); a.fila(x+dx,y-1,['c','a','s','g','s','a','c'][i]); }); a.sorpresa(x+9,0); return x+21; },
  bandera:(a,x)=>{ a.set(x+1,9,'K'); return x+3; },
  pileta:(a,x)=>{ a.agua(x+1,x+24); a.fila(x+3,9,'c c c'); a.fila(x+4,10,'a a a'); a.fila(x+13,8,'rsg'); a.fila(x+16,10,'cac'); a.plataforma(x+8,5,4); a.fila(x+8,4,'sgsg'); return x+27; },
  f:(a,x)=>{ a.fila(x,9,'c'); a.obstaculo(x+3,'f'); a.fila(x+7,9,'ca'); return x+10; },
  b:(a,x)=>{ a.fila(x,9,'r'); a.obstaculo(x+3,'b'); a.fila(x+7,9,'cr'); return x+10; },
  z:(a,x)=>{ a.fila(x,9,'c'); a.obstaculo(x+3,'z'); a.fila(x+7,9,'ac'); return x+10; },
  p:(a,x)=>{ a.fila(x,9,'a'); a.obstaculo(x+3,'p'); a.fila(x+7,9,'rc'); return x+10; },
  jefe:(a,x)=>{ a.fila(x,9,'ca'); a.jefe(x+3); return x+11; }
};
const nulo=new Proxy({},{get:()=>()=>{}});
function nivelDe(seq){ let x=6; for(const k of seq) x=SEG[k](nulo,x); const W=x+8;
  return armar(W,a=>{ a.suelo(0,W-1); a.set(2,9,'P'); let x=6; for(const k of seq) x=SEG[k](a,x); a.set(x+2,9,'F'); }); }
const NIVELES=[
  { id:'prado', herr:TODAS, mapa:nivelDe(['llano','hueco','escalera','sorpresas','bandera','f','llano','torre','hueco','b','resorte','bandera','cima','z','sorpresas','hueco4','llano','escalera','f','llano','jefe']) },
  { id:'granja', herr:TODAS, mapa:nivelDe(['llano','p','hueco','torre','escalera','bandera','b','sorpresas','hueco4','cima','bandera','f','resorte','hueco','p','torre','bandera','z','escalera','sorpresas','b','hueco4','llano','f','jefe']) },
  { id:'playa', herr:TODAS, mapa:nivelDe(['llano','z','hueco','escalera','bandera','pileta','llano','sorpresas','f','torre','bandera','b','cima','hueco4','resorte','bandera','pileta','p','escalera','z','sorpresas','hueco','b','torre','f','hueco4','llano','jefe']) }
];
const ESTADO={ nivel:null, S:null, mapa:null, ents:[], parts:[], tok:0, teclas:new Set(), modo:'menu', t0:0, last:0, fish:0, spawn:null, herrIdx:0, ult:0, final:false, saltoPedido:0, obs:{}, vistos:new Set(), agua:new Set(), efecto:null, metaEtapa:0 };
const cv=document.querySelector('#camCv'), menu=document.querySelector('#camMenu');
/* música: un chiptune en bucle por nivel (notas MIDI), con bajo y platillo; se calla cuando habla el relator */
const hz=m=>440*2**((m-69)/12);
const CANCION=[
  { paso:.17, mel:[72,0,76,0,79,0,76,0, 74,0,77,0,81,0,77,0, 72,0,76,79,84,0,79,0, 77,0,74,0,71,0,0,0], bajo:[48,48,43,43,45,45,41,41] },
  { paso:.16, mel:[69,0,72,0,76,0,72,0, 71,0,74,0,77,0,74,0, 72,76,79,0,76,72,69,0, 67,0,71,74,79,0,0,0], bajo:[45,45,41,41,48,48,43,43] },
  { paso:.2,  mel:[67,0,71,0,74,0,79,0, 78,0,74,0,71,0,74,0, 76,0,72,0,67,0,72,0, 71,0,74,0,79,0,0,0], bajo:[43,43,50,50,48,48,43,43] } ];
let musTok=0;
function musica(){ const mi=++musTok; let i=0; const C=CANCION[ESTADO.nivel]||CANCION[0];
  const paso=()=>{ if(mi!==musTok||scr.camino.hidden||ESTADO.modo==='menu'||save.caminoSilencio) return;
    if(ESTADO.modo==='juego'&&modal.hidden){ const n=C.mel[i%C.mel.length]; if(n) tone(hz(n),C.paso*1.6,'square',.028); if(i%4===0) tone(hz(C.bajo[(i>>2)%C.bajo.length]),C.paso*3.2,'triangle',.07); if(i%2===1) noise(.03,.02,7000,4000); }
    i++; setTimeout(paso,C.paso*1000); };
  paso(); }
function alternarSonido(){ save.caminoSilencio=!save.caminoSilencio; window.SONIDO_OFF=!!save.caminoSilencio; persist(); document.querySelector('#camMus').textContent=save.caminoSilencio?'🔇':'🔊'; if(!save.caminoSilencio&&ESTADO.modo!=='menu') musica(); }
document.querySelector('#camMus').addEventListener('click',alternarSonido);
window.CAMINO={ESTADO,usar,fisica,entidades};

const palabrasSabidas=()=>{ const l=langCode()+':n0:'; return Object.keys(save.nivel0||{}).filter(k=>k.startsWith(l)&&save.nivel0[k]).length + repasoPool().pal.length; };
const abierto=i=>pruebaTodo()||save.todoAbierto||palabrasSabidas()>=UMBRALES[i];
const palabraDe=(gi,wi)=>{ const g=n0Grupos()[gi]; return g&&g.palabras.find(w=>w.wi===wi); };

/* ---- el menú de niveles ---- */
window.goCamino=function(){
  hush(); busy=false; show('camino'); ESTADO.tok++; ESTADO.modo='menu'; cv.style.visibility='hidden';
  document.querySelector('#camPad').hidden=true; menu.hidden=false; document.querySelector('#camTitle').textContent=T.camino; musTok++; window.SONIDO_OFF=!!save.caminoSilencio; document.querySelector('#camMus').textContent=save.caminoSilencio?'🔇':'🔊';
  menu.innerHTML=`<div class="camtit">${esc(T.camino)}</div><div class="camst-fila">${NIVELES.map((n,i)=>{ const ab=abierto(i), h=((save.camino||{})[n.id]||{}).hecho;
    return `<button class="camst ${ab?'':'cerr'} ${h?'hecho':''}" data-i="${i}" style="--c:${ESTILOS[i].colina[0]}"><span class="camst-e">${ESTILOS[i].emo}</span><b>${i+1}</b>${ab?'':'<i class="camst-l">🔒</i>'}${h?'<i class="camst-ok">★</i>':''}</button>`; }).join('')}</div>`;
  menu.querySelectorAll('.camst').forEach(b=>b.addEventListener('click',()=>{ const i=+b.dataset.i; if(!abierto(i)){ sfx.oops(); sayAll([T.caminoCerrado]); return; } empezar(i); }));
  setTimeout(()=>menu.querySelector('.camst:not(.cerr)')?.focus(),60);
  sayAll([T.caminoDi]);
};

/* ---- empezar un nivel ---- */
const sorteaHerr=ant=>{ const l=TODAS.filter(h=>h!==ant); return l[Math.floor(Math.random()*l.length)]; };
function empezar(i){
  const N=NIVELES[i], st=ESTADO; st.nivel=i; st.mapa=N.mapa.map(r=>r.split('')); st.ents=[]; st.parts=[]; st.obs={}; st.agua=N.mapa.agua||new Set(); st.efecto=null; st.jefe=null; st.metaEtapa=0; st.premiado=false; st.avanzado=false; st.fish=0; st.herrIdx=0; st.final=false; st.modo='juego'; st.tok++;
  let sx=2, sy=9; st.mapa.forEach((r,y)=>r.forEach((c,x)=>{ if(c==='P'){ sx=x; sy=y; r[x]='.'; } }));
  st.spawn={x:sx+.5, y:sy+1}; st.S={x:sx+.5, y:sy+1, vx:0, vy:0, suelo:false, mira:1, nada:false, saltos:0, coyote:0};
  if(st.mapa.some(r=>r.includes('B'))) st.jefe={hp:3,max:3,herr:sorteaHerr(null),golpe:0};
  menu.hidden=true; cv.style.visibility='visible'; document.querySelector('#camPad').hidden=false; st.last=performance.now(); busy=false;
  pintarHerr(); musica();
}
const W=()=>ESTADO.mapa[0].length;
const tile=(x,y)=>{ const m=ESTADO.mapa; if(x<0||x>=W()) return '#'; if(y<0) return '.'; if(y>=FILAS) return '.'; return m[y][x]; };
const solido=ch=>ch==='#'||ch==='^'||ch==='='||ch==='?'||ch==='u'||!!OBS[ch];
function choca(x,y){ const l=Math.floor(x-ANCHO/2+.001), r=Math.floor(x+ANCHO/2-.001), t=Math.floor(y-ALTO+.001), b=Math.floor(y-.001);
  for(let j=t;j<=b;j++) for(let i=l;i<=r;i++) if(solido(tile(i,j))) return true; return false; }
const enAgua=(x,y)=>ESTADO.agua.has(Math.floor(x)+','+Math.floor(y-ALTO/2));

/* ---- teclas y botones ---- */
const K=ESTADO.teclas;
const mapaTecla={ArrowLeft:'izq',a:'izq',A:'izq',ArrowRight:'der',d:'der',D:'der',ArrowUp:'salto',w:'salto',W:'salto',' ':'salto',ArrowDown:'abajo',s:'abajo',S:'abajo',Shift:'corre',e:'usa',E:'usa',Enter:'usa',q:'cambia',Q:'cambia',Tab:'cambia'};
window.addEventListener('keydown',e=>{ if(scr.camino.hidden||ESTADO.modo!=='juego'||!modal.hidden) return; const k=mapaTecla[e.key]; if(!k) return; e.preventDefault(); if(!K.has(k)){ K.add(k); if(k==='salto') ESTADO.saltoPedido=performance.now(); if(k==='usa') usar(); if(k==='cambia') cambiar(); } });
window.addEventListener('keydown',e=>{ if((e.key==='m'||e.key==='M')&&!scr.camino.hidden&&modal.hidden){ e.preventDefault(); alternarSonido(); } });
window.addEventListener('keyup',e=>{ const k=mapaTecla[e.key]; if(k) K.delete(k); });
window.addEventListener('blur',()=>K.clear());
document.querySelectorAll('#camPad [data-k]').forEach(b=>{ const k=b.dataset.k;
  b.addEventListener('pointerdown',e=>{ e.preventDefault(); if(ESTADO.modo!=='juego'||!modal.hidden) return; actx(); if(k==='corre'){ K.has('corre')?K.delete('corre'):K.add('corre'); b.classList.toggle('on',K.has('corre')); return; } K.add(k); if(k==='salto') ESTADO.saltoPedido=performance.now(); if(k==='usa') usar(); if(k==='cambia') cambiar(); });
  if(k!=='corre') ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>K.delete(k))); });
document.querySelector('#camBack').addEventListener('click',()=>{ if(ESTADO.modo==='juego'){ ESTADO.modo='menu'; goCamino(); } else { ESTADO.tok++; goHome(); } });

function defObs(ch,x,y){ const ts=mancha(ch,x,y), k=Math.min(...ts.map(a=>a[0]))+','+Math.min(...ts.map(a=>a[1])), st=ESTADO; if(st.obs[k]) return st.obs[k];
  const herr=OBS[ch].herr, pool=(window.CAMINO_OBS||{})[herr]||[]; let libres=pool.filter((d,i)=>!st.vistos.has(herr+i)); if(!libres.length){ pool.forEach((d,i)=>st.vistos.delete(herr+i)); libres=pool; }
  const d=libres[Math.floor(Math.random()*libres.length)]; st.vistos.add(herr+pool.indexOf(d));
  return st.obs[k]={e:d[2],gi:d[0],wi:d[1],fr:d[3],herr}; }
function herramientas(){ return NIVELES[ESTADO.nivel].herr; }
function pintarHerr(){ const e=HERR[herramientas()[ESTADO.herrIdx]].emo; document.querySelector('#camHerr').textContent=e; document.querySelector('#camPad .usa').textContent=e; }
function cambiar(){ const h=herramientas(); ESTADO.herrIdx=(ESTADO.herrIdx+1)%h.length; pintarHerr(); sfx.gadgetSwitch(); }
document.querySelector('#camHerr').addEventListener('click',()=>{ if(ESTADO.modo==='juego') cambiar(); });
/* ---- usar la herramienta ---- */
function objetivo(){ const S=ESTADO.S; const dx=S.mira; for(let d=1;d<=6;d++){ const x=Math.floor(S.x+dx*d); for(let y=4;y<=9;y++){ const c=tile(x,y); if(OBS[c]) return {c,x,y}; } } return null; }
function mancha(ch,x,y){ // todas las baldosas contiguas del mismo obstáculo
  const m=ESTADO.mapa, pila=[[x,y]], vis=new Set(), out=[];
  while(pila.length){ const [a,b]=pila.pop(), k=a+','+b; if(vis.has(k)||a<0||b<0||a>=W()||b>=FILAS||m[b][a]!==ch) continue; vis.add(k); out.push([a,b]); pila.push([a+1,b],[a-1,b],[a,b+1],[a,b-1]); } return out; }
async function puerta(centro, dilo, tok){
  openModal(shell({center:`<div class="stack">${centro}${turnHtml()}</div>`, actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')}));
  liveMe(); onAct('again',()=>narrar(dilo)); narrar(async()=>{ if(await dilo()) await sayAll([T.estrella]); });
  await starPress(); return tok===flowTok;
}
const decirTexto=(txt,id)=>async()=>{ const my=++seqTok; mark('all'); if(!(await sayAll([{t:txt,id,sinTrad:true}]))) return false; if(!(await waitTurn(txt,my))) return false; mark('none'); return true; };
async function usarJefe(h,ob){
  const st=ESTADO, J=st.jefe; if(!J||st.modo!=='juego') return;
  if(h!==J.herr){ disparo(h,ob); sfx.oops(); sayAll([T[{agua:'caminoAgua',burbujas:'caminoBurbujas',musica:'caminoMusica'}[J.herr]]]); return; }
  const pool=(window.CAMINO_OBS||{})[h]||[], d=pool[Math.floor(Math.random()*pool.length)], w=d&&palabraDe(d[0],d[1]);
  st.modo='habla'; K.clear(); const tok=++flowTok; busy=true;
  if(w && !(await puerta(`<div class="n0-big" style="--ac:${NIVEL0_COLORES[d[0]]||'#2E86DE'}">${n0Dibujo(d[0],d[1])}</div>`+chipsPhrase({texto:w.texto,partes:[w.texto]}), decirTexto(w.texto,w.id), tok))) return;
  closeModal(); busy=false; st.last=performance.now(); st.modo='efecto'; st.efecto={ob,O:{boss:true,herr:h},h,t:0,s:0};
}
function golpeJefe(ef){
  const st=ESTADO, J=st.jefe; J.hp--; J.golpe=1; sfx.stamp();
  const cx=ef.ob.x+.5, cy=7; for(let i=0;i<10;i++) st.parts.push({e:['💥','⭐','✨'][i%3],s:.9,x:cx+(Math.random()-.5)*3,y:cy+(Math.random()-.5)*3,vx:(Math.random()-.5)*5,vy:-2-Math.random()*3,v:1,g:true});
  if(J.hp>0){ J.herr=sorteaHerr(J.herr); sayAll([praise()]); return; }
  const tiles=mancha('B',ef.ob.x,ef.ob.y); let mx=0; tiles.forEach(([a,b])=>{ st.mapa[b][a]='.'; mx+=a; }); mx/=tiles.length;
  st.ents.push({tipo:'jefe',e:JEFES[st.nivel]||'🐲',x:mx+.5,y:7,t:0}); st.jefe=null; sfx.yay();
  [...'sgsgsgs'].forEach((ch,i)=>{ const xx=Math.floor(mx)-3+i; if(st.mapa[9][xx]==='.') st.mapa[9][xx]=ch; });
  sayAll([T.caminoJefeFin]);
}
async function usar(){
  const st=ESTADO, S=st.S, h=herramientas()[st.herrIdx], ob=objetivo(); if(st.modo!=='juego'||!modal.hidden) return;
  if(!ob){ disparo(h,null); return; }
  if(ob.c==='B') return usarJefe(h,ob);
  const O=defObs(ob.c,ob.x,ob.y);
  if(O.herr!==h){ disparo(h,ob); sfx.oops(); sayAll([T[{agua:'caminoAgua',burbujas:'caminoBurbujas',musica:'caminoMusica'}[O.herr]]]); return; }
  // primero el chico dice la palabra y después la frase; recién entonces la herramienta funciona
  const w=palabraDe(O.gi,O.wi), frase=O.fr!=null ? (T.caminoFrases||[])[O.fr] : (w ? T.mira(w.texto) : null);
  st.modo='habla'; K.clear(); const tok=++flowTok; busy=true;
  const pic=`<div class="n0-big" style="--ac:${NIVEL0_COLORES[O.gi]||'#2E86DE'}">${n0Dibujo(O.gi,O.wi)}</div>`;
  if(w && !(await puerta(pic+chipsPhrase({texto:w.texto,partes:[w.texto]}), decirTexto(w.texto,w.id), tok))) return;
  if(frase && !(await puerta(pic+chipsPhrase({texto:frase,partes:[frase]}), decirTexto(frase), tok))) return;
  closeModal(); busy=false; st.last=performance.now(); st.modo='efecto'; st.efecto={ob,O,h,t:0,s:0};
}
function resolver(ob,O){
  const st=ESTADO; const tiles=mancha(ob.c,ob.x,ob.y); let cx=0, cy=0; tiles.forEach(([a,b])=>{ cx+=a+.5; cy+=b+.5; st.mapa[b][a]='.'; }); cx/=tiles.length; cy/=tiles.length;
  st.ents.push({tipo:O.herr,e:O.fr===0?'💨':O.e,x:cx,y:cy,t:0});
  for(let i=0;i<8;i++) st.parts.push({e:O.fr===0?'💨':'✨',x:cx+(Math.random()-.5)*2,y:cy+(Math.random()-.5)*2,vx:(Math.random()-.5)*2,vy:-1-Math.random()*2,v:1.2});
  const fy=Math.min(9,Math.floor(cy)+1); for(let i=0;i<3;i++){ const xx=Math.max(0,Math.floor(cx-1)+i); if(st.mapa[fy][xx]==='.') st.mapa[fy][xx]='c'; }
  sfx.yay();
}
function disparo(h,ob){
  const st=ESTADO, S=st.S, dir=S.mira; gadgetShootAnim=performance.now();
  const d=ob?Math.max(1.5,Math.abs(ob.x+.5-S.x)-.3):4, n=h==='musica'?3:6;
  for(let i=0;i<n;i++){ const r=Math.random();
    st.parts.push(h==='agua' ? {e:'💧',s:.7,x:S.x+dir*.6,y:S.y-.6,vx:dir*(d/.6)*(.85+r*.3),vy:-4-r*2,v:.75,g:true}
    : h==='burbujas' ? {e:'🫧',s:.9+r*.5,x:S.x+dir*.6,y:S.y-.7,vx:dir*(d/1.2)*(.85+r*.3),vy:-.4-r,v:1.3}
    : {e:['🎵','🎶'][i%2],s:1,x:S.x+dir*.5,y:S.y-1,vx:dir*(d/1.1)*(.85+r*.3),vy:-1.2-r,v:1.2}); }
  if(h==='agua') sfx.splash(); else if(h==='burbujas') sfx.bubble(); else sfx.music();
}

/* ---- el mundo cada cuadro ---- */
function coger(i,j,st){ const ch=st.mapa[j]&&st.mapa[j][i], it=ITEMS[ch]; if(!it) return; st.mapa[j][i]='.'; st.fish+=it.v; sfx.tick(); nombrarItem(it); st.parts.push({e:it.e,x:i+.5,y:j+.5,vx:0,vy:-3,v:.5},{e:'+'+it.v,x:i+.5,y:j-.2,vx:0,vy:-1.5,v:.7}); }
function golpe(i,j,st){ // la cabeza pegó contra el bloque (i,j): lo de arriba cae en la mochila
  const ch=st.mapa[j][i];
  if(ch==='?'){ st.mapa[j][i]='u'; sfx.star(); const ks=Object.keys(ITEMS); for(let n=0;n<3;n++){ const k=ks[Math.floor(Math.random()*ks.length)], it=ITEMS[k]; st.fish+=it.v; st.parts.push({e:it.e,x:i+.5+(n-1)*.5,y:j-.3,vx:(n-1)*1.2,vy:-5-n,v:.9,g:true}); } }
  else if(ch==='#'||ch==='='||ch==='u'){ st.parts.push({e:'✨',x:i+.5,y:j+.7,vx:0,vy:1,v:.3}); }
  if(ITEMS[st.mapa[j-1]&&st.mapa[j-1][i]]) coger(i,j-1,st);
  if(ITEMS[st.mapa[j-1]&&st.mapa[j-1][i-1]]&&false) coger(i-1,j-1,st); }
function fisica(dt){
  const st=ESTADO, S=st.S, agua=enAgua(S.x,S.y);
  const quiere=(K.has('der')?1:0)-(K.has('izq')?1:0); if(quiere) S.mira=quiere;
  S.nada=agua;
  const vel=agua?3.6:(K.has('corre')?8.6:5);
  S.vx+=(quiere*vel-S.vx)*Math.min(1,dt*14);
  const pide=st.saltoPedido&&performance.now()-st.saltoPedido<160;
  if(agua){ const v=(K.has('abajo')?1:0)-((K.has('salto'))?1:0); S.vy+=((v*3.4)-S.vy)*Math.min(1,dt*6); S.vy+=GRAV*.04*dt; S.saltos=1; st.saltoPedido=0; }
  else { S.vy+=GRAV*dt; if(S.vy>22) S.vy=22;
    if(S.suelo){ S.saltos=0; S.coyote=.1; } else { S.coyote-=dt; if(S.coyote<=0&&S.saltos===0) S.saltos=1; }
    if(pide){ if(S.suelo||S.coyote>0){ S.vy=-13; S.suelo=false; S.coyote=0; S.saltos=1; st.saltoPedido=0; tone(520,.09,'triangle',.08,0,300); }
      else if(S.saltos<2){ S.vy=-12.2; S.saltos=2; st.saltoPedido=0; tone(700,.1,'triangle',.08,0,1000); for(let i=0;i<4;i++) st.parts.push({e:'💨',x:S.x+(i-1.5)*.25,y:S.y,vx:(i-1.5)*.8,vy:.6,v:.35}); } }
    else if(S.salidaAgua&&K.has('salto')){ S.vy=-9; S.salidaAgua=false; } }
  S.salidaAgua=agua;
  const dx=S.vx*dt; if(dx){ const nx=S.x+dx; if(!choca(nx,S.y)) S.x=nx; else S.vx=0; }
  S.suelo=false; const ny=S.y+S.vy*dt;
  if(!choca(S.x,ny)) S.y=ny;
  else { if(S.vy>0){ S.y=Math.floor(ny); S.suelo=true; }
    else { const j=Math.floor(ny-ALTO), l=Math.floor(S.x-ANCHO/2+.001), r=Math.floor(S.x+ANCHO/2-.001); for(let i=l;i<=r;i++) if(solido(tile(i,j))) golpe(i,j,st); S.y=j+1+ALTO; }
    S.vy=0; }
  if(S.suelo && tile(Math.floor(S.x),Math.floor(S.y-.1))==='j'){ S.vy=-21; S.suelo=false; S.saltos=1; tone(300,.15,'sine',.1,0,900); }
  if(S.x<ANCHO/2) S.x=ANCHO/2;
  for(let j=Math.floor(S.y-ALTO);j<=Math.floor(S.y-.1);j++) for(let i=Math.floor(S.x-.4);i<=Math.floor(S.x+.4);i++){ const c=tile(i,j);
    if(ITEMS[c]) coger(i,j,st);
    else if(c==='K' && (st.spawn.x<i+.5)){ st.spawn={x:i+.5,y:j+1}; st.parts.push({e:'🚩',x:i+.5,y:j-.5,vx:0,vy:-2,v:1}); sfx.star(); }
    else if(c==='F' && !st.final){ st.final=true; meta(); } }
  if(S.y>FILAS+3){ S.x=st.spawn.x; S.y=st.spawn.y; S.vx=S.vy=0; sfx.oops(); }
}
function entidades(dt){
  const st=ESTADO, ef=st.efecto;
  if(ef){ ef.t+=dt; ef.s-=dt; if(ef.s<=0){ disparo(ef.h,ef.ob); ef.s=.14; } if(ef.t>1.6){ st.efecto=null; st.modo='juego'; if(ef.O.boss) golpeJefe(ef); else { resolver(ef.ob,ef.O); sayAll([praise()]); } } }
  for(const p of st.parts){ p.v-=dt; p.x+=p.vx*dt; p.y+=p.vy*dt; if(p.g) p.vy+=18*dt; else p.vy*=1-dt*.6; }
  st.parts=st.parts.filter(p=>p.v>0);
  for(const e of st.ents){ e.t+=dt; if(e.tipo==='agua') e.y-=.3*dt; else if(e.tipo==='burbujas') e.y-=1.8*dt; else if(e.tipo==='jefe') e.y-=1.2*dt; else e.x+=1.2*dt; }
  if(st.jefe&&st.jefe.golpe>0) st.jefe.golpe-=dt*2;
  st.ents=st.ents.filter(e=>e.t<2.5);
}
async function meta(){
  const st=ESTADO, N=NIVELES[st.nivel]; st.modo='habla'; K.clear(); busy=true; sfx.yay();
  const tok=++flowTok, alive=()=>tok===flowTok;
  const {fra}=repasoPool(); const f=fra.length?fra[Math.floor(Math.random()*fra.length)]:null, w=palabraDe(1,4);
  if(f){ openModal(shell({center:`<div class="stack">${chipsPhrase(f)}${turnHtml()}</div>`, actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')})); liveMe(); onAct('again',()=>narrar(()=>construirFrase(f,[]))); narrar(async()=>{ await sayAll([T.caminoFin]); if(await construirFrase(f)) await sayAll([T.estrella]); }); }
  else if(w){ openModal(shell({center:`<div class="stack"><div class="n0-big">${n0Dibujo(1,4)}</div>${chipsWord(w)}${turnHtml()}</div>`, actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')})); liveMe(); onAct('again',()=>narrar(()=>decir(w))); narrar(async()=>{ await sayAll([T.caminoFin]); await decir(w); }); }
  await starPress(); if(!alive()) return;
  const premio=premiar();
  const col=['#FFC93C','#FF6F8F','#2E86DE','#2FBF8F','#8B6FE8','#FF9B3D'];
  openModal(`${X_BTN}<div class="confeti">${[...Array(28)].map((_,i)=>`<i style="left:${(i*37)%100}%;background:${col[i%6]};animation-delay:${(i%9)*.18}s"></i>`).join('')}</div><h3 class="stitle">${ESTILOS[st.nivel].emo} ${st.fish} 🐟</h3><div class="actions">${B('back','back',T.seguir,'go')}</div>`);
  sfx.stamp(); await narrar(()=>sayAll([praise(true), T.premio(T.peces(premio||1))])); if(!alive()) return;
  await waitAct('back'); avanzar();
}
/* el premio se da una sola vez, y se avanza pase lo que pase (también si el chico cierra la ventana con la ✕) */
function premiar(){ const st=ESTADO, N=NIVELES[st.nivel]; if(st.premiado) return 0; st.premiado=true;
  const c=save.camino||(save.camino={}), r=c[N.id]||(c[N.id]={hecho:false,mejor:0}), primera=!r.hecho; r.hecho=true; r.mejor=Math.max(r.mejor||0,st.fish);
  const premio=primera?5:1; save.puntos=(save.puntos||0)+premio+Math.min(3,Math.floor(st.fish/5)); persist(); updateNames(); return premio; }
function avanzar(){ const st=ESTADO; if(st.avanzado) return; st.avanzado=true; if(!modal.hidden) closeModal(); busy=false;
  const sig=st.nivel+1; if(sig>=NIVELES.length){ st.modo='menu'; goHome(); } else if(abierto(sig)) empezar(sig); else goCamino(); }

/* ---- dibujo ---- */
function dibujar(c,w,h,t){
  const st=ESTADO, S=st.S, T=h/FILAS, vistas=w/T, E=ESTILOS[st.nivel];
  const camX=Math.max(0,Math.min(W()-vistas, S.x-vistas*.38));
  const X=x=>(x-camX)*T, Y=y=>y*T;
  const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,E.cielo[0]); g.addColorStop(1,E.cielo[1]); c.fillStyle=g; c.fillRect(0,0,w,h);
  // nubes y colinas (se mueven más despacio)
  c.font=`${Math.round(T*1.3)}px sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.globalAlpha=.85;
  for(let i=0;i<9;i++){ const x=((i*13.7)-camX*.3)%(vistas+8)-2; c.fillText('☁️',((x+vistas+8)%(vistas+8)-2)*T,T*(1.2+(i%3)*.9)); } c.globalAlpha=1;
  for(const [k,col] of [[.5,E.colina[0]],[.7,E.colina[1]]]){ c.fillStyle=col; c.beginPath(); c.moveTo(0,h); for(let x=0;x<=w;x+=20){ const wx=x/T+camX*k; c.lineTo(x,h*.72+Math.sin(wx*.35*(k+.3))*T*(1.2/k)*.5-k*T*1.5); } c.lineTo(w,h); c.fill(); }
  // casillas
  const i0=Math.max(0,Math.floor(camX)-1), i1=Math.min(W()-1,Math.ceil(camX+vistas)+1);
  for(let y=0;y<FILAS;y++) for(let x=i0;x<=i1;x++){ const ch=tile(x,y), px=X(x), py=Y(y);
    if(st.agua.has(x+','+y)){ c.fillStyle='rgba(60,170,240,.55)'; c.fillRect(px,py,T+.5,T+.5); if(!st.agua.has(x+','+(y-1))){ c.fillStyle='rgba(255,255,255,.55)'; c.fillRect(px,py,T+.5,T*.1+Math.sin(t*3+x)*T*.03); } }
    if(ch==='^'||ch==='~') continue;
    if(ch==='#'){ const arriba=tile(x,y-1)!=='#'&&tile(x,y-1)!=='^'; c.fillStyle=E.suelo[1]; c.fillRect(px,py,T+.5,T+.5); if(arriba){ c.fillStyle=E.suelo[0]; c.fillRect(px,py,T+.5,T*.3); } else if((x+y)%3===0){ c.fillStyle='rgba(0,0,0,.08)'; c.fillRect(px+T*.2,py+T*.3,T*.3,T*.2); } }
    else if(ch==='='){ c.fillStyle='#C99349'; rr(c,px,py,T+.5,T*.4,T*.1); c.fill(); c.fillStyle='#E3B27C'; c.fillRect(px,py,T+.5,T*.12); }
    else if(ch==='~'){ c.fillStyle='rgba(60,170,240,.55)'; c.fillRect(px,py,T+.5,T+.5); if(tile(x,y-1)!=='~'){ c.fillStyle='rgba(255,255,255,.55)'; c.fillRect(px,py,T+.5,T*.1+Math.sin(t*3+x)*T*.03); } }
    else if(ITEMS[ch]){ c.font=`${Math.round(T*.75)}px sans-serif`; c.fillText(ITEMS[ch].e,px+T/2,py+T/2+Math.sin(t*4+x)*T*.08); }
    else if(ch==='?'||ch==='u'){ c.fillStyle=ch==='?'?'#FFC93C':'#B98B5C'; rr(c,px+1,py+1,T-2,T-2,T*.14); c.fill(); c.strokeStyle=ch==='?'?'#C88A00':'#8A6540'; c.lineWidth=3; c.stroke(); if(ch==='?'){ c.fillStyle='#fff'; c.font=`800 ${Math.round(T*.7)}px 'Baloo 2',sans-serif`; c.fillText('?',px+T/2,py+T/2+Math.sin(t*5+x)*T*.04); } }
    else if(ch==='K'){ c.font=`${Math.round(T*.9)}px sans-serif`; c.fillText(st.spawn.x>x+.4?'🚩':'🏳️',px+T/2,py+T/2); }
    else if(ch==='F'){ c.font=`${Math.round(T*1.6)}px sans-serif`; c.fillText('🏁',px+T/2,py+T*.2); c.fillStyle='#fff'; c.fillRect(px+T*.45,py+T*.3,T*.1,T*3); }
    else if(ch==='j'){ c.fillStyle='#E8483B'; rr(c,px+T*.1,py+T*.6,T*.8,T*.4,T*.12); c.fill(); c.fillStyle='#fff'; c.fillRect(px+T*.2,py+T*.78,T*.6,T*.06); }
  }
  // obstáculos (una sola figura por mancha)
  const hechos=new Set();
  if(st.jefe){ const J=st.jefe; let bx=-1; for(let x=i0;x<=i1;x++) if(tile(x,6)==='B'){ bx=x; break; }
    if(bx>=0){ const cx=bx+2, sh=J.golpe>0?Math.sin(t*50)*T*.2:Math.sin(t*2)*T*.08; c.globalAlpha=J.golpe>0?.7:1; c.font=`${Math.round(T*5)}px sans-serif`; c.fillText(JEFES[st.nivel]||'🐲',X(cx)+sh,Y(7.4)); c.globalAlpha=1;
      c.font=`${Math.round(T*.7)}px sans-serif`; c.fillText('❤️'.repeat(J.hp)+'🖤'.repeat(J.max-J.hp),X(cx),Y(2.6));
      c.fillStyle='rgba(255,255,255,.9)'; rr(c,X(cx)-T*.9,Y(.6),T*1.8,T*1.6,T*.4); c.fill(); c.font=`${Math.round(T*1.1)}px sans-serif`; c.fillStyle='#000'; c.fillText(HERR[J.herr].emo,X(cx),Y(1.4)+Math.sin(t*5)*T*.1); } }
  for(let y=0;y<FILAS;y++) for(let x=i0;x<=i1;x++){ const ch=tile(x,y); if(!OBS[ch]||ch==='B'||hechos.has(x+','+y)) continue; const ts=mancha(ch,x,y); ts.forEach(([a,b])=>hechos.add(a+','+b));
    const ys=ts.map(a=>a[1]), xs=ts.map(a=>a[0]), cx=(Math.min(...xs)+Math.max(...xs)+1)/2, cy=Math.max(...ys.filter(v=>v>=7))+1;
    const O=defObs(ch,x,y), mira=objetivo(), cerca=mira&&mira.c===ch, k=1+(cerca?.06*Math.sin(t*8):0);
    const ef=st.efecto, mio=ef&&ts.some(a=>a[0]===ef.ob.x&&a[1]===ef.ob.y), tr=mio?Math.sin(t*45)*T*.08:0;
    c.font=`${Math.round(T*2.4*k)}px sans-serif`; c.fillStyle='#000'; c.fillText(O.e,X(cx)+tr,Y(cy)-T*1.2+(ch==='f'?Math.sin(t*10)*T*.05:0));
    if(mio){ c.globalAlpha=Math.min(1,ef.t/1.2)*.85; c.font=`${Math.round(T*(1.2+ef.t))}px sans-serif`; c.fillText(HERR[ef.h].emo,X(cx),Y(cy)-T*1.4); c.globalAlpha=1; }
    if(cerca){ c.font=`${Math.round(T*.8)}px sans-serif`; c.fillText(HERR[O.herr].emo,X(cx),Y(cy)-T*3.1+Math.sin(t*5)*T*.1); } }
  // lo que ya se resolvió: el obstáculo se va contento
  for(const e of st.ents){ c.globalAlpha=Math.max(0,1-e.t/2.5); c.font=`${Math.round(T*2)}px sans-serif`; if(e.tipo==='jefe'){ c.font=`${Math.round(T*5)}px sans-serif`; c.save(); c.translate(X(e.x),Y(e.y)); c.rotate(e.t*8); c.fillText(e.e,0,0); c.restore(); c.globalAlpha=1; continue; }
    const bote=e.tipo==='agua'?Math.abs(Math.sin(e.t*9))*T*.4:0, bam=e.tipo==='musica'?Math.sin(e.t*12)*T*.2:0;
    c.fillText(e.e,X(e.x)+bam,Y(e.y)-bote); if(e.tipo==='burbujas'){ c.font=`${Math.round(T*2.6)}px sans-serif`; c.fillText('🫧',X(e.x),Y(e.y)); } if(e.tipo==='agua'&&e.e!=='💨'){ c.font=`${Math.round(T*1)}px sans-serif`; c.fillText('✨',X(e.x)+T*.7,Y(e.y)-T*.6); } c.globalAlpha=1; }
  // el chico
  const caminando=Math.abs(S.vx)>.5&&S.suelo;
  drawHero(c,X(S.x),Y(S.y),T*1.45,{t,walk:caminando||S.nada&&Math.abs(S.vx)>.3,facing:S.mira,nada:S.nada,accion:!S.suelo&&!S.nada?'saltar':(K.has('corre')&&caminando?'correr':null),backpack:true});
  // partículas
  c.textAlign='center'; for(const p of st.parts){ c.globalAlpha=Math.min(1,p.v*2); c.font=`${Math.round(T*(p.s||.5))}px sans-serif`; c.fillText(p.e,X(p.x),Y(p.y)); } c.globalAlpha=1;
  // marcador
  c.fillStyle='rgba(255,255,255,.88)'; rr(c,10,10,T*3,T*.9,T*.3); c.fill(); c.fillStyle='#22314F'; c.font=`800 ${Math.round(T*.55)}px 'Baloo 2',sans-serif`; c.textAlign='left'; c.fillText(`🐟 ${st.fish}`,10+T*.3,10+T*.47); c.textAlign='center';
  const prog=Math.min(1,S.x/W()); c.fillStyle='rgba(255,255,255,.7)'; rr(c,w-T*4-10,10,T*4,T*.3,T*.15); c.fill(); c.fillStyle='#2FBF8F'; rr(c,w-T*4-10,10,T*4*prog,T*.3,T*.15); c.fill();
}
live(cv,(c,w,h,t)=>{
  const st=ESTADO; if(scr.camino.hidden||st.modo==='menu'||!st.S) return;
  const ahora=performance.now(); let dt=Math.min(.033,(ahora-(st.last||ahora))/1000); st.last=ahora;
  if(st.modo==='habla'&&modal.hidden){ if(st.final){ premiar(); avanzar(); return; } st.modo='juego'; busy=false; st.last=ahora; }   // cerró la ventana con la ✕: el juego sigue
  if(st.modo==='juego'&&modal.hidden){ fisica(dt/2); fisica(dt/2); }
  if(st.modo==='juego'||st.modo==='efecto') entidades(dt);
  dibujar(c,w,h,t);
});
})();
