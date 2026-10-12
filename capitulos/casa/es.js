/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('casa', 'es', {
  titulo: "Nuestra casa",
  lugar: {texto:"nuestra casa", silabas:["nues", "tra", "ca", "sa"]},
  bienvenida: "¡Llegamos a casa!",
  niveles: [{nombre:"El jardín", numTexto:"cero"}, {nombre:"Planta baja", numTexto:"uno"}, {nombre:"Arriba", numTexto:"dos"}],
  estaciones: {
    R: {
      palabra: {texto:"el perro", silabas:["el", "pe", "rro"]},
      intro: "Este es el jardín. ¡Ahí está nuestro perro!",
      frase: {texto:"¡Vení, perrito!", partes:["¡Vení,", "perrito!"]},
      respuesta: "¡Guau, guau!",
      cuento: {
        titulo: "El perro saltarín",
        paginas: [
          "En el jardín, *el perro* movía la cola.",
          "—¡Vení, perrito! —lo llamó {N}.",
          "El perro saltó tan alto… ¡que se cayó en las flores!",
          "{N} le dio un abrazo. ¡Guau, guau!"
        ]
      }
    },
    A: {
      palabra: {texto:"el papá", silabas:["el", "pa", "pá"]},
      intro: "Este es el living. Papá está leyendo el diario.",
      frase: {texto:"¡Buenos días, papá!", partes:["¡Buenos días,", "papá!"]},
      respuesta: "¡Buenos días, mi amor! ¿Dormiste bien?",
      cuento: {
        titulo: "El diario volador",
        paginas: [
          "*Papá* leía el diario en el sillón.",
          "—¡Buenos días, papá! —dijo {N}.",
          "¡Fiuuu! Una hoja del diario salió volando por la ventana.",
          "Papá se rió: —¡No importa! ¡Mejor juguemos juntos!"
        ]
      }
    },
    M: {
      palabra: {texto:"la mamá", silabas:["la", "ma", "má"]},
      intro: "Esta es la cocina. ¡Mamá está cocinando!",
      frase: {texto:"¡Hola, mamá! ¿Cómo estás?", partes:["¡Hola, mamá!", "¿Cómo estás?"]},
      respuesta: "¡Muy bien, gracias! ¿Y vos?",
      cuento: {
        titulo: "La sopa de mamá",
        paginas: [
          "En la cocina, *mamá* hacía una sopa.",
          "—¡Hola, mamá! ¿Cómo estás? —preguntó {N}.",
          "—¡Muy bien! ¿Querés probar? —dijo mamá.",
          "¡Mmm! La sopa de mamá es la más rica del mundo."
        ]
      }
    },
    H: {
      palabra: {texto:"el hermano", silabas:["el", "her", "ma", "no"]},
      intro: "Tu hermano tiene muchos juguetes.",
      frase: {texto:"¿Jugamos juntos?", partes:["¿Jugamos", "juntos?"]},
      respuesta: "¡Sí! ¡Dale, juguemos!",
      cuento: {
        titulo: "La torre de bloques",
        paginas: [
          "*El hermano* de {N} armó una torre de bloques.",
          "—¿Jugamos juntos? —le preguntó {N}.",
          "La torre creció, creció… ¡y se cayó! ¡Pum!",
          "Los dos se rieron mucho y la armaron otra vez."
        ]
      }
    },
    E: {
      palabra: {texto:"la hermana", silabas:["la", "her", "ma", "na"]},
      intro: "Tu hermana está en su cuarto, leyendo.",
      frase: {texto:"¿Me leés un cuento?", partes:["¿Me leés", "un cuento?"]},
      respuesta: "¡Claro que sí!",
      cuento: {
        titulo: "El cuento de la hermana",
        paginas: [
          "*La hermana* de {N} tenía un libro de dragones.",
          "—¿Me leés un cuento? —le pidió {N}.",
          "—Había una vez un dragón que tenía miedo de la oscuridad…",
          "{N} escuchó todo el cuento, bien cerquita de su hermana."
        ]
      }
    },
    B: {
      palabra: {texto:"el bebé", silabas:["el", "be", "bé"]},
      intro: "¡Shhh! El bebé está en la cuna.",
      frase: {texto:"¡Shhh! El bebé duerme.", partes:["¡Shhh!", "El bebé duerme."]},
      respuesta: "Gu, gu… ta, ta.",
      cuento: {
        titulo: "El bebé que no dormía",
        paginas: [
          "*El bebé* estaba en la cuna, ¡pero no se quería dormir!",
          "—¡Shhh! —dijo {N}, y le cantó una canción.",
          "El bebé bostezó: aaah…",
          "Y se quedó dormidito. ¡Shhh! El bebé duerme."
        ]
      }
    },
    C: {
      palabra: {texto:"la cama", silabas:["la", "ca", "ma"]},
      intro: "Este es tu cuarto. ¡Mirá qué linda cama!",
      frase: {texto:"¡Buenas noches!", partes:["¡Buenas", "noches!"]},
      respuesta: "¡Que duermas bien! Hasta mañana.",
      cuento: {
        titulo: "A dormir",
        paginas: [
          "Ya era de noche. {N} se puso el pijama.",
          "Saltó a *la cama*: ¡boing, boing!",
          "Papá le dio un beso: —¡Buenas noches!",
          "—¡Hasta mañana! —dijo {N}, y cerró los ojos."
        ]
      }
    }
  },
  final: {
    pregunta: "¡Hola, mi tesoro! ¿Cómo estás?",
    frase: {texto:"¡Muy bien! ¡Te quiero mucho, abuela!", partes:["¡Muy bien!", "¡Te quiero mucho,", "abuela!"]},
    despedida: "¡Un beso grande!",
    chau: "¡Chau, abuela! ¡Chau!",
    lograste: "¡Lo lograste! ¡Saludaste a toda la familia!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡la abuela te llama por teléfono!",
    ppFinal: "Juntá todos los sellos y después, ¡a hablar con la abuela!",
    otraVez: "¡Otro día en casa! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego que se abre al terminar el lugar (los ingredientes van en el orden de base.js)
  microjuego: {
    titulo: "¡La torta de la familia!",
    intro: "¡Decorá la torta! Tocá algo rico, y después tocá la torta.",
    soplar: "¡A soplar las velas!",
    mas: "¡Poné algunas cosas más!",
    listo: "¡Qué linda torta! ¡Hurra!",
    ingredientes: [{texto:"la crema"}, {texto:"la frutilla"}, {texto:"el chocolate"}, {texto:"los confites"}, {texto:"la cereza"}, {texto:"la vela"}]
  },
  palabrasExtra: [
    {texto:"la abuela", silabas:["la", "a", "bue", "la"]},
    {texto:"el abuelo", silabas:["el", "a", "bue", "lo"]},
    {texto:"la familia", silabas:["la", "fa", "mi", "lia"]},
    {texto:"el sillón", silabas:["el", "si", "llón"]},
    {texto:"el teléfono", silabas:["el", "te", "lé", "fo", "no"]}
  ],
  frasesExtra: [
    {texto:"¡Buenos días!", partes:["¡Buenos", "días!"]},
    {texto:"¿Cómo estás?", partes:["¿Cómo", "estás?"]},
    {texto:"Muy bien, gracias.", partes:["Muy bien,", "gracias."]},
    {texto:"¡Te quiero!", partes:["¡Te quiero!"]},
    {texto:"¡Hasta mañana!", partes:["¡Hasta", "mañana!"]}
  ],
  preguntas: [
    {p:"¿Quién cocina la sopa?", r:"¡Mamá!"},
    {p:"¿Quién lee el diario en el sillón?", r:"¡Papá!"},
    {p:"¿Quién hace guau, guau?", r:"¡El perro!"},
    {p:"¿Dónde dormimos?", r:"¡En la cama!"},
    {p:"¿Quién es el más chiquito de la familia?", r:"¡El bebé!"},
    {p:"¿Con qué hablamos con la abuela?", r:"¡Con el teléfono!"},
    {p:"¿Quién nos lee cuentos?", r:"¡La hermana!"},
    {p:"¿Quién arma torres de bloques?", r:"¡El hermano!"},
    {p:"¿Quién nos llama por teléfono?", r:"¡La abuela!"},
    {p:"¿Dónde nos sentamos a descansar?", r:"¡En el sillón!"}
  ],
  objetos: {"#":"la pared", b:"el banco", p:"la planta", m:"la mesa", f:"las flores", r:"el árbol", s:"el sillón", j:"los juguetes", "~":"la puerta"}
});
