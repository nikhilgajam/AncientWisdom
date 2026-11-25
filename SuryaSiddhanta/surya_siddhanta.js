/**
 * Sūrya Siddhānta (सूर्यसिद्धान्त) Master Computational & Visual Engine
 * Based on Rev. Ebenezer Burgess (1860) & P.C. Sengupta / P. Gangooly (1935 Calcutta Edition)
 * Canonical Indian Astronomy Architecture
 */

// ==========================================================================
// 1. Core Astronomical Constants & Ephemeris Tables (Chapter 1)
// ==========================================================================
const SS_CONSTANTS = {
  MAHAYUGA_YEARS: 4320000,
  SAVANA_DAYS_MAHAYUGA: 1577917828, // Terrestrial civil days in a Mahāyuga
  SIDEREAL_ROTATIONS_MAHAYUGA: 1582237828, // Earth's axial rotations relative to asterisms
  LUNAR_DAYS_MAHAYUGA: 1603000080, // Tithis in a Mahāyuga
  INTERCALARY_MONTHS_MAHAYUGA: 1593336, // Adhimāsas in a Mahāyuga
  OMITTED_DAYS_MAHAYUGA: 25082252, // Tithikṣayas in a Mahāyuga
  KALI_EPOCH_JD: 588465.5, // Midnight Feb 18, 3102 BCE at Ujjayinī meridian
  RADIUS_JYA: 3438, // Trigonometric radius R in arcminutes
  OBLIQUITY_DEG: 24.0, // SS max solar obliquity
  REVOLUTIONS: {
    sun: 4320000,
    moon: 57753336,
    moonApogee: 488203,
    moonNode: 232238, // Rāhu (retrograde motion)
    mars: 2296832,
    mercurySighra: 17937060, // Mean motion identical to Sun (4,320,000)
    jupiter: 364220,
    venusSighra: 7022376,   // Mean motion identical to Sun (4,320,000)
    saturn: 146568
  },
  EPICYCLES: {
    sun: { mandaOdd: 14, mandaEven: 14, sighraOdd: 0, sighraEven: 0 },
    moon: { mandaOdd: 32, mandaEven: 32, sighraOdd: 0, sighraEven: 0 },
    mars: { mandaOdd: 75, mandaEven: 72, sighraOdd: 235, sighraEven: 232 },
    mercury: { mandaOdd: 30, mandaEven: 28, sighraOdd: 133, sighraEven: 132 },
    jupiter: { mandaOdd: 33, mandaEven: 32, sighraOdd: 70, sighraEven: 72 },
    venus: { mandaOdd: 11, mandaEven: 12, sighraOdd: 262, sighraEven: 260 },
    saturn: { mandaOdd: 49, mandaEven: 48, sighraOdd: 39, sighraEven: 40 }
  },
  PLANET_DIAMETERS_YOJANA: {
    sun: 6500,
    moon: 480,
    earth: 1600,
    mars: 30,
    mercury: 45,
    jupiter: 40,
    venus: 60,
    saturn: 20
  },
  COMBUSTION_LIMITS_DEG: {
    moon: 12,
    mars: 17,
    mercuryDirect: 14,
    mercuryRetro: 12,
    jupiter: 11,
    venusDirect: 10,
    venusRetro: 8,
    saturn: 15
  }
};

const RASHIS = [
  { en: "Mesha", sa: "मेष", symbol: "♈", range: "0° - 30°" },
  { en: "Vrishabha", sa: "वृषभ", symbol: "♉", range: "30° - 60°" },
  { en: "Mithuna", sa: "मिथुन", symbol: "♊", range: "60° - 90°" },
  { en: "Karka", sa: "कर्क", symbol: "♋", range: "90° - 120°" },
  { en: "Simha", sa: "सिंह", symbol: "♌", range: "120° - 150°" },
  { en: "Kanya", sa: "कन्या", symbol: "♍", range: "150° - 180°" },
  { en: "Tula", sa: "तुला", symbol: "♎", range: "180° - 210°" },
  { en: "Vrischika", sa: "वृश्चिक", symbol: "♏", range: "210° - 240°" },
  { en: "Dhanus", sa: "धनुः", symbol: "♐", range: "240° - 270°" },
  { en: "Makara", sa: "मकर", symbol: "♑", range: "270° - 300°" },
  { en: "Kumbha", sa: "कुम्भ", symbol: "♒", range: "300° - 330°" },
  { en: "Meena", sa: "मीन", symbol: "♓", range: "330° - 360°" }
];

const NAKSHATRAS = [
  "Ashvini (अश्विनी)", "Bharani (भरणी)", "Krittika (कृत्तिका)", "Rohini (रोहिणी)",
  "Mrigashirsha (मृगशीर्षा)", "Ardra (आर्द्रा)", "Punarvasu (पुनर्वसु)", "Pushya (पुष्य)",
  "Ashlesha (आश्लेषा)", "Magha (मघा)", "Purva Phalguni (पूर्वफाल्गुनी)", "Uttara Phalguni (उत्तरफाल्गुनी)",
  "Hasta (हस्त)", "Chitra (चित्रा)", "Svati (स्वाती)", "Vishakha (विशाखा)",
  "Anuradha (अनुराधा)", "Jyeshtha (ज्येष्ठा)", "Mula (मूल)", "Purva Ashadha (पूर्वाषाढा)",
  "Uttara Ashadha (उत्तराषाढा)", "Shravana (श्रवण)", "Dhanishtha (धनिष्ठा)", "Shatabhisha (शतभिषज्)",
  "Purva Bhadrapada (पूर्वभाद्रपदा)", "Uttara Bhadrapada (उत्तरभाद्रपदा)", "Revati (रेवती)"
];

// The 60 Jovian Years (Bārhaspatya Saṁvatsara - Ch. 1, v. 55)
const JOVIAN_YEARS_60 = [
  "Prabhava (प्रभव)", "Vibhava (विभव)", "Śukla (शुक्ल)", "Pramodūta (प्रमोदूत)", "Prajāpati (प्रजापति)",
  "Aṅgiras (अङ्गिराः)", "Śrīmukha (श्रीमुख)", "Bhāva (भाव)", "Yuva (युव)", "Dhātṛ (धातृ)",
  "Īśvara (ईश्वर)", "Bahudhānya (बहुधान्य)", "Pramāthin (प्रमाथी)", "Vikrama (विक्रम)", "Vṛṣa (वृष)",
  "Citrabhānu (चित्रभानु)", "Subhānu (सुभानु)", "Tāraṇa (तारण)", "Pārthiva (पार्थिव)", "Vyaya (व्यय)",
  "Sarvajit (सर्वजित्)", "Sarvadhārin (सर्वधारी)", "Virodhin (विरोधी)", "Vikṛta (विकृत)", "Khara (खर)",
  "Nandana (नन्दन)", "Vijaya (विजय)", "Jaya (जय)", "Manmatha (मन्मथ)", "Durmukha (दुर्मुख)",
  "Hemalamba (हेमलम्ब)", "Vilamba (विलम्ब)", "Vikārin (विकारी)", "Śārvarin (शार्वरी)", "Plava (प्लव)",
  "Śubhakṛt (शुभकृत्)", "Śobhana (शोभन)", "Krodhin (क्रोधी)", "Viśvāvasu (विश्वावसु)", "Parābhava (पराभव)",
  "Plavaṅga (प्लवङ्ग)", "Kīlaka (कीलक)", "Saumya (सौम्य)", "Sādhāraṇa (साधारण)", "Virodhakṛt (विरोधकृत्)",
  "Paridhāvin (परिधावी)", "Pramādin (प्रमादी)", "Ānanda (आनन्द)", "Rākṣasa (राक्षस)", "Nala / Anala (नल)",
  "Piṅgala (पिङ्गल)", "Kālayukta (कालयुक्त)", "Siddhārthin (सिद्धार्थी)", "Raudra (रौद्र)", "Durmati (दुर्मति)",
  "Dundubhi (दुन्दुभि)", "Rudhirodgārin (रुधिरोद्गारी)", "Raktākṣa (रक्ताक्ष)", "Krodhana (क्रोधन)", "Kṣaya (क्षय)"
];

// 28 Yogatārā Coordinates from Chapter 8 (Burgess pp. 211-230)
const YOGATARA_DATA = [
  { no: 1, name: "Aśvinī (अश्विनी)", deity: "Aśvins", dhruvaka: "8°00'", vikshepa: "10°00' N", star: "β & γ Arietis (Sheratan)", mag: "2.6 / 4.0" },
  { no: 2, name: "Bharaṇī (भरणी)", deity: "Yama", dhruvaka: "20°00'", vikshepa: "12°00' N", star: "35, 39, 41 Arietis", mag: "3.6 - 4.5" },
  { no: 3, name: "Kṛttikā (कृत्तिका)", deity: "Agni", dhruvaka: "37°20'", vikshepa: "5°00' N", star: "η Tauri (Alcyone / Pleiades)", mag: "2.9" },
  { no: 4, name: "Rohiṇī (रोहिणी)", deity: "Prajāpati", dhruvaka: "49°30'", vikshepa: "5°00' S", star: "α Tauri (Aldebaran)", mag: "0.85" },
  { no: 5, name: "Mṛgaśīrṣa (मृगशीर्षा)", deity: "Soma", dhruvaka: "63°00'", vikshepa: "10°00' S", star: "λ Orionis (Meissa)", mag: "3.5" },
  { no: 6, name: "Ārdrā (आर्द्रा)", deity: "Rudra", dhruvaka: "67°20'", vikshepa: "9°00' S", star: "α Orionis (Betelgeuse)", mag: "0.50 (var)" },
  { no: 7, name: "Punarvasu (पुनर्वसु)", deity: "Aditi", dhruvaka: "93°00'", vikshepa: "6°00' N", star: "β Geminorum (Pollux)", mag: "1.15" },
  { no: 8, name: "Puṣya (पुष्य)", deity: "Bṛhaspati", dhruvaka: "106°00'", vikshepa: "0°00'", star: "δ Cancri (Asellus Australis)", mag: "3.94" },
  { no: 9, name: "Āśleṣā (आश्लेषा)", deity: "Sarpas", dhruvaka: "109°00'", vikshepa: "7°00' S", star: "ε Hydrae", mag: "3.38" },
  { no: 10, name: "Maghā (मघा)", deity: "Pitaraḥ", dhruvaka: "129°00'", vikshepa: "0°00'", star: "α Leonis (Regulus)", mag: "1.36" },
  { no: 11, name: "Pūrva Phalgunī (पूर्वफाल्गुनी)", deity: "Bhaga", dhruvaka: "144°00'", vikshepa: "12°00' N", star: "δ Leonis (Zosma)", mag: "2.56" },
  { no: 12, name: "Uttara Phalgunī (उत्तरफाल्गुनी)", deity: "Aryaman", dhruvaka: "155°00'", vikshepa: "13°00' N", star: "β Leonis (Denebola)", mag: "2.14" },
  { no: 13, name: "Hasta (हस्त)", deity: "Savitṛ", dhruvaka: "170°00'", vikshepa: "11°00' S", star: "δ Corvi (Algorab)", mag: "2.95" },
  { no: 14, name: "Citrā (चित्रा)", deity: "Tvaṣṭṛ", dhruvaka: "180°00'", vikshepa: "2°00' S", star: "α Virginis (Spica)", mag: "0.98" },
  { no: 15, name: "Svātī (स्वाती)", deity: "Vāyu", dhruvaka: "199°00'", vikshepa: "37°00' N", star: "α Boötis (Arcturus)", mag: "-0.05" },
  { no: 16, name: "Viśākhā (विशाखा)", deity: "Indrāgnī", dhruvaka: "212°05'", vikshepa: "1°30' S", star: "α Librae (Zubenelgenubi)", mag: "2.75" },
  { no: 17, name: "Anurādhā (अनुराधा)", deity: "Mitra", dhruvaka: "224°05'", vikshepa: "3°00' S", star: "δ Scorpii (Dschubba)", mag: "2.29" },
  { no: 18, name: "Jyeṣṭhā (ज्येष्ठा)", deity: "Indra", dhruvaka: "229°35'", vikshepa: "4°00' S", star: "α Scorpii (Antares)", mag: "1.06" },
  { no: 19, name: "Mūla (मूल)", deity: "Nirṛti", dhruvaka: "241°00'", vikshepa: "9°00' S", star: "λ Scorpii (Shaula)", mag: "1.62" },
  { no: 20, name: "Pūrvāṣāḍhā (पूर्वाषाढा)", deity: "Āpaḥ", dhruvaka: "254°30'", vikshepa: "5°30' S", star: "δ Sagittarii (Kaus Media)", mag: "2.72" },
  { no: 21, name: "Uttarāṣāḍhā (उत्तराषाढा)", deity: "Viśvedevāḥ", dhruvaka: "260°00'", vikshepa: "5°00' S", star: "σ Sagittarii (Nunki)", mag: "2.05" },
  { no: 22, name: "Abhijit (अभिजित्)", deity: "Brahmā", dhruvaka: "266°40'", vikshepa: "60°00' N", star: "α Lyrae (Vega)", mag: "0.03" },
  { no: 23, name: "Śravaṇa (श्रवण)", deity: "Viṣṇu", dhruvaka: "280°00'", vikshepa: "30°00' N", star: "α Aquilae (Altair)", mag: "0.77" },
  { no: 24, name: "Dhaniṣṭhā (धनिष्ठा)", deity: "Vasu", dhruvaka: "290°00'", vikshepa: "36°00' N", star: "α Delphini (Svalocin)", mag: "3.77" },
  { no: 25, name: "Śatabhiṣaj (शतभिषज्)", deity: "Varuṇa", dhruvaka: "320°00'", vikshepa: "18°00' S", star: "λ Aquarii", mag: "3.73" },
  { no: 26, name: "Pūrva Bhādrapadā (पूर्वभाद्रपदा)", deity: "Ajaikapāt", dhruvaka: "326°00'", vikshepa: "24°00' N", star: "α Pegasi (Markab)", mag: "2.49" },
  { no: 27, name: "Uttara Bhādrapadā (उत्तरभाद्रपदा)", deity: "Ahirbudhnya", dhruvaka: "337°00'", vikshepa: "26°00' N", star: "γ Pegasi (Algenib)", mag: "2.84" },
  { no: 28, name: "Revatī (रेवती)", deity: "Pūṣan", dhruvaka: "359°50'", vikshepa: "0°00'", star: "ζ Piscium (Origin of SS Zodiac)", mag: "5.21" }
];


