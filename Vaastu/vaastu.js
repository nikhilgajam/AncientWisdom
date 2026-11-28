/**
 * VAASTU SASTRA VASTAVALU (వాస్తు శాస్త్ర వాస్తవాలు • The Secret World of Vaastu)
 * Authored strictly according to the complete 352-page masterwork of
 * Sri Gouru Thirupati Reddy (గౌరు తిరుపతిరెడ్డి, Proddatur, A.P.)
 * 
 * 100% Client-side Computational Architecture Engine
 */

// --- 1. Authentic 16-Zone Perimeter Matrix Data (Page 12–13 of the Book) ---
const VAASTU_16_ZONES = [
  {
    id: "ene",
    nameEn: "Eastern Northeast (ENE)",
    nameTe: "తూర్పు ఈశాన్యం (ENE)",
    status: "uccha",
    statusEn: "Exalted (Uccha)",
    statusTe: "ఉచ్ఛ స్థానం (అత్యంత శుభం)",
    elementEn: "Water / Ether (Jala / Akasha)",
    elementTe: "జలము / ఆకాశం",
    deity: "Ishana / Indra",
    rulerTe: "ఈశానుడు / ఇంద్రుడు",
    suitableEn: [
      "Main Entrance Door / Compound Gate",
      "Underground Water Sump & Borewell / Open Well",
      "Maximum Open Setback Space & Lawns",
      "Lowest Surface Floor & Drainage Exit"
    ],
    suitableTe: [
      "సింహద్వారం / కాంపౌండ్ గేటు",
      "అండర్‌గ్రౌండ్ నీటి తొట్టి & బోరుబావి / చేదబావి",
      "అత్యధిక ఖాళీ స్థలం (ఓపెన్ స్పేస్)",
      "అత్యంత పల్లం / మురుగునీటి నిష్క్రమణ"
    ],
    forbiddenEn: [
      "Septic Tank, Toilets, Bathrooms",
      "Kitchen / Hearth / Fireplaces",
      "Heavy Machinery, High Compound Walls",
      "Staircases or Pillars"
    ],
    forbiddenTe: [
      "సెప్టిక్ ట్యాంక్, మరుగుదొడ్లు, స్నానాల గదులు",
      "వంటగది / పొయ్యి / అగ్ని స్థానాలు",
      "భారీ యంత్రాలు, ఎత్తైన ప్రహరీ గోడలు",
      "మెట్లు లేదా బరువైన స్తంభాలు"
    ],
    quoteEn: "Well in the east — An everlasting pleasure resort.",
    quoteTe: "తూర్పున బావి — నిరంతర ఆనంద నిలయము.",
    detailsEn: "According to Sri Thirupati Reddy, the Eastern Northeast is an exalted sector. Keeping it low, open, and placing the main gate or water sources here bestows health, prosperity, and high public reputation.",
    detailsTe: "గౌరు తిరుపతిరెడ్డి గారి సిద్ధాంతం ప్రకారం తూర్పు ఈశాన్యం ఉచ్ఛ స్థానము. ఇక్కడ సింహద్వారం, బోరుబావి లేదా సంపు ఏర్పాటు చేసి పల్లంగా ఉంచితే ఆయురారోగ్యాలు, కీర్తి ప్రతిష్టలు, సంపద కలుగుతాయి."
  },
  {
    id: "ese",
    nameEn: "Eastern Southeast (ESE)",
    nameTe: "తూర్పు ఆగ్నేయం (ESE)",
    status: "neecha",
    statusEn: "Exiguous / Debilitated (Neecha)",
    statusTe: "నీచ స్థానం (అశుభం)",
    elementEn: "Fire (Agni)",
    elementTe: "అగ్ని",
    deity: "Agni",
    rulerTe: "అగ్ని దేవుడు",
    suitableEn: [
      "Solid Boundary Wall (Intermediate Height)",
      "Window Openings with sunshades",
      "Secondary Utility Path"
    ],
    suitableTe: [
      "మధ్యస్థ ఎత్తు గల రక్షణ గోడ",
      "కిటికీలు / సన్‌షేడ్లు",
      "చిన్న నడక దారి"
    ],
    forbiddenEn: [
      "Main Entrance Gate / Front Porch",
      "Borewell, Sump, or Water Well",
      "Depressions or Drainage Dips"
    ],
    forbiddenTe: [
      "సింహద్వారం లేదా ముఖ్య ప్రవేశ గేటు",
      "బోరుబావి, సంపు లేదా బావి",
      "గోతులు లేదా పల్లపు గుంటలు"
    ],
    quoteEn: "Well in southeast of the house — Always detrimental to women in the house.",
    quoteTe: "ఆగ్నేయమందు బావి — గృహిణికి రోగప్రదము మరియు అపార నష్టము.",
    detailsEn: "Eastern Southeast is a debilitated (Neecha) segment. Placing a main gate here leads to litigation, theft, sudden fire accidents, and chronic health troubles for the lady of the house.",
    detailsTe: "తూర్పు ఆగ్నేయం నీచ భాగం. ఇక్కడ ప్రధాన ద్వారం లేదా గేటు ఉంటే ఆర్థిక నష్టాలు, అగ్ని ప్రమాదాలు, కోర్టు కేసులు మరియు స్త్రీలకు తీవ్ర అనారోగ్యాలు కలుగుతాయి."
  },
  {
    id: "sse",
    nameEn: "Southern Southeast (SSE)",
    nameTe: "దక్షిణ ఆగ్నేయం (SSE)",
    status: "uccha",
    statusEn: "Exalted (Uccha)",
    statusTe: "ఉచ్ఛ స్థానం (శుభం)",
    elementEn: "Fire (Agni)",
    elementTe: "అగ్ని",
    deity: "Agni / Yama",
    rulerTe: "అగ్ని",
    suitableEn: [
      "Kitchen / Hearth (Face East while cooking)",
      "Secondary Exit Door / Utility Door",
      "Electrical Meter, Generator, Inverter, Furnace",
      "Medium Elevation Floor Level"
    ],
    suitableTe: [
      "వంటగది / పొయ్యి (తూర్పు ముఖంగా వంట చేయాలి)",
      "వెనుక వైపు అనుబంధ ద్వారం (సింహద్వారం కాకుండా)",
      "కరెంట్ మీటర్, జనరేటర్, ఇన్వర్టర్, బాయిలర్",
      "మధ్యస్థ ఎత్తు గల ఫ్లోరింగ్"
    ],
    forbiddenEn: [
      "Underground Water Sump or Borewell",
      "Main Entrance Facing South (if placed improperly)",
      "Septic Tank or Garbage Dump"
    ],
    forbiddenTe: [
      "అండర్‌గ్రౌండ్ సంపు లేదా బోరుబావి",
      "సరైన కొలత లేని దక్షిణ ప్రవేశ ద్వారం",
      "సెప్టిక్ ట్యాంక్ లేదా చెత్త గుంట"
    ],
    quoteEn: "Oven in southeast is auspicious — Keeps the housewife ever ambitious.",
    quoteTe: "ఆగ్నేయంలో వంటగది — గృహలక్ష్మికి ఆనందం, కుటుంబానికి శుభం.",
    detailsEn: "Southern Southeast is the exalted portion of the South. Ideal for locating the kitchen hearth, heating appliances, and secondary south doors.",
    detailsTe: "దక్షిణ ఆగ్నేయం దక్షిణ దిశలోని ఉచ్ఛ భాగం. ఇక్కడ వంటగది, ఎలక్ట్రికల్ పరికరాలు మరియు అవసరమైతే దక్షిణపు తలుపు పెట్టడానికి చాలా అనుకూలమైనది."
  },
  {
    id: "ssw",
    nameEn: "Southern Southwest (SSW)",
    nameTe: "దక్షిణ నైరుతి (SSW)",
    status: "neecha",
    statusEn: "Debilitated (Neecha - Fatal)",
    statusTe: "నీచ స్థానం (తీవ్ర అరిష్టం)",
    elementEn: "Earth / Pitru (Bhoomi)",
    elementTe: "భూమి / పితృ స్థానం",
    deity: "Nirriti / Yama",
    rulerTe: "నైరృతి రాక్షసుడు / యముడు",
    suitableEn: [
      "Solid, High, Heavy Masonry Wall (No Openings)",
      "Heavy Wardrobes / Cash Almirah against the wall",
      "Elevated Ground / Platform"
    ],
    suitableTe: [
      "ఎత్తైన, మందమైన దృఢమైన గోడ (ద్వారాలు ఉండకూడదు)",
      "బరువైన బీరువాలు / ఇనుప పెట్టెలు",
      "ఎత్తైన నేల మట్టం"
    ],
    forbiddenEn: [
      "Main Gate, Door, or Pathway",
      "Water Outlets, Wells, Sumps, Pits",
      "Low Level Setback or Slope"
    ],
    forbiddenTe: [
      "గేటు, ప్రవేశ ద్వారం లేదా నడక దారి",
      "నీటి నిష్క్రమణ, బావులు, సంపులు, గోతులు",
      "పల్లపు స్థలం లేదా లోతైన ప్రాంతం"
    ],
    quoteEn: "Southern southwest gate — Is black cobra venomous bite.",
    quoteTe: "దక్షిణ నైరుతి ద్వారము — విషనాగు కాటు వంటి ఘోర అరిష్టము.",
    detailsEn: "Sri Thirupati Reddy unequivocally warns: SSW is the most dangerous Neecha zone. Having an entrance, gate, or water pit here causes premature death, incurable illness, bankruptcy, and suicidal grief.",
    detailsTe: "తిరుపతిరెడ్డి గారి హెచ్చరిక: దక్షిణ నైరుతి అత్యంత ప్రమాదకరమైన నీచ స్థానం. ఇక్కడ గేటు గానీ, దారి గానీ, నీటి సంపు గానీ ఉంటే అకాల మరణాలు, విషాదాలు, తీవ్ర రుణభారం కలుగుతాయి."
  },
  {
    id: "wsw",
    nameEn: "Western Southwest (WSW)",
    nameTe: "పశ్చిమ నైరుతి (WSW)",
    status: "uccha",
    statusEn: "Exalted (Uccha)",
    statusTe: "ఉచ్ఛ స్థానం (స్థిరత్వం & ఆధిపత్యం)",
    elementEn: "Earth (Bhoomi / Prithvi)",
    elementTe: "భూమి",
    deity: "Varuna / Nirriti",
    rulerTe: "వరుణుడు / నైరుతి",
    suitableEn: [
      "Master Bedroom (Head facing South or West)",
      "Highest Roof Slab & Overhead Water Tank on Top",
      "Heavy Storage, Strong Room, Safe Vault",
      "Staircase Ascending from East to West or North to South"
    ],
    suitableTe: [
      "యజమాని పడకగది (తల దక్షిణం లేదా పడమర ఉంచి పడుకోవాలి)",
      "భవనంలో అత్యంత ఎత్తైన స్లాబ్ & పైన ఓవర్‌హెడ్ ట్యాంక్",
      "ధనాగారం, భారీ ఇనుప లాకర్లు",
      "మెట్ల గది (తూర్పు నుంచి పడమరకు లేదా ఉత్తరం నుంచి దక్షిణానికి ఎక్కాలి)"
    ],
    forbiddenEn: [
      "Underground Water Reservoir, Borewell, Basements",
      "Toilets, Drainage Channels, Septic Tanks",
      "Low Ground Elevation"
    ],
    forbiddenTe: [
      "అండర్‌గ్రౌండ్ వాటర్ సంపు, బోరుబావి, బేస్‌మెంట్లు",
      "మరుగుదొడ్లు, మురుగు కాలువలు, సెప్టిక్ ట్యాంకులు",
      "పల్లపు ప్రదేశం"
    ],
    quoteEn: "Storing water in tank above ground in south and west — Hoisting the flag of peace and rest.",
    quoteTe: "పశ్చిమ, దక్షిణాల పైకప్పుపై వాటర్ ట్యాంక్ — సుఖశాంతులకు నిదర్శనం.",
    detailsEn: "Western Southwest is the exalted portion of the West. It governs stability, leadership, longevity, and wealth accumulation. Keep it highest and heaviest.",
    detailsTe: "పశ్చిమ నైరుతి పశ్చిమ దిశలోని ఉచ్ఛ స్థానం. ఇది స్థిరత్వానికి, యజమాని ప్రాబల్యానికి, సంపద నిలకడకు మూలం. ఇంటి మొత్తంలో ఈ భాగం ఎత్తుగా, బరువుగా ఉండాలి."
  },
  {
    id: "wnw",
    nameEn: "Western Northwest (WNW)",
    nameTe: "పశ్చిమ వాయువ్యం (WNW)",
    status: "neecha",
    statusEn: "Exiguous / Debilitated (Neecha)",
    statusTe: "నీచ స్థానం (చంచలత్వం)",
    elementEn: "Air (Vayu)",
    elementTe: "వాయువు",
    deity: "Vayu",
    rulerTe: "వాయు దేవుడు",
    suitableEn: [
      "Medium Compound Wall",
      "Dining Area / Verandah Window",
      "Solid Masonry without deep depressions"
    ],
    suitableTe: [
      "మధ్యస్థ ప్రహరీ గోడ",
      "భోజనశాల / కిటికీలు",
      "గోతులు లేని సమాంతర నిర్మాణం"
    ],
    forbiddenEn: [
      "Main Entrance Door / Master Bedroom",
      "Underground Water Sump or Borewell",
      "Extended Corner Slices"
    ],
    forbiddenTe: [
      "ప్రధాన ప్రవేశ ద్వారం / యజమాని పడకగది",
      "అండర్‌గ్రౌండ్ సంపు లేదా బోరుబావి",
      "మూల పెరగడం (కార్నర్ ఎక్స్‌టెన్షన్)"
    ],
    quoteEn: "Drain pipe towards west — A snake which saps all the best.",
    quoteTe: "పడమరకు మురుగునీటి వాలు — సిరిసంపదలను హరించే సర్పము వంటిది.",
    detailsEn: "Western Northwest is the debilitating section of the West. Doors or depressions here lead to continuous restlessness, financial instability, and erratic expenditures.",
    detailsTe: "పశ్చిమ వాయువ్యం పడమరలోని నీచ భాగం. ఇక్కడ ద్వారాలు లేదా గుంటలు ఉంటే స్థిరత్వం లోపించి, వ్యర్థ ఖర్చులు, మానసిక అశాంతి పెరుగుతాయి."
  },
  {
    id: "nnw",
    nameEn: "Northern Northwest (NNW)",
    nameTe: "ఉత్తర వాయువ్యం (NNW)",
    status: "neecha",
    statusEn: "Exiguous / Debilitated (Neecha)",
    statusTe: "నీచ స్థానం (శత్రుభయం & వ్యాజ్యాలు)",
    elementEn: "Air (Vayu)",
    elementTe: "వాయువు",
    deity: "Vayu / Soma",
    rulerTe: "వాయువు",
    suitableEn: [
      "Septic Tank (Distanced 1–2 ft from outer boundary wall)",
      "Toilet / Bathroom (With proper drainage towards North/East)",
      "Finished Goods Godown / Guest Room",
      "Daughters' Bedroom (Facilitates timely marriage)"
    ],
    suitableTe: [
      "సెప్టిక్ ట్యాంక్ (ప్రహరీ గోడకు 1-2 అడుగుల దూరంలో)",
      "మరుగుదొడ్డి / బాత్‌రూమ్ (మురుగునీరు ఉత్తర/తూర్పునకు వెళ్ళేలా)",
      "తయారైన సరుకుల గోదాము / అతిథి గది",
      "అవివాహిత కుమార్తెల పడకగది (సకాలంలో వివాహం జరుగుతుంది)"
    ],
    forbiddenEn: [
      "Main Entrance / Front Gate",
      "Master Bedroom / Heavy Locker",
      "Borewell or Open Drinking Water Well"
    ],
    forbiddenTe: [
      "ప్రధాన సింహద్వారం / ముఖ్య గేటు",
      "యజమాని పడకగది / ధన లాకర్",
      "బోరుబావి లేదా మంచినీటి బావి"
    ],
    quoteEn: "Heavy items in north — Cause mental tension and feverish dearth.",
    quoteTe: "ఉత్తరమందు భారము — మానసిక ఆందోళన, సిరిసంపదల లోటు.",
    detailsEn: "Northern Northwest is a debilitating segment of North. While ideal for septic tanks (safely detached from walls) and guest rooms, entrances here cause litigation, court cases, and hostile rivalries.",
    detailsTe: "ఉత్తర వాయువ్యం నీచ భాగం. ఇక్కడ సెప్టిక్ ట్యాంక్, అతిథి గది పెట్టవచ్చు గానీ, ప్రధాన గేటు లేదా సింహద్వారం పెడితే శత్రువులు పెరగడం, కోర్టు కేసులు ఎదురవుతాయి."
  },
  {
    id: "nne",
    nameEn: "Northern Northeast (NNE)",
    nameTe: "ఉత్తర ఈశాన్యం (NNE)",
    status: "uccha",
    statusEn: "Exalted (Uccha - Kubera)",
    statusTe: "ఉచ్ఛ స్థానం (కుబేర స్థానము • అష్టైశ్వర్యాలు)",
    elementEn: "Water / Ether (Jala / Akasha)",
    elementTe: "జలము / కుబేరుడు",
    deity: "Kubera / Soma",
    rulerTe: "కుబేరుడు",
    suitableEn: [
      "Borewell, Underground Water Sump, Drinking Fountain",
      "Main Front Gate / Northern Entrance Door",
      "Maximum Open Yard (North Setback > South Setback)",
      "Puja Room / Meditation Space / Library",
      "Lowest Site Level / Ground Slope towards NE"
    ],
    suitableTe: [
      "బోరుబావి, అండర్‌గ్రౌండ్ సంపు, మంచినీటి కొళాయి",
      "ముఖ్య గేటు / ఉత్తర సింహద్వారం",
      "అత్యధిక ఖాళీ స్థలం (దక్షిణం కంటే ఉత్తరంలో ఎక్కువ ఉండాలి)",
      "పూజా మందిరం / ధ్యాన గది / గ్రంథాలయం",
      "ఇంటి ఆవరణలో అత్యంత పల్లమైన నేల మట్టం"
    ],
    forbiddenEn: [
      "Toilets, Bathrooms, Septic Tanks",
      "Kitchen / Hearth / Generator",
      "Staircases, Pillars, Heavy Loads",
      "Tall/Thick Boundary Walls"
    ],
    forbiddenTe: [
      "మరుగుదొడ్లు, బాత్‌రూమ్‌లు, సెప్టిక్ ట్యాంకులు",
      "వంటగది / పొయ్యి / జనరేటర్",
      "మెట్లు, బరువైన స్తంభాలు, భారీ లోడ్లు",
      "ఎత్తైన, లావైన ప్రహరీ గోడలు"
    ],
    quoteEn: "Gradient towards northeast — Enforce all-round development never to lost.",
    quoteTe: "ఈశాన్యమునకు పల్లము — సర్వతోముఖాభివృద్ధికి రాజమార్గము.",
    detailsEn: "Northern Northeast is the supreme exalted sector governed by Kubera (Lord of Wealth). Having wide setbacks, low elevation, and pristine water sumps here guarantees perpetual prosperity, knowledge, and family bliss.",
    detailsTe: "ఉత్తర ఈశాన్యం కుబేర స్థానం. ఈ ప్రదేశం విశాలంగా, పల్లంగా ఉండి, బోరుబావి లేదా సంపు ఉంటే ధనధాన్యాలు, సత్సంతానం, సర్వతోముఖాభివృద్ధి కలుగుతాయి."
  },
  {
    id: "eshanya",
    nameEn: "Eshanya Corner (NE Corner)",
    nameTe: "ఈశాన్య మూల (NE Corner)",
    status: "corner",
    statusEn: "Corner (Water Element • Ishana)",
    statusTe: "మూల (జల తత్త్వము • పరమ పవిత్రం)",
    elementEn: "Water (Jala)",
    elementTe: "జలము",
    deity: "Lord Shiva (Ishana)",
    rulerTe: "ఈశానుడు (పరమశివుడు)",
    suitableEn: [
      "Underground Water Sump, Borewell",
      "Puja Room, Sacred Tulasi Plant",
      "Lowest Ground Level of the entire plot",
      "Open Verandah, Maximum Open Setback"
    ],
    suitableTe: [
      "అండర్‌గ్రౌండ్ వాటర్ సంపు, బోరుబావి",
      "పూజా గది, తులసి కోట",
      "మొత్తం స్థలంలో అత్యంత పల్లమైన నేల",
      "ఓపెన్ వరండా, అత్యధిక ఖాళీ స్థలం"
    ],
    forbiddenEn: [
      "NO Toilets, NO Septic Tank (Severe sin & disease)",
      "NO Kitchen (Causes brain strain & disputes)",
      "NO Overhead Tank, NO Heavy Staircase",
      "NO Cut / Sliced Corner"
    ],
    forbiddenTe: [
      "మరుగుదొడ్లు, సెప్టిక్ ట్యాంకులు ఎట్టిపరిస్థితుల్లో ఉండరాదు",
      "వంటగది ఉండరాదు (మానసిక రుగ్మతలు వస్తాయి)",
      "ఓవర్‌హెడ్ ట్యాంక్ లేదా భారీ మెట్లు ఉండరాదు",
      "ఈశాన్యం తెగడం (కట్ కావడం) తీవ్ర అశుభం"
    ],
    quoteEn: "Well in northeast — Unparallel benediction almost.",
    quoteTe: "ఈశాన్యాన జలము — సాటిలేని అష్టైశ్వర్యాల వరము.",
    detailsEn: "The Northeast corner is the head of the Vāstu Puruṣa. Sri Thirupati Reddy stresses that any heavy load or toilet here crushes the cosmic vitality of the house. Must always remain immaculate, open, and low.",
    detailsTe: "ఈశాన్య మూల వాస్తు పురుషుని శిరస్సు. ఇక్కడ బరువులు, మెట్లు, టాయిలెట్లు పెడితే వాస్తు పురుషుని శిరస్సుపై భారం పడి కుటుంబంలో తీరని నష్టాలు వస్తాయి. ఇది ఎల్లప్పుడూ తేలికగా, పవిత్రంగా ఉండాలి."
  },
  {
    id: "agneya",
    nameEn: "Agneya Corner (SE Corner)",
    nameTe: "ఆగ్నేయ మూల (SE Corner)",
    status: "corner",
    statusEn: "Corner (Fire Element • Agni)",
    statusTe: "మూల (అగ్ని తత్త్వము • తేజస్సు)",
    elementEn: "Fire (Agni)",
    elementTe: "అగ్ని",
    deity: "Agni Deva",
    rulerTe: "అగ్ని దేవుడు",
    suitableEn: [
      "Kitchen (Hearth in Southeast, cook facing East)",
      "Electrical Transformers, Meters, Inverters",
      "Generators, Boilers, Heating Systems",
      "Medium Ground Level"
    ],
    suitableTe: [
      "వంటగది (ఆగ్నేయంలో పొయ్యి, తూర్పు ముఖంగా వంట)",
      "ట్రాన్స్‌ఫార్మర్, కరెంట్ మీటర్, ఇన్వర్టర్లు",
      "జనరేటర్, బాయిలర్, హీటర్లు",
      "మధ్యస్థ నేల మట్టం"
    ],
    forbiddenEn: [
      "Underground Water Sump, Borewell (Destroys peace)",
      "Main Gate Facing Corner",
      "Extension of SE Corner (Causes fire accidents)"
    ],
    forbiddenTe: [
      "అండర్‌గ్రౌండ్ సంపు లేదా బోరుబావి (గృహిణికి రోగప్రదం)",
      "మూల ప్రవేశ గేటు",
      "ఆగ్నేయం పెరగడం (అగ్ని ప్రమాదాలు, తగాదాలు)"
    ],
    quoteEn: "Cooking facing east — Digesting well every feast.",
    quoteTe: "తూర్పు ముఖముగా వంట — ఆయురారోగ్యాల పంట.",
    detailsEn: "Agneya is the divine Fire zone. Thirupati Reddy emphasizes that fire and water must never be mixed here; placing a borewell or sump in Agneya brings chronic gynecological illness and financial ruin.",
    detailsTe: "ఆగ్నేయం అగ్ని స్థానం. ఇక్కడ నీటి సంపు లేదా బోరుబావి తీస్తే అగ్ని-జల విరోధం ఏర్పడి గృహిణికి తీవ్ర అనారోగ్యం, నిరంతర ధన నష్టం కలుగుతాయి."
  },
  {
    id: "niruthi",
    nameEn: "Niruthi Corner (SW Corner)",
    nameTe: "నైరుతి మూల (SW Corner)",
    status: "corner",
    statusEn: "Corner (Earth Element • Stability)",
    statusTe: "మూల (భూ తత్త్వము • స్థిరత్వం)",
    elementEn: "Earth (Bhoomi)",
    elementTe: "భూమి / పితృ స్థానం",
    deity: "Nirriti",
    rulerTe: "నైరుతి (రాక్షస / పితృ స్థానం)",
    suitableEn: [
      "Master Bedroom (Bed in SW, Head to South/West)",
      "Overhead Water Tank on top of SW terrace",
      "Highest Floor Elevation & Thickest Compound Walls",
      "Laying Foundation First from SW Corner",
      "Staircase and Heavy Masonry"
    ],
    suitableTe: [
      "యజమాని ప్రధాన పడకగది (దక్షిణం/పడమర తల)",
      "నైరుతి రూఫ్ పైన ఓవర్‌హెడ్ వాటర్ ట్యాంక్",
      "మొత్తం స్థలంలో అత్యంత ఎత్తైన నేల & మందమైన గోడలు",
      "శంకుస్థాపన / పునాది నైరుతి నుంచే ప్రారంభించాలి",
      "మెట్ల గది, భారీ లోడ్లు"
    ],
    forbiddenEn: [
      "NO Borewell, NO Underground Sump, NO Wells",
      "NO Main Gate or Opening",
      "NO Extension or Truncation (Must be 90° Right Angle)",
      "NO Low Ground Slope"
    ],
    forbiddenTe: [
      "బోరుబావి, సంపు లేదా బావి ఎట్టిపరిస్థితుల్లో ఉండరాదు",
      "ప్రధాన గేటు లేదా ద్వారం ఉండరాదు",
      "నైరుతి పెరగడం లేదా తెగడం మహా అరిష్టం (90° గుణకం ఉండాలి)",
      "పల్లంగా ఉండరాదు"
    ],
    quoteEn: "Laying of foundation from southwest — Proves to be auspiciously best.",
    quoteTe: "నైరుతి నుండి పునాది నిర్మాణం — సర్వ శుభములకు శ్రేష్ఠమైనది.",
    detailsEn: "Niruthi is the anchor of the residence. Thirupati Reddy insists: The Southwest must be the highest, heaviest, and completely closed. A well or gate here invites total ruin and early demise of the head of family.",
    detailsTe: "నైరుతి ఇంటికి మూల స్తంభం వంటిది. ఇది ఎల్లప్పుడూ అత్యంత ఎత్తుగా, బరువుగా, మూసి ఉంచాలి. ఇక్కడ బావి గానీ గేటు గానీ ఉంటే కుటుంబ పెద్దకు ఆయుక్షీణం, సర్వనాశనం కలుగుతాయి."
  },
  {
    id: "vayavya",
    nameEn: "Vayavya Corner (NW Corner)",
    nameTe: "వాయువ్య మూల (NW Corner)",
    status: "corner",
    statusEn: "Corner (Air Element • Movement)",
    statusTe: "మూల (వాయు తత్త్వము • గమనం)",
    elementEn: "Air (Vayu)",
    elementTe: "వాయువు",
    deity: "Vayu Deva",
    rulerTe: "వాయు దేవుడు",
    suitableEn: [
      "Guest Bedroom / Visitors' Lounge",
      "Unmarried Daughters' Bedroom",
      "Finished Goods Godown / Fast Moving Stock",
      "Garage / Car Parking / Grain Storage",
      "Septic Tank (in Northern NW, away from wall)"
    ],
    suitableTe: [
      "అతిథుల గది / అతిథి భవనం",
      "వివాహం కావలసిన కుమార్తెల పడకగది",
      "త్వరగా అమ్ముడుపోయే తయారైన సరుకుల నిల్వ",
      "వాహనాల పార్కింగ్ / ధాన్యపు కొట్టు",
      "సెప్టిక్ ట్యాంక్ (ఉత్తర వాయువ్యంలో ప్రహరీకి దూరంగా)"
    ],
    forbiddenEn: [
      "Master Bedroom (Causes perpetual restlessness)",
      "Heavy Cash Safe Vault",
      "Borewell or Underground Drinking Sump"
    ],
    forbiddenTe: [
      "యజమాని ప్రధాన పడకగది (నిరంతర అశాంతి, ప్రయాణాలు)",
      "ధనాగారం / శాశ్వత నిల్వ బీరువా",
      "బోరుబావి లేదా మంచినీటి సంపు"
    ],
    quoteEn: "Store of grains in northwest — Will empty fast at lucrative cost.",
    quoteTe: "వాయువ్యంలో ధాన్యపు గది — శీఘ్ర విక్రయం, లాభాల సిరి.",
    detailsEn: "Vayavya is the zone of dynamic motion and airflow. It is ideal for items and guests that should move smoothly without lingering. Master bedroom here leads to instability and unnecessary transfers.",
    detailsTe: "వాయువ్యం నిరంతర చలనానికి సంకేతం. ఇక్కడ ఉంచిన సరుకులు త్వరగా అమ్ముడవుతాయి. ఇక్కడ యజమాని నిద్రిస్తే ఎప్పుడూ ప్రయాణాలు, మానసిక అస్థిరత ఉంటాయి."
  },
  {
    id: "north",
    nameEn: "North (Uttara / Kubera)",
    nameTe: "ఉత్తరం (కుబేర స్థానం)",
    status: "uccha",
    statusEn: "Exalted (Uccha / Wealth)",
    statusTe: "ఉచ్ఛ స్థానం (కుబేర సంపద)",
    elementEn: "Water / Magnetic Flux",
    elementTe: "జలము / అయస్కాంత తరంగాలు",
    deity: "Kubera / Soma",
    rulerTe: "కుబేరుడు / సోముడు",
    suitableEn: [
      "Main Entrance Door / Compound Gate",
      "Cash Locker & Treasury (opening towards North)",
      "Managing Director / Financial Office",
      "Low Ground Level & Water Drainage Flow"
    ],
    suitableTe: [
      "సింహద్వారం / కాంపౌండ్ గేటు",
      "ధన లాకర్ & నగదు బీరువా (ఉత్తరం చూసేలా)",
      "ఎగ్జిక్యూటివ్ ఆఫీస్ / అకౌంట్స్ విభాగం",
      "పల్లపు నేల & మురుగునీటి నిష్క్రమణ"
    ],
    forbiddenEn: [
      "Heavy Machinery & Scrap Heaps",
      "Kitchen / Hearth / Fireplaces",
      "Tall blocking walls devoid of windows",
      "Overhead Water Tank"
    ],
    forbiddenTe: [
      "భారీ యంత్రాలు & స్క్రాప్ కుప్పలు",
      "వంట పొయ్యి / అగ్ని విభాగాలు",
      "కిటికీలు లేని ఎత్తైన అడ్డు గోడలు",
      "ఓవర్‌హెడ్ వాటర్ ట్యాంక్"
    ],
    quoteEn: "Well in northeast — Unparallel benediction almost.",
    quoteTe: "ఈశాన్యాన జలము — సాటిలేని అష్టైశ్వర్యాల వరము.",
    detailsEn: "Sri Thirupati Reddy designates the North as the divine Kubera corridor. Keeping the North light, open, and sloping lower than the South ensures an unimpeded geomagnetic energy current, bringing continuous commercial growth and prosperity.",
    detailsTe: "ఉత్తర దిశ కుబేర స్థానము మరియు పవిత్ర అయస్కాంత తరంగాల ప్రవాహ మార్గము. దక్షిణం కంటే ఉత్తరం వైపు ఎక్కువ ఖాళీ స్థలం, పల్లం ఉండటం వల్ల ఇంట్లోకి నిరంతర ధనాగమనం, వ్యాపార లాభాలు చేకూరుతాయి."
  },
  {
    id: "east",
    nameEn: "East (Purva / Solar Prana)",
    nameTe: "తూర్పు (పూర్వ / సౌర ప్రాణశక్తి)",
    status: "uccha",
    statusEn: "Exalted (Uccha)",
    statusTe: "ఉచ్ఛ స్థానం",
    elementEn: "Solar Prana (Surya / Aditya)",
    elementTe: "సౌర ప్రాణశక్తి (సూర్యుడు)",
    deity: "Indra / Aditya",
    rulerTe: "ఇంద్రుడు / సూర్య భగవానుడు",
    suitableEn: [
      "Main Entrance / Front Verandah",
      "Sacred Basil (Tulasi) Altar",
      "Spacious Setback Lawns & Courtyards",
      "Living Rooms & Reading Desks"
    ],
    suitableTe: [
      "సింహద్వారం / ముందు వరండా",
      "తులసి కోట నిర్మాణం",
      "విశాలమైన ఖాళీ స్థలం & పూలతోటలు",
      "హాలు & అధ్యయన గదులు"
    ],
    forbiddenEn: [
      "Heavy Store Rooms & High Walls",
      "Septic Tank / Bathrooms in Southeast corner",
      "Overhead Water Tank",
      "Heavy Staircases without ventilation"
    ],
    forbiddenTe: [
      "భారీ సామాన్ల గోడౌన్లు & ఎత్తైన గోడలు",
      "సెప్టిక్ ట్యాంక్ / దుర్వాసన గదులు",
      "ఓవర్‌హెడ్ వాటర్ ట్యాంక్",
      "వెలుతురు లేని బరువైన మెట్లు"
    ],
    quoteEn: "Well in the east — An everlasting pleasure resort.",
    quoteTe: "తూర్పున బావి — నిరంతర ఆనంద నిలయము.",
    detailsEn: "The East is the fountain of life-giving morning sunlight. Sri Thirupati Reddy insists on keeping Eastern setbacks wider and lower than Western setbacks to bathe the dwelling in beneficial early solar rays.",
    detailsTe: "తూర్పు దిశ సౌర ప్రాణశక్తికి నిలయం. పశ్చిమం కంటే తూర్పున ఎక్కువ ఖాళీ స్థలం, పల్లం వదలడం వల్ల ఉదయపు అమృత కిరణాలు ఇంట్లోకి ప్రసరించి కుటుంబ ఆరోగ్యానికి, దీర్ఘాయువుకు దోహదపడతాయి."
  },
  {
    id: "south",
    nameEn: "South (Dakshina / Yama)",
    nameTe: "దక్షిణం (యమ స్థానం)",
    status: "neecha",
    statusEn: "Load Bearing / Solid Mass",
    statusTe: "భార స్థానం (స్థిరత్వం)",
    elementEn: "Earth / Heavy Element",
    elementTe: "పృథ్వీ తత్త్వం",
    deity: "Yama",
    rulerTe: "యమ ధర్మరాజు",
    suitableEn: [
      "Heavy Structural Masonry & High Compound Walls",
      "Staircases & Granite Steps",
      "Dining Halls & Secondary Bedrooms",
      "Granary, Stores & Tall Trees"
    ],
    suitableTe: [
      "భారీ రాతి గోడలు & ఎత్తైన ప్రహరీ",
      "బరువైన మెట్లు & రాతి నిర్మాణాలు",
      "డైనింగ్ హాలు & పడక గదులు",
      "ధాన్యపు కొట్లు & ఎత్తైన వృక్షాలు"
    ],
    forbiddenEn: [
      "Underground Wells, Borewells & Water Sumps",
      "Lowest floor levels or drainage slopes",
      "Large open excavated courtyards",
      "Basement / Cellar portions"
    ],
    forbiddenTe: [
      "భూగర్భ బావులు, బోరుబావి లేదా సంపులు",
      "పల్లపు వాలు లేదా మురుగునీటి గుంతలు",
      "పెద్ద ఖాళీ స్థలాలు",
      "అండర్‌గ్రౌండ్ సెల్లార్లు"
    ],
    quoteEn: "Laying of foundation from southwest — Proves to be auspiciously best.",
    quoteTe: "నైరుతి నుండి శంకుస్థాపన — సర్వ శుభములకు శ్రేష్ఠమైనది.",
    detailsEn: "The Southern boundary represents structural ballast and defense. It must always be taller, thicker, and heavier than the North. Digging water pits in the South induces severe health ailments and economic decline.",
    detailsTe: "దక్షిణ ప్రహరీ గోడ ఉత్తరం కంటే ఎత్తుగా, బరువుగా ఉండాలి. దక్షిణం పల్లంగా ఉండరాదు, ఇక్కడ బావులు లేదా గుంతలు తవ్వితే అనారోగ్యాలు, ఆర్థిక నష్టాలు వస్తాయి."
  },
  {
    id: "west",
    nameEn: "West (Paschima / Varuna)",
    nameTe: "పశ్చిమం (పడమర / వరుణ స్థానం)",
    status: "neecha",
    statusEn: "Load Bearing / Stability",
    statusTe: "స్థిరత్వ స్థానం (భారం)",
    elementEn: "Air / Solid Mass",
    elementTe: "వాయు / పృథ్వీ తత్త్వం",
    deity: "Varuna",
    rulerTe: "వరుణ దేవుడు",
    suitableEn: [
      "Heavy Wooden Almirahs & Steel Wardrobes",
      "Overhead Water Tank Support Columns",
      "Children's Study Rooms & Bedrooms",
      "Workshops & Mechanical Tool Storage"
    ],
    suitableTe: [
      "భారీ బీరువాలు & వార్డ్‌రోబ్‌లు",
      "ఓవర్‌హెడ్ వాటర్ ట్యాంక్ పిల్లర్లు",
      "పిల్లల చదువుకునే గదులు & బెడ్‌రూమ్స్",
      "వర్క్‌షాపులు & పనిముట్ల నిల్వ"
    ],
    forbiddenEn: [
      "Underground Borewells & Pits",
      "Main low-lying entry verandas",
      "Drainage water stagnation",
      "Large open vacant yards without shade"
    ],
    forbiddenTe: [
      "భూగర్భ బోరుబావులు & నీటి సంపులు",
      "పల్లపు ప్రవేశ వరండాలు",
      "మురుగునీరు నిలిచే గుంతలు",
      "నీడలేని పెద్ద ఖాళీ స్థలాలు"
    ],
    quoteEn: "Correct the house — Enjoy the better the loving spouse.",
    quoteTe: "వాస్తు ప్రకారం సరిదిద్దు ఇల్లు — ఆనందంగా జీవించు నూరేళ్ళు.",
    detailsEn: "The Western sector provides structural stabilization against intense solar thermal waves. Keeping the West higher and heavier than the East anchors family prosperity and prevents operational turmoil.",
    detailsTe: "పశ్చిమ భాగం తూర్పు కంటే ఎత్తుగా, భారంగా ఉండాలి. మధ్యాహ్నపు తీవ్రమైన సూర్యతాపం నుండి రక్షణ కల్పించడానికి పశ్చిమ గోడలు మందంగా నిర్మించి స్థిరత్వాన్ని కాపాడుకోవాలి."
  },
  {
    id: "brahmasthana",
    nameEn: "Brahmasthana (Cosmic Center)",
    nameTe: "బ్రహ్మస్థానము (కేంద్ర భాగము)",
    status: "brahma",
    statusEn: "Center (Space Element • Ether)",
    statusTe: "కేంద్రం (ఆకాశ తత్త్వము • బ్రహ్మ)",
    elementEn: "Ether / Space (Akasha)",
    elementTe: "ఆకాశం / ఖాళీ ప్రదేశం",
    deity: "Lord Brahma",
    rulerTe: "బ్రహ్మ దేవుడు",
    suitableEn: [
      "Open Central Courtyard (Anganam / Muthaaram)",
      "Well-lit, Well-ventilated Living Hall",
      "Completely Free from Pillars, Beams & Walls"
    ],
    suitableTe: [
      "ఆకాశం కనిపించే నడిమి ముంగిలి (అంగణము / ముంగిట)",
      "వెలుతురు, గాలి ధారాళంగా వచ్చే కేంద్ర హాల్",
      "స్తంభాలు, గోడలు లేకుండా విశాలంగా ఉండాలి"
    ],
    forbiddenEn: [
      "NO Pillars, Load-bearing Walls, or Beams",
      "NO Staircases, Heavy Furniture, Machinery",
      "NO Toilets, Septic Tanks, or Fire Hearths",
      "NO Water Sumps or Borewells"
    ],
    forbiddenTe: [
      "స్తంభాలు, లోడ్ బేరింగ్ గోడలు, దూలాలు ఉండరాదు",
      "మెట్లు, బరువైన యంత్రాలు, బీరువాలు ఉండరాదు",
      "మరుగుదొడ్లు, సెప్టిక్ ట్యాంకులు లేదా వంట పొయ్యి ఉండరాదు",
      "నీటి సంపు లేదా బోరుబావి ఉండరాదు"
    ],
    quoteEn: "Center of house free and clear — Keeps prosperity and long life near.",
    quoteTe: "బ్రహ్మస్థానం భారరహితం — ఆయురారోగ్య సంపత్ప్రదం.",
    detailsEn: "Brahmasthana is the navel and core of the Vāstu Puruṣa. Thirupati Reddy emphasizes that it must remain luminous, unencumbered, and structurally light to allow cosmic energy to circulate freely.",
    detailsTe: "బ్రహ్మస్థానం ఇంటి నాభి స్థానం. ఇక్కడ ఎలాంటి బరువులు, గోడలు, స్తంభాలు లేదా మరుగుదొడ్లు పెట్టకూడదు. ఇది ఎల్లప్పుడూ తేలికగా, పరిశుభ్రంగా ఉండాలి."
  }
];

// --- 2. Vīthi Śūla (Street Focus) Engine (Page 76 of the Book) ---
const VITHI_SHULA_RULES = [
  {
    id: "ene",
    nameEn: "East of Northeast (ENE) Street Focus",
    nameTe: "తూర్పు ఈశాన్య వీధి పోటు (ENE)",
    direction: "East",
    type: "beneficent",
    typeEn: "Beneficent (Auspicious)",
    typeTe: "శుభ వీధి పోటు (అత్యుత్తమం)",
    impactEn: "Exceptional prosperity, intellectual brilliance, victory in enterprises, high social status and fame.",
    impactTe: "అఖండ ఐశ్వర్యము, సద్బుద్ధి, వ్యాపార విజయం, సమాజంలో విశేష గౌరవం మరియు కీర్తి.",
    color: "#10b981",
    score: 100,
    remedyEn: "No remedy needed; highly auspicious. Keep gate open and exalted.",
    remedyTe: "పరిహారం అవసరం లేదు. ఇది పరమ శుభప్రదం. ఇక్కడ ప్రహరీ గేటు ఉంచడం శ్రేయస్కరం."
  },
  {
    id: "nne",
    nameEn: "North of Northeast (NNE) Street Focus",
    nameTe: "ఉత్తర ఈశాన్య వీధి పోటు (NNE)",
    direction: "North",
    type: "beneficent",
    typeEn: "Beneficent (Auspicious)",
    typeTe: "శుభ వీధి పోటు (కుబేర యోగం)",
    impactEn: "Immense wealth accumulation (Kubera blessing), peace of mind, righteous progeny, and spiritual elevation.",
    impactTe: "కుబేర సంపద, మనశ్శాంతి, సత్సంతానం, వంశాభివృద్ధి మరియు ధర్మకార్య నిర్వహణ.",
    color: "#10b981",
    score: 100,
    remedyEn: "Keep the area low and build the main gate in this exact exalted corridor.",
    remedyTe: "ఈ స్థలాన్ని పల్లంగా ఉంచి, ఇక్కడే ప్రధాన గేటు ఏర్పాటు చేయడం ఉత్తమోత్తమం."
  },
  {
    id: "sse",
    nameEn: "South of Southeast (SSE) Street Focus",
    nameTe: "దక్షిణ ఆగ్నేయ వీధి పోటు (SSE)",
    direction: "South",
    type: "beneficent",
    typeEn: "Beneficent (Auspicious for Dynamic Growth)",
    typeTe: "శుభ వీధి పోటు (మహిళలకు, కార్యదీక్షకు శుభం)",
    impactEn: "Favorable for ladies of the house, dynamic business drive, abundance of energy and courage.",
    impactTe: "ఇంటి స్త్రీలకు మేలు, చురుకైన వ్యాపార అభివృద్ధి, ధైర్యసాహసాలు మరియు ఉత్సాహం.",
    color: "#34d399",
    score: 85,
    remedyEn: "Auspicious if compound wall is sturdy and door is in exalted portion.",
    remedyTe: "ప్రహరీ గోడ దృఢంగా ఉండి, ఉచ్ఛ భాగంలో ద్వారం ఉంటే విశేష లాభదాయకం."
  },
  {
    id: "wnw",
    nameEn: "West of Northwest (WNW) Street Focus",
    nameTe: "పశ్చిమ వాయువ్య వీధి పోటు (WNW)",
    direction: "West",
    type: "beneficent",
    typeEn: "Beneficent (Auspicious for Men & Trade)",
    typeTe: "శుభ వీధి పోటు (పురుషులకు కీర్తి, వ్యాపార లాభం)",
    impactEn: "Rapid commercial success, societal fame for men, dynamic liquid cash flow.",
    impactTe: "వ్యాపార లావాదేవీలు విస్తరించడం, పురుషులకు సమాజంలో గుర్తింపు, నగదు చలామణి.",
    color: "#34d399",
    score: 80,
    remedyEn: "Maintain uniform floor levels without digging pits in this sector.",
    remedyTe: "ఇక్కడ ఎలాంటి గుంటలు తీయకుండా సమాంతరంగా ఉంచాలి."
  },
  {
    id: "ese",
    nameEn: "East of Southeast (ESE) Street Focus",
    nameTe: "తూర్పు ఆగ్నేయ వీధి పోటు (ESE)",
    direction: "East",
    type: "baneful",
    typeEn: "Baneful / Detrimental (Inauspicious)",
    typeTe: "అశుభ వీధి పోటు (అగ్ని ప్రమాదం, స్త్రీల అనారోగ్యం)",
    impactEn: "Fire accidents, litigation, severe abdominal/gynecological disorders for women, financial drainage.",
    impactTe: "అగ్ని భయాలు, కోర్టు గొడవలు, మహిళలకు గర్భాశయ/ఉదర సంబంధిత వ్యాధులు, ధనవ్యయం.",
    color: "#f43f5e",
    score: 20,
    remedyEn: "Thirupati Reddy Remedy: Close any gate in ESE. Build a solid, heavy compound wall facing the street and erect an interior screen/baffle wall or plant dense Ashoka trees to deflect vehicular road thrust.",
    remedyTe: "తిరుపతిరెడ్డి గారి పరిష్కారం: తూర్పు ఆగ్నేయంలో గేటు ఎట్టిపరిస్థితుల్లో పెట్టరాదు. వీధికి ఎదురుగా ఎత్తైన దృఢమైన కాంపౌండ్ వాల్ నిర్మించి, వీధి పోటును నిరోధించేందుకు లోపల అడ్డుగోడ లేదా దట్టమైన అశోక చెట్లు నాటాలి."
  },
  {
    id: "ssw",
    nameEn: "South of Southwest (SSW) Street Focus",
    nameTe: "దక్షిణ నైరుతి వీధి పోటు (SSW)",
    direction: "South",
    type: "baneful",
    typeEn: "Severely Fatal (Most Dangerous)",
    typeTe: "తీవ్ర అరిష్ట వీధి పోటు (మరణతుల్య కష్టాలు)",
    impactEn: "Sri Thirupati Reddy warns: Equivalent to a venomous cobra bite. Premature deaths of male family members, suicidal tendencies, total business insolvency.",
    impactTe: "గౌరు తిరుపతిరెడ్డి గారి హెచ్చరిక: ఇది నల్లత్రాచు కాటు వంటిది. పురుషులకు అకాల మరణం, ఆత్మహత్య ఆలోచనలు, దివాలా తీయడం.",
    color: "#e11d48",
    score: 0,
    remedyEn: "Immediate Architectural Remedy: Never open a gate here. Make this southwest boundary wall extra tall and thick. If possible, leave an outer triangular buffer patch separated by an outer wall as per Gunakam principle.",
    remedyTe: "తక్షణ పరిష్కారం: ఇక్కడ ఎట్టి పరిస్థితుల్లో ద్వారం గానీ గేటు గానీ ఉండకూడదు. ఈ గోడను అత్యంత మందంగా, ఎత్తుగా నిర్మించాలి. వీలైతే గుణకం ప్రకారం బయట స్థలాన్ని వేరుచేసి కాంపౌండ్ సరిచేయాలి."
  },
  {
    id: "wsw",
    nameEn: "West of Southwest (WSW) Street Focus",
    nameTe: "పశ్చిమ నైరుతి వీధి పోటు (WSW)",
    direction: "West",
    type: "baneful",
    typeEn: "Severely Detrimental (Downfall)",
    typeTe: "తీవ్ర అశుభ వీధి పోటు (నైతిక పతనం, శత్రుత్వం)",
    impactEn: "Moral corruption, heavy financial losses, disputes between partners, prolonged health crises.",
    impactTe: "కుటుంబంలో నైతిక పతనం, తీవ్ర ధన నష్టం, భాగస్వాముల మధ్య విబేధాలు, దీర్ఘకాలిక రోగాలు.",
    color: "#e11d48",
    score: 10,
    remedyEn: "Raise the boundary wall height, keep the master bedroom in SW solid, and ensure all drainage flows away to Northeast.",
    remedyTe: "పశ్చిమ ప్రహరీ గోడను ఎత్తుగా కట్టి, గేటు లేకుండా మూసివేయాలి. మురుగునీటి వాలు ఈశాన్యానికి వెళ్ళేలా చేయాలి."
  },
  {
    id: "nnw",
    nameEn: "North of Northwest (NNW) Street Focus",
    nameTe: "ఉత్తర వాయువ్య వీధి పోటు (NNW)",
    direction: "North",
    type: "baneful",
    typeEn: "Baneful / Agitating",
    typeTe: "అశుభ వీధి పోటు (శత్రువృద్ధి, మానసిక అశాంతి)",
    impactEn: "Multiplication of enemies, severe theft or deception, unprovoked litigation, mental disturbance and wandering.",
    impactTe: "శత్రువులు పెరగడం, నమ్మకద్రోహం, దొంగతనాల భయం, అకారణ కోర్టు కేసులు, మానసిక అశాంతి.",
    color: "#f43f5e",
    score: 25,
    remedyEn: "Do not place front gate here. Place front gate strictly in Northern Northeast (NNE). Provide solid buffer planting along NNW.",
    remedyTe: "ఇక్కడ గేటు పెట్టకూడదు. గేటును తప్పనిసరిగా ఉత్తర ఈశాన్యంలోనే (NNE) పెట్టాలి. వాయువ్యం వైపు గట్టి గోడ నిర్మించాలి."
  }
];

// --- 3. Set-Square Principle (Gunakam / మూల మట్టం - Page 299) ---
const GUNAKAM_CASES = [
  {
    id: "ne_ext",
    titleEn: "Northeast Extension",
    titleTe: "ఈశాన్యం మూల పెరగడం (అత్యంత శుభం)",
    type: "auspicious",
    verdictEn: "Highly Auspicious — The Only Permissible Extension",
    verdictTe: "పరమ శుభప్రదం — వాస్తులో అంగీకరించబడిన ఏకైక మూల పెరుగుదల",
    descEn: "According to Sri Thirupati Reddy, an extension in the Northeast corner (towards East or North) bestows boundless wealth, healthy children, intellectual eminence, and fame. No correction needed.",
    descTe: "తిరుపతిరెడ్డి గారి ప్రకారం ఈశాన్యం తూర్పు వైపు గానీ ఉత్తరం వైపు గానీ పెరిగితే అష్టైశ్వర్యాలు, వంశాభివృద్ధి, విశేష ఖ్యాతి కలుగుతాయి. దీనిని సరిచేయవలసిన అవసరం లేదు."
  },
  {
    id: "se_ext",
    titleEn: "Southeast Extension",
    titleTe: "ఆగ్నేయం మూల పెరగడం (అగ్ని భయం & కోర్టు కేసులు)",
    type: "inauspicious",
    verdictEn: "Severe Dosha — Agni Vikriti",
    verdictTe: "తీవ్ర దోషం — అగ్ని ప్రమాదాలు, శత్రు భయం, అనారోగ్యం",
    descEn: "SE corner extending beyond 90° right angle causes constant quarrels between spouses, fire hazards, and abdominal ailments. Thirupati Reddy's Gunakam rule: Carve a 90° right angle using a set-square; wall off the extra protruding triangular wedge and keep it outside the compound wall or sell it.",
    descTe: "ఆగ్నేయం 90 డిగ్రీల కంటే పెరిగితే దంపతుల మధ్య కలహాలు, అగ్ని ప్రమాదాలు, ఉదర రోగాలు వస్తాయి. పరిష్కారం: మూలమట్టం (గుణకం) పెట్టి 90 డిగ్రీలలో కాంపౌండ్ గోడ నిర్మించి, పెరిగిన త్రికోణ భాగాన్ని బయటకు వదిలేయాలి."
  },
  {
    id: "sw_ext",
    titleEn: "Southwest Extension",
    titleTe: "నైరుతి మూల పెరగడం (మహా వినాశనం)",
    type: "inauspicious",
    verdictEn: "Disastrous Dosha — Total Ruin",
    verdictTe: "మహా దోషం — కుటుంబ పెద్దకు ప్రాణహాని, ఆర్థిక పతనం",
    descEn: "An extended Southwest corner pulls the cosmic weight out of alignment, causing tragic downfalls, heavy debt traps, and incurable diseases. Thirupati Reddy's Gunakam rule: Square off the plot strictly at 90° and isolate the extended corner outside the boundary.",
    descTe: "నైరుతి మూల పెరిగితే కుటుంబ యజమానికి ప్రాణగండం, తీవ్ర రుణభారం, దివాలా తీసే ప్రమాదం ఉంది. పరిష్కారం: ఖచ్చితంగా 90 డిగ్రీల మూలమట్టం కొలతతో గోడ కట్టి, పెరిగిన భాగాన్ని ఇంటి ఆవరణ నుండి వేరుచేయాలి."
  },
  {
    id: "nw_ext",
    titleEn: "Northwest Extension",
    titleTe: "వాయువ్యం మూల పెరగడం (అస్థిరత & కోర్టు వివాదాలు)",
    type: "inauspicious",
    verdictEn: "Detrimental Dosha — Instability & Enmity",
    verdictTe: "అశుభ దోషం — నిరంతర అలజడి, శత్రుపీడ, స్థిరత్వం లోపించడం",
    descEn: "Extended Northwest brings excessive restless energy, wandering, endless court cases, and legal penalties. Correction: Rectify using Gunakam set-square to create a perfect rectangular living envelope.",
    descTe: "వాయువ్యం పెరిగితే కుటుంబంలో నిలకడ లేకపోవడం, అనవసర ఖర్చులు, కోర్టు కేసులు ఎదురవుతాయి. పరిష్కారం: గుణకం ద్వారా సరిచేసి స్థలాన్ని చతురస్రంగా లేదా దీర్ఘచతురస్రంగా మార్చాలి."
  },
  {
    id: "ne_cut",
    titleEn: "Northeast Cut",
    titleTe: "ఈశాన్యం మూల తగ్గడం / కట్ కావడం (సర్వనాశనం)",
    type: "inauspicious",
    verdictEn: "Catastrophic Dosha — Decapitation of Vastu Purusha",
    verdictTe: "అత్యంత ప్రమాదకర దోషం — సంతాన నష్టం, దీర్ఘకాలిక దారిద్య్రం",
    descEn: "Cutting the Northeast corner is equivalent to severing the head of the Vāstu Puruṣa. Causes loss of lineage, mental depression, and destitution. Thirupati Reddy insists: Purchase adjoining land to complete the corner or recess the other corners to restore the 90° Northeast.",
    descTe: "ఈశాన్యం కట్ కావడం అంటే వాస్తు పురుషుని తల నరకడంతో సమానం. దీనివల్ల వంశవృద్ధి ఆగడం, మానసిక రోగాలు, దారిద్య్రం వస్తాయి. పరిష్కారం: పక్క స్థలాన్ని కొని ఈశాన్యాన్ని పెంచాలి లేదా మిగిలిన మూలలను సరిచేసి ఈశాన్యానికి 90° కల్పించాలి."
  }
];

// --- 4. Site Classification & 4 Grades of Sites (Pages 61–63) ---
const SITE_GRADES_DATA = [
  {
    gradeEn: "First Grade Site (Deva Sthana)",
    gradeTe: "ప్రథమ శ్రేణి స్థలం (దేవ స్థానం)",
    featuresEn: [
      "Roads on all four sides, with East and North roads lower than South and West roads.",
      "Roads in East, North, and West, provided the West road is higher than East and North.",
      "Spacious site protruding into the street in Northern Northeast or Eastern Northeast.",
      "Surrounding ground sloping naturally down towards the Northeast."
    ],
    featuresTe: [
      "నాలుగు వైపులా రోడ్లు ఉండి, తూర్పు మరియు ఉత్తరపు రోడ్లు దక్షిణం, పడమర కంటే పల్లంగా ఉండటం.",
      "తూర్పు, ఉత్తర, పశ్చిమాలలో రోడ్లు ఉండి, పశ్చిమపు రోడ్డు మిగిలిన రోడ్ల కంటే ఎత్తుగా ఉండటం.",
      "ఉత్తర ఈశాన్యం లేదా తూర్పు ఈశాన్యంలో వీధిలోకి విస్తరించిన స్థలం.",
      "పరిసరాల నేల సహజంగా ఈశాన్యం వైపు వాలి ఉండటం."
    ],
    impactEn: "Unbroken generational wealth, political eminence, physical health, and supreme peace of mind.",
    impactTe: "తరతరాల సంపద, రాజకీయ ప్రాబల్యం, ఆయురారోగ్యాలు మరియు ప్రశాంతమైన జీవనం."
  },
  {
    gradeEn: "Second Grade Site (Subha Sthana)",
    gradeTe: "ద్వితీయ శ్రేణి స్థలం (శుభ స్థానం)",
    featuresEn: [
      "Roads in East and West, where the Eastern road is lower than the Western road.",
      "Roads in North and South, where the Northern road is lower than the Southern road.",
      "Road on Eastern side lower than the site, backed by multi-storied buildings in West and South.",
      "Road on North side lower than the site, backed by heavy structures in South."
    ],
    featuresTe: [
      "తూర్పు, పశ్చిమాలలో రోడ్లు ఉండి, తూర్పు రోడ్డు పశ్చిమ రోడ్డు కంటే పల్లంగా ఉండటం.",
      "ఉత్తర, దక్షిణాలలో రోడ్లు ఉండి, ఉత్తర రోడ్డు దక్షిణ రోడ్డు కంటే పల్లంగా ఉండటం.",
      "తూర్పున పల్లపు రోడ్డు ఉండి, పశ్చిమ మరియు దక్షిణాలలో ఎత్తైన మేడలు ఉండటం.",
      "ఉత్తరాన పల్లపు రోడ్డు ఉండి, దక్షిణాన దృఢమైన నిర్మాణాలు ఉండటం."
    ],
    impactEn: "Steady financial progress, harmonious family relations, and vocational success.",
    impactTe: "నిరంతర ఆర్థికాభివృద్ధి, కుటుంబ సామరస్యము మరియు వ్యాపార విజయం."
  },
  {
    gradeEn: "Third Grade Site (Madhyama Sthana)",
    gradeTe: "తృతీయ శ్రేణి స్థలం (మధ్యమ స్థానం)",
    featuresEn: [
      "Road in East, but blocked with hillocks or high buildings in North.",
      "Road in West only, without natural slope towards East.",
      "Roads on three sides, but the street in South or West is lower than the site.",
      "Corner site where East road joins a lower South road (creates drainage towards South)."
    ],
    featuresTe: [
      "తూర్పున రోడ్డు ఉన్నప్పటికీ, ఉత్తరాన ఎత్తైన కొండలు లేదా భవనాలు ఉండటం.",
      "పశ్చిమాన మాత్రమే రోడ్డు ఉండి, తూర్పు వైపు పల్లం లేకపోవడం.",
      "మూడు వైపులా రోడ్లు ఉండి, దక్షిణం లేదా పశ్చిమంలోని రోడ్డు స్థలం కంటే పల్లంగా ఉండటం.",
      "తూర్పు రోడ్డు దక్షిణపు రోడ్డుతో కలిసి, నీటి వాలు దక్షిణానికి వెళ్ళడం."
    ],
    impactEn: "Mixed results. Requires elevated compound masonry in South/West and borewell strictly in Northeast.",
    impactTe: "మిశ్రమ ఫలితాలు. దక్షిణం/పడమర గోడలను ఎత్తు చేసి, ఈశాన్యంలో బోరు వేయడం ద్వారా మాత్రమే శుభ ఫలితాలు వస్తాయి."
  },
  {
    gradeEn: "Fourth Grade Site (Adhama Sthana)",
    gradeTe: "చతుర్థ శ్రేణి స్థలం (అధమ స్థానం)",
    featuresEn: [
      "Roads in West and South lower than the site, while East or North roads are higher.",
      "High structures in North and East, suffocating solar prana and magnetic flux.",
      "Depressions, deep ditches, or open nallas in the Southwest or Southeast.",
      "Irregular triangular or sickle-shaped sites with severed Northeast."
    ],
    featuresTe: [
      "పశ్చిమ, దక్షిణపు రోడ్లు పల్లంగా ఉండి, తూర్పు, ఉత్తరపు రోడ్లు ఎత్తుగా ఉండటం.",
      "తూర్పు, ఉత్తరాలలో ఎత్తైన గోడలు ఉండి, గాలి-వెలుతురు ఆగిపోవడం.",
      "నైరుతి లేదా ఆగ్నేయంలో లోతైన గోతులు, మురుగు కాలువలు ఉండటం.",
      "ఈశాన్యం తెగిపోయిన త్రికోణపు లేదా కొడవలి ఆకారపు స్థలాలు."
    ],
    impactEn: "Severe chronic diseases, persistent debt traps, and litigation. Must be extensively rectified before construction.",
    impactTe: "తీవ్ర అనారోగ్యాలు, అప్పుల బాధలు, కోర్టు కేసులు. గుణకం మరియు మట్టి పూడ్చివేత ద్వారా పూర్తిగా సరిచేసిన తర్వాతే ఇల్లు కట్టాలి."
  }
];


// --- 5B. Comprehensive Household Items Placement Data (Pages 12, 13, 140–195, 201) ---
const HOUSEHOLD_ITEMS_DATA = [
  {
    "id": "cash_locker",
    "nameEn": "Cash & Jewelry Locker (Beroo)",
    "nameTe": "నగదు & బంగారు ఆభరణాల బీరువా (కుబేర లాకర్)",
    "category": "wealth",
    "categoryEn": "Wealth & Finances",
    "categoryTe": "ఆర్థికం & సంపద",
    "page": "Pages 12, 150",
    "idealLocationEn": "Southwest (Nairuthi) room, against South or West wall, door opening North (Kubera) or East.",
    "idealLocationTe": "నైరుతి గదిలో దక్షిణ లేదా పశ్చిమ గోడను ఆనుకుని, ఉత్తరం (కుబేర దిశ) లేదా తూర్పు వైపు తెరుచుకునేలా.",
    "forbiddenLocationEn": "Northeast (financial ruin), Southeast (fire burns savings), Northwest (floating expenses), Center (Brahmasthana).",
    "forbiddenLocationTe": "ఈశాన్యం (ఆర్థిక నష్టం), ఆగ్నేయం (అగ్నిలో సంపద హరింపు), వాయువ్యం (నిలకడలేని ఖర్చులు), బ్రహ్మస్థానం.",
    "whyEn": "Sri Thirupati Reddy explains on Page 150 that the Southwest (Nairuthi) represents the Earth element (Prithvi) of absolute stability and heaviness. When the locker is placed in Southwest facing North (Kubera direction), it continuously attracts wealth and permanently retains it. Opening toward South or placing in Northeast destroys financial stability.",
    "whyTe": "పుస్తకంలో 150వ పేజీలో గౌరు తిరుపతిరెడ్డి గారు వివరించిన ప్రకారం — నైరుతి స్థిరమైన పృథ్వీ తత్త్వానికి ప్రతీక. నైరుతిలో ఉంచిన బీరువా తలుపులు ఉత్తర కుబేర దిశ వైపు తెరుచుకుంటే ధనధాన్యాలు నిరంతరం స్థిరంగా వృద్ధి చెందుతాయి. ఈశాన్యంలో బరువు పెట్టినా లేదా ఆగ్నేయంలో ఉంచినా సంపద నిలవక తీవ్ర నష్టాలు కలుగుతాయి.",
    "placements": {
      "sw_north": {
        "status": "ideal",
        "textEn": "✅ Southwest room facing North (Supreme Kubera Alignment)",
        "textTe": "✅ నైరుతి గదిలో ఉత్తరం వైపు తెరుచుకునేలా (అత్యుత్తమ కుబేర స్థానం)"
      },
      "sw_east": {
        "status": "ideal",
        "textEn": "✅ Southwest room facing East (Auspicious Solar Alignment)",
        "textTe": "✅ నైరుతి గదిలో తూర్పు వైపు తెరుచుకునేలా (శుభప్రదమైన సౌర స్థానం)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West room / wall facing East (Acceptable Secondary)",
        "textTe": "⚠️ పశ్చిమ గది/గోడ వద్ద తూర్పు చూస్తూ (అనుమతించదగిన రెండవ స్థానం)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South room / wall facing North (Acceptable Stable)",
        "textTe": "⚠️ దక్షిణ గది/గోడ వద్ద ఉత్తరం చూస్తూ (అనుమతించదగిన స్థానం)"
      },
      "north": {
        "status": "acceptable",
        "textEn": "⚠️ North room daily cash drawer facing North (Daily Business Only)",
        "textTe": "⚠️ ఉత్తర గదిలో రోజువారీ వ్యాపార క్యాష్ డ్రాయర్ (రోజువారీ నగదుకు మాత్రమే)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Heavy Weight in Light Zone / Severe Financial Block)",
        "textTe": "❌ ఈశాన్యం (తేలికగా ఉండాల్సిన చోట భారీ బరువు / తీవ్ర ధన నష్టం)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East (Blocks Morning Solar Inflow / Unfavorable)",
        "textTe": "❌ తూర్పు (సూర్య కాంతిని అడ్డుకుంటుంది / ధన నష్టం)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya Fire Element Burns Savings & Multiplies Debts)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని తత్త్వంలో నగదు ఖర్చయి అప్పులపాలు చేస్తుంది)"
      },
      "nw": {
        "status": "forbidden",
        "textEn": "❌ Northwest (Vayuvya Wind Element / Floating & Unstable Wealth)",
        "textTe": "❌ వాయువ్యం (వాయు తత్త్వం వల్ల ధనం చేతిలో నిలవక ఖర్చవుతుంది)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Cosmic Navel Overloaded / Family Distress)",
        "textTe": "❌ బ్రహ్మస్థానము (కేంద్ర స్థానంపై భారం మోపడం తీవ్ర దోషం)"
      }
    }
  },
  {
    "id": "puja_mandir",
    "nameEn": "Puja Mandir / Deity Shrine & Altar",
    "nameTe": "పూజా మందిరం / దేవుని గది & పీఠం",
    "category": "worship",
    "categoryEn": "Worship & Spiritual",
    "categoryTe": "పూజ & ఆధ్యాత్మికం",
    "page": "Pages 12, 162",
    "idealLocationEn": "Northeast (Eshanya) or East. Devotees face East or West.",
    "idealLocationTe": "ఈశాన్యం (దేవతా స్థానం) లేదా తూర్పు. పూజించేవారు తూర్పు లేదా పశ్చిమం వైపు కూర్చోవాలి.",
    "forbiddenLocationEn": "Southwest (Nairuthi), Southeast, South, Northwest, Center, or Under Staircases.",
    "forbiddenLocationTe": "నైరుతి, ఆగ్నేయం, దక్షిణం, వాయువ్యం, బ్రహ్మస్థానం, మెట్ల క్రింది స్థలం.",
    "whyEn": "Pages 12 & 162 state that the Northeast is governed by Lord Shiva (Ishana) and Jupiter. It receives the purest morning infrared ultraviolet solar rays that stimulate higher consciousness. Placing deities in Southwest or under stairs commits grave sacrilege.",
    "whyTe": "పుస్తకంలో 12 మరియు 162 పేజీలలో తెలిపినట్లు — ఈశాన్య మూల ఈశానుడు మరియు బృహస్పతి స్థానం. ఇక్కడ ప్రాతఃకాల దివ్య సూర్యకిరణాలు ప్రసరించి సాత్విక శక్తిని నింపుతాయి. నైరుతిలో లేదా మెట్ల కింద పూజించడం తీవ్ర దోషకారణం.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast (Divine Eshanya Corner — Supreme Sanctity)",
        "textTe": "✅ ఈశాన్యం (దేవతా స్థానం — అత్యుత్తమ దైవిక శక్తి)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East (Poorva — Auspicious Solar Prana Alignment)",
        "textTe": "✅ తూర్పు (సౌర ప్రాణశక్తి ప్రసరించే శుభ స్థానం)"
      },
      "north": {
        "status": "acceptable",
        "textEn": "⚠️ North (Kubera Corridor — Permissible Secondary)",
        "textTe": "⚠️ ఉత్తరం (కుబేర దిశ — అనుమతించదగిన రెండవ స్థానం)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West (Devotees Facing East — Permissible)",
        "textTe": "⚠️ పశ్చిమం (తూర్పు చూస్తూ పూజించుటకు అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya Fire Overheats Devotion & Causes Temper Issues)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని స్థానంలో పూజించడం వల్ల కోపతాపాలు, ఉద్రేకాలు)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South (Yama Sthana / Mortuary Energy Incompatible with Deities)",
        "textTe": "❌ దక్షిణం (యమ స్థానం దైవారాధనకు అననుకూలం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Demon / Nairuthi Sthana — Severe Sacrilege)",
        "textTe": "❌ నైరుతి (రాక్షస కోణమైన నైరుతిలో పూజా మందిరం నిషిద్ధం)"
      },
      "nw": {
        "status": "forbidden",
        "textEn": "❌ Northwest (Vayuvya Wind Element Causes Wandering Restless Mind)",
        "textTe": "❌ వాయువ్యం (చలించే వాయు తత్త్వంలో మనస్సు నిలకడగా ఉండదు)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Open Hall Enclosed / Core Trampled)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో దేవాలయం కట్టి నడక అడ్డుకోవడం నిషిద్ధం)"
      },
      "understairs": {
        "status": "forbidden",
        "textEn": "❌ Under Staircase (Trampling Deities Underfoot — Severe Curse)",
        "textTe": "❌ మెట్ల కింద పూజా గది (పాదాలతో తొక్కే మెట్ల కింద దేవుళ్ళను ఉంచడం పాపం)"
      }
    }
  },
  {
    "id": "gas_stove",
    "nameEn": "Cooking Stove / Hearth & Gas Cylinder",
    "nameTe": "వంట పొయ్యి / గ్యాస్ స్టవ్ & సిలిండర్",
    "category": "kitchen",
    "categoryEn": "Kitchen & Fire Appliances",
    "categoryTe": "వంటగది & అగ్ని పరికరాలు",
    "page": "Pages 13, 159",
    "idealLocationEn": "Southeast corner (Agneya). Cook must strictly face East towards sunrise.",
    "idealLocationTe": "ఆగ్నేయ మూల (అగ్ని స్థానం). వంట చేసేవారు తప్పనిసరిగా తూర్పు వైపు చూడాలి.",
    "forbiddenLocationEn": "Northeast (Lethal Dosha), Southwest, North, West, Center.",
    "forbiddenLocationTe": "ఈశాన్యం (తీవ్ర అగ్ని-జల కలహం), నైరుతి, ఉత్తరం, పశ్చిమం, బ్రహ్మస్థానం.",
    "whyEn": "Page 159: Southeast is presided by Agni Deva. Facing East while cooking ensures the cook receives early morning infrared sunlight, preventing microbial growth in food and protecting the lady of the house from chronic female illnesses. Fire in Northeast clashes with Water causing family ruin.",
    "whyTe": "పుస్తకంలో 159వ పేజీ ప్రకారం — ఆగ్నేయం అగ్ని దేవుని స్థానం. తూర్పు చూస్తూ వంట చేయడం వల్ల ఉదయపు సూర్యకిరణాలు శరీరానికి, ఆహారానికి తగిలి గృహిణి ఆరోగ్యం బాగుంటుంది. ఈశాన్యంలో పొయ్యి పెడితే అగ్ని-జల కలహంతో ఆ ఇల్లు వినాశనమవుతుంది.",
    "placements": {
      "se_east": {
        "status": "ideal",
        "textEn": "✅ Southeast corner facing East (Prescribed Agneya Sthana)",
        "textTe": "✅ ఆగ్నేయం తూర్పు చూస్తూ వండడం (శాస్త్ర సమ్మతమైన ఉత్తమ స్థానం)"
      },
      "nw_east": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest (Vayuvya) kitchen facing East (Permissible Alternative)",
        "textTe": "⚠️ వాయువ్య వంటగదిలో తూర్పు చూస్తూ (అనుమతించదగిన రెండవ ఎంపిక)"
      },
      "east": {
        "status": "acceptable",
        "textEn": "⚠️ East wall facing East (Permissible Morning Sun)",
        "textTe": "⚠️ తూర్పు గోడ వద్ద తూర్పు చూస్తూ (అనుమతించదగినది)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Agni in Water Corner — Lethal Dosha & Poverty)",
        "textTe": "❌ ఈశాన్యం (జల స్థానంలో అగ్ని — తీవ్ర దారిద్య్రం, అనారోగ్యం)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North (Fire in Kubera Water Direction Burns Cash Flow)",
        "textTe": "❌ ఉత్తరం (కుబేర దిశలో అగ్ని ధన ప్రవాహాన్ని బూడిద చేస్తుంది)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Destroys Master's Health & Causes Incurable Ailments)",
        "textTe": "❌ నైరుతి (యజమాని ఆరోగ్యాన్ని నాశనం చేసి దీర్ఘరోగాలను తెస్తుంది)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South wall / Cook facing South (Yama Direction Ailments)",
        "textTe": "❌ దక్షిణం వైపు ముఖం పెట్టి వంట చేయడం (యమ దిశ వల్ల గృహిణికి రోగాలు)"
      },
      "west": {
        "status": "forbidden",
        "textEn": "❌ West wall / Cook facing West (Evening Sun Spoils Food & Causes Eye Strain)",
        "textTe": "❌ పశ్చిమం చూస్తూ వండడం (కంటి జబ్బులు, ఆహార కాలుష్యం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Fire in Cosmic Navel Causes Heart Disease)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో పొయ్యి గుండెజబ్బులకు కారణం)"
      }
    }
  },
  {
    "id": "bed_cot",
    "nameEn": "Bed & Master Cot (Sleeping Alignment)",
    "nameTe": "పడక మంచం & శయన దిశ",
    "category": "furniture",
    "categoryEn": "Furniture & Bedding",
    "categoryTe": "ఫర్నిచర్ & నివాసం",
    "page": "Pages 13, 166",
    "idealLocationEn": "Southwest (Nairuthi) master room, resting against South or West wall. Head strictly South or East.",
    "idealLocationTe": "నైరుతి యజమాని పడకగదిలో, దక్షిణం లేదా పశ్చిమ గోడను ఆనుకుని. తల దక్షిణం లేదా తూర్పుకు పెట్టాలి.",
    "forbiddenLocationEn": "Head to North (Severe Dosha), Northeast room, Center of room, under exposed concrete beams.",
    "forbiddenLocationTe": "ఉత్తరం వైపు తల (తీవ్ర అయస్కాంత వికర్షణ), ఈశాన్య గది, గది మధ్యలో, పైకప్పు దూలం కింద.",
    "whyEn": "Page 166: The human body is a magnet with head as North pole and feet as South pole. Sleeping with head to North causes magnetic repulsion with Earth's magnetic North, triggering sleep apnea, high BP, and nervous tension. Sleeping with head South brings deep restorative sleep and longevity.",
    "whyTe": "పుస్తకంలో 166వ పేజీ ప్రకారం — మానవ శరీరం ఒక అయస్కాంతం. శిరస్సు ఉత్తర ధ్రువం, పాదాలు దక్షిణ ధ్రువం. ఉత్తరం వైపు తల పెట్టి పడుకుంటే భూ అయస్కాంత వికర్షణ వల్ల రక్తపోటు, గుండె దడ, నిద్రలేమి వస్తాయి. దక్షిణం వైపు తల పెడితే ఆయుష్షు, ప్రశాంతత లభిస్తాయి.",
    "placements": {
      "sw_head_south": {
        "status": "ideal",
        "textEn": "✅ Southwest room with Head to South (Supreme Bio-Magnetic Longevity)",
        "textTe": "✅ నైరుతి గదిలో దక్షిణం తల పెట్టి పడుకోవడం (అత్యుత్తమ శయన స్థానం)"
      },
      "head_east": {
        "status": "ideal",
        "textEn": "✅ Head to East (Spiritual Wisdom & Deep Mental Rejuvenation)",
        "textTe": "✅ తూర్పు తల పెట్టి పడుకోవడం (మేధాశక్తి, జ్ఞానం & మానసిక ప్రశాంతత)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South room bed touching South wall (Acceptable Heavy Sleep)",
        "textTe": "⚠️ దక్షిణ గదిలో దక్షిణం గోడను ఆనుకుని (అనుమతించదగినది)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West room (Children / Guests) with Head to West/South (Acceptable)",
        "textTe": "⚠️ పశ్చిమ గదిలో పిల్లల/అతిథుల మంచం (అనుమతించదగినది)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest room (Guests / Unmarried Daughters) (Acceptable)",
        "textTe": "⚠️ వాయువ్య గదిలో అతిథులు/కన్యల మంచం (అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast room (Agneya Insomnia, High Blood Pressure & Marital Spats)",
        "textTe": "❌ ఆగ్నేయ గదిలో పడక (అగ్ని వేడి వల్ల నిద్రలేమి, భార్యాభర్తల గొడవలు)"
      },
      "head_north": {
        "status": "forbidden",
        "textEn": "❌ Head to North (Bio-Magnetic Repulsion — Severe Chronic Illness & Insomnia)",
        "textTe": "❌ ఉత్తరం వైపు తల పెట్టడం (అయస్కాంత వికర్షణ వల్ల రక్తపోటు & అనారోగ్యం)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast room (Eshanya is Divine Light Zone / Not for Sexual Bed)",
        "textTe": "❌ ఈశాన్యంలో దంపతుల పడకగది (దేవతా స్థానంలో దాంపత్యం తీవ్ర దోషం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center of Room or Brahmasthana (Core Trampled / Restless Floating)",
        "textTe": "❌ గది మధ్యలో లేదా బ్రహ్మస్థానంలో మంచం (కేంద్ర స్థానంలో నిద్రలేమి)"
      }
    }
  },
  {
    "id": "wardrobes",
    "nameEn": "Wardrobes, Almirahs & Heavy Storage Cabinets",
    "nameTe": "బట్టల బీరువాలు & భారీ స్టోరేజ్ అల్మారాలు",
    "category": "furniture",
    "categoryEn": "Furniture & Bedding",
    "categoryTe": "ఫర్నిచర్ & నివాసం",
    "page": "Pages 12, 150",
    "idealLocationEn": "South and West walls of Southwest bedroom.",
    "idealLocationTe": "నైరుతి పడకగదిలోని దక్షిణ మరియు పశ్చిమ గోడలను ఆనుకుని.",
    "forbiddenLocationEn": "Northeast, East, North walls, Center (Brahmasthana).",
    "forbiddenLocationTe": "ఈశాన్యం, తూర్పు, ఉత్తర గోడలు, బ్రహ్మస్థానం.",
    "whyEn": "Page 150: Heavy furniture must always anchor the South and West boundaries to maintain the natural gravitational balance of higher Nairuthi and lower Eshanya. Placing heavy almirahs along North or East walls blocks cosmic prana.",
    "whyTe": "పుస్తకంలో 150వ పేజీ ప్రకారం — భారీ అల్మారాలు, బట్టల బీరువాలు ఎల్లప్పుడూ దక్షిణం, పశ్చిమ గోడలకే ఆనించాలి. దీనివల్ల నైరుతి బరువు పెరిగి శుభం కలుగుతుంది. తూర్పు, ఉత్తర గోడల వద్ద బరువులు పెడితే గాలి, వెలుతురు ఆగిపోయి అనర్థాలు వస్తాయి.",
    "placements": {
      "sw": {
        "status": "ideal",
        "textEn": "✅ Southwest corner against South/West walls (Maximum Stability)",
        "textTe": "✅ నైరుతి మూలలో దక్షిణ/పశ్చిమ గోడలకు ఆనించి (గరిష్ఠ స్థిరత్వం)"
      },
      "south": {
        "status": "ideal",
        "textEn": "✅ South walls (Anchors Heavy Planetary Mass)",
        "textTe": "✅ దక్షిణ గోడలను ఆనుకుని (దక్షిణ భాగాన్ని బరువుగా ఉంచుతుంది)"
      },
      "west": {
        "status": "ideal",
        "textEn": "✅ West walls (Blocks Afternoon Solar Heat)",
        "textTe": "✅ పశ్చిమ గోడలను ఆనుకుని (మధ్యాహ్నపు తీవ్ర ఎండను నిరోధిస్తుంది)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest (Secondary Storage if SW is full)",
        "textTe": "⚠️ వాయువ్యం (నైరుతి నిండినప్పుడు రెండవ ఎంపికగా)"
      },
      "se": {
        "status": "acceptable",
        "textEn": "⚠️ Southeast South wall (Permissible if kept away from stove)",
        "textTe": "⚠️ ఆగ్నేయంలో దక్షిణ గోడ వద్ద (పొయ్యికి దూరంగా ఉంటే అనుమతించదగినది)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East wall (Blocks Morning Solar Rays)",
        "textTe": "❌ తూర్పు గోడ (ఉదయపు సూర్యకాంతిని అడ్డుకుంటుంది)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North wall (Blocks Kubera Magnetic Flow)",
        "textTe": "❌ ఉత్తర గోడ (కుబేర అయస్కాంత ప్రవాహాన్ని అడ్డుకుంటుంది)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Crushes Eshanya / Financial & Health Calamity)",
        "textTe": "❌ ఈశాన్యం (తేలికగా ఉండాల్సిన ఈశాన్యంపై భారీ భారం / తీవ్ర దోషం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Overburdened)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో భారీ బీరువాలు నిషిద్ధం)"
      }
    }
  },
  {
    "id": "fridge",
    "nameEn": "Refrigerator / Refrigerator Unit",
    "nameTe": "రిఫ్రిజిరేటర్ / ఫ్రిడ్జ్",
    "category": "kitchen",
    "categoryEn": "Kitchen & Fire Appliances",
    "categoryTe": "వంటగది & అగ్ని పరికరాలు",
    "page": "Pages 13, 168",
    "idealLocationEn": "Northwest (Vayuvya) or Southeast (away from cooking hearth).",
    "idealLocationTe": "వాయువ్యం (చలనం & శీతలీకరణ) లేదా ఆగ్నేయం (పొయ్యికి దూరంగా).",
    "forbiddenLocationEn": "Northeast, Southwest corner, Center.",
    "forbiddenLocationTe": "ఈశాన్యం, నైరుతి మూల, బ్రహ్మస్థానం.",
    "whyEn": "Page 168: Refrigerators combine heat generation (compressor motor) and cooling preservation. Northwest (Vayuvya) is the wind zone promoting fresh preservation and circulation. Southeast is also suitable as electrical quadrant, provided it is kept at least 3 feet away from gas stove.",
    "whyTe": "పుస్తకంలో 168వ పేజీ ప్రకారం — ఫ్రిడ్జ్ మోటారు వేడిని మరియు లోపల శీతలాన్ని కలిగి ఉంటుంది. వాయువ్య మూల చలనానికి, నిల్వకు అనుకూలం. ఆగ్నేయంలో కూడా పొయ్యికి కనీసం 3 అడుగుల దూరంలో ఉంచవచ్చు. ఈశాన్యంలో ఉంచితే మోటారు కంపనాలు ప్రశాంతతను చెడగొడతాయి.",
    "placements": {
      "nw": {
        "status": "ideal",
        "textEn": "✅ Northwest (Vayuvya — Wind Element Fresh Preservation)",
        "textTe": "✅ వాయువ్యం (వాయు తత్త్వంలో ఆహారం తాజాగా నిల్వ ఉంటుంది)"
      },
      "se": {
        "status": "ideal",
        "textEn": "✅ Southeast (Electrical Hub away from direct gas flame)",
        "textTe": "✅ ఆగ్నేయం (గ్యాస్ పొయ్యికి దూరంగా విద్యుత్ మూలలో)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West wall of dining area (Acceptable)",
        "textTe": "⚠️ డైనింగ్ హాలులో పశ్చిమ గోడ వద్ద (అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South wall (Acceptable heavy electrical spot)",
        "textTe": "⚠️ దక్షిణ గోడ వద్ద (అనుమతించదగినది)"
      },
      "north": {
        "status": "acceptable",
        "textEn": "⚠️ North of kitchen away from Northeast corner",
        "textTe": "⚠️ వంటగది ఉత్తరంలో ఈశాన్య మూలకు తాకకుండా (మధ్యమం)"
      },
      "east": {
        "status": "acceptable",
        "textEn": "⚠️ East wall away from Northeast corner",
        "textTe": "⚠️ తూర్పు గోడ వద్ద ఈశాన్య మూలకు తాకకుండా (మధ్యమం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest corner (Compressor heat disrupts master's calm)",
        "textTe": "❌ నైరుతి మూల (ఫ్రిడ్జ్ మోటారు వేడి యజమాని శాంతిని దెబ్బతీస్తుంది)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Heavy motor obstruction in Eshanya)",
        "textTe": "❌ ఈశాన్యం (పవిత్ర దేవతా స్థానంలో భారీ మోటారు నిషిద్ధం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Appliance)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో ఫ్రిడ్జ్ ఉంచకూడదు)"
      }
    }
  },
  {
    "id": "washing_machine",
    "nameEn": "Washing Machine & Laundry Utility",
    "nameTe": "వాషింగ్ మెషిన్ & లాండ్రీ వాష్ ఏరియా",
    "category": "kitchen",
    "categoryEn": "Kitchen & Fire Appliances",
    "categoryTe": "వంటగది & అగ్ని పరికరాలు",
    "page": "Pages 13, 169",
    "idealLocationEn": "Northwest (Vayuvya) utility setback or Southeast utility.",
    "idealLocationTe": "వాయువ్యంలో వాష్ ఏరియా లేదా ఆగ్నేయ యుటిలిటీ.",
    "forbiddenLocationEn": "Northeast, Southwest, Center.",
    "forbiddenLocationTe": "ఈశాన్యం, నైరుతి, బ్రహ్మస్థానం.",
    "whyEn": "Page 169: Laundry involves churning motion, electricity, and wastewater drainage. Northwest (air and motion) is ideal. Southeast is acceptable for motor power. Discharging dirty laundry water in Northeast destroys spiritual purity.",
    "whyTe": "పుస్తకంలో 169వ పేజీ ప్రకారం — బట్టలు ఉతకడంలో విద్యుత్, నీరు, చలనం మరియు మురికినీరు ఉంటాయి. వాయువ్యం చలనానికి అనుకూలం కాబట్టి వాషింగ్ మెషిన్‌కు ఉత్తమం. ఈశాన్యంలో మురికినీరు పారడం తీవ్ర దోషకారణం.",
    "placements": {
      "nw": {
        "status": "ideal",
        "textEn": "✅ Northwest utility / setback (Air, Motion & Drainage Harmony)",
        "textTe": "✅ వాయువ్యం (గాలి, చలనం & మురుగునీటి నిష్క్రమణకు అత్యుత్తమం)"
      },
      "se": {
        "status": "ideal",
        "textEn": "✅ Southeast utility (Motor Fire Element Harmony)",
        "textTe": "✅ ఆగ్నేయం యుటిలిటీ (మోటారు విద్యుత్ అనుకూలం)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West utility area (Permissible)",
        "textTe": "⚠️ పశ్చిమ యుటిలిటీ భాగం (అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South setback utility (Permissible)",
        "textTe": "⚠️ దక్షిణ సెట్‌బ్యాక్ యుటిలిటీ (అనుమతించదగినది)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North indoor area (Suds and dirty water in Kubera path)",
        "textTe": "❌ ఉత్తర భాగం (కుబేర మార్గంలో మురికినీరు నిషిద్ధం)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East indoor area (Dampness blocks morning sun)",
        "textTe": "❌ తూర్పు లోపలి భాగం (తేమ ఉదయపు కాంతిని తగ్గిస్తుంది)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Dampness & churning vibrations weaken foundation)",
        "textTe": "❌ నైరుతి (వైబ్రేషన్స్ మరియు నీరు నైరుతి స్థిరత్వాన్ని దెబ్బతీస్తాయి)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Impure wastewater discharges in Divine Eshanya)",
        "textTe": "❌ ఈశాన్యం (దేవతా స్థానంలో మురికి బట్టలు మరియు మురుగునీరు తీవ్ర దోషం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Laundry)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో వాషింగ్ మెషిన్ నిషిద్ధం)"
      }
    }
  },
  {
    "id": "tv_audio",
    "nameEn": "Television, Home Theatre & Sound System",
    "nameTe": "టెలివిజన్, హోమ్ థియేటర్ & సౌండ్ సిస్టమ్",
    "category": "electronics",
    "categoryEn": "Electrical & Electronics",
    "categoryTe": "విద్యుత్ & ఎలక్ట్రానిక్స్",
    "page": "Pages 13, 168",
    "idealLocationEn": "Southeast corner of living hall. Screen placed on North or East wall so viewers face North or East.",
    "idealLocationTe": "హాలులో ఆగ్నేయ భాగం లేదా ఉత్తర/తూర్పు గోడపై టీవీ పెట్టి చూసేవారు ఉత్తరం లేదా తూర్పుకు చూడాలి.",
    "forbiddenLocationEn": "Southwest, Northeast corner, Center, directly in front of bed.",
    "forbiddenLocationTe": "నైరుతి, ఈశాన్య మూల, బ్రహ్మస్థానం, పడకకు ఎదురుగా.",
    "whyEn": "Page 168: Electronics emit electromagnetic heat (Agni). Southeast aligns with Agni. Viewers facing North or East absorb positive magnetic waves while relaxing. Placing in Northeast causes agitation; in bedroom facing bed ruins marital intimacy.",
    "whyTe": "పుస్తకంలో 168వ పేజీ ప్రకారం — టీవీ ఎలక్ట్రానిక్ అగ్ని తత్త్వానికి చెందినది. ఆగ్నేయంలో లేదా ఉత్తర గోడపై పెట్టి తూర్పు/ఉత్తరం చూస్తూ చూడటం శుభం. ఈశాన్యంలో టీవీ పెడితే ఇంట్లో ఎప్పుడూ గొడవలు, అశాంతి ఉంటాయి.",
    "placements": {
      "se": {
        "status": "ideal",
        "textEn": "✅ Southeast living room zone (Electrical Agni Alignment)",
        "textTe": "✅ హాలులోని ఆగ్నేయ భాగం (విద్యుత్ అగ్ని తత్త్వానికి అనుకూలం)"
      },
      "north_wall": {
        "status": "ideal",
        "textEn": "✅ North wall mounting (Viewers relax facing North Kubera direction)",
        "textTe": "✅ ఉత్తర గోడపై అమర్చడం (వీక్షకులు ఉత్తరం చూస్తూ ప్రశాంతంగా ఉంటారు)"
      },
      "east_wall": {
        "status": "ideal",
        "textEn": "✅ East wall mounting (Viewers relax facing East Solar direction)",
        "textTe": "✅ తూర్పు గోడపై అమర్చడం (వీక్షకులు తూర్పు చూస్తూ కూర్చుంటారు)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest living zone (Acceptable entertainment area)",
        "textTe": "⚠️ వాయువ్య హాలు భాగం (వినోదానికి అనుమతించదగినది)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West wall mounting (Acceptable)",
        "textTe": "⚠️ పశ్చిమ గోడపై అమర్చడం (అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South wall mounting (Acceptable)",
        "textTe": "⚠️ దక్షిణ గోడపై అమర్చడం (అనుమతించదగినది)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Excessive screen time erodes master's leadership & sleep)",
        "textTe": "❌ నైరుతి (యజమాని నాయకత్వ లక్షణాలు మరియు ఆరోగ్యం దెబ్బతింటాయి)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast corner (Electromagnetic noise disturbs Eshanya serenity)",
        "textTe": "❌ ఈశాన్య మూల (ఈశాన్య శాంతిని శబ్దం మరియు రేడియేషన్ చెడగొడతాయి)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Enclosed by Loud Media)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో మీడియా పరికరాలు నిషిద్ధం)"
      }
    }
  },
  {
    "id": "study_desk",
    "nameEn": "Study Desk, Student Table & Book Rack",
    "nameTe": "స్టడీ టేబుల్, చదువుకునే బల్ల & పుస్తకాల రాక్",
    "category": "furniture",
    "categoryEn": "Furniture & Bedding",
    "categoryTe": "ఫర్నిచర్ & నివాసం",
    "page": "Pages 15, 171",
    "idealLocationEn": "Northeast, East, or North room. Student must strictly face East or North while studying.",
    "idealLocationTe": "ఈశాన్యం, తూర్పు లేదా ఉత్తర గది. చదువుకునే విద్యార్థి తప్పనిసరిగా తూర్పు లేదా ఉత్తరం వైపు చూడాలి.",
    "forbiddenLocationEn": "Under exposed beams, South wall facing South, Southwest corner, Center.",
    "forbiddenLocationTe": "పైకప్పు దూలం కింద, దక్షిణం చూస్తూ, నైరుతి మూల, బ్రహ్మస్థానం.",
    "whyEn": "Page 171: Facing East taps into solar mental clarity; facing North taps into geomagnetic memory retention. Heavy books should be kept against South/West walls of study room, while desk remains light and open to North/East.",
    "whyTe": "పుస్తకంలో 171వ పేజీ ప్రకారం — విద్యార్థి తూర్పు చూస్తూ చదివితే జ్ఞాపకశక్తి, ఉత్తరం చూస్తే ఏకాగ్రత పెరుగుతాయి. పుస్తకాల బరువును గదిలోని దక్షిణ, పశ్చిమ గోడలకు పెట్టాలి. దక్షిణం వైపు ముఖం పెట్టి చదివితే నిద్రమత్తు, మతిమరుపు వస్తాయి.",
    "placements": {
      "ne_east": {
        "status": "ideal",
        "textEn": "✅ Northeast room facing East (Supreme Mental Clarity & Memory)",
        "textTe": "✅ ఈశాన్య గదిలో తూర్పు చూస్తూ చదవడం (అత్యుత్తమ ఏకాగ్రత & జ్ఞాపకశక్తి)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ Student facing North (Kubera Geomagnetic Focus & Analytical Power)",
        "textTe": "✅ ఉత్తరం చూస్తూ చదవడం (అయస్కాంత ఏకాగ్రత & విశ్లేషణా శక్తి)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ Student facing East (Solar Prana Energizes Brain Cells)",
        "textTe": "✅ తూర్పు చూస్తూ చదవడం (సూర్యశక్తి మేధస్సును పెంచుతుంది)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West room with student facing East (Permissible for older students)",
        "textTe": "⚠️ పశ్చిమ గదిలో తూర్పు చూస్తూ కూర్చోవడం (ఉన్నత విద్యార్థులకు మంచిది)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest room facing North (Permissible)",
        "textTe": "⚠️ వాయువ్య గదిలో ఉత్తరం చూస్తూ చదవడం (అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya restlessness, aggression & short attention span)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని తీవ్రత వల్ల ఏకాగ్రత లోపించి కోపం పెరుగుతుంది)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ Student facing South (Yama Direction causes lethargy & forgetfulness)",
        "textTe": "❌ దక్షిణం చూస్తూ చదవడం (యమ దిశ వల్ల మతిమరుపు, నిద్రమత్తు)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest room for young students (Creates stubbornness & insubordination)",
        "textTe": "❌ నైరుతిలో విద్యార్థుల గది (పిల్లల్లో మొండితనం, విధేయత లోపించడం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core of house distracts concentration)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో చదువు ఏకాగ్రతను దెబ్బతీస్తుంది)"
      }
    }
  },
  {
    "id": "dining_table",
    "nameEn": "Dining Table & Dining Area",
    "nameTe": "డైనింగ్ టేబుల్ & భోజన స్థలం",
    "category": "furniture",
    "categoryEn": "Furniture & Bedding",
    "categoryTe": "ఫర్నిచర్ & నివాసం",
    "page": "Pages 16, 170",
    "idealLocationEn": "West or Northwest dining hall. Diners must face East or North.",
    "idealLocationTe": "పశ్చిమం లేదా వాయువ్య డైనింగ్ హాలు. భోజనం చేసేవారు తూర్పు లేదా ఉత్తరం వైపు చూడాలి.",
    "forbiddenLocationEn": "Center (Brahmasthana), Southwest, diners facing South.",
    "forbiddenLocationTe": "బ్రహ్మస్థానం, నైరుతి, దక్షిణం చూస్తూ భోజనం చేయడం.",
    "whyEn": "Page 170: The West corresponds to Varuna (water and nourishment). Diners facing East receive morning solar prana which stimulates digestive fire (Jataragni). Diners facing South suffer indigestion and physical debility.",
    "whyTe": "పుస్తకంలో 170వ పేజీ ప్రకారం — పశ్చిమ భాగం వరుణ స్థానం, ఆహార స్వీకారానికి ఉత్తమం. తూర్పు చూస్తూ భోజనం చేస్తే జీర్ణక్రియ (జఠరాగ్ని) బాగా పనిచేసి ఆరోగ్యం కలుగుతుంది. దక్షిణం చూస్తూ తింటే అనారోగ్యాలు, అజీర్తి వస్తాయి.",
    "placements": {
      "west_face_east": {
        "status": "ideal",
        "textEn": "✅ West dining hall with diners facing East (Supreme Jataragni Digestion)",
        "textTe": "✅ పశ్చిమ డైనింగ్ హాలులో తూర్పు చూస్తూ భోజనం చేయడం (అత్యుత్తమ జీర్ణక్రియ)"
      },
      "nw_face_north": {
        "status": "ideal",
        "textEn": "✅ Northwest dining hall with diners facing North (Auspicious Vitality)",
        "textTe": "✅ వాయువ్య హాలులో ఉత్తరం చూస్తూ భోజనం (శుభప్రదమైన ఆరోగ్యం)"
      },
      "east": {
        "status": "acceptable",
        "textEn": "⚠️ East dining area facing East (Acceptable)",
        "textTe": "⚠️ తూర్పు డైనింగ్ ఏరియాలో తూర్పు చూస్తూ (అనుమతించదగినది)"
      },
      "north": {
        "status": "acceptable",
        "textEn": "⚠️ North dining area facing East/North (Acceptable)",
        "textTe": "⚠️ ఉత్తర డైనింగ్ ఏరియాలో తూర్పు/ఉత్తరం చూస్తూ (అనుమతించదగినది)"
      },
      "ne": {
        "status": "acceptable",
        "textEn": "⚠️ Northeast (Only if kept ultra-clean & free of discarded food waste)",
        "textTe": "⚠️ ఈశాన్యం (ఎంగిలి ఆకులు లేకుండా అత్యంత శుభ్రంగా ఉంచితేనే)"
      },
      "se": {
        "status": "acceptable",
        "textEn": "⚠️ Southeast dining annex near kitchen (Permissible if facing East)",
        "textTe": "⚠️ ఆగ్నేయం వంటగది అనుసంధాన డైనింగ్ (తూర్పు చూస్తే అనుమతించదగినది)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ Diners facing South (Yama Direction causes chronic indigestion & fatigue)",
        "textTe": "❌ దక్షిణం చూస్తూ తినడం (యమ దిశ వల్ల జీర్ణ సమస్యలు, అలసట)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest corner (Heavy dining table clutters master's private domain)",
        "textTe": "❌ నైరుతి మూల (యజమాని స్థానంలో డైనింగ్ టేబుల్ అశాంతిని తెస్తుంది)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Food crumbs & eating in Cosmic Navel is prohibited)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో ఎంగిలి పడటం తీవ్ర వాస్తు దోషం)"
      }
    }
  },
  {
    "id": "inverter_generator",
    "nameEn": "Inverter, Battery Backup & Power Generator",
    "nameTe": "ఇన్వర్టర్, బ్యాటరీ & విద్యుత్ జనరేటర్",
    "category": "electronics",
    "categoryEn": "Electrical & Electronics",
    "categoryTe": "విద్యుత్ & ఎలక్ట్రానిక్స్",
    "page": "Pages 13, 159",
    "idealLocationEn": "Southeast (Agneya) electrical hub. Secondary: Northwest.",
    "idealLocationTe": "ఆగ్నేయం (అగ్ని స్థానం). రెండవ ఎంపిక: వాయువ్యం.",
    "forbiddenLocationEn": "Northeast (Lethal fire/acid in water), Southwest, Center.",
    "forbiddenLocationTe": "ఈశాన్యం (జల స్థానంలో యాసిడ్/విద్యుత్ తీవ్ర దోషం), నైరుతి, బ్రహ్మస్థానం.",
    "whyEn": "Page 159: Chemical batteries, transformers, and inverters embody concentrated Agni. Agneya is their cosmic home. Placing batteries with sulfuric acid in Northeast contaminates Eshanya prana and invites financial ruin.",
    "whyTe": "పుస్తకంలో 159వ పేజీ ప్రకారం — ఇన్వర్టర్లు, బ్యాటరీలు, జనరేటర్లు తీవ్రమైన అగ్ని మరియు రసాయన శక్తిని కలిగి ఉంటాయి. ఆగ్నేయమే వీటికి సహజ స్థానం. ఈశాన్యంలో బ్యాటరీ పెడితే కుటుంబంలో నిరంతర ఆపదలు, కోర్టు కేసులు వస్తాయి.",
    "placements": {
      "se": {
        "status": "ideal",
        "textEn": "✅ Southeast (Natural Cosmic Abode of Electrical Fire)",
        "textTe": "✅ ఆగ్నేయం (విద్యుత్ అగ్ని తత్త్వానికి సహజ సిద్ధమైన శుభ స్థానం)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest (Permissible secondary electrical ventilation spot)",
        "textTe": "⚠️ వాయువ్యం (గాలి ప్రసారమున్న రెండవ అనుమతించదగిన స్థానం)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South wall electrical niche (Acceptable)",
        "textTe": "⚠️ దక్షిణ గోడ వద్ద విద్యుత్ నిచ్ (అనుమతించదగినది)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West wall utility niche (Acceptable)",
        "textTe": "⚠️ పశ్చిమ గోడ వద్ద యుటిలిటీ నిచ్ (అనుమతించదగినది)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East (Chemical heat blocks pristine morning sunrise prana)",
        "textTe": "❌ తూర్పు (రసాయన వేడి ఉదయపు సౌర ప్రాణశక్తిని కలుషితం చేస్తుంది)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North (Electrical heat burns Kubera water energy)",
        "textTe": "❌ ఉత్తరం (కుబేర జల ప్రవాహంలో వేడి తీవ్ర ధన నష్టాన్ని తెస్తుంది)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Vibrating generator damages house structural stability)",
        "textTe": "❌ నైరుతి (జనరేటర్ శబ్దం, కంపనాలు యజమాని ఆరోగ్యాన్ని దెబ్బతీస్తాయి)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Acid battery in divine water corner — Fatal Misfortune)",
        "textTe": "❌ ఈశాన్యం (దేవతా స్థానంలో బ్యాటరీ యాసిడ్ తీవ్ర దారిద్య్ర కారకం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Chemical Heat)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో ఇన్వర్టర్ పెట్టడం తీవ్ర నిషిద్ధం)"
      }
    }
  },
  {
    "id": "medicines",
    "nameEn": "Medicines & First Aid Storage Box",
    "nameTe": "మందుల పెట్టె & ప్రథమ చికిత్స బాక్స్",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 18, 199",
    "idealLocationEn": "Northeast (Eshanya) or North wall cabinet.",
    "idealLocationTe": "ఈశాన్యం లేదా ఉత్తర గోడ అల్మారా.",
    "forbiddenLocationEn": "Southeast (Fire worsens fevers), Southwest (creates chronic dependency), Center.",
    "forbiddenLocationTe": "ఆగ్నేయం (జ్వరాలు, వ్యాధులు పెంచుతుంది), నైరుతి (మందుల వ్యసనం/దీర్ఘరోగం), బ్రహ్మస్థానం.",
    "whyEn": "Page 199: Medicines placed in Northeast absorb beneficial infrared and ultraviolet rays that preserve chemical potency and accelerate biological healing. Keeping medicines in Southeast inflames diseases; in Southwest creates perpetual reliance on drugs.",
    "whyTe": "పుస్తకంలో 199వ పేజీ ప్రకారం — ఈశాన్యంలో ఉంచిన ఔషధాలు సూర్య రశ్మి ప్రభావం వల్ల రోగ నిరోధక శక్తిని పెంచి త్వరగా నయం చేస్తాయి. ఆగ్నేయంలో మందులు పెడితే రోగాలు తిరగబెడతాయి; నైరుతిలో పెడితే జీవితాంతం మందులు మింగాల్సి వస్తుంది.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast wall cabinet (Infrared Solar Rays Accelerate Healing)",
        "textTe": "✅ ఈశాన్య గోడ అల్మారా (సూర్య కిరణాల వల్ల వ్యాధులు త్వరగా నయమవుతాయి)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ North wall cabinet (Kubera Vital Health & Wellness Alignment)",
        "textTe": "✅ ఉత్తర గోడ అల్మారా (ఆరోగ్యం & శ్రేయస్సుకు అనుకూలం)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East wall cabinet (Sun God Surya is the Healer of All Diseases)",
        "textTe": "✅ తూర్పు గోడ అల్మారా (సూర్య భగవానుడు సర్వరోగ నివారిణి)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest (Permissible temporary medicine kit)",
        "textTe": "⚠️ వాయువ్యం (తాత్కాలిక ప్రథమ చికిత్స బాక్స్‌కు అనుమతించదగినది)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West wall cabinet (Acceptable)",
        "textTe": "⚠️ పశ్చిమ గోడ అల్మారా (అనుమతించదగినది)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South wall (Yama direction drains physical vitality)",
        "textTe": "❌ దక్షిణ గోడ (యమ దిశ వల్ల ప్రాణశక్తి తగ్గి నీరసం వస్తుంది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya Fire intensifies fevers, inflammation & medical bills)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని వేడి వల్ల జ్వరాలు, మందుల ఖర్చులు విపరీతంగా పెరుగుతాయి)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Creates chronic, permanent dependency on pills & doctors)",
        "textTe": "❌ నైరుతి (జీవితాంతం మందులు వాడాల్సిన దీర్ఘకాలిక రోగాలు వస్తాయి)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Sickness Energy)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో మందుల పెట్టె నిషిద్ధం)"
      }
    }
  },
  {
    "id": "mirrors",
    "nameEn": "Mirrors, Dressing Table & Glass Decor",
    "nameTe": "గోడ అద్దాలు, డ్రెస్సింగ్ టేబుల్ & గాజు అలంకరణలు",
    "category": "furniture",
    "categoryEn": "Furniture & Bedding",
    "categoryTe": "ఫర్నిచర్ & నివాసం",
    "page": "Pages 19, 150, 197",
    "idealLocationEn": "North or East walls. Reflecting surface must face South or West.",
    "idealLocationTe": "ఉత్తరం లేదా తూర్పు గోడలపై. అద్దం ఉపరితలం దక్షిణం లేదా పశ్చిమం వైపు ప్రతిబింబించాలి.",
    "forbiddenLocationEn": "South or West walls, directly facing bed cot, Center.",
    "forbiddenLocationTe": "దక్షిణ, పశ్చిమ గోడలు, పడక మంచానికి ఎదురుగా, బ్రహ్మస్థానం.",
    "whyEn": "Page 197: Mirrors represent Water and light deflection. Hanging on North/East walls expands the beneficial open energy of these light zones. A mirror reflecting sleeping bodies bounces back negative static discharge, causing nightmare fright and marital discord.",
    "whyTe": "పుస్తకంలో 197వ పేజీ ప్రకారం — అద్దం జల తత్త్వానికి, కాంతి పరావర్తనానికి ప్రతీక. ఉత్తర, తూర్పు గోడలపై ఉంచితే ఆ దిశల శుభశక్తి రెట్టింపవుతుంది. పడుకున్న శరీరాన్ని అద్దం ప్రతిబింబిస్తే నిద్రలేమి, భార్యాభర్తల కలహాలు వస్తాయి.",
    "placements": {
      "north_wall": {
        "status": "ideal",
        "textEn": "✅ North wall (Expands Kubera Wealth Reflection & Cosmic Light)",
        "textTe": "✅ ఉత్తర గోడపై (కుబేర సంపద మరియు కాంతిని రెట్టింపు చేస్తుంది)"
      },
      "east_wall": {
        "status": "ideal",
        "textEn": "✅ East wall (Reflects Auspicious Sunrise Prana into House)",
        "textTe": "✅ తూర్పు గోడపై (ఉదయపు సూర్యకాంతిని ఇంట్లోకి పరావర్తనం చేస్తుంది)"
      },
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast wall (Water & Light Mirror Expansion — Highly Auspicious)",
        "textTe": "✅ ఈశాన్య గోడపై (జల మరియు కాంతి విస్తరణకు అత్యంత శుభప్రదం)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest wall (Acceptable if not reflecting entrance doors)",
        "textTe": "⚠️ వాయువ్య గోడపై (సింహద్వారాన్ని ప్రతిబింబించకపోతే అనుమతించదగినది)"
      },
      "west": {
        "status": "forbidden",
        "textEn": "❌ West wall (Deflects away incoming beneficial morning cosmic waves)",
        "textTe": "❌ పశ్చిమ గోడపై (ఉదయపు శుభ తరంగాలను వెనక్కి తిప్పి కొడుతుంది)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South wall (Reflects Southward Yama energy back into living room)",
        "textTe": "❌ దక్షిణ గోడపై (యమ స్థాన ప్రతిబింబం కుటుంబ శాంతిని చెడగొడుతుంది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Water mirror element clashes with Fire Agneya)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని స్థానంలో జల ప్రతిబింబం కలహాలకు కారణం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest wall (Disrupts solid stability of Nairuthi)",
        "textTe": "❌ నైరుతి గోడ (నైరుతి పృథ్వీ స్థిరత్వాన్ని అద్దం భంగపరుస్తుంది)"
      },
      "facing_bed": {
        "status": "forbidden",
        "textEn": "❌ Directly Facing Bed Cot (Reflects sleeping bodies — Chronic Illness & Nightmares)",
        "textTe": "❌ పడక మంచానికి ఎదురుగా (నిద్రించేవారిని ప్రతిబింబిస్తే భార్యాభర్తల గొడవలు)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Illusion in Navel)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో అద్దాలు నిషిద్ధం)"
      }
    }
  },
  {
    "id": "wall_clocks",
    "nameEn": "Wall Clocks & Timepieces",
    "nameTe": "గోడ గడియారాలు & సమయ సూచికలు",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 19, 197",
    "idealLocationEn": "North or East walls.",
    "idealLocationTe": "ఉత్తరం లేదా తూర్పు గోడలపై.",
    "forbiddenLocationEn": "South wall, directly above any doorway/threshold, Southwest.",
    "forbiddenLocationTe": "దక్షిణ గోడ, తలుపుల పైభాగం, నైరుతి.",
    "whyEn": "Page 197: Clocks symbolize progress, opportunity, and ongoing life energy. North (Kubera) and East (Indra) keep time flowing in auspicious wealth and enlightenment channels. Hanging a clock on South wall invites the stagnant time of Yama.",
    "whyTe": "పుస్తకంలో 197వ పేజీ ప్రకారం — గడియారం కాలగమనానికి, ప్రగతికి ప్రతీక. ఉత్తర, తూర్పు గోడలపై గడియారం ఉంటే సదా శుభకాలం నడుస్తుంది. దక్షిణ గోడపై పెడితే యమ దిశ వల్ల పనుల్లో ఆటంకాలు, స్తబ్దత ఏర్పడతాయి. తలుపుల పైన గడియారాలు పెట్టరాదు.",
    "placements": {
      "north_wall": {
        "status": "ideal",
        "textEn": "✅ North wall (Promotes Financial Punctuality & Inflow of Wealth)",
        "textTe": "✅ ఉత్తర గోడపై (ఆర్థిక ప్రగతి & నిరంతర ధన ప్రవాహ సమయం)"
      },
      "east_wall": {
        "status": "ideal",
        "textEn": "✅ East wall (Promotes Health, Youthful Energy & Career Growth)",
        "textTe": "✅ తూర్పు గోడపై (ఆరోగ్యం, ఉత్తేజం & ఉద్యోగ ప్రగతికి అనుకూలం)"
      },
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast wall (Auspicious Divine Timing Alignment)",
        "textTe": "✅ ఈశాన్య గోడపై (శుభ కార్యాల సమయ పాలనకు అత్యుత్తమం)"
      },
      "west_wall": {
        "status": "acceptable",
        "textEn": "⚠️ West wall (Acceptable if North/East walls are unavailable)",
        "textTe": "⚠️ పశ్చిమ గోడపై (ఉత్తర/తూర్పు గోడలు వీలుకానప్పుడు అనుమతించదగినది)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest wall (Acceptable dynamic movement)",
        "textTe": "⚠️ వాయువ్య గోడపై (చలనానికి అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya restlessness creates constant frantic hurry)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని స్థానంలో ఆందోళన, సమయం వృథా అవడం)"
      },
      "south_wall": {
        "status": "forbidden",
        "textEn": "❌ South wall (Yama direction symbolizes stoppage of life & missed opportunities)",
        "textTe": "❌ దక్షిణ గోడపై (యమ దిశ వల్ల జీవితంలో స్తబ్దత, అవకాశాలు చేజారడం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest wall (Stagnates career progress)",
        "textTe": "❌ నైరుతి గోడపై (కెరీర్ ఎదుగుదలను స్తంభింపజేస్తుంది)"
      },
      "above_door": {
        "status": "forbidden",
        "textEn": "❌ Directly Above Doorways (Walking under ticking clock causes chronic mental anxiety)",
        "textTe": "❌ తలుపుల పైభాగంలో (తలుపుల కింద నడిచేటప్పుడు ఒత్తిడి, ఆందోళన)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Clock Distraction)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో స్తంభాలపై గడియారాలు నిషిద్ధం)"
      }
    }
  },
  {
    "id": "shoe_rack",
    "nameEn": "Shoe Rack & Footwear Stand",
    "nameTe": "చెప్పుల స్టాండు & పాదరక్షల రాక్",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 17, 172",
    "idealLocationEn": "Northwest outdoor setback, or South/West veranda away from threshold.",
    "idealLocationTe": "వాయువ్యంలో బయటి సెట్‌బ్యాక్, లేదా వరండాలో దక్షిణం/పశ్చిమ మూల సింహద్వారానికి దూరంగా.",
    "forbiddenLocationEn": "Northeast, Main Simhadwaram threshold, Center, Under puja altar.",
    "forbiddenLocationTe": "ఈశాన్యం, సింహద్వారం గడప ఎదురుగా, బ్రహ్మస్థానం, పూజా గది దగ్గర.",
    "whyEn": "Page 172: Footwear carries street dirt and low energy. Piling shoes in front of the main entrance or in Northeast blocks Goddess Lakshmi from entering. Conceal them in the dynamic Northwest outdoor zone.",
    "whyTe": "పుస్తకంలో 172వ పేజీ ప్రకారం — పాదరక్షలు బయటి ధూళిని, నెగటివ్ ఎనర్జీని మోస్తాయి. సింహద్వారం ముందర లేదా ఈశాన్యంలో చెప్పులు పోగేస్తే లక్ష్మీదేవి ఇంట్లోకి రాదు. వాయువ్యంలో మూత ఉన్న స్టాండులో పెట్టడం శ్రేయస్కరం.",
    "placements": {
      "nw": {
        "status": "ideal",
        "textEn": "✅ Northwest outdoor setback / veranda (Auspicious Dynamic Air Corner)",
        "textTe": "✅ వాయువ్యం బయటి వరండా (గాలి ప్రసారముండే శుభప్రదమైన స్థానం)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West veranda corner (Concealed inside closed cabinet)",
        "textTe": "⚠️ పశ్చిమ వరండా మూలలో (మూత ఉన్న క్యాబినెట్‌లో ఉంచితే అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South veranda corner (Acceptable away from main entrance)",
        "textTe": "⚠️ దక్షిణ వరండా మూలలో (సింహద్వారానికి దూరంగా ఉంటే అనుమతించదగినది)"
      },
      "se": {
        "status": "acceptable",
        "textEn": "⚠️ Southeast outdoor corner (Acceptable away from kitchen)",
        "textTe": "⚠️ ఆగ్నేయం బయటి మూల (వంటగదికి దూరంగా ఉంటే అనుమతించదగినది)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North entrance path (Blocks Kubera wealth entryway)",
        "textTe": "❌ ఉత్తర ప్రవేశ మార్గంలో (కుబేర సంపద మార్గాన్ని అడ్డుకుంటుంది)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East front threshold (Dirty shoes pollute sunrise energy)",
        "textTe": "❌ తూర్పు ముఖద్వారం వద్ద (సూర్య ప్రాణశక్తిని మురికి చెప్పులు కలుషితం చేస్తాయి)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest indoor corner (Accumulates negative stagnant dust in master's zone)",
        "textTe": "❌ నైరుతి లోపలి భాగం (యజమాని స్థానంలో ధూళి పోగవ్వడం అశుభం)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Insult to Ishana & Goddess Lakshmi — Severe Poverty)",
        "textTe": "❌ ఈశాన్యం (దేవతా స్థానంలో పాదరక్షలు ఉంచితే తీవ్ర దారిద్య్రం, అశాంతి)"
      },
      "main_threshold": {
        "status": "forbidden",
        "textEn": "❌ Directly in front of Main Simhadwaram (Blocks Prana & Prosperity)",
        "textTe": "❌ ప్రధాన సింహద్వారం గడప ఎదురుగా (లక్ష్మీదేవి ప్రవేశాన్ని అడ్డుకుంటుంది)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Street Footwear)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో చెప్పులు ఉంచడం ఘోర దోషం)"
      }
    }
  },
  {
    "id": "brooms_mops",
    "nameEn": "Broomsticks & Cleaning Mops",
    "nameTe": "చీపుర్లు & శుభ్రపరిచే మాప్‌లు",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 172, 201",
    "idealLocationEn": "Northwest outdoor setback, or West utility corner, concealed from view.",
    "idealLocationTe": "వాయువ్యంలో బయటి సెట్‌బ్యాక్, లేదా పశ్చిమ యుటిలిటీ, ఇతరుల కంటికి కనిపించకుండా.",
    "forbiddenLocationEn": "Northeast (Sweeps away wealth), Kitchen/Dining area, Southeast, Center.",
    "forbiddenLocationTe": "ఈశాన్యం (లక్ష్మిని ఊడ్చివేస్తుంది), వంటగది/డైనింగ్, ఆగ్నేయం, బ్రహ్మస్థానం.",
    "whyEn": "Page 201: Brooms clean dirt but also absorb negative energy. Sri Thirupati Reddy stresses that keeping a broom in Northeast symbolically sweeps out domestic prosperity and invites debt. Never keep a broom standing upright or near dining food.",
    "whyTe": "పుస్తకంలో 201వ పేజీ ప్రకారం — చీపురు మురికిని శుభ్రం చేసినా అది నెగటివ్ శక్తిని గ్రహిస్తుంది. ఈశాన్యంలో చీపురు ఉంచితే ఇంట్లోని సిరిసంపదలను ఊడ్చివేసినట్లే. చీపురును ఎప్పుడూ నిలబెట్టి ఉంచరాదు, పడుకోబెట్టి కంటికి కనిపించకుండా దాచాలి.",
    "placements": {
      "nw": {
        "status": "ideal",
        "textEn": "✅ Northwest outdoor corner (Concealed away from guest view — Optimal)",
        "textTe": "✅ వాయువ్యం బయటి మూల (కంటికి కనిపించకుండా దాచడానికి అత్యుత్తమం)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West utility corner (Concealed under cabinet)",
        "textTe": "⚠️ పశ్చిమ యుటిలిటీ మూల (క్యాబినెట్ కింద దాచి ఉంచితే అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South setback (Concealed)",
        "textTe": "⚠️ దక్షిణ సెట్‌బ్యాక్ (దాచి ఉంచితే అనుమతించదగినది)"
      },
      "sw": {
        "status": "acceptable",
        "textEn": "⚠️ Southwest outdoor setback (Permissible if concealed)",
        "textTe": "⚠️ నైరుతి బయటి సెట్‌బ్యాక్ (కనిపించకుండా ఉంచితే అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya Fire ignites disputes through cleaning tools)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని స్థానంలో చీపుర్లు ఉంచితే నిరంతర గొడవలు)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East (Symbolically sweeps out solar blessings & good fortune)",
        "textTe": "❌ తూర్పు (సౌర శుభాలను చీపురుతో ఊడ్చివేసినట్లవుతుంది)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North (Kubera corridor swept with garbage dust)",
        "textTe": "❌ ఉత్తరం (కుబేర మార్గంలో చీపురు పెడితే ధన నష్టం)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Sweeps Away Lakshmi & Generational Wealth — Severe Dosha)",
        "textTe": "❌ ఈశాన్యం (లక్ష్మీదేవిని ఊడ్చేసే ఘోర దోషం — శాశ్వత దారిద్య్రం)"
      },
      "kitchen": {
        "status": "forbidden",
        "textEn": "❌ Inside Kitchen / Food Area (Severe bacterial & health contamination)",
        "textTe": "❌ వంటగది లోపల (ఆహార కాలుష్యం & తీవ్ర అనారోగ్యాలు)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Sweeper)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో చీపుర్లు ఉంచడం మహా పాపం)"
      }
    }
  },
  {
    "id": "dustbin",
    "nameEn": "Trash Can & Garbage Dustbin",
    "nameTe": "చెత్తబుట్ట / డస్ట్‌బిన్",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 172, 201",
    "idealLocationEn": "Northwest outdoor setback or West utility (covered with lid).",
    "idealLocationTe": "వాయువ్యంలో బయటి సెట్‌బ్యాక్ లేదా పశ్చిమ యుటిలిటీ (మూత తప్పనిసరి).",
    "forbiddenLocationEn": "Northeast (Severe Dosha), East, North, Center, Puja/Kitchen counters.",
    "forbiddenLocationTe": "ఈశాన్యం (తీవ్ర వాస్తు దోషం), తూర్పు, ఉత్తరం, బ్రహ్మస్థానం, పూజ/వంట ప్రాంతం.",
    "whyEn": "Page 201: Garbage generates negative decomposed bio-energy. Placing a trash bin in Northeast or East poisons the incoming solar and magnetic prana, causing sudden financial losses and respiratory sickness.",
    "whyTe": "పుస్తకంలో 201వ పేజీ ప్రకారం — చెత్తబుట్ట కుళ్ళిన నెగటివ్ ఎనర్జీని పుట్టిస్తుంది. ఈశాన్యంలో లేదా తూర్పున చెత్తబుట్ట పెడితే దివ్య కిరణాలు విషతుల్యమై ఆకస్మిక ధన నష్టాలు, శ్వాసకోశ వ్యాధులు వస్తాయి. మూత ఉన్న డస్ట్‌బిన్‌ను వాయువ్యంలో పెట్టాలి.",
    "placements": {
      "nw": {
        "status": "ideal",
        "textEn": "✅ Northwest outdoor setback (Covered with tight lid — Auspicious Outflow)",
        "textTe": "✅ వాయువ్యం బయటి సెట్‌బ్యాక్ (మూతతో ఉంచితే వ్యర్థాలు త్వరగా తొలగిపోతాయి)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West utility corner (Covered with lid — Permissible)",
        "textTe": "⚠️ పశ్చిమ యుటిలిటీ మూలలో (మూతతో ఉంచితే అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South setback outdoor (Covered — Permissible)",
        "textTe": "⚠️ దక్షిణ సెట్‌బ్యాక్ బయట (అనుమతించదగినది)"
      },
      "sw": {
        "status": "acceptable",
        "textEn": "⚠️ Southwest outdoor corner (Only if strictly outside and covered)",
        "textTe": "⚠️ నైరుతి బయటి మూలలో (బయట మూతతో ఉంటేనే అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya decomposition multiplies insect pests & fevers)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని వేడికి చెత్త కుళ్ళి క్రిమికీటకాలు, రోగాలు పెరుగుతాయి)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East (Garbage directly in path of morning sunrise prana)",
        "textTe": "❌ తూర్పు (సూర్య భగవానుని కిరణాల ఎదుట చెత్త నిషిద్ధం)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North (Kubera wealth corridor choked with filth)",
        "textTe": "❌ ఉత్తరం (కుబేర మార్గంలో చెత్తబుట్ట వల్ల తీవ్ర ఆర్థిక సంక్షోభం)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Poisons Eshanya Divine Source — Destroys Family Lineage)",
        "textTe": "❌ ఈశాన్యం (దేవతా స్థానంలో చెత్త — వంశవృద్ధి క్షీణించి దారిద్య్రం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Filth in Cosmic Heart — Severe Curse)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో చెత్తబుట్ట పెట్టడం మహా దోషం)"
      }
    }
  },
  {
    "id": "tulasi_plant",
    "nameEn": "Sacred Basil (Tulasi) Altar / Vrindavanam",
    "nameTe": "తులసి కోట / పవిత్ర తులసి బృందావనం",
    "category": "worship",
    "categoryEn": "Worship & Spiritual",
    "categoryTe": "పూజ & ఆధ్యాత్మికం",
    "page": "Pages 12, 164",
    "idealLocationEn": "Northeast (Eshanya), East, or North open courtyard.",
    "idealLocationTe": "ఈశాన్యం, తూర్పు లేదా ఉత్తర బహిరంగ ప్రాంగణం/వరండా.",
    "forbiddenLocationEn": "Southwest, Southeast, South, Center under roof.",
    "forbiddenLocationTe": "నైరుతి, ఆగ్నేయం, దక్షిణం, పైకప్పు క్రింద నడిమిల్లు.",
    "whyEn": "Page 164: Tulasi purifies ozone and emits oxygen for 20 hours a day. Northeast and East courtyard provide constant morning sunlight, energizing the entire house with spiritual ozone prana. Placing Tulasi in Southwest causes it to dry up and brings grief.",
    "whyTe": "పుస్తకంలో 164వ పేజీ ప్రకారం — తులసి రోజుకు 20 గంటల పాటు ఆక్సిజన్‌ను, ఓజోన్‌ను విడుదల చేసి గాలిని శుభ్రపరుస్తుంది. ఈశాన్యం, తూర్పులలో సహజ సూర్యరశ్మి తగిలి తులసి ఏపుగా పెరిగి ఆయురారోగ్యాలను ఇస్తుంది. నైరుతిలో పెడితే తులసి ఎండిపోయి అరిష్టం.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast courtyard (Supreme Eshanya Sanctity & Prana Inflow)",
        "textTe": "✅ ఈశాన్య ప్రాంగణం (అత్యుత్తమ దేవతా స్థానం & ప్రాణశక్తి ప్రవాహం)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East open setback (Absorbs Early Morning Solar Infrared)",
        "textTe": "✅ తూర్పు బహిరంగ స్థలం (ఉదయపు సూర్యకాంతితో దివ్య శక్తి)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ North open courtyard (Kubera corridor spiritual purity)",
        "textTe": "✅ ఉత్తర బహిరంగ స్థలం (కుబేర మార్గంలో పవిత్రత)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest open setback (Permissible alternative)",
        "textTe": "⚠️ వాయువ్య బహిరంగ స్థలం (అనుమతించదగిన రెండవ ఎంపిక)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West courtyard (Acceptable if sunlight is available)",
        "textTe": "⚠️ పశ్చిమ ప్రాంగణం (ఎండ తగిలితే అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya excessive heat dries up Tulasi leaves)",
        "textTe": "❌ ఆగ్నేయం (అగ్ని వేడికి తులసి ఎండిపోతుంది, కలహాలు)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South (Yama quadrant incompatible with sacred Vrindavanam)",
        "textTe": "❌ దక్షిణం (యమ స్థానం పవిత్ర తులసికి అననుకూలం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Demon quadrant kills Tulasi and brings domestic grief)",
        "textTe": "❌ నైరుతి (నైరుతిలో తులసి మొక్క బతకదు, దుఃఖం తెస్తుంది)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Under indoor slab roof without direct sky)",
        "textTe": "❌ బ్రహ్మస్థానము (పైకప్పు కింద ఆకాశం కనిపించకుండా తులసి నిషిద్ధం)"
      }
    }
  },
  {
    "id": "drinking_water",
    "nameEn": "Drinking Water Pot / Filter / RO Dispenser",
    "nameTe": "తాగునీటి కుండ / వాటర్ ఫిల్టర్ / RO ప్యూరిఫైయర్",
    "category": "kitchen",
    "categoryEn": "Kitchen & Fire Appliances",
    "categoryTe": "వంటగది & అగ్ని పరికరాలు",
    "page": "Pages 12, 155",
    "idealLocationEn": "Northeast or North of the kitchen or dining hall.",
    "idealLocationTe": "వంటగది లేదా డైనింగ్ హాలులో ఈశాన్యం లేదా ఉత్తర భాగం.",
    "forbiddenLocationEn": "Southeast next to fire stove, Southwest, South, Center.",
    "forbiddenLocationTe": "ఆగ్నేయంలో పొయ్యి పక్కన, నైరుతి, దక్షిణం, బ్రహ్మస్థానం.",
    "whyEn": "Page 155: Drinking water is 'Amritha Jala' and represents the Water element (Varuna/Ishana). Placing pure drinking water in Northeast imbues it with positive geomagnetic vibrations. Placing water right next to fire hearth in Southeast causes bitter family fights.",
    "whyTe": "పుస్తకంలో 155వ పేజీ ప్రకారం — తాగునీరు అమృత సమానం, జల తత్త్వానికి ప్రతీక. వంటగదిలోని ఈశాన్యం లేదా ఉత్తరంలో కుండ లేదా ఫిల్టర్ పెడితే ఆరోగ్యం, ఆయుష్షు వస్తాయి. ఆగ్నేయంలో మండుతున్న పొయ్యి పక్కనే నీరు పెడితే అగ్ని-జల కలహంతో ఇంట్లో మనశ్శాంతి ఉండదు.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast kitchen / dining corner (Amritha Jala / Supreme Health)",
        "textTe": "✅ ఈశాన్య వంటగది/డైనింగ్ మూల (అమృత జలం — సంపూర్ణ ఆరోగ్యం)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ North wall dispenser (Kubera Pure Water Energy)",
        "textTe": "✅ ఉత్తర గోడ వద్ద (కుబేర దిశలో స్వచ్ఛమైన జల శక్తి)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East wall of kitchen / dining (Solar Prana Energized Water)",
        "textTe": "✅ తూర్పు గోడ వద్ద (సూర్య ప్రాణశక్తితో ఉత్తేజితమైన నీరు)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest of dining area (Acceptable)",
        "textTe": "⚠️ వాయువ్య డైనింగ్ ప్రాంతంలో (అనుమతించదగినది)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West dining wall (Acceptable)",
        "textTe": "⚠️ పశ్చిమ డైనింగ్ గోడ వద్ద (అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast next to fire stove (Fire & Water Clash creates family strife)",
        "textTe": "❌ ఆగ్నేయంలో పొయ్యి పక్కన (అగ్ని-జల ఘర్షణ వల్ల కుటుంబ కలహాలు)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South wall (Yama heat spoils drinking water vitality)",
        "textTe": "❌ దక్షిణ గోడ (యమ దిశలో తాగునీరు పెట్టడం అశుభం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Depletes physical vitality & causes digestive torments)",
        "textTe": "❌ నైరుతి (శరీరంలో బలాన్ని తగ్గించి కడుపునొప్పి, జీర్ణ సమస్యలు)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Water Dispenser)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో వాటర్ డిస్పెన్సర్ నిషిద్ధం)"
      }
    }
  },
  {
    "id": "sofas",
    "nameEn": "Living Room Sofa Sets & Heavy Armchairs",
    "nameTe": "లివింగ్ రూమ్ సోఫాలు & భారీ కుర్చీలు",
    "category": "furniture",
    "categoryEn": "Furniture & Bedding",
    "categoryTe": "ఫర్నిచర్ & నివాసం",
    "page": "Pages 16, 170",
    "idealLocationEn": "South and West walls of living room. Seated owner faces North or East.",
    "idealLocationTe": "లివింగ్ రూమ్‌లోని దక్షిణ మరియు పశ్చిమ గోడలను ఆనుకుని. కూర్చున్నవారు ఉత్తరం లేదా తూర్పుకు చూడాలి.",
    "forbiddenLocationEn": "Northeast corner, blocking North/East windows, Center.",
    "forbiddenLocationTe": "ఈశాన్య మూల, ఉత్తర/తూర్పు కిటికీలను అడ్డుకుంటూ, బ్రహ్మస్థానం.",
    "whyEn": "Page 170: Heavy seating furniture belongs on the heavy South and West boundaries. When the family head sits facing North (Kubera) or East (Indra), they project commanding presence and maintain peace during guest conversations.",
    "whyTe": "పుస్తకంలో 170వ పేజీ ప్రకారం — భారీ సోఫాలు, కుర్చీలు ఎల్లప్పుడూ హాలులోని దక్షిణ, పశ్చిమ గోడలకే వేయాలి. యజమాని తూర్పు లేదా ఉత్తరం చూస్తూ కూర్చుంటే గౌరవం, ఆధిపత్యం నిలుస్తాయి. ఈశాన్యంలో భారీ సోఫాలు వేస్తే గాలి, వెలుతురు ఆగిపోయి అనర్థాలు వస్తాయి.",
    "placements": {
      "sw": {
        "status": "ideal",
        "textEn": "✅ Southwest corner of hall against South/West walls (Commanding Authority)",
        "textTe": "✅ హాలులోని నైరుతి మూల దక్షిణ/పశ్చిమ గోడలకు ఆనించి (గరిష్ఠ గౌరవం & అధికారం)"
      },
      "south": {
        "status": "ideal",
        "textEn": "✅ South wall with sitters facing North (Kubera Leadership Alignment)",
        "textTe": "✅ దక్షిణ గోడ వద్ద ఉత్తరం చూస్తూ కూర్చోవడం (కుబేర నాయకత్వ స్థానం)"
      },
      "west": {
        "status": "ideal",
        "textEn": "✅ West wall with sitters facing East (Solar Wisdom Alignment)",
        "textTe": "✅ పశ్చిమ గోడ వద్ద తూర్పు చూస్తూ కూర్చోవడం (సౌర ప్రశాంతత)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest corner light armchairs for casual visitors (Acceptable)",
        "textTe": "⚠️ వాయువ్యంలో అతిథుల కొరకు తేలికపాటి కుర్చీలు (అనుమతించదగినది)"
      },
      "se": {
        "status": "acceptable",
        "textEn": "⚠️ Southeast South wall (Permissible if kept away from kitchen)",
        "textTe": "⚠️ ఆగ్నేయంలో దక్షిణ గోడ వద్ద (అనుమతించదగినది)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East wall (Sitters face West, heavy sofa blocks sunrise prana)",
        "textTe": "❌ తూర్పు గోడ (పశ్చిమం చూస్తూ కూర్చోవడం, సూర్యరశ్మిని అడ్డుకోవడం)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North wall (Sitters face South, heavy sofa blocks Kubera magnetic flow)",
        "textTe": "❌ ఉత్తర గోడ (దక్షిణం చూస్తూ కూర్చోవడం, అయస్కాంత ప్రవాహానికి అడ్డంకి)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Heavy sofas in light Eshanya destroy family fortune)",
        "textTe": "❌ ఈశాన్యం (తేలికగా ఉండాల్సిన ఈశాన్యంలో భారీ సోఫాలు తీవ్ర దోషం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core of Living Hall Blocked)",
        "textTe": "❌ బ్రహ్మస్థానము (హాలు నడిమింట్లో సోఫాలు వేసి నడకను అడ్డుకోరాదు)"
      }
    }
  },
  {
    "id": "overhead_tank",
    "nameEn": "Overhead Water Tank (Roof Level)",
    "nameTe": "పైకప్పు ఓవర్‌హెడ్ వాటర్ ట్యాంక్",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 12, 156",
    "idealLocationEn": "Southwest (Nairuthi) on top of staircase or bedroom roof slab, raised on pillars.",
    "idealLocationTe": "పైకప్పుపై నైరుతి భాగం, మెట్ల గది లేదా నైరుతి గదిపై పిల్లర్లపై ఎత్తుగా.",
    "forbiddenLocationEn": "Northeast (Lethal Dosha), Southeast, North, East, Center (Brahmasthana).",
    "forbiddenLocationTe": "ఈశాన్యం (మహా వాస్తు దోషం), ఆగ్నేయం, ఉత్తరం, తూర్పు, బ్రహ్మస్థానం.",
    "whyEn": "Page 156: An overhead tank weighs metric tons. According to universal Vaastu law, the Southwest must be the highest and heaviest point of the entire house structure. Placing an overhead tank in Northeast violates this, causing bankruptcy and fatal diseases.",
    "whyTe": "పుస్తకంలో 156వ పేజీ ప్రకారం — ఓవర్‌హెడ్ ట్యాంక్ అనేక టన్నుల బరువును కలిగి ఉంటుంది. వాస్తు శాస్త్ర ప్రాథమిక సూత్రం ప్రకారం భవనంలో నైరుతి అత్యంత ఎత్తుగా, బరువుగా ఉండాలి. ఈశాన్యంలో లేదా బ్రహ్మస్థానంలో వాటర్ ట్యాంక్ పెడితే కుటుంబ యజమానికి ప్రాణాంతక రోగాలు, దివాలా వస్తాయి.",
    "placements": {
      "sw": {
        "status": "ideal",
        "textEn": "✅ Southwest roof (Supreme Heaviest & Highest Point of Building)",
        "textTe": "✅ నైరుతి పైకప్పుపై (భవనంలోనే అత్యంత ఎత్తైన & బరువైన శుభ స్థానం)"
      },
      "west": {
        "status": "ideal",
        "textEn": "✅ West roof (Excellent Heavy Counterweight)",
        "textTe": "✅ పశ్చిమ పైకప్పుపై (పశ్చిమ భాగాన్ని బరువుగా ఉంచే శుభ స్థానం)"
      },
      "south": {
        "status": "ideal",
        "textEn": "✅ South roof (Excellent Heavy Solid Alignment)",
        "textTe": "✅ దక్షిణ పైకప్పుపై (దక్షిణ భాగానికి బలాన్నిచ్చే శుభ స్థానం)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest roof on pillars (Acceptable if SW is higher)",
        "textTe": "⚠️ వాయువ్య పైకప్పుపై (నైరుతి కంటే తక్కువ ఎత్తులో ఉంటే అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast roof (Heavy water directly over Agni burns health & money)",
        "textTe": "❌ ఆగ్నేయ పైకప్పుపై (అగ్ని స్థానంపై భారీ నీరు ఉండటం వల్ల ఆర్థిక నష్టం)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East roof (Heavy tank blocks morning sunlight completely)",
        "textTe": "❌ తూర్పు పైకప్పుపై (ఉదయపు సూర్యకాంతిని అడ్డుకునే తీవ్ర దోషం)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North roof (Heavy tank blocks Kubera geomagnetic prana)",
        "textTe": "❌ ఉత్తర పైకప్పుపై (కుబేర అయస్కాంత కిరణాలను అడ్డుకుంటుంది)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast roof (Crushing Heaviness in Lightest Corner — Fatal Calamity)",
        "textTe": "❌ ఈశాన్య పైకప్పుపై (తేలికగా ఉండాల్సిన ఈశాన్యంపై టన్నుల బరువు — ప్రాణాంతకం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana roof (Cosmic Navel Crushed by Tons of Water)",
        "textTe": "❌ బ్రహ్మస్థానం పైకప్పుపై (వాస్తు పురుషుని హృదయంపై నీటి భారం మోపడం నిషిద్ధం)"
      }
    }
  },
  {
    "id": "underground_sump",
    "nameEn": "Underground Water Sump & Borewell / Well",
    "nameTe": "భూగర్భ నీటి సంపు & బోరుబావి / బావి",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 12, 154",
    "idealLocationEn": "Northeast (Eshanya), East-Northeast, or North-Northeast.",
    "idealLocationTe": "ఈశాన్యం, తూర్పు ఈశాన్యం (ENE) లేదా ఉత్తర ఈశాన్యం (NNE).",
    "forbiddenLocationEn": "Southwest (Fatal Nairuthi Pit), Southeast (Fire/Water clash), South, West, Center.",
    "forbiddenLocationTe": "నైరుతి (మహా వినాశకర నైరుతి గుంత), ఆగ్నేయం, దక్షిణం, పశ్చిమం, బ్రహ్మస్థానం.",
    "whyEn": "Page 154: Water belongs in Eshanya. Digging a water pit in Northeast makes that quadrant low and light, drawing inexhaustible divine wealth. Digging a pit or borewell in Southwest creates a Nairuthi depression, universally known in Vaastu to cause untimely death and bankruptcy.",
    "whyTe": "పుస్తకంలో 154వ పేజీ ప్రకారం — ఈశాన్యం జల స్థానం. ఈశాన్యంలో బోరు లేదా సంపు తీస్తే ఆ భాగం పల్లమై నిరంతర శుభ సంపదలను ఇస్తుంది. నైరుతిలో గుంత లేదా బోరు వేస్తే 'నైరుతి గుంత' వల్ల యజమానికి అకాల మరణం, శాశ్వత దివాలా సంభవిస్తాయి.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast (Eshanya — Supreme Jala Sthana for Inexhaustible Wealth)",
        "textTe": "✅ ఈశాన్యం (అత్యుత్తమ జల స్థానం — అఖండ సంపద & వంశాభివృద్ధి)"
      },
      "ene": {
        "status": "ideal",
        "textEn": "✅ Eastern Northeast (ENE — Auspicious Solar Water Inflow)",
        "textTe": "✅ తూర్పు ఈశాన్యం (సౌర జల ప్రవాహం — అత్యుత్తమ ఫలితాలు)"
      },
      "nne": {
        "status": "ideal",
        "textEn": "✅ Northern Northeast (NNE — Auspicious Kubera Water Inflow)",
        "textTe": "✅ ఉత్తర ఈశాన్యం (కుబేర జల ప్రవాహం — నిరంతర ధనాదాయం)"
      },
      "east": {
        "status": "acceptable",
        "textEn": "⚠️ East (Acceptable if kept strictly in Northern half of East)",
        "textTe": "⚠️ తూర్పు (తూర్పు ఉత్తరార్థంలో ఉంటే అనుమతించదగినది)"
      },
      "north": {
        "status": "acceptable",
        "textEn": "⚠️ North (Acceptable if kept strictly in Eastern half of North)",
        "textTe": "⚠️ ఉత్తరం (ఉత్తర పూర్వార్ధంలో ఉంటే అనుమతించదగినది)"
      },
      "nw": {
        "status": "forbidden",
        "textEn": "❌ Northwest (Water pit in Vayuvya causes court litigations & debts)",
        "textTe": "❌ వాయువ్యం (వాయువ్యంలో గుంత వల్ల కోర్టు తగాదాలు, శత్రు భయం)"
      },
      "west": {
        "status": "forbidden",
        "textEn": "❌ West (Water pit in West leads to financial drain and chronic sorrow)",
        "textTe": "❌ పశ్చిమం (పశ్చిమంలో గుంత వల్ల ధన నష్టం, కుటుంబంలో దిగులు)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Agneya Pit — Clash of Fire and Water causes accidents)",
        "textTe": "❌ ఆగ్నేయం (అగ్నిలో నీటి గుంత వల్ల ప్రమాదాలు, అగ్నిభయం)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South (Yama Pit causes chronic disease, surgeries & early death)",
        "textTe": "❌ దక్షిణం (యమ స్థానంలో గుంత వల్ల ఆపరేషన్లు, అకాల మరణ భయం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest (Fatal Nairuthi Pit — Destroys Head of Family & Total Ruin)",
        "textTe": "❌ నైరుతి (మహా వినాశకర నైరుతి గుంత — యజమాని ప్రాణానికి ముప్పు & దివాలా)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Digging into Cosmic Heart — Total Disaster)",
        "textTe": "❌ బ్రహ్మస్థానము (వాస్తు పురుషుని గుండెను తవ్వడం — సమూల నాశనం)"
      }
    }
  },
  {
    "id": "potted_plants",
    "nameEn": "Indoor & Balcony Potted Plants",
    "nameTe": "ఇంటి లోపల & బాల్కనీలో కుండీల మొక్కలు",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 18, 198",
    "idealLocationEn": "Light small flowering plants in North/East; Heavy tall potted shrubs in South/West.",
    "idealLocationTe": "తేలికపాటి చిన్న పూలమొక్కలు ఉత్తరం/తూర్పున; బరువైన ఎత్తైన మొక్కలు దక్షిణం/పశ్చిమాన.",
    "forbiddenLocationEn": "Thorny cacti indoors, bonsai, heavy towering plants in Northeast, Center.",
    "forbiddenLocationTe": "ముళ్ళతో కూడిన కాక్టస్, బోన్సాయ్, ఈశాన్యంలో భారీ చెట్లు, బ్రహ్మస్థానం.",
    "whyEn": "Page 198: Plants in North/East should never exceed 3 feet in height to allow solar rays and magnetic prana to enter unhindered. Heavy tall potted ficus or palm plants should be placed on South and West balconies to create heavy protective buffers against harsh afternoon radiation.",
    "whyTe": "పుస్తకంలో 198వ పేజీ ప్రకారం — తూర్పు, ఉత్తరాల్లో పెంచే మొక్కలు 3 అడుగుల కంటే ఎత్తు పెరగకూడదు. దీనివల్ల సూర్యరశ్మి ఇంట్లోకి ధారాళంగా వస్తుంది. బరువైన, ఎత్తైన కుండీలను దక్షిణం, పశ్చిమ బాల్కనీలలో పెడితే తీవ్రమైన ఎండ నుండి రక్షణ లభిస్తుంది.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast (Small, light herbs & flowering plants under 3 feet)",
        "textTe": "✅ ఈశాన్యం (3 అడుగుల లోపు ఉండే తేలికపాటి చిన్న పూలమొక్కలు)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East (Light ornamental plants welcoming morning sun)",
        "textTe": "✅ తూర్పు (ఉదయపు కాంతిని ఆహ్వానించే చిన్న అలంకార మొక్కలు)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ North (Light green foliage plants under 3 feet)",
        "textTe": "✅ ఉత్తరం (తేలికపాటి చిన్న పచ్చని మొక్కలు)"
      },
      "sw": {
        "status": "ideal",
        "textEn": "✅ Southwest (Heavy, tall potted shrubs & palms providing solid buffer)",
        "textTe": "✅ నైరుతి (బరువైన పెద్ద కుండీలు, ఎత్తైన పామ్స్ — నైరుతి బరువును పెంచుతాయి)"
      },
      "south": {
        "status": "ideal",
        "textEn": "✅ South balcony (Heavy potted plants absorbing harsh heat)",
        "textTe": "✅ దక్షిణ బాల్కనీ (వేడిని పీల్చుకునే బరువైన పెద్ద మొక్కల కుండీలు)"
      },
      "west": {
        "status": "ideal",
        "textEn": "✅ West balcony (Tall heavy potted plants shading afternoon sun)",
        "textTe": "✅ పశ్చిమ బాల్కనీ (సాయంత్రపు తీవ్ర ఎండను ఆపే ఎత్తైన కుండీలు)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest (Medium-sized potted plants — Acceptable)",
        "textTe": "⚠️ వాయువ్యం (మధ్యస్థ పరిమాణపు మొక్కలు — అనుమతించదగినది)"
      },
      "se": {
        "status": "acceptable",
        "textEn": "⚠️ Southeast (Red/pink flowering plants away from kitchen stove)",
        "textTe": "⚠️ ఆగ్నేయం (ఎరుపు రంగు పూల మొక్కలు — అనుమతించదగినది)"
      },
      "ne_heavy": {
        "status": "forbidden",
        "textEn": "❌ Heavy tall potted trees in Northeast (Blocks cosmic light & prana)",
        "textTe": "❌ ఈశాన్యంలో భారీ ఎత్తైన చెట్ల కుండీలు (సౌర కాంతిని అడ్డుకునే దోషం)"
      },
      "cacti_indoor": {
        "status": "forbidden",
        "textEn": "❌ Thorny Cacti, Bonsai & Milk-Oozing Plants Indoors (Invites Stress & Stunted Growth)",
        "textTe": "❌ ముళ్ళ కాక్టస్, బోన్సాయ్ & పాలకారే మొక్కలు ఇంట్లో పెంచడం (ప్రగతికి ఆటంకం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Trampled by Heavy Pots)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో కుండీలు పెట్టి నడకను అడ్డుకోరాదు)"
      }
    }
  },
  {
    "id": "shoes_cleaning",
    "nameEn": "Cleaning Buckets, Detergents & Floor Wiper Station",
    "nameTe": "శుభ్రపరిచే బకెట్లు, డిటర్జెంట్లు & మాపింగ్ సామాగ్రి",
    "category": "misc",
    "categoryEn": "Sanitary & Miscellaneous",
    "categoryTe": "శుభ్రత & ఇతరములు",
    "page": "Pages 17, 173",
    "idealLocationEn": "Northwest outdoor setback or West utility area.",
    "idealLocationTe": "వాయువ్యంలో బయటి సెట్‌బ్యాక్ లేదా పశ్చిమ యుటిలిటీ భాగం.",
    "forbiddenLocationEn": "Northeast, Kitchen, Southeast, Center.",
    "forbiddenLocationTe": "ఈశాన్యం, వంటగది, ఆగ్నేయం, బ్రహ్మస్థానం.",
    "whyEn": "Page 173: Chemical cleaning agents, detergent powders, dirty water buckets, and floor wipers represent waste management. Northwest (motion) and West (utility) are permissible. Northeast must never house detergents or dirty mops.",
    "whyTe": "పుస్తకంలో 173వ పేజీ ప్రకారం — డిటర్జెంట్లు, ఫినాయిల్, మురికి బకెట్లు వ్యర్థ నిర్వహణకు చెందినవి. వీటిని వాయువ్యంలో లేదా పశ్చిమ యుటిలిటీలో దాచాలి. ఈశాన్యంలో సబ్బునీళ్ళు, డిటర్జెంట్లు ఉంచడం పవిత్రతకు భంగం.",
    "placements": {
      "nw": {
        "status": "ideal",
        "textEn": "✅ Northwest utility setback (Sanitary Drainage Harmony)",
        "textTe": "✅ వాయువ్య యుటిలిటీ సెట్‌బ్యాక్ (మురుగు & శుభ్రతకు అనుకూలం)"
      },
      "west": {
        "status": "acceptable",
        "textEn": "⚠️ West utility area (Concealed inside cabinet)",
        "textTe": "⚠️ పశ్చిమ యుటిలిటీ భాగం (క్యాబినెట్‌లో దాచి ఉంచితే అనుమతించదగినది)"
      },
      "south": {
        "status": "acceptable",
        "textEn": "⚠️ South setback utility (Permissible)",
        "textTe": "⚠️ దక్షిణ సెట్‌బ్యాక్ యుటిలిటీ (అనుమతించదగినది)"
      },
      "sw": {
        "status": "acceptable",
        "textEn": "⚠️ Southwest outdoor setback (Permissible if strictly outside and concealed)",
        "textTe": "⚠️ నైరుతి బయటి సెట్‌బ్యాక్ (బయట దాచి ఉంచితే అనుమతించదగినది)"
      },
      "se": {
        "status": "forbidden",
        "textEn": "❌ Southeast (Chemical detergent fumes in Agneya irritate lungs)",
        "textTe": "❌ ఆగ్నేయం (రసాయన డిటర్జెంట్ల వాసన అగ్నితో కలిసి అనారోగ్యం)"
      },
      "east": {
        "status": "forbidden",
        "textEn": "❌ East (Chemical suds in front of sunrise prana)",
        "textTe": "❌ తూర్పు (సూర్య భగవానుని ఎదుట మురికి బకెట్లు అశుభం)"
      },
      "north": {
        "status": "forbidden",
        "textEn": "❌ North (Kubera corridor cluttered with dirty water)",
        "textTe": "❌ ఉత్తరం (కుబేర మార్గంలో మురికి నీటి బకెట్లు నిషిద్ధం)"
      },
      "ne": {
        "status": "forbidden",
        "textEn": "❌ Northeast (Chemical Suds & Dirty Buckets in Divine Eshanya — Severe Curse)",
        "textTe": "❌ ఈశాన్యం (దేవతా స్థానంలో మురికి బకెట్లు, ఫినాయిల్ తీవ్ర దోషం)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Core Navel Cluttered by Cleaning Chemicals)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమింట్లో మాపింగ్ సామాగ్రి నిషిద్ధం)"
      }
    }
  },
  {
    "id": "wash_basin",
    "nameEn": "Wash Basin & Kitchen Sink (Hand Wash & Water Tap)",
    "nameTe": "వాష్ బేసిన్ & కిచెన్ సింక్ (చేతులు కడుక్కునే బేసిన్ / కుళాయి)",
    "category": "kitchen",
    "categoryEn": "Kitchen & Water Utility",
    "categoryTe": "వంటగది & జల వినియోగం",
    "page": "Pages 87, 159, 203, 274",
    "idealLocationEn": "Northeast (Eshanya), North, or East wall. In a Southeast kitchen, keep water/sink drainage flowing toward Northeast, North, or East (Pages 87, 203), separated from the gas stove.",
    "idealLocationTe": "ఈశాన్యం, ఉత్తరం లేదా తూర్పు గోడ వద్ద. ఆగ్నేయ వంటగదిలో నీరు/సింక్ ప్రవాహం ఈశాన్యం, ఉత్తరం లేదా తూర్పు వైపు సాగేలా (పేజీలు 87, 203) గ్యాస్ స్టవ్‌కు దూరంగా అమర్చాలి.",
    "forbiddenLocationEn": "Southwest (Nairuthi — financial & health drain), directly adjacent to the Gas Stove in Southeast (Fire–Water clash), South/SSW (Page 274), West (Page 203), Center.",
    "forbiddenLocationTe": "నైరుతి (తీవ్ర ధన & ఆరోగ్య నష్టం), ఆగ్నేయంలో గ్యాస్ పొయ్యికి ఆనుకుని, దక్షిణం/దక్షిణ నైరుతి (పేజీ 274), పశ్చిమం (పేజీ 203), బ్రహ్మస్థానం.",
    "whyEn": "Pages 87, 159, 203 & 274: Sri Thirupati Reddy states that waste water from the kitchen or any room should NOT flow toward Southwest, Southeast, South, or West, and must flow toward Northeast, North, or East (Pages 87, 203). Keeping the sink/wash basin in the water zones (NE/N/E) avoids clashing with the Southeast kitchen hearth (Page 159), and avoids SSW drainage defects (Page 274).",
    "whyTe": "పుస్తకంలో 87, 159, 203, 274 పేజీల ప్రకారం — వంటగది లేదా ఏ గది నుండైనా వ్యర్థ జలం నైరుతి, ఆగ్నేయం, దక్షిణం లేదా పశ్చిమం వైపు ప్రవహించకూడదు; కేవలం ఈశాన్యం, ఉత్తరం లేదా తూర్పు వైపు మాత్రమే ప్రవహించాలి (పేజీలు 87, 203). వాష్ బేసిన్/సింక్‌ను నీటి దిశలలో ఉంచి ఆగ్నేయ పొయ్యికి (పేజీ 159) దూరంగా ఉంచాలి.",
    "placements": {
      "ne": {
        "status": "ideal",
        "textEn": "✅ Northeast (Eshanya) of Hall / Dining / Kitchen Counter (Supreme Water & Drainage Harmony)",
        "textTe": "✅ హాలు, డైనింగ్ లేదా వంటగది ఈశాన్య మూలలో (అత్యుత్తమ జల & నీటి పారుదల స్థానం)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ North Wall / Northern Side facing North (Auspicious Kubera Water Flow)",
        "textTe": "✅ ఉత్తర గోడ వద్ద ఉత్తరం చూస్తూ (శుభప్రదమైన కుబేర జల ప్రవాహం)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East Wall / Eastern Side facing East (Auspicious Solar Drainage)",
        "textTe": "✅ తూర్పు గోడ వద్ద తూర్పు చూస్తూ (శుభప్రదమైన సౌర జల పారుదల)"
      },
      "nw": {
        "status": "acceptable",
        "textEn": "⚠️ Northwest (Vayavya) Dining/Utility Side draining North (Acceptable Secondary)",
        "textTe": "⚠️ వాయువ్య డైనింగ్/యుటిలిటీ వైపు ఉత్తరానికి వాలుతో (అనుమతించదగిన రెండవ స్థానం)"
      },
      "se_separated": {
        "status": "acceptable",
        "textEn": "⚠️ Southeast Kitchen — strictly in NE corner of Kitchen separated from Stove (Acceptable)",
        "textTe": "⚠️ ఆగ్నేయ వంటగదిలో స్టవ్‌కు దూరంగా వంటగది ఈశాన్య మూలలో (అనుమతించదగినది)"
      },
      "se_adjacent": {
        "status": "forbidden",
        "textEn": "❌ Southeast directly touching / beside Gas Stove (Severe Fire–Water Clash / Agni–Jala Dosha)",
        "textTe": "❌ ఆగ్నేయంలో గ్యాస్ స్టవ్ పక్కనే ఆనుకుని (తీవ్ర అగ్ని-జల ఘర్షణ దోషం)"
      },
      "west": {
        "status": "forbidden",
        "textEn": "❌ West Wall (Unfavorable reverse water drainage direction)",
        "textTe": "❌ పశ్చిమ గోడ వద్ద (వ్యతిరేక దిశ నీటి పారుదల అశుభం)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South Wall (Yama direction water drain harms family health)",
        "textTe": "❌ దక్షిణ గోడ వద్ద (యమ దిశలో నీటి పారుదల ఆరోగ్యానికి హానికరం)"
      },
      "sw": {
        "status": "forbidden",
        "textEn": "❌ Southwest / SSW (Severe Financial Drain & Female Spouse Health Deterioration — Page 274)",
        "textTe": "❌ నైరుతి / దక్షిణ నైరుతి (తీవ్ర ధన నష్టం & గృహిణి ఆరోగ్య క్షీణత — పేజీ 274)"
      },
      "center": {
        "status": "forbidden",
        "textEn": "❌ Center / Brahmasthana (Cosmic Navel must remain completely dry)",
        "textTe": "❌ బ్రహ్మస్థానము (నడిమి ఇల్లు ఎల్లప్పుడూ పొడిగా, ఖాళీగా ఉండాలి)"
      }
    }
  },
  {
    "id": "drain_outlets",
    "nameEn": "Drain Outlets & Wash-Water Exit Holes (Floor / Wall Drains)",
    "nameTe": "ఇల్లు కడిగిన నీరు వెళ్ళే తూములు & డ్రైనేజీ పైపులు (అవుట్‌లెట్ రంధ్రాలు)",
    "category": "misc",
    "categoryEn": "Sanitary & Drainage",
    "categoryTe": "శుభ్రత & నీటి పారుదల",
    "page": "Pages 69, 87, 104, 271–281",
    "idealLocationEn": "Northeast (ENE / NNE) corner of every room and plot; or North / East if direct NE exit is unavailable (Pages 87, 104).",
    "idealLocationTe": "ప్రతి గది మరియు ఇంటి ఈశాన్యం (ENE / NNE) మూల నుండి; అది సాధ్యం కాకపోతే ఉత్తరం లేదా తూర్పు వైపు బయటకు వెళ్ళాలి (పేజీలు 87, 104).",
    "forbiddenLocationEn": "South, Southern Southwest (SSW), West, Eastern Southeast (ESE), Northern Northwest (NNW) (Pages 69, 272–275).",
    "forbiddenLocationTe": "దక్షిణం, దక్షిణ నైరుతి (SSW), పశ్చిమం, తూర్పు ఆగ్నేయం (ESE), ఉత్తర వాయువ్యం (NNW) (పేజీలు 69, 272–275).",
    "whyEn": "Pages 69, 87 & 104: Sri Thirupati Reddy states on Page 87 that waste water or wash water should flow out of ANY room strictly from the Northeastern corner, ensuring all-round prosperity and continuance of lineage. If North/East exit is impossible and water must go South (Page 104), route it first to Northeast and then through a covered drain along the eastern compound wall. Roof and floor drains in South or West are prohibited (Page 69).",
    "whyTe": "పుస్తకంలో 69, 87, 104 పేజీల ప్రకారం — ఏ గదిలోనైనా ఇల్లు కడిగిన నీరు లేదా వ్యర్థ జలం కేవలం ఈశాన్య మూల నుండే బయటకు వెళ్ళాలి (పేజీ 87); ఇది సర్వతోముఖాభివృద్ధిని, వంశాభివృద్ధిని ఇస్తుంది. తూర్పు/ఉత్తర మార్గం లేక దక్షిణానికి పంపాల్సి వస్తే (పేజీ 104), ముందుగా ఈశాన్యానికి చేర్చి తూర్పు ప్రహరీ గోడ వెంట మూసిన డ్రైనేజీ ద్వారా బయటకు పంపాలి.",
    "placements": {
      "ene": {
        "status": "ideal",
        "textEn": "✅ Eastern Northeast (ENE) — Ushers health and wealth to males foremost (Page 278)",
        "textTe": "✅ తూర్పు ఈశాన్యం (ENE) — పురుషులకు ఆరోగ్యం, ఐశ్వర్యాన్ని ప్రసాదిస్తుంది (పేజీ 278)"
      },
      "nne": {
        "status": "ideal",
        "textEn": "✅ Northern Northeast (NNE) — Ensures proper placement of wealth at crest (Page 281)",
        "textTe": "✅ ఉత్తర ఈశాన్యం (NNE) — సంపదను అత్యున్నత స్థితిలో నిలుపుతుంది (పేజీ 281)"
      },
      "north": {
        "status": "ideal",
        "textEn": "✅ North — Brings home benign growth (Pages 104, 280)",
        "textTe": "✅ ఉత్తరం — ఇంటికి శుభ వృద్ధిని తెస్తుంది (పేజీలు 104, 280)"
      },
      "east": {
        "status": "ideal",
        "textEn": "✅ East — Peace and prosperity to the host; male health & fame (Pages 104, 271)",
        "textTe": "✅ తూర్పు — యజమానికి శాంతి, సౌభాగ్యం, కీర్తి ప్రతిష్టలు (పేజీలు 104, 271)"
      },
      "ne_covered_south": {
        "status": "acceptable",
        "textEn": "⚠️ Routed first to Northeast, then covered drain along East compound wall to South (Page 104)",
        "textTe": "⚠️ ముందుగా ఈశాన్యానికి పంపి, తూర్పు గోడ వెంట మూసిన డ్రైన్‌తో దక్షిణానికి మళ్ళించడం (పేజీ 104)"
      },
      "ese": {
        "status": "forbidden",
        "textEn": "❌ Eastern Southeast (ESE) — Proves baneful to the children most (Page 272)",
        "textTe": "❌ తూర్పు ఆగ్నేయం (ESE) — సంతానానికి అత్యంత హానికరం (పేజీ 272)"
      },
      "south": {
        "status": "forbidden",
        "textEn": "❌ South — Severs peace and pace from house forthwith (Pages 69, 273)",
        "textTe": "❌ దక్షిణం — ఇంటిలో శాంతిని, పురోగతిని తక్షణమే నాశనం చేస్తుంది (పేజీలు 69, 273)"
      },
      "ssw": {
        "status": "forbidden",
        "textEn": "❌ Southern Southwest (SSW) — Deteriorates health of female spouse (Page 274)",
        "textTe": "❌ దక్షిణ నైరుతి (SSW) — గృహిణి ఆరోగ్యాన్ని తీవ్రంగా క్షీణింపజేస్తుంది (పేజీ 274)"
      },
      "west": {
        "status": "forbidden",
        "textEn": "❌ West — Roof & floor drains in West are prohibited (Page 69)",
        "textTe": "❌ పశ్చిమం — పశ్చిమ దిశలో నీటి తూములు నిషిద్ధం (పేజీ 69)"
      },
      "nnw": {
        "status": "forbidden",
        "textEn": "❌ Northern Northwest (NNW) — A perennial source of long litigation (Page 275)",
        "textTe": "❌ ఉత్తర వాయువ్యం (NNW) — దీర్ఘకాలిక కోర్టు వ్యాజ్యాలకు మూలం (పేజీ 275)"
      }
    }
  }
];

const DIRECTIONAL_ITEMS_GUIDE = {
  "ne": {
    "nameEn": "Northeast (Eshanya / Water & Divine)",
    "nameTe": "ఈశాన్యం (దేవతా స్థానం / జల తత్త్వం)",
    "elementEn": "Water / Ether (Jala / Akasha)",
    "elementTe": "జలము / ఆకాశం",
    "rulerEn": "Lord Shiva (Ishana) / Jupiter (Guru)",
    "rulerTe": "ఈశానుడు / బృహస్పతి (గురువు)",
    "prescribedEn": [
      "Puja Mandir / Deity Shrine & Idols",
      "Underground Water Sump & Borewell / Well",
      "Drinking Water Filter / Dispenser",
      "Wash Basin & Kitchen Water Sink (Jala Sthana)",
      "Sacred Basil (Tulasi) Altar",
      "Medicines & First Aid Box",
      "Light Meditation Mats & Study Desks",
      "Open Clean Lawns & Fragrant Flower Pots"
    ],
    "prescribedTe": [
      "పూజా మందిరం & దేవుని విగ్రహాలు",
      "అండర్‌గ్రౌండ్ నీటి తొట్టి, బోరుబావి & నూయి",
      "తాగునీటి కుండ & వాటర్ ఫిల్టర్",
      "వాష్ బేసిన్ & కిచెన్ సింక్ (జల స్థానం)",
      "తులసి కోట నిర్మాణం",
      "మందుల పెట్టె & ప్రథమ చికిత్స",
      "ధ్యాన ఆసనాలు & తేలికపాటి చదువుకునే బల్లలు",
      "ఖాళీ పచ్చిక బయళ్ళు & సువాసన పూల కుండీలు"
    ],
    "prohibitedEn": [
      "Heavy Cash Locker & Iron Safes",
      "Heavy Wooden Wardrobes & Almirahs",
      "Kitchen Hearth, Gas Stove & Microwave",
      "Toilet, Bathroom & Septic Tank",
      "Overhead Water Tank on Roof",
      "Brooms, Mops, Dustbins & Shoe Racks",
      "Staircases (crushes divine prana conduit)"
    ],
    "prohibitedTe": [
      "భారీ నగదు బీరువా & ఐరన్ సేఫ్‌లు",
      "భారీ వార్డ్‌రోబ్‌లు & సామాన్ల అల్మారాలు",
      "వంట పొయ్యి, గ్యాస్ స్టవ్ & మైక్రోవేవ్",
      "మరుగుదొడ్లు, స్నానాల గదులు & సెప్టిక్ ట్యాంక్",
      "పైకప్పు మీద ఓవర్‌హెడ్ వాటర్ ట్యాంక్",
      "చీపుర్లు, మాప్‌లు, చెత్తబుట్టలు & చెప్పుల స్టాండ్లు",
      "మెట్ల నిర్మాణం (ఈశాన్య మహాదోషం)"
    ],
    "guidelineEn": "Keep this sector the lowest, lightest, cleanest, and most open quadrant of the entire house to invite perennial health and fortune.",
    "guidelineTe": "ఇంటి మొత్తంలో ఈశాన్యాన్ని అత్యంత పల్లంగా, తేలికగా, అత్యంత పరిశుభ్రంగా మరియు విశాలంగా ఉంచితే నిత్య లక్ష్మీకటాక్షం, ఆయురారోగ్యాలు చేకూరుతాయి."
  },
  "east": {
    "nameEn": "East (Purva / Solar Prana)",
    "nameTe": "తూర్పు (పూర్వ / సౌర ప్రాణశక్తి)",
    "elementEn": "Solar Light / Fire-Water Junction",
    "elementTe": "సౌర ప్రాణశక్తి / అగ్ని-జల సంగమం",
    "rulerEn": "Indra / Sun God (Aditya)",
    "rulerTe": "ఇంద్రుడు / సూర్య భగవానుడు",
    "prescribedEn": [
      "Main Entrance Door (Simhadwaram in ENE)",
      "Spacious Front Verandah & Sun Decks",
      "East-Facing Hand Wash Basin & Water Tap",
      "Wall Clocks & Mirrors (reflects light)",
      "Study Tables (facing East while reading)",
      "Tulasi Altar & Light Garden",
      "Open Drainage Channels Exiting East"
    ],
    "prescribedTe": [
      "సింహద్వారం (తూర్పు ఈశాన్యంలో)",
      "విశాలమైన ముందు వరండా & బాల్కనీలు",
      "తూర్పు వైపు వాష్ బేసిన్ & నీటి కుళాయి",
      "గోడ గడియారాలు & అద్దాలు (కాంతి ప్రతిబింబం)",
      "చదువుకునే బల్లలు (తూర్పు చూస్తూ చదవాలి)",
      "తులసి కోట & అందమైన పూలతోట",
      "తూర్పు వైపు నుంచి మురుగునీటి నిష్క్రమణ"
    ],
    "prohibitedEn": [
      "Heavy Concrete Stairs Blocking Windows",
      "Tall Heavy Storage Rooms without Ventilation",
      "Septic Tank in Southeast Junction",
      "Dustbins & Outdoor Shoe Clutter",
      "Overhead Water Tank Shadowing the Yard"
    ],
    "prohibitedTe": [
      "కిటికీలను అడ్డుకునే భారీ కాంక్రీట్ మెట్లు",
      "వెలుతురు లేని ఎత్తైన బరువైన సామాన్ల గదులు",
      "ఆగ్నేయం సరిహద్దులో సెప్టిక్ ట్యాంక్",
      "చెత్తబుట్టలు & చిందరవందర చెప్పులు",
      "ముందు భాగాన్ని చీకటి చేసే ఓవర్‌హెడ్ ట్యాంక్"
    ],
    "guidelineEn": "Ensure Eastern setbacks are wider and lower than Western setbacks to bathe rooms in early therapeutic sunrise rays.",
    "guidelineTe": "పశ్చిమం కంటే తూర్పున ఎక్కువ ఖాళీ స్థలం, పల్లం ఉంచాలి, దీనివల్ల ఉదయపు సౌరకిరణాలు ఇంట్లోని క్రిములను నశింపజేసి దీర్ఘాయువునిస్తాయి."
  },
  "se": {
    "nameEn": "Southeast (Agneya / Primordial Fire)",
    "nameTe": "ఆగ్నేయం (అగ్ని స్థానం / విద్యుత్ & తాపం)",
    "elementEn": "Fire (Agni)",
    "elementTe": "అగ్ని తత్త్వం",
    "rulerEn": "Agni Deva / Venus (Shukra)",
    "rulerTe": "అగ్ని దేవుడు / శుక్రుడు",
    "prescribedEn": [
      "Kitchen Cooking Stove & Gas Cylinder",
      "Inverter, Generator & Main Electrical Distribution Panel",
      "Microwave, Oven, Toaster & Electric Geysers",
      "Television & Sound System in Living Hall",
      "Secondary External Staircase in SSE"
    ],
    "prescribedTe": [
      "వంట పొయ్యి, గ్యాస్ స్టవ్ & సిలిండర్",
      "ఇన్వర్టర్, జనరేటర్ & ప్రధాన విద్యుత్ స్విచ్ బోర్డు",
      "మైక్రోవేవ్, ఓవెన్, మిక్సీ & గీజర్లు",
      "హాలులో టీవీ & సౌండ్ సిస్టమ్",
      "దక్షిణ ఆగ్నేయంలో ప్రత్యామ్నాయ బాహ్య మెట్లు"
    ],
    "prohibitedEn": [
      "Underground Water Sump, Borewell or Wells",
      "Wash Basin / Kitchen Sink touching Gas Stove",
      "Drinking Water Pitchers or Purifiers near Stove",
      "Cash Locker & Jewelry Almirahs",
      "Master Bedroom (causes short temper & high BP)",
      "Overhead Heavy Water Tank on Roof"
    ],
    "prohibitedTe": [
      "భూగర్భ నీటి తొట్టి, బోరుబావి లేదా నూతులు",
      "గ్యాస్ స్టవ్ పక్కనే ఆనుకుని వాష్ బేసిన్ / సింక్",
      "స్టవ్ పక్కనే తాగునీటి కుండలు లేదా ఫిల్టర్లు",
      "నగదు బీరువా & బంగారు ఆభరణాల లాకర్",
      "మాస్టర్ బెడ్‌రూమ్ (కోపతాపాలు & రక్తపోటు)",
      "పైకప్పు మీద ఓవర్‌హెడ్ వాటర్ ట్యాంక్"
    ],
    "guidelineEn": "Agni must be strictly contained in Southeast. Water pits in Agneya create acute financial losses and female health disorders.",
    "guidelineTe": "అగ్ని స్థానమైన ఆగ్నేయంలో ఎలాంటి నీటి గుంతలు తవ్వకూడదు; ఇక్కడ నీరు ఉంటే అగ్ని-జల సంఘర్షణ జరిగి అపార ధన నష్టం, స్త్రీలకు అనారోగ్యం వస్తాయి."
  },
  "south": {
    "nameEn": "South (Dakshina / Heavy Load & Defense)",
    "nameTe": "దక్షిణం (యమ స్థానం / భార రక్షణ గోడ)",
    "elementEn": "Earth / Fire Junction",
    "elementTe": "పృథ్వీ / అగ్ని సంగమం",
    "rulerEn": "Yama / Mars (Kuja)",
    "rulerTe": "యమ ధర్మరాజు / కుజుడు",
    "prescribedEn": [
      "Heavy Concrete Staircases Ascending Clockwise",
      "Solid Heavy Masonry Walls & Taller Boundary",
      "Dining Hall & Secondary Family Bedrooms",
      "Heavy Wardrobes & Timber Storage",
      "Tall Evergreen Shade Trees Outside"
    ],
    "prescribedTe": [
      "సవ్యదిశలో పైకి ఎక్కే బరువైన కాంక్రీట్ మెట్లు",
      "ఎత్తైన మందపాటి రక్షణ ప్రహరీ గోడలు",
      "భోజనాల హాలు & పెద్దల పడకగదులు",
      "భారీ వార్డ్‌రోబ్‌లు & కలప సామాన్లు",
      "బయట ఆవరణలో ఎత్తైన నీడనిచ్చే వృక్షాలు"
    ],
    "prohibitedEn": [
      "Underground Water Wells & Borewells",
      "Lowest Floor Slopes or Sump Depressions",
      "Main Entrance Doorway in Southern Southwest",
      "Mirrors or Clocks on the South Wall"
    ],
    "prohibitedTe": [
      "భూగర్భ బావులు & బోరుబావులు",
      "అత్యంత పల్లపు నేల లేదా మురుగు గుంతలు",
      "దక్షిణ నైరుతిలో ప్రధాన సింహద్వారం",
      "దక్షిణ గోడపై అద్దాలు లేదా గడియారాలు"
    ],
    "guidelineEn": "The South must be heavier, thicker, and higher than the North to prevent energy and wealth drainage.",
    "guidelineTe": "దక్షిణ సరిహద్దు ఉత్తరం కంటే ఎత్తుగా, మందంగా, బరువుగా ఉండాలి; దక్షిణం పల్లంగా ఉంటే వ్యాజ్యాలు, శత్రుపీడ పెరుగుతాయి."
  },
  "sw": {
    "nameEn": "Southwest (Nairuthi / Supreme Earth Anchor)",
    "nameTe": "నైరుతి (రాక్షస / పృథ్వీ స్థిరత్వ స్థానం)",
    "elementEn": "Earth (Prithvi — Maximum Density)",
    "elementTe": "పృథ్వీ తత్త్వం (గరిష్ఠ సాంద్రత)",
    "rulerEn": "Nirruthi / Rahu",
    "rulerTe": "నిరృతి / రాహువు",
    "prescribedEn": [
      "Master Bedroom for Head of Household",
      "Cash Locker & Jewelry Almirah (opening North/East)",
      "Heaviest Structural Pillars & Solid Walls",
      "Overhead Water Tank at Highest Roof Apex",
      "Heaviest Furniture, Wardrobes & Stone Ballast"
    ],
    "prescribedTe": [
      "గృహ యజమాని మాస్టర్ బెడ్‌రూమ్",
      "నగదు బీరువా & బంగారు లాకర్ (ఉత్తరం/తూర్పు ముఖం)",
      "అత్యంత బరువైన రాతి పిల్లర్లు & గట్టి గోడలు",
      "పైకప్పు మీద అత్యంత ఎత్తులో ఓవర్‌హెడ్ వాటర్ ట్యాంక్",
      "అత్యంత భారీ వార్డ్‌రోబ్‌లు & రాతి నిర్మాణాలు"
    ],
    "prohibitedEn": [
      "Underground Well, Borewell, Sump or Pit (Fatal)",
      "Wash Basin, Kitchen Sink or Wastewater Drain",
      "Puja Room / Deity Altars",
      "Main Entrance Gate or Simhadwaram",
      "Kitchen, Stove or Fireplaces",
      "Septic Tank, Basements, Cellars or Depressions"
    ],
    "prohibitedTe": [
      "భూగర్భ బావి, బోరు, సంపు లేదా గుంత (మహా వినాశనం)",
      "వాష్ బేసిన్, కిచెన్ సింక్ లేదా మురుగు నీటి పైపు",
      "పూజా గది / దేవుని మందిరం",
      "ప్రధాన సింహద్వారం లేదా ప్రహరీ గేటు",
      "వంట పొయ్యి / అగ్ని విభాగాలు",
      "సెప్టిక్ ట్యాంక్, బేస్‌మెంట్లు, సెల్లార్లు లేదా పల్లపు నేల"
    ],
    "guidelineEn": "The Southwest MUST be the highest, heaviest, and most solid sector of the property. Cavities here bring fatal catastrophe.",
    "guidelineTe": "నైరుతి ఇంటి మొత్తంలో అత్యంత ఎత్తుగా, బరువుగా, మూసి ఉంచినట్లు ఉండాలి. నైరుతిలో గుంతలు ఉంటే యజమానికి ఆకస్మిక మరణం, తీవ్ర దివాలా తప్పవు."
  },
  "west": {
    "nameEn": "West (Paschima / Thermal Shield & Stability)",
    "nameTe": "పశ్చిమం (వరుణ స్థానం / స్థిరత్వ కవచం)",
    "elementEn": "Air / Earth (Varuna)",
    "elementTe": "వాయు / పృథ్వీ సంగమం",
    "rulerEn": "Varuna / Saturn (Shani)",
    "rulerTe": "వరుణ దేవుడు / శని",
    "prescribedEn": [
      "Children's Bedrooms & Study Chambers",
      "Dining Room (family members face East)",
      "Heavy Steel Wardrobes & Bookcases",
      "Overhead Tank Support Structure",
      "Overhead Water Tank on West Roof"
    ],
    "prescribedTe": [
      "పిల్లల పడకగదులు & అధ్యయన గదులు",
      "డైనింగ్ హాలు (తూర్పు చూస్తూ భోజనం చేయాలి)",
      "భారీ స్టీల్ బీరువాలు & పుస్తకాల రాక్స్",
      "ఓవర్‌హెడ్ ట్యాంక్ బేస్ పిల్లర్లు",
      "పశ్చిమ పైకప్పుపై వాటర్ ట్యాంక్"
    ],
    "prohibitedEn": [
      "Underground Wells, Borewells & Sumps",
      "Lowest Floor Slopes or Drainage Exits",
      "Main Entrance Door in Western Southwest (WSW)",
      "Extensive Open Setbacks without Evening Shade"
    ],
    "prohibitedTe": [
      "భూగర్భ బావులు, బోర్లు & నీటి సంపులు",
      "అత్యంత పల్లపు నేల లేదా మురుగు నిష్క్రమణ",
      "పశ్చిమ నైరుతిలో ప్రధాన సింహద్వారం",
      "సాయంత్రపు తీవ్ర ఎండను ఆపలేని విశాల ఖాళీ స్థలాలు"
    ],
    "guidelineEn": "The West should be higher and heavier than the East to buffer harsh afternoon radiation and preserve domestic peace.",
    "guidelineTe": "పశ్చిమ భాగం తూర్పు కంటే ఎత్తుగా, భారంగా ఉండాలి. మధ్యాహ్నపు తీవ్ర సూర్యతాపం నుండి రక్షణ కల్పించడానికి పశ్చిమ గోడలు బలంగా నిర్మించాలి."
  },
  "nw": {
    "nameEn": "Northwest (Vayuvya / Dynamic Wind Element)",
    "nameTe": "వాయువ్యం (వాయు స్థానం / చలనం & మార్పు)",
    "elementEn": "Air (Vayu — Constant Motion)",
    "elementTe": "వాయు తత్త్వం (నిరంతర చలనం)",
    "rulerEn": "Vayu Deva / Moon (Chandra)",
    "rulerTe": "వాయు దేవుడు / చంద్రుడు",
    "prescribedEn": [
      "Finished Goods & Outgoing Logistics in Factories",
      "Guest Bedroom & Unmarried Daughters' Bedroom",
      "Washing Machine & Laundry Drying Line",
      "Refrigerator / Food Preservation Unit",
      "Septic Tank in Northern Northwest (NNW)",
      "Shoe Rack, Brooms & Covered Dustbins Outside"
    ],
    "prescribedTe": [
      "ఫ్యాక్టరీలలో తయారైన సరుకు & రవాణా గోడౌన్",
      "అతిథుల పడకగది & పెళ్ళికి ఎదిగిన కుమార్తెల గది",
      "వాషింగ్ మెషిన్ & లాండ్రీ విభాగం",
      "రిఫ్రిజిరేటర్ / ఆహార నిల్వలు",
      "ఉత్తర వాయువ్యంలో సెప్టిక్ ట్యాంక్ (NNW)",
      "చెప్పుల స్టాండు, చీపుర్లు & మూతగల చెత్తబుట్టలు"
    ],
    "prohibitedEn": [
      "Master Bedroom for Head of Household",
      "Cash Locker & Treasury Vault (money floats away)",
      "Underground Borewell / Water Sump in exact corner",
      "Puja Room / Deity Shrine",
      "Heavy Stone Heaps or Stagnant Storage"
    ],
    "prohibitedTe": [
      "గృహ యజమాని మాస్టర్ బెడ్‌రూమ్",
      "నగదు బీరువా & ప్రధాన ఖజానా (డబ్బు నిలవక ఖర్చవుతుంది)",
      "సరిగ్గా మూలన లోతైన బోరుబావి లేదా సంపు",
      "పూజా మందిరం / దేవుని గది",
      "భారీ రాతి కుప్పలు లేదా స్తంభించిన సామాన్లు"
    ],
    "guidelineEn": "The Northwest governs movement and circulation. Storing goods here promotes rapid sales; keeping guests here prevents prolonged dependency.",
    "guidelineTe": "వాయువ్యం చలనానికి ప్రతీక. ఇక్కడ ఉంచిన వ్యాపార సరుకు త్వరగా అమ్ముడవుతుంది; కుమార్తెల గది ఇక్కడ ఉంటే సకాలంలో వివాహం జరిగి అత్తవారింటికి వెళ్తారు."
  },
  "north": {
    "nameEn": "North (Uttara / Kubera Wealth Corridor)",
    "nameTe": "ఉత్తరం (కుబేర స్థానం / అఖండ సంపద)",
    "elementEn": "Water / Geomagnetic Inflow",
    "elementTe": "జలము / పవిత్ర అయస్కాంత తరంగాలు",
    "rulerEn": "Kubera / Mercury (Budha)",
    "rulerTe": "కుబేరుడు / బుధుడు",
    "prescribedEn": [
      "Main Entrance Door (Simhadwaram in NNE)",
      "Dining Wash Basin & Water Outlet",
      "Managing Director / Cash Accounts Office",
      "Cash Drawer / Daily Business Safe (facing North)",
      "Wall Clocks, Mirrors & Glass Decor",
      "Wide Open Green Lawns & Flowing Water Fountains",
      "Low Ground Level & Water Drainage Exits"
    ],
    "prescribedTe": [
      "సింహద్వారం (ఉత్తర ఈశాన్యంలో)",
      "భోజనపు గది వాష్ బేసిన్ & నీటి అవుట్‌లెట్",
      "మేనేజింగ్ డైరెక్టర్ ఛాంబర్ / అకౌంట్స్ విభాగం",
      "రోజువారీ క్యాష్ డ్రాయర్ / వ్యాపార గల్లా పెట్టె",
      "గోడ గడియారాలు, అద్దాలు & గాజు అలంకరణలు",
      "విశాలమైన పచ్చిక బయళ్ళు & నీటి ఫౌంటెన్లు",
      "పల్లపు నేల & మురుగునీటి నిష్క్రమణ మార్గాలు"
    ],
    "prohibitedEn": [
      "Heavy Machinery, Scrap Heaps & Dead Weights",
      "Kitchen Hearth, Stoves & Fireplaces",
      "Overhead Water Tank Blocking Northern Light",
      "High Solid Compound Walls without Gates",
      "Toilets in the Exact Northern Quadrant"
    ],
    "prohibitedTe": [
      "భారీ యంత్రాలు, స్క్రాప్ గోడౌన్లు & బరువైన దిమ్మెలు",
      "వంట పొయ్యి, గ్యాస్ స్టవ్ & అగ్ని విభాగాలు",
      "ఉత్తరపు వెలుతురును అడ్డుకునే ఓవర్‌హెడ్ ట్యాంక్",
      "గేట్లు లేని ఎత్తైన మందపాటి అడ్డు గోడలు",
      "సరిగ్గా ఉత్తర భాగంలో మరుగుదొడ్లు"
    ],
    "guidelineEn": "The North channels the Earth's natural magnetic lines of force. Keep it lower, lighter, and brightly illuminated to ensure perpetual financial influx.",
    "guidelineTe": "ఉత్తర దిశ భూమి సహజ అయస్కాంత తరంగాలను గ్రహిస్తుంది. దీనిని దక్షిణం కంటే పల్లంగా, తేలికగా, వెలుతురుతో ఉంచితే ఇంట్లోకి నిరంతర ధన ప్రవాహం కొనసాగుతుంది."
  },
  "center": {
    "nameEn": "Center (Brahmasthana / Cosmic Heart & Ether)",
    "nameTe": "బ్రహ్మస్థానము (నడిమి ఇల్లు / ఆకాశ తత్త్వం)",
    "elementEn": "Space / Ether (Akasha — Zero Weight)",
    "elementTe": "ఆకాశ తత్త్వం (శూన్య భారం)",
    "rulerEn": "Lord Brahma (The Creator)",
    "rulerTe": "బ్రహ్మ దేవుడు",
    "prescribedEn": [
      "Open Central Courtyard / Courtyard Atrium",
      "Natural Sunlight Skylight Opening",
      "Light Walking Corridor / Free Circulation Area",
      "Spiritual Chantings / Peaceful Gathering Space"
    ],
    "prescribedTe": [
      "విశాలమైన ఖాళీ నడిమి ఇల్లు / ఓపెన్ హాలు",
      "పైకప్పు నుండి సహజ వెలుతురు వచ్చే స్కైలైట్",
      "తేలికపాటి నడక మార్గం / గాలి ప్రసార స్థలం",
      "శాంతియుత సమావేశాలు & ధ్యాన స్థలం"
    ],
    "prohibitedEn": [
      "Heavy Concrete Pillars or Load-Bearing Columns",
      "Staircase Steps Trampling the Core",
      "Underground Wells, Sumps, Pits or Borewells",
      "Kitchen Hearth, Stoves or Fireplaces",
      "Toilets, Septic Tanks or Sewage Pipes",
      "Heavy Almirahs, Safes or Machinery"
    ],
    "prohibitedTe": [
      "భారీ కాంక్రీట్ పిల్లర్లు లేదా బరువైన స్తంభాలు",
      "నడిమింట్లో మెట్ల నిర్మాణం",
      "భూగర్భ బావులు, సంపులు లేదా బోరుబావులు",
      "వంట పొయ్యి లేదా అగ్ని హోమాలు",
      "మరుగుదొడ్లు, సెప్టిక్ ట్యాంకులు లేదా మురుగు పైపులు",
      "భారీ బీరువాలు, సేఫ్‌లు లేదా యంత్రాలు"
    ],
    "guidelineEn": "The Brahmasthana represents the navel and heart of the Vastu Purusha. Trampling or overloading the center destroys household vitality and cardiovascular health.",
    "guidelineTe": "బ్రహ్మస్థానం వాస్తు పురుషుని నాభి స్థానం మరియు హృదయం. దీనిపై బరువులు మోపినా, గుంతలు తవ్వినా కుటుంబ సభ్యులకు గుండెజబ్బులు, తీవ్రమైన అశాంతి కలుగుతాయి."
  }
};

// --- 5. Temple Vaastu Case Studies (Pages 210–243) ---
const TEMPLE_VAASTU_STUDIES = [
  {
    "id": "tirumala",
    "tabLabelEn": "Tirumala",
    "tabLabelTe": "తిరుమల",
    "nameEn": "Tirumala Lord Venkateswara Temple",
    "nameTe": "తిరుమల శ్రీ వేంకటేశ్వర స్వామి దేవస్థానం",
    "location": "Tirumala Hills, Andhra Pradesh (Pages 210–211)",
    "observationsEn": [
      "Built by Pallavas, Cholas, and Vijayanagara emperors in strict adherence to classical Vaastu.",
      "The temple faces true East; the presiding deity Lord Venkateswara is placed in the West facing East.",
      "Surrounded by mountain ranges on all sides except the divine Northeast (Eshanya).",
      "The holy Swami Pushkarini lake is situated in the Northeast of the temple complex.",
      "Natural sacred water sources: Akasa Ganga waterfall (3 km North), Vykunta Thirtha (3 km NE), Papavinasanam (5 km NE), and Thumbura Thirtha (16 km NE).",
      "Immense mountain elevation in South and West (Nairuthi ballast) combined with natural water depression in Northeast explains its status as the wealthiest and most spiritually magnetic shrine on Earth.",
      "Thirupati Reddy's tenure as TTD Vaastu Laureate: rectified defective eastern verandah additions and southern terrace slopes that had caused the 1980 pilgrim mishaps."
    ],
    "observationsTe": [
      "పల్లవులు, చోళులు మరియు విజయనగర రాజులు పరిపూర్ణ వాస్తు నియమాలతో నిర్మించిన మహాక్షేత్రం.",
      "ఆలయం తూర్పు ముఖంగా ఉండి, శ్రీవారు పశ్చిమ గర్భాలయంలో ఉండి తూర్పును వీక్షిస్తున్నారు.",
      "ఈశాన్యం తప్ప మిగిలిన అన్ని దిక్కులలో ఎత్తైన ఏడుకొండలు సహజ రక్షణ ప్రాకారాలుగా నిలిచాయి.",
      "పరమ పవిత్రమైన స్వామి పుష్కరిణి ఆలయానికి సరిగ్గా ఈశాన్యంలో కొలువై ఉంది.",
      "ఆకాశగంగ జలపాతం ఉత్తరంలో, వైకుంఠ తీర్థం, పాపవినాశనం, తుంబురు తీర్థాలు ఈశాన్యంలో ఉన్నాయి.",
      "నైరుతి, పశ్చిమాల్లో కొండల ఎత్తు మరియు ఈశాన్యంలో అఖండ జలరాశి ఉండటం వల్లే తిరుమల ప్రపంచంలోనే అత్యంత సంపన్న, మహిమాన్విత క్షేత్రంగా అలరారుతోంది.",
      "గౌరు తిరుపతిరెడ్డి గారు TTD వాస్తు సలహాదారుగా పనిచేసి 1980 నాటి ప్రమాదాలకు కారణమైన తూర్పు వరండా లోపాలను, దక్షిణపు వాలును సరిదిద్దారు."
    ]
  },
  {
    "id": "varahaswamy",
    "tabLabelEn": "Varahaswamy",
    "tabLabelTe": "వరాహస్వామి",
    "nameEn": "Varahaswamy Temple at Tirumala",
    "nameTe": "తిరుమల శ్రీ వరాహస్వామి దేవస్థానం",
    "location": "Pushkarini Northwest Bank, Tirumala (Page 212)",
    "observationsEn": [
      "Varahaswamy, the boar incarnation of Lord Vishnu, is the original custodian of the Tirumala hills who gave land to Lord Balaji.",
      "Mythology prescribes every devotee must worship Lord Varaha before proceeding to Lord Venkateswara's shrine.",
      "Despite intensive official appeals, Varahaswamy temple receives far fewer pilgrims and donations compared to Balaji's shrine.",
      "Thirupati Reddy reveals the exact Vaastu cause: The holy Pushkarini pond lies to its Southwest, while the bazaar and access roads create high elevations in the North, with depressions in the South, Southwest, and Southeast, suppressing the shrine's independent popularity."
    ],
    "observationsTe": [
      "తిరుమల క్షేత్రాధిపతి శ్రీ వరాహస్వామి వారు. శ్రీవారి దర్శనానికి ముందే వరాహస్వామిని దర్శించుకోవాలని పురాణాలు చెబుతున్నాయి.",
      "దేవస్థానం బోర్డు ఎన్ని ప్రచారాలు చేసినా, వెంకటేశ్వర స్వామి సన్నిధితో పోలిస్తే ఇక్కడ భక్తుల సంఖ్య చాలా తక్కువగా ఉంటుంది.",
      "ఈ విచిత్రానికి తిరుపతిరెడ్డి గారు శాస్త్రీయ కారణం కనుగొన్నారు: వరాహస్వామి ఆలయానికి స్వామి పుష్కరిణి నైరుతిలో ఉంది; ఉత్తరంలో ఎత్తైన బజారు రోడ్డు ఉంది; దక్షిణం, నైరుతిలలో పల్లం ఉంది.",
      "నైరుతిలో జలము, ఉత్తరంలో ఎత్తు ఉండటం వల్ల ఎంత ప్రాముఖ్యత ఉన్నా ఈ ఆలయానికి ప్రత్యేక ఆదాయం, భక్తుల రద్దీ నిలబడలేకపోతోంది."
    ]
  },
  {
    "id": "mangapuram",
    "tabLabelEn": "Mangapuram",
    "tabLabelTe": "శ్రీనివాస మంగాపురం",
    "nameEn": "Sri Kalyana Venkateswara Temple at Srinivasa Mangapuram",
    "nameTe": "శ్రీనివాస మంగాపురం కళ్యాణ వేంకటేశ్వర స్వామి దేవస్థానం",
    "location": "Mangapuram, near Tirupati (Pages 212–213)",
    "observationsEn": [
      "Historically built in strict alignment with classical Vaastu as the abode of Lord Kalyana Venkateswara after divine matrimony.",
      "On 30-01-1985, a tragic robbery occurred resulting in the looting of sacred jewels and the untimely death of two security guards.",
      "Thirupati Reddy investigated the scene and identified recent defective additions: The Northeast of the main entrance had been artificially elevated with a garden mound, while a water well had been sunk in the Southeast (Agneya).",
      "Elevating the Northeast while depressing the Southeast invites sudden violence, theft, and security casualties as per Shastra."
    ],
    "observationsTe": [
      "స్వామివారి కల్యాణానంతరం కొలువైన పరమ పవిత్రమైన ప్రాచీన దివ్య క్షేత్రం.",
      "30-01-1985న ఆలయంలో అనూహ్యంగా దొంగతనం జరిగి, ఇద్దరు సెక్యూరిటీ గార్డులు ప్రాణాలు కోల్పోయారు.",
      "తిరుపతిరెడ్డి గారు సంఘటనా స్థలాన్ని పరిశీలించి లోపాలు నిరూపించారు: ఆలయ ప్రధాన ప్రవేశం యొక్క ఈశాన్యంలో మట్టిపోసి గార్డెన్ కోసం ఎత్తు చేశారు; ఆగ్నేయంలో బావి తవ్వారు.",
      "ఈశాన్యం ఎత్తు కావడం, ఆగ్నేయంలో గుంత పడటం వల్ల దొంగతనం, అకాల మరణాలు సంభవించాయని శాస్త్రీయంగా నిరూపించారు."
    ]
  },
  {
    "id": "kanchipuram",
    "tabLabelEn": "Kanchi Varadaraja",
    "tabLabelTe": "కంచి వరదరాజ",
    "nameEn": "Sri Varadarajaswamy Temple at Kanchipuram",
    "nameTe": "కంచి శ్రీ వరదరాజస్వామి దేవస్థానం",
    "location": "Vishnu Kanchi, Tamil Nadu (Pages 214–215)",
    "observationsEn": [
      "Monumental Vaishnavite Divya Desam constructed across successive Pallava and Chola reigns.",
      "The southern compound wall rises significantly higher than the northern and eastern boundary walls, creating auspicious southern mass.",
      "However, the outer towers are located in the Eastern Southeast and Western Southwest. Queue passages moving through the Southeast caused periodic administrative disputes and sudden income interruptions.",
      "Confirms that directional passages directly dictate pilgrim crowd flow and institutional prosperity."
    ],
    "observationsTe": [
      "పల్లవులు, చోళులు నిర్మించిన సుప్రసిద్ధ వైష్ణవ దివ్యదేశం.",
      "ఆలయ దక్షిణ ప్రాకారం తూర్పు, ఉత్తర ప్రాకారాల కంటే ఎత్తుగా ఉండి బలమైన వాస్తు రక్షణ కల్పిస్తోంది.",
      "అయితే తూర్పు ఆగ్నేయం మరియు పశ్చిమ నైరుతిలో గోపురాలు ఉండటం, క్యూలైన్లు ఆగ్నేయం గుండా సాగడం వల్ల ఆలయ ట్రస్టులో వివాదాలు, ఆకస్మిక ఇబ్బందులు ఎదురవుతున్నాయి.",
      "ప్రవేశ మార్గాలు, ప్రాకారాల ఎత్తులు దేవాలయాల వైభవాన్ని ఎలా శాసిస్తాయో కంచి క్షేత్రం ప్రత్యక్ష నిదర్శనం."
    ]
  },
  {
    "id": "kadapa",
    "tabLabelEn": "Devuni Kadapa",
    "tabLabelTe": "దేవుని కడప",
    "nameEn": "Sri Prasanna Venkateswara Temple at Devuni Kadapa",
    "nameTe": "దేవుని కడప శ్రీ ప్రసన్న వేంకటేశ్వర స్వామి దేవస్థానం",
    "location": "Kadapa, Andhra Pradesh (Page 216)",
    "observationsEn": [
      "The sacred threshold (*Gadapa*) of the pilgrimage to Tirupati, immortalized by saint-singers Annamacharya and Kshetrayya.",
      "King Anantha Bhoopathi of the Matla dynasty constructed the main entrance in the West.",
      "The sanctum sanctorum faces West with no corresponding opening in the East. Southern roads and outer depressions drain energy away.",
      "Thirupati Reddy demonstrates why this renowned historic temple struggled with suppressed incomes and pilgrim numbers despite its spiritual holiness."
    ],
    "observationsTe": [
      "తిరుమల యాత్రకు తొలి గడపగా భావించే ప్రాచీన క్షేత్రం, అన్నమయ్య మరియు క్షేత్రయ్యలచే కీర్తించబడింది.",
      "మట్ల రాజు అనంత భూపతి ఈ ఆలయ ప్రధాన ద్వారాన్ని పశ్చిమంలో నిర్మించాడు.",
      "స్వామివారు పశ్చిమం చూస్తుండటం, తూర్పున తగిన ద్వారాలు లేకపోవడం, దక్షిణపు పల్లాల వల్ల ఇంతటి మహత్యమున్నా ఆశించినంత వైభవం, నిధులు పొందలేకపోయింది.",
      "పశ్చిమ ద్వారాల లోపాలు దేవాలయ రాబడిని ఎలా పరిమితం చేస్తాయో తిరుపతిరెడ్డి గారు ఈ క్షేత్రం ద్వారా స్పష్టం చేశారు."
    ]
  },
  {
    "id": "ahobilam",
    "tabLabelEn": "Ahobilam",
    "tabLabelTe": "అహోబిలం",
    "nameEn": "Lord Lakshmi Narasimha Temple at Ahobilam",
    "nameTe": "అహోబిల నవ నారసింహ మహాక్షేత్రం",
    "location": "Nallamala Hills, Kurnool District (Page 217)",
    "observationsEn": [
      "The supreme seat of Lord Narasimha where Hiranyakasipu was vanquished, celebrated in Errapragada's Narasimha Purana.",
      "The holy mountain stream (Bhavanashini) descends continuously in the divine Northeast of the sanctum complex.",
      "The colossal western monolithic peak (*Ugra Stambham*) rises to massive heights directly in the Southwest and West.",
      "Water in the Northeast and immense mountain elevation in the Southwest grant this dense forest shrine unbreakable spiritual invincibility and perennial pilgrim crowds across millennia."
    ],
    "observationsTe": [
      "హిరణ్యకశిపుని వధించిన మహా మహిమాన్విత నవ నారసింహ క్షేత్రం, ఎర్రాప్రగడ నరసింహ పురాణంలో కొనియాడబడింది.",
      "గర్భాలయానికి సరిగ్గా ఈశాన్యంలో భవనాశినీ పవిత్ర నదీ జలాలు నిరంతరం ప్రవహిస్తున్నాయి.",
      "పశ్చిమ, నైరుతిలలో ఉగ్రస్తంభం వంటి అతి భారీ కొండలు ఆకాశమంత ఎత్తుగా నిలిచి తిరుగులేని రక్షణ కల్పించాయి.",
      "ఈశాన్యంలో జీవజలం, నైరుతిలో ఉగ్ర శిఖరాల బరువు ఉండటం వల్లే దట్టమైన అడవిలో ఉన్నప్పటికీ ఈ క్షేత్రం యుగయుగాలుగా భక్తులను ఆకర్షిస్తోంది."
    ]
  },
  {
    "id": "lepakshi",
    "tabLabelEn": "Lepakshi",
    "tabLabelTe": "లేపాక్షి",
    "nameEn": "Veerabhadra Temple at Lepakshi — 'The Wing-Lost'",
    "nameTe": "లేపాక్షి వీరభద్రస్వామి దేవస్థానం (రెక్కలు విరిగిన అద్భుతం)",
    "location": "Lepakshi, Anantapur District (Pages 218–219)",
    "observationsEn": [
      "A masterpiece of 16th-century Vijayanagara art with the famous Hanging Pillar and monolithic Nandi.",
      "Thirupati Reddy reveals why this royal project suffered premature abandonment and Virupanna's tragedy: 15 specific structural defects.",
      "The Northeast of the second compound was completely closed and walled off; a massive 54-foot open void existed in the South.",
      "Remarkable archaeological proof: Lord Vishnu's shrine in the western mandap had open setbacks exclusively in the East and North, which is why Vishnu's idol survived completely intact, while surrounding statues were broken by invaders."
    ],
    "observationsTe": [
      "విజయనగర సామ్రాజ్య శిల్పకళా అద్భుతం — వేలాడే స్తంభం, ఏకశిలా నంది గల చారిత్రక క్షేత్రం.",
      "విరూపన్న కళ్ళు తీసివేయబడటం, ఆలయ నిర్మాణం అర్ధాంతరంగా ఆగిపోవడం వెనుక ఉన్న 15 వాస్తు దోషాలను తిరుపతిరెడ్డి గారు వెలికితీశారు.",
      "రెండవ ప్రాకారంలో ఈశాన్యాన్ని పూర్తిగా మూసివేశారు; దక్షిణంలో 54 అడుగుల అశుభ ఖాళీ స్థలం ఉంది.",
      "అద్భుతమైన పరిశీలన: పశ్చిమ మండపంలోని విష్ణుమూర్తి సన్నిధికి తూర్పు, ఉత్తరాల్లో మాత్రమే ఖాళీ ఉండటం వల్ల శత్రువుల దాడిలో కూడా విష్ణు విగ్రహం చెక్కుచెదరకుండా సురక్షితంగా నిలిచింది."
    ]
  },
  {
    "id": "puttaparthi",
    "tabLabelEn": "Puttaparthi",
    "tabLabelTe": "పుట్టపర్తి",
    "nameEn": "Prasanthi Nilayam at Puttaparthi",
    "nameTe": "పుట్టపర్తి ప్రశాంతి నిలయం",
    "location": "Puttaparthi, Sri Sathya Sai District (Pages 220–221)",
    "observationsEn": [
      "Global headquarters of the Sathya Sai spiritual movement, drawing dignitaries and devotees from over 150 nations.",
      "Architectural layout formed a massive 'U'-shape: all heavy residential blocks and cottages were aligned in the South and West, leaving vast open grounds in the North.",
      "Possesses an exceptional Northern Northeast street focus, drawing billions in donations and making it one of the most prominent international spiritual centres after Vatican City.",
      "Documents the 26-10-1990 accident during the dome installation ceremony caused by temporary eastern enclosures."
    ],
    "observationsTe": [
      "150 దేశాల భక్తులను ఆకర్షించే సత్యసాయి అంతర్జాతీయ ఆధ్యాత్మిక రాజధాని.",
      "భవన నిర్మాణం 'U' ఆకారంలో ఉండి, భారీ రెసిడెన్షియల్ బ్లాకులు దక్షిణం, పశ్చిమాల్లో ఉండి ఉత్తరం అంతా విశాలంగా ఖాళీ వదిలారు.",
      "ఉత్తర ఈశాన్య వీధి శూల (శుభ శూల) ఉండటం వల్లే ప్రపంచ నలుమూలల నుండి కోట్లాది భక్తులు, వేల కోట్ల విరాళాలు ప్రవహించి వాటికన్ సిటీ తరహాలో ప్రసిద్ధి చెందింది.",
      "26-10-1990న గోపుర నిర్మాణ సమయంలో తూర్పు భాగాన్ని మూసివేయడం వల్ల జరిగిన ప్రమాదాన్ని పుస్తకంలో ఉటంకించారు."
    ]
  },
  {
    "id": "srisailam",
    "tabLabelEn": "Srisailam",
    "tabLabelTe": "శ్రీశైలం",
    "nameEn": "Lord Mallikarjuna & Bhamaramba Temple at Srisailam",
    "nameTe": "శ్రీశైల మల్లికార్జున స్వామి & భ్రమరాంబికా క్షేత్రం",
    "location": "Vrishabhagiri, Nallamala Hills (Page 222)",
    "observationsEn": [
      "One of India's rarest pilgrimage confluences: 2nd Jyotirlinga (Mallikarjuna) and 6th Shakti Peetha (Goddess Bhramaramba).",
      "Perched upon the Vrishabhagiri plateau at 458 meters above sea level.",
      "The sacred Krishna River (*Pathala Ganga*) flows majestically in the North and Northeast of the temple complex.",
      "Dense Nallamala mountain ridges and fortified stone walls provide massive elevation ballast in the South and Southwest, embodying the golden scriptural rule: Water in Northeast guarantees unbroken spiritual immortality."
    ],
    "observationsTe": [
      "భారతదేశంలోనే అరుదైన ద్వాదశ జ్యోతిర్లింగం మరియు అష్టాదశ శక్తిపీఠాల కలయిక గల క్షేత్రం.",
      "నల్లమల పర్వతాల వృషభగిరిపై సముద్ర మట్టానికి 458 మీటర్ల ఎత్తులో కొలువైన దివ్య పీఠం.",
      "కృష్ణా నది (పాతాళగంగ) ఆలయానికి సరిగ్గా ఉత్తర మరియు ఈశాన్య సరిహద్దులలో నిరంతరం ప్రవహిస్తోంది.",
      "నైరుతి, దక్షిణాల్లో నల్లమల పర్వతాల భారీ ఎత్తు ఉండటం, ఈశాన్యాన నదీజలాలు ఉండటం వల్ల యుగయుగాలుగా ఈ క్షేత్ర మహిమ అజేయంగా విరాజిల్లుతోంది."
    ]
  },
  {
    "id": "kalahasti",
    "tabLabelEn": "Kalahasti",
    "tabLabelTe": "శ్రీకాళహస్తి",
    "nameEn": "Srikalahasteeswara Vayu Linga Temple at Kalahasti",
    "nameTe": "శ్రీకాళహస్తి వాయులింగేశ్వర దేవస్థానం",
    "location": "Srikalahasti, Tirupati District (Pages 222–224)",
    "observationsEn": [
      "The ancient temple of the Air Element (*Vayu Linga*) among the Pancha Bhoota Sthalas.",
      "The sacred river Swarnamukhi flows along the North and Northeast boundaries of the temple compound.",
      "Kannappa hillocks rise steeply in the South and Southwest, anchoring the rear of the shrine.",
      "Thirupati Reddy's field audit: Revealed that agricultural land disputes occurred due to southern street cuts, and documents how rectification of northern setbacks increased revenue from Rs. 20 lakhs to over Rs. 14 crores per annum."
    ],
    "observationsTe": [
      "పంచభూత లింగాలలో అత్యంత శక్తివంతమైన వాయు లింగ క్షేత్రం (కన్నప్ప, శ్రీకాళహస్తీశ్వర).",
      "స్వర్ణముఖీ నది ఆలయానికి ఉత్తర, ఈశాన్య సరిహద్దులలో జీవనాడిగా ప్రవహిస్తోంది.",
      "కన్నప్ప కొండలు దక్షిణ, నైరుతిలలో అత్యంత ఎత్తుగా నిలబడి అద్భుతమైన వాస్తు బలాన్ని ఇస్తున్నాయి.",
      "తిరుపతిరెడ్డి గారి వాస్తు సూచనలతో ఉత్తర సరిహద్దులను సరిచేసిన తర్వాత ఆలయ వార్షిక ఆదాయం 20 లక్షల నుండి ఏకంగా 14 కోట్ల రూపాయలకు పెరిగింది."
    ]
  },
  {
    "id": "vijayawada",
    "tabLabelEn": "Vijayawada Durga",
    "tabLabelTe": "కనకదుర్గ",
    "nameEn": "Vijayawada Kanaka Durga Temple at Indrakeeladri",
    "nameTe": "విజయవాడ ఇంద్రకీలాద్రి కనకదుర్గ అమ్మవారి దేవస్థానం",
    "location": "Indrakeeladri, Vijayawada (Pages 224–225)",
    "observationsEn": [
      "The pre-eminent Shakti shrine of Andhra Pradesh, situated atop the sacred Indrakeeladri hill.",
      "The mighty Krishna River curves and flows continuously along the North and East of the shrine.",
      "Western and Southwestern granite cliffs provide immense natural rear elevation.",
      "Thirupati Reddy analyzed the southern and southwestern access road gradients that caused past pilgrim stampedes, and formulated the architectural masterplan for wider northern approaches."
    ],
    "observationsTe": [
      "ఇంద్రకీలాద్రి పర్వతంపై కొలువైన జగన్మాత కనకదుర్గ అమ్మవారి స్వయంభు శక్తిక్షేత్రం.",
      "కృష్ణా నది ఆలయానికి తూర్పు, ఉత్తర దిశలలో మాలికలా అర్ధచంద్రాకారంలో ప్రవహిస్తోంది.",
      "పశ్చిమ, నైరుతి కొండల భారము అమ్మవారి వెనుక మహా మేరు పర్వతంలా నిలిచింది.",
      "నైరుతి వైపు పల్లంగా ఉన్న పాత ఘాట్ రోడ్ల వల్ల గతంలో జరిగిన తొక్కిసలాటలను తిరుపతిరెడ్డి గారు హెచ్చరించి, ఉత్తర ముఖంగా విస్తరణ చేయాలని సూచించారు."
    ]
  },
  {
    "id": "bhadrachalam",
    "tabLabelEn": "Bhadrachalam",
    "tabLabelTe": "భద్రాచలం",
    "nameEn": "Lord Rama Temple at Bhadrachalam",
    "nameTe": "భద్రాచలం శ్రీ సీతారామచంద్రస్వామి దేవస్థానం",
    "location": "Bhadrachalam, Bhadradri District (Pages 226–227)",
    "observationsEn": [
      "The revered temple of Vaikuntha Rama on the banks of the sacred Godavari river.",
      "The temple faces West, with the river Godavari flowing along its western frontage.",
      "As per core Vaastu principles, western depression with water frontage creates vulnerability to flash floods and financial drains.",
      "Explains why the shrine experienced historical sieges during Tanisha's reign until Bhakta Ramadasu built eastern ramparts, high northern walls, and celestial marriage halls that balanced the structural energy."
    ],
    "observationsTe": [
      "గోదావరి తీరంలో భక్త రామదాసు నిర్మించిన వైకుంఠ రామచంద్రుని మహాక్షేత్రం.",
      "ఈ ఆలయం పశ్చిమ ముఖంగా ఉండి, గోదావరి నది కూడా ఆలయానికి పశ్చిమాన ప్రవహిస్తోంది.",
      "వాస్తు శాస్త్ర ప్రకారం పశ్చిమ భాగాన పల్లం, నీరు ఉండటం వల్ల గతంలో ఆలయానికి ఎన్నో ఆర్థిక, రాజకీయ ఒడిదుడుకులు, వరద ముప్పులు ఎదురయ్యాయి.",
      "రామదాసు గారు తూర్పున రక్షణ గోడలు, ఉత్తరాన కల్యాణ మండపం నిర్మించి వాస్తు సమతుల్యత సాధించడం వల్ల క్షేత్ర ఖ్యాతి నిలిచింది."
    ]
  },
  {
    "id": "konark",
    "tabLabelEn": "Konark Sun Temple",
    "tabLabelTe": "కోణార్క్ సూర్య దేవాలయం",
    "nameEn": "Sun Temple at Konark — The Fallen Colossus",
    "nameTe": "కోణార్క్ సూర్య దేవాలయం — ఒరిస్సా (కూలిన అద్భుతం)",
    "location": "Konark, Odisha (Pages 228–229)",
    "observationsEn": [
      "13th-century monumental stone chariot temple dedicated to Sun God Surya, built by King Narasimhadeva I.",
      "Designed to receive the first rays of the dawn sun through the main eastern entrance.",
      "Thirupati Reddy reveals why the 229-foot main sanctuary (*Vimana*) collapsed: The eastern entrance was blocked by the subsequent construction of a heavy 'Natya Mandapa' (Dance Podium) directly in front of the sanctum.",
      "The southern entrance forced pilgrim movement southward into low terrain, suffocating solar prana and precipitating structural collapse."
    ],
    "observationsTe": [
      "13వ శతాబ్దంలో లాంగుల నరసింహదేవుడు నిర్మించిన అద్భుతమైన ఏకశిలా రథ సూర్య దేవాలయం.",
      "ఉదయపు తొలి సూర్యకిరణాలు గర్భాలయంలోని సూర్య భగవానుని పాదాలపై పడేలా నిర్మించారు.",
      "229 అడుగుల ప్రధాన గోపురం కూలిపోవడానికి గల వాస్తు రహస్యాన్ని తిరుపతిరెడ్డి గారు వివరించారు: తూర్పు ముఖద్వారం ఎదురుగా భారీ నాట్య మండపం కట్టి సూర్యకిరణాలను పూర్తిగా అడ్డుకున్నారు.",
      "దక్షిణ ద్వారం గుండా ప్రయాణం సాగడం వల్ల ఉదయపు ప్రాణశక్తి ఆగిపోయి ప్రధాన గోపురం శిథిలమై కూలిపోయింది."
    ]
  },
  {
    "id": "annavaram",
    "tabLabelEn": "Annavaram",
    "tabLabelTe": "అన్నవరం",
    "nameEn": "The Super Vaastu of Sri Satyanarayana Swamy at Annavaram",
    "nameTe": "అన్నవరం శ్రీ సత్యనారాయణ స్వామి దేవస్థానం — దివ్య వాస్తు",
    "location": "Ratnagiri Hills, Kakinada District (Pages 230–233)",
    "observationsEn": [
      "Perched atop the holy Ratnagiri hill in the shape of a divine chariot.",
      "The sacred river Pampa curves gracefully around the North and Northeast bases of the hill.",
      "The main peak of Ratnagiri rises heavily in the Southwest, creating an ideal natural SW-to-NE slope.",
      "Features an auspicious Eastern Northeast approach path, making Annavaram the second highest grossing shrine in Andhra Pradesh with thousands of daily holy wedding vrathams."
    ],
    "observationsTe": [
      "రత్నగిరి పర్వతంపై రథాకారంలో వెలసిన సత్యదేవుని నిత్య కళ్యాణ క్షేత్రం.",
      "పవిత్ర పంపా నది కొండకు ఉత్తర మరియు ఈశాన్య సరిహద్దులలో వయ్యారంగా ప్రవహిస్తోంది.",
      "రత్నగిరి కొండ ఎత్తు నైరుతిలో గరిష్ఠంగా ఉండి, సహజ సిద్ధమైన అమృత వాలు ఈశాన్యం వైపు ఉంది.",
      "తూర్పు ఈశాన్య ప్రవేశ మార్గం ఉండటం వల్లే అన్నవరం నిత్యం వేలాది సత్యనారాయణ వ్రతాలతో, ఆంధ్రప్రదేశ్ లోనే రెండవ అత్యధిక ఆదాయం గల దేవాలయంగా ప్రసిద్ధి చెందింది."
    ]
  },
  {
    "id": "kanyakumari",
    "tabLabelEn": "Kanyakumari",
    "tabLabelTe": "కన్యాకుమారి",
    "nameEn": "Vivekananda Rock Memorial at Kanyakumari",
    "nameTe": "కన్యాకుమారి వివేకానంద రాక్ మెమోరియల్",
    "location": "Vavathurai, Kanyakumari, Tamil Nadu (Pages 234–236)",
    "observationsEn": [
      "Built upon a holy ocean rock where Swami Vivekananda meditated on India's destiny in 1892.",
      "Surrounded on all sides by the three seas (Indian Ocean, Bay of Bengal, Arabian Sea).",
      "Mandatory tourist entry passes through the Northeast gate near the podium; descent proceeds smoothly from South toward Northern Northeast.",
      "Surrounded by vast ocean waters in the Northeast with no southward downward gradient, drawing over 3,000 visitors daily and continuous financial stability."
    ],
    "observationsTe": [
      "ముక్కడలి సంగమంలో స్వామి వివేకానంద ధ్యానం చేసిన పవిత్ర సముద్ర శిలలపై నిర్మించిన స్మారకం.",
      "భారతదేశ దక్షిణ కొనన మూడు సముద్రాల మధ్య వెలసిన అంతర్జాతీయ పర్యాటక ఆకర్షణ.",
      "యాత్రికుల ప్రవేశం ఈశాన్య ద్వారం గుండా జరిగి, నడక దక్షిణం నుండి ఉత్తర ఈశాన్యం వైపుకు సాగుతుంది.",
      "ఈశాన్యంలో అనంత జలరాశి ఉండటం, దక్షిణ దిశగా లోయ పల్లం లేకపోవడం వల్లే నిత్యం వేలాది మంది సందర్శకులతో నిరంతర వైభవాన్ని పొందుతోంది."
    ]
  },
  {
    "id": "hampi",
    "tabLabelEn": "Hampi Virupaksha",
    "tabLabelTe": "హంపి విరూపాక్ష",
    "nameEn": "Hampi Virupaksha Temple & Vijayanagara Royal Edifices",
    "nameTe": "హంపి విరూపాక్ష ఆలయం & విజయనగర పతన రహస్యం",
    "location": "Hampi, Bellary District, Karnataka (Pages 236–237)",
    "observationsEn": [
      "The ancient seat of Lord Virupaksha on the banks of Tungabhadra river.",
      "Under Emperor Sri Krishnadevaraya, royal palace compounds maintained massive Southwest stone elevation.",
      "Thirupati Reddy's archaeological audit reveals the fatal flaw behind the Talikota defeat (1565): The northern compound wall was extended haphazardly, chopping off the Northeast by 10 feet and extending the Northwest.",
      "A defective Northwest extension invites sudden military betrayal, court intrigue, and annihilation of the ruling dynasty."
    ],
    "observationsTe": [
      "తుంగభద్రా నదీ తీరంలో విలసిల్లిన విజయనగర సామ్రాజ్య ఆరాధ్య దైవం విరూపాక్షుని క్షేత్రం.",
      "శ్రీకృష్ణదేవరాయల కాలంలో రాజభవనాలు నైరుతి ఎత్తుతో పరమ పవిత్ర వాస్తుతో నిర్మించబడ్డాయి.",
      "తాళికోట యుద్ధంలో (1565) విజయనగరం పతనమవ్వడానికి గల వాస్తు దోషాన్ని తిరుపతిరెడ్డి గారు కనిపెట్టారు: ఉత్తర ప్రాకారాన్ని తప్పుగా నిర్మించి ఈశాన్యాన్ని 10 అడుగులు కత్తిరించి, వాయువ్యాన్ని పెంచారు.",
      "వాయువ్యం పెరగడం వల్ల సైన్యాధ్యక్షుల ద్రోహం, ఆకస్మిక దాడి జరిగి మహా సామ్రాజ్యం క్షణాల్లో ధ్వంసమైంది."
    ]
  },
  {
    "id": "nanjangud",
    "tabLabelEn": "Nanjangud",
    "tabLabelTe": "నంజనగూడు",
    "nameEn": "Srikanteshwara Temple at Nanjangud (Dakshina Kashi)",
    "nameTe": "నంజనగూడు శ్రీకంఠేశ్వర దేవస్థానం (దక్షిణ కాశి)",
    "location": "Nanjangud, Mysore District, Karnataka (Pages 238–239)",
    "observationsEn": [
      "Ancient shrine of Lord Shiva (*Nanjundeshwara*) on the banks of the sacred Kapila (Kabini) river.",
      "Hyder Ali, the Sultan of Mysore, offered an emerald necklace (*Hakim Nanjunda*) after his beloved royal elephant was cured of blindness.",
      "Vast low-lying open expanse extends in the East, North, and Northeast of the temple compound.",
      "The sacred river flows from West to East just 100 feet north of the shrine with a direct northeastern bathing ghat, maintaining unbroken divine prosperity."
    ],
    "observationsTe": [
      "కపిలా నదీ తీరంలో కొలువైన పురాతన దక్షిణ కాశి క్షేత్రం.",
      "మైసూరు పాలకుడు హైదర్ అలీ తన ప్రియమైన ఏనుగు కంటిచూపు తిరిగి రావడంతో స్వామివారికి పచ్చల హారం సమర్పించి పూజించాడు.",
      "ఆలయానికి తూర్పు, ఉత్తర, ఈశాన్యాలలో విశాలమైన పల్లపు ఖాళీ స్థలం సహజ రక్షణగా ఉంది.",
      "కేవలం 100 అడుగుల దూరంలో ఉత్తరాన కపిలా నది పశ్చిమం నుండి తూర్పునకు ప్రవహించడం వల్ల శతాబ్దాలుగా ఈ క్షేత్రం నిత్యారాధనలతో వెలుగొందుతోంది."
    ]
  },
  {
    "id": "chamundeswari",
    "tabLabelEn": "Chamundi Hills",
    "tabLabelTe": "చాముండేశ్వరి",
    "nameEn": "Chamundeswari Temple on Chamundi Hills, Mysore",
    "nameTe": "మైసూర్ చాముండి హిల్స్ చాముండేశ్వరి అమ్మవారి దేవస్థానం",
    "location": "Chamundi Hills, Mysore, Karnataka (Page 240)",
    "observationsEn": [
      "Historic hilltop shrine of Goddess Chamundeswari, the tutelary deity of the Wadiyar Maharajas.",
      "The approach road winds initially towards Eastern Northeast and ascends via Northern Northeast.",
      "Temple flooring is laid with an unhindered gradient towards the East, channeling ceremonial wash waters west-to-east.",
      "Sapta Matrikas podium anchors the Southwest; Lakshminarayana temple occupies the outer Southwest, ensuring continuous royal patronage and global tourism fame."
    ],
    "observationsTe": [
      "మైసూరు ఒడయార్ మహారాజుల కులదైవం, మహిషాసురమర్దిని చాముండేశ్వరి కొలువైన దివ్య గిరి క్షేత్రం.",
      "ఘాట్ రోడ్డు తూర్పు ఈశాన్యం గుండా సాగి ఉత్తర ఈశాన్యం వద్ద ఆలయ ప్రాంగణాన్ని చేరుతుంది.",
      "ఆలయ ఫ్లోరింగ్ పశ్చిమం నుండి తూర్పు వైపుకు చక్కటి వాలు కలిగి తీర్థ జలాలు తూర్పునకు ప్రవహిస్తాయి.",
      "సప్తమాతృకల పీఠం, లక్ష్మీనారాయణ ఆలయాలు నైరుతిలో ఉండి బరువును పెంచడం వల్ల అమ్మవారి ఖ్యాతి అజరామరంగా నిలిచింది."
    ]
  },
  {
    "id": "belagola",
    "tabLabelEn": "Sravana Belagola",
    "tabLabelTe": "శ్రవణబెళగొళ",
    "nameEn": "Lord Gomateswara (Bahubali) at Sravana Belagola",
    "nameTe": "శ్రవణబెళగొళ గోమటేశ్వర (బాహుబలి) దివ్య క్షేత్రం",
    "location": "Vindhyagiri Hills, Hassan District, Karnataka (Pages 240–241)",
    "observationsEn": [
      "A 57-foot monolithic granite statue of Lord Bahubali carved in 981 CE atop Vindhyagiri hill.",
      "Bahubali faces true North, aligned precisely to the magnetic compass.",
      "The pilgrim staircase ascends from the Northeast, turns toward the North, and reaches the sacred feet from Northern Northeast.",
      "The statue is erected right on the southern crest with no southward descent; a perennial sacred pond (*Kalyani*) lies in the Northern Northeast, drawing over 3,000 visitors daily."
    ],
    "observationsTe": [
      "క్రీ.శ. 981లో వింధ్యగిరి కొండపై చెక్కిన 57 అడుగుల ఏకశిలా బాహుబలి మహా విగ్రహం.",
      "గోమటేశ్వర స్వామి కచ్చితంగా ఉత్తర ముఖంగా దిక్సూచికి అనుగుణంగా నిలబడి ఉన్నారు.",
      "మెట్ల మార్గం ఈశాన్యం నుండి ప్రారంభమై ఉత్తరం వైపు తిరిగి, ఉత్తర ఈశాన్యం నుండి స్వామివారి పాదాల వద్దకు చేరుస్తుంది.",
      "విగ్రహం కొండ దక్షిణ అంచున ఉండి, ఉత్తర ఈశాన్యంలో కల్యాణి పుష్కరిణి ఉండటం వల్ల నిత్యం వేలాది మంది అంతర్జాతీయ యాత్రికులతో అలరారుతోంది."
    ]
  },
  {
    "id": "belur",
    "tabLabelEn": "Belur Math",
    "tabLabelTe": "బేలూరు మఠం",
    "nameEn": "Ramakrishna Math & Mission at Belur (Belur Math)",
    "nameTe": "బేలూరు రామకృష్ణ మఠం — పశ్చిమ బెంగాల్",
    "location": "Howrah, West Bengal (Pages 241–242)",
    "observationsEn": [
      "Founded by Swami Vivekananda as the world headquarters of the Ramakrishna Math and Mission.",
      "The holy river Ganges (Hooghly) flows along its entire Eastern border—the supreme auspicious feature in Vaastu.",
      "Temples of Swami Vivekananda and Holy Mother Sarada Devi are positioned in the South and Southeast.",
      "Vast open gardens and pathways grace the Eastern Northeast, channeling divine Ganges prana to sustain its selfless global humanitarian mission across centuries."
    ],
    "observationsTe": [
      "మానవ సేవే మాధవ సేవ అనే ఆదర్శంతో స్వామి వివేకానంద స్థాపించిన రామకృష్ణ మిషన్ ప్రపంచ ప్రధాన కేంద్రం.",
      "పవిత్ర గంగా నది మఠానికి తూర్పు సరిహద్దు వెంట నిరంతరం ప్రవహించడం దీని అత్యుత్తమ వాస్తు బలం.",
      "వివేకానంద మరియు శారదా దేవి మందిరాలు దక్షిణం మరియు ఆగ్నేయాలలో కొలువై ఉన్నాయి.",
      "తూర్పు ఈశాన్యంలో విశాలమైన పచ్చిక బయళ్ళు, ఉద్యానవనాలు ఉండి గంగానది ప్రాణశక్తిని గ్రహిస్తూ శతాబ్దాలుగా విశ్వవ్యాప్త సేవలను అందిస్తోంది."
    ]
  },
  {
    "id": "sringeri",
    "tabLabelEn": "Sringeri Sharada",
    "tabLabelTe": "శృంగేరి శారదా పీఠం",
    "nameEn": "Sringeri Sharada Peeth in Karnataka",
    "nameTe": "శృంగేరి శ్రీ శారదా పీఠం — కర్ణాటక",
    "location": "Chikkamagaluru District, Karnataka (Pages 242–243)",
    "observationsEn": [
      "The first and foremost monastic seat of Advaita Vedanta established by Jagadguru Adi Shankaracharya.",
      "Goddess Sharadamba's temple enjoys a powerful street focus in Northern Northeast.",
      "The sacred Tungabhadra River flows from South to Eastern Northeast, naturally expanding the Eastern Northeast boundary.",
      "The Jeeva Samadhi of Saint Vidya Tirtha anchors the Southwest of the temple complex, while the river flows north of Narasimhavana, guaranteeing unbroken spiritual sovereignty and Vedic scholarship."
    ],
    "observationsTe": [
      "జగద్గురు ఆది శంకరాచార్యులచే ప్రతిష్ఠించబడిన ప్రప్రథమ దక్షిణామ్నాయ శారదా పీఠం.",
      "శారదాంబ అమ్మవారి ఆలయానికి ఉత్తర ఈశాన్యంలో అత్యంత శుభప్రదమైన వీధి శూల ఉంది.",
      "తుంగభద్రా నది దక్షిణం నుండి తూర్పు ఈశాన్యం వైపు ప్రవహిస్తూ ఈశాన్య భాగాన్ని సహజంగా విస్తరింపజేస్తోంది.",
      "విద్యా తీర్థుల జీవ సమాధి నైరుతిలో ఉండి పీఠానికి అఖండ తపశ్శక్తిని, నరసింహవనానికి ఉత్తరాన నది ఉండటం వల్ల పీఠ వైభవం అప్రతిహతంగా కొనసాగుతోంది."
    ]
  }
];

// --- 6. Special Living Conditions (Pages 59, 154, 166, 196, 204) ---
const SPECIAL_LIVING_RULES = [
  {
    id: "rented",
    titleEn: "Relevance of Vaastu to Rented Houses",
    titleTe: "అద్దె ఇళ్లకు వాస్తు ఫలితాలు వర్తిస్తాయా?",
    page: "Page 196",
    detailsEn: "Sri Thirupati Reddy disproves the superstition that Vaastu only affects property owners. He uses the analogy of an umbrella: If an umbrella has holes, it protects neither owner nor hired user. The person living, sleeping, and breathing inside absorbs 80% of its real-time electromagnetic and topographic energy fields. Tenants must inspect Vaastu as carefully as owners.",
    detailsTe: "వాస్తు కేవలం యజమానికే వర్తిస్తుంది, అద్దెకు ఉండేవారికి వర్తించదు అనే అపోహను తిరుపతిరెడ్డి గారు తిరస్కరించారు. చిల్లుల గొడుగును యజమాని వాడినా, అద్దెకు తీసుకున్నవాడు వాడినా వర్షానికి తడవక తప్పదు. అలాగే ఇంట్లో నివసిస్తూ శ్వాసించే అద్దెదారులే ఆ ఇంటి ఫలితాలలో 80% నేరుగా అనుభవిస్తారు. కాబట్టి అద్దె ఇల్లు తీసుకునేటప్పుడు కూడా వాస్తును తప్పక చూడాలి."
  },
  {
    id: "sleeping",
    titleEn: "Why Head Towards North is Forbidden While Sleeping",
    titleTe: "ఉత్తరం వైపు తలపెట్టి ఎందుకు పడుకోకూడదు?",
    page: "Page 166",
    detailsEn: "Bio-magnetic resonance between human hemoglobin and Earth's geomagnetic field. The human head acts as the positive North Pole and feet as the South Pole. Sleeping with head to North causes identical magnetic poles to repel (North repels North). This causes blood pressure anomalies, cerebral blood circulation stress, insomnia, and chronic migraines. Recommended: Head to South or West.",
    detailsTe: "భూమికి అయస్కాంత ఉత్తర, దక్షిణ ధ్రువాలు ఉన్నట్లే మానవ శరీరంలో శిరస్సు ఉత్తర ధ్రువము, పాదాలు దక్షిణ ధ్రువము. సజాతి ధ్రువాలు వికర్షించుకుంటాయి. ఉత్తరం తలపెట్టి పడుకుంటే రక్తంలోని ఐరన్ ప్రభావితమై రక్తపోటు పెరగడం, మెదడుకు ఒత్తిడి, నిద్రలేమి వస్తాయి. కాబట్టి ఎల్లప్పుడూ దక్షిణాన లేదా పశ్చిమాన తలపెట్టి నిద్రించడం శ్రేయస్కరం."
  },
  {
    id: "tulasi",
    titleEn: "Placement of the Sacred Basil / Tulasi Altar",
    titleTe: "తులసి కోట నిర్మాణం & విశిష్టత",
    page: "Page 204",
    detailsEn: "The sacred Tulasi altar must strictly be positioned in the Northeast (Eshanya), East, or North open courtyard. It should never be built in the Southwest or Southeast corners. Morning circumambulation infuses the body with nascent ozone and essential terpenes released by the plant, calming the nervous system.",
    detailsTe: "తులసి కోటను ఇంటి ఆవరణలోని ఈశాన్యం, తూర్పు లేదా ఉత్తరపు ఖాళీ స్థలంలో మాత్రమే నిర్మించాలి. నైరుతి లేదా ఆగ్నేయంలో ఎట్టిపరిస్థితుల్లో పెట్టకూడదు. ఉదయపు సూర్యకాంతిలో తులసి కోట చుట్టూ ప్రదక్షిణ చేయడం వల్ల ప్రాణవాయువు లభించి మనస్సు ప్రశాంతంగా ఉంటుంది."
  },
  {
    id: "cellar",
    titleEn: "Cellars & Basements Excavation",
    titleTe: "సెల్లార్లు & బేస్‌మెంట్ల నియమాలు",
    page: "Page 59, 318",
    detailsEn: "A cellar or basement excavated in the North or Northeast section of a building brings immense prosperity and wealth. However, excavating a cellar in the South or Southwest creates a disastrous cavity where maximum foundation weight is required, inviting immediate business bankruptcy and physical ruin.",
    detailsTe: "భవనంలో సెల్లార్ లేదా భూగర్భ గదిని ఉత్తరం లేదా ఈశాన్యం వైపు తవ్వితే అఖండ ఐశ్వర్యం లభిస్తుంది. కానీ దక్షిణం లేదా నైరుతిలో సెల్లార్ తవ్వితే అది మహాదోషమై వ్యాపారాలు దివాలా తీస్తాయి."
  },
  {
    id: "understairs",
    titleEn: "Rooms Under the Staircase & Landings",
    titleTe: "మెట్ల లాండింగ్ క్రింది గదుల నియమాలు",
    page: "Pages 154–155",
    detailsEn: "Pages 154–155: Under outside linear stairs reaching the terrace, bathrooms, latrines, stores, or meter rooms must NOT be built in any direction. Rooms under WSW (West-facing) or SSW (South-facing) stair landings are unfavourable and must be completely avoided. Under ESE or NNW landings, abutting rooms must be balanced by an ENE or NNE pillar and wall in line with the house.",
    detailsTe: "పుస్తకంలో 154–155 పేజీల ప్రకారం — టెర్రస్‌కు వెళ్లే బయటి నిలువు మెట్ల లాండింగ్ క్రింద ఏ దిశలోనూ బాత్రూమ్‌లు, మరుగుదొడ్లు, స్టోర్ రూమ్‌లు లేదా మీటర్ గదులు కట్టకూడదు. WSW (పశ్చిమ) లేదా SSW (దక్షిణ) మెట్ల లాండింగ్ క్రింద గదులు పూర్తిగా నిషిద్ధం. ESE/NNW లో గది ఉంటే ENE/NNE వద్ద పిల్లర్ & గోడతో సరిదిద్దాలి."
  },
  {
    id: "maindoor",
    titleEn: "Main Entrance (Simhadwaram) & Uchha Sthana Doorways",
    titleTe: "సింహద్వారం & ఉచ్ఛ స్థానాల ద్వార నిర్ణయం",
    page: "Pages 140–143",
    detailsEn: "Sri Thirupati Reddy debunks the myth of odd vs even door counts (e.g. counting 11 vs 12 doors). What strictly matters is placing doors in Exalted (Uchha) sectors: East of NE, North of NE, South of SE, and West of NW. Main entrance must face straight without obstruction. Opposite doors and windows ensure unimpeded prana airflow.",
    detailsTe: "ఇంట్లో ద్వారాల సంఖ్య సరి లేదా బేసి (11 లేదా 12) ఉండాలనే అపోహను తిరుపతిరెడ్డి గారు తోసిపుచ్చారు. ద్వారాల సంఖ్య ముఖ్యం కాదు, వాటిని ఉచ్ఛ స్థానాలలో అమర్చడమే ముఖ్యం: తూర్పు-ఈశాన్యం, ఉత్తర-ఈశాన్యం, దక్షిణ-ఆగ్నేయం, పశ్చిమ-వాయువ్యంలలోనే తలుపులు ఉండాలి. ప్రధాన ద్వారానికి ఎదురుగా కిటికీలు ఉండి గాలి ధారాళంగా ప్రసరించాలి."
  },
  {
    id: "almirah_wealth",
    titleEn: "Almirahs, Wardrobes & Cash Locker in Southwest",
    titleTe: "బీరువాలు, అల్మారాలు & కుబేర ధన లాకర్ స్థానం",
    page: "Page 150",
    detailsEn: "All heavy wooden and steel almirahs must be set against the South and West walls. The auspicious Cash and Jewelry Locker (Beroo) must be situated in the South-West corner of the bedroom or treasury, opening towards the North (Kubera's direction) or East. It should never open towards South.",
    detailsTe: "భారీ బీరువాలు, వార్డ్‌రోబ్‌లను ఎల్లప్పుడూ దక్షిణ, పశ్చిమ గోడలనే ఆనించి ఉంచాలి. ముఖ్యంగా నగదు, నగలు ఉంచే ప్రధాన బీరువాను గదిలో నైరుతి మూలన పెట్టి, దాని తలుపులు ఉత్తరం (కుబేర దిశ) లేదా తూర్పు వైపు తెరుచుకునేలా అమర్చాలి. దక్షిణం వైపు ఎట్టిపరిస్థితుల్లో తెరవరాదు."
  },
  {
    id: "staircase",
    titleEn: "Staircase Construction, Wall Interspace & Ascent",
    titleTe: "మెట్ల నిర్మాణం, గోడ అంతరం & ఎక్కుడు దిశలు",
    page: "Pages 151–154",
    detailsEn: "Internal staircases may be built in any room EXCEPT the Northeastern and Southwestern rooms, leaving at least a 3-inch gap from Eastern and Northern walls. Steps must proceed initially from North-to-South or East-to-West, then turn after the landing to enter the upper floor in an exalted position. External stairs must not be roofed (Page 154).",
    detailsTe: "ఇంటి లోపలి మెట్లను ఈశాన్యం మరియు నైరుతి గదులలో తప్ప మిగిలిన గదులలో కట్టవచ్చు; తూర్పు, ఉత్తర గోడలను తాకకుండా కనీసం 3 అంగుళాల ఖాళీ వదలాలి. మెట్లు ప్రారంభంలో ఉత్తరం→దక్షిణం లేదా తూర్పు→పశ్చిమం ఎక్కి ఉచ్ఛ స్థానంలోకి తిరగాలి. బయటి మెట్లపై కప్పు వేయకూడదు (పేజీ 154)."
  },
  {
    id: "well_sump",
    titleEn: "Borewells, Wells & Sump Exclusively in Eshanya",
    titleTe: "బోరుబావి, నూతులు & సంపులు ఈశాన్యంలోనే ఎందుకు?",
    page: "Page 155",
    detailsEn: "Subterranean water reservoirs and borewells must be excavated exclusively in the divine North-East quadrant (Eshanya). Digging a well or water pit in South-West, South, or South-East brings immediate chronic debt, bankruptcy, domestic tragedy, and fatal accidents.",
    detailsTe: "భూగర్భ జల వనరులైన బోరుబావి, బావి, మరియు సంపులను కేవలం ఈశాన్యంలోనే తవ్వాలి. నైరుతి, దక్షిణం లేదా ఆగ్నేయాలలో బావి తవ్వితే అంతులేని అప్పులు, వ్యాపార నష్టాలు, ప్రాణహాని తప్పవని గ్రంథంలో స్పష్టంగా హెచ్చరించారు."
  },
  {
    id: "hearth_kitchen",
    titleEn: "Ideal Kitchen Hearth & Cooking Facing East",
    titleTe: "వంట పొయ్యి అమరిక & తూర్పు ముఖ వంట",
    page: "Page 159",
    detailsEn: "The primary cooking hearth or gas stove must be situated in the South-East corner (Agneya). The housewife must always face East while cooking to receive early morning solar ultraviolet rays, boosting vitality and family health. Alternative kitchen: North-West (Vayuvya) facing East.",
    detailsTe: "వంటగదిని ఆగ్నేయంలో ఏర్పాటు చేసి, స్టవ్ లేదా పొయ్యిని ఆగ్నేయ మూలన తూర్పు ముఖంగా అమర్చాలి. వంట చేసే గృహిణి తూర్పు ముఖంగా నిలబడటం వల్ల ఉదయపు సౌరకిరణాలు సోకి ఆమె ఆరోగ్యం, వంశాభివృద్ధి బాగుంటాయి. ప్రత్యామ్నాయంగా వాయువ్యంలో వంటగది పెట్టినా తూర్పు ముఖంగానే వండాలి."
  },
  {
    id: "pooja_prayers",
    titleEn: "Deity Room & The Scientific Mystery of Prayers Facing West",
    titleTe: "పూజా మందిరం & పడమర ముఖ ప్రార్థనల శాస్త్రీయ రహస్యం",
    page: "Page 162",
    detailsEn: "The Pooja room belongs in East or North-East. Thirupati Reddy reveals a profound scientific truth: While idols face East, the devotee praying facing West receives sunrise cosmic rays directly upon the forehead and Sahasrara chakra. Praying facing South is prohibited.",
    detailsTe: "దేవుని గదిని తూర్పు లేదా ఈశాన్యంలో ఉంచాలి. తిరుపతిరెడ్డి గారు వివరించిన అద్భుత సత్యం: దేవుని విగ్రహాలు తూర్పు ముఖంగా ఉండి, భక్తుడు పడమర ముఖంగా కూర్చుని పూజించినపుడు ఉదయపు సూర్యకాంతి మరియు ప్రాణశక్తి నేరుగా నుదిటిపై, సహస్రారంపై పడి మానసిక ఏకాగ్రత, తేజస్సు కలుగుతాయి. దక్షిణం వైపు ముఖం పెట్టి పూజించరాదు."
  },
  {
    id: "oht_elevation",
    titleEn: "Overhead Water Tank — Maximum Elevation in Southwest",
    titleTe: "ఓవర్‌హెడ్ వాటర్ ట్యాంక్ — నైరుతి శిఖర స్థానం",
    page: "Page 171",
    detailsEn: "The overhead water tank stores enormous tons of dead weight. It must strictly be positioned at the highest point of the roof in the South-West (Nairuthi) corner. Building an overhead tank over the North-East corner crushes the celestial energy conduit, leading to financial starvation.",
    detailsTe: "పైకప్పు మీద ఉండే ఓవర్‌హెడ్ వాటర్ ట్యాంక్ భారీ బరువును కలిగి ఉంటుంది. దానిని ఇంటి పైభాగంలో నైరుతి మూలన అత్యంత ఎత్తులో నిర్మించాలి. పొరపాటున కూడా ఈశాన్యం వైపు ఓవర్‌హెడ్ ట్యాంక్ నిర్మించరాదు, అది ధన నష్టాన్ని, కుటుంబ కలతలను కలిగిస్తుంది."
  },
  {
    id: "compound_gates",
    titleEn: "Compound Walls, Height Gradients & Sentry Gates",
    titleTe: "రక్షణ ప్రహరీ గోడలు, ఎత్తుల వాలు & ప్రధాన గేట్లు",
    page: "Pages 175, 179",
    detailsEn: "The compound wall must be thicker and taller along the South and West sides, and thinner and lower along the North and East sides. Main compound gates must be positioned in Exalted (Uchha) zones (ENE or NNE). Never locate main gate in Southern Southwest or Western Southwest.",
    detailsTe: "ఇంటి చుట్టూ ఉండే ప్రహరీ గోడ దక్షిణం, పశ్చిమాలలో ఎత్తుగా, మందంగా ఉండాలి; తూర్పు, ఉత్తరాలలో పల్లంగా, పల్చగా ఉండాలి. ప్రహరీ గేట్లను తూర్పు ఈశాన్యం లేదా ఉత్తర ఈశాన్యాలలోనే పెట్టాలి. నైరుతిలో ఎట్టిపరిస్థితుల్లో గేటు పెట్టకూడదు."
  },
  {
    id: "soil_debris",
    titleEn: "Soil Testing Pit & Subsurface Debris Removal",
    titleTe: "నేల పరీక్ష (గుంతలో నీటి పరీక్ష) & భూగర్భ ఎముకలు, బొగ్గుల నివారణ",
    page: "Pages 56, 192",
    detailsEn: "Before laying the foundation, dig a 1-cubit pit at the center at sunset and fill it with water. If water remains at sunrise, the soil is of First Grade quality. Thirupati Reddy insists on excavating and cleansing all buried animal bones, skulls, ash, charcoal, and ant-hills before laying the foundation stone.",
    detailsTe: "శంకుస్థాపనకు ముందు స్థలంలో ఒక మూర లోతు గుంత తవ్వి సూర్యాస్తమయ సమయంలో నీటితో నింపాలి. సూర్యోదయ సమయానికి నీరు ఇంకకుండా నిలిచి ఉంటే అది ఉత్తమ భూమి. అలాగే పునాది తవ్వేటప్పుడు భూమిలో బయటపడే ఎముకలు, పుర్రెలు, బొగ్గులు, బూడిద, చెదపుట్టలను పూర్తిగా తొలగించి శుద్ధి చేసిన తర్వాతే నిర్మాణం ప్రారంభించాలి."
  },
  {
    id: "seating_desk",
    titleEn: "Executive Seating & Study Desk Alignment",
    titleTe: "కార్యాలయ కుర్చీ & అధ్యయన బల్ల దిశా నిర్ణయం",
    page: "Page 197",
    detailsEn: "Business executives, professionals, and students must sit facing East or North while working, negotiating, or studying. The back should have a solid wall behind (South or West). Never sit with the back facing an open doorway or window.",
    detailsTe: "వ్యాపారవేత్తలు, అధికారులు, మరియు విద్యార్థులు పనిచేసేటప్పుడు లేదా చదువుకునేటప్పుడు తూర్పు లేదా ఉత్తర ముఖంగా కూర్చోవాలి. కూర్చున్న వ్యక్తి వెనుక నైరుతి లేదా పశ్చిమపు గట్టి గోడ ఉండాలి. వీపు వెనుక ద్వారాలు లేదా కిటికీలు ఉండకూడదు."
  },
  {
    id: "housewife_tips",
    titleEn: "Golden Guidance to Housewives for Domestic Prosperity",
    titleTe: "గృహిణులకు సౌభాగ్య వాస్తు సూత్రాలు",
    page: "Page 201",
    detailsEn: "Housewives command domestic peace. Keep the North-East spot spotlessly clean and free of broomsticks, garbage bins, or heavy grinders. Ensure the kitchen remains pristine, light evening lamps facing East, and maintain positive speech to cultivate lasting domestic Lakshmi.",
    detailsTe: "ఇంటి శాంతికి గృహిణే మూలస్తంభం. ఈశాన్య మూలను ఎల్లప్పుడూ శుభ్రంగా ఉంచి, చీపుర్లు, చెత్తబుట్టలు, గ్రైండర్లు అక్కడ పెట్టరాదు. ఆగ్నేయ వంటగదిని పవిత్రంగా ఉంచి, నిత్యం సాయంత్రం దీపారాధన చేస్తూ ప్రశాంత వాతావరణం నెలకొల్పితే గృహంలో అష్టైశ్వర్యాలు నిలుస్తాయి."
  }
];

// --- 6B. Historical Disasters & Global Geopolitical Vaastu Studies (Pages 247–285) ---
const HISTORICAL_GLOBAL_STUDIES = [
  {
    id: "bhopal",
    tabLabelEn: "💥 Bhopal Gas Tragedy",
    tabLabelTe: "💥 భోపాల్ విష వాయువు",
    titleEn: "Union Carbide Bhopal Toxic Gas Disaster (Forensic Vaastu)",
    titleTe: "యూనియన్ కార్బైడ్ భోపాల్ విష వాయు దుర్ఘటన — వాస్తు శవపరీక్ష",
    page: "Pages 247–250",
    tagEn: "Industrial Disaster",
    tagTe: "పారిశ్రామిక విపత్తు",
    detailsEn: "Sri Thirupati Reddy conducted an on-site architectural autopsy of the Union Carbide pesticide factory in Bhopal following the catastrophic December 3, 1984 MIC leak which killed over 2,000 citizens and injured over two lakhs. His team identified fatal structural violations: the main entrance was in Southern Southwest with a southern road; the southern lateral boundary extended abnormally into SSW; two borewells were sunk directly in the Southern Southwest; the Southeast was completely absent (Nil); and the vital Northeast sector was truncated and blocked with waste. This catastrophic inversion of natural counterpoise principles precipitated the world's deadliest industrial disaster.",
    detailsTe: "1984 డిసెంబర్ 3న వేలాది మందిని బలిగొన్న భోపాల్ యూనియన్ కార్బైడ్ ఫ్యాక్టరీని శ్రీ తిరుపతిరెడ్డి గారి బృందం స్వయంగా సందర్శించి వాస్తు శవపరీక్ష నిర్వహించింది. ఆ ఫ్యాక్టరీలో ప్రధాన గేటు దక్షిణ నైరుతిలో ఉండి, దక్షిణ సరిహద్దు నైరుతి వైపు విపరీతంగా పెరిగింది. అత్యంత ప్రమాదకరంగా దక్షిణ నైరుతిలోనే రెండు లోతైన బోరుబావులు వేశారు. ఆగ్నేయం శూన్యమై ఈశాన్యం పూర్తిగా మూసుకుపోయింది. నైరుతి పల్లమై ఈశాన్యం మూసుకుపోవడం వల్లే ఈ చారిత్రక విషాదం సంభవించిందని ఆయన నిరూపించారు.",
    defectsEn: [
      "Main factory entrance situated in lethal Southern Southwest (SSW) facing South.",
      "Southern boundary wall elongated and distorted towards Southern Southwest.",
      "Two deep borewells excavated directly in the Southern Southwest corner.",
      "Southeast corner absent (Nil), triggering severe Agni element destabilization.",
      "Northeast corner heavily blocked and truncated, preventing natural energy dispersion."
    ],
    defectsTe: [
      "ఫ్యాక్టరీ ప్రధాన సింహద్వారం అత్యంత ప్రమాదకరమైన దక్షిణ నైరుతిలో ఉండటం.",
      "దక్షిణ కాంపౌండ్ గోడ నైరుతి వైపు విపరీతంగా పెరిగి వంకర తిరగడం.",
      "అత్యంత నిషిద్ధమైన దక్షిణ నైరుతిలోనే రెండు లోతైన బోరుబావులు తవ్వడం.",
      "ఆగ్నేయ భాగం లేకుండా పోయి అగ్ని తత్త్వ సమతుల్యత దెబ్బతినడం.",
      "ఈశాన్యం పూర్తిగా మూసుకుపోయి సహజ శక్తి ప్రసారానికి ఆటంకం కలగడం."
    ],
    proverbEn: "Northwest more gradient than northeast — Nowhere the hopes are high, loss at last.",
    proverbTe: "ఈశాన్యం కంటే వాయువ్యం పల్లమైనచో — ఆశలన్నీ అడియాసలై అపార నష్టాలు తప్పవు."
  },
  {
    id: "tajmahal",
    tabLabelEn: "🏛️ Taj Mahal Magnetic Aura",
    tabLabelTe: "🏛️ తాజ్ మహల్ ఆకర్షణ",
    titleEn: "Taj Mahal — The Geomagnetic Power of Yamuna River Arc",
    titleTe: "తాజ్ మహల్ — యమునా నదీ ప్రవాహం & అద్భుత అయస్కాంత ఆకర్షణ",
    page: "Pages 260–261",
    tagEn: "Architectural Wonder",
    tagTe: "ప్రపంచ అద్భుతం",
    detailsEn: "Why has the Taj Mahal enchanted global visitors across centuries? Built on the southern bank of the Yamuna River at Agra, the structure is designed as a perfect geometric square set true to the compass. Symmetries are constructed on all four sides. The Yamuna wraps around its North and Northeast perimeters flowing towards the East. The monumental white marble dome and towering minarets stand on an elevated Southern and Southwestern terrace. This timeless alignment of low perpetual water in the North-East and massive monumental elevation in the South-West generates an indestructible geomagnetic field.",
    detailsTe: "తాజ్ మహల్ శతాబ్దాలుగా ప్రపంచ పర్యాటకులను నిరంతరం ఎందుకు సమ్మోహనం చేస్తోంది? ఆగ్రాలో యమునా నది తాజ్ మహల్ కు ఉత్తర, ఈశాన్య దిశలలో అర్ధచంద్రాకారంలో ప్రవహిస్తూ తూర్పునకు సాగుతోంది. ప్రధాన సమాధి ఖచ్చితమైన సమచతురస్రంగా నిర్మించబడి దిక్సూచికి అనుగుణంగా ఉంది. భారీ పాలరాతి గోపురం మరియు నాలుగు మినార్లు నైరుతిలో ఎత్తైన పీఠంపై నిలిచి ఉన్నాయి. ఈశాన్యంలో నదీ ప్రవాహం, నైరుతిలో భారీ ఎత్తు ఉండటం వల్లే ఇది అఖండ అయస్కాంత ఆకర్షణను, అమర కీర్తిని సొంతం చేసుకుంది.",
    defectsEn: [
      "Constructed as a perfect mathematical square set impeccably to the magnetic compass.",
      "Sacred river Yamuna curves in the North flowing towards the East.",
      "Entrance in South is high, whereas northern entrance is low.",
      "Massive structural load and towering minarets concentrated in South and Southwest."
    ],
    defectsTe: [
      "దిక్సూచికి ఖచ్చితంగా సరిపోయేలా నిర్మించిన పరిపూర్ణ సమచతురస్ర ఆకారం.",
      "ఉత్తర ఈశాన్యాలలో యమునా నది అర్ధచంద్రాకారంలో తూర్పు వైపు ప్రవహించడం.",
      "దక్షిణ ద్వారం ఎత్తుగాను, ఉత్తర ద్వారం పల్లంగాను నిర్మించబడటం.",
      "అత్యధిక నిర్మాణ భారం మరియు మినార్లు దక్షిణ, నైరుతి భాగాలలో కేంద్రీకృతమవడం."
    ],
    proverbEn: "Northern water and southern crest — Bestow perpetual glory and global fest.",
    proverbTe: "ఉత్తరాన పవిత్ర జలం, నైరుతిన భారీ శిల్పం — తరతరాల కీర్తికి నిదర్శనం."
  },
  {
    id: "japan",
    tabLabelEn: "🗾 Japan Industrial Miracle",
    tabLabelTe: "🗾 జపాన్ పారిశ్రామిక శక్తి",
    titleEn: "Japan's Post-War Industrial Miracle & Pacific Ocean Grid",
    titleTe: "జపాన్ పారిశ్రామిక శక్తి & పసిఫిక్ మహాసముద్ర వాస్తు విన్యాసం",
    page: "Pages 269–271",
    tagEn: "Global Geopolitics",
    tagTe: "ప్రపంచ దేశాల వాస్తు",
    detailsEn: "Sri Thirupati Reddy analyzed the macro-topography of the Japanese archipelago. The boundless Pacific Ocean spans its North, Northeast, and East. Majestic volcanic massifs (Mount Fuji and the Japanese Alps) dominate its South and West. Despite total devastation in World War II (including the atomic bombings of Hiroshima and Nagasaki) and unending seismic tremors, this natural geographic alignment propelled Japan into a peerless global industrial and technological titan.",
    detailsTe: "జపాన్ దేశపు భౌగోళిక ముఖచిత్రాన్ని తిరుపతిరెడ్డి గారు విశ్లేషించారు. జపాన్ కు తూర్పు, ఈశాన్య, ఉత్తర సరిహద్దులలో విశాలమైన పసిఫిక్ మహాసముద్రం విస్తరించి ఉండగా, దక్షిణ, పశ్చిమాలలో ఎత్తైన అగ్నిపర్వత శ్రేణులు (ఫుజి పర్వతం) ఉన్నాయి. రెండో ప్రపంచ యుద్ధంలో అణుబాంబుల దాడికి సర్వనాశనమైనా, వేలాది భూకంపాలు ఎదురైనా జపాన్ ప్రపంచంలోనే అగ్రగామి పారిశ్రామిక శక్తిగా ఎదగడానికి ఈ సహజ భౌగోళిక వాస్తే కారణం.",
    defectsEn: [
      "Endless oceanic expanse (Pacific Ocean) situated in the North, Northeast, and East.",
      "Towering volcanic mountain ranges (Mount Fuji) situated in the South and Southwest.",
      "Natural topographic slope drains from Southwest highlands down to Northeast ocean."
    ],
    defectsTe: [
      "ఉత్తర, ఈశాన్య, తూర్పు సరిహద్దులలో అపరిమితమైన పసిఫిక్ మహాసముద్ర జలాలు ఉండటం.",
      "దక్షిణ, నైరుతి, పశ్చిమాలలో ఎత్తైన ఫుజి అగ్నిపర్వతం మరియు ఆల్పైన్ పర్వతాలు ఉండటం.",
      "సహజ నేల వాలు నైరుతి ఎత్తుల నుండి ఈశాన్య సముద్రం వైపు సాగడం."
    ],
    proverbEn: "Gradient towards north and ocean in east — Nations rise to an endless financial feast.",
    proverbTe: "ఉత్తర ఈశాన్యాలలో అగాధ జలం — ఎల్లవేళలా ప్రసాదించును పారిశ్రామిక బలం."
  },
  {
    id: "switzerland",
    tabLabelEn: "🏔️ Switzerland Heaven on Earth",
    tabLabelTe: "🏔️ స్విట్జర్లాండ్ స్వర్గం",
    titleEn: "Switzerland — Heaven on Earth & Alpine Topography",
    titleTe: "స్విట్జర్లాండ్ — భూతల స్వర్గం & ఆల్ప్స్ పర్వతాల రక్షణ కవచం",
    page: "Pages 272–273",
    tagEn: "Global Geopolitics",
    tagTe: "ప్రపంచ దేశాల వాస్తు",
    detailsEn: "Switzerland is universally renowned for unbroken peace, banking secrecy, and heavenly prosperity. Topographically, the formidable Swiss Alps form an impenetrable mountain fortress across its South and Southwest. Pristine glacier lakes (Lake Geneva, Lake Zurich, Lake Constance) and rivers drain smoothly towards the North and Northeast. This structural harmony shielded Switzerland from two catastrophic World Wars and made it the financial sanctuary of the planet.",
    detailsTe: "స్విట్జర్లాండ్ అంతర్జాతీయ శాంతికి, అనంతమైన బ్యాంకింగ్ సంపదకు, భూతల స్వర్గానికి ప్రతీక. దక్షిణ, నైరుతిలలో అత్యంత ఎత్తైన ఆల్ప్స్ పర్వతాలు రక్షణ కవచంగా నిలవగా, ఉత్తర, ఈశాన్యాలలో స్వచ్ఛమైన సరస్సులు, నదులు పల్లంగా ప్రవహిస్తున్నాయి. ఈ సహజ అమరిక వల్లనే రెండు ప్రపంచ యుద్ధాల భీభత్సంలోనూ స్విట్జర్లాండ్ చెక్కుచెదరకుండా నిలిచి అత్యంత సంపన్న దేశంగా కొనసాగుతోంది.",
    defectsEn: [
      "Colossal Swiss Alps form a natural protective barrier in the South and Southwest.",
      "Major lake systems and rivers slope and drain toward the North and Northeast.",
      "Zero military invasions or foreign subjugation across multiple centuries."
    ],
    defectsTe: [
      "దక్షిణ, నైరుతిలలో అభేద్యమైన ఆల్ప్స్ పర్వత శ్రేణులు సహజ కోటగోడలా రక్షించడం.",
      "ప్రధాన సరస్సులు, నదీ ప్రవాహాలు ఉత్తర, ఈశాన్య దిశల వైపు వాలు కలిగి ఉండటం.",
      "శతాబ్దాలుగా ఎటువంటి విదేశీ దండయాత్రలకు గురికాకుండా శాశ్వత శాంతి వర్ధిల్లడం."
    ],
    proverbEn: "High alpine crest in the south and west — Guarantees wealth, immunity, and eternal rest.",
    proverbTe: "నైరుతిన హిమ పర్వత శిఖరం — జాతికి నిరంతరం రక్షా కవచం."
  },
  {
    id: "kuwait",
    tabLabelEn: "🏜️ Kuwait 1990 Invasion",
    tabLabelTe: "🏜️ కువైట్ యుద్ధ విశ్లేషణ",
    titleEn: "Kuwait's Invasion by Saddam Hussain (August 1990)",
    titleTe: "కువైట్ పై సద్దాం హుస్సేన్ దురాక్రమణ — భౌగోళిక వాస్తు పరిశోధన",
    page: "Pages 274–275",
    tagEn: "Geopolitical Conflict",
    tagTe: "యుద్ధ విశ్లేషణ",
    detailsEn: "In August 1990, Iraqi dictator Saddam Hussain invaded and occupied Kuwait within hours. Thirupati Reddy explains that Kuwait's topography features low depression corridors to its North-West, leaving it exposed to hostile desert trajectories, while water lies solely along the Persian Gulf to the East. Only international coalition intervention from the South and West counter-balanced its vulnerability.",
    detailsTe: "1990 ఆగస్టులో ఇరాక్ అధ్యక్షుడు సద్దాం హుస్సేన్ కువైట్‌ను కొన్ని గంటల్లోనే ఆక్రమించాడు. కువైట్ దేశపు వాయువ్య సరిహద్దులు పల్లంగా ఉండి శత్రువుల దాడికి అనువుగా ఉండటం, సహజ నైరుతి రక్షణ లేకపోవడమే ఈ ఆకస్మిక విపత్తుకు కారణమని తిరుపతిరెడ్డి గారు విశ్లేషించారు. ఆ తర్వాత దక్షిణ, పశ్చిమ దేశాల సంయుక్త బలగాలు రంగంలోకి దిగి ఆ లోపాన్ని సరిదిద్దడం వల్లే కువైట్ విముక్తి పొందింది.",
    defectsEn: [
      "Vulnerable low-lying corridors in the Northwest permitting hostile military incursions.",
      "Absence of protective natural elevations in the Southwest desert frontier.",
      "Restoration achieved only when allied forces reinforced the South and West."
    ],
    defectsTe: [
      "వాయువ్య సరిహద్దులలో లోతట్టు పల్లపు మార్గాలు శత్రు సేనల ప్రవేశానికి అనుకూలించాయి.",
      "నైరుతి సరిహద్దులలో ఎటువంటి సహజ పర్వత లేదా ఎత్తైన రక్షణ లేకపోవడం.",
      "దక్షిణ, పశ్చిమ దిశల నుండి మిత్రరాజ్యాల సైనిక బలగాలు ప్రవేశించినప్పుడే విముక్తి లభించింది."
    ],
    proverbEn: "Defective northwest and barren southwest — Tempts foreign foes to disturb the nest.",
    proverbTe: "వాయువ్యంలో పల్లం, నైరుతిన లోపం — శత్రువుల దాడికి మూల కారణం."
  },
  {
    id: "industrial_closures",
    tabLabelEn: "🏭 Sick Units: Chamundi & Allwyn",
    tabLabelTe: "🏭 ఆల్విన్ & చాముండి పతనం",
    titleEn: "Sick Industrial Units: Chamundi Mopeds & Hyderabad Allwyn",
    titleTe: "దివాలా తీసిన కర్మాగారాలు: చాముండి మోపెడ్స్ & హైదరాబాద్ ఆల్విన్ విశ్లేషణ",
    page: "Pages 251–255",
    tagEn: "Factory Diagnostics",
    tagTe: "కర్మాగార పరిశీలన",
    detailsEn: "Thirupati Reddy investigated landmark industrial closures across South India. At Chamundi Mopeds (Tumkur, Rs. 40 Cr capital, 750 workers), Eastern Northeast was cut off, Northwest was the highest point, and South was a low depression, causing permanent lockout in 1987. At Hyderabad Allwyn, a plant with 1,200 employees, the government ignored Vaastu warnings regarding topographical flaws, resulting in 5 postponed inaugurations, persistent labor strife, and eventual privatization.",
    detailsTe: "తుమకూరు లోని చాముండి మోపెడ్స్ (రూ. 40 కోట్ల పెట్టుబడి, 750 మంది కార్మికులు) మరియు హైదరాబాద్ ఆల్విన్ (1200 మంది ఉద్యోగులు) కర్మాగారాల మూతపడటంపై తిరుపతిరెడ్డి గారు సమగ్ర విశ్లేషణ చేశారు. చాముండిలో ఈశాన్యం తెగిపోయి, వాయువ్యం అత్యంత ఎత్తై, దక్షిణాన లోతట్టు పల్లం ఉండటంతో 1987లో లాకౌట్ అయ్యింది. ఆల్విన్ లో ప్రభుత్వానికి ముందే హెచ్చరికలు పంపినా నిర్లక్ష్యం చేయడంతో 5 సార్లు ప్రారంభోత్సవాలు వాయిదా పడి, నష్టాలతో ప్రైవేటీకరణకు గురైంది.",
    defectsEn: [
      "Eastern Northeast sector truncated by factory building footprint.",
      "Northwest corner elevated by 10 feet above the rest of the compound.",
      "Southern boundary constructed as a drainage depression.",
      "Heavy sub-station and stamping presses situated erroneously in the Northeast."
    ],
    defectsTe: [
      "ఫ్యాక్టరీ భవన నిర్మాణం వల్ల తూర్పు ఈశాన్యం పూర్తిగా తెగిపోవడం.",
      "వాయువ్య భాగం మిగిలిన స్థలం కంటే 10 అడుగుల ఎత్తుగా ఉండటం.",
      "దక్షిణ సరిహద్దు నీరు నిలిచే లోతట్టు ప్రాంతంగా మారిపోవడం.",
      "భారీ యంత్రాలు, పవర్ సబ్ స్టేషన్ ఈశాన్యంలో ఉంచడం."
    ],
    proverbEn: "Land elevation in east and depression in south — Dries up industrial wealth at its mouth.",
    proverbTe: "తూర్పున ఎత్తు, దక్షిణాన పల్లం — కర్మాగారానికి తప్పదు మూతపడే కాలం."
  },
  {
    id: "greenlands",
    tabLabelEn: "🏛️ 'Greenlands' CM House",
    tabLabelTe: "🏛️ గ్రీన్‌లాండ్స్ సీఎం నివాసం",
    titleEn: "'Greenlands' Official Residence of AP Chief Ministers",
    titleTe: "హైదరాబాద్ 'గ్రీన్‌లాండ్స్' సీఎం అధికారిక నివాసం — పదవీ గండాల విశ్లేషణ",
    page: "Pages 255–259",
    tagEn: "Political Macro-Vaastu",
    tagTe: "రాజకీయ వాస్తు విశ్లేషణ",
    detailsEn: "Located in Begumpet, Hyderabad, 'Greenlands' was designated as the official residence of the Chief Minister of Andhra Pradesh. The negative Vaastu flaws of this mansion were so potent that all seven Chief Ministers who resided there were forced out of power before completing their full terms of office. The mansion featured a road in Southern Southwest, high elevations in North and East, and severe depressions in South and West, resembling a structural entity that is blind, deaf, and lame.",
    detailsTe: "హైదరాబాద్ బేగంపేట లోని 'గ్రీన్‌లాండ్స్' భవనం ఆంధ్రప్రదేశ్ ముఖ్యమంత్రుల అధికారిక నివాసంగా ఉండేది. ఈ భవనం లోని తీవ్ర వాస్తు లోపాల వల్ల ఇందులో నివసించిన ఏడుగురు ముఖ్యమంత్రులూ తమ పదవీ కాలాన్ని పూర్తి చేసుకోలేక అర్థాంతరంగా వైదొలగాల్సి వచ్చింది. దక్షిణ నైరుతిలో రోడ్డు, ఉత్తర ఈశాన్యాలలో ఎత్తైన నిర్మాణాలు, దక్షిణ పశ్చిమాలలో పల్లం ఉండటమే ఈ వరుస రాజకీయ పతనాలకు కారణమని గ్రంథంలో సవివరంగా నిరూపించారు.",
    defectsEn: [
      "Dangerous road focus and main gate positioned in Southern Southwest.",
      "Elevations in North and East higher than South and West.",
      "All seven Chief Ministers who occupied it lost power prematurely.",
      "Dr. M. Chenna Reddy and predecessors vacated before facing political turmoil."
    ],
    defectsTe: [
      "ప్రధాన ద్వారం మరియు రోడ్డు మార్గం దక్షిణ నైరుతిలో ఉండటం.",
      "ఉత్తర ఈశాన్యాలు ఎత్తుగాను, దక్షిణ పశ్చిమాలు పల్లంగాను ఉండటం.",
      "ఇందులో నివసించిన ఏడుగురు ముఖ్యమంత్రులూ అకాలంగా పదవులు కోల్పోవడం.",
      "డాక్టర్ మర్రి చెన్నారెడ్డి తదితరులు ఇబ్బందులు గుర్తించి సొంత ఇళ్లకు మారడం."
    ],
    proverbEn: "Defective abode of power and pride — Sweeps the ruling host aside.",
    proverbTe: "దక్షిణ నైరుతి ద్వారపు నివాసం — పాలకుల పదవులకు తెచ్చును నాశనం."
  },
  {
    id: "england",
    tabLabelEn: "👑 England & British Empire",
    tabLabelTe: "👑 బ్రిటీష్ సామ్రాజ్యం",
    titleEn: "England & Rise and Fall of the British Empire",
    titleTe: "ఇంగ్లాండ్ దేశపు సహజ భౌగోళిక వాస్తు & బ్రిటీష్ సామ్రాజ్య వైభవం",
    page: "Pages 275–276",
    tagEn: "Imperial Geopolitics",
    tagTe: "సామ్రాజ్య వాస్తు",
    detailsEn: "Why did a tiny island nation rule three-quarters of the globe? Sri Thirupati Reddy demonstrated that England's natural geography features an extended Northeast (Northumberland projecting into the North Sea), while its Northwest is neatly truncated by the Scottish borders (Dumfries & Galloway). Surrounded by water on North and East, this macro-Vaastu propelled the Anglo-Saxons to global maritime dominance. As industrial pollution altered their waterways and internal boundaries shifted, imperial dominance gradually retracted.",
    detailsTe: "ఒక చిన్న ద్వీప దేశమైన ఇంగ్లాండ్ ప్రపంచంలో 75% భాగాన్ని ఎలా పాలించగలిగింది? ఇంగ్లాండ్ దేశపు సహజ ఈశాన్యం నార్తంబర్‌ల్యాండ్ రూపంలో సముద్రంలోకి విస్తరించి ఉండగా, వాయువ్యం స్కాట్లాండ్ సరిహద్దుల వద్ద క్రమబద్ధంగా తెగి ఉంది. ఉత్తర, ఈశాన్యాలలో సముద్ర జలాలు పుష్కలంగా ఉండటం వల్లే బ్రిటీష్ సామ్రాజ్యం ప్రపంచ నౌకాదళ శక్తిగా ఎదిగింది. ప్రకృతి పంచభూతాల సహజ అమరిక వల్లే వారి పాలన ఖండాంతరాలు దాటి విస్తరించిందని తిరుపతిరెడ్డి గారు వివరించారు.",
    defectsEn: [
      "Northeast region (Northumberland) extended deep into the North Sea.",
      "Northwest corner naturally carved and truncated towards Scotland.",
      "Surrounding oceans in North and East fueled unhindered maritime conquest."
    ],
    defectsTe: [
      "ఈశాన్య భాగం (నార్తంబర్‌ల్యాండ్) ఉత్తర సముద్రంలోకి సహజంగా పొడుచుకురావడం.",
      "వాయువ్య మూల స్కాట్లాండ్ వైపు క్రమబద్ధంగా తెగి ఉండటం.",
      "ఉత్తర, తూర్పు దిశలలోని విశాల జలాలు ప్రపంచ నౌకాధిపత్యానికి దోహదం చేయడం."
    ],
    proverbEn: "Northeast extended into the sea — Confers undisputed global mastery.",
    proverbTe: "ఈశాన్యం సముద్రాన విస్తరించిన జాతి — ప్రపంచాన్ని ఏలే అఖండ ఖ్యాతి."
  },
  {
    id: "blind_children",
    tabLabelEn: "👁️ Five Blind Children Case",
    tabLabelTe: "👁️ ఐదుగురు అంధుల ఇల్లు",
    titleEn: "The House of Five Blind Children at Mahaboobnagar",
    titleTe: "మహబూబ్‌నగర్ లో ఐదుగురు పిల్లలు అంధులైన ఇల్లు — ప్రత్యక్ష పరిశోధన",
    page: "Pages 280–282",
    tagEn: "Forensic Residential Vaastu",
    tagTe: "గృహ వాస్తు శోధన",
    detailsEn: "Prompted by a 1991 news report in the daily 'Udayam' titled 'Mother of Five Blind Children', Thirupati Reddy’s team personally inspected the home near Clock Tower, Mahaboobnagar. All five successive children born to the same mother had lost their vision. His architectural autopsy uncovered catastrophic structural violations: a heavy RCC staircase erected directly in the Northeast; a master bedroom built in the Northeast completely blocking morning sunlight; an entrance door in the Northern Northwest; and the southern compound wall extending 13 feet into Southern Southwest. Rectification was prescribed to stop further doom.",
    detailsTe: "1991 అక్టోబర్ 5న 'ఉదయం' దినపత్రికలో వచ్చిన 'ఐదుగురు గుడ్డి పిల్లల తల్లి' కథనాన్ని చూసి తిరుపతిరెడ్డి గారి బృందం మహబూబ్‌నగర్ క్లాక్ టవర్ వద్ద గల ఆ ఇంటిని స్వయంగా పరిశీలించింది. ఒకే తల్లికి పుట్టిన ఐదుగురు పిల్లలూ వరుసగా కంటిచూపు కోల్పోవడానికి గల వాస్తు లోపాలను వెలికితీశారు: ఈశాన్యంలో భారీ మెట్లు నిర్మించి ఈశాన్యాన్ని పూర్తిగా మూసివేయడం, ఈశాన్యంలోనే బెడ్‌రూమ్ కట్టడం, దక్షిణ కాంపౌండ్ గోడ నైరుతి వైపు 13 అడుగులు పెరగడం వల్లే ఈ ఘోర దుస్థితి సంభవించిందని తేల్చి సవరణలు సూచించారు.",
    defectsEn: [
      "Heavy RCC staircase constructed directly in the sacred Northeast corner.",
      "Bedroom built in Northeast, totally blocking prana energy and sunlight.",
      "Southern compound wall extended by 13 feet into Southern Southwest.",
      "Entrance in Northern Northwest causing chronic instability and affliction."
    ],
    defectsTe: [
      "పవిత్ర ఈశాన్య మూలలోనే అత్యంత భారమైన కాంక్రీట్ మెట్లు నిర్మించడం.",
      "ఈశాన్యంలో బెడ్‌రూమ్ నిర్మించి ఉదయపు సూర్యకాంతిని, ప్రాణశక్తిని అడ్డుకోవడం.",
      "దక్షిణ కాంపౌండ్ గోడ దక్షిణ నైరుతి వైపు 13 అడుగులు విపరీతంగా పెరగడం.",
      "ఉత్తర వాయువ్యంలో ద్వారం ఉండి నిరంతర ఆందోళనలు, దృష్టి లోపాలు కలిగించడం."
    ],
    proverbEn: "Staircase in northeast and extension in southwest — Strips vision and vitality from the nest.",
    proverbTe: "ఈశాన్యాన మెట్లు, నైరుతిన పెరుగదల — సంతానానికి తెచ్చును దృష్టి లోపాల బాధల."
  }
];

// --- 7. Magnetic Compass & Tilted Plot Orientation (Pages 286–300) ---
const COMPASS_TILT_RULES = [
  {
    tiltDeg: "0° (True Cardinal Alignment)",
    titleEn: "Perfect Cardinal Orientation",
    titleTe: "ఖచ్చితమైన దిశా స్థలం (0° వాలు)",
    descEn: "Plot boundaries align true North-South and East-West (0° deflection on magnetic needle). Ideal standard for all classical Vaastu calculations.",
    descTe: "స్థలపు సరిహద్దులు ఖచ్చితంగా ఉత్తర-దక్షిణ, తూర్పు-పశ్చిమ దిశలకు సమాంతరంగా ఉండటం. ఇది అత్యుత్తమ ఆదర్శ నిర్మాణం."
  },
  {
    tiltDeg: "5° to 10° Tilt towards ENE",
    titleEn: "Mild Eastern Northeast Inclination",
    titleTe: "తూర్పు ఈశాన్యపు వాలు (5°–10°)",
    descEn: "Tilted mildly towards Eastern Northeast. Favorable. Gate should be placed in the newly determined magnetic East-Northeast sector.",
    descTe: "దిక్సూచి ప్రకారం ఈశాన్యం వైపు 5 నుండి 10 డిగ్రీలు తిరిగిన స్థలం. ఇది అనుకూలమైనది. అయస్కాంత ఈశాన్యంలోనే గేటు పెట్టాలి."
  },
  {
    tiltDeg: "15° to 22.5° Corner Tilt (Vidisha Plot)",
    titleEn: "Vidisha / Diagonal Plot",
    titleTe: "విదిశ స్థలము (15°–22.5° మూలల వాలు)",
    descEn: "Corners become the cardinal points! Thirupati Reddy's solution: Construct the house squared to TRUE magnetic cardinal directions inside the plot, or position doors strictly in exalted sub-sectors.",
    descTe: "మూలలే దిక్కులుగా మారే విదిశ స్థలం. పరిష్కారం: కాంపౌండ్ వాలుగా ఉన్నప్పటికీ లోపల నిర్మించే ఇంటిని దిక్సూచి ఆధారంగా సరియైన 90° దిక్కులకు తిప్పి కట్టడం శ్రేయస్కరం."
  }
];

// --- 8. Comprehensive Treasury of 40+ Rhyming Proverbs ---
const THIRUPATI_REDDY_PROVERBS = [
  {
    rhymeEn: "Laying of foundation from southwest — Proves to be auspiciously best.",
    rhymeTe: "నైరుతి నుండి శంకుస్థాపన — సర్వ శుభములకు శ్రేష్ఠమైనది.",
    category: "Foundations & Topography",
    page: "Page 15",
    meaningEn: "Always commence earth digging and stone laying from the Southwest corner to anchor stability."
  },
  {
    rhymeEn: "Well in northeast — Unparallel benediction almost.",
    rhymeTe: "ఈశాన్యాన జలము — సాటిలేని అష్టైశ్వర్యాల వరము.",
    category: "Water & Wells",
    page: "Page 12",
    meaningEn: "A borewell or underground sump in the pristine Northeast brings endless health, wealth, and spiritual grace."
  },
  {
    rhymeEn: "Well in the east — An everlasting pleasure resort.",
    rhymeTe: "తూర్పున బావి — నిరంతర ఆనంద నిలయము.",
    category: "Water & Wells",
    page: "Page 18",
    meaningEn: "Underground water source along the eastern boundary bestows eternal domestic happiness and prosperity."
  },
  {
    rhymeEn: "Well in southeast of the house — Always detrimental to women in the house.",
    rhymeTe: "ఆగ్నేయమందు బావి — గృహిణికి రోగప్రదము మరియు అపార నష్టము.",
    category: "Water & Wells",
    page: "Page 22",
    meaningEn: "Water in the Agni zone causes fire-water clash, triggering severe gynecological ailments and monetary loss."
  },
  {
    rhymeEn: "Well in south of the home — Will take the house lady to her tomb.",
    rhymeTe: "దక్షిణాన బావి — ఇంటి ఇల్లాలికి ప్రాణహాని.",
    category: "Water & Wells",
    page: "Page 26",
    meaningEn: "Depressions and wells in the South severely endanger the longevity and health of the female homemaker."
  },
  {
    rhymeEn: "Well in southwest — Brings poverty at its best.",
    rhymeTe: "నైరుతిలో బావి — దారిద్య్రానికి స్వాగతం, తీవ్ర అరిష్టం.",
    category: "Water & Wells",
    page: "Page 30",
    meaningEn: "A well in the Southwest creates the worst Vastu dosha, leading to total bankruptcy and sudden tragedy."
  },
  {
    rhymeEn: "Well in the west — Makes money hard to invest.",
    rhymeTe: "పడమరన బావి — ధన సంపాదనకు తీవ్ర ఆటంకం.",
    category: "Water & Wells",
    page: "Page 35",
    meaningEn: "Water source in the West drains liquidity and hampers profitable long-term investments."
  },
  {
    rhymeEn: "Well in northwest — Keeps the house lady always fast.",
    rhymeTe: "వాయువ్యాన బావి — గృహిణికి అశాంతి, అనారోగ్యం.",
    category: "Water & Wells",
    page: "Page 40",
    meaningEn: "A well in the Northwest causes perpetual mental agitation, restlessness, and stomach distress."
  },
  {
    rhymeEn: "Well in the north — Gives immense wealth and worth.",
    rhymeTe: "ఉత్తరాన బావి — కుబేర సంపద, అష్టైశ్వర్యాల ప్రాప్తి.",
    category: "Water & Wells",
    page: "Page 44",
    meaningEn: "Water in the Kubera-ruled North invites endless financial growth, investments, and business expansion."
  },
  {
    rhymeEn: "Southern southwest gate — Is black cobra venomous bite.",
    rhymeTe: "దక్షిణ నైరుతి ద్వారము — విషనాగు కాటు వంటి ఘోర అరిష్టము.",
    category: "Doors & Gates",
    page: "Page 55",
    meaningEn: "A gate or opening in Southern Southwest acts like fatal venom, bringing sudden demise and ruin."
  },
  {
    rhymeEn: "Doors in east and north bring in pure air — Help the lineage prosper and bloom like a summer rose.",
    rhymeTe: "తూర్పు, ఉత్తరపు ద్వారములు — వంశాభివృద్ధికి, సౌభాగ్యానికి మూలము.",
    category: "Doors & Gates",
    page: "Page 62",
    meaningEn: "Exalted doors in East and North welcome solar prana and magnetic flux, nourishing family vitality."
  },
  {
    rhymeEn: "Stairs from north to south — Pave way to financial growth.",
    rhymeTe: "ఉత్తరం నుండి దక్షిణానికి మెట్లు — ఆర్థికాభివృద్ధికి సోపానాలు.",
    category: "Staircases & Elevation",
    page: "Page 88",
    meaningEn: "Staircase steps ascending upwards towards South or West respect the natural topographic gradient."
  },
  {
    rhymeEn: "Storing water in tank above ground in south and west — Hoisting the flag of peace and rest.",
    rhymeTe: "పశ్చిమ, దక్షిణాల పైకప్పుపై వాటర్ ట్యాంక్ — సుఖశాంతులకు నిదర్శనం.",
    category: "Water & Wells",
    page: "Page 95",
    meaningEn: "Placing heavy overhead tanks on the Southwest/West/South roof slab increases weight where it is mandated."
  },
  {
    rhymeEn: "Heavy items in north — Cause mental tension and feverish dearth.",
    rhymeTe: "ఉత్తరమందు భారము — మానసిక ఆందోళన, సిరిసంపదల లోటు.",
    category: "Foundations & Topography",
    page: "Page 104",
    meaningEn: "Overburdening the North side chokes the flow of financial energy and creates anxiety."
  },
  {
    rhymeEn: "Gradient towards northeast — Enforce all-round development never to lost.",
    rhymeTe: "ఈశాన్యమునకు పల్లము — సర్వతోముఖాభివృద్ధికి రాజమార్గము.",
    category: "Foundations & Topography",
    page: "Page 112",
    meaningEn: "Land and water slope flowing smoothly from Southwest to Northeast brings unbroken prosperity."
  },
  {
    rhymeEn: "Drain pipe towards west — A snake which saps all the best.",
    rhymeTe: "పడమరకు మురుగునీటి వాలు — సిరిసంపదలను హరించే సర్పము వంటిది.",
    category: "Drainage & Plumbing",
    page: "Page 120",
    meaningEn: "Discharging wastewater towards the West drains family vitality and financial reserves."
  },
  {
    rhymeEn: "Cooking facing east — Digesting well every feast.",
    rhymeTe: "తూర్పు ముఖముగా వంట — ఆయురారోగ్యాల పంట.",
    category: "Kitchen & Health",
    page: "Page 135",
    meaningEn: "The cook should always face the rising Sun in the East while preparing meals to imbue food with vitality."
  },
  {
    rhymeEn: "Head to south while you sleep — Gives sound health and wealth to keep.",
    rhymeTe: "దక్షిణ దిశగా తలపెట్టి శయనించడం — పరిపూర్ణ ఆరోగ్యం, దీర్ఘాయుష్షు.",
    category: "Bedrooms & Rest",
    page: "Page 148",
    meaningEn: "Sleeping with the head towards South aligns the human blood iron with Earth's magnetic poles for restful sleep."
  },
  {
    rhymeEn: "Industrial machinery in south and west — Guarantees continuous production at its best.",
    rhymeTe: "పరిశ్రమలలో భారీ యంత్రాలు దక్షిణం, పడమరలలో — నిరంతర ఉత్పాదకత, లాభాలు.",
    category: "Industrial Vaastu",
    page: "Page 249",
    meaningEn: "Heavy industrial plant, generators, and punch presses belong in South and West zones."
  },
  {
    rhymeEn: "Transformer in southeast spark — Keeps factory shining in the dark.",
    rhymeTe: "ఆగ్నేయంలో ట్రాన్స్‌ఫార్మర్ — పరిశ్రమకు నిరంతర విద్యుత్ శక్తి, విజయం.",
    category: "Industrial Vaastu",
    page: "Page 254",
    meaningEn: "Electrical substation, high tension lines, and boilers must strictly be positioned in the Agneya sector."
  },
  {
    rhymeEn: "Set the southwest to setsquare — Obtain riches from everywhere.",
    rhymeTe: "నైరుతిని మూలమట్టానికి సరిచేయి — నలుదిక్కుల నుండి సిరిసంపదలు పొందు.",
    category: "Foundations & Topography",
    page: "Page 10",
    meaningEn: "Squaring the Southwest to true 90° right angle anchors the fortune of the inhabitants."
  },
  {
    rhymeEn: "Eastern gate — Ensures regular feast.",
    rhymeTe: "తూర్పు ద్వారము — నిత్య కల్యాణం పచ్చతోరణం.",
    category: "Doors & Gates",
    page: "Page 289",
    meaningEn: "A gate in the exalted eastern sector brings constant festive abundance."
  },
  {
    rhymeEn: "A wry eastern wall — Worries the male in all.",
    rhymeTe: "వంకర తూర్పు గోడ — పురుషులకు నిరంతర చింతలు.",
    category: "Foundations & Topography",
    page: "Page 285",
    meaningEn: "Distorted eastern boundary walls damage the reputation and health of male family heads."
  },
  {
    rhymeEn: "Awry southern wall — Makes the female health fall.",
    rhymeTe: "వంకర దక్షిణ గోడ — స్త్రీల ఆరోగ్యానికి భంగం.",
    category: "Foundations & Topography",
    page: "Page 286",
    meaningEn: "Crooked southern walls trigger persistent ailments for the women of the house."
  },
  {
    rhymeEn: "Awry western wall — Affects happiness of all.",
    rhymeTe: "వంకర పశ్చిమ గోడ — అందరి ఆనందానికి చేటు.",
    category: "Foundations & Topography",
    page: "Page 287",
    meaningEn: "Skewed western boundary leads to chronic domestic dissatisfaction and disputes."
  },
  {
    rhymeEn: "Street thrust in eastern southeast — Beats at the sources of wealth and rest.",
    rhymeTe: "తూర్పు ఆగ్నేయ వీధి పోటు — సిరిసంపదలను కొట్టివేయును.",
    category: "Doors & Gates",
    page: "Page 290",
    meaningEn: "Road hitting East of Southeast burns financial savings and domestic tranquility."
  },
  {
    rhymeEn: "Southern southeast street thrust — Encourages the host towards financial crest.",
    rhymeTe: "దక్షిణ ఆగ్నేయ వీధి పోటు — ఆర్థికాభివృద్ధికి ఉత్సాహమిచ్చును.",
    category: "Doors & Gates",
    page: "Page 291",
    meaningEn: "Incoming road focus in South of Southeast boosts business activity and cash turnover."
  },
  {
    rhymeEn: "Northeast side is heavy — Dearth of revenues and avenues curvy.",
    rhymeTe: "ఈశాన్యాన బరువు — ఆదాయానికి గండి, అడ్డంకుల పరుగు.",
    category: "Foundations & Topography",
    page: "Page 278",
    meaningEn: "Heaping weights in Northeast blocks cash inflow and leads to debt."
  }
];

// --- 9. Global State & Language Engine ---
let currentLang = "dual";
let selectedZoneId = "ene";
let selectedVithiId = "ene";
let selectedGunakamId = "ne_ext";
let selectedTempleId = "tirumala";

function setLanguage(lang) {
  currentLang = lang;
  document.body.setAttribute("data-lang", lang);

  // Update button active state
  document.querySelectorAll(".lang-opt").forEach(btn => {
    if (btn.dataset.langVal === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update select option texts across diagnostic and proverbs dropdowns
  document.querySelectorAll("select option[data-en]").forEach(opt => {
    if (lang === "english") {
      opt.textContent = opt.dataset.en;
    } else if (lang === "telugu") {
      opt.textContent = opt.dataset.te;
    } else {
      opt.textContent = opt.dataset.dual || `${opt.dataset.en} (${opt.dataset.te})`;
    }
  });

  // Update proverbs search input placeholder
  const searchInput = document.getElementById("proverbSearchInput");
  if (searchInput) {
    if (lang === "telugu") {
      searchInput.placeholder = "🔍 సామెతలను వెతకండి (ఉదా: బావి, గేటు, వంటగది, నైరుతి, ఈశాన్యం, ఆరోగ్యం)...";
    } else if (lang === "english") {
      searchInput.placeholder = "🔍 Search proverbs by keyword (e.g. well, gate, south, east, kitchen, health)...";
    } else {
      searchInput.placeholder = "🔍 Search proverbs by keyword / సామెతలను వెతకండి (e.g., well, gate, బావి, గేటు)...";
    }
  }

  // Update household item search placeholder
  const itemSearch = document.getElementById("itemSearchInput");
  if (itemSearch) {
    if (lang === "telugu") {
      itemSearch.placeholder = "🔍 వస్తువును వెతకండి (ఉదా: బీరువా, స్టవ్, పూజ, మంచం, ఇన్వర్టర్, మెడిసిన్స్)...";
    } else if (lang === "english") {
      itemSearch.placeholder = "🔍 Search items by keyword (e.g., cash locker, stove, bed, puja, inverter)...";
    } else {
      itemSearch.placeholder = "🔍 Search items / వస్తువులను వెతకండి (e.g., locker, stove, బీరువా, మంచం)...";
    }
  }

  // Re-render components with language tags
  renderZoneDetail(selectedZoneId);
  renderVithiDetail(selectedVithiId);
  renderGunakamDetail(selectedGunakamId);
  renderTempleTabs();
  renderTempleDetail(selectedTempleId);
  renderSiteGrades();
  renderSpecialLiving();
  renderCompassTilt();
  if (typeof renderHistoricalTabs === "function") renderHistoricalTabs();
  if (typeof renderHistoricalCase === "function") renderHistoricalCase(selectedHistoricalId);
  renderProverbs(document.getElementById("proverbSearchInput")?.value || "", document.getElementById("proverbCategorySelect")?.value || "all");
  runHouseDiagnostic();
  if (typeof renderDirectionalGuide === "function") renderDirectionalGuide(selectedDirKey);
  if (typeof renderHouseholdItems === "function") renderHouseholdItems(document.getElementById("itemSearchInput")?.value || "", document.getElementById("itemCatSelect")?.value || "all");
  if (typeof checkItemPlacement === "function" && document.getElementById("checkerResultBox")?.style.display !== "none") checkItemPlacement();
  if (typeof renderStaircaseCards === "function") renderStaircaseCards();
  if (typeof checkStaircasePlacement === "function" && document.getElementById("stairResultBox")?.style.display !== "none") checkStaircasePlacement();
  if (typeof renderMultiStoreyCards === "function") renderMultiStoreyCards();
  if (typeof checkMultiStoreyLayout === "function" && document.getElementById("multiResultBox")?.style.display !== "none") checkMultiStoreyLayout();
  if (typeof renderSeparateFloorsCards === "function") renderSeparateFloorsCards();
  if (typeof checkSeparateFloorLayout === "function" && document.getElementById("sepFloorResultBox")?.style.display !== "none") checkSeparateFloorLayout();
}

function renderZoneDetail(zoneId) {
  selectedZoneId = zoneId;
  const zone = VAASTU_16_ZONES.find(z => z.id === zoneId) || VAASTU_16_ZONES[0];
  const container = document.getElementById("zoneDetailContainer");
  if (!container) return;

  const isUccha = zone.status === "uccha";
  const badgeClass = isUccha ? "uccha" : (zone.status === "neecha" ? "neecha" : "corner");

  const suitableEnHtml = zone.suitableEn.map(item => `<li>${item}</li>`).join("");
  const suitableTeHtml = zone.suitableTe.map(item => `<li>${item}</li>`).join("");
  const forbiddenEnHtml = zone.forbiddenEn.map(item => `<li>${item}</li>`).join("");
  const forbiddenTeHtml = zone.forbiddenTe.map(item => `<li>${item}</li>`).join("");

  container.innerHTML = `
    <div>
      <div class="zone-detail-header">
        <div class="detail-badge-row">
          <span class="zone-tag ${badgeClass}">
            <span class="lang-en">${zone.statusEn} </span>
            <span class="lang-te">${zone.statusTe}</span>
          </span>
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono);">
            <span class="lang-en">${zone.elementEn} </span>
            <span class="lang-te">${zone.elementTe}</span>
          </span>
        </div>
        <div class="detail-name lang-en">${zone.nameEn}</div>
        <div class="detail-name lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright);">${zone.nameTe}</div>
      </div>

      <div class="detail-section">
        <div class="detail-label">
          <span class="lang-en">✅ Prescribed Uses: </span>
          <span class="lang-te">✅ అనుకూలమైన శుభ నిర్మాణాలు:</span>
        </div>
        <ul class="detail-list pros lang-en">${suitableEnHtml}</ul>
        <ul class="detail-list pros lang-te" style="font-family:var(--font-telugu);">${suitableTeHtml}</ul>
      </div>

      <div class="detail-section">
        <div class="detail-label">
          <span class="lang-en">❌ Prohibited Items: </span>
          <span class="lang-te">❌ నిషిద్ధ నిర్మాణాలు:</span>
        </div>
        <ul class="detail-list cons lang-en">${forbiddenEnHtml}</ul>
        <ul class="detail-list cons lang-te" style="font-family:var(--font-telugu);">${forbiddenTeHtml}</ul>
      </div>
    </div>

    <div>
      <div class="detail-aphorism">
        <div class="lang-en" style="font-weight:700;">“${zone.quoteEn}”</div>
        <div class="lang-te" style="font-size:1.02rem; font-family:var(--font-telugu); font-weight:700; color:var(--gold-bright);">“${zone.quoteTe}”</div>
      </div>
      <p class="lang-en" style="font-size:0.96rem; color:var(--text-muted); margin-top:0.75rem; line-height:1.65;">${zone.detailsEn}</p>
      <p class="lang-te" style="font-family:var(--font-telugu); color:#cbd5e1; font-size:0.96rem; margin-top:0.75rem; line-height:1.65;">${zone.detailsTe}</p>
    </div>
  `;

  document.querySelectorAll(".zone-cell").forEach(cell => {
    if (cell.dataset.zone === zoneId) {
      cell.classList.add("active");
    } else {
      cell.classList.remove("active");
    }
  });
}

function renderVithiDetail(vithiId) {
  selectedVithiId = vithiId;
  const rule = VITHI_SHULA_RULES.find(r => r.id === vithiId) || VITHI_SHULA_RULES[0];
  const container = document.getElementById("vithiDetailContainer");
  if (!container) return;

  const isBeneficent = rule.type === "beneficent";
  const badgeStyle = isBeneficent
    ? "background:rgba(16,185,129,0.2); color:#34d399; border:1px solid rgba(16,185,129,0.4);"
    : "background:rgba(244,63,94,0.2); color:#fb7185; border:1px solid rgba(244,63,94,0.4);";

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
      <span style="font-size:0.75rem; padding:0.2rem 0.6rem; border-radius:20px; font-weight:700; ${badgeStyle}">
        <span class="lang-en">${rule.typeEn}</span>
        <span class="lang-te">${rule.typeTe}</span>
      </span>
      <span style="font-size:0.8rem; font-family:var(--font-mono); color:var(--gold-bright);">Impact Score: ${rule.score}/100</span>
    </div>

    <h4 class="lang-en" style="font-size:1.15rem; color:#fff; margin-bottom:0.2rem;">${rule.nameEn}</h4>
    <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--cyan-bright); font-size:1.1rem; margin-bottom:0.4rem;">${rule.nameTe}</h4>

    <div style="margin-bottom:0.75rem;">
      <div class="detail-label">
        <span class="lang-en">Consequence & Influence:</span>
        <span class="lang-te">ప్రభావం & ఫలితం:</span>
      </div>
      <p class="lang-en" style="font-size:0.96rem; color:#f1f5f9; margin-top:0.25rem; line-height:1.65;">${rule.impactEn}</p>
      <p class="lang-te" style="font-size:0.96rem; color:#cbd5e1; font-family:var(--font-telugu); margin-top:0.25rem; line-height:1.65;">${rule.impactTe}</p>
    </div>

    <div style="background:rgba(245,158,11,0.08); border-left:3px solid var(--gold-primary); padding:0.75rem 1rem; border-radius:0 8px 8px 0;">
      <div style="font-size:0.82rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
        <span class="lang-en">Gouru Thirupati Reddy's Prescribed Remedy:</span>
        <span class="lang-te">గౌరు తిరుపతిరెడ్డి గారి వాస్తు పరిష్కారం:</span>
      </div>
      <p class="lang-en" style="font-size:0.94rem; color:#fef08a; margin-top:0.25rem; line-height:1.6;">${rule.remedyEn}</p>
      <p class="lang-te" style="font-size:0.94rem; color:#fef08a; font-family:var(--font-telugu); margin-top:0.25rem; line-height:1.6;">${rule.remedyTe}</p>
    </div>
  `;

  updateVithiSvg(vithiId);

  document.querySelectorAll(".vithi-btn").forEach(btn => {
    if (btn.dataset.vithi === vithiId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function updateVithiSvg(vithiId) {
  const line = document.getElementById("streetArrowLine");
  const head = document.getElementById("streetArrowHead");
  const streetLabel = document.getElementById("streetRoadLabel");
  if (!line || !head || !streetLabel) return;

  const positions = {
    "ene": { x1: 280, y1: 120, x2: 215, y2: 120, label: "ENE Road", color: "#10b981" },
    "nne": { x1: 180, y1: 20,  x2: 180, y2: 85,  label: "NNE Road", color: "#10b981" },
    "sse": { x1: 180, y1: 280, x2: 180, y2: 215, label: "SSE Road", color: "#34d399" },
    "wnw": { x1: 20,  y1: 120, x2: 85,  y2: 120, label: "WNW Road", color: "#34d399" },
    "ese": { x1: 280, y1: 180, x2: 215, y2: 180, label: "ESE Road", color: "#f43f5e" },
    "ssw": { x1: 120, y1: 280, x2: 120, y2: 215, label: "SSW Road", color: "#e11d48" },
    "wsw": { x1: 20,  y1: 180, x2: 85,  y2: 180, label: "WSW Road", color: "#e11d48" },
    "nnw": { x1: 120, y1: 20,  x2: 120, y2: 85,  label: "NNW Road", color: "#f43f5e" }
  };

  const pos = positions[vithiId] || positions["ene"];
  line.setAttribute("x1", pos.x1);
  line.setAttribute("y1", pos.y1);
  line.setAttribute("x2", pos.x2);
  line.setAttribute("y2", pos.y2);
  line.setAttribute("stroke", pos.color);

  head.setAttribute("cx", pos.x2);
  head.setAttribute("cy", pos.y2);
  head.setAttribute("fill", pos.color);

  streetLabel.textContent = pos.label;
  streetLabel.setAttribute("fill", pos.color);
}

function renderGunakamDetail(caseId) {
  selectedGunakamId = caseId;
  const item = GUNAKAM_CASES.find(c => c.id === caseId) || GUNAKAM_CASES[0];
  const container = document.getElementById("gunakamDetailContainer");
  if (!container) return;

  const isAuspicious = item.type === "auspicious";
  const badgeStyle = isAuspicious
    ? "background:rgba(16,185,129,0.2); color:#34d399; border:1px solid rgba(16,185,129,0.4);"
    : "background:rgba(244,63,94,0.2); color:#fb7185; border:1px solid rgba(244,63,94,0.4);";

  container.innerHTML = `
    <div style="margin-bottom:0.5rem;">
      <span style="font-size:0.75rem; padding:0.2rem 0.6rem; border-radius:20px; font-weight:700; ${badgeStyle}">
        <span class="lang-en">${item.verdictEn}</span>
        <span class="lang-te">${item.verdictTe}</span>
      </span>
    </div>
    <h4 class="lang-en" style="font-size:1.2rem; color:#fff; margin-bottom:0.25rem;">${item.titleEn}</h4>
    <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.15rem; margin-bottom:0.45rem;">${item.titleTe}</h4>

    <p class="lang-en" style="font-size:0.96rem; color:#f1f5f9; line-height:1.68; margin-bottom:0.6rem;">${item.descEn}</p>
    <p class="lang-te" style="font-size:0.96rem; color:#cbd5e1; font-family:var(--font-telugu); line-height:1.68;">${item.descTe}</p>
  `;

  updateGunakamSvg(caseId);

  document.querySelectorAll(".gunakam-btn").forEach(btn => {
    if (btn.dataset.case === caseId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function updateGunakamSvg(caseId) {
  const irregularPlot = document.getElementById("gunakamIrregularPlot");
  const slicePolygon = document.getElementById("gunakamSlicePolygon");
  const caseLabel = document.getElementById("gunakamSvgLabel");
  if (!irregularPlot || !slicePolygon || !caseLabel) return;

  if (caseId === "ne_ext") {
    irregularPlot.setAttribute("points", "70,70 265,50 230,230 70,230");
    slicePolygon.setAttribute("points", "230,70 265,50 230,120");
    slicePolygon.setAttribute("fill", "rgba(16, 185, 129, 0.35)");
    slicePolygon.setAttribute("stroke", "#10b981");
    caseLabel.textContent = "Northeast Extension (ఈశాన్యం పెరుగుదల)";
    caseLabel.setAttribute("fill", "#34d399");
  } else if (caseId === "se_ext") {
    irregularPlot.setAttribute("points", "70,70 230,70 270,260 70,230");
    slicePolygon.setAttribute("points", "230,70 270,260 230,230");
    slicePolygon.setAttribute("fill", "rgba(244, 63, 94, 0.35)");
    slicePolygon.setAttribute("stroke", "#f43f5e");
    caseLabel.textContent = "SE Protrusion to be cut off (ఆగ్నేయ దోషం)";
    caseLabel.setAttribute("fill", "#fb7185");
  } else if (caseId === "sw_ext") {
    irregularPlot.setAttribute("points", "70,70 230,70 230,230 40,265");
    slicePolygon.setAttribute("points", "70,70 70,230 40,265");
    slicePolygon.setAttribute("fill", "rgba(225, 29, 72, 0.45)");
    slicePolygon.setAttribute("stroke", "#e11d48");
    caseLabel.textContent = "SW Extension carved out (నైరుతి దోషం)";
    caseLabel.setAttribute("fill", "#fb7185");
  } else if (caseId === "nw_ext") {
    irregularPlot.setAttribute("points", "35,45 230,70 230,230 70,230");
    slicePolygon.setAttribute("points", "35,45 230,70 70,70");
    slicePolygon.setAttribute("fill", "rgba(244, 63, 94, 0.35)");
    slicePolygon.setAttribute("stroke", "#f43f5e");
    caseLabel.textContent = "NW Extension partitioned outside (వాయువ్య దోషం)";
    caseLabel.setAttribute("fill", "#fb7185");
  } else if (caseId === "ne_cut") {
    irregularPlot.setAttribute("points", "70,70 180,110 230,230 70,230");
    slicePolygon.setAttribute("points", "180,110 230,70 230,110");
    slicePolygon.setAttribute("fill", "rgba(239, 68, 68, 0.45)");
    slicePolygon.setAttribute("stroke", "#ef4444");
    caseLabel.textContent = "Northeast Cut: Must acquire land (ఈశాన్య తెగువ)";
    caseLabel.setAttribute("fill", "#f87171");
  }
}


function renderTempleTabs() {
  const wrap = document.getElementById("templeTabsWrap") || document.querySelector(".temple-tabs-wrap");
  if (!wrap) return;
  wrap.innerHTML = TEMPLE_VAASTU_STUDIES.map(t => `
    <button class="temple-tab-btn ${t.id === selectedTempleId ? "active" : ""}" data-temple="${t.id}">
      <span class="lang-en">${t.tabLabelEn || t.nameEn}</span>
      <span class="lang-te" style="font-family:var(--font-telugu);">${t.tabLabelTe || t.nameTe}</span>
    </button>
  `).join("");

  wrap.querySelectorAll(".temple-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const templeId = btn.dataset.temple;
      if (templeId) renderTempleDetail(templeId);
    });
  });
}

function renderTempleDetail(templeId) {
    selectedTempleId = templeId;
  document.querySelectorAll(".temple-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.temple === templeId);
  });
  const item = TEMPLE_VAASTU_STUDIES.find(t => t.id === templeId) || TEMPLE_VAASTU_STUDIES[0];
  const container = document.getElementById("templeDetailContainer");
  if (!container) return;

  container.innerHTML = `
    <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:0.75rem; margin-bottom:1rem;">
      <div style="font-size:0.78rem; text-transform:uppercase; color:var(--cyan-bright); font-weight:700;">
        📍 ${item.location}
      </div>
      <h3 class="lang-en" style="color:#fff; font-size:1.3rem; margin:0.25rem 0;">${item.nameEn}</h3>
      <h3 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.25rem; margin:0.25rem 0;">${item.nameTe}</h3>
    </div>

    <div class="detail-label" style="margin-bottom:0.6rem;">
      <span class="lang-en">Gouru Thirupati Reddy's Architectural Observations:</span>
      <span class="lang-te">గౌరు తిరుపతిరెడ్డి గారి వాస్తు పరిశోధనాంశాలు:</span>
    </div>

    <ul class="detail-list pros lang-en">
      ${item.observationsEn.map(obs => `<li style="margin-bottom:0.45rem;">${obs}</li>`).join("")}
    </ul>
    <ul class="detail-list pros lang-te">
      ${item.observationsTe.map(obs => `<li style="margin-bottom:0.45rem; font-family:var(--font-telugu);">${obs}</li>`).join("")}
    </ul>
  `;

  document.querySelectorAll(".temple-tab-btn").forEach(btn => {
    if (btn.dataset.temple === templeId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

let selectedHistoricalId = "bhopal";

function renderHistoricalTabs() {
  const wrap = document.getElementById("historicalTabsWrap") || document.getElementById("historicalCaseTabs");
  if (!wrap) return;
  wrap.innerHTML = HISTORICAL_GLOBAL_STUDIES.map(h => `
    <button class="case-tab-btn ${h.id === selectedHistoricalId ? "active" : ""}" data-case="${h.id}">
      <span class="lang-en">${h.tabLabelEn || h.titleEn}</span>
      <span class="lang-te" style="font-family:var(--font-telugu);">${h.tabLabelTe || h.titleTe}</span>
    </button>
  `).join("");

  wrap.querySelectorAll(".case-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const caseId = btn.dataset.case;
      if (caseId) renderHistoricalCase(caseId);
    });
  });
}

function renderHistoricalCase(caseId) {
  selectedHistoricalId = caseId;
  const item = HISTORICAL_GLOBAL_STUDIES.find(h => h.id === caseId) || HISTORICAL_GLOBAL_STUDIES[0];
  const container = document.getElementById("historicalCaseDetailContainer");
  if (!container) return;

  const defectsEnHtml = item.defectsEn ? `
    <div style="margin-top:1.1rem; background:rgba(30,41,59,0.55); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:1rem 1.25rem;">
      <div style="font-size:0.85rem; font-weight:700; color:var(--cyan-bright); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:0.5rem;">
        🔍 Key Structural & Macro-Vaastu Factors Identified:
      </div>
      <ul style="list-style:none; padding:0; margin:0; font-size:0.92rem; color:#cbd5e1; line-height:1.7;">
        ${item.defectsEn.map(d => `<li style="margin-bottom:0.35rem; display:flex; align-items:baseline; gap:0.45rem;"><span style="color:#f59e0b;">•</span> <span>${d}</span></li>`).join("")}
      </ul>
    </div>
  ` : "";

  const defectsTeHtml = item.defectsTe ? `
    <div style="margin-top:1.1rem; background:rgba(30,41,59,0.55); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:1rem 1.25rem; font-family:var(--font-telugu);">
      <div style="font-size:0.85rem; font-weight:700; color:var(--cyan-bright); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:0.5rem;">
        🔍 శ్రీ తిరుపతిరెడ్డి గారు గుర్తించిన కీలక వాస్తు & భౌగోళిక అంశాలు:
      </div>
      <ul style="list-style:none; padding:0; margin:0; font-size:0.92rem; color:#fef08a; line-height:1.75;">
        ${item.defectsTe.map(d => `<li style="margin-bottom:0.35rem; display:flex; align-items:baseline; gap:0.45rem;"><span style="color:#f59e0b;">•</span> <span>${d}</span></li>`).join("")}
      </ul>
    </div>
  ` : "";

  const proverbEnHtml = item.proverbEn ? `
    <div style="margin-top:1.15rem; background:rgba(245,158,11,0.08); border-left:4px solid var(--gold-primary); padding:0.75rem 1rem; border-radius:0 8px 8px 0; font-style:italic; color:#fbbf24; font-size:0.94rem;">
      💡 <strong>Sri Thirupati Reddy's Forensic Maxim:</strong> “${item.proverbEn}”
    </div>
  ` : "";

  const proverbTeHtml = item.proverbTe ? `
    <div style="margin-top:1.15rem; background:rgba(245,158,11,0.08); border-left:4px solid var(--gold-primary); padding:0.75rem 1rem; border-radius:0 8px 8px 0; font-style:italic; color:#fbbf24; font-size:0.94rem; font-family:var(--font-telugu);">
      💡 <strong>గ్రంథంలోని సువర్ణ వాస్తు సూత్రం:</strong> “${item.proverbTe}”
    </div>
  ` : "";

  container.innerHTML = `
    <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:0.75rem; margin-bottom:1rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem; gap:0.75rem; flex-wrap:wrap;">
        <span style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
          📖 ${item.page}
        </span>
        <span style="font-size:0.78rem; background:rgba(239,68,68,0.18); color:#f87171; padding:0.18rem 0.55rem; border-radius:4px; font-weight:700; border:1px solid rgba(239,68,68,0.3);">
          <span class="lang-en">${item.tagEn}</span>
          <span class="lang-te" style="font-family:var(--font-telugu);">${item.tagTe}</span>
        </span>
      </div>
      <h3 class="lang-en" style="color:#fff; font-size:1.3rem; margin:0.25rem 0;">${item.titleEn}</h3>
      <h3 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.25rem; margin:0.25rem 0;">${item.titleTe}</h3>
    </div>

    <div class="detail-label" style="margin-bottom:0.6rem;">
      <span class="lang-en">Sri Thirupati Reddy's Forensic Findings:</span>
      <span class="lang-te">శ్రీ గౌరు తిరుపతిరెడ్డి గారి వాస్తు శోధన & నిర్ధారణ:</span>
    </div>

    <p class="lang-en" style="font-size:0.96rem; color:#e2e8f0; line-height:1.75; margin-bottom:0.75rem;">
      ${item.detailsEn}
    </p>
    <p class="lang-te" style="font-size:0.96rem; font-family:var(--font-telugu); color:#fef08a; line-height:1.8;">
      ${item.detailsTe}
    </p>

    <div class="lang-en">
      ${defectsEnHtml}
      ${proverbEnHtml}
    </div>

    <div class="lang-te">
      ${defectsTeHtml}
      ${proverbTeHtml}
    </div>
  `;

  const tabsWrap = document.getElementById("historicalTabsWrap") || document.getElementById("historicalCaseTabs");
  if (tabsWrap) {
    tabsWrap.querySelectorAll(".case-tab-btn").forEach(btn => {
      if (btn.dataset.case === caseId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
}


function renderSiteGrades() {
  const container = document.getElementById("siteGradesContainer");
  if (!container) return;

  container.innerHTML = SITE_GRADES_DATA.map(sg => `
    <div class="proverb-card" style="border-color: rgba(6,182,212,0.3); background: rgba(15,23,42,0.85);">
      <div>
        <h4 class="lang-en" style="color:var(--cyan-bright); font-size:1.05rem; margin-bottom:0.2rem;">${sg.gradeEn}</h4>
        <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--cyan-bright); font-size:1.05rem; margin-bottom:0.2rem;">${sg.gradeTe}</h4>
        
        <div class="detail-label" style="margin-top:0.5rem; margin-bottom:0.35rem;">
          <span class="lang-en">Plot Features:</span>
          <span class="lang-te">స్థల లక్షణాలు:</span>
        </div>
        <ul class="lang-en" style="list-style:none; padding:0; margin-bottom:0.75rem; font-size:0.94rem; color:#cbd5e1; line-height:1.65;">
          ${sg.featuresEn.map(f => `<li style="margin-bottom:0.4rem;">• ${f}</li>`).join("")}
        </ul>
        <ul class="lang-te" style="list-style:none; padding:0; margin-bottom:0.75rem; font-size:0.94rem; color:#cbd5e1; line-height:1.65; font-family:var(--font-telugu);">
          ${sg.featuresTe.map(f => `<li style="margin-bottom:0.4rem;">• ${f}</li>`).join("")}
        </ul>
      </div>

      <div style="background:rgba(245,158,11,0.08); border-left:3px solid var(--gold-primary); padding:0.6rem 0.85rem; border-radius:0 6px 6px 0;">
        <span class="lang-en" style="font-size:0.8rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">Result & Influence:</span>
        <span class="lang-te" style="font-size:0.8rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700; font-family:var(--font-telugu);">ఫలితం & ప్రభావం:</span>
        <p class="lang-en" style="font-size:0.94rem; color:#fef08a; margin:0.25rem 0; line-height:1.55;">${sg.impactEn}</p>
        <p class="lang-te" style="font-size:0.94rem; color:#fef08a; font-family:var(--font-telugu); margin:0.25rem 0; line-height:1.55;">${sg.impactTe}</p>
      </div>
    </div>
  `).join("");
}

function renderSpecialLiving() {
  const container = document.getElementById("specialLivingContainer");
  if (!container) return;

  container.innerHTML = SPECIAL_LIVING_RULES.map(rule => `
    <div class="proverb-card" style="border-color: rgba(168,85,247,0.3); background: rgba(17,24,39,0.88);">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem; gap:0.75rem; flex-wrap:wrap;">
          <span style="font-size:0.75rem; color:var(--purple-accent); font-weight:700; text-transform:uppercase;">${rule.page}</span>
          <span style="font-size:0.75rem; background:rgba(168,85,247,0.15); color:#c084fc; padding:0.15rem 0.45rem; border-radius:4px; font-weight:600;">Authentic Rule</span>
        </div>
        <h4 class="lang-en" style="color:#fff; font-size:1.15rem; margin-bottom:0.25rem;">${rule.titleEn}</h4>
        <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.12rem; margin-bottom:0.25rem;">${rule.titleTe}</h4>
        
        <p class="lang-en" style="font-size:0.96rem; color:#e2e8f0; line-height:1.68; margin-bottom:0.6rem;">${rule.detailsEn}</p>
        <p class="lang-te" style="font-size:0.96rem; color:#cbd5e1; font-family:var(--font-telugu); line-height:1.68; margin-bottom:0.6rem;">${rule.detailsTe}</p>
      </div>
    </div>
  `).join("");
}

function renderCompassTilt() {
  const container = document.getElementById("compassTiltContainer");
  if (!container) return;

  container.innerHTML = COMPASS_TILT_RULES.map(c => `
    <div style="background:rgba(15,23,42,0.8); border:1px solid var(--border-gold); border-radius:12px; padding:1.25rem;">
      <div style="display:inline-block; background:rgba(245,158,11,0.15); color:var(--gold-bright); font-weight:700; font-size:0.8rem; padding:0.2rem 0.55rem; border-radius:4px; margin-bottom:0.5rem;">
        🧭 ${c.tiltDeg}
      </div>
      <h4 class="lang-en" style="color:#fff; font-size:1.15rem; margin-bottom:0.25rem;">${c.titleEn}</h4>
      <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.12rem; margin-bottom:0.25rem;">${c.titleTe}</h4>
      <p class="lang-en" style="font-size:0.96rem; color:#f1f5f9; line-height:1.65;">${c.descEn}</p>
      <p class="lang-te" style="font-size:0.96rem; color:#cbd5e1; font-family:var(--font-telugu); line-height:1.65;">${c.descTe}</p>
    </div>
  `).join("");
}

function evaluateHouseVaastu(config) {
  let score = 100;
  const doshas = [];
  const blessings = [];

  // 1. Site & House Facing (Pages 18, 140–143, 175)
  if (config.facing === "east") {
    blessings.push({
      titleEn: "✅ East Facing (Indra / Solar Prana Sthana)",
      titleTe: "✅ తూర్పు ముఖము (ఇంద్ర స్థానం / సౌర ప్రాణశక్తి)",
      descEn: "Welcomes healthy morning ultraviolet and infrared solar rays; bestows long life, clarity of thought, and high prestige.",
      descTe: "ఉదయపు అమృత సూర్యకాంతి నేరుగా ప్రవేశించి ఆయురారోగ్యాలు, కీర్తి ప్రతిష్టలు, మరియు వంశాభివృద్ధిని కలిగిస్తుంది."
    });
  } else if (config.facing === "north") {
    blessings.push({
      titleEn: "✅ North Facing (Kubera Wealth Corridor)",
      titleTe: "✅ ఉత్తర ముఖము (కుబేర స్థానం / ధన ప్రవాహం)",
      descEn: "Channels Earth's geomagnetic lines of force; ensures continuous trade, commercial abundance, and transparent accounts.",
      descTe: "భూ అయస్కాంత తరంగాల అనుకూలత వల్ల నిరంతర ధనాగమనం, వ్యాపారాభివృద్ధి, మరియు సర్వతోముఖాభివృద్ధి చేకూరుతాయి."
    });
  } else if (config.facing === "ne_facing") {
    blessings.push({
      titleEn: "✅ Northeast Corner Facing (Divine Eshanya Sthana)",
      titleTe: "✅ ఈశాన్య ముఖము (పరమ పవిత్ర దేవతా స్థానం)",
      descEn: "Highly auspicious corner entrance; generates supreme spiritual magnetic pull and continuous generational harmony.",
      descTe: "ఈశాన్య ముఖంగా ఉన్న స్థలం మరియు ప్రవేశం అత్యంత పుణ్యప్రదం, కుటుంబంలో నిరంతర శాంతి, ఆధ్యాత్మిక తేజస్సు నిలుస్తాయి."
    });
  } else if (config.facing === "west") {
    blessings.push({
      titleEn: "✅ West Facing (Varuna Sthana / Permissible)",
      titleTe: "✅ పశ్చిమ ముఖము (వరుణ స్థానం / సమ్మతం)",
      descEn: "Auspicious when entrance door is placed in the exalted Western Northwest (WNW) sector. Provides great financial stability.",
      descTe: "సింహద్వారం పశ్చిమ వాయువ్యంలో ఉండి, దక్షిణం మరియు పశ్చిమ గోడలు ఎత్తుగా ఉంటే అపారమైన వ్యాపార స్థిరత్వం లభిస్తుంది."
    });
  } else if (config.facing === "south") {
    blessings.push({
      titleEn: "✅ South Facing (Yama Sthana / Permissible with Exalted Door)",
      titleTe: "✅ దక్షిణ ముఖము (యమ స్థానం / ఉచ్ఛ ద్వార రక్షణ)",
      descEn: "Auspicious when the entrance is placed in Southern Southeast (SSE) and southern boundary wall is built heavy and thick.",
      descTe: "సింహద్వారం దక్షిణ ఆగ్నేయంలో ఉండి, దక్షిణ ప్రహరీ గోడ ఎత్తుగా ఉంటే కుటుంబానికి రక్షణ, ధైర్యం, అధికార లాభాలు కలుగుతాయి."
    });
  } else if (config.facing === "nw_facing") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Northwest Facing / Diagonal Plot (Air Dynamics)",
      titleTe: "⚠️ వాయువ్య ముఖము (వాయు స్థాన చలనం)",
      descEn: "Corner plot facing Vayuvya requires careful placement of the entrance gate away from the extreme corner to prevent fluctuating wealth.",
      descTe: "వాయువ్య ముఖం ఉన్నపుడు సింహద్వారం సరిగ్గా మూలలో కాకుండా పశ్చిమ వాయువ్యంలో పెట్టాలి.",
      remedyEn: "Keep gate in Western Northwest; maintain heavy boundary wall in Southwest.",
      remedyTe: "గేటును పశ్చిమ వాయువ్యంలో ఏర్పాటు చేసి నైరుతిలో ఎత్తైన గోడను నిర్మించండి."
    });
  } else if (config.facing === "se_facing") {
    score -= 10;
    doshas.push({
      titleEn: "⚠️ Southeast Facing / Diagonal Plot (Agni Caution)",
      titleTe: "⚠️ ఆగ్నేయ ముఖము (అగ్ని స్థాన జాగ్రత్త)",
      descEn: "Corner plot facing Agneya requires placing entrance in Southern Southeast (SSE); never locate entrance in Eastern Southeast (ESE).",
      descTe: "ఆగ్నేయ ముఖం గల స్థలంలో తూర్పు ఆగ్నేయంలో ద్వారం పెట్టకూడదు, కేవలం దక్షిణ ఆగ్నేయంలోనే ప్రవేశం ఉండాలి.",
      remedyEn: "Align gate strictly in Southern Southeast (SSE); construct elevated boundary along Southern flank.",
      remedyTe: "ద్వారాన్ని దక్షిణ ఆగ్నేయంలో పెట్టి, దక్షిణ రక్షణ గోడను ఎత్తుగా నిర్మించండి."
    });
  } else if (config.facing === "sw_facing") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Southwest Facing / Nairuthi Entrance (Severe Dosha)",
      titleTe: "❌ నైరుతి ముఖము (నైరుతి ద్వార మహాదోషం)",
      descEn: "Opening the primary entrance in the Southwest exposes the home to demonic negative energy, chronic debts, and untimely accidents.",
      descTe: "నైరుతి మూలన లేదా నైరుతి వైపు సింహద్వారం ఉండటం తీవ్రమైన వాస్తు దోషం. ఇది అంతులేని అప్పులు, వ్యాజ్యాలు, ప్రాణహానికి దారితీస్తుంది.",
      remedyEn: "Close the Southwest gate completely; construct primary entrance in East, North, or Western Northwest.",
      remedyTe: "నైరుతి గేటును పూర్తిగా మూసివేసి, ప్రవేశ మార్గాన్ని తూర్పు, ఉత్తరం లేదా పశ్చిమ వాయువ్యంలోకి మార్చుకోండి."
    });
  }

  // 2. Borewell / Underground Sump (Pages 12, 14, 18, 28, 155)
  if (config.borewell === "ne") {
    blessings.push({
      titleEn: "✅ Northeast Water Source (Prescribed / Eshanya)",
      titleTe: "✅ ఈశాన్యంలో జలనిధి (శాస్త్ర సమ్మతం)",
      descEn: "Underground water in ENE/NNE invites divine health, mental clarity, and perpetual prosperity.",
      descTe: "ఈశాన్యంలో సంపు లేదా బోరుబావి ఉండటం వల్ల ఆయురారోగ్యాలు, మానసిక ప్రశాంతత మరియు అఖండ సంపద కలుగుతాయి."
    });
  } else if (config.borewell === "east") {
    blessings.push({
      titleEn: "✅ Eastern Water Source (Pleasure Resort)",
      titleTe: "✅ తూర్పున జలము (ఆనంద నిలయము)",
      descEn: "Thirupati Reddy states: 'Well in the east — An everlasting pleasure resort.' Generates continuous domestic happiness.",
      descTe: "తూర్పు సరిహద్దులో బావి లేదా సంపు నిరంతర సౌఖ్య ప్రదాత."
    });
  } else if (config.borewell === "north") {
    blessings.push({
      titleEn: "✅ Northern Water Source (Kubera Sthana)",
      titleTe: "✅ ఉత్తరాన జలము (కుబేర సంపద)",
      descEn: "Water pit in the North channels geomagnetic flows and brings continuous financial abundance.",
      descTe: "ఉత్తరంలో సంపు ఉండటం కుబేర కటాక్షాన్ని, వ్యాపార లాభాలను కలిగిస్తుంది."
    });
  } else if (config.borewell === "nw") {
    score -= 10;
    doshas.push({
      titleEn: "⚠️ Northwest Water Pit (Wind & Mind Instability)",
      titleTe: "⚠️ వాయువ్యంలో బావి / సంపు (మానసిక చంచలత్వం)",
      descEn: "Water in the Air quadrant creates restless wandering, mental anxiety, and fluctuating finances.",
      descTe: "వాయువ్యంలో నీటి గుంత ఉండటం వల్ల నిలకడలేని మనస్తత్వం, అనవసర ఖర్చులు పెరుగుతాయి.",
      remedyEn: "Keep the NW sump sealed; establish an underground water source in the Northeast.",
      remedyTe: "వాయువ్య సంపును కప్పి ఉంచి, ఈశాన్యంలో నూతన సంపును ఏర్పాటు చేసుకోండి."
    });
  } else if (config.borewell === "se") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Southeast Well / Sump (Agni Clash)",
      titleTe: "❌ ఆగ్నేయంలో బావి / సంపు (అగ్ని దోషం)",
      descEn: "Water pit in the fire corner creates severe discord, fire accidents, heavy debts, and chronic illness for female occupants.",
      descTe: "ఆగ్నేయ మూలలో గోతులు లేదా బావులు ఉండటం వల్ల స్త్రీలకు తీవ్ర అనారోగ్యాలు, అగ్ని ప్రమాదాలు, మరియు ధన నష్టం సంభవిస్తాయి.",
      remedyEn: "Close and fill up the SE pit completely with earth; relocate underground water sump to ENE.",
      remedyTe: "ఆగ్నేయంలోని సంపును పూర్తిగా మట్టితో పూడ్చివేసి, ఈశాన్యంలో నూతన సంపును తవ్వుకోవాలి."
    });
  } else if (config.borewell === "south") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Southern Water Pit (Yama Sthana Depression)",
      titleTe: "❌ దక్షిణాన బావి / సంపు (యమ దోషం)",
      descEn: "Depression in the South triggers litigation, accidents, and draining financial insolvency.",
      descTe: "దక్షిణాన గుంతలు లేదా బావులు ఉంటే శత్రుపీడ, కోర్టు వ్యాజ్యాలు, తీవ్ర ధన నష్టం వస్తాయి.",
      remedyEn: "Fill up the Southern pit; level the ground to be higher than North.",
      remedyTe: "దక్షిణాన ఉన్న గుంతను పూడ్చివేసి నేలను ఎత్తు చేయండి."
    });
  } else if (config.borewell === "west") {
    score -= 20;
    doshas.push({
      titleEn: "❌ Western Water Pit (Varuna Cavity)",
      titleTe: "❌ పశ్చిమాన బావి / సంపు (తీవ్ర అనారోగ్యం)",
      descEn: "A cavity in the West destabilizes family foundation and induces chronic lung and kidney ailments.",
      descTe: "పశ్చిమంలో లోతైన గుంతలు ఉంటే కుటుంబ స్థిరత్వం దెబ్బతిని దీర్ఘకాలిక రోగాలు వస్తాయి.",
      remedyEn: "Close the Western pit and relocate to ENE.",
      remedyTe: "పశ్చిమ సంపును పూడ్చివేసి ఈశాన్యానికి మార్చండి."
    });
  } else if (config.borewell === "sw") {
    score -= 30;
    doshas.push({
      titleEn: "❌ Southwest Well / Borewell (Fatal Nairuthi Pit)",
      titleTe: "❌ నైరుతిలో బావి / సంపు (మహా వినాశనం)",
      descEn: "The most destructive dosha in Vaastu. Thirupati Reddy calls it a 'fatal grave pit' causing early demise of head of household, unnatural deaths, and total ruin.",
      descTe: "వాస్తు శాస్త్రంలోనే అత్యంత ప్రమాదకరమైన దోషం. ఇది గృహ యజమాని ప్రాణాలకు ముప్పు, ఆకస్మిక మరణాలు, మరియు సంపూర్ణ వినాశనాన్ని కలిగిస్తుంది.",
      remedyEn: "Immediately seal and fill up the SW cavity with solid red soil and stones; construct heavy pavement over it.",
      remedyTe: "నైరుతిలోని గుంతను తక్షణమే రాళ్ళు, ఎర్రమట్టితో పూడ్చివేసి పైన బరువైన కాంక్రీట్ వేయాలి."
    });
  } else if (config.borewell === "center") {
    score -= 30;
    doshas.push({
      titleEn: "❌ Central Water Pit (Pierced Brahmasthana)",
      titleTe: "❌ బ్రహ్మస్థానంలో బావి / సంపు (నాభి ఛేదన)",
      descEn: "Excavating water pits in the cosmic center creates insurmountable domestic unrest and heart ailments.",
      descTe: "గృహ నాభి స్థానమైన బ్రహ్మస్థానంలో గోతులు తవ్వితే ఇంట్లో ఎవరికీ శాంతి ఉండదు.",
      remedyEn: "Close the central pit immediately; make the center level and flat.",
      remedyTe: "నడిమి ఇంట్లోని సంపును పూర్తిగా పూడ్చి సమాంతరంగా మార్చండి."
    });
  }

  // 3. Kitchen Cooking Hearth (Pages 22, 159)
  if (config.kitchen === "se") {
    blessings.push({
      titleEn: "✅ Southeast Kitchen (Agneya Sthana — 1st Choice)",
      titleTe: "✅ ఆగ్నేయంలో వంటగది (ప్రథమ ఎంపిక)",
      descEn: "Hearth in Agneya ensures female vitality, excellent digestion, and family harmony while cooking facing East.",
      descTe: "ఆగ్నేయంలో వంటగది ఉండి తూర్పు ముఖంగా వంట చేయడం వల్ల గృహిణి ఆరోగ్యం, కుటుంబ సౌభాగ్యం వృద్ధి చెందుతాయి."
    });
  } else if (config.kitchen === "nw") {
    blessings.push({
      titleEn: "✅ Northwest Kitchen (Vayuvya — Prescribed 2nd Choice)",
      titleTe: "✅ వాయువ్యంలో వంటగది (రెండవ ఆమోదిత స్థానం)",
      descEn: "Alternative Agni location in the wind sector ensures quick guest turnover and positive domestic balance.",
      descTe: "ఆగ్నేయం కుదరనపుడు వాయువ్యంలో వంటగది ఏర్పాటు చేయడం ఆమోదయోగ్యం."
    });
  } else if (config.kitchen === "east") {
    blessings.push({
      titleEn: "✅ Eastern Kitchen (Beneficial Morning Light)",
      titleTe: "✅ తూర్పున వంటగది (ఉదయపు ఎండ అనుకూలత)",
      descEn: "Cooking in the East allows natural solar light to sterilize food preparations.",
      descTe: "తూర్పున వంట చేయడం వల్ల సహజ సౌరకాంతి లభించి ఆహారం పవిత్రంగా ఉంటుంది."
    });
  } else if (config.kitchen === "south" || config.kitchen === "west") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Southern / Western Kitchen (Tolerable Secondary)",
      titleTe: "⚠️ దక్షిణ / పశ్చిమ వంటగది (మధ్యమ స్థానం)",
      descEn: "Permissible if cooking platform is aligned towards the East, but less ideal than Southeast.",
      descTe: "వంటగది ఇక్కడ ఉన్నపుడు వండే వ్యక్తి తప్పనిసరిగా తూర్పు ముఖంగానే నిలబడాలి.",
      remedyEn: "Ensure cook faces East while preparing meals.",
      remedyTe: "వంట చేసేటప్పుడు తూర్పు వైపు మాత్రమే చూసేలా స్టవ్ అమర్చండి."
    });
  } else if (config.kitchen === "north") {
    score -= 20;
    doshas.push({
      titleEn: "❌ Northern Kitchen (Kubera Wealth Burn)",
      titleTe: "❌ ఉత్తరంలో వంటగది (కుబేర దహన దోషం)",
      descEn: "Lighting fire in the North burns financial reserves and causes uncontrollable domestic expenditures.",
      descTe: "కుబేర స్థానమైన ఉత్తరంలో అగ్నిని రాజేస్తే సంపాదన నీళ్లలా ఖర్చై అప్పుల పాలవుతారు.",
      remedyEn: "Relocate cooking stove to Southeast or Northwest corner.",
      remedyTe: "వంట పొయ్యిని ఆగ్నేయం లేదా వాయువ్యానికి మార్చండి."
    });
  } else if (config.kitchen === "ne") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Northeast Kitchen (Eshanya Agni Burn)",
      titleTe: "❌ ఈశాన్యంలో వంటగది (ఈశాన్య దహన దోషం)",
      descEn: "Fire in the sacred water/head quadrant triggers unbearable migraines, discord between spouses, and financial ruin.",
      descTe: "ఈశాన్యంలో పొయ్యి ఉండటం వల్ల తీవ్ర తలనొప్పులు, భార్యాభర్తల మధ్య కలహాలు, ధన నాశనం కలుగుతాయి.",
      remedyEn: "Immediately shift the gas stove to SE or NW; use the NE room only as Pooja or study.",
      remedyTe: "వంట పొయ్యిని తక్షణమే ఆగ్నేయానికి మార్చి, ఈశాన్య గదిని పూజ లేదా చదువుకు వాడండి."
    });
  } else if (config.kitchen === "sw") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Southwest Kitchen (Master Health Destruction)",
      titleTe: "❌ నైరుతిలో వంటగది (యజమాని ఆరోగ్య నాశనం)",
      descEn: "Fire in Nairuthi brings chronic illnesses to the male head of household and continuous medical debts.",
      descTe: "నైరుతిలో వంటగది ఉంటే కుటుంబ యజమానికి ప్రాణాంతక వ్యాధులు, నిరంతర ఆసుపత్రి ఖర్చులు వస్తాయి.",
      remedyEn: "Shift kitchen to Southeast corner without delay.",
      remedyTe: "వంటగదిని ఆగ్నేయ దిశకు వెంటనే మార్చండి."
    });
  } else if (config.kitchen === "center") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Central Kitchen (Fire in Brahmasthana)",
      titleTe: "❌ నడిమి ఇంట్లో వంటగది (బ్రహ్మస్థాన అగ్ని)",
      descEn: "Lighting hearth in the central core heats the heart of the dwelling, inducing hypertension and family fights.",
      descTe: "ఇంటి మధ్యలో పొయ్యి వెలిగిస్తే కుటుంబంలో నిత్యం అశాంతి, రక్తపోటు పెరుగుతాయి.",
      remedyEn: "Move cooking hearth to the external Southeast perimeter.",
      remedyTe: "వంటను బాహ్య ఆగ్నేయ సరిహద్దుకు మార్చండి."
    });
  }

  // 4. Master Bedroom (Pages 163, 165)
  if (config.bedroom === "sw") {
    blessings.push({
      titleEn: "✅ Southwest Master Bedroom (Nairuthi Stability)",
      titleTe: "✅ నైరుతిలో మాస్టర్ బెడ్‌రూమ్ (శాస్త్ర సమ్మతం)",
      descEn: "Provides supreme commanding authority, restful sleep, and solid household stability for the family head.",
      descTe: "నైరుతిలో యజమాని పడుకోవడం వల్ల గృహంలో అపారమైన ఆధిపత్యం, ప్రశాంత నిద్ర, కుటుంబ భద్రత లభిస్తాయి."
    });
  } else if (config.bedroom === "south" || config.bedroom === "west") {
    blessings.push({
      titleEn: "✅ Southern / Western Bedroom (Excellent Stability)",
      titleTe: "✅ దక్షిణ / పశ్చిమ పడకగది (ఉత్తమ స్థిరత్వం)",
      descEn: "Excellent for family elders and couples, preserving grounded energy and healthy bio-rhythms.",
      descTe: "పెద్దలకు, దంపతులకు దక్షిణ లేదా పశ్చిమ పడకగదులు ఎంతో అనుకూలమైనవి."
    });
  } else if (config.bedroom === "nw") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Northwest Bedroom (Vayuvya Restlessness)",
      titleTe: "⚠️ వాయువ్యంలో పడకగది (చంచల మనస్తత్వం)",
      descEn: "Air quadrant is ideal for guests or unmarried daughters awaiting marriage, but causes restlessness for house owners.",
      descTe: "వాయువ్యం అతిథులకు, పెళ్ళి కావాల్సిన ఆడపిల్లలకు శ్రేష్ఠం, కానీ కుటుంబ యజమానికి స్థిరత్వం లోపిస్తుంది.",
      remedyEn: "Sleep with head to South and use Southwest bedroom as primary suite.",
      remedyTe: "పడుకునేటప్పుడు దక్షిణం వైపు తలపెట్టండి; నైరుతి గదిని ప్రధాన బెడ్‌రూమ్‌గా మార్చుకోండి."
    });
  } else if (config.bedroom === "east") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Eastern Bedroom (Ideal for Students Only)",
      titleTe: "⚠️ తూర్పు పడకగది (విద్యార్థులకు మాత్రమే శ్రేష్ఠం)",
      descEn: "Stimulating solar energy is great for bachelor students, but can cause dominance disputes for married couples.",
      descTe: "తూర్పు గది విద్యార్థుల మేధోవికాసానికి మంచిది, కానీ దంపతుల మధ్య కలహాలు రావచ్చు.",
      remedyEn: "Shift master bed to South or West sides.",
      remedyTe: "యజమాని పడకను దక్షిణ లేదా పశ్చిమ భాగాలకు మార్చండి."
    });
  } else if (config.bedroom === "se") {
    score -= 15;
    doshas.push({
      titleEn: "❌ Southeast Bedroom (Agni Irritability & High BP)",
      titleTe: "❌ ఆగ్నేయంలో బెడ్‌రూమ్ (కోపతాపాలు & నిద్రలేమి)",
      descEn: "Sleeping in the fire sector agitates the sympathetic nervous system, inducing short temper and insomnia.",
      descTe: "ఆగ్నేయంలో పడుకుంటే అగ్ని తత్త్వం వల్ల విపరీతమైన కోపం, బీపీ, మరియు నిద్రలేమి వస్తాయి.",
      remedyEn: "Shift sleeping chamber to Southwest or West.",
      remedyTe: "పడకగదిని నైరుతి లేదా పశ్చిమానికి మార్చండి."
    });
  } else if (config.bedroom === "north") {
    score -= 10;
    doshas.push({
      titleEn: "⚠️ Northern Bedroom (Financial Restlessness)",
      titleTe: "⚠️ ఉత్తర పడకగది (ఆర్థిక అలజడి)",
      descEn: "Magnetic flux along the North creates frequent career changes and unstable business investments.",
      descTe: "ఉత్తరంలో యజమాని నిద్రిస్తే తరచూ వ్యాపారాలు మార్చడం, స్థిరత్వం లేకపోవడం జరుగుతుంది.",
      remedyEn: "Relocate master bedroom to the Southwest corner.",
      remedyTe: "మాస్టర్ బెడ్‌రూమ్‌ను నైరుతి మూలకు మార్చుకోండి."
    });
  } else if (config.bedroom === "ne") {
    score -= 20;
    doshas.push({
      titleEn: "❌ Northeast Master Bedroom (Deva Sthana Violation)",
      titleTe: "❌ ఈశాన్యంలో మాస్టర్ బెడ్‌రూమ్ (దేవ స్థాన దోషం)",
      descEn: "Marital intimacy in the sacred divine corner triggers chronic neurological disorders and family disputes.",
      descTe: "దేవతా స్థానమైన ఈశాన్యంలో దంపతులు శయనిస్తే తీవ్ర మానసిక ఆందోళనలు, వంశవృద్ధి లోపం కలుగుతాయి.",
      remedyEn: "Convert NE room into a meditation or study room; move master bed to SW.",
      remedyTe: "ఈశాన్య గదిని పూజ లేదా ధ్యాన మందిరంగా మార్చి, పడకను నైరుతికి మార్చండి."
    });
  }

  // 5. Overhead Water Tank (Page 171)
  if (config.oht === "sw") {
    blessings.push({
      titleEn: "✅ Southwest Overhead Water Tank (Supreme Elevation Ballast)",
      titleTe: "✅ నైరుతిలో ఓవర్‌హెడ్ ట్యాంక్ (గరిష్ఠ భార శిఖరం)",
      descEn: "Placing heavy water tons at the highest point in Southwest anchors structural stability and prosperity.",
      descTe: "నైరుతి పైకప్పుపై భారీ వాటర్ ట్యాంక్ అత్యంత ఎత్తుగా ఉండటం వల్ల గృహానికి సంపూర్ణ రక్షణ, ఐశ్వర్యం చేకూరుతాయి."
    });
  } else if (config.oht === "w" || config.oht === "s") {
    blessings.push({
      titleEn: "✅ West / South Overhead Tank (Prescribed)",
      titleTe: "✅ పశ్చిమ / దక్షిణ ఓవర్‌హెడ్ ట్యాంక్ (శాస్త్ర సమ్మతం)",
      descEn: "Provides beneficial load over the heavy perimeter.",
      descTe: "పశ్చిమ లేదా దక్షిణ భాగాల పైకప్పుపై వాటర్ ట్యాంక్ నిర్మించడం శుభదాయకం."
    });
  } else if (config.oht === "nw") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Northwest Overhead Tank (Air Weight Mismatch)",
      titleTe: "⚠️ వాయువ్యంలో ఓవర్‌హెడ్ ట్యాంక్ (మధ్యమ లోపం)",
      descEn: "Elevating heavy water in the wind sector is acceptable only if Southwest roof is built higher.",
      descTe: "వాయువ్యంలో ట్యాంక్ ఉన్నపుడు నైరుతి భాగం దానికంటే ఎత్తుగా ఉండేలా చూసుకోవాలి.",
      remedyEn: "Erect a taller pillar or parapet structure in the Southwest corner.",
      remedyTe: "నైరుతి మూలన వాటర్ ట్యాంక్ కంటే ఎత్తైన పిట్టగోడ లేదా స్తంభాన్ని నిర్మించండి."
    });
  } else if (config.oht === "se") {
    score -= 10;
    doshas.push({
      titleEn: "⚠️ Southeast Overhead Tank (Fire & Water Clash)",
      titleTe: "⚠️ ఆగ్నేయ పైకప్పు ట్యాంక్ (అగ్ని-జల సంఘర్షణ)",
      descEn: "Placing heavy cold water overhead above the Agni sector induces boiler issues, electrical trips, and female health tension.",
      descTe: "ఆగ్నేయం పైకప్పుపై భారీ నీటి ట్యాంక్ ఉంటే అగ్ని తత్త్వానికి భంగం కలిగి విద్యుత్ ప్రమాదాలు, స్త్రీలకు అనారోగ్యం రావచ్చు.",
      remedyEn: "Shift water storage to Southwest or West terrace.",
      remedyTe: "వాటర్ ట్యాంక్ ను నైరుతి లేదా పశ్చిమ స్లాబ్ కు మార్చండి."
    });
  } else if (config.oht === "east") {
    score -= 15;
    doshas.push({
      titleEn: "❌ Eastern Overhead Tank (Blocks Morning Solar Rays)",
      titleTe: "❌ తూర్పున ఓవర్‌హెడ్ ట్యాంక్ (సౌర కిరణాల నిరోధం)",
      descEn: "Massive shadow cast over the eastern boundary prevents beneficial dawn sunshine from reaching courtyards.",
      descTe: "తూర్పు పైకప్పుపై ట్యాంక్ ఉండటం వల్ల ఉదయపు ఎండ ఆవరణలోకి రాకుండా అడ్డుకుంటుంది.",
      remedyEn: "Relocate tank to Southwest roof slab.",
      remedyTe: "ట్యాంకును నైరుతి పైకప్పుపైకి మార్చండి."
    });
  } else if (config.oht === "north") {
    score -= 15;
    doshas.push({
      titleEn: "❌ Northern Overhead Tank (Crushes Kubera Current)",
      titleTe: "❌ ఉత్తర పైకప్పు ట్యాంక్ (కుబేర తరంగ నిరోధం)",
      descEn: "Heavy overhead weight along the North wall restricts geomagnetic inflow, causing business blockages.",
      descTe: "ఉత్తర భాగంలో భారీ బరువు వల్ల కుబేర శక్తి స్తంభించి వ్యాపార లావాదేవీలు మందగిస్తాయి.",
      remedyEn: "Relocate tank to Southwest or West roof.",
      remedyTe: "ట్యాంకును నైరుతి లేదా పశ్చిమ స్లాబ్ పై నిర్మించండి."
    });
  } else if (config.oht === "ne") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Northeast Overhead Tank (Lethal Weight over Eshanya)",
      titleTe: "❌ ఈశాన్యంలో ఓవర్‌హెడ్ ట్యాంక్ (ఈశాన్య భార మహాదోషం)",
      descEn: "Heavy dead weight over the Eshanya roof suffocates divine prana intake, causing heavy debts, brain strokes, and bankruptcy.",
      descTe: "ఈశాన్యం పైకప్పుపై భారీ వాటర్ ట్యాంక్ నిర్మిస్తే అది అంతులేని అప్పులు, పక్షవాతం, మరియు వ్యాపార దివాలాకు కారణమవుతుంది.",
      remedyEn: "Immediately dismantle and reconstruct the overhead tank on the Southwest or West terrace.",
      remedyTe: "ఈశాన్యపు ట్యాంక్ ను తక్షణమే తొలగించి నైరుతి లేదా పశ్చిమ పైకప్పుపై నిర్మించండి."
    });
  } else if (config.oht === "center") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Central Overhead Tank (Crushed Brahmasthana Core)",
      titleTe: "❌ నడిమి పైకప్పు ట్యాంక్ (బ్రహ్మస్థాన భార దోషం)",
      descEn: "Heavy dead tons suspended over the central atrium trample the heart of the dwelling, inducing severe cardiovascular ailments.",
      descTe: "నడిమి పైకప్పుపై ట్యాంక్ ఉంటే ఇంటి హృదయ స్థానంపై మోయలేని భారం పడి కుటుంబ సభ్యులకు తీవ్ర అనారోగ్యాలు వస్తాయి.",
      remedyEn: "Move overhead tank to the Southwest corner without delay.",
      remedyTe: "ట్యాంకును నైరుతి మూలకు తక్షణమే తరలించండి."
    });
  }

  // 6. Septic Tank Placement (Pages 169, 172)
  if (config.septic === "nw") {
    blessings.push({
      titleEn: "✅ Northern Northwest Septic Tank (Prescribed Vayuvya)",
      titleTe: "✅ ఉత్తర వాయువ్యంలో సెప్టిక్ ట్యాంక్ (శాస్త్ర సమ్మతం)",
      descEn: "Excreta pit in NNW safely vents away noxious decomposition gases through natural air currents.",
      descTe: "ఉత్తర వాయువ్యంలో సెప్టిక్ ట్యాంక్ ఉండటం వల్ల దుర్వాసన వాయువులు సహజంగా బయటకు వెళ్లిపోతాయి."
    });
  } else if (config.septic === "north" || config.septic === "south" || config.septic === "west") {
    blessings.push({
      titleEn: "✅ Central Boundary Septic Tank (Acceptable with Distance)",
      titleTe: "✅ సరిహద్దు సెప్టిక్ ట్యాంక్ (అనుమతించదగినది)",
      descEn: "Built slightly away from main walls, avoids damaging structural energy fields.",
      descTe: "ఇంటి ప్రధాన గోడలకు తగలకుండా దూరంగా నిర్మిస్తే దోషం ఉండదు."
    });
  } else if (config.septic === "ne") {
    score -= 30;
    doshas.push({
      titleEn: "❌ Northeast Septic Tank (Catastrophic Poisoning of Eshanya)",
      titleTe: "❌ ఈశాన్యంలో సెప్టిక్ ట్యాంక్ (మహా వినాశనం)",
      descEn: "Placing a feces pit in the divine Northeast corner is considered spiritual suicide in Vaastu, guaranteeing bankruptcy and cancer.",
      descTe: "ఈశాన్యంలో మలమూత్రాల సెప్టిక్ ట్యాంక్ నిర్మించడం శాస్త్రరీత్యా మహా పాపం. ఇది క్యాన్సర్ వ్యాధులు, వంశ నాశనానికి దారితీస్తుంది.",
      remedyEn: "Empty, disinfect, and fill up the NE tank completely with clean earth; reconstruct strictly in NNW.",
      remedyTe: "ఈశాన్య ట్యాంకును పూర్తిగా ఖాళీ చేసి, ఉప్పు, సున్నంతో శుద్ధి చేసి మట్టితో పూడ్చండి; వాయువ్యంలో కొత్తది కట్టండి."
    });
  } else if (config.septic === "sw") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Southwest Septic Tank (Ruinous Pit in Foundation Anchor)",
      titleTe: "❌ నైరుతిలో సెప్టిక్ ట్యాంక్ (తీవ్ర పతనం)",
      descEn: "Cavity in Southwest ruins stability, inviting accidents and untimely death of household breadwinner.",
      descTe: "నైరుతిలో లోతైన మరుగుదొడ్ల గుంత ఉంటే యజమాని అకాల మరణం, తీవ్ర నష్టాలు తప్పవు.",
      remedyEn: "Relocate septic pit to Northern Northwest; seal SW cavity with solid earth.",
      remedyTe: "సెప్టిక్ ట్యాంకును వాయువ్యానికి మార్చి నైరుతి గుంతను రాళ్ళు, మట్టితో పూడ్చండి."
    });
  } else if (config.septic === "se" || config.septic === "east" || config.septic === "center") {
    score -= 20;
    doshas.push({
      titleEn: "❌ Defective Septic Tank Placement",
      titleTe: "❌ దోషపూరిత సెప్టిక్ ట్యాంక్ నిర్మాణం",
      descEn: "Septic pits in Southeast, East, or Center contaminate vital prana grids.",
      descTe: "ఆగ్నేయం, తూర్పు లేదా నడిమి ఇళ్లలో సెప్టిక్ ట్యాంక్ ఉండటం తీవ్ర ఆరోగ్య నష్టాలకు కారణం.",
      remedyEn: "Relocate septic tank to the prescribed Northern Northwest sector.",
      remedyTe: "సెప్టిక్ ట్యాంక్ ను ఉత్తర వాయువ్య భాగంలోకి మార్చండి."
    });
  }

  // 7. Staircase Location (Pages 88, 151–154)
  if (config.stairs === "sw") {
    blessings.push({
      titleEn: "✅ Southwest Staircase (Ideal Structural Ballast)",
      titleTe: "✅ నైరుతిలో మెట్లు (అత్యుత్తమ స్థాన బలం)",
      descEn: "The Southwest requires the highest elevation and heaviest dead load. Massive RCC steps here anchor the foundation and protect the family head.",
      descTe: "నైరుతి భాగం అత్యంత ఎత్తుగా, బరువుగా ఉండాలి. ఇక్కడ మెట్లు నిర్మించడం వల్ల గృహ యజమానికి సంపూర్ణ ఆధిపత్యం, స్థిరత్వం లభిస్తాయి."
    });
  } else if (config.stairs === "south") {
    blessings.push({
      titleEn: "✅ Southern Staircase (Prescribed / Wealth Ascent)",
      titleTe: "✅ దక్షిణాన మెట్లు (శాస్త్ర సమ్మతం / ధనాభివృద్ధి)",
      descEn: "Thirupati Reddy states: 'Stairs from north to south pave way to financial growth.' High southern mass provides excellent defense.",
      descTe: "ఉత్తరం నుండి దక్షిణానికి ఎక్కే మెట్లు ఆర్థికాభివృద్ధికి సోపానాలు. దక్షిణ గోడలకు బరువైన మెట్లు ఉండటం వాస్తు సమ్మతం."
    });
  } else if (config.stairs === "west") {
    blessings.push({
      titleEn: "✅ Western Staircase (Prescribed / Solar Shield)",
      titleTe: "✅ పశ్చిమాన మెట్లు (శాస్త్ర సమ్మతం / స్థిరత్వం)",
      descEn: "Western staircase adds vital structural weight that shields against harsh afternoon thermal radiation and ensures business stability.",
      descTe: "పశ్చిమ భాగంలో మెట్లు ఉండటం వల్ల మధ్యాహ్నపు తీవ్ర వేడి నుండి రక్షణ కలగడమే కాకుండా వ్యాపార కార్యకలాపాలలో స్థిరత్వం చేకూరుతుంది."
    });
  } else if (config.stairs === "nw") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Northwest Staircase (Secondary / Keep Lightweight)",
      titleTe: "⚠️ వాయువ్యంలో మెట్లు (మధ్యమ స్థానం / తేలికగా ఉండాలి)",
      descEn: "Acceptable for external or guest access in the Air quadrant. Ensure steps climb clockwise and do not block Northern ventilation flow.",
      descTe: "వాయువ్యంలో మెట్లు నిర్మించడం మధ్యమ ఫలితాన్ని ఇస్తుంది. మెట్లు సవ్యదిశలో (క్లాక్‌వైజ్) ఎక్కేలా ఉండి, ఉత్తరపు గాలి వెలుతురును అడ్డుకోకుండా చూడాలి.",
      remedyEn: "Keep the staircase open with iron railings rather than solid brick walls to maintain airflow.",
      remedyTe: "వాయువ్య మెట్లను మూసివేయకుండా ఇనుప గ్రిల్స్ తో గాలి ధారాళంగా ఆడేలా ఉంచండి."
    });
  } else if (config.stairs === "se") {
    score -= 10;
    doshas.push({
      titleEn: "⚠️ Southeast Staircase (Fire Sector Caution)",
      titleTe: "⚠️ ఆగ్నేయంలో మెట్లు (అగ్ని స్థాన దోషం)",
      descEn: "Tolerable in Southern Southeast (SSE), but heavy stairs in Eastern Southeast (ESE) or above the kitchen hearth create domestic friction and health stress for housewives.",
      descTe: "దక్షిణ ఆగ్నేయంలో మెట్లు ఫర్వాలేదు, కానీ తూర్పు ఆగ్నేయంలో లేదా వంట పొయ్యి పైభాగంలో మెట్లు ఉంటే గృహిణులకు అనారోగ్యం, కుటుంబంలో ఘర్షణలు వస్తాయి.",
      remedyEn: "Never construct a toilet or store garbage beneath Southeast stairs; keep the underside clean and brightly lit.",
      remedyTe: "ఆగ్నేయపు మెట్ల కింద మరుగుదొడ్లు, చెత్త సామాన్లు పెట్టరాదు. ఆ భాగాన్ని శుభ్రంగా, వెలుతురుతో ఉంచండి."
    });
  } else if (config.stairs === "north") {
    score -= 15;
    doshas.push({
      titleEn: "❌ Northern Staircase (Blocks Kubera Corridor)",
      titleTe: "❌ ఉత్తరంలో మెట్లు (కుబేర శక్తి నిరోధం)",
      descEn: "Heavy concrete staircase along the North wall blocks Earth's geomagnetic lines of force and overshadows the Kubera wealth sector, causing cash flow obstructions.",
      descTe: "ఉత్తర భాగంలో బరువైన మెట్ల నిర్మాణం వల్ల పవిత్ర అయస్కాంత శక్తి ప్రసారం ఆగిపోతుంది. కుబేర స్థానంలో బరువు వల్ల ధనాగమనం స్తంభించి ఆర్థిక ఇబ్బందులు వస్తాయి.",
      remedyEn: "Reconstruct with lightweight cantilever open stairs; avoid solid block walls beneath Northern steps.",
      remedyTe: "ఉత్తరంలో కాంక్రీట్ గోడలకు బదులు ఓపెన్ కాంటిలివర్ మెట్లను ఉపయోగించండి; మెట్ల కింద గదులు కట్టవద్దు."
    });
  } else if (config.stairs === "east") {
    score -= 15;
    doshas.push({
      titleEn: "❌ Eastern Staircase (Blocks Solar Prana)",
      titleTe: "❌ తూర్పున మెట్లు (సౌర ప్రాణశక్తి అడ్డంకి)",
      descEn: "Massive stairs on the East wall obstruct morning sunlight and fresh prana, inducing chronic fatigue, eye ailments, and lack of enthusiasm in children.",
      descTe: "తూర్పు గోడపై మెట్లు నిర్మిస్తే ఉదయపు అమృత సూర్యకాంతి నిరోధించబడుతుంది. దీనివల్ల కుటుంబ సభ్యులకు నిరంతర నీరసం, అనారోగ్యాలు కలుగుతాయి.",
      remedyEn: "Provide wide skylights and keep eastern windows unobstructed; avoid dark solid concrete mass along East.",
      remedyTe: "తూర్పు మెట్ల వద్ద సహజ వెలుతురు వచ్చేలా స్కైలైట్లు ఏర్పాటు చేయండి; తూర్పు కిటికీలను మూయవద్దు."
    });
  } else if (config.stairs === "ne") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Northeast Staircase (Catastrophic Eshanya Crushing)",
      titleTe: "❌ ఈశాన్యంలో మెట్లు (మహా వినాశకర దోషం)",
      descEn: "Placing heavy concrete stairs in the divine Northeast is a lethal Vaastu violation. It suffocates the celestial energy intake, causing chronic bankruptcy, paralysis, and severe family crises.",
      descTe: "ఈశాన్య మూలలో బరువైన మెట్లు కట్టడం శాస్త్రంలో అత్యంత ఘోరమైన మహాదోషం. ఇది దైవిక శక్తి ప్రవాహాన్ని ఊపిరాడకుండా చేసి, తీవ్ర ఆర్థిక పతనం, ప్రాణాంతక వ్యాధులకు దారితీస్తుంది.",
      remedyEn: "Demolish or reconstruct lightweight open metal spiral stairs outside; relocate the primary staircase strictly to the South or West.",
      remedyTe: "ఈశాన్య మెట్లను తక్షణమే తొలగించి, మెట్లను ఇంటికి దక్షిణం లేదా పశ్చిమ భాగంలో మాత్రమే నిర్మించండి."
    });
  } else if (config.stairs === "center") {
    score -= 20;
    doshas.push({
      titleEn: "❌ Central Staircase (Crushed Brahmasthana)",
      titleTe: "❌ నడిమి ఇంట్లో మెట్లు (బ్రహ్మస్థాన వినాశనం)",
      descEn: "Concrete stairs in the Brahmasthana (central atrium) trample the cosmic navel and ether element of the house, triggering heart attacks, constant mental anxiety, and total loss of peace.",
      descTe: "నడిమి ఇంట్లో బరువైన మెట్లు ఉండటం వల్ల ఇంటి హృదయ స్థానమైన బ్రహ్మస్థానం నాశనమవుతుంది. ఇది గుండెజబ్బులు, తీవ్రమైన మానసిక ఆందోళన, మరియు శాంతి లోపానికి కారణమవుతుంది.",
      remedyEn: "Relocate staircase to the outer South or West perimeter; restore open, weightless space in the central core.",
      remedyTe: "మెట్లను నడిమి ఇల్లు నుండి తప్పించి బాహ్య దక్షిణ లేదా పశ్చిమ సరిహద్దుకు మార్చండి; కేంద్రాన్ని బరువులేకుండా తేలికగా ఉంచండి."
    });
  }

  // 8. Site Gradient & Drainage (Pages 18, 54, 61–67, 76, 167)
  if (config.slope === "sw_to_ne") {
    blessings.push({
      titleEn: "✅ SW High to NE Low (The Golden Vaastu Slope / Amritha Valu)",
      titleTe: "✅ నైరుతి ఎత్తు, ఈశాన్యం పల్లం (అమృత వాలు — పరమ శ్రేష్ఠం)",
      descEn: "Permits unimpeded gravitational and electromagnetic drainage from highest Southwest down towards Northeast. Guarantees supreme health, generational prosperity, and peace.",
      descTe: "భూమి సహజ వాలు నైరుతి నుండి ఈశాన్యం వైపు పల్లంగా ఉండటం వల్ల సకల సంపదలు, శాంతి నిలుస్తాయి. ఇది వాస్తు శాస్త్రంలోనే అమృత వాలు."
    });
  } else if (config.slope === "west_to_east") {
    blessings.push({
      titleEn: "✅ West High to East Low (Indra Slope / Morning Prana)",
      titleTe: "✅ పశ్చిమం ఎత్తు, తూర్పు పల్లం (ఇంద్ర వాలు / సౌర శక్తి)",
      descEn: "Heavy western barrier slopes smoothly toward the sunrise direction, inviting vitality, spiritual growth, and longevity.",
      descTe: "పశ్చిమం ఎత్తుగా ఉండి తూర్పు పల్లంగా ఉండటం వల్ల ఉదయపు సౌరశక్తి ఇంట్లోకి నిరంతరం ప్రసరించి ఆయురారోగ్యాలు వృద్ధి చెందుతాయి."
    });
  } else if (config.slope === "south_to_north") {
    blessings.push({
      titleEn: "✅ South High to North Low (Kubera Slope / Wealth Accumulation)",
      titleTe: "✅ దక్షిణం ఎత్తు, ఉత్తరం పల్లం (కుబేర వాలు / సంపద)",
      descEn: "Solid defensive South slopes gently toward the open North, channeling geomagnetic wealth currents into household coffers.",
      descTe: "దక్షిణం ఎత్తయి ఉత్తరం పల్లంగా ఉండటం వల్ల కుబేర కటాక్షం నిరంతరం లభించి వ్యాపార లాభాలు, స్థిరాస్తులు పెరుగుతాయి."
    });
  } else if (config.slope === "high_center") {
    blessings.push({
      titleEn: "✅ High Center Core / Kurma Prishta (Elevated Plinth)",
      titleTe: "✅ నడిమి ఇల్లు ఎత్తు, చుట్టూ వాలు (కూర్మ పృష్ఠం — రక్షణ)",
      descEn: "Elevated central core repels moisture and sheds surface water safely outward towards perimeter drainage channels.",
      descTe: "ఇంటి నడిమి భాగం ఎత్తుగా ఉండి చుట్టూ పల్లంగా ఉండటం (కూర్మ పృష్ఠం) ఇంట్లోకి తేమ రాకుండా కాపాడి కుటుంబానికి రక్షణ నిస్తుంది."
    });
  } else if (config.slope === "se_to_nw") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ SE High to NW Low (Vayuvya Drain / Fast Turnover)",
      titleTe: "⚠️ ఆగ్నేయం ఎత్తు, వాయువ్యం పల్లం (వాయువ్య వాలు / మధ్యమం)",
      descEn: "Drainage toward the wind sector is tolerable, but can cause rapid turnover of financial liquidity and restless mobility.",
      descTe: "వాయువ్యం వైపు నీటి ప్రవాహం ఉండటం మధ్యమం; ఖర్చులు వేగంగా జరగడం, చేతిలో డబ్బు నిలవకపోవడం జరగవచ్చు.",
      remedyEn: "Grade internal courtyards to divert primary surface water exit toward North or East.",
      remedyTe: "వర్షపు నీరు వీలైనంత వరకు ఉత్తరం లేదా తూర్పు వైపు నుంచి బయటకు వెళ్ళేలా చిన్న కాలువలను సరిచేయండి."
    });
  } else if (config.slope === "flat") {
    score -= 5;
    doshas.push({
      titleEn: "⚠️ Completely Flat Level (Sluggish Drainage Risk)",
      titleTe: "⚠️ సమాంతర మట్టం (నీటి నిల్వ ప్రమాదం)",
      descEn: "Rainwater stagnation can cause dampness unless graded gently towards Northeast drainage channels.",
      descTe: "నేల పూర్తిగా సమాంతరంగా ఉంటే నీరు నిలిచే ప్రమాదం ఉంది. ఈశాన్యం వైపు స్వల్ప వాలు కల్పించాలి.",
      remedyEn: "Slope floor tiles and storm drains 1 to 2 inches towards the Northeast quadrant.",
      remedyTe: "వర్షపు నీరు ఈశాన్యం వైపు వెళ్ళేలా 1-2 అంగుళాల స్వల్ప వాలును ఏర్పాటు చేసుకోండి."
    });
  } else if (config.slope === "nw_to_se") {
    score -= 15;
    doshas.push({
      titleEn: "❌ NW High to SE Low (Agni Drain / Fire Water Clash)",
      titleTe: "❌ వాయువ్యం ఎత్తు, ఆగ్నేయం పల్లం (అగ్ని వాలు / అశుభం)",
      descEn: "Water draining into the fire corner creates conflict between Agni and Jala, bringing domestic quarrels, female illness, and sudden financial penalties.",
      descTe: "వాయువ్యం ఎత్తయి ఆగ్నేయం పల్లమైతే అగ్ని-జల సంఘర్షణ జరిగి, స్త్రీలకు అనారోగ్యం, అగ్ని ప్రమాదాలు, మరియు ఆకస్మిక ధన నష్టం కలుగుతాయి.",
      remedyEn: "Raise the Southeast ground level with earth/gravel; redirect drainage channels toward North or East.",
      remedyTe: "ఆగ్నేయాన్ని మట్టితో పూడ్చి ఎత్తు చేయండి, నీటి నిష్క్రమణను తూర్పు లేదా ఉత్తరానికి మళ్లించండి."
    });
  } else if (config.slope === "north_to_south") {
    score -= 20;
    doshas.push({
      titleEn: "❌ North High to South Low (Yama Drain / Wealth Loss)",
      titleTe: "❌ ఉత్తరం ఎత్తు, దక్షిణం పల్లం (యమ వాలు / ధన నష్టం)",
      descEn: "Reversal of Kubera polarity. When North is high and South is low, household wealth and male vitality drain away into litigation and debt.",
      descTe: "ఉత్తరం ఎత్తయి దక్షిణం పల్లమైతే సంపద నిలవక అప్పులపాలవుతారు; కోర్టు వ్యాజ్యాలు, శత్రుపీడ పెరుగుతాయి.",
      remedyEn: "Add earth/gravel to raise the South ground level visibly higher than the North.",
      remedyTe: "దక్షిణ భాగాన్ని మట్టితో పూడ్చి ఉత్తరం కంటే ఎత్తుగా చేయండి."
    });
  } else if (config.slope === "east_to_west") {
    score -= 20;
    doshas.push({
      titleEn: "❌ East High to West Low (Varuna Drain / Vitality Loss)",
      titleTe: "❌ తూర్పు ఎత్తు, పశ్చిమం పల్లం (వరుణ వాలు / నీరసం)",
      descEn: "When East is high and West is low, solar prana cannot enter the depressed Western chambers, inducing chronic illness and weakness among children.",
      descTe: "తూర్పు ఎత్తయి పశ్చిమం పల్లంగా ఉంటే ఉదయపు అమృత కిరణాలు అందక పిల్లలకు రోగాలు, కుటుంబంలో నీరసం కలుగుతాయి.",
      remedyEn: "Build up the Western compound and ground level; lower the Eastern courtyard.",
      remedyTe: "పశ్చిమ భాగాన్ని ఎత్తు చేసి, తూర్పు భాగాన్ని పల్లం చేయండి."
    });
  } else if (config.slope === "low_center") {
    score -= 25;
    doshas.push({
      titleEn: "❌ Low Center Basin / Gaja Prishta Pit (Depression Dosha)",
      titleTe: "❌ నడిమి ఇల్లు పల్లం, చుట్టూ ఎత్తు (గజ పృష్ఠ దోషం)",
      descEn: "Center of the plot or house is depressed like a bowl, trapping stagnant rainwater and foul dampness in the heart of the dwelling. Induces chronic mental depression and heavy financial entrapment.",
      descTe: "ఇంటి నడిమి భాగం గుంతలా ఉండి చుట్టూ ఎత్తుగా ఉంటే అది గజ పృష్ఠ మహాదోషం. ఇది తీవ్ర మానసిక కుంగుబాటు, అంతులేని అప్పుల ఊబికి దారితీస్తుంది.",
      remedyEn: "Elevate the central plinth above ground level with clean soil and gravel; install perimeter French drains.",
      remedyTe: "నడిమి ఇంటిని ఎర్రమట్టితో పూడ్చి చుట్టూ ఉన్న నేల కంటే ఎత్తు చేయండి."
    });
  } else if (config.slope === "ne_to_sw") {
    score -= 30;
    doshas.push({
      titleEn: "❌ NE High to SW Low (Fatal Nairuthi Drain / Bankruptcy)",
      titleTe: "❌ ఈశాన్యం ఎత్తు, నైరుతి పల్లం (వినాశకర వాలు / దివాలా)",
      descEn: "Reversing natural topographic gradients drains all family wealth and causes sudden financial bankruptcy into the Southwest abyss.",
      descTe: "ఈశాన్యం ఎత్తయి నైరుతి పల్లమైతే ఇంట్లోని ధనం, ఆరోగ్యం అంతా కొట్టుకుపోయి అప్పులపాలవుతారు. ఇది అత్యంత ప్రమాదకరమైన దోషం.",
      remedyEn: "Immediately add earth/gravel to raise the Southwest ground level so it stands visibly higher than Northeast.",
      remedyTe: "నైరుతి భాగాన్ని తక్షణమే మట్టితో పూడ్చి ఎత్తు చేయండి, ఈశాన్యం వైపు పల్లం ఉండేలా చూడండి."
    });
  }

  score = Math.max(0, Math.min(100, score));
  return { score, doshas, blessings };
}

function runHouseDiagnostic() {
  const config = {
    facing: document.getElementById("diagFacing")?.value || "east",
    borewell: document.getElementById("diagBorewell")?.value || "ne",
    kitchen: document.getElementById("diagKitchen")?.value || "se",
    bedroom: document.getElementById("diagBedroom")?.value || "sw",
    oht: document.getElementById("diagOht")?.value || "sw",
    septic: document.getElementById("diagSeptic")?.value || "nw",
    stairs: document.getElementById("diagStairs")?.value || "sw",
    slope: document.getElementById("diagSlope")?.value || "sw_to_ne"
  };

  const results = evaluateHouseVaastu(config);
  const scoreEl = document.getElementById("diagScoreVal");
  const badgeEl = document.getElementById("diagScoreBadge");
  const listEl = document.getElementById("diagDoshasList");

  if (scoreEl) {
    scoreEl.textContent = `${results.score}%`;
    scoreEl.style.color = results.score >= 80 ? "#10b981" : (results.score >= 60 ? "#fbbf24" : "#f43f5e");
  }

  if (badgeEl) {
    if (results.score >= 80) {
      badgeEl.innerHTML = `
        <span class="lang-en">Highly Auspicious</span>
        <span class="lang-te">ఉత్తమ వాస్తు (పరిపూర్ణ శుభం)</span>
      `;
      badgeEl.style.background = "rgba(16, 185, 129, 0.2)";
      badgeEl.style.color = "#34d399";
    } else if (results.score >= 60) {
      badgeEl.innerHTML = `
        <span class="lang-en">Moderate Compliance</span>
        <span class="lang-te">మధ్యమ వాస్తు (సవరణలు అవసరం)</span>
      `;
      badgeEl.style.background = "rgba(245, 158, 11, 0.2)";
      badgeEl.style.color = "#fbbf24";
    } else {
      badgeEl.innerHTML = `
        <span class="lang-en">Defective Layout</span>
        <span class="lang-te">దోషయుత వాస్తు (తక్షణ మార్పులు తప్పనిసరి)</span>
      `;
      badgeEl.style.background = "rgba(244, 63, 94, 0.2)";
      badgeEl.style.color = "#fb7185";
    }
  }

  if (listEl) {
    let html = "";
    if (results.doshas.length === 0) {
      html += `
        <div class="dosha-item favorable">
          <div class="lang-en" style="font-weight:700; color:#34d399; font-size:1.05rem;">🌟 No Critical Doshas Found!</div>
          <div class="lang-te" style="font-weight:700; color:#34d399; font-family:var(--font-telugu); font-size:1.02rem;">🌟 ఎలాంటి తీవ్ర వాస్తు దోషాలు లేవు!</div>
          <p class="lang-en" style="font-size:0.92rem; color:var(--text-muted); margin-top:0.3rem; line-height:1.6;">
            This layout strictly adheres to Sri Gouru Thirupati Reddy's authentic architectural guidelines.
          </p>
          <p class="lang-te" style="font-size:0.92rem; color:var(--text-muted); font-family:var(--font-telugu); margin-top:0.3rem; line-height:1.6;">
            ఈ నమూనా గౌరు తిరుపతిరెడ్డి గారి ప్రామాణిక గ్రంథ సూత్రాలకు ఖచ్చితంగా సరిపోలుతోంది.
          </p>
        </div>
      `;
    } else {
      results.doshas.forEach(d => {
        html += `
          <div class="dosha-item">
            <div class="lang-en" style="font-weight:700; color:#fb7185; font-size:1.05rem;">${d.titleEn}</div>
            <div class="lang-te" style="font-family:var(--font-telugu); font-size:1.02rem; color:#fda4af; font-weight:700;">${d.titleTe}</div>
            <p class="lang-en" style="margin:0.3rem 0; color:#cbd5e1; font-size:0.94rem; line-height:1.6;">${d.descEn}</p>
            <p class="lang-te" style="margin:0.3rem 0; color:#cbd5e1; font-family:var(--font-telugu); font-size:0.94rem; line-height:1.6;">${d.descTe}</p>
            <div style="margin-top:0.45rem; font-size:0.92rem; color:#fef08a; background:rgba(0,0,0,0.3); padding:0.4rem 0.65rem; border-radius:6px; line-height:1.55;">
              <span class="lang-en"><strong>Remedy:</strong> ${d.remedyEn}</span>
              <span class="lang-te" style="font-family:var(--font-telugu);"><strong>పరిష్కారం:</strong> ${d.remedyTe}</span>
            </div>
          </div>
        `;
      });
    }

    results.blessings.forEach(b => {
      html += `
        <div class="dosha-item favorable">
          <div class="lang-en" style="font-weight:700; color:#34d399; font-size:1.02rem;">${b.titleEn}</div>
          <div class="lang-te" style="font-family:var(--font-telugu); font-size:1rem; color:#6ee7b7; font-weight:700;">${b.titleTe}</div>
          <p class="lang-en" style="margin:0.25rem 0; color:#cbd5e1; font-size:0.92rem; line-height:1.55;">${b.descEn}</p>
          <p class="lang-te" style="margin:0.25rem 0; color:#cbd5e1; font-family:var(--font-telugu); font-size:0.92rem; line-height:1.55;">${b.descTe}</p>
        </div>
      `;
    });

    listEl.innerHTML = html;
  }
}

function renderProverbs(filterText = "", category = "all") {
  const container = document.getElementById("proverbsGrid");
  if (!container) return;

  const filtered = THIRUPATI_REDDY_PROVERBS.filter(p => {
    const matchesCat = category === "all" || p.category === category;
    const query = filterText.toLowerCase();
    const matchesSearch = 
      p.rhymeEn.toLowerCase().includes(query) ||
      p.rhymeTe.toLowerCase().includes(query) ||
      p.meaningEn.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:2rem; color:var(--text-muted);">
        <span class="lang-en">No aphorisms found matching your search.</span>
        <span class="lang-te" style="font-family:var(--font-telugu);">మీరు వెతికిన పదానికి సరిపడు సూక్తులు కనుగొనబడలేదు.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="proverb-card">
      <div>
        <div class="lang-en proverb-rhyme">“${p.rhymeEn}”</div>
        <div class="lang-te proverb-telugu" style="font-size:1rem; font-weight:700; color:var(--gold-bright);">“${p.rhymeTe}”</div>
        <p class="lang-en proverb-explanation">${p.meaningEn}</p>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; flex-wrap:wrap;">
        <span class="proverb-category">${p.category}</span>
        <span style="font-size:0.72rem; color:var(--text-dim); font-family:var(--font-mono); white-space:nowrap; flex-shrink:0;">${p.page}</span>
      </div>
    </div>
  `).join("");
}

// --- 10. Household Item Vaastu Logic ---
let selectedDirKey = "ne";

function renderItemChecker() {
  const itemSelect = document.getElementById("itemSelect");
  const posSelect = document.getElementById("posSelect");
  if (!itemSelect || !posSelect) return;

  itemSelect.innerHTML = HOUSEHOLD_ITEMS_DATA.map(item => {
    const text = currentLang === "english" ? item.nameEn : (currentLang === "telugu" ? item.nameTe : `${item.nameEn} (${item.nameTe})`);
    return `
      <option value="${item.id}" data-en="${item.nameEn}" data-te="${item.nameTe}" data-dual="${item.nameEn} (${item.nameTe})">
        ${text}
      </option>
    `;
  }).join("");

  updatePositionOptions();

  itemSelect.addEventListener("change", () => {
    updatePositionOptions();
    checkItemPlacement();
  });

  const btnCheck = document.getElementById("btnCheckItem");
  if (btnCheck) {
    btnCheck.addEventListener("click", checkItemPlacement);
  }

  checkItemPlacement();
}

function updatePositionOptions() {
  const itemSelect = document.getElementById("itemSelect");
  const posSelect = document.getElementById("posSelect");
  if (!itemSelect || !posSelect) return;

  const currentItem = HOUSEHOLD_ITEMS_DATA.find(i => i.id === itemSelect.value) || HOUSEHOLD_ITEMS_DATA[0];
  const keys = Object.keys(currentItem.placements);

  posSelect.innerHTML = keys.map(k => {
    const p = currentItem.placements[k];
    const text = currentLang === "english" ? p.textEn : (currentLang === "telugu" ? p.textTe : `${p.textEn} (${p.textTe})`);
    return `<option value="${k}" data-en="${p.textEn}" data-te="${p.textTe}" data-dual="${p.textEn} (${p.textTe})">
      ${text}
    </option>`;
  }).join("");
}

function checkItemPlacement() {
  const itemSelect = document.getElementById("itemSelect");
  const posSelect = document.getElementById("posSelect");
  const resultBox = document.getElementById("checkerResultBox");
  if (!itemSelect || !posSelect || !resultBox) return;

  const item = HOUSEHOLD_ITEMS_DATA.find(i => i.id === itemSelect.value);
  if (!item) return;

  const placement = item.placements[posSelect.value] || Object.values(item.placements)[0];
  const status = placement.status;

  let badgeClass = "ideal";
  let statusBadgeEn = "✅ Ideal / Prescribed Placement";
  let statusBadgeTe = "✅ శాస్త్ర సమ్మతమైన ఉత్తమ స్థానం";

  if (status === "acceptable") {
    badgeClass = "acceptable";
    statusBadgeEn = "⚠️ Acceptable / Secondary Placement";
    statusBadgeTe = "⚠️ అనుమతించదగిన మధ్యమ స్థానం";
  } else if (status === "forbidden") {
    badgeClass = "forbidden";
    statusBadgeEn = "❌ Strictly Forbidden / Inauspicious Dosha";
    statusBadgeTe = "❌ నిషిద్ధ స్థానం / తీవ్ర వాస్తు దోషం";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.6rem;">
      <span class="item-badge-status ${badgeClass}">
        <span class="lang-en">${statusBadgeEn}</span>
        <span class="lang-te">${statusBadgeTe}</span>
      </span>
      <span style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
        📖 Book Reference: ${item.page}
      </span>
    </div>

    <div style="margin-bottom:0.65rem;">
      <div style="font-size:0.82rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">
        <span class="lang-en">Placement Diagnosis:</span>
        <span class="lang-te">స్థాన విశ్లేషణ:</span>
      </div>
      <div class="lang-en" style="font-size:1.02rem; font-weight:700; color:#fff; margin-top:0.2rem;">
        ${placement.textEn}
      </div>
      <div class="lang-te" style="font-size:1.02rem; font-weight:700; color:var(--gold-bright); font-family:var(--font-telugu); margin-top:0.2rem;">
        ${placement.textTe}
      </div>
    </div>

    <div style="margin-bottom:0.65rem;">
      <div style="font-size:0.82rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">
        <span class="lang-en">Why as per Sri Thirupati Reddy:</span>
        <span class="lang-te">గౌరు తిరుపతిరెడ్డి గారి శాస్త్రీయ వివరణ:</span>
      </div>
      <p class="lang-en" style="font-size:0.95rem; color:#e2e8f0; line-height:1.68; margin:0.25rem 0 0 0;">
        ${item.whyEn}
      </p>
      <p class="lang-te" style="font-size:0.95rem; font-family:var(--font-telugu); color:#fef08a; line-height:1.75; margin:0.25rem 0 0 0;">
        ${item.whyTe}
      </p>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:0.8rem; background:rgba(255,255,255,0.03); padding:0.75rem; border-radius:8px;">
      <div>
        <span style="font-size:0.76rem; text-transform:uppercase; color:#34d399; font-weight:700;">
          <span class="lang-en">Ideal Location:</span><span class="lang-te">ఉత్తమ స్థానం:</span>
        </span>
        <div class="lang-en" style="font-size:0.9rem; color:#fff; margin-top:0.2rem;">${item.idealLocationEn}</div>
        <div class="lang-te" style="font-size:0.9rem; color:#fff; font-family:var(--font-telugu); margin-top:0.2rem;">${item.idealLocationTe}</div>
      </div>
      <div>
        <span style="font-size:0.76rem; text-transform:uppercase; color:#f87171; font-weight:700;">
          <span class="lang-en">Forbidden:</span><span class="lang-te">నిషిద్ధం:</span>
        </span>
        <div class="lang-en" style="font-size:0.9rem; color:#fff; margin-top:0.2rem;">${item.forbiddenLocationEn}</div>
        <div class="lang-te" style="font-size:0.9rem; color:#fff; font-family:var(--font-telugu); margin-top:0.2rem;">${item.forbiddenLocationTe}</div>
      </div>
    </div>
  `;
}

function renderDirectionalGuide(dirKey) {
  selectedDirKey = dirKey;
  const guide = DIRECTIONAL_ITEMS_GUIDE[dirKey] || DIRECTIONAL_ITEMS_GUIDE["ne"];
  const container = document.getElementById("dirDetailContainer");
  const wrap = document.getElementById("dirTabsWrap");
  if (!container || !wrap) return;

  const keys = ["ne", "east", "se", "south", "sw", "west", "nw", "north", "center"];
  wrap.innerHTML = keys.map(k => {
    const g = DIRECTIONAL_ITEMS_GUIDE[k];
    return `<button class="dir-tab-btn ${k === selectedDirKey ? "active" : ""}" data-dir="${k}">
      <span class="lang-en">${g.nameEn.split(" (")[0]}</span>
      <span class="lang-te" style="font-family:var(--font-telugu);">${g.nameTe.split(" (")[0]}</span>
    </button>`;
  }).join("");

  wrap.querySelectorAll(".dir-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const d = btn.dataset.dir;
      if (d) renderDirectionalGuide(d);
    });
  });

  container.innerHTML = `
    <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:0.75rem; margin-bottom:1rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
        <span style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
          ☸️ Element: <span class="lang-en">${guide.elementEn}</span><span class="lang-te">${guide.elementTe}</span> • Ruler: <span class="lang-en">${guide.rulerEn}</span><span class="lang-te">${guide.rulerTe}</span>
        </span>
      </div>
      <h3 class="lang-en" style="color:#fff; font-size:1.3rem; margin:0.3rem 0;">${guide.nameEn}</h3>
      <h3 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.25rem; margin:0.3rem 0;">${guide.nameTe}</h3>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
      <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.25); border-radius:10px; padding:1rem;">
        <div style="font-size:0.85rem; text-transform:uppercase; color:#34d399; font-weight:700; margin-bottom:0.5rem;">
          <span class="lang-en">✅ Prescribed Household Items:</span>
          <span class="lang-te">✅ ఇక్కడ ఉంచాల్సిన శుభప్రద వస్తువులు:</span>
        </div>
        <ul class="detail-list pros lang-en">
          ${guide.prescribedEn.map(p => `<li>${p}</li>`).join("")}
        </ul>
        <ul class="detail-list pros lang-te">
          ${guide.prescribedTe.map(p => `<li style="font-family:var(--font-telugu);">${p}</li>`).join("")}
        </ul>
      </div>

      <div style="background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.25); border-radius:10px; padding:1rem;">
        <div style="font-size:0.85rem; text-transform:uppercase; color:#f87171; font-weight:700; margin-bottom:0.5rem;">
          <span class="lang-en">❌ Strictly Prohibited Items:</span>
          <span class="lang-te">❌ ఇక్కడ ఎట్టిపరిస్థితుల్లో ఉంచకూడనివి:</span>
        </div>
        <ul class="detail-list cons lang-en">
          ${guide.prohibitedEn.map(p => `<li>${p}</li>`).join("")}
        </ul>
        <ul class="detail-list cons lang-te">
          ${guide.prohibitedTe.map(p => `<li style="font-family:var(--font-telugu);">${p}</li>`).join("")}
        </ul>
      </div>
    </div>

    <div class="detail-aphorism" style="margin-top:1rem;">
      <span class="lang-en">💡 Sri Thirupati Reddy's Golden Principle: ${guide.guidelineEn}</span>
      <span class="lang-te" style="font-family:var(--font-telugu);">💡 గౌరు తిరుపతిరెడ్డి గారి సువర్ణ సూత్రం: ${guide.guidelineTe}</span>
    </div>
  `;
}

function renderHouseholdItems(filterText = "", category = "all") {
  const container = document.getElementById("itemCatalogGrid");
  if (!container) return;

  const f = filterText.toLowerCase().trim();
  const filtered = HOUSEHOLD_ITEMS_DATA.filter(item => {
    const matchesCat = (category === "all" || item.category === category);
    const matchesSearch = !f ||
      item.nameEn.toLowerCase().includes(f) ||
      item.nameTe.toLowerCase().includes(f) ||
      item.idealLocationEn.toLowerCase().includes(f) ||
      item.idealLocationTe.toLowerCase().includes(f);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:2.5rem; color:var(--text-muted);">
        <span class="lang-en">No household items matched your search criteria. Try a different term.</span>
        <span class="lang-te">మీ శోధనకు సరిపోలిన వస్తువులు ఏవీ కనిపించలేదు. మరొక పదాన్ని ప్రయత్నించండి.</span>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="item-card">
      <div>
        <div class="item-card-header">
          <span class="item-category-pill">
            <span class="lang-en">${item.categoryEn}</span>
            <span class="lang-te">${item.categoryTe}</span>
          </span>
          <span class="item-page-badge">📖 ${item.page}</span>
        </div>

        <h4 class="lang-en" style="color:#fff; font-size:1.15rem; margin:0.25rem 0;">${item.nameEn}</h4>
        <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.1rem; margin:0.25rem 0;">${item.nameTe}</h4>

        <div style="margin-top:0.6rem; font-size:0.92rem; line-height:1.6;">
          <div style="color:#34d399; font-weight:600; margin-bottom:0.25rem;">
            <span class="lang-en">✅ Ideal: ${item.idealLocationEn}</span>
            <span class="lang-te" style="font-family:var(--font-telugu);">✅ ఉత్తమ స్థానం: ${item.idealLocationTe}</span>
          </div>
          <div style="color:#f87171; font-weight:600;">
            <span class="lang-en">❌ Forbidden: ${item.forbiddenLocationEn}</span>
            <span class="lang-te" style="font-family:var(--font-telugu);">❌ నిషిద్ధం: ${item.forbiddenLocationTe}</span>
          </div>
        </div>

        <p class="lang-en" style="font-size:0.88rem; color:#cbd5e1; line-height:1.6; margin-top:0.6rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:0.5rem;">
          ${item.whyEn}
        </p>
        <p class="lang-te" style="font-size:0.88rem; font-family:var(--font-telugu); color:#fef08a; line-height:1.7; margin-top:0.6rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:0.5rem;">
          ${item.whyTe}
        </p>
      </div>
    </div>
  `).join("");
}

// --- 10B. Steps & Staircase Placement Guide (Pages 12, 13, 151–154) ---
const STAIRCASE_GUIDE_DATA = [
  {
    id: "straight_stairs",
    nameEn: "Straight / Linear & Dog-Legged Staircase (Pages 151–153)",
    nameTe: "సాధారణ / నిలువు & మలుపు మెట్లు (పేజీలు 151–153)",
    page: "Pages 151–153",
    whyEn: "Pages 151–153: Steps should proceed initially from North-to-South or East-to-West. Do not let stairs touch the Eastern or Northern wall — maintain a minimum 3-inch interspace. Internal stairs may be built in any room EXCEPT the Northeastern and Southwestern rooms. External stairs built outside the house should not be roofed (Page 154).",
    whyTe: "పుస్తకంలో 151–153 పేజీల ప్రకారం — మెట్లు ప్రారంభంలో ఉత్తరం నుండి దక్షిణానికి లేదా తూర్పు నుండి పశ్చిమానికి ఎక్కాలి. తూర్పు లేదా ఉత్తర గోడలను మెట్లు తాకకుండా కనీసం 3 అంగుళాల ఖాళీ (ఇంటర్‌స్పేస్) వదలాలి. ఇంటి లోపల మెట్లు ఈశాన్యం మరియు నైరుతి గదులలో తప్ప మిగిలిన గదులలో కట్టవచ్చు. ఇంటి బయట కట్టే మెట్లపై కప్పు వేయకూడదు (పేజీ 154).",
    options: {
      south_etow: {
        status: "ideal",
        textEn: "✅ Internal along South & West walls: ascend East-to-West, turn North to exalted landing (Page 153)",
        textTe: "✅ దక్షిణ & పశ్చిమ గోడల వెంట: తూర్పు నుండి పశ్చిమానికి ఎక్కి ఉత్తరానికి తిరిగే మెట్లు (పేజీ 153)"
      },
      west_ntos: {
        status: "ideal",
        textEn: "✅ Internal along West & South walls: ascend North-to-South, turn East to exalted landing (Page 153)",
        textTe: "✅ పశ్చిమ & దక్షిణ గోడల వెంట: ఉత్తరం నుండి దక్షిణానికి ఎక్కి తూర్పునకు తిరిగే మెట్లు (పేజీ 153)"
      },
      east_south_internal: {
        status: "acceptable",
        textEn: "⚠️ Internal along East & South walls (3\" gap from East wall): ascend N→S, turn West (Page 153)",
        textTe: "⚠️ తూర్పు & దక్షిణ గోడల వెంట (తూర్పు గోడకు 3\" ఖాళీతో): N→S ఎక్కి పశ్చిమానికి తిరిగే మెట్లు (పేజీ 153)"
      },
      ese_ntos: {
        status: "acceptable",
        textEn: "⚠️ External in ESE (away from East wall): ascend N→S, turn North to ENE balcony (Page 152)",
        textTe: "⚠️ తూర్పు ఆగ్నేయంలో (తూర్పు గోడకు దూరంగా): N→S ఎక్కి ఉత్తరానికి తిరిగి ENE బాల్కనీలోకి (పేజీ 152)"
      },
      ssw_etow: {
        status: "acceptable",
        textEn: "⚠️ External in SSW: ascend E→W, turn East after landing to SSE balcony (Page 152)",
        textTe: "⚠️ దక్షిణ నైరుతిలో: E→W ఎక్కి తూర్పునకు తిరిగి SSE బాల్కనీలోకి చేరే మెట్లు (పేజీ 152)"
      },
      wsw_ntos: {
        status: "acceptable",
        textEn: "⚠️ External in WSW: ascend N→S, turn North after landing to WNW balcony (Page 152)",
        textTe: "⚠️ పశ్చిమ నైరుతిలో: N→S ఎక్కి ఉత్తరానికి తిరిగి WNW బాల్కనీలోకి చేరే మెట్లు (పేజీ 152)"
      },
      nnw_external: {
        status: "acceptable",
        textEn: "⚠️ External in NNW (away from North wall): ascend E→W, turn East to NNE balcony (Page 152)",
        textTe: "⚠️ ఉత్తర వాయువ్యంలో (ఉత్తర గోడకు దూరంగా): E→W ఎక్కి తూర్పునకు తిరిగి NNE బాల్కనీలోకి (పేజీ 152)"
      },
      nnw_internal: {
        status: "acceptable",
        textEn: "⚠️ Internal along North & West walls (3\" gap from North wall): ascend E→W, turn South (Page 153)",
        textTe: "⚠️ ఉత్తర & పశ్చిమ గోడల వెంట (ఉత్తర గోడకు 3\" ఖాళీతో): E→W ఎక్కి దక్షిణానికి తిరిగే మెట్లు (పేజీ 153)"
      },
      touch_east_north: {
        status: "forbidden",
        textEn: "❌ Touching Eastern or Northern wall without 3-inch interspace (Pages 151–153)",
        textTe: "❌ తూర్పు లేదా ఉత్తర గోడలను ఆనుకుని 3 అంగుళాల ఖాళీ లేకుండా నిర్మించిన మెట్లు (పేజీ 151)"
      },
      internal_sw_ne: {
        status: "forbidden",
        textEn: "❌ Internal staircase inside Northeastern or Southwestern room (Pages 151–152)",
        textTe: "❌ ఇంటి లోపల ఈశాన్యం లేదా నైరుతి గదిలో నిర్మించే మెట్లు (పేజీలు 151–152 నిషిద్ధం)"
      },
      ne_eshanya: {
        status: "forbidden",
        textEn: "❌ Northeast (Eshanya / NNE / ENE) — Truncates directions & hinders innovation (Page 154)",
        textTe: "❌ ఈశాన్యం (NNE / ENE) — దిశలను ఖండించి పురోగతిని అడ్డుకునే దోషం (పేజీ 154)"
      },
      sw_hollow: {
        status: "forbidden",
        textEn: "❌ Southwest creating a hollow/cavity beneath stairs (Page 155)",
        textTe: "❌ నైరుతిలో మెట్ల క్రింద ఖాళీ గుంత/బోలు ఏర్పడే నిర్మాణం (పేజీ 155 నిషిద్ధం)"
      }
    }
  },
  {
    id: "spiral_stairs",
    nameEn: "Spiral / Circular Staircase (External Metal or Open)",
    nameTe: "చుట్టు మెట్లు / స్పైరల్ స్టెయిర్‌కేస్",
    page: "Pages 151–154",
    whyEn: "Sri Thirupati Reddy specifies distinct quadrants for spiral or circular staircases based on house facing: Southern Southeast (SSE) for East- and West-facing houses, and Western Northwest (WNW) for North- and South-facing houses. They must strictly avoid NNE and ENE under all circumstances, and must never create an underground pit or well cavity in the Southwest.",
    whyTe: "శ్రీ తిరుపతిరెడ్డి గారి గ్రంథం ప్రకారం — తూర్పు, పశ్చిమ ముఖ ఇళ్లకు చుట్టు మెట్లను దక్షిణ ఆగ్నేయంలో (SSE), ఉత్తర, దక్షిణ ముఖ ఇళ్లకు పశ్చిమ వాయువ్యంలో (WNW) ఏర్పాటు చేయాలి. ఉత్తర ఈశాన్యం, తూర్పు ఈశాన్యాలలో ఎట్టిపరిస్థితుల్లో పెట్టరాదు. నైరుతిలో భూగర్భ గుంతలాగా మారకుండా జాగ్రత్త పడాలి.",
    options: {
      sse_ew_facing: {
        status: "ideal",
        textEn: "✅ Southern Southeast (SSE) for East- or West-facing house",
        textTe: "✅ తూర్పు లేదా పశ్చిమ ముఖ ఇంటికి దక్షిణ ఆగ్నేయంలో (SSE) చుట్టు మెట్లు"
      },
      wnw_ns_facing: {
        status: "ideal",
        textEn: "✅ Western Northwest (WNW) for North- or South-facing house",
        textTe: "✅ ఉత్తర లేదా దక్షిణ ముఖ ఇంటికి పశ్చిమ వాయువ్యంలో (WNW) చుట్టు మెట్లు"
      },
      sw_clearance: {
        status: "acceptable",
        textEn: "⚠️ Southwest external open spiral stair shifted 6 inches East/North with NO underground pit",
        textTe: "⚠️ నైరుతిలో భూగర్భ గుంత లేకుండా తూర్పు/ఉత్తరానికి 6 అంగుళాల అంతరంతో బయటి చుట్టు మెట్లు"
      },
      sw_pit: {
        status: "forbidden",
        textEn: "❌ Southwest spiral stair creating a pit or well cavity",
        textTe: "❌ నైరుతిలో గుంత లేదా బావి లాంటి ఖాళీని సృష్టించే చుట్టు మెట్లు"
      },
      nne_ene: {
        status: "forbidden",
        textEn: "❌ Northern Northeast (NNE) or Eastern Northeast (ENE) — Strictly Forbidden",
        textTe: "❌ ఉత్తర ఈశాన్యం (NNE) లేదా తూర్పు ఈశాన్యం (ENE) — పూర్తిగా నిషిద్ధం"
      }
    }
  },
  {
    id: "under_stairs",
    nameEn: "Rooms & Space Under Staircase Landings (Pages 154–155)",
    nameTe: "మెట్ల లాండింగ్ క్రింది గదుల నిర్మాణం (పేజీలు 154–155)",
    page: "Pages 154–155",
    whyEn: "Pages 154–155: Under outside linear stairs reaching the terrace, bathrooms, latrines, stores, or meter rooms should NOT be built in any direction. Under WSW (West-facing) or SSW (South-facing) stair landings, rooms are unfavourable and must be completely avoided. Under ESE or NNW landings, abutting rooms extend ESE/NNW badly unless balanced by an ENE/NNE pillar and wall in line with the house.",
    whyTe: "పుస్తకంలో 154–155 పేజీల ప్రకారం — టెర్రస్‌కు వెళ్లే బయటి మెట్ల లాండింగ్ క్రింద ఏ దిశలోనూ బాత్రూమ్‌లు, మరుగుదొడ్లు, స్టోర్ రూమ్‌లు లేదా మీటర్ రూమ్‌లు కట్టకూడదు. పశ్చిమ ముఖ ఇంటి (WSW) లేదా దక్షిణ ముఖ ఇంటి (SSW) మెట్ల క్రింద గదులు పూర్తిగా నిషిద్ధం. తూర్పు/ఉత్తర ఇళ్లలో (ESE/NNW) గది అనివార్యమైతే ఇంటి వరుసలో ENE/NNE లో పిల్లర్ & గోడతో సరిదిద్దాలి.",
    options: {
      keep_open: {
        status: "ideal",
        textEn: "✅ Keep space beneath outside stair landings completely open & free of rooms (Page 155)",
        textTe: "✅ బయటి మెట్ల లాండింగ్ క్రింద బాత్రూమ్/స్టోర్/మీటర్ గదులు లేకుండా ఖాళీగా ఉంచడం (పేజీ 155)"
      },
      ese_nnw_remedied: {
        status: "acceptable",
        textEn: "⚠️ Under ESE / NNW landing ONLY if balanced with ENE / NNE pillar & wall in line with house (Page 154)",
        textTe: "⚠️ ESE / NNW లాండింగ్ క్రింద గది ఉంటే, ఇంటి వరుసలో ENE / NNE వద్ద పిల్లర్ & గోడతో సరిదిద్దాలి (పేజీ 154)"
      },
      wsw_ssw_room: {
        status: "forbidden",
        textEn: "❌ Room / Store / Bathroom under WSW (West-facing) or SSW (South-facing) stair landing (Page 155)",
        textTe: "❌ WSW (పశ్చిమ) లేదా SSW (దక్షిణ) మెట్ల లాండింగ్ క్రింద గది/స్టోర్/బాత్రూమ్ (పేజీ 155 — పూర్తిగా నిషిద్ధం)"
      },
      outside_landing_utilities: {
        status: "forbidden",
        textEn: "❌ Bathroom, Latrine, Store, or Meter Room under outside linear stair landing in ANY direction (Page 155)",
        textTe: "❌ ఏ దిశలోనైనా బయటి నిలువు మెట్ల క్రింద బాత్రూమ్, మరుగుదొడ్డి, స్టోర్ లేదా మీటర్ గది (పేజీ 155 — నిషిద్ధం)"
      }
    }
  }
];

const STAIRCASE_BOOK_RULES = [
  {
    page: "Pages 12, 13, 151–153",
    badgeEn: "Zone & Mass",
    badgeTe: "స్థానం & బరువు",
    titleEn: "South, West & Southwest Load Anchoring",
    titleTe: "దక్షిణ, పశ్చిమ, నైరుతిలో మెట్ల స్థిరీకరణ",
    detailsEn: "Staircases represent heavy structural mass and belong strictly in the South, West, or Southwest (Nairuthi). Never construct heavy concrete stairs in the Northeast (Eshanya), NNE, ENE, or Center (Brahmasthana), as doing so suffocates celestial energy flow and causes severe financial and health crises.",
    detailsTe: "మెట్లు బరువైన నిర్మాణం కాబట్టి దక్షిణం, పశ్చిమం లేదా నైరుతిలో మాత్రమే నిర్మించాలి. ఈశాన్యం (NNE/ENE) లేదా బ్రహ్మస్థానంలో మెట్లు కడితే ప్రాణశక్తి స్తంభించి తీవ్ర ఆర్థిక, ఆరోగ్య సమస్యలు వస్తాయి."
  },
  {
    page: "Pages 151–154",
    badgeEn: "Ascent & Cantilever",
    badgeTe: "ఎక్కుడు & బాల్కనీ",
    titleEn: "N→S / E→W Ascent, Unroofed Stairs & Cantilever Balconies",
    titleTe: "N→S / E→W ఎక్కుడు, కప్పు లేని మెట్లు & కాంటిలీవర్ బాల్కనీ",
    detailsEn: "Linear stairs should initially ascend North-to-South or East-to-West, then turn after the landing to enter the first floor/terrace in an exalted position. Balconies serving these stairs must be built on a cantilever beam (NOT on pillars, Page 153). Stairs built outside the house should NOT be roofed (Page 154).",
    detailsTe: "నిలువు మెట్లు ప్రారంభంలో ఉత్తరం నుండి దక్షిణానికి లేదా తూర్పు నుండి పశ్చిమానికి ఎక్కి, లాండింగ్ తర్వాత ఉచ్ఛ స్థానంలోకి చేరాలి. వీటి బాల్కనీలను పిల్లర్లపై కాకుండా కాంటిలీవర్ బీమ్ పైనే నిర్మించాలి (పేజీ 153). ఇంటి బయట కట్టే మెట్లపై కప్పు వేయరాదు (పేజీ 154)."
  },
  {
    page: "Pages 151–154",
    badgeEn: "Spiral Stairs",
    badgeTe: "చుట్టు మెట్లు",
    titleEn: "Spiral / Circular Staircase Quadrants",
    titleTe: "చుట్టు మెట్ల దిశా నియమాలు",
    detailsEn: "For East- and West-facing houses, spiral staircases are prescribed in the Southern Southeast (SSE). For North- and South-facing houses, place them in the Western Northwest (WNW). Avoid NNE/ENE completely, and ensure no pit/well effect is formed in Southwest (shift 6 inches East/North if needed).",
    detailsTe: "తూర్పు, పశ్చిమ ముఖ ఇళ్లకు దక్షిణ ఆగ్నేయంలో (SSE), ఉత్తర, దక్షిణ ముఖ ఇళ్లకు పశ్చిమ వాయువ్యంలో (WNW) చుట్టు మెట్లు ఉంచాలి. NNE/ENE లలో పెట్టరాదు; నైరుతిలో గుంత ప్రభావం రాకుండా జాగ్రత్తపడాలి."
  },
  {
    page: "Page 154",
    badgeEn: "Under-Stairs",
    badgeTe: "మెట్ల క్రింది భాగం",
    titleEn: "Strict Under-Stairs Usage Rule",
    titleTe: "మెట్ల క్రింది స్థల వినియోగ నియమం",
    detailsEn: "The space underneath a staircase is strictly for storage, lumber, or tools. Never install a Puja room, study desk, kitchen stove, or toilet beneath the stairs — walking overhead above a sacred or living function violates Vaastu equilibrium.",
    detailsTe: "మెట్ల కింది స్థలాన్ని కేవలం స్టోర్ రూమ్ (సామాన్లు, కలప) కొరకు మాత్రమే వాడాలి. పూజా గది, స్టడీ టేబుల్, వంటగది లేదా టాయిలెట్ ఎట్టిపరిస్థితుల్లో మెట్ల కింద పెట్టకూడదు."
  }
];

function renderStaircaseValidator() {
  const typeSelect = document.getElementById("stairTypeSelect");
  const posSelect = document.getElementById("stairPosSelect");
  if (!typeSelect || !posSelect) return;

  typeSelect.innerHTML = STAIRCASE_GUIDE_DATA.map(item => {
    const text = currentLang === "english" ? item.nameEn : (currentLang === "telugu" ? item.nameTe : `${item.nameEn} (${item.nameTe})`);
    return `<option value="${item.id}" data-en="${item.nameEn}" data-te="${item.nameTe}" data-dual="${item.nameEn} (${item.nameTe})">${text}</option>`;
  }).join("");

  updateStairPosOptions();

  typeSelect.addEventListener("change", () => {
    updateStairPosOptions();
    checkStaircasePlacement();
  });

  posSelect.addEventListener("change", checkStaircasePlacement);

  const btn = document.getElementById("btnCheckStair");
  if (btn) btn.addEventListener("click", checkStaircasePlacement);

  // Render initial visualizer & result immediately
  checkStaircasePlacement();
}

function updateStairPosOptions() {
  const typeSelect = document.getElementById("stairTypeSelect");
  const posSelect = document.getElementById("stairPosSelect");
  if (!typeSelect || !posSelect) return;

  const current = STAIRCASE_GUIDE_DATA.find(s => s.id === typeSelect.value) || STAIRCASE_GUIDE_DATA[0];
  const keys = Object.keys(current.options);

  posSelect.innerHTML = keys.map(k => {
    const opt = current.options[k];
    const text = currentLang === "english" ? opt.textEn : (currentLang === "telugu" ? opt.textTe : `${opt.textEn} (${opt.textTe})`);
    return `<option value="${k}" data-en="${opt.textEn}" data-te="${opt.textTe}" data-dual="${opt.textEn} (${opt.textTe})">${text}</option>`;
  }).join("");
}

function checkStaircasePlacement() {
  const typeSelect = document.getElementById("stairTypeSelect");
  const posSelect = document.getElementById("stairPosSelect");
  const resultBox = document.getElementById("stairResultBox");
  if (!typeSelect || !posSelect || !resultBox) return;

  const entry = STAIRCASE_GUIDE_DATA.find(s => s.id === typeSelect.value) || STAIRCASE_GUIDE_DATA[0];
  const opt = entry.options[posSelect.value] || Object.values(entry.options)[0];
  const status = opt.status;

  let badgeClass = "ideal";
  let statusBadgeEn = "✅ Prescribed / Exalted Placement";
  let statusBadgeTe = "✅ శాస్త్ర సమ్మతమైన ఉత్తమ స్థానం";

  if (status === "acceptable") {
    badgeClass = "acceptable";
    statusBadgeEn = "⚠️ Secondary / Conditional Placement";
    statusBadgeTe = "⚠️ షరతులతో అనుమతించదగిన స్థానం";
  } else if (status === "forbidden") {
    badgeClass = "forbidden";
    statusBadgeEn = "❌ Prohibited / Vaastu Dosha";
    statusBadgeTe = "❌ నిషిద్ధం / తీవ్ర వాస్తు దోషం";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.85rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1);">
      <div class="item-badge-status ${badgeClass}">
        <span class="lang-en">${statusBadgeEn}</span>
        <span class="lang-te">${statusBadgeTe}</span>
      </div>
      <span style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
        📖 Book Reference: ${entry.page}
      </span>
    </div>

    <h4 class="lang-en" style="color:#fff; font-size:1.12rem; margin:0 0 0.25rem 0;">${entry.nameEn}</h4>
    <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.08rem; margin:0 0 0.5rem 0;">${entry.nameTe}</h4>

    <div style="background:rgba(30,41,59,0.55); padding:0.75rem 1rem; border-radius:8px; margin-bottom:0.75rem; border-left:3px solid ${status === "ideal" ? "#10b981" : (status === "acceptable" ? "#f59e0b" : "#ef4444")};">
      <div class="lang-en" style="font-weight:600; color:#e2e8f0;">Selected: ${opt.textEn}</div>
      <div class="lang-te" style="font-weight:600; font-family:var(--font-telugu); color:#fef08a;">ఎంచుకున్నది: ${opt.textTe}</div>
    </div>

    <div class="detail-label" style="margin-bottom:0.3rem;">
      <span class="lang-en">Book Principle (${entry.page}):</span>
      <span class="lang-te">గ్రంథ శాస్త్రీయ వివరణ (${entry.page}):</span>
    </div>
    <p class="lang-en" style="font-size:0.94rem; color:#cbd5e1; line-height:1.65; margin:0 0 0.45rem 0;">${entry.whyEn}</p>
    <p class="lang-te" style="font-size:0.94rem; font-family:var(--font-telugu); color:#cbd5e1; line-height:1.75; margin:0;">${entry.whyTe}</p>
  `;

  renderStaircaseSvg(entry.id, posSelect.value, status);
}

function renderStaircaseSvg(typeId, posKey, status) {
  const svg = document.getElementById("stairVisualizerSvg");
  if (!svg) return;

  const palette = status === "ideal"
    ? { stroke: "#10b981", fill: "rgba(16,185,129,0.22)", text: "#34d399", badge: "IDEAL / ఉత్తమం" }
    : (status === "acceptable"
      ? { stroke: "#f59e0b", fill: "rgba(245,158,11,0.22)", text: "#fbbf24", badge: "CONDITIONAL / షరతులతో" }
      : { stroke: "#ef4444", fill: "rgba(239,68,68,0.22)", text: "#f87171", badge: "FORBIDDEN / నిషిద్ధం" });

  // Side-elevation view for Under-Stairs usage
  if (typeId === "under_stairs") {
    const iconMap = {
      keep_open: "✅",
      ese_nnw_remedied: "🧱",
      wsw_ssw_room: "🚫",
      outside_landing_utilities: "🚽"
    };
    const labelMap = {
      keep_open: { en: "Open Under-Landing OK", te: "లాండింగ్ క్రింద ఖాళీ శుభం" },
      ese_nnw_remedied: { en: "Balance w/ ENE/NNE Pillar", te: "ENE/NNE పిల్లర్ & గోడతో సరిదిద్దాలి" },
      wsw_ssw_room: { en: "NO Room Under WSW/SSW", te: "WSW/SSW క్రింద గది నిషిద్ధం" },
      outside_landing_utilities: { en: "NO Bath/Store/Meter", te: "బాత్రూమ్/స్టోర్/మీటర్ నిషిద్ధం" }
    };
    const lbl = labelMap[posKey] || labelMap.keep_open;
    const icon = iconMap[posKey] || "✅";

    svg.innerHTML = `
      <rect x="0" y="0" width="320" height="320" fill="#080c14" rx="14"/>
      <text x="160" y="24" font-size="11" font-weight="700" fill="${palette.text}" text-anchor="middle">${palette.badge}</text>
      <text x="160" y="42" font-size="9.5" fill="#94a3b8" text-anchor="middle">Cross-Section Elevation (Pages 154–155)</text>

      <!-- Ground & Floor -->
      <line x1="25" y1="255" x2="295" y2="255" stroke="#475569" stroke-width="2"/>
      <!-- Stepped Staircase Slope -->
      <polyline points="40,255 75,255 75,225 110,225 110,195 145,195 145,165 180,165 180,135 215,135 215,105 265,105 265,255"
                fill="rgba(148,163,184,0.1)" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Under-stairs triangular zone -->
      <polygon points="82,253 262,253 262,112" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2" stroke-dasharray="4,3"/>

      <!-- Walking/trampling figure indicator overhead -->
      <text x="155" y="132" font-size="16" text-anchor="middle">🚶</text>
      <text x="155" y="148" font-size="8.5" fill="#94a3b8" text-anchor="middle">Landing / Steps</text>

      <!-- Usage icon inside under-stairs -->
      <text x="200" y="205" font-size="28" text-anchor="middle">${icon}</text>
      <text x="200" y="228" font-size="10.2" font-weight="700" fill="${palette.text}" text-anchor="middle">${lbl.en}</text>
      <text x="200" y="244" font-size="9.2" font-family="'Noto Sans Telugu', sans-serif" fill="#fef08a" text-anchor="middle">${lbl.te}</text>

      <text x="160" y="286" font-size="9.2" fill="#cbd5e1" text-anchor="middle">Pages 154–155: Avoid bath/latrine/store under outside landings</text>
      <text x="160" y="302" font-size="9" font-family="'Noto Sans Telugu', sans-serif" fill="#fef08a" text-anchor="middle">పేజీలు 154–155: బయటి లాండింగ్ క్రింద గదులు/బాత్రూమ్ కట్టరాదు</text>
    `;
    return;
  }

  // Top-down Plan View for Straight & Spiral Staircases
  // Plot box: x=45..275 (w=230), y=45..275 (h=230), center=(160,160)
  const zoneCoords = {
    // Straight stairs (Pages 151-155)
    south_etow: { x: 120, y: 215, w: 80, h: 50, dir: "South: E → W (Page 152)", ax1: 192, ay1: 240, ax2: 128, ay2: 240 },
    west_ntos: { x: 55, y: 120, w: 50, h: 80, dir: "West: N → S (Page 152)", ax1: 80, ay1: 128, ax2: 80, ay2: 192 },
    east_south_internal: { x: 205, y: 155, w: 48, h: 65, dir: "E/S (3\" gap): N→S→W (P.153)", ax1: 229, ay1: 162, ax2: 229, ay2: 212 },
    ese_ntos: { x: 210, y: 185, w: 48, h: 65, dir: "ESE (Away E): N→S→N (P.152)", ax1: 234, ay1: 192, ax2: 234, ay2: 242 },
    ssw_etow: { x: 95, y: 215, w: 65, h: 48, dir: "SSW: E→W→E to SSE (P.152)", ax1: 152, ay1: 239, ax2: 103, ay2: 239 },
    wsw_ntos: { x: 55, y: 155, w: 48, h: 65, dir: "WSW: N→S→N to WNW (P.152)", ax1: 79, ay1: 162, ax2: 79, ay2: 212 },
    nnw_external: { x: 95, y: 58, w: 65, h: 48, dir: "NNW (Away N): E→W→E (P.152)", ax1: 152, ay1: 82, ax2: 103, ay2: 82 },
    nnw_internal: { x: 95, y: 58, w: 65, h: 48, dir: "N/W (3\" gap): E→W→S (P.153)", ax1: 152, ay1: 82, ax2: 103, ay2: 82 },
    touch_east_north: { x: 222, y: 80, w: 53, h: 75, dir: "NO 3\" GAP ON E/N WALL!", ax1: 248, ay1: 145, ax2: 248, ay2: 90 },
    internal_sw_ne: { x: 55, y: 205, w: 65, h: 60, dir: "INTERNAL SW/NE FORBIDDEN", ax1: 112, ay1: 250, ax2: 65, ay2: 215 },
    ne_eshanya: { x: 200, y: 55, w: 65, h: 60, dir: "NE TRUNCATED (PAGE 154)", ax1: 255, ay1: 65, ax2: 210, ay2: 105 },
    sw_hollow: { x: 55, y: 205, w: 65, h: 60, dir: "SW HOLLOW DOSHA (P.155)", ax1: 65, ay1: 252, ax2: 112, ay2: 215 },
    // Spiral stairs
    sse_ew_facing: { cx: 215, cy: 240, r: 24, dir: "SSE Spiral (E/W House)" },
    wnw_ns_facing: { cx: 80, cy: 95, r: 24, dir: "WNW Spiral (N/S House)" },
    sw_clearance: { cx: 85, cy: 235, r: 22, dir: "SW + 6\" E/N Shift (No Pit)" },
    sw_pit: { cx: 78, cy: 242, r: 25, dir: "SW PIT / WELL DOSHA!" },
    nne_ene: { cx: 235, cy: 82, r: 25, dir: "NNE / ENE FORBIDDEN!" }
  };

  let stairShape = "";
  if (typeId === "spiral_stairs") {
    const z = zoneCoords[posKey] || zoneCoords.sse_ew_facing;
    stairShape = `
      <circle cx="${z.cx}" cy="${z.cy}" r="${z.r}" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2.5"/>
      <circle cx="${z.cx}" cy="${z.cy}" r="5" fill="${palette.stroke}"/>
      <line x1="${z.cx - z.r}" y1="${z.cy}" x2="${z.cx + z.r}" y2="${z.cy}" stroke="${palette.stroke}" stroke-width="1"/>
      <line x1="${z.cx}" y1="${z.cy - z.r}" x2="${z.cx}" y2="${z.cy + z.r}" stroke="${palette.stroke}" stroke-width="1"/>
      <line x1="${z.cx - z.r*0.7}" y1="${z.cy - z.r*0.7}" x2="${z.cx + z.r*0.7}" y2="${z.cy + z.r*0.7}" stroke="${palette.stroke}" stroke-width="1"/>
      <line x1="${z.cx - z.r*0.7}" y1="${z.cy + z.r*0.7}" x2="${z.cx + z.r*0.7}" y2="${z.cy - z.r*0.7}" stroke="${palette.stroke}" stroke-width="1"/>
      <text x="160" y="302" font-size="10" font-weight="700" fill="${palette.text}" text-anchor="middle">${z.dir}</text>
    `;
  } else {
    const z = zoneCoords[posKey] || zoneCoords.sw_clockwise;
    // Draw tread lines inside rectangle
    let treads = "";
    if (z.w >= z.h) {
      for (let tx = z.x + 10; tx < z.x + z.w - 4; tx += 10) {
        treads += `<line x1="${tx}" y1="${z.y}" x2="${tx}" y2="${z.y + z.h}" stroke="${palette.stroke}" stroke-width="1" opacity="0.65"/>`;
      }
    } else {
      for (let ty = z.y + 10; ty < z.y + z.h - 4; ty += 10) {
        treads += `<line x1="${z.x}" y1="${ty}" x2="${z.x + z.w}" y2="${ty}" stroke="${palette.stroke}" stroke-width="1" opacity="0.65"/>`;
      }
    }
    stairShape = `
      <rect x="${z.x}" y="${z.y}" width="${z.w}" height="${z.h}" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2.2" rx="4"/>
      ${treads}
      <line x1="${z.ax1}" y1="${z.ay1}" x2="${z.ax2}" y2="${z.ay2}" stroke="#ffffff" stroke-width="2.2" marker-end="url(#stairArrow)"/>
      <text x="160" y="302" font-size="10" font-weight="700" fill="${palette.text}" text-anchor="middle">${z.dir}</text>
    `;
  }

  svg.innerHTML = `
    <defs>
      <marker id="stairArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#ffffff"/>
      </marker>
    </defs>
    <rect x="0" y="0" width="320" height="320" fill="#080c14" rx="14"/>
    <text x="160" y="22" font-size="10.5" font-weight="700" fill="${palette.text}" text-anchor="middle">${palette.badge}</text>

    <!-- House Perimeter -->
    <rect x="45" y="45" width="230" height="230" fill="rgba(15,23,42,0.5)" stroke="rgba(245,158,11,0.45)" stroke-width="2" rx="4"/>
    <!-- 3x3 Grid -->
    <line x1="121.6" y1="45" x2="121.6" y2="275" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
    <line x1="198.3" y1="45" x2="198.3" y2="275" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
    <line x1="45" y1="121.6" x2="275" y2="121.6" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>
    <line x1="45" y1="198.3" x2="275" y2="198.3" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3"/>

    <!-- Cardinal & Corner Labels -->
    <text x="160" y="38" font-size="9.5" font-weight="700" fill="#38bdf8" text-anchor="middle">N • ఉత్తరం</text>
    <text x="160" y="288" font-size="9.5" font-weight="700" fill="#fb923c" text-anchor="middle">S • దక్షిణం</text>
    <text x="296" y="162" font-size="9" font-weight="700" fill="#fbbf24" text-anchor="middle">E</text>
    <text x="24" y="162" font-size="9" font-weight="700" fill="#c084fc" text-anchor="middle">W</text>

    <text x="268" y="57" font-size="8.5" fill="#67e8f9" text-anchor="end">NE (ఈశాన్యం)</text>
    <text x="268" y="269" font-size="8.5" fill="#fb923c" text-anchor="end">SE (ఆగ్నేయం)</text>
    <text x="52" y="269" font-size="8.5" fill="#34d399" text-anchor="start">SW (నైరుతి)</text>
    <text x="52" y="57" font-size="8.5" fill="#c084fc" text-anchor="start">NW (వాయువ్యం)</text>
    <text x="160" y="163" font-size="8" fill="rgba(255,255,255,0.28)" text-anchor="middle">BRAHMASTHANA</text>

    ${stairShape}
  `;
}

function renderStaircaseCards() {
  const container = document.getElementById("staircaseRulesGrid");
  if (!container) return;

  container.innerHTML = STAIRCASE_BOOK_RULES.map(rule => `
    <div class="proverb-card" style="border-color: rgba(245,158,11,0.3); background: rgba(17,24,39,0.88);">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; gap:0.75rem; flex-wrap:wrap;">
          <span style="font-size:0.75rem; color:var(--gold-bright); font-weight:700; text-transform:uppercase;">📖 ${rule.page}</span>
          <span style="font-size:0.75rem; background:rgba(245,158,11,0.15); color:var(--gold-bright); padding:0.15rem 0.5rem; border-radius:4px; font-weight:600;">
            <span class="lang-en">${rule.badgeEn}</span>
            <span class="lang-te" style="font-family:var(--font-telugu);">${rule.badgeTe}</span>
          </span>
        </div>
        <h4 class="lang-en" style="color:#fff; font-size:1.12rem; margin-bottom:0.25rem;">${rule.titleEn}</h4>
        <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.08rem; margin-bottom:0.35rem;">${rule.titleTe}</h4>
        <p class="lang-en" style="font-size:0.94rem; color:#e2e8f0; line-height:1.65; margin-bottom:0.55rem;">${rule.detailsEn}</p>
        <p class="lang-te" style="font-size:0.94rem; color:#cbd5e1; font-family:var(--font-telugu); line-height:1.7; margin:0;">${rule.detailsTe}</p>
      </div>
    </div>
  `).join("");
}

// --- 10C. Duplex & Triplex (Multi-Storey / Upper Floors) Guide (Pages 69, 124–127, 153, 165, 180, 202–203, 310–312, 329) ---
const MULTISTOREY_GUIDE_DATA = [
  {
    id: "upper_coverage",
    nameEn: "Upper-Floor Coverage & Open Terrace (Pages 202–203)",
    nameTe: "పై అంతస్తుల నిర్మాణం & ఖాళీ టెర్రస్ (పేజీలు 202–203)",
    page: "Pages 202–203",
    whyEn: "Pages 202–203: Constructing the first/upper floor in the Western (or Southwestern) part of the terrace reduces the workload of the family head and improves career advancement. Conversely, vacant open terrace space MUST be left on the first/upper floors in the Eastern/Northeastern part to protect the head of the family from cardiac problems.",
    whyTe: "పుస్తకంలో 202–203 పేజీల ప్రకారం — టెర్రస్‌లో పశ్చిమ (లేదా నైరుతి) భాగంలో మొదటి/పై అంతస్తు నిర్మించడం వల్ల కుటుంబ యజమానికి వృత్తిలో భారం తగ్గి పురోగతి లభిస్తుంది. యజమాని ఆరోగ్యానికి, గుండె సంబంధిత సమస్యలు రాకుండా ఉండాలంటే పై అంతస్తులో తూర్పు/ఈశాన్య భాగంలో తప్పనిసరిగా ఖాళీ టెర్రస్ స్థలం వదలాలి.",
    options: {
      west_sw_upper: {
        status: "ideal",
        textEn: "✅ Build 1st/2nd floor rooms in West / South / SW; leave East & NE terrace open (Pages 202–203)",
        textTe: "✅ పై అంతస్తు గదులను పశ్చిమం/దక్షిణం/నైరుతిలో కట్టి, తూర్పు & ఈశాన్యం ఖాళీగా ఉంచడం (పేజీలు 202–203)"
      },
      full_equal_cantilever: {
        status: "acceptable",
        textEn: "⚠️ Full-floor Duplex/Triplex footprint with wider balconies in East & North (Pages 127, 310)",
        textTe: "⚠️ పూర్తి అంతస్తు నిర్మాణంలో తూర్పు, ఉత్తర దిశలలో విశాలమైన బాల్కనీలు వదలడం (పేజీలు 127, 310)"
      },
      east_ne_upper_heavy: {
        status: "forbidden",
        textEn: "❌ Heavy upper floor built ONLY in East or Northeast while West/SW is left open (Pages 202–203)",
        textTe: "❌ పశ్చిమం/నైరుతి ఖాళీగా వదిలి తూర్పు లేదా ఈశాన్యంలోనే పై అంతస్తు కట్టడం (పేజీలు 202–203 — తీవ్ర దోషం)"
      }
    }
  },
  {
    id: "balconies",
    nameEn: "Upper-Floor Balconies & Truncations (Pages 127, 153, 310–312)",
    nameTe: "పై అంతస్తు బాల్కనీలు & మూలల నియమాలు (పేజీలు 127, 153, 310–312)",
    page: "Pages 127, 153, 310–312",
    whyEn: "Pages 127 & 310–312: Upper-floor balconies in East and North are a MUST (2–3 ft or wider than South/West). If there is a balcony in South or West, there must be one in East or North. Balconies in ENE, ESE, NNW, and NNE must NEVER be truncated; SSE, SSW, WSW, and WNW balconies may be truncated if needed. Staircase balconies must rest on cantilever beams, NOT pillars (Page 153).",
    whyTe: "పుస్తకంలో 127, 153, 310–312 పేజీల ప్రకారం — పై అంతస్తులలో తూర్పు, ఉత్తరం వైపు బాల్కనీలు తప్పనిసరి (దక్షిణం, పశ్చిమం కంటే వెడల్పుగా ఉండాలి). ENE, ESE, NNW, NNE బాల్కనీలను ఎట్టిపరిస్థితుల్లో కట్ (ట్రంకేట్) చేయకూడదు. మెట్ల బాల్కనీలను పిల్లర్లపై కాకుండా కాంటిలీవర్ బీమ్‌పై మాత్రమే నిర్మించాలి (పేజీ 153).",
    options: {
      east_north_wider: {
        status: "ideal",
        textEn: "✅ Balconies in East & North wider than South/West, untruncated in ENE/ESE/NNE/NNW (Pages 310–312)",
        textTe: "✅ తూర్పు, ఉత్తర బాల్కనీలు దక్షిణం/పశ్చిమం కంటే వెడల్పుగా & ENE/ESE/NNE/NNW లో కట్ లేకుండా (పేజీ 310)"
      },
      cantilever_balcony: {
        status: "ideal",
        textEn: "✅ Upper stair landing balcony built on cantilever beam without pillars (Page 153)",
        textTe: "✅ పై అంతస్తు మెట్ల బాల్కనీని పిల్లర్లు లేకుండా కాంటిలీవర్ బీమ్‌పై నిర్మించడం (పేజీ 153)"
      },
      ene_nne_truncated: {
        status: "forbidden",
        textEn: "❌ Truncated / cut balcony in ENE, ESE, NNE, or NNW (Page 310 — NOT SUITABLE)",
        textTe: "❌ ENE, ESE, NNE లేదా NNW బాల్కనీలను కట్ (ట్రంకేట్) చేయడం (పేజీ 310 — తీవ్ర అశుభం)"
      },
      sw_only_balcony: {
        status: "forbidden",
        textEn: "❌ Balcony only in South/West with zero balcony in East or North (Page 310)",
        textTe: "❌ తూర్పు/ఉత్తరాలలో బాల్కనీ లేకుండా కేవలం దక్షిణం/పశ్చిమంలోనే బాల్కనీ ఉండటం (పేజీ 310)"
      }
    }
  },
  {
    id: "floor_levels",
    nameEn: "Floor Levels, Roof Slant & Overhead Tank (Pages 69, 124, 126, 171, 180, 203)",
    nameTe: "పై అంతస్తు నేల మట్టాలు, కప్పు వాలు & వాటర్ ట్యాంక్ (పేజీలు 69, 124, 126, 171, 180, 203)",
    page: "Pages 69, 124, 126, 171, 180, 203",
    whyEn: "Pages 69, 124, 126, 171, 180 & 203: Floor levels in Northern & Eastern parts must be lower on BOTH Ground and First/Upper Floors. Roof slant drains towards East or North (never West or South across Ground & 1st floor, Page 124). Overhead Tank belongs in Southwest (or in NW/SE ONLY if a higher small room is built in Southwest, Page 171) — never East (Page 180).",
    whyTe: "పుస్తకంలో 69, 124, 126, 171, 180, 203 పేజీల ప్రకారం — గ్రౌండ్ & పై అంతస్తులలో ఉత్తరం, తూర్పు భాగాలు తక్కువ ఎత్తులో ఉండాలి. టెర్రస్ వాలు తూర్పు/ఉత్తరం వైపు మాత్రమే ఉండాలి (పేజీ 124). ఓవర్‌హెడ్ ట్యాంక్ నైరుతిలో ఉంచాలి (లేదా నైరుతిలో దానికంటే ఎత్తైన చిన్న గది కడితే NW/SE లో ఉంచవచ్చు — పేజీ 171); తూర్పులో నిషిద్ధం (పేజీ 180).",
    options: {
      low_ne_high_sw: {
        status: "ideal",
        textEn: "✅ North & East floors lower; SW roof highest with Overhead Tank in SW (or NW/SE w/ higher SW room, P.171)",
        textTe: "✅ ఉత్తరం, తూర్పు మట్టాలు తక్కువగా; నైరుతిలో ఓవర్‌హెడ్ ట్యాంక్ (లేదా NW/SE లో ట్యాంక్ + ఎత్తైన నైరుతి గది, పేజీ 171)"
      },
      slant_west_south: {
        status: "forbidden",
        textEn: "❌ Slanting terrace towards West or South across Ground & First Floor (Page 124 — Severe Health Risk)",
        textTe: "❌ గ్రౌండ్ & ఫస్ట్ ఫ్లోర్ టెర్రస్ పశ్చిమం లేదా దక్షిణం వైపు వాలి ఉండటం (పేజీ 124 — తీవ్ర ఆరోగ్య ముప్పు)"
      },
      oht_east: {
        status: "forbidden",
        textEn: "❌ Overhead water tank on East roof of Duplex/Triplex (Page 180 — Harms Male Power)",
        textTe: "❌ డ్యూప్లెక్స్/ట్రిప్లెక్స్ తూర్పు పైకప్పుపై ఓవర్‌హెడ్ ట్యాంక్ (పేజీ 180 — పురుషుల శక్తికి హానికరం)"
      }
    }
  },
  {
    id: "load_walls",
    nameEn: "Load-Bearing Wall Alignment & Portioning (Pages 127, 165, 329)",
    nameTe: "పై అంతస్తు గోడల బరువు అమరిక & భాగాలు (పేజీలు 127, 165, 329)",
    page: "Pages 127, 165, 329",
    whyEn: "Page 165: When building upstairs on load-bearing walls, first/upper-floor walls should maintain equal thickness (18\", 14\", or 9\") or rest strictly on the CENTER of the lower load-bearing walls for uniform weight distribution; internal walls must run continuously without bends/curves. Also, if a ground-floor separation wall/shop blocks a street focus, carry it up to the first floor too (Page 329).",
    whyTe: "పుస్తకంలో 165వ పేజీ ప్రకారం — లోడ్-బేరింగ్ గోడలపై పై అంతస్తు కట్టేటప్పుడు, పై గోడలు సమాన మందంతో (18\", 14\", 9\") ఉండాలి లేదా తగ్గిస్తే క్రింది గోడల సరిగ్గా మధ్యభాగంలో ఆనాలి; లోపలి గోడలు వంకర్లు లేకుండా తిన్నగా సాగాలి. వీధిశూల నివారణ గోడ/గదిని గ్రౌండ్ ఫ్లోర్ నుండి ఫస్ట్ ఫ్లోర్ వరకు కొనసాగించాలి (పేజీ 329).",
    options: {
      centered_walls: {
        status: "ideal",
        textEn: "✅ Upper walls continuous & centered on lower load-bearing walls (Page 165)",
        textTe: "✅ పై అంతస్తు గోడలు వంకర్లు లేకుండా క్రింది గోడల మధ్యభాగంపై సరిగ్గా అమర్చడం (పేజీ 165)"
      },
      street_focus_carried: {
        status: "acceptable",
        textEn: "⚠️ Street-focus blocking room/wall carried onto First Floor as well (Page 329)",
        textTe: "⚠️ వీధిశూల నివారణ గది/గోడను మొదటి అంతస్తుకు కూడా కొనసాగించడం (పేజీ 329)"
      },
      offset_curved_walls: {
        status: "forbidden",
        textEn: "❌ Internal walls with bends, curves, cuts, or off-center load transfer (Page 165)",
        textTe: "❌ లోపలి గోడలలో వంపులు, కట్‌లు లేదా క్రింది గోడల మధ్యలో కాకుండా పక్కకు వేసిన బరువు (పేజీ 165)"
      }
    }
  }
];

const MULTISTOREY_BOOK_RULES = [
  {
    page: "Pages 202–203",
    badgeEn: "Terrace Mass",
    badgeTe: "పై అంతస్తు భారం",
    titleEn: "Build Upper Rooms in West; Keep East Open",
    titleTe: "పశ్చిమంలో పై అంతస్తు; తూర్పులో ఖాళీ టెర్రస్",
    detailsEn: "Building the first floor in the Western part of the terrace reduces the family head's work stress and boosts career advancement (Page 202). Leaving vacant open space on the first floor in the Eastern part protects the family head from cardiac problems (Page 203).",
    detailsTe: "టెర్రస్ పశ్చిమ భాగంలో పై అంతస్తు నిర్మిస్తే యజమానికి పనిభారం తగ్గి వృత్తి పురోగతి కలుగుతుంది (పేజీ 202). తూర్పు భాగంలో ఖాళీ స్థలం వదిలితే గుండెజబ్బుల నుండి రక్షణ లభిస్తుంది (పేజీ 203)."
  },
  {
    page: "Pages 127, 153, 310–312",
    badgeEn: "Balconies",
    badgeTe: "బాల్కనీలు",
    titleEn: "Mandatory East/North Balconies & Cantilever Rule",
    titleTe: "తూర్పు/ఉత్తర బాల్కనీలు & కాంటిలీవర్ నియమం",
    detailsEn: "East and North balconies (2–3 ft or wider than South/West) are a must on upper floors. NEVER truncate balconies in ENE, ESE, NNW, or NNE (Page 310). Staircase balconies must use cantilever beams, not pillars (Page 153).",
    detailsTe: "పై అంతస్తులలో తూర్పు, ఉత్తర బాల్కనీలు తప్పనిసరి. ENE, ESE, NNW, NNE బాల్కనీలను ఎప్పుడూ కట్ చేయకూడదు (పేజీ 310). మెట్ల బాల్కనీలకు పిల్లర్లు కాకుండా కాంటిలీవర్ బీమ్ వాడాలి (పేజీ 153)."
  },
  {
    page: "Pages 69, 124, 126, 171, 180",
    badgeEn: "Levels & Slopes",
    badgeTe: "మట్టాలు & వాలు",
    titleEn: "Consistent Floor Levels, Terrace Slant & Roof Tank",
    titleTe: "అంతస్తుల మట్టాలు, కప్పు వాలు & ఓవర్‌హెడ్ ట్యాంక్",
    detailsEn: "Keep Northern and Eastern floor levels lower across BOTH Ground and First/Upper floors (Pages 126, 203). Slant roofs toward East/North (never West/South, Page 124). Place the Overhead Tank in Southwest, or in NW/SE only if a taller room exists in SW (Page 171) — never East (Page 180).",
    detailsTe: "గ్రౌండ్ మరియు పై అంతస్తులు రెండింటిలోనూ ఉత్తరం, తూర్పు మట్టాలు తక్కువగా ఉండాలి. కప్పు వాలు తూర్పు/ఉత్తరానికి ఉండాలి. ఓవర్‌హెడ్ ట్యాంక్ నైరుతిలో (లేదా ఎత్తైన నైరుతి గది ఉంటే NW/SE లో — పేజీ 171) ఉంచాలి; తూర్పున పెట్టరాదు (పేజీ 180)."
  },
  {
    page: "Pages 127, 165, 329",
    badgeEn: "Structural Load",
    badgeTe: "గోడల అమరిక",
    titleEn: "Centered Upper Walls & Street-Focus Continuity",
    titleTe: "గోడల మధ్యస్థ అమరిక & వీధిశూల నివారణ",
    detailsEn: "Upper-floor walls must be continuous and rest on the center of lower load-bearing walls without bends or cuts (Page 165). If a ground-floor shop/wall blocks a baneful street focus, extend it to the first floor too (Page 329).",
    detailsTe: "పై అంతస్తు గోడలు వంకర్లు లేకుండా క్రింది గోడల మధ్యభాగంపై ఆనాలి (పేజీ 165). వీధిశూల నివారణ గోడను మొదటి అంతస్తుకు కూడా కొనసాగించాలి (పేజీ 329)."
  }
];

function renderMultiStoreyValidator() {
  const featSelect = document.getElementById("multiFeatureSelect");
  const optSelect = document.getElementById("multiOptionSelect");
  if (!featSelect || !optSelect) return;

  featSelect.innerHTML = MULTISTOREY_GUIDE_DATA.map(item => {
    const text = currentLang === "english" ? item.nameEn : (currentLang === "telugu" ? item.nameTe : `${item.nameEn} (${item.nameTe})`);
    return `<option value="${item.id}" data-en="${item.nameEn}" data-te="${item.nameTe}" data-dual="${item.nameEn} (${item.nameTe})">${text}</option>`;
  }).join("");

  updateMultiOptionOptions();

  featSelect.addEventListener("change", () => {
    updateMultiOptionOptions();
    checkMultiStoreyLayout();
  });

  optSelect.addEventListener("change", checkMultiStoreyLayout);

  const btn = document.getElementById("btnCheckMulti");
  if (btn) btn.addEventListener("click", checkMultiStoreyLayout);

  checkMultiStoreyLayout();
}

function updateMultiOptionOptions() {
  const featSelect = document.getElementById("multiFeatureSelect");
  const optSelect = document.getElementById("multiOptionSelect");
  if (!featSelect || !optSelect) return;

  const current = MULTISTOREY_GUIDE_DATA.find(s => s.id === featSelect.value) || MULTISTOREY_GUIDE_DATA[0];
  const keys = Object.keys(current.options);

  optSelect.innerHTML = keys.map(k => {
    const opt = current.options[k];
    const text = currentLang === "english" ? opt.textEn : (currentLang === "telugu" ? opt.textTe : `${opt.textEn} (${opt.textTe})`);
    return `<option value="${k}" data-en="${opt.textEn}" data-te="${opt.textTe}" data-dual="${opt.textEn} (${opt.textTe})">${text}</option>`;
  }).join("");
}

function checkMultiStoreyLayout() {
  const featSelect = document.getElementById("multiFeatureSelect");
  const optSelect = document.getElementById("multiOptionSelect");
  const resultBox = document.getElementById("multiResultBox");
  if (!featSelect || !optSelect || !resultBox) return;

  const entry = MULTISTOREY_GUIDE_DATA.find(s => s.id === featSelect.value) || MULTISTOREY_GUIDE_DATA[0];
  const opt = entry.options[optSelect.value] || Object.values(entry.options)[0];
  const status = opt.status;

  let badgeClass = "ideal";
  let statusBadgeEn = "✅ Prescribed / Auspicious Multi-Floor Rule";
  let statusBadgeTe = "✅ శాస్త్ర సమ్మతమైన ఉత్తమ అంతస్తుల విధానం";

  if (status === "acceptable") {
    badgeClass = "acceptable";
    statusBadgeEn = "⚠️ Conditional / Secondary Option";
    statusBadgeTe = "⚠️ షరతులతో అనుమతించదగినది";
  } else if (status === "forbidden") {
    badgeClass = "forbidden";
    statusBadgeEn = "❌ Prohibited / Multi-Floor Vaastu Dosha";
    statusBadgeTe = "❌ నిషిద్ధం / తీవ్ర అంతస్తుల వాస్తు దోషం";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.85rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1);">
      <div class="item-badge-status ${badgeClass}">
        <span class="lang-en">${statusBadgeEn}</span>
        <span class="lang-te">${statusBadgeTe}</span>
      </div>
      <span style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
        📖 Book Reference: ${entry.page}
      </span>
    </div>

    <h4 class="lang-en" style="color:#fff; font-size:1.12rem; margin:0 0 0.25rem 0;">${entry.nameEn}</h4>
    <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.08rem; margin:0 0 0.5rem 0;">${entry.nameTe}</h4>

    <div style="background:rgba(30,41,59,0.55); padding:0.75rem 1rem; border-radius:8px; margin-bottom:0.75rem; border-left:3px solid ${status === "ideal" ? "#10b981" : (status === "acceptable" ? "#f59e0b" : "#ef4444")};">
      <div class="lang-en" style="font-weight:600; color:#e2e8f0;">Selected: ${opt.textEn}</div>
      <div class="lang-te" style="font-weight:600; font-family:var(--font-telugu); color:#fef08a;">ఎంచుకున్నది: ${opt.textTe}</div>
    </div>

    <div class="detail-label" style="margin-bottom:0.3rem;">
      <span class="lang-en">Book Principle (${entry.page}):</span>
      <span class="lang-te">గ్రంథ శాస్త్రీయ వివరణ (${entry.page}):</span>
    </div>
    <p class="lang-en" style="font-size:0.94rem; color:#cbd5e1; line-height:1.65; margin:0 0 0.45rem 0;">${entry.whyEn}</p>
    <p class="lang-te" style="font-size:0.94rem; font-family:var(--font-telugu); color:#cbd5e1; line-height:1.75; margin:0;">${entry.whyTe}</p>
  `;

  renderMultiFloorSvg(entry.id, optSelect.value, status);
}

function renderMultiFloorSvg(featId, optKey, status) {
  const svg = document.getElementById("multiFloorSvg");
  if (!svg) return;

  const palette = status === "ideal"
    ? { stroke: "#10b981", fill: "rgba(16,185,129,0.22)", text: "#34d399", badge: "IDEAL / ఉత్తమం" }
    : (status === "acceptable"
      ? { stroke: "#f59e0b", fill: "rgba(245,158,11,0.22)", text: "#fbbf24", badge: "CONDITIONAL / షరతులతో" }
      : { stroke: "#ef4444", fill: "rgba(239,68,68,0.22)", text: "#f87171", badge: "FORBIDDEN / నిషిద్ధం" });

  // Elevation view (W/SW on left, E/NE on right)
  let detailSvg = "";
  if (featId === "upper_coverage") {
    if (optKey === "west_sw_upper") {
      detailSvg = `
        <rect x="45" y="130" width="120" height="55" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
        <rect x="45" y="75" width="95" height="55" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
        <text x="92" y="106" font-size="9.5" font-weight="700" fill="${palette.text}" text-anchor="middle">2nd Floor (W/SW)</text>
        <text x="105" y="162" font-size="9.5" font-weight="700" fill="${palette.text}" text-anchor="middle">1st Floor (W/SW)</text>
        <text x="220" y="170" font-size="9.5" font-weight="700" fill="#34d399" text-anchor="middle">Open East/NE Terrace</text>
        <text x="160" y="295" font-size="9.5" fill="${palette.text}" text-anchor="middle">West/SW Upper Mass + Open East Terrace (P.202–203)</text>
      `;
    } else if (optKey === "east_ne_upper_heavy") {
      detailSvg = `
        <rect x="155" y="130" width="120" height="55" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
        <rect x="180" y="75" width="95" height="55" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
        <text x="227" y="106" font-size="9.5" font-weight="700" fill="${palette.text}" text-anchor="middle">Heavy East/NE</text>
        <text x="95" y="170" font-size="9.5" fill="#f87171" text-anchor="middle">West Left Low/Open</text>
        <text x="160" y="295" font-size="9.5" fill="${palette.text}" text-anchor="middle">DOSHA: Heavy East/NE Upper Floor (P.202–203)</text>
      `;
    } else {
      detailSvg = `
        <rect x="45" y="130" width="215" height="55" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
        <rect x="45" y="75" width="205" height="55" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
        <rect x="260" y="145" width="22" height="40" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="152" y="160" font-size="9.5" font-weight="700" fill="${palette.text}" text-anchor="middle">1st Floor + Wider E/N Balcony</text>
        <text x="147" y="106" font-size="9.5" font-weight="700" fill="${palette.text}" text-anchor="middle">2nd Floor (Triplex)</text>
        <text x="160" y="295" font-size="9.5" fill="${palette.text}" text-anchor="middle">Full Duplex/Triplex w/ E & N Balconies (P.127, 310)</text>
      `;
    }
  } else if (featId === "balconies") {
    detailSvg = `
      <rect x="55" y="115" width="190" height="70" fill="rgba(148,163,184,0.12)" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="245" y="135" width="38" height="50" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
      <line x1="245" y1="185" x2="283" y2="185" stroke="${palette.stroke}" stroke-width="3"/>
      <text x="150" y="152" font-size="10" font-weight="700" fill="#cbd5e1" text-anchor="middle">Upper Floor Block</text>
      <text x="264" y="162" font-size="8.5" font-weight="700" fill="${palette.text}" text-anchor="middle">Balcony</text>
      <text x="160" y="295" font-size="9.5" fill="${palette.text}" text-anchor="middle">${optKey === "ene_nne_truncated" ? "NEVER Truncate ENE/ESE/NNE/NNW (P.310)" : (optKey === "cantilever_balcony" ? "Cantilever Beam — NO Pillars (P.153)" : "E & N Balconies Must Be Wider (P.310)")}</text>
    `;
  } else if (featId === "floor_levels") {
    const tankX = optKey === "oht_east" ? 235 : 55;
    const slopeRight = optKey !== "slant_west_south";
    detailSvg = `
      <rect x="45" y="125" width="230" height="60" fill="rgba(148,163,184,0.1)" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="45" y1="${slopeRight ? 118 : 132}" x2="275" y2="${slopeRight ? 132 : 118}" stroke="${palette.stroke}" stroke-width="3"/>
      <rect x="${tankX}" y="82" width="34" height="32" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2" rx="3"/>
      <text x="${tankX + 17}" y="102" font-size="8.5" font-weight="700" fill="${palette.text}" text-anchor="middle">OHT</text>
      <text x="160" y="158" font-size="9.5" fill="#cbd5e1" text-anchor="middle">${slopeRight ? "Slope Drains East / North ↘" : "WRONG: Slopes West / South ↙"}</text>
      <text x="160" y="295" font-size="9.5" fill="${palette.text}" text-anchor="middle">${optKey === "oht_east" ? "OHT on East Roof Prohibited (P.180)" : (optKey === "slant_west_south" ? "Terrace Slant to W/S Prohibited (P.124)" : "Lower N/E + SW Overhead Tank (P.126, 180)")}</text>
    `;
  } else {
    const offset = optKey === "offset_curved_walls" ? 16 : 0;
    detailSvg = `
      <rect x="90" y="185" width="16" height="55" fill="rgba(148,163,184,0.35)" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="${92 + offset}" y="125" width="12" height="60" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
      <rect x="210" y="185" width="16" height="55" fill="rgba(148,163,184,0.35)" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="${212 + offset}" y="125" width="12" height="60" fill="${palette.fill}" stroke="${palette.stroke}" stroke-width="2"/>
      <text x="160" y="160" font-size="9.5" font-weight="700" fill="${palette.text}" text-anchor="middle">${offset ? "Off-Center / Curved Load!" : "Centered Wall Load ↓"}</text>
      <text x="160" y="295" font-size="9.5" fill="${palette.text}" text-anchor="middle">Upper Walls Centered on Load-Bearing Base (P.165)</text>
    `;
  }

  svg.innerHTML = `
    <rect x="0" y="0" width="320" height="320" fill="#080c14" rx="14"/>
    <text x="160" y="24" font-size="10.5" font-weight="700" fill="${palette.text}" text-anchor="middle">${palette.badge}</text>
    <text x="55" y="54" font-size="9" font-weight="700" fill="#fbbf24" text-anchor="middle">W / SW (పశ్చిమ/నైరుతి)</text>
    <text x="265" y="54" font-size="9" font-weight="700" fill="#67e8f9" text-anchor="middle">E / NE (తూర్పు/ఈశాన్యం)</text>

    <!-- Ground Floor Base -->
    <rect x="45" y="185" width="230" height="55" fill="rgba(30,41,59,0.75)" stroke="rgba(245,158,11,0.5)" stroke-width="2"/>
    <text x="160" y="216" font-size="10" font-weight="700" fill="#e2e8f0" text-anchor="middle">Ground Floor (గ్రౌండ్ ఫ్లోర్)</text>
    <line x1="25" y1="242" x2="295" y2="242" stroke="#475569" stroke-width="2"/>

    ${detailSvg}
  `;
}

function renderMultiStoreyCards() {
  const container = document.getElementById("multiStoreyRulesGrid");
  if (!container) return;

  container.innerHTML = MULTISTOREY_BOOK_RULES.map(rule => `
    <div class="proverb-card" style="border-color: rgba(56,189,248,0.3); background: rgba(17,24,39,0.88);">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; gap:0.75rem; flex-wrap:wrap;">
          <span style="font-size:0.75rem; color:var(--cyan-bright); font-weight:700; text-transform:uppercase;">📖 ${rule.page}</span>
          <span style="font-size:0.75rem; background:rgba(56,189,248,0.15); color:var(--cyan-bright); padding:0.15rem 0.5rem; border-radius:4px; font-weight:600;">
            <span class="lang-en">${rule.badgeEn}</span>
            <span class="lang-te" style="font-family:var(--font-telugu);">${rule.badgeTe}</span>
          </span>
        </div>
        <h4 class="lang-en" style="color:#fff; font-size:1.12rem; margin-bottom:0.25rem;">${rule.titleEn}</h4>
        <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.08rem; margin-bottom:0.35rem;">${rule.titleTe}</h4>
        <p class="lang-en" style="font-size:0.94rem; color:#e2e8f0; line-height:1.65; margin-bottom:0.55rem;">${rule.detailsEn}</p>
        <p class="lang-te" style="font-size:0.94rem; color:#cbd5e1; font-family:var(--font-telugu); line-height:1.7; margin:0;">${rule.detailsTe}</p>
      </div>
    </div>
  `).join("");
}

// --- 10D. Separate Floors, Portions & Multi-Storied Housing Blocks (Pages 126–127, 152–155, 163–165, 180, 203, 310) ---
const SEPARATE_FLOORS_GUIDE_DATA = [
  {
    id: "housing_blocks",
    nameEn: "Multi-Storied Apartment / Housing-Block Gates (Page 180)",
    nameTe: "బహుళ అంతస్తుల అపార్ట్‌మెంట్ / హౌసింగ్-బ్లాక్ గేట్లు (పేజీ 180)",
    page: "Page 180",
    whyEn: "Page 180: In multi-storied apartments, a gate placed in an exalted spot for an individual flat/block may become exiguous (ESE, SSW, WSW, NNW) when the whole building is viewed together. Sri Thirupati Reddy prescribes exact counter-gates for each block orientation.",
    whyTe: "పుస్తకంలో 180వ పేజీ ప్రకారం — నగరాలలో నిర్మించే బహుళ అంతస్తుల అపార్ట్‌మెంట్లలో ఒక బ్లాకుకు ఉచ్ఛ స్థానంలో పెట్టిన గేటు మొత్తం భవనానికి నీచ స్థానంగా మారవచ్చు. దీనిని సరిదిద్దడానికి ప్రతి బ్లాకు దిశకు తగిన ప్రత్యామ్నాయ గేట్లను తప్పనిసరిగా ఏర్పాటు చేయాలి.",
    options: {
      se_block: {
        status: "ideal",
        textEn: "✅ Southeastern Block (East road): Add a second gate in Southern Southeast (SSE) (Page 180)",
        textTe: "✅ ఆగ్నేయ బ్లాకు (తూర్పు రోడ్డు): దక్షిణ ఆగ్నేయంలో (SSE) మరో గేటు తప్పనిసరిగా పెట్టాలి (పేజీ 180)"
      },
      ne_block: {
        status: "ideal",
        textEn: "✅ Northeastern Block: Provide gates in Northern Northeast (NNE) and Eastern Northeast (ENE) (Page 180)",
        textTe: "✅ ఈశాన్య బ్లాకు: ఉత్తర ఈశాన్యం (NNE) & తూర్పు ఈశాన్యంలో (ENE) గేట్లు ఏర్పాటు చేయాలి (పేజీ 180)"
      },
      nw_block: {
        status: "ideal",
        textEn: "✅ Northwestern Block (North road): Main gate in NNE + second gate in WNW without fail (Page 180)",
        textTe: "✅ వాయువ్య బ్లాకు (ఉత్తర రోడ్డు): NNE లో ప్రధాన గేటు + WNW లో మరో గేటు తప్పనిసరి (పేజీ 180)"
      },
      south_road_block: {
        status: "acceptable",
        textEn: "⚠️ Block with main road in South: Provide gate in South + another gate toward East road (Page 180)",
        textTe: "⚠️ దక్షిణాన ప్రధాన రోడ్డు ఉన్న బ్లాకు: దక్షిణంలో గేటుతో పాటు తూర్పు రోడ్డు వైపు గేటు కూడా ఉండాలి (పేజీ 180)"
      },
      sw_block_single: {
        status: "acceptable",
        textEn: "⚠️ Southwestern Block (South or West road): Gate in SSE or WNW (NOT on both South & West sides, Page 180)",
        textTe: "⚠️ నైరుతి బ్లాకు: దక్షిణం లేదా పశ్చిమ రోడ్డు ఉన్నప్పుడు SSE లేదా WNW లో ఒకే గేటు (రెండు వైపులా పెట్టరాదు — పేజీ 180)"
      },
      sw_both_gates: {
        status: "forbidden",
        textEn: "❌ Southwestern Block with gates on BOTH South and West roads (Page 180 — Prohibited)",
        textTe: "❌ నైరుతి బ్లాకుకు దక్షిణం మరియు పశ్చిమం రెండు వైపులా గేట్లు పెట్టడం (పేజీ 180 — నిషిద్ధం)"
      }
    }
  },
  {
    id: "separate_access",
    nameEn: "Separate Floor / Portion Entry & Apportioning (Pages 127, 163–165)",
    nameTe: "వేర్వేరు అంతస్తులు / పోర్షన్ల విభజన & ప్రవేశం (పేజీలు 127, 163–165)",
    page: "Pages 127, 163–165",
    whyEn: "Pages 127 & 163–165: Separate portions for letting out must have entry doorways strictly from OUTSIDE (no internal access between portions, Page 164). Let out only the exiguous portion while the owner occupies the exalted portion; never leave the let-out portion vacant for long (Page 127). Never apportion a house after completion (Page 165).",
    whyTe: "పుస్తకంలో 127, 163–165 పేజీల ప్రకారం — అద్దెకు ఇచ్చే వేర్వేరు పోర్షన్లకు ప్రవేశ ద్వారాలు బయటి నుండి మాత్రమే ఉండాలి (లోపలి నుండి రాకపోకలు ఉండకూడదు — పేజీ 164). యజమాని ఉచ్ఛ భాగంలో ఉండి, తక్కువ ప్రాధాన్య భాగాన్ని అద్దెకు ఇవ్వాలి; అది ఖాళీ అయితే వెంటనే భర్తీ చేయాలి (పేజీ 127).",
    options: {
      outside_only_exiguous: {
        status: "ideal",
        textEn: "✅ Separate outer-only doorway + owner in exalted portion, tenant in exiguous portion (Pages 127, 164)",
        textTe: "✅ బయటి నుండి మాత్రమే ప్రవేశం + యజమాని ఉచ్ఛ భాగంలో, అద్దెవారు నీచ/ప్రత్యామ్నాయ భాగంలో (పేజీలు 127, 164)"
      },
      east_facing_portion: {
        status: "ideal",
        textEn: "✅ East-facing house portion in Southeast with entrance in Northeast (Pages 163–164)",
        textTe: "✅ తూర్పు ముఖ ఇంట్లో ఆగ్నేయంలో పోర్షన్, ఈశాన్యంలో ప్రవేశ ద్వారం (పేజీలు 163–164)"
      },
      north_facing_portion: {
        status: "ideal",
        textEn: "✅ North-facing house portion in Northwest with entrance in NNE (Page 164)",
        textTe: "✅ ఉత్తర ముఖ ఇంట్లో వాయువ్యంలో పోర్షన్, ఉత్తర ఈశాన్యంలో (NNE) ప్రవేశ ద్వారం (పేజీ 164)"
      },
      internal_access_between: {
        status: "forbidden",
        textEn: "❌ Internal connecting door between two separate/rented portions (Page 164 — Strictly Prohibited)",
        textTe: "❌ వేర్వేరుగా అద్దెకు ఇచ్చిన రెండు పోర్షన్ల మధ్య లోపలి నుండి కనెక్టింగ్ తలుపు (పేజీ 164 — నిషిద్ధం)"
      },
      apportion_after_completion: {
        status: "forbidden",
        textEn: "❌ Apportioning / dividing a floor into separate units AFTER construction is complete (Page 165)",
        textTe: "❌ ఇంటి నిర్మాణం పూర్తయిన తర్వాత దానిని వేర్వేరు పోర్షన్లుగా విభజించడం (పేజీ 165 — నిషిద్ధం)"
      }
    }
  },
  {
    id: "floor_independence",
    nameEn: "Independent Upper-Floor Flats: Stairs, Balconies & Levels (Pages 126, 152–155, 310)",
    nameTe: "పై అంతస్తు ప్రత్యేక ఫ్లాట్లు: మెట్లు, బాల్కనీలు & మట్టాలు (పేజీలు 126, 152–155, 310)",
    page: "Pages 126, 152–155, 203, 310",
    whyEn: "Pages 126, 152–155, 203 & 310: When separate floors are accessed via outside stairs, keep outside stairs unroofed (Page 154) and never build bathrooms, latrines, stores, or meter rooms under outside landings (Page 155). Every upper floor must maintain lower Northern/Eastern floor levels (Page 126) and wider untruncated East/North balconies (Page 310).",
    whyTe: "పుస్తకంలో 126, 152–155, 203, 310 పేజీల ప్రకారం — బయటి మెట్లతో వేర్వేరు అంతస్తులకు వెళ్ళేటప్పుడు, మెట్లపై కప్పు వేయరాదు (పేజీ 154) మరియు లాండింగ్ క్రింద బాత్రూమ్, టాయిలెట్, స్టోర్ లేదా మీటర్ గది కట్టరాదు (పేజీ 155). ప్రతి అంతస్తులో ఉత్తరం/తూర్పు పల్లంగా, తూర్పు/ఉత్తర బాల్కనీలు విశాలంగా ఉండాలి (పేజీ 310).",
    options: {
      external_exalted_balcony: {
        status: "ideal",
        textEn: "✅ Unroofed outside stairs entering exalted cantilever balcony + wider E/N balconies on every floor (Pages 152–154, 310)",
        textTe: "✅ కప్పు లేని బయటి మెట్లతో కాంటిలీవర్ బాల్కనీలోకి ప్రవేశం + ప్రతి అంతస్తులో విశాల E/N బాల్కనీలు (పేజీలు 152–154, 310)"
      },
      under_landing_utilities: {
        status: "forbidden",
        textEn: "❌ Meter room, store, bathroom, or toilet under outside stair landing serving separate floors (Page 155)",
        textTe: "❌ వేర్వేరు అంతస్తుల బయటి మెట్ల లాండింగ్ క్రింద మీటర్ గది, స్టోర్ లేదా బాత్రూమ్ కట్టడం (పేజీ 155 — నిషిద్ధం)"
      },
      truncated_ene_balcony: {
        status: "forbidden",
        textEn: "❌ Upper-floor flat with truncated ENE, ESE, NNE, or NNW balcony (Page 310)",
        textTe: "❌ పై అంతస్తు ఫ్లాట్‌లో ENE, ESE, NNE లేదా NNW బాల్కనీని కట్ చేయడం (పేజీ 310 — అశుభం)"
      }
    }
  }
];

const SEPARATE_FLOORS_BOOK_RULES = [
  {
    page: "Page 180",
    badgeEn: "Apartment Blocks",
    badgeTe: "అపార్ట్‌మెంట్ బ్లాకులు",
    titleEn: "Gates for Multi-Storied Housing Blocks",
    titleTe: "బహుళ అంతస్తుల అపార్ట్‌మెంట్ బ్లాకుల గేట్లు",
    detailsEn: "A gate exalted for one flat may be exiguous for the whole block. SE block (East road) needs another gate in SSE; NW block (North road) needs NNE + WNW gates; NE block needs NNE & ENE gates; SW block gets SSE or WNW (never both S & W).",
    detailsTe: "ఒక ఫ్లాట్‌కు ఉచ్ఛమైన గేటు మొత్తం బ్లాకుకు నీచంగా మారవచ్చు. అందుకే SE బ్లాకుకు SSE లో మరో గేటు, NW బ్లాకుకు NNE+WNW గేట్లు, NE బ్లాకుకు NNE & ENE గేట్లు పెట్టాలి; SW బ్లాకుకు S, W రెండు వైపులా గేట్లు పెట్టకూడదు."
  },
  {
    page: "Pages 163–165",
    badgeEn: "Outside-Only Entry",
    badgeTe: "బయటి ప్రవేశం",
    titleEn: "Apportioning Portions & No Internal Access",
    titleTe: "పోర్షన్ల విభజన & అంతర్గత ద్వార నిషేధం",
    detailsEn: "Separate portions for letting out must have entry doorways strictly from OUTSIDE, with NO internal access from the main house (Page 164). East-facing: portion in SE (entry NE); South: SW (entry SSE); West: SW (entry WNW); North: NW (entry NNE). Never apportion after completion (Page 165).",
    detailsTe: "అద్దెకు ఇచ్చే వేర్వేరు పోర్షన్లకు బయటి నుండి మాత్రమే ద్వారాలు ఉండాలి — లోపలి నుండి ప్రవేశం ఉండరాదు (పేజీ 164). నిర్మాణం పూర్తయిన తర్వాత ఇల్లును పోర్షన్లుగా విభజించరాదు (పేజీ 165)."
  },
  {
    page: "Page 127",
    badgeEn: "Owner vs. Tenant",
    badgeTe: "యజమాని & అద్దెవారు",
    titleEn: "Let Out Exiguous Portion; Keep Occupied",
    titleTe: "అద్దె భాగం ఖాళీగా ఉంచరాదు",
    detailsEn: "Owners letting out separate floors or portions should let out the exiguous portion while occupying the exalted portion. If the tenant vacates, find another tenant promptly or occupy it yourself — leaving it vacant makes the owner's portion heavy and brings misfortune.",
    detailsTe: "యజమాని ఉచ్ఛ భాగంలో ఉండి, తక్కువ ప్రాధాన్య పోర్షన్/అంతస్తును అద్దెకు ఇవ్వాలి. అద్దెవారు ఖాళీ చేస్తే వెంటనే మరొకరిని ఉంచాలి లేదా యజమానే వాడుకోవాలి; ఖాళీగా ఉంచితే ఇబ్బందులు వస్తాయి."
  },
  {
    page: "Pages 126, 152–155, 310",
    badgeEn: "Every Floor",
    badgeTe: "ప్రతి అంతస్తులో",
    titleEn: "Consistent Floor Levels, Unroofed Stairs & Balconies",
    titleTe: "ప్రతి అంతస్తులో మట్టాలు, మెట్లు & బాల్కనీలు",
    detailsEn: "Keep North/East floor levels lower on BOTH Ground and Upper floors (Page 126). Upper flats MUST have wider East & North balconies (never truncate ENE/ESE/NNE/NNW, Page 310). Keep outside stairs unroofed (Page 154) and free of meter/bath/store rooms under landings (Page 155).",
    detailsTe: "గ్రౌండ్ & పై అంతస్తులు అన్నింటిలోనూ ఉత్తరం, తూర్పు మట్టాలు తక్కువగా ఉంచి (పేజీ 126), విశాల E/N బాల్కనీలు ఇవ్వాలి (పేజీ 310). బయటి మెట్లపై కప్పు వేయరాదు & క్రింద మీటర్/బాత్రూమ్ గదులు కట్టరాదు."
  }
];

function renderSeparateFloorsValidator() {
  const featSelect = document.getElementById("sepFloorFeatureSelect");
  const optSelect = document.getElementById("sepFloorOptionSelect");
  if (!featSelect || !optSelect) return;

  featSelect.innerHTML = SEPARATE_FLOORS_GUIDE_DATA.map(item => {
    const text = currentLang === "english" ? item.nameEn : (currentLang === "telugu" ? item.nameTe : `${item.nameEn} (${item.nameTe})`);
    return `<option value="${item.id}" data-en="${item.nameEn}" data-te="${item.nameTe}" data-dual="${item.nameEn} (${item.nameTe})">${text}</option>`;
  }).join("");

  updateSepFloorOptionOptions();

  featSelect.addEventListener("change", () => {
    updateSepFloorOptionOptions();
    checkSeparateFloorLayout();
  });

  optSelect.addEventListener("change", checkSeparateFloorLayout);

  const btn = document.getElementById("btnCheckSepFloor");
  if (btn) btn.addEventListener("click", checkSeparateFloorLayout);

  checkSeparateFloorLayout();
}

function updateSepFloorOptionOptions() {
  const featSelect = document.getElementById("sepFloorFeatureSelect");
  const optSelect = document.getElementById("sepFloorOptionSelect");
  if (!featSelect || !optSelect) return;

  const current = SEPARATE_FLOORS_GUIDE_DATA.find(s => s.id === featSelect.value) || SEPARATE_FLOORS_GUIDE_DATA[0];
  const keys = Object.keys(current.options);

  optSelect.innerHTML = keys.map(k => {
    const opt = current.options[k];
    const text = currentLang === "english" ? opt.textEn : (currentLang === "telugu" ? opt.textTe : `${opt.textEn} (${opt.textTe})`);
    return `<option value="${k}" data-en="${opt.textEn}" data-te="${opt.textTe}" data-dual="${opt.textEn} (${opt.textTe})">${text}</option>`;
  }).join("");
}

function checkSeparateFloorLayout() {
  const featSelect = document.getElementById("sepFloorFeatureSelect");
  const optSelect = document.getElementById("sepFloorOptionSelect");
  const resultBox = document.getElementById("sepFloorResultBox");
  if (!featSelect || !optSelect || !resultBox) return;

  const entry = SEPARATE_FLOORS_GUIDE_DATA.find(s => s.id === featSelect.value) || SEPARATE_FLOORS_GUIDE_DATA[0];
  const opt = entry.options[optSelect.value] || Object.values(entry.options)[0];
  const status = opt.status;

  let badgeClass = "ideal";
  let statusBadgeEn = "✅ Prescribed / Auspicious Configuration";
  let statusBadgeTe = "✅ శాస్త్ర సమ్మతమైన ఉత్తమ విధానం";

  if (status === "acceptable") {
    badgeClass = "acceptable";
    statusBadgeEn = "⚠️ Conditional / Specific Requirement";
    statusBadgeTe = "⚠️ షరతులతో కూడిన నియమం";
  } else if (status === "forbidden") {
    badgeClass = "forbidden";
    statusBadgeEn = "❌ Prohibited / Block or Floor Dosha";
    statusBadgeTe = "❌ నిషిద్ధం / తీవ్ర వాస్తు దోషం";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.85rem; padding-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1);">
      <div class="item-badge-status ${badgeClass}">
        <span class="lang-en">${statusBadgeEn}</span>
        <span class="lang-te">${statusBadgeTe}</span>
      </div>
      <span style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); font-weight:700;">
        📖 Book Reference: ${entry.page}
      </span>
    </div>

    <h4 class="lang-en" style="color:#fff; font-size:1.12rem; margin:0 0 0.25rem 0;">${entry.nameEn}</h4>
    <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.08rem; margin:0 0 0.5rem 0;">${entry.nameTe}</h4>

    <div style="background:rgba(30,41,59,0.55); padding:0.75rem 1rem; border-radius:8px; margin-bottom:0.75rem; border-left:3px solid ${status === "ideal" ? "#10b981" : (status === "acceptable" ? "#f59e0b" : "#ef4444")};">
      <div class="lang-en" style="font-weight:600; color:#e2e8f0;">Selected: ${opt.textEn}</div>
      <div class="lang-te" style="font-weight:600; font-family:var(--font-telugu); color:#fef08a;">ఎంచుకున్నది: ${opt.textTe}</div>
    </div>

    <div class="detail-label" style="margin-bottom:0.3rem;">
      <span class="lang-en">Book Principle (${entry.page}):</span>
      <span class="lang-te">గ్రంథ శాస్త్రీయ వివరణ (${entry.page}):</span>
    </div>
    <p class="lang-en" style="font-size:0.94rem; color:#cbd5e1; line-height:1.65; margin:0 0 0.45rem 0;">${entry.whyEn}</p>
    <p class="lang-te" style="font-size:0.94rem; font-family:var(--font-telugu); color:#cbd5e1; line-height:1.75; margin:0;">${entry.whyTe}</p>
  `;
}

function renderSeparateFloorsCards() {
  const container = document.getElementById("separateFloorsRulesGrid");
  if (!container) return;

  container.innerHTML = SEPARATE_FLOORS_BOOK_RULES.map(rule => `
    <div class="proverb-card" style="border-color: rgba(245,158,11,0.3); background: rgba(17,24,39,0.88);">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; gap:0.75rem; flex-wrap:wrap;">
          <span style="font-size:0.75rem; color:var(--gold-bright); font-weight:700; text-transform:uppercase;">📖 ${rule.page}</span>
          <span style="font-size:0.75rem; background:rgba(245,158,11,0.15); color:var(--gold-bright); padding:0.15rem 0.5rem; border-radius:4px; font-weight:600;">
            <span class="lang-en">${rule.badgeEn}</span>
            <span class="lang-te" style="font-family:var(--font-telugu);">${rule.badgeTe}</span>
          </span>
        </div>
        <h4 class="lang-en" style="color:#fff; font-size:1.12rem; margin-bottom:0.25rem;">${rule.titleEn}</h4>
        <h4 class="lang-te" style="font-family:var(--font-telugu); color:var(--gold-bright); font-size:1.08rem; margin-bottom:0.35rem;">${rule.titleTe}</h4>
        <p class="lang-en" style="font-size:0.94rem; color:#e2e8f0; line-height:1.65; margin-bottom:0.55rem;">${rule.detailsEn}</p>
        <p class="lang-te" style="font-size:0.94rem; color:#cbd5e1; font-family:var(--font-telugu); line-height:1.7; margin:0;">${rule.detailsTe}</p>
      </div>
    </div>
  `).join("");
}

// --- 11. Navigation Drawer & Hamburger Menu (Works for Mobile & Desktop) ---
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

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", closeDrawer);
  }

  navOverlay.addEventListener("click", closeDrawer);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Clicking an in-drawer link scrolls to section and closes the drawer cleanly
  drawerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      closeDrawer();
      if (href && href.startsWith("#") && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          setTimeout(() => {
            const targetTop = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - 65;
            window.scrollTo({ top: targetTop, behavior: "smooth" });
          }, 80);
        }
      }
    });
  });
}

// --- 12. ScrollSpy Navigation (Synchronized Header & Section Highlighting) ---
function initVaastuScrollSpy() {
  const header = document.querySelector(".site-header");
  const navItems = document.querySelectorAll(".drawer-nav-item, .nav-item");
  const seenIds = new Set();
  const sections = [];

  navItems.forEach(item => {
    const href = item.getAttribute("href");
    if (href && href.startsWith("#") && !seenIds.has(href)) {
      seenIds.add(href);
      const el = document.getElementById(href.slice(1));
      if (el) sections.push(el);
    }
  });

  function setActive(id) {
    navItems.forEach(item => {
      const href = item.getAttribute("href");
      if (href === `#${id}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Header elevation shadow and styling when scrolled
    if (header) {
      if (scrollY > 15) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (!sections.length) return;

    // Near bottom of document: activate last section (Proverbs)
    if (scrollY + windowHeight >= docHeight - 70) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    const headerOffset = 110;
    let currentId = sections[0].id;

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (scrollY >= sec.offsetTop - headerOffset) {
        currentId = sec.id;
      } else {
        break;
      }
    }

    setActive(currentId);
  }

  // Smooth click scroll for all in-page links (nav items, hero buttons)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const href = anchor.getAttribute("href");
      if (href && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          const targetTop = target.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - 65;
          window.scrollTo({ top: targetTop, behavior: "smooth" });
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

// --- 13. DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language segmented button listeners
  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langVal;
      if (lang) setLanguage(lang);
    });
  });

  // 2. Zone cell clicks
  document.querySelectorAll(".zone-cell").forEach(cell => {
    cell.addEventListener("click", () => {
      const zoneId = cell.dataset.zone;
      if (zoneId) renderZoneDetail(zoneId);
    });
  });

  // 3. Vithi Shula clicks
  document.querySelectorAll(".vithi-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const vithiId = btn.dataset.vithi;
      if (vithiId) renderVithiDetail(vithiId);
    });
  });

  // 4. Gunakam clicks
  document.querySelectorAll(".gunakam-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const caseId = btn.dataset.case;
      if (caseId) renderGunakamDetail(caseId);
    });
  });

  // 5. Temple tab clicks
  document.querySelectorAll(".temple-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const templeId = btn.dataset.temple;
      if (templeId) renderTempleDetail(templeId);
    });
  });

  // 6. Diagnostic Form Listeners
  const diagInputs = [
    "diagFacing", "diagBorewell", "diagKitchen", "diagBedroom",
    "diagOht", "diagSeptic", "diagStairs", "diagSlope"
  ];
  diagInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", runHouseDiagnostic);
  });

  // 7. Proverbs Search & Filter
  const searchInput = document.getElementById("proverbSearchInput");
  const catSelect = document.getElementById("proverbCategorySelect");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderProverbs(e.target.value, catSelect ? catSelect.value : "all");
    });
  }
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      renderProverbs(searchInput ? searchInput.value : "", e.target.value);
    });
  }

  // 8. Item Placement Guide Listeners & Init
  if (typeof renderItemChecker === "function") renderItemChecker();
  if (typeof renderDirectionalGuide === "function") renderDirectionalGuide("ne");
  if (typeof renderHouseholdItems === "function") renderHouseholdItems();
  if (typeof renderStaircaseValidator === "function") renderStaircaseValidator();
  if (typeof renderStaircaseCards === "function") renderStaircaseCards();
  if (typeof renderMultiStoreyValidator === "function") renderMultiStoreyValidator();
  if (typeof renderMultiStoreyCards === "function") renderMultiStoreyCards();
  if (typeof renderSeparateFloorsValidator === "function") renderSeparateFloorsValidator();
  if (typeof renderSeparateFloorsCards === "function") renderSeparateFloorsCards();

  const itemSearchInput = document.getElementById("itemSearchInput");
  const itemCatSelect = document.getElementById("itemCatSelect");
  if (itemSearchInput) {
    itemSearchInput.addEventListener("input", (e) => {
      renderHouseholdItems(e.target.value, itemCatSelect ? itemCatSelect.value : "all");
    });
  }
  if (itemCatSelect) {
    itemCatSelect.addEventListener("change", (e) => {
      renderHouseholdItems(itemSearchInput ? itemSearchInput.value : "", e.target.value);
    });
  }

  // 9. Prime initial state & render all components via setLanguage
  setLanguage(currentLang);

  // 10. Initialize Navigation Drawer (Mobile & Desktop Hamburger)
  initNavDrawer();

  // 11. Initialize ScrollSpy Navigation
  initVaastuScrollSpy();
});
