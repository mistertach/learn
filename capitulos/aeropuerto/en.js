/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — traducción al inglés (solo para los grandes)
   Misma forma que es.js / fr.js / it.js: cada texto se empareja por su lugar.
   No hace falta silabas ni partes. El relator nunca lee esto.
   ========================================================= */
registrarTextos('aeropuerto', 'en', {
  titulo: "The airport",
  lugar: {texto:"the airport"},
  bienvenida: "We're at the airport!",
  niveles: [{nombre:"Arrivals"}, {nombre:"Departures"}, {nombre:"Gates"}],
  estaciones: {
    I: {
      palabra: {texto:"the map"},
      intro: "This is the information desk. They know where everything is!",
      frase: {texto:"Where is the plane?"},
      respuesta: "Upstairs, on floor two!",
      cuento: {
        titulo: "The magic map",
        paginas: [
          "{N} found *the map* at the information desk.",
          "Suddenly, the map started to shine! It had a red path.",
          "The path went up, up, up… all the way to floor two!",
          "Up there was *the plane*. \"Thank you, map!\" said {N}."
        ]
      }
    },
    B: {
      palabra: {texto:"the bathroom"},
      intro: "Oops! Sometimes we need to go to the bathroom.",
      frase: {texto:"Where is the bathroom?"},
      respuesta: "It's here! This door!",
      cuento: {
        titulo: "Bubbles in the bathroom!",
        paginas: [
          "{N} really, really needed to go *to the bathroom*.",
          "\"Where is the bathroom?\" {N} asked the yellow cat.",
          "\"It's here, the blue door!\" said the cat.",
          "Then {N} washed their hands with lots of soap. Bubbles, bubbles!"
        ]
      }
    },
    K: {
      palabra: {texto:"the cookie"},
      intro: "This is the snack stand. They sell yummy things!",
      frase: {texto:"A cookie, please."},
      respuesta: "Here you go! Enjoy!",
      cuento: {
        titulo: "The traveling cookie",
        paginas: [
          "At the snack stand there was *a giant cookie*.",
          "\"A cookie, please!\" asked {N}.",
          "But the cookie jumped and said: \"I want to travel too!\"",
          "So the cookie hopped into *the backpack*, ready to fly."
        ]
      }
    },
    T: {
      palabra: {texto:"the ticket"},
      intro: "Here we buy the ticket to travel by plane.",
      frase: {texto:"A ticket, please."},
      respuesta: "Of course! Here's your ticket.",
      cuento: {
        titulo: "The golden ticket",
        paginas: [
          "{N} went to the counter to buy *a ticket*.",
          "The bear gave {N} a yellow ticket that shone brightly.",
          "Suddenly a wind blew… and the ticket flew away!",
          "{N} jumped really high and caught it. What luck!"
        ]
      }
    },
    C: {
      palabra: {texto:"the suitcase"},
      intro: "Here we leave the suitcase. It travels on the plane too!",
      frase: {texto:"This is my suitcase."},
      respuesta: "How nice! Bye-bye, suitcase.",
      cuento: {
        titulo: "The runaway suitcase",
        paginas: [
          "{N} was at the airport with *a red suitcase* full of toys.",
          "But the suitcase started to roll! Roll, roll, roll. \"Wait, suitcase!\" shouted {N}.",
          "It went past *the bathroom*. The cat asked: \"Where is the suitcase?\"",
          "It got on *the escalator*. Up, up!",
          "Upstairs there was a huge plane that said: \"Hello, suitcase! Stay still!\" And the suitcase stopped.",
          "{N} gave the suitcase a hug. \"Thank you, plane! Have a good trip!\""
        ]
      }
    },
    S: {
      palabra: {texto:"the passport"},
      intro: "This is security. Here we show our passport.",
      frase: {texto:"Here is my passport."},
      respuesta: "Perfect! You can go through.",
      cuento: {
        titulo: "The sleepy passport",
        paginas: [
          "At security, the dog asked {N} for *the passport*.",
          "{N} looked in the backpack… but the passport was asleep!",
          "\"Wake up, passport!\" said {N} very loudly.",
          "The passport opened its eyes: \"Here I am! You can go through!\""
        ]
      }
    },
    W: {
      palabra: {texto:"the plane"},
      intro: "Look out the big window! The pilot is here too.",
      frase: {texto:"Look, a plane!"},
      respuesta: "Yes! It's so big!",
      cuento: {
        titulo: "The plane that was scared",
        paginas: [
          "Through the window, {N} saw *a little plane*.",
          "The plane was scared of flying so high.",
          "\"You can do it, plane!\" shouted {N}.",
          "The plane ran, and ran… and flew up into the clouds!"
        ]
      }
    }
  },
  final: {
    pregunta: "Do you have your ticket?",
    frase: {texto:"Yes! Here is my ticket."},
    despedida: "Have a good trip!",
    chau: "Bye-bye, airport!"
  },
  palabrasExtra: [
    {texto:"the elevator"},
    {texto:"the escalator"},
    {texto:"the door"},
    {texto:"the pilot"},
    {texto:"the backpack"}
  ],
  frasesExtra: [
    {texto:"Hello!"},
    {texto:"Thank you very much!"},
    {texto:"Bye-bye!"},
    {texto:"Where is the door?"},
    {texto:"To floor two, please."},
    {texto:"Have a good trip!"}
  ],
  preguntas: [
    {p:"What do we eat at the snack stand?", r:"The cookie! Yummy!"},
    {p:"What do we show the dog at security?", r:"The passport!"},
    {p:"What do we carry our toys in to travel?", r:"In the suitcase!"},
    {p:"What tells us where everything is?", r:"The map!"},
    {p:"What do we need to get on the plane?", r:"The ticket!"},
    {p:"What takes us up and down between floors?", r:"The elevator!"},
    {p:"What does the pilot wear on their head?", r:"The pilot's cap!"},
    {p:"What do we carry on our back?", r:"The backpack!"},
    {p:"What flies in the clouds?", r:"The plane!"},
    {p:"Where do we go when we need to pee?", r:"To the bathroom!"}
  ],
  objetos: {"#":"the wall", b:"the bench", p:"the plant", "~":"the door"}
});
