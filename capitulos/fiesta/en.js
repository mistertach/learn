/* =========================================================
   CAPÍTULO 10 · LA FIESTA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('fiesta', 'en', {
  titulo: "The party",
  lugar: {texto:"the party", silabas:["the", "par", "ty"]},
  bienvenida: "Today is your birthday!",
  niveles: [{nombre:"The entrance", numTexto:"zero"}, {nombre:"The party room", numTexto:"one"}, {nombre:"The garden", numTexto:"two"}],
  numeros: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
  meses: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  estaciones: {
    I: {
      palabra: {texto:"the invitation", silabas:["the", "in", "vi", "ta", "tion"]},
      intro: "Today is your birthday! Let's invite our friends.",
      frase: {texto:"Will you come to my party?", partes:["Will you come", "to my party?"]},
      respuesta: "Yes! Thank you for inviting me!",
      cuento: {
        titulo: "The invitations",
        paginas: [
          "{N} made *an invitation* for every friend.",
          "\"Will you come to my party?\" {N} asked the bunny.",
          "\"Yes! Thank you for inviting me!\" The bunny jumped for joy.",
          "All the friends are coming! Hooray!"
        ]
      }
    },
    O: {
      palabra: {texto:"the balloon", silabas:["the", "bal", "loon"]},
      intro: "Let's blow up the balloons!",
      frase: {texto:"I'm blowing up the balloon!", partes:["I'm blowing up", "the balloon!"]},
      respuesta: "Whoosh… bigger, bigger!",
      cuento: {
        titulo: "The giant balloon",
        paginas: [
          "The puppy brought colorful *balloons*.",
          "{N} blew: whoosh, whoosh!",
          "The balloon grew and grew… and popped! Bang!",
          "How funny! And {N} blew up another one, a smaller one."
        ]
      }
    },
    Z: {
      palabra: {texto:"the party hat", silabas:["the", "par", "ty", "hat"]},
      intro: "A party hat for the party!",
      frase: {texto:"I'm putting on my party hat!", partes:["I'm putting on", "my party hat!"]},
      respuesta: "It looks lovely on you!",
      cuento: {
        titulo: "The party hat",
        paginas: [
          "The kitty had *a party hat*.",
          "The party hat flew through the air… and landed on {N}'s head!",
          "\"It looks lovely on you!\" clapped the kitty.",
          "And they danced in their party hats!"
        ]
      }
    },
    R: {
      palabra: {texto:"the present", silabas:["the", "pres", "ent"]},
      intro: "The little bear brought you a present!",
      frase: {texto:"Thank you for the present!", partes:["Thank you", "for the present!"]},
      respuesta: "You're welcome! Open it!",
      cuento: {
        titulo: "The surprise",
        paginas: [
          "The little bear arrived with *a present*, a blue one.",
          "\"Thank you for the present!\" said {N}.",
          "{N} opened it… it was a new ball!",
          "\"I love it!\" And {N} gave the little bear a hug."
        ]
      }
    },
    K: {
      palabra: {texto:"the calendar", silabas:["the", "cal", "en", "dar"]},
      intro: "When is your birthday? Let's look at the calendar!",
      contar: "Let's say the months of the year! Repeat after me.",
      frase: {texto:"When is your birthday?", partes:["When is", "your birthday?"]},
      respuesta: "In March! And yours?",
      cuento: {
        titulo: "The twelve months",
        paginas: [
          "The little grey cat was looking at *the calendar*: it has twelve months!",
          "\"When is your birthday?\" it asked {N}.",
          "January, February, March… they counted all the months!",
          "Every year there's a birthday! How lucky!"
        ]
      }
    },
    E: {
      palabra: {texto:"the candle", silabas:["the", "can", "dle"]},
      intro: "How many candles are on the cake?",
      frase: {texto:"How old are you?", partes:["How old", "are you?"]},
      respuesta: "I'm five! One, two, three, four, five.",
      cuento: {
        titulo: "The little candles",
        paginas: [
          "The dog brought colorful *candles*.",
          "\"How old are you?\" asked {N}. The dog held up its paws.",
          "\"Four candles! One, two, three, four,\" counted {N}.",
          "And they danced for joy!"
        ]
      }
    },
    T: {
      palabra: {texto:"the cake", silabas:["the", "cake"]},
      intro: "Here comes the birthday cake!",
      frase: {texto:"This cake is yummy!", partes:["This cake", "is yummy!"]},
      respuesta: "It's chocolate and strawberry!",
      cuento: {
        titulo: "The cake",
        paginas: [
          "The bear brought *a cake*, a huge one.",
          "\"Wow, what a cake!\" said {N}.",
          "{N} closed their eyes and made a wish…",
          "And everyone ate cake together!"
        ]
      }
    }
  },
  final: {
    pregunta: "Surprise! All your friends are here!",
    frase: {texto:"Thank you, friends!", partes:["Thank you,", "friends!"]},
    cancion: ["Happy birthday to you!", "Happy birthday to you!", "Happy birthday, dear {N}!", "Happy birthday to you!"],
    despedida: "Happy birthday!",
    chau: "Hip, hip, hooray!",
    lograste: "You did it! What a lovely party!",
    todos: "You have all the stamps! Find the green door: there's a surprise!",
    ppFinal: "Collect all the stamps, and then let's find the surprise!",
    otraVez: "Another party! Collect the stamps again.",
    otraVezB: "Another party"
  },
  microjuego: {
    titulo: "How many candles?",
    intro: "A friend is having a birthday. Listen to how old, and put on the candles.",
    fin: "You blew out {n} candles!",
    pon: n => `${may(n)} years old! Put on ${n} candles.`,
    vela: "the candle",
    soplar: "Now, blow!",
    soplarB: "Blow!",
    feliz: "Happy birthday!"
  },
  palabrasExtra: [
    {texto:"the piñata", silabas:["the", "pin", "yah", "ta"]},
    {texto:"the sweet", silabas:["the", "sweet"]},
    {texto:"the juice", silabas:["the", "juice"]}
  ],
  frasesExtra: [
    {texto:"Happy birthday!", partes:["Happy", "birthday!"]},
    {texto:"Make a wish!", partes:["Make", "a wish!"]},
    {texto:"How old are you today?", partes:["How old are you", "today?"]},
    {texto:"Welcome to my party!", partes:["Welcome", "to my party!"]},
    {texto:"Let's blow out the candles!", partes:["Let's blow out", "the candles!"]}
  ],
  preguntas: [
    {p:"What has a bow and a surprise inside?", r:"The present!"},
    {p:"What do we eat at a birthday?", r:"Cake!"},
    {p:"What do we blow up for the party?", r:"Balloons!"},
    {p:"What do we blow out on the cake?", r:"The candles!"},
    {p:"What do we wear on our heads?", r:"A party hat!"},
    {p:"What do we give our friends so they come?", r:"An invitation!"},
    {p:"Where are the months?", r:"On the calendar!"},
    {p:"What do we break so the sweets fall out?", r:"The piñata!"},
    {p:"What falls out of the piñata?", r:"Sweets!"},
    {p:"What do we drink juice from?", r:"A glass!"}
  ],
  objetos: {"#":"the wall", o:"the balloons", m:"the table", f:"the flowers", r:"the tree", s:"the sofa", "~":"the door"}
});
})();
