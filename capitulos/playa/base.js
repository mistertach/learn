/* =========================================================
   CAPÍTULO 12 · LA PLAYA — parte común a todos los idiomas
   Un día de playa y una zambullida: la sombrilla, la arena, la ola, las antiparras y, abajo del mar,
   el pez, el cangrejo y la tortuga. Enseña "¡Qué lindo día!", "Está calentita", "¡Hola, pececito!", "¡Nademos juntos!".
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js, ar.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    y palmera · n sombrilla · i roca · v alga · w coral   (todos decorados: no se pisan)
              = mar (pared que ondea; la orilla tiene espuma) · la U de la playa es un "pocito" en la orilla para zambullirse y la D de abajo, la luz de la superficie
     niveles: `portal:'<dibujo>'` cambia la escalera por una entrada al agua (el dibujo flota encima, en un globito)
     niveles: `agua:true` = bajo el mar (burbujas, luz que ondea, el personaje flota)
     escenas: fondo 'playa' (arena y mar) | 'mar' (bajo el agua)
   uniforme: la malla y las antiparras con snorkel, desde la estación N (las antiparras).
   final: icono 'cofre' y anim 'desfile' con `fondo:'mar'`: los animales del mar pasan nadando (cada uno dice lo de `sonidos`).
   microjuego 'pesca': ¿dónde está el pez? Las criaturas van en `ingredientes` (cada idioma trae el nombre y la pregunta),
   y al final se les da de comer tocando el agua.
   ========================================================= */
