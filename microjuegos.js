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
const textoN = (txt, n) => String(txt||'').replace('{n}', n);

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
    // las agujas van suave hacia lo elegido (por el camino más corto)
    let d=total(selH,selT)-visto; d=((d%720)+1080)%720-360; visto+=d*Math.min(1,dt*7);
    const g=G0=geo(w,h), v=((visto%720)+720)%720;
    drawReloj(c,g.x,g.y,g.r,Math.floor(v/60),v%60,{marca:selH, borde:'#8B6FE8'});
    // estrellas ganadas
    for(let i=0;i<RONDAS;i++) star5(c,w*.84+(i%3)*h*.09,h*(.12+Math.floor(i/3)*.1),h*.035,i<bien?'#FFC93C':'rgba(34,49,79,.15)');
  });

  async function nuevaRonda(){
    if(!M.alive()) return;
    if(ronda>=RONDAS){ sfx.yay(); await sayAll([textoN(tx.fin,bien), praise(true)]); if(M.alive()) resolve(bien); return; }
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
    if(ronda>=RONDAS){ await sayAll([textoN(tx.fin,total), praise(true)]); if(M.alive()) resolve(total); return; }
    ronda++; dentro=[];
    let k; do{ k=ings[Math.floor(Math.random()*ings.length)].k; }while(meta && k===meta.k);
    meta={k, n:1+Math.floor(Math.random()*5)};
    await sayAll([pedir()]); listo=true;
  }
  live(cv,(c,w,h,tt)=>{
    t=tt; if(!M.alive()) return;
    bgFeria(c,w,h,t);
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
