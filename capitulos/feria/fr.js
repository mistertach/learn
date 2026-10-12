/* =========================================================
   CAPÍTULO 5 · LA FERIA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
(()=>{
const may = s => s.charAt(0).toUpperCase()+s.slice(1);
registrarTextos('feria', 'fr', {
  titulo: "Le marché",
  lugar: {texto:"le marché", silabas:["le", "mar", "ché"]},
  bienvenida: "Nous voilà au marché !",
  niveles: [{nombre:"L'entrée", numTexto:"zéro"}, {nombre:"Les légumes", numTexto:"un"}, {nombre:"La caisse", numTexto:"deux"}],
  numeros: ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"],
  estaciones: {
    M: {
      palabra: {texto:"la pomme", silabas:["la", "pomme"]},
      intro: "Voici le marché. Regarde tous ces fruits !",
      frase: {texto:"Je voudrais trois pommes, s'il vous plaît.", partes:["Je voudrais trois pommes,", "s'il vous plaît."]},
      respuesta: "Voilà : une, deux, trois !",
      cuento: {
        titulo: "La pomme qui s'échappe",
        paginas: [
          "Au marché, il y avait des *pommes* rouges et brillantes.",
          "« Je voudrais trois pommes, s'il vous plaît », dit {N}. « Une, deux, trois ! »",
          "Oh ! Une pomme est tombée et elle roule par terre.",
          "{N} la rattrape et la met dans le panier. Trois pommes !"
        ]
      }
    },
    N: {
      palabra: {texto:"la banane", silabas:["la", "ba", "nane"]},
      intro: "Quelles bananes bien jaunes !",
      frase: {texto:"Combien coûte la banane ?", partes:["Combien coûte", "la banane ?"]},
      respuesta: "Un petit poisson !",
      cuento: {
        titulo: "Un petit poisson",
        paginas: [
          "Le petit chien vendait des *bananes* jaunes.",
          "« Combien coûte la banane ? » demande {N}. « Un petit poisson ! »",
          "{N} paie avec un petit poisson, et la banane fait un saut !",
          "Qu'elle est bonne, la banane ! Hourra !"
        ]
      }
    },
    O: {
      palabra: {texto:"l'orange", silabas:["lo", "range"]},
      intro: "Ici, il y a des oranges pour faire du jus.",
      frase: {texto:"Deux oranges, s'il vous plaît.", partes:["Deux oranges,", "s'il vous plaît."]},
      respuesta: "Une, deux ! Qu'elles sont juteuses !",
      cuento: {
        titulo: "Le jus d'orange",
        paginas: [
          "La petite chatte avait des *oranges* rondes et juteuses.",
          "« Deux oranges, s'il vous plaît », dit {N}.",
          "La chatte les presse : un grand verre de jus !",
          "{N} boit le jus. Miam, c'est tout frais !"
        ]
      }
    },
    Z: {
      palabra: {texto:"la carotte", silabas:["la", "ca", "rotte"]},
      intro: "Le lapin adore les carottes.",
      frase: {texto:"La carotte est orange.", partes:["La carotte", "est orange."]},
      respuesta: "Et elle est longue, longue !",
      cuento: {
        titulo: "Le lapin et la carotte",
        paginas: [
          "Le lapin s'occupait de son stand de *carottes*.",
          "{N} voit une carotte énorme. « La carotte est orange », dit {N}.",
          "Le lapin saute de joie : c'est son plat préféré !",
          "Ils mangent des carottes ensemble : crac, crac."
        ]
      }
    },
    F: {
      palabra: {texto:"la fraise", silabas:["la", "fraise"]},
      intro: "Regarde ces fraises rouges.",
      frase: {texto:"La fraise est petite.", partes:["La fraise", "est petite."]},
      respuesta: "Petite et très bonne !",
      cuento: {
        titulo: "Les petites fraises",
        paginas: [
          "Dans une petite boîte, il y avait des *fraises* rouges.",
          "« La fraise est petite ! » s'étonne {N}.",
          "{N} en goûte une : qu'elle est sucrée !",
          "Petite, mais très bonne. Merci !"
        ]
      }
    },
    S: {
      palabra: {texto:"la pastèque", silabas:["la", "pas", "tèque"]},
      intro: "Oh ! Tu as vu cette pastèque ?",
      frase: {texto:"La pastèque est grande !", partes:["La pastèque", "est grande !"]},
      respuesta: "Oui, énorme ! Elle est très lourde !",
      cuento: {
        titulo: "La pastèque géante",
        paginas: [
          "Au marché, il y avait *une pastèque* géante !",
          "« La pastèque est grande ! » dit {N}.",
          "Oh ! La pastèque s'échappe et roule… vite, on court !",
          "Enfin, on l'attrape. Quelle grande pastèque !"
        ]
      }
    },
    B: {
      palabra: {texto:"la balance", silabas:["la", "ba", "lance"]},
      intro: "Voici la balance. Elle sert à peser les fruits.",
      frase: {texto:"Combien ça pèse ?", partes:["Combien", "ça pèse ?"]},
      respuesta: "Ça pèse un kilo !",
      cuento: {
        titulo: "La balance",
        paginas: [
          "Le chien du marché avait *une balance* rouge.",
          "{N} pose une banane. « Combien ça pèse ? » Un tout petit peu !",
          "Ensuite, ils posent la pastèque… la balance fait un saut !",
          "« C'est super lourd ! » rit {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "Ça fait cinq petits poissons !",
    frase: {texto:"Voilà ! Merci !", partes:["Voilà !", "Merci !"]},
    despedida: "Bonnes courses !",
    chau: "Au revoir, le marché !",
    lograste: "Bravo ! Tu as fait toutes les courses !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : on va payer à la caisse !",
    ppFinal: "Prends tous les tampons, et ensuite on va payer à la caisse !",
    otraVez: "Encore un jour de marché ! Reprends les tampons.",
    otraVezB: "Encore un jour"
  },
  microjuego: {
    cortar: "Maintenant, on coupe les fruits ! Passe ton doigt dessus.", cortadas: "Tu as coupé {n} fruits !",
    titulo: "Remplis le panier !",
    intro: "Écoute quel fruit je veux, et combien. Touche-le pour le mettre dans le panier !",
    fin: "Tu as mis {n} fruits dans le panier !",
    pon: (n,g) => n==='un' ? `Mets ${g.uno} dans le panier.` : `Mets ${n} ${g.plural} dans le panier.`,
    son: (n,g) => n==='un' ? `${may(g.uno)} !` : `${may(n)} ${g.plural} !`,
    esa: g => `Pas ce fruit-là ! Cherche ${g.texto}.`,
    ingredientes: [
      {texto:"la pomme", uno:"une pomme", plural:"pommes"},
      {texto:"la banane", uno:"une banane", plural:"bananes"},
      {texto:"l'orange", uno:"une orange", plural:"oranges"},
      {texto:"la fraise", uno:"une fraise", plural:"fraises"},
      {texto:"la poire", uno:"une poire", plural:"poires"},
      {texto:"le citron", uno:"un citron", plural:"citrons"}
    ]
  },
  palabrasExtra: [
    {texto:"la poire", silabas:["la", "poire"]},
    {texto:"le citron", silabas:["le", "ci", "tron"]},
    {texto:"le panier", silabas:["le", "pa", "nier"]},
    {texto:"le sac", silabas:["le", "sac"]}
  ],
  frasesExtra: [
    {texto:"Combien ça coûte ?", partes:["Combien", "ça coûte ?"]},
    {texto:"C'est grand !", partes:["C'est grand !"]},
    {texto:"C'est petit.", partes:["C'est petit."]},
    {texto:"Un sac, s'il vous plaît.", partes:["Un sac,", "s'il vous plaît."]},
    {texto:"C'est bon !", partes:["C'est bon !"]}
  ],
  preguntas: [
    {p:"Quel fruit est long et jaune ?", r:"La banane !"},
    {p:"Avec quel fruit on fait du jus ?", r:"Avec l'orange !"},
    {p:"Quel fruit est très, très grand ?", r:"La pastèque !"},
    {p:"Qu'est-ce que le lapin aime manger ?", r:"La carotte !"},
    {p:"Quel fruit est rouge et petit ?", r:"La fraise !"},
    {p:"Avec quoi on pèse les fruits ?", r:"Avec la balance !"},
    {p:"Quel fruit est rouge et rond ?", r:"La pomme !"},
    {p:"Quel fruit est jaune et acide ?", r:"Le citron !"},
    {p:"Où est-ce qu'on met les fruits ?", r:"Dans le panier !"},
    {p:"Quel fruit est vert et a la forme d'une goutte ?", r:"La poire !"}
  ],
  objetos: {"#":"le mur", p:"la plante", c:"la caisse de fruits", "~":"la porte"}
});
})();
