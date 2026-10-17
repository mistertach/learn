'use strict';
/* =========================================================
   MICROJUEGOS — uno por lugar. Los abre runMicro() en juego.js.
   Cada juego es async (cap, M) y termina cuando termina la partida:
     M.canvas  → el lienzo (16:9)          M.actions → la fila de botones de abajo
     M.alive() → false si cerraron la ventana (hay que dejar de escuchar teclas)
     M.aviso   → "¡Esta vez es gratis!" o "Son 3 pececitos." (se dice al empezar)
   Los textos están en capitulos/<lugar>/<idioma>.js → microjuego.
   Usa las piezas de dibujo y voz de juego.js (live, drawJet, drawAnimal, sayAll, sfx…).
   ========================================================= */
window.MICROJUEGOS = {};

/* teclas de flechas mientras dura el juego (las del juego normal están ocupadas por la ventana) */
function teclasJuego(M, onKey){
  const abajo=new Set();
  const kd=e=>{ if(!M.alive()) return limpiar(); if(/^Arrow/.test(e.key) || e.key===' ' || e.key==='Enter'){ if(onKey && onKey(e.key)===false) return; if(/^Arrow/.test(e.key)){ e.preventDefault(); e.stopPropagation(); abajo.add(e.key); } } };
  const ku=e=>abajo.delete(e.key);
  function limpiar(){ window.removeEventListener('keydown',kd,true); window.removeEventListener('keyup',ku,true); }
  window.addEventListener('keydown',kd,true); window.addEventListener('keyup',ku,true);
  return {abajo, limpiar};
}
const textoN = (txt, n) => String(txt||'').replaceAll('{n}', n);
/* pedacitos que saltan (relojes rotos, jugo de fruta, migas…): {x,y,vx,vy,vida,dibujar(c,p,k)} en px */
function particulas(){
  const ps=[];
  return {
    agregar(p){ ps.push(p); },
    paso(c,dt,h){ for(let i=ps.length-1;i>=0;i--){ const p=ps[i]; p.vida-=dt; if(p.vida<=0){ ps.splice(i,1); continue; } p.vy+=(p.g??1.6)*h*dt; p.x+=p.vx*dt; p.y+=p.vy*dt; p.rot=(p.rot||0)+(p.vr||0)*dt; p.dibujar(c,p,Math.min(1,p.vida/(p.vida0||1))); } },
    get n(){ return ps.length; }
  };
}
/* letras grandes en el lienzo (por ejemplo "¡BURP!" o un número) */
function cartel(c,txt,x,y,tam,col='#fff'){ c.save(); c.font=`800 ${Math.round(tam)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.lineWidth=tam*.18; c.strokeStyle='#22314F'; c.strokeText(txt,x,y); c.fillStyle=col; c.fillText(txt,x,y); c.restore(); }

/* ---------------------------------------------------------
   AEROPUERTO · Vuelo arcoíris: el avión va dejando un arcoíris;
   arriba y abajo para juntar estrellas. Cada estrella dice su color.
   --------------------------------------------------------- */
const ARCOIRIS=['#E8483B','#FF9B3D','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8'];
MICROJUEGOS.vuelo = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, cv=M.canvas, DUR=40, PX=.24, VEL=.24;
  const colores=COLORES.filter(c=>c.k!=='blanco');
  let py=.5, ty=.5, n=0, jugando=false, t0=0, prev=null, prox=0, terminado=false;
  const estrellas=[], estela=[], chispas=[], nubes=Array.from({length:6},(_,i)=>({x:i/6+Math.random()*.1, y:.08+Math.random()*.8, r:.04+Math.random()*.04}));
  const T2=teclasJuego(M);
  const apuntar=e=>{ const r=cv.getBoundingClientRect(); ty=Math.min(.9,Math.max(.1,(e.clientY-r.top)/r.height)); };
  cv.addEventListener('pointerdown',e=>{ apuntar(e); try{ cv.setPointerCapture(e.pointerId); }catch(_){} });
  cv.addEventListener('pointermove',apuntar);

  live(cv,(c,w,h,t)=>{
    const dt=prev==null?0:Math.min(.05,t-prev); prev=t;
    if(!M.alive()){ T2.limpiar(); return; }
    // el cielo y las nubes
    const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#5DB8F0'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
    for(const nb of nubes){ if(jugando) nb.x-=dt*VEL*.35; if(nb.x<-.15){ nb.x=1.15; nb.y=.08+Math.random()*.8; } cloud(c,nb.x*w,nb.y*h,nb.r*h); }
    if(jugando){
      const u=t-t0;
      if(T2.abajo.has('ArrowUp')) ty=Math.max(.1,ty-dt*.9);
      if(T2.abajo.has('ArrowDown')) ty=Math.min(.9,ty+dt*.9);
      // estrellas nuevas
      if(u<DUR-1.5 && u>=prox){ prox=u+.75+Math.random()*.5; const col=colores[Math.floor(Math.random()*colores.length)]; estrellas.push({x:1.08, y:.12+Math.random()*.76, col, fase:Math.random()*6}); }
      if(u>=DUR && !terminado){ terminado=true; jugando=false; terminar(); }
    }
    py+=(ty-py)*Math.min(1,dt*6);
    // la estela de arcoíris
    if(jugando || terminado) estela.push({y:py, edad:0});
    for(const e of estela) e.edad+=dt;
    while(estela.length && estela[0].edad*VEL>PX+.05) estela.shift();
    if(estela.length>1){
      const ancho=h*.018;
      ARCOIRIS.forEach((col,i)=>{
        c.beginPath(); c.strokeStyle=col; c.lineWidth=ancho+1; c.lineCap='round'; c.lineJoin='round';
        estela.forEach((e,j)=>{ const x=(PX-.07-e.edad*VEL)*w, y=e.y*h+(i-2.5)*ancho; j?c.lineTo(x,y):c.moveTo(x,y); });
        c.stroke();
      });
    }
    // estrellas: se mueven, y si el avión pasa cerca, se juntan
    for(let i=estrellas.length-1;i>=0;i--){
      const s=estrellas[i]; if(jugando) s.x-=dt*VEL;
      const sx=s.x*w, sy=s.y*h+Math.sin(t*3+s.fase)*h*.015, R=h*.055*(1+.08*Math.sin(t*6+s.fase));
      star5(c,sx,sy,R*1.2,'rgba(255,255,255,.55)'); star5(c,sx,sy,R,s.col.c);
      if(jugando && Math.abs(s.x-PX)*w<h*.09 && Math.abs(s.y-py)*h<h*.09){
        estrellas.splice(i,1); n++;
        tone(660+n%6*90,.12,'triangle',.11); tone(990+n%6*90,.15,'sine',.07,.06);
        sayAll([T.colores[s.col.k]]);
        for(let k=0;k<8;k++) chispas.push({x:sx,y:sy,a:k*Math.PI/4,v:h*(.25+Math.random()*.2),vida:.5,col:s.col.c});
      } else if(s.x<-.1) estrellas.splice(i,1);
    }
    for(let i=chispas.length-1;i>=0;i--){ const p=chispas[i]; p.vida-=dt; if(p.vida<=0){ chispas.splice(i,1); continue; } const k=.5-p.vida; star5(c,p.x+Math.cos(p.a)*p.v*k,p.y+Math.sin(p.a)*p.v*k,h*.018*p.vida*2,p.col); }
    // el avión (con el personaje en la ventanita)
    drawJet(c,PX*w,py*h,h*.15,Math.max(-.35,Math.min(.35,(ty-py)*1.6)),t);
    // contador y tiempo
    c.save(); c.fillStyle='rgba(255,255,255,.85)'; rr(c,h*.03,h*.03,h*.26,h*.12,h*.06); c.fill();
    star5(c,h*.1,h*.09,h*.045,'#FFC93C'); c.fillStyle='#22314F'; c.font=`800 ${Math.round(h*.08)}px 'Baloo 2',sans-serif`; c.textAlign='left'; c.textBaseline='middle'; c.fillText(String(n),h*.16,h*.095);
    if(jugando){ const k=Math.max(0,1-(t-t0)/DUR); c.fillStyle='rgba(255,255,255,.6)'; rr(c,w*.3,h*.06,w*.6,h*.03,h*.015); c.fill(); c.fillStyle='#2FBF8F'; rr(c,w*.3,h*.06,w*.6*k,h*.03,h*.015); c.fill(); }
    if(terminado){ c.globalAlpha=Math.min(1,(t-tFin)*2); c.font=`800 ${Math.round(h*.13)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.lineWidth=h*.025; c.strokeStyle='#22314F'; const txt='★ '+n; c.strokeText(txt,w/2,h*.5); c.fillStyle='#FFC93C'; c.fillText(txt,w/2,h*.5); }
    c.restore();
  });

  let tFin=0;
  async function terminar(){
    tFin=performance.now()/1000; T2.limpiar(); sfx.yay();
    await sayAll([textoN(tx.fin,n), praise(true)]);
    if(M.alive()) resolve(n);
  }
  (async()=>{
    await sayAll([M.aviso, tx.intro]); if(!M.alive()) return T2.limpiar();
    t0=performance.now()/1000; prox=.5; jugando=true; sfx.whoosh();
  })();
});

/* ---------------------------------------------------------
   RESTAURANTE · La pizza: tocá un ingrediente (se dice su nombre)
   y después tocá la pizza para ponerlo. Al horno, y la clienta la prueba.
   --------------------------------------------------------- */
MICROJUEGOS.pizza = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, ings=tx.ingredientes, cv=M.canvas;
  const piezas=[]; let salsa=false, sel=null, fase='armar', tHorno=0, prev=null, t=0;
  const cliente=(cap.estaciones.M||{}).npc;
  const geo=(w,h)=>({cx:w*.4, cy:h*.56, R:h*.34});
  let G0={cx:0,cy:0,R:1};

  function poner(k, rx, ry){
    if(fase!=='armar') return;
    if(rx==null){ const a=Math.random()*Math.PI*2, d=Math.sqrt(Math.random())*.72; rx=Math.cos(a)*d; ry=Math.sin(a)*d; }
    if(k==='salsa' && !salsa){ salsa=true; } else piezas.push({k, x:rx, y:ry, rot:Math.random()*6, tam:.85+Math.random()*.35, t});
    tone(520+Math.random()*200,.08,'triangle',.08);
  }
  M.actions.innerHTML=`<div class="ings">${ings.map(g=>`<button class="ing" data-k="${g.k}" aria-label="${esc(g.texto)}"${enAttr(enDe(g.texto))}>${img(g.k)}</button>`).join('')}</div>`
    + B('horno','next',tx.horno,'go');
  const botones=[...M.actions.querySelectorAll('.ing')], horno=M.actions.querySelector('[data-act=horno]');
  botones.forEach(b=>b.addEventListener('click',()=>{
    if(fase!=='armar') return;
    sel=b.dataset.k; botones.forEach(x=>x.classList.toggle('on',x===b));
    poner(sel); const g=ings.find(x=>x.k===sel); sayAll([g.texto]);
  }));
  cv.addEventListener('pointerdown',e=>{
    if(fase!=='armar' || !sel) return;
    const r=cv.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    const rx=(x-G0.cx)/G0.R, ry=(y-G0.cy)/G0.R;
    if(rx*rx+ry*ry<.8) poner(sel,rx,ry);
  });
  onAct('horno',async()=>{
    if(fase!=='armar') return;
    if(piezas.length+(salsa?1:0)<3){ sfx.oops(); sayAll([tx.mas]); return; }
    fase='horno'; tHorno=t; horno.disabled=true; botones.forEach(b=>b.disabled=true);
    sfx.whoosh(); sayAll([tx.horno]);
    setTimeout(()=>{ if(!M.alive()) return; sfx.ding(); }, 2600);
    setTimeout(async()=>{
      if(!M.alive()) return; fase='lista'; sfx.yay();
      await sayAll([tx.listo, praise(true)]);
      if(M.alive()) resolve(piezas.length);
    }, 3400);
  });

  function dibujarPieza(c,p,cx,cy,R,cocida){
    const x=cx+p.x*R, y=cy+p.y*R, s=R*p.tam;
    c.save(); c.translate(x,y); c.rotate(p.rot);
    switch(p.k){
      case 'salsa': ell(c,0,0,s*.2,s*.17,'#D93A2B'); break;
      case 'queso': { const col=cocida?'#FFD45C':'#FFF1B8'; ell(c,0,0,s*.15,s*.11,col); ell(c,s*.08,s*.04,s*.09,s*.07,col); if(cocida){ ell(c,-s*.04,-s*.02,s*.025,s*.02,'#E0A030'); } break; }
      case 'tomate': ell(c,0,0,s*.1,s*.1,'#E8483B'); ell(c,0,0,s*.075,s*.075,'#FF7A6B'); for(let i=0;i<5;i++){ const a=i*1.256; ell(c,Math.cos(a)*s*.04,Math.sin(a)*s*.04,s*.012,s*.018,'#FFE0A3',a); } break;
      case 'aceituna': ell(c,0,0,s*.055,s*.055,'#2B2B36'); ell(c,0,0,s*.025,s*.025,cocida?'#C9302C':'#E8483B'); break;
      case 'albahaca': ell(c,0,0,s*.09,s*.045,'#2E9E5E'); c.strokeStyle='#1F7A45'; c.lineWidth=s*.01; c.beginPath(); c.moveTo(-s*.08,0); c.lineTo(s*.08,0); c.stroke(); break;
      case 'hongo': c.fillStyle='#E8D6B8'; c.beginPath(); c.ellipse(0,-s*.02,s*.08,s*.06,0,Math.PI,0); c.fill(); c.fillRect(-s*.025,-s*.02,s*.05,s*.07); c.fillStyle='#C9A27A'; c.fillRect(-s*.08,-s*.025,s*.16,s*.01); break;
    }
    c.restore();
  }
  live(cv,(c,w,h,tt)=>{
    t=tt; if(!M.alive()) return;
    // mesa de madera y horno de ladrillos
    c.fillStyle='#F7E1C4'; c.fillRect(0,0,w,h);
    c.fillStyle='#C98B4E'; c.fillRect(0,h*.62,w,h*.38); c.fillStyle='rgba(0,0,0,.08)'; for(let y=h*.66;y<h;y+=h*.07) c.fillRect(0,y,w,2);
    const ox=w*.82, oy=h*.5;
    c.fillStyle='#B5532E'; c.beginPath(); c.ellipse(ox,oy,h*.3,h*.3,0,Math.PI,0); c.lineTo(ox+h*.3,oy+h*.14); c.lineTo(ox-h*.3,oy+h*.14); c.closePath(); c.fill();
    c.strokeStyle='rgba(0,0,0,.15)'; c.lineWidth=2; for(let i=1;i<4;i++){ c.beginPath(); c.arc(ox,oy,h*.075*i,Math.PI,0); c.stroke(); }
    const brasa = fase==='horno' ? .7+.3*Math.sin(t*12) : .35;
    c.fillStyle='#2B1A12'; c.beginPath(); c.ellipse(ox,oy+h*.06,h*.17,h*.12,0,Math.PI,0); c.lineTo(ox+h*.17,oy+h*.08); c.lineTo(ox-h*.17,oy+h*.08); c.closePath(); c.fill();
    c.save(); c.globalAlpha=brasa; ell(c,ox,oy+h*.05,h*.12,h*.04,'#FF7A1A'); c.restore();
    // dónde está la pizza (en el horno se va y vuelve)
    let {cx,cy,R}=geo(w,h), escala=1;
    if(fase==='horno'){ const k=Math.min(1,(t-tHorno)/2.6), ida=Math.sin(Math.PI*k); cx=cx+(ox-cx)*ida; cy=cy+(oy+h*.02-cy)*ida; escala=1-.6*ida; }
    G0={cx,cy,R};
    const cocida = fase==='lista' || (fase==='horno' && t-tHorno>1.3);
    const r=R*escala;
    c.save(); c.globalAlpha=.18; ell(c,cx,cy+r*.12,r*1.08,r*.32,'#000'); c.restore();
    ell(c,cx,cy,r*1.04,r*1.04,cocida?'#C8843F':'#EED3A0');           // borde
    ell(c,cx,cy,r*.9,r*.9,cocida?'#E9B56E':'#F6E3BF');               // masa
    if(salsa) ell(c,cx,cy,r*.82,r*.82,cocida?'#C9302C':'#D93A2B');
    for(const p of piezas){ const pop=Math.min(1,(t-p.t)*6); c.save(); c.translate(cx,cy); c.scale(escala*pop,escala*pop); c.translate(-cx,-cy); dibujarPieza(c,p,cx,cy,R,cocida); c.restore(); }
    if(fase==='lista'){
      for(let k=0;k<3;k++){ const p=(t*.5+k/3)%1; c.save(); c.globalAlpha=(1-p)*.6; c.strokeStyle='#fff'; c.lineWidth=h*.012; c.beginPath(); c.moveTo(cx+(k-1)*R*.4,cy-R*.6-p*h*.25); c.quadraticCurveTo(cx+(k-1)*R*.4+h*.03,cy-R*.75-p*h*.25,cx+(k-1)*R*.4,cy-R*.9-p*h*.25); c.stroke(); c.restore(); }
      if(cliente){ drawAnimal(c,cliente,w*.72,h*.97,h*.5,{t,hat:cliente.hat,facing:-1,mood:'talk'}); for(let k=0;k<5;k++){ const p=(t*.3+k/5)%1; c.save(); c.globalAlpha=1-p; heart(c,w*.72+Math.sin(t*2+k)*h*.08,h*.35-p*h*.3,h*.025); c.restore(); } }
    }
  });
  sayAll([M.aviso, tx.intro]);
});

