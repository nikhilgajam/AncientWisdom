// Varahamihira's Brihat Samhita — Part 2 Data (Chapters XXXII–LXVII)
// Strictly faithful to V. Subrahmanya Sastri & M. Ramakrishna Bhat edition

// Chapter XXXII: 4 Earthquake Circles
const BS_EARTHQUAKE_CIRCLES = [
  {
    nameEn: "Vāyu (Wind) Circle", nameTe: "వాయు మండలం",
    starsEn: "Uttaraphalgunī, Hasta, Citrā, Svātī, Punarvasu, Mṛgaśirā, Aśvinī",
    starsTe: "ఉత్తర, హస్త, చిత్త, స్వాతి, పునర్వసు, మృగశిర, అశ్విని",
    signsEn: "Smoky quarters, dusty tree-breaking wind, dim Sun (1 week prior).",
    signsTe: "పొగమంచు, చెట్లను విరిచే ధూళిగాలులు, మసకబారిన సూర్యుడు.",
    range: "200 Yojanas", timingEn: "2 Months", timingTe: "2 నెలలు",
    effectEn: "Destroys crops, water, forests; asthma, swellings, fever.",
    effectTe: "పంటలు, జలాలు, అడవులకు హాని; శ్వాసకోశ, వాత రోగాలు."
  },
  {
    nameEn: "Agni (Fire) Circle", nameTe: "అగ్ని మండలం",
    starsEn: "Kṛttikā, Viśākhā, Bharaṇī, Maghā, Pūrvabhādrā, Pūrvaphalgunī",
    starsTe: "కృత్తిక, విశాఖ, భరణి, మఘ, పూర్వాభాద్ర, పుబ్బ",
    signsEn: "Meteors, horizon glow, wind-fanned fires.",
    signsTe: "ఉల్కాపాతం, దిగ్దాహం, గాలితో వ్యాపించే అగ్ని.",
    range: "110 Yojanas", timingEn: "3 Fortnights", timingTe: "45 రోజులు",
    effectEn: "Destroys clouds/lakes; royal feuds, bilious/skin fevers.",
    effectTe: "మేఘాలు, చెరువులు ఎండుట; రాజకలహాలు, పిత్త రోగాలు."
  },
  {
    nameEn: "Indra Circle", nameTe: "ఇంద్ర మండలం",
    starsEn: "Abhijit, Śravaṇa, Dhaniṣṭhā, Rohiṇī, Jyeṣṭhā, P./U. Āṣāḍhā, Anurādhā",
    starsTe: "అభిజిత్, శ్రవణం, ధనిష్ఠ, రోహిణి, జ్యేష్ఠ, పూర్వా/ఉత్తరాషాఢ, అనూరాధ",
    signsEn: "Thundering mountain-like lightning clouds pouring rain.",
    signsTe: "మెరుపులు-ఉరుములతో పర్వతాకార మేఘాలు వర్షించడం.",
    range: "160 Yojanas", timingEn: "1 Week", timingTe: "1 వారం",
    effectEn: "Troubles noble families/kings/guilds, yet gives desirable rain.",
    effectTe: "రాజులకు/ప్రముఖులకు కష్టం కలిగినా, మంచి వర్షాలు కురుస్తాయి."
  },
  {
    nameEn: "Varuṇa Circle", nameTe: "వరుణ మండలం",
    starsEn: "Revatī, Pūrvāṣāḍhā, Ārdrā, Āśleṣā, Mūla, Uttarabhādrā, Śatabhiṣak",
    starsTe: "రేవతి, పూర్వాషాఢ, ఆరుద్ర, ఆశ్లేష, మూల, ఉత్తరాభాద్ర, శతభిషం",
    signsEn: "Huge blue-lily/collyrium clouds, soft rumbling, slender rain lines.",
    signsTe: "నీలోత్పల వర్ణ మేఘాలు, మృదువైన గర్జన, సన్నని వర్షధారలు.",
    range: "180 Yojanas", timingEn: "Same Day", timingTe: "అదే రోజు",
    effectEn: "Excessive rain, mutual hatred forgotten; affects river/sea folk.",
    effectTe: "అధిక వర్షాలు, ద్వేషాలు నశించుట; నదీ-సముద్ర తీర ప్రాంతాలకు ప్రభావం."
  }
];

