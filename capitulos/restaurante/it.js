/* =========================================================
   CAPÍTULO 2 · EL RESTAURANTE — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   El héroe trabaja de mozo: a los clientes les habla de Lei.
   ========================================================= */
registrarTextos('restaurante', 'it', {
  titulo: "Il ristorante",
  lugar: {texto:"il ristorante", silabas:["il", "ri", "sto", "ran", "te"]},
  bienvenida: "Eccoci al ristorante!",
  niveles: [{nombre:"Il parcheggio", numTexto:"zero"}, {nombre:"Il buffet", numTexto:"uno"}, {nombre:"Alla carta", numTexto:"due"}],
  estaciones: {
    E: {
      palabra: {texto:"la macchina", silabas:["la", "mac", "chi", "na"]},
      intro: "Questo è il parcheggio. Qui lasciamo la macchina!",
      frase: {texto:"Arriviamo in macchina!", partes:["Arriviamo", "in macchina!"]},
      respuesta: "Benvenuti! Ti guardo io la macchina.",
      cuento: {
        titulo: "La macchina affamata",
        paginas: [
          "{N} arriva al ristorante con *la macchina* rossa.",
          "Ma la macchina salta e fa rumore! Brum, brum… ha fame!",
          "Il cane le dà la benzina e la lava con tante bolle.",
          "«Grazie!» dice la macchina. E si addormenta nel parcheggio."
        ]
      }
    },
    R: {
      palabra: {texto:"il tavolo", silabas:["il", "ta", "vo", "lo"]},
      intro: "Questo è l'ingresso. Qui ci danno un tavolo.",
      frase: {texto:"Un tavolo, per favore.", partes:["Un tavolo,", "per favore."]},
      respuesta: "Oh no! Oggi manca un cameriere. Ci aiuti?",
      despues: "Metti il grembiule! Adesso lavori al ristorante!",
      cuento: {
        titulo: "Il grembiule magico",
        paginas: [
          "{N} chiede *un tavolo*, ma l'orso è molto preoccupato.",
          "«Oggi il cameriere non è venuto, e c'è tanta gente!» dice l'orso.",
          "«Ti aiuto io!» dice {N}. E l'orso tira fuori *un grembiule* e un papillon.",
          "Fatto! Adesso {N} lavora al ristorante."
        ]
      }
    },
    B: {
      palabra: {texto:"il piatto", silabas:["il", "piat", "to"]},
      intro: "Questo è il buffet. Ognuno si serve quello che vuole!",
      frase: {texto:"Ecco a Lei un piatto.", partes:["Ecco a Lei", "un piatto."]},
      respuesta: "Grazie mille!",
      cuento: {
        titulo: "La montagna di piatti",
        paginas: [
          "Al buffet, la coniglietta ha bisogno di *un piatto*.",
          "{N} porta un piatto… e un altro… e un altro… una montagna di piatti!",
          "La montagna dondola di qua e di là!",
          "Ma non cade niente. «Ecco a Lei un piatto!» dice {N}. Bravo!"
        ]
      }
    },
    K: {
      palabra: {texto:"la pentola", silabas:["la", "pen", "to", "la"]},
      intro: "Questa è la cucina! Qui cucina il gatto cuoco.",
      frase: {texto:"Che buon profumo!", partes:["Che buon", "profumo!"]},
      respuesta: "È la zuppa di pomodoro!",
      cuento: {
        titulo: "La pentola ballerina",
        paginas: [
          "In cucina c'è *una pentola* enorme.",
          "La zuppa fa le bolle: blub, blub, blub.",
          "All'improvviso la pentola comincia a saltare e a ballare!",
          "Il gatto cuoco la abbraccia e dice: «La zuppa è pronta!»"
        ]
      }
    },
    M: {
      palabra: {texto:"il menù", silabas:["il", "me", "nù"]},
      intro: "Questo è il piano di sopra. Qui la gente sceglie dal menù.",
      frase: {texto:"Che cosa desidera mangiare?", partes:["Che cosa", "desidera", "mangiare?"]},
      respuesta: "Una pizza, per favore.",
      cuento: {
        titulo: "La pizza gigante",
        paginas: [
          "{N} dà *il menù* al cane e chiede: «Che cosa desidera mangiare?»",
          "«Una pizza, per favore», dice il cane.",
          "{N} porta una pizza così grande, così grande… che non entra sul tavolo!",
          "Allora il cane invita i suoi amici, e la dividono tutti insieme!"
        ]
      }
    },
    H: {
      palabra: {texto:"il gelato", silabas:["il", "ge", "la", "to"]},
      intro: "È l'ora del dolce!",
      frase: {texto:"Desidera un dolce?", partes:["Desidera", "un dolce?"]},
      respuesta: "Sì! Un gelato, per favore.",
      cuento: {
        titulo: "Il gelato di corsa",
        paginas: [
          "La gatta vuole *un gelato* al cioccolato.",
          "{N} lo porta di corsa, perché fa tanto caldo!",
          "Oh no! Il gelato si scioglie. Goccia, goccia, goccia…",
          "La gatta lo mangia in un boccone. Mmm, che buono!"
        ]
      }
    },
    C: {
      palabra: {texto:"il conto", silabas:["il", "con", "to"]},
      intro: "Questa è la cassa. Qui si paga il pranzo.",
      frase: {texto:"Ecco il conto.", partes:["Ecco", "il conto."]},
      respuesta: "Grazie! Era tutto buonissimo.",
      cuento: {
        titulo: "Il conto volante",
        paginas: [
          "Alla cassa, il cane dà *il conto* a {N}.",
          "Ma la finestra è aperta, e il conto vola via!",
          "{N} corre e salta in alto… e lo prende al volo!",
          "«Ecco il conto!» dice {N}. E tutti applaudono."
        ]
      }
    }
  },
  final: {
    pregunta: "Era tutto buonissimo! Questa è per Lei: una mancia!",
    frase: {texto:"Grazie mille! Torni presto!", partes:["Grazie mille!", "Torni", "presto!"]},
    despedida: "Ottimo lavoro!",
    chau: "Ciao, ciao! Alla prossima!",
    lograste: "Ce l'hai fatta! Hai servito tutti benissimo!",
    todos: "Hai tutti i timbri! Scendi al parcheggio: la cliente ti aspetta alla porta verde!",
    ppFinal: "Prendi tutti i timbri e poi, la mancia!",
    otraVez: "Un altro giorno di lavoro! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  // el microjuego que se abre al terminar el lugar (los ingredientes van en el orden de base.js)
  microjuego: {titulo:"Facciamo la pizza!", intro:"Fai la tua pizza! Tocca un ingrediente e poi tocca la pizza.", horno:"In forno!", mas:"Metti ancora qualcosa!", listo:"Mmm, che buona pizza! Grazie, chef!",
    ingredientes: [{texto:"il sugo"}, {texto:"la mozzarella"}, {texto:"il pomodoro"}, {texto:"l'oliva"}, {texto:"il basilico"}, {texto:"il fungo"}]},
  palabrasExtra: [
    {texto:"la pizza", silabas:["la", "piz", "za"]},
    {texto:"la zuppa", silabas:["la", "zup", "pa"]},
    {texto:"il bicchiere", silabas:["il", "bic", "chie", "re"]},
    {texto:"la forchetta", silabas:["la", "for", "chet", "ta"]},
    {texto:"il grembiule", silabas:["il", "grem", "biu", "le"]}
  ],
  frasesExtra: [
    {texto:"Benvenuti!", partes:["Benvenuti!"]},
    {texto:"Buon appetito!", partes:["Buon", "appetito!"]},
    {texto:"Che cosa desidera bere?", partes:["Che cosa", "desidera", "bere?"]},
    {texto:"Un bicchiere d'acqua, per favore.", partes:["Un bicchiere d'acqua,", "per favore."]},
    {texto:"Grazie mille!", partes:["Grazie", "mille!"]},
    {texto:"Che buono!", partes:["Che buono!"]}
  ],
  preguntas: [
    {p:"Che cosa ordina il cane al piano di sopra?", r:"Una pizza!"},
    {p:"Quale dolce è freddo freddo?", r:"Il gelato!"},
    {p:"Dove si cucina la zuppa?", r:"Nella pentola!"},
    {p:"Con che cosa arriviamo al ristorante?", r:"Con la macchina!"},
    {p:"Dove scegliamo che cosa mangiare?", r:"Sul menù!"},
    {p:"Che cosa portiamo al tavolo per pagare?", r:"Il conto!"},
    {p:"Che cosa mettiamo per lavorare al ristorante?", r:"Il grembiule!"},
    {p:"Dove mettiamo l'acqua?", r:"Nel bicchiere!"},
    {p:"Con che cosa mangiamo gli spaghetti?", r:"Con la forchetta!"},
    {p:"Che cosa ci dà la cliente alla fine?", r:"La mancia!"}
  ],
  objetos: {"#":"il muro", p:"la pianta", a:"la macchina", m:"il tavolo", "~":"la porta"}
});