/* ---------------------------------------------------------
   TORRE DEL RELOJ · Poné el reloj en hora: el relator dice una hora,
   el chico toca el número de la hora y elige en punto / y cuarto / y media / menos cuarto.
   --------------------------------------------------------- */
MICROJUEGOS.hora = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, nums=cap.numeros, cv=M.canvas, RONDAS=5;
  const TIPOS=['punto','cuarto','media','menos'], MIN={punto:0, cuarto:15, media:30, menos:45};
  // "menos cuarto" se dice con la hora que viene: las siete menos cuarto son las 6:45
  const real=(n,t)=> t==='menos' ? {h:(n+10)%12+1, m:45} : {h:n, m:MIN[t]};
  const total=(n,t)=>{ const r=real(n,t); return (r.h%12)*60+r.m; };
  let ronda=0, bien=0, meta=null, selH=12, selT='punto', visto=total(12,'punto'), listo=false, prev=null;
  // el final: relojes despertadores que saltan y suenan; tocándolos se rompen (y se cuentan)
  let modo='hora', relojes=[], rotos=0, finRomper=null; const piezas=particulas();
  const geo=(w,h)=>({x:w*.5, y:h*.5, r:h*.42});
  let G0={x:0,y:0,r:1};

  M.actions.innerHTML=`<div class="tipos">${B('menos1','left','','soft hourbtn')}${B('mas1','right','','soft hourbtn')}
    ${TIPOS.map(t=>`<button class="tipo" data-t="${t}"${enAttr(enDe(tx.tipos[t]))}>${img('m'+String(MIN[t]).padStart(2,'0'))}<span>${esc(tx.tipos[t])}</span></button>`).join('')}</div>`
    + B('listo','check',T.listo,'go');
  const tipos=[...M.actions.querySelectorAll('.tipo')];
  const marcarTipo=()=>tipos.forEach(b=>b.classList.toggle('on',b.dataset.t===selT));
  const ponerHora=n=>{ if(!listo) return; selH=n; tone(700,.06,'triangle',.07); sayAll([sonido(nums[n-1])]); };
  onAct('menos1',()=>ponerHora(selH===1?12:selH-1));
  onAct('mas1',()=>ponerHora(selH===12?1:selH+1));
  tipos.forEach(b=>b.addEventListener('click',()=>{ if(!listo) return; selT=b.dataset.t; marcarTipo(); sayAll([tx.tipos[selT]]); }));
  cv.addEventListener('pointerdown',e=>{
    if(modo==='romper') return romperEn(e);
    const r=cv.getBoundingClientRect(), dx=e.clientX-r.left-G0.x, dy=e.clientY-r.top-G0.y;
    if(Math.hypot(dx,dy)>G0.r*1.1) return;
    let n=Math.round(((Math.atan2(dx,-dy)+Math.PI*2)%(Math.PI*2))/(Math.PI/6)); if(n===0) n=12;
    ponerHora(n);
  });
  marcarTipo();

  live(cv,(c,w,h,t)=>{
    const dt=prev==null?0:Math.min(.05,t-prev); prev=t; if(!M.alive()) return;
    c.fillStyle='#EDE6FF'; c.fillRect(0,0,w,h);
    for(let i=0;i<6;i++) drawEngranaje(c,w*(i%2?.06:.94),h*(.15+i*.15),h*.07,(i%2?1:-1)*t*.6,'rgba(139,111,232,.25)');
    if(modo==='romper'){ dibujarRelojes(c,w,h,t,dt); return; }
    // las agujas van suave hacia lo elegido (por el camino más corto)
    let d=total(selH,selT)-visto; d=((d%720)+1080)%720-360; visto+=d*Math.min(1,dt*7);
    const g=G0=geo(w,h), v=((visto%720)+720)%720;
    drawReloj(c,g.x,g.y,g.r,Math.floor(v/60),v%60,{marca:selH, borde:'#8B6FE8'});
    // estrellas ganadas
    for(let i=0;i<RONDAS;i++) star5(c,w*.84+(i%3)*h*.09,h*(.12+Math.floor(i/3)*.1),h*.035,i<bien?'#FFC93C':'rgba(34,49,79,.15)');
  });

  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ sfx.yay(); await sayAll([textoN(tx.fin,bien), praise(true)]); if(!M.alive()) return; await romper(); if(M.alive()) resolve(bien); return; }
    ronda++;
    let n; do{ n=2+Math.floor(Math.random()*11); }while(meta && n===meta.n);
    meta={n, t:TIPOS[Math.floor(Math.random()*4)]};
    listo=false;
    await sayAll([tx.pon, tx.hora(nums[n-1], meta.t)]);
    listo=true;
  }
  onAct('listo',async()=>{
    if(!listo || !M.alive()) return; listo=false;
    const frase=tx.hora(nums[meta.n-1], meta.t);
    if(selH===meta.n && selT===meta.t){ bien++; sfx.yay(); await sayAll([praise(), frase]); }
    else { sfx.oops(); selH=meta.n; selT=meta.t; marcarTipo(); await sayAll([tx.asi, frase]); }
    await sleep(400); nuevaRonda();
  });
  function romper(){
    modo='romper'; M.actions.innerHTML='';
    relojes=Array.from({length:8},(_,i)=>({x:.12+Math.random()*.76, y:.2+Math.random()*.6, vx:(Math.random()<.5?-1:1)*(.12+Math.random()*.15), vy:(Math.random()<.5?-1:1)*(.1+Math.random()*.12),
      r:.075+Math.random()*.035, h:1+Math.floor(Math.random()*12), m:[0,15,30,45][i%4], col:['#E8483B','#2E86DE','#2FBF8F','#FFC93C','#8B6FE8','#FF9B3D'][i%6], fase:Math.random()*6, roto:false}));
    const timbre=setInterval(()=>{ if(!M.alive()||modo!=='romper'||!relojes.some(r=>!r.roto)) return clearInterval(timbre); tone(1500,.04,'square',.025); tone(1700,.04,'square',.025,.06); },300);
    sayAll([tx.romper]);
    return new Promise(res=>{ finRomper=res; setTimeout(()=>{ if(finRomper){ finRomper=null; res(); } },25000); });
  }
  function romperEn(e){
    const r=cv.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height, asp=r.width/r.height;
    const rl=relojes.find(k=>!k.roto && Math.hypot((k.x-x)*asp,k.y-y)<k.r*1.3); if(!rl) return;
    rl.roto=true; rotos++;
    noise(.35,.14,2500,400); tone(220,.18,'square',.06); tone(1800,.08,'triangle',.05,.05);
    const H=r.height, px=rl.x*r.width, py=rl.y*H;
    for(let i=0;i<14;i++){ const a=Math.random()*Math.PI*2, v=H*(.4+Math.random()*.7), tipo=i%3;
      piezas.agregar({x:px,y:py,vx:Math.cos(a)*v,vy:Math.sin(a)*v-H*.5,vida:1.6,vida0:1.6,vr:(Math.random()-.5)*12,
        dibujar:(c,p,k)=>{ c.save(); c.globalAlpha=k; c.translate(p.x,p.y); c.rotate(p.rot);
          if(tipo===0) drawEngranaje(c,0,0,H*.025,0,'#AEB8C8');
          else if(tipo===1){ c.font=`800 ${Math.round(H*.05)}px 'Baloo 2',sans-serif`; c.fillStyle='#22314F'; c.textAlign='center'; c.fillText(String(1+i%12),0,0); }
          else { c.fillStyle=rl.col; c.fillRect(-H*.02,-H*.01,H*.04,H*.02); }
          c.restore(); }});
    }
    sayAll([nums[rotos-1]]);
    if(relojes.every(k=>k.roto) && finRomper){ const f=finRomper; finRomper=null; setTimeout(()=>{ sfx.yay(); f(); },1400); }
  }
  function dibujarRelojes(c,w,h,t,dt){
    for(const k of relojes){
      if(k.roto) continue;
      k.x+=k.vx*dt; k.y+=k.vy*dt;
      if(k.x<k.r*h/w || k.x>1-k.r*h/w) k.vx*=-1; if(k.y<k.r+.04 || k.y>1-k.r-.04) k.vy*=-1;
      const x=k.x*w, y=k.y*h, R=k.r*h, sh=Math.sin(t*40+k.fase)*.08;
      c.save(); c.translate(x,y); c.rotate(sh);
      for(const sd of [-1,1]) ell(c,sd*R*.62,-R*.92,R*.32,R*.26,k.col);
      c.strokeStyle='#5C6A86'; c.lineWidth=R*.12; c.beginPath(); c.moveTo(-R*.5,R*.85); c.lineTo(-R*.7,R*1.15); c.moveTo(R*.5,R*.85); c.lineTo(R*.7,R*1.15); c.stroke();
      c.restore();
      drawReloj(c,x+Math.sin(t*40+k.fase)*2,y,R,k.h,k.m,{numeros:false,borde:k.col});
    }
    piezas.paso(c,dt,h);
    star5(c,w*.92,h*.1,h*.05,'#FFC93C'); cartel(c,String(rotos),w*.92,h*.21,h*.08);
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   NUESTRA CASA · La torta de la familia: tocá algo rico (se dice su nombre)
   y después tocá la torta para ponerlo. Al final se soplan las velas.
   --------------------------------------------------------- */
MICROJUEGOS.torta = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, ings=tx.ingredientes, cv=M.canvas;
  const piezas=[]; let sel=null, fase='armar', tSop=0, t=0;
  const familia=(cap.estaciones.M||{}).npc;
  let G0={cx:0,cy:0,rx:1,ry:1};
  const conf=Array.from({length:60},(_,i)=>({x:Math.random(),s:.6+Math.random()*.8,c:['#FF6F59','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8'][i%5],r:Math.random()*6}));
  const COLS=['#E8483B','#FFC93C','#2E86DE','#2FBF8F','#8B6FE8','#FF8FB8'];

  function poner(k, x, y){
    if(fase!=='armar') return;
    if(x==null){ const a=Math.random()*Math.PI*2, d=Math.sqrt(Math.random())*.8; x=Math.cos(a)*d; y=Math.sin(a)*d; }
    if(k==='confites'){ for(let i=0;i<7;i++) piezas.push({k, x:x+(Math.random()-.5)*.3, y:y+(Math.random()-.5)*.3, col:COLS[i%6], t}); }
    else piezas.push({k, x, y, rot:(Math.random()-.5)*.6, col:COLS[Math.floor(Math.random()*6)], t});
    piezas.sort((a,b)=>a.y-b.y);
    tone(560+Math.random()*200,.08,'triangle',.08);
  }
  M.actions.innerHTML=`<div class="ings">${ings.map(g=>`<button class="ing" data-k="${g.k}" aria-label="${esc(g.texto)}"${enAttr(enDe(g.texto))}>${img(g.k)}</button>`).join('')}</div>`
    + B('soplar','star',tx.soplar,'go');
  const botones=[...M.actions.querySelectorAll('.ing')], soplar=M.actions.querySelector('[data-act=soplar]');
  botones.forEach(b=>b.addEventListener('click',()=>{
    if(fase!=='armar') return;
    sel=b.dataset.k; botones.forEach(x=>x.classList.toggle('on',x===b));
    poner(sel); sayAll([ings.find(x=>x.k===sel).texto]);
  }));
  cv.addEventListener('pointerdown',e=>{
    if(fase!=='armar' || !sel) return;
    const r=cv.getBoundingClientRect(), x=(e.clientX-r.left-G0.cx)/G0.rx, y=(e.clientY-r.top-G0.cy)/G0.ry;
    if(x*x+y*y<.9) poner(sel,x,y);
  });
  onAct('soplar',async()=>{
    if(fase!=='armar') return;
    if(piezas.length<3){ sfx.oops(); sayAll([tx.mas]); return; }
    if(!piezas.some(p=>p.k==='vela')) for(const x of [-.4,0,.4]) poner('vela',x,-.1);
    fase='soplar'; tSop=t; soplar.disabled=true; botones.forEach(b=>b.disabled=true);
    await sayAll([tx.soplar]); if(!M.alive()) return;
    sfx.whoosh();
    setTimeout(async()=>{
      if(!M.alive()) return; fase='lista'; sfx.yay();
      await sayAll([tx.listo, praise(true)]);
      if(M.alive()) resolve(piezas.length);
    }, 1200);
  });

  function pieza(c,p,x,y,s,apagada){
    switch(p.k){
      case 'crema': ell(c,x,y,s*.1,s*.06,'#FFFFFF'); ell(c,x,y-s*.05,s*.07,s*.045,'#FFFFFF'); ell(c,x,y-s*.09,s*.035,s*.03,'#FFFFFF'); c.strokeStyle='rgba(34,49,79,.12)'; c.lineWidth=1; c.beginPath(); c.ellipse(x,y,s*.1,s*.06,0,0,Math.PI); c.stroke(); break;
      case 'frutilla': poly(c,[x-s*.06,y-s*.03, x+s*.06,y-s*.03, x,y+s*.08],'#E8483B'); ell(c,x,y-s*.03,s*.06,s*.035,'#E8483B'); poly(c,[x-s*.045,y-s*.05, x+s*.045,y-s*.05, x,y-s*.02],'#2E9E5E'); for(const [dx,dy] of [[-.02,0],[.02,.01],[0,.035]]) ell(c,x+s*dx,y+s*dy,s*.006,s*.008,'#FFE0A3'); break;
      case 'chocolate': c.save(); c.translate(x,y); c.rotate(p.rot); c.fillStyle='#6B3A1E'; rr(c,-s*.05,-s*.03,s*.1,s*.06,s*.01); c.fill(); c.fillStyle='#8A5030'; c.fillRect(-s*.045,-s*.025,s*.04,s*.022); c.restore(); break;
      case 'confites': c.save(); c.translate(x,y); c.rotate(p.x*7); c.fillStyle=p.col; rr(c,-s*.018,-s*.006,s*.036,s*.012,s*.006); c.fill(); c.restore(); break;
      case 'cereza': c.strokeStyle='#2E9E5E'; c.lineWidth=s*.012; c.beginPath(); c.moveTo(x,y-s*.04); c.quadraticCurveTo(x+s*.02,y-s*.1,x+s*.05,y-s*.11); c.stroke(); ell(c,x,y,s*.045,s*.045,'#C9302C'); ell(c,x-s*.015,y-s*.015,s*.012,s*.012,'#FF8A75'); break;
      case 'vela': { c.fillStyle=p.col; rr(c,x-s*.018,y-s*.16,s*.036,s*.16,s*.008); c.fill(); c.fillStyle='rgba(255,255,255,.5)'; for(let k=0;k<3;k++) c.fillRect(x-s*.018,y-s*.14+k*s*.05,s*.036,s*.012);
        if(!apagada){ const f=1+.15*Math.sin(t*14+p.x*9); ell(c,x,y-s*.2,s*.022*f,s*.04*f,'#FFC93C'); ell(c,x,y-s*.19,s*.01,s*.02,'#FFF59A'); }
        else { c.save(); c.globalAlpha=Math.max(0,1-(t-tSop-1)*.5); c.strokeStyle='#AEB8C8'; c.lineWidth=s*.008; c.beginPath(); c.moveTo(x,y-s*.17); c.quadraticCurveTo(x+s*.03,y-s*.24,x,y-s*.3); c.stroke(); c.restore(); }
        break; }
    }
  }
  live(cv,(c,w,h,tt)=>{
    t=tt; if(!M.alive()) return;
    c.fillStyle='#FFE3C2'; c.fillRect(0,0,w,h);
    c.fillStyle='rgba(232,132,107,.15)'; for(let x=0;x<w;x+=w*.06) c.fillRect(x,0,w*.03,h*.62);
    for(let i=0;i<8;i++){ const x=w*(.04+i*.13), y=h*(.06+Math.abs(Math.sin(i*1.7))*.05); c.strokeStyle='#C4664F'; c.lineWidth=1.5; c.beginPath(); c.moveTo(x,y); c.lineTo(x+w*.065,y+h*.02); c.stroke(); poly(c,[x,y, x+w*.03,y+h*.01, x+w*.012,y+h*.07],COLS[i%6]); }
    c.fillStyle='#C98B4E'; c.fillRect(0,h*.78,w,h*.22);
    const cx=w*.42, cy=h*.46, rx=h*.36, ry=h*.12, alto=h*.24;
    G0={cx,cy,rx,ry};
    ell(c,cx,h*.8,rx*1.25,ry*.9,'#E3E8F0'); ell(c,cx,h*.79,rx*1.15,ry*.75,'#FFFFFF');
    c.fillStyle='#F6C6D6'; c.fillRect(cx-rx,cy,rx*2,alto); ell(c,cx,cy+alto,rx,ry,'#F6C6D6');
    c.fillStyle='#FF8FB8'; c.fillRect(cx-rx,cy+alto*.45,rx*2,alto*.12);
    for(let i=0;i<9;i++){ const a=Math.PI*(i/8); ell(c,cx-Math.cos(a)*rx*.98,cy+Math.sin(a)*ry*.6+h*.02,h*.03,h*.035,'#FFFFFF'); }
    ell(c,cx,cy,rx,ry,'#FFF6FA');
    const apagadas = fase==='soplar' && t-tSop>1 || fase==='lista';
    for(const p of piezas){ const pop=Math.min(1,(t-p.t)*6); c.save(); const x=cx+p.x*rx, y=cy+p.y*ry; c.translate(x,y); c.scale(pop,pop); c.translate(-x,-y); pieza(c,p,x,y,h,apagadas); c.restore(); }
    if(fase==='soplar' && t-tSop<1.2){ const k=(t-tSop)/1.2; c.save(); c.globalAlpha=.5*(1-k); for(let i=0;i<4;i++){ c.strokeStyle='#AEDCF5'; c.lineWidth=h*.012; c.beginPath(); c.moveTo(w*.95-k*w*.3,h*(.3+i*.06)); c.quadraticCurveTo(w*.85-k*w*.3,h*(.28+i*.06),w*.75-k*w*.3,h*(.3+i*.06)); c.stroke(); } c.restore(); }
    if(fase==='lista'){
      if(familia){ drawAnimal(c,familia,w*.82,h*.97,h*.48,{t,facing:-1,wave:true,mood:'talk'}); }
      const k=t-tSop-1.2; conf.forEach(p=>{ const y=((p.x*h*1.3 + k*p.s*h*.35) % (h+40))-20; const x=p.x*w+Math.sin(k*2+p.r)*14; c.save(); c.translate(x,y); c.rotate(k*3*p.s+p.r); c.fillStyle=p.c; c.fillRect(-4,-2.5,8,5); c.restore(); });
    }
  });
  sayAll([M.aviso, tx.intro]);
});

