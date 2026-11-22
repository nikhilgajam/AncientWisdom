/**
 * Āyurveda (आयुर्वेदः • ఆయుర్వేదము) — The Science of Life Master Engine
 * Authentic Classical Tri-Dosha, Pañca-Mahābhūta, Tri-Guṇa, Agni, Ṣaḍ-Rasa, Ṛtucaryā & Dinacaryā System
 */

// ==========================================
// 1. PRAKṚTI ASSESSMENT DATA (8 DIMENSIONS)
// ==========================================
const PRAKRITI_QUESTIONS = [
  {
    id: "frame",
    q: "1. Body Frame & Bone Structure (अस्थि संस्थान • అస్థి సంస్థానము)",
    opts: [
      { text: "Slim, light, prominent joints, tends to be tall or very short (Vāta • వాతము)", dosha: "vata" },
      { text: "Medium, athletic, well-proportioned, symmetrical build (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Large, sturdy, broad shoulders, solid bones, gains weight easily (Kapha • కఫము)", dosha: "kapha" }
    ]
  },
  {
    id: "skin",
    q: "2. Skin Texture & Complexion (त्वचा स्वरूप • చర్మ స్వరూపము)",
    opts: [
      { text: "Dry, rough, thin, cool to touch, chaps easily in wind (Vāta • వాతము)", dosha: "vata" },
      { text: "Warm, oily T-zone, prone to redness, moles, freckles or inflammation (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Thick, soft, supple, cool, naturally well-hydrated, glowing (Kapha • కఫము)", dosha: "kapha" }
    ]
  },
  {
    id: "digestion",
    q: "3. Digestion & Metabolic Fire (अग्नि प्रकार • అగ్ని ప్రకారము)",
    opts: [
      { text: "Viṣama-Agni (విషమాగ్ని): Irregular, gas, bloating, unpredictable hunger", dosha: "vata" },
      { text: "Tīkṣṇa-Agni (తీక్ష్ణాగ్ని): Intense, sharp, irritable if meals delayed, acid reflux", dosha: "pitta" },
      { text: "Manda-Agni (మందాగ్ని): Slow, steady, can easily skip meals, heavy post-meal", dosha: "kapha" }
    ]
  },
  {
    id: "elimination",
    q: "4. Bowel Habits & Elimination (मल विसर्जन • మల విసర్జన)",
    opts: [
      { text: "Tendency toward constipation, dry, hard or irregular stools (Vāta • వాతము)", dosha: "vata" },
      { text: "Frequent, loose, urgent, yellowish stools, sensitive to spices (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Regular, formed, heavy, slow, thoroughly sluggish (Kapha • కఫము)", dosha: "kapha" }
    ]
  },
  {
    id: "sleep",
    q: "5. Sleep Quality & Dreams (निद्रा स्वरूप • నిద్రా స్వరూపము)",
    opts: [
      { text: "Light, interrupted, restless, dreams of flying, falling, running (Vāta • వాతము)", dosha: "vata" },
      { text: "Moderate (6-7 hrs), wake up alert, fiery, adventurous dreams (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Deep, heavy (8+ hrs), hard to wake up, watery, peaceful dreams (Kapha • కఫము)", dosha: "kapha" }
    ]
  },
  {
    id: "mind",
    q: "6. Mental Temperament & Learning Style (मानस प्रकृति • మానస ప్రకృతి)",
    opts: [
      { text: "Quick to grasp, quick to forget, creative, imaginative, anxious (Vāta • వాతము)", dosha: "vata" },
      { text: "Sharp intellect, analytical, focused, organized, irritable under stress (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Slow to learn but never forgets, patient, calm, resistant to change (Kapha • కఫము)", dosha: "kapha" }
    ]
  },
  {
    id: "weather",
    q: "7. Weather & Climate Sensitivity (ऋतु संवेदनशीलता • ఋతు సంవేదనశీలత)",
    opts: [
      { text: "Averse to cold, windy, dry climates; loves warmth and sunshine (Vāta • వాతము)", dosha: "vata" },
      { text: "Averse to direct sun, excessive heat; thrives in cool breezes (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Averse to cold, damp, rainy weather; thrives in dry heat (Kapha • కఫము)", dosha: "kapha" }
    ]
  },
  {
    id: "speech",
    q: "8. Speech & Social Energy (वाक् प्रवृत्ति • వాక్ ప్రవృత్తి)",
    opts: [
      { text: "Fast, talkative, enthusiastically jumps between topics (Vāta • వాతము)", dosha: "vata" },
      { text: "Direct, precise, articulate, persuasive, commanding (Pitta • పిత్తము)", dosha: "pitta" },
      { text: "Slow, resonant, melodious, thoughtful, few measured words (Kapha • కఫము)", dosha: "kapha" }
    ]
  }
];

