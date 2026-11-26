/**
 * Varāhamihira's Bṛhat Jātaka — Bilingual Data Part 2 (Chapters VII – XV)
 * Source: Pandita Bhushana V. Subrahmanya Sastri (2nd Ed., 1996)
 */

const BJ_AYURDAYA_DATA = {
  pindaMax: {
    sun: { name: "Sun", te: "రవి", max: 19, exaltDeg: 10 },
    moon: { name: "Moon", te: "చంద్రుడు", max: 25, exaltDeg: 33 },
    mars: { name: "Mars", te: "కుజుడు", max: 15, exaltDeg: 298 },
    mercury: { name: "Mercury", te: "బుధుడు", max: 12, exaltDeg: 165 },
    jupiter: { name: "Jupiter", te: "గురువు", max: 15, exaltDeg: 95 },
    venus: { name: "Venus", te: "శుక్రుడు", max: 21, exaltDeg: 357 },
    saturn: { name: "Saturn", te: "శని", max: 20, exaltDeg: 200 }
  },
  paramayus: [
    { speciesEn: "Men & Elephants", speciesTe: "మనుష్యులు & ఏనుగులు", years: "120 Years, 5 Days", te: "120 సం. 5 రోజులు" },
    { speciesEn: "Horses", speciesTe: "గుర్రాలు", years: "32 Years", te: "32 సంవత్సరాలు" },
    { speciesEn: "Asses & Camels", speciesTe: "గాడిదలు & ఒంటెలు", years: "25 Years", te: "25 సంవత్సరాలు" },
    { speciesEn: "Bulls & Buffaloes", speciesTe: "ఎద్దులు & గేదెలు", years: "24 Years", te: "24 సంవత్సరాలు" },
    { speciesEn: "Sheep & Goats", speciesTe: "గొర్రెలు మొదలైనవి", years: "16 Years", te: "16 సంవత్సరాలు" },
    { speciesEn: "Dogs", speciesTe: "కుక్కలు", years: "12 Years", te: "12 సంవత్సరాలు" }
  ],
  chakrapata: [
    { house: 12, mal: "Full (1/1)", malVal: 1, ben: "1/2", benVal: 0.5 },
    { house: 11, mal: "1/2", malVal: 1/2, ben: "1/4", benVal: 1/4 },
    { house: 10, mal: "1/3", malVal: 1/3, ben: "1/6", benVal: 1/6 },
    { house: 9, mal: "1/4", malVal: 1/4, ben: "1/8", benVal: 1/8 },
    { house: 8, mal: "1/5", malVal: 1/5, ben: "1/10", benVal: 1/10 },
    { house: 7, mal: "1/6", malVal: 1/6, ben: "1/12", benVal: 1/12 }
  ]
};

const BJ_NAISARGIKA_DASAS = [
  { planet: "Moon", te: "చంద్రుడు", years: 1 },
  { planet: "Mars", te: "కుజుడు", years: 2 },
  { planet: "Mercury", te: "బుధుడు", years: 9 },
  { planet: "Venus", te: "శుక్రుడు", years: 20 },
  { planet: "Jupiter", te: "గురువు", years: 18 },
  { planet: "Sun", te: "రవి", years: 20 },
  { planet: "Saturn", te: "శని", years: 50 }
];

const BJ_DASA_QUALITIES = [
  { name: "Sampūrṇā (సంపూర్ణ)", en: "Planet in full strength or exaltation → full auspicious results.", te: "పూర్ణబలం లేదా ఉచ్ఛస్థితి → సంపూర్ణ శుభఫలితాలు." },
  { name: "Riktā (రిక్త)", en: "Devoid of strength → empty / fruitless.", te: "బలహీనత → శూన్య ఫలితాలు." },
  { name: "Aniṣṭaphalā (అనిష్టఫల)", en: "In depression or inimical Navāṁśa → untoward effects.", te: "నీచ లేదా శత్రు నవాంశ → అనిష్ట ఫలితాలు." },
  { name: "Avarohiṇī (అవరోహిణి)", en: "Descending / fallen from exaltation → diminishing.", te: "ఉచ్ఛ నుండి దిగుతున్న స్థితి → తగ్గుతున్న ఫలాలు." },
  { name: "Madhyā (మధ్య)", en: "While descending, placed in a friend's or exaltation house → middling.", te: "దిగుతూ మిత్ర/ఉచ్ఛ క్షేత్రంలో → మధ్యమ ఫలాలు." },
  { name: "Ārohiṇī (ఆరోహిణి)", en: "Proceeding upward from depression → rising.", te: "నీచ నుండి పైకి వెళ్తున్న స్థితి → పెరుగుతున్న ఫలాలు." },
  { name: "Adhamā (అధమ)", en: "Actually in depression sign/Aṁśa or inimical Rāśi/Aṁśa → worst.", te: "నీచ రాశి/అంశ లేదా శత్రు రాశి/అంశ → అధమ ఫలాలు." },
  { name: "Miśraphalā (మిశ్రఫల)", en: "Auspicious sign (exaltation, Mūlatrikoṇa, own, friend) + depression/enemy Navāṁśa → mixed.", te: "శుభరాశి + నీచ/శత్రు నవాంశ → మిశ్ర ఫలితాలు." }
];

