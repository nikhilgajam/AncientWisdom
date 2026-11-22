/**
 * Sūrya Siddhānta (सूर्यसिद्धान्त) Master Learning & Computational Engine
 * Authentic Classical Indian Astronomy System
 */

// 1. Surya Siddhanta Core Astronomical Constants (Chapter 1)
const SS_CONSTANTS = {
  MAHAYUGA_YEARS: 4320000,
  SAVANA_DAYS_MAHAYUGA: 1577917828, // Terrestrial civil days in a Mahayuga
  KALI_EPOCH_JD: 588465.5, // Feb 18, 3102 BCE (Julian Day at midnight Ujjain)
  RADIUS_JYA: 3438, // Trigonometric radius R in arcminutes
  REVOLUTIONS: {
    sun: 4320000,
    moon: 57753336,
    moonApogee: 488203,
    moonNode: 232238, // Rahu (Retrograde)
    mars: 2296832,
    mercurySighra: 17937060, // Mean motion = Sun
    jupiter: 364220,
    venusSighra: 7022376,   // Mean motion = Sun
    saturn: 146568
  },
  EPICYCLES: {
    sun: { manda: 14, sighra: 0 },
    moon: { manda: 32, sighra: 0 },
    mars: { manda: 75, sighra: 232 },
    mercury: { manda: 30, sighra: 133 },
    jupiter: { manda: 33, sighra: 70 },
    venus: { manda: 11, sighra: 262 },
    saturn: { manda: 49, sighra: 39 }
  }
};

const RASHIS = [
  { en: "Mesha", sa: "मेष", te: "మేషం", symbol: "♈", range: "0° - 30°" },
  { en: "Vrishabha", sa: "वृषभ", te: "వృషభం", symbol: "♉", range: "30° - 60°" },
  { en: "Mithuna", sa: "मिथुन", te: "మిథునం", symbol: "♊", range: "60° - 90°" },
  { en: "Karka", sa: "कर्क", te: "కర్కాటకం", symbol: "♋", range: "90° - 120°" },
  { en: "Simha", sa: "सिंह", te: "సింహం", symbol: "♌", range: "120° - 150°" },
  { en: "Kanya", sa: "कन्या", te: "కన్య", symbol: "♍", range: "150° - 180°" },
  { en: "Tula", sa: "तुला", te: "తుల", symbol: "♎", range: "180° - 210°" },
  { en: "Vrischika", sa: "वृश्चिक", te: "వృశ్చికం", symbol: "♏", range: "210° - 240°" },
  { en: "Dhanus", sa: "धनुः", te: "ధనుస్సు", symbol: "♐", range: "240° - 270°" },
  { en: "Makara", sa: "मकर", te: "మకరం", symbol: "♑", range: "270° - 300°" },
  { en: "Kumbha", sa: "कुम्भ", te: "కుంభం", symbol: "♒", range: "300° - 330°" },
  { en: "Meena", sa: "मीन", te: "మీనం", symbol: "♓", range: "330° - 360°" }
];

const NAKSHATRAS = [
  "Ashvini (अश्विनी • అశ్విని)", "Bharani (भरणी • భరణి)", "Krittika (कृत्तिका • కృత్తిక)", "Rohini (रोहिणी • రోహిణి)",
  "Mrigashirsha (मृगशीर्षा • మృగశిర)", "Ardra (आर्द्रा • ఆర్ద్ర)", "Punarvasu (पुनर्वसु • పునర్వసు)", "Pushya (पुष्य • పుష్యమి)",
  "Ashlesha (आश्लेषा • ఆశ్లేష)", "Magha (मघा • మఖ)", "Purva Phalguni (पूर्वफाल्गुनी • పుబ్బ)", "Uttara Phalguni (उत्तरफाल्गुनी • ఉత్తర)",
  "Hasta (हस्त • హస్త)", "Chitra (चित्रा • చిత్త)", "Svati (स्वाती • స్వాతి)", "Vishakha (विशाखा • విశాఖ)",
  "Anuradha (अनुराधा • అనూరాధ)", "Jyeshtha (ज्येष्ठा • జ్యేష్ఠ)", "Mula (मूल • మూల)", "Purva Ashadha (पूर्वाषाढा • పూర్వాషాఢ)",
  "Uttara Ashadha (उत्तराषाढा • ఉత్తరాషాఢ)", "Shravana (श्रवण • శ్రవణం)", "Dhanishtha (धनिष्ठा • ధనిష్ఠ)", "Shatabhisha (शतभिषज् • శతభిషం)",
  "Purva Bhadrapada (पूर्वभाद्रपदा • పూర్వాభాద్ర)", "Uttara Bhadrapada (उत्तरभाद्रपदा • ఉత్తరాభాద్ర)", "Revati (रेवती • రేవతి)"
];

