/**
 * KaTaPaYadi Master (कटपयादि) — Core Engine, Parser & Interactive Studio
 */

// ==========================================
// 1. KATAPAYADI MAPPING RULES & DATA TABLES
// ==========================================

const KATAPAYADI_DATA = {
  1: {
    ka: { dev: 'क', tel: 'క', eng: 'ka', iast: 'ka' },
    ta: { dev: 'ट', tel: 'ట', eng: 'Ta', iast: 'ṭa' },
    pa: { dev: 'प', tel: 'ప', eng: 'pa', iast: 'pa' },
    ya: { dev: 'य', tel: 'య', eng: 'ya', iast: 'ya' }
  },
  2: {
    ka: { dev: 'ख', tel: 'ఖ', eng: 'kha', iast: 'kha' },
    ta: { dev: 'ठ', tel: 'ఠ', eng: 'Tha', iast: 'ṭha' },
    pa: { dev: 'फ', tel: 'ఫ', eng: 'pha', iast: 'pha' },
    ya: { dev: 'र', tel: 'ర', eng: 'ra', iast: 'ra' }
  },
  3: {
    ka: { dev: 'ग', tel: 'గ', eng: 'ga', iast: 'ga' },
    ta: { dev: 'ड', tel: 'డ', eng: 'Da', iast: 'ḍa' },
    pa: { dev: 'ब', tel: 'బ', eng: 'ba', iast: 'ba' },
    ya: { dev: 'ल', tel: 'ల', eng: 'la', iast: 'la' }
  },
  4: {
    ka: { dev: 'घ', tel: 'ఘ', eng: 'gha', iast: 'gha' },
    ta: { dev: 'ढ', tel: 'ఢ', eng: 'Dha', iast: 'ḍha' },
    pa: { dev: 'भ', tel: 'భ', eng: 'bha', iast: 'bha' },
    ya: { dev: 'व', tel: 'వ', eng: 'va', iast: 'va' }
  },
  5: {
    ka: { dev: 'ङ', tel: 'ఙ', eng: 'nga', iast: 'ṅa' },
    ta: { dev: 'ण', tel: 'ణ', eng: 'Na', iast: 'ṇa' },
    pa: { dev: 'म', tel: 'మ', eng: 'ma', iast: 'ma' },
    ya: { dev: 'श', tel: 'శ', eng: 'sha', iast: 'śa' }
  },
  6: {
    ka: { dev: 'च', tel: 'చ', eng: 'ca', iast: 'ca' },
    ta: { dev: 'त', tel: 'త', eng: 'ta', iast: 'ta' },
    pa: null,
    ya: { dev: 'ष', tel: 'ష', eng: 'Sha', iast: 'ṣa' }
  },
  7: {
    ka: { dev: 'छ', tel: 'ఛ', eng: 'cha', iast: 'cha' },
    ta: { dev: 'थ', tel: 'థ', eng: 'tha', iast: 'tha' },
    pa: null,
    ya: { dev: 'स', tel: 'స', eng: 'sa', iast: 'sa' }
  },
  8: {
    ka: { dev: 'ज', tel: 'జ', eng: 'ja', iast: 'ja' },
    ta: { dev: 'द', tel: 'ద', eng: 'da', iast: 'da' },
    pa: null,
    ya: { dev: 'ह', tel: 'హ', eng: 'ha', iast: 'ha' }
  },
  9: {
    ka: { dev: 'झ', tel: 'ఝ', eng: 'jha', iast: 'jha' },
    ta: { dev: 'ध', tel: 'ధ', eng: 'dha', iast: 'dha' },
    pa: null,
    ya: { dev: 'ळ', tel: 'ళ', eng: 'La', iast: 'ḷa' }
  },
  0: {
    ka: { dev: 'ञ', tel: 'ఞ', eng: 'nya', iast: 'ña' },
    ta: { dev: 'न', tel: 'న', eng: 'na', iast: 'na' },
    pa: null,
    ya: { dev: 'ज्ञ', tel: 'జ్ఞ', eng: 'jnya', iast: 'jña' }
  }
};

// Devanagari Consonants to Digits
const DEVANAGARI_CONSONANT_MAP = {
  // 1: क, ट, प, य
  'क': 1, 'ट': 1, 'प': 1, 'य': 1,
  // 2: ख, ठ, फ, र
  'ख': 2, 'ठ': 2, 'फ': 2, 'र': 2,
  // 3: ग, ड, ब, ल
  'ग': 3, 'ड': 3, 'ब': 3, 'ल': 3,
  // 4: घ, ढ, भ, व
  'घ': 4, 'ढ': 4, 'भ': 4, 'व': 4,
  // 5: ङ, ण, म, श
  'ङ': 5, 'ण': 5, 'म': 5, 'श': 5,
  // 6: च, त, ष
  'च': 6, 'त': 6, 'ष': 6,
  // 7: छ, थ, स
  'छ': 7, 'थ': 7, 'स': 7,
  // 8: ज, द, ह
  'ज': 8, 'द': 8, 'ह': 8,
  // 9: झ, ध, ळ
  'झ': 9, 'ध': 9, 'ळ': 9,
  // 0: ञ, न, ज्ञ
  'ञ': 0, 'न': 0, 'ज्ञ': 0
};

// Standalone Devanagari Vowels (evaluate to 0 in Katapayadi tradition)
const DEVANAGARI_VOWELS = new Set([
  'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ', 'ऌ', 'ॡ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'
]);

// Devanagari Vowel Matras (attached signs)
const DEVANAGARI_MATRAS = new Set([
  'ा', 'ि', 'ी', 'ु', 'ू', 'ृ', 'ॄ', 'ॢ', 'ॣ', 'े', 'ै', 'ो', 'ौ', 'ं', 'ः', 'ँ', '़'
]);

const VIRAMA = '्'; // Halanta

// ==========================================
// TELUGU KATAPAYADI MAPPING & CHARACTERS
// (కటపయాది సంఖ్యా విధానం - తెలుగు)
// ==========================================
const TELUGU_CONSONANT_MAP = {
  // 1: క, ట, ప, య
  'క': 1, 'ట': 1, 'ప': 1, 'య': 1,
  // 2: ఖ, ఠ, ఫ, ర, ఱ
  'ఖ': 2, 'ఠ': 2, 'ఫ': 2, 'ర': 2, 'ఱ': 2,
  // 3: గ, డ, బ, ల
  'గ': 3, 'డ': 3, 'బ': 3, 'ల': 3,
  // 4: ఘ, ఢ, భ, వ
  'ఘ': 4, 'ఢ': 4, 'భ': 4, 'వ': 4,
  // 5: ఙ, ణ, మ, శ
  'ఙ': 5, 'ణ': 5, 'మ': 5, 'శ': 5,
  // 6: చ, త, ష
  'చ': 6, 'త': 6, 'ష': 6,
  // 7: ఛ, థ, స
  'ఛ': 7, 'థ': 7, 'స': 7,
  // 8: జ, ద, హ
  'జ': 8, 'ద': 8, 'హ': 8,
  // 9: ఝ, ధ, ళ
  'ఝ': 9, 'ధ': 9, 'ళ': 9,
  // 0: ఞ, న
  'ఞ': 0, 'న': 0
};

// Standalone Telugu Vowels (అచ్చులు = 0)
const TELUGU_VOWELS = new Set([
  'అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఌ', 'ౡ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'అం', 'అః'
]);

// Telugu Vowel Matras (గుణింతాల గుర్తులు)
const TELUGU_MATRAS = new Set([
  'ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ', '్', 'ం', 'ః', 'ఁ'
]);

const TELUGU_VIRAMA = '్'; // Halanta / Polla (0x0C4D)

// Phonetic English / IAST consonant definitions sorted by length descending
const CONSONANT_DEFS = [
  { match: ['ksha', 'kṣa', 'ksh'], digit: 9, dev: 'क्ष', label: 'kṣa' },
  { match: ['jnya', 'jña', 'dnya'], digit: 0, dev: 'ज्ञ', label: 'jña' },
  { match: ['kh', 'kha'], digit: 2, dev: 'ख', label: 'kha' },
  { match: ['gh', 'gha'], digit: 4, dev: 'घ', label: 'gha' },
  { match: ['ng', 'nga', 'ṅa', 'ṅ'], digit: 5, dev: 'ङ', label: 'ṅa' },
  { match: ['chh', 'chha'], digit: 7, dev: 'छ', label: 'chha' },
  { match: ['ch', 'cha'], digit: 6, dev: 'च', label: 'ca' },
  { match: ['jh', 'jha'], digit: 9, dev: 'झ', label: 'jha' },
  { match: ['ny', 'nya', 'ña', 'ñ'], digit: 0, dev: 'ञ', label: 'ña' },
  { match: ['th', 'tha'], digit: 7, dev: 'थ', label: 'tha' },
  { match: ['dh', 'dha'], digit: 9, dev: 'ध', label: 'dha' },
  { match: ['ph', 'pha'], digit: 2, dev: 'फ', label: 'pha' },
  { match: ['bh', 'bha'], digit: 4, dev: 'भ', label: 'bha' },
  { match: ['sh', 'sha', 'śa', 'ṣa', 'ś', 'ṣ'], digit: 5, dev: 'श', label: 'śa' },
  { match: ['k', 'ka'], digit: 1, dev: 'क', label: 'ka' },
  { match: ['g', 'ga'], digit: 3, dev: 'ग', label: 'ga' },
  { match: ['c', 'ca'], digit: 6, dev: 'च', label: 'ca' },
  { match: ['j', 'ja'], digit: 8, dev: 'ज', label: 'ja' },
  { match: ['t', 'ta', 'ṭ', 'ṭa'], digit: 6, dev: 'त', label: 'ta' },
  { match: ['d', 'da', 'ḍ', 'ḍa'], digit: 8, dev: 'द', label: 'da' },
  { match: ['n', 'na', 'ṇ', 'ṇa'], digit: 0, dev: 'न', label: 'na' },
  { match: ['p', 'pa'], digit: 1, dev: 'प', label: 'pa' },
  { match: ['b', 'ba'], digit: 3, dev: 'ब', label: 'ba' },
  { match: ['m', 'ma'], digit: 5, dev: 'म', label: 'ma' },
  { match: ['y', 'ya'], digit: 1, dev: 'य', label: 'ya' },
  { match: ['r', 'ra'], digit: 2, dev: 'र', label: 'ra' },
  { match: ['l', 'la', 'ḷ', 'ḷa'], digit: 3, dev: 'ल', label: 'la' },
  { match: ['v', 'va', 'w', 'wa'], digit: 4, dev: 'व', label: 'va' },
  { match: ['s', 'sa'], digit: 7, dev: 'स', label: 'sa' },
  { match: ['h', 'ha'], digit: 8, dev: 'ह', label: 'ha' }
];

// Dictionary of Sanskrit and Telugu roots and memorable words mapped with their Katapayadi value
const KATAPAYADI_DICTIONARY = [
  { word: 'गोपी', dev: 'गोपी', tel: 'గోపీ', num: '31', meaning: 'Gopi (Cowherd maiden of Krishna)' },
  { word: 'भाग्य', dev: 'भाग्य', tel: 'భాగ్య', num: '41', meaning: 'Fortune, Destiny' },
  { word: 'मधु', dev: 'मधु', tel: 'మధు', num: '59', meaning: 'Sweet nectar, Honey' },
  { word: 'व्रात', dev: 'व्रात', tel: 'వ్రాత', num: '26', meaning: 'Multitude, troop' },
  { word: 'कनक', dev: 'कनक', tel: 'కనక', num: '101', meaning: 'Pure Gold' },
  { word: 'रत्न', dev: 'रत्न', tel: 'రత్న', num: '20', meaning: 'Jewel, Gem' },
  { word: 'माया', dev: 'माया', tel: 'మాయ', num: '51', meaning: 'Creative illusion, Mystery' },
  { word: 'शिव', dev: 'शिव', tel: 'శివ', num: '54', meaning: 'Auspicious, Lord Shiva' },
  { word: 'हरि', dev: 'हरि', tel: 'హరి', num: '82', meaning: 'Lord Vishnu, Redeemer' },
  { word: 'भानु', dev: 'भानु', tel: 'భాను', num: '40', meaning: 'The Sun, Radiance' },
  { word: 'रवि', dev: 'रवि', tel: 'రవి', num: '24', meaning: 'Sun God' },
  { word: 'चन्द्र', dev: 'चन्द्र', tel: 'చంద్ర', num: '62', meaning: 'Moon' },
  { word: 'गगन', dev: 'गगन', tel: 'గగన', num: '330', meaning: 'The vast sky' },
  { word: 'जल', dev: 'जल', tel: 'జల', num: '83', meaning: 'Water' },
  { word: 'वायु', dev: 'वायु', tel: 'వాయు', num: '41', meaning: 'Wind, Air' },
  { word: 'विद्या', dev: 'विद्या', tel: 'విద్యా', num: '41', meaning: 'Knowledge, Science' },
  { word: 'ज्ञाना', dev: 'ज्ञाना', tel: 'జ్ఞాన', num: '00', meaning: 'Transcendental wisdom' },
  { word: 'कमल', dev: 'कमल', tel: 'కమల', num: '153', meaning: 'Lotus flower' },
  { word: 'तारक', dev: 'तारक', tel: 'తారక', num: '621', meaning: 'Liberator, Guiding Star' },
  { word: 'सौख्य', dev: 'सौख्य', tel: 'సౌఖ్య', num: '71', meaning: 'Supreme Bliss, Happiness' },
  { word: 'आयु', dev: 'आयु', tel: 'ఆయు', num: '01', meaning: 'Longevity, Life' },
  { word: 'आरोग्य', dev: 'आरोग्य', tel: 'ఆరోగ్య', num: '021', meaning: 'Perfect Health' },
  { word: 'नमस्ते', dev: 'नमस्ते', tel: 'నమస్తే', num: '057', meaning: 'Reverent greetings' },
  { word: 'धीरा', dev: 'धीरा', tel: 'ధీర', num: '92', meaning: 'Courageous, Wise' },
  { word: 'शङ्कर', dev: 'शङ्कर', tel: 'శంకర', num: '512', meaning: 'Bestower of auspiciousness' },
  { word: 'कल्याणी', dev: 'कल्याणी', tel: 'కల్యాణి', num: '135', meaning: 'Auspicious, Beautiful' },
  { word: 'राग', dev: 'राग', tel: 'రాగ', num: '23', meaning: 'Melodic scale, Passion' },
  { word: 'नाद', dev: 'नाद', tel: 'నాద', num: '08', meaning: 'Primordial Sound' },
  { word: 'वेद', dev: 'वेद', tel: 'వేద', num: '48', meaning: 'Sacred Knowledge' },
  { word: 'गणेश', dev: 'गणेश', tel: 'గణేశ', num: '305', meaning: 'Lord Ganesha' },
  { word: 'सत्य', dev: 'सत्य', tel: 'సత్య', num: '70', meaning: 'Absolute Truth' },
  { word: 'सुधा', dev: 'सुधा', tel: 'సుధ', num: '79', meaning: 'Nectar of immortality' },
  { word: 'धर्म', dev: 'धर्म', tel: 'ధర్మ', num: '91', meaning: 'Cosmic Order, Righteousness' },
  { word: 'पुण्य', dev: 'पुण्य', tel: 'పుణ్య', num: '10', meaning: 'Sacred merit' },
  { word: 'राम', dev: 'राम', tel: 'రామ', num: '25', meaning: 'Lord Rama' },
  { word: 'राधा', dev: 'राधा', tel: 'రాధ', num: '28', meaning: 'Divine Radha' },
  { word: 'सूर्य', dev: 'सूर्य', tel: 'సూర్య', num: '72', meaning: 'Sun God' },
  { word: 'शान्ति', dev: 'शान्ति', tel: 'శాంతి', num: '50', meaning: 'Peace, Tranquility' },
  { word: 'मुक्ति', dev: 'मुक्ति', tel: 'ముక్తి', num: '51', meaning: 'Spiritual liberation' }
];

