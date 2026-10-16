/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('primeras', 'fr', {
  charlas: [
    {titulo:"Parler avec la lapine", chau:"Enchantée ! À bientôt !", pasos:[
      {di:"Bonjour ! Comment tu t'appelles ?", op:[{t:"Je m'appelle {N}.", r:"Quel joli nom !"}, {t:"Bonjour ! Je suis {N}.", r:"Enchantée, {N} !"}]},
      {op:[{t:"Comment ça va ?", r:"Très bien, merci !"}, {t:"Et toi, comment tu t'appelles ?", r:"Je m'appelle Pompon."}]},
      {di:"Tu aimes jouer ?", op:[{t:"Oui, j'aime jouer !", r:"Moi aussi ! Jouer, c'est le mieux."}, {t:"Oui, beaucoup !", r:"Moi aussi ! J'adore ça."}]},
      {op:[{t:"Tu veux être mon amie ?", r:"Oui ! On est amies maintenant !"}, {t:"À quoi tu aimes jouer ?", r:"J'aime jouer à cache-cache."}]}]},
    {titulo:"Parler avec la chatte", chau:"Merci, mon ami ! Au revoir !", pasos:[
      {di:"Regarde, j'ai un cadeau pour toi !", op:[{t:"Merci !", r:"De rien !"}, {t:"Merci beaucoup !", r:"De rien, mon ami !"}]},
      {op:[{t:"C'est quoi ?", r:"C'est une petite étoile !"}, {t:"C'est pour moi ?", r:"Oui, c'est pour toi !"}]},
      {di:"Tu veux la partager avec moi ?", op:[{t:"Oui, partageons !", r:"Comme c'est bien ! Partager, c'est beau."}, {t:"Oui, s'il te plaît !", r:"Tiens, la moitié pour toi et la moitié pour moi."}]},
      {op:[{t:"Elle te plaît ?", r:"Je l'adore !"}, {t:"Je peux te faire un câlin ?", r:"Oui, un gros câlin !"}]}]},
    {titulo:"Parler avec l'ours", chau:"Ça fait du bien ! À bientôt !", pasos:[
      {di:"J'ai soif. Tu veux de l'eau ?", op:[{t:"Oui, de l'eau, s'il te plaît !", r:"Tiens. À ta santé !"}, {t:"Oui, moi aussi j'ai soif !", r:"Voici un verre pour toi."}]},
      {op:[{t:"Elle est froide, l'eau ?", r:"Oui, bien fraîche !"}, {t:"D'où vient l'eau ?", r:"Du robinet et de la pluie !"}]},
      {di:"Tu en veux encore ?", op:[{t:"Oui, encore, s'il te plaît !", r:"Bien sûr ! En voilà encore."}, {t:"Non, merci. Je n'ai plus soif.", r:"D'accord. Merci d'avoir bu avec moi."}]},
      {op:[{t:"Tu aimes l'eau ?", r:"Oui, c'est ma préférée !"}, {t:"On joue ?", r:"Oui ! Jouons !"}]}]},
    {titulo:"Parler à la porte", chau:"Au revoir, mon ami ! On se voit pendant l'aventure !", pasos:[
      {di:"Tu connais plein de mots maintenant ! On part à l'aventure ?", op:[{t:"Oui, allons-y !", r:"Hourra ! Viens avec moi."}, {t:"Oui, allons-y !", r:"Super ! En route !"}]},
      {op:[{t:"Où est-ce qu'on va ?", r:"Dans plein de nouveaux endroits !"}, {t:"Qui vient avec nous ?", r:"Tous tes amis !"}]},
      {di:"Tu es heureux ?", op:[{t:"Oui, je suis très heureux !", r:"Moi aussi ! Quelle joie."}, {t:"Oui, j'adore les aventures !", r:"Moi aussi ! Les aventures, c'est amusant."}]},
      {op:[{t:"Toi aussi, tu es contente ?", r:"Oui, très contente !"}, {t:"On peut y aller maintenant ?", r:"Oui ! En route !"}]}]}
  ],
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