const NAKSHATRAS_DETAILED = [
  {
    id: 1,
    nameEn: "Ashvini",
    nameSa: "अश्विनी",
    symbolIcon: "🐴",
    symbolText: "Horse's Head",
    startDeg: 0.0,
    endDeg: 13.3333,
    range: "00°00' - 13°20' Mesha (Aries)",
    deity: "Ashvini Kumaras (Divine Physicians)",
    lord: "Ketu",
    star: "Beta and Gamma Arietis (Sheratan & Mesarthim)",
    gana: "Deva (Divine)",
    nature: "Laghu / Kshipra (Swift & Light)",
    element: "Earth (Prithvi)",
    syllables: ["Chu (चु)", "Che (चे)", "Cho (चो)", "La (ला)"],
    muhurta: "Auspicious for healing, administering medicine, starting journeys, buying vehicles, learning arts, and beginning new projects.",
    desc: "The initiator of the zodiac. Embodies rapid motion, miraculous healing vitality, pioneering courage, and primal vital energy (Prana)."
  },
  {
    id: 2,
    nameEn: "Bharani",
    nameSa: "भरणी",
    symbolIcon: "🏺",
    symbolText: "Yoni / Celestial Vessel / Clay Pot",
    startDeg: 13.3333,
    endDeg: 26.6667,
    range: "13°20' - 26°40' Mesha (Aries)",
    deity: "Yama (Lord of Dharma & Transition)",
    lord: "Venus (Shukra)",
    star: "35, 39, and 41 Arietis",
    gana: "Manushya (Human)",
    nature: "Ugra / Krura (Fierce & Transformative)",
    element: "Earth (Prithvi)",
    syllables: ["Lee (ली)", "Lu (लू)", "Lay (ले)", "Lo (लो)"],
    muhurta: "Favorable for discipline, austerity, removing toxins, demolishing old structures, competitive sports, and occult studies.",
    desc: "The sacred womb of gestation and dissolution. Represents restraint, truth, boundary holding, and the cyclic mystery of birth and mortality."
  },
  {
    id: 3,
    nameEn: "Krittika",
    nameSa: "कृत्तिका",
    symbolIcon: "🔥",
    symbolText: "Razor / Knife / Sacred Flame",
    startDeg: 26.6667,
    endDeg: 40.0,
    range: "26°40' Mesha - 10°00' Vrishabha (Taurus)",
    deity: "Agni (God of Sacred Fire)",
    lord: "Sun (Surya)",
    star: "Pleiades Cluster (Eta Tauri / Alcyone)",
    gana: "Rakshasa (Assertive)",
    nature: "Mishra / Sadharana (Mixed / Piercing)",
    element: "Earth (Prithvi)",
    syllables: ["Aa (अ)", "Ee (ई)", "U (उ)", "Ay (ए)"],
    muhurta: "Ideal for purification, welding, metallurgical crafts, cooking, military initiatives, and burning debts.",
    desc: "The cutting flame of discernment. Krittika burns away impurities, governs digestive and metabolic fires, and bestows sharp intellectual acumen."
  },
  {
    id: 4,
    nameEn: "Rohini",
    nameSa: "रोहिणी",
    symbolIcon: "🛞",
    symbolText: "Chariot / Temple Cart / Banyan Tree",
    startDeg: 40.0,
    endDeg: 53.3333,
    range: "10°00' - 23°20' Vrishabha (Taurus)",
    deity: "Prajapati / Brahma (Cosmic Creator)",
    lord: "Moon (Candra)",
    star: "Aldebaran (Alpha Tauri)",
    gana: "Manushya (Human)",
    nature: "Sthira / Dhruva (Fixed & Enduring)",
    element: "Earth (Prithvi)",
    syllables: ["O (ओ)", "Va (वा)", "Vi (वी)", "Vu (वू)"],
    muhurta: "Supreme for weddings, planting crops, laying foundations of buildings, creative arts, and long-term financial investments.",
    desc: "The favorite celestial abode of the Moon. Symbolizes beauty, sensual abundance, fertile harvest, creative architecture, and steady prosperity."
  },
  {
    id: 5,
    nameEn: "Mrigashirsha",
    nameSa: "मृगशीर्षा",
    symbolIcon: "🦌",
    symbolText: "Deer's Head",
    startDeg: 53.3333,
    endDeg: 66.6667,
    range: "23°20' Vrishabha - 06°40' Mithuna (Gemini)",
    deity: "Soma (Nectar of Immortality)",
    lord: "Mars (Mangala)",
    star: "Lambda, Phi Orionis (Meissa)",
    gana: "Deva (Divine)",
    nature: "Mridu (Soft, Gentle & Searching)",
    element: "Earth (Prithvi)",
    syllables: ["Ve (वे)", "Vo (वो)", "Ka (का)", "Kee (की)"],
    muhurta: "Excellent for research, exploration, romantic harmony, shopping, music, travel, and seeking spiritual mentors.",
    desc: "The eternal celestial wanderer. Represents perpetual curiosity, gentle exploration, mental agility, aesthetic sensitivity, and the search for truth."
  },
  {
    id: 6,
    nameEn: "Ardra",
    nameSa: "आर्द्रा",
    symbolIcon: "💎",
    symbolText: "Teardrop / Diamond / Head of Rudra",
    startDeg: 66.6667,
    endDeg: 80.0,
    range: "06°40' - 20°00' Mithuna (Gemini)",
    deity: "Rudra (The Storm Lord of Transformation)",
    lord: "Rahu",
    star: "Betelgeuse (Alpha Orionis)",
    gana: "Manushya (Human)",
    nature: "Tikshna / Daruna (Dreadful & Piercing)",
    element: "Water (Jala)",
    syllables: ["Ku (कु)", "Gha (घ)", "Nga (ङ)", "Chha (छ)"],
    muhurta: "Good for dismantling obsolete systems, surgical operations, overcoming adversaries, and deep meditation through emotional release.",
    desc: "The cosmic tempest. Dissolves outdated attachments through the purifying storm of Rudra, unlocking brilliant diamond-like clarity."
  },
  {
    id: 7,
    nameEn: "Punarvasu",
    nameSa: "पुनर्वसु",
    symbolIcon: "🏹",
    symbolText: "Bow & Quiver of Arrows",
    startDeg: 80.0,
    endDeg: 93.3333,
    range: "20°00' Mithuna - 03°20' Karka (Cancer)",
    deity: "Aditi (Cosmic Mother of Infinite Space)",
    lord: "Jupiter (Guru)",
    star: "Castor & Pollux (Alpha & Beta Geminorum)",
    gana: "Deva (Divine)",
    nature: "Chara / Chala (Movable & Renewable)",
    element: "Water (Jala)",
    syllables: ["Ke (के)", "Ko (को)", "Ha (हा)", "Hee (ही)"],
    muhurta: "Auspicious for returning home, recovering lost items, healing, starting educational courses, and inaugurating spiritual shelters.",
    desc: "Literally 'Return of the Light'. Signifies renewal, benevolence, forgiveness, infinite replenishment, and safe homecoming after wanderings."
  },
  {
    id: 8,
    nameEn: "Pushya",
    nameSa: "पुष्य",
    symbolIcon: "🌸",
    symbolText: "Lotus / Udder of the Celestial Cow",
    startDeg: 93.3333,
    endDeg: 106.6667,
    range: "03°20' - 16°40' Karka (Cancer)",
    deity: "Brihaspati (Divine Counselor & Priest)",
    lord: "Saturn (Shani)",
    star: "Gamma, Delta, Theta Cancri (Praesepe cluster)",
    gana: "Deva (Divine)",
    nature: "Laghu / Kshipra (Most Auspicious Nourisher)",
    element: "Water (Jala)",
    syllables: ["Hu (हु)", "He (हे)", "Ho (हो)", "Da (डा)"],
    muhurta: "Celebrated as the king of all asterisms for acquiring knowledge, starting dharma, buying gold/property, and taking medicines (except marriage).",
    desc: "The great celestial nourisher. Radiates divine wisdom, dharmic grounding, maternal protection, and spiritual nourishment."
  },
  {
    id: 9,
    nameEn: "Ashlesha",
    nameSa: "आश्लेषा",
    symbolIcon: "🐍",
    symbolText: "Coiled Serpent (Kundalini)",
    startDeg: 106.6667,
    endDeg: 120.0,
    range: "16°40' - 30°00' Karka (Cancer)",
    deity: "Nagas (Divine Serpents)",
    lord: "Mercury (Budha)",
    star: "Epsilon, Delta, Mu Hydrae",
    gana: "Rakshasa (Assertive)",
    nature: "Tikshna (Intense, Mystic & Hypnotic)",
    element: "Water (Jala)",
    syllables: ["Dee (डी)", "Doo (डू)", "Day (डे)", "Do (डो)"],
    muhurta: "Favorable for poison antidote therapies, psychological introspection, occult research, and securing boundaries.",
    desc: "The serpent power. Governs primal wisdom, intuition, psychological depth, subtle perception, and spiritual awakening through Kundalini."
  },
  {
    id: 10,
    nameEn: "Magha",
    nameSa: "मघा",
    symbolIcon: "👑",
    symbolText: "Royal Throne / Regal Palanquin",
    startDeg: 120.0,
    endDeg: 133.3333,
    range: "00°00' - 13°20' Simha (Leo)",
    deity: "Pitris (Ancestral Guardian Spirits)",
    lord: "Ketu",
    star: "Regulus (Alpha Leonis)",
    gana: "Rakshasa (Regal)",
    nature: "Ugra (Fierce & Commanding)",
    element: "Water (Jala)",
    syllables: ["Ma (मा)", "Mee (मी)", "Moo (मू)", "May (मे)"],
    muhurta: "Honoring ancestors (Shraddha), government and institutional ceremonies, coronation, leadership assume, and history archival.",
    desc: "The seat of authority. Connects the soul to lineage, ancestral blessings, royal majesty, dignity, and historical duty."
  },
  {
    id: 11,
    nameEn: "Purva Phalguni",
    nameSa: "पूर्वफाल्गुनी",
    symbolIcon: "🛋️",
    symbolText: "Front Legs of Bed / Hammock",
    startDeg: 133.3333,
    endDeg: 146.6667,
    range: "13°20' - 26°40' Simha (Leo)",
    deity: "Bhaga (God of Fortune & Prosperity)",
    lord: "Venus (Shukra)",
    star: "Delta and Theta Leonis (Zosma & Chertan)",
    gana: "Manushya (Human)",
    nature: "Ugra (Sweet Passion & Celebration)",
    element: "Water (Jala)",
    syllables: ["Mo (मो)", "Ta (टा)", "Tee (टी)", "Too (टू)"],
    muhurta: "Favorable for romance, performing arts, musical concerts, recreation, vacations, and celebrations of fortune.",
    desc: "The joyful blossom of prosperity. Governs marital bliss, relaxation, sensory pleasure, creative beauty, and spontaneous grace."
  },
  {
    id: 12,
    nameEn: "Uttara Phalguni",
    nameSa: "उत्तरफाल्गुनी",
    symbolIcon: "🛏️",
    symbolText: "Four Legs of Royal Bed",
    startDeg: 146.6667,
    endDeg: 160.0,
    range: "26°40' Simha - 10°00' Kanya (Virgo)",
    deity: "Aryaman (Lord of Chivalry, Nobility & Patronage)",
    lord: "Sun (Surya)",
    star: "Denebola (Beta Leonis)",
    gana: "Manushya (Human)",
    nature: "Sthira / Dhruva (Stable & Enduring)",
    element: "Fire (Agni)",
    syllables: ["Tay (टे)", "To (टो)", "Pa (पा)", "Pee (पी)"],
    muhurta: "Outstanding for solemn wedding vows, contracts, philanthropic foundations, and long-term governance agreements.",
    desc: "The guardian of covenants. Represents loyalty, societal harmony, enduring partnerships, noble contracts, and steadfast charity."
  },
  {
    id: 13,
    nameEn: "Hasta",
    nameSa: "हस्त",
    symbolIcon: "✋",
    symbolText: "Open Hand / Clenched Fist",
    startDeg: 160.0,
    endDeg: 173.3333,
    range: "10°00' - 23°20' Kanya (Virgo)",
    deity: "Savitr (The Golden Solar Light of Awakening)",
    lord: "Moon (Candra)",
    star: "Alpha, Beta, Gamma, Delta, Epsilon Corvi",
    gana: "Deva (Divine)",
    nature: "Laghu / Kshipra (Swift Dexterity)",
    element: "Fire (Agni)",
    syllables: ["Pu (पू)", "Sha (ष)", "Na (ण)", "Tha (ठ)"],
    muhurta: "Superb for craftsmanship, precision surgery, handwriting, fine mechanical arts, humor, trade, and solar invocations.",
    desc: "The artisan's grasp. Bestows dexterity of the hands, witty communication, therapeutic healing touch, and rapid craft mastery."
  },
  {
    id: 14,
    nameEn: "Chitra",
    nameSa: "चित्रा",
    symbolIcon: "💎",
    symbolText: "Bright Gem / Pearl / Mirror",
    startDeg: 173.3333,
    endDeg: 186.6667,
    range: "23°20' Kanya - 06°40' Tula (Libra)",
    deity: "Tvashtar / Vishvakarma (Divine Architect)",
    lord: "Mars (Mangala)",
    star: "Spica (Alpha Virginis)",
    gana: "Rakshasa (Aesthetic)",
    nature: "Mridu (Exquisite & Luminous)",
    element: "Fire (Agni)",
    syllables: ["Pe (पे)", "Po (पो)", "Ra (रा)", "Ree (री)"],
    muhurta: "Excellent for architectural design, interior decor, wearing fine jewelry, fashion, visual sculpture, and engineering.",
    desc: "The jewel of the heavens. Reflects multi-faceted creative brilliance, visual design, aesthetic perfection, and celestial architecture."
  },
  {
    id: 15,
    nameEn: "Svati",
    nameSa: "स्वाती",
    symbolIcon: "🌱",
    symbolText: "Tender Shoot in Wind / Sword",
    startDeg: 186.6667,
    endDeg: 200.0,
    range: "06°40' - 20°00' Tula (Libra)",
    deity: "Vayu (The Cosmic Breath & Wind God)",
    lord: "Rahu",
    star: "Arcturus (Alpha Boötis)",
    gana: "Deva (Divine)",
    nature: "Chara / Chala (Flexible & Movable)",
    element: "Fire (Agni)",
    syllables: ["Roo (रू)", "Re (रे)", "Ro (रो)", "Taa (ता)"],
    muhurta: "Auspicious for aviation, learning musical instruments, commerce, business transactions, travel, and flexible diplomacy.",
    desc: "The breath of independence. Adapts like a tender shoot bending with the breeze without snapping, governed by freedom and communication."
  },
  {
    id: 16,
    nameEn: "Vishakha",
    nameSa: "विशाखा",
    symbolIcon: "⛩️",
    symbolText: "Triumphal Arch / Potter's Wheel",
    startDeg: 200.0,
    endDeg: 213.3333,
    range: "20°00' Tula - 03°20' Vrischika (Scorpio)",
    deity: "Indragni (Indra & Agni Conjoined)",
    lord: "Jupiter (Guru)",
    star: "Alpha, Beta, Gamma Librae",
    gana: "Rakshasa (Ambitious)",
    nature: "Mishra (Determined & Victorious)",
    element: "Fire (Agni)",
    syllables: ["Tee (ती)", "Too (तू)", "Te (ते)", "To (तो)"],
    muhurta: "Great for setting long-range ambitions, sports training, spiritual initiations requiring rigorous austerity, and decisive breakthroughs.",
    desc: "The arch of triumph. Unites the willpower of Indra with the relentless burning energy of Agni to achieve resolute goals."
  },
  {
    id: 17,
    nameEn: "Anuradha",
    nameSa: "अनुराधा",
    symbolIcon: "🪷",
    symbolText: "Lotus Flower / Arch of Friendship",
    startDeg: 213.3333,
    endDeg: 226.6667,
    range: "03°20' - 16°40' Vrischika (Scorpio)",
    deity: "Mitra (Lord of Universal Friendship & Concord)",
    lord: "Saturn (Shani)",
    star: "Beta, Delta, Pi Scorpionis",
    gana: "Deva (Divine)",
    nature: "Mridu (Devoted & Cooperative)",
    element: "Fire (Agni)",
    syllables: ["Na (ना)", "Nee (नी)", "Noo (नू)", "Ne (ने)"],
    muhurta: "Ideal for forming alliances, international partnerships, devotional worship (Bhakti), counseling, and reconciliations.",
    desc: "The lotus flowering amidst swamp waters. Transmutes Scorpio's intense currents into pure devotion, alliance, and unconditional loyalty."
  },
  {
    id: 18,
    nameEn: "Jyeshtha",
    nameSa: "ज्येष्ठा",
    symbolIcon: "🛡️",
    symbolText: "Circular Amulet / Talisman / Umbrella",
    startDeg: 226.6667,
    endDeg: 240.0,
    range: "16°40' - 30°00' Vrischika (Scorpio)",
    deity: "Indra (Sovereign of the Gods)",
    lord: "Mercury (Budha)",
    star: "Antares (Alpha Scorpionis)",
    gana: "Rakshasa (Elder)",
    nature: "Tikshna (Protective, Sovereign & Severe)",
    element: "Air (Vayu)",
    syllables: ["No (नो)", "Ya (या)", "Yee (यी)", "Yoo (यू)"],
    muhurta: "Favorable for defending borders, elder councils, strategic administration, occult mastery, and courage in crisis.",
    desc: "The eldest sovereign. Possesses senior authority, protective talismans, pride, and the inner power to command through stormy challenges."
  },
  {
    id: 19,
    nameEn: "Mula",
    nameSa: "मूल",
    symbolIcon: "🌿",
    symbolText: "Tied Bundle of Roots / Elephant Goad",
    startDeg: 240.0,
    endDeg: 253.3333,
    range: "00°00' - 13°20' Dhanus (Sagittarius)",
    deity: "Nirriti (Goddess of Root Dissolution)",
    lord: "Ketu",
    star: "Epsilon, Zeta, Mu Scorpionis (Galactic Core Pointer)",
    gana: "Rakshasa (Rooting)",
    nature: "Tikshna (Profound & Investigating)",
    element: "Air (Vayu)",
    syllables: ["Ye (ये)", "Yo (यो)", "Bha (भा)", "Bhee (भी)"],
    muhurta: "Ideal for medicinal herbal foraging, deep scientific root-cause investigations, spiritual renunciation, and philosophical enquiry.",
    desc: "The cosmic root pointing directly to the center of our Milky Way Galaxy. Digs beneath surface illusions to extract fundamental truths."
  },
  {
    id: 20,
    nameEn: "Purva Ashadha",
    nameSa: "पूर्वाषाढा",
    symbolIcon: "🌊",
    symbolText: "Winnowing Basket / Elephant Tusk",
    startDeg: 253.3333,
    endDeg: 266.6667,
    range: "13°20' - 26°40' Dhanus (Sagittarius)",
    deity: "Apas (Cosmic Waters of Life)",
    lord: "Venus (Shukra)",
    star: "Delta and Epsilon Sagittarii (Kaus Media & Australis)",
    gana: "Manushya (Human)",
    nature: "Ugra (Invincible & Purifying)",
    element: "Air (Vayu)",
    syllables: ["Bhu (भू)", "Dha (धा)", "Pha (फा)", "Dhad (ढा)"],
    muhurta: "Auspicious for water conservation projects, marine navigation, declarations of victory, and emotional revitalization.",
    desc: "The undefeated wave. Symbolizes oceanic patience, the purifying gift of life, invincibility, and poetic eloquence."
  },
  {
    id: 21,
    nameEn: "Uttara Ashadha",
    nameSa: "उत्तराषाढा",
    symbolIcon: "🐘",
    symbolText: "Elephant Tusk / Small Cot",
    startDeg: 266.6667,
    endDeg: 280.0,
    range: "26°40' Dhanus - 10°00' Makara (Capricorn)",
    deity: "Vishvedevas (All Universal Principles)",
    lord: "Sun (Surya)",
    star: "Sigma and Tau Sagittarii (Nunki & Ascella)",
    gana: "Manushya (Human)",
    nature: "Sthira / Dhruva (Permanent & Victorious)",
    element: "Air (Vayu)",
    syllables: ["Bhe (भे)", "Bho (भो)", "Ja (जा)", "Jee (जी)"],
    muhurta: "Supreme for laying foundation stones, inaugurating public institutions, statecraft treaties, and permanent good works.",
    desc: "The lasting victory. Governs ethical integrity, universal collective harmony, perseverance, and timeless accomplishments."
  },
  {
    id: 22,
    nameEn: "Shravana",
    nameSa: "श्रवण",
    symbolIcon: "👂",
    symbolText: "Ear / Three Footprints (Trivikrama)",
    startDeg: 280.0,
    endDeg: 293.3333,
    range: "10°00' - 23°20' Makara (Capricorn)",
    deity: "Vishnu (The Preserver & Cosmic Pervader)",
    lord: "Moon (Candra)",
    star: "Altair (Alpha Aquilae) with Beta & Gamma",
    gana: "Deva (Divine)",
    nature: "Chara / Chala (Listening & Traveling)",
    element: "Air (Vayu)",
    syllables: ["Khi (खी)", "Khu (खू)", "Khe (खे)", "Kho (खो)"],
    muhurta: "Superb for learning Vedic scriptures, audio recordings, podcasting, pilgrimage journeys, and listening to wise elders.",
    desc: "The sacred art of listening (Shruti). Absorbs cosmic knowledge through pure receptive silence, expanding across the three worlds."
  },
  {
    id: 23,
    nameEn: "Dhanishtha",
    nameSa: "धनिष्ठा",
    symbolIcon: "🥁",
    symbolText: "Mridangam / Damaru / Flute",
    startDeg: 293.3333,
    endDeg: 306.6667,
    range: "23°20' Makara - 06°40' Kumbha (Aquarius)",
    deity: "Ashta Vasus (The Eight Elemental Light Gods)",
    lord: "Mars (Mangala)",
    star: "Alpha, Beta, Gamma, Delta Delphini",
    gana: "Rakshasa (Rhythmic)",
    nature: "Chara / Chala (Resonant & Wealthy)",
    element: "Air (Vayu)",
    syllables: ["Ga (गा)", "Gee (गी)", "Goo (गु)", "Ge (गे)"],
    muhurta: "Excellent for playing percussion and musical compositions, acquiring wealth, purchasing gems, reciting poetry, and sports.",
    desc: "The celestial symphony of wealth. Governs timing, cadence, communal rhythm, abundance, and magnetic charisma."
  },
  {
    id: 24,
    nameEn: "Shatabhisha",
    nameSa: "शतभिषज्",
    symbolIcon: "⭕",
    symbolText: "Empty Circle / Hundred Healing Herbs",
    startDeg: 306.6667,
    endDeg: 320.0,
    range: "06°40' - 20°00' Kumbha (Aquarius)",
    deity: "Varuna (Guardian of Cosmic Law & Oceanic Depths)",
    lord: "Rahu",
    star: "Gamma Aquarii (Sadachbia)",
    gana: "Rakshasa (Veiled)",
    nature: "Chara (Mystic & Healing)",
    element: "Ether (Akasha)",
    syllables: ["Go (गो)", "Sa (सा)", "See (सी)", "Soo (सू)"],
    muhurta: "Great for medical treatments, curing chronic ailments, astronomical research, solitude, meditation, and ocean shipping.",
    desc: "The hundred healers. Encloses a mystic veil of solitude; accesses deep remedies from the cosmic ocean to heal stubborn conditions."
  },
  {
    id: 25,
    nameEn: "Purva Bhadrapada",
    nameSa: "पूर्वभाद्रपदा",
    symbolIcon: "🗡️",
    symbolText: "Two-Faced Man / Swords / Front of Funeral Bed",
    startDeg: 320.0,
    endDeg: 333.3333,
    range: "20°00' Kumbha - 03°20' Meena (Pisces)",
    deity: "Aja Ekapada (The Cosmic One-Footed Fire Dragon)",
    lord: "Jupiter (Guru)",
    star: "Alpha and Beta Pegasi (Markab & Scheat)",
    gana: "Manushya (Human)",
    nature: "Ugra (Ascetic & Passionate)",
    element: "Ether (Akasha)",
    syllables: ["Se (से)", "So (सो)", "Da (दा)", "Dee (दी)"],
    muhurta: "Favorable for intense ascetic disciplines, breaking toxic addictions, occult transcendence, and courageous reforms.",
    desc: "The lightning of transformation. Connects dual realms of earthly experience with cosmic fire, shedding superficial comfort for deep truth."
  },
  {
    id: 26,
    nameEn: "Uttara Bhadrapada",
    nameSa: "उत्तरभाद्रपदा",
    symbolIcon: "🐉",
    symbolText: "Twin Serpents in Deep Water / Back of Bed",
    startDeg: 333.3333,
    endDeg: 346.6667,
    range: "03°20' - 16°40' Meena (Pisces)",
    deity: "Ahirbudhnya (Serpent of the Oceanic Depths)",
    lord: "Saturn (Shani)",
    star: "Gamma Pegasi and Alpha Andromedae (Algenib & Alpheratz)",
    gana: "Manushya (Human)",
    nature: "Sthira / Dhruva (Serene & Wise)",
    element: "Ether (Akasha)",
    syllables: ["Du (दू)", "Shyam (थ)", "Jham (झ)", "Dha (ञ)"],
    muhurta: "Excellent for yoga meditation retreats, constructing sanctums, silent contemplation, writing profound philosophy, and charity.",
    desc: "The serpent of deep cosmic wisdom. Restful, deeply anchored, benevolent, and possessing profound spiritual resilience."
  },
  {
    id: 27,
    nameEn: "Revati",
    nameSa: "रेवती",
    symbolIcon: "🐟",
    symbolText: "Pair of Swimming Fish / Drum for Journey",
    startDeg: 346.6667,
    endDeg: 360.0,
    range: "16°40' - 30°00' Meena (Pisces)",
    deity: "Pushan (The Divine Shepherd & Protector of Travelers)",
    lord: "Mercury (Budha)",
    star: "Zeta Piscium",
    gana: "Deva (Divine)",
    nature: "Mridu (Gentle, Sweet & Nourishing)",
    element: "Ether (Akasha)",
    syllables: ["De (दे)", "Do (दो)", "Chaa (चा)", "Chee (ची)"],
    muhurta: "Supreme for starting voyages, caring for animals, adoption, wedding celebrations, buying clothes/jewelry, and peaceful completions.",
    desc: "The final step of the zodiac. Guided by Pushan's protective staff, it bestows prosperity, compassionate gentleness, safe travels, and cosmic homecoming."
  }
];

// Authentic 24 Jya values from Surya Siddhanta Chapter 2, verses 15-22
const JYA_TABLE = [
  { n: 1, arcMin: 225, deg: "3° 45'", jya: 225, diff: 225 },
  { n: 2, arcMin: 450, deg: "7° 30'", jya: 449, diff: 224 },
  { n: 3, arcMin: 675, deg: "11° 15'", jya: 671, diff: 222 },
  { n: 4, arcMin: 900, deg: "15° 00'", jya: 890, diff: 219 },
  { n: 5, arcMin: 1125, deg: "18° 45'", jya: 1105, diff: 215 },
  { n: 6, arcMin: 1350, deg: "22° 30'", jya: 1315, diff: 210 },
  { n: 7, arcMin: 1575, deg: "26° 15'", jya: 1520, diff: 205 },
  { n: 8, arcMin: 1800, deg: "30° 00'", jya: 1719, diff: 199 },
  { n: 9, arcMin: 2025, deg: "33° 45'", jya: 1910, diff: 191 },
  { n: 10, arcMin: 2250, deg: "37° 30'", jya: 2093, diff: 183 },
  { n: 11, arcMin: 2475, deg: "41° 15'", jya: 2267, diff: 174 },
  { n: 12, arcMin: 2700, deg: "45° 00'", jya: 2431, diff: 164 },
  { n: 13, arcMin: 2925, deg: "48° 45'", jya: 2585, diff: 154 },
  { n: 14, arcMin: 3150, deg: "52° 30'", jya: 2728, diff: 143 },
  { n: 15, arcMin: 3375, deg: "56° 15'", jya: 2859, diff: 131 },
  { n: 16, arcMin: 3600, deg: "60° 00'", jya: 2978, diff: 119 },
  { n: 17, arcMin: 3825, deg: "63° 45'", jya: 3084, diff: 106 },
  { n: 18, arcMin: 4050, deg: "67° 30'", jya: 3177, diff: 93 },
  { n: 19, arcMin: 4275, deg: "71° 15'", jya: 3256, diff: 79 },
  { n: 20, arcMin: 4500, deg: "75° 00'", jya: 3321, diff: 65 },
  { n: 21, arcMin: 4725, deg: "78° 45'", jya: 3372, diff: 51 },
  { n: 22, arcMin: 4950, deg: "82° 30'", jya: 3409, diff: 37 },
  { n: 23, arcMin: 5175, deg: "86° 15'", jya: 3431, diff: 22 },
  { n: 24, arcMin: 5400, deg: "90° 00'", jya: 3438, diff: 7 }
];

// Comprehensive 14 Chapter syllabus data


