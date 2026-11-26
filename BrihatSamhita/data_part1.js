// Varahamihira's Brihat Samhita — Part 1 Data (Chapters I–XXXI)
// Strictly faithful to V. Subrahmanya Sastri & M. Ramakrishna Bhat edition

const BS_CH1_2_INTRO = {
  skandhas: [
    {
      nameEn: "1. Tantra (Gaṇita / Astronomy)",
      nameTe: "1. తంత్రం (గణిత శాస్త్రం)",
      descEn: "Mathematical computation of planetary motions, eclipses, conjunctions, and retrogressions (treated in Varāhamihira's Pañcasiddhāntikā).",
      descTe: "గ్రహ గతులు, గ్రహణాలు, యుతులు మరియు వక్రగతుల గణిత శాస్త్రం (పంచసిద్ధాంతికలో వివరించబడింది)."
    },
    {
      nameEn: "2. Horā (Jātaka / Horoscopy)",
      nameTe: "2. హోరా (జాతక శాస్త్రం)",
      descEn: "Natal astrology, births, journeys, and marriages (treated in Varāhamihira's Bṛhat Jātaka, Yātrā, Vivāhapaṭala).",
      descTe: "జన్మ జాతకం, యాత్రలు మరియు వివాహ ఫలితాలు (బృహజ్జాతకంలో వివరించబడ్డాయి)."
    },
    {
      nameEn: "3. Śākhā / Saṁhitā (Mundane & Encyclopaedic)",
      nameTe: "3. శాఖ / సంహిత (సంపూర్ణ ప్రకృతి & ముహూర్త శాస్త్రం)",
      descEn: "Planetary transits, rainfall, architecture (Vāstu), water divining, trees, gems, omens, human/animal signs, and transits — all 107 Adhyāyas of Bṛhat Saṁhitā.",
      descTe: "గ్రహ సంచారాలు, వర్షాధారాలు, వాస్తు, భూగర్భ జలాలు, వృక్షాయుర్వేదం, రత్న పరీక్ష, శకునాలు మొదలైన 107 అధ్యాయాలు."
    }
  ],
  siddhantas: ["Pauliśa", "Romaka", "Vāsiṣṭha", "Saura", "Paitāmaha"],
  astrologerQualitiesEn: "Noble descent, truthful, impartial, clean, eloquent, free from vices; versed in 5 Siddhāntas, 4 time measures (Solar, Sāvana, Lunar, Nakṣatra), shadow/water instruments, eclipses, and all 3 Skandhas.",
  astrologerQualitiesTe: "సత్యవాది, నిష్పక్షపాతి, శుచి, వాక్చాతుర్యం, 5 సిద్ధాంతాలు, 4 కాలమానాలు (సౌర, సావన, చాంద్ర, నాక్షత్ర), ఛాయా-జల యంత్ర గణనలో నిపుణుడు."
};

