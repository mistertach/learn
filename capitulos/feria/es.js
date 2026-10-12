/* =========================================================
   CAPÍTULO 5 · LA FERIA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('feria', 'es', {
  titulo: "La feria",
  lugar: {texto:"la feria", silabas:["la", "fe", "ria"]},
  bienvenida: "¡Llegamos a la feria!",
  niveles: [{nombre:"La entrada", numTexto:"cero"}, {nombre:"Las verduras", numTexto:"uno"}, {nombre:"La caja", numTexto:"dos"}],
  // del 1 al 10 (los usa el microjuego para contar las frutas)
  numeros: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"],
  estaciones: {
    M: {
      palabra: {texto:"la manzana", silabas:["la", "man", "za", "na"]},
      intro: "Esta es la feria. ¡Mirá cuántas frutas!",
      frase: {texto:"Quiero tres manzanas, por favor.", partes:["Quiero tres manzanas,", "por favor."]},
      respuesta: "¡Acá tenés: una, dos, tres!",
      cuento: {
        titulo: "La manzana que se escapó",
        paginas: [
          "En la feria había *manzanas* rojas y brillantes.",
          "«Quiero tres manzanas, por favor», dijo {N}. «¡Una, dos, tres!»",
          "¡Uy! Una manzana se cayó y salió rodando por el piso.",
          "{N} la alcanzó y la puso en la canasta. ¡Tres manzanas!"
        ]
      }
    },
    N: {
      palabra: {texto:"la banana", silabas:["la", "ba", "na", "na"]},
      intro: "¡Qué bananas tan amarillas!",
      frase: {texto:"¿Cuánto cuesta la banana?", partes:["¿Cuánto cuesta", "la banana?"]},
      respuesta: "¡Un pececito!",
      cuento: {
        titulo: "Un pececito",
        paginas: [
          "El perrito vendía *bananas* amarillas.",
          "«¿Cuánto cuesta la banana?», preguntó {N}. «¡Un pececito!»",
          "{N} pagó con un pececito, ¡y la banana dio un salto!",
          "¡Qué rica la banana! ¡Hurra!"
        ]
      }
    },
    O: {
      palabra: {texto:"la naranja", silabas:["la", "na", "ran", "ja"]},
      intro: "Acá hay naranjas para hacer jugo.",
      frase: {texto:"Dos naranjas, por favor.", partes:["Dos naranjas,", "por favor."]},
      respuesta: "¡Una, dos! ¡Qué jugosas!",
      cuento: {
        titulo: "El jugo de naranja",
        paginas: [
          "La gatita tenía *naranjas* redondas y jugosas.",
          "«Dos naranjas, por favor», dijo {N}.",
          "La gatita las exprimió: ¡un vaso lleno de jugo!",
          "{N} tomó el jugo. ¡Mmm, qué fresquito!"
        ]
      }
    },
    Z: {
      palabra: {texto:"la zanahoria", silabas:["la", "za", "na", "ho", "ria"]},
      intro: "Al conejo le encantan las zanahorias.",
      frase: {texto:"La zanahoria es naranja.", partes:["La zanahoria", "es naranja."]},
      respuesta: "¡Y es larga, larga!",
      cuento: {
        titulo: "El conejo y la zanahoria",
        paginas: [
          "El conejo cuidaba su puesto de *zanahorias*.",
          "{N} vio una zanahoria enorme. «La zanahoria es naranja», dijo.",
          "El conejo saltó de alegría: ¡es su comida favorita!",
          "Comieron zanahorias juntos: crunch, crunch."
        ]
      }
    },
    F: {
      palabra: {texto:"la frutilla", silabas:["la", "fru", "ti", "lla"]},
      intro: "Mirá estas frutillas rojas.",
      frase: {texto:"La frutilla es chiquita.", partes:["La frutilla", "es chiquita."]},
      respuesta: "¡Chiquita y muy rica!",
      cuento: {
        titulo: "Las frutillas chiquitas",
        paginas: [
          "En una cajita había *frutillas* rojas.",
          "«¡La frutilla es chiquita!», dijo {N} con sorpresa.",
          "{N} probó una: ¡qué dulce!",
          "Chiquita, pero muy rica. ¡Gracias!"
        ]
      }
    },
    S: {
      palabra: {texto:"la sandía", silabas:["la", "san", "dí", "a"]},
      intro: "¡Uy! ¿Viste esa sandía?",
      frase: {texto:"¡La sandía es grande!", partes:["¡La sandía", "es grande!"]},
      respuesta: "¡Sí, enorme! ¡Pesa mucho!",
      cuento: {
        titulo: "La sandía gigante",
        paginas: [
          "¡En la feria había *una sandía* gigante!",
          "«¡La sandía es grande!», dijo {N}.",
          "¡Uy! La sandía se escapó y salió rodando… ¡a correrla!",
          "Por fin la atraparon. ¡Qué sandía tan grande!"
        ]
      }
    },
    B: {
      palabra: {texto:"la balanza", silabas:["la", "ba", "lan", "za"]},
      intro: "Esta es la balanza. Sirve para pesar las frutas.",
      frase: {texto:"¿Cuánto pesa?", partes:["¿Cuánto", "pesa?"]},
      respuesta: "¡Pesa un kilo!",
      cuento: {
        titulo: "La balanza",
        paginas: [
          "El perro de la feria tenía *una balanza* roja.",
          "{N} puso una banana. «¿Cuánto pesa?» ¡Poquito!",
          "Después pusieron la sandía… ¡la balanza dio un salto!",
          "«¡Pesa muchísimo!», se rio {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "¡Son cinco pececitos!",
    frase: {texto:"¡Acá tenés! ¡Gracias!", partes:["¡Acá tenés!", "¡Gracias!"]},
    despedida: "¡Buena compra!",
    chau: "¡Chau, feria!",
    lograste: "¡Lo lograste! ¡Hiciste todas las compras!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡a pagar en la caja!",
    ppFinal: "Juntá todos los sellos y después, ¡a pagar en la caja!",
    otraVez: "¡Otro día de feria! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego que se abre al terminar el lugar (las frutas van en el orden de base.js)
  // uno = "una manzana", plural = "manzanas"; n es el número ya escrito ("tres")
  microjuego: {
    cortar: "¡Ahora, a cortar frutas! Pasá el dedo por arriba.", cortadas: "¡Cortaste {n} frutas!",
    titulo: "¡Llená la canasta!",
    intro: "Escuchá qué fruta quiero y cuántas. ¡Tocala para ponerla en la canasta!",
    fin: "¡Pusiste {n} frutas en la canasta!",
    pon: (n,g) => n==='uno' ? `Poné ${g.uno} en la canasta.` : `Poné ${n} ${g.plural} en la canasta.`,
    son: (n,g) => n==='uno' ? `¡${may(g.uno)}!` : `¡${may(n)} ${g.plural}!`,
    esa: g => `¡Esa no! Buscá ${g.texto}.`,
    ingredientes: [
      {texto:"la manzana", uno:"una manzana", plural:"manzanas"},
      {texto:"la banana", uno:"una banana", plural:"bananas"},
      {texto:"la naranja", uno:"una naranja", plural:"naranjas"},
      {texto:"la frutilla", uno:"una frutilla", plural:"frutillas"},
      {texto:"la pera", uno:"una pera", plural:"peras"},
      {texto:"el limón", uno:"un limón", plural:"limones"}
    ]
  },
  palabrasExtra: [
    {texto:"la pera", silabas:["la", "pe", "ra"]},
    {texto:"el limón", silabas:["el", "li", "món"]},
    {texto:"la canasta", silabas:["la", "ca", "nas", "ta"]},
    {texto:"la bolsa", silabas:["la", "bol", "sa"]}
  ],
  frasesExtra: [
    {texto:"¿Cuánto cuesta?", partes:["¿Cuánto", "cuesta?"]},
    {texto:"¡Es grande!", partes:["¡Es grande!"]},
    {texto:"Es chiquita.", partes:["Es chiquita."]},
    {texto:"Una bolsa, por favor.", partes:["Una bolsa,", "por favor."]},
    {texto:"¡Qué rica!", partes:["¡Qué rica!"]}
  ],
  preguntas: [
    {p:"¿Qué fruta es larga y amarilla?", r:"¡La banana!"},
    {p:"¿Con qué fruta hacemos jugo?", r:"¡Con la naranja!"},
    {p:"¿Qué fruta es grande, grande?", r:"¡La sandía!"},
    {p:"¿Qué le gusta comer al conejo?", r:"¡La zanahoria!"},
    {p:"¿Qué fruta es roja y chiquita?", r:"¡La frutilla!"},
    {p:"¿Con qué pesamos las frutas?", r:"¡Con la balanza!"},
    {p:"¿Qué fruta es roja y redonda?", r:"¡La manzana!"},
    {p:"¿Qué fruta es amarilla y ácida?", r:"¡El limón!"},
    {p:"¿Dónde ponemos las frutas?", r:"¡En la canasta!"},
    {p:"¿Qué fruta es verde y tiene forma de gota?", r:"¡La pera!"}
  ],
  objetos: {"#":"la pared", p:"la planta", c:"el cajón de frutas", "~":"la puerta"}
});
})();
