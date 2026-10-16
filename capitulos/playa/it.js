/* =========================================================
   CAPÍTULO 12 · LA PLAYA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   ========================================================= */
registrarTextos('playa', 'it', {
  charlas: [
    {titulo:"Parlare con il bagnino", chau:"Goditi il mare! Stai attento!", pasos:[
      {di:"Ciao! Oggi vai a nuotare?", op:[{t:"Sì, voglio nuotare!", r:"Bene! L'acqua è calma."}, {t:"Sì, con i miei occhialini.", r:"Molto bene! Così vedrai i pesci."}]},
      {op:[{t:"L'acqua è fredda?", r:"Un po' fredda, ma poi ci si abitua."}, {t:"Ci sono pesci?", r:"Sì, tantissimi pesci colorati!"}]},
      {di:"Vuoi la crema solare?", op:[{t:"Sì, per favore.", r:"Tieni. Mettila sulle braccia e sul viso."}, {t:"Sì, non voglio scottarmi.", r:"Ben pensato!"}]},
      {op:[{t:"Dove lascio le mie cose?", r:"Sotto l'ombrellone."}, {t:"Posso entrare adesso?", r:"Sì! Ma sempre vicino a me."}]}]},
    {titulo:"Parlare con il costruttore di castelli", chau:"Che bel castello! Ciao!", pasos:[
      {di:"Guarda il mio castello di sabbia! Vuoi aiutarmi?", op:[{t:"Sì, ti aiuto!", r:"Bene! Mi serve altra sabbia."}, {t:"Che bel castello!", r:"Grazie! L'ho fatto con il secchiello."}]},
      {op:[{t:"Che cosa usi per farlo?", r:"Un secchiello e una paletta."}, {t:"Mettiamo una torre?", r:"Sì! La torre più alta."}]},
      {di:"Dove mettiamo una bandiera?", op:[{t:"Sulla torre più alta.", r:"Buona idea! Lì sta benissimo."}, {t:"In cima al castello.", r:"Sì! Così la vedono tutti."}]},
      {op:[{t:"E se arriva un'onda?", r:"Non fa niente! Ne facciamo un altro."}, {t:"Posso fare una strada?", r:"Certo! Scava con la paletta."}]}]},
    {titulo:"Parlare con il pesciolino", chau:"Glu, glu! A presto!", pasos:[
      {di:"Ciao! Benvenuto in fondo al mare!", op:[{t:"Ciao, pesciolino!", r:"Glu, glu! Sono così felice!"}, {t:"Che bello il mare!", r:"È casa mia!"}]},
      {op:[{t:"Come ti chiami?", r:"Mi chiamo Bolla."}, {t:"Con chi vivi?", r:"Con la mia famiglia di pesci."}]},
      {di:"Vuoi nuotare con me?", op:[{t:"Sì, andiamo!", r:"Seguimi! Glu, glu."}, {t:"Sì, ma piano.", r:"Certo! Piano piano."}]},
      {op:[{t:"Che cosa mangi?", r:"Cibo piccolissimo e alghe."}, {t:"Dove vive il granchio?", r:"Là, tra gli scogli."}]}]},
    {titulo:"Parlare con la tartaruga", chau:"Che bella passeggiata! Ciao!", pasos:[
      {di:"Ciao, piccolo. Che cosa fai da queste parti?", op:[{t:"Sto nuotando.", r:"Come nuoti bene!"}, {t:"Sto guardando i pesci.", r:"Ce ne sono tanti da vedere!"}]},
      {op:[{t:"Quanti anni hai?", r:"Ho cento anni!"}, {t:"Perché vai piano?", r:"Perché nel mare non c'è fretta."}]},
      {di:"Vuoi salire sul mio guscio?", op:[{t:"Sì, voglio!", r:"Tieniti forte!"}, {t:"Sì, ma con attenzione.", r:"Piano piano, come sempre."}]},
      {op:[{t:"Dove andiamo?", r:"A vedere il tesoro del mare."}, {t:"Dov'è la tua casa?", r:"Dovunque io nuoti!"}]}]}
  ],
  titulo: "La spiaggia",
  lugar: {texto:"la spiaggia", silabas:["la","spiag","gia"]},
  bienvenida: "Siamo arrivati in spiaggia!",
  niveles: [{nombre:"La spiaggia", numTexto:"zero"}, {nombre:"Sotto il mare", numTexto:"uno"}],
  estaciones: {
    S: {
      palabra: {texto:"l'ombrellone", silabas:["l'om","brel","lo","ne"]},
      intro: "Siamo in spiaggia! Questo è il nostro ombrellone.",
      frase: {texto:"Che bella giornata di mare!", partes:["Che bella giornata","di mare!"]},
      respuesta: "Sì, c'è tanto sole!",
      cuento: {
        titulo: "L'ombrellone rosso",
        paginas: [
          "{N} è arrivato in spiaggia con l'*ombrellone* rosso.",
          "«Che bella giornata di mare!» disse {N}.",
          "Il sole splendeva forte, ma sotto l'ombrellone c'era un'ombra fresca.",
          "Tutti si sono seduti all'ombra a mangiare un'anguria."
        ]
      }
    },
    A: {
      palabra: {texto:"la sabbia", silabas:["la","sab","bia"]},
      intro: "Questa è la sabbia. È calda!",
      frase: {texto:"La sabbia è calda.", partes:["La sabbia","è calda."]},
      respuesta: "Attento! Metti le ciabatte!",
      cuento: {
        titulo: "Il castello di sabbia",
        paginas: [
          "{N} e il cane hanno riempito il secchiello di *sabbia*.",
          "«La sabbia è calda» disse {N}.",
          "Hanno costruito un castello con quattro torri.",
          "E un'onda piccola ha bagnato loro i piedi!"
        ]
      }
    },
    O: {
      palabra: {texto:"l'onda", silabas:["l'on","da"]},
      intro: "Guarda il mare. Arriva un'onda!",
      frase: {texto:"Guarda, un'onda grande!", partes:["Guarda,","un'onda grande!"]},
      respuesta: "Ops! Ci siamo quasi bagnati!",
      cuento: {
        titulo: "L'onda grande",
        paginas: [
          "Una piccola *onda* è arrivata a riva.",
          "«Guarda, un'onda grande!» gridò {N}.",
          "Splash! L'onda ha bagnato i piedi di {N}.",
          "{N} ha riso e ha saltato di nuovo l'onda."
        ]
      }
    },
    N: {
      palabra: {texto:"gli occhialini", silabas:["gli","oc","chia","li","ni"]},
      intro: "Questi sono gli occhialini. Con loro vediamo sott'acqua!",
      frase: {texto:"Mi metto gli occhialini!", partes:["Mi metto","gli occhialini!"]},
      respuesta: "Ecco! Andiamo a vedere cosa c'è sott'acqua!",
      cuento: {
        titulo: "Gli occhialini nuovi",
        paginas: [
          "{N} si è messo gli *occhialini* e un costume blu.",
          "«Mi metto gli occhialini!» disse {N}.",
          "{N} ha preso un bel respiro e si è tuffato nel mare.",
          "Sott'acqua tutto era blu e luccicante!"
        ]
      }
    },
    F: {
      palabra: {texto:"il pesce", silabas:["il","pe","sce"]},
      intro: "Siamo sotto il mare! Guarda, un pesciolino!",
      frase: {texto:"Ciao, pesciolino!", partes:["Ciao,","pesciolino!"]},
      respuesta: "Glu, glu! Ciao!",
      cuento: {
        titulo: "Il pesce pagliaccio",
        paginas: [
          "Sotto il mare, {N} ha visto un *pesce* arancione con strisce bianche.",
          "«Ciao, pesciolino!» disse {N}.",
          "Il pesce ha nuotato in cerchio e ha fatto delle bolle.",
          "Glu, glu! Sono diventati amici per sempre."
        ]
      }
    },
    C: {
      palabra: {texto:"il granchio", silabas:["il","gran","chio"]},
      intro: "Guarda, un granchio rosso!",
      frase: {texto:"Il granchio cammina di lato.", partes:["Il granchio","cammina di lato."]},
      respuesta: "Attenzione alle chele!",
      cuento: {
        titulo: "Il granchio di lato",
        paginas: [
          "Tra gli scogli viveva un *granchio* rosso.",
          "«Il granchio cammina di lato» rise {N}.",
          "Il granchio ha alzato le chele: clac, clac!",
          "{N} ha detto ciao e il granchio si è nascosto."
        ]
      }
    },
    T: {
      palabra: {texto:"la tartaruga", silabas:["la","tar","ta","ru","ga"]},
      intro: "Guarda, una tartaruga marina! Nuota piano piano.",
      frase: {texto:"Nuotiamo insieme!", partes:["Nuotiamo","insieme!"]},
      respuesta: "Piano piano!",
      cuento: {
        titulo: "La tartaruga marina",
        paginas: [
          "Una *tartaruga* molto vecchia nuotava piano piano.",
          "«Nuotiamo insieme!» disse {N}.",
          "Hanno nuotato tra le alghe e i coralli.",
          "Alla fine hanno trovato uno scrigno del tesoro."
        ]
      }
    }
  },
  final: {
    pregunta: "Abbiamo trovato lo scrigno! Salutiamo gli amici del mare?",
    frase: {texto:"Che bello il mare!", partes:["Che bello","il mare!"]},
    // lo que dice cada animal del mar, en el orden de base.js: pez, cangrejo, tortuga, estrella de mar, pulpo
    sonidos: ["Glu, glu!","Clac, clac!","Piano piano!","Luccica, luccica!","Splash!"],
    despedida: "A presto, mare!",
    chau: "Ciao, amici del mare!",
    lograste: "Ce l'hai fatta! Hai nuotato con tutti gli animali del mare!",
    todos: "Hai tutti i timbri! Cerca la porta verde: il tesoro del mare ti aspetta!",
    ppFinal: "Raccogli tutti i timbri e poi andiamo a cercare il tesoro del mare!",
    otraVez: "Un'altra giornata di mare! Raccogli di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  // el microjuego: las criaturas en el orden de base.js (texto = el nombre, p = la pregunta)
  microjuego: {
    titulo: "Sotto il mare!",
    intro: "Ascolta e tocca la creatura del mare.",
    fin: "Hai trovato {n} creature!",
    alimentar: "Adesso dagli da mangiare! Tocca l'acqua.",
    ingredientes: [{texto:"il pesce", p:"Dov'è il pesce?"}, {texto:"il granchio", p:"Dov'è il granchio?"}, {texto:"la tartaruga", p:"Dov'è la tartaruga?"}, {texto:"la stella marina", p:"Dov'è la stella marina?"}, {texto:"la conchiglia", p:"Dov'è la conchiglia?"}, {texto:"il polpo", p:"Dov'è il polpo?"}]
  },
  palabrasExtra: [
    {texto:"la conchiglia", silabas:["la","con","chi","glia"]},
    {texto:"la stella marina", silabas:["la","stel","la","ma","ri","na"]},
    {texto:"il polpo", silabas:["il","pol","po"]},
    {texto:"la barca", silabas:["la","bar","ca"]},
    {texto:"il sole", silabas:["il","so","le"]}
  ],
  frasesExtra: [
    {texto:"Quanto sole!", partes:["Quanto sole!"]},
    {texto:"Splash! Mi sono bagnato!", partes:["Splash!","Mi sono bagnato!"]},
    {texto:"A nuotare!", partes:["A nuotare!"]},
    {texto:"Che lenta!", partes:["Che lenta!"]},
    {texto:"Un tesoro!", partes:["Un tesoro!"]}
  ],
  preguntas: [
    {p:"Chi nuota con le pinne?", r:"Il pesce!"},
    {p:"Chi cammina di lato?", r:"Il granchio!"},
    {p:"Chi ha un guscio?", r:"La tartaruga!"},
    {p:"Che cosa ci fa ombra?", r:"L'ombrellone!"},
    {p:"Che cosa usiamo per vedere sott'acqua?", r:"Gli occhialini!"},
    {p:"Che cosa va e viene nel mare?", r:"L'onda!"},
    {p:"Con che cosa facciamo i castelli?", r:"Con la sabbia!"},
    {p:"Chi ha otto braccia?", r:"Il polpo!"},
    {p:"Che cosa brilla nel cielo?", r:"Il sole!"},
    {p:"Che cosa custodisce un tesoro?", r:"Lo scrigno!"}
  ],
  objetos: {"#":"il mare","y":"la palma","n":"l'ombrellone","i":"lo scoglio","v":"l'alga","w":"il corallo","~":"la porta"}
});
