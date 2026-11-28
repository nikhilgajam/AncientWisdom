// Chandas — Comprehensive Beginner-to-Pro Sanskrit Mastery Studio
// Includes Visual Picture-Word Dictionary (42+ Relations, 22+ Colors, Animals, Nature, Body, Objects, Time/Seasons, Directions),
// Flashcards & Spoken Sanskrit, Devanāgarī Mātrā Combiner, Vast Sentence Builder (23,040+ combinations),
// Pāṇinīya Śikṣā, 14 Māheśvara Sūtras, 8 Vibhaktis (M/F/N), 5 Lakāras, Sandhi, 6 Samāsas, Anvaya Decoder & 15 Exercises
(function () {
  "use strict";

  const PICTURE_VOCAB = {
    relations: {
      label: "All Relations & Family (सम्बन्धिनः कुटुम्बं च)",
      items: [
        { icon: "👩", sa: "माता", iast: "Mātā", en: "Mother", te: "తల్లి" },
        { icon: "👨", sa: "पिता", iast: "Pitā", en: "Father", te: "తండ్రి" },
        { icon: "👦", sa: "पुत्रः", iast: "Putraḥ", en: "Son", te: "కొడుకు" },
        { icon: "👧", sa: "पुत्री", iast: "Putrī", en: "Daughter", te: "కూతురు" },
        { icon: "👶", sa: "शिशुः", iast: "Śiśuḥ", en: "Baby / Infant", te: "శిశువు" },
        { icon: "👫", sa: "मातापितरौ", iast: "Mātāpitarau", en: "Parents", te: "తల్లిదండ్రులు" },
        { icon: "🧑", sa: "भ्राता", iast: "Bhrātā", en: "Brother", te: "సోదరుడు" },
        { icon: "🧔", sa: "अग्रजः", iast: "Agrajaḥ", en: "Elder Brother", te: "అన్న" },
        { icon: "🧒", sa: "अनुजः", iast: "Anujaḥ", en: "Younger Brother", te: "తమ్ముడు" },
        { icon: "👩", sa: "भगिनी", iast: "Bhaginī", en: "Sister", te: "సోదరి" },
        { icon: "👩‍🦰", sa: "अग्रजा", iast: "Agrajā", en: "Elder Sister", te: "అక్క" },
        { icon: "👧", sa: "अनुजा", iast: "Anujā", en: "Younger Sister", te: "చెల్లెలు" },
        { icon: "👴", sa: "पितामहः", iast: "Pitāmahaḥ", en: "Paternal Grandfather", te: "తాత (తండ్రి వైపు)" },
        { icon: "👵", sa: "पितामही", iast: "Pitāmahī", en: "Paternal Grandmother", te: "నాన్నమ్మ" },
        { icon: "👴", sa: "मातामहः", iast: "Mātāmahaḥ", en: "Maternal Grandfather", te: "తాత (తల్లి వైపు)" },
        { icon: "👵", sa: "मातामही", iast: "Mātāmahī", en: "Maternal Grandmother", te: "అమ్మమ్మ" },
        { icon: "👦", sa: "पौत्रः", iast: "Pautraḥ", en: "Grandson (Son's son)", te: "మనవడు" },
        { icon: "👧", sa: "पौत्री", iast: "Pautrī", en: "Granddaughter (Son's)", te: "మనవరాలు" },
        { icon: "👦", sa: "दौहित्रः", iast: "Dauhitraḥ", en: "Grandson (Daughter's)", te: "కూతురి కొడుకు" },
        { icon: "👧", sa: "दौहित्री", iast: "Dauhitrī", en: "Granddaughter (Daughter's)", te: "కూతురి కూతురు" },
        { icon: "👨", sa: "पितृव्यः", iast: "Pitṛvyaḥ", en: "Paternal Uncle (Father's bro.)", te: "బాబాయి / పెదనాన్న" },
        { icon: "👩", sa: "पितृव्या", iast: "Pitṛvyā", en: "Paternal Aunt (Uncle's wife)", te: "పిన్ని / పెద్దమ్మ" },
        { icon: "👩", sa: "पितृष्वसा", iast: "Pitṛṣvasā", en: "Paternal Aunt (Father's sis.)", te: "మేనత్త" },
        { icon: "👨", sa: "मातुलः", iast: "Mātulaḥ", en: "Maternal Uncle (Mother's bro.)", te: "మేనమామ" },
        { icon: "👩", sa: "मातुलानी", iast: "Mātulānī", en: "Maternal Aunt (Uncle's wife)", te: "అత్త (మామ భార్య)" },
        { icon: "👩", sa: "मातृष्वसा", iast: "Mātṛṣvasā", en: "Maternal Aunt (Mother's sis.)", te: "పిన్ని / పెద్దమ్మ" },
        { icon: "👦", sa: "भ्रातृव्यः", iast: "Bhrātṛvyaḥ", en: "Nephew (Brother's son)", te: "అన్న/తమ్ముడి కొడుకు" },
        { icon: "👦", sa: "भागिनेयः", iast: "Bhāgineyaḥ", en: "Nephew (Sister's son)", te: "మేనల్లుడు" },
        { icon: "👧", sa: "भागिनेयी", iast: "Bhāgineyī", en: "Niece (Sister's daughter)", te: "మేనకోడలు" },
        { icon: "🤵", sa: "पतिः", iast: "Patiḥ", en: "Husband", te: "భర్త" },
        { icon: "👰", sa: "पत्नी", iast: "Patnī", en: "Wife", te: "భార్య" },
        { icon: "👴", sa: "श्वशुरः", iast: "Śvaśuraḥ", en: "Father-in-law", te: "మామగారు" },
        { icon: "👵", sa: "श्वश्रूः", iast: "Śvaśrūḥ", en: "Mother-in-law", te: "అత్తగారు" },
        { icon: "🤵", sa: "जामाता", iast: "Jāmātā", en: "Son-in-law", te: "అల్లుడు" },
        { icon: "👰", sa: "स्नुषा", iast: "Snuṣā", en: "Daughter-in-law", te: "కోడలు" },
        { icon: "👨", sa: "श्यालः", iast: "Śyālaḥ", en: "Brother-in-law (Wife's bro.)", te: "బావమరిది" },
        { icon: "👨", sa: "देवरः", iast: "Devaraḥ", en: "Brother-in-law (Husband's bro.)", te: "మరిది" },
        { icon: "👩", sa: "ननान्दा", iast: "Nanāndā", en: "Sister-in-law (Husband's sis.)", te: "ఆడపడుచు" },
        { icon: "🧑‍🏫", sa: "गुरुः", iast: "Guruḥ", en: "Teacher / Preceptor", te: "గురువు" },
        { icon: "🎓", sa: "शिष्यः", iast: "Śiṣyaḥ", en: "Student / Disciple", te: "శిష్యుడు" },
        { icon: "🤝", sa: "मित्रम्", iast: "Mitram", en: "Friend", te: "మిత్రుడు" },
        { icon: "🙏", sa: "अतिथिः", iast: "Atithiḥ", en: "Guest", te: "అతిథి" },
        { icon: "🏘️", sa: "प्रतिवेशी", iast: "Prativeśī", en: "Neighbor", te: "పొరుగువాడు" }
      ]
    },
    colors: {
      label: "All Colors (सर्वे वर्णाः)",
      items: [
        { icon: "⚪", hex: "#ffffff", sa: "श्वेतः", iast: "Śvetaḥ", en: "White", te: "తెలుపు" },
        { icon: "⚫", hex: "#111827", sa: "कृष्णः", iast: "Kṛṣṇaḥ", en: "Black", te: "నలుపు" },
        { icon: "🔴", hex: "#ef4444", sa: "रक्तः", iast: "Raktaḥ", en: "Red", te: "ఎరుపు" },
        { icon: "🌅", hex: "#dc2626", sa: "अरुणः", iast: "Aruṇaḥ", en: "Crimson / Dawn-Red", te: "అరుణ వర్ణం" },
        { icon: "🌸", hex: "#f472b6", sa: "पाटलः", iast: "Pāṭalaḥ", en: "Pink / Rose", te: "గులాబీ రంగు" },
        { icon: "🌺", hex: "#db2777", sa: "मञ्जिष्ठः", iast: "Mañjiṣṭhaḥ", en: "Magenta / Madder", te: "ముదురు గులాబీ" },
        { icon: "🟡", hex: "#facc15", sa: "पीतः", iast: "Pītaḥ", en: "Yellow", te: "పసుపు" },
        { icon: "✨", hex: "#fde68a", sa: "गौरः", iast: "Gauraḥ", en: "Fair / Pale Gold", te: "పసిమి" },
        { icon: "🥇", hex: "#f59e0b", sa: "सुवर्णः", iast: "Suvarṇaḥ", en: "Golden", te: "బంగారు రంగు" },
        { icon: "🟠", hex: "#f97316", sa: "नारङ्गः", iast: "Nāraṅgaḥ", en: "Orange", te: "నారింజ రంగు" },
        { icon: "🕉️", hex: "#ea580c", sa: "काषायः", iast: "Kāṣāyaḥ", en: "Saffron / Ochre", te: "కాషాయం" },
        { icon: "🟢", hex: "#22c55e", sa: "हरितः", iast: "Haritaḥ", en: "Green", te: "ఆకుపచ్చ" },
        { icon: "🔵", hex: "#2563eb", sa: "नीलः", iast: "Nīlaḥ", en: "Blue", te: "నీలం" },
        { icon: "☁️", hex: "#38bdf8", sa: "आकाशनीलः", iast: "Ākāśanīlaḥ", en: "Sky Blue", te: "ఆకాశనీలం" },
        { icon: "🟣", hex: "#8b5cf6", sa: "नीललोहितः", iast: "Nīlalohitaḥ", en: "Purple / Violet", te: "ఊదా రంగు" },
        { icon: "🟤", hex: "#92400e", sa: "कपिलः", iast: "Kapilaḥ", en: "Brown", te: "గోధుమ రంగు" },
        { icon: "🍂", hex: "#d97706", sa: "पिङ्गलः", iast: "Piṅgalaḥ", en: "Tawny / Amber", te: "పింగళ వర్ణం" },
        { icon: "🪙", hex: "#b45309", sa: "ताम्रः", iast: "Tāmraḥ", en: "Copper", te: "రాగి రంగు" },
        { icon: "🌫️", hex: "#94a3b8", sa: "धूसरः", iast: "Dhūsaraḥ", en: "Grey / Ash", te: "బూడిద రంగు" },
        { icon: "💨", hex: "#475569", sa: "धूम्रः", iast: "Dhūmraḥ", en: "Smoke / Dark Grey", te: "పొగ రంగు" },
        { icon: "🥈", hex: "#e2e8f0", sa: "रजतः", iast: "Rajataḥ", en: "Silver", te: "వెండి రంగు" },
        { icon: "🌈", hex: "linear-gradient(135deg,#ef4444,#facc15,#22c55e,#3b82f6,#8b5cf6)", sa: "चित्रः", iast: "Citraḥ", en: "Multicolored", te: "చిత్రవర్ణం" }
      ]
    },
    animals: {
      label: "All Animals, Birds & Creatures (पशवः पक्षिणश्च)",
      items: [
        { icon: "🦁", sa: "सिंहः", iast: "Siṁhaḥ", en: "Lion", te: "సింహం" },
        { icon: "🐯", sa: "व्याघ्रः", iast: "Vyāghraḥ", en: "Tiger", te: "పులి" },
        { icon: "🐘", sa: "गजः", iast: "Gajaḥ", en: "Elephant", te: "ఏనుగు" },
        { icon: "🐎", sa: "अश्वः", iast: "Aśvaḥ", en: "Horse", te: "గుర్రం" },
        { icon: "🐄", sa: "धेनुः", iast: "Dhenuḥ", en: "Cow", te: "ఆవు" },
        { icon: "🐂", sa: "वृषभः", iast: "Vṛṣabhaḥ", en: "Bull / Ox", te: "ఎద్దు" },
        { icon: "🐃", sa: "महिषः", iast: "Mahiṣaḥ", en: "Buffalo", te: "గేదె" },
        { icon: "🐐", sa: "अजः", iast: "Ajaḥ", en: "Goat", te: "మేక" },
        { icon: "🐑", sa: "मेषः", iast: "Meṣaḥ", en: "Sheep", te: "గొర్రె" },
        { icon: "🐕", sa: "श्वानः", iast: "Śvānaḥ", en: "Dog", te: "కుక్క" },
        { icon: "🐈", sa: "बिडालः", iast: "Biḍālaḥ", en: "Cat", te: "పిల్లి" },
        { icon: "🐒", sa: "वानरः", iast: "Vānaraḥ", en: "Monkey", te: "కోతి" },
        { icon: "🐻", sa: "भल्लूकः", iast: "Bhallūkaḥ", en: "Bear", te: "ఎలుగుబంటి" },
        { icon: "🦌", sa: "मृगः", iast: "Mṛgaḥ", en: "Deer", te: "జింక" },
        { icon: "🦊", sa: "शृगालः", iast: "Śṛgālaḥ", en: "Fox / Jackal", te: "నక్క" },
        { icon: "🐺", sa: "वृकः", iast: "Vṛkaḥ", en: "Wolf", te: "తోడేలు" },
        { icon: "🐇", sa: "शशः", iast: "Śaśaḥ", en: "Rabbit / Hare", te: "కుందేలు" },
        { icon: "🐁", sa: "मूषकः", iast: "Mūṣakaḥ", en: "Mouse / Rat", te: "ఎలుక" },
        { icon: "🐗", sa: "वराहः", iast: "Varāhaḥ", en: "Boar / Pig", te: "పంది" },
        { icon: "🫏", sa: "गर्दभः", iast: "Gardabhaḥ", en: "Donkey", te: "గాడిద" },
        { icon: "🐪", sa: "उष्ट्रः", iast: "Uṣṭraḥ", en: "Camel", te: "ఒంటె" },
        { icon: "🐍", sa: "सर्पः", iast: "Sarpaḥ", en: "Snake", te: "పాము" },
        { icon: "🐸", sa: "मण्डूकः", iast: "Maṇḍūkaḥ", en: "Frog", te: "కప్ప" },
        { icon: "🐢", sa: "कूर्मः", iast: "Kūrmaḥ", en: "Tortoise / Turtle", te: "తాబేలు" },
        { icon: "🐟", sa: "मत्स्यः", iast: "Matsyaḥ", en: "Fish", te: "చేప" },
        { icon: "🐊", sa: "मकरः", iast: "Makaraḥ", en: "Crocodile", te: "మొసలి" },
        { icon: "🦚", sa: "मयूरः", iast: "Mayūraḥ", en: "Peacock", te: "నెమలి" },
        { icon: "🦢", sa: "हंसः", iast: "Haṁsaḥ", en: "Swan", te: "హంస" },
        { icon: "🦅", sa: "गरुडः", iast: "Garuḍaḥ", en: "Eagle", te: "గరుడ పక్షి" },
        { icon: "🦜", sa: "शुकः", iast: "Śukaḥ", en: "Parrot", te: "చిలుక" },
        { icon: "🐦‍⬛", sa: "काकः", iast: "Kākaḥ", en: "Crow", te: "కాకి" },
        { icon: "🐦", sa: "कोकिलः", iast: "Kokilaḥ", en: "Cuckoo", te: "కోయిల" },
        { icon: "🕊️", sa: "कपोतः", iast: "Kapotaḥ", en: "Pigeon / Dove", te: "పావురం" },
        { icon: "🦉", sa: "उलूकः", iast: "Ulūkaḥ", en: "Owl", te: "గుడ్లగూబ" },
        { icon: "🪶", sa: "चटकः", iast: "Caṭakaḥ", en: "Sparrow", te: "పిచ్చుక" },
        { icon: "🦩", sa: "बकः", iast: "Bakaḥ", en: "Crane / Heron", te: "కొంగ" },
        { icon: "🐝", sa: "मधुमक्षिका", iast: "Madhumakṣikā", en: "Honeybee", te: "తేనెటీగ" },
        { icon: "🦋", sa: "चित्रपतङ्गः", iast: "Citrapataṅgaḥ", en: "Butterfly", te: "సీతాకోకచిలుక" },
        { icon: "🐜", sa: "पिपीलिका", iast: "Pipīlikā", en: "Ant", te: "చీమ" },
        { icon: "🕷️", sa: "ऊर्णनाभः", iast: "Ūrṇanābhaḥ", en: "Spider", te: "సాలెపురుగు" }
      ]
    },
    nature: {
      label: "Nature & Cosmos (प्रकृतिः)",
      items: [
        { icon: "☀️", sa: "सूर्यः", iast: "Sūryaḥ", en: "Sun", te: "సూర్యుడు" },
        { icon: "🌙", sa: "चन्द्रः", iast: "Candraḥ", en: "Moon", te: "చంద్రుడు" },
        { icon: "⭐", sa: "नक्षत्रम्", iast: "Nakṣatram", en: "Star", te: "నక్షత్రం" },
        { icon: "🌌", sa: "आकाशः", iast: "Ākāśaḥ", en: "Sky / Space", te: "ఆకాశం" },
        { icon: "☁️", sa: "मेघः", iast: "Meghaḥ", en: "Cloud", te: "మేఘం" },
        { icon: "🌧️", sa: "वृष्टिः", iast: "Vṛṣṭiḥ", en: "Rain", te: "వర్షం" },
        { icon: "🌬️", sa: "वायुः", iast: "Vāyuḥ", en: "Wind / Air", te: "గాలి" },
        { icon: "🔥", sa: "अग्निः", iast: "Agniḥ", en: "Fire", te: "అగ్ని" },
        { icon: "💧", sa: "जलम्", iast: "Jalam", en: "Water", te: "నీరు" },
        { icon: "🌍", sa: "पृथ्वी", iast: "Pṛthvī", en: "Earth", te: "భూమి" },
        { icon: "🌳", sa: "वृक्षः", iast: "Vṛkṣaḥ", en: "Tree", te: "చెట్టు" },
        { icon: "🌸", sa: "पुष्पम्", iast: "Puṣpam", en: "Flower", te: "పువ్వు" },
        { icon: "🍃", sa: "पर्णम्", iast: "Parṇam", en: "Leaf", te: "ఆకు" },
        { icon: "🌲", sa: "वनम्", iast: "Vanam", en: "Forest", te: "అడవి" },
        { icon: "🏞️", sa: "उद्यानम्", iast: "Udyānam", en: "Garden / Park", te: "తోట" },
        { icon: "🌊", sa: "नदी", iast: "Nadī", en: "River", te: "నది" },
        { icon: "🌐", sa: "समुद्रः", iast: "Samudraḥ", en: "Ocean / Sea", te: "సముద్రం" },
        { icon: "🏞️", sa: "सरोवरः", iast: "Sarovaraḥ", en: "Lake", te: "సరస్సు" },
        { icon: "⛰️", sa: "पर्वतः", iast: "Parvataḥ", en: "Mountain", te: "పర్వతం" },
        { icon: "🪨", sa: "शिला", iast: "Śilā", en: "Rock / Stone", te: "రాయి" },
        { icon: "⚡", sa: "विद्युत्", iast: "Vidyut", en: "Lightning", te: "మెరుపు" },
        { icon: "🌈", sa: "इन्द्रधनुः", iast: "Indradhanuḥ", en: "Rainbow", te: "ఇంద్రధనుస్సు" }
      ]
    },
    body: {
      label: "All Body Parts (शरीराङ्गानि)",
      items: [
        { icon: "🗣️", sa: "शिरः", iast: "Śiraḥ", en: "Head", te: "తల" },
        { icon: "💇", sa: "केशाः", iast: "Keśāḥ", en: "Hair", te: "జుట్టు" },
        { icon: "🧠", sa: "मस्तिष्कम्", iast: "Mastiṣkam", en: "Brain", te: "మెదడు" },
        { icon: "👁️", sa: "नेत्रम्", iast: "Netram", en: "Eye", te: "కన్ను" },
        { icon: "👂", sa: "कर्णः", iast: "Karṇaḥ", en: "Ear", te: "చెవి" },
        { icon: "👃", sa: "नासिका", iast: "Nāsikā", en: "Nose", te: "ముక్కు" },
        { icon: "👄", sa: "मुखम्", iast: "Mukham", en: "Mouth / Face", te: "ముఖం" },
        { icon: "🦷", sa: "दन्तः", iast: "Dantaḥ", en: "Tooth", te: "పన్ను" },
        { icon: "👅", sa: "जिह्वा", iast: "Jihvā", en: "Tongue", te: "నాలుక" },
        { icon: "💋", sa: "ओष्ठः", iast: "Oṣṭhaḥ", en: "Lip", te: "పెదవి" },
        { icon: "🧣", sa: "कण्ठः", iast: "Kaṇṭhaḥ", en: "Neck / Throat", te: "గొంతు" },
        { icon: "💪", sa: "बाहुः", iast: "Bāhuḥ", en: "Arm", te: "చేతి దండ" },
        { icon: "✋", sa: "हस्तः", iast: "Hastaḥ", en: "Hand", te: "చేయి" },
        { icon: "☝️", sa: "अङ्गुली", iast: "Aṅgulī", en: "Finger", te: "వేలు" },
        { icon: "💅", sa: "नखः", iast: "Nakhaḥ", en: "Nail", te: "గోరు" },
        { icon: "❤️", sa: "हृदयम्", iast: "Hṛdayam", en: "Heart", te: "హృదయం" },
        { icon: "🫁", sa: "वक्षः", iast: "Vakṣaḥ", en: "Chest", te: "ఛాతీ" },
        { icon: "🤰", sa: "उदरम्", iast: "Udaram", en: "Stomach", te: "కడుపు" },
        { icon: "🦵", sa: "जानु", iast: "Jānu", en: "Knee", te: "మోకాలు" },
        { icon: "🦶", sa: "पादः", iast: "Pādaḥ", en: "Foot", te: "పాదం" }
      ]
    },
    objects: {
      label: "Home & Study (गृहं विद्या च)",
      items: [
        { icon: "🏠", sa: "गृहम्", iast: "Gṛham", en: "House", te: "ఇల్లు" },
        { icon: "🚪", sa: "द्वारम्", iast: "Dvāram", en: "Door", te: "తలుపు" },
        { icon: "🪟", sa: "वातायनम्", iast: "Vātāyanam", en: "Window", te: "కిటికీ" },
        { icon: "🛏️", sa: "शय्या", iast: "Śayyā", en: "Bed", te: "మంచం" },
        { icon: "🪑", sa: "आसन्दः", iast: "Āsandaḥ", en: "Chair", te: "కుర్చీ" },
        { icon: "🪔", sa: "दीपः", iast: "Dīpaḥ", en: "Lamp", te: "దీపం" },
        { icon: "🕰️", sa: "घटी", iast: "Ghaṭī", en: "Clock", te: "గడియారం" },
        { icon: "🪞", sa: "दर्पणः", iast: "Darpaṇaḥ", en: "Mirror", te: "అద్దం" },
        { icon: "🔑", sa: "कुञ्चिका", iast: "Kuñcikā", en: "Key", te: "తాళపు చెవి" },
        { icon: "📖", sa: "पुस्तकम्", iast: "Pustakam", en: "Book", te: "పుస్తకం" },
        { icon: "✒️", sa: "लेखनी", iast: "Lekhanī", en: "Pen", te: "కలం" },
        { icon: "📄", sa: "कर्गदम्", iast: "Kargadam", en: "Paper", te: "కాగితం" },
        { icon: "🎒", sa: "स्यूतः", iast: "Syūtaḥ", en: "Bag", te: "సంచి" },
        { icon: "☂️", sa: "छत्रम्", iast: "Chatram", en: "Umbrella", te: "గొడుగు" },
        { icon: "🛕", sa: "मन्दिरम्", iast: "Mandiram", en: "Temple", te: "దేవాలయం" },
        { icon: "🚗", sa: "वाहनम्", iast: "Vāhanam", en: "Vehicle", te: "వాహనం" }
      ]
    },
    fruits_food: {
      label: "Fruits & Food (फलानि अन्नं च)",
      items: [
        { icon: "🥭", sa: "आम्रम्", iast: "Āmram", en: "Mango", te: "మామిడి" },
        { icon: "🍌", sa: "कदलीफलम्", iast: "Kadalīphalam", en: "Banana", te: "అరటిపండు" },
        { icon: "🍎", sa: "सेवम्", iast: "Sevam", en: "Apple", te: "ఆపిల్" },
        { icon: "🍇", sa: "द्राक्षा", iast: "Drākṣā", en: "Grapes", te: "ద్రాక్ష" },
        { icon: "🥥", sa: "नारिकेलम्", iast: "Nārikelam", en: "Coconut", te: "కొబ్బరికాయ" },
        { icon: "🍋", sa: "जम्बीरम्", iast: "Jambīram", en: "Lemon", te: "నిమ్మకాయ" },
        { icon: "🍊", sa: "नारङ्गम्", iast: "Nāraṅgam", en: "Orange (Fruit)", te: "నారింజ" },
        { icon: "🍚", sa: "अन्नम्", iast: "Annam", en: "Food / Rice", te: "అన్నం" },
        { icon: "🥛", sa: "दुग्धम्", iast: "Dugdhaṁ", en: "Milk", te: "పాలు" },
        { icon: "🍯", sa: "मधु", iast: "Madhu", en: "Honey", te: "తేనె" },
        { icon: "🧈", sa: "घृतम्", iast: "Ghṛtam", en: "Ghee", te: "నెయ్యి" },
        { icon: "🧂", sa: "लवणम्", iast: "Lavaṇam", en: "Salt", te: "ఉప్పు" },
        { icon: "🍬", sa: "शर्करा", iast: "Śarkarā", en: "Sugar", te: "చక్కెర" },
        { icon: "🍮", sa: "मिष्टान्नम्", iast: "Miṣṭānnam", en: "Sweet / Dessert", te: "మిఠాయి" }
      ]
    },
    numbers: {
      label: "Numbers (सङ्ख्याः 1–1000)",
      items: [
        { icon: "1️⃣", sa: "एकम्", iast: "Ekam", en: "One (1)", te: "ఒకటి" },
        { icon: "2️⃣", sa: "द्वे", iast: "Dve", en: "Two (2)", te: "రెండు" },
        { icon: "3️⃣", sa: "त्रीणि", iast: "Trīṇi", en: "Three (3)", te: "మూడు" },
        { icon: "4️⃣", sa: "चत्वारि", iast: "Catvāri", en: "Four (4)", te: "నాలుగు" },
        { icon: "5️⃣", sa: "पञ्च", iast: "Pañca", en: "Five (5)", te: "ఐదు" },
        { icon: "6️⃣", sa: "षट्", iast: "Ṣaṭ", en: "Six (6)", te: "ఆరు" },
        { icon: "7️⃣", sa: "सप्त", iast: "Sapta", en: "Seven (7)", te: "ఏడు" },
        { icon: "8️⃣", sa: "अष्ट", iast: "Aṣṭa", en: "Eight (8)", te: "ఎనిమిది" },
        { icon: "9️⃣", sa: "नव", iast: "Nava", en: "Nine (9)", te: "తొమ్మిది" },
        { icon: "🔟", sa: "दश", iast: "Daśa", en: "Ten (10)", te: "పది" },
        { icon: "💯", sa: "शतम्", iast: "Śatam", en: "Hundred (100)", te: "వంద" },
        { icon: "🔢", sa: "सहस्रम्", iast: "Sahasram", en: "Thousand (1000)", te: "వెయ్యి" }
      ]
    },
    seasons: {
      label: "All 6 Seasons (षड्-ऋतवः)",
      items: [
        { icon: "🌸", sa: "वसन्तः", iast: "Vasantaḥ", en: "Spring", te: "వసంత ఋతువు" },
        { icon: "☀️", sa: "ग्रीष्मः", iast: "Grīṣmaḥ", en: "Summer", te: "గ్రీష్మ ఋతువు" },
        { icon: "🌧️", sa: "वर्षा", iast: "Varṣā", en: "Monsoon / Rainy", te: "వర్ష ఋతువు" },
        { icon: "🍂", sa: "शरत्", iast: "Śarat", en: "Autumn", te: "శరదృతువు" },
        { icon: "🌫️", sa: "हेमन्तः", iast: "Hemantaḥ", en: "Pre-Winter", te: "హేమంత ఋతువు" },
        { icon: "❄️", sa: "शिशिरः", iast: "Śiśiraḥ", en: "Winter", te: "శిశిర ఋతువు" }
      ]
    },
    time_days: {
      label: "Days & Times of Day (वासराः कालश्च)",
      items: [
        { icon: "☀️", sa: "रविवासरः", iast: "Ravivāsaraḥ", en: "Sunday", te: "ఆదివారం" },
        { icon: "🌙", sa: "सोमवासरः", iast: "Somavāsaraḥ", en: "Monday", te: "సోమవారం" },
        { icon: "🔥", sa: "मङ्गलवासरः", iast: "Maṅgalavāsaraḥ", en: "Tuesday", te: "మంగళవారం" },
        { icon: "🌿", sa: "बुधवासरः", iast: "Budhavāsaraḥ", en: "Wednesday", te: "బుధవారం" },
        { icon: "📜", sa: "गुरुवासरः", iast: "Guruvāsaraḥ", en: "Thursday", te: "గురువారం" },
        { icon: "✨", sa: "शुक्रवासरः", iast: "Śukravāsaraḥ", en: "Friday", te: "శుక్రవారం" },
        { icon: "🪐", sa: "शनिवासरः", iast: "Śanivāsaraḥ", en: "Saturday", te: "శనివారం" },
        { icon: "🌄", sa: "प्रभातम्", iast: "Prabhātam", en: "Morning", te: "ఉదయం" },
        { icon: "🌞", sa: "मध्याह्नः", iast: "Madhyāhnaḥ", en: "Noon / Midday", te: "మధ్యాహ్నం" },
        { icon: "🌆", sa: "सायाह्नः", iast: "Sāyāhnaḥ", en: "Evening", te: "సాయంత్రం" },
        { icon: "🌃", sa: "रात्रिः", iast: "Rātriḥ", en: "Night", te: "రాత్రి" },
        { icon: "📅", sa: "अद्य", iast: "Adya", en: "Today", te: "ఈరోజు" },
        { icon: "⏪", sa: "ह्यः", iast: "Hyaḥ", en: "Yesterday", te: "నిన్న" },
        { icon: "⏩", sa: "श्वः", iast: "Śvaḥ", en: "Tomorrow", te: "రేపు" }
      ]
    },
    directions: {
      label: "Directions & Corners (दश दिशः)",
      items: [
        { icon: "➡️", sa: "पूर्वम्", iast: "Pūrvam", en: "East", te: "తూర్పు" },
        { icon: "⬅️", sa: "पश्चिमम्", iast: "Paścimam", en: "West", te: "పడమర" },
        { icon: "⬆️", sa: "उत्तरम्", iast: "Uttaram", en: "North", te: "ఉత్తరం" },
        { icon: "⬇️", sa: "दक्षिणम्", iast: "Dakṣiṇam", en: "South", te: "దక్షిణం" },
        { icon: "↗️", sa: "ईशान्यम्", iast: "Īśānyam", en: "North-East", te: "ఈశాన్యం" },
        { icon: "↘️", sa: "आग्नेयम्", iast: "Āgneyam", en: "South-East", te: "ఆగ్నేయం" },
        { icon: "↙️", sa: "नैऋत्यम्", iast: "Nairṛtyam", en: "South-West", te: "నైరుతి" },
        { icon: "↖️", sa: "वायव्यम्", iast: "Vāyavyam", en: "North-West", te: "వాయువ్యం" },
        { icon: "⏫", sa: "ऊर्ध्वम्", iast: "Ūrdhvam", en: "Up / Above", te: "పైన" },
        { icon: "⏬", sa: "अधः", iast: "Adhaḥ", en: "Down / Below", te: "కింద" }
      ]
    }
  };

  const MAHESVARA_14 = [
    ["1. अ इ उ ण्", "a i u (ṇ)"], ["2. ऋ ऌ क्", "ṛ ḷ (k)"], ["3. ए ओ ङ्", "e o (ṅ)"], ["4. ऐ औ च्", "ai au (c)"],
    ["5. ह य व र ट्", "ha ya va ra (ṭ)"], ["6. ल ण्", "la (ṇ)"], ["7. ञ म ङ ण न म्", "ña ma ṅa ṇa na (m)"],
    ["8. झ भ ञ्", "jha bha (ñ)"], ["9. घ ढ ध ष्", "gha ḍha dha (ṣ)"], ["10. ज ब ग ड द श्", "ja ba ga ḍa da (ś)"],
    ["11. ख फ छ ठ थ च ट त व्", "kha pha cha ṭha tha ca ṭa ta (v)"], ["12. क प य्", "ka pa (y)"],
    ["13. श ष स र्", "śa ṣa sa (r)"], ["14. ह ल्", "ha (l)"]
  ];

  const PRATYAHARAS = {
    ac: { label: "अच् (ac) — All Vowels", res: "अ इ उ ऋ ऌ ए ओ ऐ औ (Sūtras 1–4)" },
    hal: { label: "हल् (hal) — All Consonants", res: "ह य व र ... श ष स ह (Sūtras 5–14)" },
    al: { label: "अल् (al) — Entire Alphabet", res: "All Vowels + All Consonants (Sūtras 1–14)" },
    yan: { label: "यण् (yaṇ) — Semivowels", res: "य व र ल (used in Yaṇ Sandhi)" },
    jas: { label: "जश् (jaś) — Voiced Unaspirated Stops", res: "ज ब ग ड द (used in Jaśtva Sandhi)" },
    sal: { label: "शल् (śal) — Sibilants + H", res: "श ष स ह (Ūṣmaṇaḥ / Aspirates)" }
  };

  const NOUN_TABLES = {
    masc: {
      title: "Masculine अ-ending: राम (Rāma)",
      rows: [
        ["1. Prathamā (Subject)", "रामः", "रामौ", "रामाः"],
        ["2. Dvitīyā (Object)", "रामम्", "रामौ", "रामान्"],
        ["3. Tṛtīyā (By / With)", "रामेण", "रामाभ्याम्", "रामैः"],
        ["4. Caturthī (For / To)", "रामाय", "रामाभ्याम्", "रामेभ्यः"],
        ["5. Pañcamī (From)", "रामात्", "रामाभ्याम्", "रामेभ्यः"],
        ["6. Ṣaṣṭhī (Of / 's)", "रामस्य", "रामयोः", "रामाणाम्"],
        ["7. Saptamī (In / On)", "रामे", "रामयोः", "रामेषु"],
        ["8. Sambodhana (O!)", "हे राम", "हे रामौ", "हे रामाः"]
      ]
    },
    fem: {
      title: "Feminine आ-ending: रमा (Ramā)",
      rows: [
        ["1. Prathamā (Subject)", "रमा", "रमे", "रमाः"],
        ["2. Dvitīyā (Object)", "रमाम्", "रमे", "रमाः"],
        ["3. Tṛtīyā (By / With)", "रमया", "रमाभ्याम्", "रमाभिः"],
        ["4. Caturthī (For / To)", "रमायै", "रमाभ्याम्", "रमाभ्यः"],
        ["5. Pañcamī (From)", "रमायाः", "रमाभ्याम्", "रमाभ्यः"],
        ["6. Ṣaṣṭhī (Of / 's)", "रमायाः", "रमयोः", "रमाणाम्"],
        ["7. Saptamī (In / On)", "रमायाम्", "रमयोः", "रमासु"],
        ["8. Sambodhana (O!)", "हे रमे", "हे रमे", "हे रमाः"]
      ]
    },
    neut: {
      title: "Neuter अ-ending: फल (Phala — Fruit)",
      rows: [
        ["1. Prathamā (Subject)", "फलम्", "फले", "फलानि"],
        ["2. Dvitīyā (Object)", "फलम्", "फले", "फलानि"],
        ["3. Tṛtīyā (By / With)", "फलेन", "फलाभ्याम्", "फलैः"],
        ["4. Caturthī (For / To)", "फलाय", "फलाभ्याम्", "फलेभ्यः"],
        ["5. Pañcamī (From)", "फलात्", "फलाभ्याम्", "फलेभ्यः"],
        ["6. Ṣaṣṭhī (Of / 's)", "फलस्य", "फलयोः", "फलानाम्"],
        ["7. Saptamī (In / On)", "फले", "फलयोः", "फलेषु"],
        ["8. Sambodhana (O!)", "हे फल", "हे फले", "हे फलानि"]
      ]
    }
  };

  const LAKARA_DATA = {
    path: {
      name: "पठ् (Paṭh — To Read)",
      lat: ["पठति / पठतः / पठन्ति", "पठसि / पठथः / पठथ", "पठामि / पठावः / पठामः"],
      lang: ["अपठत् / अपठताम् / अपठन्", "अपठः / अपठतम् / अपठत", "अपठम् / अपठाव / अपठाम"],
      lrt: ["पठिष्यति / पठिष्यतः / पठिष्यन्ति", "पठिष्यसि / पठिष्यथः / पठिष्यथ", "पठिष्यामि / पठिष्यावः / पठिष्यामः"],
      lot: ["पठतु / पठताम् / पठन्तु", "पठ / पठतम् / पठत", "पठानि / पठाव / पठाम"],
      vidhi: ["पठेत् / पठेताम् / पठेयुः", "पठेः / पठेतम् / पठेत", "पठेयम् / पठेव / पठेम"]
    },
    gam: {
      name: "गम् → गच्छ् (Gam — To Go)",
      lat: ["गच्छति / गच्छतः / गच्छन्ति", "गच्छसि / गच्छथः / गच्छथ", "गच्छामि / गच्छावः / गच्छामः"],
      lang: ["अगच्छत् / अगच्छताम् / अगच्छन्", "अगच्छः / अगच्छतम् / अगच्छत", "अगच्छम् / अगच्छाव / अगच्छाम"],
      lrt: ["गमिष्यति / गमिष्यतः / गमिष्यन्ति", "गमिष्यसि / गमिष्यथः / गमिष्यथ", "गमिष्यामि / गमिष्यावः / गमिष्यामः"],
      lot: ["गच्छतु / गच्छताम् / गच्छन्तु", "गच्छ / गच्छतम् / गच्छत", "गच्छानि / गच्छाव / गच्छाम"],
      vidhi: ["गच्छेत् / गच्छेताम् / गच्छेयुः", "गच्छेः / गच्छेतम् / गच्छेत", "गच्छेयम् / गच्छेव / गच्छेम"]
    },
    bhu: {
      name: "भू → भव् (Bhū — To Be / Become)",
      lat: ["भवति / भवतः / भवन्ति", "भवसि / भवथः / भवथ", "भवामि / भवावः / भवामः"],
      lang: ["अभवत् / अभवताम् / अभवन्", "अभवः / अभवतम् / अभवत", "अभवम् / अभवाव / अभवाम"],
      lrt: ["भविष्यति / भविष्यतः / भविष्यन्ति", "भविष्यसि / भविष्यथः / भविष्यथ", "भविष्यामि / भविष्यावः / भविष्यामः"],
      lot: ["भवतु / भवताम् / भवन्तु", "भव / भवतम् / भवत", "भवानि / भवाव / भवाम"],
      vidhi: ["भवेत् / भवेताम् / भवेयुः", "भवेः / भवेतम् / भवेत", "भवेयम् / भवेव / भवेम"]
    }
  };

  const SAMASAS_6 = [
    ["1. Avyayībhāva (अव्ययीभावः)", "First word is an indeclinable; compound acts as adverb. Ex: यथाशक्ति (according to strength), उपगङ्गम् (near Gaṅgā)."],
    ["2. Tatpuruṣa (तत्पुरुषः)", "Second word is primary; first drops case ending. Ex: राजपुरुषः (राज्ञः पुरुषः — King's officer)."],
    ["3. Karmadhāraya (कर्मधारयः)", "Adjective + Noun in same case. Ex: नीलोत्पलम् (blue lotus), महापुरुषः (great person)."],
    ["4. Dvigu (द्विगुः)", "First member is a number; expresses an aggregate. Ex: पञ्चवटी (5 banyans), त्रिभुवनम् (3 worlds)."],
    ["5. Dvandva (द्वन्द्वः)", "Both members equal ('and'). Ex: रामलक्ष्मणौ (Rāma & Lakṣmaṇa), सुखदुःखे (pleasure & pain)."],
    ["6. Bahuvrīhi (बहुव्रीहिः)", "Refers to an external third entity. Ex: पीताम्बरः (yellow-garmented = Viṣṇu), चक्रपाणिः (discus in hand)."]
  ];

  const ANVAYA_SHLOKAS = [
    {
      title: "1. Vidyā Dadāti Vinayam (Subhāṣita)",
      verse: "विद्या ददाति विनयं विनयाद्याति पात्रताम् ।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम् ॥",
      padaccheda: "विद्या + ददाति + विनयम् । विनयात् + याति + पात्रताम् । पात्रत्वात् + धनम् + आप्नोति । धनात् + धर्मम् + ततः + सुखम् ॥",
      anvaya: "विद्या विनयं ददाति, (नरः) विनयात् पात्रतां याति, पात्रत्वात् धनम् आप्नोति, धनात् धर्मं (प्राप्नोति), ततः सुखं (लभते) ।",
      words: "विद्या (1st: Knowledge) • ददाति (gives) • विनयम् (2nd: humility) • विनयात् (5th: from humility) • पात्रताम् (2nd: worthiness) • आप्नोति (attains) • धनात् (5th: from wealth) • धर्मम् (righteousness) • सुखम् (happiness)."
    },
    {
      title: "2. Udyamena Hi Sidhyanti (Hitopadeśa)",
      verse: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः ।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः ॥",
      padaccheda: "उद्यमेन + हि + सिध्यन्ति + कार्याणि + न + मनोरथैः । न + हि + सुप्तस्य + सिंहस्य + प्रविशन्ति + मुखे + मृगाः ॥",
      anvaya: "कार्याणि उद्यमेन हि सिध्यन्ति, मनोरथैः न । सुप्तस्य सिंहस्य मुखे मृगाः न हि प्रविशन्ति ।",
      words: "उद्यमेन (3rd: by effort) • कार्याणि (1st pl: tasks) • सिध्यन्ति (succeed) • मनोरथैः (3rd pl: by mere wishes) • सुप्तस्य सिंहस्य (6th: of a sleeping lion) • मुखे (7th: into the mouth) • मृगाः (1st pl: deer) • प्रविशन्ति (enter)."
    },
    {
      title: "3. Karmanye Vādhikāraste (Bhagavad Gītā II.47)",
      verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
      padaccheda: "कर्मणि + एव + अधिकारः + ते + मा + फलेषु + कदाचन । मा + कर्मफलहेतुः + भूः + मा + ते + सङ्गः + अस्तु + अकर्मणि ॥",
      anvaya: "ते अधिकारः कर्मणि एव (अस्ति), फलेषु कदाचन मा (अस्तु) । (त्वं) कर्मफलहेतुः मा भूः, ते सङ्गः अकर्मणि मा अस्तु ।",
      words: "ते (6th: your) • अधिकारः (1st: right/duty) • कर्मणि (7th: in action) • फलेषु (7th pl: in fruits) • कदाचन (ever) • मा (do not) • सङ्गः (attachment) • अकर्मणि (7th: in inaction)."
    }
  ];

  // Vast Sentence Builder Data (10 Subjects × 12 Objects × 8 Verbs × 5 Lakaras × 6 Adverbs)
  const VAST_SENTENCE = {
    adverb: [
      { sa: "", iast: "", en: "" },
      { sa: "अद्य", iast: "Adya", en: "Today," },
      { sa: "नित्यम्", iast: "Nityam", en: "Daily," },
      { sa: "ह्यः", iast: "Hyaḥ", en: "Yesterday," },
      { sa: "श्वः", iast: "Śvaḥ", en: "Tomorrow," },
      { sa: "गृहे", iast: "Gṛhe", en: "At home," }
    ],
    subj: [
      { sa: "अहम्", iast: "Aham", en: "I", p: "1s" },
      { sa: "आवाम्", iast: "Āvām", en: "We two", p: "1d" },
      { sa: "वयम्", iast: "Vayam", en: "We all", p: "1p" },
      { sa: "त्वम्", iast: "Tvam", en: "You", p: "2s" },
      { sa: "यूयम्", iast: "Yūyam", en: "You all", p: "2p" },
      { sa: "बालकः", iast: "Bālakaḥ", en: "The boy", p: "3s" },
      { sa: "बालिका", iast: "Bālikā", en: "The girl", p: "3s" },
      { sa: "गुरुः", iast: "Guruḥ", en: "The teacher", p: "3s" },
      { sa: "मित्रम्", iast: "Mitram", en: "The friend", p: "3s" },
      { sa: "छात्राः", iast: "Chātrāḥ", en: "The students", p: "3p" }
    ],
    obj: [
      { sa: "पुस्तकम्", iast: "pustakam", en: "a book" },
      { sa: "संस्कृतम्", iast: "Saṁskṛtam", en: "Sanskrit" },
      { sa: "श्लोकम्", iast: "ślokam", en: "a verse" },
      { sa: "पत्रम्", iast: "patram", en: "a letter" },
      { sa: "गीतम्", iast: "gītam", en: "a song" },
      { sa: "सत्यम्", iast: "satyam", en: "the truth" },
      { sa: "जलम्", iast: "jalam", en: "water" },
      { sa: "फलम्", iast: "phalam", en: "a fruit" },
      { sa: "अन्नम्", iast: "annam", en: "food" },
      { sa: "गृहम्", iast: "gṛham", en: "home" },
      { sa: "विद्यालयम्", iast: "vidyālayam", en: "school" },
      { sa: "चन्द्रम्", iast: "candram", en: "the moon" }
    ],
    verb: {
      path: {
        label: "पठ् (Read)",
        lat: { "1s": ["पठामि","paṭhāmi","read"], "1d": ["पठावः","paṭhāvaḥ","read"], "1p": ["पठामः","paṭhāmaḥ","read"], "2s": ["पठसि","paṭhasi","read"], "2p": ["पठथ","paṭhatha","read"], "3s": ["पठति","paṭhati","reads"], "3p": ["पठन्ति","paṭhanti","read"] },
        lang: { "1s": ["अपठम्","apaṭham","read (past)"], "1d": ["अपठाव","apaṭhāva","read (past)"], "1p": ["अपठाम","apaṭhāma","read (past)"], "2s": ["अपठः","apaṭhaḥ","read (past)"], "2p": ["अपठत","apaṭhata","read (past)"], "3s": ["अपठत्","apaṭhat","read (past)"], "3p": ["अपठन्","apaṭhan","read (past)"] },
        lrt: { "1s": ["पठिष्यामि","paṭhiṣyāmi","will read"], "1d": ["पठिष्यावः","paṭhiṣyāvaḥ","will read"], "1p": ["पठिष्यामः","paṭhiṣyāmaḥ","will read"], "2s": ["पठिष्यसि","paṭhiṣyasi","will read"], "2p": ["पठिष्यथ","paṭhiṣyatha","will read"], "3s": ["पठिष्यति","paṭhiṣyati","will read"], "3p": ["पठिष्यन्ति","paṭhiṣyanti","will read"] },
        lot: { "1s": ["पठानि","paṭhāni","may I read"], "1d": ["पठाव","paṭhāva","let us two read"], "1p": ["पठाम","paṭhāma","let us read"], "2s": ["पठ","paṭha","read!"], "2p": ["पठत","paṭhata","read!"], "3s": ["पठतु","paṭhatu","let him/her read"], "3p": ["पठन्तु","paṭhantu","let them read"] }
      },
      likh: {
        label: "लिख् (Write)",
        lat: { "1s": ["लिखामि","likhāmi","write"], "1d": ["लिखावः","likhāvaḥ","write"], "1p": ["लिखामः","likhāmaḥ","write"], "2s": ["लिखसि","likhasi","write"], "2p": ["लिखथ","likhatha","write"], "3s": ["लिखति","likhati","writes"], "3p": ["लिखन्ति","likhanti","write"] },
        lang: { "1s": ["अलिखम्","alikham","wrote"], "1d": ["अलिखाव","alikhāva","wrote"], "1p": ["अलिखाम","alikhāma","wrote"], "2s": ["अलिखः","alikhaḥ","wrote"], "2p": ["अलिखत","alikhata","wrote"], "3s": ["अलिखत्","alikhat","wrote"], "3p": ["अलिखन्","alikhan","wrote"] },
        lrt: { "1s": ["लेखिष्यामि","lekhiṣyāmi","will write"], "1d": ["लेखिष्यावः","lekhiṣyāvaḥ","will write"], "1p": ["लेखिष्यामः","lekhiṣyāmaḥ","will write"], "2s": ["लेखिष्यसि","lekhiṣyasi","will write"], "2p": ["लेखिष्यथ","lekhiṣyatha","will write"], "3s": ["लेखिष्यति","lekhiṣyati","will write"], "3p": ["लेखिष्यन्ति","lekhiṣyanti","will write"] },
        lot: { "1s": ["लिखानि","likhāni","may I write"], "1d": ["लिखाव","likhāva","let us two write"], "1p": ["लिखाम","likhāma","let us write"], "2s": ["लिख","likha","write!"], "2p": ["लिखत","likhata","write!"], "3s": ["लिखतु","likhatu","let him/her write"], "3p": ["लिखन्तु","likhantu","let them write"] }
      },
      vad: {
        label: "वद् (Speak)",
        lat: { "1s": ["वदामि","vadāmi","speak"], "1d": ["वदावः","vadāvaḥ","speak"], "1p": ["वदामः","vadāmaḥ","speak"], "2s": ["वदसि","vadasi","speak"], "2p": ["वदथ","vadatha","speak"], "3s": ["वदति","vadati","speaks"], "3p": ["वदन्ति","vadanti","speak"] },
        lang: { "1s": ["अवदम्","avadam","spoke"], "1d": ["अवदाव","avadāva","spoke"], "1p": ["अवदाम","avadāma","spoke"], "2s": ["अवदः","avadaḥ","spoke"], "2p": ["अवदत","avadata","spoke"], "3s": ["अवदत्","avadat","spoke"], "3p": ["अवदन्","avadan","spoke"] },
        lrt: { "1s": ["वदिष्यामि","vadiṣyāmi","will speak"], "1d": ["वदिष्यावः","vadiṣyāvaḥ","will speak"], "1p": ["वदिष्यामः","vadiṣyāmaḥ","will speak"], "2s": ["वदिष्यसि","vadiṣyasi","will speak"], "2p": ["वदिष्यथ","vadiṣyatha","will speak"], "3s": ["वदिष्यति","vadiṣyati","will speak"], "3p": ["वदिष्यन्ति","vadiṣyanti","will speak"] },
        lot: { "1s": ["वदानि","vadāni","may I speak"], "1d": ["वदाव","vadāva","let us two speak"], "1p": ["वदाम","vadāma","let us speak"], "2s": ["वद","vada","speak!"], "2p": ["वदत","vadata","speak!"], "3s": ["वदतु","vadatu","let him/her speak"], "3p": ["वदन्तु","vadantu","let them speak"] }
      },
      gam: {
        label: "गम् (Go to)",
        lat: { "1s": ["गच्छामि","gacchāmi","go to"], "1d": ["गच्छावः","gacchāvaḥ","go to"], "1p": ["गच्छामः","gacchāmaḥ","go to"], "2s": ["गच्छसि","gacchasi","go to"], "2p": ["गच्छथ","gacchatha","go to"], "3s": ["गच्छति","gacchati","goes to"], "3p": ["गच्छन्ति","gacchanti","go to"] },
        lang: { "1s": ["अगच्छम्","agaccham","went to"], "1d": ["अगच्छाव","agacchāva","went to"], "1p": ["अगच्छाम","agacchāma","went to"], "2s": ["अगच्छः","agacchaḥ","went to"], "2p": ["अगच्छत","agacchata","went to"], "3s": ["अगच्छत्","agacchat","went to"], "3p": ["अगच्छन्","agacchan","went to"] },
        lrt: { "1s": ["गमिष्यामि","gamiṣyāmi","will go to"], "1d": ["गमिष्यावः","gamiṣyāvaḥ","will go to"], "1p": ["गमिष्यामः","gamiṣyāmaḥ","will go to"], "2s": ["गमिष्यसि","gamiṣyasi","will go to"], "2p": ["गमिष्यथ","gamiṣyatha","will go to"], "3s": ["गमिष्यति","gamiṣyati","will go to"], "3p": ["गमिष्यन्ति","gamiṣyanti","will go to"] },
        lot: { "1s": ["गच्छानि","gacchāni","may I go to"], "1d": ["गच्छाव","gacchāva","let us two go to"], "1p": ["गच्छाम","gacchāma","let us go to"], "2s": ["गच्छ","gaccha","go to!"], "2p": ["गच्छत","gacchata","go to!"], "3s": ["गच्छतु","gacchatu","let him/her go to"], "3p": ["गच्छन्तु","gacchantu","let them go to"] }
      },
      khad: {
        label: "खाद् (Eat)",
        lat: { "1s": ["खादामि","khādāmi","eat"], "1d": ["खादावः","khādāvaḥ","eat"], "1p": ["खादामः","khādāmaḥ","eat"], "2s": ["खादसि","khādasi","eat"], "2p": ["खादथ","khādatha","eat"], "3s": ["खादति","khādati","eats"], "3p": ["खादन्ति","khādanti","eat"] },
        lang: { "1s": ["अखादम्","akhādam","ate"], "1d": ["अखादाव","akhādāva","ate"], "1p": ["अखादाम","akhādāma","ate"], "2s": ["अखादः","akhādaḥ","ate"], "2p": ["अखादत","akhādata","ate"], "3s": ["अखादत्","akhādat","ate"], "3p": ["अखादन्","akhādan","ate"] },
        lrt: { "1s": ["खादिष्यामि","khādiṣyāmi","will eat"], "1d": ["खादिष्यावः","khādiṣyāvaḥ","will eat"], "1p": ["खादिष्यामः","khādiṣyāmaḥ","will eat"], "2s": ["खादिष्यसि","khādiṣyasi","will eat"], "2p": ["खादिष्यथ","khādiṣyatha","will eat"], "3s": ["खादिष्यति","khādiṣyati","will eat"], "3p": ["खादिष्यन्ति","khādiṣyanti","will eat"] },
        lot: { "1s": ["खादानि","khādāni","may I eat"], "1d": ["खादाव","khādāva","let us two eat"], "1p": ["खादाम","khādāma","let us eat"], "2s": ["खाद","khāda","eat!"], "2p": ["खादत","khādata","eat!"], "3s": ["खादतु","khādatu","let him/her eat"], "3p": ["खादन्तु","khādantu","let them eat"] }
      },
      dris: {
        label: "दृश्/पश्य् (See)",
        lat: { "1s": ["पश्यामि","paśyāmi","see"], "1d": ["पश्यावः","paśyāvaḥ","see"], "1p": ["पश्यामः","paśyāmaḥ","see"], "2s": ["पश्यसि","paśyasi","see"], "2p": ["पश्यथ","paśyatha","see"], "3s": ["पश्यति","paśyati","sees"], "3p": ["पश्यन्ति","paśyanti","see"] },
        lang: { "1s": ["अपश्यम्","apaśyam","saw"], "1d": ["अपश्याव","apaśyāva","saw"], "1p": ["अपश्याम","apaśyāma","saw"], "2s": ["अपश्यः","apaśyaḥ","saw"], "2p": ["अपश्यत","apaśyata","saw"], "3s": ["अपश्यत्","apaśyat","saw"], "3p": ["अपश्यन्","apaśyan","saw"] },
        lrt: { "1s": ["द्रक्ष्यामि","drakṣyāmi","will see"], "1d": ["द्रक्ष्यावः","drakṣyāvaḥ","will see"], "1p": ["द्रक्ष्यामः","drakṣyāmaḥ","will see"], "2s": ["द्रक्ष्यसि","drakṣyasi","will see"], "2p": ["द्रक्ष्यथ","drakṣyatha","will see"], "3s": ["द्रक्ष्यति","drakṣyati","will see"], "3p": ["द्रक्ष्यन्ति","drakṣyanti","will see"] },
        lot: { "1s": ["पश्यानि","paśyāni","may I see"], "1d": ["पश्याव","paśyāva","let us two see"], "1p": ["पश्याम","paśyāma","let us see"], "2s": ["पश्य","paśya","see!"], "2p": ["पश्यत","paśyata","see!"], "3s": ["पश्यतु","paśyatu","let him/her see"], "3p": ["पश्यन्तु","paśyantu","let them see"] }
      },
      pach: {
        label: "पच् (Cook)",
        lat: { "1s": ["पचामि","pacāmi","cook"], "1d": ["पचावः","pacāvaḥ","cook"], "1p": ["पचामः","pacāmaḥ","cook"], "2s": ["पचसि","pacasi","cook"], "2p": ["पचथ","pacatha","cook"], "3s": ["पचति","pacati","cooks"], "3p": ["पचन्ति","pacanti","cook"] },
        lang: { "1s": ["अपचम्","apacam","cooked"], "1d": ["अपचाव","apacāva","cooked"], "1p": ["अपचाम","apacāma","cooked"], "2s": ["अपचः","apacaḥ","cooked"], "2p": ["अपचत","apacata","cooked"], "3s": ["अपचत्","apacat","cooked"], "3p": ["अपचन्","apacan","cooked"] },
        lrt: { "1s": ["पक्ष्यामि","pakṣyāmi","will cook"], "1d": ["पक्ष्यावः","pakṣyāvaḥ","will cook"], "1p": ["पक्ष्यामः","pakṣyāmaḥ","will cook"], "2s": ["पक्ष्यसि","pakṣyasi","will cook"], "2p": ["पक्ष्यथ","pakṣyatha","will cook"], "3s": ["पक्ष्यति","pakṣyati","will cook"], "3p": ["पक्ष्यन्ति","pakṣyanti","will cook"] },
        lot: { "1s": ["पचानि","pacāni","may I cook"], "1d": ["पचाव","pacāva","let us two cook"], "1p": ["पचाम","pacāma","let us cook"], "2s": ["पच","paca","cook!"], "2p": ["पचत","pacata","cook!"], "3s": ["पचतु","pacatu","let him/her cook"], "3p": ["पचन्तु","pacantu","let them cook"] }
      },
      pib: {
        label: "पा/पिब् (Drink)",
        lat: { "1s": ["पिबामि","pibāmi","drink"], "1d": ["पिबावः","pibāvaḥ","drink"], "1p": ["पिबामः","pibāmaḥ","drink"], "2s": ["पिबसि","pibasi","drink"], "2p": ["पिबथ","pibatha","drink"], "3s": ["पिबति","pibati","drinks"], "3p": ["पिबन्ति","pibanti","drink"] },
        lang: { "1s": ["अपिबम्","apibam","drank"], "1d": ["अपिबाव","apibāva","drank"], "1p": ["अपिबाम","apibāma","drank"], "2s": ["अपिबः","apibaḥ","drank"], "2p": ["अपिबत","apibata","drank"], "3s": ["अपिबत्","apibat","drank"], "3p": ["अपिबन्","apiban","drank"] },
        lrt: { "1s": ["पास्यामि","pāsyāmi","will drink"], "1d": ["पास्यावः","pāsyāvaḥ","will drink"], "1p": ["पास्यामः","pāsyāmaḥ","will drink"], "2s": ["पास्यसि","pāsyasi","will drink"], "2p": ["पास्यथ","pāsyatha","will drink"], "3s": ["पास्यति","pāsyati","will drink"], "3p": ["पास्यन्ति","pāsyanti","will drink"] },
        lot: { "1s": ["पिबानि","pibāni","may I drink"], "1d": ["पिबाव","pibāva","let us two drink"], "1p": ["पिबाम","pibāma","let us drink"], "2s": ["पिब","piba","drink!"], "2p": ["पिबत","pibata","drink!"], "3s": ["पिबतु","pibatu","let him/her drink"], "3p": ["पिबन्तु","pibantu","let them drink"] }
      }
    }
  };

  const SPOKEN_PHRASES = [
    { cat: "Greetings & Polite", sa: "नमस्ते / नमो नमः", iast: "Namaste / Namo namaḥ", en: "Greetings / Salutations" },
    { cat: "Greetings & Polite", sa: "सुप्रभातम् / शुभरात्रिः", iast: "Suprabhātam / Śubharātriḥ", en: "Good morning / Good night" },
    { cat: "Greetings & Polite", sa: "भवान् / भवती कथमस्ति?", iast: "Bhavān / Bhavatī kathamasti?", en: "How are you? (m / f)" },
    { cat: "Greetings & Polite", sa: "अहं कुशली / कुशलिनी अस्मि।", iast: "Ahaṁ kuśalī / kuśalinī asmi.", en: "I am fine (m / f)." },
    { cat: "Greetings & Polite", sa: "धन्यवादः / स्वागतम्", iast: "Dhanyavādaḥ / Svāgatam", en: "Thank you / Welcome" },
    { cat: "Greetings & Polite", sa: "क्षम्यताम् / चिन्ता मास्तु", iast: "Kṣamyatām / Cintā māstu", en: "Excuse me / Do not worry" },
    { cat: "Introductions", sa: "भवतः / भवत्याः नाम किम्?", iast: "Bhavataḥ / Bhavatyāḥ nāma kim?", en: "What is your name? (m / f)" },
    { cat: "Introductions", sa: "मम नाम रामः अस्ति।", iast: "Mama nāma Rāmaḥ asti.", en: "My name is Rāma." },
    { cat: "Introductions", sa: "भवान् कुतः आगच्छति?", iast: "Bhavān kutaḥ āgacchati?", en: "Where are you coming from?" },
    { cat: "Daily Conversation", sa: "कृपया शनैः वदतु।", iast: "Kṛpayā śanaiḥ vadatu.", en: "Please speak slowly." },
    { cat: "Daily Conversation", sa: "एतस्य अर्थः कः?", iast: "Etasya arthaḥ kaḥ?", en: "What is the meaning of this?" },
    { cat: "Daily Conversation", sa: "कः समयः जातः?", iast: "Kaḥ samayaḥ jātaḥ?", en: "What time is it?" },
    { cat: "Daily Conversation", sa: "भोजनं बहु स्वादु अस्ति।", iast: "Bhojanaṁ bahu svādu asti.", en: "The food is very delicious." },
    { cat: "Daily Conversation", sa: "पुनर्मिलामः / शुभमस्तु।", iast: "Punarmilāmaḥ / Śubhamastu.", en: "See you again / May all be auspicious." }
  ];

  const BARAKHADI_CONSONANTS = [
    ["क","k"], ["ख","kh"], ["ग","g"], ["घ","gh"], ["च","c"], ["ज","j"],
    ["त","t"], ["द","d"], ["न","n"], ["प","p"], ["ब","b"], ["म","m"],
    ["य","y"], ["र","r"], ["ल","l"], ["व","v"], ["श","ś"], ["स","s"], ["ह","h"]
  ];
  const BARAKHADI_MATRAS = [
    ["", "a"], ["ा", "ā"], ["ि", "i"], ["ी", "ī"], ["ु", "u"], ["ू", "ū"],
    ["ृ", "ṛ"], ["े", "e"], ["ै", "ai"], ["ो", "o"], ["ौ", "au"], ["ं", "aṁ"], ["ः", "aḥ"]
  ];

  const EXERCISES = [
    { q: "1. Translate 'I read Sanskrit' into Sanskrit:", opts: ["अहं संस्कृतं पठति", "अहं संस्कृतं पठामि", "त्वं संस्कृतं पठामि"], ans: 1, exp: "First person singular 'अहम्' always takes '-आमि' (पठामि)." },
    { q: "2. Which Pratyāhāra in Pāṇini represents ALL vowels?", opts: ["हल् (hal)", "अच् (ac)", "यण् (yaṇ)"], ans: 1, exp: "अच् (ac) spans Māheśvara Sūtras 1–4, covering every vowel." },
    { q: "3. Which Vibhakti (case) is 'रामाय' (For Rāma)?", opts: ["3rd (Tṛtīyā)", "4th (Caturthī — Dative)", "6th (Ṣaṣṭhī — Genitive)"], ans: 1, exp: "Caturthī Vibhakti (-āya) expresses 'for / to whom something is given'." },
    { q: "4. What is the feminine 7th case (Saptamī) singular of रमा?", opts: ["रमायाम्", "रमायाः", "रमया"], ans: 0, exp: "रमायाम् = in/on Ramā (7th case singular)." },
    { q: "5. Combine via Guṇa Sandhi: सूर्य + उदयः =", opts: ["सूर्यौदयः", "सूर्योदयः", "सूर्यादयः"], ans: 1, exp: "a + u = o (Sūryodayaḥ)." },
    { q: "6. Combine via Visarga Sandhi: मनः + रथः =", opts: ["मनोरथः", "मनरथः", "मनासरथः"], ans: 0, exp: "Visarga preceded by 'a' and followed by voiced 'r' becomes 'o' (Manorathaḥ)." },
    { q: "7. Which Samāsa is 'पीताम्बरः' (Yellow-garmented = Viṣṇu)?", opts: ["Dvigu", "Bahuvrīhi", "Avyayībhāva"], ans: 1, exp: "Bahuvrīhi refers to an external person/object possessing the attribute." },
    { q: "8. What is the Past tense (Laṅ) 3rd-person singular of पठ्?", opts: ["पठिष्यति", "अपठत्", "पठतु"], ans: 1, exp: "अपठत् (he/she read). पठिष्यति is Future (Lṛṭ), पठतु is Imperative (Loṭ)." },
    { q: "9. In 'विद्या ददाति विनयम्', which word is the Subject (Prathamā)?", opts: ["विनयम्", "विद्या", "ददाति"], ans: 1, exp: "विद्या (Knowledge) is 1st case (Subject); विनयम् is 2nd case (Object)." },
    { q: "10. What is the Sanskrit word for 'Where?'", opts: ["कदा (Kadā)", "कुत्र (Kutra)", "किमर्थम् (Kimartham)"], ans: 1, exp: "कुत्र = Where; कदा = When; किमर्थम् = Why." },
    { q: "11. What is 'Maternal Uncle' (Mother's brother) in Sanskrit?", opts: ["पितृव्यः (Pitṛvyaḥ)", "मातुलः (Mātulaḥ)", "श्वशुरः (Śvaśuraḥ)"], ans: 1, exp: "मातुलः = Maternal Uncle; पितृव्यः = Paternal Uncle; श्वशुरः = Father-in-law." },
    { q: "12. Which Sanskrit word means 'Saffron / Ochre' color?", opts: ["काषायः (Kāṣāyaḥ)", "पाटलः (Pāṭalaḥ)", "धूसरः (Dhūsaraḥ)"], ans: 0, exp: "काषायः = Saffron/Ochre; पाटलः = Pink; धूसरः = Grey." },
    { q: "13. What is 'Daughter-in-law' in Sanskrit?", opts: ["जामाता (Jāmātā)", "स्नुषा (Snuṣā)", "ननान्दा (Nanāndā)"], ans: 1, exp: "स्नुषा = Daughter-in-law; जामाता = Son-in-law; ननान्दा = Husband's sister." },
    { q: "14. Which day of the week is गुरुवासरः (Guruvāsaraḥ)?", opts: ["Tuesday", "Thursday", "Saturday"], ans: 1, exp: "गुरुवासरः = Thursday (ruled by Bṛhaspati / Guru)." },
    { q: "15. What is 'North-East' direction in Sanskrit?", opts: ["आग्नेयम् (Āgneyam)", "ईशान्यम् (Īśānyam)", "वायव्यम् (Vāyavyam)"], ans: 1, exp: "ईशान्यम् = North-East; आग्नेयम् = South-East; वायव्यम् = North-West." }
  ];

  function speakSanskrit(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "hi-IN";
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }

  function initSanskritTutor() {
    const root = document.getElementById("sanskritTutorBody");
    if (!root) return;

    const allVocab = Object.values(PICTURE_VOCAB).flatMap(c => c.items);

    root.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;" id="sktLevelBtns">
        <button type="button" class="btn-primary skt-lvl-btn" data-lvl="pictures">🖼️ Picture-Word Studio (${allVocab.length} Words)</button>
        <button type="button" class="btn-ghost skt-lvl-btn" data-lvl="spoken">🗣️ Flashcards &amp; Spoken (संभाषणम्)</button>
        <button type="button" class="btn-ghost skt-lvl-btn" data-lvl="beginner">1. Beginner (वर्णमाला &amp; माहेश्वर)</button>
        <button type="button" class="btn-ghost skt-lvl-btn" data-lvl="intermediate">2. Intermediate (8 विभक्तयः &amp; 5 लकाराः)</button>
        <button type="button" class="btn-ghost skt-lvl-btn" data-lvl="pro">3. Pro (सन्धिः, समासः &amp; अन्वयः)</button>
      </div>
      <div id="sktLevelOut" style="margin-bottom:1.5rem;"></div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.25rem;">
        <div class="panel" style="margin:0;padding:1.15rem;background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.1);border-radius:12px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
            <h4 style="color:var(--gold-bright);margin:0;">Vast Sentence Builder (23,040+ Combos)</h4>
            <div style="display:flex;gap:0.35rem;">
              <button type="button" id="sktSentRand" class="btn-ghost" style="padding:0.22rem 0.55rem;font-size:0.75rem;">🎲 Random</button>
              <button type="button" id="sktSentSpeak" class="btn-ghost" style="padding:0.22rem 0.55rem;font-size:0.75rem;">🔊 Listen</button>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:0.65rem;">
            <select id="sktAdv" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.42rem;border-radius:8px;">
              ${VAST_SENTENCE.adverb.map((a, i) => `<option value="${i}">${a.sa ? a.sa + " (" + a.en.replace(",", "") + ")" : "(No Time/Place)"}</option>`).join("")}
            </select>
            <select id="sktSubj" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.42rem;border-radius:8px;">
              ${VAST_SENTENCE.subj.map((s, i) => `<option value="${i}">${s.sa} (${s.en})</option>`).join("")}
            </select>
            <select id="sktObj" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.42rem;border-radius:8px;">
              ${VAST_SENTENCE.obj.map((o, i) => `<option value="${i}">${o.sa} (${o.en})</option>`).join("")}
            </select>
            <select id="sktVerb" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.42rem;border-radius:8px;">
              ${Object.entries(VAST_SENTENCE.verb).map(([k, v]) => `<option value="${k}">${v.label}</option>`).join("")}
            </select>
            <select id="sktTense" style="grid-column:1 / -1;background:#0b101b;color:#fff;border:1px solid #334155;padding:0.42rem;border-radius:8px;">
              <option value="lat">Present (लट्)</option>
              <option value="lang">Past (लङ्)</option>
              <option value="lrt">Future (लृट्)</option>
              <option value="lot">Imperative / Command (लोट्)</option>
            </select>
          </div>
          <div id="sktSentOut" style="padding:0.85rem;background:rgba(245,185,66,0.08);border:1px solid rgba(245,185,66,0.3);border-radius:10px;"></div>
        </div>

        <div class="panel" style="margin:0;padding:1.15rem;background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.1);border-radius:12px;">
          <h4 style="color:var(--cyan-accent);margin-bottom:0.5rem;">Grammar Mastery Quiz (<span id="sktExScore">0</span> / ${EXERCISES.length})</h4>
          <div id="sktExList" style="max-height:360px;overflow-y:auto;padding-right:0.3rem;"></div>
        </div>
      </div>
    `;

    const lvlOut = document.getElementById("sktLevelOut");
    const lvlBtns = root.querySelectorAll(".skt-lvl-btn");

    const smallestCatKey = Object.entries(PICTURE_VOCAB)
      .reduce((minKey, [k, v]) => (v.items.length < PICTURE_VOCAB[minKey].items.length ? k : minKey), Object.keys(PICTURE_VOCAB)[0]);

    function renderPictures() {
      lvlOut.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;">
          <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(255,255,255,0.1);border-radius:10px;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">
              <strong style="color:var(--gold-bright);">Visual Picture-Word Cards (<span id="picCatCount"></span>)</strong>
              <select id="picCatSel" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.35rem 0.5rem;border-radius:6px;font-size:0.8rem;">
                ${Object.entries(PICTURE_VOCAB).map(([k, v]) => `<option value="${k}"${k === smallestCatKey ? " selected" : ""}>${v.label} (${v.items.length})</option>`).join("")}
              </select>
            </div>
            <div id="picCardsGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(122px,1fr));gap:0.55rem;max-height:390px;overflow-y:auto;padding-right:0.25rem;"></div>
          </div>

          <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(56,189,248,0.28);border-radius:10px;text-align:center;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.45rem;">
              <strong style="color:var(--cyan-accent);">Picture-to-Word Game</strong>
              <span style="font-size:0.8rem;color:var(--emerald-bright);">Score: <strong id="picGameScore">0</strong></span>
            </div>
            <div id="picPromptIcon" style="font-size:3.6rem;line-height:1.1;margin:0.4rem 0;display:flex;justify-content:center;align-items:center;"></div>
            <div id="picPromptEn" style="font-size:0.9rem;color:#cbd5e1;margin-bottom:0.65rem;"></div>
            <div id="picOpts" style="display:grid;grid-template-columns:1fr 1fr;gap:0.45rem;margin-bottom:0.55rem;"></div>
            <div id="picFeedback" style="font-size:0.82rem;min-height:1.2rem;"></div>
            <button type="button" id="picNextBtn" class="btn-primary" style="margin-top:0.45rem;padding:0.35rem 0.85rem;font-size:0.8rem;">Next Picture →</button>
          </div>
        </div>
      `;
      const catSel = document.getElementById("picCatSel");
      const grid = document.getElementById("picCardsGrid");
      const catCount = document.getElementById("picCatCount");
      const updCards = () => {
        const list = PICTURE_VOCAB[catSel.value].items;
        catCount.textContent = `${list.length} items`;
        grid.innerHTML = list.map((it, idx) => `
          <div class="pic-card-item" data-idx="${idx}" title="Click to listen" style="cursor:pointer;padding:0.55rem 0.4rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:9px;text-align:center;">
            ${it.hex
              ? `<div style="width:32px;height:32px;border-radius:50%;margin:0.15rem auto;background:${it.hex};border:2px solid rgba(255,255,255,0.35);"></div>`
              : `<div style="font-size:2rem;line-height:1.15;">${it.icon}</div>`}
            <div style="font-size:0.95rem;font-weight:700;color:var(--gold-bright);margin-top:0.2rem;">${it.sa}</div>
            <div style="font-size:0.72rem;color:var(--cyan-accent);">${it.iast}</div>
            <div style="font-size:0.72rem;color:#cbd5e1;">${it.en} • ${it.te}</div>
          </div>
        `).join("");
        grid.querySelectorAll(".pic-card-item").forEach(card => card.addEventListener("click", () => {
          speakSanskrit(list[Number(card.dataset.idx)].sa);
        }));
      };
      catSel.addEventListener("change", updCards);
      updCards();

      let picScore = 0;
      const pIcon = document.getElementById("picPromptIcon");
      const pEn = document.getElementById("picPromptEn");
      const pOpts = document.getElementById("picOpts");
      const pFeed = document.getElementById("picFeedback");
      const pNext = document.getElementById("picNextBtn");

      function nextPicQuestion() {
        pFeed.textContent = "";
        const target = allVocab[Math.floor(Math.random() * allVocab.length)];
        const pool = allVocab.filter(x => x.sa !== target.sa).sort(() => Math.random() - 0.5).slice(0, 3);
        const choices = [target, ...pool].sort(() => Math.random() - 0.5);
        pIcon.innerHTML = target.hex
          ? `<div style="width:56px;height:56px;border-radius:50%;background:${target.hex};border:3px solid rgba(255,255,255,0.45);"></div>`
          : target.icon;
        pEn.textContent = `${target.en} (${target.te})`;
        let locked = false;
        pOpts.innerHTML = choices.map(c => `<button type="button" class="btn-ghost pic-choice" data-sa="${c.sa}" style="padding:0.45rem;font-size:0.9rem;">${c.sa} <small style="opacity:0.75;">(${c.iast})</small></button>`).join("");
        pOpts.querySelectorAll(".pic-choice").forEach(btn => btn.addEventListener("click", () => {
          if (locked) return;
          locked = true;
          speakSanskrit(target.sa);
          if (btn.dataset.sa === target.sa) {
            picScore++;
            document.getElementById("picGameScore").textContent = String(picScore);
            btn.style.borderColor = "#10b981"; btn.style.color = "#6ee7b7";
            pFeed.innerHTML = `<span style="color:#6ee7b7;">✔ Correct! ${target.sa} (${target.iast}) = ${target.en}</span>`;
          } else {
            btn.style.borderColor = "#f43f5e"; btn.style.color = "#fda4af";
            pFeed.innerHTML = `<span style="color:#fda4af;">✘ Answer: ${target.sa} (${target.iast})</span>`;
          }
        }));
      }
      pNext.addEventListener("click", nextPicQuestion);
      nextPicQuestion();
    }

    function renderSpokenFlashcards() {
      lvlOut.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;">
          <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(245,185,66,0.28);border-radius:10px;text-align:center;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.65rem;">
              <strong style="color:var(--gold-bright);">Interactive Flashcards</strong>
              <select id="fcCatSel" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.3rem 0.5rem;border-radius:6px;font-size:0.8rem;">
                ${Object.entries(PICTURE_VOCAB).map(([k, v]) => `<option value="${k}"${k === smallestCatKey ? " selected" : ""}>${v.label} (${v.items.length})</option>`).join("")}
              </select>
            </div>
            <div id="fcCard" style="cursor:pointer;min-height:155px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:12px;margin-bottom:0.65rem;"></div>
            <div style="display:flex;justify-content:center;gap:0.45rem;flex-wrap:wrap;">
              <button type="button" id="fcPrev" class="btn-ghost" style="padding:0.3rem 0.65rem;font-size:0.8rem;">← Prev</button>
              <button type="button" id="fcFlip" class="btn-primary" style="padding:0.3rem 0.75rem;font-size:0.8rem;">Flip Card</button>
              <button type="button" id="fcSpeak" class="btn-ghost" style="padding:0.3rem 0.65rem;font-size:0.8rem;">🔊 Listen</button>
              <button type="button" id="fcNext" class="btn-ghost" style="padding:0.3rem 0.65rem;font-size:0.8rem;">Next →</button>
            </div>
            <div id="fcCounter" style="font-size:0.75rem;color:#94a3b8;margin-top:0.45rem;"></div>
          </div>

          <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(56,189,248,0.28);border-radius:10px;">
            <strong style="color:var(--cyan-accent);">Daily Spoken Sanskrit (संभाषणम्)</strong>
            <div style="max-height:260px;overflow-y:auto;margin-top:0.55rem;padding-right:0.25rem;">
              ${SPOKEN_PHRASES.map((p, idx) => `
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">
                  <div>
                    <div style="font-size:0.92rem;font-weight:700;color:var(--gold-bright);">${p.sa}</div>
                    <div style="font-size:0.75rem;color:var(--cyan-accent);">${p.iast} — <span style="color:#cbd5e1;">${p.en}</span></div>
                  </div>
                  <button type="button" class="btn-ghost spk-phrase-btn" data-idx="${idx}" style="padding:0.22rem 0.5rem;font-size:0.75rem;flex-shrink:0;">🔊</button>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      `;
      const fcSel = document.getElementById("fcCatSel");
      const fcCard = document.getElementById("fcCard");
      const fcCounter = document.getElementById("fcCounter");
      let fcIdx = 0, flipped = false;
      const drawCard = () => {
        const list = PICTURE_VOCAB[fcSel.value].items;
        if (fcIdx >= list.length) fcIdx = 0;
        if (fcIdx < 0) fcIdx = list.length - 1;
        const it = list[fcIdx];
        const visual = it.hex
          ? `<div style="width:44px;height:44px;border-radius:50%;background:${it.hex};border:2px solid rgba(255,255,255,0.4);margin-bottom:0.35rem;"></div>`
          : `<div style="font-size:2.4rem;line-height:1.1;margin-bottom:0.25rem;">${it.icon}</div>`;
        fcCard.innerHTML = flipped
          ? `${visual}<div style="font-size:1.1rem;font-weight:700;color:var(--cyan-accent);">${it.iast}</div><div style="font-size:0.95rem;color:#fff;margin-top:0.2rem;">${it.en} • ${it.te}</div><div style="font-size:0.72rem;color:#94a3b8;margin-top:0.35rem;">(Click to show Sanskrit)</div>`
          : `${visual}<div style="font-size:1.5rem;font-weight:700;color:var(--gold-bright);">${it.sa}</div><div style="font-size:0.72rem;color:#94a3b8;margin-top:0.35rem;">(Click to reveal meaning)</div>`;
        fcCounter.textContent = `Card ${fcIdx + 1} of ${list.length} (${PICTURE_VOCAB[fcSel.value].label})`;
      };
      fcSel.addEventListener("change", () => { fcIdx = 0; flipped = false; drawCard(); });
      fcCard.addEventListener("click", () => { flipped = !flipped; drawCard(); });
      document.getElementById("fcFlip").addEventListener("click", () => { flipped = !flipped; drawCard(); });
      document.getElementById("fcPrev").addEventListener("click", () => { fcIdx--; flipped = false; drawCard(); });
      document.getElementById("fcNext").addEventListener("click", () => { fcIdx++; flipped = false; drawCard(); });
      document.getElementById("fcSpeak").addEventListener("click", () => {
        speakSanskrit(PICTURE_VOCAB[fcSel.value].items[fcIdx].sa);
      });
      lvlOut.querySelectorAll(".spk-phrase-btn").forEach(btn => btn.addEventListener("click", () => {
        speakSanskrit(SPOKEN_PHRASES[Number(btn.dataset.idx)].sa);
      }));
      drawCard();
    }

    function renderBeginner() {
      lvlOut.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0.9rem;margin-bottom:1rem;">
          <div style="padding:0.9rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:10px;">
            <strong style="color:var(--gold-bright);">1. Pāṇinīya Articulation (5 Places)</strong>
            <p style="font-size:0.83rem;color:#cbd5e1;margin-top:0.35rem;line-height:1.6;">
              • <strong>Kaṇṭhya (Throat):</strong> अ, आ, क ख ग घ ङ, ह, विसर्ग<br>
              • <strong>Tālavya (Palate):</strong> इ, ई, च छ ज झ ञ, य, श<br>
              • <strong>Mūrdhanya (Roof):</strong> ऋ, ॠ, ट ठ ड ढ ण, र, ष<br>
              • <strong>Dantya (Teeth):</strong> लृ, त थ द ध न, ल, स<br>
              • <strong>Oṣṭhya (Lips):</strong> उ, ऊ, प फ ब भ म
            </p>
          </div>
          <div style="padding:0.9rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:10px;">
            <strong style="color:var(--gold-bright);">2. Daily Spoken Sanskrit &amp; Question Words</strong>
            <p style="font-size:0.83rem;color:#cbd5e1;margin-top:0.35rem;line-height:1.6;">
              <strong>Greetings:</strong> नमस्ते (Hello) • सुप्रभातम् (Good morning) • मम नाम ___ (My name is ___) • भवान् कथमस्ति? (How are you?) • धन्यवादः (Thanks).<br>
              <strong>7 Questions (क-काराः):</strong> कः/का (Who) • किम् (What) • कुत्र (Where) • कदा (When) • कथम् (How) • किमर्थम् (Why) • कति (How many).<br>
              <strong>Numbers (1–10):</strong> एकम्, द्वे, त्रीणि, चत्वारि, पञ्च, षट्, सप्त, अष्ट, नव, दश.
            </p>
          </div>
        </div>
        <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(56,189,248,0.25);border-radius:10px;margin-bottom:1rem;">
          <strong style="color:var(--cyan-accent);">3. Pāṇini's 14 Māheśvara Sūtras &amp; Pratyāhāra Decoder</strong>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin:0.55rem 0;">
            ${MAHESVARA_14.map(m => `<span style="font-size:0.78rem;padding:0.2rem 0.5rem;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#e2e8f0;">${m[0]}</span>`).join("")}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.5rem;" id="pratBtns">
            ${Object.entries(PRATYAHARAS).map(([k, v], i) => `<button type="button" class="${i === 0 ? "btn-primary" : "btn-ghost"} prat-btn" data-p="${k}" style="padding:0.28rem 0.6rem;font-size:0.78rem;">${v.label}</button>`).join("")}
          </div>
          <div id="pratOut" style="margin-top:0.55rem;font-size:0.86rem;color:var(--gold-bright);"></div>
        </div>
        <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(245,185,66,0.25);border-radius:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem;">
            <strong style="color:var(--gold-bright);">4. Interactive Devanāgarī Mātrā (Barakhadi) Combiner</strong>
            <select id="baraConsSel" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.3rem 0.5rem;border-radius:6px;font-size:0.82rem;">
              ${BARAKHADI_CONSONANTS.map((c, idx) => `<option value="${idx}">${c[0]} (${c[1]}a)</option>`).join("")}
            </select>
          </div>
          <div id="baraGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(68px,1fr));gap:0.4rem;"></div>
        </div>
      `;
      const pOut = document.getElementById("pratOut");
      const pBtns = lvlOut.querySelectorAll(".prat-btn");
      const showP = (k) => {
        pBtns.forEach(b => b.className = b.dataset.p === k ? "btn-primary prat-btn" : "btn-ghost prat-btn");
        pOut.innerHTML = `<strong>${PRATYAHARAS[k].label}:</strong> ${PRATYAHARAS[k].res}`;
      };
      pBtns.forEach(b => b.addEventListener("click", () => showP(b.dataset.p)));
      showP("ac");

      const bSel = document.getElementById("baraConsSel");
      const bGrid = document.getElementById("baraGrid");
      const updBara = () => {
        const [ch, rom] = BARAKHADI_CONSONANTS[Number(bSel.value)];
        bGrid.innerHTML = BARAKHADI_MATRAS.map(([m, v]) => `
          <button type="button" class="btn-ghost bara-cell" data-txt="${ch}${m}" style="padding:0.4rem 0.25rem;text-align:center;border-radius:8px;">
            <div style="font-size:1.15rem;font-weight:700;color:var(--gold-bright);">${ch}${m}</div>
            <div style="font-size:0.72rem;color:var(--cyan-accent);">${rom}${v}</div>
          </button>
        `).join("");
        bGrid.querySelectorAll(".bara-cell").forEach(btn => btn.addEventListener("click", () => speakSanskrit(btn.dataset.txt)));
      };
      bSel.addEventListener("change", updBara);
      updBara();
    }

    function renderIntermediate() {
      lvlOut.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1rem;">
          <div style="padding:0.9rem;background:rgba(15,23,42,0.55);border:1px solid rgba(255,255,255,0.1);border-radius:10px;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
              <strong style="color:var(--gold-bright);">8 Vibhaktis (Case Declensions)</strong>
              <select id="nounGenderSel" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.3rem 0.5rem;border-radius:6px;font-size:0.8rem;">
                <option value="masc">Masc: राम</option>
                <option value="fem">Fem: रमा</option>
                <option value="neut">Neut: फल</option>
              </select>
            </div>
            <div id="nounTableOut" class="table-wrap"></div>
          </div>
          <div style="padding:0.9rem;background:rgba(15,23,42,0.55);border:1px solid rgba(255,255,255,0.1);border-radius:10px;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
              <strong style="color:var(--cyan-accent);">5 Lakāras (Verb Tenses/Moods)</strong>
              <select id="lakaraRootSel" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.3rem 0.5rem;border-radius:6px;font-size:0.8rem;">
                ${Object.entries(LAKARA_DATA).map(([k, v]) => `<option value="${k}">${v.name}</option>`).join("")}
              </select>
            </div>
            <div id="lakaraTableOut"></div>
          </div>
        </div>
      `;
      const nSel = document.getElementById("nounGenderSel");
      const nOut = document.getElementById("nounTableOut");
      const updNoun = () => {
        const d = NOUN_TABLES[nSel.value];
        nOut.innerHTML = `<div style="font-size:0.8rem;color:var(--cyan-accent);margin-bottom:0.35rem;">${d.title}</div><table><thead><tr><th>Case</th><th>Singular</th><th>Dual</th><th>Plural</th></tr></thead><tbody>${d.rows.map(r => `<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("")}</tbody></table>`;
      };
      nSel.addEventListener("change", updNoun);
      updNoun();

      const lSel = document.getElementById("lakaraRootSel");
      const lOut = document.getElementById("lakaraTableOut");
      const updLak = () => {
        const d = LAKARA_DATA[lSel.value];
        const labels = [["Present (लट्)", d.lat], ["Past (लङ्)", d.lang], ["Future (लृट्)", d.lrt], ["Imperative (लोट्)", d.lot], ["Potential (विधिलिङ्)", d.vidhi]];
        lOut.innerHTML = labels.map(([lbl, arr]) => `
          <div style="padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.8rem;">
            <strong style="color:var(--gold-bright);">${lbl}</strong>
            <div style="color:#e2e8f0;">3rd (सः/तौ/ते): ${arr[0]}</div>
            <div style="color:#94a3b8;">2nd (त्वम्): ${arr[1]} • 1st (अहम्): ${arr[2]}</div>
          </div>
        `).join("");
      };
      lSel.addEventListener("change", updLak);
      updLak();
    }

    function renderPro() {
      lvlOut.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:0.9rem;margin-bottom:1rem;">
          <div style="padding:0.9rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:10px;">
            <strong style="color:var(--gold-bright);">1. Classical Sandhi Rules (सन्धिः)</strong>
            <p style="font-size:0.82rem;color:#cbd5e1;margin-top:0.35rem;line-height:1.58;">
              • <strong>Savarna-Dīrgha:</strong> विद्या + आलयः = विद्यालयः<br>
              • <strong>Guṇa:</strong> अ+इ=ए (नरेन्द्रः), अ+उ=ओ (सूर्योदयः)<br>
              • <strong>Vṛddhi:</strong> अ+ए=ऐ (एकैकम्), अ+ओ=औ (महौषधम्)<br>
              • <strong>Yaṇ:</strong> इ+अ=य (यद्यपि), उ+अ=व (स्वागतम्)<br>
              • <strong>Vyañjana (Jaśtva):</strong> वाक् + ईशः = वागीशः<br>
              • <strong>Visarga:</strong> मनः + रथः = मनोरथः • निः + धनः = निर्धनः
            </p>
          </div>
          <div style="padding:0.9rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:10px;">
            <strong style="color:var(--cyan-accent);">2. All 6 Classical Samāsas (समासाः)</strong>
            <div style="font-size:0.8rem;color:#cbd5e1;margin-top:0.35rem;line-height:1.5;">
              ${SAMASAS_6.map(s => `<div style="margin-bottom:0.3rem;"><strong>${s[0]}:</strong> ${s[1]}</div>`).join("")}
            </div>
          </div>
        </div>
        <div style="padding:0.95rem;background:rgba(15,23,42,0.55);border:1px solid rgba(245,185,66,0.3);border-radius:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.5rem;">
            <strong style="color:var(--gold-bright);">3. Interactive Shloka Anvaya (Prose-Order) Decoder</strong>
            <select id="anvayaSel" style="background:#0b101b;color:#fff;border:1px solid #334155;padding:0.3rem 0.55rem;border-radius:6px;font-size:0.82rem;">
              ${ANVAYA_SHLOKAS.map((a, i) => `<option value="${i}">${a.title}</option>`).join("")}
            </select>
          </div>
          <div id="anvayaOut"></div>
        </div>
      `;
      const aSel = document.getElementById("anvayaSel");
      const aOut = document.getElementById("anvayaOut");
      const updAnv = () => {
        const a = ANVAYA_SHLOKAS[Number(aSel.value)];
        aOut.innerHTML = `
          <div style="font-size:1.05rem;color:var(--gold-bright);white-space:pre-line;margin-bottom:0.45rem;">${a.verse}</div>
          <div style="font-size:0.82rem;color:#cbd5e1;margin-bottom:0.25rem;"><strong>1. Padaccheda (Word Split):</strong> ${a.padaccheda}</div>
          <div style="font-size:0.82rem;color:var(--cyan-accent);margin-bottom:0.25rem;"><strong>2. Anvaya (Prose Order):</strong> ${a.anvaya}</div>
          <div style="font-size:0.82rem;color:var(--emerald-bright);"><strong>3. Word-by-Word Vibhaktis:</strong> ${a.words}</div>
        `;
      };
      aSel.addEventListener("change", updAnv);
      updAnv();
    }

    function renderLevel(key) {
      lvlBtns.forEach(b => b.className = b.dataset.lvl === key ? "btn-primary skt-lvl-btn" : "btn-ghost skt-lvl-btn");
      if (key === "pictures") renderPictures();
      else if (key === "spoken") renderSpokenFlashcards();
      else if (key === "beginner") renderBeginner();
      else if (key === "intermediate") renderIntermediate();
      else renderPro();
    }
    lvlBtns.forEach(b => b.addEventListener("click", () => renderLevel(b.dataset.lvl)));
    renderLevel("pictures");

    const advSel = document.getElementById("sktAdv");
    const sSel = document.getElementById("sktSubj");
    const oSel = document.getElementById("sktObj");
    const vSel = document.getElementById("sktVerb");
    const tSel = document.getElementById("sktTense");
    const sOut = document.getElementById("sktSentOut");
    let currentSaSent = "";
    function updateSent() {
      const adv = VAST_SENTENCE.adverb[Number(advSel.value)];
      const s = VAST_SENTENCE.subj[Number(sSel.value)];
      const o = VAST_SENTENCE.obj[Number(oSel.value)];
      const v = VAST_SENTENCE.verb[vSel.value][tSel.value][s.p];
      const preSa = adv.sa ? `${adv.sa} ` : "";
      const preIast = adv.iast ? `${adv.iast} ` : "";
      const preEn = adv.en ? `${adv.en} ` : "";
      currentSaSent = `${preSa}${s.sa} ${o.sa} ${v[0]}`;
      sOut.innerHTML = `
        <div style="font-size:1.22rem;font-weight:700;color:var(--gold-bright);">${currentSaSent} ।</div>
        <div style="font-size:0.85rem;color:var(--cyan-accent);margin-top:0.2rem;">${preIast}${s.iast} ${o.iast} ${v[1]}.</div>
        <div style="font-size:0.85rem;color:#e2e8f0;margin-top:0.2rem;">"${preEn}${s.en} ${v[2]} ${o.en}."</div>
      `;
    }
    [advSel, sSel, oSel, vSel, tSel].forEach(el => el.addEventListener("change", updateSent));
    document.getElementById("sktSentRand").addEventListener("click", () => {
      advSel.selectedIndex = Math.floor(Math.random() * advSel.options.length);
      sSel.selectedIndex = Math.floor(Math.random() * sSel.options.length);
      oSel.selectedIndex = Math.floor(Math.random() * oSel.options.length);
      vSel.selectedIndex = Math.floor(Math.random() * vSel.options.length);
      tSel.selectedIndex = Math.floor(Math.random() * tSel.options.length);
      updateSent();
    });
    document.getElementById("sktSentSpeak").addEventListener("click", () => speakSanskrit(currentSaSent));
    updateSent();

    const exList = document.getElementById("sktExList");
    let score = 0; const done = new Set();
    exList.innerHTML = EXERCISES.map((ex, i) => `
      <div class="skt-ex" data-i="${i}" style="margin-bottom:0.75rem;padding-bottom:0.65rem;border-bottom:1px solid rgba(255,255,255,0.07);">
        <div style="font-size:0.84rem;font-weight:600;color:#fff;margin-bottom:0.35rem;">${ex.q}</div>
        <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
          ${ex.opts.map((opt, oi) => `<button type="button" class="btn-ghost skt-opt" data-oi="${oi}" style="padding:0.25rem 0.55rem;font-size:0.78rem;">${opt}</button>`).join("")}
        </div>
        <div class="skt-exp" style="display:none;font-size:0.78rem;color:var(--emerald-bright);margin-top:0.3rem;"></div>
      </div>
    `).join("");
    exList.querySelectorAll(".skt-opt").forEach(btn => btn.addEventListener("click", () => {
      const box = btn.closest(".skt-ex"); const i = Number(box.dataset.i);
      if (done.has(i)) return; done.add(i);
      const oi = Number(btn.dataset.oi); const ex = EXERCISES[i];
      const opts = box.querySelectorAll(".skt-opt");
      opts[ex.ans].style.borderColor = "#10b981"; opts[ex.ans].style.color = "#6ee7b7";
      if (oi === ex.ans) { score++; document.getElementById("sktExScore").textContent = String(score); }
      else { btn.style.borderColor = "#f43f5e"; btn.style.color = "#fda4af"; }
      const exp = box.querySelector(".skt-exp"); exp.style.display = "block"; exp.textContent = ex.exp;
    }));
  }

  document.addEventListener("DOMContentLoaded", initSanskritTutor);
})();
