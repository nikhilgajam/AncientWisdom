/**
 * Varāhamihira's Bṛhat Jātaka — Interactive Computational & Visual Engine
 * Bilingual (English + తెలుగు) • Zero-dependency client-side engine
 */

(function () {
  "use strict";

  // Helper: bilingual span wrapper
  const bi = (en, te) => `<span class="lang-en">${en}</span><span class="dual-sep"> • </span><span class="lang-te">${te}</span>`;

  // South Indian 4x4 grid mapping: [row, col] (0-indexed) for signs 1..12 (Meṣa=1 .. Mīna=12)
  const SOUTH_GRID_POS = {
    12: [0, 0], 1: [0, 1], 2: [0, 2], 3: [0, 3],
    11: [1, 0],                        4: [1, 3],
    10: [2, 0],                        5: [2, 3],
    9:  [3, 0], 8: [3, 1], 7: [3, 2], 6: [3, 3]
  };

  // =========================================================================
  // 0. Language Toggle & Navigation Drawer
  // =========================================================================
  function initHeaderAndNav() {
    const langBtns = document.querySelectorAll(".lang-opt");
    langBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        langBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.body.setAttribute("data-lang", btn.dataset.langVal);
      });
    });

    const menuToggle = document.getElementById("menuToggle");
    const navDrawer = document.getElementById("navDrawer");
    const navOverlay = document.getElementById("navOverlay");
    const closeDrawer = document.getElementById("closeDrawer");
    const navLinks = document.querySelectorAll(".drawer-nav-item");

    function setDrawer(open) {
      navDrawer.classList.toggle("open", open);
      navOverlay.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      navDrawer.setAttribute("aria-hidden", String(!open));
    }

    menuToggle.addEventListener("click", () => setDrawer(true));
    closeDrawer.addEventListener("click", () => setDrawer(false));
    navOverlay.addEventListener("click", () => setDrawer(false));
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        setDrawer(false);
      });
    });
  }

  // =========================================================================
  // 1. Section 1: 12-Rāśi Kālapuruṣa Wheel, Ṣaḍvarga & Bhāvas (Ch. I)
  // =========================================================================
  let selectedRasiId = 1;

  function renderZodiacWheel() {
    const svg = document.getElementById("zodiacWheelSvg");
    const cx = 190, cy = 190, rOut = 175, rIn = 72;
    let html = `<circle cx="${cx}" cy="${cy}" r="${rOut}" fill="#0a0f1d" stroke="#f5b942" stroke-width="2"/>`;
    html += `<circle cx="${cx}" cy="${cy}" r="${rIn}" fill="#06080d" stroke="#38bdf8" stroke-width="1.5"/>`;

    BJ_RASIS.forEach((r, idx) => {
      const a1 = ((idx * 30 - 90) * Math.PI) / 180;
      const a2 = (((idx + 1) * 30 - 90) * Math.PI) / 180;
      const aMid = ((idx * 30 + 15 - 90) * Math.PI) / 180;
      const x1 = cx + rOut * Math.cos(a1), y1 = cy + rOut * Math.sin(a1);
      const x2 = cx + rOut * Math.cos(a2), y2 = cy + rOut * Math.sin(a2);
      const ix1 = cx + rIn * Math.cos(a1), iy1 = cy + rIn * Math.sin(a1);
      const ix2 = cx + rIn * Math.cos(a2), iy2 = cy + rIn * Math.sin(a2);
      const isSel = r.id === selectedRasiId;
      const fill = isSel ? "rgba(245,185,66,0.32)" : (idx % 2 === 0 ? "rgba(30,41,59,0.55)" : "rgba(15,23,42,0.55)");
      const d = `M ${ix1} ${iy1} L ${x1} ${y1} A ${rOut} ${rOut} 0 0 1 ${x2} ${y2} L ${ix2} ${iy2} A ${rIn} ${rIn} 0 0 0 ${ix1} ${iy1} Z`;
      const tx = cx + ((rOut + rIn) / 2) * Math.cos(aMid);
      const ty = cy + ((rOut + rIn) / 2) * Math.sin(aMid);
      html += `<g class="rasi-wedge" data-id="${r.id}" style="cursor:pointer;">
        <path d="${d}" fill="${fill}" stroke="rgba(245,185,66,0.45)" stroke-width="${isSel ? 2 : 1}"/>
        <text x="${tx}" y="${ty - 4}" text-anchor="middle" fill="#ffd700" font-size="16" font-weight="700">${r.symbol}</text>
        <text x="${tx}" y="${ty + 12}" text-anchor="middle" fill="#f8fafc" font-size="9.5" font-weight="600">${r.en.split(" ")[0]}</text>
      </g>`;
    });

    const sel = BJ_RASIS[selectedRasiId - 1];
    html += `<text x="${cx}" y="${cy - 8}" text-anchor="middle" fill="#ffd700" font-size="22">${sel.symbol}</text>`;
    html += `<text x="${cx}" y="${cy + 12}" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">${sel.en.split(" ")[0]}</text>`;
    html += `<text x="${cx}" y="${cy + 28}" text-anchor="middle" fill="#38bdf8" font-size="11">${sel.te}</text>`;
    svg.innerHTML = html;

    svg.querySelectorAll(".rasi-wedge").forEach(g => {
      g.addEventListener("click", () => {
        selectedRasiId = parseInt(g.dataset.id, 10);
        renderZodiacWheel();
        renderRasiDetail();
      });
    });
  }

  function renderRasiDetail() {
    const r = BJ_RASIS[selectedRasiId - 1];
    document.getElementById("rasiDetailBox").innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
        <div>
          <h4 style="font-size:1.25rem;color:#fff;">${r.symbol} ${r.en} <span class="lang-te" style="color:var(--gold-bright);">(${r.te})</span></h4>
          <div style="font-size:0.84rem;color:var(--cyan-bright);">${bi("Alt. Name: " + r.alt, "పర్యాయ నామం: " + r.alt)}</div>
        </div>
        <span class="tag gold">${bi("Lord: " + r.lord, "అధిపతి: " + r.lordTe)}</span>
      </div>
      <div class="data-table-wrap"><table class="bj-table">
        <tr><th>${bi("Kālapuruṣa Limb", "కాలపురుష అంగం")}</th><td>${bi(r.limbEn, r.limbTe)}</td></tr>
        <tr><th>${bi("Symbolic Form", "స్వరూపం")}</th><td>${bi(r.formEn, r.formTe)}</td></tr>
        <tr><th>${bi("Exaltation / Fall", "ఉచ్ఛ / నీచ")}</th><td>${bi(r.exalt + " | Fall: " + r.fall, r.exaltTe + " | నీచ: " + r.fallTe)}</td></tr>
        <tr><th>${bi("Mūlatrikoṇa", "మూలత్రికోణం")}</th><td>${bi(r.mool, r.moolTe)}</td></tr>
        <tr><th>${bi("Strength / Rising", "బలకాలం / ఉదయం")}</th><td>${bi(r.strengthTimeEn + " • " + r.risingEn, r.strengthTimeTe + " • " + r.risingTe)}</td></tr>
        <tr><th>${bi("Mobility & Gender", "చర-స్థిర & లింగ")}</th><td>${bi(r.mobilityEn + " • " + r.genderEn, r.mobilityTe + " • " + r.genderTe)}</td></tr>
        <tr><th>${bi("Direction & Colour", "దిక్కు & వర్ణం")}</th><td>${bi(r.dirEn + " • " + r.colorEn, r.dirTe + " • " + r.colorTe)}</td></tr>
        <tr><th>${bi("Rising Measure (Sl. 19)", "రాశి మానం (శ్లో. 19)")}</th><td class="mono">${r.measure}</td></tr>
      </table></div>`;
  }

  function initSadvargaAndBhavaTable() {
    const sel = document.getElementById("svRasi");
    const degIn = document.getElementById("svDeg");
    BJ_RASIS.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = `${r.id}. ${r.en} (${r.te})`;
      sel.appendChild(opt);
    });

    function calcSadvarga() {
      const rId = parseInt(sel.value, 10);
      const deg = Math.max(0, Math.min(29.9999, parseFloat(degIn.value) || 0));
      const r = BJ_RASIS[rId - 1];
      const isOdd = rId % 2 === 1;

      // Hora (15° each): Odd -> 1st Sun, 2nd Moon; Even -> 1st Moon, 2nd Sun
      const horaIdx = deg < 15 ? 0 : 1;
      const horaLord = isOdd ? (horaIdx === 0 ? "Sun (రవి)" : "Moon (చంద్రుడు)") : (horaIdx === 0 ? "Moon (చంద్రుడు)" : "Sun (రవి)");

      // Drekkana (10° each): 1st = self, 2nd = 5th, 3rd = 9th
      const drekIdx = Math.floor(deg / 10);
      const drekRasiId = ((rId - 1 + drekIdx * 4) % 12) + 1;
      const drekRasi = BJ_RASIS[drekRasiId - 1];

      // Navamsa (3°20' = 3.3333° each): Start cycles Aries(1), Cap(10), Lib(7), Can(4)
      const navIdx = Math.floor(deg / (30 / 9));
      const navStarts = [1, 10, 7, 4];
      const navStart = navStarts[(rId - 1) % 4];
      const navRasiId = ((navStart - 1 + navIdx) % 12) + 1;
      const navRasi = BJ_RASIS[navRasiId - 1];

      // Vargottama (Sl. 14): 1st in movable, 5th (idx 4) in fixed, 9th (idx 8) in dual
      const mod = (rId - 1) % 3; // 0=movable,1=fixed,2=dual
      const isVargottama = (mod === 0 && navIdx === 0) || (mod === 1 && navIdx === 4) || (mod === 2 && navIdx === 8);

      // Dwadasamsa (2.5° each): starts from sign itself
      const dwaIdx = Math.floor(deg / 2.5);
      const dwaRasiId = ((rId - 1 + dwaIdx) % 12) + 1;
      const dwaRasi = BJ_RASIS[dwaRasiId - 1];

      // Trimsamsa (Sl. 7)
      const bands = isOdd ? BJ_TRIMSAMSA_ODD : BJ_TRIMSAMSA_EVEN;
      const tri = bands.find(b => deg >= b.start && deg < b.end) || bands[bands.length - 1];

      // Riksha Sandhi (last portion of Cancer 4, Scorpio 8, Pisces 12)
      const isSandhi = [4, 8, 12].includes(rId) && deg >= 26.6667;

      document.getElementById("svResult").innerHTML = `
        <div class="cards-grid">
          <div class="info-card"><span class="tag gold">1. Kṣetra (క్షేత్ర)</span><div><strong>${r.en}</strong></div><div style="color:var(--text-muted);font-size:0.85rem;">${r.lord} (${r.lordTe})</div></div>
          <div class="info-card"><span class="tag">2. Horā (హోరా)</span><div><strong>${horaIdx === 0 ? "1st Half (0°–15°)" : "2nd Half (15°–30°)"}</strong></div><div style="color:var(--text-muted);font-size:0.85rem;">${horaLord}</div></div>
          <div class="info-card"><span class="tag">3. Drekkāṇa (ద్రేక్కాణం)</span><div><strong>#${drekIdx + 1} → ${drekRasi.en}</strong></div><div style="color:var(--text-muted);font-size:0.85rem;">${drekRasi.lord} (${drekRasi.lordTe})</div></div>
          <div class="info-card"><span class="tag purple">4. Navāṁśa (నవాంశ)</span><div><strong>#${navIdx + 1} → ${navRasi.en}</strong> ${isVargottama ? '<span class="tag emerald">Vargottama!</span>' : ''}</div><div style="color:var(--text-muted);font-size:0.85rem;">${navRasi.lord} (${navRasi.lordTe})</div></div>
          <div class="info-card"><span class="tag">5. Dvādaśāṁśa (ద్వాదశాంశ)</span><div><strong>#${dwaIdx + 1} → ${dwaRasi.en}</strong></div><div style="color:var(--text-muted);font-size:0.85rem;">${dwaRasi.lord} (${dwaRasi.lordTe})</div></div>
          <div class="info-card"><span class="tag">6. Triṁśāṁśa (త్రింశాంశ)</span><div><strong>${tri.start}°–${tri.end}°</strong></div><div style="color:var(--text-muted);font-size:0.85rem;">${tri.lord} (${tri.lordTe})</div></div>
        </div>
        ${isSandhi ? `<div style="margin-top:0.75rem;color:#fda4af;font-weight:600;">⚠️ ${bi("Ṛkṣa Sandhi Zone (concluding portion of Cancer/Scorpio/Pisces — Ch. I, Sl. 7)", "ఋక్ష సంధి ప్రాంతం (కర్కాటక/వృశ్చిక/మీన రాశుల అంత్య భాగం)")}</div>` : ""}`;
    }

    sel.addEventListener("change", calcSadvarga);
    degIn.addEventListener("input", calcSadvarga);
    calcSadvarga();

    // 12 Bhavas Table
    const tbl = document.getElementById("bhavaNamesTable");
    tbl.innerHTML = `<thead><tr>
      <th>#</th><th>${bi("Set 1 (Sl. 15)", "మొదటి వర్గం")}</th><th>${bi("Set 2 (Sl. 16)", "రెండవ వర్గం")}</th>
      <th>${bi("Classification", "వర్గీకరణ")}</th><th>${bi("Signification", "భావ ఫలితాలు")}</th>
    </tr></thead><tbody>` + BJ_BHAVAS.map(b => `<tr>
      <td class="mono">${b.num}</td><td>${b.set1}</td><td>${b.set2}</td><td><span class="tag">${b.group}</span></td><td>${bi(b.descEn, b.descTe)}</td>
    </tr>`).join("") + `</tbody>`;
  }

  // =========================================================================
  // 2. Section 2: Planets, Compass & 5-Fold Friendship (Ch. II)
  // =========================================================================
  let selectedPlanetIdx = 0;

  function initSection2() {
    const tabs = document.getElementById("planetTabs");
    BJ_PLANETS.forEach((p, idx) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (idx === 0 ? " active" : "");
      btn.innerHTML = `${p.sym} <span class="lang-en">${p.en.split(" ")[0]}</span><span class="dual-sep">/</span><span class="lang-te">${p.te.split(" ")[0]}</span>`;
      btn.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedPlanetIdx = idx;
        renderPlanetDetail();
      });
      tabs.appendChild(btn);
    });
    renderPlanetDetail();
    renderDirCompass();
    initFriendshipCalc();
  }

  function renderPlanetDetail() {
    const p = BJ_PLANETS[selectedPlanetIdx];
    document.getElementById("planetDetailBox").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${p.sym} ${p.en} <span class="lang-te">(${p.te})</span></h4>
      <div style="margin-bottom:0.6rem;">
        <span class="tag gold">${bi("Role: " + p.roleEn, "పాత్ర: " + p.roleTe)}</span>
        <span class="tag">${bi("Guṇa: " + p.gunaEn, "గుణం: " + p.gunaTe)}</span>
        <span class="tag purple">${bi("Caste: " + p.casteEn, "వర్ణం: " + p.casteTe)}</span>
      </div>
      <div class="data-table-wrap"><table class="bj-table">
        <tr><th>${bi("Kālapuruṣa", "కాలపురుష అంగం")}</th><td>${bi(p.constituentEn, p.constituentTe)}</td></tr>
        <tr><th>${bi("Synonyms (Sl. 2–3)", "పర్యాయ నామాలు")}</th><td>${p.synonyms}</td></tr>
        <tr><th>${bi("Deity / Element", "అధిదేవత / భూతం")}</th><td>${bi(p.deityEn + " • " + p.elementEn, p.deityTe + " • " + p.elementTe)}</td></tr>
        <tr><th>${bi("Physical Form", "శరీర వర్ణన")}</th><td>${bi(p.physEn, p.physTe)}</td></tr>
        <tr><th>${bi("Dhātu & Flavour", "ధాతువు & రుచి")}</th><td>${bi(p.dhatuEn + " • " + p.flavourEn, p.dhatuTe + " • " + p.flavourTe)}</td></tr>
        <tr><th>${bi("Place / Metal / Cloth", "స్థానం / లోహం / వస్త్రం")}</th><td>${bi(p.placeEn + " • " + p.metalEn + " • " + p.apparelEn, p.placeTe + " • " + p.metalTe + " • " + p.apparelTe)}</td></tr>
        <tr><th>${bi("Season & Period", "ఋతువు & కాలం")}</th><td>${bi(p.seasonEn + " • " + p.periodEn, p.seasonTe + " • " + p.periodTe)}</td></tr>
        <tr><th>${bi("Digbala & Kālabala", "దిగ్బల & కాలబలం")}</th><td>${bi(p.digbala + " • " + p.kalabala, p.digbalaTe + " • " + p.kalabalaTe)}</td></tr>
      </table></div>`;
  }

  function renderDirCompass() {
    const svg = document.getElementById("dirCompassSvg");
    const pts = [
      { dir: "E", label: "Sun ☉", te: "రవి", angle: 0 },
      { dir: "SE", label: "Venus ♀", te: "శుక్ర", angle: 45 },
      { dir: "S", label: "Mars ♂", te: "కుజ", angle: 90 },
      { dir: "SW", label: "Rāhu ☊", te: "రాహు", angle: 135 },
      { dir: "W", label: "Saturn ♄", te: "శని", angle: 180 },
      { dir: "NW", label: "Moon ☽", te: "చంద్ర", angle: 225 },
      { dir: "N", label: "Merc ☿", te: "బుధ", angle: 270 },
      { dir: "NE", label: "Jup ♃", te: "గురు", angle: 315 }
    ];
    let html = `<circle cx="160" cy="160" r="135" fill="#080c16" stroke="rgba(245,185,66,0.3)" stroke-width="1.5"/>`;
    pts.forEach(pt => {
      const rad = ((pt.angle - 90) * Math.PI) / 180; // Top=N? Wait: keep East at Right (0 deg)
      const r2 = (pt.angle * Math.PI) / 180;
      const x = 160 + 105 * Math.cos(r2), y = 160 + 105 * Math.sin(r2);
      html += `<line x1="160" y1="160" x2="${x}" y2="${y}" stroke="rgba(56,189,248,0.28)" stroke-width="1"/>`;
      html += `<circle cx="${x}" cy="${y}" r="24" fill="rgba(15,23,42,0.92)" stroke="#f5b942" stroke-width="1.2"/>`;
      html += `<text x="${x}" y="${y - 4}" text-anchor="middle" fill="#38bdf8" font-size="9" font-weight="700">${pt.dir}</text>`;
      html += `<text x="${x}" y="${y + 8}" text-anchor="middle" fill="#ffd700" font-size="9.5" font-weight="700">${pt.label}</text>`;
    });
    html += `<circle cx="160" cy="160" r="22" fill="#131c31" stroke="#ffd700"/><text x="160" y="164" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">DIK</text>`;
    svg.innerHTML = html;
  }

  function initFriendshipCalc() {
    const selA = document.getElementById("frPlanetA");
    const selB = document.getElementById("frPlanetB");
    const distIn = document.getElementById("frHouseDist");
    BJ_PLANETS.forEach(p => {
      selA.add(new Option(`${p.sym} ${p.en}`, p.id));
      selB.add(new Option(`${p.sym} ${p.en}`, p.id));
    });
    selB.value = "jupiter";

    function update() {
      const pA = BJ_PLANETS.find(p => p.id === selA.value);
      const pB = BJ_PLANETS.find(p => p.id === selB.value);
      const h = Math.max(1, Math.min(12, parseInt(distIn.value, 10) || 1));
      const bName = pB.en.split(" ")[0];

      let nat = "Neutral", natScore = 0;
      if (pA.id === pB.id) { nat = "Same Planet"; }
      else if (pA.friends.includes(bName)) { nat = "Friend (Mitra)"; natScore = 1; }
      else if (pA.enemies.includes(bName)) { nat = "Enemy (Śatru)"; natScore = -1; }

      const isTempFriend = [2, 3, 4, 10, 11, 12].includes(h);
      const tempScore = isTempFriend ? 1 : -1;
      const total = natScore + tempScore;
      let comp = "Neutral (Sama / సమ)", compTe = "సమ";
      if (pA.id === pB.id) { comp = "Self"; compTe = "స్వగ్రహం"; }
      else if (total === 2) { comp = "Great Friend (Adhimitra)"; compTe = "అధిమిత్రుడు"; }
      else if (total === 1) { comp = "Friend (Mitra)"; compTe = "మిత్రుడు"; }
      else if (total === 0) { comp = "Neutral (Sama)"; compTe = "సమ"; }
      else if (total === -1) { comp = "Enemy (Śatru)"; compTe = "శత్రువు"; }
      else if (total === -2) { comp = "Deadly Foe (Adhiśatru)"; compTe = "అతిశత్రువు"; }

      // Aspect (Sl. 13)
      let asp = "None (0)";
      if ([3, 10].includes(h)) asp = pA.id === "saturn" ? "Full Special Aspect (1) — Saturn" : "1/4 Aspect";
      else if ([5, 9].includes(h)) asp = pA.id === "jupiter" ? "Full Special Aspect (1) — Jupiter" : "1/2 Aspect";
      else if ([4, 8].includes(h)) asp = pA.id === "mars" ? "Full Special Aspect (1) — Mars" : "3/4 Aspect";
      else if (h === 7) asp = "Full Aspect (1)";

      document.getElementById("friendshipResult").innerHTML = `
        <div class="cards-grid">
          <div class="info-card"><span class="tag">${bi("Naisargika (Natural)", "నైసర్గిక మైత్రి")}</span><div><strong>${nat}</strong></div></div>
          <div class="info-card"><span class="tag">${bi("Tātkālika (House " + h + ")", "తాత్కాలిక మైత్రి")}</span><div><strong>${isTempFriend ? bi("Temporal Friend (2,3,4,10,11,12)", "తాత్కాలిక మిత్రుడు") : bi("Temporal Enemy (1,5,6,7,8,9)", "తాత్కాలిక శత్రువు")}</strong></div></div>
          <div class="info-card"><span class="tag gold">${bi("5-Fold Compound", "పంచవిధ మైత్రి")}</span><div><strong>${bi(comp, compTe)}</strong></div></div>
          <div class="info-card"><span class="tag purple">${bi("Aspect of A on B (Sl. 13)", "గ్రహ దృష్టి")}</span><div><strong>${asp}</strong></div></div>
        </div>`;
    }
    selA.addEventListener("change", update);
    selB.addEventListener("change", update);
    distIn.addEventListener("input", update);
    update();
  }

  // =========================================================================
  // 3. Section 3: Chapters III–V
  // =========================================================================
  function initSection3() {
    const tabs = document.getElementById("ch35Tabs");
    const body = document.getElementById("ch35Content");

    function render(tab) {
      if (tab === "ch3") {
        body.innerHTML = `
          <div class="split-2">
            <div class="panel-box">
              <h4 style="color:var(--gold-bright);margin-bottom:0.65rem;">${bi("Viyoni Janma: Quadruped Body Parts (Ch. III, Sl. 1–5)", "వియోని జన్మ: చతుష్పాద శరీర భాగాలు")}</h4>
              <p style="font-size:0.86rem;color:var(--text-muted);margin-bottom:0.75rem;">${bi("When malefics are strong, benefics weak, and Mercury/Saturn is in Kendra/aspecting Lagna, birth corresponds to Moon's Dvādaśāṁśa in a Viyoni sign. Pakṣi Drekkaṇas (Gemini 2, Libra 2, Leo 1, Aquarius 1) with Saturn = land birds; with Moon = water birds.", "పాపులు బలంగా, శుభులు బలహీనంగా ఉండి బుధ/శని కేంద్రంలో ఉంటే చంద్ర ద్వాదశాంశను అనుసరించి వియోని జన్మ కలుగుతుంది.")}</p>
              <div class="cards-grid">${BJ_RASIS.map(r => `<div class="info-card"><strong>${r.id}. ${r.en}</strong><div style="color:var(--cyan-bright);">${bi(r.quadPartEn, r.quadPartTe)}</div></div>`).join("")}</div>
            </div>
            <div class="panel-box">
              <h4 style="color:var(--gold-bright);margin-bottom:0.65rem;">${bi("Springing of Trees by Planet (Ch. III, Sl. 6–8)", "వృక్షోత్పత్తి లక్షణాలు (శ్లో. 6–8)")}</h4>
              <div class="data-table-wrap"><table class="bj-table">
                <thead><tr><th>${bi("Planet", "గ్రహం")}</th><th>${bi("Tree Character", "వృక్ష స్వభావం")}</th></tr></thead>
                <tbody>${BJ_CH3_TREES.map(t => `<tr><td><strong>${bi(t.planet, t.planetTe)}</strong></td><td>${bi(t.traitEn, t.traitTe)}</td></tr>`).join("")}</tbody>
              </table></div>
            </div>
          </div>`;
      } else if (tab === "ch4") {
        body.innerHTML = `
          <div class="panel-box">
            <h4 style="color:var(--gold-bright);margin-bottom:0.65rem;">${bi("10-Month Gestation Timeline & Planetary Rulers (Ch. IV, Sl. 16)", "దశమాస గర్భస్థ శిశువు & మాసాధిపతులు (అధ్యా. 4, శ్లో. 16)")}</h4>
            <div class="cards-grid">${BJ_GESTATION_MONTHS.map(g => `
              <div class="info-card">
                <span class="tag gold">${bi("Month " + g.m, g.m + "వ మాసం")}</span>
                <div style="font-weight:700;color:#fff;">${bi(g.lord, g.lordTe)}</div>
                <div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.25rem;">${bi(g.stageEn, g.stageTe)}</div>
              </div>`).join("")}</div>
            <div class="reader-guide" style="margin-top:1rem;">
              <strong>${bi("Sex, Twins & Kleeba Rules (Sl. 11–14):", "లింగ నిర్ణయం & కవలలు:")}</strong>
              ${bi("Odd signs & odd Navāṁśas (Lagna, Sun, Jupiter, Moon) → Male; Even → Female. Dual-sign Navāṁśas aspected by Mercury → Twins. 6 Kleeba (eunuch/fruitless) yogas occur in absence of male/female yogas. Delivery time (Sl. 21) is found from Moon's Dvādaśāṁśa sign and fraction.", "బేసి రాశి-నవాంశలలో రవి, గురు, చంద్ర, లగ్నాలు బలంగా ఉంటే పురుష సంతానం; సమ రాశి-నవాంశలలో స్త్రీ సంతానం.")}
            </div>
          </div>`;
      } else {
        body.innerHTML = `
          <div class="split-2">
            <div class="panel-box">
              <h4 style="color:var(--gold-bright);margin-bottom:0.65rem;">${bi("Delivery Chamber & Couch Diagram (Ch. V, Sl. 21)", "సూతికాగృహ మంచము & తల్లి స్థాన చిత్రం")}</h4>
              <svg viewBox="0 0 300 240" style="width:100%;max-width:300px;margin:0 auto;display:block;background:#080c16;border-radius:10px;border:1px solid rgba(255,255,255,0.1);">
                <rect x="65" y="45" width="170" height="150" rx="10" fill="rgba(245,185,66,0.12)" stroke="#f5b942" stroke-width="2"/>
                <circle cx="65" cy="45" r="16" fill="#0f172a" stroke="#38bdf8"/><text x="65" y="49" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="700">12th</text>
                <circle cx="235" cy="45" r="16" fill="#0f172a" stroke="#38bdf8"/><text x="235" y="49" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="700">3rd</text>
                <circle cx="65" cy="195" r="16" fill="#0f172a" stroke="#38bdf8"/><text x="65" y="199" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="700">9th</text>
                <circle cx="235" cy="195" r="16" fill="#0f172a" stroke="#38bdf8"/><text x="235" y="199" text-anchor="middle" fill="#67e8f9" font-size="11" font-weight="700">6th</text>
                <text x="150" y="75" text-anchor="middle" fill="#ffd700" font-size="11" font-weight="700">Head & Face (1, 2)</text>
                <text x="150" y="115" text-anchor="middle" fill="#e2e8f0" font-size="10.5">Left (10,11) | Right (4,5)</text>
                <text x="150" y="165" text-anchor="middle" fill="#ffd700" font-size="11" font-weight="700">Legs (7, 8)</text>
              </svg>
            </div>
            <div class="panel-box">
              <div class="cards-grid">${BJ_CH5_HIGHLIGHTS.map(h => `
                <div class="info-card">
                  <span class="tag gold">Sl. ${h.sloka}</span>
                  <div style="font-weight:700;color:#fff;">${bi(h.titleEn, h.titleTe)}</div>
                  <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi(h.descEn, h.descTe)}</div>
                </div>`).join("")}</div>
            </div>
          </div>`;
      }
    }

    tabs.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render(btn.dataset.tab);
      });
    });
    render("ch3");
  }

  // =========================================================================
  // 4. Section 4: Ch. VI Bālāriṣṭa
  // =========================================================================
  function initSection4() {
    const grid = document.getElementById("ch6Grid");
    const filterBar = document.getElementById("ch6Filter");

    function render(f) {
      const items = f === "all" ? BJ_CH6_BALARISHTA : BJ_CH6_BALARISHTA.filter(x => x.type === f);
      grid.innerHTML = items.map(x => `
        <div class="info-card">
          <span class="tag ${x.type === "bhanga" ? "emerald" : (x.type === "arishta" ? "rose" : "gold")}">Sl. ${x.sl}</span>
          <div style="font-size:0.88rem;margin-top:0.3rem;">${bi(x.en, x.te)}</div>
        </div>`).join("");
    }
    filterBar.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        filterBar.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.f);
      });
    });
    render("all");
  }

  // =========================================================================
  // 5. Section 5: Ch. VII Āyurdāya Calculator
  // =========================================================================
  function initSection5() {
    const inputsDiv = document.getElementById("ayurInputs");
    const keys = ["lagna", "sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
    const defaults120 = {
      lagna: 359.98, sun: 9.98, moon: 32.98, mars: 297.98,
      mercury: 30.42, jupiter: 94.98, venus: 356.98, saturn: 199.98
    };

    keys.forEach(k => {
      const fg = document.createElement("div");
      fg.className = "field-group";
      fg.innerHTML = `<label>${k.toUpperCase()} (0°–360°)</label><input type="number" id="ay_${k}" step="0.01" min="0" max="359.99" value="${defaults120[k]}">`;
      inputsDiv.appendChild(fg);
    });

    function compute() {
      const vals = {};
      keys.forEach(k => { vals[k] = parseFloat(document.getElementById(`ay_${k}`).value) || 0; });
      const lagnaSign = Math.floor(vals.lagna / 30);
      let totalPinda = 0;
      const rows = [];

      // Lagna Ayus: rising Navamsas (or Rasis from Mesha; in Sl. 6, 11s 29°59' -> 9y)
      const lagnaDegInSign = vals.lagna % 30;
      const lagnaNavs = (vals.lagna / (30 / 9)) % 12; // Rasis/Navamsas
      const lagnaYrs = lagnaNavs === 0 ? 0 : (lagnaDegInSign / (30 / 9));
      totalPinda += lagnaYrs;

      Object.entries(BJ_AYURDAYA_DATA.pindaMax).forEach(([k, info]) => {
        const lon = vals[k];
        // Distance from exaltation point (0 to 180 -> max to max/2)
        let diff = Math.abs(lon - info.exaltDeg);
        if (diff > 180) diff = 360 - diff;
        const raw = info.max * (1 - diff / 360);

        const pSign = Math.floor(lon / 30);
        const house = ((pSign - lagnaSign + 12) % 12) + 1;
        const isMalefic = ["sun", "mars", "saturn"].includes(k);
        let chakraRed = 0;
        if (house >= 7 && house <= 12) {
          const idx = 12 - house; // 12->0, 11->1 ... 7->5
          const frac = 1 / (idx + 1);
          chakraRed = isMalefic ? frac : frac / 2;
        }
        const net = raw * (1 - chakraRed);
        totalPinda += net;
        rows.push(`<tr><td><strong>${bi(info.name, info.te)}</strong></td><td class="mono">${lon.toFixed(2)}°</td><td class="mono">${house}</td><td class="mono">${raw.toFixed(2)} y</td><td class="mono">${(chakraRed * 100).toFixed(1)}%</td><td class="mono"><strong>${net.toFixed(2)} y</strong></td></tr>`);
      });

      document.getElementById("ayurResult").innerHTML = `
        <h4 style="color:var(--gold-bright);margin-bottom:0.65rem;">${bi("Computed Piṇḍāyurdāya Total: ", "లెక్కించిన పిండాయుర్దాయం: ")} <span class="mono" style="color:var(--emerald-accent);">${totalPinda.toFixed(2)} Years</span></h4>
        <div class="data-table-wrap"><table class="bj-table">
          <thead><tr><th>${bi("Planet", "గ్రహం")}</th><th>${bi("Longitude", "స్ఫుటం")}</th><th>${bi("House", "భావం")}</th><th>${bi("Raw Āyus", "మూల ఆయుస్సు")}</th><th>${bi("Cakrapāta Loss", "చక్రపాత హరణ")}</th><th>${bi("Net Āyus", "నికర ఆయుస్సు")}</th></tr></thead>
          <tbody>${rows.join("")}<tr><td><strong>Lagna</strong></td><td class="mono">${vals.lagna.toFixed(2)}°</td><td class="mono">1</td><td class="mono">${lagnaYrs.toFixed(2)} y</td><td class="mono">0%</td><td class="mono"><strong>${lagnaYrs.toFixed(2)} y</strong></td></tr></tbody>
        </table></div>`;
    }

    document.getElementById("btnLoad120").addEventListener("click", () => {
      keys.forEach(k => { document.getElementById(`ay_${k}`).value = defaults120[k]; });
      compute();
    });
    keys.forEach(k => document.getElementById(`ay_${k}`).addEventListener("input", compute));
    compute();

    document.getElementById("paramayusBox").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Paramāyus (Maximum Lifespan — Sl. 5)", "పరమాయుస్సు (శ్లో. 5)")}</h4>
      <div class="data-table-wrap"><table class="bj-table">
        ${BJ_AYURDAYA_DATA.paramayus.map(x => `<tr><td>${bi(x.speciesEn, x.speciesTe)}</td><td class="mono">${bi(x.years, x.te)}</td></tr>`).join("")}
      </table></div>`;

    document.getElementById("chakrapataBox").innerHTML = `
      <h4 style="color:var(--cyan-bright);margin-bottom:0.6rem;">${bi("Cakrapāta Haraṇa Table (Sl. 3)", "చక్రపాత హరణ పట్టిక (శ్లో. 3)")}</h4>
      <div class="data-table-wrap"><table class="bj-table">
        <thead><tr><th>${bi("House", "భావం")}</th><th>${bi("Malefic Loss", "పాపగ్రహ హరణ")}</th><th>${bi("Benefic Loss", "శుభగ్రహ హరణ")}</th></tr></thead>
        <tbody>${BJ_AYURDAYA_DATA.chakrapata.map(c => `<tr><td class="mono">${c.house}th</td><td class="mono">${c.mal}</td><td class="mono">${c.ben}</td></tr>`).join("")}</tbody>
      </table></div>`;
  }

  // =========================================================================
  // 6. Section 6: Ch. VIII Daśās & Antardaśās
  // =========================================================================
  function initSection6() {
    const ids = ["dasaYears", "dasaSame", "dasaTrine", "dasaQuad", "dasa7th"];
    function calcDasa() {
      const yrs = parseFloat(document.getElementById("dasaYears").value) || 0;
      const nSame = parseInt(document.getElementById("dasaSame").value, 10) || 0;
      const nTri = parseInt(document.getElementById("dasaTrine").value, 10) || 0;
      const nQuad = parseInt(document.getElementById("dasaQuad").value, 10) || 0;
      const n7th = parseInt(document.getElementById("dasa7th").value, 10) || 0;

      // Common denominator 84 (LCM of 1, 2, 3, 4, 7)
      const numLord = 84;
      const numSame = 42, numTri = 28, numQuad = 21, num7th = 12;
      const totalNum = numLord + nSame * numSame + nTri * numTri + nQuad * numQuad + n7th * num7th;

      const fmt = (n) => `${((n / totalNum) * yrs).toFixed(3)} y (${Math.round((n / totalNum) * yrs * 12 * 10) / 10} m)`;
      document.getElementById("dasaCalcOut").innerHTML = `
        <div class="data-table-wrap"><table class="bj-table">
          <tr><th>${bi("Daśā Lord (1/1)", "దశానాథుడు")}</th><td class="mono">84 / ${totalNum}</td><td class="mono"><strong>${fmt(numLord)}</strong></td></tr>
          <tr><th>${bi("Same House × " + nSame + " (1/2)", "సహస్థితి (1/2)")}</th><td class="mono">${42 * nSame} / ${totalNum}</td><td class="mono">${nSame ? fmt(42) + " each" : "—"}</td></tr>
          <tr><th>${bi("5th/9th × " + nTri + " (1/3)", "5/9 స్థానాలు (1/3)")}</th><td class="mono">${28 * nTri} / ${totalNum}</td><td class="mono">${nTri ? fmt(28) + " each" : "—"}</td></tr>
          <tr><th>${bi("4th/8th × " + nQuad + " (1/4)", "4/8 స్థానాలు (1/4)")}</th><td class="mono">${21 * nQuad} / ${totalNum}</td><td class="mono">${nQuad ? fmt(21) + " each" : "—"}</td></tr>
          <tr><th>${bi("7th House × " + n7th + " (1/7)", "7వ స్థానం (1/7)")}</th><td class="mono">${12 * n7th} / ${totalNum}</td><td class="mono">${n7th ? fmt(12) + " each" : "—"}</td></tr>
        </table></div>`;
    }
    ids.forEach(id => document.getElementById(id).addEventListener("input", calcDasa));
    calcDasa();

    document.getElementById("dasaQualitiesBox").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("8-Fold Daśā Quality & Naisargika Years (Sl. 5–9)", "అష్టవిధ దశా ఫలాలు & నైసర్గిక దశలు")}</h4>
      <div style="margin-bottom:0.65rem;font-size:0.84rem;">
        <strong>${bi("Naisargika (120 yrs):", "నైసర్గిక దశా వర్షాలు:")}</strong>
        ${BJ_NAISARGIKA_DASAS.map(d => `${bi(d.planet, d.te)} <span class="mono">${d.years}y</span>`).join(" • ")}
      </div>
      <div class="cards-grid">${BJ_DASA_QUALITIES.map(q => `<div class="info-card"><strong>${q.name}</strong><div style="font-size:0.83rem;color:var(--text-muted);">${bi(q.en, q.te)}</div></div>`).join("")}</div>`;
  }

  // =========================================================================
  // 7. Section 7: Ch. IX Aṣṭakavarga 336-Bindu Matrix & Canvas
  // =========================================================================
  function initSection7() {
    const inputsDiv = document.getElementById("avInputs");
    const contributors = ["lagna", "sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
    const defaultSigns = { lagna: 1, sun: 1, moon: 2, mars: 10, mercury: 6, jupiter: 4, venus: 12, saturn: 7 };
    let activeAvPlanet = "sun";

    contributors.forEach(c => {
      const fg = document.createElement("div");
      fg.className = "field-group";
      const opts = BJ_RASIS.map(r => `<option value="${r.id}" ${r.id === defaultSigns[c] ? "selected" : ""}>${r.id}. ${r.en.split(" ")[0]} (${r.te})</option>`).join("");
      fg.innerHTML = `<label>${c.toUpperCase()}</label><select id="av_${c}">${opts}</select>`;
      inputsDiv.appendChild(fg);
    });

    const tabs = document.getElementById("avPlanetTabs");
    Object.entries(BJ_ASHTAKAVARGA_RULES).forEach(([k, info]) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (k === activeAvPlanet ? " active" : "");
      btn.innerHTML = `${bi(info.nameEn, info.nameTe)} <span class="mono">(${info.expectedTotal})</span>`;
      btn.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeAvPlanet = k;
        updateAV();
      });
      tabs.appendChild(btn);
    });

    function computeAllAV() {
      const pos = {};
      contributors.forEach(c => { pos[c] = parseInt(document.getElementById(`av_${c}`).value, 10); });
      const bhinna = {};
      const sarva = new Array(12).fill(0);

      Object.entries(BJ_ASHTAKAVARGA_RULES).forEach(([planetKey, rule]) => {
        const counts = new Array(12).fill(0);
        Object.entries(rule.from).forEach(([src, houses]) => {
          const base = pos[src];
          houses.forEach(h => {
            const targetIdx = (base - 1 + (h - 1)) % 12;
            counts[targetIdx]++;
            sarva[targetIdx]++;
          });
        });
        bhinna[planetKey] = counts;
      });
      return { bhinna, sarva };
    }

    function updateAV() {
      const { bhinna, sarva } = computeAllAV();
      const counts = bhinna[activeAvPlanet];
      const rule = BJ_ASHTAKAVARGA_RULES[activeAvPlanet];
      const grid = document.getElementById("avSouthChart");

      let html = "";
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
          if (r >= 1 && r <= 2 && c >= 1 && c <= 2) {
            if (r === 1 && c === 1) {
              html += `<div class="sc-center">
                <strong style="color:var(--gold-bright);">${bi(rule.nameEn, rule.nameTe)}</strong>
                <div class="mono" style="font-size:1.2rem;color:#fff;margin:0.25rem 0;">${counts.reduce((a, b) => a + b, 0)} Bindus</div>
                <div style="font-size:0.78rem;color:var(--text-muted);">${bi(">4 Benefic • <4 Malefic", ">4 శుభం • <4 అశుభం")}</div>
              </div>`;
            }
            continue;
          }
          const signId = Object.keys(SOUTH_GRID_POS).find(k => SOUTH_GRID_POS[k][0] === r && SOUTH_GRID_POS[k][1] === c);
          const sIdx = parseInt(signId, 10) - 1;
          const val = counts[sIdx];
          const cls = val > 4 ? "benefic-house" : (val < 4 ? "malefic-house" : "");
          html += `<div class="sc-cell ${cls}">
            <div style="color:var(--text-muted);font-size:0.72rem;">${BJ_RASIS[sIdx].symbol} ${BJ_RASIS[sIdx].en.split(" ")[0]}</div>
            <div class="mono" style="font-size:1.15rem;font-weight:700;color:#fff;text-align:center;">${val}</div>
            <div style="font-size:0.68rem;color:var(--cyan-bright);text-align:right;">Σ ${sarva[sIdx]}</div>
          </div>`;
        }
      }
      grid.innerHTML = html;
      document.getElementById("avNoteBox").innerHTML = rule.noteEn ? bi(rule.noteEn, rule.noteTe) : "";

      // Draw Sarvashtakavarga Canvas
      const canvas = document.getElementById("avCanvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxVal = Math.max(40, ...sarva);
      const barW = (canvas.width - 40) / 12;
      sarva.forEach((v, i) => {
        const h = ((v / maxVal) * (canvas.height - 55));
        const x = 20 + i * barW + 4;
        const y = canvas.height - 30 - h;
        ctx.fillStyle = v >= 28 ? "#10b981" : "#f5b942";
        ctx.fillRect(x, y, barW - 8, h);
        ctx.fillStyle = "#fff";
        ctx.font = "bold 11px JetBrains Mono, monospace";
        ctx.textAlign = "center";
        ctx.fillText(v, x + (barW - 8) / 2, y - 5);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "11px sans-serif";
        ctx.fillText(BJ_RASIS[i].symbol, x + (barW - 8) / 2, canvas.height - 12);
      });
    }

    contributors.forEach(c => document.getElementById(`av_${c}`).addEventListener("change", updateAV));
    updateAV();
  }

  // =========================================================================
  // 8. Section 8: Ch. X & XI
  // =========================================================================
  function initSection8() {
    document.getElementById("karmaBox").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Karmajīva: Source of Wealth & Avocation (Ch. X, Sl. 1–4)", "కర్మజీవ — ధనమూలం & వృత్తి (అధ్యా. 10)")}</h4>
      <div class="data-table-wrap"><table class="bj-table">
        <thead><tr><th>${bi("Planet", "గ్రహం")}</th><th>${bi("10th Occupant Source", "10వ స్థాన ధనమూలం")}</th><th>${bi("Navāṁśa Lord of 10th Lord", "దశమాధిపతి నవాంశ వృత్తి")}</th></tr></thead>
        <tbody>${BJ_KARMAJIVA.map(k => `<tr><td><strong>${bi(k.planet, k.te)}</strong></td><td>${bi(k.src10En, k.src10Te)}</td><td>${bi(k.navEn, k.navTe)}</td></tr>`).join("")}</tbody>
      </table></div>`;

    document.getElementById("rajaBox").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Varāhamihira's Rājayogas (Ch. XI, Sl. 13–20)", "వరాహమిహిరుని రాజయోగాలు (అధ్యా. 11)")}</h4>
      <div style="display:flex;flex-direction:column;gap:0.65rem;max-height:420px;overflow-y:auto;">
        ${BJ_RAJAYOGAS_VM.map(r => `<div class="info-card"><span class="tag gold">Sl. ${r.sl}</span> <strong>${bi(r.titleEn, r.titleTe)}</strong><div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi(r.descEn, r.descTe)}</div></div>`).join("")}
      </div>`;
  }

  // =========================================================================
  // 9. Section 9: Ch. XII — 32 Nābhasa Yogas Visualizer
  // =========================================================================
  function initSection9() {
    const catTabs = document.getElementById("nabhasaCatTabs");
    const listDiv = document.getElementById("nabhasaList");
    const chartDiv = document.getElementById("nabhasaChart");
    const detailDiv = document.getElementById("nabhasaDetail");
    let activeId = BJ_NABHASA_YOGAS[0].id;
    let activeCat = "all";

    function renderList() {
      const items = activeCat === "all" ? BJ_NABHASA_YOGAS : BJ_NABHASA_YOGAS.filter(y => y.cat === activeCat);
      listDiv.innerHTML = items.map(y => `
        <button class="tab-btn ${y.id === activeId ? "active" : ""}" style="text-align:left;width:100%;" data-yid="${y.id}">
          <span class="tag">${bi(y.cat, y.catTe)}</span> <strong>${y.name}</strong>
        </button>`).join("");
      listDiv.querySelectorAll("button").forEach(b => {
        b.addEventListener("click", () => {
          activeId = b.dataset.yid;
          renderList();
          renderChart();
        });
      });
    }

    function renderChart() {
      const y = BJ_NABHASA_YOGAS.find(x => x.id === activeId);
      let html = "";
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
          if (r >= 1 && r <= 2 && c >= 1 && c <= 2) {
            if (r === 1 && c === 1) {
              html += `<div class="sc-center"><strong style="color:var(--gold-bright);">${y.name}</strong><span class="tag" style="margin-top:0.35rem;">${bi(y.cat, y.catTe)}</span></div>`;
            }
            continue;
          }
          const hNum = parseInt(Object.keys(SOUTH_GRID_POS).find(k => SOUTH_GRID_POS[k][0] === r && SOUTH_GRID_POS[k][1] === c), 10);
          const isLit = y.houses.includes(hNum);
          html += `<div class="sc-cell ${isLit ? "active-house" : ""}">
            <div style="font-size:0.75rem;color:var(--text-muted);">H${hNum}</div>
            <div style="text-align:center;font-size:1.1rem;">${isLit ? "🪐" : ""}</div>
          </div>`;
        }
      }
      chartDiv.innerHTML = html;
      detailDiv.innerHTML = `
        <div class="info-card">
          <div><strong>${bi("Definition:", "లక్షణం:")}</strong> ${bi(y.defEn, y.defTe)}</div>
          <div style="margin-top:0.4rem;"><strong>${bi("Effect:", "ఫలితం:")}</strong> ${bi(y.effEn, y.effTe)}</div>
        </div>`;
    }

    catTabs.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        catTabs.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        activeCat = b.dataset.cat;
        renderList();
      });
    });

    renderList();
    renderChart();
  }

  // =========================================================================
  // 10. Section 10: Ch. XIII–XV
  // =========================================================================
  function initSection10() {
    const tabs = document.getElementById("ch1315Tabs");
    const body = document.getElementById("ch1315Body");

    function render(t) {
      if (t === "ch13") {
        body.innerHTML = `<div class="cards-grid">${BJ_CHANDRA_YOGAS.map(c => `<div class="info-card"><span class="tag gold">Sl. ${c.sl}</span> <strong>${c.name}</strong><div style="font-size:0.85rem;color:var(--text-muted);margin-top:0.3rem;">${bi(c.en, c.te)}</div></div>`).join("")}</div>`;
      } else if (t === "ch14") {
        const pIds = BJ_PLANETS.map(p => p.id);
        let tbl = `<div class="data-table-wrap"><table class="bj-table"><thead><tr><th>Planet Pair (Ch. XIV)</th><th>${bi("Combined Effect", "సంయోగ ఫలితం")}</th></tr></thead><tbody>`;
        for (let i = 0; i < pIds.length; i++) {
          for (let j = i + 1; j < pIds.length; j++) {
            const key = `${pIds[i]}-${pIds[j]}`;
            const val = BJ_DVIGRHA_PAIRS[key];
            if (val) tbl += `<tr><td><strong>${BJ_PLANETS[i].sym} ${BJ_PLANETS[i].en.split(" ")[0]} + ${BJ_PLANETS[j].sym} ${BJ_PLANETS[j].en.split(" ")[0]}</strong></td><td>${bi(val.en, val.te)}</td></tr>`;
          }
        }
        tbl += `</tbody></table></div>`;
        body.innerHTML = tbl;
      } else {
        body.innerHTML = `
          <div class="panel-box">
            <p style="margin-bottom:0.75rem;">${bi("When 4 or more strong planets occupy one sign, the strongest determines the ascetic order (Ch. XV, Sl. 1–4):", "ఒకే రాశిలో 4+ బలమైన గ్రహాలు ఉంటే, అత్యంత బలవంతుడైన గ్రహం సన్యాస మార్గాన్ని నిర్ణయిస్తుంది:")}</p>
            <div class="cards-grid">${BJ_PRAVRAJYA_ORDERS.map(o => `<div class="info-card"><strong>${bi(o.planet, o.planetTe)}</strong><div style="color:var(--gold-primary);margin-top:0.25rem;">${bi(o.orderEn, o.orderTe)}</div></div>`).join("")}</div>
          </div>`;
      }
    }

    tabs.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.t);
      });
    });
    render("ch13");
  }

  // =========================================================================
  // 11. Section 11: Ch. XVI–XVIII (27 Nakṣatras & Planets in 12 Signs)
  // =========================================================================
  function initSection11() {
    const tabs = document.getElementById("ch1618Tabs");
    const body = document.getElementById("ch1618Body");

    function render(t) {
      if (t === "nak") {
        body.innerHTML = `<div class="cards-grid">${BJ_NAKSHATRAS.map(n => `
          <div class="info-card">
            <span class="tag ${n.grade === "Good" ? "emerald" : (n.grade === "Bad" ? "rose" : "gold")}">#${n.id} • ${n.grade}</span>
            <div style="font-weight:700;color:#fff;">${n.en} <span class="lang-te" style="color:var(--gold-primary);">(${n.te})</span></div>
            <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi(n.enDesc, n.teDesc)}</div>
          </div>`).join("")}</div>`;
      } else {
        body.innerHTML = `
          <div class="control-grid">
            <div class="field-group"><label>${bi("Select Planet (Ch. XVII–XVIII)", "గ్రహాన్ని ఎంచుకోండి")}</label>
              <select id="pSignSel">
                <option value="moon">Moon (Ch. XVII)</option><option value="sun">Sun (Ch. XVIII)</option>
                <option value="mars">Mars (Ch. XVIII)</option><option value="mercury">Mercury (Ch. XVIII)</option>
                <option value="jupiter">Jupiter (Ch. XVIII)</option><option value="venus">Venus (Ch. XVIII)</option>
                <option value="saturn">Saturn (Ch. XVIII)</option>
              </select>
            </div>
          </div>
          <div id="pSignOut" class="cards-grid"></div>`;
        const sel = document.getElementById("pSignSel");
        const out = document.getElementById("pSignOut");
        function upd() {
          const arr = BJ_PLANETS_IN_SIGNS[sel.value];
          const arrTe = (typeof BJ_PLANETS_IN_SIGNS_TE !== "undefined" && BJ_PLANETS_IN_SIGNS_TE[sel.value]) || arr;
          out.innerHTML = arr.map((txt, i) => `<div class="info-card"><span class="tag gold">${BJ_RASIS[i].symbol} ${BJ_RASIS[i].en} (${BJ_RASIS[i].te})</span><div style="font-size:0.85rem;margin-top:0.3rem;">${bi(txt, arrTe[i])}</div></div>`).join("");
        }
        sel.addEventListener("change", upd);
        upd();
      }
    }

    tabs.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.t);
      });
    });
    render("nak");
  }

  // =========================================================================
  // 12. Section 12: Ch. XIX–XXI
  // =========================================================================
  function initSection12() {
    const tabs = document.getElementById("ch1921Tabs");
    const body = document.getElementById("ch1921Body");

    function render(t) {
      if (t === "ch19") {
        body.innerHTML = `
          <p style="font-size:0.86rem;color:var(--text-muted);margin-bottom:0.75rem;">${bi("Moon in each Sign aspected by Sun..Saturn (Ch. XIX, Sl. 1–3). Fullness is maximum in Vargottama, middling in own Navāṁśa, little in another's (Sl. 9).", "ద్వాదశ రాశులలో ఉన్న చంద్రునిపై రవి..శనుల దృష్టి ఫలితాలు (అధ్యా. 19).")}</p>
          <div class="data-table-wrap"><table class="bj-table">
            <thead><tr><th>Moon Sign</th><th>Sun</th><th>Mars</th><th>Mercury</th><th>Jupiter</th><th>Venus</th><th>Saturn</th></tr></thead>
            <tbody>${BJ_DRISHTI_MOON_SIGN.map(r => `<tr><td><strong>${r.rasi}</strong></td><td>${r.sun}</td><td>${r.mars}</td><td>${r.mercury}</td><td>${r.jupiter}</td><td>${r.venus}</td><td>${r.saturn}</td></tr>`).join("")}</tbody>
          </table></div>`;
      } else if (t === "ch20") {
        body.innerHTML = `
          <div class="control-grid">
            <div class="field-group"><label>${bi("Planet in 12 Bhāvas (Ch. XX)", "భావ గ్రహం")}</label>
              <select id="bhavaPSel">
                <option value="sun">Sun</option><option value="moon">Moon</option><option value="mars">Mars</option>
                <option value="mercury">Mercury</option><option value="jupiter">Jupiter</option><option value="venus">Venus</option><option value="saturn">Saturn</option>
              </select>
            </div>
          </div>
          <div id="bhavaPOut" class="cards-grid"></div>
          <div class="reader-guide" style="margin-top:1rem;"><strong>${bi("Satyācārya Rule (Sl. 10):", "సత్యాచార్య నియమం (శ్లో. 10):")}</strong> ${bi("Benefics promote a house and malefics harm it—REVERSED in the 6th, 8th, and 12th houses.", "శుభులు భావ వృద్ధిని, పాపులు భావ నాశనాన్ని చేస్తారు—కానీ 6, 8, 12 భావాలలో ఇది వ్యతిరేకమవుతుంది.")}</div>`;
        const sel = document.getElementById("bhavaPSel");
        const out = document.getElementById("bhavaPOut");
        function upd() {
          const arr = BJ_BHAVA_EFFECTS[sel.value];
          const arrTe = (typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE[sel.value]) || arr;
          out.innerHTML = arr.map((txt, i) => `<div class="info-card"><span class="tag gold">House ${i + 1} (${BJ_BHAVAS[i].set1.split(" ")[0]})</span><div style="font-size:0.85rem;margin-top:0.25rem;">${bi(txt, arrTe[i])}</div></div>`).join("");
        }
        sel.addEventListener("change", upd);
        upd();
      } else {
        body.innerHTML = `<div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Āśraya & Vargas Summary (Ch. XXI, Sl. 1–10)", "ఆశ్రయ & వర్గ ఫలిత సారాంశం (అధ్యా. 21)")}</h4>
          <ul style="padding-left:1.2rem;font-size:0.88rem;line-height:1.7;">
            <li>${bi("1–7 Planets in Own Houses: average dignity → family chief → respected → wealthy → happy → all comforts → king (Sl. 1).", "స్వక్షేత్రాలలో 1–7 గ్రహాలు: క్రమంగా కుటుంబ గౌరవం నుండి రాజపదవి వరకు.")}</li>
            <li>${bi("1–7 Planets in Inimical/Fall Signs: poor → comfortless → unintelligent → sickly → captivity → murder → crimes (Sl. 2).", "శత్రు/నీచ క్షేత్రాలలో 1–7 గ్రహాలు: దారిద్ర్యం, రోగం, బంధనము.")}</li>
            <li>${bi("Malefics in Solar Horā of odd signs & Benefics in Lunar Horā of even signs → bright, wealthy, happy (Sl. 4).", "విషమరాశి రవిహోరాలో పాపులు, సమరాశి చంద్రహోరాలో శుభులు అత్యంత శుభప్రదులు.")}</li>
            <li>${bi("Vargottama Rising Navāṁśa → head of the respective Navāṁśa class (Sl. 7).", "వర్గోత్తమ లగ్న నవాంశ → ఆయా వర్గాలలో శ్రేష్ఠుడు.")}</li>
          </ul>
        </div>`;
      }
    }

    tabs.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.t);
      });
    });
    render("ch19");
  }

  // =========================================================================
  // 13. Section 13: Ch. XXII–XXIV
  // =========================================================================
  function initSection13() {
    const tabs = document.getElementById("ch2224Tabs");
    const body = document.getElementById("ch2224Body");

    function render(t) {
      if (t === "ch24") {
        body.innerHTML = `
          <p style="font-size:0.86rem;color:var(--text-muted);margin-bottom:0.75rem;">${bi("Strījātaka (Ch. XXIV, Sl. 1–16): Character of a female varies jointly with the Rāśi and Triṁśāṁśa of stronger of Lagna or Moon (Sl. 3–6).", "స్త్రీజాతకం (అధ్యా. 24): లగ్న లేదా చంద్రులలో బలమైన దాని రాశి మరియు త్రింశాంశ ఆధారంగా ఫలితాలు.")}</p>
          <div class="data-table-wrap"><table class="bj-table">
            <thead><tr><th>Rāśi Lord</th><th>Mars Triṁśāṁśa</th><th>Saturn Triṁśāṁśa</th><th>Jupiter Triṁśāṁśa</th><th>Mercury Triṁśāṁśa</th><th>Venus Triṁśāṁśa</th></tr></thead>
            <tbody>${BJ_STRI_TRIMSAMSA.map(r => `<tr><td><strong>${bi(r.rasiLord, r.te)}</strong></td><td>${r.mars}</td><td>${r.saturn}</td><td>${r.jupiter}</td><td>${r.mercury}</td><td>${r.venus}</td></tr>`).join("")}</tbody>
          </table></div>`;
      } else if (t === "ch23") {
        body.innerHTML = `<div class="cards-grid">${BJ_ANISHTA_YOGAS.map(a => `<div class="info-card"><span class="tag rose">Sl. ${a.sl}</span> <strong>${bi(a.cat, a.catTe)}</strong><div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.3rem;">${bi(a.en, a.te)}</div></div>`).join("")}</div>`;
      } else {
        body.innerHTML = `<div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Prakīrṇa & Anyonyakārakas (Ch. XXII, Sl. 1–6)", "ప్రకీర్ణాధ్యాయం (అధ్యా. 22)")}</h4>
          <ul style="padding-left:1.2rem;font-size:0.88rem;line-height:1.7;">
            <li>${bi("Planets in own, exaltation, or Mūlatrikoṇa signs in mutual Kendras are Anyonyakārakas (mutual workers); planet in 10th acts powerfully for the other (Sl. 1–3).", "స్వ/ఉచ్ఛ/మూలత్రికోణాలలో పరస్పర కేంద్రాలలో ఉన్న గ్రహాలు అన్యోన్యకారకులవుతారు.")}</li>
            <li>${bi("Jupiter, Moon-lord, and Lagna-lord in Kendras → happy middle life (Sl. 5).", "గురువు, రాశ్యాధిపతి, లగ్నాధిపతి కేంద్రాలలో ఉంటే మధ్య వయసు సుఖమయం.")}</li>
            <li>${bi("Sign maturity: Śīrṣodaya = beginning; Ubhayodaya = middle; Pṛṣṭhodaya = end. Degree maturity: Sun/Mars = start, Jup/Ven = middle, Sat/Moon = end, Merc = always (Sl. 5–6).", "శీర్షోదయ రాశులు ఆదిలో, ఉభయోదయ మధ్యలో, పృష్ఠోదయ అంత్యంలో ఫలిస్తాయి.")}</li>
          </ul>
        </div>`;
      }
    }

    tabs.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        tabs.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.t);
      });
    });
    render("ch24");
  }

  // =========================================================================
  // 14. Section 14: Ch. XXV Niryāṇa & Ch. XXVI Naṣṭajātaka
  // =========================================================================
  function initSection14() {
    document.getElementById("ch25Box").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Niryāṇa: Death, 22nd Drekkaṇa & Gati (Ch. XXV, Sl. 1–15)", "నిర్యాణాధ్యాయం — మరణం & పునర్జన్మ గతి (అధ్యా. 25)")}</h4>
      <ul style="padding-left:1.1rem;font-size:0.86rem;line-height:1.65;">
        <li><strong>${bi("8th House Place:", "మరణ స్థానం:")}</strong> ${bi("Movable = foreign; Fixed = own house; Dual = on the road (Sl. 1).", "చర = విదేశం; స్థిర = స్వగృహం; ద్విస్వభావ = మార్గమధ్యం.")}</li>
        <li><strong>${bi("22nd Drekkaṇa (Body Transformation, Sl. 13):", "22వ ద్రేక్కాణం (శరీర పరిణామం):")}</strong> ${bi("Fiery = cremated; Watery = water; Mixed = sun & wind; Vyāla (Serpent) = beasts & birds.", "అగ్ని = దహనం; జల = నీరు; మిశ్ర = ఎండ-గాలి; సర్ప = పశుపక్ష్యాదులు.")}</li>
        <li><strong>${bi("Past Birth (Sl. 14):", "పూర్వజన్మ లోకం:")}</strong> ${bi("Stronger of Sun/Moon's Drekkaṇa lord: Jupiter = Devaloka, Moon/Venus = Pitṛloka, Sun/Mars = Martyaloka, Saturn/Mercury = Narakaloka.", "గురు = దేవలోకం; చంద్ర/శుక్ర = పితృలోకం; రవి/కుజ = మర్త్యలోకం; శని/బుధ = నరకలోకం.")}</li>
        <li><strong>${bi("Mokṣa (Sl. 15):", "మోక్ష యోగం:")}</strong> ${bi("Exalted Jupiter in 6, 8, or Kendra; OR Pisces rising with benefic Navāṁśa occupied by Jupiter while all other planets are weak.", "6, 8 లేదా కేంద్రంలో ఉచ్ఛ గురువు; లేదా మీన లగ్న శుభనవాంశలో గురువు ఉండి ఇతర గ్రహాలు బలహీనమైతే మోక్షం.")}</li>
      </ul>`;

    const dirSel = document.getElementById("njDir");
    BJ_NASHTA_DIRS.forEach(d => {
      dirSel.add(new Option(`${d.dir} (${d.te}) — ×${d.val}`, d.val));
    });

    const qSignSel = document.getElementById("njQuerySign");
    if (qSignSel) {
      BJ_RASIS.forEach((r, idx) => qSignSel.add(new Option(`${r.symbol} ${r.en} (${r.te})`, idx)));
    }

    function countMatras(name) {
      const s = (name || "").trim().toLowerCase();
      if (!s) return null;
      // Count Telugu vowels/matras + Latin/IAST vowel clusters (short=1, long/diphthong=2)
      let total = 0;
      const teLong = /[ఆఈఊఋౠఏఐఓఔాీూౄేైోౌంః]/g;
      const teShort = /[అఇఉఎఒిుెొ]/g;
      const teMatchesLong = s.match(teLong);
      const teMatchesShort = s.match(teShort);
      if (teMatchesLong || teMatchesShort) {
        total += (teMatchesLong ? teMatchesLong.length * 2 : 0) + (teMatchesShort ? teMatchesShort.length : 0);
      }
      const latinOnly = s.replace(/[^\x00-\x7Fāīūṛēō]/g, "");
      const vClusters = latinOnly.match(/(?:aa|ee|oo|ai|au|ā|ī|ū|ē|ō|[aeiou])/g);
      if (vClusters) {
        vClusters.forEach(v => {
          total += /^(aa|ee|oo|ai|au|ā|ī|ū|ē|ō)$/.test(v) ? 2 : 1;
        });
      }
      return Math.max(1, total || 1);
    }

    const nameIn = document.getElementById("njName");
    if (nameIn) {
      nameIn.addEventListener("input", () => {
        const m = countMatras(nameIn.value);
        if (m !== null) {
          document.getElementById("njMatras").value = m;
          calcNJ();
        }
      });
    }

    const btnNjNow = document.getElementById("btnNjNow");
    if (btnNjNow && typeof BJ_EPHEMERIS !== "undefined") {
      btnNjNow.addEventListener("click", () => {
        const now = new Date();
        const lat = parseFloat(document.getElementById("pbLat")?.value) || 17.39;
        const lon = parseFloat(document.getElementById("pbLon")?.value) || 78.49;
        const tz = parseFloat(document.getElementById("pbTz")?.value) || 5.5;
        const chart = BJ_EPHEMERIS.computeChart({
          year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate(),
          hour: now.getHours(), minute: now.getMinutes(), tzOffset: tz, lat, lon
        });
        const qSign = Math.floor(chart.lagna / 30) % 12;
        const qDeg = +(chart.lagna % 30).toFixed(2);
        if (qSignSel) qSignSel.value = qSign;
        const qDegEl = document.getElementById("njQueryDeg");
        if (qDegEl) qDegEl.value = qDeg;
        calcNJ();
      });
    }

    function calcNJ() {
      const dirVal = parseInt(dirSel.value, 10);
      const persons = parseInt(document.getElementById("njPersons").value, 10) || 0;
      const matras = parseInt(document.getElementById("njMatras").value, 10) || 1;
      const shadow = parseInt(document.getElementById("njShadow").value, 10) || 0;
      const qSign = parseInt(qSignSel?.value || "0", 10);
      const qDeg = Math.min(29.99, Math.max(0, parseFloat(document.getElementById("njQueryDeg")?.value || "10")));

      // Sl. 1: Ayana from Lagna half (0-15 Uttarayana, 15-30 Dakshinayana)
      const isUttara = qDeg < 15;
      const ayanaEn = isUttara ? "Uttarāyaṇa (Jan–Jun, Northern Course)" : "Dakṣiṇāyana (Jul–Dec, Southern Course)";
      const ayanaTe = isUttara ? "ఉత్తరాయణం (జనవరి–జూన్)" : "దక్షిణాయణం (జూలై–డిసెంబర్)";

      // Sl. 2: Jupiter Sign (1st Drek=Lagna, 2nd=5th, 3rd=9th) & Birth Season from Drekkaṇa Lord (Ch. II-12)
      const drekIdx = Math.floor(qDeg / 10); // 0, 1, 2
      const jupSignIdx = (qSign + drekIdx * 4) % 12;
      const drekSignIdx = (qSign + drekIdx * 4) % 12;
      const drekLord = BJ_RASIS[drekSignIdx].lord;
      const rituMap = {
        "Sun": { en: "Grīṣma (Summer)", te: "గ్రీష్మ ఋతువు" },
        "Moon": { en: "Varṣā (Monsoon)", te: "వర్ష ఋతువు" },
        "Mars": { en: "Grīṣma (Summer)", te: "గ్రీష్మ ఋతువు" },
        "Mercury": { en: "Śarad (Autumn)", te: "శరద్ ఋతువు" },
        "Jupiter": { en: "Hemanta (Pre-Winter)", te: "హేమంత ఋతువు" },
        "Venus": { en: "Vasanta (Spring)", te: "వసంత ఋతువు" },
        "Saturn": { en: "Śiśira (Winter)", te: "శిశిర ఋతువు" }
      };
      const ritu = rituMap[drekLord] || rituMap["Sun"];

      // Count from Dhanishtha (#23, 0-indexed 22)
      const remDir = (dirVal * 15 + persons) % 27 || 27;
      const nakDir = BJ_NAKSHATRAS[(22 + remDir - 1) % 27];

      const remName = (matras * 2 + shadow) % 27 || 27;
      const nakName = BJ_NAKSHATRAS[(22 + remName - 1) % 27];

      document.getElementById("njResult").innerHTML = `
        <div class="cards-grid">
          <div class="info-card">
            <span class="tag emerald">${bi("Ayana, Jupiter &amp; Season (Sl. 1–2)", "అయనం, గురువు &amp; ఋతువు (శ్లో. 1–2)")}</span>
            <div style="font-size:0.86rem;margin-top:0.35rem;line-height:1.6;color:var(--text-muted);">
              <strong>${bi("Ayana:", "అయనం:")}</strong> <span style="color:#fff;">${bi(ayanaEn, ayanaTe)}</span><br>
              <strong>${bi("Birth Jupiter Sign:", "జన్మ గురు రాశి:")}</strong> ${BJ_RASIS[jupSignIdx].symbol} ${bi(BJ_RASIS[jupSignIdx].en, BJ_RASIS[jupSignIdx].te)}<br>
              <strong>${bi("Birth Season (Ṛtu):", "జన్మ ఋతువు:")}</strong> ${bi(ritu.en, ritu.te)} <span style="font-size:0.78rem;">(${drekIdx + 1} Drekkaṇa • ${drekLord})</span>
            </div>
          </div>
          <div class="info-card">
            <span class="tag purple">${bi("Janma Nakṣatra by Name (Sl. 15)", "పేరు మాత్రల ద్వారా నక్షత్రం (శ్లో. 15)")}</span>
            <div style="font-size:1rem;font-weight:700;color:#fff;margin-top:0.3rem;">${nakName.en} (${nakName.te})</div>
            <div class="mono" style="font-size:0.8rem;color:var(--cyan-bright);">(${matras}×2 + ${shadow}) mod 27 = ${remName} from Dhaniṣṭhā</div>
          </div>
          <div class="info-card">
            <span class="tag gold">${bi("Janma Nakṣatra by Direction (Sl. 16)", "దిక్కు ద్వారా నక్షత్రం (శ్లో. 16)")}</span>
            <div style="font-size:1rem;font-weight:700;color:#fff;margin-top:0.3rem;">${nakDir.en} (${nakDir.te})</div>
            <div class="mono" style="font-size:0.8rem;color:var(--cyan-bright);">(${dirVal}×15 + ${persons}) mod 27 = ${remDir} from Dhaniṣṭhā</div>
          </div>
        </div>`;
    }

    ["njDir", "njPersons", "njMatras", "njShadow", "njQuerySign", "njQueryDeg"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", calcNJ);
    });
    calcNJ();
  }

  // =========================================================================
  // 15. Section 15: Ch. XXVII 36-Drekkaṇa Gallery & Ch. XXVIII
  // =========================================================================
  function initSection15() {
    const filterBar = document.getElementById("drekFilter");
    const grid = document.getElementById("drekGrid");

    function render(tag) {
      const list = tag === "all" ? BJ_DREKKANAS_36 : BJ_DREKKANAS_36.filter(x => x.tags.includes(tag));
      grid.innerHTML = list.map(d => `
        <div class="info-card">
          <div style="margin-bottom:0.35rem;">
            <span class="tag gold">${d.rasi} #${d.d}</span>
            ${d.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div style="font-size:0.85rem;">${bi(d.en, d.te)}</div>
        </div>`).join("");
    }
    filterBar.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        filterBar.querySelectorAll(".tab-btn").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        render(b.dataset.t);
      });
    });
    render("all");

    document.getElementById("ch28Box").innerHTML = `
      <h4 style="color:var(--gold-bright);margin-bottom:0.5rem;">${bi("Chapter XXVIII: Upasaṁhāra — Varāhamihira's Lineage & Legacy", "అధ్యాయం 28: ఉపసంహారం — వరాహమిహిరుని వంశం & గ్రంథ క్రమం")}</h4>
      <p style="font-size:0.88rem;color:var(--text-muted);">
        ${bi("Varāhamihira, son of the Brāhmaṇa Ādityadāsa, educated by his father in the village of Kapittha (Kapitthaka), mastered Jyotiṣa through the blessings of the Sun and composed Bṛhat Jātaka (25 original Adhyāyas / 28 in later division), Yātrā (20 chapters), and Pañcasiddhāntikā while residing in Avanti (Ujjain).", "ఆదిత్యదాసుని పుత్రుడైన వరాహమిహిరుడు కపిత్థ గ్రామంలో సూర్యోపాసన ద్వారా జ్యోతిషాన్ని అభ్యసించి, అవంతి (ఉజ్జయిని)లో నివసిస్తూ బృహజ్జాతకం, యాత్ర మరియు పంచసిద్ధాంతికలను రచించారు.")}
      </p>`;
  }

  // =========================================================================
  // 16. Section 16: Mastery Quiz
  // =========================================================================
  function initQuiz() {
    const box = document.getElementById("quizBox");
    let score = 0, answered = 0;

    box.innerHTML = `<div id="quizScore" style="margin-bottom:1rem;font-weight:700;color:var(--gold-bright);">Score: 0 / ${BJ_QUIZ.length}</div>` +
      BJ_QUIZ.map((q, qi) => `
        <div class="panel-box" style="margin-bottom:1rem;" id="qcard_${qi}">
          <div style="font-weight:700;margin-bottom:0.65rem;">Q${qi + 1}. ${bi(q.qEn, q.qTe)}</div>
          ${q.opts.map((o, oi) => `<button class="quiz-opt" data-qi="${qi}" data-oi="${oi}">${o}</button>`).join("")}
          <div id="qexp_${qi}" style="font-size:0.84rem;margin-top:0.4rem;display:none;"></div>
        </div>`).join("");

    box.querySelectorAll(".quiz-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const qi = parseInt(btn.dataset.qi, 10);
        const oi = parseInt(btn.dataset.oi, 10);
        const card = document.getElementById(`qcard_${qi}`);
        if (card.dataset.done) return;
        card.dataset.done = "1";
        answered++;
        const q = BJ_QUIZ[qi];
        const allBtns = card.querySelectorAll(".quiz-opt");
        if (oi === q.ans) {
          btn.classList.add("correct");
          score++;
        } else {
          btn.classList.add("wrong");
          allBtns[q.ans].classList.add("correct");
        }
        const exp = document.getElementById(`qexp_${qi}`);
        exp.style.display = "block";
        exp.innerHTML = `<span style="color:var(--cyan-bright);">${bi(q.expEn, q.expTe)}</span>`;
        document.getElementById("quizScore").textContent = `Score: ${score} / ${BJ_QUIZ.length} (${answered} answered)`;
      });
    });
  }

  // =========================================================================
  // 0B. Personal Birth Chart & Bṛhat Jātaka Reading
  // =========================================================================
  function initPersonalSection() {
    const citySel = document.getElementById("pbCity");
    const placeSearch = document.getElementById("pbPlaceSearch");
    const placeDatalist = document.getElementById("pbPlaceDatalist");
    const latIn = document.getElementById("pbLat");
    const lonIn = document.getElementById("pbLon");
    const tzIn = document.getElementById("pbTz");
    const dateIn = document.getElementById("pbDate");
    const timeIn = document.getElementById("pbTime");
    const genderSel = document.getElementById("pbGender");
    const outDiv = document.getElementById("personalChartOut");
    if (!citySel || !outDiv) return;

    let lastChart = null;

    // Populate 130+ places grouped by region + datalist
    if (typeof BJ_PLACES !== "undefined" && BJ_PLACES.length) {
      const groups = {};
      BJ_PLACES.forEach((pl, idx) => {
        if (!groups[pl.grp]) groups[pl.grp] = [];
        groups[pl.grp].push({ pl, idx });
        if (placeDatalist) {
          const dOpt = document.createElement("option");
          dOpt.value = `${pl.name} (${pl.te})`;
          placeDatalist.appendChild(dOpt);
        }
      });
      Object.entries(groups).forEach(([grp, items]) => {
        const og = document.createElement("optgroup");
        og.label = grp;
        items.forEach(({ pl, idx }) => {
          const opt = document.createElement("option");
          opt.value = String(idx);
          opt.textContent = `${pl.name} (${pl.te}) — UTC${pl.tz >= 0 ? "+" : ""}${pl.tz}`;
          og.appendChild(opt);
        });
        citySel.appendChild(og);
      });
    }

    function applyPlace(pl) {
      if (!pl) return;
      latIn.value = pl.lat;
      lonIn.value = pl.lon;
      tzIn.value = pl.tz;
      generate();
    }

    citySel.addEventListener("change", () => {
      const pl = typeof BJ_PLACES !== "undefined" ? BJ_PLACES[parseInt(citySel.value, 10)] : null;
      applyPlace(pl);
    });

    if (placeSearch) {
      placeSearch.addEventListener("input", () => {
        const q = placeSearch.value.trim().toLowerCase();
        if (!q || typeof BJ_PLACES === "undefined") return;
        const idx = BJ_PLACES.findIndex(pl =>
          `${pl.name} (${pl.te})`.toLowerCase() === q || pl.name.toLowerCase() === q || pl.te === placeSearch.value.trim()
        );
        if (idx >= 0) {
          citySel.value = String(idx);
          applyPlace(BJ_PLACES[idx]);
        }
      });
    }

    function getVargaInfo(lonDeg) {
      const signIdx = Math.floor(lonDeg / 30) % 12; // 0..11
      const deg = lonDeg % 30;
      const rId = signIdx + 1;
      const navIdx = Math.floor(deg / (30 / 9));
      const navStarts = [1, 10, 7, 4];
      const navRasiId = ((navStarts[signIdx % 4] - 1 + navIdx) % 12) + 1;
      const mod = signIdx % 3;
      const isVargottama = (mod === 0 && navIdx === 0) || (mod === 1 && navIdx === 4) || (mod === 2 && navIdx === 8);
      const drekIdx = Math.floor(deg / 10); // 0,1,2
      const bands = rId % 2 === 1 ? BJ_TRIMSAMSA_ODD : BJ_TRIMSAMSA_EVEN;
      const tri = bands.find(b => deg >= b.start && deg < b.end) || bands[bands.length - 1];
      const nakIdx = Math.floor((lonDeg * 60) / 800) % 27;
      const pada = Math.floor(((lonDeg * 60) % 800) / 200) + 1;
      return { signIdx, rId, deg, navRasiId, isVargottama, drekIdx, tri, nakIdx, pada };
    }

    function generate() {
      const [year, month, day] = (dateIn.value || "1995-05-15").split("-").map(Number);
      const [hour, minute] = (timeIn.value || "08:30").split(":").map(Number);
      const chart = BJ_EPHEMERIS.computeChart({
        year, month, day, hour, minute,
        tzOffset: parseFloat(tzIn.value) || 0,
        lat: parseFloat(latIn.value) || 17.39,
        lon: parseFloat(lonIn.value) || 78.49
      });
      lastChart = chart;

      const printHdr = document.getElementById("printReportHeader");
      if (printHdr) {
        const gVal = document.getElementById("pbGender")?.value || "male";
        const gLabel = gVal === "female" ? "Female / స్త్రీ" : "Male / పురుషుడు";
        const searchVal = (document.getElementById("pbPlaceSearch")?.value || "").trim();
        const placeLabel = searchVal || (citySel?.options[citySel.selectedIndex]?.text || `${latIn.value}°, ${lonIn.value}°`);
        const tzVal = parseFloat(tzIn.value) || 0;
        const genDate = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
        printHdr.innerHTML = `
          <div class="print-meta-grid">
            <div><strong>${bi("Date &amp; Time:", "తేదీ &amp; సమయం:")}</strong> ${dateIn.value} • ${timeIn.value} (UTC${tzVal >= 0 ? "+" : ""}${tzVal})</div>
            <div><strong>${bi("Birth Place:", "జన్మ స్థలం:")}</strong> ${placeLabel}</div>
            <div><strong>${bi("Coordinates:", "అక్షాంశ-రేఖాంశాలు:")}</strong> ${parseFloat(latIn.value).toFixed(2)}°N, ${parseFloat(lonIn.value).toFixed(2)}°E</div>
            <div><strong>${bi("Gender:", "లింగం:")}</strong> ${gLabel} &nbsp;|&nbsp; <strong>${bi("Printed:", "ప్రింట్ తేదీ:")}</strong> ${genDate}</div>
          </div>`;
      }

      const bodies = [
        { k: "lagna", abbr: "Lg", en: "Lagna (Asc)", te: "లగ్నం" },
        { k: "sun", abbr: "Su", en: "Sun", te: "రవి" },
        { k: "moon", abbr: "Mo", en: "Moon", te: "చంద్రుడు" },
        { k: "mars", abbr: "Ma", en: "Mars", te: "కుజుడు" },
        { k: "mercury", abbr: "Me", en: "Mercury", te: "బుధుడు" },
        { k: "jupiter", abbr: "Ju", en: "Jupiter", te: "గురువు" },
        { k: "venus", abbr: "Ve", en: "Venus", te: "శుక్రుడు" },
        { k: "saturn", abbr: "Sa", en: "Saturn", te: "శని" }
      ];

      const info = {};
      const bySign = Array.from({ length: 12 }, () => []);
      const byNavSign = Array.from({ length: 12 }, () => []);
      bodies.forEach(b => {
        const v = getVargaInfo(chart[b.k]);
        info[b.k] = v;
        bySign[v.signIdx].push(`${b.abbr} ${v.deg.toFixed(1)}°`);
        byNavSign[v.navRasiId - 1].push(b.abbr);
      });

      const lagnaSign = info.lagna.signIdx;
      const navLagnaSign = info.lagna.navRasiId - 1;
      const houseOf = (k) => ((info[k].signIdx - lagnaSign + 12) % 12) + 1;

      function buildSouthChart(itemsBySign, lgIdx, titleEn, titleTe, subHtml) {
        let html = "";
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 4; c++) {
            if (r >= 1 && r <= 2 && c >= 1 && c <= 2) {
              if (r === 1 && c === 1) {
                html += `<div class="sc-center">
                  <strong style="color:var(--gold-bright);">${bi(titleEn, titleTe)}</strong>
                  ${subHtml}
                </div>`;
              }
              continue;
            }
            const signId = parseInt(Object.keys(SOUTH_GRID_POS).find(k => SOUTH_GRID_POS[k][0] === r && SOUTH_GRID_POS[k][1] === c), 10);
            const sIdx = signId - 1;
            const isLg = sIdx === lgIdx;
            html += `<div class="sc-cell ${isLg ? "active-house" : ""}">
              <div style="font-size:0.7rem;color:var(--text-muted);">${BJ_RASIS[sIdx].symbol} ${bi(BJ_RASIS[sIdx].en.split(" ")[0], BJ_RASIS[sIdx].te)}</div>
              <div class="mono" style="font-size:0.74rem;color:#fff;font-weight:600;line-height:1.35;">${itemsBySign[sIdx].join("<br>") || "—"}</div>
            </div>`;
          }
        }
        return `<div class="south-chart">${html}</div>`;
      }

      function buildNorthChart(itemsBySign, lgIdx, titleEn, titleTe) {
        // Standard North-Indian Diamond house centers (1..12 counter-clockwise) in 320x320 viewBox
        const houseCoords = [
          [160, 78],  // H1 (top center)
          [85, 36],   // H2 (top left)
          [38, 82],   // H3 (left upper)
          [82, 160],  // H4 (left center)
          [38, 238],  // H5 (left lower)
          [85, 284],  // H6 (bottom left)
          [160, 242], // H7 (bottom center)
          [235, 284], // H8 (bottom right)
          [282, 238], // H9 (right lower)
          [238, 160], // H10 (right center)
          [282, 82],  // H11 (right upper)
          [235, 36]   // H12 (top right)
        ];
        const housesSvg = houseCoords.map(([x, y], hIdx) => {
          const sIdx = (lgIdx + hIdx) % 12;
          const signNum = sIdx + 1;
          const items = itemsBySign[sIdx].join(" ") || "—";
          return `
            <text x="${x}" y="${y - 10}" text-anchor="middle" fill="#ffd97d" font-size="10" font-weight="700">${signNum}</text>
            <text x="${x}" y="${y + 5}" text-anchor="middle" fill="#e2e8f0" font-size="9.2" font-weight="600">${items.slice(0, 18)}</text>
            ${items.length > 18 ? `<text x="${x}" y="${y + 16}" text-anchor="middle" fill="#7dd3fc" font-size="8.5">${items.slice(18, 36)}</text>` : ""}
          `;
        }).join("");
        return `
          <div style="text-align:center;">
            <div style="font-size:0.82rem;color:var(--gold-bright);font-weight:700;margin-bottom:0.35rem;">${bi(titleEn, titleTe)}</div>
            <svg viewBox="0 0 320 320" style="width:100%;max-width:320px;background:rgba(8,12,22,0.85);border:2px solid rgba(245,185,66,0.45);border-radius:10px;">
              <rect x="2" y="2" width="316" height="316" fill="none" stroke="rgba(245,185,66,0.45)" stroke-width="1.5"/>
              <line x1="2" y1="2" x2="318" y2="318" stroke="rgba(245,185,66,0.4)" stroke-width="1.2"/>
              <line x1="318" y1="2" x2="2" y2="318" stroke="rgba(245,185,66,0.4)" stroke-width="1.2"/>
              <polygon points="160,2 318,160 160,318 2,160" fill="none" stroke="rgba(245,185,66,0.55)" stroke-width="1.4"/>
              ${housesSvg}
            </svg>
          </div>
        `;
      }

      const subMetaHtml = `
        <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.2rem;">${dateIn.value} ${timeIn.value}</div>
        <div style="font-size:0.74rem;color:var(--text-muted);">${bi("Ayanāṁśa", "అయనాంశ")}: ${chart.ayanamsa.toFixed(2)}°</div>
      `;
      const rasiSouthHtml = buildSouthChart(bySign, lagnaSign, "D-1 Rāśi Kundali", "D-1 రాశి కుండలి", subMetaHtml);
      const navSouthHtml = buildSouthChart(byNavSign, navLagnaSign, "D-9 Navāṁśa", "D-9 నవాంశ చక్రం", `<div style="font-size:0.74rem;color:var(--text-muted);margin-top:0.2rem;">${bi("Bṛhat Jātaka Ch. I-6", "బృహజ్జాతకం అధ్యా. 1-6")}</div>`);
      const rasiNorthHtml = buildNorthChart(bySign, lagnaSign, "D-1 Rāśi (North)", "D-1 రాశి (ఉత్తర)");
      const navNorthHtml = buildNorthChart(byNavSign, navLagnaSign, "D-9 Navāṁśa (North)", "D-9 నవాంశ (ఉత్తర)");

      // 1. Lagna & Rising Drekkaṇa (Ch. I, XXVII)
      const lgRasi = BJ_RASIS[lagnaSign];
      const lgDrek = BJ_DREKKANAS_36[lagnaSign * 3 + info.lagna.drekIdx];
      const moRasi = BJ_RASIS[info.moon.signIdx];
      const moNak = BJ_NAKSHATRAS[info.moon.nakIdx];
      const moSignTe = (typeof BJ_PLANETS_IN_SIGNS_TE !== "undefined" && BJ_PLANETS_IN_SIGNS_TE.moon[info.moon.signIdx]) || BJ_PLANETS_IN_SIGNS.moon[info.moon.signIdx];

      // 2. Yogas Detection (Ch. XI, XII, XIII, XIV, XV)
      const pKeys = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"];
      const nonSunPlanets = ["mars", "mercury", "jupiter", "venus", "saturn"];
      const pNameTe = { sun: "రవి", moon: "చంద్రుడు", mars: "కుజుడు", mercury: "బుధుడు", jupiter: "గురువు", venus: "శుక్రుడు", saturn: "శని" };
      const yogas = [];

      // Candra Yogas (Ch. XIII)
      const moonSign = info.moon.signIdx;
      const in2ndFromMoon = nonSunPlanets.filter(p => ((info[p].signIdx - moonSign + 12) % 12) === 1);
      const in12thFromMoon = nonSunPlanets.filter(p => ((info[p].signIdx - moonSign + 12) % 12) === 11);
      if (in2ndFromMoon.length && in12thFromMoon.length) {
        yogas.push({
          tag: "Ch. XIII • Durudharā",
          en: `Durudharā Yoga (planets in both 2nd & 12th from Moon: ${[...in2ndFromMoon, ...in12thFromMoon].join(", ")}): Means the Moon is supported on both sides, giving abundant wealth, vehicles, generosity, and faithful attendants (Sl. 3, 6).`,
          te: `దురుధరా యోగం (చంద్రునికి ఇరువైపులా 2 & 12లో గ్రహాలు): చంద్రునికి బలమైన ఆసరా ఉండటంచేత అపార ధనం, వాహనాలు, దాతృత్వం మరియు నమ్మకమైన సేవకులు కలుగుతారు (శ్లో. 3, 6).`
        });
      } else if (in2ndFromMoon.length) {
        yogas.push({
          tag: "Ch. XIII • Sunaphā",
          en: `Sunaphā Yoga (planet(s) in 2nd from Moon: ${in2ndFromMoon.join(", ")}): Means self-acquired property, wisdom, and high status equal to a ruler (Sl. 3, 5).`,
          te: `సునఫా యోగం (చంద్రుని 2లో ${in2ndFromMoon.map(x => pNameTe[x]).join(", ")}): స్వార్జిత ధనం, బుద్ధిబలంతో కీర్తి మరియు రాజసమాన గౌరవం కలుగుతాయి (శ్లో. 3, 5).`
        });
      } else if (in12thFromMoon.length) {
        yogas.push({
          tag: "Ch. XIII • Anaphā",
          en: `Anaphā Yoga (planet(s) in 12th from Moon: ${in12thFromMoon.join(", ")}): Means good health, strength, amiable manners, fame, fine dress, and contentment (Sl. 3, 5).`,
          te: `అనఫా యోగం (చంద్రుని 12లో ${in12thFromMoon.map(x => pNameTe[x]).join(", ")}): మంచి ఆరోగ్యం, బలం, సౌమ్య స్వభావం, కీర్తి మరియు సంతృప్తి కలుగుతాయి (శ్లో. 3, 5).`
        });
      } else {
        const kendraPlanets = nonSunPlanets.filter(p => [1, 4, 7, 10].includes(houseOf(p)));
        const withMoon = nonSunPlanets.filter(p => info[p].signIdx === moonSign);
        if (kendraPlanets.length || withMoon.length) {
          yogas.push({
            tag: "Ch. XIII • Kemadruma Cancelled",
            en: `Kemadruma Yoga is Cancelled: Normally, having no planets (other than Sun) in the 2nd or 12th from the Moon causes Kemadruma (hardship/poverty). Here, because planet(s) occupy a Kendra (1, 4, 7, 10 from Lagna: ${kendraPlanets.join(", ") || "—"}) or join the Moon (${withMoon.join(", ") || "—"}), that hardship is cancelled (Sl. 3).`,
            te: `కేమద్రుమ భంగం (రద్దు): చంద్రుని 2, 12 స్థానాలలో గ్రహాలు లేకపోతే 'కేమద్రుమ దోషం' (కష్టాలు, దారిద్ర్యం) వస్తుంది. కానీ ఇక్కడ లగ్న కేంద్రాలలో (1, 4, 7, 10) లేదా చంద్రునితో గ్రహాలు ఉండటంచేత ఆ దోషం రద్దయింది (శ్లో. 3).`
          });
        } else {
          yogas.push({
            tag: "Ch. XIII • Kemadruma",
            en: "Kemadruma Yoga (no planets other than Sun in 2nd/12th from Moon, nor in Kendras or with Moon): Indicates struggle, obscure status, and financial hardship unless offset by other strong yogas (Sl. 3, 6).",
            te: "కేమద్రుమ యోగం (చంద్రుని 2, 12లలో మరియు కేంద్రాలలో గ్రహాలు లేవు): జీవితంలో ఒంటరితనం, శ్రమ మరియు ఆర్థిక కష్టాలను సూచిస్తుంది (శ్లో. 3, 6)."
          });
        }
      }

      // Candradhiyoga
      const adhiBenefics = ["mercury", "jupiter", "venus"].filter(p => [5, 6, 7].includes((info[p].signIdx - moonSign + 12) % 12));
      if (adhiBenefics.length) {
        yogas.push({
          tag: "Ch. XIII.2 • Candrādhiyoga",
          en: `Candrādhiyoga (${adhiBenefics.length} benefic(s) in 6th/7th/8th from Moon: ${adhiBenefics.join(", ")}): Bestows leadership (commander/minister/ruler depending on 1/2/3 benefics), prosperity, long life, and victory over foes & disease (Sl. 2).`,
          te: `చంద్రాధియోగం (చంద్రుని నుండి 6/7/8లో ${adhiBenefics.length} శుభులు: ${adhiBenefics.map(x => pNameTe[x]).join(", ")}): ఉన్నత పదవి (సేనాధిపతి/మంత్రి/రాజు), ఐశ్వర్యం, దీర్ఘాయువు, ఆరోగ్యం మరియు శత్రుజయం కలుగుతాయి (శ్లో. 2).`
        });
      }

      // Nabhasa Asraya & Sankhya (Ch. XII)
      const pSigns = pKeys.map(p => info[p].signIdx);
      const uniqueSigns = new Set(pSigns);
      if (pSigns.every(s => s % 3 === 0)) yogas.push({ tag: "Ch. XII • Āśraya", en: "Rajju (Āśraya) Yoga — all 7 planets in movable signs (1,4,7,10): Envious, fond of travel and visiting foreign lands (Sl. 2, 11; takes effect only if unmixed with other Nābhasa yogas, Sl. 12).", te: "రజ్జు యోగం (అన్ని గ్రహాలూ చర రాశులలో): విదేశీ ప్రయాణాలు మరియు సంచారంపై ఆసక్తి (శ్లో. 2, 11)." });
      else if (pSigns.every(s => s % 3 === 1)) yogas.push({ tag: "Ch. XII • Āśraya", en: "Musala (Āśraya) Yoga — all 7 planets in fixed signs (2,5,8,11): Proud, wealthy, engaged in many works (Sl. 2, 11; takes effect only if unmixed with other Nābhasa yogas, Sl. 12).", te: "ముసల యోగం (అన్ని గ్రహాలూ స్థిర రాశులలో): ఆత్మగౌరవం, ధనం మరియు అనేక పనులు చేయుట (శ్లో. 2, 11)." });
      else if (pSigns.every(s => s % 3 === 2)) yogas.push({ tag: "Ch. XII • Āśraya", en: "Nala (Āśraya) Yoga — all 7 planets in dual signs (3,6,9,12): Resolute, shrewd, defective in some limb (Sl. 2, 11; takes effect only if unmixed with other Nābhasa yogas, Sl. 12).", te: "నల యోగం (అన్ని గ్రహాలూ ద్విస్వభావ రాశులలో): దృఢనిశ్చయం, చతురత (శ్లో. 2, 11)." });

      const sankhyaMap = { 7: "Vallakī (Vīṇā)", 6: "Dāma", 5: "Pāśa", 4: "Kedāra", 3: "Śūla", 2: "Yuga", 1: "Gola" };
      const skName = sankhyaMap[uniqueSigns.size];
      if (skName) {
        const skObj = BJ_NABHASA_YOGAS.find(y => y.name.startsWith(skName.split(" ")[0]));
        if (skObj) yogas.push({ tag: "Ch. XII • Saṅkhyā", en: `${skObj.name} (all 7 planets spread across ${uniqueSigns.size} signs; applies when Ākṛti yogas are absent, Sl. 10): ${skObj.effEn}`, te: `${skObj.name} (7 గ్రహాలూ ${uniqueSigns.size} రాశులలో ఉండటంచేత — ఆకృతి యోగాలు లేనప్పుడు వర్తిస్తుంది): ${skObj.effTe}` });
      }

      // Dvigrha Conjunctions (Ch. XIV)
      for (let i = 0; i < pKeys.length; i++) {
        for (let j = i + 1; j < pKeys.length; j++) {
          if (info[pKeys[i]].signIdx === info[pKeys[j]].signIdx) {
            const pairKey = `${pKeys[i]}-${pKeys[j]}`;
            const pRes = BJ_DVIGRHA_PAIRS[pairKey];
            if (pRes) {
              yogas.push({ tag: "Ch. XIV • Dvigrha", en: `${pKeys[i].toUpperCase()} + ${pKeys[j].toUpperCase()} together in ${BJ_RASIS[info[pKeys[i]].signIdx].en} (two-planet blend, Sl. 1–5): ${pRes.en}`, te: `${pNameTe[pKeys[i]]} + ${pNameTe[pKeys[j]]} (${BJ_RASIS[info[pKeys[i]].signIdx].te}లో కలయిక): ${pRes.te}` });
            }
          }
        }
      }

      // Pravrajya (Ch. XV)
      for (let s = 0; s < 12; s++) {
        const inSign = pKeys.filter(p => info[p].signIdx === s);
        if (inSign.length >= 4) {
          yogas.push({ tag: "Ch. XV • Pravrajyā", en: `Pravrajyā (Ascetic) Yoga potential: ${inSign.length} planets in ${BJ_RASIS[s].en} (${inSign.join(", ")}). If strong and not combust/defeated in war, inclines toward the ascetic order of the strongest planet (Sl. 1–2).`, te: `ప్రవ్రజ్యా (సన్యాస) యోగ సూచన: ${BJ_RASIS[s].te}లో ${inSign.length} గ్రహాలు కలిసి ఉన్నాయి. ఇవి బలంగా ఉండి అస్తంగతం కాకుంటే వైరాగ్య/సన్యాస మార్గం కలుగుతుంది (శ్లో. 1–2).` });
        }
      }

      // 3. Karmajiva (Ch. X)
      const tenthPlanets = pKeys.filter(p => houseOf(p) === 10);
      const tenthSignIdx = (lagnaSign + 9) % 12;
      const tenthLordMap = ["mars","venus","mercury","moon","sun","mercury","venus","mars","jupiter","saturn","saturn","jupiter"];
      const tenthLord = tenthLordMap[tenthSignIdx];
      const tenthLordNavRasi = BJ_RASIS[info[tenthLord].navRasiId - 1];
      const navLordObj = BJ_KARMAJIVA.find(k => k.planet.toLowerCase() === tenthLordNavRasi.lord.toLowerCase());

      // 4. Strijataka (Ch. XXIV — Slokas 1-16)
      let striHtml = "";
      if (genderSel.value === "female") {
        const lgEven = (lagnaSign + 1) % 2 === 0;
        const moEven = (info.moon.signIdx + 1) % 2 === 0;
        const lgLord = tenthLordMap[lagnaSign];
        const triLord = info.lagna.tri.lord.toLowerCase();
        const striRow = BJ_STRI_TRIMSAMSA.find(r => r.rasiLord.toLowerCase().startsWith(lgLord));
        const triText = striRow ? striRow[triLord] : "—";

        // Also Moon Rasi x Moon Trimsamsa (Sl. 6: stronger of Lagna or Moon prevails!)
        const moLord = tenthLordMap[info.moon.signIdx];
        const moTriLord = info.moon.tri.lord.toLowerCase();
        const moStriRow = BJ_STRI_TRIMSAMSA.find(r => r.rasiLord.toLowerCase().startsWith(moLord));
        const moTriText = moStriRow ? moStriRow[moTriLord] : "—";

        const seventhSignIdx = (lagnaSign + 6) % 12;
        const seventhLord = tenthLordMap[seventhSignIdx];
        const seventhNavRasiIdx = (info.lagna.navRasiId - 1 + 6) % 12; // Setting Navamsa (7th from rising Navamsa)
        const seventhNavLord = tenthLordMap[seventhNavRasiIdx];
        const seventhOccupants = pKeys.filter(p => houseOf(p) === 7);
        const eighthOccupants = pKeys.filter(p => houseOf(p) === 8);
        const secondOccupants = pKeys.filter(p => houseOf(p) === 2);
        const husbandBy7thLordEn = {
          sun: "Exceedingly soft in disposition, engaged in many works (Sl. 12)",
          moon: "Love-sick and gentle (Sl. 12)",
          mars: "Fond of other women, irascible (Sl. 11)",
          mercury: "Very learned and clever (Sl. 11)",
          jupiter: "Passions under control, virtuous (Sl. 12)",
          venus: "Very handsome and loving (Sl. 11)",
          saturn: "Old and foolish (Sl. 11)"
        };
        const husbandBy7thLordTe = {
          sun: "మిక్కిలి మృదు స్వభావం, అనేక పనులలో నిమగ్నుడు (శ్లో. 12)",
          moon: "ప్రేమమయుడు, సౌమ్యుడు (శ్లో. 12)",
          mars: "ఇతర స్త్రీల పట్ల ఆసక్తి, కోపిష్ఠి (శ్లో. 11)",
          mercury: "మహా విద్వాంసుడు, చతురుడు (శ్లో. 11)",
          jupiter: "జితేంద్రియుడు, ధార్మికుడు (శ్లో. 12)",
          venus: "అందగాడు, ప్రేమాన్వితుడు (శ్లో. 11)",
          saturn: "వృద్ధుడు, మూర్ఖుడు (శ్లో. 11)"
        };

        const lgOccupants = pKeys.filter(p => houseOf(p) === 1);
        const sl13En = [], sl13Te = [];
        if (lgOccupants.includes("moon") && lgOccupants.includes("venus")) {
          sl13En.push("Moon+Venus in Lagna: jealous, fond of ease/comfort");
          sl13Te.push("లగ్నంలో చంద్ర-శుక్రులు: అసూయ, సుఖభోగ ప్రియత్వం");
        }
        if (lgOccupants.includes("mercury") && lgOccupants.includes("moon")) {
          sl13En.push("Mercury+Moon in Lagna: skilled in all arts, good qualities, happy");
          sl13Te.push("లగ్నంలో బుధ-చంద్రులు: సర్వకళానిపుణ, సద్గుణవతి, సుఖి");
        }
        if (lgOccupants.includes("venus") && lgOccupants.includes("mercury")) {
          sl13En.push("Venus+Mercury in Lagna: beautiful, loved by husband, skilled in arts");
          sl13Te.push("లగ్నంలో శుక్ర-బుధులు: సుందరి, భర్తకు ప్రియురాలు, కళానిపుణ");
        }
        if (lgOccupants.includes("mercury") && lgOccupants.includes("jupiter") && lgOccupants.includes("venus")) {
          sl13En.push("All 3 benefics in Lagna: all kinds of wealth, happiness, good qualities");
          sl13Te.push("లగ్నంలో ముగ్గురు శుభులు: సర్వసంపదలు, సుఖం, సద్గుణాలు");
        }

        const benefics2nd = secondOccupants.filter(p => ["mercury", "jupiter", "venus"].includes(p));
        const malefics8th = eighthOccupants.filter(p => ["sun", "mars", "saturn"].includes(p));
        const fewChildrenMoon = [1, 4, 5, 7].includes(info.moon.signIdx); // Taurus, Leo, Virgo, Scorpio (Sl. 14)

        let parityNoteEn = "", parityNoteTe = "";
        if (lgEven && moEven) {
          parityNoteEn = "Both Lagna & Moon are in Even signs → truly feminine, graceful, and virtuous (with benefic aspect: excellent qualities & ornaments, Sl. 2).";
          parityNoteTe = "లగ్నం మరియు చంద్రుడు రెండూ సమరాశులలో ఉన్నాయి → స్త్రీసహజ సౌశీల్యం, మృదుత్వం, సద్గుణాలు ఉంటాయి (శుభదృష్టి ఉంటే ఇంకా శ్రేష్ఠం — శ్లో. 2).";
        } else if (!lgEven && !moEven) {
          parityNoteEn = "Both Lagna & Moon are in Odd signs → independent, bold, or masculine-like bearing (benefics/strong Lagna soften this; malefics make it harsher, Sl. 2).";
          parityNoteTe = "లగ్నం మరియు చంద్రుడు రెండూ విషమరాశులలో ఉన్నాయి → స్వతంత్ర, ధైర్యవంతమైన లేదా పురుషసహజ స్వభావం ఉంటుంది (శ్లో. 2).";
        } else {
          parityNoteEn = `Mixed parity (Lagna is ${lgEven ? "Even" : "Odd"}, Moon is ${moEven ? "Even" : "Odd"}) → blends ${lgEven ? "feminine grace in outward bearing with bold/independent emotions" : "bold/independent outward bearing with feminine emotional grace"} (Sl. 2).`;
          parityNoteTe = `మిశ్రమ స్థితి (లగ్నం ${lgEven ? "సమరాశి" : "విషమరాశి"}, చంద్రుడు ${moEven ? "సమరాశి" : "విషమరాశి"}) → ${lgEven ? "బాహ్యంగా మృదుత్వం, మనసులో ధైర్యం/స్వతంత్రత" : "బాహ్యంగా ధైర్యం/స్వతంత్రత, మనసులో స్త్రీసహజ సౌమ్యత"} ఉంటాయి (శ్లో. 2).`;
        }

        striHtml = `
          <div class="panel-box" style="border-color:rgba(168,85,247,0.5);margin-top:1.15rem;background:rgba(168,85,247,0.07);">
            <span class="tag purple">Ch. XXIV • ${bi("Strījātaka (Female Horoscopy)", "స్త్రీజాతక ఫలితాలు")}</span>
            <h4 style="color:#fff;margin:0.4rem 0 0.25rem;">${bi("Complete Female Chart Reading (Slokas 1–16)", "స్త్రీ జాతక సంపూర్ణ వివరణ (శ్లోకాలు 1–16)")}</h4>
            <div style="font-size:0.82rem;color:var(--cyan-bright);margin-bottom:0.75rem;">
              ${bi("What this means: In Chapter XXIV, Varāhamihira explains how to read a woman's chart—her own nature comes from Lagna, Moon, and Triṁśāṁśa, while her marriage & husband's nature come from the 7th, 8th, and 2nd houses.", "దీని అర్థం: అధ్యా. 24లో వరాహమిహిరుడు స్త్రీల జాతకాన్ని ఎలా చూడాలో చెప్పారు—ఆమె స్వభావం లగ్న, చంద్ర, త్రింశాంశల ద్వారా; వివాహం & భర్త స్వభావం 7, 8, 2 స్థానాల ద్వారా తెలుస్తాయి.")}
            </div>
            <div class="cards-grid">
              <div class="info-card">
                <span class="tag gold">Sl. 1 • ${bi("How Rules Apply", "నియమాల వర్తింపు")}</span>
                <div style="font-size:0.84rem;margin-top:0.3rem;color:var(--text-muted);">
                  ${bi("All results in Ch. I–XXIII suitable to women (personality, wealth, health, wisdom) apply to her directly; male-specific spouse statements apply to her husband.", "అధ్యా. 1–23లో స్త్రీలకు తగిన ఫలాలు (బుద్ధి, ఆరోగ్యం, ధనం) ఆమెకు నేరుగా వర్తిస్తాయి; 'భార్య' గురించి చెప్పినవి ఆమె భర్తకు వర్తిస్తాయి.")}
                </div>
              </div>
              <div class="info-card">
                <span class="tag gold">Sl. 2 • ${bi("Personality & Bearing", "స్వభావం & వ్యక్తిత్వం")}</span>
                <div style="font-size:0.84rem;margin-top:0.3rem;color:var(--text-muted);">${bi(parityNoteEn, parityNoteTe)}</div>
              </div>
              <div class="info-card">
                <span class="tag purple">Sl. 3–6 • ${bi("Character (Triṁśāṁśa)", "గుణగణాలు (త్రింశాంశ)")}</span>
                <div style="font-size:0.84rem;margin-top:0.3rem;color:var(--text-muted);">
                  <strong>${bi("From Lagna:", "లగ్నం ప్రకారం:")}</strong> ${triText}<br>
                  <strong>${bi("From Moon:", "చంద్రుని ప్రకారం:")}</strong> ${moTriText}<br>
                  <span style="font-size:0.78rem;color:var(--cyan-bright);">${bi("Rule (Sl. 6): Whichever of Lagna or Moon is stronger in the chart, that result manifests.", "నియమం (శ్లో. 6): లగ్న, చంద్రులలో ఏది బలంగా ఉంటే దాని ఫలమే జరుగుతుంది.")}</span>
                </div>
              </div>
              <div class="info-card">
                <span class="tag">Sl. 8–12 • ${bi("Husband & Marriage (7th House)", "భర్త స్వభావం (7వ భావం)")}</span>
                <div style="font-size:0.84rem;margin-top:0.3rem;color:var(--text-muted);">
                  <strong>${bi("7th House Sign Lord", "7వ రాశ్యాధిపతి")} (${bi(seventhLord, pNameTe[seventhLord])}):</strong> ${bi(husbandBy7thLordEn[seventhLord], husbandBy7thLordTe[seventhLord])}.<br>
                  <strong>${bi("7th Navāṁśa Lord", "అస్తమ నవాంశాధిపతి")} (${bi(seventhNavLord, pNameTe[seventhNavLord])}):</strong> ${bi(husbandBy7thLordEn[seventhNavLord], husbandBy7thLordTe[seventhNavLord])}.<br>
                  <strong>${bi("Planets in 7th:", "7వ భావ గ్రహాలు:")}</strong> ${seventhOccupants.length ? bi(seventhOccupants.join(", "), seventhOccupants.map(x => pNameTe[x]).join(", ")) : bi("Empty (if 7th is strong/benefic-aspected, good; only if weak & malefic-aspected without benefic does Sl. 8 warn of a poor match).", "ఖాళీగా ఉంది (7వ భావం బలంగా/శుభదృష్టితో ఉంటే శుభం; బలహీనమై పాపదృష్టి మాత్రమే ఉంటే దోషం — శ్లో. 8).")}
                </div>
              </div>
              <div class="info-card">
                <span class="tag emerald">Sl. 14 • ${bi("Marital Longevity (2nd & 8th)", "వైవాహిక ఆయుస్సు (2 & 8 భావాలు)")}</span>
                <div style="font-size:0.84rem;margin-top:0.3rem;color:var(--text-muted);">
                  ${benefics2nd.length ? bi(`Benefic (${benefics2nd.join(", ")}) in 2nd house → <strong>Sumangalī Yoga</strong> (auspicious lifelong marriage; passes away before husband). `, `2వ భావంలో శుభగ్రహం (${benefics2nd.map(x => pNameTe[x]).join(", ")}) → <strong>సుమంగళి యోగం</strong> (జీవితాంతం వైవాహిక సుఖం, భర్తకు ముందే మరణం). `) : bi("No benefic in 2nd house. ", "2వ భావంలో శుభగ్రహాలు లేవు. ")}
                  ${malefics8th.length ? bi(`Malefic (${malefics8th.join(", ")}) in 8th → widowhood caution timed by 8th-lord's Navāṁśa period (Sl. 14).`, `8లో పాపగ్రహం (${malefics8th.map(x => pNameTe[x]).join(", ")}) → భర్తకు ఆయుర్దోష సూచన.`) : bi("No malefic in 8th house (no 8th-house widowhood yoga triggered).", "8వ భావంలో పాపగ్రహాలు లేవు (వైధవ్య దోషం లేదు).")}
                  ${fewChildrenMoon ? `<br><span style="color:var(--gold-primary);">${bi("Note (Sl. 14): Moon in Taurus/Leo/Virgo/Scorpio can indicate fewer children.", "గమనిక (శ్లో. 14): వృషభ/సింహ/కన్య/వృశ్చిక చంద్రుడు అల్పసంతానాన్ని సూచిస్తాడు.")}</span>` : ""}
                </div>
              </div>
              <div class="info-card">
                <span class="tag gold">Sl. 13, 15–16 • ${bi("Special Yogas & Scope", "విశేష యోగాలు")}</span>
                <div style="font-size:0.84rem;margin-top:0.3rem;color:var(--text-muted);">
                  ${sl13En.length ? `<strong>${bi("Lagna Benefics (Sl. 13):", "లగ్న శుభులు:")}</strong> ${bi(sl13En.join("; "), sl13Te.join("; "))}<br>` : ""}
                  ${bi("If Even Lagna with strong Jupiter, Mars, Mercury & Venus (Sl. 15) → celebrated scholar & expounder of Vedānta philosophy. All Ch. XXIV yogas apply at birth, marriage, selection & query (Sl. 16).", "సమలగ్నమై గురు, కుజ, బుధ, శుక్రులు బలంగా ఉంటే సర్వశాస్త్ర విదుషి మరియు వేదాంత ప్రవక్త అవుతుంది (శ్లో. 15). ఈ నియమాలు జన్మ, వివాహ మరియు ప్రశ్న సమయాలకు వర్తిస్తాయి (శ్లో. 16).")}
                </div>
              </div>
            </div>
          </div>`;
      }

      // 5. 22nd Drekkana & Past Gati (Ch. XXV)
      const eighthSignIdx = (lagnaSign + 7) % 12;
      const drek22 = BJ_DREKKANAS_36[eighthSignIdx * 3];
      const pastMapEn = { jupiter: "Devaloka (World of Immortals)", moon: "Pitṛloka (Manes)", venus: "Pitṛloka (Manes)", sun: "Martyaloka (Mortals)", mars: "Martyaloka (Mortals)", saturn: "Narakaloka (Infernal Regions)", mercury: "Narakaloka (Infernal Regions)" };
      const pastMapTe = { jupiter: "దేవలోకం", moon: "పితృలోకం", venus: "పితృలోకం", sun: "మర్త్యలోకం", mars: "మర్త్యలోకం", saturn: "నరకలోకం", mercury: "నరకలోకం" };
      const sunDrekSignLord = tenthLordMap[((info.sun.signIdx + info.sun.drekIdx * 4) % 12)];

      // 6. Planetary Dignity & Strength Proportion (Ch. I-13,14; II-16,17; XX-11)
      const EXALT_SIGN = { sun: 0, moon: 1, mars: 9, mercury: 5, jupiter: 3, venus: 11, saturn: 6 };
      const FALL_SIGN = { sun: 6, moon: 7, mars: 3, mercury: 11, jupiter: 9, venus: 5, saturn: 0 };
      const MOOL_SIGN = { sun: 4, moon: 1, mars: 0, mercury: 5, jupiter: 8, venus: 6, saturn: 10 };
      const OWN_SIGNS = { sun: [4], moon: [3], mars: [0, 7], mercury: [2, 5], jupiter: [8, 11], venus: [1, 6], saturn: [9, 10] };
      const NAT_FRIENDS = {
        sun: ["moon","mars","jupiter"], moon: ["sun","mercury"], mars: ["sun","moon","jupiter"],
        mercury: ["sun","venus"], jupiter: ["sun","moon","mars"], venus: ["mercury","saturn"], saturn: ["mercury","venus"]
      };
      const NAT_ENEMIES = {
        sun: ["venus","saturn"], moon: [], mars: ["mercury"],
        mercury: ["moon"], jupiter: ["mercury","venus"], venus: ["sun","moon"], saturn: ["sun","moon","mars"]
      };

      function getDignity(p, sIdx) {
        if (p === "lagna") return { en: "Ascendant", te: "లగ్నం", cls: "gold", scaleEn: "Strong if aspected/occupied by Lord or Mercury (Ch. I-19)", scaleTe: "లగ్నాధిపతి/బుధ దృష్టితో బలం" };
        if (EXALT_SIGN[p] === sIdx) return { en: "Exalted (Full 100%)", te: "ఉచ్ఛ (పూర్ణ బలం)", cls: "emerald" };
        if (FALL_SIGN[p] === sIdx) return { en: "Fall / Neecha (Minimal)", te: "నీచ (అల్ప బలం)", cls: "rose" };
        if (MOOL_SIGN[p] === sIdx) return { en: "Mūlatrikoṇa (3/4)", te: "మూలత్రికోణం (3/4)", cls: "emerald" };
        if (OWN_SIGNS[p].includes(sIdx)) return { en: "Own Sign (1/2)", te: "స్వక్షేత్రం (1/2)", cls: "gold" };
        const sLord = tenthLordMap[sIdx];
        if (NAT_FRIENDS[p].includes(sLord)) return { en: "Friend's Sign (1/4)", te: "మిత్రక్షేత్రం (1/4)", cls: "" };
        if (NAT_ENEMIES[p].includes(sLord)) return { en: "Enemy's Sign (Low)", te: "శత్రుక్షేత్రం (అల్పం)", cls: "rose" };
        return { en: "Neutral Sign", te: "సమ క్షేత్రం", cls: "" };
      }

      // 7. Naisargika Dasa (Ch. VIII, Sl. 9) & Personal Pindayurdaya Dasa Order (Ch. VII & VIII-1,2,5-7,12-18)
      const birthDt = new Date(year, month - 1, day, hour, minute);
      const nowDt = new Date();
      const ageYears = Math.max(0, (nowDt - birthDt) / (365.2425 * 86400000));
      const birthYr = year;

      const NAISARGIKA_SEQ = [
        { k: "moon", en: "Moon", te: "చంద్రుడు", yrs: 1 },
        { k: "mars", en: "Mars", te: "కుజుడు", yrs: 2 },
        { k: "mercury", en: "Mercury", te: "బుధుడు", yrs: 9 },
        { k: "venus", en: "Venus", te: "శుక్రుడు", yrs: 20 },
        { k: "jupiter", en: "Jupiter", te: "గురువు", yrs: 18 },
        { k: "sun", en: "Sun", te: "రవి", yrs: 20 },
        { k: "saturn", en: "Saturn", te: "శని", yrs: 50 }
      ];
      let nCum = 0, activeNaisargika = null;
      const naisargikaRows = NAISARGIKA_SEQ.map(item => {
        const sAge = nCum, eAge = nCum + item.yrs;
        nCum = eAge;
        const isActive = ageYears >= sAge && ageYears < eAge;
        if (isActive) activeNaisargika = item.k;
        return { ...item, sAge, eAge, sYr: birthYr + sAge, eYr: birthYr + eAge, isActive };
      });

      const DASA_EFFECTS_BOOK = {
        sun: {
          goodEn: "Wealth via perfumes, gold, kings, roads, battles; high-minded, brave, famous (Sl. 12).",
          goodTe: "సుగంధ ద్రవ్యాలు, బంగారం, రాజులు, రహదారులు మరియు యుద్ధాల ద్వారా ధనం; ఉదాత్తత, శౌర్యం, కీర్తి (శ్లో. 12).",
          badEn: "Perils via wife, sons, wealth, enemies, weapons, fire, king; heart/stomach trouble (Sl. 12).",
          badTe: "భార్యాపుత్రులు, ధనం, శత్రువులు, ఆయుధాలు, అగ్ని మరియు రాజు వల్ల ఆపదలు; హృదయ/ఉదర బాధలు (శ్లో. 12)."
        },
        moon: {
          goodEn: "Mantras, Brāhmaṇas, dairy, jaggery, clothes, flowers, learning, waxing fame & income (Sl. 13).",
          goodTe: "మంత్రాలు, బ్రాహ్మణులు/పండితులు, పాలు-బెల్లం, వస్త్రాలు, పుష్పాలు మరియు విద్య ద్వారా వృద్ధి చెందే కీర్తి & ఆదాయం (శ్లో. 13).",
          badEn: "Sleep, idleness, domestic/external disharmony (Sl. 13).",
          badTe: "అతి నిద్ర, సోమరితనం, ఇంటా-బయటా అసౌఖ్యం/విభేదాలు (శ్లో. 13)."
        },
        mars: {
          goodEn: "Subdues enemies; wealth via kings, brothers, lands, woollens, sheep/goats (Sl. 14).",
          goodTe: "శత్రువులను జయించుట; రాజులు, సోదరులు, భూములు, ఉన్ని వస్త్రాలు మరియు గొర్రెలు/మేకల ద్వారా ధనలాభం (శ్లో. 14).",
          badEn: "Misunderstandings with family/elders; fever, bile, thirst, blood/limb trouble (Sl. 14).",
          badTe: "కుటుంబం/పెద్దలతో విభేదాలు; జ్వరం, పిత్తం, దాహం, రక్త మరియు అవయవ బాధలు (శ్లో. 14)."
        },
        mercury: {
          goodEn: "Wealth via missions, friends, elders, metals, gold, lands, knowledge & praise (Sl. 15).",
          goodTe: "రాయబారాలు (దూతకార్యాలు), మిత్రులు, పెద్దలు, లోహాలు, బంగారం, భూములు, జ్ఞానం మరియు ప్రశంసల ద్వారా ధనప్రాప్తి (శ్లో. 15).",
          badEn: "Harsh speech, confinement, grief, Vāta/Pitta/Kapha ailments (Sl. 15).",
          badTe: "కఠిన వాక్కు, బంధనం, శోకం మరియు వాత-పిత్త-కఫ (త్రిదోష) రోగాలు (శ్లో. 15)."
        },
        jupiter: {
          goodEn: "Honour, learning, valour, beauty, power; wealth via counselling, kings, gold, horses, children (Sl. 16).",
          goodTe: "గౌరవం, విద్య, పరాక్రమం, అందం, అధికారం; మంత్రణ, రాజులు, బంగారం, అశ్వాలు మరియు సంతానం ద్వారా సంపద (శ్లో. 16).",
          badEn: "Worry over intricate issues, ear trouble, enmity with unrighteous people (Sl. 16).",
          badTe: "క్లిష్ట సమస్యలతో చింత, కర్ణరోగం మరియు అధర్మపరులతో వైరం (శ్లో. 16)."
        },
        venus: {
          goodEn: "Music, pleasures, fine food/clothes, jewels, trade, agriculture, hidden treasure (Sl. 17).",
          goodTe: "సంగీతం, సుఖభోగాలు, రుచికరమైన ఆహారం/మంచి వస్త్రాలు, ఆభరణాలు, వ్యాపారం, వ్యవసాయం మరియు నిధిప్రాప్తి (శ్లో. 17).",
          badEn: "Opposition from people/king/hunters; suffering through friends (Sl. 17).",
          badTe: "జనులు/రాజు/వేటగాళ్ళతో విరోధం; మిత్రుల ద్వారా కష్టాలు (శ్లో. 17)."
        },
        saturn: {
          goodEn: "Wealth via animals, aged women, headmanship of clan/village/town, grains (Sl. 18).",
          goodTe: "పశుసంపద, వృద్ధ స్త్రీలు, కుల/గ్రామ/నగర నాయకత్వం మరియు ధాన్యాల ద్వారా ధనలాభం (శ్లో. 18).",
          badEn: "Phlegm/wind complaints, jealousy, anger, fatigue, reproaches, loss of limbs (Sl. 18).",
          badTe: "కఫ-వాత రోగాలు, ఈర్ష్య, కోపం, అలసట, నిందలు మరియు అవయవ హాని (శ్లో. 18)."
        }
      };

      // Compute Pindayurdaya (Ch. VII) with greatest single reduction (Sl. 13)
      const pindaAyusMap = {};
      Object.entries(BJ_AYURDAYA_DATA.pindaMax).forEach(([k, pInfo]) => {
        const lon = chart[k];
        let diff = Math.abs(lon - pInfo.exaltDeg);
        if (diff > 180) diff = 360 - diff;
        const raw = pInfo.max * (1 - diff / 360);
        const h = houseOf(k);
        const sIdx = info[k].signIdx;
        const isMal = ["sun", "mars", "saturn"].includes(k);
        const chakraRed = (h >= 7 && h <= 12) ? (isMal ? 1 / (13 - h) : 0.5 / (13 - h)) : 0;
        const sLord = tenthLordMap[sIdx];
        const enemyRed = NAT_ENEMIES[k].includes(sLord) ? (1 / 3) : 0;
        // Combust (Astangata, Sl. 2): except Venus and Saturn
        let sunDiff = Math.abs(lon - chart.sun);
        if (sunDiff > 180) sunDiff = 360 - sunDiff;
        const combustLimits = { moon: 12, mars: 17, mercury: 14, jupiter: 11 };
        const combustRed = (combustLimits[k] && sunDiff <= combustLimits[k]) ? 0.5 : 0;
        const maxRed = Math.max(chakraRed, enemyRed, combustRed); // Sl. 13: single greatest reduction
        pindaAyusMap[k] = raw * (1 - maxRed);
      });

      // Ch. VIII-1: Anchor = strongest of Lagna, Sun, Moon (tie-breaker: Lagna -> Sun -> Moon; daytime Sun in Kendra gets priority note)
      const anchorScores = {
        lagna: ([0,3,6,9].includes(lagnaSign) ? 1 : 0) + (houseOf("mercury") === 1 || houseOf("jupiter") === 1 ? 2 : 0),
        sun: (EXALT_SIGN.sun === info.sun.signIdx ? 3 : OWN_SIGNS.sun.includes(info.sun.signIdx) ? 2 : 0) + ([1,4,7,10].includes(houseOf("sun")) ? 2 : 0),
        moon: (EXALT_SIGN.moon === info.moon.signIdx ? 3 : OWN_SIGNS.moon.includes(info.moon.signIdx) ? 2 : 0) + ([1,4,7,10].includes(houseOf("moon")) ? 2 : 0)
      };
      const anchorKey = ["lagna", "sun", "moon"].reduce((best, cur) => anchorScores[cur] > anchorScores[best] ? cur : best, "lagna");
      const anchorSign = info[anchorKey].signIdx;

      const kendraGrp = [], panapharaGrp = [], apoklimaGrp = [];
      pKeys.forEach(k => {
        if (k === anchorKey) return;
        const relH = ((info[k].signIdx - anchorSign + 12) % 12) + 1;
        if ([1, 4, 7, 10].includes(relH)) kendraGrp.push(k);
        else if ([2, 5, 8, 11].includes(relH)) panapharaGrp.push(k);
        else apoklimaGrp.push(k);
      });
      const sortByAyus = (arr) => arr.sort((a, b) => pindaAyusMap[b] - pindaAyusMap[a]);
      sortByAyus(kendraGrp); sortByAyus(panapharaGrp); sortByAyus(apoklimaGrp);

      const personalOrder = anchorKey === "lagna"
        ? [...kendraGrp, ...panapharaGrp, ...apoklimaGrp]
        : [anchorKey, ...kendraGrp, ...panapharaGrp, ...apoklimaGrp];

      let pCum = 0, activePersonal = null;
      const personalDasaRows = personalOrder.map(k => {
        const yrs = pindaAyusMap[k];
        const sAge = pCum, eAge = pCum + yrs;
        pCum = eAge;
        const isActive = ageYears >= sAge && ageYears < eAge;
        if (isActive) activePersonal = k;
        const dig = getDignity(k, info[k].signIdx);
        const relH = ((info[k].signIdx - anchorSign + 12) % 12) + 1;
        const grpLbl = k === anchorKey ? "Anchor" : ([1,4,7,10].includes(relH) ? "Kendra (Early)" : ([2,5,8,11].includes(relH) ? "Paṇaphara (Mid)" : "Āpoklima (Late)"));
        return { k, yrs, sAge, eAge, isActive, dig, grpLbl };
      });
      const overlapGood = activeNaisargika && activePersonal && activeNaisargika === activePersonal;

      // 8. Which Grahas Are Good for You & Why (Ch. I-13,14; II-5,16,19; XX-10,11)
      const lgLordKey = tenthLordMap[lagnaSign];
      const DIGBALA_HOUSE = { mercury: 1, jupiter: 1, moon: 4, venus: 4, saturn: 7, sun: 10, mars: 10 };
      const grahaEval = pKeys.map(p => {
        const sIdx = info[p].signIdx;
        const h = houseOf(p);
        const dig = getDignity(p, sIdx);
        const isVarg = info[p].isVargottama;
        const hasDigbala = DIGBALA_HOUSE[p] === h;
        const isNatBenefic = ["jupiter", "venus", "mercury", "moon"].includes(p);
        const isLagnaFriend = p === lgLordKey || NAT_FRIENDS[lgLordKey].includes(p);
        const isLagnaEnemy = NAT_ENEMIES[lgLordKey].includes(p);

        const posEn = [], posTe = [], negEn = [], negTe = [];
        let score = 0;

        if (EXALT_SIGN[p] === sIdx) { score += 3; posEn.push("Exalted (Ch. I-13, XX-11: full 100% strength)"); posTe.push("ఉచ్ఛ స్థితి (100% బలం)"); }
        else if (MOOL_SIGN[p] === sIdx) { score += 2.5; posEn.push("Mūlatrikoṇa (Ch. I-14, XX-11: 3/4 strength)"); posTe.push("మూలత్రికోణం (3/4 బలం)"); }
        else if (OWN_SIGNS[p].includes(sIdx)) { score += 2; posEn.push("Own Sign / Swakṣetra (Ch. XX-11: 1/2 strength)"); posTe.push("స్వక్షేత్రం (1/2 బలం)"); }
        else if (FALL_SIGN[p] === sIdx) { score -= 3; negEn.push("Debilitated / Fall (Ch. I-13, XX-11: minimal strength)"); negTe.push("నీచ స్థితి (అల్ప బలం)"); }
        else if (NAT_FRIENDS[p].includes(tenthLordMap[sIdx])) { score += 1; posEn.push("Friend's sign (1/4 strength, Ch. XX-11)"); posTe.push("మిత్రక్షేత్రం (1/4 బలం)"); }
        else if (NAT_ENEMIES[p].includes(tenthLordMap[sIdx])) { score -= 1.5; negEn.push("Enemy's sign (Ch. XX-11: reduced good)"); negTe.push("శత్రుక్షేత్రం (తగ్గిన శుభఫలం)"); }

        if (isVarg) { score += 1.5; posEn.push("Vargottama Navāṁśa (Ch. I-14, XIX-9: full auspiciousness)"); posTe.push("వర్గోత్తమ నవాంశ (పూర్ణ శుభత్వం)"); }
        if (hasDigbala) { score += 1.5; posEn.push(`Digbala in House ${h} (Ch. II-19: directional strength)`); posTe.push(`${h}వ భావంలో దిగ్బలం (అధ్యా. 2-19)`); }
        if (isLagnaFriend) { score += 1; posEn.push(p === lgLordKey ? "Lagna Lord itself (Ch. I-19)" : `Natural friend of Lagna Lord ${lgLordKey.toUpperCase()} (Ch. II-16)`); posTe.push(p === lgLordKey ? "లగ్నాధిపతి" : `లగ్నాధిపతి (${pNameTe[lgLordKey]}) మిత్రుడు`); }
        else if (isLagnaEnemy) { score -= 0.5; negEn.push(`Natural enemy of Lagna Lord ${lgLordKey.toUpperCase()} (Ch. II-16)`); negTe.push(`లగ్నాధిపతి (${pNameTe[lgLordKey]}) శత్రువు`); }

        if (isNatBenefic && [1, 4, 5, 7, 9, 10, 11].includes(h)) {
          score += 1; posEn.push(`Natural benefic in auspicious House ${h} (Ch. XX-10)`); posTe.push(`శుభగ్రహం ${h}వ శుభస్థానంలో (అధ్యా. 20-10)`);
        } else if (isNatBenefic && [6, 8, 12].includes(h)) {
          score -= 1; negEn.push(`Benefic in House ${h} (Ch. XX-10 reversal zone)`); negTe.push(`${h}వ భావంలో శుభగ్రహం (అధ్యా. 20-10 వ్యతిరేక నియమం)`);
        } else if (!isNatBenefic && [3, 6, 10, 11].includes(h)) {
          score += 0.5; posEn.push(`Malefic in Upacaya/House ${h} (Ch. I-15, XX-10)`); posTe.push(`ఉపచయ ${h}వ స్థానంలో పాపగ్రహం`);
        }

        let tier = "mixed", tierEn = "Moderate / Mixed", tierTe = "మిశ్రమ ఫలం", tagCls = "gold";
        if (score >= 2) { tier = "good"; tierEn = "Favorable / Strong"; tierTe = "శుభ & బలమైన గ్రహం"; tagCls = "emerald"; }
        else if (score < 0) { tier = "bad"; tierEn = "Challenging / Weak"; tierTe = "బలహీన / జాగ్రత్త అవసరం"; tagCls = "rose"; }

        return { p, h, sIdx, dig, score, tier, tierEn, tierTe, tagCls, posEn, posTe, negEn, negTe };
      }).sort((a, b) => b.score - a.score);

      outDiv.innerHTML = `
        <div class="split-2">
          <div class="panel-box">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.55rem;">
              <div style="font-size:0.8rem;color:var(--cyan-bright);">
                <strong>${bi("D-1 Rāśi &amp; D-9 Navāṁśa Charts:", "రాశి &amp; నవాంశ కుండలి:")}</strong> ${bi("Lg = Lagna (1st House). Strictly 7 Grahas per Varāhamihira's Bṛhat Jātaka.", "Lg = లగ్నం. వరాహమిహిరుని సప్తగ్రహ సంప్రదాయం.")}
              </div>
              <button type="button" id="btnToggleChartStyle" class="btn-secondary no-print" style="padding:0.3rem 0.7rem;font-size:0.76rem;">
                🔄 ${bi("Switch to North-Indian Diamond", "ఉత్తర భారత చక్రం చూపు")}
              </button>
            </div>
            <div id="chartsSouthWrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:0.85rem;">
              ${rasiSouthHtml}
              ${navSouthHtml}
            </div>
            <div id="chartsNorthWrap" style="display:none;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:0.85rem;">
              ${rasiNorthHtml}
              ${navNorthHtml}
            </div>
          </div>
          <div class="panel-box">
            <h4 style="color:var(--gold-bright);margin-bottom:0.25rem;">${bi("Sidereal Positions, Dignity &amp; Ṣaḍvarga", "గ్రహ స్ఫుటాలు, బలం &amp; షడ్వర్గ")}</h4>
            <div style="font-size:0.8rem;color:var(--cyan-bright);margin-bottom:0.55rem;">
              ${bi("What this means: Exact degree of each planet, its Birth Star (Nakṣatra), Navāṁśa, House, and Dignity (Ch. XX-11 strength scale: Exalted 100% → Mūlatrikoṇa 3/4 → Own 1/2 → Friend 1/4).", "దీని అర్థం: ప్రతి గ్రహం ఏ రాశి, నక్షత్రం, నవాంశ, భావంలో ఉందో మరియు దాని బలాన్ని (ఉచ్ఛ/స్వ/మిత్ర/నీచ) చూపుతుంది.")}
            </div>
            <div class="data-table-wrap"><table class="bj-table">
              <thead><tr><th>${bi("Body", "గ్రహం")}</th><th>${bi("Sign", "రాశి")}</th><th>${bi("Deg", "డిగ్రీ")}</th><th>${bi("Nakṣatra (Pāda)", "నక్షత్రం (పాదం)")}</th><th>${bi("Navāṁśa", "నవాంశ")}</th><th>${bi("Dignity (Ch. XX-11)", "బలం (అధ్యా. 20-11)")}</th><th>${bi("House", "భావం")}</th></tr></thead>
              <tbody>${bodies.map(b => {
                const v = info[b.k];
                const rObj = BJ_RASIS[v.signIdx];
                const nObj = BJ_NAKSHATRAS[v.nakIdx];
                const navObj = BJ_RASIS[v.navRasiId - 1];
                const dig = getDignity(b.k, v.signIdx);
                return `<tr>
                  <td><strong>${bi(b.en, b.te)}</strong></td>
                  <td>${rObj.symbol} ${bi(rObj.en.split(" ")[0], rObj.te)}</td>
                  <td class="mono">${v.deg.toFixed(2)}°</td>
                  <td>${bi(nObj.en, nObj.te)} (${v.pada})</td>
                  <td>${bi(navObj.en.split(" ")[0], navObj.te)} ${v.isVargottama ? `<span class="tag emerald">${bi("Vargottama", "వర్గోత్తమ")}</span>` : ''}</td>
                  <td><span class="tag ${dig.cls}">${bi(dig.en, dig.te)}</span></td>
                  <td class="mono">${b.k === "lagna" ? bi("1 (Lg)", "1 (లగ్నం)") : houseOf(b.k)}</td>
                </tr>`;
              }).join("")}</tbody>
            </table></div>
          </div>
        </div>

        <div class="cards-grid" style="margin-top:1.15rem;">
          <div class="info-card">
            <span class="tag gold">Ch. I &amp; XXVII • ${bi("Lagna & Rising Drekkaṇa", "లగ్నం & ఉదయ ద్రేక్కాణం")}</span>
            <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this means for your life: Lagna governs your body, vitality, and core path (Ch. I, XVII-20); its 10° Drekkaṇa gives the symbolic form of your rising nature (Ch. XXVII).", "మీ జీవితంలో అర్థం: లగ్నం మీ శరీరం, ఆరోగ్యం మరియు ప్రధాన జీవన మార్గాన్ని (అధ్యా. 1, 17-20), ఉదయ ద్రేక్కాణం మీ స్వభావ రూపాన్ని సూచిస్తాయి.")}</div>
            <div style="font-weight:700;color:#fff;margin-top:0.3rem;">${lgRasi.symbol} ${bi(lgRasi.en, lgRasi.te)} — ${bi("Drekkaṇa #" + (info.lagna.drekIdx + 1), (info.lagna.drekIdx + 1) + "వ ద్రేక్కాణం")}</div>
            <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">
              ${bi(`Kālapuruṣa Limb: ${lgRasi.limbEn} • ${lgRasi.risingEn}`, `కాలపురుష అంగం: ${lgRasi.limbTe} • ${lgRasi.risingTe}`)}<br>
              <strong>${bi("Rising Drekkaṇa Form:", "ఉదయ ద్రేక్కాణ రూపం:")}</strong> ${bi(lgDrek.en, lgDrek.te)}
            </div>
          </div>
          <div class="info-card">
            <span class="tag emerald">Ch. XVI • ${bi("Janma Nakṣatra", "జన్మ నక్షత్రం")}</span>
            <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this means for your life: Moon's birth star shapes your innate temperament and life tendencies (Ch. XVI). For women, spouse-worded phrases apply to the husband (Ch. XXIV-1); strength of Moon/lord determines fullness (Ch. XVII-13).", "మీ జీవితంలో అర్థం: జన్మనక్షత్రం మీ సహజ స్వభావాన్ని తెలుపుతుంది (అధ్యా. 16). స్త్రీలకు 'భార్య' అనే ఫలం 'భర్త' పరంగా వర్తిస్తుంది (అధ్యా. 24-1); చంద్రబలం బట్టి ఫలం పూర్తిగా ఉంటుంది.")}</div>
            <div style="font-weight:700;color:#fff;margin-top:0.3rem;">${bi(moNak.en, moNak.te)} — ${bi("Pāda " + info.moon.pada, info.moon.pada + "వ పాదం")}</div>
            <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi(moNak.enDesc, moNak.teDesc)}</div>
          </div>
          <div class="info-card">
            <span class="tag">Ch. XVII • ${bi("Moon in Sign", "చంద్ర రాశి ఫలం")}</span>
            <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this means for your life: Moon is the mind; its sign shapes habits, physique, and emotions—manifesting fully when Moon, sign, and sign-lord are strong (Ch. XVII-13) and ripening in Moon's Daśā (Ch. VIII-20).", "మీ జీవితంలో అర్థం: చంద్రరాశి మీ మనసు, అలవాట్లు మరియు శారీరక లక్షణాలను తెలుపుతుంది; చంద్రుడు, రాశి, రాశ్యాధిపతి బలంగా ఉంటే పూర్తి ఫలం కలుగుతుంది (అధ్యా. 17-13).")}</div>
            <div style="font-weight:700;color:#fff;margin-top:0.3rem;">${moRasi.symbol} ${bi(moRasi.en, moRasi.te)}</div>
            <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi(BJ_PLANETS_IN_SIGNS.moon[info.moon.signIdx], moSignTe)}</div>
          </div>
          <div class="info-card">
            <span class="tag gold">Ch. X • ${bi("Karmajīva (Career & Wealth)", "కర్మజీవ (వృత్తి & ధనం)")}</span>
            <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this means for your life: Shows your primary source of livelihood and wealth—judged from planets in the 10th house and the Navāṁśa lord of the 10th ruler (Ch. X-1–3).", "మీ జీవితంలో అర్థం: మీ జీవనోపాధి మరియు ధనార్జన మార్గాన్ని 10వ భావ గ్రహాలు మరియు దశమాధిపతి నవాంశ ద్వారా తెలుపుతుంది (అధ్యా. 10).")}</div>
            <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.3rem;">
              <strong>${bi("10th House Occupants:", "10వ భావ గ్రహాలు:")}</strong> ${tenthPlanets.length ? bi(tenthPlanets.join(", "), tenthPlanets.map(x => pNameTe[x]).join(", ")) : bi("None (judge by 10th lord's Navāṁśa)", "లేవు (దశమాధిపతి నవాంశ ద్వారా)")}<br>
              <strong>${bi("10th Lord Navāṁśa:", "దశమాధిపతి నవాంశ:")}</strong> ${bi(tenthLordNavRasi.lord, tenthLordNavRasi.lordTe)} → ${navLordObj ? bi(navLordObj.navEn, navLordObj.navTe) : ""}
            </div>
          </div>
          <div class="info-card">
            <span class="tag purple">Ch. XXV • ${bi("22nd Drekkaṇa & Gati", "22వ ద్రేక్కాణం & గతి")}</span>
            <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this means for your life: The 22nd Drekkaṇa (8th house start) indicates end-of-life circumstances, while Sun/Moon's Drekkaṇa lord points to the soul's prior realm (Ch. XXV-11–14).", "మీ జీవితంలో అర్థం: 22వ ద్రేక్కాణం అంత్యకాల స్థితిని, రవి/చంద్రుల ద్రేక్కాణాధిపతి పూర్వజన్మ లోకాన్ని సూచిస్తాయి (అధ్యా. 25).")}</div>
            <div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.3rem;">
              <strong>${bi("22nd Drekkaṇa:", "22వ ద్రేక్కాణం:")}</strong> ${drek22.rasi} #1 (${drek22.tags.join(", ")})<br>
              <strong>${bi("Sun's Drekkaṇa Past Realm (Sl. 14):", "పూర్వజన్మ లోకం (శ్లో. 14):")}</strong> ${bi(pastMapEn[sunDrekSignLord] || sunDrekSignLord, pastMapTe[sunDrekSignLord] || sunDrekSignLord)}
            </div>
          </div>
        </div>

        <div class="panel-box" style="margin-top:1.15rem;border-color:rgba(244,63,94,0.35);background:rgba(244,63,94,0.04);">
          <h4 style="color:#fda4af;margin-bottom:0.35rem;">💍 ${bi("Marriage &amp; Spouse Analysis (Ch. I, II, XVI, XVIII, XX, XXIII, XXIV)", "వివాహము &amp; కళత్ర విశ్లేషణ (అధ్యా. 1, 2, 16, 18, 20, 23, 24)")}</h4>
          <div class="reader-guide" style="margin-bottom:0.85rem;font-size:0.84rem;line-height:1.65;">
            <strong>${bi("How to Read Marriage in Your Chart (3 Pillars — Strictly Per Book):", "మీ జాతకంలో వివాహాన్ని ఎలా చూడాలి (3 ముఖ్య అంశాలు — గ్రంథ ప్రకారం):")}</strong><br>
            • <strong>${bi("1. 7th House from Lagna (Jāmitra / Patnī, Ch. I-15, 18):", "1. లగ్నం నుండి 7వ భావం (జామిత్రం / పత్నీ స్థానం):")}</strong> ${bi("Represents spouse and married life. If empty, judge by where the 7th Lord sits and what aspects the 7th house (Ch. XXIII-1, XXIV-8).", "భార్య/భర్త మరియు దాంపత్య జీవితాన్ని సూచిస్తుంది. 7వ భావం ఖాళీగా ఉంటే సప్తమాధిపతి స్థితి మరియు దృష్టుల ద్వారా ఫలితం చూడాలి.")}<br>
            • <strong>${bi("2. Venus (Kāma Kāraka, Ch. II-1):", "2. శుక్రుడు (కామ/కళత్ర కారకుడు):")}</strong> ${bi("The natural planet of love and marriage. Its sign, house, dignity, and whether malefics occupy the 4th &amp; 8th from Venus (Ch. XXIII-2) show marital harmony or cautions.", "ప్రేమ, వివాహ కారకుడు. శుక్రుని రాశి-భావ బలం మరియు శుక్రునికి 4, 8లలో పాపులు ఉన్నారా లేదా అనేది దాంపత్య క్షేమాన్ని చూపుతుంది.")}<br>
            • <strong>${bi("3. 7th from Moon &amp; 5th House (Ch. XXIII-1):", "3. చంద్రుని నుండి 7వ భావం &amp; 5వ స్థానం:")}</strong> ${bi("Varāhamihira states that prosperity with spouse and children comes when the 5th and 7th from Lagna or Moon are occupied or aspected by benefics or their own lords.", "లగ్న లేదా చంద్రుల నుండి 5, 7 స్థానాలలో శుభగ్రహాలు లేదా ఆయా అధిపతులు ఉన్నా/చూసినా భార్యాపుత్ర సౌఖ్యం కలుగుతుంది.")}
          </div>
          ${(() => {
            const sevSignIdx = (lagnaSign + 6) % 12;
            const sevLord = tenthLordMap[sevSignIdx];
            const sevLordSign = info[sevLord].signIdx;
            const sevLordHouse = houseOf(sevLord);
            const sevLordDig = getDignity(sevLord, sevLordSign);
            const sevLordRasiEn = BJ_PLANETS_IN_SIGNS[sevLord][sevLordSign];
            const sevLordRasiTe = (typeof BJ_PLANETS_IN_SIGNS_TE !== "undefined" && BJ_PLANETS_IN_SIGNS_TE[sevLord][sevLordSign]) || sevLordRasiEn;
            let sevLordBhavaEn = BJ_BHAVA_EFFECTS[sevLord][sevLordHouse - 1];
            let sevLordBhavaTe = (typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE[sevLord][sevLordHouse - 1]) || sevLordBhavaEn;
            if (sevLordBhavaEn === "As Sun." || sevLordBhavaEn === "As Sun") {
              sevLordBhavaEn = `${BJ_BHAVA_EFFECTS.sun[sevLordHouse - 1]} (as Sun, Sl. 9)`;
              sevLordBhavaTe = `${(typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE.sun[sevLordHouse - 1]) || BJ_BHAVA_EFFECTS.sun[sevLordHouse - 1]} (రవి వలె, శ్లో. 9)`;
            }

            const in7thLagna = pKeys.filter(p => houseOf(p) === 7);
            const in7thMoon = pKeys.filter(p => ((info[p].signIdx - moonSign + 12) % 12) === 6);
            const in5thLagna = pKeys.filter(p => houseOf(p) === 5);
            const in5thMoon = pKeys.filter(p => ((info[p].signIdx - moonSign + 12) % 12) === 4);

            const venDig = getDignity("venus", info.venus.signIdx);
            const ven48Mal = pKeys.filter(p => [3, 7].includes((info[p].signIdx - info.venus.signIdx + 12) % 12) && ["sun","mars","saturn"].includes(p));
            const support7th = [...in7thLagna, ...in7thMoon].filter(p => ["mercury","jupiter","venus"].includes(p) || p === sevLord);
            const support5th = [...in5thLagna, ...in5thMoon].filter(p => ["mercury","jupiter","venus"].includes(p));
            const venRasiTe = (typeof BJ_PLANETS_IN_SIGNS_TE !== "undefined" && BJ_PLANETS_IN_SIGNS_TE.venus[info.venus.signIdx]) || BJ_PLANETS_IN_SIGNS.venus[info.venus.signIdx];
            const venBhavaTe = (typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE.venus[houseOf("venus") - 1]) || BJ_BHAVA_EFFECTS.venus[houseOf("venus") - 1];

            const sevStrong = sevLordDig.cls === "emerald" || sevLordDig.cls === "gold";
            const sevWeak = sevLordDig.cls === "rose";
            const venStrong = venDig.cls === "emerald" || venDig.cls === "gold";
            const venClear = ven48Mal.length === 0;
            const ch23Supported = support7th.length > 0 || support5th.length > 0;

            let verdictEn = "";
            let verdictTe = "";
            if (venStrong && venClear && ch23Supported && sevStrong) {
              verdictEn = "Your chart shows strong support for a happy, stable marriage and family life.";
              verdictTe = "మీ జాతకంలో సంతోషకరమైన, స్థిరమైన దాంపత్య జీవితానికి మరియు కుటుంబ సౌఖ్యానికి మంచి బలం ఉంది.";
            } else if ((venStrong || venClear) && ch23Supported && sevWeak) {
              verdictEn = `Overall, your marriage and family life have good support (love, harmony, and family happiness are well-protected), but there can be some delays, extra effort, or adjustments needed because the planet ruling your marriage house (${sevLord.toUpperCase()}) is in a weak sign.`;
              verdictTe = `మొత్తం మీద మీ దాంపత్య మరియు కుటుంబ జీవితానికి మంచి మద్దతు ఉంది (ప్రేమ, సామరస్యం మరియు కుటుంబ సౌఖ్యం బాగున్నాయి); అయితే మీ వివాహ స్థానాన్ని పాలించే గ్రహం (${pNameTe[sevLord]}) బలహీనమైన రాశిలో ఉండడం వల్ల కొంత ఆలస్యం, ఎక్కువ ఓపిక లేదా సర్దుబాటు అవసరం కావచ్చు.`;
            } else if (venClear && (ch23Supported || sevStrong || venStrong)) {
              verdictEn = "Your marriage outlook is moderately supportive — love and harmony have good points, balanced with a need for patience and mutual care.";
              verdictTe = "మీ వివాహ ఫలితాలు సాధారణంగా అనుకూలంగా ఉన్నాయి — మంచి బలాలు ఉన్నప్పటికీ సహనం, పరస్పర అవగాహన ముఖ్యం.";
            } else {
              verdictEn = "Your marriage indicators are mixed — there are both supportive and challenging factors, so patience, understanding, and checking helpful planetary aspects matter a lot.";
              verdictTe = "మీ జాతకంలో మిశ్రమ ఫలితాలు ఉన్నాయి — మంచి అంశాలు, కొన్ని సవాళ్లూ రెండూ ఉన్నందున ఓపిక, అవగాహన చాలా ముఖ్యం.";
            }

            const goodPtsEn = [];
            const goodPtsTe = [];
            if (venStrong) {
              goodPtsEn.push(`The planet of love & marriage (Venus) is strong in ${BJ_RASIS[info.venus.signIdx].en.split(" ")[0]}, which brings affection, comfort, and stability (Ch. XVIII, XX).`);
              goodPtsTe.push(`ప్రేమ-వివాహ కారకుడైన శుక్రుడు ${BJ_RASIS[info.venus.signIdx].te}లో బలంగా ఉండడం వల్ల దాంపత్యంలో ఆప్యాయత, సుఖం, స్థిరత్వం కలుగుతాయి.`);
            }
            if (venClear) {
              goodPtsEn.push("No harsh planets block your love/marriage planet Venus, so that classical danger is absent (Ch. XXIII-2 clear).");
              goodPtsTe.push("శుక్రునికి 4, 8 స్థానాల్లో పాపగ్రహాలు లేకపోవడం వల్ల వివాహానికి పెద్ద దోషం లేదు (అధ్యా. 23-2 శుభం).");
            }
            if (ch23Supported) {
              goodPtsEn.push(`Gentle, helpful planets (${[...new Set([...support7th, ...support5th])].map(x => x.toUpperCase()).join(", ")}) support your spouse and children houses, bringing family warmth and prosperity (Ch. XXIII-1).`);
              goodPtsTe.push(`శుభగ్రహాలు (${[...new Set([...support7th, ...support5th])].map(x => pNameTe[x]).join(", ")}) భార్యాపుత్ర స్థానాలకు మద్దతు ఇవ్వడం వల్ల కుటుంబ సౌఖ్యం కలుగుతుంది (అధ్యా. 23-1).`);
            }
            if (sevStrong) {
              goodPtsEn.push(`The ruler of your marriage house (${sevLord.toUpperCase()}) is in a strong sign, supporting a steady partnership.`);
              goodPtsTe.push(`మీ వివాహ స్థానాధిపతి (${pNameTe[sevLord]}) బలంగా ఉండడం వల్ల భాగస్వామ్యం స్థిరంగా ఉంటుంది.`);
            }
            if (!goodPtsEn.length) {
              goodPtsEn.push("Look at helpful aspects from gentle planets (Jupiter, Venus, Mercury) onto your marriage house and its ruler (Ch. XXIII-1).");
              goodPtsTe.push("మీ వివాహ స్థానం మరియు దాని అధిపతిపై శుభగ్రహాల (గురు, శుక్ర, బుధ) దృష్టులు ఉన్నాయో చూడాలి.");
            }

            const carePtsEn = [];
            const carePtsTe = [];
            if (!in7thLagna.length) {
              carePtsEn.push(`Your marriage house itself is empty, so your married life depends heavily on ${sevLord.toUpperCase()} (its ruler) and any planets looking at the 7th house (Ch. XXIII-1, XXIV-8).`);
              carePtsTe.push(`మీ 7వ వివాహ స్థానం ఖాళీగా ఉన్నందున ఫలితం పూర్తిగా దాని అధిపతి (${pNameTe[sevLord]}) స్థితి మరియు దృష్టులపై ఆధారపడి ఉంటుంది.`);
            }
            if (sevWeak) {
              carePtsEn.push(`Your marriage-house ruler (${sevLord.toUpperCase()}) is in a weak/uncomfortable sign (${sevLordDig.en}), which can mean delays, differing temperaments, or needing extra patience with your partner — even though its house position (H${sevLordHouse}) still brings positive life results.`);
              carePtsTe.push(`మీ వివాహ స్థానాధిపతి (${pNameTe[sevLord]}) బలహీన రాశిలో (${sevLordDig.te}) ఉండడం వల్ల ఆలస్యం, అభిప్రాయ భేదాలు లేదా భాగస్వామితో ఎక్కువ ఓపిక అవసరం కావచ్చు — అయినా H${sevLordHouse} స్థానం వల్ల శుభ ఫలితాలూ ఉంటాయి.`);
            }
            if (!venClear) {
              carePtsEn.push(`Harsh planets (${ven48Mal.map(x => x.toUpperCase()).join(", ")}) sit in sensitive spots from Venus (4th/8th), so extra care and harmony in married life are advised (Ch. XXIII-2).`);
              carePtsTe.push(`శుక్రునికి 4, 8 స్థానాల్లో పాపగ్రహాలు (${ven48Mal.map(x => pNameTe[x]).join(", ")}) ఉండడం వల్ల దాంపత్యంలో అదనపు జాగ్రత్త, సహనం అవసరం (అధ్యా. 23-2).`);
            }
            if (!carePtsEn.length) {
              carePtsEn.push("No major warning signs stand out in these 3 checks.");
              carePtsTe.push("ఈ 3 ముఖ్య అంశాలలో పెద్దగా ప్రతికూల సూచనలు లేవు.");
            }

            return `<div class="cards-grid">
              <div class="info-card">
                <span class="tag gold">Ch. I, XVIII &amp; XX • ${bi("Box 1: 7th House &amp; 7th Lord", "1వ పెట్టె: 7వ భావం &amp; సప్తమాధిపతి")}</span>
                <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this shows: Your marriage house (7th from Lagna) and the condition of the planet ruling it.", "ఇది చూపేది: మీ వివాహ స్థానం (7వ భావం) మరియు దాని అధిపతి బలాబలాలు.")}</div>
                <div style="font-size:0.84rem;margin-top:0.4rem;color:var(--text-muted);line-height:1.6;">
                  <strong>${bi("7th Sign &amp; Lord:", "7వ రాశి &amp; అధిపతి:")}</strong> ${BJ_RASIS[sevSignIdx].symbol} ${bi(BJ_RASIS[sevSignIdx].en, BJ_RASIS[sevSignIdx].te)} — ${bi("Ruled by", "అధిపతి:")} <strong>${bi(sevLord.toUpperCase(), pNameTe[sevLord])}</strong><br>
                  <strong>${bi("7th Lord Placement:", "సప్తమాధిపతి స్థితి:")}</strong> ${BJ_RASIS[sevLordSign].symbol} ${bi(BJ_RASIS[sevLordSign].en.split(" ")[0], BJ_RASIS[sevLordSign].te)} • H${sevLordHouse} (<span class="tag ${sevLordDig.cls}">${bi(sevLordDig.en, sevLordDig.te)}</span>)<br>
                  <strong>${bi("7th Lord's Book Result:", "సప్తమాధిపతి గ్రంథ ఫలితం:")}</strong> ${bi(sevLordRasiEn, sevLordRasiTe)} | <em>H${sevLordHouse}:</em> ${bi(sevLordBhavaEn, sevLordBhavaTe)}<br>
                  <strong>${bi("Planets Inside 7th House:", "7వ భావంలో ఉన్న గ్రహాలు:")}</strong> ${in7thLagna.length ? in7thLagna.map(p => `${bi(p.toUpperCase(), pNameTe[p])}: ${bi(BJ_BHAVA_EFFECTS[p][6], (typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE[p][6]) || BJ_BHAVA_EFFECTS[p][6])}`).join("<br>") : bi("Empty — no planet sits directly inside 7th; judge by 7th lord above &amp; aspects (Ch. XXIII-1, XXIV-8).", "ఖాళీగా ఉంది — 7వ భావంలో గ్రహాలు లేవు కాబట్టి పైన ఉన్న సప్తమాధిపతి స్థితి మరియు దృష్టుల ద్వారా చూడాలి (అధ్యా. 23-1, 24-8).")}
                </div>
              </div>
              <div class="info-card">
                <span class="tag purple">Ch. II, XVIII, XX, XXIII-2 • ${bi("Box 2: Venus (Marriage Kāraka)", "2వ పెట్టె: శుక్రుడు (కళత్ర కారకుడు)")}</span>
                <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this shows: Venus governs love, marriage, and partner harmony; Ch. XXIII-2 checks if malefics afflict the 4th/8th from Venus.", "ఇది చూపేది: శుక్రుడు ప్రేమ-వివాహాలకు కారకుడు; శుక్రునికి 4, 8లలో పాపగ్రహాలు ఉన్నాయో లేదో చూస్తుంది.")}</div>
                <div style="font-size:0.84rem;margin-top:0.4rem;color:var(--text-muted);line-height:1.6;">
                  <strong>${bi("Venus Placement:", "శుక్ర స్థితి:")}</strong> ${BJ_RASIS[info.venus.signIdx].symbol} ${bi(BJ_RASIS[info.venus.signIdx].en, BJ_RASIS[info.venus.signIdx].te)} • H${houseOf("venus")} (<span class="tag ${venDig.cls}">${bi(venDig.en, venDig.te)}</span>)<br>
                  <strong>${bi("Venus in Sign (Ch. XVIII):", "రాశిలో శుక్ర ఫలం (అధ్యా. 18):")}</strong> ${bi(BJ_PLANETS_IN_SIGNS.venus[info.venus.signIdx], venRasiTe)}<br>
                  <strong>${bi("Venus in House H" + houseOf("venus") + " (Ch. XX):", "H" + houseOf("venus") + " భావ ఫలం (అధ్యా. 20):")}</strong> ${bi(BJ_BHAVA_EFFECTS.venus[houseOf("venus") - 1], venBhavaTe)}<br>
                  <strong>${bi("4th &amp; 8th from Venus (Ch. XXIII-2):", "శుక్రునికి 4, 8 స్థానాలు (అధ్యా. 23-2):")}</strong> ${ven48Mal.length ? bi(`⚠️ Malefic(s) present (${ven48Mal.join(", ")}) — Sl. 2 notes caution if both 4th &amp; 8th from Venus have malefics.`, `⚠️ పాపగ్రహాలు (${ven48Mal.map(x => pNameTe[x]).join(", ")}) ఉన్నాయి (శ్లో. 2 జాగ్రత్త).`) : bi("✅ Clear of malefics in both 4th &amp; 8th from Venus (the Ch. XXIII-2 affliction does not occur).", "✅ శుక్రునికి 4, 8లలో పాపగ్రహాలు లేవు (అధ్యా. 23-2 దోషం లేదు).")}
                </div>
              </div>
              <div class="info-card">
                <span class="tag emerald">Ch. XXIII-1 &amp; XVI • ${bi("Box 3: 7th from Moon &amp; Prosperity", "3వ పెట్టె: చంద్ర సప్తమం &amp; సౌఖ్యం")}</span>
                <div style="font-size:0.78rem;color:var(--cyan-bright);margin-top:0.25rem;">${bi("What this shows: Ch. XXIII-1 checks the 7th &amp; 5th houses from both Lagna and Moon for spouse and children prosperity.", "ఇది చూపేది: లగ్న మరియు చంద్రుల నుండి 7వ, 5వ స్థానాల ద్వారా భార్యాపుత్ర సౌఖ్యాన్ని చూపుతుంది (అధ్యా. 23-1).")}</div>
                <div style="font-size:0.84rem;margin-top:0.4rem;color:var(--text-muted);line-height:1.6;">
                  <strong>${bi("Planets in 7th from Moon:", "చంద్రుని నుండి 7లో గ్రహాలు:")}</strong> ${in7thMoon.length ? bi(in7thMoon.map(x => x.toUpperCase()).join(", "), in7thMoon.map(x => pNameTe[x]).join(", ")) : bi("None", "లేవు")}<br>
                  <strong>${bi("Planets in 5th (Lagna / Moon):", "5వ స్థాన గ్రహాలు (లగ్న / చంద్ర):")}</strong> ${bi((in5thLagna.length ? in5thLagna.map(x => x.toUpperCase()).join(", ") : "None") + " / " + (in5thMoon.length ? in5thMoon.map(x => x.toUpperCase()).join(", ") : "None"), (in5thLagna.length ? in5thLagna.map(x => pNameTe[x]).join(", ") : "లేవు") + " / " + (in5thMoon.length ? in5thMoon.map(x => pNameTe[x]).join(", ") : "లేవు"))}<br>
                  <strong>${bi("Book Rule (Ch. XXIII-1):", "గ్రంథ నియమం (అధ్యా. 23-1):")}</strong> ${support7th.length || support5th.length ? bi(`✅ Supportive benefic / 7th-lord present (${[...new Set([...support7th, ...support5th])].map(x => x.toUpperCase()).join(", ")}) — per Sl. 1, benefics or house-lords in/aspecting 5th/7th from Lagna or Moon grant prosperity of spouse &amp; children.`, `✅ శుభగ్రహం / సప్తమాధిపతి స్థితి (${[...new Set([...support7th, ...support5th])].map(x => pNameTe[x]).join(", ")}) — లగ్న/చంద్ర 5, 7లలో శుభులు లేదా అధిపతులు ఉంటే భార్యాపుత్ర సౌఖ్యం కలుగుతుంది (శ్లో. 1).`) : bi("Check benefic or lord aspects onto the 5th &amp; 7th from Lagna and Moon (Ch. XXIII-1).", "లగ్న-చంద్రుల 5, 7 స్థానాలపై శుభగ్రహాల/అధిపతుల దృష్టిని పరిశీలించాలి (అధ్యా. 23-1).")}
                </div>
              </div>
            </div>
            <div class="reader-guide" style="margin-top:0.85rem;font-size:0.85rem;line-height:1.7;border-color:rgba(244,63,94,0.35);background:rgba(244,63,94,0.06);">
              <strong>${bi("Simple Explanation — What This Means for Your Marriage:", "సులభమైన వివరణ — మీ వివాహం గురించి దీని అర్థం ఏమిటి:")}</strong><br>
              • <strong>${bi("Overall Answer:", "మొత్తం ఫలితం:")}</strong> ${bi(verdictEn, verdictTe)}<br>
              • <strong>${bi("What Is Working Well (Strengths):", "బాగా ఉన్న అంశాలు (బలాలు):")}</strong> ${bi(goodPtsEn.join(" "), goodPtsTe.join(" "))}<br>
              • <strong>${bi("What Needs Care / Patience:", "జాగ్రత్త / ఓపిక అవసరమైన అంశాలు:")}</strong> ${bi(carePtsEn.join(" "), carePtsTe.join(" "))}<br>
              • <strong>${bi("Is This for Now or Lifetime?", "ఇది ఇప్పటికేనా లేక జీవితాంతమా?")}</strong> ${bi("This shows your <strong>lifetime</strong> pattern from your birth chart. <strong>When</strong> marriage events happen depends on your planetary time period (<strong>Daśā</strong>, shown above — especially Venus or your marriage-house ruler).", "ఇది మీ జన్మకుండలి ప్రకారం <strong>జీవితాంతం</strong> ఉండే మూల ఫలితం. వివాహ సంఘటనలు <strong>ఎప్పుడు</strong> జరుగుతాయో పైన చూపిన మీ ప్రస్తుత <strong>దశ</strong> (ప్రత్యేకించి శుక్ర లేదా సప్తమాధిపతి దశ) ద్వారా తెలుస్తుంది.")}
            </div>`;
          })()}
        </div>

        ${striHtml}

        <div class="panel-box" style="margin-top:1.15rem;">
          <h4 style="color:var(--gold-bright);margin-bottom:0.25rem;">${bi("Detected Yogas in Your Chart (Ch. XI–XV)", "మీ కుండలిలోని యోగాలు (అధ్యా. 11–15)")}</h4>
          <div style="font-size:0.8rem;color:var(--cyan-bright);margin-bottom:0.6rem;">
            ${bi("What this means for your life: Nābhasa Yogas (Ch. XII-19) operate throughout your entire life; Candra &amp; Dvigrha Yogas (Ch. VIII-20) ripen during the Daśās of the planets forming them.", "మీ జీవితంలో అర్థం: నాభస యోగాలు జీవితాంతం ఫలిస్తాయి (అధ్యా. 12-19); చంద్ర మరియు ద్విగ్రహ యోగాలు ఆయా గ్రహాల దశలలో ఫలిస్తాయి (అధ్యా. 8-20).")}
          </div>
          <div class="cards-grid">${yogas.map(y => `<div class="info-card"><span class="tag gold">${y.tag}</span><div style="font-size:0.84rem;margin-top:0.25rem;">${bi(y.en, y.te)}</div></div>`).join("")}</div>
        </div>

        <div class="panel-box" style="margin-top:1.15rem;border-color:rgba(56,189,248,0.35);">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.25rem;">${bi("Which Grahas Are Good for You &amp; Why (Ch. I, II, XX)", "మీకు ఏ గ్రహాలు శుభప్రదం &amp; ఎందుకు (అధ్యా. 1, 2, 20)")}</h4>
          <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.65rem;">
            ${bi("What this means: Evaluates all 7 planets strictly by Bṛhat Jātaka rules—Sign Dignity (Ch. I-13/14, XX-11), Vargottama (Ch. XIX-9), Directional Strength/Digbala (Ch. II-19), Lagna-Lord friendship (Ch. II-16), and Satyācārya's House Rule (Ch. XX-10).", "దీని అర్థం: ఉచ్ఛ/స్వ/మిత్ర క్షేత్రాలు (అధ్యా. 1, 20-11), వర్గోత్తమ (19-9), దిగ్బలం (2-19), లగ్నాధిపతి మైత్రి (2-16) మరియు భావ నియమం (20-10) ప్రకారం ఏ గ్రహాలు మీకు శుభప్రదమో చూపుతుంది.")}
          </div>
          <div class="cards-grid">${grahaEval.map(g => `
            <div class="info-card">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">
                <strong>${bi(g.p.toUpperCase(), pNameTe[g.p])} (${bi(BJ_RASIS[g.sIdx].en.split(" ")[0], BJ_RASIS[g.sIdx].te)} • H${g.h})</strong>
                <span class="tag ${g.tagCls}">${bi(g.tierEn, g.tierTe)}</span>
              </div>
              <div style="font-size:0.82rem;margin-top:0.4rem;color:var(--text-muted);line-height:1.55;">
                ${g.posEn.length ? `✅ ${bi(g.posEn.join("; "), g.posTe.join("; "))}<br>` : ""}
                ${g.negEn.length ? `⚠️ ${bi(g.negEn.join("; "), g.negTe.join("; "))}` : ""}
              </div>
            </div>`).join("")}</div>
        </div>

        <div class="panel-box" style="margin-top:1.15rem;border-color:rgba(16,185,129,0.38);">
          <h4 style="color:var(--emerald-accent);margin-bottom:0.35rem;">${bi("Life Periods &amp; Active Daśā Timeline (Ch. VII &amp; VIII)", "జీవిత కాలాలు &amp; ప్రస్తుతం నడుస్తున్న దశ (అధ్యా. 7 &amp; 8)")}</h4>
          <div class="reader-guide" style="margin-bottom:0.75rem;font-size:0.84rem;line-height:1.65;">
            <strong>${bi("How to Read This &amp; Which One to Follow Most (Per Book):", "దీనిని ఎలా చదవాలి &amp; దేనిని ప్రధానంగా అనుసరించాలి (గ్రంథ ప్రకారం):")}</strong><br>
            • <strong>${bi("1. Why Two Timelines? (Current Age: " + ageYears.toFixed(1) + " yrs):", "1. రెండు పట్టికలు ఎందుకు? (ప్రస్తుత వయసు: " + ageYears.toFixed(1) + " సం.):")}</strong> ${bi("#1 (Naisargika, Ch. VIII-9) is the universal human age clock (Moon 0–1, Mars 1–3, Merc 3–12, Ven 12–32, Jup 32–50, Sun 50–70, Sat 70–120). #2 (Personal Chart Daśā, Ch. VII &amp; VIII-1–2) is unique to your birth chart—starting from the strongest of Lagna/Sun/Moon (" + anchorKey.toUpperCase() + ") → Kendras → Paṇapharas → Āpoklimas.", "#1 (నైసర్గిక దశ) అందరికీ ఒకేలా ఉండే వయసు కాలాలు. #2 (వ్యక్తిగత దశ) మీ జన్మకుండలి గ్రహస్థితి ఆధారంగా లెక్కించబడినది.")}<br>
            • <strong>${bi("2. Which One to Follow Most?", "2. దేనిని ప్రధానంగా అనుసరించాలి?")}</strong> ${bi("Follow <strong>#2 (Personal Chart Daśā Order)</strong> as your main timeline for when your chart's yogas and house results happen (Ch. VIII-20). Use <strong>#1 (Naisargika)</strong> as a supporting boost: when both point to the same planet (Ch. VIII-9), that period becomes exceptionally good!", "<strong>#2 (వ్యక్తిగత జాతక దశా క్రమం)</strong> ప్రధానంగా అనుసరించాలి. #1 (నైసర్గిక దశ) తోడుగా ఉండి రెండూ ఒకే గ్రహానికి కలిస్తే ఆ కాలం అత్యంత శుభప్రదమవుతుంది (శ్లో. 9).")}<br>
            • <strong>${bi("3. Click Any Row Below:", "3. ఏ వరుసపైనైనా క్లిక్ చేయండి:")}</strong> ${bi("Click any planet row in either table (Completed, Active Now, or Upcoming) to inspect its exact Ch. VIII, Sl. 12–18 life effects.", "గత, ప్రస్తుత లేదా రాబోయే ఏ గ్రహ దశ ఫలితాలనైనా చూడటానికి ఆ గ్రహ వరుసపై క్లిక్ చేయండి.")}
          </div>
          <div id="dasaOverlapBanner" style="margin-bottom:0.85rem;"></div>
          <div class="split-2">
            <div class="panel-box">
              <h5 style="color:var(--gold-bright);margin-bottom:0.5rem;">1. ${bi("Natural Life-Stage Periods (Ch. VIII, Sl. 9) — Click Row", "నైసర్గిక దశలు (శ్లో. 9) — క్లిక్ చేయండి")}</h5>
              <div class="data-table-wrap"><table class="bj-table">
                <thead><tr><th>${bi("Planet", "గ్రహం")}</th><th>${bi("Ages", "వయసు")}</th><th>${bi("Years", "సంవత్సరాలు")}</th><th>${bi("Status", "స్థితి")}</th></tr></thead>
                <tbody>${naisargikaRows.map(r => `<tr class="naisargika-row" data-planet="${r.k}" data-span="${r.sAge}–${r.eAge} (${r.sYr}–${r.eYr})" style="cursor:pointer;${r.isActive ? "background:rgba(16,185,129,0.18);outline:1.5px solid var(--emerald-accent);" : ""}">
                  <td><strong>${bi(r.en, r.te)}</strong> (${r.yrs}y)</td>
                  <td class="mono">${r.sAge}–${r.eAge}</td>
                  <td class="mono">${r.sYr}–${r.eYr}</td>
                  <td>${r.isActive ? `<span class="tag emerald">🟢 ${bi("ACTIVE NOW", "ప్రస్తుతం నడుస్తున్నది")}</span>` : (ageYears >= r.eAge ? `<span class="tag">${bi("Completed", "పూర్తయింది")}</span>` : `<span class="tag gold">${bi("Upcoming", "రాబోయేది")}</span>`)}</td>
                </tr>`).join("")}</tbody>
              </table></div>
              <div id="naisargikaEffectBox" style="margin-top:0.75rem;padding:0.65rem 0.8rem;border-radius:10px;background:rgba(15,23,42,0.75);border:1px solid rgba(255,255,255,0.1);font-size:0.83rem;color:var(--text-muted);line-height:1.6;"></div>
            </div>
            <div class="panel-box">
              <h5 style="color:var(--cyan-bright);margin-bottom:0.5rem;">2. ${bi("Personal Chart Daśā Order (Ch. VII &amp; VIII) — Click Row", "వ్యక్తిగత జాతక దశా క్రమం — క్లిక్ చేయండి")}</h5>
              <div class="data-table-wrap"><table class="bj-table">
                <thead><tr><th>${bi("Planet &amp; Group", "గ్రహం &amp; వర్గం")}</th><th>${bi("Duration", "కాలం")}</th><th>${bi("Age Span", "వయసు")}</th><th>${bi("Quality &amp; Status", "గుణం &amp; స్థితి")}</th></tr></thead>
                <tbody>${personalDasaRows.map(r => `<tr class="personal-dasa-row" data-planet="${r.k}" data-span="${r.sAge.toFixed(1)}–${r.eAge.toFixed(1)} (${Math.round(birthYr + r.sAge)}–${Math.round(birthYr + r.eAge)})" data-dig="${r.dig.en} • ${r.dig.te}" style="cursor:pointer;${r.isActive ? "background:rgba(16,185,129,0.18);outline:1.5px solid var(--emerald-accent);" : ""}">
                  <td><strong>${bi(r.k.toUpperCase(), pNameTe[r.k])}</strong><br><span style="font-size:0.74rem;color:var(--text-muted);">${r.grpLbl}</span></td>
                  <td class="mono">${r.yrs.toFixed(1)}y</td>
                  <td class="mono">${r.sAge.toFixed(1)}–${r.eAge.toFixed(1)}<br><span style="font-size:0.72rem;color:var(--text-muted);">${Math.round(birthYr + r.sAge)}–${Math.round(birthYr + r.eAge)}</span></td>
                  <td><span class="tag ${r.dig.cls}">${bi(r.dig.en, r.dig.te)}</span><br>${r.isActive ? `<span class="tag emerald">🟢 ${bi("ACTIVE NOW", "ప్రస్తుతం")}</span>` : (ageYears >= r.eAge ? `<span class="tag">${bi("Completed", "పూర్తయింది")}</span>` : `<span class="tag gold">${bi("Upcoming", "రాబోయేది")}</span>`)}</td>
                </tr>`).join("")}</tbody>
              </table></div>
              <div id="personalDasaEffectBox" style="margin-top:0.75rem;padding:0.65rem 0.8rem;border-radius:10px;background:rgba(15,23,42,0.75);border:1px solid rgba(255,255,255,0.1);font-size:0.83rem;color:var(--text-muted);line-height:1.6;"></div>
            </div>
          </div>
        </div>

        <div class="panel-box" style="margin-top:1.15rem;">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.35rem;">${bi("Planets in Signs (Ch. XVII–XVIII) &amp; Bhāvas (Ch. XX)", "రాశి ఫలాలు (అధ్యా. 17–18) &amp; భావ ఫలాలు (అధ్యా. 20)")}</h4>
          <div class="reader-guide" style="margin-bottom:0.75rem;font-size:0.84rem;line-height:1.65;">
            <strong>${bi("How to Read This Table (4 Simple Steps — Per Book):", "ఈ పట్టికను ఎలా చదవాలి (4 సులభ దశలు — గ్రంథ ప్రకారం):")}</strong><br>
            • <strong>${bi("Step 1 — Check Dignity (Column 1 = Volume Dial, Ch. XX-11):", "1. బలం చూడండి (1వ నిలువు వరుస — అధ్యా. 20-11):")}</strong> ${bi("Exalted (100%) → Mūlatrikoṇa (3/4) → Own Sign (1/2) → Friend (1/4) → Neutral → Enemy/Fall (Low). Good results manifest in full when strong (reversed for malefic harm).", "ఉచ్ఛ (100%) → మూలత్రికోణం (3/4) → స్వక్షేత్రం (1/2) → మిత్ర (1/4) → సమ → శత్రు/నీచ (అల్పం). గ్రహం బలంగా ఉంటేనే శుభఫలం పూర్తిగా వస్తుంది.")}<br>
            • <strong>${bi("Step 2 — Rāśi Effect (Column 2 = Character &amp; Skill, Ch. XVIII):", "2. రాశి ఫలం (2వ నిలువు వరుస — అధ్యా. 18):")}</strong> ${bi("Shows how the planet shapes your habits, mindset, and skills in that zodiac sign.", "గ్రహం ఉన్న రాశిని బట్టి మీ ఆలోచన, ప్రవృత్తి మరియు వృత్తి నైపుణ్యాలు ఎలా ఉంటాయో చెబుతుంది.")}<br>
            • <strong>${bi("Step 3 — Bhāva Effect (Column 3 = Life Area, Ch. XX):", "3. భావ ఫలం (3వ నిలువు వరుస — అధ్యా. 20):")}</strong> ${bi("Shows which house/area of life (H1=Body, H2=Wealth, H4=Home, H5=Children, H7=Spouse, H9=Fortune, H10=Career, H11=Gains) is affected. Note Ch. XX-10: benefics help &amp; malefics harm a house, reversed in H6, H8, H12. ('As Sun/Jupiter' means Varāhamihira assigns the same house result as Sun/Jupiter.)", "లగ్నం నుండి ఏ భావం (H1=శరీరం.. H10=వృత్తి, H11=లాభం) ప్రభావితమవుతుందో చెబుతుంది (H6, H8, H12లో శుభ-పాప నియమం వ్యతిరేకం — అధ్యా. 20-10).")}<br>
            • <strong>${bi("Step 4 — When It Happens &amp; Opposite Rows (Ch. VIII-20, 23):", "4. ఎప్పుడు జరుగుతుంది &amp; విరుద్ధ ఫలాలు (అధ్యా. 8-20, 23):")}</strong> ${bi("Each row ripens during that planet's Daśā/Antardaśā—not all at once! Opposite effects from different planets do NOT cancel each other; each manifests in its own Daśā.", "ప్రతి గ్రహ ఫలితం ఆ గ్రహ దశా-అంతర్దశలో మాత్రమే అనుభవానికి వస్తుంది. వేర్వేరు గ్రహాల విరుద్ధ ఫలాలు ఒకదానినొకటి రద్దు చేయవు.")}
          </div>
          <div class="data-table-wrap"><table class="bj-table">
            <thead><tr><th>${bi("Planet &amp; Dignity", "గ్రహం &amp; బలం")}</th><th>${bi("Rāśi Effect (Ch. XVII–XVIII)", "రాశి ఫలం (అధ్యా. 17–18)")}</th><th>${bi("Bhāva Effect (Ch. XX)", "భావ ఫలం (అధ్యా. 20)")}</th></tr></thead>
            <tbody>${["sun","moon","mars","mercury","jupiter","venus","saturn"].map(p => {
              const h = houseOf(p);
              const sIdx = info[p].signIdx;
              const dig = getDignity(p, sIdx);
              const rTe = (typeof BJ_PLANETS_IN_SIGNS_TE !== "undefined" && BJ_PLANETS_IN_SIGNS_TE[p][sIdx]) || BJ_PLANETS_IN_SIGNS[p][sIdx];
              let bEn = BJ_BHAVA_EFFECTS[p][h - 1];
              let bTe = (typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE[p][h - 1]) || bEn;
              if (bEn === "As Sun." || bEn === "As Sun") {
                bEn = `${BJ_BHAVA_EFFECTS.sun[h - 1]} (as Sun, Sl. 9)`;
                bTe = `${(typeof BJ_BHAVA_EFFECTS_TE !== "undefined" && BJ_BHAVA_EFFECTS_TE.sun[h - 1]) || BJ_BHAVA_EFFECTS.sun[h - 1]} (రవి వలె, శ్లో. 9)`;
              }
              return `<tr><td><strong>${bi(p.toUpperCase(), pNameTe[p])}</strong><br><span class="mono" style="font-size:0.75rem;color:var(--text-muted);">${bi(BJ_RASIS[sIdx].en.split(" ")[0], BJ_RASIS[sIdx].te)} • H${h}</span><br><span class="tag ${dig.cls}" style="margin-top:0.2rem;">${bi(dig.en, dig.te)}</span></td><td>${bi(BJ_PLANETS_IN_SIGNS[p][sIdx], rTe)}</td><td>${bi(bEn, bTe)}</td></tr>`;
            }).join("")}</tbody>
          </table></div>
        </div>`;

      // Interactive click handlers for both Daśā tables + dynamic Ch. VIII, Sl. 9 Overlap Banner
      let selN = activeNaisargika || naisargikaRows[0].k;
      let selP = activePersonal || personalDasaRows[0].k;

      function updateOverlapBanner() {
        const banner = document.getElementById("dasaOverlapBanner");
        if (!banner) return;
        const nRow = naisargikaRows.find(r => r.k === selN);
        const pRow = personalDasaRows.find(r => r.k === selP);
        if (!nRow || !pRow) return;

        // Compute all real simultaneous overlaps across lifetime (Ch. VIII, Sl. 9)
        const allOverlaps = [];
        naisargikaRows.forEach(nr => {
          const pr = personalDasaRows.find(x => x.k === nr.k);
          if (!pr) return;
          const oStart = Math.max(nr.sAge, pr.sAge);
          const oEnd = Math.min(nr.eAge, pr.eAge);
          if (oEnd > oStart) {
            allOverlaps.push({ k: nr.k, oStart, oEnd });
          }
        });
        const allOvTextEn = allOverlaps.length
          ? allOverlaps.map(o => `${o.k.toUpperCase()} (ages ${o.oStart.toFixed(1)}–${o.oEnd.toFixed(1)})`).join(", ")
          : "None";
        const allOvTextTe = allOverlaps.length
          ? allOverlaps.map(o => `${pNameTe[o.k]} (${o.oStart.toFixed(1)}–${o.oEnd.toFixed(1)} సం.)`).join(", ")
          : "లేవు";

        if (selN === selP) {
          const oStart = Math.max(nRow.sAge, pRow.sAge);
          const oEnd = Math.min(nRow.eAge, pRow.eAge);
          if (oEnd > oStart) {
            banner.innerHTML = `<div class="reader-guide" style="border-color:var(--emerald-accent);background:rgba(16,185,129,0.12);margin-bottom:0;">
              🌟 <strong>${bi("Ch. VIII, Sl. 9 Simultaneous Overlap:", "అధ్యా. 8, శ్లో. 9 శుభయోగం:")}</strong>
              ${bi(`Both Naisargika and Personal Daśās of <strong>${selP.toUpperCase()}</strong> run together at ages <strong>${oStart.toFixed(1)}–${oEnd.toFixed(1)}</strong> (${Math.round(birthYr + oStart)}–${Math.round(birthYr + oEnd)}) — Varāhamihira states this overlap makes the period very auspicious even if originally unfavorable!`, `<strong>${pNameTe[selP]}</strong> యొక్క నైసర్గిక మరియు వ్యక్తిగత దశలు రెండూ <strong>${oStart.toFixed(1)}–${oEnd.toFixed(1)}</strong> ఏళ్ళ వయసులో (${Math.round(birthYr + oStart)}–${Math.round(birthYr + oEnd)}) కలిసి నడుస్తున్నాయి — ఇది అత్యంత శుభప్రదం (శ్లో. 9)!`)}
            </div>`;
          } else {
            banner.innerHTML = `<div class="reader-guide" style="border-color:var(--gold-primary);background:rgba(245,185,66,0.08);margin-bottom:0;">
              ℹ️ <strong>${bi(`Same Planet Selected (${selP.toUpperCase()}) — Non-Overlapping Ages:`, `ఒకే గ్రహం ఎంచుకోబడింది (${pNameTe[selP]}) — వేర్వేరు కాలాలు:`)}</strong>
              ${bi(`Naisargika is at ages ${nRow.sAge}–${nRow.eAge}, while Personal Daśā is at ages ${pRow.sAge.toFixed(1)}–${pRow.eAge.toFixed(1)}, so they do not overlap simultaneously. Lifetime Sl. 9 overlaps in your chart: ${allOvTextEn}.`, `నైసర్గిక కాలం ${nRow.sAge}–${nRow.eAge} ఏళ్ళు కాగా, వ్యక్తిగత దశ ${pRow.sAge.toFixed(1)}–${pRow.eAge.toFixed(1)} ఏళ్ళలో ఉంది. మీ జాతకంలో కలిసి వచ్చే దశలు: ${allOvTextTe}.`)}
            </div>`;
          }
        } else {
          banner.innerHTML = `<div class="reader-guide" style="border-color:var(--cyan-accent);background:rgba(56,189,248,0.07);margin-bottom:0;">
            ⚖️ <strong>${bi(`Comparing Selected Periods:`, `ఎంచుకున్న దశల పోలిక:`)}</strong>
            ${bi(`Naisargika: <strong>${selN.toUpperCase()}</strong> (ages ${nRow.sAge}–${nRow.eAge}) vs. Personal: <strong>${selP.toUpperCase()}</strong> (ages ${pRow.sAge.toFixed(1)}–${pRow.eAge.toFixed(1)}). Lifetime Ch. VIII-9 overlaps in your chart: <strong>${allOvTextEn}</strong>.`, `నైసర్గిక: <strong>${pNameTe[selN]}</strong> (${nRow.sAge}–${nRow.eAge} సం.) vs. వ్యక్తిగత: <strong>${pNameTe[selP]}</strong> (${pRow.sAge.toFixed(1)}–${pRow.eAge.toFixed(1)} సం.). మీ జాతకంలో కలిసి వచ్చే శుభ దశలు: <strong>${allOvTextTe}</strong>.`)}
          </div>`;
        }
      }

      function bindDasaClicks(rowCls, boxId, defaultPlanet, isPersonal) {
        const rows = outDiv.querySelectorAll("." + rowCls);
        const box = document.getElementById(boxId);
        if (!box || !rows.length) return;
        const showPlanet = (tr) => {
          const p = tr.dataset.planet;
          if (isPersonal) selP = p; else selN = p;
          const span = tr.dataset.span;
          const digInfo = tr.dataset.dig ? ` • ${tr.dataset.dig}` : "";
          rows.forEach(r => { r.style.boxShadow = ""; });
          tr.style.boxShadow = "inset 0 0 0 2px var(--gold-bright)";
          box.innerHTML = `<strong style="color:var(--gold-bright);">${bi(p.toUpperCase() + " Daśā (" + span + ")", pNameTe[p] + " దశ (" + span + ")")}</strong>${digInfo ? `<div style="font-size:0.78rem;color:var(--cyan-bright);margin:0.15rem 0;">${digInfo}</div>` : ""}<br>✅ <strong>${bi("When Auspicious:", "శుభఫలం:")}</strong> ${bi(DASA_EFFECTS_BOOK[p].goodEn, DASA_EFFECTS_BOOK[p].goodTe)}<br>⚠️ <strong>${bi("When Challenging:", "అశుభ సూచన:")}</strong> ${bi(DASA_EFFECTS_BOOK[p].badEn, DASA_EFFECTS_BOOK[p].badTe)}`;
          updateOverlapBanner();
        };
        rows.forEach(tr => tr.addEventListener("click", () => showPlanet(tr)));
        const initRow = Array.from(rows).find(r => r.dataset.planet === defaultPlanet) || rows[0];
        if (initRow) showPlanet(initRow);
      }
      bindDasaClicks("naisargika-row", "naisargikaEffectBox", activeNaisargika, false);
      bindDasaClicks("personal-dasa-row", "personalDasaEffectBox", activePersonal, true);

      const toggleStyleBtn = document.getElementById("btnToggleChartStyle");
      if (toggleStyleBtn) {
        let isNorth = false;
        toggleStyleBtn.addEventListener("click", () => {
          isNorth = !isNorth;
          const sw = document.getElementById("chartsSouthWrap");
          const nw = document.getElementById("chartsNorthWrap");
          if (sw) sw.style.display = isNorth ? "none" : "grid";
          if (nw) nw.style.display = isNorth ? "grid" : "none";
          toggleStyleBtn.innerHTML = isNorth
            ? `🔄 ${bi("Switch to South-Indian 4×4", "దక్షిణ భారత చక్రం చూపు")}`
            : `🔄 ${bi("Switch to North-Indian Diamond", "ఉత్తర భారత చక్రం చూపు")}`;
        });
      }
    }

    document.getElementById("btnGenChart").addEventListener("click", generate);
    const btnPrintPersonal = document.getElementById("btnPrintPersonal");
    if (btnPrintPersonal) {
      btnPrintPersonal.addEventListener("click", () => {
        if (!lastChart) generate();
        document.body.classList.add("printing-personal");
        const cleanup = () => document.body.classList.remove("printing-personal");
        window.addEventListener("afterprint", cleanup, { once: true });
        setTimeout(() => {
          window.print();
          setTimeout(cleanup, 1500);
        }, 50);
      });
    }
    document.getElementById("btnSyncLabs").addEventListener("click", () => {
      if (!lastChart) generate();
      // Sync Ayurdaya inputs (Section 5)
      ["lagna","sun","moon","mars","mercury","jupiter","venus","saturn"].forEach(k => {
        const el = document.getElementById(`ay_${k}`);
        if (el) {
          el.value = lastChart[k].toFixed(2);
          el.dispatchEvent(new Event("input"));
        }
        const avEl = document.getElementById(`av_${k}`);
        if (avEl) {
          avEl.value = (Math.floor(lastChart[k] / 30) % 12) + 1;
          avEl.dispatchEvent(new Event("change"));
        }
      });
      document.getElementById("sec-ch7").scrollIntoView({ behavior: "smooth" });
    });

    generate();
  }

  // =========================================================================
  // 14B. Section 14: Marriage, Spouse & Married Life (Ch. I, II, XX, XXIII, XXIV)
  // =========================================================================
  function initMarriageSection() {
    const body = document.getElementById("marriageSecBody");
    if (!body) return;
    const rows7th = [
      { p: "Sun (రవి)", en: "Humiliation at hands of women (Ch. XX-2).", te: "స్త్రీల వల్ల అవమానం (అధ్యా. 20-2)." },
      { p: "Moon (చంద్రుడు)", en: "Envious, exceedingly in love (Ch. XX-4).", te: "ఈర్ష్య, అధిక ప్రేమానురాగం (అధ్యా. 20-4)." },
      { p: "Mars (కుజుడు)", en: "Humiliation at hands of women (as Sun, Ch. XX-6).", te: "స్త్రీల వల్ల అవమానం (రవి వలె, అధ్యా. 20-6)." },
      { p: "Mercury (బుధుడు)", en: "Knowledge of law and rules of the country (Ch. XX-6).", te: "దేశధర్మం / న్యాయశాస్త్ర పరిజ్ఞానం (అధ్యా. 20-6)." },
      { p: "Jupiter (గురువు)", en: "Excelling his father; noble & wise (Ch. XX-7).", te: "తండ్రిని మించిన గౌరవం, వివేకం (అధ్యా. 20-7)." },
      { p: "Venus (శుక్రుడు)", en: "Promotes quarrels, fond of sexual union (Ch. XX-8).", te: "కలహప్రియత్వం, కామాసక్తి (అధ్యా. 20-8)." },
      { p: "Saturn (శని)", en: "Humiliation at hands of women (as Sun, Ch. XX-9).", te: "స్త్రీల వల్ల అవమానం (రవి వలె, అధ్యా. 20-9)." }
    ];
    const yogasMarriage = [
      { sl: "Ch. XXIII, Sl. 1", en: "Prosperity of wife & sons occurs if 5th/7th from Lagna or Moon is occupied/aspected by a benefic or its lord.", te: "లగ్న/చంద్రుల 5, 7 స్థానాలలో శుభగ్రహం లేదా ఆయా అధిపతులు ఉన్నా/చూసినా భార్యాపుత్ర సౌఖ్యం కలుగుతుంది." },
      { sl: "Ch. XXIII, Sl. 5", en: "Late Marriage: Male + Female planet together with Mars & Saturn in 7th from them aspected by a benefic → marries a young partner at an advanced age.", te: "ఆలస్య వివాహం: స్త్రీ-పురుష గ్రహాలు కలిసి ఉండి, వాటికి 7లో కుజ-శనులు శుభదృష్టితో ఉంటే పెద్దవయసులో వివాహం అవుతుంది." },
      { sl: "Ch. XXIII, Sl. 2–4", en: "Cautions: Malefics in 4th & 8th from Venus; Venus hemmed between malefics; Saturn in Lagna + Venus in 7th Ṛkṣa Sandhi without 5th benefic.", te: "దోషాలు: శుక్రునికి 4, 8లలో పాపులు; పాపకర్తరిలో శుక్రుడు; లగ్నంలో శని + 7లో ఋక్షసంధి శుక్రుడు." },
      { sl: "Ch. XXIV, Sl. 8–12", en: "In a woman's chart, 7th house & setting Navāṁśa reveal husband's nature (Sun=soft, Moon=gentle, Mars=irascible, Merc=learned, Jup=virtuous, Ven=handsome, Sat=old/foolish).", te: "స్త్రీ జాతకంలో 7వ స్థానం & అస్తమ నవాంశ భర్త స్వభావాన్ని తెలుపుతాయి (గురు=ధార్మికుడు, శుక్ర=అందగాడు, బుధ=విద్వాంసుడు)." },
      { sl: "Ch. XXIV, Sl. 14", en: "Benefics in 2nd house → Sumangalī (passes away before husband); Malefic in 8th → widowhood timing via 8th-lord's Navāṁśa period.", te: "2వ స్థానంలో శుభులు → సుమంగళి యోగం; 8లో పాపులు → వైధవ్య సూచన." },
      { sl: "Ch. XXIV, Sl. 16", en: "Applicability: All Strījātaka marriage yogas apply at birth, time of marriage/gift, selection, and query.", te: "వర్తింపు: ఈ వివాహ యోగాలు జన్మ, వివాహ, కన్యాన్వేషణ మరియు ప్రశ్న సమయాలకు వర్తిస్తాయి." }
    ];
    body.innerHTML = `
      <div class="split-2">
        <div class="panel-box">
          <h4 style="color:var(--gold-bright);margin-bottom:0.6rem;">${bi("Planets in the 7th House / Jāmitra (Ch. XX)", "7వ భావంలో (జామిత్రంలో) గ్రహ ఫలాలు (అధ్యా. 20)")}</h4>
          <div class="data-table-wrap"><table class="bj-table">
            <thead><tr><th>${bi("Planet in 7th", "7లో గ్రహం")}</th><th>${bi("Book Result", "గ్రంథ ఫలితం")}</th></tr></thead>
            <tbody>${rows7th.map(r => `<tr><td><strong>${r.p}</strong></td><td>${bi(r.en, r.te)}</td></tr>`).join("")}</tbody>
          </table></div>
        </div>
        <div class="panel-box">
          <h4 style="color:var(--cyan-bright);margin-bottom:0.6rem;">${bi("Key Marriage Yogas Across Bṛhat Jātaka", "బృహజ్జాతకంలోని ముఖ్య వివాహ యోగాలు")}</h4>
          <div style="display:flex;flex-direction:column;gap:0.6rem;">
            ${yogasMarriage.map(y => `<div class="info-card"><span class="tag gold">${y.sl}</span><div style="font-size:0.84rem;color:var(--text-muted);margin-top:0.25rem;">${bi(y.en, y.te)}</div></div>`).join("")}
          </div>
        </div>
      </div>`;
  }

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndNav();
    initPersonalSection();
    initMarriageSection();
    renderZodiacWheel();
    renderRasiDetail();
    initSadvargaAndBhavaTable();
    initSection2();
    initSection3();
    initSection4();
    initSection5();
    initSection6();
    initSection7();
    initSection8();
    initSection9();
    initSection10();
    initSection11();
    initSection12();
    initSection13();
    initSection14();
    initSection15();
    initQuiz();
  });
})();