const BS_PLANET_COURSES = [
  {
    ch: "Ch. III",
    planetEn: "Sun (Āditya)", planetTe: "రవి",
    summaryEn: "Solstices (Ayana) at Makara/Karkaṭaka; 33 Tāmasa Kīlakas (Rāhu's sons) on disc; seasonal solar colours (Śiśira copper, Vasanta saffron, Grīṣma golden, Varṣā white, Śarad lotus, Hemanta blood-red); bright spotless rays bring prosperity.",
    summaryTe: "మకర-కర్కాటక ఆయనాలు; సూర్యబింబంపై 33 తామస కీలకాలు; 6 ఋతువులలో సూర్యుని సహజ వర్ణాలు; నిర్మలమైన కిరణాలు శుభప్రదం."
  },
  {
    ch: "Ch. IV",
    planetEn: "Moon (Candra)", planetTe: "చంద్రుడు",
    summaryEn: "Nearer Earth than Sun, reflects sunlight; 3 Nakṣatra conjunction groups (6 from Revatī before, 12 from Ārdrā middle, 9 from Jyeṣṭhā after); 10+ horn shapes (Boat, Plough, Bow, Yoke, Kuṇḍala); snowy-white unobstructed orb brings peace & crops.",
    summaryTe: "సూర్యకాంతిని ప్రతిబింబించే చంద్రుడు; 3 నక్షత్ర యుతి వర్గాలు; శృంగ ఆకారాలు (నావ, హల, ధనుస్సు, యుగ); నిర్మలమైన బింబం శుభం."
  },
  {
    ch: "Ch. V",
    planetEn: "Rāhu & Eclipses", planetTe: "రాహువు & గ్రహణాలు",
    summaryEn: "Refutes serpent-swallowing myth: Lunar eclipse = Earth's shadow; Solar eclipse = Moon covering Sun (parallax varies by place). 7 Parvan lords, 10 eclipse varieties (Savya, Apasavya, Leha, Grasana, Nirodha, Avamardana, etc.), 10 Mokṣa types, Jupiter's aspect neutralizes evil.",
    summaryTe: "చంద్రగ్రహణం భూమి నీడ వల్ల, సూర్యగ్రహణం చంద్రుడు కప్పడం వల్ల కలుగుతుందని శాస్త్రీయ వివరణ; 10 గ్రహణ భేదాలు, 10 మోక్ష రకాలు; గురు దృష్టి సర్వదోష నివారిణి."
  },
  {
    ch: "Ch. VI",
    planetEn: "Mars (Kuja)", planetTe: "కుజుడు",
    summaryEn: "5 retrograde paths from heliacal rising (7–9 Uṣṇa, 10–12 Asramukha, 13–14 Vyāla, 15–16 Rudhirānana, 17–18 Asimukha); broad, clear, copper-red Mars passing north of stars brings peace.",
    summaryTe: "ఉదయం నుండి 5 వక్ర గతులు (ఉష్ణ, అశ్రముఖ, వ్యాళ, రుధిరానన, అసిముఖ); నిర్మల తామ్రవర్ణంతో నక్షత్రాలకు ఉత్తరంగా వెళ్ళడం శుభం."
  },
  {
    ch: "Ch. VII",
    planetEn: "Mercury (Budha)", planetTe: "బుధుడు",
    summaryEn: "7 courses (Prākṛta, Miśra, Saṅkṣipta, Tīkṣṇa, Yogānta, Ghora, Pāpākhya); 4 motion types (Direct 150d, Fast 24d, Retro 12d, Weak 6d per Devala); golden/parrot/sapphire glossy Mercury brings plenty.",
    summaryTe: "7 గతులు (ప్రాకృత, మిశ్ర, సంక్షిప్త, తీక్ష్ణ, యోగాంత, ఘోర, పాపాఖ్య); సువర్ణ/శుక వర్ణంతో ప్రకాశించడం శుభం."
  },
  {
    ch: "Ch. VIII",
    planetEn: "Jupiter (Bṛhaspati)", planetTe: "గురువు",
    summaryEn: "12-year Jovial cycle (Kārttika–Āśvayuja) and 60-year Saṁvatsara cycle (Prabhava–Kṣaya) grouped in 12 five-year Yugas. Northern, slow (2 stars/yr), crystal-white course brings prosperity.",
    summaryTe: "12 సంవత్సరాల బృహస్పతి చక్రం మరియు ప్రభవాది 60 సంవత్సరాల చక్రం (12 యుగాలు); ఉత్తర గతి, శుభ్రమైన కాంతి శుభప్రదం."
  },
  {
    ch: "Ch. IX",
    planetEn: "Venus (Śukra)", planetTe: "శుక్రుడు",
    summaryEn: "9 Vīthīs (Nāga, Gaja, Airāvata [N/Good]; Vṛṣabha, Go, Jaradgava [Central]; Mṛga, Aja, Dahana [S/Bad]) and 6 Maṇḍalas; curd/jasmine-white Venus rising/setting on dark 8/14/15 brings abundant rain.",
    summaryTe: "9 వీధులు (నాగ, గజ, ఐరావత శుభం; వృషభ, గో, జరద్గవ మధ్యమం; మృగ, అజ, దహన అశుభం) & 6 మండలాలు; శుభ్ర వర్ణం వర్షప్రదం."
  },
  {
    ch: "Ch. X",
    planetEn: "Saturn (Śani)", planetTe: "శని",
    summaryEn: "Glossy in Śravaṇa, Svātī, Hasta, Ārdrā, Bharaṇī, P.Phalgunī gives abundant water; beryl/jet-black/Atasī-blue brings happiness; Jupiter in Viśākhā + Saturn in Kṛttikā warns of calamity.",
    summaryTe: "శ్రవణం, స్వాతి, హస్త, ఆరుద్ర, భరణి, పుబ్బలలో స్నిగ్ధంగా ఉంటే జలసమృద్ధి; నీలమణి/అవిసెపువ్వు వర్ణం శుభం."
  }
];

