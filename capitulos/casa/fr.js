/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en français
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('casa', 'fr', {
  charlas: [
    {titulo:"Parler avec papa", chau:"Je t'aime fort ! À tout à l'heure !", pasos:[
      {di:"Bonjour ! Tu as bien dormi ?", op:[{t:"Oui, j'ai très bien dormi !", r:"Super ! Tu as bonne mine."}, {t:"Oui, j'ai fait de beaux rêves.", r:"Comme c'est bien ! Les beaux rêves sont les meilleurs."}]},
      {op:[{t:"Qu'est-ce que tu lis, papa ?", r:"Je lis le journal."}, {t:"Tu veux jouer ?", r:"Bien sûr ! Jouons ensemble."}]},
      {di:"Qu'est-ce que tu veux pour le petit-déjeuner ?", op:[{t:"Je veux du lait, s'il te plaît.", r:"Voici ton lait. Bon appétit !"}, {t:"Je veux du pain, s'il te plaît.", r:"Voici ton pain. Miam !"}]},
      {op:[{t:"Toi aussi, tu as faim, papa ?", r:"Oui, très faim !"}, {t:"Je peux t'aider ?", r:"Oui, merci ! Tu m'aides beaucoup."}]}]},
    {titulo:"Parler avec maman", chau:"Viens, un gros câlin ! On mange bientôt.", pasos:[
      {di:"Coucou, mon cœur ! Comment vas-tu ?", op:[{t:"Très bien, merci !", r:"Quelle joie de t'entendre !"}, {t:"J'ai un peu sommeil.", r:"Alors on se repose après le déjeuner."}]},
      {op:[{t:"Qu'est-ce que tu cuisines, maman ?", r:"Je prépare une soupe. Ta préférée !"}, {t:"Je peux goûter ?", r:"Bien sûr ! Attention, c'est chaud."}]},
      {di:"Tu veux encore de la soupe ?", op:[{t:"Oui, s'il te plaît !", r:"Voilà !"}, {t:"Non, merci. C'était délicieux !", r:"Je suis contente que ça te plaise !"}]},
      {op:[{t:"Je t'aide, maman ?", r:"Oui ! Tu mets la table ?"}, {t:"C'est bientôt prêt ?", r:"Presque ! Encore une minute."}]}]},
    {titulo:"Parler avec ta sœur", chau:"Tu es génial ! À tout à l'heure !", pasos:[
      {di:"Salut ! Tu veux lire un livre avec moi ?", op:[{t:"Oui ! J'adore les livres.", r:"Moi aussi ! Asseyons-nous ici."}, {t:"Non, je veux jouer.", r:"D'accord ! On joue d'abord, on lit après."}]},
      {op:[{t:"Quelle est ta couleur préférée ?", r:"Le violet ! Et la tienne ?"}, {t:"Il parle de quoi, ce livre ?", r:"C'est l'histoire d'un petit chien."}]},
      {di:"Tu aimes cette histoire ?", op:[{t:"Oui, elle est drôle !", r:"Moi aussi ! On la relit."}, {t:"Oui, elle est belle !", r:"Super ! C'est ma préférée."}]},
      {op:[{t:"On joue maintenant ?", r:"Oui ! Allez, on joue !"}, {t:"Tu veux un câlin ?", r:"Oui, un gros câlin !"}]}]},
    {titulo:"Parler avec mamie", chau:"De gros bisous, mon amour ! Au revoir !", pasos:[
      {di:"Coucou, mon trésor ! Tu me manques tellement !", op:[{t:"Tu me manques aussi, mamie !", r:"Comme c'est doux !"}, {t:"Bonjour mamie ! Je t'aime !", r:"Moi aussi je t'aime, mon trésor !"}]},
      {op:[{t:"Comment vas-tu, mamie ?", r:"Très bien, maintenant que je te vois !"}, {t:"Qu'est-ce que tu fais ?", r:"Je tricote une écharpe pour toi."}]},
      {di:"Qu'est-ce que tu as fait aujourd'hui ?", op:[{t:"J'ai joué avec mon chien.", r:"Comme c'est amusant ! Les chiens sont si doux."}, {t:"J'ai joué dans le jardin.", r:"Quelle bonne idée ! Le grand air te fait du bien."}]},
      {op:[{t:"Quand est-ce que tu viens, mamie ?", r:"Très bientôt ! Je t'apporte un cadeau."}, {t:"Tu me racontes une histoire ?", r:"Bien sûr ! Il était une fois…"}]}]}
  ],
  titulo: "Notre maison",
  lugar: {texto:"notre maison", silabas:["notre", "mai", "son"]},
  bienvenida: "Bienvenue à la maison !",
  niveles: [{nombre:"Le jardin", numTexto:"zéro"}, {nombre:"Le rez-de-chaussée", numTexto:"un"}, {nombre:"En haut", numTexto:"deux"}],
  estaciones: {
    R: {
      palabra: {texto:"le chien", silabas:["le", "chien"]},
      intro: "Voici le jardin. Voilà notre chien !",
      frase: {texto:"Viens, petit chien !", partes:["Viens,", "petit chien !"]},
      respuesta: "Ouaf, ouaf !",
      cuento: {
        titulo: "Le chien sauteur",
        paginas: [
          "Dans le jardin, *le chien* remue la queue.",
          "« Viens, petit chien ! » appelle {N}.",
          "Le chien saute si haut… qu'il tombe dans les fleurs !",
          "{N} lui fait un câlin. Ouaf, ouaf !"
        ]
      }
    },
    A: {
      palabra: {texto:"papa", silabas:["pa", "pa"]},
      intro: "Voici le salon. Papa lit le journal.",
      frase: {texto:"Bonjour, papa !", partes:["Bonjour,", "papa !"]},
      respuesta: "Bonjour, mon trésor ! Tu as bien dormi ?",
      cuento: {
        titulo: "Le journal qui s'envole",
        paginas: [
          "*Papa* lit le journal sur le canapé.",
          "« Bonjour, papa ! » dit {N}.",
          "Fiou ! Une page du journal s'envole par la fenêtre.",
          "Papa rit : « Pas grave ! On joue ensemble ? »"
        ]
      }
    },
    M: {
      palabra: {texto:"maman", silabas:["ma", "man"]},
      intro: "Voici la cuisine. Maman fait à manger !",
      frase: {texto:"Coucou, maman ! Comment ça va ?", partes:["Coucou, maman !", "Comment ça va ?"]},
      respuesta: "Très bien, merci ! Et toi ?",
      cuento: {
        titulo: "La soupe de maman",
        paginas: [
          "Dans la cuisine, *maman* fait une soupe.",
          "« Coucou, maman ! Comment ça va ? » demande {N}.",
          "« Très bien ! Tu veux goûter ? » dit maman.",
          "Miam ! La soupe de maman est la meilleure du monde."
        ]
      }
    },
    H: {
      palabra: {texto:"le frère", silabas:["le", "frère"]},
      intro: "Ton frère a plein de jouets.",
      frase: {texto:"On joue ensemble ?", partes:["On joue", "ensemble ?"]},
      respuesta: "Oui ! On joue !",
      cuento: {
        titulo: "La tour de cubes",
        paginas: [
          "*Le frère* de {N} construit une tour de cubes.",
          "« On joue ensemble ? » demande {N}.",
          "La tour monte, monte… et elle tombe ! Boum !",
          "Ils rient beaucoup et la reconstruisent."
        ]
      }
    },
    E: {
      palabra: {texto:"la sœur", silabas:["la", "sœur"]},
      intro: "Ta sœur est dans sa chambre, elle lit.",
      frase: {texto:"Tu me lis une histoire ?", partes:["Tu me lis", "une histoire ?"]},
      respuesta: "Bien sûr !",
      cuento: {
        titulo: "L'histoire de la sœur",
        paginas: [
          "*La sœur* de {N} a un livre de dragons.",
          "« Tu me lis une histoire ? » demande {N}.",
          "« Il était une fois un dragon qui avait peur du noir… »",
          "{N} écoute toute l'histoire, tout près de sa sœur."
        ]
      }
    },
    B: {
      palabra: {texto:"le bébé", silabas:["le", "bébé"]},
      intro: "Chut ! Le bébé est dans son berceau.",
      frase: {texto:"Chut ! Le bébé dort.", partes:["Chut !", "Le bébé dort."]},
      respuesta: "Areu, areu…",
      cuento: {
        titulo: "Le bébé qui ne dormait pas",
        paginas: [
          "*Le bébé* est dans son berceau, mais il ne veut pas dormir !",
          "« Chut ! » dit {N}, et lui chante une chanson.",
          "Le bébé bâille : aaah…",
          "Et il s'endort tout doucement. Chut ! Le bébé dort."
        ]
      }
    },
    C: {
      palabra: {texto:"le lit", silabas:["le", "lit"]},
      intro: "Voici ta chambre. Regarde ce joli lit !",
      frase: {texto:"Bonne nuit !", partes:["Bonne", "nuit !"]},
      respuesta: "Fais de beaux rêves ! À demain.",
      cuento: {
        titulo: "Au lit !",
        paginas: [
          "C'est la nuit. {N} met son pyjama.",
          "Hop, dans *le lit* : boing, boing !",
          "Papa fait un bisou : « Bonne nuit ! »",
          "« À demain ! » dit {N}, et ferme les yeux."
        ]
      }
    }
  },
  final: {
    pregunta: "Allô, mon trésor ! Comment ça va ?",
    frase: {texto:"Très bien ! Je t'aime fort, mamie !", partes:["Très bien !", "Je t'aime fort,", "mamie !"]},
    despedida: "Gros bisous !",
    chau: "Au revoir, mamie !",
    lograste: "Bravo ! Tu as dit bonjour à toute la famille !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : mamie t'appelle au téléphone !",
    ppFinal: "Gagne tous les tampons, et après, on parle avec mamie !",
    otraVez: "Encore une journée à la maison ! Gagne encore les tampons.",
    otraVezB: "Encore un jour"
  },
  microjuego: {
    titulo: "Le gâteau de la famille !",
    intro: "Décore le gâteau ! Touche quelque chose de bon, puis touche le gâteau.",
    soplar: "On souffle les bougies !",
    mas: "Mets encore quelques décorations !",
    listo: "Quel beau gâteau ! Hourra !",
    ingredientes: [{texto:"la crème"}, {texto:"la fraise"}, {texto:"le chocolat"}, {texto:"les vermicelles"}, {texto:"la cerise"}, {texto:"la bougie"}]
  },
  palabrasExtra: [
    {texto:"mamie", silabas:["ma", "mie"]},
    {texto:"papi", silabas:["pa", "pi"]},
    {texto:"la famille", silabas:["la", "fa", "mille"]},
    {texto:"le canapé", silabas:["le", "ca", "napé"]},
    {texto:"le téléphone", silabas:["le", "télé", "phone"]}
  ],
  frasesExtra: [
    {texto:"Bonjour !", partes:["Bonjour !"]},
    {texto:"Comment ça va ?", partes:["Comment", "ça va ?"]},
    {texto:"Très bien, merci.", partes:["Très bien,", "merci."]},
    {texto:"Je t'aime !", partes:["Je t'aime !"]},
    {texto:"À demain !", partes:["À demain !"]}
  ],
  preguntas: [
    {p:"Qui fait la soupe ?", r:"Maman !"},
    {p:"Qui lit le journal sur le canapé ?", r:"Papa !"},
    {p:"Qui fait ouaf, ouaf ?", r:"Le chien !"},
    {p:"Où est-ce qu'on dort ?", r:"Dans le lit !"},
    {p:"Qui est le plus petit de la famille ?", r:"Le bébé !"},
    {p:"Avec quoi on parle à mamie ?", r:"Avec le téléphone !"},
    {p:"Qui nous lit des histoires ?", r:"La sœur !"},
    {p:"Qui construit des tours de cubes ?", r:"Le frère !"},
    {p:"Qui nous appelle au téléphone ?", r:"Mamie !"},
    {p:"Où est-ce qu'on s'assoit pour se reposer ?", r:"Sur le canapé !"}
  ],
  objetos: {"#":"le mur", b:"le banc", p:"la plante", m:"la table", f:"les fleurs", r:"l'arbre", s:"le canapé", j:"les jouets", "~":"la porte"}
});
