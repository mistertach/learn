/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS (la casita del árbol) — parte común a todos los idiomas
   Las primeras palabras que se aprenden: hola, sí, no, gracias, agua, más, chau,
   y los colores. Es el primer lugar: frases cortas y nada difícil.
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     escenas: fondo 'jardin' (el de capitulos/casa)
   final: icono 'casita' y anim 'saludo' = los amigos de cada estación aparecen uno por uno
   y dicen su palabra; cada idioma trae en final.palabras lo que dice cada uno, en el orden de `orden`.
   microjuego 'burbujitas': reventar burbujas del color que pide el relator (los colores son los de
   COLORES y T.colores en juego.js); cada idioma trae pide(color), esa(color), libre.
   ========================================================= */
(()=>{
const L="#22314F";
const arte = {
  casita:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="44" y="50" width="12" height="44" fill="#8A5636"/><ellipse cx="50" cy="36" rx="42" ry="30" fill="#3CB371"/><ellipse cx="30" cy="28" rx="18" ry="14" fill="#2E9E5E"/><rect x="32" y="40" width="36" height="22" fill="#F28F6B"/><path d="M28 42l22-16 22 16z" fill="#C4664F"/><rect x="45" y="48" width="10" height="14" rx="2" fill="#8A5636"/><rect x="35" y="45" width="7" height="7" rx="1" fill="#CDEBFF"/><path d="M60 62v32M66 62v32M60 70h6M60 78h6M60 86h6" stroke="#C98B4E" stroke-width="2.5"/></svg>`,
  siBien:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#2FBF8F"/><path d="M30 52l14 14 28-30" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  noMal:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#E8483B"/><path d="M34 34l32 32M66 34L34 66" stroke="#fff" stroke-width="10" stroke-linecap="round"/></svg>`,
  masBolitas:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="62" r="16" fill="#E8483B"/><circle cx="56" cy="70" r="14" fill="#FFC93C"/><circle cx="44" cy="44" r="14" fill="#2E86DE"/><circle cx="76" cy="30" r="18" fill="#2FBF8F"/><path d="M76 20v20M66 30h20" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
  florcita:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 52v40" stroke="#2E9E5E" stroke-width="5"/><path d="M50 76q-16-4-18-16 14 2 18 16z" fill="#3CB371"/><g fill="#FF8FB8"><circle cx="50" cy="24" r="12"/><circle cx="66" cy="36" r="12"/><circle cx="60" cy="54" r="12"/><circle cx="40" cy="54" r="12"/><circle cx="34" cy="36" r="12"/></g><circle cx="50" cy="40" r="10" fill="#FFC93C"/></svg>`,
  chauMano:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-18 50 60)"><path d="M34 92V50l-6-24c-2-6 6-8 8-2l6 20V16c0-6 8-6 8 0v26-32c0-6 8-6 8 0v32-26c0-6 8-6 8 0v30-18c0-6 8-6 8 0v34c0 18-8 30-14 30z" fill="#F5D7B5" stroke="#D9AE85" stroke-width="2.5" stroke-linejoin="round"/></g><path d="M80 28q8 8 6 20M86 18q14 14 10 34" fill="none" stroke="#FFC93C" stroke-width="4" stroke-linecap="round"/></svg>`,
  manchaRoja:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 12c18 0 20 14 32 18s12 26 0 34-10 24-30 24-22-12-34-18-14-28-2-40 16-18 34-18z" fill="#E8483B"/><ellipse cx="36" cy="34" rx="8" ry="5" fill="#fff" opacity=".35"/></svg>`,
  manchaAzul:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M48 10c20 2 24 16 34 22s10 28-2 36-12 22-32 22-24-14-34-22-12-28 0-38 14-22 34-20z" fill="#2E6BD9"/><ellipse cx="36" cy="32" rx="8" ry="5" fill="#fff" opacity=".35"/></svg>`,
  manchaAmarilla:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M52 12c16 2 22 12 32 20s8 26-2 34-14 22-32 22-24-12-34-20-12-30 0-40 18-18 36-16z" fill="#FFC93C"/><ellipse cx="36" cy="34" rx="8" ry="5" fill="#fff" opacity=".45"/></svg>`,
  manchaVerde:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 12c20 0 22 12 32 20s10 28 0 36-12 20-32 20-24-12-34-20-12-28 0-38 14-18 34-18z" fill="#2FBF8F"/><ellipse cx="36" cy="34" rx="8" ry="5" fill="#fff" opacity=".35"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"jardin", actores});

registrarCapitulo({
  arte,
  id: "primeras",
  num: 1,
  arteTapa: "casita",
  lugarArte: "casita",
  orden: ["H", "S", "N", "G", "A", "M", "C"],
  niveles: [
    {num:0, piso:["#E9F6DA","#DCEFC8"], pared:"#8B6FE8", paredOscura:"#6A50C4", mapa:[
      "  ########  ",
      " ##H....S## ",
      "##........##",
      "#f..r..r..f#",
      "#N.........#",
      "#.....b..U.#",
      "##........##",
      " ##..P...## ",
      "  ########  "]},
    {num:1, piso:["#F3E6CC","#EADBBA"], pared:"#C98B4E", paredOscura:"#8A5636", mapa:[
      "##########  ",
      "#G.....A.#  ",
      "#........###",
      "#..j.....r.#",
      "#.f......U.#",
      "#..D.......#",
      "#..........#",
      "############"]},
    {num:2, piso:["#FFF0F5","#FBE1EA"], pared:"#2FBF8F", paredOscura:"#23966F", mapa:[
      " ########## ",
      " #M......C# ",
      "##........##",
      "#..j....s..#",
      "#..........G",
      "#.D......f.#",
      "#..........#",
      "############"]}
  ],
  estaciones: {
    H: {item:"mano", mostrador:"#FFC93C",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#FFC93C", seed:0.4},
      escenas:[
        esc(N("H",.3,1,"saludo"), C("mano",.66,.45,.2,"latir")),
        esc(H(.3,{gesto:"saludo"}), N("H",.7,-1,"saludo")),
        esc(H(.3), N("H",.7,-1,"saltar")),
        esc(H(.3,{gesto:"aplaudir"}), N("H",.7,-1,"aplaudir"), E("corazones",.5,.42))]},
    S: {item:"siBien", mostrador:"#2FBF8F",
      npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#2FBF8F", seed:1.2},
      escenas:[
        esc(N("S",.3), C("alfajor",.66,.5,.2,"latir")),
        esc(H(.3), N("S",.7,-1), C("alfajor",.5,.5,.14,"flotar")),
        esc(H(.3,{gesto:"saltar"}), C("siBien",.62,.4,.18,"latir")),
        esc(H(.3,{gesto:"saludo"}), N("S",.7,-1,"aplaudir"), E("estrellas",.5,.4))]},
    N: {item:"noMal", mostrador:"#E8483B",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#E8483B", seed:2.0},
      escenas:[
        esc(N("N",.3), C("sopa",.66,.55,.22,"latir")),
        esc(H(.3,{gesto:"triste"}), N("N",.7,-1), C("sopa",.5,.55,.14,"quieto")),
        esc(H(.3), C("noMal",.6,.4,.16,"latir")),
        esc(H(.3,{gesto:"saludo"}), N("N",.7,-1,"saludo"), C("helado",.5,.45,.14,"flotar"))]},
    G: {item:"corazon", mostrador:"#FF8FB8",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#FF8FB8", seed:0.8},
      escenas:[
        esc(N("G",.3), C("corazon",.66,.45,.2,"latir")),
        esc(H(.3), N("G",.7,-1), C("florcita",.5,.5,.14,"flotar")),
        esc(H(.3,{gesto:"sorpresa"}), N("G",.7,-1,"aplaudir")),
        esc(H(.3,{gesto:"saludo"}), N("G",.7,-1), E("corazones",.5,.42))]},
    A: {item:"vaso", mostrador:"#7CC6F0",
      npc:{kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", hat:"#7CC6F0", seed:1.6},
      escenas:[
        esc(H(.3,{gesto:"triste"}), C("sol",.75,.25,.18,"latir")),
        esc(H(.3), N("A",.7,-1), C("vaso",.5,.5,.16,"flotar")),
        esc(H(.3,{gesto:"saltar"}), C("vaso",.6,.5,.14,"quieto")),
        esc(H(.3,{gesto:"saludo"}), N("A",.7,-1,"saludo"), E("estrellas",.5,.4))]},
    M: {item:"masBolitas", mostrador:"#2E86DE",
      npc:{kind:"cat", fur:"#9E9E9E", fur2:"#F2F2F2", stripes:"#6E6E6E", hat:"#2E86DE", seed:2.4},
      escenas:[
        esc(N("M",.3), C("pelota",.66,.6,.14,"saltar")),
        esc(H(.3,{gesto:"aplaudir"}), C("pelota",.55,.6,.12,"saltar"), C("pelota",.7,.6,.12,"saltar")),
        esc(H(.3,{gesto:"saltar"}), N("M",.7,-1,"saltar"), E("burbujas",.5,.45)),
        esc(H(.3,{gesto:"bailar"}), N("M",.7,-1,"bailar"), E("estrellas",.5,.4))]},
    C: {item:"chauMano", mostrador:"#8B6FE8",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#8B6FE8", seed:0.3},
      escenas:[
        esc(N("C",.3,1,"saludo"), C("luna",.75,.25,.16,"flotar")),
        esc(H(.3,{gesto:"saludo"}), N("C",.7,-1,"saludo")),
        esc(H(.3), N("C",.7,-1), E("zzz",.6,.3)),
        esc(H(.3,{gesto:"saludo"}), E("corazones",.5,.42))]}
  },
  final: {npc:{kind:"bunny", fur:"#FFD9A8", fur2:"#FFF7EA", inner:"#FFB3C7", hat:"#8B6FE8", seed:1.4}, arte:"casita", icono:"casita", anim:"saludo"},
  microjuego: {id:"burbujitas", arte:"burbujas", precio:3, color:"#7CC6F0"},
  palabrasExtra: ["manchaRoja", "manchaAzul", "manchaAmarilla", "manchaVerde"],
  frasesExtra: ["mano", "sol", "luna", "corazon", "masBolitas"],
  preguntas: [
    {ok:"mano", no:["chauMano", "vaso"]},
    {ok:"chauMano", no:["mano", "siBien"]},
    {ok:"siBien", no:["noMal", "corazon"]},
    {ok:"noMal", no:["siBien", "masBolitas"]},
    {ok:"corazon", no:["vaso", "noMal"]},
    {ok:"vaso", no:["masBolitas", "mano"]},
    {ok:"masBolitas", no:["corazon", "chauMano"]},
    {ok:"manchaRoja", no:["manchaAzul", "manchaVerde"]},
    {ok:"manchaAzul", no:["manchaAmarilla", "manchaRoja"]},
    {ok:"manchaAmarilla", no:["manchaVerde", "manchaAzul"]}
  ]
});
})();
