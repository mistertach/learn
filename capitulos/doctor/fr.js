/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('doctor', 'fr', {
  charlas: [
    {titulo:"Parler avec l'infirmière", chau:"Bonne chance, docteur ! À tout à l'heure !", pasos:[
      {di:"Bonjour, docteur ! Tout est prêt pour aujourd'hui ?", op:[{t:"Oui, tout est prêt !", r:"Merveilleux ! Les patients attendent."}, {t:"Oui, j'ai ma blouse blanche !", r:"On dirait un vrai docteur !"}]},
      {op:[{t:"Qui est le premier patient ?", r:"Un petit ours qui a mal à la tête."}, {t:"Où est le stéthoscope ?", r:"Le voici, autour de ton cou !"}]},
      {di:"Il te faut autre chose ?", op:[{t:"Un pansement, s'il te plaît.", r:"Voici un pansement tout coloré."}, {t:"Le thermomètre, s'il te plaît.", r:"Voici le thermomètre."}]},
      {op:[{t:"Tu m'aides ?", r:"Bien sûr ! Je suis toujours là pour aider."}, {t:"Il y a beaucoup de monde ?", r:"Oui, mais tout le monde est content."}]}]},
    {titulo:"Parler avec l'ours", chau:"Merci, docteur ! Je me sens déjà mieux !", pasos:[
      {di:"Docteur, je ne me sens pas bien.", op:[{t:"Qu'est-ce qui ne va pas ?", r:"J'ai très mal à la tête."}, {t:"Où as-tu mal ?", r:"Ici, à la tête."}]},
      {op:[{t:"Tu as de la fièvre ?", r:"Non, je ne crois pas."}, {t:"Tu as bien dormi ?", r:"Non, j'ai mal dormi."}]},
      {di:"C'est grave, docteur ?", op:[{t:"Non, ce n'est pas grave.", r:"Ouf ! Quel soulagement."}, {t:"Bois de l'eau et repose-toi.", r:"D'accord, je vais me reposer."}]},
      {op:[{t:"Tu te sens mieux maintenant ?", r:"Oui, beaucoup mieux ! Merci !"}, {t:"Tu veux un câlin ?", r:"Oui, s'il te plaît !"}]}]},
    {titulo:"Parler avec la lapine", chau:"Merci, docteur ! Atchoum… au revoir !", pasos:[
      {di:"Atchoum ! Docteur, j'ai le nez tout rouge.", op:[{t:"À tes souhaits !", r:"Merci !"}, {t:"Tu es enrhumée ?", r:"Oui, je crois bien."}]},
      {op:[{t:"Tu as mal à la gorge ?", r:"Un tout petit peu."}, {t:"Tu as un mouchoir ?", r:"Oui, le voici."}]},
      {di:"Qu'est-ce que je fais, docteur ?", op:[{t:"Bois une tisane chaude.", r:"Mmm, une tisane chaude. Bonne idée !"}, {t:"Reste au chaud et repose-toi.", r:"D'accord, je reste au lit."}]},
      {op:[{t:"Tu veux du sirop ?", r:"Oui, s'il te plaît ! J'adore celui à la fraise."}, {t:"Tu te sens mieux ?", r:"Oui, je sens de nouveau les fleurs !"}]}]},
    {titulo:"Parler avec l'ourson en peluche", chau:"Merci de t'occuper de moi ! Je t'aime, docteur !", pasos:[
      {di:"Docteur… je suis triste.", op:[{t:"Ne sois pas triste, ourson.", r:"Merci, docteur."}, {t:"Je vais prendre soin de toi.", r:"Avec toi, je me sens en sécurité."}]},
      {op:[{t:"Où as-tu mal ?", r:"Ici, un petit peu."}, {t:"Tu as peur ?", r:"Un peu, mais je suis courageux."}]},
      {di:"Tu me mets un pansement ?", op:[{t:"Oui, tiens.", r:"Merci ! Il est très joli."}, {t:"Oui, et un gros câlin !", r:"J'adore les câlins !"}]},
      {op:[{t:"Tu te sens mieux ?", r:"Oui, maintenant je suis content !"}, {t:"Tu veux jouer ?", r:"Oui ! Allons jouer !"}]}]}
  ],
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