// Chapter IX, Slokas 1-7 exact benefic houses (1-indexed relative to each contributor)
const BJ_ASHTAKAVARGA_RULES = {
  sun: {
    nameEn: "Sun (Sūrya)", nameTe: "రవి అష్టకవర్గ", expectedTotal: 48,
    from: {
      sun: [1,2,4,7,8,9,10,11],
      moon: [3,6,10,11],
      mars: [1,2,4,7,8,9,10,11],
      mercury: [3,5,6,9,10,11,12],
      jupiter: [5,6,9,11],
      venus: [6,7,12],
      saturn: [1,2,4,7,8,9,10,11],
      lagna: [3,4,6,10,11,12]
    }
  },
  moon: {
    nameEn: "Moon (Candra)", nameTe: "చంద్ర అష్టకవర్గ", expectedTotal: 48,
    from: {
      sun: [3,6,7,8,10,11],
      moon: [1,3,5,7,10,11],
      mars: [2,3,5,6,9,10,11],
      mercury: [1,3,4,5,7,8,10,11],
      jupiter: [1,4,7,8,10,11,12],
      venus: [3,4,7,9,10,11],
      saturn: [3,5,6,11],
      lagna: [3,6,10,11]
    }
  },
  mars: {
    nameEn: "Mars (Kuja)", nameTe: "కుజ అష్టకవర్గ", expectedTotal: 39,
    noteEn: "Ch. IX Sl. 3: The 10th house from the Moon is effectless (neither benefic nor malefic).",
    noteTe: "అధ్యా. 9 శ్లో. 3: చంద్రుని నుండి 10వ స్థానం నిష్ఫలము (శుభమూ కాదు, అశుభమూ కాదు).",
    from: {
      sun: [3,5,6,10,11],
      moon: [3,6,11],
      mars: [1,2,4,7,8,10,11],
      mercury: [3,5,6,11],
      jupiter: [6,10,11,12],
      venus: [6,8,11,12],
      saturn: [1,4,7,8,9,10,11],
      lagna: [1,3,6,10,11]
    }
  },
  mercury: {
    nameEn: "Mercury (Budha)", nameTe: "బుధ అష్టకవర్గ", expectedTotal: 54,
    from: {
      sun: [5,6,9,11,12],
      moon: [2,4,6,8,10,11],
      mars: [1,2,4,7,8,9,10,11],
      mercury: [1,3,5,6,9,10,11,12],
      jupiter: [6,8,11,12],
      venus: [1,2,3,4,5,8,9,11],
      saturn: [1,2,4,7,8,9,10,11],
      lagna: [1,2,4,6,8,10,11]
    }
  },
  jupiter: {
    nameEn: "Jupiter (Guru)", nameTe: "గురు అష్టకవర్గ", expectedTotal: 56,
    from: {
      sun: [1,2,3,4,7,8,9,10,11],
      moon: [2,5,7,9,11],
      mars: [1,2,4,7,8,10,11],
      mercury: [1,2,4,5,6,9,10,11],
      jupiter: [1,2,3,4,7,8,10,11],
      venus: [2,5,6,9,10,11],
      saturn: [3,5,6,12],
      lagna: [1,2,4,5,6,7,9,10,11]
    }
  },
  venus: {
    nameEn: "Venus (Śukra)", nameTe: "శుక్ర అష్టకవర్గ", expectedTotal: 52,
    from: {
      sun: [8,11,12],
      moon: [1,2,3,4,5,8,9,11,12],
      mars: [3,5,6,9,11,12],
      mercury: [3,5,6,9,11],
      jupiter: [5,8,9,10,11],
      venus: [1,2,3,4,5,8,9,10,11],
      saturn: [3,4,5,8,9,10,11],
      lagna: [1,2,3,4,5,8,9,11]
    }
  },
  saturn: {
    nameEn: "Saturn (Śani)", nameTe: "శని అష్టకవర్గ", expectedTotal: 39,
    from: {
      sun: [1,2,4,7,8,10,11],
      moon: [3,6,11],
      mars: [3,5,6,10,11,12],
      mercury: [6,8,9,10,11,12],
      jupiter: [5,6,11,12],
      venus: [6,11,12],
      saturn: [3,5,6,11],
      lagna: [1,3,4,6,10,11]
    }
  }
};

