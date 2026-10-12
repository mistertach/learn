/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('casa', 'it', {
  titulo: "La nostra casa",
  lugar: {texto:"la nostra casa", silabas:["la", "no", "stra", "ca", "sa"]},
  bienvenida: "Benvenuti a casa!",
  niveles: [{nombre:"Il giardino", numTexto:"zero"}, {nombre:"Il piano terra", numTexto:"uno"}, {nombre:"Di sopra", numTexto:"due"}],
  estaciones: {
    R: {
      palabra: {texto:"il cane", silabas:["il", "ca", "ne"]},
      intro: "Questo è il giardino. Ecco il nostro cane!",
      frase: {texto:"Vieni, cagnolino!", partes:["Vieni,", "cagnolino!"]},
      respuesta: "Bau, bau!",
      cuento: {
        titulo: "Il cane saltellante",
        paginas: [
          "In giardino, *il cane* scodinzola.",
          "«Vieni, cagnolino!» lo chiama {N}.",
          "Il cane salta così in alto… che cade tra i fiori!",
          "{N} gli dà un abbraccio. Bau, bau!"
        ]
      }
    },
    A: {
      palabra: {texto:"il papà", silabas:["il", "pa", "pà"]},
      intro: "Questo è il salotto. Papà legge il giornale.",
      frase: {texto:"Buongiorno, papà!", partes:["Buongiorno,", "papà!"]},
      respuesta: "Buongiorno, tesoro! Hai dormito bene?",
      cuento: {
        titulo: "Il giornale volante",
        paginas: [
          "*Papà* legge il giornale sul divano.",
          "«Buongiorno, papà!» dice {N}.",
          "Fiuu! Una pagina del giornale vola fuori dalla finestra.",
          "Papà ride: «Non importa! Giochiamo insieme?»"
        ]
      }
    },
    M: {
      palabra: {texto:"la mamma", silabas:["la", "mam", "ma"]},
      intro: "Questa è la cucina. La mamma cucina!",
      frase: {texto:"Ciao, mamma! Come stai?", partes:["Ciao, mamma!", "Come stai?"]},
      respuesta: "Benissimo, grazie! E tu?",
      cuento: {
        titulo: "La minestra della mamma",
        paginas: [
          "In cucina, *la mamma* prepara una minestra.",
          "«Ciao, mamma! Come stai?» chiede {N}.",
          "«Benissimo! Vuoi assaggiare?» dice la mamma.",
          "Mmm! La minestra della mamma è la più buona del mondo."
        ]
      }
    },
    H: {
      palabra: {texto:"il fratello", silabas:["il", "fra", "tel", "lo"]},
      intro: "Tuo fratello ha tanti giocattoli.",
      frase: {texto:"Giochiamo insieme?", partes:["Giochiamo", "insieme?"]},
      respuesta: "Sì! Giochiamo!",
      cuento: {
        titulo: "La torre di cubi",
        paginas: [
          "*Il fratello* di {N} costruisce una torre di cubi.",
          "«Giochiamo insieme?» chiede {N}.",
          "La torre cresce, cresce… e cade! Bum!",
          "Ridono tanto e la costruiscono di nuovo."
        ]
      }
    },
    E: {
      palabra: {texto:"la sorella", silabas:["la", "so", "rel", "la"]},
      intro: "Tua sorella è in camera sua, legge.",
      frase: {texto:"Mi leggi una storia?", partes:["Mi leggi", "una storia?"]},
      respuesta: "Certo!",
      cuento: {
        titulo: "La storia della sorella",
        paginas: [
          "*La sorella* di {N} ha un libro di draghi.",
          "«Mi leggi una storia?» chiede {N}.",
          "«C'era una volta un drago che aveva paura del buio…»",
          "{N} ascolta tutta la storia, vicino vicino alla sorella."
        ]
      }
    },
    B: {
      palabra: {texto:"il bebè", silabas:["il", "be", "bè"]},
      intro: "Sst! Il bebè è nella culla.",
      frase: {texto:"Sst! Il bebè dorme.", partes:["Sst!", "Il bebè dorme."]},
      respuesta: "Gu, gu… ta, ta.",
      cuento: {
        titulo: "Il bebè che non dormiva",
        paginas: [
          "*Il bebè* è nella culla, ma non vuole dormire!",
          "«Sst!» dice {N}, e gli canta una canzone.",
          "Il bebè sbadiglia: aaah…",
          "E si addormenta piano piano. Sst! Il bebè dorme."
        ]
      }
    },
    C: {
      palabra: {texto:"il letto", silabas:["il", "let", "to"]},
      intro: "Questa è la tua camera. Guarda che bel letto!",
      frase: {texto:"Buonanotte!", partes:["Buonanotte!"]},
      respuesta: "Sogni d'oro! A domani.",
      cuento: {
        titulo: "A nanna!",
        paginas: [
          "È notte. {N} si mette il pigiama.",
          "Salta sul *letto*: boing, boing!",
          "Papà dà un bacio: «Buonanotte!»",
          "«A domani!» dice {N}, e chiude gli occhi."
        ]
      }
    }
  },
  final: {
    pregunta: "Pronto, tesoro! Come stai?",
    frase: {texto:"Benissimo! Ti voglio bene, nonna!", partes:["Benissimo!", "Ti voglio bene,", "nonna!"]},
    despedida: "Un bacione!",
    chau: "Ciao, nonna! Ciao!",
    lograste: "Ce l'hai fatta! Hai salutato tutta la famiglia!",
    todos: "Hai tutti i timbri! Cerca la porta verde: la nonna ti chiama al telefono!",
    ppFinal: "Prendi tutti i timbri e poi parliamo con la nonna!",
    otraVez: "Un altro giorno a casa! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  microjuego: {
    titulo: "La torta della famiglia!",
    intro: "Decora la torta! Tocca qualcosa di buono, e poi tocca la torta.",
    soplar: "Soffiamo le candeline!",
    mas: "Metti ancora qualcosa!",
    listo: "Che bella torta! Evviva!",
    ingredientes: [{texto:"la panna"}, {texto:"la fragola"}, {texto:"il cioccolato"}, {texto:"i confettini"}, {texto:"la ciliegia"}, {texto:"la candelina"}]
  },
  palabrasExtra: [
    {texto:"la nonna", silabas:["la", "non", "na"]},
    {texto:"il nonno", silabas:["il", "non", "no"]},
    {texto:"la famiglia", silabas:["la", "fa", "mi", "glia"]},
    {texto:"il divano", silabas:["il", "di", "va", "no"]},
    {texto:"il telefono", silabas:["il", "te", "le", "fo", "no"]}
  ],
  frasesExtra: [
    {texto:"Buongiorno!", partes:["Buongiorno!"]},
    {texto:"Come stai?", partes:["Come", "stai?"]},
    {texto:"Bene, grazie.", partes:["Bene,", "grazie."]},
    {texto:"Ti voglio bene!", partes:["Ti voglio bene!"]},
    {texto:"A domani!", partes:["A domani!"]}
  ],
  preguntas: [
    {p:"Chi prepara la minestra?", r:"La mamma!"},
    {p:"Chi legge il giornale sul divano?", r:"Papà!"},
    {p:"Chi fa bau, bau?", r:"Il cane!"},
    {p:"Dove dormiamo?", r:"Nel letto!"},
    {p:"Chi è il più piccolo della famiglia?", r:"Il bebè!"},
    {p:"Con che cosa parliamo con la nonna?", r:"Con il telefono!"},
    {p:"Chi ci legge le storie?", r:"La sorella!"},
    {p:"Chi costruisce torri di cubi?", r:"Il fratello!"},
    {p:"Chi ci chiama al telefono?", r:"La nonna!"},
    {p:"Dove ci sediamo a riposare?", r:"Sul divano!"}
  ],
  objetos: {"#":"il muro", b:"la panchina", p:"la pianta", m:"il tavolo", f:"i fiori", r:"l'albero", s:"il divano", j:"i giocattoli", "~":"la porta"}
});
