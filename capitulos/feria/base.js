/* =========================================================
   CAPÍTULO 5 · LA FERIA — parte común a todos los idiomas
   Enseña las frutas y las verduras, a contar dentro de una frase
   ("Quiero tres manzanas"), "¿Cuánto cuesta?", grande y chiquito.
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    c cajón de frutas
     escenas: fondo 'feria' (puestos con toldos)
   final: icono 'canasta' y anim 'compras' = el chico paga con pececitos y las frutas saltan a la bolsa.
   microjuego 'canasta': las frutas van en `ingredientes`; cada idioma trae, para cada una,
   el nombre (texto), "una manzana" (uno) y "manzanas" (plural), y `numeros` del 1 al 10.
   (La frutilla usa el dibujo de capitulos/casa.)
   ========================================================= */
(()=>{
const arte = {
  feria:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="16" y="40" width="5" height="48" fill="#C98B4E"/><rect x="79" y="40" width="5" height="48" fill="#C98B4E"/><path d="M10 26h80v16H10z" fill="#E8483B"/><path d="M23 26h13v16H23zM49 26h13v16H49zM75 26h13v16H75z" fill="#fff"/><path d="M10 42l6.5 7 6.5-7 6.5 7 6.5-7 6.5 7 6.5-7 6.5 7 6.5-7 6.5 7 6.5-7 6.5 7 6.5-7z" fill="#E8483B"/><rect x="12" y="66" width="76" height="20" rx="3" fill="#B5753A"/><circle cx="26" cy="62" r="7" fill="#E8483B"/><circle cx="40" cy="61" r="7" fill="#FF9B3D"/><circle cx="54" cy="62" r="7" fill="#FFC93C"/><circle cx="68" cy="61" r="7" fill="#2FBF8F"/><circle cx="33" cy="56" r="6" fill="#8B6FE8"/><circle cx="61" cy="56" r="6" fill="#E8483B"/></svg>`,
  manzana:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 30c-8-8-34-6-34 22 0 22 16 38 26 38 4 0 6-2 8-2s4 2 8 2c10 0 26-16 26-38 0-28-26-30-34-22z" fill="#E8483B"/><path d="M50 30c0-8 2-14 6-18" stroke="#8A5636" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M56 22c8-8 18-6 20-2-8 6-14 6-20 2z" fill="#3CB371"/><ellipse cx="32" cy="46" rx="6" ry="9" fill="#fff" opacity=".35"/></svg>`,
  banana:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M18 30c4 30 26 50 62 46 6-1 8-6 2-8-28 4-46-12-52-38-2-8-14-8-12 0z" fill="#FFC93C"/><path d="M24 36c8 22 26 36 52 36" fill="none" stroke="#F2A007" stroke-width="3"/><path d="M18 30l-2-10 8 2z" fill="#8A5636"/><path d="M82 68l6 4-4 3z" fill="#5C3A1E"/></svg>`,
  naranja:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="56" r="34" fill="#FF9B3D"/><path d="M50 22c0-6 2-10 6-12" stroke="#8A5636" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M54 18c8-6 18-4 20 0-8 4-14 4-20 0z" fill="#3CB371"/><g fill="#F07F1F"><circle cx="40" cy="48" r="1.6"/><circle cx="58" cy="44" r="1.6"/><circle cx="66" cy="60" r="1.6"/><circle cx="44" cy="68" r="1.6"/><circle cx="54" cy="58" r="1.6"/></g><ellipse cx="36" cy="44" rx="6" ry="8" fill="#fff" opacity=".3"/></svg>`,
  pera:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 18c-10 0-12 14-14 24-2 8-16 14-16 30 0 12 12 20 30 20s30-8 30-20c0-16-14-22-16-30-2-10-4-24-14-24z" fill="#B9D45C"/><path d="M50 18c0-6 2-10 4-12" stroke="#8A5636" stroke-width="4" stroke-linecap="round"/><path d="M54 12c6-4 14-2 14 2-6 2-10 2-14-2z" fill="#3CB371"/><ellipse cx="36" cy="68" rx="5" ry="9" fill="#fff" opacity=".3"/></svg>`,
  limon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M14 52c0-18 18-30 36-30s36 12 36 30-18 30-36 30-36-12-36-30z" fill="#FFE04A"/><path d="M14 52l-6-3 6-4zM86 52l6-3-6-4z" fill="#F2C200"/><ellipse cx="38" cy="42" rx="10" ry="5" fill="#fff" opacity=".35"/><g fill="#F2C200"><circle cx="50" cy="56" r="1.5"/><circle cx="62" cy="48" r="1.5"/><circle cx="40" cy="62" r="1.5"/></g></svg>`,
  zanahoria:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M42 30h22L54 92c-2 4-6 4-6 0z" fill="#FF9B3D" transform="rotate(-20 50 60)"/><path d="M48 50h10M46 62h8M50 74h6" stroke="#E07020" stroke-width="3" stroke-linecap="round" transform="rotate(-20 50 60)"/><path d="M40 28C30 16 32 6 38 6c2 8 6 14 6 22zM48 26c0-12 6-20 10-18-2 8-4 14-6 20zM54 28c8-10 18-12 20-8-6 4-12 8-16 12z" fill="#3CB371"/></svg>`,
  sandia:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8 40a42 42 0 0 0 84 0z" fill="#2E9E5E"/><path d="M14 40a36 36 0 0 0 72 0z" fill="#E6F7D9"/><path d="M18 40a32 32 0 0 0 64 0z" fill="#FF6F6F"/><g fill="#22314F"><ellipse cx="34" cy="52" rx="2" ry="3.5"/><ellipse cx="50" cy="60" rx="2" ry="3.5"/><ellipse cx="66" cy="52" rx="2" ry="3.5"/><ellipse cx="42" cy="46" rx="2" ry="3.5"/><ellipse cx="58" cy="46" rx="2" ry="3.5"/></g></svg>`,
  balanza:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="58" width="60" height="30" rx="6" fill="#E8483B"/><circle cx="50" cy="72" r="11" fill="#fff"/><path d="M50 72l6-6" stroke="#22314F" stroke-width="3" stroke-linecap="round"/><path d="M14 52h72l-6 8H20z" fill="#AEB8C8"/><circle cx="34" cy="44" r="9" fill="#FFC93C"/><circle cx="50" cy="42" r="9" fill="#E8483B"/><circle cx="66" cy="44" r="9" fill="#FF9B3D"/></svg>`,
  canasta:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M24 50a26 26 0 0 1 52 0" fill="none" stroke="#8A5636" stroke-width="6"/><circle cx="38" cy="50" r="10" fill="#E8483B"/><circle cx="54" cy="46" r="10" fill="#FF9B3D"/><path d="M60 44c6 10 16 12 22 6" stroke="#FFC93C" stroke-width="9" stroke-linecap="round" fill="none"/><path d="M14 52h72l-8 34H22z" fill="#B5753A"/><path d="M20 62h60M22 72h56M24 82h52" stroke="#8A5636" stroke-width="3"/><path d="M30 52l4 34M44 52l2 34M58 52l-2 34M72 52l-4 34" stroke="#8A5636" stroke-width="2.5"/></svg>`,
  bolsa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M36 36a14 14 0 0 1 28 0" fill="none" stroke="#C98B4E" stroke-width="6"/><path d="M22 36h56l-6 54H28z" fill="#F3E3C8"/><path d="M22 36h56l-2 10H24z" fill="#E6D2AF"/><circle cx="40" cy="30" r="8" fill="#3CB371"/><circle cx="58" cy="28" r="9" fill="#E8483B"/><path d="M42 64c0 6 16 6 16 0" stroke="#C98B4E" stroke-width="3" fill="none"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, ...o}), N=(de,x,mira)=>({tipo:"npc", de, x, mira}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"feria", actores});

registrarCapitulo({
  arte,
  id: "feria",
  num: 5,
  arteTapa: "feria",
  lugarArte: "feria",
  orden: ["M", "N", "O", "Z", "F", "S", "B"],
  niveles: [
    {num:0, piso:["#F5E6C8","#EBD9B5"], pared:"#E8483B", paredOscura:"#B9352B", mapa:[
      "############",
      "#.M...N..U.#",
      "#..........#",
      "#.c.c..c.c.#",
      "#..........#",
      "#O.........#",
      "##........##",
      " #c......c# ",
      " ##..P...## ",
      "  ########  "]},
    {num:1, piso:["#E6F4DA","#D8ECC8"], pared:"#2FBF8F", paredOscura:"#23966F", mapa:[
      "   #########",
      "   #Z..F.DU#",
      "####.......#",
      "#c.........#",
      "#...c..c...#",
      "#.........c#",
      "#p......####",
      "#########   "]},
    {num:2, piso:["#FFF3D6","#FBE8BC"], pared:"#2E86DE", paredOscura:"#1F66B3", mapa:[
      "  ########  ",
      "  #S....B#  ",
      "###......###",
      "#..........#",
      "#.c..c..c..G",
      "#..........#",
      "###..D...###",
      "  #p...p#   ",
      "  #######   "]}
  ],
  estaciones: {
    M: {item:"manzana", mostrador:"#E8483B",
      npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#E8483B", seed:0.5},
      escenas:[
        esc(H(.28), N("M",.72,-1), C("manzana",.5,.55,.16,"flotar")),
        esc(N("M",.32), C("manzana",.55,.5,.14,"saltar"), C("manzana",.68,.5,.14,"saltar"), C("manzana",.81,.5,.14,"saltar")),
        esc(H(.25,{gesto:"sorpresa"}), C("manzana",.1,.72,.16,"rodar")),
        esc(H(.35,{gesto:"saludo"}), C("canasta",.62,.62,.26,"latir"), E("corazones",.5,.45))]},
    N: {item:"banana", mostrador:"#FFC93C",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#FFC93C", seed:1.2},
      escenas:[
        esc(N("N",.3), C("banana",.65,.5,.28,"latir")),
        esc(H(.28), N("N",.72,-1), C("pez",.5,.5,.12,"flotar")),
        esc(H(.25,{gesto:"sorpresa"}), C("banana",.62,.55,.26,"saltar")),
        esc(H(.35,{gesto:"salto"}), C("banana",.62,.5,.2,"flotar"), E("estrellas",.62,.42))]},
    O: {item:"naranja", mostrador:"#FF9B3D",
      npc:{kind:"cat", fur:"#F2994A", fur2:"#FFE9CF", stripes:"#C9712C", hat:"#2FBF8F", seed:2.0},
      escenas:[
        esc(N("O",.3), C("naranja",.6,.5,.18,"flotar"), C("naranja",.78,.5,.18,"flotar")),
        esc(H(.28), N("O",.72,-1)),
        esc(N("O",.3), C("vaso",.66,.55,.24,"latir")),
        esc(H(.35,{gesto:"saludo"}), C("vaso",.62,.55,.2,"quieto"), E("corazones",.5,.45))]},
    Z: {item:"zanahoria", mostrador:"#2FBF8F",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#FF9B3D", seed:0.8},
      escenas:[
        esc(N("Z",.32), C("zanahoria",.66,.5,.3,"latir")),
        esc(H(.28), C("zanahoria",.62,.5,.36,"quieto")),
        esc(N("Z",.4), C("zanahoria",.62,.48,.22,"saltar"), E("estrellas",.62,.4)),
        esc(H(.3,{gesto:"saludo"}), N("Z",.7,-1), E("corazones",.5,.45))]},
    F: {item:"frutilla", mostrador:"#FF8FB8",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#E8483B", seed:1.6},
      escenas:[
        esc(N("F",.3), C("frutilla",.62,.6,.1,"flotar"), C("frutilla",.72,.62,.1,"flotar")),
        esc(H(.28,{gesto:"sorpresa"}), C("frutilla",.6,.62,.08,"latir")),
        esc(H(.3), C("frutilla",.62,.55,.14,"saltar")),
        esc(H(.35,{gesto:"saludo"}), N("F",.7,-1), E("corazones",.5,.45))]},
    S: {item:"sandia", mostrador:"#2E9E5E",
      npc:{kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", hat:"#2E9E5E", seed:2.4},
      escenas:[
        esc(H(.25,{gesto:"sorpresa"}), C("sandia",.62,.6,.42,"latir")),
        esc(N("S",.3), C("sandia",.66,.62,.36,"quieto")),
        esc(H(.28,{gesto:"salto"}), N("S",.72,-1), C("sandia",.5,.66,.24,"rodar")),
        esc(H(.35,{gesto:"saludo"}), C("sandia",.65,.6,.3,"quieto"), E("corazones",.55,.4))]},
    B: {item:"balanza", mostrador:"#2E86DE",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#2E86DE", seed:0.3},
      escenas:[
        esc(N("B",.3), C("balanza",.66,.58,.3,"quieto")),
        esc(H(.28), C("banana",.62,.42,.16,"flotar"), C("balanza",.62,.65,.26,"quieto")),
        esc(H(.25,{gesto:"sorpresa"}), C("sandia",.62,.42,.2,"latir"), C("balanza",.62,.68,.26,"saltar")),
        esc(H(.35,{gesto:"salto"}), N("B",.7,-1), E("estrellas",.5,.4))]}
  },
  final: {npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", hat:"#E8483B", seed:1.1}, arte:"bolsa", icono:"canasta", anim:"compras"},
  microjuego: {id:"canasta", arte:"canasta", precio:3, color:"#2FBF8F", ingredientes:["manzana", "banana", "naranja", "frutilla", "pera", "limon"]},
  palabrasExtra: ["pera", "limon", "canasta", "bolsa"],
  frasesExtra: ["pez", "sandia", "frutilla", "bolsa", "manzana"],
  preguntas: [
    {ok:"banana", no:["manzana", "zanahoria"]},
    {ok:"naranja", no:["sandia", "pera"]},
    {ok:"sandia", no:["frutilla", "limon"]},
    {ok:"zanahoria", no:["banana", "manzana"]},
    {ok:"frutilla", no:["naranja", "pera"]},
    {ok:"balanza", no:["canasta", "bolsa"]},
    {ok:"manzana", no:["limon", "naranja"]},
    {ok:"limon", no:["pera", "frutilla"]},
    {ok:"canasta", no:["balanza", "sandia"]},
    {ok:"pera", no:["manzana", "banana"]}
  ]
});
})();
