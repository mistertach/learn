/* =========================================================
   CAPÍTULO 7 · EL CONSULTORIO — textos en árabe del Golfo
   Cada texto: "latino|عربي" (lo que lee el grande | lo que dice la voz).
   Misma forma que en.js. Cuentos: {N} = nombre · *palabra* = resaltada (en las dos caras).
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
registrarTextos('doctor', 'ar', {
  titulo: "fil-'iyada|في العيادة",
  lugar: {texto:"al-'iyada|العيادة", silabas:["al|اَلْ", "'i|عِي", "ya|يَا", "da|دَة"]},
  bienvenida: "wasalna al-'iyada!|وصلنا العيادة!",
  niveles: [{nombre:"ghurfat al-intidhar|غرفة الانتظار", numTexto:"sifr|صفر"}, {nombre:"at-tabig al-awwal|الطابق الأول", numTexto:"wahid|واحد"}, {nombre:"at-tabig ath-thani|الطابق الثاني", numTexto:"ithnain|اثنين"}],
  estaciones: {
    E: {
      palabra: {texto:"as-sammaa'a|السماعة", silabas:["as|اَسْ", "sam|سَمْ", "maa|مَا", "'a|عَة"]},
      intro: "marhaba! ana al-mumarridha. al-yom inta ad-daktor: tafadhal, hatha ar-rob al-abyadh!|مرحبا! أنا الممرضة. اليوم انت الدكتور: تفضل، هذا الروب الأبيض!",
      frase: {texto:"dum, dum. asma' al-galb!|دُم، دُم. أسمع القلب!", partes:["dum, dum.|دُم، دُم.", "asma' al-galb!|أسمع القلب!"]},
      respuesta: "yidig gawi! shatir!|يدق قوي! شاطر!",
      cuento: {
        titulo: "ar-rob al-abyadh|الروب الأبيض",
        paginas: [
          "al-mumarridha 'atat {N} *sammaa'a*.|الممرضة عطت {N} *سماعة*.",
          "\"li?\" sa'al {N}. \"ee! w rob abyadh ba'ad.\"|«لي؟» سأل {N}. «إي! وروب أبيض بعد.»",
          "{N} sima' galbah: dum, dum, dum!|{N} سمع قلبه: دم، دم، دم!",
          "khalas! yalla nshoof al-mardha!|خلاص! يلا نشوف المرضى!"
        ]
      }
    },
    C: {
      palabra: {texto:"ar-raas|الراس", silabas:["ar|اَرْ", "raas|رَاس"]},
      intro: "ad-dub as-sagheer za'lan. shay y'awwrah.|الدب الصغير زعلان. شي يعوّره.",
      frase: {texto:"y'awrak raasak?|يعورك راسك؟", partes:["y'awrak|يعورك", "raasak?|راسك؟"]},
      respuesta: "ee, shway… ay!|إي، شوي… آي!",
      cuento: {
        titulo: "glas mai|كلاس ماي",
        paginas: [
          "ad-dub as-sagheer kan maasik *raasah*. ay, ay, ay!|الدب الصغير كان ماسك *راسه*. آي، آي، آي!",
          "\"y'awrak raasak?\" sa'al {N}. \"ee, shway.\"|«يعورك راسك؟» سأل {N}. «إي، شوي.»",
          "{N} 'ataah glas mai barid: \"al-heen, irtah.\"|{N} عطاه كلاس ماي بارد: «الحين، ارتاح.»",
          "ad-dub as-sagheer naam shway… w gam farhan!|الدب الصغير نام شوي… وقام فرحان!"
        ]
      }
    },
    A: {
      palabra: {texto:"al-batn|البطن", silabas:["al|اَلْ", "batn|بَطْن"]},
      intro: "al-chalb as-sagheer y'awrah batnah.|الكلب الصغير يعوره بطنه.",
      frase: {texto:"shu kalait?|شو كليت؟", partes:["shu|شو", "kalait?|كليت؟"]},
      respuesta: "ays krim wayed w bitza wayed!|آيس كريم وايد وبيتزا وايد!",
      cuento: {
        titulo: "ays krim wayed|آيس كريم وايد",
        paginas: [
          "al-chalb as-sagheer kan y'awrah *batnah*.|الكلب الصغير كان يعوره *بطنه*.",
          "\"shu kalait?\" sa'al {N}. \"ays krim wayed w bitza wayed!\"|«شو كليت؟» سأل {N}. «آيس كريم وايد وبيتزا وايد!»",
          "{N} 'ataah mal'agat dawa. mmm, bil-faraula!|{N} عطاه ملعقة دوا. ممم، بالفراولة!",
          "ba'ad shway al-chalb as-sagheer gam yirgus: ma y'awrah shay!|بعد شوي الكلب الصغير قام يرقص: ما يعوره شي!"
        ]
      }
    },
    N: {
      palabra: {texto:"al-khashm|الخشم", silabas:["al|اَلْ", "khashm|خَشْم"]},
      intro: "oh! al-arnooba khashmha ahmar.|أوه! الأرنوبة خشمها أحمر.",
      frase: {texto:"yarhamk allah!|يرحمك الله!", partes:["yarhamk|يرحمك", "allah!|الله!"]},
      respuesta: "atshoo! shukran!|أتشو! شكرا!",
      cuento: {
        titulo: "atshoo!|أتشو!",
        paginas: [
          "al-arnooba kan *khashmha* ahmar mithl al-faraula.|الأرنوبة كان *خشمها* أحمر مثل الفراولة.",
          "aaa… atshoo! \"yarhamk allah!\" gal {N}.|آآآ… أتشو! «يرحمك الله!» قال {N}.",
          "{N} 'ataha kleenex: \"infikhi gawi.\"|{N} عطاها كلينكس: «انفخي قوي.»",
          "\"shukran! al-heen agdar ashumm al-ward,\" galat al-arnooba.|«شكرا! الحين أقدر أشم الورد،» قالت الأرنوبة."
        ]
      }
    },
    B: {
      palabra: {texto:"al-fam|الفم", silabas:["al|اَلْ", "fam|فَم"]},
      intro: "al-gattu as-sagheer lazim ywarreena asnanah.|القطو الصغير لازم يورينا أسنانه.",
      frase: {texto:"iftah fammak, law samaht.|افتح فمك، لو سمحت.", partes:["iftah fammak,|افتح فمك،", "law samaht.|لو سمحت."]},
      respuesta: "aaaaah!|آآآآه!",
      cuento: {
        titulo: "aaaah!|آآآه!",
        paginas: [
          "al-gattu ar-ramadi ma kan yibi yiftah *fammah*.|القطو الرمادي ما كان يبي يفتح *فمه*.",
          "\"iftah fammak, law samaht,\" gal {N}. \"aaaaah!\"|«افتح فمك، لو سمحت،» قال {N}. «آآآآه!»",
          "wayed hilwa asnanah: bidh w tilma'!|وايد حلوة أسنانه: بيض وتلمع!",
          "\"shatir! w farrish asnanak kil yom.\"|«شاطر! وفرّش أسنانك كل يوم.»"
        ]
      }
    },
    R: {
      palabra: {texto:"ar-rukba|الركبة", silabas:["ar|اَرْ", "ruk|رُكْ", "ba|بَة"]},
      intro: "al-chalb tah min as-saykal.|الكلب طاح من السيكل.",
      frase: {texto:"hathi lazga lak.|هذي لزقة لك.", partes:["hathi lazga|هذي لزقة", "lak.|لك."]},
      respuesta: "ma y'awrni al-heen! shukran!|ما يعورني الحين! شكرا!",
      cuento: {
        titulo: "al-lazga|اللزقة",
        paginas: [
          "al-chalb tah w t'awwar fi *rukbatah*. waaah!|الكلب طاح وتعوّر في *ركبته*. واااه!",
          "{N} gallah: \"la tkhaf, ma fi shay.\"|{N} قال له: «لا تخاف، ما في شي.»",
          "w {N} hatt lah lazga mlawwana.|و{N} حط له لزقة ملونة.",
          "\"ma y'awrni al-heen!\" w al-chalb rakadh yil'ab.|«ما يعورني الحين!» والكلب ركض يلعب."
        ]
      }
    },
    T: {
      palabra: {texto:"meezan al-harara|ميزان الحرارة", silabas:["mee|مِي", "zaan|زَان", "il|اِلْ", "ha|حَ", "raa|رَا", "ra|رَة"]},
      intro: "ad-dub ta'ban wayed. 'indah harara?|الدب تعبان وايد. عنده حرارة؟",
      frase: {texto:"'indak harara?|عندك حرارة؟", partes:["'indak|عندك", "harara?|حرارة؟"]},
      respuesta: "la! ana zain!|لا! أنا زين!",
      cuento: {
        titulo: "ma fi harara|ما في حرارة",
        paginas: [
          "ad-dub kan ta'ban. {N} jab *meezan al-harara*.|الدب كان تعبان. {N} جاب *ميزان الحرارة*.",
          "\"'indak harara?\" sa'al {N}. ad-dub intadhar, sakit.|«عندك حرارة؟» سأل {N}. الدب انتظر، ساكت.",
          "beeb, beeb! \"ma fi harara!\"|بيب، بيب! «ما في حرارة!»",
          "\"yaay!\" gal ad-dub, w gam yirgus.|«ياي!» قال الدب، وقام يرقص."
        ]
      }
    }
  },
  final: {
    pregunta: "ana za'lan… y'awrni raasi.|أنا زعلان… يعورني راسي.",
    frase: {texto:"lazga w hadhn!|لزقة وحضن!", partes:["lazga|لزقة", "w hadhn!|وحضن!"]},
    despedida: "al-heen ana farhan!|الحين أنا فرحان!",
    chau: "shukran ita's tihtamm feeni!|شكرا عشان تهتم فيني!",
    lograste: "sawwaitha! 'aalajt al-kil!|سويتها! عالجت الكل!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: ad-dabdoob yibeek!|عندك كل الأختام! دوّر الباب الأخضر: الدبدوب يبيك!",
    ppFinal: "ijma' kil al-akhtam, ba'dain nihtamm bid-dabdoob!|اجمع كل الأختام، بعدين نهتم بالدبدوب!",
    otraVez: "yom thani fil-'iyada! ijma' al-akhtam marra thanya.|يوم ثاني في العيادة! اجمع الأختام مرة ثانية.",
    otraVezB: "yom thani|يوم ثاني"
  },
  // el microjuego: las partes del cuerpo, en el orden de base.js (p = la pregunta)
  microjuego: {
    cosquillas: "al-heen, daghdagha! ilmis ad-dabdoob wain ma tibi.|الحين، دغدغة! المس الدبدوب وين ما تبي.",
    titulo: "wain al-khashm?|وين الخشم؟",
    intro: "isma', w ilmis hal makan fi jism ad-dabdoob.|اسمع، والمس هالمكان في جسم الدبدوب.",
    fin: "ligait {n} min ajza' al-jism!|لقيت {n} من أجزاء الجسم!",
    ingredientes: [
      {texto:"ar-raas|الراس", p:"wain ar-raas?|وين الراس؟"},
      {texto:"al-'yoon|العيون", p:"wain al-'yoon?|وين العيون؟"},
      {texto:"al-khashm|الخشم", p:"wain al-khashm?|وين الخشم؟"},
      {texto:"al-fam|الفم", p:"wain al-fam?|وين الفم؟"},
      {texto:"al-idhoon|الإذون", p:"wain al-idhoon?|وين الإذون؟"},
      {texto:"al-batn|البطن", p:"wain al-batn?|وين البطن؟"},
      {texto:"ar-rijool|الرجول", p:"wain ar-rijool?|وين الرجول؟"}
    ]
  },
  palabrasExtra: [
    {texto:"al-'yoon|العيون", silabas:["al|اَلْ", "'u|عُ", "yoon|يُون"]},
    {texto:"al-idhoon|الإذون", silabas:["al|اَلْ", "'i|إِ", "dhoon|ذُون"]},
    {texto:"ar-rijool|الرجول", silabas:["ar|اَرْ", "ri|رِ", "jool|جُول"]},
    {texto:"al-lazga|اللزقة", silabas:["al|اَلْ", "laz|لَزْ", "ga|قَة"]},
    {texto:"ad-dawa|الدوا", silabas:["ad|اَدْ", "da|دَ", "wa|وَا"]}
  ],
  frasesExtra: [
    {texto:"ana wayed farhan!|أنا وايد فرحان!", partes:["ana wayed|أنا وايد", "farhan!|فرحان!"]},
    {texto:"ana za'lan.|أنا زعلان.", partes:["ana|أنا", "za'lan.|زعلان."]},
    {texto:"ana khayif.|أنا خايف.", partes:["ana|أنا", "khayif.|خايف."]},
    {texto:"ay, y'awrni!|آي، يعورني!", partes:["ay,|آي،", "y'awrni!|يعورني!"]},
    {texto:"sirt ahsan!|صرت أحسن!", partes:["sirt|صرت", "ahsan!|أحسن!"]}
  ],
  preguntas: [
    {p:"b-esh nisma' al-galb?|بإيش نسمع القلب؟", r:"bis-sammaa'a!|بالسماعة!"},
    {p:"shu ygool lana idha fi harara?|شو يقول لنا إذا في حرارة؟", r:"meezan al-harara!|ميزان الحرارة!"},
    {p:"shu nhutt 'ala ar-rukba al-mit'awra?|شو نحط على الركبة المتعورة؟", r:"lazga!|لزقة!"},
    {p:"b-esh nshumm al-ward?|بإيش نشم الورد؟", r:"bil-khashm!|بالخشم!"},
    {p:"b-esh nshoof?|بإيش نشوف؟", r:"bil-'yoon!|بالعيون!"},
    {p:"b-esh nisma' al-moseega?|بإيش نسمع الموسيقى؟", r:"bil-idhoon!|بالإذون!"},
    {p:"b-esh nakil?|بإيش ناكل؟", r:"bil-fam!|بالفم!"},
    {p:"b-esh nimshi?|بإيش نمشي؟", r:"bir-rijool!|بالرجول!"},
    {p:"ay wijh za'lan?|أي وجه زعلان؟", r:"hatha!|هذا!"},
    {p:"ay wijh farhan?|أي وجه فرحان؟", r:"hatha!|هذا!"}
  ],
  objetos: {"#":"al-jidar|الجدار", p:"az-zar'a|الزرعة", b:"al-kirsi|الكرسي", x:"sareer al-fahs|سرير الفحص", "~":"al-bab|الباب"}
});
