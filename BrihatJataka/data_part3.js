/**
 * Varāhamihira's Bṛhat Jātaka — Bilingual Data Part 3 (Chapters XVI – XXVIII + Quiz)
 * Source: Pandita Bhushana V. Subrahmanya Sastri (2nd Ed., 1996)
 */

// Chapter XVI: Moon in 27 Nakshatras (Slokas 1-14)
const BJ_NAKSHATRAS = [
  { id: 1, en: "Aśvinī", te: "అశ్విని", grade: "Good", enDesc: "Fond of ornaments, lovely in appearance, liked by all, clever, intelligent.", teDesc: "ఆభరణ ప్రియుడు, సుందర రూపం, అందరికీ ఇష్టుడు, చతురుడు, బుద్ధిమంతుడు." },
  { id: 2, en: "Bharaṇī", te: "భరణి", grade: "Good", enDesc: "Carries out purpose to the end, truthful, free from malady, clever, happy.", teDesc: "కార్యసాధకుడు, సత్యవాది, ఆరోగ్యవంతుడు, చతురుడు, సుఖి." },
  { id: 3, en: "Kṛttikā", te: "కృత్తిక", grade: "Good", enDesc: "Eats much, addicted to others' wives, brilliant in appearance, famous.", teDesc: "అధిక భోజనం, పరస్త్రీ ఆసక్తి, తేజోవంతుడు, కీర్తిమంతుడు." },
  { id: 4, en: "Rohiṇī", te: "రోహిణి", grade: "Good", enDesc: "Truthful, pure, sweet-tongued, settled mind, lovely in appearance.", teDesc: "సత్యవాది, శుచి, మధురభాషి, స్థిరబుద్ధి, సుందర రూపం." },
  { id: 5, en: "Mṛgaśīrṣā", te: "మృగశిర", grade: "Good", enDesc: "Fickle, sharp-witted, timid, eloquent, industrious, wealthy, sensual.", teDesc: "చంచలుడు, తీక్ష్ణబుద్ధి, పిరికివాడు, వాక్చతురుడు, శ్రమజీవి, ధనవంతుడు." },
  { id: 6, en: "Ārdrā", te: "ఆర్ద్ర", grade: "Bad", enDesc: "Perfidious, haughty, ungrateful, mischievous, sinful.", teDesc: "ద్రోహబుద్ధి, గర్విష్ఠి, కృతఘ్నుడు, దుష్ట స్వభావం, పాపకృత్యములు." },
  { id: 7, en: "Punarvasu", te: "పునర్వసు", grade: "Moderate", enDesc: "Self-controlled, happy, amiable, dull, afflicted with disease, thirsty, easily contented.", teDesc: "జితేంద్రియుడు, సుఖి, సౌమ్యుడు, మందబుద్ధి, రోగపీడితుడు, తృప్తి గలవాడు." },
  { id: 8, en: "Puṣya", te: "పుష్యమి", grade: "Good", enDesc: "Composed in mind, liked by all, learned, wealthy, inclined to be virtuous.", teDesc: "శాంతచిత్తుడు, లోకప్రియుడు, విద్వాంసుడు, ధనవంతుడు, ధార్మికుడు." },
  { id: 9, en: "Āśleṣā", te: "ఆశ్లేష", grade: "Bad", enDesc: "Insincere, inclined to hoard everything, sinful, ungrateful, deceitful.", teDesc: "నిష్ఠురుడు, సర్వసంగ్రహణశీలి, పాపి, కృతఘ్నుడు, మోసకారి." },
  { id: 10, en: "Maghā", te: "మఘ", grade: "Good", enDesc: "Wealthy, many servants, enjoys life, worships Gods & Manes, very industrious.", teDesc: "ధనవంతుడు, సేవకులు కలవాడు, భోగవంతుడు, దేవ-పితృ భక్తుడు, శ్రమజీవి." },
  { id: 11, en: "Pūrva Phālgunī", te: "పుబ్బ (పూర్వఫల్గుణి)", grade: "Good", enDesc: "Speaks sweetly, liberal in gifts, bright in appearance, fond of wandering, loyal to king.", teDesc: "మధురభాషి, దాత, తేజోవంతుడు, సంచార ప్రియుడు, రాజభక్తుడు." },
  { id: 12, en: "Uttara Phālgunī", te: "ఉత్తర (ఉత్తరఫల్గుణి)", grade: "Good", enDesc: "Loved by all, earns money by own learning, voluptuous, happy.", teDesc: "సర్వప్రియుడు, స్వవిద్య ద్వారా ధనార్జన, భోగశీలి, సుఖి." },
  { id: 13, en: "Hasta", te: "హస్త", grade: "Bad", enDesc: "Industrious, impudent, fond of drinking, merciless, thievish.", teDesc: "ఉత్సాహి, నిర్భయుడు/ధూర్తుడు, మద్యపాన ప్రియుడు, నిర్దయుడు, దొంగబుద్ధి." },
  { id: 14, en: "Citrā", te: "చిత్త", grade: "Good", enDesc: "Wears beautiful garments and flowers, beautiful eyes and limbs.", teDesc: "సుందర వస్త్ర-పుష్ప ధారణ, అందమైన నేత్రాలు & అవయవాలు." },
  { id: 15, en: "Svātī", te: "స్వాతి", grade: "Good", enDesc: "Modest, clever in trade, compassionate, sweet in speech, virtuous.", teDesc: "వినయవంతుడు, వ్యాపార దక్షుడు, దయాళువు, మధురభాషి, ధార్మికుడు." },
  { id: 16, en: "Viśākhā", te: "విశాఖ", grade: "Bad", enDesc: "Envious, covetous, bright appearance, clever in talking, quarrelsome.", teDesc: "ఈర్ష్య కలవాడు, లోభి, తేజోవంతుడు, వాక్చతురుడు, కలహప్రియుడు." },
  { id: 17, en: "Anurādhā", te: "అనూరాధ", grade: "Bad", enDesc: "Opulent, dwells in foreign countries, unable to endure hunger, rambles.", teDesc: "ఐశ్వర్యవంతుడు, విదేశవాసి, ఆకలిని ఓర్చుకోలేనివాడు, సంచారి." },
  { id: 18, en: "Jyeṣṭhā", te: "జ్యేష్ఠ", grade: "Bad", enDesc: "Not many friends, contented, virtuous, exceedingly irritable.", teDesc: "తక్కువ మిత్రులు, సంతోషి, ధార్మికుడు, మిక్కిలి కోపిష్ఠి." },
  { id: 19, en: "Mūla", te: "మూల", grade: "Good", enDesc: "Proud, wealthy, happy, soft disposition, firm-minded, luxurious.", teDesc: "అభిమాని, ధనికుడు, సుఖి, మృదుస్వభావి, స్థిరబుద్ధి, విలాసవంతుడు." },
  { id: 20, en: "Pūrvāṣāḍhā", te: "పూర్వాషాఢ", grade: "Good", enDesc: "Amiable wife, proud, firm in friendship.", teDesc: "సుగుణవతియైన భార్య, అభిమాని, దృఢమిత్రత్వం." },
  { id: 21, en: "Uttarāṣāḍhā", te: "ఉత్తరాషాఢ", grade: "Good", enDesc: "Well-behaved, righteous, many friends, grateful, amiable.", teDesc: "సదాచారుడు, ధార్మికుడు, బహుమిత్రులు, కృతజ్ఞుడు, ప్రియస్వభావి." },
  { id: 22, en: "Śravaṇa", te: "శ్రవణం", grade: "Good", enDesc: "Learned, generously-disposed wife, wealthy, famous.", teDesc: "విద్వాంసుడు, ఉదారవతియైన భార్య, ధనికుడు, కీర్తిమంతుడు." },
  { id: 23, en: "Dhaniṣṭhā", te: "ధనిష్ఠ", grade: "Good", enDesc: "Liberal in gifts, wealthy, courageous, fond of music, greedy.", teDesc: "దాత, ధనవంతుడు, శూరుడు, సంగీత ప్రియుడు, లోభి." },
  { id: 24, en: "Śatabhiṣak", te: "శతభిషం", grade: "Good", enDesc: "Truthful, unfortunate, conquers enemies, daring, hard to be won over.", teDesc: "సత్యవాది, వ్యసనపరుడు/అదృష్టహీనుడు, శత్రుజయి, సాహసి, లోబడనివాడు." },
  { id: 25, en: "Pūrva Bhādrapadā", te: "పూర్వాభాద్ర", grade: "Good", enDesc: "Afflicted, henpecked, wealthy, clever, a miser.", teDesc: "దుఃఖితుడు, భార్యావశుడు, ధనికుడు, చతురుడు, లోభి." },
  { id: 26, en: "Uttara Bhādrapadā", te: "ఉత్తరాభాద్ర", grade: "Good", enDesc: "Clever in speaking, happy, possesses children, overcomes enemies, virtuous.", teDesc: "వాక్చతురుడు, సుఖి, సంతానవంతుడు, శత్రుజయి, ధార్మికుడు." },
  { id: 27, en: "Revatī", te: "రేవతి", grade: "Good", enDesc: "Symmetrical body, liked by all, courageous, clean, wealthy.", teDesc: "సౌష్టవ శరీరం, సర్వప్రియుడు, శూరుడు, శుచి, ధనవంతుడు." }
];