// Chapters XXXIII–LII: Portents, Crops, Prices, Royal Ceremonies & Signs
const BS_CH33_52_PORTENTS = [
  { ch: "Ch. XXXIII", titleEn: "Meteors (Ulkā)", titleTe: "ఉల్కా లక్షణం", descEn: "5 kinds: Dhiṣṇya, Ulkā, Aśani (thunderbolt), Vidyut (lightning), Tārā (shooting star). Shapes like banners, elephants, lotuses, swans, Svastika bring plenty; weapon/headless shapes warn of strife.", descTe: "ధిష్ణ్య, ఉల్క, అశని, విద్యుత్, తార అని 5 రకాలు. పతాక, గజ, పద్మ, స్వస్తిక ఆకారాలు శుభం." },
  { ch: "Ch. XXXIV–XXXIX", titleEn: "Haloes, Rainbows, Aerial Cities, Mock-Suns, Haze & Storms", titleTe: "పరివేష, ఇంద్రధనుస్సు, గంధర్వనగర, ప్రతిసూర్య, రజస్సు, వాయు", descEn: "Atmospheric optics & storms: glossy unbroken seasonal haloes & double rainbows behind travellers bring rain/prosperity; multi-coloured aerial cities & blood-red clouds warn of conflict.", descTe: "నిర్మల పరివేషాలు మరియు ప్రయాణికునికి వెనుక ఇంద్రధనుస్సు శుభ-వర్షప్రదాలు." },
  { ch: "Ch. XL–XLII", titleEn: "Crops, Substances & Price Fluctuations", titleTe: "సస్యజాతక, ద్రవ్యనిశ్చయ, అర్ఘకాండ", descEn: "Bādarāyaṇa's crop rules (Sun in Vṛścika = summer crops, Sun in Vṛṣabha = autumn crops); 12 Rāśis mapped to commodities; hoarding/selling schedules (2–24 months) by Sun's Rāśi.", descTe: "వృశ్చిక-వృషభ సంక్రమణాల ద్వారా పంటల అంచనా; 12 రాశులకు వస్తువులు మరియు ధరల హెచ్చుతగ్గుల సమయాలు." },
  { ch: "Ch. XLIII–XLV", titleEn: "Indradhvaja, Nīrājana & Wagtail (Khañjana)", titleTe: "ఇంద్రధ్వజ, నీరాజన & ఖంజన లక్షణం", descEn: "Bhādrapada bright 8th–12th royal Indra-banner festival with 13 ornaments; Āśvayuja/Kārttika lustration of army horses/elephants; auspicious Bhadra/Sampūrṇa wagtail perches.", descTe: "ఇంద్రధ్వజోత్సవం, అశ్వ-గజ నీరాజన విధి మరియు ఖంజన పక్షి శకునాలు." },
  { ch: "Ch. XLVI–XLVIII", titleEn: "Utpāta Portents, Miscellany & Puṣyasnāna", titleTe: "ఉత్పాత శాంతి, మయూరచిత్రక & పుష్యస్నానం", descEn: "11 classes of Celestial, Atmospheric & Terrestrial portents with Vedic expiations; non-portents natural to the 6 seasons; Royal Puṣya Full Moon ablution with 25+ herbs & general amnesty.", descTe: "దివ్య-అంతరిక్ష-భౌమ ఉత్పాతాలకు శాంతి విధులు మరియు 25+ ఔషధులతో రాజ పుష్యస్నాన విధి." },
  { ch: "Ch. XLIX–LII", titleEn: "Crowns, Swords, Aṅgavidyā & Pimples/Moles", titleTe: "పట్ట, ఖడ్గ, అంగవిద్య & పిడక లక్షణం", descEn: "Gold crown sizes (King 8d/5 crests to Protégé 2d); 25–50 inch sword marks, 30-limb touch divination & tempering pastes; limb-touch divination (Ch. LI) & mole/pimple omens (Ch. LII).", descTe: "రాజకిరీట కొలతలు, ఖడ్గ లక్షణాలు, అంగవిద్య మరియు పుట్టుమచ్చల ఫలితాలు." }
];

