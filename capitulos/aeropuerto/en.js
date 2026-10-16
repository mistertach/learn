/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('aeropuerto', 'en', {
  charlas: [
    {titulo:"Chatting at the information desk", chau:"Have a nice trip!", pasos:[
      {di:"Hello! Can I help you?", op:[{t:"Yes, where is the bathroom?", r:"Down the hall, on the right."}, {t:"Yes, where is the plane?", r:"At gate 5! Follow the yellow arrows."}]},
      {op:[{t:"Where is the snack stand?", r:"Right over there, next to the window."}, {t:"What time does the plane leave?", r:"In one hour!"}]},
      {di:"Do you have your ticket?", op:[{t:"Yes, here's my ticket.", r:"Perfect! You're all set."}, {t:"Yes, it's in my bag.", r:"Great! Don't lose it."}]},
      {op:[{t:"Can I have a map, please?", r:"Of course! Here's a map."}, {t:"Is it far?", r:"No, it's very close."}]}]},
    {titulo:"Chatting at the snack stand", chau:"Enjoy your snack! Safe travels!", pasos:[
      {di:"Hello! Do you want a snack?", op:[{t:"Yes, a cookie, please.", r:"Here's a yummy cookie."}, {t:"Yes, juice, please.", r:"Here's your juice."}]},
      {op:[{t:"How much is it?", r:"Two little fish."}, {t:"What do you have?", r:"Cookies, juice and fruit!"}]},
      {di:"Do you want anything else?", op:[{t:"No, thank you.", r:"You're welcome!"}, {t:"Yes, one more cookie!", r:"Here you go. You must be hungry!"}]},
      {op:[{t:"Is it fresh?", r:"Yes, made today!"}, {t:"Can I take it on the plane?", r:"Of course!"}]}]},
    {titulo:"Chatting at security", chau:"All clear! Have a good flight!", pasos:[
      {di:"Hello! Your passport, please.", op:[{t:"Here's my passport.", r:"Thank you! Let me see."}, {t:"Here you go.", r:"Thank you very much."}]},
      {op:[{t:"Is it okay?", r:"Yes, everything is fine!"}, {t:"Where do I go now?", r:"Straight ahead, to the gate."}]},
      {di:"Do you have anything in your pockets?", op:[{t:"No, nothing.", r:"Perfect! You can pass."}, {t:"Only my toy.", r:"That's fine! You can pass."}]},
      {op:[{t:"Can I go through now?", r:"Yes, go ahead!"}, {t:"Do you check all the bags?", r:"Yes, to keep everyone safe."}]}]},
    {titulo:"Chatting with the pilot", chau:"We're landing! Thank you for flying with me!", pasos:[
      {di:"Welcome aboard! I'm the pilot. Are you ready to fly?", op:[{t:"Yes, I'm ready!", r:"Fasten your seat belt!"}, {t:"Yes, I love planes!", r:"Me too! Come on up."}]},
      {op:[{t:"Where are we flying?", r:"Up in the sky, above the clouds!"}, {t:"Is the plane big?", r:"Yes, very big!"}]},
      {di:"Look out of the window! What do you see?", op:[{t:"I see the clouds!", r:"Yes, they look like cotton."}, {t:"I see the sky!", r:"Yes, it's so blue."}]},
      {op:[{t:"Can I sit next to the window?", r:"Of course! It's the best seat."}, {t:"How long is the flight?", r:"Just one hour."}]}]}
  ],
  titulo: "The airport",
  lugar: {texto:"the airport", silabas:["the", "air", "port"]},
  bienvenida: "We're at the airport!",
  niveles: [{nombre:"Arrivals", numTexto:"zero"}, {nombre:"Departures", numTexto:"one"}, {nombre:"Gates", numTexto:"two"}],
  estaciones: {
    I: {
      palabra: {texto:"the map", silabas:["the", "map"]},
      intro: "This is the information desk. They know where everything is!",
      frase: {texto:"Where is the plane?", partes:["Where is", "the plane?"]},
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
      palabra: {texto:"the bathroom", silabas:["the", "bath", "room"]},
      intro: "Oops! Sometimes we need to go to the bathroom.",
      frase: {texto:"Where is the bathroom?", partes:["Where is", "the bathroom?"]},
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
      palabra: {texto:"the cookie", silabas:["the", "coo", "kee"]},
      intro: "This is the snack stand. They sell yummy things!",
      frase: {texto:"A cookie, please.", partes:["A cookie,", "please."]},
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
      palabra: {texto:"the ticket", silabas:["the", "tick", "it"]},
      intro: "Here we buy the ticket to travel by plane.",
      frase: {texto:"A ticket, please.", partes:["A ticket,", "please."]},
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
      palabra: {texto:"the suitcase", silabas:["the", "soot", "case"]},
      intro: "Here we leave the suitcase. It travels on the plane too!",
      frase: {texto:"This is my suitcase.", partes:["This is", "my suitcase."]},
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
      palabra: {texto:"the passport", silabas:["the", "pass", "port"]},
      intro: "This is security. Here we show our passport.",
      frase: {texto:"Here is my passport.", partes:["Here is", "my passport."]},
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
      palabra: {texto:"the plane", silabas:["the", "plane"]},
      intro: "Look out the big window! The pilot is here too.",
      frase: {texto:"Look, a plane!", partes:["Look,", "a plane!"]},
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
    frase: {texto:"Yes! Here is my ticket.", partes:["Yes!", "Here is", "my ticket."]},
    despedida: "Have a good trip!",
    chau: "Bye-bye, airport!"
  },
  // el microjuego que se abre al terminar el lugar ({n} = cuántas estrellas juntó)
  microjuego: {titulo:"Rainbow flight", intro:"Move the plane up and down, and catch the colored stars!", fin:"You caught {n} stars!"},
  palabrasExtra: [
    {texto:"the elevator", silabas:["the", "ell", "uh", "vay", "ter"]},
    {texto:"the escalator", silabas:["the", "ess", "kuh", "lay", "ter"]},
    {texto:"the door", silabas:["the", "door"]},
    {texto:"the pilot", silabas:["the", "pie", "lut"]},
    {texto:"the backpack", silabas:["the", "back", "pack"]}
  ],
  frasesExtra: [
    {texto:"Hello!", partes:["Hello!"]},
    {texto:"Thank you very much!", partes:["Thank you", "very much!"]},
    {texto:"Bye-bye!", partes:["Bye-bye!"]},
    {texto:"Where is the door?", partes:["Where is", "the door?"]},
    {texto:"To floor two, please.", partes:["To floor two,", "please."]},
    {texto:"Have a good trip!", partes:["Have a", "good trip!"]}
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