// Chapters XVII & XVIII: 7 Planets in 12 Signs (concise exact summaries per book)
const BJ_PLANETS_IN_SIGNS = {
  moon: [
    "Round eyes, eats sparingly, fond of vegetables/hot food, always wandering, courageous, dear to women, disfigured nails, proud, afraid of water.",
    "Beautiful, stately gait, broad thighs/face, moles on back/face/sides, liberal, many daughters, forgiving, happy in middle & late life.",
    "Clever, voluptuous eyes, learned in sciences, curled hair, witty, adept in gambling, fond of dancing, elevated nose.",
    "Crooked fast gait, henpecked, good friend, versed in astrology, builds big house, unsteady wealth, fond of water & parks.",
    "Energetic, large cheeks, reddish eyes, few children, hates women, likes forests/hills, angry at trifles, obedient to mother.",
    "Mild bashful look, slow gait, truthful, skilled in arts & śāstras, virtuous, enjoys others' wealth, travels abroad, many daughters.",
    "Worships gods/holy men, learned, pure, henpecked, tall, prominent nose, wandering, clever in trade, helps ungrateful relatives.",
    "Broad eyes & chest, separates from parents/preceptors, childhood illness, honoured by king, brown, Matsya/Vajra/Pakṣi marks.",
    "Long face & neck, paternal inheritance, liberal, poet, powerful speaker, mechanic, familiar with laws, won by kindness.",
    "Pleases wife & sons, religious, weak lower limbs, good eyes, thin waist, indolent, dislikes cold, author, niggardly.",
    "Long camel-like neck, tall rough hairy body, addicted to others' wives, uses others' wealth, fond of flowers/perfumes, endures long marches.",
    "Earns via pearls/ocean produce, fond of wife/children, shining symmetrical body, large head, overcomes enemies, enjoys hidden treasure, learned."
  ],
  sun: [
    "Famous, clever, wandering, little wealth, earns by weapons.",
    "Trades in scents & clothes, hates company of women, skilled in instrumental music.",
    "Learned, versed in astrology, wealthy.",
    "Passionate, poor, engaged in others' business, lives by strenuous work, long marches.",
    "Dwells in forests, mountains, cowsheds; strong and learned.",
    "Skilled in writing, drawing, mathematics; body similar to a woman.",
    "Distiller/seller of liquor, fond of walking, goldsmith, base & sinful acts.",
    "Cruel, daring, earns through poison, skilled in use of weapons.",
    "Respected by the good, wealthy, intelligent, skilled in medicine or artisan.",
    "Base acts, stupid, small wealth, avaricious, relies on others' help.",
    "Base acts, bereft of sons and fortune, poor.",
    "Earns through water-derived articles (pearls, etc.), adored by women."
  ],
  mars: [
    "Honoured by king, wanderer, army commander or trader, wealthy, wounds on body.",
    "Subject to young women, untrue to friends, jugglery, neat dress, timid, harsh.",
    "Intolerant, has sons, friendless, helpful, skilled in music & warfare, fearless lord.",
    "Wealthy, earns by sea-voyage, intelligent, defective limb, wickedly disposed.",
    "Without wealth, endures miseries, rambles in forests, few wives & children.",
    "Intolerant, has sons, friendless, helpful, skilled in music & warfare, fearless lord.",
    "Subject to young women, untrue to friends, addicted to others' wives, timid, harsh.",
    "Honoured by king, wanderer, army commander or trader, wealthy, body covered with scars.",
    "Many enemies, king's minister, famous, fearless, limited issues.",
    "Much wealth and children, king or his equal.",
    "Suffers miseries, poor, wandering, untruthful, sharp intellect.",
    "Many enemies, king's minister, famous, fearless, limited issues."
  ],
  mercury: [
    "Gambling, takes others' wealth, drunkard, atheist, steals, poor, cheat, falsehood.",
    "Teacher, endowed with wife & children, amasses property, liberal, respects elders.",
    "Talkative, learned in sciences and arts, affable, always intent on pleasure.",
    "Earns wealth through water, hated by relations.",
    "Hated by women, penniless, no sons, wandering, ignorant, insulted by own people.",
    "Liberal in gifts, learned, many good qualities, lives in comfort, forgiving, inventive, fearless.",
    "Teacher, endowed with wife & children, amasses property, liberal, respects elders.",
    "Gambling, takes others' wealth, drunkard, atheist, steals, poor, cheat, falsehood.",
    "Honoured by sovereign, learned, argues well on any side.",
    "Does others' work, poor, sculptural work, contracts debts, labourer.",
    "Does others' work, poor, sculptural work, contracts debts, labourer.",
    "Wins over servants, skilled in handicrafts of low-caste people."
  ],
  jupiter: [
    "Army head, very wealthy, many wives & children, liberal, brave, generous, famous.",
    "Sound body, wealthy, friends and sons, liberal, liked by all.",
    "Many clothes, attendants, sons & friends; posted as a minister; happy.",
    "Gems, sons, wealthy wives, influence, good intellect, all comforts.",
    "Head of an army, plus all comforts, gems, sons, intellect of Cancer.",
    "Many clothes, attendants, sons & friends; posted as a minister; happy.",
    "Sound body, wealthy, friends and sons, liberal, liked by all.",
    "Army head, very wealthy, many wives & children, liberal, brave, famous.",
    "King, minister, commander of forces, or immense wealth.",
    "Base, poor, unhappy.",
    "Gems, sons, wealthy wives, influence, good intellect, all comforts (like Cancer).",
    "King, minister, commander of forces, or immense wealth."
  ],
  venus: [
    "Intrigues with others' wives, loses wealth pleading for them, disgrace to family.",
    "Earns by own exertion & intelligence, honoured by king, powerful, famous, brave.",
    "Does king's work (e.g. lawyer), wealthy, skilled in arts.",
    "Two wives, solicits monetary help, timid yet arrogant, great misery.",
    "Money through females, beautiful wife, few sons.",
    "Does base acts.",
    "Earns by own exertion & intelligence, honoured by king, powerful, famous, brave.",
    "Intrigues with others' wives, loses wealth pleading for them, disgrace to family.",
    "Adored for good qualities.",
    "Liked by all, under influence of women, addicted to women of ill-repute.",
    "Liked by all, under influence of women, addicted to women of ill-repute.",
    "Learned, honoured by sovereign, very much liked by all."
  ],
  saturn: [
    "Fool, always on his legs, deceitful, without friends.",
    "Fond of low-caste women, not much wealth, many wives.",
    "Shameless, unhappy, poor, childless, shaky in writing; guard/policeman.",
    "Poor, loses teeth, motherless, without sons, ignorant.",
    "Mean, devoid of happiness, without sons, carries loads.",
    "Shameless, unhappy, poor, childless, shaky in writing; guard/chief officer.",
    "Famous, head of clan, chief man of town, commander or village headman, wealthy.",
    "Imprisonment, beaten, fickle, merciless.",
    "Peaceful end, trustworthy in king's place, good wife & sons, mayor/headman.",
    "Dealings with others' wives, enjoys others' wealth, leading citizen, dim-eyed, lasting greatness.",
    "Dealings with others' wives, enjoys others' wealth, leading citizen, dim-eyed, lasting greatness.",
    "Peaceful end, trustworthy in king's place, good wife & sons, mayor/headman."
  ]
};