// Chapter LIII: Vastuvidya — 81-Pada (9x9) Deity Matrix, Rank Dimensions & House Plans
// 9x9 grid row-by-row (North = Top row 0, South = Bottom row 8, West = Left col 0, East = Right col 8)
const BS_VASTU_81_GRID = [
  // Row 0 (North edge, W -> E)
  ["Roga","Ahi","Mukhya","Bhallāṭa","Soma","Bhujaga","Aditi","Diti","Śikhi"],
  // Row 1
  ["Pāpayakṣmā","Rudra","Rājayakṣmā","Pṛthvīdhara","Pṛthvīdhara","Pṛthvīdhara","Āpa","Āpavatsa","Parjanya"],
  // Row 2
  ["Śoṣa","Rājayakṣmā","Rājayakṣmā","Pṛthvīdhara","Pṛthvīdhara","Pṛthvīdhara","Āpavatsa","Āpavatsa","Jayanta"],
  // Row 3
  ["Asura","Mitra","Mitra","Brahmā","Brahmā","Brahmā","Aryaman","Aryaman","Indra"],
  // Row 4
  ["Varuṇa","Mitra","Mitra","Brahmā","Brahmā","Brahmā","Aryaman","Aryaman","Sūrya"],
  // Row 5
  ["Kusumadanta","Mitra","Mitra","Brahmā","Brahmā","Brahmā","Aryaman","Aryaman","Satya"],
  // Row 6
  ["Sugrīva","Jaya","Jaya","Vivasvān","Vivasvān","Vivasvān","Savitā","Savitā","Bhṛśa"],
  // Row 7
  ["Dauvārika","Jaya","Vibudhādhipa","Vivasvān","Vivasvān","Vivasvān","Sāvitrī","Savitā","Antarikṣa"],
  // Row 8 (South edge, W -> E)
  ["Pitṛ","Mṛga","Bhṛṅgarāja","Gandharva","Yama","Bṛhatkṣata","Vitatha","Pūṣan","Anila"]
];

const BS_VASTU_RANKS = [
  { rankEn: "King (5 sizes)", rankTe: "రాజు (5 రకాలు)", widths: [108, 100, 92, 84, 76], lenAdd: "Width + 1/4", lenMult: 1.25 },
  { rankEn: "Yuvarāja / Crown Prince (4)", rankTe: "యువరాజు (4 రకాలు)", widths: [74, 68, 62, 56], lenAdd: "Width + 1/3", lenMult: 1.3333 },
  { rankEn: "Commander-in-Chief (5)", rankTe: "సేనాపతి (5 రకాలు)", widths: [64, 58, 52, 46, 40], lenAdd: "Width + 1/6", lenMult: 1.1667 },
  { rankEn: "Minister (5)", rankTe: "మంత్రి (5 రకాలు)", widths: [60, 56, 52, 48, 44], lenAdd: "Width + 1/8", lenMult: 1.125 },
  { rankEn: "Astrologer / Preceptor / Physician (5)", rankTe: "జ్యోతిష్యుడు / గురువు / వైద్యుడు", widths: [40, 36, 32, 28, 24], lenAdd: "Width + 1/6", lenMult: 1.1667 },
  { rankEn: "Brāhmaṇa (5)", rankTe: "బ్రాహ్మణ గృహం (5)", widths: [32, 28, 24, 20, 16], lenAdd: "Width + 1/10", lenMult: 1.10 },
  { rankEn: "Kṣatriya (4)", rankTe: "క్షత్రియ గృహం (4)", widths: [28, 24, 20, 16], lenAdd: "Width + 1/8", lenMult: 1.125 },
  { rankEn: "Vaiśya (3)", rankTe: "వైశ్య గృహం (3)", widths: [24, 20, 16], lenAdd: "Width + 1/6", lenMult: 1.1667 },
  { rankEn: "Śūdra (2)", rankTe: "శూద్ర గృహం (2)", widths: [20, 16], lenAdd: "Width + 1/4", lenMult: 1.25 }
];