// ==========================================================================
// 2. Comprehensive 14 Chapters Dataset (Burgess & Sengupta Edition)
// ==========================================================================
const CHAPTERS_DATA = [
  {
    num: 1,
    nameEn: "Madhyamādhikāra",
    nameSa: "मध्यमाधिकारः",
    title: "Of the Mean Motions of the Planets",
    versesCount: 70,
    verse: "युगे सूर्यज्ञशुक्राणां खचतुष्करदार्णवाः । कुजजीवगुणानां तु भवेयुर्भगणाः क्रमात् ॥",
    translation: "In an Age (Mahāyuga), the revolutions of the Sun, Mercury, and Venus are 4,320,000; the revolutions of Mars, Jupiter, and Saturn follow in harmonic regular numbers.",
    burgessSummary: "Homage to Deity (v. 1); Revelation to Maya at Romaka (vv. 2-9); Real and unreal time (vv. 10-11); Subdivisions of day and year (vv. 11-14); Yugas, Mahāyugas, Kalpas and life of Brahmā (vv. 15-24); Motions of planets (vv. 25-27); Revolutions per Mahāyuga and Kalpa (vv. 29-44); Reduction to civil days (Ahargaṇa) (vv. 48-51); Lords of the day, month, and year (vv. 51-52); Current year of Jupiter cycle (v. 55); Dimensions of the spherical Earth, Prime meridian of Ujjayinī, and Deśāntara longitude differences (vv. 59-67); Orbit inclinations (vv. 68-70).",
    math: "Ahargaṇa = (Solar Years × 12 + Adhimāsa) × 30 + Tithis - Tithikṣaya",
    proInsight: "The Ahargaṇa is the fundamental astronomical clock. By grounding time in discrete civil days from the epoch, Indian astronomers avoided cumulative calendar drift millennia before the Gregorian reform."
  },
  {
    num: 2,
    nameEn: "Spaṣṭādhikāra",
    nameSa: "स्पष्टाधिकारः",
    title: "On the True Places of the Planets",
    versesCount: 69,
    verse: "मन्दशीघ्रफलाभ्यां हि ग्रहः स्पष्टतरो भवेत् । कक्षामण्डलमध्यस्था भुवि द्रष्टा यतो भवेत् ॥",
    translation: "By the corrections of the Manda (apogee/eccentricity) and Śīghra (anomaly/heliocentric parallax), a planet's true position is obtained as seen from Earth.",
    burgessSummary: "Causes of irregularities in planetary motion (vv. 1-3); Manda and Śīghra epicycles (vv. 4-8); Kinds of planetary motion (vv. 12-13); Table of 24 Sines (Jyā) with Radius R=3438' and finite difference formula (vv. 15-22); Table of Versines (Utkramajyā) (vv. 22-27); Obliquity of 24° and Declination (Krānti) formula (v. 28); Epicycles at odd and even quadrants (vv. 34-37); Calculation of Manda and Śīghra equations of the center (vv. 39-42); The Four-Step Iterative Correction Algorithm for superior & inferior planets (vv. 43-45); Daily true motion (Spaṣṭa-gati) and stationary/retrograde limits (vv. 51-56); Celestial latitude (Vikṣepa) (vv. 56-57).",
    math: "J(n+1) - J(n) = [J(n) - J(n-1)] - J(n)/225; True Longitude = Mean ± Manda-phala ± Śīghra-phala",
    proInsight: "The Śīghra epicycle is mathematically isomorphic to the Copernican heliocentric transformation: the Śīghra-paridhi reflects Earth's orbit relative to the planet."
  },
  {
    num: 3,
    nameEn: "Tripraśnādhikāra",
    nameSa: "त्रिप्रश्नाधिकारः",
    title: "Of Direction, Place, and Time",
    versesCount: 51,
    verse: "दिग्देशकालविज्ञानं शङ्कुना साधयेद्बुधः । समभूमौ लिखेद् वृत्तं द्वादशाङ्गुलशङ्कुना ॥",
    translation: "The wise astronomer ascertains Direction (Diś), Place/Latitude (Deśa), and Time (Kāla) using a 12-digit gnomon set perpendicular on leveled ground.",
    burgessSummary: "Construction of the 12-aṅgula gnomon and dial platform (vv. 1-6); Indian circle method with shadow fish figures (Matsya) for cardinal directions (vv. 2-5); Measure of amplitude (v. 7); Equinoctial shadow (Palabhā), latitude, and co-latitude (vv. 12-14); Sun's noon shadow on any day (vv. 14-17); Earth-sine (Kujyā) and Ascensional difference (Cara) (vv. 34-36); Variation in length of day and night (v. 37); Corner shadows (Koṇa-chāyā), Great Gnomon (Mahā-śaṅku), and finding the Ascendant (Lagna) (vv. 46-51).",
    math: "tan(Latitude) = Palabhā / 12; Day Length = 30 Nāḍīs ± (2 × Cara / 60)",
    proInsight: "Combines planar trigonometry with spherical astronomy to map equatorial coordinates into local horizon Alt-Azimuth coordinates without spherical law of cosines."
  },
  {
    num: 4,
    nameEn: "Candragrahaṇādhikāra",
    nameSa: "चन्द्रग्रहणाधिकारः",
    title: "Of Eclipses, and especially of Lunar Eclipses",
    versesCount: 26,
    verse: "छायामुखे भवेच्चन्द्रो राहुणा च प्रगृह्यते । विक्षेपाच्चन्द्रपातस्य ज्ञायते ग्रहणसम्भवः ॥",
    translation: "When the Full Moon enters the Earth's shadow cone near the lunar nodes (Rāhu/Ketu), an eclipse occurs according to its celestial latitude.",
    burgessSummary: "Diameters of Sun (6,500 yojanas), Moon (480 yojanas), and Earth (1,600 yojanas) (v. 1); Apparent angular diameters (vv. 2-3); Diameter of Earth's shadow cone (Tamomāna / Bhūchāyā) at Moon's distance (vv. 4-5); Conditions of occurrence at Full Moon (v. 6); Contact points: Sparśa, Nimīlana, Madhya, Unmīlana, Mokṣa (vv. 14-17); Half-duration of eclipse (Sthiti) and totality (Marda) (vv. 12-15); Deflection (Valana: Akṣa-valana + Ayana-valana) (vv. 24-25).",
    math: "Shadow Diameter T = (Earth Diam - (Sun Diam - Earth Diam) × Moon Dist / Sun Dist)",
    proInsight: "Because Earth's shadow is a physical cone in space, a lunar eclipse occurs at the identical physical instant for all observers worldwide, requiring no parallax correction."
  },
  {
    num: 5,
    nameEn: "Sūryagrahaṇādhikāra",
    nameSa: "सूर्यग्रहणाधिकारः",
    title: "Of Parallax in a Solar Eclipse",
    versesCount: 17,
    verse: "लम्बनेन विना सूर्यग्रहणं नैव सिद्ध्यति । दृक्क्षेपविक्षेपाभ्यां च नतिरुक्ता मनीषिभिः ॥",
    translation: "A solar eclipse can never be computed without Parallax; astronomers compute Parallax in Longitude (Lambana) and Parallax in Latitude (Nati).",
    burgessSummary: "Why solar eclipses differ from lunar: Moon's shadow cone on Earth (vv. 1-2); Orient-sine and Meridian-sine (vv. 3-5); Nonagesimal (Tribhonalagna) and zenith distance of ecliptic (Dṛkkṣepa) (vv. 6-7); Parallax in longitude (Lambana, in time/nāḍīs) and true moment of apparent conjunction (vv. 7-9); Parallax in latitude (Nati, in arcminutes) and apparent separation of discs (vv. 10-11); Calculation of apparent contact, totality, and release (vv. 12-17).",
    math: "Lambana = (R sin(Hour Angle)) / Divisor; Nati = (R sin(Dṛkkṣepa)) / 15",
    proInsight: "Surya Siddhanta's treatment of Lambana and Nati represents one of the crowning achievements of ancient spherical trigonometry, correctly treating topocentric coordinate transformation."
  },
  {
    num: 6,
    nameEn: "Chedyakādhikāra",
    nameSa: "छेद्यकाधिकारः",
    title: "Of the Projection of Eclipses",
    versesCount: 24,
    verse: "आलेख्यं दर्शयेद्विद्वान् ग्रहणस्य च मण्डलम् । वलनं च दिशं चैव स्पर्शमोक्षप्रसाधने ॥",
    translation: "The astronomer draws the geometric projection (Chedyaka) of the eclipse, illustrating the orientation (Valana) of contact and release across the cardinal points.",
    burgessSummary: "Value and necessity of geometric projection (v. 1); Drawing the Valana-maṇḍala (deflection circle) and Māna-maṇḍala (magnitude circle) (vv. 2-4); Laying off deflection and latitude for ingress and egress (vv. 5-7); Exhibiting points of contact, greatest obscuration, and separation (vv. 8-11); Reversal of directions in western hemisphere (v. 12); Minimum observable obscuration (v. 13); Exhibiting points of immersion and emersion in total eclipse (vv. 20-22); Color of eclipsed parts: smoky, dark, copper-red (v. 23).",
    math: "Valana = Akṣa-valana (Latitude Deflection) + Ayana-valana (Ecliptic Deflection)",
    proInsight: "Ancient precursor to modern stereographic and orthographic cartographic eclipse projection."
  },
  {
    num: 7,
    nameEn: "Grahayutyadhikāra",
    nameSa: "ग्रहयुत्यधिकारः",
    title: "Of Planetary Conjunctions",
    versesCount: 24,
    verse: "ग्रहयोस्तुल्यकांशत्वे युतिर्भवति भास्वतोः । भेदाभेदविकल्पाश्च युद्धं चापि विधीयते ॥",
    translation: "When two planets attain identical longitude, conjunction occurs; depending on their angular separation, four forms of encounter or planetary combat (Graha-Yuddha) transpire.",
    burgessSummary: "General classification of conjunctions (v. 1); Method of finding point on ecliptic and exact time of equal longitude (vv. 2-6); Reduction of latitude to north-south circle (vv. 7-10); The 4 types of Graha-Yuddha: Bheda (occultation), Ullekha (grazing), Aṁśuvimarda (ray mingling), Apasavya (near transit) (vv. 18-20); Rules for determining victor in planetary war based on size, luminosity, and northern position (vv. 20-22).",
    math: "Δt = (Long₂ - Long₁) / (DailyMotion₁ - DailyMotion₂)",
    proInsight: "Essential practical observational astronomy for validating and calibrating ephemeris tables."
  },
  {
    num: 8,
    nameEn: "Bhayutyadhikāra",
    nameSa: "भग्रहयुत्यधिकारः",
    title: "Of the Conjunction of Planets with Asterisms (28 Fixed Stars)",
    versesCount: 21,
    verse: "ध्रुवकाश्चैव विक्षेपा नक्षत्राणां पृथक् पृथक् । अश्विनीप्रभृतीनां च गणितेनोपपादिताः ॥",
    translation: "The polar longitudes (Dhruvaka) and celestial latitudes (Vikṣepa) of the stars, starting from Aśvinī, are established by computational observation.",
    burgessSummary: "Positions of the 27/28 asterisms in polar longitude (Dhruvaka) and polar latitude (Vikṣepa) (vv. 1-9); Positions of non-zodiacal stars: Agastya (Canopus), Lubdhaka (Sirius), Brahmāhṛdaya (Capella), Prajāpati (vv. 10-12); Conjunction of planets with junction-stars (Yogatārā) (vv. 14-16); Piercing the cart of Rohiṇī (Rohiṇī-śakaṭa-bheda) (v. 13); Precession of the equinoxes: trepidation oscillation model of 54 arcseconds per year (vv. 9-10 commentary).",
    math: "Polar Longitude λ_polar and Polar Latitude β_polar astrometric matrix",
    proInsight: "The definitive ancient star catalog anchoring Indian observational astronomy to fixed stellar coordinates."
  },
  {
    num: 9,
    nameEn: "Udayāstādhikāra",
    nameSa: "उदयास्ताधिकारः",
    title: "Of Heliacal Risings and Settings",
    versesCount: 18,
    verse: "सूर्यासनतया हीना ग्रहा गच्छन्त्यदृश्यताम् । कालांशैस्तैरदृश्यत्वं ज्ञेयं प्राच्यां प्रतीचि वा ॥",
    translation: "Planets losing visibility due to proximity to the Sun undergo heliacal setting; their reappearance is governed by specific visibility degrees (Kālāṁśa).",
    burgessSummary: "Subject of heliacal rising and setting (v. 1); Circumstances and horizons where planets rise and set heliacally (vv. 2-3); Calculation of distances in oblique ascension from the Sun (vv. 4-5); Canonical degrees of combustion (Kālāṁśa): Moon 12°, Mars 17°, Mercury 14°/12°, Jupiter 11°, Venus 10°/8°, Saturn 15° (vv. 6-9); Eastern vs Western visibility (vv. 10-11); Heliacal rising of asterisms and fixed stars (vv. 12-15).",
    math: "Visible if |Planet Longitude - Sun Longitude| > Kālāṁśa",
    proInsight: "Pioneered empirical extinction models based on atmospheric twilight scatter centuries ahead of western astronomy."
  },
  {
    num: 10,
    nameEn: "Candrodayādhikāra",
    nameSa: "चन्द्रदर्शनाधिकारः",
    title: "Of the Moon's Risings, Settings, and Elevation of her Cusps",
    versesCount: 15,
    verse: "सितासितविभागेन शृङ्गोन्नतिरुदीर्यते । शुक्ले पूर्वोन्नतं शृङ्गं कृष्णे पश्चादुदाहृतम् ॥",
    translation: "From the proportion of illumination, the elevation of the Moon's horns (Śṛṅgonnati) is computed; the northern or southern tip tilts according to relative latitude.",
    burgessSummary: "Heliacal rising and setting of the Moon (v. 1); Interval from sunset to setting or rising of the Moon (vv. 2-5); Relative altitude and distance of Moon from Sun at sunset (vv. 6-8); Measure of illuminated part of disc in digits (aṅgulas of 12) (v. 9); Graphic delineation of Moon's appearance and cusp tilt (Śṛṅgonnati) at sunset (vv. 10-14); Application to sunrise (v. 15).",
    math: "Illuminated Digits = 12 × (1 - cos(Elongation)) / 2",
    proInsight: "Critical for civil and religious lunar calendar inauguration (Pratipad / Hilal) across ancient Eurasian cultures."
  },
  {
    num: 11,
    nameEn: "Pātādhikāra",
    nameSa: "पाताधिकारः",
    title: "Of Certain Malignant Aspects of the Sun and Moon (Pāta)",
    versesCount: 23,
    verse: "एकस्मिन्नयने सूर्ये चन्द्रमस्ययने परे । क्रान्त्योस्तुल्यत्वे भवति व्यतीपातोऽतिदारुणः ॥",
    translation: "When the Sun and Moon are in opposite solstitial courses and their declinations become equal in magnitude, the formidable Vyatīpāta occurs; in identical courses, Vaidhṛti.",
    burgessSummary: "Definition and description of malignant aspects of Sun and Moon when of equal declination (Krānti-sāmya) (vv. 1-5); Finding longitudes of Sun and Moon at equal declination (vv. 6-11); Determining exact moment of beginning, middle, and end (vv. 12-15); Astrological consequences and unpropitiousness (vv. 16-18); Frequency of Pātas (v. 19); Occurrence of Yogas of like name (v. 20); Unlucky points in asterism circle (v. 21).",
    math: "Condition: |Declination_Sun| = |Declination_Moon| (Vyatīpāta if Sum=180°, Vaidhṛti if Sum=360°)",
    proInsight: "Focuses on celestial intersectional dynamics where gravitational-tidal forces reach symmetrical equilibrium."
  },
  {
    num: 12,
    nameEn: "Bhūgolādhyāya",
    nameSa: "भूगोलाध्यायः",
    title: "Cosmogony, Geography, and Dimensions of the Creation",
    versesCount: 90,
    verse: "सर्वतः पर्वताकारः कन्दुकप्रतिमः स्थितः । भूगोलो व्योम्नि तिष्ठति धारणां शक्तिमाश्रितः ॥",
    translation: "The Earth is spherical like a round ball (Kanduka-pratimaḥ), suspended unsupported in space, sustained by its own inherent attractive holding power (Dhāraṇātmikā Śaktiḥ).",
    burgessSummary: "Inquiries of Maya (vv. 1-9); Development of creative principles and elements (vv. 10-28); Disposition of stellar and planetary orbits (vv. 29-31); Form, spherical structure, and gravity of the Earth (vv. 32-36); The 4 equatorial cardinal cities 90° apart: Laṅkā, Yamakoṭi, Romaka, Siddhāpura (vv. 37-44); Poles: Meru (North Pole - day of Gods) and Vaḍavāmukha (South Pole) (vv. 34-35, 45-72); Day and night variations across latitudes (vv. 45-72); Dimensions of planetary orbits and outer boundary of space (Khakakṣā = 18,712,080,864,000,000 yojanas) (vv. 80-90).",
    math: "Earth Diameter = 1,600 Yojanas; Circumference = 5,026.54 Yojanas; Khakakṣā = Planetary Revolutions × Mahāyuga Civil Days",
    proInsight: "Unambiguous, explicit formulation of a spherical Earth and self-centering gravitational force centuries before Newton and Copernicus."
  },
  {
    num: 13,
    nameEn: "Yantrādhyāya",
    nameSa: "यन्त्राध्यायः",
    title: "Of the Armillary Sphere and Other Astronomical Instruments",
    versesCount: 25,
    verse: "काष्ठैर्गोलं प्रकुर्वीत खगोलाकारमुत्तमम् । नाडीवलयसंयुक्तं समचक्रसमन्वितम् ॥",
    translation: "Let the astronomer construct a wooden Armillary Sphere (Gola-Yantra) mirroring the celestial sphere, fitted with equinoctial rings and horizon circles.",
    burgessSummary: "Construction and equipping of the Armillary Sphere (Gola-yantra) (vv. 1-12); Horizon, Meridian, Prime Vertical, Celestial Equator, and Ecliptic rings (vv. 13-14); Adjustment and revolution of sphere (vv. 15-16); Clepsydra water-clock (Ghaṭī-yantra) of copper bowl sinking in 60 palas (v. 23); Self-rotating perpetual wheel (Svayaṁvaha) driven by mercury or water in angled spokes (vv. 16-21); Narayantra shadow staff, semicircular and circular quadrant instruments (vv. 22-25).",
    math: "1 Ghaṭikā = 60 Palas = water filling period of 10-pala copper vessel",
    proInsight: "Demonstrates that classical Indian astronomy was deeply experimental, physical, and instrument-driven."
  },
  {
    num: 14,
    nameEn: "Mānādhyāya",
    nameSa: "मानाध्यायः",
    title: "Of the Different Modes of Reckoning Time (Nava Mānāni)",
    versesCount: 27,
    verse: "ब्राह्मं दैवं तथा पैत्र्यं प्राजापत्यं च सौरकम् । सावना सावनं मानं चान्द्रं नाक्षत्रमेव च ॥",
    translation: "The nine time measurements are: Brāhma, Daiva, Paitrya, Prājāpatya, Saura (Solar), Sāvana (Terrestrial Civil), Cāndra (Lunar), Nākṣatra (Sidereal), and Bārhaspatya.",
    burgessSummary: "Enumeration of the 9 modes of measuring time (vv. 1-2); Solar time, solstices (Ayanas), and 6 seasons (Ṛtus) (vv. 3-11); Lunar time, synodic months, and Tithis (vv. 12-13); Time of the Fathers (Paitrya: 1 month = 1 day) (v. 14); Sidereal time and names of months derived from asterisms (vv. 15-16); The 12-year and 60-year cycles of Jupiter (v. 17); Civil time (Sāvana) from sunrise to sunrise (v. 18); Divine time (Daiva: 1 solar year = 1 divine day) (v. 20); Patriarch time (Prājāpatya: Manvantara spans) (v. 21); Brahmā time (Kalpa and 100 years of Brahmā) (vv. 21-23); Conclusion and blessing on the student (vv. 24-27).",
    math: "Harmonization: 1 Mahāyuga = 4.32M Solar Years = 1,577,917,828 Civil Days = 53,433,336 Lunar Months",
    proInsight: "A masterclass in comparative chronometry, unifying biological human time with geological, planetary, and cosmological time."
  }
];

// 10 Comprehensive Quiz Questions Spanning All 14 Chapters
const QUIZ_QUESTIONS = [
  {
    q: "According to Surya Siddhanta 1.11, how many respirations (prāṇas) of a healthy human make up one full sidereal day, and what does this number match?",
    options: [
      "21,600 prāṇas, exactly matching the 21,600 arcminutes in the 360° celestial sphere",
      "86,400 prāṇas, matching the seconds in a civil solar day",
      "4,320 prāṇas, matching the years of Kali Yuga divided by 100",
      "1,000 prāṇas, matching the Mahāyugas in a Kalpa"
    ],
    answer: 0,
    explanation: "1 day = 60 nāḍīs = 3,600 vināḍīs = 21,600 prāṇas. This exactly equals the 21,600 arcminutes in 360°, meaning each human breath corresponds to one arcminute of the cosmos turning!"
  },
  {
    q: "Why is the trigonometric radius R chosen as 3438 arcminutes in Chapter 2?",
    options: [
      "Because Circumference C = 21,600', so Radius R = C / (2π) = 21,600 / 6.28318... ≈ 3437.75' rounded to 3438'",
      "Because it is the number of civil days in 10 solar years",
      "Because it equals the distance to the Moon in Yojanas",
      "It was arbitrarily chosen by Asura Maya"
    ],
    answer: 0,
    explanation: "With R = 3438', linear sine length equals angular arc length for small angles (sin θ ≈ θ), allowing angular arc and chord length to be directly interchangeable in minutes of arc."
  },
  {
    q: "In the 4-step planetary correction algorithm (Spaṣṭīkaraṇa), which epicycle reflects Earth's heliocentric orbit around the Sun?",
    options: [
      "The Śīghra epicycle (producing retrograde loops and stationary points)",
      "The Manda epicycle (equation of the center)",
      "The Pāta epicycle (lunar node)",
      "The Ayanāṁśa oscillation"
    ],
    answer: 0,
    explanation: "The Śīghra epicycle represents the geocentric reflection of Earth's revolution around the Sun, mathematically isomorphic to the Copernican transformation."
  },
  {
    q: "According to Chapter 12, verse 32, what is the shape and support of the Earth?",
    options: [
      "Spherical like a ball (Kanduka-pratimaḥ), suspended unsupported in space by its own attractive power (Dhāraṇātmikā Śaktiḥ)",
      "Flat circular disk supported on the hoods of the serpent Śeṣa",
      "Hemispherical bowl floating on the cosmic ocean",
      "Cylindrical column resting on Mount Meru"
    ],
    answer: 0,
    explanation: "Surya Siddhanta explicitly defines Earth as spherical ('Kanduka-pratimaḥ'), hanging unsupported in space sustained by its own inherent holding gravity ('Dhāraṇātmikā Śaktiḥ')."
  },
  {
    q: "What are the four equatorial cities spaced 90° apart described in Chapter 12?",
    options: [
      "Laṅkā (0°), Yamakoṭi (90° E), Siddhāpura (180°), Romaka (270° / 90° W)",
      "Ujjayinī, Vārāṇasī, Pāṭaliputra, Takṣaśilā",
      "Kurukṣetra, Meru, Kāñcī, Dvārakā",
      "Babylon, Alexandria, Athens, Rome"
    ],
    answer: 0,
    explanation: "When it is sunrise in Laṅkā (prime meridian), it is midday in Yamakoṭi, sunset in Siddhāpura, and midnight in Romaka (v. 42-44)."
  },
  {
    q: "In Chapter 3, how does the 12-aṅgula gnomon's equinoctial midday shadow (Palabhā) determine terrestrial latitude?",
    options: [
      "tan(Latitude) = Palabhā / 12",
      "Latitude = Palabhā × 2.5",
      "Latitude = 90° - Palabhā",
      "tan(Latitude) = 12 / Palabhā"
    ],
    answer: 0,
    explanation: "On the equinox, the Sun is on the celestial equator. The angle of the shadow equals the observer's latitude: tan(φ) = shadow / gnomon height = Palabhā / 12."
  },
  {
    q: "Why do solar eclipses require Parallax (Lambana & Nati) corrections while lunar eclipses do not?",
    options: [
      "Because the Moon is near Earth, shifting its apparent position across observer latitudes, whereas Earth's shadow cone in a lunar eclipse is a physical shadow",
      "Because the Sun is moving faster than the Moon",
      "Because solar eclipses only happen at night",
      "Because the Moon has no atmosphere"
    ],
    answer: 0,
    explanation: "Earth's shadow is a physical cone in space that the Moon physically enters (visible everywhere on night side). A solar eclipse is an alignment of discs seen from a specific terrestrial viewpoint subject to parallax."
  },
  {
    q: "What defines the astronomical phenomenon of Vyatīpāta in Chapter 11?",
    options: [
      "Sun and Moon have equal declination in magnitude while traveling in opposite solstitial directions (Sum of Longitudes = 180°)",
      "Sun and Moon are in total lunar conjunction at the vernal equinox",
      "Sun, Moon, and Jupiter form an equilateral triangle",
      "Mercury and Venus are simultaneously in retrograde combustion"
    ],
    answer: 0,
    explanation: "Vyatīpāta occurs when Sun and Moon have identical declination values while one is moving north and the other south (Krānti-sāmya), with their longitudes summing to 180°."
  },
  {
    q: "How many civil (Sāvana) days are in one Mahāyuga of 4,320,000 solar years?",
    options: [
      "1,577,917,828 days (giving an average solar year of ~365.258756 days)",
      "1,582,237,828 days",
      "1,603,000,080 days",
      "1,577,917,500 days"
    ],
    answer: 0,
    explanation: "Mahāyuga civil days = Sidereal rotations (1,582,237,828) - Solar revolutions (4,320,000) = 1,577,917,828 days."
  },
  {
    q: "What is the Clepsydra (Ghaṭī-Yantra) described in Chapter 13, verse 23?",
    options: [
      "A 10-pala copper bowl perforated by a calibrated orifice that sinks in water in exactly 1 Ghaṭikā (24 minutes)",
      "A candle with 60 notches marking time intervals",
      "An hourglass filled with calibrated desert sand",
      "A pendulum clock powered by falling stone weights"
    ],
    answer: 0,
    explanation: "The canonical Ghaṭikā-yantra is a copper vessel of 10 palas weight and 6 aṅgulas height, floating in clear water until it fills and sinks in exactly 60 palas (1 ghaṭikā)."
  }
];

// ==========================================================================
// 3. Mathematical & Ephemeris Core Algorithms
// ==========================================================================

function getJulianDay(year, month, day, hours = 0) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const dayFrac = day + hours / 24.0;
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + dayFrac + B - 1524.5;
}

function formatLongitude(deg) {
  let d = deg % 360;
  if (d < 0) d += 360;
  const degInt = Math.floor(d);
  const minFloat = (d - degInt) * 60;
  const minInt = Math.floor(minFloat);
  const secInt = Math.floor((minFloat - minInt) * 60);

  const rashiIdx = Math.floor(d / 30);
  const degInRashi = (d % 30).toFixed(2);
  const nakIdx = Math.floor((d * 60) / 800);
  const pada = Math.floor(((d * 60) % 800) / 200) + 1;

  return {
    raw: d,
    dms: `${degInt}° ${minInt}' ${secInt}"`,
    rashi: `${RASHIS[rashiIdx].en} (${RASHIS[rashiIdx].symbol} ${degInRashi}°)`,
    nakshatra: `${NAKSHATRAS[nakIdx % 27]} (Pāda ${pada})`
  };
}