// Chapter XIX: Moon in 12 Signs Aspected by 6 Other Planets (Slokas 1-3)
const BJ_DRISHTI_MOON_SIGN = [
  { rasi: "Meṣa (మేషం)", sun: "Poor", moon: "—", mars: "King", mercury: "Learned", jupiter: "Equal to king", venus: "All good qualities", saturn: "Thief" },
  { rasi: "Vṛṣabha (వృషభం)", sun: "Servant", moon: "—", mars: "Poor", mercury: "Thievish", jupiter: "Respected", venus: "King", saturn: "Wealthy" },
  { rasi: "Mithuna (మిథునం)", sun: "Poor", moon: "—", mars: "Iron business", mercury: "King", jupiter: "Learned", venus: "Fearless", saturn: "Weaver" },
  { rasi: "Karkaṭaka (కర్కాటకం)", sun: "Eye disease", moon: "—", mars: "Warrior", mercury: "Literary author", jupiter: "Learned", venus: "King", saturn: "Weapon dealer" },
  { rasi: "Siṁha (సింహం)", sun: "King", moon: "—", mars: "King", mercury: "Astrologer", jupiter: "Wealthy", venus: "King", saturn: "Barber" },
  { rasi: "Kanyā (కన్య)", sun: "Serves women", moon: "—", mars: "Serves women", mercury: "King", jupiter: "Army head", venus: "Skilful in all", saturn: "Serves women" },
  { rasi: "Tulā (తుల)", sun: "Wicked / cruel", moon: "—", mars: "Wicked / cruel", mercury: "King", jupiter: "Goldsmith", venus: "Trader", saturn: "Wicked / cruel" },
  { rasi: "Vṛścika (వృశ్చికం)", sun: "Poor", moon: "—", mars: "King", mercury: "Father of twins", jupiter: "Obedient", venus: "Washerman", saturn: "Defective limb" },
  { rasi: "Dhanus (ధనుస్సు)", sun: "Arrogant rogue", moon: "—", mars: "Arrogant rogue", mercury: "Protects kinsmen", jupiter: "Ruler of earth", venus: "Support to many", saturn: "Arrogant rogue" },
  { rasi: "Makara (మకరం)", sun: "Poor", moon: "—", mars: "King", mercury: "King", jupiter: "King", venus: "Learned", saturn: "Wealthy" },
  { rasi: "Kumbha (కుంభం)", sun: "Others' wives", moon: "—", mars: "Others' wives", mercury: "King", jupiter: "Almost king", venus: "Others' wives", saturn: "Others' wives" },
  { rasi: "Mīna (మీనం)", sun: "Sinful acts", moon: "—", mars: "Sinful acts", mercury: "Clever in mirth", jupiter: "King", venus: "Learned", saturn: "Sinful acts" }
];

