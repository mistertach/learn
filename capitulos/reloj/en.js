/* =========================================================
   CAPÍTULO 3 · LA TORRE DEL RELOJ — textos en inglés
   Sirve para dos cosas: es el idioma inglés para aprender (como es.js, fr.js, it.js),
   y es la traducción que ven los grandes al tocar una frase en los otros idiomas
   (se empareja por posición, así que tiene que tener la misma forma que los demás).
   ========================================================= */
registrarTextos('reloj', 'en', {
  charlas: [
    {titulo:"Chatting with the clockmaker", chau:"Time flies! See you soon!", pasos:[
      {di:"Hello! Do you like my clocks?", op:[{t:"Yes, they're beautiful!", r:"Thank you! I made them."}, {t:"Yes, I like the big clock!", r:"It's my favorite too."}]},
      {op:[{t:"What time is it?", r:"It's three o'clock!"}, {t:"How many clocks do you have?", r:"I have a hundred clocks!"}]},
      {di:"Do you want to hear the clock go tick-tock?", op:[{t:"Yes, tick-tock!", r:"Tick-tock, tick-tock!"}, {t:"Yes, I want to listen.", r:"Shh… tick-tock, tick-tock."}]},
      {op:[{t:"Does it ring?", r:"Yes, at every hour!"}, {t:"Can I touch the hands?", r:"Yes, gently!"}]}]},
    {titulo:"Chatting at three o'clock", chau:"It's time to go! See you at four o'clock!", pasos:[
      {di:"It's three o'clock! Time for a snack. Are you hungry?", op:[{t:"Yes, I'm hungry!", r:"Let's have a snack!"}, {t:"Yes, I want a cookie!", r:"Here's your cookie."}]},
      {op:[{t:"What time is it?", r:"It's three o'clock."}, {t:"What time do we have dinner?", r:"At eight o'clock."}]},
      {di:"What do you do at three o'clock?", op:[{t:"I play with my toys.", r:"How fun!"}, {t:"I have a snack.", r:"Yum! Me too."}]},
      {op:[{t:"Where is the little hand now?", r:"On the three!"}, {t:"Is it late?", r:"No, it's still early."}]}]},
    {titulo:"Chatting at a quarter to seven", chau:"Dinner is ready! Enjoy your meal!", pasos:[
      {di:"It's a quarter to seven. Almost dinner time. Are you hungry?", op:[{t:"Yes, I'm very hungry!", r:"Dinner is almost ready."}, {t:"Yes, what's for dinner?", r:"Soup and bread!"}]},
      {op:[{t:"What time is dinner?", r:"At seven o'clock."}, {t:"How long until dinner?", r:"Just a quarter of an hour!"}]},
      {di:"Shall we wash our hands first?", op:[{t:"Yes, let's wash our hands!", r:"Soap, soap, and water!"}, {t:"Yes, they're dirty!", r:"Let's clean them well."}]},
      {op:[{t:"Can I help set the table?", r:"Yes! Please bring the plates."}, {t:"Is it time yet?", r:"Almost! Wait a little."}]}]},
    {titulo:"Chatting at the bell tower", chau:"Ding dong! See you tomorrow!", pasos:[
      {di:"It's twelve o'clock! What time is it?", op:[{t:"It's twelve o'clock!", r:"That's right! Time for the bells."}, {t:"It's noon!", r:"Yes! The bells will ring."}]},
      {op:[{t:"Can I ring the bells?", r:"Yes! Pull the rope."}, {t:"How many times do they ring?", r:"Twelve times!"}]},
      {di:"Did you learn about time today?", op:[{t:"Yes, I know o'clock and half past!", r:"Wonderful! You're a clock expert."}, {t:"Yes, I love clocks!", r:"Me too! Time is fun."}]},
      {op:[{t:"What time is it now?", r:"Time to go home!"}, {t:"Will you teach me more?", r:"Of course! Come back tomorrow."}]}]}
  ],
  titulo: "The clock tower",
  lugar: {texto:"the clock tower", silabas:["the", "clock", "tow", "er"]},
  bienvenida: "We're at the clock tower!",
  niveles: [{nombre:"The workshop", numTexto:"zero"}, {nombre:"The gears", numTexto:"one"}, {nombre:"At the top", numTexto:"two"}],
  numeros: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"],
  estaciones: {
    R: {
      palabra: {texto:"the clock", silabas:["the", "clock"]},
      intro: "This is the clockmaker's workshop. There are clocks everywhere!",
      contar: "Let's count the numbers on the clock! Repeat after me.",
      frase: {texto:"What time is it?", partes:["What time", "is it?"]},
      respuesta: "Let's learn to read the clock!",
      cuento: {
        titulo: "The sleepy clock",
        paginas: [
          "In the clockmaker's workshop there was *a clock* that didn't go tick-tock.",
          "\"It's asleep!\" said the clockmaker bear.",
          "{N} counted out loud: one, two, three… all the way to twelve!",
          "And the clock woke up: tick-tock, tick-tock!"
        ]
      }
    },
    A: {
      palabra: {texto:"the little hand", silabas:["the", "lit", "tul", "hand"]},
      intro: "Look at this short hand.",
      buscar: "Which clock has a red little hand?",
      frase: {texto:"The little hand shows the hour.", partes:["The little hand", "shows the hour."]},
      respuesta: "Well done! It shows the hour.",
      cuento: {
        titulo: "The little hand",
        paginas: [
          "*The little hand* is short and walks very slowly.",
          "It tells us the hour: one o'clock, two o'clock, three o'clock…",
          "One day it wanted to hurry… and it got dizzy!",
          "\"Slow is fine,\" {N} told it."
        ]
      }
    },
    N: {
      palabra: {texto:"the big hand", silabas:["the", "big", "hand"]},
      intro: "And this hand is long, long, long.",
      buscar: "Which clock has a red big hand?",
      frase: {texto:"The big hand shows the minutes.", partes:["The big hand", "shows the minutes."]},
      respuesta: "Yes! It shows the minutes.",
      cuento: {
        titulo: "The running hand",
        paginas: [
          "*The big hand* is tall and runs a lot.",
          "It goes all the way around the clock in one hour.",
          "\"Go, big hand!\" shouted {N}.",
          "When it reached the top, at twelve, it said: \"O'clock!\""
        ]
      }
    },
    H: {
      palabra: {texto:"o'clock", silabas:["oh", "clock"]},
      intro: "When the big hand looks at twelve, it's o'clock.",
      buscar: "Which clock says three o'clock?",
      frase: {texto:"It's three o'clock.", partes:["It's three", "o'clock."]},
      respuesta: "Yes! Three o'clock!",
      cuento: {
        titulo: "Snack time",
        paginas: [
          "When the big hand is on twelve, it's *o'clock*.",
          "It was three o'clock: snack time!",
          "The dog brought milk and cookies.",
          "{N} said: \"It's three o'clock! Yummy!\""
        ]
      }
    },
    C: {
      palabra: {texto:"quarter past", silabas:["quar", "ter", "past"]},
      intro: "When the big hand looks at three, it's quarter past.",
      buscar: "Which clock says quarter past four?",
      frase: {texto:"It's quarter past four.", partes:["It's quarter past", "four."]},
      respuesta: "Awesome! Quarter past four.",
      cuento: {
        titulo: "To the park",
        paginas: [
          "When the big hand is on three, it's *quarter past*.",
          "At quarter past four, {N} went to the park.",
          "On the swing: up, down, up, down.",
          "\"It's quarter past four!\" said the bear. What a lovely day!"
        ]
      }
    },
    M: {
      palabra: {texto:"half past", silabas:["half", "past"]},
      intro: "When the big hand looks at six, it's half past.",
      buscar: "Which clock says half past five?",
      frase: {texto:"It's half past five.", partes:["It's half past", "five."]},
      respuesta: "Very good! Half past five.",
      cuento: {
        titulo: "Bath time",
        paginas: [
          "When the big hand is on six, it's *half past*.",
          "At half past five, the bunny got the bath ready.",
          "Bubbles everywhere!",
          "{N} said: \"It's half past five, bath time!\""
        ]
      }
    },
    Q: {
      palabra: {texto:"quarter to", silabas:["quar", "ter", "to"]},
      intro: "When the big hand looks at nine, a quarter is missing: it's quarter to.",
      buscar: "Which clock says quarter to seven?",
      frase: {texto:"It's quarter to seven.", partes:["It's quarter to", "seven."]},
      respuesta: "Great! Quarter to seven.",
      cuento: {
        titulo: "Almost!",
        paginas: [
          "When the big hand is on nine, it's *quarter to*.",
          "It was almost seven: it was quarter to seven.",
          "The cat yawned: aaah! It was almost dinner time.",
          "\"It's quarter to seven!\" said {N}. \"Almost!\""
        ]
      }
    }
  },
  final: {
    pregunta: "What time is it?",
    frase: {texto:"It's twelve o'clock!", partes:["It's twelve", "o'clock!"]},
    despedida: "Ding, dong!",
    chau: "The bells are ringing!",
    lograste: "You did it! Now you can read the clock!",
    todos: "You have all the stamps! Go up to the top and find the green door.",
    ppFinal: "Collect all the stamps, and then ring the bells!",
    otraVez: "Another turn of the clock! Collect the stamps again.",
    otraVezB: "Another turn"
  },
  microjuego: {
    romper: "Now let's smash the alarm clocks! Tap them!",
    titulo: "Set the clock!",
    intro: "Listen to the time. Tap the number, then pick: o'clock, quarter past, half past or quarter to.",
    pon: "Set the clock like this:",
    asi: "Look, it's like this:",
    fin: "You set {n} clocks right!",
    tipos: {punto:"o'clock", cuarto:"quarter past", media:"half past", menos:"quarter to"},
    hora: (n, t) => t === "punto" ? `It's ${n} o'clock.` : `It's ${{cuarto:"quarter past", media:"half past", menos:"quarter to"}[t]} ${n}.`
  },
  palabrasExtra: [
    {texto:"one", silabas:["one"]},
    {texto:"two", silabas:["two"]},
    {texto:"three", silabas:["three"]},
    {texto:"four", silabas:["four"]},
    {texto:"five", silabas:["five"]},
    {texto:"six", silabas:["six"]},
    {texto:"seven", silabas:["sev", "en"]},
    {texto:"eight", silabas:["eight"]},
    {texto:"nine", silabas:["nine"]},
    {texto:"ten", silabas:["ten"]},
    {texto:"eleven", silabas:["ih", "lev", "en"]},
    {texto:"twelve", silabas:["twelve"]}
  ],
  frasesExtra: [
    {texto:"Tick-tock, tick-tock!", partes:["Tick-tock,", "tick-tock!"]},
    {texto:"It's one o'clock.", partes:["It's one o'clock."]},
    {texto:"It's two o'clock.", partes:["It's two o'clock."]},
    {texto:"It's time for bed.", partes:["It's time", "for bed."]}
  ],
  preguntas: [
    {p:"Which clock says three o'clock?", r:"That one! Three o'clock."},
    {p:"Which clock says half past five?", r:"That one! Half past five."},
    {p:"Which clock says quarter past four?", r:"That one! Quarter past four."},
    {p:"Which clock says quarter to seven?", r:"That one! Quarter to seven."},
    {p:"Which clock has a red little hand?", r:"That one! The little hand."},
    {p:"Which clock has a red big hand?", r:"That one! The big hand."},
    {p:"Show me the number three!", r:"Yes! Three."},
    {p:"Show me the number seven!", r:"Yes! Seven."},
    {p:"Show me the number twelve!", r:"Yes! Twelve."},
    {p:"Show me the number nine!", r:"Yes! Nine."}
  ],
  objetos: {"#":"the wall", b:"the bench", p:"the plant", e:"the gear", "~":"the door"}
});
