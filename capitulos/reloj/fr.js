/* =========================================================
   CAPÍTULO 3 · LA TORRE DEL RELOJ — textos en français
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('reloj', 'fr', {
  charlas: [
    {titulo:"Parler avec l'horloger", chau:"Le temps passe vite ! À bientôt !", pasos:[
      {di:"Bonjour ! Tu aimes mes horloges ?", op:[{t:"Oui, elles sont magnifiques !", r:"Merci ! Je les ai faites."}, {t:"Oui, j'aime la grande horloge !", r:"C'est ma préférée aussi."}]},
      {op:[{t:"Quelle heure est-il ?", r:"Il est trois heures !"}, {t:"Combien d'horloges avez-vous ?", r:"J'ai cent horloges !"}]},
      {di:"Tu veux entendre le tic-tac de l'horloge ?", op:[{t:"Oui, tic-tac !", r:"Tic-tac, tic-tac !"}, {t:"Oui, je veux écouter.", r:"Chut… tic-tac, tic-tac."}]},
      {op:[{t:"Elle sonne ?", r:"Oui, à chaque heure !"}, {t:"Je peux toucher les aiguilles ?", r:"Oui, doucement !"}]}]},
    {titulo:"Parler à trois heures", chau:"Il est temps de partir ! À quatre heures !", pasos:[
      {di:"Il est trois heures ! C'est l'heure du goûter. Tu as faim ?", op:[{t:"Oui, j'ai faim !", r:"Allons goûter !"}, {t:"Oui, je veux un biscuit !", r:"Voici ton biscuit."}]},
      {op:[{t:"Quelle heure est-il ?", r:"Il est trois heures."}, {t:"À quelle heure dîne-t-on ?", r:"À huit heures."}]},
      {di:"Que fais-tu à trois heures ?", op:[{t:"Je joue avec mes jouets.", r:"Comme c'est amusant !"}, {t:"Je prends mon goûter.", r:"Miam ! Moi aussi."}]},
      {op:[{t:"Où est la petite aiguille maintenant ?", r:"Sur le trois !"}, {t:"Il est tard ?", r:"Non, il est encore tôt."}]}]},
    {titulo:"Parler à sept heures moins le quart", chau:"Le dîner est prêt ! Bon appétit !", pasos:[
      {di:"Il est sept heures moins le quart. C'est bientôt l'heure du dîner. Tu as faim ?", op:[{t:"Oui, j'ai très faim !", r:"Le dîner est presque prêt."}, {t:"Oui, qu'est-ce qu'on mange ?", r:"De la soupe et du pain !"}]},
      {op:[{t:"À quelle heure est le dîner ?", r:"À sept heures."}, {t:"Il reste combien de temps avant le dîner ?", r:"Seulement un quart d'heure !"}]},
      {di:"On se lave d'abord les mains ?", op:[{t:"Oui, lavons-nous les mains !", r:"Du savon, du savon et de l'eau !"}, {t:"Oui, elles sont sales !", r:"Lavons-les bien."}]},
      {op:[{t:"Je peux aider à mettre la table ?", r:"Oui ! Apporte les assiettes, s'il te plaît."}, {t:"C'est déjà l'heure ?", r:"Presque ! Attends un peu."}]}]},
    {titulo:"Parler dans le clocher", chau:"Ding dong ! À demain !", pasos:[
      {di:"Il est midi ! Quelle heure est-il ?", op:[{t:"Il est midi !", r:"Exact ! C'est l'heure des cloches."}, {t:"Il est douze heures !", r:"Oui ! Les cloches vont sonner."}]},
      {op:[{t:"Je peux sonner les cloches ?", r:"Oui ! Tire sur la corde."}, {t:"Combien de fois sonnent-elles ?", r:"Douze fois !"}]},
      {di:"Tu as appris l'heure aujourd'hui ?", op:[{t:"Oui, je connais les heures pile et les demies !", r:"Merveilleux ! Tu es un expert des horloges."}, {t:"Oui, j'adore les horloges !", r:"Moi aussi ! Le temps, c'est amusant."}]},
      {op:[{t:"Quelle heure est-il maintenant ?", r:"C'est l'heure de rentrer !"}, {t:"Tu m'en apprendras plus ?", r:"Bien sûr ! Reviens demain."}]}]}
  ],
  titulo: "La tour de l'horloge",
  lugar: {texto:"la tour de l'horloge", silabas:["la", "tour", "de", "l'hor", "loge"]},
  bienvenida: "On arrive à la tour de l'horloge !",
  niveles: [{nombre:"L'atelier", numTexto:"zéro"}, {nombre:"Les engrenages", numTexto:"un"}, {nombre:"Tout en haut", numTexto:"deux"}],
  numeros: ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze"],
  estaciones: {
    R: {
      palabra: {texto:"l'horloge", silabas:["l'hor", "loge"]},
      intro: "Voici l'atelier de l'horloger. Il y a des horloges partout !",
      contar: "Comptons les nombres de l'horloge ! Répète avec moi.",
      frase: {texto:"Quelle heure est-il ?", partes:["Quelle heure", "est-il ?"]},
      respuesta: "On va apprendre à lire l'heure !",
      cuento: {
        titulo: "L'horloge endormie",
        paginas: [
          "Dans l'atelier de l'horloger, il y a *une horloge* qui ne fait pas tic-tac.",
          "« Elle dort ! » dit l'ours horloger.",
          "{N} compte très fort : un, deux, trois… jusqu'à douze !",
          "Et l'horloge se réveille : tic-tac, tic-tac !"
        ]
      }
    },
    A: {
      palabra: {texto:"la petite aiguille", silabas:["la", "pe", "tite", "ai", "guille"]},
      intro: "Regarde cette aiguille toute courte.",
      buscar: "Quelle horloge a la petite aiguille rouge ?",
      frase: {texto:"La petite aiguille montre l'heure.", partes:["La petite aiguille", "montre l'heure."]},
      respuesta: "Bravo ! Elle montre l'heure.",
      cuento: {
        titulo: "La petite aiguille",
        paginas: [
          "*La petite aiguille* est toute petite et marche doucement.",
          "Elle nous dit l'heure : une heure, deux heures, trois heures…",
          "Un jour, elle veut se dépêcher… et elle a la tête qui tourne !",
          "« Doucement, c'est bien », lui dit {N}."
        ]
      }
    },
    N: {
      palabra: {texto:"la grande aiguille", silabas:["la", "grande", "ai", "guille"]},
      intro: "Et cette aiguille est longue, longue.",
      buscar: "Quelle horloge a la grande aiguille rouge ?",
      frase: {texto:"La grande aiguille montre les minutes.", partes:["La grande aiguille", "montre les minutes."]},
      respuesta: "Oui ! Elle montre les minutes.",
      cuento: {
        titulo: "L'aiguille qui court",
        paginas: [
          "*La grande aiguille* est grande et elle court très vite.",
          "Elle fait tout le tour de l'horloge en une heure.",
          "« Allez, grande aiguille ! » crie {N}.",
          "Quand elle arrive en haut, sur le douze, elle dit : « Pile ! »"
        ]
      }
    },
    H: {
      palabra: {texto:"pile", silabas:["pile"]},
      intro: "Quand la grande aiguille regarde le douze, c'est l'heure pile.",
      buscar: "Quelle horloge dit trois heures pile ?",
      frase: {texto:"Il est trois heures pile.", partes:["Il est trois heures", "pile."]},
      respuesta: "Oui ! Trois heures pile !",
      cuento: {
        titulo: "Le goûter à l'heure pile",
        paginas: [
          "Quand la grande aiguille est sur le douze, c'est l'heure *pile*.",
          "Il est trois heures pile : c'est l'heure du goûter !",
          "Le chien apporte du lait et des biscuits.",
          "{N} dit : « Il est trois heures pile ! Miam ! »"
        ]
      }
    },
    C: {
      palabra: {texto:"et quart", silabas:["et", "quart"]},
      intro: "Quand la grande aiguille regarde le trois, c'est et quart.",
      buscar: "Quelle horloge dit quatre heures et quart ?",
      frase: {texto:"Il est quatre heures et quart.", partes:["Il est quatre heures", "et quart."]},
      respuesta: "Super ! Quatre heures et quart.",
      cuento: {
        titulo: "Au parc",
        paginas: [
          "Quand la grande aiguille est sur le trois, c'est *et quart*.",
          "À quatre heures et quart, {N} va au parc.",
          "Sur la balançoire : en haut, en bas, en haut, en bas.",
          "« Il est quatre heures et quart ! » dit l'ours. Quelle belle journée !"
        ]
      }
    },
    M: {
      palabra: {texto:"et demie", silabas:["et", "de", "mie"]},
      intro: "Quand la grande aiguille regarde le six, c'est et demie.",
      buscar: "Quelle horloge dit cinq heures et demie ?",
      frase: {texto:"Il est cinq heures et demie.", partes:["Il est cinq heures", "et demie."]},
      respuesta: "Très bien ! Cinq heures et demie.",
      cuento: {
        titulo: "L'heure du bain",
        paginas: [
          "Quand la grande aiguille est sur le six, c'est *et demie*.",
          "À cinq heures et demie, la lapine prépare le bain.",
          "Des bulles partout !",
          "{N} dit : « Il est cinq heures et demie, c'est l'heure du bain ! »"
        ]
      }
    },
    Q: {
      palabra: {texto:"moins le quart", silabas:["moins", "le", "quart"]},
      intro: "Quand la grande aiguille regarde le neuf, il manque un quart : c'est moins le quart.",
      buscar: "Quelle horloge dit sept heures moins le quart ?",
      frase: {texto:"Il est sept heures moins le quart.", partes:["Il est sept heures", "moins le quart."]},
      respuesta: "Génial ! Sept heures moins le quart.",
      cuento: {
        titulo: "Presque !",
        paginas: [
          "Quand la grande aiguille est sur le neuf, c'est *moins le quart*.",
          "Il manque un petit peu pour sept heures : il est sept heures moins le quart.",
          "La chatte bâille : aaah ! C'est presque l'heure de manger.",
          "« Il est sept heures moins le quart ! » dit {N}. « Presque ! »"
        ]
      }
    }
  },
  final: {
    pregunta: "Quelle heure est-il ?",
    frase: {texto:"Il est midi pile !", partes:["Il est midi", "pile !"]},
    despedida: "Ding, dong !",
    chau: "Les cloches sonnent !",
    lograste: "Bravo ! Tu sais lire l'heure !",
    todos: "Tu as tous les tampons ! Monte tout en haut et cherche la porte verte.",
    ppFinal: "Gagne tous les tampons, et après, on fait sonner les cloches !",
    otraVez: "Encore un tour d'horloge ! Gagne encore les tampons.",
    otraVezB: "Encore un tour"
  },
  microjuego: {
    romper: "Maintenant, on casse les réveils ! Touche-les !",
    titulo: "Règle l'horloge !",
    intro: "Écoute l'heure. Touche le nombre, puis choisis : pile, et quart, et demie ou moins le quart.",
    pon: "Mets l'horloge comme ça :",
    asi: "Regarde, c'est comme ça :",
    fin: "Tu as bien réglé {n} horloges !",
    tipos: {punto:"pile", cuarto:"et quart", media:"et demie", menos:"moins le quart"},
    hora: (n, t) => `Il est ${n==="un"?"une heure":n+" heures"}${{punto:" pile", cuarto:" et quart", media:" et demie", menos:" moins le quart"}[t]}.`
  },
  palabrasExtra: [
    {texto:"un", silabas:["un"]},
    {texto:"deux", silabas:["deux"]},
    {texto:"trois", silabas:["trois"]},
    {texto:"quatre", silabas:["quatre"]},
    {texto:"cinq", silabas:["cinq"]},
    {texto:"six", silabas:["six"]},
    {texto:"sept", silabas:["sept"]},
    {texto:"huit", silabas:["huit"]},
    {texto:"neuf", silabas:["neuf"]},
    {texto:"dix", silabas:["dix"]},
    {texto:"onze", silabas:["onze"]},
    {texto:"douze", silabas:["douze"]}
  ],
  frasesExtra: [
    {texto:"Tic-tac, tic-tac !", partes:["Tic-tac,", "tic-tac !"]},
    {texto:"Il est une heure.", partes:["Il est une heure."]},
    {texto:"Il est deux heures.", partes:["Il est deux heures."]},
    {texto:"C'est l'heure de dormir.", partes:["C'est l'heure", "de dormir."]}
  ],
  preguntas: [
    {p:"Quelle horloge dit trois heures pile ?", r:"Celle-là ! Trois heures pile."},
    {p:"Quelle horloge dit cinq heures et demie ?", r:"Celle-là ! Cinq heures et demie."},
    {p:"Quelle horloge dit quatre heures et quart ?", r:"Celle-là ! Quatre heures et quart."},
    {p:"Quelle horloge dit sept heures moins le quart ?", r:"Celle-là ! Sept heures moins le quart."},
    {p:"Quelle horloge a la petite aiguille rouge ?", r:"Celle-là ! La petite aiguille."},
    {p:"Quelle horloge a la grande aiguille rouge ?", r:"Celle-là ! La grande aiguille."},
    {p:"Montre-moi le nombre trois !", r:"Oui ! Le trois."},
    {p:"Montre-moi le nombre sept !", r:"Oui ! Le sept."},
    {p:"Montre-moi le nombre douze !", r:"Oui ! Le douze."},
    {p:"Montre-moi le nombre neuf !", r:"Oui ! Le neuf."}
  ],
  objetos: {"#":"le mur", b:"le banc", p:"la plante", e:"l'engrenage", "~":"la porte"}
});
