// Yoga Sastra — Pātañjala Yoga Sūtras & Haṭha Yoga Pradīpikā (Zero Assumptions)
(function () {
  "use strict";

  function bi(en, te) {
    return `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;
  }

  let audioCtx = null;
  let bhrOsc = null;
  let bhrGain = null;

  function playChime() {
    try {
      const a = new Audio("audio/breath_chime.wav");
      a.volume = 0.4;
      a.play().catch(() => {});
    } catch (_) {}
  }

  function startBhramariHum(freq = 136.1) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
      stopBhramariHum();
      bhrOsc = audioCtx.createOscillator();
      bhrGain = audioCtx.createGain();
      bhrOsc.type = "triangle"; // warm bee-like harmonic timbre
      bhrOsc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      bhrGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      bhrGain.gain.exponentialRampToValueAtTime(0.09, audioCtx.currentTime + 0.35);
      bhrOsc.connect(bhrGain);
      bhrGain.connect(audioCtx.destination);
      bhrOsc.start();
    } catch (_) {}
  }

  function stopBhramariHum() {
    try {
      if (bhrGain && audioCtx) {
        bhrGain.gain.exponentialRampToValueAtTime(0.0008, audioCtx.currentTime + 0.15);
      }
      if (bhrOsc) {
        const o = bhrOsc;
        setTimeout(() => { try { o.stop(); } catch (_) {} }, 180);
        bhrOsc = null;
      }
    } catch (_) {}
  }

  const PADAS = [
    { nameEn: "1. Samādhi Pāda (51 Sūtras)", nameTe: "1. సమాధి పాదము (51 సూత్రాలు)", descEn: "Defines Yoga ('Yogaś-citta-vṛtti-nirodhaḥ' I.2), 5 Vṛttis, Abhyāsa-Vairāgya, Īśvara Praṇidhāna, 9 Antarāyas, and Samprajñāta / Asamprajñāta Samādhi.", descTe: "యోగ నిర్వచనం (I.2), పంచవృత్తులు, అభ్యాస-వైరాగ్యాలు, ఈశ్వర ప్రణిధానం, 9 అంతరాయాలు మరియు సమాధి భేదాలు." },
    { nameEn: "2. Sādhana Pāda (55 Sūtras)", nameTe: "2. సాధన పాదము (55 సూత్రాలు)", descEn: "Kriyā Yoga (Tapas, Svādhyāya, Īśvara Praṇidhāna II.1), Pañca-Kleśas (II.3), 4-fold Heeya-Hetu-Hāna-Upāya, and the first 5 limbs of Aṣṭāṅga Yoga (Yama to Pratyāhāra).", descTe: "క్రియాయోగం (తపస్సు, స్వాధ్యాయం, ఈశ్వరప్రణిధానం), పంచక్లేశాలు, మరియు అష్టాంగ యోగంలోని మొదటి 5 అంగాలు." },
    { nameEn: "3. Vibhūti Pāda (55 Sūtras)", nameTe: "3. విభూతి పాదము (55 సూత్రాలు)", descEn: "Dhāraṇā, Dhyāna, Samādhi (together = Saṁyama), and the yogic powers (Vibhūtis) arising from focused Saṁyama.", descTe: "ధారణ, ధ్యాన, సమాధి (సంయమము) మరియు సంయమం ద్వారా సిద్ధించే విభూతులు." },
    { nameEn: "4. Kaivalya Pāda (34 Sūtras)", nameTe: "4. కైవల్య పాదము (34 సూత్రాలు)", descEn: "5 sources of Siddhis (birth, herbs, mantra, tapas, samādhi IV.1), Karma-śuklākṛṣṇa, Dharma-megha Samādhi, and ultimate liberation (Kaivalya).", descTe: "సిద్ధుల 5 మార్గాలు, కర్మవివేచన, ధర్మమేఘ సమాధి మరియు కైవల్య ప్రాప్తి." }
  ];

  const VRITTIS = [
    { nameEn: "1. Pramāṇa (Right Knowledge)", nameTe: "1. ప్రమాణము", subEn: "Pratyakṣa (Perception), Anumāna (Inference), Āgama (Scripture) — YS I.7.", subTe: "ప్రత్యక్ష, అనుమాన, ఆగమ ప్రమాణాలు (I.7)." },
    { nameEn: "2. Viparyaya (Misconception)", nameTe: "2. విపర్యయము", subEn: "False knowledge not grounded in the true form of the object (e.g., rope mistaken for snake) — YS I.8.", subTe: "మిథ్యా జ్ఞానం — వస్తు స్వరూపాన్ని తప్పుగా గ్రహించడం (I.8)." },
    { nameEn: "3. Vikalpa (Verbal Fantasy)", nameTe: "3. వికల్పము", subEn: "Conceptual imagination following words devoid of objective reality — YS I.9.", subTe: "వస్తువు లేకపోయినా శబ్దజ్ఞానంతో కలిగే కల్పన (I.9)." },
    { nameEn: "4. Nidrā (Deep Sleep)", nameTe: "4. నిద్ర", subEn: "Mental modification supported by the absence of waking/dream contents — YS I.10.", subTe: "అభావ ప్రత్యయాన్ని ఆలంబనంగా చేసుకునే వృత్తి (I.10)." },
    { nameEn: "5. Smṛti (Memory)", nameTe: "5. స్మృతి", subEn: "Not letting go of previously experienced objects — YS I.11.", subTe: "అనుభవించిన విషయాలను మరువకుండా నిలుపుకోవడం (I.11)." }
  ];

  const KLESAS = [
    { nameEn: "1. Avidyā (Ignorance)", nameTe: "1. అవిద్య", descEn: "Root of all other Kleśas (YS II.4–5): mistaking the impermanent, impure, painful, non-Self for eternal, pure, blissful Self.", descTe: "అనిత్య, అశుచి, దుఃఖ, అనాత్మలను నిత్య, శుచి, సుఖ, ఆత్మలుగా భ్రమపడటం (II.5)." },
    { nameEn: "2. Asmitā (Egoism)", nameTe: "2. అస్మిత", descEn: "Identifying the Seer (Puruṣa) with the instrument of seeing (Buddhi/Mind) — YS II.6.", descTe: "దృక్-దర్శనశక్తుల (పురుష-బుద్ధి) ఏకాత్మతా భావం (II.6)." },
    { nameEn: "3. Rāga (Attachment)", nameTe: "3. రాగము", descEn: "Clinging/craving that follows pleasure — YS II.7.", descTe: "సుఖానుభవం పట్ల ఆసక్తి (II.7)." },
    { nameEn: "4. Dveṣa (Aversion)", nameTe: "4. ద్వేషము", descEn: "Repulsion/anger that follows pain — YS II.8.", descTe: "దుఃఖానుభవం పట్ల అయిష్టత/క్రోధం (II.8)." },
    { nameEn: "5. Abhiniveśa (Clinging to Life)", nameTe: "5. అభినవేశము", descEn: "Innate fear of death persisting even in the wise — YS II.9.", descTe: "విద్వాంసులలోనూ ఉండే మరణభయం / జీవనాసక్తి (II.9)." }
  ];

  const ANTARAYAS = [
    ["Vyādhi (వ్యాధి)", "Illness / bodily imbalance"],
    ["Styāna (స్త్యాన)", "Mental dullness / apathy"],
    ["Saṁśaya (సంశయ)", "Doubt / indecision"],
    ["Pramāda (ప్రమాద)", "Heedlessness / carelessness"],
    ["Ālasya (ఆలస్య)", "Laziness / lethargy"],
    ["Avirati (అవిరతి)", "Sensory craving / lack of restraint"],
    ["Bhrāntidarśana (భ్రాంతిదర్శన)", "Deluded perception"],
    ["Alabdhabhūmikatva (అలబ్ధభూమికత్వ)", "Failure to attain concentration stage"],
    ["Anavasthitatva (అనవస్థితత్వ)", "Inability to stay steady once attained (YS I.30)"]
  ];

  const ASHTANGA = [
    { id: 1, en: "1. Yama (5 Restraints)", te: "1. యమము", descEn: "YS II.30: Ahiṁsā (non-violence), Satya (truth), Asteya (non-stealing), Brahmacarya (continence), Aparigraha (non-hoarding).", descTe: "అహింస, సత్యం, అస్తేయం, బ్రహ్మచర్యం, అపరిగ్రహం (II.30)." },
    { id: 2, en: "2. Niyama (5 Observances)", te: "2. నియమము", descEn: "YS II.32: Śauca (purity), Santoṣa (contentment), Tapas (austerity), Svādhyāya (self-study), Īśvara Praṇidhāna (surrender).", descTe: "శౌచం, సంతోషం, తపస్సు, స్వాధ్యాయం, ఈశ్వరప్రణిధానం (II.32)." },
    { id: 3, en: "3. Āsana (Steady Posture)", te: "3. ఆసనము", descEn: "YS II.46: 'Sthira-sukham āsanam' — posture must be steady and comfortable.", descTe: "'స్థిరసుఖమాసనమ్' — స్థిరంగా, సుఖంగా ఉండేది ఆసనం (II.46)." },
    { id: 4, en: "4. Prāṇāyāma (Breath Regulation)", te: "4. ప్రాణాయామము", descEn: "YS II.49–50: Regulation of inhalation, exhalation, and retention by place, time, and count.", descTe: "శ్వాస-ప్రశ్వాసల గతి విచ్ఛేదము — దేశ, కాల, సంఖ్యలచే నియంత్రణ (II.49–50)." },
    { id: 5, en: "5. Pratyāhāra (Sense Withdrawal)", te: "5. ప్రత్యాహారము", descEn: "YS II.54: Senses withdrawing from external objects and imitating the stillness of mind.", descTe: "ఇంద్రియాలు విషయాల నుండి మళ్ళి చిత్త స్వరూపాన్ని అనుకరించుట (II.54)." },
    { id: 6, en: "6. Dhāraṇā (Concentration)", te: "6. ధారణ", descEn: "YS III.1: 'Deśa-bandhaś-cittasya dhāraṇā' — binding the mind to one locus.", descTe: "చిత్తాన్ని ఒక స్థానమందు బంధించడం (III.1)." },
    { id: 7, en: "7. Dhyāna (Meditation)", te: "7. ధ్యానము", descEn: "YS III.2: Unbroken flow of cognition toward that single object.", descTe: "ఆ ధారణా స్థానమందు ఏకతానంగా ప్రవహించే చిత్తవృత్తి (III.2)." },
    { id: 8, en: "8. Samādhi (Absorption)", te: "8. సమాధి", descEn: "YS III.3: When only the object shines forth, empty of separate self-awareness.", descTe: "ధ్యానం స్వరూపశూన్యమై కేవలం ధేయవస్తువు మాత్రమే ప్రకాశించుట (III.3)." }
  ];

  const HYP_ASANAS = [
    { id: "svastika", name: "1. Svastikāsana (स्वस्तिकासन)", ref: "HYP I.19", how: "Place both feet symmetrically between opposite thighs and knees; sit upright with balanced spine.", benefit: "Calmness and steadiness for prolonged meditation." },
    { id: "gomukha", name: "2. Gomukhāsana (गोमुखासन)", ref: "HYP I.20", how: "Place right ankle beside left buttock and left ankle beside right buttock (resembling a cow's face).", benefit: "Stabilizes pelvic & spinal alignment." },
    { id: "vira", name: "3. Vīrāsana (वीरासन)", ref: "HYP I.21", how: "Place one foot on the opposite thigh and the other foot tucked beneath the opposite thigh.", benefit: "Hero's steady posture." },
    { id: "kurma", name: "4. Kūrmāsana (कूर्मासन)", ref: "HYP I.22", how: "Press the anus firmly with the ankles placed in reverse under the sitting bones.", benefit: "Withdraws outward restlessness like a tortoise." },
    { id: "kukkuta", name: "5. Kukkuṭāsana (कुक्कुटासन)", ref: "HYP I.23", how: "Assume Padmāsana, insert arms between thighs and calves, plant palms on ground and lift body aloft.", benefit: "Builds upper-body & core strength." },
    { id: "uttanakurma", name: "6. Uttānakūrmāsana (उत्तानकूर्मासन)", ref: "HYP I.24", how: "From Kukkuṭāsana, clasp the neck with both hands and lie back like a tortoise.", benefit: "Deep spinal release." },
    { id: "dhanura", name: "7. Dhanurāsana (धनुरासन)", ref: "HYP I.25", how: "Lie prone, grasp both big toes with hands and draw them toward ears like a taut bow.", benefit: "Energizes spine and abdominal organs." },
    { id: "matsyendra", name: "8. Matsyendrāsana (मत्स्येन्द्रासन)", ref: "HYP I.26–27", how: "Place right foot at left hip root, wrap left leg outside right knee, twist and hold toe.", benefit: "Kindles digestive fire (Jaṭharāgni), destroys diseases, awakens Kuṇḍalinī." },
    { id: "pascimottana", name: "9. Paścimottānāsana (पश्चिमोत्तानासन)", ref: "HYP I.28–29", how: "Stretch both legs straight ahead, hold big toes with hands, and rest forehead on knees.", benefit: "Directs Prāṇa into Suṣumnā, kindles Agni, slims abdomen." },
    { id: "mayura", name: "10. Mayūrāsana (मयूरासन)", ref: "HYP I.30–31", how: "Plant palms on ground, brace elbows on either side of navel, raise legs and head horizontally like a peacock.", benefit: "Destroys abdominal disorders & balances Vāta/Pitta/Kapha." },
    { id: "sava", name: "11. Śavāsana (शवासन)", ref: "HYP I.32", how: "Lie supine flat on the ground completely motionless like a corpse.", benefit: "Removes fatigue and brings deep mental quiet." },
    { id: "siddha", name: "12. Siddhāsana (सिद्धासन)", ref: "HYP I.35–43", how: "Press left heel firmly at perineum, place right heel above generative organ, chin on chest (Jālandhara), gaze between brows.", benefit: "Chief of all 84 Āsanas; opens Mokṣa door & purifies 72,000 Nāḍīs." },
    { id: "padma", name: "13. Padmāsana (पद्मासन)", ref: "HYP I.44–49", how: "Place right foot on left thigh and left foot on right thigh; cross hands behind to hold toes or rest on knees; chin to chest.", benefit: "Destroys all diseases; ideal for Prāṇāyāma." },
    { id: "simha", name: "14. Siṁhāsana (सिंहासन)", ref: "HYP I.50–52", how: "Place heels under scrotum/perineum (right on left, left on right), spread knees, rest palms on knees, open mouth & gaze at nose-tip.", benefit: "Facilitates the three Bandhas." },
    { id: "bhadra", name: "15. Bhadrāsana (भद्रासन)", ref: "HYP I.53–54", how: "Place heels beside perineum (left on left, right on right), clasp feet firmly with hands.", benefit: "Destroys all diseases and fatigue (also called Gorakṣāsana)." }
  ];

  function getAsanaSvg(id) {
    const shapes = {
      svastika: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M35 84 L55 74 L86 84 M89 84 L68 74 L38 84"/><line class="torso" x1="62" y1="74" x2="62" y2="38"/><path class="limb" d="M62 46 L42 66 L36 78 M62 46 L82 66 L88 78"/><circle class="head" cx="62" cy="27" r="8"/>`,
      gomukha: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M40 84 L62 72 L84 84 M44 76 L62 68 L80 76"/><line class="torso" x1="62" y1="70" x2="62" y2="36"/><path class="limb" d="M62 44 L44 60 L54 70 M62 44 L78 24 L68 42"/><circle class="head" cx="62" cy="26" r="8"/>`,
      vira: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M38 84 L58 72 L84 84 M44 76 L72 78"/><line class="torso" x1="62" y1="74" x2="62" y2="38"/><path class="limb" d="M62 46 L44 66 L44 76 M62 46 L80 66 L80 76"/><circle class="head" cx="62" cy="27" r="8"/>`,
      kurma: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M36 84 Q62 76 88 84"/><path class="torso" d="M62 76 L62 42"/><path class="limb" d="M62 50 L44 70 L36 82 M62 50 L80 70 L88 82"/><circle class="head" cx="62" cy="30" r="8"/>`,
      kukkuta: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M38 64 L62 58 L86 64"/><line class="torso" x1="62" y1="58" x2="62" y2="28"/><path class="limb" d="M50 42 L48 86 M74 42 L76 86"/><circle class="head" cx="62" cy="18" r="8"/>`,
      uttanakurma: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="torso" d="M32 76 Q62 84 88 70"/><path class="limb" d="M88 70 L98 52 M88 70 L76 54 M32 76 L26 58 L42 66"/><circle class="head" cx="24" cy="70" r="8"/>`,
      dhanura: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="torso" d="M34 56 Q62 86 90 54"/><path class="limb" d="M90 54 L96 28 L72 34 M38 50 L72 34"/><circle class="head" cx="30" cy="44" r="8"/>`,
      matsyendra: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M40 84 L64 78 L80 84 M60 78 L54 56 L72 84"/><line class="torso" x1="62" y1="78" x2="62" y2="38"/><path class="limb" d="M62 46 L46 58 L54 78 M62 46 L80 56 L72 72"/><circle class="head" cx="60" cy="27" r="8"/>`,
      pascimottana: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="28" y1="84" x2="96" y2="84"/><path class="torso" d="M28 84 Q50 56 76 66"/><path class="limb" d="M64 62 L94 82"/><circle class="head" cx="76" cy="72" r="7.5"/>`,
      mayura: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="torso" x1="24" y1="44" x2="102" y2="44"/><path class="limb" d="M58 46 L58 86 M66 46 L66 86"/><circle class="head" cx="20" cy="36" r="7.5"/>`,
      sava: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="torso" x1="34" y1="82" x2="72" y2="82"/><path class="limb" d="M72 82 L102 82 M42 82 L58 86"/><circle class="head" cx="22" cy="80" r="7.5"/>`,
      siddha: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M36 84 L62 76 L88 84"/><line class="torso" x1="62" y1="76" x2="62" y2="38"/><path class="limb" d="M62 46 L40 66 L36 80 M62 46 L84 66 L88 80"/><circle class="head" cx="62" cy="28" r="8"/><circle class="accent" cx="62" cy="76" r="2.6"/>`,
      padma: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M32 84 Q62 70 92 84 M38 80 Q62 90 86 80"/><line class="torso" x1="62" y1="76" x2="62" y2="38"/><path class="limb" d="M62 46 L40 66 L36 78 M62 46 L84 66 L88 78"/><circle class="head" cx="62" cy="27" r="8"/>`,
      simha: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M36 84 L62 72 L88 84"/><line class="torso" x1="62" y1="74" x2="62" y2="38"/><path class="limb" d="M62 46 L40 68 L36 82 M62 46 L84 68 L88 82"/><circle class="head" cx="62" cy="27" r="8"/><circle class="accent" cx="62" cy="30" r="2.2"/>`,
      bhadra: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M32 80 Q48 70 62 82 Q76 70 92 80"/><line class="torso" x1="62" y1="76" x2="62" y2="38"/><path class="limb" d="M62 46 L52 68 L62 82 M62 46 L72 68 L62 82"/><circle class="head" cx="62" cy="27" r="8"/>`
    };
    return `<div class="asana-visual"><svg class="asana-svg" viewBox="0 0 124 100"><g class="pose-group">${shapes[id] || shapes.padma}</g></svg></div>`;
  }

  function getSuryaSvg(step, large = false) {
    const poses = {
      1: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="62" y1="54" x2="62" y2="86"/><line class="torso" x1="62" y1="54" x2="62" y2="26"/><path class="limb" d="M62 32 L52 40 L60 40"/><circle class="head" cx="62" cy="17" r="7"/>`,
      2: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="62" y1="54" x2="62" y2="86"/><path class="torso" d="M62 54 Q66 38 56 26"/><path class="limb" d="M58 30 L48 10"/><circle class="head" cx="55" cy="17" r="7"/>`,
      3: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="56" y1="50" x2="56" y2="86"/><path class="torso" d="M56 50 Q74 48 76 68"/><path class="limb" d="M74 56 L66 86"/><circle class="head" cx="72" cy="74" r="6.5"/>`,
      4: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M30 86 L48 76 L64 64 L54 74 L54 86"/><path class="torso" d="M64 64 L76 40"/><path class="limb" d="M72 48 L66 86"/><circle class="head" cx="78" cy="31" r="6.5"/>`,
      5: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="28" y1="86" x2="62" y2="34"/><line class="torso" x1="62" y1="34" x2="88" y2="66"/><line class="limb" x1="88" y1="66" x2="96" y2="86"/><circle class="head" cx="80" cy="64" r="6.5"/>`,
      6: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M22 86 L34 86 L46 72"/><path class="torso" d="M46 72 L76 84 L92 84"/><circle class="head" cx="98" cy="82" r="6"/>`,
      7: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="22" y1="86" x2="54" y2="84"/><path class="torso" d="M54 84 Q74 74 82 46"/><line class="limb" x1="80" y1="54" x2="80" y2="86"/><circle class="head" cx="84" cy="36" r="6.5"/>`,
      8: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="28" y1="86" x2="62" y2="34"/><line class="torso" x1="62" y1="34" x2="88" y2="66"/><line class="limb" x1="88" y1="66" x2="96" y2="86"/><circle class="head" cx="80" cy="64" r="6.5"/>`,
      9: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><path class="limb" d="M30 86 L48 76 L64 64 L54 74 L54 86"/><path class="torso" d="M64 64 L76 40"/><path class="limb" d="M72 48 L66 86"/><circle class="head" cx="78" cy="31" r="6.5"/>`,
      10: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="56" y1="50" x2="56" y2="86"/><path class="torso" d="M56 50 Q74 48 76 68"/><path class="limb" d="M74 56 L66 86"/><circle class="head" cx="72" cy="74" r="6.5"/>`,
      11: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="62" y1="54" x2="62" y2="86"/><path class="torso" d="M62 54 Q66 38 56 26"/><path class="limb" d="M58 30 L48 10"/><circle class="head" cx="55" cy="17" r="7"/>`,
      12: `<line class="mat" x1="15" y1="88" x2="109" y2="88"/><line class="limb" x1="62" y1="54" x2="62" y2="86"/><line class="torso" x1="62" y1="54" x2="62" y2="26"/><path class="limb" d="M62 32 L52 40 L60 40"/><circle class="head" cx="62" cy="17" r="7"/>`
    };
    if (large) {
      return `<svg class="asana-svg" style="width:185px;height:150px;" viewBox="0 0 124 100"><g class="pose-group">${poses[step] || poses[1]}</g></svg>`;
    }
    return `<div class="asana-visual"><svg class="asana-svg" viewBox="0 0 124 100"><g class="pose-group">${poses[step] || poses[1]}</g></svg></div>`;
  }

  const SURYA_NAMASKARA_12 = [
    { step: 1, name: "Prāṇāmāsana (Prayer Pose)", mantra: "ॐ मित्राय नमः", bija: "ॐ ह्रां", breath: "Exhale", how: "Stand upright with feet together, palms joined in Añjali Mudrā at the heart center." },
    { step: 2, name: "Hasta Uttānāsana (Raised Arms)", mantra: "ॐ रवये नमः", bija: "ॐ ह्रीं", breath: "Inhale", how: "Raise both arms overhead and gently arch the upper back, gazing toward thumbs." },
    { step: 3, name: "Pādahastāsana (Hand-to-Foot)", mantra: "ॐ सूर्याय नमः", bija: "ॐ ह्रूं", breath: "Exhale", how: "Hinge forward from the hips, bringing palms beside feet and forehead toward knees." },
    { step: 4, name: "Aśva Sañcālanāsana (Equestrian)", mantra: "ॐ भानवे नमः", bija: "ॐ ह्रैं", breath: "Inhale", how: "Step right leg far back, lower right knee, lift chest and gaze upward." },
    { step: 5, name: "Parvatāsana (Mountain / Plank)", mantra: "ॐ खगाय नमः", bija: "ॐ ह्रौं", breath: "Exhale", how: "Step left leg back to join right, raise hips into an inverted V (or straight plank)." },
    { step: 6, name: "Aṣṭāṅga Namaskāra (8-Limb Salute)", mantra: "ॐ पूष्णे नमः", bija: "ॐ హ్రః (ह्रः)", breath: "Hold (Bāhya Kumbhaka)", how: "Lower knees, chest, and chin to the floor while keeping hips slightly raised (8 points touch ground)." },
    { step: 7, name: "Bhujaṅgāsana (Cobra Pose)", mantra: "ॐ हिरण्यगर्भाय नमः", bija: "ॐ ह्रां", breath: "Inhale", how: "Slide forward, press palms down, lift chest and arch spine gently." },
    { step: 8, name: "Parvatāsana (Mountain Pose)", mantra: "ॐ मरीचये नमः", bija: "ॐ ह्रीं", breath: "Exhale", how: "Tuck toes, lift hips high into inverted V, pressing heels toward floor." },
    { step: 9, name: "Aśva Sañcālanāsana (Opposite Leg)", mantra: "ॐ आदित्याय नमः", bija: "ॐ ह्रूं", breath: "Inhale", how: "Step right foot forward between hands, lower left knee, lift chest." },
    { step: 10, name: "Pādahastāsana (Forward Fold)", mantra: "ॐ सवित्रे नमः", bija: "ॐ ह्रैं", breath: "Exhale", how: "Bring left foot forward beside right, fold gently from hips." },
    { step: 11, name: "Hasta Uttānāsana (Raised Arms)", mantra: "ॐ अर्काय नमः", bija: "ॐ ह्रौं", breath: "Inhale", how: "Rise up, stretch arms overhead and arch upper back." },
    { step: 12, name: "Prāṇāmāsana (Prayer Pose)", mantra: "ॐ भास्कराय नमः", bija: "ॐ ह्रः", breath: "Exhale", how: "Return palms to heart center, standing calm and balanced." }
  ];

  const YS_EXTRA = [
    { titleEn: "Abhyāsa & Vairāgya (YS I.12–16)", titleTe: "అభ్యాస వైరాగ్యాలు (I.12–16)", descEn: "The twin pillars that still the mind: Abhyāsa (steady, long-term practice with reverence) and Vairāgya (non-attachment to seen and scriptural objects).", descTe: "చిత్తాన్ని నిరోధించే రెండు మూలస్తంభాలు: అభ్యాసం (నిరంతర దీర్ఘకాల సాధన) మరియు వైరాగ్యం (విషయాలపై ఆసక్తి లేకపోవడం)." },
    { titleEn: "Citta-Prasādana (YS I.33)", titleTe: "చిత్త ప్రసాదనము (I.33)", descEn: "Cultivate Maitrī (friendliness toward the happy), Karuṇā (compassion toward the suffering), Muditā (joy toward the virtuous), and Upekṣā (equanimity toward the unvirtuous).", descTe: "సుఖితుల పట్ల మైత్రి, దుఃఖితుల పట్ల కరుణ, పుణ్యాత్ముల పట్ల ముదిత, అపుణ్యుల పట్ల ఉపేక్ష భావనతో చిత్తాన్ని ప్రసన్నం చేసుకోవాలి." },
    { titleEn: "5 Citta-Bhūmis (Vyāsa Bhāṣya I.1)", titleTe: "5 చిత్తభూములు", descEn: "Kṣipta (restless), Mūḍha (dull/confused), Vikṣipta (distracted), Ekāgra (one-pointed — Samprajñāta Yoga), Niruddha (completely stilled — Asamprajñāta Yoga).", descTe: "క్షిప్త (చంచలం), మూఢ (తమోమయం), విక్షిప్త (కదిలేది), ఏకాగ్ర (సంప్రజ్ఞాత యోగం), నిరుద్ధ (అసంప్రజ్ఞాత యోగం)." },
    { titleEn: "Aṣṭa Siddhis (Vyāsa Bhāṣya III.45)", titleTe: "అష్ట సిద్ధులు (III.45)", descEn: "Aṇimā (minuteness), Mahimā (greatness), Laghimā (lightness), Garimā (heaviness), Prāpti (attainment), Prākāmya (irresistible will), Īśitva (lordship), Vaśitva (mastery over elements).", descTe: "అణిమ, మహిమ, లఘిమ, గరిమ, ప్రాప్తి, ప్రాకామ్యం, ఈశిత్వం, వశిత్వం అనే ఎనిమిది సిద్ధులు." }
  ];

  const SHATKARMAS = [
    { en: "1. Dhauti (ధౌతి)", te: "కడుపు-అన్నవాహిక శుద్ధి", descEn: "Swallowing a 4-aṅgula wide, 15-hand-long wet cloth to cleanse the stomach (HYP II.24–25).", descTe: "4 అంగుళాల వెడల్పు గల తడి వస్త్రాన్ని మింగి ఉదరాన్ని శుభ్రపరిచే ప్రక్రియ (HYP II.24–25)." },
    { en: "2. Basti (బస్తి)", te: "నీటి ద్వారా ఉదర శుద్ధి", descEn: "Drawing water up through the rectum in Utkatāsana to cleanse lower abdomen & balance doṣas (HYP II.26–28).", descTe: "ఉత్కటాసనంలో నీటిని లోపలికి గ్రహించి ఉదర-దోషాలను శుద్ధి చేసే ప్రక్రియ (HYP II.26–28)." },
    { en: "3. Neti (నేతి)", te: "నాసికా శుద్ధి", descEn: "Passing a smooth thread through nostril and out the mouth; clears cranium & bestows subtle vision (HYP II.29–30).", descTe: "మెత్తని దారాన్ని ముక్కు ద్వారా నోటి గుండా తీసి కపాల-నాసికలను శుభ్రపరిచే క్రియ (HYP II.29–30)." },
    { en: "4. Trāṭaka (త్రాటకం)", te: "దృష్టి స్థిరత్వం", descEn: "Gazing steadily at a small point/flame without blinking until tears flow; cures eye diseases (HYP II.31–32).", descTe: "కనురెప్ప వేయకుండా ఒక బిందువు లేదా దీపాన్ని కన్నీళ్ళు వచ్చేవరకు ఏకాగ్రతతో చూడటం (HYP II.31–32)." },
    { en: "5. Nauli (నౌలి)", te: "ఉదర మథనము", descEn: "Rolling abdominal muscles left and right swiftly; kindles digestive fire & removes sluggishness (HYP II.33–34).", descTe: "ఉదర కండరాలను వేగంగా కుడి-ఎడమలకు తిప్పుతూ జఠరాగ్నిని ప్రజ్వలింపజేయడం (HYP II.33–34)." },
    { en: "6. Kapālabhāti (కపాలభాతి)", te: "కపాల శుద్ధి శ్వాస", descEn: "Rapid bellows-like exhalations & inhalations; destroys kapha disorders (HYP II.35).", descTe: "కొలిమి తిత్తిలా వేగంగా శ్వాసించి కఫ దోషాలను నశింపజేసే ప్రక్రియ (HYP II.35)." }
  ];

  const KUMBHAKAS = [
    { id: "surya", nameEn: "1. Sūryabhedana", nameTe: "1. సూర్యభేదన", descEn: "Inhale through Right (Piṅgalā), retain, exhale through Left (Iḍā). Awakens heat & Kuṇḍalinī (HYP II.48–50).", descTe: "కుడి నాసికతో పూరకం, కుంభకం, ఎడమతో రేచకం (II.48–50).", phases: [{ lblEn: "Inhale Right (4s)", lblTe: "కుడి పూరకం (4సె)", dur: 4000, cls: "phase-inhale", scale: "scale(1.22)", bee: false }, { lblEn: "Hold (4s)", lblTe: "కుంభకం (4సె)", dur: 4000, cls: "phase-hold", scale: "scale(1.22)", bee: false }, { lblEn: "Exhale Left (6s)", lblTe: "ఎడమ రేచకం (6సె)", dur: 6000, cls: "phase-exhale", scale: "scale(0.86)", bee: false }] },
    { id: "ujjayi", nameEn: "2. Ujjāyī", nameTe: "2. ఉజ్జాయి", descEn: "Inhale through both nostrils with gentle throat friction sound; exhale through Left. Removes phlegm & throat issues (HYP II.51–53).", descTe: "కంఠంలో మృదువైన శబ్దంతో పూరకం, కుంభకం, ఎడమతో రేచకం (II.51–53).", phases: [{ lblEn: "Throat-Sound Inhale (5s)", lblTe: "ఉజ్జాయి పూరకం (5సె)", dur: 5000, cls: "phase-inhale", scale: "scale(1.22)", bee: false }, { lblEn: "Exhale Left (6s)", lblTe: "ఎడమ రేచకం (6సె)", dur: 6000, cls: "phase-exhale", scale: "scale(0.86)", bee: false }] },
    { id: "sitkari", nameEn: "3. Sītkārī", nameTe: "3. సీత్కారీ", descEn: "Draw air in through teeth with 'Sīt' sound, exhale through nose. Cools body, removes hunger/thirst/lethargy (HYP II.54–56).", descTe: "పళ్ళ మధ్య 'సీత్' శబ్దంతో గాలి పీల్చి ముక్కుతో వదలడం (II.54–56).", phases: [{ lblEn: "Inhale via Teeth 'Sīt' (4s)", lblTe: "'సీత్' పూరకం (4సె)", dur: 4000, cls: "phase-inhale", scale: "scale(1.2)", bee: false }, { lblEn: "Exhale Nose (6s)", lblTe: "నాసిక రేచకం (6సె)", dur: 6000, cls: "phase-exhale", scale: "scale(0.86)", bee: false }] },
    { id: "sitali", nameEn: "4. Śītalī", nameTe: "4. శీతలీ", descEn: "Curl tongue like a beak, inhale cooling air, retain, exhale via nose. Pacifies fever & bile (HYP II.57–58).", descTe: "నాలుకను గొట్టంలా మడిచి చల్లని గాలి పీల్చి ముక్కుతో వదలడం (II.57–58).", phases: [{ lblEn: "Curl Tongue Inhale (4s)", lblTe: "శీతలీ పూరకం (4సె)", dur: 4000, cls: "phase-inhale", scale: "scale(1.2)", bee: false }, { lblEn: "Exhale Nose (6s)", lblTe: "నాసిక రేచకం (6సె)", dur: 6000, cls: "phase-exhale", scale: "scale(0.86)", bee: false }] },
    { id: "bhastrika", nameEn: "5. Bhastrikā", nameTe: "5. భస్త్రికా", descEn: "Rapid blacksmith-bellows inhalations & exhalations, followed by retention & Left-nostril exhale. Pierces 3 Granthis (HYP II.59–67).", descTe: "కొలిమి తిత్తిలా వేగంగా శ్వాసించి, కుంభకం చేసి ఎడమతో వదలడం (II.59–67).", phases: [{ lblEn: "Bellows Inhale (2s)", lblTe: "వేగ పూరకం (2సె)", dur: 2000, cls: "phase-inhale", scale: "scale(1.24)", bee: false }, { lblEn: "Bellows Exhale (2s)", lblTe: "వేగ రేచకం (2సె)", dur: 2000, cls: "phase-exhale", scale: "scale(0.85)", bee: false }] },
    { id: "bhramari", nameEn: "6. Bhrāmarī (Bee Hum)", nameTe: "6. భ్రామరీ", descEn: "Inhale swiftly with male-bee sound, exhale slowly with soft female-bee humming sound; brings intense bliss (HYP II.68).", descTe: "తుమ్మెద ఝుంకార నాదంతో పూరకం & మృదువైన ఝుంకారంతో దీర్ఘ రేచకం (II.68).", phases: [{ lblEn: "Deep Inhale (4s)", lblTe: "లోతుగా పూరకం (4సె)", dur: 4000, cls: "phase-inhale", scale: "scale(1.22)", bee: false }, { lblEn: "Exhale + Bee Hum (8s)", lblTe: "భ్రామరీ నాద రేచకం (8సె)", dur: 8000, cls: "phase-exhale", scale: "scale(0.86)", bee: true }] },
    { id: "murccha", nameEn: "7. Mūrcchā", nameTe: "7. మూర్చ్ఛా", descEn: "After inhaling, apply firm Jālandhara Bandha and exhale slowly; induces serene mental absorption (HYP II.69).", descTe: "పూరకం తర్వాత జాలంధర బంధంతో నెమ్మదిగా రేచకం (II.69).", phases: [{ lblEn: "Inhale (4s)", lblTe: "పూరకం (4సె)", dur: 4000, cls: "phase-inhale", scale: "scale(1.2)", bee: false }, { lblEn: "Jālandhara Hold & Exhale (7s)", lblTe: "బంధ రేచకం (7సె)", dur: 7000, cls: "phase-hold", scale: "scale(0.9)", bee: false }] },
    { id: "plavini", nameEn: "8. Plāvinī", nameTe: "8. ప్లావినీ", descEn: "Filling the stomach generously with air so the yogi floats effortlessly even on deep water (HYP II.70).", descTe: "ఉదరంలో వాయువును నింపుకుని నీటిపై తేలియాడే సాధన (II.70).", phases: [{ lblEn: "Full Air Fill (5s)", lblTe: "పూర్ణ వాయు పూరకం (5సె)", dur: 5000, cls: "phase-inhale", scale: "scale(1.26)", bee: false }, { lblEn: "Gentle Release (6s)", lblTe: "నిదాన రేచకం (6సె)", dur: 6000, cls: "phase-exhale", scale: "scale(0.88)", bee: false }] }
  ];

  const MUDRAS_10 = [
    ["1. Mahāmudrā (మహాముద్ర)", "Press left heel at perineum, hold right foot, Jālandhara Bandha (HYP III.10–18)", "ఎడమ మడమను మూలాధారంలో ఉంచి కుడి పాదాన్ని పట్టుకొని జాలంధర బంధం వేయడం (III.10–18)"],
    ["2. Mahābandha (మహాబంధం)", "Lock perineum with heel, hold breath with all Bandhas (III.19–25)", "మడమతో మూలాధారాన్ని బంధించి త్రిబంధాలతో కుంభకం చేయడం (III.19–25)"],
    ["3. Mahāvedha (మహావేధ)", "Strike buttocks gently in Mahābandha to channel Prāṇa into Suṣumnā (III.26–31)", "మహాబంధంలో ఉండి ప్రాణాన్ని సుషుమ్నలోకి పంపే సాధన (III.26–31)"],
    ["4. Khecarī (ఖేచరీ)", "Turn tongue upward into nasal cavity; nectar retention (III.32–54)", "నాలుకను పైకి మడిచి కపాల కుహరంలోకి ఉంచడం — అమృతపానం (III.32–54)"],
    ["5. Uḍḍīyāna Bandha (ఉడ్డియాణ బంధం)", "Draw abdomen inward & upward after full exhale (III.55–60)", "పూర్తి రేచకం తర్వాత పొట్టను లోపలికి, పైకి లాగడం (III.55–60)"],
    ["6. Mūla Bandha (మూల బంధం)", "Contract perineum upward to unite Apāna & Prāṇa (III.61–69)", "మూలాధారాన్ని పైకి సంకోచించి అపాన-ప్రాణాలను కలపడం (III.61–69)"],
    ["7. Jālandhara Bandha (జాలంధర బంధం)", "Press chin firmly to chest; prevents nectar from falling into fire (III.70–75)", "గడ్డాన్ని ఛాతీపై గట్టిగా ఆనించి కంఠాన్ని బంధించడం (III.70–75)"],
    ["8. Viparītakaraṇī (విపరీతకరణి)", "Inverted posture preserving lunar nectar (III.76–82)", "తల క్రిందులుగా ఉండే భంగిమ — చంద్ర అమృతాన్ని రక్షిస్తుంది (III.76–82)"],
    ["9. Vajrolī (వజ్రోళి)", "Conservation and upward redirection of vital bindu (III.83–103)", "వీర్య/బిందు శక్తిని సంరక్షించి ఊర్ధ్వముఖంగా మళ్ళించడం (III.83–103)"],
    ["10. Śakticālana (శక్తిచాలన)", "Awakening Kuṇḍalinī at Mūlādhāra via breath & contraction (III.104–126)", "ప్రాణ-సంకోచాల ద్వారా మూలాధారంలోని కుండలినిని జాగృతం చేయడం (III.104–126)"]
  ];

  const AVASTHAS_4 = [
    { name: "1. Ārambha Avasthā (ఆరంభ అవస్థ)", descEn: "Brahma Granthi is pierced at Anāhata; subtle tinkling ornament sounds arise; body shines calmly (HYP IV.70–71).", descTe: "అనాహత చక్రంలోని బ్రహ్మగ్రంథి భేదించబడి ఆభరణాల మధుర ధ్వనులు వినిపిస్తాయి (IV.70–71)." },
    { name: "2. Ghaṭa Avasthā (ఘట అవస్థ)", descEn: "Viṣṇu Granthi is pierced at Viśuddhi; kettle-drum (Bherī) sound arises; breath & mind stabilize (HYP IV.72–73).", descTe: "విశుద్ధి చక్రంలోని విష్ణుగ్రంథి భేదించబడి భేరీ నాదం వినిపించి ప్రాణ-మనస్సులు స్థిరపడతాయి (IV.72–73)." },
    { name: "3. Paricaya Avasthā (పరిచయ అవస్థ)", descEn: "Rudra Granthi is pierced at Ājñā; Mardala/drum sound arises; inner bliss free from disease (HYP IV.74–75).", descTe: "ఆజ్ఞా చక్రంలోని రుద్రగ్రంథి భేదించబడి మర్దళ నాదం వినిపించి రోగరహిత ఆనందం కలుగుతుంది (IV.74–75)." },
    { name: "4. Niṣpatti Avasthā (నిష్పత్తి అవస్థ)", descEn: "Prāṇa reaches Brahmarandhra; flute/Vīṇā sound merges into silence — Rāja Yoga Samādhi (HYP IV.76–77).", descTe: "ప్రాణం బ్రహ్మరంధ్రానికి చేరి వీణా-వేణు నాదం నిశ్శబ్ద సమాధిలో లీనమవుతుంది (IV.76–77)." }
  ];

  const QUIZ = [
    { qEn: "How does Patañjali define Yoga in Yoga Sūtra I.2?", qTe: "యోగసూత్రం I.2లో పతంజలి యోగాన్ని ఎలా నిర్వచించారు?", opts: ["Yogaś-citta-vṛtti-nirodhaḥ", "Samatvaṁ yoga ucyate", "Yogaḥ karmasu kauśalam", "Prāṇāyāma eva yogaḥ"], ans: 0, expEn: "YS I.2: Restraint of the modifications of the mind-stuff.", expTe: "యోగశ్చిత్తవృత్తినిరోధః." },
    { qEn: "Which of these is NOT one of the 5 Citta-Vṛttis (YS I.6)?", qTe: "క్రింది వాటిలో పంచచిత్తవృత్తులలో లేనిది ఏది (YS I.6)?", opts: ["Pramāṇa", "Vikalpa", "Nidrā", "Ahiṁsā"], ans: 3, expEn: "The 5 Vṛttis are Pramāṇa, Viparyaya, Vikalpa, Nidrā, Smṛti. Ahiṁsā is a Yama.", expTe: "అహింస యమములో భాగం." },
    { qEn: "What is the root of all 5 Kleśas according to YS II.4?", qTe: "పంచక్లేశాలకు మూలకారణం ఏది (YS II.4)?", opts: ["Rāga", "Avidyā", "Dveṣa", "Asmitā"], ans: 1, expEn: "Avidyā (ignorance) is the field from which Asmitā, Rāga, Dveṣa, and Abhiniveśa grow.", expTe: "అవిద్య మిగిలిన నాలుగు క్లేశాలకు క్షేత్రము." },
    { qEn: "How many classic Kumbhakas are listed in Haṭha Yoga Pradīpikā II.44?", qTe: "హఠయోగ ప్రదీపిక II.44లో ఎన్ని కుంభకాలు చెప్పబడ్డాయి?", opts: ["4", "6", "8", "12"], ans: 2, expEn: "8 Kumbhakas: Sūryabhedana, Ujjāyī, Sītkārī, Śītalī, Bhastrikā, Bhrāmarī, Mūrcchā, Plāvinī.", expTe: "8 కుంభకాలు." },
    { qEn: "Which Ṣaṭkarma uses a 4-aṅgula wide wet cloth to cleanse the stomach (HYP II.24)?", qTe: "4 అంగుళాల వెడల్పు తడి వస్త్రంతో ఉదర శుద్ధి చేసే షట్కర్మ ఏది?", opts: ["Neti", "Dhauti", "Nauli", "Trāṭaka"], ans: 1, expEn: "Vastra-Dhauti (HYP II.24).", expTe: "ధౌతి." },
    { qEn: "Which Kumbhaka mimics the humming sound of a bee?", qTe: "తుమ్మెద ఝుంకార నాదాన్ని అనుకరించే కుంభకం ఏది?", opts: ["Śītalī", "Bhrāmarī", "Plāvinī", "Ujjāyī"], ans: 1, expEn: "Bhrāmarī (HYP II.68).", expTe: "భ్రామరీ (II.68)." },
    { qEn: "Which three limbs together form 'Saṁyama' in Yoga Sūtra III.4?", qTe: "యోగసూత్రం III.4 ప్రకారం 'సంయమము' అంటే ఏ మూడు అంగాలు?", opts: ["Yama, Niyama, Āsana", "Dhāraṇā, Dhyāna, Samādhi", "Prāṇāyāma, Pratyāhāra, Dhāraṇā", "Tapas, Svādhyāya, Īśvara Praṇidhāna"], ans: 1, expEn: "Trayam ekatra saṁyamaḥ — Dhāraṇā, Dhyāna, and Samādhi.", expTe: "ధారణ, ధ్యాన, సమాధి." },
    { qEn: "In HYP IV.70–77, which Avasthā pierces the Rudra Granthi?", qTe: "రుద్ర గ్రంథి ఏ నాదానుసంధాన అవస్థలో భేదించబడుతుంది?", opts: ["Ārambha", "Ghaṭa", "Paricaya", "Niṣpatti"], ans: 2, expEn: "Paricaya Avasthā pierces Rudra Granthi at Ājñā; Ārambha pierces Brahma; Ghaṭa pierces Viṣṇu.", expTe: "పరిచయ అవస్థ." },
    { qEn: "How many Mahā-Mudrās (including Bandhas) are taught in HYP Ch. III?", qTe: "హఠయోగ ప్రదీపిక 3వ అధ్యాయంలో ఎన్ని ముద్రలు చెప్పబడ్డాయి?", opts: ["5", "8", "10", "16"], ans: 2, expEn: "10 Mudrās (Mahāmudrā through Śakticālana).", expTe: "10 ముద్రలు." },
    { qEn: "What is Patañjali's definition of Āsana (YS II.46)?", qTe: "పతంజలి ఆసన నిర్వచనం ఏమిటి (YS II.46)?", opts: ["Sthira-sukham āsanam", "Prāṇa-nirodha āsanam", "Kāya-kleśa āsanam", "Vāyu-bandha āsanam"], ans: 0, expEn: "Sthira-sukham āsanam — steady and comfortable posture.", expTe: "స్థిరసుఖమాసనమ్." },
    { qEn: "According to HYP I.58, how should a yogi fill the stomach in Mitāhāra?", qTe: "హఠయోగ ప్రదీపిక I.58 ప్రకారం మితాహారంలో ఉదరాన్ని ఎలా నింపాలి?", opts: ["100% solid food", "Half food, quarter water, quarter empty for air", "Only fruits", "Fasting daily"], ans: 1, expEn: "Half filled with sweet, unctuous food; a quarter with water; a quarter left free for air (HYP I.58).", expTe: "సగం ఆహారం, పావు వంతు నీరు, పావు వంతు గాలి కోసం ఖాళీ." },
    { qEn: "Which of these is one of the 6 Obstacles (Bādhaka-tattvas) to Yoga in HYP I.15?", qTe: "హఠయోగ ప్రదీపిక I.15 ప్రకారం యోగ సాధనకు బాధకం (అడ్డంకి) కానిది ఏది?", opts: ["Ati-āhāra (Overeating)", "Prajalpa (Idle talk)", "Utsāha (Enthusiasm)", "Laulya (Fickleness)"], ans: 2, expEn: "Utsāha (enthusiasm) is one of the 6 Success Factors (Sādhaka-tattvas, HYP I.16).", expTe: "ఉత్సాహం సాధక తత్వము (సహాయకారి)." },
    { qEn: "In HYP II.7–10, why is Nāḍī Śuddhi practiced before Kumbhaka?", qTe: "కుంభకం కంటే ముందు నాడీ శుద్ధి ఎందుకు చేస్తారు (HYP II.7–10)?", opts: ["To purify Iḍā, Piṅgalā & Suṣumnā channels", "To increase body weight", "To skip Āsana", "Only for singers"], ans: 0, expEn: "When Nāḍīs are purified of impurities, Prāṇa enters Suṣumnā effortlessly.", expTe: "నాడులు శుద్ధి అయి ప్రాణం సుషుమ్నలో ప్రవేశించడానికి." },
    { qEn: "What is the highest Samādhi just prior to Kaivalya in Yoga Sūtra IV.29?", qTe: "యోగసూత్రం IV.29 ప్రకారం కైవల్యానికి ముందు కలిగే అత్యున్నత సమాధి ఏది?", opts: ["Savitarka Samādhi", "Dharma-megha Samādhi", "Ārambha Avasthā", "Bhastrikā"], ans: 1, expEn: "Dharma-megha Samādhi ('Cloud of Virtue' — YS IV.29) ends all Kleśas and Karmas.", expTe: "ధర్మమేఘ సమాధి." },
    { qEn: "How many inner Nāda sounds are listed in HYP IV.84–86 (from Cini to Thunder)?", qTe: "హఠయోగ ప్రదీపిక IV.84–86లో ఎన్ని అంతర్నాద శబ్దాలు చెప్పబడ్డాయి?", opts: ["4", "7", "10", "16"], ans: 2, expEn: "10 Nāda sounds: Cini, Cini-cini, Bell, Conch, Vīṇā, Cymbals, Flute, Bherī, Mṛdaṅga, and Thunder.", expTe: "10 నాదాలు." },
    { qEn: "How many meditation methods (Dhāraṇās) does Bhairava teach Devī in Vijñāna Bhairava Tantra?", qTe: "విజ్ఞాన భైరవ తంత్రంలో భైరవుడు దేవికి ఎన్ని ధ్యాన మార్గాలను (ధారణలను) ఉపదేశించాడు?", opts: ["64", "84", "108", "112"], ans: 3, expEn: "112 Dhāraṇās across Śāmbhavopāya, Śāktopāya, and Āṇavopāya (Rudrayāmala Tantra, 163 verses).", expTe: "112 ధారణలు." },
    { qEn: "In VBT vv. 155–156, how many Haṁsa (Ajapā) breaths occur naturally in 24 hours?", qTe: "విజ్ఞాన భైరవ తంత్రం (155–156 శ్లోకాలు) ప్రకారం ఒక రోజులో సహజంగా జరిగే 'హంస' శ్వాస జప సంఖ్య ఎంత?", opts: ["10,800", "21,600", "36,000", "72,000"], ans: 1, expEn: "21,600 times daily (Ṣaṭśatāni divārātrau sahasrāṇyekaviṁśatiḥ — v. 156).", expTe: "21,600 సార్లు (సహజ హంస జపం)." },
    { qEn: "Which Upāya in Vijñāna Bhairava Tantra is the highest, thought-free direct absorption?", qTe: "విజ్ఞాన భైరవ తంత్రంలో అత్యున్నతమైన నిర్వికల్ప/అంతర్గత ఉపాయం ఏది?", opts: ["Āṇavopāya", "Śāktopāya", "Śāmbhavopāya", "Kriyā-yoga"], ans: 2, expEn: "Śāmbhavopāya (direct non-dual awareness without external supports); Śāktopāya uses subtle contemplation; Āṇavopāya uses breath/body.", expTe: "శాంభవోపాయం (సంభవోపాయం)." }
  ];

  const HYP_PREREQ = {
    obstacles: [
      "1. Ati-āhāra (Overeating)", "2. Prayāsa (Over-exertion)", "3. Prajalpa (Idle gossip)",
      "4. Niyamāgraha (Rigid obsession with minor rules)", "5. Jana-saṅga (Excessive worldly company)", "6. Laulya (Fickleness / restlessness)"
    ],
    success: [
      "1. Utsāha (Enthusiasm)", "2. Sāhasa (Courage / daring)", "3. Dhairya (Perseverance / patience)",
      "4. Tattva-jñāna (True discernment)", "5. Niścaya (Unwavering resolve)", "6. Jana-saṅga-parityāga (Solitude / avoiding crowds)"
    ],
    mitahara: "HYP I.58: Eat sweet, unctuous food offered to Śiva, filling 1/2 of the stomach with food, 1/4 with pure water, and leaving 1/4 free for the movement of air (Vāyu).",
    pathya: "Wholesome (Pathya, HYP I.62–63): Wheat, rice, barley, ṣaṣṭika grain, milk, ghee, sugar, butter, honey, dry ginger, paṭola, five leafy greens, mung beans, pure water.",
    apathya: "Avoid (Apathya, HYP I.59–61): Bitter, sour, pungent, salty, overly hot foods; green/fermented liquors, oil-cakes, sesame, mustard, garlic, reheated food, and eating before digestion."
  };

  const NADI_NADA = {
    shuddhi: "Nāḍī Śuddhi (HYP II.7–10): Sitting in Padmāsana, inhale through Iḍā (left), retain calmly, exhale through Piṅgalā (right); then inhale right, retain, exhale left. Signs of purification (II.19): body becomes lean and radiant, digestive fire glows, and inner Nāda becomes audible.",
    granthis: [
      "1. Brahma Granthi (Anāhata / Heart): Attachment to sensory objects & material comforts.",
      "2. Viṣṇu Granthi (Viśuddhi / Throat): Attachment to subtle psychic powers & emotional states.",
      "3. Rudra Granthi (Ājñā / Brow): Attachment to subtle ego-identity prior to Samādhi."
    ],
    nadas10: [
      { en: "1. Cini (चिनी)", te: "1. చినీ (సూక్ష్మ ఝంకారం)", file: "audio/01_cini.wav", vol: 0.40 },
      { en: "2. Cini-cini (चिनीचिनी)", te: "2. చినీచినీ (ద్విగుణ ఝంకారం)", file: "audio/02_cini_cini.wav", vol: 0.40 },
      { en: "3. Ghaṇṭā (Bell)", te: "3. ఘంటా (దేవాలయ గంట)", file: "audio/03_ghanta.wav", vol: 0.55 },
      { en: "4. Śaṅkha (Conch)", te: "4. శంఖము (శంఖనాదం)", file: "audio/04_sankha.mp3", vol: 0.65 },
      { en: "5. Vīṇā (Lute)", te: "5. వీణా (వీణ నాదం)", file: "audio/05_vina.ogg", vol: 0.70 },
      { en: "6. Tāla (Cymbals)", te: "6. తాళము (మంజీర తాళం)", file: "audio/06_tala.ogg", vol: 0.42 },
      { en: "7. Veṇu (Flute)", te: "7. వేణువు (మురళీ గానం)", file: "audio/07_venu.ogg", vol: 0.65 },
      { en: "8. Bherī (Kettle-drum)", te: "8. భేరీ (భేరీ నాదం)", file: "audio/08_bheri.wav", vol: 0.85 },
      { en: "9. Mṛdaṅga (Double-drum)", te: "9. మృదంగము (మృదంగ నాదం)", file: "audio/09_mrdanga.ogg", vol: 0.72, maxSec: 18 },
      { en: "10. Megha-garjana (Thunder)", te: "10. మేఘ గర్జన (ఉరుము నాదం)", file: "audio/10_megha_garjana.ogg", vol: 0.85 }
    ]
  };

  const VIBHUTI_KAIVALYA = [
    {
      titleEn: "Book III: Key Saṁyama Vibhūtis (YS III.16–48)",
      titleTe: "III.16–48: ప్రధాన సంయమ విభూతులు",
      items: [
        "• Three Pariṇāmas (III.16): Knowledge of past and future.",
        "• Sun / Moon / Pole-Star (III.26–28): Knowledge of cosmic regions, stars & their movements.",
        "• Navel / Throat / Heart (III.29–34): Body anatomy, cessation of hunger/thirst, direct awareness of Citta.",
        "• Maitrī & Elephant Strength (III.23–24): Unconditional friendliness and physical vitality.",
        "• Kāya-sampat (III.46): Beauty, grace, strength, and diamond-like firmness of body."
      ]
    },
    {
      titleEn: "Book IV: Kaivalya Pāda Philosophy (YS IV.1–34)",
      titleTe: "IV.1–34: కైవల్య పాద తత్వ సిద్ధాంతాలు",
      items: [
        "• 5 Sources of Siddhis (IV.1): Birth (Janma), Herbs (Auṣadhi), Mantra, Tapas, and Samādhi.",
        "• 4 Types of Karma (IV.7): White (virtuous), Black (harmful), Mixed (ordinary), and Neither-White-Nor-Black (of a liberated yogi).",
        "• Citta-nirmāṇa & Vāsanās (IV.4–11): Subconscious impressions ripen when conditions align.",
        "• Dharma-megha Samādhi (IV.29) & Kaivalya (IV.34): Guṇas resolve into Prakṛti; Pure Consciousness (Puruṣa) abides in its own true nature."
      ]
    }
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
    function setOpen(open) {
      drawer.classList.toggle("open", open);
      overlay.classList.toggle("open", open);
    }
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
      <div class="cards-grid" style="margin-bottom:1rem;">${PADAS.map(p => `<div class="info-card"><h4>${bi(p.nameEn, p.nameTe)}</h4><p>${bi(p.descEn, p.descTe)}</p></div>`).join("")}</div>
      <div class="cards-grid">${YS_EXTRA.map(e => `<div class="info-card"><h4>${bi(e.titleEn, e.titleTe)}</h4><p>${bi(e.descEn, e.descTe)}</p></div>`).join("")}</div>
    `;

    document.getElementById("secVrittiBody").innerHTML = `
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("5 Citta-Vṛttis (YS I.5–11)", "పంచ చిత్తవృత్తులు")}</h4>
          ${VRITTIS.map(v => `<div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.07);"><strong>${bi(v.nameEn, v.nameTe)}</strong><p style="font-size:0.82rem;color:var(--text-muted);">${bi(v.subEn, v.subTe)}</p></div>`).join("")}
        </div>
        <div class="panel-box">
          <h4 style="color:var(--rose-accent);margin-bottom:0.5rem;">${bi("5 Kleśas (YS II.3–9)", "పంచ క్లేశాలు")}</h4>
          ${KLESAS.map(k => `<div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.07);"><strong>${bi(k.nameEn, k.nameTe)}</strong><p style="font-size:0.82rem;color:var(--text-muted);">${bi(k.descEn, k.descTe)}</p></div>`).join("")}
        </div>
      </div>
      <div class="panel-box">
        <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("9 Antarāyas — Obstacles to Yoga (YS I.30)", "9 అంతరాయాలు (యోగ విఘ్నాలు — I.30)")}</h4>
        <div class="cards-grid">${ANTARAYAS.map((a, i) => `<div class="info-card" style="padding:0.6rem 0.85rem;"><strong>${i + 1}. ${a[0]}</strong><div style="font-size:0.82rem;color:var(--text-muted);">${a[1]}</div></div>`).join("")}</div>
      </div>
    `;

    document.getElementById("secAshtangaBody").innerHTML = `
      <div class="btn-row" id="ashtangaBtns">${ASHTANGA.map((l, i) => `<button class="btn ${i === 0 ? "active" : ""}" data-id="${l.id}">${bi(l.en, l.te)}</button>`).join("")}</div>
      <div id="ashtangaDetail" class="shloka-box" style="margin-bottom:1rem;"></div>
      <div class="panel-box">
        <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("15 Classical Āsanas — Step-by-Step Tutorials (HYP Ch. I.19–54)", "హఠయోగ ప్రదీపిక 15 ఆసనాలు — చేసే విధానం & ఫలాలు")}</h4>
        <div class="cards-grid">${HYP_ASANAS.map(a => `
          <div class="info-card">
            <div class="tag-badge" style="margin-bottom:0.25rem;">${a.ref}</div>
            <h4>${a.name}</h4>
            ${getAsanaSvg(a.id)}
            <p style="font-size:0.83rem;"><strong>How:</strong> ${a.how}</p>
            <p style="font-size:0.81rem;color:var(--emerald-accent);margin-top:0.25rem;"><strong>Benefit:</strong> ${a.benefit}</p>
          </div>
        `).join("")}</div>
      </div>
    `;
    const aDet = document.getElementById("ashtangaDetail");
    const aBtns = document.querySelectorAll("#ashtangaBtns .btn");
    const showLimb = (id) => {
      const item = ASHTANGA.find(x => x.id === id) || ASHTANGA[0];
      aDet.innerHTML = `<strong style="color:var(--gold-bright);">${bi(item.en, item.te)}</strong><p style="margin-top:0.3rem;">${bi(item.descEn, item.descTe)}</p>`;
    };
    aBtns.forEach(b => b.addEventListener("click", () => {
      aBtns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      showLimb(Number(b.dataset.id));
    }));
    showLimb(1);

    document.getElementById("secShatkarmaBody").innerHTML = `<div class="cards-grid">${SHATKARMAS.map(s => `<div class="info-card"><h4>${s.en}</h4><div style="font-size:0.8rem;color:var(--cyan-bright);margin-bottom:0.3rem;">${s.te}</div><p>${bi(s.descEn, s.descTe)}</p></div>`).join("")}</div>`;

    document.getElementById("secKumbhakaBody").innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Select Classical Kumbhaka (HYP II.44)", "అష్టకుంభకాలు (ఒకదానిని ఎంచుకోండి)")}</h4>
          <select id="kumbhakaSel" style="width:100%;background:rgba(15,23,42,0.9);border:1px solid rgba(255,255,255,0.16);color:#fff;border-radius:9px;padding:0.5rem 0.7rem;margin-bottom:0.75rem;">
            ${KUMBHAKAS.map(k => `<option value="${k.id}">${k.nameEn} (${k.nameTe})</option>`).join("")}
          </select>
          <div id="kumbhakaInfo" class="shloka-box"></div>
          <button class="btn btn-primary" id="kumbhakaStartBtn">▶ ${bi("Start Pacer", "సాధన ప్రారంభించు")}</button>
        </div>
        <div class="pacer-stage">
          <div id="yogaOrb" class="breath-orb">${bi("Ready", "సిద్ధం")}</div>
        </div>
      </div>
    `;
    const kSel = document.getElementById("kumbhakaSel");
    const kInfo = document.getElementById("kumbhakaInfo");
    const kBtn = document.getElementById("kumbhakaStartBtn");
    const yOrb = document.getElementById("yogaOrb");
    let curK = KUMBHAKAS[5]; // default Bhrāmarī so user can test immediately
    kSel.value = "bhramari";
    let kTimer = null;
    let kStep = 0;

    function updateKInfo() {
      curK = KUMBHAKAS.find(x => x.id === kSel.value) || KUMBHAKAS[0];
      if (kTimer) { clearTimeout(kTimer); kTimer = null; stopBhramariHum(); }
      yOrb.className = "breath-orb"; yOrb.style.transform = "scale(1)"; yOrb.innerHTML = bi("Ready", "సిద్ధం");
      kBtn.innerHTML = `▶ ${bi("Start Pacer", "సాధన ప్రారంభించు")}`;
      kInfo.innerHTML = `<strong style="color:var(--gold-bright);">${bi(curK.nameEn, curK.nameTe)}</strong><p style="font-size:0.85rem;margin-top:0.3rem;">${bi(curK.descEn, curK.descTe)}</p>`;
    }
    function runKStep() {
      const ph = curK.phases[kStep % curK.phases.length];
      yOrb.className = `breath-orb ${ph.cls}`;
      yOrb.style.transition = `transform ${ph.dur / 1000}s ease-in-out`;
      yOrb.style.transform = ph.scale;
      yOrb.innerHTML = bi(ph.lblEn, ph.lblTe);
      if (ph.bee) startBhramariHum(136.1); else { stopBhramariHum(); playChime(); }
      kStep++;
      kTimer = setTimeout(runKStep, ph.dur);
    }
    kSel.addEventListener("change", updateKInfo);
    kBtn.addEventListener("click", () => {
      if (kTimer) {
        clearTimeout(kTimer); kTimer = null; stopBhramariHum(); playChime();
        yOrb.className = "breath-orb"; yOrb.style.transform = "scale(1)"; yOrb.innerHTML = bi("Ready", "సిద్ధం");
        kBtn.innerHTML = `▶ ${bi("Start Pacer", "సాధన ప్రారంభించు")}`;
      } else {
        kStep = 0; playChime();
        kBtn.innerHTML = `⏹ ${bi("Stop Pacer", "ఆపు")}`;
        runKStep();
      }
    });
    updateKInfo();

    document.getElementById("secMudraBody").innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("10 Mahā-Mudrās & Bandhas (HYP Ch. III)", "దశముద్రలు & బంధాలు")}</h4>
          ${MUDRAS_10.map(m => `<div style="padding:0.4rem 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.84rem;"><strong>${m[0]}:</strong> <span style="color:var(--text-muted);">${bi(m[1], m[2])}</span></div>`).join("")}
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("4 Avasthās of Nādānusandhāna (HYP IV.70–77)", "నాదానుసంధాన 4 అవస్థలు")}</h4>
          ${AVASTHAS_4.map(a => `<div class="shloka-box" style="margin-bottom:0.65rem;"><strong style="color:var(--gold-bright);">${a.name}</strong><p style="font-size:0.83rem;margin-top:0.2rem;">${bi(a.descEn, a.descTe)}</p></div>`).join("")}
        </div>
      </div>
    `;

    // Section 7: Surya Namaskara (12 Steps, Vedic Aditya Mantras & Breath + Animated Flow Player)
    document.getElementById("secSuryaBody").innerHTML = `
      <div class="reader-guide">
        <strong>${bi("Canonical Note:", "ప్రామాణిక గమనిక:")}</strong>
        ${bi("The 12-step Sūrya Namaskāra vinyāsa is a traditional Vedic Āditya-upāsanā + Haṭha practice (separate from Patañjali's Yoga Sūtras and Svātmārāma's 15 HYP Āsanas), pairing 12 Āditya mantras with synchronized inhalation/exhalation.", "12 దశల సూర్య నమస్కారాలు పతంజలి/హఠయోగ ప్రదీపికలోనివి కావు — ఇవి వేద ఆదిత్య మంత్రాలతో కూడిన సాంప్రదాయ సూర్యోపాసన.")}
      </div>
      <div class="panel-box" style="margin-bottom:1.15rem;">
        <div class="btn-row">
          <button class="btn btn-primary" id="suryaPlayBtn">▶ ${bi("Animate 12-Step Flow", "12 దశల యానిమేషన్ ప్రారంభించు")}</button>
          <button class="btn" id="suryaNextBtn">⏭ ${bi("Next Step", "తదుపరి దశ")}</button>
        </div>
        <div class="split-2">
          <div class="asana-visual" id="suryaStageVisual" style="height:175px;margin:0;"></div>
          <div id="suryaStageInfo" class="shloka-box" style="margin:0;"></div>
        </div>
      </div>
      <div class="cards-grid">
        ${SURYA_NAMASKARA_12.map(s => `
          <div class="info-card surya-card" data-step="${s.step}" style="cursor:pointer;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;margin-bottom:0.25rem;">
              <span class="tag-badge">Step ${s.step}</span>
              <span class="tag-badge" style="background:rgba(56,189,248,0.16);border-color:rgba(56,189,248,0.35);color:#7dd3fc;">${s.breath}</span>
            </div>
            <h4>${s.name}</h4>
            ${getSuryaSvg(s.step)}
            <div style="color:var(--gold-bright);font-weight:700;font-size:0.88rem;margin:0.2rem 0;">${s.bija} • ${s.mantra}</div>
            <p style="font-size:0.82rem;">${s.how}</p>
          </div>
        `).join("")}
      </div>
    `;

    let sIdx = 0;
    let sTimer = null;
    const sVis = document.getElementById("suryaStageVisual");
    const sInfo = document.getElementById("suryaStageInfo");
    const sPlay = document.getElementById("suryaPlayBtn");
    const sNext = document.getElementById("suryaNextBtn");
    const sCards = document.querySelectorAll(".surya-card");

    function showSuryaStep(idx) {
      sIdx = idx % SURYA_NAMASKARA_12.length;
      const s = SURYA_NAMASKARA_12[sIdx];
      sVis.innerHTML = getSuryaSvg(s.step, true);
      sInfo.innerHTML = `
        <div style="display:flex;gap:0.4rem;margin-bottom:0.35rem;">
          <span class="tag-badge">Step ${s.step} / 12</span>
          <span class="tag-badge" style="background:rgba(16,185,129,0.18);border-color:#10b981;color:#6ee7b7;">${s.breath}</span>
        </div>
        <h4 style="color:var(--gold-bright);">${s.name}</h4>
        <div style="color:var(--cyan-bright);font-weight:700;margin:0.25rem 0;">${s.bija} • ${s.mantra}</div>
        <p style="font-size:0.85rem;">${s.how}</p>
      `;
      sCards.forEach((c, i) => {
        c.style.borderColor = i === sIdx ? "var(--gold-bright)" : "rgba(255,255,255,0.09)";
      });
    }

    sCards.forEach((c, i) => c.addEventListener("click", () => showSuryaStep(i)));
    sNext.addEventListener("click", () => showSuryaStep(sIdx + 1));
    sPlay.addEventListener("click", () => {
      if (sTimer) {
        clearInterval(sTimer); sTimer = null;
        sPlay.innerHTML = `▶ ${bi("Animate 12-Step Flow", "12 దశల యానిమేషన్ ప్రారంభించు")}`;
      } else {
        playChime();
        sPlay.innerHTML = `⏹ ${bi("Pause Flow", "ఆపు")}`;
        sTimer = setInterval(() => { playChime(); showSuryaStep(sIdx + 1); }, 2800);
      }
    });
    showSuryaStep(0);

    // 8. Obstacles, Success Factors & Mitahara Diet
    document.getElementById("secDietBody").innerHTML = `
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.45rem;">${bi("6 Obstacles (Bādhaka-tattvas, HYP I.15)", "6 యోగ బాధకాలు (హఠయోగ ప్రదీపిక I.15)")}</h4>
          <ul style="padding-left:1.05rem;font-size:0.83rem;line-height:1.58;">
            <li>${bi("1. Ati-āhāra (Overeating)", "1. అతి ఆహారం (అధిక భోజనం)")}</li>
            <li>${bi("2. Prayāsa (Over-exertion)", "2. ప్రయాస (అతి శ్రమ)")}</li>
            <li>${bi("3. Prajalpa (Idle gossip)", "3. ప్రజల్పం (వ్యర్థ ప్రసంగం)")}</li>
            <li>${bi("4. Niyamāgraha (Rigid obsession with minor rules)", "4. నియమాగ్రహం (వ్యర్థ నియమ పట్టుదల)")}</li>
            <li>${bi("5. Jana-saṅga (Excessive worldly company)", "5. జనసంగం (అతి జనసంపర్కం)")}</li>
            <li>${bi("6. Laulya (Fickleness / restlessness)", "6. లౌల్యం (చంచలత్వం)")}</li>
          </ul>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.45rem;">${bi("6 Success Factors (Sādhaka-tattvas, HYP I.16)", "6 సాధక తత్వాలు (I.16)")}</h4>
          <ul style="padding-left:1.05rem;font-size:0.83rem;line-height:1.58;">
            <li>${bi("1. Utsāha (Enthusiasm)", "1. ఉత్సాహం (ఆసక్తి)")}</li>
            <li>${bi("2. Sāhasa (Courage / daring)", "2. సాహసం (ధైర్యం)")}</li>
            <li>${bi("3. Dhairya (Perseverance / patience)", "3. ధైర్యం (ఓర్పు)")}</li>
            <li>${bi("4. Tattva-jñāna (True discernment)", "4. తత్వజ్ఞానం (సత్య వివేకం)")}</li>
            <li>${bi("5. Niścaya (Unwavering resolve)", "5. నిశ్చయం (దృఢ సంకల్పం)")}</li>
            <li>${bi("6. Jana-saṅga-parityāga (Solitude / avoiding crowds)", "6. జనసంగ పరిత్యాగం (ఏకాంత సాధన)")}</li>
          </ul>
        </div>
      </div>
      <div class="panel-box">
        <h4 style="color:var(--gold-bright);margin-bottom:0.45rem;">${bi("Mitāhāra & Pathya / Apathya Diet (HYP I.58–66)", "మితాహారము & పథ్యాపథ్యాలు (I.58–66)")}</h4>
        <p style="font-size:0.84rem;margin-bottom:0.5rem;">${bi(HYP_PREREQ.mitahara, "HYP I.58: మధురమైన, స్నిగ్ధమైన ఆహారాన్ని సగం ఉదరం నిండేలా తిని, పావు వంతు నీరు త్రాగి, మిగిలిన పావు వంతు వాయు సంచారం కోసం ఖాళీగా ఉంచాలి.")}</p>
        <p style="font-size:0.82rem;color:#6ee7b7;margin-bottom:0.35rem;">${bi(HYP_PREREQ.pathya, "పథ్యం (తీసుకోదగినవి): గోధుమలు, బియ్యం, బార్లీ, పాలు, నెయ్యి, తేనె, పెసలు, శొంఠి, పటోల, శుద్ధమైన నీరు.")}</p>
        <p style="font-size:0.82rem;color:#fda4af;">${bi(HYP_PREREQ.apathya, "అపథ్యం (వదిలివేయవలసినవి): కారం, పులుపు, ఉప్పు, చేదు, అతి వేడి పదార్థాలు, మద్యం, నువ్వులు, ఆవాలు, వెల్లుల్లి, చద్ది ఆహారం.")}</p>
      </div>
    `;

    // 9. Nadi Shuddhi, 3 Granthis & 10 Nadas
    document.getElementById("secNadisBody").innerHTML = `
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.45rem;">${bi("Nāḍī Śuddhi (Channel Purification, HYP II.7–19)", "నాడీ శుద్ధి (II.7–19)")}</h4>
          <p style="font-size:0.83rem;line-height:1.58;">${bi(NADI_NADA.shuddhi, "నాడీ శుద్ధి: పద్మాసనంలో కూర్చుని ఎడమ ముక్కు (ఇడ) ద్వారా గాలి పీల్చి, కుంభకం చేసి కుడి (పింగళ) ద్వారా వదలాలి; తర్వాత కుడితో పీల్చి ఎడమతో వదలాలి. నాడులు శుద్ధమైనప్పుడు శరీరం తేలికగా, కాంతివంతంగా మారి నాదం స్పష్టమవుతుంది.")}</p>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.45rem;">${bi("The 3 Granthis (Psychic Knots)", "మూడు గ్రంథులు (బ్రహ్మ, విష్ణు, రుద్ర)")}</h4>
          <ul style="padding-left:1.05rem;font-size:0.82rem;line-height:1.58;">
            <li style="margin-bottom:0.25rem;">${bi(NADI_NADA.granthis[0], "1. బ్రహ్మ గ్రంథి (అనాహత / హృదయం): భౌతిక సుఖాల పట్ల ఆసక్తి.")}</li>
            <li style="margin-bottom:0.25rem;">${bi(NADI_NADA.granthis[1], "2. విష్ణు గ్రంథి (విశుద్ధి / కంఠం): సూక్ష్మ సిద్ధులు & భావోద్వేగాల పట్ల ఆసక్తి.")}</li>
            <li style="margin-bottom:0.25rem;">${bi(NADI_NADA.granthis[2], "3. రుద్ర గ్రంథి (ఆజ్ఞ / భ్రూమధ్యం): సమాధికి ముందరి సూక్ష్మ అహంకార బంధం.")}</li>
          </ul>
        </div>
      </div>
      <div class="panel-box">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.55rem;">
          <h4 style="color:var(--gold-bright);margin:0;">${bi("10 Inner Nāda Sounds (HYP IV.84–86) — Click to Listen", "దశ నాదాలు — నాదానుసంధాన శబ్దాలు (వినడానికి క్లిక్ చేయండి)")}</h4>
          <button type="button" id="nadaStopBtn" class="btn" style="padding:0.25rem 0.65rem;font-size:0.78rem;">⏹ ${bi("Stop Audio", "శబ్దం ఆపు")}</button>
        </div>
        <div class="shloka-box" style="margin-bottom:0.75rem;font-size:0.82rem;line-height:1.58;">
          <strong style="color:var(--cyan-bright);">${bi("Why & How to Hear These Inner Sounds (Nādānusandhāna, HYP IV.65–102):", "ఈ 10 నాదాలను ఎందుకు & ఎలా వినాలి? (నాదానుసంధాన రహస్యం — HYP IV.65–102):")}</strong>
          <ul style="padding-left:1.05rem;margin:0.35rem 0 0;">
            <li style="margin-bottom:0.25rem;">${bi("<strong>Purpose (Laya / Mind Dissolution):</strong> Lord Ādinātha teaches Nādānusandhāna as the easiest royal path to still a restless mind without forceful struggle (HYP IV.65–66).", "<strong>ఉద్దేశ్యం (మనోలయము):</strong> చంచలమైన మనస్సును బలవంతం లేకుండా సహజంగా లీనం చేయడానికి ఆదినాథుడు ఉపదేశించిన అత్యుత్తమ మార్గం నాదానుసంధానం.")}</li>
            <li style="margin-bottom:0.25rem;">${bi("<strong>Why These Sounds Arise:</strong> These are <em>inner</em> subtle sounds heard in the right ear when Nāḍī Śuddhi &amp; Kumbhaka pierce the 3 Granthis and Prāṇa flows through Suṣumnā — the audio buttons above are external approximations to help you recognize them.", "<strong>ఎలా పుడతాయి?:</strong> నాడీ శుద్ధి మరియు కుంభకంతో మూడు గ్రంథులు భేదించబడి ప్రాణం సుషుమ్నలో ప్రవహించినప్పుడు ఇవి లోపల వినిపిస్తాయి (పై బటన్లు వాటిని గుర్తించడానికి నమూనా శబ్దాలు మాత్రమే).")}</li>
            <li style="margin-bottom:0.25rem;">${bi("<strong>How to Practice (HYP IV.68, 88–94):</strong> Close the ears gently with thumbs (Śaṇmukhī Mudrā) in a quiet posture. Like a deer charmed by a flute or a bee drinking nectar, rest attention on the subtle inner sound and gradually move from louder sounds (Thunder, Bherī) to subtler ones (Vīṇā, Veṇu, Cini) until mind dissolves into Samādhi.", "<strong>సాధనా విధానం:</strong> ప్రశాంతంగా కూర్చుని బొటనవేళ్ళతో చెవులను మూసి (షణ్ముఖి ముద్ర) లోపల వినిపించే సూక్ష్మ నాదాన్ని గమనించండి. వేణువు నాదానికి మైమరచిన జింకలా మనస్సు నాదంలో లీనమై, స్థూల నాదాల నుండి సూక్ష్మ నాదాల ద్వారా సమాధిని పొందుతుంది.")}</li>
          </ul>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:0.45rem;" id="nadaBtns">
          ${NADI_NADA.nadas10.map((n, ni) => `<button type="button" class="btn nada-play-btn" data-ni="${ni}" style="font-size:0.82rem;padding:0.4rem 0.72rem;">🔊 ${bi(n.en, n.te)}</button>`).join("")}
        </div>
        <div id="nadaNowPlaying" style="font-size:0.8rem;color:var(--cyan-bright);margin-top:0.5rem;min-height:1.1rem;"></div>
      </div>
    `;
    let curNadaAudio = null;
    let curNadaSrc = null;
    let nadaLoopActive = false;
    let nadaSession = 0;
    const nadaBtns = document.querySelectorAll(".nada-play-btn");
    const nadaNow = document.getElementById("nadaNowPlaying");
    const stopNadaAudioOnly = () => {
      if (curNadaAudio) { curNadaAudio.pause(); curNadaAudio.currentTime = 0; curNadaAudio = null; }
      if (curNadaSrc) { try { curNadaSrc.onended = null; curNadaSrc.stop(); } catch (_) {} curNadaSrc = null; }
      nadaBtns.forEach(b => b.classList.remove("active"));
    };
    const stopNada = () => {
      nadaLoopActive = false;
      nadaSession++;
      stopNadaAudioOnly();
    };
    async function playNormalizedNada(item, onDone) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) throw new Error("No WebAudio");
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") await audioCtx.resume();
      const resp = await fetch(item.file);
      if (!resp.ok) throw new Error("Fetch failed");
      const arr = await resp.arrayBuffer();
      const buf = await audioCtx.decodeAudioData(arr);
      const ch = buf.getChannelData(0);
      let sumSq = 0, count = 0;
      const step = Math.max(1, Math.floor(ch.length / 40000));
      for (let i = 0; i < ch.length; i += step) {
        const v = ch[i];
        if (Math.abs(v) > 0.005) { sumSq += v * v; count++; }
      }
      const rms = count > 0 ? Math.sqrt(sumSq / count) : 0.1;
      const gainVal = Math.min(2.2, Math.max(0.18, (0.11 / Math.max(rms, 0.02)) * (item.vol || 0.65)));
      const src = audioCtx.createBufferSource();
      src.buffer = buf;
      const gain = audioCtx.createGain();
      gain.gain.value = gainVal;
      const comp = audioCtx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 6;
      src.connect(gain);
      gain.connect(comp);
      comp.connect(audioCtx.destination);
      src.onended = () => { if (curNadaSrc === src) { curNadaSrc = null; onDone(); } };
      curNadaSrc = src;
      if (item.maxSec && buf.duration > item.maxSec) {
        const now = audioCtx.currentTime;
        const fadeStart = Math.max(0, item.maxSec - 1.5);
        gain.gain.setValueAtTime(gainVal, now + fadeStart);
        gain.gain.linearRampToValueAtTime(0.0001, now + item.maxSec);
        src.start(0, 0, item.maxSec);
      } else {
        src.start(0);
      }
    }
    function playNadaAt(idx) {
      if (!nadaLoopActive) return;
      const mySession = ++nadaSession;
      stopNadaAudioOnly();
      const total = NADI_NADA.nadas10.length;
      const item = NADI_NADA.nadas10[idx];
      const btn = nadaBtns[idx];
      if (btn) btn.classList.add("active");
      nadaNow.innerHTML = `${bi("Playing Loop", "వరుసగా వినిపిస్తోంది")} (${idx + 1}/${total}): <strong>${bi(item.en, item.te)}</strong>`;
      let advanced = false;
      const advanceNext = () => {
        if (advanced || !nadaLoopActive || mySession !== nadaSession) return;
        advanced = true;
        playNadaAt((idx + 1) % total);
      };
      playNormalizedNada(item, advanceNext).catch(() => {
        if (!nadaLoopActive || mySession !== nadaSession) return;
        const baseVol = item.vol || 0.65;
        curNadaAudio = new Audio(item.file);
        curNadaAudio.volume = baseVol;
        if (item.maxSec) {
          curNadaAudio.addEventListener("timeupdate", () => {
            if (!curNadaAudio) return;
            const ct = curNadaAudio.currentTime;
            if (ct >= item.maxSec) {
              curNadaAudio.pause();
              advanceNext();
            } else if (ct > item.maxSec - 1.5) {
              curNadaAudio.volume = Math.max(0, baseVol * ((item.maxSec - ct) / 1.5));
            }
          });
        }
        curNadaAudio.play().catch(() => {});
        curNadaAudio.addEventListener("ended", advanceNext);
      });
    }
    document.getElementById("nadaStopBtn").addEventListener("click", () => { stopNada(); nadaNow.textContent = ""; });
    nadaBtns.forEach(btn => btn.addEventListener("click", () => {
      nadaLoopActive = true;
      playNadaAt(Number(btn.dataset.ni));
    }));

    // 10. Vibhuti & Kaivalya Pada
    const VIBHUTI_TE = [
      [
        "• మూడు పరిణామాలపై సంయమం (III.16): భూత-భవిష్యత్ జ్ఞానం.",
        "• సూర్య-చంద్ర-ధ్రువ తారలపై సంయమం (III.26–28): లోక-నక్షత్ర గతుల జ్ఞానం.",
        "• నాభి-కంఠ-హృదయాలపై సంయమం (III.29–34): శరీర నిర్మాణం, ఆకలి-దప్పుల నివృత్తి & చిత్త జ్ఞానం.",
        "• మైత్రి & గజబలం (III.23–24): అపారమైన ప్రేమశక్తి & దేహబలం.",
        "• కాయసంపత్ (III.46): రూపం, లావణ్యం, బలం & వజ్రసమాన దృఢత్వం."
      ],
      [
        "• సిద్ధుల 5 మార్గాలు (IV.1): జన్మ, ఓషధి, మంత్ర, తపస్సు, సమాధి.",
        "• 4 రకాల కర్మలు (IV.7): శుక్ల (పుణ్య), కృష్ణ (పాప), మిశ్రమ, అశుక్లాకృష్ణ (యోగి కర్మ).",
        "• చిత్తనిర్మాణం & వాసనలు (IV.4–11): అనుకూల పరిస్థితులలో సంస్కారాలు ఫలిస్తాయి.",
        "• ధర్మమేఘ సమాధి & కైవల్యం (IV.29–34): త్రిగుణాలు ప్రకృతిలో లీనమై పురుషుడు స్వరూపంలో నిలుస్తాడు."
      ]
    ];
    document.getElementById("secVibhutiBody").innerHTML = `
      <div class="cards-grid">
        ${VIBHUTI_KAIVALYA.map((d, di) => `
          <div class="info-card">
            <h4>${bi(d.titleEn, d.titleTe)}</h4>
            <ul style="padding-left:1.05rem;font-size:0.82rem;margin-top:0.3rem;">
              ${d.items.map((it, ii) => `<li style="margin-bottom:0.25rem;">${bi(it, VIBHUTI_TE[di][ii])}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

    const VBT_UPAYAS = [
    { en: "1. Śāmbhavopāya (శంభవోపాయం)", te: "అత్యున్నత నిర్వికల్ప మార్గం", descEn: "Direct, thought-free, instantaneous recognition of pure Bhairava-consciousness without external supports (for highest seekers).", descTe: "బాహ్య ఆధారాలు లేకుండానే సంకల్పరహితమైన శుద్ధ చైతన్యంలో క్షణంలో లీనమయ్యే అత్యున్నత మార్గం." },
    { en: "2. Śāktopāya (శక్త్యోపాయం)", te: "మంత్ర-చింతన మార్గం", descEn: "Purified contemplation, mantra resonance, Cakra/Kuṇḍalinī awareness, and dissolving dualistic thoughts.", descTe: "మంత్ర నాదం, చక్ర-కుండలినీ ధ్యానం మరియు శుద్ధ చింతన ద్వారా ద్వైత భావనను కరిగించే మార్గం." },
    { en: "3. Āṇavopāya (ఆణవోపాయం)", te: "ప్రాణ-శరీర-ఇంద్రియ మార్గం", descEn: "Using breath pauses, sound, gaze, body sensations, and everyday experiences as doorways into stillness.", descTe: "శ్వాస విరామాలు, దృష్టి, శబ్దం, ఇంద్రియానుభవాలు మరియు నిత్యజీవిత ఘట్టాలను ధ్యాన ద్వారాలుగా వాడే సులభ మార్గం." }
  ];

  const VBT_PILLARS = [
    {
      titleEn: "Dhāraṇās 1–11: Breath, Prāṇa & Kumbhaka (vv. 24–34)",
      titleTe: "ధారణలు 1–11: ప్రాణ-అపాన విరామాలు & కుంభకం (శ్లో. 24–34)",
      items: [
        ["• Dhāraṇā 1–2 (vv. 24–25): Rest awareness in the two silent pauses where in-breath (Prāṇa) turns to out-breath (Apāna) at the Heart and Dvādaśānta (12 fingers outside).", "• ధారణ 1–2 (శ్లో. 24–25): హృదయంలో మరియు ముక్కు బయట 12 అంగుళాల దూరంలో శ్వాస మలుపు తిరిగే రెండు నిశ్శబ్ద విరామాలలో దృష్టిని నిలపడం."],
        ["• Dhāraṇā 3–7 (vv. 26–30): Rest in effortless Kumbhaka when breath pauses naturally, or feel Śakti rising from Mūlādhāra to Crown.", "• ధారణ 3–7 (శ్లో. 26–30): సహజ కుంభకంలో నిలవడం లేదా మూలాధారం నుండి సహస్రారం వరకు ప్రాణశక్తి పైకి లేవడాన్ని అనుభూతి చెందడం."],
        ["• Dhāraṇā 8–11 (vv. 31–34): Dissolve awareness at the crown-void above the head after breath steadies.", "• ధారణ 8–11 (శ్లో. 31–34): శ్వాస స్థిరపడిన తర్వాత శిరస్సు పైభాగంలోని శూన్యాకాశంలో మనస్సును లీనం చేయడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 12–23: Suṣumnā, Cakras & Nāda (vv. 35–46)",
      titleTe: "ధారణలు 12–23: సుషుమ్నా నాడి, చక్రాలు & నాదం (శ్లో. 35–46)",
      items: [
        ["• Dhāraṇā 12–15 (vv. 35–38): Meditate on central Suṣumnā like a luminous lotus-fiber, rising lightning Śakti, and unbroken Anāhata sound.", "• ధారణ 12–15 (శ్లో. 35–38): తామరతూడులాంటి సుషుమ్నా నాడిని, మెరుపులా లేచే కుండలినిని మరియు అనాహత నాదాన్ని ధ్యానించడం."],
        ["• Dhāraṇā 16–20 (vv. 39–42): Chant Praṇava (OM) or Bījas and merge into the silent Ardha-mātrā resonance after sound fades.", "• ధారణ 16–20 (శ్లో. 39–42): ప్రణవం (ఓం) లేదా బీజాక్షరాలను జపించి, శబ్దం ముగిసిన తర్వాత ఉండే నిశ్శబ్ద తరంగంలో లీనమవడం."],
        ["• Dhāraṇā 21–23 (vv. 43–46): Feel the body as an empty vessel filled only with boundless space.", "• ధారణ 21–23 (శ్లో. 43–46): శరీరాన్ని లోపల ఏమీ లేని ఖాళీ పాత్రలా, అనంత ఆకాశంతో నిండినదానిలా భావించడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 24–36: Mudrā, Light & Darkness (vv. 47–59)",
      titleTe: "ధారణలు 24–36: ముద్రలు, జ్యోతి & తమస్సు ధ్యానం (శ్లో. 47–59)",
      items: [
        ["• Dhāraṇā 24–29 (vv. 47–53): Pierce the 5 centers (heart, throat, palate, brow, crown) sequentially or focus on a point of light.", "• ధారణ 24–29 (శ్లో. 47–53): హృదయం, కంఠం, తాలువు, భ్రూమధ్యం, బ్రహ్మరంధ్రం అనే పంచ స్థానాలను క్రమంగా ధ్యానించడం."],
        ["• Dhāraṇā 30–36 (vv. 54–59): Contemplate pure darkness on a moonless night or inner radiant light at the brow until duality vanishes.", "• ధారణ 30–36 (శ్లో. 54–59): అమావాస్య చీకటిని లేదా భ్రూమధ్యంలోని దివ్య జ్యోతిని ద్వైతం నశించే వరకు ధ్యానించడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 37–49: Senses, Music & Joy (vv. 60–73)",
      titleTe: "ధారణలు 37–49: ఇంద్రియాలు, సంగీతం & ఆనందానుభవం (శ్లో. 60–73)",
      items: [
        ["• Dhāraṇā 37–43 (vv. 60–68): Close ears/eyes gently to hear subtle inner resonance, or rest in the sensation between wakefulness & sleep.", "• ధారణ 37–43 (శ్లో. 60–68): చెవులు-కళ్ళు మూసి అంతర్నాదాన్ని వినడం, లేదా మెలకువ-నిద్రల మధ్య స్థితిలో నిలవడం."],
        ["• Dhāraṇā 44–49 (vv. 69–73): Rest in the pure surge of bliss during music, delicious taste, or joyous reunion with a loved one.", "• ధారణ 44–49 (శ్లో. 69–73): మధురమైన సంగీతం, రుచికరమైన ఆహారం లేదా ఆత్మీయుల కలయికలో కలిగే శుద్ధ ఆనందంలోనే లీనమవడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 50–62: Gaze, Blue Sky & Elements (vv. 74–88)",
      titleTe: "ధారణలు 50–62: త్రాటకం, నీలాకాశం & పంచభూతాలు (శ్లో. 74–88)",
      items: [
        ["• Dhāraṇā 50–56 (vv. 74–82): Gaze steadily at a lamp flame, water, or your own reflection without conceptualizing until mind stills.", "• ధారణ 50–56 (శ్లో. 74–82): దీపం, నీరు లేదా ప్రతిబింబాన్ని ఆలోచనలు లేకుండా స్థిరంగా చూస్తూ మనస్సును నిశ్చలం చేయడం."],
        ["• Dhāraṇā 57–62 (vv. 83–88): Stare into a cloudless blue sky or boundless space above & below until mind merges with vastness.", "• ధారణ 57–62 (శ్లో. 83–88): మేఘరహిత నీలాకాశాన్ని లేదా అనంత శూన్యాన్ని చూస్తూ మనస్సును ఆకాశంతో ఏకం చేయడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 63–75: Thought-Gaps & Chasm Edge (vv. 89–101)",
      titleTe: "ధారణలు 63–75: సంకల్పాల మధ్య విరామం & నిర్వికల్పం (శ్లో. 89–101)",
      items: [
        ["• Dhāraṇā 63–69 (vv. 89–96): Catch the silent gap between two thoughts (Madhya-vikāsa) or repeat a word until meaning dissolves into pure sound.", "• ధారణ 63–69 (శ్లో. 89–96): రెండు ఆలోచనల మధ్య ఉన్న ఖాళీ స్థితిని పట్టుకోవడం లేదా అక్షర జపంతో సంకల్పాలను కరిగించడం."],
        ["• Dhāraṇā 70–75 (vv. 97–101): Stand mentally at the edge of a deep chasm or sudden stop — in the suspension of all supports, Consciousness shines.", "• ధారణ 70–75 (శ్లో. 97–101): లోతైన అగాధం అంచున లేదా అకస్మాత్తుగా ఆగిన క్షణంలో కలిగే నిరాధార స్థితిలో భైరవ తత్వాన్ని దర్శించడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 76–88: Dream, Magic & Universal Mind (vv. 102–114)",
      titleTe: "ధారణలు 76–88: ప్రపంచం మాయాచిత్రం & సర్వవ్యాప్త మనస్సు (శ్లో. 102–114)",
      items: [
        ["• Dhāraṇā 76–82 (vv. 102–108): See the world as a painted canvas or dream; feel 'My mind is everywhere, not inside this body alone' (v. 108).", "• ధారణ 76–82 (శ్లో. 102–108): ప్రపంచాన్ని ఒక చిత్రపటం లేదా స్వప్నంగా చూసి 'నా మనస్సు సర్వత్రా వ్యాపించి ఉంది' అని భావించడం."],
        ["• Dhāraṇā 83–88 (vv. 109–114): Look upon friend and enemy, pleasure and pain with total equanimity.", "• ధారణ 83–88 (శ్లో. 109–114): మిత్ర-శత్రువులను, సుఖ-దుఃఖాలను సమభావంతో దర్శించడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 89–100: Anger, Fear, Pain & Ego (vv. 115–127)",
      titleTe: "ధారణలు 89–100: క్రోధం, భయం, బాధ & అహంకార లయం (శ్లో. 115–127)",
      items: [
        ["• Dhāraṇā 89–94 (vv. 115–120): Freeze at the peak of anger, desire, fear, or jealousy without acting — watch the raw energy reveal Śiva.", "• ధారణ 89–94 (శ్లో. 115–120): కోపం, భయం, ఆశ తీవ్రమైన క్షణంలో కదలకుండా ఆ శక్తిని సాక్షిగా గమనిస్తే శివతత్వం ప్రకాశిస్తుంది."],
        ["• Dhāraṇā 95–100 (vv. 121–127): Focus acutely on a sharp pain or let go of 'I' and 'mine' completely.", "• ధారణ 95–100 (శ్లో. 121–127): తీవ్రమైన బాధపై ఏకాగ్రత ఉంచడం లేదా 'నేను-నాది' అనే అహంకారాన్ని పూర్తిగా వదలడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 101–108: Subject–Object Unity (vv. 128–144)",
      titleTe: "ధారణలు 101–108: జ్ఞాన-జ్ఞేయ అభేదం (శ్లో. 128–144)",
      items: [
        ["• Dhāraṇā 101–104 (vv. 128–136): Realize knower, knowing, and known are one unbroken Awareness (Jñāna-jñeya-abheda).", "• ధారణ 101–104 (శ్లో. 128–136): జ్ఞాత, జ్ఞానం, జ్ఞేయం అన్నీ ఒకే చైతన్య స్వరూపమని గుర్తించడం."],
        ["• Dhāraṇā 105–108 (vv. 137–144): See every being as Śiva's own form; drop concepts of bondage and liberation.", "• ధారణ 105–108 (శ్లో. 137–144): సర్వ జీవులను శివస్వరూపంగా చూసి బంధ-మోక్ష భ్రమలను దాటడం."]
      ]
    },
    {
      titleEn: "Dhāraṇās 109–112: True Pūjā & Haṁsa Ajapā (vv. 145–163)",
      titleTe: "ధారణలు 109–112: నిజమైన పూజ & 21,600 హంస జపం (శ్లో. 145–163)",
      items: [
        ["• True Pūjā (vv. 151–153): Worshipper, worshipped Bhairava, and offering are One Consciousness — entering that state is supreme worship.", "• నిజమైన పూజ (శ్లో. 151–153): పూజారి, పూజింపబడే భైరవుడు, పూజాద్రవ్యాలు అన్నీ ఒక్కటే అని భావించడమే పరమ పూజ."],
        ["• Haṁsa Ajapā-Japa (vv. 155–156): Every out-breath is 'Haṁ', in-breath is 'Saḥ' — repeating 21,600 times daily; guard this nectar amidst daily duties (vv. 159–161).", "• హంస అజపా జపం (శ్లో. 155–156): ప్రతి ఉచ్ఛ్వాస-నిశ్వాసలలో 'హం-స' మంత్రం రోజుకు 21,600 సార్లు సహజంగా జరుగుతుంది."]
      ]
    }
  ];

    // 11. Vijñāna Bhairava Tantra (All 112 Dhāraṇās & 3 Upāyas + Enlarged Visual Guide)
    document.getElementById("secVbtBody").innerHTML = `
      <div class="split-2" style="margin-bottom:1rem;">
        <div class="panel-box" style="text-align:center;">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Visual Guide: 3 Upāyas & The Breath-Gap Doorway", "దృశ్య మార్గదర్శి: 3 ఉపాయాలు & ప్రాణ-అపాన విరామ స్థానం")}</h4>
          <svg viewBox="0 0 460 320" style="width:100%;max-width:520px;min-height:280px;background:rgba(6,8,13,0.78);border-radius:14px;border:1px solid rgba(168,85,247,0.42);margin:0 auto;display:block;">
            <defs>
              <radialGradient id="vbtGlow" cx="50%" cy="20%" r="50%">
                <stop offset="0%" stop-color="#a855f7" stop-opacity="0.48"/>
                <stop offset="100%" stop-color="#06080d" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="460" height="320" fill="url(#vbtGlow)"/>
            <!-- 1. Sambhavopaya Crown Halo -->
            <circle cx="230" cy="64" r="46" fill="none" stroke="#ffd97d" stroke-width="2.2" stroke-dasharray="5 4"/>
            <text x="230" y="38" text-anchor="middle" fill="#ffd97d" font-size="13" font-weight="800">1. ŚĀMBHAVOPĀYA (శంభవోపాయం)</text>
            <text x="230" y="55" text-anchor="middle" fill="#f1f5f9" font-size="11">Pure Space • Thought-Free Awareness</text>
            <!-- Central Susumna Channel & Cakras -->
            <line x1="230" y1="74" x2="230" y2="270" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
            <circle cx="230" cy="112" r="7.5" fill="#c084fc"/>
            <circle cx="230" cy="162" r="9" fill="#38bdf8"/>
            <circle cx="230" cy="214" r="7.5" fill="#10b981"/>
            <circle cx="230" cy="262" r="7.5" fill="#f59e0b"/>
            <!-- 2. Saktopaya Label -->
            <text x="348" y="114" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="800">2. ŚĀKTOPĀYA (శక్త్యోపాయం)</text>
            <text x="348" y="131" text-anchor="middle" fill="#cbd5e1" font-size="10.5">Suṣumnā, Cakras, Mantra &amp; Nāda</text>
            <!-- 3. Anavopaya Breath-Gap Pause Indicators (v. 24-27) -->
            <path d="M126 162 Q174 132 218 162" fill="none" stroke="#10b981" stroke-width="3"/>
            <path d="M218 176 Q174 206 126 176" fill="none" stroke="#f59e0b" stroke-width="3"/>
            <circle cx="230" cy="162" r="14" fill="rgba(56,189,248,0.24)" stroke="#38bdf8" stroke-width="2">
              <animate attributeName="r" values="11;18;11" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="116" cy="169" r="10" fill="rgba(245,185,66,0.22)" stroke="#ffd97d" stroke-width="2">
              <animate attributeName="r" values="8;14;8" dur="4s" begin="2s" repeatCount="indefinite"/>
            </circle>
            <text x="92" y="132" text-anchor="middle" fill="#10b981" font-size="11.5" font-weight="700">Inhale (Saḥ) →</text>
            <text x="92" y="214" text-anchor="middle" fill="#f59e0b" font-size="11.5" font-weight="700">← Exhale (Haṁ)</text>
            <text x="348" y="170" text-anchor="middle" fill="#38bdf8" font-size="10.5" font-weight="700">Gap 1: Heart (హృదయం)</text>
            <text x="92" y="232" text-anchor="middle" fill="#ffd97d" font-size="10.5" font-weight="700">Gap 2: 12 Fingers Outside</text>
            <text x="230" y="300" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">3. ĀṆAVOPĀYA (ఆణవోపాయం): Rest in the 2 Silent Breath Gaps</text>
          </svg>
          <p style="font-size:0.82rem;color:var(--text-muted);margin-top:0.5rem;">${bi("Watch the pulsing circles: Bhairava is revealed in the effortless pause at the end of inhale & exhale (vv. 24–27).", "వెలిగే వలయాలను గమనించండి: శ్వాస లోపలికి పీల్చి ఆగిన చోట, బయటకు వదిలి ఆగిన చోట నిశ్చల స్థితి అనుభవమవుతుంది.")}</p>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.45rem;">${bi("3 Simple Doorways (Upāyas) — How Any Beginner Can Start", "సులభమైన 3 సాధనా మార్గాలు (ప్రారంభకుల కోసం)")}</h4>
          ${VBT_UPAYAS.map(u => `<div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.08);"><strong style="color:var(--gold-bright);">${bi(u.en, u.te)}</strong><div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.15rem;">${bi(u.descEn, u.descTe)}</div></div>`).join("")}
          <div style="margin-top:0.65rem;padding:0.6rem 0.75rem;background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.3);border-radius:8px;font-size:0.82rem;">
            <strong style="color:#6ee7b7;">${bi("1-Minute Practice Tip:", "1 నిమిషం సులభ సాధన:")}</strong>
            ${bi("Close your eyes, breathe naturally without forcing. Notice the tiny 1-second stillness after breathing in, and after breathing out. Simply rest there.", "కళ్ళు మూసుకుని సహజంగా శ్వాసించండి. గాలి పీల్చిన తర్వాత, వదిలిన తర్వాత వచ్చే 1 సెకను నిశ్శబ్ద విరామాన్ని గమనించండి.")}
          </div>
        </div>
      </div>
      <div class="cards-grid">
        ${VBT_PILLARS.map(p => `
          <div class="info-card">
            <h4>${bi(p.titleEn, p.titleTe)}</h4>
            <ul style="padding-left:1.05rem;font-size:0.82rem;margin-top:0.35rem;">
              ${p.items.map(it => `<li style="margin-bottom:0.28rem;">${bi(it[0], it[1])}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    `;

    // Quiz
    const qBody = document.getElementById("secQuizBody");
    let score = 0; const done = new Set();
    qBody.innerHTML = `<div class="shloka-box"><strong>${bi("Score:", "స్కోరు:")} <span id="yScore">0</span> / ${QUIZ.length}</strong></div>` +
      QUIZ.map((q, qi) => `<div class="quiz-q" data-qi="${qi}"><strong>${qi + 1}. ${bi(q.qEn, q.qTe)}</strong>${q.opts.map((o, oi) => `<button class="quiz-opt" data-oi="${oi}">${o}</button>`).join("")}<div class="quiz-exp" style="display:none;margin-top:0.4rem;font-size:0.83rem;color:var(--cyan-bright);"></div></div>`).join("");
    qBody.querySelectorAll(".quiz-opt").forEach(btn => btn.addEventListener("click", () => {
      const box = btn.closest(".quiz-q"); const qi = Number(box.dataset.qi);
      if (done.has(qi)) return; done.add(qi);
      const oi = Number(btn.dataset.oi); const q = QUIZ[qi];
      box.querySelectorAll(".quiz-opt")[q.ans].classList.add("correct");
      if (oi === q.ans) { score++; document.getElementById("yScore").textContent = String(score); }
      else btn.classList.add("wrong");
      const exp = box.querySelector(".quiz-exp"); exp.style.display = "block"; exp.innerHTML = bi(q.expEn, q.expTe);
    }));
  }

  document.addEventListener("DOMContentLoaded", () => { initHeaderAndScroll(); renderAll(); });
})();