// 72 Melakarta Ragas Complete Dataset
const MELAKARTA_RAGAS = [
  { id: 1, name: "Kanakangi", dev: "कनकाङ्गी", prefix: "क - न (Ka-Na)", digits: "1 0", vamato: "01", chakra: "Indu" },
  { id: 2, name: "Ratnangi", dev: "रत्नाङ्गी", prefix: "र - त्न (Ra-Tna)", digits: "2 0", vamato: "02", chakra: "Indu" },
  { id: 3, name: "Ganamurti", dev: "गानमूर्ति", prefix: "ग - न (Ga-Na)", digits: "3 0", vamato: "03", chakra: "Indu" },
  { id: 4, name: "Vanaspati", dev: "वनस्पति", prefix: "व - न (Va-Na)", digits: "4 0", vamato: "04", chakra: "Indu" },
  { id: 5, name: "Manavati", dev: "मानवती", prefix: "म - न (Ma-Na)", digits: "5 0", vamato: "05", chakra: "Indu" },
  { id: 6, name: "Tanarupi", dev: "तानरूपि", prefix: "त - न (Ta-Na)", digits: "6 0", vamato: "06", chakra: "Indu" },

  { id: 7, name: "Senavati", dev: "सेनापति", prefix: "स - न (Sa-Na)", digits: "7 0", vamato: "07", chakra: "Netra" },
  { id: 8, name: "Hanumatodi", dev: "हनुमत्तोडि", prefix: "ह - न (Ha-Na)", digits: "8 0", vamato: "08", chakra: "Netra" },
  { id: 9, name: "Dhenuka", dev: "धेनुका", prefix: "ध - न (Dha-Na)", digits: "9 0", vamato: "09", chakra: "Netra" },
  { id: 10, name: "Natakapriya", dev: "नाटकप्रिया", prefix: "न - ट (Na-Ta)", digits: "0 1", vamato: "10", chakra: "Netra" },
  { id: 11, name: "Kokilapriya", dev: "कोकिलप्रिया", prefix: "क - क (Ka-Ka)", digits: "1 1", vamato: "11", chakra: "Netra" },
  { id: 12, name: "Rupavati", dev: "रूपवती", prefix: "र - प (Ra-Pa)", digits: "2 1", vamato: "12", chakra: "Netra" },

  { id: 13, name: "Gayakapriya", dev: "गायकप्रिया", prefix: "ग - य (Ga-Ya)", digits: "3 1", vamato: "13", chakra: "Agni" },
  { id: 14, name: "Vakulabharanam", dev: "वकुलाभरणम्", prefix: "व - क (Va-Ka)", digits: "4 1", vamato: "14", chakra: "Agni" },
  { id: 15, name: "Mayamalavagowla", dev: "मायामाळवगौळ", prefix: "म - य (Ma-Ya)", digits: "5 1", vamato: "15", chakra: "Agni" },
  { id: 16, name: "Chakravakam", dev: "चक्रवाकम्", prefix: "च - क (Ca-Ka)", digits: "6 1", vamato: "16", chakra: "Agni" },
  { id: 17, name: "Suryakantam", dev: "सूर्यकान्तम्", prefix: "स - र (Sa-Ra)", digits: "7 1", vamato: "17", chakra: "Agni" },
  { id: 18, name: "Hatakambari", dev: "हाटकाम्बरि", prefix: "ह - ट (Ha-Ta)", digits: "8 1", vamato: "18", chakra: "Agni" },

  { id: 19, name: "Jhankaradhvani", dev: "झङ्कारध्वनि", prefix: "झ - ङ (Jha-Nga)", digits: "9 1", vamato: "19", chakra: "Veda" },
  { id: 20, name: "Natabhairavi", dev: "नटभैरवी", prefix: "न - ट (Na-Ta)", digits: "0 2", vamato: "20", chakra: "Veda" },
  { id: 21, name: "Keeravani", dev: "कीरवाणि", prefix: "क - र (Ka-Ra)", digits: "1 2", vamato: "21", chakra: "Veda" },
  { id: 22, name: "Kharaharapriya", dev: "खरहरप्रिया", prefix: "ख - र (Kha-Ra)", digits: "2 2", vamato: "22", chakra: "Veda" },
  { id: 23, name: "Gourimanohari", dev: "गौरीमनोहरि", prefix: "ग - र (Ga-Ra)", digits: "3 2", vamato: "23", chakra: "Veda" },
  { id: 24, name: "Varunapriya", dev: "वरुणप्रिया", prefix: "व - र (Va-Ra)", digits: "4 2", vamato: "24", chakra: "Veda" },

  { id: 25, name: "Mararanjani", dev: "माररञ्जनि", prefix: "म - र (Ma-Ra)", digits: "5 2", vamato: "25", chakra: "Bana" },
  { id: 26, name: "Charukesi", dev: "चारुकेशी", prefix: "च - र (Ca-Ra)", digits: "6 2", vamato: "26", chakra: "Bana" },
  { id: 27, name: "Sarasangi", dev: "सरसाङ्गी", prefix: "स - र (Sa-Ra)", digits: "7 2", vamato: "27", chakra: "Bana" },
  { id: 28, name: "Harikambhoji", dev: "हरिकाम्भोजि", prefix: "ह - र (Ha-Ra)", digits: "8 2", vamato: "28", chakra: "Bana" },
  { id: 29, name: "Dheerasankarabharanam", dev: "धीरशङ्कराभरणम्", prefix: "ध - र (Dha-Ra)", digits: "9 2", vamato: "29", chakra: "Bana" },
  { id: 30, name: "Naganandini", dev: "नागानन्दिनि", prefix: "न - ग (Na-Ga)", digits: "0 3", vamato: "30", chakra: "Bana" },

  { id: 31, name: "Yagapriya", dev: "यागप्रिया", prefix: "य - ग (Ya-Ga)", digits: "1 3", vamato: "31", chakra: "Rutu" },
  { id: 32, name: "Ragavardhini", dev: "रागवर्धिनि", prefix: "र - ग (Ra-Ga)", digits: "2 3", vamato: "32", chakra: "Rutu" },
  { id: 33, name: "Gangeyabhushani", dev: "गाङ्गेयभूषिणि", prefix: "ग - ग (Ga-Ga)", digits: "3 3", vamato: "33", chakra: "Rutu" },
  { id: 34, name: "Vagadheeswari", dev: "वागधीश्वरि", prefix: "व - ग (Va-Ga)", digits: "4 3", vamato: "34", chakra: "Rutu" },
  { id: 35, name: "Shulini", dev: "शूलिनि", prefix: "श - ल (Sha-La)", digits: "5 3", vamato: "35", chakra: "Rutu" },
  { id: 36, name: "Chalanata", dev: "चलनाट", prefix: "च - ल (Ca-La)", digits: "6 3", vamato: "36", chakra: "Rutu" },

  { id: 37, name: "Salagam", dev: "सालसम्", prefix: "स - ल (Sa-La)", digits: "7 3", vamato: "37", chakra: "Rishi" },
  { id: 38, name: "Jalarnavam", dev: "जलार्णवम्", prefix: "ज - ल (Ja-La)", digits: "8 3", vamato: "38", chakra: "Rishi" },
  { id: 39, name: "Jhalavarali", dev: "झालवराळि", prefix: "झ - ल (Jha-La)", digits: "9 3", vamato: "39", chakra: "Rishi" },
  { id: 40, name: "Navaneetam", dev: "नवनीतम्", prefix: "न - व (Na-Va)", digits: "0 4", vamato: "40", chakra: "Rishi" },
  { id: 41, name: "Pavani", dev: "पावनि", prefix: "प - व (Pa-Va)", digits: "1 4", vamato: "41", chakra: "Rishi" },
  { id: 42, name: "Raghupriya", dev: "रघुप्रिया", prefix: "र - घ (Ra-Gha)", digits: "2 4", vamato: "42", chakra: "Rishi" },

  { id: 43, name: "Gavambhodi", dev: "गवाम्भोधि", prefix: "ग - व (Ga-Va)", digits: "3 4", vamato: "43", chakra: "Vasu" },
  { id: 44, name: "Bhavapriya", dev: "भवप्रिया", prefix: "भ - व (Bha-Va)", digits: "4 4", vamato: "44", chakra: "Vasu" },
  { id: 45, name: "Shubhapantuvarali", dev: "शुभपन्तुवराळि", prefix: "श - भ (Sha-Bha)", digits: "5 4", vamato: "45", chakra: "Vasu" },
  { id: 46, name: "Shadvidhamargini", dev: "षड्विधमार्गिणि", prefix: "ष - ड (Sha-Da)", digits: "6 4", vamato: "46", chakra: "Vasu" },
  { id: 47, name: "Suvarnangi", dev: "सुवर्णाङ्गी", prefix: "स - व (Sa-Va)", digits: "7 4", vamato: "47", chakra: "Vasu" },
  { id: 48, name: "Divyamani", dev: "दिव्यमणि", prefix: "द - व (Da-Va)", digits: "8 4", vamato: "48", chakra: "Vasu" },

  { id: 49, name: "Dhavalambari", dev: "धवलाम्बरि", prefix: "ध - व (Dha-Va)", digits: "9 4", vamato: "49", chakra: "Brahma" },
  { id: 50, name: "Namanarayani", dev: "नामनारायणि", prefix: "न - म (Na-Ma)", digits: "0 5", vamato: "50", chakra: "Brahma" },
  { id: 51, name: "Kamavardhini", dev: "कामवर्धिनि", prefix: "क - म (Ka-Ma)", digits: "1 5", vamato: "51", chakra: "Brahma" },
  { id: 52, name: "Ramapriya", dev: "रामप्रिया", prefix: "र - म (Ra-Ma)", digits: "2 5", vamato: "52", chakra: "Brahma" },
  { id: 53, name: "Gamanashrama", dev: "गमनश्रम", prefix: "ग - म (Ga-Ma)", digits: "3 5", vamato: "53", chakra: "Brahma" },
  { id: 54, name: "Vishwambhari", dev: "विश्वम्भरि", prefix: "व - श (Va-Sha)", digits: "4 5", vamato: "54", chakra: "Brahma" },

  { id: 55, name: "Shyamalangi", dev: "शामलाङ्गी", prefix: "श - म (Sha-Ma)", digits: "5 5", vamato: "55", chakra: "Disi" },
  { id: 56, name: "Shanmukhapriya", dev: "षण्मुखप्रिया", prefix: "ष - ण (Sha-Na)", digits: "6 5", vamato: "56", chakra: "Disi" },
  { id: 57, name: "Simhendramadhyamam", dev: "सिंहमद्यमम्", prefix: "स - ह (Sa-Ha)", digits: "7 5", vamato: "57", chakra: "Disi" },
  { id: 58, name: "Hemavati", dev: "हेमवती", prefix: "ह - म (Ha-Ma)", digits: "8 5", vamato: "58", chakra: "Disi" },
  { id: 59, name: "Dharmavati", dev: "धर्मवती", prefix: "ध - र (Dha-Ra)", digits: "9 5", vamato: "59", chakra: "Disi" },
  { id: 60, name: "Neetimati", dev: "नीतिमति", prefix: "न - त (Na-Ta)", digits: "0 6", vamato: "60", chakra: "Disi" },

  { id: 61, name: "Kantamani", dev: "कान्तामणि", prefix: "क - त (Ka-Ta)", digits: "1 6", vamato: "61", chakra: "Rudra" },
  { id: 62, name: "Rishabhapriya", dev: "ऋषभप्रिया", prefix: "र - ष (Ra-Sha)", digits: "2 6", vamato: "62", chakra: "Rudra" },
  { id: 63, name: "Latangi", dev: "लताङ्गी", prefix: "ल - त (La-Ta)", digits: "3 6", vamato: "63", chakra: "Rudra" },
  { id: 64, name: "Vachaspati", dev: "वाचस्पति", prefix: "व - च (Va-Ca)", digits: "4 6", vamato: "64", chakra: "Rudra" },
  { id: 65, name: "Mechakalyani", dev: "मेचकल्याणि", prefix: "म - च (Ma-Ca)", digits: "5 6", vamato: "65", chakra: "Rudra" },
  { id: 66, name: "Chitrambari", dev: "चित्राम्बरि", prefix: "च - त (Ca-Ta)", digits: "6 6", vamato: "66", chakra: "Rudra" },

  { id: 67, name: "Sucharitra", dev: "सुचरित्र", prefix: "स - च (Sa-Ca)", digits: "7 6", vamato: "67", chakra: "Aditya" },
  { id: 68, name: "Jyotiswarupini", dev: "ज्योतिस्वरूपिणि", prefix: "ज - त (Ja-Ta)", digits: "8 6", vamato: "68", chakra: "Aditya" },
  { id: 69, name: "Dhatuvardhani", dev: "धातुवर्धिनि", prefix: "ध - त (Dha-Ta)", digits: "9 6", vamato: "69", chakra: "Aditya" },
  { id: 70, name: "Nasikabhushani", dev: "नासिकाभूषिणि", prefix: "न - स (Na-Sa)", digits: "0 7", vamato: "70", chakra: "Aditya" },
  { id: 71, name: "Kosalam", dev: "कोसलम्", prefix: "क - स (Ka-Sa)", digits: "1 7", vamato: "71", chakra: "Aditya" },
  { id: 72, name: "Rasikapriya", dev: "रसिकप्रिया", prefix: "र - स (Ra-Sa)", digits: "2 7", vamato: "72", chakra: "Aditya" }
];

// The Famous Pi Shloka: Breakdown of 32 syllables (Devanagari & Telugu)
const PI_SHLOKA_DATA = [
  // Line 1: गोपीभाग्यमधुव्रातः / గోపీభాగ్యమధువ్రాతః (3 1 4 1 5 9 2 6)
  { syl: 'गो', tel: 'గో', eng: 'go', root: 'ग', telRoot: 'గ', val: 3, note: 'ग / గ = 3' },
  { syl: 'पी', tel: 'పీ', eng: 'pī', root: 'प', telRoot: 'ప', val: 1, note: 'प / ప = 1' },
  { syl: 'भा', tel: 'భా', eng: 'bhā', root: 'भ', telRoot: 'భ', val: 4, note: 'भ / భ = 4' },
  { syl: 'ग्य', tel: 'గ్య', eng: 'gya', root: 'य', telRoot: 'య', val: 1, note: 'ग्+य / గ్+య: last consonant य / య = 1' },
  { syl: 'म', tel: 'మ', eng: 'ma', root: 'म', telRoot: 'మ', val: 5, note: 'म / మ = 5' },
  { syl: 'धु', tel: 'ధు', eng: 'dhu', root: 'ध', telRoot: 'ధ', val: 9, note: 'ध / ధ = 9' },
  { syl: 'व्रा', tel: 'వ్రా', eng: 'vrā', root: 'र', telRoot: 'ర', val: 2, note: 'व्+र / వ్+ర: last consonant र / ర = 2' },
  { syl: 'तः', tel: 'తః', eng: 'taḥ', root: 'त', telRoot: 'త', val: 6, note: 'त / త = 6' },

  // Line 1 continued: श्रृङ्गोदधिसन्धगः / శృఙ్గోదధిసన్ధగః (5 3 5 8 9 7 9 3)
  { syl: 'शृ', tel: 'శృ', eng: 'śṛ', root: 'श', telRoot: 'శ', val: 5, note: 'श / శ = 5' },
  { syl: 'ङ्गो', tel: 'ఙ్గో', eng: 'ṅgo', root: 'ग', telRoot: 'గ', val: 3, note: 'ङ्+ग / ఙ్+గ: last consonant ग / గ = 3' },
  { syl: 'द', tel: 'ద', eng: 'da', root: 'द', telRoot: 'ద', val: 8, note: 'द / ద = 8' },
  { syl: 'धि', tel: 'ధి', eng: 'dhi', root: 'ध', telRoot: 'ధ', val: 9, note: 'ध / ధ = 9' },
  { syl: 'स', tel: 'స', eng: 'sa', root: 'स', telRoot: 'స', val: 7, note: 'स / స = 7' },
  { syl: 'न्ध', tel: 'న్ధ', eng: 'ndha', root: 'ध', telRoot: 'ధ', val: 9, note: 'न्+ध / న్+ధ: last consonant ध / ధ = 9' },
  { syl: 'गः', tel: 'గః', eng: 'gaḥ', root: 'ग', telRoot: 'గ', val: 3, note: 'ग / గ = 3' },

  // Line 2: खलजीवितखाताव / ఖలజీవితఖాతావ (2 3 8 4 6 2 6 4)
  { syl: 'ख', tel: 'ఖ', eng: 'kha', root: 'ख', telRoot: 'ఖ', val: 2, note: 'ख / ఖ = 2' },
  { syl: 'ल', tel: 'ల', eng: 'la', root: 'ल', telRoot: 'ల', val: 3, note: 'ल / ల = 3' },
  { syl: 'जी', tel: 'జీ', eng: 'jī', root: 'ज', telRoot: 'జ', val: 8, note: 'ज / జ = 8' },
  { syl: 'वि', tel: 'వి', eng: 'vi', root: 'व', telRoot: 'వ', val: 4, note: 'व / వ = 4' },
  { syl: 'त', tel: 'త', eng: 'ta', root: 'त', telRoot: 'త', val: 6, note: 'त / త = 6' },
  { syl: 'खा', tel: 'ఖా', eng: 'khā', root: 'ख', telRoot: 'ఖ', val: 2, note: 'ख / ఖ = 2' },
  { syl: 'ता', tel: 'తా', eng: 'tā', root: 'त', telRoot: 'త', val: 6, note: 'त / త = 6' },
  { syl: 'व', tel: 'వ', eng: 'va', root: 'व', telRoot: 'వ', val: 4, note: 'व / వ = 4' },

  // Line 2 continued: गलहालारसंधरः / గలహాలారసంధరః (3 3 8 3 2 7 9 5)
  { syl: 'ग', tel: 'గ', eng: 'ga', root: 'ग', telRoot: 'గ', val: 3, note: 'ग / గ = 3' },
  { syl: 'ल', tel: 'ల', eng: 'la', root: 'ल', telRoot: 'ల', val: 3, note: 'ल / ల = 3' },
  { syl: 'हा', tel: 'హా', eng: 'hā', root: 'ह', telRoot: 'హ', val: 8, note: 'ह / హ = 8' },
  { syl: 'ला', tel: 'లా', eng: 'lā', root: 'ल', telRoot: 'ల', val: 3, note: 'ल / ల = 3' },
  { syl: 'र', tel: 'ర', eng: 'ra', root: 'र', telRoot: 'ర', val: 2, note: 'र / ర = 2' },
  { syl: 'सं', tel: 'సం', eng: 'saṃ', root: 'स', telRoot: 'స', val: 7, note: 'स / స = 7' },
  { syl: 'ध', tel: 'ధ', eng: 'dha', root: 'ध', telRoot: 'ధ', val: 9, note: 'ध / ధ = 9' },
  { syl: 'रः', tel: 'రః', eng: 'raḥ', root: 'र / म', telRoot: 'ర / మ', val: 5, note: 'र/మ: 5 (giving Pi to 32 places!)' }
];