const BS_VASTU_HOUSE_PLANS = [
  { nameEn: "Sarvatobhadra (All 4 halls, 4 doors)", nameTe: "సర్వతోభద్ర (4 ద్వారాలు)", resultEn: "Best for Kings & Temples (Sl. 31).", resultTe: "రాజులకు మరియు దేవాలయాలకు శ్రేష్ఠం." },
  { nameEn: "Nandyāvarta (No West door)", nameTe: "నంద్యావర్త (పడమర ద్వారం లేదు)", resultEn: "Best for all classes (Sl. 32).", resultTe: "అన్ని వర్ణాలకు అత్యుత్తమం." },
  { nameEn: "Vardhamāna (No South door)", nameTe: "వర్ధమాన (దక్షిణ ద్వారం లేదు)", resultEn: "Best for all, brings prosperity (Sl. 33).", resultTe: "అందరికీ శుభప్రదం, అభ్యుదయకరం." },
  { nameEn: "Svastika (East door only)", nameTe: "స్వస్తిక (తూర్పు ద్వారం మాత్రమే)", resultEn: "Moderate / good (Sl. 34).", resultTe: "మధ్యమ శుభ ఫలితం." },
  { nameEn: "Hiraṇyanābha (3-hall, no North)", nameTe: "హిరణ్యనాభ (ఉత్తర శాల లేదు)", resultEn: "Auspicious 3-hall house (Sl. 36).", resultTe: "శుభప్రదమైన త్రిశాల." },
  { nameEn: "Sukṣetra (3-hall, no East)", nameTe: "సుక్షేత్ర (తూర్పు శాల లేదు)", resultEn: "Auspicious 3-hall house (Sl. 36).", resultTe: "శుభప్రదమైన త్రిశాల." },
  { nameEn: "Siddhārtha (2-hall: West + South)", nameTe: "సిద్ధార్థ (పడమర + దక్షిణ శాలలు)", resultEn: "Grants wealth (Sl. 37).", resultTe: "ధనప్రాప్తి కలిగిస్తుంది." },
  { nameEn: "Avoid: Cullī (no S), Pakṣaghna (no W), Yama/Daṇḍa/Vāta/Kāca", nameTe: "వర్జ్యం: చుల్లీ, పక్షఘ్న, యమసూర్య, దండ", resultEn: "Cause loss of wealth, enmity, or sorrow (Sl. 36–38).", resultTe: "ధననాశం, కలహాలు, శోకం కలిగిస్తాయి." }
];

// Chapter LIV: Dakargala (Underground Water Springs)
const BS_DAKARGALA_WELL_DIRS = [
  { dir: "East (తూర్పు)", status: "emerald", en: "Beneficial — good water & prosperity (Sl. 98).", te: "శుభం — మంచి జలం & అభ్యుదయం." },
  { dir: "South-East (ఆగ్నేయం)", status: "rose", en: "Caution — causes fear of fire (Sl. 97).", te: "దోషం — అగ్నిభయం కలిగిస్తుంది." },
  { dir: "South (దక్షిణం)", status: "emerald", en: "Beneficial — good for water & welfare (Sl. 98).", te: "శుభం — మంచి జలం & క్షేమం." },
  { dir: "South-West (నైఋతి)", status: "rose", en: "Caution — threatens loss of children (Sl. 97).", te: "దోషం — సంతాన హాని కలిగిస్తుంది." },
  { dir: "West (పడమర)", status: "emerald", en: "Beneficial — good water supply (Sl. 98).", te: "శుభం — జల సమృద్ధి." },
  { dir: "North-West (వాయవ్యం)", status: "rose", en: "Caution — threatens wife (Sl. 97).", te: "దోషం — భార్యకు అరిష్టం." },
  { dir: "North (ఉత్తరం)", status: "emerald", en: "Beneficial — auspicious & abundant (Sl. 98).", te: "శుభం — అభ్యుదయకరం." },
  { dir: "North-East (ఈశాన్యం)", status: "emerald", en: "Highly beneficial — best water & fortune (Sl. 98).", te: "అత్యంత శుభం — ఉత్తమ జలం & ఐశ్వర్యం." }
];

