/* Idioma: árabe del Golfo (para la conversación). Todo lo que dice el relator y los botones del juego.
   Cada texto tiene dos caras, separadas por "|": las letras latinas (lo que se ve, para el grande)
   y la escritura árabe (lo que dice la voz, que va chiquita debajo). Ejemplo: "marhaba|مرحبا".
   Las funciones arman los textos con U(), que junta las dos caras de cada pedazo.
   Se le habla al chico en masculino (es lo más común en los juegos infantiles).
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos. */
(()=>{
const L = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(0,i); };
const A = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const U = (...ps) => ps.map(L).join('') + '|' + ps.map(A).join('');
const sinFin = (s, re) => [L(s).replace(re,''), A(s).replace(re,'')].join('|');
registrarIdioma({
  codigo: 'ar', nombre: 'العربية (Arabic)', tag: 'ar-AE',
  // voces del Golfo primero; después Arabia Saudita y el resto
  rankVoz: l => (l==='ar-ae'||l==='ar-kw'||l==='ar-qa'||l==='ar-bh'||l==='ar-om')?0 : l==='ar-sa'?1 : l==='ar-eg'?3 : 2,
  // para aprender desde cero: el relator traduce todo al idioma de la familia (se puede apagar en el rincón de los grandes)
  ayudaPorDefecto: true,
  bandera: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60"><rect width="90" height="60" fill="#fff"/><rect width="90" height="20" fill="#00732F"/><rect y="40" width="90" height="20" fill="#000"/><rect width="26" height="60" fill="#FF0000"/></svg>`,
  sonido: {},
  letras: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  t: {
    aventuras: 'mughamarat!|مغامرات!', titulo: 'mughamarat|مغامرات', jugar: 'yalla nil\'ab!|يلا نلعب!', tag: 'ma\'a as-sowt · al-asham aw al-maws|مع الصوت · الأسهم أو الماوس',
    nombreQ: 'shismak?|شسمك؟', nombreOk: 'khalas!|خلاص!',
    quien: 'minu inta?|منو انت؟', quienSub: 'ikhtar sadeeq|اختار صديق', quienDi: 'minu inta? ikhtar sadeeq!|منو انت؟ اختار صديق!',
    holaX: n => U('marhaba, |مرحبا، ', n, '!|!'), holaSub: 'wain nrooh al-yom?|وين نروح اليوم؟', holaDi: n => U('marhaba, |مرحبا، ', n, '! wain nrooh?|! وين نروح؟'),
    semana: 'usboo\'|أسبوع', pronto: 'garreeb!|قريب!', prontoDi: 'garreeb! hal makan yinfitih al-usboo\' al-yay.|قريب! هالمكان ينفتح الأسبوع الياي.',
    actividades: 'al-nashatat|النشاطات', seccionAprender: 'ta\'allam|تعلّم', seccionJugar: 'il\'ab|العب',
    cuentos: 'al-gisas|القصص', practicar: 'al-kalimat wal-jumal|الكلمات والجمل', tienda: 'ad-dukkan|الدكان',
    cuentosDi: 'al-gisas. ay gissa nigra?|القصص. أي قصة نقرا؟', practicarDi: 'yalla nitmarran! ikhtar kilma aw jumla.|يلا نتمرن! اختار كلمة أو جملة.',
    palabras: 'kalimat|كلمات', frases: 'jumal|جمل',
    cerrado: 'hal gissa maskoora.|هالقصة مسكّرة.', abrirCuento: w => U('ita\'s tiftah hal gissa, khudh khitm |عشان تفتح هالقصة، خذ ختم ', w, '.|.'),
    piso: (n, nombre) => U('at-tabig |الطابق ', String(n), '. |. ', nombre, '.|.'),
    intro1: 'imshi bil-asham, aw ilmis wain tibi trooh. itba\' as-sahm al-asfar!|امشِ بالأسهم، أو المس وين تبي تروح. اتبع السهم الأصفر!',
    repeti: 'gool wiyyaai!|قول وياي!', todoJunto: 'al-heen kilha ma\'a ba\'adh!|الحين كلها مع بعض!', teToca: 'dawrak!|دورك!',
    hola: 'marhaba!|مرحبا!', mira: w => U('shoof: |شوف: ', w, '.|.'), donde: w => U('wain |وين ', w, '?|؟'), ups: w => U('oops! hawil marra thanya. wain |أوبس! حاول مرة ثانية. وين ', w, '?|؟'),
    fraseAhora: 'al-heen ingool al-jumla.|الحين نقول الجملة.', estrella: 'lamma tgoolha, ilmis an-najma.|لما تقولها، المس النجمة.', estrellaGrande: 'lamma tgoolha, mama aw baba y\'atoonak an-najma.|لما تقولها، ماما أو بابا يعطونك النجمة.',
    todos: '\'indak kil al-akhtam! dawwir al-bab al-akhdhar. yalla ntir!|عندك كل الأختام! دوّر الباب الأخضر. يلا نطير!', cuentoQ: 'tibi tisma\' gissa? ilmis al-kitab.|تبي تسمع قصة؟ المس الكتاب.',
    ascensor: 'al-mis\'ad! ay tabig?|المصعد! أي طابق؟', aQuePiso: 'ay tabig?|أي طابق؟',
    pasaporte: 'jawazi|جوازي', ppFinal: 'ijma\' kil al-akhtam, ba\'dain ntir!|اجمع كل الأختام، بعدين نطير!', ppFalta: 'ma \'indak hal khitm ba\'ad.|ما عندك هالختم بعد.',
    todaviaNo: 'mub al-heen!|مب الحين!', faltan: (h, n) => U('awwal ijma\' kil al-akhtam. \'indak |أول اجمع كل الأختام. عندك ', String(h), ', w kilhum |، وكلهم ', String(n), '. itba\' as-sahm al-asfar!|. اتبع السهم الأصفر!'),
    queDecimos: 'shingool?|شنقول؟', lograste: 'sawwaitha! tirt fi tayyara sidg!|سويتها! طرت في طيارة صدق!', otroViaje: 'rihla thanya! ijma\' al-akhtam marra thanya.|رحلة ثانية! اجمع الأختام مرة ثانية.',
    conNombre: (f, n) => U(sinFin(f, /!\s*$/), ', |، ', n, '!|!'),
    seguir: 'kammil|كمّل', otraVez: 'marra thanya|مرة ثانية', loDije: 'gilt-ha!|قلتها!', apretado: 'dhghat w khallak|اضغط وخلّك', unCuento: 'gissa!|قصة!', atras: 'rij\'a|رجعة',
    fin: 'at-tammat!|تمّت!', bueno: 'zain|زين', otroViajeB: 'rihla thanya|رحلة ثانية', inicio: 'al-bait|البيت', vamos: 'yalla!|يلا!', listo: 'khalas!|خلاص!',
    peces: n => n===1 ? 'samaka wahda|سمكة وحدة' : n===2 ? 'samaktain|سمكتين' : (n>=3 && n<=10) ? `${n} samakat|${n} سمكات` : `${n} samaka|${n} سمكة`,
    pez: 'shoof! samaka!|شوف! سمكة!', pezQ: 'samaka! ita\'s takilha, jawib:|سمكة! عشان تاكلها، جاوب:', casi: 'garreeb! hawil marra thanya.|قريب! حاول مرة ثانية.', nam: 'yammi, yammi!|يمي، يمي!',
    premio: s => U('ribaht |ربحت ', s, '!|!'),
    cuentaDi: 'gool l-wahid kabeer yidkhil.|قول لواحد كبير يدخل.', quienJuega: 'minu yil\'ab?|منو يلعب؟', capPrimero: w => U('awwal khallis |أول خلّص ', w, '.|.'), capCerrado: 'hal makan maskoor ba\'ad.|هالمكان مسكّر بعد.',
    repasar: 'yalla nraaji\'!|يلا نراجع!', repasoDi: 'yalla nraaji\'! kalimat aw jumal?|يلا نراجع! كلمات أو جمل؟', repasoPalabras: 'kalimat|كلمات', repasoFrases: 'jumal|جمل',
    repasoPalabrasDi: 'isma\' w ilmis as-soora.|اسمع والمس الصورة.', repasoFrasesDi: 'gool wiyyaai.|قول وياي.', repasoVacio: 'awwal il\'ab fi makan, ba\'dain inraaji\'.|أول العب في مكان، بعدين نراجع.',
    repasoMerienda: 'al-kaskat|البسكويت', repasoMeriendaDi: 'taddarab ala al-kalimat wal-jumal litaksiba kaskat!|تدرب على الكلمات والجمل لتكسب بسكويتة!',
    unPececito: 'samaka lak!|سمكة لك!', ganasteCaballito: 'ribaht hsan al-bahar!|ربحت حصان البحر!', valeDos: 'yiswa samaktain.|يسوى سمكتين.',
    ganasteGalletita: 'ribaht kaskata!|ربحت بسكويتة!', animalesGalletita: 'al-hayawanat tuhibbu al-kaskat!|الحيوانات تحب البسكويت!', valeTres: 'yiswa thalathat asmak.|يسوى ثلاث سمكات.',
    juegos: 'al-al\'ab!|الألعاب!', juegosDi: 'al-al\'ab. shnil\'ab?|الألعاب. شنلعب؟', juegoCerrado: w => U('ita\'s tiftah hal li\'ba, khallis |عشان تفتح هاللعبة، خلّص ', w, '.|.'), juegoNuevo: 'w ribaht li\'ba yideeda!|وربحت لعبة جديدة!', aJugar: 'yalla nil\'ab!|يلا نلعب!', juegoGratis: 'hal marra balash!|هالمرة بلاش!',
    tenesPeces: s => U('\'indak |عندك ', s, '.|.'), escapo: 'oops! as-samaka sharadat. bitiji wahda thanya!|أوبس! السمكة شردت. بتجي وحدة ثانية!',
    cualEs: w => U('wain |وين ', w, '?|؟'), si: w => U('ee! |إي! ', w, '.|.'), color: c => U('ay wahid lonah |أي واحد لونه ', c, '?|؟'), cuantos: 'cham samaka fi?|كم سمكة في؟',
    colores: {rojo:'ahmar|أحمر', azul:'azrag|أزرق', amarillo:'asfar|أصفر', verde:'akhdhar|أخضر', violeta:'banafsaji|بنفسجي', naranja:'burtugali|برتقالي', rosa:'wardi|وردي', negro:'aswad|أسود', blanco:'abyadh|أبيض'},
    numeros: ['sifr|صفر','wahid|واحد','ithnain|اثنين','thalatha|ثلاثة','arba\'a|أربعة','khamsa|خمسة','sitta|ستة'],
    elogios: ['zain|زين','mumtaz|ممتاز','wayed zain|وايد زين','shatir|شاطر','ahsant|أحسنت'], elogio: (x, n) => n ? U(x, ', |، ', n, '!|!') : U(x, '!|!'),
    animales: {cat:{f:'al-gattwa|القطوة', m:'al-gattu|القطو'}, dog:{m:'al-chalb|الكلب'}, bunny:{m:'al-arnab|الأرنب'}, bear:{m:'ad-dub|الدب'}},
    objetos: {'#':'al-jidar|الجدار', b:'al-kirsi|الكرسي', p:'az-zar\'a|الزرعة', '~':'al-bab|الباب'},
    // la tienda
    tiendaHola: 'marhaba! hatha ad-dukkan. shtibi tishtiri?|مرحبا! هذا الدكان. شتبي تشتري؟', quiero: i => U('abi |أبي ', i, ', law samaht.|، لو سمحت.'),
    cuesta: s => U('si\'rah |سعره ', s, '.|.'), noAlcanza: s => U('tihtaj |تحتاج ', s, ' ba\'ad. dawwir samak akthar!| بعد. دوّر سمك أكثر!'), comprado: i => U('tafadhal! al-heen \'indak |تفضل! الحين عندك ', i, '.|.'),
    queda: 'wayed hilu \'alaik!|وايد حلو عليك!', comprar: 'ishtiri|اشتري', ponerme: 'ilbis|البس', sacarme: 'shil|شيل',
    ropa: {remera_roja:'at-tishirt al-ahmar|التيشيرت الأحمر', remera_rayas:'at-tishirt al-mkhattat|التيشيرت المخطط', remera_estrella:'tishirt an-najma|تيشيرت النجمة', camiseta:'fanilat al-kora|فانيلة الكورة',
           short:'ash-short|الشورت', pantalon:'al-bantaloon|البنطلون', gorra:'al-kab|الكاب', gorro:'at-tagiyya as-soof|الطاقية الصوف', corona:'at-taj|التاج',
           anteojos:'an-nathara ash-shamsiyya|النظارة الشمسية', mono:'al-bibyoon|البيبيون', bufanda:'al-ishar|الإيشارب', capa:'ar-rida\'|الرداء',
           gadget_agua:'musaddas al-ma\'a al-bahri|مسدس الماء البحري', gadget_musica:'ar-radyo al-moseeqi|الراديو الموسيقي', gadget_burbujas:'asa al-faqaqee\' as-sihriyya|عصا الفقاقيع السحرية', gadget_estrellas:'asa an-nujoom adh-dhahabiyya|عصا النجوم الذهبية', gadget_fiesta:'madfa\' al-haflaat|مدفع الحفلات'}
  }
});
})();
