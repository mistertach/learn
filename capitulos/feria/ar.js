/* =========================================================
   CAPÍTULO 5 · LA FERIA — textos en árabe del Golfo.
   Cada texto: "latino|عربي" (a la izquierda lo que lee el grande, a la derecha lo que dice la voz).
   Misma forma que en.js. Cuentos: {N} = nombre · *palabra* = palabra resaltada (en las dos caras).
   Microjuego: 1 = "tuffaha wahda" (singular), 2 = dual ("tuffahtain"), 3 a 10 = número + plural.
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
(()=>{
const L = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(0,i); };
const A = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const U = (...ps) => ps.map(L).join('') + '|' + ps.map(A).join('');
// el dual de cada fruta (se busca por el plural árabe)
const DUAL = {
  'تفاحات': 'tuffahtain|تفاحتين',
  'موزات': 'moztain|موزتين',
  'برتقالات': 'burtugaltain|برتقالتين',
  'حبات فراولة': 'habbtain farawla|حبتين فراولة',
  'حبات كمثرى': 'habbtain kummathra|حبتين كمثرى',
  'ليمونات': 'leemoontain|ليمونتين'
};
// del 3 al 10, delante de un sustantivo femenino el número pierde la -a ("thalath tuffahat")
const ANTES = {
  'ثلاثة': "thalath|ثلاث", 'أربعة': "arba'|أربع", 'خمسة': "khams|خمس", 'ستة': "sitt|ست",
  'سبعة': "sab'|سبع", 'ثمانية': "thaman|ثمان", 'تسعة': "tis'|تسع", 'عشرة': "'ashar|عشر"
};
const uno = n => A(n)==='واحد', dos = n => A(n)==='اثنين';
const cuantas = (n,g) => uno(n) ? g.uno : dos(n) ? (DUAL[A(g.plural)] || U(n, ' ', g.plural)) : U(ANTES[A(n)] || n, ' ', g.plural);
registrarTextos('feria', 'ar', {
  titulo: "as-soog|السوق",
  lugar: {texto:"as-soog|السوق", silabas:["as|اَسْ", "soog|سُوق"]},
  bienvenida: "wasalna as-soog!|وصلنا السوق!",
  niveles: [{nombre:"al-madkhal|المدخل", numTexto:"sifr|صفر"}, {nombre:"al-khadhrawat|الخضروات", numTexto:"wahid|واحد"}, {nombre:"al-kashyar|الكاشير", numTexto:"ithnain|اثنين"}],
  // del 1 al 10 (los usa el microjuego para contar las frutas)
  numeros: ["wahid|واحد", "ithnain|اثنين", "thalatha|ثلاثة", "arba'a|أربعة", "khamsa|خمسة", "sitta|ستة", "sab'a|سبعة", "thamanya|ثمانية", "tis'a|تسعة", "'ashara|عشرة"],
  estaciones: {
    M: {
      palabra: {texto:"at-tuffaha|التفاحة", silabas:["at|اَتْ", "tuf|تُفْ", "faa|فَا", "ha|حَة"]},
      intro: "hatha as-soog. shoof kil hal fawakih!|هذا السوق. شوف كل هالفواكه!",
      frase: {texto:"thalath tuffahat, law samaht.|ثلاث تفاحات، لو سمحت.", partes:["thalath tuffahat,|ثلاث تفاحات،", "law samaht.|لو سمحت."]},
      respuesta: "tafadhal: wahda, thintain, thalath!|تفضل: وحدة، ثنتين، ثلاث!",
      cuento: {
        titulo: "at-tuffaha illi hirbat|التفاحة اللي هربت",
        paginas: [
          "fi as-soog chan fi *tuffah* ahmar yilma'.|في السوق كان في *تفاح* أحمر يلمع.",
          "«thalath tuffahat, law samaht», gal {N}. «wahda, thintain, thalath!»|«ثلاث تفاحات، لو سمحت»، قال {N}. «وحدة، ثنتين، ثلاث!»",
          "oops! tuffaha wahda tahat w tdahrajat 'ala al-gaa'.|أوبس! تفاحة وحدة طاحت وتدحرجت على القاع.",
          "{N} lahagha w hattha fi as-salla. thalath tuffahat!|{N} لحقها وحطها في السلة. ثلاث تفاحات!"
        ]
      }
    },
    N: {
      palabra: {texto:"al-mooza|الموزة", silabas:["al|اَلْ", "moo|مُو", "za|زَة"]},
      intro: "shoof al-mooz, wayed asfar!|شوف الموز، وايد أصفر!",
      frase: {texto:"bcham al-mooza?|بكم الموزة؟", partes:["bcham|بكم", "al-mooza?|الموزة؟"]},
      respuesta: "samaka wahda!|سمكة وحدة!",
      cuento: {
        titulo: "samaka wahda|سمكة وحدة",
        paginas: [
          "al-jaroo chan yibee' *mooz* asfar.|الجرو كان يبيع *موز* أصفر.",
          "«bcham al-mooza?» sa'al {N}. «samaka wahda!»|«بكم الموزة؟» سأل {N}. «سمكة وحدة!»",
          "{N} dafa' samaka wahda, w al-mooza nagzat!|{N} دفع سمكة وحدة، والموزة نقزت!",
          "al-mooza wayed lathitha! yaaay!|الموزة وايد لذيذة! يااي!"
        ]
      }
    },
    O: {
      palabra: {texto:"al-burtugala|البرتقالة", silabas:["al-bur|اَلْبُرْ", "tu|تُ", "gaa|قَا", "la|لَة"]},
      intro: "hni fi burtugal ita's nsawwi 'aseer.|هني في برتقال عشان نسوي عصير.",
      frase: {texto:"burtugaltain, law samaht.|برتقالتين، لو سمحت.", partes:["burtugaltain,|برتقالتين،", "law samaht.|لو سمحت."]},
      respuesta: "wahda, thintain! fiha wayed 'aseer!|وحدة، ثنتين! فيها وايد عصير!",
      cuento: {
        titulo: "'aseer al-burtugal|عصير البرتقال",
        paginas: [
          "chan 'ind al-gatwa *burtugal* mdawwar w malyan 'aseer.|كان عند القطوة *برتقال* مدوّر ومليان عصير.",
          "«burtugaltain, law samaht», gal {N}.|«برتقالتين، لو سمحت»، قال {N}.",
          "al-gatwa 'asarathum: glass malyan 'aseer!|القطوة عصرتهم: كلاس مليان عصير!",
          "{N} shirab al-'aseer. mmm, barid w hilu!|{N} شرب العصير. ممم، بارد وحلو!"
        ]
      }
    },
    Z: {
      palabra: {texto:"al-jazara|الجزرة", silabas:["al|اَلْ", "ja|جَ", "za|زَ", "ra|رَة"]},
      intro: "al-arnab yhib al-jazar wayed.|الأرنب يحب الجزر وايد.",
      frase: {texto:"al-jazara burtugaliya.|الجزرة برتقالية.", partes:["al-jazara|الجزرة", "burtugaliya.|برتقالية."]},
      respuesta: "w tiweela, tiweela, tiweela!|وطويلة، طويلة، طويلة!",
      cuento: {
        titulo: "al-arnab w al-jazara|الأرنب والجزرة",
        paginas: [
          "al-arnab chan 'inda basta kilha *jazar*.|الأرنب كان عنده بسطة كلها *جزر*.",
          "{N} shaf jazara chibeera wayed. «al-jazara burtugaliya», gal {N}.|{N} شاف جزرة كبيرة وايد. «الجزرة برتقالية»، قال {N}.",
          "al-arnab nagaz min al-farha: hathi akilta al-mufadhala!|الأرنب نقز من الفرحة: هذي أكلته المفضلة!",
          "kalaw jazar ma'a ba'adh: krunch, krunch.|كلوا جزر مع بعض: كرنش، كرنش."
        ]
      }
    },
    F: {
      palabra: {texto:"al-farawla|الفراولة", silabas:["al|اَلْ", "fa|فَ", "raw|رَوْ", "la|لَة"]},
      intro: "shoof hal farawla al-hamra.|شوف هالفراولة الحمرا.",
      frase: {texto:"al-farawla sagheera.|الفراولة صغيرة.", partes:["al-farawla|الفراولة", "sagheera.|صغيرة."]},
      respuesta: "sagheera w wayed lathitha!|صغيرة ووايد لذيذة!",
      cuento: {
        titulo: "al-farawla as-sagheera|الفراولة الصغيرة",
        paginas: [
          "fi sandoog sagheer chan fi *farawla* hamra.|في صندوق صغير كان في *فراولة* حمرا.",
          "«al-farawla sagheera!» gal {N} mitfaji'.|«الفراولة صغيرة!» قال {N} متفاجئ.",
          "{N} dhag wahda: wayed hilwa!|{N} ذاق وحدة: وايد حلوة!",
          "sagheera, bas wayed lathitha. shukran!|صغيرة، بس وايد لذيذة. شكراً!"
        ]
      }
    },
    S: {
      palabra: {texto:"al-batteekha|البطيخة", silabas:["al|اَلْ", "bat|بَطْ", "tee|طِي", "kha|خَة"]},
      intro: "wow! shift hal batteekha?|واو! شفت هالبطيخة؟",
      frase: {texto:"al-batteekha chibeera!|البطيخة كبيرة!", partes:["al-batteekha|البطيخة", "chibeera!|كبيرة!"]},
      respuesta: "ee, chibeera wayed! wayed thageela!|إي، كبيرة وايد! وايد ثقيلة!",
      cuento: {
        titulo: "al-batteekha al-'imlaga|البطيخة العملاقة",
        paginas: [
          "fi as-soog chan fi *batteekha* 'imlaga!|في السوق كان في *بطيخة* عملاقة!",
          "«al-batteekha chibeera!» gal {N}.|«البطيخة كبيرة!» قال {N}.",
          "oops! al-batteekha hirbat w tdahrajat… yalla nilhagha!|أوبس! البطيخة هربت وتدحرجت… يلا نلحقها!",
          "akhiran lahagooha. wayed chibeera hal batteekha!|أخيراً لحقوها. وايد كبيرة هالبطيخة!"
        ]
      }
    },
    B: {
      palabra: {texto:"al-meezan|الميزان", silabas:["al|اَلْ", "mee|مِي", "zaan|زَان"]},
      intro: "hatha al-meezan. ita's nwazin al-fawakih.|هذا الميزان. عشان نوزن الفواكه.",
      frase: {texto:"cham wazinha?|كم وزنها؟", partes:["cham|كم", "wazinha?|وزنها؟"]},
      respuesta: "wazinha kilo wahid!|وزنها كيلو واحد!",
      cuento: {
        titulo: "al-meezan|الميزان",
        paginas: [
          "jaroo as-soog chan 'inda *meezan* ahmar.|جرو السوق كان عنده *ميزان* أحمر.",
          "{N} hatt mooza. «cham wazinha?» shway bas!|{N} حط موزة. «كم وزنها؟» شوي بس!",
          "ba'dain hattaw al-batteekha… al-meezan nagaz!|بعدين حطوا البطيخة… الميزان نقز!",
          "«wayed thageela!» dhihak {N}.|«وايد ثقيلة!» ضحك {N}."
        ]
      }
    }
  },
  final: {
    pregunta: "khams samakat!|خمس سمكات!",
    frase: {texto:"tafadhal! shukran!|تفضل! شكراً!", partes:["tafadhal!|تفضل!", "shukran!|شكراً!"]},
    despedida: "taswiga hilwa!|تسويقة حلوة!",
    chau: "ma'a as-salama, ya soog!|مع السلامة يا سوق!",
    lograste: "sawwaitha! ishtarait kil shay!|سويتها! اشتريت كل شي!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: yalla nidfa' 'ind al-kashyar!|عندك كل الأختام! دوّر الباب الأخضر: يلا ندفع عند الكاشير!",
    ppFinal: "ijma' kil al-akhtam, ba'dain nidfa' 'ind al-kashyar!|اجمع كل الأختام، بعدين ندفع عند الكاشير!",
    otraVez: "yom soog thani! ijma' al-akhtam marra thanya.|يوم سوق ثاني! اجمع الأختام مرة ثانية.",
    otraVezB: "yom thani|يوم ثاني"
  },
  // el microjuego que se abre al terminar el lugar (las frutas van en el orden de base.js)
  // n es el número ya escrito ("thalatha|ثلاثة"); cuantas() arma singular, dual o número + plural
  microjuego: {
    cortar: "al-heen yalla ngatta' al-fawakih! marrir subu'ak 'alaiha.|الحين يلا نقطع الفواكه! مرر صبعك عليها.", cortadas: "gatta't {n} min al-fawakih!|قطعت {n} من الفواكه!",
    titulo: "yalla n'abbi as-salla!|يلا نعبي السلة!",
    intro: "isma' ay faakha abi w cham wahda. ilmisha ita's thittha fi as-salla!|اسمع أي فاكهة أبي وكم وحدة. المسها عشان تحطها في السلة!",
    fin: "hatteet {n} min al-fawakih fi as-salla!|حطيت {n} من الفواكه في السلة!",
    pon: (n,g) => U('hutt |حط ', cuantas(n,g), ' fi as-salla.| في السلة.'),
    son: (n,g) => U(cuantas(n,g), '!|!'),
    esa: g => U('mub hathi! dawwir |مب هذي! دوّر ', g.texto, '.|.'),
    ingredientes: [
      {texto:"at-tuffaha|التفاحة", uno:"tuffaha wahda|تفاحة وحدة", plural:"tuffahat|تفاحات"},
      {texto:"al-mooza|الموزة", uno:"mooza wahda|موزة وحدة", plural:"mozat|موزات"},
      {texto:"al-burtugala|البرتقالة", uno:"burtugala wahda|برتقالة وحدة", plural:"burtugalat|برتقالات"},
      {texto:"al-farawla|الفراولة", uno:"habbat farawla wahda|حبة فراولة وحدة", plural:"habbaat farawla|حبات فراولة"},
      {texto:"al-kummathra|الكمثرى", uno:"habbat kummathra wahda|حبة كمثرى وحدة", plural:"habbaat kummathra|حبات كمثرى"},
      {texto:"al-leemoona|الليمونة", uno:"leemoona wahda|ليمونة وحدة", plural:"leemoonat|ليمونات"}
    ]
  },
  palabrasExtra: [
    {texto:"al-kummathra|الكمثرى", silabas:["al|اَلْ", "kum|كُمْ", "math|مَثْ", "ra|رَى"]},
    {texto:"al-leemoona|الليمونة", silabas:["al|اَلْ", "lee|لِي", "moo|مُو", "na|نَة"]},
    {texto:"as-salla|السلة", silabas:["as|اَسْ", "sal|سَلْ", "la|لَة"]},
    {texto:"al-kees|الكيس", silabas:["al|اَلْ", "kees|كِيس"]}
  ],
  frasesExtra: [
    {texto:"bcham hatha?|بكم هذا؟", partes:["bcham|بكم", "hatha?|هذا؟"]},
    {texto:"hatha chibeer!|هذا كبير!", partes:["hatha chibeer!|هذا كبير!"]},
    {texto:"hatha sagheer.|هذا صغير.", partes:["hatha sagheer.|هذا صغير."]},
    {texto:"kees wahid, law samaht.|كيس واحد، لو سمحت.", partes:["kees wahid,|كيس واحد،", "law samaht.|لو سمحت."]},
    {texto:"lathith!|لذيذ!", partes:["lathith!|لذيذ!"]}
  ],
  preguntas: [
    {p:"ay faakha tiweela w safra?|أي فاكهة طويلة وصفرا؟", r:"al-mooza!|الموزة!"},
    {p:"bi ay faakha nsawwi 'aseer?|بأي فاكهة نسوي عصير؟", r:"bil-burtugal!|بالبرتقال!"},
    {p:"ay faakha chibeera, chibeera, chibeera?|أي فاكهة كبيرة، كبيرة، كبيرة؟", r:"al-batteekha!|البطيخة!"},
    {p:"shu yhib al-arnab yakil?|شو يحب الأرنب ياكل؟", r:"al-jazar!|الجزر!"},
    {p:"ay faakha hamra w sagheera?|أي فاكهة حمرا وصغيرة؟", r:"al-farawla!|الفراولة!"},
    {p:"bi shu nwazin al-fawakih?|بشو نوزن الفواكه؟", r:"bil-meezan!|بالميزان!"},
    {p:"ay faakha hamra w mdawwara?|أي فاكهة حمرا ومدوّرة؟", r:"at-tuffaha!|التفاحة!"},
    {p:"ay faakha safra w hamdha?|أي فاكهة صفرا وحامضة؟", r:"al-leemoona!|الليمونة!"},
    {p:"wain nhutt al-fawakih?|وين نحط الفواكه؟", r:"fi as-salla!|في السلة!"},
    {p:"ay faakha khadhra w shakilha mithil al-gatra?|أي فاكهة خضرا وشكلها مثل القطرة؟", r:"al-kummathra!|الكمثرى!"}
  ],
  objetos: {"#":"al-jidar|الجدار", p:"az-zar'a|الزرعة", c:"sandoog al-fawakih|صندوق الفواكه", "~":"al-bab|الباب"}
});
})();