function calculateSSPlanets(targetDate) {
  const y = targetDate.getFullYear();
  const m = targetDate.getMonth() + 1;
  const d = targetDate.getDate();
  const h = targetDate.getHours() + targetDate.getMinutes() / 60.0;

  const jd = getJulianDay(y, m, d, h);
  const ahargana = jd - SS_CONSTANTS.KALI_EPOCH_JD;

  const planets = [
    { key: "sun", nameEn: "Sun (Sūrya • सूर्य)", rev: SS_CONSTANTS.REVOLUTIONS.sun, type: "Luminary" },
    { key: "moon", nameEn: "Moon (Candra • चन्द्र)", rev: SS_CONSTANTS.REVOLUTIONS.moon, type: "Luminary" },
    { key: "moonApogee", nameEn: "Moon Apogee (Mandocta • मन्दोच्च)", rev: SS_CONSTANTS.REVOLUTIONS.moonApogee, type: "Apsis" },
    { key: "moonNode", nameEn: "Moon Ascending Node (Rāhu • राहु)", rev: SS_CONSTANTS.REVOLUTIONS.moonNode, type: "Node (Retrograde)" },
    { key: "mars", nameEn: "Mars (Maṅgala • मङ्गल)", rev: SS_CONSTANTS.REVOLUTIONS.mars, type: "Superior Planet" },
    { key: "mercurySighra", nameEn: "Mercury Śīghra (Budha • बुध)", rev: SS_CONSTANTS.REVOLUTIONS.mercurySighra, type: "Inferior Planet" },
    { key: "jupiter", nameEn: "Jupiter (Guru • गुरु)", rev: SS_CONSTANTS.REVOLUTIONS.jupiter, type: "Superior Planet" },
    { key: "venusSighra", nameEn: "Venus Śīghra (Śukra • शुक्र)", rev: SS_CONSTANTS.REVOLUTIONS.venusSighra, type: "Inferior Planet" },
    { key: "saturn", nameEn: "Saturn (Śani • शनि)", rev: SS_CONSTANTS.REVOLUTIONS.saturn, type: "Superior Planet" }
  ];

  const results = planets.map(p => {
    let meanRev = (ahargana * p.rev) / SS_CONSTANTS.SAVANA_DAYS_MAHAYUGA;
    let fraction = meanRev - Math.floor(meanRev);
    if (fraction < 0) fraction += 1.0;

    let deg = fraction * 360.0;
    if (p.key === "moonNode") {
      deg = (360.0 - deg) % 360.0;
    }

    return {
      ...p,
      longitude: formatLongitude(deg)
    };
  });

  return { jd, ahargana, planets: results };
}

// 24-Jyā Table Interpolation (Ch. 2)
function calculateTrigJya(angleDeg) {
  let a = Math.max(0, Math.min(90, angleDeg));
  let totalMin = a * 60;
  let index = Math.floor(totalMin / 225);
  let rem = totalMin % 225;

  // 24 Sines array
  const JYA_TABLE = [
    0, 225, 449, 671, 890, 1105, 1315, 1520, 1719, 1910, 2093, 2267, 2431,
    2585, 2728, 2859, 2978, 3084, 3177, 3256, 3321, 3372, 3409, 3431, 3438
  ];

  let jyaBase = JYA_TABLE[index];
  let jyaNext = index < 24 ? JYA_TABLE[index + 1] : JYA_TABLE[24];
  let diff = jyaNext - jyaBase;
  let jya = jyaBase + (diff * rem) / 225.0;

  let cosAngle = 90 - a;
  let cosIdx = Math.floor((cosAngle * 60) / 225);
  let cosRem = (cosAngle * 60) % 225;
  let kotiBase = JYA_TABLE[cosIdx];
  let kotiNext = cosIdx < 24 ? JYA_TABLE[cosIdx + 1] : JYA_TABLE[24];
  let kotijya = kotiBase + ((kotiNext - kotiBase) * cosRem) / 225.0;

  let utkramajya = 3438 - kotijya;
  let modernSin = Math.sin((a * Math.PI) / 180.0);
  let ssSinNorm = jya / 3438.0;

  return {
    angle: a,
    totalMin: totalMin.toFixed(1),
    index,
    rem: rem.toFixed(1),
    jyaBase,
    jyaNext,
    stepDiff: diff,
    interpPart: ((diff * rem) / 225.0).toFixed(1),
    cosAngle: cosAngle.toFixed(1),
    jyaMinutes: jya.toFixed(1),
    jyaNorm: ssSinNorm.toFixed(6),
    kotijyaMinutes: kotijya.toFixed(1),
    kotijyaNorm: (kotijya / 3438.0).toFixed(6),
    utkramajyaMinutes: utkramajya.toFixed(1),
    modernSin: modernSin.toFixed(6),
    diff: Math.abs(ssSinNorm - modernSin).toFixed(6)
  };
}

// Four-Step Planetary Solver (Spaṣṭīkaraṇa - Ch. 2, vv. 34-45)
function calculate4StepPlanetaryPlace(planetKey, meanLong, sunLong) {
  const ep = SS_CONSTANTS.EPICYCLES[planetKey] || { mandaOdd: 30, mandaEven: 28, sighraOdd: 133, sighraEven: 132 };
  const R = SS_CONSTANTS.RADIUS_JYA; // 3438'

  // Canonical SS Ch. 1, vv. 41-44 Apogee (Mandocca) longitudes
  const apogees = { mars: 130, mercury: 220, jupiter: 171, venus: 80, saturn: 236 };
  const apogee = apogees[planetKey] !== undefined ? apogees[planetKey] : 130;

  let M = ((meanLong % 360) + 360) % 360;
  let S = ((sunLong % 360) + 360) % 360;

  // Helper: Odd/Even quadrant epicycle circumference (Ch. 2, v. 37)
  function getEpi(odd, even, anomalyDeg) {
    const absSin = Math.abs(Math.sin((anomalyDeg * Math.PI) / 180.0));
    return odd - (odd - even) * absSin;
  }

  // Helper: Manda-phala (equation of center, Ch. 2, v. 39)
  function calcMandaPhala(anomalyDeg) {
    const epi = getEpi(ep.mandaOdd, ep.mandaEven, anomalyDeg);
    const sinA = Math.sin((anomalyDeg * Math.PI) / 180.0);
    return -((epi / 360.0) * sinA * R) / 60.0;
  }

  // Helper: Śīghra-phala using Śīghra-karṇa hypotenuse (Ch. 2, vv. 40-42)
  function calcSighraPhala(anomalyDeg) {
    const epi = getEpi(ep.sighraOdd, ep.sighraEven, anomalyDeg);
    const r = (epi / 360.0) * R;
    const rad = (anomalyDeg * Math.PI) / 180.0;
    const bhuja = r * Math.sin(rad);
    const koti = r * Math.cos(rad);
    return (Math.atan2(bhuja, R + koti) * 180.0) / Math.PI;
  }

  // Step 1: 1/2 Śīghra-phala applied to Mean Longitude
  let anomalyS1 = (S - M + 360) % 360;
  let p1 = calcSighraPhala(anomalyS1);
  let m1 = (M + p1 / 2.0 + 360) % 360;

  // Step 2: 1/2 Manda-phala applied to Step 1 result
  let anomalyM2 = (m1 - apogee + 360) % 360;
  let p2 = calcMandaPhala(anomalyM2);
  let m2 = (m1 + p2 / 2.0 + 360) % 360;

  // Step 3: Full Manda-phala (from Step 2) applied to ORIGINAL Mean Place -> Manda-spaṣṭa
  let anomalyM3 = (m2 - apogee + 360) % 360;
  let p3 = calcMandaPhala(anomalyM3);
  let mandaSpashta = (M + p3 + 360) % 360;

  // Step 4: Full Śīghra-phala (from Manda-spaṣṭa) applied to Manda-spaṣṭa -> True Longitude
  let anomalyS4 = (S - mandaSpashta + 360) % 360;
  let p4 = calcSighraPhala(anomalyS4);
  let trueLong = (mandaSpashta + p4 + 360) % 360;

  let isRetro = anomalyS4 > 135 && anomalyS4 < 225;
  let motionState = isRetro ? "Retrograde (Vakra - वक्र)" : Math.abs(p4) > 15 ? "Swift (Śīghra - शीघ्र)" : "Direct (Ṛju - ऋजु)";

  return {
    step1: { desc: "1/2 Śīghra-phala", val: (p1 / 2.0).toFixed(2) + "°", result: m1.toFixed(2) + "°" },
    step2: { desc: "1/2 Manda-phala", val: (p2 / 2.0).toFixed(2) + "°", result: m2.toFixed(2) + "°" },
    step3: { desc: "Full Manda-phala (Manda-spaṣṭa)", val: p3.toFixed(2) + "°", result: mandaSpashta.toFixed(2) + "°" },
    step4: { desc: "Full Śīghra-phala (True Longitude)", val: p4.toFixed(2) + "°", result: trueLong.toFixed(2) + "°" },
    trueLong: trueLong.toFixed(2),
    motionState
  };
}

// Time Lords & Jovian Calculator (Ch. 1, vv. 51-55)
function calculateTimeLords(targetDate, ahargana) {
  const daysOfWeek = [
    "Sunday (Ravivāra • सूर्य)",
    "Monday (Somavāra • चन्द्र)",
    "Tuesday (Maṅgalavāra • मङ्गल)",
    "Wednesday (Budhavāra • बुध)",
    "Thursday (Guruvāra • गुरु)",
    "Friday (Śukravāra • शुक्र)",
    "Saturday (Śanivāra • शनि)"
  ];
  const dayIdx = Math.floor((ahargana + 1) % 7);
  const lordDay = daysOfWeek[dayIdx >= 0 ? dayIdx : dayIdx + 7];

  const monthIdx = Math.floor((ahargana / 30) * 4) % 7;
  const lordMonth = daysOfWeek[monthIdx >= 0 ? monthIdx : monthIdx + 7];

  const yearIdx = Math.floor((ahargana / 360) * 3) % 7;
  const lordYear = daysOfWeek[yearIdx >= 0 ? yearIdx : yearIdx + 7];

  const horaOrder = ["Sun", "Venus", "Mercury", "Moon", "Saturn", "Jupiter", "Mars"];
  const currentHour = targetDate.getHours();
  const horaIdx = (dayIdx * 24 + currentHour) % 7;
  const lordHora = horaOrder[horaIdx];

  const jovianIdx = Math.floor((ahargana * SS_CONSTANTS.REVOLUTIONS.jupiter) / SS_CONSTANTS.SAVANA_DAYS_MAHAYUGA) % 60;
  const jovianYear = JOVIAN_YEARS_60[jovianIdx >= 0 ? jovianIdx : jovianIdx + 60];

  return { lordDay, lordMonth, lordYear, lordHora, jovianYear };
}

// Lunar Eclipse Predictor (Ch. 4)
function calculateLunarEclipse(nodeDistDeg) {
  const moonSemiDiam = 16.0; // minutes
  const shadowSemiDiam = 40.0; // minutes
  const maxEclipseSeparation = (moonSemiDiam + shadowSemiDiam) / 60.0; // ~0.93 degrees

  const latMoon = Math.abs(Math.sin((nodeDistDeg * Math.PI) / 180.0) * 4.5); // SS max latitude = 270' = 4.5°
  const isEclipsed = latMoon < maxEclipseSeparation;

  if (!isEclipsed) {
    return {
      status: "No Eclipse (Full Moon passes outside Earth's shadow cone)",
      grasa: "0.0 digits",
      sthiti: "0.0 Ghaṭikās"
    };
  }

  const obscurationMin = (moonSemiDiam + shadowSemiDiam) - (latMoon * 60.0);
  const grasaDigits = (obscurationMin / (2 * moonSemiDiam)) * 12.0;
  const isTotal = grasaDigits >= 12.0;

  const sthitiNadis = Math.sqrt(Math.max(0, Math.pow(moonSemiDiam + shadowSemiDiam, 2) - Math.pow(latMoon * 60.0, 2))) / 15.0;

  return {
    status: isTotal ? "Total Lunar Eclipse (Khagrāsa)" : "Partial Lunar Eclipse (Khaṇḍagrāsa)",
    grasa: `${grasaDigits.toFixed(1)} digits ${isTotal ? "(Total Obscuration)" : ""}`,
    sthiti: `${sthitiNadis.toFixed(1)} Ghaṭikās (${(sthitiNadis * 24).toFixed(0)} min half-duration)`
  };
}

// Moon Cusp Elevation (Ch. 10)
function calculateMoonCusp(elongDeg) {
  let e = Math.max(12, Math.min(180, elongDeg));
  let illumFrac = (1.0 - Math.cos((e * Math.PI) / 180.0)) / 2.0;
  let angulas = (illumFrac * 12.0).toFixed(1);
  let tiltDeg = Math.sin((e * Math.PI) / 180.0) * 20.0;
  let elevatedHorn = tiltDeg >= 0 ? "Northern Horn (Uttara Śṛṅga)" : "Southern Horn (Dakṣiṇa Śṛṅga)";

  let phaseName = "";
  if (e < 30) {
    phaseName = "Bāla Candra (Young Crescent / బాలచంద్రుడు)";
  } else if (e < 75) {
    phaseName = "Śukla Pakṣa Crescent (చంద్రకళ)";
  } else if (e <= 105) {
    phaseName = "Ardha Candra / Aṣṭamī (Half Moon / అర్ధచంద్రుడు)";
  } else if (e < 165) {
    phaseName = "Śukla Gibbous (అధిక చంద్రుడు)";
  } else {
    phaseName = "Pūrṇimā (Full Moon / పూర్ణిమ)";
  }

  return {
    angulas,
    illumPercent: (illumFrac * 100).toFixed(1) + "%",
    tiltDeg,
    elevatedHorn,
    phaseName,
    tiltText: `${elevatedHorn} elevated by ${Math.abs(tiltDeg).toFixed(1)}°`
  };
}

// ==========================================================================
// 4. Interactive UI Controllers
// ==========================================================================

// Vaastu-Standard Navigation Drawer Controller
function initNavDrawer() {
  const menuToggle = document.getElementById("menuToggle");
  const navDrawer = document.getElementById("navDrawer");
  const navOverlay = document.getElementById("navOverlay");
  const closeDrawerBtn = document.getElementById("closeDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-nav-item");

  if (!menuToggle || !navDrawer || !navOverlay) return;

  function openDrawer() {
    navDrawer.classList.add("open");
    navOverlay.classList.add("open");
    menuToggle.classList.add("is-active");
    menuToggle.setAttribute("aria-expanded", "true");
    navDrawer.setAttribute("aria-hidden", "false");
    navOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    navDrawer.classList.remove("open");
    navOverlay.classList.remove("open");
    menuToggle.classList.remove("is-active");
    menuToggle.setAttribute("aria-expanded", "false");
    navDrawer.setAttribute("aria-hidden", "true");
    navOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("click", () => {
    if (navDrawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  navOverlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
      drawerLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Sticky header scrolled state
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Vaastu-Standard Language Switcher
function setLanguage(lang) {
  document.body.setAttribute("data-lang", lang);
  document.querySelectorAll(".lang-opt").forEach(btn => {
    if (btn.dataset.langVal === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Dynamic header subtitle text
  const subEl = document.getElementById("headerLogoSubtitle");
  if (subEl) {
    if (lang === "telugu") {
      subEl.textContent = "సూర్య సిద్ధాంతము • ప్రాచీన ఖగోళ శాస్త్రం";
    } else if (lang === "english") {
      subEl.textContent = "Classical Indian Astronomy • Burgess (1860)";
    } else {
      subEl.textContent = "సూర్య సిద్ధాంతము • Classical Astronomy";
    }
  }

  // Live re-render for Nakshatra daily card and birth calculator
  if (typeof updateGlobalNakDisplay === "function") {
    updateGlobalNakDisplay(globalCurrentNakDate);
  }
  if (typeof window.reRenderBirthResult === "function") {
    window.reRenderBirthResult();
  }
}

function initLanguageSelector() {
  const langButtons = document.querySelectorAll(".lang-opt");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langVal;
      if (lang) setLanguage(lang);
    });
  });
}

// Level Filter (All, Beginner, Intermediate, Pro)
function initLevelFilter() {
  const levelBtns = document.querySelectorAll(".level-btn");
  const sections = document.querySelectorAll("section[data-tier]");

  levelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      levelBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const selected = btn.dataset.level;

      sections.forEach(sec => {
        const tier = sec.dataset.tier;
        if (selected === "all" || tier === "all" || tier === selected) {
          sec.style.display = "";
        } else {
          sec.style.display = "none";
        }
      });
    });
  });
}

