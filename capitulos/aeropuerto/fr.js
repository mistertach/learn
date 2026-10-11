/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — textos en français
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('aeropuerto', 'fr', {
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