// Chapter XX: Planets in 12 Bhavas (Slokas 1-9)
const BJ_BHAVA_EFFECTS = {
  sun: [
    "Valiant, obstinate, defective eyes, cruel-hearted (Aries: earns self; Leo: night-blind; Libra: blind/poor; Cancer: inflamed eyes).",
    "Immensely rich, deprived of wealth by king, facial diseases.",
    "Good intellect, great strength.",
    "No happiness, troubled mind.",
    "Childless, without wealth.",
    "Powerful, overpowered by enemies.",
    "Humiliation at hands of women.",
    "Limited issues, defective eyesight.",
    "Children, wealth, happiness.",
    "Happy, powerful.",
    "Wealthy.",
    "Suffers degradation."
  ],
  moon: [
    "Mute, insane, stupid, blind, base, deaf, or servile (Cancer: rich; Aries: many children; Taurus: wealthy).",
    "Large family.",
    "Cruel.",
    "Happy.",
    "Has children.",
    "Many enemies, delicate constitution, weak digestion, indolent.",
    "Envious, exceedingly in love.",
    "Fickle mind, suffers from diseases.",
    "Sons, friends, relations, wealth.",
    "Completes undertakings perfectly; virtue, wealth, intellect, valour.",
    "Famous, acquires wealth.",
    "Wickedly disposed, defective in some limb."
  ],
  mars: [
    "Injured limb.",
    "Eats bad food.",
    "Good intellect, great strength (as Sun).",
    "No happiness, troubled mind (as Sun).",
    "Childless, without wealth (as Sun).",
    "Powerful, overpowered by enemies (as Sun).",
    "Humiliation at hands of women (as Sun).",
    "Limited issues, defective eyesight (as Sun).",
    "Commits sinful actions.",
    "Happy, powerful (as Sun).",
    "Wealthy (as Sun).",
    "Suffers degradation (as Sun)."
  ],
  mercury: [
    "Learned.",
    "Rich.",
    "Consummate rogue.",
    "Learned.",
    "Minister.",
    "Without enemies.",
    "Knowledge of law / rules of country.",
    "Widely known for good qualities.",
    "Children, wealth, happiness (as Sun).",
    "Happy, powerful (as Sun).",
    "Wealthy (as Sun).",
    "Suffers degradation (as Sun)."
  ],
  jupiter: [
    "Learned.",
    "Eloquent / sweet-tongued.",
    "Stingy.",
    "Happy.",
    "Intelligent.",
    "Without enemies.",
    "Excelling his father.",
    "Base.",
    "Devout and philosophical.",
    "Wealthy.",
    "Prosperous (large profit).",
    "Villain."
  ],
  venus: [
    "Skilled in amorous sports, happy.",
    "Eloquent / sweet-tongued (as Jupiter).",
    "Stingy (as Jupiter).",
    "Happy (as Jupiter).",
    "Happy.",
    "Without enemies (as Jupiter).",
    "Promotes quarrels, fond of sexual union.",
    "Base (as Jupiter).",
    "Devout and philosophical (as Jupiter).",
    "Wealthy (as Jupiter).",
    "Prosperous (as Jupiter).",
    "Rich."
  ],
  saturn: [
    "Poor, sickly, unclean, childhood diseases (Sagittarius/Pisces/Aquarius/Capricorn/Libra: equal to king, scholar, handsome).",
    "As Sun (deprived of wealth, facial disease).",
    "As Sun.", "As Sun.", "As Sun.", "As Sun.", "As Sun.", "As Sun.", "As Sun.", "As Sun.", "As Sun.", "As Sun."
  ]
};

// Chapter XXIV Slokas 3-5: Female Horoscopy Rasi Lord x Trimsamsa Matrix
const BJ_STRI_TRIMSAMSA = [
  { rasiLord: "Mars (Aries/Scorpio)", te: "కుజ రాశి", mars: "Ill-behaved / దుశ్శీల", saturn: "Menial / దాసి", jupiter: "Virtuous / సద్గుణవతి", mercury: "Deceitful / కపటి", venus: "Wicked / దుష్ట" },
  { rasiLord: "Venus (Taurus/Libra)", te: "శుక్ర రాశి", mars: "Wicked / దుష్ట", saturn: "Remarried / పునర్వివాహ", jupiter: "All good qualities / సర్వగుణ", mercury: "Skilled in arts/music / కళానిపుణ", venus: "Famous for virtue / కీర్తివతి" },
  { rasiLord: "Mercury (Gemini/Virgo)", te: "బుధ రాశి", mars: "Dishonest / అసత్య", saturn: "Hermaphrodite nature / నపుంసక", jupiter: "Chaste / పతివ్రత", mercury: "Many good qualities / సద్గుణ", venus: "Adulterous / వ్యభిచారిణి" },
  { rasiLord: "Moon (Cancer)", te: "చంద్ర రాశి", mars: "Self-willed / స్వతంత్ర", saturn: "Kills husband / పతిఘాతకి", jupiter: "Many good qualities / సద్గుణ", mercury: "Skilled in arts / కళానిపుణ", venus: "Unchaste / అశుద్ధ" },
  { rasiLord: "Sun (Leo)", te: "రవి రాశి", mars: "Masculine ways / పురుష స్వభావ", saturn: "Unchaste / అశుద్ధ", jupiter: "Royal husband / రాజపత్ని", mercury: "Masculine & vicious / పురుషచేష్ట", venus: "Unworthy husband / నీచసంగతి" },
  { rasiLord: "Jupiter (Sagittarius/Pisces)", te: "గురు రాశి", mars: "Renowned / కీర్తివతి", saturn: "Little passion / అల్పకామ", jupiter: "Wealth & ornaments / ధనవతి", mercury: "Virtuous & learned / విదుషి", venus: "Chaste & children / పతివ్రత" },
  { rasiLord: "Saturn (Capricorn/Aquarius)", te: "శని రాశి", mars: "Distressed / దాసి", saturn: "Disliked by husband / నీచాసక్త", jupiter: "Devoted to family / పతిభక్త", mercury: "Wicked / దుష్ట", venus: "Barren / వంధ్య" }
];

