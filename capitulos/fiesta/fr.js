/* =========================================================
   CAPÍTULO 10 · LA FIESTA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('fiesta', 'fr', {
  charlas: [
    {titulo:"Parler de l'invitation", chau:"On se voit à la fête !", pasos:[
      {di:"Bonjour ! On t'invite à une fête ! Tu veux venir ?", op:[{t:"Oui, je veux venir !", r:"Hourra ! Ça va être amusant."}, {t:"Oui, merci pour l'invitation !", r:"De rien ! On est contents que tu viennes."}]},
      {op:[{t:"Où est la fête ?", r:"Dans le grand jardin !"}, {t:"Qui d'autre vient ?", r:"Tous nos amis !"}]},
      {di:"Qu'est-ce que tu vas apporter ?", op:[{t:"Je vais apporter un cadeau.", r:"Comme c'est gentil ! Merci."}, {t:"Je vais apporter un grand sourire.", r:"Le plus beau des cadeaux !"}]},
      {op:[{t:"À quelle heure ça commence ?", r:"À quatre heures !"}, {t:"Il y aura un gâteau ?", r:"Oui, un énorme gâteau !"}]}]},
    {titulo:"Parler au calendrier", chau:"Joyeux anniversaire en avance ! À bientôt !", pasos:[
      {di:"Ton anniversaire, c'est dans quelle saison ?", op:[{t:"En été !", r:"Les anniversaires d'été, c'est le mieux !"}, {t:"En hiver !", r:"Quelle douceur ! Du chocolat chaud !"}]},
      {op:[{t:"Quand est ton anniversaire ?", r:"Au mois de mai !"}, {t:"Combien de mois y a-t-il dans une année ?", r:"Douze mois !"}]},
      {di:"Tu vas avoir quel âge cette année ?", op:[{t:"Je vais avoir six ans !", r:"Six ! Comme tu grandis."}, {t:"Je vais avoir cinq ans !", r:"Cinq ! Quel bel âge."}]},
      {op:[{t:"Quel âge as-tu ?", r:"Un peu plus que toi !"}, {t:"Je peux venir à ton anniversaire ?", r:"Bien sûr ! On t'invite."}]}]},
    {titulo:"Parler du cadeau", chau:"De rien ! Profite de ton cadeau !", pasos:[
      {di:"Regarde cette grande boîte ! C'est un cadeau pour toi. Tu veux l'ouvrir ?", op:[{t:"Oui, je veux l'ouvrir !", r:"Ouvre-le avec précaution !"}, {t:"Oui, qu'est-ce que c'est ?", r:"C'est une surprise !"}]},
      {op:[{t:"Il vient de qui ?", r:"De tous tes amis !"}, {t:"Il est grand ?", r:"Oui, très grand !"}]},
      {di:"C'est un jouet ! Il te plaît ?", op:[{t:"Oui, j'adore ! Merci !", r:"Je suis contente qu'il te plaise !"}, {t:"Oui, il est magnifique !", r:"C'est pour toi, avec amour."}]},
      {op:[{t:"On joue ensemble avec ?", r:"Oui ! Jouons."}, {t:"Je peux te faire un câlin ?", r:"Oui, un gros câlin !"}]}]},
    {titulo:"Parler à la fête d'anniversaire", chau:"Joyeux anniversaire ! On t'aime !", pasos:[
      {di:"Surprise ! Tous tes amis sont là ! Joyeux anniversaire !", op:[{t:"Merci à tous !", r:"De rien ! On t'aime."}, {t:"Oh, quelle surprise !", r:"On voulait te surprendre !"}]},
      {op:[{t:"Où est le gâteau ?", r:"Ici, avec des bougies !"}, {t:"On chante ?", r:"Oui ! Chantons ensemble."}]},
      {di:"Fais un vœu et souffle les bougies !", op:[{t:"J'ai fait un vœu !", r:"J'espère qu'il se réalisera !"}, {t:"Un, deux, trois… je souffle !", r:"Hourra ! Quel grand souffle !"}]},
      {op:[{t:"Je peux avoir une part de gâteau ?", r:"Bien sûr ! La plus grosse."}, {t:"Tu t'es amusée ?", r:"C'était la plus belle fête du monde !"}]}]}
  ],
  titulo: "La fête",
  lugar: {texto:"la fête", silabas:["la", "fête"]},
  bienvenida: "Aujourd'hui, c'est ton anniversaire !",
  niveles: [{nombre:"L'entrée", numTexto:"zéro"}, {nombre:"Le salon", numTexto:"un"}, {nombre:"Le jardin", numTexto:"deux"}],
  numeros: ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"],
  meses: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  estaciones: {
    I: {
      palabra: {texto:"l'invitation", silabas:["lin", "vi", "ta", "tion"]},
      intro: "C'est ton anniversaire ! Il faut inviter les amis.",
      frase: {texto:"Tu viens à ma fête ?", partes:["Tu viens", "à ma fête ?"]},
      respuesta: "Oui ! Merci de m'inviter !",
      cuento: {
        titulo: "Les invitations",
        paginas: [
          "{N} prépare *une invitation* pour chaque ami.",
          "« Tu viens à ma fête ? » demande {N} à la petite lapine.",
          "« Oui ! Merci de m'inviter ! » saute la petite lapine.",
          "Tous les amis vont venir ! Hourra !"
        ]
      }
    },
    O: {
      palabra: {texto:"le ballon", silabas:["le", "bal", "lon"]},
      intro: "Il faut gonfler les ballons !",
      frase: {texto:"Je gonfle le ballon !", partes:["Je gonfle", "le ballon !"]},
      respuesta: "Fffou… plus gros, plus gros !",
      cuento: {
        titulo: "Le ballon géant",
        paginas: [
          "Le petit chien apporte des *ballons* de toutes les couleurs.",
          "{N} souffle : fffou, fffou !",
          "Le ballon grandit, grandit… et éclate ! Pan !",
          "Quel fou rire ! Et {N} en gonfle un autre, plus petit."
        ]
      }
    },
    Z: {
      palabra: {texto:"le chapeau", silabas:["le", "cha", "peau"]},
      intro: "Pour la fête, un chapeau pointu !",
      frase: {texto:"Je mets mon chapeau !", partes:["Je mets", "mon chapeau !"]},
      respuesta: "Il te va très bien !",
      cuento: {
        titulo: "Le chapeau de fête",
        paginas: [
          "La petite chatte avait *un chapeau* d'anniversaire.",
          "Le chapeau s'envole… et tombe sur la tête de {N} !",
          "« Il te va très bien ! » applaudit la petite chatte.",
          "Et ils dansent avec leurs chapeaux sur la tête !"
        ]
      }
    },
    R: {
      palabra: {texto:"le cadeau", silabas:["le", "ca", "deau"]},
      intro: "Le petit ours t'apporte un cadeau !",
      frase: {texto:"Merci pour le cadeau !", partes:["Merci", "pour le cadeau !"]},
      respuesta: "De rien ! Ouvre-le !",
      cuento: {
        titulo: "La surprise",
        paginas: [
          "Le petit ours arrive avec *un cadeau* bleu.",
          "« Merci pour le cadeau ! » dit {N}.",
          "{N} l'ouvre… c'est un ballon tout neuf !",
          "« Je l'adore ! » Et {N} fait un câlin au petit ours."
        ]
      }
    },
    K: {
      palabra: {texto:"le calendrier", silabas:["le", "ca", "len", "drier"]},
      intro: "C'est quand, ton anniversaire ? Regardons le calendrier !",
      contar: "Disons les mois de l'année ! Répète avec moi.",
      frase: {texto:"C'est quand, ton anniversaire ?", partes:["C'est quand,", "ton anniversaire ?"]},
      respuesta: "En mars ! Et le tien ?",
      cuento: {
        titulo: "Les douze mois",
        paginas: [
          "Le petit chat gris regardait *le calendrier* : il y a douze mois !",
          "« C'est quand, ton anniversaire ? » demande-t-il à {N}.",
          "Janvier, février, mars… ils comptent tous les mois !",
          "Chaque année, il y a un anniversaire ! Quelle chance !"
        ]
      }
    },
    E: {
      palabra: {texto:"la bougie", silabas:["la", "bou", "gie"]},
      intro: "Combien de bougies sur le gâteau ?",
      frase: {texto:"Tu as quel âge ?", partes:["Tu as", "quel âge ?"]},
      respuesta: "J'ai cinq ans ! Un, deux, trois, quatre, cinq.",
      cuento: {
        titulo: "Les petites bougies",
        paginas: [
          "Le chien apporte des *bougies* de toutes les couleurs.",
          "« Tu as quel âge ? » demande {N}. Le chien lève les pattes.",
          "« Quatre bougies ! Un, deux, trois, quatre », compte {N}.",
          "Et ils dansent de joie !"
        ]
      }
    },
    T: {
      palabra: {texto:"le gâteau", silabas:["le", "gâ", "teau"]},
      intro: "Voilà le gâteau d'anniversaire !",
      frase: {texto:"Il est bon, ce gâteau !", partes:["Il est bon,", "ce gâteau !"]},
      respuesta: "Il est au chocolat et à la fraise !",
      cuento: {
        titulo: "Le gâteau",
        paginas: [
          "L'ours apporte *un gâteau* énorme.",
          "« Oh, quel gâteau ! » dit {N}.",
          "{N} ferme les yeux et fait un vœu…",
          "Et tout le monde mange du gâteau ensemble !"
        ]
      }
    }
  },
  final: {
    pregunta: "Surprise ! Tous tes amis sont là !",
    frase: {texto:"Merci, les amis !", partes:["Merci,", "les amis !"]},
    cancion: ["Joyeux anniversaire !", "Joyeux anniversaire !", "Joyeux anniversaire, {N} !", "Joyeux anniversaire !"],
    despedida: "Joyeux anniversaire !",
    chau: "Hip, hip, hourra !",
    lograste: "Bravo ! Quelle belle fête !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : il y a une surprise !",
    ppFinal: "Prends tous les tampons, et ensuite on cherche la surprise !",
    otraVez: "Encore une fête ! Reprends les tampons.",
    otraVezB: "Encore une fête"
  },
  microjuego: {
    musica: "Maintenant, joue « Joyeux anniversaire » ! Touche le gâteau, une note à la fois.", musicaTodo: "Toute la chanson", lento: "Lentement", rapido: "Vite", grave: "Grave", agudo: "Aigu", linda: "Tu as très bien joué !", instr: {piano:"Le piano", xilofon:"Le xylophone", robot:"Le robot", trompeta:"La trompette"},
    titulo: "Combien de bougies ?",
    intro: "Un ami fête son anniversaire. Écoute combien, et mets les bougies.",
    fin: "Tu as soufflé {n} bougies !",
    pon: n => `${may(n)} ans ! Mets ${n} bougies.`,
    vela: "la bougie",
    soplar: "Maintenant, on souffle !",
    soplarB: "Souffler !",
    feliz: "Joyeux anniversaire !"
  },
  palabrasExtra: [
    {texto:"la piñata", silabas:["la", "pi", "gna", "ta"]},
    {texto:"le bonbon", silabas:["le", "bon", "bon"]},
    {texto:"le jus", silabas:["le", "jus"]}
  ],
  frasesExtra: [
    {texto:"Joyeux anniversaire !", partes:["Joyeux", "anniversaire !"]},
    {texto:"Fais un vœu !", partes:["Fais", "un vœu !"]},
    {texto:"Tu as quel âge aujourd'hui ?", partes:["Tu as quel âge", "aujourd'hui ?"]},
    {texto:"Bienvenue à ma fête !", partes:["Bienvenue", "à ma fête !"]},
    {texto:"On souffle les bougies !", partes:["On souffle", "les bougies !"]}
  ],
  preguntas: [
    {p:"Qu'est-ce qui a un ruban et une surprise dedans ?", r:"Le cadeau !"},
    {p:"Qu'est-ce qu'on mange à l'anniversaire ?", r:"Le gâteau !"},
    {p:"Qu'est-ce qu'on gonfle pour la fête ?", r:"Les ballons !"},
    {p:"Qu'est-ce qu'on souffle sur le gâteau ?", r:"Les bougies !"},
    {p:"Qu'est-ce qu'on met sur la tête ?", r:"Le chapeau !"},
    {p:"Qu'est-ce qu'on donne aux amis pour qu'ils viennent ?", r:"L'invitation !"},
    {p:"Où sont les mois ?", r:"Sur le calendrier !"},
    {p:"Qu'est-ce qu'on casse pour que les bonbons tombent ?", r:"La piñata !"},
    {p:"Qu'est-ce qui tombe de la piñata ?", r:"Des bonbons !"},
    {p:"Dans quoi on boit le jus ?", r:"Dans le verre !"}
  ],
  objetos: {"#":"le mur", o:"les ballons", m:"la table", f:"les fleurs", r:"l'arbre", s:"le canapé", "~":"la porte"}
});
})();
