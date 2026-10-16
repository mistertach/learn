/* =========================================================
   CAPÍTULO 10 · LA FIESTA — textos en castellano (Argentina)
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   ========================================================= */
registrarTextos('fiesta', 'es', {
  charlas: [
    {titulo:"Charlar sobre la invitación", chau:"¡Nos vemos en la fiesta!", pasos:[
      {di:"¡Hola! ¡Te invitamos a una fiesta! ¿Querés venir?", op:[{t:"¡Sí, quiero ir!", r:"¡Hurra! Va a ser divertido."}, {t:"¡Sí, gracias por invitarme!", r:"¡De nada! Nos alegra que vengas."}]},
      {op:[{t:"¿Dónde es la fiesta?", r:"¡En el jardín grande!"}, {t:"¿Quién más viene?", r:"¡Todos nuestros amigos!"}]},
      {di:"¿Qué vas a llevar?", op:[{t:"Voy a llevar un regalo.", r:"¡Qué lindo! Gracias."}, {t:"Voy a llevar una gran sonrisa.", r:"¡El mejor regalo de todos!"}]},
      {op:[{t:"¿A qué hora empieza?", r:"¡A las cuatro!"}, {t:"¿Va a haber torta?", r:"¡Sí, una torta enorme!"}]}]},
    {titulo:"Charlar en el calendario", chau:"¡Feliz cumpleaños por adelantado! ¡Hasta pronto!", pasos:[
      {di:"¿En qué estación es tu cumpleaños?", op:[{t:"¡En verano!", r:"¡Los cumpleaños de verano son los mejores!"}, {t:"¡En invierno!", r:"¡Qué acogedor! ¡Chocolate caliente!"}]},
      {op:[{t:"¿Cuándo es tu cumpleaños?", r:"¡En el mes de mayo!"}, {t:"¿Cuántos meses tiene el año?", r:"¡Doce meses!"}]},
      {di:"¿Cuántos años vas a cumplir este año?", op:[{t:"¡Voy a cumplir seis!", r:"¡Seis! Qué grande estás."}, {t:"¡Voy a cumplir cinco!", r:"¡Cinco! Qué linda edad."}]},
      {op:[{t:"¿Cuántos años tenés?", r:"¡Algunos más que vos!"}, {t:"¿Puedo ir a tu cumpleaños?", r:"¡Claro! Te invitamos."}]}]},
    {titulo:"Charlar sobre el regalo", chau:"¡De nada! ¡Disfrutá tu regalo!", pasos:[
      {di:"¡Mirá esta caja grande! Es un regalo para vos. ¿Querés abrirlo?", op:[{t:"¡Sí, quiero abrirlo!", r:"¡Abrilo con cuidado!"}, {t:"¡Sí! ¿Qué es?", r:"¡Es una sorpresa!"}]},
      {op:[{t:"¿De parte de quién es?", r:"¡De todos tus amigos!"}, {t:"¿Es grande?", r:"¡Sí, muy grande!"}]},
      {di:"¡Es un juguete! ¿Te gusta?", op:[{t:"¡Sí, me encanta! ¡Gracias!", r:"¡Qué alegría que te guste!"}, {t:"¡Sí, es hermoso!", r:"Es para vos, con cariño."}]},
      {op:[{t:"¿Jugamos juntos con él?", r:"¡Sí! Juguemos."}, {t:"¿Te doy un abrazo?", r:"¡Sí, un abrazo grande!"}]}]},
    {titulo:"Charlar en la fiesta de cumpleaños", chau:"¡Feliz cumpleaños! ¡Te queremos!", pasos:[
      {di:"¡Sorpresa! ¡Están todos tus amigos! ¡Feliz cumpleaños!", op:[{t:"¡Gracias a todos!", r:"¡De nada! Te queremos."}, {t:"¡Uy, qué sorpresa!", r:"¡Queríamos sorprenderte!"}]},
      {op:[{t:"¿Dónde está la torta?", r:"¡Acá, con velitas!"}, {t:"¿Cantamos?", r:"¡Sí! Cantemos juntos."}]},
      {di:"¡Pedí un deseo y soplá las velitas!", op:[{t:"¡Ya pedí un deseo!", r:"¡Ojalá se cumpla!"}, {t:"¡Uno, dos, tres… soplo!", r:"¡Hurra! ¡Qué soplido!"}]},
      {op:[{t:"¿Me das un pedazo de torta?", r:"¡Claro! El más grande."}, {t:"¿Te divertiste?", r:"¡Fue la mejor fiesta del mundo!"}]}]}
  ],
  titulo: "La fiesta",
  lugar: {texto:"la fiesta", silabas:["la", "fies", "ta"]},
  bienvenida: "¡Hoy es tu cumpleaños!",
  niveles: [{nombre:"La entrada", numTexto:"cero"}, {nombre:"El salón", numTexto:"uno"}, {nombre:"El jardín", numTexto:"dos"}],
  // del 1 al 10 (los usa el microjuego de las velas) y los meses (la estación del calendario)
  numeros: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"],
  meses: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  estaciones: {
    I: {
      palabra: {texto:"la invitación", silabas:["la", "in", "vi", "ta", "ción"]},
      intro: "¡Hoy es tu cumpleaños! Hay que invitar a los amigos.",
      frase: {texto:"¿Venís a mi fiesta?", partes:["¿Venís", "a mi fiesta?"]},
      respuesta: "¡Sí! ¡Gracias por invitarme!",
      cuento: {
        titulo: "Las invitaciones",
        paginas: [
          "{N} preparó *una invitación* para cada amigo.",
          "«¿Venís a mi fiesta?», le preguntó {N} a la conejita.",
          "«¡Sí! ¡Gracias por invitarme!», saltó la conejita.",
          "¡Todos los amigos van a venir! ¡Hurra!"
        ]
      }
    },
    O: {
      palabra: {texto:"el globo", silabas:["el", "glo", "bo"]},
      intro: "¡Hay que inflar los globos!",
      frase: {texto:"¡Inflo el globo!", partes:["¡Inflo", "el globo!"]},
      respuesta: "¡Fuuu… más grande, más grande!",
      cuento: {
        titulo: "El globo gigante",
        paginas: [
          "El perrito trajo *globos* de colores.",
          "{N} sopló: ¡fuuu, fuuu!",
          "El globo creció, creció… ¡y explotó! ¡Pum!",
          "¡Qué risa! Y {N} infló otro, más chiquito."
        ]
      }
    },
    Z: {
      palabra: {texto:"el gorrito", silabas:["el", "go", "rri", "to"]},
      intro: "Para la fiesta, ¡un gorrito!",
      frase: {texto:"¡Me pongo el gorrito!", partes:["¡Me pongo", "el gorrito!"]},
      respuesta: "¡Qué lindo te queda!",
      cuento: {
        titulo: "El gorrito de fiesta",
        paginas: [
          "La gatita tenía *un gorrito* de cumpleaños.",
          "¡El gorrito voló por el aire… y cayó en la cabeza de {N}!",
          "«¡Qué lindo te queda!», aplaudió la gatita.",
          "¡Y bailaron con los gorritos puestos!"
        ]
      }
    },
    R: {
      palabra: {texto:"el regalo", silabas:["el", "re", "ga", "lo"]},
      intro: "¡El osito te trajo un regalo!",
      frase: {texto:"¡Gracias por el regalo!", partes:["¡Gracias", "por el regalo!"]},
      respuesta: "¡De nada! ¡Abrilo!",
      cuento: {
        titulo: "La sorpresa",
        paginas: [
          "El osito llegó con *un regalo* azul.",
          "«¡Gracias por el regalo!», dijo {N}.",
          "{N} lo abrió… ¡era una pelota nueva!",
          "«¡Me encanta!» Y le dio un abrazo al osito."
        ]
      }
    },
    K: {
      palabra: {texto:"el calendario", silabas:["el", "ca", "len", "da", "rio"]},
      intro: "¿Cuándo es tu cumpleaños? ¡Miremos el calendario!",
      contar: "¡Digamos los meses del año! Repetí conmigo.",
      frase: {texto:"¿Cuándo es tu cumpleaños?", partes:["¿Cuándo es", "tu cumpleaños?"]},
      respuesta: "¡En marzo! ¿Y el tuyo?",
      cuento: {
        titulo: "Los doce meses",
        paginas: [
          "El gatito gris miraba *el calendario*: ¡tiene doce meses!",
          "«¿Cuándo es tu cumpleaños?», le preguntó a {N}.",
          "Enero, febrero, marzo… ¡contaron todos los meses!",
          "¡Cada año hay un cumpleaños! ¡Qué suerte!"
        ]
      }
    },
    E: {
      palabra: {texto:"la vela", silabas:["la", "ve", "la"]},
      intro: "¿Cuántas velas tiene la torta?",
      frase: {texto:"¿Cuántos años tenés?", partes:["¿Cuántos años", "tenés?"]},
      respuesta: "¡Tengo cinco! Uno, dos, tres, cuatro, cinco.",
      cuento: {
        titulo: "Las velitas",
        paginas: [
          "El perro trajo *velas* de colores.",
          "«¿Cuántos años tenés?», preguntó {N}. El perro levantó las patas.",
          "«¡Cuatro velas! Uno, dos, tres, cuatro», contó {N}.",
          "¡Y bailaron de contentos!"
        ]
      }
    },
    T: {
      palabra: {texto:"la torta", silabas:["la", "tor", "ta"]},
      intro: "¡Llegó la torta de cumpleaños!",
      frase: {texto:"¡Qué rica la torta!", partes:["¡Qué rica", "la torta!"]},
      respuesta: "¡Es de chocolate y frutilla!",
      cuento: {
        titulo: "La torta",
        paginas: [
          "El oso trajo *una torta* enorme.",
          "«¡Uy, qué torta!», dijo {N}.",
          "{N} cerró los ojos y pidió un deseo…",
          "¡Y comieron torta todos juntos!"
        ]
      }
    }
  },
  final: {
    pregunta: "¡Sorpresa! ¡Vinieron todos tus amigos!",
    frase: {texto:"¡Gracias, amigos!", partes:["¡Gracias,", "amigos!"]},
    // la canción del final ({N} = el nombre)
    cancion: ["¡Que los cumplas feliz!", "¡Que los cumplas feliz!", "¡Que los cumplas, {N}!", "¡Que los cumplas feliz!"],
    despedida: "¡Feliz cumpleaños!",
    chau: "¡Hip, hip, hurra!",
    lograste: "¡Lo lograste! ¡Qué fiesta tan linda!",
    todos: "¡Tenés todos los sellos! Buscá la puerta verde: ¡hay una sorpresa!",
    ppFinal: "Juntá todos los sellos y después, ¡a buscar la sorpresa!",
    otraVez: "¡Otra fiesta! Juntá los sellos otra vez.",
    otraVezB: "Otra fiesta"
  },
  // el microjuego: pon recibe el número ya escrito ("tres")
  microjuego: {
    musica: "¡Ahora tocá el cumpleaños feliz! Tocá la torta, una nota cada vez.", musicaTodo: "Toda la canción", lento: "Lento", rapido: "Rápido", grave: "Grave", agudo: "Agudo", linda: "¡Qué lindo tocaste!", instr: {piano:"El piano", xilofon:"El xilofón", robot:"El robot", trompeta:"La trompeta"},
    titulo: "¿Cuántas velas?",
    intro: "Un amigo cumple años. Escuchá cuántos y poné las velas.",
    fin: "¡Soplaste {n} velas!",
    pon: n => `¡Cumple ${n} años! Poné ${n} velas.`,
    vela: "la vela",
    soplar: "¡Ahora, a soplar!",
    soplarB: "¡A soplar!",
    feliz: "¡Feliz cumpleaños!"
  },
  palabrasExtra: [
    {texto:"la piñata", silabas:["la", "pi", "ña", "ta"]},
    {texto:"el caramelo", silabas:["el", "ca", "ra", "me", "lo"]},
    {texto:"el jugo", silabas:["el", "ju", "go"]}
  ],
  frasesExtra: [
    {texto:"¡Feliz cumpleaños!", partes:["¡Feliz", "cumpleaños!"]},
    {texto:"¡Pedí un deseo!", partes:["¡Pedí", "un deseo!"]},
    {texto:"¿Cuántos años cumplís?", partes:["¿Cuántos años", "cumplís?"]},
    {texto:"¡Bienvenidos a mi fiesta!", partes:["¡Bienvenidos", "a mi fiesta!"]},
    {texto:"¡A soplar las velas!", partes:["¡A soplar", "las velas!"]}
  ],
  preguntas: [
    {p:"¿Qué tiene un moño y una sorpresa adentro?", r:"¡El regalo!"},
    {p:"¿Qué comemos en el cumpleaños?", r:"¡La torta!"},
    {p:"¿Qué inflamos para la fiesta?", r:"¡Los globos!"},
    {p:"¿Qué soplamos en la torta?", r:"¡Las velas!"},
    {p:"¿Qué nos ponemos en la cabeza?", r:"¡El gorrito!"},
    {p:"¿Qué les damos a los amigos para que vengan?", r:"¡La invitación!"},
    {p:"¿Dónde están los meses?", r:"¡En el calendario!"},
    {p:"¿Qué rompemos para que caigan caramelos?", r:"¡La piñata!"},
    {p:"¿Qué cae de la piñata?", r:"¡Caramelos!"},
    {p:"¿Dónde tomamos el jugo?", r:"¡En el vaso!"}
  ],
  objetos: {"#":"la pared", o:"los globos", m:"la mesa", f:"las flores", r:"el árbol", s:"el sillón", "~":"la puerta"}
});
