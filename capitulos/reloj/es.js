/* =========================================================
   CAPÍTULO 3 · LA TORRE DEL RELOJ — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('reloj', 'es', {
  charlas: [
    {titulo:"Charlar con el relojero", chau:"¡El tiempo vuela! ¡Hasta pronto!", pasos:[
      {di:"¡Hola! ¿Te gustan mis relojes?", op:[{t:"¡Sí, son hermosos!", r:"¡Gracias! Los hice yo."}, {t:"¡Sí, me gusta el reloj grande!", r:"Es mi favorito también."}]},
      {op:[{t:"¿Qué hora es?", r:"¡Son las tres en punto!"}, {t:"¿Cuántos relojes tenés?", r:"¡Tengo cien relojes!"}]},
      {di:"¿Querés escuchar el tic-tac del reloj?", op:[{t:"¡Sí, tic-tac!", r:"¡Tic-tac, tic-tac!"}, {t:"Sí, quiero escuchar.", r:"Shh… tic-tac, tic-tac."}]},
      {op:[{t:"¿Suena?", r:"¡Sí, a cada hora!"}, {t:"¿Puedo tocar las agujas?", r:"¡Sí, con cuidado!"}]}]},
    {titulo:"Charlar a las tres en punto", chau:"¡Es hora de irse! ¡Nos vemos a las cuatro!", pasos:[
      {di:"¡Son las tres en punto! Hora de la merienda. ¿Tenés hambre?", op:[{t:"¡Sí, tengo hambre!", r:"¡Vamos a merendar!"}, {t:"¡Sí, quiero una galletita!", r:"Acá tenés tu galletita."}]},
      {op:[{t:"¿Qué hora es?", r:"Son las tres en punto."}, {t:"¿A qué hora cenamos?", r:"A las ocho."}]},
      {di:"¿Qué hacés a las tres?", op:[{t:"Juego con mis juguetes.", r:"¡Qué divertido!"}, {t:"Hago la merienda.", r:"¡Mmm! Yo también."}]},
      {op:[{t:"¿Dónde está la aguja chica ahora?", r:"¡En el tres!"}, {t:"¿Es tarde?", r:"No, todavía es temprano."}]}]},
    {titulo:"Charlar a las siete menos cuarto", chau:"¡La cena está lista! ¡Buen provecho!", pasos:[
      {di:"Son las siete menos cuarto. Ya casi es hora de cenar. ¿Tenés hambre?", op:[{t:"¡Sí, tengo mucha hambre!", r:"La cena ya casi está."}, {t:"Sí, ¿qué hay de cena?", r:"¡Sopa y pan!"}]},
      {op:[{t:"¿A qué hora es la cena?", r:"A las siete en punto."}, {t:"¿Cuánto falta para la cena?", r:"¡Solo un cuarto de hora!"}]},
      {di:"¿Nos lavamos las manos primero?", op:[{t:"¡Sí, lavémonos las manos!", r:"¡Jabón, jabón y agua!"}, {t:"¡Sí, las tengo sucias!", r:"Lavémoslas bien."}]},
      {op:[{t:"¿Te ayudo a poner la mesa?", r:"¡Sí! Traé los platos, por favor."}, {t:"¿Ya es la hora?", r:"¡Casi! Esperá un poquito."}]}]},
    {titulo:"Charlar en el campanario", chau:"¡Din don! ¡Hasta mañana!", pasos:[
      {di:"¡Son las doce en punto! ¿Qué hora es?", op:[{t:"¡Son las doce en punto!", r:"¡Eso es! Hora de las campanas."}, {t:"¡Es mediodía!", r:"¡Sí! Van a sonar las campanas."}]},
      {op:[{t:"¿Puedo tocar las campanas?", r:"¡Sí! Tirá de la soga."}, {t:"¿Cuántas veces suenan?", r:"¡Doce veces!"}]},
      {di:"¿Aprendiste las horas hoy?", op:[{t:"¡Sí, sé las en punto y las y media!", r:"¡Maravilloso! Sos un experto en relojes."}, {t:"¡Sí, me encantan los relojes!", r:"¡A mí también! El tiempo es divertido."}]},
      {op:[{t:"¿Qué hora es ahora?", r:"¡Hora de volver a casa!"}, {t:"¿Me enseñás más?", r:"¡Claro! Volvé mañana."}]}]}
  ],
  titulo: "La torre del reloj",
  lugar: {texto:"la torre del reloj", silabas:["la", "to", "rre", "del", "re", "loj"]},
  bienvenida: "¡Llegamos a la torre del reloj!",
  niveles: [{nombre:"El taller", numTexto:"cero"}, {nombre:"Los engranajes", numTexto:"uno"}, {nombre:"Arriba de todo", numTexto:"dos"}],
  // los números de la esfera, del 1 al 12 (se cuentan en la estación del reloj y los usa el microjuego)
  numeros: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"],
  estaciones: {
    R: {
      palabra: {texto:"el reloj", silabas:["el", "re", "loj"]},
      intro: "Este es el taller del relojero. ¡Hay relojes por todos lados!",
      contar: "¡Contemos los números del reloj! Repetí conmigo.",
      frase: {texto:"¿Qué hora es?", partes:["¿Qué hora", "es?"]},
      respuesta: "¡Vamos a aprender a mirar el reloj!",
      cuento: {
        titulo: "El reloj dormilón",
        paginas: [
          "En el taller del relojero había *un reloj* que no hacía tictac.",
          "—¡Está dormido! —dijo el oso relojero.",
          "{N} contó bien fuerte: uno, dos, tres… ¡hasta doce!",
          "Y el reloj se despertó: ¡tictac, tictac!"
        ]
      }
    },
    A: {
      palabra: {texto:"la aguja chica", silabas:["la", "a", "gu", "ja", "chi", "ca"]},
      intro: "Mirá esta aguja cortita.",
      buscar: "¿Qué reloj tiene la aguja chica roja?",
      frase: {texto:"La aguja chica dice la hora.", partes:["La aguja chica", "dice la hora."]},
      respuesta: "¡Muy bien! Dice la hora.",
      cuento: {
        titulo: "La aguja chica",
        paginas: [
          "*La aguja chica* es bajita y camina despacito.",
          "Ella nos dice la hora: la una, las dos, las tres…",
          "Un día se quiso apurar, ¡y se mareó!",
          "—Despacito está bien —le dijo {N}."
        ]
      }
    },
    N: {
      palabra: {texto:"la aguja grande", silabas:["la", "a", "gu", "ja", "gran", "de"]},
      intro: "Y esta aguja es larga, larga.",
      buscar: "¿Qué reloj tiene la aguja grande roja?",
      frase: {texto:"La aguja grande dice los minutos.", partes:["La aguja grande", "dice los minutos."]},
      respuesta: "¡Eso! Dice los minutos.",
      cuento: {
        titulo: "La aguja corredora",
        paginas: [
          "*La aguja grande* es alta y corre mucho.",
          "Da toda la vuelta al reloj en una hora.",
          "—¡Vamos, aguja grande! —gritó {N}.",
          "Cuando llegó arriba, al doce, dijo: —¡En punto!"
        ]
      }
    },
    H: {
      palabra: {texto:"en punto", silabas:["en", "pun", "to"]},
      intro: "Cuando la aguja grande mira el doce, es en punto.",
      buscar: "¿Qué reloj dice las tres en punto?",
      frase: {texto:"Son las tres en punto.", partes:["Son las tres", "en punto."]},
      respuesta: "¡Sí! ¡Las tres en punto!",
      cuento: {
        titulo: "La merienda en punto",
        paginas: [
          "Cuando la aguja grande está en el doce, es *en punto*.",
          "Eran las tres en punto: ¡la hora de la merienda!",
          "El perro trajo leche y galletitas.",
          "{N} dijo: —¡Son las tres en punto! ¡Qué rico!"
        ]
      }
    },
    C: {
      palabra: {texto:"y cuarto", silabas:["y", "cuar", "to"]},
      intro: "Cuando la aguja grande mira el tres, es y cuarto.",
      buscar: "¿Qué reloj dice las cuatro y cuarto?",
      frase: {texto:"Son las cuatro y cuarto.", partes:["Son las cuatro", "y cuarto."]},
      respuesta: "¡Bárbaro! Las cuatro y cuarto.",
      cuento: {
        titulo: "A la plaza",
        paginas: [
          "Cuando la aguja grande está en el tres, es *y cuarto*.",
          "A las cuatro y cuarto, {N} fue a la plaza.",
          "Se hamacó: arriba, abajo, arriba, abajo.",
          "—¡Son las cuatro y cuarto! —dijo el oso. ¡Qué lindo día!"
        ]
      }
    },
    M: {
      palabra: {texto:"y media", silabas:["y", "me", "dia"]},
      intro: "Cuando la aguja grande mira el seis, es y media.",
      buscar: "¿Qué reloj dice las cinco y media?",
      frase: {texto:"Son las cinco y media.", partes:["Son las cinco", "y media."]},
      respuesta: "¡Muy bien! Las cinco y media.",
      cuento: {
        titulo: "La hora del baño",
        paginas: [
          "Cuando la aguja grande está en el seis, es *y media*.",
          "A las cinco y media, la coneja preparó el baño.",
          "¡Burbujas por todos lados!",
          "{N} dijo: —¡Son las cinco y media, la hora del baño!"
        ]
      }
    },
    Q: {
      palabra: {texto:"menos cuarto", silabas:["me", "nos", "cuar", "to"]},
      intro: "Cuando la aguja grande mira el nueve, falta un cuarto: es menos cuarto.",
      buscar: "¿Qué reloj dice las siete menos cuarto?",
      frase: {texto:"Son las siete menos cuarto.", partes:["Son las siete", "menos cuarto."]},
      respuesta: "¡Genial! Las siete menos cuarto.",
      cuento: {
        titulo: "Ya casi",
        paginas: [
          "Cuando la aguja grande está en el nueve, es *menos cuarto*.",
          "Faltaba un ratito para las siete: eran las siete menos cuarto.",
          "La gata bostezó: ¡uaaa! Ya casi era la hora de comer.",
          "—¡Son las siete menos cuarto! —dijo {N}—. ¡Ya casi!"
        ]
      }
    }
  },
  final: {
    pregunta: "¿Qué hora es?",
    frase: {texto:"¡Son las doce en punto!", partes:["¡Son las doce", "en punto!"]},
    despedida: "¡Din, don!",
    chau: "¡Suenan las campanas!",
    lograste: "¡Lo lograste! ¡Ya sabés mirar el reloj!",
    todos: "¡Tenés todos los sellos! Subí a lo más alto y buscá la puerta verde.",
    ppFinal: "Juntá todos los sellos y después, ¡a hacer sonar las campanas!",
    otraVez: "¡Otra vuelta al reloj! Juntá los sellos otra vez.",
    otraVezB: "Otra vuelta"
  },
  // el microjuego que se abre al terminar el lugar ({n} = cuántos relojes puso bien)
  microjuego: {
    romper: "¡Ahora, a romper relojes! ¡Tocalos!",
    titulo: "¡Poné el reloj en hora!",
    intro: "Escuchá la hora. Tocá el número, y después elegí: en punto, y cuarto, y media o menos cuarto.",
    pon: "Poné el reloj así:",
    asi: "Mirá, es así:",
    fin: "¡Pusiste bien {n} relojes!",
    tipos: {punto:"en punto", cuarto:"y cuarto", media:"y media", menos:"menos cuarto"},
    hora: (n, t) => `Son las ${n}${{punto:" en punto", cuarto:" y cuarto", media:" y media", menos:" menos cuarto"}[t]}.`
  },
  palabrasExtra: [
    {texto:"uno", silabas:["u", "no"]},
    {texto:"dos", silabas:["dos"]},
    {texto:"tres", silabas:["tres"]},
    {texto:"cuatro", silabas:["cua", "tro"]},
    {texto:"cinco", silabas:["cin", "co"]},
    {texto:"seis", silabas:["seis"]},
    {texto:"siete", silabas:["sie", "te"]},
    {texto:"ocho", silabas:["o", "cho"]},
    {texto:"nueve", silabas:["nue", "ve"]},
    {texto:"diez", silabas:["diez"]},
    {texto:"once", silabas:["on", "ce"]},
    {texto:"doce", silabas:["do", "ce"]}
  ],
  frasesExtra: [
    {texto:"¡Tictac, tictac!", partes:["¡Tictac,", "tictac!"]},
    {texto:"Es la una.", partes:["Es la una."]},
    {texto:"Son las dos.", partes:["Son las dos."]},
    {texto:"Es la hora de dormir.", partes:["Es la hora", "de dormir."]}
  ],
  preguntas: [
    {p:"¿Qué reloj dice las tres en punto?", r:"¡Ese! Las tres en punto."},
    {p:"¿Qué reloj dice las cinco y media?", r:"¡Ese! Las cinco y media."},
    {p:"¿Qué reloj dice las cuatro y cuarto?", r:"¡Ese! Las cuatro y cuarto."},
    {p:"¿Qué reloj dice las siete menos cuarto?", r:"¡Ese! Las siete menos cuarto."},
    {p:"¿Qué reloj tiene la aguja chica roja?", r:"¡Ese! La aguja chica."},
    {p:"¿Qué reloj tiene la aguja grande roja?", r:"¡Ese! La aguja grande."},
    {p:"¿Cuál es el número tres?", r:"¡Sí! El tres."},
    {p:"¿Cuál es el número siete?", r:"¡Sí! El siete."},
    {p:"¿Cuál es el número doce?", r:"¡Sí! El doce."},
    {p:"¿Cuál es el número nueve?", r:"¡Sí! El nueve."}
  ],
  objetos: {"#":"la pared", b:"el banco", p:"la planta", e:"el engranaje", "~":"la puerta"}
});