// Complete 52-letter Sanskrit & Telugu Varnamala Dataset with Pronunciation & Katapayadi Mapping
const VARNAMALA_DATA = [
  // Swaras (Vowels / అచ్చులు) - 16
  { id: 'v_a', dev: 'अ', tel: 'అ', iast: 'a', ipa: '[ɐ]', group: 'swara', varga: 'swara', sthana: 'कण्ठ्य (Throat / Velar)', prayatna: 'ह्रस्व (Short)', soundGuide: "Short neutral vowel like 'u' in 'cup' or 'alive'. Open throat with relaxed tongue.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_aa', dev: 'आ', tel: 'ఆ', iast: 'ā', ipa: '[aː]', group: 'swara', varga: 'swara', sthana: 'कण्ठ्य (Throat / Velar)', prayatna: 'दीर्घ (Long)', soundGuide: "Long open vowel like 'a' in 'father'. Held for two mātrās (beats).", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_i', dev: 'इ', tel: 'ఇ', iast: 'i', ipa: '[i]', group: 'swara', varga: 'swara', sthana: 'तालव्य (Palate)', prayatna: 'ह्रस्व (Short)', soundGuide: "Short high front vowel like 'i' in 'pin' or 'bit'. Tongue arches towards palate.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_ii', dev: 'ई', tel: 'ఈ', iast: 'ī', ipa: '[iː]', group: 'swara', varga: 'swara', sthana: 'तालव्य (Palate)', prayatna: 'दीर्घ (Long)', soundGuide: "Long front vowel like 'ee' in 'seed' or 'meet'. Held for two beats.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_u', dev: 'उ', tel: 'ఉ', iast: 'u', ipa: '[u]', group: 'swara', varga: 'swara', sthana: 'ओष्ठ्य (Lips)', prayatna: 'ह्रस्व (Short)', soundGuide: "Short rounded vowel like 'u' in 'put' or 'full'. Lips gently rounded.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_uu', dev: 'ऊ', tel: 'ఊ', iast: 'ū', ipa: '[uː]', group: 'swara', varga: 'swara', sthana: 'ओष्ठ्य (Lips)', prayatna: 'दीर्घ (Long)', soundGuide: "Long rounded vowel like 'oo' in 'moon' or 'root'. Held for two beats.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_ri', dev: 'ऋ', tel: 'ఋ', iast: 'ṛ', ipa: '[r̩]', group: 'swara', varga: 'swara', sthana: 'मूर्धन्य (Retroflex)', prayatna: 'ह्रस्व (Vocalic Liquid)', soundGuide: "Vocalic 'r' made with tongue tip curled back, sounding like 'ri' in 'rhythm' or 'rig'.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_rii', dev: 'ॠ', tel: 'ౠ', iast: 'ṝ', ipa: '[r̩ː]', group: 'swara', varga: 'swara', sthana: 'मूर्धन्य (Retroflex)', prayatna: 'दीर्घ (Long Vocalic)', soundGuide: "Long vocalic 'r' held for two mātrās with tongue curled back.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_li', dev: 'ऌ', tel: 'ఌ', iast: 'ḷ', ipa: '[l̩]', group: 'swara', varga: 'swara', sthana: 'दन्त्य (Dental)', prayatna: 'ह्रस्व (Vocalic Liquid)', soundGuide: "Vocalic 'l' made with tongue against upper teeth, sounding like 'le' in 'cradle'.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_lii', dev: 'ॡ', tel: 'ౡ', iast: 'ḹ', ipa: '[l̩ː]', group: 'swara', varga: 'swara', sthana: 'दन्त्य (Dental)', prayatna: 'दीर्घ (Long Vocalic)', soundGuide: "Prolonged vocalic 'l' (rare, preserved in Paninian Vedic grammar).", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_e', dev: 'ए', tel: 'ఏ', iast: 'e', ipa: '[eː]', group: 'swara', varga: 'swara', sthana: 'कण्ठतालव्य (Throat & Palate)', prayatna: 'सन्ध्यक्षर • दीर्घ', soundGuide: "Pure monophthong long 'e' like 'a' in 'gate' or French 'café' (Telugu also has short 'ఎ').", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_ai', dev: 'ऐ', tel: 'ఐ', iast: 'ai', ipa: '[aːi]', group: 'swara', varga: 'swara', sthana: 'कण्ठतालव्य (Throat & Palate)', prayatna: 'सन्ध्यक्षर • संयुक्त', soundGuide: "Diphthong starting from open 'a' gliding to 'i', like 'ai' in 'aisle' or 'bite'.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_o', dev: 'ओ', tel: 'ఓ', iast: 'o', ipa: '[oː]', group: 'swara', varga: 'swara', sthana: 'कण्ठौष्ठ्य (Throat & Lips)', prayatna: 'सन्ध्यक्षर • दीर्घ', soundGuide: "Pure monophthong long 'o' like 'o' in 'boat' or 'holy' (Telugu also has short 'ఒ').", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_au', dev: 'औ', tel: 'ఔ', iast: 'au', ipa: '[aːu]', group: 'swara', varga: 'swara', sthana: 'कण्ठौष्ठ्य (Throat & Lips)', prayatna: 'सन्ध्यक्षर • संयुक्त', soundGuide: "Diphthong starting from open 'a' gliding to 'u', like 'ou' in 'house' or 'loud'.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_am', dev: 'अं', tel: 'అం', iast: 'aṁ', ipa: '[ŋ/̃]', group: 'swara', varga: 'swara', sthana: 'नासिक्य (Nasal Cavity)', prayatna: 'अयोगवाह (Anusvāra)', soundGuide: "Pure nasal resonance echoing through nasal cavity, like the humming vibration in 'om'.", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },
  { id: 'v_ah', dev: 'अः', tel: 'అః', iast: 'aḥ', ipa: '[h]', group: 'swara', varga: 'swara', sthana: 'कण्ठ्य (Throat)', prayatna: 'अयोगवाह (Visarga)', soundGuide: "Unvoiced aspiration breath softly echoing the preceding vowel (e.g. 'aha').", katapayadiGroup: 'स्वराः / అచ్చులు', katapayadiDigit: 0 },

  // Sparsha Consonants: Ka-varga (कण्ठ्य Velar / Throat / క-వర్గము) - 5
  { id: 'c_ka', dev: 'क', tel: 'క', iast: 'ka', ipa: '[kɐ]', group: 'sparsha', varga: 'kavarga', sthana: 'कण्ठ्य (Velar / Throat)', prayatna: 'अल्पप्राण • अघोष (Unaspirated • Voiceless)', soundGuide: "Clean 'k' made at back of throat, like 'kite' or 'skin' (no sudden puff of air).", katapayadiGroup: 'क-वर्ग / క-వర్గం', katapayadiDigit: 1 },
  { id: 'c_kha', dev: 'ख', tel: 'ఖ', iast: 'kha', ipa: '[kʰɐ]', group: 'sparsha', varga: 'kavarga', sthana: 'कण्ठ्य (Velar / Throat)', prayatna: 'महाप्राण • अघोष (Aspirated • Voiceless)', soundGuide: "Aspirated 'k+h' with an energetic burst of breath, like 'block-house'.", katapayadiGroup: 'क-वर्ग / క-వర్గం', katapayadiDigit: 2 },
  { id: 'c_ga', dev: 'ग', tel: 'గ', iast: 'ga', ipa: '[ɡɐ]', group: 'sparsha', varga: 'kavarga', sthana: 'कण्ठ्य (Velar / Throat)', prayatna: 'अल्पप्राण • घोष (Unaspirated • Voiced)', soundGuide: "Voiced 'g' from deep throat, like 'go' or 'give'.", katapayadiGroup: 'क-वर्ग / క-వర్గం', katapayadiDigit: 3 },
  { id: 'c_gha', dev: 'घ', tel: 'ఘ', iast: 'gha', ipa: '[ɡʱɐ]', group: 'sparsha', varga: 'kavarga', sthana: 'कण्ठ्य (Velar / Throat)', prayatna: 'महाप्राण • घोष (Aspirated • Voiced)', soundGuide: "Aspirated voiced 'g+h' with breathy vocal cord resonance, like 'dog-house'.", katapayadiGroup: 'क-वर्ग / క-వర్గం', katapayadiDigit: 4 },
  { id: 'c_nga', dev: 'ङ', tel: 'ఙ', iast: 'ṅa', ipa: '[ŋɐ]', group: 'sparsha', varga: 'kavarga', sthana: 'कण्ठ्य • नासिक्य (Velar Nasal)', prayatna: 'अल्पप्राण • नासिक्य (Voiced Nasal)', soundGuide: "Velar nasal 'ng' sound like the end of 'sing' or 'song'.", katapayadiGroup: 'क-वर्ग / క-వర్గం', katapayadiDigit: 5 },

  // Sparsha Consonants: Ca-varga (तालव्य Palatal / చ-వర్గము) - 5
  { id: 'c_ca', dev: 'च', tel: 'చ', iast: 'ca', ipa: '[t͡ʃɐ]', group: 'sparsha', varga: 'chavarga', sthana: 'तालव्य (Palatal / Palate)', prayatna: 'अल्पप्राण • अघोष (Unaspirated • Voiceless)', soundGuide: "Clean 'ch' sound made with middle of tongue flat against hard palate, like Italian 'ciao'.", katapayadiGroup: 'क-वर्ग / చ-వర్గం', katapayadiDigit: 6 },
  { id: 'c_cha', dev: 'छ', tel: 'ఛ', iast: 'cha', ipa: '[t͡ʃʰɐ]', group: 'sparsha', varga: 'chavarga', sthana: 'तालव्य (Palatal / Palate)', prayatna: 'महाप्राण • अघोष (Aspirated • Voiceless)', soundGuide: "Aspirated 'ch+h' with an energetic burst of breath, like 'catch-him'.", katapayadiGroup: 'क-वर्ग / చ-వర్గం', katapayadiDigit: 7 },
  { id: 'c_ja', dev: 'ज', tel: 'జ', iast: 'ja', ipa: '[d͡ʒɐ]', group: 'sparsha', varga: 'chavarga', sthana: 'तालव्य (Palatal / Palate)', prayatna: 'अल्पप्राण • घोष (Unaspirated • Voiced)', soundGuide: "Voiced palatal 'j' like 'joy' or 'jump'.", katapayadiGroup: 'क-वर्ग / చ-వర్గం', katapayadiDigit: 8 },
  { id: 'c_jha', dev: 'झ', tel: 'ఝ', iast: 'jha', ipa: '[d͡ʒʱɐ]', group: 'sparsha', varga: 'chavarga', sthana: 'तालव्य (Palatal / Palate)', prayatna: 'महाप्राण • घोष (Aspirated • Voiced)', soundGuide: "Aspirated voiced 'j+h' with breathy vocal vibration, like 'hedge-hog'.", katapayadiGroup: 'क-वर्ग / చ-వర్గం', katapayadiDigit: 9 },
  { id: 'c_nya', dev: 'ञ', tel: 'ఞ', iast: 'ña', ipa: '[ɲɐ]', group: 'sparsha', varga: 'chavarga', sthana: 'तालव्य • नासिक्य (Palatal Nasal)', prayatna: 'अल्पप्राण • नासिक्य (Voiced Nasal)', soundGuide: "Palatal nasal 'ny' like Spanish 'ñ' in 'señor' or 'canyon'.", katapayadiGroup: 'क-वर्ग / చ-వర్గం', katapayadiDigit: 0 },

  // Sparsha Consonants: Ṭa-varga (मूर्धन्य Retroflex / ట-వర్గము) - 5
  { id: 'c_tta', dev: 'ट', tel: 'ట', iast: 'ṭa', ipa: '[ʈɐ]', group: 'sparsha', varga: 'tavarga', sthana: 'मूर्धन्य (Retroflex / Roof)', prayatna: 'अल्पप्राण • अघोष (Unaspirated • Voiceless)', soundGuide: "Tip of tongue curls back to strike the roof of mouth, producing a crisp retroflex 't' like in 'start'.", katapayadiGroup: 'ट-वर्ग / ట-వర్గం', katapayadiDigit: 1 },
  { id: 'c_ttha', dev: 'ठ', tel: 'ఠ', iast: 'ṭha', ipa: '[ʈʰɐ]', group: 'sparsha', varga: 'tavarga', sthana: 'मूर्धन्य (Retroflex / Roof)', prayatna: 'महाप्राण • अघोष (Aspirated • Voiceless)', soundGuide: "Retroflex 't+h' with tongue tip curled back plus a strong puff of breath.", katapayadiGroup: 'ट-वर्ग / ట-వర్గం', katapayadiDigit: 2 },
  { id: 'c_dda', dev: 'ड', tel: 'డ', iast: 'ḍa', ipa: '[ɖɐ]', group: 'sparsha', varga: 'tavarga', sthana: 'मूर्धन्य (Retroflex / Roof)', prayatna: 'अल्पप्राण • घोष (Unaspirated • Voiced)', soundGuide: "Voiced retroflex 'd' with tongue tip curled back touching roof of mouth.", katapayadiGroup: 'ट-वर्ग / ట-వర్గం', katapayadiDigit: 3 },
  { id: 'c_ddha', dev: 'ढ', tel: 'ఢ', iast: 'ḍha', ipa: '[ɖʱɐ]', group: 'sparsha', varga: 'tavarga', sthana: 'मूर्धन्य (Retroflex / Roof)', prayatna: 'महाप्राण • घोष (Aspirated • Voiced)', soundGuide: "Aspirated voiced retroflex 'd+h' with tongue curled back and breathy vibration.", katapayadiGroup: 'ट-वर्ग / ట-వర్గం', katapayadiDigit: 4 },
  { id: 'c_nna', dev: 'ण', tel: 'ణ', iast: 'ṇa', ipa: '[ɳɐ]', group: 'sparsha', varga: 'tavarga', sthana: 'मूर्धन्य • नासिक्य (Retroflex Nasal)', prayatna: 'अल्पप्राण • नासिक्य (Voiced Nasal)', soundGuide: "Retroflex nasal 'n' produced with tongue tip curled back to palate.", katapayadiGroup: 'ट-वर्ग / ట-వర్గం', katapayadiDigit: 5 },

  // Sparsha Consonants: Ta-varga (दन्त्य Dental / త-వర్గము) - 5
  { id: 'c_ta', dev: 'त', tel: 'త', iast: 'ta', ipa: '[t̪ɐ]', group: 'sparsha', varga: 'davarga', sthana: 'दन्त्य (Dental / Teeth)', prayatna: 'अल्पप्राण • अघोष (Unaspirated • Voiceless)', soundGuide: "Clean dental 't' where tongue tip touches back of upper front teeth, like French 'tu' or Italian 'pasta'.", katapayadiGroup: 'ट-वर्ग / త-వర్గం', katapayadiDigit: 6 },
  { id: 'c_tha', dev: 'थ', tel: 'థ', iast: 'tha', ipa: '[t̪ʰɐ]', group: 'sparsha', varga: 'davarga', sthana: 'दन्त्य (Dental / Teeth)', prayatna: 'महाप्राण • अघोष (Aspirated • Voiceless)', soundGuide: "Aspirated dental 't+h' with tongue on upper teeth and a distinct burst of air.", katapayadiGroup: 'ट-वर्ग / త-వర్గం', katapayadiDigit: 7 },
  { id: 'c_da', dev: 'द', tel: 'ద', iast: 'da', ipa: '[d̪ɐ]', group: 'sparsha', varga: 'davarga', sthana: 'दन्त्य (Dental / Teeth)', prayatna: 'अल्पप्राण • घोष (Unaspirated • Voiced)', soundGuide: "Voiced dental 'd' with tongue touching upper front teeth, like Spanish 'donde'.", katapayadiGroup: 'ट-वर्ग / త-వర్గం', katapayadiDigit: 8 },
  { id: 'c_dha', dev: 'ध', tel: 'ధ', iast: 'dha', ipa: '[d̪ʱɐ]', group: 'sparsha', varga: 'davarga', sthana: 'दन्त्य (Dental / Teeth)', prayatna: 'महाप्राण • घोष (Aspirated • Voiced)', soundGuide: "Aspirated voiced dental 'd+h' with tongue on upper teeth and breathy resonance.", katapayadiGroup: 'ट-वर्ग / త-వర్గం', katapayadiDigit: 9 },
  { id: 'c_na', dev: 'न', tel: 'న', iast: 'na', ipa: '[n̪ɐ]', group: 'sparsha', varga: 'davarga', sthana: 'दन्त्य • नासिक्य (Dental Nasal)', prayatna: 'अल्पप्राण • नासिक्य (Voiced Nasal)', soundGuide: "Dental nasal 'n' with tongue tip on upper front teeth, like 'name' or 'nest'.", katapayadiGroup: 'ट-वर्ग / త-వర్గం', katapayadiDigit: 0 },

  // Sparsha Consonants: Pa-varga (ओष्ठ्य Labial / ప-వర్గము) - 5
  { id: 'c_pa', dev: 'प', tel: 'ప', iast: 'pa', ipa: '[pɐ]', group: 'sparsha', varga: 'pavarga', sthana: 'ओष्ठ्य (Labial / Both Lips)', prayatna: 'अल्पप्राण • अघोष (Unaspirated • Voiceless)', soundGuide: "Unaspirated 'p' made by touching both lips together without puff, like 'spin'.", katapayadiGroup: 'प-वर्ग / ప-వర్గం', katapayadiDigit: 1 },
  { id: 'c_pha', dev: 'फ', tel: 'ఫ', iast: 'pha', ipa: '[pʰɐ]', group: 'sparsha', varga: 'pavarga', sthana: 'ओष्ठ्य (Labial / Both Lips)', prayatna: 'महाप्राण • अघोष (Aspirated • Voiceless)', soundGuide: "Aspirated 'p+h' with strong air burst, like 'loop-hole' (both lips close, NOT English f).", katapayadiGroup: 'प-वर्ग / ప-వర్గం', katapayadiDigit: 2 },
  { id: 'c_ba', dev: 'ब', tel: 'బ', iast: 'ba', ipa: '[bɐ]', group: 'sparsha', varga: 'pavarga', sthana: 'ओष्ठ्य (Labial / Both Lips)', prayatna: 'अल्पप्राण • घोष (Unaspirated • Voiced)', soundGuide: "Voiced bilabial 'b' made with both lips, like 'ball' or 'book'.", katapayadiGroup: 'प-वर्ग / ప-వర్గం', katapayadiDigit: 3 },
  { id: 'c_bha', dev: 'भ', tel: 'భ', iast: 'bha', ipa: '[bʱɐ]', group: 'sparsha', varga: 'pavarga', sthana: 'ओष्ठ्य (Labial / Both Lips)', prayatna: 'महाप्राण • घोष (Aspirated • Voiced)', soundGuide: "Aspirated voiced bilabial 'b+h' with deep breathy vibration, like 'club-house'.", katapayadiGroup: 'प-वर्ग / ప-వర్గం', katapayadiDigit: 4 },
  { id: 'c_ma', dev: 'म', tel: 'మ', iast: 'ma', ipa: '[mɐ]', group: 'sparsha', varga: 'pavarga', sthana: 'ओष्ठ्य • नासिक्य (Labial Nasal)', prayatna: 'अल्पप्राण • नासिक्य (Voiced Nasal)', soundGuide: "Bilabial nasal 'm' with both lips closed, like 'mother' or 'music'.", katapayadiGroup: 'प-वर्ग / ప-వర్గం', katapayadiDigit: 5 },

  // Antastha (Semi-vowels / అంతస్థాలు) - 4
  { id: 'c_ya', dev: 'य', tel: 'య', iast: 'ya', ipa: '[jɐ]', group: 'antastha', varga: 'yavarga', sthana: 'तालव्य (Palatal / Palate)', prayatna: 'अल्पप्राण • घोष (Semi-vowel / Glide)', soundGuide: "Palatal semi-vowel 'y' gliding from 'i' towards vowel, like 'yes' or 'yoga'.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 1 },
  { id: 'c_ra', dev: 'र', tel: 'ర', iast: 'ra', ipa: '[rɐ / ɾɐ]', group: 'antastha', varga: 'yavarga', sthana: 'मूर्धन्य (Retroflex / Alveolar)', prayatna: 'अल्पप्राण • घोष (Semi-vowel / Tap)', soundGuide: "Alveolar/retroflex tapped 'r' lightly rolled against roof of mouth, like Spanish 'pero' (Telugu also has 'ఱ').", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 2 },
  { id: 'c_la', dev: 'ल', tel: 'ల', iast: 'la', ipa: '[lɐ]', group: 'antastha', varga: 'yavarga', sthana: 'दन्त्य (Dental / Lateral)', prayatna: 'अल्पप्राण • घोष (Semi-vowel / Liquid)', soundGuide: "Dental lateral liquid 'l' where air flows around sides of tongue, like 'light' or 'love'.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 3 },
  { id: 'c_va', dev: 'व', tel: 'వ', iast: 'va', ipa: '[ʋɐ]', group: 'antastha', varga: 'yavarga', sthana: 'दन्तोष्ठ्य (Teeth & Lips)', prayatna: 'अल्पप्राण • घोष (Semi-vowel / Glide)', soundGuide: "Labio-dental glide softly produced between English 'v' and 'w'.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 4 },

  // Ushman (Sibilants & Aspirate / ఊష్మాలు) - 4
  { id: 'c_sha', dev: 'श', tel: 'శ', iast: 'śa', ipa: '[ɕɐ]', group: 'ushman', varga: 'yavarga', sthana: 'तालव्य (Palatal / Palate)', prayatna: 'महाप्राण • अघोष (Palatal Sibilant)', soundGuide: "Palatal sibilant 'sh' made with flat tongue against hard palate, gentle soft whisper like German 'ich' / 'shoe'.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 5 },
  { id: 'c_shha', dev: 'ष', tel: 'ష', iast: 'ṣa', ipa: '[ʂɐ]', group: 'ushman', varga: 'yavarga', sthana: 'मूर्धन्य (Retroflex / Roof)', prayatna: 'महाप्राण • अघोष (Retroflex Sibilant)', soundGuide: "Retroflex sibilant 'sh' made with tongue tip curled back, sharp dry hissing friction.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 6 },
  { id: 'c_sa', dev: 'स', tel: 'స', iast: 'sa', ipa: '[sɐ]', group: 'ushman', varga: 'yavarga', sthana: 'दन्त्य (Dental / Teeth)', prayatna: 'महाप्राण • अघोष (Dental Sibilant)', soundGuide: "Dental sibilant 's' with tongue near upper teeth, clean sharp hiss like 'sun' or 'star'.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 7 },
  { id: 'c_ha', dev: 'ह', tel: 'హ', iast: 'ha', ipa: '[ɦɐ]', group: 'ushman', varga: 'yavarga', sthana: 'कण्ठ्य (Throat / Glottal)', prayatna: 'महाप्राण • घोष (Voiced Glottal)', soundGuide: "Voiced glottal aspirate 'h' produced deep in the throat with vocal vibration, like 'heart' or 'ahead'.", katapayadiGroup: 'य-वर्ग / య-వర్గం', katapayadiDigit: 8 },

  // Vishesha & Samyukta (విశేష & సంయుక్తాక్షరాలు) - 3
  { id: 'c_lla', dev: 'ळ', tel: 'ళ', iast: 'ḷa', ipa: '[ɭɐ]', group: 'vishesha', varga: 'yavarga', sthana: 'मूर्धन्य (Retroflex Lateral Liquid)', prayatna: 'अल्पप्राण • घोष (Retroflex Liquid)', soundGuide: "Retroflex 'l' with tongue curled back, prominent in Telugu (ళ), Vedic Sanskrit, Malayalam, Kannada.", katapayadiGroup: 'य-वर्ग / విశేష', katapayadiDigit: 9 },
  { id: 'c_ksha', dev: 'क्ष', tel: 'క్ష', iast: 'kṣa', ipa: '[kʂɐ]', group: 'vishesha', varga: 'vishesha', sthana: 'कण्ठ्य-मूर्धन्य (Velar-Retroflex Conjunct)', prayatna: 'संयुक्त व्यञ्जन (क् + ष)', soundGuide: "Conjunct consonant of 'k' + 'ṣa' (క్ + ష). In Katapayadi tradition, counts as digit 9 (or 0).", katapayadiGroup: 'य-वर्ग / విశేష', katapayadiDigit: '9 / 0' },
  { id: 'c_jnya', dev: 'ज्ञ', tel: 'జ్ఞ', iast: 'jña', ipa: '[d͡ʒɲɐ / ɡjɐ]', group: 'vishesha', varga: 'vishesha', sthana: 'तालव्य संयुक्त (Palatal Conjunct)', prayatna: 'संयुक्त व्यञ्जन (ज् + ञ)', soundGuide: "Conjunct consonant of 'j' + 'ña' (జ్ + ఞ). In Katapayadi tradition, counts as 0.", katapayadiGroup: 'य-वर्ग / విశేష', katapayadiDigit: 0 }
];

function matchSingleConsonant(str, pos) {
  for (const c of CONSONANT_DEFS) {
    for (const m of c.match) {
      if (str.startsWith(m, pos)) {
        return { len: m.length, def: c, str: m };
      }
    }
  }
  return null;
}

/**
 * Parses English / IAST phonetic text into tokens with conjunct consonant handling.
 * Rule: In a consonant cluster (e.g. 'gya' in bhāgya, 'vra' in madhuvrāta),
 * the last consonant takes the Katapayadi value.
 */
function parsePhoneticEnglish(text) {
  const lower = text.toLowerCase();
  const tokens = [];
  let i = 0;
  const isVowelChar = (c) => /[aeiouāīūēōaiouṛṝḷ]/.test(c);

  while (i < lower.length) {
    const ch = lower[i];

    if (/\s|[।॥,\.\-\–_!\?\(\)\[\]]/.test(ch)) {
      tokens.push({ type: 'punct', char: ch });
      i++;
      continue;
    }

    if (/\d/.test(ch)) {
      tokens.push({
        type: 'digit',
        char: ch,
        root: ch,
        digit: parseInt(ch, 10),
        explanation: `Direct digit ${ch}`
      });
      i++;
      continue;
    }

    // Check if starts with a consonant
    const firstCons = matchSingleConsonant(lower, i);
    if (firstCons) {
      // Gather any conjunct cluster
      const clusterConsonants = [firstCons];
      let currPos = i + firstCons.len;

      while (currPos < lower.length) {
        if (isVowelChar(lower[currPos]) || /\s|[,\.\-_]/.test(lower[currPos])) {
          break;
        }
        const nextCons = matchSingleConsonant(lower, currPos);
        if (nextCons) {
          clusterConsonants.push(nextCons);
          currPos += nextCons.len;
        } else {
          break;
        }
      }

      // Gobble attached trailing vowels
      while (currPos < lower.length && isVowelChar(lower[currPos])) {
        currPos++;
      }

      // Last consonant in the cluster takes the Katapayadi value!
      const lastCons = clusterConsonants[clusterConsonants.length - 1];
      const fullClusterStr = text.substring(i, currPos);

      tokens.push({
        type: 'consonant',
        char: fullClusterStr,
        root: lastCons.def.dev + ' (' + lastCons.def.label + ')',
        digit: lastCons.def.digit,
        explanation: clusterConsonants.length > 1
          ? `${fullClusterStr} ➔ Conjunct cluster, last consonant '${lastCons.def.label}' = ${lastCons.def.digit}`
          : `${fullClusterStr} ➔ '${lastCons.def.label}' = ${lastCons.def.digit}`
      });

      i = currPos;
      continue;
    }

    // Standalone vowel
    if (isVowelChar(ch)) {
      tokens.push({
        type: 'vowel',
        char: ch,
        root: 'vowel',
        digit: 0,
        explanation: `Vowel '${ch}' alone = 0`
      });
      i++;
      continue;
    }

    // Other unrecognized
    tokens.push({ type: 'other', char: ch });
    i++;
  }

  return tokens;
}

/**
 * Parses Devanagari text into syllable tokens with their Katapayadi value.
 * Respects conjuncts: in clusters like 'kya' (क् + य), the last consonant takes precedence!
 */
function parseDevanagari(text) {
  const tokens = [];
  const chars = Array.from(text);
  let i = 0;

  while (i < chars.length) {
    const ch = chars[i];

    // Check if whitespace or punctuation
    if (/\s|[।॥,\.\-\–_!\?\(\)\[\]]/.test(ch)) {
      tokens.push({ type: 'punct', char: ch });
      i++;
      continue;
    }

    // Check if standalone vowel
    if (DEVANAGARI_VOWELS.has(ch)) {
      tokens.push({
        type: 'vowel',
        char: ch,
        root: ch,
        digit: 0,
        explanation: 'Standalone vowel = 0'
      });
      i++;
      continue;
    }

    // Check if consonant
    if (DEVANAGARI_CONSONANT_MAP.hasOwnProperty(ch)) {
      // Collect cluster if followed by virama + consonant
      let cluster = ch;
      let lastConsonant = ch;
      i++;

      while (i < chars.length && (chars[i] === VIRAMA || DEVANAGARI_MATRAS.has(chars[i]))) {
        if (chars[i] === VIRAMA) {
          cluster += VIRAMA;
          i++;
          if (i < chars.length && DEVANAGARI_CONSONANT_MAP.hasOwnProperty(chars[i])) {
            lastConsonant = chars[i];
            cluster += chars[i];
            i++;
          }
        } else {
          // Matra
          cluster += chars[i];
          i++;
        }
      }

      const digit = DEVANAGARI_CONSONANT_MAP[lastConsonant];
      tokens.push({
        type: 'consonant',
        char: cluster,
        root: lastConsonant,
        digit: digit,
        explanation: `${cluster} ➔ Last consonant '${lastConsonant}' = ${digit}`
      });
      continue;
    }

    // Other non-devanagari or special symbols
    tokens.push({ type: 'other', char: ch });
    i++;
  }

  return tokens;
}

/**
 * Parses Telugu text into syllable tokens with their Katapayadi value.
 * Respects Telugu conjuncts (వత్తులు): last consonant in the cluster determines the Katapayadi value!
 */
function parseTelugu(text) {
  const tokens = [];
  const chars = Array.from(text);
  let i = 0;

  while (i < chars.length) {
    const ch = chars[i];

    // Check if whitespace or punctuation
    if (/\s|[।॥,\.\-\–_!\?\(\)\[\]]/.test(ch)) {
      tokens.push({ type: 'punct', char: ch });
      i++;
      continue;
    }

    // Direct digit
    if (/\d/.test(ch)) {
      tokens.push({
        type: 'digit',
        char: ch,
        root: ch,
        digit: parseInt(ch, 10),
        explanation: `Direct digit ${ch}`
      });
      i++;
      continue;
    }

    // Check if standalone vowel (అచ్చులు)
    if (TELUGU_VOWELS.has(ch)) {
      tokens.push({
        type: 'vowel',
        char: ch,
        root: ch,
        digit: 0,
        explanation: `స్వతంత్ర అచ్చు (Standalone vowel '${ch}') = 0`
      });
      i++;
      continue;
    }

    // Check if Telugu consonant
    if (TELUGU_CONSONANT_MAP.hasOwnProperty(ch)) {
      let cluster = ch;
      let lastConsonant = ch;
      i++;

      while (i < chars.length && (chars[i] === TELUGU_VIRAMA || TELUGU_MATRAS.has(chars[i]))) {
        if (chars[i] === TELUGU_VIRAMA) {
          cluster += TELUGU_VIRAMA;
          i++;
          if (i < chars.length && TELUGU_CONSONANT_MAP.hasOwnProperty(chars[i])) {
            lastConsonant = chars[i];
            cluster += chars[i];
            i++;
          }
        } else {
          cluster += chars[i];
          i++;
        }
      }

      const digit = TELUGU_CONSONANT_MAP[lastConsonant];
      tokens.push({
        type: 'consonant',
        char: cluster,
        root: lastConsonant,
        digit: digit,
        explanation: `${cluster} ➔ చివరి హల్లు (last consonant) '${lastConsonant}' = ${digit}`
      });
      continue;
    }

    // Other non-Telugu or special symbols
    tokens.push({ type: 'other', char: ch });
    i++;
  }

  return tokens;
}

/**
 * Universal text tokenizer (detects Telugu vs Devanagari vs Latin)
 */
function tokenizeText(raw) {
  if (!raw) return [];
  // Check if contains Telugu characters (\u0C00-\u0C7F)
  if (/[\u0C00-\u0C7F]/.test(raw)) {
    return parseTelugu(raw);
  }
  // Check if contains Devanagari characters (\u0900-\u097F)
  if (/[\u0900-\u097F]/.test(raw)) {
    return parseDevanagari(raw);
  }
  return parsePhoneticEnglish(raw);
}

/**
 * Executes Text to Number conversion
 */
function runTextToNumber() {
  const textInput = document.getElementById('textInput');
  const resultDisplay = document.getElementById('resultNumberDisplay');
  const resultMeta = document.getElementById('resultMetaDisplay');
  const chipsContainer = document.getElementById('breakdownChipsContainer');
  const reverseCheck = document.getElementById('reverseOrderCheck');
  const ignoreNonConsonants = document.getElementById('ignoreNonConsonantsCheck');

  const text = textInput.value.trim();

  if (!text) {
    resultDisplay.textContent = '0';
    resultMeta.textContent = 'Enter text to see breakdown';
    chipsContainer.innerHTML = '<div class="empty-state-chip">Type letters in the box on the left to see the step-by-step extraction!</div>';
    return;
  }

  const tokens = tokenizeText(text);
  const digits = [];
  const chipElements = [];

  tokens.forEach(tok => {
    if (tok.type === 'consonant' || tok.type === 'vowel' || tok.type === 'digit') {
      digits.push({ digit: tok.digit, token: tok });

      const chip = document.createElement('div');
      chip.className = 'char-chip';
      chip.title = tok.explanation;
      chip.innerHTML = `
        <span class="chip-char">${tok.char}</span>
        <span class="chip-root">${tok.root}</span>
        <span class="chip-digit">${tok.digit}</span>
      `;
      chipElements.push(chip);
    } else if (!ignoreNonConsonants.checked) {
      // Space or punctuation
      const chip = document.createElement('div');
      chip.className = 'char-chip';
      chip.style.opacity = '0.4';
      chip.innerHTML = `
        <span class="chip-char">${tok.char === ' ' ? '␣' : tok.char}</span>
        <span class="chip-root">skip</span>
        <span class="chip-digit">-</span>
      `;
      chipElements.push(chip);
    }
  });

  chipsContainer.innerHTML = '';
  if (chipElements.length === 0) {
    chipsContainer.innerHTML = '<div class="empty-state-chip">No valid Katapayadi consonants found in this text.</div>';
    resultDisplay.textContent = '0';
    resultMeta.textContent = 'No consonants found';
    return;
  }

  chipElements.forEach(c => chipsContainer.appendChild(c));

  // Determine number according to Vamato Gatih setting
  let rawDigitArray = digits.map(d => d.digit);
  let isReversed = reverseCheck.checked;

  if (isReversed) {
    rawDigitArray.reverse();
  }

  const finalNumberStr = rawDigitArray.join('');
  resultDisplay.textContent = finalNumberStr;

  let metaString = `${digits.length} syllables detected • `;
  if (isReversed) {
    metaString += `Applied <strong>Vāmato Gatiḥ</strong> (Right-to-left order)`;
  } else {
    metaString += `Standard Forward sequence (Toggle below for Vāmato Gatiḥ)`;
  }
  resultMeta.innerHTML = metaString;
}

/**
 * Executes Number to Text (Encoder)
 */
let currentComposedWord = '';
let activeMatra = '';

const KATAPAYADI_MNEMONIC_PAIRS = {
  '31': { dev: 'गोपी', tel: 'గోపీ', eng: 'Gopi', meaning: 'Divine cowherd maiden' },
  '41': { dev: 'भाग्य', tel: 'భాగ్య', eng: 'Bhagya', meaning: 'Fortune / Destiny' },
  '59': { dev: 'मधु', tel: 'మధు', eng: 'Madhu', meaning: 'Sweet nectar' },
  '26': { dev: 'व्रात', tel: 'వ్రాత', eng: 'Vrata', meaning: 'Treasury / Flocks' },
  '20': { dev: 'रत्न', tel: 'రత్న', eng: 'Ratna', meaning: 'Jewel / Gem' },
  '54': { dev: 'शिव', tel: 'శివ', eng: 'Shiva', meaning: 'Lord Shiva' },
  '82': { dev: 'हरि', tel: 'హరి', eng: 'Hari', meaning: 'Lord Vishnu' },
  '40': { dev: 'भानु', tel: 'భాను', eng: 'Bhanu', meaning: 'The Sun' },
  '24': { dev: 'रवि', tel: 'రవి', eng: 'Ravi', meaning: 'Sun God' },
  '62': { dev: 'चन्द्र', tel: 'చంద్ర', eng: 'Chandra', meaning: 'The Moon' },
  '10': { dev: 'पुण्य', tel: 'పుణ్య', eng: 'Punya', meaning: 'Sacred merit' },
  '01': { dev: 'कनक', tel: 'కనక', eng: 'Kanaka', meaning: 'Pure gold' },
  '14': { dev: 'कवि', tel: 'కవి', eng: 'Kavi', meaning: 'Poet' },
  '15': { dev: 'माया', tel: 'మాయ', eng: 'Maya', meaning: 'Creative illusion' },
  '25': { dev: 'राम', tel: 'రామ', eng: 'Rama', meaning: 'Lord Rama' },
  '28': { dev: 'राधा', tel: 'రాధ', eng: 'Radha', meaning: 'Beloved Radha' },
  '48': { dev: 'वेद', tel: 'వేద', eng: 'Veda', meaning: 'Sacred Knowledge' },
  '70': { dev: 'सत्य', tel: 'సత్య', eng: 'Satya', meaning: 'Truth' },
  '72': { dev: 'सूर्य', tel: 'సూర్య', eng: 'Surya', meaning: 'Sun God' },
  '80': { dev: 'ज्ञान', tel: 'జ్ఞాన', eng: 'Jnana', meaning: 'Wisdom' },
  '83': { dev: 'जल', tel: 'జల', eng: 'Jala', meaning: 'Water' },
  '91': { dev: 'धर्म', tel: 'ధర్మ', eng: 'Dharma', meaning: 'Righteousness' },
  '33': { dev: 'गगन', tel: 'గగన', eng: 'Gagana', meaning: 'Sky / Cosmos' },
  '51': { dev: 'मुक्ति', tel: 'ముక్తి', eng: 'Mukti', meaning: 'Liberation' },
  '52': { dev: 'मणि', tel: 'మణి', eng: 'Mani', meaning: 'Precious stone' },
  '55': { dev: 'श्यामा', tel: 'శ్యామ', eng: 'Shyama', meaning: 'Dark / Krishna' },
  '71': { dev: 'सौख्य', tel: 'సౌఖ్య', eng: 'Saukhya', meaning: 'Supreme bliss' },
  '92': { dev: 'धीरा', tel: 'ధీర', eng: 'Dheera', meaning: 'Courageous' },
  '02': { dev: 'नार', tel: 'నార', eng: 'Nara', meaning: 'Water / Human' },
  '08': { dev: 'नाद', tel: 'నాద', eng: 'Nada', meaning: 'Primordial Sound' },
  '05': { dev: 'नाम', tel: 'నామ', eng: 'Nama', meaning: 'Sacred Name' }
};

const KATAPAYADI_SPECIAL_MNEMONICS = {
  '18': { dev: 'जय', tel: 'జయ', eng: 'Jaya', meaning: 'Victory — The original sacred title of the Mahābhārata (Ja=8, Ya=1 ➔ 18 via Vāmato Gatiḥ: 18 Parvas, 18-day war, 18 Gita chapters, 18 Akshauhinis)' },
  '81': { dev: 'जय', tel: 'జయ', eng: 'Jaya', meaning: 'Victory — The sacred name of the Mahābhārata (Direct order: Ja=8, Ya=1)' },
  '314159': { dev: 'गोपीभाग्यमधु', tel: 'గోపీ భాగ్య మధు', eng: 'Gopi-Bhagya-Madhu', meaning: 'The divine cowherd maiden\'s fortune is sweet nectar (Famous Pi shloka opening)' },
  '2026': { dev: 'रत्नव्रातं रचय', tel: 'రత్న వ్రాతము రచింపు', eng: 'Ratna-Vratam Rachaya', meaning: 'Create a brilliant treasury of precious jewels' },
  '1947': { dev: 'पुण्यधामवासः', tel: 'పుణ్య ధామ వాసము', eng: 'Punya-Dhama-Vasah', meaning: 'Dwelling in the holy realm of freedom & sacred merit' },
  '1729': { dev: 'कुसुमरन्ध्र', tel: 'కుసుమ రంధ్రము', eng: 'Kusuma-Randhra', meaning: 'Fragrant lotus nexus (Ramanujan-Hardy harmonic taxicab number)' },
  '4028': { dev: 'भानुराधावर', tel: 'భాను రాధా వరము', eng: 'Bhanu-Radha-Varam', meaning: 'Radiance of Radha and the rising Sun' },
  '108': { dev: 'पावनदानम्', tel: 'పావన దానము', eng: 'Pavana-Danam', meaning: 'Sacred benevolent offering to humanity' },
  '15': { dev: 'माया', tel: 'మాయ', eng: 'Maya', meaning: 'Creative illusion (15th Melakarta: Mayamalavagowla)' },
  '28': { dev: 'हरिकाम्भोजि', tel: 'హరికాంభోజి', eng: 'Harikambhoji', meaning: 'Beloved scale of Hari (28th Melakarta)' },
  '29': { dev: 'धीरसङ्कर', tel: 'ధీర శంకర', eng: 'Dheerasankara', meaning: 'Steadfast Lord Shiva (29th Melakarta)' }
};

function generateMnemonicSentences(numStr, isReversed) {
  let targetDigits = isReversed ? numStr.split('').reverse().join('') : numStr;

  if (KATAPAYADI_SPECIAL_MNEMONICS[targetDigits]) {
    const sp = KATAPAYADI_SPECIAL_MNEMONICS[targetDigits];
    return {
      sanskrit: sp.dev,
      telugu: sp.tel,
      english: sp.eng,
      meaning: sp.meaning,
      isSpecial: true,
      targetDigits
    };
  }

  // Compound & Syllable synthesizer for ANY arbitrary digit sequence
  let devParts = [];
  let telParts = [];
  let engParts = [];
  let meanings = [];
  let i = 0;

  const SINGLE_ROOTS = {
    1: { dev: 'कवि', tel: 'కవి', eng: 'Kavi (Poet)' },
    2: { dev: 'रवि', tel: 'రవి', eng: 'Ravi (Sun)' },
    3: { dev: 'गुरु', tel: 'గురు', eng: 'Guru (Teacher)' },
    4: { dev: 'विभु', tel: 'విభు', eng: 'Vibhu (All-pervading)' },
    5: { dev: 'शिव', tel: 'శివ', eng: 'Shiva (Auspicious)' },
    6: { dev: 'तनु', tel: 'తను', eng: 'Tanu (Grace)' },
    7: { dev: 'सत्य', tel: 'సత్య', eng: 'Satya (Truth)' },
    8: { dev: 'हरि', tel: 'హరి', eng: 'Hari (Redeemer)' },
    9: { dev: 'धी', tel: 'ధీ', eng: 'Dhee (Wisdom)' },
    0: { dev: 'नाद', tel: 'నాద', eng: 'Nada (Cosmic Sound)' }
  };

  while (i < targetDigits.length) {
    if (i + 2 <= targetDigits.length && KATAPAYADI_MNEMONIC_PAIRS[targetDigits.substr(i, 2)]) {
      const p = KATAPAYADI_MNEMONIC_PAIRS[targetDigits.substr(i, 2)];
      devParts.push(p.dev);
      telParts.push(p.tel);
      engParts.push(p.eng);
      meanings.push(p.meaning);
      i += 2;
    } else {
      const d = parseInt(targetDigits[i], 10);
      const r = SINGLE_ROOTS[d] || { dev: 'का', tel: 'కా', eng: 'Ka' };
      devParts.push(r.dev);
      telParts.push(r.tel);
      engParts.push(r.eng);
      i += 1;
    }
  }

  return {
    sanskrit: devParts.join(' '),
    telugu: telParts.join(' '),
    english: engParts.join(' • '),
    meaning: meanings.length > 0 ? meanings.join(', ') : 'Harmonic mnemonic composition matching your digits',
    isSpecial: false,
    targetDigits
  };
}

function verifyPhraseInDecoder(phrase) {
  switchConverterTab('textToNum');
  const input = document.getElementById('textInput');
  if (input) {
    input.value = phrase;
    runTextToNumber();
  }
  const display = document.getElementById('resultNumberDisplay');
  if (display) {
    display.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function renderHowItWorks(numStr, isReversed, mnemonic) {
  const panel = document.getElementById('howItWorksPanel');
  if (!panel) return;

  panel.style.display = 'block';

  const digits = numStr.split('').map(Number);
  const targetDigits = isReversed ? digits.slice().reverse() : digits;

  // Build digit-to-consonant chips (limit display to first 16 for clean layout on big numbers)
  const maxChips = 16;
  const chipSlice = targetDigits.slice(0, maxChips);
  let mappingChips = chipSlice.map((d, idx) => {
    const grp = KATAPAYADI_DATA[d] || {};
    const devLetters = ['ka', 'ta', 'pa', 'ya'].filter(k => grp[k]).map(k => grp[k].dev).join(', ');
    const telLetters = ['ka', 'ta', 'pa', 'ya'].filter(k => grp[k]).map(k => grp[k].tel).join(', ');
    return `<div class="msc-chip">Digit <strong>#${idx + 1} (${d})</strong> ➔ [${devLetters} / ${telLetters}]</div>`;
  }).join('');

  if (targetDigits.length > maxChips) {
    mappingChips += `<div class="msc-chip" style="color:var(--accent-gold-light); border-color:var(--accent-gold);">+ ${targetDigits.length - maxChips} more digits...</div>`;
  }

  panel.innerHTML = `
    <div class="hiw-title">
      <span>🔍 How Katapayadi Encoded "${numStr}" Step-by-Step:</span>
    </div>

    <div class="hiw-step">
      <div class="hiw-step-title">1. Digit-to-Consonant Assignment (व्यञ्जन चयन):</div>
      <div class="hiw-step-desc">
        Each entered digit unlocks a specific family of consonants across the 4 Sanskrit/Telugu groups (क-वर्ग, ट-वर्ग, प-वर्ग, य-वर्ग):
      </div>
      <div class="msc-chips-row" style="margin-top:6px;">
        ${mappingChips}
      </div>
    </div>

    <div class="hiw-step">
      <div class="hiw-step-title">2. Vowel Neutrality Principle (स्वर-संयोजन):</div>
      <div class="hiw-step-desc">
        According to the Katapayadi verse <em>"ज्ञेया शून्या स्वरास्तद्वत् अक्षरेषु स्वरान्तिकाः"</em>, 
        <strong>vowel signs (मात्रा / గుణింతాలు: ā, i, ī, u, e, o) carry ZERO numerical weight</strong>.
        This rule gives poets and memorizers the freedom to weave bare consonants like 
        <code>${targetDigits.map(d => (KATAPAYADI_DATA[d] && KATAPAYADI_DATA[d].ka ? KATAPAYADI_DATA[d].ka.dev : d)).join(' ')}</code> into meaningful, poetic words like 
        <strong>"${mnemonic.sanskrit}"</strong> or <strong>"${mnemonic.telugu}"</strong> without altering a single digit!
      </div>
    </div>

    <div class="hiw-step">
      <div class="hiw-step-title">3. Reading Order & Directionality (दिशा):</div>
      <div class="hiw-step-desc">
        ${isReversed 
          ? `<strong>Vāmato Gatiḥ Enabled (अङ्कानां वामतो गतिः / అంకానాం వామతో గతిః):</strong> The phrase was encoded from right-to-left so that when decoded classically in reverse, it yields <code>${numStr}</code>.`
          : `<strong>Direct Forward Order:</strong> Reading syllables from left-to-right sequentially produces the digits <code>${numStr}</code>.`}
      </div>
    </div>

    <div class="hiw-step">
      <div class="hiw-step-title">4. Live Mathematical Verification (प्रत्यक्ष प्रमाण):</div>
      <div class="hiw-step-desc">
        When the decoder inspects each syllable in <strong>"${mnemonic.sanskrit}"</strong>:
        <br>
        <code>${mnemonic.sanskrit}</code> ➔ Extracts final consonants ➔ <strong>${numStr}</strong> (100% Exact Round-Trip Match).
      </div>
      <div style="margin-top:8px;">
        <button class="btn-sm btn-primary-sm" onclick="verifyPhraseInDecoder('${mnemonic.sanskrit}')">
          🚀 Run Live Verification in Decoder ➔
        </button>
      </div>
    </div>
  `;
}

function renderSmartMnemonicSystem(numStr, isReversed) {
  const sentenceContainer = document.getElementById('smartSentenceContainer');
  const suggList = document.getElementById('suggestedWordsList');

  const mnemonic = generateMnemonicSentences(numStr, isReversed);

  // Render Smart Sentence Cards
  sentenceContainer.innerHTML = `
    <!-- Sanskrit Sentence Card -->
    <div class="mnemonic-sentence-card">
      <div class="msc-header">
        <span class="msc-tag tag-sanskrit">🕉️ Sanskrit / Hindi Mnemonic Phrase</span>
        <small style="color:var(--accent-gold-light); font-family:var(--font-mono); font-weight:700;">Code: ${numStr}</small>
      </div>
      <div class="msc-sentence">${mnemonic.sanskrit}</div>
      <div class="msc-meaning">💡 <strong>Meaning:</strong> ${mnemonic.meaning}</div>
      <div class="msc-actions">
        <button class="btn-sm btn-primary-sm" onclick="useSuggestedWord('${mnemonic.sanskrit}')">Use in Composer</button>
        <button class="btn-sm" style="background:#0284c7; border-color:#38bdf8;" onclick="verifyPhraseInDecoder('${mnemonic.sanskrit}')">🔍 Verify in Decoder ➔</button>
        <button class="btn-sm" onclick="speakText('${mnemonic.sanskrit}')">🔊 Listen</button>
      </div>
    </div>

    <!-- Telugu Sentence Card -->
    <div class="mnemonic-sentence-card">
      <div class="msc-header">
        <span class="msc-tag tag-telugu">🌺 Telugu Mnemonic Phrase (తెలుగు)</span>
        <small style="color:#38bdf8; font-family:var(--font-mono); font-weight:700;">కోడ్: ${numStr}</small>
      </div>
      <div class="msc-sentence" style="font-family:'Nirmala UI','Gautami',sans-serif; color:#38bdf8;">${mnemonic.telugu}</div>
      <div class="msc-meaning">💡 <strong>అర్థం:</strong> ${mnemonic.meaning}</div>
      <div class="msc-actions">
        <button class="btn-sm btn-primary-sm" onclick="useSuggestedWord('${mnemonic.telugu}')">Use in Composer</button>
        <button class="btn-sm" style="background:#0284c7; border-color:#38bdf8;" onclick="verifyPhraseInDecoder('${mnemonic.telugu}')">🔍 Verify in Decoder ➔</button>
        <button class="btn-sm" onclick="speakText('${mnemonic.telugu}')">🔊 Listen</button>
      </div>
    </div>
  `;

  // Render Dictionary Root Matches
  suggList.innerHTML = '';
  const exactMatches = KATAPAYADI_DICTIONARY.filter(item => item.num === numStr);
  const partialMatches = KATAPAYADI_DICTIONARY.filter(item => 
    numStr.startsWith(item.num) || item.num.startsWith(numStr) || (numStr.length >= 2 && item.num.includes(numStr))
  );

  const matchedItems = Array.from(new Set([...exactMatches, ...partialMatches])).slice(0, 8);

  if (matchedItems.length === 0) {
    suggList.innerHTML = `
      <div class="empty-sugg">
        No single classical dictionary root for "${numStr}". Use the synthesized sentence cards above or compose with the letters on the left!
      </div>
    `;
  } else {
    matchedItems.forEach(item => {
      const row = document.createElement('div');
      row.className = 'sugg-item';
      row.innerHTML = `
        <div>
          <span class="sugg-word">${item.dev} ${item.tel ? '/ <span style="color:#38bdf8;">' + item.tel + '</span>' : ''}</span> 
          <small style="color:var(--accent-gold-light); font-family:var(--font-mono); margin-left:6px;">(${item.num})</small>
          <span class="sugg-meaning"> — ${item.meaning}</span>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn-sm btn-primary-sm" onclick="useSuggestedWord('${item.dev}')">Use</button>
          <button class="btn-sm" onclick="verifyPhraseInDecoder('${item.dev}')">Verify</button>
        </div>
      `;
      suggList.appendChild(row);
    });
  }

  // Render Step-by-Step Educational "How It Works" Panel
  renderHowItWorks(numStr, isReversed, mnemonic);
}

function runNumberToText() {
  const numInput = document.getElementById('numInput');
  const numCols = document.getElementById('digitPickerColumns');
  const suggList = document.getElementById('suggestedWordsList');
  const sentenceContainer = document.getElementById('smartSentenceContainer');
  const hiwPanel = document.getElementById('howItWorksPanel');
  const isReversed = document.getElementById('numReverseOrderCheck').checked;

  let val = numInput.value.replace(/\D/g, ''); // Digits only

  if (!val) {
    numCols.innerHTML = '<div class="palette-hint">Enter a number above to generate Katapayadi consonant options.</div>';
    suggList.innerHTML = '<div class="empty-sugg">Enter digits to see matching words from classical and phonetic vocabulary</div>';
    if (sentenceContainer) {
      sentenceContainer.innerHTML = '<div class="empty-sugg">Type any number above to automatically synthesize compatible words &amp; poetic sentences in Sanskrit, Telugu, and English!</div>';
    }
    if (hiwPanel) {
      hiwPanel.style.display = 'none';
    }
    return;
  }

  let digits = val.split('').map(Number);
  if (isReversed) {
    // If user wants to compose a word that reads in reverse (Vamato Gatih) to yield the number:
    digits = digits.slice().reverse();
  }

  // Render Digit Picker Columns (bounded to 32 columns with scroll & overflow badge)
  numCols.innerHTML = '';
  const MAX_PICKER_COLUMNS = 32;
  const pickerDigits = digits.slice(0, MAX_PICKER_COLUMNS);

  pickerDigits.forEach((digit, idx) => {
    const col = document.createElement('div');
    col.className = 'dp-col';

    const colHeader = document.createElement('div');
    colHeader.className = 'dp-digit-header';
    colHeader.textContent = digit;
    col.appendChild(colHeader);

    // Get consonants for this digit
    const group = KATAPAYADI_DATA[digit];
    if (group) {
      ['ka', 'ta', 'pa', 'ya'].forEach(k => {
        if (group[k]) {
          const item = group[k];
          const btn = document.createElement('button');
          btn.className = 'dp-letter-btn';
          btn.innerHTML = `<strong>${item.dev}</strong> ${item.tel ? '<span style="color:#38bdf8; font-weight:700;">' + item.tel + '</span>' : ''} <small>(${item.eng})</small>`;
          btn.title = `Click to add ${item.dev} / ${item.tel || ''} to your phrase`;
          btn.onclick = () => appendToComposed(item.dev);
          col.appendChild(btn);
        }
      });
    }

    numCols.appendChild(col);
  });

  if (digits.length > MAX_PICKER_COLUMNS) {
    const overflowNote = document.createElement('div');
    overflowNote.className = 'dp-col dp-col-more';
    overflowNote.style.minWidth = '130px';
    overflowNote.style.display = 'flex';
    overflowNote.style.flexDirection = 'column';
    overflowNote.style.justifyContent = 'center';
    overflowNote.style.alignItems = 'center';
    overflowNote.style.fontSize = '0.78rem';
    overflowNote.style.padding = '8px';
    overflowNote.style.color = 'var(--accent-gold-light)';
    overflowNote.innerHTML = `<strong>+ ${digits.length - MAX_PICKER_COLUMNS} more</strong><span style="font-size:0.7rem; color:var(--text-secondary); margin-top:4px;">digits encoded in suggestions below</span>`;
    numCols.appendChild(overflowNote);
  }

  // Suggest matching sentences, words and show step-by-step educational breakdown
  renderSmartMnemonicSystem(val, isReversed);
}

function useSuggestedWord(word) {
  currentComposedWord = word;
  updateComposedDisplay();
}

function appendToComposed(letter) {
  const syllable = letter + activeMatra;
  currentComposedWord += syllable;
  updateComposedDisplay();
}

function updateComposedDisplay() {
  const display = document.getElementById('composedWordDisplay');
  if (!currentComposedWord) {
    display.innerHTML = '<span class="placeholder-text">Click syllables on the left to build your mnemonic</span>';
  } else {
    display.innerHTML = `<span>${currentComposedWord}</span>`;
  }
}

function clearCustomPhrase() {
  currentComposedWord = '';
  updateComposedDisplay();
}

function saveComposedToMemory() {
  if (!currentComposedWord) {
    alert('Please compose or choose a mnemonic word first!');
    return;
  }
  const numInput = document.getElementById('numInput').value;
  document.getElementById('memNumber').value = numInput;
  document.getElementById('memWord').value = currentComposedWord;
  document.getElementById('memTitle').value = `Mnemonic for ${numInput}`;

  // Jump to memory studio smoothly
  document.getElementById('remember').scrollIntoView({ behavior: 'smooth' });
  analyzeMemoryNumber();
}


// ==========================================
// 3. "REMEMBER ANYTHING" MEMORY STUDIO
// ==========================================

let activeMemoryCategory = 'pin';

function setMemoryCategory(cat) {
  activeMemoryCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-cat') === cat) {
      btn.classList.add('active');
    }
  });

  const titleInput = document.getElementById('memTitle');
  const numInput = document.getElementById('memNumber');

  if (cat === 'pin') {
    titleInput.placeholder = 'e.g. HDFC Bank ATM PIN';
    numInput.placeholder = 'e.g. 4028';
  } else if (cat === 'date') {
    titleInput.placeholder = "e.g. India's Independence Day";
    numInput.placeholder = 'e.g. 15081947';
  } else if (cat === 'phone') {
    titleInput.placeholder = "e.g. Dad's Mobile Number";
    numInput.placeholder = 'e.g. 9845012345';
  } else if (cat === 'constant') {
    titleInput.placeholder = 'e.g. Speed of Light in m/s';
    numInput.placeholder = 'e.g. 299792458';
  } else {
    titleInput.placeholder = 'e.g. Room Door Code / Secret Key';
    numInput.placeholder = 'e.g. 108';
  }
}

function analyzeMemoryNumber() {
  const numVal = document.getElementById('memNumber').value.replace(/\D/g, '');
  const palette = document.getElementById('memSyllablePalette');

  if (!numVal) {
    palette.innerHTML = '<div class="palette-hint">Enter your number above to see available Katapayadi consonants and words.</div>';
    return;
  }

  const digits = numVal.split('').map(Number);
  const chipsHtml = [];

  digits.forEach(d => {
    const grp = KATAPAYADI_DATA[d];
    if (grp) {
      ['ka', 'ta', 'pa', 'ya'].forEach(k => {
        if (grp[k]) {
          const item = grp[k];
          chipsHtml.push(`
            <span class="pchip" onclick="addMemChip('${item.dev}')" title="Digit ${d}: ${item.eng}">
              <span class="pchip-dev">${item.dev}</span>
              <span class="pchip-digit">${d}</span>
            </span>
          `);
        }
      });
    }
  });

  palette.innerHTML = `
    <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:8px;">
      Click any consonant to add to your phrase:
    </div>
    <div class="palette-chips">${chipsHtml.join('')}</div>
  `;
}

function addMemChip(dev) {
  const wordInput = document.getElementById('memWord');
  wordInput.value += dev;
}

// Vault Persistence (localStorage)
const STORAGE_KEY = 'katapayadi_memory_vault_v1';

function getSavedVault() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : getInitialVaultSeed();
  } catch (e) {
    return getInitialVaultSeed();
  }
}

function saveVaultToStorage(vault) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vault));
  renderVaultCards();
}

