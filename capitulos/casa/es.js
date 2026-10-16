/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('casa', 'es', {
  charlas: [
    {titulo:"Charlar con papá", chau:"¡Te quiero mucho! ¡Hasta luego!", pasos:[
      {di:"¡Buenos días! ¿Dormiste bien?", op:[{t:"¡Sí, dormí muy bien!", r:"¡Qué bueno! Tenés buena cara."}, {t:"Sí, soñé cosas lindas.", r:"¡Qué lindo! Los sueños lindos son los mejores."}]},
      {op:[{t:"¿Qué estás leyendo, papá?", r:"Estoy leyendo el diario."}, {t:"¿Querés jugar?", r:"¡Claro! Juguemos juntos."}]},
      {di:"¿Qué querés desayunar?", op:[{t:"Quiero leche, por favor.", r:"Acá tenés tu leche. ¡A disfrutar!"}, {t:"Quiero pan, por favor.", r:"Acá tenés tu pan. ¡Qué rico!"}]},
      {op:[{t:"¿Vos también tenés hambre, papá?", r:"¡Sí, muchísima!"}, {t:"¿Te puedo ayudar?", r:"¡Sí, gracias! Me ayudás un montón."}]}]},
    {titulo:"Charlar con mamá", chau:"¡Vení, un abrazo grande! Ya casi almorzamos.", pasos:[
      {di:"¡Hola, mi amor! ¿Cómo estás?", op:[{t:"¡Muy bien, gracias!", r:"¡Qué alegría escucharte!"}, {t:"Tengo un poco de sueño.", r:"Entonces descansamos después del almuerzo."}]},
      {op:[{t:"¿Qué estás cocinando, mamá?", r:"Estoy haciendo sopa. ¡Tu favorita!"}, {t:"¿Puedo probar?", r:"¡Claro! Cuidado, que está caliente."}]},
      {di:"¿Querés más sopa?", op:[{t:"¡Sí, por favor!", r:"¡Acá tenés!"}, {t:"No, gracias. ¡Estaba riquísima!", r:"¡Me alegra que te haya gustado!"}]},
      {op:[{t:"¿Te ayudo, mamá?", r:"¡Sí! ¿Ponés la mesa?"}, {t:"¿Ya está lista?", r:"¡Casi! Un minutito más."}]}]},
    {titulo:"Charlar con tu hermana", chau:"¡Sos lo mejor! ¡Nos vemos más tarde!", pasos:[
      {di:"¡Hola! ¿Querés leer un libro conmigo?", op:[{t:"¡Sí! Me encantan los libros.", r:"¡A mí también! Sentémonos acá."}, {t:"No, quiero jugar.", r:"¡Bueno! Primero jugamos y después leemos."}]},
      {op:[{t:"¿Cuál es tu color favorito?", r:"¡El violeta! ¿Y el tuyo?"}, {t:"¿De qué es este libro?", r:"Es un cuento de un perrito."}]},
      {di:"¿Te gusta este cuento?", op:[{t:"¡Sí, es divertido!", r:"¡A mí también! Lo leemos de nuevo."}, {t:"¡Sí, es hermoso!", r:"¡Qué bueno! Es mi favorito."}]},
      {op:[{t:"¿Jugamos ahora?", r:"¡Sí! ¡Vamos a jugar!"}, {t:"¿Querés un abrazo?", r:"¡Sí, un abrazo grande!"}]}]},
    {titulo:"Charlar con la abuela", chau:"¡Besos grandes, mi amor! ¡Chau, chau!", pasos:[
      {di:"¡Hola, mi cielo! ¡Te extraño tanto!", op:[{t:"¡Yo también te extraño, abuela!", r:"¡Qué dulce sos!"}, {t:"¡Hola, abuela! ¡Te quiero!", r:"¡Yo también te quiero, mi tesoro!"}]},
      {op:[{t:"¿Cómo estás, abuela?", r:"¡Muy bien, ahora que te veo!"}, {t:"¿Qué estás haciendo?", r:"Estoy tejiendo una bufanda para vos."}]},
      {di:"¿Qué hiciste hoy?", op:[{t:"Jugué con mi perro.", r:"¡Qué divertido! Los perros son tan dulces."}, {t:"Jugué en el jardín.", r:"¡Qué lindo! El aire libre te hace bien."}]},
      {op:[{t:"¿Cuándo venís, abuela?", r:"¡Muy pronto! Te llevo un regalo."}, {t:"¿Me contás un cuento?", r:"¡Claro! Había una vez…"}]}]}
  ],
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
