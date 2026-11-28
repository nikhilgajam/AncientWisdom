// Suśruta Saṁhitā — 107 Marma Śāstra (Śārīrasthāna Ch. VI) & 101 Yantras / 20 Śastras (Sūtrasthāna Ch. VII–VIII)
(function () {
  "use strict";

  const SUSRUTA_DATA = {
    marmaByStructure: [
      { id: "mamsa", name: "Māṁsa Marma (मांस • మాంస)", count: 11, desc: "Vital points predominantly composed of muscular tissue (e.g., Talahṛdaya 4, Indrabasti 4, Guda 1, Stanarohita 2)." },
      { id: "sira", name: "Sirā Marma (सिरा • సిర)", count: 41, desc: "Vital points dominated by blood vessels (e.g., Nīlā, Manyā, Māṭṛkā, Śṛṅgāṭaka, Apāṅga, Hṛdaya, Nābhi, Pārśvasandhi, Bṛhatī, Lohitākṣa)." },
      { id: "snayu", name: "Snāyu Marma (स्नायु • స్నాయు)", count: 27, desc: "Vital points dominated by ligaments/tendons/nerves (e.g., Āṇi, Viṭapa, Kakṣadhara, Kūrca, Kūrcaśira, Basti, Kṣipra, Aṁsa, Vidhura, Utṣepa)." },
      { id: "asthi", name: "Asthi Marma (अस्थि • అస్థి)", count: 8, desc: "Vital points dominated by bone (Kaṭīkataruṇa 2, Nitamba 2, Aṁsaphalaka 2, Śaṅkha 2)." },
      { id: "sandhi", name: "Sandhi Marma (सन्धि • సంధి)", count: 20, desc: "Vital points at anatomical joints (Jānu, Kūrpara, Sīmanta, Adhipati, Gulpha, Maṇibandha, Kukundara, Āvartta, Kṛkāṭikā)." }
    ],
    marmaByPrognosis: [
      { name: "Sadyaḥ-prāṇahara (सद्यःप्राणहर • తక్షణ ప్రాణహర)", count: 19, element: "Agni (Fire)", desc: "Fatal within 7 days (immediately life-threatening if pierced): Śṛṅgāṭaka 4, Adhipati 1, Śaṅkha 2, Kaṇṭhanāḍī/Mātṛkā 8, Guda 1, Hṛdaya 1, Basti 1, Nābhi 1." },
      { name: "Kālāntara-prāṇahara (कालान्तरप्राणहर • కాలాంతర ప్రాణహర)", count: 33, element: "Soma & Agni", desc: "Fatal over time (2 weeks to 1 month): Talahṛdaya 4, Kṣipra 4, Indrabasti 4, Stanamūla 2, Stanarohita 2, Apastambha 2, Apālāpa 2, Sīmanta 5, Pārśvasandhi 2, Bṛhatī 2, Nitamba 2, Kaṭīkataruṇa 2." },
      { name: "Viśalyaghna (विशल्यघ्न • విశల్యఘ్న)", count: 3, element: "Vāyu (Air)", desc: "Fatal only when an embedded foreign body/arrow is extracted prematurely: Utṣepa 2, Sthapanī 1." },
      { name: "Vaikalyakara (वैकल्यकर • వైకల్యకర)", count: 44, element: "Soma (Water)", desc: "Causes permanent disability/deformity if injured (e.g., Lohitākṣa, Āṇi, Jānu, Ūrvī, Kūrca, Viṭapa, Kakṣadhara, Kūrpara, Aṁsa, Nīlā, Manyā, Phana, Apāṅga, Āvarta, Vidhura, Kṛkāṭikā)." },
      { name: "Rujākara (रुजाकर • రుజాకర)", count: 8, element: "Agni & Vāyu", desc: "Causes severe, persistent pain: Gulpha 2, Maṇibandha 2, Kūrcaśira 4." }
    ],
    marmaRegions: [
      {
        id: "limbs",
        name: "Śākhāgata — 4 Limbs (శాఖాగత • 44 Marmas)",
        count: 44,
        breakdown: "11 in each limb × 4 limbs = 44 (22 Lower + 22 Upper)",
        keyMarmas: "Lower: Kṣipra, Talahṛdaya, Kūrca, Kūrcaśira, Gulpha, Indrabasti, Jānu, Āṇi, Ūrvī, Lohitākṣa, Viṭapa (11×2). Upper: Kṣipra, Talahṛdaya, Kūrca, Kūrcaśira, Maṇibandha, Indrabasti, Kūrpara, Āṇi, Bāhvī/Ūrvī, Lohitākṣa, Kakṣadhara (11×2)."
      },
      {
        id: "trunk",
        name: "Udara-Uras — Chest & Abdomen (ఉదరోరస్ • 12 Marmas)",
        count: 12,
        breakdown: "Abdomen (3) + Thorax/Chest (9) = 12",
        keyMarmas: "Guda (1), Basti (1), Nābhi (1), Hṛdaya (1), Stanamūla (2), Stanarohita (2), Apālāpa (2), Apastambha (2)."
      },
      {
        id: "back",
        name: "Pṛṣṭha — Back & Spine (పృష్ఠ • 14 Marmas)",
        count: 14,
        breakdown: "Posterior trunk & pelvic/scapular pairs = 14",
        keyMarmas: "Kaṭīkataruṇa (2), Kukundara (2), Nitamba (2), Pārśvasandhi (2), Bṛhatī (2), Aṁsaphalaka (2), Aṁsa (2)."
      },
      {
        id: "head",
        name: "Grīvā & Śiraḥ — Neck & Head (గ్రీవా-శిరస్ • 37 Marmas)",
        count: 37,
        breakdown: "Neck (14) + Head/Cranium (23) = 37",
        keyMarmas: "Nīlā (2), Manyā (2), Mātṛkā (8), Kṛkāṭikā (2), Vidhura (2), Phana (2), Apāṅga (2), Āvarta (2), Śaṅkha (2), Utṣepa (2), Sthapanī (1), Śṛṅgāṭaka (4), Sīmanta (5), Adhipati (1)."
      }
    ],
    yantras101: [
      { cls: "1. Svastika Yantra (स्वस्तिक • స్వస్తిక)", count: 24, desc: "Cruciform forceps (18 aṅgulas long, animal/bird-mouth tips) for extracting foreign bodies lodged in bone." },
      { cls: "2. Saṁdaṁśa Yantra (संदंश • సందంశ)", count: 2, desc: "Pincers/tongs (with and without catch/lock, 16 aṅgulas) for extracting splinters from skin, muscle, and vessels." },
      { cls: "3. Tāla Yantra (ताल • తాల)", count: 2, desc: "Flat disc/spoon-like instruments (single & double disc, 12 aṅgulas) for clearing ears, nose, and sinuses." },
      { cls: "4. Nāḍī Yantra (नाडी • నాడీ)", count: 20, desc: "Tubular specula/endoscopes (open at one or both ends) for inspecting internal cavities, fistulas, piles, and cupping." },
      { cls: "5. Śalākā Yantra (शलाका • శలాక)", count: 28, desc: "Probes, bougies, directors & applicators (earthworm, hooded-snake, arrow, spoon, cotton-tipped)." },
      { cls: "6. Upayantra (उपयन्त्र • ఉపయంత్ర)", count: 25, desc: "25 accessory surgical aids: thread, bandages, leather, bark, creepers, cloth, stone, hammer, palm/foot, tongue, teeth, nails, magnet, caustic, fire, medicine." }
    ],
    sastras20: [
      ["Maṇḍalāgra", "Circular-tip knife (scraping, pterygium)"],
      ["Karapatra", "Saw (bone sawing)"],
      ["Vṛddhipatra", "Scalpel / razor-leaf (incision & excision)"],
      ["Nakhaśastra", "Nail-parer / fine blade"],
      ["Mudrikā", "Finger-ring knife (throat incisions)"],
      ["Utpalapatra", "Lotus-petal lancet"],
      ["Ardhadhāra", "Single-edged lancet"],
      ["Sūcī", "Surgical needles (suturing)"],
      ["Kuśapatra", "Kuśa-grass blade (draining abscesses)"],
      ["Āṭīmukha", "Bird-beak blade (bloodletting)"],
      ["Śarārīmukha", "Scissors (cutting & trimming)"],
      ["Antarmukha", "Curved inner-edge bistoury"],
      ["Trikūrcaka", "Three-edged trocar"],
      ["Kuṭhārikā", "Small surgical axe (venesection)"],
      ["Vrīhimukha", "Rice-grain trocar (tapping ascites/hydrocele)"],
      ["Ārā", "Awl (puncturing thick membranes)"],
      ["Vetasapatraka", "Cane-leaf knife (puncturing)"],
      ["Baḍiśa", "Sharp surgical hook (retraction/uvula)"],
      ["Dantaśaṅku", "Dental scaler"],
      ["Eṣaṇī", "Sharp probe (exploring sinuses/fistulas)"]
    ]
  };

  function initSusrutaLab() {
    const bodyEl = document.getElementById("susrutaBody");
    if (!bodyEl) return;

    bodyEl.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:1.25rem; margin-bottom:1.5rem;">
        <div class="card">
          <h4 style="color:var(--emerald-bright); margin-bottom:0.5rem;">Interactive 107 Marma Body Map (Śārīrasthāna Ch. VI)</h4>
          <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:0.75rem;">Click any anatomical region on the figure or buttons below (44 + 12 + 14 + 37 = 107):</p>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.75rem;" id="marmaRegBtns">
            ${SUSRUTA_DATA.marmaRegions.map((r, i) => `
              <button type="button" class="btn-ghost marma-reg-btn" data-reg="${r.id}" style="padding:0.35rem 0.65rem; font-size:0.78rem; ${i === 0 ? "border-color:var(--emerald-bright);color:#fff;" : ""}">
                ${r.id.toUpperCase()} (${r.count})
              </button>
            `).join("")}
          </div>
          <svg viewBox="0 0 220 260" style="width:100%; max-width:220px; display:block; margin:0 auto; background:rgba(6,8,13,0.6); border-radius:12px; border:1px solid rgba(52,211,153,0.25);">
            <!-- Head/Neck (37) -->
            <g class="marma-svg-reg" data-reg="head" style="cursor:pointer;">
              <circle cx="110" cy="36" r="22" fill="rgba(168,85,247,0.35)" stroke="#a855f7" stroke-width="2"/>
              <rect x="100" y="57" width="20" height="14" fill="rgba(168,85,247,0.35)" stroke="#a855f7" stroke-width="1.5"/>
              <text x="110" y="40" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">37</text>
            </g>
            <!-- Chest & Abdomen (12) -->
            <g class="marma-svg-reg" data-reg="trunk" style="cursor:pointer;">
              <rect x="78" y="72" width="64" height="78" rx="10" fill="rgba(16,185,129,0.3)" stroke="#10b981" stroke-width="2"/>
              <text x="110" y="108" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">12</text>
              <text x="110" y="122" text-anchor="middle" fill="#a7f3d0" font-size="8">Chest/Abd</text>
            </g>
            <!-- Back (14) badge -->
            <g class="marma-svg-reg" data-reg="back" style="cursor:pointer;">
              <rect x="148" y="82" width="56" height="34" rx="8" fill="rgba(245,185,66,0.25)" stroke="#f5b942" stroke-width="1.8"/>
              <text x="176" y="98" text-anchor="middle" fill="#ffd97d" font-size="10" font-weight="700">Back: 14</text>
              <text x="176" y="110" text-anchor="middle" fill="#cbd5e1" font-size="7.5">Pṛṣṭha</text>
            </g>
            <!-- Limbs (44) -->
            <g class="marma-svg-reg" data-reg="limbs" style="cursor:pointer;">
              <rect x="44" y="74" width="28" height="72" rx="8" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="1.8"/>
              <rect x="148" y="122" width="28" height="32" rx="8" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="1.8"/>
              <rect x="79" y="154" width="26" height="90" rx="8" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="1.8"/>
              <rect x="115" y="154" width="26" height="90" rx="8" fill="rgba(56,189,248,0.25)" stroke="#38bdf8" stroke-width="1.8"/>
              <text x="58" y="112" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">11</text>
              <text x="92" y="200" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">11</text>
              <text x="128" y="200" text-anchor="middle" fill="#7dd3fc" font-size="9" font-weight="700">11</text>
              <text x="110" y="255" text-anchor="middle" fill="#7dd3fc" font-size="8.5">4 Limbs = 44</text>
            </g>
          </svg>
          <div id="marmaRegDetail" style="margin-top:0.85rem; padding:0.75rem; background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25); border-radius:10px; font-size:0.84rem;"></div>
        </div>

        <div class="card">
          <h4 style="color:var(--gold-bright); margin-bottom:0.5rem;">5 Structural &amp; 5 Prognostic Marma Classes (107 Total)</h4>
          <div style="margin-bottom:0.9rem;">
            <strong style="font-size:0.82rem; color:var(--cyan-accent);">By Tissue Structure (11 + 41 + 27 + 8 + 20 = 107):</strong>
            ${SUSRUTA_DATA.marmaByStructure.map(m => `
              <div style="padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.07); font-size:0.82rem;">
                <strong style="color:#fff;">${m.name} (${m.count})</strong>
                <div style="color:var(--text-muted);">${m.desc}</div>
              </div>
            `).join("")}
          </div>
          <div>
            <strong style="font-size:0.82rem; color:var(--gold-bright);">By Prognosis (19 + 33 + 3 + 44 + 8 = 107):</strong>
            ${SUSRUTA_DATA.marmaByPrognosis.map(p => `
              <div style="padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.07); font-size:0.82rem;">
                <strong style="color:#fff;">${p.name} — ${p.count}</strong> <span style="color:var(--emerald-bright);">[${p.element}]</span>
                <div style="color:var(--text-muted);">${p.desc}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(290px, 1fr)); gap:1.25rem;">
        <div class="card">
          <h4 style="color:var(--emerald-bright); margin-bottom:0.5rem;">101 Yantras — Blunt Instruments (Sūtrasthāna Ch. VII)</h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.65rem;">6 canonical classes (24 + 2 + 2 + 20 + 28 + 25 = 101):</p>
          ${SUSRUTA_DATA.yantras101.map(y => `
            <div style="padding:0.45rem 0; border-bottom:1px solid rgba(255,255,255,0.07); font-size:0.83rem;">
              <strong style="color:var(--gold-bright);">${y.cls} — ${y.count}</strong>
              <div style="color:#cbd5e1;">${y.desc}</div>
            </div>
          `).join("")}
        </div>

        <div class="card">
          <h4 style="color:var(--cyan-accent); margin-bottom:0.5rem;">20 Śastras — Sharp Instruments (Sūtrasthāna Ch. VIII)</h4>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.65rem;">All 20 canonical sharp surgical blades, needles, hooks &amp; probes:</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem; font-size:0.8rem;">
            ${SUSRUTA_DATA.sastras20.map((s, idx) => `
              <div style="padding:0.35rem 0.5rem; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:6px;">
                <strong style="color:#fff;">${idx + 1}. ${s[0]}</strong>
                <div style="color:var(--text-muted); font-size:0.75rem;">${s[1]}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    const detEl = document.getElementById("marmaRegDetail");
    const btns = bodyEl.querySelectorAll(".marma-reg-btn");
    const svgs = bodyEl.querySelectorAll(".marma-svg-reg");

    function showRegion(id) {
      const r = SUSRUTA_DATA.marmaRegions.find(x => x.id === id) || SUSRUTA_DATA.marmaRegions[0];
      btns.forEach(b => {
        const active = b.dataset.reg === r.id;
        b.style.borderColor = active ? "var(--emerald-bright)" : "";
        b.style.color = active ? "#fff" : "";
      });
      detEl.innerHTML = `
        <strong style="color:var(--emerald-bright);">${r.name}</strong>
        <div style="color:var(--gold-bright); margin:0.2rem 0;">${r.breakdown}</div>
        <div style="color:#cbd5e1;"><strong>Named Marmas:</strong> ${r.keyMarmas}</div>
      `;
    }

    btns.forEach(b => b.addEventListener("click", () => showRegion(b.dataset.reg)));
    svgs.forEach(g => g.addEventListener("click", () => showRegion(g.dataset.reg)));
    showRegion("limbs");
  }

  document.addEventListener("DOMContentLoaded", initSusrutaLab);
})();
