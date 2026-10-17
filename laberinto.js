/* =========================================================
   EL LABERINTO MÁGICO — la intro (partes A y B) como una aventura: un camino que serpentea por cuevas brillantes,
   con una sala por cada trocito de 3 a 5 palabras (labSalas() en juego.js). Cada sala se abre al terminar la anterior;
   al terminarla se gana un pececito. Los grupos terminados se marcan en la lista de la intro (goNivel0) como siempre.
   Se camina tocando una sala brillante (el chico camina solo hasta ahí) o con las flechas; Enter/espacio entra.
   ========================================================= */
(()=>{
const COLS=4, DX=230, DY=210, MARG=150, ZONA=12, RADIO=74;
const PAL=[
  {bg:['#1B1038','#3A1F6B'], pared:'#2B1A52', piso:'#5B3FA0', brillo:'#C8A8FF', deco:['💎','🔮','✨','🪄']},
  {bg:['#08272B','#0F5560'], pared:'#0B3A40', piso:'#1E8E8A', brillo:'#7CFFE0', deco:['🍄','🌱','🦋','🪲']},
  {bg:['#2B1408','#6B3315'], pared:'#3E1F0D', piso:'#B8651F', brillo:'#FFC070', deco:['🔥','🌋','💎','🪨']},
  {bg:['#0B1F3F','#1F5CA8'], pared:'#143A70', piso:'#4F95E0', brillo:'#BFE6FF', deco:['❄️','⛄','💠','🧊']},
  {bg:['#3A0F2E','#8A2D6B'], pared:'#5A1B47', piso:'#D45AA6', brillo:'#FFC2E9', deco:['🍭','🍬','🧁','🍩']},
  {bg:['#0E2A12','#256B2E'], pared:'#17421C', piso:'#4FAE5E', brillo:'#C8FFAF', deco:['🌲','🌿','🦉','🍃']}
];
let salas=[], pos=[], acum=[], tok=0, imgs={};
const st={s:0, meta:null, entrar:false, camY:0, facing:1, sacudir:0, fx:[], brillos:[], t0:0};
const cv=document.querySelector('#labCv');

const semilla=n=>{ const x=Math.sin(n*127.1+311.7)*43758.5453; return x-Math.floor(x); };
function armar(){
  salas=labSalas();
  pos=salas.map((_,i)=>{ const r=Math.floor(i/COLS); let c=i%COLS; if(r%2) c=COLS-1-c; return {x:MARG+c*DX, y:MARG+r*DY+(c%2?18:0)}; });
  acum=[0]; for(let i=1;i<pos.length;i++) acum.push(acum[i-1]+Math.hypot(pos[i].x-pos[i-1].x,pos[i].y-pos[i-1].y));
  st.brillos=[...Array(70)].map((_,i)=>({x:semilla(i)*(COLS*DX+MARG), y:semilla(i+99)*(pos[pos.length-1].y+MARG), r:1+semilla(i+7)*2.6, f:semilla(i+3)*6}));
}
const zona = i => Math.floor(i/ZONA)%PAL.length;
const abierta = i => i<=0 || pruebaTodo() || save.todoAbierto || labHecha(salas[i-1]);
const frontera = () => { const i=salas.findIndex(s=>!labHecha(s)); return i<0?salas.length-1:i; };
function puntoEn(s){
  if(s<=0) return {...pos[0], dir:1};
  for(let i=1;i<pos.length;i++) if(s<=acum[i]){ const k=(s-acum[i-1])/(acum[i]-acum[i-1]||1); return {x:pos[i-1].x+(pos[i].x-pos[i-1].x)*k, y:pos[i-1].y+(pos[i].y-pos[i-1].y)*k, dir:Math.sign(pos[i].x-pos[i-1].x)||1}; }
  return {...pos[pos.length-1], dir:1};
}
function imagenSala(s){
  if(imgs[s.id]) return imgs[s.id];
  const f=((window.NIVEL0_ARTE||[])[s.gi]||[])[s.desde]; const im=new Image();
  if(f){ const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${f(NIVEL0_COLORES[s.gi]).replace(/<text (?![^>]*font-family)/g,'<text font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif" ')}</svg>`; im.src=svgUri(svg); }
  return imgs[s.id]=im;
}
function irA(i){
  if(i<0||i>=salas.length) return;
  if(!abierta(i)){ st.sacudir=performance.now(); sfx.oops(); sayAll([T.salaCerrada]); return; }
  st.meta=i; st.entrar=true; hush(); sfx.whoosh();
}
async function abrirSala(i){
  const s=salas[i]; st.entrar=false; st.meta=null; busy=true; actx();
  runLeccion0(s.gi, {id:s.id, desde:s.desde, hasta:s.hasta, alTerminar:()=>{ if(scr.lab.hidden) return; const sig=salas.findIndex(x=>!labHecha(x)); show('lab'); st.fx.push({t:performance.now(), i}); if(sig>=0 && sig!==i){ st.fx.push({t:performance.now()+600, i:sig, abrir:true}); sfx.star(); } sayAll(sig<0?[T.nivel0Hecho]:[]); }});
}
window.goLaberinto=function(){
  hush(); armar(); show('lab'); tok++; $('#labTitle').textContent=T.laberinto;
  const i=Math.min(salas.length-1, Math.max(0, (save.labPos!=null && abierta(save.labPos)) ? save.labPos : frontera()));
  st.s=acum[i]; st.meta=null; st.entrar=false; st.camY=pos[i].y; st.t0=performance.now();
  const mio=tok; const M={alive:()=>mio===tok && !scr.lab.hidden};
  teclasJuego(M,k=>{
    const cur=cercana();
    if(k==='ArrowRight'||k==='ArrowDown') irA(Math.min(salas.length-1,(st.meta??cur)+(st.meta==null?1:1)));
    else if(k==='ArrowLeft'||k==='ArrowUp') irA(Math.max(0,(st.meta??cur)-1));
    else if(k==='Enter'||k===' ') { if(Math.abs(st.s-acum[cur])<4 && abierta(cur)) abrirSala(cur); else irA(cur); }
  });
  setTimeout(()=>sayAll([T.laberintoDi]),200);
};
const cercana=()=>{ let b=0,d=1e9; for(let i=0;i<acum.length;i++){ const x=Math.abs(acum[i]-st.s); if(x<d){ d=x; b=i; } } return b; };
function mundoA(ev){ const r=cv.getBoundingClientRect(), k=escala(r.width,r.height), x=(ev.clientX-r.left-r.width/2)/k+(MARG+(COLS-1)*DX/2), y=(ev.clientY-r.top-r.height/2)/k+st.camY; return {x,y}; }
const escala=(w,h)=>Math.min(w/(MARG*2+(COLS-1)*DX), h/(2.5*DY));
cv.addEventListener('pointerdown',ev=>{
  if(!modal.hidden || busy) return; actx(); const p=mundoA(ev); let mejor=-1, d=1e9;
  pos.forEach((q,i)=>{ const x=Math.hypot(q.x-p.x,q.y-p.y); if(x<d){ d=x; mejor=i; } });
  if(mejor>=0 && d<RADIO*1.35){ if(mejor===cercana() && Math.abs(st.s-acum[mejor])<4 && abierta(mejor)) abrirSala(mejor); else irA(mejor); }
});
function cartelCandado(c,x,y,k){ c.font=`${Math.round(40*k)}px sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillText('🔒',x,y); }
live(cv,(c,w,h,t)=>{
  if(scr.lab.hidden || !pos.length) return;
  const ahora=performance.now(), dt=Math.min(.05, (ahora-(st.last||ahora))/1000); st.last=ahora;
  // el chico camina hacia la sala elegida
  if(st.meta!=null && modal.hidden){
    const obj=acum[st.meta], dir=Math.sign(obj-st.s); if(dir){ st.s+=dir*Math.min(Math.abs(obj-st.s), 560*dt); const p=puntoEn(st.s); st.facing=p.dir*dir; if(Math.floor(ahora/220)%2===0) sfx.step(); }
    if(Math.abs(obj-st.s)<1){ st.s=obj; if(st.entrar && !busy){ save.labPos=st.meta; abrirSala(st.meta); } else st.meta=null; }
  }
  const hero=puntoEn(st.s), k=escala(w,h), cx=MARG+(COLS-1)*DX/2; st.camY+=(hero.y-st.camY)*Math.min(1,dt*4);
  const X=x=>w/2+(x-cx)*k, Y=y=>h/2+(y-st.camY)*k;
  const iz=Math.min(salas.length-1,cercana()), P=PAL[zona(iz)];
  const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,P.bg[0]); g.addColorStop(1,P.bg[1]); c.fillStyle=g; c.fillRect(0,0,w,h);
  // polvito brillante
  for(const b of st.brillos){ const y=Y(b.y); if(y<-10||y>h+10) continue; c.globalAlpha=.25+.5*Math.abs(Math.sin(t*1.4+b.f)); c.fillStyle=P.brillo; c.beginPath(); c.arc(X(b.x),y+Math.sin(t+b.f)*4*k,b.r*k*1.4,0,7); c.fill(); }
  c.globalAlpha=1;
  const i0=Math.max(0,iz-9), i1=Math.min(salas.length-1,iz+9);
  // adornos entre las filas (cristales, hongos, caramelos…)
  c.textAlign='center'; c.textBaseline='middle';
  for(let i=i0;i<=i1;i++){ const PZ=PAL[zona(i)]; for(let j=0;j<3;j++){ const n=i*3+j, r=Math.floor(i/COLS); const x=MARG+semilla(n)*(COLS-1)*DX, y=MARG+r*DY+DY*(.5+(semilla(n+5)-.5)*.3); c.globalAlpha=.9; c.font=`${Math.round((38+semilla(n+9)*22)*k)}px sans-serif`; c.save(); c.translate(X(x),Y(y)+Math.sin(t*1.2+n)*3*k); c.rotate((semilla(n+2)-.5)*.5); c.fillText(PZ.deco[(n)%4],0,0); c.restore(); } }
  c.globalAlpha=1;
  // pasillos: pared oscura, piso, y un hilo de luz
  c.lineCap='round'; c.lineJoin='round';
  for(let i=Math.max(1,i0);i<=i1;i++){ const PZ=PAL[zona(i)], a=pos[i-1], b=pos[i];
    c.strokeStyle=PZ.pared; c.lineWidth=150*k; c.beginPath(); c.moveTo(X(a.x),Y(a.y)); c.lineTo(X(b.x),Y(b.y)); c.stroke(); }
  for(let i=Math.max(1,i0);i<=i1;i++){ const PZ=PAL[zona(i)], a=pos[i-1], b=pos[i], ok=abierta(i);
    c.strokeStyle=PZ.piso; c.globalAlpha=ok?1:.55; c.lineWidth=84*k; c.beginPath(); c.moveTo(X(a.x),Y(a.y)); c.lineTo(X(b.x),Y(b.y)); c.stroke();
    c.globalAlpha=ok?.55:.18; c.strokeStyle=PZ.brillo; c.lineWidth=5*k; c.setLineDash([12*k,18*k]); c.lineDashOffset=-t*30*k; c.beginPath(); c.moveTo(X(a.x),Y(a.y)); c.lineTo(X(b.x),Y(b.y)); c.stroke(); c.setLineDash([]); c.globalAlpha=1; }
  // antorchas a los costados
  for(let r=Math.floor(i0/COLS); r<=Math.floor(i1/COLS); r++){ for(const sx of [-1,1]){ const x=(sx<0?MARG-120:MARG+(COLS-1)*DX+120), y=MARG+r*DY, f=1+.18*Math.sin(t*9+r*3+sx);
    c.fillStyle='#4a3320'; c.fillRect(X(x)-5*k,Y(y)-6*k,10*k,34*k); const gr=c.createRadialGradient(X(x),Y(y)-14*k,2,X(x),Y(y)-14*k,46*k*f); gr.addColorStop(0,'rgba(255,230,140,.95)'); gr.addColorStop(.4,'rgba(255,140,40,.55)'); gr.addColorStop(1,'rgba(255,100,0,0)'); c.fillStyle=gr; c.beginPath(); c.arc(X(x),Y(y)-14*k,46*k*f,0,7); c.fill();
    c.fillStyle='#FFB13C'; c.beginPath(); c.ellipse(X(x),Y(y)-12*k,7*k,12*k*f,0,0,7); c.fill(); } }
  // salas
  const fr=frontera();
  for(let i=i0;i<=i1;i++){ const s=salas[i], PZ=PAL[zona(i)], p=pos[i], ok=abierta(i), hecha=labHecha(s), x=X(p.x), y=Y(p.y), r=RADIO*k;
    const sac=(st.sacudir && ahora-st.sacudir<400 && i===st.meta)?Math.sin(ahora/25)*5*k:0;
    const pulso=(i===fr)?1+.07*Math.sin(t*4):1;
    // brillo
    if(ok){ const gr=c.createRadialGradient(x,y,r*.4,x,y,r*1.9*pulso); gr.addColorStop(0,PZ.brillo+(hecha?'55':'aa')); gr.addColorStop(1,PZ.brillo+'00'); c.fillStyle=gr; c.beginPath(); c.arc(x,y,r*1.9*pulso,0,7); c.fill(); }
    c.fillStyle=PZ.pared; c.beginPath(); c.arc(x+sac,y,r*1.14,0,7); c.fill();
    c.fillStyle=ok?'#FFF8E6':'#9CA3B5'; c.beginPath(); c.arc(x+sac,y,r*pulso,0,7); c.fill();
    c.strokeStyle=ok?PZ.brillo:'#6B7388'; c.lineWidth=6*k; c.stroke();
    const im=imagenSala(s); if(im.complete && im.naturalWidth){ c.globalAlpha=ok?1:.35; c.drawImage(im,x+sac-r*.78,y-r*.86,r*1.56,r*1.56); c.globalAlpha=1; }
    if(!ok){ c.fillStyle='rgba(20,20,40,.35)'; c.beginPath(); c.arc(x,y,r,0,7); c.fill(); cartelCandado(c,x,y+r*.05,k*1.6); }
    // puntitos: cuántas palabras tiene la sala
    const n=s.hasta-s.desde; for(let q=0;q<n;q++){ c.fillStyle=hecha?'#2FBF8F':'#8B6FE8'; c.beginPath(); c.arc(x+(q-(n-1)/2)*13*k,y+r*.98,5*k,0,7); c.fill(); }
    if(hecha){ c.fillStyle='#2FBF8F'; c.beginPath(); c.arc(x+r*.82,y-r*.82,17*k,0,7); c.fill(); c.strokeStyle='#fff'; c.lineWidth=4*k; c.beginPath(); c.moveTo(x+r*.82-8*k,y-r*.82); c.lineTo(x+r*.82-2*k,y-r*.82+7*k); c.lineTo(x+r*.82+9*k,y-r*.82-7*k); c.stroke(); }
    // portal de zona: una puerta dorada entre la sala anterior y esta
    if(i>0 && i%ZONA===0){ const a=pos[i-1], mx=(a.x+p.x)/2, my=(a.y+p.y)/2; c.font=`${Math.round(62*k)}px sans-serif`; c.fillText('⛩️',X(mx),Y(my)); }
  }
  // el cofre del final
  const ult=pos[pos.length-1]; c.font=`${Math.round(80*k)}px sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillText('🧰',X(ult.x),Y(ult.y+RADIO*1.6));
  // efectos al terminar una sala
  st.fx=st.fx.filter(f=>ahora-f.t<1800);
  for(const f of st.fx){ const a=(ahora-f.t)/1800; if(a<0) continue; const p=pos[f.i]; for(let q=0;q<12;q++){ const ang=q/12*6.28+f.i, d=(30+a*130)*k; c.globalAlpha=1-a; c.fillStyle=f.abrir?'#FFE27A':PAL[zona(f.i)].brillo; c.beginPath(); c.arc(X(p.x)+Math.cos(ang)*d,Y(p.y)+Math.sin(ang)*d,(6-a*4)*k,0,7); c.fill(); } c.globalAlpha=1; }
  // el chico
  const walking=st.meta!=null && Math.abs(acum[st.meta]-st.s)>1;
  drawHero(c,X(hero.x)-RADIO*k*1.05,Y(hero.y)+RADIO*k*.75,Math.min(140*k,h*.26),{t, walk:walking, facing:st.facing||1, backpack:true});
  // luz suave alrededor
  const vg=c.createRadialGradient(w/2,h/2,Math.min(w,h)*.35,w/2,h/2,Math.max(w,h)*.75); vg.addColorStop(0,'rgba(0,0,0,0)'); vg.addColorStop(1,'rgba(0,0,0,.45)'); c.fillStyle=vg; c.fillRect(0,0,w,h);
});
document.querySelector('#labBack').addEventListener('click',()=>{ tok++; goHome(); });
document.querySelector('#labLista').addEventListener('click',()=>{ tok++; goNivel0(); });
})();