// ScrollSpy keeping nav drawer in sync
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const drawerLinks = document.querySelectorAll(".drawer-nav-item");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute("id");
      }
    });

    if (currentId) {
      drawerLinks.forEach(link => {
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

// Planetary Calculator View
function initCalculator() {
  const dateInput = document.getElementById("targetDateInput");
  const calcBtn = document.getElementById("calcBtn");
  const todayBtn = document.getElementById("todayBtn");

  function runCalc() {
    const val = dateInput.value;
    const date = val ? new Date(val + "T00:00:00") : new Date();
    const data = calculateSSPlanets(date);

    document.getElementById("aharganaDisplay").textContent = Math.floor(data.ahargana).toLocaleString();
    document.getElementById("julianDayDisplay").textContent = data.jd.toFixed(2);

    const tbody = document.getElementById("planetTableBody");
    tbody.innerHTML = "";

    data.planets.forEach(p => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${p.nameEn}</strong></td>
        <td style="font-family:var(--font-mono); color:var(--gold-bright);">${p.longitude.dms}</td>
        <td>${p.longitude.rashi}</td>
        <td>${p.longitude.nakshatra}</td>
        <td style="font-size:0.8rem; color:var(--text-muted);">${p.type} • ${p.rev.toLocaleString()} revs</td>
      `;
      tbody.appendChild(tr);
    });

    // Also update Time Lords & Jovian
    const lords = calculateTimeLords(date, data.ahargana);
    document.getElementById("lordDayDisplay").textContent = lords.lordDay;
    document.getElementById("lordMonthDisplay").textContent = lords.lordMonth;
    document.getElementById("lordYearDisplay").textContent = lords.lordYear;
    document.getElementById("lordHoraDisplay").textContent = lords.lordHora;
    document.getElementById("jovianYearDisplay").textContent = lords.jovianYear;
  }

  calcBtn.addEventListener("click", runCalc);
  todayBtn.addEventListener("click", () => {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
    runCalc();
  });

  const todayStr = new Date().toISOString().split("T")[0];
  dateInput.value = todayStr;
  runCalc();
}

// 24-Jyā Sines Lab (Ch. 2)
function initTrigLab() {
  const angleInput = document.getElementById("trigAngleInput");
  const computeBtn = document.getElementById("trigComputeBtn");
  const bookStepsEl = document.getElementById("trigBookSteps");
  const grid = document.getElementById("jyaGrid");

  function highlightActiveJyaCard(idx) {
    if (!grid) return;
    grid.querySelectorAll(".jya-card").forEach((c) => {
      const cardN = parseInt(c.getAttribute("data-jya-n"), 10);
      if (cardN === idx) {
        c.style.borderColor = "var(--gold-bright)";
        c.style.boxShadow = "0 0 14px rgba(245, 185, 66, 0.3)";
      } else {
        c.style.borderColor = "";
        c.style.boxShadow = "";
      }
    });
  }

  function updateTrig() {
    const parsed = parseFloat(angleInput.value);
    const ang = Number.isFinite(parsed) ? parsed : 30.0;
    const res = calculateTrigJya(ang);

    document.getElementById("trigJyaDisplay").textContent = res.jyaMinutes + "'";
    document.getElementById("trigJyaNorm").textContent = res.jyaNorm;
    document.getElementById("trigKotiDisplay").textContent = res.kotijyaMinutes + "'";
    document.getElementById("trigKotiNorm").textContent = res.kotijyaNorm;
    document.getElementById("trigVersDisplay").textContent = res.utkramajyaMinutes + "'";
    document.getElementById("trigModernDisplay").textContent = res.modernSin;
    document.getElementById("trigDiffDisplay").textContent = `Diff: ${res.diff} (${(100 - parseFloat(res.diff)*100).toFixed(4)}% accuracy)`;

    if (bookStepsEl) {
      const nextIdx = Math.min(24, res.index + 1);
      const isExact = parseFloat(res.rem) === 0;
      bookStepsEl.innerHTML = `
        <div style="color:var(--gold-bright); font-weight:700; margin-bottom:0.45rem;">
          <span class="lang-en">📖 Sūrya Siddhānta Book Method (Ch. 2) for ${res.angle}°:</span>
          <span class="lang-te" style="font-family:var(--font-telugu);">📖 ${res.angle}° కోణానికి సూర్య సిద్ధాంత గణన క్రమం (అధ్యాయము 2):</span>
        </div>
        <div style="color:#cbd5e1; font-family:var(--font-mono); font-size:0.82rem;">
          <div>1) Arcminutes: ${res.angle}° × 60' = <strong>${res.totalMin}'</strong></div>
          <div>2) Table Step (÷ 225'): ${res.totalMin}' ÷ 225' = <strong>Jyā #${res.index}</strong> (base = ${res.jyaBase}'), remainder = <strong>${res.rem}'</strong></div>
          <div>3) ${isExact
            ? `Exact table entry! <strong>Jyā #${res.index} = ${res.jyaMinutes}'</strong>`
            : `Interpolate to Jyā #${nextIdx} (${res.jyaNext}'): ${res.jyaBase}' + [(${res.jyaNext}' − ${res.jyaBase}') × ${res.rem}' / 225'] = ${res.jyaBase}' + ${res.interpPart}' = <strong>${res.jyaMinutes}'</strong>`
          }</div>
          <div style="color:var(--cyan-accent); margin-top:0.2rem;">4) Koṭijyā = Jyā(90° − ${res.angle}° = ${res.cosAngle}°) = <strong>${res.kotijyaMinutes}'</strong> &nbsp;|&nbsp; Utkramajyā = 3438' − ${res.kotijyaMinutes}' = <strong>${res.utkramajyaMinutes}'</strong></div>
        </div>
      `;
    }

    highlightActiveJyaCard(res.index);
  }

  // Populate 24 Jyā Grid
  grid.innerHTML = "";
  const JYA_TABLE = [
    { n: 1, deg: "3°45'", val: 225, mod: "0.0654" },
    { n: 2, deg: "7°30'", val: 449, mod: "0.1305" },
    { n: 3, deg: "11°15'", val: 671, mod: "0.1951" },
    { n: 4, deg: "15°00'", val: 890, mod: "0.2588" },
    { n: 5, deg: "18°45'", val: 1105, mod: "0.3214" },
    { n: 6, deg: "22°30'", val: 1315, mod: "0.3827" },
    { n: 7, deg: "26°15'", val: 1520, mod: "0.4423" },
    { n: 8, deg: "30°00'", val: 1719, mod: "0.5000" },
    { n: 9, deg: "33°45'", val: 1910, mod: "0.5556" },
    { n: 10, deg: "37°30'", val: 2093, mod: "0.6088" },
    { n: 11, deg: "41°15'", val: 2267, mod: "0.6593" },
    { n: 12, deg: "45°00'", val: 2431, mod: "0.7071" },
    { n: 13, deg: "48°45'", val: 2585, mod: "0.7518" },
    { n: 14, deg: "52°30'", val: 2728, mod: "0.7934" },
    { n: 15, deg: "56°15'", val: 2859, mod: "0.8315" },
    { n: 16, deg: "60°00'", val: 2978, mod: "0.8660" },
    { n: 17, deg: "63°45'", val: 3084, mod: "0.8969" },
    { n: 18, deg: "67°30'", val: 3177, mod: "0.9239" },
    { n: 19, deg: "71°15'", val: 3256, mod: "0.9469" },
    { n: 20, deg: "75°00'", val: 3321, mod: "0.9659" },
    { n: 21, deg: "78°45'", val: 3372, mod: "0.9808" },
    { n: 22, deg: "82°30'", val: 3409, mod: "0.9914" },
    { n: 23, deg: "86°15'", val: 3431, mod: "0.9979" },
    { n: 24, deg: "90°00'", val: 3438, mod: "1.0000" }
  ];

  JYA_TABLE.forEach(j => {
    const card = document.createElement("div");
    card.className = "jya-card";
    card.setAttribute("data-jya-n", String(j.n));
    card.style.cursor = "pointer";
    card.title = `Click to load ${j.deg} (${j.n * 3.75}°) into converter`;
    card.innerHTML = `
      <div class="jya-num">Jyā #${j.n}</div>
      <div class="jya-angle">${j.deg}</div>
      <div class="jya-val">${j.val}'</div>
      <div style="font-size:0.75rem; color:var(--cyan-accent);">${j.mod}</div>
    `;
    card.addEventListener("click", () => {
      angleInput.value = (j.n * 3.75).toFixed(2);
      updateTrig();
    });
    grid.appendChild(card);
  });

  computeBtn.addEventListener("click", updateTrig);
  angleInput.addEventListener("input", updateTrig);
  updateTrig();
}

// 4-Step Planetary Solver (Ch. 2)
function init4StepSolver() {
  const planetSel = document.getElementById("stepPlanetSelect");
  const meanInput = document.getElementById("meanAnomalyInput");
  const sunInput = document.getElementById("sunLongInput");
  const runBtn = document.getElementById("run4StepBtn");
  const flowContainer = document.getElementById("stepFlowContainer");

  function runSolver() {
    const pKey = planetSel.value;
    const parsedM = parseFloat(meanInput.value);
    const parsedS = parseFloat(sunInput.value);
    const mean = Number.isFinite(parsedM) ? parsedM : 120;
    const sun = Number.isFinite(parsedS) ? parsedS : 280;

    const res = calculate4StepPlanetaryPlace(pKey, mean, sun);

    flowContainer.innerHTML = `
      <div class="step-box">
        <span class="step-num">Step 1</span>
        <div class="step-title">${res.step1.desc}</div>
        <div class="step-formula">Correction: ${res.step1.val}</div>
        <div class="step-val">Result: ${res.step1.result}</div>
      </div>
      <div class="step-box">
        <span class="step-num">Step 2</span>
        <div class="step-title">${res.step2.desc}</div>
        <div class="step-formula">Correction: ${res.step2.val}</div>
        <div class="step-val">Result: ${res.step2.result}</div>
      </div>
      <div class="step-box">
        <span class="step-num">Step 3</span>
        <div class="step-title">${res.step3.desc}</div>
        <div class="step-formula">Correction: ${res.step3.val}</div>
        <div class="step-val">Result: ${res.step3.result}</div>
      </div>
      <div class="step-box">
        <span class="step-num">Step 4</span>
        <div class="step-title">${res.step4.desc}</div>
        <div class="step-formula">Correction: ${res.step4.val}</div>
        <div class="step-val">Result: ${res.step4.result}</div>
      </div>
    `;

    document.getElementById("finalTrueLongDisplay").textContent = res.trueLong + "°";
    document.getElementById("motionStateDisplay").textContent = res.motionState;
  }

  runBtn.addEventListener("click", runSolver);
  planetSel.addEventListener("change", runSolver);
  runSolver();
}

// Double Epicycle Animated Canvas Simulator
function initEpicycleSimulator() {
  const canvas = document.getElementById("epicycleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let animationId;
  let t = 0;

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 380;
  }
  window.addEventListener("resize", resize);
  resize();

  const planetSelect = document.getElementById("simPlanet");
  const modeSelect = document.getElementById("simMode");
  const speedInput = document.getElementById("simSpeed");

  const orbitHistory = [];

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const scale = Math.min(cx, cy) * 0.75;

    // Earth at center
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(cx, cy, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "11px 'Plus Jakarta Sans'";
    ctx.fillText("Earth (Bhū)", cx - 18, cy + 22);

    const mode = modeSelect.value;
    const pKey = planetSelect.value;
    const ep = SS_CONSTANTS.EPICYCLES[pKey] || { mandaOdd: 33, sighraOdd: 70 };
    const speed = parseFloat(speedInput.value) || 1.0;

    // Orbit parameters
    const rDeferent = scale * 0.65;
    const rEpicycle = mode === "sighra" ? (scale * ep.sighraOdd) / 360.0 * 0.9 : (scale * ep.mandaOdd) / 360.0 * 1.5;

    // Draw Deferent Circle (Kakṣā-maṇḍala)
    ctx.strokeStyle = "rgba(245, 185, 66, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, rDeferent, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Mean center on deferent
    const angularStep = 0.015 * speed;
    const meanAngle = t * angularStep;
    const meanX = cx + rDeferent * Math.cos(meanAngle);
    const meanY = cy + rDeferent * Math.sin(meanAngle);

    // Epicycle circle around mean center
    ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
    ctx.beginPath();
    ctx.arc(meanX, meanY, rEpicycle, 0, Math.PI * 2);
    ctx.stroke();

    // Planet position on epicycle (integer multiplier ensures exact closure at starting point)
    const epiMultiplier = mode === "sighra" ? 3.0 : -1.0;
    const epiAngle = meanAngle * epiMultiplier;
    const planetX = meanX + rEpicycle * Math.cos(epiAngle);
    const planetY = meanY + rEpicycle * Math.sin(epiAngle);

    // Planet-specific accurate colors (Astronomical / Vedic Jyotisha)
    const planetColors = {
      mars: { hex: "#ef4444", rgb: "239, 68, 68", en: "Mars (Maṅgala)", te: "కుజుడు (Mars)" },
      mercury: { hex: "#34d399", rgb: "52, 211, 153", en: "Mercury (Budha)", te: "బుధుడు (Mercury)" },
      jupiter: { hex: "#fbbf24", rgb: "251, 191, 36", en: "Jupiter (Guru)", te: "గురుడు (Jupiter)" },
      venus: { hex: "#f8fafc", rgb: "248, 250, 252", en: "Venus (Śukra)", te: "శుక్రుడు (Venus)" },
      saturn: { hex: "#60a5fa", rgb: "96, 165, 250", en: "Saturn (Śani)", te: "శని (Saturn)" }
    };
    const pInfo = planetColors[pKey] || { hex: "#fbbf24", rgb: "251, 191, 36", en: pKey, te: pKey };

    // Orbit trail: cap at 1 full revolution (2π) so once it touches the starting point,
    // the oldest segment slowly erases & fades away smoothly instead of snapping off
    const fullLoopPoints = Math.max(60, Math.round((Math.PI * 2) / angularStep));
    orbitHistory.push({ x: planetX, y: planetY });
    while (orbitHistory.length > fullLoopPoints) {
      orbitHistory.shift();
    }

    ctx.lineWidth = 2.2;
    for (let i = 1; i < orbitHistory.length; i++) {
      const progress = i / orbitHistory.length; // 0 at tail (slowly erasing), 1 at planet head
      const alpha = (0.04 + 0.86 * Math.pow(progress, 1.4)).toFixed(3);
      ctx.strokeStyle = `rgba(${pInfo.rgb}, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(orbitHistory[i - 1].x, orbitHistory[i - 1].y);
      ctx.lineTo(orbitHistory[i].x, orbitHistory[i].y);
      ctx.stroke();
    }

    // Line from Earth to True Planet
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(planetX, planetY);
    ctx.stroke();

    // Planet dot (accurate planet color with subtle glow)
    ctx.save();
    ctx.shadowColor = pInfo.hex;
    ctx.shadowBlur = 10;
    ctx.fillStyle = pInfo.hex;
    ctx.beginPath();
    ctx.arc(planetX, planetY, 6.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Label the rotating planet
    const curLang = document.body.getAttribute("data-lang") || "dual";
    const planetLabel = curLang === "telugu" ? pInfo.te : pInfo.en;
    ctx.fillStyle = pInfo.hex;
    ctx.font = "bold 12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillText(planetLabel, planetX + 11, planetY + 4);

    t += 1;
    animationId = requestAnimationFrame(draw);
  }

  draw();

  planetSelect.addEventListener("change", () => { t = 0; orbitHistory.length = 0; });
  modeSelect.addEventListener("change", () => { t = 0; orbitHistory.length = 0; });
}

// Gnomon Sundial Simulator (Ch. 3)
function initGnomonSimulator() {
  const canvas = document.getElementById("gnomonCanvas");
  const altSlider = document.getElementById("sunAltitude");
  if (!canvas || !altSlider) return;
  const ctx = canvas.getContext("2d");

  function render() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 260;

    const alt = parseFloat(altSlider.value);
    document.getElementById("altValueDisplay").textContent = alt + "°";

    const rad = (alt * Math.PI) / 180.0;
    const shadowAngulas = 12.0 / Math.tan(rad);
    const karna = Math.sqrt(144 + shadowAngulas * shadowAngulas);

    document.getElementById("shadowLengthDisplay").textContent = shadowAngulas.toFixed(2) + " aṅgulas";
    document.getElementById("karnaDisplay").textContent = karna.toFixed(2) + " aṅgulas";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const groundY = 210;
    const gnomonX = canvas.width * 0.35;
    const gnomonH = 80; // 12 angulas scale

    // Ground
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, groundY);
    ctx.lineTo(canvas.width - 20, groundY);
    ctx.stroke();

    // Shadow
    const shadowPx = (shadowAngulas / 12.0) * gnomonH;
    ctx.fillStyle = "rgba(245, 185, 66, 0.35)";
    ctx.fillRect(gnomonX, groundY - 2, shadowPx, 6);

    // Gnomon staff
    ctx.fillStyle = "#ffd700";
    ctx.fillRect(gnomonX - 4, groundY - gnomonH, 8, gnomonH);

    // Light ray from Sun
    ctx.strokeStyle = "rgba(255, 215, 0, 0.6)";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(gnomonX + shadowPx, groundY);
    ctx.lineTo(gnomonX, groundY - gnomonH);
    ctx.lineTo(gnomonX - 80 * Math.cos(rad), (groundY - gnomonH) - 80 * Math.sin(rad));
    ctx.stroke();
    ctx.setLineDash([]);

    // Sun icon
    const sunX = gnomonX - 80 * Math.cos(rad);
    const sunY = (groundY - gnomonH) - 80 * Math.sin(rad);
    ctx.fillStyle = "#ff7b25";
    ctx.beginPath();
    ctx.arc(sunX, sunY, 14, 0, Math.PI * 2);
    ctx.fill();
  }

  altSlider.addEventListener("input", render);
  window.addEventListener("resize", render);
  render();
}

// Indian Circle Method (Matsya / Fish Arcs - Ch. 3)
function initMatsyaCanvas() {
  const canvas = document.getElementById("matsyaCanvas");
  const angleSlider = document.getElementById("matsyaAngleInput");
  if (!canvas || !angleSlider) return;
  const ctx = canvas.getContext("2d");

  function render() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 340;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const rCircle = Math.min(cx, cy) * 0.72;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Circumference Circle
    ctx.strokeStyle = "rgba(245, 185, 66, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, rCircle, 0, Math.PI * 2);
    ctx.stroke();

    // Center gnomon dot
    ctx.fillStyle = "#ffd700";
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();

    // West shadow point (morning) and East shadow point (evening)
    const morningAngle = Math.PI * 0.75;
    const eveningAngle = Math.PI * 0.25;

    const wX = cx + rCircle * Math.cos(morningAngle);
    const wY = cy + rCircle * Math.sin(morningAngle);
    const eX = cx + rCircle * Math.cos(eveningAngle);
    const eY = cy + rCircle * Math.sin(eveningAngle);

    // Draw Fish Arcs (Matsya)
    ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(wX, wY, rCircle * 0.8, -Math.PI * 0.3, Math.PI * 0.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(eX, eY, rCircle * 0.8, Math.PI * 0.7, Math.PI * 1.3);
    ctx.stroke();
    ctx.setLineDash([]);

    // East-West Line
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(wX, wY);
    ctx.lineTo(eX, eY);
    ctx.stroke();

    // North-South Line (Bisector)
    ctx.strokeStyle = "#f43f5e";
    ctx.beginPath();
    ctx.moveTo(cx, cy - rCircle * 1.15);
    ctx.lineTo(cx, cy + rCircle * 1.15);
    ctx.stroke();

    // Live shadow pointer
    const curAng = (parseFloat(angleSlider.value) * Math.PI) / 180.0;
    const shX = cx + rCircle * 0.85 * Math.cos(curAng);
    const shY = cy + rCircle * 0.85 * Math.sin(curAng);

    ctx.strokeStyle = "rgba(255, 215, 0, 0.85)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(shX, shY);
    ctx.stroke();

    // Labels
    ctx.fillStyle = "#fff";
    ctx.font = "12px 'Plus Jakarta Sans'";
    ctx.fillText("North (Uttara)", cx - 35, cy - rCircle * 1.05);
    ctx.fillText("South (Dakṣiṇa)", cx - 35, cy + rCircle * 1.1);
    ctx.fillText("East (Pūrva)", eX + 8, eY + 4);
    ctx.fillText("West (Paścima)", wX - 75, wY + 4);
  }

  angleSlider.addEventListener("input", render);
  window.addEventListener("resize", render);
  render();
}

// Desantara Lab (Ch. 1)
function initDesantaraLab() {
  const citySelect = document.getElementById("desantaraCitySelect");
  if (!citySelect) return;

  const CITIES = {
    ujjain: { lon: 75.76, lat: 23.18, name: "Ujjayinī (Prime Meridian)" },
    varanasi: { lon: 82.97, lat: 25.31, name: "Vārāṇasī" },
    delhi: { lon: 77.20, lat: 28.61, name: "Delhi" },
    london: { lon: 0.00, lat: 51.50, name: "London (Greenwich)" },
    tokyo: { lon: 139.69, lat: 35.68, name: "Tokyo" },
    newyork: { lon: -74.00, lat: 40.71, name: "New York" },
    alexandria: { lon: 29.91, lat: 31.20, name: "Alexandria / Romaka" }
  };

  function update() {
    const city = CITIES[citySelect.value];
    const diffDeg = city.lon - 75.76;
    const cosLat = Math.cos((city.lat * Math.PI) / 180.0);
    const circumferenceAtLat = 5026.54 * cosLat;
    const distYojanas = Math.abs((diffDeg / 360.0) * circumferenceAtLat);
    const diffPalas = (diffDeg / 360.0) * 3600; // 60 nadis = 3600 palas

    document.getElementById("desDistYojanas").textContent = `${distYojanas.toFixed(1)} Yojanas (${diffDeg >= 0 ? "East" : "West"})`;
    document.getElementById("desTimePalas").textContent = `${Math.abs(diffPalas).toFixed(1)} Palas (${(Math.abs(diffPalas) * 0.4).toFixed(1)} min)`;
  }

  citySelect.addEventListener("change", update);
  update();
}

// Lunar Eclipse Predictor
function initLunarEclipseTool() {
  const nodeInput = document.getElementById("lunarNodeDistInput");
  const calcBtn = document.getElementById("calcLunarEclipseBtn");

  function run() {
    const d = parseFloat(nodeInput.value) || 4.5;
    const res = calculateLunarEclipse(d);

    document.getElementById("lunarStatusDisplay").textContent = res.status;
    document.getElementById("lunarGrasaDisplay").textContent = res.grasa;
    document.getElementById("lunarSthitiDisplay").textContent = res.sthiti;
  }

  calcBtn.addEventListener("click", run);
  run();
}

// Solar Parallax Canvas (Ch. 5)
function initSolarParallaxSimulator() {
  const canvas = document.getElementById("parallaxCanvas");
  const slider = document.getElementById("solarZenithAngle");
  if (!canvas || !slider) return;
  const ctx = canvas.getContext("2d");

  function render() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 220;

    const z = parseFloat(slider.value);
    document.getElementById("solarZenithValDisplay").textContent = z + "°";

    const lambanaNadis = (Math.sin((z * Math.PI) / 180.0) * 3.5).toFixed(2);
    const natiArcmin = (Math.sin((z * Math.PI) / 180.0) * 48.0).toFixed(1);

    document.getElementById("lambanaDisplay").textContent = `${lambanaNadis} Ghaṭikās (${(lambanaNadis * 24).toFixed(0)}m)`;
    document.getElementById("natiDisplay").textContent = `${natiArcmin}' (arcmin)`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Sun Disc
    ctx.fillStyle = "rgba(255, 215, 0, 0.9)";
    ctx.beginPath();
    ctx.arc(cx - 30, cy, 45, 0, Math.PI * 2);
    ctx.fill();

    // True Geocentric Moon
    ctx.fillStyle = "rgba(56, 189, 248, 0.7)";
    ctx.beginPath();
    ctx.arc(cx - 30, cy, 42, 0, Math.PI * 2);
    ctx.fill();

    // Apparent Parallax Shifted Moon Disc
    const shiftX = (parseFloat(lambanaNadis) / 4.0) * 40;
    const shiftY = (parseFloat(natiArcmin) / 50.0) * 35;

    ctx.strokeStyle = "#f43f5e";
    ctx.lineWidth = 2.5;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc((cx - 30) + shiftX, cy + shiftY, 42, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  slider.addEventListener("input", render);
  window.addEventListener("resize", render);
  render();
}

// Chedyaka Graphical Projection Canvas (Ch. 6)
function initChedyakaCanvas() {
  const canvas = document.getElementById("chedyakaCanvas");
  const slider = document.getElementById("chedyakaPhaseInput");
  if (!canvas || !slider) return;
  const ctx = canvas.getContext("2d");

  function render() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 360;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const rValana = Math.min(cx, cy) * 0.75;
    const phase = parseFloat(slider.value) / 100.0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Valana Mandala
    ctx.strokeStyle = "rgba(245, 185, 66, 0.3)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, rValana, 0, Math.PI * 2);
    ctx.stroke();

    // Cardinal Axes
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.beginPath();
    ctx.moveTo(cx - rValana, cy);
    ctx.lineTo(cx + rValana, cy);
    ctx.moveTo(cx, cy - rValana);
    ctx.lineTo(cx, cy + rValana);
    ctx.stroke();

    // Moon Disc (Eclipsed Body)
    ctx.fillStyle = "rgba(200, 200, 210, 0.85)";
    ctx.beginPath();
    ctx.arc(cx, cy, 50, 0, Math.PI * 2);
    ctx.fill();

    // Earth's Shadow Disc (Eclipsing Body)
    const shadowR = 100;
    const travelStart = cx + rValana * 0.85;
    const travelEnd = cx - rValana * 0.85;
    const curShadowX = travelStart + (travelEnd - travelStart) * phase;

    ctx.fillStyle = "rgba(10, 14, 25, 0.9)";
    ctx.strokeStyle = "rgba(239, 68, 68, 0.7)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(curShadowX, cy, shadowR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Points of Contact
    ctx.fillStyle = "#10b981";
    ctx.fillText("Sparśa (Contact)", travelStart - 40, cy + 25);
    ctx.fillStyle = "#f43f5e";
    ctx.fillText("Mokṣa (Release)", travelEnd - 20, cy + 25);
  }

  slider.addEventListener("input", render);
  window.addEventListener("resize", render);
  render();
}

// Planetary War Analyzer (Ch. 7)
function initYuddhaAnalyzer() {
  const p1Sel = document.getElementById("yuddhaP1");
  const p2Sel = document.getElementById("yuddhaP2");

  function evaluate() {
    const p1 = p1Sel.value;
    const p2 = p2Sel.value;

    const BRILLIANCE_ORDER = {
      venus: 5,
      jupiter: 4,
      mars: 3,
      mercury: 2,
      saturn: 1
    };

    let victor = "";
    let reason = "";

    if (p1 === p2) {
      victor = "Identical Celestial Body";
      reason = "Please select two distinct planets for planetary war analysis.";
    } else if (BRILLIANCE_ORDER[p1] > BRILLIANCE_ORDER[p2]) {
      victor = `${p1.toUpperCase()} Prevails (Jaya)`;
      reason = `${p1.toUpperCase()} possesses superior diameter, luminosity, and northward radiant dominance over ${p2.toUpperCase()} (SS 7.21).`;
    } else {
      victor = `${p2.toUpperCase()} Prevails (Jaya)`;
      reason = `${p2.toUpperCase()} possesses superior diameter, luminosity, and northward radiant dominance over ${p1.toUpperCase()} (SS 7.21).`;
    }

    document.getElementById("yuddhaVictorDisplay").textContent = victor;
    document.getElementById("yuddhaReasonDisplay").textContent = reason;
  }

  p1Sel.addEventListener("change", evaluate);
  p2Sel.addEventListener("change", evaluate);
  evaluate();
}

// Moon Cusp Visualizer (Ch. 10)
function initMoonCuspVisualizer() {
  const canvas = document.getElementById("moonCuspCanvas");
  const slider = document.getElementById("moonElongSlider");
  if (!canvas || !slider) return;
  const ctx = canvas.getContext("2d");

  function render() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 320;

    const e = parseFloat(slider.value) || 45;
    const cuspData = calculateMoonCusp(e);

    const angulaEl = document.getElementById("moonAngulaDisplay");
    const tiltEl = document.getElementById("moonTiltDisplay");

    if (angulaEl) {
      angulaEl.innerHTML = `${cuspData.angulas} Aṅgulas / 12 (${cuspData.illumPercent}) &nbsp;•&nbsp; <span style="color:var(--gold-bright); font-size:0.95rem;">${cuspData.phaseName}</span>`;
    }
    if (tiltEl) {
      tiltEl.textContent = cuspData.tiltText;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2 - 10;
    const r = 85;

    // Background cosmic space backdrop
    const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, r * 1.6);
    bgGrad.addColorStop(0, "rgba(20, 30, 50, 0.4)");
    bgGrad.addColorStop(1, "rgba(6, 8, 14, 0)");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(cx, cy);

    // Rotate by Cusp Tilt Angle (Śṛṅgonnati tilt)
    const tiltRad = (cuspData.tiltDeg * Math.PI) / 180.0;
    ctx.rotate(tiltRad);

    // 1. Draw dark unilluminated Moon disc (Earthshine / Chandra-mandala)
    ctx.fillStyle = "#0a0f1d";
    ctx.strokeStyle = "rgba(245, 185, 66, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Subtle craters on the dark limb
    ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
    ctx.beginPath();
    ctx.arc(-25, -20, 14, 0, Math.PI * 2);
    ctx.arc(10, 30, 18, 0, Math.PI * 2);
    ctx.arc(-30, 25, 10, 0, Math.PI * 2);
    ctx.fill();

    // 2. Draw Illuminated Portion (Śukla Bhāga)
    const k = parseFloat(cuspData.angulas) / 12.0; // Illumination fraction in [0, 1]

    if (k > 0.005) {
      ctx.save();
      // Glowing moonlight halo
      ctx.shadowColor = "rgba(254, 240, 138, 0.55)";
      ctx.shadowBlur = 18;

      // Moonlight color gradient
      const moonGrad = ctx.createLinearGradient(-r, 0, r, 0);
      moonGrad.addColorStop(0, "#fefce8");
      moonGrad.addColorStop(0.5, "#fef08a");
      moonGrad.addColorStop(1, "#f59e0b");
      ctx.fillStyle = moonGrad;

      ctx.beginPath();

      if (k >= 0.995) {
        // Full Moon (Pūrṇimā) - complete illuminated sphere
        ctx.arc(0, 0, r, 0, Math.PI * 2);
      } else if (k < 0.5) {
        // Crescent Phase (k < 0.5):
        // Outer circular limb on right side: from -pi/2 to pi/2 clockwise
        ctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2, false);
        // Inner terminator ellipse curving inwards (positive x): from pi/2 to -pi/2 counter-clockwise
        const rx = Math.max(0.1, r * (1.0 - 2.0 * k));
        ctx.ellipse(0, 0, rx, r, 0, Math.PI / 2, -Math.PI / 2, true);
      } else {
        // Gibbous Phase (k >= 0.5, including Half Moon at k = 0.5):
        // Outer circular limb on right side: from -pi/2 to pi/2 clockwise
        ctx.arc(0, 0, r, -Math.PI / 2, Math.PI / 2, false);
        // Inner terminator ellipse bulging outwards to the left (negative x): from pi/2 to -pi/2 clockwise
        const rx = Math.max(0.1, r * (2.0 * k - 1.0));
        ctx.ellipse(0, 0, rx, r, 0, Math.PI / 2, -Math.PI / 2, false);
      }

      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // 3. Mark the Two Cusps (Horns / Śṛṅga)
    ctx.fillStyle = "var(--gold-bright)";
    // Top cusp
    ctx.beginPath();
    ctx.arc(0, -r, 3, 0, Math.PI * 2);
    ctx.fill();
    // Bottom cusp
    ctx.beginPath();
    ctx.arc(0, r, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore(); // Restore tilt rotation

    // 4. Horizon reference line and Horn Elevation Labels
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx - r - 45, cy + r + 20);
    ctx.lineTo(cx + r + 45, cy + r + 20);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "rgba(148, 163, 184, 0.85)";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("West Horizon Line (Kṣitija)", cx, cy + r + 35);

    // Elevation annotation
    if (Math.abs(cuspData.tiltDeg) > 1.5) {
      ctx.fillStyle = "var(--cyan-accent)";
      ctx.font = "bold 11px 'JetBrains Mono', monospace";
      const elevatedY = cy - r + (cuspData.tiltDeg > 0 ? -12 : 12);
      ctx.fillText(`▲ ${cuspData.elevatedHorn} Elevated (${Math.abs(cuspData.tiltDeg).toFixed(1)}°)`, cx, elevatedY);
    }
  }

  slider.addEventListener("input", render);
  window.addEventListener("resize", render);
  render();
}

