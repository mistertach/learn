/* =========================================================
   CAPÍTULO 3 · LA TORRE DEL RELOJ — textos en árabe del Golfo
   Cada texto: "latino|عربي" (las letras latinas para el grande, la escritura árabe para la voz).
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada (en las dos caras).
   "Menos cuarto" se dice "illa rub'" con la hora que viene, igual que en castellano.
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
(()=>{
const L = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(0,i); };
const A = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const U = (...ps) => ps.map(L).join('') + '|' + ps.map(A).join('');
const FIN = {punto:" bidh-dhabt.| بالضبط.", cuarto:" w rub'.| وربع.", media:" w nus.| ونص.", menos:" illa rub'.| إلا ربع."};

registrarTextos('reloj', 'ar', {
  titulo: "burj as-sa'a|برج الساعة",
  lugar: {texto:"burj as-sa'a|برج الساعة", silabas:["burj|بُرْج", "as|اَسْ", "sa|سَا", "'a|عَة"]},
  bienvenida: "wsalna burj as-sa'a!|وصلنا برج الساعة!",
  niveles: [{nombre:"al-warsha|الورشة", numTexto:"sifr|صفر"}, {nombre:"at-turoos|التروس", numTexto:"wahid|واحد"}, {nombre:"foog al-burj|فوق البرج", numTexto:"ithnain|اثنين"}],
  numeros: ["wahid|واحد", "ithnain|اثنين", "thalatha|ثلاثة", "arba'a|أربعة", "khamsa|خمسة", "sitta|ستة", "sab'a|سبعة", "thamanya|ثمانية", "tis'a|تسعة", "'ashara|عشرة", "ihda'ash|احدعش", "ithna'ash|اثنعش"],
  estaciones: {
    R: {
      palabra: {texto:"as-sa'a|الساعة", silabas:["as|اَسْ", "sa|سَا", "'a|عَة"]},
      intro: "hathi warshat as-sa'ati. fi sa'at fi kil makan!|هذي ورشة الساعاتي. في ساعات في كل مكان!",
      contar: "yalla n'idd al-argam illi 'ala as-sa'a! gool wiyyaai.|يلا نعدّ الأرقام اللي على الساعة! قول وياي.",
      frase: {texto:"cham as-sa'a?|كم الساعة؟", partes:["cham|كم", "as-sa'a?|الساعة؟"]},
      respuesta: "yalla nit'allam nigra as-sa'a!|يلا نتعلم نقرا الساعة!",
      cuento: {
        titulo: "as-sa'a in-na'sana|الساعة النعسانة",
        paginas: [
          "fi warshat as-sa'ati kan fi *sa'a* ma tsawwi tik-tak.|في ورشة الساعاتي كان في *ساعة* ما تسوي تك تك.",
          "\"nayma!\" gal ad-dub as-sa'ati.|«نايمة!» قال الدب الساعاتي.",
          "{N} 'add b-sowt 'ali: wahid, ithnain, thalatha... lain ithna'ash!|{N} عدّ بصوت عالي: واحد، اثنين، ثلاثة… لين اثنعش!",
          "w as-sa'a gi'dat: tik-tak, tik-tak!|والساعة قعدت: تك تك، تك تك!"
        ]
      }
    },
    A: {
      palabra: {texto:"al-'agrab as-sagheer|العقرب الصغير", silabas:["al|اَلْ", "'ag|عَقْ", "rab|رَب", "as|اَصْ", "sa|صَ", "gheer|غِير"]},
      intro: "shoof hal 'agrab al-gseer.|شوف هالعقرب القصير.",
      buscar: "ay sa'a 'agrabha as-sagheer ahmar?|أي ساعة عقربها الصغير أحمر؟",
      frase: {texto:"al-'agrab as-sagheer yigool as-sa'a.|العقرب الصغير يقول الساعة.", partes:["al-'agrab as-sagheer|العقرب الصغير", "yigool as-sa'a.|يقول الساعة."]},
      respuesta: "ahsant! yigool as-sa'a.|أحسنت! يقول الساعة.",
      cuento: {
        titulo: "al-'agrab as-sagheer|العقرب الصغير",
        paginas: [
          "*al-'agrab as-sagheer* gseer w yimshi shwai shwai.|*العقرب الصغير* قصير ويمشي شوي شوي.",
          "yigool lana as-sa'a: wahid, ithnain, thalatha...|يقول لنا الساعة: واحد، اثنين، ثلاثة…",
          "yom min al-ayyam bagha yista'jil... w dakh!|يوم من الأيام بغى يستعجل… وداخ!",
          "\"shwai shwai zain,\" gal lah {N}.|«شوي شوي زين» قال له {N}."
        ]
      }
    },
    N: {
      palabra: {texto:"al-'agrab al-chibeer|العقرب الكبير", silabas:["al|اَلْ", "'ag|عَقْ", "rab|رَب", "al|اَلْ", "chi|كِ", "beer|بِير"]},
      intro: "w hal 'agrab taweel, taweel, taweel.|وهالعقرب طويل، طويل، طويل.",
      buscar: "ay sa'a 'agrabha al-chibeer ahmar?|أي ساعة عقربها الكبير أحمر؟",
      frase: {texto:"al-'agrab al-chibeer yigool ad-dagayig.|العقرب الكبير يقول الدقايق.", partes:["al-'agrab al-chibeer|العقرب الكبير", "yigool ad-dagayig.|يقول الدقايق."]},
      respuesta: "ee! yigool ad-dagayig.|إي! يقول الدقايق.",
      cuento: {
        titulo: "al-'agrab ar-rakkadh|العقرب الركّاض",
        paginas: [
          "*al-'agrab al-chibeer* taweel w yirkudh wayed.|*العقرب الكبير* طويل ويركض وايد.",
          "yidoor as-sa'a kilha fi sa'a wahda.|يدور الساعة كلها في ساعة وحدة.",
          "\"yalla, ya 'agrab ya chibeer!\" saah {N}.|«يلا يا عقرب يا كبير!» صاح {N}.",
          "lamma wusal foog, 'ind al-ithna'ash, gal: \"bidh-dhabt!\"|لما وصل فوق، عند الاثنعش، قال: «بالضبط!»"
        ]
      }
    },
    H: {
      palabra: {texto:"bidh-dhabt|بالضبط", silabas:["bidh|بِضْ", "dhabt|ضَبْط"]},
      intro: "lamma al-'agrab al-chibeer yshoof al-ithna'ash, tikoon as-sa'a bidh-dhabt.|لما العقرب الكبير يشوف الاثنعش، تكون الساعة بالضبط.",
      buscar: "ay sa'a tgool thalatha bidh-dhabt?|أي ساعة تقول ثلاثة بالضبط؟",
      frase: {texto:"as-sa'a thalatha bidh-dhabt.|الساعة ثلاثة بالضبط.", partes:["as-sa'a thalatha|الساعة ثلاثة", "bidh-dhabt.|بالضبط."]},
      respuesta: "ee! as-sa'a thalatha bidh-dhabt!|إي! الساعة ثلاثة بالضبط!",
      cuento: {
        titulo: "wagt al-'asriyya|وقت العصرية",
        paginas: [
          "lamma al-'agrab al-chibeer 'ala al-ithna'ash, tikoon as-sa'a *bidh-dhabt*.|لما العقرب الكبير على الاثنعش، تكون الساعة *بالضبط*.",
          "kanat as-sa'a thalatha bidh-dhabt: wagt al-'asriyya!|كانت الساعة ثلاثة بالضبط: وقت العصرية!",
          "al-chalb yab haleeb w baskoot.|الكلب ياب حليب وبسكوت.",
          "{N} gal: \"as-sa'a thalatha bidh-dhabt! yammi!\"|{N} قال: «الساعة ثلاثة بالضبط! يمي!»"
        ]
      }
    },
    C: {
      palabra: {texto:"w rub'|وربع", silabas:["wa|وَ", "rub'|رُبْع"]},
      intro: "lamma al-'agrab al-chibeer yshoof ath-thalatha, tikoon w rub'.|لما العقرب الكبير يشوف الثلاثة، تكون وربع.",
      buscar: "ay sa'a tgool arba'a w rub'?|أي ساعة تقول أربعة وربع؟",
      frase: {texto:"as-sa'a arba'a w rub'.|الساعة أربعة وربع.", partes:["as-sa'a arba'a|الساعة أربعة", "w rub'.|وربع."]},
      respuesta: "mumtaz! arba'a w rub'.|ممتاز! أربعة وربع.",
      cuento: {
        titulo: "lil-hadeega|للحديقة",
        paginas: [
          "lamma al-'agrab al-chibeer 'ala ath-thalatha, tikoon *w rub'*.|لما العقرب الكبير على الثلاثة، تكون *وربع*.",
          "as-sa'a arba'a w rub', {N} rah al-hadeega.|الساعة أربعة وربع، {N} راح الحديقة.",
          "'ala al-marjooha: foog, taht, foog, taht.|على المرجوحة: فوق، تحت، فوق، تحت.",
          "\"as-sa'a arba'a w rub'!\" gal ad-dub. ma ahla al-yom!|«الساعة أربعة وربع!» قال الدب. ما أحلى اليوم!"
        ]
      }
    },
    M: {
      palabra: {texto:"w nus|ونص", silabas:["wa|وَ", "nus|نُصّ"]},
      intro: "lamma al-'agrab al-chibeer yshoof as-sitta, tikoon w nus.|لما العقرب الكبير يشوف الستة، تكون ونص.",
      buscar: "ay sa'a tgool khamsa w nus?|أي ساعة تقول خمسة ونص؟",
      frase: {texto:"as-sa'a khamsa w nus.|الساعة خمسة ونص.", partes:["as-sa'a khamsa|الساعة خمسة", "w nus.|ونص."]},
      respuesta: "wayed zain! khamsa w nus.|وايد زين! خمسة ونص.",
      cuento: {
        titulo: "wagt al-hammam|وقت الحمّام",
        paginas: [
          "lamma al-'agrab al-chibeer 'ala as-sitta, tikoon *w nus*.|لما العقرب الكبير على الستة، تكون *ونص*.",
          "as-sa'a khamsa w nus, al-arnooba zahhabat al-hammam.|الساعة خمسة ونص، الأرنوبة زهّبت الحمّام.",
          "fuga'at fi kil makan!|فقاعات في كل مكان!",
          "{N} gal: \"as-sa'a khamsa w nus, wagt al-hammam!\"|{N} قال: «الساعة خمسة ونص، وقت الحمّام!»"
        ]
      }
    },
    Q: {
      palabra: {texto:"illa rub'|إلا ربع", silabas:["il|إِلْ", "la|لَا", "rub'|رُبْع"]},
      intro: "lamma al-'agrab al-chibeer yshoof at-tis'a, yinags rub': tikoon illa rub'.|لما العقرب الكبير يشوف التسعة، ينقص ربع: تكون إلا ربع.",
      buscar: "ay sa'a tgool sab'a illa rub'?|أي ساعة تقول سبعة إلا ربع؟",
      frase: {texto:"as-sa'a sab'a illa rub'.|الساعة سبعة إلا ربع.", partes:["as-sa'a sab'a|الساعة سبعة", "illa rub'.|إلا ربع."]},
      respuesta: "hilu! sab'a illa rub'.|حلو! سبعة إلا ربع.",
      cuento: {
        titulo: "garrabna!|قرّبنا!",
        paginas: [
          "lamma al-'agrab al-chibeer 'ala at-tis'a, tikoon *illa rub'*.|لما العقرب الكبير على التسعة، تكون *إلا ربع*.",
          "bagi shwai 'ala as-sab'a: kanat as-sa'a sab'a illa rub'.|باقي شوي على السبعة: كانت الساعة سبعة إلا ربع.",
          "al-gattwa tithawbat: aaah! garrab wagt al-akil.|القطوة تثاوبت: آآه! قرّب وقت الأكل.",
          "\"as-sa'a sab'a illa rub'!\" gal {N}. \"garrabna!\"|«الساعة سبعة إلا ربع!» قال {N}. «قرّبنا!»"
        ]
      }
    }
  },
  final: {
    pregunta: "cham as-sa'a?|كم الساعة؟",
    frase: {texto:"as-sa'a ithna'ash bidh-dhabt!|الساعة اثنعش بالضبط!", partes:["as-sa'a ithna'ash|الساعة اثنعش", "bidh-dhabt!|بالضبط!"]},
    despedida: "tan, tan!|طن، طن!",
    chau: "al-ajras tdigg!|الأجراس تدق!",
    lograste: "sawwaitha! al-heen ta'arf tigra as-sa'a!|سويتها! الحين تعرف تقرا الساعة!",
    todos: "'indak kil al-akhtam! itla' li-foog w dawwir al-bab al-akhdhar.|عندك كل الأختام! اطلع لفوق ودوّر الباب الأخضر.",
    ppFinal: "ijma' kil al-akhtam, ba'dain ndigg al-ajras!|اجمع كل الأختام، بعدين ندق الأجراس!",
    otraVez: "dowra thanya lis-sa'a! ijma' al-akhtam marra thanya.|دورة ثانية للساعة! اجمع الأختام مرة ثانية.",
    otraVezB: "dowra thanya|دورة ثانية"
  },
  microjuego: {
    romper: "al-heen yalla nkassir al-munabbihat! ilmisha!|الحين يلا نكسر المنبهات! المسها!",
    titulo: "zabbit as-sa'a!|ظبّط الساعة!",
    intro: "isma' as-sa'a. ilmis ar-ragam, ba'dain ikhtar: bidh-dhabt, w rub', w nus, aw illa rub'.|اسمع الساعة. المس الرقم، بعدين اختار: بالضبط، وربع، ونص، أو إلا ربع.",
    pon: "zabbit as-sa'a chithi:|ظبّط الساعة كذي:",
    asi: "shoof, chithi:|شوف، كذي:",
    fin: "zabbatt {n} sa'at sah!|ظبّطت {n} ساعات صح!",
    tipos: {punto:"bidh-dhabt|بالضبط", cuarto:"w rub'|وربع", media:"w nus|ونص", menos:"illa rub'|إلا ربع"},
    // n ya viene con la hora que se dice (para "illa rub'" el juego pasa la hora que viene)
    hora: (n, t) => U("as-sa'a |الساعة ", n, FIN[t])
  },
  palabrasExtra: [
    {texto:"wahid|واحد", silabas:["wa|وَا", "hid|حِد"]},
    {texto:"ithnain|اثنين", silabas:["ith|اِثْ", "nain|نَيْن"]},
    {texto:"thalatha|ثلاثة", silabas:["tha|ثَ", "la|لَا", "tha|ثَة"]},
    {texto:"arba'a|أربعة", silabas:["ar|أَرْ", "ba|بَ", "'a|عَة"]},
    {texto:"khamsa|خمسة", silabas:["kham|خَمْ", "sa|سَة"]},
    {texto:"sitta|ستة", silabas:["sit|سِتْ", "ta|تَة"]},
    {texto:"sab'a|سبعة", silabas:["sab|سَبْ", "'a|عَة"]},
    {texto:"thamanya|ثمانية", silabas:["tha|ثَ", "man|مَانْ", "ya|يَة"]},
    {texto:"tis'a|تسعة", silabas:["tis|تِسْ", "'a|عَة"]},
    {texto:"'ashara|عشرة", silabas:["'a|عَ", "sha|شَ", "ra|رَة"]},
    {texto:"ihda'ash|احدعش", silabas:["ih|اِحْ", "da|دَ", "'ash|عَشْ"]},
    {texto:"ithna'ash|اثنعش", silabas:["ith|اِثْ", "na|نَ", "'ash|عَشْ"]}
  ],
  frasesExtra: [
    {texto:"tik-tak, tik-tak!|تك تك، تك تك!", partes:["tik-tak,|تك تك،", "tik-tak!|تك تك!"]},
    {texto:"as-sa'a wahid.|الساعة واحد.", partes:["as-sa'a wahid.|الساعة واحد."]},
    {texto:"as-sa'a ithnain.|الساعة اثنين.", partes:["as-sa'a ithnain.|الساعة اثنين."]},
    {texto:"hatha wagt an-noom.|هذا وقت النوم.", partes:["hatha wagt|هذا وقت", "an-noom.|النوم."]}
  ],
  preguntas: [
    {p:"ay sa'a tgool thalatha bidh-dhabt?|أي ساعة تقول ثلاثة بالضبط؟", r:"hathi! thalatha bidh-dhabt.|هذي! ثلاثة بالضبط."},
    {p:"ay sa'a tgool khamsa w nus?|أي ساعة تقول خمسة ونص؟", r:"hathi! khamsa w nus.|هذي! خمسة ونص."},
    {p:"ay sa'a tgool arba'a w rub'?|أي ساعة تقول أربعة وربع؟", r:"hathi! arba'a w rub'.|هذي! أربعة وربع."},
    {p:"ay sa'a tgool sab'a illa rub'?|أي ساعة تقول سبعة إلا ربع؟", r:"hathi! sab'a illa rub'.|هذي! سبعة إلا ربع."},
    {p:"ay sa'a 'agrabha as-sagheer ahmar?|أي ساعة عقربها الصغير أحمر؟", r:"hathi! al-'agrab as-sagheer.|هذي! العقرب الصغير."},
    {p:"ay sa'a 'agrabha al-chibeer ahmar?|أي ساعة عقربها الكبير أحمر؟", r:"hathi! al-'agrab al-chibeer.|هذي! العقرب الكبير."},
    {p:"warrini ragam thalatha!|ورّني رقم ثلاثة!", r:"ee! thalatha.|إي! ثلاثة."},
    {p:"warrini ragam sab'a!|ورّني رقم سبعة!", r:"ee! sab'a.|إي! سبعة."},
    {p:"warrini ragam ithna'ash!|ورّني رقم اثنعش!", r:"ee! ithna'ash.|إي! اثنعش."},
    {p:"warrini ragam tis'a!|ورّني رقم تسعة!", r:"ee! tis'a.|إي! تسعة."}
  ],
  objetos: {"#":"al-jidar|الجدار", b:"al-kirsi|الكرسي", p:"az-zar'a|الزرعة", e:"at-tirs|الترس", "~":"al-bab|الباب"}
});
})();