const BS_CH11_13_SKY = [
  {
    ch: "Ch. XI",
    titleEn: "Comets (Ketu)", titleTe: "కేతుచారం (ధూమకేతువులు)",
    descEn: "3 classes: Celestial, Atmospheric, Terrestrial (101 or 1,000 types: 25 Kiraṇas, Brahmadaṇḍa, Śveta Ketu, Dhruvaketu, etc.). Short, slender, glossy, white comets with rain are auspicious; multi-crested Dhūmaketus warn of upheaval. Duration: X days visible → X months effect; X months → X years.",
    descTe: "దివ్య, అంతరిక్ష, భౌమ అని 3 రకాల కేతువులు (101 / 1000 భేదాలు). చిన్నవి, శుభ్రమైనవి వర్షంతో శుభం; ధూమకేతువులు అశుభం."
  },
  {
    ch: "Ch. XII",
    titleEn: "Agastya (Canopus)", titleTe: "అగస్త్యచారం",
    descEn: "Rises when Sun nears 7° before Kanyā (for Ujjain), purifying autumn waters. King offers Arghya southward at dawn for 7 years. Golden/crystal-bright Agastya gives plenty & health.",
    descTe: "కన్యా సంక్రమణానికి ముందు ఉదయించి శరదృతువు జలాలను నిర్మలం చేస్తుంది. స్ఫటిక/సువర్ణ వర్ణం సుభిక్షాన్ని ఇస్తుంది."
  },
  {
    ch: "Ch. XIII",
    titleEn: "Seven Sages (Saptarṣi / Ursa Major)", titleTe: "సప్తర్షిచారం",
    descEn: "Per Vṛddha Garga, Saptarṣis stay 100 years per Nakṣatra (in Maghā under Yudhiṣṭhira, 2526 yrs before Śaka era). Order E→W: Marīci, Vasiṣṭha (+Arundhatī), Aṅgiras, Atri, Pulastya, Pulaha, Kratu. Large bright stars prosper their domains.",
    descTe: "సప్తర్షులు ఒక్కొక్క నక్షత్రంలో 100 ఏళ్లు ఉంటారు. మరీచి, వసిష్ఠ, అంగీరస, అత్రి, పులస్త్య, పులహ, క్రతు — ప్రకాశవంతంగా ఉంటే శుభం."
  }
];