// Chapter XXIII: 17 Anishta Yogas (Categorized)
const BJ_ANISHTA_YOGAS = [
  { sl: "23.1–4", cat: "Marriage & Progeny", catTe: "వివాహ & సంతాన దోషాలు", en: "No benefic/lord in 5th/7th → no son/wife. Malefics in 4/8 from Venus → wife dies by fire. Saturn in 1, Venus in 7 Ṛkṣa Sandhi, no benefic in 5 → barren wife.", te: "5, 7లో శుభులు/అధిపతి లేకుంటే సంతాన-భార్య లోపం. శుక్రునికి 4/8లో పాపులు → భార్యకు అగ్నిభయం." },
  { sl: "23.7–9", cat: "Chronic & Leprosy", catTe: "దీర్ఘరోగాలు & కుష్ఠు", en: "Venus+Mars in 7th aspected by malefic → venereal disease. Moon in Cancer/Scorpio afflicted → diabetes/piles/hernia. Moon between Mars & Sat + Sun in Capricorn → TB/asthma. Moon in 5th Navāṁśa of Sagittarius with Mars/Sat → leprosy.", te: "7లో శుక్ర-కుజులపై పాపదృష్టి → సుఖవ్యాధి. కర్కాటక/వృశ్చిక చంద్ర పీడ → మధుమేహం/అర్శమొలలు. ధనుస్సు 5వ నవాంశ చంద్రునికి కుజ-శని సంబంధం → కుష్ఠు." },
  { sl: "23.10–12", cat: "Eyes, Ears & Teeth", catTe: "నేత్ర, కర్ణ, దంత దోషాలు", en: "Sun, Moon, Mars, Sat in 8, 6, 2, 12 → loss of eyesight. Malefics in 9, 11, 3, 5 without benefic aspect → deafness. Malefics in 7th → ugly teeth. Sun in Lagna in Pariveṣa → born blind.", te: "8, 6, 2, 12లో రవి-చంద్ర-కుజ-శనులు → దృష్టి లోపం. 9, 11, 3, 5లో పాపులు → చెవుడు. పరివేష లగ్న రవి → జన్మాంధత్వం." },
  { sl: "23.13–17", cat: "Mental, Captivity & Servitude", catTe: "మానసిక, బంధన & దాస్య దోషాలు", en: "Jupiter in 1st + Mars in 7th → epilepsy/insanity. All malefics in 12, 5, 2, 9 (or Sarpa/Nigala/Āyudha drekkāṇa) → imprisonment. Sun/Mars/Sat in 10th unaspected by benefics → servitude.", te: "1లో గురు + 7లో కుజుడు → మూర్ఛ/ఉన్మాదం. 12, 5, 2, 9లో పాపులు → కారాగార వాసం. 10లో పాపులు → దాస్య వృత్తి." }
];

// Chapter XXVI: Nashtajataka Direction Numbers (Sloka 16)
const BJ_NASHTA_DIRS = [
  { dir: "East", te: "తూర్పు", val: 2 },
  { dir: "South-East", te: "ఆగ్నేయం", val: 3 },
  { dir: "South", te: "దక్షిణం", val: 14 },
  { dir: "South-West", te: "నైఋతి", val: 10 },
  { dir: "West", te: "పడమర", val: 15 },
  { dir: "North-West", te: "వాయవ్యం", val: 21 },
  { dir: "North", te: "ఉత్తరం", val: 9 },
  { dir: "North-East", te: "ఈశాన్యం", val: 8 }
];

