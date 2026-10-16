/* =========================================================
   CAPÍTULO 8 · LA GRANJA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('granja', 'es', {
  charlas: [
    {titulo:"Charlar con el granjero", chau:"¡Gracias por visitar a la vaca! ¡Hasta pronto!", pasos:[
      {di:"¡Buen día! ¿Querés ver a la vaca?", op:[{t:"¡Sí, quiero ver a la vaca!", r:"Vamos, está por acá."}, {t:"¡Sí, por favor!", r:"¡Seguime!"}]},
      {op:[{t:"¿Qué dice la vaca?", r:"¡La vaca dice muuu!"}, {t:"¿Qué come la vaca?", r:"Come pasto."}]},
      {di:"¿Querés leche fresquita?", op:[{t:"¡Sí, por favor!", r:"Acá tenés un vaso de leche."}, {t:"¡Sí, me encanta la leche!", r:"¡A mí también! Está bien fresquita."}]},
      {op:[{t:"¿De dónde viene la leche?", r:"¡De la vaca!"}, {t:"¿La vaca es grande?", r:"Sí, muy grande y muy mansa."}]}]},
    {titulo:"Charlar con el amigo del gallo", chau:"¡Quiquiriquí! ¡Nos vemos mañana temprano!", pasos:[
      {di:"¡Quiquiriquí! ¡Buen día! ¿Escuchaste al gallo?", op:[{t:"¡Sí, lo escuché!", r:"¡Canta muy fuerte!"}, {t:"No, estaba dormido.", r:"¡Entonces el gallo te acaba de despertar!"}]},
      {op:[{t:"¿Cuándo se despierta el gallo?", r:"¡Muy temprano, cuando sale el sol!"}, {t:"¿El gallo tiene amigos?", r:"¡Sí, todas las gallinas!"}]},
      {di:"¿Sabés cantar como el gallo?", op:[{t:"¡Sí! ¡Quiquiriquí!", r:"¡Maravilloso! ¡Cantás muy bien!"}, {t:"¡Voy a probar! ¡Quiquiriquí!", r:"¡Muy bien! ¡Más fuerte!"}]},
      {op:[{t:"¿Te gusta la granja?", r:"¡Me encanta la granja!"}, {t:"¿Cantamos juntos?", r:"¡Sí! ¡Quiquiriquí!"}]}]},
    {titulo:"Charlar con el amigo del caballo", chau:"¡El caballo te saluda! ¡Hasta pronto!", pasos:[
      {di:"¿Querés acariciar al caballo?", op:[{t:"¡Sí, despacito!", r:"¡Muy bien! Despacito, despacito."}, {t:"Sí, no tengo miedo.", r:"¡Qué valiente sos!"}]},
      {op:[{t:"¿Cómo se llama el caballo?", r:"Se llama Trueno."}, {t:"¿Qué come el caballo?", r:"Come heno y manzanas."}]},
      {di:"¿Le damos una manzana al caballo?", op:[{t:"¡Sí, acá está la manzana!", r:"¡Le encanta! Crunch, crunch."}, {t:"¡Sí, una para él!", r:"¡Dice gracias! ¡Iiiiih!"}]},
      {op:[{t:"¿El caballo corre rápido?", r:"¡Sí, rapidísimo!"}, {t:"¿Puedo montar al caballo?", r:"¡Cuando seas más grande, sí!"}]}]},
    {titulo:"Charlar con el granjero de noche", chau:"¡Buenas noches! ¡Dulces sueños!", pasos:[
      {di:"Ya es de noche. ¿Les damos las buenas noches a los animales?", op:[{t:"¡Sí, buenas noches, animales!", r:"¡Buenas noches! ¡Que duerman bien!"}, {t:"Sí, tienen sueño.", r:"Shhh, hablemos bajito."}]},
      {op:[{t:"¿Ya duermen todos los animales?", r:"¡Casi todos!"}, {t:"¿Con qué sueñan los animales?", r:"Sueñan con pasto verde."}]},
      {di:"¿Te gustó la granja?", op:[{t:"¡Sí, me encantó!", r:"¡Qué alegría!"}, {t:"¡Sí, me encantaron los animales!", r:"¡Y ellos te adoraron a vos!"}]},
      {op:[{t:"¿Puedo volver mañana?", r:"¡Claro! Los animales te esperan."}, {t:"¿Me contás un secreto?", r:"Shhh… los animales te quieren."}]}]}
  ],
  titulo: "La granja",
  lugar: {texto:"la granja", silabas:["la", "gran", "ja"]},
  bienvenida: "¡Llegamos a la granja!",
  niveles: [{nombre:"El granero", numTexto:"cero"}, {nombre:"El corral", numTexto:"uno"}, {nombre:"El estanque", numTexto:"dos"}],
  estaciones: {
    V: {
      palabra: {texto:"la vaca", silabas:["la", "va", "ca"]},
      intro: "¡Hola! Hoy trabajás en la granja: ¡tomá el sombrero! Mirá, esta es la vaca.",
      frase: {texto:"La vaca dice muuu.", partes:["La vaca", "dice muuu."]},
      respuesta: "¡Muuu! ¡Y te doy leche!",
      cuento: {
        titulo: "La vaca y la leche",
        paginas: [
          "En la granja vivía *una vaca* blanca y negra.",
          "«¡Qué grande!», dijo {N}. Y la vaca contestó: «¡Muuu!»",
          "La vaca le regaló a {N} una botella de leche fresquita.",
          "«¡Gracias, vaca!» ¡Muuu!"
        ]
      }
    },
    H: {
      palabra: {texto:"el chancho", silabas:["el", "chan", "cho"]},
      intro: "Al chancho le encanta el barro.",
      frase: {texto:"El chancho está sucio.", partes:["El chancho", "está sucio."]},
      respuesta: "¡Oinc, oinc! ¡Me encanta el barro!",
      cuento: {
        titulo: "El chancho embarrado",
        paginas: [
          "*El chancho* rodaba en el barro: ¡plaf, plaf!",
          "«¡El chancho está sucio!», se rio {N}.",
          "{N} lo bañó con agua y jabón. ¡Cuántas burbujas!",
          "¡Ahora está limpito! Oinc, oinc."
        ]
      }
    },
    O: {
      palabra: {texto:"la oveja", silabas:["la", "o", "ve", "ja"]},
      intro: "Esta es la oveja. ¡Tocala, es muy blandita!",
      frase: {texto:"La oveja es suave.", partes:["La oveja", "es suave."]},
      respuesta: "¡Beee! ¡Mi lana es blandita!",
      cuento: {
        titulo: "La oveja dormilona",
        paginas: [
          "*La oveja* tenía mucha, mucha lana.",
          "{N} la tocó: «¡La oveja es suave!»",
          "La oveja bostezó… y se durmió parada. ¡Zzz!",
          "Cuando se despertó, dijo «¡Beee!» y saltó de alegría."
        ]
      }
    },
    K: {
      palabra: {texto:"el gallo", silabas:["el", "ga", "llo"]},
      intro: "El gallo despierta a todos por la mañana.",
      frase: {texto:"¡Buen día, gallo!", partes:["¡Buen día,", "gallo!"]},
      respuesta: "¡Kikirikí! ¡A levantarse!",
      cuento: {
        titulo: "¡Kikirikí!",
        paginas: [
          "Muy temprano, *el gallo* cantó: ¡Kikirikí!",
          "{N} y la conejita todavía tenían sueño. ¡Zzz!",
          "«¡Buen día, gallo!», dijo {N}.",
          "¡Arriba, a trabajar! Y en el nido encontraron un huevo."
        ]
      }
    },
    B: {
      palabra: {texto:"el caballo", silabas:["el", "ca", "ba", "llo"]},
      intro: "¡Mirá qué lindo caballo!",
      frase: {texto:"El caballo es rápido.", partes:["El caballo", "es rápido."]},
      respuesta: "¡Hiiii! ¡Vamos a galopar!",
      cuento: {
        titulo: "A galopar",
        paginas: [
          "*El caballo* comía pasto, tranquilo.",
          "De repente salió corriendo: ¡tacatá, tacatá!",
          "{N} corrió atrás: «¡El caballo es rápido!»",
          "Al final, el caballo volvió y le dio un besito a {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"el pato", silabas:["el", "pa", "to"]},
      intro: "Este es el estanque de los patos.",
      frase: {texto:"El pato nada.", partes:["El pato", "nada."]},
      respuesta: "¡Cuac, cuac! ¡El agua está fresquita!",
      cuento: {
        titulo: "El pato nadador",
        paginas: [
          "En el estanque nadaba *un pato* verde.",
          "El pato nadaba de un lado al otro: ¡cuac, cuac!",
          "¡Splash! Se metió debajo del agua… ¡y salió con burbujas!",
          "{N} bailó con el pato: ¡cuac, cuac, cuac!"
        ]
      }
    },
    Y: {
      palabra: {texto:"el pollito", silabas:["el", "po", "lli", "to"]},
      intro: "¡Shh! Algo se mueve en el huevo.",
      frase: {texto:"El pollito es chiquito.", partes:["El pollito", "es chiquito."]},
      respuesta: "¡Pío, pío!",
      cuento: {
        titulo: "Los pollitos",
        paginas: [
          "Había un huevo que se movía: crac, crac…",
          "¡Y salió *un pollito* amarillo!",
          "Y después otro… ¡y otro! ¡Tres pollitos chiquitos!",
          "«¡Pío, pío!», le dijeron a {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "Ya es de noche. ¿Saludamos a los animales?",
    frase: {texto:"¡Buenas noches, animales!", partes:["¡Buenas noches,", "animales!"]},
    // lo que dice cada animal, en el orden de base.js: vaca, chancho, oveja, gallo, caballo, pato, pollito
    sonidos: ["¡Muuu!", "¡Oinc, oinc!", "¡Beee!", "¡Kikirikí!", "¡Hiiii!", "¡Cuac, cuac!", "¡Pío, pío!"],
    despedida: "¡Hasta mañana!",
    chau: "¡Chau, granja!",
    lograste: "¡Lo lograste! ¡Cuidaste a todos los animales!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡a saludar a los animales!",
    ppFinal: "Juntá todos los sellos y después, ¡a saludar a los animales!",
    otraVez: "¡Otro día en la granja! Juntá los sellos otra vez.",
    otraVezB: "Otro día"
  },
  // el microjuego: los animales en el orden de base.js (dale = el pedido, sonido = lo que dicen)
  microjuego: {
    burp: "¡Uy! ¡Comió demasiado!", burpCorto: "¡BURP!", libre: "¡Ahora tirá comida por todos lados!",
    titulo: "¡A dar de comer!",
    intro: "Los animales tienen hambre. Escuchá y tocá el animal.",
    fin: "¡Le diste de comer a {n} animales!",
    ingredientes: [
      {texto:"la vaca", dale:"Dale de comer a la vaca.", sonido:"¡Muuu!"},
      {texto:"el chancho", dale:"Dale de comer al chancho.", sonido:"¡Oinc, oinc!"},
      {texto:"la oveja", dale:"Dale de comer a la oveja.", sonido:"¡Beee!"},
      {texto:"el gallo", dale:"Dale de comer al gallo.", sonido:"¡Kikirikí!"},
      {texto:"el caballo", dale:"Dale de comer al caballo.", sonido:"¡Hiiii!"},
      {texto:"el pato", dale:"Dale de comer al pato.", sonido:"¡Cuac, cuac!"}
    ]
  },
  palabrasExtra: [
    {texto:"el huevo", silabas:["el", "hue", "vo"]},
    {texto:"la leche", silabas:["la", "le", "che"]},
    {texto:"el tractor", silabas:["el", "trac", "tor"]},
    {texto:"el granero", silabas:["el", "gra", "ne", "ro"]}
  ],
  frasesExtra: [
    {texto:"¡Qué grande!", partes:["¡Qué grande!"]},
    {texto:"¡Qué chiquito!", partes:["¡Qué chiquito!"]},
    {texto:"¡Qué rápido!", partes:["¡Qué rápido!"]},
    {texto:"¡Qué sucio!", partes:["¡Qué sucio!"]},
    {texto:"¡Qué suave!", partes:["¡Qué suave!"]}
  ],
  preguntas: [
    {p:"¿Quién dice muuu?", r:"¡La vaca!"},
    {p:"¿Quién dice oinc, oinc?", r:"¡El chancho!"},
    {p:"¿Quién dice kikirikí?", r:"¡El gallo!"},
    {p:"¿Quién dice cuac, cuac?", r:"¡El pato!"},
    {p:"¿Quién tiene mucha lana?", r:"¡La oveja!"},
    {p:"¿Quién corre muy rápido?", r:"¡El caballo!"},
    {p:"¿Quién dice pío, pío?", r:"¡El pollito!"},
    {p:"¿Qué nos da la vaca?", r:"¡La leche!"},
    {p:"¿Qué pone la gallina?", r:"¡Un huevo!"},
    {p:"¿Qué maneja el granjero?", r:"¡El tractor!"}
  ],
  objetos: {"#":"la cerca", h:"el fardo de pasto", r:"el árbol", f:"las flores", "~":"la puerta"}
});
