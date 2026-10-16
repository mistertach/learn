/* =========================================================
   CAPÍTULO 3 · LA TORRE DEL RELOJ — parte común a todos los idiomas
   Enseña la hora: los números del 1 al 12, la aguja chica y la grande,
   en punto, y cuarto, y media y menos cuarto.
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    e engranaje que gira
     escenas: fondo 'relojes' (pared con relojes)
     estación: contar:true → antes de la palabra, se cuentan los números de la esfera
               (el texto `contar` y los `numeros` van en cada idioma)
               buscar (en cada idioma) → la pregunta del paso "buscá" ("¿Qué reloj dice…?")
   final: anim 'campanas' = las agujas giran hasta las doce y suenan las campanas.
   Los relojes se dibujan con relojSVG(hora, minutos): así cada hora queda exacta.
   ========================================================= */
(()=>{
const relojSVG = (h, m, o={}) => {
  const ha=((h%12)+m/60)*30, ma=m*6, col=o.borde||'#8B6FE8';
  const ticks=Array.from({length:12},(_,i)=>`<path d="M50 ${i%3?17:15}V${i%3?20:22}" stroke="#22314F" stroke-width="${i%3?2:3}" stroke-linecap="round" transform="rotate(${i*30} 50 52)"/>`).join('');
  const nums=o.numeros===false?'':`<g font-family="Baloo 2,Arial,sans-serif" font-weight="800" font-size="11" fill="#22314F" text-anchor="middle"><text x="50" y="33">12</text><text x="72" y="56">3</text><text x="50" y="79">6</text><text x="28" y="56">9</text></g>`;
  const bells=o.campanitas?`<path d="M18 22a12 12 0 0 1 16-10z" fill="${col}"/><path d="M82 22a12 12 0 0 0-16-10z" fill="${col}"/><path d="M30 90l-6 6M70 90l6 6" stroke="#22314F" stroke-width="4" stroke-linecap="round"/>`:'';
  const chica=o.chica===false?'':`<path d="M50 54V34" stroke="${o.chicaCol||'#22314F'}" stroke-width="${o.chicaCol?7:6}" stroke-linecap="round" transform="rotate(${ha} 50 52)"/>`;
  const grande=o.grande===false?'':`<path d="M50 56V20" stroke="${o.grandeCol||'#22314F'}" stroke-width="${o.grandeCol?5:3.5}" stroke-linecap="round" transform="rotate(${ma} 50 52)"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${bells}<circle cx="50" cy="52" r="44" fill="${col}"/><circle cx="50" cy="52" r="38" fill="#FFFDF8"/>${ticks}${nums}${chica}${grande}<circle cx="50" cy="52" r="4" fill="#E8483B"/></svg>`;
};
const COLS=['#E8483B','#FF9B3D','#F2B632','#2FBF8F','#2E86DE','#8B6FE8'];
const numSVG = n => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="${COLS[n%6]}"/><circle cx="50" cy="50" r="36" fill="#fff" opacity=".2"/><text x="50" y="${n>9?66:68}" font-family="Baloo 2,Arial,sans-serif" font-weight="800" font-size="${n>9?44:52}" fill="#fff" text-anchor="middle">${n}</text></svg>`;
const arte = {
  torre:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 34h40v56H30z" fill="#C98B4E"/><path d="M30 34h6v56h-6z" fill="#B5753A"/><path d="M24 36L50 6l26 30z" fill="#8B6FE8"/><circle cx="50" cy="50" r="13" fill="#FFC93C"/><circle cx="50" cy="50" r="10" fill="#FFFDF8"/><path d="M50 50V43M50 50h5" stroke="#22314F" stroke-width="2.5" stroke-linecap="round"/><path d="M42 90V76a8 8 0 0 1 16 0v14z" fill="#8A5636"/><rect x="18" y="88" width="64" height="4" rx="2" fill="#22314F" opacity=".2"/></svg>`,
  reloj: relojSVG(10,10,{campanitas:true, borde:'#E8483B'}),
  chica: relojSVG(3,0,{chicaCol:'#E8483B'}),
  grande: relojSVG(10,30,{grandeCol:'#E8483B'}),
  r100: relojSVG(1,0), r200: relojSVG(2,0), r300: relojSVG(3,0), r415: relojSVG(4,15), r530: relojSVG(5,30), r645: relojSVG(6,45), r1200: relojSVG(12,0,{borde:'#FFC93C'}),
  m00: relojSVG(12,0,{chica:false, numeros:false}), m15: relojSVG(12,15,{chica:false, numeros:false}), m30: relojSVG(12,30,{chica:false, numeros:false}), m45: relojSVG(12,45,{chica:false, numeros:false}),
  luna:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#22314F"/><path d="M62 24a28 28 0 1 0 14 40 22 22 0 0 1-14-40z" fill="#FFE07A"/><path d="M28 30l2 5 5 1-5 2-2 5-2-5-5-2 5-1z" fill="#fff"/></svg>`
};
for(let n=1;n<=12;n++) arte['n'+n]=numSVG(n);

const H=(x,o={})=>({tipo:"heroe", x, ...o}), N=(de,x,mira)=>({tipo:"npc", de, x, mira}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"relojes", actores});

