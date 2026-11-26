// Varahamihira's Brihat Samhita — Part 3 Data (Chapters LXVIII–CVII) + Quiz
// Strictly faithful to V. Subrahmanya Sastri & M. Ramakrishna Bhat edition

// Chapter LXIX: Panca Mahapurusha (5 Great Men)
const BS_PANCA_MAHAPURUSHA = [
  {
    nameEn: "Haṁsa", nameTe: "హంస పురుషుడు", planet: "Jupiter (గురువు)",
    height: "96 digits (అంగుళాలు)", weight: "1,600 Palas", lifespan: "90 years",
    traitsEn: "Red honey-like face, swan-like voice, conch/lotus/fish/elephant-goad marks. Rules Khasas, Śūrasenas, Gāndhāras, Gaṅgā-Yamunā doab; dies in forest.",
    traitsTe: "తేనె రంగు ముఖం, హంస ధ్వని, శంఖ-పద్మ చిహ్నాలు; గాంధార-శూరసేనాదులను పాలిస్తాడు; ఆయుస్సు 90 ఏళ్లు."
  },
  {
    nameEn: "Śaśa", nameTe: "శశ పురుషుడు", planet: "Saturn (శని)",
    height: "92 / 99 digits", weight: "Marrow-dominant", lifespan: "70 years",
    traitsEn: "Slender waist, 7 upward symbols, commander/vassal lord of foresters; clever, brave, fond of others' wealth; dies at 70.",
    traitsTe: "సన్నని నడుము, 7 ఊర్ధ్వ రేఖలు; అటవీ-సామంత పాలకుడు, శూరుడు; ఆయుస్సు 70 ఏళ్లు."
  },
  {
    nameEn: "Rucaka", nameTe: "రుచక పురుషుడు", planet: "Mars (కుజుడు)",
    height: "100 / 102 digits", weight: "1,000 Palas", lifespan: "70 years",
    traitsEn: "Dark-red complexion, conch-like neck, 8 symbols on palms/feet, clever in spells/war; rules Vindhya, Sahya, Ujjain; dies by weapon/fire.",
    traitsTe: "రక్తశ్యామ వర్ణం, శంఖ కంఠం, 8 చిహ్నాలు; మంత్ర-యుద్ధ నిపుణుడు; వింధ్య-ఉజ్జయిని పాలకుడు; ఆయుస్సు 70 ఏళ్లు."
  },
  {
    nameEn: "Bhadra", nameTe: "భద్ర పురుషుడు", planet: "Mercury (బుధుడు)",
    height: "84 / 105 digits", weight: "1 Bhāra (2,000 Palas)", lifespan: "80 years",
    traitsEn: "Tiger-like face, rain-earth/saffron/aguru fragrance, 10 symbols on hands/feet; king of central lands or emperor; dies at pilgrimage site.",
    traitsTe: "వ్యాఘ్ర ముఖం, సుగంధ శరీరం, 10 చిహ్నాలు; మధ్యదేశ చక్రవర్తి; ఆయుస్సు 80 ఏళ్లు."
  },
  {
    nameEn: "Mālavya", nameTe: "మాలవ్య పురుషుడు", planet: "Venus (శుక్రుడు)",
    height: "108 digits", weight: "Well-proportioned", lifespan: "70 years",
    traitsEn: "Long arms reaching knees, 13-digit face, 10-digit ear-span; rules Mālwā, Bharuch, Saurāṣṭra, Sindhu, Pāriyātra; dies by Yoga in sacred place.",
    traitsTe: "మోకాళ్ల వరకు పొడవైన చేతులు, 13 అంగుళాల ముఖం; మాళవ-సౌరాష్ట్ర-సింధు పాలకుడు; ఆయుస్సు 70 ఏళ్లు."
  }
];

