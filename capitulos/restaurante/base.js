/* =========================================================
   CAPÍTULO 2 · EL RESTAURANTE — parte común a todos los idiomas
   (mapa, dibujos, personajes, escenas de los cuentos, respuestas de las preguntas)
   Los textos de cada idioma están en es.js, fr.js, it.js de esta misma carpeta.

   La leyenda del mapa y de las escenas está en capitulos/aeropuerto/base.js. Además:
     mapa:    a auto estacionado · m mesa con mantel
     escenas: fondo 'salon' | 'cocina' | 'calle'
              {tipo:'heroe', uniforme:true} = el héroe con el uniforme de mozo
     estación: mantel:true = el mostrador es una mesa con mantel · npc.toque = gorro de cocinero
   uniforme: la ropa de mozo que se pone el héroe al ganar el sello de la estación `desde`.
   final: anim 'propina' = la clienta se va en auto y deja una propina de `propina` pececitos.
   ========================================================= */
registrarCapitulo({
  arte: {
    restaurante:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="14" y="40" width="72" height="46" fill="#F28F6B"/><path d="M10 28h80l-4 16H14z" fill="#E8483B"/><path d="M22 28h11l-2 16h-11zM44 28h12l-1 16H45zM67 28h11l2 16h-11z" fill="#fff"/><rect x="42" y="58" width="16" height="28" rx="3" fill="#8A5636"/><rect x="20" y="54" width="16" height="14" rx="3" fill="#CDEBFF"/><rect x="64" y="54" width="16" height="14" rx="3" fill="#CDEBFF"/><circle cx="50" cy="16" r="10" fill="#fff" stroke="#22314F" stroke-width="3"/><path d="M38 9v14M62 9v14" stroke="#22314F" stroke-width="3" stroke-linecap="round"/><rect x="8" y="86" width="84" height="4" rx="2" fill="#22314F" opacity=".2"/></svg>`,
    auto:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M26 46l8-14h30l10 14z" fill="#E8483B"/><path d="M33 44l5-9h10v9zM53 44v-9h9l6 9z" fill="#CDEBFF"/><rect x="8" y="44" width="84" height="22" rx="10" fill="#E8483B"/><rect x="14" y="50" width="72" height="3" fill="#fff" opacity=".35"/><circle cx="88" cy="54" r="3" fill="#FFE07A"/><circle cx="28" cy="68" r="10" fill="#22314F"/><circle cx="28" cy="68" r="4" fill="#C9D3E6"/><circle cx="72" cy="68" r="10" fill="#22314F"/><circle cx="72" cy="68" r="4" fill="#C9D3E6"/></svg>`,
    mesa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="22" y="58" width="6" height="30" fill="#8A5636"/><rect x="72" y="58" width="6" height="30" fill="#8A5636"/><path d="M10 40h80l-6 24H16z" fill="#fff"/><path d="M10 40h16l-2 8H12zM42 40h16v8H42zM74 40h16l-2 8H76zM26 48h16l-1 8H24zM58 48h16l2 8H59zM16 56h10l-1 8H16zM41 56h18v8H41zM74 56h10v8H75z" fill="#E8483B"/><ellipse cx="50" cy="36" rx="18" ry="5" fill="#E3E8F0"/><ellipse cx="50" cy="35" rx="11" ry="3" fill="#fff"/></svg>`,
    plato:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="60" rx="42" ry="20" fill="#E3E8F0"/><ellipse cx="50" cy="57" rx="40" ry="18" fill="#fff"/><ellipse cx="50" cy="57" rx="27" ry="11" fill="#F4F6FA"/><ellipse cx="40" cy="52" rx="12" ry="7" fill="#3CB371"/><ellipse cx="54" cy="49" rx="10" ry="6" fill="#4FCB83"/><circle cx="60" cy="56" r="6" fill="#E8483B"/><circle cx="46" cy="58" r="5" fill="#E8483B"/><ellipse cx="58" cy="54" rx="2" ry="1.4" fill="#fff" opacity=".6"/></svg>`,
    olla:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30 26c-4-6 4-10 0-16M50 26c-4-6 4-10 0-16M70 26c-4-6 4-10 0-16" fill="none" stroke="#AEB8C8" stroke-width="4" stroke-linecap="round"/><rect x="6" y="44" width="14" height="8" rx="4" fill="#5C6A86"/><rect x="80" y="44" width="14" height="8" rx="4" fill="#5C6A86"/><path d="M16 38h68v36a12 12 0 0 1-12 12H28a12 12 0 0 1-12-12z" fill="#8A96AA"/><ellipse cx="50" cy="38" rx="34" ry="7" fill="#E8483B"/><ellipse cx="42" cy="37" rx="6" ry="2" fill="#FF8A75"/><rect x="22" y="48" width="56" height="4" fill="#fff" opacity=".3"/></svg>`,
    carta:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="10" width="60" height="80" rx="7" fill="#8B2E2E"/><rect x="26" y="16" width="48" height="68" rx="4" fill="#FFF6E5"/><path d="M40 28v18M36 28v8a4 4 0 0 0 8 0v-8M60 28c-5 2-5 12 0 14v14" fill="none" stroke="#22314F" stroke-width="3" stroke-linecap="round"/><rect x="33" y="64" width="34" height="4" rx="2" fill="#C9A27A"/><rect x="37" y="73" width="26" height="4" rx="2" fill="#C9A27A"/></svg>`,
    helado:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M34 54h32L50 94z" fill="#E8B26A"/><path d="M38 60l20 10M36 70l16 8M62 60L44 76" stroke="#C98B3E" stroke-width="2.5"/><circle cx="38" cy="48" r="14" fill="#6B3A1E"/><circle cx="62" cy="48" r="14" fill="#FF8FB8"/><circle cx="50" cy="30" r="15" fill="#FFF3D6"/><circle cx="50" cy="15" r="5" fill="#E8483B"/><ellipse cx="44" cy="25" rx="5" ry="3" fill="#fff" opacity=".7"/></svg>`,
    cuenta:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M24 8h52v80l-6-5-7 5-6-5-7 5-6-5-7 5-6-5-7 5z" fill="#fff" stroke="#AEB8C8" stroke-width="3" stroke-linejoin="round"/><rect x="32" y="20" width="36" height="5" rx="2.5" fill="#22314F"/><rect x="32" y="34" width="24" height="4" rx="2" fill="#AEB8C8"/><rect x="60" y="34" width="8" height="4" rx="2" fill="#AEB8C8"/><rect x="32" y="45" width="24" height="4" rx="2" fill="#AEB8C8"/><rect x="60" y="45" width="8" height="4" rx="2" fill="#AEB8C8"/><circle cx="58" cy="66" r="10" fill="#FFC93C" stroke="#D99A00" stroke-width="2.5"/><rect x="32" y="62" width="14" height="5" rx="2.5" fill="#22314F"/></svg>`,
    propina:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="#D99A00"/><circle cx="50" cy="47" r="38" fill="#FFC93C"/><circle cx="50" cy="47" r="29" fill="none" stroke="#D99A00" stroke-width="3"/><path d="M50 27l6 13 14 1.5-10.5 9.5 3 14L50 58l-12.5 7 3-14L30 41.5 44 40z" fill="#FFE07A" stroke="#D99A00" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="34" cy="28" rx="7" ry="4" fill="#fff" opacity=".6"/></svg>`,
    pizza:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="52" r="40" fill="#E8B26A"/><circle cx="50" cy="52" r="33" fill="#E8483B"/><circle cx="50" cy="52" r="30" fill="#FFE07A" opacity=".85"/><circle cx="38" cy="40" r="6" fill="#C9302C"/><circle cx="62" cy="44" r="6" fill="#C9302C"/><circle cx="46" cy="64" r="6" fill="#C9302C"/><circle cx="66" cy="64" r="5" fill="#C9302C"/><path d="M50 52L50 19M50 52L79 68M50 52L21 68" stroke="#E8B26A" stroke-width="2.5"/><ellipse cx="33" cy="56" rx="3" ry="5" fill="#3CB371"/><ellipse cx="60" cy="33" rx="3" ry="5" fill="#3CB371"/></svg>`,
    sopa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M36 30c-4-6 4-10 0-16M52 30c-4-6 4-10 0-16" fill="none" stroke="#AEB8C8" stroke-width="4" stroke-linecap="round"/><path d="M12 46h76a38 34 0 0 1-76 0z" fill="#2E86DE"/><ellipse cx="50" cy="46" rx="38" ry="9" fill="#E8483B"/><circle cx="40" cy="45" r="3" fill="#FF8A75"/><circle cx="58" cy="47" r="3" fill="#FF8A75"/><rect x="34" y="78" width="32" height="6" rx="3" fill="#1F66B3"/><path d="M70 44l18-26" stroke="#AEB8C8" stroke-width="5" stroke-linecap="round"/></svg>`,
    vaso:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M26 14h48l-7 74H33z" fill="#E6F4FF" stroke="#9FD3EE" stroke-width="3" stroke-linejoin="round"/><path d="M29 38h42l-4.5 48H33.5z" fill="#7CC6F0"/><ellipse cx="50" cy="38" rx="21" ry="3" fill="#B6E1F7"/><rect x="34" y="20" width="5" height="60" rx="2.5" fill="#fff" opacity=".6"/><circle cx="58" cy="56" r="3" fill="#fff" opacity=".7"/><circle cx="50" cy="68" r="2" fill="#fff" opacity=".7"/></svg>`,
    tenedor:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(20 50 50)"><path d="M36 8v22a14 14 0 0 0 28 0V8" fill="none" stroke="#AEB8C8" stroke-width="6" stroke-linecap="round"/><path d="M45 8v20M55 8v20" stroke="#AEB8C8" stroke-width="5" stroke-linecap="round"/><rect x="45" y="40" width="10" height="52" rx="5" fill="#8A96AA"/></g></svg>`,
    salsa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M18 50h64a32 26 0 0 1-64 0z" fill="#fff" stroke="#DCE3EE" stroke-width="3"/><ellipse cx="50" cy="50" rx="32" ry="8" fill="#D93A2B"/><ellipse cx="42" cy="48" rx="8" ry="2.5" fill="#FF7A6B"/><path d="M62 46l22-30" stroke="#AEB8C8" stroke-width="6" stroke-linecap="round"/></svg>`,
    queso:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M12 64l70-30 6 12v26H12z" fill="#FFD45C"/><path d="M12 64l70-30 6 12z" fill="#FFE58A"/><circle cx="34" cy="74" r="5" fill="#F2B632"/><circle cx="60" cy="66" r="7" fill="#F2B632"/><circle cx="76" cy="78" r="4" fill="#F2B632"/></svg>`,
    tomate:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="54" r="34" fill="#E8483B"/><circle cx="50" cy="54" r="26" fill="#FF7A6B"/><g fill="#FFE0A3"><ellipse cx="50" cy="40" rx="4" ry="6"/><ellipse cx="64" cy="54" rx="6" ry="4"/><ellipse cx="50" cy="68" rx="4" ry="6"/><ellipse cx="36" cy="54" rx="6" ry="4"/></g><path d="M44 18c4 4 8 4 12 0" stroke="#2E9E5E" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
    aceituna:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="40" cy="58" rx="22" ry="26" fill="#2B2B36"/><ellipse cx="40" cy="58" rx="9" ry="11" fill="#E8483B"/><ellipse cx="66" cy="44" rx="18" ry="22" fill="#3F7A3A"/><ellipse cx="66" cy="44" rx="7" ry="9" fill="#E8483B"/><ellipse cx="60" cy="34" rx="5" ry="3" fill="#fff" opacity=".4"/></svg>`,
    albahaca:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 90V54" stroke="#1F7A45" stroke-width="5" stroke-linecap="round"/><path d="M50 56C24 56 14 34 22 16c18 2 30 16 28 40z" fill="#3CB371"/><path d="M50 56c26 0 36-22 28-40-18 2-30 16-28 40z" fill="#2E9E5E"/><path d="M50 54L30 24M50 54l20-30" stroke="#1F7A45" stroke-width="2.5"/></svg>`,
    hongo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M14 52a36 30 0 0 1 72 0z" fill="#C98B4E"/><path d="M22 50a28 20 0 0 1 56 0z" fill="#E0A96B"/><rect x="38" y="50" width="24" height="34" rx="9" fill="#F3E3C8"/><rect x="14" y="48" width="72" height="7" rx="3.5" fill="#B5753A"/></svg>`,
    delantal:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M36 22c0-12 28-12 28 0" fill="none" stroke="#22314F" stroke-width="4"/><path d="M34 22h32v20l16 2-4 44H22l-4-44 16-2z" fill="#22314F"/><path d="M14 46c-8 2-8 10-2 12M86 46c8 2 8 10 2 12" fill="none" stroke="#22314F" stroke-width="4" stroke-linecap="round"/><rect x="38" y="56" width="24" height="16" rx="3" fill="#3E4E70"/><path d="M42 14l8 6 8-6v12l-8-6-8 6z" fill="#E8483B"/></svg>`
  },
  id: "restaurante",
  num: 2,
  arteTapa: "restaurante",
  lugarArte: "restaurante",
  orden: ["E", "R", "B", "K", "M", "H", "C"],
  uniforme: {
    desde: "R",
    ropa: {
      torso: {lugar:"torso", estilo:"delantal", color:"#FFFFFF", color2:"#22314F"},
      cuello: {lugar:"cuello", estilo:"mono", color:"#22314F"}
    }
  },
  niveles: [
    {
      num: 0,
      piso: ["#B8C0CC", "#AEB6C3"],
      pared: "#6C7686",
      paredOscura: "#4E586B",
      mapa: [
        "############",
        "#E...L...U.#",
        "#..........#",
        "#.a.a..a.a.#",
        "#..........#",
        "#.a.a..a.a.G",
        "#..........#",
        "####.P..####",
        "   #p..p#   ",
        "   ######   "
      ]
    },
    {
      num: 1,
      piso: ["#F4F1EA", "#E6E0D4"],
      pared: "#F28F6B",
      paredOscura: "#C96A4A",
      mapa: [
        "############",
        "#.R..B.L.DU#",
        "#..........#",
        "#.m.m..m.m.#",
        "#..........#",
        "####....####",
        "   #K...#   ",
        "   #.m..#   ",
        "   #p..p#   ",
        "   ######   "
      ]
    },
    {
      num: 2,
      piso: ["#FBEFD9", "#F3E2C3"],
      pared: "#8B6FE8",
      paredOscura: "#6A50C4",
      mapa: [
        "  ########  ",
        " ##M..H.L## ",
        "##........##",
        "#..m....m..#",
        "#C.........#",
        "#...m..m...#",
        "##........##",
        " ##..D...## ",
        "  #p....p#  ",
        "  ########  "
      ]
    }
  ],
  estaciones: {
    E: {
      item: "auto",
      mostrador: "#5C6A86",
      npc: {kind:"dog", fur:"#C9A27A", fur2:"#F5E6D3", ear:"#8A6440", hat:"#E8483B", seed:0.5},
      escenas: [
        {fondo:"calle", actores:[{tipo:"heroe", x:0.25}, {tipo:"cosa", arte:"auto", x:0.64, y:0.76, tam:0.34, anim:"quieto"}]},
        {fondo:"calle", actores:[{tipo:"heroe", x:0.22, gesto:"sorpresa"}, {tipo:"cosa", arte:"auto", x:0.62, y:0.76, tam:0.34, anim:"saltar"}]},
        {
          fondo: "calle",
          actores: [
            {tipo:"npc", de:"E", x:0.3},
            {tipo:"cosa", arte:"auto", x:0.66, y:0.76, tam:0.34, anim:"quieto"},
            {tipo:"efecto", cual:"burbujas", x:0.66, y:0.7}
          ]
        },
        {
          fondo: "calle",
          actores: [
            {tipo:"heroe", x:0.28, gesto:"saludo"},
            {tipo:"cosa", arte:"auto", x:0.66, y:0.76, tam:0.34, anim:"quieto"},
            {tipo:"efecto", cual:"zzz", x:0.74, y:0.55}
          ]
        }
      ]
    },
    R: {
      item: "mesa",
      mostrador: "#8A5636",
      npc: {kind:"bear", fur:"#7A4E2D", fur2:"#D9B48F", hat:"#22314F", seed:1.2},
      escenas: [
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.25},
            {tipo:"cosa", arte:"mesa", x:0.5, y:0.78, tam:0.24, anim:"quieto"},
            {tipo:"npc", de:"R", x:0.75, mira:-1}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"npc", de:"R", x:0.3},
            {tipo:"cosa", arte:"mesa", x:0.6, y:0.78, tam:0.22, anim:"quieto"},
            {tipo:"cosa", arte:"mesa", x:0.85, y:0.78, tam:0.22, anim:"quieto"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.25, gesto:"sorpresa"},
            {tipo:"cosa", arte:"delantal", x:0.62, y:0.5, tam:0.36, anim:"latir"},
            {tipo:"efecto", cual:"estrellas", x:0.62, y:0.45}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.45, gesto:"salto", uniforme:true},
            {tipo:"efecto", cual:"estrellas", x:0.45, y:0.45}
          ]
        }
      ]
    },
    B: {
      item: "plato",
      mostrador: "#2FBF8F",
      npc: {kind:"bunny", fur:"#F2D7E0", fur2:"#FFFFFF", inner:"#FF9EBB", hat:"#FF8FB8", seed:2.4},
      escenas: [
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.28, uniforme:true},
            {tipo:"cosa", arte:"plato", x:0.5, y:0.55, tam:0.22, anim:"flotar"},
            {tipo:"npc", de:"B", x:0.74, mira:-1}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.3, uniforme:true},
            {tipo:"cosa", arte:"plato", x:0.42, y:0.56, tam:0.2, anim:"quieto"},
            {tipo:"cosa", arte:"plato", x:0.42, y:0.5, tam:0.2, anim:"quieto"},
            {tipo:"cosa", arte:"plato", x:0.42, y:0.44, tam:0.2, anim:"quieto"},
            {tipo:"cosa", arte:"plato", x:0.42, y:0.38, tam:0.2, anim:"quieto"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"sorpresa", uniforme:true},
            {tipo:"cosa", arte:"plato", x:0.44, y:0.56, tam:0.2, anim:"flotar"},
            {tipo:"cosa", arte:"plato", x:0.46, y:0.48, tam:0.2, anim:"latir"},
            {tipo:"cosa", arte:"plato", x:0.42, y:0.4, tam:0.2, anim:"flotar"},
            {tipo:"cosa", arte:"plato", x:0.48, y:0.32, tam:0.2, anim:"latir"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"saludo", uniforme:true},
            {tipo:"npc", de:"B", x:0.72, mira:-1},
            {tipo:"efecto", cual:"corazones", x:0.5, y:0.45}
          ]
        }
      ]
    },
    K: {
      item: "olla",
      mostrador: "#AEB8C8",
      npc: {kind:"cat", fur:"#9AA3B5", fur2:"#FFFFFF", toque:true, seed:0.9},
      escenas: [
        {
          fondo: "cocina",
          actores: [
            {tipo:"npc", de:"K", x:0.3},
            {tipo:"cosa", arte:"olla", x:0.66, y:0.62, tam:0.32, anim:"quieto"}
          ]
        },
        {
          fondo: "cocina",
          actores: [
            {tipo:"heroe", x:0.25, gesto:"sorpresa", uniforme:true},
            {tipo:"cosa", arte:"olla", x:0.64, y:0.62, tam:0.32, anim:"latir"},
            {tipo:"efecto", cual:"burbujas", x:0.64, y:0.48}
          ]
        },
        {
          fondo: "cocina",
          actores: [
            {tipo:"heroe", x:0.22, gesto:"salto", uniforme:true},
            {tipo:"cosa", arte:"olla", x:0.62, y:0.62, tam:0.32, anim:"saltar"}
          ]
        },
        {
          fondo: "cocina",
          actores: [
            {tipo:"npc", de:"K", x:0.32},
            {tipo:"cosa", arte:"sopa", x:0.66, y:0.6, tam:0.28, anim:"flotar"},
            {tipo:"efecto", cual:"corazones", x:0.66, y:0.45}
          ]
        }
      ]
    },
    M: {
      item: "carta",
      mostrador: "#E8483B",
      mantel: true,
      npc: {kind:"dog", fur:"#B9805A", fur2:"#F6E3CF", ear:"#7A4B2A", hat:"#2E86DE", seed:1.8},
      escenas: [
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.28, uniforme:true},
            {tipo:"cosa", arte:"carta", x:0.5, y:0.55, tam:0.22, anim:"flotar"},
            {tipo:"npc", de:"M", x:0.74, mira:-1}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"npc", de:"M", x:0.35},
            {tipo:"cosa", arte:"pizza", x:0.7, y:0.5, tam:0.28, anim:"latir"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.2, gesto:"sorpresa", uniforme:true},
            {tipo:"cosa", arte:"pizza", x:0.62, y:0.56, tam:0.6, anim:"latir"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.22, gesto:"saludo", uniforme:true},
            {tipo:"npc", de:"M", x:0.5},
            {tipo:"npc", de:"B", x:0.78, mira:-1},
            {tipo:"cosa", arte:"pizza", x:0.5, y:0.3, tam:0.22, anim:"flotar"},
            {tipo:"efecto", cual:"corazones", x:0.5, y:0.3}
          ]
        }
      ]
    },
    H: {
      item: "helado",
      mostrador: "#2E86DE",
      mantel: true,
      npc: {kind:"cat", fur:"#D9D2C5", fur2:"#FFFFFF", stripes:"#A89F90", hat:"#8B6FE8", seed:2.7},
      escenas: [
        {
          fondo: "salon",
          actores: [
            {tipo:"cosa", arte:"helado", x:0.35, y:0.5, tam:0.28, anim:"flotar"},
            {tipo:"npc", de:"H", x:0.7, mira:-1}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"salto", uniforme:true},
            {tipo:"cosa", arte:"helado", x:0.1, y:0.45, tam:0.2, anim:"cruzar"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.25, gesto:"sorpresa", uniforme:true},
            {tipo:"cosa", arte:"helado", x:0.62, y:0.55, tam:0.32, anim:"latir"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"npc", de:"H", x:0.5},
            {tipo:"efecto", cual:"corazones", x:0.5, y:0.4}
          ]
        }
      ]
    },
    C: {
      item: "cuenta",
      mostrador: "#FFC93C",
      npc: {kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#2FBF8F", seed:1.4},
      escenas: [
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.28, uniforme:true},
            {tipo:"cosa", arte:"cuenta", x:0.5, y:0.55, tam:0.2, anim:"flotar"},
            {tipo:"npc", de:"C", x:0.74, mira:-1}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.2, gesto:"sorpresa", uniforme:true},
            {tipo:"cosa", arte:"cuenta", x:0.3, y:0.35, tam:0.2, anim:"cruzar"}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.45, gesto:"salto", uniforme:true},
            {tipo:"cosa", arte:"cuenta", x:0.47, y:0.28, tam:0.18, anim:"flotar"},
            {tipo:"efecto", cual:"estrellas", x:0.47, y:0.3}
          ]
        },
        {
          fondo: "salon",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"saludo", uniforme:true},
            {tipo:"npc", de:"C", x:0.72, mira:-1},
            {tipo:"efecto", cual:"corazones", x:0.5, y:0.4}
          ]
        }
      ]
    }
  },
  charlas: [
    {npc:{kind:"bear", fur:"#7A4E2D", fur2:"#D9B48F", hat:"#22314F", seed:1.2}, arte:"mesa", est:"R", color:"#8A5636"},
    {npc:{kind:"cat", fur:"#9AA3B5", fur2:"#FFFFFF", toque:true, seed:0.9}, arte:"olla", est:"K", color:"#AEB8C8"},
    {npc:{kind:"cat", fur:"#D9D2C5", fur2:"#FFFFFF", stripes:"#A89F90", hat:"#8B6FE8", seed:2.7}, arte:"helado", est:"H", color:"#2E86DE"},
    {npc:{kind:"cat", fur:"#FFFFFF", fur2:"#FFFFFF", eye:"#2FBF8F", hat:"#8B6FE8", seed:1.5}, arte:"propina", est:"final", color:"#FFC93C"}],
  final: {
    npc: {kind:"cat", fur:"#FFFFFF", fur2:"#FFFFFF", eye:"#2FBF8F", hat:"#8B6FE8", seed:1.5},
    arte: "propina",
    anim: "propina",
    propina: 5
  },
  microjuego: {id:"pizza", arte:"pizza", precio:3, color:"#E8483B", ingredientes:["salsa", "queso", "tomate", "aceituna", "albahaca", "hongo"]},
  palabrasExtra: ["pizza", "sopa", "vaso", "tenedor", "delantal"],
  frasesExtra: ["restaurante", "plato", "vaso", "vaso", "corazon", "pizza"],
  preguntas: [
    {ok:"pizza", no:["helado", "olla"]},
    {ok:"helado", no:["sopa", "cuenta"]},
    {ok:"olla", no:["carta", "auto"]},
    {ok:"auto", no:["mesa", "vaso"]},
    {ok:"carta", no:["cuenta", "plato"]},
    {ok:"cuenta", no:["carta", "tenedor"]},
    {ok:"delantal", no:["mesa", "propina"]},
    {ok:"vaso", no:["plato", "olla"]},
    {ok:"tenedor", no:["vaso", "helado"]},
    {ok:"propina", no:["auto", "carta"]}
  ]
});
