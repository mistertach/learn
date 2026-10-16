/* =========================================================
   CAPÍTULO 2 · EL RESTAURANTE — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   El héroe trabaja de mozo: a los clientes les habla de usted.
   ========================================================= */
registrarTextos('restaurante', 'es', {
  charlas: [
    {titulo:"Charlar con el anfitrión", chau:"¡Que disfruten la comida!", pasos:[
      {di:"¡Bienvenidos al restaurante! ¿Cuántas personas son?", op:[{t:"Dos, por favor.", r:"Una mesa para dos. ¡Síganme!"}, {t:"Cuatro, por favor.", r:"Una mesa grande para cuatro. ¡Síganme!"}]},
      {op:[{t:"¿Dónde está nuestra mesa?", r:"Justo al lado de la ventana."}, {t:"¿Está lleno el restaurante?", r:"Casi lleno, pero tenemos lugar."}]},
      {di:"¿Quieren sentarse acá o allá?", op:[{t:"Acá, por favor.", r:"Muy bien. Tomen asiento."}, {t:"Allá, por favor.", r:"Claro. Por acá."}]},
      {op:[{t:"¿Me trae la carta, por favor?", r:"¡Claro! Acá tienen."}, {t:"¿Se come bien acá?", r:"¡Es riquísimo!"}]}]},
    {titulo:"Charlar con el cocinero", chau:"¡Gracias por visitar mi cocina! ¡Buen provecho!", pasos:[
      {di:"¡Hola! Soy el cocinero. ¿Querés ver la cocina?", op:[{t:"¡Sí, por favor!", r:"Pasá, pero con cuidado."}, {t:"¡Sí, qué rico huele!", r:"¡Gracias! Estoy haciendo sopa."}]},
      {op:[{t:"¿Qué estás cocinando?", r:"Una olla grande de sopa."}, {t:"¿Está caliente?", r:"¡Sí, muy caliente! Cuidado."}]},
      {di:"¿Querés probarla?", op:[{t:"¡Sí, por favor!", r:"Acá tenés una cucharita."}, {t:"Solo un poquito.", r:"Tomá, un traguito."}]},
      {op:[{t:"¿Qué lleva la sopa?", r:"Zanahorias, papas y mucho cariño."}, {t:"¿Puedo ayudar a cocinar?", r:"¡Sí! Revolvé la olla."}]}]},
    {titulo:"Charlar en la heladería", chau:"¡Disfrutá tu helado! ¡Chau, chau!", pasos:[
      {di:"¡Llegó la hora del postre! ¿De qué gusto querés el helado?", op:[{t:"¡De frutilla, por favor!", r:"Acá tenés tu helado rosa."}, {t:"¡De chocolate, por favor!", r:"Acá tenés tu helado de chocolate."}]},
      {op:[{t:"¿Qué gustos tenés?", r:"Frutilla, chocolate y vainilla."}, {t:"¿Está frío?", r:"¡Muy frío! Brrr."}]},
      {di:"¿Una bocha o dos bochas?", op:[{t:"Una bocha, por favor.", r:"Tomá. Una bocha."}, {t:"¡Dos bochas, por favor!", r:"¡Wow, dos bochas!"}]},
      {op:[{t:"¿Me das un cucurucho?", r:"¡Claro! Un cucurucho crocante."}, {t:"¿Cuánto es?", r:"Un pececito."}]}]},
    {titulo:"Charlar con la clienta", chau:"¡Gracias, y esta es tu propina!", pasos:[
      {di:"¡Hola! Qué lindo restaurante. ¿Trabajás acá?", op:[{t:"¡Sí, trabajo acá!", r:"¡Qué maravilla! Lo hacés muy bien."}, {t:"Sí, ayudo a todos.", r:"¡Qué buena ayuda!"}]},
      {op:[{t:"¿Te gustó la comida?", r:"¡Estuvo riquísima!"}, {t:"¿Qué comiste?", r:"¡Pizza y helado!"}]},
      {di:"¡Todo estuvo genial! ¿Me traés la cuenta, por favor?", op:[{t:"Sí, acá está la cuenta.", r:"¡Gracias! Acá está el dinero."}, {t:"Sí, un momentito, por favor.", r:"¡Gracias!"}]},
      {op:[{t:"¿Vas a volver?", r:"¡Sí, voy a volver pronto!"}, {t:"¿Te divertiste?", r:"¡La pasé genial!"}]}]}
  ],
  titulo: "El restaurante",
  lugar: {texto:"el restaurante", silabas:["el", "res", "tau", "ran", "te"]},
  bienvenida: "¡Llegamos al restaurante!",
  niveles: [{nombre:"Estacionamiento", numTexto:"cero"}, {nombre:"Buffet", numTexto:"uno"}, {nombre:"A la carta", numTexto:"dos"}],
  estaciones: {
    E: {
      palabra: {texto:"el auto", silabas:["el", "au", "to"]},
      intro: "Este es el estacionamiento. ¡Acá dejamos el auto!",
      frase: {texto:"¡Llegamos en auto!", partes:["¡Llegamos", "en auto!"]},
      respuesta: "¡Bienvenidos! Yo te cuido el auto.",
      cuento: {
        titulo: "El auto con hambre",
        paginas: [
          "{N} llegó al restaurante en *el auto* rojo.",
          "¡Pero el auto saltaba y hacía ruido! Brum, brum… ¡tenía hambre!",
          "El perro le dio nafta y lo lavó con muchas burbujas.",
          "—¡Gracias! —dijo el auto. Y se quedó dormido en el estacionamiento."
        ]
      }
    },
    R: {
      palabra: {texto:"la mesa", silabas:["la", "me", "sa"]},
      intro: "Esta es la entrada. Acá nos dan una mesa.",
      frase: {texto:"Una mesa, por favor.", partes:["Una mesa,", "por favor."]},
      respuesta: "¡Uy! Hoy falta un mozo. ¿Nos ayudás?",
      despues: "¡Ponete el delantal! ¡Ahora trabajás en el restaurante!",
      cuento: {
        titulo: "El delantal mágico",
        paginas: [
          "{N} pidió *una mesa*, pero el oso estaba muy preocupado.",
          "—¡Hoy no vino el mozo, y hay mucha gente! —dijo el oso.",
          "—¡Yo te ayudo! —dijo {N}. Y el oso le dio *un delantal* y un moño.",
          "¡Listo! Ahora {N} trabaja en el restaurante."
        ]
      }
    },
    B: {
      palabra: {texto:"el plato", silabas:["el", "pla", "to"]},
      intro: "Este es el buffet. ¡Cada uno se sirve lo que quiere!",
      frase: {texto:"Acá tiene un plato.", partes:["Acá tiene", "un plato."]},
      respuesta: "¡Muchas gracias!",
      cuento: {
        titulo: "La montaña de platos",
        paginas: [
          "En el buffet, la coneja necesitaba *un plato*.",
          "{N} llevó un plato… y otro… y otro… ¡una montaña de platos!",
          "¡La montaña se movía para un lado y para el otro!",
          "Pero no se cayó ninguno. —¡Acá tiene un plato! —dijo {N}. ¡Bravo!"
        ]
      }
    },
    K: {
      palabra: {texto:"la olla", silabas:["la", "o", "lla"]},
      intro: "¡Esta es la cocina! Acá cocina el gato cocinero.",
      frase: {texto:"¡Qué rico huele!", partes:["¡Qué rico", "huele!"]},
      respuesta: "¡Es sopa de tomate!",
      cuento: {
        titulo: "La olla que bailaba",
        paginas: [
          "En la cocina había *una olla* enorme.",
          "La sopa hacía burbujas: blup, blup, blup.",
          "¡De golpe, la olla empezó a saltar y a bailar!",
          "El gato cocinero la abrazó y dijo: —¡La sopa está lista!"
        ]
      }
    },
    M: {
      palabra: {texto:"la carta", silabas:["la", "car", "ta"]},
      intro: "Este es el piso de arriba. Acá la gente elige la comida en la carta.",
      frase: {texto:"¿Qué va a comer?", partes:["¿Qué va", "a comer?"]},
      respuesta: "Una pizza, por favor.",
      cuento: {
        titulo: "La pizza gigante",
        paginas: [
          "{N} le dio *la carta* al perro y le preguntó: —¿Qué va a comer?",
          "—Una pizza, por favor —dijo el perro.",
          "{N} trajo una pizza tan grande, tan grande… ¡que no entraba en la mesa!",
          "Entonces el perro invitó a sus amigos, ¡y la compartieron!"
        ]
      }
    },
    H: {
      palabra: {texto:"el helado", silabas:["el", "e", "la", "do"]},
      intro: "¡Llegó la hora del postre!",
      frase: {texto:"¿Quiere postre?", partes:["¿Quiere", "postre?"]},
      respuesta: "¡Sí! Un helado, por favor.",
      cuento: {
        titulo: "El helado apurado",
        paginas: [
          "La gata quería *un helado* de chocolate.",
          "{N} lo llevó rapidísimo, ¡porque hacía mucho calor!",
          "¡Uy! El helado se estaba derritiendo. Gota, gota, gota…",
          "La gata se lo comió de un bocado. ¡Mmm, qué rico!"
        ]
      }
    },
    C: {
      palabra: {texto:"la cuenta", silabas:["la", "cuen", "ta"]},
      intro: "Esta es la caja. Acá se paga la comida.",
      frase: {texto:"Acá está la cuenta.", partes:["Acá está", "la cuenta."]},
      respuesta: "¡Gracias! Estaba todo riquísimo.",
      cuento: {
        titulo: "La cuenta voladora",
        paginas: [
          "En la caja, el perro le dio *la cuenta* a {N}.",
          "¡Pero la ventana estaba abierta y la cuenta salió volando!",
          "{N} corrió y saltó bien alto… ¡y la atrapó en el aire!",
          "—¡Acá está la cuenta! —dijo {N}. Y todos aplaudieron."
        ]
      }
    }
  },
  final: {
    pregunta: "¡Todo riquísimo! Esto es para usted: ¡una propina!",
    frase: {texto:"¡Muchas gracias! ¡Vuelva pronto!", partes:["¡Muchas gracias!", "¡Vuelva", "pronto!"]},
    despedida: "¡Buen trabajo!",
    chau: "¡Chau, chau! ¡Hasta la próxima!",
    lograste: "¡Lo lograste! ¡Atendiste a todos muy bien!",
    todos: "¡Tenés todos los sellos! Bajá al estacionamiento: ¡la clienta te espera en la puerta verde!",
    ppFinal: "Juntá todos los sellos y después, ¡la propina!",
    otraVez: "¡Otro día de trabajo! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego que se abre al terminar el lugar (los ingredientes van en el orden de base.js)
  microjuego: {titulo:"¡A hacer pizza!", intro:"¡Hacé tu pizza! Tocá un ingrediente y después tocá la pizza.", horno:"¡Al horno!", mas:"¡Poné algunas cosas más!", listo:"¡Mmm, qué rica pizza! ¡Gracias, chef!",
    ingredientes: [{texto:"la salsa"}, {texto:"el queso"}, {texto:"el tomate"}, {texto:"la aceituna"}, {texto:"la albahaca"}, {texto:"el champiñón"}]},
  palabrasExtra: [
    {texto:"la pizza", silabas:["la", "pit", "sa"]},
    {texto:"la sopa", silabas:["la", "so", "pa"]},
    {texto:"el vaso", silabas:["el", "va", "so"]},
    {texto:"el tenedor", silabas:["el", "te", "ne", "dor"]},
    {texto:"el delantal", silabas:["el", "de", "lan", "tal"]}
  ],
  frasesExtra: [
    {texto:"¡Bienvenidos!", partes:["¡Bienvenidos!"]},
    {texto:"¡Buen provecho!", partes:["¡Buen", "provecho!"]},
    {texto:"¿Qué va a tomar?", partes:["¿Qué va", "a tomar?"]},
    {texto:"Un vaso de agua, por favor.", partes:["Un vaso de agua,", "por favor."]},
    {texto:"¡Muchas gracias!", partes:["¡Muchas", "gracias!"]},
    {texto:"¡Qué rico!", partes:["¡Qué rico!"]}
  ],
  preguntas: [
    {p:"¿Qué pidió el perro en el piso de arriba?", r:"¡Una pizza!"},
    {p:"¿Qué postre es frío, frío?", r:"¡El helado!"},
    {p:"¿Dónde se cocina la sopa?", r:"¡En la olla!"},
    {p:"¿En qué llegamos al restaurante?", r:"¡En auto!"},
    {p:"¿Dónde elegimos la comida?", r:"¡En la carta!"},
    {p:"¿Qué llevamos a la mesa para pagar?", r:"¡La cuenta!"},
    {p:"¿Qué nos ponemos para trabajar en el restaurante?", r:"¡El delantal!"},
    {p:"¿Dónde ponemos el agua?", r:"¡En el vaso!"},
    {p:"¿Con qué comemos los fideos?", r:"¡Con el tenedor!"},
    {p:"¿Qué nos dio la clienta al final?", r:"¡La propina!"}
  ],
  objetos: {"#":"la pared", p:"la planta", a:"el auto", m:"la mesa", "~":"la puerta"}
});