// Chapters LXVIII–LXXXV: Human Signs, Women, Perfumes & Gems
const BS_CH68_85_HUMAN_GEMS = [
  { ch: "Ch. LXVIII & LXX", titleEn: "Puruṣa & Kanyā Lakṣaṇa (Men & Maidens)", titleTe: "పురుష & కన్యా లక్షణాలు", descEn: "12 physiognomic categories (height 108/96/84d, 3 broad / 3 deep / 6 raised / 4 short / 7 red / 5 thin / 5 long royal traits; 3 forehead lines = 100 yrs); maiden palm/sole marks & 10 life-stage limb map.", descTe: "పురుషుల 12 శరీర లక్షణాలు (లలాట 3 రేఖలు = 100 ఏళ్లు) మరియు కన్యల శుభ-అశుభ చిహ్నాలు." },
  { ch: "Ch. LXXI–LXXIII", titleEn: "Garment Slits, Chowries & Umbrellas", titleTe: "వస్త్రచ్ఛేద, చామర & ఛత్ర లక్షణం", descEn: "27 Nakṣatras for wearing new cloth & 9-part cloth grid (4 corners=Gods, sides=Men, center=Devils); Himalayan Cāmara odd/even knot counts; 6-cubit white royal umbrella.", descTe: "నవవస్త్ర ధారణ నక్షత్రాలు & 9 భాగాల వస్త్ర చక్రం; చామర-ఛత్ర కొలతలు." },
  { ch: "Ch. LXXIV–LXXVI", titleEn: "Praise of Women, Affection & Remedies", titleTe: "స్త్రీప్రశంస, సౌభాగ్యకరణ & వాజీకరణం", descEn: "Eulogy of women's purity & centrality; courtesy & sweet speech (not potions) win universal love; Vājīkaraṇa herbal/milk tonics and conception rules.", descTe: "స్త్రీ గౌరవ వర్ణన, మృదుభాషణంతో అందరి ప్రేమ పొందడం మరియు ఆయుర్వేద ఆరోగ్య యోగాలు." },
  { ch: "Ch. LXXVII", titleEn: "Gandhayukti (Science of Perfumes)", titleTe: "గంధయుక్తి (సుగంధ ద్రవ్య నిర్మాణం)", descEn: "Hair dyes, Campaka oil, Sarvatobhadra 4×4 matrix, 9-cell Bakula (84 scents), and Gandhārṇava ('Perfume Ocean'): C(16,4)=1,820 tetrads × 96 permutations = 174,720 perfumes.", descTe: "కేశరాగం, సర్వతోభద్ర 4×4 గంధ చక్రం మరియు గంధార్ణవ గణన (16 ద్రవ్యాలలో 4 కలిపితే 1,74,720 సుగంధాలు)." },
  { ch: "Ch. LXXVIII–LXXIX", titleEn: "Union & Couches/Seats", titleTe: "పుంస్త్రీ సమాగమ & శయనాసన లక్షణం", descEn: "Menstrual/conception rules (16 Ritu nights) and 12 auspicious timbers for cots/seats (King 100d, width 3/8 length, leg 1/3; avoid 5+ mixed woods).", descTe: "గర్భధారణ నియమాలు మరియు శయనాసన కొలతలు (రాజు 100 అంగుళాలు, వెడల్పు 3/8 వంతు; 5+ కలపలు వాడరాదు)." },
  { ch: "Ch. LXXX–LXXXV", titleEn: "Gems (Ratnaparīkṣā), Lamps & Tooth-sticks", titleTe: "రత్న, ముత్య, పద్మరాగ, మరకత, దీప, దంతకాష్ఠ పరీక్ష", descEn: "22 gems; 8 diamond localities & weight/price tables (20 grains = 200,000 Kārṣāpaṇas); 8 pearl sources, 14 necklace types (Inducchanda 1008 strings to Ekāvalī); rubies, emeralds, lamp-flames & tooth-stick omens.", descTe: "22 రత్నాలు, వజ్ర-ముత్య-మాణిక్య-మరకత పరీక్షలు & విలువలు, 14 హారాలు, దీప-దంతకాష్ఠ శకునాలు." }
];

// Chapter LXXXVI: 8-Watch (3-hour) Directional Cycle (Angara / Dipta / Dhumini / Santa)
const BS_SAKUNA_WATCHES = [
  { watchEn: "Day Watch 1 (6–9 AM)", watchTe: "పగలు 1వ జాము (6–9 AM)", angara: 1, dipta: 0, dhumini: 7 },    // NE, E, SE (0=E,1=NE,7=SE in clockwise? Let's use 0=E,1=SE,2=S,3=SW,4=W,5=NW,6=N,7=NE!)
  { watchEn: "Day Watch 2 (9–12 PM)", watchTe: "పగలు 2వ జాము (9–12 PM)", angara: 0, dipta: 1, dhumini: 2 },   // E, SE, S
  { watchEn: "Day Watch 3 (12–3 PM)", watchTe: "పగలు 3వ జాము (12–3 PM)", angara: 1, dipta: 2, dhumini: 3 },   // SE, S, SW
  { watchEn: "Day Watch 4 (3–6 PM)", watchTe: "పగలు 4వ జాము (3–6 PM)", angara: 2, dipta: 3, dhumini: 4 },    // S, SW, W
  { watchEn: "Night Watch 1 (6–9 PM)", watchTe: "రాత్రి 1వ జాము (6–9 PM)", angara: 3, dipta: 4, dhumini: 5 }, // SW, W, NW
  { watchEn: "Night Watch 2 (9–12 AM)", watchTe: "రాత్రి 2వ జాము (9–12 AM)", angara: 4, dipta: 5, dhumini: 6 },// W, NW, N
  { watchEn: "Night Watch 3 (12–3 AM)", watchTe: "రాత్రి 3వ జాము (12–3 AM)", angara: 5, dipta: 6, dhumini: 7 },// NW, N, NE
  { watchEn: "Night Watch 4 (3–6 AM)", watchTe: "రాత్రి 4వ జాము (3–6 AM)", angara: 6, dipta: 7, dhumini: 0 }  // N, NE, E
];