// Combustion Checker (Ch. 9)
function initCombustionChecker() {
  const sel = document.getElementById("combustPlanetSelect");
  const elongInput = document.getElementById("combustElongInput");

  function check() {
    const p = sel.value;
    const elong = parseFloat(elongInput.value) || 8;
    const limit = SS_CONSTANTS.COMBUSTION_LIMITS_DEG[p] || 11;
    const isCombust = elong < limit;

    const statusEl = document.getElementById("combustStatusDisplay");
    const descEl = document.getElementById("combustDescDisplay");

    if (isCombust) {
      statusEl.textContent = "Combust (Asta • अस्त) — Invisible";
      statusEl.style.color = "#ef4444";
      descEl.textContent = `Planet is ${elong}° from the Sun (Threshold: ${limit}°). Obscured by solar irradiance.`;
    } else {
      statusEl.textContent = "Visible (Udaya • उदय) — Emerged";
      statusEl.style.color = "#10b981";
      descEl.textContent = `Planet is ${elong}° from the Sun (Threshold: ${limit}°). Resplendent as morning or evening star.`;
    }
  }

  sel.addEventListener("change", check);
  elongInput.addEventListener("input", check);
  check();
}

// Bhugola 4-City Rotating Clock (Ch. 12)
function initBhugolaCities() {
  const slider = document.getElementById("earthHourSlider");
  const valDisplay = document.getElementById("earthHourValDisplay");
  if (!slider) return;

  function update() {
    const h = parseFloat(slider.value);
    const lankaH = h % 24;
    const yamaH = (h + 6) % 24;
    const siddhaH = (h + 12) % 24;
    const romH = (h + 18) % 24;

    valDisplay.textContent = `${h.toFixed(1)}h (Lanka Reference)`;

    function getStatus(hour) {
      if (hour >= 5 && hour < 8) return { text: "Sunrise (Prabhāta)", bg: "rgba(255,123,37,0.25)", col: "#ff7b25" };
      if (hour >= 8 && hour < 16) return { text: "Noon / Daylight (Madhyāhna)", bg: "rgba(255,215,0,0.25)", col: "#ffd700" };
      if (hour >= 16 && hour < 19) return { text: "Sunset (Asta)", bg: "rgba(56,189,248,0.25)", col: "#38bdf8" };
      return { text: "Midnight (Ardharātra)", bg: "rgba(168,85,247,0.25)", col: "#a855f7" };
    }

    const cities = [
      { id: "cityLanka", h: lankaH },
      { id: "cityYamakoti", h: yamaH },
      { id: "citySiddhapura", h: siddhaH },
      { id: "cityRomaka", h: romH }
    ];

    cities.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) {
        const badge = el.querySelector(".city-status-badge");
        const st = getStatus(c.h);
        badge.textContent = `${st.text} (${Math.floor(c.h)}:00)`;
        badge.style.background = st.bg;
        badge.style.color = st.col;
      }
    });
  }

  slider.addEventListener("input", update);
  update();
}

// Armillary Sphere 3D Wireframe Canvas (Ch. 13)
function initArmillaryCanvas() {
  const canvas = document.getElementById("armillaryCanvas");
  const rotSlider = document.getElementById("armillaryRotSlider");
  if (!canvas || !rotSlider) return;
  const ctx = canvas.getContext("2d");

  function render() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 380;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = Math.min(cx, cy) * 0.75;
    const rot = (parseFloat(rotSlider.value) * Math.PI) / 180.0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Meridian (Yāmyottara)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Celestial Equator (Nāḍīvalaya)
    ctx.strokeStyle = "rgba(56, 189, 248, 0.75)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r * Math.sin(0.4), rot, 0, Math.PI * 2);
    ctx.stroke();

    // Ecliptic (Krāntivṛtta) - tilted by 24°
    ctx.strokeStyle = "rgba(245, 185, 66, 0.85)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r * Math.sin(0.4 + 24 * Math.PI / 180.0), rot + 0.35, 0, Math.PI * 2);
    ctx.stroke();

    // Horizon Ring (Kṣitija)
    ctx.strokeStyle = "rgba(16, 185, 129, 0.65)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * 1.05, r * 0.2, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Earth at center
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    ctx.fillStyle = "rgba(245, 185, 66, 0.9)";
    ctx.font = "11px 'JetBrains Mono'";
    ctx.fillText("Krāntivṛtta (Ecliptic 24°)", cx + r * 0.45, cy - r * 0.45);
    ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
    ctx.fillText("Nāḍīvalaya (Equator)", cx + r * 0.45, cy + 15);
  }

  rotSlider.addEventListener("input", render);
  window.addEventListener("resize", render);
  render();
}

// 14 Chapters Browser (Syllabus Viewer)
const TELUGU_CHAPTER_NAMES = [
  "మధ్యమాధికారము",
  "స్పష్టాధికారము",
  "త్రిప్రశ్నాధికారము",
  "చంద్రగ్రహణాధికారము",
  "సూర్యగ్రహణాధికారము",
  "ఛేద్యకాధికారము",
  "గ్రహయుత్యధికారము",
  "భగ్రహయుత్యధికారము",
  "ఉదయాస్తాధికారము",
  "చంద్రోదయాధికారము",
  "పాతాధికారము",
  "భూగోలాధ్యాయము",
  "యంత్రాధ్యాయము",
  "మానాధ్యాయము"
];

