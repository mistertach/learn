/* =========================================================
   CAPÍTULO 5 · LA FERIA — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('feria', 'en', {
  charlas: [
    {titulo:"Chatting with the apple seller", chau:"Thank you for shopping! Come back soon!", pasos:[
      {di:"Hello! Do you want to buy something?", op:[{t:"Yes, I want an apple.", r:"Here's a red apple."}, {t:"Yes, apples, please.", r:"Here you go, nice and red."}]},
      {op:[{t:"How much is it?", r:"One little fish."}, {t:"Is it sweet?", r:"Yes, very sweet!"}]},
      {di:"Do you want one or two apples?", op:[{t:"One apple, please.", r:"Here's one apple."}, {t:"Two apples, please.", r:"Here are two apples."}]},
      {op:[{t:"Are they fresh?", r:"Yes, picked today!"}, {t:"Can I have a bag?", r:"Of course! Here's a bag."}]}]},
    {titulo:"Chatting with the strawberry seller", chau:"Enjoy your strawberries! Bye-bye!", pasos:[
      {di:"Look at these strawberries! Do you like them?", op:[{t:"Yes, I love strawberries!", r:"Me too! They're so red."}, {t:"Yes, they look yummy!", r:"They are delicious!"}]},
      {op:[{t:"What color are they?", r:"They're red!"}, {t:"Can I taste one?", r:"Of course! Here you go."}]},
      {di:"How many do you want?", op:[{t:"Three, please.", r:"Here are three strawberries."}, {t:"Lots, please!", r:"Here's a big basket!"}]},
      {op:[{t:"Are they sweet?", r:"Very sweet!"}, {t:"Thank you! How much is it?", r:"Two little fish, please."}]}]},
    {titulo:"Chatting at the scale", chau:"Great weighing! See you soon!", pasos:[
      {di:"Hello! Do you want to weigh something?", op:[{t:"Yes, the watermelon!", r:"Let's put it on the scale."}, {t:"Yes, the apples!", r:"Up they go!"}]},
      {op:[{t:"Is it heavy?", r:"Yes, quite heavy!"}, {t:"How much does it weigh?", r:"Two kilos exactly!"}]},
      {di:"Which is heavier: the watermelon or the apple?", op:[{t:"The watermelon!", r:"Correct! It's very big."}, {t:"The apple!", r:"Hmm, try lifting both. The watermelon is heavier!"}]},
      {op:[{t:"Can I try the scale?", r:"Yes! Climb up."}, {t:"Does it always work?", r:"Yes, it's very accurate."}]}]},
    {titulo:"Chatting with the shopkeeper", chau:"Thank you for shopping! Goodbye!", pasos:[
      {di:"Welcome to the market! What do you need today?", op:[{t:"I need fruit, please.", r:"Wonderful! We have lots of fruit."}, {t:"I need vegetables, please.", r:"Of course! Look at these carrots."}]},
      {op:[{t:"How much is everything?", r:"Five little fish!"}, {t:"Do you have a bag?", r:"Yes, here's a basket."}]},
      {di:"Did you find everything?", op:[{t:"Yes, I have everything!", r:"Excellent shopping!"}, {t:"Yes, thank you!", r:"You're welcome!"}]},
      {op:[{t:"Can I pay now?", r:"Yes! Thank you very much."}, {t:"Can I come back tomorrow?", r:"Of course! We'll be here."}]}]}
  ],
  titulo: "The market",
  lugar: {texto:"the market", silabas:["the", "mar", "ket"]},
  bienvenida: "Here we are at the market!",
  niveles: [{nombre:"The entrance", numTexto:"zero"}, {nombre:"The vegetables", numTexto:"one"}, {nombre:"The checkout", numTexto:"two"}],
  numeros: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
  estaciones: {
    M: {
      palabra: {texto:"the apple", silabas:["the", "ap", "pull"]},
      intro: "This is the market. Look at all the fruit!",
      frase: {texto:"Three apples, please.", partes:["Three apples,", "please."]},
      respuesta: "Here you are: one, two, three!",
      cuento: {
        titulo: "The runaway apple",
        paginas: [
          "At the market there were shiny red *apples*.",
          "\"Three apples, please,\" said {N}. \"One, two, three!\"",
          "Oops! One apple fell and rolled across the floor.",
          "{N} caught it and put it in the basket. Three apples!"
        ]
      }
    },
    N: {
      palabra: {texto:"the banana", silabas:["the", "ba", "nah", "na"]},
      intro: "What yellow bananas!",
      frase: {texto:"How much is the banana?", partes:["How much is", "the banana?"]},
      respuesta: "One little fish!",
      cuento: {
        titulo: "One little fish",
        paginas: [
          "The little dog was selling yellow *bananas*.",
          "\"How much is the banana?\" asked {N}. \"One little fish!\"",
          "{N} paid with a little fish, and the banana jumped!",
          "What a yummy banana! Hooray!"
        ]
      }
    },
    O: {
      palabra: {texto:"the orange", silabas:["the", "or", "ange"]},
      intro: "Here are oranges for making juice.",
      frase: {texto:"Two oranges, please.", partes:["Two oranges,", "please."]},
      respuesta: "One, two! So juicy!",
      cuento: {
        titulo: "Orange juice",
        paginas: [
          "The kitty had round, juicy *oranges*.",
          "\"Two oranges, please,\" said {N}.",
          "The kitty squeezed them: a whole glass of juice!",
          "{N} drank the juice. Mmm, nice and cool!"
        ]
      }
    },
    Z: {
      palabra: {texto:"the carrot", silabas:["the", "car", "rot"]},
      intro: "The bunny loves carrots.",
      frase: {texto:"The carrot is orange.", partes:["The carrot", "is orange."]},
      respuesta: "And it's long, long, long!",
      cuento: {
        titulo: "The bunny and the carrot",
        paginas: [
          "The bunny looked after a stall full of *carrots*.",
          "{N} saw a huge carrot. \"The carrot is orange,\" said {N}.",
          "The bunny jumped for joy: it's its favorite food!",
          "They ate carrots together: crunch, crunch."
        ]
      }
    },
    F: {
      palabra: {texto:"the strawberry", silabas:["the", "straw", "ber", "ree"]},
      intro: "Look at these red strawberries.",
      frase: {texto:"The strawberry is small.", partes:["The strawberry", "is small."]},
      respuesta: "Small and very yummy!",
      cuento: {
        titulo: "The little strawberries",
        paginas: [
          "In a little box there were red *strawberries*.",
          "\"The strawberry is small!\" said {N} in surprise.",
          "{N} tasted one: so sweet!",
          "Small, but very yummy. Thank you!"
        ]
      }
    },
    S: {
      palabra: {texto:"the watermelon", silabas:["the", "wa", "ter", "mel", "on"]},
      intro: "Wow! Did you see that watermelon?",
      frase: {texto:"The watermelon is big!", partes:["The watermelon", "is big!"]},
      respuesta: "Yes, huge! It's very heavy!",
      cuento: {
        titulo: "The giant watermelon",
        paginas: [
          "At the market there was *a watermelon*, a giant one!",
          "\"The watermelon is big!\" said {N}.",
          "Oops! The watermelon got away and rolled… run after it!",
          "At last they caught it. What a big watermelon!"
        ]
      }
    },
    B: {
      palabra: {texto:"the scale", silabas:["the", "scale"]},
      intro: "This is the scale. It's for weighing the fruit.",
      frase: {texto:"How much does it weigh?", partes:["How much", "does it weigh?"]},
      respuesta: "It weighs one kilo!",
      cuento: {
        titulo: "The scale",
        paginas: [
          "The market dog had *a scale*, a red one.",
          "{N} put a banana on it. \"How much does it weigh?\" Just a little!",
          "Then they put the watermelon on… the scale jumped!",
          "\"It's so heavy!\" laughed {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "That's five little fish!",
    frase: {texto:"Here you are! Thank you!", partes:["Here you are!", "Thank you!"]},
    despedida: "Happy shopping!",
    chau: "Bye-bye, market!",
    lograste: "You did it! You did all the shopping!",
    todos: "You have all the stamps! Find the green door: let's pay at the checkout!",
    ppFinal: "Collect all the stamps, and then let's pay at the checkout!",
    otraVez: "Another market day! Collect the stamps again.",
    otraVezB: "Another day"
  },
  microjuego: {
    cortar: "Now let's chop the fruit! Swipe your finger over it.", cortadas: "You chopped {n} fruits!",
    titulo: "Fill the basket!",
    intro: "Listen to which fruit I want, and how many. Tap it to put it in the basket!",
    fin: "You put {n} fruits in the basket!",
    pon: (n,g) => n==='one' ? `Put ${g.uno} in the basket.` : `Put ${n} ${g.plural} in the basket.`,
    son: (n,g) => n==='one' ? `${may(g.uno)}!` : `${may(n)} ${g.plural}!`,
    esa: g => `Not that one! Find ${g.texto}.`,
    ingredientes: [
      {texto:"the apple", uno:"one apple", plural:"apples"},
      {texto:"the banana", uno:"one banana", plural:"bananas"},
      {texto:"the orange", uno:"one orange", plural:"oranges"},
      {texto:"the strawberry", uno:"one strawberry", plural:"strawberries"},
      {texto:"the pear", uno:"one pear", plural:"pears"},
      {texto:"the lemon", uno:"one lemon", plural:"lemons"}
    ]
  },
  palabrasExtra: [
    {texto:"the pear", silabas:["the", "pear"]},
    {texto:"the lemon", silabas:["the", "lem", "on"]},
    {texto:"the basket", silabas:["the", "bas", "ket"]},
    {texto:"the bag", silabas:["the", "bag"]}
  ],
  frasesExtra: [
    {texto:"How much is it?", partes:["How much", "is it?"]},
    {texto:"It's big!", partes:["It's big!"]},
    {texto:"It's small.", partes:["It's small."]},
    {texto:"A bag, please.", partes:["A bag,", "please."]},
    {texto:"Yummy!", partes:["Yummy!"]}
  ],
  preguntas: [
    {p:"Which fruit is long and yellow?", r:"The banana!"},
    {p:"Which fruit do we make juice with?", r:"The orange!"},
    {p:"Which fruit is big, big, big?", r:"The watermelon!"},
    {p:"What does the bunny like to eat?", r:"The carrot!"},
    {p:"Which fruit is red and small?", r:"The strawberry!"},
    {p:"What do we use to weigh the fruit?", r:"The scale!"},
    {p:"Which fruit is red and round?", r:"The apple!"},
    {p:"Which fruit is yellow and sour?", r:"The lemon!"},
    {p:"Where do we put the fruit?", r:"In the basket!"},
    {p:"Which fruit is green and shaped like a drop?", r:"The pear!"}
  ],
  objetos: {"#":"the wall", p:"the plant", c:"the fruit crate", "~":"the door"}
});
})();
