/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('doctor', 'es', {
  titulo: "El consultorio",
  lugar: {texto:"el consultorio", silabas:["el", "con", "sul", "to", "rio"]},
  bienvenida: "¡Llegamos al consultorio!",
  niveles: [{nombre:"La sala de espera", numTexto:"cero"}, {nombre:"Primer piso", numTexto:"uno"}, {nombre:"Segundo piso", numTexto:"dos"}],
  estaciones: {
    E: {
      palabra: {texto:"el estetoscopio", silabas:["el", "es", "te", "tos", "co", "pio"]},
      intro: "¡Hola! Soy la enfermera. Hoy atendés vos: ¡tomá la bata!",
      frase: {texto:"Pum, pum. ¡Escucho el corazón!", partes:["Pum, pum.", "¡Escucho el corazón!"]},
      respuesta: "¡Late fuerte! ¡Muy bien!",
      cuento: {
        titulo: "La bata blanca",
        paginas: [
          "La enfermera le dio a {N} *un estetoscopio*.",
          "«¿Para mí?», preguntó {N}. «¡Sí! Y también una bata blanca.»",
          "{N} escuchó su propio corazón: ¡pum, pum, pum!",
          "¡Listo! ¡A atender a los pacientes!"
        ]
      }
    },
    C: {
      palabra: {texto:"la cabeza", silabas:["la", "ca", "be", "za"]},
      intro: "El osito está triste. Algo le duele.",
      frase: {texto:"¿Te duele la cabeza?", partes:["¿Te duele", "la cabeza?"]},
      respuesta: "Sí, un poquito… ¡ay!",
      cuento: {
        titulo: "Un vaso de agua",
        paginas: [
          "El osito se agarraba *la cabeza*. ¡Ay, ay, ay!",
          "«¿Te duele la cabeza?», preguntó {N}. «Sí, un poquito.»",
          "{N} le dio un vaso de agua fresca: «Ahora, a descansar.»",
          "El osito durmió una siesta… ¡y se despertó contento!"
        ]
      }
    },
    A: {
      palabra: {texto:"la panza", silabas:["la", "pan", "za"]},
      intro: "Al perrito le duele la panza.",
      frase: {texto:"¿Qué comiste?", partes:["¿Qué", "comiste?"]},
      respuesta: "¡Mucho helado y mucha pizza!",
      cuento: {
        titulo: "Demasiado helado",
        paginas: [
          "Al perrito le dolía *la panza*.",
          "«¿Qué comiste?», preguntó {N}. «¡Mucho helado y mucha pizza!»",
          "{N} le dio una cucharada de jarabe. ¡Mmm, de frutilla!",
          "Al rato el perrito bailaba: ¡ya no le dolía nada!"
        ]
      }
    },
    N: {
      palabra: {texto:"la nariz", silabas:["la", "na", "riz"]},
      intro: "¡Uy! La conejita tiene la nariz roja.",
      frase: {texto:"¡Salud!", partes:["¡Salud!"]},
      respuesta: "¡Achís! ¡Gracias!",
      cuento: {
        titulo: "¡Achís!",
        paginas: [
          "La conejita tenía *la nariz* roja como una frutilla.",
          "¡Aaa… achís! «¡Salud!», dijo {N}.",
          "{N} le dio un pañuelo: «Soplá fuerte.»",
          "«¡Gracias! Ya puedo oler las flores», dijo la conejita."
        ]
      }
    },
    B: {
      palabra: {texto:"la boca", silabas:["la", "bo", "ca"]},
      intro: "El gatito tiene que mostrar los dientes.",
      frase: {texto:"Abrí la boca, por favor.", partes:["Abrí la boca,", "por favor."]},
      respuesta: "¡Aaaaa!",
      cuento: {
        titulo: "¡Aaaa!",
        paginas: [
          "El gatito gris no quería abrir *la boca*.",
          "«Abrí la boca, por favor», dijo {N}. «¡Aaaaa!»",
          "¡Qué dientes tan blancos y brillantes!",
          "«¡Muy bien! Y a lavarse los dientes todos los días.»"
        ]
      }
    },
    R: {
      palabra: {texto:"la rodilla", silabas:["la", "ro", "di", "lla"]},
      intro: "El perro se cayó de la bici.",
      frase: {texto:"Te pongo una curita.", partes:["Te pongo", "una curita."]},
      respuesta: "¡Ya no me duele! ¡Gracias!",
      cuento: {
        titulo: "La curita",
        paginas: [
          "El perro se cayó y se lastimó *la rodilla*. ¡Buaaa!",
          "{N} le dijo: «Tranquilo, no pasa nada.»",
          "Y le puso una curita de colores.",
          "«¡Ya no me duele!» El perro salió corriendo a jugar."
        ]
      }
    },
    T: {
      palabra: {texto:"el termómetro", silabas:["el", "ter", "mó", "me", "tro"]},
      intro: "El oso está muy cansado. ¿Tendrá fiebre?",
      frase: {texto:"¿Tenés fiebre?", partes:["¿Tenés", "fiebre?"]},
      respuesta: "¡No! ¡Estoy bien!",
      cuento: {
        titulo: "Sin fiebre",
        paginas: [
          "El oso estaba cansado. {N} trajo *el termómetro*.",
          "«¿Tenés fiebre?», preguntó {N}. El oso esperó, quietito.",
          "¡Pip, pip! «¡No hay fiebre!»",
          "«¡Qué suerte!», dijo el oso, y se puso a bailar."
        ]
      }
    }
  },
  final: {
    pregunta: "Estoy triste… me duele la cabeza.",
    frase: {texto:"¡Una curita y un abrazo!", partes:["¡Una curita", "y un abrazo!"]},
    despedida: "¡Ya estoy contento!",
    chau: "¡Gracias por cuidarme!",
    lograste: "¡Lo lograste! ¡Curaste a todos!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡el osito te necesita!",
    ppFinal: "Juntá todos los sellos y después, ¡a cuidar al osito!",
    otraVez: "¡Otro día en el consultorio! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego: las partes del cuerpo, en el orden de base.js (p = la pregunta)
  microjuego: {
    titulo: "¿Dónde está la nariz?",
    intro: "Escuchá y tocá esa parte del cuerpo del osito.",
    fin: "¡Encontraste {n} partes del cuerpo!",
    ingredientes: [
      {texto:"la cabeza", p:"¿Dónde está la cabeza?"},
      {texto:"los ojos", p:"¿Dónde están los ojos?"},
      {texto:"la nariz", p:"¿Dónde está la nariz?"},
      {texto:"la boca", p:"¿Dónde está la boca?"},
      {texto:"las orejas", p:"¿Dónde están las orejas?"},
      {texto:"la panza", p:"¿Dónde está la panza?"},
      {texto:"los pies", p:"¿Dónde están los pies?"}
    ]
  },
  palabrasExtra: [
    {texto:"los ojos", silabas:["los", "o", "jos"]},
    {texto:"las orejas", silabas:["las", "o", "re", "jas"]},
    {texto:"los pies", silabas:["los", "pies"]},
    {texto:"la curita", silabas:["la", "cu", "ri", "ta"]},
    {texto:"el jarabe", silabas:["el", "ja", "ra", "be"]}
  ],
  frasesExtra: [
    {texto:"¡Qué alegría!", partes:["¡Qué", "alegría!"]},
    {texto:"Estoy triste.", partes:["Estoy", "triste."]},
    {texto:"Tengo miedo.", partes:["Tengo", "miedo."]},
    {texto:"¡Ay, me duele!", partes:["¡Ay,", "me duele!"]},
    {texto:"¡Ya estoy mejor!", partes:["¡Ya estoy", "mejor!"]}
  ],
  preguntas: [
    {p:"¿Con qué escuchamos el corazón?", r:"¡Con el estetoscopio!"},
    {p:"¿Con qué vemos si hay fiebre?", r:"¡Con el termómetro!"},
    {p:"¿Qué ponemos en la rodilla lastimada?", r:"¡Una curita!"},
    {p:"¿Con qué olemos las flores?", r:"¡Con la nariz!"},
    {p:"¿Con qué miramos?", r:"¡Con los ojos!"},
    {p:"¿Con qué escuchamos la música?", r:"¡Con las orejas!"},
    {p:"¿Con qué comemos?", r:"¡Con la boca!"},
    {p:"¿Con qué caminamos?", r:"¡Con los pies!"},
    {p:"¿Qué carita está triste?", r:"¡Esta!"},
    {p:"¿Qué carita está contenta?", r:"¡Esta!"}
  ],
  objetos: {"#":"la pared", p:"la planta", b:"el banco", x:"la camilla", "~":"la puerta"}
});
