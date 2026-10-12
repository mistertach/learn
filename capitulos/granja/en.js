/* =========================================================
   CAPÍTULO 8 · LA GRANJA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('granja', 'en', {
  titulo: "The farm",
  lugar: {texto:"the farm", silabas:["the", "farm"]},
  bienvenida: "Here we are at the farm!",
  niveles: [{nombre:"The barn", numTexto:"zero"}, {nombre:"The paddock", numTexto:"one"}, {nombre:"The pond", numTexto:"two"}],
  estaciones: {
    V: {
      palabra: {texto:"the cow", silabas:["the", "cow"]},
      intro: "Hello! Today you're working on the farm: here's your hat! Look, this is the cow.",
      frase: {texto:"The cow says moo.", partes:["The cow", "says moo."]},
      respuesta: "Moo! And I give you milk!",
      cuento: {
        titulo: "The cow and the milk",
        paginas: [
          "On the farm there lived *a cow*, black and white.",
          "\"So big!\" said {N}. And the cow answered: \"Moo!\"",
          "The cow gave {N} a bottle of fresh milk.",
          "\"Thank you, cow!\" Moo!"
        ]
      }
    },
    H: {
      palabra: {texto:"the pig", silabas:["the", "pig"]},
      intro: "The pig loves mud.",
      frase: {texto:"The pig is dirty.", partes:["The pig", "is dirty."]},
      respuesta: "Oink, oink! I love mud!",
      cuento: {
        titulo: "The muddy pig",
        paginas: [
          "*The pig* was rolling in the mud: splat, splat!",
          "\"The pig is dirty!\" laughed {N}.",
          "{N} washed it with soap and water. So many bubbles!",
          "Now it's nice and clean! Oink, oink."
        ]
      }
    },
    O: {
      palabra: {texto:"the sheep", silabas:["the", "sheep"]},
      intro: "This is the sheep. Touch it, it's so soft!",
      frase: {texto:"The sheep is soft.", partes:["The sheep", "is soft."]},
      respuesta: "Baa! My wool is so soft!",
      cuento: {
        titulo: "The sleepy sheep",
        paginas: [
          "*The sheep* had lots and lots of wool.",
          "{N} touched it: \"The sheep is soft!\"",
          "The sheep yawned… and fell asleep standing up. Zzz!",
          "When it woke up, it said \"Baa!\" and jumped for joy."
        ]
      }
    },
    K: {
      palabra: {texto:"the rooster", silabas:["the", "roos", "ter"]},
      intro: "The rooster wakes everyone up in the morning.",
      frase: {texto:"Good morning, rooster!", partes:["Good morning,", "rooster!"]},
      respuesta: "Cock-a-doodle-doo! Time to get up!",
      cuento: {
        titulo: "Cock-a-doodle-doo!",
        paginas: [
          "Very early, *the rooster* crowed: Cock-a-doodle-doo!",
          "{N} and the bunny were still sleepy. Zzz!",
          "\"Good morning, rooster!\" said {N}.",
          "Up you get, time to work! And in the nest they found an egg."
        ]
      }
    },
    B: {
      palabra: {texto:"the horse", silabas:["the", "horse"]},
      intro: "Look at this lovely horse!",
      frase: {texto:"The horse is fast.", partes:["The horse", "is fast."]},
      respuesta: "Neigh! Let's gallop!",
      cuento: {
        titulo: "Gallop away",
        paginas: [
          "*The horse* was eating grass, nice and calm.",
          "Suddenly it ran off: clip-clop, clip-clop!",
          "{N} ran after it: \"The horse is fast!\"",
          "In the end, the horse came back and gave {N} a little kiss."
        ]
      }
    },
    T: {
      palabra: {texto:"the duck", silabas:["the", "duck"]},
      intro: "This is the duck pond.",
      frase: {texto:"The duck swims.", partes:["The duck", "swims."]},
      respuesta: "Quack, quack! The water's nice and cool!",
      cuento: {
        titulo: "The swimming duck",
        paginas: [
          "In the pond there was *a duck*, a green one, swimming.",
          "The duck swam from one side to the other: quack, quack!",
          "Splash! It dived under the water… and came up with bubbles!",
          "{N} danced with the duck: quack, quack, quack!"
        ]
      }
    },
    Y: {
      palabra: {texto:"the chick", silabas:["the", "chick"]},
      intro: "Shh! Something is moving in the egg.",
      frase: {texto:"The chick is small.", partes:["The chick", "is small."]},
      respuesta: "Cheep, cheep!",
      cuento: {
        titulo: "The chicks",
        paginas: [
          "There was an egg that was moving: crack, crack…",
          "And out came *a chick*, all yellow!",
          "And then another… and another! Three little chicks!",
          "\"Cheep, cheep!\" they said to {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "It's night time. Shall we say good night to the animals?",
    frase: {texto:"Good night, animals!", partes:["Good night,", "animals!"]},
    sonidos: ["Moo!", "Oink, oink!", "Baa!", "Cock-a-doodle-doo!", "Neigh!", "Quack, quack!", "Cheep, cheep!"],
    despedida: "See you tomorrow!",
    chau: "Bye-bye, farm!",
    lograste: "You did it! You looked after all the animals!",
    todos: "You have all the stamps! Find the green door: let's say good night to the animals!",
    ppFinal: "Collect all the stamps, and then let's say good night to the animals!",
    otraVez: "Another day on the farm! Collect the stamps again.",
    otraVezB: "Another day"
  },
  microjuego: {
    burp: "Oops! Too much food!", burpCorto: "BURP!", libre: "Now throw food everywhere!",
    titulo: "Feeding time!",
    intro: "The animals are hungry. Listen, and tap the animal.",
    fin: "You fed {n} animals!",
    ingredientes: [
      {texto:"the cow", dale:"Feed the cow.", sonido:"Moo!"},
      {texto:"the pig", dale:"Feed the pig.", sonido:"Oink, oink!"},
      {texto:"the sheep", dale:"Feed the sheep.", sonido:"Baa!"},
      {texto:"the rooster", dale:"Feed the rooster.", sonido:"Cock-a-doodle-doo!"},
      {texto:"the horse", dale:"Feed the horse.", sonido:"Neigh!"},
      {texto:"the duck", dale:"Feed the duck.", sonido:"Quack, quack!"}
    ]
  },
  palabrasExtra: [
    {texto:"the egg", silabas:["the", "egg"]},
    {texto:"the milk", silabas:["the", "milk"]},
    {texto:"the tractor", silabas:["the", "trac", "tor"]},
    {texto:"the barn", silabas:["the", "barn"]}
  ],
  frasesExtra: [
    {texto:"So big!", partes:["So big!"]},
    {texto:"So small!", partes:["So small!"]},
    {texto:"So fast!", partes:["So fast!"]},
    {texto:"So dirty!", partes:["So dirty!"]},
    {texto:"So soft!", partes:["So soft!"]}
  ],
  preguntas: [
    {p:"Who says moo?", r:"The cow!"},
    {p:"Who says oink, oink?", r:"The pig!"},
    {p:"Who says cock-a-doodle-doo?", r:"The rooster!"},
    {p:"Who says quack, quack?", r:"The duck!"},
    {p:"Who has lots of wool?", r:"The sheep!"},
    {p:"Who runs really fast?", r:"The horse!"},
    {p:"Who says cheep, cheep?", r:"The chick!"},
    {p:"What does the cow give us?", r:"Milk!"},
    {p:"What does the hen lay?", r:"An egg!"},
    {p:"What does the farmer drive?", r:"The tractor!"}
  ],
  objetos: {"#":"the fence", h:"the hay bale", r:"the tree", f:"the flowers", "~":"the door"}
});
