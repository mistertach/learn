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
const OBS={ f:{emo:'🔥', gi:24, wi:5, herr:'agua'},        // el fuego
            p:{emo:'🐖', gi:9,  wi:1, herr:'agua'},        // el cerdo, embarrado
            z:{emo:'🦁', gi:10, wi:3, herr:'musica'},      // el león que ruge
            b:{emo:'🐝', gi:11, wi:2, herr:'burbujas'} };  // la abeja
const HERR={agua:{emo:'💦', col:'#2E86DE'}, burbujas:{emo:'🫧', col:'#2FBF8F'}, musica:{emo:'🎵', col:'#E8483B'}};
const ESTILOS=[ {cielo:['#8FD3FF','#E9F8FF'], colina:['#9BE08A','#79CC6A'], suelo:['#7ACB5B','#8B6B45'], emo:'🌼'},
                {cielo:['#FFD9A0','#FFF3DC'], colina:['#C7DD7E','#A8C95F'], suelo:['#8DC258','#8A5E3B'], emo:'🐄'},
                {cielo:['#9EE3FF','#FFF6D8'], colina:['#F3DFA2','#E6C97A'], suelo:['#F4D88E','#D9B96B'], emo:'🏖️'} ];

/* ---- cómo se arman los niveles ---- */
function armar(W,f){
  const g=Array.from({length:FILAS},()=>Array(W).fill('.')), set=(x,y,c)=>{ if(x>=0&&x<W&&y>=0&&y<FILAS) g[y][x]=c; };
  const api={ set,
    suelo:(a,b)=>{ for(let x=a;x<=b;x++){ set(x,10,'#'); set(x,11,'#'); } },
    hueco:(a,b)=>{ for(let x=a;x<=b;x++){ set(x,10,'.'); set(x,11,'.'); } },
    bloque:(x,y,w=1,h=1)=>{ for(let i=0;i<w;i++) for(let j=0;j<h;j++) set(x+i,y+j,'#'); },
    plataforma:(x,y,l)=>{ for(let i=0;i<l;i++) set(x+i,y,'='); },
    monedas:(x,y,n,dx=1)=>{ for(let i=0;i<n;i++) set(x+i*dx,y,'c'); },
    obstaculo:(x,ch)=>{ for(let i=0;i<2;i++) for(let j=7;j<=9;j++) set(x+i,j,ch); for(let i=0;i<2;i++) for(let j=0;j<=6;j++) set(x+i,j,'^'); },   // 2 de ancho, 3 de alto, con techo (no se pasa por arriba)
    agua:(a,b)=>{ for(let x=a;x<=b;x++){ set(x,10,'~'); set(x,9,'~'); set(x,8,'~'); } },
    resorte:(x)=>set(x,9,'j') };
  f(api); return g.map(r=>r.join(''));
}
const NIVELES=[
  { id:'prado', herr:['agua'], mapa:armar(80,a=>{ a.suelo(0,79); a.set(2,9,'P');
      a.monedas(6,8,3); a.hueco(16,18); a.monedas(15,6,5); a.plataforma(24,8,3); a.monedas(24,7,3); a.bloque(30,9,2); a.monedas(31,8,2);
      a.resorte(36); a.plataforma(38,6,4); a.monedas(38,5,4); a.hueco(46,48); a.monedas(45,7,5); a.set(52,9,'K'); a.monedas(55,9,3);
      a.obstaculo(60,'f'); a.monedas(65,9,4); a.hueco(70,72); a.monedas(69,7,5); a.set(76,9,'F'); }) },
  { id:'granja', herr:['agua','burbujas'], mapa:armar(96,a=>{ a.suelo(0,95); a.set(2,9,'P');
      a.monedas(6,9,4); a.hueco(14,16); a.monedas(13,7,5); a.plataforma(22,8,3); a.monedas(22,7,3); a.set(28,9,'K');
      a.obstaculo(34,'p'); a.monedas(39,9,4); a.bloque(46,9,3); a.monedas(46,8,3); a.hueco(54,56); a.monedas(53,6,5); a.plataforma(60,7,4); a.monedas(60,6,4);
      a.set(66,9,'K'); a.obstaculo(70,'f'); a.monedas(75,9,3); a.obstaculo(80,'b'); a.monedas(85,9,4); a.set(91,9,'F'); }) },
  { id:'playa', herr:['agua','burbujas','musica'], mapa:armar(104,a=>{ a.suelo(0,103); a.set(2,9,'P');
      a.monedas(6,9,4); a.hueco(14,16); a.monedas(13,7,5); a.set(22,9,'K'); a.obstaculo(28,'z'); a.monedas(33,9,3);
      // la pileta: se nada de un lado al otro
      for(let x=38;x<=64;x++){ a.set(x,10,'~'); } a.agua(38,64); a.monedas(40,9,3,3); a.monedas(41,10,3,3); a.monedas(52,8,3,3);
      a.set(68,9,'K'); a.monedas(70,9,3); a.obstaculo(76,'f'); a.monedas(81,9,3); a.hueco(88,90); a.monedas(87,7,5); a.set(98,9,'F'); }) }
];
const ESTADO={ nivel:null, S:null, mapa:null, ents:[], parts:[], tok:0, teclas:new Set(), modo:'menu', t0:0, last:0, fish:0, spawn:null, herrIdx:0, ult:0, final:false };
const cv=document.querySelector('#camCv'), menu=document.querySelector('#camMenu');
window.CAMINO={ESTADO,usar,fisica,entidades};

