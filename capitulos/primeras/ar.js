/* =========================================================
   CAPÍTULO 1 · PRIMERAS PALABRAS — textos en árabe del Golfo
   Cada texto: "latino|عربي" (las letras latinas para el grande, la escritura árabe para la voz).
   Misma forma que en.js. Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
(()=>{
const L = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(0,i); };
const A = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const U = (...ps) => ps.map(L).join('') + '|' + ps.map(A).join('');
registrarTextos('primeras', 'ar', {
  charlas: [
    {titulo:"nsawlif wiyya al-arnoba|نسولف ويا الأرنبة", chau:"tsharrafna! nshoofik qareeb!|تشرفنا! نشوفك قريب!", pasos:[
      {di:"marhaba! shismik?|مرحبا! شسمك؟", op:[{t:"ismi {N}.|اسمي {N}.", r:"ya hilw al-ism!|يا حلو الاسم!"}, {t:"marhaba! ana {N}.|مرحبا! أنا {N}.", r:"tsharrafna, {N}!|تشرفنا، {N}!"}]},
      {op:[{t:"shlonik?|شلونك؟", r:"zaina, shukran!|زينة، شكراً!"}, {t:"wenti, shismik?|وإنتي، شسمك؟", r:"ismi bumba.|اسمي بمبا."}]},
      {di:"tihibb tal'ab?|تحب تلعب؟", op:[{t:"aywa, ahibb al-la'ib!|أيوا، أحب اللعب!", r:"wana ba'd! al-la'ib ahla shi.|وأنا بعد! اللعب أحلى شي."}, {t:"aywa, wayed!|أيوا، وايد!", r:"wana ba'd! ahibbah wayed.|وأنا بعد! أحبه وايد."}]},
      {op:[{t:"tibi tkoonin sadeeqti?|تبي تكونين صديقتي؟", r:"aywa! sirna asdiqa'!|أيوا! صرنا أصدقاء!"}, {t:"shu tihibbin tal'abin?|شو تحبين تلعبين؟", r:"ahibb al-makhabba.|أحب المخبأ."}]}]},
    {titulo:"nsawlif wiyya al-qitta|نسولف ويا القطة", chau:"shukran ya sadeeqi! ma'a as-salama!|شكراً يا صديقي! مع السلامة!", pasos:[
      {di:"shoof, ladai hadiyya lak!|شوف، لدي هدية لك!", op:[{t:"shukran!|شكراً!", r:"afwan!|عفواً!"}, {t:"shukran jazeelan!|شكراً جزيلاً!", r:"afwan ya sadeeqi!|عفواً يا صديقي!"}]},
      {op:[{t:"shu hatha?|شو هذا؟", r:"hathi najma saghira!|هذي نجمة صغيرة!"}, {t:"hiya li?|هي لي؟", r:"aywa, hiya lak!|أيوا، هي لك!"}]},
      {di:"tibi tishaarikha wiyyaai?|تبي تشاركها وياي؟", op:[{t:"aywa, nishaarik!|أيوا، نشارك!", r:"ma ahla! al-musharaka jameela.|ما أحلى! المشاركة جميلة."}, {t:"aywa, min fadlik!|أيوا، من فضلك!", r:"tafaddal, an-nisf lak wan-nisf li.|تفضل، النصف لك والنصف لي."}]},
      {op:[{t:"tijibik?|تعجبك؟", r:"ahibbaha wayed!|أحبها وايد!"}, {t:"agdar ahdhinik?|أقدر أحضنك؟", r:"aywa, hidhin kabeer!|أيوا، حضن كبير!"}]}]},
    {titulo:"nsawlif wiyya ad-dubb|نسولف ويا الدب", chau:"kan munsha'! nshoofak qareeb!|كان منعش! نشوفك قريب!", pasos:[
      {di:"ana atshaan. tibi maay?|أنا عطشان. تبي مي؟", op:[{t:"aywa, maay min fadlak!|أيوا، مي من فضلك!", r:"tafaddal. sahha!|تفضل. صحة!"}, {t:"aywa, ana atshaan ba'd!|أيوا، أنا عطشان بعد!", r:"hatha kaas lak.|هذا كاس لك."}]},
      {op:[{t:"al-maay baarid?|المي بارد؟", r:"aywa, baarid wayed!|أيوا، بارد وايد!"}, {t:"min wain yiji al-maay?|من وين يجي المي؟", r:"min al-hanafiyya wal-matar!|من الحنفية والمطر!"}]},
      {di:"tibi ziyada?|تبي زيادة؟", op:[{t:"aywa, ziyada min fadlak!|أيوا، زيادة من فضلك!", r:"akeed! hatha ziyada.|أكيد! هذا زيادة."}, {t:"la, shukran. shbi'at.|لا، شكراً. شبعت.", r:"tamam. shukran li-shurbak wiyyaai.|تمام. شكراً لشربك وياي."}]},
      {op:[{t:"tihibb al-maay?|تحب المي؟", r:"aywa, huwa al-mufaddal indi!|أيوا، هو المفضل عندي!"}, {t:"nal'ab?|نلعب؟", r:"aywa! yalla nal'ab!|أيوا! يلا نلعب!"}]}]},
    {titulo:"nsawlif 'ind al-baab|نسولف عند الباب", chau:"ma'a as-salama ya sadeeqi! nshoofak fil-mughamara!|مع السلامة يا صديقي! نشوفك في المغامرة!", pasos:[
      {di:"inta ta'rif kalimaat wayed al-heen! nroh mughamara?|إنت تعرف كلمات وايد الحين! نروح مغامرة؟", op:[{t:"aywa, yalla!|أيوا، يلا!", r:"hurra! ta'al wiyyaai.|هورا! تعال وياي."}, {t:"aywa, ana jahiz!|أيوا، أنا جاهز!", r:"mumtaz! yalla nimshi.|ممتاز! يلا نمشي."}]},
      {op:[{t:"wain nroh?|وين نروح؟", r:"li-amakin jadeeda wayed!|لأماكن جديدة وايد!"}, {t:"min yiji wiyyana?|من يجي وياينا؟", r:"kil asdiqa'ak!|كل أصدقاءك!"}]},
      {di:"inta farhaan?|إنت فرحان؟", op:[{t:"aywa, ana farhaan wayed!|أيوا، أنا فرحان وايد!", r:"wana ba'd! shu hal-farha.|وأنا بعد! شو هالفرحة."}, {t:"aywa, ahibb al-mughamarat!|أيوا، أحب المغامرات!", r:"wana ba'd! al-mughamarat mumti'a.|وأنا بعد! المغامرات ممتعة."}]},
      {op:[{t:"wenti farhaana ba'd?|وإنتي فرحانة بعد؟", r:"aywa, farhaana wayed!|أيوا، فرحانة وايد!"}, {t:"nigdar nroh al-heen?|نقدر نروح الحين؟", r:"aywa! yalla nimshi!|أيوا! يلا نمشي!"}]}]}
  ],
  titulo: "al-bayt 'ala ash-shajara|البيت على الشجرة",
  lugar: {texto:"bait ash-shajara|بيت الشجرة", silabas:["bait|بَيْت", "ash|اَشْ", "sha|شَ", "ja|جَ", "ra|رَة"]},
  bienvenida: "wasalna bait ash-shajara!|وصلنا بيت الشجرة!",
  niveles: [{nombre:"al-hadeega|الحديقة", numTexto:"sifr|صفر"}, {nombre:"al-jidh'|الجذع", numTexto:"wahid|واحد"}, {nombre:"bait ash-shajara|بيت الشجرة", numTexto:"ithnain|اثنين"}],
  estaciones: {
    H: {
      palabra: {texto:"marhaba|مرحبا", silabas:["mar|مَرْ", "ha|حَ", "ba|بَا"]},
      intro: "lamma noosal, ingool marhaba.|لما نوصل، نقول مرحبا.",
      frase: {texto:"marhaba! shlonak?|مرحبا! شلونك؟", partes:["marhaba!|مرحبا!", "shlonak?|شلونك؟"]},
      respuesta: "wayed zain!|وايد زين!",
      cuento: {
        titulo: "marhaba, ya sadeeqti!|مرحبا يا صديقتي!",
        paginas: [
          "al-arnooba tgool *marhaba* w tlawwih b-eedha.|الأرنوبة تقول *مرحبا* وتلوّح بيدها.",
          "{N} sallam 'alaiha: \"marhaba! shlonich?\"|{N} سلّم عليها: «مرحبا! شلونج؟»",
          "\"wayed zain!\" galat al-arnooba, w nagzat.|«وايد زين!» قالت الأرنوبة، ونقزت.",
          "al-heen saraw asdiqa!|الحين صاروا أصدقاء!"
        ]
      }
    },
    S: {
      palabra: {texto:"na'am|نعم", silabas:["na|نَ", "'am|عَمْ"]},
      intro: "lamma nibi shay, ingool na'am.|لما نبي شي، نقول نعم.",
      frase: {texto:"na'am, law samaht!|نعم، لو سمحت!", partes:["na'am,|نعم،", "law samaht!|لو سمحت!"]},
      respuesta: "tafadhal!|تفضل!",
      cuento: {
        titulo: "al-baskoota|البسكوتة",
        paginas: [
          "ad-dabdoob 'indah baskoota. \"tibiha?\"|الدبدوب عنده بسكوتة. «تبيها؟»",
          "\"*na'am*, law samaht!\" gal {N}.|«*نعم*، لو سمحت!» قال {N}.",
          "mmm, lathith!|ممم، لذيذ!",
          "\"shukran, ya dabdoob!\"|«شكرا يا دبدوب!»"
        ]
      }
    },
    N: {
      palabra: {texto:"la|لا", silabas:["la|لَا"]},
      intro: "lamma ma nibi shay, ingool la.|لما ما نبي شي، نقول لا.",
      frase: {texto:"la, shukran.|لا، شكرا.", partes:["la,|لا،", "shukran.|شكرا."]},
      respuesta: "ma yikhalif!|ما يخالف!",
      cuento: {
        titulo: "ash-shorba|الشوربة",
        paginas: [
          "al-jarw yab shorba harra.|الجرو ياب شوربة حارة.",
          "{N} ma kan yoo'aan. \"*la*, shukran.\"|{N} ما كان يوعان. «*لا*، شكرا.»",
          "\"ma yikhalif!\" gal al-jarw.|«ما يخالف!» قال الجرو.",
          "ba'dain kalaw ays krim. hatha nabeeh!|بعدين كلوا آيس كريم. هذا نبيه!"
        ]
      }
    },
    G: {
      palabra: {texto:"shukran|شكرا", silabas:["shuk|شُكْ", "ran|رَنْ"]},
      intro: "lamma ahad y'atina shay, ingool shukran.|لما أحد يعطينا شي، نقول شكرا.",
      frase: {texto:"shukran wayed!|شكرا وايد!", partes:["shukran|شكرا", "wayed!|وايد!"]},
      respuesta: "al-'afu!|العفو!",
      cuento: {
        titulo: "al-warda|الوردة",
        paginas: [
          "al-gatwa galbha chibeer wayed.|القطوة قلبها كبير وايد.",
          "'atat {N} warda.|عطت {N} وردة.",
          "\"*shukran* wayed!\" gal {N}.|«*شكرا* وايد!» قال {N}.",
          "\"al-'afu!\" ma ahla nigool shukran!|«العفو!» ما أحلى نقول شكرا!"
        ]
      }
    },
    A: {
      palabra: {texto:"may|ماي", silabas:["may|مَايْ"]},
      intro: "lamma n'atash, nitlub may.|لما نعطش، نطلب ماي.",
      frase: {texto:"abi may.|أبي ماي.", partes:["abi|أبي", "may.|ماي."]},
      respuesta: "tafadhal!|تفضل!",
      cuento: {
        titulo: "wayed harr!|وايد حر!",
        paginas: [
          "wayed harr! {N} kan 'atshan.|وايد حر! {N} كان عطشان.",
          "\"abi *may*,\" gal {N} lid-dubb.|«أبي *ماي*»، قال {N} للدب.",
          "ghul, ghul, ghul! wayed barid!|غل، غل، غل! وايد بارد!",
          "\"shukran!\" khalas, ma fi 'atash!|«شكرا!» خلاص، ما في عطش!"
        ]
      }
    },
    M: {
      palabra: {texto:"ba'ad|بعد", silabas:["ba|بَ", "'ad|عَدْ"]},
      intro: "lamma nibi marra thanya, ingool ba'ad.|لما نبي مرة ثانية، نقول بعد.",
      frase: {texto:"ba'ad, law samaht!|بعد، لو سمحت!", partes:["ba'ad,|بعد،", "law samaht!|لو سمحت!"]},
      respuesta: "wahid ba'ad!|واحد بعد!",
      cuento: {
        titulo: "kowar ba'ad!|كور بعد!",
        paginas: [
          "al-gattoo yirmi kowar: wahda!|القطو يرمي كور: وحدة!",
          "\"*ba'ad*, law samaht!\" saffag {N}. thintain, thalath!|«*بعد*، لو سمحت!» صفّق {N}. ثنتين، ثلاث!",
          "ba'ad w ba'ad! wayed fugga'at!|بعد وبعد! وايد فقاعات!",
          "w ragsaw lain ta'abaw!|ورقصوا لين تعبوا!"
        ]
      }
    },
    C: {
      palabra: {texto:"ma'a as-salama|مع السلامة", silabas:["ma'as|مَعَسْ", "sa|سَ", "la|لَا", "ma|مَهْ"]},
      intro: "lamma nrooh, ingool ma'a as-salama.|لما نروح، نقول مع السلامة.",
      frase: {texto:"ma'a as-salama! nshoofak bacher!|مع السلامة! نشوفك باكر!", partes:["ma'a as-salama!|مع السلامة!", "nshoofak bacher!|نشوفك باكر!"]},
      respuesta: "allah ysalmak!|الله يسلمك!",
      cuento: {
        titulo: "nshoofak bacher|نشوفك باكر",
        paginas: [
          "sar al-lail. tila' al-gumar.|صار الليل. طلع القمر.",
          "\"*ma'a as-salama*! nshoofak bacher!\" lawwah {N}.|«*مع السلامة*! نشوفك باكر!» لوّح {N}.",
          "al-chalb rah yinaam: zzz…|الكلب راح ينام: ززز…",
          "ma'a as-salama! nshoofkum bacher!|مع السلامة! نشوفكم باكر!"
        ]
      }
    }
  },
  final: {
    pregunta: "al-heen ta'arf kalimat wayed! nrooh mughamara?|الحين تعرف كلمات وايد! نروح مغامرة؟",
    frase: {texto:"na'am! yalla!|نعم! يلا!", partes:["na'am!|نعم!", "yalla!|يلا!"]},
    palabras: ["marhaba!|مرحبا!", "na'am!|نعم!", "la!|لا!", "shukran!|شكرا!", "may!|ماي!", "ba'ad!|بعد!", "ma'a as-salama!|مع السلامة!"],
    despedida: "yalla 'al-mughamara!|يلا عالمغامرة!",
    chau: "ma'a as-salama, ya bait ash-shajara!|مع السلامة يا بيت الشجرة!",
    lograste: "sawwaitha! ta'arf awwal kalimatak!|سويتها! تعرف أول كلماتك!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: rab'ak yintaroonak!|عندك كل الأختام! دوّر الباب الأخضر: ربعك ينطرونك!",
    ppFinal: "ijma' kil al-akhtam, ba'dain nsallim 'ala rab'na!|اجمع كل الأختام، بعدين نسلّم على ربعنا!",
    otraVez: "yom thani fi bait ash-shajara! ijma' al-akhtam marra thanya.|يوم ثاني في بيت الشجرة! اجمع الأختام مرة ثانية.",
    otraVezB: "yom thani|يوم ثاني"
  },
  // c es el color, ya en dos caras ("ahmar|أحمر"); "lonha" evita concordar el color con "fugga'a"
  microjuego: {
    titulo: "fugga'at mlawwana!|فقاعات ملونة!",
    intro: "isma' al-lon w faggi' hal fugga'a.|اسمع اللون وفقّع هالفقاعة.",
    pide: c => U("faggi' al-fugga'a illi lonha |فقّع الفقاعة اللي لونها ", c, "!|!"),
    esa: c => U("hadhi lonha |هذي لونها ", c, "!|!"),
    libre: "al-heen faggi' kil illi tibih!|الحين فقّع كل اللي تبيه!",
    fin: "fagga't {n} fugga'a!|فقّعت {n} فقاعة!"
  },
  palabrasExtra: [
    {texto:"ahmar|أحمر", silabas:["ah|أَحْ", "mar|مَرْ"]},
    {texto:"azrag|أزرق", silabas:["az|أَزْ", "rag|رَقْ"]},
    {texto:"asfar|أصفر", silabas:["as|أَصْ", "far|فَرْ"]},
    {texto:"akhdhar|أخضر", silabas:["akh|أَخْ", "dhar|ضَرْ"]}
  ],
  frasesExtra: [
    {texto:"shu ismak?|شو اسمك؟", partes:["shu|شو", "ismak?|اسمك؟"]},
    {texto:"sabah al-khair!|صباح الخير!", partes:["sabah|صباح", "al-khair!|الخير!"]},
    {texto:"tisbah 'ala khair!|تصبح على خير!", partes:["tisbah|تصبح", "'ala khair!|على خير!"]},
    {texto:"ahibbak!|أحبك!", partes:["ahibbak!|أحبك!"]},
    {texto:"marra thanya!|مرة ثانية!", partes:["marra thanya!|مرة ثانية!"]}
  ],
  preguntas: [
    {p:"shingool lamma noosal?|شنقول لما نوصل؟", r:"marhaba!|مرحبا!"},
    {p:"shingool lamma nrooh?|شنقول لما نروح؟", r:"ma'a as-salama!|مع السلامة!"},
    {p:"ay wahid ygool na'am?|أي واحد يقول نعم؟", r:"hatha!|هذا!"},
    {p:"ay wahid ygool la?|أي واحد يقول لا؟", r:"hatha!|هذا!"},
    {p:"shingool lamma ahad y'atina hadiyya?|شنقول لما أحد يعطينا هدية؟", r:"shukran!|شكرا!"},
    {p:"shu nishrab lamma n'atash?|شو نشرب لما نعطش؟", r:"may!|ماي!"},
    {p:"shingool lamma nibi marra thanya?|شنقول لما نبي مرة ثانية؟", r:"ba'ad!|بعد!"},
    {p:"ay wahid al-ahmar?|أي واحد الأحمر؟", r:"hatha!|هذا!"},
    {p:"ay wahid al-azrag?|أي واحد الأزرق؟", r:"hatha!|هذا!"},
    {p:"ay wahid al-asfar?|أي واحد الأصفر؟", r:"hatha!|هذا!"}
  ],
  objetos: {"#":"as-siyaj|السياج", r:"ash-shajara|الشجرة", f:"al-warid|الورد", b:"al-kirsi|الكرسي", j:"al-al'ab|الألعاب", s:"al-kanaba|الكنبة", "~":"al-bab|الباب"}
});
})();
