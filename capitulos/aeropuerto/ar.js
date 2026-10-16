/* =========================================================
   CAPÍTULO 1 · EL AEROPUERTO — textos en árabe del Golfo
   Cada texto: "latino|عربي" (a la izquierda lo que lee el grande, a la derecha lo que dice la voz).
   Misma forma que en.js. Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada.
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
registrarTextos('aeropuerto', 'ar', {
  charlas: [
    {titulo:"nsawlif 'ind al-isti'lamaat|نسولف عند الاستعلامات", chau:"rihla sa'eeda!|رحلة سعيدة!", pasos:[
      {di:"marhaba! agdar asa'dak?|مرحبا! أقدر أساعدك؟", op:[{t:"aywa, wain al-hammam?|أيوا، وين الحمام؟", r:"fil-mamarr, 'ala al-yameen.|في الممر، على اليمين."}, {t:"aywa, wain at-tayyara?|أيوا، وين الطيارة؟", r:"'ind bawwaba khamsa! itba' as-sihaam as-safra.|عند بوابة خمسة! اتبع الأسهم الصفرا."}]},
      {op:[{t:"wain al-kafeeteria?|وين الكافتيريا؟", r:"hnaak, jamb ash-shubbaak.|هناك، جنب الشباك."}, {t:"mita tiTla' at-tayyara?|متى تطلع الطيارة؟", r:"ba'd saa'a!|بعد ساعة!"}]},
      {di:"'indak at-tadhkara?|عندك التذكرة؟", op:[{t:"aywa, hathi tadhkarti.|أيوا، هذي تذكرتي.", r:"mumtaz! kil shi jahiz.|ممتاز! كل شي جاهز."}, {t:"aywa, hiya fi shantati.|أيوا، هي في شنطتي.", r:"zain! la tidyi'ha.|زين! لا تضيعها."}]},
      {op:[{t:"agdar a'khudh khareeta min fadlak?|أقدر آخذ خريطة من فضلك؟", r:"akeed! hathi khareeta.|أكيد! هذي خريطة."}, {t:"hiya ba'eeda?|هي بعيدة؟", r:"la, qareeba wayed.|لا، قريبة وايد."}]}]},
    {titulo:"nsawlif 'ind al-kafeeteria|نسولف عند الكافتيريا", chau:"tamatta' bil-wajba! safar mumti'!|تمتع بالوجبة! سفر ممتع!", pasos:[
      {di:"marhaba! tibi shi takilh?|مرحبا! تبي شي تاكله؟", op:[{t:"aywa, biskwit min fadlak.|أيوا، بسكويت من فضلك.", r:"hatha biskwit ladheedh.|هذا بسكويت لذيذ."}, {t:"aywa, 'aseer min fadlak.|أيوا، عصير من فضلك.", r:"hatha 'aseerak.|هذا عصيرك."}]},
      {op:[{t:"bikam?|بكم؟", r:"samaktain.|سمكتين."}, {t:"shu 'indak?|شو عندك؟", r:"biskwit w 'aseer w fawaakih!|بسكويت وعصير وفواكه!"}]},
      {di:"tibi shi thaani?|تبي شي ثاني؟", op:[{t:"la, shukran.|لا، شكراً.", r:"afwan!|عفواً!"}, {t:"aywa, biskwit thaani!|أيوا، بسكويت ثاني!", r:"tafaddal. inta jou'an!|تفضل. إنت جوعان!"}]},
      {op:[{t:"hatha taazaj?|هذا طازج؟", r:"aywa, min al-yoom!|أيوا، من اليوم!"}, {t:"agdar aakhidhah fit-tayyara?|أقدر آخذه في الطيارة؟", r:"akeed!|أكيد!"}]}]},
    {titulo:"nsawlif 'ind al-amn|نسولف عند الأمن", chau:"kil shi tamam! rihla sa'eeda!|كل شي تمام! رحلة سعيدة!", pasos:[
      {di:"marhaba! jawaaz safarak min fadlak.|مرحبا! جواز سفرك من فضلك.", op:[{t:"hatha jawaaz safari.|هذا جواز سفري.", r:"shukran! khalni ashoof.|شكراً! خلني أشوف."}, {t:"tafaddal.|تفضل.", r:"shukran jazeelan.|شكراً جزيلاً."}]},
      {op:[{t:"huwa zain?|هو زين؟", r:"aywa, kil shi tamam!|أيوا، كل شي تمام!"}, {t:"wain aroh al-heen?|وين أروح الحين؟", r:"siida, lil-bawwaba.|سيدا، للبوابة."}]},
      {di:"'indak shi fi jaybak?|عندك شي في جيبك؟", op:[{t:"la, wala shi.|لا، ولا شي.", r:"mumtaz! tigdar timshi.|ممتاز! تقدر تمشي."}, {t:"bas lu'btii.|بس لعبتي.", r:"zain! tigdar timshi.|زين! تقدر تمشي."}]},
      {op:[{t:"agdar amshi al-heen?|أقدر أمشي الحين؟", r:"aywa, itfaddal!|أيوا، اتفضل!"}, {t:"tiftishoon kil ash-shunat?|تفتشون كل الشنط؟", r:"aywa, li-hifz al-jami'.|أيوا، لحفظ الجميع."}]}]},
    {titulo:"nsawlif wiyya at-tayyaar|نسولف ويا الطيار", chau:"binazil! shukran 'ala at-tayaraan wiyyaai!|ننزل! شكراً على الطيران وياي!", pasos:[
      {di:"ahlan bik 'ala al-mutn! ana at-tayyaar. jahiz titeer?|أهلاً بك على المتن! أنا الطيار. جاهز تطير؟", op:[{t:"aywa, ana jahiz!|أيوا، أنا جاهز!", r:"ishdud hizaam al-amaan!|اشدد حزام الأمان!"}, {t:"aywa, ahibb at-tayyaraat!|أيوا، أحب الطيارات!", r:"wana ba'd! itla'.|وأنا بعد! اطلع."}]},
      {op:[{t:"wain nteer?|وين نطير؟", r:"foog, foog as-sahaab!|فوق، فوق السحاب!"}, {t:"at-tayyara kabeera?|الطيارة كبيرة؟", r:"aywa, kabeera wayed!|أيوا، كبيرة وايد!"}]},
      {di:"shoof min ash-shubbaak! shu tishoof?|شوف من الشباك! شو تشوف؟", op:[{t:"ashoof as-sahaab!|أشوف السحاب!", r:"aywa, mithl al-qutn.|أيوا، مثل القطن."}, {t:"ashoof as-sama'!|أشوف السماء!", r:"aywa, zarqa wayed.|أيوا، زرقاء وايد."}]},
      {op:[{t:"agdar ajlis jamb ash-shubbaak?|أقدر أجلس جنب الشباك؟", r:"akeed! ahsan maq'ad.|أكيد! أحسن مقعد."}, {t:"kam tdoom ar-rihla?|كم تدوم الرحلة؟", r:"saa'a wahda bas.|ساعة وحدة بس."}]}]}
  ],
  titulo: "al-mataar|المطار",
  lugar: {texto:"al-mataar|المطار", silabas:["al|اَلْ", "ma|مَ", "taar|طَار"]},
  bienvenida: "wasalna al-mataar!|وصلنا المطار!",
  niveles: [{nombre:"al-wusool|الوصول", numTexto:"sifr|صفر"}, {nombre:"al-mughadara|المغادرة", numTexto:"wahid|واحد"}, {nombre:"al-bawwabat|البوابات", numTexto:"ithnain|اثنين"}],
  estaciones: {
    I: {
      palabra: {texto:"al-khareeta|الخريطة", silabas:["al|اَلْ", "kha|خَ", "ree|رِي", "ta|طَة"]},
      intro: "hadha maktab al-isti'lamat. hni y'arfoon wain kil shay!|هذا مكتب الاستعلامات. هني يعرفون وين كل شي!",
      frase: {texto:"wain at-tayyara?|وين الطيارة؟", partes:["wain|وين", "at-tayyara?|الطيارة؟"]},
      respuesta: "fog, fi at-tabig ath-thani!|فوق، في الطابق الثاني!",
      cuento: {
        titulo: "al-khareeta as-sihriyya|الخريطة السحرية",
        paginas: [
          "{N} lga *al-khareeta* 'ind maktab al-isti'lamat.|{N} لقى *الخريطة* عند مكتب الاستعلامات.",
          "faj'a, al-khareeta bidat tilma'! fiha tareeg ahmar.|فجأة، الخريطة بدت تلمع! فيها طريق أحمر.",
          "at-tareeg yiseer fog, fog, fog… lain at-tabig ath-thani!|الطريق يسير فوق، فوق، فوق… لين الطابق الثاني!",
          "fog chan fi *at-tayyara*. «shukran ya khareeta!» gal {N}.|فوق كان في *الطيارة*. «شكراً يا خريطة!» قال {N}."
        ]
      }
    },
    B: {
      palabra: {texto:"al-hammam|الحمام", silabas:["al|اَلْ", "ham|حَمْ", "maam|مَام"]},
      intro: "oops! ahyanan lazim nrooh al-hammam.|أوبس! أحياناً لازم نروح الحمام.",
      frase: {texto:"wain al-hammam?|وين الحمام؟", partes:["wain|وين", "al-hammam?|الحمام؟"]},
      respuesta: "hni! hal bab!|هني! هالباب!",
      cuento: {
        titulo: "fuqqa'at fil-hammam!|فقاعات في الحمام!",
        paginas: [
          "{N} yibi yrooh *al-hammam* wayed wayed.|{N} يبي يروح *الحمام* وايد وايد.",
          "«wain al-hammam?» sa'al {N} al-gattwa as-safra.|«وين الحمام؟» سأل {N} القطوة الصفرا.",
          "«hni, al-bab al-azrag!» galat al-gattwa.|«هني، الباب الأزرق!» قالت القطوة.",
          "ba'dain {N} ghasal yadaineh b-sabun wayed. fuqqa'at, fuqqa'at!|بعدين {N} غسل يدينه بصابون وايد. فقاعات، فقاعات!"
        ]
      }
    },
    K: {
      palabra: {texto:"al-baskoot|البسكوت", silabas:["al|اَلْ", "bas|بَسْ", "koot|كُوت"]},
      intro: "hadha al-kushk. yibee'oon ashya lidheedha!|هذا الكشك. يبيعون أشياء لذيذة!",
      frase: {texto:"baskoot, law samaht.|بسكوت، لو سمحت.", partes:["baskoot,|بسكوت،", "law samaht.|لو سمحت."]},
      respuesta: "tafadhal! bil-'afya!|تفضل! بالعافية!",
      cuento: {
        titulo: "al-baskoot al-msafir|البسكوت المسافر",
        paginas: [
          "fil-kushk chan fi *baskoot 'imlaag*.|في الكشك كان في *بسكوت عملاق*.",
          "«baskoot, law samaht!» talab {N}.|«بسكوت، لو سمحت!» طلب {N}.",
          "bas al-baskoot nagaz w gal: «ana ba'ad abi asafir!»|بس البسكوت نقز وقال: «أنا بعد أبي أسافر!»",
          "fa al-baskoot dakhal *shantat adh-dhahar*, jahiz yteer.|فالبسكوت دخل *شنطة الظهر*، جاهز يطير."
        ]
      }
    },
    T: {
      palabra: {texto:"at-tadhkara|التذكرة", silabas:["at|اَتْ", "tadh|تَذْ", "ka|كَ", "ra|رَة"]},
      intro: "hni nishtiri at-tadhkara 'ashan nsafir bit-tayyara.|هني نشتري التذكرة عشان نسافر بالطيارة.",
      frase: {texto:"tadhkara, law samaht.|تذكرة، لو سمحت.", partes:["tadhkara,|تذكرة،", "law samaht.|لو سمحت."]},
      respuesta: "akeed! tafadhal tadhkartak.|أكيد! تفضل تذكرتك.",
      cuento: {
        titulo: "at-tadhkara adh-dhahabiyya|التذكرة الذهبية",
        paginas: [
          "{N} rah lil-kawntar yishtiri *tadhkara*.|{N} راح للكاونتر يشتري *تذكرة*.",
          "ad-dub 'ata {N} tadhkara safra tilma' wayed.|الدب عطى {N} تذكرة صفرا تلمع وايد.",
          "faj'a habb hawa… w at-tadhkara taarat!|فجأة هب هوا… والتذكرة طارت!",
          "{N} nagaz 'ali wayed w lazamha. wayed mahdhoodh!|{N} نقز عالي وايد ولزمها. وايد محظوظ!"
        ]
      }
    },
    C: {
      palabra: {texto:"ash-shanta|الشنطة", silabas:["ash|اَشْ", "shan|شَنْ", "ta|طَة"]},
      intro: "hni nkhalli ash-shanta. hiya ba'ad tsafir bit-tayyara!|هني نخلي الشنطة. هي بعد تسافر بالطيارة!",
      frase: {texto:"hadhi shantati.|هذي شنطتي.", partes:["hadhi|هذي", "shantati.|شنطتي."]},
      respuesta: "wayed hilwa! ma'a as-salama ya shanta.|وايد حلوة! مع السلامة يا شنطة.",
      cuento: {
        titulo: "ash-shanta elli sharadat|الشنطة اللي شردت",
        paginas: [
          "{N} chan fil-mataar ma'a *shanta hamra* malyana al'ab.|{N} كان في المطار مع *شنطة حمرا* مليانة ألعاب.",
          "bas ash-shanta bidat tidahraj! tidahraj, tidahraj, tidahraj. «intidhri ya shanta!» saah {N}.|بس الشنطة بدت تتدحرج! تتدحرج، تتدحرج، تتدحرج. «انتظري يا شنطة!» صاح {N}.",
          "marrat yamm *al-hammam*. al-gattwa sa'alat: «wain ash-shanta?»|مرت يم *الحمام*. القطوة سألت: «وين الشنطة؟»",
          "rikbat *ad-daraj*. fog, fog!|ركبت *الدرج*. فوق، فوق!",
          "fog chan fi tayyara chibeera wayed galat: «marhaba ya shanta! wagfi!» w ash-shanta wigfat.|فوق كان في طيارة كبيرة وايد قالت: «مرحبا يا شنطة! وقفي!» والشنطة وقفت.",
          "{N} dhamm ash-shanta. «shukran ya tayyara! rihla sa'eeda!»|{N} ضم الشنطة. «شكراً يا طيارة! رحلة سعيدة!»"
        ]
      }
    },
    S: {
      palabra: {texto:"al-jawaz|الجواز", silabas:["al|اَلْ", "ja|جَ", "waaz|وَاز"]},
      intro: "hadha at-taftish. hni nrawweehum al-jawaz.|هذا التفتيش. هني نراويهم الجواز.",
      frase: {texto:"tafadhal jawazi.|تفضل جوازي.", partes:["tafadhal|تفضل", "jawazi.|جوازي."]},
      respuesta: "mumtaz! tigdar t'addi.|ممتاز! تقدر تعدّي.",
      cuento: {
        titulo: "al-jawaz an-na'saan|الجواز النعسان",
        paginas: [
          "fit-taftish, al-chalb talab min {N} *al-jawaz*.|في التفتيش، الكلب طلب من {N} *الجواز*.",
          "{N} dawwar fi shantat adh-dhahar… bas al-jawaz chan nayim!|{N} دوّر في شنطة الظهر… بس الجواز كان نايم!",
          "«gum ya jawaz!» gal {N} b-sowt 'ali.|«قوم يا جواز!» قال {N} بصوت عالي.",
          "al-jawaz fatah 'yoona: «ana hni! tigdar t'addi al-heen!»|الجواز فتح عيونه: «أنا هني! تقدر تعدّي الحين!»"
        ]
      }
    },
    W: {
      palabra: {texto:"at-tayyara|الطيارة", silabas:["at|اَتْ", "tay|طَيْ", "yaa|يَا", "ra|رَة"]},
      intro: "shoof min ad-dirisha al-chibeera! at-tayyar ba'ad hni.|شوف من الدريشة الكبيرة! الطيار بعد هني.",
      frase: {texto:"shoof, tayyara!|شوف، طيارة!", partes:["shoof,|شوف،", "tayyara!|طيارة!"]},
      respuesta: "ee! wayed chibeera!|إي! وايد كبيرة!",
      cuento: {
        titulo: "at-tayyara elli chanat khayfa|الطيارة اللي كانت خايفة",
        paginas: [
          "min ad-dirisha, {N} shaf *tayyara sagheera*.|من الدريشة، {N} شاف *طيارة صغيرة*.",
          "at-tayyara chanat khayfa titeer 'ali chidhi.|الطيارة كانت خايفة تطير عالي جذي.",
          "«tigdareen ya tayyara!» saah {N}.|«تقدرين يا طيارة!» صاح {N}.",
          "at-tayyara rakdhat, w rakdhat… w taarat bain al-ghyoom!|الطيارة ركضت، وركضت… وطارت بين الغيوم!"
        ]
      }
    }
  },
  final: {
    pregunta: "'indak tadhkartak?|عندك تذكرتك؟",
    frase: {texto:"ee! tafadhal tadhkarti.|إي! تفضل تذكرتي.", partes:["ee!|إي!", "tafadhal|تفضل", "tadhkarti.|تذكرتي."]},
    despedida: "rihla sa'eeda!|رحلة سعيدة!",
    chau: "ma'a as-salama ya mataar!|مع السلامة يا مطار!"
  },
  // el microjuego que se abre al terminar el lugar ({n} = cuántas estrellas juntó)
  microjuego: {titulo:"rihlat gaws guzah|رحلة قوس قزح", intro:"harrik at-tayyara fog w taht, w ijma' an-nijoom al-milawwana!|حرّك الطيارة فوق وتحت، واجمع النجوم الملونة!", fin:"jima't {n} nijoom!|جمعت {n} نجوم!"},
  palabrasExtra: [
    {texto:"al-mis'ad|المصعد", silabas:["al|اَلْ", "mis|مِصْ", "'ad|عَد"]},
    {texto:"ad-daraj|الدرج", silabas:["ad|اَدْ", "da|دَ", "raj|رَج"]},
    {texto:"al-bab|الباب", silabas:["al|اَلْ", "baab|بَاب"]},
    {texto:"at-tayyar|الطيار", silabas:["at|اَتْ", "tay|طَيْ", "yaar|يَار"]},
    {texto:"shantat adh-dhahar|شنطة الظهر", silabas:["shan|شَنْ", "tat|طَتْ", "adh|اَظْ", "dha|ظَ", "har|هَر"]}
  ],
  frasesExtra: [
    {texto:"marhaba!|مرحبا!", partes:["marhaba!|مرحبا!"]},
    {texto:"shukran jazeelan!|شكراً جزيلاً!", partes:["shukran|شكراً", "jazeelan!|جزيلاً!"]},
    {texto:"ma'a as-salama!|مع السلامة!", partes:["ma'a as-salama!|مع السلامة!"]},
    {texto:"wain al-bab?|وين الباب؟", partes:["wain|وين", "al-bab?|الباب؟"]},
    {texto:"at-tabig ath-thani, law samaht.|الطابق الثاني، لو سمحت.", partes:["at-tabig ath-thani,|الطابق الثاني،", "law samaht.|لو سمحت."]},
    {texto:"rihla sa'eeda!|رحلة سعيدة!", partes:["rihla|رحلة", "sa'eeda!|سعيدة!"]}
  ],
  preguntas: [
    {p:"shu nakil fil-kushk?|شو ناكل في الكشك؟", r:"al-baskoot! yammi!|البسكوت! يمي!"},
    {p:"shu nrawwi al-chalb fit-taftish?|شو نراوي الكلب في التفتيش؟", r:"al-jawaz!|الجواز!"},
    {p:"wain nhutt al-al'ab 'ashan nsafir?|وين نحط الألعاب عشان نسافر؟", r:"fish-shanta!|في الشنطة!"},
    {p:"shu ygool lana wain kil shay?|شو يقول لنا وين كل شي؟", r:"al-khareeta!|الخريطة!"},
    {p:"shu nihtaj 'ashan nirkab at-tayyara?|شو نحتاج عشان نركب الطيارة؟", r:"at-tadhkara!|التذكرة!"},
    {p:"shu yiwaddeena fog w taht bain at-tawabig?|شو يودّينا فوق وتحت بين الطوابق؟", r:"al-mis'ad!|المصعد!"},
    {p:"shu yilbas at-tayyar 'ala raasa?|شو يلبس الطيار على راسه؟", r:"taagiyat at-tayyar!|طاقية الطيار!"},
    {p:"shu nshil 'ala dhahrna?|شو نشيل على ظهرنا؟", r:"shantat adh-dhahar!|شنطة الظهر!"},
    {p:"shu yteer bain al-ghyoom?|شو يطير بين الغيوم؟", r:"at-tayyara!|الطيارة!"},
    {p:"wain nrooh lamma nibi nsawwi bibi?|وين نروح لما نبي نسوي بيبي؟", r:"lil-hammam!|للحمام!"}
  ],
  objetos: {"#":"al-jidar|الجدار", b:"al-maq'ad|المقعد", p:"az-zar'a|الزرعة", "~":"al-bab|الباب"}
});
