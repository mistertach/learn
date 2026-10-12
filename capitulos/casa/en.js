/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('casa', 'en', {
  titulo: "Our house",
  lugar: {texto:"our house", silabas:["our", "house"]},
  bienvenida: "Welcome home!",
  niveles: [{nombre:"The garden", numTexto:"zero"}, {nombre:"Downstairs", numTexto:"one"}, {nombre:"Upstairs", numTexto:"two"}],
  estaciones: {
    R: {
      palabra: {texto:"the dog", silabas:["the", "dog"]},
      intro: "This is the garden. There's our dog!",
      frase: {texto:"Come here, puppy!", partes:["Come here,", "puppy!"]},
      respuesta: "Woof, woof!",
      cuento: {
        titulo: "The jumping dog",
        paginas: [
          "In the garden, *the dog* was wagging its tail.",
          "\"Come here, puppy!\" called {N}.",
          "The dog jumped so high… that it fell into the flowers!",
          "{N} gave it a hug. Woof, woof!"
        ]
      }
    },
    A: {
      palabra: {texto:"dad", silabas:["dad"]},
      intro: "This is the living room. Dad is reading the newspaper.",
      frase: {texto:"Good morning, Dad!", partes:["Good morning,", "Dad!"]},
      respuesta: "Good morning, sweetie! Did you sleep well?",
      cuento: {
        titulo: "The flying newspaper",
        paginas: [
          "*Dad* was reading the newspaper on the sofa.",
          "\"Good morning, Dad!\" said {N}.",
          "Whoosh! A page of the newspaper flew out of the window.",
          "Dad laughed: \"Never mind! Let's play together instead!\""
        ]
      }
    },
    M: {
      palabra: {texto:"mom", silabas:["mom"]},
      intro: "This is the kitchen. Mom is cooking!",
      frase: {texto:"Hi, Mom! How are you?", partes:["Hi, Mom!", "How are you?"]},
      respuesta: "Very well, thank you! And you?",
      cuento: {
        titulo: "Mom's soup",
        paginas: [
          "In the kitchen, *Mom* was making soup.",
          "\"Hi, Mom! How are you?\" asked {N}.",
          "\"Very well! Do you want a taste?\" said Mom.",
          "Mmm! Mom's soup is the best in the world."
        ]
      }
    },
    H: {
      palabra: {texto:"brother", silabas:["broth", "er"]},
      intro: "Your brother has lots of toys.",
      frase: {texto:"Shall we play together?", partes:["Shall we play", "together?"]},
      respuesta: "Yes! Let's play!",
      cuento: {
        titulo: "The block tower",
        paginas: [
          "{N}'s *brother* built a tower of blocks.",
          "\"Shall we play together?\" asked {N}.",
          "The tower grew and grew… and fell down! Boom!",
          "They both laughed a lot and built it again."
        ]
      }
    },
    E: {
      palabra: {texto:"sister", silabas:["sis", "ter"]},
      intro: "Your sister is in her room, reading.",
      frase: {texto:"Can you read me a story?", partes:["Can you read me", "a story?"]},
      respuesta: "Of course!",
      cuento: {
        titulo: "Sister's story",
        paginas: [
          "{N}'s *sister* had a book about dragons.",
          "\"Can you read me a story?\" asked {N}.",
          "\"Once upon a time there was a dragon who was scared of the dark…\"",
          "{N} listened to the whole story, snuggled up close to their sister."
        ]
      }
    },
    B: {
      palabra: {texto:"the baby", silabas:["the", "bay", "bee"]},
      intro: "Shh! The baby is in the crib.",
      frase: {texto:"Shh! The baby is sleeping.", partes:["Shh!", "The baby is sleeping."]},
      respuesta: "Goo goo… ga ga.",
      cuento: {
        titulo: "The baby who wouldn't sleep",
        paginas: [
          "*The baby* was in the crib, but didn't want to sleep!",
          "\"Shh!\" said {N}, and sang a song.",
          "The baby yawned: aaah…",
          "And fell fast asleep. Shh! The baby is sleeping."
        ]
      }
    },
    C: {
      palabra: {texto:"the bed", silabas:["the", "bed"]},
      intro: "This is your room. Look at this lovely bed!",
      frase: {texto:"Good night!", partes:["Good", "night!"]},
      respuesta: "Sweet dreams! See you tomorrow.",
      cuento: {
        titulo: "Bedtime",
        paginas: [
          "It was night time. {N} put on their pajamas.",
          "Jump into *the bed*: boing, boing!",
          "Dad gave a kiss: \"Good night!\"",
          "\"See you tomorrow!\" said {N}, and closed their eyes."
        ]
      }
    }
  },
  final: {
    pregunta: "Hello, sweetheart! How are you?",
    frase: {texto:"Very well! I love you, Grandma!", partes:["Very well!", "I love you,", "Grandma!"]},
    despedida: "Big kisses!",
    chau: "Bye-bye, Grandma!",
    lograste: "You did it! You said hello to the whole family!",
    todos: "You have all the stamps! Find the green door: Grandma is calling you!",
    ppFinal: "Collect all the stamps, and then talk to Grandma!",
    otraVez: "Another day at home! Collect the stamps again.",
    otraVezB: "Another day"
  },
  microjuego: {
    titulo: "The family cake!",
    intro: "Decorate the cake! Tap something yummy, then tap the cake.",
    soplar: "Let's blow out the candles!",
    mas: "Add a few more things!",
    listo: "What a lovely cake! Hooray!",
    ingredientes: [{texto:"the cream"}, {texto:"the strawberry"}, {texto:"the chocolate"}, {texto:"the sprinkles"}, {texto:"the cherry"}, {texto:"the candle"}]
  },
  palabrasExtra: [
    {texto:"grandma", silabas:["grand", "ma"]},
    {texto:"grandpa", silabas:["grand", "pa"]},
    {texto:"the family", silabas:["the", "fam", "ih", "lee"]},
    {texto:"the sofa", silabas:["the", "so", "fuh"]},
    {texto:"the phone", silabas:["the", "phone"]}
  ],
  frasesExtra: [
    {texto:"Good morning!", partes:["Good", "morning!"]},
    {texto:"How are you?", partes:["How", "are you?"]},
    {texto:"Very well, thank you.", partes:["Very well,", "thank you."]},
    {texto:"I love you!", partes:["I love you!"]},
    {texto:"See you tomorrow!", partes:["See you", "tomorrow!"]}
  ],
  preguntas: [
    {p:"Who makes the soup?", r:"Mom!"},
    {p:"Who reads the newspaper on the sofa?", r:"Dad!"},
    {p:"Who goes woof, woof?", r:"The dog!"},
    {p:"Where do we sleep?", r:"In the bed!"},
    {p:"Who is the smallest in the family?", r:"The baby!"},
    {p:"What do we use to talk to Grandma?", r:"The phone!"},
    {p:"Who reads us stories?", r:"Sister!"},
    {p:"Who builds block towers?", r:"Brother!"},
    {p:"Who calls us on the phone?", r:"Grandma!"},
    {p:"Where do we sit to rest?", r:"On the sofa!"}
  ],
  objetos: {"#":"the wall", b:"the bench", p:"the plant", m:"the table", f:"the flowers", r:"the tree", s:"the sofa", j:"the toys", "~":"the door"}
});