// Chapter XXVII: All 36 Decanates (Drekkanas)
const BJ_DREKKANAS_36 = [
  { rasi: "Meṣa", d: 1, tags: ["male","armed"], en: "Man with white cloth round waist, black, able to protect many, fierce, lifted axe in hand, reddish eyes.", te: "నడుముకు తెల్లవస్త్రం, నల్లని దేహం, గొడ్డలి ధరించి ఎర్రని కళ్ళతో ఉన్న రక్షక పురుషుడు." },
  { rasi: "Meṣa", d: 2, tags: ["female","quadruped"], en: "Woman clad in red, fond of jewels & eatables, body like water pot, face of a horse, thirsty, standing on one foot.", te: "ఎర్రవస్త్రం, ఆభరణ ప్రియ, కుండవంటి దేహం, గుర్రపు ముఖంతో ఒంటికాలిపై నిలిచిన స్త్రీ." },
  { rasi: "Meṣa", d: 3, tags: ["male","armed"], en: "Cruel man skilled in arts, reddish, active but foiled, raised hand holding a stick, red garments, angry.", te: "ఎర్రని వస్త్రం, కర్ర ఎత్తి కోపంతో ఉన్న కళానిపుణుడైన పురుషుడు." },
  { rasi: "Vṛṣabha", d: 1, tags: ["female"], en: "Woman with curled & cut hair, body like water pot, partly burnt garment, thirsty, intent on eating, fond of jewels.", te: "కత్తిరించిన ఉంగరాల జుట్టు, కాలిన వస్త్రం, ఆకలి-దప్పికలతో ఆభరణ ప్రియయైన స్త్రీ." },
  { rasi: "Vṛṣabha", d: 2, tags: ["male","quadruped"], en: "Man skilled in wet lands, grains, cows, plough, arts; bull neck, hungry, ram's face, dirty garments.", te: "వ్యవసాయ-గోపాలన దక్షుడు, ఎద్దు మెడ, పొట్టేలు ముఖం గల పురుషుడు." },
  { rasi: "Vṛṣabha", d: 3, tags: ["male","quadruped"], en: "Man with elephant-like body, white teeth, camel-like feet, brown, fond of sheep & deer, agitated mind.", te: "ఏనుగు వంటి దేహం, తెల్లని దంతాలు, ఒంటె పాదాలు గల చంచల మనస్కుడైన పురుషుడు." },
  { rasi: "Mithuna", d: 1, tags: ["female"], en: "Woman with raised hands, fond of needlework, beautiful, keen on adorning, attained puberty, childless.", te: "చేతులెత్తి కుట్టుపనిలో ఆసక్తి గల అందమైన సంతానహీన యువతి." },
  { rasi: "Mithuna", d: 2, tags: ["male","bird","armed"], en: "Man in a garden, clad in armour, armed with bow, valiant warrior, face like Garuḍa, fond of children & ornaments.", te: "ఉద్యానవనంలో కవచ-ధనుస్సులతో గరుడ ముఖంతో ఉన్న శూరుడు." },
  { rasi: "Mithuna", d: 3, tags: ["male","armed"], en: "Man decked in ornaments, rich in jewels, mail-coat & quiver, carrying a bow, skilled in music, dance & poetry.", te: "ఆభరణ-కవచ-ధనుర్ధారియైన సంగీత-నాట్య-కవితా నిపుణుడైన పురుషుడు." },
  { rasi: "Karkaṭaka", d: 1, tags: ["male","quadruped"], en: "Man holding leaves, roots, fruits; elephant body, camel feet, pig face, horse neck, amidst sandalwood trees.", te: "ఆకులు, పండ్లు పట్టుకుని ఏనుగు దేహం, పంది ముఖంతో అడవిలో ఉన్న పురుషుడు." },
  { rasi: "Karkaṭaka", d: 2, tags: ["female","serpent"], en: "Woman with lotus-decorated head, carrying a snake, rough, crying alone in forest on branch of Palāśa tree.", te: "తలపై కమలాలతో, పామును పట్టుకుని అడవిలో మోదుగ చెట్టుపై ఏడుస్తున్న స్త్రీ." },
  { rasi: "Karkaṭaka", d: 3, tags: ["male","serpent"], en: "Man on a boat in ocean to get ornaments for wife, serpent coiled round him, flat-faced, gold ornaments.", te: "సముద్రంలో పడవపై బంగారు ఆభరణాలతో, శరీరానికి పాము చుట్టుకున్న పురుషుడు." },
  { rasi: "Siṁha", d: 1, tags: ["male","quadruped","bird"], en: "Vulture & jackal on Śālmali tree, resembling dog & man in dirty garments, crying from separation from parents.", te: "బూరుగు చెట్టుపై గ్రద్ద, నక్క రూపంతో మలిన వస్త్రాలతో ఏడుస్తున్న పురుషుడు." },
  { rasi: "Siṁha", d: 2, tags: ["male","armed"], en: "Man with horse-like shape, white flowers on head, deer-skin & blanket, bow in hand, bent nose, fierce like lion.", te: "గుర్రపు ఆకారం, జింక చర్మం, ధనుస్సు ధరించి సింహం వలె ఉన్న పురుషుడు." },
  { rasi: "Siṁha", d: 3, tags: ["male","quadruped","armed"], en: "Man with bear face, monkey movements, carrying stick, fruits & flesh, long beard, curled hair.", te: "ఎలుగుబంటి ముఖం, కోతి చేష్టలతో కర్ర, పండ్లు పట్టుకున్న గడ్డం గల పురుషుడు." },
  { rasi: "Kanyā", d: 1, tags: ["female"], en: "Young damsel holding a pot full of flowers, soiled garments, desires clothes & wealth, going to father's house.", te: "పూల కుండ పట్టుకుని మలిన వస్త్రాలతో తండ్రి ఇంటికి వెళ్ళగోరే కన్య." },
  { rasi: "Kanyā", d: 2, tags: ["male","armed"], en: "Man holding a pen, black, head tied with cloth, spends & earns, carries large bow, hairy body.", te: "కలం, పెద్ద ధనుస్సు పట్టుకుని తలకు గుడ్డ కట్టుకున్న రోమశ దేహ పురుషుడు." },
  { rasi: "Kanyā", d: 3, tags: ["female"], en: "Tall yellowish woman in clean washed garments, holding water pot & ladle, pious, going to temple.", te: "పసుపు వర్ణం, శుభ్ర వస్త్రాలతో కలశం పట్టుకుని దేవాలయానికి వెళ్తున్న ధార్మిక స్త్రీ." },
  { rasi: "Tulā", d: 1, tags: ["male"], en: "Man in a shop on the way with balance in hand, skilled in weighing, thinking of wares & exact prices.", te: "దుకాణంలో త్రాసు పట్టుకుని వస్తువుల ధరలు లెక్కిస్తున్న వ్యాపారి." },
  { rasi: "Tulā", d: 2, tags: ["male","bird"], en: "Man with vulture face, hungry & thirsty, wants to fly away with a pot, thinking of wife & children.", te: "గ్రద్ద ముఖంతో ఆకలిదప్పికలతో కుండ పట్టుకుని ఎగిరిపోవాలని చూస్తున్న పురుషుడు." },
  { rasi: "Tulā", d: 3, tags: ["male","quadruped","armed"], en: "Man decorated with jewels, quiver & golden mail-coat, monkey-like, carries fruits & flesh, frightening deer in forest.", te: "రత్న-సువర్ణ కవచధారియై వానర రూపంతో అడవిలో మృగాలను భయపెడుతున్న పురుషుడు." },
  { rasi: "Vṛścika", d: 1, tags: ["female","serpent"], en: "Beautiful woman shorn of garments & jewels, coming from ocean to shore, feet bound together by a serpent.", te: "వస్త్ర-ఆభరణాలు లేక సముద్ర తీరానికి వస్తూ పాదాలకు పాము కట్టబడిన సుందరి." },
  { rasi: "Vṛścika", d: 2, tags: ["female","serpent"], en: "Woman desiring home comforts, serpent coiled round her for husband's sake, body like turtle or water pot.", te: "తాబేలు వంటి దేహంతో భర్త కోసం పామును చుట్టుకున్న గృహసుఖాభిలాషియైన స్త్రీ." },
  { rasi: "Vṛścika", d: 3, tags: ["quadruped"], en: "Lion with broad flat face like turtle, scaring dogs, deer, pigs & foxes, guarding sandalwood regions (only non-human).", te: "తాబేలు వంటి వెడల్పు ముఖంతో మృగాలను భయపెట్టే సింహం (ఏకైక అమానుష ద్రేక్కాణం)." },
  { rasi: "Dhanus", d: 1, tags: ["male","quadruped","armed"], en: "Man with horse-like body holding long bow, in hermitage, guarding sacrificial ladles & attending ascetics.", te: "అశ్వ శరీరంతో పెద్ద ధనుస్సు పట్టుకుని ఆశ్రమంలో యజ్ఞద్రవ్యాలను రక్షించే పురుషుడు." },
  { rasi: "Dhanus", d: 2, tags: ["female"], en: "Very beautiful woman bright as gold/Campaka flower, seated on throne, separating gems in the ocean.", te: "సంపెంగ/బంగారు వర్ణంతో సింహాసనంపై కూర్చుని రత్నాలను వేరుచేస్తున్న సుందరి." },
  { rasi: "Dhanus", d: 3, tags: ["male","armed"], en: "Man with long hair, golden colour, seated in chief place with stick in hand, wearing silk cloths & deer-skin.", te: "బంగారు వర్ణం, పట్టువస్త్రం, జింకచర్మంతో కర్ర పట్టుకుని ఉన్నతాసనంపై ఉన్న పురుషుడు." },
  { rasi: "Makara", d: 1, tags: ["male","fetters"], en: "Hairy man, teeth like crocodile, body like hog, carrying a rope (fetter) and a net, frightful to look at.", te: "మొసలి దంతాలు, పంది దేహం, పాశం & వల పట్టుకున్న భయంకర పురుషుడు." },
  { rasi: "Makara", d: 2, tags: ["female"], en: "Dark-blue woman skilled in all arts, lotus-petal eyes, decorated with ornaments of copper, gold, or iron.", te: "కమలనేత్రాలతో సర్వకళానిపుణయైన నీలవర్ణ ఆభరణ భూషిత స్త్రీ." },
  { rasi: "Makara", d: 3, tags: ["male","armed"], en: "Man with Kinnara body, woollen blanket, armour & quiver, carries gem-inlaid pot on shoulders.", te: "కిన్నర దేహం, కవచం, తూణీరంతో భుజంపై రత్నకలశం మోస్తున్న పురుషుడు." },
  { rasi: "Kumbha", d: 1, tags: ["male","bird"], en: "Man troubled about procuring oil, liquor, water & food; blanket, silk, black antelope skin, vulture face.", te: "నూనె, మద్యం, నీరు, ఆహారం కోసం తపిస్తూ గ్రద్ద ముఖంతో ఉన్న పురుషుడు." },
  { rasi: "Kumbha", d: 2, tags: ["female","fire"], en: "Female in partly burnt carriage carrying Śālmali wood, collecting metals, in forest in dirty garments with pots on head.", te: "సగం కాలిన బండిలో కట్టెలు, లోహాలతో తలపై కుండలు పెట్టుకున్న అరణ్య స్త్రీ." },
  { rasi: "Kumbha", d: 3, tags: ["male"], en: "Black man with hair in ears, wearing crown, carrying metallic pots of bark, leaves, gum & fruits.", te: "కిరీటం ధరించి చెవులలో వెంట్రుకలతో లోహపు కుండలలో వనమూలికలు మోస్తున్న నల్లని పురుషుడు." },
  { rasi: "Mīna", d: 1, tags: ["male"], en: "Man handling ladles, pots, pearls, gems, conch shells; crossing ocean by boat to get ornaments for wife.", te: "ముత్యాలు, రత్నాలు, శంఖాలతో భార్య కోసం సముద్రాన్ని పడవలో దాటుతున్న పురుషుడు." },
  { rasi: "Mīna", d: 2, tags: ["female"], en: "Young female sailing with retinue across ocean in boat with tall flagstaff, face like Campaka flower.", te: "సంపెంగ వర్ణంతో ఎత్తైన ధ్వజం గల పడవలో పరివారంతో సముద్రయానం చేస్తున్న యువతి." },
  { rasi: "Mīna", d: 3, tags: ["male","serpent"], en: "Man standing naked in forest near a hole with serpent coiled round body, agitated by thieves & fire, weeping.", te: "అడవిలో రంధ్రం వద్ద పాము చుట్టుకుని దొంగలు, అగ్ని భయంతో ఏడుస్తున్న దిగంబర పురుషుడు." }
];

