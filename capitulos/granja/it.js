/* =========================================================
   CAPÍTULO 8 · LA GRANJA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('granja', 'it', {
  titulo: "La fattoria",
  lugar: {texto:"la fattoria", silabas:["la", "fat", "to", "ria"]},
  bienvenida: "Eccoci alla fattoria!",
  niveles: [{nombre:"Il fienile", numTexto:"zero"}, {nombre:"Il recinto", numTexto:"uno"}, {nombre:"Lo stagno", numTexto:"due"}],
  estaciones: {
    V: {
      palabra: {texto:"la mucca", silabas:["la", "muc", "ca"]},
      intro: "Ciao! Oggi lavori alla fattoria: ecco il cappello! Guarda, questa è la mucca.",
      frase: {texto:"La mucca fa muu.", partes:["La mucca", "fa muu."]},
      respuesta: "Muu! E ti do il latte!",
      cuento: {
        titulo: "La mucca e il latte",
        paginas: [
          "Nella fattoria viveva *una mucca* bianca e nera.",
          "«Che grande!» dice {N}. E la mucca risponde: «Muu!»",
          "La mucca regala a {N} una bottiglia di latte fresco.",
          "«Grazie, mucca!» Muu!"
        ]
      }
    },
    H: {
      palabra: {texto:"il maiale", silabas:["il", "ma", "ia", "le"]},
      intro: "Il maiale adora il fango.",
      frase: {texto:"Il maiale è sporco.", partes:["Il maiale", "è sporco."]},
      respuesta: "Oink, oink! Adoro il fango!",
      cuento: {
        titulo: "Il maiale infangato",
        paginas: [
          "*Il maiale* si rotolava nel fango: splaf, splaf!",
          "«Il maiale è sporco!» ride {N}.",
          "{N} lo lava con acqua e sapone. Quante bolle!",
          "Adesso è pulitissimo! Oink, oink."
        ]
      }
    },
    O: {
      palabra: {texto:"la pecora", silabas:["la", "pe", "co", "ra"]},
      intro: "Questa è la pecora. Toccala, è morbidissima!",
      frase: {texto:"La pecora è morbida.", partes:["La pecora", "è morbida."]},
      respuesta: "Beee! La mia lana è morbidissima!",
      cuento: {
        titulo: "La pecora dormigliona",
        paginas: [
          "*La pecora* aveva tanta, tanta lana.",
          "{N} la tocca: «La pecora è morbida!»",
          "La pecora sbadiglia… e si addormenta in piedi. Zzz!",
          "Quando si sveglia, dice «Beee!» e salta di gioia."
        ]
      }
    },
    K: {
      palabra: {texto:"il gallo", silabas:["il", "gal", "lo"]},
      intro: "Il gallo sveglia tutti la mattina.",
      frase: {texto:"Buongiorno, gallo!", partes:["Buongiorno,", "gallo!"]},
      respuesta: "Chicchirichì! Tutti in piedi!",
      cuento: {
        titulo: "Chicchirichì!",
        paginas: [
          "Molto presto, *il gallo* canta: Chicchirichì!",
          "{N} e la coniglietta avevano ancora sonno. Zzz!",
          "«Buongiorno, gallo!» dice {N}.",
          "In piedi, al lavoro! E nel nido trovano un uovo."
        ]
      }
    },
    B: {
      palabra: {texto:"il cavallo", silabas:["il", "ca", "val", "lo"]},
      intro: "Guarda che bel cavallo!",
      frase: {texto:"Il cavallo è veloce.", partes:["Il cavallo", "è veloce."]},
      respuesta: "Iiih! Andiamo al galoppo!",
      cuento: {
        titulo: "Al galoppo",
        paginas: [
          "*Il cavallo* mangiava l'erba, tranquillo.",
          "All'improvviso parte di corsa: tatà, tatà!",
          "{N} corre dietro: «Il cavallo è veloce!»",
          "Alla fine il cavallo torna e dà un bacino a {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"l'anatra", silabas:["la", "na", "tra"]},
      intro: "Questo è lo stagno delle anatre.",
      frase: {texto:"L'anatra nuota.", partes:["L'anatra", "nuota."]},
      respuesta: "Qua, qua! L'acqua è fresca!",
      cuento: {
        titulo: "L'anatra nuotatrice",
        paginas: [
          "Nello stagno nuotava *un'anatra* verde.",
          "L'anatra nuotava da una parte all'altra: qua, qua!",
          "Splash! Va sott'acqua… ed esce con le bolle!",
          "{N} balla con l'anatra: qua, qua, qua!"
        ]
      }
    },
    Y: {
      palabra: {texto:"il pulcino", silabas:["il", "pul", "ci", "no"]},
      intro: "Sst! Qualcosa si muove nell'uovo.",
      frase: {texto:"Il pulcino è piccolo.", partes:["Il pulcino", "è piccolo."]},
      respuesta: "Pio, pio!",
      cuento: {
        titulo: "I pulcini",
        paginas: [
          "C'era un uovo che si muoveva: crac, crac…",
          "Ed è uscito *un pulcino* giallo!",
          "E poi un altro… e un altro ancora! Tre pulcini piccolini!",
          "«Pio, pio!» dicono a {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "È già notte. Diamo la buonanotte agli animali?",
    frase: {texto:"Buonanotte, animali!", partes:["Buonanotte,", "animali!"]},
    sonidos: ["Muu!", "Oink, oink!", "Beee!", "Chicchirichì!", "Iiih!", "Qua, qua!", "Pio, pio!"],
    despedida: "A domani!",
    chau: "Ciao, fattoria!",
    lograste: "Ce l'hai fatta! Hai curato tutti gli animali!",
    todos: "Hai tutti i timbri! Cerca la porta verde: diamo la buonanotte agli animali!",
    ppFinal: "Prendi tutti i timbri e poi diamo la buonanotte agli animali!",
    otraVez: "Un altro giorno alla fattoria! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  microjuego: {
    titulo: "Diamo da mangiare!",
    intro: "Gli animali hanno fame. Ascolta e tocca l'animale.",
    fin: "Hai dato da mangiare a {n} animali!",
    ingredientes: [
      {texto:"la mucca", dale:"Dai da mangiare alla mucca.", sonido:"Muu!"},
      {texto:"il maiale", dale:"Dai da mangiare al maiale.", sonido:"Oink, oink!"},
      {texto:"la pecora", dale:"Dai da mangiare alla pecora.", sonido:"Beee!"},
      {texto:"il gallo", dale:"Dai da mangiare al gallo.", sonido:"Chicchirichì!"},
      {texto:"il cavallo", dale:"Dai da mangiare al cavallo.", sonido:"Iiih!"},
      {texto:"l'anatra", dale:"Dai da mangiare all'anatra.", sonido:"Qua, qua!"}
    ]
  },
  palabrasExtra: [
    {texto:"l'uovo", silabas:["luo", "vo"]},
    {texto:"il latte", silabas:["il", "lat", "te"]},
    {texto:"il trattore", silabas:["il", "trat", "to", "re"]},
    {texto:"il fienile", silabas:["il", "fie", "ni", "le"]}
  ],
  frasesExtra: [
    {texto:"Che grande!", partes:["Che grande!"]},
    {texto:"Che piccolo!", partes:["Che piccolo!"]},
    {texto:"Che veloce!", partes:["Che veloce!"]},
    {texto:"Che sporco!", partes:["Che sporco!"]},
    {texto:"Che morbida!", partes:["Che morbida!"]}
  ],
  preguntas: [
    {p:"Chi fa muu?", r:"La mucca!"},
    {p:"Chi fa oink, oink?", r:"Il maiale!"},
    {p:"Chi fa chicchirichì?", r:"Il gallo!"},
    {p:"Chi fa qua, qua?", r:"L'anatra!"},
    {p:"Chi ha tanta lana?", r:"La pecora!"},
    {p:"Chi corre velocissimo?", r:"Il cavallo!"},
    {p:"Chi fa pio, pio?", r:"Il pulcino!"},
    {p:"Che cosa ci dà la mucca?", r:"Il latte!"},
    {p:"Che cosa fa la gallina?", r:"L'uovo!"},
    {p:"Che cosa guida il contadino?", r:"Il trattore!"}
  ],
  objetos: {"#":"lo steccato", h:"la balla di fieno", r:"l'albero", f:"i fiori", "~":"la porta"}
});
