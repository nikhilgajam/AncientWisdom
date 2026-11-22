/**
 * Chandaḥ-śāstra (छन्दःशास्त्रम् • ఛందశ్శాస్త్రము)
 * Acharya Pingala's Prosody, Binary Combinatorics, Meru Prastāra & Cognitive Neuroscience
 * Part of AncientWisdom Digital Sanctuary
 */

// ==========================================
// 1. DATA & CANONICAL DEFINITIONS
// ==========================================

const GANAS_DATA = {
  ya: { name: "Ya-gaṇa (యగణం • यगण)", pattern: "LGG", symbols: "⏑ — —", matras: 5, binary: "011", element: "Jala (Water • జలము)", deity: "Varuṇa", effect: "Prosperity & Life Energy", mnemonic: "ya-mā-tā" },
  ma: { name: "Ma-gaṇa (మగణం • मगण)", pattern: "GGG", symbols: "— — —", matras: 6, binary: "111", element: "Pṛthvī (Earth • భూమి)", deity: "Pṛthvī", effect: "Stability & Supreme Abundance", mnemonic: "mā-tā-rā" },
  ta: { name: "Ta-gaṇa (తగణం • तगण)", pattern: "GGL", symbols: "— — ⏑", matras: 5, binary: "110", element: "Ākāśa (Ether • ఆకాశము)", deity: "Indra", effect: "Expansion & Spiritual Victory", mnemonic: "tā-rā-ja" },
  ra: { name: "Ra-gaṇa (రగణం • రగణ)", pattern: "GLG", symbols: "— ⏑ —", matras: 5, binary: "101", element: "Agni (Fire • అగ్ని)", deity: "Agni", effect: "Radiance & Transmutation", mnemonic: "rā-ja-bhā" },
  ja: { name: "Ja-gaṇa (జగణం • జగణ)", pattern: "LGL", symbols: "⏑ — ⏑", matras: 4, binary: "010", element: "Sūrya (Sun • సూర్యుడు)", deity: "Sūrya", effect: "Illumination & Intellect", mnemonic: "ja-bhā-na" },
  bha: { name: "Bha-gaṇa (భగణం • భగణ)", pattern: "GLL", symbols: "— ⏑ ⏑", matras: 4, binary: "100", element: "Candra (Moon • చంద్రుడు)", deity: "Candra", effect: "Calmness, Fame & Devotion", mnemonic: "bhā-na-sa" },
  na: { name: "Na-gaṇa (నగణం • నగణ)", pattern: "LLL", symbols: "⏑ ⏑ ⏑", matras: 3, binary: "000", element: "Vāyu (Air • వాయువు)", deity: "Vāyu", effect: "Movement, Speed & Grace", mnemonic: "na-sa-la" },
  sa: { name: "Sa-gaṇa (సగణం • సగణ)", pattern: "LLG", symbols: "⏑ ⏑ —", matras: 4, binary: "001", element: "Pātāla (Underworld • పాతాళము)", deity: "Vāsuki", effect: "Protection & Hidden Strength", mnemonic: "sa-la-gāṁ" }
};