// Comprehensive 27 Nakshatras Astronomical & Esoteric Dataset
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
const CHAPTERS_DATA = [
  {
    num: 1,
    nameEn: "Madhyamādhikāra",
    nameSa: "मध्यमाधिकारः",
    title: "Mean Motions of the Planets (Graha-Madhyama)",
    verse: "युगे सूर्यज्ञशुक्राणां खचतुष्करदार्णवाः । कुजजीवगुणानां तु भवेयुर्भगणाः क्रमात् ॥",
    translation: "In a Great Age (Mahāyuga), the revolutions of the Sun, Mercury, and Venus are 4,320,000; the revolutions of Mars, Jupiter, and Saturn follow in regular harmonic numbers.",
    topics: [
      "Cosmic Time Units (Prāṇa, Vināḍī, Nāḍī/Ghaṭikā, Muhūrta, Ahorātra)",
      "The 4 Yugas (Kṛta, Tretā, Dvāpara, Kali) and the 4,320,000-year Mahāyuga",
      "Kalpa (Day of Brahmā = 1000 Mahāyugas = 4.32 billion solar years)",
      "Planetary Revolutions (Bhagaṇa) and Ahargaṇa (Elapsed Civil Days)",
      "Average solar year length: 1,577,917,828 / 4,320,000 = 365.258756 days"
    ],
    math: "Ahargaṇa = (Elapsed Solar Years × 12 + Adhimāsa) × 30 + Tithi - Kṣaya-dina",
    proInsight: "The Ahargaṇa is the fundamental astronomical clock. By grounding time in discrete civil days from the epoch, Indian astronomers avoided cumulative calendar drift millennia before the Gregorian reform."
  },
  {
    num: 2,
    nameEn: "Spaṣṭādhikāra",
    nameSa: "स्पष्टाधिकारः",
    title: "True Places of Planets & Epicycles (Graha-Spaṣṭī-Karaṇa)",
    verse: "मन्दशीघ्रफलाभ्यां हि ग्रहः स्पष्टतरो भवेत् । कक्षामण्डलमध्यस्था भुवि द्रष्टा यतो भवेत् ॥",
    translation: "By the corrections of the Manda (apogee/eccentricity) and Śīghra (anomaly/heliocentric parallax), a planet's true position is obtained as seen from Earth.",
    topics: [
      "The 24 Sines (Jyā) table at 225' intervals with Radius R = 3438'",
      "Second-order difference sine equation: J(n+1) - J(n) = [J(n) - J(n-1)] - J(n)/225",
      "Manda-phala: Equation of the Centre correcting for elliptical orbital speed",
      "Śīghra-phala: Equation of Anomaly correcting for Earth's heliocentric vantage point",
      "The 4-Step Correction Method (Caturguṇa-saṁskāra) for superior & inferior planets"
    ],
    math: "True Longitude = Mean Longitude ± Manda-phala ± Śīghra-phala",
    proInsight: "The Śīghra epicycle is mathematically isomorphic to the heliocentric Copernican transformation: the Śīghra-paridhi reflects the Earth's orbit relative to the planet."
  },
  {
    num: 3,
    nameEn: "Tripraśnādhikāra",
    nameSa: "त्रिप्रश्नाधिकारः",
    title: "The Three Inquiries: Direction, Place, and Time",
    verse: "दिग्देशकालविज्ञानं शङ्कुना साधयेद्बुधः । समभूमौ लिखेद् वृत्तं द्वादशाङ्गुलशङ्कुना ॥",
    translation: "The wise astronomer ascertains Direction (Diś), Place/Latitude (Deśa), and Time (Kāla) using a 12-digit gnomon set perpendicular on leveled ground.",
    topics: [
      "The 12-Aṅgula Gnomon (Śaṅku) and shadow geometry",
      "Determination of True North-South via shadow circles (Dig-sādhana)",
      "Equinoctial midday shadow (Viṣuvad-chāyā) yielding local terrestrial latitude",
      "Ascensional Difference (Carakhaṇḍa) and variation in length of day and night",
      "Sun's declination (Krānti) and zenith distance (Natāṁśa)"
    ],
    math: "tan(Latitude) = Equinoctial Shadow / 12; Length of Day = 30 Ghaṭikās ± 2 × Cara",
    proInsight: "Combines planar trigonometry with spherical astronomy to map equatorial coordinates into local horizon (Alt-Azimuth) coordinates."
  },
  {
    num: 4,
    nameEn: "Candragrahaṇādhikāra",
    nameSa: "चन्द्रग्रहणाधिकारः",
    title: "Lunar Eclipses (Candra-Grahaṇa)",
    verse: "छायामुखे भवेच्चन्द्रो राहुणा च प्रगृह्यते । विक्षेपाच्चन्द्रपातस्य ज्ञायते ग्रहणसम्भवः ॥",
    translation: "When the Full Moon enters the Earth's shadow cone near the lunar nodes (Rāhu/Ketu), an eclipse occurs according to its celestial latitude.",
    topics: [
      "Earth's shadow cone (Tamoguṇa / Chāyā-bimba) diameter calculation",
      "Angular diameters of Sun, Moon, and Earth shadow at mean and true distances",
      "Eclipse condition: Moon's celestial latitude (Vikṣepa) < Sum of semi-diameters",
      "Contact times: Sparśa (First Contact), Nimīlana (Totality Start), Madhya (Peak), Unmīlana (Totality End), Mokṣa (Release)"
    ],
    math: "Shadow Radius S = (Sun Semi-diameter + Moon Semi-diameter) × (Moon Distance / Sun Distance) Correction",
    proInsight: "Because the Earth's shadow is physical, a lunar eclipse is observed at the identical astronomical instant globally, requiring no local parallax correction."
  },
  {
    num: 5,
    nameEn: "Sūryagrahaṇādhikāra",
    nameSa: "सूर्यग्रहणाधिकारः",
    title: "Solar Eclipses & Parallax (Sūrya-Grahaṇa & Lambana)",
    verse: "लम्बनेन विना सूर्यग्रहणं नैव सिद्ध्यति । दृक्क्षेपविक्षेपाभ्यां च नतिरुक्ता मनीषिभिः ॥",
    translation: "A solar eclipse can never be computed without Parallax; astronomers compute Parallax in Longitude (Lambana) and Parallax in Latitude (Nati).",
    topics: [
      "Why solar eclipses are localized: Moon's shadow on Earth",
      "Parallax in Longitude (Lambana): Shifts the observed timing of eclipse contacts",
      "Parallax in Latitude (Nati): Alters the apparent separation of Sun and Moon discs",
      "Calculation of the Nonagesimal (Dṛkkṣepa - zenith distance of the ecliptic)",
      "Solar eclipse totality path and annular vs total conditions"
    ],
    math: "Apparent Longitude = True Longitude + Lambana; Apparent Latitude = True Latitude ± Nati",
    proInsight: "Surya Siddhanta's treatment of Lambana and Nati represents one of the crowning triumphs of ancient spherical trigonometry."
  },
  {
    num: 6,
    nameEn: "Chedyakādhikāra",
    nameSa: "छेद्यकाधिकारः",
    title: "Projection & Graphic Representation of Eclipses",
    verse: "आलेख्यं दर्शयेद्विद्वान् ग्रहणस्य च मण्डलम् । वलनं च दिशं चैव स्पर्शमोक्षप्रसाधने ॥",
    translation: "The scholar draws the geometric projection of the eclipse, illustrating the orientation (Valana) of contact and release across the cardinal points.",
    topics: [
      "Geometric projection (Parvalekhana) of solar and lunar eclipses",
      "Deflection/Orientation angle (Valana): Akṣa-valana (latitude deflection) + Ayana-valana (solstitial deflection)",
      "Compass points of first entry and exit on the lunar/solar disc"
    ],
    math: "Total Valana = Akṣa-valana + Ayana-valana",
    proInsight: "Precursor to modern stereographic and orthographic eclipse mapping."
  },
  {
    num: 7,
    nameEn: "Grahayutyadhikāra",
    nameSa: "ग्रहयुत्यधिकारः",
    title: "Conjunction of Planets (Graha-Yuti)",
    verse: "ग्रहयोस्तुल्यकांशत्वे युतिर्भवति भास्वतोः । भेदाभेदविकल्पाश्च युद्धं चापि विधीयते ॥",
    translation: "When two planets share the same longitude, conjunction takes place; depending on their angular distance, planetary combat or fellowship occurs.",
    topics: [
      "Planetary conjunctions (apparent and true)",
      "The 4 types of Graha-Yuddha (Planetary Encounter/Combat): Bheda (occultation), Ulleka (grazing), Aṁśuvimarda (ray mingling), and Apasavya (close passage)",
      "Determining which planet prevails based on brightness and north-south latitude"
    ],
    math: "Time to conjunction Δt = (Longitude₂ - Longitude₁) / (Daily Motion₁ - Daily Motion₂)",
    proInsight: "Direct practical observational astronomy for testing the predictive accuracy of the tables."
  },
  {
    num: 8,
    nameEn: "Bhadhikāra",
    nameSa: "भग्रहयुत्यधिकारः",
    title: "Conjunction with Asterisms (27/28 Nakṣatras)",
    verse: "ध्रुवकाश्चैव विक्षेपा नक्षत्राणां पृथक् पृथक् । अश्विनीप्रभृतीनां च गणितेनोपपादिताः ॥",
    translation: "The polar longitudes (Dhruvaka) and celestial latitudes (Vikṣepa) of the stars, starting from Aśvinī, are established by computational observation.",
    topics: [
      "Polar coordinates (Dhruvaka and Vikṣepa) for all 27/28 Nakṣatra junction stars (Yogatārās)",
      "Identification of Agastya (Canopus), Lubdhaka (Sirius), and Brahmāhṛdaya (Capella)",
      "Precession of the Equinoxes (Ayanāṁśa): Oscillatory model (Trépidation) at 54\"/year"
    ],
    math: "Yogatārā Polar Longitude λ_polar and Polar Latitude β_polar catalog",
    proInsight: "Catalog of primary reference stars used as stellar anchors for tracking planetary paths."
  },
  {
    num: 9,
    nameEn: "Udayāstādhikāra",
    nameSa: "उदयास्ताधिकारः",
    title: "Heliacal Risings & Settings (Udaya and Asta)",
    verse: "सूर्यासनतया हीना ग्रहा गच्छन्त्यदृश्यताम् । कालांशैस्तैरदृश्यत्वं ज्ञेयं प्राच्यां प्रतीचि वा ॥",
    translation: "Planets losing visibility due to proximity to the Sun undergo heliacal setting; their reappearance is governed by specific visibility degrees (Kālāṁśa).",
    topics: [
      "Visibility limits (Kālāṁśa) in degrees from the Sun for each planet:",
      "Moon = 12°, Mars = 17°, Mercury = 14° (retrograde 12°), Jupiter = 11°, Venus = 10° (retrograde 8°), Saturn = 15°",
      "Eastern vs Western heliacal risings and settings",
      "Significance for civil agriculture and religious calendars"
    ],
    math: "Elongation Δθ = |Planet Longitude - Sun Longitude|; Visible if Δθ > Kālāṁśa",
    proInsight: "Pioneered empirical extinction models based on atmospheric twilight scatter."
  },
  {
    num: 10,
    nameEn: "Candradarśanādhikāra",
    nameSa: "चन्द्रदर्शनाधिकारः",
    title: "First Visibility of the Moon (Crescent Phase & Horns)",
    verse: "सितासितविभागेन शृङ्गोन्नतिरुदीर्यते । शुक्ले पूर्वोन्नतं शृङ्गं कृष्णे पश्चादुदाहृतम् ॥",
    translation: "From the proportion of illumination, the elevation of the Moon's horns (Śṛṅgonnati) is computed; the northern or southern tip tilts according to relative latitude.",
    topics: [
      "Calculation of New Moon crescent visibility after sunset",
      "Phase illumination percentage (Śuklapakṣa vs Kṛṣṇapakṣa)",
      "Tilt and elevation of the lunar crescent horns (Śṛṅgonnati)"
    ],
    math: "Illuminated fraction = (1 - cos(Elongation)) / 2",
    proInsight: "Critical for starting lunar calendar months across Vedic, Islamic (Hilal), and Babylonian traditions."
  },
  {
    num: 11,
    nameEn: "Pātādhikāra",
    nameSa: "पाताधिकारः",
    title: "Malign Astronomical Aspects: Vaidhṛti and Vyatīpāta",
    verse: "एकस्मिन्नयने सूर्ये चन्द्रमस्ययने परे । क्रान्त्योस्तुल्यत्वे भवति व्यतीपातोऽतिदारुणः ॥",
    translation: "When the Sun and Moon are in opposite solstitial courses and their declinations become equal in magnitude, the formidable Vyatīpāta occurs; in identical courses, Vaidhṛti.",
    topics: [
      "Astronomical definition of Pāta: Equality of declination (Krānti-sāmya)",
      "Vyatīpāta: Equal declinations with opposite signs (declination crossing)",
      "Vaidhṛti: Equal declinations with identical celestial orientation",
      "Precise trigonometric determination of the exact conjunction in declination"
    ],
    math: "Condition: |Declination_Sun| = |Declination_Moon|",
    proInsight: "Highlights the ancient priority on intersectional celestial dynamics affecting gravitational-tidal equilibria."
  },
  {
    num: 12,
    nameEn: "Bhūgolādhyāya",
    nameSa: "भूगोलाध्यायः",
    title: "Cosmogony, Geography & Spherical Earth (Bhūgola)",
    verse: "सर्वतः पर्वताकारः कन्दुकप्रतिमः स्थितः । भूगोलो व्योम्नि तिष्ठति धारणां शक्तिमाश्रितः ॥",
    translation: "The Earth is spherical like a round ball (Kanduka-pratimaḥ), suspended unsupported in space, sustained by its own inherent attractive holding power (Dhāraṇātmikā Śaktiḥ).",
    topics: [
      "Spherical Earth geometry: Diameter = 1,600 Yojanas, Circumference ~ 5,026 Yojanas",
      "Earth suspended in space with inherent gravitational attractive power",
      "Prime Meridian passing through Ujjain, Rohtak, Kurukshetra, and Laṅkā (Equator, 0° lat)",
      "Antipodal cities: Romaka (90° W), Siddhapura (180°), Yamakoṭi (90° E), Laṅkā (0°)",
      "Meru (North Pole - 6 months continuous day, 6 months night for the Gods)"
    ],
    math: "Circumference = π × Diameter = √(10) × 1600 ≈ 5059.6 Yojanas",
    proInsight: "Explicit, unambiguous statement of a spherical Earth and gravitational self-centering centuries before modern Western physics."
  },
  {
    num: 13,
    nameEn: "Yantrādhyāya",
    nameSa: "यन्त्राध्यायः",
    title: "Astronomical Instruments & The Armillary Sphere (Gola-Yantra)",
    verse: "काष्ठैर्गोलं प्रकुर्वीत खगोलाकारमुत्तमम् । नाडीवलयसंयुक्तं समचक्रसमन्वितम् ॥",
    translation: "Let the astronomer construct a wooden Armillary Sphere (Gola-Yantra) mirroring the celestial sphere, fitted with equinoctial rings and horizon circles.",
    topics: [
      "Construction of the Armillary Sphere (Gola-Yantra) to model celestial mechanics",
      "Water Clock (Ghaṭikā-yantra / Clepsydra): copper bowl with calibrated aperture",
      "Gnomon (Śaṅku), sighting tubes, semicircle and circular quadrant instruments",
      "Self-rotating mechanical models driven by mercury and continuous water flow"
    ],
    math: "Time measurement: 1 Ghaṭikā = 60 Palas = water filling period of standardized vessel",
    proInsight: "Demonstrates that ancient Indian astronomy was deeply experimental, observational, and instrument-driven."
  },
  {
    num: 14,
    nameEn: "Mānādhyāya",
    nameSa: "मानाध्यायः",
    title: "The Nine Systems of Time Measurement (Nava-Mānāni)",
    verse: "ब्राह्मं दैवं तथा पैत्र्यं प्राजापत्यं च सौरकम् । सावना सावनं मानं चान्द्रं नाक्षत्रमेव च ॥",
    translation: "The nine time measurements are: Brāhma, Daiva, Paitrya, Prājāpatya, Saura (Solar), Sāvana (Terrestrial Civil), Cāndra (Lunar), Nākṣatra (Sidereal), and Bārhaspatya.",
    topics: [
      "Brāhma-māna: Kalpas and the lifespan of the creator (cosmological age)",
      "Daiva-māna: Divine years (1 divine day = 1 human solar year)",
      "Paitrya-māna: Ancestral days (1 pitṛ day = 1 synodic lunar month)",
      "Prājāpatya-māna: Manvantara spans governing evolutionary epochs",
      "Saura-māna: Solar transit through 12 zodiac signs (governs Ṛtus / seasons)",
      "Sāvana-māna: Sunrise to sunrise civil day (governs Ahargaṇa and daily wages)",
      "Cāndra-māna: Tithis and synodic month (governs festivals and rituals)",
      "Nākṣatra-māna: Earth's rotation relative to fixed stars (sidereal day)",
      "Bārhaspatya-māna: 60-year Jovian Jovian cycle (Jovian Samvatsaras)"
    ],
    math: "Harmonization equation connecting civil days, solar years, lunar months, and sidereal rotations",
    proInsight: "A masterclass in comparative chronometry, unifying biological human time with geological, planetary, and cosmological time."
  }
];

