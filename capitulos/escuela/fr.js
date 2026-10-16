/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('escuela', 'fr', {
  charlas: [
    {titulo:"Parler à la porte de l'école", chau:"Passe une bonne journée à l'école !", pasos:[
      {di:"Bonjour ! Tu as ton sac à dos ?", op:[{t:"Oui, voici mon sac à dos !", r:"Très bien ! Allons à l'école."}, {t:"Oui, et il est plein de choses !", r:"Quel grand sac à dos !"}]},
      {op:[{t:"Qu'est-ce qu'il y a dans ton sac ?", r:"Mon déjeuner et un livre."}, {t:"De quelle couleur est ton sac ?", r:"Il est violet !"}]},
      {di:"Tu as envie d'apprendre aujourd'hui ?", op:[{t:"Oui, allons-y !", r:"Merveilleux ! Entrons."}, {t:"Oui, j'adore l'école !", r:"Moi aussi ! L'école, c'est amusant."}]},
      {op:[{t:"Tu aimes l'école ?", r:"J'adore !"}, {t:"Où est ma classe ?", r:"Au bout du couloir, à gauche !"}]}]},
    {titulo:"Parler avec la lectrice", chau:"Lire, c'est amusant ! À bientôt !", pasos:[
      {di:"Je lis un livre. Tu veux lire avec moi ?", op:[{t:"Oui, lisons !", r:"Viens t'asseoir à côté de moi."}, {t:"Oui, j'adore les livres !", r:"Moi aussi ! Regarde les images."}]},
      {op:[{t:"De quoi parle le livre ?", r:"D'un petit éléphant."}, {t:"De quelle couleur est la couverture ?", r:"Elle est bleue !"}]},
      {di:"On ouvre quelle page ?", op:[{t:"La première page !", r:"Il était une fois…"}, {t:"Cette page !", r:"Oh, regarde cette image !"}]},
      {op:[{t:"Tu le relis ?", r:"Bien sûr ! Encore une fois."}, {t:"Tu aimes lire ?", r:"J'adore lire !"}]}]},
    {titulo:"Parler au calendrier", chau:"Maintenant tu connais les jours ! À demain !", pasos:[
      {di:"Tu connais les jours de la semaine ?", op:[{t:"Oui, lundi, mardi, mercredi !", r:"Très bien ! Continue."}, {t:"Oui, j'en connais quelques-uns !", r:"Super ! Apprenons-les tous."}]},
      {op:[{t:"Combien de jours y a-t-il dans une semaine ?", r:"Sept jours !"}, {t:"Quel jour se repose-t-on ?", r:"Le dimanche !"}]},
      {di:"Quel est ton jour préféré ?", op:[{t:"Le samedi !", r:"Le mien aussi ! Pas d'école !"}, {t:"Le vendredi !", r:"Le mien aussi ! Le week-end arrive."}]},
      {op:[{t:"Quel est ton jour préféré ?", r:"Le dimanche, parce qu'on déjeune ensemble !"}, {t:"Quel jour vient après lundi ?", r:"Mardi !"}]}]},
    {titulo:"Parler avec le maître", chau:"La classe est finie ! À demain !", pasos:[
      {di:"Bonjour, les enfants ! On chante ?", op:[{t:"Oui, chantons !", r:"Merveilleux ! Écoutez d'abord."}, {t:"Oui, j'adore chanter !", r:"Moi aussi ! Commençons."}]},
      {op:[{t:"Qu'est-ce qu'on va chanter ?", r:"Les jours de la semaine !"}, {t:"Je peux chanter avec mes amis ?", r:"Bien sûr ! Tous ensemble."}]},
      {di:"Tu as appris quelque chose aujourd'hui ?", op:[{t:"Oui, j'ai appris beaucoup de mots !", r:"Excellent ! Je suis fier de toi."}, {t:"Oui, j'ai appris les jours !", r:"Très bien ! Bravo."}]},
      {op:[{t:"Je peux revenir demain ?", r:"Bien sûr ! L'école est ouverte tous les jours."}, {t:"J'ai bien fait ?", r:"Tu as très bien fait !"}]}]}
  ],
  titulo: "L'école",
  lugar: {texto:"l'école", silabas:["lé", "cole"]},
  bienvenida: "Nous voilà à l'école !",
  niveles: [{nombre:"L'entrée", numTexto:"zéro"}, {nombre:"La classe", numTexto:"un"}, {nombre:"Le deuxième étage", numTexto:"deux"}],
  estaciones: {
    M: {
      palabra: {texto:"le cartable", silabas:["le", "car", "table"]},
      intro: "Bienvenue ! Je suis la maîtresse. Accroche ton cartable.",
      frase: {texto:"Bonjour, maîtresse !", partes:["Bonjour,", "maîtresse !"]},
      respuesta: "Bonjour ! Contente de te voir !",
      cuento: {
        titulo: "Le premier jour",
        paginas: [
          "*Le cartable* de {N} était prêt pour l'école.",
          "« Bonjour, maîtresse ! » dit {N}. « Bonjour ! Contente de te voir ! »",
          "{N} ouvre le cartable : un livre, un crayon… tout est prêt !",
          "C'est parti pour l'école ! Hourra !"
        ]
      }
    },
    Z: {
      palabra: {texto:"le crayon", silabas:["le", "cra", "yon"]},
      intro: "Oh ! Où est ton crayon ?",
      frase: {texto:"Je peux prendre ton crayon ?", partes:["Je peux prendre", "ton crayon ?"]},
      respuesta: "Bien sûr ! Tiens !",
      cuento: {
        titulo: "Le crayon prêté",
        paginas: [
          "La petite chatte avait *un crayon* jaune.",
          "{N} ne trouvait plus son crayon… quelle histoire !",
          "« Je peux prendre ton crayon ? » « Bien sûr ! Tiens ! »",
          "{N} dessine une énorme étoile. « Merci ! »"
        ]
      }
    },
    B: {
      palabra: {texto:"le livre", silabas:["le", "livre"]},
      intro: "Voici le coin des livres.",
      frase: {texto:"Je peux lire ce livre ?", partes:["Je peux lire", "ce livre ?"]},
      respuesta: "Oui ! C'est une histoire de pirates.",
      cuento: {
        titulo: "L'histoire de pirates",
        paginas: [
          "La petite lapine avait *un livre* plein d'images.",
          "« Je peux lire ce livre ? » demande {N}.",
          "C'était une histoire de pirates avec un trésor caché !",
          "« Encore, encore ! » demande {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"les ciseaux", silabas:["les", "ci", "seaux"]},
      intro: "Aujourd'hui, on découpe des formes.",
      frase: {texto:"Je découpe un rond.", partes:["Je découpe", "un rond."]},
      respuesta: "Qu'il est bien rond !",
      cuento: {
        titulo: "Des ronds en papier",
        paginas: [
          "Le petit chien apporte *les ciseaux* et un papier rouge.",
          "{N} découpe doucement : un rond !",
          "Et un autre, et encore un ! Des ronds partout !",
          "On les colle au mur. Qu'ils sont beaux !"
        ]
      }
    },
    C: {
      palabra: {texto:"les feutres", silabas:["les", "feutres"]},
      intro: "On dessine avec les feutres !",
      frase: {texto:"Je dessine un triangle.", partes:["Je dessine", "un triangle."]},
      respuesta: "Un triangle vert ! Qu'il est beau !",
      cuento: {
        titulo: "Le dessin magique",
        paginas: [
          "Le petit chat gris avait une boîte de *feutres*.",
          "{N} dessine un triangle vert.",
          "Ensuite, un carré et une étoile… quel beau dessin !",
          "Et tout le monde danse autour du dessin !"
        ]
      }
    },
    K: {
      palabra: {texto:"le calendrier", silabas:["le", "ca", "len", "drier"]},
      intro: "Regarde le calendrier. Quel jour sommes-nous ?",
      frase: {texto:"Aujourd'hui, c'est lundi.", partes:["Aujourd'hui,", "c'est lundi."]},
      respuesta: "Et demain, c'est mardi !",
      cuento: {
        titulo: "Quel jour sommes-nous ?",
        paginas: [
          "Au mur, il y avait *un calendrier* avec plein de jours.",
          "{N} le regarde : « Aujourd'hui, c'est lundi. »",
          "« Et le samedi, pas d'école ! » applaudit la petite ourse.",
          "Lundi, mardi, mercredi ! Il faut apprendre tous les jours !"
        ]
      }
    },
    N: {
      palabra: {texto:"la cloche", silabas:["la", "cloche"]},
      intro: "Driiing ! La cloche sonne.",
      frase: {texto:"Je peux aller à la récré ?", partes:["Je peux aller", "à la récré ?"]},
      respuesta: "Oui ! On va jouer !",
      cuento: {
        titulo: "La récré !",
        paginas: [
          "Driiing ! *La cloche* a sonné.",
          "« Je peux aller à la récré ? » demande {N}.",
          "{N} part en courant derrière le ballon.",
          "Que c'est bien, la récré !"
        ]
      }
    }
  },
  final: {
    pregunta: "On chante les jours de la semaine ?",
    frase: {texto:"Oui ! Chantons !", partes:["Oui !", "Chantons !"]},
    dias: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
    despedida: "À demain !",
    chau: "Au revoir, l'école !",
    lograste: "Bravo ! Tu as appris plein de choses à l'école !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : on va chanter avec la maîtresse !",
    ppFinal: "Prends tous les tampons, et ensuite on chante avec la maîtresse !",
    otraVez: "Encore un jour d'école ! Reprends les tampons.",
    otraVezB: "Encore un jour"
  },
  microjuego: {
    maneja: "Maintenant, conduis le train ! Appuie longtemps pour aller vite.", vamos: "On y va !", bocina: "Tchou, tchou !", llegamos: "On est arrivés ! Bravo !",
    titulo: "Le train des formes !",
    intro: "Écoute quelle forme va dans le train, et touche-la.",
    fin: "Tu as mis {n} formes dans le train !",
    chu: "Tchou, tchou ! Le train s'en va !",
    ingredientes: [
      {texto:"le rond", pon:"Mets le rond dans le train.", est:"La gare du rond !"},
      {texto:"le carré", pon:"Mets le carré dans le train.", est:"La gare du carré !"},
      {texto:"le triangle", pon:"Mets le triangle dans le train.", est:"La gare du triangle !"},
      {texto:"l'étoile", pon:"Mets l'étoile dans le train.", est:"La gare de l’étoile !"},
      {texto:"le cœur", pon:"Mets le cœur dans le train.", est:"La gare du cœur !"}
    ]
  },
  palabrasExtra: [
    {texto:"le rond", silabas:["le", "rond"]},
    {texto:"le carré", silabas:["le", "car", "ré"]},
    {texto:"le triangle", silabas:["le", "tri", "angle"]},
    {texto:"l'étoile", silabas:["lé", "toile"]},
    {texto:"le tableau", silabas:["le", "ta", "bleau"]}
  ],
  frasesExtra: [
    {texto:"Je lève la main.", partes:["Je lève", "la main."]},
    {texto:"Je peux aller aux toilettes ?", partes:["Je peux aller", "aux toilettes ?"]},
    {texto:"Je peux boire de l'eau ?", partes:["Je peux", "boire de l'eau ?"]},
    {texto:"Tu me prêtes ta gomme ?", partes:["Tu me prêtes", "ta gomme ?"]},
    {texto:"À demain, maîtresse !", partes:["À demain,", "maîtresse !"]}
  ],
  preguntas: [
    {p:"Avec quoi on écrit ?", r:"Avec le crayon !"},
    {p:"Avec quoi on découpe ?", r:"Avec les ciseaux !"},
    {p:"Qu'est-ce qu'on lit ?", r:"Un livre !"},
    {p:"Où est-ce qu'on met les affaires d'école ?", r:"Dans le cartable !"},
    {p:"Avec quoi on colorie ?", r:"Avec les feutres !"},
    {p:"Où est-ce qu'on regarde les jours ?", r:"Sur le calendrier !"},
    {p:"Qu'est-ce qui sonne pour la récré ?", r:"La cloche !"},
    {p:"Quelle forme est toute ronde ?", r:"Le rond !"},
    {p:"Quelle forme a trois pointes ?", r:"Le triangle !"},
    {p:"Quelle forme a quatre côtés pareils ?", r:"Le carré !"}
  ],
  objetos: {"#":"le mur", q:"le pupitre", p:"la plante", b:"le banc", "~":"la porte"}
});