const METRES_DATABASE = [
  {
    id: "anustubh",
    name: "Anuṣṭubh (अनुष्टुभ् • అనుష్టుప్పు)",
    syllablesPerPada: 8,
    totalSyllables: 32,
    padas: 4,
    description: "The primary epic meter of the Bhagavad Gītā, Rāmāyaṇa, and Mahābhārata. 8 syllables per quarter (pāda); 5th syllable is Laghu, 6th is Guru, and 7th alternates between Guru (odd pādas) and Laghu (even pādas).",
    vedic: true
  },
  {
    id: "gayatri",
    name: "Gāyatrī (गायत्री • గాయత్రి)",
    syllablesPerPada: 8,
    totalSyllables: 24,
    padas: 3,
    description: "The supreme Vedic metre of 24 syllables divided into 3 triplets of 8 syllables (tripadā). Revered as the mother of all Vedic metres.",
    vedic: true
  },
  {
    id: "indravajra",
    name: "Indravajrā (इन्द्रवज्रा • ఇంద్రవజ్ర)",
    syllablesPerPada: 11,
    pattern: "GGLGGLGLGGG",
    ganas: "Ta, Ta, Ja, Ga, Ga",
    description: "11 syllables per pāda: Ta-gaṇa, Ta-gaṇa, Ja-gaṇa, Guru, Guru. Resembles the thunderbolt (vajra) of Indra.",
    vedic: false
  },
  {
    id: "upendravajra",
    name: "Upendravajrā (उपेन्द्रवज्रा • ఉపేంద్రవజ్ర)",
    syllablesPerPada: 11,
    pattern: "LGLGGLGLGGG",
    ganas: "Ja, Ta, Ja, Ga, Ga",
    description: "11 syllables per pāda: Ja-gaṇa, Ta-gaṇa, Ja-gaṇa, Guru, Guru. The gentle companion metre to Indravajrā.",
    vedic: false
  },
  {
    id: "upajati",
    name: "Upajāti (उपजाति • ఉపజాతి)",
    syllablesPerPada: 11,
    description: "A harmonious mixed 11-syllable metre whose quarters alternate between Indravajrā and Upendravajrā lines.",
    vedic: false
  },
  {
    id: "vamsastha",
    name: "Vaṁśastha (वंशस्थ • వంశస్థము)",
    syllablesPerPada: 12,
    pattern: "LGLGGLGLGLGL",
    ganas: "Ja, Ta, Ja, Ra",
    description: "12 syllables per pāda: Ja-gaṇa, Ta-gaṇa, Ja-gaṇa, Ra-gaṇa. Rhythmic and dignified, commonly used in classical drama.",
    vedic: false
  },
  {
    id: "bhujangaprayata",
    name: "Bhujaṅgaprayāta (भुजङ्गप्रयात • భుజంగప్రయాతము)",
    syllablesPerPada: 12,
    pattern: "LGGLGGLGGLGG",
    ganas: "Ya, Ya, Ya, Ya",
    description: "12 syllables per pāda consisting of four consecutive Ya-gaṇas (⏑——). Mimics the gliding serpentine motion of a cobra.",
    vedic: false
  },
  {
    id: "totaka",
    name: "Toṭaka (तोटक • తోటకము)",
    syllablesPerPada: 12,
    pattern: "LLGLLGLLGLLG",
    ganas: "Sa, Sa, Sa, Sa",
    description: "12 syllables per pāda consisting of four consecutive Sa-gaṇas (⏑⏑—). Rapid, buoyant rhythm celebrated in Adi Shankaracharya's Toṭakāṣṭakam.",
    vedic: false
  },
  {
    id: "vasantatilaka",
    name: "Vasantatilakā (वसन्ततिलका • వసంతతిలక)",
    syllablesPerPada: 14,
    pattern: "GGLGLLGLGLGLGG",
    ganas: "Ta, Bha, Ja, Ja, Ga, Ga",
    description: "14 syllables per pāda: Ta-gaṇa, Bha-gaṇa, Ja-gaṇa, Ja-gaṇa, Guru, Guru. The 'Ornament of Spring', highly lyrical and ornate.",
    vedic: false
  },
  {
    id: "malini",
    name: "Mālinī (मालिनी • మాలిని)",
    syllablesPerPada: 15,
    pattern: "LLLLLLGGGLGGLGG",
    ganas: "Na, Na, Ma, Ya, Ya",
    description: "15 syllables per pāda: Na-gaṇa, Na-gaṇa, Ma-gaṇa, Ya-gaṇa, Ya-gaṇa with caesura (yati) after the 8th and 15th syllables.",
    vedic: false
  },
  {
    id: "pancacamara",
    name: "Pañcacāmara (पञ्चचामर • పంచచామరము)",
    syllablesPerPada: 16,
    pattern: "LGLGLGLGLGLGLGLG",
    ganas: "Ja, Ra, Ja, Ra, Ja, Ga",
    description: "16 syllables per pāda alternating strictly between Laghu and Guru (⏑—⏑—⏑—⏑—). The electrifying cosmic rhythm of Ravana's Śiva Tāṇḍava Stotra.",
    vedic: false
  },
  {
    id: "sikharini",
    name: "Śikhariṇī (शिखरिणी • శిఖరిణి)",
    syllablesPerPada: 17,
    pattern: "LGGGGGLLLLLGGLG",
    ganas: "Ya, Ma, Na, Sa, Bha, La, Ga",
    description: "17 syllables per pāda: Ya, Ma, Na, Sa, Bha, La, Ga. Pauses after 6th and 17th syllables; immortalized in Saundarya Laharī.",
    vedic: false
  },
  {
    id: "mandakranta",
    name: "Mandākrāntā (मन्दाक्रान्ता • మందాక్రాంత)",
    syllablesPerPada: 17,
    pattern: "GGGGLLLLLLGGLGGLGG",
    ganas: "Ma, Bha, Na, Ta, Ta, Ga, Ga",
    description: "17 syllables per pāda: Ma, Bha, Na, Ta, Ta, Ga, Ga with yatis at 4, 10, and 17. The immortal metre of Kalidasa's Meghadūtam.",
    vedic: false
  },
  {
    id: "shardulavikridita",
    name: "Śārdūlavikrīḍita (शार्दूलविक्रीडित • శార్దూలవిక్రీడితము)",
    syllablesPerPada: 19,
    pattern: "GGGLLGLGLGGLGGLGG",
    ganas: "Ma, Sa, Ja, Sa, Ta, Ta, Ga",
    description: "19 syllables per pāda ('The Tiger's Playful Leap'). Majestic, grand metre with caesura after the 12th syllable.",
    vedic: false
  },
  {
    id: "sragdhara",
    name: "Sragdharā (स्रग्धरा • స్రగ్ధర)",
    syllablesPerPada: 21,
    pattern: "GGGLGLGLLLLLLGGLGGLGG",
    ganas: "Ma, Ra, Bha, Na, Ya, Ya, Ya",
    description: "21 syllables per pāda ('Bearer of the Garland'). Solemn and sonorous, with caesuras at every 7th syllable.",
    vedic: false
  },
  {
    id: "utpalamala",
    name: "Utpalamāla (ఉత్పలమాల • उत्पलमाला)",
    syllablesPerPada: 20,
    ganas: "Bha, Ra, Na, Bha, Bha, Ra, Va",
    description: "Classical Telugu Mahākāvya metre: 20 syllables (Bha, Ra, Na, Bha, Bha, Ra, Va) with Yati (caesura) at the 10th syllable and Prāsa in the 2nd syllable.",
    vedic: false,
    telugu: true
  },
  {
    id: "campakamala",
    name: "Campakamāla (చంపకమాల • चम्पकमाला)",
    syllablesPerPada: 21,
    ganas: "Na, Ja, Bha, Ja, Ja, Ja, Ra",
    description: "Classical Telugu Mahākāvya metre: 21 syllables (Na, Ja, Bha, Ja, Ja, Ja, Ra) with Yati at the 11th syllable and strict Prāsa adherence.",
    vedic: false,
    telugu: true
  },
  {
    id: "mattebhavikriditam",
    name: "Mattebhavikrīḍitamu (మత్తేభవిక్రీడితము • मत्तेभविक्रीडितम्)",
    syllablesPerPada: 20,
    ganas: "Sa, Bha, Ra, Na, Ma, Ya, Va",
    description: "Telugu Mahākāvya metre ('Play of the Intoxicated Elephant'): 20 syllables with Yati at the 14th syllable.",
    vedic: false,
    telugu: true
  }
];