// Interactive Quiz Questions
const QUIZ_QUESTIONS = [
  {
    level: "beginner",
    q: "According to the Surya Siddhanta, what is the shape of the Earth and how does it exist in space?",
    options: [
      "It is flat and supported by four elephants on a giant tortoise",
      "It is a round sphere (Kanduka-pratimaḥ), suspended freely in space by its own gravitational attraction (Dhāraṇātmikā Śaktiḥ)",
      "It is a stationary cylinder at the bottom of the cosmos",
      "It is an infinite plane bounded by a ring of ice mountains"
    ],
    correct: 1,
    explanation: "Chapter 12, verse 32 explicitly states that the Earth is a round sphere like a ball (कन्दुकप्रतिमः स्थितः भूगोलो व्योम्नि तिष्ठति) suspended freely in space, maintained by its own inherent holding power (धारणां शक्तिमाश्रितः)."
  },
  {
    level: "beginner",
    q: "What is the length of one Mahāyuga (Catur-yuga) in solar years?",
    options: [
      "432,000 solar years",
      "1,000,000 solar years",
      "4,320,000 solar years",
      "4,320,000,000 solar years"
    ],
    correct: 2,
    explanation: "A Mahāyuga comprises 4,320,000 solar years, divided in the ratio 4:3:2:1 among Kṛta (1,728,000), Tretā (1,296,000), Dvāpara (864,000), and Kali (432,000) yugas."
  },
  {
    level: "intermediate",
    q: "Why is the trigonometric radius R chosen as 3438' in the Surya Siddhanta's Sine (Jyā) table?",
    options: [
      "It is an arbitrary mystical number chosen for ease of chanting",
      "Because 21,600' (the arcminutes in 360°) divided by 2π (approximated as 3.14159) equals 3437.75 ≈ 3438'",
      "It represents the distance from the Earth to the Sun in Yojanas",
      "It is the number of civil days in 10 solar years"
    ],
    correct: 1,
    explanation: "The celestial circle is divided into 360° × 60' = 21,600 arcminutes. If Circumference C = 21,600', then Radius R = C / (2π) = 21,600 / (6.283185...) = 3437.747... rounded to 3438'. At this radius, 1 arcminute of arc equals exactly 1 unit of linear length for small angles!"
  },
  {
    level: "intermediate",
    q: "What is the Ahargaṇa (अहर्गण)?",
    options: [
      "The total number of stars in the Milky Way",
      "The exact count of elapsed terrestrial civil days (Sāvana dina) from the astronomical epoch to the target date",
      "The angular speed of the Moon during totality",
      "The shadow length of a 12-angula gnomon at winter solstice"
    ],
    correct: 1,
    explanation: "Ahargaṇa literally means 'heaped-up days' (Ahan = Day, Gaṇa = Heap/Count). It is the continuous count of civil days elapsed since the epoch (such as the beginning of the Kali Yuga on Feb 18, 3102 BCE)."
  },
  {
    level: "pro",
    q: "In the Surya Siddhanta's planetary theory, what does the Śīghra-phala correction physically correspond to in modern heliocentric astronomy?",
    options: [
      "Atmospheric refraction near the horizon",
      "The precession of the equinoxes over 25,800 years",
      "The heliocentric parallax (the reflection of Earth's orbital motion around the Sun onto the observed planet)",
      "The gravitational oblateness of the Earth's polar axis"
    ],
    correct: 2,
    explanation: "The Manda correction accounts for the eccentricity/ellipticity of the planet's orbit (Kepler's first two laws), while the Śīghra correction accounts for the planet's position relative to Earth's orbital vantage point around the Sun, naturally producing retrograde motion (Vakragati)."
  },
  {
    level: "pro",
    q: "Why are Parallax in Longitude (Lambana) and Parallax in Latitude (Nati) required for calculating Solar Eclipses, but NEVER for Lunar Eclipses?",
    options: [
      "Because the Sun is much brighter than the Moon",
      "A lunar eclipse is the Moon entering Earth's actual physical shadow cone (visible to all on the night hemisphere), whereas a solar eclipse is the Moon's small shadow cone striking Earth, whose alignment depends strictly on the observer's geographic position",
      "Because Indian instruments were only accurate during nighttime",
      "Because the Sun does not follow the ecliptic path during eclipses"
    ],
    correct: 1,
    explanation: "During a lunar eclipse, the Moon physically immerses into the Earth's umbral cone in space; every observer seeing the Moon sees it darken at the same absolute instant. In a solar eclipse, the observer's location on Earth's curved surface creates topocentric parallax (Lambana & Nati) relative to the Moon's shadow cone."
  }
];

