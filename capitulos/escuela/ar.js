/* =========================================================
   CAPÍTULO 9 · LA ESCUELA — textos en árabe del Golfo
   Cada texto: "latino|عربي" (lo que lee el grande | lo que dice la voz).
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada (en las dos caras).
   La seño es "ablah" (أبلة), como le dicen a la maestra en el Golfo.
   microjuego.fin: textoN() reemplaza solo el primer {n}, así que va solo en la cara árabe.
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
registrarTextos('escuela', 'ar', {
  titulo: "al-madrasa|المدرسة",
  lugar: {texto:"al-madrasa|المدرسة", silabas:["al|اَلْ", "mad|مَدْ", "ra|رَ", "sa|سَة"]},
  bienvenida: "wasalna al-madrasa!|وصلنا المدرسة!",
  niveles: [{nombre:"al-madkhal|المدخل", numTexto:"sifr|صفر"}, {nombre:"al-fasl|الفصل", numTexto:"wahid|واحد"}, {nombre:"at-tabig ath-thani|الطابق الثاني", numTexto:"ithnain|اثنين"}],
  estaciones: {
    M: {
      palabra: {texto:"ash-shanta|الشنطة", silabas:["ash|اَشْ", "shan|شَنْ", "ta|طَة"]},
      intro: "hala wallah! ana al-ablah. 'allig shantak.|هلا والله! أنا الأبلة. علّق شنطتك.",
      frase: {texto:"sabah al-khair, ya ablah!|صباح الخير يا أبلة!", partes:["sabah al-khair,|صباح الخير،", "ya ablah!|يا أبلة!"]},
      respuesta: "sabah an-noor! wayed farhana ashoofak!|صباح النور! وايد فرحانة أشوفك!",
      cuento: {
        titulo: "awwal yom|أول يوم",
        paginas: [
          "*ash-shanta* maal {N} kanat jahza lil-madrasa.|*الشنطة* مال {N} كانت جاهزة للمدرسة.",
          "\"sabah al-khair, ya ablah!\" gal {N}. \"sabah an-noor! wayed farhana ashoofak!\"|«صباح الخير يا أبلة!» قال {N}. «صباح النور! وايد فرحانة أشوفك!»",
          "{N} fatah ash-shanta: kitab, galam... kil shay jahiz!|{N} فتح الشنطة: كتاب، قلم... كل شي جاهز!",
          "bidat al-madrasa! yaay!|بدت المدرسة! ييي!"
        ]
      }
    },
    Z: {
      palabra: {texto:"al-galam|القلم", silabas:["al|اَلْ", "ga|قَ", "lam|لَمْ"]},
      intro: "oops! wain galamak?|أوبس! وين قلمك؟",
      frase: {texto:"agdar asta'mil galamak?|أقدر أستعمل قلمك؟", partes:["agdar asta'mil|أقدر أستعمل", "galamak?|قلمك؟"]},
      respuesta: "akeed! tafadhal!|أكيد! تفضل!",
      cuento: {
        titulo: "galam al-gattwa|قلم القطوة",
        paginas: [
          "al-gattwa kan 'indaha *galam* asfar.|القطوة كان عندها *قلم* أصفر.",
          "{N} ma liga galamah... ya wailee!|{N} ما لقى قلمه... يا ويلي!",
          "\"agdar asta'mil galamak?\" \"akeed! tafadhal!\"|«أقدر أستعمل قلمك؟» «أكيد! تفضل!»",
          "{N} rasam najma chibeera wayed. \"shukran!\"|{N} رسم نجمة كبيرة وايد. «شكراً!»"
        ]
      }
    },
    B: {
      palabra: {texto:"al-kitab|الكتاب", silabas:["al|اَلْ", "ki|كِ", "tab|تَابْ"]},
      intro: "hatha rukn al-kutub.|هذا ركن الكتب.",
      frase: {texto:"agdar agra hal kitab?|أقدر أقرا هالكتاب؟", partes:["agdar agra|أقدر أقرا", "hal kitab?|هالكتاب؟"]},
      respuesta: "ee! hathi gissat garasina.|إي! هذي قصة قراصنة.",
      cuento: {
        titulo: "gissat al-garasina|قصة القراصنة",
        paginas: [
          "al-arnooba kan 'indaha *kitab* malyan suwar.|الأرنوبة كان عندها *كتاب* مليان صور.",
          "\"agdar agra hal kitab?\" sa'al {N}.|«أقدر أقرا هالكتاب؟» سأل {N}.",
          "kanat gissat garasina wiyya kanz makhfi!|كانت قصة قراصنة ويا كنز مخفي!",
          "\"marra thanya, marra thanya!\" gal {N}.|«مرة ثانية، مرة ثانية!» قال {N}."
        ]
      }
    },
    T: {
      palabra: {texto:"al-migass|المقص", silabas:["al|اَلْ", "mi|مِ", "gass|قَصّ"]},
      intro: "al-yom ingus ashkal.|اليوم نقص أشكال.",
      frase: {texto:"ag-uss da'ira.|أقص دائرة.", partes:["ag-uss|أقص", "da'ira.|دائرة."]},
      respuesta: "wayed mdawwara!|وايد مدوّرة!",
      cuento: {
        titulo: "dawayir warag|دواير ورق",
        paginas: [
          "al-chalb as-sagheer yab *al-migass* w warga hamra.|الكلب الصغير ياب *المقص* وورقة حمرا.",
          "{N} gass b-shwaish: da'ira!|{N} قص بشويش: دائرة!",
          "w wahda thanya, w wahda thanya! dawayir fi kil makan!|وواحدة ثانية، وواحدة ثانية! دواير في كل مكان!",
          "lazgoohum 'ala al-jidar. wayed hilwa!|لزقوهم على الجدار. وايد حلوة!"
        ]
      }
    },
    C: {
      palabra: {texto:"al-alwan|الألوان", silabas:["al|اَلْ", "al|أَلْ", "wan|وَانْ"]},
      intro: "yalla nirsim bil-alwan!|يلا نرسم بالألوان!",
      frase: {texto:"arsim muthallath.|أرسم مثلث.", partes:["arsim|أرسم", "muthallath.|مثلث."]},
      respuesta: "muthallath akhdhar! wayed hilu!|مثلث أخضر! وايد حلو!",
      cuento: {
        titulo: "ar-rasma as-sihriyya|الرسمة السحرية",
        paginas: [
          "al-gattu ar-rumadi kan 'indah 'ilbat *alwan*.|القطو الرمادي كان عنده علبة *ألوان*.",
          "{N} rasam muthallath akhdhar.|{N} رسم مثلث أخضر.",
          "ba'dain murabba' w najma... shu hal rasma al-hilwa!|بعدين مربع ونجمة... شو هالرسمة الحلوة!",
          "w kil wahid ragas hawl ar-rasma!|وكل واحد رقص حول الرسمة!"
        ]
      }
    },
    K: {
      palabra: {texto:"at-tagweem|التقويم", silabas:["at|اَتْ", "tag|تَقْ", "weem|وِيمْ"]},
      intro: "shoof at-tagweem. ay yom al-yom?|شوف التقويم. أي يوم اليوم؟",
      frase: {texto:"al-yom al-ithnain.|اليوم الاثنين.", partes:["al-yom|اليوم", "al-ithnain.|الاثنين."]},
      respuesta: "w bacher ath-thalatha!|وباكر الثلاثاء!",
      cuento: {
        titulo: "ay yom al-yom?|أي يوم اليوم؟",
        paginas: [
          "'ala al-jidar kan fi *tagweem* fih ayyam wayed.|على الجدار كان في *تقويم* فيه أيام وايد.",
          "{N} shafah: \"al-yom al-ithnain.\"|{N} شافه: «اليوم الاثنين.»",
          "\"w as-sabt ma fi madrasa!\" saffagat ad-dubba.|«والسبت ما في مدرسة!» صفقت الدبة.",
          "al-ithnain, ath-thalatha, al-arba'a! yalla nit'allam kil al-ayyam!|الاثنين، الثلاثاء، الأربعاء! يلا نتعلم كل الأيام!"
        ]
      }
    },
    N: {
      palabra: {texto:"al-jaras|الجرس", silabas:["al|اَلْ", "ja|جَ", "ras|رَسْ"]},
      intro: "trrrn! al-jaras gaa'id yidigg.|ترررن! الجرس قاعد يدق.",
      frase: {texto:"agdar atla' lil-fus-ha?|أقدر أطلع للفسحة؟", partes:["agdar atla'|أقدر أطلع", "lil-fus-ha?|للفسحة؟"]},
      respuesta: "ee! yalla nil'ab!|إي! يلا نلعب!",
      cuento: {
        titulo: "al-fus-ha!|الفسحة!",
        paginas: [
          "trrrn! *al-jaras* dagg.|ترررن! *الجرس* دق.",
          "\"agdar atla' lil-fus-ha?\" sa'al {N}.|«أقدر أطلع للفسحة؟» سأل {N}.",
          "{N} rikadh wara al-kura.|{N} ركض ورا الكورة.",
          "al-fus-ha ahla shay!|الفسحة أحلى شي!"
        ]
      }
    }
  },
  final: {
    pregunta: "nghanni ayyam al-usboo'?|نغني أيام الأسبوع؟",
    frase: {texto:"ee! yalla nghanni!|إي! يلا نغني!", partes:["ee!|إي!", "yalla nghanni!|يلا نغني!"]},
    dias: ["al-ithnain|الاثنين", "ath-thalatha|الثلاثاء", "al-arba'a|الأربعاء", "al-khamees|الخميس", "al-jum'a|الجمعة", "as-sabt|السبت", "al-ahad|الأحد"],
    despedida: "nshoofak bacher!|نشوفك باكر!",
    chau: "ma'a as-salama, ya madrasa!|مع السلامة يا مدرسة!",
    lograste: "sawwaitha! t'allamt wayed fil-madrasa!|سويتها! تعلمت وايد في المدرسة!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: yalla nghanni ma'a al-ablah!|عندك كل الأختام! دوّر الباب الأخضر: يلا نغني مع الأبلة!",
    ppFinal: "ijma' kil al-akhtam, ba'dain nghanni ma'a al-ablah!|اجمع كل الأختام، بعدين نغني مع الأبلة!",
    otraVez: "yom madrasa thani! ijma' al-akhtam marra thanya.|يوم مدرسة ثاني! اجمع الأختام مرة ثانية.",
    otraVezB: "yom thani|يوم ثاني"
  },
  // el microjuego: las formas en el orden de base.js (pon = el pedido)
  microjuego: {
    maneja: "al-heen sooq al-gitar! idhghat w khallak 'ashan yisri'.|الحين سوق القطار! اضغط وخلّك عشان يسرع.", vamos: "yalla!|يلا!", bocina: "toot toot!|توت توت!", llegamos: "wasalna! ahsant!|وصلنا! أحسنت!",
    titulo: "gitar al-ashkal!|قطار الأشكال!",
    intro: "isma' ay shakl yrooh fil-gitar, w ilmisah.|اسمع أي شكل يروح في القطار، والمسه.",
    fin: "hammalt ashkal fil-gitar!|حمّلت {n} أشكال في القطار!",
    chu: "toot toot! al-gitar mashi!|توت توت! القطار ماشي!",
    ingredientes: [
      {texto:"ad-da'ira|الدائرة", pon:"hutt ad-da'ira fil-gitar.|حط الدائرة في القطار.", est:"mahattat ad-da'ira!|محطة الدائرة!"},
      {texto:"al-murabba'|المربع", pon:"hutt al-murabba' fil-gitar.|حط المربع في القطار.", est:"mahattat al-murabba'!|محطة المربع!"},
      {texto:"al-muthallath|المثلث", pon:"hutt al-muthallath fil-gitar.|حط المثلث في القطار.", est:"mahattat al-muthallath!|محطة المثلث!"},
      {texto:"an-najma|النجمة", pon:"hutt an-najma fil-gitar.|حط النجمة في القطار.", est:"mahattat an-najma!|محطة النجمة!"},
      {texto:"al-galb|القلب", pon:"hutt al-galb fil-gitar.|حط القلب في القطار.", est:"mahattat al-galb!|محطة القلب!"}
    ]
  },
  palabrasExtra: [
    {texto:"ad-da'ira|الدائرة", silabas:["ad|اَدْ", "da|دَا", "'i|ئِ", "ra|رَة"]},
    {texto:"al-murabba'|المربع", silabas:["al|اَلْ", "mu|مُ", "rab|رَبْ", "ba'|بَعْ"]},
    {texto:"al-muthallath|المثلث", silabas:["al|اَلْ", "mu|مُ", "thal|ثَلْ", "lath|لَثْ"]},
    {texto:"an-najma|النجمة", silabas:["an|اَنْ", "naj|نَجْ", "ma|مَة"]},
    {texto:"as-sabboora|السبورة", silabas:["as|اَسْ", "sab|سَبْ", "boo|بُو", "ra|رَة"]}
  ],
  frasesExtra: [
    {texto:"arfa' eedi.|أرفع إيدي.", partes:["arfa'|أرفع", "eedi.|إيدي."]},
    {texto:"agdar arooh al-hammam?|أقدر أروح الحمام؟", partes:["agdar arooh|أقدر أروح", "al-hammam?|الحمام؟"]},
    {texto:"agdar ashrab mai?|أقدر أشرب ماي؟", partes:["agdar|أقدر", "ashrab mai?|أشرب ماي؟"]},
    {texto:"ta'teeni al-massaha?|تعطيني المساحة؟", partes:["ta'teeni|تعطيني", "al-massaha?|المساحة؟"]},
    {texto:"nshoofich bacher, ya ablah!|نشوفج باكر يا أبلة!", partes:["nshoofich bacher,|نشوفج باكر،", "ya ablah!|يا أبلة!"]}
  ],
  preguntas: [
    {p:"b-shu niktib?|بشو نكتب؟", r:"bil-galam!|بالقلم!"},
    {p:"b-shu ingus?|بشو نقص؟", r:"bil-migass!|بالمقص!"},
    {p:"shu nigra?|شو نقرا؟", r:"kitab!|كتاب!"},
    {p:"wain inshil aghradh al-madrasa?|وين نشيل أغراض المدرسة؟", r:"fish-shanta!|في الشنطة!"},
    {p:"b-shu inlawwin?|بشو نلوّن؟", r:"bil-alwan!|بالألوان!"},
    {p:"wain inshoof al-ayyam?|وين نشوف الأيام؟", r:"fit-tagweem!|في التقويم!"},
    {p:"shu yidigg 'ashan al-fus-ha?|شو يدق عشان الفسحة؟", r:"al-jaras!|الجرس!"},
    {p:"ay shakl mdawwar?|أي شكل مدوّر؟", r:"ad-da'ira!|الدائرة!"},
    {p:"ay shakl 'indah thalath zawaya?|أي شكل عنده ثلاث زوايا؟", r:"al-muthallath!|المثلث!"},
    {p:"ay shakl 'indah arba' adhla' mitsawya?|أي شكل عنده أربع أضلاع متساوية؟", r:"al-murabba'!|المربع!"}
  ],
  objetos: {"#":"al-jidar|الجدار", q:"at-tawla|الطاولة", p:"az-zar'a|الزرعة", b:"al-kirsi|الكرسي", "~":"al-bab|الباب"}
});
