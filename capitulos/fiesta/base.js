/* =========================================================
   CAPÍTULO 10 · LA FIESTA — parte común a todos los idiomas
   ¡Es el cumpleaños del chico! Enseña la invitación, los globos, el regalo,
   la edad ("¿Cuántos años tenés?"), los meses del año, la torta y "¡Feliz cumpleaños!".
   Al final llegan los amigos de todos los lugares.
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js
   (y la del uniforme en capitulos/restaurante/base.js). Además:
     mapa:    o globos (y m mesa, f flores, r árbol, s sillón)
     escenas: fondo 'fiesta'
     estación: meses:true + el texto `contar` = antes de la frase, decimos los doce meses
               (cada idioma trae `meses`, como `numeros` en capitulos/reloj).
   uniforme: el gorrito de cumpleaños, desde la estación Z.
   final: icono 'fiesta' y anim 'fiesta' = llegan los amigos de todos los lugares (el npc
   del final de cada uno) y cantamos el cumpleaños feliz: cada idioma trae final.cancion
   ({N} = el nombre del chico).
   microjuego 'velas': ¿cuántas velas? Cada idioma trae pon(número), vela, soplar, soplarB, feliz.
   ========================================================= */
(()=>{
const L="#22314F";
const arte = {
  fiesta:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M6 14q44 18 88 0" fill="none" stroke="#8A5636" stroke-width="2"/><path d="M14 17l6 14 6-12zM34 22l6 14 6-13zM54 23l6 13 6-14zM74 19l6 12 6-14z" fill="#E8483B"/><path d="M24 20l4 12 6-11zM64 22l4 12 6-12z" fill="#FFC93C"/><path d="M50 92V60" stroke="${L}" stroke-width="1.5"/><ellipse cx="34" cy="52" rx="12" ry="15" fill="#2E86DE"/><ellipse cx="66" cy="52" rx="12" ry="15" fill="#2FBF8F"/><ellipse cx="50" cy="44" rx="13" ry="16" fill="#FF8FB8"/><path d="M34 67l16 25 16-25" fill="none" stroke="${L}" stroke-width="1.5"/><ellipse cx="45" cy="38" rx="3" ry="5" fill="#fff" opacity=".5"/></svg>`,
  invitacion:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="26" width="80" height="54" rx="6" fill="#FFF3D6" stroke="#E8C66A" stroke-width="3"/><path d="M10 30l40 28 40-28" fill="none" stroke="#E8C66A" stroke-width="3"/><circle cx="50" cy="56" r="10" fill="#E8483B"/><path d="M46 52q4-6 8 0-4 4-4 8-0-4-4-8z" fill="#fff"/><path d="M20 16l4 6M80 16l-4 6M50 8v8" stroke="#FFC93C" stroke-width="3" stroke-linecap="round"/></svg>`,
  globito:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 72q-6 10 2 16t-2 12" fill="none" stroke="${L}" stroke-width="2"/><ellipse cx="50" cy="38" rx="28" ry="34" fill="#E8483B"/><path d="M45 72h10l-5-6z" fill="#C9352B"/><ellipse cx="38" cy="24" rx="6" ry="10" fill="#fff" opacity=".45"/></svg>`,
  gorrito:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M22 86L54 12l26 74z" fill="#FF6F8F"/><path d="M30 68l40 0M38 50l30 0M46 32l18 0" stroke="#FFC93C" stroke-width="5" stroke-linecap="round"/><circle cx="54" cy="12" r="9" fill="#fff"/><path d="M18 86q32 10 66 0" fill="none" stroke="#2E86DE" stroke-width="6" stroke-linecap="round"/></svg>`,
  regalo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="14" y="42" width="72" height="48" rx="4" fill="#2E86DE"/><rect x="10" y="30" width="80" height="16" rx="4" fill="#4FA3EE"/><rect x="44" y="30" width="12" height="60" fill="#FFC93C"/><path d="M50 30c-6-14-26-18-24-6 2 8 16 6 24 6zM50 30c6-14 26-18 24-6-2 8-16 6-24 6z" fill="#FFC93C"/></svg>`,
  pinata:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 4v16" stroke="#8A5636" stroke-width="2"/><path d="M50 20l26 14v32l-26 14-26-14V34z" fill="#FFC93C"/><path d="M24 42h52M24 52h52M24 62h52" stroke="#E8483B" stroke-width="5"/><path d="M24 66l-6 14M36 72l-2 16M64 72l2 16M76 66l6 14" stroke="#2FBF8F" stroke-width="4" stroke-linecap="round"/><circle cx="42" cy="34" r="3" fill="${L}"/><circle cx="58" cy="34" r="3" fill="${L}"/></svg>`,
  caramelo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M28 50L8 34v32zM72 50l20-16v32z" fill="#FF8FB8"/><circle cx="50" cy="50" r="24" fill="#E8483B"/><path d="M34 36q16 14 32 28M30 50q20 4 40 0M36 64q14-14 28-28" stroke="#fff" stroke-width="4" opacity=".5"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, uniforme:true, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"fiesta", actores});

registrarCapitulo({
  arte,
  id: "fiesta",
  num: 10,
  arteTapa: "fiesta",
  lugarArte: "fiesta",
  orden: ["I", "O", "Z", "R", "K", "E", "T"],
  uniforme: {
    desde: "Z",
    ropa: {cabeza: {lugar:"cabeza", estilo:"cumple", color:"#FF6F8F", color2:"#FFC93C"}}
  },
  niveles: [
    {num:0, piso:["#FFF0F5","#FBE1EA"], pared:"#FF8FB8", paredOscura:"#D96A93", mapa:[
      "  ########  ",
      " ##I....O## ",
      "##........##",
      "#o........o#",
      "#..f....f..#",
      "#Z.........#",
      "##......U.##",
      " ##..P...## ",
      "  ########  "]},
    {num:1, piso:["#FFF7E0","#F7EBC8"], pared:"#FFC93C", paredOscura:"#D9A21E", mapa:[
      "############",
      "#R.......K.#",
      "#..........#",
      "#o..m..m..o#",
      "#..........#",
      "#s...m.....#",
      "#.D......U.#",
      "#..........#",
      "############"]},
    {num:2, piso:["#E9F6DA","#DCEFC8"], pared:"#8B6FE8", paredOscura:"#6A50C4", mapa:[
      "##########  ",
      "#E......T#  ",
      "#........###",
      "#o..r...o..#",
      "#..........G",
      "#.f..m..f..#",
      "#..D.......#",
      "#..........#",
      "############"]}
  ],
  estaciones: {
    I: {item:"invitacion", mostrador:"#FFC93C",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#FF8FB8", seed:0.4},
      escenas:[
        esc(H(.3,{uniforme:false}), C("invitacion",.62,.5,.26,"latir")),
        esc(H(.28,{uniforme:false}), N("I",.72,-1), C("invitacion",.5,.45,.14,"volar")),
        esc(H(.28,{uniforme:false,gesto:"sorpresa"}), N("I",.72,-1,"saltar")),
        esc(H(.3,{uniforme:false,gesto:"aplaudir"}), N("I",.72,-1,"bailar"), E("estrellas",.5,.4))]},
    O: {item:"globito", mostrador:"#E8483B",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#E8483B", seed:1.3},
      escenas:[
        esc(N("O",.3), C("globito",.62,.4,.2,"flotar"), C("globito",.78,.35,.16,"flotar")),
        esc(H(.28,{uniforme:false}), C("globito",.55,.45,.14,"latir")),
        esc(H(.28,{uniforme:false,gesto:"sorpresa"}), C("globito",.55,.4,.3,"latir"), E("estrellas",.55,.4)),
        esc(H(.3,{uniforme:false,gesto:"saltar"}), N("O",.72,-1,"saltar"), C("globito",.5,.25,.14,"flotar"))]},
    Z: {item:"gorrito", mostrador:"#FF6F8F",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", seed:2.1},
      escenas:[
        esc(N("Z",.3), C("gorrito",.64,.5,.24,"latir")),
        esc(H(.3,{uniforme:false}), C("gorrito",.5,.3,.14,"flotar")),
        esc(H(.3,{gesto:"sorpresa"}), N("Z",.72,-1,"aplaudir")),
        esc(H(.3,{gesto:"bailar"}), N("Z",.72,-1,"bailar"), E("corazones",.5,.4))]},
    R: {item:"regalo", mostrador:"#2E86DE",
      npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", hat:"#2E86DE", seed:0.8},
      escenas:[
        esc(N("R",.3), C("regalo",.64,.55,.26,"latir")),
        esc(H(.28), N("R",.72,-1), C("regalo",.5,.55,.16,"saltar")),
        esc(H(.28,{gesto:"sorpresa"}), C("pelota",.55,.45,.16,"saltar"), E("estrellas",.55,.4)),
        esc(H(.3,{gesto:"saludo"}), N("R",.72,-1,"saludo"), E("corazones",.5,.4))]},
    K: {item:"calendario", mostrador:"#8B6FE8", meses:true,
      npc:{kind:"cat", fur:"#9E9E9E", fur2:"#F2F2F2", stripes:"#6E6E6E", hat:"#8B6FE8", seed:1.7},
      escenas:[
        esc(N("K",.3), C("calendario",.64,.5,.28,"latir")),
        esc(H(.28), N("K",.72,-1)),
        esc(H(.28,{gesto:"aplaudir"}), C("calendario",.6,.45,.22,"saltar")),
        esc(H(.3,{gesto:"saltar"}), N("K",.72,-1,"saltar"), E("estrellas",.5,.4))]},
    E: {item:"vela", mostrador:"#FF9B3D",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#FF9B3D", seed:2.4},
      escenas:[
        esc(N("E",.3), C("vela",.64,.5,.22,"latir")),
        esc(H(.28), N("E",.72,-1,"arriba")),
        esc(H(.28,{gesto:"aplaudir"}), C("vela",.5,.5,.12,"saltar"), C("vela",.6,.5,.12,"saltar"), C("vela",.7,.5,.12,"saltar"), C("vela",.8,.5,.12,"saltar")),
        esc(H(.3,{gesto:"saltar"}), N("E",.72,-1,"bailar"), E("estrellas",.5,.4))]},
    T: {item:"torta", mostrador:"#FF8FB8",
      npc:{kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", hat:"#FF8FB8", seed:0.2},
      escenas:[
        esc(N("T",.3), C("torta",.64,.52,.32,"latir")),
        esc(H(.28,{gesto:"sorpresa"}), C("torta",.62,.52,.3,"quieto")),
        esc(H(.28), C("torta",.62,.52,.3,"quieto"), E("burbujas",.62,.4)),
        esc(H(.3,{gesto:"bailar"}), N("T",.72,-1,"bailar"), E("corazones",.5,.4))]}
  },
  final: {npc:{kind:"bunny", fur:"#FFD9A8", fur2:"#FFF7EA", inner:"#FFB3C7", hat:"#FF8FB8", seed:1.4}, arte:"fiesta", icono:"fiesta", anim:"fiesta"},
  microjuego: {id:"velas", arte:"torta", precio:3, color:"#FF8FB8"},
  palabrasExtra: ["pinata", "caramelo", "vaso"],
  frasesExtra: ["regalo", "torta", "globito", "invitacion", "vela"],
  preguntas: [
    {ok:"regalo", no:["globito", "torta"]},
    {ok:"torta", no:["regalo", "caramelo"]},
    {ok:"globito", no:["gorrito", "vela"]},
    {ok:"vela", no:["globito", "invitacion"]},
    {ok:"gorrito", no:["regalo", "pinata"]},
    {ok:"invitacion", no:["calendario", "regalo"]},
    {ok:"calendario", no:["invitacion", "torta"]},
    {ok:"pinata", no:["globito", "caramelo"]},
    {ok:"caramelo", no:["vela", "pinata"]},
    {ok:"vaso", no:["torta", "caramelo"]}
  ]
});
})();