/* ---------------------------------------------------------
   LA FERIA · Llená la canasta: el relator pide "tres manzanas" y el chico toca
   esa fruta; cada fruta que cae se cuenta en voz alta. Arriba, unos círculos
   muestran cuántas faltan (para contar mirando).
   --------------------------------------------------------- */
MICROJUEGOS.canasta = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, ings=tx.ingredientes, nums=cap.numeros||T.numeros.slice(1), cv=M.canvas, RONDAS=5;
  let ronda=0, meta=null, dentro=[], vuelan=[], total=0, listo=false, t=0;
  M.actions.innerHTML=`<div class="ings">${ings.map(g=>`<button class="ing" data-k="${g.k}" aria-label="${esc(g.texto)}"${enAttr(enDe(g.texto))}>${img(g.k)}</button>`).join('')}</div>`;
  const botones=[...M.actions.querySelectorAll('.ing')];
  const pedir=()=>tx.pon(nums[meta.n-1], ings.find(g=>g.k===meta.k));
  botones.forEach(b=>b.addEventListener('click',async()=>{
    if(!listo || !M.alive()) return;
    const g=ings.find(x=>x.k===b.dataset.k);
    if(b.dataset.k!==meta.k){ sfx.oops(); b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),450); sayAll([tx.esa(ings.find(x=>x.k===meta.k))]); return; }
    const n=dentro.length+1; dentro.push({k:g.k, x:(Math.random()-.5)*.6, t}); vuelan.push({k:g.k, t}); total++;
    tone(500+n*80,.12,'triangle',.1);
    if(n<meta.n){ sayAll([nums[n-1]]); return; }
    listo=false; sfx.yay();
    await sayAll([nums[n-1], praise(), tx.son(nums[n-1], g)]); if(!M.alive()) return;
    await sleep(500); nuevaRonda();
  }));

  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ await sayAll([textoN(tx.fin,total), praise(true)]); if(!M.alive()) return; await cortar(); if(M.alive()) resolve(total); return; }
    ronda++; dentro=[];
    let k; do{ k=ings[Math.floor(Math.random()*ings.length)].k; }while(meta && k===meta.k);
    meta={k, n:1+Math.floor(Math.random()*5)};
    await sayAll([pedir()]); listo=true;
  }
  // el final: las frutas saltan por el aire y se cortan pasando el dedo (o tocándolas); el relator dice cuál cortó
  const JUGO={manzana:'#E8483B', banana:'#FFD84A', naranja:'#FF9B3D', frutilla:'#E8304A', pera:'#B9D45C', limon:'#FFE04A'};
  let modo='canasta', vuelan2=[], cortadas=0, prox=0, t0c=0, rastro=[], ultDicho=0, apretado=false, dtc=0, prevc=null;
  const trozos=particulas();
  function cortar(){
    modo='cortar'; M.actions.innerHTML=''; t0c=t; prox=t+1;
    sayAll([tx.cortar]);
    return new Promise(res=>{ const fin=()=>{ if(!M.alive()) return res(); if(t-t0c<18) return setTimeout(fin,300); modo='fin'; sayAll([textoN(tx.cortadas,cortadas), praise(true)]).then(res); }; setTimeout(fin,1000); });
  }
  const puntoDe=e=>{ const r=cv.getBoundingClientRect(); return {x:e.clientX-r.left, y:e.clientY-r.top, h:r.height}; };
  function cortarEn(P){
    for(const f of vuelan2){ if(f.cortada) continue; if(Math.hypot(f.x-P.x,f.y-P.y)<P.h*.09){
      f.cortada=true; cortadas++; noise(.12,.1,3000,900); tone(300,.1,'triangle',.06);
      const g=ings.find(x=>x.k===f.k), H=P.h, col=JUGO[f.k]||'#E8483B';
      for(const lado of [-1,1]) trozos.agregar({x:f.x,y:f.y,vx:lado*H*.4+f.vx*.3,vy:-H*.3,vida:1.3,vida0:1.3,vr:lado*5,g:2.2,
        dibujar:(c,p,k)=>{ c.save(); c.globalAlpha=Math.min(1,k*2); c.translate(p.x,p.y); c.rotate(p.rot); c.beginPath(); c.rect(lado<0?-H*.08:0,-H*.08,H*.08,H*.16); c.clip(); drawImg(c,f.k,0,0,H*.13); c.restore(); }});
      for(let i=0;i<10;i++){ const a=Math.random()*Math.PI*2, v=H*(.2+Math.random()*.5); trozos.agregar({x:f.x,y:f.y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,vida:.7,vida0:.7,dibujar:(c,p,k)=>ell(c,p.x,p.y,H*.012*k+1,H*.012*k+1,col)}); }
      if(t-ultDicho>.9 && g){ ultDicho=t; sayAll([g.texto]); }
    } }
  }
  cv.addEventListener('pointerdown',e=>{ if(modo!=='cortar') return; apretado=true; const P=puntoDe(e); rastro=[{...P,t}]; cortarEn(P); try{ cv.setPointerCapture(e.pointerId); }catch(_){} });
  cv.addEventListener('pointermove',e=>{ if(modo!=='cortar' || !apretado) return; const P=puntoDe(e); rastro.push({...P,t}); cortarEn(P); });
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>cv.addEventListener(ev,()=>{ apretado=false; }));
  function dibujarCortar(c,w,h){
    dtc=prevc==null?0:Math.min(.05,t-prevc); prevc=t;
    if(modo==='cortar' && t>=prox && t-t0c<17){ prox=t+.45+Math.random()*.45; const k=ings[Math.floor(Math.random()*ings.length)].k;
      vuelan2.push({k, x:w*(.15+Math.random()*.7), y:h*1.05, vx:(Math.random()-.5)*w*.25, vy:-h*(1.25+Math.random()*.35), rot:0, vr:(Math.random()-.5)*6}); tone(200,.06,'sine',.05,0,400); }
    for(let i=vuelan2.length-1;i>=0;i--){ const f=vuelan2[i]; f.vy+=h*1.4*dtc; f.x+=f.vx*dtc; f.y+=f.vy*dtc; f.rot+=f.vr*dtc;
      if(f.cortada || f.y>h*1.2){ vuelan2.splice(i,1); continue; } drawImg(c,f.k,f.x,f.y,h*.15,f.rot); }
    trozos.paso(c,dtc,h);
    rastro=rastro.filter(p=>t-p.t<.18);
    if(rastro.length>1){ c.save(); c.strokeStyle='rgba(255,255,255,.9)'; c.lineCap='round'; c.lineJoin='round'; c.lineWidth=h*.025; c.beginPath(); rastro.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y)); c.stroke(); c.restore(); }
    star5(c,w*.08,h*.1,h*.05,'#FFC93C'); cartel(c,String(cortadas),w*.08,h*.21,h*.08);
  }
  live(cv,(c,w,h,tt)=>{
    t=tt; if(!M.alive()) return;
    bgFeria(c,w,h,t);
    if(modo!=='canasta'){ dibujarCortar(c,w,h); return; }
    c.fillStyle='#C98B4E'; c.fillRect(0,h*.78,w,h*.22);
    const bx=w*.5, by=h*.78;
    // lo que hay que poner: la fruta y un círculo por cada una
    if(meta){
      c.fillStyle='rgba(255,255,255,.92)'; rr(c,bx-h*(.12+meta.n*.07),h*.04,h*(.24+meta.n*.14),h*.17,h*.06); c.fill();
      drawImg(c,meta.k,bx-h*(meta.n*.07)-h*.02,h*.125,h*.13);
      for(let i=0;i<meta.n;i++){ const x=bx-h*(meta.n*.07)+h*.1+i*h*.14, y=h*.125, ok=i<dentro.length; ell(c,x,y,h*.05,h*.05,ok?'#2FBF8F':'#E3E8F0'); if(ok){ c.strokeStyle='#fff'; c.lineWidth=h*.012; c.lineCap='round'; c.beginPath(); c.moveTo(x-h*.02,y); c.lineTo(x-h*.005,y+h*.017); c.lineTo(x+h*.025,y-h*.017); c.stroke(); } }
    }
    // la canasta
    c.fillStyle='#B5753A'; c.beginPath(); c.moveTo(bx-h*.3,by-h*.26); c.lineTo(bx+h*.3,by-h*.26); c.lineTo(bx+h*.24,by); c.lineTo(bx-h*.24,by); c.closePath(); c.fill();
    c.strokeStyle='#8A5636'; c.lineWidth=h*.016; c.beginPath(); c.ellipse(bx,by-h*.26,h*.3,h*.05,0,Math.PI,0); c.stroke();
    c.strokeStyle='rgba(0,0,0,.12)'; c.lineWidth=2; for(let i=1;i<5;i++){ c.beginPath(); c.moveTo(bx-h*.3+i*h*.12,by-h*.26); c.lineTo(bx-h*.24+i*h*.096,by); c.stroke(); } for(let j=1;j<4;j++){ const y=by-h*.26+j*h*.065; c.beginPath(); c.moveTo(bx-h*(.3-j*.015),y); c.lineTo(bx+h*(.3-j*.015),y); c.stroke(); }
    dentro.forEach((d,i)=>{ const k=Math.min(1,(t-d.t)/.45); const y=h*.2+(by-h*.3-h*.2)*k*k - (i%2)*h*.03; drawImg(c,d.k,bx+d.x*h*.4,y,h*.13); });
    c.strokeStyle='#8A5636'; c.lineWidth=h*.025; c.beginPath(); c.ellipse(bx,by-h*.26,h*.3,h*.05,0,0,Math.PI); c.stroke();
    c.beginPath(); c.lineWidth=h*.02; c.arc(bx,by-h*.26,h*.24,Math.PI*1.05,Math.PI*1.95); c.stroke();
    if(cap.final && cap.final.npc) drawAnimal(c,cap.final.npc,w*.86,h*.98,h*.42,{t,hat:cap.final.npc.hat,facing:-1,mood:listo?null:'talk'});
  });
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   LA PLAZA · El barrilete: el relator dice "¡Arriba!", "¡Abajo!",
   "¡A la izquierda!" o "¡A la derecha!" y el chico lleva el barrilete
   hasta la estrella (flechas del teclado, los botones o tocando el cielo).
   --------------------------------------------------------- */