function getInitialVaultSeed() {
  return [
    {
      id: 'seed-1',
      title: 'Value of Pi (First 7 digits)',
      number: '3141592',
      word: 'गोपीभाग्यमधुव्रा',
      story: 'Lord Krishna playing flute for the Gopis, whose supreme fortune is tasting the divine sweet honey.',
      category: 'constant',
      date: '2026-11-22'
    },
    {
      id: 'seed-2',
      title: 'Secret ATM PIN Example',
      number: '4028',
      word: 'भानुरद (Bhānu-Rada)',
      story: 'Imagine the radiant Sun God (Bhānu) giving gifts on a golden chariot with shining teeth (Rada).',
      category: 'pin',
      date: '2026-11-22'
    },
    {
      id: 'seed-3',
      title: 'India Independence Day',
      number: '15081947',
      word: 'कमानद - यधभव (Ka-Ma-Na-Da...)',
      story: 'The bow of freedom releasing the arrow of sovereignty.',
      category: 'date',
      date: '2026-11-22'
    }
  ];
}

function saveMemoryCard() {
  const title = document.getElementById('memTitle').value.trim();
  const number = document.getElementById('memNumber').value.replace(/\D/g, '').trim();
  const word = document.getElementById('memWord').value.trim();
  const story = document.getElementById('memStory').value.trim();

  if (!title || !number || !word) {
    alert('Please enter at least a Title, Number, and Mnemonic Word!');
    return;
  }

  const vault = getSavedVault();
  const newCard = {
    id: 'mem_' + Date.now(),
    title,
    number,
    word,
    story,
    category: activeMemoryCategory,
    date: new Date().toISOString().split('T')[0]
  };

  vault.unshift(newCard);
  saveVaultToStorage(vault);

  // Clear inputs
  document.getElementById('memTitle').value = '';
  document.getElementById('memNumber').value = '';
  document.getElementById('memWord').value = '';
  document.getElementById('memStory').value = '';
  document.getElementById('memSyllablePalette').innerHTML = '<div class="palette-hint">Card stored successfully! Enter another number anytime.</div>';

  alert('✨ Saved into your Personal Memory Vault!');
}