const BJ_KARMAJIVA = [
  { planet: "Sun", te: "రవి", src10En: "Father", src10Te: "తండ్రి", navEn: "Grass, gold, wool, medicine", navTe: "గడ్డి, బంగారం, ఉన్ని, ఔషధాలు" },
  { planet: "Moon", te: "చంద్రుడు", src10En: "Mother", src10Te: "తల్లి", navEn: "Agriculture, water products (pearls, conch, fish), women", navTe: "వ్యవసాయం, జల ఉత్పత్తులు (ముత్యాలు, శంఖాలు, చేపలు), స్త్రీలు" },
  { planet: "Mars", te: "కుజుడు", src10En: "Foe / Enemy", src10Te: "శత్రువు", navEn: "Metallurgy, violent/martial acts, fire/weapons", navTe: "లోహ పరిశ్రమ, సాహస/యుద్ధ కృత్యాలు, అగ్ని/ఆయుధాలు" },
  { planet: "Mercury", te: "బుధుడు", src10En: "Friend", src10Te: "మిత్రుడు", navEn: "Writer, mathematics, poetry, fine arts", navTe: "లేఖనం, గణితం, కవిత్వం, కళలు" },
  { planet: "Jupiter", te: "గురువు", src10En: "Brother", src10Te: "సోదరుడు", navEn: "Brāhmaṇas, deities, learned men, mines, religious acts", navTe: "బ్రాహ్మణులు, దేవతార్చన, పండితులు, గనులు, ధార్మిక కార్యాలు" },
  { planet: "Venus", te: "శుక్రుడు", src10En: "Wife", src10Te: "భార్య", navEn: "Rubies, silver, rearing cows and buffaloes", navTe: "మాణిక్యాలు, వెండి, గో-మహిష పాలన" },
  { planet: "Saturn", te: "శని", src10En: "Servant / Inferior", src10Te: "సేవకుడు", navEn: "Wearisome labour, executing punishments, bearing burdens, vile pursuits", navTe: "కష్టమైన శ్రమ, దండన, బరువులు మోయడం, నీచ వృత్తులు" }
];

const BJ_RAJAYOGAS_VM = [
  { sl: "11.13", titleEn: "Trine Exaltation / Own Sign", titleTe: "త్రికోణ ఉచ్ఛ/స్వక్షేత్ర రాజయోగం", descEn: "3+ planets in exaltation or own signs and trine to one another → king if of royal family; 5+ such planets → king even if born in an ordinary family; <5 (non-royal) → wealthy.", descTe: "3+ గ్రహాలు ఉచ్ఛ/స్వక్షేత్రాలలో పరస్పర త్రికోణంలో ఉంటే రాజవంశీయుడు రాజు అవుతాడు; 5+ గ్రహాలైతే సామాన్య వంశంలో పుట్టినా రాజు అవుతాడు." },
  { sl: "11.14", titleEn: "Meṣa Lagna Sun-Moon", titleTe: "మేష లగ్న రవి-చంద్ర యోగం", descEn: "Aries Lagna with Sun rising & Moon in it, Mars exalted (Capricorn), Saturn in Aquarius, Jupiter in Sagittarius → king if a prince.", descTe: "మేష లగ్నంలో రవి-చంద్రులు, మకరంలో కుజుడు, కుంభంలో శని, ధనుస్సులో గురువు ఉంటే రాజవంశీయుడు రాజు అవుతాడు." },
  { sl: "11.15", titleEn: "Venus in 4th Own Sign", titleTe: "చతుర్థ స్వక్షేత్ర శుక్ర యోగం", descEn: "Venus in 4th in own sign, Moon in 9th, other planets in 3rd, 1st, and 11th → king.", descTe: "4లో స్వక్షేత్ర శుక్రుడు, 9లో చంద్రుడు, ఇతర గ్రహాలు 3, 1, 11 స్థానాలలో ఉంటే రాజు." },
  { sl: "11.16", titleEn: "Strong Benefics in 1st & 4th", titleTe: "1, 4లో బలమైన శుభులు", descEn: "Strong benefic in Lagna, another in 4th, others in 9, 2, 3, 6, 10, 11 → virtuous king (royal family).", descTe: "లగ్న-చతుర్థాలలో బలమైన శుభులు, మిగిలినవి 9, 2, 3, 6, 10, 11లో ఉంటే ధార్మిక రాజు." },
  { sl: "11.17", titleEn: "Taurus / Capricorn Patterns", titleTe: "వృషభ / మకర యోగాలు", descEn: "(a) Moon in Taurus Lagna, Jupiter 2nd, Saturn 6th, others 11th → king. (b) Jupiter 4th, Sun & Moon 10th, Saturn 1st, others 11th → king.", descTe: "(అ) వృషభ లగ్నంలో చంద్రుడు, 2లో గురువు, 6లో శని, 11లో ఇతరులు. (ఆ) 4లో గురువు, 10లో రవి-చంద్రులు, 1లో శని, 11లో ఇతరులు." },
  { sl: "11.18", titleEn: "Kendra-11th Arrangements", titleTe: "కేంద్ర-లాభ యోగాలు", descEn: "(a) Moon 10th, Saturn 11th, Jupiter 1st, Merc+Mars 2nd, Ven+Sun 4th → king. (b) Mars+Sat 1st, Moon 4th, Jup 7th, Ven 9th, Sun 10th, Merc 11th → king.", descTe: "(అ) 10లో చంద్ర, 11లో శని, 1లో గురు, 2లో బుధ-కుజ, 4లో శుక్ర-రవి. (ఆ) 1లో కుజ-శని, 4లో చంద్ర, 7లో గురు, 9లో శుక్ర, 10లో రవి, 11లో బుధుడు." },
  { sl: "11.19", titleEn: "Timing of Kingdom & Loss", titleTe: "రాజ్య ప్రాప్తి & నాశ కాలం", descEn: "Acquisition: Dasa/Antardasa of strongest planet in 10th or Lagna (else strongest in chart). Loss/Abdication: Dasa of planet in enemy or depression sign.", descTe: "రాజ్యప్రాప్తి: 10వ లేదా 1వ స్థానంలోని బలమైన గ్రహ దశ/అంతర్దశలో. పదవీచ్యుతి: శత్రు లేదా నీచ గ్రహ దశలో." },
  { sl: "11.20", titleEn: "Bhogin & Thief-Leader", titleTe: "భోగి & దొంగల నాయకుడు", descEn: "Jup+Ven+Merc in 1st, Sat 7th, Sun 10th → Bhogin (spendthrift, not king). Benefic Kendras strong + malefics in malefic signs → wealthy leader of hunters/thieves.", descTe: "1లో గురు-శుక్ర-బుధ, 7లో శని, 10లో రవి → భోగి. బలమైన శుభకేంద్రాలు + పాపరాశులలో పాపులు → ధనవంతుడైన వేటగాళ్ళ/దొంగల నాయకుడు." }
];