(()=>{
const arte = {
  playa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#BDE8FF"/><circle cx="80" cy="20" r="10" fill="#FFD84D"/><path d="M0 52Q25 44 50 52T100 50V100H0Z" fill="#3FB5F0"/><path d="M0 60Q25 52 50 60T100 58" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/><path d="M0 72Q40 62 100 74V100H0Z" fill="#F4DDA0"/><path d="M30 78V52" stroke="#8A5E3B" stroke-width="3"/><path d="M14 56Q16 36 30 34Q44 36 46 56Z" fill="#E8483B"/><path d="M14 56Q18 40 30 34L26 56Z" fill="#fff"/></svg>`,
  sombrilla:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="92" rx="26" ry="5" fill="#E9CB82"/><path d="M50 22V90" stroke="#8A5E3B" stroke-width="5" stroke-linecap="round"/><path d="M8 52Q10 18 50 12Q90 18 92 52Q80 44 70 52Q60 44 50 52Q40 44 30 52Q20 44 8 52Z" fill="#E8483B"/><path d="M50 12Q26 18 30 52Q40 44 50 52Z" fill="#fff"/><path d="M50 12Q74 18 70 52Q60 44 50 52Z" fill="#fff"/><path d="M50 12Q40 22 40 50" fill="none" stroke="#C9352B" stroke-width="2"/><circle cx="50" cy="10" r="3.5" fill="#FFC93C"/></svg>`,
  arena:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M4 86Q24 40 52 56T96 76V90H4Z" fill="#F2D693"/><path d="M4 86Q30 60 60 70T96 82V90H4Z" fill="#E9C57A"/><g fill="#C9A24E"><circle cx="30" cy="74" r="1.8"/><circle cx="48" cy="68" r="1.8"/><circle cx="64" cy="80" r="1.8"/><circle cx="20" cy="82" r="1.6"/><circle cx="78" cy="78" r="1.6"/></g><path d="M62 52a9 9 0 0 1 14 0l3 12H59z" fill="#FF8FB8"/><path d="M66 54v10M70 53v11M74 54v10" stroke="#fff" stroke-width="1.5" opacity=".7"/></svg>`,
  ola:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 70Q14 20 52 22Q84 26 82 52Q74 40 64 44Q76 56 70 70Q86 62 100 70V100H0Z" fill="#3FB5F0"/><path d="M0 78Q14 38 50 34Q70 36 74 48Q62 44 56 52Q66 62 62 76Q40 64 24 78Z" fill="#7CD0F7"/><path d="M52 22Q70 22 78 38Q66 32 56 38Z" fill="#fff"/><g fill="#fff"><circle cx="30" cy="84" r="3"/><circle cx="46" cy="90" r="2.4"/><circle cx="70" cy="86" r="3"/></g></svg>`,
  antiparras:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M6 46H16M84 46H94" stroke="#22314F" stroke-width="6" stroke-linecap="round"/><rect x="14" y="30" width="72" height="34" rx="16" fill="#2FBF8F"/><rect x="20" y="35" width="26" height="24" rx="11" fill="#9FE3FF"/><rect x="54" y="35" width="26" height="24" rx="11" fill="#9FE3FF"/><path d="M26 41q4-3 8-2M60 41q4-3 8-2" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M90 48Q98 38 96 12" fill="none" stroke="#FFC93C" stroke-width="6" stroke-linecap="round"/><ellipse cx="96" cy="10" rx="5" ry="3.4" fill="#E8483B"/></svg>`,
  pezmar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M78 50L96 34V66Z" fill="#FF8A3D"/><ellipse cx="46" cy="50" rx="36" ry="26" fill="#FF8A3D"/><path d="M34 26Q30 50 34 74" stroke="#fff" stroke-width="9" fill="none"/><path d="M58 28Q54 50 58 72" stroke="#fff" stroke-width="7" fill="none"/><path d="M34 26Q40 14 54 20L46 28Z" fill="#E86A1C"/><circle cx="22" cy="44" r="6" fill="#fff"/><circle cx="21" cy="44" r="3" fill="#22314F"/><path d="M12 56q6 4 12 0" stroke="#22314F" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
  cangrejo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke="#C9352B" stroke-width="5" stroke-linecap="round" fill="none"><path d="M30 64L14 76M36 70L24 86M70 64L86 76M64 70L76 86"/></g><path d="M26 52Q10 46 10 30Q22 24 28 40Z" fill="#E8483B"/><path d="M74 52Q90 46 90 30Q78 24 72 40Z" fill="#E8483B"/><path d="M10 30Q14 20 22 24" stroke="#fff" stroke-width="0"/><ellipse cx="50" cy="62" rx="30" ry="20" fill="#E8483B"/><path d="M30 56Q50 44 70 56" stroke="#FF8A7A" stroke-width="4" fill="none" opacity=".6"/><path d="M42 44V34M58 44V34" stroke="#C9352B" stroke-width="4"/><circle cx="42" cy="32" r="6" fill="#fff"/><circle cx="58" cy="32" r="6" fill="#fff"/><circle cx="42" cy="33" r="3" fill="#22314F"/><circle cx="58" cy="33" r="3" fill="#22314F"/><path d="M42 70q8 6 16 0" stroke="#22314F" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>`,
  tortugamar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="22" cy="66" rx="12" ry="6" fill="#8CCB6B" transform="rotate(30 22 66)"/><ellipse cx="68" cy="70" rx="14" ry="6" fill="#8CCB6B" transform="rotate(-30 68 70)"/><ellipse cx="80" cy="46" rx="14" ry="12" fill="#8CCB6B"/><circle cx="85" cy="43" r="3.6" fill="#fff"/><circle cx="86" cy="43" r="1.8" fill="#22314F"/><path d="M82 52q5 3 9 0" stroke="#22314F" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M12 58Q14 24 48 24Q78 24 78 58Z" fill="#2E9E5E"/><path d="M12 58Q14 40 30 36L34 58Z" fill="#3FB874"/><path d="M34 58L36 32M52 58V26M68 58L66 32M20 46H74" stroke="#1F7A48" stroke-width="3" fill="none"/></svg>`,
  cofre:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="12" y="46" width="76" height="40" rx="6" fill="#8A5E3B"/><path d="M12 46Q12 18 50 18Q88 18 88 46Z" fill="#A87848"/><rect x="12" y="44" width="76" height="8" fill="#FFC93C"/><rect x="42" y="42" width="16" height="22" rx="4" fill="#FFC93C"/><circle cx="50" cy="52" r="3" fill="#22314F"/><path d="M26 18V86M74 18V86" stroke="#FFC93C" stroke-width="5" opacity=".9"/><g fill="#FFE27A"><circle cx="30" cy="40" r="4"/><circle cx="70" cy="38" r="4"/></g></svg>`,
  concha:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 86L14 52Q10 26 34 22Q50 18 50 36Q50 18 66 22Q90 26 86 52Z" fill="#FFB3C7"/><path d="M50 86L26 40M50 86L38 30M50 86L50 28M50 86L62 30M50 86L74 40" stroke="#FF7FA0" stroke-width="3" fill="none"/><path d="M40 86h20l-4 6H44z" fill="#F2C29B"/></svg>`,
  estrellamar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 8L61 36L92 38L68 58L76 90L50 72L24 90L32 58L8 38L39 36Z" fill="#FF9B3D" stroke="#E0791C" stroke-width="3" stroke-linejoin="round"/><g fill="#FFD2A0"><circle cx="50" cy="30" r="3"/><circle cx="50" cy="48" r="3.4"/><circle cx="34" cy="46" r="2.6"/><circle cx="66" cy="46" r="2.6"/><circle cx="40" cy="64" r="2.6"/><circle cx="60" cy="64" r="2.6"/></g></svg>`,
  pulpo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none" stroke="#8B6FE8" stroke-width="9" stroke-linecap="round"><path d="M24 64Q14 76 22 88"/><path d="M36 70Q32 86 40 92"/><path d="M50 72V92"/><path d="M64 70Q68 86 60 92"/><path d="M76 64Q86 76 78 88"/></g><path d="M20 52Q20 12 50 12Q80 12 80 52Q80 72 50 72Q20 72 20 52Z" fill="#8B6FE8"/><path d="M28 30Q34 18 46 16" stroke="#B9A6F5" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="38" cy="46" r="8" fill="#fff"/><circle cx="62" cy="46" r="8" fill="#fff"/><circle cx="39" cy="47" r="4" fill="#22314F"/><circle cx="63" cy="47" r="4" fill="#22314F"/><path d="M44 60q6 5 12 0" stroke="#22314F" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>`,
  barco:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10V62" stroke="#8A5E3B" stroke-width="4"/><path d="M50 14L84 56H50Z" fill="#fff" stroke="#9AA9C2" stroke-width="2"/><path d="M50 22L22 56H50Z" fill="#FF6F59"/><path d="M12 62H88L78 82Q50 90 22 82Z" fill="#2E86DE"/><path d="M12 62H88" stroke="#fff" stroke-width="4"/><path d="M0 90Q12 84 25 90T50 90T75 90T100 90V100H0Z" fill="#3FB5F0"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, uniforme:true, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"playa", actores}), mar=(...actores)=>({fondo:"mar", actores});

registrarCapitulo({
  arte,
  id: "playa",
  num: 12,
  arteTapa: "playa",
  lugarArte: "playa",
  orden: ["S", "A", "O", "N", "F", "C", "T"],
  uniforme: {
    desde: "N",
    ropa: {
      torso: {lugar:"torso", estilo:"malla", color:"#2E86DE", color2:"#FFC93C"},
      piernas: {lugar:"piernas", estilo:"short", color:"#FF6F59"},
      cara: {lugar:"cara", estilo:"buceo", color:"#2FBF8F"}
    }
  },
  niveles: [
    {num:0, portal:"antiparras", piso:["#F7E3A8","#F1D98F"], pared:"#E3C27E", paredOscura:"#C9A55A", mapa:[
      "============",
      "============",
      "#==========#",
      "#..S..U...A#",
      "#y......i..#",
      "#..n.....y.#",
      "#O.......N.#",
      "#.y..n..n..#",
      "##...P....##",
      " ########## "]},
    {num:1, agua:true, portal:"sol", piso:["#7FD0F2","#72C6EC"], pared:"#1F6FB5", paredOscura:"#14508A", mapa:[
      "  ########  ",
      " ##F..w..## ",
      "##...v....##",
      "#w....i...C#",
      "#..v.......#",
      "#....w..v..#",
      "#T...D.....G",
      "#..v.....w.#",
      "##........##",
      "  ########  "]}
  ],
  estaciones: {
    S: {item:"sombrilla", mostrador:"#E8483B",
      npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#E8483B", seed:0.7},
      escenas:[
        esc(N("S",.3), C("sombrilla",.66,.55,.42,"quieto")),
        esc(H(.28,{gesto:"saludo"}), N("S",.72,-1), C("sombrilla",.5,.5,.2,"quieto")),
        esc(H(.35,{gesto:"sorpresa"}), C("sombrilla",.6,.5,.4,"latir"), E("estrellas",.6,.3)),
        esc(H(.3,{gesto:"aplaudir"}), N("S",.7,-1), C("sombrilla",.5,.52,.3,"quieto"), E("corazones",.5,.4))]},
    A: {item:"arena", mostrador:"#F2C46B",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#FF9B3D", seed:1.6},
      escenas:[
        esc(N("A",.3), C("arena",.66,.6,.4,"quieto")),
        esc(H(.28,{gesto:"agacharse"}), C("arena",.58,.64,.3,"latir")),
        esc(H(.25,{gesto:"sorpresa"}), N("A",.74,-1), C("arena",.5,.62,.3,"quieto"), E("estrellas",.5,.4)),
        esc(H(.3,{gesto:"saltar"}), N("A",.7,-1,"saltar"), E("corazones",.5,.42))]},
    O: {item:"ola", mostrador:"#3FB5F0",
      npc:{kind:"cat", fur:"#9AA3B5", fur2:"#FFFFFF", hat:"#2E86DE", seed:2.3},
      escenas:[
        esc(N("O",.3), C("ola",.66,.56,.4,"flotar")),
        esc(H(.3,{gesto:"sorpresa"}), C("ola",.62,.56,.46,"latir")),
        esc(H(.2,{gesto:"saltar"}), C("ola",.6,.58,.4,"cruzar"), E("burbujas",.5,.4)),
        esc(H(.32,{gesto:"saludo"}), N("O",.7,-1,"saltar"), E("burbujas",.5,.4))]},
    N: {item:"antiparras", mostrador:"#2FBF8F",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#2FBF8F", seed:0.3},
      escenas:[
        esc(N("N",.3), C("antiparras",.66,.5,.32,"flotar")),
        esc(H(.28,{uniforme:false,gesto:"sorpresa"}), N("N",.72,-1), C("antiparras",.5,.45,.18,"latir")),
        esc(H(.34,{gesto:"saludo"}), E("estrellas",.5,.4)),
        esc(H(.3,{gesto:"aplaudir"}), N("N",.7,-1,"aplaudir"), E("corazones",.5,.42))]},
    F: {item:"pezmar", mostrador:"#FF8A3D",
      npc:{kind:"bunny", fur:"#F2D7E0", fur2:"#FFFFFF", inner:"#FF9EBB", hat:"#FF8A3D", seed:1.1},
      escenas:[
        mar(N("F",.3), C("pezmar",.66,.5,.26,"cruzar")),
        mar(H(.28,{gesto:"saludo"}), C("pezmar",.62,.5,.24,"flotar"), E("burbujas",.45,.4)),
        mar(H(.28), C("pezmar",.4,.46,.22,"flotar"), C("pezmar",.62,.58,.2,"flotar"), C("pezmar",.76,.4,.18,"flotar")),
        mar(H(.3,{gesto:"aplaudir"}), N("F",.7,-1), C("pezmar",.5,.4,.2,"saltar"), E("corazones",.5,.35))]},
    C: {item:"cangrejo", mostrador:"#E8483B",
      npc:{kind:"dog", fur:"#B9805A", fur2:"#F6E3CF", ear:"#7A4B2A", hat:"#E8483B", seed:2.0},
      escenas:[
        mar(N("C",.3), C("cangrejo",.66,.7,.28,"cruzar")),
        mar(H(.28), C("cangrejo",.62,.72,.26,"cruzar")),
        mar(H(.25,{gesto:"sorpresa"}), C("cangrejo",.55,.72,.3,"latir"), E("estrellas",.55,.5)),
        mar(H(.3,{gesto:"saltar"}), N("C",.7,-1,"bailar"), E("burbujas",.5,.4))]},
    T: {item:"tortugamar", mostrador:"#2E9E5E",
      npc:{kind:"bear", fur:"#7A4E2D", fur2:"#D9B48F", hat:"#2E9E5E", seed:1.5},
      escenas:[
        mar(N("T",.3), C("tortugamar",.66,.55,.34,"flotar")),
        mar(H(.3), C("tortugamar",.62,.58,.3,"cruzar")),
        mar(H(.4,{gesto:"arriba"}), C("tortugamar",.45,.6,.32,"flotar"), E("burbujas",.6,.4)),
        mar(H(.32,{gesto:"saludo"}), N("T",.7,-1), C("tortugamar",.5,.62,.26,"flotar"), E("corazones",.5,.4))]}
  },
  charlas: [
    {npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#E8483B", seed:0.7}, arte:"sombrilla", est:"S", voz:"papa", color:"#E8483B"},
    {npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#FF9B3D", seed:1.6}, arte:"arena", est:"A", voz:"chico", color:"#F2C46B"},
    {npc:{kind:"bunny", fur:"#F2D7E0", fur2:"#FFFFFF", inner:"#FF9EBB", hat:"#FF8A3D", seed:1.1}, arte:"pezmar", est:"F", voz:"nina", color:"#FF8A3D"},
    {npc:{kind:"bear", fur:"#7A4E2D", fur2:"#D9B48F", hat:"#2E9E5E", seed:1.5}, arte:"tortugamar", est:"T", voz:"sabio", color:"#2E9E5E"}],
  final: {npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#FFC93C", seed:0.9}, arte:"cofre", icono:"cofre", anim:"desfile", fondo:"mar",
    desfile:["pezmar", "cangrejo", "tortugamar", "estrellamar", "pulpo"]},
  microjuego: {id:"pesca", arte:"cofre", precio:1, color:"#3FB5F0", ingredientes:["pezmar", "cangrejo", "tortugamar", "estrellamar", "concha", "pulpo"]},
  palabrasExtra: ["concha", "estrellamar", "pulpo", "barco", "sol"],
  frasesExtra: ["sol", "ola", "antiparras", "tortugamar", "cofre"],
  preguntas: [
    {ok:"pezmar", no:["cangrejo", "tortugamar"]},
    {ok:"cangrejo", no:["pezmar", "concha"]},
    {ok:"tortugamar", no:["cangrejo", "pulpo"]},
    {ok:"sombrilla", no:["ola", "arena"]},
    {ok:"antiparras", no:["sombrilla", "sol"]},
    {ok:"ola", no:["arena", "sol"]},
    {ok:"arena", no:["ola", "concha"]},
    {ok:"pulpo", no:["pezmar", "estrellamar"]},
    {ok:"sol", no:["ola", "sombrilla"]},
    {ok:"cofre", no:["concha", "barco"]}
  ]
});
})();