const BS_CH55_67_ARTS_ANIMALS = [
  { ch: "Ch. LV", titleEn: "Vṛkṣāyurveda (Treatment of Trees)", titleTe: "వృక్షాయుర్వేదం (చెట్ల చికిత్స)", descEn: "Soil prep with sesamum; grafting (cow-dung/mud); spacing 20/16/12 cubits; ulcer paste (Viḍaṅga + ghee + silt); 7-night fermented dung/sesamum/wheat/water tonic for abundant fruiting.", descTe: "నువ్వులతో భూమి శుద్ధి, అంటుకట్టుట, 20/16/12 మూరల దూరం, విడంగ+నెయ్యి మందు, ఫలవృద్ది పోషకాలు." },
  { ch: "Ch. LVI", titleEn: "20 Temple Types (Prāsāda Lakṣaṇa)", titleTe: "దేవాలయ నిర్మాణం (20 రకాలు)", descEn: "64-square grid; height = 2× width; sanctum = 1/2 width; idol+pedestal = 7/8 door-height (2:1). 20 types: Meru (12 storeys), Mandara, Kailāsa, Nandana, Padma, Garuḍa, Sarvatobhadra, etc.", descTe: "64 పద వాస్తుపై దేవాలయాలు (మేరు, మందర, కైలాస, పద్మ, గరుడ, సర్వతోభద్ర మొదలైన 20 రకాలు)." },
  { ch: "Ch. LVII", titleEn: "Vajralepa (Adamantine Glue)", titleTe: "వజ్రలేపం", descEn: "4 durable temple/idol cements: boiled unripe Tinduka/wood-apple/Śallakī/resin/Guggulu formulas, plus Maya's metallic Vajrasaṅghāta (8 parts lead + 2 bell-metal + 1 iron rust).", descTe: "దేవాలయ-విగ్రహ బంధానికి 4 శాశ్వత వజ్రలేప సూత్రాలు (మయుని 8 సీసం + 2 కంచు + 1 లోహమల సూత్రం)." },
  { ch: "Ch. LVIII–LX", titleEn: "Idol Tālamāna Proportions & Installation", titleTe: "ప్రతిమాలక్షణం & ప్రతిష్ఠావిధి", descEn: "108-digit iconometry (Rāma/Bali = 120d; 108/96/84d); Śiva Liṅga 3 equal parts (square base, octagonal middle, round top); sectarian priests (Bhāgavatas, Magas, Pāśupatas, Śākyas, etc.).", descTe: "108 అంగుళాల తాళమాన కొలతలు, శివలింగ త్రిభాగ నియమం మరియు మత సంప్రదాయ ప్రతిష్ఠా విధి." },
  { ch: "Ch. LXI–LXVII", titleEn: "Signs of Cows, Dogs, Cocks, Tortoises, Goats, Horses & Elephants", titleTe: "గో, శునక, కుక్కుట, కూర్మ, ఛాగ, అశ్వ, గజ లక్షణాలు", descEn: "Physical marks, auspicious whorls (10 horse āvartas), tooth-ageing of horses (every 3 yrs), and 4 elephant classes (Bhadra 7×9×10c, Manda 6×8×9c, Mṛga 5×7×8c, Saṅkīrṇa).", descTe: "ఆవులు, కుక్కలు, కోళ్లు, తాబేళ్లు, మేకలు, గుర్రాలు (ఆవర్తాలు-దంతవయస్సు), ఏనుగుల (భద్ర, మంద, మృగ) లక్షణాలు." }
];
