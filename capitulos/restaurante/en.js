/* =========================================================
   CAPÍTULO 2 · EL RESTAURANTE — traducción al inglés (solo para los grandes)
   Misma forma que es.js / fr.js / it.js: cada texto se empareja por su lugar.
   No hace falta silabas ni partes. El relator nunca lee esto.
   ========================================================= */
registrarTextos('restaurante', 'en', {
  titulo: "The restaurant",
  lugar: {texto:"the restaurant"},
  bienvenida: "We're at the restaurant!",
  niveles: [{nombre:"Parking lot"}, {nombre:"Buffet"}, {nombre:"À la carte"}],
  estaciones: {
    E: {
      palabra: {texto:"the car"},
      intro: "This is the parking lot. We leave the car here!",
      frase: {texto:"We came by car!"},
      respuesta: "Welcome! I'll look after your car.",
      cuento: {
        titulo: "The hungry car",
        paginas: [
          "{N} arrived at the restaurant in *the red car*.",
          "But the car was jumping and making noise! Vroom, vroom… it was hungry!",
          "The dog gave it gas and washed it with lots of bubbles.",
          "\"Thank you!\" said the car. And it fell asleep in the parking lot."
        ]
      }
    },
    R: {
      palabra: {texto:"the table"},
      intro: "This is the entrance. Here they give us a table.",
      frase: {texto:"A table, please."},
      respuesta: "Oh no! A waiter is missing today. Will you help us?",
      despues: "Put on the apron! Now you work at the restaurant!",
      cuento: {
        titulo: "The magic apron",
        paginas: [
          "{N} asked for *a table*, but the bear was very worried.",
          "\"The waiter didn't come today, and there are lots of people!\" said the bear.",
          "\"I'll help you!\" said {N}. And the bear brought out *an apron* and a bow tie.",
          "All set! Now {N} works at the restaurant."
        ]
      }
    },
    B: {
      palabra: {texto:"the plate"},
      intro: "This is the buffet. Everyone serves themselves whatever they want!",
      frase: {texto:"Here is a plate for you."},
      respuesta: "Thank you very much!",
      cuento: {
        titulo: "The mountain of plates",
        paginas: [
          "At the buffet, the rabbit needed *a plate*.",
          "{N} brought a plate… and another… and another… a mountain of plates!",
          "The mountain wobbled one way and the other!",
          "But nothing fell. \"Here is a plate for you!\" said {N}. Hooray!"
        ]
      }
    },
    K: {
      palabra: {texto:"the pot"},
      intro: "This is the kitchen! The chef cat cooks here.",
      frase: {texto:"It smells so good!"},
      respuesta: "It's tomato soup!",
      cuento: {
        titulo: "The dancing pot",
        paginas: [
          "In the kitchen there was *a huge pot*.",
          "The soup was bubbling: blub, blub, blub.",
          "Suddenly, the pot started to jump and dance!",
          "The chef cat hugged it and said: \"The soup is ready!\""
        ]
      }
    },
    M: {
      palabra: {texto:"the menu"},
      intro: "This is the upstairs floor. Here people choose their food from the menu.",
      frase: {texto:"What would you like to eat?"},
      respuesta: "A pizza, please.",
      cuento: {
        titulo: "The giant pizza",
        paginas: [
          "{N} gave *the menu* to the dog and asked: \"What would you like to eat?\"",
          "\"A pizza, please,\" said the dog.",
          "{N} brought a pizza so big, so big… that it didn't fit on the table!",
          "So the dog invited his friends, and they shared it!"
        ]
      }
    },
    H: {
      palabra: {texto:"the ice cream"},
      intro: "It's time for dessert!",
      frase: {texto:"Would you like dessert?"},
      respuesta: "Yes! An ice cream, please.",
      cuento: {
        titulo: "The ice cream in a hurry",
        paginas: [
          "The cat wanted *a chocolate ice cream*.",
          "{N} carried it super fast, because it was very hot!",
          "Oh no! The ice cream was melting. Drip, drip, drip…",
          "The cat ate it in one bite. Mmm, yummy!"
        ]
      }
    },
    C: {
      palabra: {texto:"the bill"},
      intro: "This is the cash register. Here we pay for the food.",
      frase: {texto:"Here is the bill."},
      respuesta: "Thank you! Everything was delicious.",
      cuento: {
        titulo: "The flying bill",
        paginas: [
          "At the cash register, the dog gave {N} *the bill*.",
          "But the window was open, and the bill flew away!",
          "{N} ran and jumped really high… and caught it in the air!",
          "\"Here is the bill!\" said {N}. And everyone clapped."
        ]
      }
    }
  },
  final: {
    pregunta: "Everything was delicious! This is for you: a tip!",
    frase: {texto:"Thank you very much! Come back soon!"},
    despedida: "Good job!",
    chau: "Bye-bye! See you next time!",
    lograste: "You did it! You served everyone really well!",
    todos: "You have all the stamps! Go down to the parking lot: the customer is waiting for you at the green door!",
    ppFinal: "Collect all the stamps, and then: the tip!",
    otraVez: "Another work day! Collect the stamps again.",
    otraVezB: "Another day"
  },
  // el microjuego que se abre al terminar el lugar (los ingredientes van en el orden de base.js)
  microjuego: {titulo:"Let's make pizza!", intro:"Make your pizza! Tap an ingredient, then tap the pizza.", horno:"Into the oven!", mas:"Add a few more things!", listo:"Yum, what a tasty pizza! Thank you, chef!",
    ingredientes: [{texto:"the tomato sauce"}, {texto:"the cheese"}, {texto:"the tomato"}, {texto:"the olive"}, {texto:"the basil"}, {texto:"the mushroom"}]},
  palabrasExtra: [
    {texto:"the pizza"},
    {texto:"the soup"},
    {texto:"the glass"},
    {texto:"the fork"},
    {texto:"the apron"}
  ],
  frasesExtra: [
    {texto:"Welcome!"},
    {texto:"Enjoy your meal!"},
    {texto:"What would you like to drink?"},
    {texto:"A glass of water, please."},
    {texto:"Thank you very much!"},
    {texto:"Yummy!"}
  ],
  preguntas: [
    {p:"What did the dog order upstairs?", r:"A pizza!"},
    {p:"Which dessert is very, very cold?", r:"The ice cream!"},
    {p:"Where is the soup cooked?", r:"In the pot!"},
    {p:"How do we get to the restaurant?", r:"By car!"},
    {p:"Where do we choose our food?", r:"On the menu!"},
    {p:"What do we bring to the table to pay?", r:"The bill!"},
    {p:"What do we put on to work at the restaurant?", r:"The apron!"},
    {p:"Where do we put the water?", r:"In the glass!"},
    {p:"What do we eat noodles with?", r:"With the fork!"},
    {p:"What did the customer give us at the end?", r:"The tip!"}
  ],
  objetos: {"#":"the wall", p:"the plant", a:"the car", m:"the table", "~":"the door"}
});
