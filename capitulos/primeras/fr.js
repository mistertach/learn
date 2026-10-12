/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('primeras', 'fr', {
  titulo: "Bonjour !",
  lugar: {texto:"la cabane", silabas:["la", "ca", "bane"]},
  bienvenida: "Nous voilà à la cabane dans l'arbre !",
  niveles: [{nombre:"Le jardin", numTexto:"zéro"}, {nombre:"Le tronc", numTexto:"un"}, {nombre:"La cabane", numTexto:"deux"}],
  estaciones: {
    H: {
      palabra: {texto:"bonjour", silabas:["bon", "jour"]},
      intro: "Quand on arrive, on dit bonjour.",
      frase: {texto:"Bonjour ! Comment ça va ?", partes:["Bonjour !", "Comment ça va ?"]},
      respuesta: "Très bien !",
      cuento: {
        titulo: "Bonjour, mon amie !",
        paginas: [
          "La petite lapine dit *bonjour* en faisant coucou de la main.",
          "{N} lui répond : « Bonjour ! Comment ça va ? »",
          "« Très bien ! » dit la petite lapine, et elle fait un bond.",
          "Maintenant, ils sont amis !"
        ]
      }
    },
    S: {
      palabra: {texto:"oui", silabas:["oui"]},
      intro: "Quand on veut quelque chose, on dit oui.",
      frase: {texto:"Oui, s'il te plaît !", partes:["Oui,", "s'il te plaît !"]},
      respuesta: "Tiens, voilà !",
      cuento: {
        titulo: "Le biscuit",
        paginas: [
          "Le petit ours avait un biscuit. « Tu en veux ? »",
          "« *Oui*, s'il te plaît ! » dit {N}.",
          "Miam, c'est bon !",
          "« Merci, petit ours ! »"
        ]
      }
    },
    N: {
      palabra: {texto:"non", silabas:["non"]},
      intro: "Quand on ne veut pas, on dit non.",
      frase: {texto:"Non, merci.", partes:["Non,", "merci."]},
      respuesta: "D'accord !",
      cuento: {
        titulo: "La soupe",
        paginas: [
          "Le petit chien apporte de la soupe chaude.",
          "{N} n'a pas faim. « *Non*, merci. »",
          "« D'accord ! » dit le petit chien.",
          "Plus tard, ils mangent une glace. Ça, oui !"
        ]
      }
    },
    G: {
      palabra: {texto:"merci", silabas:["mer", "ci"]},
      intro: "Quand on nous donne quelque chose, on dit merci.",
      frase: {texto:"Merci beaucoup !", partes:["Merci", "beaucoup !"]},
      respuesta: "De rien !",
      cuento: {
        titulo: "La fleur",
        paginas: [
          "La petite chatte avait un cœur énorme.",
          "Elle offre une fleur à {N}.",
          "« *Merci* beaucoup ! » dit {N}.",
          "« De rien ! » C'est si bien de dire merci !"
        ]
      }
    },
    A: {
      palabra: {texto:"l'eau", silabas:["l'eau"]},
      intro: "Quand on a soif, on demande de l'eau.",
      frase: {texto:"Je voudrais de l'eau.", partes:["Je voudrais", "de l'eau."]},
      respuesta: "Tiens, voilà !",
      cuento: {
        titulo: "Il fait chaud !",
        paginas: [
          "Il fait chaud ! {N} a soif.",
          "« Je voudrais de *l'eau* », dit {N} à l'ours.",
          "Glou, glou, glou ! Qu'elle est fraîche !",
          "« Merci ! » Plus du tout soif !"
        ]
      }
    },
    M: {
      palabra: {texto:"encore", silabas:["en", "core"]},
      intro: "Quand on en veut d'autres, on dit encore.",
      frase: {texto:"Encore, s'il te plaît !", partes:["Encore,", "s'il te plaît !"]},
      respuesta: "Encore un !",
      cuento: {
        titulo: "Encore des ballons !",
        paginas: [
          "Le petit chat lance des ballons : un !",
          "« *Encore*, s'il te plaît ! » applaudit {N}. Deux, trois !",
          "Encore et encore ! Que de bulles !",
          "Et ils dansent jusqu'à être fatigués !"
        ]
      }
    },
    C: {
      palabra: {texto:"au revoir", silabas:["au", "re", "voir"]},
      intro: "Quand on s'en va, on dit au revoir.",
      frase: {texto:"Au revoir ! À demain !", partes:["Au revoir !", "À demain !"]},
      respuesta: "Au revoir, au revoir !",
      cuento: {
        titulo: "À demain",
        paginas: [
          "C'est déjà la nuit. La lune est sortie.",
          "« *Au revoir* ! À demain ! » dit {N}.",
          "Le chien va dormir : zzz…",
          "Au revoir, au revoir ! À demain !"
        ]
      }
    }
  },
  final: {
    pregunta: "Tu connais déjà plein de mots ! On part à l'aventure ?",
    frase: {texto:"Oui ! On y va !", partes:["Oui !", "On y va !"]},
    palabras: ["Bonjour !", "Oui !", "Non !", "Merci !", "De l'eau !", "Encore !", "Au revoir !"],
    despedida: "En route pour l'aventure !",
    chau: "Au revoir, la cabane !",
    lograste: "Bravo ! Tu connais tes premiers mots !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : tes amis t'attendent !",
    ppFinal: "Prends tous les tampons, et ensuite on va dire bonjour aux amis !",
    otraVez: "Encore une journée à la cabane ! Reprends les tampons.",
    otraVezB: "Encore une journée"
  },
  microjuego: {
    titulo: "Des bulles de couleur !",
    intro: "Écoute la couleur et éclate cette bulle.",
    pide: c => `Trouve le ${c} et éclate la bulle !`,
    esa: c => `Ça, c'est le ${c} !`,
    libre: "Maintenant, éclate toutes les bulles que tu veux !",
    fin: "Tu as éclaté {n} bulles !"
  },
  palabrasExtra: [
    {texto:"rouge", silabas:["rouge"]},
    {texto:"bleu", silabas:["bleu"]},
    {texto:"jaune", silabas:["jaune"]},
    {texto:"vert", silabas:["vert"]}
  ],
  frasesExtra: [
    {texto:"Comment tu t'appelles ?", partes:["Comment", "tu t'appelles ?"]},
    {texto:"Bonjour !", partes:["Bonjour !"]},
    {texto:"Bonne nuit !", partes:["Bonne", "nuit !"]},
    {texto:"Je t'aime !", partes:["Je t'aime !"]},
    {texto:"Encore une fois !", partes:["Encore", "une fois !"]}
  ],
  preguntas: [
    {p:"Qu'est-ce qu'on dit quand on arrive ?", r:"Bonjour !"},
    {p:"Qu'est-ce qu'on dit quand on s'en va ?", r:"Au revoir !"},
    {p:"Lequel dit oui ?", r:"Celui-là !"},
    {p:"Lequel dit non ?", r:"Celui-là !"},
    {p:"Qu'est-ce qu'on dit quand on reçoit un cadeau ?", r:"Merci !"},
    {p:"Qu'est-ce qu'on boit quand on a soif ?", r:"De l'eau !"},
    {p:"Qu'est-ce qu'on dit pour en avoir encore ?", r:"Encore !"},
    {p:"Lequel est le rouge ?", r:"Celui-là !"},
    {p:"Lequel est le bleu ?", r:"Celui-là !"},
    {p:"Lequel est le jaune ?", r:"Celui-là !"}
  ],
  objetos: {"#":"la clôture", r:"l'arbre", f:"les fleurs", b:"le banc", j:"les jouets", s:"le canapé", "~":"la porte"}
});