const PRESETS = {
  gita1_1: {
    title: "Bhagavad Gītā 1.1 (Anuṣṭubh • అనుష్టుప్పు)",
    text: "dharmakṣetre kurukṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāścaiva kimakurvata sañjaya",
    script: "iast"
  },
  gayatri_mantra: {
    title: "Gāyatrī Mantra (Gāyatrī 24 Syllables • గాయత్రి మంత్రము)",
    text: "oṁ bhūr bhuvaḥ svaḥ tat savitur vareṇyaṁ\nbhargo devasya dhīmahi dhiyo yo naḥ pracodayāt",
    script: "iast"
  },
  mahamrityunjaya: {
    title: "Mahāmṛtyuñjaya Mantra (Anuṣṭubh • మహామృత్యుంజయ మంత్రము)",
    text: "tryambakaṁ yajāmahe sugandhiṁ puṣṭivardhanam\nurvārukamiva bandhanānmṛtyormukṣīya māmṛtāt",
    script: "iast"
  },
  siva_tandava: {
    title: "Śiva Tāṇḍava Stotra (Pañcacāmara 16 • శివతాండవ స్తోత్రము)",
    text: "jaṭāṭavīgalajjalapravāhapāvitasthale\ngalāvalambya lambitāṁ bhujaṅgatuṅgamālikām",
    script: "iast"
  },
  totakashtakam: {
    title: "Toṭakāṣṭakam (Toṭaka 12 • తోటకాష్టకము)",
    text: "viditākhilaśāstrasudhājaladhe\nmahitopaniṣatkathitārthanidhe",
    script: "iast"
  },
  meghadutam: {
    title: "Kālidāsa's Meghadūtam (Mandākrāntā 17 • మేఘదూతము)",
    text: "kaścit kāntāvirahaguruṇā svādhikārāt pramattaḥ\nśāpenāstaṅgamitamahimā varṣabhogeṇa bhartuḥ",
    script: "iast"
  },
  soundarya_lahari: {
    title: "Saundarya Laharī (Śikhariṇī 17 • సౌందర్యలహరి)",
    text: "śivaḥ śaktyā yukto yadi bhavati saktaḥ prabhavituṁ\nna ce devaṁ devo na khalu kuśalaḥ spanditumapi",
    script: "iast"
  },
  telugu_utpalamala: {
    title: "Telugu Classical (Utpalamāla • ఉత్పలమాల)",
    text: "śrīvāṇīgiriśāścirāya dadhatāṁ vakṣomukhāṅgeṣu yaḥ\nsadbhaktipraṇateṣu saṁpradadatāṁ kalyāṇasantāninīm",
    script: "iast"
  }
};

// ==========================================
// 2. PROSODY & SYLLABIFICATION ENGINE
// ==========================================

const IAST_LONG_VOWELS = ["ā", "ī", "ū", "ṝ", "e", "ai", "o", "au"];
const IAST_SHORT_VOWELS = ["a", "i", "u", "ṛ", "ḷ"];
const VOWEL_REGEX = /(ai|au|ā|ī|ū|ṝ|e|o|a|i|u|ṛ|ḷ)/gi;

