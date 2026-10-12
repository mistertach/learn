/* =========================================================
   CAPÍTULO 6 · LA PLAZA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('plaza', 'it', {
  titulo: "Il parco giochi",
  lugar: {texto:"il parco", silabas:["il", "par", "co"]},
  bienvenida: "Eccoci al parco giochi!",
  niveles: [{nombre:"Le altalene", numTexto:"zero"}, {nombre:"La sabbiera", numTexto:"uno"}, {nombre:"La torre", numTexto:"due"}],
  estaciones: {
    H: {
      palabra: {texto:"l'altalena", silabas:["lal", "ta", "le", "na"]},
      intro: "Queste sono le altalene. Dondoliamo!",
      frase: {texto:"Spingimi, per favore!", partes:["Spingimi,", "per favore!"]},
      respuesta: "Si parte! Più in alto!",
      cuento: {
        titulo: "Più in alto",
        paginas: [
          "L'orsetto andava *sull'altalena*: avanti e indietro!",
          "«Spingimi, per favore!» chiede {N}.",
          "Più in alto, più in alto! {N} alza le braccia: sembra di volare!",
          "Poi tocca all'orsetto. Che bello andare sull'altalena!"
        ]
      }
    },
    S: {
      palabra: {texto:"il dondolo", silabas:["il", "don", "do", "lo"]},
      intro: "Il dondolo! Per giocare ci vuole un amico.",
      frase: {texto:"Su e giù!", partes:["Su", "e giù!"]},
      respuesta: "Io salgo, tu scendi!",
      cuento: {
        titulo: "Su e giù",
        paginas: [
          "*Il dondolo* era tutto solo, aspettava gli amici.",
          "La coniglietta chiede a {N}: «Giochiamo?»",
          "Su e giù! Su e giù! Salta la coniglietta, salta {N}!",
          "Che divertimento! Battono le mani tutti e due."
        ]
      }
    },
    O: {
      palabra: {texto:"il pallone", silabas:["il", "pal", "lo", "ne"]},
      intro: "Qui si gioca a pallone.",
      frase: {texto:"Calcio il pallone!", partes:["Calcio", "il pallone!"]},
      respuesta: "Gooool!",
      cuento: {
        titulo: "Gol!",
        paginas: [
          "Il cagnolino aveva *un pallone* che rimbalzava sempre.",
          "{N} corre, corre e… calcia il pallone!",
          "Oh! Il pallone rotola lontano, lontano.",
          "Ed entra in porta! Gooool! {N} salta di gioia."
        ]
      }
    },
    A: {
      palabra: {texto:"il secchiello", silabas:["il", "sec", "chiel", "lo"]},
      intro: "Questa è la sabbiera. C'è il secchiello con la paletta!",
      frase: {texto:"Faccio un castello di sabbia.", partes:["Faccio un castello", "di sabbia."]},
      respuesta: "Che bel castello!",
      cuento: {
        titulo: "Il castello di sabbia",
        paginas: [
          "La gattina aveva *un secchiello* rosso e una paletta blu.",
          "{N} si abbassa e riempie il secchiello di sabbia.",
          "Lo gira e… ecco un castello!",
          "«Che bel castello!» Tutti battono le mani."
        ]
      }
    },
    J: {
      palabra: {texto:"la corda", silabas:["la", "cor", "da"]},
      intro: "Sai saltare la corda?",
      frase: {texto:"Salto la corda!", partes:["Salto", "la corda!"]},
      respuesta: "Uno, due, tre! Benissimo!",
      cuento: {
        titulo: "Salta e salta",
        paginas: [
          "Il gattino grigio aveva *una corda* per saltare.",
          "{N} salta: uno, due, tre!",
          "Salta anche il gattino. Saltano tutti e due insieme!",
          "Dieci salti! Braccia in alto!"
        ]
      }
    },
    B: {
      palabra: {texto:"le bolle", silabas:["le", "bol", "le"]},
      intro: "Guarda quante bolle!",
      frase: {texto:"Soffio le bolle!", partes:["Soffio", "le bolle!"]},
      respuesta: "Guarda come volano!",
      cuento: {
        titulo: "Le bolle di sapone",
        paginas: [
          "La coniglietta aveva un barattolo di *bolle* di sapone.",
          "{N} soffia piano piano: fuuu!",
          "Bolle dappertutto! {N} gira e gira in mezzo alle bolle.",
          "E tutti ballano sotto le bolle."
        ]
      }
    },
    T: {
      palabra: {texto:"lo scivolo", silabas:["lo", "sci", "vo", "lo"]},
      intro: "Questo è lo scivolo. È altissimo!",
      frase: {texto:"Scendo dallo scivolo!", partes:["Scendo", "dallo scivolo!"]},
      respuesta: "Evviva! Che veloce!",
      cuento: {
        titulo: "Lo scivolo gigante",
        paginas: [
          "Sulla torre c'era *uno scivolo* giallo, altissimo!",
          "{N} sale la scaletta: un gradino, due gradini…",
          "«Scendo dallo scivolo!» Evviva! Che veloce!",
          "{N} salta di gioia: «Ancora!»"
        ]
      }
    }
  },
  final: {
    pregunta: "Giochiamo a Simon dice?",
    frase: {texto:"Sì! Giochiamo!", partes:["Sì!", "Giochiamo!"]},
    ordenes: ["Simon dice: salta!", "Simon dice: gira!", "Simon dice: batti le mani!", "Simon dice: abbassati!", "Simon dice: braccia in alto!"],
    despedida: "Che bella partita!",
    chau: "Ciao, parco!",
    lograste: "Ce l'hai fatta! Hai giocato a tutto nel parco!",
    todos: "Hai tutti i timbri! Cerca la porta verde: giochiamo a Simon dice!",
    ppFinal: "Prendi tutti i timbri e poi giochiamo a Simon dice!",
    otraVez: "Un altro pomeriggio al parco! Prendi di nuovo i timbri.",
    otraVezB: "Un altro pomeriggio"
  },
  microjuego: {
    correr: "Corriamo con l'aquilone! Tieni premuto per farlo salire.",
    titulo: "L'aquilone!",
    intro: "C'è vento! Ascolta e porta l'aquilone fino alla stella.",
    fin: "Hai preso {n} stelle!",
    dirs: ["Su!", "Giù!", "A sinistra!", "A destra!"]
  },
  palabrasExtra: [
    {texto:"l'aquilone", silabas:["la", "qui", "lo", "ne"]},
    {texto:"la paletta", silabas:["la", "pa", "let", "ta"]},
    {texto:"il castello", silabas:["il", "ca", "stel", "lo"]},
    {texto:"il gelato", silabas:["il", "ge", "la", "to"]}
  ],
  frasesExtra: [
    {texto:"Tocca a te!", partes:["Tocca", "a te!"]},
    {texto:"Tocca a me!", partes:["Tocca", "a me!"]},
    {texto:"Salto altissimo!", partes:["Salto", "altissimo!"]},
    {texto:"Corri, corri!", partes:["Corri,", "corri!"]},
    {texto:"Vorrei un gelato!", partes:["Vorrei", "un gelato!"]}
  ],
  preguntas: [
    {p:"Da dove scendiamo? Evviva!", r:"Dallo scivolo!"},
    {p:"Dove dondoliamo avanti e indietro?", r:"Sull'altalena!"},
    {p:"Che cosa calciamo?", r:"Il pallone!"},
    {p:"Che cosa soffiamo?", r:"Le bolle!"},
    {p:"Con che cosa saltiamo?", r:"Con la corda!"},
    {p:"Dove andiamo su e giù?", r:"Sul dondolo!"},
    {p:"Che cosa facciamo con la sabbia?", r:"Un castello!"},
    {p:"Che cosa vola con il vento?", r:"L'aquilone!"},
    {p:"Che cosa mangiamo quando fa caldo?", r:"Il gelato!"},
    {p:"Dove mettiamo la sabbia?", r:"Nel secchiello!"}
  ],
  objetos: {"#":"il cancello", r:"l'albero", f:"i fiori", b:"la panchina", k:"la sabbiera", "~":"la porta"}
});
