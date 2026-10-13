/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('primeras', 'en', {
  titulo: "Hello!",
  lugar: {texto:"the treehouse", silabas:["the", "tree", "house"]},
  bienvenida: "Here we are at the treehouse!",
  niveles: [{nombre:"The garden", numTexto:"zero"}, {nombre:"The trunk", numTexto:"one"}, {nombre:"The treehouse", numTexto:"two"}],
  estaciones: {
    H: {
      palabra: {texto:"hello", silabas:["hel", "lo"]},
      intro: "When we arrive, we say hello.",
      frase: {texto:"Hello! How are you?", partes:["Hello!", "How are you?"]},
      respuesta: "Very well!",
      cuento: {
        titulo: "Hello, friend!",
        paginas: [
          "The bunny says *hello*, waving her paw.",
          "{N} said back: \"Hello! How are you?\"",
          "\"Very well!\" said the bunny, and she jumped.",
          "Now they're friends!"
        ]
      }
    },
    S: {
      palabra: {texto:"yes", silabas:["yes"]},
      intro: "When we want something, we say yes.",
      frase: {texto:"Yes, please!", partes:["Yes,", "please!"]},
      respuesta: "Here you are!",
      cuento: {
        titulo: "The biscuit",
        paginas: [
          "The little bear had a biscuit. \"Would you like it?\"",
          "\"*Yes*, please!\" said {N}.",
          "Mmm, yummy!",
          "\"Thank you, little bear!\""
        ]
      }
    },
    N: {
      palabra: {texto:"no", silabas:["no"]},
      intro: "When we don't want something, we say no.",
      frase: {texto:"No, thank you.", partes:["No,", "thank you."]},
      respuesta: "That's OK!",
      cuento: {
        titulo: "The soup",
        paginas: [
          "The puppy brought some hot soup.",
          "{N} wasn't hungry. \"*No*, thank you.\"",
          "\"That's OK!\" said the puppy.",
          "Later they had an ice cream. Yes to that!"
        ]
      }
    },
    G: {
      palabra: {texto:"thank you", silabas:["thank", "you"]},
      intro: "When someone gives us something, we say thank you.",
      frase: {texto:"Thank you very much!", partes:["Thank you", "very much!"]},
      respuesta: "You're welcome!",
      cuento: {
        titulo: "The flower",
        paginas: [
          "The kitty had a very big heart.",
          "She gave {N} a flower.",
          "\"*Thank you* very much!\" said {N}.",
          "\"You're welcome!\" Saying thank you is lovely!"
        ]
      }
    },
    A: {
      palabra: {texto:"water", silabas:["wa", "ter"]},
      intro: "When we're thirsty, we ask for water.",
      frase: {texto:"I want water.", partes:["I want", "water."]},
      respuesta: "Here you are!",
      cuento: {
        titulo: "So hot!",
        paginas: [
          "So hot! {N} was thirsty.",
          "\"I want *water*,\" {N} said to the bear.",
          "Glug, glug, glug! So cool!",
          "\"Thank you!\" No more thirsty!"
        ]
      }
    },
    M: {
      palabra: {texto:"more", silabas:["more"]},
      intro: "When we want it again, we say more.",
      frase: {texto:"More, please!", partes:["More,", "please!"]},
      respuesta: "One more!",
      cuento: {
        titulo: "More balls!",
        paginas: [
          "The kitten threw balls: one!",
          "\"*More*, please!\" clapped {N}. Two, three!",
          "More and more! So many bubbles!",
          "And they danced until they were tired!"
        ]
      }
    },
    C: {
      palabra: {texto:"bye-bye", silabas:["bye", "bye"]},
      intro: "When we leave, we say bye-bye.",
      frase: {texto:"Bye-bye! See you tomorrow!", partes:["Bye-bye!", "See you tomorrow!"]},
      respuesta: "Bye, bye!",
      cuento: {
        titulo: "See you tomorrow",
        paginas: [
          "It was night time. The moon came out.",
          "\"*Bye-bye*! See you tomorrow!\" waved {N}.",
          "The dog went to sleep: zzz…",
          "Bye, bye! See you tomorrow!"
        ]
      }
    }
  },
  final: {
    pregunta: "You know lots of words now! Shall we go on an adventure?",
    frase: {texto:"Yes! Let's go!", partes:["Yes!", "Let's go!"]},
    palabras: ["Hello!", "Yes!", "No!", "Thank you!", "Water!", "More!", "Bye-bye!"],
    despedida: "Off on an adventure!",
    chau: "Bye-bye, treehouse!",
    lograste: "You did it! You know your first words!",
    todos: "You have all the stamps! Find the green door: your friends are waiting!",
    ppFinal: "Collect all the stamps, and then let's say hello to our friends!",
    otraVez: "Another day at the treehouse! Collect the stamps again.",
    otraVezB: "Another day"
  },
  microjuego: {
    titulo: "Colorful bubbles!",
    intro: "Listen to the color and pop that bubble.",
    pide: c => `Pop ${/^[aeiou]/i.test(c) ? 'an' : 'a'} ${c} bubble!`,
    esa: c => `That one is ${c}!`,
    libre: "Now pop as many bubbles as you like!",
    fin: "You popped {n} bubbles!"
  },
  palabrasExtra: [
    {texto:"red", silabas:["red"]},
    {texto:"blue", silabas:["blue"]},
    {texto:"yellow", silabas:["yel", "low"]},
    {texto:"green", silabas:["green"]}
  ],
  frasesExtra: [
    {texto:"What's your name?", partes:["What's", "your name?"]},
    {texto:"Good morning!", partes:["Good", "morning!"]},
    {texto:"Good night!", partes:["Good", "night!"]},
    {texto:"I love you!", partes:["I love you!"]},
    {texto:"Again!", partes:["Again!"]}
  ],
  preguntas: [
    {p:"What do we say when we arrive?", r:"Hello!"},
    {p:"What do we say when we leave?", r:"Bye-bye!"},
    {p:"Which one says yes?", r:"This one!"},
    {p:"Which one says no?", r:"This one!"},
    {p:"What do we say when we get a present?", r:"Thank you!"},
    {p:"What do we drink when we're thirsty?", r:"Water!"},
    {p:"What do we say when we want it again?", r:"More!"},
    {p:"Which one is red?", r:"This one!"},
    {p:"Which one is blue?", r:"This one!"},
    {p:"Which one is yellow?", r:"This one!"}
  ],
  objetos: {"#":"the fence", r:"the tree", f:"the flowers", b:"the bench", j:"the toys", s:"the sofa", "~":"the door"}
});