// ==========================================
// 2. TRI-GUṆA MENTAL CONSTITUTION QUESTIONS
// ==========================================
const TRIGUNA_QUESTIONS = [
  {
    q: "1. Reaction to Crisis & Stress (సంక్షోభ స్పందన):",
    opts: [
      { text: "Calm, reflective, seeks dharmic clarity and solutions (Sattva • సత్త్వము)", guna: "sattva" },
      { text: "Agitated, aggressive, blames others, impatient to control (Rajas • రజస్సు)", guna: "rajas" },
      { text: "Paralyzed, depressed, avoids reality, sleeps excessively (Tamas • తమస్సు)", guna: "tamas" }
    ]
  },
  {
    q: "2. Truthfulness & Moral Ethics (సత్యం & ధర్మ నిష్ఠ):",
    opts: [
      { text: "Unconditionally truthful, compassionate, forgiving (Sattva • సత్త్వము)", guna: "sattva" },
      { text: "Truthful when convenient or beneficial to ego/goals (Rajas • రజస్సు)", guna: "rajas" },
      { text: "Deceptive, secretive, rationalizes unethical shortcuts (Tamas • తమస్సు)", guna: "tamas" }
    ]
  },
  {
    q: "3. Daily Lifestyle & Mindset (జీవనశైలి & మనస్సు):",
    opts: [
      { text: "Early riser, peaceful meditation, content with simple needs (Sattva • సత్త్వము)", guna: "sattva" },
      { text: "Driven by ambition, status, material accumulation, always busy (Rajas • రజస్సు)", guna: "rajas" },
      { text: "Lethargic, procrastinating, dependent on stimulants/escapism (Tamas • తమస్సు)", guna: "tamas" }
    ]
  }
];

// ==========================================
// 3. DINACARYĀ CIRCADIAN CYCLES
// ==========================================
const DINACHARYA_CYCLES = [
  { periodSa: "कफ काल (Kapha Kāla • కఫ కాలము)", time: "06:00 - 10:00", dosha: "Kapha", focus: "Heavy, sluggish energy. Ideal for vigorous exercise, brisk walk, warm herbal teas, and waking before 6 AM." },
  { periodSa: "पित्त काल (Pitta Kāla • పిత్త కాలము)", time: "10:00 - 14:00", dosha: "Pitta", focus: "Maximum digestive fire (Jaṭharāgni). Consume the largest, most nutritious meal of the day; high focus analytical work." },
  { periodSa: "वात काल (Vāta Kāla • వాత కాలము)", time: "14:00 - 18:00", dosha: "Vata", focus: "Peak creative and mental agility. Ideal for communication, artistic projects, philosophical study, and strategic planning." },
  { periodSa: "कफ काल (Kapha Kāla • కఫ కాలము)", time: "18:00 - 22:00", dosha: "Kapha", focus: "Grounding, cooling down. Light easy-to-digest dinner before 7:30 PM, electronic detox, relaxing reading, sleep by 10 PM." },
  { periodSa: "पित्त काल (Pitta Kāla • పిత్త కాలము)", time: "22:00 - 02:00", dosha: "Pitta", focus: "Internal cellular detox, liver enzyme cleansing, and subconscious dream processing. Must be deep asleep." },
  { periodSa: "ब्राह्म मुहूर्त व वात काल (Brāhma Muhūrta & Vāta • బ్రాహ్మీ ముహూర్తం)", time: "02:00 - 06:00", dosha: "Vata", focus: "Brāhma Muhūrta (04:30 AM). Sublime spiritual lucidity, meditation, prāṇāyāma, and awakening in sacred silence." }
];

