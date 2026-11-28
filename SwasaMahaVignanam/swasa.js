// Swasa Maha Vignanam — Interactive Controller & Visualizations
(function () {
  "use strict";

  const D1 = window.SWASA_DATA_1;
  const D2 = window.SWASA_DATA_2;

  function bi(en, te) {
    return `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;
  }

  // Local WAV audio chime + Web Audio fallback for breath pacer
  let audioCtx = null;
  const AUDIO_FILES = {
    chime: "audio/breath_chime.wav",
    108: "audio/tone_108hz.wav",
    432: "audio/tone_432hz.wav",
    528: "audio/tone_528hz.wav"
  };

  function playChime(freq = "chime", dur = 1.0) {
    try {
      const file = AUDIO_FILES[freq] || AUDIO_FILES.chime;
      const audio = new Audio(file);
      audio.volume = 0.45;
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => playWebAudioFallback(typeof freq === "number" ? freq : 216, dur));
      }
    } catch (_) {
      playWebAudioFallback(typeof freq === "number" ? freq : 216, dur);
    }
  }

  function playWebAudioFallback(freq = 216, dur = 1.0) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === "suspended") audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0008, audioCtx.currentTime + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
    } catch (_) { /* ignore audio errors if blocked */ }
  }

  function initHeaderAndLang() {
    const langBtns = document.querySelectorAll(".lang-opt");
    langBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        langBtns.forEach(b => b.classList.remove("active"));
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
      toggle.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
    }

    if (toggle) toggle.addEventListener("click", () => setOpen(true));
    if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
    if (overlay) overlay.addEventListener("click", () => setOpen(false));
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        setOpen(false);
      });
    });

    // ScrollSpy: highlight whichever section is currently in view
    const sections = Array.from(document.querySelectorAll("section.study-section[id]"));
    function updateActiveNav() {
      const scrollPos = window.scrollY + 130;
      let currentId = sections[0] ? sections[0].id : "";
      for (const sec of sections) {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      }
      navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === `#${currentId}`);
      });
    }
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();
  }

  // SECTION 1: Foundations, Yuga Parivartana, Pollution & Yajna Vidya
  function initFoundations() {
    const el = document.getElementById("secFoundationsBody");
    if (!el) return;
    const f = D1.foundations;

    el.innerHTML = `
      <div class="reader-guide">
        <strong>${bi("Core Message (Part 1 pp. 1–25, Part 2 pp. 1–28):", "మూల సందేశం (భాగం 1 & 2):")}</strong>
        ${bi("Humanity stands at a 24-crore-year turning point. All Gurus are one (like LKG vs. higher-grade teachers). Amid modern pollution and medical side-effects, the Rishis restored two supreme sciences: Yajña Vidyā and Śvāsa Mahā Vijñān.", "24 కోట్ల సం॥ల తర్వాత వచ్చిన ఈ యుగపరివర్తనలో గురువులంతా ఒక్కటే (LKG నుండి పై తరగతుల ఉపాధ్యాయుల వలె). ఆధునిక కాలుష్య, వైద్య దుష్ప్రభావాల నుండి రక్షణకు ఋషులు యజ్ఞవిద్య, శ్వాస మహా విజ్ఞానాన్ని అందించారు.")}
      </div>

      <details class="collapsible-box">
        <summary>
          <span>${bi("Cosmic &amp; Yuga Parivartana Milestones (Click to Expand)", "యుగపరివర్తన &amp; దివ్య సంఘటనలు (వివరాలకు క్లిక్ చేయండి)")}</span>
        </summary>
        <div class="cards-grid">
          ${f.yugaEvents.map(ev => `
            <div class="info-card">
              <h4>${bi(ev.titleEn, ev.titleTe)}</h4>
              <p>${bi(ev.detailEn, ev.detailTe)}</p>
            </div>
          `).join("")}
        </div>
      </details>

      <div class="split-2" style="margin-bottom:1.15rem;">
        <div class="panel-box">
          <h4 style="color:var(--rose-accent);margin-bottom:0.6rem;">${bi("Modern Pollution & Health Crisis Cited in Book", "గ్రంథంలో పేర్కొన్న కాలుష్య & ఆరోగ్య హెచ్చరికలు")}</h4>
          ${f.modernCrisis.map(c => `
            <div style="padding:0.55rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
                <strong style="color:var(--gold-bright);">${bi(c.labelEn, c.labelTe)}</strong>
                <span class="tag-badge">${c.val}</span>
              </div>
              <p style="font-size:0.84rem;margin-top:0.25rem;">${bi(c.descEn, c.descTe)}</p>
            </div>
          `).join("")}
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.6rem;">${bi("Two Pillars of Human Evolution (Part 1, p. 12)", "మానవ అభివృద్ధికి రెండు ప్రధాన కారణాలు (పుట 12)")}</h4>
          ${f.twoPillars.map(p => `
            <div class="shloka-box" style="margin-bottom:0.7rem;">
              <strong style="color:var(--gold-bright);">${bi(p.nameEn, p.nameTe)}</strong>
              <p style="font-size:0.85rem;margin-top:0.25rem;">${bi(p.descEn, p.descTe)}</p>
            </div>
          `).join("")}
          <div class="shloka-box" style="margin-bottom:0;">
            <div class="shloka-te">"యజ్ఞఏవ సవితా దక్షిణా సావిత్రీ యజ్ఞ హ్యేవ యజ్ఞాస్త దక్షిణా తద్వజ్ఞ ఇతి ద్వేయోనీ ఏకం మిధునం॥"</div>
            <div class="shloka-meta">${bi("Gāyatrī Upaniṣad 11th couplet — Yajña is Savitā, Dakṣiṇā is Sāvitrī (Part 1, p. 23).", "గాయత్రీ ఉపనిషత్ 11వ శ్లోకం — యజ్ఞము సవిత, దక్షిణ సావిత్రి (భాగం 1: పుట 23).")}</div>
          </div>
        </div>
      </div>

      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Yajña Vidyā & Yajnopathy — Scientific Proofs (Part 1, pp. 13–25)", "యజ్ఞవిద్య & యజ్ఞోథెరపీ — శాస్త్రీయ నిరూపణలు")}</h4>
      <div class="cards-grid">
        ${f.yajnaScience.map(y => `
          <div class="info-card">
            <h4>${bi(y.titleEn, y.titleTe)}</h4>
            <p>${bi(y.detailEn, y.detailTe)}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  // SECTION 2: 21,600 Breaths, Lifespan & 12-to-1 Angula Siddhis
  function initLifespan() {
    const el = document.getElementById("secLifespanBody");
    if (!el) return;
    const L = D1.lifespan;
    const maxYears = 2000;

    el.innerHTML = `
      <div class="reader-guide">
        <strong>${bi("Breath-Capital Law (Part 1, pp. 26–28):", "శ్వాస పొదుపు నియమం (భాగం 1: పుట 26–28):")}</strong>
        ${bi("Humans today use only 33% of lung capacity, leaving stale CO₂ inside. God grants lifespan in breath-count (21,600/day ≈ 100 years; a 3-month infant has 1,944,000 breaths for 90 days). Always inhale silently, slowly, deeply to the navel, and exhale completely until abdomen touches spine.", "నేటి మానవులు ఊపిరితిత్తుల సామర్థ్యంలో 33% మాత్రమే వాడుతున్నారు. భగవంతుడు ఆయుష్షును శ్వాసల లెక్కలో ఇచ్చాడు (రోజుకు 21,600 = 100 ఏళ్ళు; 3 నెలల శిశువుకు 90 రోజులకు 19,44,000 శ్వాసలు).")}
      </div>

      <div class="split-2" style="margin-bottom:1.15rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Interactive Breath-Rate & Lifespan Simulator", "శ్వాస వేగం & ఆయుర్దాయ గణన యంత్రం")}</h4>
          <div class="control-grid">
            <div class="field-group">
              <label>${bi("Select Activity Preset (Book Data)", "క్రియా స్థితి ఎంచుకోండి")}</label>
              <select id="actRateSel">
                ${L.activityRates.map(a => `<option value="${a.bpm}">${a.nameEn} (${a.bpm}/min)</option>`).join("")}
              </select>
            </div>
            <div class="field-group">
              <label>${bi("Or Custom Breaths / Min (1–45)", "లేదా నిమిషానికి శ్వాసలు")}</label>
              <input type="number" id="customBpmInput" min="1" max="45" value="12">
            </div>
          </div>
          <div id="lifespanCalcOut" class="shloka-box" style="margin-bottom:0;"></div>
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.6rem;">${bi("Animal Breath Rate vs. Lifespan Chart (Part 1, p. 28)", "ప్రాణుల శ్వాస వేగం & ఆయుర్దాయ పట్టిక (పుట 28)")}</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>${bi("Creature", "ప్రాణి")}</th>
                <th>${bi("Breaths/Min", "ని॥కు శ్వాసలు")}</th>
                <th>${bi("Lifespan", "ఆయుర్దాయం")}</th>
              </tr>
            </thead>
            <tbody>
              ${L.animalTable.map(r => {
                const pct = Math.max(4, Math.round((Math.log10(r.years + 1) / Math.log10(maxYears + 1)) * 100));
                return `
                  <tr>
                    <td><strong>${bi(r.animalEn, r.animalTe)}</strong></td>
                    <td><span class="tag-badge">${r.bpm}/min</span></td>
                    <td>
                      <strong>${r.years} ${bi("yrs", "సం॥లు")}</strong>
                      <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel-box">
        <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("12-to-1 Aṅgula Breath-Length Reduction Siddhi Ladder (Part 1, p. 37)", "శ్వాస నిడివి తగ్గింపు సిద్ధులు: 12 నుండి 1 అంగుళం (పుట 37)")}</h4>
        <div class="reader-guide" style="margin-bottom:0.85rem;">
          <strong>${bi("What is 1 Aṅgula &amp; How to Check It?", "అంగుళము అంటే ఏమిటి &amp; ఎలా తగ్గించాలి?")}</strong><br>
          • <strong>${bi("Meaning:", "అర్థం:")}</strong> ${bi("1 Aṅgula = 1 finger-width (~1.9 cm). Normally, exhaled breath reaches <strong>12 Aṅgulas</strong> (~23 cm) outward from the nostrils.", "1 అంగుళము = ఒక వేలి వెడల్పు. సాధారణంగా మనం వదిలే శ్వాస ముక్కు నుండి బయటకు <strong>12 అంగుళాల</strong> దూరం వరకు వెళుతుంది.")}<br>
          • <strong>${bi("Traditional Check (not detailed in book):", "సాంప్రదాయ పరీక్ష (గ్రంథంలో లేదు):")}</strong> ${bi("Hold your fingers horizontally in front of the nostrils during a natural exhale and notice how many finger-widths away the warm air is still felt.", "సహజంగా శ్వాస వదులుతున్నప్పుడు ముక్కు ముందు వేళ్ళను అడ్డంగా ఉంచి, ఎన్ని వేళ్ళ వెడల్పు దూరం వరకు వేడి గాలి తగులుతుందో గమనించవచ్చు.")}<br>
          • <strong>${bi("How to Reduce (Part 1, pp. 36–38, 43):", "తగ్గించే విధానం (పుట 36–38, 43):")}</strong> ${bi("Inhale slowly, silently, and deeply to the navel without forgetting; make exhale duration shorter than inhale duration; and feel the breath touching the 6 Chakras.", "నిరంతరం మరుపు రాకుండా నాభి వరకు లోతుగా-నిదానంగా శ్వాస తీసుకోవాలి; తీసుకునే కాలపరిమితి కంటే వదిలే కాలపరిమితి తగ్గించాలి; 6 చక్రాలను శ్వాసతో స్పృశించాలి.")}
        </div>
        <div class="field-group" style="margin-bottom:0.75rem;">
          <label>${bi("Slide Exhale Length (Aṅgulas): ", "వదిలే శ్వాస పొడవు (అంగుళాలు): ")}<strong id="angulaValLabel" style="color:var(--gold-bright);">12</strong></label>
          <input type="range" id="angulaSlider" min="0" max="12" value="12" style="width:100%;">
        </div>
        <div id="angulaDetailOut" class="shloka-box" style="margin-bottom:0;"></div>
        <div class="shloka-meta" style="margin-top:0.6rem;">${bi(L.brihaswaNote.shlokaNoteEn, L.brihaswaNote.shlokaNoteTe)}</div>
      </div>
    `;

    const sel = document.getElementById("actRateSel");
    const inp = document.getElementById("customBpmInput");
    const out = document.getElementById("lifespanCalcOut");

    function updateCalc(bpm) {
      const b = Math.max(1, Math.min(45, Number(bpm) || 12));
      const perDay = Math.round(b * 1440);
      const bookNote = L.activityRates.find(a => a.bpm === b);
      // Book states 12/min normal & 21,600/day = 100 yrs; proportional estimate vs 21,600/day
      const estYears = Math.round((21600 / perDay) * 100);
      out.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.65rem;margin-bottom:0.5rem;">
          <div><small style="color:var(--text-muted);">${bi("Rate", "వేగం")}</small><div style="font-size:1.15rem;font-weight:700;color:var(--cyan-bright);">${b} / min</div></div>
          <div><small style="color:var(--text-muted);">${bi("Daily Total", "రోజుకు శ్వాసలు")}</small><div style="font-size:1.15rem;font-weight:700;color:var(--gold-bright);">${perDay.toLocaleString()}</div></div>
          <div><small style="color:var(--text-muted);">${bi("Relative Lifespan*", "సూచిక ఆయుర్దాయం*")}</small><div style="font-size:1.15rem;font-weight:700;color:var(--emerald-accent);">~${estYears} yrs</div></div>
        </div>
        <p style="font-size:0.83rem;">${bookNote ? bi(bookNote.noteEn, bookNote.noteTe) : bi("Book benchmark: 21,600/day ≈ 100 yrs; 30,000–40,000/day leads to short life; reducing rate extends longevity.", "గ్రంథ ప్రమాణం: రోజుకు 21,600 = ~100 ఏళ్ళు; 30–40 వేలు ఖర్చుచేస్తే అల్పాయుష్షు.")}</p>
      `;
    }

    sel.addEventListener("change", () => { inp.value = sel.value; updateCalc(sel.value); });
    inp.addEventListener("input", () => updateCalc(inp.value));
    updateCalc(12);

    const slider = document.getElementById("angulaSlider");
    const lbl = document.getElementById("angulaValLabel");
    const aOut = document.getElementById("angulaDetailOut");

    function updateAngula(val) {
      const v = Number(val);
      lbl.textContent = v === 0 ? "0 (Breathless)" : `${v} Aṅgulas`;
      // Find exact or nearest book milestone
      let match = L.angulaLadder.find(x => x.angula === v);
      if (!match) {
        match = L.angulaLadder.reduce((prev, curr) => Math.abs(curr.angula - v) < Math.abs(prev.angula - v) ? curr : prev);
      }
      aOut.innerHTML = `
        <strong style="color:var(--gold-bright);">${bi(match.titleEn, match.titleTe)}</strong>
        <p style="margin-top:0.25rem;">${bi(match.resultEn, match.resultTe)}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-top:0.55rem;">
          ${L.angulaLadder.map(item => `<span class="tag-badge" style="opacity:${item.angula === match.angula ? 1 : 0.45};cursor:pointer;" data-ang="${item.angula}">${item.angula}</span>`).join("")}
        </div>
      `;
      aOut.querySelectorAll("[data-ang]").forEach(b => {
        b.addEventListener("click", () => { slider.value = b.dataset.ang; updateAngula(b.dataset.ang); });
      });
    }
    slider.addEventListener("input", () => updateAngula(slider.value));
    updateAngula(12);
  }

  // SECTION 3: 72,000 Nadis, Pancha Pranas & Swara Vijnana
  function initSvara() {
    const el = document.getElementById("secSvaraBody");
    if (!el) return;
    const NP = D1.nadisAndPranas;
    const SV = D1.svaraRules;

    el.innerHTML = `
      <div class="reader-guide">
        <strong>${bi("72,000 Nāḍīs (Part 1, p. 30):", "72,000 నాడులు (భాగం 1: పుట 30):")}</strong>
        ${bi(NP.definitionEn, NP.definitionTe)}
        <br>${bi(SV.alternationRuleEn, SV.alternationRuleTe)}
      </div>

      <div class="split-2" style="margin-bottom:1.15rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.55rem;">${bi("10 Major Nāḍīs & Anatomical Locations", "10 ముఖ్య నాడులు & శరీర స్థానాలు")}</h4>
          <table class="data-table">
            <thead><tr><th>${bi("Nāḍī", "నాడి")}</th><th>${bi("Location", "స్థానము")}</th></tr></thead>
            <tbody>
              ${NP.majorNadis.map(n => `
                <tr>
                  <td><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${n.color};margin-right:6px;"></span><strong>${bi(n.nameEn, n.nameTe)}</strong></td>
                  <td>${bi(n.locEn, n.locTe)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.55rem;">${bi("Pañca Prāṇas & Chakra Mapping (Part 1, p. 33)", "పంచప్రాణాలు & చక్ర స్థానాలు (పుట 33)")}</h4>
          ${NP.panchaPranas.map(p => `
            <div style="padding:0.48rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">
              <div style="display:flex;justify-content:space-between;gap:0.5rem;">
                <strong style="color:var(--gold-bright);">${bi(p.nameEn, p.nameTe)}</strong>
                <span class="tag-badge">${bi(p.chakraEn, p.chakraTe)}</span>
              </div>
              <p style="font-size:0.82rem;margin-top:0.2rem;">${bi(p.roleEn, p.roleTe)}</p>
            </div>
          `).join("")}
          <div class="shloka-box" style="margin-top:0.75rem;margin-bottom:0;">
            <div class="shloka-te">${NP.shankaracharyaShloka.te}</div>
            <div class="shloka-meta">${bi(NP.shankaracharyaShloka.meaningEn, NP.shankaracharyaShloka.meaningTe)}</div>
          </div>
        </div>
      </div>

      <div class="panel-box" style="margin-bottom:1.15rem;">
        <h4 style="color:var(--gold-bright);margin-bottom:0.55rem;">${bi("Interactive Svara Vijñāna Checker (Check Your Active Nostril)", "స్వరవిజ్ఞాన మార్గదర్శి (ప్రస్తుతం ఏ ముక్కు నడుస్తోంది?)")}</h4>
        <div class="btn-row" id="svaraBtns">
          <button class="btn active" data-nostril="left">${bi("Left Nostril (Iḍā / Candra)", "ఎడమ ముక్కు (ఇడ / చంద్ర)")}</button>
          <button class="btn" data-nostril="right">${bi("Right Nostril (Piṅgalā / Sūrya)", "కుడి ముక్కు (పింగళ / సూర్య)")}</button>
          <button class="btn" data-nostril="both">${bi("Both Nostrils (Suṣumnā / Agni)", "రెండు ముక్కులు (సుషుమ్న)")}</button>
        </div>
        <div id="svaraAdviceOut" class="shloka-box" style="margin-bottom:0;"></div>
      </div>

      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--rose-accent);margin-bottom:0.5rem;">${bi("Prolonged Nāḍī Warnings & Progeny Matrix (pp. 35, 44)", "దీర్ఘకాల నాడి హెచ్చరికలు & సంతాన నియమం")}</h4>
          <table class="data-table" style="margin-bottom:0.85rem;">
            <thead><tr><th>${bi("Duration", "వ్యవధి")}</th><th>${bi("Book Consequence", "ఫలితం")}</th></tr></thead>
            <tbody>
              ${SV.prolongedWarnings.map(w => `<tr><td>${bi(w.durEn, w.durTe)}</td><td>${bi(w.resEn, w.resTe)}</td></tr>`).join("")}
            </tbody>
          </table>
          <h5 style="color:var(--cyan-bright);margin-bottom:0.35rem;">${bi("Progeny Selection by Svara (p. 44)", "స్వరంతో సంతాన నియమం (పుట 44)")}</h5>
          <table class="data-table" style="margin-bottom:0.75rem;">
            <thead><tr><th>${bi("Male", "పురుషుడు")}</th><th>${bi("Female", "స్త్రీ")}</th><th>${bi("Outcome", "ఫలితం")}</th></tr></thead>
            <tbody>
              ${SV.progenyMatrix.map(m => `<tr><td>${bi(m.maleEn, m.maleTe)}</td><td>${bi(m.femaleEn, m.femaleTe)}</td><td>${bi(m.outcomeEn, m.outcomeTe)}</td></tr>`).join("")}
            </tbody>
          </table>
          <div class="shloka-box" style="margin-bottom:0;">
            <strong style="color:var(--emerald-accent);">${bi("Book Remedy (pp. 35, 44–45):", "గ్రంథ నివారణోపాయం (పుట 35, 44–45):")}</strong>
            <ul style="padding-left:1.1rem;margin-top:0.3rem;font-size:0.83rem;">
              <li style="margin-bottom:0.25rem;">${bi("<strong>Switch Stuck Nāḍī (Part 1, pp. 35, 79–81):</strong> (1) Lie on the side of the currently active nostril, (2) press gently under that armpit (ancient Rishis kept a wooden <em>Daṇḍa</em> / stick under the right armpit to activate Left Iḍā for meditation), or (3) use focused <em>Bhāvana</em> ('Yadbhāvaṁ Tadbhavati') to guide breath through Suṣumnā ('neutral gear') during transitions.", "<strong>నాడిని మార్చుట (పుట 35, 79–81):</strong> (1) నడుస్తున్న ముక్కు వైపు తిరిగి పడుకోవడం, (2) ఆ చంక క్రింద ఒత్తిడి తేవడం (ప్రాచీన ఋషులు కుడి చంక క్రింద కొయ్య <em>దండము</em> ఉంచి ఎడమ నాడిని నడిపించేవారు), లేదా (3) మార్పు సమయంలో 'యద్భావం తద్భవతి' సూత్రంతో సుషుమ్న ('న్యూట్రల్ గేరు') ద్వారా భావన చేయడం.")}</li>
              <li style="margin-bottom:0.25rem;">${bi("<strong>For Progeny:</strong> Husband and wife should check and switch nostrils beforehand so Suṣumnā or same-nostril union is avoided.", "<strong>సంతాన నివారణ:</strong> భార్యాభర్తలు ముందుగానే నాడిని గమనించి అనుకూల స్వరానికి మార్చుకోవడం ద్వారా అనర్థాలను నివారించవచ్చు.")}</li>
              <li>${bi("<strong>For Illness &amp; Chills:</strong> Switch away from the Svara active when pain/illness intensifies (a 10-day illness can ease in hours); activate Right (Sūrya) Svara for chills/cold fever.", "<strong>రోగనివారణ &amp; చలిజ్వరం:</strong> వ్యాధి/బాధ పెరుగుతున్నప్పుడు నడుస్తున్న స్వరాన్ని మార్చడం వల్ల 10 రోజుల జబ్బు కొన్ని గంటల్లో తగ్గుతుంది; చలిజ్వరానికి సూర్యనాడి (కుడి) నడిచేలా చూడాలి.")}</li>
            </ul>
          </div>
        </div>

        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Signs of Approaching Death & Recovery Advice (pp. 35–36)", "మరణకాల సూచనలు & ప్రాణశక్తి పెంపు (పుట 35–36)")}</h4>
          ${SV.deathSigns.map(d => `
            <div style="padding:0.45rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">
              <strong style="color:var(--cyan-bright);">${bi(d.signEn, d.signTe)}</strong>
              <p style="font-size:0.82rem;margin-top:0.15rem;">${bi(d.meaningEn, d.meaningTe)}</p>
            </div>
          `).join("")}
          <div class="shloka-box" style="margin-top:0.75rem;margin-bottom:0;">
            <strong style="color:var(--emerald-accent);">${bi("Book Remedy (p. 36):", "గ్రంథ నివారణోపాయం (పుట 36):")}</strong>
            <p style="font-size:0.83rem;margin-top:0.25rem;">
              ${bi("<strong>Do NOT fear!</strong> Just as many people survive even after crossing a thermometer's danger mark, these signs only indicate depleted <em>Prāṇa Śakti</em>. Immediately intensify efforts to build Prāṇa Śakti — slow, deep abdominal breathing to the navel with complete exhalation, Svara balancing, and Aśvinī Sūktam recitation.", "<strong>భయపడవద్దు!</strong> థర్మామీటర్‌లో సూచించిన సంఖ్య దాటినా చాలామంది జీవించి ఉన్నట్లే, ఈ లక్షణాలు కనిపించినా భయపడక <strong>ప్రాణశక్తి కొరకు విశేష ప్రయత్నము చేయడం ఉత్తమము</strong> (లోతుగా నాభి వరకు దీర్ఘ శ్వాస, పూర్తి రేచకం, స్వర సమన్వయం, అశ్వనీ సూక్త పారాయణ).")}
            </p>
          </div>
        </div>
      </div>
    `;

    const out = document.getElementById("svaraAdviceOut");
    const btns = document.querySelectorAll("#svaraBtns .btn");
    function renderNostril(key) {
      const info = SV.byNostril[key];
      out.innerHTML = `
        <strong style="color:var(--gold-bright);">${bi(info.titleEn, info.titleTe)}</strong>
        <ul style="padding-left:1.15rem;margin-top:0.45rem;font-size:0.86rem;">
          ${info.rules.map(r => `<li style="margin-bottom:0.3rem;">${bi(r.en, r.te)}</li>`).join("")}
        </ul>
      `;
    }
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderNostril(b.dataset.nostril);
    }));
    renderNostril("left");
  }

  // SECTION 4: Hamsa Gamanam — 7 Chakras & 9 Planets SVG Visualizer
  function initHamsa() {
    const el = document.getElementById("secHamsaBody");
    if (!el) return;
    const HG = D2.hamsaGamanam;

    el.innerHTML = `
      <div class="reader-guide">
        <strong>${bi("Hamsa Gamanam (Part 2 Diagram & pp. 32–34, 73, 145):", "శరీరంలో హంసగమనము (భాగం 2 చిత్రం & పుట 32–34, 73, 145):")}</strong>
        ${bi(`<strong>Hamsa</strong> means breath. An ordinary shallow breath (33% lung capacity) lasts 6–7 seconds; when practiced slowly, deeply, and effortlessly (100% capacity), one full inhale-exhale cycle lengthens to <strong>~${HG.cycleSeconds} seconds</strong>. It enters at Anāhata (Heart / Sun) and traces the exact order of the Navagraha verse through all 7 Chakras &amp; 9 Planets before exiting above Sahasrāra (Ketu).`, `<strong>హంస</strong> అంటే శ్వాస. సాధారణ శ్వాస 6–7 సెకన్లు పడుతుంది; నిదానంగా, లోతుగా, సహజంగా 100% ఊపిరితిత్తుల నిండుగా తీసుకుంటే ఒక పూర్తి శ్వాసకు <strong>~${HG.cycleSeconds} సెకన్లు</strong> పడుతుంది. ఇది హృదయంలోని అనాహత (రవి) వద్ద ప్రవేశించి, నవగ్రహ శ్లోక క్రమంలో 7 చక్రాలను &amp; 9 గ్రహాలను స్పృశిస్తూ సహస్రారానికి పైన ఉన్న కేతువు ద్వారా బయటకు వస్తుంది.`)}
      </div>

      <div class="cards-grid" style="margin-bottom:1.1rem;">
        <div class="info-card">
          <h4>${bi("1. Why This Criss-Cross Path?", "1. ఈ క్రమంలో ఎందుకు తిరుగుతుంది?")}</h4>
          <p>${bi("It follows the exact sequence of the Navagraha Stotra: <em>Ādityāya (Sun) → Somāya (Moon) → Maṅgalāya (Mars) → Budhāya (Mercury) → Guru (Jupiter) → Śukra (Venus) → Śani (Saturn) → Rāhu → Ketu</em>. Outer cosmos (Brahmāṇḍa) and inner spine (Piṇḍāṇḍa) mirror each other.", "<em>ఆదిత్యాయచ సోమాయ మంగళాయ బుధాయచ | గురు శుక్ర శనిభ్యశ్చ రాహవే కేతవేనమః</em> అనే నవగ్రహ శ్లోక క్రమంలోనే శ్వాస లోపల ప్రయాణిస్తుంది. బాహ్య బ్రహ్మాండమూ, శరీర పిండాండమూ ఒకటే.")}</p>
        </div>
        <div class="info-card">
          <h4>${bi("2. Śrī Rāma's 7 Palm Trees Symbolism (p. 73)", "2. రాముని 7 తాటిచెట్ల రహస్యం (పుట 73)")}</h4>
          <p>${bi("Rāma piercing 7 palm trees with one arrow symbolizes a single deep breath traversing all 7 Chakras: it destroys bad habits (Vāli) and grants pure, truthful speech / Vāk-siddhi (Sugrīva = Su + Grīva).", "రాముడు ఒకే బాణంతో 7 తాటిచెట్లు కొట్టడం అంటే ఒకే శ్వాసను 7 చక్రాలలో తిప్పడమే. దానితో దురలవాట్లు (వాలి) నశించి, వాక్సిద్ధి (సుగ్రీవుడు) కలుగుతుంది.")}</p>
        </div>
        <div class="info-card">
          <h4>${bi("3. How to Practice Effortlessly (pp. 33–34, 73)", "3. సాధన ఎలా చేయాలి? (పుట 33–34, 73)")}</h4>
          <p>${bi("This happens automatically <strong>21,600 times/day</strong>. Never force or strain ('Sahajaṁ Karma Kaunteya', Gītā 18.48). Simply breathe slowly and deeply while gently visualizing the breath touching these 7 Chakras &amp; 9 Planets — pacifying all planetary doṣas.", "ఇది రోజుకు <strong>21,600 సార్లు</strong> సహజంగా జరుగుతూనే ఉంటుంది. బలవంతం చేయకుండా ('సహజం కర్మ కౌంతేయ') హాయిగా, లోతుగా శ్వాసిస్తూ భావనతో గమనిస్తే సమస్త గ్రహదోషాలు తృటిలో శాంతిస్తాయి.")}</p>
        </div>
      </div>

      <div class="split-2">
        <div class="panel-box">
          <div class="btn-row">
            <button class="btn btn-primary" id="hamsaPlayBtn">▶ ${bi("Animate Hamsa Path", "హంసగమన యానిమేషన్")}</button>
            <button class="btn" id="hamsaStepBtn">⏭ ${bi("Next Step", "తదుపరి గ్రహం")}</button>
          </div>
          <svg id="hamsaSvg" viewBox="0 0 460 440" style="width:100%;max-height:430px;background:rgba(6,8,13,0.75);border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
            <defs>
              <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f5b942"/>
              </marker>
            </defs>
            <!-- Spine vertical axis -->
            <line x1="115" y1="20" x2="115" y2="415" stroke="rgba(255,255,255,0.15)" stroke-width="2" stroke-dasharray="4 4"/>
            <!-- Curved traversal paths matching book diagram -->
            <path d="M 25 210 L 100 210" stroke="#f5b942" stroke-width="2.2" marker-end="url(#arrowGold)"/>
            <path d="M 115 210 Q 55 260 115 310" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 310 Q 175 185 115 65" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 65 Q 55 162 115 260" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 260 Q 170 185 115 112" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 112 Q 70 136 115 160" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 160 Q 165 258 115 358" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 358 L 115 405" fill="none" stroke="rgba(56,189,248,0.45)" stroke-width="1.8"/>
            <path d="M 115 405 Q 205 210 115 22" fill="none" stroke="rgba(168,85,247,0.55)" stroke-width="2" stroke-dasharray="5 3"/>

            ${HG.path.map((p, idx) => `
              <g class="hamsa-node" data-step="${idx}" style="cursor:pointer;">
                <circle cx="115" cy="${p.y}" r="13" fill="#0e131f" stroke="${p.color}" stroke-width="2.5"/>
                <text x="115" y="${p.y + 4}" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">${p.step}</text>
                <line x1="132" y1="${p.y}" x2="175" y2="${p.y}" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
                <text x="182" y="${p.y - 2}" fill="#ffd97d" font-size="11.5" font-weight="700">${p.planetTe} • ${p.planetEn}</text>
                <text x="182" y="${p.y + 12}" fill="#94a3b8" font-size="9.8">${p.chakraTe} (${p.rayTe})</text>
              </g>
            `).join("")}
          </svg>
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("Active Step Details & Navagraha Shlokas", "ప్రస్తుత దశ & నవగ్రహ శ్లోకాలు")}</h4>
          <div id="hamsaStepInfo" class="shloka-box"></div>
          ${HG.shlokas.map(s => `
            <div class="shloka-box">
              <div class="shloka-te">${s.te}</div>
              <div class="shloka-meta">${bi(s.noteEn, s.noteTe)}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    let activeIdx = 0;
    let hamsaTimer = null;
    const stepInfo = document.getElementById("hamsaStepInfo");
    const nodes = document.querySelectorAll(".hamsa-node");
    const playBtn = document.getElementById("hamsaPlayBtn");
    const stepBtn = document.getElementById("hamsaStepBtn");

    function showStep(idx) {
      activeIdx = idx % HG.path.length;
      const p = HG.path[activeIdx];
      nodes.forEach((n, i) => {
        const c = n.querySelector("circle");
        c.setAttribute("r", i === activeIdx ? "16" : "13");
        c.setAttribute("fill", i === activeIdx ? p.color : "#0e131f");
      });
      stepInfo.innerHTML = `
        <div class="tag-badge" style="margin-bottom:0.35rem;">Step ${p.step} / 9</div>
        <h4 style="color:var(--gold-bright);">${bi(p.planetEn, p.planetTe)}</h4>
        <p style="font-size:0.88rem;margin-top:0.2rem;"><strong>${bi("Chakra:", "చక్రం:")}</strong> ${bi(p.chakraEn, p.chakraTe)}</p>
        <p style="font-size:0.85rem;color:var(--cyan-bright);margin-top:0.15rem;"><strong>${bi("Solar Ray:", "కిరణము:")}</strong> ${p.rayTe}</p>
      `;
    }

    nodes.forEach(n => n.addEventListener("click", () => showStep(Number(n.dataset.step))));
    stepBtn.addEventListener("click", () => showStep(activeIdx + 1));
    playBtn.addEventListener("click", () => {
      if (hamsaTimer) {
        clearInterval(hamsaTimer);
        hamsaTimer = null;
        playBtn.innerHTML = `▶ ${bi("Animate Hamsa Path", "హంసగమన యానిమేషన్")}`;
      } else {
        playBtn.innerHTML = `⏹ ${bi("Pause Animation", "ఆపు")}`;
        hamsaTimer = setInterval(() => showStep(activeIdx + 1), 1600);
      }
    });
    showStep(0);

    // 4B: 24-Hour Daily Swasa Chakra Clock (Part 1, pp. 81-82)
    const DC = D2.dailyChakraClock;
    const clockWrap = document.createElement("div");
    clockWrap.className = "panel-box";
    clockWrap.style.marginTop = "1.2rem";

    // Helper to build SVG arc path for 24-hour clock (6:00 AM at top = -90 deg)
    function polarToXY(cx, cy, r, minsSince6AM) {
      const angle = ((minsSince6AM / 1440) * 360 - 90) * (Math.PI / 180);
      return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
    }
    function arcPath(cx, cy, rOut, rIn, startM, endM) {
      const s = startM - 360;
      const e = endM - 360;
      const large = (e - s) > 720 ? 1 : 0;
      const p1 = polarToXY(cx, cy, rOut, s);
      const p2 = polarToXY(cx, cy, rOut, e);
      const p3 = polarToXY(cx, cy, rIn, e);
      const p4 = polarToXY(cx, cy, rIn, s);
      return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${rOut} ${rOut} 0 ${large} 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} L ${p3.x.toFixed(1)} ${p3.y.toFixed(1)} A ${rIn} ${rIn} 0 ${large} 0 ${p4.x.toFixed(1)} ${p4.y.toFixed(1)} Z`;
    }

    clockWrap.innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.4rem;">${bi("24-Hour Daily Śvāsa Chakra Clock (6:00 AM Cycle • 15 Breaths/Min)", "24 గంటల దినచర్య శ్వాస చక్ర గడియారం (ఉ॥ 6:00 నుండి • 15 శ్వాసలు/ని॥)")}</h4>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.85rem;">${bi(DC.noteEn, DC.noteTe)}</p>
      <div class="split-2">
        <div>
          <div class="control-grid" style="margin-bottom:0.65rem;">
            <div class="field-group">
              <label>${bi("Time (Auto-set to Now — Click to Change)", "సమయం (ప్రస్తుత సమయం — మార్చుకోవచ్చు)")}</label>
              <input type="time" id="swasaClockTimeInp">
            </div>
            <div class="field-group" style="display:flex;align-items:flex-end;">
              <button class="btn btn-primary" id="swasaClockNowBtn" style="width:100%;">🕒 ${bi("Use Current Time (Now)", "ప్రస్తుత సమయం (Now)")}</button>
            </div>
          </div>
          <svg id="dailyChakraSvg" viewBox="0 0 320 320" style="width:100%;max-width:320px;display:block;margin:0 auto;background:rgba(6,8,13,0.72);border-radius:50%;border:1px solid rgba(255,255,255,0.1);">
            ${DC.slots.map((sl, idx) => `
              <path class="clock-arc" data-idx="${idx}" d="${arcPath(160, 160, 134, 78, sl.startMin, sl.endMin)}" fill="${sl.color}" fill-opacity="0.72" stroke="#06080d" stroke-width="2" style="cursor:pointer;transition:opacity 0.2s;"/>
            `).join("")}
            <circle cx="160" cy="160" r="72" fill="#0e131f" stroke="rgba(245,185,66,0.35)" stroke-width="1.5"/>
            <text x="160" y="18" text-anchor="middle" fill="#ffd97d" font-size="10" font-weight="700" style="pointer-events:none;">06:00 AM</text>
            <text x="300" y="164" text-anchor="middle" fill="#94a3b8" font-size="9.5" style="pointer-events:none;">12:00 PM</text>
            <text x="160" y="310" text-anchor="middle" fill="#94a3b8" font-size="9.5" style="pointer-events:none;">06:00 PM</text>
            <text x="22" y="164" text-anchor="middle" fill="#94a3b8" font-size="9.5" style="pointer-events:none;">12:00 AM</text>
            <line id="clockHandLine" x1="160" y1="160" x2="160" y2="30" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" style="pointer-events:none;"/>
            <circle cx="160" cy="160" r="6" fill="#ffd97d" style="pointer-events:none;"/>
            <text id="clockCenterTxt" x="160" y="148" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" style="pointer-events:none;"></text>
            <text id="clockCenterSub" x="160" y="182" text-anchor="middle" fill="#7dd3fc" font-size="9.5" style="pointer-events:none;"></text>
          </svg>
        </div>

        <div>
          <div id="clockActiveCard" class="shloka-box" style="margin-bottom:0.75rem;"></div>
          <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.35rem;">${bi("Click any Chakra row or clock slice to inspect:", "ఏదైనా చక్రాన్ని క్లిక్ చేసి వివరాలు చూడండి:")}</p>
          <table class="data-table">
            <thead><tr><th>${bi("Chakra", "చక్రం")}</th><th>${bi("Time Window", "సమయం")}</th><th>${bi("Breaths", "శ్వాసలు")}</th></tr></thead>
            <tbody id="clockTableBody">
              ${DC.slots.map((sl, idx) => `
                <tr class="clock-row" data-idx="${idx}" style="cursor:pointer;">
                  <td><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${sl.color};margin-right:5px;"></span><strong>${bi(sl.chakraEn, sl.chakraTe)}</strong></td>
                  <td><code>${sl.timeLabel}</code></td>
                  <td>${sl.breaths.toLocaleString()}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    el.appendChild(clockWrap);

    const timeInp = document.getElementById("swasaClockTimeInp");
    const nowBtn = document.getElementById("swasaClockNowBtn");
    const hand = document.getElementById("clockHandLine");
    const cTxt = document.getElementById("clockCenterTxt");
    const cSub = document.getElementById("clockCenterSub");
    const activeCard = document.getElementById("clockActiveCard");
    const arcs = clockWrap.querySelectorAll(".clock-arc");
    const rows = clockWrap.querySelectorAll(".clock-row");

    function updateClockByMinutes(hh, mm) {
      let minsFromMidnight = hh * 60 + mm;
      // Cycle starts at 6:00 AM (360) and ends at next day 6:00 AM (1800)
      let cycleMin = minsFromMidnight < 360 ? minsFromMidnight + 1440 : minsFromMidnight;
      const slotIdx = DC.slots.findIndex(s => cycleMin >= s.startMin && cycleMin < s.endMin);
      const idx = slotIdx >= 0 ? slotIdx : 0;
      const sl = DC.slots[idx];
      const elapsedInSlot = Math.max(0, cycleMin - sl.startMin);
      const breathInSlot = Math.min(sl.breaths, Math.floor(elapsedInSlot * DC.ratePerMin) + 1);
      const totalBreathSoFar = Math.min(21600, Math.floor((cycleMin - 360) * DC.ratePerMin) + 1);

      const tip = polarToXY(160, 160, 130, cycleMin - 360);
      hand.setAttribute("x2", tip.x.toFixed(1));
      hand.setAttribute("y2", tip.y.toFixed(1));
      cTxt.textContent = sl.chakraEn.replace(/^\d+\.\s*/, "");
      cSub.textContent = `#${totalBreathSoFar.toLocaleString()} / 21,600`;

      arcs.forEach((a, i) => a.setAttribute("fill-opacity", i === idx ? "1" : "0.35"));
      rows.forEach((r, i) => r.style.background = i === idx ? "rgba(245,185,66,0.14)" : "");

      const ampm = hh >= 12 ? "PM" : "AM";
      const h12 = ((hh + 11) % 12) + 1;
      const tStr = `${String(h12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ampm}`;

      activeCard.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.3rem;">
          <span class="tag-badge">${tStr} • ${sl.timeLabel}</span>
          <span class="tag-badge">${bi(`Breath #${totalBreathSoFar.toLocaleString()} / 21,600`, `శ్వాస #${totalBreathSoFar.toLocaleString()} / 21,600`)}</span>
        </div>
        <h4 style="color:var(--gold-bright);">${bi(sl.chakraEn, sl.chakraTe)}</h4>
        <p style="font-size:0.85rem;margin-top:0.25rem;">
          <strong>${bi("In this Chakra:", "ఈ చక్రంలో:")}</strong> ${breathInSlot.toLocaleString()} / ${sl.breaths.toLocaleString()} ${bi("breaths", "శ్వాసలు")} (${sl.durLabel})
        </p>
        <p style="font-size:0.84rem;color:var(--cyan-bright);margin-top:0.2rem;">${bi(sl.noteEn, sl.noteTe)}</p>
      `;
    }

    function setNow() {
      const now = new Date();
      const hh = now.getHours();
      const mm = now.getMinutes();
      timeInp.value = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
      updateClockByMinutes(hh, mm);
    }

    function selectSlot(idx) {
      const sl = DC.slots[idx];
      const m = Math.ceil(sl.startMin) % 1440;
      const hh = Math.floor(m / 60);
      const mm = m % 60;
      timeInp.value = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
      updateClockByMinutes(hh, mm);
    }

    timeInp.addEventListener("input", () => {
      if (!timeInp.value) return;
      const [hh, mm] = timeInp.value.split(":").map(Number);
      updateClockByMinutes(hh, mm);
    });
    nowBtn.addEventListener("click", setNow);
    arcs.forEach(a => a.addEventListener("click", () => selectSlot(Number(a.dataset.idx))));
    rows.forEach(r => r.addEventListener("click", () => selectSlot(Number(r.dataset.idx))));
    setNow();
  }

  // SECTION 5: Guided Breath & Sadhana Lab
  function initPacer() {
    const el = document.getElementById("secPacerBody");
    if (!el) return;
    const P = D2.practices;

    el.innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Select Book Practice", "గ్రంథ సాధనను ఎంచుకోండి")}</h4>
          <div class="field-group" style="margin-bottom:0.75rem;">
            <select id="practiceSel">
              ${P.map(pr => `<option value="${pr.id}">${pr.nameEn}</option>`).join("")}
            </select>
          </div>
          <div id="practiceDetail" class="shloka-box"></div>
          <div class="btn-row">
            <button class="btn btn-primary" id="pacerStartBtn">▶ ${bi("Start Guided Pacer", "సాధన ప్రారంభించు")}</button>
          </div>
          <div class="pacer-stage">
            <div id="swasaOrb" class="breath-orb">${bi("Ready", "సిద్ధం")}</div>
            <div id="pacerHint" style="margin-top:0.85rem;font-size:0.84rem;color:var(--text-muted);text-align:center;"></div>
          </div>
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.5rem;">${bi("Drāṁ Sādhana Live Counter (Part 2, pp. 35–36)", "ద్రాం సాధన లెక్కింపు యంత్రం (పుట 35–36)")}</h4>
          <p style="font-size:0.84rem;margin-bottom:0.75rem;">
            ${bi("1 Round = Bow forward to navel: 'Om Drāṁ 1..100' (future) + Tilt back to spine: 'Om Drāṁ 1..25' (past). Recommended: 6 rounds/day.", "ఒక పర్యాయం = ముందుకు వంచి 'ఓం ద్రాం 1..100' + వెనుకకు వాల్చి 'ఓం ద్రాం 1..25' (రోజుకు 6 పర్యాయాలు).")}
          </p>
          <div class="shloka-box" style="text-align:center;">
            <div id="dramModeLbl" style="color:var(--cyan-bright);font-weight:700;margin-bottom:0.3rem;">${bi("Forward (Future Intuition): 0 / 100", "ముందుకు (భవిష్యత్): 0 / 100")}</div>
            <div id="dramBigNum" style="font-family:var(--font-mono);font-size:2.4rem;font-weight:800;color:var(--gold-bright);">ఓం ద్రాం 0</div>
            <div id="dramRoundsLbl" style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi("Completed Rounds Today:", "పూర్తయిన పర్యాయాలు:")} 0 / 6</div>
          </div>
          <div class="btn-row" style="justify-content:center;">
            <button class="btn btn-primary" id="dramTapBtn">+1 ${bi("Chant 'Om Drāṁ'", "'ఓం ద్రాం' జపం")}</button>
            <button class="btn" id="dramResetBtn">${bi("Reset", "రీసెట్")}</button>
          </div>
        </div>
      </div>
    `;

    const sel = document.getElementById("practiceSel");
    const detail = document.getElementById("practiceDetail");
    const orb = document.getElementById("swasaOrb");
    const startBtn = document.getElementById("pacerStartBtn");
    let current = P[0];
    let pTimer = null;
    let step = 0;

    function renderPractice(id) {
      current = P.find(x => x.id === id) || P[0];
      if (pTimer) { clearTimeout(pTimer); pTimer = null; }
      orb.className = "breath-orb";
      orb.style.transform = "scale(1)";
      orb.innerHTML = bi("Ready", "సిద్ధం");
      startBtn.innerHTML = `▶ ${bi("Start Guided Pacer", "సాధన ప్రారంభించు")}`;
      detail.innerHTML = `
        <strong style="color:var(--gold-bright);">${bi(current.nameEn, current.nameTe)}</strong>
        <p style="font-size:0.85rem;margin-top:0.35rem;">${bi(current.summaryEn, current.summaryTe)}</p>
        ${current.shlokaTe ? `<div class="shloka-te" style="margin-top:0.5rem;font-size:0.95rem;">${current.shlokaTe}</div>` : ""}
      `;
    }

    function runStep() {
      const ph = current.phases[step % current.phases.length];
      orb.className = `breath-orb ${ph.cls}`;
      orb.style.transition = `transform ${ph.dur / 1000}s ease-in-out, box-shadow 0.6s ease`;
      orb.style.transform = ph.scale;
      orb.innerHTML = `<span>${bi(ph.labelEn, ph.labelTe)}</span>`;
      playChime(ph.tone, 1.0);
      step++;
      pTimer = setTimeout(runStep, ph.dur);
    }

    sel.addEventListener("change", () => renderPractice(sel.value));
    startBtn.addEventListener("click", () => {
      if (pTimer) {
        clearTimeout(pTimer);
        pTimer = null;
        orb.className = "breath-orb";
        orb.style.transform = "scale(1)";
        orb.innerHTML = bi("Ready", "సిద్ధం");
        startBtn.innerHTML = `▶ ${bi("Start Guided Pacer", "సాధన ప్రారంభించు")}`;
        playChime("chime", 0.9);
      } else {
        step = 0;
        startBtn.innerHTML = `⏹ ${bi("Stop Pacer", "ఆపు")}`;
        playChime("chime", 0.9);
        runStep();
      }
    });
    renderPractice(P[0].id);

    // Dram counter
    let dramPhase = "fwd"; // fwd 1..100, back 1..25
    let dramCount = 0;
    let dramRounds = 0;
    const dMode = document.getElementById("dramModeLbl");
    const dNum = document.getElementById("dramBigNum");
    const dRnd = document.getElementById("dramRoundsLbl");

    function updateDramUI() {
      if (dramPhase === "fwd") {
        dMode.innerHTML = bi(`Forward (Future): ${dramCount} / 100`, `ముందుకు (భవిష్యత్): ${dramCount} / 100`);
      } else {
        dMode.innerHTML = bi(`Backward (Past): ${dramCount} / 25`, `వెనుకకు (భూత): ${dramCount} / 25`);
      }
      dNum.textContent = `ఓం ద్రాం ${dramCount}`;
      dRnd.innerHTML = `${bi("Completed Rounds Today:", "పూర్తయిన పర్యాయాలు:")} <strong>${dramRounds} / 6</strong>`;
    }

    document.getElementById("dramTapBtn").addEventListener("click", () => {
      dramCount++;
      if (dramPhase === "fwd" && dramCount >= 100) {
        dramPhase = "back";
        dramCount = 0;
        playChime(432, 0.8);
      } else if (dramPhase === "back" && dramCount >= 25) {
        dramPhase = "fwd";
        dramCount = 0;
        dramRounds++;
        playChime(528, 1.0);
      }
      updateDramUI();
    });
    document.getElementById("dramResetBtn").addEventListener("click", () => {
      dramPhase = "fwd"; dramCount = 0; dramRounds = 0; updateDramUI();
    });
  }

  // SECTION 6: Kriya Yoga & Savitri Sadhana (108-Cycle & Evolution Calculator)
  function initKriya() {
    const el = document.getElementById("secKriyaBody");
    if (!el) return;
    const K = D2.kriyaYoga;

    el.innerHTML = `
      <div class="reader-guide">
        <strong>${bi("Kriyā Yoga & Sāvitrī Sādhana (Part 2, pp. 130–159):", "క్రియాయోగము & సావిత్రీ సాధన (భాగం 2: పుట 130–159):")}</strong>
        ${bi("Ascend through the 6 Chakras (4+6+10+12+16+2 = 50), descend back (50) = 100, then ascend & descend between Ājñā and Sahasrāra (Manas, Buddhi, Citta, Ahaṁkāra = 4+4 = 8) → 108 per cycle (10 cycles = 1,008).", "మూలాధారం నుండి ఆజ్ఞ వరకు (50) + తిరిగి మూలాధారం వరకు (50) = 100 + ఆజ్ఞ నుండి సహస్రారం వరకు (మనస్సు, బుద్ధి, చిత్తము, అహంకారము) 4+4 = 108 (10 ఆవృతాలు = 1,008).")}
      </div>

      <div class="split-2" style="margin-bottom:1.15rem;">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.55rem;">${bi("6-Chakra Ascent & Descent Table (p. 154 & p. 157)", "షట్చక్ర ఆరోహణ-అవరోహణ పట్టిక (పుట 154, 157)")}</h4>
          <table class="data-table">
            <thead>
              <tr>
                <th>${bi("Chakra", "చక్రం")}</th>
                <th>${bi("Petals / Reps", "దళాలు / జపం")}</th>
                <th>${bi("Element & Surrender", "తత్వం & సమర్పణ")}</th>
              </tr>
            </thead>
            <tbody>
              ${K.chakras.map(c => `
                <tr>
                  <td><span class="chakra-pill" style="border-color:${c.colorHex};color:${c.colorHex};">● ${bi(c.nameEn, c.nameTe)}</span><div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">${bi(c.colorEn, c.colorTe)} • ${c.planetTe}</div></td>
                  <td><strong>${c.petals} ↑ + ${c.petals} ↓</strong></td>
                  <td><strong>${bi(c.elementEn, c.elementTe)}</strong><div style="font-size:0.78rem;color:var(--text-muted);">${bi(c.surrenderEn, c.surrenderTe)}</div></td>
                </tr>
              `).join("")}
              <tr>
                <td><strong style="color:var(--gold-bright);">${bi("Ājñā ↔ Sahasrāra", "ఆజ్ఞ ↔ సహస్రారము")}</strong></td>
                <td><strong>4 ↑ + 4 ↓ = 8</strong></td>
                <td>${K.crownSteps.map(s => bi(s.en, s.te)).join(" → ")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.55rem;">${bi("Evolution Time-Compression Calculator (pp. 142, 144)", "పరిణామ కాల సంకోచ గణన (యుక్తేశ్వర గిరి సూత్రం)")}</h4>
          <div class="field-group" style="margin-bottom:0.75rem;">
            <label>${bi("Daily Kriyās Practiced (1 Kriyā ≈ 0.5 min = 1 Year evolution)", "రోజుకు చేసే క్రియల సంఖ్య (1 క్రియ ≈ అర నిమిషం = 1 ఏడు)")}</label>
            <input type="number" id="kriyaCountInp" min="1" max="2000" value="1000">
          </div>
          <div id="kriyaCalcOut" class="shloka-box"></div>

          <h4 style="color:var(--rose-accent);margin:0.85rem 0 0.45rem;">${bi("Three Granthis Pierced by Breath (Part 2, p. 108)", "శ్వాసతో భేదించబడే మూడు గ్రంథులు (పుట 108)")}</h4>
          ${K.threeGranthis.map(g => `
            <div style="padding:0.35rem 0;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.84rem;">
              <strong style="color:var(--gold-bright);">${bi(g.nameEn, g.nameTe)}:</strong> ${bi(g.meaningEn, g.meaningTe)}
            </div>
          `).join("")}
        </div>
      </div>

      <div class="panel-box" style="margin-bottom:1.15rem;">
        <h4 style="color:var(--gold-bright);margin-bottom:0.55rem;">${bi("How to Practice Kriyā Yoga &amp; Sāvitrī Sādhana (Step-by-Step, Part 2 pp. 150–159)", "క్రియాయోగ &amp; సావిత్రీ సాధన — అంచెలంచెలుగా చేసే విధానం (భాగం 2: పుట 150–159)")}</h4>
        <div class="cards-grid">
          <div class="info-card">
            <h4>${bi("Step 1: Posture &amp; Attitude (pp. 150–151, 159)", "దశ 1: ఆసనం &amp; భావన (పుట 150–151, 159)")}</h4>
            <p>${bi("Sit comfortably in <em>Sukhāsana</em>, close your eyes, and feel yourself in the loving presence of your Guru—absorbed as deeply as watching a movie. Do <strong>not</strong> wait for the mind to become pure first; practice as you are, and the practice itself brings peace.", "సుఖాసనంలో కూర్చొని, కళ్ళు మూసుకొని గురువు సన్నిధానంలో ఉన్నట్లు భావన చేయాలి. మనస్సు శుద్ధమయ్యాక చేస్తానని ఆగకండి — ఎలా ఉన్నా సాధన చేస్తుంటే క్రమంగా శాంతి కలుగుతుంది.")}</p>
          </div>
          <div class="info-card">
            <h4>${bi("Step 2: Ascend 6 Chakras (50 Guru-Nāmas, pp. 150–153)", "దశ 2: ఆరోహణ — 6 చక్రాలలో 50 గురునామాలు")}</h4>
            <p>${bi("Move a dazzling ball of light up the spine: <strong>Mūlādhāra</strong> (Red, 4×, offer vāsanās into Guru's dhuni) → <strong>Svādhiṣṭhāna</strong> (Saffron, 6×, offer taste &amp; saṁskāras) → <strong>Maṇipūra</strong> (Yellow, 10×, purify sight) → <strong>Anāhata</strong> (Green, 12×, feel Guru's loving touch) → <strong>Viśuddhi</strong> (Sky-blue, 16×, surrender speech) → <strong>Ājñā</strong> (Violet, 2×). Total = <strong>50</strong>.", "కాంతి పుంజాన్ని వెన్ను ద్వారా పైకి తీసుకెళ్తూ: <strong>మూలాధారం</strong> (ఎరుపు, 4×, వాసనలు) → <strong>స్వాధిష్ఠానం</strong> (కాషాయం, 6×, రుచి/సంస్కారాలు) → <strong>మణిపూరకం</strong> (పసుపు, 10×, దృష్టి) → <strong>అనాహతం</strong> (ఆకుపచ్చ, 12×, గురు స్పర్శ) → <strong>విశుద్ధి</strong> (నీలం, 16×, వాక్కు) → <strong>ఆజ్ఞ</strong> (ఊదా, 2×). మొత్తం = <strong>50</strong>.")}</p>
          </div>
          <div class="info-card">
            <h4>${bi("Step 3: Descend Back (50 Guru-Nāmas, p. 154)", "దశ 3: అవరోహణ — క్రిందికి 50 గురునామాలు (పుట 154)")}</h4>
            <p>${bi("Return down the spine visualizing each lotus and repeating the Guru's Name mentally: <strong>Ājñā (2) → Viśuddhi (16) → Anāhata (12) → Maṇipūra (10) → Svādhiṣṭhāna (6) → Mūlādhāra (4)</strong> = <strong>50</strong>. One up-and-down cycle = <strong>100</strong> repetitions (do 100, 300, 500, or 1,000 per sitting).", "తిరిగి క్రిందికి వస్తూ <strong>ఆజ్ఞ (2) → విశుద్ధి (16) → అనాహతం (12) → మణిపూరకం (10) → స్వాధిష్ఠానం (6) → మూలాధారం (4)</strong> = <strong>50</strong>. ఒకసారి పైకి-క్రిందికి చేస్తే <strong>100</strong> నామాలు (వీలును బట్టి 100, 300, 500, 1,000 సార్లు చేయవచ్చు).")}</p>
          </div>
          <div class="info-card">
            <h4>${bi("Step 4: Sāvitrī Closing (+8 = 108, pp. 157–158)", "దశ 4: సావిత్రీ సాధన ముగింపు (+8 = 108, పుట 157–158)")}</h4>
            <p>${bi("<strong>Never get up abruptly!</strong> Bring awareness to Ājñā and ascend to Brahmarandhra surrendering <strong>Manas (1) → Buddhi (1) → Citta (1) → Ahaṁkāra (1)</strong> = 4, then descend <strong>Ahaṁkāra → Citta → Buddhi → Manas</strong> = 4 back to Ājñā before opening your eyes. <strong>100 + 4 + 4 = 108</strong> (10 cycles = <strong>1,008</strong>).", "<strong>వెంటనే లేచిపోరాదు!</strong> మనస్సును ఆజ్ఞ వద్దకు తెచ్చి, <strong>మనస్సు (1) → బుద్ధి (1) → చిత్తం (1) → అహంకారం (1)</strong> అంటూ సహస్రారానికి వెళ్ళి, తిరిగి <strong>అహంకారం → చిత్తం → బుద్ధి → మనస్సు</strong> అంటూ ఆజ్ఞకు దిగి రావాలి (4+4=8). <strong>100 + 8 = 108</strong> (10 ఆవృతాలు = <strong>1,008</strong>).")}</p>
          </div>
        </div>
      </div>

      <div class="panel-box">
        <ul style="padding-left:1.15rem;font-size:0.86rem;">
          ${K.notesEn.map((n, i) => `<li style="margin-bottom:0.3rem;">${bi(n, K.notesTe[i])}</li>`).join("")}
        </ul>
      </div>
    `;

    const kInp = document.getElementById("kriyaCountInp");
    const kOut = document.getElementById("kriyaCalcOut");
    function updateKriya() {
      const n = Math.max(1, Number(kInp.value) || 1);
      const mins = n * 0.5;
      const hrs = (mins / 60).toFixed(1);
      const yrsPerYear = n * 365;
      const yrsForMillion = (1000000 / yrsPerYear).toFixed(2);
      kOut.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:0.6rem;">
          <div><small style="color:var(--text-muted);">${bi("Time / Day", "రోజుకు సమయం")}</small><div style="font-weight:700;color:var(--cyan-bright);">${mins} min (${hrs} hrs)</div></div>
          <div><small style="color:var(--text-muted);">${bi("Evolution / Day", "రోజుకు పరిణామం")}</small><div style="font-weight:700;color:var(--gold-bright);">${n.toLocaleString()} yrs</div></div>
          <div><small style="color:var(--text-muted);">${bi("Evolution / Year", "ఏడాదికి పరిణామం")}</small><div style="font-weight:700;color:var(--emerald-accent);">${yrsPerYear.toLocaleString()} yrs</div></div>
          <div><small style="color:var(--text-muted);">${bi("10 Lakh Yrs Goal", "10 లక్షల సం॥లు")}</small><div style="font-weight:700;color:#fff;">~${yrsForMillion} yrs</div></div>
        </div>
      `;
    }
    kInp.addEventListener("input", updateKriya);
    updateKriya();
  }

  // SECTION 7: Aswini Suktam (12 Verses), Red-Light Mode & Paired Organs
  function initAswini() {
    const el = document.getElementById("secAswiniBody");
    if (!el) return;
    const AS = D1.aswiniSuktam;

    el.innerHTML = `
      <div class="reader-guide">
        <strong>${bi("Aśvinī Sūktam (Part 1, pp. 7–8, 49–50, 86–88):", "అశ్వనీ సూక్తం (భాగం 1: పుట 7–8, 49–50, 86–88):")}</strong>
        ${bi(AS.introEn, AS.introTe)}
      </div>

      <div class="btn-row">
        <button class="btn btn-red" id="redLightBtn">🔴 ${bi("Toggle Red-Light Ambience (p. 86)", "ఎర్రని కాంతి మోడ్ (పుట 86)")}</button>
        <button class="btn btn-primary" id="aswiniTimerBtn">⏱ ${bi("Start 3-Min Recitation Timer", "3 ని॥ పారాయణ టైమర్")}</button>
        <span id="aswiniTimerOut" class="tag-badge" style="align-self:center;">03:00</span>
      </div>

      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.65rem;">${bi("Complete 12-Verse Aśvinī Sūktam (Verbatim Telugu)", "సంపూర్ణ అశ్వనీ సూక్తము (12 శ్లోకాలు)")}</h4>
          ${AS.verses.map(v => `
            <div class="shloka-box">
              <div class="tag-badge" style="margin-bottom:0.3rem;">${bi(`Verse ${v.num}`, `శ్లోకం ${v.num}`)}</div>
              <div class="shloka-te">${v.te}</div>
            </div>
          `).join("")}
        </div>

        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.65rem;">${bi("Paired Body Organs Governed by Aśvinī Devatas (pp. 7, 49)", "అశ్వనీ దేవతల ఆధీనంలోని జంట అవయవాలు")}</h4>
          <div class="cards-grid" style="grid-template-columns:1fr;">
            ${AS.pairedOrgans.map(o => `
              <div class="info-card" style="padding:0.65rem 0.85rem;">
                <strong>${bi(o.en, o.te)}</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    const redBtn = document.getElementById("redLightBtn");
    redBtn.addEventListener("click", () => {
      const on = document.body.classList.toggle("red-light-mode");
      redBtn.classList.toggle("active", on);
    });

    const tBtn = document.getElementById("aswiniTimerBtn");
    const tOut = document.getElementById("aswiniTimerOut");
    let sec = 180;
    let tInt = null;
    tBtn.addEventListener("click", () => {
      if (tInt) {
        clearInterval(tInt); tInt = null; sec = 180; tOut.textContent = "03:00";
        tBtn.innerHTML = `⏱ ${bi("Start 3-Min Recitation Timer", "3 ని॥ పారాయణ టైమర్")}`;
      } else {
        tBtn.innerHTML = `⏹ ${bi("Stop Timer", "ఆపు")}`;
        tInt = setInterval(() => {
          sec--;
          const m = String(Math.floor(sec / 60)).padStart(2, "0");
          const s = String(sec % 60).padStart(2, "0");
          tOut.textContent = `${m}:${s}`;
          if (sec <= 0) {
            clearInterval(tInt); tInt = null; playChime(528, 1.5);
            tBtn.innerHTML = `⏱ ${bi("Start 3-Min Recitation Timer", "3 ని॥ పారాయణ టైమర్")}`;
          }
        }, 1000);
      }
    });
  }

  // SECTION 8: Gayatri, Omkara, Karma & Science
  function initGayatri() {
    const el = document.getElementById("secGayatriBody");
    if (!el) return;
    el.innerHTML = `
      <div class="cards-grid">
        ${D2.scienceAndKarma.map(item => `
          <div class="info-card">
            <h4>${bi(item.titleEn, item.titleTe)}</h4>
            <p>${bi(item.descEn, item.descTe)}</p>
          </div>
        `).join("")}
      </div>
    `;
  }

  // SECTION 9: Masters & Stories
  function initMasters() {
    const el = document.getElementById("secMastersBody");
    if (!el) return;
    el.innerHTML = `
      <div class="btn-row" id="masterFilterBtns">
        <button class="btn active" data-filter="all">${bi("All (Masters & Stories)", "అన్నీ")}</button>
        <button class="btn" data-filter="master">${bi("Masters & Rishis", "గురువులు & మహాత్ములు")}</button>
        <button class="btn" data-filter="story">${bi("Parables & Stories", "కథలు & ఉపమానాలు")}</button>
      </div>
      <div class="cards-grid" id="mastersGrid"></div>
    `;
    const grid = document.getElementById("mastersGrid");
    const btns = document.querySelectorAll("#masterFilterBtns .btn");

    function render(filter) {
      const list = D2.mastersAndStories.filter(m => filter === "all" || m.type === filter);
      grid.innerHTML = list.map(m => `
        <div class="info-card">
          <div class="tag-badge" style="margin-bottom:0.35rem;">${m.type === "master" ? bi("Master", "గురువు") : bi("Story", "కథ")}</div>
          <h4>${bi(m.nameEn, m.nameTe)}</h4>
          <p>${bi(m.noteEn, m.noteTe)}</p>
        </div>
      `).join("");
    }
    btns.forEach(b => b.addEventListener("click", () => {
      btns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.filter);
    }));
    render("all");
  }

  // SECTION 10: Complete 54 + 108 Book Index
  function initIndex() {
    const el = document.getElementById("secIndexBody");
    if (!el) return;
    el.innerHTML = `
      <div class="control-grid">
        <div class="field-group">
          <label>${bi("Search Telugu Topics (162 Total)", "విషయాలను వెతకండి (మొత్తం 162)")}</label>
          <input type="text" id="indexSearchInp" class="search-input" placeholder="e.g., గాయత్రి, అశ్వనీ, క్రియా, ద్రాం, ఓం...">
        </div>
        <div class="field-group">
          <label>${bi("Filter Volume", "భాగం ఎంచుకోండి")}</label>
          <select id="indexVolSel">
            <option value="all">${bi("Both Parts (162 Topics)", "రెండు భాగాలు (162)")}</option>
            <option value="1">${bi("Part 1 (54 Topics, pp. 1–88)", "మొదటి భాగం (54)")}</option>
            <option value="2">${bi("Part 2 (108 Topics, pp. 1–166)", "రెండవ భాగం (108)")}</option>
          </select>
        </div>
      </div>
      <div id="indexCountOut" style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.5rem;"></div>
      <div style="max-height:420px;overflow-y:auto;border:1px solid rgba(255,255,255,0.08);border-radius:12px;">
        <table class="data-table">
          <thead><tr><th>${bi("Part", "భాగం")}</th><th>#</th><th>${bi("Topic (Exact Book Title)", "విషయము")}</th><th>${bi("Pages", "పుటలు")}</th></tr></thead>
          <tbody id="indexTableBody"></tbody>
        </table>
      </div>
    `;

    const inp = document.getElementById("indexSearchInp");
    const sel = document.getElementById("indexVolSel");
    const tbody = document.getElementById("indexTableBody");
    const cnt = document.getElementById("indexCountOut");

    const allRows = [
      ...D2.indexPart1.map(r => ({ part: 1, num: r[0], title: r[1], pages: r[2] })),
      ...D2.indexPart2.map(r => ({ part: 2, num: r[0], title: r[1], pages: r[2] }))
    ];

    function render() {
      const q = inp.value.trim().toLowerCase();
      const v = sel.value;
      const filtered = allRows.filter(r => {
        const volOk = v === "all" || String(r.part) === v;
        const qOk = !q || r.title.toLowerCase().includes(q) || String(r.pages).includes(q);
        return volOk && qOk;
      });
      cnt.textContent = `Showing ${filtered.length} of ${allRows.length} topics`;
      tbody.innerHTML = filtered.map(r => `
        <tr>
          <td><span class="tag-badge">Pt.${r.part}</span></td>
          <td>${r.num}</td>
          <td class="telugu-font">${r.title}</td>
          <td><code>${r.pages}</code></td>
        </tr>
      `).join("");
    }
    inp.addEventListener("input", render);
    sel.addEventListener("change", render);
    render();
  }

  // SECTION 11: 15-Question Quiz
  function initQuiz() {
    const el = document.getElementById("secQuizBody");
    if (!el) return;
    let score = 0;
    const answered = new Set();

    el.innerHTML = `
      <div id="quizScoreBar" class="shloka-box" style="display:flex;justify-content:space-between;align-items:center;">
        <strong>${bi("Score:", "స్కోరు:")} <span id="quizScoreVal">0</span> / ${D2.quiz.length}</strong>
        <button class="btn" id="quizResetBtn">${bi("Reset Quiz", "మళ్ళీ ప్రారంభించు")}</button>
      </div>
      <div id="quizList"></div>
    `;
    const listEl = document.getElementById("quizList");
    const scoreEl = document.getElementById("quizScoreVal");

    function renderQuiz() {
      score = 0;
      answered.clear();
      scoreEl.textContent = "0";
      listEl.innerHTML = D2.quiz.map((q, qi) => `
        <div class="quiz-q" data-qi="${qi}">
          <strong>${qi + 1}. ${bi(q.qEn, q.qTe)}</strong>
          <div>
            ${q.opts.map((opt, oi) => `<button class="quiz-opt" data-oi="${oi}">${opt}</button>`).join("")}
          </div>
          <div class="quiz-exp" style="display:none;margin-top:0.5rem;font-size:0.83rem;color:var(--cyan-bright);"></div>
        </div>
      `).join("");

      listEl.querySelectorAll(".quiz-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          const qBox = btn.closest(".quiz-q");
          const qi = Number(qBox.dataset.qi);
          if (answered.has(qi)) return;
          answered.add(qi);
          const oi = Number(btn.dataset.oi);
          const q = D2.quiz[qi];
          const allOpts = qBox.querySelectorAll(".quiz-opt");
          allOpts[q.ans].classList.add("correct");
          if (oi === q.ans) {
            score++;
            scoreEl.textContent = String(score);
          } else {
            btn.classList.add("wrong");
          }
          const exp = qBox.querySelector(".quiz-exp");
          exp.style.display = "block";
          exp.innerHTML = bi(q.expEn, q.expTe);
        });
      });
    }

    document.getElementById("quizResetBtn").addEventListener("click", renderQuiz);
    renderQuiz();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndLang();
    initFoundations();
    initLifespan();
    initSvara();
    initHamsa();
    initPacer();
    initKriya();
    initAswini();
    initGayatri();
    initMasters();
    initIndex();
    initQuiz();
  });
})();
