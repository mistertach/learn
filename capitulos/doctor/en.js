/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('doctor', 'en', {
  titulo: "At the doctor's",
  lugar: {texto:"the doctor's", silabas:["the", "doc", "tor's"]},
  bienvenida: "Here we are at the doctor's!",
  niveles: [{nombre:"The waiting room", numTexto:"zero"}, {nombre:"First floor", numTexto:"one"}, {nombre:"Second floor", numTexto:"two"}],
  estaciones: {
    E: {
      palabra: {texto:"the stethoscope", silabas:["the", "steth", "o", "scope"]},
      intro: "Hello! I'm the nurse. Today you're the doctor: here's your white coat!",
      frase: {texto:"Thump, thump. I can hear the heart!", partes:["Thump, thump.", "I can hear the heart!"]},
      respuesta: "It's beating strong! Well done!",
      cuento: {
        titulo: "The white coat",
        paginas: [
          "The nurse gave {N} *a stethoscope*.",
          "\"For me?\" asked {N}. \"Yes! And a white coat too.\"",
          "{N} listened to their own heart: thump, thump, thump!",
          "All set! Time to see the patients!"
        ]
      }
    },
    C: {
      palabra: {texto:"the head", silabas:["the", "head"]},
      intro: "The little bear is sad. Something hurts.",
      frase: {texto:"Does your head hurt?", partes:["Does your head", "hurt?"]},
      respuesta: "Yes, a little bit… ouch!",
      cuento: {
        titulo: "A glass of water",
        paginas: [
          "The little bear was holding *its head*. Ouch, ouch, ouch!",
          "\"Does your head hurt?\" asked {N}. \"Yes, a little bit.\"",
          "{N} gave it a glass of cool water: \"Now, have a rest.\"",
          "The little bear had a nap… and woke up happy!"
        ]
      }
    },
    A: {
      palabra: {texto:"the tummy", silabas:["the", "tum", "my"]},
      intro: "The puppy has a tummy ache.",
      frase: {texto:"What did you eat?", partes:["What", "did you eat?"]},
      respuesta: "Lots of ice cream and lots of pizza!",
      cuento: {
        titulo: "Too much ice cream",
        paginas: [
          "The puppy's *tummy* was hurting.",
          "\"What did you eat?\" asked {N}. \"Lots of ice cream and lots of pizza!\"",
          "{N} gave it a spoonful of medicine. Mmm, strawberry!",
          "A little later the puppy was dancing: nothing hurt anymore!"
        ]
      }
    },
    N: {
      palabra: {texto:"the nose", silabas:["the", "nose"]},
      intro: "Oh! The bunny's nose is all red.",
      frase: {texto:"Bless you!", partes:["Bless", "you!"]},
      respuesta: "Achoo! Thank you!",
      cuento: {
        titulo: "Achoo!",
        paginas: [
          "The bunny had *a nose* as red as a strawberry.",
          "Aaa… achoo! \"Bless you!\" said {N}.",
          "{N} gave her a tissue: \"Blow hard.\"",
          "\"Thank you! Now I can smell the flowers,\" said the bunny."
        ]
      }
    },
    B: {
      palabra: {texto:"the mouth", silabas:["the", "mouth"]},
      intro: "The kitten has to show its teeth.",
      frase: {texto:"Open your mouth, please.", partes:["Open your mouth,", "please."]},
      respuesta: "Aaaaah!",
      cuento: {
        titulo: "Aaaah!",
        paginas: [
          "The little grey cat didn't want to open *its mouth*.",
          "\"Open your mouth, please,\" said {N}. \"Aaaaah!\"",
          "What white, shiny teeth!",
          "\"Well done! And brush your teeth every day.\""
        ]
      }
    },
    R: {
      palabra: {texto:"the knee", silabas:["the", "knee"]},
      intro: "The dog fell off its bike.",
      frase: {texto:"Here's a plaster for you.", partes:["Here's a plaster", "for you."]},
      respuesta: "It doesn't hurt anymore! Thank you!",
      cuento: {
        titulo: "The plaster",
        paginas: [
          "The dog fell and hurt *its knee*. Waaah!",
          "{N} said: \"Don't worry, it's nothing.\"",
          "And {N} put on a colorful plaster.",
          "\"It doesn't hurt anymore!\" The dog ran off to play."
        ]
      }
    },
    T: {
      palabra: {texto:"the thermometer", silabas:["the", "ther", "mom", "e", "ter"]},
      intro: "The bear is very tired. Does it have a fever?",
      frase: {texto:"Do you have a fever?", partes:["Do you have", "a fever?"]},
      respuesta: "No! I'm fine!",
      cuento: {
        titulo: "No fever",
        paginas: [
          "The bear was tired. {N} brought *the thermometer*.",
          "\"Do you have a fever?\" asked {N}. The bear waited, very still.",
          "Beep, beep! \"No fever!\"",
          "\"Hooray!\" said the bear, and started to dance."
        ]
      }
    }
  },
  final: {
    pregunta: "I'm sad… my head hurts.",
    frase: {texto:"A plaster and a hug!", partes:["A plaster", "and a hug!"]},
    despedida: "I'm happy now!",
    chau: "Thank you for looking after me!",
    lograste: "You did it! You made everyone better!",
    todos: "You have all the stamps! Find the green door: the teddy needs you!",
    ppFinal: "Collect all the stamps, and then let's look after the teddy!",
    otraVez: "Another day at the doctor's! Collect the stamps again.",
    otraVezB: "Another day"
  },
  microjuego: {
    cosquillas: "Now, tickles! Tap the teddy anywhere you like.",
    titulo: "Where's the nose?",
    intro: "Listen, and touch that part of the teddy's body.",
    fin: "You found {n} body parts!",
    ingredientes: [
      {texto:"the head", p:"Where's the head?"},
      {texto:"the eyes", p:"Where are the eyes?"},
      {texto:"the nose", p:"Where's the nose?"},
      {texto:"the mouth", p:"Where's the mouth?"},
      {texto:"the ears", p:"Where are the ears?"},
      {texto:"the tummy", p:"Where's the tummy?"},
      {texto:"the feet", p:"Where are the feet?"}
    ]
  },
  palabrasExtra: [
    {texto:"the eyes", silabas:["the", "eyes"]},
    {texto:"the ears", silabas:["the", "ears"]},
    {texto:"the feet", silabas:["the", "feet"]},
    {texto:"the plaster", silabas:["the", "plas", "ter"]},
    {texto:"the medicine", silabas:["the", "med", "ih", "sin"]}
  ],
  frasesExtra: [
    {texto:"I'm so happy!", partes:["I'm so", "happy!"]},
    {texto:"I'm sad.", partes:["I'm", "sad."]},
    {texto:"I'm scared.", partes:["I'm", "scared."]},
    {texto:"Ouch, it hurts!", partes:["Ouch,", "it hurts!"]},
    {texto:"I feel better!", partes:["I feel", "better!"]}
  ],
  preguntas: [
    {p:"What do we listen to the heart with?", r:"The stethoscope!"},
    {p:"What tells us if there's a fever?", r:"The thermometer!"},
    {p:"What do we put on a sore knee?", r:"A plaster!"},
    {p:"What do we smell flowers with?", r:"Our nose!"},
    {p:"What do we look with?", r:"Our eyes!"},
    {p:"What do we listen to music with?", r:"Our ears!"},
    {p:"What do we eat with?", r:"Our mouth!"},
    {p:"What do we walk with?", r:"Our feet!"},
    {p:"Which little face is sad?", r:"This one!"},
    {p:"Which little face is happy?", r:"This one!"}
  ],
  objetos: {"#":"the wall", p:"the plant", b:"the bench", x:"the examination bed", "~":"the door"}
});