// ==========================================
// 4. ṚTUCARYĀ (6 SEASONS PROTOCOL)
// ==========================================
const RTUCARYA_DATA = [
  {
    nameSa: "शिशिर (Śiśira • శిశిర ఋతువు)",
    months: "Mid-Jan to Mid-Mar (Māgha - Phālguna)",
    nature: "Late Winter (Cold & Dewy)",
    doshaStatus: "Kapha Accumulation (Sañcaya • సంచయము), Strong Agni",
    diet: "Sweet, sour, salty warm unctuous foods, ginger, sesame, warm milk with saffron."
  },
  {
    nameSa: "वसन्त (Vasanta • వసంత ఋతువు)",
    months: "Mid-Mar to Mid-May (Caitra - Vaiśākha)",
    nature: "Spring (Flowering, Thawing)",
    doshaStatus: "Kapha Aggravation (Prakopa • ప్రకోపము), Weakening Agni",
    diet: "Bitter, pungent, astringent foods, honey, barley, neem; avoid heavy dairy and daytime sleep."
  },
  {
    nameSa: "ग्रीष्म (Grīṣma • గ్రీష్మ ఋతువు)",
    months: "Mid-May to Mid-Jul (Jyeṣṭha - Āṣāḍha)",
    nature: "Summer (Intense Heat)",
    doshaStatus: "Vāta Accumulation (Sañcaya), Pitta Onset, Low Agni",
    diet: "Sweet, cold, liquid foods, coconut water, sattu, rice, ghee; avoid excessively salty, pungent spices."
  },
  {
    nameSa: "वर्षा (Varṣā • వర్ష ఋతువు)",
    months: "Mid-Jul to Mid-Sep (Śrāvaṇa - Bhādrapada)",
    nature: "Monsoon (Rain & Humidity)",
    doshaStatus: "Vāta Aggravation (Prakopa • ప్రకోపము), Pitta Accumulation",
    diet: "Warm, freshly cooked foods, rock salt, ginger, sour buttermilk, boiled water; protect digestive fire."
  },
  {
    nameSa: "शरद् (Śarad • శరదృతువు)",
    months: "Mid-Sep to Mid-Nov (Āśvina - Kārtika)",
    nature: "Autumn (Clear Skies, Scorching Sun)",
    doshaStatus: "Pitta Aggravation (Prakopa • ప్రకోపము), Vāta Pacification",
    diet: "Sweet, bitter, astringent foods, ghee, amla, cooling herbs; avoid spicy, fermented, oily foods."
  },
  {
    nameSa: "हेमन्त (Hemanta • హేమంత ఋతువు)",
    months: "Mid-Nov to Mid-Jan (Mārgaśīrṣa - Pauṣa)",
    nature: "Early Winter (Pleasant Cold)",
    doshaStatus: "Pitta Pacification, High Digestive Fire (Mahā-Agni)",
    diet: "Nourishing, heavy, sweet, sour, salty foods, new grains, nuts, sesame oil massage (Abhyaṅga)."
  }
];

// --- Prakriti Assessment Engine ---
const userAnswers = {};

function initPrakritiQuiz() {
  const container = document.getElementById("prakritiQuestionsList");
  if (!container) return;
  container.innerHTML = "";

  PRAKRITI_QUESTIONS.forEach((q, qIdx) => {
    const row = document.createElement("div");
    row.className = "quiz-question-row";
    row.style.marginBottom = "1.25rem";
    row.style.background = "rgba(255,255,255,0.02)";
    row.style.padding = "1rem";
    row.style.borderRadius = "12px";
    row.style.border = "1px solid rgba(255,255,255,0.06)";

    const title = document.createElement("div");
    title.style.fontWeight = "700";
    title.style.color = "var(--emerald-bright)";
    title.style.fontSize = "0.92rem";
    title.style.marginBottom = "0.6rem";
    title.textContent = q.q;
    row.appendChild(title);

    const optsWrap = document.createElement("div");
    optsWrap.style.display = "flex";
    optsWrap.style.flexDirection = "column";
    optsWrap.style.gap = "0.45rem";

    q.opts.forEach((opt, optIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn";
      btn.style.textAlign = "left";
      btn.style.padding = "0.55rem 0.85rem";
      btn.style.borderRadius = "8px";
      btn.style.border = "1px solid rgba(255,255,255,0.1)";
      btn.style.background = "rgba(0,0,0,0.3)";
      btn.style.color = "#e2e8f0";
      btn.style.fontSize = "0.85rem";
      btn.style.cursor = "pointer";
      btn.style.transition = "all 0.2s ease";
      btn.textContent = opt.text;

      btn.addEventListener("click", () => {
        const siblings = optsWrap.querySelectorAll(".quiz-opt-btn");
        siblings.forEach(b => {
          b.style.background = "rgba(0,0,0,0.3)";
          b.style.borderColor = "rgba(255,255,255,0.1)";
          b.style.color = "#e2e8f0";
        });
        btn.style.background = "rgba(52, 211, 153, 0.25)";
        btn.style.borderColor = "var(--emerald-bright)";
        btn.style.color = "#fff";
        userAnswers[q.id] = opt.dosha;
        computePrakriti();
      });

      optsWrap.appendChild(btn);
    });

    row.appendChild(optsWrap);
    container.appendChild(row);
  });
}

