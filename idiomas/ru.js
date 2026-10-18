/* Idioma: ruso (para aprender, con la familia hablando español o inglés). Todo lo que dice el relator y los botones del juego.
   Como el árabe, cada texto tiene dos caras separadas por "|": las letras latinas (lo que se ve grande, para el grande que
   no lee cirílico: se arma SOLO con ruTranslit) y el cirílico (lo que dice la voz, que va chiquito abajo).
   Para escribir los textos del ruso: se escribe en cirílico y ruDoble() les agrega la cara latina a todos los textos de un objeto;
   las funciones arman los textos con U(), que junta las dos caras de cada pedazo. ruP(texto) y ruF(texto) arman palabras (con
   sus sílabas) y frases (con sus partes) sin tener que cortarlas a mano.
   Al chico se le habla sin marcar género (nada de "сделал/сделала"). El acento no se escribe.
   ⚠ Para revisar con alguien que hable ruso antes de usarlo con chicos. */
(()=>{
/* ---- cirílico → latino (para que lo lea el grande) ---- */
const MAPA = {а:'a',б:'b',в:'v',г:'g',д:'d',ж:'zh',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'shch',ы:'y',э:'e',ю:'yu',я:'ya',ъ:'',ь:''};
const VOC = 'аеёиоуыэюя';
function ruTranslit(s){
  s = String(s); let out = '';
  for(let i=0;i<s.length;i++){
    const ch = s[i], lo = ch.toLowerCase(), mayus = ch !== lo;
    let r;
    if(lo==='е' || lo==='ё'){
      const prev = (s[i-1]||'').toLowerCase(), inicio = !prev || !/[а-яё]/.test(prev) || VOC.includes(prev) || prev==='ъ' || prev==='ь';
      r = lo==='е' ? (inicio?'ye':'e') : (inicio?'yo':'o');
    } else if(MAPA[lo] !== undefined) r = MAPA[lo];
    else { out += ch; continue; }
    out += mayus && r ? r[0].toUpperCase() + r.slice(1) : r;
  }
  return out;
}
window.ruTranslit = ruTranslit;
const tieneCir = s => /[Ѐ-ӿ]/.test(s);
const L = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? ruTranslit(s) : s.slice(0,i); };
const A = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const U = (...ps) => ps.map(L).join('') + '|' + ps.map(A).join('');
const doble = s => tieneCir(s) ? ruTranslit(s) + '|' + s : s;
/* le pone las dos caras a todos los textos con cirílico de un objeto (las funciones no se tocan) */
window.ruDoble = function ruDoble(x){
  if(typeof x === 'string') return x.includes('|') ? x : doble(x);
  if(Array.isArray(x)) return x.map(ruDoble);
  if(x && typeof x === 'object'){ const o = {}; for(const k in x) o[k] = ruDoble(x[k]); return o; }
  return x;
};
window.ruU = U;

/* ---- sílabas ---- */
const CONS_FIN = 'йъь';   // se pegan a la sílaba de antes
function silabasPalabra(w){
  const bajo = w.toLowerCase(); if(!/[аеёиоуыэюя]/.test(bajo)) return [w];
  const sil = []; let i = 0; const n = w.length, esV = k => VOC.includes(bajo[k]);
  const nuc = []; for(let k=0;k<n;k++) if(esV(k)) nuc.push(k);
  if(nuc.length<=1) return [w];
  let ini = 0;
  for(let j=0;j<nuc.length-1;j++){
    const a = nuc[j], b = nuc[j+1]; let corte;
    const entre = b - a - 1;   // consonantes entre las dos vocales
    if(entre===0) corte = b;
    else { corte = b - 1;      // la última consonante va con la vocal que sigue
      if(entre>=2){ // 'й' y los signos blandos/duros se quedan con la anterior; "стр-", "ль"… se parten antes de la última
        while(corte>a+1 && CONS_FIN.includes(bajo[corte])) corte++; }
      if(CONS_FIN.includes(bajo[corte-1]) && corte-1>a) corte = corte; }
    // una consonante final blanda/dura entre vocales: se queda con la anterior
    if(entre>=1 && CONS_FIN.includes(bajo[b-1]) && entre===1) corte = b-1;
    sil.push(w.slice(ini, corte)); ini = corte;
  }
  sil.push(w.slice(ini)); return sil.filter(Boolean);
}
/* las palabras sin vocal (в, к, с) no se pueden decir solas: se pegan a la palabra que sigue */
const juntarMudas = t => t.split(/\s+/).reduce((a, p) => { if(a.length && !/[аеёиоуыэюяАЕЁИОУЫЭЮЯ]/.test(a[a.length-1].replace(/[^\p{L}]/gu,'')) && /^\p{L}+$/u.test(a[a.length-1])) a[a.length-1] += ' ' + p; else a.push(p); return a; }, []);
const silabasFrase = t => juntarMudas(t).flatMap(p => { const m = p.match(/^([«"¡¿(]*)(.*?)([».,!?…:;"—)]*)$/); const s = silabasPalabra(m[2]); if(m[1]) s[0] = m[1]+s[0]; if(m[3]) s[s.length-1] += m[3]; return s; });
/* partes de una frase: de a dos palabras (la frase se arma de a poco) */
function partesFrase(t){
  const pal = t.split(/\s+/); if(pal.length<=2) return [t];
  const partes = []; const tam = pal.length<=4 ? 2 : 3;
  for(let i=0;i<pal.length;i+=tam) partes.push(pal.slice(i,i+tam).join(' '));
  return partes;
}
window.ruP = (texto) => ({texto, silabas: silabasFrase(texto)});
window.ruF = (texto, partes) => ({texto, partes: partes || partesFrase(texto)});
window.ruSilabas = silabasFrase;