const palabrasSabidas=()=>{ const l=langCode()+':n0:'; return Object.keys(save.nivel0||{}).filter(k=>k.startsWith(l)&&save.nivel0[k]).length + repasoPool().pal.length; };
const abierto=i=>pruebaTodo()||save.todoAbierto||palabrasSabidas()>=UMBRALES[i];
const palabraDe=(gi,wi)=>{ const g=n0Grupos()[gi]; return g&&g.palabras.find(w=>w.wi===wi); };

/* ---- el menú de niveles ---- */
window.goCamino=function(){
  hush(); busy=false; show('camino'); ESTADO.tok++; ESTADO.modo='menu'; cv.style.visibility='hidden';
  document.querySelector('#camPad').hidden=true; menu.hidden=false; document.querySelector('#camTitle').textContent=T.camino;
  menu.innerHTML=`<div class="camtit">${esc(T.camino)}</div><div class="camst-fila">${NIVELES.map((n,i)=>{ const ab=abierto(i), h=((save.camino||{})[n.id]||{}).hecho;
    return `<button class="camst ${ab?'':'cerr'} ${h?'hecho':''}" data-i="${i}" style="--c:${ESTILOS[i].colina[0]}"><span class="camst-e">${ESTILOS[i].emo}</span><b>${i+1}</b>${ab?'':'<i class="camst-l">🔒</i>'}${h?'<i class="camst-ok">★</i>':''}</button>`; }).join('')}</div>`;
  menu.querySelectorAll('.camst').forEach(b=>b.addEventListener('click',()=>{ const i=+b.dataset.i; if(!abierto(i)){ sfx.oops(); sayAll([T.caminoCerrado]); return; } empezar(i); }));
  setTimeout(()=>menu.querySelector('.camst:not(.cerr)')?.focus(),60);
  sayAll([T.caminoDi]);
};

/* ---- empezar un nivel ---- */
function empezar(i){
  const N=NIVELES[i], st=ESTADO; st.nivel=i; st.mapa=N.mapa.map(r=>r.split('')); st.ents=[]; st.parts=[]; st.fish=0; st.herrIdx=0; st.final=false; st.modo='juego'; st.tok++;
  let sx=2, sy=9; st.mapa.forEach((r,y)=>r.forEach((c,x)=>{ if(c==='P'){ sx=x; sy=y; r[x]='.'; } }));
  st.spawn={x:sx+.5, y:sy+1}; st.S={x:sx+.5, y:sy+1, vx:0, vy:0, suelo:false, mira:1, nada:false, saltoT:0};
  menu.hidden=true; cv.style.visibility='visible'; document.querySelector('#camPad').hidden=false; st.last=performance.now(); busy=false;
  document.querySelector('#camHerr').textContent=HERR[N.herr[0]].emo;
}
const W=()=>ESTADO.mapa[0].length;
const tile=(x,y)=>{ const m=ESTADO.mapa; if(x<0||x>=W()) return '#'; if(y<0) return '.'; if(y>=FILAS) return '.'; return m[y][x]; };
const solido=ch=>ch==='#'||ch==='^'||ch==='='||!!OBS[ch];
function choca(x,y){ const l=Math.floor(x-ANCHO/2+.001), r=Math.floor(x+ANCHO/2-.001), t=Math.floor(y-ALTO+.001), b=Math.floor(y-.001);
  for(let j=t;j<=b;j++) for(let i=l;i<=r;i++) if(solido(tile(i,j))) return true; return false; }
