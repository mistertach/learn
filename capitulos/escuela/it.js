/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('escuela', 'it', {
  titulo: "La scuola",
  lugar: {texto:"la scuola", silabas:["la", "scuo", "la"]},
  bienvenida: "Eccoci a scuola!",
  niveles: [{nombre:"L'ingresso", numTexto:"zero"}, {nombre:"L'aula", numTexto:"uno"}, {nombre:"Il secondo piano", numTexto:"due"}],
  estaciones: {
    M: {
      palabra: {texto:"lo zaino", silabas:["lo", "zai", "no"]},
      intro: "Benvenuti! Sono la maestra. Appendi lo zaino.",
      frase: {texto:"Buongiorno, maestra!", partes:["Buongiorno,", "maestra!"]},
      respuesta: "Buongiorno! Che bello vederti!",
      cuento: {
        titulo: "Il primo giorno",
        paginas: [
          "*Lo zaino* di {N} era pronto per la scuola.",
          "«Buongiorno, maestra!» dice {N}. «Buongiorno! Che bello vederti!»",
          "{N} apre lo zaino: un libro, una matita… tutto pronto!",
          "Comincia la scuola! Evviva!"
        ]
      }
    },
    Z: {
      palabra: {texto:"la matita", silabas:["la", "ma", "ti", "ta"]},
      intro: "Oh! Dov'è la tua matita?",
      frase: {texto:"Posso usare la tua matita?", partes:["Posso usare", "la tua matita?"]},
      respuesta: "Certo! Tieni!",
      cuento: {
        titulo: "La matita prestata",
        paginas: [
          "La gattina aveva *una matita* gialla.",
          "{N} non trovava più la sua matita… che pasticcio!",
          "«Posso usare la tua matita?» «Certo! Tieni!»",
          "{N} disegna una stella enorme. «Grazie!»"
        ]
      }
    },
    B: {
      palabra: {texto:"il libro", silabas:["il", "li", "bro"]},
      intro: "Questo è l'angolo dei libri.",
      frase: {texto:"Posso leggere questo libro?", partes:["Posso leggere", "questo libro?"]},
      respuesta: "Sì! È una storia di pirati.",
      cuento: {
        titulo: "La storia dei pirati",
        paginas: [
          "La coniglietta aveva *un libro* pieno di disegni.",
          "«Posso leggere questo libro?» chiede {N}.",
          "Era una storia di pirati con un tesoro nascosto!",
          "«Ancora, ancora!» chiede {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"le forbici", silabas:["le", "for", "bi", "ci"]},
      intro: "Oggi ritagliamo le forme.",
      frase: {texto:"Ritaglio un cerchio.", partes:["Ritaglio", "un cerchio."]},
      respuesta: "Com'è rotondo!",
      cuento: {
        titulo: "Cerchi di carta",
        paginas: [
          "Il cagnolino porta *le forbici* e un foglio rosso.",
          "{N} ritaglia piano piano: un cerchio!",
          "E un altro, e un altro ancora! Cerchi dappertutto!",
          "Li attaccano al muro. Che belli!"
        ]
      }
    },
    C: {
      palabra: {texto:"i pastelli", silabas:["i", "pa", "stel", "li"]},
      intro: "Disegniamo con i pastelli!",
      frase: {texto:"Disegno un triangolo.", partes:["Disegno", "un triangolo."]},
      respuesta: "Un triangolo verde! Che bello!",
      cuento: {
        titulo: "Il disegno magico",
        paginas: [
          "Il gattino grigio aveva una scatola di *pastelli*.",
          "{N} disegna un triangolo verde.",
          "Poi un quadrato e una stella… che bel disegno!",
          "E tutti ballano intorno al disegno!"
        ]
      }
    },
    K: {
      palabra: {texto:"il calendario", silabas:["il", "ca", "len", "da", "rio"]},
      intro: "Guarda il calendario. Che giorno è oggi?",
      frase: {texto:"Oggi è lunedì.", partes:["Oggi", "è lunedì."]},
      respuesta: "E domani è martedì!",
      cuento: {
        titulo: "Che giorno è oggi?",
        paginas: [
          "Sul muro c'era *un calendario* con tanti giorni.",
          "{N} lo guarda: «Oggi è lunedì.»",
          "«E il sabato niente scuola!» applaude l'orsetta.",
          "Lunedì, martedì, mercoledì! Bisogna imparare tutti i giorni!"
        ]
      }
    },
    N: {
      palabra: {texto:"la campanella", silabas:["la", "cam", "pa", "nel", "la"]},
      intro: "Driin! Suona la campanella.",
      frase: {texto:"Posso andare all'intervallo?", partes:["Posso andare", "all'intervallo?"]},
      respuesta: "Sì! Si gioca!",
      cuento: {
        titulo: "Intervallo!",
        paginas: [
          "Driin! È suonata *la campanella*.",
          "«Posso andare all'intervallo?» chiede {N}.",
          "{N} corre dietro al pallone.",
          "Che bello l'intervallo!"
        ]
      }
    }
  },
  final: {
    pregunta: "Cantiamo i giorni della settimana?",
    frase: {texto:"Sì! Cantiamo!", partes:["Sì!", "Cantiamo!"]},
    dias: ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"],
    despedida: "A domani!",
    chau: "Ciao, scuola!",
    lograste: "Ce l'hai fatta! Hai imparato tantissime cose a scuola!",
    todos: "Hai tutti i timbri! Cerca la porta verde: cantiamo con la maestra!",
    ppFinal: "Prendi tutti i timbri e poi cantiamo con la maestra!",
    otraVez: "Un altro giorno di scuola! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  microjuego: {
    maneja: "Adesso guida il treno! Tieni premuto per andare veloce.", vamos: "Andiamo!", bocina: "Ciuf, ciuf!", llegamos: "Siamo arrivati! Bravissimi!",
    titulo: "Il treno delle forme!",
    intro: "Ascolta quale forma va sul treno e toccala.",
    fin: "Hai caricato {n} forme sul treno!",
    chu: "Ciuf, ciuf! Il treno parte!",
    ingredientes: [
      {texto:"il cerchio", pon:"Metti il cerchio sul treno.", est:"La stazione del cerchio!"},
      {texto:"il quadrato", pon:"Metti il quadrato sul treno.", est:"La stazione del quadrato!"},
      {texto:"il triangolo", pon:"Metti il triangolo sul treno.", est:"La stazione del triangolo!"},
      {texto:"la stella", pon:"Metti la stella sul treno.", est:"La stazione della stella!"},
      {texto:"il cuore", pon:"Metti il cuore sul treno.", est:"La stazione del cuore!"}
    ]
  },
  palabrasExtra: [
    {texto:"il cerchio", silabas:["il", "cer", "chio"]},
    {texto:"il quadrato", silabas:["il", "qua", "dra", "to"]},
    {texto:"il triangolo", silabas:["il", "tri", "an", "go", "lo"]},
    {texto:"la stella", silabas:["la", "stel", "la"]},
    {texto:"la lavagna", silabas:["la", "la", "va", "gna"]}
  ],
  frasesExtra: [
    {texto:"Alzo la mano.", partes:["Alzo", "la mano."]},
    {texto:"Posso andare in bagno?", partes:["Posso andare", "in bagno?"]},
    {texto:"Posso bere un po' d'acqua?", partes:["Posso bere", "un po' d'acqua?"]},
    {texto:"Mi presti la gomma?", partes:["Mi presti", "la gomma?"]},
    {texto:"A domani, maestra!", partes:["A domani,", "maestra!"]}
  ],
  preguntas: [
    {p:"Con che cosa scriviamo?", r:"Con la matita!"},
    {p:"Con che cosa ritagliamo?", r:"Con le forbici!"},
    {p:"Che cosa leggiamo?", r:"Un libro!"},
    {p:"Dove mettiamo le cose per la scuola?", r:"Nello zaino!"},
    {p:"Con che cosa coloriamo?", r:"Con i pastelli!"},
    {p:"Dove guardiamo i giorni?", r:"Sul calendario!"},
    {p:"Che cosa suona per l'intervallo?", r:"La campanella!"},
    {p:"Quale forma è rotonda?", r:"Il cerchio!"},
    {p:"Quale forma ha tre punte?", r:"Il triangolo!"},
    {p:"Quale forma ha quattro lati uguali?", r:"Il quadrato!"}
  ],
  objetos: {"#":"il muro", q:"il banco di scuola", p:"la pianta", b:"la panchina", "~":"la porta"}
});