// --- Astronomical Calculation Helpers ---

// Calculate Julian Day Number from Gregorian Date
function getJulianDay(year, month, day, hours = 0) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  const jd = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
  return jd + (hours / 24.0);
}

// Convert Longitude to Rashi, Nakshatra, and Deg/Min/Sec
function formatLongitude(deg) {
  deg = ((deg % 360) + 360) % 360;
  const rashiIndex = Math.floor(deg / 30);
  const degInRashi = deg % 30;
  const degInt = Math.floor(degInRashi);
  const minFloat = (degInRashi - degInt) * 60;
  const minInt = Math.floor(minFloat);
  const secInt = Math.round((minFloat - minInt) * 60);

  // Nakshatra (27 Nakshatras in 360 deg = 13° 20' = 800' each)
  const totalMinutes = deg * 60;
  const nakshatraIndex = Math.floor(totalMinutes / 800) % 27;
  const pada = Math.floor((totalMinutes % 800) / 200) + 1;

  return {
    degTotal: deg,
    rashi: RASHIS[rashiIndex],
    degString: `${degInt}° ${minInt}' ${secInt}"`,
    nakshatra: NAKSHATRAS[nakshatraIndex],
    pada: pada
  };
}

// Compute Surya Siddhanta Mean Planetary Positions
function calculateSSPlanets(targetDate) {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const hours = targetDate.getHours() + targetDate.getMinutes() / 60;

  const currentJD = getJulianDay(year, month, day, hours);
  const ahargana = currentJD - SS_CONSTANTS.KALI_EPOCH_JD;

  // Planetary Mean Longitudes formula:
  // Longitude = (Ahargaṇa × Revolutions × 360 / Civil_Days_in_Mahayuga) mod 360
  const totalDays = SS_CONSTANTS.SAVANA_DAYS_MAHAYUGA;

  function getMeanLong(revs) {
    const rawRev = (ahargana * revs) / totalDays;
    const fraction = rawRev - Math.floor(rawRev);
    return fraction * 360;
  }

  const sunLong = getMeanLong(SS_CONSTANTS.REVOLUTIONS.sun);
  const moonLong = getMeanLong(SS_CONSTANTS.REVOLUTIONS.moon);
  const marsLong = getMeanLong(SS_CONSTANTS.REVOLUTIONS.mars);
  const mercurySighra = getMeanLong(SS_CONSTANTS.REVOLUTIONS.mercurySighra);
  const jupiterLong = getMeanLong(SS_CONSTANTS.REVOLUTIONS.jupiter);
  const venusSighra = getMeanLong(SS_CONSTANTS.REVOLUTIONS.venusSighra);
  const saturnLong = getMeanLong(SS_CONSTANTS.REVOLUTIONS.saturn);
  const moonApogee = getMeanLong(SS_CONSTANTS.REVOLUTIONS.moonApogee);
  const rahuRaw = getMeanLong(SS_CONSTANTS.REVOLUTIONS.moonNode);
  const rahuLong = (360 - rahuRaw) % 360; // Rahu moves retrograde
  const ketuLong = (rahuLong + 180) % 360;

  return {
    ahargana: Math.floor(ahargana),
    fractionalDay: (ahargana - Math.floor(ahargana)).toFixed(4),
    currentJD: currentJD.toFixed(2),
    planets: [
      { name: "Sun (Sūrya / सूर्य)", long: formatLongitude(sunLong), type: "Luminary" },
      { name: "Moon (Candra / चन्द्र)", long: formatLongitude(moonLong), type: "Luminary" },
      { name: "Mars (Maṅgala / मङ्गल)", long: formatLongitude(marsLong), type: "Superior" },
      { name: "Mercury Mean (Budha / बुध)", long: formatLongitude(sunLong), sighra: formatLongitude(mercurySighra), type: "Inferior" },
      { name: "Jupiter (Guru / बृहस्पति)", long: formatLongitude(jupiterLong), type: "Superior" },
      { name: "Venus Mean (Śukra / शुक्र)", long: formatLongitude(sunLong), sighra: formatLongitude(venusSighra), type: "Inferior" },
      { name: "Saturn (Śani / शनि)", long: formatLongitude(saturnLong), type: "Superior" },
      { name: "Moon's Apogee (Mandocca)", long: formatLongitude(moonApogee), type: "Apsidal" },
      { name: "Rāhu (Ascending Node / राहू)", long: formatLongitude(rahuLong), type: "Node (Retrograde)" },
      { name: "Ketu (Descending Node / केतु)", long: formatLongitude(ketuLong), type: "Node (Retrograde)" }
    ]
  };
}

// --- DOM Rendering & Controller ---

document.addEventListener("DOMContentLoaded", () => {
  initCalculator();
  initNakshatraVisualizer();
  initJyaTable();
  initChapterViewer();
  initEpicycleSimulator();
  initGnomonSimulator();
  initQuiz();
  initLevelFilter();
  initScrollSpy();
});

