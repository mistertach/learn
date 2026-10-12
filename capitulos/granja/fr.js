/* =========================================================
   CAPÍTULO 8 · LA GRANJA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('granja', 'fr', {
  titulo: "La ferme",
  lugar: {texto:"la ferme", silabas:["la", "ferme"]},
  bienvenida: "Nous voilà à la ferme !",
  niveles: [{nombre:"La grange", numTexto:"zéro"}, {nombre:"L'enclos", numTexto:"un"}, {nombre:"La mare", numTexto:"deux"}],
  estaciones: {
    V: {
      palabra: {texto:"la vache", silabas:["la", "vache"]},
      intro: "Bonjour ! Aujourd'hui, tu travailles à la ferme : voilà ton chapeau ! Regarde, c'est la vache.",
      frase: {texto:"La vache fait meuh.", partes:["La vache", "fait meuh."]},
      respuesta: "Meuh ! Et je te donne du lait !",
      cuento: {
        titulo: "La vache et le lait",
        paginas: [
          "À la ferme vivait *une vache* noire et blanche.",
          "« Qu'elle est grande ! » dit {N}. Et la vache répond : « Meuh ! »",
          "La vache donne à {N} une bouteille de lait tout frais.",
          "« Merci, la vache ! » Meuh !"
        ]
      }
    },
    H: {
      palabra: {texto:"le cochon", silabas:["le", "co", "chon"]},
      intro: "Le cochon adore la boue.",
      frase: {texto:"Le cochon est sale.", partes:["Le cochon", "est sale."]},
      respuesta: "Groin, groin ! J'adore la boue !",
      cuento: {
        titulo: "Le cochon tout sale",
        paginas: [
          "*Le cochon* se roulait dans la boue : splatch, splatch !",
          "« Le cochon est sale ! » rit {N}.",
          "{N} le lave avec de l'eau et du savon. Que de bulles !",
          "Maintenant, il est tout propre ! Groin, groin."
        ]
      }
    },
    O: {
      palabra: {texto:"le mouton", silabas:["le", "mou", "ton"]},
      intro: "Voici le mouton. Touche-le, il est tout doux !",
      frase: {texto:"Le mouton est doux.", partes:["Le mouton", "est doux."]},
      respuesta: "Bêêê ! Ma laine est toute douce !",
      cuento: {
        titulo: "Le mouton qui dort",
        paginas: [
          "*Le mouton* avait beaucoup, beaucoup de laine.",
          "{N} le touche : « Le mouton est doux ! »",
          "Le mouton bâille… et s'endort debout. Zzz !",
          "Quand il se réveille, il dit « Bêêê ! » et saute de joie."
        ]
      }
    },
    K: {
      palabra: {texto:"le coq", silabas:["le", "coq"]},
      intro: "Le coq réveille tout le monde le matin.",
      frase: {texto:"Bonjour, le coq !", partes:["Bonjour,", "le coq !"]},
      respuesta: "Cocorico ! Debout !",
      cuento: {
        titulo: "Cocorico !",
        paginas: [
          "Très tôt, *le coq* chante : Cocorico !",
          "{N} et la petite lapine avaient encore sommeil. Zzz !",
          "« Bonjour, le coq ! » dit {N}.",
          "Debout, au travail ! Et dans le nid, ils trouvent un œuf."
        ]
      }
    },
    B: {
      palabra: {texto:"le cheval", silabas:["le", "che", "val"]},
      intro: "Regarde ce beau cheval !",
      frase: {texto:"Le cheval est rapide.", partes:["Le cheval", "est rapide."]},
      respuesta: "Hiii ! On va galoper !",
      cuento: {
        titulo: "Au galop",
        paginas: [
          "*Le cheval* mangeait de l'herbe, tranquille.",
          "Tout à coup, il part en courant : tagada, tagada !",
          "{N} court derrière : « Le cheval est rapide ! »",
          "À la fin, le cheval revient et fait un bisou à {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"le canard", silabas:["le", "ca", "nard"]},
      intro: "Voici la mare des canards.",
      frase: {texto:"Le canard nage.", partes:["Le canard", "nage."]},
      respuesta: "Coin, coin ! L'eau est toute fraîche !",
      cuento: {
        titulo: "Le canard nageur",
        paginas: [
          "Dans la mare nageait *un canard* vert.",
          "Le canard nage d'un côté à l'autre : coin, coin !",
          "Splash ! Il plonge sous l'eau… et ressort avec des bulles !",
          "{N} danse avec le canard : coin, coin, coin !"
        ]
      }
    },
    Y: {
      palabra: {texto:"le poussin", silabas:["le", "pous", "sin"]},
      intro: "Chut ! Quelque chose bouge dans l'œuf.",
      frase: {texto:"Le poussin est petit.", partes:["Le poussin", "est petit."]},
      respuesta: "Piou, piou !",
      cuento: {
        titulo: "Les poussins",
        paginas: [
          "Il y avait un œuf qui bougeait : crac, crac…",
          "Et il en sort *un poussin* tout jaune !",
          "Et puis un autre… et encore un ! Trois petits poussins !",
          "« Piou, piou ! » disent-ils à {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "C'est déjà la nuit. On dit bonne nuit aux animaux ?",
    frase: {texto:"Bonne nuit, les animaux !", partes:["Bonne nuit,", "les animaux !"]},
    sonidos: ["Meuh !", "Groin, groin !", "Bêêê !", "Cocorico !", "Hiii !", "Coin, coin !", "Piou, piou !"],
    despedida: "À demain !",
    chau: "Au revoir, la ferme !",
    lograste: "Bravo ! Grâce à toi, tous les animaux sont contents !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : on va dire bonne nuit aux animaux !",
    ppFinal: "Prends tous les tampons, et ensuite on dit bonne nuit aux animaux !",
    otraVez: "Encore une journée à la ferme ! Reprends les tampons.",
    otraVezB: "Encore une journée"
  },
  microjuego: {
    titulo: "À table, les animaux !",
    intro: "Les animaux ont faim. Écoute et touche l'animal.",
    fin: "Tu as nourri {n} animaux !",
    ingredientes: [
      {texto:"la vache", dale:"Donne à manger à la vache.", sonido:"Meuh !"},
      {texto:"le cochon", dale:"Donne à manger au cochon.", sonido:"Groin, groin !"},
      {texto:"le mouton", dale:"Donne à manger au mouton.", sonido:"Bêêê !"},
      {texto:"le coq", dale:"Donne à manger au coq.", sonido:"Cocorico !"},
      {texto:"le cheval", dale:"Donne à manger au cheval.", sonido:"Hiii !"},
      {texto:"le canard", dale:"Donne à manger au canard.", sonido:"Coin, coin !"}
    ]
  },
  palabrasExtra: [
    {texto:"l'œuf", silabas:["l'œuf"]},
    {texto:"le lait", silabas:["le", "lait"]},
    {texto:"le tracteur", silabas:["le", "trac", "teur"]},
    {texto:"la grange", silabas:["la", "grange"]}
  ],
  frasesExtra: [
    {texto:"Qu'elle est grande !", partes:["Qu'elle est grande !"]},
    {texto:"Qu'il est petit !", partes:["Qu'il est petit !"]},
    {texto:"Qu'il est rapide !", partes:["Qu'il est rapide !"]},
    {texto:"Qu'il est sale !", partes:["Qu'il est sale !"]},
    {texto:"Qu'il est doux !", partes:["Qu'il est doux !"]}
  ],
  preguntas: [
    {p:"Qui fait meuh ?", r:"La vache !"},
    {p:"Qui fait groin, groin ?", r:"Le cochon !"},
    {p:"Qui fait cocorico ?", r:"Le coq !"},
    {p:"Qui fait coin, coin ?", r:"Le canard !"},
    {p:"Qui a beaucoup de laine ?", r:"Le mouton !"},
    {p:"Qui court très vite ?", r:"Le cheval !"},
    {p:"Qui fait piou, piou ?", r:"Le poussin !"},
    {p:"Qu'est-ce que la vache nous donne ?", r:"Le lait !"},
    {p:"Qu'est-ce que la poule pond ?", r:"Un œuf !"},
    {p:"Qu'est-ce que le fermier conduit ?", r:"Le tracteur !"}
  ],
  objetos: {"#":"la clôture", h:"la botte de foin", r:"l'arbre", f:"les fleurs", "~":"la porte"}
});
