/* =========================================================
   CAPÍTULO 6 · LA PLAZA — textos en árabe del Golfo
   Cada texto: "latino|عربي" (a la izquierda cómo se lee en letras latinas, a la derecha en árabe).
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada (en las dos caras).
   silabas / partes = cómo se corta la palabra o la frase para repetir.
   Se le habla al chico en masculino.
   ========================================================= */
registrarTextos('plaza', 'ar', {
  charlas: [
    {titulo:"nsawlif 'ind al-urjoohha|نسولف عند الأرجوحة", chau:"kan mumti'! nshoofak fil-hadeeqa!|كان ممتع! نشوفك في الحديقة!", pasos:[
      {di:"tibi tarkab al-urjoohha?|تبي تركب الأرجوحة؟", op:[{t:"aywa, dfa'ni min fadlak!|أيوا، دفعني من فضلك!", r:"yalla! wiiii!|يلا! ويييي!"}, {t:"aywa! agdar atarjah wahdi.|أيوا! أقدر أتأرجح وحدي.", r:"shu hal-kibar!|شو هالكبر!"}]},
      {op:[{t:"hiya 'aaliya?|هي عالية؟", r:"mu wayed. imsik zain!|مو وايد. امسك زين!"}, {t:"inta bad titarjah?|إنت بعد تتأرجح؟", r:"aywa! nitarjah sawa.|أيوا! نتأرجح سوا."}]},
      {di:"ashaal aw shway shway?|أعلى أو شوي شوي؟", op:[{t:"ashaal min fadlak!|أعلى من فضلك!", r:"foog! imsik zain!|فوق! امسك زين!"}, {t:"shway shway min fadlak.|شوي شوي من فضلك.", r:"tamam, shway shway.|تمام، شوي شوي."}]},
      {op:[{t:"tijibik al-urjoohha?|تعجبك الأرجوحة؟", r:"ahibbha wayed!|أحبها وايد!"}, {t:"nroh az-zaleeqa ba'dain?|نروح الزحليقة بعدين؟", r:"aywa! yalla.|أيوا! يلا."}]}]},
    {titulo:"nsawlif wiyya laa'ib al-kora|نسولف ويا لاعب الكرة", chau:"mubaara jameela! nshoofak qareeb!|مباراة جميلة! نشوفك قريب!", pasos:[
      {di:"shoof, ladai kora! tibi tal'ab?|شوف، لدي كرة! تبي تلعب؟", op:[{t:"aywa, yalla nal'ab kora!|أيوا، يلا نلعب كرة!", r:"mumtaz! imsikha!|ممتاز! امسكها!"}, {t:"aywa, ramhaa li!|أيوا، ارمها لي!", r:"hiya jaayya!|هي جايّة!"}]},
      {op:[{t:"shu lon al-kora?|شو لون الكرة؟", r:"hiya hamra!|هي حمرا!"}, {t:"armeeha lak?|أرميها لك؟", r:"aywa, irmiha 'aali!|أيوا، ارميها عالي!"}]},
      {di:"nirkilha aw nirmeeha?|نركلها أو نرميها؟", op:[{t:"yalla nirkilha!|يلا نركلها!", r:"goal! rakalta ba'eed.|غول! ركلتها بعيد."}, {t:"yalla nirmeeha!|يلا نرميها!", r:"ramya hilwa!|رمية حلوة!"}]},
      {op:[{t:"nal'ab marra thaniya?|نلعب مرة ثانية؟", r:"aywa! marra thaniya!|أيوا! مرة ثانية!"}, {t:"inta ta'baan?|إنت تعبان؟", r:"la, agdar al'ab tool al-yoom!|لا، أقدر ألعب طول اليوم!"}]}]},
    {titulo:"nsawlif wiyya al-fuqa'aat|نسولف ويا الفقاعات", chau:"ma'a as-salama ya fuqa'aat! nshoofkum qareeb!|مع السلامة يا فقاعات! نشوفكم قريب!", pasos:[
      {di:"shoof kam fuqa'a! tijibik?|شوف كم فقاعة! تعجبك؟", op:[{t:"aywa, hilwa wayed!|أيوا، حلوة وايد!", r:"tilma' mithl qaws qazah.|تلمع مثل قوس قزح."}, {t:"aywa, abi afajjirha!|أيوا، أبي أفجرها!", r:"bop, bop, bop!|بوب، بوب، بوب!"}]},
      {op:[{t:"agdar a'mal fuqa'aat?|أقدر أسوي فقاعات؟", r:"aywa! unfukh shway shway.|أيوا! انفخ شوي شوي."}, {t:"min shu al-fuqa'aat?|من شو الفقاعات؟", r:"min maay wa saboon!|من مي وصابون!"}]},
      {di:"shu tishoof fil-fuqa'aat?|شو تشوف في الفقاعات؟", op:[{t:"ashoof alwaan wayed!|أشوف ألوان وايد!", r:"ya hilw al-alwaan!|يا حلو الألوان!"}, {t:"ashoof fuqa'aat kabeera!|أشوف فقاعات كبيرة!", r:"w saghira ba'd!|وصغيرة بعد!"}]},
      {op:[{t:"tihibb al-fuqa'aat?|تحب الفقاعات؟", r:"ahibbha wayed!|أحبها وايد!"}, {t:"n'mal ziyada?|نسوي زيادة؟", r:"aywa! wayed ziyada!|أيوا! وايد زيادة!"}]}]},
    {titulo:"nsawlif wiyya al-mushrifa|نسولف ويا المشرفة", chau:"ahsant! inta batal!|أحسنت! إنت بطل!", pasos:[
      {di:"nal'ab 'sayyid yagool'?|نلعب «سيد يقول»؟", op:[{t:"aywa, yalla nal'ab!|أيوا، يلا نلعب!", r:"mumtaz! isma' zain.|ممتاز! اسمع زين."}, {t:"aywa, ahibb hathi al-li'ba!|أيوا، أحب هذي اللعبة!", r:"wana ba'd! jahiz?|وأنا بعد! جاهز؟"}]},
      {op:[{t:"shlon nal'abha?|شلون نلعبها؟", r:"isawwi bas illi ygoolah as-sayyid!|اسوي بس اللي يقوله السيد!"}, {t:"agdar a'ti al-awaamir?|أقدر أعطي الأوامر؟", r:"aywa! al-heen inta as-sayyid.|أيوا! الحين إنت السيد."}]},
      {di:"as-sayyid yagool: untut!|السيد يقول: انطط!", op:[{t:"antut! boing, boing!|أنط! بوينغ، بوينغ!", r:"zain wayed! tintt 'aali.|زين وايد! تنط عالي."}, {t:"shoof, antut!|شوف، أنط!", r:"ya hilw al-natta!|يا حلو النطة!"}]},
      {op:[{t:"nal'ab marra thaniya?|نلعب مرة ثانية؟", r:"aywa, marra thaniya!|أيوا، مرة ثانية!"}, {t:"sawwait zain?|سويت زين؟", r:"sawwait mumtaz!|سويت ممتاز!"}]}]}
  ],
  titulo: "al-mal'ab|الملعب",
  lugar: {texto:"al-mal'ab|الملعب", silabas:["al|ألْ", "mal|مَلْ", "'ab|عَبْ"]},
  bienvenida: "wsalna al-mal'ab!|وصلنا الملعب!",
  niveles: [{nombre:"al-marajeeh|المراجيح", numTexto:"sifr|صفر"}, {nombre:"hoodh ar-ramal|حوض الرمل", numTexto:"wahid|واحد"}, {nombre:"al-burj|البرج", numTexto:"ithnain|اثنين"}],
  estaciones: {
    H: {
      palabra: {texto:"al-marjeeha|المرجيحة", silabas:["al|ألْ", "mar|مَرْ", "jee|جِي", "ha|حَه"]},
      intro: "hadhi al-marajeeh. yalla nitmarjah!|هذي المراجيح. يلا نتمرجح!",
      frase: {texto:"dfa'ni, law samaht!|ادفعني، لو سمحت!", partes:["dfa'ni,|ادفعني،", "law samaht!|لو سمحت!"]},
      respuesta: "yalla! fog akthar!|يلا! فوق أكثر!",
      cuento: {
        titulo: "fog akthar|فوق أكثر",
        paginas: [
          "ad-dubb as-sagheer chaan yitmarjah 'ala *al-marjeeha*: liddam w liwara!|الدب الصغير كان يتمرجح على *المرجيحة*: لقدام ولورا!",
          "\"dfa'ni, law samaht!\" gal {N}.|«ادفعني، لو سمحت!» قال {N}.",
          "fog, fog! {N} rafa' idaih: chinna yitir!|فوق، فوق! {N} رفع إيديه: كنه يطير!",
          "ba'dain ya dawr ad-dubb. al-marjeeha wayed hilwa!|بعدين يا دور الدب. المرجيحة وايد حلوة!"
        ]
      }
    },
    S: {
      palabra: {texto:"al-meezan|الميزان", silabas:["al|ألْ", "mee|مِي", "zan|زَان"]},
      intro: "al-meezan! tibi sadeeg 'ashan til'ab.|الميزان! تبي صديق عشان تلعب.",
      frase: {texto:"fog w taht!|فوق وتحت!", partes:["fog|فوق", "w taht!|وتحت!"]},
      respuesta: "ana atla', inta tinzil!|أنا أطلع، انت تنزل!",
      cuento: {
        titulo: "fog w taht|فوق وتحت",
        paginas: [
          "*al-meezan* chaan bruhah, yintidhir asdiqaa.|*الميزان* كان بروحه، ينتظر أصدقاء.",
          "al-arnooba sa'alat {N}: \"nil'ab?\"|الأرنوبة سألت {N}: «نلعب؟»",
          "fog w taht! fog w taht! al-arnooba tnutt, {N} ynutt!|فوق وتحت! فوق وتحت! الأرنوبة تنط، {N} ينط!",
          "wayed wanasa! al-ithnain saffagaw.|وايد وناسة! الاثنين صفقوا."
        ]
      }
    },
    O: {
      palabra: {texto:"al-kura|الكورة", silabas:["al|ألْ", "ku|كُو", "ra|رَه"]},
      intro: "hni nil'ab kura.|هني نلعب كورة.",
      frase: {texto:"ashoot al-kura!|أشوت الكورة!", partes:["ashoot|أشوت", "al-kura!|الكورة!"]},
      respuesta: "goooool!|قوووول!",
      cuento: {
        titulo: "gool!|قول!",
        paginas: [
          "al-chalb as-sagheer 'inda *kura* tnutt w tnutt.|الكلب الصغير عنده *كورة* تنط وتنط.",
          "{N} rakadh w rakadh w... shaat al-kura!|{N} ركض وركض و… شات الكورة!",
          "oops! al-kura tdahrajat ba'eed, ba'eed.|أوبس! الكورة تدحرجت بعيد، بعيد.",
          "w dakhalat al-marma! goooool! {N} nutt min al-farha.|ودخلت المرمى! قوووول! {N} نط من الفرحة."
        ]
      }
    },
    A: {
      palabra: {texto:"as-satil|السطل", silabas:["as|أَسْ", "sa|سَ", "til|طِلْ"]},
      intro: "hadha hoodh ar-ramal. fi satil w mijrafa!|هذا حوض الرمل. في سطل ومجرفة!",
      frase: {texto:"asawwi gal'at ramal.|أسوي قلعة رمل.", partes:["asawwi|أسوي", "gal'at ramal.|قلعة رمل."]},
      respuesta: "ma ahla al-gal'a!|ما أحلى القلعة!",
      cuento: {
        titulo: "gal'at ar-ramal|قلعة الرمل",
        paginas: [
          "al-gattuwa 'indaha *satil* ahmar w mijrafa zarga.|القطوة عندها *سطل* أحمر ومجرفة زرقا.",
          "{N} ga'maz w tars as-satil ramal.|{N} قعمز وترس السطل رمل.",
          "galabah w... tal'at gal'a!|قلبه و… طلعت قلعة!",
          "\"ma ahla al-gal'a!\" kilhum saffagaw.|«ما أحلى القلعة!» كلهم صفقوا."
        ]
      }
    },
    J: {
      palabra: {texto:"al-habl|الحبل", silabas:["al|ألْ", "habl|حَبْل"]},
      intro: "ti'arf tnutt al-habl?|تعرف تنط الحبل؟",
      frase: {texto:"anutt al-habl!|أنط الحبل!", partes:["anutt|أنط", "al-habl!|الحبل!"]},
      respuesta: "wahid, ithnain, thalatha! shatir!|واحد، اثنين، ثلاثة! شاطر!",
      cuento: {
        titulo: "nutt, nutt!|نط، نط!",
        paginas: [
          "al-gattu ar-rumadi as-sagheer 'inda *habl* lin-natt.|القطو الرمادي الصغير عنده *حبل* للنط.",
          "{N} nutt: wahid, ithnain, thalatha!|{N} نط: واحد، اثنين، ثلاثة!",
          "al-gattu nutt ba'ad. nattaw ma'a ba'adh!|القطو نط بعد. نطوا مع بعض!",
          "'ashar nattat! al-idain fog!|عشر نطات! الإيدين فوق!"
        ]
      }
    },
    B: {
      palabra: {texto:"al-fuga'at|الفقاعات", silabas:["al|ألْ", "fug|فُقْ", "ga|قَا", "'at|عَات"]},
      intro: "shoof cham fuga'a!|شوف كم فقاعة!",
      frase: {texto:"anfakh fuga'at!|أنفخ فقاعات!", partes:["anfakh|أنفخ", "fuga'at!|فقاعات!"]},
      respuesta: "shoof shlon titir!|شوف شلون تطير!",
      cuento: {
        titulo: "al-fuga'at|الفقاعات",
        paginas: [
          "al-arnooba 'indaha gooti *fuga'at*.|الأرنوبة عندها قوطي *فقاعات*.",
          "{N} nafakh shway shway: fuuuu!|{N} نفخ شوي شوي: فووو!",
          "fuga'at fi kil makan! {N} dar w dar bain al-fuga'at.|فقاعات في كل مكان! {N} دار ودار بين الفقاعات.",
          "w kilhum ragasaw taht al-fuga'at.|وكلهم رقصوا تحت الفقاعات."
        ]
      }
    },
    T: {
      palabra: {texto:"az-zallaga|الزلاقة", silabas:["az|أَزْ", "zal|زَلْ", "la|لَا", "ga|قَه"]},
      intro: "hadhi az-zallaga. wayed 'aalya!|هذي الزلاقة. وايد عالية!",
      frase: {texto:"atzallag 'ala az-zallaga!|أتزلق على الزلاقة!", partes:["atzallag|أتزلق", "'ala az-zallaga!|على الزلاقة!"]},
      respuesta: "weeee! wayed sarree'a!|ويييي! وايد سريعة!",
      cuento: {
        titulo: "az-zallaga al-chibeera|الزلاقة الكبيرة",
        paginas: [
          "fog al-burj chaanat *zallaga* safra, 'aalya wayed!|فوق البرج كانت *زلاقة* صفرا، عالية وايد!",
          "{N} sa'ad ad-daray: daraja, darajtain...|{N} صعد الدري: درجة، درجتين…",
          "\"atzallag 'ala az-zallaga!\" weeee! wayed sarree'a!|«أتزلق على الزلاقة!» ويييي! وايد سريعة!",
          "{N} nutt min al-farha: \"marra thanya!\"|{N} نط من الفرحة: «مرة ثانية!»"
        ]
      }
    }
  },
  final: {
    pregunta: "nil'ab Simon yigool?|نلعب سايمون يقول؟",
    frase: {texto:"ee! yalla nil'ab!|إي! يلا نلعب!", partes:["ee!|إي!", "yalla nil'ab!|يلا نلعب!"]},
    // en el orden de base.js: saltar, girar, aplaudir, agacharse, brazos arriba
    ordenes: ["Simon yigool: nutt!|سايمون يقول: نط!", "Simon yigool: door!|سايمون يقول: دور!", "Simon yigool: saffig!|سايمون يقول: صفّق!", "Simon yigool: ga'miz!|سايمون يقول: قعمز!", "Simon yigool: irfa' idaik!|سايمون يقول: ارفع إيديك!"],
    despedida: "shatir! li'abt zain!|شاطر! لعبت زين!",
    chau: "ma'a as-salama, ya al-mal'ab!|مع السلامة يا الملعب!",
    lograste: "sawwaitha! li'abt kil shay fil-mal'ab!|سويتها! لعبت كل شي في الملعب!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: yalla nil'ab Simon yigool!|عندك كل الأختام! دوّر الباب الأخضر: يلا نلعب سايمون يقول!",
    ppFinal: "ijma' kil al-akhtam, ba'dain nil'ab Simon yigool!|اجمع كل الأختام، بعدين نلعب سايمون يقول!",
    otraVez: "'asriyya thanya fil-mal'ab! ijma' al-akhtam marra thanya.|عصرية ثانية في الملعب! اجمع الأختام مرة ثانية.",
    otraVezB: "'asriyya thanya|عصرية ثانية"
  },
  // el microjuego: arriba, abajo, izquierda, derecha ({n} = cuántas estrellas atrapó)
  microjuego: {
    correr: "yalla nirkudh ma'a tayyarat al-warg! dhghat w khallak 'ashan titla'.|يلا نركض مع طيارة الورق! اضغط وخلّك عشان تطلع.",
    titulo: "tayyarat al-warg!|طيارة الورق!",
    intro: "fi hawa! isma' w waddi at-tayyara lin-najma.|في هوا! اسمع ووصّل الطيارة للنجمة.",
    fin: "sidt {n} nijoom!|صدت {n} نجوم!",
    dirs: ["fog!|فوق!", "taht!|تحت!", "yisaar!|يسار!", "yimeen!|يمين!"]
  },
  palabrasExtra: [
    {texto:"tayyarat warg|طيارة ورق", silabas:["tay|طَيْ", "ya|يَا", "rat|رَتْ", "warg|وَرْق"]},
    {texto:"al-mijrafa|المجرفة", silabas:["al|ألْ", "mij|مِجْ", "ra|رَ", "fa|فَه"]},
    {texto:"al-gal'a|القلعة", silabas:["al|ألْ", "gal|قَلْ", "'a|عَه"]},
    {texto:"al-ays kreem|الآيس كريم", silabas:["al|ألْ", "ays|آيْس", "kreem|كْرِيم"]}
  ],
  frasesExtra: [
    {texto:"al-heen dawrak!|الحين دورك!", partes:["al-heen|الحين", "dawrak!|دورك!"]},
    {texto:"al-heen dawri!|الحين دوري!", partes:["al-heen|الحين", "dawri!|دوري!"]},
    {texto:"anutt wayed 'aali!|أنط وايد عالي!", partes:["anutt|أنط", "wayed 'aali!|وايد عالي!"]},
    {texto:"irkudh, irkudh!|اركض، اركض!", partes:["irkudh,|اركض،", "irkudh!|اركض!"]},
    {texto:"abi ays kreem!|أبي آيس كريم!", partes:["abi|أبي", "ays kreem!|آيس كريم!"]}
  ],
  preguntas: [
    {p:"min wain nitzallag? weeee!|من وين نتزلق؟ ويييي!", r:"min az-zallaga!|من الزلاقة!"},
    {p:"wain nitmarjah?|وين نتمرجح؟", r:"'ala al-marjeeha!|على المرجيحة!"},
    {p:"shu nshoot?|شو نشوت؟", r:"al-kura!|الكورة!"},
    {p:"shu nanfakh?|شو ننفخ؟", r:"al-fuga'at!|الفقاعات!"},
    {p:"b-shu ninutt?|بشو ننط؟", r:"bil-habl!|بالحبل!"},
    {p:"wain nitla' w ninzil?|وين نطلع وننزل؟", r:"'ala al-meezan!|على الميزان!"},
    {p:"shu nsawwi bir-ramal?|شو نسوي بالرمل؟", r:"gal'a!|قلعة!"},
    {p:"shu yitir ma'a al-hawa?|شو يطير مع الهوا؟", r:"tayyarat al-warg!|طيارة الورق!"},
    {p:"shu nakil lamma al-jaw harr?|شو ناكل لما الجو حر؟", r:"ays kreem!|آيس كريم!"},
    {p:"wain nhutt ar-ramal?|وين نحط الرمل؟", r:"fi as-satil!|في السطل!"}
  ],
  objetos: {"#":"as-soor|السور", r:"ash-shajara|الشجرة", f:"al-ward|الورد", b:"al-kirsi|الكرسي", k:"hoodh ar-ramal|حوض الرمل", "~":"al-bab|الباب"}
});
