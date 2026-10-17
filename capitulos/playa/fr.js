/* =========================================================
   CAPÍTULO 12 · LA PLAYA — textos en francés
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   ========================================================= */
registrarTextos('playa', 'fr', {
  charlas: [
    {titulo:"Parler avec le maître-nageur", chau:"Profite de la mer ! Fais attention !", pasos:[
      {di:"Bonjour ! Tu vas nager aujourd'hui ?", op:[{t:"Oui, je veux nager !", r:"Super ! L'eau est calme."}, {t:"Oui, avec mes lunettes.", r:"Très bien ! Comme ça, tu verras les poissons."}]},
      {op:[{t:"L'eau est froide ?", r:"Un peu froide, mais on s'y habitue vite."}, {t:"Il y a des poissons ?", r:"Oui, plein de poissons de toutes les couleurs !"}]},
      {di:"Tu veux de la crème solaire ?", op:[{t:"Oui, s'il te plaît.", r:"Tiens. Mets-en sur les bras et sur le visage."}, {t:"Oui, je ne veux pas attraper de coup de soleil.", r:"Bien pensé !"}]},
      {op:[{t:"Où je laisse mes affaires ?", r:"Sous le parasol."}, {t:"Je peux y aller maintenant ?", r:"Oui ! Mais toujours près de moi."}]}]},
    {titulo:"Parler avec le bâtisseur de châteaux", chau:"Quel beau château ! Au revoir !", pasos:[
      {di:"Regarde mon château de sable ! Tu veux m'aider ?", op:[{t:"Oui, je t'aide !", r:"Super ! Il me faut plus de sable."}, {t:"Quel joli château !", r:"Merci ! Je l'ai fait avec le seau."}]},
      {op:[{t:"Qu'est-ce que tu utilises ?", r:"Un seau et une petite pelle."}, {t:"On lui met une tour ?", r:"Oui ! La tour la plus haute."}]},
      {di:"Où met-on un drapeau ?", op:[{t:"Sur la tour la plus haute.", r:"Bonne idée ! Il sera parfait là."}, {t:"Au-dessus du château.", r:"Oui ! Comme ça, tout le monde le voit."}]},
      {op:[{t:"Et si une vague arrive ?", r:"Ce n'est pas grave ! On en fait un autre."}, {t:"Je peux faire un chemin ?", r:"Bien sûr ! Creuse avec la pelle."}]}]},
    {titulo:"Parler avec le petit poisson", chau:"Glou, glou ! À bientôt !", pasos:[
      {di:"Bonjour ! Bienvenue au fond de la mer !", op:[{t:"Bonjour, petit poisson !", r:"Glou, glou ! Je suis si content !"}, {t:"Que la mer est belle !", r:"C'est ma maison !"}]},
      {op:[{t:"Comment tu t'appelles ?", r:"Je m'appelle Bulle."}, {t:"Avec qui tu vis ?", r:"Avec ma famille de poissons."}]},
      {di:"Tu veux nager avec moi ?", op:[{t:"Oui, allons-y !", r:"Suis-moi ! Glou, glou."}, {t:"Oui, mais doucement.", r:"Bien sûr ! Tout doucement."}]},
      {op:[{t:"Qu'est-ce que tu manges ?", r:"De la nourriture minuscule et des algues."}, {t:"Où vit le crabe ?", r:"Là-bas, entre les rochers."}]}]},
    {titulo:"Parler avec la tortue", chau:"Quelle belle balade ! Au revoir !", pasos:[
      {di:"Bonjour, petit. Que fais-tu par ici ?", op:[{t:"Je nage.", r:"Tu nages si bien !"}, {t:"Je regarde les poissons.", r:"Il y en a beaucoup à voir !"}]},
      {op:[{t:"Quel âge as-tu ?", r:"J'ai cent ans !"}, {t:"Pourquoi vas-tu doucement ?", r:"Parce qu'il n'y a pas de hâte dans la mer."}]},
      {di:"Tu veux monter sur ma carapace ?", op:[{t:"Oui, je veux !", r:"Accroche-toi bien !"}, {t:"Oui, mais doucement.", r:"Tout doucement, comme toujours."}]},
      {op:[{t:"Où on va ?", r:"Voir le trésor de la mer."}, {t:"Où est ta maison ?", r:"Partout où je nage !"}]}]}
  ],
  titulo: "À la plage",
  lugar: {texto:"la plage", silabas:["la","plage"]},
  bienvenida: "On est arrivés à la plage !",
  niveles: [{nombre:"La plage", numTexto:"zéro"}, {nombre:"Sous la mer", numTexto:"un"}],
  estaciones: {
    S: {
      palabra: {texto:"le parasol", silabas:["le","pa","ra","sol"]},
      intro: "On est à la plage ! Voici notre parasol.",
      frase: {texto:"Quelle belle journée à la plage !", partes:["Quelle belle journée","à la plage !"]},
      respuesta: "Oui, il y a beaucoup de soleil !",
      cuento: {
        titulo: "Le parasol rouge",
        paginas: [
          "{N} est arrivé à la plage avec le *parasol* rouge.",
          "« Quelle belle journée à la plage ! » dit {N}.",
          "Le soleil brillait fort, mais sous le parasol il y avait une ombre bien fraîche.",
          "Tout le monde s'est assis à l'ombre pour manger une pastèque."
        ]
      }
    },
    A: {
      palabra: {texto:"le sable", silabas:["le","sa","ble"]},
      intro: "Voici le sable. Il est tout chaud !",
      frase: {texto:"Le sable est chaud.", partes:["Le sable","est chaud."]},
      respuesta: "Attention ! Mets tes tongs !",
      cuento: {
        titulo: "Le château de sable",
        paginas: [
          "{N} et le chien ont rempli le seau de *sable*.",
          "« Le sable est chaud », dit {N}.",
          "Ils ont construit un château avec quatre tours.",
          "Et une petite vague leur a mouillé les pieds !"
        ]
      }
    },
    O: {
      palabra: {texto:"la vague", silabas:["la","va","gue"]},
      intro: "Regarde la mer. Voilà une vague !",
      frase: {texto:"Regarde, une grosse vague !", partes:["Regarde,","une grosse vague !"]},
      respuesta: "Oups ! On a failli être mouillés !",
      cuento: {
        titulo: "La grosse vague",
        paginas: [
          "Une petite *vague* est arrivée sur le rivage.",
          "« Regarde, une grosse vague ! » cria {N}.",
          "Splash ! La vague a mouillé les pieds de {N}.",
          "{N} a ri et a sauté la vague encore une fois."
        ]
      }
    },
    N: {
      palabra: {texto:"les lunettes de plongée", silabas:["les","lu","net","tes","de","plon","gée"]},
      intro: "Voici les lunettes de plongée. Avec elles, on voit sous l'eau !",
      frase: {texto:"Je mets mes lunettes !", partes:["Je mets","mes lunettes !"]},
      respuesta: "Voilà ! Allons voir ce qu'il y a sous l'eau !",
      cuento: {
        titulo: "Les lunettes neuves",
        paginas: [
          "{N} a mis les *lunettes* de plongée et un maillot bleu.",
          "« Je mets mes lunettes ! » dit {N}.",
          "{N} a respiré fort et a plongé dans la mer.",
          "Sous l'eau, tout était bleu et brillant !"
        ]
      }
    },
    F: {
      palabra: {texto:"le poisson", silabas:["le","pois","son"]},
      intro: "On est sous la mer ! Regarde, un petit poisson !",
      frase: {texto:"Bonjour, petit poisson !", partes:["Bonjour,","petit poisson !"]},
      respuesta: "Glou, glou ! Bonjour !",
      cuento: {
        titulo: "Le poisson-clown",
        paginas: [
          "Sous la mer, {N} a vu un *poisson* orange avec des rayures blanches.",
          "« Bonjour, petit poisson ! » dit {N}.",
          "Le poisson a nagé en rond et a fait des bulles.",
          "Glou, glou ! Ils sont devenus amis pour toujours."
        ]
      }
    },
    C: {
      palabra: {texto:"le crabe", silabas:["le","crabe"]},
      intro: "Regarde, un crabe rouge !",
      frase: {texto:"Le crabe marche de côté.", partes:["Le crabe","marche de côté."]},
      respuesta: "Attention aux pinces !",
      cuento: {
        titulo: "Le crabe qui marche de côté",
        paginas: [
          "Entre les rochers vivait un *crabe* rouge.",
          "« Le crabe marche de côté », rit {N}.",
          "Le crabe a levé ses pinces : clac, clac !",
          "{N} a dit au revoir et le crabe s'est caché."
        ]
      }
    },
    T: {
      palabra: {texto:"la tortue", silabas:["la","tor","tue"]},
      intro: "Regarde, une tortue de mer ! Elle nage doucement.",
      frase: {texto:"Nageons ensemble !", partes:["Nageons","ensemble !"]},
      respuesta: "Tout doucement !",
      cuento: {
        titulo: "La tortue de mer",
        paginas: [
          "Une très vieille *tortue* nageait doucement.",
          "« Nageons ensemble ! » dit {N}.",
          "Ils ont nagé entre les algues et les coraux.",
          "À la fin, ils ont trouvé un coffre au trésor."
        ]
      }
    }
  },
  final: {
    pregunta: "On a trouvé le coffre ! On dit bonjour aux amis de la mer ?",
    frase: {texto:"Que la mer est belle !", partes:["Que la mer","est belle !"]},
    // lo que dice cada animal del mar, en el orden de base.js: pez, cangrejo, tortuga, estrella de mar, pulpo
    sonidos: ["Glou, glou !","Clac, clac !","Tout doucement !","Brille, brille !","Splash !"],
    despedida: "À bientôt, la mer !",
    chau: "Au revoir, les amis de la mer !",
    lograste: "Tu as réussi ! Tu as nagé avec tous les animaux de la mer !",
    todos: "Tu as tous les tampons ! Cherche la porte verte : le trésor de la mer t'attend !",
    ppFinal: "Rassemble tous les tampons, puis on va chercher le trésor de la mer !",
    otraVez: "Encore une journée à la plage ! Rassemble les tampons de nouveau.",
    otraVezB: "Un autre jour"
  },
  // el microjuego: las criaturas en el orden de base.js (texto = el nombre, p = la pregunta)
  microjuego: {
    titulo: "Sous la mer !",
    intro: "Écoute et touche la créature de la mer.",
    fin: "Tu as trouvé {n} créatures !",
    alimentar: "Maintenant, donne-leur à manger ! Touche l'eau.",
    pescar: "Maintenant, on va pêcher ! Touche les animaux de la mer avec ton filet : attrape-en le plus possible en une minute !",
    pescaFin: "Tu en as attrapé {n} !",
    ingredientes: [{texto:"le poisson", p:"Où est le poisson ?"}, {texto:"le crabe", p:"Où est le crabe ?"}, {texto:"la tortue", p:"Où est la tortue ?"}, {texto:"l'étoile de mer", p:"Où est l'étoile de mer ?"}, {texto:"le coquillage", p:"Où est le coquillage ?"}, {texto:"la pieuvre", p:"Où est la pieuvre ?"}]
  },
  palabrasExtra: [
    {texto:"le coquillage", silabas:["le","co","quil","lage"]},
    {texto:"l'étoile de mer", silabas:["l'é","toile","de","mer"]},
    {texto:"la pieuvre", silabas:["la","pieu","vre"]},
    {texto:"le bateau", silabas:["le","ba","teau"]},
    {texto:"le soleil", silabas:["le","so","leil"]}
  ],
  frasesExtra: [
    {texto:"Quel soleil !", partes:["Quel soleil !"]},
    {texto:"Splash ! Je suis mouillé !", partes:["Splash !","Je suis mouillé !"]},
    {texto:"À l'eau !", partes:["À l'eau !"]},
    {texto:"Quelle lenteur !", partes:["Quelle lenteur !"]},
    {texto:"Un trésor !", partes:["Un trésor !"]}
  ],
  preguntas: [
    {p:"Qui nage avec des nageoires ?", r:"Le poisson !"},
    {p:"Qui marche de côté ?", r:"Le crabe !"},
    {p:"Qui a une carapace ?", r:"La tortue !"},
    {p:"Qu'est-ce qui nous donne de l'ombre ?", r:"Le parasol !"},
    {p:"Qu'est-ce qu'on met pour voir sous l'eau ?", r:"Les lunettes !"},
    {p:"Qu'est-ce qui va et vient dans la mer ?", r:"La vague !"},
    {p:"Avec quoi fait-on des châteaux ?", r:"Avec le sable !"},
    {p:"Qui a huit bras ?", r:"La pieuvre !"},
    {p:"Qu'est-ce qui brille dans le ciel ?", r:"Le soleil !"},
    {p:"Qu'est-ce qui garde un trésor ?", r:"Le coffre !"}
  ],
  objetos: {"#":"les rochers","=":"la mer","y":"le palmier","n":"le parasol","i":"le rocher","v":"l'algue","w":"le corail","~":"la porte"}
});