const BS_DIRECTIONS_8 = [
  { idx: 0, en: "East", te: "తూర్పు", lord: "Indra / King", lordTe: "ఇంద్రుడు / రాజు" },
  { idx: 1, en: "South-East", te: "ఆగ్నేయం", lord: "Agni / Prince", lordTe: "అగ్ని / యువరాజు" },
  { idx: 2, en: "South", te: "దక్షిణం", lord: "Yama / Commander", lordTe: "యముడు / సేనాపతి" },
  { idx: 3, en: "South-West", te: "నైఋతి", lord: "Nirṛti / Envoy", lordTe: "నిరృతి / దూత" },
  { idx: 4, en: "West", te: "పడమర", lord: "Varuṇa / Merchant", lordTe: "వరుణుడు / వ్యాపారి" },
  { idx: 5, en: "North-West", te: "వాయవ్యం", lord: "Vāyu / Spy", lordTe: "వాయువు / గూఢచారి" },
  { idx: 6, en: "North", te: "ఉత్తరం", lord: "Soma / Brāhmaṇa", lordTe: "సోముడు / బ్రాహ్మణుడు" },
  { idx: 7, en: "North-East", te: "ఈశాన్యం", lord: "Śiva / Elephant-master", lordTe: "శివుడు / గజాధ్యక్షుడు" }
];
// Fix Day Watch 1 indices: Day 1 = NE (7), E (0), SE (1)
BS_SAKUNA_WATCHES[0] = { watchEn: "Day Watch 1 (6–9 AM)", watchTe: "పగలు 1వ జాము (6–9 AM)", angara: 7, dipta: 0, dhumini: 1 };

const BS_CH86_100_OMENS_MUHURTA = [
  { ch: "Ch. LXXXVI–LXXXVIII", titleEn: "Śākuna Foundations, 32-Division Circle & Bird/Beast Cries", titleTe: "శాకునం, అంతరచక్రం (32 భాగాలు) & పక్షి-మృగ ధ్వనులు", descEn: "8-watch directional cycle (Aṅgāra/Dīpta/Dhūminī vs 5 Śānta), 32-rim quarter wheel + 8 spokes + hub, 10 Blasted vs Tranquil signs, and diurnal/nocturnal species cries.", descTe: "అష్టజాముల శకున చక్రం, 32 భాగాల అంతరచక్రం, ప్రదీప్త vs శాంత శకునాలు." },
  { ch: "Ch. LXXXIX–XCVI", titleEn: "Dogs, Jackals, Wild Beasts, Cows, Horses, Elephants, Crows & Akṣara Kośa", titleTe: "శునక, శివ, మృగ, గో, అశ్వ, గజ, వాయస శకునాలు", descEn: "Behaviour & cries of dogs (rain within 12d if plunging in water), jackals (1–7 howls), cows, horses, elephants, 28+ crow syllables, 11/16 Prāṇāyāma expiation, and Yavaneśvara's Akṣara Kośa.", descTe: "కుక్క, నక్క, ఆవు, గుర్రం, ఏనుగు, కాకుల శకునాలు, ప్రాణాయామ శాంతి మరియు అక్షర కోశం." },
  { ch: "Ch. XCVII–C", titleEn: "Fruition Timings, 7 Nakṣatra Classes, Tithis & Karaṇas", titleTe: "పాకకాలం, నక్షత్ర-తిథి-కరణ గుణగణాలు", descEn: "Portent fruition timelines (same day to 1+ year; doubled if unexpiated); 7 Nakṣatra election classes (Dhruva, Tīkṣṇa, Ugra, Kṣipra, Mṛdu, Mixed, Cara); 15 Tithi lords & 5 classes; 11 Karaṇas & Vivāha rules.", descTe: "ఉత్పాత పాకకాలం, 7 నక్షత్ర గణాలు (ధ్రువ, తీక్ష్ణ, ఉగ్ర, క్షిప్ర, మృదు, చర), 15 తిథులు, 11 కరణాలు & వివాహ నియమాలు." },
  { ch: "Ch. CI–CIII", titleEn: "Nakṣatra Births, 108 Pādas & Marriage Lagna Transits", titleTe: "నక్షత్ర జాతకం, రాశి విభాగం & వివాహ గ్రహ ఫలితాలు", descEn: "27 Nakṣatra natal traits, exact 9-pāda per sign mapping, 12-house × 8-planet Marriage Lagna matrix, and Godhūlikā evening-dust override (Sl. 13).", descTe: "27 నక్షత్ర జన్మ ఫలాలు, రాశి-పాద విభాగం, వివాహ లగ్న 12 భావ గ్రహ ఫలాలు & గోధూళికా లగ్నం." },
  { ch: "Ch. CV–CVII", titleEn: "Stellar Deity (Rūpa-Sattra), Conclusion & 107-Chapter Index", titleTe: "రూపసత్ర వ్రతం, ఉపసంహారం & 107 అధ్యాయాల అనుక్రమణిక", descEn: "27 Nakṣatras mapped to the limbs of the Cosmic Deity (starting Chaitra Kṛṣṇa 8 in Mūla) + 12 monthly Viṣṇu names; epilogue & complete chapter index.", descTe: "నక్షత్రపురుష (రూపసత్ర) వ్రత విధానం, 12 విష్ణు నామాలు మరియు సంపూర్ణ గ్రంథ ఉపసంహారం." }
];

