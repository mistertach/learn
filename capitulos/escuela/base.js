/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — parte común a todos los idiomas
   Enseña las cosas del aula (la mochila, el lápiz, el libro, la tijera, los crayones),
   las formas (círculo, cuadrado, triángulo, estrella), los días de la semana
   y a pedir permiso: "¿Puedo…?".
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    q pupitre (y p planta, b banco)
     escenas: fondo 'escuela' (el aula con el pizarrón)
   final: icono 'pizarron' y anim 'semana' = cantamos los días de la semana y se escriben
   en el pizarrón; cada idioma trae los días en final.dias.
   microjuego 'tren': el tren de las formas. Cada idioma trae, para cada forma,
   el nombre (texto) y el pedido (pon), y microjuego.chu (cuando sale el tren).
   ========================================================= */
(()=>{
const L="#22314F";
const arte = {
  escuela:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="14" y="36" width="72" height="54" fill="#FFC93C"/><path d="M8 40L50 14l42 26z" fill="#E8483B"/><rect x="42" y="64" width="16" height="26" rx="2" fill="#8A5636"/><rect x="22" y="48" width="14" height="12" rx="2" fill="#CDEBFF"/><rect x="64" y="48" width="14" height="12" rx="2" fill="#CDEBFF"/><circle cx="50" cy="30" r="6" fill="#fff" stroke="${L}" stroke-width="2"/><path d="M50 4v10" stroke="#8A5636" stroke-width="2"/><path d="M50 4h12l-3 3 3 3H50z" fill="#2E86DE"/></svg>`,
  lapiz:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-40 50 50)"><rect x="40" y="10" width="20" height="60" fill="#FFC93C"/><rect x="40" y="10" width="20" height="10" fill="#FF8FB8"/><rect x="40" y="18" width="20" height="5" fill="#AEB8C8"/><path d="M40 70h20L50 92z" fill="#F2DCB0"/><path d="M46 84h8l-4 8z" fill="${L}"/><rect x="46" y="23" width="3" height="47" fill="#F2A007"/></g></svg>`,
  tijera:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 50L84 12" stroke="#AEB8C8" stroke-width="7" stroke-linecap="round"/><path d="M50 50L88 34" stroke="#C9D2DF" stroke-width="7" stroke-linecap="round"/><circle cx="50" cy="50" r="4" fill="${L}"/><circle cx="30" cy="68" r="13" fill="none" stroke="#E8483B" stroke-width="7"/><circle cx="56" cy="78" r="13" fill="none" stroke="#E8483B" stroke-width="7"/><path d="M40 60l8-8M52 66l2-12" stroke="#E8483B" stroke-width="6"/></svg>`,
  crayones:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-8 50 50)"><path d="M22 30l6-14 6 14z" fill="#E8483B"/><rect x="22" y="30" width="12" height="52" rx="2" fill="#E8483B"/><path d="M40 24l6-14 6 14z" fill="#2E86DE"/><rect x="40" y="24" width="12" height="58" rx="2" fill="#2E86DE"/><path d="M58 30l6-14 6 14z" fill="#2FBF8F"/><rect x="58" y="30" width="12" height="52" rx="2" fill="#2FBF8F"/><path d="M76 34l6-14 6 14z" fill="#FFC93C"/><rect x="76" y="34" width="12" height="48" rx="2" fill="#FFC93C"/><g fill="#fff" opacity=".5"><rect x="22" y="44" width="12" height="4"/><rect x="40" y="40" width="12" height="4"/><rect x="58" y="44" width="12" height="4"/><rect x="76" y="48" width="12" height="4"/></g></g></svg>`,
  calendario:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="12" y="18" width="76" height="72" rx="8" fill="#fff" stroke="#AEB8C8" stroke-width="3"/><path d="M12 26a8 8 0 0 1 8-8h60a8 8 0 0 1 8 8v12H12z" fill="#E8483B"/><rect x="28" y="10" width="6" height="16" rx="3" fill="${L}"/><rect x="66" y="10" width="6" height="16" rx="3" fill="${L}"/><g fill="#CDEBFF"><rect x="20" y="46" width="12" height="10" rx="2"/><rect x="36" y="46" width="12" height="10" rx="2"/><rect x="52" y="46" width="12" height="10" rx="2"/><rect x="68" y="46" width="12" height="10" rx="2"/><rect x="20" y="62" width="12" height="10" rx="2"/><rect x="52" y="62" width="12" height="10" rx="2"/><rect x="68" y="62" width="12" height="10" rx="2"/><rect x="20" y="76" width="12" height="8" rx="2"/><rect x="36" y="76" width="12" height="8" rx="2"/></g><rect x="36" y="62" width="12" height="10" rx="2" fill="#FFC93C"/></svg>`,
  campana:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 12c-16 0-24 14-24 30v18l-8 12h64l-8-12V42c0-16-8-30-24-30z" fill="#FFC93C"/><path d="M34 40c0-10 6-18 14-20" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".6"/><rect x="16" y="70" width="68" height="8" rx="4" fill="#F2A007"/><circle cx="50" cy="84" r="8" fill="#F2A007"/><circle cx="50" cy="10" r="5" fill="#F2A007"/><path d="M10 40q-6 10 0 20M90 40q6 10 0 20" fill="none" stroke="#FFC93C" stroke-width="4" stroke-linecap="round"/></svg>`,
  circulo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="38" fill="#E8483B"/><ellipse cx="36" cy="34" rx="9" ry="6" fill="#fff" opacity=".35"/></svg>`,
  cuadrado:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="14" y="14" width="72" height="72" rx="6" fill="#2E86DE"/><rect x="22" y="22" width="18" height="10" rx="4" fill="#fff" opacity=".35"/></svg>`,
  triangulo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 10L92 86H8z" fill="#2FBF8F" stroke="#2FBF8F" stroke-width="6" stroke-linejoin="round"/><path d="M50 26l-10 18" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".35"/></svg>`,
  estrella:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 6l12 28 30 3-23 20 7 30-26-16-26 16 7-30L8 37l30-3z" fill="#FFC93C" stroke="#F2A007" stroke-width="3" stroke-linejoin="round"/></svg>`,
  pizarron:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="6" y="14" width="88" height="62" rx="5" fill="#B5753A"/><rect x="12" y="20" width="76" height="50" rx="3" fill="#2E5E4E"/><path d="M22 34h20M22 44h30M22 54h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="70" cy="44" r="10" fill="none" stroke="#FFC93C" stroke-width="3"/><path d="M30 76l-6 16M70 76l6 16" stroke="#8A5636" stroke-width="4" stroke-linecap="round"/></svg>`,
  goma:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-20 50 50)"><rect x="14" y="34" width="72" height="32" rx="6" fill="#FF8FB8"/><rect x="50" y="34" width="36" height="32" rx="6" fill="#2E86DE"/><rect x="50" y="34" width="8" height="32" fill="#2E86DE"/></g></svg>`,
  mano:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M34 92V50l-6-24c-2-6 6-8 8-2l6 20V16c0-6 8-6 8 0v26-32c0-6 8-6 8 0v32-26c0-6 8-6 8 0v30-18c0-6 8-6 8 0v34c0 18-8 30-14 30z" fill="#F5D7B5" stroke="#D9AE85" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 30l8 4M10 46h8M14 16l7 7" stroke="#FFC93C" stroke-width="3" stroke-linecap="round"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"escuela", actores});

registrarCapitulo({
  arte,
  id: "escuela",
  num: 9,
  arteTapa: "escuela",
  lugarArte: "escuela",
  orden: ["M", "Z", "B", "T", "C", "K", "N"],
  niveles: [
    {num:0, piso:["#FFF6E0","#F7EBCD"], pared:"#FFC93C", paredOscura:"#D9A21E", mapa:[
      "############",
      "#M...Z...U.#",
      "#..........#",
      "#b.......p.#",
      "#..........#",
      "#B.........#",
      "#p..P....b.#",
      "############"]},
    {num:1, piso:["#F1F7EA","#E4EFD8"], pared:"#2FBF8F", paredOscura:"#23966F", mapa:[
      "  ########  ",
      " ##T....C## ",
      "##........##",
      "#..q.q.q...#",
      "#..........#",
      "#..q.q.q...#",
      "#p........p#",
      "##.D....U.##",
      " ##......## ",
      "  ########  "]},
    {num:2, piso:["#EEF2FB","#E1E7F7"], pared:"#2E86DE", paredOscura:"#1F66B3", mapa:[
      "##########  ",
      "#K......N#  ",
      "#........###",
      "#..q.q.....#",
      "#..........G",
      "#p.....b...#",
      "#.D........#",
      "#..........#",
      "############"]}
  ],
  estaciones: {
    M: {item:"mochila", mostrador:"#E8483B",
      npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", hat:"#8B6FE8", seed:0.5},
      escenas:[
        esc(N("M",.3), C("mochila",.66,.55,.26,"latir")),
        esc(H(.3,{gesto:"saludo"}), N("M",.72,-1,"saludo")),
        esc(H(.3,{gesto:"agacharse"}), C("libro",.55,.6,.14,"saltar"), C("lapiz",.7,.6,.12,"saltar")),
        esc(H(.3,{gesto:"saltar"}), N("M",.72,-1,"aplaudir"), E("estrellas",.5,.4))]},
    Z: {item:"lapiz", mostrador:"#FFC93C",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#2FBF8F", seed:1.2},
      escenas:[
        esc(N("Z",.3), C("lapiz",.66,.5,.24,"latir")),
        esc(H(.28,{gesto:"triste"}), N("Z",.72,-1)),
        esc(H(.28), N("Z",.72,-1,"saludo"), C("lapiz",.5,.5,.14,"flotar")),
        esc(H(.3,{gesto:"aplaudir"}), C("estrella",.62,.42,.16,"latir"), E("corazones",.5,.4))]},
    B: {item:"libro", mostrador:"#2E86DE",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#2E86DE", seed:2.0},
      escenas:[
        esc(N("B",.3), C("libro",.66,.5,.26,"flotar")),
        esc(H(.28), N("B",.72,-1), C("libro",.5,.5,.14,"latir")),
        esc(H(.28,{gesto:"sorpresa"}), N("B",.72,-1,"sorpresa"), E("estrellas",.5,.35)),
        esc(H(.3,{gesto:"arriba"}), N("B",.72,-1,"aplaudir"), E("corazones",.5,.4))]},
    T: {item:"tijera", mostrador:"#E8483B",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#E8483B", seed:0.9},
      escenas:[
        esc(N("T",.3), C("tijera",.66,.5,.24,"latir")),
        esc(H(.28), C("tijera",.5,.5,.14,"latir"), C("circulo",.68,.5,.2,"quieto")),
        esc(H(.28,{gesto:"sorpresa"}), C("circulo",.55,.5,.14,"saltar"), C("circulo",.72,.5,.14,"saltar")),
        esc(H(.3,{gesto:"saludo"}), N("T",.72,-1,"aplaudir"), C("circulo",.5,.35,.12,"flotar"))]},
    C: {item:"crayones", mostrador:"#8B6FE8",
      npc:{kind:"cat", fur:"#9E9E9E", fur2:"#F2F2F2", stripes:"#6E6E6E", hat:"#FFC93C", seed:1.7},
      escenas:[
        esc(N("C",.3), C("crayones",.66,.5,.26,"latir")),
        esc(H(.28), C("triangulo",.62,.5,.24,"quieto")),
        esc(H(.28,{gesto:"sorpresa"}), C("triangulo",.5,.5,.14,"flotar"), C("cuadrado",.66,.5,.14,"flotar"), C("estrella",.82,.5,.14,"flotar")),
        esc(H(.3,{gesto:"bailar"}), N("C",.72,-1,"bailar"), E("estrellas",.5,.4))]},
    K: {item:"calendario", mostrador:"#FF8FB8",
      npc:{kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", hat:"#FF8FB8", seed:2.4},
      escenas:[
        esc(N("K",.3), C("calendario",.66,.5,.28,"latir")),
        esc(H(.28), C("calendario",.6,.48,.3,"quieto")),
        esc(H(.28,{gesto:"aplaudir"}), N("K",.72,-1,"aplaudir"), C("sol",.5,.3,.14,"flotar")),
        esc(H(.3,{gesto:"saltar"}), N("K",.72,-1), E("estrellas",.5,.4))]},
    N: {item:"campana", mostrador:"#FF9B3D",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#FF9B3D", seed:0.3},
      escenas:[
        esc(N("N",.3), C("campana",.66,.45,.24,"saltar")),
        esc(H(.28,{gesto:"saludo"}), N("N",.72,-1)),
        esc(H(.28,{gesto:"correr"}), C("pelota",.65,.6,.14,"rodar")),
        esc(H(.3,{gesto:"saltar"}), N("N",.72,-1,"saltar"), E("estrellas",.5,.4))]}
  },
  final: {npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", hat:"#8B6FE8", seed:0.5}, arte:"pizarron", icono:"pizarron", anim:"semana"},
  microjuego: {id:"tren", arte:"triangulo", precio:3, color:"#FFC93C", ingredientes:["circulo", "cuadrado", "triangulo", "estrella", "corazon"]},
  palabrasExtra: ["circulo", "cuadrado", "triangulo", "estrella", "pizarron"],
  frasesExtra: ["mano", "bano", "vaso", "goma", "mochila"],
  preguntas: [
    {ok:"lapiz", no:["tijera", "libro"]},
    {ok:"tijera", no:["lapiz", "goma"]},
    {ok:"libro", no:["mochila", "calendario"]},
    {ok:"mochila", no:["libro", "campana"]},
    {ok:"crayones", no:["lapiz", "tijera"]},
    {ok:"calendario", no:["pizarron", "libro"]},
    {ok:"campana", no:["calendario", "mochila"]},
    {ok:"circulo", no:["cuadrado", "triangulo"]},
    {ok:"triangulo", no:["circulo", "estrella"]},
    {ok:"cuadrado", no:["triangulo", "circulo"]}
  ]
});
})();
