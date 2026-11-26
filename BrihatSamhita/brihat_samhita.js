// Varahamihira's Brihat Samhita — Interactive Controller
(function () {
  "use strict";

  function bi(en, te) {
    return `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;
  }

  function initHeaderAndLang() {
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
      drawer.classList.toggle("open", open);
      overlay.classList.toggle("open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      overlay.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
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

  function initIntro() {
    const el = document.getElementById("secIntroBody");
    if (!el) return;
    el.innerHTML = `
      <div class="cards-grid" style="margin-bottom:1rem;">
        ${BS_CH1_2_INTRO.skandhas.map(s => `
          <div class="info-card">
            <span class="tag gold">${bi(s.nameEn, s.nameTe)}</span>
            <div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.35rem;">${bi(s.descEn, s.descTe)}</div>
          </div>`).join("")}
      </div>
      <div class="info-card" style="margin-bottom:1rem;">
        <span class="tag">${bi("5 Siddhāntas (Ch. II-4)", "5 సిద్ధాంతాలు")}</span> ${BS_CH1_2_INTRO.siddhantas.join(" • ")}<br>
        <div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.35rem;"><strong>${bi("Astrologer Qualifications:", "జ్యోతిష్యుని లక్షణాలు:")}</strong> ${bi(BS_CH1_2_INTRO.astrologerQualitiesEn, BS_CH1_2_INTRO.astrologerQualitiesTe)}</div>
      </div>
      <div class="cards-grid">
        ${BS_PLANET_COURSES.map(c => `
          <div class="info-card">
            <span class="tag purple">${c.ch}</span> <strong>${bi(c.planetEn, c.planetTe)}</strong>
            <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.3rem;">${bi(c.summaryEn, c.summaryTe)}</div>
          </div>`).join("")}
        ${BS_CH11_13_SKY.map(c => `
          <div class="info-card">
            <span class="tag emerald">${c.ch}</span> <strong>${bi(c.titleEn, c.titleTe)}</strong>
            <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.3rem;">${bi(c.descEn, c.descTe)}</div>
          </div>`).join("")}
      </div>`;
  }

  function initKurma() {
    const grid = document.getElementById("kurmaGrid");
    const detail = document.getElementById("kurmaDetail");
    const domGrid = document.getElementById("secDomainsGrid");
    if (!grid || !detail) return;

    // 3x3 compass layout indices in BS_KURMA_REGIONS: NW(6), N(7), NE(8), W(5), Center(0), E(1), SW(4), S(3), SE(2)
    const order = [6, 7, 8, 5, 0, 1, 4, 3, 2];
    function showRegion(idx) {
      const r = BS_KURMA_REGIONS[idx];
      grid.querySelectorAll("button").forEach(b => {
        const active = parseInt(b.dataset.idx, 10) === idx;
        b.style.background = active ? "rgba(245,185,66,0.22)" : "rgba(15,23,42,0.85)";
        b.style.borderColor = active ? "var(--gold-primary)" : "rgba(255,255,255,0.12)";
      });
      detail.innerHTML = `
        <span class="tag gold">${bi(r.dir, r.dirTe)}</span>
        <div style="margin-top:0.5rem;font-size:0.88rem;line-height:1.65;">
          <strong>${bi("Nakṣatra Triad (Ch. XIV):", "నక్షత్ర త్రికం:")}</strong> <span style="color:var(--cyan-bright);">${bi(r.starsEn, r.starsTe)}</span><br><br>
          <strong>${bi("Regions, Rivers & Peoples:", "ప్రాంతాలు & నదులు:")}</strong><br>
          <span style="color:var(--text-muted);">${bi(r.placesEn, r.placesTe)}</span>
        </div>`;
    }

    grid.innerHTML = order.map(idx => {
      const r = BS_KURMA_REGIONS[idx];
      return `<button type="button" data-idx="${idx}" style="padding:0.6rem 0.4rem;border-radius:9px;border:1px solid rgba(255,255,255,0.12);background:rgba(15,23,42,0.85);color:#fff;cursor:pointer;text-align:center;font-size:0.78rem;">
        <div style="font-weight:700;color:var(--gold-bright);">${r.dir.split(" ")[0]}</div>
        <div class="lang-te" style="font-size:0.72rem;">${r.dirTe.split(" ")[0]}</div>
      </button>`;
    }).join("");
    grid.querySelectorAll("button").forEach(b => b.addEventListener("click", () => showRegion(parseInt(b.dataset.idx, 10))));
    showRegion(0);

    if (domGrid) {
      domGrid.innerHTML = BS_CH15_20_MUNDANE.map(m => `
        <div class="info-card">
          <span class="tag">${m.ch}</span> <strong>${bi(m.titleEn, m.titleTe)}</strong>
          <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.3rem;">${bi(m.descEn, m.descTe)}</div>
        </div>`).join("");
    }
  }

  function initWeather() {
    const starSel = document.getElementById("rainStarSel");
    const cDate = document.getElementById("cloudDate");
    const out = document.getElementById("weatherCalcOut");
    const cardsBox = document.getElementById("weatherCardsBox");
    if (!starSel || !out) return;

    BS_CH23_RAINFALL_DRONAS.forEach((d, idx) => {
      starSel.add(new Option(`${d.starsEn} (${d.dronas} Droṇas)`, idx));
    });

    function updateWeather() {
      const dt = new Date(cDate.value || "2025-12-15");
      dt.setDate(dt.getDate() + 195);
      const delivStr = dt.toISOString().slice(0, 10);
      const item = BS_CH23_RAINFALL_DRONAS[parseInt(starSel.value, 10) || 0];
      out.innerHTML = `
        <div class="info-card">
          <span class="tag emerald">${bi("195-Day Delivery Date (Ch. XXI)", "195 రోజుల వర్ష తేదీ")}</span>
          <div class="mono" style="font-size:1.15rem;font-weight:700;color:#fff;margin:0.25rem 0;">${delivStr}</div>
          <span class="tag gold">${bi("Seasonal Rainfall (Ch. XXIII)", "నక్షత్ర వర్ష పరిమాణం")}</span>
          <div style="font-size:0.86rem;margin-top:0.3rem;"><strong>${item.dronas} Droṇas</strong> (${item.dronas * 4} Āḍhakas) — ${bi(item.starsEn, item.starsTe)}</div>
        </div>`;
    }
    cDate.addEventListener("input", updateWeather);
    starSel.addEventListener("change", updateWeather);
    updateWeather();

    if (cardsBox) {
      cardsBox.innerHTML = BS_CH21_31_WEATHER.map(w => `
        <div style="margin-bottom:0.65rem;padding-bottom:0.55rem;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.83rem;">
          <span class="tag">${w.ch}</span> <strong>${bi(w.titleEn, w.titleTe)}</strong>
          <div style="color:var(--text-muted);margin-top:0.2rem;">${bi(w.descEn, w.descTe)}</div>
        </div>`).join("");
    }
  }

  function initPortents() {
    const el = document.getElementById("secPortentsBody");
    if (!el) return;
    el.innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("4 Earthquake Circles (Ch. XXXII)", "4 భూకంప మండలాలు (అధ్యా. 32)")}</h4>
      <div class="cards-grid" style="margin-bottom:1.15rem;">
        ${BS_EARTHQUAKE_CIRCLES.map(e => `
          <div class="info-card">
            <span class="tag rose">${bi(e.nameEn, e.nameTe)}</span>
            <div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.35rem;line-height:1.55;">
              <strong>${bi("Stars:", "నక్షత్రాలు:")}</strong> ${bi(e.starsEn, e.starsTe)}<br>
              <strong>${bi("Range / Timing:", "వ్యాప్తి / కాలం:")}</strong> ${e.range} • ${bi(e.timingEn, e.timingTe)}<br>
              <strong>${bi("Effects:", "ఫలితాలు:")}</strong> ${bi(e.effectEn, e.effectTe)}
            </div>
          </div>`).join("")}
      </div>
      <div class="cards-grid">
        ${BS_CH33_52_PORTENTS.map(p => `
          <div class="info-card">
            <span class="tag gold">${p.ch}</span> <strong>${bi(p.titleEn, p.titleTe)}</strong>
            <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.3rem;">${bi(p.descEn, p.descTe)}</div>
          </div>`).join("")}
      </div>`;
  }

  function initVastu() {
    const grid = document.getElementById("vastuGrid81");
    const info = document.getElementById("vastuPadaInfo");
    const rankSel = document.getElementById("vastuRankSel");
    const rankOut = document.getElementById("vastuRankOut");
    const plansOut = document.getElementById("vastuPlansOut");
    if (!grid || !rankSel) return;

    function cellStyle(name, r, c) {
      if (name === "Brahmā") return { bg: "rgba(245,185,66,0.28)", bd: "var(--gold-primary)", zone: "Central Brahmā-Sthāna (9 squares) • మధ్య బ్రహ్మస్థానం" };
      if (["Aryaman","Vivasvān","Mitra","Pṛthvīdhara"].includes(name)) return { bg: "rgba(16,185,129,0.22)", bd: "var(--emerald-accent)", zone: "Inner Cardinal Deity (3 squares each) • అంతర దిక్పాలకుడు" };
      if (r === 0 || r === 8 || c === 0 || c === 8) return { bg: "rgba(56,189,248,0.14)", bd: "rgba(56,189,248,0.4)", zone: "Outer Perimeter (32 Deities) • బాహ్య పరిధి దేవత" };
      return { bg: "rgba(168,85,247,0.18)", bd: "rgba(168,85,247,0.45)", zone: "Inner Corner Deity • అంతర కోణ దేవత" };
    }

    let html = "";
    BS_VASTU_81_GRID.forEach((row, r) => {
      row.forEach((name, c) => {
        const st = cellStyle(name, r, c);
        html += `<button type="button" data-r="${r}" data-c="${c}" data-name="${name}" data-zone="${st.zone}" style="padding:0.28rem 0.1rem;border-radius:4px;border:1px solid ${st.bd};background:${st.bg};color:#fff;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.58rem;" title="${name}">${name.slice(0,7)}</button>`;
      });
    });
    grid.innerHTML = html;
    grid.querySelectorAll("button").forEach(b => {
      b.addEventListener("click", () => {
        info.innerHTML = `<strong>${b.dataset.name}</strong> (Row ${parseInt(b.dataset.r, 10) + 1}, Col ${parseInt(b.dataset.c, 10) + 1}) — <span style="color:var(--gold-bright);">${b.dataset.zone}</span>`;
      });
    });
    info.innerHTML = `<strong>Brahmā (Central 9 Padas)</strong> — <span style="color:var(--gold-bright);">Click any of the 81 squares above to inspect its Vāstu deity (Ch. LIII, Sl. 42–56).</span>`;

    BS_VASTU_RANKS.forEach((rk, i) => rankSel.add(new Option(`${rk.rankEn} • ${rk.rankTe}`, i)));
    function updateRank() {
      const rk = BS_VASTU_RANKS[parseInt(rankSel.value, 10) || 0];
      rankOut.innerHTML = `
        <div class="info-card">
          <div style="font-size:0.84rem;line-height:1.6;">
            <strong>${bi("Allowed Widths (Cubits):", "అనుమతించబడిన వెడల్పులు (మూరల్లో):")}</strong> ${rk.widths.join(", ")}<br>
            <strong>${bi("Length Formula:", "పొడవు సూత్రం:")}</strong> ${rk.lenAdd} → <strong>${rk.widths.map(w => Math.round(w * rk.lenMult * 10) / 10).join(", ")}</strong> cubits
          </div>
        </div>`;
    }
    rankSel.addEventListener("change", updateRank);
    updateRank();

    if (plansOut) {
      plansOut.innerHTML = BS_VASTU_HOUSE_PLANS.map(p => `• <strong>${bi(p.nameEn, p.nameTe)}:</strong> <span style="color:var(--text-muted);">${bi(p.resultEn, p.resultTe)}</span><br>`).join("");
    }
  }

  function initWaterArts() {
    const dGrid = document.getElementById("dakargalaGrid");
    const box = document.getElementById("ch55_67Box");
    if (dGrid) {
      dGrid.innerHTML = BS_DAKARGALA_WELL_DIRS.map(d => `
        <div class="info-card">
          <span class="tag ${d.status}">${d.dir}</span>
          <div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.3rem;">${bi(d.en, d.te)}</div>
        </div>`).join("");
    }
    if (box) {
      box.innerHTML = BS_CH55_67_ARTS_ANIMALS.map(c => `
        <div style="margin-bottom:0.65rem;padding-bottom:0.55rem;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.83rem;">
          <span class="tag gold">${c.ch}</span> <strong>${bi(c.titleEn, c.titleTe)}</strong>
          <div style="color:var(--text-muted);margin-top:0.2rem;">${bi(c.descEn, c.descTe)}</div>
        </div>`).join("");
    }
  }

  function initHumanGems() {
    const mGrid = document.getElementById("mahapurushaGrid");
    const box = document.getElementById("ch68_85Box");
    const gN = document.getElementById("gandhN");
    const gK = document.getElementById("gandhK");
    const gOut = document.getElementById("gandhOut");

    if (mGrid) {
      mGrid.innerHTML = BS_PANCA_MAHAPURUSHA.map(m => `
        <div class="info-card">
          <span class="tag gold">${bi(m.nameEn, m.nameTe)}</span> <span class="tag purple">${m.planet}</span>
          <div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.35rem;line-height:1.55;">
            <strong>${bi("Height / Weight / Life:", "ఎత్తు / బరువు / ఆయుస్సు:")}</strong> ${m.height} • ${m.weight} • ${m.lifespan}<br>
            ${bi(m.traitsEn, m.traitsTe)}
          </div>
        </div>`).join("");
    }
    if (box) {
      box.innerHTML = BS_CH68_85_HUMAN_GEMS.map(c => `
        <div style="margin-bottom:0.65rem;padding-bottom:0.55rem;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.83rem;">
          <span class="tag">${c.ch}</span> <strong>${bi(c.titleEn, c.titleTe)}</strong>
          <div style="color:var(--text-muted);margin-top:0.2rem;">${bi(c.descEn, c.descTe)}</div>
        </div>`).join("");
    }

    function comb(n, k) {
      if (k > n) return 0;
      let res = 1;
      for (let i = 1; i <= k; i++) res = (res * (n - i + 1)) / i;
      return Math.round(res);
    }
    function fact(x) { let r = 1; for (let i = 2; i <= x; i++) r *= i; return r; }
    function updateGandh() {
      const n = Math.max(1, parseInt(gN.value, 10) || 16);
      const k = Math.min(n, Math.max(1, parseInt(gK.value, 10) || 4));
      const cVal = comb(n, k);
      const perms = fact(k);
      const tot = cVal * perms * (k === 4 ? 4 : 1);
      gOut.innerHTML = `
        <div class="info-card">
          <div class="mono" style="font-size:0.9rem;color:#fff;">C(${n}, ${k}) = ${cVal.toLocaleString()} combinations</div>
          <div style="font-size:0.84rem;color:var(--gold-bright);margin-top:0.2rem;">
            ${k === 4 ? `${cVal.toLocaleString()} × 24 perms × 4 sets = <strong>${tot.toLocaleString()}</strong> total perfumes (Sl. 13–22)` : `${cVal.toLocaleString()} × ${perms.toLocaleString()} permutations = <strong>${(cVal * perms).toLocaleString()}</strong>`}
          </div>
        </div>`;
    }
    if (gN && gK) {
      gN.addEventListener("input", updateGandh);
      gK.addEventListener("input", updateGandh);
      updateGandh();
    }
  }

  function initSakuna() {
    const wSel = document.getElementById("sakWatch");
    const dSel = document.getElementById("sakDir");
    const out = document.getElementById("sakResult");
    const box = document.getElementById("sakCardsBox");
    if (!wSel || !dSel || !out) return;

    BS_SAKUNA_WATCHES.forEach((w, i) => wSel.add(new Option(`${w.watchEn} • ${w.watchTe}`, i)));
    BS_DIRECTIONS_8.forEach((d, i) => dSel.add(new Option(`${d.en} (${d.te}) — ${d.lord}`, i)));

    function updateSak() {
      const w = BS_SAKUNA_WATCHES[parseInt(wSel.value, 10) || 0];
      const d = parseInt(dSel.value, 10) || 0;
      const dirObj = BS_DIRECTIONS_8[d];
      let cls = "emerald", stateEn = "Śānta (Tranquil / Auspicious)", stateTe = "శాంత దిక్కు (శుభప్రదం)";
      if (d === w.angara) { cls = "gold"; stateEn = "Aṅgāra / Mukta-Sūrya (Charcoal — effect already spent)"; stateTe = "అంగార / ముక్తసూర్య (ఫలితం గడిచింది)"; }
      else if (d === w.dipta) { cls = "rose"; stateEn = "Dīpta / Prāpta-Sūrya (Burning — same-day intense/caution)"; stateTe = "దీప్త / ప్రాప్తసూర్య (అదే రోజు తక్షణ ఫలితం)"; }
      else if (d === w.dhumini) { cls = "purple"; stateEn = "Dhūminī / Eṣya-Sūrya (Smoking — impending effect)"; stateTe = "ధూమిని / ఏష్యసూర్య (రాబోయే ఫలితం)"; }
      out.innerHTML = `
        <div class="info-card">
          <span class="tag ${cls}">${bi(stateEn, stateTe)}</span>
          <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.35rem;">
            <strong>${bi("Quarter Lord:", "దిక్పాలకుడు:")}</strong> ${bi(dirObj.lord, dirObj.lordTe)}
          </div>
        </div>`;
    }
    wSel.addEventListener("change", updateSak);
    dSel.addEventListener("change", updateSak);
    updateSak();

    if (box) {
      box.innerHTML = BS_CH86_100_OMENS_MUHURTA.slice(0, 2).map(s => `
        <div style="margin-bottom:0.65rem;padding-bottom:0.55rem;border-bottom:1px solid rgba(255,255,255,0.07);font-size:0.83rem;">
          <span class="tag gold">${s.ch}</span> <strong>${bi(s.titleEn, s.titleTe)}</strong>
          <div style="color:var(--text-muted);margin-top:0.2rem;">${bi(s.descEn, s.descTe)}</div>
        </div>`).join("");
    }
  }

  function initGocara() {
    const mSel = document.getElementById("gocMoon");
    const pSel = document.getElementById("gocPlanet");
    const sSel = document.getElementById("gocSign");
    const out = document.getElementById("gocResult");
    const mGrid = document.getElementById("muhurtaGrid");
    if (!mSel || !pSel || !sSel || !out) return;

    BS_RASI_NAMES.forEach((n, i) => {
      mSel.add(new Option(n, i));
      sSel.add(new Option(n, i));
    });
    Object.keys(BS_GOCARA_BENEFIC).forEach(k => pSel.add(new Option(BS_GOCARA_BENEFIC[k].en, k)));

    function updateGoc() {
      const m = parseInt(mSel.value, 10) || 0;
      const s = parseInt(sSel.value, 10) || 0;
      const pk = pSel.value || "jupiter";
      const house = ((s - m + 12) % 12) + 1;
      const rule = BS_GOCARA_BENEFIC[pk];
      const isGood = rule.houses.includes(house);
      out.innerHTML = `
        <div class="info-card">
          <span class="tag ${isGood ? "emerald" : "rose"}">${isGood ? bi(`Benefic Transit — House ${house} from Moon`, `శుభ గోచారం — చంద్రుని నుండి ${house}వ భావం`) : bi(`Challenging / Non-Benefic Transit — House ${house} from Moon`, `సాధారణ / అశుభ గోచారం — చంద్రుని నుండి ${house}వ భావం`)}</span>
          <div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.35rem;">
            ${rule.sloka} ${bi("Subject to Daśā strength, aspects, and remedies (Ch. CIV, Sl. 46–56).", "దశ, దృష్టి మరియు శాంతి విధులపై ఫలిత తీవ్రత ఆధారపడి ఉంటుంది (అధ్యా. 104).")}
          </div>
        </div>`;
    }
    mSel.addEventListener("change", updateGoc);
    pSel.addEventListener("change", updateGoc);
    sSel.addEventListener("change", updateGoc);
    updateGoc();

    if (mGrid) {
      mGrid.innerHTML = BS_CH86_100_OMENS_MUHURTA.slice(2).map(s => `
        <div class="info-card">
          <span class="tag">${s.ch}</span> <strong>${bi(s.titleEn, s.titleTe)}</strong>
          <div style="font-size:0.83rem;color:var(--text-muted);margin-top:0.3rem;">${bi(s.descEn, s.descTe)}</div>
        </div>`).join("");
    }
  }

  function initIndex107() {
    const search = document.getElementById("idxSearch");
    const tbody = document.getElementById("idxTableBody");
    if (!tbody) return;
    function render(q) {
      const term = (q || "").trim().toLowerCase();
      const rows = BS_ALL_107_CHAPTERS.filter(([num, title, desc]) =>
        !term || String(num) === term || title.toLowerCase().includes(term) || desc.toLowerCase().includes(term)
      );
      tbody.innerHTML = rows.map(([num, title, desc]) => `<tr><td><span class="mono">Ch. ${num}</span></td><td><strong>${title}</strong></td><td style="color:var(--text-muted);">${desc}</td></tr>`).join("");
    }
    if (search) search.addEventListener("input", () => render(search.value));
    render("");
  }

  function initQuiz() {
    const box = document.getElementById("quizBox");
    if (!box) return;
    let score = 0;
    const answered = new Set();
    box.innerHTML = `<div id="bsQuizScore" style="margin-bottom:0.85rem;font-weight:700;color:var(--gold-bright);">Score: 0 / ${BS_QUIZ.length}</div>` +
      BS_QUIZ.map((q, qi) => `
        <div class="info-card" style="margin-bottom:0.85rem;">
          <div style="font-weight:700;margin-bottom:0.5rem;">${bi(q.qEn, q.qTe)}</div>
          ${q.opts.map((o, oi) => `<button type="button" class="quiz-opt" data-qi="${qi}" data-oi="${oi}">${o}</button>`).join("")}
        </div>`).join("");
    box.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const qi = parseInt(btn.dataset.qi, 10);
        const oi = parseInt(btn.dataset.oi, 10);
        if (answered.has(qi)) return;
        answered.add(qi);
        const correct = BS_QUIZ[qi].ans;
        const sibs = box.querySelectorAll(`.quiz-opt[data-qi="${qi}"]`);
        sibs[correct].classList.add("correct");
        if (oi === correct) score++;
        else btn.classList.add("wrong");
        document.getElementById("bsQuizScore").textContent = `Score: ${score} / ${BS_QUIZ.length}`;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndLang();
    initIntro();
    initKurma();
    initWeather();
    initPortents();
    initVastu();
    initWaterArts();
    initHumanGems();
    initSakuna();
    initGocara();
    initIndex107();
    initQuiz();
  });
})();