// Chapter CIV: Gocara (Planetary Transits from Janma Rasi — Sloka 4 + 12-house summaries)
const BS_GOCARA_BENEFIC = {
  sun:     { en: "Sun (రవి)", houses: [3, 6, 10, 11], sloka: "Sl. 4: Benefic in 3, 6, 10, 11 from Moon-sign." },
  moon:    { en: "Moon (చంద్రుడు)", houses: [1, 3, 6, 7, 10, 11], sloka: "Sl. 4: Benefic in 1, 3, 6, 7, 10, 11 from Moon-sign." },
  mars:    { en: "Mars (కుజుడు)", houses: [3, 6, 11], sloka: "Sl. 4: Benefic in 3, 6, 11 from Moon-sign." },
  mercury: { en: "Mercury (బుధుడు)", houses: [2, 4, 6, 8, 10, 11], sloka: "Sl. 4: Benefic in 2, 4, 6, 8, 10, 11 from Moon-sign." },
  jupiter: { en: "Jupiter (గురువు)", houses: [2, 5, 7, 9, 11], sloka: "Sl. 4: Benefic in 2, 5, 7, 9, 11 from Moon-sign." },
  venus:   { en: "Venus (శుక్రుడు)", houses: [1, 2, 3, 4, 5, 8, 9, 11, 12], sloka: "Sl. 4: Benefic in all houses EXCEPT 6, 7, 10 from Moon-sign." },
  saturn:  { en: "Saturn (శని)", houses: [3, 6, 11], sloka: "Sl. 4: Benefic in 3, 6, 11 from Moon-sign." }
};

const BS_RASI_NAMES = [
  "Meṣa (Aries) • మేషం", "Vṛṣabha (Taurus) • వృషభం", "Mithuna (Gemini) • మిథునం",
  "Karkaṭaka (Cancer) • కర్కాటకం", "Siṁha (Leo) • సింహం", "Kanyā (Virgo) • కన్య",
  "Tulā (Libra) • తుల", "Vṛścika (Scorpio) • వృశ్చికం", "Dhanus (Sagittarius) • ధనుస్సు",
  "Makara (Capricorn) • మకరం", "Kumbha (Aquarius) • కుంభం", "Mīna (Pisces) • మీనం"
];