/**
 * Syllabifies and computes Laghu/Guru weights for text in IAST, Devanagari, or Telugu
 */
function analyzeProsody(inputText) {
  if (!inputText || !inputText.trim()) {
    return { syllables: [], ganas: [], totalMatras: 0, matchedMetre: null };
  }

  // Transliterate Devanagari / Telugu to IAST for uniform processing
  const iastText = transliterateToIAST(inputText.trim());
  const lines = iastText.split(/\r?\n/).filter(l => l.trim().length > 0);

  const allSyllables = [];

  for (let l = 0; l < lines.length; l++) {
    const line = lines[l].toLowerCase().replace(/[^a-zāīūṛṝḷṁṃḥ\s]/g, "");
    const words = line.split(/\s+/).filter(Boolean);

    for (let w = 0; w < words.length; w++) {
      const word = words[w];
      let match;
      const vMatches = [];
      const vReg = new RegExp(VOWEL_REGEX.source, "gi");

      while ((match = vReg.exec(word)) !== null) {
        vMatches.push({ vowel: match[0], index: match.index });
      }

      for (let i = 0; i < vMatches.length; i++) {
        const cur = vMatches[i];
        const start = (i === 0) ? 0 : vMatches[i - 1].index + vMatches[i - 1].vowel.length;
        const postConsStart = cur.index + cur.vowel.length;
        const nextVowelIdx = (i + 1 < vMatches.length) ? vMatches[i + 1].index : word.length;
        const postCons = word.slice(postConsStart, nextVowelIdx);

        // Check if consonant cluster spans to next word
        let followingCons = postCons;
        if (i + 1 === vMatches.length && w + 1 < words.length) {
          const nextWord = words[w + 1];
          const nextVowelMatch = nextWord.search(VOWEL_REGEX);
          if (nextVowelMatch > 0) {
            followingCons += nextWord.slice(0, nextVowelMatch);
          }
        }

        const isLongVowel = IAST_LONG_VOWELS.includes(cur.vowel);
        const hasAnusvaraVisarga = /[ṁṃḥ]/.test(followingCons);
        const pureCons = followingCons.replace(/[ṁṃḥ]/g, "");
        const isConjunct = pureCons.length >= 2 || (pureCons.length >= 1 && hasAnusvaraVisarga);

        // End of line is optionally Guru (vā padānte)
        const isEndOfLine = (l === lines.length - 1 && w === words.length - 1 && i === vMatches.length - 1);
        const isGuru = isLongVowel || hasAnusvaraVisarga || isConjunct;

        const sylText = word.slice(start, postConsStart);

        allSyllables.push({
          text: sylText,
          weight: isGuru ? "G" : "L",
          symbol: isGuru ? "—" : "⏑",
          matra: isGuru ? 2 : 1,
          rule: isLongVowel ? "Dīrgha Vowel (దీర్ఘ స్వరము)" :
                hasAnusvaraVisarga ? "Anusvāra/Visarga (అనుస్వార/విసర్గ)" :
                isConjunct ? "Samyoga-para Conjunct (సంయుక్తాక్షర పరము)" : "Hrasva Short (హ్రస్వము)"
        });
      }
    }
  }

  // Calculate total matras
  const totalMatras = allSyllables.reduce((acc, s) => acc + s.matra, 0);

  // Group into triplets (Gaṇas)
  const ganas = [];
  for (let i = 0; i < allSyllables.length; i += 3) {
    if (i + 3 <= allSyllables.length) {
      const code = allSyllables[i].weight + allSyllables[i + 1].weight + allSyllables[i + 2].weight;
      const ganaKey = Object.keys(GANAS_DATA).find(k => GANAS_DATA[k].pattern === code);
      ganas.push({
        type: "gana",
        key: ganaKey,
        name: ganaKey ? GANAS_DATA[ganaKey].name : code,
        symbols: `${allSyllables[i].symbol} ${allSyllables[i + 1].symbol} ${allSyllables[i + 2].symbol}`,
        code: code
      });
    } else {
      // Remaining 1 or 2 syllables (Laghu / Guru)
      for (let j = i; j < allSyllables.length; j++) {
        const isG = allSyllables[j].weight === "G";
        ganas.push({
          type: "single",
          name: isG ? "Ga (Guru • గురువు ऽ)" : "La (Laghu • లఘువు ।)",
          symbols: allSyllables[j].symbol,
          code: allSyllables[j].weight
        });
      }
    }
  }

  // Match Metre
  const matchedMetre = identifyMetre(allSyllables, ganas);

  return {
    syllables: allSyllables,
    ganas: ganas,
    totalMatras: totalMatras,
    totalSyllables: allSyllables.length,
    matchedMetre: matchedMetre
  };
}

/**
 * Universal Indic transliteration helper to standardize Devanagari & Telugu into IAST
 */
