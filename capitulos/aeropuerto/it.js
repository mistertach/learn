/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('aeropuerto', 'it', {
  titulo: "L'aeroporto",
  lugar: {texto:"l'aeroporto", silabas:["l'a", "e", "ro", "por", "to"]},
  bienvenida: "Eccoci all'aeroporto!",
  niveles: [{nombre:"Arrivi", numTexto:"zero"}, {nombre:"Partenze", numTexto:"uno"}, {nombre:"Imbarchi", numTexto:"due"}],
  estaciones: {
    I: {
      palabra: {texto:"la mappa", silabas:["la", "map", "pa"]},
      intro: "Questo è il banco informazioni. Qui sanno dov'è tutto!",
      frase: {texto:"Dov'è l'aereo?", partes:["Dov'è", "l'aereo?"]},
      respuesta: "Di sopra, al secondo piano!",
      cuento: {
        titulo: "La mappa magica",
        paginas: [
          "{N} trova *la mappa* al banco informazioni.",
          "All'improvviso la mappa comincia a brillare! C'è una strada rossa.",
          "La strada va su, su, su… fino al secondo piano!",
          "Lassù c'è *l'aereo*. «Grazie, mappa!» dice {N}."
        ]
      }
    },
    B: {
      palabra: {texto:"il bagno", silabas:["il", "ba", "gno"]},
      intro: "Oh oh! A volte dobbiamo andare in bagno.",
      frase: {texto:"Dov'è il bagno?", partes:["Dov'è", "il bagno?"]},
      respuesta: "È qui! Questa porta!",
      cuento: {
        titulo: "Bolle in bagno!",
        paginas: [
          "{N} ha tanta, tanta voglia di andare *in bagno*.",
          "«Dov'è il bagno?» chiede {N} alla gatta gialla.",
          "«È qui, la porta blu!» dice la gatta.",
          "Poi {N} si lava le mani con tanto sapone. Bolle, bolle!"
        ]
      }
    },
    K: {
      palabra: {texto:"il biscotto", silabas:["il", "bi", "scot", "to"]},
      intro: "Questo è il chiosco. Vendono cose buonissime!",
      frase: {texto:"Un biscotto, per favore.", partes:["Un biscotto,", "per favore."]},
      respuesta: "Ecco qua! Buon appetito!",
      cuento: {
        titulo: "Il biscotto viaggiatore",
        paginas: [
          "Al chiosco c'è *un biscotto* gigante.",
          "«Un biscotto, per favore!» chiede {N}.",
          "Ma il biscotto fa un salto e dice: «Anch'io voglio viaggiare!»",
          "Così il biscotto salta nello *zaino*, pronto per volare."
        ]
      }
    },
    T: {
      palabra: {texto:"il biglietto", silabas:["il", "bi", "gliet", "to"]},
      intro: "Qui compriamo il biglietto per prendere l'aereo.",
      frase: {texto:"Un biglietto, per favore.", partes:["Un biglietto,", "per favore."]},
      respuesta: "Certo! Ecco il tuo biglietto.",
      cuento: {
        titulo: "Il biglietto d'oro",
        paginas: [
          "{N} va allo sportello a comprare *un biglietto*.",
          "L'orso dà a {N} un biglietto giallo che brilla tanto.",
          "All'improvviso soffia il vento… e il biglietto vola via!",
          "{N} salta in alto e lo prende. Che fortuna!"
        ]
      }
    },
    C: {
      palabra: {texto:"la valigia", silabas:["la", "va", "li", "gia"]},
      intro: "Qui lasciamo la valigia. Anche lei viaggia sull'aereo!",
      frase: {texto:"Questa è la mia valigia.", partes:["Questa è", "la mia valigia."]},
      respuesta: "Che bella! Ciao, valigia.",
      cuento: {
        titulo: "La valigia che scappa",
        paginas: [
          "{N} è all'aeroporto con *una valigia* rossa piena di giochi.",
          "Ma la valigia comincia a rotolare! Rotola, rotola, rotola. «Aspetta, valigia!» grida {N}.",
          "Passa vicino al *bagno*. La gatta chiede: «Dov'è la valigia?»",
          "Sale sulla *scala mobile*. Su, su!",
          "Lassù un aereo enorme dice: «Ciao, valigia! Ferma!» E la valigia si ferma.",
          "{N} abbraccia la valigia. «Grazie, aereo! Buon viaggio!»"
        ]
      }
    },
    S: {
      palabra: {texto:"il passaporto", silabas:["il", "pas", "sa", "por", "to"]},
      intro: "Questo è il controllo. Qui mostriamo il passaporto.",
      frase: {texto:"Ecco il mio passaporto.", partes:["Ecco", "il mio passaporto."]},
      respuesta: "Perfetto! Puoi passare.",
      cuento: {
        titulo: "Il passaporto dormiglione",
        paginas: [
          "Al controllo il cane chiede *il passaporto* a {N}.",
          "{N} cerca nello zaino… ma il passaporto dorme!",
          "«Svegliati, passaporto!» dice {N} ad alta voce.",
          "Il passaporto apre gli occhi: «Eccomi! Puoi passare!»"
        ]
      }
    },
    W: {
      palabra: {texto:"l'aereo", silabas:["l'a", "e", "re", "o"]},
      intro: "Guarda dalla grande finestra! C'è anche il pilota.",
      frase: {texto:"Guarda, un aereo!", partes:["Guarda,", "un aereo!"]},
      respuesta: "Sì! Com'è grande!",
      cuento: {
        titulo: "L'aereo che aveva paura",
        paginas: [
          "Dalla finestra {N} vede *un aereo* piccolino.",
          "L'aereo ha paura di volare così in alto.",
          "«Puoi farcela, aereo!» grida {N}.",
          "L'aereo corre, corre… e vola tra le nuvole!"
        ]
      }
    }
  },
  final: {
    pregunta: "Hai il tuo biglietto?",
    frase: {texto:"Sì! Ecco il mio biglietto.", partes:["Sì!", "Ecco", "il mio biglietto."]},
    despedida: "Buon viaggio!",
    chau: "Ciao, aeroporto!"
  },
  palabrasExtra: [
    {texto:"l'ascensore", silabas:["l'a", "scen", "so", "re"]},
    {texto:"la scala mobile", silabas:["la", "sca", "la", "mo", "bi", "le"]},
    {texto:"la porta", silabas:["la", "por", "ta"]},
    {texto:"il pilota", silabas:["il", "pi", "lo", "ta"]},
    {texto:"lo zaino", silabas:["lo", "zai", "no"]}
  ],
  frasesExtra: [
    {texto:"Ciao!", partes:["Ciao!"]},
    {texto:"Grazie mille!", partes:["Grazie", "mille!"]},
    {texto:"Arrivederci!", partes:["Arrivederci!"]},
    {texto:"Dov'è la porta?", partes:["Dov'è", "la porta?"]},
    {texto:"Al secondo piano, per favore.", partes:["Al secondo piano,", "per favore."]},
    {texto:"Buon viaggio!", partes:["Buon", "viaggio!"]}
  ],
  preguntas: [
    {p:"Che cosa mangiamo al chiosco?", r:"Il biscotto! Che buono!"},
    {p:"Che cosa mostriamo al cane del controllo?", r:"Il passaporto!"},
    {p:"Dove mettiamo i giochi per viaggiare?", r:"Nella valigia!"},
    {p:"Che cosa ci dice dov'è tutto?", r:"La mappa!"},
    {p:"Che cosa serve per salire sull'aereo?", r:"Il biglietto!"},
    {p:"Che cosa ci porta su e giù?", r:"L'ascensore!"},
    {p:"Che cosa porta il pilota sulla testa?", r:"Il cappello del pilota!"},
    {p:"Che cosa portiamo sulla schiena?", r:"Lo zaino!"},
    {p:"Che cosa vola tra le nuvole?", r:"L'aereo!"},
    {p:"Dove andiamo quando dobbiamo fare la pipì?", r:"In bagno!"}
  ],
  objetos: {"#":"il muro", b:"la panchina", p:"la pianta", "~":"la porta"}
});