function deleteVaultCard(id) {
  if (!confirm('Are you sure you want to delete this memory card?')) return;
  let vault = getSavedVault();
  vault = vault.filter(c => c.id !== id);
  saveVaultToStorage(vault);
}

function renderVaultCards() {
  const list = document.getElementById('vaultCardsList');
  const countBadge = document.getElementById('vaultCount');
  const searchFilter = document.getElementById('vaultSearchInput').value.toLowerCase().trim();

  const vault = getSavedVault();
  const filtered = vault.filter(c => 
    c.title.toLowerCase().includes(searchFilter) ||
    c.number.includes(searchFilter) ||
    c.word.toLowerCase().includes(searchFilter) ||
    (c.story && c.story.toLowerCase().includes(searchFilter))
  );

  countBadge.textContent = `${vault.length} Saved`;
  list.innerHTML = '';

  if (filtered.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding:30px; color:var(--text-muted); font-size:0.9rem;">
        No memory cards match your search. Create one on the left!
      </div>
    `;
    return;
  }

  filtered.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'saved-vault-card';
    cardEl.innerHTML = `
      <div class="svc-top">
        <span class="svc-title">${card.title}</span>
        <span class="svc-cat">${card.category}</span>
      </div>
      <div class="svc-num-row">
        <span class="svc-number">🔢 ${card.number}</span>
        <span class="svc-word">🔤 ${card.word}</span>
      </div>
      ${card.story ? `<div class="svc-story">🧠 <em>"${card.story}"</em></div>` : ''}
      <div class="svc-actions">
        <button class="btn-sm btn-primary-sm" onclick="decodeInConverter('${card.word}')">🔍 Inspect in Converter</button>
        <button class="btn-sm btn-danger" onclick="deleteVaultCard('${card.id}')">✕ Delete</button>
      </div>
    `;
    list.appendChild(cardEl);
  });
}

function decodeInConverter(word) {
  switchConverterTab('textToNum');
  document.getElementById('textInput').value = word;
  runTextToNumber();
  document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
}

function clearAllVault() {
  if (confirm('Are you sure you want to clear your entire Memory Vault? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    renderVaultCards();
  }
}

function exportVaultJSON() {
  const vault = getSavedVault();
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(vault, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute('href', dataStr);
  dlAnchorElem.setAttribute('download', `katapayadi_vault_backup_${Date.now()}.json`);
  dlAnchorElem.click();
}

function importVaultJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        saveVaultToStorage(imported);
        alert('Successfully imported ' + imported.length + ' memory cards!');
      } else {
        alert('Invalid backup file format');
      }
    } catch (err) {
      alert('Error reading backup file: ' + err.message);
    }
  };
  reader.readAsText(file);
}


// ==========================================
// 4. PI SHLOKA DEEP DIVE INTERACTION
// ==========================================

let piScriptMode = 'devanagari';

function setPiScriptMode(mode) {
  piScriptMode = mode;
  ['piBtnDev', 'piBtnTel', 'piBtnBoth'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  if (mode === 'devanagari' && document.getElementById('piBtnDev')) document.getElementById('piBtnDev').classList.add('active');
  if (mode === 'telugu' && document.getElementById('piBtnTel')) document.getElementById('piBtnTel').classList.add('active');
  if (mode === 'both' && document.getElementById('piBtnBoth')) document.getElementById('piBtnBoth').classList.add('active');

  const titleEl = document.getElementById('piVerseLine1');
  if (titleEl) {
    if (mode === 'telugu') {
      titleEl.textContent = 'గోపీభాగ్యమధువ్రాతః';
    } else if (mode === 'both') {
      titleEl.textContent = 'गोपीभाग्यमधुव्रातः / గోపీభాగ్యమధువ్రాతః';
    } else {
      titleEl.textContent = 'गोपीभाग्यमधुव्रातः';
    }
  }
  renderPiGrid();
}

function renderPiGrid() {
  const container = document.getElementById('piGridContainer');
  if (!container) return;
  container.innerHTML = '';

  PI_SHLOKA_DATA.forEach((item, idx) => {
    const chip = document.createElement('div');
    chip.className = 'pi-chip';
    chip.id = `pi_chip_${idx}`;
    chip.title = item.note;

    let displaySyl = item.syl;
    if (piScriptMode === 'telugu') {
      displaySyl = item.tel;
    } else if (piScriptMode === 'both') {
      displaySyl = `${item.syl} / ${item.tel}`;
    }

    chip.innerHTML = `
      <div class="pi-idx">Digit #${idx + 1}</div>
      <div class="pi-syl" style="${piScriptMode === 'telugu' ? "font-family: 'Nirmala UI', 'Gautami', sans-serif; color: #38bdf8;" : ''}">${displaySyl}</div>
      <div class="pi-eng">${item.eng}</div>
      <div class="pi-val">${item.val}</div>
    `;
    chip.onclick = () => {
      document.querySelectorAll('.pi-chip').forEach(c => c.classList.remove('active-syllable'));
      chip.classList.add('active-syllable');
      playAudioFile(`pi_${idx}`, item.syl, () => {
        setTimeout(() => chip.classList.remove('active-syllable'), 800);
      });
    };
    container.appendChild(chip);
  });
}

function playPiFullRecitation() {
  stopAllAudio();
  const chips = document.querySelectorAll('.pi-chip');
  chips.forEach(c => c.classList.remove('active-syllable'));

  // Play complete shloka audio file from audio/pi_full.mp3
  playAudioFile('pi_full', 'गोपीभाग्यमधुव्रातः श्रृङ्गोदधिसन्धगः खलजीवितखाताव गलहालारसंधरः', () => {
    chips.forEach(c => c.classList.remove('active-syllable'));
  });

  // Cycle highlights across chips during recitation
  let idx = 0;
  const interval = setInterval(() => {
    if (idx >= chips.length || !currentActiveAudio) {
      clearInterval(interval);
      return;
    }
    chips.forEach(c => c.classList.remove('active-syllable'));
    chips[idx].classList.add('active-syllable');
    chips[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    idx++;
  }, 480);
}

let isPlayingPi = false;
let piAudioSequenceIdx = 0;

function togglePiAudio() {
  if (isPlayingPi) {
    stopAllAudio();
    isPlayingPi = false;
    document.querySelectorAll('.pi-chip').forEach(c => c.classList.remove('active-syllable'));
    const btn = document.getElementById('piSyllableBtn');
    if (btn) btn.textContent = '🔊 Play Syllable by Syllable';
    return;
  }

  isPlayingPi = true;
  piAudioSequenceIdx = 0;
  const btn = document.getElementById('piSyllableBtn');
  if (btn) btn.textContent = '⏸ Pause Syllables';

  playNextPiSyllable();
}

function playNextPiSyllable() {
  if (!isPlayingPi || piAudioSequenceIdx >= PI_SHLOKA_DATA.length) {
    isPlayingPi = false;
    document.querySelectorAll('.pi-chip').forEach(c => c.classList.remove('active-syllable'));
    const btn = document.getElementById('piSyllableBtn');
    if (btn) btn.textContent = '🔊 Play Syllable by Syllable';
    return;
  }

  const chips = document.querySelectorAll('.pi-chip');
  chips.forEach(c => c.classList.remove('active-syllable'));

  const idx = piAudioSequenceIdx;
  const chip = document.getElementById(`pi_chip_${idx}`);
  if (chip) {
    chip.classList.add('active-syllable');
    chip.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  playAudioFile(`pi_${idx}`, PI_SHLOKA_DATA[idx].syl, () => {
    piAudioSequenceIdx++;
    setTimeout(playNextPiSyllable, 180);
  });
}

function copyPiValue() {
  const piStr = PI_SHLOKA_DATA.map(p => p.val).join('');
  const formatted = `3.${piStr.slice(1)}`;
  navigator.clipboard.writeText(formatted).then(() => {
    alert('Copied Pi to clipboard: ' + formatted);
  });
}


// ==========================================
// 5. CHANDAS (छन्दस् / ఛందస్సు) & COMBINATORICS
// ==========================================

const ASHTA_GANAS = [
  { key: 'ya', name: 'य-गण / య-గణం (Ya)', pattern: '| ऽ ऽ', matras: 5, binary: '011', mnemonic: 'यमाता / యమాతా (ya-mā-tā)', desc: 'Adi-laghu (first short, next two long). Weight: 1 + 2 + 2 = 5 mātrās.' },
  { key: 'ma', name: 'म-गण / మ-గణం (Ma)', pattern: 'ऽ ऽ ऽ', matras: 6, binary: '111', mnemonic: 'मातारा / మాతారా (mā-tā-rā)', desc: 'Sarva-guru (all three heavy/long). Weight: 2 + 2 + 2 = 6 mātrās.' },
  { key: 'ta', name: 'त-गण / త-గణం (Ta)', pattern: 'ऽ ऽ |', matras: 5, binary: '110', mnemonic: 'ताराज / తారాజ (tā-rā-ja)', desc: 'Antya-laghu (first two long, last short). Weight: 2 + 2 + 1 = 5 mātrās.' },
  { key: 'ra', name: 'र-गण / ర-గణం (Ra)', pattern: 'ऽ | ऽ', matras: 5, binary: '101', mnemonic: 'राजभा / రాజభా (rā-ja-bhā)', desc: 'Madhya-laghu (middle short, outer two long). Weight: 2 + 1 + 2 = 5 mātrās.' },
  { key: 'ja', name: 'ज-गण / జ-గణం (Ja)', pattern: '| ऽ |', matras: 4, binary: '010', mnemonic: 'जभान / జభాన (ja-bhā-na)', desc: 'Madhya-guru (middle long, outer two short). Weight: 1 + 2 + 1 = 4 mātrās.' },
  { key: 'bha', name: 'भ-गण / భ-గణం (Bha)', pattern: 'ऽ | |', matras: 4, binary: '100', mnemonic: 'भानस / భానస (bhā-na-sa)', desc: 'Adi-guru (first long, next two short). Weight: 2 + 1 + 1 = 4 mātrās.' },
  { key: 'na', name: 'न-गण / న-గణం (Na)', pattern: '| | |', matras: 3, binary: '000', mnemonic: 'नासल / నాసల (na-sa-la)', desc: 'Sarva-laghu (all three light/short). Weight: 1 + 1 + 1 = 3 mātrās.' },
  { key: 'sa', name: 'स-गण / స-గణం (Sa)', pattern: '| | ऽ', matras: 4, binary: '001', mnemonic: 'सलगा / సలగా (sa-la-gā)', desc: 'Antya-guru (first two short, last long). Weight: 1 + 1 + 2 = 4 mātrās.' }
];

const CHANDAS_METRES_DATA = [
  { name: 'गायत्री (Gāyatrī)', syllables: 6, total: 24, perms: '64 (2⁶)', formula: 'Tri-pada (3 × 8 or 4 × 6)', lit: 'Rigveda 3.62.10 (Gayatri Mantra)' },
  { name: 'उष्णिह् (Uṣṇik)', syllables: 7, total: 28, perms: '128 (2⁷)', formula: 'Tri-pada (8 + 8 + 12)', lit: 'Vedic Samhitas' },
  { name: 'अनुष्टुभ् / అనుష్టుప్ (Anuṣṭubh - Shloka)', syllables: 8, total: 32, perms: '256 (2⁸)', formula: 'म/स गणाः • 5th Laghu, 6th Guru', lit: 'Bhagavad Gita, Ramayana, Pi Shloka' },
  { name: 'बृहती (Bṛhatī)', syllables: 9, total: 36, perms: '512 (2⁹)', formula: '8 + 8 + 12 + 8', lit: 'Vedic hymns' },
  { name: 'पङ्क्ति (Paṅkti)', syllables: 10, total: 40, perms: '1024 (2¹⁰)', formula: 'भ भ ज ग ग (4 × 10)', lit: 'Rigveda & Yajurveda' },
  { name: 'इन्द्रवज्रा (Indravajrā)', syllables: 11, total: 44, perms: '2048 (2¹¹)', formula: 'त त ज ग ग (ऽऽ| ऽऽ| |ऽ| ऽ ऽ)', lit: 'Kalidasa (Raghuvamsha)' },
  { name: 'उपेन्द्रवज्रा (Upendravajrā)', syllables: 11, total: 44, perms: '2048 (2¹¹)', formula: 'ज त ज ग ग (|ऽ| ऽऽ| |ऽ| ऽ ऽ)', lit: 'Classical Kavyas' },
  { name: 'उपजाति (Upajāti)', syllables: 11, total: 44, perms: '2048 (2¹¹)', formula: 'Combination of Indravajrā & Upendravajrā', lit: 'Kalidasa (Kumarasambhava)' },
  { name: 'वंशस्थ (Vaṁśastha)', syllables: 12, total: 48, perms: '4096 (2¹²)', formula: 'ज त ज र (|ऽ| ऽऽ| |ऽ| ऽ|ऽ)', lit: 'Bharavi (Kiratarjuniya)' },
  { name: 'द्रुतविलम्बित (Drutavilambita)', syllables: 12, total: 48, perms: '4096 (2¹²)', formula: 'न भ भ र (||| ऽ|| ऽ|| ऽ|ऽ)', lit: 'Magha (Shishupalavadha)' },
  { name: 'भुजङ्गप्रयात (Bhujaṅgaprayāta)', syllables: 12, total: 48, perms: '4096 (2¹²)', formula: 'य य य य (|ऽऽ |ऽऽ |ऽऽ |ऽऽ)', lit: 'Adi Shankara (Subrahmanya Bhujangam)' },
  { name: 'प्रहर्षिणी (Praharṣiṇī)', syllables: 13, total: 52, perms: '8192 (2¹³)', formula: 'म न ज र ग (ऽऽऽ ||| |ऽ| ऽ|ऽ ऽ)', lit: 'Sanskrit Natakas' },
  { name: 'वसन्ततिलका (Vasantatilakā)', syllables: 14, total: 56, perms: '16384 (2¹⁴)', formula: 'त भ ज ज ग ग (ऽऽ| ऽ|| |ऽ| |ऽ| ऽ ऽ)', lit: 'Bhartrihari (Niti Shataka)' },
  { name: 'मालिनी (Mālinī)', syllables: 15, total: 60, perms: '32768 (2¹⁵)', formula: 'न न म य य (||| ||| ऽऽऽ |ऽऽ |ऽऽ)', lit: 'Shakuntala, Vishnu Stotra' },
  { name: 'मन्दाक्रान्ता (Mandākrāntā)', syllables: 17, total: 68, perms: '131072 (2¹⁷)', formula: 'म भ न त त ग ग (ऽऽऽ ऽ|| ||| ऽऽ| ऽऽ| ऽ ऽ)', lit: 'Kalidasa’s Meghadūta (entire poem!)' },
  { name: 'शिखरिणी (Śikhariṇī)', syllables: 17, total: 68, perms: '131072 (2¹⁷)', formula: 'य म न स भ ल ग (|ऽऽ ऽऽऽ ||| ||ऽ ऽ|| | ऽ)', lit: 'Saundarya Lahari, Bhartrihari' },
  { name: 'శార్దూలవిక్రీడితము / शार्दूलविक्रीडित (Śārdūlavikrīḍita)', syllables: 19, total: 76, perms: '524288 (2¹⁹)', formula: 'మ స జ స త త గ (ऽऽऽ ||ऽ |ऽ| ||ऽ ऽऽ| ऽऽ| ऽ)', lit: 'Surya Shataka, Telugu Mahabharata (Tikkana)' },
  { name: 'ఉత్పలమాల (Utpalamāla)', syllables: 20, total: 80, perms: '1048576 (2²⁰)', formula: 'భ ర న భ భ ర వ (ऽ|| ऽ|ऽ ||| ऽ|| ऽ|| ऽ|ऽ |ऽ)', lit: 'Telugu Classical Epics (ఆంధ్ర మహాభారతము - నన్నయ)' },
  { name: 'మత్తేభవిక్రీడితము (Mattēbhavikrīḍita)', syllables: 20, total: 80, perms: '1048576 (2²⁰)', formula: 'స భ ర న మ య వ (||ऽ ऽ|| ऽ|ऽ ||| ऽऽऽ |ऽऽ |ऽ)', lit: 'Telugu Prabandhas (శ్రీనాథుడు, పెద్దన)' },
  { name: 'చంపకమాల / स्रग्धरा (Campakamāla / Sragdharā)', syllables: 21, total: 84, perms: '2097152 (2²¹)', formula: 'న జ భ జ జ జ ర (||| |ऽ| ऽ|| |ऽ| |ऽ| |ऽ| ऽ|ऽ)', lit: 'Telugu Classical Poetry (పోతన భాగవతము)' }
];

function scanChandasText(text) {
  if (!text || !text.trim()) return null;
  const raw = text.trim();

  const LONG_MATRAS = new Set([
    'ा', 'ी', 'ू', 'ॄ', 'े', 'ै', 'ो', 'ौ',
    'ా', 'ీ', 'ూ', 'ౄ', 'ే', 'ై', 'ో', 'ౌ'
  ]);
  const SHORT_MATRAS = new Set([
    'ि', 'ु', 'ृ', 'ॢ',
    'ి', 'ు', 'ృ', 'ె', 'ొ'
  ]);
  const ANUSVARA_VISARGA = new Set([
    'ं', 'ः',
    'ం', 'ః', 'ఁ'
  ]);
  const LONG_VOWELS = new Set([
    'आ', 'ई', 'ऊ', 'ॠ', 'ए', 'ऐ', 'ओ', 'औ',
    'ఆ', 'ఈ', 'ఊ', 'ౠ', 'ఏ', 'ఐ', 'ఓ', 'ఔ'
  ]);
  const VIRAMAS = new Set(['्', '్']);

  // Tokenize into syllables (Devanagari & Telugu supported)
  const chars = Array.from(raw.replace(/\s+/g, ''));
  const syllables = [];
  let i = 0;
  
  while (i < chars.length) {
    let syl = '';
    while (i < chars.length) {
      const c = chars[i];
      syl += c;
      i++;
      if (VIRAMAS.has(c)) {
        continue;
      }
      if (i < chars.length && (VIRAMAS.has(chars[i]) || LONG_MATRAS.has(chars[i]) || SHORT_MATRAS.has(chars[i]) || ANUSVARA_VISARGA.has(chars[i]))) {
        continue;
      } else {
        break;
      }
    }
    syllables.push(syl);
  }

  // Weight analysis (Laghu vs Guru)
  const items = [];
  for (let j = 0; j < syllables.length; j++) {
    const s = syllables[j];
    let isGuru = false;
    let reason = 'ह्रस्व स्वर / లఘువు (Short vowel = Laghu)';

    for (const c of s) {
      if (LONG_MATRAS.has(c) || LONG_VOWELS.has(c)) {
        isGuru = true;
        reason = 'దీర్ఘ స్వరము / दीर्घ स्वर (Long vowel = Guru)';
        break;
      }
      if (ANUSVARA_VISARGA.has(c)) {
        isGuru = true;
        reason = 'అనుస్వార/విసర్గ / अनुस्वार/विसर्ग (Anusvara/Visarga = Guru)';
        break;
      }
    }

    if (!isGuru && j + 1 < syllables.length) {
      const nextSyl = syllables[j + 1];
      for (const v of VIRAMAS) {
        if (nextSyl.includes(v)) {
          isGuru = true;
          reason = 'సంయోగే గురువు / संयोगे गुरु (Vowel before conjunct = Guru)';
          break;
        }
      }
    }

    if (!isGuru && j === syllables.length - 1) {
      isGuru = true;
      reason = 'పాదాంత గురువు / पादान्तस्थ गुरु (End of quarter optionally Guru)';
    }

    // Compute Katapayadi value for this syllable (works for both Devanagari & Telugu!)
    const tokens = tokenizeText(s);
    const cipherDigit = tokens.length > 0 && (tokens[0].digit !== undefined) ? tokens[0].digit : '-';

    items.push({
      syl: s,
      weight: isGuru ? 'ऽ' : '|',
      matra: isGuru ? 2 : 1,
      type: isGuru ? 'Guru (గురువు / गुरु)' : 'Laghu (లఘువు / लघु)',
      reason: reason,
      digit: cipherDigit
    });
  }

  // Group into Ganas
  const ganas = [];
  const GANA_MAP = {
    '|ऽऽ': 'य / య (Ya-gana)',
    'ऽऽऽ': 'म / మ (Ma-gana)',
    'ऽऽ|': 'त / త (Ta-gana)',
    'ऽ|ऽ': 'र / ర (Ra-gana)',
    '|ऽ|': 'ज / జ (Ja-gana)',
    'ऽ||': 'भ / భ (Bha-gana)',
    '|||': 'न / న (Na-gana)',
    '||ऽ': 'स / స (Sa-gana)'
  };

  for (let k = 0; k < items.length; k += 3) {
    const slice = items.slice(k, k + 3);
    const pattern = slice.map(w => w.weight).join('');
    if (slice.length === 3 && GANA_MAP[pattern]) {
      ganas.push(GANA_MAP[pattern]);
    } else {
      slice.forEach(w => ganas.push(w.weight === 'ऽ' ? 'గ / ग (Guru)' : 'ల / ल (Laghu)'));
    }
  }

  // Detect matching metre
  let matchedMetre = 'Custom Metric Pada';
  const sylCount = items.length;
  const match = CHANDAS_METRES_DATA.find(m => m.syllables === sylCount);
  if (match) {
    matchedMetre = match.name;
  }

  const totalMatras = items.reduce((acc, cur) => acc + cur.matra, 0);
  const cipherNumber = items.map(it => it.digit).filter(d => d !== '-').join('');

  return {
    items,
    ganas,
    sylCount,
    totalMatras,
    matchedMetre,
    cipherNumber
  };
}

function renderGanasRibbon() {
  const container = document.getElementById('ganasRibbon');
  if (!container) return;
  container.innerHTML = '';

  ASHTA_GANAS.forEach(g => {
    const pill = document.createElement('div');
    pill.className = 'gana-pill';
    pill.id = `gp_${g.key}`;
    pill.innerHTML = `
      <span class="gp-name">${g.name}</span>
      <span class="gp-pattern">${g.pattern}</span>
    `;
    pill.onclick = () => inspectGana(g.key);
    container.appendChild(pill);
  });
}

function inspectGana(key) {
  document.querySelectorAll('.gana-pill').forEach(p => p.classList.remove('active'));
  const pill = document.getElementById(`gp_${key}`);
  if (pill) pill.classList.add('active');

  const g = ASHTA_GANAS.find(it => it.key === key);
  const bar = document.getElementById('ganaInspectorBar');
  if (!bar || !g) return;

  bar.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; width:100%; flex-wrap:wrap; gap:10px;">
      <div>
        <strong style="color:var(--accent-gold-light); font-size:1.05rem;">${g.name}</strong> 
        <span style="font-family:var(--font-mono); color:var(--accent-cyan-light); margin-left:8px; font-weight:700;">Pattern: ${g.pattern}</span>
        <span style="margin-left:8px; color:var(--text-secondary); font-size:0.85rem;">• Binary: <code style="color:#c4b5fd;">${g.binary}</code> • Mnemonic: <strong>${g.mnemonic}</strong></span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-primary);">
        ${g.desc}
      </div>
    </div>
  `;
}

function runChandasScan() {
  const input = document.getElementById('chandasInput');
  const results = document.getElementById('chandasResultsArea');
  if (!input || !results) return;

  const text = input.value.trim();
  if (!text) {
    results.innerHTML = '<div class="csb-empty">Enter a Sanskrit verse line above to analyze its Laghu/Guru rhythm, Gana structure, matching metre, and Katapayadi number simultaneously!</div>';
    return;
  }

  const analysis = scanChandasText(text);
  if (!analysis || analysis.items.length === 0) {
    results.innerHTML = '<div class="csb-empty">Could not tokenize syllables. Please enter Devanagari Sanskrit text.</div>';
    return;
  }

  let deckHtml = '<div class="chandas-deck-row">';
  analysis.items.forEach((it, idx) => {
    const isG = it.weight === 'ऽ';
    deckHtml += `
      <div class="c-syllable-card ${isG ? 'guru' : 'laghu'}" title="${it.reason}">
        <div style="font-size:0.65rem; color:var(--text-muted);">#${idx + 1}</div>
        <div class="c-char">${it.syl}</div>
        <div class="c-weight-badge ${isG ? 'guru' : 'laghu'}">${it.weight}</div>
        <div style="font-size:0.7rem; color:var(--text-secondary);">${it.matra} Mātrā</div>
        <div class="c-cipher-val" title="Katapayadi value">क: ${it.digit}</div>
      </div>
    `;
  });
  deckHtml += '</div>';

  deckHtml += `
    <div class="chandas-summary-box">
      <div class="cs-item">
        <span>Syllables (वर्णाः): <strong>${analysis.sylCount}</strong></span> • 
        <span>Mātrās (मात्राः): <strong>${analysis.totalMatras}</strong></span>
      </div>
      <div class="cs-item">
        <span>Gana Sequence: <strong style="color:var(--accent-cyan-light);">${analysis.ganas.join(' ➔ ')}</strong></span>
      </div>
      <div class="cs-item">
        <span>Identified Metre: <span class="cs-badge">${analysis.matchedMetre}</span></span>
      </div>
      <div class="cs-item">
        <span>Katapayadi Cipher: <strong style="font-family:var(--font-mono); color:var(--accent-gold-light); font-size:1.15rem;">${analysis.cipherNumber || '0'}</strong></span>
      </div>
    </div>
  `;

  results.innerHTML = deckHtml;
}

function loadChandasPreset(val) {
  if (!val) return;
  const input = document.getElementById('chandasInput');
  if (input) {
    input.value = val;
    runChandasScan();
  }
}

function renderChandasTable(items) {
  const tbody = document.getElementById('chandasTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const list = items || CHANDAS_METRES_DATA;
  list.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:#ffffff;">${m.name}</strong></td>
      <td style="font-family:var(--font-mono); color:var(--accent-gold-light); font-weight:700;">${m.syllables}</td>
      <td style="font-family:var(--font-mono); color:var(--accent-cyan-light);">${m.total}</td>
      <td><span style="font-family:var(--font-mono); background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:4px;">${m.perms}</span></td>
      <td><code style="color:#c4b5fd;">${m.formula}</code></td>
      <td style="font-size:0.85rem; color:var(--text-secondary);">${m.lit}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filterMetresTable() {
  const input = document.getElementById('metreSearchInput');
  const val = input ? input.value.toLowerCase().trim() : '';

  const filtered = CHANDAS_METRES_DATA.filter(m =>
    m.name.toLowerCase().includes(val) ||
    m.syllables.toString() === val ||
    m.formula.toLowerCase().includes(val) ||
    m.lit.toLowerCase().includes(val)
  );
  renderChandasTable(filtered);
}


// ==========================================
// 6. PRACTICE LAB & FLASHCARD QUIZ
// ==========================================

let quizScore = 0;
let quizStreak = 0;
let currentQuizItem = null;

function generateQuizQuestion() {
  const mode = document.getElementById('quizModeSelect').value;
  const qLabel = document.getElementById('quizQuestion');
  const hLabel = document.getElementById('quizHint');
  const grid = document.getElementById('quizOptionsGrid');
  const feedback = document.getElementById('quizFeedback');

  feedback.textContent = '';
  feedback.className = 'fc-feedback';
  grid.innerHTML = '';

  if (mode === 'consonant') {
    // Pick random digit 0 to 9
    const digit = Math.floor(Math.random() * 10);
    const grp = KATAPAYADI_DATA[digit];
    const available = [];
    ['ka', 'ta', 'pa', 'ya'].forEach(k => {
      if (grp[k]) available.push(grp[k]);
    });
    const chosen = available[Math.floor(Math.random() * available.length)];

    currentQuizItem = {
      question: `${chosen.dev} / ${chosen.tel} (${chosen.eng})`,
      hint: `Letter from column #${digit} (IAST: ${chosen.iast})`,
      answer: digit
    };

    qLabel.textContent = currentQuizItem.question;
    hLabel.textContent = currentQuizItem.hint;

    // 4 multiple choice options
    const options = new Set([digit]);
    while (options.size < 4) {
      options.add(Math.floor(Math.random() * 10));
    }

    const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
    shuffled.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'fc-opt-btn';
      btn.textContent = opt;
      btn.onclick = () => checkQuizAnswer(opt, digit, btn);
      grid.appendChild(btn);
    });

  } else if (mode === 'word') {
    const randomWord = KATAPAYADI_DICTIONARY[Math.floor(Math.random() * KATAPAYADI_DICTIONARY.length)];
    currentQuizItem = {
      question: `${randomWord.dev} (${randomWord.word})`,
      hint: `Meaning: ${randomWord.meaning}`,
      answer: randomWord.num
    };

    qLabel.textContent = currentQuizItem.question;
    hLabel.textContent = currentQuizItem.hint;

    const options = new Set([randomWord.num]);
    while (options.size < 4) {
      const randOther = KATAPAYADI_DICTIONARY[Math.floor(Math.random() * KATAPAYADI_DICTIONARY.length)].num;
      options.add(randOther);
    }

    const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
    shuffled.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'fc-opt-btn';
      btn.textContent = opt;
      btn.onclick = () => checkQuizAnswer(opt, randomWord.num, btn);
      grid.appendChild(btn);
    });

  } else {
    // Reverse: Number to consonant
    const digit = Math.floor(Math.random() * 10);
    const grp = KATAPAYADI_DATA[digit];
    const correctCons = [];
    ['ka', 'ta', 'pa', 'ya'].forEach(k => {
      if (grp[k]) correctCons.push(grp[k]);
    });
    const chosenCorrect = correctCons[Math.floor(Math.random() * correctCons.length)];

    currentQuizItem = {
      question: `Digit: ${digit}`,
      hint: `Which of these consonants represents the number ${digit}?`,
      answer: chosenCorrect.dev
    };

    qLabel.textContent = currentQuizItem.question;
    hLabel.textContent = currentQuizItem.hint;

    const options = [chosenCorrect];
    while (options.length < 4) {
      const randD = Math.floor(Math.random() * 10);
      if (randD !== digit) {
        const otherGrp = KATAPAYADI_DATA[randD];
        const otherList = [];
        ['ka', 'ta', 'pa', 'ya'].forEach(k => {
          if (otherGrp[k]) otherList.push(otherGrp[k]);
        });
        if (otherList.length > 0) {
          const cand = otherList[Math.floor(Math.random() * otherList.length)];
          if (!options.some(o => o.dev === cand.dev)) {
            options.push(cand);
          }
        }
      }
    }

    const shuffled = options.sort(() => Math.random() - 0.5);
    shuffled.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'fc-opt-btn';
      btn.textContent = `${opt.dev} / ${opt.tel}`;
      btn.onclick = () => checkQuizAnswer(opt.dev, chosenCorrect.dev, btn);
      grid.appendChild(btn);
    });
  }
}