// Chapter XII: All 32 Nabhasa Yogas
const BJ_NABHASA_YOGAS = [
  // 3 Asraya
  { id: "rajju", cat: "Asraya", catTe: "ఆశ్రయ", name: "Rajju (రజ్జు)", houses: [1,4,7,10], defEn: "All 7 planets in movable (Chara) signs (1,4,7,10).", defTe: "7 గ్రహాలూ చర రాశులలో ఉండుట.", effEn: "Envious, delights in foreign lands, fond of travel.", effTe: "ఈర్ష్య కలవాడు, విదేశ సంచార ప్రియుడు." },
  { id: "musala", cat: "Asraya", catTe: "ఆశ్రయ", name: "Musala (ముసల)", houses: [2,5,8,11], defEn: "All 7 planets in fixed (Sthira) signs (2,5,8,11).", defTe: "7 గ్రహాలూ స్థిర రాశులలో ఉండుట.", effEn: "Proud, wealthy, engaged in many works.", effTe: "అభిమానం, ధనవంతుడు, అనేక పనులు చేయువాడు." },
  { id: "nala", cat: "Asraya", catTe: "ఆశ్రయ", name: "Nala (నల)", houses: [3,6,9,12], defEn: "All 7 planets in dual (Ubhaya) signs (3,6,9,12).", defTe: "7 గ్రహాలూ ద్విస్వభావ రాశులలో ఉండుట.", effEn: "Defective in some limb, resolute, shrewd.", effTe: "అంగవైకల్యం, దృఢనిశ్చయం, నేర్పరి." },
  // 2 Dala
  { id: "srak", cat: "Dala", catTe: "దళ", name: "Srāk / Mālā (స్రాక్ / మాల)", houses: [1,4,7,10], defEn: "Kendras exclusively occupied by benefics (Merc, Jup, Ven).", defTe: "కేంద్రాలలో కేవలం శుభగ్రహాలు మాత్రమే ఉండుట.", effEn: "Many enjoyments and pleasures.", effTe: "అనేక భోగభాగ్యములు కలవాడు." },
  { id: "sarpa", cat: "Dala", catTe: "దళ", name: "Sarpa (సర్ప)", houses: [1,4,7,10], defEn: "Kendras exclusively occupied by malefics (Sun, Mars, Sat).", defTe: "కేంద్రాలలో కేవలం పాపగ్రహాలు మాత్రమే ఉండుట.", effEn: "Suffers many miseries.", effTe: "అనేక కష్టములు అనుభవించువాడు." },
  // 20 Akriti
  { id: "gada", cat: "Akriti", catTe: "ఆకృతి", name: "Gadā (గదా)", houses: [1,4], defEn: "All 7 planets in two adjacent Kendras (1&4, 4&7, 7&10, or 10&1).", defTe: "రెండు పక్కపక్క కేంద్రాలలో అన్ని గ్రహాలు.", effEn: "Performs sacrifices, acquires wealth, ever hankers after wealth.", effTe: "యజ్ఞాలు చేయువాడు, ధనవంతుడు, ధనాపేక్ష కలవాడు." },
  { id: "sakata", cat: "Akriti", catTe: "ఆకృతి", name: "Śakaṭa (శకట)", houses: [1,7], defEn: "All 7 planets in 1st and 7th houses.", defTe: "1, 7 స్థానాలలో అన్ని గ్రహాలు.", effEn: "Drives a cart for livelihood, sickly, bad wife.", effTe: "బండి నడిపి జీవించువాడు, రోగిష్ఠి, దుష్టభార్య." },
  { id: "paksin", cat: "Akriti", catTe: "ఆకృతి", name: "Pakṣin / Vihaga (పక్షి / విహగ)", houses: [4,10], defEn: "All 7 planets in 4th and 10th houses.", defTe: "4, 10 స్థానాలలో అన్ని గ్రహాలు.", effEn: "Message-bearer, vagrant habits, quarrelsome.", effTe: "దూత, సంచారి, కలహప్రియుడు." },
  { id: "sringataka", cat: "Akriti", catTe: "ఆకృతి", name: "Śṛṅgāṭaka (శృంగాటక)", houses: [1,5,9], defEn: "All 7 planets in 1st, 5th, and 9th houses.", defTe: "1, 5, 9 స్థానాలలో అన్ని గ్రహాలు.", effEn: "Happy in latter days (Cira-sukhī).", effTe: "చిరకాలం సుఖవంతుడు (ఉత్తరార్థ జీవితం సుఖమయం)." },
  { id: "hala", cat: "Akriti", catTe: "ఆకృతి", name: "Hala (హల)", houses: [2,6,10], defEn: "All 7 planets in trines without Lagna (2-6-10, 3-7-11, or 4-8-12).", defTe: "లగ్నం లేని త్రికోణాలలో (2-6-10, 3-7-11, 4-8-12) అన్ని గ్రహాలు.", effEn: "Engaged in agriculture.", effTe: "వ్యవసాయదారుడు." },
  { id: "vajra", cat: "Akriti", catTe: "ఆకృతి", name: "Vajra (వజ్ర)", houses: [1,4,7,10], defEn: "All benefics in 1st & 7th; all malefics in 4th & 10th.", defTe: "1, 7లో శుభులు; 4, 10లో పాపులు.", effEn: "Happy in early and late life, lovely, very brave.", effTe: "ఆది, అంత్యాలలో సుఖం, అందగాడు, శూరుడు." },
  { id: "yava", cat: "Akriti", catTe: "ఆకృతి", name: "Yava (యవ)", houses: [1,4,7,10], defEn: "All malefics in 1st & 7th; all benefics in 4th & 10th.", defTe: "1, 7లో పాపులు; 4, 10లో శుభులు.", effEn: "Valiant, happy in middle life.", effTe: "పరాక్రమవంతుడు, మధ్య వయసులో సుఖం." },
  { id: "kamala", cat: "Akriti", catTe: "ఆకృతి", name: "Kamala (కమల)", houses: [1,4,7,10], defEn: "Benefics and malefics ranged promiscuously in all 4 Kendras.", defTe: "4 కేంద్రాలలో శుభ-పాప గ్రహాలు కలిసి ఉండుట.", effEn: "Wide fame, immense enjoyment, numerous virtues.", effTe: "విస్తృత కీర్తి, అపార భోగభాగ్యాలు, సద్గుణాలు." },
  { id: "vapi", cat: "Akriti", catTe: "ఆకృతి", name: "Vāpī (వాపీ)", houses: [2,5,8,11], defEn: "All 7 planets in 4 succedent (2,5,8,11) OR 4 cadent (3,6,9,12) houses.", defTe: "4 పణఫర (2,5,8,11) లేదా 4 ఆపోక్లిమ (3,6,9,12) స్థానాలలో అన్ని గ్రహాలు.", effEn: "Long-enduring small comforts, hoards money underground, miserly.", effTe: "చిరకాల సుఖం, భూమిలో ధనం దాచువాడు, లోభి." },
  { id: "yupa", cat: "Akriti", catTe: "ఆకృతి", name: "Yūpa (యూప)", houses: [1,2,3,4], defEn: "All 7 planets in 4 contiguous houses from 1st (1–4).", defTe: "1 నుండి 4 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Liberal, self-possessed, performs eminent sacrifices.", effTe: "దాత, నిగ్రహం కలవాడు, యజ్ఞకర్త." },
  { id: "ishu", cat: "Akriti", catTe: "ఆకృతి", name: "Iṣu / Śara (ఇషు / శర)", houses: [4,5,6,7], defEn: "All 7 planets in 4 contiguous houses from 4th (4–7).", defTe: "4 నుండి 7 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Cruel, prison-keeper, arrow-maker.", effTe: "క్రూరుడు, కారాగృహాధికారి, బాణములు చేయువాడు." },
  { id: "sakti", cat: "Akriti", catTe: "ఆకృతి", name: "Śakti (శక్తి)", houses: [7,8,9,10], defEn: "All 7 planets in 4 contiguous houses from 7th (7–10).", defTe: "7 నుండి 10 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Base, slothful, bereft of ease and wealth.", effTe: "నీచుడు, సోమరి, సుఖ-ధన హీనుడు." },
  { id: "danda", cat: "Akriti", catTe: "ఆకృతి", name: "Daṇḍa (దండ)", houses: [10,11,12,1], defEn: "All 7 planets in 4 contiguous houses from 10th (10–1).", defTe: "10 నుండి 1 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Life of servitude, bereft of wife and children.", effTe: "దాస్యవృత్తి, భార్యాబిడ్డలు లేనివాడు." },
  { id: "nau", cat: "Akriti", catTe: "ఆకృతి", name: "Nau (నౌ)", houses: [1,2,3,4,5,6,7], defEn: "All 7 planets in 7 contiguous houses from 1st (1–7).", defTe: "1 నుండి 7 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Famous, occasional happiness, miserly.", effTe: "కీర్తిమంతుడు, అప్పుడప్పుడు సుఖం, లోభి." },
  { id: "kuta", cat: "Akriti", catTe: "ఆకృతి", name: "Kūṭa (కూట)", houses: [4,5,6,7,8,9,10], defEn: "All 7 planets in 7 contiguous houses from 4th (4–10).", defTe: "4 నుండి 10 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Untruthful, jailor.", effTe: "అసత్యవాది, కారాగృహ రక్షకుడు." },
  { id: "chatra", cat: "Akriti", catTe: "ఆకృతి", name: "Chatra (ఛత్ర)", houses: [7,8,9,10,11,12,1], defEn: "All 7 planets in 7 contiguous houses from 7th (7–1).", defTe: "7 నుండి 1 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Makes relatives happy, happy at end of life.", effTe: "బంధువులను సుఖపెట్టువాడు, అంత్యకాల సుఖం." },
  { id: "chapa", cat: "Akriti", catTe: "ఆకృతి", name: "Cāpa / Kārmuka (చాప / కార్ముక)", houses: [10,11,12,1,2,3,4], defEn: "All 7 planets in 7 contiguous houses from 10th (10–4).", defTe: "10 నుండి 4 వరుస స్థానాలలో అన్ని గ్రహాలు.", effEn: "Brave, happy in beginning and end of life.", effTe: "శూరుడు, ఆది-అంత్యాలలో సుఖవంతుడు." },
  { id: "ardhachandra", cat: "Akriti", catTe: "ఆకృతి", name: "Ardha-Candra (అర్ధచంద్ర)", houses: [2,3,4,5,6,7,8], defEn: "All 7 planets in 7 contiguous houses from any Paṇaphara or Āpoklima.", defTe: "పణఫర లేదా ఆపోక్లిమ స్థానం నుండి 7 వరుస స్థానాలలో గ్రహాలు.", effEn: "Beautiful appearance, chief among his class.", effTe: "సుందర రూపం, తన వర్గంలో నాయకుడు." },
  { id: "samudra", cat: "Akriti", catTe: "ఆకృతి", name: "Samudra (సముద్ర)", houses: [2,4,6,8,10,12], defEn: "All 7 planets in the 6 even bhāvas (2,4,6,8,10,12).", defTe: "2, 4, 6, 8, 10, 12 సమ స్థానాలలో అన్ని గ్రహాలు.", effEn: "Equal to a king, voluptuary.", effTe: "రాజసమానుడు, భోగప్రియుడు." },
  { id: "chakra", cat: "Akriti", catTe: "ఆకృతి", name: "Cakra (చక్ర)", houses: [1,3,5,7,9,11], defEn: "All 7 planets in the 6 odd bhāvas (1,3,5,7,9,11).", defTe: "1, 3, 5, 7, 9, 11 బేసి స్థానాలలో అన్ని గ్రహాలు.", effEn: "Emperor.", effTe: "చక్రవర్తి." },
  // 7 Sankhya
  { id: "vallaki", cat: "Sankhya", catTe: "సంఖ్యా", name: "Vallakī / Vīṇā (వల్లకీ / వీణా)", houses: [1,2,3,4,5,6,7], defEn: "All 7 planets in 7 different Rāśis (when Ākṛti absent).", defTe: "7 వేర్వేరు రాశులలో 7 గ్రహాలు.", effEn: "Skilled in every work, fond of music and dancing.", effTe: "సర్వకార్య దక్షుడు, సంగీత-నాట్య ప్రియుడు." },
  { id: "dama", cat: "Sankhya", catTe: "సంఖ్యా", name: "Dāma (దామ)", houses: [1,2,3,4,5,6], defEn: "All 7 planets in 6 Rāśis.", defTe: "6 రాశులలో 7 గ్రహాలు.", effEn: "Liberal in gifts, helps others, protects cattle.", effTe: "దాత, పరోపకారి, పశుపాలకుడు." },
  { id: "pasa", cat: "Sankhya", catTe: "సంఖ్యా", name: "Pāśa (పాశ)", houses: [1,2,3,4,5], defEn: "All 7 planets in 5 Rāśis.", defTe: "5 రాశులలో 7 గ్రహాలు.", effEn: "Clever in acquiring wealth, surrounded by servants & relations.", effTe: "ధనార్జనలో నేర్పరి, బంధు-భృత్య యుక్తుడు." },
  { id: "kedara", cat: "Sankhya", catTe: "సంఖ్యా", name: "Kedāra (కేదార)", houses: [1,2,3,4], defEn: "All 7 planets in 4 Rāśis.", defTe: "4 రాశులలో 7 గ్రహాలు.", effEn: "Pursues agriculture, helpful to many.", effTe: "వ్యవసాయదారుడు, అనేక మందికి ఉపకారి." },
  { id: "sula", cat: "Sankhya", catTe: "సంఖ్యా", name: "Śūla (శూల)", houses: [1,2,3], defEn: "All 7 planets in 3 Rāśis.", defTe: "3 రాశులలో 7 గ్రహాలు.", effEn: "Brave with battle scars, fond of money, without wealth.", effTe: "యుద్ధగాయాలతో శూరుడు, ధనాపేక్ష గల నిర్ధనుడు." },
  { id: "yuga", cat: "Sankhya", catTe: "సంఖ్యా", name: "Yuga (యుగ)", houses: [1,2], defEn: "All 7 planets in 2 Rāśis.", defTe: "2 రాశులలో 7 గ్రహాలు.", effEn: "Without wealth, heretical.", effTe: "నిర్ధనుడు, పాషండి." },
  { id: "gola", cat: "Sankhya", catTe: "సంఖ్యా", name: "Gola (గోళ)", houses: [1], defEn: "All 7 planets in 1 Rāśi.", defTe: "ఒకే రాశిలో 7 గ్రహాలు.", effEn: "Poor, ragged, ignorant, idle, always wandering.", effTe: "నిర్ధనుడు, అల్పాంబరుడు, అజ్ఞాని, సోమరి, సంచారి." }
];

