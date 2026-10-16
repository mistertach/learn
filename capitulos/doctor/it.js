/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en italiano
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('doctor', 'it', {
  charlas: [
    {titulo:"Parlare con l'infermiera", chau:"In bocca al lupo, dottore! A più tardi!", pasos:[
      {di:"Buongiorno, dottore! È tutto pronto per oggi?", op:[{t:"Sì, è tutto pronto!", r:"Meraviglioso! I pazienti aspettano."}, {t:"Sì, ho il mio camice bianco!", r:"Sembri un vero dottore!"}]},
      {op:[{t:"Chi è il primo paziente?", r:"Un orsetto con il mal di testa."}, {t:"Dov'è lo stetoscopio?", r:"Eccolo, attorno al tuo collo!"}]},
      {di:"Ti serve altro?", op:[{t:"Un cerotto, per favore.", r:"Ecco un cerotto colorato."}, {t:"Il termometro, per favore.", r:"Ecco il termometro."}]},
      {op:[{t:"Mi aiuti?", r:"Certo! Sono sempre qui per aiutare."}, {t:"C'è tanta gente?", r:"Sì, ma sono tutti contenti."}]}]},
    {titulo:"Parlare con l'orso", chau:"Grazie, dottore! Mi sento già meglio!", pasos:[
      {di:"Dottore, non mi sento bene.", op:[{t:"Che cosa hai?", r:"Ho tanto mal di testa."}, {t:"Dove ti fa male?", r:"Qui, sulla testa."}]},
      {op:[{t:"Hai la febbre?", r:"No, non credo."}, {t:"Hai dormito bene?", r:"No, ho dormito male."}]},
      {di:"È grave, dottore?", op:[{t:"No, non è niente di grave.", r:"Uff! Che sollievo."}, {t:"Bevi un po' d'acqua e riposati.", r:"Va bene, mi riposo."}]},
      {op:[{t:"Ti senti meglio adesso?", r:"Sì, molto meglio! Grazie!"}, {t:"Vuoi un abbraccio?", r:"Sì, per favore!"}]}]},
    {titulo:"Parlare con la coniglietta", chau:"Grazie, dottore! Etciù… ciao!", pasos:[
      {di:"Etciù! Dottore, ho il naso tutto rosso.", op:[{t:"Salute!", r:"Grazie!"}, {t:"Sei raffreddata?", r:"Sì, credo di sì."}]},
      {op:[{t:"Ti fa male la gola?", r:"Un pochino."}, {t:"Hai un fazzoletto?", r:"Sì, eccolo."}]},
      {di:"Che cosa faccio, dottore?", op:[{t:"Bevi una tisana calda.", r:"Mmm, una tisana calda. Buona idea!"}, {t:"Stai al caldo e riposati.", r:"Va bene, resto a letto."}]},
      {op:[{t:"Vuoi lo sciroppo?", r:"Sì, per favore! Adoro quello alla fragola."}, {t:"Ti senti meglio?", r:"Sì, sento di nuovo i fiori!"}]}]},
    {titulo:"Parlare con l'orsacchiotto", chau:"Grazie per esserti preso cura di me! Ti voglio bene, dottore!", pasos:[
      {di:"Dottore… sono triste.", op:[{t:"Non essere triste, orsacchiotto.", r:"Grazie, dottore."}, {t:"Mi prenderò cura di te.", r:"Con te mi sento al sicuro."}]},
      {op:[{t:"Dove ti fa male?", r:"Qui, un pochino."}, {t:"Hai paura?", r:"Un po', ma sono coraggioso."}]},
      {di:"Mi metti un cerotto?", op:[{t:"Sì, tieni.", r:"Grazie! È molto carino."}, {t:"Sì, e un grande abbraccio!", r:"Adoro gli abbracci!"}]},
      {op:[{t:"Ti senti meglio?", r:"Sì, adesso sono contento!"}, {t:"Vuoi giocare?", r:"Sì! Andiamo a giocare!"}]}]}
  ],
  titulo: "Dal dottore",
  lugar: {texto:"dal dottore", silabas:["dal", "dot", "to", "re"]},
  bienvenida: "Eccoci dal dottore!",
  niveles: [{nombre:"La sala d'attesa", numTexto:"zero"}, {nombre:"Primo piano", numTexto:"uno"}, {nombre:"Secondo piano", numTexto:"due"}],
  estaciones: {
    E: {
      palabra: {texto:"lo stetoscopio", silabas:["lo", "ste", "to", "sco", "pio"]},
      intro: "Ciao! Sono l'infermiera. Oggi il dottore sei tu: ecco il camice!",
      frase: {texto:"Bum, bum. Ascolto il cuore!", partes:["Bum, bum.", "Ascolto il cuore!"]},
      respuesta: "Batte forte! Benissimo!",
      cuento: {
        titulo: "Il camice bianco",
        paginas: [
          "L'infermiera dà a {N} *uno stetoscopio*.",
          "«Per me?» chiede {N}. «Sì! E anche un camice bianco.»",
          "{N} ascolta il suo cuore: bum, bum, bum!",
          "Pronti! Al lavoro con i pazienti!"
        ]
      }
    },
    C: {
      palabra: {texto:"la testa", silabas:["la", "te", "sta"]},
      intro: "L'orsetto è triste. Gli fa male qualcosa.",
      frase: {texto:"Ti fa male la testa?", partes:["Ti fa male", "la testa?"]},
      respuesta: "Sì, un pochino… ahi!",
      cuento: {
        titulo: "Un bicchiere d'acqua",
        paginas: [
          "L'orsetto si teneva *la testa*. Ahi, ahi, ahi!",
          "«Ti fa male la testa?» chiede {N}. «Sì, un pochino.»",
          "{N} gli dà un bicchiere d'acqua fresca: «Adesso, riposati.»",
          "L'orsetto fa un pisolino… e si sveglia tutto contento!"
        ]
      }
    },
    A: {
      palabra: {texto:"la pancia", silabas:["la", "pan", "cia"]},
      intro: "Al cagnolino fa male la pancia.",
      frase: {texto:"Che cosa hai mangiato?", partes:["Che cosa", "hai mangiato?"]},
      respuesta: "Tanto gelato e tanta pizza!",
      cuento: {
        titulo: "Troppo gelato",
        paginas: [
          "Al cagnolino faceva male *la pancia*.",
          "«Che cosa hai mangiato?» chiede {N}. «Tanto gelato e tanta pizza!»",
          "{N} gli dà un cucchiaio di sciroppo. Mmm, alla fragola!",
          "Poco dopo il cagnolino balla: non gli fa più male niente!"
        ]
      }
    },
    N: {
      palabra: {texto:"il naso", silabas:["il", "na", "so"]},
      intro: "Oh! La coniglietta ha il naso tutto rosso.",
      frase: {texto:"Salute!", partes:["Salute!"]},
      respuesta: "Etciù! Grazie!",
      cuento: {
        titulo: "Etciù!",
        paginas: [
          "La coniglietta aveva *il naso* rosso come una fragola.",
          "Eee… etciù! «Salute!» dice {N}.",
          "{N} le dà un fazzoletto: «Soffia forte.»",
          "«Grazie! Adesso sento il profumo dei fiori» dice la coniglietta."
        ]
      }
    },
    B: {
      palabra: {texto:"la bocca", silabas:["la", "boc", "ca"]},
      intro: "Il gattino deve far vedere i denti.",
      frase: {texto:"Apri la bocca, per favore.", partes:["Apri la bocca,", "per favore."]},
      respuesta: "Aaaaa!",
      cuento: {
        titulo: "Aaaa!",
        paginas: [
          "Il gattino grigio non voleva aprire *la bocca*.",
          "«Apri la bocca, per favore» dice {N}. «Aaaaa!»",
          "Che denti bianchi e brillanti!",
          "«Benissimo! E lavati i denti tutti i giorni.»"
        ]
      }
    },
    R: {
      palabra: {texto:"il ginocchio", silabas:["il", "gi", "noc", "chio"]},
      intro: "Il cane è caduto dalla bici.",
      frase: {texto:"Ti metto un cerotto.", partes:["Ti metto", "un cerotto."]},
      respuesta: "Non mi fa più male! Grazie!",
      cuento: {
        titulo: "Il cerotto",
        paginas: [
          "Il cane è caduto e si è fatto male *al ginocchio*. Uèèè!",
          "{N} gli dice: «Tranquillo, non è niente.»",
          "E gli mette un cerotto colorato.",
          "«Non mi fa più male!» Il cane corre di nuovo a giocare."
        ]
      }
    },
    T: {
      palabra: {texto:"il termometro", silabas:["il", "ter", "mo", "me", "tro"]},
      intro: "L'orso è molto stanco. Avrà la febbre?",
      frase: {texto:"Hai la febbre?", partes:["Hai", "la febbre?"]},
      respuesta: "No! Sto bene!",
      cuento: {
        titulo: "Niente febbre",
        paginas: [
          "L'orso era stanco. {N} porta *il termometro*.",
          "«Hai la febbre?» chiede {N}. L'orso aspetta, fermo fermo.",
          "Bip, bip! «Niente febbre!»",
          "«Che fortuna!» dice l'orso, e si mette a ballare."
        ]
      }
    }
  },
  final: {
    pregunta: "Sono triste… mi fa male la testa.",
    frase: {texto:"Un cerotto e un abbraccio!", partes:["Un cerotto", "e un abbraccio!"]},
    despedida: "Adesso sono contento!",
    chau: "Grazie di avermi curato!",
    lograste: "Ce l'hai fatta! Hai curato tutti!",
    todos: "Hai tutti i timbri! Cerca la porta verde: l'orsacchiotto ha bisogno di te!",
    ppFinal: "Prendi tutti i timbri e poi curiamo l'orsacchiotto!",
    otraVez: "Un altro giorno dal dottore! Prendi di nuovo i timbri.",
    otraVezB: "Un altro giorno"
  },
  microjuego: {
    cosquillas: "Adesso, solletico! Tocca l'orsacchiotto dove vuoi.",
    titulo: "Dov'è il naso?",
    intro: "Ascolta e tocca quella parte del corpo dell'orsacchiotto.",
    fin: "Hai trovato {n} parti del corpo!",
    ingredientes: [
      {texto:"la testa", p:"Dov'è la testa?"},
      {texto:"gli occhi", p:"Dove sono gli occhi?"},
      {texto:"il naso", p:"Dov'è il naso?"},
      {texto:"la bocca", p:"Dov'è la bocca?"},
      {texto:"le orecchie", p:"Dove sono le orecchie?"},
      {texto:"la pancia", p:"Dov'è la pancia?"},
      {texto:"i piedi", p:"Dove sono i piedi?"}
    ]
  },
  palabrasExtra: [
    {texto:"gli occhi", silabas:["gli", "oc", "chi"]},
    {texto:"le orecchie", silabas:["le", "o", "rec", "chie"]},
    {texto:"i piedi", silabas:["i", "pie", "di"]},
    {texto:"il cerotto", silabas:["il", "ce", "rot", "to"]},
    {texto:"lo sciroppo", silabas:["lo", "sci", "rop", "po"]}
  ],
  frasesExtra: [
    {texto:"Che gioia!", partes:["Che", "gioia!"]},
    {texto:"Sono triste.", partes:["Sono", "triste."]},
    {texto:"Ho paura.", partes:["Ho", "paura."]},
    {texto:"Ahi, mi fa male!", partes:["Ahi,", "mi fa male!"]},
    {texto:"Sto meglio!", partes:["Sto", "meglio!"]}
  ],
  preguntas: [
    {p:"Con che cosa ascoltiamo il cuore?", r:"Con lo stetoscopio!"},
    {p:"Con che cosa vediamo se c'è la febbre?", r:"Con il termometro!"},
    {p:"Che cosa mettiamo sul ginocchio che fa male?", r:"Un cerotto!"},
    {p:"Con che cosa sentiamo il profumo dei fiori?", r:"Con il naso!"},
    {p:"Con che cosa guardiamo?", r:"Con gli occhi!"},
    {p:"Con che cosa ascoltiamo la musica?", r:"Con le orecchie!"},
    {p:"Con che cosa mangiamo?", r:"Con la bocca!"},
    {p:"Con che cosa camminiamo?", r:"Con i piedi!"},
    {p:"Quale faccina è triste?", r:"Questa!"},
    {p:"Quale faccina è contenta?", r:"Questa!"}
  ],
  objetos: {"#":"il muro", p:"la pianta", b:"la panchina", x:"il lettino", "~":"la porta"}
});
