/* =========================================================
   CAPÍTULO 12 · LA PLAYA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   ========================================================= */
registrarTextos('playa', 'es', {
  charlas: [
    {titulo:"Charlar con el guardavidas", chau:"¡A disfrutar del mar! ¡Cuidate!", pasos:[
      {di:"¡Hola! ¿Vas a nadar hoy?", op:[{t:"¡Sí, quiero nadar!", r:"¡Genial! El agua está tranquila."}, {t:"Sí, con mis antiparras.", r:"¡Muy bien! Así vas a ver los peces."}]},
      {op:[{t:"¿Está fría el agua?", r:"Un poquito fría, pero se pasa rápido."}, {t:"¿Hay peces?", r:"¡Sí, muchos peces de colores!"}]},
      {di:"¿Querés ponerte protector solar?", op:[{t:"Sí, por favor.", r:"Acá tenés. Ponete en los brazos y en la cara."}, {t:"Sí, no quiero quemarme.", r:"¡Muy bien pensado!"}]},
      {op:[{t:"¿Dónde dejo mis cosas?", r:"Abajo de la sombrilla."}, {t:"¿Puedo meterme ya?", r:"¡Sí! Pero siempre cerca de mí."}]}]},
    {titulo:"Charlar con el constructor de castillos", chau:"¡Qué castillo hermoso! ¡Chau!", pasos:[
      {di:"¡Mirá mi castillo de arena! ¿Querés ayudarme?", op:[{t:"¡Sí, te ayudo!", r:"¡Genial! Necesito más arena."}, {t:"¡Qué lindo castillo!", r:"¡Gracias! Lo hice con el balde."}]},
      {op:[{t:"¿Qué usás para hacerlo?", r:"Un balde y una palita."}, {t:"¿Le ponemos una torre?", r:"¡Sí! La torre más alta."}]},
      {di:"¿Dónde ponemos una bandera?", op:[{t:"En la torre más alta.", r:"¡Buena idea! Ahí queda perfecta."}, {t:"Arriba del castillo.", r:"¡Sí! Así la ve todo el mundo."}]},
      {op:[{t:"¿Y si viene una ola?", r:"¡No pasa nada! Hacemos otro."}, {t:"¿Puedo hacer un camino?", r:"¡Claro! Cavá con la palita."}]}]},
    {titulo:"Charlar con el pececito", chau:"¡Glu, glu! ¡Hasta pronto!", pasos:[
      {di:"¡Hola! ¡Bienvenido al fondo del mar!", op:[{t:"¡Hola, pececito!", r:"¡Glu, glu! ¡Qué contento estoy!"}, {t:"¡Qué lindo es el mar!", r:"¡Es mi casa!"}]},
      {op:[{t:"¿Cómo te llamás?", r:"Me llamo Burbuja."}, {t:"¿Con quién vivís?", r:"Con mi familia de peces."}]},
      {di:"¿Querés nadar conmigo?", op:[{t:"¡Sí, vamos!", r:"¡Seguime! Glu, glu."}, {t:"Sí, pero despacito.", r:"¡Claro! Despacito, despacito."}]},
      {op:[{t:"¿Qué comés?", r:"Comida chiquita y algas."}, {t:"¿Dónde vive el cangrejo?", r:"Allá, entre las rocas."}]}]},
    {titulo:"Charlar con la tortuga", chau:"¡Fue un lindo paseo! ¡Adiós!", pasos:[
      {di:"Hola, chiquito. ¿Qué hacés por acá?", op:[{t:"Estoy nadando.", r:"¡Qué bien nadás!"}, {t:"Estoy mirando los peces.", r:"¡Hay muchos para ver!"}]},
      {op:[{t:"¿Cuántos años tenés?", r:"¡Tengo cien años!"}, {t:"¿Por qué vas despacito?", r:"Porque en el mar no hay apuro."}]},
      {di:"¿Querés subirte a mi caparazón?", op:[{t:"¡Sí, quiero!", r:"¡Agarrate fuerte!"}, {t:"Sí, pero con cuidado.", r:"Despacito, como siempre."}]},
      {op:[{t:"¿Adónde vamos?", r:"A ver el tesoro del mar."}, {t:"¿Dónde está tu casa?", r:"¡Dondequiera que yo nade!"}]}]}
  ],
  titulo: "La playa",
  lugar: {texto:"la playa", silabas:["la","pla","ya"]},
  bienvenida: "¡Llegamos a la playa!",
  niveles: [{nombre:"La playa", numTexto:"cero"}, {nombre:"Bajo el mar", numTexto:"uno"}],
  estaciones: {
    S: {
      palabra: {texto:"la sombrilla", silabas:["la","som","bri","lla"]},
      intro: "¡Llegamos a la playa! Esta es nuestra sombrilla.",
      frase: {texto:"¡Qué lindo día de playa!", partes:["¡Qué lindo día","de playa!"]},
      respuesta: "¡Sí, hace mucho sol!",
      cuento: {
        titulo: "La sombrilla roja",
        paginas: [
          "{N} llegó a la playa con *la sombrilla* roja.",
          "—¡Qué lindo día de playa! —dijo {N}.",
          "El sol brillaba fuerte, pero abajo de la sombrilla había sombra fresquita.",
          "Todos se sentaron a la sombra a comer una sandía."
        ]
      }
    },
    A: {
      palabra: {texto:"la arena", silabas:["la","a","re","na"]},
      intro: "Esta es la arena. ¡Está calentita!",
      frase: {texto:"La arena está calentita.", partes:["La arena","está calentita."]},
      respuesta: "¡Cuidado! ¡Ponete las ojotas!",
      cuento: {
        titulo: "El castillo de arena",
        paginas: [
          "{N} y el perro juntaron *arena* con el balde.",
          "—La arena está calentita —dijo {N}.",
          "Hicieron un castillo con cuatro torres.",
          "¡Y una ola chiquita les mojó los pies!"
        ]
      }
    },
    O: {
      palabra: {texto:"la ola", silabas:["la","o","la"]},
      intro: "Mirá el mar. ¡Viene una ola!",
      frase: {texto:"¡Mirá, una ola grande!", partes:["¡Mirá,","una ola grande!"]},
      respuesta: "¡Uy! ¡Casi nos mojamos!",
      cuento: {
        titulo: "La ola grande",
        paginas: [
          "Una *ola* chiquita llegó a la orilla.",
          "—¡Mirá, una ola grande! —gritó {N}.",
          "¡Splash! La ola le mojó los pies a {N}.",
          "{N} se rió y saltó la ola otra vez."
        ]
      }
    },
    N: {
      palabra: {texto:"las antiparras", silabas:["las","an","ti","pa","rras"]},
      intro: "Estas son las antiparras. ¡Con ellas vemos bajo el agua!",
      frase: {texto:"¡Me pongo las antiparras!", partes:["¡Me pongo","las antiparras!"]},
      respuesta: "¡Ahora sí! ¡A ver qué hay bajo el agua!",
      cuento: {
        titulo: "Las antiparras nuevas",
        paginas: [
          "{N} se puso *las antiparras* y una malla azul.",
          "—¡Me pongo las antiparras! —dijo {N}.",
          "Respiró fuerte y se zambulló en el mar.",
          "¡Bajo el agua todo era azul y brillante!"
        ]
      }
    },
    F: {
      palabra: {texto:"el pez", silabas:["el","pez"]},
      intro: "¡Estamos bajo el mar! Mirá, ¡un pececito!",
      frase: {texto:"¡Hola, pececito!", partes:["¡Hola,","pececito!"]},
      respuesta: "¡Glu, glu! ¡Hola!",
      cuento: {
        titulo: "El pez payaso",
        paginas: [
          "Bajo el mar, {N} vio *un pez* naranja con rayas blancas.",
          "—¡Hola, pececito! —dijo {N}.",
          "El pez nadó en círculos y soltó burbujas.",
          "¡Glu, glu! Fueron amigos para siempre."
        ]
      }
    },
    C: {
      palabra: {texto:"el cangrejo", silabas:["el","can","gre","jo"]},
      intro: "Mirá, ¡un cangrejo rojo!",
      frase: {texto:"El cangrejo camina de costado.", partes:["El cangrejo","camina de costado."]},
      respuesta: "¡Cuidado con las pinzas!",
      cuento: {
        titulo: "El cangrejo de costado",
        paginas: [
          "Entre las rocas vivía *un cangrejo* rojo.",
          "—El cangrejo camina de costado —se rió {N}.",
          "El cangrejo levantó las pinzas: ¡clac, clac!",
          "{N} le dijo chau y el cangrejo se escondió."
        ]
      }
    },
    T: {
      palabra: {texto:"la tortuga", silabas:["la","tor","tu","ga"]},
      intro: "Mirá, ¡una tortuga marina! Nada despacito.",
      frase: {texto:"¡Nademos juntos!", partes:["¡Nademos","juntos!"]},
      respuesta: "¡Vamos despacito!",
      cuento: {
        titulo: "La tortuga marina",
        paginas: [
          "Una *tortuga* muy vieja nadaba despacito.",
          "—¡Nademos juntos! —dijo {N}.",
          "Nadaron entre las algas y los corales.",
          "Al final encontraron un cofre de tesoro."
        ]
      }
    }
  },
  final: {
    pregunta: "¡Encontramos el cofre! ¿Saludamos a los amigos del mar?",
    frase: {texto:"¡Qué lindo es el mar!", partes:["¡Qué lindo","es el mar!"]},
    // lo que dice cada animal del mar, en el orden de base.js: pez, cangrejo, tortuga, estrella de mar, pulpo
    sonidos: ["¡Glu, glu!","¡Clac, clac!","¡Despacito!","¡Brillo, brillo!","¡Splash!"],
    despedida: "¡Hasta pronto, mar!",
    chau: "¡Chau, amigos del mar!",
    lograste: "¡Lo lograste! ¡Nadaste con todos los animales del mar!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡el tesoro del mar te espera!",
    ppFinal: "Juntá todos los sellos y después, ¡a buscar el tesoro del mar!",
    otraVez: "¡Otro día de playa! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego: las criaturas en el orden de base.js (texto = el nombre, p = la pregunta)
  microjuego: {
    titulo: "¡Bajo el mar!",
    intro: "Escuchá y tocá la criatura del mar.",
    fin: "¡Encontraste {n} criaturas!",
    alimentar: "Ahora, ¡dales de comer! Tocá el agua.",
    pescar: "¡Ahora a pescar! Tocá los peces con la red: ¡agarrá todos los que puedas en un minuto!",
    pescaFin: "¡Pescaste {n}!",
    ingredientes: [{texto:"el pez", p:"¿Dónde está el pez?"}, {texto:"el cangrejo", p:"¿Dónde está el cangrejo?"}, {texto:"la tortuga", p:"¿Dónde está la tortuga?"}, {texto:"la estrella de mar", p:"¿Dónde está la estrella de mar?"}, {texto:"la concha", p:"¿Dónde está la concha?"}, {texto:"el pulpo", p:"¿Dónde está el pulpo?"}]
  },
  palabrasExtra: [
    {texto:"la concha", silabas:["la","con","cha"]},
    {texto:"la estrella de mar", silabas:["la","es","tre","lla","de","mar"]},
    {texto:"el pulpo", silabas:["el","pul","po"]},
    {texto:"el barco", silabas:["el","bar","co"]},
    {texto:"el sol", silabas:["el","sol"]}
  ],
  frasesExtra: [
    {texto:"¡Cuánto sol!", partes:["¡Cuánto sol!"]},
    {texto:"¡Splash! ¡Me mojé!", partes:["¡Splash!","¡Me mojé!"]},
    {texto:"¡A nadar!", partes:["¡A nadar!"]},
    {texto:"¡Qué lenta!", partes:["¡Qué lenta!"]},
    {texto:"¡Un tesoro!", partes:["¡Un tesoro!"]}
  ],
  preguntas: [
    {p:"¿Quién nada con aletas?", r:"¡El pez!"},
    {p:"¿Quién camina de costado?", r:"¡El cangrejo!"},
    {p:"¿Quién tiene un caparazón?", r:"¡La tortuga!"},
    {p:"¿Qué nos da sombra?", r:"¡La sombrilla!"},
    {p:"¿Qué usamos para ver bajo el agua?", r:"¡Las antiparras!"},
    {p:"¿Qué viene y va en el mar?", r:"¡La ola!"},
    {p:"¿Con qué hacemos castillos?", r:"¡Con la arena!"},
    {p:"¿Quién tiene ocho brazos?", r:"¡El pulpo!"},
    {p:"¿Qué brilla en el cielo?", r:"¡El sol!"},
    {p:"¿Qué guarda un tesoro?", r:"¡El cofre!"}
  ],
  objetos: {"#":"las rocas","=":"el mar","y":"la palmera","n":"la sombrilla","i":"la roca","v":"el alga","w":"el coral","~":"la puerta"}
});