const plural = (n, a, b, c) => { const m = n%100, d = n%10; return (m>10 && m<20) ? c : d===1 ? a : (d>=2 && d<=4) ? b : c; };
const sinFin = f => [L(f).replace(/!\s*$/,''), A(f).replace(/!\s*$/,'')];

registrarIdioma({
  codigo: 'ru', nombre: 'Русский (Russian)', tag: 'ru-RU',
  rankVoz: l => l==='ru-ru'?0 : 1,
  ayudaPorDefecto: true,
  bandera: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><rect width="90" height="60" fill="#fff"/><rect y="20" width="90" height="20" fill="#0039A6"/><rect y="40" width="90" height="20" fill="#D52B1E"/></svg>`,
  sonido: {},
  letras: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
  t: Object.assign(ruDoble({
    aventuras: 'Приключения!', titulo: 'Приключения', jugar: 'Играть!', tag: 'Со звуком · стрелки или мышка, чтобы ходить',
    nombreQ: 'Как тебя зовут?', nombreOk: 'Готово!',
    quien: 'Кто ты?', quienSub: 'Выбери друга', quienDi: 'Кто ты? Выбери друга!',
    holaSub: 'Куда пойдём сегодня?',
    semana: 'Неделя', pronto: 'Скоро!', prontoDi: 'Скоро! Это место откроется на следующей неделе.',
    actividades: 'Занятия', seccionAprender: 'Учиться', seccionJugar: 'Играть',
    charlas: 'Поболтать', charlasDi: 'Давай поболтаем! С кем хочешь поговорить?', charlaCerrada: 'Сначала познакомься с этим другом в его месте.',
    charlaResponde: 'Теперь твоя очередь отвечать!', charlaPregunta: 'Теперь ты что-нибудь спроси!', charlaFin: 'Вы славно поболтали! Молодец!',
    laberinto: 'Волшебная башня', laberintoDi: 'Волшебная башня! Выбери любую дверь и учи новые слова. Золотые двери — это бонус!', temas: ['Слова игры', 'Животные', 'Тело и одежда', 'Еда и дом', 'Мир вокруг', 'Люди и действия', 'Фразы на каждый день', 'Ещё фразы'], torreInvita: 'Хочешь выучить ещё больше слов? Есть волшебная башня, где их очень много! Это по желанию: ходи, когда захочешь.', temaListo: 'Этаж пройден!', torreFin: 'Вся башня пройдена! Молодец!', salaCerrada: 'Эта комната закрыта. Сначала закончи предыдущую.', palabraDia: 'Слово дня!', palabraDiaHecha: 'У тебя есть слово на сегодня! Приходи завтра!',
    nivel0: 'Уровень ноль', nivel0Titulo: 'Интро', nivel0Di: 'Интро! Заходи в синие двери и учи слова, которые понадобятся для игры.', nivel0Hecho: 'Ты знаешь все эти слова! Молодец!',
    nivel0Todas: 'Все слова', nivel0Grupo: 'Группа пройдена!',
    contarTitulo: 'Посчитаем рыбок!', contar: 'Считать',
    dilo: 'Скажи вслух!',
    cuentos: 'Сказки', practicar: 'Слова и фразы', tienda: 'Магазин',
    cuentosDi: 'Сказки. Какую прочитаем?', practicarDi: 'Слова и фразы. Выбери, что хочешь потренировать.',
    palabras: 'Слова', frases: 'Фразы',
    cerrado: 'Эта сказка закрыта.',
    intro1: 'Ходи стрелками или нажимай туда, куда хочешь пойти. Иди за жёлтой стрелкой!',
    repeti: 'Повторяй за мной!', todoJunto: 'Теперь всё вместе!', teToca: 'Твоя очередь!',
    hola: 'Привет!',
    fraseAhora: 'Теперь скажем фразу.', estrella: 'Когда скажешь, нажми на звёздочку.', estrellaGrande: 'Когда скажешь, мама или папа дадут тебе звёздочку.',
    todos: 'У тебя все штампы! Ищи зелёную дверь. Полетели!', cuentoQ: 'Хочешь послушать сказку? Нажми на книгу.',
    ascensor: 'Лифт! На какой этаж?', aQuePiso: 'На какой этаж?',
    pasaporte: 'Мой паспорт', ppFinal: 'Собери все штампы, а потом — в полёт!', ppFalta: 'Этого штампа у тебя пока нет.',
    antesDelMar: 'Сначала пройди все станции на пляже. Потом пойдёшь к морю!',
    todaviaNo: 'Ещё нет!',
    queDecimos: 'Что мы скажем?', lograste: 'Получилось! Настоящий полёт на самолёте!', otroViaje: 'Ещё одно путешествие! Собери штампы снова.',
    seguir: 'Дальше', otraVez: 'Ещё раз', loDije: 'Сказано!', apretado: 'Держи нажатым', unCuento: 'Сказка!', atras: 'Назад',
    fin: 'Конец!', bueno: 'Хорошо', otroViajeB: 'Ещё путешествие', inicio: 'Начало', vamos: 'Пошли!', listo: 'Готово!',
    pez: 'Смотри! Рыбка!', pezQ: 'Рыбка! Чтобы её съесть, ответь:', casi: 'Почти! Попробуй ещё раз.', nam: 'Ням-ням!',
    cuentaDi: 'Попроси взрослого войти со своей учётной записью.', quienJuega: 'Кто играет?', capCerrado: 'Это место пока закрыто.',
    repasar: 'Повторим!', repasoDi: 'Повторим! Слова или фразы?', repasoPalabras: 'Слова', repasoFrases: 'Фразы',
    repasoPalabrasDi: 'Слушай и нажимай на картинку.', repasoFrasesDi: 'Повторяй за мной.', repasoVacio: 'Сначала поиграй в каком-нибудь месте, а потом повторим.',
    repasoMerienda: 'Полдник', repasoMeriendaDi: 'Потренируем слова и фразы, чтобы получить вкусное печенье!',
    unPececito: 'Рыбка для тебя!', ganasteCaballito: 'Тебе достался морской конёк!', valeDos: 'Он стоит две рыбки.',
    ganasteGalletita: 'Тебе достаётся печенье!', animalesGalletita: 'Зверята обожают печенье!', valeTres: 'Оно стоит три рыбки.',
    caminoItems: ['рыба','яблоко','вишня','звезда','алмаз'],
    caminoJefe: 'Босс! Используй свои инструменты!', caminoJefeFin: 'Ты победил босса! Какой смелый!',
    camino: 'Дорога', caminoDi: 'Дорога! Беги, прыгай и плыви. Выбери уровень!', caminoCerrado: 'Этот уровень откроется, когда ты выучишь больше слов.', caminoAgua: 'Используй воду!', caminoBurbujas: 'Используй пузыри!', caminoMusica: 'Используй музыку!', caminoFin: 'Ты дошёл до финиша! Теперь скажи это.',
    juegos: 'Игры!', juegosDi: 'Игры. Во что сыграем?', juegoNuevo: 'И у тебя новая игра!', aJugar: 'Играем!', juegoGratis: 'В этот раз бесплатно!',
    sinPeces: 'У тебя пока не хватает рыбок для игры! Собери ещё и возвращайся.',
    escapo: 'Ой! Рыбка уплыла. Скоро приплывёт другая!', cuantos: 'Сколько здесь рыбок?',
    colores: {rojo:'красный', azul:'синий', amarillo:'жёлтый', verde:'зелёный', violeta:'фиолетовый', naranja:'оранжевый', rosa:'розовый', negro:'чёрный', blanco:'белый'},
    numeros: ['ноль','один','два','три','четыре','пять','шесть'],
    elogios: ['Очень хорошо','Здорово','Отлично','Прекрасно','Молодец'],
    animales: {cat:{f:'кошка', m:'кот'}, dog:{m:'собака'}, bunny:{m:'кролик'}, tiger:{m:'тигр'}, lion:{m:'лев'}, giraffe:{f:'жираф', m:'жираф'}},
    objetos: {'#':'стена', b:'скамейка', p:'растение', '~':'дверь'},
    tiendaHola: 'Привет! Это магазин. Что хочешь купить?',
    queda: 'Тебе очень идёт!', comprar: 'Купить', ponerme: 'Надеть', sacarme: 'Снять',
    ropa: {remera_roja:'красная футболка', remera_rayas:'полосатая футболка', remera_estrella:'футболка со звездой', camiseta:'футбольная майка',
           short:'шорты', pantalon:'брюки', gorra:'кепка', gorro:'шерстяная шапка', corona:'корона',
           anteojos:'солнечные очки', mono:'бант', bufanda:'шарф', capa:'плащ',
           gadget_agua:'водяной морской пистолет', gadget_musica:'праздничное музыкальное радио', gadget_burbujas:'волшебные мыльные пузыри', gadget_estrellas:'палочка с золотыми звёздами', gadget_fiesta:'праздничная хлопушка с конфетти'}
  }), {
    holaX: n => U('Привет, ', n, '!'), holaDi: n => U('Привет, ', n, '! Куда пойдём?'),
    abrirCuento: w => U('Чтобы открыть эту сказку, получи штамп: ', w, '.'),
    piso: (n, nombre) => U('Этаж ', String(n), '. ', nombre, '.'),
    mira: w => U('Смотри: ', w, '.'), donde: w => U('Где ', w, '?'), ups: w => U('Ой! Попробуй ещё раз. Где ', w, '?'),
    faltan: (h, n) => U('Сначала собери все штампы. У тебя ', String(h), ', а нужно ', String(n), '. Иди за жёлтой стрелкой!'),
    conNombre: (f, n) => { const [l, a] = sinFin(f); return `${l}, ${ruTranslit(n)}!|${a}, ${n}!`; },
    peces: n => n === 1 ? U('одна рыбка') : U(`${n} ${plural(n, 'рыбка', 'рыбки', 'рыбок')}`),
    premio: s => U('Твоя награда: ', s, '!'),
    capPrimero: w => U('Сначала закончи: ', w, '.'),
    juegoCerrado: w => U('Чтобы открыть эту игру, закончи: ', w, '.'),
    jugarCuesta: s => U('Игра стоит ', s, '. Сыграем?'),
    tenesPeces: s => U('У тебя ', s, '.'),
    cualEs: w => U('Где ', w, '?'), si: w => U('Да! ', w, '.'), color: c => U('Где ', c, ' цвет?'),
    elogio: (x, n) => n ? U(x, ', ', n, '!') : U(x, '!'),
    quiero: i => U('Я выбираю: ', i, '.'),
    cuesta: s => U('Это ', s, '.'), noAlcanza: s => U('Тебе не хватает рыбок. Поищи ещё!'), comprado: i => U('Готово! Теперь у тебя есть ', i, '.')
  })
});
})();
