/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('doctor', 'fr', {
  titulo: "Chez le docteur",
  lugar: {texto:"chez le docteur", silabas:["chez", "le", "doc", "teur"]},
  bienvenida: "Nous voilà chez le docteur !",
  niveles: [{nombre:"La salle d'attente", numTexto:"zéro"}, {nombre:"Premier étage", numTexto:"un"}, {nombre:"Deuxième étage", numTexto:"deux"}],
  estaciones: {
    E: {
      palabra: {texto:"le stéthoscope", silabas:["le", "sté", "tho", "scope"]},
      intro: "Bonjour ! Je suis l'infirmière. Aujourd'hui, c'est toi le docteur : voilà ta blouse !",
      frase: {texto:"Boum, boum. J'écoute le cœur !", partes:["Boum, boum.", "J'écoute le cœur !"]},
      respuesta: "Il bat fort ! Très bien !",
      cuento: {
        titulo: "La blouse blanche",
        paginas: [
          "L'infirmière donne *un stéthoscope* à {N}.",
          "« Pour moi ? » demande {N}. « Oui ! Et une blouse blanche aussi. »",
          "{N} écoute son propre cœur : boum, boum, boum !",
          "C'est prêt ! Au travail avec les patients !"
        ]
      }
    },
    C: {
      palabra: {texto:"la tête", silabas:["la", "tête"]},
      intro: "Le petit ours est triste. Il a mal quelque part.",
      frase: {texto:"Tu as mal à la tête ?", partes:["Tu as mal", "à la tête ?"]},
      respuesta: "Oui, un petit peu… aïe !",
      cuento: {
        titulo: "Un verre d'eau",
        paginas: [
          "Le petit ours se tenait *la tête*. Aïe, aïe, aïe !",
          "« Tu as mal à la tête ? » demande {N}. « Oui, un petit peu. »",
          "{N} lui donne un verre d'eau fraîche : « Maintenant, repose-toi. »",
          "Le petit ours fait la sieste… et se réveille tout content !"
        ]
      }
    },
    A: {
      palabra: {texto:"le ventre", silabas:["le", "ventre"]},
      intro: "Le petit chien a mal au ventre.",
      frase: {texto:"Qu'est-ce que tu as mangé ?", partes:["Qu'est-ce que", "tu as mangé ?"]},
      respuesta: "Beaucoup de glace et beaucoup de pizza !",
      cuento: {
        titulo: "Trop de glace",
        paginas: [
          "Le petit chien avait mal *au ventre*.",
          "« Qu'est-ce que tu as mangé ? » demande {N}. « Beaucoup de glace et beaucoup de pizza ! »",
          "{N} lui donne une cuillère de sirop. Miam, à la fraise !",
          "Un peu plus tard, le petit chien danse : il n'a plus mal du tout !"
        ]
      }
    },
    N: {
      palabra: {texto:"le nez", silabas:["le", "nez"]},
      intro: "Oh ! La petite lapine a le nez tout rouge.",
      frase: {texto:"À tes souhaits !", partes:["À tes", "souhaits !"]},
      respuesta: "Atchoum ! Merci !",
      cuento: {
        titulo: "Atchoum !",
        paginas: [
          "La petite lapine avait *le nez* rouge comme une fraise.",
          "Aaa… atchoum ! « À tes souhaits ! » dit {N}.",
          "{N} lui donne un mouchoir : « Souffle fort. »",
          "« Merci ! Je peux sentir les fleurs », dit la petite lapine."
        ]
      }
    },
    B: {
      palabra: {texto:"la bouche", silabas:["la", "bouche"]},
      intro: "Le petit chat doit montrer ses dents.",
      frase: {texto:"Ouvre la bouche, s'il te plaît.", partes:["Ouvre la bouche,", "s'il te plaît."]},
      respuesta: "Aaaaa !",
      cuento: {
        titulo: "Aaaa !",
        paginas: [
          "Le petit chat gris ne voulait pas ouvrir *la bouche*.",
          "« Ouvre la bouche, s'il te plaît », dit {N}. « Aaaaa ! »",
          "Quelles dents blanches et brillantes !",
          "« Très bien ! Et on se brosse les dents tous les jours. »"
        ]
      }
    },
    R: {
      palabra: {texto:"le genou", silabas:["le", "ge", "nou"]},
      intro: "Le chien est tombé de son vélo.",
      frase: {texto:"Je te mets un pansement.", partes:["Je te mets", "un pansement."]},
      respuesta: "Ça ne fait plus mal ! Merci !",
      cuento: {
        titulo: "Le pansement",
        paginas: [
          "Le chien est tombé et s'est fait mal *au genou*. Ouin !",
          "{N} lui dit : « Ne t'inquiète pas, ce n'est rien. »",
          "Et {N} lui met un pansement de toutes les couleurs.",
          "« Ça ne fait plus mal ! » Le chien repart jouer en courant."
        ]
      }
    },
    T: {
      palabra: {texto:"le thermomètre", silabas:["le", "ther", "mo", "mètre"]},
      intro: "L'ours est très fatigué. Il a peut-être de la fièvre ?",
      frase: {texto:"Tu as de la fièvre ?", partes:["Tu as", "de la fièvre ?"]},
      respuesta: "Non ! Je vais bien !",
      cuento: {
        titulo: "Pas de fièvre",
        paginas: [
          "L'ours était fatigué. {N} apporte *le thermomètre*.",
          "« Tu as de la fièvre ? » demande {N}. L'ours attend, sans bouger.",
          "Bip, bip ! « Pas de fièvre ! »",
          "« Quelle chance ! » dit l'ours, et il se met à danser."
        ]
      }
    }
  },
  final: {
    pregunta: "Je suis triste… j'ai mal à la tête.",
    frase: {texto:"Un pansement et un câlin !", partes:["Un pansement", "et un câlin !"]},
    despedida: "Je suis content maintenant !",
    chau: "Merci de t'occuper de moi !",
    lograste: "Bravo ! Tu as soigné tout le monde !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : le nounours a besoin de toi !",
    ppFinal: "Prends tous les tampons, et ensuite on s'occupe du nounours !",
    otraVez: "Encore une journée chez le docteur ! Reprends les tampons.",
    otraVezB: "Encore une journée"
  },
  microjuego: {
    cosquillas: "Maintenant, des chatouilles ! Touche le nounours où tu veux.",
    titulo: "Où est le nez ?",
    intro: "Écoute et touche cette partie du corps du nounours.",
    fin: "Tu as trouvé {n} parties du corps !",
    ingredientes: [
      {texto:"la tête", p:"Où est la tête ?"},
      {texto:"les yeux", p:"Où sont les yeux ?"},
      {texto:"le nez", p:"Où est le nez ?"},
      {texto:"la bouche", p:"Où est la bouche ?"},
      {texto:"les oreilles", p:"Où sont les oreilles ?"},
      {texto:"le ventre", p:"Où est le ventre ?"},
      {texto:"les pieds", p:"Où sont les pieds ?"}
    ]
  },
  palabrasExtra: [
    {texto:"les yeux", silabas:["les", "yeux"]},
    {texto:"les oreilles", silabas:["les", "o", "reilles"]},
    {texto:"les pieds", silabas:["les", "pieds"]},
    {texto:"le pansement", silabas:["le", "panse", "ment"]},
    {texto:"le sirop", silabas:["le", "si", "rop"]}
  ],
  frasesExtra: [
    {texto:"Quelle joie !", partes:["Quelle", "joie !"]},
    {texto:"Je suis triste.", partes:["Je suis", "triste."]},
    {texto:"J'ai peur.", partes:["J'ai", "peur."]},
    {texto:"Aïe, j'ai mal !", partes:["Aïe,", "j'ai mal !"]},
    {texto:"Ça va mieux !", partes:["Ça va", "mieux !"]}
  ],
  preguntas: [
    {p:"Avec quoi on écoute le cœur ?", r:"Avec le stéthoscope !"},
    {p:"Avec quoi on regarde s'il y a de la fièvre ?", r:"Avec le thermomètre !"},
    {p:"Qu'est-ce qu'on met sur le genou qui fait mal ?", r:"Un pansement !"},
    {p:"Avec quoi on sent les fleurs ?", r:"Avec le nez !"},
    {p:"Avec quoi on regarde ?", r:"Avec les yeux !"},
    {p:"Avec quoi on écoute la musique ?", r:"Avec les oreilles !"},
    {p:"Avec quoi on mange ?", r:"Avec la bouche !"},
    {p:"Avec quoi on marche ?", r:"Avec les pieds !"},
    {p:"Quel petit visage est triste ?", r:"Celui-là !"},
    {p:"Quel petit visage est content ?", r:"Celui-là !"}
  ],
  objetos: {"#":"le mur", p:"la plante", b:"le banc", x:"la table d'examen", "~":"la porte"}
});