const BJ_QUIZ = [
  {
    qEn: "According to Ch. I (Sl. 13), at what exact degrees are the Sun and Moon at Paramochcha (deepest exaltation)?",
    qTe: "అధ్యా. 1 (శ్లో. 13) ప్రకారం, రవి మరియు చంద్రుల పరమోచ్ఛ డిగ్రీలు ఏవి?",
    opts: ["Sun 10° Meṣa, Moon 3° Vṛṣabha", "Sun 15° Meṣa, Moon 5° Vṛṣabha", "Sun 10° Siṁha, Moon 3° Karkaṭaka", "Sun 20° Tulā, Moon 27° Mīna"],
    ans: 0,
    expEn: "Sun reaches Paramochcha at 10° Aries (Meṣa) and Moon at 3° Taurus (Vṛṣabha).",
    expTe: "రవి మేషంలో 10° వద్ద, చంద్రుడు వృషభంలో 3° వద్ద పరమోచ్ఛ పొందుతారు."
  },
  {
    qEn: "In Ch. II (Sl. 18), planets placed in which houses from each other become Tātkālika (Temporal) Friends?",
    qTe: "అధ్యా. 2 (శ్లో. 18) ప్రకారం, ఏ స్థానాలలో ఉన్న గ్రహాలు తాత్కాలిక మిత్రులవుతాయి?",
    opts: ["1, 5, 6, 7, 8, 9", "2, 12, 3, 11, 4, 10", "1, 4, 7, 10 only", "3, 6, 10, 11 only"],
    ans: 1,
    expEn: "Planets in the 2nd, 12th, 3rd, 11th, 4th, and 10th from each other are temporal friends.",
    expTe: "పరస్పరం 2, 12, 3, 11, 4, 10 స్థానాలలో ఉన్న గ్రహాలు తాత్కాలిక మిత్రులు."
  },
  {
    qEn: "In Ch. IV (Sl. 16), which planet rules the 8th month of gestation?",
    qTe: "అధ్యా. 4 (శ్లో. 16) ప్రకారం, గర్భధారణ 8వ మాసానికి అధిపతి ఎవరు?",
    opts: ["Mercury", "Saturn", "Lord of the Ādhāna Lagna", "Jupiter"],
    ans: 2,
    expEn: "Months 1–7 are Venus, Mars, Jupiter, Sun, Moon, Saturn, Mercury; Month 8 is ruled by the Ādhāna Lagna Lord.",
    expTe: "1–7 నెలలకు శుక్ర, కుజ, గురు, రవి, చంద్ర, శని, బుధులు; 8వ మాసానికి ఆధాన లగ్నాధిపతి."
  },
  {
    qEn: "In Ch. VII (Sl. 3), what fraction of Āyurdāya does a malefic in the 12th house lose under Cakrapāta Haraṇa?",
    qTe: "అధ్యా. 7 (శ్లో. 3) ప్రకారం, చక్రపాత హరణంలో 12వ స్థానంలోని పాపగ్రహం ఎంత ఆయుస్సును కోల్పోతుంది?",
    opts: ["1/2", "1/3", "Full (1/1)", "1/6"],
    ans: 2,
    expEn: "Malefics in 12, 11, 10, 9, 8, 7 lose 1, 1/2, 1/3, 1/4, 1/5, 1/6 respectively (benefics lose half as much).",
    expTe: "12..7 స్థానాలలో పాపగ్రహాలు 1, 1/2, 1/3, 1/4, 1/5, 1/6 వంతు ఆయుస్సును కోల్పోతాయి."
  },
  {
    qEn: "In Ch. VIII (Sl. 3), what is the Antardaśā proportion for a planet in the 5th or 9th house from the Daśā lord?",
    qTe: "అధ్యా. 8 (శ్లో. 3) ప్రకారం, దశానాథుని నుండి 5 లేదా 9లో ఉన్న గ్రహ అంతర్దశ భాగం ఎంత?",
    opts: ["1/2", "1/3", "1/4", "1/7"],
    ans: 1,
    expEn: "Same house = 1/2, 5th/9th = 1/3, 7th = 1/7, 4th/8th = 1/4.",
    expTe: "అదే స్థానం = 1/2, 5/9 = 1/3, 7 = 1/7, 4/8 = 1/4."
  },
  {
    qEn: "In Ch. IX (Sl. 3), which house from the Moon in Mars's Aṣṭakavarga is declared effectless (neither benefic nor malefic)?",
    qTe: "అధ్యా. 9 (శ్లో. 3) ప్రకారం, కుజ అష్టకవర్గలో చంద్రుని నుండి ఏ స్థానం నిష్ఫలమైనది?",
    opts: ["8th", "10th", "12th", "4th"],
    ans: 1,
    expEn: "Chandrāddigviphalēṣu — the 10th house from the Moon in Mars's Aṣṭakavarga is neither good nor bad.",
    expTe: "చంద్రుని నుండి 10వ స్థానం కుజ అష్టకవర్గలో నిష్ఫలము."
  },
  {
    qEn: "In Ch. XII (Nābhasa Yogas), how many total Nābhasa Yogas does Varāhamihira describe?",
    qTe: "అధ్యా. 12 ప్రకారం, వరాహమిహిరుడు మొత్తం ఎన్ని నాభస యోగాలను వివరించారు?",
    opts: ["24", "32", "44", "108"],
    ans: 1,
    expEn: "32 Nābhasa Yogas: 3 Āśraya + 2 Dala + 20 Ākṛti + 7 Saṅkhyā.",
    expTe: "32 నాభస యోగాలు: 3 ఆశ్రయ + 2 దళ + 20 ఆకృతి + 7 సంఖ్యా."
  },
  {
    qEn: "In Ch. XIII (Sl. 4), how many varieties of Durudharā Yoga exist?",
    qTe: "అధ్యా. 13 (శ్లో. 4) ప్రకారం, దురుధరా యోగంలో ఎన్ని భేదాలు ఉన్నాయి?",
    opts: ["31", "62", "180", "240"],
    ans: 2,
    expEn: "Sunaphā has 31 varieties, Anaphā has 31, and Durudharā has 180 varieties.",
    expTe: "సునఫా 31, అనఫా 31, దురుధరా యోగం 180 భేదాలు."
  },
  {
    qEn: "In Ch. XV (Sl. 1), if Jupiter is the strongest of 4+ planets in one sign causing Pravrajyā Yoga, which ascetic order does it indicate?",
    qTe: "అధ్యా. 15 (శ్లో. 1) ప్రకారం, ప్రవ్రజ్యా యోగంలో గురువు బలవంతుడైతే ఏ సన్యాస మార్గం కలుగుతుంది?",
    opts: ["Śākya", "Nirgrantha", "Bhikṣu", "Caraka"],
    ans: 2,
    expEn: "Jupiter = Bhikṣu; Mars = Śākya; Mercury = Jīvika; Moon = Vṛddha; Venus = Caraka; Saturn = Nirgrantha; Sun = Vānaprastha.",
    expTe: "గురువు = భిక్షువు; కుజుడు = శాక్య; బుధుడు = జీవిక; శని = నిర్గ్రంథ."
  },
  {
    qEn: "In Ch. XX (Sl. 10), Satyācārya's rule that benefics promote a house and malefics harm it is reversed in which houses?",
    qTe: "అధ్యా. 20 (శ్లో. 10) ప్రకారం, సత్యాచార్యుల శుభ-పాప ఫల నియమం ఏ స్థానాలలో వ్యతిరేకమవుతుంది?",
    opts: ["1, 4, 7", "3, 10, 11", "6, 8, 12", "2, 5, 9"],
    ans: 2,
    expEn: "In the 6th, 8th, and 12th houses, the general rule is reversed.",
    expTe: "6, 8, 12 స్థానాలలో ఈ నియమం వ్యతిరేకంగా పనిచేస్తుంది."
  },
  {
    qEn: "In Ch. XXVI (Sl. 15–16), from which Nakṣatra is the remainder counted in the Name-Mātrā and Direction-Number Naṣṭajātaka rules?",
    qTe: "అధ్యా. 26 (శ్లో. 15–16) ప్రకారం, నష్టజాతకంలో శేషాన్ని ఏ నక్షత్రం నుండి లెక్కిస్తారు?",
    opts: ["Aśvinī", "Rohiṇī", "Dhaniṣṭhā", "Revatī"],
    ans: 2,
    expEn: "Both the Name-Mātrā formula (×2 + Chāyāṅgula) and Direction-Number formula (×15 + persons) count the remainder from Dhaniṣṭhā.",
    expTe: "నామమాత్ర మరియు దిక్సంఖ్యా సూత్రాలలో శేషాన్ని ధనిష్ఠ నక్షత్రం నుండి లెక్కిస్తారు."
  },
  {
    qEn: "In Ch. XXVII, which single Drekkāṇa among all 36 is purely non-human (a lion guarding sandalwood regions)?",
    qTe: "అధ్యా. 27 ప్రకారం, 36 ద్రేక్కాణాలలో ఏకైక అమానుష (సింహ) ద్రేక్కాణం ఏది?",
    opts: ["Leo 1st", "Scorpio 3rd", "Aries 2nd", "Pisces 3rd"],
    ans: 1,
    expEn: "Scorpio 3rd Drekkāṇa (Sl. 24) is the only purely non-human decanate among all 36.",
    expTe: "వృశ్చిక 3వ ద్రేక్కాణం (శ్లో. 24) 36 ద్రేక్కాణాలలో ఏకైక అమానుష ద్రేక్కాణం."
  }
];