// Chapter XIV: Kurmavibhaga — 9 Regions of India/Earth mapped to 9 Nakshatra Triads
const BS_KURMA_REGIONS = [
  {
    dir: "Center (Madhya)", dirTe: "మధ్య దేశం",
    starsEn: "Kṛttikā, Rohiṇī, Mṛgaśirā", starsTe: "కృత్తిక, రోహిణి, మృగశిర",
    placesEn: "Bhadra, Marwar, Yamunā & Saraswatī basins, Matsya, Mathurā, Dharmāraṇya, Śūrasena, Pāñcāla, Ayodhyā, Kuru, Hastināpura, Pāriyātra Mts.",
    placesTe: "భద్ర, మరుదేశం, యమునా-సరస్వతీ ప్రాంతం, మత్స్య, మథుర, శూరసేన, పాంచాల, అయోధ్య, కురు, హస్తినాపురం."
  },
  {
    dir: "East (Prācī)", dirTe: "తూర్పు (ప్రాచీ)",
    starsEn: "Ārdrā, Punarvasu, Puṣya", starsTe: "ఆరుద్ర, పునర్వసు, పుష్యమి",
    placesEn: "Magadha, Mithilā, Samataṭa, Orissa (Oḍra), Prāgjyotiṣa, Lauhitya, Gauḍa, Pauṇḍra, Utkala, Kāśī, Mekala, Tāmraliptaka, Kosala, Burdwan.",
    placesTe: "మగధ, మిథిల, సమతట, ఒడిశా, ప్రాగ్జ్యోతిష, గౌడ, పౌండ్ర, ఉత్కళ, కాశీ, తామ్రలిప్త, కోసల."
  },
  {
    dir: "South-East (Āgneya)", dirTe: "ఆగ్నేయం",
    starsEn: "Āśleṣā, Maghā, Pūrvaphalgunī", starsTe: "ఆశ్లేష, మఘ, పుబ్బ",
    placesEn: "Kosala, Kaliṅga, Vaṅga, Upavaṅga, Vidarbha, Vatsa, Andhra, Cedi, Vindhyas, Tripurī, Kiṣkindhā, Daśārṇa, Śabara lands.",
    placesTe: "కోసల, కళింగ, వంగ, విదర్భ, ఆంధ్ర, చేది, వింధ్య, త్రిపురి, కిష్కింధ, దశార్ణ."
  },
  {
    dir: "South (Dakṣiṇa)", dirTe: "దక్షిణం",
    starsEn: "Uttaraphalgunī, Hasta, Citrā", starsTe: "ఉత్తర, హస్త, చిత్త",
    placesEn: "Laṅkā, Malaya/Mahendra Mts, Vanavāsī, Koṅkaṇa, Kaveri, Kerala, Karṇāṭaka, Citrakūṭa, Nāsik, Coḷa, Kāñcī, Siṁhala (Ceylon), Tāmraparṇī, Daṇḍaka.",
    placesTe: "లంక, మలయ-మహేంద్ర పర్వతాలు, వనవాసి, కొంకణ, కావేరి, కేరళ, కర్ణాటక, నాసిక్, చోళ, కంచి, సింహళ, తామ్రపర్ణి."
  },
  {
    dir: "South-West (Nairṛta)", dirTe: "నైఋతి",
    starsEn: "Svātī, Viśākhā, Anurādhā", starsTe: "స్వాతి, విశాఖ, అనూరాధ",
    placesEn: "Pallava, Kamboja, Sindhu-Sauvīra, Ānarta, Yavana, Ābhīra, Indus region, Raivataka, Saurāṣṭra, Draviḍa, Great Ocean.",
    placesTe: "పల్లవ, కాంభోజ, సింధు-సౌవీర, ఆనర్త, యవన, ఆభీర, సౌరాష్ట్ర, ద్రావిడ."
  },
  {
    dir: "West (Paścima)", dirTe: "పడమర",
    starsEn: "Jyeṣṭhā, Mūla, Pūrvāṣāḍhā", starsTe: "జ్యేష్ఠ, మూల, పూర్వాషాఢ",
    placesEn: "Maṇimat & Meghavat hills, Aparāntaka, Haihaya, Punjab, Rāmaṭha, Pārata, Western borderlands.",
    placesTe: "మణిమత్, మేఘవత్ పర్వతాలు, అపరాంతక, హైహయ, పంజాబ్, పశ్చిమ ప్రాంతాలు."
  },
  {
    dir: "North-West (Vāyavya)", dirTe: "వాయవ్యం",
    starsEn: "Uttarāṣāḍhā, Śravaṇa, Dhaniṣṭhā", starsTe: "ఉత్తరాషాఢ, శ్రవణం, ధనిష్ఠ",
    placesEn: "Māṇḍavya, Tuṣāra, Madra, Aśmaka, Kulūta, Strīrājya (Kingdom of Women), Veṇumatī river, Śūlika.",
    placesTe: "మాండవ్య, తుషార, మద్ర, అశ్మక, కులూత, స్త్రీరాజ్యం, వేణుమతీ నది."
  },
  {
    dir: "North (Uttara)", dirTe: "ఉత్తరం",
    starsEn: "Śatabhiṣak, Pūrvabhādrā, Uttarabhādrā", starsTe: "శతభిషం, పూర్వాభాద్ర, ఉత్తరాభాద్ర",
    placesEn: "Kailāsa, Himālaya, Meru, Uttara/Dakṣiṇa Kuru, Kaikaya, Trigarta, Taxila (Takṣaśilā), Puṣkalāvata, Mālavā, Hūṇa, Gāndhāra, Yaudheya.",
    placesTe: "కైలాసం, హిమాలయం, మేరువు, కురు, కైకేయ, త్రిగర్త, తక్షశిల, గాంధార, యౌధేయ."
  },
  {
    dir: "North-East (Īśāna)", dirTe: "ఈశాన్యం",
    starsEn: "Revatī, Aśvinī, Bharaṇī", starsTe: "రేవతి, అశ్విని, భరణి",
    placesEn: "Meruka, Kīra, Kaśmīra, Abhisāra, Darada, Taṅgaṇa, Kulūta, Brahmapura, Kirāta, Cīna (China), Kauninda, Khasa.",
    placesTe: "మేరుక, కీర, కాశ్మీరం, అభిసార, దరద, బ్రహ్మపుర, కిరాత, చీనా, ఖస."
  }
];

