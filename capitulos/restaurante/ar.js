/* =========================================================
   CAPÍTULO 2 · EL RESTAURANTE — textos en árabe del Golfo
   Cada texto: "latino|عربي" (lo que lee el grande | lo que dice la voz).
   Cada lista va en el mismo orden que en base.js.
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada (en las dos caras).
   El héroe trabaja de mozo: a los clientes les habla con cortesía (tafadhal, law samaht).
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
registrarTextos('restaurante', 'ar', {
  titulo: "al-mat'am|المطعم",
  lugar: {texto:"al-mat'am|المطعم", silabas:["al|اَلْ", "mat|مَطْ", "'am|عَمْ"]},
  bienvenida: "wisalna lil-mat'am!|وصلنا للمطعم!",
  niveles: [{nombre:"al-mawaagif|المواقف", numTexto:"sifr|صفر"}, {nombre:"al-bufeeh|البوفيه", numTexto:"wahid|واحد"}, {nombre:"min al-menyu|من المنيو", numTexto:"ithnain|اثنين"}],
  estaciones: {
    E: {
      palabra: {texto:"as-sayyara|السيارة", silabas:["as|اَسْ", "say|سَيْ", "ya|يَا", "ra|رَه"]},
      intro: "hathi al-mawaagif. hni nkhalli as-sayyara!|هذي المواقف. هني نخلي السيارة!",
      frase: {texto:"jeena bis-sayyara!|جينا بالسيارة!", partes:["jeena|جينا", "bis-sayyara!|بالسيارة!"]},
      respuesta: "ahlan wa sahlan! ana ahris sayyaratkum.|أهلاً وسهلاً! أنا أحرس سيارتكم.",
      cuento: {
        titulo: "as-sayyara al-yoo'ana|السيارة اليوعانة",
        paginas: [
          "{N} wisal lil-mat'am fi *as-sayyara al-hamra*.|{N} وصل للمطعم في *السيارة الحمرا*.",
          "bas as-sayyara kanat tnaggiz w tsawwi sowt! brrm, brrm… kanat yoo'ana!|بس السيارة كانت تنقز وتسوي صوت! برم، برم… كانت يوعانة!",
          "al-chalb 'ataha banzeen w ghassalha b-saboon wayed.|الكلب عطاها بنزين وغسلها بصابون وايد.",
          "\"shukran!\" gaalat as-sayyara. w naamat fil-mawaagif.|«شكراً!» قالت السيارة. ونامت في المواقف."
        ]
      }
    },
    R: {
      palabra: {texto:"at-taawla|الطاولة", silabas:["at|اَتْ", "taaw|طَاوْ", "la|لَه"]},
      intro: "hatha al-madkhal. hni y'atoona taawla.|هذا المدخل. هني يعطونا طاولة.",
      frase: {texto:"taawla, law samaht.|طاولة، لو سمحت.", partes:["taawla,|طاولة،", "law samaht.|لو سمحت."]},
      respuesta: "oh! al-yom naagisna garson. tsa'idna?|أوه! اليوم ناقصنا جرسون. تساعدنا؟",
      despues: "ilbis al-maryool! al-heen tishtighil fil-mat'am!|البس المريول! الحين تشتغل في المطعم!",
      cuento: {
        titulo: "al-maryool as-sihri|المريول السحري",
        paginas: [
          "{N} talab *taawla*, bas ad-dub kan shaayil hamm wayed.|{N} طلب *طاولة*، بس الدب كان شايل هم وايد.",
          "\"al-garson ma ja al-yom, w fi naas wayed!\" gaal ad-dub.|«الجرسون ما جا اليوم، وفي ناس وايد!» قال الدب.",
          "\"ana asa'dak!\" gaal {N}. w ad-dub talla' *maryool* w babyoon.|«أنا أساعدك!» قال {N}. والدب طلّع *مريول* وببيون.",
          "khalas! al-heen {N} yishtighil fil-mat'am.|خلاص! الحين {N} يشتغل في المطعم."
        ]
      }
    },
    B: {
      palabra: {texto:"as-sahan|الصحن", silabas:["as|اَصْ", "sa|صَ", "han|حَنْ"]},
      intro: "hatha al-bufeeh. kil wahid yakhidh illi yibah!|هذا البوفيه. كل واحد ياخذ اللي يباه!",
      frase: {texto:"tafadhal, hatha sahan lak.|تفضل، هذا صحن لك.", partes:["tafadhal,|تفضل،", "hatha sahan|هذا صحن", "lak.|لك."]},
      respuesta: "shukran wayed!|شكراً وايد!",
      cuento: {
        titulo: "jabal as-sihoon|جبل الصحون",
        paginas: [
          "fil-bufeeh, al-arnooba kanat tibi *sahan*.|في البوفيه، الأرنوبة كانت تبي *صحن*.",
          "{N} jaab sahan… w thani… w thani… jabal min as-sihoon!|{N} جاب صحن… وثاني… وثاني… جبل من الصحون!",
          "al-jabal yitmaayal hni w hnaak!|الجبل يتمايل هني وهناك!",
          "bas ma taah wala wahid. \"tafadhali, hatha sahan lich!\" gaal {N}. bravo!|بس ما طاح ولا واحد. «تفضلي، هذا صحن لج!» قال {N}. برافو!"
        ]
      }
    },
    K: {
      palabra: {texto:"al-jidir|الجدر", silabas:["al|اَلْ", "ji|جِ", "dir|دِرْ"]},
      intro: "hatha al-matbakh! hni al-gitt at-tabbaakh yitbakh.|هذا المطبخ! هني القط الطباخ يطبخ.",
      frase: {texto:"reehta hilwa wayed!|ريحته حلوة وايد!", partes:["reehta hilwa|ريحته حلوة", "wayed!|وايد!"]},
      respuesta: "hathi shorbat tamaat!|هذي شوربة طماط!",
      cuento: {
        titulo: "al-jidir illi yirgis|الجدر اللي يرقص",
        paginas: [
          "fil-matbakh kan fi *jidir chibeer* wayed.|في المطبخ كان في *جدر كبير* وايد.",
          "ash-shorba tsawwi fuqaa'aat: blub, blub, blub.|الشوربة تسوي فقاعات: بلب، بلب، بلب.",
          "faj'a, al-jidir bada ynaggiz w yirgis!|فجأة، الجدر بدا ينقز ويرقص!",
          "al-gitt at-tabbaakh hidhna w gaal: \"ash-shorba jaahza!\"|القط الطباخ حضنه وقال: «الشوربة جاهزة!»"
        ]
      }
    },
    M: {
      palabra: {texto:"al-menyu|المنيو", silabas:["al|اَلْ", "men|مِنْ", "yu|يُو"]},
      intro: "hatha at-taabig al-fooqani. hni an-naas yikhtaroon al-akil min al-menyu.|هذا الطابق الفوقاني. هني الناس يختارون الأكل من المنيو.",
      frase: {texto:"shu tihib taakil?|شو تحب تاكل؟", partes:["shu tihib|شو تحب", "taakil?|تاكل؟"]},
      respuesta: "beetza, law samaht.|بيتزا، لو سمحت.",
      cuento: {
        titulo: "al-beetza al-chibeera|البيتزا الكبيرة",
        paginas: [
          "{N} 'ata *al-menyu* lil-chalb w sa'ala: \"shu tihib taakil?\"|{N} عطى *المنيو* للكلب وسأله: «شو تحب تاكل؟»",
          "\"beetza, law samaht,\" gaal al-chalb.|«بيتزا، لو سمحت» قال الكلب.",
          "{N} jaab beetza chibeera, chibeera… at-taawla ma wis'atha!|{N} جاب بيتزا كبيرة، كبيرة… الطاولة ما وسعتها!",
          "fa al-chalb 'azam rab'a, w kaloha ma'a ba'adh!|فالكلب عزم ربعه، وكلوها مع بعض!"
        ]
      }
    },
    H: {
      palabra: {texto:"al-ayskreem|الآيسكريم", silabas:["al|اَلْ", "ays|آيْسْ", "kreem|كْرِيمْ"]},
      intro: "ja wagt al-hilu!|جا وقت الحلو!",
      frase: {texto:"tihib hilu?|تحب حلو؟", partes:["tihib|تحب", "hilu?|حلو؟"]},
      respuesta: "ee! ayskreem, law samaht.|إي! آيسكريم، لو سمحت.",
      cuento: {
        titulo: "al-ayskreem al-mista'jil|الآيسكريم المستعجل",
        paginas: [
          "al-gitta kanat tibi *ayskreem shokolata*.|القطة كانت تبي *آيسكريم شوكولاتة*.",
          "{N} jaaba b-sur'a wayed, li'an al-jaw harr wayed!|{N} جابه بسرعة وايد، لأن الجو حر وايد!",
          "oh la! al-ayskreem gaa'id yiseeh. gatra, gatra, gatra…|أوه لا! الآيسكريم قاعد يسيح. قطرة، قطرة، قطرة…",
          "al-gitta kalata b-lugma wahda. mmm, lathith!|القطة كلته بلقمة وحدة. ممم، لذيذ!"
        ]
      }
    },
    C: {
      palabra: {texto:"al-hisaab|الحساب", silabas:["al|اَلْ", "hi|حِ", "saab|سَابْ"]},
      intro: "hatha al-kaashier. hni nidfa' hagg al-akil.|هذا الكاشير. هني ندفع حق الأكل.",
      frase: {texto:"tafadhal al-hisaab.|تفضل الحساب.", partes:["tafadhal|تفضل", "al-hisaab.|الحساب."]},
      respuesta: "shukran! kil shay kan lathith wayed.|شكراً! كل شي كان لذيذ وايد.",
      cuento: {
        titulo: "al-hisaab illi yitir|الحساب اللي يطير",
        paginas: [
          "'ind al-kaashier, al-chalb 'ata {N} *al-hisaab*.|عند الكاشير، الكلب عطى {N} *الحساب*.",
          "bas ad-dareesha kanat maftooha, w al-hisaab taar!|بس الدريشة كانت مفتوحة، والحساب طار!",
          "{N} rakadh w naggaz 'aali wayed… w lizama fil-hawa!|{N} ركض ونقز عالي وايد… ولزمه في الهوا!",
          "\"tafadhal al-hisaab!\" gaal {N}. w al-kil saffag.|«تفضل الحساب!» قال {N}. والكل صفّق."
        ]
      }
    }
  },
  final: {
    pregunta: "kil shay lathith! hatha lak: bakhsheesh!|كل شي لذيذ! هذا لك: بخشيش!",
    frase: {texto:"shukran wayed! tsharrifoona marra thanya!|شكراً وايد! تشرفونا مرة ثانية!", partes:["shukran wayed!|شكراً وايد!", "tsharrifoona|تشرفونا", "marra thanya!|مرة ثانية!"]},
    despedida: "ahsant! shughl mumtaz!|أحسنت! شغل ممتاز!",
    chau: "ma'a as-salaama! nshoofik marra thanya!|مع السلامة! نشوفك مرة ثانية!",
    lograste: "sawwaitha! khidamt al-kil zain!|سويتها! خدمت الكل زين!",
    todos: "'indak kil al-akhtam! inzil lil-mawaagif: az-zabuna tintatharak 'ind al-bab al-akhdhar!|عندك كل الأختام! انزل للمواقف: الزبونة تنتظرك عند الباب الأخضر!",
    ppFinal: "ijma' kil al-akhtam, ba'dain: al-bakhsheesh!|اجمع كل الأختام، بعدين: البخشيش!",
    otraVez: "yom shughl thaani! ijma' al-akhtam marra thanya.|يوم شغل ثاني! اجمع الأختام مرة ثانية.",
    otraVezB: "yom thaani|يوم ثاني"
  },
  // el microjuego que se abre al terminar el lugar (los ingredientes van en el orden de base.js)
  microjuego: {titulo:"yalla nsawwi beetza!|يلا نسوي بيتزا!", intro:"sawwi beetztak! ilmis shay, ba'dain ilmis al-beetza.|سوّ بيتزتك! المس شي، بعدين المس البيتزا.", horno:"lil-firin!|للفرن!", mas:"hutt ashya zyada!|حط أشياء زيادة!", listo:"yammi! beetza lathitha wayed! shukran, ya shef!|يمي! بيتزا لذيذة وايد! شكراً يا شيف!",
    ingredientes: [{texto:"as-salsa|الصلصة"}, {texto:"al-jibin|الجبن"}, {texto:"at-tamaat|الطماط"}, {texto:"az-zaitoon|الزيتون"}, {texto:"ar-raihaan|الريحان"}, {texto:"al-mashroom|المشروم"}]},
  palabrasExtra: [
    {texto:"al-beetza|البيتزا", silabas:["al|اَلْ", "beet|بِيتْ", "za|زَا"]},
    {texto:"ash-shorba|الشوربة", silabas:["ash|اَشْ", "shor|شُورْ", "ba|بَه"]},
    {texto:"al-kaas|الكاس", silabas:["al|اَلْ", "kaas|كَاسْ"]},
    {texto:"ash-shoka|الشوكة", silabas:["ash|اَشْ", "sho|شُو", "ka|كَه"]},
    {texto:"al-maryool|المريول", silabas:["al|اَلْ", "mar|مَرْ", "yool|يُولْ"]}
  ],
  frasesExtra: [
    {texto:"ahlan wa sahlan!|أهلاً وسهلاً!", partes:["ahlan wa sahlan!|أهلاً وسهلاً!"]},
    {texto:"sahha w 'aafya!|صحة وعافية!", partes:["sahha|صحة", "w 'aafya!|وعافية!"]},
    {texto:"shu tihib tishrab?|شو تحب تشرب؟", partes:["shu tihib|شو تحب", "tishrab?|تشرب؟"]},
    {texto:"kaas mayy, law samaht.|كاس ماي، لو سمحت.", partes:["kaas mayy,|كاس ماي،", "law samaht.|لو سمحت."]},
    {texto:"shukran wayed!|شكراً وايد!", partes:["shukran|شكراً", "wayed!|وايد!"]},
    {texto:"yammi, lathith!|يمي، لذيذ!", partes:["yammi, lathith!|يمي، لذيذ!"]}
  ],
  preguntas: [
    {p:"shu talab al-chalb fit-taabig al-fooqani?|شو طلب الكلب في الطابق الفوقاني؟", r:"beetza!|بيتزا!"},
    {p:"ay hilu baarid wayed wayed?|أي حلو بارد وايد وايد؟", r:"al-ayskreem!|الآيسكريم!"},
    {p:"wain tintabikh ash-shorba?|وين تنطبخ الشوربة؟", r:"fil-jidir!|في الجدر!"},
    {p:"shlon jeena lil-mat'am?|شلون جينا للمطعم؟", r:"bis-sayyara!|بالسيارة!"},
    {p:"wain nikhtaar al-akil?|وين نختار الأكل؟", r:"fil-menyu!|في المنيو!"},
    {p:"shu inwaddi lit-taawla 'ashan yidf'oon?|شو نودي للطاولة عشان يدفعون؟", r:"al-hisaab!|الحساب!"},
    {p:"shu nilbas 'ashan nishtighil fil-mat'am?|شو نلبس عشان نشتغل في المطعم؟", r:"al-maryool!|المريول!"},
    {p:"wain inhutt al-mayy?|وين نحط الماي؟", r:"fil-kaas!|في الكاس!"},
    {p:"b-shu naakil al-ma'karoona?|بشو ناكل المعكرونة؟", r:"bish-shoka!|بالشوكة!"},
    {p:"shu 'atatna az-zabuna fil-aakhir?|شو عطتنا الزبونة في الآخر؟", r:"al-bakhsheesh!|البخشيش!"}
  ],
  objetos: {"#":"al-jidaar|الجدار", p:"az-zar'a|الزرعة", a:"as-sayyara|السيارة", m:"at-taawla|الطاولة", "~":"al-bab|الباب"}
});
