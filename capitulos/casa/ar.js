/* =========================================================
   CAPÍTULO 4 · NUESTRA CASA — textos en árabe del Golfo
   Cada texto: "latino|عربي" (letras latinas para el grande | escritura árabe para la voz).
   Misma forma que en.js. Cuentos: {N} = nombre · *palabra* = palabra resaltada (en las dos caras).
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
registrarTextos('casa', 'ar', {
  titulo: "baitna|بيتنا",
  lugar: {texto:"baitna|بيتنا", silabas:["bait|بَيْت", "na|نَا"]},
  bienvenida: "wasalna al-bait!|وصلنا البيت!",
  niveles: [{nombre:"al-hadeega|الحديقة", numTexto:"sifr|صفر"}, {nombre:"tahat|تحت", numTexto:"wahid|واحد"}, {nombre:"foog|فوق", numTexto:"ithnain|اثنين"}],
  estaciones: {
    R: {
      palabra: {texto:"al-chalb|الكلب", silabas:["al|اَلْ", "chalb|كَلْب"]},
      intro: "hathi al-hadeega. shoof, hatha chalbna!|هذي الحديقة. شوف، هذا كلبنا!",
      frase: {texto:"ta'al hini, ya chalbi!|تعال هني، يا كلبي!", partes:["ta'al hini,|تعال هني،", "ya chalbi!|يا كلبي!"]},
      respuesta: "haw, haw!|هاو، هاو!",
      cuento: {
        titulo: "al-chalb an-natnoot|الكلب النطنوط",
        paginas: [
          "fil-hadeega, *al-chalb* kan yhizz dhailah.|في الحديقة، *الكلب* كان يهز ذيله.",
          "\"ta'al hini, ya chalbi!\" nadah {N}.|«تعال هني، يا كلبي!» ناداه {N}.",
          "al-chalb natt wayed foog... w taah fil-ward!|الكلب نط وايد فوق... وطاح في الورد!",
          "{N} hadhanah. haw, haw!|{N} حضنه. هاو، هاو!"
        ]
      }
    },
    A: {
      palabra: {texto:"baba|بابا", silabas:["ba|بَا", "ba|بَا"]},
      intro: "hathi as-saala. baba yigra al-jareeda.|هذي الصالة. بابا يقرا الجريدة.",
      frase: {texto:"sabah al-khair, baba!|صباح الخير، بابا!", partes:["sabah al-khair,|صباح الخير،", "baba!|بابا!"]},
      respuesta: "sabah an-noor, habibi! nimt zain?|صباح النور، حبيبي! نمت زين؟",
      cuento: {
        titulo: "al-jareeda at-tayyara|الجريدة الطيارة",
        paginas: [
          "*baba* kan yigra al-jareeda 'al al-kanaba.|*بابا* كان يقرا الجريدة على الكنبة.",
          "\"sabah al-khair, baba!\" gal {N}.|«صباح الخير، بابا!» قال {N}.",
          "fiuuu! waraga min al-jareeda taarat min ad-dareesha.|فيووو! ورقة من الجريدة طارت من الدريشة.",
          "baba dhihak: \"mub mushkila! ahsan nil'ab sawa!\"|بابا ضحك: «مب مشكلة! أحسن نلعب سوا!»"
        ]
      }
    },
    M: {
      palabra: {texto:"mama|ماما", silabas:["ma|مَا", "ma|مَا"]},
      intro: "hatha al-matbakh. mama gaa'da titbakh!|هذا المطبخ. ماما قاعدة تطبخ!",
      frase: {texto:"hala mama! shlonich?|هلا ماما! شلونك؟", partes:["hala mama!|هلا ماما!", "shlonich?|شلونك؟"]},
      respuesta: "zaina, al-hamdilla! w inta?|زينة، الحمدلله! وانت؟",
      cuento: {
        titulo: "shorbat mama|شوربة ماما",
        paginas: [
          "fil-matbakh, *mama* kanat tsawwi shorba.|في المطبخ، *ماما* كانت تسوي شوربة.",
          "\"hala mama! shlonich?\" sa'al {N}.|«هلا ماما! شلونك؟» سأل {N}.",
          "\"zaina! tibi tthoog?\" gaalat mama.|«زينة! تبي تذوق؟» قالت ماما.",
          "mmm! shorbat mama ahla shorba fid-dinya.|ممم! شوربة ماما أحلى شوربة في الدنيا."
        ]
      }
    },
    H: {
      palabra: {texto:"akhooy|أخوي", silabas:["a|أَ", "khooy|خُوي"]},
      intro: "akhook 'indah wayed al'ab.|أخوك عنده وايد ألعاب.",
      frase: {texto:"nil'ab sawa?|نلعب سوا؟", partes:["nil'ab|نلعب", "sawa?|سوا؟"]},
      respuesta: "ee! yalla nil'ab!|إي! يلا نلعب!",
      cuento: {
        titulo: "burj al-mukka'abat|برج المكعبات",
        paginas: [
          "*akhu* {N} bina burj min al-mukka'abat.|*أخو* {N} بنى برج من المكعبات.",
          "\"nil'ab sawa?\" sa'alah {N}.|«نلعب سوا؟» سأله {N}.",
          "al-burj kibar w kibar... w taah! boom!|البرج كبر وكبر... وطاح! بوم!",
          "ith-thnain dhihkaw wayed w bnoh marra thanya.|الثنين ضحكوا وايد وبنوه مرة ثانية."
        ]
      }
    },
    E: {
      palabra: {texto:"ukhti|أختي", silabas:["ukh|أُخْ", "ti|تِي"]},
      intro: "ukhtik fi ghurfat-ha, tigra.|أختك في غرفتها، تقرا.",
      frase: {texto:"tigrain li gissa?|تقرين لي قصة؟", partes:["tigrain li|تقرين لي", "gissa?|قصة؟"]},
      respuesta: "akeed!|أكيد!",
      cuento: {
        titulo: "gissat al-ukht|قصة الأخت",
        paginas: [
          "*ukht* {N} kan 'indaha kitab 'an at-tananeen.|*أخت* {N} كان عندها كتاب عن التنانين.",
          "\"tigrain li gissa?\" talab {N}.|«تقرين لي قصة؟» طلب {N}.",
          "\"kan ya ma kan, tinneen ykhaf min adh-dhalam...\"|«كان يا ما كان، تنين يخاف من الظلام...»",
          "{N} sima' al-gissa kilha, laasig fi ukhtah.|{N} سمع القصة كلها، لاصق في أخته."
        ]
      }
    },
    B: {
      palabra: {texto:"al-bebi|البيبي", silabas:["al|اَلْ", "bee|بِي", "bee|بِي"]},
      intro: "shhh! al-bebi fil-mahad.|ششش! البيبي في المهد.",
      frase: {texto:"shhh! al-bebi naayim.|ششش! البيبي نايم.", partes:["shhh!|ششش!", "al-bebi naayim.|البيبي نايم."]},
      respuesta: "gu gu... ga ga.|غو غو... غا غا.",
      cuento: {
        titulo: "al-bebi illi ma yibi ynaam|البيبي اللي ما يبي ينام",
        paginas: [
          "*al-bebi* kan fil-mahad, bas ma yibi ynaam!|*البيبي* كان في المهد، بس ما يبي ينام!",
          "\"shhh!\" gal {N}, w ghanna lah ghinwa.|«ششش!» قال {N}، وغنى له أغنية.",
          "al-bebi tithawab: aaah...|البيبي تثاوب: آآآه...",
          "w naam. shhh! al-bebi naayim.|ونام. ششش! البيبي نايم."
        ]
      }
    },
    C: {
      palabra: {texto:"as-sireer|السرير", silabas:["as|اَسْ", "si|سِي", "reer|رِير"]},
      intro: "hathi ghurftik. shoof shkither as-sireer hilu!|هذي غرفتك. شوف شكثر السرير حلو!",
      frase: {texto:"tisbah 'ala khair!|تصبح على خير!", partes:["tisbah|تصبح", "'ala khair!|على خير!"]},
      respuesta: "ahlam sa'eeda! nshoofak bacher.|أحلام سعيدة! نشوفك باكر.",
      cuento: {
        titulo: "wagt an-noom|وقت النوم",
        paginas: [
          "saar al-lail. {N} libis al-bijama.|صار الليل. {N} لبس البيجاما.",
          "natt 'ala *as-sireer*: boing, boing!|نط على *السرير*: بوينغ، بوينغ!",
          "baba basah: \"tisbah 'ala khair!\"|بابا باسه: «تصبح على خير!»",
          "\"nshoofak bacher!\" gal {N}, w sakkar 'yoonah.|«نشوفك باكر!» قال {N}، وسكّر عيونه."
        ]
      }
    }
  },
  final: {
    pregunta: "hala habibi! shlonak?|هلا حبيبي! شلونك؟",
    frase: {texto:"zain! ahibbich wayed, yaddah!|زين! أحبك وايد، يدّه!", partes:["zain!|زين!", "ahibbich wayed,|أحبك وايد،", "yaddah!|يدّه!"]},
    despedida: "boosa chibeera!|بوسة كبيرة!",
    chau: "ma'a as-salama, yaddah!|مع السلامة، يدّه!",
    lograste: "sawwaitha! sallamt 'ala kil al-ahal!|سويتها! سلمت على كل الأهل!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: yaddah tittasil feek!|عندك كل الأختام! دوّر الباب الأخضر: يدّه تتصل فيك!",
    ppFinal: "ijma' kil al-akhtam, ba'dain kallim yaddah!|اجمع كل الأختام، بعدين كلّم يدّه!",
    otraVez: "yom thani fil-bait! ijma' al-akhtam marra thanya.|يوم ثاني في البيت! اجمع الأختام مرة ثانية.",
    otraVezB: "yom thani|يوم ثاني"
  },
  microjuego: {
    titulo: "kaikat al-ahal!|كيكة الأهل!",
    intro: "zayyin al-kaika! ilmis shay lazeedh, ba'dain ilmis al-kaika.|زيّن الكيكة! المس شي لذيذ، بعدين المس الكيكة.",
    soplar: "yalla nnaffikh ash-shimoo'!|يلا ننفخ الشموع!",
    mas: "hutt ashya akthar!|حط أشياء أكثر!",
    listo: "kaika wayed hilwa! hayyeh!|كيكة وايد حلوة! هييه!",
    ingredientes: [{texto:"al-kreema|الكريمة"}, {texto:"al-fraawla|الفراولة"}, {texto:"ash-shokolata|الشوكولاتة"}, {texto:"al-hulwa al-mlawwana|الحلاوة الملونة"}, {texto:"al-karaz|الكرز"}, {texto:"ash-sham'a|الشمعة"}]
  },
  palabrasExtra: [
    {texto:"yaddah|يدّه", silabas:["yad|يَدْ", "dah|دَه"]},
    {texto:"yaddi|يدّي", silabas:["yad|يَدْ", "di|دِي"]},
    {texto:"al-'ayla|العايلة", silabas:["al|اَلْ", "'ay|عَايْ", "la|لَة"]},
    {texto:"al-kanaba|الكنبة", silabas:["al|اَلْ", "ka|كَا", "na|نَا", "ba|بَة"]},
    {texto:"at-tilifoon|التلفون", silabas:["at|اَتْ", "ti|تِي", "li|لِي", "foon|فُون"]}
  ],
  frasesExtra: [
    {texto:"sabah al-khair!|صباح الخير!", partes:["sabah|صباح", "al-khair!|الخير!"]},
    {texto:"shlonak?|شلونك؟", partes:["shlonak?|شلونك؟"]},
    {texto:"zain, shukran.|زين، شكرا.", partes:["zain,|زين،", "shukran.|شكرا."]},
    {texto:"ahibbak!|أحبك!", partes:["ahibbak!|أحبك!"]},
    {texto:"nshoofak bacher!|نشوفك باكر!", partes:["nshoofak|نشوفك", "bacher!|باكر!"]}
  ],
  preguntas: [
    {p:"minu ysawwi ash-shorba?|منو يسوي الشوربة؟", r:"mama!|ماما!"},
    {p:"minu yigra al-jareeda 'al al-kanaba?|منو يقرا الجريدة على الكنبة؟", r:"baba!|بابا!"},
    {p:"minu ygool haw, haw?|منو يقول هاو، هاو؟", r:"al-chalb!|الكلب!"},
    {p:"wain nnaam?|وين ننام؟", r:"fis-sireer!|في السرير!"},
    {p:"minu asghar wahid fil-'ayla?|منو أصغر واحد في العايلة؟", r:"al-bebi!|البيبي!"},
    {p:"b-shu nkallim yaddah?|بشو نكلم يدّه؟", r:"bit-tilifoon!|بالتلفون!"},
    {p:"minu tigra lna gisas?|منو تقرا لنا قصص؟", r:"ukhti!|أختي!"},
    {p:"minu yibni abraj mukka'abat?|منو يبني أبراج مكعبات؟", r:"akhooy!|أخوي!"},
    {p:"minu tittasil feena bit-tilifoon?|منو تتصل فينا بالتلفون؟", r:"yaddah!|يدّه!"},
    {p:"wain nigi'd nirtah?|وين نقعد نرتاح؟", r:"'al al-kanaba!|على الكنبة!"}
  ],
  objetos: {"#":"al-jidar|الجدار", b:"al-kirsi|الكرسي", p:"az-zar'a|الزرعة", m:"at-tawila|الطاولة", f:"al-ward|الورد", r:"ash-shajara|الشجرة", s:"al-kanaba|الكنبة", j:"al-al'ab|الألعاب", "~":"al-bab|الباب"}
});
