/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — textos en français
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('aeropuerto', 'fr', {
  charlas: [
    {titulo:"Parler au guichet d'information", chau:"Bon voyage !", pasos:[
      {di:"Bonjour ! Je peux t'aider ?", op:[{t:"Oui, où sont les toilettes ?", r:"Au bout du couloir, à droite."}, {t:"Oui, où est l'avion ?", r:"À la porte cinq ! Suis les flèches jaunes."}]},
      {op:[{t:"Où est le snack ?", r:"Juste là-bas, à côté de la fenêtre."}, {t:"À quelle heure part l'avion ?", r:"Dans une heure !"}]},
      {di:"Tu as ton billet ?", op:[{t:"Oui, voici mon billet.", r:"Parfait ! Tout est prêt."}, {t:"Oui, il est dans mon sac.", r:"Super ! Ne le perds pas."}]},
      {op:[{t:"Je peux avoir un plan, s'il vous plaît ?", r:"Bien sûr ! Voici un plan."}, {t:"C'est loin ?", r:"Non, c'est tout près."}]}]},
    {titulo:"Parler au snack", chau:"Bon goûter ! Bon voyage !", pasos:[
      {di:"Bonjour ! Tu veux un petit quelque chose ?", op:[{t:"Oui, un biscuit, s'il vous plaît.", r:"Voici un bon biscuit."}, {t:"Oui, un jus, s'il vous plaît.", r:"Voici ton jus."}]},
      {op:[{t:"C'est combien ?", r:"Deux petits poissons."}, {t:"Qu'est-ce que vous avez ?", r:"Des biscuits, des jus et des fruits !"}]},
      {di:"Tu veux autre chose ?", op:[{t:"Non, merci.", r:"De rien !"}, {t:"Oui, encore un biscuit !", r:"Tiens. Tu as faim !"}]},
      {op:[{t:"C'est frais ?", r:"Oui, fait aujourd'hui !"}, {t:"Je peux l'emporter dans l'avion ?", r:"Bien sûr !"}]}]},
    {titulo:"Parler à la sécurité", chau:"Tout est en ordre ! Bon vol !", pasos:[
      {di:"Bonjour ! Ton passeport, s'il te plaît.", op:[{t:"Voici mon passeport.", r:"Merci ! Voyons voir."}, {t:"Tenez.", r:"Merci beaucoup."}]},
      {op:[{t:"C'est bon ?", r:"Oui, tout va bien !"}, {t:"Où dois-je aller maintenant ?", r:"Tout droit, jusqu'à la porte d'embarquement."}]},
      {di:"Tu as quelque chose dans les poches ?", op:[{t:"Non, rien.", r:"Parfait ! Tu peux passer."}, {t:"Seulement mon jouet.", r:"Très bien ! Tu peux passer."}]},
      {op:[{t:"Je peux passer maintenant ?", r:"Oui, vas-y !"}, {t:"Vous vérifiez tous les sacs ?", r:"Oui, pour protéger tout le monde."}]}]},
    {titulo:"Parler avec le pilote", chau:"On atterrit ! Merci d'avoir volé avec moi !", pasos:[
      {di:"Bienvenue à bord ! Je suis le pilote. On décolle ?", op:[{t:"Oui, allons-y !", r:"Attache ta ceinture !"}, {t:"Oui, j'adore les avions !", r:"Moi aussi ! Monte."}]},
      {op:[{t:"Où est-ce qu'on vole ?", r:"Là-haut, au-dessus des nuages !"}, {t:"L'avion est grand ?", r:"Oui, très grand !"}]},
      {di:"Regarde par le hublot ! Qu'est-ce que tu vois ?", op:[{t:"Je vois les nuages !", r:"Oui, on dirait du coton."}, {t:"Je vois le ciel !", r:"Oui, il est si bleu."}]},
      {op:[{t:"Je peux m'asseoir près du hublot ?", r:"Bien sûr ! C'est la meilleure place."}, {t:"Le vol dure combien de temps ?", r:"Seulement une heure."}]}]}
  ],
  titulo: "L'aéroport",
  lugar: {texto:"l'aéroport", silabas:["l'a", "é", "ro", "port"]},
  bienvenida: "Bienvenue à l'aéroport !",
  niveles: [{nombre:"Arrivées", numTexto:"zéro"}, {nombre:"Départs", numTexto:"un"}, {nombre:"Portes", numTexto:"deux"}],
  estaciones: {
    I: {
      palabra: {texto:"la carte", silabas:["la", "carte"]},
      intro: "Voici l'accueil. Ici, on sait où tout se trouve !",
      frase: {texto:"Où est l'avion ?", partes:["Où est", "l'avion ?"]},
      respuesta: "En haut, au deuxième étage !",
      cuento: {
        titulo: "La carte magique",
        paginas: [
          "{N} trouve *la carte* à l'accueil.",
          "Tout à coup, la carte se met à briller ! Il y a un chemin rouge.",
          "Le chemin monte, monte, monte… jusqu'au deuxième étage !",
          "Là-haut, il y a *l'avion*. « Merci, la carte ! » dit {N}."
        ]
      }
    },
    B: {
      palabra: {texto:"les toilettes", silabas:["les", "toi", "lettes"]},
      intro: "Oh là là ! Parfois, on doit aller aux toilettes.",
      frase: {texto:"Où sont les toilettes ?", partes:["Où sont", "les toilettes ?"]},
      respuesta: "C'est ici ! Cette porte !",
      cuento: {
        titulo: "Des bulles aux toilettes !",
        paginas: [
          "{N} a très, très envie d'aller *aux toilettes*.",
          "« Où sont les toilettes ? » demande {N} au chat jaune.",
          "« C'est ici, la porte bleue ! » dit le chat.",
          "Ensuite, {N} se lave les mains avec beaucoup de savon. Des bulles, des bulles !"
        ]
      }
    },
    K: {
      palabra: {texto:"le biscuit", silabas:["le", "bis", "cuit"]},
      intro: "Voici le kiosque. On y vend de bonnes choses !",
      frase: {texto:"Un biscuit, s'il te plaît.", partes:["Un biscuit,", "s'il te plaît."]},
      respuesta: "Voilà ! Bon appétit !",
      cuento: {
        titulo: "Le biscuit voyageur",
        paginas: [
          "Au kiosque, il y a *un biscuit* géant.",
          "« Un biscuit, s'il te plaît ! » demande {N}.",
          "Mais le biscuit fait un bond et dit : « Moi aussi, je veux voyager ! »",
          "Alors le biscuit saute dans *le sac à dos*, prêt à s'envoler."
        ]
      }
    },
    T: {
      palabra: {texto:"le billet", silabas:["le", "bil", "let"]},
      intro: "Ici, on achète le billet pour prendre l'avion.",
      frase: {texto:"Un billet, s'il te plaît.", partes:["Un billet,", "s'il te plaît."]},
      respuesta: "Bien sûr ! Voici ton billet.",
      cuento: {
        titulo: "Le billet doré",
        paginas: [
          "{N} va au guichet pour acheter *un billet*.",
          "L'ours donne à {N} un billet jaune qui brille très fort.",
          "Soudain, le vent souffle… et le billet s'envole !",
          "{N} saute très haut et l'attrape. Quelle chance !"
        ]
      }
    },
    C: {
      palabra: {texto:"la valise", silabas:["la", "va", "lise"]},
      intro: "Ici, on laisse la valise. Elle aussi voyage dans l'avion !",
      frase: {texto:"Voici ma valise.", partes:["Voici", "ma valise."]},
      respuesta: "Elle est jolie ! Au revoir, la valise.",
      cuento: {
        titulo: "La valise qui s'échappe",
        paginas: [
          "{N} est à l'aéroport avec *une valise* rouge pleine de jouets.",
          "Mais la valise se met à rouler ! Elle roule, roule, roule. « Attends, la valise ! » crie {N}.",
          "Elle passe à côté des *toilettes*. Le chat demande : « Où est la valise ? »",
          "Elle monte sur *l'escalator*. En haut, en haut !",
          "En haut, un énorme avion dit : « Bonjour, la valise ! Arrête-toi ! » Et la valise s'arrête.",
          "{N} fait un câlin à la valise. « Merci, l'avion ! Bon voyage ! »"
        ]
      }
    },
    S: {
      palabra: {texto:"le passeport", silabas:["le", "passe", "port"]},
      intro: "Voici le contrôle. Ici, on montre son passeport.",
      frase: {texto:"Voici mon passeport.", partes:["Voici", "mon passeport."]},
      respuesta: "Parfait ! Tu peux passer.",
      cuento: {
        titulo: "Le passeport endormi",
        paginas: [
          "Au contrôle, le chien demande *le passeport* à {N}.",
          "{N} cherche dans le sac à dos… mais le passeport dort !",
          "« Réveille-toi, passeport ! » dit {N} très fort.",
          "Le passeport ouvre les yeux : « Me voici ! Tu peux passer ! »"
        ]
      }
    },
    W: {
      palabra: {texto:"l'avion", silabas:["l'a", "vion"]},
      intro: "Regarde par la grande fenêtre ! Le pilote est là aussi.",
      frase: {texto:"Regarde, un avion !", partes:["Regarde,", "un avion !"]},
      respuesta: "Oui ! Il est très grand !",
      cuento: {
        titulo: "L'avion qui avait peur",
        paginas: [
          "Par la fenêtre, {N} voit *un avion* tout petit.",
          "Le petit avion a peur de voler si haut.",
          "« Tu peux le faire, l'avion ! » crie {N}.",
          "L'avion roule, roule… et il s'envole dans les nuages !"
        ]
      }
    }
  },
  final: {
    pregunta: "Tu as ton billet ?",
    frase: {texto:"Oui ! Voici mon billet.", partes:["Oui !", "Voici", "mon billet."]},
    despedida: "Bon voyage !",
    chau: "Au revoir, l'aéroport !"
  },
  // el microjuego que se abre al terminar el lugar ({n} = cuántas estrellas juntó)
  microjuego: {titulo:"Vol arc-en-ciel", intro:"Fais monter et descendre l'avion, et attrape les étoiles de couleur !", fin:"Tu as attrapé {n} étoiles !"},
  palabrasExtra: [
    {texto:"l'ascenseur", silabas:["l'as", "cen", "seur"]},
    {texto:"l'escalator", silabas:["l'es", "ca", "la", "tor"]},
    {texto:"la porte", silabas:["la", "porte"]},
    {texto:"le pilote", silabas:["le", "pi", "lote"]},
    {texto:"le sac à dos", silabas:["le", "sac", "à", "dos"]}
  ],
  frasesExtra: [
    {texto:"Bonjour !", partes:["Bonjour !"]},
    {texto:"Merci beaucoup !", partes:["Merci", "beaucoup !"]},
    {texto:"Au revoir !", partes:["Au revoir !"]},
    {texto:"Où est la porte ?", partes:["Où est", "la porte ?"]},
    {texto:"Au deuxième étage, s'il te plaît.", partes:["Au deuxième étage,", "s'il te plaît."]},
    {texto:"Bon voyage !", partes:["Bon", "voyage !"]}
  ],
  preguntas: [
    {p:"Qu'est-ce qu'on mange au kiosque ?", r:"Le biscuit ! Miam !"},
    {p:"Qu'est-ce qu'on montre au chien du contrôle ?", r:"Le passeport !"},
    {p:"Où met-on les jouets pour voyager ?", r:"Dans la valise !"},
    {p:"Qu'est-ce qui nous montre où tout se trouve ?", r:"La carte !"},
    {p:"Qu'est-ce qu'il faut pour monter dans l'avion ?", r:"Le billet !"},
    {p:"Qu'est-ce qui nous fait monter et descendre ?", r:"L'ascenseur !"},
    {p:"Qu'est-ce que le pilote porte sur la tête ?", r:"La casquette du pilote !"},
    {p:"Qu'est-ce qu'on porte sur le dos ?", r:"Le sac à dos !"},
    {p:"Qu'est-ce qui vole dans les nuages ?", r:"L'avion !"},
    {p:"Où va-t-on quand on a envie de faire pipi ?", r:"Aux toilettes !"}
  ],
  objetos: {"#":"le mur", b:"le banc", p:"la plante", "~":"la porte"}
});
