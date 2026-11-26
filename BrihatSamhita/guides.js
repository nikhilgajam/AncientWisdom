// Beginner-Friendly Explanations, Why Important, How It Helps & Book Examples for Every Section
// Strictly grounded in Varahamihira's Brihat Samhita (107 Adhyayas)
(function () {
  "use strict";

  function bi(en, te) {
    return `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;
  }

  const BS_SECTION_GUIDES = {
    "sec-intro": {
      whatEn: "Varāhamihira opens by organizing all of Jyotiṣa into 3 branches (Gaṇita/Astronomy, Horā/Natal Astrology, and Saṁhitā/Nature & Omens) and explaining the real astronomical causes of eclipses and planetary movements.",
      whatTe: "వరాహమిహిరుడు జ్యోతిష శాస్త్రాన్ని 3 విభాగాలుగా (గణితం, హోరా, సంహిత) విభజించి, గ్రహణాలకు అసలు ఖగోళ శాస్త్రీయ కారణాన్ని మరియు గ్రహ సంచారాలను ఇక్కడ వివరించారు.",
      whyEn: "Helps us tell true astronomy from superstition (Ch. V proves eclipses are Earth's shadow & Moon's parallax, not a demon) and shows what qualities make a trustworthy astrologer (Ch. II).",
      whyTe: "గ్రహణాలపై మూఢనమ్మకాలను తొలగించి శాస్త్రీయ సత్యాన్ని తెలుసుకోవడానికి (అధ్యా. 5), అలాగే నిజమైన జ్యోతిష్యుని అర్హతలను గుర్తించడానికి (అధ్యా. 2) ఇది ఉపయోగపడుతుంది.",
      howEn: "Read the 3 Skandhas first, then browse each planet's card (Ch. III–X) and Comets/Agastya/Saptarṣis (Ch. XI–XIII) to see how bright vs. dim sky appearances affect seasons and society.",
      howTe: "ముందుగా 3 స్కంధాలు చదివి, ఆపై సూర్యుని నుండి శని వరకు గ్రహచారాలు మరియు కేతు-అగస్త్య-సప్తర్షి కార్డులను చూడండి.",
      exEn: "Ch. V: Varāhamihira proves a lunar eclipse never starts on the Moon's west limb because the Moon moves east into Earth's shadow; Ch. VIII gives the 60-year Saṁvatsara formula.",
      exTe: "ఉదాహరణ: అధ్యా. 5లో చంద్రగ్రహణం ఎప్పుడూ పడమర వైపు నుండి ప్రారంభం కాదని, భూమి నీడ వల్లే జరుగుతుందని నిరూపించారు."
    },
    "sec-kurma": {
      whatEn: "Kūrmavibhāga (Ch. XIV) divides India and surrounding lands into 9 tortoise-shaped regions (Center + 8 directions), pairing each region with a group of 3 Nakṣatras.",
      whatTe: "కూర్మవిభాగం (అధ్యా. 14) భూమిని/భారతదేశాన్ని 9 దిక్కులుగా (మధ్యం + 8 దిక్కులు) విభజించి, ప్రతి దిక్కుకు 3 నక్షత్రాలను కేటాయించింది.",
      whyEn: "Shows how sky events (eclipses, comets, planetary wars in Ch. XVII) or Year Lords (Ch. XIX) affect specific geographic regions, crops, rivers, and trades.",
      whyTe: "ఆకాశంలో జరిగే గ్రహణాలు, గ్రహ యుద్ధాలు (అధ్యా. 17) లేదా సంవత్సరాధిపతుల (అధ్యా. 19) ప్రభావం ఏ ప్రాంతాలు, పంటలు, వృత్తులపై పడుతుందో తెలుసుకోవచ్చు.",
      howEn: "Click any of the 9 direction buttons on the 3×3 compass grid to see its 3 Nakṣatras and ancient regions, then read Ch. XV–XX cards below.",
      howTe: "3×3 పటంలో ఏదైనా దిక్కును క్లిక్ చేసి ఆ నక్షత్రాలు మరియు ప్రాంతాలను చూడండి.",
      exEn: "Ch. XIV: South covers Kāverī, Kerala, Karṇāṭaka, Coḷa, Kāñcī & Laṅkā under Uttaraphalgunī, Hasta, Citrā; Ch. XIX: When Jupiter rules the year, sacrifices, crops & rain-clouds prosper.",
      exTe: "ఉదాహరణ: దక్షిణ దిక్కులో (ఉత్తర, హస్త, చిత్త) కావేరి, కేరళ, కర్ణాటక, చోళ, కంచి, లంక వస్తాయి."
    },
    "sec-weather": {
      whatEn: "Varāhamihira's meteorology (Ch. XXI–XXXI): predicts monsoon timing from winter 'cloud pregnancy' (Garbhalakṣaṇa), measures rainfall in Droṇas, and lists biological signs of immediate rain.",
      whatTe: "వర్ష విజ్ఞానం (అధ్యా. 21–31): శీతాకాలంలో మేఘ గర్భధారణ ద్వారా 195 రోజుల తర్వాత వచ్చే వర్షాన్ని, ద్రోణ కొలతలను మరియు తక్షణ వర్ష సూచనలను వివరిస్తుంది.",
      whyEn: "Gives farmers, planners, and water managers advance warning of good rain vs. drought so sowing and water storage can be planned ahead.",
      whyTe: "రైతులు మరియు నీటి నిర్వాహకులు వర్షాభావం లేదా సమృద్ధిని ముందే అంచనా వేసి పంటలు, జలాశయాలను సిద్ధం చేసుకోవడానికి సహాయపడుతుంది.",
      howEn: "Pick a winter Cloud Conception date to compute the +195-day delivery date (Ch. XXI), and select a Nakṣatra to view its expected seasonal Droṇas (Ch. XXIII).",
      howTe: "మేఘ గర్భధారణ తేదీని ఎంచుకుని +195 రోజుల వర్ష తేదీని, అలాగే నక్షత్రాన్ని బట్టి ద్రోణాల వర్షాన్ని చూడండి.",
      exEn: "Ch. XXI & XXIII: Clouds conceived on Mārgaśīrṣa Śukla 1 deliver 195 solar days later; Rohiṇī promises 25 Droṇas (100 Āḍhakas) of rain; Ch. XXVIII: ants moving eggs uphill signal immediate rain.",
      exTe: "ఉదాహరణ: రోహిణి నక్షత్రం 25 ద్రోణాల వర్షాన్ని సూచిస్తుంది; చీమలు గుడ్లను పైకి మోయడం తక్షణ వర్ష సూచన (అధ్యా. 28)."
    },
    "sec-portents": {
      whatEn: "Covers unusual natural events — 4 Earthquake Circles (Ch. XXXII), Meteors, Haloes, Rainbows, Crop Yogas (Ch. XL), Commodity Prices (Ch. XLII), and royal/expiratory rites.",
      whatTe: "ప్రకృతి మార్పులు — 4 భూకంప మండలాలు (అధ్యా. 32), ఉల్కలు, పరివేషాలు, పంటల అంచనా (అధ్యా. 40), ధరల మార్పులు (అధ్యా. 42) మొదలైనవి.",
      whyEn: "Helps society read early warning signs (like 1-week advance earthquake symptoms), forecast summer/autumn harvests, and understand ancient trade & seasonal cycles.",
      whyTe: "భూకంపాల ముందస్తు సంకేతాలు, వేసవి-శరత్కాల పంటల దిగుబడి మరియు వ్యాపార ధరల హెచ్చుతగ్గులను అర్థం చేసుకోవడానికి ఉపయోగపడుతుంది.",
      howEn: "Compare the 4 Earthquake Circles (Wind, Fire, Indra, Varuṇa) by their stars, distance range, and timing, then scan the cards for Crops, Prices, and Royal Rites.",
      howTe: "4 భూకంప మండలాల నక్షత్రాలు, వ్యాప్తి, కాలాన్ని పోల్చి, క్రింది పంటల & ధరల కార్డులను చదవండి.",
      exEn: "Ch. XXXII: Indra Circle quakes (Rohiṇī, Śravaṇa, Dhaniṣṭhā) show thunderclouds 1 week prior, cover 160 Yojanas, and bring desirable rain; Ch. XLII: honey/oils stored in Karkaṭaka double in 2 months.",
      exTe: "ఉదాహరణ: ఇంద్ర మండల భూకంపం 160 యోజనాల వ్యాప్తి కలిగి ఉండి మంచి వర్షాన్ని ఇస్తుంది; కర్కాటక మాసంలో తేనె-నూనెలు 2 నెలల్లో రెట్టింపు లాభాన్నిస్తాయి."
    },
    "sec-vastu": {
      whatEn: "Vāstuvidyā (Ch. LIII) is Varāhamihira's complete architectural manual: the 81-Pada (9×9) Vāstu Puruṣa Maṇḍala with 45 deities, house sizes by rank/caste, room placements, and site/soil tests.",
      whatTe: "వాస్తువిద్య (అధ్యా. 53) గృహ నిర్మాణ శాస్త్రం: 45 దేవతలు ఉండే 81 పద (9×9) వాస్తు మండలం, గృహ కొలతలు, గదుల దిక్కులు మరియు భూమి పరీక్షలు.",
      whyEn: "Ensures a home has balanced proportions, proper sunlight/ventilation, safe courtyard openings, and functional room placement (worship, kitchen, storage) for family harmony.",
      whyTe: "ఇంటికి సరైన కొలతలు, గాలి-వెలుతురు, శుభ ద్వారాలు మరియు గదుల (పూజ, వంట, నిల్వ) అమరికతో కుటుంబ ఆరోగ్యం-శాంతి కలగడానికి ఉపయోగపడుతుంది.",
      howEn: "Click any square on the 9×9 grid (North = Top) to see its deity and zone, then select a Rank/Varṇa on the right to compute allowed house widths & lengths.",
      howTe: "9×9 గడిలో ఏదైనా పదాన్ని క్లిక్ చేసి ఆ దేవతను చూడండి, అలాగే కుడివైపు హోదా/వర్ణాన్ని ఎంచుకుని ఇంటి కొలతలను చూడండి.",
      exEn: "Ch. LIII, Sl. 118: Worship in NE, Kitchen in SE, Store-room in SW, Granary in NW. Nandyāvarta (no West door) and Vardhamāna (no South door) suit everyone (Sl. 32–33).",
      exTe: "ఉదాహరణ: ఈశాన్యంలో పూజ, ఆగ్నేయంలో వంట, నైఋతిలో నిల్వ, వాయవ్యంలో ధాన్యాగారం ఉండాలి (శ్లో. 118)."
    },
    "sec-water-arts": {
      whatEn: "Practical civil & life sciences: Dakārgala (finding underground water veins & safe well directions, Ch. LIV), Vṛkṣāyurveda (tree care/grafting, Ch. LV), 20 Temple types (Ch. LVI), Vajralepa cement (Ch. LVII), Idol proportions (Ch. LVIII–LX), and Animal signs (Ch. LXI–LXVII).",
      whatTe: "దకార్గలం (భూగర్భ జల అన్వేషణ & బావి దిక్కులు - అధ్యా. 54), వృక్షాయుర్వేదం (అధ్యా. 55), 20 దేవాలయ రకాలు (56), వజ్రలేపం (57), ప్రతిమాలక్షణం (58) & జంతు లక్షణాలు.",
      whyEn: "Shows how ancient engineers located groundwater using trees, termite hills, and soil rocks without modern drills, built lasting temples, and cared for orchards and livestock.",
      whyTe: "ఆధునిక యంత్రాలు లేని కాలంలోనే చెట్లు, పుట్టలు, రాళ్ల ద్వారా భూగర్భ జలాన్ని కనుగొనడం, చెట్ల పెంపకం మరియు ఆలయ నిర్మాణ పద్ధతులను తెలుసుకోవచ్చు.",
      howEn: "Check the 8-direction Well-Placement Compass on the left (green = beneficial, red = caution), and read the tree, temple, glue, idol, and animal summaries on the right.",
      howTe: "ఎడమవైపు బావి తవ్వే 8 దిక్కుల ఫలితాలను చూసి, కుడివైపు వృక్ష, ఆలయ, విగ్రహ వివరాలను చదవండి.",
      exEn: "Ch. LIV, Sl. 97–98: Wells in NE, N, E, S, W are beneficial; SE warns of fire, SW harms children, NW threatens wife. Ch. LVII: Maya's Vajrasaṅghāta uses 8 lead + 2 bell-metal + 1 iron rust.",
      exTe: "ఉదాహరణ: ఈశాన్యం, ఉత్తరం, తూర్పులలో బావి శుభం; ఆగ్నేయం, నైఋతి, వాయవ్యాలలో దోషం (శ్లో. 97–98)."
    },
    "sec-human-gems": {
      whatEn: "Covers human physiognomy & the 5 Great Men (Ch. LXVIII–LXX), clothing/royal insignia (LXXI–LXXIII), respect & affection (LXXIV–LXXV), Perfume combinatorics (LXXVII), and Gem/Pearl/Ruby valuation (LXXX–LXXXV).",
      whatTe: "పురుష-కన్యా లక్షణాలు & పంచమహాపురుషులు (68–70), స్త్రీ గౌరవం & సౌభాగ్యకరణం (74–75), గంధయుక్తి సుగంధ గణన (77) మరియు రత్న-ముత్య-మాణిక్య పరీక్షలు (80–85).",
      whyEn: "Teaches character observation, Varāhamihira's strong defense of women's dignity (Ch. LXXIV–LXXV: kindness wins love, not potions), ancient Indian combinatorics (Ch. LXXVII), and how genuine gems & pearls are tested and priced.",
      whyTe: "వ్యక్తిత్వ పరిశీలన, స్త్రీల గౌరవం, సుగంధ ద్రవ్యాల గణిత కలయిక (1,74,720 రకాలు) మరియు నిజమైన వజ్ర-ముత్య-రత్నాల పరీక్షలను నేర్చుకోవచ్చు.",
      howEn: "Inspect the 5 Mahāpuruṣa cards at the top, test different ingredient counts in the Gandhārṇava Perfume Calculator, and review the human & gemology cards.",
      howTe: "పైన పంచమహాపురుష కార్డులను చూసి, క్రింద గంధార్ణవ గణన యంత్రంలో సంఖ్యలను మార్చి పరీక్షించండి.",
      exEn: "Ch. LXIX: Jupiter in a Kendra/own/exalted sign gives Haṁsa (96 digits, 90 yrs); Ch. LXXVII: choosing 4 of 16 scents in 1:2:3:4 parts = C(16,4)×96 = 174,720 perfumes; Ch. LXXX: 20-grain diamond = 200,000 Kārṣāpaṇas.",
      exTe: "ఉదాహరణ: అధ్యా. 77లో 16 సుగంధ ద్రవ్యాలలో 4 ఎంచుకుని 1:2:3:4 పాళ్లలో కలిపితే 1,74,720 సుగంధాలు వస్తాయి."
    },
    "sec-sakuna": {
      whatEn: "Śākuna (Ch. LXXXVI–XCVI) is Varāhamihira's complete system of travel and daily omens — combining time of day (8 three-hour watches), direction, and bird/animal behaviours.",
      whatTe: "శాకున శాస్త్రం (అధ్యా. 86–96): ప్రయాణ మరియు దైనందిన శకునాలను జాము (3 గంటల సమయం), దిక్కు మరియు పక్షి-జంతు ప్రవర్తనల ద్వారా అంచనా వేస్తుంది.",
      whyEn: "According to Ch. LXXXVI, omens reflect past karma ripening right now — helping a traveller decide when to proceed confidently, pause, or stay calm (Ch. XCV even prescribes simple Prāṇāyāma breathwork for peace).",
      whyTe: "ప్రయాణం లేదా ముఖ్య పని ప్రారంభించేటప్పుడు ఏ దిక్కు శాంతంగా/శుభంగా ఉందో తెలుసుకోవడానికి (ప్రతికూలత ఉన్నప్పుడు ప్రాణాయామ శాంతితో సహ) ఉపయోగపడుతుంది.",
      howEn: "Select the current 3-hour Watch (Day 1–4 or Night 1–4) and the Direction of the omen to see whether it is Śānta (Tranquil), Aṅgāra (Spent), Dīpta (Burning), or Dhūminī (Impending).",
      howTe: "ప్రస్తుత జాము (పగలు/రాత్రి) మరియు శకున దిక్కును ఎంచుకుని అది శాంతమా, దీప్తమా అని చూడండి.",
      exEn: "Ch. LXXXVI, Sl. 12–13: In Day Watch 1 (6–9 AM), East is Dīpta (same-day), NE is Aṅgāra (spent), SE is Dhūminī (upcoming), and the 5th quarter (West) is Śānta (very auspicious).",
      exTe: "ఉదాహరణ: పగలు 1వ జాములో (6–9 AM) తూర్పు దీప్తం కాగా, పడమర (5వ దిక్కు) అత్యంత శాంత-శుభ దిక్కు."
    },
    "sec-gocara": {
      whatEn: "Gocara (Ch. CIV) checks how planets currently moving in the sky affect you based on your Birth Moon Sign (Janma Rāśi), alongside Muhūrta rules for Nakṣatras, Tithis, Karaṇas, and Marriage (Ch. XCVII–CV).",
      whatTe: "గోచారం (అధ్యా. 104): ప్రస్తుతం ఆకాశంలో తిరుగుతున్న గ్రహాలు మీ జన్మ రాశి నుండి ఎన్నో స్థానంలో ఉన్నాయో చూసి శుభ-అశుభ ఫలితాలను చెబుతుంది; అలాగే నక్షత్ర-తిథి-కరణ ముహూర్తాలు.",
      whyEn: "While your birth chart shows lifelong promise, Gocara shows the current weather of planetary transits — helping you plan auspicious timings, patience, and remedies.",
      whyTe: "జన్మకుండలి జీవితకాల ఫలితాన్ని చెబితే, గోచారం ప్రస్తుత గ్రహ సంచార వాతావరణాన్ని చూపి సరైన సమయాన్ని ఎంచుకోవడానికి సహాయపడుతుంది.",
      howEn: "Choose your Birth Moon Sign (Janma Rāśi), a Transit Planet, and its Current Sign to immediately check if that house position is benefic per Ch. CIV, Sl. 4.",
      howTe: "మీ జన్మ రాశి, గ్రహం మరియు ప్రస్తుత సంచార రాశిని ఎంచుకుని అది శుభ గోచారమా కాదా అని చూడండి.",
      exEn: "Ch. CIV, Sl. 4: Jupiter is benefic in houses 2, 5, 7, 9, 11 from the Moon, and ALL 7 planets are benefic in the 11th! Ch. CIII, Sl. 13: Godhūlikā (evening cow-dust time) overrides marriage Muhūrta flaws.",
      exTe: "ఉదాహరణ: జన్మ రాశి నుండి గురువు 2, 5, 7, 9, 11లో శుభుడు; 11వ స్థానంలో అన్ని గ్రహాలూ శుభఫలితాలు ఇస్తాయి."
    },
    "sec-index107": {
      whatEn: "The complete 107-Adhyāya index of Varāhamihira's Bṛhat Saṁhitā (Ch. CVI–CVII), listing every chapter number, bilingual title, and core topic.",
      whatTe: "వరాహమిహిరుని బృహత్సంహితలోని మొత్తం 107 అధ్యాయాల పూర్తి అనుక్రమణిక (అధ్యా. 106–107).",
      whyEn: "Lets you verify that every chapter of the book is accounted for and quickly find which Adhyāya covers any specific topic.",
      whyTe: "గ్రంథంలోని ప్రతి అధ్యాయం ఎక్కడుందో తక్షణమే వెతికి తెలుసుకోవడానికి ఉపయోగపడుతుంది.",
      howEn: "Type any keyword (such as Vastu, Rain, Gem, Eclipse, Gocara, Dog, Crow, or a chapter number) in the search box to filter the table.",
      howTe: "సెర్చ్ బాక్స్‌లో ఏదైనా పదం లేదా అధ్యాయ సంఖ్యను టైప్ చేసి వెతకండి.",
      exEn: "Typing 'Vastu' shows Ch. 53; typing 'Rain' filters Ch. 21–28; typing '104' shows Planetary Transits (Gocara).",
      exTe: "ఉదాహరణ: 'Vastu' అని టైప్ చేస్తే అధ్యా. 53, 'Rain' అని టైప్ చేస్తే అధ్యా. 21–28 కనిపిస్తాయి."
    },
    "sec-quiz": {
      whatEn: "A 12-question self-check covering the key principles, numbers, and rules across all parts of Bṛhat Saṁhitā.",
      whatTe: "బృహత్సంహితలోని ముఖ్య సూత్రాలు, సంఖ్యలు మరియు నియమాలపై 12 ప్రశ్నల జ్ఞాన పరీక్ష.",
      whyEn: "Reinforces what you learned in each section and lets you verify your grasp of Varāhamihira's treatise.",
      whyTe: "మీరు చదివిన విషయాలు ఎంతవరకు గుర్తున్నాయో సులభంగా పరీక్షించుకోవచ్చు.",
      howEn: "Click any answer choice for each question; green highlights the correct book answer and updates your score out of 12.",
      howTe: "ప్రతి ప్రశ్నకు సమాధానం క్లిక్ చేయండి; సరైన సమాధానం ఆకుపచ్చ రంగులో కనిపిస్తుంది.",
      exEn: "Example: Q3 tests the 195-day cloud-delivery rule (Ch. XXI), and Q8 tests the 174,720 Gandhārṇava perfume formula (Ch. LXXVII).",
      exTe: "ఉదాహరణ: 3వ ప్రశ్న మేఘ గర్భ 195 రోజుల నియమాన్ని, 8వ ప్రశ్న 1,74,720 సుగంధ గణనను పరీక్షిస్తాయి."
    }
  };

  function injectGuides() {
    Object.entries(BS_SECTION_GUIDES).forEach(([secId, g]) => {
      const sec = document.getElementById(secId);
      if (!sec) return;
      const old = sec.querySelector(":scope > .guide-details");
      if (old) old.remove();
      const details = document.createElement("details");
      details.className = "guide-details";
      details.open = true;
      details.innerHTML = `
        <summary>${bi("Beginner Guide: Meaning, Why Important, How It Helps &amp; Book Example (Click to Collapse)", "సులభ వివరణ: అర్థం, ప్రాముఖ్యత, ఉపయోగం &amp; గ్రంథ ఉదాహరణ")}</summary>
        <div class="guide-grid">
          <div class="guide-cell"><div class="guide-cell-title">${bi("1. What It Means", "1. దీని అర్థం")}</div><div>${bi(g.whatEn, g.whatTe)}</div></div>
          <div class="guide-cell"><div class="guide-cell-title">${bi("2. Why Important &amp; How It Helps Us", "2. ఎందుకు ముఖ్యం &amp; ఎలా ఉపయోగపడుతుంది")}</div><div>${bi(g.whyEn, g.whyTe)}</div></div>
          <div class="guide-cell"><div class="guide-cell-title">${bi("3. How to Use This Section", "3. ఎలా వాడాలి")}</div><div>${bi(g.howEn, g.howTe)}</div></div>
          <div class="guide-cell"><div class="guide-cell-title">${bi("4. Example from the Book", "4. గ్రంథం నుండి ఉదాహరణ")}</div><div>${bi(g.exEn, g.exTe)}</div></div>
        </div>`;
      const header = sec.querySelector(":scope > .section-header");
      if (header && header.nextSibling) sec.insertBefore(details, header.nextSibling);
      else sec.prepend(details);
    });
  }

  document.addEventListener("DOMContentLoaded", injectGuides);
})();
