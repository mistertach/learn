/* =========================================================
   CAPÍTULO 6 · LA PLAZA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('plaza', 'es', {
  titulo: "La plaza",
  lugar: {texto:"la plaza", silabas:["la", "pla", "za"]},
  bienvenida: "¡Llegamos a la plaza!",
  niveles: [{nombre:"Las hamacas", numTexto:"cero"}, {nombre:"El arenero", numTexto:"uno"}, {nombre:"La torre", numTexto:"dos"}],
  estaciones: {
    H: {
      palabra: {texto:"la hamaca", silabas:["la", "ha", "ma", "ca"]},
      intro: "Estas son las hamacas. ¡Vamos a hamacarnos!",
      frase: {texto:"¡Empujame, por favor!", partes:["¡Empujame,", "por favor!"]},
      respuesta: "¡Allá vamos! ¡Más alto!",
      cuento: {
        titulo: "Más alto",
        paginas: [
          "El osito se hamacaba en *la hamaca*: ¡para adelante y para atrás!",
          "«¡Empujame, por favor!», le pidió {N}.",
          "¡Más alto, más alto! {N} levantó los brazos: ¡parecía que volaba!",
          "Después le tocó al osito. ¡Qué lindo es hamacarse!"
        ]
      }
    },
    S: {
      palabra: {texto:"el subibaja", silabas:["el", "su", "bi", "ba", "ja"]},
      intro: "¡El subibaja! Para jugar hace falta un amigo.",
      frase: {texto:"¡Arriba y abajo!", partes:["¡Arriba", "y abajo!"]},
      respuesta: "¡Subo yo, bajás vos!",
      cuento: {
        titulo: "Arriba y abajo",
        paginas: [
          "*El subibaja* estaba solito, esperando amigos.",
          "La conejita le preguntó a {N}: «¿Jugamos?»",
          "¡Arriba y abajo! ¡Arriba y abajo! ¡Salta la conejita, salta {N}!",
          "¡Qué divertido! Los dos aplaudieron."
        ]
      }
    },
    O: {
      palabra: {texto:"la pelota", silabas:["la", "pe", "lo", "ta"]},
      intro: "Acá se juega a la pelota.",
      frase: {texto:"¡Pateo la pelota!", partes:["¡Pateo", "la pelota!"]},
      respuesta: "¡Gooool!",
      cuento: {
        titulo: "¡Gol!",
        paginas: [
          "El perrito tenía *una pelota* que picaba y picaba.",
          "{N} corrió, corrió y… ¡pateó la pelota!",
          "¡Uy! La pelota se fue rodando lejos, lejos.",
          "¡Y entró en el arco! ¡Gooool! {N} saltó de alegría."
        ]
      }
    },
    A: {
      palabra: {texto:"el balde", silabas:["el", "bal", "de"]},
      intro: "Este es el arenero. ¡Hay balde y pala!",
      frase: {texto:"Hago un castillo de arena.", partes:["Hago un castillo", "de arena."]},
      respuesta: "¡Qué castillo tan lindo!",
      cuento: {
        titulo: "El castillo de arena",
        paginas: [
          "La gatita tenía *un balde* rojo y una pala azul.",
          "{N} se agachó y llenó el balde de arena.",
          "Lo dio vuelta y… ¡apareció un castillo!",
          "«¡Qué castillo tan lindo!», aplaudieron todos."
        ]
      }
    },
    J: {
      palabra: {texto:"la soga", silabas:["la", "so", "ga"]},
      intro: "¿Sabés saltar la soga?",
      frase: {texto:"¡Salto la soga!", partes:["¡Salto", "la soga!"]},
      respuesta: "¡Uno, dos, tres! ¡Muy bien!",
      cuento: {
        titulo: "Salta que salta",
        paginas: [
          "El gatito gris tenía *una soga* para saltar.",
          "{N} saltó: ¡uno, dos, tres!",
          "El gatito también saltó. ¡Saltaban los dos juntos!",
          "¡Diez saltos! ¡Brazos arriba!"
        ]
      }
    },
    B: {
      palabra: {texto:"las burbujas", silabas:["las", "bur", "bu", "jas"]},
      intro: "¡Mirá cuántas burbujas!",
      frase: {texto:"¡Soplo burbujas!", partes:["¡Soplo", "burbujas!"]},
      respuesta: "¡Mirá cómo vuelan!",
      cuento: {
        titulo: "Las burbujas",
        paginas: [
          "La conejita tenía un frasco de *burbujas*.",
          "{N} sopló despacito: ¡fuuu!",
          "¡Burbujas por todos lados! {N} giraba y giraba entre las burbujas.",
          "Y todos bailaron debajo de las burbujas."
        ]
      }
    },
    T: {
      palabra: {texto:"el tobogán", silabas:["el", "to", "bo", "gán"]},
      intro: "Este es el tobogán. ¡Es muy alto!",
      frase: {texto:"¡Me tiro por el tobogán!", partes:["¡Me tiro", "por el tobogán!"]},
      respuesta: "¡Uiii! ¡Qué rápido!",
      cuento: {
        titulo: "El tobogán gigante",
        paginas: [
          "En la torre había *un tobogán* amarillo, ¡altísimo!",
          "{N} subió la escalera: un escalón, dos escalones…",
          "«¡Me tiro por el tobogán!» ¡Uiiii! ¡Qué rápido!",
          "{N} saltó de alegría: «¡Otra vez!»"
        ]
      }
    }
  },
  final: {
    pregunta: "¿Jugamos a Simón dice?",
    frase: {texto:"¡Sí! ¡Juguemos!", partes:["¡Sí!", "¡Juguemos!"]},
    // lo que dice Simón, en el orden de base.js: saltar, girar, aplaudir, agacharse, arriba
    ordenes: ["Simón dice: ¡saltá!", "Simón dice: ¡girá!", "Simón dice: ¡aplaudí!", "Simón dice: ¡agachate!", "Simón dice: ¡brazos arriba!"],
    despedida: "¡Qué bien jugaste!",
    chau: "¡Chau, plaza!",
    lograste: "¡Lo lograste! ¡Jugaste a todo en la plaza!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡vamos a jugar a Simón dice!",
    ppFinal: "Juntá todos los sellos y después, ¡a jugar a Simón dice!",
    otraVez: "¡Otra tarde en la plaza! Juntá los sellos otra vez.",
    otraVezB: "Otra tarde"
  },
  // el microjuego: arriba, abajo, izquierda, derecha ({n} = cuántas estrellas atrapó)
  microjuego: {
    titulo: "¡El barrilete!",
    intro: "¡Hay viento! Escuchá y llevá el barrilete hasta la estrella.",
    fin: "¡Atrapaste {n} estrellas!",
    dirs: ["¡Arriba!", "¡Abajo!", "¡A la izquierda!", "¡A la derecha!"]
  },
  palabrasExtra: [
    {texto:"el barrilete", silabas:["el", "ba", "rri", "le", "te"]},
    {texto:"la pala", silabas:["la", "pa", "la"]},
    {texto:"el castillo", silabas:["el", "cas", "ti", "llo"]},
    {texto:"el helado", silabas:["el", "he", "la", "do"]}
  ],
  frasesExtra: [
    {texto:"¡Te toca a vos!", partes:["¡Te toca", "a vos!"]},
    {texto:"¡Me toca a mí!", partes:["¡Me toca", "a mí!"]},
    {texto:"¡Salto muy alto!", partes:["¡Salto", "muy alto!"]},
    {texto:"¡Corré, corré!", partes:["¡Corré,", "corré!"]},
    {texto:"¡Quiero un helado!", partes:["¡Quiero", "un helado!"]}
  ],
  preguntas: [
    {p:"¿Por dónde nos tiramos? ¡Uiii!", r:"¡Por el tobogán!"},
    {p:"¿Dónde nos hamacamos?", r:"¡En la hamaca!"},
    {p:"¿Qué pateamos?", r:"¡La pelota!"},
    {p:"¿Qué soplamos?", r:"¡Las burbujas!"},
    {p:"¿Con qué saltamos?", r:"¡Con la soga!"},
    {p:"¿Dónde subimos y bajamos?", r:"¡En el subibaja!"},
    {p:"¿Qué hacemos con la arena?", r:"¡Un castillo!"},
    {p:"¿Qué vuela con el viento?", r:"¡El barrilete!"},
    {p:"¿Qué comemos cuando hace calor?", r:"¡Un helado!"},
    {p:"¿Dónde ponemos la arena?", r:"¡En el balde!"}
  ],
  objetos: {"#":"la reja", r:"el árbol", f:"las flores", b:"el banco", k:"el arenero", "~":"la puerta"}
});