function computePrakriti() {
  let counts = { vata: 0, pitta: 0, kapha: 0 };
  let answered = 0;

  for (let k in userAnswers) {
    counts[userAnswers[k]]++;
    answered++;
  }

  if (answered === 0) return;

  const total = answered;
  const vataPct = Math.round((counts.vata / total) * 100);
  const pittaPct = Math.round((counts.pitta / total) * 100);
  const kaphaPct = 100 - (vataPct + pittaPct);

  const vBar = document.getElementById("vataBar");
  const pBar = document.getElementById("pittaBar");
  const kBar = document.getElementById("kaphaBar");
  const vText = document.getElementById("vataPct");
  const pText = document.getElementById("pittaPct");
  const kText = document.getElementById("kaphaPct");

  if (vBar) vBar.style.width = `${vataPct}%`;
  if (pBar) pBar.style.width = `${pittaPct}%`;
  if (kBar) kBar.style.width = `${kaphaPct}%`;

  if (vText) vText.textContent = `${vataPct}%`;
  if (pText) pText.textContent = `${pittaPct}%`;
  if (kText) kText.textContent = `${kaphaPct}%`;

  const titleEl = document.getElementById("prakritiResultTitle");
  const adviceEl = document.getElementById("prakritiAdvice");

  let maxDosha = "vata";
  let maxVal = counts.vata;
  if (counts.pitta > maxVal) { maxDosha = "pitta"; maxVal = counts.pitta; }
  if (counts.kapha > maxVal) { maxDosha = "kapha"; maxVal = counts.kapha; }

  let prakritiName = "";
  let advice = "";

  if (maxDosha === "vata") {
    prakritiName = "Vāta Dominant (वात प्रधान • వాత ప్రధాన ప్రకృతి)";
    advice = "Your biological temperament is guided by the kinetic energy of Wind & Ether. You possess brilliant creativity and speed. To preserve vitality: prioritize warm, cooked, nourishing meals with healthy fats (ghee, sesame oil); maintain steady daily routines; practice slow grounding yoga; and avoid cold, dry, carbonated foods.";
  } else if (maxDosha === "pitta") {
    prakritiName = "Pitta Dominant (पित्त प्रधान • పిత్త ప్రధాన ప్రకృతి)";
    advice = "Your constitution is ignited by the metabolic transformation of Fire & Water. You possess sharp intellect, leadership, and athletic metabolism. To preserve vitality: consume sweet, cooling, bitter foods; avoid excessive chilies, sour ferments, and prolonged midday sun; cultivate patience and meditation.";
  } else {
    prakritiName = "Kapha Dominant (कफ प्रधान • కఫ ప్రధాన ప్రకృతి)";
    advice = "Your constitution is fortified by the structural stability of Earth & Water. You possess profound endurance, calm patience, and natural immunity. To preserve vitality: engage in daily vigorous exercise; favor light, warm, pungent, and bitter foods with warming spices (ginger, black pepper); and wake up before sunrise.";
  }

  if (titleEl) titleEl.textContent = `${prakritiName} (${answered}/8 dimensions assessed)`;
  if (adviceEl) adviceEl.textContent = advice;
}

