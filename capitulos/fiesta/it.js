/* =========================================================
   CAPÍTULO 10 · LA FIESTA — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('fiesta', 'it', {
  titulo: "La festa",
  lugar: {texto:"la festa", silabas:["la", "fe", "sta"]},
  bienvenida: "Oggi è il tuo compleanno!",
  niveles: [{nombre:"L'ingresso", numTexto:"zero"}, {nombre:"Il salone", numTexto:"uno"}, {nombre:"Il giardino", numTexto:"due"}],
  numeros: ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci"],
  meses: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
  estaciones: {
    I: {
      palabra: {texto:"l'invito", silabas:["lin", "vi", "to"]},
      intro: "Oggi è il tuo compleanno! Bisogna invitare gli amici.",
      frase: {texto:"Vieni alla mia festa?", partes:["Vieni", "alla mia festa?"]},
      respuesta: "Sì! Grazie dell'invito!",
      cuento: {
        titulo: "Gli inviti",
        paginas: [
          "{N} prepara *un invito* per ogni amico.",
          "«Vieni alla mia festa?» chiede {N} alla coniglietta.",
          "«Sì! Grazie dell'invito!» salta la coniglietta.",
          "Verranno tutti gli amici! Evviva!"
        ]
      }
    },
    O: {
      palabra: {texto:"il palloncino", silabas:["il", "pal", "lon", "ci", "no"]},
      intro: "Bisogna gonfiare i palloncini!",
      frase: {texto:"Gonfio il palloncino!", partes:["Gonfio", "il palloncino!"]},
      respuesta: "Fuuu… più grande, più grande!",
      cuento: {
        titulo: "Il palloncino gigante",
        paginas: [
          "Il cagnolino porta *palloncini* colorati.",
          "{N} soffia: fuuu, fuuu!",
          "Il palloncino cresce, cresce… e scoppia! Bum!",
          "Che risate! E {N} ne gonfia un altro, più piccolo."
        ]
      }
    },
    Z: {
      palabra: {texto:"il cappellino", silabas:["il", "cap", "pel", "li", "no"]},
      intro: "Per la festa, un cappellino!",
      frase: {texto:"Metto il cappellino!", partes:["Metto", "il cappellino!"]},
      respuesta: "Ti sta benissimo!",
      cuento: {
        titulo: "Il cappellino della festa",
        paginas: [
          "La gattina aveva *un cappellino* di compleanno.",
          "Il cappellino vola per aria… e cade sulla testa di {N}!",
          "«Ti sta benissimo!» applaude la gattina.",
          "E ballano con i cappellini in testa!"
        ]
      }
    },
    R: {
      palabra: {texto:"il regalo", silabas:["il", "re", "ga", "lo"]},
      intro: "L'orsetto ti ha portato un regalo!",
      frase: {texto:"Grazie per il regalo!", partes:["Grazie", "per il regalo!"]},
      respuesta: "Prego! Aprilo!",
      cuento: {
        titulo: "La sorpresa",
        paginas: [
          "L'orsetto arriva con *un regalo* blu.",
          "«Grazie per il regalo!» dice {N}.",
          "{N} lo apre… è un pallone nuovo!",
          "«Mi piace tantissimo!» E {N} abbraccia l'orsetto."
        ]
      }
    },
    K: {
      palabra: {texto:"il calendario", silabas:["il", "ca", "len", "da", "rio"]},
      intro: "Quand'è il tuo compleanno? Guardiamo il calendario!",
      contar: "Diciamo i mesi dell'anno! Ripeti con me.",
      frase: {texto:"Quand'è il tuo compleanno?", partes:["Quand'è", "il tuo compleanno?"]},
      respuesta: "A marzo! E il tuo?",
      cuento: {
        titulo: "I dodici mesi",
        paginas: [
          "Il gattino grigio guardava *il calendario*: ci sono dodici mesi!",
          "«Quand'è il tuo compleanno?» chiede a {N}.",
          "Gennaio, febbraio, marzo… contano tutti i mesi!",
          "Ogni anno c'è un compleanno! Che fortuna!"
        ]
      }
    },
    E: {
      palabra: {texto:"la candelina", silabas:["la", "can", "de", "li", "na"]},
      intro: "Quante candeline ci sono sulla torta?",
      frase: {texto:"Quanti anni hai?", partes:["Quanti anni", "hai?"]},
      respuesta: "Ne ho cinque! Uno, due, tre, quattro, cinque.",
      cuento: {
        titulo: "Le candeline",
        paginas: [
          "Il cane porta *candeline* colorate.",
          "«Quanti anni hai?» chiede {N}. Il cane alza le zampe.",
          "«Quattro candeline! Uno, due, tre, quattro» conta {N}.",
          "E ballano felici!"
        ]
      }
    },
    T: {
      palabra: {texto:"la torta", silabas:["la", "tor", "ta"]},
      intro: "Ecco la torta di compleanno!",
      frase: {texto:"Che buona la torta!", partes:["Che buona", "la torta!"]},
      respuesta: "È al cioccolato e fragola!",
      cuento: {
        titulo: "La torta",
        paginas: [
          "L'orso porta *una torta* enorme.",
          "«Oh, che torta!» dice {N}.",
          "{N} chiude gli occhi ed esprime un desiderio…",
          "E mangiano la torta tutti insieme!"
        ]
      }
    }
  },
  final: {
    pregunta: "Sorpresa! Sono venuti tutti i tuoi amici!",
    frase: {texto:"Grazie, amici!", partes:["Grazie,", "amici!"]},
    cancion: ["Tanti auguri a te!", "Tanti auguri a te!", "Tanti auguri a {N}!", "Tanti auguri a te!"],
    despedida: "Buon compleanno!",
    chau: "Hip, hip, urrà!",
    lograste: "Ce l'hai fatta! Che bella festa!",
    todos: "Hai tutti i timbri! Cerca la porta verde: c'è una sorpresa!",
    ppFinal: "Prendi tutti i timbri e poi cerchiamo la sorpresa!",
    otraVez: "Un'altra festa! Prendi di nuovo i timbri.",
    otraVezB: "Un'altra festa"
  },
  microjuego: {
    titulo: "Quante candeline?",
    intro: "Un amico compie gli anni. Ascolta quanti e metti le candeline.",
    fin: "Hai soffiato {n} candeline!",
    pon: n => `${may(n)} anni! Metti ${n} candeline.`,
    vela: "la candelina",
    soplar: "Adesso, soffia!",
    soplarB: "Soffia!",
    feliz: "Buon compleanno!"
  },
  palabrasExtra: [
    {texto:"la pignatta", silabas:["la", "pi", "gnat", "ta"]},
    {texto:"la caramella", silabas:["la", "ca", "ra", "mel", "la"]},
    {texto:"il succo", silabas:["il", "suc", "co"]}
  ],
  frasesExtra: [
    {texto:"Buon compleanno!", partes:["Buon", "compleanno!"]},
    {texto:"Esprimi un desiderio!", partes:["Esprimi", "un desiderio!"]},
    {texto:"Quanti anni compi?", partes:["Quanti anni", "compi?"]},
    {texto:"Benvenuti alla mia festa!", partes:["Benvenuti", "alla mia festa!"]},
    {texto:"Soffiamo le candeline!", partes:["Soffiamo", "le candeline!"]}
  ],
  preguntas: [
    {p:"Che cosa ha un fiocco e una sorpresa dentro?", r:"Il regalo!"},
    {p:"Che cosa mangiamo al compleanno?", r:"La torta!"},
    {p:"Che cosa gonfiamo per la festa?", r:"I palloncini!"},
    {p:"Che cosa soffiamo sulla torta?", r:"Le candeline!"},
    {p:"Che cosa ci mettiamo in testa?", r:"Il cappellino!"},
    {p:"Che cosa diamo agli amici perché vengano?", r:"L'invito!"},
    {p:"Dove sono i mesi?", r:"Sul calendario!"},
    {p:"Che cosa rompiamo per far cadere le caramelle?", r:"La pignatta!"},
    {p:"Che cosa cade dalla pignatta?", r:"Le caramelle!"},
    {p:"Dove beviamo il succo?", r:"Nel bicchiere!"}
  ],
  objetos: {"#":"il muro", o:"i palloncini", m:"il tavolo", f:"i fiori", r:"l'albero", s:"il divano", "~":"la porta"}
});
})();