const BJ_CHANDRA_YOGAS = [
  { name: "Candrādhiyoga (చంద్రాధియోగం)", sl: "13.2", en: "Benefics (Merc, Jup, Ven) in 6th, 7th, 8th from Moon → Commander (1 benefic), Minister (2), or Ruler/King (3); long life, free from disease & foes.", te: "చంద్రుని నుండి 6, 7, 8 స్థానాలలో శుభులు (బుధ, గురు, శుక్రులు) ఉంటే సేనాధిపతి, మంత్రి లేదా రాజు అవుతాడు." },
  { name: "Sunaphā (సునఫా)", sl: "13.3–5", en: "Planets (other than Sun) in 2nd from Moon (31 varieties) → King or equal, self-acquired property, renowned for wisdom & wealth.", te: "చంద్రుని నుండి 2లో రవి కాక ఇతర గ్రహాలు (31 రకాలు) → రాజు లేదా తత్సమానుడు, స్వార్జిత ధనం, కీర్తి." },
  { name: "Anaphā (అనఫా)", sl: "13.3–5", en: "Planets (other than Sun) in 12th from Moon (31 varieties) → Strong, healthy, amiable, famous, well-dressed, contented.", te: "చంద్రుని నుండి 12లో రవి కాక ఇతర గ్రహాలు (31 రకాలు) → ఆరోగ్యవంతుడు, ప్రసిద్ధుడు, సంతోషి." },
  { name: "Durudharā (దురుధరా)", sl: "13.3–6", en: "Planets (other than Sun) in both 2nd & 12th from Moon (180 varieties) → Abundant wealth, vehicles, bountiful, faithful attendants.", te: "చంద్రుని నుండి 2 & 12లలో గ్రహాలు (180 రకాలు) → అపార ధనం, వాహనాలు, దాతృత్వం." },
  { name: "Kemadruma (కేమద్రుమ)", sl: "13.3,6", en: "Absence of Sunaphā/Anaphā/Durudharā → obscure, penurious, menial. Cancelled if a Kendra from Lagna or Moon is occupied by a planet.", te: "సునఫా/అనఫా/దురుధర లేకుంటే దారిద్ర్యం, కష్టాలు. లగ్న కేంద్రంలో లేదా చంద్రునితో గ్రహం ఉంటే భంగమవుతుంది." },
  { name: "Upacaya Benefics (ఉపచయ శుభులు)", sl: "13.9", en: "All 4 benefics in Upacayas (3,6,10,11) from Lagna → immensely rich; 3/2/1 benefics in Upacaya from Moon → landlord/medium/less wealth.", te: "లగ్నోపచయాలలో 4 శుభులు → మహాధనవంతుడు; చంద్రోపచయాలలో 3/2/1 శుభులు → క్రమంగా ధనప్రాప్తి." }
];