function transliterateToIAST(text) {
  // If already predominantly Latin, return directly
  if (!/[\u0900-\u097F\u0C00-\u0C7F]/.test(text)) {
    return text;
  }

  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const code = ch.charCodeAt(0);

    // Devanagari transliteration map
    if (code >= 0x0900 && code <= 0x097F) {
      out += devanagariMap[ch] || ch;
    }
    // Telugu transliteration map
    else if (code >= 0x0C00 && code <= 0x0C7F) {
      out += teluguMap[ch] || ch;
    } else {
      out += ch;
    }
  }

  // Handle implicit 'a' vowel attachment and virama cancellation
  out = out.replace(/([k-zḍḷṇṣśṭḍh])(a)?([्్])/gi, "$1");
  return out;
}

const devanagariMap = {
  "अ": "a", "आ": "ā", "इ": "i", "ई": "ī", "उ": "u", "ऊ": "ū", "ऋ": "ṛ", "ॠ": "ṝ", "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",
  "ा": "ā", "ि": "i", "ी": "ī", "ु": "u", "ू": "ū", "ृ": "ṛ", "ॄ": "ṝ", "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
  "ं": "ṁ", "ः": "ḥ", "्": "्",
  "क": "ka", "ख": "kha", "ग": "ga", "घ": "gha", "ङ": "ṅa",
  "च": "ca", "छ": "cha", "ज": "ja", "झ": "jha", "ञ": "ña",
  "ट": "ṭa", "ठ": "ṭha", "ड": "ḍa", "ढ": "ḍha", "ण": "ṇa",
  "त": "ta", "थ": "tha", "द": "da", "ध": "dha", "न": "na",
  "प": "pa", "फ": "pha", "ब": "ba", "भ": "bha", "म": "ma",
  "य": "ya", "र": "ra", "ल": "la", "व": "va",
  "श": "śa", "ष": "ṣa", "स": "sa", "ह": "ha", "क्ष": "kṣa", "ज्ञ": "jña"
};

const teluguMap = {
  "అ": "a", "ఆ": "ā", "ఇ": "i", "ఈ": "ī", "ఉ": "u", "ఊ": "ū", "ఋ": "ṛ", "ౠ": "ṝ", "ఎ": "e", "ఏ": "ē", "ఐ": "ai", "ఒ": "o", "ఓ": "ō", "ఔ": "au",
  "ా": "ā", "ి": "i", "ీ": "ī", "ు": "u", "ూ": "ū", "ృ": "ṛ", "ౄ": "ṝ", "ె": "e", "ే": "e", "ై": "ai", "ొ": "o", "ో": "o", "ౌ": "au",
  "ం": "ṁ", "ః": "ḥ", "్": "్",
  "క": "ka", "ఖ": "kha", "గ": "ga", "ఘ": "gha", "ఙ": "ṅa",
  "చ": "ca", "ఛ": "cha", "జ": "ja", "ఝ": "jha", "ఞ": "ña",
  "ట": "ṭa", "ఠ": "ṭha", "డ": "ḍa", "ఢ": "ḍha", "ణ": "ṇa",
  "త": "ta", "థ": "tha", "ద": "da", "ధ": "dha", "న": "na",
  "ప": "pa", "ఫ": "pha", "బ": "ba", "భ": "bha", "మ": "ma",
  "య": "ya", "ర": "ra", "ల": "la", "వ": "va",
  "శ": "śa", "ష": "ṣa", "స": "sa", "హ": "ha", "ళ": "ḷa", "క్ష": "kṣa"
};

function identifyMetre(syllables, ganas) {
  const count = syllables.length;
  const pattern = syllables.map(s => s.weight).join("");

  // 1. Check direct pattern matches or syllable counts
  if (count === 32 || count === 16 || count === 8) {
    return METRES_DATABASE.find(m => m.id === "anustubh");
  }
  if (count === 24) {
    return METRES_DATABASE.find(m => m.id === "gayatri");
  }
  if (count === 11) {
    if (pattern.startsWith("GGL")) return METRES_DATABASE.find(m => m.id === "indravajra");
    if (pattern.startsWith("LGL")) return METRES_DATABASE.find(m => m.id === "upendravajra");
    return METRES_DATABASE.find(m => m.id === "upajati");
  }
  if (count === 12) {
    if (ganas.length >= 4 && ganas.every(g => g.key === "ya")) return METRES_DATABASE.find(m => m.id === "bhujangaprayata");
    if (ganas.length >= 4 && ganas.every(g => g.key === "sa")) return METRES_DATABASE.find(m => m.id === "totaka");
    return METRES_DATABASE.find(m => m.id === "vamsastha");
  }
  if (count === 14) return METRES_DATABASE.find(m => m.id === "vasantatilaka");
  if (count === 15) return METRES_DATABASE.find(m => m.id === "malini");
  if (count === 16) return METRES_DATABASE.find(m => m.id === "pancacamara");
  if (count === 17) {
    if (ganas[0] && ganas[0].key === "ya") return METRES_DATABASE.find(m => m.id === "sikharini");
    return METRES_DATABASE.find(m => m.id === "mandakranta");
  }
  if (count === 19) return METRES_DATABASE.find(m => m.id === "shardulavikridita");
  if (count === 20) return METRES_DATABASE.find(m => m.id === "utpalamala");
  if (count === 21) {
    if (ganas[0] && ganas[0].key === "na") return METRES_DATABASE.find(m => m.id === "campakamala");
    return METRES_DATABASE.find(m => m.id === "sragdhara");
  }

  // Fallback match based on closest syllable count
  return METRES_DATABASE.find(m => m.syllablesPerPada === count || m.totalSyllables === count) || null;
}

