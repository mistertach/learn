/* =========================================================
   CAPÍTULO 6 · LA PLAZA — parte común a todos los idiomas
   Enseña verbos y acciones: hamacarse, saltar, patear, tirarse por el tobogán,
   soplar, construir; "¡Me toca a mí!", "¡Empujame!", y el juego de Simón dice.
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    k arenero (y r árbol, f flores, b banco)
     escenas: fondo 'plaza'
              gesto del héroe (y de un npc): 'saltar' | 'girar' | 'aplaudir' | 'agacharse' | 'arriba' | 'bailar' | 'correr'
              anim de una cosa: 'hamacar' | 'balancear'
   final: icono 'silbato' y anim 'simon' = Simón dice. `ordenes` son las acciones, en orden;
   cada idioma trae en final.ordenes lo que dice el relator para cada una ("Simón dice: ¡saltá!").
   microjuego 'barrilete': arriba, abajo, izquierda, derecha (los textos van en microjuego.dirs).
   ========================================================= */
(()=>{
const arte = {
  plaza:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="18" cy="18" r="9" fill="#FFE07A"/><rect x="0" y="74" width="100" height="26" fill="#86CC6E"/><path d="M22 76V34M34 76V34" stroke="#E8483B" stroke-width="4"/><path d="M22 44h12M22 54h12M22 64h12" stroke="#E8483B" stroke-width="3"/><path d="M34 34q14 6 20 42h-7q-6-30-13-34z" fill="#FFC93C"/><path d="M62 76l6-46h20l6 46" fill="none" stroke="#2E86DE" stroke-width="4"/><path d="M72 30v30M84 30v30" stroke="#5C6A86" stroke-width="1.6"/><rect x="69" y="59" width="18" height="4" rx="2" fill="#FF6F59"/></svg>`,
  hamaca:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M14 92L26 14h48l12 78" fill="none" stroke="#2E86DE" stroke-width="7" stroke-linejoin="round"/><path d="M40 16v52M60 16v52" stroke="#5C6A86" stroke-width="3"/><rect x="33" y="66" width="34" height="8" rx="3" fill="#FF6F59"/></svg>`,
  subibaja:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 58l-14 30h28z" fill="#2E86DE"/><g transform="rotate(-14 50 58)"><rect x="6" y="52" width="88" height="9" rx="4" fill="#FFC93C"/><rect x="10" y="40" width="5" height="14" fill="#E8483B"/><rect x="85" y="40" width="5" height="14" fill="#E8483B"/><rect x="6" y="38" width="14" height="5" rx="2" fill="#E8483B"/><rect x="80" y="38" width="14" height="5" rx="2" fill="#E8483B"/></g></svg>`,
  pelota:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="52" r="36" fill="#E8483B"/><path d="M16 46q34 14 68 0" fill="none" stroke="#fff" stroke-width="7"/><path d="M50 16q-14 36 0 72" fill="none" stroke="#FFC93C" stroke-width="7"/><ellipse cx="36" cy="34" rx="8" ry="5" fill="#fff" opacity=".4"/></svg>`,
  balde:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M24 40h46l-6 48H30z" fill="#E8483B"/><path d="M24 40h46v7H24z" fill="#C9352B"/><path d="M28 42q19-36 38 0" fill="none" stroke="#C9352B" stroke-width="4"/><path d="M74 20l8 40" stroke="#2E86DE" stroke-width="5" stroke-linecap="round"/><path d="M76 58l14 2-4 20-14-4z" fill="#2E86DE"/></svg>`,
  castillo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M14 90V52h14v8h10v-8h24v8h10v-8h14v38z" fill="#EBC77A"/><path d="M36 52V28h28v24z" fill="#F2D693"/><path d="M36 28v-8h7v8h7v-8h7v8h7v-8" fill="#F2D693"/><path d="M50 4v16" stroke="#8A5636" stroke-width="2.5"/><path d="M51 4l14 5-14 5z" fill="#E8483B"/><path d="M44 90V74a6 6 0 0 1 12 0v16z" fill="#C99A4E"/></svg>`,
  soga:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M20 30C10 90 90 90 80 30" fill="none" stroke="#8B6FE8" stroke-width="5" stroke-linecap="round"/><rect x="13" y="12" width="12" height="22" rx="6" fill="#FFC93C"/><rect x="75" y="12" width="12" height="22" rx="6" fill="#FFC93C"/></svg>`,
  burbujas:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M18 90l22-34" stroke="#2FBF8F" stroke-width="5" stroke-linecap="round"/><circle cx="45" cy="48" r="10" fill="none" stroke="#2FBF8F" stroke-width="4"/><g fill="#CDEBFF" fill-opacity=".55" stroke="#7CC6F0" stroke-width="2.5"><circle cx="66" cy="34" r="14"/><circle cx="82" cy="62" r="9"/><circle cx="48" cy="16" r="8"/></g><circle cx="61" cy="29" r="3" fill="#fff"/></svg>`,
  tobogan:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M16 92V22M30 92V22" stroke="#E8483B" stroke-width="5"/><path d="M16 36h14M16 52h14M16 68h14M16 84h14" stroke="#E8483B" stroke-width="3.5"/><path d="M30 22q30 4 44 70h14Q74 14 30 14z" fill="#FFC93C"/><path d="M30 22q30 4 44 70" fill="none" stroke="#F2A007" stroke-width="3"/></svg>`,
  barrilete:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 6l26 30H50z" fill="#E8483B"/><path d="M50 6L24 36h26z" fill="#FFC93C"/><path d="M50 72L76 36H50z" fill="#2E86DE"/><path d="M50 72L24 36h26z" fill="#2FBF8F"/><path d="M50 72q-8 8 0 14t0 12" fill="none" stroke="#22314F" stroke-width="2"/><path d="M44 80l12 4-12 4zM44 92l12 4" fill="#8B6FE8"/></svg>`,
  pala:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 8v52" stroke="#FFC93C" stroke-width="7" stroke-linecap="round"/><rect x="40" y="6" width="20" height="8" rx="4" fill="#FFC93C"/><path d="M32 58h36l-4 24q-14 12-28 0z" fill="#2E86DE"/></svg>`,
  silbato:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M22 30q-12 0-12 12" fill="none" stroke="#E8483B" stroke-width="4"/><rect x="20" y="40" width="40" height="22" rx="4" fill="#AEB8C8"/><circle cx="62" cy="58" r="20" fill="#C9D2DF"/><circle cx="62" cy="58" r="8" fill="#8A96AA"/><rect x="20" y="40" width="8" height="22" fill="#8A96AA"/><path d="M80 30l8-8M84 40l10-2M76 22l2-10" stroke="#FFC93C" stroke-width="3" stroke-linecap="round"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"plaza", actores});

registrarCapitulo({
  arte,
  id: "plaza",
  num: 6,
  arteTapa: "plaza",
  lugarArte: "plaza",
  orden: ["H", "S", "O", "A", "J", "B", "T"],
  niveles: [
    {num:0, piso:["#D9F2C9","#CBEAB8"], pared:"#8B6FE8", paredOscura:"#6A50C4", mapa:[
      "  ########  ",
      " ##H...S.## ",
      "##.......U##",
      "#r........r#",
      "#...f..f...#",
      "#..........#",
      "#O...bb...r#",
      "##........##",
      " ##..P...## ",
      "  ########  "]},
    {num:1, piso:["#F7EBC8","#EFDFB2"], pared:"#FF9B3D", paredOscura:"#D97A22", mapa:[
      "##########  ",
      "#A...kk..## ",
      "#....kk...##",
      "#r.......U.#",
      "#.....f....#",
      "#J.......r.#",
      "#...D......#",
      "#..........#",
      "############"]},
    {num:2, piso:["#DCEEFF","#CDE4FA"], pared:"#2FBF8F", paredOscura:"#23966F", mapa:[
      " ########## ",
      " #B......T# ",
      " #........# ",
      "##.r....r.##",
      "#..........G",
      "#....ff....#",
      "##.D.....b##",
      " #........# ",
      " ########## "]}
  ],
  estaciones: {
    H: {item:"hamaca", mostrador:"#2E86DE",
      npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#2E86DE", seed:0.4},
      escenas:[
        esc(N("H",.3), C("hamaca",.66,.52,.4,"hamacar")),
        esc(H(.28), N("H",.72,-1), C("hamaca",.5,.55,.3,"quieto")),
        esc(H(.45,{gesto:"arriba"}), C("hamaca",.45,.5,.42,"hamacar")),
        esc(H(.35,{gesto:"saludo"}), N("H",.7,-1), E("corazones",.5,.45))]},
    S: {item:"subibaja", mostrador:"#FFC93C",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#FFC93C", seed:1.3},
      escenas:[
        esc(C("subibaja",.5,.6,.5,"balancear")),
        esc(H(.28), N("S",.72,-1)),
        esc(H(.25,{gesto:"saltar"}), C("subibaja",.5,.62,.4,"balancear"), N("S",.75,-1,"saltar")),
        esc(H(.35,{gesto:"aplaudir"}), N("S",.68,-1), E("estrellas",.5,.4))]},
    O: {item:"pelota", mostrador:"#E8483B",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#E8483B", seed:2.1},
      escenas:[
        esc(N("O",.3), C("pelota",.65,.6,.2,"saltar")),
        esc(H(.28,{gesto:"correr"}), C("pelota",.55,.7,.16,"quieto")),
        esc(H(.25,{gesto:"sorpresa"}), C("pelota",.3,.5,.16,"rodar")),
        esc(H(.35,{gesto:"saltar"}), N("O",.7,-1,"aplaudir"), E("estrellas",.5,.4))]},
    A: {item:"balde", mostrador:"#FF9B3D",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#FF9B3D", seed:0.9},
      escenas:[
        esc(N("A",.3), C("balde",.64,.62,.26,"quieto")),
        esc(H(.28,{gesto:"agacharse"}), C("pala",.55,.66,.18,"latir"), C("balde",.72,.66,.2,"quieto")),
        esc(H(.25), C("castillo",.62,.55,.36,"latir")),
        esc(H(.3,{gesto:"aplaudir"}), N("A",.75,-1,"aplaudir"), C("castillo",.52,.6,.28,"quieto"))]},
    J: {item:"soga", mostrador:"#8B6FE8",
      npc:{kind:"cat", fur:"#9E9E9E", fur2:"#F2F2F2", stripes:"#6E6E6E", hat:"#8B6FE8", seed:1.7},
      escenas:[
        esc(N("J",.3), C("soga",.65,.55,.3,"latir")),
        esc(H(.4,{gesto:"saltar"}), C("soga",.4,.7,.36,"quieto")),
        esc(H(.3,{gesto:"saltar"}), N("J",.7,-1,"saltar")),
        esc(H(.35,{gesto:"arriba"}), N("J",.7,-1), E("estrellas",.5,.4))]},
    B: {item:"burbujas", mostrador:"#7CC6F0",
      npc:{kind:"bunny", fur:"#C9B8A8", fur2:"#F2EAE0", inner:"#FFB3C7", hat:"#7CC6F0", seed:2.6},
      escenas:[
        esc(N("B",.3), C("burbujas",.66,.52,.26,"flotar")),
        esc(H(.3), E("burbujas",.6,.45)),
        esc(H(.28,{gesto:"girar"}), E("burbujas",.5,.4), E("burbujas",.75,.5)),
        esc(H(.35,{gesto:"bailar"}), N("B",.7,-1,"bailar"), E("burbujas",.5,.35))]},
    T: {item:"tobogan", mostrador:"#E8483B",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#E8483B", seed:0.2},
      escenas:[
        esc(N("T",.28), C("tobogan",.64,.55,.5,"quieto")),
        esc(H(.28,{gesto:"arriba"}), C("tobogan",.64,.55,.5,"quieto")),
        esc(H(.6,{gesto:"sorpresa"}), C("tobogan",.4,.55,.5,"quieto"), E("estrellas",.62,.45)),
        esc(H(.35,{gesto:"saltar"}), N("T",.7,-1,"aplaudir"), E("corazones",.5,.4))]}
  },
  charlas: [
    {npc:{kind:"bear", fur:"#C08552", fur2:"#F5E1C8", hat:"#2E86DE", seed:0.4}, arte:"hamaca", est:"H", voz:"papa", color:"#2E86DE"},
    {npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#E8483B", seed:2.1}, arte:"pelota", est:"O", voz:"chico", color:"#E8483B"},
    {npc:{kind:"bunny", fur:"#C9B8A8", fur2:"#F2EAE0", inner:"#FFB3C7", hat:"#7CC6F0", seed:2.6}, arte:"burbujas", est:"B", voz:"nina", color:"#7CC6F0"},
    {npc:{kind:"bunny", fur:"#FFD9A8", fur2:"#FFF7EA", inner:"#FFB3C7", hat:"#2FBF8F", seed:1.4}, arte:"silbato", est:"final", voz:"amable", color:"#2FBF8F"}],
  final: {npc:{kind:"bunny", fur:"#FFD9A8", fur2:"#FFF7EA", inner:"#FFB3C7", hat:"#2FBF8F", seed:1.4}, arte:"silbato", icono:"silbato", anim:"simon",
    ordenes:["saltar", "girar", "aplaudir", "agacharse", "arriba"]},
  microjuego: {id:"barrilete", arte:"barrilete", precio:3, color:"#7CC6F0"},
  palabrasExtra: ["barrilete", "pala", "castillo", "helado"],
  frasesExtra: ["pelota", "tobogan", "soga", "barrilete", "helado"],
  preguntas: [
    {ok:"tobogan", no:["hamaca", "balde"]},
    {ok:"hamaca", no:["subibaja", "soga"]},
    {ok:"pelota", no:["burbujas", "helado"]},
    {ok:"burbujas", no:["pelota", "pala"]},
    {ok:"soga", no:["tobogan", "barrilete"]},
    {ok:"subibaja", no:["hamaca", "castillo"]},
    {ok:"castillo", no:["balde", "subibaja"]},
    {ok:"barrilete", no:["pelota", "soga"]},
    {ok:"helado", no:["pala", "burbujas"]},
    {ok:"balde", no:["helado", "tobogan"]}
  ]
});
})();