// --- Tri-Guna Mental Quiz Engine ---
const trigunaAnswers = {};
function initTrigunaQuiz() {
  const container = document.getElementById("trigunaQuestionsList");
  if (!container) return;
  container.innerHTML = "";

  TRIGUNA_QUESTIONS.forEach((q, idx) => {
    const box = document.createElement("div");
    box.style.background = "rgba(255,255,255,0.02)";
    box.style.padding = "0.85rem";
    box.style.borderRadius = "10px";
    box.style.marginBottom = "0.75rem";
    box.style.border = "1px solid rgba(255,255,255,0.06)";

    const title = document.createElement("div");
    title.style.fontSize = "0.88rem";
    title.style.fontWeight = "600";
    title.style.color = "var(--gold-bright)";
    title.style.marginBottom = "0.4rem";
    title.textContent = q.q;
    box.appendChild(title);

    const optsWrap = document.createElement("div");
    optsWrap.style.display = "flex";
    optsWrap.style.flexDirection = "column";
    optsWrap.style.gap = "0.35rem";

    q.opts.forEach(opt => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn";
      btn.style.textAlign = "left";
      btn.style.padding = "0.45rem 0.75rem";
      btn.style.borderRadius = "6px";
      btn.style.border = "1px solid rgba(255,255,255,0.08)";
      btn.style.background = "rgba(0,0,0,0.3)";
      btn.style.color = "#cbd5e1";
      btn.style.fontSize = "0.82rem";
      btn.style.cursor = "pointer";
      btn.textContent = opt.text;

      btn.addEventListener("click", () => {
        const siblings = optsWrap.querySelectorAll(".quiz-opt-btn");
        siblings.forEach(b => {
          b.style.background = "rgba(0,0,0,0.3)";
          b.style.borderColor = "rgba(255,255,255,0.08)";
        });
        btn.style.background = "rgba(245, 185, 66, 0.2)";
        btn.style.borderColor = "var(--gold-bright)";
        trigunaAnswers[idx] = opt.guna;
        computeTriguna();
      });

      optsWrap.appendChild(btn);
    });

    box.appendChild(optsWrap);
    container.appendChild(box);
  });
}

function computeTriguna() {
  let counts = { sattva: 0, rajas: 0, tamas: 0 };
  let answered = 0;
  for (let k in trigunaAnswers) {
    counts[trigunaAnswers[k]]++;
    answered++;
  }
  if (answered === 0) return;

  const total = answered;
  const sPct = Math.round((counts.sattva / total) * 100);
  const rPct = Math.round((counts.rajas / total) * 100);
  const tPct = 100 - (sPct + rPct);

  const resEl = document.getElementById("trigunaResult");
  if (resEl) {
    resEl.innerHTML = `
      <div style="font-size:0.92rem; font-weight:700; color:#fff; margin-bottom:0.4rem;">
        Mental Temperament (मानस प्रकृति): Sattva ${sPct}% • Rajas ${rPct}% • Tamas ${tPct}%
      </div>
      <div style="font-size:0.85rem; color:#e2e8f0; line-height:1.5;">
        ${counts.sattva >= counts.rajas && counts.sattva >= counts.tamas
          ? "Sāttvika Mind (సాత్విక బుద్ధి): Grounded in peace, compassion, spiritual clarity, and emotional equilibrium."
          : counts.rajas >= counts.tamas
          ? "Rājasika Mind (రాజసిక బుద్ధి): Dynamic, highly ambitious, prone to restless impatience and attachment to results."
          : "Tāmasika Mind (తామసిక బుద్ధి): Sluggish, prone to procrastination, needing energizing yoga and conscious movement."}
      </div>
    `;
  }
}

// --- Dinacharya Visualizer ---
function renderDinacharya() {
  const grid = document.getElementById("dinacharyaGrid");
  if (!grid) return;

  const now = new Date();
  const currentHour = now.getHours();

  grid.innerHTML = DINACHARYA_CYCLES.map(c => {
    const [startStr, endStr] = c.time.split(" - ");
    const startHour = parseInt(startStr.split(":")[0], 10);
    const endHour = parseInt(endStr.split(":")[0], 10);

    let isActive = false;
    if (startHour > endHour) {
      isActive = (currentHour >= startHour || currentHour < endHour);
    } else {
      isActive = (currentHour >= startHour && currentHour < endHour);
    }

    return `
      <div class="time-card ${isActive ? 'active-phase' : ''}" style="background:rgba(255,255,255,0.03); border:1px solid ${isActive ? 'var(--emerald-bright)' : 'rgba(255,255,255,0.08)'}; border-radius:12px; padding:1.25rem; position:relative;">
        ${isActive ? '<span style="position:absolute; top:10px; right:12px; font-size:0.68rem; background:rgba(52,211,153,0.3); color:var(--emerald-bright); border:1px solid var(--emerald-bright); padding:2px 8px; border-radius:10px; font-weight:700; text-transform:uppercase;">● Active Now</span>' : ''}
        <div style="font-size:0.82rem; color:var(--gold-bright); font-family:var(--font-mono); font-weight:700; margin-bottom:0.25rem;">${c.time}</div>
        <h4 style="font-family:var(--font-display); font-size:1.1rem; color:#fff; margin-bottom:0.35rem;">${c.periodSa}</h4>
        <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-muted); font-weight:600; margin-bottom:0.6rem;">Ruling Dosha: <strong>${c.dosha}</strong></div>
        <p style="font-size:0.85rem; color:#e2e8f0; line-height:1.55; margin:0;">${c.focus}</p>
      </div>
    `;
  }).join("");
}