// Chapter XIV: All 21 two-planet conjunctions
const BJ_DVIGRHA_PAIRS = {
  "sun-moon": { en: "Skilled in machinery and stone work.", te: "యంత్ర, శిలా కర్మలలో నిపుణుడు." },
  "sun-mars": { en: "Intent on doing sinful deeds.", te: "పాపకార్యములందు ఆసక్తి గలవాడు." },
  "sun-mercury": { en: "Clever, intelligent, famous, happy.", te: "చతురుడు, బుద్ధిమంతుడు, కీర్తిమంతుడు, సుఖి." },
  "sun-jupiter": { en: "Cruel, interested in other people's work.", te: "క్రూరుడు, ఇతరుల పనులందు ఆసక్తి గలవాడు." },
  "sun-venus": { en: "Earns money as an actor or by use of weapons.", te: "నటన లేదా ఆయుధముల ద్వారా ధనార్జన." },
  "sun-saturn": { en: "Clever in working in metals or various merchandise.", te: "లోహపు పని లేదా వివిధ వ్యాపారాలలో నేర్పరి." },
  "moon-mars": { en: "Dealer in hammers, ploughs, women, drinks, earthen jars; disobedient to mother.", te: "సుత్తి, నాగలి, పానీయాలు, మట్టికుండల వ్యాపారం; తల్లికి అవిధేయుడు." },
  "moon-mercury": { en: "Sweet-tongued, clever in interpreting, good luck and fame.", te: "మధురభాషి, అర్థవివరణలో నేర్పరి, అదృష్ట-కీర్తివంతుడు." },
  "moon-jupiter": { en: "Overpowers enemies, fickle-minded, chief of family, wealthy.", te: "శత్రువులను జయించువాడు, చంచల మనసు, కుటుంబ నాయకుడు, ధనికుడు." },
  "moon-venus": { en: "Adept in weaving, tailoring, and dyeing of cloths.", te: "నేత, కుట్టుపని, వస్త్రాలకు రంగులు వేయడంలో నిపుణుడు." },
  "moon-saturn": { en: "Son of a remarried widow.", te: "పునర్వివాహం చేసుకున్న విధవ కుమారుడు." },
  "mars-mercury": { en: "Dealer in herbs, plants, barks, oils, drugs; clever in boxing.", te: "మూలికలు, తైలాలు, ఔషధ వ్యాపారి; మల్లయుద్ధ/ముష్టియుద్ధ నేర్పరి." },
  "mars-jupiter": { en: "Leader of a city, king, or wealthy Brāhmaṇa.", te: "నగర నాయకుడు, రాజు, లేదా ధనవంతుడైన బ్రాహ్మణుడు." },
  "mars-venus": { en: "Shepherd, wrestler, skilful, addicted to others' wives, or gambler.", te: "గొర్రెల కాపరి, మల్లయోధుడు, పరస్త్రీ ఆసక్తుడు లేదా జూదరి." },
  "mars-saturn": { en: "Miserable, untruthful, despised by all.", te: "దుఃఖితుడు, అసత్యవాది, అందరిచే నిందింపబడువాడు." },
  "mercury-jupiter": { en: "Actor, fond of music, versed in dancing.", te: "నటుడు, సంగీత ప్రియుడు, నాట్యవేత్త." },
  "mercury-venus": { en: "Eloquent, possesses lands, head of an assembly.", te: "వాక్చాతుర్యం, భూములు కలవాడు, సభాధ్యక్షుడు." },
  "mercury-saturn": { en: "Clever in cheating others, disobedient to superiors.", te: "ఇతరులను మోసం చేయడంలో నేర్పరి, పెద్దలకు అవిధేయుడు." },
  "jupiter-venus": { en: "Good learning, wealth, wife, many good qualities.", te: "విద్య, ధనం, సద్భార్య, అనేక సద్గుణాలు కలవాడు." },
  "jupiter-saturn": { en: "Barber, potter, or cook.", te: "మంగలి, కుమ్మరి, లేదా వంటవాడు." },
  "venus-saturn": { en: "Short-sighted, wealth through a young woman, skilled in writing & painting.", te: "హ్రస్వదృష్టి, యువతి ద్వారా ధనం, లేఖన-చిత్రలేఖనంలో నేర్పరి." }
};

