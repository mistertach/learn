/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('doctor', 'es', {
  charlas: [
    {titulo:"Charlar con la enfermera", chau:"¡Suerte, doctor! ¡Hasta luego!", pasos:[
      {di:"¡Hola, doctor! ¿Está todo listo para hoy?", op:[{t:"¡Sí, todo listo!", r:"¡Maravilloso! Los pacientes esperan."}, {t:"¡Sí, tengo mi bata blanca!", r:"¡Parecés un doctor de verdad!"}]},
      {op:[{t:"¿Quién es el primer paciente?", r:"Un osito con dolor de cabeza."}, {t:"¿Dónde está el estetoscopio?", r:"¡Acá está, colgado del cuello!"}]},
      {di:"¿Necesitás algo más?", op:[{t:"Una curita, por favor.", r:"Acá tenés una curita de colores."}, {t:"El termómetro, por favor.", r:"Acá tenés el termómetro."}]},
      {op:[{t:"¿Me ayudás?", r:"¡Claro! Siempre estoy para ayudar."}, {t:"¿Hay mucha gente esperando?", r:"Sí, pero todos están contentos."}]}]},
    {titulo:"Charlar con el oso", chau:"¡Gracias, doctor! ¡Ya me siento mejor!", pasos:[
      {di:"Doctor, no me siento bien.", op:[{t:"¿Qué te pasa?", r:"Me duele mucho la cabeza."}, {t:"¿Dónde te duele?", r:"Acá, en la cabeza."}]},
      {op:[{t:"¿Tenés fiebre?", r:"No, no creo."}, {t:"¿Dormiste bien?", r:"No, dormí mal."}]},
      {di:"¿Es grave, doctor?", op:[{t:"No, no es nada grave.", r:"¡Uf! Qué alivio."}, {t:"Tomá agua y descansá.", r:"Bueno, voy a descansar."}]},
      {op:[{t:"¿Ya te sentís mejor?", r:"¡Sí, mucho mejor! ¡Gracias!"}, {t:"¿Querés un abrazo?", r:"¡Sí, por favor!"}]}]},
    {titulo:"Charlar con la conejita", chau:"¡Gracias, doctor! Achís… ¡chau!", pasos:[
      {di:"¡Achís! Doctor, tengo la nariz roja.", op:[{t:"¡Salud!", r:"¡Gracias!"}, {t:"¿Estás resfriada?", r:"Sí, creo que sí."}]},
      {op:[{t:"¿Te duele la garganta?", r:"Un poquito."}, {t:"¿Tenés un pañuelo?", r:"Sí, acá lo tengo."}]},
      {di:"¿Qué hago, doctor?", op:[{t:"Tomá un té calentito.", r:"Mmm, un té calentito. ¡Buena idea!"}, {t:"Abrigate y descansá.", r:"Bueno, me quedo en la cama."}]},
      {op:[{t:"¿Querés un jarabe?", r:"¡Sí, por favor! Me encanta el de frutilla."}, {t:"¿Te sentís mejor?", r:"¡Sí, ya puedo oler las flores!"}]}]},
    {titulo:"Charlar con el osito de peluche", chau:"¡Gracias por cuidarme! ¡Te quiero, doctor!", pasos:[
      {di:"Doctor… estoy triste.", op:[{t:"No estés triste, osito.", r:"Gracias, doctor."}, {t:"Yo te voy a cuidar.", r:"Con vos me siento seguro."}]},
      {op:[{t:"¿Dónde te duele?", r:"Acá, un poquito."}, {t:"¿Tenés miedo?", r:"Un poco, pero soy valiente."}]},
      {di:"¿Me ponés una curita?", op:[{t:"Sí, tomá.", r:"¡Gracias! Es muy linda."}, {t:"Sí, ¡y un abrazo grande!", r:"¡Me encantan los abrazos!"}]},
      {op:[{t:"¿Te sentís mejor?", r:"¡Sí, ahora estoy contento!"}, {t:"¿Querés jugar?", r:"¡Sí! ¡Vamos a jugar!"}]}]}
  ],
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
    cosquillas: "¡Ahora, cosquillas! Tocá el osito donde quieras.",
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
