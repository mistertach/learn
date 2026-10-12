/* =========================================================
   CAPÍTULO 6 · LA PLAZA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('plaza', 'en', {
  titulo: "The playground",
  lugar: {texto:"the playground", silabas:["the", "play", "ground"]},
  bienvenida: "Here we are at the playground!",
  niveles: [{nombre:"The swings", numTexto:"zero"}, {nombre:"The sandpit", numTexto:"one"}, {nombre:"The tower", numTexto:"two"}],
  estaciones: {
    H: {
      palabra: {texto:"the swing", silabas:["the", "swing"]},
      intro: "These are the swings. Let's swing!",
      frase: {texto:"Push me, please!", partes:["Push me,", "please!"]},
      respuesta: "Here we go! Higher!",
      cuento: {
        titulo: "Higher",
        paginas: [
          "The little bear was on *the swing*: forwards and backwards!",
          "\"Push me, please!\" asked {N}.",
          "Higher, higher! {N} put their arms up: it felt like flying!",
          "Then it was the little bear's turn. Swinging is so much fun!"
        ]
      }
    },
    S: {
      palabra: {texto:"the seesaw", silabas:["the", "see", "saw"]},
      intro: "The seesaw! You need a friend to play.",
      frase: {texto:"Up and down!", partes:["Up", "and down!"]},
      respuesta: "I go up, you go down!",
      cuento: {
        titulo: "Up and down",
        paginas: [
          "*The seesaw* was all alone, waiting for friends.",
          "The bunny asked {N}: \"Shall we play?\"",
          "Up and down! Up and down! The bunny jumps, {N} jumps!",
          "What fun! They both clapped."
        ]
      }
    },
    O: {
      palabra: {texto:"the ball", silabas:["the", "ball"]},
      intro: "This is where we play ball.",
      frase: {texto:"I kick the ball!", partes:["I kick", "the ball!"]},
      respuesta: "Goooal!",
      cuento: {
        titulo: "Goal!",
        paginas: [
          "The puppy had *a ball* that bounced and bounced.",
          "{N} ran and ran and… kicked the ball!",
          "Oops! The ball rolled far, far away.",
          "And it went into the goal! Goooal! {N} jumped for joy."
        ]
      }
    },
    A: {
      palabra: {texto:"the bucket", silabas:["the", "buck", "it"]},
      intro: "This is the sandpit. There's a bucket and a spade!",
      frase: {texto:"I'm making a sandcastle.", partes:["I'm making", "a sandcastle."]},
      respuesta: "What a lovely castle!",
      cuento: {
        titulo: "The sandcastle",
        paginas: [
          "The kitty had *a bucket*, a red one, and a blue spade.",
          "{N} crouched down and filled the bucket with sand.",
          "Turn it over and… a castle!",
          "\"What a lovely castle!\" Everyone clapped."
        ]
      }
    },
    J: {
      palabra: {texto:"the jump rope", silabas:["the", "jump", "rope"]},
      intro: "Can you jump rope?",
      frase: {texto:"I jump rope!", partes:["I jump", "rope!"]},
      respuesta: "One, two, three! Well done!",
      cuento: {
        titulo: "Jump, jump!",
        paginas: [
          "The little grey cat had *a jump rope*.",
          "{N} jumped: one, two, three!",
          "The little cat jumped too. They jumped together!",
          "Ten jumps! Arms up!"
        ]
      }
    },
    B: {
      palabra: {texto:"the bubbles", silabas:["the", "bub", "bles"]},
      intro: "Look at all the bubbles!",
      frase: {texto:"I blow bubbles!", partes:["I blow", "bubbles!"]},
      respuesta: "Look at them fly!",
      cuento: {
        titulo: "Bubbles",
        paginas: [
          "The bunny had a jar of *bubbles*.",
          "{N} blew very gently: whoooo!",
          "Bubbles everywhere! {N} spun and spun among the bubbles.",
          "And everyone danced under the bubbles."
        ]
      }
    },
    T: {
      palabra: {texto:"the slide", silabas:["the", "slide"]},
      intro: "This is the slide. It's really high!",
      frase: {texto:"I go down the slide!", partes:["I go down", "the slide!"]},
      respuesta: "Wheee! So fast!",
      cuento: {
        titulo: "The giant slide",
        paginas: [
          "On the tower there was *a slide*, yellow and super high!",
          "{N} climbed the ladder: one step, two steps…",
          "\"I go down the slide!\" Wheee! So fast!",
          "{N} jumped for joy: \"Again!\""
        ]
      }
    }
  },
  final: {
    pregunta: "Shall we play Simon says?",
    frase: {texto:"Yes! Let's play!", partes:["Yes!", "Let's play!"]},
    ordenes: ["Simon says: jump!", "Simon says: spin around!", "Simon says: clap your hands!", "Simon says: crouch down!", "Simon says: arms up!"],
    despedida: "Great playing!",
    chau: "Bye-bye, playground!",
    lograste: "You did it! You played everything at the playground!",
    todos: "You have all the stamps! Find the green door: let's play Simon says!",
    ppFinal: "Collect all the stamps, and then let's play Simon says!",
    otraVez: "Another afternoon at the playground! Collect the stamps again.",
    otraVezB: "Another afternoon"
  },
  microjuego: {
    correr: "Let's run with the kite! Press and hold to make it go up.",
    titulo: "The kite!",
    intro: "It's windy! Listen, and fly the kite to the star.",
    fin: "You caught {n} stars!",
    dirs: ["Up!", "Down!", "Left!", "Right!"]
  },
  palabrasExtra: [
    {texto:"the kite", silabas:["the", "kite"]},
    {texto:"the spade", silabas:["the", "spade"]},
    {texto:"the castle", silabas:["the", "castle"]},
    {texto:"the ice cream", silabas:["the", "ice", "cream"]}
  ],
  frasesExtra: [
    {texto:"Your turn!", partes:["Your", "turn!"]},
    {texto:"My turn!", partes:["My", "turn!"]},
    {texto:"I jump really high!", partes:["I jump", "really high!"]},
    {texto:"Run, run!", partes:["Run,", "run!"]},
    {texto:"I'd like an ice cream!", partes:["I'd like", "an ice cream!"]}
  ],
  preguntas: [
    {p:"What do we go down? Wheee!", r:"The slide!"},
    {p:"What do we swing on?", r:"The swing!"},
    {p:"What do we kick?", r:"The ball!"},
    {p:"What do we blow?", r:"Bubbles!"},
    {p:"What do we jump with?", r:"The jump rope!"},
    {p:"Where do we go up and down?", r:"On the seesaw!"},
    {p:"What do we make with sand?", r:"A castle!"},
    {p:"What flies in the wind?", r:"The kite!"},
    {p:"What do we eat when it's hot?", r:"Ice cream!"},
    {p:"Where do we put the sand?", r:"In the bucket!"}
  ],
  objetos: {"#":"the fence", r:"the tree", f:"the flowers", b:"the bench", k:"the sandpit", "~":"the door"}
});
