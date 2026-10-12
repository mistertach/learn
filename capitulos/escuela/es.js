/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('escuela', 'es', {
  titulo: "La escuela",
  lugar: {texto:"la escuela", silabas:["la", "es", "cue", "la"]},
  bienvenida: "¡Llegamos a la escuela!",
  niveles: [{nombre:"La entrada", numTexto:"cero"}, {nombre:"El aula", numTexto:"uno"}, {nombre:"El segundo piso", numTexto:"dos"}],
  estaciones: {
    M: {
      palabra: {texto:"la mochila", silabas:["la", "mo", "chi", "la"]},
      intro: "¡Bienvenidos! Soy la seño. Colgá la mochila.",
      frase: {texto:"¡Buen día, seño!", partes:["¡Buen día,", "seño!"]},
      respuesta: "¡Buen día! ¡Qué lindo verte!",
      cuento: {
        titulo: "El primer día",
        paginas: [
          "*La mochila* de {N} estaba lista para la escuela.",
          "«¡Buen día, seño!», dijo {N}. «¡Buen día! ¡Qué lindo verte!»",
          "{N} abrió la mochila: un libro, un lápiz… ¡todo listo!",
          "¡Empieza la escuela! ¡Hurra!"
        ]
      }
    },
    Z: {
      palabra: {texto:"el lápiz", silabas:["el", "lá", "piz"]},
      intro: "¡Uy! ¿Dónde está tu lápiz?",
      frase: {texto:"¿Puedo usar tu lápiz?", partes:["¿Puedo usar", "tu lápiz?"]},
      respuesta: "¡Claro! ¡Tomá!",
      cuento: {
        titulo: "El lápiz prestado",
        paginas: [
          "La gatita tenía *un lápiz* amarillo.",
          "{N} no encontraba su lápiz… ¡qué lío!",
          "«¿Puedo usar tu lápiz?» «¡Claro! ¡Tomá!»",
          "{N} dibujó una estrella enorme. «¡Gracias!»"
        ]
      }
    },
    B: {
      palabra: {texto:"el libro", silabas:["el", "li", "bro"]},
      intro: "Este es el rincón de los libros.",
      frase: {texto:"¿Puedo leer este libro?", partes:["¿Puedo leer", "este libro?"]},
      respuesta: "¡Sí! Es un cuento de piratas.",
      cuento: {
        titulo: "El cuento de piratas",
        paginas: [
          "La conejita tenía *un libro* lleno de dibujos.",
          "«¿Puedo leer este libro?», preguntó {N}.",
          "¡Era un cuento de piratas con un tesoro escondido!",
          "«¡Otra vez, otra vez!», pidió {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"la tijera", silabas:["la", "ti", "je", "ra"]},
      intro: "Hoy recortamos formas.",
      frase: {texto:"Recorto un círculo.", partes:["Recorto", "un círculo."]},
      respuesta: "¡Qué redondo te quedó!",
      cuento: {
        titulo: "Círculos de papel",
        paginas: [
          "El perrito trajo *la tijera* y un papel rojo.",
          "{N} recortó con cuidado: ¡un círculo!",
          "¡Y otro, y otro! ¡Círculos por todos lados!",
          "Los pegaron en la pared. ¡Qué lindos!"
        ]
      }
    },
    C: {
      palabra: {texto:"los crayones", silabas:["los", "cra", "yo", "nes"]},
      intro: "¡A dibujar con los crayones!",
      frase: {texto:"Dibujo un triángulo.", partes:["Dibujo", "un triángulo."]},
      respuesta: "¡Un triángulo verde! ¡Qué lindo!",
      cuento: {
        titulo: "El dibujo mágico",
        paginas: [
          "El gatito gris tenía una caja de *crayones*.",
          "{N} dibujó un triángulo verde.",
          "Después, un cuadrado y una estrella… ¡qué dibujo tan lindo!",
          "¡Y todos bailaron alrededor del dibujo!"
        ]
      }
    },
    K: {
      palabra: {texto:"el calendario", silabas:["el", "ca", "len", "da", "rio"]},
      intro: "Mirá el calendario. ¿Qué día es hoy?",
      frase: {texto:"Hoy es lunes.", partes:["Hoy", "es lunes."]},
      respuesta: "¡Y mañana es martes!",
      cuento: {
        titulo: "¿Qué día es hoy?",
        paginas: [
          "En la pared había *un calendario* con muchos días.",
          "{N} lo miró: «Hoy es lunes.»",
          "«¡Y el sábado no hay escuela!», aplaudió la osita.",
          "¡Lunes, martes, miércoles! ¡Hay que aprenderse todos los días!"
        ]
      }
    },
    N: {
      palabra: {texto:"la campana", silabas:["la", "cam", "pa", "na"]},
      intro: "¡Riiing! Suena la campana.",
      frase: {texto:"¿Puedo ir al recreo?", partes:["¿Puedo ir", "al recreo?"]},
      respuesta: "¡Sí! ¡A jugar!",
      cuento: {
        titulo: "¡Recreo!",
        paginas: [
          "¡Riiing! Sonó *la campana*.",
          "«¿Puedo ir al recreo?», preguntó {N}.",
          "{N} salió corriendo detrás de la pelota.",
          "¡Qué lindo es el recreo!"
        ]
      }
    }
  },
  final: {
    pregunta: "¿Cantamos los días de la semana?",
    frase: {texto:"¡Sí! ¡Cantemos!", partes:["¡Sí!", "¡Cantemos!"]},
    dias: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
    despedida: "¡Hasta mañana!",
    chau: "¡Chau, escuela!",
    lograste: "¡Lo lograste! ¡Aprendiste un montón en la escuela!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡vamos a cantar con la seño!",
    ppFinal: "Juntá todos los sellos y después, ¡a cantar con la seño!",
    otraVez: "¡Otro día de escuela! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego: las formas en el orden de base.js (pon = el pedido)
  microjuego: {
    maneja: "¡Ahora manejá el tren! Mantené apretado para ir rápido.", vamos: "¡Vamos!", bocina: "¡Chu, chu!", llegamos: "¡Llegamos! ¡Muy bien!",
    titulo: "¡El tren de las formas!",
    intro: "Escuchá qué forma va en el tren y tocala.",
    fin: "¡Cargaste {n} formas en el tren!",
    chu: "¡Chu, chu! ¡El tren se va!",
    ingredientes: [
      {texto:"el círculo", pon:"Poné el círculo en el tren.", est:"¡La estación del círculo!"},
      {texto:"el cuadrado", pon:"Poné el cuadrado en el tren.", est:"¡La estación del cuadrado!"},
      {texto:"el triángulo", pon:"Poné el triángulo en el tren.", est:"¡La estación del triángulo!"},
      {texto:"la estrella", pon:"Poné la estrella en el tren.", est:"¡La estación de la estrella!"},
      {texto:"el corazón", pon:"Poné el corazón en el tren.", est:"¡La estación del corazón!"}
    ]
  },
  palabrasExtra: [
    {texto:"el círculo", silabas:["el", "cír", "cu", "lo"]},
    {texto:"el cuadrado", silabas:["el", "cua", "dra", "do"]},
    {texto:"el triángulo", silabas:["el", "trián", "gu", "lo"]},
    {texto:"la estrella", silabas:["la", "es", "tre", "lla"]},
    {texto:"el pizarrón", silabas:["el", "pi", "za", "rrón"]}
  ],
  frasesExtra: [
    {texto:"Levanto la mano.", partes:["Levanto", "la mano."]},
    {texto:"¿Puedo ir al baño?", partes:["¿Puedo ir", "al baño?"]},
    {texto:"¿Puedo tomar agua?", partes:["¿Puedo", "tomar agua?"]},
    {texto:"¿Me prestás la goma?", partes:["¿Me prestás", "la goma?"]},
    {texto:"¡Hasta mañana, seño!", partes:["¡Hasta mañana,", "seño!"]}
  ],
  preguntas: [
    {p:"¿Con qué escribimos?", r:"¡Con el lápiz!"},
    {p:"¿Con qué recortamos?", r:"¡Con la tijera!"},
    {p:"¿Qué leemos?", r:"¡Un libro!"},
    {p:"¿Dónde llevamos las cosas de la escuela?", r:"¡En la mochila!"},
    {p:"¿Con qué pintamos de colores?", r:"¡Con los crayones!"},
    {p:"¿Dónde vemos los días?", r:"¡En el calendario!"},
    {p:"¿Qué suena para ir al recreo?", r:"¡La campana!"},
    {p:"¿Qué forma es redonda?", r:"¡El círculo!"},
    {p:"¿Qué forma tiene tres puntas?", r:"¡El triángulo!"},
    {p:"¿Qué forma tiene cuatro lados iguales?", r:"¡El cuadrado!"}
  ],
  objetos: {"#":"la pared", q:"el pupitre", p:"la planta", b:"el banco", "~":"la puerta"}
});