// 1. Calculator Initializer
function initCalculator() {
  const dateInput = document.getElementById("targetDateInput");
  const calcBtn = document.getElementById("calcBtn");
  const todayBtn = document.getElementById("todayBtn");

  // Set default to current date
  const now = new Date();
  dateInput.value = now.toISOString().split("T")[0];

  function runCalc() {
    const val = dateInput.value;
    if (!val) return;
    const selectedDate = new Date(val + "T12:00:00");
    const results = calculateSSPlanets(selectedDate);
    renderResults(results);
  }

  calcBtn.addEventListener("click", runCalc);
  todayBtn.addEventListener("click", () => {
    dateInput.value = new Date().toISOString().split("T")[0];
    runCalc();
  });

  // Initial execution
  runCalc();
}

function renderResults(results) {
  document.getElementById("aharganaDisplay").innerText = results.ahargana.toLocaleString();
  document.getElementById("julianDayDisplay").innerText = results.currentJD;

  const tbody = document.getElementById("planetTableBody");
  tbody.innerHTML = "";

  results.planets.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="graha-badge">${p.name}</span></td>
      <td><strong>${p.long.degString}</strong></td>
      <td><span class="rashi-tag">${p.long.rashi.symbol} ${p.long.rashi.sa} • ${p.long.rashi.te} (${p.long.rashi.en})</span></td>
      <td><span class="nakshatra-tag">${p.long.nakshatra} (Pāda ${p.long.pada})</span></td>
      <td><span style="font-size:0.8rem; color:var(--text-muted);">${p.type}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// 2. Jya Table Initializer
function initJyaTable() {
  const container = document.getElementById("jyaGrid");
  if (!container) return;
  container.innerHTML = "";

  JYA_TABLE.forEach(item => {
    // Modern value: 3438 * sin(arcMin in radians)
    const rad = (item.arcMin / 60) * (Math.PI / 180);
    const modernVal = (3438 * Math.sin(rad)).toFixed(2);
    const diffFromModern = (item.jya - modernVal).toFixed(2);

    const cell = document.createElement("div");
    cell.className = "jya-cell";
    cell.innerHTML = `
      <div>
        <span class="jya-deg">#${item.n} (${item.deg})</span>
        <div style="font-size:0.75rem; color:var(--text-muted);">${item.arcMin}' arc</div>
      </div>
      <div style="text-align:right;">
        <span class="jya-val">${item.jya}'</span>
        <div class="jya-modern">Mod: ${modernVal}'</div>
        <div class="jya-diff">Δ = ${diffFromModern >= 0 ? '+' : ''}${diffFromModern}'</div>
      </div>
    `;
    container.appendChild(cell);
  });
}

// 3. Chapter Viewer
function initChapterViewer() {
  const tabsContainer = document.getElementById("chapterTabs");
  const contentContainer = document.getElementById("chapterContent");
  if (!tabsContainer || !contentContainer) return;

  CHAPTERS_DATA.forEach((chap, idx) => {
    const btn = document.createElement("button");
    btn.className = `chap-tab ${idx === 0 ? "active" : ""}`;
    btn.innerText = `Ch ${chap.num}: ${chap.nameEn}`;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chap-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderChapter(chap);
    });
    tabsContainer.appendChild(btn);
  });

  renderChapter(CHAPTERS_DATA[0]);
}

