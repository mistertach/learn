/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('primeras', 'en', {
  charlas: [
    {titulo:"Chatting with the bunny", chau:"Nice to meet you! See you soon!", pasos:[
      {di:"Hello! What's your name?", op:[{t:"My name is {N}.", r:"What a lovely name!"}, {t:"Hello! I'm {N}.", r:"Nice to meet you, {N}!"}]},
      {op:[{t:"How are you?", r:"I'm very well, thank you!"}, {t:"What's your name?", r:"My name is Fluffy."}]},
      {di:"Do you like to play?", op:[{t:"Yes, I like to play!", r:"Me too! Playing is the best."}, {t:"Yes, a lot!", r:"Me too! I love it."}]},
      {op:[{t:"Do you want to be my friend?", r:"Yes! We're friends now!"}, {t:"What do you like to play?", r:"I like to play hide and seek."}]}]},
    {titulo:"Chatting with the cat", chau:"Thank you, friend! Bye-bye!", pasos:[
      {di:"Look, I have a present for you!", op:[{t:"Thank you!", r:"You're welcome!"}, {t:"Thank you very much!", r:"You're welcome, friend!"}]},
      {op:[{t:"What is it?", r:"It's a little star!"}, {t:"Is it for me?", r:"Yes, it's for you!"}]},
      {di:"Do you want to share it with me?", op:[{t:"Yes, let's share!", r:"How nice! Sharing is lovely."}, {t:"Yes, please!", r:"Here, half for you and half for me."}]},
      {op:[{t:"Do you like it?", r:"I love it!"}, {t:"Can I give you a hug?", r:"Yes, a big hug!"}]}]},
    {titulo:"Chatting with the bear", chau:"That was refreshing! See you soon!", pasos:[
      {di:"I'm thirsty. Do you want some water?", op:[{t:"Yes, water please!", r:"Here you go. Cheers!"}, {t:"Yes, I'm thirsty too!", r:"Here's a glass for you."}]},
      {op:[{t:"Is the water cold?", r:"Yes, nice and cold!"}, {t:"Where does water come from?", r:"From the tap, and from the rain!"}]},
      {di:"Would you like some more?", op:[{t:"Yes, more please!", r:"Of course! Here's some more."}, {t:"No, thank you. I'm full.", r:"All right. Thanks for drinking with me."}]},
      {op:[{t:"Do you like water?", r:"Yes, it's my favorite!"}, {t:"Shall we play?", r:"Yes! Let's play!"}]}]},
    {titulo:"Chatting at the door", chau:"Bye-bye, friend! See you on the adventure!", pasos:[
      {di:"You know lots of words now! Shall we go on an adventure?", op:[{t:"Yes, let's go!", r:"Hooray! Come with me."}, {t:"Yes, I'm ready!", r:"Great! Off we go."}]},
      {op:[{t:"Where are we going?", r:"To lots of new places!"}, {t:"Who is coming with us?", r:"All your friends!"}]},
      {di:"Are you happy?", op:[{t:"Yes, I'm very happy!", r:"Me too! I'm so glad."}, {t:"Yes, I love adventures!", r:"Me too! Adventures are fun."}]},
      {op:[{t:"Are you happy too?", r:"Yes, very happy!"}, {t:"Can we go now?", r:"Yes! Off we go."}]}]}
  ],
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