// ==========================================
// 3. PINGALA'S BINARY COMBINATORICS (PRASTĀRA, NAṢṬA, UDDIṢṬA)
// ==========================================

/**
 * Generates the 2^n combinatorial matrix of Pingala's Prastāra
 * Laghu (0) and Guru (1)
 */
function generatePrastara(n) {
  const total = Math.pow(2, n);
  const rows = [];

  for (let i = 0; i < total; i++) {
    const row = [];
    for (let bit = 0; bit < n; bit++) {
      // Pingala's inverted binary placement: LSB first
      const val = (i >> bit) & 1;
      row.push({
        bit: val,
        symbol: val === 1 ? "—" : "⏑",
        weight: val === 1 ? "Guru (1)" : "Laghu (0)",
        color: val === 1 ? "var(--rose-bright)" : "var(--cyan-accent)"
      });
    }
    rows.push({
      index: i + 1,
      sequence: row,
      binaryStr: row.map(r => r.bit).join(""),
      symbolsStr: row.map(r => r.symbol).join(" ")
    });
  }
  return rows;
}

/**
 * Pingala's Naṣṭa Algorithm:
 * Converts a decimal row index N into its exact sequence of Laghus and Gurus
 */
function nastaAlgorithm(index, syllables) {
  let num = index - 1; // 0-based
  const steps = [];
  const result = [];

  for (let i = 0; i < syllables; i++) {
    const isOdd = (num % 2 !== 0);
    const bit = num % 2;
    const symbol = isOdd ? "— (Guru • గ)" : "⏑ (Laghu • ల)";
    steps.push(`Step ${i + 1}: ${num} mod 2 = ${bit} → ${symbol}`);
    result.push(isOdd ? "—" : "⏑");
    num = Math.floor(num / 2);
  }

  return {
    index: index,
    steps: steps,
    resultPattern: result.join(" "),
    resultGanas: result.map(s => s === "—" ? "G" : "L").join("")
  };
}

/**
 * Pingala's Uddiṣṭa Algorithm:
 * Converts a sequence of Laghus and Gurus into its 1-based decimal index
 */
function uddistaAlgorithm(patternStr) {
  const chars = patternStr.replace(/\s+/g, "").split("");
  let sum = 0;
  const steps = [];

  for (let i = 0; i < chars.length; i++) {
    const isGuru = (chars[i] === "—" || chars[i].toUpperCase() === "G" || chars[i] === "1");
    const powerOfTwo = Math.pow(2, i);
    if (isGuru) {
      sum += powerOfTwo;
      steps.push(`Position ${i + 1} is Guru (1): add 2^${i} = ${powerOfTwo}`);
    } else {
      steps.push(`Position ${i + 1} is Laghu (0): add 0`);
    }
  }

  const finalIndex = sum + 1;
  steps.push(`Total sum = ${sum} + 1 = Index ${finalIndex}`);

  return {
    index: finalIndex,
    steps: steps
  };
}

// ==========================================
// 4. MERU PRASTĀRA (PASCAL'S TRIANGLE & FIBONACCI / MĀTRĀVṚTTA)
// ==========================================

