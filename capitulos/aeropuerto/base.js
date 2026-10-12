/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — parte común a todos los idiomas
   (mapa, dibujos, personajes, escenas de los cuentos, respuestas de las preguntas)
   Los textos de cada idioma están en es.js, fr.js, it.js de esta misma carpeta.

   Mapa:  cada piso puede tener otro tamaño y otra forma (mejor casi cuadrado, así entra en el teléfono)
          (espacio) afuera del edificio · # pared · . piso · P inicio · U escalera que sube · D escalera que baja
          debajo de U, D y L tiene que haber piso (ahí aparece el personaje al llegar)
          L ascensor · b banco · p planta · ~ puertas de vidrio · G puerta final (en una pared)
          Cualquier otra letra = una estación.
   Escenas: fondo 'terminal' | 'ventana' | 'cielo'
     actores: {tipo:'heroe', x, gesto:'saludo'|'sorpresa'|'salto', mira:1|-1}
              {tipo:'npc', de:'<letra de estación>'|'final', x, mira}
              {tipo:'cosa', arte, x, y, tam, anim:'flotar'|'latir'|'saltar'|'rodar'|'cruzar'|'volar'|'subir'|'quieto'}
              {tipo:'efecto', cual:'estrellas'|'corazones'|'burbujas'|'zzz', x, y}
              {tipo:'escalera'}
   ========================================================= */
