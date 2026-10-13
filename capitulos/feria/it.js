/* =========================================================
   CAPÍTULO 5 · LA FERIA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('feria', 'it', {
  titulo: "Il mercato",
  lugar: {texto:"il mercato", silabas:["il", "mer", "ca", "to"]},
  bienvenida: "Eccoci al mercato!",
  niveles: [{nombre:"L'ingresso", numTexto:"zero"}, {nombre:"Le verdure", numTexto:"uno"}, {nombre:"La cassa", numTexto:"due"}],
  numeros: ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci"],
  estaciones: {
    M: {
      palabra: {texto:"la mela", silabas:["la", "me", "la"]},
      intro: "Questo è il mercato. Guarda quanta frutta!",
      frase: {texto:"Vorrei tre mele, per favore.", partes:["Vorrei tre mele,", "per favore."]},
      respuesta: "Ecco qua: una, due, tre!",
      cuento: {
        titulo: "La mela che scappa",
        paginas: [
          "Al mercato c'erano *mele* rosse e lucide.",
          "«Vorrei tre mele, per favore» dice {N}. «Una, due, tre!»",
          "Oh! Una mela è caduta e rotola per terra.",
          "{N} la prende e la mette nel cestino. Tre mele!"
        ]
      }
    },
    N: {
      palabra: {texto:"la banana", silabas:["la", "ba", "na", "na"]},
      intro: "Che banane gialle!",
      frase: {texto:"Quanto costa la banana?", partes:["Quanto costa", "la banana?"]},
      respuesta: "Un pesciolino!",
      cuento: {
        titulo: "Un pesciolino",
        paginas: [
          "Il cagnolino vendeva *banane* gialle.",
          "«Quanto costa la banana?» chiede {N}. «Un pesciolino!»",
          "{N} paga con un pesciolino, e la banana fa un salto!",
          "Che buona la banana! Evviva!"
        ]
      }
    },
    O: {
      palabra: {texto:"l'arancia", silabas:["la", "ran", "cia"]},
      intro: "Qui ci sono le arance per fare la spremuta.",
      frase: {texto:"Due arance, per favore.", partes:["Due arance,", "per favore."]},
      respuesta: "Una, due! Come sono succose!",
      cuento: {
        titulo: "La spremuta d'arancia",
        paginas: [
          "La gattina aveva *arance* rotonde e succose.",
          "«Due arance, per favore» dice {N}.",
          "La gattina le spreme: un bicchiere pieno di succo!",
          "{N} beve la spremuta. Mmm, che fresca!"
        ]
      }
    },
    Z: {
      palabra: {texto:"la carota", silabas:["la", "ca", "ro", "ta"]},
      intro: "Il coniglio adora le carote.",
      frase: {texto:"La carota è arancione.", partes:["La carota", "è arancione."]},
      respuesta: "Ed è lunga, lunga!",
      cuento: {
        titulo: "Il coniglio e la carota",
        paginas: [
          "Il coniglio aveva una bancarella di *carote*.",
          "{N} vede una carota enorme. «La carota è arancione» dice.",
          "Il coniglio salta di gioia: è il suo cibo preferito!",
          "Mangiano carote insieme: crunch, crunch."
        ]
      }
    },
    F: {
      palabra: {texto:"la fragola", silabas:["la", "fra", "go", "la"]},
      intro: "Guarda queste fragole rosse.",
      frase: {texto:"La fragola è piccola.", partes:["La fragola", "è piccola."]},
      respuesta: "Piccola e buonissima!",
      cuento: {
        titulo: "Le fragole piccole",
        paginas: [
          "In una cassettina c'erano *fragole* rosse.",
          "«La fragola è piccola!» dice {N} con stupore.",
          "{N} ne assaggia una: che dolce!",
          "Piccola, ma buonissima. Grazie!"
        ]
      }
    },
    S: {
      palabra: {texto:"l'anguria", silabas:["lan", "gu", "ria"]},
      intro: "Oh! Hai visto quell'anguria?",
      frase: {texto:"L'anguria è grande!", partes:["L'anguria", "è grande!"]},
      respuesta: "Sì, enorme! Pesa tanto!",
      cuento: {
        titulo: "L'anguria gigante",
        paginas: [
          "Al mercato c'era *un'anguria* gigante!",
          "«L'anguria è grande!» dice {N}.",
          "Oh! L'anguria scappa e rotola via… corriamo!",
          "Finalmente la prendono. Che anguria grande!"
        ]
      }
    },
    B: {
      palabra: {texto:"la bilancia", silabas:["la", "bi", "lan", "cia"]},
      intro: "Questa è la bilancia. Serve a pesare la frutta.",
      frase: {texto:"Quanto pesa?", partes:["Quanto", "pesa?"]},
      respuesta: "Pesa un chilo!",
      cuento: {
        titulo: "La bilancia",
        paginas: [
          "Il cane del mercato aveva *una bilancia* rossa.",
          "{N} mette una banana. «Quanto pesa?» Pochino!",
          "Poi mettono l'anguria… la bilancia fa un salto!",
          "«Pesa tantissimo!» ride {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "Sono cinque pesciolini!",
    frase: {texto:"Ecco qua! Grazie!", partes:["Ecco qua!", "Grazie!"]},
    despedida: "Buona spesa!",
    chau: "Ciao, mercato!",
    lograste: "Ce l'hai fatta! Hai fatto tutta la spesa!",
    todos: "Hai tutti i timbri! Cerca la porta verde: andiamo a pagare alla cassa!",
    ppFinal: "Prendi tutti i timbri e poi andiamo a pagare alla cassa!",
    otraVez: "Un altro giorno di mercato! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  microjuego: {
    cortar: "Adesso tagliamo la frutta! Passaci sopra il dito.", cortadas: "Hai tagliato {n} frutti!",
    titulo: "Riempi il cestino!",
    intro: "Ascolta che frutta voglio, e quanta. Toccala per metterla nel cestino!",
    fin: "Hai messo {n} frutti nel cestino!",
    pon: (n,g) => n==='uno' ? `Metti ${g.uno} nel cestino.` : `Metti ${n} ${g.plural} nel cestino.`,
    son: (n,g) => n==='uno' ? `${may(g.uno)}!` : `${may(n)} ${g.plural}!`,
    esa: g => `Non quella! Cerca ${g.texto}.`,
    ingredientes: [
      {texto:"la mela", uno:"una mela", plural:"mele"},
      {texto:"la banana", uno:"una banana", plural:"banane"},
      {texto:"l'arancia", uno:"un'arancia", plural:"arance"},
      {texto:"la fragola", uno:"una fragola", plural:"fragole"},
      {texto:"la pera", uno:"una pera", plural:"pere"},
      {texto:"il limone", uno:"un limone", plural:"limoni"}
    ]
  },
  palabrasExtra: [
    {texto:"la pera", silabas:["la", "pe", "ra"]},
    {texto:"il limone", silabas:["il", "li", "mo", "ne"]},
    {texto:"il cestino", silabas:["il", "ce", "sti", "no"]},
    {texto:"la borsa", silabas:["la", "bor", "sa"]}
  ],
  frasesExtra: [
    {texto:"Quanto costa?", partes:["Quanto", "costa?"]},
    {texto:"È grande!", partes:["È grande!"]},
    {texto:"È piccola.", partes:["È piccola."]},
    {texto:"Una borsa, per favore.", partes:["Una borsa,", "per favore."]},
    {texto:"Che buona!", partes:["Che buona!"]}
  ],
  preguntas: [
    {p:"Quale frutto è lungo e giallo?", r:"La banana!"},
    {p:"Con quale frutto facciamo la spremuta?", r:"Con l'arancia!"},
    {p:"Quale frutto è grande, grande?", r:"L'anguria!"},
    {p:"Che cosa piace mangiare al coniglio?", r:"La carota!"},
    {p:"Quale frutto è rosso e piccolo?", r:"La fragola!"},
    {p:"Con che cosa pesiamo la frutta?", r:"Con la bilancia!"},
    {p:"Quale frutto è rosso e rotondo?", r:"La mela!"},
    {p:"Quale frutto è giallo e aspro?", r:"Il limone!"},
    {p:"Dove mettiamo la frutta?", r:"Nel cestino!"},
    {p:"Quale frutto è verde e ha la forma di una goccia?", r:"La pera!"}
  ],
  objetos: {"#":"il muro", p:"la pianta", c:"la cassetta della frutta", "~":"la porta"}
});
})();