function renderChapter(chap) {
  const container = document.getElementById("chapterContent");
  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
      <div>
        <span class="hero-pill" style="margin-bottom:0.4rem;">Chapter ${chap.num} • ${chap.nameSa}</span>
        <h3 style="font-family:var(--font-display); font-size:1.6rem; color:#fff;">${chap.nameEn} — ${chap.title}</h3>
      </div>
    </div>

    <div class="chap-shloka-box">
      <div class="chap-sanskrit">${chap.verse}</div>
      <div class="chap-translation">"${chap.translation}"</div>
      <div class="chap-math">Mathematical Formula: ${chap.math}</div>
    </div>

    <h4 style="color:var(--gold-bright); font-size:1rem; margin-bottom:0.75rem;">Key Core Topics:</h4>
    <ul style="color:var(--text-muted); font-size:0.92rem; padding-left:1.5rem; margin-bottom:1.5rem; line-height:1.7;">
      ${chap.topics.map(t => `<li>${t}</li>`).join("")}
    </ul>

    <div style="background:rgba(56, 189, 248, 0.08); border-left:3px solid var(--cyan-accent); padding:1rem 1.25rem; border-radius:0 8px 8px 0;">
      <strong style="color:var(--cyan-accent); font-size:0.88rem; display:block; margin-bottom:0.25rem;">PRO ASTRONOMER INSIGHT:</strong>
      <p style="color:#e2e8f0; font-size:0.9rem; margin:0;">${chap.proInsight}</p>
    </div>
  `;
}

// 4. Double Epicycle Canvas Simulator
function initEpicycleSimulator() {
  const canvas = document.getElementById("epicycleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let planetSelect = document.getElementById("simPlanet");
  let speedSlider = document.getElementById("simSpeed");
  let modeSelect = document.getElementById("simMode");

  let time = 0;
  let trail = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 480;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const baseRadius = Math.min(cx, cy) * 0.65;

    const planetKey = planetSelect ? planetSelect.value : "mars";
    const mode = modeSelect ? modeSelect.value : "both";
    const speed = speedSlider ? parseFloat(speedSlider.value) : 1;

    // Draw Earth in centre
    ctx.beginPath();
    ctx.arc(cx, cy, 9, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "12px Plus Jakarta Sans";
    ctx.fillText("Earth (Bhūmi)", cx + 15, cy + 4);

    // Deferent Circle (Kakṣā-vṛtta)
    ctx.beginPath();
    ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(245, 185, 66, 0.25)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Planet mean motion
    const meanRate = 0.015 * speed;
    const meanAngle = time * meanRate;
    const meanX = cx + Math.cos(meanAngle) * baseRadius;
    const meanY = cy + Math.sin(meanAngle) * baseRadius;

    // Epicycle radius
    const epicycleData = SS_CONSTANTS.EPICYCLES[planetKey] || { manda: 75, sighra: 232 };
    const epicycleDegrees = mode === "manda" ? epicycleData.manda : epicycleData.sighra;
    const epicycleRadius = (epicycleDegrees / 360) * (baseRadius * 0.55);

    // Draw Epicycle
    ctx.beginPath();
    ctx.arc(meanX, meanY, epicycleRadius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(168, 85, 247, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Epicycle rotation speed (faster anomaly)
    const anomalyRate = meanRate * 2.8;
    const anomalyAngle = time * anomalyRate;
    const trueX = meanX + Math.cos(anomalyAngle) * epicycleRadius;
    const trueY = meanY + Math.sin(anomalyAngle) * epicycleRadius;

    // Draw Mean Point
    ctx.beginPath();
    ctx.arc(meanX, meanY, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#f5b942";
    ctx.fill();

    // Connecting line from Earth to True Planet
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(trueX, trueY);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // True Planet
    ctx.beginPath();
    ctx.arc(trueX, trueY, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#ff7b25";
    ctx.fill();
    ctx.strokeStyle = "#ffd700";
    ctx.stroke();

    // Trail
    trail.push({ x: trueX, y: trueY });
    if (trail.length > 250) trail.shift();

    ctx.beginPath();
    for (let i = 0; i < trail.length; i++) {
      const alpha = i / trail.length;
      ctx.strokeStyle = `rgba(255, 123, 37, ${alpha * 0.75})`;
      if (i === 0) ctx.moveTo(trail[i].x, trail[i].y);
      else ctx.lineTo(trail[i].x, trail[i].y);
    }
    ctx.lineWidth = 2;
    ctx.stroke();

    time += 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// 5. Gnomon (Shanku) Simulator
function initGnomonSimulator() {
  const altSlider = document.getElementById("sunAltitude");
  const canvas = document.getElementById("gnomonCanvas");
  if (!altSlider || !canvas) return;
  const ctx = canvas.getContext("2d");

  function renderGnomon() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 260;

    const altitudeDeg = parseFloat(altSlider.value);
    document.getElementById("altValueDisplay").innerText = `${altitudeDeg}°`;

    const altRad = altitudeDeg * (Math.PI / 180);
    // Shadow length s = 12 * cot(altitude)
    const shadowAngulas = (12 / Math.tan(altRad)).toFixed(2);
    const hypotenuse = Math.sqrt(144 + shadowAngulas * shadowAngulas).toFixed(2);

    document.getElementById("shadowLengthDisplay").innerText = `${shadowAngulas} aṅgulas`;
    document.getElementById("karnaDisplay").innerText = `${hypotenuse} aṅgulas`;

    // Visual rendering
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const groundY = 210;
    const gnomonX = canvas.width * 0.45;
    const scale = 8.5; // pixels per angula

    // Ground line
    ctx.beginPath();
    ctx.moveTo(20, groundY);
    ctx.lineTo(canvas.width - 20, groundY);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // 12-angula Gnomon (Shanku)
    const gnomonHeightPx = 12 * scale;
    const topY = groundY - gnomonHeightPx;

    ctx.beginPath();
    ctx.moveTo(gnomonX, groundY);
    ctx.lineTo(gnomonX, topY);
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 6;
    ctx.stroke();

    // Shadow on ground
    const shadowPx = shadowAngulas * scale;
    const shadowEndX = gnomonX + shadowPx;

    ctx.beginPath();
    ctx.moveTo(gnomonX, groundY);
    ctx.lineTo(shadowEndX, groundY);
    ctx.strokeStyle = "rgba(245, 185, 66, 0.85)";
    ctx.lineWidth = 6;
    ctx.stroke();

    // Sun Ray / Hypotenuse (Karna)
    ctx.beginPath();
    ctx.moveTo(shadowEndX, groundY);
    ctx.lineTo(gnomonX, topY);
    ctx.strokeStyle = "rgba(255, 123, 37, 0.5)";
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = "#ffd700";
    ctx.font = "12px Plus Jakarta Sans";
    ctx.fillText("Śaṅku (12 Aṅgulas)", gnomonX - 110, topY + 50);

    ctx.fillStyle = "var(--gold-bright)";
    ctx.fillText(`Chāyā: ${shadowAngulas} aṅgulas`, gnomonX + 20, groundY + 25);
  }

  altSlider.addEventListener("input", renderGnomon);
  window.addEventListener("resize", renderGnomon);
  renderGnomon();
}

// 6. Interactive Quiz Initializer
function initQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;

  let currentIdx = 0;
  let score = 0;

  function renderQuestion() {
    if (currentIdx >= QUIZ_QUESTIONS.length) {
      container.innerHTML = `
        <div style="text-align:center; padding:2rem;">
          <h3 style="font-family:var(--font-display); font-size:1.8rem; color:var(--gold-bright); margin-bottom:1rem;">Assessment Complete! 🏆</h3>
          <p style="font-size:1.1rem; color:#fff; margin-bottom:1.5rem;">You scored <strong>${score} / ${QUIZ_QUESTIONS.length}</strong>.</p>
          <button id="restartQuizBtn" class="btn-primary" style="margin:0 auto;">Retake Assessment</button>
        </div>
      `;
      document.getElementById("restartQuizBtn").addEventListener("click", () => {
        currentIdx = 0;
        score = 0;
        renderQuestion();
      });
      return;
    }

    const q = QUIZ_QUESTIONS[currentIdx];
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:1rem; align-items:center;">
        <span class="hero-pill" style="margin-bottom:0;">Question ${currentIdx + 1} of ${QUIZ_QUESTIONS.length}</span>
        <span class="tag" style="text-transform:uppercase;">${q.level} Level</span>
      </div>
      <h3 style="font-family:var(--font-body); font-size:1.15rem; color:#fff; margin-bottom:1.5rem; line-height:1.6;">${q.q}</h3>
      <div id="optionsList"></div>
      <div id="feedbackBox" style="margin-top:1.5rem; display:none;"></div>
      <button id="nextQBtn" class="btn-primary" style="margin-top:1.5rem; display:none;">Next Question ➔</button>
    `;

    const optList = document.getElementById("optionsList");
    const feedbackBox = document.getElementById("feedbackBox");
    const nextBtn = document.getElementById("nextQBtn");

    q.options.forEach((opt, idx) => {
      const div = document.createElement("div");
      div.className = "quiz-option";
      div.innerText = opt;
      div.addEventListener("click", () => {
        // Prevent re-selection
        const allOpts = optList.querySelectorAll(".quiz-option");
        allOpts.forEach(o => o.style.pointerEvents = "none");

        if (idx === q.correct) {
          div.classList.add("correct");
          score++;
          feedbackBox.innerHTML = `
            <div style="background:rgba(16, 185, 129, 0.15); border-left:3px solid var(--emerald-accent); padding:1rem; border-radius:0 8px 8px 0; color:#fff;">
              <strong>Correct! 🌟</strong> ${q.explanation}
            </div>
          `;
        } else {
          div.classList.add("incorrect");
          allOpts[q.correct].classList.add("correct");
          feedbackBox.innerHTML = `
            <div style="background:rgba(239, 68, 68, 0.15); border-left:3px solid #ef4444; padding:1rem; border-radius:0 8px 8px 0; color:#fff;">
              <strong>Incorrect.</strong> ${q.explanation}
            </div>
          `;
        }

        feedbackBox.style.display = "block";
        nextBtn.style.display = "inline-flex";
      });
      optList.appendChild(div);
    });

    nextBtn.addEventListener("click", () => {
      currentIdx++;
      renderQuestion();
    });
  }

  renderQuestion();
}

// 7. Beginner / Intermediate / Pro Level Filter
function initLevelFilter() {
  const levelBtns = document.querySelectorAll(".level-btn");
  levelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      levelBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const level = btn.getAttribute("data-level");

      document.querySelectorAll("[data-tier]").forEach(sec => {
        if (level === "all" || sec.getAttribute("data-tier") === level) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });
    });
  });
}

// --- True Moon & Nakshatra Computation ---
function getTrueMoonAndNakshatra(date, hoursFraction = 0) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours() + (date.getMinutes() / 60) + hoursFraction;

  const currentJD = getJulianDay(year, month, day, hours);
  const ahargana = currentJD - SS_CONSTANTS.KALI_EPOCH_JD;
  const totalDays = SS_CONSTANTS.SAVANA_DAYS_MAHAYUGA;

  function getRevDeg(revs) {
    const raw = (ahargana * revs) / totalDays;
    return (raw - Math.floor(raw)) * 360;
  }

  const meanMoon = getRevDeg(SS_CONSTANTS.REVOLUTIONS.moon);
  const moonApogee = getRevDeg(SS_CONSTANTS.REVOLUTIONS.moonApogee);

  // Manda-phala (Equation of Centre) for Moon in Surya Siddhanta:
  // Epicycle = 32°
  const anomalyDeg = ((meanMoon - moonApogee) % 360 + 360) % 360;
  const anomalyRad = anomalyDeg * (Math.PI / 180);
  const mandaCorrectionDeg = (32.0 / 360.0) * (180.0 / Math.PI) * Math.sin(anomalyRad);

  const trueMoon = ((meanMoon - mandaCorrectionDeg) % 360 + 360) % 360;
  const totalArcMinutes = trueMoon * 60;

  // 27 Nakshatras: 800 arcminutes (13° 20') each
  const nakIndex = Math.floor(totalArcMinutes / 800) % 27;
  const nakData = NAKSHATRAS_DETAILED[nakIndex];

  const elapsedMinutes = totalArcMinutes % 800;
  const elapsedDegFloat = elapsedMinutes / 60;
  const elapsedDegInt = Math.floor(elapsedDegFloat);
  const elapsedMinInt = Math.floor((elapsedDegFloat - elapsedDegInt) * 60);

  // 4 Padas: 200 arcminutes (3° 20') each
  const pada = Math.floor(elapsedMinutes / 200) + 1;
  const progressPct = ((elapsedMinutes / 800) * 100).toFixed(1);

  // Format True Moon longitude
  const degInt = Math.floor(trueMoon);
  const minFloat = (trueMoon - degInt) * 60;
  const minInt = Math.floor(minFloat);
  const secInt = Math.round((minFloat - minInt) * 60);

  const rashiIndex = Math.floor(trueMoon / 30);
  const rashi = RASHIS[rashiIndex];

  return {
    nakshatra: nakData,
    nakIndex: nakIndex,
    pada: pada,
    progressPct: progressPct,
    elapsedString: `${elapsedDegInt}° ${elapsedMinInt}' / 13° 20'`,
    trueMoonDeg: `${degInt}° ${minInt}' ${secInt}"`,
    rashi: rashi,
    activeSyllable: nakData.syllables[pada - 1]
  };
}

