/* =========================================================
   CAPÍTULO 8 · LA GRANJA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('granja', 'it', {
  charlas: [
    {titulo:"Parlare con il contadino", chau:"Grazie per aver visitato la mucca! A presto!", pasos:[
      {di:"Buongiorno! Vuoi vedere la mucca?", op:[{t:"Sì, voglio vedere la mucca!", r:"Vieni, è qui."}, {t:"Sì, per favore!", r:"Seguimi!"}]},
      {op:[{t:"Che cosa dice la mucca?", r:"La mucca dice muuu!"}, {t:"Che cosa mangia la mucca?", r:"Mangia l'erba."}]},
      {di:"Vuoi del latte freschissimo?", op:[{t:"Sì, per favore!", r:"Ecco un bicchiere di latte."}, {t:"Sì, adoro il latte!", r:"Anch'io! È freschissimo."}]},
      {op:[{t:"Da dove viene il latte?", r:"Dalla mucca!"}, {t:"La mucca è grande?", r:"Sì, grandissima e dolcissima."}]}]},
    {titulo:"Parlare con l'amico del gallo", chau:"Chicchirichì! A domani mattina!", pasos:[
      {di:"Chicchirichì! Buongiorno! Hai sentito il gallo?", op:[{t:"Sì, l'ho sentito!", r:"Canta fortissimo!"}, {t:"No, dormivo.", r:"Allora il gallo ti ha appena svegliato!"}]},
      {op:[{t:"Quando si sveglia il gallo?", r:"Presto, quando sorge il sole!"}, {t:"Il gallo ha degli amici?", r:"Sì, tutte le galline!"}]},
      {di:"Sai cantare come il gallo?", op:[{t:"Sì! Chicchirichì!", r:"Meraviglioso! Canti benissimo!"}, {t:"Provo! Chicchirichì!", r:"Molto bene! Più forte!"}]},
      {op:[{t:"Ti piace la fattoria?", r:"Adoro la fattoria!"}, {t:"Cantiamo insieme?", r:"Sì! Chicchirichì!"}]}]},
    {titulo:"Parlare con l'amico del cavallo", chau:"Il cavallo ti saluta! A presto!", pasos:[
      {di:"Vuoi accarezzare il cavallo?", op:[{t:"Sì, piano piano!", r:"Piano, piano. Così!"}, {t:"Sì, non ho paura.", r:"Che coraggio!"}]},
      {op:[{t:"Come si chiama il cavallo?", r:"Si chiama Tuono."}, {t:"Che cosa mangia il cavallo?", r:"Mangia fieno e mele."}]},
      {di:"Diamo una mela al cavallo?", op:[{t:"Sì, ecco una mela!", r:"Gli piace tanto! Crunch, crunch."}, {t:"Sì, una per lui!", r:"Dice grazie! Iiiiih!"}]},
      {op:[{t:"Il cavallo corre veloce?", r:"Sì, velocissimo!"}, {t:"Posso montare il cavallo?", r:"Quando sarai più grande, sì!"}]}]},
    {titulo:"Parlare con il contadino di sera", chau:"Buonanotte! Sogni d'oro!", pasos:[
      {di:"È notte. Diamo la buonanotte agli animali?", op:[{t:"Sì, buonanotte, animali!", r:"Buonanotte! Dormite bene!"}, {t:"Sì, hanno sonno.", r:"Sss, parliamo piano."}]},
      {op:[{t:"Tutti gli animali dormono?", r:"Quasi tutti!"}, {t:"Che cosa sognano gli animali?", r:"Sognano l'erba verde."}]},
      {di:"Ti è piaciuta la fattoria?", op:[{t:"Sì, mi è piaciuta tanto!", r:"Che gioia!"}, {t:"Sì, ho adorato gli animali!", r:"E loro hanno adorato te!"}]},
      {op:[{t:"Posso tornare domani?", r:"Certo! Gli animali ti aspettano."}, {t:"Mi racconti un segreto?", r:"Sss… gli animali ti vogliono bene."}]}]}
  ],
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
    burp: "Oh! Ha mangiato troppo!", burpCorto: "BURP!", libre: "Adesso lancia il cibo dappertutto!",
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
