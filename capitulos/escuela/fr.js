/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('escuela', 'fr', {
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