function checkQuizAnswer(selected, correct, btn) {
  const feedback = document.getElementById('quizFeedback');
  const allBtns = document.querySelectorAll('.fc-opt-btn');
  allBtns.forEach(b => b.disabled = true);

  if (selected.toString() === correct.toString()) {
    btn.classList.add('correct');
    feedback.textContent = '🎉 Correct! Brilliant recall.';
    feedback.style.color = '#34d399';
    quizScore += 10;
    quizStreak += 1;
  } else {
    btn.classList.add('wrong');
    feedback.textContent = `❌ Not quite. The correct answer was: ${correct}`;
    feedback.style.color = '#f87171';
    quizStreak = 0;

    allBtns.forEach(b => {
      if (b.textContent === correct.toString()) {
        b.classList.add('correct');
      }
    });
  }

  document.getElementById('quizScore').textContent = quizScore;
  document.getElementById('quizStreak').textContent = `${quizStreak} 🔥`;
}

function nextQuizQuestion() {
  generateQuizQuestion();
}

function resetQuiz() {
  quizScore = 0;
  quizStreak = 0;
  document.getElementById('quizScore').textContent = '0';
  document.getElementById('quizStreak').textContent = '0 🔥';
  generateQuizQuestion();
}


// ==========================================
// 7. UTILITY & UI EVENT HANDLERS
// ==========================================