MICROJUEGOS.barrilete = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, cv=M.canvas, RONDAS=8, CENTRO={x:.5,y:.36};
  const DIRS=[{k:'ArrowUp',ico:'up',x:.5,y:.12},{k:'ArrowDown',ico:'down',x:.5,y:.6},{k:'ArrowLeft',ico:'left',x:.17,y:.36},{k:'ArrowRight',ico:'right',x:.83,y:.36}];
  const COL=['#E8483B','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8','#FF9B3D'];
  let ronda=0, meta=-1, ultimo=-1, listo=false, n=0, kx=CENTRO.x, ky=CENTRO.y, ox=CENTRO.x, oy=CENTRO.y, prev=null, mueca=0;
  const cola=[], chispas=[], nubes=Array.from({length:5},(_,i)=>({x:i/5+Math.random()*.1, y:.06+Math.random()*.4, r:.035+Math.random()*.03}));
  M.actions.innerHTML=`<div class="ings">${DIRS.map((d,i)=>`<button class="ing" data-d="${i}" aria-label="${esc(tx.dirs[i])}"${enAttr(enDe(tx.dirs[i]))}>${ICON[d.ico]}</button>`).join('')}</div>`;
  const elegir=async i=>{
    if(!listo || !M.alive()) return;
    if(i!==meta){ sfx.oops(); mueca=.5; const d=DIRS[i]; ox=CENTRO.x+(d.x-CENTRO.x)*.15; oy=CENTRO.y+(d.y-CENTRO.y)*.15; setTimeout(()=>{ ox=CENTRO.x; oy=CENTRO.y; },350); sayAll([tx.dirs[meta]]); return; }
    listo=false; const d=DIRS[i]; ox=d.x; oy=d.y;
    await sleep(700); if(!M.alive()) return;
    n++; tone(660+n%6*90,.12,'triangle',.11); tone(990+n%6*90,.15,'sine',.07,.06);
    for(let k=0;k<10;k++) chispas.push({x:d.x,y:d.y,a:k*Math.PI/5,vida:.6,col:COL[k%COL.length]});
    meta=-1; await sayAll([praise()]); if(!M.alive()) return;
    ox=CENTRO.x; oy=CENTRO.y; await sleep(600); nuevaRonda();
  };
  M.actions.querySelectorAll('.ing').forEach(b=>b.addEventListener('click',()=>elegir(+b.dataset.d)));
  const T2=teclasJuego(M, k=>{ if(modo==='correr') return; const i=DIRS.findIndex(d=>d.k===k); if(i>=0) elegir(i); });
  cv.addEventListener('pointerdown',e=>{ if(modo==='correr'){ subiendo=true; return; } const r=cv.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    let mejor=0, dist=9; DIRS.forEach((d,i)=>{ const dd=Math.hypot(d.x-x,(d.y-y)*.6); if(dd<dist){ dist=dd; mejor=i; } }); elegir(mejor); });

  /* el final: ¡a correr con el barrilete! El personaje corre por la plaza; mientras se mantiene
     apretado (el lienzo, el botón o la flecha de arriba) el barrilete sube, y si se suelta, baja.
     Hay estrellas a distintas alturas, globos y pájaros (que salen volando si los chocás). */
  let modo='dirs', subiendo=false, ky2=.4, avance=0, t0r=0, cosas=[], proxR=0, ultAviso=0, tr=0;
  const chispas2=particulas();
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>cv.addEventListener(ev,()=>{ subiendo=false; }));
  function correr(){
    modo='correr'; t0r=tr; proxR=tr+1.2;
    M.actions.innerHTML=`<button class="mbtn go" data-sube>${ICON.up}<span>${esc(tx.dirs[0])}</span></button>`;
    const b=M.actions.querySelector('[data-sube]');
    b.addEventListener('pointerdown',e=>{ e.preventDefault(); subiendo=true; }); ['pointerup','pointerleave','pointercancel'].forEach(ev=>b.addEventListener(ev,()=>{ subiendo=false; }));
    sayAll([tx.correr]);
    return new Promise(res=>{ const fin=()=>{ if(!M.alive()) return res(); if(tr-t0r<22) return setTimeout(fin,300); modo='fin'; res(); }; setTimeout(fin,1000); });
  }
  function dibujarCorrer(c,w,h,t,dt){
    tr=t; const vel=w*.28;
    if(modo==='correr'){
      const arriba=subiendo || T2.abajo.has('ArrowUp') || T2.abajo.has(' ');
      ky2+=(arriba?-.45:.28)*dt; ky2=Math.max(.1,Math.min(.68,ky2)); avance+=vel*dt;
      if(t>=proxR && t-t0r<20.5){ proxR=t+.7+Math.random()*.7; const r=Math.random(), y=.12+Math.random()*.55;
        cosas.push({tipo:r<.6?'estrella':r<.8?'globo':'pajaro', x:1.08, y, fase:Math.random()*6, col:['#E8483B','#2E86DE','#2FBF8F','#8B6FE8'][Math.floor(Math.random()*4)]});
        if(r<.6 && t-ultAviso>3){ if(y<.3){ ultAviso=t; sayAll([tx.dirs[0]]); } else if(y>.52){ ultAviso=t; sayAll([tx.dirs[1]]); } } }
    }
    // el cielo, las colinas y los árboles que pasan
    const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#5DB8F0'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
    for(let i=0;i<4;i++){ const x=((i*.33-avance/w*.1)%1.3+1.3)%1.3-.15; cloud(c,x*w,h*(.1+i%2*.12),h*.04); }
    for(let i=0;i<5;i++){ const x=((i*.28-avance/w*.3)%1.4+1.4)%1.4-.2; ell(c,x*w,h*.84,w*.22,h*.18,'#9ED67E'); }
    for(let i=0;i<4;i++){ const x=((i*.37-avance/w*.6)%1.48+1.48)%1.48-.24; c.fillStyle='#8A5636'; c.fillRect(x*w-h*.02,h*.62,h*.04,h*.18); ell(c,x*w,h*.58,h*.1,h*.09,'#3CB371'); }
    c.fillStyle='#86CC6E'; c.fillRect(0,h*.78,w,h*.22); c.fillStyle='#74BC5C'; for(let i=0;i<12;i++){ const x=((i*.09-avance/w)%1.08+1.08)%1.08*w; c.fillRect(x,h*(.84+(i%3)*.04),4,10); }
    // el barrilete y el hilo
    const hx=w*.2, hy=h*.97, kx=w*.5, ky=ky2*h+Math.sin(t*2)*h*.01;
    c.strokeStyle='rgba(34,49,79,.5)'; c.lineWidth=1.5; c.beginPath(); c.moveTo(hx+h*.05,hy-h*.15); c.quadraticCurveTo((kx+hx)/2,ky+h*.2,kx,ky+h*.06); c.stroke();
    for(let j=0;j<7;j++){ const x=kx-j*h*.035+Math.sin(t*5+j)*h*.01, y=ky+h*.08+j*h*.025; poly(c,[x-h*.018,y-h*.01, x+h*.018,y+h*.01, x+h*.018,y-h*.01, x-h*.018,y+h*.01],['#E8483B','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8','#FF9B3D','#FF8FB8'][j]); }
    c.save(); c.translate(kx,ky); c.rotate(Math.sin(t*2)*.08+(subiendo?-.15:.1)); const K=h*.08;
    poly(c,[0,-K, K*.75,0, 0,0],'#E8483B'); poly(c,[0,-K, -K*.75,0, 0,0],'#FFC93C'); poly(c,[0,K*1.1, K*.75,0, 0,0],'#2E86DE'); poly(c,[0,K*1.1, -K*.75,0, 0,0],'#2FBF8F');
    c.restore();
    // estrellas, globos y pájaros
    for(let i=cosas.length-1;i>=0;i--){ const o=cosas[i]; if(modo==='correr'||modo==='fin') o.x-=(o.tipo==='pajaro'?.32:.24)*dt; const x=o.x*w, y=o.y*h+Math.sin(t*3+o.fase)*h*.02;
      if(o.huye){ o.y-=dt*.6; o.x+=dt*.3; }
      if(o.tipo==='estrella') star5(c,x,y,h*.045,'#FFC93C');
      else if(o.tipo==='globo'){ c.strokeStyle='rgba(34,49,79,.4)'; c.beginPath(); c.moveTo(x,y+h*.05); c.lineTo(x,y+h*.12); c.stroke(); ell(c,x,y,h*.035,h*.045,o.col); }
      else { const a=Math.sin(t*14+o.fase)*h*.02; c.strokeStyle='#22314F'; c.lineWidth=3; c.beginPath(); c.moveTo(x-h*.04,y-a); c.quadraticCurveTo(x-h*.02,y-h*.02,x,y); c.quadraticCurveTo(x+h*.02,y-h*.02,x+h*.04,y-a); c.stroke(); }
      if(!o.tocada && Math.abs(x-kx)<h*.07 && Math.abs(y-ky)<h*.08){ o.tocada=true;
        if(o.tipo==='estrella'){ n++; tone(660+n%6*90,.12,'triangle',.11); tone(990+n%6*90,.15,'sine',.07,.06); for(let k=0;k<8;k++){ const a=k*Math.PI/4; chispas2.agregar({x,y,vx:Math.cos(a)*h*.4,vy:Math.sin(a)*h*.4,g:0,vida:.5,vida0:.5,dibujar:(c,p,kk)=>star5(c,p.x,p.y,h*.018*kk+1,'#FFC93C')}); } cosas.splice(i,1); continue; }
        if(o.tipo==='globo'){ noise(.12,.12,1500,300); for(let k=0;k<8;k++){ const a=k*Math.PI/4; chispas2.agregar({x,y,vx:Math.cos(a)*h*.5,vy:Math.sin(a)*h*.5,g:.5,vida:.5,vida0:.5,dibujar:(c,p,kk)=>ell(c,p.x,p.y,h*.01,h*.01,o.col)}); } cosas.splice(i,1); continue; }
        o.huye=true; tone(1300,.06,'square',.04); tone(1600,.06,'square',.04,.08); }
      if(o.x<-.1 || o.y<-.1) cosas.splice(i,1);
    }
    chispas2.paso(c,dt,h);
    drawHero(c,hx,hy,h*.26,{t,facing:1,accion:modo==='correr'?'correr':null,mood:'wow'});
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='right'; c.fillStyle='#22314F'; c.fillText(`★ ${n}`,w*.96,h*.09); c.restore();
  }
  live(cv,(c,w,h,t)=>{
    const dt=prev==null?0:Math.min(.05,t-prev); prev=t;
    if(!M.alive()){ T2.limpiar(); return; }
    if(modo!=='dirs'){ dibujarCorrer(c,w,h,t,dt); return; }
    const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#5DB8F0'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
    for(const nb of nubes){ nb.x-=dt*.02; if(nb.x<-.15) nb.x=1.15; cloud(c,nb.x*w,nb.y*h,nb.r*h); }
    c.fillStyle='#86CC6E'; c.fillRect(0,h*.8,w,h*.2);
    // la estrella que hay que buscar
    if(meta>=0){ const d=DIRS[meta], R=h*.06*(1+.12*Math.sin(t*6)); star5(c,d.x*w,d.y*h,R*1.3,'rgba(255,255,255,.6)'); star5(c,d.x*w,d.y*h,R,'#FFC93C'); }
    // el barrilete va hacia donde le dicen, con un poco de viento
    kx+=(ox-kx)*Math.min(1,dt*5); ky+=(oy-ky)*Math.min(1,dt*5); if(mueca>0) mueca-=dt;
    const px=kx*w+Math.sin(t*1.7)*h*.012, py=ky*h+Math.cos(t*1.3)*h*.01, rot=Math.sin(t*2)*.08+(ox-kx)*1.2+(mueca>0?Math.sin(t*40)*.15:0);
    cola.push({x:px,y:py}); if(cola.length>21) cola.shift();
    // el hilo, hasta las manos del personaje
    const hx=w*.5, hy=h*.97;
    c.strokeStyle='rgba(34,49,79,.5)'; c.lineWidth=1.5; c.beginPath(); c.moveTo(hx+h*.04,hy-h*.16); c.quadraticCurveTo((px+hx)/2,py+h*.25,px,py+h*.06); c.stroke();
    // la cola: moñitos de colores que siguen al barrilete
    for(let i=cola.length-1, j=0; i>=0; i-=3, j++){ const p=cola[i], x=p.x+Math.sin(t*4+j)*h*.015, y=p.y+h*.09+j*h*.024; c.fillStyle=COL[j%COL.length]; poly(c,[x-h*.02,y-h*.012, x+h*.02,y+h*.012, x+h*.02,y-h*.012, x-h*.02,y+h*.012],COL[j%COL.length]); }
    c.save(); c.translate(px,py); c.rotate(rot); const K=h*.09;
    poly(c,[0,-K, K*.75,0, 0,0],'#E8483B'); poly(c,[0,-K, -K*.75,0, 0,0],'#FFC93C'); poly(c,[0,K*1.1, K*.75,0, 0,0],'#2E86DE'); poly(c,[0,K*1.1, -K*.75,0, 0,0],'#2FBF8F');
    c.strokeStyle='#8A5636'; c.lineWidth=2; c.beginPath(); c.moveTo(0,-K); c.lineTo(0,K*1.1); c.moveTo(-K*.75,0); c.lineTo(K*.75,0); c.stroke();
    c.restore();
    drawHero(c,hx,hy,h*.26,{t,facing:1,wave:true,mood:meta<0&&n?'wow':null});
    for(let i=chispas.length-1;i>=0;i--){ const p=chispas[i]; p.vida-=dt; if(p.vida<=0){ chispas.splice(i,1); continue; } const k=.6-p.vida; star5(c,p.x*w+Math.cos(p.a)*h*.4*k,p.y*h+Math.sin(p.a)*h*.4*k,h*.02*p.vida*2,p.col); }
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='right'; c.fillStyle='#22314F'; c.fillText(`★ ${n}`,w*.96,h*.09); c.restore();
  });

  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ await sayAll([praise(true)]); if(!M.alive()) return; await correr(); if(!M.alive()) return; await sayAll([textoN(tx.fin,n), praise(true)]); if(M.alive()) resolve(n); return; }
    ronda++; let d; do{ d=Math.floor(Math.random()*4); }while(d===ultimo);
    meta=ultimo=d; await sayAll([tx.dirs[d]]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   EL CONSULTORIO · ¿Dónde está la nariz? El relator pregunta por una parte
   del cuerpo del osito y el chico la toca (o la elige con las flechas y Enter).
   Si toca otra, el relator le dice cuál tocó y vuelve a preguntar.
   --------------------------------------------------------- */
MICROJUEGOS.cuerpo = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, partes=tx.ingredientes, cv=M.canvas, osito=cap.final.npc, RONDAS=8;
  let ronda=0, meta=null, ultimo=null, listo=false, n=0, sel=-1, brillo=null;
  const chispas=[];
  // dónde está cada parte, en unidades del alto del osito (x desde los pies, y hacia arriba es negativo)
  const hr=.26, fx=hr*.14, hy=-.6;
  const LUGAR={cabeza:[[fx,hy-hr*.78]], ojos:[[fx-hr*.34,hy],[fx+hr*.36,hy]], nariz:[[fx,hy+hr*.22]], boca:[[fx,hy+hr*.44]],
    orejas:[[-hr*.72,hy-hr*.72],[hr*.72,hy-hr*.72]], panza:[[.03,-.2]], pies:[[-.09,-.03],[.1,-.03]]};
  const RADIO={cabeza:.07, ojos:.045, nariz:.035, boca:.035, orejas:.06, panza:.09, pies:.05};
  let geo={x:0,y:0,s:1};
  /* cada parte hace algo gracioso al tocarla: gorro, ojos locos, nariz de payaso, lengua, orejotas, panza que rebota, pies que bailan */
  let modo='preguntas', gracias=[], cosquillas=0, finCosq=null, ultDicho=0;
  const graciosa=k=>{ gracias=gracias.filter(x=>x.k!==k); gracias.push({k, t:performance.now()/1000});
    ({cabeza:()=>{ tone(500,.1,'triangle',.08,0,900); }, ojos:()=>{ tone(900,.25,'sine',.06,0,300); tone(300,.25,'sine',.06,.25,900); },
      nariz:()=>{ tone(330,.18,'square',.07); tone(262,.22,'square',.07,.18); }, boca:()=>{ noise(.5,.1,180,90); },
      orejas:()=>{ tone(400,.35,'sine',.07,0,800); }, panza:()=>{ tone(110,.2,'sine',.15); tone(90,.2,'sine',.15,.22); },
      pies:()=>{ [523,659,784,659].forEach((f,i)=>tone(f,.1,'triangle',.08,i*.12)); }}[k]||(()=>{}))(); };
  const activa=(k,t)=>{ const x=gracias.find(x=>x.k===k); return x && t-x.t<2.2 ? t-x.t : -1; };
  const puntos=k=>(LUGAR[k]||[]).map(([x,y])=>({x:geo.x+x*geo.s, y:geo.y+y*geo.s}));
  const tocar=g=>{
    if(!listo || !M.alive() || !g) return;
    if(modo==='cosquillas'){ graciosa(g.k); cosquillas++; const t=performance.now()/1000; if(t-ultDicho>.8){ ultDicho=t; sayAll([g.texto]); } return; }
    if(g.k!==meta.k){ sfx.oops(); sayAll([g.texto, meta.p]); return; }
    listo=false; n++; brillo={k:g.k, t:performance.now()/1000}; graciosa(g.k);
    tone(660+n%6*90,.12,'triangle',.11); tone(990+n%6*90,.15,'sine',.07,.06);
    for(const p of puntos(g.k)) for(let k=0;k<8;k++) chispas.push({x:p.x,y:p.y,a:k*Math.PI/4,vida:.6});
    (async()=>{ await sayAll([praise(), g.texto]); if(!M.alive()) return; await sleep(400); nuevaRonda(); })();
  };
  cv.addEventListener('pointerdown',e=>{ const r=cv.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    let mejor=null, dist=1e9; for(const g of partes) for(const p of puntos(g.k)){ const d=Math.hypot(p.x-x,p.y-y)/((RADIO[g.k]||.05)*geo.s); if(d<dist){ dist=d; mejor=g; } }
    if(dist<2) tocar(mejor); else if(listo && modo==='preguntas') sayAll([meta.p]); });
  const T2=teclasJuego(M, k=>{
    if(k==='ArrowRight'||k==='ArrowDown'){ sel=(sel+1)%partes.length; sayAll([partes[sel].texto]); }
    else if(k==='ArrowLeft'||k==='ArrowUp'){ sel=(sel-1+partes.length)%partes.length; sayAll([partes[sel].texto]); }
    else if((k==='Enter'||k===' ') && sel>=0){ if(modo==='cosquillas') listo=true; tocar(partes[sel]); }
  });

  live(cv,(c,w,h,t)=>{
    if(!M.alive()){ T2.limpiar(); return; }
    bgConsultorio(c,w,h);
    geo={x:w*.42, y:h*.98, s:h*.92};
    const aPies=activa('pies',t), aPanza=activa('panza',t), aCab=activa('cabeza',t);
    c.save();
    if(aPanza>=0){ const k=1+Math.sin(aPanza*25)*.05*Math.max(0,1-aPanza/1.5); c.translate(geo.x,geo.y); c.scale(k,2-k); c.translate(-geo.x,-geo.y); }
    drawAnimal(c,osito,geo.x,geo.y-(aPies>=0?Math.abs(Math.sin(aPies*10))*geo.s*.05:0),geo.s,{t:aPies>=0?t:0,facing:1,mood:activa('boca',t)>=0||(brillo&&t-brillo.t<1.2)?'wow':null,
      accion:aPies>=0?'bailar':null, ropa:aCab>=0?{cabeza:{estilo:'cumple',color:'#FF6F8F',color2:'#FFC93C'}}:undefined});
    c.restore();
    dibujarGracias(c,t);
    if(sel>=0) for(const p of puntos(partes[sel].k)){ c.strokeStyle='#FFC93C'; c.lineWidth=5; c.beginPath(); c.arc(p.x,p.y,(RADIO[partes[sel].k]||.05)*geo.s*1.3+Math.sin(t*6)*3,0,Math.PI*2); c.stroke(); }
    if(brillo && t-brillo.t<1.2) for(const p of puntos(brillo.k)){ c.save(); c.globalAlpha=1-(t-brillo.t)/1.2; ell(c,p.x,p.y,(RADIO[brillo.k]||.05)*geo.s*1.4,(RADIO[brillo.k]||.05)*geo.s*1.4,'rgba(255,201,60,.55)'); c.restore(); }
    for(let i=chispas.length-1;i>=0;i--){ const p=chispas[i]; p.vida-=1/60; if(p.vida<=0){ chispas.splice(i,1); continue; } const k=.6-p.vida; star5(c,p.x+Math.cos(p.a)*h*.3*k,p.y+Math.sin(p.a)*h*.3*k,h*.02*p.vida*2,'#FFC93C'); }
    // la parte que hay que buscar, con su dibujo, arriba a la derecha
    if(meta){ c.fillStyle='rgba(255,255,255,.85)'; rr(c,w*.74,h*.06,w*.22,h*.24,14); c.fill(); drawImg(c,meta.k,w*.85,h*.18,h*.18); }
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='left'; c.fillStyle='#22314F'; c.fillText(`★ ${n}`,w*.04,h*.09); c.restore();
  });

  function dibujarGracias(c,t){
    const S=geo.s, P=k=>puntos(k);
    const aO=activa('ojos',t); if(aO>=0) for(const p of P('ojos')){ ell(c,p.x,p.y,S*.045,S*.045,'#fff'); c.strokeStyle='#22314F'; c.lineWidth=2; c.beginPath(); c.arc(p.x,p.y,S*.045,0,Math.PI*2); c.stroke(); const a=t*12+(p.x>geo.x?2:0); ell(c,p.x+Math.cos(a)*S*.022,p.y+Math.sin(a)*S*.022,S*.02,S*.02,'#22314F'); }
    const aN=activa('nariz',t); if(aN>=0) for(const p of P('nariz')){ const k=1+Math.sin(aN*12)*.12; ell(c,p.x,p.y,S*.04*k,S*.04*k,'#E8483B'); ell(c,p.x-S*.012,p.y-S*.012,S*.01,S*.01,'#fff'); }
    const aB=activa('boca',t); if(aB>=0) for(const p of P('boca')){ const l=S*(.03+.025*Math.abs(Math.sin(aB*8))); ell(c,p.x,p.y+l*.6,S*.03,l,'#FF7FA0'); c.strokeStyle='#E05A80'; c.lineWidth=2; c.beginPath(); c.moveTo(p.x,p.y); c.lineTo(p.x,p.y+l); c.stroke(); }
    const aE=activa('orejas',t); if(aE>=0) for(const p of P('orejas')){ const k=1+.6*Math.min(1,aE*3)*(1-Math.max(0,aE-1.6)/.6), w=Math.sin(aE*16)*.25; c.save(); c.translate(p.x,p.y); c.rotate(w*(p.x<geo.x?-1:1)); ell(c,0,0,S*.075*k,S*.075*k,osito.fur); ell(c,0,0,S*.04*k,S*.04*k,osito.fur2); c.restore(); }
    const aP=activa('panza',t); if(aP>=0 && aP<.6){ const p=P('panza')[0]; c.save(); c.globalAlpha=1-aP/.6; c.strokeStyle='#FFC93C'; c.lineWidth=4; for(const r of [.08,.12]){ c.beginPath(); c.arc(p.x,p.y,S*r*(1+aP),0,Math.PI*2); c.stroke(); } c.restore(); }
    const aPi=activa('pies',t); if(aPi>=0) for(let i=0;i<3;i++){ const p=((aPi*.8)+i/3)%1; c.save(); c.globalAlpha=1-p; c.fillStyle='#8B6FE8'; c.font=`800 ${Math.round(S*.06)}px sans-serif`; c.fillText('♪',geo.x+S*(.15+i*.05),geo.y-S*(.1+p*.3)); c.restore(); }
  }
  async function hacerCosquillas(){
    modo='cosquillas'; listo=true; meta=null;
    await sayAll([tx.cosquillas]);
    return new Promise(res=>{ finCosq=res; const t0=performance.now(); const fin=()=>{ if(!M.alive()) return res(); if(performance.now()-t0<16000) return setTimeout(fin,300); modo='fin'; res(); }; setTimeout(fin,500); });
  }
  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ meta=null; await sayAll([textoN(tx.fin,n), praise(true)]); if(!M.alive()) return; await hacerCosquillas(); if(!M.alive()) return; await sayAll([praise(true)]); if(M.alive()) resolve(n); return; }
    ronda++; let g; do{ g=partes[Math.floor(Math.random()*partes.length)]; }while(g===ultimo);
    meta=ultimo=g; await sayAll([g.p]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   LA GRANJA · ¡A dar de comer! Los animales están en el campo. El relator
   pide "Dale de comer a la vaca" y el chico toca la vaca (en el campo o en
   su botón): la comida vuela y la vaca come… y engorda. Si come demasiado,
   ¡eructa! Si le da a otro animal, ese come igual, y el relator dice quién es.
   Al final se puede tirar comida en cualquier lado: el animal más cerca va a comerla.
   --------------------------------------------------------- */
MICROJUEGOS.comida = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, ans=tx.ingredientes, cv=M.canvas, RONDAS=8;
  const LUGAR=[[.38,.55,.26],[.62,.55,.24],[.86,.55,.24],[.42,.86,.3],[.68,.86,.28],[.9,.88,.22]];
  const bichos=ans.map((g,i)=>({g, k:g.k, hx:LUGAR[i][0], hy:LUGAR[i][1], x:LUGAR[i][0], y:LUGAR[i][1], tam:LUGAR[i][2], gordo:0, come:-9, burp:-9, dice:-9, va:null}));
  let ronda=0, meta=null, ultimo=null, listo=false, n=0, modo='pedidos', t=0, prev=null, dt=0;
  const vuelos=[], montones=[], migas=particulas();
  M.actions.innerHTML=`<div class="ings">${ans.map(g=>`<button class="ing" data-k="${g.k}" aria-label="${esc(g.texto)}"${enAttr(enDe(g.texto))}>${img(g.k)}</button>`).join('')}</div>`;
  M.actions.querySelectorAll('.ing').forEach(b=>b.addEventListener('click',()=>tirarA(bichos.find(x=>x.k===b.dataset.k))));
  cv.addEventListener('pointerdown',e=>{
    const r=cv.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height, asp=r.width/r.height;
    const b=bichos.find(o=>Math.abs((o.x-x)*asp)<o.tam*.5 && y>o.y-o.tam*.85 && y<o.y+.03);
    if(b) tirarA(b); else if(y>.45) tirarAlPiso(x,y);
  });
  // la comida vuela desde el balde del granjero
  function tirar(x,y,alLlegar){ vuelos.push({x0:.1,y0:.72,x,y,t0:t,al:alLlegar}); tone(300,.08,'triangle',.06,0,600); }
  function tirarA(b){
    if(!b || !M.alive()) return;
    tirar(b.x,b.y-b.tam*.45,()=>comer(b,true));
  }
  function tirarAlPiso(x,y){
    if(modo==='pedidos' && !listo) return;
    tirar(x,y,()=>{ const m={x,y}; montones.push(m); const b=bichos.filter(o=>!o.va).sort((a,c)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(c.x-x,c.y-y))[0]; if(b) b.va=m; });
  }
  function comer(b,directo){
    b.come=t; b.gordo++; tone(180,.08,'square',.05); tone(160,.08,'square',.05,.12);
    for(let i=0;i<6;i++) migas.agregar({x:b.x*cv.clientWidth,y:(b.y-b.tam*.5)*cv.clientHeight,vx:(Math.random()-.5)*120,vy:-80-Math.random()*80,vida:.6,vida0:.6,dibujar:(c,p,k)=>ell(c,p.x,p.y,3,3,'#E8C66A')});
    if(b.gordo>=4){ setTimeout(()=>{ if(!M.alive()) return; b.burp=t; b.gordo=1; noise(.6,.16,140,70); tone(90,.5,'sawtooth',.06); sayAll([tx.burp]); },700); }
    else { b.dice=t; }
    if(!directo) return;
    if(modo!=='pedidos' || !listo) { sayAll([b.g.sonido]); return; }
    if(b.g!==meta){ sayAll([b.g.texto, b.g.sonido, meta.dale]); return; }
    listo=false; n++; setTimeout(()=>M.alive()&&sfx.yay(),300);
    (async()=>{ await sayAll([b.g.sonido, praise()]); if(!M.alive()) return; await sleep(500); nuevaRonda(); })();
  }
  function dibujarBicho(c,b,w,h){
    const s=b.tam*h, comiendo=t-b.come<.6, burp=t-b.burp<1.2, ancho=1+Math.min(b.gordo,4)*.13*(burp?0:1), alto=1+Math.min(b.gordo,4)*.04;
    const salto=comiendo?Math.abs(Math.sin((t-b.come)*20))*h*.015:0, mira=b.va ? (b.va.x<b.x?-1:1) : 1;
    c.save(); c.translate(b.x*w,b.y*h-salto); c.scale(ancho*(b.k==='gallo'?-mira:mira),alto);
    c.save(); c.globalAlpha=.15; ell(c,0,0,s*.4,s*.06,'#000'); c.restore();
    drawImg(c,b.k,0,-s*.45,s); c.restore();
    if(burp){ const k=Math.min(1,(t-b.burp)*3); cartel(c,tx.burpCorto||'BURP!',b.x*w,b.y*h-s*1.05-k*h*.04,h*.07*k+1,'#B9D45C'); c.save(); c.globalAlpha=Math.max(0,1-(t-b.burp)); ell(c,b.x*w+s*.4,b.y*h-s*.75,s*.18,s*.12,'rgba(185,212,92,.6)'); c.restore(); }
    else if(t-b.dice<1.3) cartel(c,b.g.sonido,b.x*w,b.y*h-s*1.02,h*.055);
  }
  live(cv,(c,w,h,tt)=>{
    t=tt; dt=prev==null?0:Math.min(.05,t-prev); prev=t; if(!M.alive()) return;
    bgGranja(c,w,h,t);
    c.fillStyle='#8CCB6B'; c.fillRect(0,h*.6,w,h*.4);
    // los montoncitos en el piso y los animales que van a comerlos
    for(const m of montones){ for(let i=0;i<5;i++) ell(c,m.x*w+(i-2)*4,m.y*h-(i%2)*3,4,3,'#E8C66A'); }
    for(const b of bichos){
      const dest=b.va||{x:b.hx,y:b.hy}, d=Math.hypot(dest.x-b.x,dest.y-b.y);
      if(d>.01){ const v=Math.min(d,.35*dt); b.x+=(dest.x-b.x)/d*v; b.y+=(dest.y-b.y)/d*v; }
      else if(b.va){ const m=b.va; b.va=null; montones.splice(montones.indexOf(m),1); comer(b,false); sayAll([b.g.sonido]); }
    }
    [...bichos].sort((a,b2)=>a.y-b2.y).forEach(b=>dibujarBicho(c,b,w,h));
    drawHero(c,w*.1,h*.97,h*.42,{t,facing:1,uniforme:cap.uniforme?cap.uniforme.ropa:null,wave:vuelos.length>0});
    c.fillStyle='#B5753A'; rr(c,w*.1+h*.08,h*.74,h*.11,h*.11,6); c.fill(); ell(c,w*.1+h*.135,h*.745,h*.055,h*.02,'#E8C66A');
    for(let i=vuelos.length-1;i>=0;i--){ const v=vuelos[i], k=Math.min(1,(t-v.t0)/.55), x=(v.x0+(v.x-v.x0)*k)*w, y=(v.y0+(v.y-v.y0)*k)*h-Math.sin(k*Math.PI)*h*.25;
      for(let j=0;j<4;j++) ell(c,x+(j-1.5)*5,y+(j%2)*4,4,3,'#E8C66A');
      if(k>=1){ vuelos.splice(i,1); v.al(); } }
    migas.paso(c,dt,h);
    if(meta && modo==='pedidos'){ c.fillStyle='rgba(255,255,255,.85)'; rr(c,w*.02,h*.04,h*.2,h*.2,14); c.fill(); cartel(c,'?',w*.02+h*.1,h*.14,h*.12,'#22314F'); }
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='right'; c.fillStyle='#22314F'; c.fillText(`★ ${n}`,w*.97,h*.09); c.restore();
  });
  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){
      meta=null; modo='libre'; listo=true; await sayAll([tx.libre]);
      await new Promise(r=>setTimeout(r,15000)); if(!M.alive()) return;
      modo='fin'; await sayAll([textoN(tx.fin,n), praise(true)]); if(M.alive()) resolve(n); return;
    }
    ronda++; let g; do{ g=ans[Math.floor(Math.random()*ans.length)]; }while(g===ultimo);
    meta=ultimo=g; await sayAll([g.dale]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   LA ESCUELA · El tren de las formas: el relator pide "Poné el triángulo
   en el tren" y el chico toca esa forma; va al vagón que sigue. Con los
   vagones llenos, el tren se va (¡chu, chu!) y llega otro.
   --------------------------------------------------------- */
MICROJUEGOS.tren = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, formas=tx.ingredientes, cv=M.canvas, VAGONES=4, TRENES=2;
  let tren=0, cargados=[], meta=null, ultimo=null, listo=false, n=0, sale=0, vuela=null;
  const botonesFormas=()=>{ M.actions.innerHTML=`<div class="ings">${formas.map(g=>`<button class="ing" data-k="${g.k}" aria-label="${esc(g.texto)}"${enAttr(enDe(g.texto))}>${img(g.k)}</button>`).join('')}</div>`;
  M.actions.querySelectorAll('.ing').forEach(b=>b.addEventListener('click',async()=>{
    if(!listo || !M.alive()) return;
    const g=formas.find(x=>x.k===b.dataset.k);
    if(g!==meta){ sfx.oops(); b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),450); sayAll([g.texto, meta.pon]); return; }
    listo=false; n++; vuela={k:g.k, t:performance.now()/1000, i:cargados.length};
    tone(600+cargados.length*90,.12,'triangle',.1);
    await sleep(600); if(!M.alive()) return;
    cargados.push(g.k); vuela=null;
    await sayAll([praise(), g.texto]); if(!M.alive()) return;
    if(cargados.length>=VAGONES){
      tone(330,.3,'square',.06); setTimeout(()=>M.alive()&&tone(392,.3,'square',.06),350);
      await sayAll([tx.chu]); if(!M.alive()) return;
      await manejar(); if(!M.alive()) return;
      tren++; cargados=[]; sale=0; botonesFormas();
    }
    nuevaRonda();
  })); };
  botonesFormas();

  /* manejar el tren: mantener apretado (el botón, el lienzo o la flecha) para ir más rápido, soltar para frenar;
     la bocina hace ¡chu, chu! Pasa por colinas, un puente y un túnel, y por estaciones con las formas que lleva. */
  let modo='cargar', vel=0, recorrido=0, acelerando=false, finViaje=null, humo=[], estaciones=[], llegada2=0, tm=0, prevm=null;
  const LARGO=7;   // cuántos anchos de pantalla dura el viaje
  const T2=teclasJuego(M, ()=>modo==='manejar' ? undefined : false);   // cargando, las flechas mueven entre los botones
  cv.addEventListener('pointerdown',()=>{ if(modo==='manejar') acelerando=true; });
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>cv.addEventListener(ev,()=>{ acelerando=false; }));
  const bocina=()=>{ tone(330,.35,'square',.05); tone(392,.35,'square',.05); tone(494,.35,'square',.04,.02); for(let i=0;i<4;i++) humo.push({x:0,y:0,t:tm+i*.1}); };
  function manejar(){
    modo='manejar'; vel=0; recorrido=0; llegada2=0;
    estaciones=cargados.slice(0,3).map((k,i)=>({k, en:1.6+i*1.7, dicha:false}));
    M.actions.innerHTML=`<button class="mbtn soft" data-bocina>${ICON.speaker}<span>${esc(tx.bocina)}</span></button><button class="mbtn go" data-acel>${ICON.right}<span>${esc(tx.vamos)}</span></button>`;
    const a=M.actions.querySelector('[data-acel]');
    a.addEventListener('pointerdown',e=>{ e.preventDefault(); acelerando=true; }); ['pointerup','pointerleave','pointercancel'].forEach(ev=>a.addEventListener(ev,()=>{ acelerando=false; }));
    a.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); acelerando=true; } }); a.addEventListener('keyup',()=>{ acelerando=false; });
    M.actions.querySelector('[data-bocina]').addEventListener('click',bocina);
    sayAll([tx.maneja]);
    return new Promise(res=>{ finViaje=res; setTimeout(()=>{ if(finViaje && M.alive()){ recorrido=LARGO; } },45000); });
  }
  const alto=(x)=>.72-.1*Math.sin(x*1.3)-.05*Math.sin(x*3.1+1);   // la altura de las vías (en altos de pantalla) según la distancia recorrida
  function dibujarViaje(c,w,h,t){
    const dt=prevm==null?0:Math.min(.05,t-prevm); prevm=t; tm=t;
    const ap=acelerando || T2.abajo.has('ArrowRight') || T2.abajo.has('ArrowUp');
    if(!llegada2){ vel+=(ap?1.1:-.8)*dt; vel=Math.max(0,Math.min(1.1,vel)); if(!ap && vel<.15 && recorrido<.2) vel=Math.max(vel,0); recorrido+=vel*dt; }
    if(recorrido>=LARGO && !llegada2){ llegada2=t; vel=0; sfx.yay(); bocina(); sayAll([tx.llegamos]).then(()=>setTimeout(()=>{ if(finViaje){ const f=finViaje; finViaje=null; modo='cargar'; f(); } },800)); }
    const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#7FC8F5'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
    for(let i=0;i<4;i++){ const x=((i*.31-recorrido*.05)%1.24+1.24)%1.24-.12; cloud(c,x*w,h*(.1+(i%2)*.1),h*.035); }
    for(let i=0;i<5;i++){ const x=((i*.3-recorrido*.15)%1.5+1.5)%1.5-.25; ell(c,x*w,h*.62,w*.2,h*.22,i%2?'#9ED67E':'#8CCB6B'); }
    // el terreno y las vías (la pantalla muestra de recorrido-0.35 a recorrido+0.65)
    const X0=recorrido-.35, pts=[];
    for(let i=0;i<=40;i++){ const u=i/40, d=X0+u; pts.push([u*w, alto(d)*h]); }
    c.fillStyle='#86CC6E'; c.beginPath(); c.moveTo(0,h); pts.forEach(([x,y])=>c.lineTo(x,y+h*.02)); c.lineTo(w,h); c.closePath(); c.fill();
    // río y puente entre 3.6 y 4.3
    const rx0=(3.6-X0)*w, rx1=(4.3-X0)*w;
    if(rx1>0 && rx0<w){ c.fillStyle='#7CC6F0'; c.fillRect(rx0,h*.8,rx1-rx0,h*.2); c.strokeStyle='#B5753A'; c.lineWidth=h*.02; for(let x=rx0;x<rx1;x+=h*.08){ c.beginPath(); c.moveTo(x,alto(X0+x/w)*h+h*.03); c.lineTo(x,h*.86); c.stroke(); } }
    c.strokeStyle='#8A5636'; c.lineWidth=h*.022; for(let d=Math.ceil(X0*20)/20; d<X0+1; d+=.05){ const x=(d-X0)*w, y=alto(d)*h; c.beginPath(); c.moveTo(x,y-h*.005); c.lineTo(x,y+h*.025); c.stroke(); }
    c.strokeStyle='#5C6A86'; c.lineWidth=h*.012; c.beginPath(); pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y)); c.stroke();
    // las estaciones (con el cartel de su forma) y la de llegada
    for(const e of [...estaciones, {k:'estrella', en:LARGO, fin:true}]){
      const x=(e.en-X0)*w; if(x<-w*.2||x>w*1.2) continue; const y=alto(e.en)*h;
      c.fillStyle=e.fin?'#E8483B':'#FFC93C'; rr(c,x-h*.12,y-h*.26,h*.24,h*.16,8); c.fill(); poly(c,[x-h*.15,y-h*.26, x+h*.15,y-h*.26, x,y-h*.36],e.fin?'#8B2E2E':'#E8483B');
      c.fillStyle='#fff'; ell(c,x,y-h*.42,h*.07,h*.07,'#fff'); drawImg(c,e.k,x,y-h*.42,h*.1);
      if(!e.fin && !e.dicha && e.en<recorrido){ e.dicha=true; const gg=formas.find(f=>f.k===e.k); if(gg) sayAll([gg.est]); }
    }
    // el túnel entre 5.2 y 5.8: la boca de adelante se dibuja después del tren
    const tx0=(5.2-X0)*w, tx1=(5.8-X0)*w;
    if(tx1>0 && tx0<w){ c.fillStyle='#8A96AA'; c.beginPath(); c.ellipse((tx0+tx1)/2,alto(5.5)*h,(tx1-tx0)/2+h*.08,h*.32,0,Math.PI,0); c.fill(); }
    // el tren: la locomotora en el x de la pantalla .35 y los vagones atrás, siguiendo las vías
    const colores=['#FFC93C','#2FBF8F','#2E86DE','#8B6FE8'], paso=.085;
    for(let i=VAGONES;i>=0;i--){
      const d=recorrido-i*paso, x=(d-X0)*w, y=alto(d)*h, ang=Math.atan2((alto(d+.01)-alto(d-.01))*h,.02*w);
      c.save(); c.translate(x,y); c.rotate(ang);
      if(i===0){ c.fillStyle='#E8483B'; rr(c,-h*.09,-h*.15,h*.18,h*.12,6); c.fill(); c.fillStyle='#22314F'; rr(c,-h*.09,-h*.24,h*.09,h*.1,5); c.fill(); c.fillStyle='#CDEBFF'; rr(c,-h*.075,-h*.22,h*.06,h*.05,3); c.fill(); c.fillStyle='#22314F'; c.fillRect(h*.03,-h*.24,h*.03,h*.09); }
      else { c.fillStyle=colores[(i-1)%4]; rr(c,-h*.07,-h*.11,h*.14,h*.08,5); c.fill(); const k=cargados[i-1]; if(k) drawImg(c,k,0,-h*.16,h*.09); }
      for(const sx of [-.045,.045]){ ell(c,h*sx,-h*.02,h*.022,h*.022,'#22314F'); c.save(); c.translate(h*sx,-h*.02); c.rotate(recorrido*40); c.fillStyle='#FFC93C'; c.fillRect(-h*.003,-h*.015,h*.006,h*.03); c.restore(); }
      c.restore();
      if(i===0){ if(vel>.05 && Math.random()<vel*.3) humo.push({x:0,y:0,t}); humo.forEach(p=>{ if(!p.x){ p.x=x+h*.045; p.y=y-h*.25; } }); }
    }
    humo=humo.filter(p=>t-p.t<1.5); humo.forEach(p=>{ const k=(t-p.t)/1.5; if(t<p.t) return; c.save(); c.globalAlpha=(1-k)*.7; ell(c,p.x-k*h*.25,p.y-k*h*.2,h*(.02+k*.05),h*(.018+k*.04),'#fff'); c.restore(); });
    if(tx1>0 && tx0<w){ c.fillStyle='#5C6A86'; c.beginPath(); c.ellipse(tx1,alto(5.8)*h,h*.08,h*.16,0,Math.PI,0); c.fill(); c.fillStyle='#22314F'; c.beginPath(); c.ellipse(tx1,alto(5.8)*h,h*.05,h*.12,0,Math.PI,0); c.fill(); }
    // el velocímetro (cuánto falta)
    c.fillStyle='rgba(255,255,255,.85)'; rr(c,w*.25,h*.04,w*.5,h*.05,h*.025); c.fill(); c.fillStyle='#2FBF8F'; rr(c,w*.25,h*.04,w*.5*Math.min(1,recorrido/LARGO),h*.05,h*.025); c.fill(); drawImg(c,'estrella',w*.75+h*.04,h*.065,h*.07);
    if(llegada2) cartel(c,'★',w/2,h*.3,h*.15,'#FFC93C');
  }

  live(cv,(c,w,h,t)=>{
    if(!M.alive()){ T2.limpiar(); return; }
    if(modo==='manejar'){ dibujarViaje(c,w,h,t); return; }
    const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#7FC8F5'); g.addColorStop(1,'#D8F0FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
    cloud(c,w*.2+Math.sin(t*.3)*8,h*.14,h*.04); cloud(c,w*.75,h*.1,h*.035);
    ell(c,w*.3,h*.78,w*.4,h*.2,'#9ED67E'); ell(c,w*.8,h*.8,w*.4,h*.18,'#8CCB6B'); c.fillStyle='#86CC6E'; c.fillRect(0,h*.78,w,h*.22);
    // las vías
    c.fillStyle='#8A5636'; for(let x=0;x<w;x+=h*.06) c.fillRect(x,h*.8,h*.03,h*.03); c.fillStyle='#5C6A86'; c.fillRect(0,h*.79,w,h*.012);
    // el tren (si se va, se mueve a la derecha; si llega, entra desde la izquierda)
    const llegada=Math.max(0,1-(t-(tren0||t))*1.2);
    let dx = sale ? (t-sale)*w*.6 : -llegada*w;
    const VW=h*.2, base=h*.79, x0=w*.12+dx;
    // la locomotora
    c.fillStyle='#E8483B'; rr(c,x0+VW*4.3,base-h*.2,VW*1.2,h*.17,8); c.fill(); c.fillStyle='#22314F'; rr(c,x0+VW*4.3,base-h*.3,VW*.6,h*.12,6); c.fill();
    c.fillStyle='#CDEBFF'; rr(c,x0+VW*4.38,base-h*.27,VW*.44,h*.07,4); c.fill(); c.fillStyle='#22314F'; c.fillRect(x0+VW*5.1,base-h*.32,VW*.16,h*.14);
    for(let k=0;k<3;k++){ const p=((t*.8)+k/3)%1; c.save(); c.globalAlpha=(1-p)*.7; ell(c,x0+VW*5.18-p*VW*.6,base-h*.36-p*h*.18,h*(.025+p*.04),h*(.02+p*.03),'#fff'); c.restore(); }
    for(const wx of [4.5,5.2]) { ell(c,x0+VW*wx,base,h*.035,h*.035,'#22314F'); ell(c,x0+VW*wx,base,h*.014,h*.014,'#FFC93C'); }
    // los vagones
    const colores=['#FFC93C','#2FBF8F','#2E86DE','#8B6FE8'];
    for(let i=0;i<VAGONES;i++){
      const vx=x0+i*VW*1.05; c.fillStyle=colores[i]; rr(c,vx,base-h*.13,VW*.95,h*.11,6); c.fill(); c.fillStyle='rgba(0,0,0,.12)'; c.fillRect(vx,base-h*.05,VW*.95,h*.02);
      for(const wx of [.22,.73]){ ell(c,vx+VW*wx,base,h*.03,h*.03,'#22314F'); ell(c,vx+VW*wx,base,h*.012,h*.012,'#FFC93C'); }
      if(i<VAGONES) { c.strokeStyle='#22314F'; c.lineWidth=3; c.beginPath(); c.moveTo(vx+VW*.95,base-h*.07); c.lineTo(vx+VW*1.05,base-h*.07); c.stroke(); }
      if(cargados[i]) drawImg(c,cargados[i],vx+VW*.47,base-h*.2,h*.15);
      else if(i===cargados.length && listo){ c.save(); c.globalAlpha=.4+.3*Math.sin(t*6); c.strokeStyle='#fff'; c.lineWidth=4; c.setLineDash([6,6]); c.strokeRect(vx+VW*.15,base-h*.29,VW*.65,h*.15); c.restore(); }
    }
    // la forma que vuela hasta su vagón
    if(vuela){ const k=Math.min(1,(t-vuela.t)/.6), vx=x0+vuela.i*VW*1.05+VW*.47, x=w*.5+(vx-w*.5)*k, y=h*.25+(base-h*.2-h*.25)*k-Math.sin(k*Math.PI)*h*.1; drawImg(c,vuela.k,x,y,h*.15,k*6); }
    // la forma que hay que buscar, grande arriba
    if(meta && listo){ c.save(); c.globalAlpha=.9; c.fillStyle='rgba(255,255,255,.75)'; ell(c,w*.5,h*.25,h*.13,h*.13,'rgba(255,255,255,.75)'); c.restore(); c.save(); c.font=`800 ${Math.round(h*.14)}px 'Baloo 2',sans-serif`; c.textAlign='center'; c.textBaseline='middle'; c.fillStyle='rgba(34,49,79,.35)'; c.fillText('?',w*.5,h*.26); c.restore(); }
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='right'; c.fillStyle='#22314F'; c.fillText(`★ ${n}`,w*.96,h*.09); c.restore();
  });
  let tren0=performance.now()/1000;

  async function nuevaRonda(){
    if(!M.alive()) return;
    if(tren>=TRENES){ meta=null; await sayAll([textoN(tx.fin,n), praise(true)]); if(M.alive()) resolve(n); return; }
    if(!cargados.length) tren0=performance.now()/1000;
    let g; do{ g=formas[Math.floor(Math.random()*formas.length)]; }while(g===ultimo);
    meta=ultimo=g; await sayAll([g.pon]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   LA FIESTA · ¿Cuántas velas? Un amigo cumple años: el relator dice
   "¡Cumple tres años! Poné tres velas." El chico pone las velas (contando
   en voz alta) y después las sopla. No se puede perder: si pone de más, no pasa nada.
   --------------------------------------------------------- */
MICROJUEGOS.velas = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, cv=M.canvas, nums=cap.numeros||T.numeros.slice(1), RONDAS=5;
  const amigos=cap.orden.map(k=>cap.estaciones[k].npc);
  let ronda=0, meta=0, puestas=0, amigo=amigos[0], listo=false, soplado=0, total=0, ultimo=0;
  M.actions.innerHTML=`<div class="ings"><button class="ing" data-act="vela" aria-label="${esc(tx.vela)}"${enAttr(enDe(tx.vela))}>${img('vela')}</button></div>${B('soplar','star',esc(tx.soplarB),'go')}`;
  const bSoplar=M.actions.querySelector('[data-act=soplar]'); bSoplar.hidden=true;
  const poner=()=>{
    if(!listo || !M.alive()) return;
    if(puestas>=meta){ sayAll([tx.soplar]); return; }
    puestas++; tone(500+puestas*70,.12,'triangle',.1);
    if(puestas<meta){ sayAll([nums[puestas-1]]); return; }
    sayAll([nums[puestas-1], tx.soplar]); bSoplar.hidden=false; setTimeout(()=>bSoplar.focus(),30);
  };
  M.actions.querySelector('[data-act=vela]').addEventListener('click',poner);
  cv.addEventListener('pointerdown',()=>{ if(modo==='musica') return tocarNota(); poner(); });
  bSoplar.addEventListener('click',async()=>{
    if(!listo || puestas<meta || !M.alive()) return;
    listo=false; bSoplar.hidden=true; soplado=performance.now()/1000; total+=meta; noise(.9,.08,300,900);
    await sleep(700); if(!M.alive()) return; sfx.yay();
    await sayAll([tx.feliz, praise()]); if(!M.alive()) return;
    await sleep(400); nuevaRonda();
  });

  /* el final: ¡a tocar el cumpleaños feliz! Cada toque en la torta (o el botón grande) toca la nota que sigue;
     ▶ la toca entera. Se cambia la velocidad, el tono y el instrumento (y el relator dice cuál es). */
  const CANCION=[[67,.75],[67,.25],[69,1],[67,1],[72,1],[71,2], [67,.75],[67,.25],[69,1],[67,1],[74,1],[72,2],
    [67,.75],[67,.25],[79,1],[76,1],[72,1],[71,1],[69,2], [77,.75],[77,.25],[76,1],[72,1],[74,1],[72,2]];
  const INSTR=[
    {k:'piano', arte:'instPiano', son:(f,d,w)=>{ tone(f,Math.min(1.2,d*1.6),'triangle',.12,w); tone(f*2,.3,'sine',.03,w); }},
    {k:'xilofon', arte:'instXilo', son:(f,d,w)=>{ tone(f*2,.35,'sine',.14,w); tone(f*4,.08,'sine',.04,w); }},
    {k:'robot', arte:'instRobot', son:(f,d,w)=>{ tone(f,Math.min(.5,d*.9),'square',.05,w); tone(f*1.01,Math.min(.5,d*.9),'square',.03,w); }},
    {k:'trompeta', arte:'instTrompeta', son:(f,d,w)=>{ tone(f*.98,Math.min(.9,d*1.1),'sawtooth',.05,w,f); }}];
  const VELOC=[.6,1,1.6];
  let modo='velas', nota=0, instr=0, tono=0, veloc=1, golpes=[], sonando=0, tocando=false, vueltas=0;
  const hz=m=>440*Math.pow(2,(m+tono-69)/12);
  function sonar(i,when=0){ const [m,b]=CANCION[i], d=b*.42/VELOC[veloc]; INSTR[instr].son(hz(m),d,when); setTimeout(()=>{ if(M.alive()) golpes.push({t:performance.now()/1000, i}); },when*1000); return d; }
  function tocarNota(){
    if(modo!=='musica' || tocando) return;
    sonar(nota); nota++;
    if(nota>=CANCION.length){ nota=0; vueltas++; setTimeout(()=>{ if(M.alive()){ sfx.yay(); sayAll([tx.linda]); } },600); }
  }
  async function tocarTodo(){
    if(tocando) return; tocando=true; nota=0;
    let w=0; for(let i=0;i<CANCION.length;i++) w+=sonar(i,w);
    await sleep(w*1000+300); tocando=false; nota=0; if(M.alive()) sfx.yay();
  }
  function musica(){
    modo='musica'; soplado=0; puestas=8; meta=8;
    const bt=(act,arte,label)=>`<button class="ing" data-m="${act}" aria-label="${esc(label)}"${enAttr(enDe(label))}>${arte}</button>`;
    M.actions.innerHTML=`<div class="ings">${bt('lento',img('tortuga'),tx.lento)}${bt('rapido',img('liebre'),tx.rapido)}${bt('grave',ICON.down,tx.grave)}${bt('agudo',ICON.up,tx.agudo)}${bt('instr',img(INSTR[instr].arte),tx.instr[INSTR[instr].k])}${bt('todo',ICON.play,tx.musicaTodo)}</div>${B('listo','check',T.listo,'go')}`;
    const mb=M.actions.querySelector('[data-m=instr]');
    M.actions.querySelectorAll('[data-m]').forEach(b=>b.addEventListener('click',()=>{
      const m=b.dataset.m;
      if(m==='lento'){ veloc=Math.max(0,veloc-1); sayAll([tx.lento]); }
      else if(m==='rapido'){ veloc=Math.min(2,veloc+1); sayAll([tx.rapido]); }
      else if(m==='grave'){ tono=Math.max(-12,tono-6); sayAll([tx.grave]); }
      else if(m==='agudo'){ tono=Math.min(12,tono+6); sayAll([tx.agudo]); }
      else if(m==='instr'){ instr=(instr+1)%INSTR.length; mb.innerHTML=img(INSTR[instr].arte); mb.setAttribute('aria-label',tx.instr[INSTR[instr].k]); sayAll([tx.instr[INSTR[instr].k]]); return INSTR[instr].son(hz(72),.4,.3); }
      else if(m==='todo') return tocarTodo();
      sonar(0);
    }));
    sayAll([tx.musica]);
    return new Promise(res=>onAct('listo',()=>{ modo='fin'; res(); }));
  }
  live(cv,(c,w,h,t)=>{
    if(!M.alive()) return;
    bgFiesta(c,w,h,t);
    if(modo==='musica'||modo==='fin'){ dibujarMusica(c,w,h,t); return; }
    const fiesta = soplado && t-soplado>.5;
    drawAnimal(c,amigo,w*.78,h*.97,h*.5,{t,hat:amigo.hat,facing:-1,accion:fiesta?'saltar':null,mood:soplado&&!fiesta?'wow':null});
    // la torta
    const cx=w*.42, base=h*.92, tw=h*.62;
    c.fillStyle='#fff'; rr(c,cx-tw*.62,base-h*.03,tw*1.24,h*.05,8); c.fill();
    c.fillStyle='#F7C8D8'; rr(c,cx-tw/2,base-h*.24,tw,h*.22,10); c.fill(); c.fillStyle='#FFF3D6'; rr(c,cx-tw*.38,base-h*.4,tw*.76,h*.17,10); c.fill();
    c.fillStyle='#FF8FB8'; for(let i=0;i<8;i++) ell(c,cx-tw*.44+i*tw*.125,base-h*.24,tw*.06,h*.025,'#FF8FB8');
    c.fillStyle='#E8483B'; for(let i=0;i<6;i++) ell(c,cx-tw*.3+i*tw*.12,base-h*.4,tw*.025,tw*.025,['#E8483B','#2FBF8F','#2E86DE','#FFC93C'][i%4]);
    // las velas, repartidas arriba de la torta
    const cols=['#2E86DE','#FFC93C','#2FBF8F','#E8483B','#8B6FE8','#FF9B3D','#FF8FB8','#7CC6F0','#B9D45C','#C9A27A'];
    for(let i=0;i<puestas;i++){ const k=meta>1?i/(Math.max(meta,puestas)-1):.5, x=cx-tw*.3+k*tw*.6, y=base-h*.4;
      c.fillStyle=cols[i%cols.length]; rr(c,x-h*.012,y-h*.12,h*.024,h*.12,3); c.fill(); c.fillStyle='rgba(255,255,255,.5)'; c.fillRect(x-h*.004,y-h*.11,h*.006,h*.1);
      if(!soplado){ const fl=1+.15*Math.sin(t*14+i); ell(c,x,y-h*.15,h*.016*fl,h*.03*fl,'#FFC93C'); ell(c,x,y-h*.145,h*.008,h*.016,'#fff'); }
      else { const p=Math.min(1,(t-soplado)/1.5); c.save(); c.globalAlpha=(1-p)*.6; ell(c,x+Math.sin(t*3+i)*6,y-h*(.15+p*.2),h*.015*(1+p),h*.02*(1+p),'#AEB8C8'); c.restore(); } }
    if(soplado && t-soplado<.6){ c.save(); c.globalAlpha=.5; for(let k=0;k<4;k++){ c.strokeStyle='#CDEBFF'; c.lineWidth=4; c.beginPath(); c.moveTo(w*.08,h*(.32+k*.06)); c.quadraticCurveTo(w*.2,h*(.28+k*.06),cx-tw*.3,h*(.42+k*.02)); c.stroke(); } c.restore(); }
    // cuántas faltan: puntitos arriba
    if(meta){ c.fillStyle='rgba(255,255,255,.9)'; rr(c,w*.5-(meta*h*.07)/2-h*.02,h*.05,meta*h*.07+h*.04,h*.1,h*.05); c.fill(); for(let i=0;i<meta;i++){ const x=w*.5+(i-(meta-1)/2)*h*.07; ell(c,x,h*.1,h*.025,h*.025,i<puestas?'#FFC93C':'rgba(34,49,79,.15)'); } }
  });

  function dibujarMusica(c,w,h,t){
    golpes=golpes.filter(g=>t-g.t<1.6);
    const ultimo=golpes.length?golpes[golpes.length-1]:null, beat=ultimo?Math.max(0,1-(t-ultimo.t)*4):0;
    // los amigos bailan con cada nota
    amigos.slice(0,4).forEach((a,i)=>{ const x=w*[.08,.19,.81,.92][i]; drawAnimal(c,a,x,h*.97-beat*h*.05*(i%2?1:.6),h*.32,{t,hat:a.hat,facing:x<w/2?1:-1,accion:beat>.2?(i%2?'arriba':'bailar'):null}); });
    // la torta con las velas prendidas (late con la música)
    const cx=w*.5, base=h*.9, tw=h*.56*(1+beat*.04);
    c.fillStyle='#fff'; rr(c,cx-tw*.62,base-h*.03,tw*1.24,h*.05,8); c.fill();
    c.fillStyle='#F7C8D8'; rr(c,cx-tw/2,base-h*.22,tw,h*.2,10); c.fill(); c.fillStyle='#FFF3D6'; rr(c,cx-tw*.38,base-h*.36,tw*.76,h*.15,10); c.fill();
    for(let i=0;i<8;i++) ell(c,cx-tw*.44+i*tw*.125,base-h*.22,tw*.06,h*.022,'#FF8FB8');
    for(let i=0;i<6;i++){ const x=cx-tw*.3+i*tw*.12, y=base-h*.36; c.fillStyle=['#2E86DE','#FFC93C','#2FBF8F','#E8483B','#8B6FE8','#FF9B3D'][i]; rr(c,x-h*.01,y-h*.1,h*.02,h*.1,3); c.fill(); const fl=1+.2*Math.sin(t*14+i)+beat*.4; ell(c,x,y-h*.125,h*.014*fl,h*.026*fl,'#FFC93C'); }
    // las notas que salen volando
    for(const g of golpes){ const k=(t-g.t)/1.6, x=cx+Math.sin(g.i*1.7)*w*.25, y=base-h*.45-k*h*.4; c.save(); c.globalAlpha=1-k; c.fillStyle=['#E8483B','#FF9B3D','#FFC93C','#2FBF8F','#2E86DE','#8B6FE8'][g.i%6]; c.font=`800 ${Math.round(h*.09)}px sans-serif`; c.textAlign='center'; c.fillText(g.i%2?'♪':'♫',x,y); c.restore(); }
    // por dónde va la canción
    const n=CANCION.length, x0=w*.12, x1=w*.88;
    c.fillStyle='rgba(255,255,255,.9)'; rr(c,x0-h*.04,h*.015,x1-x0+h*.08,h*.13,h*.06); c.fill();
    for(let i=0;i<n;i++){ const x=x0+(x1-x0)*i/(n-1), y=h*.1-(CANCION[i][0]-67)*h*.006; ell(c,x,y,h*.014,h*.014, i<nota||tocando&&golpes.some(g=>g.i===i)?'#FFC93C':'rgba(34,49,79,.18)'); }
    drawImg(c,INSTR[instr].arte,w*.93,h*.2,h*.12);
  }
  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ meta=0; await sayAll([textoN(tx.fin,total), praise(true)]); if(!M.alive()) return; await musica(); if(M.alive()) resolve(total); return; }
    ronda++; let n; do{ n=2+Math.floor(Math.random()*6); }while(n===ultimo); ultimo=n;
    meta=n; puestas=0; soplado=0; amigo=amigos[Math.floor(Math.random()*amigos.length)];
    await sayAll([tx.pon(nums[n-1])]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   PRIMERAS PALABRAS · Burbujas de colores: suben burbujas de colores;
   el relator pide un color y el chico revienta una de ese color. Si revienta
   otra, también explota (¡es divertido!) y el relator dice de qué color era.
   Al final, burbujas libres: cada una que explota dice su color.
   --------------------------------------------------------- */
MICROJUEGOS.burbujitas = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, cv=M.canvas, RONDAS=8;
  const cols=COLORES.filter(c=>!['blanco','negro'].includes(c.k)).slice(0,6);
  let ronda=0, meta=null, ultimo=null, listo=false, n=0, modo='pedidos', t=0, prev=null, prox=0, ultDicho=0;
  const burbujas=[], gotas=particulas();
  const nombre=k=>T.colores[k];
  cv.addEventListener('pointerdown',e=>{
    const r=cv.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
    const b=burbujas.find(o=>!o.pum && o.px!=null && Math.hypot(o.px-x,o.py-y)<o.r*r.height*1.15); if(b) reventar(b,r);
  });
  function reventar(b,r){
    b.pum=true; tone(700+Math.random()*400,.07,'sine',.1,0,1400); noise(.08,.06,3000,1500);
    for(let i=0;i<10;i++){ const a=i*Math.PI/5; gotas.agregar({x:b.px,y:b.py,vx:Math.cos(a)*r.height*.5,vy:Math.sin(a)*r.height*.5,g:.4,vida:.5,vida0:.5,dibujar:(c,p,k)=>ell(c,p.x,p.y,r.height*.012*k+1,r.height*.012*k+1,b.c.c)}); }
    if(modo==='libre'){ n++; if(t-ultDicho>.7){ ultDicho=t; sayAll([nombre(b.c.k)]); } return; }
    if(!listo) return;
    if(b.c.k!==meta.k){ sayAll([tx.esa(nombre(b.c.k)), tx.pide(nombre(meta.k))]); return; }
    listo=false; n++; sfx.yay();
    (async()=>{ await sayAll([praise(), nombre(meta.k)]); if(!M.alive()) return; await sleep(300); nuevaRonda(); })();
  }
  live(cv,(c,w,h,tt)=>{
    t=tt; const dt=prev==null?0:Math.min(.05,t-prev); prev=t; if(!M.alive()) return;
    const g=c.createLinearGradient(0,0,0,h); g.addColorStop(0,'#BDE6FF'); g.addColorStop(1,'#EAF7FF'); c.fillStyle=g; c.fillRect(0,0,w,h);
    cloud(c,w*.2,h*.15,h*.04); cloud(c,w*.8,h*.1,h*.035); c.fillStyle='#8CCB6B'; c.fillRect(0,h*.9,w,h*.1);
    // nuevas burbujas (siempre hay del color que se pide)
    if(t>=prox && modo!=='fin'){ prox=t+(modo==='libre'?.25:.5); const pocas=meta && burbujas.filter(o=>!o.pum&&o.c.k===meta.k).length<2;
      const col=pocas && Math.random()<.6 ? cols.find(x=>x.k===meta.k) : cols[Math.floor(Math.random()*cols.length)];
      burbujas.push({c:col, x:.08+Math.random()*.84, y:1.1, r:.06+Math.random()*.04, v:.12+Math.random()*.1, fase:Math.random()*6}); }
    for(let i=burbujas.length-1;i>=0;i--){ const b=burbujas[i]; b.y-=b.v*dt; const x=(b.x+Math.sin(t*1.5+b.fase)*.02)*w, y=b.y*h, R=b.r*h;
      if(b.pum || b.y<-.15){ burbujas.splice(i,1); continue; } b.px=x; b.py=y;
      c.save(); c.globalAlpha=.85; ell(c,x,y,R,R,b.c.c); c.restore(); c.strokeStyle='rgba(255,255,255,.8)'; c.lineWidth=2; c.beginPath(); c.arc(x,y,R,0,Math.PI*2); c.stroke(); ell(c,x-R*.35,y-R*.35,R*.2,R*.14,'rgba(255,255,255,.7)'); }
    gotas.paso(c,dt,h);
    if(meta && modo==='pedidos'){ c.fillStyle='rgba(255,255,255,.9)'; rr(c,w*.03,h*.04,h*.18,h*.18,14); c.fill(); const col=cols.find(x=>x.k===meta.k); ell(c,w*.03+h*.09,h*.13,h*.06,h*.06,col.c); }
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='right'; c.fillStyle='#22314F'; c.fillText(`★ ${n}`,w*.97,h*.09); c.restore();
  });
  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){
      meta=null; modo='libre'; await sayAll([tx.libre]);
      await new Promise(r=>setTimeout(r,12000)); if(!M.alive()) return;
      modo='fin'; await sayAll([textoN(tx.fin,n), praise(true)]); if(M.alive()) resolve(n); return;
    }
    ronda++; let k; do{ k=cols[Math.floor(Math.random()*cols.length)].k; }while(k===ultimo);
    meta={k}; ultimo=k; await sayAll([tx.pide(nombre(k))]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});

