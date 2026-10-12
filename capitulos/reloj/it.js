/* =========================================================
   CAPÍTULO 3 · LA TORRE DEL RELOJ — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('reloj', 'it', {
  titulo: "La torre dell'orologio",
  lugar: {texto:"la torre dell'orologio", silabas:["la", "tor", "re", "del", "l'o", "ro", "lo", "gio"]},
  bienvenida: "Eccoci alla torre dell'orologio!",
  niveles: [{nombre:"Il laboratorio", numTexto:"zero"}, {nombre:"Gli ingranaggi", numTexto:"uno"}, {nombre:"In cima", numTexto:"due"}],
  numeros: ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici"],
  estaciones: {
    R: {
      palabra: {texto:"l'orologio", silabas:["l'o", "ro", "lo", "gio"]},
      intro: "Questo è il laboratorio dell'orologiaio. Ci sono orologi dappertutto!",
      contar: "Contiamo i numeri dell'orologio! Ripeti con me.",
      frase: {texto:"Che ore sono?", partes:["Che ore", "sono?"]},
      respuesta: "Impariamo a leggere l'orologio!",
      cuento: {
        titulo: "L'orologio dormiglione",
        paginas: [
          "Nel laboratorio dell'orologiaio c'è *un orologio* che non fa tic tac.",
          "«Sta dormendo!» dice l'orso orologiaio.",
          "{N} conta forte forte: uno, due, tre… fino a dodici!",
          "E l'orologio si sveglia: tic tac, tic tac!"
        ]
      }
    },
    A: {
      palabra: {texto:"la lancetta piccola", silabas:["la", "lan", "cet", "ta", "pic", "co", "la"]},
      intro: "Guarda questa lancetta cortina.",
      buscar: "Quale orologio ha la lancetta piccola rossa?",
      frase: {texto:"La lancetta piccola dice l'ora.", partes:["La lancetta piccola", "dice l'ora."]},
      respuesta: "Bravo! Dice l'ora.",
      cuento: {
        titulo: "La lancetta piccola",
        paginas: [
          "*La lancetta piccola* è bassina e cammina piano piano.",
          "Ci dice l'ora: l'una, le due, le tre…",
          "Un giorno vuole correre… e le gira la testa!",
          "«Piano piano va bene» le dice {N}."
        ]
      }
    },
    N: {
      palabra: {texto:"la lancetta grande", silabas:["la", "lan", "cet", "ta", "gran", "de"]},
      intro: "E questa lancetta è lunga lunga.",
      buscar: "Quale orologio ha la lancetta grande rossa?",
      frase: {texto:"La lancetta grande dice i minuti.", partes:["La lancetta grande", "dice i minuti."]},
      respuesta: "Sì! Dice i minuti.",
      cuento: {
        titulo: "La lancetta che corre",
        paginas: [
          "*La lancetta grande* è alta e corre tanto.",
          "Fa tutto il giro dell'orologio in un'ora.",
          "«Forza, lancetta grande!» grida {N}.",
          "Quando arriva in cima, sul dodici, dice: «In punto!»"
        ]
      }
    },
    H: {
      palabra: {texto:"in punto", silabas:["in", "pun", "to"]},
      intro: "Quando la lancetta grande guarda il dodici, è in punto.",
      buscar: "Quale orologio dice le tre in punto?",
      frase: {texto:"Sono le tre in punto.", partes:["Sono le tre", "in punto."]},
      respuesta: "Sì! Le tre in punto!",
      cuento: {
        titulo: "La merenda in punto",
        paginas: [
          "Quando la lancetta grande è sul dodici, è *in punto*.",
          "Sono le tre in punto: è l'ora della merenda!",
          "Il cane porta latte e biscotti.",
          "{N} dice: «Sono le tre in punto! Che buono!»"
        ]
      }
    },
    C: {
      palabra: {texto:"e un quarto", silabas:["e", "un", "quar", "to"]},
      intro: "Quando la lancetta grande guarda il tre, è e un quarto.",
      buscar: "Quale orologio dice le quattro e un quarto?",
      frase: {texto:"Sono le quattro e un quarto.", partes:["Sono le quattro", "e un quarto."]},
      respuesta: "Fantastico! Le quattro e un quarto.",
      cuento: {
        titulo: "Al parco",
        paginas: [
          "Quando la lancetta grande è sul tre, è *e un quarto*.",
          "Alle quattro e un quarto, {N} va al parco.",
          "Sull'altalena: su, giù, su, giù.",
          "«Sono le quattro e un quarto!» dice l'orso. Che bella giornata!"
        ]
      }
    },
    M: {
      palabra: {texto:"e mezza", silabas:["e", "mez", "za"]},
      intro: "Quando la lancetta grande guarda il sei, è e mezza.",
      buscar: "Quale orologio dice le cinque e mezza?",
      frase: {texto:"Sono le cinque e mezza.", partes:["Sono le cinque", "e mezza."]},
      respuesta: "Benissimo! Le cinque e mezza.",
      cuento: {
        titulo: "L'ora del bagnetto",
        paginas: [
          "Quando la lancetta grande è sul sei, è *e mezza*.",
          "Alle cinque e mezza, la coniglietta prepara il bagnetto.",
          "Bolle dappertutto!",
          "{N} dice: «Sono le cinque e mezza, è l'ora del bagnetto!»"
        ]
      }
    },
    Q: {
      palabra: {texto:"meno un quarto", silabas:["me", "no", "un", "quar", "to"]},
      intro: "Quando la lancetta grande guarda il nove, manca un quarto: è meno un quarto.",
      buscar: "Quale orologio dice le sette meno un quarto?",
      frase: {texto:"Sono le sette meno un quarto.", partes:["Sono le sette", "meno un quarto."]},
      respuesta: "Evviva! Le sette meno un quarto.",
      cuento: {
        titulo: "Quasi!",
        paginas: [
          "Quando la lancetta grande è sul nove, è *meno un quarto*.",
          "Manca un pochino alle sette: sono le sette meno un quarto.",
          "La gatta sbadiglia: aaah! È quasi l'ora di mangiare.",
          "«Sono le sette meno un quarto!» dice {N}. «Quasi!»"
        ]
      }
    }
  },
  final: {
    pregunta: "Che ore sono?",
    frase: {texto:"È mezzogiorno in punto!", partes:["È mezzogiorno", "in punto!"]},
    despedida: "Din, don!",
    chau: "Suonano le campane!",
    lograste: "Ce l'hai fatta! Sai leggere l'orologio!",
    todos: "Hai tutti i timbri! Sali in cima e cerca la porta verde.",
    ppFinal: "Prendi tutti i timbri e poi facciamo suonare le campane!",
    otraVez: "Un altro giro d'orologio! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giro"
  },
  microjuego: {
    titulo: "Metti l'orologio all'ora giusta!",
    intro: "Ascolta l'ora. Tocca il numero, e poi scegli: in punto, e un quarto, e mezza o meno un quarto.",
    pon: "Metti l'orologio così:",
    asi: "Guarda, è così:",
    fin: "Hai messo bene {n} orologi!",
    tipos: {punto:"in punto", cuarto:"e un quarto", media:"e mezza", menos:"meno un quarto"},
    hora: (n, t) => `${n==="uno"?"È l'una":"Sono le "+n}${{punto:" in punto", cuarto:" e un quarto", media:" e mezza", menos:" meno un quarto"}[t]}.`
  },
  palabrasExtra: [
    {texto:"uno", silabas:["u", "no"]},
    {texto:"due", silabas:["due"]},
    {texto:"tre", silabas:["tre"]},
    {texto:"quattro", silabas:["quat", "tro"]},
    {texto:"cinque", silabas:["cin", "que"]},
    {texto:"sei", silabas:["sei"]},
    {texto:"sette", silabas:["set", "te"]},
    {texto:"otto", silabas:["ot", "to"]},
    {texto:"nove", silabas:["no", "ve"]},
    {texto:"dieci", silabas:["die", "ci"]},
    {texto:"undici", silabas:["un", "di", "ci"]},
    {texto:"dodici", silabas:["do", "di", "ci"]}
  ],
  frasesExtra: [
    {texto:"Tic tac, tic tac!", partes:["Tic tac,", "tic tac!"]},
    {texto:"È l'una.", partes:["È l'una."]},
    {texto:"Sono le due.", partes:["Sono le due."]},
    {texto:"È ora di dormire.", partes:["È ora", "di dormire."]}
  ],
  preguntas: [
    {p:"Quale orologio dice le tre in punto?", r:"Quello! Le tre in punto."},
    {p:"Quale orologio dice le cinque e mezza?", r:"Quello! Le cinque e mezza."},
    {p:"Quale orologio dice le quattro e un quarto?", r:"Quello! Le quattro e un quarto."},
    {p:"Quale orologio dice le sette meno un quarto?", r:"Quello! Le sette meno un quarto."},
    {p:"Quale orologio ha la lancetta piccola rossa?", r:"Quello! La lancetta piccola."},
    {p:"Quale orologio ha la lancetta grande rossa?", r:"Quello! La lancetta grande."},
    {p:"Dov'è il numero tre?", r:"Sì! Il tre."},
    {p:"Dov'è il numero sette?", r:"Sì! Il sette."},
    {p:"Dov'è il numero dodici?", r:"Sì! Il dodici."},
    {p:"Dov'è il numero nove?", r:"Sì! Il nove."}
  ],
  objetos: {"#":"il muro", b:"la panchina", p:"la pianta", e:"l'ingranaggio", "~":"la porta"}
});