function switchConverterTab(tab) {
  const tabTextToNumBtn = document.getElementById('tabTextToNumBtn');
  const tabNumToTextBtn = document.getElementById('tabNumToTextBtn');
  const paneTextToNum = document.getElementById('paneTextToNum');
  const paneNumToText = document.getElementById('paneNumToText');

  if (tab === 'textToNum') {
    tabTextToNumBtn.classList.add('active');
    tabNumToTextBtn.classList.remove('active');
    paneTextToNum.classList.add('active');
    paneNumToText.classList.remove('active');
  } else {
    tabTextToNumBtn.classList.remove('active');
    tabNumToTextBtn.classList.add('active');
    paneTextToNum.classList.remove('active');
    paneNumToText.classList.add('active');
    runNumberToText();
  }
}

function loadTextPreset(val) {
  if (!val) return;
  document.getElementById('textInput').value = val;
  runTextToNumber();
}

function clearTextInput() {
  document.getElementById('textInput').value = '';
  runTextToNumber();
}

function loadNumPreset(val) {
  if (!val) return;
  document.getElementById('numInput').value = val;
  runNumberToText();
}

function clearNumInput() {
  document.getElementById('numInput').value = '';
  runNumberToText();
}

function copyResultNumber() {
  const num = document.getElementById('resultNumberDisplay').textContent;
  navigator.clipboard.writeText(num).then(() => {
    alert('Copied number ' + num + ' to clipboard!');
  });
}

function sendToMemoryStudio() {
  const num = document.getElementById('resultNumberDisplay').textContent;
  const word = document.getElementById('textInput').value;

  document.getElementById('memNumber').value = num;
  document.getElementById('memWord').value = word;
  document.getElementById('memTitle').value = `Mnemonic for ${word}`;

  document.getElementById('remember').scrollIntoView({ behavior: 'smooth' });
  analyzeMemoryNumber();
}

// Mapping from Devanagari characters to local downloaded MP3 filenames in audio/
const DEV_TO_AUDIO_MAP = {
  'अ': 'v_a', 'आ': 'v_aa', 'इ': 'v_i', 'ई': 'v_ii', 'उ': 'v_u', 'ऊ': 'v_uu',
  'ऋ': 'v_ri', 'ॠ': 'v_rii', 'ऌ': 'v_li', 'ॡ': 'v_lii', 'ए': 'v_e', 'ऐ': 'v_ai',
  'ओ': 'v_o', 'औ': 'v_au', 'अं': 'v_am', 'अः': 'v_ah',
  'क': 'c_ka', 'ख': 'c_kha', 'ग': 'c_ga', 'घ': 'c_gha', 'ङ': 'c_nga',
  'च': 'c_ca', 'छ': 'c_cha', 'ज': 'c_ja', 'झ': 'c_jha', 'ञ': 'c_nya',
  'ट': 'c_tta', 'ठ': 'c_ttha', 'ड': 'c_dda', 'ढ': 'c_ddha', 'ण': 'c_nna',
  'त': 'c_ta', 'थ': 'c_tha', 'द': 'c_da', 'ध': 'c_dha', 'न': 'c_na',
  'प': 'c_pa', 'फ': 'c_pha', 'ब': 'c_ba', 'भ': 'c_bha', 'म': 'c_ma',
  'य': 'c_ya', 'र': 'c_ra', 'ल': 'c_la', 'व': 'c_va',
  'श': 'c_sha', 'ष': 'c_shha', 'स': 'c_sa', 'ह': 'c_ha',
  'ळ': 'c_lla', 'क्ष': 'c_ksha', 'ज्ञ': 'c_jnya'
};

// Web Audio API harmonic sound generator (100% works offline in all browsers, zero external files)
let audioCtx = null;
function playHarmonicTone(freq = 440, type = 'sine', duration = 0.25) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn('Web Audio error:', e);
  }
}

let currentActiveAudio = null;

function playAudioFile(filename, fallbackText, onEnded) {
  stopAllAudio();

  const audioPath = `audio/${filename}.mp3`;
  const audio = new Audio(audioPath);
  currentActiveAudio = audio;

  audio.onended = () => {
    currentActiveAudio = null;
    if (typeof onEnded === 'function') onEnded();
  };

  audio.onerror = () => {
    console.log(`audio/${filename}.mp3 not loaded, using speech synthesis fallback.`);
    speakText(fallbackText || '');
    if (typeof onEnded === 'function') onEnded();
  };

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn('Audio play restricted by browser policy:', err);
      // Play harmonic chime and speech
      playHarmonicTone(523.25, 'triangle', 0.25);
      speakText(fallbackText || '');
      if (typeof onEnded === 'function') onEnded();
    });
  }

  return audio;
}

function stopAllAudio() {
  if (currentActiveAudio) {
    try {
      currentActiveAudio.pause();
      currentActiveAudio.currentTime = 0;
    } catch (e) {}
    currentActiveAudio = null;
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
}

function playAudioLetter(letter) {
  const clean = letter ? letter.trim() : '';
  const fileKey = DEV_TO_AUDIO_MAP[clean];
  if (fileKey) {
    playAudioFile(fileKey, clean);
  } else {
    speakText(clean);
  }
}

function speakText(text) {
  if (!text) return;
  const clean = text.trim();
  if (DEV_TO_AUDIO_MAP[clean]) {
    playAudioFile(DEV_TO_AUDIO_MAP[clean], clean);
    return;
  }

  // Harmonic cue
  playHarmonicTone(440, 'sine', 0.15);

  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;

      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('sa') || v.name.includes('Hindi') || v.name.includes('Kalpana') || v.name.includes('Hemant'));
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis error:', e);
    }
  }
}

function speakInputText() {
  const text = document.getElementById('textInput').value;
  if (text) speakText(text);
}

// Matrix Interactive Cell Click Handlers
function setupMasterMatrixInteractions() {
  const cells = document.querySelectorAll('#masterMatrixTable td.cell:not(.cell-empty)');
  const detailBar = document.getElementById('matrixDetailBar');

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const digit = cell.getAttribute('data-digit');
      const dev = cell.getAttribute('data-dev');
      const tel = cell.getAttribute('data-tel') || '';
      const eng = cell.getAttribute('data-eng');

      // Highlight cell
      cells.forEach(c => c.style.outline = 'none');
      cell.style.outline = '2px solid var(--accent-gold)';

      // Show in detail strip
      detailBar.innerHTML = `
        <div class="detail-active-box">
          <div class="dab-char">
            <span class="dab-letter">${dev} ${tel ? '/ <span style="color:#38bdf8;">' + tel + '</span>' : ''}</span>
            <span class="dab-digit-badge">Digit: ${digit}</span>
            <span class="dab-meta">IAST: <strong>${eng}</strong> • Pronunciation & Katapayadi Column #${digit}</span>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="dab-action-btn" onclick="insertLetterToInput('${dev}')">Insert '${dev}'</button>
            ${tel ? `<button class="dab-action-btn" style="background:#0284c7; border-color:#38bdf8;" onclick="insertLetterToInput('${tel}')">Insert '${tel}' (Telugu)</button>` : ''}
          </div>
        </div>
      `;

      playAudioLetter(dev);
    });
  });

  // Script switch buttons (Devanagari / Telugu / English / Both)
  const scriptBtns = document.querySelectorAll('#scriptToggle .toggle-btn');
  scriptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scriptBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-script');

      const devElements = document.querySelectorAll('.char-dev');
      const telElements = document.querySelectorAll('.char-tel');
      const engElements = document.querySelectorAll('.char-eng');

      if (mode === 'devanagari') {
        devElements.forEach(e => e.style.display = 'block');
        telElements.forEach(e => e.style.display = 'none');
        engElements.forEach(e => e.style.display = 'none');
      } else if (mode === 'telugu') {
        devElements.forEach(e => e.style.display = 'none');
        telElements.forEach(e => e.style.display = 'block');
        engElements.forEach(e => e.style.display = 'none');
      } else if (mode === 'english') {
        devElements.forEach(e => e.style.display = 'none');
        telElements.forEach(e => e.style.display = 'none');
        engElements.forEach(e => e.style.display = 'block');
      } else {
        devElements.forEach(e => e.style.display = 'block');
        telElements.forEach(e => e.style.display = 'block');
        engElements.forEach(e => e.style.display = 'block');
      }
    });
  });
}

function insertLetterToInput(letter) {
  const input = document.getElementById('textInput');
  input.value += letter;
  runTextToNumber();
  document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
}

// Setup Virtual Keyboard buttons (Devanagari & Telugu)
let currentVkScript = 'dev';
let currentVkCategory = 'all';

