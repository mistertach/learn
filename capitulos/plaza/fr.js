/* =========================================================
   CAPÍTULO 6 · LA PLAZA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('plaza', 'fr', {
  titulo: "Le parc",
  lugar: {texto:"le parc", silabas:["le", "parc"]},
  bienvenida: "Nous voilà au parc !",
  niveles: [{nombre:"Les balançoires", numTexto:"zéro"}, {nombre:"Le bac à sable", numTexto:"un"}, {nombre:"La tour", numTexto:"deux"}],
  estaciones: {
    H: {
      palabra: {texto:"la balançoire", silabas:["la", "ba", "lan", "çoire"]},
      intro: "Voici les balançoires. On se balance !",
      frase: {texto:"Pousse-moi, s'il te plaît !", partes:["Pousse-moi,", "s'il te plaît !"]},
      respuesta: "C'est parti ! Plus haut !",
      cuento: {
        titulo: "Plus haut",
        paginas: [
          "Le petit ours se balançait sur *la balançoire* : en avant, en arrière !",
          "« Pousse-moi, s'il te plaît ! » demande {N}.",
          "Plus haut, plus haut ! {N} lève les bras : on dirait qu'on vole !",
          "Ensuite, c'est le tour du petit ours. Que c'est bien de se balancer !"
        ]
      }
    },
    S: {
      palabra: {texto:"la bascule", silabas:["la", "bas", "cule"]},
      intro: "La bascule ! Pour jouer, il faut un ami.",
      frase: {texto:"En haut et en bas !", partes:["En haut", "et en bas !"]},
      respuesta: "Je monte, tu descends !",
      cuento: {
        titulo: "En haut et en bas",
        paginas: [
          "*La bascule* était toute seule, elle attendait des amis.",
          "La petite lapine demande à {N} : « On joue ? »",
          "En haut et en bas ! En haut et en bas ! La lapine saute, {N} saute !",
          "Que c'est amusant ! Ils applaudissent tous les deux."
        ]
      }
    },
    O: {
      palabra: {texto:"le ballon", silabas:["le", "bal", "lon"]},
      intro: "Ici, on joue au ballon.",
      frase: {texto:"Je tape dans le ballon !", partes:["Je tape", "dans le ballon !"]},
      respuesta: "Buuut !",
      cuento: {
        titulo: "But !",
        paginas: [
          "Le petit chien avait *un ballon* qui rebondissait sans arrêt.",
          "{N} court, court et… tape dans le ballon !",
          "Oh ! Le ballon roule loin, très loin.",
          "Et il entre dans le but ! Buuut ! {N} saute de joie."
        ]
      }
    },
    A: {
      palabra: {texto:"le seau", silabas:["le", "seau"]},
      intro: "Voici le bac à sable. Il y a un seau et une pelle !",
      frase: {texto:"Je fais un château de sable.", partes:["Je fais un château", "de sable."]},
      respuesta: "Quel joli château !",
      cuento: {
        titulo: "Le château de sable",
        paginas: [
          "La petite chatte avait *un seau* rouge et une pelle bleue.",
          "{N} s'accroupit et remplit le seau de sable.",
          "On le retourne et… voilà un château !",
          "« Quel joli château ! » Tout le monde applaudit."
        ]
      }
    },
    J: {
      palabra: {texto:"la corde à sauter", silabas:["la", "corde", "à", "sau", "ter"]},
      intro: "Tu sais sauter à la corde ?",
      frase: {texto:"Je saute à la corde !", partes:["Je saute", "à la corde !"]},
      respuesta: "Un, deux, trois ! Très bien !",
      cuento: {
        titulo: "Saute, saute !",
        paginas: [
          "Le petit chat gris avait *une corde à sauter*.",
          "{N} saute : un, deux, trois !",
          "Le petit chat saute aussi. Ils sautent tous les deux ensemble !",
          "Dix sauts ! Les bras en l'air !"
        ]
      }
    },
    B: {
      palabra: {texto:"les bulles", silabas:["les", "bulles"]},
      intro: "Regarde toutes ces bulles !",
      frase: {texto:"Je souffle des bulles !", partes:["Je souffle", "des bulles !"]},
      respuesta: "Regarde comme elles volent !",
      cuento: {
        titulo: "Les bulles",
        paginas: [
          "La petite lapine avait un flacon de *bulles*.",
          "{N} souffle tout doucement : fffou !",
          "Des bulles partout ! {N} tourne et tourne au milieu des bulles.",
          "Et tout le monde danse sous les bulles."
        ]
      }
    },
    T: {
      palabra: {texto:"le toboggan", silabas:["le", "to", "bog", "gan"]},
      intro: "Voici le toboggan. Il est très haut !",
      frase: {texto:"Je glisse sur le toboggan !", partes:["Je glisse", "sur le toboggan !"]},
      respuesta: "Youpi ! Que ça va vite !",
      cuento: {
        titulo: "Le toboggan géant",
        paginas: [
          "Dans la tour, il y avait *un toboggan* jaune, très très haut !",
          "{N} monte l'échelle : une marche, deux marches…",
          "« Je glisse sur le toboggan ! » Youpi ! Que ça va vite !",
          "{N} saute de joie : « Encore ! »"
        ]
      }
    }
  },
  final: {
    pregunta: "On joue à Jacques a dit ?",
    frase: {texto:"Oui ! Jouons !", partes:["Oui !", "Jouons !"]},
    ordenes: ["Jacques a dit : saute !", "Jacques a dit : tourne !", "Jacques a dit : tape dans tes mains !", "Jacques a dit : accroupis-toi !", "Jacques a dit : lève les bras !"],
    despedida: "Tu as super bien joué !",
    chau: "Au revoir, le parc !",
    lograste: "Bravo ! Tu as joué à tout dans le parc !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : on va jouer à Jacques a dit !",
    ppFinal: "Prends tous les tampons, et ensuite on joue à Jacques a dit !",
    otraVez: "Encore un après-midi au parc ! Reprends les tampons.",
    otraVezB: "Encore un après-midi"
  },
  microjuego: {
    correr: "On court avec le cerf-volant ! Appuie longtemps pour qu'il monte.",
    titulo: "Le cerf-volant !",
    intro: "Il y a du vent ! Écoute et emmène le cerf-volant jusqu'à l'étoile.",
    fin: "Tu as attrapé {n} étoiles !",
    dirs: ["En haut !", "En bas !", "À gauche !", "À droite !"]
  },
  palabrasExtra: [
    {texto:"le cerf-volant", silabas:["le", "cerf", "vo", "lant"]},
    {texto:"la pelle", silabas:["la", "pelle"]},
    {texto:"le château", silabas:["le", "châ", "teau"]},
    {texto:"la glace", silabas:["la", "glace"]}
  ],
  frasesExtra: [
    {texto:"C'est ton tour !", partes:["C'est", "ton tour !"]},
    {texto:"C'est mon tour !", partes:["C'est", "mon tour !"]},
    {texto:"Je saute très haut !", partes:["Je saute", "très haut !"]},
    {texto:"Cours, cours !", partes:["Cours,", "cours !"]},
    {texto:"Je voudrais une glace !", partes:["Je voudrais", "une glace !"]}
  ],
  preguntas: [
    {p:"Où est-ce qu'on glisse ? Youpi !", r:"Sur le toboggan !"},
    {p:"Où est-ce qu'on se balance ?", r:"Sur la balançoire !"},
    {p:"Dans quoi on tape avec le pied ?", r:"Dans le ballon !"},
    {p:"Qu'est-ce qu'on souffle ?", r:"Les bulles !"},
    {p:"Avec quoi on saute ?", r:"Avec la corde à sauter !"},
    {p:"Où est-ce qu'on monte et on descend ?", r:"Sur la bascule !"},
    {p:"Qu'est-ce qu'on fait avec le sable ?", r:"Un château !"},
    {p:"Qu'est-ce qui vole avec le vent ?", r:"Le cerf-volant !"},
    {p:"Qu'est-ce qu'on mange quand il fait chaud ?", r:"Une glace !"},
    {p:"Où est-ce qu'on met le sable ?", r:"Dans le seau !"}
  ],
  objetos: {"#":"la grille", r:"l'arbre", f:"les fleurs", b:"le banc", k:"le bac à sable", "~":"la porte"}
});