/* ---------------------------------------------------------
   LA PLAYA · Bajo el mar: ¿dónde está el cangrejo? Las criaturas flotan y el relator pide una; el chico la toca
   (o elige con las flechas). Al final, a darles de comer: se toca el agua, cae comida, la criatura más cercana
   nada hasta ahí, come y suelta burbujas (y dice cómo se llama). No se pierde nunca.
   Los textos: microjuego.ingredientes[i] = {texto, p} (el nombre y la pregunta), más titulo, intro, fin, alimentar.
   --------------------------------------------------------- */
MICROJUEGOS.pesca = (cap, M) => new Promise(resolve=>{
  const tx=cap.microjuego, cr=tx.ingredientes, cv=M.canvas, RONDAS=8;
  const base=[[.2,.42],[.5,.68],[.78,.36],[.3,.76],[.62,.28],[.84,.66]];
  let ronda=0, meta=null, ultimo=null, listo=false, n=0, sel=-1, modo='preguntas', brillo=null, geo={w:1,h:1}, ultDicho=0;
  const DURACION=60;
  let pescados=0, t0=null, finPesca=null, spawn=0, red={x:.5,y:.5,k:false}, lance=null;
  const bub=[], comida=[], peces=[];
  const est=cr.map((g,i)=>({g, i, x:base[i%6][0], y:base[i%6][1], ph:i*1.7, come:0}));
  const pos=(e,t)=>({x:(e.x+Math.sin(t*.6+e.ph)*.035)*geo.w, y:(e.y+Math.cos(t*.8+e.ph)*.03)*geo.h});
  const burbujas=(x,y,k=7)=>{ for(let i=0;i<k;i++) bub.push({x:x+(Math.random()-.5)*geo.h*.1, y, vy:-geo.h*(.18+Math.random()*.25), r:geo.h*(.01+Math.random()*.014), vida:1.2+Math.random()*.6}); };
  const tocar=e=>{
    if(!M.alive() || !e) return;
    if(modo==='comer'){ return; }
    if(!listo) return;
    if(e.g.k!==meta.k){ sfx.oops(); sayAll([e.g.texto, meta.p]); return; }
    listo=false; n++; brillo={i:e.i, t:performance.now()/1000}; const p=pos(e,performance.now()/1000); burbujas(p.x,p.y,12);
    tone(660+n%6*90,.12,'triangle',.11); tone(990+n%6*90,.15,'sine',.07,.06); noise(.25,.06,900,2600);
    (async()=>{ await sayAll([praise(), e.g.texto]); if(!M.alive()) return; await sleep(350); nuevaRonda(); })();
  };
  const lanzar=(x,y,t)=>{
    lance={x,y,t}; const h=geo.h; let mejor=null, dist=1e9;
    for(const f of peces){ const d=Math.hypot(f.x-x,f.y-y); if(d<dist){ dist=d; mejor=f; } }
    if(mejor && dist<mejor.tam*.62+h*.05){
      peces.splice(peces.indexOf(mejor),1); pescados++; burbujas(mejor.x,mejor.y,10); mejor.cogido=t;
      tone(520+pescados%8*70,.1,'triangle',.1); noise(.18,.07,800,2400);
      subidas.push({x:mejor.x,y:mejor.y,t});
      if(t-ultDicho>1.6){ ultDicho=t; sayAll([mejor.g.texto]); }
    } else { noise(.12,.04,500,1400); }
  };
  const subidas=[];
  cv.addEventListener('pointerdown',ev=>{ const r=cv.getBoundingClientRect(), x=ev.clientX-r.left, y=ev.clientY-r.top, t=performance.now()/1000;
    if(modo==='pesca'){ lanzar(x,y,t); return; }
    if(modo==='comer'){ if(comida.length<8){ comida.push({x,y,vy:geo.h*.18}); tone(500,.08,'sine',.07,0,800); } return; }
    let mejor=null, dist=1e9; for(const e of est){ const p=pos(e,t), d=Math.hypot(p.x-x,p.y-y); if(d<dist){ dist=d; mejor=e; } }
    if(dist<geo.h*.17) tocar(mejor); else if(listo) sayAll([meta.p]); });
  const T2=teclasJuego(M, k=>{
    if(modo==='pesca'){
      red.k=true; const pa=.06;
      if(k==='ArrowRight') red.x=Math.min(1,red.x+pa); else if(k==='ArrowLeft') red.x=Math.max(0,red.x-pa); else if(k==='ArrowUp') red.y=Math.max(.1,red.y-pa); else if(k==='ArrowDown') red.y=Math.min(.95,red.y+pa);
      else if(k==='Enter'||k===' ') lanzar(red.x*geo.w,red.y*geo.h,performance.now()/1000);
      return;
    }
    if(modo==='comer') return;
    if(k==='ArrowRight'||k==='ArrowDown'){ sel=(sel+1)%est.length; sayAll([est[sel].g.texto]); }
    else if(k==='ArrowLeft'||k==='ArrowUp'){ sel=(sel-1+est.length)%est.length; sayAll([est[sel].g.texto]); }
    else if((k==='Enter'||k===' ') && sel>=0) tocar(est[sel]);
  });
  let tPrev=0;
  live(cv,(c,w,h,t)=>{
    if(!M.alive()){ T2.limpiar(); return; }
    geo={w,h}; const dt=Math.min(.05,t-tPrev||.016); tPrev=t;
    bgMar(c,w,h,t);
    // la comida cae; la criatura más cercana nada hasta ahí
    for(let i=comida.length-1;i>=0;i--){ const f=comida[i]; f.y=Math.min(h*.85,f.y+f.vy*dt); ell(c,f.x,f.y,h*.012,h*.012,'#C98B4E'); ell(c,f.x-h*.003,f.y-h*.003,h*.005,h*.005,'#F2C29B'); }
    for(const e of est){
      if(modo==='pesca'||modo==='fin') continue;
      let p=pos(e,t), obj=null, dmin=1e9;
      if(modo==='comer') for(const f of comida){ const d=Math.hypot(p.x-f.x,p.y-f.y); if(d<dmin){ dmin=d; obj=f; } }
      if(obj){ e.x+=(obj.x/w-e.x)*Math.min(1,dt*1.8); e.y+=(obj.y/h-e.y)*Math.min(1,dt*1.8); p=pos(e,t);
        if(Math.hypot(p.x-obj.x,p.y-obj.y)<h*.07){ comida.splice(comida.indexOf(obj),1); e.come=t; burbujas(p.x,p.y-h*.05,6); noise(.2,.05,500,1500); if(t-ultDicho>1.2){ ultDicho=t; sayAll([e.g.texto]); } } }
      else { e.x+=(base[e.i%6][0]-e.x)*Math.min(1,dt*.6); e.y+=(base[e.i%6][1]-e.y)*Math.min(1,dt*.6); }
      const k=e.come&&t-e.come<.6?1+.25*Math.sin((t-e.come)*16):1, hop=brillo&&brillo.i===e.i&&t-brillo.t<1.1?Math.abs(Math.sin((t-brillo.t)*8))*h*.06:0, tam=h*.2*k;
      c.save(); c.translate(p.x,p.y-hop); if(Math.cos(t*.6+e.ph)<0) c.scale(-1,1); drawImg(c,e.g.k,0,0,tam); c.restore();
      if(sel===e.i && modo!=='comer'){ c.strokeStyle='#FFC93C'; c.lineWidth=5; c.beginPath(); c.arc(p.x,p.y,h*.15+Math.sin(t*6)*3,0,Math.PI*2); c.stroke(); }
      if(brillo&&brillo.i===e.i&&t-brillo.t<1.1){ c.save(); c.globalAlpha=1-(t-brillo.t)/1.1; ell(c,p.x,p.y,h*.17,h*.17,'rgba(255,201,60,.5)'); c.restore(); }
    }
    if(modo==='pesca'){
      if(t0===null) t0=t;
      const rest=Math.max(0,DURACION-(t-t0));
      spawn-=dt; if(spawn<=0 && peces.length<9){ spawn=.35+Math.random()*.5; const g=cr[Math.floor(Math.random()*cr.length)], izq=Math.random()<.5, tam=h*(.15+Math.random()*.1);
        peces.push({g, x:izq?-tam:w+tam, y:h*(.22+Math.random()*.62), vx:(izq?1:-1)*w*(.1+Math.random()*.2), ph:Math.random()*6, tam}); }
      for(let i=peces.length-1;i>=0;i--){ const f=peces[i]; f.x+=f.vx*dt; const yy=f.y+Math.sin(t*2+f.ph)*h*.025;
        if(f.x<-f.tam*1.5||f.x>w+f.tam*1.5){ peces.splice(i,1); continue; }
        c.save(); c.translate(f.x,yy); if(f.vx<0) c.scale(-1,1); drawImg(c,f.g.k,0,0,f.tam); c.restore(); f.yd=yy; }
      for(let i=subidas.length-1;i>=0;i--){ const q=subidas[i], a=(t-q.t)/.8; if(a>=1){ subidas.splice(i,1); continue; } c.save(); c.globalAlpha=1-a; cartel(c,'+1',q.x,q.y-a*h*.12,h*.07,'#FFE27A'); c.restore(); }
      if(lance && t-lance.t<.4){ const a=(t-lance.t)/.4, r=h*.09*(1+a*.6); c.save(); c.globalAlpha=1-a; c.strokeStyle='#fff'; c.lineWidth=4; c.beginPath(); c.arc(lance.x,lance.y,r,0,Math.PI*2); c.stroke(); for(let k=-2;k<=2;k++){ c.beginPath(); c.moveTo(lance.x+k*r*.4,lance.y-r*.9); c.lineTo(lance.x+k*r*.4,lance.y+r*.9); c.stroke(); c.beginPath(); c.moveTo(lance.x-r*.9,lance.y+k*r*.4); c.lineTo(lance.x+r*.9,lance.y+k*r*.4); c.stroke(); } c.restore(); }
      if(red.k){ const rx=red.x*w, ry=red.y*h, r=h*.09; c.save(); c.strokeStyle='#FFC93C'; c.lineWidth=5; c.beginPath(); c.arc(rx,ry,r+Math.sin(t*6)*3,0,Math.PI*2); c.stroke(); c.restore(); }
      cartel(c,`${Math.ceil(rest)}″`,w*.88,h*.1,h*.09,rest<10?'#FF8A7A':'#fff');
      cartel(c,`${pescados}`,w*.12,h*.1,h*.09,'#FFE27A');
      if(rest<=0 && finPesca){ const f=finPesca; finPesca=null; f(); }
    }
    for(let i=bub.length-1;i>=0;i--){ const b=bub[i]; b.vida-=dt; if(b.vida<=0){ bub.splice(i,1); continue; } b.y+=b.vy*dt; b.x+=Math.sin(b.vida*6)*h*.003; c.strokeStyle='rgba(255,255,255,.85)'; c.fillStyle='rgba(255,255,255,.25)'; c.lineWidth=2; c.beginPath(); c.arc(b.x,b.y,b.r,0,Math.PI*2); c.fill(); c.stroke(); }
    if(meta && modo==='preguntas'){ c.fillStyle='rgba(255,255,255,.85)'; rr(c,w*.74,h*.05,w*.22,h*.24,14); c.fill(); drawImg(c,meta.k,w*.85,h*.17,h*.18); }
    c.save(); c.font=`800 ${Math.round(h*.06)}px 'Baloo 2',sans-serif`; c.textAlign='left'; c.fillStyle='#fff'; c.lineWidth=4; c.strokeStyle='#14508A'; if(modo!=='pesca'){ c.strokeText(`★ ${n}`,w*.04,h*.1); c.fillText(`★ ${n}`,w*.04,h*.1); } c.restore();
  });
  async function pescar(){
    modo='fin'; await sayAll([tx.pescar]); if(!M.alive()) return;
    pescados=0; t0=null; peces.length=0; modo='pesca';
    await new Promise(res=>{ finPesca=res; });
    modo='fin'; peces.length=0; if(!M.alive()) return;
    sfx.yay(); await sayAll([textoN(tx.pescaFin,pescados), praise(true)]);
  }
  async function alimentar(){
    modo='comer'; meta=null; await sayAll([tx.alimentar]); if(!M.alive()) return;
    await new Promise(res=>{ const t0=performance.now(); const fin=()=>{ if(!M.alive()) return res(); if(performance.now()-t0<17000) return setTimeout(fin,300); res(); }; setTimeout(fin,500); });
  }
  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ meta=null; await sayAll([textoN(tx.fin,n), praise(true)]); if(!M.alive()) return; await pescar(); if(!M.alive()) return; await alimentar(); if(!M.alive()) return; await sayAll([praise(true)]); if(M.alive()) resolve(n); return; }
    ronda++; let g; do{ g=cr[Math.floor(Math.random()*cr.length)]; }while(g===ultimo && cr.length>1);
    meta=ultimo=g; await sayAll([g.p]); listo=true;
  }
  (async()=>{ await sayAll([M.aviso, tx.intro]); nuevaRonda(); })();
});