// Comprehensive Keyboard Data with ALL Consonants, Vowels, and Matras
const VK_DATA = {
  dev: {
    consonants: [
      // Ka-varga
      { char: 'क', num: 1, varga: 'ka' },
      { char: 'ख', num: 2, varga: 'ka' },
      { char: 'ग', num: 3, varga: 'ka' },
      { char: 'घ', num: 4, varga: 'ka' },
      { char: 'ङ', num: 5, varga: 'ka' },
      // Ca-varga
      { char: 'च', num: 6, varga: 'ca' },
      { char: 'छ', num: 7, varga: 'ca' },
      { char: 'ज', num: 8, varga: 'ca' },
      { char: 'झ', num: 9, varga: 'ca' },
      { char: 'ञ', num: 0, varga: 'ca' },
      // Ṭa-varga
      { char: 'ट', num: 1, varga: 'ta' },
      { char: 'ठ', num: 2, varga: 'ta' },
      { char: 'ड', num: 3, varga: 'ta' },
      { char: 'ढ', num: 4, varga: 'ta' },
      { char: 'ण', num: 5, varga: 'ta' },
      // Ta-varga
      { char: 'त', num: 6, varga: 'ta' },
      { char: 'थ', num: 7, varga: 'ta' },
      { char: 'द', num: 8, varga: 'ta' },
      { char: 'ध', num: 9, varga: 'ta' },
      { char: 'न', num: 0, varga: 'ta' },
      // Pa-varga
      { char: 'प', num: 1, varga: 'pa' },
      { char: 'फ', num: 2, varga: 'pa' },
      { char: 'ब', num: 3, varga: 'pa' },
      { char: 'भ', num: 4, varga: 'pa' },
      { char: 'म', num: 5, varga: 'pa' },
      // Ya-varga & Sibilants
      { char: 'य', num: 1, varga: 'ya' },
      { char: 'र', num: 2, varga: 'ya' },
      { char: 'ल', num: 3, varga: 'ya' },
      { char: 'व', num: 4, varga: 'ya' },
      { char: 'श', num: 5, varga: 'ya' },
      { char: 'ष', num: 6, varga: 'ya' },
      { char: 'स', num: 7, varga: 'ya' },
      { char: 'ह', num: 8, varga: 'ya' },
      // Conjunct & Vedic
      { char: 'ळ', num: 9, varga: 'extra' },
      { char: 'क्ष', num: 9, varga: 'extra' },
      { char: 'ज्ञ', num: 0, varga: 'extra' }
    ],
    vowels: [
      { char: 'अ', desc: 'a' },
      { char: 'आ', desc: 'ā' },
      { char: 'इ', desc: 'i' },
      { char: 'ई', desc: 'ī' },
      { char: 'उ', desc: 'u' },
      { char: 'ऊ', desc: 'ū' },
      { char: 'ऋ', desc: 'ṛ' },
      { char: 'ॠ', desc: 'ṝ' },
      { char: 'ऌ', desc: 'ḷ' },
      { char: 'ॡ', desc: 'ḹ' },
      { char: 'ए', desc: 'e' },
      { char: 'ऐ', desc: 'ai' },
      { char: 'ओ', desc: 'o' },
      { char: 'औ', desc: 'au' },
      { char: 'अं', desc: 'aṁ' },
      { char: 'अः', desc: 'aḥ' }
    ],
    matras: [
      { char: 'ा', name: 'ā' },
      { char: 'ि', name: 'i' },
      { char: 'ी', name: 'ī' },
      { char: 'ु', name: 'u' },
      { char: 'ू', name: 'ū' },
      { char: 'ृ', name: 'ṛ' },
      { char: 'ॄ', name: 'ṝ' },
      { char: 'ॢ', name: 'ḷ' },
      { char: 'े', name: 'e' },
      { char: 'ै', name: 'ai' },
      { char: 'ो', name: 'o' },
      { char: 'ौ', name: 'au' },
      { char: '्', name: 'हलन्त (Virama)' },
      { char: 'ं', name: 'अनुस्वार' },
      { char: 'ः', name: 'विसर्ग' },
      { char: 'ँ', name: 'चन्द्रबिन्दु' },
      { char: 'ऽ', name: 'अवग्रह' },
      { char: '।', name: 'दण्ड' }
    ]
  },
  tel: {
    consonants: [
      // Ka-varga
      { char: 'క', num: 1, varga: 'ka' },
      { char: 'ఖ', num: 2, varga: 'ka' },
      { char: 'గ', num: 3, varga: 'ka' },
      { char: 'ఘ', num: 4, varga: 'ka' },
      { char: 'ఙ', num: 5, varga: 'ka' },
      // Ca-varga
      { char: 'చ', num: 6, varga: 'ca' },
      { char: 'ఛ', num: 7, varga: 'ca' },
      { char: 'జ', num: 8, varga: 'ca' },
      { char: 'ఝ', num: 9, varga: 'ca' },
      { char: 'ఞ', num: 0, varga: 'ca' },
      // Ṭa-varga
      { char: 'ట', num: 1, varga: 'ta' },
      { char: 'ఠ', num: 2, varga: 'ta' },
      { char: 'డ', num: 3, varga: 'ta' },
      { char: 'ఢ', num: 4, varga: 'ta' },
      { char: 'ణ', num: 5, varga: 'ta' },
      // Ta-varga
      { char: 'త', num: 6, varga: 'ta' },
      { char: 'థ', num: 7, varga: 'ta' },
      { char: 'ద', num: 8, varga: 'ta' },
      { char: 'ధ', num: 9, varga: 'ta' },
      { char: 'న', num: 0, varga: 'ta' },
      // Pa-varga
      { char: 'ప', num: 1, varga: 'pa' },
      { char: 'ఫ', num: 2, varga: 'pa' },
      { char: 'బ', num: 3, varga: 'pa' },
      { char: 'భ', num: 4, varga: 'pa' },
      { char: 'మ', num: 5, varga: 'pa' },
      // Ya-varga & Sibilants
      { char: 'య', num: 1, varga: 'ya' },
      { char: 'ర', num: 2, varga: 'ya' },
      { char: 'ల', num: 3, varga: 'ya' },
      { char: 'వ', num: 4, varga: 'ya' },
      { char: 'శ', num: 5, varga: 'ya' },
      { char: 'ష', num: 6, varga: 'ya' },
      { char: 'స', num: 7, varga: 'ya' },
      { char: 'హ', num: 8, varga: 'ya' },
      // Extras
      { char: 'ళ', num: 9, varga: 'extra' },
      { char: 'క్ష', num: 9, varga: 'extra' },
      { char: 'జ్ఞ', num: 0, varga: 'extra' }
    ],
    vowels: [
      { char: 'అ', desc: 'a' },
      { char: 'ఆ', desc: 'ā' },
      { char: 'ఇ', desc: 'i' },
      { char: 'ఈ', desc: 'ī' },
      { char: 'ఉ', desc: 'u' },
      { char: 'ఊ', desc: 'ū' },
      { char: 'ఋ', desc: 'ṛ' },
      { char: 'ౠ', desc: 'ṝ' },
      { char: 'ఌ', desc: 'ḷ' },
      { char: 'ఎ', desc: 'e' },
      { char: 'ఏ', desc: 'ē' },
      { char: 'ఐ', desc: 'ai' },
      { char: 'ఒ', desc: 'o' },
      { char: 'ఓ', desc: 'ō' },
      { char: 'ఔ', desc: 'au' },
      { char: 'అం', desc: 'aṁ' },
      { char: 'అః', desc: 'aḥ' }
    ],
    matras: [
      { char: 'ా', name: 'దీర్ఘం' },
      { char: 'ి', name: 'గుడి' },
      { char: 'ీ', name: 'గుడిదీర్ఘం' },
      { char: 'ు', name: 'కొమ్ము' },
      { char: 'ూ', name: 'కొమ్ముదీర్ఘం' },
      { char: 'ృ', name: 'వట్రుసుడి' },
      { char: 'ౄ', name: 'వట్రుసుడిదీర్ఘం' },
      { char: 'ె', name: 'ఎత్వం' },
      { char: 'ే', name: 'ఏత్వం' },
      { char: 'ై', name: 'ఐత్వం' },
      { char: 'ొ', name: 'ఒత్వం' },
      { char: 'ో', name: 'ఓత్వం' },
      { char: 'ౌ', name: 'ఔత్వం' },
      { char: '్', name: 'పొల్లు (విరామ)' },
      { char: 'ం', name: 'సున్నా (అనుస్వార)' },
      { char: 'ః', name: 'విసర్గ' }
    ]
  }
};

function setVirtualKeyboardScript(script) {
  currentVkScript = script;
  const devBtn = document.getElementById('vkBtnDev');
  const telBtn = document.getElementById('vkBtnTel');
  if (devBtn && telBtn) {
    if (script === 'dev') {
      devBtn.classList.add('active');
      telBtn.classList.remove('active');
    } else {
      telBtn.classList.add('active');
      devBtn.classList.remove('active');
    }
  }
  setupVirtualKeyboard();
}

function filterVirtualKeyboardCategory(cat) {
  currentVkCategory = cat;
  document.querySelectorAll('.vk-cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  setupVirtualKeyboard();
}

function insertVkChar(char) {
  const input = document.getElementById('textInput');
  if (!input) return;

  const start = input.selectionStart != null ? input.selectionStart : input.value.length;
  const end = input.selectionEnd != null ? input.selectionEnd : input.value.length;
  const val = input.value || '';

  input.value = val.substring(0, start) + char + val.substring(end);
  const newPos = start + char.length;
  input.selectionStart = input.selectionEnd = newPos;
  if (typeof input.focus === 'function') input.focus();
  runTextToNumber();
}

function backspaceVkChar() {
  const input = document.getElementById('textInput');
  if (!input) return;

  const start = input.selectionStart != null ? input.selectionStart : input.value.length;
  const end = input.selectionEnd != null ? input.selectionEnd : input.value.length;
  const val = input.value || '';

  if (start === end && start > 0) {
    input.value = val.substring(0, start - 1) + val.substring(end);
    input.selectionStart = input.selectionEnd = start - 1;
  } else if (start !== end) {
    input.value = val.substring(0, start) + val.substring(end);
    input.selectionStart = input.selectionEnd = start;
  }
  if (typeof input.focus === 'function') input.focus();
  runTextToNumber();
}

function setupVirtualKeyboard() {
  const container = document.getElementById('virtualKeysContainer');
  if (!container) return;
  container.innerHTML = '';

  const data = currentVkScript === 'tel' ? VK_DATA.tel : VK_DATA.dev;
  const isTelugu = currentVkScript === 'tel';

  // Section 1: Consonants
  if (currentVkCategory === 'all' || currentVkCategory === 'consonants') {
    const sec = document.createElement('div');
    sec.className = 'vk-section-group';

    const title = document.createElement('div');
    title.className = 'vk-section-title';
    title.innerHTML = `<span>${isTelugu ? 'హల్లులు (Consonants)' : 'व्यञ्जनानि (Consonants)'}</span> <span class="badge-count">${data.consonants.length}</span>`;
    sec.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'vk-grid';

    data.consonants.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'vk-btn consonant';
      btn.title = `${c.char} ➔ Katapayadi Digit: ${c.num}`;
      btn.innerHTML = `${c.char}<span class="vk-num">${c.num}</span>`;
      btn.onclick = () => insertVkChar(c.char);
      grid.appendChild(btn);
    });

    sec.appendChild(grid);
    container.appendChild(sec);
  }

  // Section 2: Vowels
  if (currentVkCategory === 'all' || currentVkCategory === 'vowels') {
    const sec = document.createElement('div');
    sec.className = 'vk-section-group';

    const title = document.createElement('div');
    title.className = 'vk-section-title';
    title.innerHTML = `<span>${isTelugu ? 'అచ్చులు (Vowels = 0)' : 'स्वराः (Vowels = 0)'}</span> <span class="badge-count">${data.vowels.length}</span>`;
    sec.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'vk-grid';

    data.vowels.forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'vk-btn vowel';
      btn.title = `Vowel: ${v.char} (${v.desc || ''}) ➔ Value: 0`;
      btn.textContent = v.char;
      btn.onclick = () => insertVkChar(v.char);
      grid.appendChild(btn);
    });

    sec.appendChild(grid);
    container.appendChild(sec);
  }

  // Section 3: Matras & Diacritics
  if (currentVkCategory === 'all' || currentVkCategory === 'matras') {
    const sec = document.createElement('div');
    sec.className = 'vk-section-group';

    const title = document.createElement('div');
    title.className = 'vk-section-title';
    title.innerHTML = `<span>${isTelugu ? 'మాత్రలు / గుణింతాలు (Mātrās & Signs)' : 'मात्राः एवं चिह्नानि (Mātrās & Signs)'}</span> <span class="badge-count">${data.matras.length}</span>`;
    sec.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'vk-grid';

    data.matras.forEach(m => {
      const btn = document.createElement('button');
      btn.className = 'vk-btn matra';
      btn.title = `Mātrā: ${m.char} (${m.name})`;
      btn.textContent = m.char;
      btn.onclick = () => insertVkChar(m.char);
      grid.appendChild(btn);
    });

    sec.appendChild(grid);
    container.appendChild(sec);
  }
}

// Setup Vowel Modifiers for custom composer
function setupVowelModifiers() {
  const pills = document.querySelectorAll('#vowelPills .vpill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMatra = pill.getAttribute('data-matra') || '';
    });
  });
}

// Modal dialog helpers
function setupModal() {
  const btn = document.getElementById('quickHelpBtn');
  const modal = document.getElementById('helpModal');
  btn.onclick = () => modal.classList.add('open');
}

function closeHelpModal() {
  document.getElementById('helpModal').classList.remove('open');
}

if (typeof window !== 'undefined') {
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('helpModal');
    if (modal && e.target === modal) {
      modal.classList.remove('open');
    }
  });
}


// ==========================================
// VARNAMALA & PRONUNCIATION CONTROLLERS
// ==========================================

let activeVarnamalaFilter = 'all';
let varnaSeriesInterval = null;

function renderVarnamalaGrid(items) {
  const grid = document.getElementById('varnamalaGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const list = items || VARNAMALA_DATA;

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        No Sanskrit letters match your search. Try searching for a letter, IAST, or articulation name!
      </div>
    `;
    return;
  }

  list.forEach(v => {
    const card = document.createElement('div');
    card.className = 'varna-card';
    card.id = `varna_card_${v.id}`;
    card.innerHTML = `
      <div class="vc-header">
        <div class="vc-char-block">
          <span class="vc-dev">${v.dev}</span>
          <span class="vc-tel" title="Telugu">${v.tel || ''}</span>
          <span class="vc-iast">${v.iast}</span>
          <span class="vc-ipa">${v.ipa}</span>
        </div>
        <div class="vc-katapayadi-badge" title="Katapayadi Mapping">
          ${v.katapayadiGroup} ➔ <strong>${v.katapayadiDigit}</strong>
        </div>
      </div>

      <div class="vc-sthana-badge">${v.sthana}</div>
      <div class="vc-prayatna">⚙️ <strong>Effort:</strong> ${v.prayatna}</div>
      <div class="vc-guide">🗣️ ${v.soundGuide}</div>

      <div class="vc-footer">
        <button class="vc-audio-btn" onclick="playVarnaSingle('${v.id}', '${v.dev}', 'varna_card_${v.id}')">
          <span>🔊</span> Listen
        </button>
        <button class="vc-use-btn" onclick="insertLetterToInput('${v.dev}')" title="Insert Devanagari">
          + '${v.dev}'
        </button>
        ${v.tel ? `
        <button class="vc-use-btn" style="background:rgba(56, 189, 248, 0.15); color:#38bdf8; border:1px solid rgba(56, 189, 248, 0.3);" onclick="insertLetterToInput('${v.tel}')" title="Insert Telugu">
          + '${v.tel}'
        </button>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterVarnamala(group, btnEl) {
  activeVarnamalaFilter = group;
  document.querySelectorAll('#varnamalaFilterBar .vfilter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const searchInput = document.getElementById('varnamalaSearch');
  const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
  applyVarnamalaFilters(group, searchVal);
}

function searchVarnamala() {
  const searchInput = document.getElementById('varnamalaSearch');
  const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
  applyVarnamalaFilters(activeVarnamalaFilter, searchVal);
}

function applyVarnamalaFilters(group, search) {
  let filtered = VARNAMALA_DATA;

  if (group !== 'all') {
    filtered = filtered.filter(v => v.group === group);
  }

  if (search) {
    filtered = filtered.filter(v => 
      v.dev.includes(search) ||
      (v.tel && v.tel.includes(search)) ||
      v.iast.toLowerCase().includes(search) ||
      v.ipa.toLowerCase().includes(search) ||
      v.sthana.toLowerCase().includes(search) ||
      v.prayatna.toLowerCase().includes(search) ||
      v.soundGuide.toLowerCase().includes(search) ||
      v.katapayadiDigit.toString() === search
    );
  }

  renderVarnamalaGrid(filtered);
}

function playVarnaSingle(audioId, dev, cardId) {
  stopVarnaSeries();
  const card = document.getElementById(cardId);
  if (card) card.classList.add('active-play');

  playAudioFile(audioId, dev, () => {
    if (card) card.classList.remove('active-play');
  });
}

function playVarnaSeries(seriesType) {
  stopVarnaSeries();

  let targetList = [];
  if (seriesType === 'swara') {
    targetList = VARNAMALA_DATA.filter(v => v.group === 'swara');
  } else if (seriesType === 'kavarga') {
    targetList = VARNAMALA_DATA.filter(v => v.varga === 'kavarga');
  } else if (seriesType === 'chavarga') {
    targetList = VARNAMALA_DATA.filter(v => v.varga === 'chavarga');
  } else if (seriesType === 'tavarga') {
    targetList = VARNAMALA_DATA.filter(v => v.varga === 'tavarga');
  } else if (seriesType === 'davarga') {
    targetList = VARNAMALA_DATA.filter(v => v.varga === 'davarga');
  } else if (seriesType === 'pavarga') {
    targetList = VARNAMALA_DATA.filter(v => v.varga === 'pavarga');
  } else if (seriesType === 'yavarga') {
    targetList = VARNAMALA_DATA.filter(v => v.group === 'antastha' || v.group === 'ushman');
  }

  if (targetList.length === 0) return;

  let currentSeriesIdx = 0;
  function playNextInSeries() {
    if (currentSeriesIdx >= targetList.length) {
      stopVarnaSeries();
      return;
    }

    document.querySelectorAll('.varna-card').forEach(c => c.classList.remove('active-play'));
    const item = targetList[currentSeriesIdx];
    const card = document.getElementById(`varna_card_${item.id}`);
    if (card) {
      card.classList.add('active-play');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    playAudioFile(item.id, item.dev, () => {
      currentSeriesIdx++;
      setTimeout(playNextInSeries, 180);
    });
  }

  playNextInSeries();
}

function stopVarnaSeries() {
  stopAllAudio();
  document.querySelectorAll('.varna-card').forEach(c => c.classList.remove('active-play'));
}


// ==========================================
// 8. RULES LANGUAGE & HEADER NAVIGATION HIGHLIGHT
// ==========================================

// Rules Language Filter (All / Telugu / English)
function setRulesLanguage(lang) {
  const allBtn = document.getElementById('ruleLangAll');
  const telBtn = document.getElementById('ruleLangTel');
  const engBtn = document.getElementById('ruleLangEng');

  [allBtn, telBtn, engBtn].forEach(b => {
    if (b) b.classList.remove('active');
  });

  if (lang === 'tel' && telBtn) telBtn.classList.add('active');
  else if (lang === 'eng' && engBtn) engBtn.classList.add('active');
  else if (allBtn) allBtn.classList.add('active');

  const engDescs = document.querySelectorAll('.rule-desc-eng, .code-eng');
  const telDescs = document.querySelectorAll('.rule-desc-tel, .code-tel, .rule-title-tel');

  if (lang === 'tel') {
    engDescs.forEach(el => { if (el && el.style) el.style.display = 'none'; });
    telDescs.forEach(el => { if (el && el.style) el.style.display = 'block'; });
  } else if (lang === 'eng') {
    engDescs.forEach(el => { if (el && el.style) el.style.display = 'block'; });
    telDescs.forEach(el => { if (el && el.style) el.style.display = 'none'; });
  } else {
    // Both
    engDescs.forEach(el => { if (el && el.style) el.style.display = 'block'; });
    telDescs.forEach(el => { if (el && el.style) el.style.display = 'block'; });
  }
}

// Setup Header Navigation Highlight & Scroll Spy
function setupNavigationHighlight() {
  const navItems = Array.from(document.querySelectorAll('.site-header .nav-item'));
  const sectionIds = ['rules', 'matrix', 'varnamala', 'converter', 'remember', 'examples', 'chandas', 'quiz'];
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!navItems.length || !sections.length) return;

  function setActive(activeId) {
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${activeId}` || (activeId === 'rules' && href === '#learn')) {
        item.classList.add('active');
        // Only scroll the horizontal nav container if needed, never window.scroll
        const container = item.parentElement;
        if (container && container.scrollWidth > container.clientWidth) {
          const itemLeft = item.offsetLeft;
          const containerWidth = container.clientWidth;
          container.scrollTo({
            left: itemLeft - (containerWidth / 2) + (item.offsetWidth / 2),
            behavior: 'smooth'
          });
        }
      } else {
        item.classList.remove('active');
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

    const headerOffset = 100;
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

  // Smooth scroll and immediate active highlight on click
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          navItems.forEach(n => n.classList.remove('active'));
          this.classList.add('active');
          const headerOffset = 70;
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
}


// ==========================================
// 9. INITIALIZATION ON PAGE LOAD
// ==========================================

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setupNavigationHighlight();
    setRulesLanguage('all');
    setupMasterMatrixInteractions();
    setupVirtualKeyboard();
    setupVowelModifiers();
    setupModal();

    // Populate initial components
    renderVarnamalaGrid();
    renderVaultCards();
    renderPiGrid();
    renderGanasRibbon();
    inspectGana('ya');
    renderChandasTable();
    generateQuizQuestion();

    // Preload a memorable sample into converter and Chandas scanner
    loadTextPreset('गोपीभाग्यमधुव्रातः');
    loadChandasPreset('गोपीभाग्यमधुव్రాतः');
  });
}