// All 107 Adhyayas Index (per Book Contents & Ch. CVII)
const BS_ALL_107_CHAPTERS = [
  [1,"Introductory / శాస్త్ర ప్రవేశం","3 Skandhas (Tantra, Horā, Śākhā)"],
  [2,"The Astrologer / జ్యోతిష్య లక్షణం","5 Siddhāntas, 4 time measures, Saṁhitā scope"],
  [3,"Course of the Sun / రవిచారం","Ayana, 33 Tāmasa Kīlakas, seasonal sun colours"],
  [4,"Course of the Moon / చంద్రచారం","Moon illumination, 3 star groups, horn shapes"],
  [5,"Course of Rāhu (Eclipses) / రాహుచారం","True cause of eclipses, 10 varieties, 10 Mokṣas"],
  [6,"Course of Mars / కుజచారం","5 retrograde courses, bright copper-red transit"],
  [7,"Course of Mercury / బుధచారం","7 Gatis, 4 motion types, monthly visibility"],
  [8,"Course of Jupiter / బృహస్పతిచారం","12-year & 60-year Saṁvatsara cycles"],
  [9,"Course of Venus / శుక్రచారం","9 Vīthīs (roads) & 6 Maṇḍalas"],
  [10,"Course of Saturn / శనిచారం","27 Nakṣatra transits & colours"],
  [11,"Comets (Ketu) / కేతుచారం","101/1,000 comets, 3 classes, duration rules"],
  [12,"Agastya (Canopus) / అగస్త్యచారం","Autumn water purification & Arghya"],
  [13,"Seven Sages (Saptarṣi) / సప్తర్షిచారం","100 years per Nakṣatra, 7 sages E→W"],
  [14,"Kūrmavibhāga / కూర్మవిభాగం","9 regions mapped to 9 Nakṣatra triads"],
  [15,"Nakṣatra Domains / నక్షత్ర విభాగం","Objects & 7 functional varṇa classes"],
  [16,"Planetary Domains / గ్రహభక్తి","Countries, professions & goods per planet"],
  [17,"Planetary Wars / గ్రహయుద్ధం","4 war kinds & victory/defeat rules"],
  [18,"Moon Conjunctions / చంద్రసమాగమం","North passage auspicious, south adverse"],
  [19,"Year Lords / సంవత్సరాధిపతి","Effects of Sun–Saturn ruling the year"],
  [20,"Planetary Triangle / గ్రహశృంగాటకం","7 geometric clusters & 6 Yogas"],
  [21,"Pregnancy of Clouds / గర్భలక్షణం","195-day delivery cycle & 1 Droṇa = 4 Āḍhakas"],
  [22,"Pregnancy of Air / వాయుధారణ","4 Dhāraṇa days from Jyeṣṭha Śukla 8"],
  [23,"Quantity of Rainfall / ప్రవర్షణం","1-cubit gauge & 4–25 Droṇas by Nakṣatra"],
  [24,"Moon with Rohiṇī / రోహిణీ యోగం","Āṣāḍha Rohiṇī pot/seed/flag ritual"],
  [25,"Moon with Svātī / స్వాతి యోగం","Āṣāḍha bright Svātī 3-watch rain test"],
  [26,"Moon with Āṣāḍhā / ఆషాఢీ యోగం","12-inch Tulā balance weighing ritual"],
  [27,"Wind Circle / వాయుచక్రం","Āṣāḍha Full Moon sunset wind omens"],
  [28,"Immediate Rain / సద్యోవృష్టి","Praśna, nature & Ārdrā-entry rain signs"],
  [29,"Flowers & Creepers / కుసుమలత","Botanical crop & commodity forecasts"],
  [30,"Dawn & Twilight / సంధ్యా లక్షణం","Sandhyā rays, dust & timing/range"],
  [31,"Horizon Glow / దిగ్దాహం","8-direction horizon glow omens"],
  [32,"Earthquakes / భూకంప లక్షణం","4 Circles: Wind, Fire, Indra, Varuṇa"],
  [33,"Meteors / ఉల్కా లక్షణం","5 meteor kinds, shapes & directions"],
  [34,"Haloes / పరివేష లక్షణం","Halo deities, seasonal colours & planets"],
  [35,"Rainbows / ఇంద్రధనుస్సు","Day/night rainbows by direction & site"],
  [36,"Aerial Cities / గంధర్వనగరం","Colours, quarters & battle omens"],
  [37,"Mock-Suns / ప్రతిసూర్య","Positions N/S/above/below Sun"],
  [38,"Haze / రజో లక్షణం","Dust-storm duration & seasonal effects"],
  [39,"Hurricane / నిర్ఘాత","Portentous thunder by 8 day/night watches"],
  [40,"Growth of Crops / సస్యజాతకం","Bādarāyaṇa's Vṛścika/Vṛṣabha crop yogas"],
  [41,"Substances / ద్రవ్యనిశ్చయం","12 Rāśis mapped to goods & commodities"],
  [42,"Price Fluctuations / అర్ఘకాండం","Monthly hoarding & selling schedules"],
  [43,"Indra's Banner / ఇంద్రధ్వజం","Bhādrapada banner, 13 ornaments & omens"],
  [44,"Nīrājana Ceremony / నీరాజనం","Āśvayuja/Kārttika army lustration rite"],
  [45,"Wagtail / ఖంజన లక్షణం","4 wagtail varieties & perches"],
  [46,"Portents (Utpāta) / ఉత్పాత శాంతి","11 portent classes & Vedic expiations"],
  [47,"Miscellany / మయూరచిత్రకం","Planetary paths, Rohiṇī cart & terms"],
  [48,"Puṣyasnāna / పుష్యస్నానం","Royal ablution with 25+ herbs & amnesty"],
  [49,"Royal Crowns / పట్ట లక్షణం","5 crown sizes (8d down to 2d)"],
  [50,"Swords / ఖడ్గ లక్షణం","25–50 inch swords, 30-limb touch & pastes"],
  [51,"Limb Divination / అంగవిద్య","19 M / 15 F / 14 N limbs & theft/birth"],
  [52,"Pimples & Moles / పిడక లక్షణం","Caste colours & head-to-foot omen map"],
  [53,"House-Building / వాస్తువిద్య","81/64-pada grids, 45 deities, rank sizes"],
  [54,"Water Springs / దకార్గలం","9 veins, botanical depth & tank purification"],
  [55,"Treatment of Trees / వృక్షాయుర్వేదం","Grafting, spacing, ulcer & fruit tonics"],
  [56,"Temples / ప్రాసాద లక్షణం","64-pada temples & 20 architectural types"],
  [57,"Adamantine Glue / వజ్రలేపం","4 durable herbal & metallic cements"],
  [58,"Idol Proportions / ప్రతిమా లక్షణం","108-digit canon & deity iconography"],
  [59,"Forest Ingress / వనప్రవేశం","Timber selection by caste & fall omens"],
  [60,"Idol Installation / ప్రతిష్ఠావిధి","Bathing, bed ritual & sectarian priests"],
  [61,"Signs of Cows / గో లక్షణం","Auspicious & faulty cattle marks"],
  [62,"Signs of Dogs / శునక లక్షణం","Nail counts (6 on R/L fore-foot)"],
  [63,"Signs of Cocks / కుక్కుట లక్షణం","Dawn-crowing & fighting cock traits"],
  [64,"Signs of Tortoises / కూర్మ లక్షణం","4 auspicious tortoise varieties"],
  [65,"Signs of Goats / ఛాగ లక్షణం","Teeth, neck-maṇis & 4 goat classes"],
  [66,"Signs of Horses / అశ్వ లక్షణం","10 necessary whorls & tooth-ageing"],
  [67,"Signs of Elephants / గజ లక్షణం","Bhadra, Manda, Mṛga, Saṅkīrṇa dimensions"],
  [68,"Signs of Men / పురుష లక్షణం","12 categories, 108/96/84d height, 100-yr lines"],
  [69,"5 Great Men / పంచమహాపురుష","Haṁsa, Śaśa, Rucaka, Bhadra, Mālavya"],
  [70,"Signs of Maidens / కన్యా లక్షణం","21+ marks, palmistry & 10 life stages"],
  [71,"Garment Slits / వస్త్రచ్ఛేదం","27 stars & 9-part cloth grid"],
  [72,"Chowries / చామర లక్షణం","Cāmara handles, varṇa colours & knots"],
  [73,"Umbrellas / ఛత్ర లక్షణం","6-cubit royal umbrella & officer sizes"],
  [74,"Praise of Women / స్త్రీ ప్రశంస","Superiority, purity & honour of women"],
  [75,"Winning Affection / సౌభాగ్యకరణం","Courtesy & sweet speech win love"],
  [76,"Erotic Remedies / వాజీకరణం","Conception rule & herbal-milk recipes"],
  [77,"Perfumes / గంధయుక్తి","Gandhārṇava: C(16,4)×96 = 174,720 scents"],
  [78,"Union of Man & Woman / పుంస్త్రీ సమాగమ","16 Ṛtu nights & procreation rules"],
  [79,"Couches & Seats / శయనాసన లక్షణం","12 timbers, King 100d, 6 wood blemishes"],
  [80,"Gems & Diamonds / రత్నపరీక్ష","22 gems, 8 diamond localities & prices"],
  [81,"Pearls / ముక్తా లక్షణం","8 sources, prices & 14 necklace types"],
  [82,"Rubies / పద్మరాగ లక్షణం","3 origins, snake-gem & price deductions"],
  [83,"Emeralds / మరకత లక్షణం","4 auspicious emerald hues"],
  [84,"Lamps / దీప లక్షణం","Auspicious vs inauspicious flame signs"],
  [85,"Tooth-Sticks / దంతకాష్ఠ లక్షణం","Tree-specific blessings & fall omens"],
  [86,"Śākuna I (Foundations) / శాకునం 1","8-watch cycle, 32 divisions, blasted signs"],
  [87,"Śākuna II (Antara Cakra) / అంతరచక్రం","32 rim divisions, 8 spokes & hub"],
  [88,"Śākuna III (Cries) / పక్షి-మృగ ధ్వనులు","Diurnal/nocturnal species & Piṅgalā ritual"],
  [89,"Śākuna IV (Dogs) / శునక చక్రం","Dog actions, barking & 12-day rain sign"],
  [90,"Śākuna V (Jackals) / శివరుతం","1–7 howls & South reversal"],
  [91,"Śākuna VI (Wild Beasts) / మృగచేష్ట","Wild animals at borders, gates & homes"],
  [92,"Śākuna VII (Cows) / గోచేష్ట","Cow & buffalo behaviour omens"],
  [93,"Śākuna VIII (Horses) / అశ్వచేష్ట","Sparks/flames, neighing & hoof signs"],
  [94,"Śākuna IX (Elephants) / గజచేష్ట","Tusk zones, breakage & crocodile signs"],
  [95,"Śākuna X (Crows) / వాయస విరుతం","Vaisākha nests, 28+ cries & Prāṇāyāma"],
  [96,"Śākuna XI + Akṣara Kośa / శాకున-అక్షరకోశం","Astro-omen synthesis & name reconstruction"],
  [97,"Fruition Timings / పాకకాలం","Exact timelines (same day to 1+ year)"],
  [98,"Nakṣatra Properties / నక్షత్ర గుణాలు","28 deities, 7 election classes & shaving"],
  [99,"Tithi Properties / తిథి గుణాలు","15 Tithi lords & 5 classes (Nandā–Pūrṇā)"],
  [100,"Karaṇa Qualities / కరణ గుణాలు","7 movable + 4 fixed Karaṇas & marriage"],
  [101,"Nakṣatra Births / నక్షత్ర జాతకం","27 lunar-star natal character effects"],
  [102,"Zodiac Divisions / రాశి విభాగం","108 pādas mapped to 12 signs"],
  [103,"Marriage Combinations / వివాహ పటలం","12-house × 8-planet Lagna + Godhūlikā"],
  [104,"Planetary Transits / గోచార ఫలాలు","Benefic houses from Moon-sign & remedies"],
  [105,"Stellar Deity Worship / రూపసత్రం","27 stars mapped to deity limbs + 12 Viṣṇus"],
  [106,"Conclusion / ఉపసంహారం","Epilogue & invocation to Sun and sages"],
  [107,"Table of Contents / అనుక్రమణిక","Canonical index of chapters & 3,900 ślokas"]
];

