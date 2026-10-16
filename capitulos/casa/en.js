/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('casa', 'en', {
  charlas: [
    {titulo:"Chatting with Dad", chau:"I love you, little one! See you later!", pasos:[
      {di:"Good morning! Did you sleep well?", op:[{t:"Yes, I slept well!", r:"Great! You look rested."}, {t:"Yes, I had sweet dreams.", r:"How lovely! Sweet dreams are the best."}]},
      {op:[{t:"What are you reading, Dad?", r:"I'm reading the newspaper."}, {t:"Do you want to play?", r:"Of course! Let's play together."}]},
      {di:"What would you like for breakfast?", op:[{t:"I'd like some milk, please.", r:"Here's your milk. Enjoy!"}, {t:"I'd like some bread, please.", r:"Here's your bread. Yum!"}]},
      {op:[{t:"Are you hungry too, Dad?", r:"Yes, very hungry!"}, {t:"Can I help you?", r:"Yes, thank you! You help me a lot."}]}]},
    {titulo:"Chatting with Mom", chau:"Come here, a big hug! Lunch is almost ready.", pasos:[
      {di:"Hello, sweetheart! How are you?", op:[{t:"I'm very well, thank you!", r:"I'm so happy to hear that!"}, {t:"I'm a little sleepy.", r:"Then we'll rest after lunch."}]},
      {op:[{t:"What are you cooking, Mom?", r:"I'm making soup. Your favorite!"}, {t:"Can I taste it?", r:"Of course! Careful, it's hot."}]},
      {di:"Would you like some more soup?", op:[{t:"Yes, please!", r:"Here you go!"}, {t:"No, thank you. It was delicious!", r:"I'm glad you liked it!"}]},
      {op:[{t:"Can I help you, Mom?", r:"Yes! Can you set the table?"}, {t:"Is it ready yet?", r:"Almost! Just one more minute."}]}]},
    {titulo:"Chatting with your sister", chau:"You're the best! See you later!", pasos:[
      {di:"Hi! Do you want to read a book with me?", op:[{t:"Yes! I love books.", r:"Me too! Let's sit here."}, {t:"No, I want to play.", r:"Okay! First we play, then we read."}]},
      {op:[{t:"What's your favorite color?", r:"Purple! What's yours?"}, {t:"What's this book about?", r:"It's a story about a little dog."}]},
      {di:"Do you like this story?", op:[{t:"Yes, it's funny!", r:"I think so too! Let's read it again."}, {t:"Yes, it's beautiful!", r:"I'm glad! It's my favorite."}]},
      {op:[{t:"Can we play now?", r:"Yes! Come on, let's play!"}, {t:"Do you want a hug?", r:"Yes, a big hug!"}]}]},
    {titulo:"Chatting with Grandma", chau:"Big kisses, my love! Bye-bye!", pasos:[
      {di:"Hello, sweetheart! I miss you so much!", op:[{t:"I miss you too, Grandma!", r:"How sweet you are!"}, {t:"Hello, Grandma! I love you!", r:"I love you too, my treasure!"}]},
      {op:[{t:"How are you, Grandma?", r:"Very well, now that I see you!"}, {t:"What are you doing?", r:"I'm knitting a scarf for you."}]},
      {di:"What did you do today?", op:[{t:"I played with my dog.", r:"How fun! Dogs are so sweet."}, {t:"I played in the garden.", r:"How lovely! Fresh air is good for you."}]},
      {op:[{t:"When are you coming, Grandma?", r:"Very soon! I'll bring you a present."}, {t:"Can you tell me a story?", r:"Of course! Once upon a time…"}]}]}
  ],
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