const enAgua=(x,y)=>tile(Math.floor(x),Math.floor(y-ALTO/2))==='~';

/* ---- teclas y botones ---- */
const K=ESTADO.teclas;
const mapaTecla={ArrowLeft:'izq',a:'izq',A:'izq',ArrowRight:'der',d:'der',D:'der',ArrowUp:'salto',w:'salto',W:'salto',' ':'salto',ArrowDown:'abajo',s:'abajo',S:'abajo',Shift:'corre',e:'usa',E:'usa',Enter:'usa',q:'cambia',Q:'cambia'};
window.addEventListener('keydown',e=>{ if(scr.camino.hidden||ESTADO.modo!=='juego'||!modal.hidden) return; const k=mapaTecla[e.key]; if(!k) return; e.preventDefault(); if(!K.has(k)){ K.add(k); if(k==='usa') usar(); if(k==='cambia') cambiar(); } });
window.addEventListener('keyup',e=>{ const k=mapaTecla[e.key]; if(k) K.delete(k); });
window.addEventListener('blur',()=>K.clear());
document.querySelectorAll('#camPad [data-k]').forEach(b=>{ const k=b.dataset.k;
  b.addEventListener('pointerdown',e=>{ e.preventDefault(); if(ESTADO.modo!=='juego'||!modal.hidden) return; actx(); if(k==='corre'){ K.has('corre')?K.delete('corre'):K.add('corre'); b.classList.toggle('on',K.has('corre')); return; } K.add(k); if(k==='usa') usar(); if(k==='cambia') cambiar(); });
  if(k!=='corre') ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>K.delete(k))); });
document.querySelector('#camBack').addEventListener('click',()=>{ if(ESTADO.modo==='juego'){ ESTADO.modo='menu'; goCamino(); } else { ESTADO.tok++; goHome(); } });

function herramientas(){ return NIVELES[ESTADO.nivel].herr; }
function cambiar(){ const h=herramientas(); ESTADO.herrIdx=(ESTADO.herrIdx+1)%h.length; const t=h[ESTADO.herrIdx]; document.querySelector('#camHerr').textContent=HERR[t].emo; sfx.gadgetSwitch(); }

/* ---- usar la herramienta ---- */
function objetivo(){ const S=ESTADO.S; const dx=S.mira; for(let d=1;d<=5;d++){ const x=Math.floor(S.x+dx*d); for(let y=6;y<=9;y++){ const c=tile(x,y); if(OBS[c]) return {c,x,y}; } } return null; }
function mancha(ch,x,y){ // todas las baldosas contiguas del mismo obstáculo
  const m=ESTADO.mapa, pila=[[x,y]], vis=new Set(), out=[];
  while(pila.length){ const [a,b]=pila.pop(), k=a+','+b; if(vis.has(k)||a<0||b<0||a>=W()||b>=FILAS||m[b][a]!==ch) continue; vis.add(k); out.push([a,b]); pila.push([a+1,b],[a-1,b],[a,b+1],[a,b-1]); } return out; }
