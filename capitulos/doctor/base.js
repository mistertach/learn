/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — parte común a todos los idiomas
   El chico es el doctor. Enseña las partes del cuerpo (la cabeza, la panza,
   la nariz, la boca, la rodilla…), "¿Te duele…?", "¡Salud!", y cómo nos sentimos
   (triste, miedo, alegría).
   Los textos de cada idioma están en es.js, fr.js, it.js, en.js de esta carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js
   (y la del uniforme en capitulos/restaurante/base.js). Además:
     mapa:    x camilla (y b banco, p planta)
     escenas: fondo 'consultorio' · gesto 'triste' (héroe o npc) = cara triste con una lagrimita
   uniforme: la bata y el estetoscopio, desde la estación E.
   final: icono 'osito' y anim 'abrazo' = el osito está triste; el doctor le pone una curita y lo abraza.
   microjuego 'cuerpo': ¿dónde está la nariz? Las partes van en `ingredientes`; cada idioma
   trae el nombre (texto) y la pregunta (p).
   ========================================================= */
(()=>{
const piel="#F5D7B5", linea="#22314F";
const arte = {
  consultorio:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="14" y="30" width="72" height="56" rx="6" fill="#fff" stroke="#7CC6F0" stroke-width="4"/><path d="M8 34L50 8l42 26" fill="none" stroke="#7CC6F0" stroke-width="6" stroke-linejoin="round"/><rect x="42" y="40" width="16" height="36" rx="3" fill="#E8483B"/><rect x="32" y="50" width="36" height="16" rx="3" fill="#E8483B"/></svg>`,
  estetoscopio:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M28 12v26a20 20 0 0 0 40 0V12" fill="none" stroke="#5C6A86" stroke-width="6" stroke-linecap="round"/><circle cx="28" cy="12" r="5" fill="#22314F"/><circle cx="68" cy="12" r="5" fill="#22314F"/><path d="M48 58v12a14 14 0 0 0 28 0v-6" fill="none" stroke="#5C6A86" stroke-width="6" stroke-linecap="round"/><circle cx="76" cy="60" r="12" fill="#AEB8C8"/><circle cx="76" cy="60" r="6" fill="#E3E8F0"/></svg>`,
  termometro:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(35 50 50)"><rect x="42" y="8" width="16" height="66" rx="8" fill="#fff" stroke="#AEB8C8" stroke-width="3"/><rect x="47" y="34" width="6" height="42" fill="#E8483B"/><circle cx="50" cy="80" r="12" fill="#E8483B"/><path d="M58 20h6M58 30h6M58 40h6M58 50h6" stroke="#AEB8C8" stroke-width="2.5"/></g></svg>`,
  curita:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-30 50 50)"><rect x="8" y="36" width="84" height="28" rx="14" fill="#F2C29B"/><rect x="36" y="36" width="28" height="28" fill="#FFE3C8"/><g fill="#E0A77A"><circle cx="20" cy="46" r="2"/><circle cx="20" cy="55" r="2"/><circle cx="80" cy="46" r="2"/><circle cx="80" cy="55" r="2"/><circle cx="28" cy="50" r="2"/><circle cx="72" cy="50" r="2"/></g></g></svg>`,
  jarabe:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="38" y="8" width="24" height="12" rx="3" fill="#E8483B"/><path d="M34 22h32v8l6 8v46a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6V38l6-8z" fill="#8B6FE8"/><rect x="32" y="48" width="36" height="22" rx="3" fill="#fff"/><path d="M44 59h12M50 53v12" stroke="#E8483B" stroke-width="4"/><path d="M78 70q10 0 10 10H70q0-10 8-10z" fill="#AEB8C8"/></svg>`,
  osito:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="28" cy="22" r="11" fill="#C9955E"/><circle cx="72" cy="22" r="11" fill="#C9955E"/><circle cx="28" cy="22" r="5" fill="#F1D5B0"/><circle cx="72" cy="22" r="5" fill="#F1D5B0"/><ellipse cx="50" cy="76" rx="26" ry="20" fill="#C9955E"/><ellipse cx="50" cy="78" rx="14" ry="12" fill="#F1D5B0"/><circle cx="50" cy="42" r="26" fill="#C9955E"/><ellipse cx="50" cy="52" rx="12" ry="9" fill="#F1D5B0"/><circle cx="41" cy="40" r="3.5" fill="${linea}"/><circle cx="59" cy="40" r="3.5" fill="${linea}"/><ellipse cx="50" cy="48" rx="4.5" ry="3.2" fill="${linea}"/><path d="M45 55q5 4 10 0" fill="none" stroke="${linea}" stroke-width="2.5" stroke-linecap="round"/><g transform="rotate(-25 66 24)"><rect x="54" y="20" width="24" height="9" rx="4.5" fill="#F2C29B"/><rect x="62" y="20" width="8" height="9" fill="#FFE3C8"/></g></svg>`,
  cabeza:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="52" r="36" fill="${piel}"/><path d="M16 46c0-26 68-26 68 0-8-10-20-16-34-16S24 36 16 46z" fill="#8A5636"/><circle cx="38" cy="54" r="4" fill="${linea}"/><circle cx="62" cy="54" r="4" fill="${linea}"/><path d="M42 68q8 6 16 0" fill="none" stroke="${linea}" stroke-width="3" stroke-linecap="round"/><circle cx="30" cy="64" r="5" fill="#FF7FA0" opacity=".35"/><circle cx="70" cy="64" r="5" fill="#FF7FA0" opacity=".35"/></svg>`,
  panza:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="56" rx="38" ry="34" fill="${piel}"/><path d="M14 40q36-10 72 0" fill="none" stroke="#2E86DE" stroke-width="10"/><path d="M46 58q4 6 8 0" fill="none" stroke="#C99A72" stroke-width="3" stroke-linecap="round"/><path d="M30 76q20 10 40 0" fill="none" stroke="#E6BC94" stroke-width="3"/></svg>`,
  nariz:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 14c-6 20-22 40-22 54 0 10 10 16 22 16s22-6 22-16c0-14-16-34-22-54z" fill="${piel}" stroke="#D9AE85" stroke-width="3"/><ellipse cx="40" cy="74" rx="5" ry="3.5" fill="#B5835A"/><ellipse cx="60" cy="74" rx="5" ry="3.5" fill="#B5835A"/><ellipse cx="44" cy="48" rx="3" ry="8" fill="#fff" opacity=".5"/></svg>`,
  boca:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M12 42q38 6 76 0-6 40-38 40S18 82 12 42z" fill="#8B2E2E"/><path d="M14 42q36 6 72 0v8q-36 6-72 0z" fill="#fff"/><ellipse cx="50" cy="70" rx="18" ry="9" fill="#FF7FA0"/><path d="M10 42q40-16 80 0" fill="none" stroke="#E8483B" stroke-width="7" stroke-linecap="round"/><path d="M12 42q38 46 76 0" fill="none" stroke="#E8483B" stroke-width="7" stroke-linecap="round"/></svg>`,
  ojos:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="28" cy="52" rx="20" ry="16" fill="#fff" stroke="${linea}" stroke-width="3"/><ellipse cx="72" cy="52" rx="20" ry="16" fill="#fff" stroke="${linea}" stroke-width="3"/><circle cx="30" cy="54" r="9" fill="#3E7CB8"/><circle cx="74" cy="54" r="9" fill="#3E7CB8"/><circle cx="30" cy="54" r="4.5" fill="${linea}"/><circle cx="74" cy="54" r="4.5" fill="${linea}"/><circle cx="33" cy="50" r="2.5" fill="#fff"/><circle cx="77" cy="50" r="2.5" fill="#fff"/><path d="M12 34l-4-6M22 30l-2-7M34 30l2-7M56 34l-4-6M66 30l-2-7M78 30l2-7" stroke="${linea}" stroke-width="3" stroke-linecap="round"/></svg>`,
  orejas:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 20c-16 0-22 14-22 28s8 30 22 30c6 0 8-6 6-12-2-8-6-10-6-18 0-10 8-10 8-18 0-6-4-10-8-10z" fill="${piel}" stroke="#D9AE85" stroke-width="3"/><path d="M70 20c16 0 22 14 22 28s-8 30-22 30c-6 0-8-6-6-12 2-8 6-10 6-18 0-10-8-10-8-18 0-6 4-10 8-10z" fill="${piel}" stroke="#D9AE85" stroke-width="3"/><path d="M24 36q-6 12 4 22M76 36q6 12-4 22" fill="none" stroke="#D9AE85" stroke-width="3" stroke-linecap="round"/></svg>`,
  pies:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M18 30c0-8 16-8 16 0v34c0 14-24 14-24 0 0-12 8-16 8-34z" fill="${piel}"/><path d="M82 30c0-8-16-8-16 0v34c0 14 24 14 24 0 0-12-8-16-8-34z" fill="${piel}"/><g fill="#E6BC94"><circle cx="13" cy="80" r="4"/><circle cx="21" cy="82" r="4"/><circle cx="29" cy="81" r="4"/><circle cx="87" cy="80" r="4"/><circle cx="79" cy="82" r="4"/><circle cx="71" cy="81" r="4"/></g></svg>`,
  rodilla:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 6h22v40l24 40H52L34 58q-6-8-4-18z" fill="${piel}"/><rect x="22" y="2" width="36" height="20" rx="4" fill="#2E86DE"/><g transform="rotate(-20 42 48)"><rect x="26" y="42" width="34" height="12" rx="6" fill="#F2C29B"/><rect x="38" y="42" width="10" height="12" fill="#FFE3C8"/></g><path d="M50 86h30q4 0 4 4H48z" fill="#E8483B"/></svg>`,
  panuelo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="18" y="50" width="64" height="38" rx="6" fill="#7CC6F0"/><rect x="18" y="50" width="64" height="8" fill="#4FA3D6"/><path d="M38 52c-4-20 6-34 14-40 4 10 16 18 10 40z" fill="#fff" stroke="#DDE6EE" stroke-width="2"/></svg>`,
  feliz:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#FFC93C"/><path d="M30 42q6-8 12 0M58 42q6-8 12 0" fill="none" stroke="${linea}" stroke-width="4" stroke-linecap="round"/><path d="M28 58q22 26 44 0z" fill="${linea}"/><path d="M36 66q14 10 28 0" fill="#FF7FA0"/></svg>`,
  triste:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#8FC9F2"/><circle cx="36" cy="44" r="5" fill="${linea}"/><circle cx="64" cy="44" r="5" fill="${linea}"/><path d="M28 34l14 4M72 34l-14 4" stroke="${linea}" stroke-width="3" stroke-linecap="round"/><path d="M36 72q14-14 28 0" fill="none" stroke="${linea}" stroke-width="4" stroke-linecap="round"/><path d="M66 52q-4 8 0 12 4-4 0-12z" fill="#2E86DE"/></svg>`,
  miedo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#C9B8F2"/><circle cx="36" cy="42" r="8" fill="#fff"/><circle cx="64" cy="42" r="8" fill="#fff"/><circle cx="36" cy="43" r="4" fill="${linea}"/><circle cx="64" cy="43" r="4" fill="${linea}"/><ellipse cx="50" cy="68" rx="9" ry="12" fill="${linea}"/><path d="M14 30l-6-4M86 30l6-4M12 50H4M88 50h8" stroke="#8B6FE8" stroke-width="3" stroke-linecap="round"/></svg>`
};

const H=(x,o={})=>({tipo:"heroe", x, uniforme:true, ...o}), N=(de,x,mira,gesto)=>({tipo:"npc", de, x, mira, gesto}), C=(a,x,y,tam,anim)=>({tipo:"cosa", arte:a, x, y, tam, anim}), E=(cual,x,y)=>({tipo:"efecto", cual, x, y});
const esc=(...actores)=>({fondo:"consultorio", actores});

registrarCapitulo({
  arte,
  id: "doctor",
  num: 7,
  arteTapa: "consultorio",
  lugarArte: "consultorio",
  orden: ["E", "C", "A", "N", "B", "R", "T"],
  uniforme: {
    desde: "E",
    ropa: {
      torso: {lugar:"torso", estilo:"bata", color:"#FFFFFF", color2:"#BFE6F2"},
      cuello: {lugar:"cuello", estilo:"estetoscopio", color:"#5C6A86"}
    }
  },
  niveles: [
    {num:0, piso:["#EEF6FB","#E1EEF7"], pared:"#7CC6F0", paredOscura:"#4FA3D6", mapa:[
      "############",
      "#E....C..U.#",
      "#..........#",
      "#p..bbb...p#",
      "#..........#",
      "#A.........#",
      "#....P.....#",
      "############"]},
    {num:1, piso:["#F3F0FB","#E8E3F7"], pared:"#8B6FE8", paredOscura:"#6A50C4", mapa:[
      "  ########  ",
      " ##N..x.B## ",
      "##........##",
      "#p........p#",
      "#...x..x...#",
      "#..........#",
      "##.D....U.##",
      " ##......## ",
      "  ########  "]},
    {num:2, piso:["#FFF4EC","#FCE8DA"], pared:"#FF8FB8", paredOscura:"#D96A93", mapa:[
      "##########  ",
      "#R..x...T#  ",
      "#........###",
      "#..........#",
      "#p...x.....G",
      "#..........#",
      "#.D......p.#",
      "#..........#",
      "############"]}
  ],
  estaciones: {
    E: {item:"estetoscopio", mostrador:"#7CC6F0",
      npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#FFFFFF", seed:0.6},
      escenas:[
        esc(N("E",.3), C("estetoscopio",.66,.5,.28,"latir")),
        esc(H(.3,{uniforme:false,gesto:"sorpresa"}), N("E",.72,-1)),
        esc(H(.35,{gesto:"arriba"}), C("corazon",.62,.42,.16,"latir")),
        esc(H(.3,{gesto:"saludo"}), N("E",.7,-1,"aplaudir"), E("estrellas",.5,.4))]},
    C: {item:"cabeza", mostrador:"#FFC93C",
      npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", seed:1.1},
      escenas:[
        esc(N("C",.45,1,"triste")),
        esc(H(.28), N("C",.68,-1,"triste")),
        esc(H(.28), N("C",.68,-1), C("vaso",.48,.55,.14,"flotar")),
        esc(H(.3,{gesto:"saludo"}), N("C",.7,-1,"saltar"), E("corazones",.5,.42))]},
    A: {item:"panza", mostrador:"#2FBF8F",
      npc:{kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", seed:2.2},
      escenas:[
        esc(N("A",.38,1,"triste"), C("helado",.68,.5,.14,"flotar")),
        esc(H(.28), N("A",.68,-1,"triste"), C("helado",.48,.42,.12,"flotar"), C("pizza",.52,.6,.12,"flotar")),
        esc(H(.28), N("A",.68,-1), C("jarabe",.48,.52,.16,"latir")),
        esc(H(.3,{gesto:"aplaudir"}), N("A",.7,-1,"bailar"), E("estrellas",.5,.4))]},
    N: {item:"nariz", mostrador:"#FF9B3D",
      npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", seed:0.4},
      escenas:[
        esc(N("N",.38,1,"sorpresa"), C("frutilla",.66,.5,.12,"latir")),
        esc(H(.28,{gesto:"sorpresa"}), N("N",.68,-1,"agacharse")),
        esc(H(.28), N("N",.68,-1), C("panuelo",.5,.5,.14,"flotar")),
        esc(H(.3,{gesto:"saludo"}), N("N",.7,-1,"saludo"), E("corazones",.5,.42))]},
    B: {item:"boca", mostrador:"#E8483B",
      npc:{kind:"cat", fur:"#9E9E9E", fur2:"#F2F2F2", stripes:"#6E6E6E", seed:1.8},
      escenas:[
        esc(N("B",.45,1,"triste")),
        esc(H(.28), N("B",.68,-1,"sorpresa")),
        esc(H(.28,{gesto:"sorpresa"}), N("B",.68,-1,"sorpresa"), E("estrellas",.62,.3)),
        esc(H(.3,{gesto:"saludo"}), N("B",.7,-1,"saltar"), E("estrellas",.5,.4))]},
    R: {item:"rodilla", mostrador:"#8B6FE8",
      npc:{kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", seed:0.9},
      escenas:[
        esc(N("R",.45,1,"triste")),
        esc(H(.28), N("R",.68,-1,"triste")),
        esc(H(.28), N("R",.68,-1), C("curita",.5,.5,.14,"latir")),
        esc(H(.3,{gesto:"aplaudir"}), N("R",.7,-1,"correr"), E("estrellas",.5,.4))]},
    T: {item:"termometro", mostrador:"#FF8FB8",
      npc:{kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", seed:2.5},
      escenas:[
        esc(N("T",.35,1,"triste"), C("termometro",.68,.5,.24,"latir")),
        esc(H(.28), N("T",.68,-1)),
        esc(H(.28,{gesto:"sorpresa"}), N("T",.68,-1), C("termometro",.48,.45,.16,"flotar")),
        esc(H(.3,{gesto:"aplaudir"}), N("T",.7,-1,"bailar"), E("corazones",.5,.42))]}
  },
  final: {npc:{kind:"bear", fur:"#C9955E", fur2:"#F1D5B0", seed:0.7}, arte:"corazon", icono:"osito", anim:"abrazo"},
  charlas: [
    {npc:{kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#FFFFFF", seed:0.6}, arte:"estetoscopio", est:"E", voz:"amable", color:"#7CC6F0"},
    {npc:{kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", seed:1.1}, arte:"cabeza", est:"C", voz:"chico", color:"#FFC93C"},
    {npc:{kind:"bunny", fur:"#F2EDE8", fur2:"#FFFFFF", inner:"#FFB3C7", seed:0.4}, arte:"nariz", est:"N", voz:"nina", color:"#FF9B3D"},
    {npc:{kind:"bear", fur:"#C9955E", fur2:"#F1D5B0", seed:0.7}, arte:"osito", est:"final", voz:"chico", color:"#FF8FB8"}],
  microjuego: {id:"cuerpo", arte:"osito", precio:1, color:"#FF8FB8", ingredientes:["cabeza", "ojos", "nariz", "boca", "orejas", "panza", "pies"]},
  palabrasExtra: ["ojos", "orejas", "pies", "curita", "jarabe"],
  frasesExtra: ["feliz", "triste", "miedo", "curita", "corazon"],
  preguntas: [
    {ok:"estetoscopio", no:["termometro", "jarabe"]},
    {ok:"termometro", no:["curita", "estetoscopio"]},
    {ok:"curita", no:["jarabe", "termometro"]},
    {ok:"nariz", no:["boca", "ojos"]},
    {ok:"ojos", no:["orejas", "nariz"]},
    {ok:"orejas", no:["pies", "boca"]},
    {ok:"boca", no:["nariz", "panza"]},
    {ok:"pies", no:["cabeza", "orejas"]},
    {ok:"triste", no:["feliz", "miedo"]},
    {ok:"feliz", no:["triste", "miedo"]}
  ]
});
})();