function generateMeruPrastara(rows) {
  const triangle = [];
  for (let n = 0; n < rows; n++) {
    const row = [];
    for (let k = 0; k <= n; k++) {
      if (k === 0 || k === n) {
        row.push(1);
      } else {
        row.push(triangle[n - 1][k - 1] + triangle[n - 1][k]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}

// ==========================================
// 5. AUDIO & RESONANCE SIMULATOR
// ==========================================
let audioCtx = null;

function playSacredHarmonic(freq = 432, duration = 1.6) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    // Warm envelope
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.warn("Audio unavailable:", err);
  }
}

// ==========================================
// 6. UI CONTROLLERS & EVENT BINDINGS
// ==========================================

function runMetreScanner() {
  const inputEl = document.getElementById("scannerInput");
  if (!inputEl) return;

  const result = analyzeProsody(inputEl.value);

  // Stats
  const statSyl = document.getElementById("statSyllables");
  const statMatra = document.getElementById("statMatras");
  const statGanas = document.getElementById("statGanas");
  const metreNameEl = document.getElementById("matchedMetreName");
  const metreDescEl = document.getElementById("matchedMetreDesc");
  const sylChainEl = document.getElementById("syllableChain");
  const ganasChainEl = document.getElementById("ganasChain");

  if (statSyl) statSyl.textContent = result.totalSyllables;
  if (statMatra) statMatra.textContent = result.totalMatras;
  if (statGanas) statGanas.textContent = result.ganas.length;

  if (metreNameEl) {
    if (result.matchedMetre) {
      metreNameEl.textContent = result.matchedMetre.name;
      if (metreDescEl) metreDescEl.textContent = result.matchedMetre.description;
    } else {
      metreNameEl.textContent = "Unclassified Metric Form (స్వేచ్ఛా ఛందస్సు / મુક્ત ఛందః)";
      if (metreDescEl) metreDescEl.textContent = `Scanned ${result.totalSyllables} syllables and ${result.totalMatras} Mātrās. Follows classical Pingalan prosody.`;
    }
  }

  // Render Syllable Badges
  if (sylChainEl) {
    sylChainEl.innerHTML = "";
    if (result.syllables.length === 0) {
      sylChainEl.innerHTML = `<span style="color:var(--text-muted); font-size:0.9rem;">Enter Sanskrit, Telugu, or IAST text above to scan syllables.</span>`;
    } else {
      result.syllables.forEach((s, idx) => {
        const badge = document.createElement("div");
        badge.className = `syl-badge ${s.weight === "G" ? "guru" : "laghu"}`;
        badge.title = `${s.text} (${idx + 1}): ${s.rule}`;
        badge.innerHTML = `
          <div class="syl-char">${s.text}</div>
          <div class="syl-symbol">${s.symbol}</div>
          <div class="syl-matra">${s.matra} Mātrā</div>
        `;
        sylChainEl.appendChild(badge);
      });
    }
  }

  // Render Gaṇas Badges
  if (ganasChainEl) {
    ganasChainEl.innerHTML = "";
    if (result.ganas.length === 0) {
      ganasChainEl.innerHTML = `<span style="color:var(--text-muted); font-size:0.85rem;">No triplets formed.</span>`;
    } else {
      result.ganas.forEach(g => {
        const span = document.createElement("div");
        span.style.padding = "0.45rem 0.85rem";
        span.style.borderRadius = "8px";
        span.style.border = "1px solid var(--border-gold)";
        span.style.background = "rgba(245, 185, 66, 0.08)";
        span.style.fontSize = "0.85rem";
        span.style.fontWeight = "600";
        span.innerHTML = `<span style="color:var(--gold-bright);">${g.name}</span> <span style="font-family:var(--font-mono); margin-left:0.35rem; color:var(--text-muted);">[${g.symbols}]</span>`;
        ganasChainEl.appendChild(span);
      });
    }
  }
}

function renderMeruPyramid(rows = 8, highlightFibonacci = false) {
  const container = document.getElementById("meruPyramidContainer");
  if (!container) return;
  container.innerHTML = "";

  const triangle = generateMeruPrastara(rows);

  triangle.forEach((row, n) => {
    const rowEl = document.createElement("div");
    rowEl.className = "meru-row";

    row.forEach((val, k) => {
      const cell = document.createElement("div");
      cell.className = "meru-cell";
      cell.textContent = val;
      cell.title = `Row ${n}, Element ${k}: C(${n}, ${k}) = ${val} metres`;

      // Fibonacci shallow diagonal highlight: n - k condition
      if (highlightFibonacci && (n - k === 0 || n - k === 1 || n - k === 2 || n - k === 3 || n - k === 4)) {
        cell.classList.add("fibonacci-highlight");
      }

      rowEl.appendChild(cell);
    });

    const meta = document.createElement("span");
    meta.className = "meru-row-meta";
    meta.textContent = `2^${n} = ${Math.pow(2, n)}`;
    rowEl.appendChild(meta);

    container.appendChild(rowEl);
  });
}

function runPrastaraVisualizer() {
  const nSelect = document.getElementById("prastaraNSelect");
  const container = document.getElementById("prastaraTableBody");
  if (!nSelect || !container) return;

  const n = parseInt(nSelect.value, 10) || 3;
  const rows = generatePrastara(n);

  container.innerHTML = "";
  rows.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="font-family:var(--font-mono); font-weight:700; color:var(--gold-bright);">${r.index}</td>
      <td style="font-family:var(--font-mono); letter-spacing:0.2em; font-size:1.05rem;">${r.sequence.map(s => `<span style="color:${s.color}; font-weight:800;">${s.symbol}</span>`).join(" ")}</td>
      <td style="font-family:var(--font-mono); color:var(--cyan-accent);">${r.binaryStr}</td>
      <td style="color:var(--text-muted); font-size:0.8rem;">${r.sequence.map(s => s.weight).join(" + ")}</td>
    `;
    container.appendChild(tr);
  });
}

function runNastaCalculator() {
  const idxInput = document.getElementById("nastaIndexInput");
  const sylInput = document.getElementById("nastaSylInput");
  const outEl = document.getElementById("nastaOutput");
  if (!idxInput || !sylInput || !outEl) return;

  const idx = parseInt(idxInput.value, 10) || 1;
  const syl = parseInt(sylInput.value, 10) || 4;

  const res = nastaAlgorithm(idx, syl);
  outEl.innerHTML = `
    <div style="font-size:1.1rem; font-weight:700; color:var(--rose-bright); margin-bottom:0.4rem;">
      Resulting Metre Pattern: <span style="font-family:var(--font-mono); font-size:1.3rem; letter-spacing:0.2em;">${res.resultPattern}</span> (${res.resultGanas})
    </div>
    <div style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-mono);">
      ${res.steps.join("<br>")}
    </div>
  `;
}

function runUddistaCalculator() {
  const patInput = document.getElementById("uddistaPatternInput");
  const outEl = document.getElementById("uddistaOutput");
  if (!patInput || !outEl) return;

  const res = uddistaAlgorithm(patInput.value || "L G L G");
  outEl.innerHTML = `
    <div style="font-size:1.1rem; font-weight:700; color:var(--gold-bright); margin-bottom:0.4rem;">
      Calculated Row Index in Prastāra: <span style="font-family:var(--font-mono); font-size:1.4rem;">#${res.index}</span>
    </div>
    <div style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-mono);">
      ${res.steps.join("<br>")}
    </div>
  `;
}

// ScrollSpy Navigation
function initChandasScrollSpy() {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = Array.from(navItems)
    .map(item => {
      const href = item.getAttribute("href");
      return href && href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
    })
    .filter(Boolean);

  function setActive(id) {
    navItems.forEach(item => {
      const href = item.getAttribute("href");
      item.classList.toggle("active", href === `#${id}`);
    });
  }

  function onScroll() {
    const scrollY = window.pageYOffset;
    const headerOffset = 110;
    let currentId = sections[0]?.id || "";

    for (const sec of sections) {
      if (scrollY >= sec.offsetTop - headerOffset) {
        currentId = sec.id;
      } else {
        break;
      }
    }
    setActive(currentId);
  }

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      const href = item.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          navItems.forEach(n => n.classList.remove("active"));
          item.classList.add("active");
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - 65;
          window.scrollTo({ top: targetTop, behavior: "smooth" });
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

