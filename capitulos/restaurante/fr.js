/* =========================================================
   CAPÍTULO 2 · EL RESTAURANTE — textos en français
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   El héroe trabaja de mozo: a los clientes les habla de vous.
   ========================================================= */
registrarTextos('restaurante', 'fr', {
  titulo: "Le restaurant",
  lugar: {texto:"le restaurant", silabas:["le", "res", "tau", "rant"]},
  bienvenida: "On arrive au restaurant !",
  niveles: [{nombre:"Le parking", numTexto:"zéro"}, {nombre:"Le buffet", numTexto:"un"}, {nombre:"À la carte", numTexto:"deux"}],
  estaciones: {
    E: {
      palabra: {texto:"la voiture", silabas:["la", "voi", "ture"]},
      intro: "Voici le parking. On laisse la voiture ici !",
      frase: {texto:"On arrive en voiture !", partes:["On arrive", "en voiture !"]},
      respuesta: "Bienvenue ! Je surveille ta voiture.",
      cuento: {
        titulo: "La voiture qui avait faim",
        paginas: [
          "{N} arrive au restaurant dans *la voiture* rouge.",
          "Mais la voiture saute et fait du bruit ! Vroum, vroum… elle a faim !",
          "Le chien lui donne de l'essence et la lave avec plein de bulles.",
          "« Merci ! » dit la voiture. Et elle s'endort sur le parking."
        ]
      }
    },
    R: {
      palabra: {texto:"la table", silabas:["la", "ta", "ble"]},
      intro: "Voici l'entrée. Ici, on nous donne une table.",
      frase: {texto:"Une table, s'il vous plaît.", partes:["Une table,", "s'il vous plaît."]},
      respuesta: "Oh là là ! Il manque un serveur aujourd'hui. Tu nous aides ?",
      despues: "Mets le tablier ! Maintenant, tu travailles au restaurant !",
      cuento: {
        titulo: "Le tablier magique",
        paginas: [
          "{N} demande *une table*, mais l'ours est très inquiet.",
          "« Le serveur n'est pas venu, et il y a beaucoup de monde ! » dit l'ours.",
          "« Je t'aide ! » dit {N}. Et l'ours lui donne *un tablier* et un nœud papillon.",
          "Ça y est ! Maintenant, {N} travaille au restaurant."
        ]
      }
    },
    B: {
      palabra: {texto:"l'assiette", silabas:["la", "siette"]},
      intro: "Voici le buffet. Chacun se sert ce qu'il veut !",
      frase: {texto:"Voici une assiette.", partes:["Voici", "une assiette."]},
      respuesta: "Merci beaucoup !",
      cuento: {
        titulo: "La montagne d'assiettes",
        paginas: [
          "Au buffet, la lapine a besoin d'*une assiette*.",
          "{N} apporte une assiette… et une autre… et une autre… une montagne d'assiettes !",
          "La montagne penche d'un côté, puis de l'autre !",
          "Mais rien ne tombe. « Voici une assiette ! » dit {N}. Bravo !"
        ]
      }
    },
    K: {
      palabra: {texto:"la marmite", silabas:["la", "mar", "mite"]},
      intro: "Voici la cuisine ! Ici, le chat cuisinier prépare les repas.",
      frase: {texto:"Ça sent bon !", partes:["Ça sent", "bon !"]},
      respuesta: "C'est de la soupe à la tomate !",
      cuento: {
        titulo: "La marmite qui dansait",
        paginas: [
          "Dans la cuisine, il y a *une marmite* énorme.",
          "La soupe fait des bulles : blop, blop, blop.",
          "Tout à coup, la marmite se met à sauter et à danser !",
          "Le chat cuisinier la serre dans ses bras et dit : « La soupe est prête ! »"
        ]
      }
    },
    M: {
      palabra: {texto:"le menu", silabas:["le", "me", "nu"]},
      intro: "Voici l'étage du haut. Ici, les gens choisissent sur le menu.",
      frase: {texto:"Qu'est-ce que vous voulez manger ?", partes:["Qu'est-ce que", "vous voulez", "manger ?"]},
      respuesta: "Une pizza, s'il vous plaît.",
      cuento: {
        titulo: "La pizza géante",
        paginas: [
          "{N} donne *le menu* au chien et demande : « Qu'est-ce que vous voulez manger ? »",
          "« Une pizza, s'il vous plaît », dit le chien.",
          "{N} apporte une pizza si grande, si grande… qu'elle ne tient pas sur la table !",
          "Alors le chien invite ses amis, et ils la partagent !"
        ]
      }
    },
    H: {
      palabra: {texto:"la glace", silabas:["la", "glace"]},
      intro: "C'est l'heure du dessert !",
      frase: {texto:"Vous voulez un dessert ?", partes:["Vous voulez", "un dessert ?"]},
      respuesta: "Oui ! Une glace, s'il vous plaît.",
      cuento: {
        titulo: "La glace pressée",
        paginas: [
          "La chatte veut *une glace* au chocolat.",
          "{N} l'apporte très vite, parce qu'il fait très chaud !",
          "Oh là là ! La glace fond. Goutte, goutte, goutte…",
          "La chatte la mange d'une seule bouchée. Miam, c'est bon !"
        ]
      }
    },
    C: {
      palabra: {texto:"l'addition", silabas:["la", "di", "tion"]},
      intro: "Voici la caisse. Ici, on paie le repas.",
      frase: {texto:"Voici l'addition.", partes:["Voici", "l'addition."]},
      respuesta: "Merci ! Tout était délicieux.",
      cuento: {
        titulo: "L'addition qui s'envole",
        paginas: [
          "À la caisse, le chien donne *l'addition* à {N}.",
          "Mais la fenêtre est ouverte, et l'addition s'envole !",
          "{N} court et saute très haut… et l'attrape en l'air !",
          "« Voici l'addition ! » dit {N}. Et tout le monde applaudit."
        ]
      }
    }
  },
  final: {
    pregunta: "Tout était délicieux ! C'est pour vous : un pourboire !",
    frase: {texto:"Merci beaucoup ! À bientôt !", partes:["Merci beaucoup !", "À bientôt !"]},
    despedida: "Bon travail !",
    chau: "Au revoir ! À la prochaine !",
    lograste: "Bravo ! Tu as très bien servi tout le monde !",
    todos: "Tu as tous les tampons ! Descends au parking : la cliente t'attend à la porte verte !",
    ppFinal: "Gagne tous les tampons, et après, le pourboire !",
    otraVez: "Une nouvelle journée de travail ! Gagne encore les tampons.",
    otraVezB: "Encore une journée"
  },
  // el microjuego que se abre al terminar el lugar (los ingredientes van en el orden de base.js)
  microjuego: {titulo:"On fait une pizza !", intro:"Fais ta pizza ! Touche un ingrédient, puis touche la pizza.", horno:"Au four !", mas:"Mets encore quelques ingrédients !", listo:"Miam, quelle bonne pizza ! Merci, chef !",
    ingredientes: [{texto:"la sauce tomate"}, {texto:"le fromage"}, {texto:"la tomate"}, {texto:"l'olive"}, {texto:"le basilic"}, {texto:"le champignon"}]},
  palabrasExtra: [
    {texto:"la pizza", silabas:["la", "pid", "za"]},
    {texto:"la soupe", silabas:["la", "soupe"]},
    {texto:"le verre", silabas:["le", "verre"]},
    {texto:"la fourchette", silabas:["la", "four", "chette"]},
    {texto:"le tablier", silabas:["le", "ta", "blier"]}
  ],
  frasesExtra: [
    {texto:"Bienvenue !", partes:["Bienvenue !"]},
    {texto:"Bon appétit !", partes:["Bon", "appétit !"]},
    {texto:"Qu'est-ce que vous voulez boire ?", partes:["Qu'est-ce que", "vous voulez", "boire ?"]},
    {texto:"Un verre d'eau, s'il vous plaît.", partes:["Un verre d'eau,", "s'il vous plaît."]},
    {texto:"Merci beaucoup !", partes:["Merci", "beaucoup !"]},
    {texto:"C'est bon !", partes:["C'est bon !"]}
  ],
  preguntas: [
    {p:"Qu'est-ce que le chien commande en haut ?", r:"Une pizza !"},
    {p:"Quel dessert est tout froid ?", r:"La glace !"},
    {p:"Dans quoi on fait cuire la soupe ?", r:"Dans la marmite !"},
    {p:"Comment on arrive au restaurant ?", r:"En voiture !"},
    {p:"Où est-ce qu'on choisit le repas ?", r:"Sur le menu !"},
    {p:"Qu'est-ce qu'on apporte à la table pour payer ?", r:"L'addition !"},
    {p:"Qu'est-ce qu'on met pour travailler au restaurant ?", r:"Le tablier !"},
    {p:"Où est-ce qu'on met l'eau ?", r:"Dans le verre !"},
    {p:"Avec quoi on mange les pâtes ?", r:"Avec la fourchette !"},
    {p:"Qu'est-ce que la cliente nous donne à la fin ?", r:"Le pourboire !"}
  ],
  objetos: {"#":"le mur", p:"la plante", a:"la voiture", m:"la table", "~":"la porte"}
});