// Mastery Quiz (12 Questions strictly from Brihat Samhita)
const BS_QUIZ = [
  {
    qEn: "1. What are the three Skandhas (branches) of Jyotiṣa Śāstra per Ch. I?",
    qTe: "1. మొదటి అధ్యాయం ప్రకారం జ్యోతిష శాస్త్రంలోని మూడు స్కంధాలు ఏవి?",
    opts: ["Tantra (Gaṇita), Horā, Śākhā (Saṁhitā)", "Āyurveda, Dhanurveda, Gandharvaveda", "Sāṅkhya, Yoga, Nyāya", "Karma, Bhakti, Jñāna"],
    ans: 0
  },
  {
    qEn: "2. How does Varāhamihira explain lunar and solar eclipses in Ch. V?",
    qTe: "2. అధ్యా. 5లో చంద్ర, సూర్య గ్రహణాలకు వరాహమిహిరుడు చెప్పిన శాస్త్రీయ కారణం ఏమిటి?",
    opts: ["Earth's shadow causes lunar eclipse; Moon covering Sun causes solar eclipse", "A serpent swallows the Sun and Moon", "Clouds block the sky", "Two invisible comets collide"],
    ans: 0
  },
  {
    qEn: "3. How many solar days after cloud conception (Garbhalakṣaṇa, Ch. XXI) does rain deliver?",
    qTe: "3. మేఘ గర్భధారణ జరిగిన ఎన్ని సౌర దినాల తర్వాత వర్షం కురుస్తుంది (అధ్యా. 21)?",
    opts: ["108 days", "195 days", "270 days", "365 days"],
    ans: 1
  },
  {
    qEn: "4. In Kūrmavibhāga (Ch. XIV), how many regions are mapped to Nakṣatra triads?",
    qTe: "4. కూర్మవిభాగంలో (అధ్యా. 14) ఎన్ని దిక్కులు/ప్రాంతాలకు నక్షత్ర త్రికాలు కేటాయించబడ్డాయి?",
    opts: ["4 Regions", "8 Regions", "9 Regions (Center + 8 Quarters)", "12 Regions"],
    ans: 2
  },
  {
    qEn: "5. In the 81-Pada Vāstu Maṇḍala (Ch. LIII), which deity occupies the 9 central squares?",
    qTe: "5. 81 పద వాస్తు మండలంలో (అధ్యా. 53) మధ్య 9 గదులలో ఉండే దేవత ఎవరు?",
    opts: ["Indra", "Brahmā", "Varuṇa", "Yama"],
    ans: 1
  },
  {
    qEn: "6. According to Dakārgala (Ch. LIV, Sl. 97), which three well directions bring cautions?",
    qTe: "6. దకార్గలం (అధ్యా. 54) ప్రకారం ఏ మూడు దిక్కులలో బావి తవ్వడం దోషప్రదం?",
    opts: ["North, East, North-East", "South-East, South-West, North-West", "South, West, North", "East, West, Center"],
    ans: 1
  },
  {
    qEn: "7. Which planet produces the 'Haṁsa' Mahāpuruṣa in Ch. LXIX?",
    qTe: "7. అధ్యా. 69 ప్రకారం 'హంస' మహాపురుష యోగాన్ని ఇచ్చే గ్రహం ఏది?",
    opts: ["Venus", "Mercury", "Jupiter", "Saturn"],
    ans: 2
  },
  {
    qEn: "8. In Gandhārṇava (Ch. LXXVII), choosing 4 out of 16 substances in 1:2:3:4 parts yields how many perfumes?",
    qTe: "8. గంధార్ణవంలో (అధ్యా. 77) 16 ద్రవ్యాలలో 4 ఎంచుకుని 1:2:3:4 పాళ్లలో కలిపితే ఎన్ని సుగంధాలు వస్తాయి?",
    opts: ["1,820", "3,840", "174,720", "362,880"],
    ans: 2
  },
  {
    qEn: "9. Which four directions are ALWAYS auspicious for wells and water in Vāstu & Dakārgala?",
    qTe: "9. వాస్తు మరియు దకార్గల ప్రకారం నీటికి అత్యుత్తమ శుభ దిక్కులు ఏవి?",
    opts: ["SE, SW, NW", "North, North-East, East", "South-West only", "South-East only"],
    ans: 1
  },
  {
    qEn: "10. In Śākuna (Ch. LXXXVI), which quarters in a 3-hour watch are called 'Dīpta' (Burning)?",
    qTe: "10. శాకునంలో (అధ్యా. 86) ప్రతి జాములో 'దీప్త' దిక్కు అనగా ఏమిటి?",
    opts: ["The quarter where the Sun is present right then (Prāpta-Sūrya)", "The 5th quarter", "Only North-East", "Only midnight"],
    ans: 0
  },
  {
    qEn: "11. In Gocara (Ch. CIV, Sl. 4), in which house from the Moon-sign are ALL 7 planets benefic?",
    qTe: "11. గోచారంలో (అధ్యా. 104, శ్లో. 4) జన్మ రాశి నుండి ఏ భావంలో అన్ని గ్రహాలూ శుభఫలితాలు ఇస్తాయి?",
    opts: ["1st House", "7th House", "10th House", "11th House"],
    ans: 3
  },
  {
    qEn: "12. In Ch. CIII (Sl. 13), which evening moment overrides all marriage-Muhūrta defects?",
    qTe: "12. అధ్యా. 103 (శ్లో. 13) ప్రకారం సమస్త దోషాలను హరించే శుభ వివాహ సమయం ఏది?",
    opts: ["Midnight", "Godhūlikā (evening dust raised by returning cows)", "Noon", "Eclipse time"],
    ans: 1
  }
];