async function usar(){
  const st=ESTADO, S=st.S, h=herramientas()[st.herrIdx], ob=objetivo(); if(st.modo!=='juego'||!modal.hidden) return;
  disparo(h);
  if(!ob) return;
  const O=OBS[ob.c];
  if(O.herr!==h){ sfx.oops(); sayAll([T[{agua:'caminoAgua',burbujas:'caminoBurbujas',musica:'caminoMusica'}[O.herr]]]); return; }
  // el chico dice la palabra del obstáculo antes de que la herramienta funcione
  const w=palabraDe(O.gi,O.wi); if(!w){ resolver(ob,O); return; }
  st.modo='habla'; K.clear(); const tok=++flowTok, alive=()=>tok===flowTok; busy=true;
  openModal(shell({center:`<div class="stack"><div class="n0-big" style="--ac:${NIVEL0_COLORES[O.gi]||'#2E86DE'}">${n0Dibujo(O.gi,O.wi)}</div>${chipsWord(w)}${turnHtml()}</div>`, actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')}));
  liveMe(); onAct('again',()=>narrar(()=>decir(w)));
  narrar(async()=>{ if(await decir(w)) await sayAll([T.estrella]); });
  await starPress(); if(!alive()) return;
  closeModal(); busy=false; st.modo='juego'; st.last=performance.now(); resolver(ob,O); sayAll([praise()]);
}
const decir=w=>silabear(w,[]);
function resolver(ob,O){
  const st=ESTADO; const tiles=mancha(ob.c,ob.x,ob.y); let cx=0, cy=0; tiles.forEach(([a,b])=>{ cx+=a+.5; cy+=b+.5; st.mapa[b][a]='.'; }); cx/=tiles.length; cy/=tiles.length;
  st.ents.push({tipo:ob.c,x:cx,y:cy,t:0,vx:0,vy:0});
  for(let i=0;i<8;i++) st.parts.push({e:ob.c==='f'?'💨':'✨',x:cx+(Math.random()-.5)*2,y:cy+(Math.random()-.5)*2,vx:(Math.random()-.5)*2,vy:-1-Math.random()*2,v:1.2});
  for(let i=0;i<3;i++) st.mapa[Math.min(9,Math.floor(cy)+1)][Math.max(0,Math.floor(cx-1)+i)]==='.' && (st.mapa[Math.min(9,Math.floor(cy)+1)][Math.max(0,Math.floor(cx-1)+i)]='c');
  sfx.yay();
}
function disparo(h){
  const st=ESTADO, S=st.S, dir=S.mira; gadgetShootAnim=performance.now();
  const n=h==='musica'?5:10;
  for(let i=0;i<n;i++){ st.parts.push(h==='agua' ? {e:'💧',x:S.x+dir*.6,y:S.y-.6,vx:dir*(5+Math.random()*3),vy:-2.5-Math.random()*2,v:.9,g:true}
    : h==='burbujas' ? {e:'🫧',x:S.x+dir*.6,y:S.y-.7,vx:dir*(2+Math.random()*2),vy:-.5-Math.random(),v:1.6}
    : {e:['🎵','🎶'][i%2],x:S.x+dir*.5,y:S.y-1,vx:dir*(1.5+Math.random()*2.5),vy:-1-Math.random()*2,v:1.4}); }
  if(h==='agua') sfx.splash(); else if(h==='burbujas') sfx.bubble(); else sfx.music();
}

/* ---- el mundo cada cuadro ---- */
function fisica(dt){
  const st=ESTADO, S=st.S, agua=enAgua(S.x,S.y);
  const quiere=(K.has('der')?1:0)-(K.has('izq')?1:0); if(quiere) S.mira=quiere;
  S.nada=agua;
  const vel=agua?3.6:(K.has('corre')?8.6:5);
  S.vx+=(quiere*vel-S.vx)*Math.min(1,dt*14);
  if(agua){ const v=(K.has('abajo')?1:0)-((K.has('salto'))?1:0); S.vy+=((v*3.4)-S.vy)*Math.min(1,dt*6); S.vy+=GRAV*.04*dt; }
  else { S.vy+=GRAV*dt; if(S.vy>22) S.vy=22; if(K.has('salto')&&S.suelo){ S.vy=-13; S.suelo=false; sfx.step(); tone(520,.09,'triangle',.08,0,300); }
    else if(K.has('salto')&&S.salidaAgua){ S.vy=-9; S.salidaAgua=false; } }
  S.salidaAgua=agua;
  // horizontal
  const dx=S.vx*dt; if(dx){ const nx=S.x+dx; if(!choca(nx,S.y)) S.x=nx; else { S.vx=0; } }
  // vertical
  S.suelo=false; const ny=S.y+S.vy*dt;
  if(!choca(S.x,ny)) S.y=ny; else { if(S.vy>0){ S.y=Math.floor(ny); S.suelo=true; } else { S.y=Math.floor(ny-ALTO)+1+ALTO; } S.vy=0; }
  // resorte
  if(S.suelo && tile(Math.floor(S.x),Math.floor(S.y-.1))==='j'){ S.vy=-17; S.suelo=false; tone(300,.15,'sine',.1,0,900); }
  if(S.x<ANCHO/2) S.x=ANCHO/2;
  // monedas, checkpoints, meta
  for(let j=Math.floor(S.y-ALTO);j<=Math.floor(S.y-.1);j++) for(let i=Math.floor(S.x-.4);i<=Math.floor(S.x+.4);i++){ const c=tile(i,j);
    if(c==='c'){ st.mapa[j][i]='.'; st.fish++; sfx.tick(); st.parts.push({e:'✨',x:i+.5,y:j+.5,vx:0,vy:-1.5,v:.5}); }
    else if(c==='K' && (st.spawn.x<i+.5)){ st.spawn={x:i+.5,y:j+1}; st.parts.push({e:'🚩',x:i+.5,y:j-.5,vx:0,vy:-2,v:1}); sfx.star(); }
    else if(c==='F' && !st.final){ st.final=true; meta(); } }
  // se cayó al vacío: vuelve al último punto, sin perder nada
  if(S.y>FILAS+3){ S.x=st.spawn.x; S.y=st.spawn.y; S.vx=S.vy=0; sfx.oops(); }
}
function entidades(dt){
  const st=ESTADO;
  for(const p of st.parts){ p.v-=dt; p.x+=p.vx*dt; p.y+=p.vy*dt; if(p.g) p.vy+=18*dt; else p.vy*=1-dt*.6; }
  st.parts=st.parts.filter(p=>p.v>0);
  for(const e of st.ents){ e.t+=dt; if(e.tipo==='p'){ e.vx=3; e.x+=e.vx*dt; } else if(e.tipo==='z'){ e.x+=2*dt; } else if(e.tipo==='b'){ e.y-=1.8*dt; } else if(e.tipo==='f'){ e.y-=.5*dt; } }
  st.ents=st.ents.filter(e=>e.t<(e.tipo==='f'?1:4));
}
async function meta(){
  const st=ESTADO, N=NIVELES[st.nivel]; st.modo='habla'; K.clear(); busy=true; sfx.yay();
  const tok=++flowTok, alive=()=>tok===flowTok;
  const {fra}=repasoPool(); const f=fra.length?fra[Math.floor(Math.random()*fra.length)]:null, w=palabraDe(1,4);
  if(f){ openModal(shell({center:`<div class="stack">${chipsPhrase(f)}${turnHtml()}</div>`, actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')})); liveMe(); onAct('again',()=>narrar(()=>construirFrase(f,[]))); narrar(async()=>{ await sayAll([T.caminoFin]); if(await construirFrase(f)) await sayAll([T.estrella]); }); }
  else if(w){ openModal(shell({center:`<div class="stack"><div class="n0-big">${n0Dibujo(1,4)}</div>${chipsWord(w)}${turnHtml()}</div>`, actions:B('again','replay',T.otraVez)+B('star','star',T.loDije,'star go')})); liveMe(); onAct('again',()=>narrar(()=>decir(w))); narrar(async()=>{ await sayAll([T.caminoFin]); await decir(w); }); }
  await starPress(); if(!alive()) return;
  const c=save.camino||(save.camino={}), r=c[N.id]||(c[N.id]={hecho:false,mejor:0}), primera=!r.hecho; r.hecho=true; r.mejor=Math.max(r.mejor||0,st.fish);
  const premio=primera?5:1; save.puntos=(save.puntos||0)+premio+Math.min(3,Math.floor(st.fish/5)); persist(); updateNames();
  const col=['#FFC93C','#FF6F8F','#2E86DE','#2FBF8F','#8B6FE8','#FF9B3D'];
  openModal(`${X_BTN}<div class="confeti">${[...Array(28)].map((_,i)=>`<i style="left:${(i*37)%100}%;background:${col[i%6]};animation-delay:${(i%9)*.18}s"></i>`).join('')}</div><h3 class="stitle">${ESTILOS[st.nivel].emo} ${st.fish} 🐟</h3><div class="actions">${B('back','back',T.atras,'go')}</div>`);
  sfx.stamp(); await narrar(()=>sayAll([praise(true), T.premio(T.peces(premio))])); if(!alive()) return;
  await waitAct('back'); if(!alive()) return; closeModal(); busy=false; goCamino();
}

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
    if(ch==='#'){ const arriba=tile(x,y-1)!=='#'; c.fillStyle=E.suelo[1]; c.fillRect(px,py,T+.5,T+.5); if(arriba){ c.fillStyle=E.suelo[0]; c.fillRect(px,py,T+.5,T*.3); } else if((x+y)%3===0){ c.fillStyle='rgba(0,0,0,.08)'; c.fillRect(px+T*.2,py+T*.3,T*.3,T*.2); } }
    else if(ch==='='){ c.fillStyle='#C99349'; rr(c,px,py,T+.5,T*.4,T*.1); c.fill(); c.fillStyle='#E3B27C'; c.fillRect(px,py,T+.5,T*.12); }
    else if(ch==='~'){ c.fillStyle='rgba(60,170,240,.55)'; c.fillRect(px,py,T+.5,T+.5); if(tile(x,y-1)!=='~'){ c.fillStyle='rgba(255,255,255,.55)'; c.fillRect(px,py,T+.5,T*.1+Math.sin(t*3+x)*T*.03); } }
    else if(ch==='c'){ c.font=`${Math.round(T*.75)}px sans-serif`; c.fillText('🐟',px+T/2,py+T/2+Math.sin(t*4+x)*T*.08); }
    else if(ch==='K'){ c.font=`${Math.round(T*.9)}px sans-serif`; c.fillText(st.spawn.x>x+.4?'🚩':'🏳️',px+T/2,py+T/2); }
    else if(ch==='F'){ c.font=`${Math.round(T*1.6)}px sans-serif`; c.fillText('🏁',px+T/2,py+T*.2); c.fillStyle='#fff'; c.fillRect(px+T*.45,py+T*.3,T*.1,T*3); }
    else if(ch==='j'){ c.fillStyle='#E8483B'; rr(c,px+T*.1,py+T*.6,T*.8,T*.4,T*.12); c.fill(); c.fillStyle='#fff'; c.fillRect(px+T*.2,py+T*.78,T*.6,T*.06); }
  }
  // obstáculos (una sola figura por mancha)
  const hechos=new Set();
  for(let y=0;y<FILAS;y++) for(let x=i0;x<=i1;x++){ const ch=tile(x,y); if(!OBS[ch]||hechos.has(x+','+y)) continue; const ts=mancha(ch,x,y); ts.forEach(([a,b])=>hechos.add(a+','+b));
    const ys=ts.map(a=>a[1]), xs=ts.map(a=>a[0]), cx=(Math.min(...xs)+Math.max(...xs)+1)/2, cy=Math.max(...ys.filter(v=>v>=7))+1;
    const O=OBS[ch], mira=objetivo(), cerca=mira&&mira.c===ch, k=1+(cerca?.06*Math.sin(t*8):0);
    c.font=`${Math.round(T*2.4*k)}px sans-serif`; c.fillStyle='#000'; c.fillText(O.emo,X(cx),Y(cy)-T*1.2+(ch==='f'?Math.sin(t*10)*T*.05:0));
    if(cerca){ c.font=`${Math.round(T*.8)}px sans-serif`; c.fillText(HERR[O.herr].emo,X(cx),Y(cy)-T*3.1+Math.sin(t*5)*T*.1); } }
  // lo que ya se resolvió
  for(const e of st.ents){ const a=e.t; c.globalAlpha=Math.max(0,1-a/(e.tipo==='f'?1:4)); c.font=`${Math.round(T*2)}px sans-serif`;
    c.fillText({f:'💨',p:'🐷',z:'😴',b:'🫧'}[e.tipo],X(e.x),Y(e.y)); if(e.tipo==='b'){ c.font=`${Math.round(T*1)}px sans-serif`; c.fillText('🐝',X(e.x),Y(e.y)); } c.globalAlpha=1; }
  // el chico
  const caminando=Math.abs(S.vx)>.5&&S.suelo;
  drawHero(c,X(S.x),Y(S.y),T*1.45,{t,walk:caminando||S.nada&&Math.abs(S.vx)>.3,facing:S.mira,nada:S.nada,accion:!S.suelo&&!S.nada?'saltar':(K.has('corre')&&caminando?'correr':null),backpack:true});
  // partículas
  c.textAlign='center'; for(const p of st.parts){ c.globalAlpha=Math.min(1,p.v*2); c.font=`${Math.round(T*.5)}px sans-serif`; c.fillText(p.e,X(p.x),Y(p.y)); } c.globalAlpha=1;
  // marcador
  c.fillStyle='rgba(255,255,255,.88)'; rr(c,10,10,T*3,T*.9,T*.3); c.fill(); c.fillStyle='#22314F'; c.font=`800 ${Math.round(T*.55)}px 'Baloo 2',sans-serif`; c.textAlign='left'; c.fillText(`🐟 ${st.fish}`,10+T*.3,10+T*.47); c.textAlign='center';
  const prog=Math.min(1,S.x/W()); c.fillStyle='rgba(255,255,255,.7)'; rr(c,w-T*4-10,10,T*4,T*.3,T*.15); c.fill(); c.fillStyle='#2FBF8F'; rr(c,w-T*4-10,10,T*4*prog,T*.3,T*.15); c.fill();
}
live(cv,(c,w,h,t)=>{
  const st=ESTADO; if(scr.camino.hidden||st.modo==='menu'||!st.S) return;
  const ahora=performance.now(); let dt=Math.min(.033,(ahora-(st.last||ahora))/1000); st.last=ahora;
  if(st.modo==='juego'&&modal.hidden){ fisica(dt/2); fisica(dt/2); entidades(dt); }
  dibujar(c,w,h,t);
});
})();
