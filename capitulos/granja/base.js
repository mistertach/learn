/* =========================================================
   CAPÍTULO 8 · LA GRANJA — parte común a todos los idiomas
   El chico es el granjero. Enseña los animales, los sonidos que hacen
   y adjetivos: grande, chiquito, rápido, sucio, suave.
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js
   (y la del uniforme en capitulos/restaurante/base.js). Además:
     mapa:    h fardo de pasto (y r árbol, f flores)
     escenas: fondo 'granja'
   Los animales de la granja son dibujos (cosas); los que atienden las estaciones son los de siempre.
   uniforme: el overol y el sombrero de paja, desde la estación V.
   final: icono 'granero' y anim 'desfile' = cae la tarde y aparecen los animales de `desfile`,
   uno por uno; cada idioma trae en final.sonidos lo que dice cada uno ("¡Muuu!").
   microjuego 'comida': a dar de comer. Cada idioma trae, para cada animal, el nombre (texto),
   el pedido (dale) y el sonido.
   ========================================================= */
(()=>{
const L="#22314F";
const arte = {
  granero:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 44L50 14l40 30v46H10z" fill="#C9352B"/><path d="M4 46L50 10l46 36" fill="none" stroke="#8B2E2E" stroke-width="7" stroke-linejoin="round"/><rect x="34" y="56" width="32" height="34" fill="#fff"/><rect x="37" y="59" width="26" height="31" fill="#C9352B"/><path d="M37 59l26 31M63 59L37 90" stroke="#fff" stroke-width="3"/><rect x="42" y="30" width="16" height="12" fill="#fff"/><rect x="0" y="88" width="100" height="12" fill="#86CC6E"/></svg>`,
  vaca:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M15 46q-9 6-7 20" fill="none" stroke="${L}" stroke-width="2.5" stroke-linecap="round"/><circle cx="8" cy="67" r="3" fill="${L}"/><g fill="#fff" stroke="#DDE3EC" stroke-width="1.5"><rect x="21" y="58" width="7" height="30" rx="3"/><rect x="31" y="60" width="7" height="28" rx="3"/><rect x="55" y="60" width="7" height="28" rx="3"/><rect x="64" y="58" width="7" height="30" rx="3"/></g><g fill="${L}"><rect x="21" y="85" width="7" height="4" rx="1.5"/><rect x="31" y="85" width="7" height="4" rx="1.5"/><rect x="55" y="85" width="7" height="4" rx="1.5"/><rect x="64" y="85" width="7" height="4" rx="1.5"/></g><ellipse cx="44" cy="51" rx="31" ry="18" fill="#fff"/><path d="M24 40q8-6 14 2-4 10-14 6zM50 52q10-6 16 2-6 10-16 4zM34 60q6-2 8 3-5 3-8-3z" fill="${L}"/><ellipse cx="46" cy="69" rx="7" ry="4" fill="#FFB3C7"/><path d="M70 26q-2-8 4-8M84 26q2-8-4-8" fill="none" stroke="#F2E3C6" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="67" cy="33" rx="7" ry="4" fill="#fff" stroke="#DDE3EC" stroke-width="1.5" transform="rotate(-20 67 33)"/><ellipse cx="78" cy="36" rx="12" ry="12" fill="#fff"/><path d="M72 28q6-4 10 2-4 4-10-2z" fill="${L}"/><ellipse cx="84" cy="45" rx="10" ry="7.5" fill="#FFB3C7"/><ellipse cx="81" cy="45" rx="1.6" ry="2.2" fill="#C9708A"/><ellipse cx="87" cy="45" rx="1.6" ry="2.2" fill="#C9708A"/><circle cx="79" cy="34" r="3" fill="${L}"/><circle cx="80" cy="33" r="1" fill="#fff"/></svg>`,
  chancho:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M14 50q-8-2-6-8 4-2 4 3 0 4-4 4" fill="none" stroke="#F28FA8" stroke-width="2.5" stroke-linecap="round"/><g fill="#F28FA8"><rect x="22" y="64" width="8" height="22" rx="3"/><rect x="33" y="66" width="8" height="20" rx="3"/><rect x="56" y="66" width="8" height="20" rx="3"/><rect x="67" y="64" width="8" height="22" rx="3"/></g><g fill="#C9708A"><rect x="22" y="84" width="8" height="4" rx="1.5"/><rect x="33" y="84" width="8" height="4" rx="1.5"/><rect x="56" y="84" width="8" height="4" rx="1.5"/><rect x="67" y="84" width="8" height="4" rx="1.5"/></g><ellipse cx="48" cy="54" rx="34" ry="21" fill="#FFB3C7"/><path d="M70 30l2-12 9 9zM84 32l6-10 3 12z" fill="#F28FA8"/><circle cx="80" cy="44" r="14" fill="#FFB3C7"/><ellipse cx="92" cy="48" rx="6" ry="7" fill="#F28FA8"/><ellipse cx="91" cy="46" rx="1.5" ry="2.2" fill="#C9708A"/><ellipse cx="94" cy="50" rx="1.5" ry="2.2" fill="#C9708A"/><circle cx="80" cy="40" r="3" fill="${L}"/><circle cx="81" cy="39" r="1" fill="#fff"/><ellipse cx="76" cy="50" rx="4" ry="2.5" fill="#FF7FA0" opacity=".5"/><path d="M30 70q6 4 12 0" fill="none" stroke="#8A5636" stroke-width="4" stroke-linecap="round" opacity=".35"/></svg>`,
  oveja:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#4A4458"><rect x="24" y="62" width="6" height="26" rx="3"/><rect x="34" y="64" width="6" height="24" rx="3"/><rect x="56" y="64" width="6" height="24" rx="3"/><rect x="66" y="62" width="6" height="26" rx="3"/></g><g fill="#fff" stroke="#E3E8F0" stroke-width="2"><circle cx="22" cy="50" r="12"/><circle cx="34" cy="40" r="13"/><circle cx="50" cy="37" r="14"/><circle cx="64" cy="42" r="12"/><circle cx="28" cy="62" r="11"/><circle cx="46" cy="62" r="13"/><circle cx="64" cy="60" r="11"/><circle cx="46" cy="50" r="14"/></g><ellipse cx="72" cy="38" rx="6" ry="3.5" fill="#4A4458" transform="rotate(-30 72 38)"/><ellipse cx="80" cy="44" rx="11" ry="13" fill="#4A4458"/><circle cx="78" cy="31" r="7" fill="#fff"/><circle cx="83" cy="41" r="3.5" fill="#fff"/><circle cx="84" cy="41" r="2" fill="${L}"/><path d="M84 51q3 2 5 0" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  gallo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M74 54c10-20 4-36 16-40-2 14 4 26-6 42zM70 60c14-10 14-28 24-28-4 14 0 24-14 34z" fill="#2FBF8F"/><path d="M68 62c12-4 18-18 22-14-4 12-10 18-22 22z" fill="#2E86DE"/><ellipse cx="54" cy="64" rx="26" ry="22" fill="#fff"/><path d="M40 70q14 12 30 0" fill="none" stroke="#E3E8F0" stroke-width="4"/><circle cx="36" cy="38" r="15" fill="#fff"/><path d="M28 24q2-12 8-6 2-10 8-2 6-6 6 6z" fill="#E8483B"/><path d="M20 38l-12 4 12 4z" fill="#FFC93C"/><path d="M24 48q2 10 8 8 2-6-4-10z" fill="#E8483B"/><circle cx="34" cy="36" r="3.5" fill="${L}"/><path d="M46 84l-2 12M60 84l2 12" stroke="#FF9B3D" stroke-width="4" stroke-linecap="round"/></svg>`,
  pato:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="86" rx="44" ry="8" fill="#7CC6F0"/><path d="M14 64c0-14 18-18 36-16l24-4c12 2 16 14 12 24-6 14-26 16-44 14S14 76 14 64z" fill="#FFF3D6"/><path d="M36 64q14 10 32 0" fill="none" stroke="#F2DCB0" stroke-width="4"/><circle cx="66" cy="34" r="16" fill="#2E9E5E"/><path d="M66 50h10v6H62z" fill="#fff"/><path d="M80 34l16 3-16 6z" fill="#FF9B3D"/><circle cx="70" cy="30" r="3.5" fill="${L}"/><circle cx="71" cy="29" r="1.2" fill="#fff"/></svg>`,
  caballo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M18 42q-12 8-8 30 6-6 6-16 2-8 4-12z" fill="#5C3A1E"/><g fill="#A8744E"><rect x="22" y="56" width="7" height="32" rx="3"/><rect x="31" y="57" width="7" height="31" rx="3"/><rect x="58" y="57" width="7" height="31" rx="3"/><rect x="67" y="56" width="7" height="32" rx="3"/></g><g fill="#5C3A1E"><rect x="22" y="85" width="7" height="4" rx="1.5"/><rect x="31" y="85" width="7" height="4" rx="1.5"/><rect x="58" y="85" width="7" height="4" rx="1.5"/><rect x="67" y="85" width="7" height="4" rx="1.5"/></g><ellipse cx="46" cy="48" rx="29" ry="14" fill="#A8744E"/><path d="M64 44q4-18 12-26l10 6q-6 8-8 22z" fill="#A8744E"/><path d="M78 14l-3-9 7 6z" fill="#A8744E"/><path d="M76 18q12-4 16 8 3 6-3 9-6 2-14-4z" fill="#A8744E"/><ellipse cx="90" cy="32" rx="5" ry="4" fill="#C9955E"/><circle cx="91" cy="31" r="1.2" fill="#5C3A1E"/><circle cx="82" cy="22" r="2.5" fill="${L}"/><circle cx="82.8" cy="21.3" r=".8" fill="#fff"/><path d="M75 14q-8 6-10 18-2 8-4 12 6-6 8-12 4-10 9-16z" fill="#5C3A1E"/></svg>`,
  pollito:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="62" rx="30" ry="26" fill="#FFD84A"/><circle cx="50" cy="38" r="20" fill="#FFE07A"/><path d="M48 18q2-8 6-4-2 2-4 6z" fill="#FFC93C"/><path d="M44 42l6 6 6-6z" fill="#FF9B3D"/><circle cx="42" cy="36" r="3.5" fill="${L}"/><circle cx="58" cy="36" r="3.5" fill="${L}"/><circle cx="43" cy="35" r="1.2" fill="#fff"/><circle cx="59" cy="35" r="1.2" fill="#fff"/><path d="M22 60q-8 4-4 10 6 0 8-4zM78 60q8 4 4 10-6 0-8-4z" fill="#FFC93C"/><path d="M42 88v6M58 88v6M38 94h8M54 94h8" stroke="#FF9B3D" stroke-width="3" stroke-linecap="round"/></svg>`,
  huevo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 72q40 28 80 0-6 20-40 20T10 72z" fill="#C9A23E"/><path d="M14 70q10-6 20 0t20 0 20 0 14 0" fill="none" stroke="#E8C66A" stroke-width="5"/><ellipse cx="50" cy="50" rx="22" ry="28" fill="#FFF7EA" stroke="#EADCC4" stroke-width="2"/><ellipse cx="42" cy="40" rx="5" ry="8" fill="#fff"/></svg>`,
  leche:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="36" y="6" width="28" height="12" rx="3" fill="#2E86DE"/><path d="M36 18h28v10l8 12v46a8 8 0 0 1-8 8H36a8 8 0 0 1-8-8V40l8-12z" fill="#fff" stroke="#CFE2EE" stroke-width="3"/><rect x="28" y="50" width="44" height="24" fill="#CDEBFF"/><path d="M38 58q4-6 8 0t8 0 8 0" fill="none" stroke="#2E86DE" stroke-width="3"/><path d="M42 66q6 4 16 0" fill="${L}" opacity=".2"/></svg>`,
  tractor:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="40" y="22" width="28" height="30" rx="4" fill="#2E9E5E"/><rect x="45" y="27" width="18" height="16" rx="2" fill="#CDEBFF"/><path d="M14 52h68v18H14z" fill="#2FBF8F"/><rect x="18" y="38" width="6" height="14" fill="#5C6A86"/><circle cx="66" cy="70" r="20" fill="${L}"/><circle cx="66" cy="70" r="9" fill="#FFC93C"/><circle cx="24" cy="76" r="13" fill="${L}"/><circle cx="24" cy="76" r="6" fill="#FFC93C"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, uniforme:true, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"granja", actores});

registrarCapitulo({
  arte,
  id: "granja",
  num: 8,
  arteTapa: "granero",
  lugarArte: "granero",
  orden: ["V", "H", "O", "K", "B", "T", "Y"],
  uniforme: {
    desde: "V",
    ropa: {
      torso: {lugar:"torso", estilo:"jardinero", color:"#2E86DE", color2:"#E8483B"},
      cabeza: {lugar:"cabeza", estilo:"paja", color:"#E8C66A", color2:"#E8483B"}
    }
  },
  niveles: [
    {num:0, piso:["#E9F6DA","#DCEFC8"], pared:"#B5753A", paredOscura:"#8A5636", mapa:[
      "############",
      "#V...H...U.#",
      "#..........#",
      "#hh.....r..#",
      "#..........#",
      "#O...f..hh.#",
      "#.........##",
      "#...P....## ",
      "##########  "]},
    {num:1, piso:["#F3E6CC","#EADBBA"], pared:"#C9352B", paredOscura:"#9C2A22", mapa:[
      "  ########  ",
      " ##K....B## ",
      "##........##",
      "#h........h#",
      "#...r..r...#",
      "#..........#",
      "#U.....D...#",
      "#..........#",
      "############"]},
    {num:2, piso:["#E0F2F8","#D0EAF2"], pared:"#2FBF8F", paredOscura:"#23966F", mapa:[
      "##########  ",
      "#T......Y#  ",
      "#........###",
      "#..f.....r.#",
      "#..........G",
      "#r..h......#",
      "#...D......#",
      "#..........#",
      "############"]}
  ],
  estaciones: {
    V: {item:"vaca", mostrador:"#FFFFFF",
      npc:{kind:"dog", fur:"#C08552", fur2:"#F5E1C8", ear:"#8A5636", hat:"#E8C66A", seed:0.5},
      escenas:[
        esc(N("V",.3), C("vaca",.66,.52,.4,"latir")),
        esc(H(.3,{uniforme:false,gesto:"sorpresa"}), C("vaca",.66,.5,.42,"quieto")),
        esc(H(.28), C("leche",.5,.6,.16,"saltar"), C("vaca",.75,.5,.36,"quieto")),
        esc(H(.3,{gesto:"saludo"}), N("V",.7,-1,"aplaudir"), E("estrellas",.5,.4))]},
    H: {item:"chancho", mostrador:"#FFB3C7",
      npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", hat:"#2FBF8F", seed:1.3},
      escenas:[
        esc(N("H",.3), C("chancho",.66,.6,.34,"rodar")),
        esc(H(.28,{gesto:"sorpresa"}), C("chancho",.65,.6,.34,"saltar")),
        esc(H(.28,{gesto:"agacharse"}), C("chancho",.62,.62,.3,"latir"), E("burbujas",.62,.5)),
        esc(H(.3,{gesto:"aplaudir"}), C("chancho",.66,.6,.3,"quieto"), E("corazones",.6,.4))]},
    O: {item:"oveja", mostrador:"#E3E8F0",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#8B6FE8", seed:2.0},
      escenas:[
        esc(N("O",.3), C("oveja",.66,.55,.36,"flotar")),
        esc(H(.3), C("oveja",.62,.55,.38,"latir")),
        esc(H(.3,{gesto:"sorpresa"}), C("oveja",.62,.55,.3,"quieto"), E("zzz",.72,.3)),
        esc(H(.3,{gesto:"saludo"}), C("oveja",.66,.55,.32,"saltar"), E("corazones",.6,.4))]},
    K: {item:"gallo", mostrador:"#E8483B",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#E8483B", seed:0.9},
      escenas:[
        esc(C("gallo",.5,.5,.4,"saltar"), E("estrellas",.5,.3)),
        esc(H(.28,{gesto:"agacharse"}), N("K",.72,-1,"agacharse"), E("zzz",.5,.3)),
        esc(H(.28,{gesto:"saludo"}), C("gallo",.66,.5,.34,"latir")),
        esc(H(.3,{gesto:"arriba"}), N("K",.72,-1,"arriba"), C("huevo",.5,.66,.12,"latir"))]},
    B: {item:"caballo", mostrador:"#A8744E",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#2E86DE", seed:1.8},
      escenas:[
        esc(N("B",.3), C("caballo",.66,.5,.42,"quieto")),
        esc(H(.28), C("caballo",.5,.5,.36,"cruzar")),
        esc(H(.3,{gesto:"correr"}), C("caballo",.66,.5,.4,"saltar")),
        esc(H(.3,{gesto:"saludo"}), N("B",.7,-1), C("caballo",.5,.45,.26,"latir"), E("corazones",.5,.35))]},
    T: {item:"pato", mostrador:"#7CC6F0",
      npc:{kind:"cat", fur:"#9E9E9E", fur2:"#F2F2F2", stripes:"#6E6E6E", hat:"#7CC6F0", seed:2.6},
      escenas:[
        esc(N("T",.3), C("pato",.66,.6,.3,"flotar")),
        esc(H(.28), C("pato",.5,.62,.28,"cruzar")),
        esc(H(.3,{gesto:"sorpresa"}), C("pato",.66,.6,.28,"flotar"), E("burbujas",.66,.55)),
        esc(H(.3,{gesto:"bailar"}), C("pato",.66,.6,.26,"saltar"), E("estrellas",.6,.4))]},
    Y: {item:"pollito", mostrador:"#FFE07A",
      npc:{kind:"bunny", fur:"#C9B8A8", fur2:"#F2EAE0", inner:"#FFB3C7", hat:"#FFC93C", seed:0.2},
      escenas:[
        esc(N("Y",.3), C("huevo",.66,.6,.22,"latir")),
        esc(H(.28,{gesto:"sorpresa"}), C("pollito",.66,.62,.18,"saltar")),
        esc(H(.28,{gesto:"agacharse"}), C("pollito",.55,.66,.12,"saltar"), C("pollito",.68,.66,.12,"saltar"), C("pollito",.81,.66,.12,"saltar")),
        esc(H(.3,{gesto:"saludo"}), N("Y",.72,-1), E("corazones",.5,.4))]}
  },
  final: {npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#E8C66A", seed:1.1}, arte:"granero", icono:"granero", anim:"desfile",
    desfile:["vaca", "chancho", "oveja", "gallo", "caballo", "pato", "pollito"]},
  microjuego: {id:"comida", arte:"pollito", precio:3, color:"#8CCB6B", ingredientes:["vaca", "chancho", "oveja", "gallo", "caballo", "pato"]},
  palabrasExtra: ["huevo", "leche", "tractor", "granero"],
  frasesExtra: ["vaca", "pollito", "caballo", "chancho", "oveja"],
  preguntas: [
    {ok:"vaca", no:["oveja", "caballo"]},
    {ok:"chancho", no:["pato", "vaca"]},
    {ok:"gallo", no:["pollito", "pato"]},
    {ok:"pato", no:["gallo", "chancho"]},
    {ok:"oveja", no:["vaca", "pollito"]},
    {ok:"caballo", no:["chancho", "oveja"]},
    {ok:"pollito", no:["gallo", "caballo"]},
    {ok:"leche", no:["huevo", "tractor"]},
    {ok:"huevo", no:["leche", "granero"]},
    {ok:"tractor", no:["granero", "caballo"]}
  ]
});
})();