// Chapters XV–XX Summaries
const BS_CH15_20_MUNDANE = [
  { ch: "Ch. XV", titleEn: "Nakṣatra Domains", titleTe: "నక్షత్ర విభాగం", descEn: "Maps all 27 Nakṣatras to professions, crops, animals & goods, and divides 28 stars (with Abhijit) into 7 varṇa/functional classes (Brahmins, Kṣatriyas, Husbandmen, Merchants, Cruel, Servants, Outcasts).", descTe: "27 నక్షత్రాలకు వృత్తులు, పంటలు, జంతువులను కేటాయించి 7 వర్గాలుగా విభజించారు." },
  { ch: "Ch. XVI", titleEn: "Planetary Domains", titleTe: "గ్రహ భక్తి / అధికారం", descEn: "Assigns countries, rivers, professions, metals & flora to Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu, and Ketu. Strong unhurt planet prospers its domain.", descTe: "సప్తగ్రహాలు & రాహుకేతువులకు దేశాలు, నదులు, వృత్తులు, వస్తువులు కేటాయించబడ్డాయి." },
  { ch: "Ch. XVII", titleEn: "Planetary Wars (Graha Yuddha)", titleTe: "గ్రహ యుద్ధం", descEn: "4 kinds of conflict between non-luminaries: Bheda (occultation), Ullekha (grazing), Aṁśumardana (ray-clash), Apasavya (south passage <1°). Large, glossy, bright planet wins; south/rough/dim loses.", descTe: "భేద, ఉల్లేఖ, అంశుమర్దన, అపసవ్య అనే 4 గ్రహ యుద్ధాలు; పెద్దగా, ప్రకాశవంతంగా ఉన్న గ్రహం జయిస్తుంది." },
  { ch: "Ch. XVIII", titleEn: "Moon Conjunctions", titleTe: "చంద్ర సమాగమం", descEn: "Moon passing north of a star or planet (keeping it on her right) and unhurt is auspicious; passing south is adverse. Moon never engages in 'war'.", descTe: "చంద్రుడు నక్షత్ర/గ్రహాలకు ఉత్తరంగా వెళ్ళడం శుభం; దక్షిణంగా వెళ్ళడం అశుభం." },
  { ch: "Ch. XIX", titleEn: "Lords of the Year", titleTe: "సంవత్సరాధిపతులు", descEn: "Effects of the year/month/day ruled by Sun (heat/war), Moon (rain/milk/joy), Mars (fire/drought), Mercury (arts/trade/justice), Jupiter (sacrifices/crops), Venus (rice/music/victory), Saturn (famine/dryness).", descTe: "రవి నుండి శని వరకు ఒక్కొక్క గ్రహం సంవత్సరాధిపతి అయినప్పుడు కలుగు వాతావరణ-రాజకీయ ఫలితాలు." },
  { ch: "Ch. XX", titleEn: "Planetary Triangles & Clusters", titleTe: "గ్రహ శృంగాటకం", descEn: "7 geometric clusters (Cakra, Dhanus, Śṛṅgāṭaka, Daṇḍa, Pura, Prāsa, Vajra) and 6 Yogas (Saṁvarta, Sammoha, Samāja, Kośa [benefic], Sannipāta, Samāgama).", descTe: "చక్ర, ధనుస్సు, శృంగాటక మొదలైన 7 గ్రహ కూటములు మరియు కోశ యోగాది 6 యోగాలు." }
];

// Chapters XXI–XXXI: Meteorology, Pregnancy of Clouds & Rainfall
const BS_CH23_RAINFALL_DRONAS = [
  { dronas: 4, starsEn: "Śatabhiṣak, Jyeṣṭhā, Svātī", starsTe: "శతభిషం, జ్యేష్ఠ, స్వాతి" },
  { dronas: 10, starsEn: "Kṛttikā", starsTe: "కృత్తిక" },
  { dronas: 12, starsEn: "Aśvinī", starsTe: "అశ్విని" },
  { dronas: 13, starsEn: "Āśleṣā, Ārdrā", starsTe: "ఆశ్లేష, ఆరుద్ర" },
  { dronas: 14, starsEn: "Śravaṇa, Maghā, Anurādhā, Bharaṇī, Mūla", starsTe: "శ్రవణం, మఘ, అనూరాధ, భరణి, మూల" },
  { dronas: 15, starsEn: "Pūrvabhādrā, Puṣya", starsTe: "పూర్వాభాద్ర, పుష్యమి" },
  { dronas: 16, starsEn: "Hasta, Pūrvāṣāḍhā, Mṛgaśirā, Citrā, Revatī, Dhaniṣṭhā", starsTe: "హస్త, పూర్వాషాఢ, మృగశిర, చిత్త, రేవతి, ధనిష్ఠ" },
  { dronas: 20, starsEn: "Punarvasu, Viśākhā, Uttarāṣāḍhā", starsTe: "పునర్వసు, విశాఖ, ఉత్తరాషాఢ" },
  { dronas: 25, starsEn: "Pūrvaphalgunī, Uttarabhādrā, Uttaraphalgunī, Rohiṇī", starsTe: "పుబ్బ, ఉత్తరాభాద్ర, ఉత్తర, రోహిణి" }
];

