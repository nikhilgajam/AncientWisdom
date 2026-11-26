/**
 * Bṛhat Jātaka — Beginner-Friendly Guides for Every Section (with Examples & Women/Girls Rules)
 * Bilingual (English + తెలుగు)
 */

(function () {
  "use strict";

  const bi = (en, te) =>
    `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;

  const SECTION_GUIDES = {
    "sec-personal": {
      titleEn: "Beginner's Guide: How to Generate & Read Your Personal Horoscope",
      titleTe: "మార్గదర్శి: మీ జన్మకుండలిని ఎలా తయారు చేయాలి & చదవాలి",
      whatEn: "Computes your exact sidereal (Lahiri Ayanāṁśa) birth chart from your birth date, time, and city, then reads every rule in Varāhamihira's Bṛhat Jātaka that applies to your chart.",
      whatTe: "మీ పుట్టిన తేదీ, సమయం, ఊరు ఆధారంగా జన్మకుండలిని గణించి, బృహజ్జాతకంలోని ఫలితాలను చూపిస్తుంది.",
      fillEn: "1) Pick Date of Birth, 2) Enter Time of Birth (24h, e.g. 14:30 for 2:30 PM), 3) Choose Birth City (auto-fills Lat/Lon/Timezone), 4) Select Male/Female, 5) Click 'Generate'.",
      fillTe: "1) పుట్టిన తేదీ, 2) సమయం, 3) నగరం (అక్షాంశ-రేఖాంశాలు వాటంతట అవే వస్తాయి), 4) లింగం ఎంచుకుని 'నా జాతక ఫలితాలు చూపించు' నొక్కండి.",
      readEn: "First check the South-Indian box chart (Lg = Ascendant/Lagna, Mo = Moon). Below it, read your Rising Sign, Janma Nakṣatra, Planets in Signs & Houses, Detected Yogas, Career (Karmajīva), and Aṣṭakavarga bindus.",
      readTe: "మొదట దక్షిణ భారత చక్రంలో Lg (లగ్నం), Mo (చంద్రుడు) ఎక్కడ ఉన్నాయో చూడండి. ఆపై క్రింద ఉన్న నక్షత్ర, రాశి, భావ, యోగ, వృత్తి ఫలితాలను చదవండి.",
      exEn: "Example: 1995-05-15, 08:30 AM, Hyderabad → Mithuna (Gemini) Lagna, Vṛścika (Scorpio) Moon in Anurādhā Nakṣatra, with Sunaphā/Anaphā/Dvigrha yogas automatically listed.",
      exTe: "ఉదాహరణ: 1995-05-15, ఉదయం 08:30, హైదరాబాద్ → మిథున లగ్నం, వృశ్చిక రాశి (అనూరాధ నక్షత్రం) ఫలితాలు వస్తాయి.",
      femEn: "For Girls/Women (Ch. XXIV-1): Select 'Female' to unlock the full Strījātaka reading—applying Ch. I–XXIII rules suitable for women directly to her, and husband-related traits to her spouse (7th = husband/welfare, 8th = husband's longevity, 2nd = Sumangalī, plus Triṁśāṁśa & Vedānta scholar yogas).",
      femTe: "స్త్రీల జాతకం కొరకు (అధ్యా. 24-1): 'Female / స్త్రీ' ఎంచుకుంటే స్త్రీలకు వర్తించే ఫలితాలు, 7వ భావం ద్వారా భర్త స్వభావం, 8/2 భావ ఫలాలు, త్రింశాంశ మరియు వేదాంత విదుషి యోగాలు ప్రత్యేకంగా కనిపిస్తాయి."
    },
    "sec-ch1": {
      titleEn: "Guide: 12 Zodiac Signs & Ṣaḍvarga (6-Fold Divisions)",
      titleTe: "మార్గదర్శి: ద్వాదశ రాశులు & షడ్వర్గ విభాగాలు",
      whatEn: "Explains the 12 zodiac signs (Meṣa–Mīna), which body part of the Cosmic Person (Kālapuruṣa) each rules, and how each 30° sign is subdivided into 6 charts (Ṣaḍvarga).",
      whatTe: "12 రాశుల స్వభావాలు, కాలపురుష శరీర భాగాలు మరియు ఒక్కో రాశిని 6 సూక్ష్మ భాగాలుగా (షడ్వర్గ) ఎలా విభజిస్తారో ఇక్కడ ఉంటుంది.",
      fillEn: "Click any wedge on the circular Zodiac Wheel to inspect that sign. Below it, select a Rāśi and enter any degree (0°–29.99°) in the Ṣaḍvarga Calculator.",
      fillTe: "చక్రంలో ఏదైనా రాశిపై క్లిక్ చేయండి. షడ్వర్గ గణనలో రాశిని మరియు డిగ్రీని (0–29.99) నమోదు చేయండి.",
      readEn: "Each card shows the ruler of that degree in Horā (wealth), Drekkaṇa (siblings/form), Navāṁśa (marriage/strength), Dvādaśāṁśa (parents), and Triṁśāṁśa (evils/character). 'Vargottama' means extra strength!",
      readTe: "హోరా, ద్రేక్కాణం, నవాంశ, ద్వాదశాంశ, త్రింశాంశ అధిపతులు కనిపిస్తారు. 'వర్గోత్తమ' అని వస్తే ఆ గ్రహానికి విశేష బలం ఉన్నట్లు అర్థం.",
      exEn: "Example: Meṣa (Aries) at 10° → Sun's Paramochcha (deepest exaltation), Kṣetra = Mars, Horā = Sun, Drekkaṇa #2 = Sun (Leo), Navāṁśa #4 = Moon (Cancer), Dvādaśāṁśa #5 = Sun (Leo).",
      exTe: "ఉదాహరణ: మేషం 10° → రవి పరమోచ్ఛ స్థానం, క్షేత్రాధిపతి కుజుడు, హోరాధిపతి రవి, నవాంశాధిపతి చంద్రుడు.",
      femEn: "For Girls/Women (Ch. I & XXIV-2): The 6 Even Signs (Taurus, Cancer, Virgo, Scorpio, Capricorn, Pisces) are Female/Saumya signs; Virgo is symbolized by a woman in a boat. In a female chart, Lagna & Moon in even signs give feminine grace and virtue, and Triṁśāṁśa (6th varga) is the primary indicator of female character (Ch. XXIV-3–6).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 1 & 24-2): వృషభ, కర్కాటక, కన్య, వృశ్చిక, మకర, మీన రాశులు 'స్త్రీ/సౌమ్య' రాశులు. స్త్రీ జాతకంలో లగ్న-చంద్రులు సమరాశులలో ఉంటే స్త్రీసహజ సౌశీల్యం, త్రింశాంశ ద్వారా గుణగణాలు తెలుస్తాయి."
    },
    "sec-ch2": {
      titleEn: "Guide: Planets, Directions & 5-Fold Friendships",
      titleTe: "మార్గదర్శి: గ్రహ స్వభావాలు, దిక్కులు & పంచవిధ మైత్రి",
      whatEn: "Describes the 7 planets (Sun–Saturn): their royal roles, elements, castes, metals, directional strengths (Digbala), and how planets become Friends or Enemies.",
      whatTe: "సూర్యాది సప్తగ్రహాల రూపురేఖలు, లోహాలు, దిగ్బలం మరియు గ్రహాల మధ్య ఉండే నైసర్గిక-తాత్కాలిక మైత్రిని తెలుపుతుంది.",
      fillEn: "Click any planet tab at the top to read its profile. In the Friendship Calculator, pick Planet A, Planet B, and how many houses apart B is from A (1–12).",
      fillTe: "పైన ఉన్న గ్రహాల ట్యాబ్‌లపై క్లిక్ చేయండి. మైత్రి గణనలో గ్రహం A, గ్రహం B మరియు A నుండి B ఉన్న స్థానాన్ని (1–12) ఎంచుకోండి.",
      readEn: "Natural + Temporal friendship combine into 5 levels: Great Friend (Adhimitra), Friend, Neutral, Enemy, Deadly Foe (Adhiśatru). It also shows the exact Aspect strength (1/4, 1/2, 3/4, or Full).",
      readTe: "నైసర్గిక + తాత్కాలిక మైత్రులు కలిసి అధిమిత్ర, మిత్ర, సమ, శత్రు, అతిశత్రు స్థితులను, అలాగే దృష్టి బలాన్ని చూపుతాయి.",
      exEn: "Example: Sun (A) and Jupiter (B) placed 5 houses apart → Natural Friend + Temporal Enemy (5th house) = Neutral (Sama), with 1/2 aspect (Jupiter has special full 5th aspect).",
      exTe: "ఉదాహరణ: రవి నుండి 5వ స్థానంలో గురువు → నైసర్గిక మిత్రుడు + తాత్కాలిక శత్రువు = సమ (Neutral).",
      femEn: "For Girls/Women (Ch. II-1,6): Moon and Venus are classified as Female planets (Moon = Queen/Mother, Venus = Love/Beauty). Their strength and aspects in a woman's chart strongly govern her temperament, comfort, and marital harmony.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 2-1,6): చంద్రుడు మరియు శుక్రుడు 'స్త్రీ గ్రహాలు' (చంద్రుడు = రాణి/తల్లి, శుక్రుడు = ప్రేమ/సౌందర్యం). స్త్రీ జాతకంలో వీటి బలం చాలా ముఖ్యం."
    },
    "sec-ch3-5": {
      titleEn: "Guide: Viyoni Births, Conception (Niṣeka) & Birth Chamber",
      titleTe: "మార్గదర్శి: వియోని జన్మ, గర్భాధానం & సూతికాగృహ నియమాలు",
      whatEn: "Covers non-human births/trees (Ch. III), conception & the 10 planetary rulers of pregnancy months (Ch. IV), and delivery-room clues like lamp oil, couch legs, and birthmarks/moles (Ch. V).",
      whatTe: "జంతు-వృక్ష జన్మలు (అధ్యా. 3), గర్భధారణ 10 నెలల అధిపతులు (అధ్యా. 4), ప్రసవ గది దీపం, మంచం మరియు పుట్టుమచ్చల నియమాలు (అధ్యా. 5).",
      fillEn: "No inputs needed—switch between the 3 chapter tabs (Ch. III, Ch. IV, Ch. V) to read each visual diagram and table.",
      fillTe: "ఎలాంటి వివరాలు నింపనవసరం లేదు—పైన ఉన్న 3 ట్యాబ్‌లను క్లిక్ చేసి ఆయా అధ్యాయాల వివరాలను చూడండి.",
      readEn: "In Ch. V's couch diagram, houses 3, 12, 6, 9 represent the 4 legs of the delivery cot and houses 1–12 map to the mother's body position.",
      readTe: "అధ్యా. 5 చిత్రంలో 3, 12, 6, 9 స్థానాలు మంచము కోళ్ళను, 1–12 స్థానాలు తల్లి శరీర భాగాలను సూచిస్తాయి.",
      exEn: "Example: In Month 3 of pregnancy, Jupiter rules limb formation; in Month 8, the Ādhāna Lagna Lord rules fetal movement and hunger.",
      exTe: "ఉదాహరణ: గర్భధారణ 3వ మాసంలో గురువు అవయవ నిర్మాణాన్ని, 8వ మాసంలో ఆధాన లగ్నాధిపతి కదలికలను శాసిస్తారు.",
      femEn: "For Girls/Women (Ch. IV & V): Ch. IV directly addresses the woman's menses (Mars+Moon, Sl. 1), conception, maternal health/safety during pregnancy (Sl. 6–10), and female-child yogas (even signs/Navāṁśas of Lagna, Sun, Jupiter, Moon, Sl. 11). Ch. V maps the mother's body on the delivery bed (Sl. 21) and female midwives (Sl. 22).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 4 & 5): అధ్యా. 4 లో స్త్రీ ఋతుక్రమం, గర్భధారణలో తల్లి ఆరోగ్యం (శ్లో. 6–10), ఆడపిల్ల జనన యోగాలు (సమ రాశి/నవాంశలు, శ్లో. 11) ఉన్నాయి. అధ్యా. 5 లో ప్రసవ సమయంలో తల్లి శరీర స్థితి & మంత్రసానుల వివరాలు ఉన్నాయి."
    },
    "sec-ch6": {
      titleEn: "Guide: Bālāriṣṭa (Early Childhood Risks) & Cancellations",
      titleTe: "మార్గదర్శి: బాలారిష్ట యోగాలు & వాటి అరిష్టభంగ నియమాలు",
      whatEn: "Lists all 12 slokas on early-life health/mortality risks in a newborn's chart—and crucially, the protective 'Ariṣṭa-bhaṅga' combinations that cancel those risks.",
      whatTe: "శిశువుకు బాల్యంలో కలిగే అరిష్టాలను మరియు వాటిని తొలగించే శుభగ్రహ 'అరిష్టభంగ' యోగాలను వివరిస్తుంది.",
      fillEn: "Use the filter buttons ('All 12 Slokas', 'Ariṣṭa Yogas', 'Cancellations') to focus on risks or protective cancellations.",
      fillTe: "పైన ఉన్న ఫిల్టర్ బటన్ల ద్వారా అరిష్ట యోగాలు లేదా అరిష్టభంగ నియమాలను వేర్వేరుగా చూడవచ్చు.",
      readEn: "Red tags mark risk yogas; Green tags mark cancellations (e.g., strong Jupiter, Venus, or Mercury aspecting the afflicted Moon/Lagna).",
      readTe: "ఎరుపు ట్యాగ్‌లు అరిష్టాలను, ఆకుపచ్చ ట్యాగ్‌లు అరిష్టభంగాలను (రక్షణ యోగాలను) సూచిస్తాయి.",
      exEn: "Example: Sloka 6.10 warns of Saturn in 12th, Sun in 9th, Moon in 1st, Mars in 8th—but strong Jupiter aspecting them cancels the danger.",
      exTe: "ఉదాహరణ: శ్లోకం 6.10 ప్రకారం 12లో శని, 9లో రవి, 1లో చంద్ర, 8లో కుజుడు ఉన్నా బలమైన గురుదృష్టి ఉంటే అరిష్టభంగం అవుతుంది.",
      femEn: "For Girls/Women (Ch. VI-7, 9): These Bālāriṣṭa rules apply equally to newborn girls and boys, and Slokas 6.7 & 6.9 specifically note maternal survival vs. danger unless strong benefics aspect/cancel.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 6-7, 9): బాలారిష్ట నియమాలు ఆడ, మగ శిశువులిద్దరికీ సమానంగా వర్తిస్తాయి; శ్లో. 7, 9 తల్లి క్షేమాన్ని కూడా సూచిస్తాయి."
    },
    "sec-ch7": {
      titleEn: "Guide: Āyurdāya (Longevity) Calculator",
      titleTe: "మార్గదర్శి: ఆయుర్దాయ గణన (పిండాయుర్దాయ యంత్రం)",
      whatEn: "Calculates lifespan contributions of the 7 planets + Lagna using Varāhamihira's Piṇḍāyurdāya method, including Cakrapāta (visible-half) reductions.",
      whatTe: "వరాహమిహిరుని పిండాయుర్దాయ పద్ధతి ప్రకారం సప్తగ్రహాలు మరియు లగ్నం ఇచ్చే ఆయుస్సును, చక్రపాత హరణలను లెక్కిస్తుంది.",
      fillEn: "Enter each planet's sidereal longitude from 0° to 359.99° (0°=Aries 0°, 30°=Taurus 0°, etc.), or click 'Load 120y 5d Exaltation Chart' or 'Sync' from Section 0.",
      fillTe: "0° నుండి 359.99° వరకు గ్రహ స్ఫుటాలను నమోదు చేయండి (లేదా సెక్షన్ 0 నుండి 'Sync' బటన్ నొక్కండి).",
      readEn: "The table shows each planet's Raw Āyus (based on distance from exaltation), the Cakrapāta Loss % (if in houses 7–12), and Net Āyus summed at the top.",
      readTe: "పట్టికలో మూల ఆయుస్సు, 7–12 స్థానాల చక్రపాత హరణ శాతం మరియు నికర ఆయుస్సు సంవత్సరాలలో కనిపిస్తుంది.",
      exEn: "Example: Click 'Load 120y 5d Exaltation Chart (Sl. 6)' to see how Varāhamihira's canonical maximum-life chart reduces Mars (11th, -50%) and Saturn (8th, -20%) to yield ~120 years.",
      exTe: "ఉదాహరణ: '120 సం. 5 రో. ఆదర్శ చక్రం' బటన్ నొక్కితే, పరమాయుస్సు ఎలా 120 సంవత్సరాలుగా వస్తుందో చూడవచ్చు.",
      femEn: "For Girls/Women (Ch. VII & XXIV-14): Āyurdāya calculations apply identically to women's charts; additionally, Ch. XXIV-14 notes that in a woman's chart, benefics in the 2nd house indicate she passes away before her husband (Sumangalī).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 7 & 24-14): ఆయుర్దాయ గణన స్త్రీ-పురుషులిద్దరికీ ఒకటే; అదనంగా స్త్రీ జాతకంలో 2లో శుభులు ఉంటే సుమంగళిగా జీవిస్తుందని అధ్యా. 24-14 చెబుతుంది."
    },
    "sec-ch8": {
      titleEn: "Guide: Daśās & Antardaśās (Planetary Periods)",
      titleTe: "మార్గదర్శి: దశాంతర్దశల గణన & అష్టవిధ దశా ఫలాలు",
      whatEn: "Computes how a planet's main Daśā period is divided into sub-periods (Antardaśās) among planets placed in the same house (1/2), trines 5/9 (1/3), quadrants 4/8 (1/4), and 7th (1/7).",
      whatTe: "ఒక గ్రహ మహాదశలో సహస్థిత (1/2), 5/9 (1/3), 4/8 (1/4), 7వ (1/7) స్థానాలలోని గ్రహాల అంతర్దశా కాలాన్ని లెక్కిస్తుంది.",
      fillEn: "Enter the Main Daśā's total years and the count of planets in each relative house position from the Daśā lord.",
      fillTe: "మహాదశా సంవత్సరాలు మరియు దశానాథుని నుండి ఆయా స్థానాలలో ఉన్న గ్రహాల సంఖ్యను నమోదు చేయండి.",
      readEn: "The calculator reduces all fractions to a common denominator (84) and outputs each planet's exact Antardaśā duration in years and months.",
      readTe: "పట్టికలో ప్రతి గ్రహానికి దక్కే వాటా (సంవత్సరాలు & నెలలలో) కనిపిస్తుంది. కుడివైపున 8 రకాల దశా గుణాలు ఉన్నాయి.",
      exEn: "Example: A 15-year Daśā with 1 planet in same house (1/2) and 1 in trine (1/3) → denominators sum to 84+42+28 = 154; Lord gets 84/154 × 15 = 8.18 years.",
      exTe: "ఉదాహరణ: 15 సం.ల దశలో సహస్థిత గ్రహం 1, త్రికోణ గ్రహం 1 ఉంటే దశానాథునికి 8.18 సంవత్సరాలు వస్తాయి.",
      femEn: "For Girls/Women (Ch. VIII & XXIV-14): Daśā & Antardaśā timing works identically for women. Notably, Ch. XXIV-14 uses the Ch. VIII-9 Naisargika period of the 8th-lord's Navāṁśa ruler to time marital events/widowhood.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 8 & 24-14): దశాంతర్దశల గణన స్త్రీలకు కూడా ఇదే విధంగా ఉంటుంది; అధ్యా. 24-14 ప్రకారం అష్టమాధిపతి నవాంశాధిపతి నైసర్గిక దశ కాల నిర్ణయానికి ఉపయోగిస్తారు."
    },
    "sec-ch9": {
      titleEn: "Guide: Aṣṭakavarga (336-Bindu Transit Strength Matrix)",
      titleTe: "మార్గదర్శి: అష్టకవర్గ 336-బిందువుల చక్రం",
      whatEn: "Shows how favorable (bindus) or unfavorable each of the 12 signs is for every planet based on the positions of all 7 planets + Lagna at birth.",
      whatTe: "జన్మసమయంలోని సప్తగ్రహాలు, లగ్నం ఆధారంగా 12 రాశులలో ఏ రాశి ఎంత శుభబలం (బిందువులు) కలిగి ఉందో తెలుపుతుంది.",
      fillEn: "Select the sign (1–12) for Lagna and all 7 planets at the top (or click 'Sync' in Section 0), then click any planet tab (Sun..Saturn) to view its chart.",
      fillTe: "లగ్నం మరియు 7 గ్రహాల రాశులను ఎంచుకోండి (లేదా సెక్షన్ 0 నుండి Sync చేయండి). ఆపై ఏ గ్రహ ట్యాబ్‌నైనా క్లిక్ చేయండి.",
      readEn: "In the South-Indian grid, Green (>4 bindus) = auspicious sign for transits; Red (<4 bindus) = weak/malefic; 4 = neutral. The bar chart on the right shows Sarvāṣṭakavarga (sum of all 7, ≥28 is strong).",
      readTe: "ఆకుపచ్చ గదులు (>4 బిందువులు) శుభప్రదమైనవి; ఎరుపు (<4) బలహీనమైనవి. కుడివైపు గ్రాఫ్‌లో సర్వాష్టకవర్గ (28+ బలమైన రాశి) కనిపిస్తుంది.",
      exEn: "Example: If Jupiter's sign has 6 bindus in Jupiter's Bhinnāṣṭakavarga and 32 in Sarvāṣṭakavarga, Jupiter's transit there brings strong prosperity.",
      exTe: "ఉదాహరణ: ఒక రాశిలో గురు అష్టకవర్గ 6 బిందువులు, సర్వాష్టకవర్గ 32 ఉంటే ఆ రాశి గోచారం అత్యంత శుభప్రదం.",
      femEn: "For Girls/Women (Ch. IX & XXIV-1): The 336-bindu Aṣṭakavarga matrix applies equally to women's charts for evaluating planetary strength and favorable transits (especially Venus, Moon, and Jupiter).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 9): 336 బిందువుల అష్టకవర్గ పద్ధతి స్త్రీ జాతకంలో కూడా గోచార శుభాశుభాలను చూడటానికి సమానంగా వర్తిస్తుంది."
    },
    "sec-ch10-11": {
      titleEn: "Guide: Karmajīva (Career/Wealth) & Rājayogas (Leadership)",
      titleTe: "మార్గదర్శి: కర్మజీవ (వృత్తి) & రాజయోగాలు",
      whatEn: "Ch. X reveals livelihood & wealth sources from the 10th house and its Navāṁśa lord. Ch. XI lists Varāhamihira's royal/leadership yogas and when power is gained or lost.",
      whatTe: "అధ్యా. 10లో 10వ స్థానం ద్వారా జీవనోపాధిని, అధ్యా. 11లో వరాహమిహిరుని రాజయోగాలు & రాజ్యప్రాప్తి కాలాన్ని వివరిస్తుంది.",
      fillEn: "Reference section—no inputs needed. Compare your 10th-house planet and 10th-lord's Navāṁśa (from Section 0) against the Karmajīva table.",
      fillTe: "వివరాలు నింపనవసరం లేదు. సెక్షన్ 0లో మీ 10వ స్థాన గ్రహాన్ని, దశమాధిపతి నవాంశాధిపతిని ఇక్కడి పట్టికతో సరిపోల్చండి.",
      readEn: "Left table: 10th occupant = who brings wealth (father, mother, etc.); Navāṁśa lord = exact profession. Right cards: exact Rājayoga planetary conditions.",
      readTe: "ఎడమ పట్టిక వృత్తిని, కుడి కార్డులు రాజయోగ నియమాలను చూపుతాయి.",
      exEn: "Example: If the 10th lord's Navāṁśa is ruled by Mercury, Ch. X-2 indicates writing, mathematics, poetry, or arts.",
      exTe: "ఉదాహరణ: దశమాధిపతి నవాంశ బుధునిదైతే లేఖనం, గణితం, కవిత్వం లేదా కళల ద్వారా జీవనోపాధి కలుగుతుంది.",
      femEn: "For Girls/Women (Ch. XXIV-1 & X): Per Ch. XXIV-1, wealth, status, and Rājayoga effects apply to the woman herself where suitable (e.g., own career, wealth, honour), or manifest through her husband's status (Ch. XXIV-5 also notes 'beloved of a royal husband').",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-1): కర్మజీవ & రాజయోగ ఫలితాలు స్త్రీలకు స్వయంగా (విద్య, ధనం, గౌరవం) లేదా భర్త హోదా ద్వారా వర్తిస్తాయి."
    },
    "sec-ch12": {
      titleEn: "Guide: The 32 Nābhasa Yogas Visual Pattern Lab",
      titleTe: "మార్గదర్శి: 32 నాభస యోగాల చిత్రపట ప్రయోగశాల",
      whatEn: "Nābhasa Yogas depend purely on the geometric shape/pattern of where all 7 planets sit in the 12 houses—their effects last throughout life.",
      whatTe: "సప్తగ్రహాలు కుండలిలో ఏర్పరిచే ఆకారాలను బట్టి 32 నాభస యోగాలు కలుగుతాయి. వీటి ఫలితం జీవితాంతం ఉంటుంది.",
      fillEn: "Filter by category (Āśraya, Dala, Ākṛti, Saṅkhyā) and click any yoga name on the left.",
      fillTe: "వర్గాన్ని ఎంచుకుని, ఎడమవైపు ఉన్న ఏదైనా యోగం పేరుపై క్లిక్ చేయండి.",
      readEn: "The South-Indian chart on the right lights up the exact houses occupied in that pattern (🪐), with its definition and life effect below.",
      readTe: "కుడివైపు చక్రంలో ఆ యోగానికి గ్రహాలు ఉండాల్సిన స్థానాలు (🪐) వెలుగుతాయి, క్రింద ఫలితం కనిపిస్తుంది.",
      exEn: "Example: Click 'Śṛṅgāṭaka (శృంగాటక)' to see houses 1, 5, and 9 lit up—all 7 planets in the trines give lifelong happiness in later years.",
      exTe: "ఉదాహరణ: 'శృంగాటక' క్లిక్ చేస్తే 1, 5, 9 స్థానాలు వెలుగుతాయి—ఇది ఉత్తరార్థ జీవితంలో సుఖాన్ని ఇస్తుంది.",
      femEn: "For Girls/Women (Ch. XXIV-1): Nābhasa Yogas operate throughout life for both women and men; qualities like music/dance (Vallakī), wealth/comforts (Srāk/Kamala), or travel (Rajju) apply directly to her.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-1): నాభస యోగాలు స్త్రీ-పురుషులిద్దరికీ జీవితాంతం ఫలిస్తాయి (ఉదా: వల్లకీ యోగం సంగీత-నాట్య ప్రావీణ్యాన్ని ఇస్తుంది)."
    },
    "sec-ch13-15": {
      titleEn: "Guide: Moon Yogas, 21 Planet Pairs & Ascetic Yogas",
      titleTe: "మార్గదర్శి: చంద్ర యోగాలు, 21 గ్రహ సంయోగాలు & సన్యాస యోగాలు",
      whatEn: "Covers Moon-centered yogas (Sunaphā, Anaphā, Durudharā, Kemadruma, Candrādhiyoga), all 21 two-planet conjunctions (Ch. XIV), and Pravrajyā ascetic yogas (Ch. XV).",
      whatTe: "చంద్రుని ఆధారంగా ఏర్పడే యోగాలు (అధ్యా. 13), రెండు గ్రహాల కలయిక ఫలాలు (అధ్యా. 14), సన్యాస యోగాలు (అధ్యా. 15).",
      fillEn: "Click the 3 tabs to switch between Ch. XIII (Candra Yogas), Ch. XIV (21 Planet Pairs table), and Ch. XV (7 Ascetic Orders).",
      fillTe: "పైన ఉన్న 3 ట్యాబ్‌లను క్లిక్ చేసి చంద్ర, ద్విగ్రహ, సన్యాస యోగాలను చూడండి.",
      readEn: "In Ch. XIV, if 3+ planets sit in one sign, Varāhamihira says to combine the effects of every pair in that group.",
      readTe: "ఒకే రాశిలో 3+ గ్రహాలు ఉంటే, అందులోని ప్రతి రెండు గ్రహాల జంట ఫలితాలను కలిపి చెప్పాలి.",
      exEn: "Example: Sun + Mercury in one sign (Ch. XIV-1) → 'Clever, intelligent, famous, happy'. Jupiter + Venus → 'Good learning, wealth, wife, virtues'.",
      exTe: "ఉదాహరణ: రవి + బుధ యుతి → చతురుడు, బుద్ధిమంతుడు, కీర్తిమంతుడు, సుఖి.",
      femEn: "For Girls/Women (Ch. XXIV-1, 15–16): Candra & Dvigrha yogas apply per Ch. XXIV-1 (e.g., Moon+Venus in weaving/arts). For female renunciation, Ch. XXIV-16 states that a malefic in the 7th house leads her to an ascetic order signified by the planet in the 9th house.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-1, 16): చంద్ర, ద్విగ్రహ యోగాలు స్త్రీలకు తగినట్లు వర్తిస్తాయి. అధ్యా. 24-16 ప్రకారం 7లో పాపి ఉండి 9లో ఉన్న గ్రహాన్ని అనుసరించి స్త్రీలకు సన్యాస/ఆధ్యాత్మిక యోగం కలుగుతుంది."
    },
    "sec-ch16-18": {
      titleEn: "Guide: 27 Nakṣatras & Planets in 12 Signs",
      titleTe: "మార్గదర్శి: 27 నక్షత్ర ఫలాలు & ద్వాదశ రాశులలో గ్రహ ఫలితాలు",
      whatEn: "Complete catalog of personality traits for Moon in all 27 Nakṣatras (Ch. XVI) and for all 7 planets (Moon..Saturn) in all 12 Rāśis (Ch. XVII–XVIII).",
      whatTe: "27 జన్మనక్షత్రాల స్వభావాలు (అధ్యా. 16) మరియు 12 రాశులలో సప్తగ్రహాల ఫలితాలు (అధ్యా. 17–18).",
      fillEn: "In Tab 1, scan all 27 Nakṣatras. In Tab 2, pick any planet from the dropdown to see its effects across all 12 signs.",
      fillTe: "మొదటి ట్యాబ్‌లో 27 నక్షత్రాలు; రెండవ ట్యాబ్‌లో గ్రహాన్ని ఎంచుకుని 12 రాశుల ఫలితాలను చూడండి.",
      readEn: "Green/Red/Gold tags on Nakṣatras show the traditional Good/Bad/Moderate note. Remember Ch. XVII-13: sign effects manifest fully only when the planet, sign, and sign-lord are strong.",
      readTe: "నక్షత్ర కార్డులపై శుభ/అశుభ ట్యాగ్‌లు ఉంటాయి. గ్రహం, రాశి, రాశ్యాధిపతి బలంగా ఉంటేనే ఈ ఫలితాలు పూర్తిగా అనుభవానికి వస్తాయి.",
      exEn: "Example: Moon in Rohiṇī (Ch. XVI-2) → 'Truthful, pure, sweet-tongued, settled mind, lovely appearance'.",
      exTe: "ఉదాహరణ: రోహిణి నక్షత్రంలో చంద్రుడు → సత్యవాది, శుచి, మధురభాషి, స్థిరబుద్ధి.",
      femEn: "For Girls/Women (Ch. XXIV-1): All 27 Nakṣatra and 12-Rāśi personality traits apply to women as well (adapting spouse-specific phrases like 'amiable wife' to 'amiable husband' per Ch. XXIV-1).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-1): 27 నక్షత్ర ఫలాలు మరియు రాశి ఫలాలు స్త్రీలకు కూడా వర్తిస్తాయి (పురుషునికి 'భార్య' అని చెప్పిన ఫలం స్త్రీకి 'భర్త' పరంగా వర్తిస్తుంది)."
    },
    "sec-ch19-21": {
      titleEn: "Guide: Planetary Aspects, 12 Bhāvas & Vargas",
      titleTe: "మార్గదర్శి: గ్రహ దృష్టి, ద్వాదశ భావాలు & ఆశ్రయ ఫలాలు",
      whatEn: "Ch. XIX shows how another planet's aspect modifies Moon-in-Sign. Ch. XX gives each planet's effect in Houses 1–12. Ch. XXI covers Horā, Drekkaṇa, Navāṁśa, and Triṁśāṁśa.",
      whatTe: "చంద్రునిపై ఇతర గ్రహాల దృష్టి ఫలాలు (అధ్యా. 19), 12 భావాలలో గ్రహ ఫలాలు (అధ్యా. 20), వర్గ ఫలాలు (అధ్యా. 21).",
      fillEn: "Switch tabs for Ch. XIX (full matrix table), Ch. XX (select a planet from the dropdown to see Houses 1–12), or Ch. XXI (summary rules).",
      fillTe: "ట్యాబ్‌లను మార్చండి; అధ్యా. 20లో గ్రహాన్ని ఎంచుకుని 1–12 భావాల ఫలితాలను చూడండి.",
      readEn: "Note Satyācārya's key rule (Ch. XX-10): Benefics help a house and malefics harm it—EXCEPT in houses 6, 8, and 12, where the rule reverses!",
      readTe: "అధ్యా. 20-10 నియమం: శుభులు భావాన్ని వృద్ధి చేస్తారు, పాపులు నష్టపరుస్తారు—కానీ 6, 8, 12 భావాలలో ఇది వ్యతిరేకమవుతుంది.",
      exEn: "Example: Jupiter in 10th house (Ch. XX-7) → 'Wealthy'; Moon in Aries aspected by Mars (Ch. XIX-1) → 'King'.",
      exTe: "ఉదాహరణ: 10వ భావంలో గురువు → ధనవంతుడు; మేష చంద్రునిపై కుజ దృష్టి → రాజు.",
      femEn: "For Girls/Women (Ch. XXIV-1, 8–13): In female charts, Lagna & Moon aspects/occupations show her own beauty and intellect (Ch. XXIV-13), while the 7th house/setting Navāṁśa specifically describes her husband's character (Ch. XXIV-8–12).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-1, 8–13): స్త్రీ జాతకంలో లగ్న-చంద్రులు ఆమె సౌందర్యం & గుణాలను, 7వ భావం & అస్తమ నవాంశ భర్త స్వభావాన్ని తెలుపుతాయి."
    },
    "sec-ch22-24": {
      titleEn: "Guide: Prakīrṇa, Aniṣṭa (Malefic Yogas) & Strījātaka",
      titleTe: "మార్గదర్శి: ప్రకీర్ణ, అనిష్ట యోగాలు & స్త్రీజాతకం",
      whatEn: "Ch. XXIV (Strījātaka) is the dedicated chapter on female horoscopy (even/odd signs, Rāśi × Triṁśāṁśa matrix, 7th/8th house, Vedānta scholar yoga). Ch. XXIII lists affliction/health yogas; Ch. XXII covers mutual Kārakas & timing.",
      whatTe: "అధ్యా. 24 (స్త్రీజాతకం) పూర్తిగా స్త్రీల జాతక ఫలాలకు ఉద్దేశించబడినది (సమ/విషమ రాశులు, త్రింశాంశ పట్టిక, 7/8 భావాలు, వేదాంత విదుషి యోగం). అధ్యా. 23 అనిష్ట యోగాలు, అధ్యా. 22 ప్రకీర్ణం.",
      fillEn: "Click the 3 tabs to inspect the Strījātaka matrix (Ch. XXIV), categorized Aniṣṭa yogas (Ch. XXIII), or Prakīrṇa timing rules (Ch. XXII).",
      fillTe: "3 ట్యాబ్‌ల ద్వారా స్త్రీజాతకం, అనిష్ట యోగాలు మరియు ప్రకీర్ణ నియమాలను చూడండి.",
      readEn: "In the Strījātaka matrix, find the row for the lord of the stronger of Lagna/Moon, then read across to the column of the Triṁśāṁśa lord.",
      readTe: "స్త్రీజాతక పట్టికలో లగ్న/చంద్రులలో బలమైన రాశ్యాధిపతి అడ్డువరుసలో, త్రింశాంశాధిపతి నిలువువరుసలో ఫలితం చూడండి.",
      exEn: "Example: Female with Taurus/Libra (Venus) Lagna and Jupiter Triṁśāṁśa (10°–20° in even sign) → 'All good qualities (సర్వగుణవతి)'.",
      exTe: "ఉదాహరణ: స్త్రీ జాతకంలో శుక్ర రాశి (వృషభ/తుల) + గురు త్రింశాంశ → సర్వగుణవతి.",
      femEn: "For Girls/Women (Ch. XXIV-15–16): Ch. XXIV-15 states that in an even Lagna with strong Jupiter, Mars, Mercury, and Venus, a woman becomes celebrated for knowledge of every science and an expounder of Vedānta philosophy. All Ch. XXIV yogas also apply at marriage, selection, and query (Sl. 16).",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-15,16): సమలగ్నంలో గురు, కుజ, బుధ, శుక్రులు బలంగా ఉంటే ఆమె సర్వశాస్త్ర విదుషిగా, వేదాంత ప్రవక్తగా కీర్తి పొందుతుంది. ఈ యోగాలు జన్మ, వివాహ, ప్రశ్న సమయాలకు వర్తిస్తాయి."
    },
    "sec-marriage": {
      titleEn: "Guide: Marriage, Spouse & Married Life (Jāmitra & Strījātaka)",
      titleTe: "మార్గదర్శి: వివాహం, భార్య/భర్త స్వభావం & దాంపత్య ఫలితాలు",
      whatEn: "Brings together every rule about marriage in Bṛhat Jātaka: the 7th house (Jāmitra/Patnī), Venus (Kāma kāraka), Planets in the 7th house (Ch. XX), Marriage & Late-Marriage yogas (Ch. XXIII), and Husband/Marital-longevity rules (Ch. XXIV).",
      whatTe: "బృహజ్జాతకంలో వివాహం గురించి చెప్పిన అన్ని నియమాలు (7వ స్థానం, శుక్రుడు, 7లో గ్రహఫలాలు, ఆలస్య వివాహం, స్త్రీజాతకంలో భర్త స్వభావం) ఇక్కడ ఉన్నాయి.",
      fillEn: "Reference section—no inputs needed. Compare your 7th house, 7th lord, and Venus from the Personal Birth Chart at the top against these tables.",
      fillTe: "వివరాలు నింపనవసరం లేదు. పైన ఉన్న మీ వ్యక్తిగత జన్మకుండలిలోని 7వ భావం, సప్తమాధిపతి మరియు శుక్రుని స్థితిని ఇక్కడి పట్టికలతో సరిపోల్చండి.",
      readEn: "Check (1) 7th-house planet effects (Ch. XX), (2) 7th sign/Navāṁśa lord for husband's nature (Ch. XXIV-11–12), (3) Benefic vs malefic prosperity & late-marriage yogas (Ch. XXIII-1–5), and (4) 2nd/8th house marital longevity (Ch. XXIV-14).",
      readTe: "1) 7లో గ్రహఫలాలు (అధ్యా. 20), 2) 7వ రాశి/నవాంశాధిపతి ద్వారా భర్త స్వభావం (అధ్యా. 24), 3) వివాహ శుభాశుభ & ఆలస్య వివాహ యోగాలు (అధ్యా. 23), 4) 2/8 స్థాన ఫలితాలు చూడండి.",
      exEn: "Example: Benefic or 7th lord aspecting/occupying the 7th house from Lagna or Moon brings marital prosperity (Ch. XXIII-1); Venus in 7th gives fondness for union/quarrels (Ch. XX-8).",
      exTe: "ఉదాహరణ: లగ్నం లేదా చంద్రుని నుండి 7వ భావాన్ని శుభగ్రహం లేదా సప్తమాధిపతి చూస్తే దాంపత్య సుఖం కలుగుతుంది (అధ్యా. 23-1).",
      femEn: "For Girls/Women (Ch. XXIV-8–16): The 7th house & setting Navāṁśa describe the husband's nature; 2nd-house benefics give Sumangalī; and Ch. XXIV-16 states all these yogas apply at birth, marriage, selection, and query.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 24-8–16): 7వ భావం & అస్తమ నవాంశ భర్త గుణగణాలను, 2లో శుభులు సుమంగళి యోగాన్ని సూచిస్తాయి; ఇవి జన్మ, వివాహ మరియు ప్రశ్న సమయాలకు వర్తిస్తాయి."
    },
    "sec-ch25-26": {
      titleEn: "Guide: Niryāṇa (Gati) & Naṣṭajātaka (Lost Horoscope Solver)",
      titleTe: "మార్గదర్శి: నిర్యాణం & నష్టజాతక గణనా యంత్రం",
      whatEn: "Ch. XXV covers end-of-life indicators and past/future states (Gati). Ch. XXVI (Naṣṭajātaka) reconstructs a lost birth Nakṣatra from query-time clues.",
      whatTe: "అధ్యా. 25 లో మరణ-పునర్జన్మ గతి నియమాలు, అధ్యా. 26 లో పుట్టిన సమయం తెలియని వారికి ప్రశ్న ద్వారా జన్మనక్షత్రం కనుగొనే పద్ధతి.",
      fillEn: "On the right, select the direction the querist faces, number of people facing that way, syllables (mātrās) in their name, and shadow length (Chāyāṅgula).",
      fillTe: "కుడివైపున ప్రశ్నకర్త చూస్తున్న దిక్కు, వ్యక్తుల సంఖ్య, పేరులోని మాత్రలు మరియు ఛాయాంగుళాలను నమోదు చేయండి.",
      readEn: "Both formulas compute a remainder modulo 27 and count forward from Dhaniṣṭhā (#23) to reveal the birth Nakṣatra.",
      readTe: "రెండు సూత్రాలూ 27తో భాగించి వచ్చిన శేషాన్ని ధనిష్ఠ నక్షత్రం నుండి లెక్కించి జన్మనక్షత్రాన్ని చూపిస్తాయి.",
      exEn: "Example: Facing East (val=2) with 1 person → (2×15 + 1) mod 27 = 4 → 4th from Dhaniṣṭhā = Pūrva Bhādrapadā.",
      exTe: "ఉదాహరణ: తూర్పు దిక్కు (2) + 1 వ్యక్తి → (2×15 + 1) mod 27 = 4 → ధనిష్ఠ నుండి 4వది పూర్వాభాద్ర.",
      femEn: "For Girls/Women (Ch. XXV & XXVI): Both Niryāṇa (22nd Drekkaṇa, Mokṣa, Past/Future Gati) and Naṣṭajātaka (lost horoscope reconstruction) apply identically to women and men.",
      femTe: "స్త్రీల కొరకు (అధ్యా. 25 & 26): నిర్యాణ ఫలాలు (22వ ద్రేక్కాణం, మోక్ష యోగం) మరియు నష్టజాతక గణన స్త్రీ-పురుషులిద్దరికీ సమానంగా వర్తిస్తాయి."
    },
    "sec-ch27-28": {
      titleEn: "Guide: All 36 Drekkaṇas (Decanates) Gallery & Epilogue",
      titleTe: "మార్గదర్శి: 36 ద్రేక్కాణ రూపాలు & గ్రంథ ఉపసంహారం",
      whatEn: "Every 10° slice of the 360° zodiac has a vivid symbolic image (36 total) used in Ch. V, XXI, and XXV to judge appearance, nature, and omens.",
      whatTe: "360° రాశిచక్రంలోని ప్రతి 10° భాగానికి ఒక ప్రత్యేక రూపం (మొత్తం 36 ద్రేక్కాణాలు) వరాహమిహిరుడు వర్ణించారు.",
      fillEn: "Click any category filter (Male, Female, Armed, Quadruped, Serpent, Bird) to filter the 36 cards.",
      fillTe: "పైన ఉన్న ఫిల్టర్ బటన్లను (పురుష, స్త్రీ, ఆయుధ, చతుష్పాద, సర్ప, పక్షి) నొక్కి ఆయా ద్రేక్కాణాలను చూడండి.",
      readEn: "Each card shows the Rāśi + Decanate (#1=0°–10°, #2=10°–20°, #3=20°–30°), classification tags, and exact book description.",
      readTe: "ప్రతి కార్డులో రాశి, ద్రేక్కాణ సంఖ్య (1: 0–10°, 2: 10–20°, 3: 20–30°) మరియు స్వరూప వర్ణన ఉంటాయి.",
      exEn: "Example: Scorpio #3 (20°–30° Scorpio) is the only non-human decanate among all 36: 'Lion with broad flat face guarding sandalwood regions'.",
      exTe: "ఉదాహరణ: వృశ్చిక #3 (20°–30°) 36 ద్రేక్కాణాలలో ఏకైక అమానుష (సింహ) ద్రేక్కాణం.",
      femEn: "For Girls/Women (Ch. XXVII): Exactly 12 of the 36 Drekkaṇas are Female forms (Meṣa 2, Vṛṣabha 1, Mithuna 1, Karkaṭaka 2, Kanyā 1 & 3, Vṛścika 1 & 2, Dhanus 2, Makara 2, Kumbha 2, Mīna 2)—click the 'Female (12)' filter button to view all of them!",
      femTe: "స్త్రీల కొరకు (అధ్యా. 27): 36 ద్రేక్కాణాలలో 12 'స్త్రీ' రూపాలు ఉన్నాయి—పైన ఉన్న 'స్త్రీ (12)' ఫిల్టర్ బటన్ నొక్కి వాటన్నింటినీ చూడండి."
    },
    "sec-quiz": {
      titleEn: "Guide: Bṛhat Jātaka Mastery Assessment",
      titleTe: "మార్గదర్శి: బృహజ్జాతక జ్ఞాన పరీక్ష",
      whatEn: "12 multiple-choice questions testing key rules from across all 28 chapters of Bṛhat Jātaka.",
      whatTe: "బృహజ్జాతకంలోని 28 అధ్యాయాల నుండి ముఖ్యమైన 12 ప్రశ్నలతో మీ అవగాహనను పరీక్షించుకోండి.",
      fillEn: "Click any option on each question card.",
      fillTe: "ప్రతి ప్రశ్నకు సరైన సమాధానంపై క్లిక్ చేయండి.",
      readEn: "Green = correct, Red = incorrect (with the right answer highlighted and a bilingual book explanation shown below).",
      readTe: "ఆకుపచ్చ = సరైనది, ఎరుపు = తప్పు (సరైన సమాధానం మరియు వివరణ క్రింద కనిపిస్తాయి).",
      exEn: "Example: Try Q1 on Sun & Moon's Paramochcha degrees (Ch. I, Sl. 13) to see instant feedback.",
      exTe: "ఉదాహరణ: 1వ ప్రశ్నను ప్రయత్నించి తక్షణ వివరణను చూడండి.",
      femEn: "Includes rules applicable to both women's and men's horoscopes across all 28 chapters.",
      femTe: "28 అధ్యాయాలలోని స్త్రీ-పురుష జాతక నియమాలన్నీ ఈ పరీక్షలో ఉన్నాయి."
    }
  };

  function injectGuides() {
    Object.entries(SECTION_GUIDES).forEach(([secId, g]) => {
      const sec = document.getElementById(secId);
      if (!sec) return;
      const oldGuide = sec.querySelector(":scope > .reader-guide");
      if (oldGuide) oldGuide.remove();
      const oldDetails = sec.querySelector(":scope > .guide-details");
      if (oldDetails) oldDetails.remove();

      const details = document.createElement("details");
      details.className = "guide-details";
      details.open = secId === "sec-personal";
      details.innerHTML = `
        <summary>📖 ${bi(g.titleEn, g.titleTe)}</summary>
        <div class="guide-grid">
          <div class="guide-cell">
            <div class="guide-cell-title">${bi("1. What It Means & Inside", "1. దీని అర్థం & ఇందులో ఏముంది")}</div>
            <div>${bi(g.whatEn, g.whatTe)}</div>
          </div>
          <div class="guide-cell">
            <div class="guide-cell-title">${bi("2. What to Fill & How", "2. ఏమి నింపాలి & ఎలా వాడాలి")}</div>
            <div>${bi(g.fillEn, g.fillTe)}</div>
          </div>
          <div class="guide-cell">
            <div class="guide-cell-title">${bi("3. How to Read Output", "3. ఫలితాన్ని ఎలా చదవాలి")}</div>
            <div>${bi(g.readEn, g.readTe)}</div>
          </div>
          <div class="guide-cell" style="border-color: rgba(245,185,66,0.28);">
            <div class="guide-cell-title" style="color:var(--gold-bright);">${bi("4. Example", "4. ఉదాహరణ")}</div>
            <div>${bi(g.exEn, g.exTe)}</div>
          </div>
          <div class="guide-cell" style="grid-column: 1 / -1; border-color: rgba(168,85,247,0.32); background: rgba(168,85,247,0.06);">
            <div class="guide-cell-title" style="color:#d8b4fe;">${bi("5. For Girls / Women (As Per Book)", "5. స్త్రీలు / బాలికల కొరకు (గ్రంథ నియమం)")}</div>
            <div>${bi(g.femEn, g.femTe)}</div>
          </div>
        </div>`;

      const header = sec.querySelector(".section-header");
      if (header && header.nextSibling) {
        sec.insertBefore(details, header.nextSibling);
      } else {
        sec.prepend(details);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", injectGuides);
})();