registrarCapitulo({
  arte,
  id: "reloj",
  num: 3,
  arteTapa: "torre",
  lugarArte: "torre",
  orden: ["R", "A", "N", "H", "C", "M", "Q"],
  niveles: [
    {num:0, piso:["#EFE7FF","#E3D8FB"], pared:"#8B6FE8", paredOscura:"#6A50C4", mapa: [
        "###########",
        "#.R...L.U.#",
        "#.........#",
        "#..e...e..#",
        "#A........#",
        "#....b....#",
        "##.......##",
        " #...P...# ",
        " ##p...p## ",
        "  #######  "
      ]},
    {num:1, piso:["#F3E6D2","#E9D6BB"], pared:"#B5753A", paredOscura:"#8A5636", mapa: [
        "  #######  ",
        "  #N.H.L#  ",
        "###.....###",
        "#e........#",
        "#C.......U#",
        "#...e.e...#",
        "###.....###",
        "  #..D..#  ",
        "  #p...p#  ",
        "  #######  "
      ]},
    {num:2, piso:["#E3F1FB","#D3E7F6"], pared:"#2E86DE", paredOscura:"#1F66B3", mapa: [
        "  #######  ",
        "  #M.Q.L#  ",
        "  #.....#  ",
        "###.....###",
        "#.........G",
        "#..b...b..#",
        "###.....###",
        "  #..D..#  ",
        "  #p...p#  ",
        "  #######  "
      ]}
  ],
  estaciones: {
    R: {item:"reloj", mostrador:"#8A5636", contar:true,
      npc:{kind:"bear", fur:"#9C6B45", fur2:"#E8C9A4", hat:"#22314F", seed:0.6},
      escenas:[
        esc(H(.28), C("reloj",.5,.62,.24,"quieto"), N("R",.76,-1)),
        esc(N("R",.32), C("reloj",.66,.55,.3,"quieto"), E("zzz",.72,.4)),
        esc(H(.3,{gesto:"salto"}), C("reloj",.66,.52,.32,"latir"), E("estrellas",.66,.45)),
        esc(H(.35,{gesto:"saludo"}), C("reloj",.66,.52,.3,"flotar"), E("corazones",.5,.45))]},
    A: {item:"chica", mostrador:"#E8483B",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#E8483B", seed:1.4},
      escenas:[
        esc(N("A",.3), C("chica",.66,.52,.32,"latir")),
        esc(H(.28), C("r100",.55,.4,.18,"flotar"), C("r200",.72,.55,.18,"flotar"), C("r300",.88,.4,.18,"flotar")),
        esc(H(.25,{gesto:"sorpresa"}), C("chica",.62,.55,.3,"saltar")),
        esc(H(.4,{gesto:"saludo"}), C("chica",.66,.55,.24,"quieto"), E("corazones",.55,.45))]},
    N: {item:"grande", mostrador:"#2E86DE",
      npc:{kind:"cat", fur:"#9AA3B5", fur2:"#FFFFFF", hat:"#2E86DE", seed:2.2},
      escenas:[
        esc(N("N",.3), C("grande",.66,.52,.32,"latir")),
        esc(H(.25), C("grande",.1,.45,.22,"cruzar")),
        esc(H(.35,{gesto:"salto"}), C("grande",.66,.5,.28,"flotar"), E("estrellas",.66,.45)),
        esc(H(.3,{gesto:"saludo"}), C("m00",.66,.5,.3,"latir"), E("estrellas",.66,.42))]},
    H: {item:"r300", mostrador:"#2FBF8F",
      npc:{kind:"dog", fur:"#C08552", fur2:"#F5E1C8", ear:"#7A4B2A", hat:"#2FBF8F", seed:0.3},
      escenas:[
        esc(C("m00",.4,.5,.34,"latir"), N("H",.75,-1)),
        esc(H(.28), C("r300",.66,.5,.3,"flotar")),
        esc(N("H",.35), C("r300",.7,.45,.22,"quieto"), E("corazones",.35,.45)),
        esc(H(.35,{gesto:"saludo"}), C("r300",.66,.5,.26,"latir"), E("estrellas",.66,.45))]},
    C: {item:"r415", mostrador:"#FF9B3D",
      npc:{kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", hat:"#FF9B3D", seed:1.9},
      escenas:[
        esc(C("m15",.4,.5,.34,"latir"), N("C",.75,-1)),
        esc(H(.28), C("r415",.66,.5,.3,"flotar")),
        esc(H(.4,{gesto:"salto"}), E("estrellas",.4,.4)),
        esc(N("C",.35), C("r415",.68,.5,.26,"latir"))]},
    M: {item:"r530", mostrador:"#FF8FB8",
      npc:{kind:"bunny", fur:"#E6E0F5", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#FF8FB8", seed:0.8},
      escenas:[
        esc(C("m30",.4,.5,.34,"latir"), N("M",.75,-1)),
        esc(N("M",.32), C("r530",.68,.5,.26,"quieto"), E("burbujas",.32,.6)),
        esc(H(.35,{gesto:"sorpresa"}), E("burbujas",.35,.6), E("burbujas",.7,.6)),
        esc(H(.35,{gesto:"saludo"}), C("r530",.66,.5,.26,"latir"), E("burbujas",.6,.6))]},
    Q: {item:"r645", mostrador:"#22314F",
      npc:{kind:"cat", fur:"#3B3B4A", fur2:"#EDEBF2", eye:"#F5D547", hat:"#FFC93C", seed:2.6},
      escenas:[
        esc(C("m45",.4,.5,.34,"latir"), N("Q",.75,-1)),
        esc(H(.28), C("r645",.66,.5,.3,"flotar")),
        esc(N("Q",.35), C("r645",.7,.45,.22,"quieto"), E("zzz",.4,.35)),
        esc(H(.35,{gesto:"salto"}), C("r645",.66,.5,.26,"latir"), E("estrellas",.66,.45))]}
  },
  charlas: [
    {npc:{kind:"bear", fur:"#9C6B45", fur2:"#E8C9A4", hat:"#22314F", seed:0.6}, arte:"reloj", est:"R", voz:"sabio", color:"#8A5636"},
    {npc:{kind:"dog", fur:"#C08552", fur2:"#F5E1C8", ear:"#7A4B2A", hat:"#2FBF8F", seed:0.3}, arte:"r300", est:"H", voz:"chico", color:"#2FBF8F"},
    {npc:{kind:"cat", fur:"#3B3B4A", fur2:"#EDEBF2", eye:"#F5D547", hat:"#FFC93C", seed:2.6}, arte:"r645", est:"Q", voz:"amable", color:"#22314F"},
    {npc:{kind:"bear", fur:"#8B5E3C", fur2:"#DDBA94", hat:"#FFC93C", seed:1.1}, arte:"r1200", est:"final", voz:"papa", color:"#FFC93C"}],
  final: {npc:{kind:"bear", fur:"#8B5E3C", fur2:"#DDBA94", hat:"#FFC93C", seed:1.1}, arte:"r1200", anim:"campanas"},
  microjuego: {id:"hora", arte:"reloj", precio:3, color:"#8B6FE8"},
  palabrasExtra: ["n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12"],
  frasesExtra: ["reloj", "r100", "r200", "luna"],
  preguntas: [
    {ok:"r300", no:["r530", "r645"]},
    {ok:"r530", no:["r415", "r300"]},
    {ok:"r415", no:["r645", "r530"]},
    {ok:"r645", no:["r300", "r415"]},
    {ok:"chica", no:["grande", "reloj"]},
    {ok:"grande", no:["chica", "r300"]},
    {ok:"n3", no:["n8", "n5"]},
    {ok:"n7", no:["n1", "n11"]},
    {ok:"n12", no:["n2", "n10"]},
    {ok:"n9", no:["n6", "n4"]}
  ]
});
})();