// 8. Header Navigation Active Highlight & Scroll Spy
function initScrollSpy() {
  const navItems = Array.from(document.querySelectorAll(".site-header .nav-item"));
  const sectionIds = [
    "foundations",
    "calculator",
    "nakshatra",
    "epicycles",
    "trig",
    "sundial",
    "time-systems",
    "chapters",
    "quiz"
  ];

  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!navItems.length || !sections.length) return;

  function setActive(activeId) {
    navItems.forEach(item => {
      const href = item.getAttribute("href");
      if (href === `#${activeId}`) {
        item.classList.add("active");
        // Only scroll the horizontal nav container if needed, never window.scroll
        const container = item.parentElement;
        if (container && container.scrollWidth > container.clientWidth) {
          const itemLeft = item.offsetLeft;
          const containerWidth = container.clientWidth;
          container.scrollTo({
            left: itemLeft - (containerWidth / 2) + (item.offsetWidth / 2),
            behavior: "smooth"
          });
        }
      } else {
        item.classList.remove("active");
      }
    });
  }

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Check bottom of page
    if (scrollY + windowHeight >= docHeight - 50) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    const headerOffset = 90;
    let currentId = sections[0].id;

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      const top = sec.offsetTop - headerOffset;
      if (scrollY >= top) {
        currentId = sec.id;
      } else {
        break;
      }
    }

    setActive(currentId);
  }

  // Smooth scroll and immediate highlight on click
  navItems.forEach(item => {
    item.addEventListener("click", e => {
      const href = item.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          navItems.forEach(n => n.classList.remove("active"));
          item.classList.add("active");
          const headerOffset = 65;
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: targetTop,
            behavior: "smooth"
          });
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

// 9. Interactive Nakshatra Visualizer & Transit Controller
function initNakshatraVisualizer() {
  const dateInput = document.getElementById("nakDateInput");
  const nowBtn = document.getElementById("nakNowBtn");
  const modalBackdrop = document.getElementById("nakModalBackdrop");
  const modalClose = document.getElementById("nakModalClose");

  if (!dateInput) return;

  const now = new Date();
  dateInput.value = now.toISOString().split("T")[0];

  function refreshNakshatra() {
    const dateVal = dateInput.value;
    if (!dateVal) return;
    const selectedDate = new Date(dateVal + "T12:00:00");
    const data = getTrueMoonAndNakshatra(selectedDate);
    renderActiveNakshatra(data, selectedDate);
    render7DayForecast(selectedDate);
  }

  dateInput.addEventListener("change", refreshNakshatra);
  if (nowBtn) {
    nowBtn.addEventListener("click", () => {
      dateInput.value = new Date().toISOString().split("T")[0];
      refreshNakshatra();
    });
  }

  // Render 27 Nakshatras Grid
  renderNakshatraCards("all", "");
  initNakshatraFilters();

  // Modal close handlers
  if (modalClose && modalBackdrop) {
    modalClose.addEventListener("click", () => {
      modalBackdrop.style.display = "none";
    });
    modalBackdrop.addEventListener("click", e => {
      if (e.target === modalBackdrop) modalBackdrop.style.display = "none";
    });
  }

  // Birth Nakshatra Finder
  initBirthNakshatraTool();

  // Initial execution
  refreshNakshatra();
}

function renderActiveNakshatra(data, dateObj) {
  const nak = data.nakshatra;

  const nameEl = document.getElementById("nakActiveName");
  const iconEl = document.getElementById("nakActiveIcon");
  const devEl = document.getElementById("nakActiveDev");
  const moonDegEl = document.getElementById("nakActiveMoonDeg");
  const rashiEl = document.getElementById("nakActiveRashi");
  const deityEl = document.getElementById("nakActiveDeity");
  const lordEl = document.getElementById("nakActiveLord");
  const starEl = document.getElementById("nakActiveStar");
  const natureEl = document.getElementById("nakActiveNature");
  const elementEl = document.getElementById("nakActiveElement");
  const ganaEl = document.getElementById("nakActiveGana");
  const muhurtaEl = document.getElementById("nakActiveMuhurta");
  const syllableEl = document.getElementById("nakActiveSyllable");
  const progressFill = document.getElementById("nakProgressFill");
  const progressText = document.getElementById("nakProgressText");

  if (nameEl) nameEl.innerText = `${nak.nameEn} (${nak.nameSa})`;
  if (iconEl) iconEl.innerText = nak.symbolIcon;
  if (devEl) devEl.innerText = `${nak.symbolText} • ${nak.range}`;
  if (moonDegEl) moonDegEl.innerText = data.trueMoonDeg;
  if (rashiEl) rashiEl.innerText = `${data.rashi.symbol} ${data.rashi.sa} • ${data.rashi.te} (${data.rashi.en})`;
  if (deityEl) deityEl.innerText = nak.deity;
  if (lordEl) lordEl.innerText = nak.lord;
  if (starEl) starEl.innerText = nak.star;
  if (natureEl) natureEl.innerText = nak.nature;
  if (elementEl) elementEl.innerText = nak.element;
  if (ganaEl) ganaEl.innerText = nak.gana;
  if (muhurtaEl) muhurtaEl.innerText = nak.muhurta;
  if (syllableEl) syllableEl.innerText = `${data.activeSyllable} (Pāda ${data.pada}: All syllables: ${nak.syllables.join(", ")})`;

  if (progressFill) progressFill.style.width = `${data.progressPct}%`;
  if (progressText) progressText.innerText = `${data.elapsedString} (${data.progressPct}% elapsed)`;

  // Update Padas indicator
  for (let p = 1; p <= 4; p++) {
    const pEl = document.getElementById(`pada_${p}`);
    if (pEl) {
      if (p === data.pada) pEl.classList.add("active-pada");
      else pEl.classList.remove("active-pada");
    }
  }
}

function render7DayForecast(startDate) {
  const container = document.getElementById("nakForecastContainer");
  if (!container) return;
  container.innerHTML = "";

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let d = 0; d < 7; d++) {
    const futureDate = new Date(startDate.getTime() + d * 86400000);
    const dayData = getTrueMoonAndNakshatra(futureDate);
    const dayName = dayNames[futureDate.getDay()];
    const dateFormatted = `${dayName}, ${futureDate.getDate()} ${futureDate.toLocaleString('default', { month: 'short' })}`;

    const item = document.createElement("div");
    item.className = `forecast-item ${d === 0 ? "active-day" : ""}`;
    item.innerHTML = `
      <div class="forecast-date">${d === 0 ? "Today" : dateFormatted}</div>
      <div class="forecast-symbol">${dayData.nakshatra.symbolIcon}</div>
      <div class="forecast-name">${dayData.nakshatra.nameEn}</div>
      <div style="font-size:0.75rem; color:var(--gold-bright); font-weight:600;">Pāda ${dayData.pada}</div>
      <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">${dayData.rashi.symbol} ${dayData.rashi.en}</div>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".forecast-item").forEach(el => el.classList.remove("active-day"));
      item.classList.add("active-day");
      renderActiveNakshatra(dayData, futureDate);
    });

    container.appendChild(item);
  }
}

function renderNakshatraCards(filterGroup, searchTerm) {
  const grid = document.getElementById("nakshatraCardsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const term = (searchTerm || "").toLowerCase().trim();

  NAKSHATRAS_DETAILED.forEach(nak => {
    // Check group filter
    let matchGroup = true;
    if (filterGroup === "deva") matchGroup = nak.gana.includes("Deva");
    else if (filterGroup === "manushya") matchGroup = nak.gana.includes("Manushya");
    else if (filterGroup === "rakshasa") matchGroup = nak.gana.includes("Rakshasa");
    else if (filterGroup === "earth") matchGroup = nak.element.includes("Earth");
    else if (filterGroup === "water") matchGroup = nak.element.includes("Water");
    else if (filterGroup === "fire") matchGroup = nak.element.includes("Fire");
    else if (filterGroup === "air") matchGroup = nak.element.includes("Air") || nak.element.includes("Ether");

    // Check search term
    let matchSearch = true;
    if (term) {
      matchSearch =
        nak.nameEn.toLowerCase().includes(term) ||
        nak.nameSa.toLowerCase().includes(term) ||
        nak.deity.toLowerCase().includes(term) ||
        nak.lord.toLowerCase().includes(term) ||
        nak.star.toLowerCase().includes(term);
    }

    if (!matchGroup || !matchSearch) return;

    const card = document.createElement("div");
    card.className = "nak-card";
    card.innerHTML = `
      <div>
        <div class="nak-card-top">
          <span class="nak-num">#${nak.id}</span>
          <span style="font-size:1.4rem;">${nak.symbolIcon}</span>
        </div>
        <div class="nak-name">${nak.nameEn} <span style="font-size:0.85rem; color:var(--gold-bright); font-family:var(--font-body);">${nak.nameSa}</span></div>
        <div class="nak-dev">${nak.symbolText}</div>
        <div class="nak-range">${nak.range}</div>
        <p style="font-size:0.82rem; color:var(--text-muted); line-height:1.5; margin-bottom:0.75rem;">
          Deity: <strong>${nak.deity}</strong> • Lord: <strong>${nak.lord}</strong>
        </p>
      </div>
      <div>
        <div class="nak-meta-row">
          <span>${nak.gana}</span>
          <span>${nak.nature.split('/')[0]}</span>
          <span>${nak.element}</span>
        </div>
        <div style="font-size:0.75rem; color:var(--gold-dim); margin-top:0.4rem; text-align:right;">
          Click to inspect details ➔
        </div>
      </div>
    `;

    card.addEventListener("click", () => openNakshatraModal(nak));
    grid.appendChild(card);
  });
}

function initNakshatraFilters() {
  const filterBtns = document.querySelectorAll(".nak-filter-btn");
  const searchInput = document.getElementById("nakSearchInput");

  let currentGroup = "all";

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGroup = btn.getAttribute("data-group");
      renderNakshatraCards(currentGroup, searchInput ? searchInput.value : "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      renderNakshatraCards(currentGroup, e.target.value);
    });
  }
}

function openNakshatraModal(nak) {
  const backdrop = document.getElementById("nakModalBackdrop");
  const modalContent = document.getElementById("nakModalContent");
  if (!backdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
      <span style="font-size:2.8rem; background:rgba(255,255,255,0.05); padding:0.5rem; border-radius:14px; border:1px solid rgba(255,255,255,0.1);">${nak.symbolIcon}</span>
      <div>
        <span class="hero-pill" style="margin-bottom:0.25rem;">Nakshatra #${nak.id} • ${nak.nameSa}</span>
        <h3 style="font-family:var(--font-display); font-size:1.8rem; color:#fff; line-height:1.2;">${nak.nameEn}</h3>
        <span style="color:var(--cyan-accent); font-family:var(--font-mono); font-size:0.85rem;">${nak.range}</span>
      </div>
    </div>

    <div class="nak-attr-grid">
      <div class="nak-attr-item">
        <label>Presiding Deity (Devatā):</label>
        <div>${nak.deity}</div>
      </div>
      <div class="nak-attr-item">
        <label>Ruling Planet / Dasha Lord:</label>
        <div>${nak.lord}</div>
      </div>
      <div class="nak-attr-item">
        <label>Astronomical Junction Star (Yogatārā):</label>
        <div>${nak.star}</div>
      </div>
      <div class="nak-attr-item">
        <label>Symbol & Manifestation:</label>
        <div>${nak.symbolText}</div>
      </div>
      <div class="nak-attr-item">
        <label>Temperament / Gana:</label>
        <div>${nak.gana}</div>
      </div>
      <div class="nak-attr-item">
        <label>Nature (Kṛtya / Quality):</label>
        <div>${nak.nature}</div>
      </div>
      <div class="nak-attr-item">
        <label>Five Elements (Mahābhūta):</label>
        <div>${nak.element}</div>
      </div>
      <div class="nak-attr-item">
        <label>4 Pāda Naming Sounds (Nāmākṣara):</label>
        <div style="color:var(--gold-bright);">${nak.syllables.join(" • ")}</div>
      </div>
    </div>

    <div style="background:rgba(245, 185, 66, 0.08); border-left:3px solid var(--gold-primary); padding:1rem 1.25rem; border-radius:0 10px 10px 0; margin-bottom:1rem;">
      <strong style="color:var(--gold-bright); font-size:0.85rem; display:block; margin-bottom:0.25rem;">AUSPICIOUS ACTIVITIES (MUHŪRTA / KRITYA):</strong>
      <p style="font-size:0.88rem; color:#e2e8f0; margin:0; line-height:1.6;">${nak.muhurta}</p>
    </div>

    <div style="background:rgba(56, 189, 248, 0.08); border-left:3px solid var(--cyan-accent); padding:1rem 1.25rem; border-radius:0 10px 10px 0;">
      <strong style="color:var(--cyan-accent); font-size:0.85rem; display:block; margin-bottom:0.25rem;">ESOTERIC & COSMOLOGICAL SIGNIFICANCE:</strong>
      <p style="font-size:0.88rem; color:#e2e8f0; margin:0; line-height:1.6;">${nak.desc}</p>
    </div>
  `;

  backdrop.style.display = "flex";
}

// 10. Birth Nakshatra Finder
function initBirthNakshatraTool() {
  const btn = document.getElementById("birthNakCalcBtn");
  const dateIn = document.getElementById("birthDateInput");
  const timeIn = document.getElementById("birthTimeInput");
  const resArea = document.getElementById("birthNakResultArea");

  if (!btn || !dateIn || !resArea) return;

  btn.addEventListener("click", () => {
    const dVal = dateIn.value;
    if (!dVal) return;
    const tVal = (timeIn && timeIn.value) ? timeIn.value : "12:00";
    const birthDate = new Date(`${dVal}T${tVal}:00`);

    const data = getTrueMoonAndNakshatra(birthDate);
    const nak = data.nakshatra;

    resArea.innerHTML = `
      <div style="background:linear-gradient(135deg, rgba(245, 185, 66, 0.15), rgba(168, 85, 247, 0.12)); border:1px solid var(--border-gold); border-radius:14px; padding:1.5rem; margin-top:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
          <h4 style="font-family:var(--font-display); font-size:1.4rem; color:#fff;">
            ${nak.symbolIcon} Your Birth Star: <span style="color:var(--gold-bright);">${nak.nameEn} (${nak.nameSa})</span>
          </h4>
          <span class="tag tag-featured">Pāda ${data.pada}</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:0.75rem; font-size:0.85rem; color:#e2e8f0; margin-bottom:1rem;">
          <div>Zodiac Sign (Rāśi): <strong>${data.rashi.symbol} ${data.rashi.sa} • ${data.rashi.te} (${data.rashi.en})</strong></div>
          <div>Moon Longitude: <strong>${data.trueMoonDeg}</strong></div>
          <div>Ruling Deity: <strong>${nak.deity}</strong></div>
          <div>Ruling Planet Lord: <strong>${nak.lord}</strong></div>
          <div>Temperament (Gana): <strong>${nak.gana}</strong></div>
          <div>Primary Element: <strong>${nak.element}</strong></div>
        </div>

        <div style="background:rgba(0,0,0,0.3); padding:0.85rem 1rem; border-radius:8px; font-size:0.88rem; color:#fff;">
          Auspicious Name Syllable: <strong style="color:var(--gold-bright); font-size:1.1rem; margin-left:0.35rem;">"${data.activeSyllable}"</strong>
          <span style="color:var(--text-muted); font-size:0.8rem; margin-left:0.5rem;">(According to classical naming convention)</span>
        </div>
      </div>
    `;
    resArea.style.display = "block";
  });
}
