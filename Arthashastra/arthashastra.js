// Kauṭilya's Arthaśāstra — Canonical Data & Interactive Labs
(function () {
  "use strict";

  function bi(en, te) {
    return `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;
  }

  const VIDYAS_4 = [
    { en: "1. Ānvīkṣikī (Philosophy & Logic)", te: "1. ఆన్వీక్షకి (సాంఖ్య, యోగ, లోకాయత)", desc: "Examines strength and weakness via reason; the lamp of all sciences (I.2)." },
    { en: "2. Trayī (Three Vedas)", te: "2. త్రయి (ఋగ్, యజుః, సామ)", desc: "Establishes Varṇa-Āśrama dharma and ethical duties (I.3)." },
    { en: "3. Vārttā (Economics)", te: "3. వార్త్త (కృషి, పాశుపాల్య, వాణిజ్య)", desc: "Agriculture, cattle-rearing, and trade — yields grains, cattle, gold, and treasury (I.4)." },
    { en: "4. Daṇḍanīti (Science of Governance)", te: "4. దండనీతి (రాజనీతి)", desc: "Acquires the unacquired, preserves the acquired, augments it, and bestows it on the worthy (I.4)." }
  ];

  const BOOKS_15 = [
    ["I. Vinayādhikārika", "Discipline of the King, Ministers & Spies"],
    ["II. Adhyakṣapracāra", "Duties of 30+ Government Superintendents, Weights & Time"],
    ["III. Dharmasthīya", "Civil Law, Marriage, Inheritance & Contracts"],
    ["IV. Kaṇṭakaśodhana", "Removal of Thorns (Criminal Law & Policing)"],
    ["V. Yogavṛtta", "Conduct of Courtiers, Replenishing Treasury"],
    ["VI. Maṇḍalayoni", "Saptāṅga (7 Limbs) & 12-King Rāja-Maṇḍala"],
    ["VII. Ṣāḍguṇya", "Six-Fold Foreign Policy & Alliances"],
    ["VIII. Vyasanādhikārika", "Vices & Calamities of State"],
    ["IX. Abhiyāsyatkarma", "Preparations for Marching to War"],
    ["X. Sāṅgrāmika", "Battle Formations (Vyūhas) & Warfare"],
    ["XI. Saṅghavṛtta", "Policy Toward Oligarchies / Corporations"],
    ["XII. Ābalīyasa", "Strategy of a Weak King Against a Strong King"],
    ["XIII. Durgalambhopāya", "Methods of Capturing Fortresses"],
    ["XIV. Aupaniṣadika", "Secret Means & Esoteric Remedies"],
    ["XV. Tantrayukti", "32 Logical Devices of Scientific Exposition"]
  ];

  const SAPTANGA = [
    { en: "1. Svāmī (King)", te: "1. స్వామి (రాజు)", desc: "Born of high family, wise, energetic, truthful, resolute, and trained in all sciences (VI.1)." },
    { en: "2. Amātya (Ministers)", te: "2. అమాత్యుడు (మంత్రులు)", desc: "Native-born, loyal, incorruptible administrators tested by the 4 Upadhās (I.10, VI.1)." },
    { en: "3. Janapada (Territory & People)", te: "3. జనపదము (దేశం & ప్రజలు)", desc: "Fertile land, mines, forests, waterways, industrious farmers, and loyal taxpayers (VI.1)." },
    { en: "4. Durga (Fortified Capital)", te: "4. దుర్గము (కోట)", desc: "Four types: Audaka (water), Pārvata (hill), Dhānvana (desert), and Vanadurga (forest) (II.3, VI.1)." },
    { en: "5. Kośa (Treasury)", te: "5. కోశము (ఖజానా)", desc: "Righteously acquired gold, silver, gems, and reserves able to withstand long calamities (VI.1)." },
    { en: "6. Daṇḍa (Army / Force)", te: "6. దండము (సైన్యం)", desc: "Hereditary, loyal, skilled in all weapons, and content with their families (VI.1)." },
    { en: "7. Mitra (Ally)", te: "7. మిత్రుడు (మిత్రరాజ్యం)", desc: "Hereditary, constant, obedient, and able to mobilize swiftly when needed (VI.1)." }
  ];

  const TIRTHAS_18 = [
    "1. Mantrī (Chief Minister)", "2. Purohita (Royal Priest)", "3. Senāpati (Commander)",
    "4. Yuvarāja (Crown Prince)", "5. Dauvārika (Chief Gatekeeper)", "6. Antarvaṁśika (Palace Head)",
    "7. Praśāstṛ (Magistrate/Prisons)", "8. Samāhartṛ (Collector-General)", "9. Sannidhātṛ (Treasurer)",
    "10. Pradeṣṭṛ (Commissioner)", "11. Nāyaka (City Constable)", "12. Pauravyāvahārika (City Judge)",
    "13. Kārmāntika (Mines/Factories)", "14. Mantripariṣad-Adhyakṣa", "15. Daṇḍapāla (Army Supply)",
    "16. Durgapāla (Fort Commander)", "17. Antapāla (Frontier Guard)", "18. Āṭavika (Forest Chief)"
  ];

  const MANDALA_12 = [
    { id: 1, en: "1. Vijigīṣu (Would-be Conqueror)", te: "1. విజిగీషువు (కేంద్ర రాజు)", ring: "Center", color: "#ffd97d", desc: "The central sovereign seeking righteous expansion via alliances and statecraft (VI.2)." },
    { id: 2, en: "2. Ari (Immediate Enemy)", te: "2. అరి (సరిహద్దు శత్రువు)", ring: "Front 1", color: "#f43f5e", desc: "King sharing an immediate border in front — natural adversary by proximity." },
    { id: 3, en: "3. Mitra (Ally)", te: "3. మిత్రుడు", ring: "Front 2", color: "#10b981", desc: "King bordering Ari on the far side — natural friend (enemy of my enemy)." },
    { id: 4, en: "4. Arimitra (Enemy's Ally)", te: "4. అరిమిత్రుడు", ring: "Front 3", color: "#fb7185", desc: "King beyond Mitra — ally of the immediate enemy." },
    { id: 5, en: "5. Mitramitra (Friend's Friend)", te: "5. మిత్రమిత్రుడు", ring: "Front 4", color: "#34d399", desc: "Ally of Mitra." },
    { id: 6, en: "6. Arimitramitra", te: "6. అరిమిత్రమిత్రుడు", ring: "Front 5", color: "#fda4af", desc: "Ally of the Enemy's Ally." },
    { id: 7, en: "7. Pārṣṇigrāha (Rear Enemy)", te: "7. పార్ష్ణిగ్రాహుడు (వెనుక శత్రువు)", ring: "Rear 1", color: "#f43f5e", desc: "Adversary immediately behind Vijigīṣu who attacks when Vijigīṣu marches forward." },
    { id: 8, en: "8. Ākranda (Rear Ally)", te: "8. ఆక్రందుడు (వెనుక మిత్రుడు)", ring: "Rear 2", color: "#10b981", desc: "Ally behind Pārṣṇigrāha who checks the rear enemy." },
    { id: 9, en: "9. Pārṣṇigrāhāsāra", te: "9. పార్ష్ణిగ్రాహాసారుడు", ring: "Rear 3", color: "#fb7185", desc: "Ally of the rear enemy." },
    { id: 10, en: "10. Ākrandāsāra", te: "10. ఆక్రందాసారుడు", ring: "Rear 4", color: "#34d399", desc: "Ally of the rear friend." },
    { id: 11, en: "11. Madhyama (Middle King)", te: "11. మధ్యముడు", ring: "Outer", color: "#38bdf8", desc: "Powerful king bordering both Vijigīṣu and Ari; capable of helping or resisting either." },
    { id: 12, en: "12. Udāsīna (Neutral Power)", te: "12. ఉదాసీనుడు", ring: "Outer", color: "#a855f7", desc: "Strongest distant king outside the conflict; capable of helping or overpowering all." }
  ];

  const SADGUNYA = [
    ["1. Sandhi (సంధి)", "Peace treaty with pledges — used when weaker than the enemy (VII.1)."],
    ["2. Vigraha (విగ్రహం)", "Hostility / war — used when stronger than the enemy."],
    ["3. Āsana (ఆసనం)", "Neutrality / staying quiet — when neither can harm the other."],
    ["4. Yāna (యానం)", "Marching / mobilization — when possessing clear superiority."],
    ["5. Saṁśraya (సంశ్రయం)", "Seeking shelter/alliance with a stronger king — when threatened."],
    ["6. Dvaidhībhāva (ద్వైధీభావం)", "Dual policy: peace with one king while waging war against another."]
  ];

  const EXTRA_DOCTRINES = [
    {
      titleEn: "4 Upāyas — Means of Diplomacy (Book II.10, VII, IX)",
      titleTe: "చతురుపాయాలు (సామ-దాన-భేద-దండ)",
      items: [
        "1. Sāma (సామ): Conciliation, praising merits, showing mutual benefit.",
        "2. Dāna (దాన): Gifts, concessions, remission of taxes/tribute.",
        "3. Bheda (భేద): Dissension — sowing distrust among enemy allies.",
        "4. Daṇḍa (దండ): Force — seizure, war, or punishment (last resort)."
      ]
    },
    {
      titleEn: "4 Upadhās — Integrity Tests for Ministers (Book I.10)",
      titleTe: "చతుర్విధ ఉపధలు (మంత్రి పరీక్షలు — I.10)",
      items: [
        "1. Dharmopadhā: Testing righteousness via simulated royal command against Dharma.",
        "2. Arthopadhā: Testing financial integrity via secret monetary temptation.",
        "3. Kāmopadhā: Testing self-control against romantic/sensory temptation.",
        "4. Bhayopadhā: Testing loyalty under simulated threat of imprisonment/death."
      ]
    },
    {
      titleEn: "9 Classes of Spies — Gūḍhapuruṣas (Book I.11–12)",
      titleTe: "గూఢపురుషులు — 9 గూఢచారి వర్గాలు (I.11–12)",
      items: [
        "5 Saṁsthās (Stationary): Kāpaṭika (sharp student), Udāsthita (fallen ascetic), Gṛhapatika (impoverished farmer), Vaidehaka (merchant), Tāpasa (bogus hermit).",
        "4 Saṁcāras (Roving): Satri (orphan-scholar), Tīkṣṇa (desperado), Rasada (poisoner), Bhikṣukī / Parivrājikā (wandering nun)."
      ]
    },
    {
      titleEn: "3 Powers of a King (Śakti-traya, VI.2) & 4 Pillars of Law (III.1)",
      titleTe: "రాజ్య శక్తిత్రయం (VI.2) & న్యాయ చతుష్పాదాలు (III.1)",
      items: [
        "Śakti-traya (VI.2.33): 1. Mantra-śakti (counsel & wisdom — ranked highest by Kauṭilya), 2. Prabhāva-śakti (treasury & army), 3. Utsāha-śakti (personal energy/valour).",
        "4 Pillars of Law (III.1): Dharma (Sacred Law), Vyavahāra (Witness/Contract), Caritra (Custom), Rājaśāsana (Royal Edict)."
      ]
    }
  ];

  const QUIZ = [
    { qEn: "How many Adhikaraṇas (Books) comprise Kauṭilya's Arthaśāstra?", qTe: "కౌటిల్య అర్థశాస్త్రంలో ఎన్ని అధికరణలు ఉన్నాయి?", opts: ["10", "12", "15", "18"], ans: 2, expEn: "15 Adhikaraṇas (150 Chapters).", expTe: "15 అధికరణలు." },
    { qEn: "In the Saptāṅga theory (VI.1), which is NOT one of the 7 limbs?", qTe: "సప్తాంగ సిద్ధాంతం (VI.1)లో లేనిది ఏది?", opts: ["Svāmī", "Kośa", "Durga", "Purohita"], ans: 3, expEn: "The 7 limbs are Svāmī, Amātya, Janapada, Durga, Kośa, Daṇḍa, Mitra.", expTe: "స్వామి, అమాత్య, జనపద, దుర్గ, కోశ, దండ, మిత్ర." },
    { qEn: "In the 12-King Rāja-Maṇḍala, who is Pārṣṇigrāha?", qTe: "రాజమండలంలో 'పార్ష్ణిగ్రాహుడు' ఎవరు?", opts: ["Rear Enemy", "Immediate Front Ally", "Neutral Superpower", "Chief Minister"], ans: 0, expEn: "Pārṣṇigrāha ('heel-catcher') is the enemy immediately behind Vijigīṣu.", expTe: "వెనుక నుండి దాడి చేసే శత్రువు." },
    { qEn: "According to Book II Ch. 19, how many Suvarṇa-Māṣas equal 1 Suvarṇa (Karṣa)?", qTe: "2వ అధికరణం 19వ అధ్యాయం ప్రకారం 1 సువర్ణములో ఎన్ని సువర్ణమాషాలు ఉంటాయి?", opts: ["10", "12", "16", "20"], ans: 2, expEn: "16 Suvarṇa-Māṣas = 1 Suvarṇa/Karṣa; 4 Karṣas = 1 Pala.", expTe: "16 సువర్ణమాషాలు = 1 సువర్ణము." },
    { qEn: "How many years make 1 Yuga in Kauṭilya's Book II Ch. 20 calendar?", qTe: "అర్థశాస్త్రం (II.20) ప్రకారం ఎన్ని సంవత్సరాలు ఒక యుగము?", opts: ["4 years", "5 years", "12 years", "60 years"], ans: 1, expEn: "5 years make 1 Yuga, with 2 intercalary months (Adhimāsas) inserted in year 3 and year 5.", expTe: "5 సంవత్సరాలు ఒక యుగము." },
    { qEn: "Which Ṣāḍguṇya policy means making peace with one king while warring with another?", qTe: "ఒకరితో సంధి, మరొకరితో యుద్ధం చేసే షాడ్గుణ్య నీతి ఏది?", opts: ["Āsana", "Saṁśraya", "Dvaidhībhāva", "Vigraha"], ans: 2, expEn: "Dvaidhībhāva (Dual Policy, VII.1).", expTe: "ద్వైధీభావం." },
    { qEn: "How many Tīrthas (chief state officials) are listed in Book I Ch. 12?", qTe: "I.12లో ఎంతమంది తీర్థులు (ప్రధాన అధికారులు) చెప్పబడ్డారు?", opts: ["7", "12", "18", "27"], ans: 2, expEn: "18 Tīrthas.", expTe: "18 తీర్థులు." },
    { qEn: "What does Vārttā (one of the 4 Vidyās) cover?", qTe: "'వార్త్త' అనే విద్యలో ఏవి ఉంటాయి?", opts: ["Agriculture, cattle & trade", "Warfare & fortresses", "Vedic chanting", "Logic & debate"], ans: 0, expEn: "Kṛṣi (agriculture), Pāśupālya (cattle), and Vāṇijya (trade) — I.4.", expTe: "కృషి, పాశుపాల్య, వాణిజ్యము." },
    { qEn: "How many Palas of Māṣa grains equal 1 Droṇa (royal income measure) in II.19?", qTe: "II.19 ప్రకారం ఎన్ని ఫలాలు ఒక ద్రోణము?", opts: ["64", "100", "200", "400"], ans: 2, expEn: "200 Palas in grains of Māṣa = 1 Droṇa (Āyamāna).", expTe: "200 ఫలాలు = 1 ద్రోణము." },
    { qEn: "Which king in the Rāja-Maṇḍala is the strongest external neutral power?", qTe: "రాజమండలంలో అత్యంత శక్తివంతమైన బాహ్య తటస్థ రాజు ఎవరు?", opts: ["Ari", "Udāsīna", "Ākranda", "Mitra"], ans: 1, expEn: "Udāsīna (VI.2).", expTe: "ఉదాసీనుడు." },
    { qEn: "What is the standard annual interest rate on secured loans in Book III Ch. 11?", qTe: "III.11 ప్రకారం సాధారణ రుణాలపై సంవత్సరానికి వడ్డీ రేటు ఎంత?", opts: ["5%", "10%", "15%", "24%"], ans: 2, expEn: "1.25 paṇas per 100 per month = 15% per annum (dharmya / lawful rate).", expTe: "నెలకు 1.25% = సంవత్సరానికి 15%." },
    { qEn: "What fair profit cap does Kauṭilya set for domestic vs. imported goods (Book IV.2)?", qTe: "IV.2 ప్రకారం స్వదేశీ & విదేశీ వస్తువులపై కౌటిల్యుడు నిర్ణయించిన లాభపు పరిమితి ఎంత?", opts: ["5% domestic / 10% imported", "15% domestic / 30% imported", "20% flat", "No cap"], ans: 0, expEn: "5% above fixed price on domestic goods and 10% on imported goods (IV.2).", expTe: "స్వదేశీ వస్తువులపై 5%, విదేశీ వస్తువులపై 10%." },
    { qEn: "How many modes of embezzlement (Upahāra) are listed by Kauṭilya in Book II Ch. 8?", qTe: "II.8లో కౌటిల్యుడు ఎన్ని రకాల ధనాపహరణ (అవినీతి) మార్గాలను వివరించాడు?", opts: ["12", "24", "40", "64"], ans: 2, expEn: "40 ways of embezzlement (e.g., collecting early, under-reporting, inflating expenses).", expTe: "40 రకాల ధనాపహరణ మార్గాలు." },
    { qEn: "In Book VIII.1, which calamity (Vyasana) does Kauṭilya rank as most dangerous?", qTe: "VIII.1 ప్రకారం సప్తాంగ వ్యసనాలలో అత్యంత ప్రమాదకరమైనది ఏది?", opts: ["Mitra (Ally)", "Svāmī (The King)", "Durga (Fort)", "Daṇḍa (Army)"], ans: 1, expEn: "Svāmī (the Sovereign), because all other limbs depend on the leader's judgment and vitality.", expTe: "స్వామి (రాజు) యొక్క వ్యసనము." },
    { qEn: "Which of the 4 basic Battle Formations (Vyūhas, Book X.6) is shaped like a staff/line?", qTe: "X.6లోని 4 ప్రధాన వ్యూహాలలో కర్ర/సరళరేఖ ఆకారంలో ఉండే వ్యూహం ఏది?", opts: ["Daṇḍa-vyūha", "Bhoga-vyūha", "Maṇḍala-vyūha", "Asaṁhata-vyūha"], ans: 0, expEn: "Daṇḍa (staff/line), Bhoga (snake/serpentine), Maṇḍala (circle), Asaṁhata (detached).", expTe: "దండవ్యూహము." },
    { qEn: "Into how many Nālikā parts does Kauṭilya divide the King's day and night (Book I.19)?", qTe: "I.19 ప్రకారం రాజు యొక్క పగలు & రాత్రిని ఎన్ని నాళికా భాగాలుగా విభజించారు?", opts: ["4 day / 4 night", "6 day / 6 night", "8 day / 8 night", "12 day / 12 night"], ans: 2, expEn: "8 parts of the day and 8 parts of the night (Āhnikam, I.19).", expTe: "పగలు 8 భాగాలు, రాత్రి 8 భాగాలు." },
    { qEn: "What is the highest annual state salary in Paṇas listed in Book V Ch. 3?", qTe: "V.3 ప్రకారం రాజ్యంలోని అత్యధిక వార్షిక వేతనం (పణాలలో) ఎంత?", opts: ["12,000 Paṇas", "24,000 Paṇas", "48,000 Paṇas", "100,000 Paṇas"], ans: 2, expEn: "48,000 Paṇas for the Purohita, Senāpati, Chief Minister, Crown Prince & Queen Mother (V.3).", expTe: "48,000 పణాలు." },
    { qEn: "Which class of diplomatic envoy (Dūta, Book I.16) holds full plenipotentiary power?", qTe: "I.16 ప్రకారం పూర్తి అధికారాలు కలిగిన దూత (రాయబారి) ఎవరు?", opts: ["Śāsanahara", "Parimitārtha", "Nisṛṣṭārtha", "Satri"], ans: 2, expEn: "Nisṛṣṭārtha (plenipotentiary), Parimitārtha (limited mission), Śāsanahara (letter-bearer).", expTe: "నిసృష్టార్థుడు." },
    { qEn: "Which chapter of Book IV deals with forensic post-mortem examination of sudden deaths?", qTe: "IVవ అధికరణంలో ఆకస్మిక మరణాల ఫోరెన్సిక్ పరీక్షను వివరించే ప్రకరణం ఏది?", opts: ["Āśumṛtaka-parīkṣā (IV.7)", "Dharmasthīya (III.1)", "Durganiveśa (II.4)", "Tantrayukti (XV.1)"], ans: 0, expEn: "Āśumṛtaka-parīkṣā (Book IV Ch. 7) details signs of drowning, hanging, strangling & poisoning.", expTe: "ఆశుమృతక పరీక్ష (IV.7)." },
    { qEn: "How many Tantrayuktis (scientific exposition devices) are listed in Book XV?", qTe: "XVవ అధికరణంలో ఎన్ని తంత్రయుక్తులు (శాస్త్ర విచారణ సూత్రాలు) ఉన్నాయి?", opts: ["16", "24", "32", "64"], ans: 2, expEn: "32 Tantrayuktis (Book XV Ch. 1).", expTe: "32 తంత్రయుక్తులు." }
  ];

  const WEALTH_CYCLE = [
    { en: "1. Alabdha-lābha (Acquire)", te: "1. అలబ్ధ లాభం (ఆర్జన)", desc: "Acquire new wealth through Vārttā (agriculture, livestock, trade) and skilled enterprise (I.4)." },
    { en: "2. Labdha-parirakṣaṇa (Protect)", te: "2. లబ్ధ పరిరక్షణ (సంరక్షణ)", desc: "Guard acquired capital via daily audits (Akṣapaṭala) and sealing the 40 embezzlement leaks (II.7–8)." },
    { en: "3. Rakṣita-vivardhana (Multiply)", te: "3. రక్షిత వివర్ధన (అభివృద్ధి)", desc: "Reinvest protected surplus into irrigation, mines, trade routes, and productive ventures (I.4, II.1)." },
    { en: "4. Tīrtha-pratipādana (Deploy)", te: "4. తీర్థ ప్రతిపాదన (సద్వినియోగం)", desc: "Channel surplus to worthy citizens, defense, infrastructure, and crisis reserves (āpatsu)." }
  ];

  const REVENUE_7 = [
    "1. Durga (Fort/City): Customs (Śulka), fines, minting, weights, liquor, guilds",
    "2. Rāṣṭra (Countryside): Crown lands (Sītā), 1/6th grain share (Bhāga), ferry & road tolls",
    "3. Khani (Mines): Gold, silver, copper, iron, gems, salt & ocean pearls",
    "4. Setu (Irrigation & Gardens): Flower, fruit, vegetable & wet-crop fields",
    "5. Vana (Forests): Timber, bamboo, medicinal herbs & elephant forests (Hasti-vana)",
    "6. Vraja (Herds): Cattle, buffaloes, goats, sheep, horses & donkeys",
    "7. Vaṇikpatha (Trade Routes): Land highways (Sthalapatha) & water/sea routes (Vāripatha)"
  ];

  const EMBEZZLEMENT_GROUPS = [
    ["1–10. Timing & Revenue Manipulation", "What is realized earlier is entered later; what is realized later is entered earlier; revenue due is not collected; collected revenue is not remitted; what is remitted is not entered."],
    ["11–20. Expenditure & Price Fraud", "Inflating prices of purchased goods, lowering prices of sold royal goods, claiming expenses never incurred, paying double for one task, or substituting inferior goods for superior ones."],
    ["21–30. Weights, Measures & Lending", "Using false balances/measures (Tulā-māna), lending treasury money secretly for personal interest, concealing yields from mines/fields, or writing off collectible dues."],
    ["31–40. Hidden Diversion & Book V.2 Reserves", "Siphoning surpluses under false emergencies or gifts. Kauṭilya warns (II.9): 'Just as it is impossible not to taste honey on the tip of the tongue, an official handling money cannot avoid tasting it' — hence strict audits and rotation are mandatory."]
  ];

  const LAW_DATA = [
    {
      titleEn: "Book III: Lawful Interest & Debt Limits (III.11)",
      titleTe: "III.11: న్యాయమైన వడ్డీ రేట్లు & అప్పు నియమాలు",
      items: [
        "• Standard Secured Loan: 1.25 paṇas per 100 per month (15% per annum — Dharmya).",
        "• Commercial / Trade Loan: 5 paṇas per 100 per month (60% p.a.).",
        "• Forest-Caravan Loan (high risk): 10 paṇas per 100 per month.",
        "• Sea-Voyage Loan (highest risk): 20 paṇas per 100 per month.",
        "• Compounding & Debt Relief: Interest stops accruing during long state service, illness, or minority."
      ]
    },
    {
      titleEn: "Book III: 8 Marriages & Women's Property (III.2–5)",
      titleTe: "III.2–5: అష్ట వివాహాలు & స్త్రీధన హక్కులు",
      items: [
        "• 4 Dharmya (Approved): Brāhma, Prājāpatya, Ārṣa, Daiva (mutual consent & parental blessing).",
        "• 4 Non-traditional: Gāndharva (mutual love), Āsura (bride-price), Rākṣasa, Paiśāca.",
        "• Strīdhana (III.2): Jewelry, maintenance & gifts belong to the wife; husband cannot seize them except in extreme famine/calamity."
      ]
    },
    {
      titleEn: "Book IV: Consumer Protection & Profit Caps (IV.1–2)",
      titleTe: "IV.1–2: వినియోగదారుల రక్షణ & లాభపు పరిమితులు",
      items: [
        "• Fair Profit Cap (IV.2): 5% on domestic goods, 10% on imported goods; excess profit is confiscated.",
        "• Anti-Adulteration: Heavy fines for mixing inferior grains, oils, medicines, or metals.",
        "• Anti-Hoarding: Colluding merchants who artificially spike prices face severe penalties."
      ]
    },
    {
      titleEn: "Book IV: Policing, Artisan Guilds & Disaster Relief (IV.1–3)",
      titleTe: "IV.1–3: నగర రక్షణ & విపత్తు నివారణ",
      items: [
        "• 8 Great Calamities (IV.3): Fire, floods, pestilence, famine, rats, tigers, serpents, and evil spirits.",
        "• Famine Relief: State distributes seeds/food from royal granaries and launches public works (Setubandha).",
        "• Artisan Accountability: Tailors, weavers, goldsmiths & physicians are fined for negligence or fraud."
      ]
    }
  ];

  const CALAMITIES_DATA = {
    vyasanas: [
      "1. Svāmī (King's calamity — WORST): If the ruler lacks wisdom or energy, every limb collapses.",
      "2. Amātya (Minister's calamity): Corrupt or incompetent administration.",
      "3. Janapada (Territory/People): Famine, rebellion, or depopulation.",
      "4. Durga (Fortress): Weak defenses or poor supply storage.",
      "5. Kośa (Treasury): Depleted reserves — worse than Army calamity because treasury can raise an army (VIII.1).",
      "6. Daṇḍa (Army): Undisciplined or unpaid troops.",
      "7. Mitra (Ally): Unreliable or distant ally."
    ],
    vices: [
      { en: "1. Dyūta (Gambling)", te: "1. ద్యూతం (జూదం)", desc: "Ranked worst by Kauṭilya (VIII.3) because losses are instant, addictive, and breed deceit and hostility." },
      { en: "2. Pāna (Intoxication / Drinking)", te: "2. పానం (మద్యపానం)", desc: "Destroys discernment, reveals state secrets, and ruins health and dignity." },
      { en: "3. Strī (Sensory Indulgence)", te: "3. స్త్రీ వ్యసనం (అతిభోగం)", desc: "Causes neglect of state duties, though less instantly fatal to judgment than drinking." },
      { en: "4. Mṛgayā (Excessive Hunting)", te: "4. మృగయా (అతి వేట)", desc: "Exposes the king to ambushes and accidents, though moderate exercise has minor physical benefit." }
    ]
  };

  const WAR_DATA = [
    {
      titleEn: "Book IX: 6 Types of Troops & Terrain/Season (IX.1–2)",
      titleTe: "IX.1–2: షడ్విధ సైన్యం, దేశం & కాలం",
      items: [
        "1. Maula (Hereditary royal troops — most loyal), 2. Bhṛtaka (Hired mercenaries), 3. Śreṇi (Guild/corporate militia), 4. Mitra (Allied troops), 5. Amitra (Defectors), 6. Āṭavika (Forest tribes).",
        "Always assess Śakti (power), Deśa (even/uneven/watery terrain), and Kāla (cold/hot/rainy season) before marching."
      ]
    },
    {
      titleEn: "Book X: 4 Root Battle Formations — Vyūhas (X.6)",
      titleTe: "X.6: 4 ప్రధాన యుద్ధ వ్యూహాలు",
      items: [
        "1. Daṇḍa (Staff/Line): Breaking enemy flanks/center with uniform linear pressure.",
        "2. Bhoga (Serpentine): Flexible snake-like column for maneuvering through narrow/uneven ground.",
        "3. Maṇḍala (Circle): All-around defense against encirclement.",
        "4. Asaṁhata (Detached): Independent wings acting flexibly (includes Garuḍa, Makara, Śyena & Vajra)."
      ]
    },
    {
      titleEn: "Books XI–XII: Saṅghas & Weak King Strategy",
      titleTe: "XI–XII: సంఘవృత్తం & ఆబలీయస నీతి",
      items: [
        "Book XI (Saṅghavṛtta): Winning over invincible republics/guilds via internal dissension (Bheda) and conciliation rather than costly frontal war.",
        "Book XII (Ābalīyasa): How a weaker king survives a stronger invader using timely Sandhi (treaty), envoys, and asymmetric disruption."
      ]
    },
    {
      titleEn: "Books XIII–XV: 5 Siege Methods & 32 Tantrayuktis",
      titleTe: "XIII–XV: 5 దుర్గ విజయ ఉపాయాలు & 32 తంత్రయుక్తులు",
      items: [
        "5 Ways to Capture a Fort (XIII.1–4): Upajāpa (subversion), Yogavāmana (luring out), Apasarpa (feigned retreat), Paryupāsana (siege), Avamarda (direct storming).",
        "Book XV (Tantrayukti): 32 logical & methodological rules for interpreting scientific treatises."
      ]
    }
  ];

  const ROYAL_ROUTINE = {
    day: [
      "1 (6:00–7:30 AM): Inspect defense & state income/expenditure accounts",
      "2 (7:30–9:00 AM): Hear petitions of citizens & countryfolk in open court",
      "3 (9:00–10:30 AM): Bath, meals & Vedic/scholarly study",
      "4 (10:30–12:00 PM): Receive cash revenue & assign duties to Superintendents",
      "5 (12:00–1:30 PM): Consult Council of Ministers (Mantripariṣad) & read dispatches",
      "6 (1:30–3:00 PM): Recreation or confidential deliberation",
      "7 (3:00–4:30 PM): Inspect elephants, horses, chariots & infantry",
      "8 (4:30–6:00 PM): Confer with Senāpati on military strategy & evening prayers"
    ],
    night: [
      "1 (6:00–7:30 PM): Receive secret intelligence reports from Gūḍhapuruṣas",
      "2 (7:30–9:00 PM): Bath, light supper & study",
      "3–5 (9:00 PM–1:30 AM): Sleep to the sound of soft music",
      "6 (1:30–3:00 AM): Awaken, reflect on śāstras & state duties",
      "7 (3:00–4:30 AM): Deliberate with counselors & dispatch secret agents",
      "8 (4:30–6:00 AM): Receive blessings from Purohita, Ācārya & physicians"
    ]
  };

  const ENVOYS_3 = [
    ["1. Nisṛṣṭārtha (Plenipotentiary)", "Possesses full ministerial qualifications and authority to negotiate treaties independently (I.16)."],
    ["2. Parimitārtha (Chargé d'Affaires)", "Has three-quarters of ministerial qualifications; entrusted with a specific, bounded mission."],
    ["3. Śāsanahara (Royal Messenger)", "Has half of ministerial qualifications; delivers the King's written or oral edict verbatim."]
  ];

  const SALARIES_V3 = [
    ["48,000 Paṇas", "Purohita, Senāpati, Chief Minister (Mantrī), Crown Prince, Queen Mother, Chief Queen"],
    ["24,000 Paṇas", "Dauvārika (Gatekeeper), Antarvaṁśika, Praśāstṛ, Samāhartṛ, Sannidhātṛ"],
    ["12,000 Paṇas", "Princes, Pradeṣṭṛ, Nāyaka, City Judge (Pauravyāvahārika), Kārmāntika, Mantripariṣad members"],
    ["8,000 Paṇas", "Guild Chiefs (Śreṇīmukhyas), Elephant/Chariot/Cavalry/Infantry Commanders"],
    ["4,000 Paṇas", "Departmental Superintendents (Adhyakṣas), Elephant Trainers, Physicians, Royal Bards"],
    ["2,000 Paṇas", "Trained Chariot Fighters, Physicians, Horse Trainers, Accountants"],
    ["1,000 – 500 Paṇas", "Soothsayers, Storytellers, Trained Infantry (500), Spies (1,000–250)"],
    ["250 – 60 Paṇas", "Artisans & Carpenters (120), Palace Attendants & Laborers (60) + Grain Rations"]
  ];

  const ADHYAKSHAS_30 = [
    ["1. Kośādhyakṣa (II.11)", "Treasury — gems, pearls, gold, textiles & royal reserves"],
    ["2. Ākarādhyakṣa (II.12)", "Mines — prospecting ores, metallurgy & mine leases"],
    ["3. Lohādhyakṣa (II.12)", "Metals — copper, lead, tin, iron & bronze workshops"],
    ["4. Lakṣaṇādhyakṣa (II.12)", "Mint — silver Paṇas (1, ½, ¼, ⅛) & copper Māṣakas"],
    ["5. Lavaṇādhyakṣa (II.12)", "Salt — salt pans, licensing & 1/6th state share"],
    ["6. Suvarṇādhyakṣa (II.13)", "Goldsmiths — touchstone purity tests & anti-fraud"],
    ["7. Koṣṭhāgārādhyakṣa (II.15)", "Granary — grain storage, famine buffers & rations"],
    ["8. Paṇyādhyakṣa (II.16)", "Commerce — price stabilization, imports & exports"],
    ["9. Kupyādhyakṣa (II.17)", "Forest Produce — timber, bamboo, herbs, hides & ivory"],
    ["10. Āyudhāgārādhyakṣa (II.18)", "Armory — bows, swords, armor, siege engines & maintenance"],
    ["11. Pautavādhyakṣa (II.19)", "Weights & Balances — standardized weights & stamping"],
    ["12. Mānādhyakṣa (II.20)", "Measures of Space & Time — water-clocks & Yuga calendar"],
    ["13. Śulkādhyakṣa (II.21–22)", "Customs & Tolls — gate tariffs, smuggling fines"],
    ["14. Sūtrādhyakṣa (II.23)", "Textiles — spinning/weaving employment & fair wages"],
    ["15. Sītādhyakṣa (II.24)", "Agriculture — seed treatment, irrigation & crown farms"],
    ["16. Surādhyakṣa (II.25)", "Liquor — licensed taverns, quality & public order"],
    ["17. Sūnādhyakṣa (II.26)", "Slaughterhouse & Wildlife — protected sanctuaries & fish"],
    ["18. Gaṇikādhyakṣa (II.27)", "Courtesans & Arts — state revenue, training & protection"],
    ["19. Nāvadhyakṣa (II.28)", "Shipping & Ports — ferries, maritime tolls & anti-piracy"],
    ["20. Go'dhyakṣa (II.29)", "Cattle — herd branding, dairy quotas & grazing"],
    ["21. Aśvādhyakṣa (II.30)", "Cavalry Horses — breeds, training & balanced rations"],
    ["22. Hastyadhyakṣa (II.31–32)", "War Elephants — capture, training & forest preserves"],
    ["23. Rathādhyakṣa (II.33)", "Chariots — war & ceremonial chariot construction"],
    ["24. Pattyadhyakṣa (II.33)", "Infantry — drill, terrain specialization & readiness"],
    ["25. Mudrādhyakṣa (II.34)", "Passports & Seals — entry/exit passes for travelers"],
    ["26. Vivītādhyakṣa (II.34)", "Pastures — watering holes, roads & frontier watch"],
    ["27. Dyūtādhyakṣa (III.20)", "Gambling — licensed halls, 5% stake tax & fair dice"],
    ["28. Nāgarika (II.36)", "City Mayor — census, night curfew, fire safety & hygiene"]
  ];

  const FORENSICS_CIVIL = [
    {
      titleEn: "Book III: Inheritance, Boundaries & Guilds (III.5–14)",
      titleTe: "III.5–14: దాయభాగం, భూసరిహద్దులు & శ్రేణి నియమాలు",
      items: [
        "• Dāyabhāga (III.5–7): Equal division among sons; unmarried daughters receive marriage expenses & share of Strīdhana.",
        "• Vāstuka (III.8–10): Boundary disputes settled by village elders & physical markers; fines for encroaching on neighbors' drains/walls.",
        "• Dāsakarmakara-kalpa (III.13): No Ārya can be reduced to permanent slavery; bonded workers can redeem freedom; abuse of female workers voids the debt.",
        "• Sambhūya-samutthāna (III.14): Partnership profits/losses split proportionally; sick partners cannot be unfairly expelled."
      ]
    },
    {
      titleEn: "Book IV.7–8: Forensics (Āśumṛtaka-parīkṣā) & Judicial Limits",
      titleTe: "IV.7–8: ఆశుమృతక (ఫోరెన్సిక్) పరీక్ష & విచారణ నియమాలు",
      items: [
        "• Drowning vs. Post-mortem Submersion: Swollen anus/eyes, foam at nostrils & sand in stomach indicate live drowning.",
        "• Hanging vs. Murder: Froth at mouth, contracted limbs & upturned eyes distinguish suicide by hanging from post-mortem suspension.",
        "• Poisoning: Blue/dark fingernails, teeth & hair loss, plus undigested food tested on crows/dogs.",
        "• Torture Exemptions (IV.8): Strictly forbidden for pregnant women, minors, elderly, sick, or persons already confessing freely."
      ]
    }
  ];

  const TREATIES_VII = [
    ["Kapāla-sandhi", "Treaty on equal terms (equal share of tribute/territory)."],
    ["Upahāra-sandhi", "Peace bought by paying treasure/gifts to save the kingdom."],
    ["Ādiṣṭa-sandhi", "Ceding a specific frontier province while preserving the capital."],
    ["Suvarṇa-sandhi", "Long-term alliance cemented by gold and mutual trade."],
    ["Wasteland Colonization (VII.11–12)", "Settling fertile, well-watered lands with industrious farmers, mines & navigable rivers over barren gold-bearing deserts."]
  ];

  const TANTRAYUKTIS_32 = [
    "1. Adhikaraṇa (Topic)", "2. Vidhāna (Arrangement)", "3. Yoga (Syntactic Connection)", "4. Padārtha (Word Meaning)",
    "5. Hetvartha (Reason/Proof)", "6. Uddeśa (Brief Statement)", "7. Nirdeśa (Detailed Explanation)", "8. Upadeśa (Authoritative Precept)",
    "9. Apadeśa (Citation of Views)", "10. Atideśa (Extension of Rule)", "11. Pradeśa (Analogy/Projection)", "12. Upamāna (Simile/Comparison)",
    "13. Arthāpatti (Implication)", "14. Saṁśaya (Doubt)", "15. Prasaṅga (Contextual Repetition)", "16. Viparyaya (Contrary Case)",
    "17. Vākyaśeṣa (Ellipsis/Supplied Word)", "18. Anumata (Concession to Other View)", "19. Vyākhyāna (Special Exposition)", "20. Nirvacana (Etymology)",
    "21. Nidarśana (Illustration)", "22. Apavarga (Exception)", "23. Svasaṁjñā (Technical Term)", "24. Pūrvapakṣa (Opponent's Objection)",
    "25. Uttarapakṣa (Refutation/Conclusion)", "26. Ekānta (Invariable Rule)", "27. Anāgatāvekṣaṇa (Forward Reference)", "28. Atikrāntāvekṣaṇa (Backward Reference)",
    "29. Niyoga (Strict Injunction)", "30. Vikalpa (Option/Alternative)", "31. Samuccaya (Aggregation)", "32. Ūhya (Inference/Deduction)"
  ];

  function initHeaderAndScroll() {
    document.querySelectorAll(".lang-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".lang-opt").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.body.setAttribute("data-lang", btn.dataset.langVal);
      });
    });
    const toggle = document.getElementById("menuToggle");
    const drawer = document.getElementById("navDrawer");
    const overlay = document.getElementById("navOverlay");
    const closeBtn = document.getElementById("closeDrawer");
    const navItems = document.querySelectorAll(".drawer-nav-item");
    const setOpen = (open) => { drawer.classList.toggle("open", open); overlay.classList.toggle("open", open); };
    if (toggle) toggle.addEventListener("click", () => setOpen(true));
    if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
    if (overlay) overlay.addEventListener("click", () => setOpen(false));
    navItems.forEach(item => item.addEventListener("click", () => setOpen(false)));

    const sections = Array.from(document.querySelectorAll("section.study-section[id]"));
    function onScroll() {
      const pos = window.scrollY + 130;
      let id = sections[0]?.id || "";
      for (const s of sections) if (s.offsetTop <= pos) id = s.id;
      navItems.forEach(it => it.classList.toggle("active", it.getAttribute("href") === `#${id}`));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function renderAll() {
    document.getElementById("secOverviewBody").innerHTML = `
      <div class="cards-grid" style="margin-bottom:1rem;">${VIDYAS_4.map(v => `<div class="info-card"><h4>${bi(v.en, v.te)}</h4><p>${v.desc}</p></div>`).join("")}</div>
      <div class="panel-box"><h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("All 15 Adhikaraṇas (Books)", "15 అధికరణలు")}</h4>
        <div class="cards-grid">${BOOKS_15.map(b => `<div class="info-card" style="padding:0.55rem 0.8rem;"><strong>${b[0]}</strong><div style="font-size:0.8rem;color:var(--text-muted);">${b[1]}</div></div>`).join("")}</div>
      </div>
    `;

    document.getElementById("secSaptangaBody").innerHTML = `
      <div class="cards-grid" style="margin-bottom:1rem;">${SAPTANGA.map(s => `<div class="info-card"><h4>${bi(s.en, s.te)}</h4><p>${s.desc}</p></div>`).join("")}</div>
      <div class="panel-box"><h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("18 Tīrthas — Chief State Officials (Book I.12)", "అష్టాదశ తీర్థులు (ప్రధాన అధికారులు)")}</h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">${TIRTHAS_18.map(t => `<span class="tag-badge">${t}</span>`).join("")}</div>
      </div>
    `;

    // Interactive 12-King Raja-Mandala SVG
    const coords = [
      [180, 180], // 1 Vijigisu (center)
      [180, 122], // 2 Ari (front 1)
      [180, 74],  // 3 Mitra (front 2)
      [180, 32],  // 4 Arimitra (front 3)
      [105, 52],  // 5 Mitramitra
      [255, 52],  // 6 Arimitramitra
      [180, 238], // 7 Parsnigraha (rear 1)
      [180, 286], // 8 Akranda (rear 2)
      [115, 315], // 9 Parsnigrahasara
      [245, 315], // 10 Akrandasara
      [52, 180],  // 11 Madhyama
      [308, 180]  // 12 Udasina
    ];

    document.getElementById("secMandalaBody").innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <svg id="mandalaSvg" viewBox="0 0 360 360" style="width:100%;max-width:360px;display:block;margin:0 auto;background:rgba(6,8,13,0.75);border-radius:50%;border:1px solid rgba(245,185,66,0.25);">
            <circle cx="180" cy="180" r="62" fill="none" stroke="rgba(255,255,255,0.12)" stroke-dasharray="4 3"/>
            <circle cx="180" cy="180" r="110" fill="none" stroke="rgba(255,255,255,0.12)" stroke-dasharray="4 3"/>
            <circle cx="180" cy="180" r="154" fill="none" stroke="rgba(255,255,255,0.12)"/>
            ${MANDALA_12.map((k, i) => `
              <g class="mandala-node" data-idx="${i}" style="cursor:pointer;">
                <circle cx="${coords[i][0]}" cy="${coords[i][1]}" r="${i === 0 ? 18 : 14}" fill="#0e131f" stroke="${k.color}" stroke-width="2.5"/>
                <text x="${coords[i][0]}" y="${coords[i][1] + 4}" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">${k.id}</text>
              </g>
            `).join("")}
          </svg>
          <p style="font-size:0.78rem;color:var(--text-muted);text-align:center;margin-top:0.5rem;">${bi("Click any King (1–12) on the Maṇḍala ring", "రాజమండలంలోని ఏదైనా రాజు (1–12) పై క్లిక్ చేయండి")}</p>
        </div>
        <div class="panel-box">
          <div id="mandalaDetail" class="shloka-box" style="margin-bottom:0.85rem;"></div>
          <h4 style="color:var(--gold-bright);margin-bottom:0.45rem;">${bi("6-Fold Foreign Policy (Ṣāḍguṇya, VII.1)", "షాడ్గుణ్య విదేశాంగ నీతి")}</h4>
          ${SADGUNYA.map(s => `<div style="padding:0.35rem 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.83rem;"><strong>${s[0]}:</strong> <span style="color:var(--text-muted);">${s[1]}</span></div>`).join("")}
        </div>
      </div>
      <div class="cards-grid" style="margin-top:1.1rem;">
        ${EXTRA_DOCTRINES.map(d => `
          <div class="info-card">
            <h4>${bi(d.titleEn, d.titleTe)}</h4>
            <ul style="padding-left:1.05rem;font-size:0.82rem;margin-top:0.3rem;">
              ${d.items.map(it => `<li style="margin-bottom:0.25rem;">${it}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;
    const mDet = document.getElementById("mandalaDetail");
    const mNodes = document.querySelectorAll(".mandala-node");
    function showKing(idx) {
      const k = MANDALA_12[idx];
      mNodes.forEach((n, i) => n.querySelector("circle").setAttribute("fill", i === idx ? k.color : "#0e131f"));
      mDet.innerHTML = `<span class="tag-badge">${k.ring}</span><h4 style="color:var(--gold-bright);margin-top:0.3rem;">${bi(k.en, k.te)}</h4><p style="font-size:0.85rem;margin-top:0.25rem;">${k.desc}</p>`;
    }
    mNodes.forEach(n => n.addEventListener("click", () => showKing(Number(n.dataset.idx))));
    showKing(0);

    // Metrology & 5-Year Yuga
    document.getElementById("secMetrologyBody").innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Book II Ch. 19 Weight & Volume Converter", "తూకాలు & కొలతల గణన (II.19)")}</h4>
          <div class="control-grid">
            <div class="field-group"><label>${bi("Enter Suvarṇas (Karṣas)", "సువర్ణాలు (కర్షాలు)")}</label><input type="number" id="suvarnaInp" min="0" step="1" value="4"></div>
          </div>
          <div id="suvarnaOut" class="shloka-box" style="margin-bottom:0;"></div>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("Book II Ch. 20: 5-Year Yuga & Adhimāsa", "5 ఏళ్ళ యుగము & అధికమాసము (II.20)")}</h4>
          <p style="font-size:0.84rem;margin-bottom:0.55rem;">5 solar/lunar years = <strong>1 Yuga</strong>. To reconcile solar and lunar drift, Kauṭilya prescribes inserting <strong>2 Adhimāsas</strong> (intercalary months): one in the middle of the <strong>3rd year</strong> and one at the end of the <strong>5th year</strong>.</p>
          <div style="font-size:0.82rem;color:var(--text-muted);">
            • 10 Māṣa seeds (or 5 Guñja seeds) = 1 Suvarṇa-Māṣa<br>
            • 16 Suvarṇa-Māṣas = 1 Suvarṇa (Karṣa)<br>
            • 4 Karṣas = 1 Pala • 200 Palas (of Māṣa grain) = 1 Droṇa (Āyamāna)
          </div>
        </div>
      </div>
    `;
    const sInp = document.getElementById("suvarnaInp");
    const sOut = document.getElementById("suvarnaOut");
    const updWeight = () => {
      const s = Math.max(0, Number(sInp.value) || 0);
      sOut.innerHTML = `
        <strong>${s} Suvarṇas (Karṣas)</strong> =
        <strong>${(s * 16).toLocaleString()}</strong> Suvarṇa-Māṣas =
        <strong>${(s * 80).toLocaleString()}</strong> Guñja seeds =
        <strong>${(s / 4).toFixed(2)}</strong> Palas =
        <strong>${(s / 800).toFixed(4)}</strong> Droṇas (Āyamāna)
      `;
    };
    sInp.addEventListener("input", updWeight);
    updWeight();

    // 5. Wealth, Treasury & 40 Embezzlement Traps
    document.getElementById("secWealthBody").innerHTML = `
      <div class="cards-grid" style="margin-bottom:1rem;">
        ${WEALTH_CYCLE.map(w => `<div class="info-card"><h4>${bi(w.en, w.te)}</h4><p>${w.desc}</p></div>`).join("")}
      </div>
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("7 Sources of State Revenue (Āya-śarīra, II.6)", "7 ఆదాయ మార్గాలు (ఆయశరీరము — II.6)")}</h4>
          <ul style="padding-left:1.05rem;font-size:0.83rem;line-height:1.58;">
            ${REVENUE_7.map(r => `<li style="margin-bottom:0.25rem;">${r}</li>`).join("")}
          </ul>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("Kauṭilya Profit & Interest Simulator (II–IV)", "కౌటిల్య లాభ & వడ్డీ గణన యంత్రం")}</h4>
          <div class="control-grid">
            <div class="field-group"><label>${bi("Principal / Cost (Paṇas)", "మూలధనం (పణాలు)")}</label><input type="number" id="kPrincipal" min="0" step="10" value="1000"></div>
            <div class="field-group"><label>${bi("Category", "వర్గం")}</label>
              <select id="kType">
                <option value="dom">Domestic Trade Profit Cap (5%, IV.2)</option>
                <option value="imp">Imported Trade Profit Cap (10%, IV.2)</option>
                <option value="loan">Standard Secured Loan (15% p.a., III.11)</option>
                <option value="comm">Commercial Loan (60% p.a., III.11)</option>
              </select>
            </div>
          </div>
          <div id="kCalcOut" class="shloka-box" style="margin-bottom:0;"></div>
        </div>
      </div>
      <div class="panel-box">
        <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("40 Ways of Embezzlement (Upahāra, Book II.8) & Audit Discipline", "40 రకాల ధనాపహరణ మార్గాలు (II.8)")}</h4>
        <div class="cards-grid">
          ${EMBEZZLEMENT_GROUPS.map(g => `<div class="info-card"><h4>${g[0]}</h4><p style="font-size:0.82rem;">${g[1]}</p></div>`).join("")}
        </div>
      </div>
    `;
    const kP = document.getElementById("kPrincipal");
    const kT = document.getElementById("kType");
    const kOut = document.getElementById("kCalcOut");
    const updK = () => {
      const p = Math.max(0, Number(kP.value) || 0);
      const rates = { dom: [0.05, "5% Max Domestic Profit"], imp: [0.10, "10% Max Imported Profit"], loan: [0.15, "15% Annual Lawful Interest"], comm: [0.60, "60% Annual Commercial Interest"] };
      const [r, lbl] = rates[kT.value];
      const gain = p * r;
      kOut.innerHTML = `<strong>${lbl}:</strong> Return = <strong>${gain.toLocaleString(undefined,{maximumFractionDigits:2})}</strong> Paṇas • Total = <strong>${(p + gain).toLocaleString(undefined,{maximumFractionDigits:2})}</strong> Paṇas`;
    };
    kP.addEventListener("input", updK);
    kT.addEventListener("change", updK);
    updK();

    // 6. Civil, Commercial & Consumer Law
    document.getElementById("secLawBody").innerHTML = `
      <div class="cards-grid">
        ${LAW_DATA.map(d => `
          <div class="info-card">
            <h4>${bi(d.titleEn, d.titleTe)}</h4>
            <ul style="padding-left:1.05rem;font-size:0.82rem;margin-top:0.3rem;">
              ${d.items.map(it => `<li style="margin-bottom:0.25rem;">${it}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

    // 7. Calamities & 4 Royal Vices
    document.getElementById("secCalamitiesBody").innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("7 State Calamities Ranked (Vyasanas, VIII.1)", "సప్తాంగ వ్యసనాలు — ప్రాధాన్యత క్రమం (VIII.1)")}</h4>
          <ul style="padding-left:1.05rem;font-size:0.83rem;line-height:1.58;">
            ${CALAMITIES_DATA.vyasanas.map(v => `<li style="margin-bottom:0.28rem;">${v}</li>`).join("")}
          </ul>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("4 Vices of Desire (Kāmaja Vyasanas, VIII.3)", "కామజ వ్యసనాలు — 4 ప్రధాన దోషాలు (VIII.3)")}</h4>
          ${CALAMITIES_DATA.vices.map(v => `<div style="padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.07);"><strong style="color:var(--gold-bright);">${bi(v.en, v.te)}</strong><div style="font-size:0.82rem;color:var(--text-muted);">${v.desc}</div></div>`).join("")}
        </div>
      </div>
    `;

    // 8. War Formations, Sanghas & Siegecraft
    document.getElementById("secWarBody").innerHTML = `
      <div class="cards-grid">
        ${WAR_DATA.map(d => `
          <div class="info-card">
            <h4>${bi(d.titleEn, d.titleTe)}</h4>
            <ul style="padding-left:1.05rem;font-size:0.82rem;margin-top:0.3rem;">
              ${d.items.map(it => `<li style="margin-bottom:0.25rem;">${it}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

    // 9. Royal Routine, Envoys & State Salaries
    document.getElementById("secGovernanceBody").innerHTML = `
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("King's 8-Part Day & Night Timetable (Āhnikam, I.19)", "రాజు దినచర్య — 8 పగలు & 8 రాత్రి భాగాలు (I.19)")}</h4>
          <strong style="font-size:0.82rem;color:var(--cyan-bright);">Day (8 Nālikā Parts):</strong>
          <ul style="padding-left:1.05rem;font-size:0.8rem;margin:0.3rem 0 0.6rem;">${ROYAL_ROUTINE.day.map(x => `<li>${x}</li>`).join("")}</ul>
          <strong style="font-size:0.82rem;color:var(--cyan-bright);">Night (8 Nālikā Parts):</strong>
          <ul style="padding-left:1.05rem;font-size:0.8rem;margin:0.3rem 0 0;">${ROYAL_ROUTINE.night.map(x => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.45rem;">${bi("3 Classes of Diplomatic Envoys (Dūta, I.16)", "దూతల 3 వర్గాలు (I.16)")}</h4>
          ${ENVOYS_3.map(e => `<div style="padding:0.35rem 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.82rem;"><strong>${e[0]}:</strong> <span style="color:var(--text-muted);">${e[1]}</span></div>`).join("")}
          <h4 style="color:var(--gold-bright);margin:0.85rem 0 0.45rem;">${bi("State Salary Scale (Bhṛtya-bharaṇīya, V.3)", "రాజ్య వేతన శ్రేణులు (V.3)")}</h4>
          ${SALARIES_V3.map(s => `<div style="padding:0.28rem 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.8rem;"><strong style="color:var(--gold-bright);">${s[0]}:</strong> ${s[1]}</div>`).join("")}
        </div>
      </div>
      <div class="panel-box">
        <h4 style="color:var(--gold-bright);margin-bottom:0.35rem;">${bi("Prince Protection (I.17–18), Palace Security (I.20–21) & Crisis Fiscal Measures (V.2, V.6)", "రాజపుత్ర రక్షణ, అంతఃపుర భద్రత & ఆపత్కాల కోశ సంగ్రహం (I.17–21, V.2)")}</h4>
        <p style="font-size:0.83rem;color:var(--text-muted);">Kauṭilya prescribes educating princes early in the 4 Vidyās, guarding royal food via physicians & tasters (I.21), collecting emergency benevolence levies (Praṇaya) only once in severe crises without harming agriculture (V.2), and ensuring smooth ministerial succession if a king falls ill or dies (V.6).</p>
      </div>
    `;

    // 10. Capital Zoning & 30+ Superintendents
    document.getElementById("secAdhyakshasBody").innerHTML = `
      <div class="panel-box" style="margin-bottom:1rem;">
        <h4 style="color:var(--gold-bright);margin-bottom:0.4rem;">${bi("Capital City & Fort Zoning (Durganiveśa, II.3–4)", "దుర్గనివేశము — రాజధాని నగర నిర్మాణం (II.3–4)")}</h4>
        <p style="font-size:0.83rem;color:var(--text-muted);">Surrounded by 3 moats and ramparts with 4 cardinal gates (Brāhma, Aindra, Yāmya, Saināpatya): the Royal Palace sits slightly north of center; temples of Śiva, Vaiśravaṇa, Aśvins &amp; Aparājitā at the center; Brāhmaṇas to the North, Kṣatriyas/Ministers to the East, Vaiśyas/Merchants to the South, and Artisans/Śūdras to the West.</p>
      </div>
      <div class="panel-box">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">
          <h4 style="color:var(--cyan-bright);margin:0;">${bi("28+ Departmental Superintendents (Adhyakṣas, Book II)", "శాఖాధ్యక్షులు (2వ అధికరణం)")}</h4>
          <input type="text" id="adhFilterInp" placeholder="Filter (e.g. Gold, Mines, Horse, Tax)..." style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.35rem 0.6rem;border-radius:8px;font-size:0.82rem;min-width:220px;">
        </div>
        <div id="adhGrid" class="cards-grid"></div>
      </div>
    `;
    const adhGrid = document.getElementById("adhGrid");
    const adhInp = document.getElementById("adhFilterInp");
    const drawAdh = () => {
      const q = (adhInp.value || "").trim().toLowerCase();
      const rows = q ? ADHYAKSHAS_30.filter(a => (a[0] + " " + a[1]).toLowerCase().includes(q)) : ADHYAKSHAS_30;
      adhGrid.innerHTML = rows.map(a => `<div class="info-card" style="padding:0.55rem 0.8rem;"><strong style="color:var(--gold-bright);">${a[0]}</strong><div style="font-size:0.8rem;color:var(--text-muted);">${a[1]}</div></div>`).join("");
    };
    adhInp.addEventListener("input", drawAdh);
    drawAdh();

    // 11. Inheritance, Guilds & Forensics
    document.getElementById("secForensicsBody").innerHTML = `
      <div class="cards-grid">
        ${FORENSICS_CIVIL.map(d => `
          <div class="info-card">
            <h4>${bi(d.titleEn, d.titleTe)}</h4>
            <ul style="padding-left:1.05rem;font-size:0.82rem;margin-top:0.3rem;">
              ${d.items.map(it => `<li style="margin-bottom:0.25rem;">${it}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

    // 12. Treaties, Book XIV & All 32 Tantrayuktis
    document.getElementById("secTreatiesTantraBody").innerHTML = `
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.45rem;">${bi("Treaty Types & Wasteland Settlement (Book VII.3–12)", "సంధి భేదాలు & నూతన భూముల స్థాపన (VII.3–12)")}</h4>
          ${TREATIES_VII.map(t => `<div style="padding:0.32rem 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.82rem;"><strong>${t[0]}:</strong> <span style="color:var(--text-muted);">${t[1]}</span></div>`).join("")}
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.45rem;">${bi("Book XIV: Aupaniṣadika (Secret Emergency Means, XIV.1–4)", "XIV. ఔపనిషదికం — ఆపత్కాల రహస్య ఉపాయాలు")}</h4>
          <p style="font-size:0.83rem;color:var(--text-muted);line-height:1.58;">Book XIV contains covert herbal, smoke, poison-antidote, and psychological-illusion preparations intended strictly as a last-resort defense against wicked and adharmic enemies to protect righteousness (*Cāturvarṇya-rakṣārtham*).</p>
        </div>
      </div>
      <div class="panel-box">
        <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Book XV: All 32 Tantrayuktis (Devices of Scientific Exposition)", "XV. తంత్రయుక్తి — 32 శాస్త్ర విచారణ సూత్రాలు")}</h4>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${TANTRAYUKTIS_32.map(t => `<span class="tag-badge">${t}</span>`).join("")}
        </div>
      </div>
    `;

    // Quiz
    const qBody = document.getElementById("secQuizBody");
    let score = 0; const done = new Set();
    qBody.innerHTML = `<div class="shloka-box"><strong>${bi("Score:", "స్కోరు:")} <span id="aScore">0</span> / ${QUIZ.length}</strong></div>` +
      QUIZ.map((q, qi) => `<div class="quiz-q" data-qi="${qi}"><strong>${qi + 1}. ${bi(q.qEn, q.qTe)}</strong>${q.opts.map((o, oi) => `<button class="quiz-opt" data-oi="${oi}">${o}</button>`).join("")}<div class="quiz-exp" style="display:none;margin-top:0.4rem;font-size:0.83rem;color:var(--cyan-bright);"></div></div>`).join("");
    qBody.querySelectorAll(".quiz-opt").forEach(btn => btn.addEventListener("click", () => {
      const box = btn.closest(".quiz-q"); const qi = Number(box.dataset.qi);
      if (done.has(qi)) return; done.add(qi);
      const oi = Number(btn.dataset.oi); const q = QUIZ[qi];
      box.querySelectorAll(".quiz-opt")[q.ans].classList.add("correct");
      if (oi === q.ans) { score++; document.getElementById("aScore").textContent = String(score); }
      else btn.classList.add("wrong");
      const exp = box.querySelector(".quiz-exp"); exp.style.display = "block"; exp.innerHTML = bi(q.expEn, q.expTe);
    }));
  }

  document.addEventListener("DOMContentLoaded", () => { initHeaderAndScroll(); renderAll(); });
})();
