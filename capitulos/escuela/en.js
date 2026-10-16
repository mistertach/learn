/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('escuela', 'en', {
  charlas: [
    {titulo:"Chatting at the school door", chau:"Have a great day at school!", pasos:[
      {di:"Good morning! Do you have your backpack?", op:[{t:"Yes, here's my backpack!", r:"Very good! Ready for school."}, {t:"Yes, and it's full of things!", r:"What a big backpack!"}]},
      {op:[{t:"What's in your backpack?", r:"My lunch and a book."}, {t:"What color is your backpack?", r:"It's purple!"}]},
      {di:"Are you ready to learn today?", op:[{t:"Yes, I'm ready!", r:"Wonderful! Let's go in."}, {t:"Yes, I love school!", r:"Me too! School is fun."}]},
      {op:[{t:"Do you like school?", r:"I love it!"}, {t:"Where is my classroom?", r:"Down the hall, on the left!"}]}]},
    {titulo:"Chatting with the reader", chau:"Reading is fun! See you soon!", pasos:[
      {di:"I'm reading a book. Do you want to read with me?", op:[{t:"Yes, let's read!", r:"Come sit next to me."}, {t:"Yes, I love books!", r:"Me too! Look at the pictures."}]},
      {op:[{t:"What's the book about?", r:"It's about a little elephant."}, {t:"What color is the cover?", r:"It's blue!"}]},
      {di:"Which page shall we open?", op:[{t:"The first page!", r:"Once upon a time…"}, {t:"This page!", r:"Oh, look at that picture!"}]},
      {op:[{t:"Can you read it again?", r:"Of course! Once more."}, {t:"Do you like reading?", r:"I love reading!"}]}]},
    {titulo:"Chatting at the calendar", chau:"Now you know the days! See you tomorrow!", pasos:[
      {di:"Do you know the days of the week?", op:[{t:"Yes, Monday, Tuesday, Wednesday!", r:"Very good! Keep going."}, {t:"Yes, I know some of them!", r:"Great! Let's learn them all."}]},
      {op:[{t:"How many days are in a week?", r:"Seven days!"}, {t:"Which day do we rest?", r:"On Sunday!"}]},
      {di:"What is your favorite day?", op:[{t:"Saturday!", r:"Mine too! No school!"}, {t:"Friday!", r:"Mine too! The weekend is coming."}]},
      {op:[{t:"What's your favorite day?", r:"Sunday, because we have lunch together!"}, {t:"Which day comes after Monday?", r:"Tuesday!"}]}]},
    {titulo:"Chatting with the teacher", chau:"Class dismissed! See you tomorrow!", pasos:[
      {di:"Good morning, class! Are you ready to sing?", op:[{t:"Yes, let's sing!", r:"Wonderful! Listen first."}, {t:"Yes, I love singing!", r:"Me too! Let's start."}]},
      {op:[{t:"What are we going to sing?", r:"The days of the week!"}, {t:"Can I sing with my friends?", r:"Of course! Everyone together."}]},
      {di:"Did you learn something today?", op:[{t:"Yes, I learned many words!", r:"Excellent! I'm proud of you."}, {t:"Yes, I learned the days!", r:"Very good! Well done."}]},
      {op:[{t:"Can I come back tomorrow?", r:"Of course! School is open every day."}, {t:"Did I do well?", r:"You did very well!"}]}]}
  ],
  titulo: "School",
  lugar: {texto:"school", silabas:["school"]},
  bienvenida: "Here we are at school!",
  niveles: [{nombre:"The entrance", numTexto:"zero"}, {nombre:"The classroom", numTexto:"one"}, {nombre:"The second floor", numTexto:"two"}],
  estaciones: {
    M: {
      palabra: {texto:"the backpack", silabas:["the", "back", "pack"]},
      intro: "Welcome! I'm your teacher. Hang up your backpack.",
      frase: {texto:"Good morning, teacher!", partes:["Good morning,", "teacher!"]},
      respuesta: "Good morning! Lovely to see you!",
      cuento: {
        titulo: "The first day",
        paginas: [
          "{N}'s *backpack* was ready for school.",
          "\"Good morning, teacher!\" said {N}. \"Good morning! Lovely to see you!\"",
          "{N} opened the backpack: a book, a pencil… all ready!",
          "School is starting! Hooray!"
        ]
      }
    },
    Z: {
      palabra: {texto:"the pencil", silabas:["the", "pen", "sil"]},
      intro: "Oh! Where's your pencil?",
      frase: {texto:"Can I use your pencil?", partes:["Can I use", "your pencil?"]},
      respuesta: "Of course! Here you are!",
      cuento: {
        titulo: "The borrowed pencil",
        paginas: [
          "The kitty had *a pencil*, a yellow one.",
          "{N} couldn't find their pencil… what a mess!",
          "\"Can I use your pencil?\" \"Of course! Here you are!\"",
          "{N} drew a huge star. \"Thank you!\""
        ]
      }
    },
    B: {
      palabra: {texto:"the book", silabas:["the", "book"]},
      intro: "This is the book corner.",
      frase: {texto:"Can I read this book?", partes:["Can I read", "this book?"]},
      respuesta: "Yes! It's a pirate story.",
      cuento: {
        titulo: "The pirate story",
        paginas: [
          "The bunny had *a book* full of pictures.",
          "\"Can I read this book?\" asked {N}.",
          "It was a pirate story with hidden treasure!",
          "\"Again, again!\" asked {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"the scissors", silabas:["the", "sciss", "ors"]},
      intro: "Today we're cutting out shapes.",
      frase: {texto:"I'm cutting out a circle.", partes:["I'm cutting out", "a circle."]},
      respuesta: "It's so round!",
      cuento: {
        titulo: "Paper circles",
        paginas: [
          "The puppy brought *the scissors* and some red paper.",
          "{N} cut carefully: a circle!",
          "And another, and another! Circles everywhere!",
          "They stuck them on the wall. How lovely!"
        ]
      }
    },
    C: {
      palabra: {texto:"the crayons", silabas:["the", "cray", "ons"]},
      intro: "Let's draw with the crayons!",
      frase: {texto:"I'm drawing a triangle.", partes:["I'm drawing", "a triangle."]},
      respuesta: "A green triangle! How lovely!",
      cuento: {
        titulo: "The magic drawing",
        paginas: [
          "The little grey cat had a box of *crayons*.",
          "{N} drew a green triangle.",
          "Then a square and a star… what a lovely drawing!",
          "And everyone danced around the drawing!"
        ]
      }
    },
    K: {
      palabra: {texto:"the calendar", silabas:["the", "cal", "en", "dar"]},
      intro: "Look at the calendar. What day is it today?",
      frase: {texto:"Today is Monday.", partes:["Today", "is Monday."]},
      respuesta: "And tomorrow is Tuesday!",
      cuento: {
        titulo: "What day is it today?",
        paginas: [
          "On the wall there was *a calendar* with lots of days.",
          "{N} looked at it: \"Today is Monday.\"",
          "\"And on Saturday there's no school!\" clapped the little bear.",
          "Monday, Tuesday, Wednesday! Let's learn all the days!"
        ]
      }
    },
    N: {
      palabra: {texto:"the bell", silabas:["the", "bell"]},
      intro: "Riiing! The bell is ringing.",
      frase: {texto:"Can I go out to play?", partes:["Can I go out", "to play?"]},
      respuesta: "Yes! Playtime!",
      cuento: {
        titulo: "Playtime!",
        paginas: [
          "Riiing! *The bell* rang.",
          "\"Can I go out to play?\" asked {N}.",
          "{N} ran off after the ball.",
          "Playtime is the best!"
        ]
      }
    }
  },
  final: {
    pregunta: "Shall we sing the days of the week?",
    frase: {texto:"Yes! Let's sing!", partes:["Yes!", "Let's sing!"]},
    dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    despedida: "See you tomorrow!",
    chau: "Bye-bye, school!",
    lograste: "You did it! You learned lots at school!",
    todos: "You have all the stamps! Find the green door: let's sing with the teacher!",
    ppFinal: "Collect all the stamps, and then let's sing with the teacher!",
    otraVez: "Another school day! Collect the stamps again.",
    otraVezB: "Another day"
  },
  microjuego: {
    maneja: "Now drive the train! Press and hold to go fast.", vamos: "Let's go!", bocina: "Choo choo!", llegamos: "We're here! Well done!",
    titulo: "The shape train!",
    intro: "Listen to which shape goes on the train, and tap it.",
    fin: "You loaded {n} shapes on the train!",
    chu: "Choo choo! Off goes the train!",
    ingredientes: [
      {texto:"the circle", pon:"Put the circle on the train.", est:"The circle station!"},
      {texto:"the square", pon:"Put the square on the train.", est:"The square station!"},
      {texto:"the triangle", pon:"Put the triangle on the train.", est:"The triangle station!"},
      {texto:"the star", pon:"Put the star on the train.", est:"The star station!"},
      {texto:"the heart", pon:"Put the heart on the train.", est:"The heart station!"}
    ]
  },
  palabrasExtra: [
    {texto:"the circle", silabas:["the", "cir", "cle"]},
    {texto:"the square", silabas:["the", "square"]},
    {texto:"the triangle", silabas:["the", "tri", "an", "gle"]},
    {texto:"the star", silabas:["the", "star"]},
    {texto:"the board", silabas:["the", "board"]}
  ],
  frasesExtra: [
    {texto:"I put my hand up.", partes:["I put", "my hand up."]},
    {texto:"Can I go to the toilet?", partes:["Can I go", "to the toilet?"]},
    {texto:"Can I have some water?", partes:["Can I have", "some water?"]},
    {texto:"Can I borrow your eraser?", partes:["Can I borrow", "your eraser?"]},
    {texto:"See you tomorrow, teacher!", partes:["See you tomorrow,", "teacher!"]}
  ],
  preguntas: [
    {p:"What do we write with?", r:"A pencil!"},
    {p:"What do we cut with?", r:"Scissors!"},
    {p:"What do we read?", r:"A book!"},
    {p:"Where do we carry our school things?", r:"In the backpack!"},
    {p:"What do we colour with?", r:"Crayons!"},
    {p:"Where do we see the days?", r:"On the calendar!"},
    {p:"What rings for playtime?", r:"The bell!"},
    {p:"Which shape is round?", r:"The circle!"},
    {p:"Which shape has three points?", r:"The triangle!"},
    {p:"Which shape has four equal sides?", r:"The square!"}
  ],
  objetos: {"#":"the wall", q:"the desk", p:"the plant", b:"the bench", "~":"the door"}
});