const BS_CH21_31_WEATHER = [
  { ch: "Ch. XXI", titleEn: "Pregnancy of Clouds (Garbhalakṣaṇa)", titleTe: "మేఘ గర్భలక్షణం", descEn: "Conception observed from Mārgaśīrṣa Śukla 1 when Moon transits Pūrvāṣāḍhā; delivers 195 solar days later at same Nakṣatra (Bright↔Dark, Day↔Night invert). 1 Droṇa = 4 Āḍhakas = 200 Palas.", descTe: "మార్గశిర శుక్ల 1 నుండి మేఘ గర్భధారణ; 195 సౌర దినాల తర్వాత అదే నక్షత్రంలో వర్షం కురుస్తుంది. 1 ద్రోణం = 4 ఆఢకాలు." },
  { ch: "Ch. XXII", titleEn: "Pregnancy of the Air (Dhāraṇa)", titleTe: "వాయు ధారణ", descEn: "4 days from Jyeṣṭha Śukla 8 (Svātī–Jyeṣṭhā): rain on those days causes dry months in Śrāvaṇa–Kārttika respectively; uniform 4 days with lightning & unbroken halos is auspicious.", descTe: "జ్యేష్ఠ శుక్ల 8 నుండి 4 దినాల వాతావరణం శ్రావణ–కార్తీక మాసాల వర్షాన్ని సూచిస్తుంది." },
  { ch: "Ch. XXIII", titleEn: "Quantity of Rainfall (Pravarṣaṇa)", titleTe: "వర్షమానము (ద్రోణ గణన)", descEn: "Measured after Jyeṣṭha Full Moon in a 1-cubit circular gauge (50 Palas = 1 Āḍhaka). Area ≥ 12 Yojanas promises good seasonal rain; 4 to 25 Droṇas by Nakṣatra.", descTe: "జ్యేష్ఠ పూర్ణిమ తర్వాత 1 మూర వ్యాసార్థ పాత్రతో వర్షం కొలుస్తారు; నక్షత్రాన్ని బట్టి 4–25 ద్రోణాల వర్షం." },
  { ch: "Ch. XXIV–XXVII", titleEn: "Rohiṇī, Svātī, Āṣāḍhā & Wind Circle", titleTe: "రోహిణీ, స్వాతి, ఆషాఢ యోగాలు & వాయు చక్రం", descEn: "Āṣāḍha Rohiṇī pot/seed ritual, Svātī 3-watch rain test, Āṣāḍha Tulā (12-inch balance) weighing ritual, and sunset wind directions (N/NE/E/W = rich rain & crops; SE/S/SW = dry/fire). Rohiṇī prevails if they conflict.", descTe: "ఆషాఢ మాసంలో రోహిణి, స్వాతి, ఉత్తరాషాఢ యోగాలు, తులా విధి మరియు సూర్యాస్తమయ వాయు దిక్కుల ద్వారా వర్షాంచనా." },
  { ch: "Ch. XXVIII", titleEn: "Signs of Immediate Rain", titleTe: "సద్యోవృష్టి లక్షణాలు", descEn: "Praśna (Moon/Venus in watery Lagna/Kendra), biological signs (ants moving eggs, frogs croaking, mating snakes, cows gazing at Sun, cats scratching, salt sweating), and Sun in Ārdrā.", descTe: "చీమలు గుడ్లు మోయడం, కప్పలు అరవడం, ఉప్పు తడిసిపోవడం, ఆరుద్రలో రవి ప్రవేశం తక్షణ వర్ష సూచనలు." },
  { ch: "Ch. XXIX–XXXI", titleEn: "Flowers/Creepers, Twilight & Horizon Glow", titleTe: "కుసుమలత, సంధ్యా & దిగ్దాహం", descEn: "Trees/flowers forecasting crops (Śāla→rice, Banyan→barley, Champaka→gold, Arjuna→rain); dawn/twilight ray & cloud omens; 8-direction horizon glow (Digdāha) warnings.", descTe: "చెట్ల పూత-కాతల ద్వారా పంటల అంచనా; సంధ్యా కిరణాలు మరియు అష్టదిక్కుల దిగ్దాహ ఫలితాలు." }
];