const BJ_PRAVRAJYA_ORDERS = [
  { planet: "Sun", planetTe: "రవి", orderEn: "Vanyāśana / Vānaprastha (Forest hermit)", orderTe: "వానప్రస్థుడు (అరణ్య తాపసి)" },
  { planet: "Moon", planetTe: "చంద్రుడు", orderEn: "Vṛddha / Guru (Śaiva ascetic)", orderTe: "వృద్ధ / శైవ సన్యాసి" },
  { planet: "Mars", planetTe: "కుజుడు", orderEn: "Śākya (Buddhist / Śakti ascetic)", orderTe: "శాక్య సన్యాసి (బౌద్ధ/శాక్తేయ)" },
  { planet: "Mercury", planetTe: "బుధుడు", orderEn: "Jīvika (Vaiṣṇava mendicant)", orderTe: "జీవిక (వైష్ణవ భిక్షువు)" },
  { planet: "Jupiter", planetTe: "గురువు", orderEn: "Bhikṣu (Sāṅkhya / Ekadaṇḍi sanyāsi)", orderTe: "భిక్షువు (ఏకదండి సన్యాసి)" },
  { planet: "Venus", planetTe: "శుక్రుడు", orderEn: "Caraka (Wandering mendicant)", orderTe: "చరక (పరివ్రాజకుడు)" },
  { planet: "Saturn", planetTe: "శని", orderEn: "Nirgrantha / Vivāsa (Naked Digambara ascetic)", orderTe: "నిర్గ్రంథ (దిగంబర సన్యాసి)" }
];