registrarCapitulo({
  arte: {
    pasaje:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g transform="rotate(-10 50 50)"><rect x="8" y="27" width="84" height="46" rx="7" fill="#FFC93C" stroke="#D99A00" stroke-width="3"/><path d="M68 29v42" stroke="#D99A00" stroke-width="3" stroke-dasharray="4 4"/><path d="M16 50h26l8-10h6l-4 10h8l3-4h5l-2 7 2 7h-5l-3-4h-8l4 10h-6l-8-10H16z" fill="#2E6BD9"/><rect x="74" y="38" width="12" height="4" rx="2" fill="#D99A00"/><rect x="74" y="47" width="12" height="4" rx="2" fill="#D99A00"/><rect x="74" y="56" width="8" height="4" rx="2" fill="#D99A00"/></g></svg>`,
    valija:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M38 30V20a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v10" fill="none" stroke="#7A2E25" stroke-width="6"/><rect x="18" y="28" width="64" height="54" rx="10" fill="#FF6F59"/><rect x="31" y="28" width="7" height="54" fill="#E04E39"/><rect x="62" y="28" width="7" height="54" fill="#E04E39"/><circle cx="50" cy="52" r="8" fill="#FFC93C"/><circle cx="28" cy="88" r="5" fill="#22314F"/><circle cx="72" cy="88" r="5" fill="#22314F"/></svg>`,
    pasaporte:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="22" y="12" width="56" height="76" rx="7" fill="#1F3A7A"/><rect x="22" y="12" width="9" height="76" rx="4" fill="#16295A"/><circle cx="54" cy="44" r="14" fill="none" stroke="#F2C14E" stroke-width="3"/><ellipse cx="54" cy="44" rx="6" ry="14" fill="none" stroke="#F2C14E" stroke-width="2.5"/><path d="M40 44h28" stroke="#F2C14E" stroke-width="2.5"/><rect x="40" y="66" width="28" height="4" rx="2" fill="#F2C14E"/><rect x="44" y="74" width="20" height="4" rx="2" fill="#F2C14E"/></svg>`,
    mapa:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M12 26l26-8 24 8 26-8v56l-26 8-24-8-26 8z" fill="#8FD16F"/><path d="M38 18l24 8v56l-24-8z" fill="#B7E59C"/><path d="M20 68c8-14 18-2 26-16s14-8 22-16" fill="none" stroke="#FF6F59" stroke-width="3.5" stroke-dasharray="5 5" stroke-linecap="round"/><path d="M72 20c-6 0-10 4-10 9 0 7 10 15 10 15s10-8 10-15c0-5-4-9-10-9z" fill="#FF6F59"/><circle cx="72" cy="29" r="3.5" fill="#fff"/></svg>`,
    bano:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="12" y="12" width="76" height="76" rx="14" fill="#2E86DE"/><path d="M50 22v56" stroke="#fff" stroke-width="2.5" opacity=".6"/><circle cx="32" cy="30" r="6" fill="#fff"/><rect x="26" y="39" width="12" height="20" rx="4" fill="#fff"/><rect x="27" y="57" width="4" height="17" rx="2" fill="#fff"/><rect x="33" y="57" width="4" height="17" rx="2" fill="#fff"/><circle cx="68" cy="30" r="6" fill="#fff"/><path d="M68 38l11 24H57z" fill="#fff"/><rect x="63" y="60" width="4" height="14" rx="2" fill="#fff"/><rect x="69" y="60" width="4" height="14" rx="2" fill="#fff"/></svg>`,
    alfajor:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="68" rx="36" ry="12" fill="#5C3118"/><rect x="14" y="56" width="72" height="12" fill="#5C3118"/><ellipse cx="50" cy="56" rx="36" ry="12" fill="#F6E7C8"/><rect x="14" y="49" width="72" height="7" fill="#F6E7C8"/><ellipse cx="50" cy="49" rx="36" ry="12" fill="#6B3A1E"/><rect x="14" y="38" width="72" height="11" fill="#6B3A1E"/><ellipse cx="50" cy="38" rx="36" ry="12" fill="#8A5030"/><path d="M30 34c8-4 18-5 26-3" stroke="#B57A52" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    avion:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M16 46L10 26h9l13 18z" fill="#FF6F59"/><rect x="10" y="42" width="78" height="18" rx="9" fill="#fff" stroke="#9AA9C2" stroke-width="2.5"/><path d="M80 44c6 1 9 4 9 7s-3 6-9 7z" fill="#2E6BD9"/><path d="M42 54h18L46 78h-8z" fill="#C9D3E6" stroke="#9AA9C2" stroke-width="2"/><g fill="#2E6BD9"><circle cx="30" cy="49" r="2.6"/><circle cx="38" cy="49" r="2.6"/><circle cx="46" cy="49" r="2.6"/><circle cx="54" cy="49" r="2.6"/><circle cx="62" cy="49" r="2.6"/><circle cx="70" cy="49" r="2.6"/></g><path d="M18 56h60" stroke="#FF6F59" stroke-width="2.5"/></svg>`,
    aeropuerto:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="8" y="58" width="84" height="26" rx="5" fill="#4FA3D1"/><rect x="14" y="64" width="72" height="9" rx="3" fill="#CDEBFF"/><rect x="62" y="22" width="12" height="36" fill="#E9EEF5" stroke="#AEB8C8" stroke-width="2"/><path d="M56 22h24l-3-10H59z" fill="#2E86DE"/><rect x="58" y="10" width="20" height="3" rx="1.5" fill="#22314F"/><path d="M16 44h18l5-6h4l-3 6h6l2-3h4l-2 4 2 4h-4l-2-3h-6l3 6h-4l-5-6H16z" fill="#FF6F59"/><rect x="6" y="84" width="88" height="4" rx="2" fill="#22314F" opacity=".2"/></svg>`,
    ascensor:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="20" y="8" width="60" height="84" rx="8" fill="#AEB8C8"/><rect x="28" y="26" width="21" height="60" fill="#E3E8F0"/><rect x="51" y="26" width="21" height="60" fill="#E3E8F0"/><path d="M38 20l6-7 6 7z" fill="#22314F"/><path d="M52 13l6 7 6-7z" fill="#22314F"/></svg>`,
    escalera:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10 84L72 22h18v14H78L22 92H10z" fill="#5C6A86"/><path d="M20 78l8-8M30 68l8-8M40 58l8-8M50 48l8-8M60 38l8-8" stroke="#A8B3C6" stroke-width="4" stroke-linecap="round"/><path d="M8 72L70 10h22" fill="none" stroke="#22314F" stroke-width="4" stroke-linecap="round"/><circle cx="82" cy="66" r="12" fill="#FFC93C"/><path d="M82 58l7 10H75z" fill="#22314F"/></svg>`,
    puerta:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="22" y="8" width="56" height="86" rx="8" fill="#2FBF8F"/><rect x="30" y="18" width="40" height="70" rx="4" fill="#C6F5E3"/><circle cx="62" cy="56" r="4" fill="#FFC93C"/><circle cx="50" cy="34" r="10" fill="#fff"/><path d="M48 29h5v11h-3v-8h-2z" fill="#22314F"/></svg>`,
    mochila:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M36 26v-6a14 14 0 0 1 28 0v6" fill="none" stroke="#C9483A" stroke-width="6"/><rect x="22" y="24" width="56" height="64" rx="16" fill="#FF6F59"/><rect x="30" y="54" width="40" height="24" rx="8" fill="#E04E39"/><rect x="44" y="60" width="12" height="4" rx="2" fill="#FFC93C"/></svg>`,
    gorra:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M14 58c0-20 16-34 36-34s36 14 36 34z" fill="#fff" stroke="#22314F" stroke-width="3"/><rect x="12" y="56" width="76" height="10" rx="5" fill="#22314F"/><path d="M54 66h34c-2 8-12 12-22 12H54z" fill="#22314F"/><path d="M42 40l8-6 8 6-8 6z" fill="#FFC93C"/></svg>`
  },
  id: "aeropuerto",
  num: 1,
  arteTapa: "avion",
  lugarArte: "aeropuerto",
  orden: ["I", "B", "K", "T", "C", "S", "W"],
  niveles: [
    {
      num: 0,
      piso: ["#F8E6C6", "#F1D9B2"],
      pared: "#4FA3D1",
      paredOscura: "#2F7BAA",
      mapa: [
        "############",
        "#.I..B..L.U#",
        "#..........#",
        "#.b......p.#",
        "#K.........#",
        "#...#..#...#",
        "#..........#",
        "#p........p#",
        "####....####",
        "   #.P..#   ",
        "   ##~~##   "
      ]
    },
    {
      num: 1,
      piso: ["#DCEBFA", "#CCE0F4"],
      pared: "#F28F6B",
      paredOscura: "#C96A4A",
      mapa: [
        "#########   ",
        "#p.T..C.#   ",
        "#.......#   ",
        "#..b....####",
        "#S.....#LDU#",
        "#..........#",
        "#.....b....#",
        "#p........p#",
        "############"
      ]
    },
    {
      num: 2,
      piso: ["#E8E2F8", "#DAD2F2"],
      pared: "#4DB58A",
      paredOscura: "#348E68",
      mapa: [
        "  ########  ",
        "  #WWWW.L#  ",
        "###......###",
        "#..........#",
        "#.b.b......G",
        "#.......bb.#",
        "###......###",
        "  #..D...#  ",
        "  #p....p#  ",
        "  ########  "
      ]
    }
  ],
  estaciones: {
    I: {
      item: "mapa",
      mostrador: "#2E86DE",
      npc: {kind:"bunny", fur:"#E6E0F5", fur2:"#FFFFFF", inner:"#FFB3C7", hat:"#2E86DE", seed:0.4},
      escenas: [
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.3},
            {tipo:"npc", de:"I", x:0.75, mira:-1},
            {tipo:"cosa", arte:"mapa", x:0.52, y:0.55, tam:0.3, anim:"flotar"}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.25, gesto:"sorpresa"},
            {tipo:"cosa", arte:"mapa", x:0.6, y:0.5, tam:0.42, anim:"latir"},
            {tipo:"efecto", cual:"estrellas", x:0.6, y:0.45}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"escalera"},
            {tipo:"cosa", arte:"mapa", x:0.5, tam:0.22, anim:"subir"},
            {tipo:"heroe", x:0.1, gesto:"salto"}
          ]
        },
        {
          fondo: "ventana",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"saludo"},
            {tipo:"cosa", arte:"mapa", x:0.5, y:0.58, tam:0.2, anim:"flotar"},
            {tipo:"efecto", cual:"corazones", x:0.4, y:0.45}
          ]
        }
      ]
    },
    B: {
      item: "bano",
      puerta: true,
      npc: {kind:"cat", fur:"#F2C46B", fur2:"#FFF3D6", hat:"#2FBF8F", seed:1.3},
      escenas: [
        {
          fondo: "terminal",
          actores: [{tipo:"heroe", x:0.35, gesto:"salto"}, {tipo:"cosa", arte:"bano", x:0.72, y:0.32, tam:0.3, anim:"latir"}]
        },
        {fondo:"terminal", actores:[{tipo:"heroe", x:0.3}, {tipo:"npc", de:"B", x:0.7, mira:-1}]},
        {
          fondo: "terminal",
          actores: [{tipo:"npc", de:"B", x:0.35}, {tipo:"cosa", arte:"bano", x:0.7, y:0.45, tam:0.45, anim:"flotar"}]
        },
        {
          fondo: "terminal",
          actores: [{tipo:"heroe", x:0.45, gesto:"saludo"}, {tipo:"efecto", cual:"burbujas", x:0.45, y:0.6}]
        }
      ]
    },
    K: {
      item: "alfajor",
      mostrador: "#FF6F59",
      npc: {kind:"cat", fur:"#B9805A", fur2:"#F6E3CF", stripes:"#8A5636", hat:"#FF6F59", seed:2.1},
      escenas: [
        {
          fondo: "terminal",
          actores: [{tipo:"npc", de:"K", x:0.25}, {tipo:"cosa", arte:"alfajor", x:0.62, y:0.5, tam:0.5, anim:"flotar"}]
        },
        {
          fondo: "terminal",
          actores: [{tipo:"heroe", x:0.3}, {tipo:"cosa", arte:"alfajor", x:0.65, y:0.55, tam:0.32, anim:"quieto"}]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.25, gesto:"sorpresa"},
            {tipo:"cosa", arte:"alfajor", x:0.62, y:0.62, tam:0.32, anim:"saltar"},
            {tipo:"efecto", cual:"estrellas", x:0.62, y:0.45}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.4, gesto:"saludo"},
            {tipo:"cosa", arte:"mochila", x:0.65, y:0.62, tam:0.3, anim:"latir"},
            {tipo:"efecto", cual:"corazones", x:0.65, y:0.45}
          ]
        }
      ]
    },
    T: {
      item: "pasaje",
      mostrador: "#FFB13C",
      npc: {kind:"bear", fur:"#A8744E", fur2:"#E8C9A4", hat:"#FF6F59", seed:0.9},
      escenas: [
        {fondo:"terminal", actores:[{tipo:"heroe", x:0.3}, {tipo:"npc", de:"T", x:0.72, mira:-1}]},
        {
          fondo: "terminal",
          actores: [
            {tipo:"npc", de:"T", x:0.3},
            {tipo:"cosa", arte:"pasaje", x:0.65, y:0.5, tam:0.4, anim:"latir"},
            {tipo:"efecto", cual:"estrellas", x:0.65, y:0.45}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.2, gesto:"sorpresa"},
            {tipo:"cosa", arte:"pasaje", x:0.4, y:0.4, tam:0.26, anim:"cruzar"}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.45, gesto:"salto"},
            {tipo:"cosa", arte:"pasaje", x:0.6, y:0.38, tam:0.24, anim:"flotar"},
            {tipo:"efecto", cual:"estrellas", x:0.5, y:0.35}
          ]
        }
      ]
    },
    C: {
      item: "valija",
      mostrador: "#8B6FE8",
      npc: {kind:"dog", fur:"#E8D3B0", fur2:"#FFF7EA", ear:"#B48A5A", hat:"#8B6FE8", seed:1.7},
      escenas: [
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.35, gesto:"saludo"},
            {tipo:"cosa", arte:"valija", x:0.62, y:0.7, tam:0.24, anim:"flotar"}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.2, gesto:"sorpresa"},
            {tipo:"cosa", arte:"valija", x:0.45, y:0.74, tam:0.22, anim:"rodar"}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"cosa", arte:"bano", x:0.74, y:0.3, tam:0.24, anim:"quieto"},
            {tipo:"npc", de:"B", x:0.8, mira:-1},
            {tipo:"cosa", arte:"valija", x:0, y:0.74, tam:0.22, anim:"rodar"}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"escalera"},
            {tipo:"cosa", arte:"valija", x:0.5, tam:0.2, anim:"subir"},
            {tipo:"heroe", x:0.1, gesto:"sorpresa"}
          ]
        },
        {
          fondo: "cielo",
          actores: [
            {tipo:"cosa", arte:"avion", x:0.62, y:0.5, tam:0.9, anim:"quieto"},
            {tipo:"cosa", arte:"valija", x:0.2, y:0.72, tam:0.22, anim:"quieto"},
            {tipo:"efecto", cual:"estrellas", x:0.2, y:0.6}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.44, gesto:"saludo"},
            {tipo:"cosa", arte:"valija", x:0.6, y:0.74, tam:0.22, anim:"quieto"},
            {tipo:"efecto", cual:"corazones", x:0.5, y:0.5}
          ]
        }
      ]
    },
    S: {
      item: "pasaporte",
      mostrador: "#5C6A86",
      npc: {kind:"dog", fur:"#6E6A78", fur2:"#DDD9E4", ear:"#45424E", hat:"#22314F", seed:2.5},
      escenas: [
        {fondo:"terminal", actores:[{tipo:"heroe", x:0.3}, {tipo:"npc", de:"S", x:0.72, mira:-1}]},
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.25, gesto:"sorpresa"},
            {tipo:"cosa", arte:"pasaporte", x:0.62, y:0.62, tam:0.3, anim:"quieto"},
            {tipo:"efecto", cual:"zzz", x:0.68, y:0.45}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"salto"},
            {tipo:"cosa", arte:"pasaporte", x:0.65, y:0.62, tam:0.3, anim:"saltar"}
          ]
        },
        {
          fondo: "terminal",
          actores: [
            {tipo:"heroe", x:0.3, gesto:"saludo"},
            {tipo:"cosa", arte:"pasaporte", x:0.62, y:0.55, tam:0.34, anim:"latir"},
            {tipo:"efecto", cual:"estrellas", x:0.62, y:0.45}
          ]
        }
      ]
    },
    W: {
      item: "avion",
      ventana: true,
      npc: {kind:"bear", fur:"#D8B48A", fur2:"#F7E7D2", hat:"#FFFFFF", seed:0.2},
      escenas: [
        {
          fondo: "ventana",
          actores: [{tipo:"heroe", x:0.25}, {tipo:"cosa", arte:"avion", x:0.65, y:0.38, tam:0.26, anim:"flotar"}]
        },
        {fondo:"cielo", actores:[{tipo:"cosa", arte:"avion", x:0.5, y:0.66, tam:0.4, anim:"quieto"}]},
        {
          fondo: "ventana",
          actores: [{tipo:"heroe", x:0.3, gesto:"salto"}, {tipo:"cosa", arte:"avion", x:0.68, y:0.38, tam:0.3, anim:"latir"}]
        },
        {
          fondo: "cielo",
          actores: [
            {tipo:"cosa", arte:"avion", x:0.5, tam:0.4, anim:"volar"},
            {tipo:"efecto", cual:"estrellas", x:0.5, y:0.3}
          ]
        }
      ]
    }
  },
  final: {npc:{kind:"bunny", fur:"#D9C4AE", fur2:"#FFF6EC", inner:"#FFB3C7", hat:"#2FBF8F", seed:1.9}, arte:"pasaje"},
  microjuego: {id:"vuelo", arte:"avion", precio:3, color:"#2E86DE"},
  palabrasExtra: ["ascensor", "escalera", "puerta", "gorra", "mochila"],
  frasesExtra: ["globo", "corazon", "globo", "puerta", "ascensor", "avion"],
  preguntas: [
    {ok:"alfajor", no:["valija", "pasaporte"]},
    {ok:"pasaporte", no:["mapa", "alfajor"]},
    {ok:"valija", no:["bano", "pasaje"]},
    {ok:"mapa", no:["avion", "mochila"]},
    {ok:"pasaje", no:["alfajor", "puerta"]},
    {ok:"ascensor", no:["valija", "mapa"]},
    {ok:"gorra", no:["mochila", "pasaje"]},
    {ok:"mochila", no:["avion", "bano"]},
    {ok:"avion", no:["valija", "ascensor"]},
    {ok:"bano", no:["mapa", "pasaporte"]}
  ]
});
