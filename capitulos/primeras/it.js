/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('primeras', 'it', {
  charlas: [
    {titulo:"Parlare con la coniglietta", chau:"Piacere di conoscerti! A presto!", pasos:[
      {di:"Ciao! Come ti chiami?", op:[{t:"Mi chiamo {N}.", r:"Che bel nome!"}, {t:"Ciao! Sono {N}.", r:"Piacere, {N}!"}]},
      {op:[{t:"Come stai?", r:"Molto bene, grazie!"}, {t:"E tu, come ti chiami?", r:"Mi chiamo Batuffolo."}]},
      {di:"Ti piace giocare?", op:[{t:"Sì, mi piace giocare!", r:"Anche a me! Giocare è la cosa più bella."}, {t:"Sì, tanto!", r:"Anche a me! Lo adoro."}]},
      {op:[{t:"Vuoi essere mia amica?", r:"Sì! Adesso siamo amiche!"}, {t:"A che cosa ti piace giocare?", r:"Mi piace giocare a nascondino."}]}]},
    {titulo:"Parlare con la gatta", chau:"Grazie, amico! Ciao, ciao!", pasos:[
      {di:"Guarda, ho un regalo per te!", op:[{t:"Grazie!", r:"Prego!"}, {t:"Grazie mille!", r:"Prego, amico!"}]},
      {op:[{t:"Che cos'è?", r:"È una stellina!"}, {t:"È per me?", r:"Sì, è per te!"}]},
      {di:"Vuoi dividerla con me?", op:[{t:"Sì, dividiamola!", r:"Che bello! Dividere è bellissimo."}, {t:"Sì, per favore!", r:"Tieni, metà per te e metà per me."}]},
      {op:[{t:"Ti piace?", r:"Mi piace tantissimo!"}, {t:"Posso farti un abbraccio?", r:"Sì, un abbraccio grande!"}]}]},
    {titulo:"Parlare con l'orso", chau:"Che rinfrescata! A presto!", pasos:[
      {di:"Ho sete. Vuoi dell'acqua?", op:[{t:"Sì, acqua, per favore!", r:"Tieni. Salute!"}, {t:"Sì, anch'io ho sete!", r:"Ecco un bicchiere per te."}]},
      {op:[{t:"L'acqua è fredda?", r:"Sì, ben fresca!"}, {t:"Da dove viene l'acqua?", r:"Dal rubinetto e dalla pioggia!"}]},
      {di:"Ne vuoi ancora?", op:[{t:"Sì, ancora, per favore!", r:"Certo! Ecco ancora un po'."}, {t:"No, grazie. Non ho più sete.", r:"Va bene. Grazie di aver bevuto con me."}]},
      {op:[{t:"Ti piace l'acqua?", r:"Sì, è la mia preferita!"}, {t:"Giochiamo?", r:"Sì! Giochiamo!"}]}]},
    {titulo:"Parlare alla porta", chau:"Ciao, amico! Ci vediamo nell'avventura!", pasos:[
      {di:"Adesso conosci tante parole! Andiamo all'avventura?", op:[{t:"Sì, andiamo!", r:"Evviva! Vieni con me."}, {t:"Sì, andiamo!", r:"Benissimo! Si parte."}]},
      {op:[{t:"Dove andiamo?", r:"In tanti posti nuovi!"}, {t:"Chi viene con noi?", r:"Tutti i tuoi amici!"}]},
      {di:"Sei felice?", op:[{t:"Sì, sono felicissimo!", r:"Anch'io! Che gioia."}, {t:"Sì, adoro le avventure!", r:"Anch'io! Le avventure sono divertenti."}]},
      {op:[{t:"Anche tu sei contenta?", r:"Sì, contentissima!"}, {t:"Possiamo andare adesso?", r:"Sì! Si parte."}]}]}
  ],
  titulo: "Ciao!",
  lugar: {texto:"la casetta", silabas:["la", "ca", "set", "ta"]},
  bienvenida: "Eccoci alla casetta sull'albero!",
  niveles: [{nombre:"Il giardino", numTexto:"zero"}, {nombre:"Il tronco", numTexto:"uno"}, {nombre:"La casetta", numTexto:"due"}],
  estaciones: {
    H: {
      palabra: {texto:"ciao", silabas:["ciao"]},
      intro: "Quando arriviamo, diciamo ciao.",
      frase: {texto:"Ciao! Come stai?", partes:["Ciao!", "Come stai?"]},
      respuesta: "Benissimo!",
      cuento: {
        titulo: "Ciao, amica!",
        paginas: [
          "La coniglietta dice *ciao* muovendo la mano.",
          "{N} la saluta: «Ciao! Come stai?»",
          "«Benissimo!» dice la coniglietta, e fa un salto.",
          "Adesso sono amici!"
        ]
      }
    },
    S: {
      palabra: {texto:"sì", silabas:["sì"]},
      intro: "Quando vogliamo qualcosa, diciamo sì.",
      frase: {texto:"Sì, per favore!", partes:["Sì,", "per favore!"]},
      respuesta: "Ecco qua!",
      cuento: {
        titulo: "Il biscotto",
        paginas: [
          "L'orsetto aveva un biscotto. «Lo vuoi?»",
          "«*Sì*, per favore!» dice {N}.",
          "Mmm, che buono!",
          "«Grazie, orsetto!»"
        ]
      }
    },
    N: {
      palabra: {texto:"no", silabas:["no"]},
      intro: "Quando non vogliamo qualcosa, diciamo no.",
      frase: {texto:"No, grazie.", partes:["No,", "grazie."]},
      respuesta: "Va bene!",
      cuento: {
        titulo: "La minestra",
        paginas: [
          "Il cagnolino porta la minestra calda.",
          "{N} non ha fame. «*No*, grazie.»",
          "«Va bene!» dice il cagnolino.",
          "Più tardi mangiano un gelato. Quello sì!"
        ]
      }
    },
    G: {
      palabra: {texto:"grazie", silabas:["gra", "zie"]},
      intro: "Quando ci danno qualcosa, diciamo grazie.",
      frase: {texto:"Grazie mille!", partes:["Grazie", "mille!"]},
      respuesta: "Prego!",
      cuento: {
        titulo: "Il fiore",
        paginas: [
          "La gattina aveva un cuore enorme.",
          "Regala un fiore a {N}.",
          "«*Grazie* mille!» dice {N}.",
          "«Prego!» Che bello dire grazie!"
        ]
      }
    },
    A: {
      palabra: {texto:"l'acqua", silabas:["lac", "qua"]},
      intro: "Quando abbiamo sete, chiediamo l'acqua.",
      frase: {texto:"Voglio l'acqua.", partes:["Voglio", "l'acqua."]},
      respuesta: "Tieni, ecco qua!",
      cuento: {
        titulo: "Che caldo!",
        paginas: [
          "Che caldo! {N} ha sete.",
          "«Voglio *l'acqua*» dice all'orso.",
          "Glu, glu, glu! Com'è fresca!",
          "«Grazie!» Niente più sete!"
        ]
      }
    },
    M: {
      palabra: {texto:"ancora", silabas:["an", "co", "ra"]},
      intro: "Quando vogliamo di nuovo, diciamo ancora.",
      frase: {texto:"Ancora, per favore!", partes:["Ancora,", "per favore!"]},
      respuesta: "Un altro!",
      cuento: {
        titulo: "Ancora palloni!",
        paginas: [
          "Il gattino lanciava palloni: uno!",
          "«*Ancora*, per favore!» applaude {N}. Due, tre!",
          "Ancora e ancora! Quante bolle!",
          "E ballano fino a stancarsi!"
        ]
      }
    },
    C: {
      palabra: {texto:"arrivederci", silabas:["ar", "ri", "ve", "der", "ci"]},
      intro: "Quando andiamo via, diciamo arrivederci.",
      frase: {texto:"Arrivederci! A domani!", partes:["Arrivederci!", "A domani!"]},
      respuesta: "Ciao, ciao!",
      cuento: {
        titulo: "A domani",
        paginas: [
          "Era già notte. È uscita la luna.",
          "«*Arrivederci*! A domani!» saluta {N}.",
          "Il cane va a dormire: zzz…",
          "Ciao, ciao! A domani!"
        ]
      }
    }
  },
  final: {
    pregunta: "Sai già tante parole! Andiamo all'avventura?",
    frase: {texto:"Sì! Andiamo!", partes:["Sì!", "Andiamo!"]},
    palabras: ["Ciao!", "Sì!", "No!", "Grazie!", "Acqua!", "Ancora!", "Arrivederci!"],
    despedida: "All'avventura!",
    chau: "Ciao, casetta!",
    lograste: "Ce l'hai fatta! Sai le tue prime parole!",
    todos: "Hai tutti i timbri! Cerca la porta verde: i tuoi amici ti aspettano!",
    ppFinal: "Prendi tutti i timbri e poi salutiamo gli amici!",
    otraVez: "Un altro giorno alla casetta! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  microjuego: {
    titulo: "Bolle colorate!",
    intro: "Ascolta il colore e scoppia quella bolla.",
    pide: c => `Scoppia una bolla di colore ${c}!`,
    esa: c => `Questo è il ${c}!`,
    libre: "Adesso scoppia tutte le bolle che vuoi!",
    fin: "Hai scoppiato {n} bolle!"
  },
  palabrasExtra: [
    {texto:"rosso", silabas:["ros", "so"]},
    {texto:"blu", silabas:["blu"]},
    {texto:"giallo", silabas:["gial", "lo"]},
    {texto:"verde", silabas:["ver", "de"]}
  ],
  frasesExtra: [
    {texto:"Come ti chiami?", partes:["Come", "ti chiami?"]},
    {texto:"Buongiorno!", partes:["Buongiorno!"]},
    {texto:"Buonanotte!", partes:["Buonanotte!"]},
    {texto:"Ti voglio bene!", partes:["Ti voglio bene!"]},
    {texto:"Ancora una volta!", partes:["Ancora", "una volta!"]}
  ],
  preguntas: [
    {p:"Che cosa diciamo quando arriviamo?", r:"Ciao!"},
    {p:"Che cosa diciamo quando andiamo via?", r:"Arrivederci!"},
    {p:"Quale dice sì?", r:"Questo!"},
    {p:"Quale dice no?", r:"Questo!"},
    {p:"Che cosa diciamo quando ci fanno un regalo?", r:"Grazie!"},
    {p:"Che cosa beviamo quando abbiamo sete?", r:"L'acqua!"},
    {p:"Che cosa diciamo quando vogliamo di nuovo?", r:"Ancora!"},
    {p:"Qual è il rosso?", r:"Questo!"},
    {p:"Qual è il blu?", r:"Questo!"},
    {p:"Qual è il giallo?", r:"Questo!"}
  ],
  objetos: {"#":"lo steccato", r:"l'albero", f:"i fiori", b:"la panchina", j:"i giocattoli", s:"il divano", "~":"la porta"}
});
