/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — parte común a todos los idiomas
   Enseña la familia y los saludos: mamá, papá, el hermano, la hermana, el bebé,
   el perro, la cama; "¿Cómo estás?", "¡Buenos días!", "¡Buenas noches!", "¡Te quiero!".
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    f flores · r árbol · s sillón · j caja de juguetes (y m mesa, b banco, p planta)
     escenas: fondo 'casa' (living) | 'jardin' | 'noche' (cuarto de noche) | 'cocina'
   final: icono 'telefono' (en la puerta verde y en el pasaporte) y anim 'llamada' = videollamada de la abuela.
   Las caras de la familia se dibujan con cara(): así todas tienen el mismo estilo.
   ========================================================= */
(()=>{
const cara = (k, fur, fur2, o={}) => {
  const orejas = {
    cat: `<path d="M24 40L28 12l20 18zM76 40L72 12 52 30z" fill="${fur}"/><path d="M29 34l2-14 10 9zM71 34l-2-14-10 9z" fill="#FFA3BC"/>`,
    bear: `<circle cx="27" cy="28" r="11" fill="${fur}"/><circle cx="73" cy="28" r="11" fill="${fur}"/><circle cx="27" cy="28" r="5" fill="${fur2}"/><circle cx="73" cy="28" r="5" fill="${fur2}"/>`,
    dog: '',
    bunny: `<ellipse cx="36" cy="16" rx="8" ry="20" fill="${fur}" transform="rotate(-10 36 16)"/><ellipse cx="64" cy="16" rx="8" ry="20" fill="${fur}" transform="rotate(10 64 16)"/><ellipse cx="36" cy="17" rx="4" ry="14" fill="#FFB3C7" transform="rotate(-10 36 17)"/><ellipse cx="64" cy="17" rx="4" ry="14" fill="#FFB3C7" transform="rotate(10 64 17)"/>`
  }[k];
  const perroOrejas = k==='dog' ? `<ellipse cx="22" cy="54" rx="9" ry="18" fill="${o.ear||fur}" transform="rotate(18 22 54)"/><ellipse cx="78" cy="54" rx="9" ry="18" fill="${o.ear||fur}" transform="rotate(-18 78 54)"/>` : '';
  const pelo = o.pelo ? `<circle cx="50" cy="22" r="10" fill="${o.pelo}"/><path d="M24 44c0-18 52-18 52 0" fill="${o.pelo}"/>` : '';
  const manchas = o.manchas ? `<circle cx="38" cy="40" r="6" fill="#3B3B4A"/><circle cx="66" cy="66" r="4" fill="#3B3B4A"/>` : '';
  const ojos = o.anteojos ? `<circle cx="39" cy="54" r="8" fill="#fff" stroke="#22314F" stroke-width="3"/><circle cx="61" cy="54" r="8" fill="#fff" stroke="#22314F" stroke-width="3"/><path d="M47 54h6" stroke="#22314F" stroke-width="3"/><circle cx="39" cy="54" r="3.5" fill="#22314F"/><circle cx="61" cy="54" r="3.5" fill="#22314F"/>`
    : `<circle cx="39" cy="53" r="4.5" fill="#22314F"/><circle cx="61" cy="53" r="4.5" fill="#22314F"/><circle cx="40.5" cy="51.5" r="1.5" fill="#fff"/><circle cx="62.5" cy="51.5" r="1.5" fill="#fff"/>`;
  const boca = o.chupete ? `<circle cx="50" cy="72" r="7" fill="#8FD1F5"/><circle cx="50" cy="72" r="3" fill="#2E86DE"/>`
    : o.lengua ? `<path d="M44 68q6 6 12 0" fill="none" stroke="#22314F" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="50" cy="73" rx="4" ry="5" fill="#FF7FA0"/>`
    : `<path d="M44 69q6 5 12 0" fill="none" stroke="#22314F" stroke-width="2.5" stroke-linecap="round"/>`;
  const bigote = o.bigote ? `<path d="M38 66q6-5 12 0q6-5 12 0q-6 5-12 1q-6 4-12-1z" fill="${o.bigote}"/>` : '';
  const mono = o.mono ? `<path d="M50 26l-14-8v16zM50 26l14-8v16z" fill="${o.mono}"/><circle cx="50" cy="26" r="4" fill="${o.mono}"/>` : '';
  const gorra = o.gorra ? `<path d="M24 36c0-16 52-16 52 0z" fill="${o.gorra}"/><path d="M50 36h32c-2 5-10 7-18 7H50z" fill="${o.gorra}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${pelo}${orejas}${perroOrejas}<circle cx="50" cy="56" r="30" fill="${fur}"/>${manchas}<ellipse cx="50" cy="66" rx="15" ry="11" fill="${fur2}"/>${ojos}<ellipse cx="50" cy="63" rx="4" ry="3" fill="${k==='cat'?'#FF7FA0':'#22314F'}"/>${bigote}${boca}<circle cx="31" cy="64" r="4" fill="#FF7FA0" opacity=".35"/><circle cx="69" cy="64" r="4" fill="#FF7FA0" opacity=".35"/>${mono}${gorra}</svg>`;
};
const arte = {
  casa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M18 46h64v42H18z" fill="#F28F6B"/><path d="M10 50L50 14l40 36z" fill="#C4664F"/><rect x="64" y="20" width="9" height="16" fill="#8A5636"/><rect x="42" y="62" width="16" height="26" rx="3" fill="#8A5636"/><circle cx="54" cy="76" r="1.8" fill="#FFC93C"/><rect x="24" y="56" width="13" height="13" rx="2" fill="#CDEBFF"/><rect x="63" y="56" width="13" height="13" rx="2" fill="#CDEBFF"/><path d="M47 34a5 5 0 0 1 3-3 5 5 0 0 1 3 3c0 3-3 5-3 5s-3-2-3-5z" fill="#FF6F8F"/><rect x="8" y="88" width="84" height="4" rx="2" fill="#22314F" opacity=".2"/></svg>`,
  mama: cara('cat','#E8A87C','#FFF3E6',{mono:'#E8483B'}),
  papa: cara('bear','#8B5E3C','#DDBA94',{anteojos:true}),
  hermano: cara('dog','#C08552','#F5E1C8',{ear:'#7A4B2A', gorra:'#2E86DE'}),
  hermana: cara('bunny','#F2D7E0','#FFFFFF',{mono:'#8B6FE8'}),
  bebe: cara('bear','#F3D9B1','#FFF6EC',{chupete:true}),
  perro: cara('dog','#FFFFFF','#FFFFFF',{ear:'#3B3B4A', manchas:true, lengua:true}),
  abuela: cara('cat','#C9C9D1','#F3F1F7',{anteojos:true, pelo:'#EDEDF3'}),
  abuelo: cara('bear','#B9A48F','#EFE3D3',{anteojos:true, bigote:'#FFFFFF'}),
  familia:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="40" r="16" fill="#E8A87C"/><circle cx="70" cy="40" r="16" fill="#8B5E3C"/><circle cx="50" cy="62" r="13" fill="#C08552"/><circle cx="26" cy="38" r="2.5" fill="#22314F"/><circle cx="34" cy="38" r="2.5" fill="#22314F"/><circle cx="66" cy="38" r="2.5" fill="#22314F"/><circle cx="74" cy="38" r="2.5" fill="#22314F"/><circle cx="46" cy="60" r="2" fill="#22314F"/><circle cx="54" cy="60" r="2" fill="#22314F"/><path d="M50 92C34 82 28 76 28 70a8 8 0 0 1 16-2 8 8 0 0 1 16 0c0 6-6 12-10 24z" fill="#FF6F8F" transform="translate(0 -4) scale(1)"/></svg>`,
  cama:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="10" y="30" width="10" height="56" rx="3" fill="#8A5636"/><rect x="80" y="48" width="10" height="38" rx="3" fill="#8A5636"/><rect x="14" y="56" width="74" height="18" rx="4" fill="#2E86DE"/><rect x="20" y="46" width="22" height="12" rx="6" fill="#fff"/><path d="M40 52h46v18H40z" fill="#8FD1F5"/><circle cx="52" cy="60" r="2" fill="#fff"/><circle cx="66" cy="64" r="2" fill="#fff"/><circle cx="78" cy="58" r="2" fill="#fff"/></svg>`,
  telefono:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="28" y="8" width="44" height="84" rx="9" fill="#22314F"/><rect x="32" y="16" width="36" height="64" rx="4" fill="#8B6FE8"/><circle cx="50" cy="44" r="12" fill="#C9C9D1"/><circle cx="46" cy="42" r="1.8" fill="#22314F"/><circle cx="54" cy="42" r="1.8" fill="#22314F"/><path d="M46 48q4 3 8 0" fill="none" stroke="#22314F" stroke-width="1.6"/><path d="M50 74c-6-4-8-6-8-9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 3-2 5-8 9z" fill="#FF6F8F"/><circle cx="50" cy="86" r="3" fill="#AEB8C8"/></svg>`,
  sofa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="16" y="30" width="68" height="28" rx="10" fill="#8B6FE8"/><rect x="20" y="50" width="60" height="22" rx="8" fill="#A88DF2"/><rect x="8" y="44" width="16" height="32" rx="7" fill="#6A50C4"/><rect x="76" y="44" width="16" height="32" rx="7" fill="#6A50C4"/><rect x="18" y="76" width="6" height="10" fill="#4E3A99"/><rect x="76" y="76" width="6" height="10" fill="#4E3A99"/><rect x="34" y="38" width="14" height="12" rx="4" fill="#FFC93C"/></svg>`,
  diario:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-8 50 50)"><rect x="14" y="18" width="72" height="64" rx="3" fill="#fff" stroke="#AEB8C8" stroke-width="3"/><rect x="22" y="26" width="56" height="9" fill="#22314F"/><rect x="22" y="42" width="24" height="20" fill="#8FD1F5"/><rect x="52" y="42" width="26" height="4" fill="#AEB8C8"/><rect x="52" y="50" width="26" height="4" fill="#AEB8C8"/><rect x="52" y="58" width="20" height="4" fill="#AEB8C8"/><rect x="22" y="68" width="56" height="4" fill="#AEB8C8"/></g></svg>`,
  bloques:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="16" y="62" width="26" height="26" rx="3" fill="#E8483B"/><rect x="44" y="62" width="26" height="26" rx="3" fill="#2E86DE"/><rect x="30" y="36" width="26" height="26" rx="3" fill="#FFC93C"/><rect x="40" y="10" width="26" height="26" rx="3" fill="#2FBF8F"/><text x="29" y="81" font-family="Baloo 2,Arial" font-weight="800" font-size="18" fill="#fff" text-anchor="middle">A</text><text x="57" y="81" font-family="Baloo 2,Arial" font-weight="800" font-size="18" fill="#fff" text-anchor="middle">B</text><text x="43" y="55" font-family="Baloo 2,Arial" font-weight="800" font-size="18" fill="#fff" text-anchor="middle">C</text></svg>`,
  libro:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 26c14-6 28-6 40 4 12-10 26-10 40-4v54c-14-6-28-6-40 4-12-10-26-10-40-4z" fill="#8B6FE8"/><path d="M14 28c12-4 24-4 34 4v48c-10-7-22-7-34-4zM86 28c-12-4-24-4-34 4v48c10-7 22-7 34-4z" fill="#fff"/><path d="M60 46c4-6 14-6 16 0-4 4-8 4-8 10-4-4-6-6-8-10z" fill="#2FBF8F"/><circle cx="72" cy="45" r="1.5" fill="#22314F"/><path d="M22 44h18M22 52h18M22 60h14" stroke="#AEB8C8" stroke-width="3"/></svg>`,
  sol:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke="#FFB13C" stroke-width="6" stroke-linecap="round"><path d="M50 8v12M50 80v12M8 50h12M80 50h12M20 20l9 9M71 71l9 9M80 20l-9 9M29 71l-9 9"/></g><circle cx="50" cy="50" r="22" fill="#FFC93C"/><circle cx="42" cy="47" r="3" fill="#22314F"/><circle cx="58" cy="47" r="3" fill="#22314F"/><path d="M42 57q8 7 16 0" fill="none" stroke="#22314F" stroke-width="3" stroke-linecap="round"/></svg>`,
  nochecita:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#3B3A7A"/><path d="M60 22a28 28 0 1 0 16 40 22 22 0 0 1-16-40z" fill="#FFE07A"/><circle cx="56" cy="48" r="2.5" fill="#22314F"/><path d="M52 60q4 2 7-1" fill="none" stroke="#22314F" stroke-width="2"/><path d="M24 30l2 5 5 1-5 2-2 5-2-5-5-2 5-1z" fill="#fff"/><path d="M30 70l1.5 3.5 3.5.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-.5z" fill="#fff"/></svg>`,
  torta:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="18" y="48" width="64" height="32" rx="6" fill="#F6C6D6"/><rect x="18" y="60" width="64" height="6" fill="#FF8FB8"/><ellipse cx="50" cy="48" rx="32" ry="8" fill="#FFF6FA"/><rect x="34" y="28" width="5" height="18" rx="2" fill="#2E86DE"/><rect x="48" y="24" width="5" height="22" rx="2" fill="#2FBF8F"/><rect x="62" y="28" width="5" height="18" rx="2" fill="#E8483B"/><ellipse cx="36.5" cy="24" rx="3" ry="5" fill="#FFC93C"/><ellipse cx="50.5" cy="20" rx="3" ry="5" fill="#FFC93C"/><ellipse cx="64.5" cy="24" rx="3" ry="5" fill="#FFC93C"/><ellipse cx="50" cy="84" rx="38" ry="6" fill="#E3E8F0"/></svg>`,
  crema:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="72" rx="30" ry="12" fill="#fff" stroke="#E3E8F0" stroke-width="3"/><ellipse cx="50" cy="56" rx="22" ry="10" fill="#fff" stroke="#E3E8F0" stroke-width="3"/><ellipse cx="50" cy="42" rx="13" ry="8" fill="#fff" stroke="#E3E8F0" stroke-width="3"/><path d="M50 34q4-12-4-18" fill="none" stroke="#E3E8F0" stroke-width="5" stroke-linecap="round"/></svg>`,
  frutilla:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M22 40c0-10 56-10 56 0 0 22-16 44-28 50C38 84 22 62 22 40z" fill="#E8483B"/><path d="M30 34l10-14 10 10 10-10 10 14z" fill="#2E9E5E"/><g fill="#FFE0A3"><ellipse cx="40" cy="50" rx="2" ry="3"/><ellipse cx="56" cy="48" rx="2" ry="3"/><ellipse cx="48" cy="62" rx="2" ry="3"/><ellipse cx="62" cy="62" rx="2" ry="3"/><ellipse cx="38" cy="66" rx="2" ry="3"/><ellipse cx="52" cy="76" rx="2" ry="3"/></g></svg>`,
  chocolate:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-12 50 50)"><rect x="18" y="22" width="64" height="56" rx="6" fill="#6B3A1E"/><g fill="#8A5030"><rect x="24" y="28" width="16" height="13" rx="2"/><rect x="42" y="28" width="16" height="13" rx="2"/><rect x="60" y="28" width="16" height="13" rx="2"/><rect x="24" y="44" width="16" height="13" rx="2"/><rect x="42" y="44" width="16" height="13" rx="2"/><rect x="60" y="44" width="16" height="13" rx="2"/><rect x="24" y="60" width="16" height="13" rx="2"/><rect x="42" y="60" width="16" height="13" rx="2"/></g></g></svg>`,
  confites:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke-width="8" stroke-linecap="round"><path d="M22 30l10 4" stroke="#E8483B"/><path d="M50 22l4 10" stroke="#2E86DE"/><path d="M72 32l-8 6" stroke="#FFC93C"/><path d="M30 56l10-4" stroke="#2FBF8F"/><path d="M58 52l8 6" stroke="#8B6FE8"/><path d="M78 62l-4 10" stroke="#FF8FB8"/><path d="M38 76l10 2" stroke="#FF9B3D"/><path d="M60 80l-6-8" stroke="#2E86DE"/></g></svg>`,
  cereza:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M36 64C40 40 50 24 66 14M64 66C62 44 64 28 66 14" fill="none" stroke="#2E9E5E" stroke-width="5" stroke-linecap="round"/><path d="M66 14c8-2 14 2 16 8-8 2-14 0-16-8z" fill="#3CB371"/><circle cx="34" cy="70" r="16" fill="#C9302C"/><circle cx="64" cy="72" r="16" fill="#C9302C"/><ellipse cx="28" cy="64" rx="4" ry="3" fill="#FF8A75"/><ellipse cx="58" cy="66" rx="4" ry="3" fill="#FF8A75"/></svg>`,
  vela:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="40" y="36" width="20" height="54" rx="5" fill="#2E86DE"/><g fill="#fff" opacity=".6"><rect x="40" y="46" width="20" height="6"/><rect x="40" y="62" width="20" height="6"/><rect x="40" y="78" width="20" height="6"/></g><path d="M50 32v-6" stroke="#22314F" stroke-width="3"/><path d="M50 4c8 10 10 16 0 24-10-8-8-14 0-24z" fill="#FFC93C"/><path d="M50 14c4 5 4 8 0 12-4-4-4-7 0-12z" fill="#FFF59A"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, ...o}), N=(de,x,mira)=>({tipo:"npc", de, x, mira}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(fondo,...actores)=>({fondo, actores});
const MAMA={kind:"cat", fur:"#E8A87C", fur2:"#FFF3E6", seed:0.4};
const PAPA={kind:"bear", fur:"#8B5E3C", fur2:"#DDBA94", seed:1.3};

registrarCapitulo({
  arte,
  id: "casa",
  num: 4,
  arteTapa: "casa",
  lugarArte: "casa",
  orden: ["R", "A", "M", "H", "E", "B", "C"],
  niveles: [
    {num:0, piso:["#A8DD8A","#9DD47D"], pared:"#3F9E5A", paredOscura:"#2E7A44", mapa:[
      "###########",
      "#r..f..U.r#",
      "#.........#",
      "#f..j.....#",
      "#R........#",
      "#....b..f.#",
      "##.......##",
      " #r.....r# ",
      " ###.P.### ",
      "   #####   "]},
    {num:1, piso:["#F3E3C8","#EAD5B2"], pared:"#E8846B", paredOscura:"#C4664F", mapa:[
      "############",
      "#.M..m..D.U#",
      "#..........#",
      "#..m.m.....#",
      "#####..#####",
      "#A........H#",
      "#..s.s.....#",
      "#p...j....p#",
      "############"]},
    {num:2, piso:["#E6ECFF","#D9E1FB"], pared:"#8B6FE8", paredOscura:"#6A50C4", mapa:[
      "    ####    ",
      "   ##E.##   ",
      "  ##....##  ",
      " ##......## ",
      "##B.......C#",
      "#....j.....G",
      "#..........#",
      "#p..D....p.#",
      "#..........#",
      "############"]}
  ],
  estaciones: {
    R: {item:"perro", mostrador:"#2FBF8F",
      npc:{kind:"dog", fur:"#FFFFFF", fur2:"#FFFFFF", ear:"#3B3B4A", hat:"#E8483B", seed:2.1},
      escenas:[
        esc("jardin", H(.28), N("R",.72,-1)),
        esc("jardin", H(.3,{gesto:"saludo"}), N("R",.72,-1)),
        esc("jardin", H(.25,{gesto:"sorpresa"}), C("perro",.66,.5,.26,"saltar"), E("estrellas",.66,.4)),
        esc("jardin", H(.4), N("R",.62,-1), E("corazones",.5,.45))]},
    A: {item:"papa", mostrador:"#2E86DE", npc:PAPA,
      escenas:[
        esc("casa", N("A",.35), C("sofa",.68,.72,.3,"quieto"), C("diario",.42,.55,.16,"flotar")),
        esc("casa", H(.28,{gesto:"saludo"}), N("A",.72,-1)),
        esc("casa", H(.22,{gesto:"sorpresa"}), C("diario",.2,.35,.2,"cruzar")),
        esc("casa", H(.32,{gesto:"salto"}), N("A",.68,-1), E("corazones",.5,.45))]},
    M: {item:"mama", mostrador:"#E8483B", npc:MAMA,
      escenas:[
        esc("cocina", N("M",.32), C("olla",.66,.62,.3,"quieto"), E("burbujas",.66,.5)),
        esc("cocina", H(.28,{gesto:"saludo"}), N("M",.72,-1)),
        esc("cocina", N("M",.35), C("sopa",.66,.55,.26,"flotar")),
        esc("cocina", H(.32), N("M",.68,-1), E("corazones",.5,.45))]},
    H: {item:"hermano", mostrador:"#FF9B3D",
      npc:{kind:"dog", fur:"#C08552", fur2:"#F5E1C8", ear:"#7A4B2A", hat:"#2E86DE", seed:0.9},
      escenas:[
        esc("casa", N("H",.3), C("bloques",.66,.62,.3,"quieto")),
        esc("casa", H(.28), N("H",.72,-1)),
        esc("casa", H(.25,{gesto:"sorpresa"}), C("bloques",.6,.6,.32,"saltar"), E("estrellas",.6,.45)),
        esc("casa", H(.3,{gesto:"salto"}), N("H",.66,-1), E("corazones",.48,.45))]},
    E: {item:"hermana", mostrador:"#8B6FE8",
      npc:{kind:"bunny", fur:"#F2D7E0", fur2:"#FFFFFF", inner:"#FF9EBB", hat:"#8B6FE8", seed:1.7},
      escenas:[
        esc("casa", N("E",.3), C("libro",.66,.55,.28,"flotar")),
        esc("casa", H(.28), N("E",.72,-1), C("libro",.5,.5,.16,"quieto")),
        esc("casa", C("libro",.5,.5,.36,"latir"), E("estrellas",.5,.42)),
        esc("casa", H(.4), N("E",.6,-1), E("corazones",.5,.42))]},
    B: {item:"bebe", mostrador:"#8FD1F5",
      npc:{kind:"bear", fur:"#F3D9B1", fur2:"#FFF6EC", hat:"#8FD1F5", seed:2.6},
      escenas:[
        esc("casa", N("B",.66), E("estrellas",.66,.4)),
        esc("casa", H(.3), N("B",.7,-1), E("corazones",.5,.45)),
        esc("casa", N("B",.55), E("zzz",.62,.35)),
        esc("noche", N("B",.5), E("zzz",.58,.32))]},
    C: {item:"cama", mostrador:"#2E86DE", npc:PAPA,
      escenas:[
        esc("noche", H(.4)),
        esc("noche", H(.35,{gesto:"salto"}), C("cama",.65,.7,.34,"quieto")),
        esc("noche", H(.3), N("C",.68,-1), E("corazones",.5,.42)),
        esc("noche", C("cama",.5,.7,.4,"quieto"), E("zzz",.55,.4))]}
  },
  final: {npc:{kind:"cat", fur:"#C9C9D1", fur2:"#F3F1F7", seed:1.5}, arte:"abuela", icono:"telefono", anim:"llamada"},
  microjuego: {id:"torta", arte:"torta", precio:3, color:"#FF8FB8", ingredientes:["crema", "frutilla", "chocolate", "confites", "cereza", "vela"]},
  palabrasExtra: ["abuela", "abuelo", "familia", "sofa", "telefono"],
  frasesExtra: ["sol", "globo", "corazon", "corazon", "nochecita"],
  preguntas: [
    {ok:"mama", no:["papa", "bebe"]},
    {ok:"papa", no:["hermana", "perro"]},
    {ok:"perro", no:["hermano", "bebe"]},
    {ok:"cama", no:["sofa", "telefono"]},
    {ok:"bebe", no:["abuela", "papa"]},
    {ok:"telefono", no:["libro", "cama"]},
    {ok:"hermana", no:["mama", "hermano"]},
    {ok:"hermano", no:["perro", "abuelo"]},
    {ok:"abuela", no:["mama", "hermana"]},
    {ok:"sofa", no:["cama", "bloques"]}
  ]
});
})();