function initChapterViewer() {
  const tabsContainer = document.getElementById("chapterTabs");
  const contentContainer = document.getElementById("chapterContent");
  if (!tabsContainer || !contentContainer) return;

  tabsContainer.innerHTML = "";
  CHAPTERS_DATA.forEach((chap, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chapter-tab-btn ${idx === 0 ? "active" : ""}`;
    const teName = TELUGU_CHAPTER_NAMES[idx] || chap.nameEn;

    btn.innerHTML = `
      <span class="chap-badge">${chap.num}</span>
      <span class="chap-label">
        <span class="lang-en">${chap.nameEn}</span>
        <span class="lang-te" style="font-family:var(--font-telugu);">${teName}</span>
        <span class="lang-sa">${chap.nameSa}</span>
      </span>
    `;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".chapter-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderChapter(chap, teName);
    });
    tabsContainer.appendChild(btn);
  });

  function renderChapter(chap, teName) {
    const te = teName || TELUGU_CHAPTER_NAMES[chap.num - 1] || chap.nameEn;
    contentContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem;">
        <div>
          <span class="hero-pill" style="margin-bottom:0.35rem;">Chapter ${chap.num} of 14 • ${chap.versesCount} Canonical Verses</span>
          <h3 style="font-family:var(--font-display); font-size:1.85rem; color:#fff; margin:0.35rem 0;">
            ${chap.nameEn} <span style="color:var(--gold-bright); font-family:var(--font-telugu);">(${te})</span> <span style="font-size:1.1rem; color:#94a3b8;">${chap.nameSa}</span>
          </h3>
          <div style="color:var(--gold-bright); font-size:1.05rem; font-weight:600;">${chap.title}</div>
        </div>
        <div style="background:rgba(245, 185, 66, 0.1); border:1px solid var(--border-gold); padding:0.5rem 1rem; border-radius:10px; text-align:right;">
          <span style="font-size:0.72rem; color:var(--text-muted); display:block; text-transform:uppercase;">Calcutta Ed. Concordance</span>
          <strong style="color:var(--cyan-accent); font-family:var(--font-mono); font-size:0.95rem;">pp. ${chap.num === 1 ? '58–109' : chap.num === 2 ? '110–164' : chap.num === 3 ? '165–199' : chap.num === 4 ? '200–217' : chap.num === 5 ? '218–234' : chap.num === 6 ? '235–243' : chap.num === 7 ? '244–258' : chap.num === 8 ? '259–311' : chap.num === 9 ? '312–318' : chap.num === 10 ? '319–329' : chap.num === 11 ? '330–337' : chap.num === 12 ? '338–354' : chap.num === 13 ? '355–366' : '367–377'}</strong>
        </div>
      </div>

      <div style="background:rgba(0,0,0,0.4); border-left:4px solid var(--gold-primary); padding:1.25rem 1.5rem; border-radius:0 12px 12px 0; margin-bottom:1.5rem;">
        <div style="font-size:1.15rem; color:var(--gold-bright); font-weight:600; margin-bottom:0.5rem;">${chap.verse}</div>
        <div style="color:#e2e8f0; font-style:italic; font-size:0.95rem; line-height:1.6;">"${chap.translation}"</div>
      </div>

      <div class="grid-2" style="margin-bottom:1.5rem;">
        <div class="card" style="margin:0;">
          <div class="card-subtitle">Analytical Syllabus (Rev. Burgess 1860)</div>
          <h4 class="card-title">Chapter Contents &amp; Topical Breakdown</h4>
          <p style="font-size:0.88rem; line-height:1.6; color:#cbd5e1;">${chap.burgessSummary}</p>
        </div>
        <div class="card" style="margin:0;">
          <div class="card-subtitle">Mathematical Foundation</div>
          <h4 class="card-title">Mathematical Formula &amp; Astronomical Principle</h4>
          <div style="background:rgba(6, 182, 212, 0.08); border:1px solid rgba(6, 182, 212, 0.25); border-radius:8px; padding:0.85rem 1rem; margin-bottom:0.75rem;">
            <code style="color:var(--cyan-accent); font-family:var(--font-mono); font-size:0.88rem;">${chap.math}</code>
          </div>
          <p style="font-size:0.88rem; line-height:1.6; color:#cbd5e1;">${chap.proInsight}</p>
        </div>
      </div>
    `;
  }

  // Render initial chapter (Chapter 1)
  renderChapter(CHAPTERS_DATA[0], TELUGU_CHAPTER_NAMES[0]);
}

function initQuiz() {
  const container = document.getElementById("quizContainer");
  let currentIdx = 0;
  let score = 0;

  function renderQuestion() {
    if (currentIdx >= QUIZ_QUESTIONS.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:1.5rem;">
          <h3 style="font-family:var(--font-display); font-size:2rem; color:var(--gold-bright); margin-bottom:0.75rem;">Assessment Completed! 🏆</h3>
          <p style="font-size:1.2rem; color:#fff; margin-bottom:1.5rem;">You scored <strong>${score}</strong> out of <strong>${QUIZ_QUESTIONS.length}</strong> (${((score / QUIZ_QUESTIONS.length) * 100).toFixed(0)}%)</p>
          <button id="retryQuizBtn" class="btn-primary">Retake Astronomical Quiz</button>
        </div>
      `;
      document.getElementById("retryQuizBtn").addEventListener("click", () => {
        currentIdx = 0;
        score = 0;
        renderQuestion();
      });
      return;
    }

    const q = QUIZ_QUESTIONS[currentIdx];
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
        <span class="hero-pill">Question ${currentIdx + 1} of ${QUIZ_QUESTIONS.length}</span>
        <span style="font-family:var(--font-mono); font-size:0.9rem; color:var(--gold-bright);">Score: ${score}</span>
      </div>
      <h4 style="font-size:1.15rem; color:#fff; margin-bottom:1.5rem; line-height:1.5;">${q.q}</h4>
      <div id="quizOptionsWrap">
        ${q.options.map((opt, i) => `
          <div class="quiz-option" data-idx="${i}">
            <strong style="color:var(--gold-bright);">${String.fromCharCode(65 + i)}.</strong> ${opt}
          </div>
        `).join("")}
      </div>
      <div id="quizFeedback" style="display:none; margin-top:1.25rem; padding:1rem; border-radius:10px;"></div>
    `;

    document.querySelectorAll(".quiz-option").forEach(optEl => {
      optEl.addEventListener("click", () => {
        const chosen = parseInt(optEl.dataset.idx);
        const fb = document.getElementById("quizFeedback");
        fb.style.display = "block";

        if (chosen === q.answer) {
          optEl.classList.add("correct");
          score += 1;
          fb.style.background = "rgba(16, 185, 129, 0.15)";
          fb.style.border = "1px solid var(--emerald-accent)";
          fb.innerHTML = `<strong style="color:var(--emerald-accent);">Correct!</strong> ${q.explanation}`;
        } else {
          optEl.classList.add("wrong");
          document.querySelectorAll(".quiz-option")[q.answer].classList.add("correct");
          fb.style.background = "rgba(244, 63, 94, 0.15)";
          fb.style.border = "1px solid var(--rose-accent)";
          fb.innerHTML = `<strong style="color:var(--rose-accent);">Incorrect!</strong> ${q.explanation}`;
        }

        setTimeout(() => {
          currentIdx += 1;
          renderQuestion();
        }, 3200);
      });
    });
  }

  renderQuestion();
}

// 28 Yogatara Table Renderer
function initYogataraTable() {
  const tbody = document.getElementById("yogataraTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  YOGATARA_DATA.forEach(star => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-family:var(--font-mono); color:var(--text-muted);">${star.no}</td>
      <td><strong>${star.name}</strong></td>
      <td>${star.deity}</td>
      <td style="font-family:var(--font-mono); color:var(--gold-bright);">${star.dhruvaka}</td>
      <td style="font-family:var(--font-mono); color:var(--cyan-accent);">${star.vikshepa}</td>
      <td style="font-size:0.85rem; color:#e2e8f0;">${star.star} (mag ${star.mag})</td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================================================
// Chapter 8: Astrometric Nakshatra Engine & True Moon Computation
// ==========================================================================

const TELUGU_RASHIS = [
  "మేష రాశి (Aries ♈)", "వృషభ రాశి (Taurus ♉)", "మిథున రాశి (Gemini ♊)", "కర్కాటక రాశి (Cancer ♋)",
  "సింహ రాశి (Leo ♌)", "కన్యా రాశి (Virgo ♍)", "తులా రాశి (Libra ♎)", "వృశ్చిక రాశి (Scorpio ♏)",
  "ధనుస్సు రాశి (Sagittarius ♐)", "మకర రాశి (Capricorn ♑)", "కుంభ రాశి (Aquarius ♒)", "మీన రాశి (Pisces ♓)"
];

const TELUGU_NAKSHATRAS_DATA = [
  {
    nameTe: "అశ్విని",
    symbolTe: "గుర్రపు ముఖం (అశ్వ శిరస్సు)",
    deityTe: "అశ్వినీ దేవతలు (దివ్య వైద్యులు)",
    lordTe: "కేతువు (Ketu)",
    ganaTe: "దేవ గణము",
    natureTe: "లఘు / క్షిప్ర (శీఘ్ర చలన స్వభావము)",
    elementTe: "భూమి తత్వము (పృథ్వి)",
    muhurtaTe: "ఔషధ సేవనమునకు, వైద్యారంభమునకు, నూతన ప్రయాణములకు, వాహన కొనుగోళ్లకు మరియు విద్యాభ్యాసమునకు పరమ శుభప్రదం.",
    descTe: "రాశిచక్ర ప్రథమ నక్షత్రం. అమితమైన ప్రాణశక్తి, శీఘ్ర చురుకుదనం, నిరంతర కార్యదీక్ష మరియు అగ్రగామి సాహసోపేత వ్యక్తిత్వాన్ని ప్రసాదిస్తుంది."
  },
  {
    nameTe: "భరణి",
    symbolTe: "మట్టి పాత్ర / యోని చిహ్నము",
    deityTe: "యమధర్మరాజు (ధర్మాధిపతి)",
    lordTe: "శుక్రుడు (Venus)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ఉగ్ర / క్రూర (పరివర్తన స్వభావము)",
    elementTe: "భూమి తత్వము",
    muhurtaTe: "క్రమశిక్షణ, తపస్సు, పాత నిర్మాణాల తొలగింపు, శోధనలు మరియు దృఢ సంకల్ప కార్యములకు అనుకూలం.",
    descTe: "సృష్టి మరియు పునర్జన్మలకు ఆధారమైన శక్తిక్షేత్రం. తీవ్ర భావోద్వేగాలు, న్యాయబద్ధత, నిష్కపటమైన మనస్సు మరియు పరివర్తన శక్తిని కలిగి ఉంటారు."
  },
  {
    nameTe: "కృత్తిక",
    symbolTe: "కత్తి / జ్వాలా కత్తి / క్షౌరకత్తి",
    deityTe: "అగ్నిదేవుడు (పావకుడు)",
    lordTe: "సూర్యుడు (Sun)",
    ganaTe: "రాక్షస గణము",
    natureTe: "మిశ్ర / సాధారణ (దహన & శుద్ధీకరణ)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "యజ్ఞయాగాదులు, అగ్నిహోత్రం, లోహకార్యములు, వంటశాల ఆరంభం మరియు విమర్శనాత్మక పరిశోధనలకు శుభప్రదం.",
    descTe: "తేజోమయమైన అగ్నిస్వరూపం. సత్యాన్వేషణ, ప్రఖ్యాతి, నాయకత్వ పటిమ మరియు ప్రతికూలతలను భస్మం చేసి శుద్ధి చేసే శక్తి కలిగి ఉంటారు."
  },
  {
    nameTe: "రోహిణి",
    symbolTe: "రథము / దేవాలయ రథము / వటవృక్షం",
    deityTe: "బ్రహ్మదేవుడు / ప్రజాపతి (సృష్టికర్త)",
    lordTe: "చంద్రుడు (Moon)",
    ganaTe: "మనుష్య గణము",
    natureTe: "స్థిర / ధ్రువ (శాశ్వతత్వ స్వభావము)",
    elementTe: "భూమి తత్వము",
    muhurtaTe: "వివాహములకు, శంకుస్థాపనలకు, గృహప్రవేశం, వ్యవసాయారంభం మరియు దీర్ఘకాలిక పెట్టుబడులకు సర్వోత్తమం.",
    descTe: "చంద్రుని అత్యంత ప్రియమైన నివాసస్థానం. సౌందర్యం, కళాభిరుచి, భోగభాగ్యాలు, వ్యవసాయ సంపద మరియు సుస్థిరమైన పురోభివృద్ధిని అందిస్తుంది."
  },
  {
    nameTe: "మృగశిర",
    symbolTe: "జింక తల / హరిణ శిరస్సు",
    deityTe: "సోముడు (చంద్రుడు / అమృతకారకుడు)",
    lordTe: "కుజుడు (Mars)",
    ganaTe: "దేవ గణము",
    natureTe: "మృదు / మైత్ర (సౌమ్య పరిశోధన)",
    elementTe: "భూమి తత్వము",
    muhurtaTe: "కళలు, సంగీతం, ప్రయాణాలు, అన్వేషణలు, స్నేహ సంబంధాలు మరియు ఆభరణాల ధారణకు అత్యంత శ్రేష్ఠం.",
    descTe: "నిరంతర అన్వేషణ, శాంత స్వభావం, సునిశిత బుద్ధి మరియు నిర్మలమైన జిజ్ఞాసకు ప్రతీక. సత్యమును, ఆనందమును శోధించే సున్నిత హృదయం."
  },
  {
    nameTe: "ఆరుద్ర",
    symbolTe: "కన్నీటి బిందువు / వజ్రాయుధం",
    deityTe: "రుద్రుడు (లయకారుడు / ఈశ్వరుడు)",
    lordTe: "రాహువు (Rahu)",
    ganaTe: "మనుష్య గణము",
    natureTe: "తీక్షణ / దారుణ (విప్లవాత్మక శుద్ధీకరణ)",
    elementTe: "జల తత్వము",
    muhurtaTe: "శోధన, దుష్టనివారణ, శస్త్రచికిత్సలు, పాత అలవాట్ల విసర్జన మరియు ఆధ్యాత్మిక లోతైన ధ్యానమునకు ఉత్తమం.",
    descTe: "తుఫాను అనంతర ప్రశాంతతను తెచ్చే జ్ఞానోదయం. తీవ్ర మానసిక మథనమును అధిగమించి అద్భుత ఆధ్యాత్మిక వికాసాన్ని సాధించే శక్తి."
  },
  {
    nameTe: "పునర్వసు",
    symbolTe: "బాణాల పొది / ధనుర్బాణం",
    deityTe: "అదితి (దేవమాత)",
    lordTe: "గురుడు (Jupiter)",
    ganaTe: "దేవ గణము",
    natureTe: "చర / చల (పునరుద్ధరణ స్వభావము)",
    elementTe: "జల తత్వము",
    muhurtaTe: "ఆరోగ్య పునరుద్ధరణ, నూతన గృహనిర్మాణం, వివాహం, ఆధ్యాత్మిక సాధన మరియు ప్రయాణములకు మహా శుభకరం.",
    descTe: "వెలుగుల పునరాగమనం. కోల్పోయిన సంపదలను, ఆరోగ్యాన్ని తిరిగి పొందే దివ్య శక్తి. దయాగుణం, సత్యశీలత మరియు సార్వత్రిక సంక్షేమం."
  },
  {
    nameTe: "పుష్యమి",
    symbolTe: "ఆవు పొదుగు / కమలము / వృత్తం",
    deityTe: "బృహస్పతి (దేవగురువు)",
    lordTe: "శని (Saturn)",
    ganaTe: "దేవ గణము",
    natureTe: "క్షిప్ర / లఘు (పోషణ & జ్ఞానవృద్ధి)",
    elementTe: "జల తత్వము",
    muhurtaTe: "అన్ని నక్షత్రములలో అత్యంత పవిత్రమైన పుష్యమి; విద్యారంభం, యజ్ఞములు, పూజలు, వ్యాపారం మరియు దానధర్మములకు సర్వశ్రేష్ఠం.",
    descTe: "రాశిచక్ర కిరీట మణి. పరిపూర్ణ ఆధ్యాత్మిక పోషణ, గురుకృప, ధార్మిక నిష్ఠ, సదాచారము మరియు భౌతిక-ఆధ్యాత్మిక అభ్యున్నతిని ఇస్తుంది."
  },
  {
    nameTe: "ఆశ్లేష",
    symbolTe: "చుట్టచుట్టుకున్న సర్పం",
    deityTe: "సర్పములు / నాగదేవతలు",
    lordTe: "బుధుడు (Mercury)",
    ganaTe: "రాక్షస గణము",
    natureTe: "తీక్షణ / దారుణ (కుండలినీ శక్తి & గూఢవిద్య)",
    elementTe: "జల తత్వము",
    muhurtaTe: "యోగసాధన, కుండలినీ జాగరణ, రహస్య శాస్త్రాలు, విషచికిత్స మరియు రక్షణ వ్యూహాలకు అనుకూలం.",
    descTe: "కుండలినీ దివ్యశక్తి. సునిశిత గ్రహణశక్తి, మానసిక రహస్యాలను ఛేదించే మేధస్సు, రక్షణ భావం మరియు మార్మిక శక్తుల నిలయం."
  },
  {
    nameTe: "మఖ",
    symbolTe: "సింహాసనము / రాజభవనం",
    deityTe: "పితృదేవతలు (పూర్వీకులు)",
    lordTe: "కేతువు (Ketu)",
    ganaTe: "రాక్షస గణము",
    natureTe: "ఉగ్ర / క్రూర (పితృ గౌరవము & అధికారము)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "పితృ తర్పణములు, పూర్వీకుల పూజలు, పట్టాభిషేకము, పరిపాలనారంభం మరియు చారిత్రక పరిశోధనలకు అత్యుత్తమం.",
    descTe: "వంశపారంపర్య దివ్యతేజస్సు. సహజ నాయకత్వ లక్షణాలు, ఆత్మగౌరవం, వంశ గౌరవాన్ని కాపాడే నిష్ఠ మరియు ఘనమైన కీర్తి ప్రతిష్టలు."
  },
  {
    nameTe: "పుబ్బ (పూర్వఫల్గుణి)",
    symbolTe: "మంచం కోళ్ళు / డోలీ / అత్తి చెట్టు",
    deityTe: "భగుడు (సంపద & భాగ్యాధిపతి)",
    lordTe: "శుక్రుడు (Venus)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ఉగ్ర / క్రూర (భోగభాగ్య & సృజనాత్మకత)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "వివాహాలు, సంగీత-కళా సాధన, వినోదం, ప్రేమ సంబంధాలు మరియు సుఖసంతోషాల ఆస్వాదనకు శ్రేష్ఠం.",
    descTe: "ఆనందం, కళాత్మక సౌందర్యం మరియు సాంఘిక ఆకర్షణ. ఉదార స్వభావం, కళల పట్ల మక్కువ మరియు జీవితోత్సాహాన్ని నింపుతుంది."
  },
  {
    nameTe: "ఉత్తర (ఉత్తరఫల్గుణి)",
    symbolTe: "మంచం వెనుక కోళ్ళు / ఊయల",
    deityTe: "అర్యముడు (స్నేహం & ధర్మ రక్షకుడు)",
    lordTe: "సూర్యుడు (Sun)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ధ్రువ / స్థిర (స్థిరమైన సౌభాగ్యము)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "వివాహాలు, ఒడంబడికలు, పదవీ స్వీకారం, దానధర్మాలు మరియు స్థిర ఆస్తుల కొనుగోళ్లకు అత్యంత శుభం.",
    descTe: "కృతజ్ఞత, స్నేహశీలత మరియు సేవాధర్మం. ఉన్నత విలువలు, దాతృత్వం, పరోపకార బుద్ధి మరియు గౌరవప్రదమైన సమాజ స్థానం."
  },
  {
    nameTe: "హస్త",
    symbolTe: "హస్తము / పిడికిలి / ఆశీర్వాద హస్తం",
    deityTe: "సవితృ (సూర్యుని ప్రాతఃకాల శక్తి)",
    lordTe: "చంద్రుడు (Moon)",
    ganaTe: "దేవ గణము",
    natureTe: "క్షిప్ర / లఘు (నైపుణ్య హస్తకళలు)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "చేతివృత్తులు, శిల్పకళ, వ్యాపార ప్రణాళికలు, వైద్యం, ప్రయాణాలు మరియు గృహప్రవేశమునకు ఉత్తమం.",
    descTe: "మనోహరమైన హస్తకళా నైపుణ్యం. సంకల్పాలను ఆచరణలో పెట్టే కార్యదక్షత, వాక్చాతుర్యం, హాస్యప్రియత్వం మరియు నిర్మల బుద్ధి."
  },
  {
    nameTe: "చిత్త",
    symbolTe: "ప్రకాశవంతమైన రత్నం / ముత్యం",
    deityTe: "త్వష్ట / విశ్వకర్మ (దివ్య శిల్పి)",
    lordTe: "కుజుడు (Mars)",
    ganaTe: "రాక్షస గణము",
    natureTe: "మృదు / మైత్ర (దివ్య రూపకల్పన)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "భవన రూపకల్పన, ఆభరణాల తయారీ, చిత్రలేఖనం, వస్త్రధారణ మరియు సాంకేతిక ఆవిష్కరణలకు శ్రేష్ఠం.",
    descTe: "రత్నసమాన సౌందర్యం. అద్భుత సృజనాత్మక వాస్తు-శిల్ప ప్రతిభ, ఆకర్షణీయ వ్యక్తిత్వం మరియు అపూర్వ వస్తువుల రూపకల్పన శక్తి."
  },
  {
    nameTe: "స్వాతి",
    symbolTe: "లేత మొలక / పగడం / గాలిలో రెపరెపలాడే కొరడా",
    deityTe: "వాయుదేవుడు (పవన దేవుడు)",
    lordTe: "రాహువు (Rahu)",
    ganaTe: "దేవ గణము",
    natureTe: "చర / చల (స్వతంత్ర & గతిశీలత)",
    elementTe: "అగ్ని తత్వము",
    muhurtaTe: "వాణిజ్యం, విద్య, విదేశీ ప్రయాణాలు, కళా ప్రదర్శనలు మరియు స్వేచ్ఛాయుత పరిశోధనలకు అత్యంత అనుకూలం.",
    descTe: "స్వతంత్ర భావాలు, వినమ్రత మరియు వ్యాపార దక్షత. స్వాతి బిందువు ముత్యంగా మారినట్లుగా, నిరంతర పరిశ్రమతో అద్భుత విజయాలు సాధిస్తారు."
  },
  {
    nameTe: "విశాఖ",
    symbolTe: "విజయోత్సవ తోరణం / కుమ్మరి చక్రం",
    deityTe: "ఇంద్రాగ్నులు (ఇంద్రుడు & అగ్నిదేవుడు)",
    lordTe: "గురుడు (Jupiter)",
    ganaTe: "రాక్షస గణము",
    natureTe: "మిశ్ర / సాధారణ (లక్ష్య సాధన & విజయం)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "పోటీ పరీక్షలు, ఉన్నత విద్యారంభం, రాజకీయాలు, లక్ష్యసాధన మరియు ఆధ్యాత్మిక దీక్షలకు అనుకూలం.",
    descTe: "ఏకాగ్రత, పట్టుదల మరియు అంతిమ విజయం. ఎదురయ్యే సవాళ్లను అధిగమించి నిర్దేశిత లక్ష్యాలను సాధించే అచంచల సంకల్పశక్తి."
  },
  {
    nameTe: "అనూరాధ",
    symbolTe: "కమల పుష్పం / విజయ తోరణం",
    deityTe: "మిత్రుడు (సౌహార్ద్ర సూర్య దేవుడు)",
    lordTe: "శని (Saturn)",
    ganaTe: "దేవ గణము",
    natureTe: "మృదు / మైత్ర (స్నేహం & అంతర్జాతీయ సంబంధాలు)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "స్నేహ సంబంధాలు, సంస్థల స్థాపన, ప్రయాణాలు, ఆధ్యాత్మిక బృంద సాధన మరియు శాంతి చర్చలకు ఉత్తమం.",
    descTe: "బురదలో వికసించే పద్మం వంటి నిర్మల భక్తి. స్నేహశీలత, ఓర్పు, విదేశాలలో రాణించే సామర్థ్యం మరియు అంతర్గత శాంతి."
  },
  {
    nameTe: "జ్యేష్ఠ",
    symbolTe: "వృత్తాకార తాయెత్తు / చెవిపోగు / గొడుగు",
    deityTe: "ఇంద్రుడు (దేవేంద్రుడు / రక్షకుడు)",
    lordTe: "బుధుడు (Mercury)",
    ganaTe: "రాక్షస గణము",
    natureTe: "తీక్షణ / దారుణ (శ్రేష్ఠత & రక్షణ)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "రక్షణ వ్యూహాలు, నాయకత్వ బాధ్యతల స్వీకారం, ధైర్యసాహస కార్యములు మరియు సంకల్ప సాధనకు శ్రేష్ఠం.",
    descTe: "జ్యేష్ఠతా భావం (అగ్రగామిత్వం). రక్షణాత్మక శక్తి, ప్రతిభ, కష్టాలను ఎదుర్కొనే మనోధైర్యం మరియు నాయకత్వ వైభవం."
  },
  {
    nameTe: "మూల",
    symbolTe: "వేర్ల కట్ట / సింహపు తోక / అంకుశం",
    deityTe: "నిరృతి (మూలకారణ & వినాశన దేవత)",
    lordTe: "కేతువు (Ketu)",
    ganaTe: "రాక్షస గణము",
    natureTe: "తీక్షణ / దారుణ (మూల పరిశోధన)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "శాస్త్రీయ పరిశోధనలు, పునాది తవ్వకాలు, మూలికా వైద్యం మరియు ఆధ్యాత్మిక ఆత్మశోధనకు ఉత్తమం.",
    descTe: "విషయాల మూలాలను శోధించే తీక్షణ బుద్ధి. అభూతకల్పనలను ఛేదించి సత్యాన్ని గ్రహించే అన్వేషణ మరియు వేదాంత విచారణ."
  },
  {
    nameTe: "పూర్వాషాఢ",
    symbolTe: "చేప / చేట / ఏనుగు దంతం",
    deityTe: "ఆపః (జలదేవత)",
    lordTe: "శుక్రుడు (Venus)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ఉగ్ర / క్రూర (అజేయ సంకల్పం)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "జలసంబంధిత పనులు, వ్యవసాయం, వాక్చాతుర్య ప్రదర్శన మరియు కష్టసాధ్యమైన పనుల ఆరంభమునకు మంచిది.",
    descTe: "అపరాజిత శక్తి (ఎన్నడూ ఓటమి ఎరుగని స్వభావం). ఉత్సాహం, స్నేహశీలత, ఆత్మవిశ్వాసం మరియు సమాజాన్ని ప్రభావితం చేసే వ్యక్తిత్వం."
  },
  {
    nameTe: "ఉత్తరాషాఢ",
    symbolTe: "చిన్న మంచం / ఏనుగు దంతాలు",
    deityTe: "విశ్వేదేవతలు (సార్వత్రిక ధర్మ దేవతలు)",
    lordTe: "సూర్యుడు (Sun)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ధ్రువ / స్థిర (శాశ్వత ధర్మ విజయం)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "శంకుస్థాపనలు, సార్వజనిక కార్యక్రమాలు, న్యాయ వ్యవహారాలు మరియు నూతన ఒప్పందములకు పరమ శుభం.",
    descTe: "సార్వత్రిక ధర్మనిష్ఠ, వినయం మరియు శాశ్వత కీర్తి. నిష్కళంక ప్రవర్తన, అపారమైన సహనం మరియు అజేయమైన న్యాయ బుద్ధి."
  },
  {
    nameTe: "శ్రవణం",
    symbolTe: "చెవి / త్రివిక్రమ పాదత్రయం",
    deityTe: "శ్రీ మహావిష్ణువు (జగద్రక్షకుడు)",
    lordTe: "చంద్రుడు (Moon)",
    ganaTe: "దేవ గణము",
    natureTe: "చర / చల (జ్ఞాన శ్రవణం & సంచారము)",
    elementTe: "వాయు తత్వము",
    muhurtaTe: "విద్యాభ్యాసం, వేద శాస్త్ర పఠనం, గురూపదేశం, ఆధ్యాత్మిక తీర్థయాత్రలు మరియు సభారంభమునకు పరమ శ్రేష్ఠం.",
    descTe: "దివ్య శ్రవణ జ్ఞానం. ప్రవచనములు వినుట, విజ్ఞానాన్ని భద్రపరచుట, ఉన్నత నైతిక ప్రవర్తన మరియు పరోపకార భావము."
  },
  {
    nameTe: "ధనిష్ఠ",
    symbolTe: "మృదంగం / వేణువు / డమరుకం",
    deityTe: "అష్టవసువులు (అష్ట ప్రకృతి శక్తులు)",
    lordTe: "కుజుడు (Mars)",
    ganaTe: "రాక్షస గణము",
    natureTe: "చర / చల (సంగీత లయ & ధనవృద్ధి)",
    elementTe: "ఆకాశ తత్వము",
    muhurtaTe: "సంగీత సాధన, నృత్యం, రియల్ ఎస్టేట్, బ్యాంకింగ్ మరియు ధన సంబంధిత కార్యములకు అత్యంత లాభదాయకం.",
    descTe: "ధన సంపద మరియు సంగీత లయల సమ్మేళనం. విశాల హృదయం, ధైర్యం, నాయకత్వం మరియు ఆదర్శవంతమైన జీవన శైలి."
  },
  {
    nameTe: "శతభిషం",
    symbolTe: "వంద వైద్యులు / ఖాళీ వృత్తం / శత నక్షత్ర సమూహం",
    deityTe: "వరుణ దేవుడు (సముద్రాధిపతి & విశ్వ నియంత)",
    lordTe: "రాహువు (Rahu)",
    ganaTe: "రాక్షస గణము",
    natureTe: "చర / చల (రహస్య నివారణ & వైద్యం)",
    elementTe: "ఆకాశ తత్వము",
    muhurtaTe: "వైద్యం, మూలికా ఔషధ తయారీ, ఖగోళ పరిశోధన, జ్యోతిషం మరియు యోగసాధనకు శ్రేష్ఠం.",
    descTe: "వంద రోగాలను నయం చేసే దివ్య వైద్యశక్తి. లోతైన మార్మిక చింతన, రహస్య పరిజ్ఞానం, ఏకాంత ప్రియత్వం మరియు స్వతంత్ర దృష్టి."
  },
  {
    nameTe: "పూర్వాభాద్ర",
    symbolTe: "శవపేటిక కోళ్ళు / రెండు ముఖాల మనిషి / కత్తి",
    deityTe: "అజైకపాదుడు (ఏకపాద రుద్రుడు)",
    lordTe: "గురుడు (Jupiter)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ఉగ్ర / క్రూర (తీవ్ర తపస్సు & పరివర్తన)",
    elementTe: "ఆకాశ తత్వము",
    muhurtaTe: "ఆధ్యాత్మిక తపస్సు, గూఢ పరిశోధనలు, భయనివారణ పూజలు మరియు వైరాగ్య సాధనకు ఉత్తమం.",
    descTe: "తీవ్రమైన ఆధ్యాత్మిక అగ్ని. భౌతిక సుఖాలను దాటి మోక్ష మార్గంలో పయనించే తపశ్శక్తి, సత్యవాక్ మరియు ప్రగాఢ తాత్విక దృష్టి."
  },
  {
    nameTe: "ఉత్తరాభాద్ర",
    symbolTe: "సముద్ర సర్పం / శయనించిన వీరుడు",
    deityTe: "అహిర్బుధ్న్యుడు (అగాధ జలాల్లోని దివ్య సర్పం)",
    lordTe: "శని (Saturn)",
    ganaTe: "మనుష్య గణము",
    natureTe: "ధ్రువ / స్థిర (సమస్థితి & జ్ఞాన శాంతి)",
    elementTe: "ఆకాశ తత్వము",
    muhurtaTe: "శాంతి పూజలు, ధ్యానం, ఆశ్రమ నిర్మాణం, సముద్ర ప్రయాణాలు మరియు దీర్ఘకాలిక విద్యా సంస్థల స్థాపనకు ఉత్తమం.",
    descTe: "ప్రశాంత గంభీర జ్ఞానసాగరం. అపారమైన ఓర్పు, స్వార్థరహిత సేవ, ప్రశాంత మనస్సు మరియు ఉన్నత ఆధ్యాత్మిక పరిపక్వత."
  },
  {
    nameTe: "రేవతి",
    symbolTe: "చేపల జంట / డోలు",
    deityTe: "పూషన్ (మార్గదర్శి & పశు సంరక్షకుడు)",
    lordTe: "బుధుడు (Mercury)",
    ganaTe: "దేవ గణము",
    natureTe: "మృదు / మైత్ర (శుభప్రద పరిపూర్ణత)",
    elementTe: "ఆకాశ తత్వము",
    muhurtaTe: "వివాహాలు, ప్రయాణాలు, పెంపుడు జంతువుల సంరక్షణ, కళలు మరియు సమస్త శుభకార్యములకు పరిపూర్ణ నక్షత్రం.",
    descTe: "రాశిచక్ర అంతిమ నక్షత్రం. జీవన ప్రయాణానికి దివ్య మార్గదర్శనం, దయాద్ర హృదయం, కళాసౌందర్యం మరియు ఆత్మశాంతినిచ్చే పరిపూర్ణత."
  }
];

// Computes the Sidereal True Moon (Drik-Gaṇita / Bīja-corrected Sūrya Siddhānta)
// plus the raw 500 CE Sūrya Siddhānta Manda Moon for comparison
function getSSMoonPosition(targetDate) {
  // Exact UTC Julian Day from local Date object
  const jd = targetDate.getTime() / 86400000.0 + 2440587.5;
  // Ujjain (75°46' E) Ahargaṇa for raw 500 CE Sūrya Siddhānta reference
  const ahargana = jd - (SS_CONSTANTS.KALI_EPOCH_JD - 5.051 / 24.0);

  // 1. Raw 500 CE Sūrya Siddhānta Mean & Manda Moon
  let moonMeanRev = (ahargana * SS_CONSTANTS.REVOLUTIONS.moon) / SS_CONSTANTS.SAVANA_DAYS_MAHAYUGA;
  let moonFrac = moonMeanRev - Math.floor(moonMeanRev);
  if (moonFrac < 0) moonFrac += 1.0;
  let meanMoonDeg = moonFrac * 360.0;

  let apogeeRev = (ahargana * SS_CONSTANTS.REVOLUTIONS.moonApogee) / SS_CONSTANTS.SAVANA_DAYS_MAHAYUGA;
  let apogeeFrac = apogeeRev - Math.floor(apogeeRev);
  if (apogeeFrac < 0) apogeeFrac += 1.0;
  let apogeeDeg = apogeeFrac * 360.0;

  let anomaly = (meanMoonDeg - apogeeDeg + 360.0) % 360.0;
  let sinAnomaly = Math.sin((anomaly * Math.PI) / 180.0);
  let mandaPhala = (32.0 / 360.0) * sinAnomaly * (3438.0 / 60.0);
  let rawSSDeg = (meanMoonDeg - mandaPhala + 360.0) % 360.0;

  // 2. Drik-Gaṇita (Bīja-corrected) True Sidereal Moon (Meeus/ELP2000 + Chitrapakṣa Ayanāṁśa)
  const T = (jd - 2451545.0) / 36525.0;
  const Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + (T * T * T) / 538841.0;
  const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T;
  const M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
  const Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T;
  const F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T;
  const r = Math.PI / 180.0;

  const tropicalMoonDeg =
    Lp +
    6.288774 * Math.sin(Mp * r) +
    1.274027 * Math.sin((2 * D - Mp) * r) +
    0.658314 * Math.sin(2 * D * r) +
    0.213618 * Math.sin(2 * Mp * r) -
    0.185116 * Math.sin(M * r) -
    0.114332 * Math.sin(2 * F * r) +
    0.058793 * Math.sin((2 * D - 2 * Mp) * r) +
    0.057066 * Math.sin((2 * D - M - Mp) * r) +
    0.053322 * Math.sin((2 * D + Mp) * r) +
    0.045758 * Math.sin((2 * D - M) * r) -
    0.040923 * Math.sin((M - Mp) * r) -
    0.034720 * Math.sin(D * r) -
    0.030383 * Math.sin((M + Mp) * r);

  // Chitrapakṣa (Lahiri) Ayanāṁśa (23°51'11" at J2000.0 + 50.29"/yr)
  const ayanamsa = 23.853083 + ((jd - 2451545.0) / 365.25) * (50.29 / 3600.0);
  const trueMoonDeg = (((tropicalMoonDeg - ayanamsa) % 360.0) + 360.0) % 360.0;

  // Each Nakshatra = 800 arcminutes = 13° 20' = 13.333333°
  const totalArcMin = trueMoonDeg * 60.0;
  const nakIdx = Math.floor(totalArcMin / 800.0) % 27;
  const arcMinInNak = totalArcMin % 800.0;
  const pada = Math.min(4, Math.floor(arcMinInNak / 200.0) + 1);
  const progressPercent = Math.min(100.0, Math.max(0.0, (arcMinInNak / 800.0) * 100.0));

  const degInt = Math.floor(trueMoonDeg);
  const minFloat = (trueMoonDeg - degInt) * 60.0;
  const minInt = Math.floor(minFloat);
  const secInt = Math.floor((minFloat - minInt) * 60.0);

  const rashiIdx = Math.floor(trueMoonDeg / 30.0) % 12;
  const degInRashi = (trueMoonDeg % 30.0).toFixed(2);

  // Pada degree range within this Nakshatra
  const padaStarts = ["0°00'", "3°20'", "6°40'", "10°00'"];
  const padaEnds = ["3°20'", "6°40'", "10°00'", "13°20'"];
  const padaRange = `${padaStarts[pada - 1]} - ${padaEnds[pada - 1]}`;

  return {
    jd,
    ahargana,
    targetDate,
    meanMoonDeg,
    apogeeDeg,
    mandaPhala,
    trueMoonDeg,
    dms: `${degInt}° ${minInt}' ${secInt}"`,
    rashi: `${RASHIS[rashiIdx].en} (${RASHIS[rashiIdx].symbol} ${degInRashi}°)`,
    rashiName: RASHIS[rashiIdx].en,
    rashiSymbol: RASHIS[rashiIdx].symbol,
    rashiIdx,
    degInRashi,
    nakIdx,
    pada,
    padaRange,
    progressPercent,
    arcMinInNak,
    nakData: NAKSHATRAS_DETAILED[nakIdx], nakTe: TELUGU_NAKSHATRAS_DATA[nakIdx], nameTe: TELUGU_NAKSHATRAS_DATA[nakIdx].nameTe
  };
}

// Active Nakshatra of the Day & Moon Transit Inspector
let globalCurrentNakDate = new Date();
let updateGlobalNakDisplay = null;

function initNakshatraToday() {
  const dateInput = document.getElementById("nakDateInput");
  const nowBtn = document.getElementById("nakNowBtn");
  const forecastBox = document.getElementById("nakForecastContainer");

  function formatDateForInput(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function updateDisplay(dateObj) {
    globalCurrentNakDate = new Date(dateObj);
    if (dateInput) {
      dateInput.value = formatDateForInput(globalCurrentNakDate);
    }

    const moonPos = getSSMoonPosition(globalCurrentNakDate);
    const nak = moonPos.nakData;
    const nakTe = moonPos.nakTe;
    const curLang = document.body.getAttribute("data-lang") || "dual";

    // Active Card Elements
    const iconEl = document.getElementById("nakActiveIcon");
    const nameEl = document.getElementById("nakActiveName");
    const devEl = document.getElementById("nakActiveDev");
    const moonDegEl = document.getElementById("nakActiveMoonDeg");
    const rashiEl = document.getElementById("nakActiveRashi");
    const progTextEl = document.getElementById("nakProgressText");
    const progFillEl = document.getElementById("nakProgressFill");

    if (iconEl) iconEl.textContent = nak.symbolIcon;
    if (nameEl) {
      if (curLang === "telugu") {
        nameEl.innerHTML = `<span style="font-family:var(--font-telugu); color:#fff; font-size:1.85rem;">${nakTe.nameTe} నక్షత్రం</span>`;
      } else if (curLang === "english") {
        nameEl.innerHTML = `${nak.nameEn} <span style="font-size:1rem; color:#94a3b8;">(${nak.nameSa})</span>`;
      } else {
        nameEl.innerHTML = `${nak.nameEn} <span style="font-size:1.2rem; color:var(--gold-bright); font-family:var(--font-telugu);">(${nakTe.nameTe})</span> <span style="font-size:0.92rem; color:#94a3b8;">${nak.nameSa}</span>`;
      }
    }

    const safeRashiIdx = moonPos.rashiIdx !== undefined ? moonPos.rashiIdx : (Math.floor(moonPos.trueMoonDeg / 30.0) % 12);
    const safeDegInRashi = moonPos.degInRashi !== undefined ? moonPos.degInRashi : (moonPos.trueMoonDeg % 30.0).toFixed(2);
    const teluguRashi = TELUGU_RASHIS[safeRashiIdx] || RASHIS[safeRashiIdx].en;

    if (devEl) {
      if (curLang === "telugu") {
        devEl.innerHTML = `<span style="font-family:var(--font-telugu);">${nakTe.symbolTe}</span> • ${moonPos.padaRange} (${teluguRashi})`;
      } else if (curLang === "english") {
        devEl.textContent = `${nak.symbolText} • ${nak.range}`;
      } else {
        devEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.symbolTe}</span> • ${nak.symbolText} • ${nak.range}`;
      }
    }

    if (moonDegEl) moonDegEl.textContent = moonPos.dms;

    if (rashiEl) {
      if (curLang === "telugu") {
        rashiEl.innerHTML = `<span style="font-family:var(--font-telugu);">${teluguRashi} (${safeDegInRashi}°)</span>`;
      } else if (curLang === "english") {
        rashiEl.textContent = moonPos.rashi;
      } else {
        rashiEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${teluguRashi}</span> / ${moonPos.rashi}`;
      }
    }

    if (progTextEl) {
      if (curLang === "telugu") {
        progTextEl.innerHTML = `<span style="font-family:var(--font-telugu);">${moonPos.progressPercent.toFixed(1)}% నక్షత్ర ప్రవేశం • ప్రవేశ పాదము: <strong>${moonPos.pada}వ పాదము</strong> (${moonPos.padaRange})</span>`;
      } else if (curLang === "english") {
        progTextEl.textContent = `${moonPos.progressPercent.toFixed(1)}% through asterism • Active: Pāda ${moonPos.pada} (${moonPos.padaRange})`;
      } else {
        progTextEl.innerHTML = `${moonPos.progressPercent.toFixed(1)}% • <span style="font-family:var(--font-telugu); color:var(--gold-bright);">${moonPos.pada}వ పాదం</span> (Pāda ${moonPos.pada} • ${moonPos.padaRange})`;
      }
    }

    if (progFillEl) {
      progFillEl.style.width = `${moonPos.progressPercent}%`;
    }

    // Highlight active Pada segment
    for (let p = 1; p <= 4; p++) {
      const pEl = document.getElementById("pada_" + p);
      if (pEl) {
        if (p === moonPos.pada) {
          pEl.classList.add("active-pada");
          if (curLang === "telugu") {
            pEl.innerHTML = `<strong style="font-family:var(--font-telugu);">${p}వ పాదము (✓ ప్రస్తుత సంచారము)</strong><br><span style="font-size:0.72rem; opacity:0.9;">${moonPos.padaRange}</span>`;
          } else if (curLang === "english") {
            pEl.innerHTML = `<strong>Pāda ${p} (✓ Active)</strong><br><span style="font-size:0.7rem; opacity:0.85;">${moonPos.padaRange}</span>`;
          } else {
            pEl.innerHTML = `<strong>Pāda ${p} <span style="font-family:var(--font-telugu);">(${p}వ పాదం)</span></strong><br><span style="font-size:0.7rem;">${moonPos.padaRange}</span>`;
          }
        } else {
          pEl.classList.remove("active-pada");
          const starts = ["0°00'", "3°20'", "6°40'", "10°00'"];
          const ends = ["3°20'", "6°40'", "10°00'", "13°20'"];
          if (curLang === "telugu") {
            pEl.innerHTML = `<span style="font-family:var(--font-telugu);">${p}వ పాదము</span> (${starts[p-1]} - ${ends[p-1]})`;
          } else {
            pEl.innerHTML = `Pāda ${p} (${starts[p-1]} - ${ends[p-1]})`;
          }
        }
      }
    }

    // Key Attributes Grid
    const deityEl = document.getElementById("nakActiveDeity");
    const lordEl = document.getElementById("nakActiveLord");
    const starEl = document.getElementById("nakActiveStar");
    const ganaEl = document.getElementById("nakActiveGana");
    const natureEl = document.getElementById("nakActiveNature");
    const elemEl = document.getElementById("nakActiveElement");
    const muhurtaEl = document.getElementById("nakActiveMuhurta");
    const syllEl = document.getElementById("nakActiveSyllable");

    if (deityEl) {
      if (curLang === "telugu") {
        deityEl.innerHTML = `<span style="font-family:var(--font-telugu); color:#fff;">${nakTe.deityTe}</span>`;
      } else if (curLang === "english") {
        deityEl.textContent = nak.deity;
      } else {
        deityEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:0.9rem;">${nakTe.deityTe}</span><br><span style="font-size:0.75rem; color:#94a3b8;">${nak.deity}</span>`;
      }
    }

    if (lordEl) {
      if (curLang === "telugu") {
        lordEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.lordTe}</span>`;
      } else if (curLang === "english") {
        lordEl.textContent = nak.lord;
      } else {
        lordEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.lordTe}</span> <span style="font-size:0.75rem; color:#94a3b8;">(${nak.lord})</span>`;
      }
    }

    if (starEl) {
      starEl.innerHTML = `<span style="color:var(--cyan-accent);">${nak.star}</span>`;
    }

    if (ganaEl) {
      if (curLang === "telugu") {
        ganaEl.innerHTML = `<span style="font-family:var(--font-telugu); color:#fff;">${nakTe.ganaTe}</span>`;
      } else if (curLang === "english") {
        ganaEl.textContent = nak.gana;
      } else {
        ganaEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.ganaTe}</span> <span style="font-size:0.75rem; color:#94a3b8;">(${nak.gana})</span>`;
      }
    }

    if (natureEl) {
      if (curLang === "telugu") {
        natureEl.innerHTML = `<span style="font-family:var(--font-telugu); color:#fff; font-size:0.84rem;">${nakTe.natureTe}</span>`;
      } else if (curLang === "english") {
        natureEl.textContent = nak.nature;
      } else {
        natureEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:0.85rem;">${nakTe.natureTe}</span><br><span style="font-size:0.74rem; color:#94a3b8;">${nak.nature}</span>`;
      }
    }

    if (elemEl) {
      if (curLang === "telugu") {
        elemEl.innerHTML = `<span style="font-family:var(--font-telugu); color:#fff;">${nakTe.elementTe}</span>`;
      } else if (curLang === "english") {
        elemEl.textContent = nak.element;
      } else {
        elemEl.innerHTML = `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.elementTe}</span> <span style="font-size:0.75rem; color:#94a3b8;">(${nak.element})</span>`;
      }
    }

    if (muhurtaEl) {
      if (curLang === "telugu") {
        muhurtaEl.innerHTML = `<span style="font-family:var(--font-telugu); font-size:0.9rem; line-height:1.6; color:#e2e8f0;">${nakTe.muhurtaTe}</span>`;
      } else if (curLang === "english") {
        muhurtaEl.textContent = nak.muhurta;
      } else {
        muhurtaEl.innerHTML = `<div style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:0.9rem; line-height:1.55; margin-bottom:0.35rem;">${nakTe.muhurtaTe}</div><div style="font-size:0.8rem; color:#94a3b8; line-height:1.4;">${nak.muhurta}</div>`;
      }
    }

    if (syllEl) {
      const activeSyll = nak.syllables[moonPos.pada - 1] || nak.syllables[0];
      if (curLang === "telugu") {
        syllEl.innerHTML = `<span style="font-family:var(--font-telugu);">ప్రస్తుత ${moonPos.pada}వ పాదం అక్షరం:</span> <span style="color:var(--gold-bright); font-weight:800; font-size:1.15rem;">"${activeSyll}"</span> &nbsp;•&nbsp; <span style="font-size:0.82rem; color:#cbd5e1;">అన్ని పాదాలు: ${nak.syllables.join(" • ")}</span>`;
      } else {
        syllEl.innerHTML = `<span style="color:var(--gold-bright); font-weight:800; font-size:1.15rem;">"${activeSyll}"</span> (Pāda ${moonPos.pada} • ${moonPos.pada}వ పాదం) &nbsp;•&nbsp; All Pādas: ${nak.syllables.join(" • ")}`;
      }
    }

    // Render 7-day forecast timeline
    if (forecastBox) {
      forecastBox.innerHTML = "";
      const baseDate = new Date(globalCurrentNakDate);

      for (let i = 0; i < 7; i++) {
        const fDate = new Date(baseDate);
        fDate.setDate(baseDate.getDate() + i);
        const fPos = getSSMoonPosition(fDate);
        const fNak = fPos.nakData;
        const fTe = fPos.nakTe;

        const card = document.createElement("div");
        card.className = "forecast-card-item" + (i === 0 ? " selected-day" : "");
        card.title = `Click to inspect ${fDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
        
        let dayTitle = i === 0 ? "★ Current" : fDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        if (curLang === "telugu" && i === 0) dayTitle = "★ ప్రస్తుత దినం";

        card.innerHTML = `
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${dayTitle}</div>
          <div style="font-size:1.85rem; margin:0.35rem 0;">${fNak.symbolIcon}</div>
          <strong style="color:#fff; font-size:0.86rem; display:block;">${curLang === "telugu" ? fTe.nameTe : fNak.nameEn}</strong>
          <span style="font-size:0.72rem; color:var(--gold-dim); display:block; font-family:var(--font-telugu);">${fTe.nameTe} (${fPos.pada}వ పాదం)</span>
          <span style="font-size:0.7rem; color:var(--cyan-accent);">${fPos.rashiName}</span>
        `;

        card.addEventListener("click", () => {
          updateDisplay(fDate);
        });

        forecastBox.appendChild(card);
      }
    }
  }

  updateGlobalNakDisplay = updateDisplay;

  // Event Listeners for Date Controller
  if (dateInput) {
    dateInput.addEventListener("change", (e) => {
      if (e.target.value) {
        const parts = e.target.value.split("-");
        const selected = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0);
        updateDisplay(selected);
      }
    });

    dateInput.addEventListener("input", (e) => {
      if (e.target.value) {
        const parts = e.target.value.split("-");
        if (parts.length === 3 && parts[0].length === 4) {
          const selected = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]), 12, 0, 0);
          updateDisplay(selected);
        }
      }
    });
  }

  if (nowBtn) {
    nowBtn.addEventListener("click", () => {
      updateDisplay(new Date());
    });
  }

  // Initial render with today's date
  updateDisplay(new Date());
}

// Personal Vedic Astrometry: Discover Your Janma Nakshatra Tool
let lastCalculatedBirthDate = null;

function initBirthNakshatraTool() {
  const bDate = document.getElementById("birthDateInput");
  const bTime = document.getElementById("birthTimeInput");
  const btn = document.getElementById("birthNakCalcBtn");
  const resultArea = document.getElementById("birthNakResultArea");

  if (!btn) return;

  if (bDate && !bDate.value) {
    bDate.value = "1995-08-15";
  }

  function renderBirthResult(birthDateObj) {
    lastCalculatedBirthDate = birthDateObj;
    const moonPos = getSSMoonPosition(birthDateObj);
    const nak = moonPos.nakData;
    const nakTe = moonPos.nakTe;
    const birthSyllable = nak.syllables[moonPos.pada - 1] || nak.syllables[0];
    const curLang = document.body.getAttribute("data-lang") || "dual";

    // Prepare bilingual texts
    const titleHeader = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu);">${nakTe.nameTe} నక్షత్రము</span>`
      : curLang === "english"
      ? `${nak.nameEn}`
      : `${nak.nameEn} <span style="color:var(--gold-bright); font-family:var(--font-telugu);">(${nakTe.nameTe})</span>`;

    const padaText = curLang === "telugu"
      ? `${moonPos.pada}వ పాదము (${moonPos.padaRange})`
      : curLang === "english"
      ? `Pāda ${moonPos.pada} (${moonPos.padaRange})`
      : `Pāda ${moonPos.pada} (${moonPos.pada}వ పాదం • ${moonPos.padaRange})`;

    const safeRashiIdx = moonPos.rashiIdx !== undefined ? moonPos.rashiIdx : (Math.floor(moonPos.trueMoonDeg / 30.0) % 12);
    const safeDegInRashi = moonPos.degInRashi !== undefined ? moonPos.degInRashi : (moonPos.trueMoonDeg % 30.0).toFixed(2);
    const teluguRashi = TELUGU_RASHIS[safeRashiIdx] || RASHIS[safeRashiIdx].en;

    const rashiText = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu);">${teluguRashi} (${safeDegInRashi}°)</span>`
      : curLang === "english"
      ? `${moonPos.rashi}`
      : `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${teluguRashi}</span> / ${moonPos.rashi}`;

    const deityText = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu);">${nakTe.deityTe}</span>`
      : curLang === "english"
      ? `${nak.deity}`
      : `<span style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:0.92rem;">${nakTe.deityTe}</span><br><span style="font-size:0.76rem; color:#94a3b8;">${nak.deity}</span>`;

    const lordText = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.lordTe}</span>`
      : curLang === "english"
      ? `${nak.lord}`
      : `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.lordTe}</span> <span style="font-size:0.75rem; color:#94a3b8;">(${nak.lord})</span>`;

    const ganaText = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu);">${nakTe.ganaTe}</span>`
      : curLang === "english"
      ? `${nak.gana}`
      : `<span style="font-family:var(--font-telugu); color:var(--gold-bright);">${nakTe.ganaTe}</span> <span style="font-size:0.75rem; color:#94a3b8;">(${nak.gana})</span>`;

    const elementText = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu);">${nakTe.elementTe} • ${nakTe.natureTe}</span>`
      : curLang === "english"
      ? `${nak.element} • ${nak.nature}`
      : `<span style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:0.85rem;">${nakTe.elementTe} • ${nakTe.natureTe}</span><br><span style="font-size:0.75rem; color:#94a3b8;">${nak.element} • ${nak.nature}</span>`;

    const symbolText = curLang === "telugu"
      ? `<span style="font-family:var(--font-telugu);">${nakTe.symbolTe}</span>`
      : curLang === "english"
      ? `${nak.symbolText}`
      : `<span style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:0.88rem;">${nakTe.symbolTe}</span><br><span style="font-size:0.75rem; color:#94a3b8;">${nak.symbolText}</span>`;

    const descSection = curLang === "telugu"
      ? `<p style="font-size:0.92rem; color:#e2e8f0; margin:0; line-height:1.65; font-family:var(--font-telugu);">${nakTe.descTe}</p>`
      : curLang === "english"
      ? `<p style="font-size:0.88rem; color:#e2e8f0; margin:0; line-height:1.55;">${nak.desc}</p>`
      : `<div style="color:var(--gold-bright); font-family:var(--font-telugu); font-size:0.95rem; margin-bottom:0.4rem; line-height:1.6;">${nakTe.descTe}</div><div style="color:#cbd5e1; font-size:0.84rem; line-height:1.5;">${nak.desc}</div>`;

    const muhurtaSection = curLang === "telugu"
      ? `<p style="font-size:0.92rem; color:#e2e8f0; margin:0; line-height:1.65; font-family:var(--font-telugu);">${nakTe.muhurtaTe}</p>`
      : curLang === "english"
      ? `<p style="font-size:0.88rem; color:#e2e8f0; margin:0; line-height:1.55;">${nak.muhurta}</p>`
      : `<div style="color:var(--gold-bright); font-family:var(--font-telugu); font-size:0.95rem; margin-bottom:0.4rem; line-height:1.6;">${nakTe.muhurtaTe}</div><div style="color:#cbd5e1; font-size:0.84rem; line-height:1.5;">${nak.muhurta}</div>`;

    const badgeTitle = curLang === "telugu" ? "★ ప్రమాణీకృత జన్మ నక్షత్రము" : "★ Verified Janma Nakṣatra";
    const namingTitle = curLang === "telugu" ? "వేద నామకరణ అక్షరము" : "Vedic Naming Sound";
    const forPadaLabel = curLang === "telugu" ? `(${moonPos.pada}వ పాద నామాక్షరము)` : `(Nāmākṣara for Pāda ${moonPos.pada})`;

    resultArea.style.display = "block";
    resultArea.innerHTML = `
      <div style="background:linear-gradient(145deg, rgba(26, 34, 52, 0.95), rgba(16, 20, 32, 0.98)); border:2px solid var(--gold-bright); padding:1.5rem 1.75rem; border-radius:16px; margin-top:1.5rem; box-shadow:0 12px 35px rgba(0,0,0,0.7), 0 0 25px rgba(245, 185, 66, 0.25);">
        
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; border-bottom:1px solid rgba(245, 185, 66, 0.25); padding-bottom:1.25rem; margin-bottom:1.25rem;">
          <div style="display:flex; align-items:center; gap:1rem;">
            <span style="font-size:3.2rem; background:rgba(245, 185, 66, 0.12); padding:0.5rem 0.8rem; border-radius:14px; border:1px solid var(--border-gold);">${nak.symbolIcon}</span>
            <div>
              <span class="hero-pill" style="margin-bottom:0.35rem;">${badgeTitle}</span>
              <h3 style="font-family:var(--font-display); font-size:1.85rem; color:#fff; margin:0; line-height:1.2;">
                ${titleHeader}
              </h3>
              <div style="color:var(--cyan-accent); font-size:0.95rem; font-weight:600; margin-top:0.25rem;">
                ${padaText}
              </div>
            </div>
          </div>

          <!-- Prominent Child Naming Sound Badge -->
          <div style="background:rgba(245, 185, 66, 0.15); border:1px solid var(--gold-bright); padding:0.85rem 1.25rem; border-radius:12px; text-align:center; min-width:180px;">
            <span style="font-size:0.72rem; color:var(--gold-dim); display:block; text-transform:uppercase; letter-spacing:0.05em; font-weight:700;">${namingTitle}</span>
            <strong style="font-size:2rem; color:var(--gold-bright); display:block; margin:0.15rem 0; font-family:var(--font-display);">"${birthSyllable}"</strong>
            <span style="font-size:0.75rem; color:#cbd5e1;">${forPadaLabel}</span>
          </div>
        </div>

        <!-- Astrometric Grid -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem; margin-bottom:1.25rem;">
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">True Moon Longitude</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">నిజ చంద్ర రేఖాంశము</span>
            </span>
            <strong style="color:var(--cyan-accent); font-family:var(--font-mono); font-size:0.95rem;">${moonPos.dms}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Zodiac Sign (Rāśi)</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">రాశి స్థానము</span>
            </span>
            <strong style="color:#fff; font-size:0.92rem;">${rashiText}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Presiding Deity (Devatā)</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">అధిష్టాన దేవత</span>
            </span>
            <strong style="color:#fff; font-size:0.92rem;">${deityText}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Dasha Lord (Graha)</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">దశాధిపతి గ్రహము</span>
            </span>
            <strong style="color:var(--gold-bright); font-size:0.95rem;">${lordText}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Yogatārā Junction Star</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">యోగతార నక్షత్రము</span>
            </span>
            <strong style="color:var(--cyan-accent); font-size:0.85rem; word-break:break-word;">${nak.star}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Temperament (Gaṇa)</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">నక్షత్ర గణము</span>
            </span>
            <strong style="color:#fff; font-size:0.95rem;">${ganaText}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Tattva (Element) & Nature</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">తత్వము & స్వభావము</span>
            </span>
            <strong style="color:#fff; font-size:0.86rem;">${elementText}</strong>
          </div>
          <div style="background:rgba(0,0,0,0.35); padding:0.75rem 0.95rem; border-radius:10px; border:1px solid rgba(255,255,255,0.06);">
            <span style="font-size:0.7rem; color:var(--gold-dim); display:block; text-transform:uppercase;">
              <span class="lang-en">Animal / Yoni Symbol</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">యోని చిహ్నము / ప్రతీక</span>
            </span>
            <strong style="color:#fff; font-size:0.88rem;">${symbolText}</strong>
          </div>
        </div>

        <!-- Psychological & Life Path Guidance -->
        <div style="display:grid; grid-template-columns:1fr; gap:0.85rem;">
          <div style="background:rgba(6, 182, 212, 0.08); border-left:3px solid var(--cyan-accent); padding:0.85rem 1.15rem; border-radius:0 8px 8px 0;">
            <strong style="color:var(--cyan-accent); font-size:0.85rem; display:block; margin-bottom:0.25rem;">
              <span class="lang-en">CORE PSYCHOLOGICAL &amp; EMOTIONAL NATURE:</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">మానసిక &amp; భావోద్వేగ జీవన స్వభావము:</span>
            </strong>
            ${descSection}
          </div>
          <div style="background:rgba(245, 185, 66, 0.08); border-left:3px solid var(--gold-bright); padding:0.85rem 1.15rem; border-radius:0 8px 8px 0;">
            <strong style="color:var(--gold-bright); font-size:0.85rem; display:block; margin-bottom:0.25rem;">
              <span class="lang-en">AUSPICIOUS LIFE ACTIVITIES &amp; HARMONIOUS VOCATIONS:</span>
              <span class="lang-te" style="font-family:var(--font-telugu);">శుభ కార్యములు &amp; అనుకూల జీవన రంగాలు:</span>
            </strong>
            ${muhurtaSection}
          </div>
        </div>

        <div style="margin-top:1rem; font-size:0.8rem; color:var(--text-muted); text-align:right;">
          <span class="lang-en">All 4 Pāda Sounds: <strong>${nak.syllables.join(" • ")}</strong> | Calculation: Sūrya Siddhānta Canon</span>
          <span class="lang-te" style="font-family:var(--font-telugu);">సమస్త 4 పాద నామాక్షరములు: <strong>${nak.syllables.join(" • ")}</strong> | గణితము: సూర్య సిద్ధాంత ప్రమాణము</span>
        </div>
      </div>
    `;

    resultArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  window.reRenderBirthResult = () => {
    if (lastCalculatedBirthDate) renderBirthResult(lastCalculatedBirthDate);
  };

  btn.addEventListener("click", () => {
    const dVal = bDate.value;
    if (!dVal) {
      resultArea.style.display = "block";
      resultArea.innerHTML = `
        <div style="background:rgba(239, 68, 68, 0.15); border:1px solid #ef4444; padding:1rem 1.25rem; border-radius:10px; margin-top:1.25rem; color:#fca5a5;">
          ⚠️ <strong>దయచేసి మీ పుట్టిన తేదిని ఎంచుకోండి / Please select a valid Birth Date</strong> to compute your authentic Sūrya Siddhānta Janma Nakṣatra.
        </div>
      `;
      bDate.focus();
      return;
    }

    const tVal = (bTime && bTime.value) ? bTime.value : "12:00";
    const [y, m, d] = dVal.split("-").map(Number);
    const [hh, mm] = tVal.split(":").map(Number);
    const birthDateObj = new Date(y, m - 1, d, hh, mm, 0);

    renderBirthResult(birthDateObj);
  });
}

// Document Load Orchestrator
document.addEventListener("DOMContentLoaded", () => {
  initNavDrawer();
  initLanguageSelector();
  initLevelFilter();
  initScrollSpy();
  initCalculator();
  initTrigLab();
  init4StepSolver();
  initEpicycleSimulator();
  initGnomonSimulator();
  initMatsyaCanvas();
  initDesantaraLab();
  initLunarEclipseTool();
  initSolarParallaxSimulator();
  initChedyakaCanvas();
  initYuddhaAnalyzer();
  initMoonCuspVisualizer();
  initCombustionChecker();
  initBhugolaCities();
  initArmillaryCanvas();
  initChapterViewer();
  initQuiz();
  initYogataraTable();
  initBirthNakshatraTool();
  initNakshatraToday();
});