// ==========================================
// 7. DOM INITIALIZER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Scanner listeners
  const scanInput = document.getElementById("scannerInput");
  const scanBtn = document.getElementById("scanActionBtn");
  if (scanInput) {
    scanInput.addEventListener("input", runMetreScanner);
  }
  if (scanBtn) {
    scanBtn.addEventListener("click", runMetreScanner);
  }

  // Presets chips
  const presetChips = document.querySelectorAll(".preset-chip");
  presetChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const key = chip.getAttribute("data-preset");
      if (key && PRESETS[key] && scanInput) {
        scanInput.value = PRESETS[key].text;
        runMetreScanner();
      }
    });
  });

  // Meru Prastara
  const meruRowsInput = document.getElementById("meruRowsInput");
  const meruFibToggle = document.getElementById("meruFibToggle");
  if (meruRowsInput) {
    meruRowsInput.addEventListener("input", () => {
      renderMeruPyramid(parseInt(meruRowsInput.value, 10) || 8, meruFibToggle?.checked || false);
    });
  }
  if (meruFibToggle) {
    meruFibToggle.addEventListener("change", () => {
      renderMeruPyramid(parseInt(meruRowsInput?.value, 10) || 8, meruFibToggle.checked);
    });
  }

  // Prastara
  const prastaraSelect = document.getElementById("prastaraNSelect");
  if (prastaraSelect) {
    prastaraSelect.addEventListener("change", runPrastaraVisualizer);
  }

  // Nasta & Uddista
  const nastaBtn = document.getElementById("nastaRunBtn");
  if (nastaBtn) nastaBtn.addEventListener("click", runNastaCalculator);

  const uddistaBtn = document.getElementById("uddistaRunBtn");
  if (uddistaBtn) uddistaBtn.addEventListener("click", runUddistaCalculator);

  // Audio resonance triggers
  const tone432Btn = document.getElementById("play432Btn");
  if (tone432Btn) {
    tone432Btn.addEventListener("click", () => playSacredHarmonic(432, 2.0));
  }
  const tone108Btn = document.getElementById("play108Btn");
  if (tone108Btn) {
    tone108Btn.addEventListener("click", () => playSacredHarmonic(108, 2.5));
  }
  const tone528Btn = document.getElementById("play528Btn");
  if (tone528Btn) {
    tone528Btn.addEventListener("click", () => playSacredHarmonic(528, 2.0));
  }

  // Initial runs
  runMetreScanner();
  renderMeruPyramid(8, false);
  runPrastaraVisualizer();
  runNastaCalculator();
  runUddistaCalculator();
  initChandasScrollSpy();
});