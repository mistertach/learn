/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('primeras', 'es', {
  titulo: "¡Hola!",
  lugar: {texto:"la casita", silabas:["la", "ca", "si", "ta"]},
  bienvenida: "¡Llegamos a la casita del árbol!",
  niveles: [{nombre:"El jardín", numTexto:"cero"}, {nombre:"El tronco", numTexto:"uno"}, {nombre:"La casita", numTexto:"dos"}],
  estaciones: {
    H: {
      palabra: {texto:"hola", silabas:["ho", "la"]},
      intro: "Cuando llegamos, decimos hola.",
      frase: {texto:"¡Hola! ¿Cómo estás?", partes:["¡Hola!", "¿Cómo estás?"]},
      respuesta: "¡Muy bien!",
      cuento: {
        titulo: "¡Hola, amiga!",
        paginas: [
          "La conejita dice *hola* moviendo la mano.",
          "{N} la saludó: «¡Hola! ¿Cómo estás?»",
          "«¡Muy bien!», dijo la conejita, y dio un salto.",
          "¡Ya son amigos!"
        ]
      }
    },
    S: {
      palabra: {texto:"sí", silabas:["sí"]},
      intro: "Cuando queremos algo, decimos sí.",
      frase: {texto:"¡Sí, por favor!", partes:["¡Sí,", "por favor!"]},
      respuesta: "¡Acá tenés!",
      cuento: {
        titulo: "El alfajor",
        paginas: [
          "El osito tenía un alfajor. «¿Querés?»",
          "«¡*Sí*, por favor!», dijo {N}.",
          "¡Mmm, qué rico!",
          "«¡Gracias, osito!»"
        ]
      }
    },
    N: {
      palabra: {texto:"no", silabas:["no"]},
      intro: "Cuando no queremos algo, decimos no.",
      frase: {texto:"No, gracias.", partes:["No,", "gracias."]},
      respuesta: "¡Está bien!",
      cuento: {
        titulo: "La sopa",
        paginas: [
          "El perrito trajo sopa caliente.",
          "{N} no tenía hambre. «*No*, gracias.»",
          "«¡Está bien!», dijo el perrito.",
          "Más tarde comieron un helado. ¡Ese sí!"
        ]
      }
    },
    G: {
      palabra: {texto:"gracias", silabas:["gra", "cias"]},
      intro: "Cuando nos dan algo, decimos gracias.",
      frase: {texto:"¡Muchas gracias!", partes:["¡Muchas", "gracias!"]},
      respuesta: "¡De nada!",
      cuento: {
        titulo: "La flor",
        paginas: [
          "La gatita tenía un corazón enorme.",
          "Le regaló una flor a {N}.",
          "«¡Muchas *gracias*!», dijo {N}.",
          "«¡De nada!» ¡Qué lindo es dar las gracias!"
        ]
      }
    },
    A: {
      palabra: {texto:"el agua", silabas:["el", "a", "gua"]},
      intro: "Cuando tenemos sed, pedimos agua.",
      frase: {texto:"Quiero agua.", partes:["Quiero", "agua."]},
      respuesta: "¡Tomá, acá tenés!",
      cuento: {
        titulo: "¡Qué calor!",
        paginas: [
          "¡Qué calor! {N} tenía sed.",
          "«Quiero *agua*», le dijo al oso.",
          "¡Glu, glu, glu! ¡Qué fresquita!",
          "«¡Gracias!» ¡Ya no hay más sed!"
        ]
      }
    },
    M: {
      palabra: {texto:"más", silabas:["más"]},
      intro: "Cuando queremos otra vez, decimos más.",
      frase: {texto:"¡Más, por favor!", partes:["¡Más,", "por favor!"]},
      respuesta: "¡Uno más!",
      cuento: {
        titulo: "¡Más pelotas!",
        paginas: [
          "El gatito tiraba pelotas: ¡una!",
          "«¡*Más*, por favor!», aplaudió {N}. ¡Dos, tres!",
          "¡Más y más! ¡Cuántas burbujas!",
          "¡Y bailaron hasta cansarse!"
        ]
      }
    },
    C: {
      palabra: {texto:"chau", silabas:["chau"]},
      intro: "Cuando nos vamos, decimos chau.",
      frase: {texto:"¡Chau! ¡Hasta mañana!", partes:["¡Chau!", "¡Hasta mañana!"]},
      respuesta: "¡Chau, chau!",
      cuento: {
        titulo: "Hasta mañana",
        paginas: [
          "Ya era de noche. Salió la luna.",
          "«¡*Chau*! ¡Hasta mañana!», saludó {N}.",
          "El perro se fue a dormir: zzz…",
          "¡Chau, chau! ¡Hasta mañana!"
        ]
      }
    }
  },
  final: {
    pregunta: "¡Ya sabés un montón de palabras! ¿Vamos de aventura?",
    frase: {texto:"¡Sí! ¡Vamos!", partes:["¡Sí!", "¡Vamos!"]},
    // lo que dice cada amigo al final, en el orden de base.js
    palabras: ["¡Hola!", "¡Sí!", "¡No!", "¡Gracias!", "¡Agua!", "¡Más!", "¡Chau!"],
    despedida: "¡A la aventura!",
    chau: "¡Chau, casita!",
    lograste: "¡Lo lograste! ¡Ya sabés tus primeras palabras!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡tus amigos te esperan!",
    ppFinal: "Juntá todos los sellos y después, ¡a saludar a los amigos!",
    otraVez: "¡Otro día en la casita! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego: c es el nombre del color ("rojo")
  microjuego: {
    titulo: "¡Burbujas de colores!",
    intro: "Escuchá el color y reventá esa burbuja.",
    pide: c => `¡Reventá una burbuja de color ${c}!`,
    esa: c => `¡Ese es el ${c}!`,
    libre: "¡Ahora reventá todas las que quieras!",
    fin: "¡Reventaste {n} burbujas!"
  },
  palabrasExtra: [
    {texto:"rojo", silabas:["ro", "jo"]},
    {texto:"azul", silabas:["a", "zul"]},
    {texto:"amarillo", silabas:["a", "ma", "ri", "llo"]},
    {texto:"verde", silabas:["ver", "de"]}
  ],
  frasesExtra: [
    {texto:"¿Cómo te llamás?", partes:["¿Cómo", "te llamás?"]},
    {texto:"¡Buen día!", partes:["¡Buen", "día!"]},
    {texto:"¡Buenas noches!", partes:["¡Buenas", "noches!"]},
    {texto:"¡Te quiero!", partes:["¡Te quiero!"]},
    {texto:"¡Otra vez!", partes:["¡Otra vez!"]}
  ],
  preguntas: [
    {p:"¿Qué decimos cuando llegamos?", r:"¡Hola!"},
    {p:"¿Qué decimos cuando nos vamos?", r:"¡Chau!"},
    {p:"¿Cuál dice que sí?", r:"¡Este!"},
    {p:"¿Cuál dice que no?", r:"¡Este!"},
    {p:"¿Qué decimos cuando nos regalan algo?", r:"¡Gracias!"},
    {p:"¿Qué tomamos cuando tenemos sed?", r:"¡Agua!"},
    {p:"¿Qué pedimos cuando queremos otra vez?", r:"¡Más!"},
    {p:"¿Cuál es el rojo?", r:"¡Este!"},
    {p:"¿Cuál es el azul?", r:"¡Este!"},
    {p:"¿Cuál es el amarillo?", r:"¡Este!"}
  ],
  objetos: {"#":"la cerca", r:"el árbol", f:"las flores", b:"el banco", j:"los juguetes", s:"el sillón", "~":"la puerta"}
});
