/* =========================================================
   LA TORRE MÁGICA — la intro (partes A y B) como un edificio, igual que los otros lugares.
   Planta baja: un hall con 8 puertas, una por tema (el chico elige la que quiera, en cualquier orden).
   Cada tema es un piso con un mini laberinto: 4 puertas azules (las de verdad: al terminar las 4, el piso queda hecho)
   y hasta 4 puertas doradas (extras: las salas que sobran del tema, de a poco).
   Cada puerta es una sala de 3 a 5 palabras (labSalas() en juego.js → runLeccion0). Se camina con flechas o tocando.
   save.lab[sala] = hecha · save.torre["<idioma>:<tema>"] = premio del piso ya dado · save.torreCofres[clave] = cofre abierto
   ========================================================= */
(()=>{
const COLS=11, FILAS=9;
/* los 8 temas: grupos de la intro (índices de n0Grupos(): 0-7 parte A, 8-42 parte B) */
const TEMAS=[
  {emo:'🎮', gi:[0,1,2,3,4,5,6,7,8], req:[0,1,2,4]},
  {emo:'🦁', gi:[9,10,11,12],},
  {emo:'👕', gi:[13,14,18,19],},
  {emo:'🍎', gi:[15,16,20,21,22,23],},
  {emo:'🌈', gi:[24,25,30,31,32],},
  {emo:'🤗', gi:[17,26,27,28,29],},
  {emo:'💬', gi:[33,34,35,36,37,38],},
  {emo:'⭐', gi:[39,40,41,42],}
];
/* los colores y adornos de cada piso: torre-estilos.js (se ve igual en el editor) */
const EST=window.TORRE_ESTILOS||[];
TEMAS.forEach((t,i)=>Object.assign(t,EST[i+1]||{}));
const HALL=EST[0]||{bg:['#241046','#4B2A86'], piso:['#E9D9A8','#F2E4B8'], pared:['#6B4F8A','#85629F'], deco:['✨']};
const FILA_HALL=[
  '###########',
  '#1#2#3#4#5#',
  '#.#.#.#.#.#',
  '#.........#',
  '#....o....#',
  '#....P....#',
  '#.#.#.#...#',
  '#6#7#8#...#',
  '###########'
];
let st=null, imgs={}, tok=0, tema=null;      // tema = lista de salas del piso actual
const cv=document.querySelector('#labCv');
window.__torreSt=()=>st;

/* ---- el contenido de cada tema: 4 salas de verdad y el resto, extras ---- */
function salasDe(i){
  const todas=labSalas().filter(s=>TEMAS[i].gi.includes(s.gi)).sort((a,b)=>TEMAS[i].gi.indexOf(a.gi)-TEMAS[i].gi.indexOf(b.gi)||a.desde-b.desde);
  const primeras=TEMAS[i].gi.map(g=>todas.find(s=>s.gi===g)).filter(Boolean), n=primeras.length;
  const pidx=new Set([...Array(4)].map((_,k)=>Math.round(k*(n-1)/3)));
  // el primer piso (las palabras del juego) es la Intro del camino: sus 4 puertas son las básicas
  const req=TEMAS[i].req ? TEMAS[i].req.map(g=>todas.find(s=>s.gi===g)).filter(Boolean) : [...pidx].map(k=>primeras[k]);
  return {req, extra:todas.filter(s=>!req.includes(s))};
}
const temaHecho=i=>salasDe(i).req.every(labHecha);
window.torreTemasHechos=()=>TEMAS.filter((_,i)=>temaHecho(i)).length;
window.torreTotalTemas=()=>TEMAS.length;
window.introHechas=()=>salasDe(0).req.filter(labHecha).length;   // las 4 salas básicas de la Intro (0 a 4)

/* ---- un laberinto chiquito por piso (siempre el mismo para cada tema) ---- */
function azar(seed){ let a=seed>>>0; return ()=>{ a=(a+0x6D2B79F5)>>>0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function laberintoDe(i){
  for(let intento=0; intento<400; intento++){
    const r=azar(1000*(i+1)+intento), CW=5, CH=4, vis=Array.from({length:CH},()=>Array(CW).fill(false)), g=Array.from({length:FILAS},()=>Array(COLS).fill('#'));
    const lista=[[0,CH-1]]; vis[CH-1][0]=true; g[CH*2-1][1]='.';
    while(lista.length){ const k=Math.floor(r()*lista.length), [x,y]=lista[k]; const vec=[[1,0],[-1,0],[0,1],[0,-1]].map(d=>[x+d[0],y+d[1],d]).filter(([a,b])=>a>=0&&b>=0&&a<CW&&b<CH&&!vis[b][a]);
      if(!vec.length){ lista.splice(k,1); continue; } const [nx,ny,d]=vec[Math.floor(r()*vec.length)]; vis[ny][nx]=true; g[ny*2+1][nx*2+1]='.'; g[y*2+1+d[1]][x*2+1+d[0]]='.'; lista.push([nx,ny]); }
    const hojas=[]; for(let y=0;y<CH;y++) for(let x=0;x<CW;x++){ if(x===0&&y===CH-1) continue; const tx=x*2+1, ty=y*2+1; const n=[[1,0],[-1,0],[0,1],[0,-1]].filter(d=>g[ty+d[1]][tx+d[0]]==='.').length; if(n===1) hojas.push([tx,ty]); }
    if(hojas.length<9) continue;
    for(let k=hojas.length-1;k>0;k--){ const j=Math.floor(r()*(k+1)); [hojas[k],hojas[j]]=[hojas[j],hojas[k]]; }
    const letras='12345678'; letras.split('').forEach((c,k)=>{ g[hojas[k][1]][hojas[k][0]]=c; });
    hojas.slice(8,10).forEach(([x,y])=>{ g[y][x]='*'; });   // las hojas que sobran: cofres
    // decoración: algunas baldosas del fondo
    g[FILAS-1][1]='D';
    return g.map(f=>f.join(''));
  }
  return FILA_HALL;
}
/* los mapas: los de idiomas/torre-mapas.js (se editan con mapas.html); si falta alguno, el laberinto armado solo.
   En localhost, además, se prueba lo que se guardó con «Probar» en el editor (localStorage). */
const mapaOk = m => Array.isArray(m) && m.length===FILAS && m.every(f=>typeof f==='string' && f.length===COLS);
let MAPAS_ARCHIVO = window.TORRE_MAPAS;
try{ if(/^(localhost|127\.0\.0\.1)$/.test(location.hostname)){ const o=JSON.parse(localStorage.getItem('aventuras.torreMapas')||'null'); if(Array.isArray(o)&&o.length>=9) MAPAS_ARCHIVO=o; } }catch(e){}
/* la Intro (el nivel 0 del camino) tiene su propio mapa, el décimo: todos los pasillos llevan a una de las 4 puertas azules */
const INTRO_DEFECTO=['###########','#1.......2#','#####.#####','#3.......4#','#####.#####','####...####','###.....###','###.t.t.###','#####D#####'];
const MAPAS=[FILA_HALL, ...TEMAS.map((_,i)=>laberintoDe(i)), INTRO_DEFECTO].map((gen,p)=>mapaOk((MAPAS_ARCHIVO||[])[p]) ? MAPAS_ARCHIVO[p] : gen);
const mapaDe=p=>(st&&st.tuto&&p===1)?MAPAS[9]:MAPAS[p];   // en la Intro, el piso 1 es el mapa propio
window.__torreMapas=MAPAS;
window.__torreDeco=()=>DECO;
function buscar(p,ch){ for(let y=0;y<FILAS;y++){ const x=mapaDe(p)[y].indexOf(ch); if(x>=0) return {x,y}; } return null; }
/* una baldosa libre al lado de otra (para pararse al entrar o al volver) */
function vecinaLibre(p,pt,pref){ for(const [dx,dy] of [[0,-1],[1,0],[-1,0],[0,1]]){ const x=pt.x+dx, y=pt.y+dy; if(x>=0&&y>=0&&x<COLS&&y<FILAS&&camina(mapaDe(p)[y][x])&&!'12345678D*'.includes(mapaDe(p)[y][x])) return {x,y}; } return pref; }
const celda=(p,x,y)=>(mapaDe(p)[y]||'')[x]||'#';
/* objetos para decorar: cada letra es un dibujito; todos estorban (no se pisan) menos la alfombra t.
   'P' es el lugar donde se empieza en el hall (se pisa como cualquier baldosa). Las mismas letras que usan los lugares. */
const DECO={o:'⛲',p:'🪴',r:'🌳',f:'💐',b:'🪑',j:'🧸',k:'📦',y:'🌴',i:'🪨',m:'🍽️',s:'🛋️',h:'🌾',x:'🛏️',a:'🚗',d:'🏛️',g:'🏆',l:'🏮',u:'🪧',z:'🍄',v:'🌿',w:'🪸',e:'⚙️',q:'📚',n:'⛱️',c:'🎁'};   // en los pisos, 1-4 son puertas azules, 5-8 doradas y * un cofre
const camina=ch=>ch!=='#' && !(ch in DECO);

/* ---- estado ---- */
function nuevo(tuto){ const h0=buscar(0,'P')||{x:5,y:5}; return {tuto:!!tuto, p:0, x:h0.x, y:h0.y, rx:h0.x, ry:h0.y, camino:[], mira:1, t0:performance.now(), fx:[], last:0, sac:0}; }
function slotSala(p,ch){
  if(p<1) return null; const {req,extra}=salasDe(p-1);
  if(st.tuto && '5678'.includes(ch)) return null;
  if('1234'.includes(ch)) return {sala:req['1234'.indexOf(ch)], oro:false};
  if('5678'.includes(ch)){ const pend=extra.filter(s=>!labHecha(s)); const s=pend['5678'.indexOf(ch)]; return s?{sala:s, oro:true}:null; }
  return null;
}
function imagenSala(s){
  if(imgs[s.id]) return imgs[s.id];
  const f=((window.NIVEL0_ARTE||[])[s.gi]||[])[s.desde]; const im=new Image();
  if(f){ const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${f(NIVEL0_COLORES[s.gi]).replace(/<text (?![^>]*font-family)/g,'<text font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif" ')}</svg>`; im.src=svgUri(svg); }
  return imgs[s.id]=im;
}
function aPiso(p,x,y){ st.p=p; st.x=st.rx=x; st.y=st.ry=y; st.camino=[]; }
function camino(a,b){   // búsqueda en anchura sobre las baldosas que se pueden pisar
  const k=(x,y)=>y*COLS+x, prev=new Map([[k(a.x,a.y),null]]), cola=[[a.x,a.y]];
  while(cola.length){ const [x,y]=cola.shift(); if(x===b.x&&y===b.y) break;
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){ const nx=x+dx, ny=y+dy; if(nx<0||ny<0||nx>=COLS||ny>=FILAS||prev.has(k(nx,ny))||!camina(celda(st.p,nx,ny))) continue; prev.set(k(nx,ny),[x,y]); cola.push([nx,ny]); } }
  if(!prev.has(k(b.x,b.y))) return null;
  const out=[]; let c=[b.x,b.y]; while(c && !(c[0]===a.x&&c[1]===a.y)){ out.unshift({x:c[0],y:c[1]}); c=prev.get(k(c[0],c[1])); } return out;
}
const mundo=ev=>{ const r=cv.getBoundingClientRect(), T=Math.min(r.width/COLS,r.height/FILAS), ox=(r.width-T*COLS)/2, oy=(r.height-T*FILAS)/2; return {x:Math.floor((ev.clientX-r.left-ox)/T), y:Math.floor((ev.clientY-r.top-oy)/T)}; };
cv.addEventListener('pointerdown',ev=>{
  if(!modal.hidden||busy||!st) return; actx(); const m=mundo(ev);
  if(m.x<0||m.y<0||m.x>=COLS||m.y>=FILAS||!camina(celda(st.p,m.x,m.y))) return;
  const c=camino({x:st.camino.length?st.camino[st.camino.length-1].x:st.x, y:st.camino.length?st.camino[st.camino.length-1].y:st.y},m); if(c) st.camino=st.camino.length?[st.camino[0],...c]:c;
});
function paso(dx,dy){
  if(!st||busy||!modal.hidden||st.camino.length) return; const nx=st.x+dx, ny=st.y+dy;
  if(!camina(celda(st.p,nx,ny))) { st.sac=performance.now(); return; } st.camino=[{x:nx,y:ny}]; st.mira=dx||st.mira;
}

/* ---- qué pasa al llegar a una baldosa ---- */
function alLlegar(x,y){
  const ch=celda(st.p,x,y); sfx.step();
  if(st.p===0){ if('12345678'.includes(ch)){ const i=+ch-1; busy=true; sfx.whoosh(); sayAll([T.temas[i]]); setTimeout(()=>{ const e=vecinaLibre(i+1,buscar(i+1,'D')||{x:1,y:FILAS-1},{x:1,y:FILAS-2}); aPiso(i+1,e.x,e.y); busy=false; },650); } return; }
  if(ch==='D'){ if(st.tuto){ busy=true; sfx.whoosh(); setTimeout(()=>{ busy=false; tok++; goHome(); },300); return; } const i=st.p-1; busy=true; sfx.whoosh(); setTimeout(()=>{ const e=vecinaLibre(0,buscar(0,String(i+1))||{x:5,y:4},{x:5,y:5}); aPiso(0,e.x,e.y); busy=false; },400); return; }
  if(ch==='*'){ if(st.tuto) return; const k=`${st.p}:${x},${y}`, ct=save.torreCofres||(save.torreCofres={}); if(!ct[k]){ ct[k]=true; save.puntos=(save.puntos||0)+1; persist(); updateNames(); sfx.yay(); st.fx.push({t:performance.now(),x,y,txt:'+1'}); sayAll([T.unPececito]); } return; }
  const s=slotSala(st.p,ch); if(s&&s.sala){ abrirSala(s.sala); }
}
function abrirSala(s){
  busy=true; actx(); hush(); st.camino=[];
  runLeccion0(s.gi,{id:s.id, desde:s.desde, hasta:s.hasta, alTerminar:()=>{ if(scr.lab.hidden||!st) return; show('lab'); st.fx.push({t:performance.now(),x:st.x,y:st.y,txt:'★'}); const i=st.p-1; if(i>=0) cierre(i); }});
}
function cierre(i){
  const clave=`${langCode()}:${i}`, tr=save.torre||(save.torre={});
  if(temaHecho(i) && !tr[clave]){
    tr[clave]=true; save.puntos=(save.puntos||0)+2; const todos=torreTemasHechos()===TEMAS.length; if(todos && !tr[langCode()+':todo']){ tr[langCode()+':todo']=true; save.galletitas=(save.galletitas||0)+1; }
    persist(); updateNames(); sfx.yay(); st.fx.push({t:performance.now(),x:st.x,y:st.y,txt:'🏅'});
    sayAll([T.temaListo, ...(todos?[T.torreFin]:[])]);
  }
}
function entrar(tuto){
  hush(); busy=false; show('lab'); tok++; $('#labTitle').textContent=tuto?T.nivel0Titulo:T.laberinto; st=nuevo(tuto); if(tuto){ const e=vecinaLibre(1,buscar(1,'D')||{x:1,y:FILAS-1},{x:1,y:FILAS-2}); aPiso(1,e.x,e.y); }
  const mio=tok, M={alive:()=>mio===tok&&!scr.lab.hidden};
  teclasJuego(M,k=>{ if(k==='ArrowRight') paso(1,0); else if(k==='ArrowLeft') paso(-1,0); else if(k==='ArrowDown') paso(0,1); else if(k==='ArrowUp') paso(0,-1); });
  setTimeout(()=>sayAll([tuto?T.nivel0Di:T.laberintoDi]),200);
}
window.goLaberinto=window.goTorre=()=>entrar(false);   // la torre: todo lo demás, para explorar cuando se quiera
window.goIntro=()=>entrar(true);                       // la Intro del camino: solo las palabras básicas
/* ---- dibujo ---- */
function puerta(c,x,y,T,t,o){   // o: {pic, oro, hecha, n, hechas}
  const w=T*.8, h=T*.92, px=x+(T-w)/2, py=y+T*.04;
  c.fillStyle=o.oro?'#FFC93C':'#4A90E2'; rr(c,px,py,w,h,w*.5); c.fill();
  c.fillStyle='#FFF8E6'; rr(c,px+w*.1,py+w*.1,w*.8,h-w*.14,w*.4); c.fill();
  if(o.oro){ c.save(); c.globalAlpha=.25+.25*Math.sin(t*4); c.fillStyle='#FFE27A'; rr(c,px-3,py-3,w+6,h+6,w*.55); c.fill(); c.restore(); }
  if(o.pic){ if(o.pic.complete&&o.pic.naturalWidth) c.drawImage(o.pic,px+w*.12,py+h*.12,w*.76,w*.76); }
  else if(o.emo){ c.font=`${Math.round(w*.62)}px sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillText(o.emo,px+w/2,py+h*.46); }
  if(o.dots) for(let k=0;k<o.dots.n;k++){ c.fillStyle=k<o.dots.hechos?'#2FBF8F':'#C9CFE0'; c.beginPath(); c.arc(px+w/2+(k-(o.dots.n-1)/2)*T*.17,py+h*.88,T*.05,0,7); c.fill(); }
  if(o.hecha){ c.fillStyle='#2FBF8F'; c.beginPath(); c.arc(px+w*.9,py+h*.12,T*.17,0,7); c.fill(); c.strokeStyle='#fff'; c.lineWidth=T*.05; c.lineCap='round'; c.beginPath(); c.moveTo(px+w*.9-T*.08,py+h*.12); c.lineTo(px+w*.9-T*.02,py+h*.12+T*.07); c.lineTo(px+w*.9+T*.09,py+h*.12-T*.07); c.stroke(); }
}
live(cv,(c,w,h,t)=>{
  if(scr.lab.hidden||!st) return;
  const ahora=performance.now(), dt=Math.min(.05,(ahora-(st.last||ahora))/1000); st.last=ahora;
  // movimiento
  if(st.camino.length&&modal.hidden){ const n=st.camino[0], dx=n.x-st.rx, dy=n.y-st.ry, d=Math.hypot(dx,dy), v=6.5*dt; if(dx) st.mira=Math.sign(dx);
    if(d<=v){ st.rx=n.x; st.ry=n.y; st.x=n.x; st.y=n.y; st.camino.shift(); alLlegar(st.x,st.y); } else { st.rx+=dx/d*v; st.ry+=dy/d*v; } }
  const P=st.p===0?HALL:TEMAS[st.p-1], T=Math.min(w/COLS,h/FILAS), ox=(w-T*COLS)/2, oy=(h-T*FILAS)/2, X=x=>ox+x*T, Y=y=>oy+y*T;
  const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,P.bg[0]); g.addColorStop(1,P.bg[1]); c.fillStyle=g; c.fillRect(0,0,w,h);
  c.textAlign='center'; c.textBaseline='middle';
  for(let y=0;y<FILAS;y++) for(let x=0;x<COLS;x++){ const ch=celda(st.p,x,y), px=X(x), py=Y(y);
    if(ch==='#'){ c.fillStyle=P.pared[0]; rr(c,px+1,py+1,T-2,T-2,T*.14); c.fill(); c.fillStyle=P.pared[1]; rr(c,px+1,py+1,T-2,T*.4,T*.14); c.fill(); continue; }
    c.fillStyle=P.piso[(x+y)%2]; c.fillRect(px,py,T+.5,T+.5);
    if(ch==='t'){ c.fillStyle=['#E8483B','#2E86DE','#8B6FE8'][(x+y)%3]; rr(c,px+T*.08,py+T*.12,T*.84,T*.76,T*.1); c.fill(); c.strokeStyle='rgba(255,255,255,.7)'; c.lineWidth=T*.05; rr(c,px+T*.18,py+T*.22,T*.64,T*.56,T*.06); c.stroke(); }
    else if(ch in DECO){ c.fillStyle='rgba(0,0,0,.14)'; c.beginPath(); c.ellipse(px+T/2,py+T*.82,T*.3,T*.08,0,0,7); c.fill(); c.font=`${Math.round(T*.75)}px sans-serif`; c.fillText(DECO[ch],px+T/2,py+T*.5); }
    else if(ch==='.'&&((x*7+y*13+st.p*5)%11===0)){ c.globalAlpha=.55; c.font=`${Math.round(T*.5)}px sans-serif`; c.fillText(P.deco[(x+y+st.p)%P.deco.length],px+T/2,py+T/2); c.globalAlpha=1; }
    else if(ch==='D'||(st.p===0&&'12345678'.includes(ch)&&false)){ c.font=`${Math.round(T*.7)}px sans-serif`; c.fillText('🪜',px+T/2,py+T/2); }
    else if(ch==='*'&&!st.tuto){ c.font=`${Math.round(T*.7)}px sans-serif`; const ct=(save.torreCofres||{})[`${st.p}:${x},${y}`]; c.globalAlpha=ct?.4:1; c.fillText(ct?'📦':'🎁',px+T/2,py+T/2+Math.sin(t*3+x)*T*.03); c.globalAlpha=1; }
    else if(st.p===0&&'12345678'.includes(ch)){ const i=+ch-1, ss=salasDe(i), hechos=ss.req.filter(labHecha).length; puerta(c,px,py,T,t,{emo:TEMAS[i].emo, hecha:temaHecho(i), dots:{n:4,hechos}}); }
    else if(st.p>0&&'12345678'.includes(ch)){ const s=slotSala(st.p,ch); if(s&&s.sala){ puerta(c,px,py,T,t,{pic:imagenSala(s.sala), oro:s.oro, hecha:labHecha(s.sala), dots:{n:s.sala.hasta-s.sala.desde,hechos:labHecha(s.sala)?s.sala.hasta-s.sala.desde:0}}); } else { c.fillStyle='rgba(0,0,0,.12)'; c.fillRect(px,py,T,T); } }
  }
  // efectos
  st.fx=st.fx.filter(f=>ahora-f.t<1400);
  for(const f of st.fx){ const a=(ahora-f.t)/1400; c.globalAlpha=1-a; c.font=`800 ${Math.round(T*.7)}px 'Baloo 2',sans-serif`; c.fillStyle='#FFE27A'; c.strokeStyle='#22314F'; c.lineWidth=4; c.strokeText(f.txt,X(f.x)+T/2,Y(f.y)-a*T*1.2); c.fillText(f.txt,X(f.x)+T/2,Y(f.y)-a*T*1.2); c.globalAlpha=1; }
  // el chico
  const caminando=st.camino.length>0, sac=(ahora-st.sac<250)?Math.sin(ahora/18)*T*.05:0;
  drawHero(c,X(st.rx)+T/2+sac,Y(st.ry)+T*.95,Math.min(T*1.5,h*.2),{t,walk:caminando,facing:st.mira||1,backpack:true});
  // cartelito del piso (arriba a la izquierda)
  if(st.p>0){ const i=st.p-1, ss=salasDe(i), hechos=ss.req.filter(labHecha).length, resto=ss.extra.filter(s=>!labHecha(s)).length;
    c.fillStyle='rgba(255,255,255,.88)'; rr(c,6,6,T*3.6,T*.9,T*.3); c.fill(); c.font=`${Math.round(T*.55)}px sans-serif`; c.textAlign='left'; c.fillStyle='#22314F'; c.fillText(TEMAS[i].emo,12,6+T*.45);
    for(let k=0;k<4;k++){ c.fillStyle=k<hechos?'#FFC93C':'#D5DCE6'; c.beginPath(); c.arc(12+T*.8+k*T*.38,6+T*.45,T*.13,0,7); c.fill(); }
    if(resto && !st.tuto){ c.fillStyle='#8B6FE8'; c.font=`800 ${Math.round(T*.42)}px 'Baloo 2',sans-serif`; c.fillText(`+${resto}`,12+T*2.45,6+T*.47); } c.textAlign='center'; }
});
document.querySelector('#labBack').addEventListener('click',()=>{ tok++; goHome(); });
document.querySelector('#labLista').addEventListener('click',()=>{ tok++; goNivel0(); });
})();
