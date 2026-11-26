// Chandas Bilingual Guides (Dual / Telugu / English) + Swasa Maha Vignanam (Breaths, Lifespan & Saktis)
(function () {
  "use strict";

  function bi(en, te) {
    return `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;
  }

  const CHANDAS_GUIDES = {
    "scanner": {
      whatEn: "Breaks any Sanskrit, Telugu, or Latin verse into syllables (Akṣaras) and marks each as short Laghu (⏑ = 1 beat) or long Guru (— = 2 beats), then identifies its classical metre.",
      whatTe: "ఏదైనా సంస్కృత లేదా తెలుగు పద్యాన్ని అక్షరాలుగా విడదీసి, లఘువు (⏑ = 1 మాత్ర) మరియు గురువు (— = 2 మాత్రలు) గుర్తించి దాని ఛందస్సును చెబుతుంది.",
      whyEn: "Chandas is the musical heartbeat of mantras and poetry — knowing Laghu/Guru helps you pronounce verses accurately and feel their natural breathing rhythm.",
      whyTe: "మంత్రాలు మరియు పద్యాల లయబద్ధమైన ఉచ్చారణకు ఛందస్సు మూలం; లఘు-గురువులు తెలిస్తే సరైన శ్వాసతో చదవవచ్చు.",
      howEn: "Click any Famous Preset button (like Gāyatrī or Telugu Utpalamāla) or type your own verse into the box to see live Gaṇa triplets and Yati/Prāsa rhythm.",
      howTe: "పైన ఉన్న ఉదాహరణ బటన్లలో ఒకదాన్ని క్లిక్ చేయండి లేదా మీ పద్యం టైప్ చేసి గణాలు, లఘు-గురువులను చూడండి.",
      exEn: "Gāyatrī Mantra has 24 syllables (3 pādas × 8); Bhujangaprayāta is 4 × Ya-gaṇa (⏑ — —) giving a flowing wave-like chant.",
      exTe: "ఉదాహరణ: గాయత్రీ మంత్రానికి 24 అక్షరాలు (3 పాదాలు × 8); తెలుగు ఉత్పలమాలలో భ-ర-న-భ-భ-ర-వ గణాలు ఉంటాయి."
    },
    "ganas": {
      whatEn: "The 8 Gaṇas are all 8 possible 3-syllable combinations of Laghu (⏑) and Guru (—), remembered through the single formula 'Ya-mā-tā-rā-ja-bhā-na-sa-la-gām'.",
      whatTe: "'యమాతారాజభానసలగాం' అనే ఒకే సూత్రంతో గుర్తుంచుకునే 8 మూడు-అక్షరాల గణాలే అష్టగణాలు (మ, య, ర, స, త, జ, భ, న).",
      whyEn: "Instead of memorizing hundreds of patterns syllable-by-syllable, poets and chanters compress any long verse into a short chain of 3-letter Gaṇas.",
      whyTe: "పెద్ద పద్యాలను సులభంగా గుర్తుంచుకోవడానికి 3 అక్షరాల గణాల రూపంలో సంక్షిప్తంగా రాస్తారు.",
      howEn: "Read the 8 Gaṇa cards to see each Gaṇa's Laghu/Guru pattern, binary bits, and traditional Sanskrit/Telugu effect.",
      howTe: "8 గణాల కార్డులలో ప్రతి గణం యొక్క లఘు-గురు గుర్తులు మరియు బైనరీ విలువను చూడండి.",
      exEn: "Take 'Ya-mā-tā' → ⏑ — — (Ya-gaṇa); 'Mā-tā-rā' → — — — (Ma-gaṇa); 'Na-sa-la' → ⏑ ⏑ ⏑ (Na-gaṇa).",
      exTe: "ఉదాహరణ: 'యమాతా' = ⏑ — — (య గణం); 'మాతారా' = — — — (మ గణం); 'నసల' = ⏑ ⏑ ⏑ (న గణం)."
    },
    "binary": {
      whatEn: "Acharya Piṅgala (c. 300 BCE) mapped Guru=0 and Laghu=1 (or 2-symbol combinations) to list all 2ⁿ metres (Prastāra) and convert between pattern and row number (Naṣṭa / Uddiṣṭa).",
      whatTe: "ఆచార్య పింగళుడు (క్రీ.పూ. 300) గురు-లఘువులను 0, 1లుగా ఉపయోగించి 2ⁿ ఛందస్సుల పట్టిక (ప్రస్తారం), నష్ట-ఉద్దిష్ట గణనలను కనుగొన్నారు.",
      whyEn: "This is the world's earliest known binary system — showing that Indian prosody laid the mathematical foundation for modern computer logic.",
      whyTe: "ఆధునిక కంప్యూటర్ బైనరీ గణితానికి రెండు వేల ఏళ్ల ముందే భారతీయ ఛందశ్శాస్త్రం పునాది వేసింది.",
      howEn: "Adjust the syllable count (n) or enter a row index in Naṣṭa / a L-G pattern in Uddiṣṭa to watch Piṅgala's algorithms work live.",
      howTe: "అక్షరాల సంఖ్య (n) లేదా నష్ట-ఉద్దిష్ట ఇన్‌పుట్‌లను మార్చి ప్రస్తార ఫలితాలను చూడండి.",
      exEn: "For n = 4 syllables, there are 2⁴ = 16 possible metres; row #1 is all Gurus (— — — —) and row #16 is all Laghus (⏑ ⏑ ⏑ ⏑).",
      exTe: "ఉదాహరణ: n = 4 అక్షరాలకు 2⁴ = 16 వృత్తాలు వస్తాయి."
    },
    "meru": {
      whatEn: "Meru Prastāra is Piṅgala's stepped pyramid of numbers (rediscovered 1,800 years later as Pascal's Triangle) and Mātrāvṛtta uses Fibonacci numbers to count metres by total beat-count.",
      whatTe: "మేరు ప్రస్తారం పింగళుడు కనుగొన్న సంఖ్యా పిరమిడ్ (పాస్కల్ త్రిభుజం); మాత్రావృత్తం ఫిబొనాచి సంఖ్యలతో మాత్రల ఆధారంగా ఛందస్సులను లెక్కిస్తుంది.",
      whyEn: "Lets you instantly know how many metres of length n have exactly k Laghus or total m beats (Mātrās) without writing out every row.",
      whyTe: "ప్రతి పంక్తిని రాయకుండానే ఎన్ని లఘువులు లేదా ఎన్ని మాత్రలు ఉన్న పద్యాలు ఎన్నో తక్షణమే తెలుసుకోవచ్చు.",
      howEn: "Look at the pyramid rows for combinations C(n, k), and inspect the Mātrāvṛtta sequence (1, 2, 3, 5, 8, 13...) for beat-count metres.",
      howTe: "పిరమిడ్ వరుసలలో C(n, k) విలువలను మరియు మాత్రావృత్త క్రమాన్ని (1, 2, 3, 5, 8...) చూడండి.",
      exEn: "In row n = 4 of Meru Prastāra (1, 4, 6, 4, 1), there are 6 metres with exactly 2 Laghus and 2 Gurus.",
      exTe: "ఉదాహరణ: మేరు ప్రస్తారంలో n = 4 వరుస (1, 4, 6, 4, 1) లో 2 లఘువులు, 2 గురువులు ఉన్న ఛందస్సులు 6 ఉంటాయి."
    },
    "neuroscience": {
      whatEn: "Modern EEG, MRI, and autonomic physiology explain WHY rhythmic Sanskrit/Telugu Chandas chanting calms the mind, sharpens memory, and heals stress.",
      whatTe: "లయబద్ధమైన ఛందస్సు-మంత్ర పఠనం మనస్సును ఎందుకు శాంతపరుస్తుంది, జ్ఞాపకశక్తిని ఎలా పెంచుతుందో ఆధునిక న్యూరోసైన్స్ వివరిస్తుంది.",
      whyEn: "Connects ancient mantra practice with measurable biology: 4–12 Hz brainwaves, Vagus nerve activation, higher HRV, and hippocampal grey-matter growth.",
      whyTe: "ప్రాచీన మంత్ర జపాన్ని ఆల్ఫా-థీటా బ్రెయిన్‌వేవ్స్, వేగస్ నాడి మరియు హిప్పోకాంపస్ జ్ఞాపకశక్తి వృద్ధితో అనుసంధానిస్తుంది.",
      howEn: "Click the 432 Hz, 108 Hz, or 528 Hz local audio buttons to hear pure harmonic tones, then read the 5 scientific pillars below.",
      howTe: "పైన ఉన్న 432 Hz, 108 Hz, 528 Hz శబ్దాలను విని, క్రింది 5 శాస్త్రీయ అంశాలను చదవండి.",
      exEn: "Dr. James Hartzell's MRI study ('The Sanskrit Effect') found significantly denser grey matter in the hippocampus of Vedic chanters.",
      exTe: "ఉదాహరణ: 'సంస్కృత ప్రభావం' MRI పరిశోధనలో వేదపండితుల మెదడులోని జ్ఞాపకశక్తి కేంద్రం (హిప్పోకాంపస్) అధిక సాంద్రతతో ఉందని తేలింది."
    },
    "swasa": {
      whatEn: "Śvāsa Mahā Vijñānam (Science of Breath & Prāṇa) reveals how humans normally take ~21,600 breaths/day (15/min, 4 sec per Prāṇa) — and how slowing the breath through Chandas & Prāṇāyāma preserves vitality, lengthens life, and awakens inner mental Śaktis.",
      whatTe: "శ్వాస మహావిజ్ఞానం: మనిషి సాధారణంగా నిమిషానికి 15 సార్లు (రోజుకు 21,600 శ్వాసలు, 1 ప్రాణం = 4 సెకన్లు) శ్వాసిస్తాడు. ఛందస్సు-ప్రాణాయామంతో శ్వాసను నియంత్రిస్తే ఆయుస్సు, ఆరోగ్యం మరియు అంతఃశక్తులు పెరుగుతాయి.",
      whyEn: "Across nature, fast breathers (mouse, dog, monkey) have shorter lives while slow breathers (elephant, whale, tortoise) live far longer. Slow rhythmic chanting drops breathing from ~15/min to ~5/min!",
      whyTe: "ప్రకృతిలో వేగంగా శ్వాసించే జంతువులకు (ఎలుక, కుక్క) తక్కువ ఆయుస్సు, నెమ్మదిగా శ్వాసించే వాటికి (ఏనుగు, తాబేలు) దీర్ఘాయుస్సు ఉంటుంది. లయబద్ధమైన మంత్ర పఠనం శ్వాసను నిమిషానికి 5కు తగ్గిస్తుంది.",
      howEn: "Move the Breath-Rate Slider to see how many thousands of breaths you save per day, compare the Animal Breath-Lifespan table, and try the Guided Breath Pacer with chime.",
      howTe: "స్లైడర్‌ను కదిపి రోజుకు ఎన్ని శ్వాసలు ఆదా అవుతాయో చూడండి, జంతువుల పట్టికను పోల్చండి మరియు శ్వాస అభ్యాస చక్రాన్ని ప్రయత్నించండి.",
      exEn: "Traditional calculation: 1 Prāṇa = 4s → 15/min × 60 × 24 = 21,600 breaths/day. Slowing to 6 breaths/min saves 12,960 breaths/day (~60% lower autonomic strain).",
      exTe: "ఉదాహరణ: 1 ప్రాణం = 4 సెకన్లు → రోజుకు 21,600 శ్వాసలు. నిమిషానికి 6 శ్వాసలకు తగ్గిస్తే రోజుకు 12,960 శ్వాసలు ఆదా అవుతాయి!"
    },
    "compendium": {
      whatEn: "A quick reference table of the most famous Sanskrit and Telugu metres — from 24-syllable Gāyatrī to 21-syllable Sragdharā and Campakamāla.",
      whatTe: "గాయత్రి (24) నుండి స్రగ్ధర (21) మరియు తెలుగు ఉత్పలమాల, చంపకమాల, మత్తేభం వరకు ప్రసిద్ధ ఛందస్సుల పట్టిక.",
      whyEn: "Gives poets, students, and stotra readers an instant lookup for syllable counts, Gaṇa sequences, and classic examples.",
      whyTe: "విద్యార్థులు మరియు కవులకు ఏ పద్యానికి ఏ గణాలు, ఎన్ని అక్షరాలు ఉంటాయో తక్షణమే తెలుసుకోవడానికి సహాయపడుతుంది.",
      howEn: "Scan the rows by syllable count or click a metre name in Section 1 presets to test it live.",
      howTe: "అక్షరాల సంఖ్య మరియు గణాల క్రమాన్ని పట్టికలో చూడండి.",
      exEn: "Utpalamāla (20 syllables, Yati at 10: Bha-Ra-Na-Bha-Bha-Ra-Va) is one of the pillars of Telugu Mahābhāratamu.",
      exTe: "ఉదాహరణ: నన్నయ మహాభారతంలో ఉత్పలమాల (20 అక్షరాలు, 10వ అక్షరం యతి) విరివిగా వాడబడింది."
    }
  };

  function injectGuides() {
    Object.entries(CHANDAS_GUIDES).forEach(([id, g]) => {
      const sec = document.getElementById(id);
      if (!sec) return;
      const old = sec.querySelector(":scope > .guide-details");
      if (old) old.remove();
      const details = document.createElement("details");
      details.className = "guide-details";
      details.open = true;
      details.innerHTML = `
        <summary>${bi("Beginner Guide: Meaning, Why Important, How to Use &amp; Example", "సులభ వివరణ: అర్థం, ప్రాముఖ్యత, వాడే విధానం &amp; ఉదాహరణ")}</summary>
        <div class="guide-grid">
          <div class="guide-cell"><div class="guide-cell-title">${bi("1. What It Means", "1. దీని అర్థం")}</div><div>${bi(g.whatEn, g.whatTe)}</div></div>
          <div class="guide-cell"><div class="guide-cell-title">${bi("2. Why Important &amp; How It Helps", "2. ఎందుకు ముఖ్యం &amp; ఉపయోగం")}</div><div>${bi(g.whyEn, g.whyTe)}</div></div>
          <div class="guide-cell"><div class="guide-cell-title">${bi("3. How to Use", "3. ఎలా వాడాలి")}</div><div>${bi(g.howEn, g.howTe)}</div></div>
          <div class="guide-cell"><div class="guide-cell-title">${bi("4. Simple Example", "4. సులభ ఉదాహరణ")}</div><div>${bi(g.exEn, g.exTe)}</div></div>
        </div>`;
      const head = sec.querySelector(":scope > .section-head");
      if (head && head.nextSibling) sec.insertBefore(details, head.nextSibling);
      else sec.prepend(details);
    });
  }

  function initLangSwitcher() {
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
    function setDrawer(open) {
      if (!drawer || !overlay) return;
      drawer.classList.toggle("open", open);
      overlay.classList.toggle("open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      overlay.setAttribute("aria-hidden", String(!open));
      if (toggle) toggle.setAttribute("aria-expanded", String(open));
    }
    if (toggle) toggle.addEventListener("click", () => setDrawer(!drawer.classList.contains("open")));
    if (closeBtn) closeBtn.addEventListener("click", () => setDrawer(false));
    if (overlay) overlay.addEventListener("click", () => setDrawer(false));
    document.querySelectorAll(".drawer-nav-item").forEach(a => {
      a.addEventListener("click", () => {
        document.querySelectorAll(".drawer-nav-item").forEach(x => x.classList.remove("active"));
        a.classList.add("active");
        setDrawer(false);
      });
    });
  }

  function initSwasaLab() {
    const slider = document.getElementById("swasaBpmSlider");
    const out = document.getElementById("swasaCalcOut");
    const pacerBtn = document.getElementById("swasaPacerBtn");
    const orb = document.getElementById("swasaOrb");
    const orbText = document.getElementById("swasaOrbText");
    if (!slider || !out) return;

    function updateSwasa() {
      const bpm = parseInt(slider.value, 10) || 15;
      const secPerBreath = (60 / bpm).toFixed(1);
      const perHour = bpm * 60;
      const perDay = bpm * 1440;
      const diff = 21600 - perDay;
      let stateEn = "Normal Resting Rate (15 bpm • 1 Prāṇa = 4s)";
      let stateTe = "సాధారణ విశ్రాంతి శ్వాస (నిమిషానికి 15 • 1 ప్రాణం = 4 సెకన్లు)";
      let badgeClr = "var(--cyan-accent)";
      if (bpm <= 6) {
        stateEn = "Deep Yogic / Chandas Resonance (Vagal Activation, Calm Mind & Śakti)";
        stateTe = "గాఢ యోగ / ఛందస్సు స్థితి (వేగస్ నాడి ఉత్తేజం, మనశ్శాంతి & అంతఃశక్తి)";
        badgeClr = "var(--emerald-bright)";
      } else if (bpm <= 10) {
        stateEn = "Relaxed Rhythmic Breathing (Parasympathetic Balance)";
        stateTe = "ప్రశాంత లయబద్ధ శ్వాస (ఆరోగ్యకరమైన విశ్రాంతి స్థితి)";
        badgeClr = "var(--gold-bright)";
      } else if (bpm >= 18) {
        stateEn = "Fast / Shallow Breathing (Higher Sympathetic Stress Load)";
        stateTe = "వేగవంతమైన / అస్థిర శ్వాస (ఒత్తిడి ఎక్కువ)";
        badgeClr = "var(--rose-bright)";
      }
      document.getElementById("swasaBpmVal").textContent = `${bpm} / min`;
      out.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:0.65rem;margin-top:0.75rem;">
          <div class="metric-card"><div class="metric-label">${bi("Sec / Breath", "శ్వాస సమయం")}</div><div class="metric-val">${secPerBreath}s</div></div>
          <div class="metric-card"><div class="metric-label">${bi("Breaths / Hour", "గంటకు శ్వాసలు")}</div><div class="metric-val">${perHour.toLocaleString()}</div></div>
          <div class="metric-card"><div class="metric-label">${bi("Breaths / Day", "రోజుకు శ్వాసలు")}</div><div class="metric-val">${perDay.toLocaleString()}</div></div>
          <div class="metric-card"><div class="metric-label">${bi("vs 21,600 Baseline", "21,600తో పోలిక")}</div><div class="metric-val" style="color:${diff >= 0 ? "var(--emerald-bright)" : "var(--rose-bright)"};">${diff >= 0 ? `-${diff.toLocaleString()}` : `+${Math.abs(diff).toLocaleString()}`}</div></div>
        </div>
        <div style="margin-top:0.75rem;padding:0.6rem 0.85rem;border-radius:8px;background:rgba(255,255,255,0.04);border-left:3px solid ${badgeClr};font-size:0.85rem;">
          ${bi(stateEn, stateTe)}
        </div>`;
    }
    slider.addEventListener("input", updateSwasa);
    updateSwasa();

    // Multi-Technique Breath Pacer Catalog
    const BREATH_TECHNIQUES = {
      chandas_426: {
        id: "chandas_426",
        nameEn: "Chandas 4-2-6",
        nameTe: "ఛందస్సు 4-2-6",
        bpm: 5,
        descEn: "Inhale 4s • Hold 2s • Exhale 6s (5 breaths/min) — Balanced focus & parasympathetic resonance",
        descTe: "4సె పూరకం • 2సె కుంభకం • 6సె రేచకం (నిమిషానికి 5 శ్వాసలు) — ఏకాగ్రత & వేగస్ నాడి ఉత్తేజం",
        phases: [
          { labelEn: "Inhale (4s)", labelTe: "పూరకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold (2s)", labelTe: "కుంభకం (2సె)", dur: 2000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (6s)", labelTe: "రేచకం (6సె)", dur: 6000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      box_4444: {
        id: "box_4444",
        nameEn: "Sama Vṛtti / Box 4-4-4-4",
        nameTe: "సమవృత్తి 4-4-4-4",
        bpm: 3.75,
        descEn: "Inhale 4s • Hold 4s • Exhale 4s • Suspend 4s (3.75 breaths/min) — Equal ratio Sama Vṛtti / Box Breathing",
        descTe: "4సె పూరకం • 4సె అంతఃకుంభకం • 4సె రేచకం • 4సె బాహ్యకుంభకం (నిమిషానికి 3.75 శ్వాసలు) — సమవృత్తి స్థిరత్వం",
        phases: [
          { labelEn: "Inhale (4s)", labelTe: "పూరకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold Full (4s)", labelTe: "అంతఃకుంభకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (4s)", labelTe: "రేచకం (4సె)", dur: 4000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 },
          { labelEn: "Suspend Empty (4s)", labelTe: "బాహ్యకుంభకం (4సె)", dur: 4000, scale: "scale(0.86)", cls: "phase-hold-empty", tone: 324 }
        ]
      },
      calm_478: {
        id: "calm_478",
        nameEn: "Praśānta 4-7-8",
        nameTe: "ప్రశాంత 4-7-8",
        bpm: 3.16,
        descEn: "Inhale 4s • Hold 7s • Exhale 8s (3.2 breaths/min) — Deep Praśānta Viśrānti for anxiety & sound sleep",
        descTe: "4సె పూరకం • 7సె కుంభకం • 8సె రేచకం (నిమిషానికి 3.2 శ్వాసలు) — ప్రశాంత విశ్రాంతి & గాఢ నిద్ర",
        phases: [
          { labelEn: "Inhale (4s)", labelTe: "పూరకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold (7s)", labelTe: "కుంభకం (7సె)", dur: 7000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (8s)", labelTe: "రేచకం (8సె)", dur: 8000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      yogic_4168: {
        id: "yogic_4168",
        nameEn: "Classical Yogic 1:4:2",
        nameTe: "శాస్త్రీయ యోగ 1:4:2",
        bpm: 2.14,
        descEn: "Inhale 4s • Hold 16s • Exhale 8s (2.1 breaths/min) — Classical 1:4:2 Viṣama Vṛtti Prāṇāyāma",
        descTe: "4సె పూరకం • 16సె అంతఃకుంభకం • 8సె రేచకం (నిమిషానికి 2.1 శ్వాసలు) — శాస్త్రీయ 1:4:2 విషమవృత్తి సాధన",
        phases: [
          { labelEn: "Inhale (4s)", labelTe: "పూరకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold (16s)", labelTe: "అంతఃకుంభకం (16సె)", dur: 16000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (8s)", labelTe: "రేచకం (8సె)", dur: 8000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      coherent_505: {
        id: "coherent_505",
        nameEn: "Coherent Resonance 5-0-5",
        nameTe: "హృదయ సమన్వయ 5-0-5",
        bpm: 6,
        descEn: "Inhale 5s • Exhale 5s (6 breaths/min) — Coherent Dīrgha Śvāsa for peak Heart Rate Variability (HRV)",
        descTe: "5సె పూరకం • 5సె రేచకం (నిమిషానికి 6 శ్వాసలు) — హృదయ సమన్వయ దీర్ఘ శ్వాస & గరిష్ట HRV",
        phases: [
          { labelEn: "Inhale (5s)", labelTe: "పూరకం (5సె)", dur: 5000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Exhale (5s)", labelTe: "రేచకం (5సె)", dur: 5000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      santi_448: {
        id: "santi_448",
        nameEn: "Śānti 4-4-8",
        nameTe: "శాంతి 4-4-8",
        bpm: 3.75,
        descEn: "Inhale 4s • Hold 4s • Exhale 8s (3.75 breaths/min) — Extended exhale for deep cellular relaxation",
        descTe: "4సె పూరకం • 4సె కుంభకం • 8సె దీర్ఘ రేచకం (నిమిషానికి 3.75 శ్వాసలు) — శరీర కణాల గాఢ విశ్రాంతి",
        phases: [
          { labelEn: "Inhale (4s)", labelTe: "పూరకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold (4s)", labelTe: "కుంభకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (8s)", labelTe: "దీర్ఘ రేచకం (8సె)", dur: 8000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      kevala_848: {
        id: "kevala_848",
        nameEn: "Kevala Dhyāna 8-4-8",
        nameTe: "కేవల ధ్యాన 8-4-8",
        bpm: 3,
        descEn: "Inhale 8s • Hold 4s • Exhale 8s (3 breaths/min) — Deep meditative pacing for Dhyāna & introspection",
        descTe: "8సె పూరకం • 4సె కుంభకం • 8సె రేచకం (నిమిషానికి 3 శ్వాసలు) — ధ్యాన స్థితి & అంతర్ముఖ సాధన",
        phases: [
          { labelEn: "Inhale (8s)", labelTe: "పూరకం (8సె)", dur: 8000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold (4s)", labelTe: "కుంభకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (8s)", labelTe: "రేచకం (8సె)", dur: 8000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      flow_606: {
        id: "flow_606",
        nameEn: "Prāṇa Dhāraṇā 6-0-6",
        nameTe: "ప్రాణ ధారణ 6-0-6",
        bpm: 5,
        descEn: "Inhale 6s • Exhale 6s (5 breaths/min) — Pure rhythmic Prāṇa Dhāraṇā without retention",
        descTe: "6సె పూరకం • 6సె రేచకం (నిమిషానికి 5 శ్వాసలు) — కుంభకం లేని సహజ లయబద్ధ ప్రవాహం",
        phases: [
          { labelEn: "Inhale (6s)", labelTe: "పూరకం (6సె)", dur: 6000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Exhale (6s)", labelTe: "రేచకం (6సె)", dur: 6000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      },
      nadi_488: {
        id: "nadi_488",
        nameEn: "Nādī Śodhana 4-8-8",
        nameTe: "నాడీ శోధన 4-8-8",
        bpm: 3,
        descEn: "Inhale 4s • Hold 8s • Exhale 8s (3 breaths/min) — Nādī Śodhana classical pacing for mental stillness",
        descTe: "4సె పూరకం • 8సె కుంభకం • 8సె రేచకం (నిమిషానికి 3 శ్వాసలు) — నాడీ శుద్ధి & చిత్త స్థైర్యం",
        phases: [
          { labelEn: "Inhale (4s)", labelTe: "పూరకం (4సె)", dur: 4000, scale: "scale(1.24)", cls: "phase-inhale", tone: 216 },
          { labelEn: "Hold (8s)", labelTe: "కుంభకం (8సె)", dur: 8000, scale: "scale(1.24)", cls: "phase-hold", tone: 432 },
          { labelEn: "Exhale (8s)", labelTe: "రేచకం (8సె)", dur: 8000, scale: "scale(0.86)", cls: "phase-exhale", tone: 108 }
        ]
      }
    };

    const techSel = document.getElementById("breathTechniqueSel");
    const techDetail = document.getElementById("techniqueDetail");
    let currentTech = BREATH_TECHNIQUES.chandas_426;

    function applySelectedTechnique(techKey) {
      if (BREATH_TECHNIQUES[techKey]) {
        currentTech = BREATH_TECHNIQUES[techKey];
      }
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (orb) {
        orb.classList.remove("phase-inhale", "phase-hold", "phase-exhale", "phase-hold-empty");
        orb.style.transform = "scale(1)";
        orb.style.transition = "transform 0.6s ease-in-out, box-shadow 0.6s ease, border-color 0.6s ease, background 0.6s ease";
      }
      if (techDetail) {
        techDetail.innerHTML = bi(currentTech.descEn, currentTech.descTe);
      }
      if (orbText) {
        orbText.innerHTML = `<span class="lang-en">Ready<br><small style="opacity:0.8;">${currentTech.bpm} bpm</small></span><span class="lang-te"><br>సిద్ధం</span>`;
      }
      if (pacerBtn) {
        pacerBtn.innerHTML = `▶ ${bi(`Start ${currentTech.nameEn}`, `${currentTech.nameTe} ప్రారంభించు`)}`;
      }
    }

    if (techSel) {
      techSel.addEventListener("change", (e) => {
        applySelectedTechnique(e.target.value);
      });
    }

    let timer = null;
    let step = 0;

    function runPhase() {
      const phases = currentTech.phases;
      const ph = phases[step % phases.length];
      if (orb) {
        orb.classList.remove("phase-inhale", "phase-hold", "phase-exhale", "phase-hold-empty");
        orb.classList.add(ph.cls);
        orb.style.transition = `transform ${ph.dur / 1000}s ease-in-out, box-shadow 0.8s ease, border-color 0.8s ease, background 0.8s ease`;
        orb.style.transform = ph.scale;
      }
      if (orbText) {
        orbText.innerHTML = `<span class="lang-en">${ph.labelEn}</span><span class="lang-te"><br>${ph.labelTe}</span>`;
      }
      if (typeof playSacredHarmonic === "function") {
        playSacredHarmonic(ph.tone || 216, 1.2);
      }
      step++;
      timer = setTimeout(runPhase, ph.dur);
    }

    if (pacerBtn) {
      pacerBtn.addEventListener("click", () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
          if (orb) {
            orb.classList.remove("phase-inhale", "phase-hold", "phase-exhale", "phase-hold-empty");
            orb.style.transform = "scale(1)";
          }
          if (orbText) {
            orbText.innerHTML = `<span class="lang-en">Ready<br><small style="opacity:0.8;">${currentTech.bpm} bpm</small></span><span class="lang-te"><br>సిద్ధం</span>`;
          }
          pacerBtn.innerHTML = `▶ ${bi(`Start ${currentTech.nameEn}`, `${currentTech.nameTe} ప్రారంభించు`)}`;
        } else {
          step = 0;
          pacerBtn.innerHTML = `⏹ ${bi("Stop Breath Pacer", "శ్వాస అభ్యాసం ఆపు")}`;
          runPhase();
        }
      });
    }

    // Initialize technique detail text
    applySelectedTechnique("chandas_426");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLangSwitcher();
    injectGuides();
    initSwasaLab();
  });
})();