// --- Rtucarya Visualizer ---
function renderRtucarya() {
  const container = document.getElementById("rtucaryaGrid");
  if (!container) return;

  const currentMonth = new Date().getMonth() + 1; // 1-12
  // Approximate season map:
  // 1-2: Shishira, 3-4: Vasanta, 5-6: Grishma, 7-8: Varsha, 9-10: Sharad, 11-12: Hemanta
  let activeIdx = 0;
  if (currentMonth === 1 || currentMonth === 2) activeIdx = 0;
  else if (currentMonth === 3 || currentMonth === 4) activeIdx = 1;
  else if (currentMonth === 5 || currentMonth === 6) activeIdx = 2;
  else if (currentMonth === 7 || currentMonth === 8) activeIdx = 3;
  else if (currentMonth === 9 || currentMonth === 10) activeIdx = 4;
  else activeIdx = 5;

  container.innerHTML = RTUCARYA_DATA.map((r, idx) => `
    <div class="card" style="border-color:${idx === activeIdx ? 'var(--emerald-bright)' : 'rgba(255,255,255,0.08)'}; background:${idx === activeIdx ? 'linear-gradient(145deg, rgba(20, 35, 28, 0.95), rgba(12, 22, 18, 0.95))' : 'var(--bg-card)'};">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
        <span class="card-subtitle" style="color:var(--gold-bright);">${r.months}</span>
        ${idx === activeIdx ? '<span style="font-size:0.68rem; background:rgba(52,211,153,0.3); color:var(--emerald-bright); border:1px solid var(--emerald-bright); padding:2px 6px; border-radius:6px; font-weight:700;">ACTIVE SEASON</span>' : ''}
      </div>
      <h4 class="card-title" style="color:#fff; font-size:1.15rem; margin-bottom:0.35rem;">${r.nameSa}</h4>
      <div style="font-size:0.82rem; color:var(--cyan-accent); font-weight:600; margin-bottom:0.5rem;">${r.nature}</div>
      <div style="font-size:0.8rem; color:#f8fafc; margin-bottom:0.5rem; background:rgba(0,0,0,0.35); padding:0.4rem 0.6rem; border-radius:6px;">
        <strong>Doshic Stage:</strong> ${r.doshaStatus}
      </div>
      <p style="font-size:0.84rem; color:var(--text-muted); line-height:1.55; margin:0;">
        <strong>Dietary Focus:</strong> ${r.diet}
      </p>
    </div>
  `).join("");
}

// --- Safe ScrollSpy ---
function initAyurvedaScrollSpy() {
  const navContainer = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  if (!navItems.length || !sections.length) return;

  function setActive(id) {
    navItems.forEach(item => {
      const href = item.getAttribute("href");
      if (href === `#${id}`) {
        item.classList.add("active");
        if (navContainer) {
          const itemLeft = item.offsetLeft;
          const itemWidth = item.offsetWidth;
          const containerWidth = navContainer.clientWidth;
          navContainer.scrollTo({
            left: itemLeft - (containerWidth / 2) + (itemWidth / 2),
            behavior: "smooth"
          });
        }
      } else {
        item.classList.remove("active");
      }
    });
  }

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= docHeight - 50) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    const headerOffset = 90;
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

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      const href = item.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          navItems.forEach(n => n.classList.remove("active"));
          item.classList.add("active");
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - 65;
          window.scrollTo({ top: targetTop, behavior: "smooth" });
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

// --- DOM Initializer ---
document.addEventListener("DOMContentLoaded", () => {
  initPrakritiQuiz();
  initTrigunaQuiz();
  renderDinacharya();
  renderRtucarya();
  initAyurvedaScrollSpy();
});
