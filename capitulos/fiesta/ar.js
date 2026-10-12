/* =========================================================
   CAPÍTULO 10 · LA FIESTA — textos en árabe del Golfo
   Cada texto: "latino|عربي" (las letras latinas para el grande, la escritura árabe para la voz).
   Cuentos: {N} = nombre del personaje · *palabra* = palabra resaltada (en las dos caras).
   pon() arma el texto con U(): con 3–10 el número va en forma corta + plural (thalath shim'aat).
   ⚠ Para revisar con alguien que hable el árabe del Golfo antes de usarlo con chicos.
   ========================================================= */
(()=>{
const L = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(0,i); };
const A = s => { s=String(s); const i=s.indexOf('|'); return i<0 ? s : s.slice(i+1); };
const U = (...ps) => ps.map(L).join('') + '|' + ps.map(A).join('');
// número escrito → [edad, velas] con la concordancia árabe
const CORTO = {thalatha:"thalath|ثلاث", "arba'a":"arba'|أربع", khamsa:"khams|خمس", sitta:"sitt|ست", "sab'a":"sab'|سبع", thamanya:"thaman|ثمان", "tis'a":"tis'|تسع", "'ashara":"'ashar|عشر"};
const edadVelas = n => {
  const k = L(n);
  if(k==='wahid') return ["sana wahda|سنة وحدة", "shim'a wahda|شمعة وحدة"];
  if(k==='ithnain') return ["sintain|سنتين", "shim'atain|شمعتين"];
  const c = CORTO[k] || n;
  return [U(c, ' snin| سنين'), U(c, " shim'aat| شمعات")];
};
registrarTextos('fiesta', 'ar', {
  titulo: "al-hafla|الحفلة",
  lugar: {texto:"al-hafla|الحفلة", silabas:["al|اَلْ", "haf|حَفْ", "la|لَة"]},
  bienvenida: "al-yom 'eed meeladak!|اليوم عيد ميلادك!",
  niveles: [{nombre:"al-madkhal|المدخل", numTexto:"sifr|صفر"}, {nombre:"as-saala|الصالة", numTexto:"wahid|واحد"}, {nombre:"al-hadeega|الحديقة", numTexto:"ithnain|اثنين"}],
  numeros: ["wahid|واحد", "ithnain|اثنين", "thalatha|ثلاثة", "arba'a|أربعة", "khamsa|خمسة", "sitta|ستة", "sab'a|سبعة", "thamanya|ثمانية", "tis'a|تسعة", "'ashara|عشرة"],
  meses: ["yanayir|يناير", "fabrayir|فبراير", "maris|مارس", "abril|أبريل", "mayo|مايو", "yunyo|يونيو", "yulyo|يوليو", "aghustus|أغسطس", "sibtambar|سبتمبر", "oktobar|أكتوبر", "nofambar|نوفمبر", "disambar|ديسمبر"],
  estaciones: {
    I: {
      palabra: {texto:"ad-da'wa|الدعوة", silabas:["ad|اَدْ", "da'|دَعْ", "wa|وَة"]},
      intro: "al-yom 'eed meeladak! yalla n'azzim rab'ak.|اليوم عيد ميلادك! يلا نعزم ربعك.",
      frase: {texto:"bitiji hafilti?|بتجي حفلتي؟", partes:["bitiji|بتجي", "hafilti?|حفلتي؟"]},
      respuesta: "ee! shukran 'ala ad-da'wa!|إي! شكراً على الدعوة!",
      cuento: {
        titulo: "ad-da'awat|الدعوات",
        paginas: [
          "{N} sawwa *da'wa* l-kil sadeeg.|{N} سوّى *دعوة* لكل صديق.",
          "\"bitijeen hafilti?\" sa'al {N} al-arnooba.|«بتجين حفلتي؟» سأل {N} الأرنوبة.",
          "\"ee! shukran 'ala ad-da'wa!\" al-arnooba nagzat min al-farha.|«إي! شكراً على الدعوة!» الأرنوبة نقزت من الفرحة.",
          "kil ar-rab' bijoon! yaay!|كل الربع بيجون! ياي!"
        ]
      }
    },
    O: {
      palabra: {texto:"al-balloona|البالونة", silabas:["al|اَلْ", "ba|بَا", "loo|لُو", "na|نَة"]},
      intro: "yalla ninfakh al-balloonat!|يلا ننفخ البالونات!",
      frase: {texto:"anfakh al-balloona!|أنفخ البالونة!", partes:["anfakh|أنفخ", "al-balloona!|البالونة!"]},
      respuesta: "fffff… akbar, akbar!|ففففف… أكبر، أكبر!",
      cuento: {
        titulo: "al-balloona al-chibeera|البالونة الكبيرة",
        paginas: [
          "al-chalb as-sagheer jab *balloonat* mlawwana.|الكلب الصغير جاب *بالونات* ملونة.",
          "{N} nafakh: fff, fff!|{N} نفخ: ففف، ففف!",
          "al-balloona kibrat w kibrat… w fag'at! bum!|البالونة كبرت وكبرت… وفقعت! بم!",
          "ha ha! w {N} nafakh wahda thanya, asghar.|هههه! و{N} نفخ وحدة ثانية، أصغر."
        ]
      }
    },
    Z: {
      palabra: {texto:"tagiyyat al-hafla|طاقية الحفلة", silabas:["ta|طَا", "giy|قِيْ", "yat|يَتْ", "al|اَلْ", "haf|حَفْ", "la|لَة"]},
      intro: "lil-hafla, tagiyya!|للحفلة، طاقية!",
      frase: {texto:"albas tagiyyat al-hafla!|ألبس طاقية الحفلة!", partes:["albas|ألبس", "tagiyyat al-hafla!|طاقية الحفلة!"]},
      respuesta: "wayed hilwa 'alaik!|وايد حلوة عليك!",
      cuento: {
        titulo: "tagiyyat al-hafla|طاقية الحفلة",
        paginas: [
          "al-gattwa 'indaha *tagiyyat* hafla.|القطوة عندها *طاقية* حفلة.",
          "at-tagiyya taarat fil-hawa… w taahat 'ala raas {N}!|الطاقية طارت في الهوا… وطاحت على راس {N}!",
          "\"wayed hilwa 'alaik!\" saffagat al-gattwa.|«وايد حلوة عليك!» صفقت القطوة.",
          "w ragsaw bit-tagiyyat!|ورقصوا بالطاقيات!"
        ]
      }
    },
    R: {
      palabra: {texto:"al-hadiyya|الهدية", silabas:["al|اَلْ", "ha|هَ", "diy|دِيْ", "ya|يَة"]},
      intro: "ad-dub as-sagheer jablak hadiyya!|الدب الصغير جابلك هدية!",
      frase: {texto:"shukran 'ala al-hadiyya!|شكراً على الهدية!", partes:["shukran|شكراً", "'ala al-hadiyya!|على الهدية!"]},
      respuesta: "al-'afu! iftahha!|العفو! افتحها!",
      cuento: {
        titulo: "al-mufaj'a|المفاجأة",
        paginas: [
          "ad-dub as-sagheer ja ma'ah *hadiyya* zarga.|الدب الصغير جا معاه *هدية* زرقا.",
          "\"shukran 'ala al-hadiyya!\" gal {N}.|«شكراً على الهدية!» قال {N}.",
          "{N} fat-haha… kanat kora yideeda!|{N} فتحها… كانت كورة جديدة!",
          "\"wayed 'ajbatni!\" w {N} hadhan ad-dub as-sagheer.|«وايد عجبتني!» و{N} حضن الدب الصغير."
        ]
      }
    },
    K: {
      palabra: {texto:"at-taqweem|التقويم", silabas:["at|اَتْ", "taq|تَقْ", "weem|وِيم"]},
      intro: "mita 'eed meeladak? yalla nshoof at-taqweem!|متى عيد ميلادك؟ يلا نشوف التقويم!",
      contar: "yalla ingool shuhoor as-sana! gool wiyyaai.|يلا نقول شهور السنة! قول وياي.",
      frase: {texto:"mita 'eed meeladak?|متى عيد ميلادك؟", partes:["mita|متى", "'eed meeladak?|عيد ميلادك؟"]},
      respuesta: "fi maris! w inta?|في مارس! وانت؟",
      cuento: {
        titulo: "ithna'ash shahar|اثنعش شهر",
        paginas: [
          "al-gattu ar-rumadi kan yshoof *at-taqweem*: fih ithna'ash shahar!|القطو الرمادي كان يشوف *التقويم*: فيه اثنعش شهر!",
          "\"mita 'eed meeladak?\" sa'al {N}.|«متى عيد ميلادك؟» سأل {N}.",
          "yanayir, fabrayir, maris… 'addaw kil ash-shuhoor!|يناير، فبراير، مارس… عدّوا كل الشهور!",
          "kil sana fi 'eed meelad! ya hadhdhna!|كل سنة في عيد ميلاد! يا حظنا!"
        ]
      }
    },
    E: {
      palabra: {texto:"ash-shim'a|الشمعة", silabas:["ash|اَشْ", "shim|شِمْ", "'a|عَة"]},
      intro: "cham shim'a 'ala al-keeka?|كم شمعة على الكيكة؟",
      frase: {texto:"cham 'umrak?|كم عمرك؟", partes:["cham|كم", "'umrak?|عمرك؟"]},
      respuesta: "'umri khams snin! wahid, ithnain, thalatha, arba'a, khamsa.|عمري خمس سنين! واحد، اثنين، ثلاثة، أربعة، خمسة.",
      cuento: {
        titulo: "ash-shim'aat as-sagheera|الشمعات الصغيرة",
        paginas: [
          "al-chalb jab *shim'aat* mlawwana.|الكلب جاب *شمعات* ملونة.",
          "\"cham 'umrak?\" sa'al {N}. al-chalb rafa' ryoolah.|«كم عمرك؟» سأل {N}. الكلب رفع رجوله.",
          "\"arba' shim'aat! wahid, ithnain, thalatha, arba'a,\" 'add {N}.|«أربع شمعات! واحد، اثنين، ثلاثة، أربعة» عدّ {N}.",
          "w ragsaw min al-farha!|ورقصوا من الفرحة!"
        ]
      }
    },
    T: {
      palabra: {texto:"al-keeka|الكيكة", silabas:["al|اَلْ", "kee|كِي", "ka|كَة"]},
      intro: "wislat keekat 'eed al-meelad!|وصلت كيكة عيد الميلاد!",
      frase: {texto:"al-keeka wayed latheetha!|الكيكة وايد لذيذة!", partes:["al-keeka|الكيكة", "wayed latheetha!|وايد لذيذة!"]},
      respuesta: "hiya shokolata w faraawla!|هي شوكولاتة وفراولة!",
      cuento: {
        titulo: "al-keeka|الكيكة",
        paginas: [
          "ad-dub jab *keeka* chibeera wayed.|الدب جاب *كيكة* كبيرة وايد.",
          "\"wow, shu hal keeka!\" gal {N}.|«واو، شو هالكيكة!» قال {N}.",
          "{N} sakkar 'yoonah w tmanna umniya…|{N} سكّر عيونه وتمنى أمنية…",
          "w kalaw keeka kilhum ma'a ba'adh!|وكلوا كيكة كلهم مع بعض!"
        ]
      }
    }
  },
  final: {
    pregunta: "mufaj'a! kil rab'ak jaw!|مفاجأة! كل ربعك جوا!",
    frase: {texto:"shukran, ya rab'i!|شكراً، يا ربعي!", partes:["shukran,|شكراً،", "ya rab'i!|يا ربعي!"]},
    cancion: ["sana hilwa ya jameel!|سنة حلوة يا جميل!", "sana hilwa ya jameel!|سنة حلوة يا جميل!", "sana hilwa ya {N}!|سنة حلوة يا {N}!", "sana hilwa ya jameel!|سنة حلوة يا جميل!"],
    despedida: "'eed meelad sa'eed!|عيد ميلاد سعيد!",
    chau: "hip, hip, hurray!|هيب، هيب، هوراي!",
    lograste: "sawwaitha! shu hal hafla al-hilwa!|سويتها! شو هالحفلة الحلوة!",
    todos: "'indak kil al-akhtam! dawwir al-bab al-akhdhar: fi mufaj'a!|عندك كل الأختام! دوّر الباب الأخضر: في مفاجأة!",
    ppFinal: "ijma' kil al-akhtam, ba'dain yalla ndawwir al-mufaj'a!|اجمع كل الأختام، بعدين يلا ندوّر المفاجأة!",
    otraVez: "hafla thanya! ijma' al-akhtam marra thanya.|حفلة ثانية! اجمع الأختام مرة ثانية.",
    otraVezB: "hafla thanya|حفلة ثانية"
  },
  // el microjuego: pon recibe el número ya escrito ("thalatha|ثلاثة")
  microjuego: {
    musica: "al-heen i'zif sana hilwa! ilmis al-keeka, nota nota.|الحين اعزف سنة حلوة! المس الكيكة، نوتة نوتة.", musicaTodo: "al-ughniya kilha|الأغنية كلها", lento: "shwai shwai|شوي شوي", rapido: "bsur'a|بسرعة", grave: "sowt takheen|صوت تخين", agudo: "sowt rafee'|صوت رفيع", linda: "'azaft wayed hilu!|عزفت وايد حلو!", instr: {piano:"al-biyano|البيانو", xilofon:"al-ziylofon|الزيلوفون", robot:"ar-robot|الروبوت", trompeta:"al-booq|البوق"},
    titulo: "cham shim'a?|كم شمعة؟",
    intro: "sadeeg 'indah 'eed meelad. isma' cham 'umrah, w hutt ash-shim'aat.|صديق عنده عيد ميلاد. اسمع كم عمره، وحط الشمعات.",
    fin: "taffait {n} shim'a!|طفّيت {n} شمعة!",
    pon: n => { const [e, v] = edadVelas(n); return U("'umrah |عمره ", e, "! hutt |! حط ", v, ".|."); },
    vela: "ash-shim'a|الشمعة",
    soplar: "al-heen, infakh!|الحين، انفخ!",
    soplarB: "infakh!|انفخ!",
    feliz: "'eed meelad sa'eed!|عيد ميلاد سعيد!"
  },
  palabrasExtra: [
    {texto:"al-binyata|البنياتا", silabas:["al|اَلْ", "bin|بِنْ", "ya|يَا", "ta|تَا"]},
    {texto:"al-halawa|الحلاوة", silabas:["al|اَلْ", "ha|حَ", "la|لَا", "wa|وَة"]},
    {texto:"al-'aseer|العصير", silabas:["al|اَلْ", "'a|عَ", "seer|صِير"]}
  ],
  frasesExtra: [
    {texto:"'eed meelad sa'eed!|عيد ميلاد سعيد!", partes:["'eed meelad|عيد ميلاد", "sa'eed!|سعيد!"]},
    {texto:"tmanna umniya!|تمنى أمنية!", partes:["tmanna|تمنى", "umniya!|أمنية!"]},
    {texto:"cham 'umrak al-yom?|كم عمرك اليوم؟", partes:["cham 'umrak|كم عمرك", "al-yom?|اليوم؟"]},
    {texto:"hala fikum fi hafilti!|هلا فيكم في حفلتي!", partes:["hala fikum|هلا فيكم", "fi hafilti!|في حفلتي!"]},
    {texto:"yalla ntaffi ash-shim'aat!|يلا نطفي الشمعات!", partes:["yalla ntaffi|يلا نطفي", "ash-shim'aat!|الشمعات!"]}
  ],
  preguntas: [
    {p:"shu illi fih fyonga w mufaj'a dakhil?|شو اللي فيه فيونكة ومفاجأة داخل؟", r:"al-hadiyya!|الهدية!"},
    {p:"shu nakil fi 'eed al-meelad?|شو ناكل في عيد الميلاد؟", r:"al-keeka!|الكيكة!"},
    {p:"shu ninfakh lil-hafla?|شو ننفخ للحفلة؟", r:"al-balloonat!|البالونات!"},
    {p:"shu ntaffi 'ala al-keeka?|شو نطفي على الكيكة؟", r:"ash-shim'aat!|الشمعات!"},
    {p:"shu nilbas 'ala raasna?|شو نلبس على راسنا؟", r:"tagiyyat al-hafla!|طاقية الحفلة!"},
    {p:"shu n'ati ar-rab' 'ashan yjoon?|شو نعطي الربع عشان يجون؟", r:"ad-da'wa!|الدعوة!"},
    {p:"wain ash-shuhoor?|وين الشهور؟", r:"fit-taqweem!|في التقويم!"},
    {p:"shu nkassir 'ashan titeeh al-halawa?|شو نكسر عشان تطيح الحلاوة؟", r:"al-binyata!|البنياتا!"},
    {p:"shu yteeh min al-binyata?|شو يطيح من البنياتا؟", r:"halawa!|حلاوة!"},
    {p:"wain nishrab al-'aseer?|وين نشرب العصير؟", r:"fil-kas!|في الكاس!"}
  ],
  objetos: {"#":"al-jidar|الجدار", o:"al-balloonat|البالونات", m:"at-tawla|الطاولة", f:"al-ward|الورد", r:"ash-shajara|الشجرة", s:"al-kanaba|الكنبة", "~":"al-bab|الباب"}
});
})();
