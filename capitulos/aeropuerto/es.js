/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('aeropuerto', 'es', {
  titulo: "El aeropuerto",
  lugar: {texto:"el aeropuerto", silabas:["el", "a", "e", "ro", "puer", "to"]},
  bienvenida: "¡Llegamos al aeropuerto!",
  niveles: [{nombre:"Llegadas", numTexto:"cero"}, {nombre:"Partidas", numTexto:"uno"}, {nombre:"Puertas", numTexto:"dos"}],
  estaciones: {
    I: {
      palabra: {texto:"el mapa", silabas:["el", "ma", "pa"]},
      intro: "Esta es la mesa de informes. ¡Acá saben dónde está todo!",
      frase: {texto:"¿Dónde está el avión?", partes:["¿Dónde está", "el avión?"]},
      respuesta: "¡Arriba, en el piso dos!",
      cuento: {
        titulo: "El mapa mágico",
        paginas: [
          "{N} encontró *el mapa* en la mesa de informes.",
          "¡De golpe, el mapa empezó a brillar! Tenía un camino rojo.",
          "El camino iba para arriba, arriba, arriba… ¡hasta el piso dos!",
          "Allá arriba estaba *el avión*. —¡Gracias, mapa! —dijo {N}."
        ]
      }
    },
    B: {
      palabra: {texto:"el baño", silabas:["el", "ba", "ño"]},
      intro: "¡Uy! A veces tenemos que ir al baño.",
      frase: {texto:"¿Dónde está el baño?", partes:["¿Dónde está", "el baño?"]},
      respuesta: "¡Es acá! ¡Esta puerta!",
      cuento: {
        titulo: "¡Burbujas en el baño!",
        paginas: [
          "{N} tenía muchas, muchas ganas de ir *al baño*.",
          "—¿Dónde está el baño? —le preguntó a la gata amarilla.",
          "—¡Es acá, en la puerta azul! —dijo la gata.",
          "Después, {N} se lavó las manos con mucho jabón. ¡Burbujas, burbujas!"
        ]
      }
    },
    K: {
      palabra: {texto:"el alfajor", silabas:["el", "al", "fa", "jor"]},
      intro: "Este es el kiosco. ¡Venden cosas ricas!",
      frase: {texto:"Un alfajor, por favor.", partes:["Un alfajor,", "por favor."]},
      respuesta: "¡Acá tenés! ¡Que lo disfrutes!",
      cuento: {
        titulo: "El alfajor viajero",
        paginas: [
          "En el kiosco había *un alfajor* gigante.",
          "—¡Un alfajor, por favor! —pidió {N}.",
          "Pero el alfajor dio un salto y dijo: —¡Yo también quiero viajar!",
          "Así que el alfajor se metió en *la mochila*, listo para volar."
        ]
      }
    },
    T: {
      palabra: {texto:"el pasaje", silabas:["el", "pa", "sa", "je"]},
      intro: "Acá compramos el pasaje para viajar en avión.",
      frase: {texto:"Un pasaje, por favor.", partes:["Un pasaje,", "por favor."]},
      respuesta: "¡Claro! Acá tenés tu pasaje.",
      cuento: {
        titulo: "El pasaje dorado",
        paginas: [
          "{N} fue a la ventanilla a comprar *un pasaje*.",
          "El oso le dio un pasaje amarillo que brillaba mucho.",
          "De pronto sopló un viento… ¡y el pasaje salió volando!",
          "{N} saltó bien alto y lo atrapó. ¡Qué suerte!"
        ]
      }
    },
    C: {
      palabra: {texto:"la valija", silabas:["la", "va", "li", "ja"]},
      intro: "Acá dejamos la valija. ¡Ella también viaja en el avión!",
      frase: {texto:"Esta es mi valija.", partes:["Esta es", "mi valija."]},
      respuesta: "¡Qué linda! Chau, valija.",
      cuento: {
        titulo: "La valija que se escapó",
        paginas: [
          "{N} estaba en el aeropuerto con *una valija* roja llena de juguetes.",
          "¡Pero la valija empezó a rodar! Rueda, rueda, rueda. —¡Esperá, valija! —gritó {N}.",
          "Pasó al lado del *baño*. La gata preguntó: —¿Dónde está la valija?",
          "Se subió a *la escalera*. ¡Arriba, arriba!",
          "Arriba había un avión enorme que dijo: —¡Hola, valija! ¡Quietita! Y la valija se quedó quieta.",
          "{N} le dio un abrazo a la valija. —¡Gracias, avión! ¡Buen viaje!"
        ]
      }
    },
    S: {
      palabra: {texto:"el pasaporte", silabas:["el", "pa", "sa", "por", "te"]},
      intro: "Esta es la seguridad. Acá mostramos el pasaporte.",
      frase: {texto:"Acá está mi pasaporte.", partes:["Acá está", "mi pasaporte."]},
      respuesta: "¡Perfecto! Podés pasar.",
      cuento: {
        titulo: "El pasaporte dormilón",
        paginas: [
          "En la seguridad, el perro le pidió *el pasaporte* a {N}.",
          "{N} buscó en la mochila… ¡pero el pasaporte estaba dormido!",
          "—¡Despertate, pasaporte! —dijo {N} bien fuerte.",
          "El pasaporte abrió los ojos: —¡Acá estoy! ¡Ya podés pasar!"
        ]
      }
    },
    W: {
      palabra: {texto:"el avión", silabas:["el", "a", "vión"]},
      intro: "¡Mirá por la ventana grande! El piloto también está acá.",
      frase: {texto:"¡Mirá, un avión!", partes:["¡Mirá,", "un avión!"]},
      respuesta: "¡Sí! ¡Qué grande!",
      cuento: {
        titulo: "El avión que no se animaba",
        paginas: [
          "Por la ventana, {N} vio *un avión* chiquito.",
          "El avión tenía miedo de volar tan alto.",
          "—¡Vos podés, avión! —le gritó {N}.",
          "El avión corrió, corrió… ¡y voló entre las nubes!"
        ]
      }
    }
  },
  final: {
    pregunta: "¿Tenés tu pasaje?",
    frase: {texto:"¡Sí! Acá está mi pasaje.", partes:["¡Sí!", "Acá está", "mi pasaje."]},
    despedida: "¡Buen viaje!",
    chau: "¡Chau, aeropuerto!"
  },
  // el microjuego que se abre al terminar el lugar ({n} = cuántas estrellas juntó)
  microjuego: {titulo:"Vuelo arcoíris", intro:"¡Mové el avión para arriba y para abajo, y juntá las estrellas de colores!", fin:"¡Juntaste {n} estrellas!"},
  palabrasExtra: [
    {texto:"el ascensor", silabas:["el", "as", "cen", "sor"]},
    {texto:"la escalera", silabas:["la", "es", "ca", "le", "ra"]},
    {texto:"la puerta", silabas:["la", "puer", "ta"]},
    {texto:"el piloto", silabas:["el", "pi", "lo", "to"]},
    {texto:"la mochila", silabas:["la", "mo", "chi", "la"]}
  ],
  frasesExtra: [
    {texto:"¡Hola!", partes:["¡Hola!"]},
    {texto:"¡Muchas gracias!", partes:["¡Muchas", "gracias!"]},
    {texto:"¡Chau, chau!", partes:["¡Chau, chau!"]},
    {texto:"¿Dónde está la puerta?", partes:["¿Dónde está", "la puerta?"]},
    {texto:"Al piso dos, por favor.", partes:["Al piso dos,", "por favor."]},
    {texto:"¡Buen viaje!", partes:["¡Buen", "viaje!"]}
  ],
  preguntas: [
    {p:"¿Qué comemos en el kiosco?", r:"¡El alfajor! ¡Qué rico!"},
    {p:"¿Qué le mostramos al perro en la seguridad?", r:"¡El pasaporte!"},
    {p:"¿Dónde llevamos los juguetes para viajar?", r:"¡En la valija!"},
    {p:"¿Qué nos dice dónde está todo?", r:"¡El mapa!"},
    {p:"¿Qué necesitamos para subir al avión?", r:"¡El pasaje!"},
    {p:"¿Qué nos sube y nos baja de piso?", r:"¡El ascensor!"},
    {p:"¿Qué usa el piloto en la cabeza?", r:"¡La gorra del piloto!"},
    {p:"¿Qué llevamos en la espalda?", r:"¡La mochila!"},
    {p:"¿Qué vuela entre las nubes?", r:"¡El avión!"},
    {p:"¿A dónde vamos cuando tenemos ganas de hacer pis?", r:"¡Al baño!"}
  ],
  objetos: {"#":"la pared", b:"el banco", p:"la planta", "~":"la puerta"},
  // traducciones al inglés que no salen de en.js (el alfajor es solo de acá)
  ingles: {
    "el alfajor": "the alfajor (a sweet cookie sandwich)",
    "Un alfajor, por favor.": "An alfajor, please.",
    "En el kiosco había *un alfajor* gigante.": "At the snack stand there was *a giant alfajor*.",
    "—¡Un alfajor, por favor! —pidió {N}.": "\"An alfajor, please!\" asked {N}.",
    "Pero el alfajor dio un salto y dijo: —¡Yo también quiero viajar!": "But the alfajor jumped and said: \"I want to travel too!\"",
    "Así que el alfajor se metió en *la mochila*, listo para volar.": "So the alfajor hopped into *the backpack*, ready to fly.",
    "¡El alfajor! ¡Qué rico!": "The alfajor! Yummy!",
    "El alfajor viajero": "The traveling alfajor"
  }
});
