/* =========================================================
   CAPÍTULO 12 · LA PLAYA — textos en inglés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   ========================================================= */
registrarTextos('playa', 'en', {
  charlas: [
    {titulo:"Chatting with the lifeguard", chau:"Enjoy the sea! Stay safe!", pasos:[
      {di:"Hello! Are you going swimming today?", op:[{t:"Yes, I want to swim!", r:"Great! The water is calm."}, {t:"Yes, with my goggles.", r:"Very good! Then you'll see the fish."}]},
      {op:[{t:"Is the water cold?", r:"A little cold, but you'll get used to it."}, {t:"Are there fish?", r:"Yes, lots of colorful fish!"}]},
      {di:"Do you want some sunscreen?", op:[{t:"Yes, please.", r:"Here you go. Put it on your arms and face."}, {t:"Yes, I don't want to get burnt.", r:"Good thinking!"}]},
      {op:[{t:"Where do I leave my things?", r:"Under the umbrella."}, {t:"Can I go in now?", r:"Yes! But always stay close to me."}]}]},
    {titulo:"Chatting with the castle builder", chau:"What a beautiful castle! Bye!", pasos:[
      {di:"Look at my sand castle! Do you want to help me?", op:[{t:"Yes, I'll help you!", r:"Great! I need more sand."}, {t:"What a lovely castle!", r:"Thank you! I made it with the bucket."}]},
      {op:[{t:"What do you use to make it?", r:"A bucket and a little shovel."}, {t:"Shall we add a tower?", r:"Yes! The tallest tower."}]},
      {di:"Where shall we put a flag?", op:[{t:"On the tallest tower.", r:"Good idea! It looks perfect there."}, {t:"On top of the castle.", r:"Yes! So everyone can see it."}]},
      {op:[{t:"What if a wave comes?", r:"No problem! We'll build another."}, {t:"Can I dig a path?", r:"Of course! Dig with the shovel."}]}]},
    {titulo:"Chatting with the little fish", chau:"Blub, blub! See you soon!", pasos:[
      {di:"Hello! Welcome to the bottom of the sea!", op:[{t:"Hello, little fish!", r:"Blub, blub! I'm so happy!"}, {t:"The sea is so lovely!", r:"It's my home!"}]},
      {op:[{t:"What's your name?", r:"My name is Bubble."}, {t:"Who do you live with?", r:"With my fish family."}]},
      {di:"Do you want to swim with me?", op:[{t:"Yes, let's go!", r:"Follow me! Blub, blub."}, {t:"Yes, but slowly.", r:"Of course! Nice and slow."}]},
      {op:[{t:"What do you eat?", r:"Tiny food and seaweed."}, {t:"Where does the crab live?", r:"Over there, among the rocks."}]}]},
    {titulo:"Chatting with the turtle", chau:"That was a lovely ride! Goodbye!", pasos:[
      {di:"Hello, little one. What are you doing here?", op:[{t:"I'm swimming.", r:"You swim so well!"}, {t:"I'm watching the fish.", r:"There are lots to see!"}]},
      {op:[{t:"How old are you?", r:"I'm a hundred years old!"}, {t:"Why are you so slow?", r:"Because there's no hurry in the sea."}]},
      {di:"Do you want to ride on my shell?", op:[{t:"Yes, I do!", r:"Hold on tight!"}, {t:"Yes, but carefully.", r:"Nice and slow, as always."}]},
      {op:[{t:"Where are we going?", r:"To see the sea treasure."}, {t:"Where is your home?", r:"Wherever I swim!"}]}]}
  ],
  titulo: "The beach",
  lugar: {texto:"the beach", silabas:["the","beach"]},
  bienvenida: "We're at the beach!",
  niveles: [{nombre:"The beach", numTexto:"zero"}, {nombre:"Under the sea", numTexto:"one"}],
  estaciones: {
    S: {
      palabra: {texto:"the umbrella", silabas:["the","um","brel","la"]},
      intro: "We're at the beach! This is our umbrella.",
      frase: {texto:"What a lovely beach day!", partes:["What a lovely","beach day!"]},
      respuesta: "Yes, it's very sunny!",
      cuento: {
        titulo: "The red umbrella",
        paginas: [
          "{N} came to the beach with the red *umbrella*.",
          "\"What a lovely beach day!\" said {N}.",
          "The sun was bright, but under the umbrella it was cool and shady.",
          "Everyone sat in the shade and ate a watermelon."
        ]
      }
    },
    A: {
      palabra: {texto:"the sand", silabas:["the","sand"]},
      intro: "This is the sand. It's warm!",
      frase: {texto:"The sand is warm.", partes:["The sand","is warm."]},
      respuesta: "Careful! Put on your flip-flops!",
      cuento: {
        titulo: "The sand castle",
        paginas: [
          "{N} and the dog filled the bucket with *sand*.",
          "\"The sand is warm,\" said {N}.",
          "They built a castle with four towers.",
          "And a little wave splashed their feet!"
        ]
      }
    },
    O: {
      palabra: {texto:"the wave", silabas:["the","wave"]},
      intro: "Look at the sea. Here comes a wave!",
      frase: {texto:"Look, a big wave!", partes:["Look,","a big wave!"]},
      respuesta: "Oops! We almost got wet!",
      cuento: {
        titulo: "The big wave",
        paginas: [
          "A little *wave* came to the shore.",
          "\"Look, a big wave!\" shouted {N}.",
          "Splash! The wave wet {N}'s feet.",
          "{N} laughed and jumped the wave again."
        ]
      }
    },
    N: {
      palabra: {texto:"the goggles", silabas:["the","gog","gles"]},
      intro: "These are the goggles. With them we can see underwater!",
      frase: {texto:"I'm putting on my goggles!", partes:["I'm putting on","my goggles!"]},
      respuesta: "Now we're ready! Let's see what's underwater!",
      cuento: {
        titulo: "The new goggles",
        paginas: [
          "{N} put on the *goggles* and a blue swimsuit.",
          "\"I'm putting on my goggles!\" said {N}.",
          "{N} took a deep breath and dived into the sea.",
          "Underwater everything was blue and sparkly!"
        ]
      }
    },
    F: {
      palabra: {texto:"the fish", silabas:["the","fish"]},
      intro: "We're under the sea! Look, a little fish!",
      frase: {texto:"Hello, little fish!", partes:["Hello,","little fish!"]},
      respuesta: "Blub, blub! Hello!",
      cuento: {
        titulo: "The clown fish",
        paginas: [
          "Under the sea, {N} saw an orange *fish* with white stripes.",
          "\"Hello, little fish!\" said {N}.",
          "The fish swam in circles and blew bubbles.",
          "Blub, blub! They were friends forever."
        ]
      }
    },
    C: {
      palabra: {texto:"the crab", silabas:["the","crab"]},
      intro: "Look, a red crab!",
      frase: {texto:"The crab walks sideways.", partes:["The crab","walks sideways."]},
      respuesta: "Careful with the claws!",
      cuento: {
        titulo: "The sideways crab",
        paginas: [
          "Among the rocks lived a red *crab*.",
          "\"The crab walks sideways,\" laughed {N}.",
          "The crab lifted its claws: click, clack!",
          "{N} said goodbye and the crab hid."
        ]
      }
    },
    T: {
      palabra: {texto:"the turtle", silabas:["the","tur","tle"]},
      intro: "Look, a sea turtle! It swims slowly.",
      frase: {texto:"Let's swim together!", partes:["Let's swim","together!"]},
      respuesta: "Nice and slow!",
      cuento: {
        titulo: "The sea turtle",
        paginas: [
          "A very old *turtle* was swimming slowly.",
          "\"Let's swim together!\" said {N}.",
          "They swam between the seaweed and the corals.",
          "At the end they found a treasure chest."
        ]
      }
    }
  },
  final: {
    pregunta: "We found the chest! Shall we say hello to the sea friends?",
    frase: {texto:"The sea is so lovely!", partes:["The sea","is so lovely!"]},
    // lo que dice cada animal del mar, en el orden de base.js: pez, cangrejo, tortuga, estrella de mar, pulpo
    sonidos: ["Blub, blub!","Click, clack!","Nice and slow!","Sparkle, sparkle!","Splash!"],
    despedida: "See you soon, sea!",
    chau: "Bye-bye, sea friends!",
    lograste: "You did it! You swam with all the sea animals!",
    todos: "You have all the stamps! Find the green door: the sea treasure is waiting!",
    ppFinal: "Collect all the stamps, and then let's find the sea treasure!",
    otraVez: "Another beach day! Collect the stamps again.",
    otraVezB: "Another day"
  },
  // el microjuego: las criaturas en el orden de base.js (texto = el nombre, p = la pregunta)
  microjuego: {
    titulo: "Under the sea!",
    intro: "Listen, and touch the sea creature.",
    fin: "You found {n} creatures!",
    alimentar: "Now, feed them! Touch the water.",
    ingredientes: [{texto:"the fish", p:"Where is the fish?"}, {texto:"the crab", p:"Where is the crab?"}, {texto:"the turtle", p:"Where is the turtle?"}, {texto:"the starfish", p:"Where is the starfish?"}, {texto:"the shell", p:"Where is the shell?"}, {texto:"the octopus", p:"Where is the octopus?"}]
  },
  palabrasExtra: [
    {texto:"the shell", silabas:["the","shell"]},
    {texto:"the starfish", silabas:["the","star","fish"]},
    {texto:"the octopus", silabas:["the","oc","to","pus"]},
    {texto:"the boat", silabas:["the","boat"]},
    {texto:"the sun", silabas:["the","sun"]}
  ],
  frasesExtra: [
    {texto:"So much sun!", partes:["So much sun!"]},
    {texto:"Splash! I'm wet!", partes:["Splash!","I'm wet!"]},
    {texto:"Let's swim!", partes:["Let's swim!"]},
    {texto:"So slow!", partes:["So slow!"]},
    {texto:"A treasure!", partes:["A treasure!"]}
  ],
  preguntas: [
    {p:"Who swims with fins?", r:"The fish!"},
    {p:"Who walks sideways?", r:"The crab!"},
    {p:"Who has a shell on its back?", r:"The turtle!"},
    {p:"What gives us shade?", r:"The umbrella!"},
    {p:"What do we use to see underwater?", r:"The goggles!"},
    {p:"What comes and goes in the sea?", r:"The wave!"},
    {p:"What do we build castles with?", r:"The sand!"},
    {p:"Who has eight arms?", r:"The octopus!"},
    {p:"What shines in the sky?", r:"The sun!"},
    {p:"What keeps a treasure?", r:"The chest!"}
  ],
  objetos: {"#":"the rocks","=":"the sea","y":"the palm tree","n":"the umbrella","i":"the rock","v":"the seaweed","w":"the coral","~":"the door"}
});
