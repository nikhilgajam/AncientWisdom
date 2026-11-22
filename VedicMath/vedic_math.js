/**
 * Vedic Mathematics (वैदिकगणितम्) — Beginner to Pro Master Computational Engine
 * Reconstructed from Atharvaveda appendices by Swami Bharati Krishna Tirtha (1884–1960).
 */

// ==========================================
// CANONICAL DATA: 16 PRIMARY SŪTRAS
// ==========================================
const VEDIC_SUTRAS = [
  {
    num: 1,
    nameSa: "एकाधिकेन पूर्वेण",
    nameTe: "ఏకాధికేన పూర్వేణ",
    nameEn: "Ekādhikena Pūrveṇa",
    meaning: "By one more than the previous one.",
    appliesTo: "Squaring numbers ending in 5, recurring decimals (1/19, 1/29), multiplication when units sum to 10.",
    formula: "n5² = [n × (n + 1)] | 25"
  },
  {
    num: 2,
    nameSa: "निखिलं नवतश्चरमं दशतः",
    nameTe: "నిఖిలం నవతశ్చరమం దశతః",
    nameEn: "Nikhilaṁ Navataścaramaṁ Daśataḥ",
    meaning: "All from 9 and the last from 10.",
    appliesTo: "Multiplication and division of numbers near powers of 10 (bases 10, 100, 1000).",
    formula: "Base B: (B - a)(B - b) = (B - a - b) | (a × b)"
  },
  {
    num: 3,
    nameSa: "ऊर्ध्वतिर्यग्भ्याम्",
    nameTe: "ఊర్ధ్వతిర్యగ్భ్యామ్",
    nameEn: "Ūrdhva-Tiryagbhyām",
    meaning: "Vertically and crosswise.",
    appliesTo: "Universal multiplication algorithm for numbers and polynomials of any length.",
    formula: "Cross-product matrix summation column by column."
  },
  {
    num: 4,
    nameSa: "परावर्त्य योजयेत्",
    nameTe: "పరావర్త్య యోజయేత్",
    nameEn: "Parāvartya Yojayet",
    meaning: "Transpose and apply.",
    appliesTo: "Algebraic division, solving linear systems, matrix inversion.",
    formula: "ax + b = 0 ⇒ x = -b/a"
  },
  {
    num: 5,
    nameSa: "शून्यं साम्यसमुच्चये",
    nameTe: "శూన్యం సామ్యసముచ్చయే",
    nameEn: "Śūnyaṁ Sāmyasamuccaye",
    meaning: "When the sum is the same, that sum is zero.",
    appliesTo: "Solving complex algebraic equations with symmetrical terms.",
    formula: "If ∑f(x) = ∑g(x) with identical sums, set expression = 0."
  },
  {
    num: 6,
    nameSa: "आनुरूप्ये शून्यमन्यत्",
    nameTe: "ఆనురూప్యే శూన్యమన్యత్",
    nameEn: "Ānurūpye Śūnyamanyat",
    meaning: "If one is in ratio, the other is zero.",
    appliesTo: "Solving simultaneous equations when coefficients are proportional.",
    formula: "If a₁/a₂ = c₁/c₂, then y = 0."
  },
  {
    num: 7,
    nameSa: "संकलनव्यवकलनाभ्याम्",
    nameTe: "సంకలన-వ్యవకలనాభ్యామ్",
    nameEn: "Saṅkalana-Vyavakalanābhyām",
    meaning: "By addition and by subtraction.",
    appliesTo: "Solving simultaneous equations where x and y coefficients are interchanged.",
    formula: "Add eq₁ + eq₂ and subtract eq₁ - eq₂."
  },
  {
    num: 8,
    nameSa: "पूरणापूरणाभ्याम्",
    nameTe: "పూరణాపూరణాభ్యామ్",
    nameEn: "Pūraṇāpūraṇābhyām",
    meaning: "By completion or non-completion.",
    appliesTo: "Completing the square in quadratics and cubic factorization.",
    formula: "x² + 2ax + a² = (x + a)²"
  },
  {
    num: 9,
    nameSa: "चलनकलनाभ्याम्",
    nameTe: "చలన-కలనాభ్యామ్",
    nameEn: "Calana-Kalanābhyām",
    meaning: "Differences and Similarities (Calculus / Motion).",
    appliesTo: "Finding roots of quadratic and higher degree polynomials using derivatives.",
    formula: "Roots of f(x) via f'(x) differential slopes."
  },
  {
    num: 10,
    nameSa: "यावदूनम्",
    nameTe: "యావదూనమ్",
    nameEn: "Yāvadūnam",
    meaning: "Whatever the extent of its deficiency.",
    appliesTo: "Squaring and cubing numbers close to bases of 10.",
    formula: "(Base - d)² = (Base - 2d) | d²"
  },
  {
    num: 11,
    nameSa: "व्यष्टिसमष्टिः",
    nameTe: "వ్యష్టిసమష్టిః",
    nameEn: "Vyaṣṭisamaṣṭiḥ",
    meaning: "Part and Whole.",
    appliesTo: "Finding roots through average parts and composite variables.",
    formula: "Decomposing aggregate terms into discrete constituents."
  },
  {
    num: 12,
    nameSa: "शेषाण्यङ्केन चरमेण",
    nameTe: "శేషాణ్యంకేన చరమేణ",
    nameEn: "Śeṣāṇyaṅkena Carameṇa",
    meaning: "The remainders by the last digit.",
    appliesTo: "Conversion of common fractions into recurring decimals.",
    formula: "Multiplying recurring remainders by final divisor."
  },
  {
    num: 13,
    nameSa: "सोपान्त्यद्वयमन्त्यम्",
    nameTe: "సోపాంత్యద్వయమంత్యమ్",
    nameEn: "Sopāntyadvayamantyam",
    meaning: "The ultimate and twice the penultimate.",
    appliesTo: "Special fraction simplifications and algebraic integrations.",
    formula: "x + 2y + z form reductions."
  },
  {
    num: 14,
    nameSa: "एकन्यूनेन पूर्वेण",
    nameTe: "ఏకన్యూనేన పూర్వేణ",
    nameEn: "Ekanyūnena Pūrveṇa",
    meaning: "By one less than the previous one.",
    appliesTo: "Multiplying any number by 9, 99, 999, etc.",
    formula: "N × (10ᵏ - 1) = (N - 1) | [10ᵏ - 1 - (N - 1)]"
  },
  {
    num: 15,
    nameSa: "गुणितसमुच्चयः",
    nameTe: "గుణితసముచ్చయః",
    nameEn: "Guṇitasamuccayaḥ",
    meaning: "The product of the sum is the sum of the products.",
    appliesTo: "Verifying factorization and arithmetic accuracy (Digital Root Check).",
    formula: "DigitSum(A × B) = DigitSum(DigitSum(A) × DigitSum(B))"
  },
  {
    num: 16,
    nameSa: "गुणकसमुच्चयः",
    nameTe: "గుణకసముచ్చయః",
    nameEn: "Guṇakasamuccayaḥ",
    meaning: "All the multipliers.",
    appliesTo: "Factorization of higher-order homogeneous quadratics and cubics.",
    formula: "Product of coefficients theorem."
  }
];

// ==========================================
// CANONICAL DATA: 13 UPA-SŪTRAS (SUB-COROLLARIES)
// ==========================================
const VEDIC_UPASUTRAS = [
  {
    num: 1,
    nameSa: "आनुरूप्येण",
    nameTe: "ఆనురూప్యేణ",
    nameEn: "Ānurūpyeṇa",
    meaning: "Proportionately.",
    appliesTo: "Working with working sub-bases in multiplication (e.g., base 50 as 100/2, base 200 as 2×100)."
  },
  {
    num: 2,
    nameSa: "शिष्यते शेषसंज्ञः",
    nameTe: "శిష్యతే శేషసంజ్ఞః",
    nameEn: "Śiṣyate Śeṣasaṁjñaḥ",
    meaning: "The remainder remains constant.",
    appliesTo: "Modulo arithmetic and recurring decimals."
  },
  {
    num: 3,
    nameSa: "आद्यमाद्येनान्त्यमन्त्येन",
    nameTe: "ఆద్యమాద్యేనాంత్యమంత్యేన",
    nameEn: "Ādyamādyenāntyamantyena",
    meaning: "First by first and last by last.",
    appliesTo: "Factorization of simple quadratics and verification of terms."
  },
  {
    num: 4,
    nameSa: "केवलैः सप्तकं गुण्यात्",
    nameTe: "కేవలైః సప్తకం గుణ్యాత్",
    nameEn: "Kevalaiḥ Saptakaṁ Guṇyāt",
    meaning: "For 7 the multiplier is 143.",
    appliesTo: "Converting fractions with denominator 7 into decimal equivalents (1/7 = 0.142857...)."
  },
  {
    num: 5,
    nameSa: "वेष्टनम्",
    nameTe: "వేష్టనమ్",
    nameEn: "Veṣṭanam",
    meaning: "By Osculation (Ekādhika / Ekanyūna).",
    appliesTo: "Universal divisibility testing for any prime number (7, 13, 17, 19, 23, 29...)."
  },
  {
    num: 6,
    nameSa: "यावदूनं तावदूनम्",
    nameTe: "యావదూనం తావదూనమ్",
    nameEn: "Yāvadūnaṁ Tāvadūnam",
    meaning: "Lessen by the deficiency.",
    appliesTo: "Squaring numbers below a base."
  },
  {
    num: 7,
    nameSa: "यावदूनं तावदूनीकृत्य वर्गं च योजयेत्",
    nameTe: "యావదూనం తావదూనీకృత్య వర్గం చ యోజయేత్",
    nameEn: "Yāvadūnaṁ Tāvadūnīkṛtya Vargañca Yojayet",
    meaning: "Lessen by the deficiency and add the square of the deficiency.",
    appliesTo: "Direct single-line squaring."
  },
  {
    num: 8,
    nameSa: "अन्त्ययोर्दशकेऽपि",
    nameTe: "అంత్యయోర్దశకేऽపి",
    nameEn: "Antyayordaśake'pi",
    meaning: "When the last digits total 10.",
    appliesTo: "Fast multiplication when preceding digits are equal and final digits add to 10 (e.g. 43 × 47)."
  },
  {
    num: 9,
    nameSa: "अन्त्ययोरेव",
    nameTe: "అంత్యయోరేవ",
    nameEn: "Antyayoḥ Eva",
    meaning: "Only the end terms.",
    appliesTo: "Eliminating cross-terms in algebraic fractions."
  },
  {
    num: 10,
    nameSa: "समुच्चयगुणितः",
    nameTe: "సముచ్చయగుణితః",
    nameEn: "Samuccayaguṇitaḥ",
    meaning: "The sum of the coefficients in the product.",
    appliesTo: "Verifying algebraic factorizations."
  },
  {
    num: 11,
    nameSa: "लोपनस्थापनाभ्याम्",
    nameTe: "లోపనస్థాపనాభ్యామ్",
    nameEn: "Lopanasthāpanābhyām",
    meaning: "By elimination and retention.",
    appliesTo: "Factorization of multi-variable polynomials."
  },
  {
    num: 12,
    nameSa: "विलोकनम्",
    nameTe: "విలోకనమ్",
    nameEn: "Vilokanam",
    meaning: "By observation.",
    appliesTo: "Finding cube roots and square roots of exact powers in 1–2 seconds by mere inspection."
  },
  {
    num: 13,
    nameSa: "गुणितसमुच्चयः समुच्चयगुणितः",
    nameTe: "గుణితసముచ్చయః సముచ్చయగుణితః",
    nameEn: "Guṇitasamuccayaḥ Samuccayaguṇitaḥ",
    meaning: "The product of the sum equals the sum of the products.",
    appliesTo: "Proving higher polynomial equations and symmetry."
  }
];

// ==========================================
// LEVEL 1: BEGINNER ENGINES
// ==========================================

// 1. Ekadhikena Purvena (Squaring ending in 5 & Sum-to-10)
function runEkadhika() {
  const ekIn = document.getElementById("ekadhikaN");
  const stepsContainer = document.getElementById("ekadhikaSteps");
  const resultDisplay = document.getElementById("ekadhikaResult");
  if (!ekIn || !stepsContainer) return;

  const num = parseInt(ekIn.value, 10);
  if (isNaN(num) || num < 5 || num % 10 !== 5) {
    stepsContainer.innerHTML = "<div style='color:var(--rose-accent);'>Please enter a positive integer ending in 5 (e.g. 15, 25, 75, 125).</div>";
    if (resultDisplay) resultDisplay.textContent = "--";
    return;
  }

  const prefix = Math.floor(num / 10);
  const next = prefix + 1;
  const leftPart = prefix * next;
  const rightPart = 25;
  const finalResult = (leftPart * 100) + rightPart;

  stepsContainer.innerHTML = `
    <div class="step-card">
      <div class="step-header">
        <span class="step-badge">Part 1: Left Group</span>
      </div>
      <div class="step-diagram">${prefix} × (${prefix} + 1)</div>
      <div class="step-calc">${prefix} × ${next} = ${leftPart}</div>
      <div class="step-summary">Multiply prefix by "one more than itself" (एकाधिकेन).</div>
    </div>
    <div class="step-card">
      <div class="step-header">
        <span class="step-badge">Part 2: Right Group</span>
      </div>
      <div class="step-diagram">5²</div>
      <div class="step-calc">5 × 5 = 25</div>
      <div class="step-summary">Last two digits are perpetually 25.</div>
    </div>
    <div class="step-card">
      <div class="step-header">
        <span class="step-badge">Combination</span>
      </div>
      <div class="step-diagram">${leftPart} | 25</div>
      <div class="step-calc">Concatenate: ${finalResult.toLocaleString()}</div>
      <div class="step-summary">Direct mental synthesis with zero intermediate work.</div>
    </div>
  `;

  if (resultDisplay) {
    resultDisplay.textContent = finalResult.toLocaleString();
  }
}

// 2. Ekanyunena Purvena (Multiplication by 9s)
function runEkanyunena() {
  const nIn = document.getElementById("ekanyunaN");
  const ninesIn = document.getElementById("ekanyunaNines");
  const container = document.getElementById("ekanyunaSteps");
  const resDisplay = document.getElementById("ekanyunaResult");
  if (!nIn || !ninesIn || !container) return;

  const N = parseInt(nIn.value, 10);
  const ninesStr = ninesIn.value.trim();
  const numNines = ninesStr.length;

  if (isNaN(N) || N <= 0 || !/^[9]+$/.test(ninesStr)) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>Enter a valid positive number and a string composed solely of 9s (e.g. 9, 99, 999).</div>";
    if (resDisplay) resDisplay.textContent = "--";
    return;
  }

  const multiplier = BigInt(ninesStr);
  const product = BigInt(N) * multiplier;
  const digitsN = String(N).length;

  let explanationHtml = "";

  if (digitsN === numNines) {
    // Case 1: Equal number of digits
    const left = N - 1;
    const right = Number(multiplier) - left;
    explanationHtml = `
      <div class="step-card">
        <div class="step-badge">Case 1: Equal Digits</div>
        <div class="step-calc">Left: ${N} - 1 = ${left}</div>
        <div class="step-summary">Subtract 1 from the number (एकन्यूनेन).</div>
      </div>
      <div class="step-card">
        <div class="step-badge">Right Complement</div>
        <div class="step-calc">Right: ${ninesStr} - ${left} = ${right}</div>
        <div class="step-summary">Take all from 9 and last from 10.</div>
      </div>
      <div class="step-card">
        <div class="step-badge">Result</div>
        <div class="step-calc">${left} | ${right}</div>
        <div class="step-summary">= <strong>${product.toString()}</strong></div>
      </div>
    `;
  } else if (digitsN < numNines) {
    // Case 2: More 9s
    const padded = String(N).padStart(numNines, "0");
    const left = N - 1;
    const right = Number(multiplier) - left;
    explanationHtml = `
      <div class="step-card">
        <div class="step-badge">Case 2: More 9s than Digits</div>
        <div class="step-calc">Pad with zeros: ${padded} × ${ninesStr}</div>
        <div class="step-summary">Treat ${N} as ${padded}.</div>
      </div>
      <div class="step-card">
        <div class="step-badge">Left & Right Parts</div>
        <div class="step-calc">Left: ${N} - 1 = ${left} | Right: ${ninesStr} - ${left} = ${right}</div>
        <div class="step-summary">Pad right partition accordingly.</div>
      </div>
      <div class="step-card">
        <div class="step-badge">Final Product</div>
        <div class="step-calc">${product.toString()}</div>
        <div class="step-summary">Computed in 1 second mentally!</div>
      </div>
    `;
  } else {
    // Case 3: Fewer 9s
    explanationHtml = `
      <div class="step-card">
        <div class="step-badge">Case 3: Fewer 9s (N > 9s)</div>
        <div class="step-calc">${N} × ${ninesStr} = ${N} × (${Number(multiplier) + 1} - 1)</div>
        <div class="step-summary">Shift: ${N}00... - ${N}</div>
      </div>
      <div class="step-card">
        <div class="step-badge">Final Value</div>
        <div class="step-calc">${product.toString()}</div>
        <div class="step-summary">Standard Vedic subtraction shift.</div>
      </div>
    `;
  }

  container.innerHTML = explanationHtml;
  if (resDisplay) resDisplay.textContent = product.toString();
}

// 3. Beejank (Digital Root / Navasesh) Modulo 9 Checksum Engine
function digitalRoot(n) {
  let val = BigInt(Math.abs(n));
  if (val === 0n) return 9;
  let rem = Number(val % 9n);
  return rem === 0 ? 9 : rem;
}

function runBeejank() {
  const n1In = document.getElementById("beejankN1");
  const n2In = document.getElementById("beejankN2");
  const opIn = document.getElementById("beejankOp");
  const container = document.getElementById("beejankSteps");
  const resDisplay = document.getElementById("beejankResult");
  if (!n1In || !n2In || !opIn || !container) return;

  const a = parseInt(n1In.value, 10);
  const b = parseInt(n2In.value, 10);
  const op = opIn.value;

  if (isNaN(a) || isNaN(b)) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>Enter two valid numbers.</div>";
    return;
  }

  let actualRes = 0;
  let opSymbol = "";
  if (op === "add") { actualRes = a + b; opSymbol = "+"; }
  else if (op === "sub") { actualRes = a - b; opSymbol = "-"; }
  else { actualRes = a * b; opSymbol = "×"; }

  const drA = digitalRoot(a);
  const drB = digitalRoot(b);
  let expectedDr = 0;
  if (op === "add") expectedDr = digitalRoot(drA + drB);
  else if (op === "sub") expectedDr = digitalRoot(drA - drB + 9);
  else expectedDr = digitalRoot(drA * drB);

  const actualDr = digitalRoot(actualRes);
  const isMatch = expectedDr === actualDr;

  container.innerHTML = `
    <div class="step-card">
      <div class="step-badge">Bījaṅka of First (B₁)</div>
      <div class="step-calc">DR(${a}) = ${drA}</div>
      <div class="step-summary">Sum of digits reduced to single digit mod 9.</div>
    </div>
    <div class="step-card">
      <div class="step-badge">Bījaṅka of Second (B₂)</div>
      <div class="step-calc">DR(${b}) = ${drB}</div>
      <div class="step-summary">Casting out nines.</div>
    </div>
    <div class="step-card">
      <div class="step-badge">Target Checksum</div>
      <div class="step-calc">DR(${drA} ${opSymbol} ${drB}) = ${expectedDr}</div>
      <div class="step-summary">Expected digital root of the answer.</div>
    </div>
    <div class="step-card" style="border-color:${isMatch ? 'var(--emerald-accent)' : 'var(--rose-accent)'};">
      <div class="step-badge" style="color:${isMatch ? 'var(--emerald-accent)' : 'var(--rose-accent)'};">
        ${isMatch ? '✓ Verified by Navasesh' : '✗ Checksum Error'}
      </div>
      <div class="step-calc">DR(${actualRes}) = ${actualDr}</div>
      <div class="step-summary">Matches expected? ${isMatch ? 'YES (100% Valid)' : 'NO'}.</div>
    </div>
  `;

  if (resDisplay) {
    resDisplay.textContent = `${a} ${opSymbol} ${b} = ${actualRes.toLocaleString()}`;
  }
}

// ==========================================
// LEVEL 2: INTERMEDIATE ENGINES
// ==========================================

// 4. Urdhva-Tiryagbhyam (Universal Cross-Multiplication)
function runUrdhva() {
  const n1Input = document.getElementById("urdhvaN1");
  const n2Input = document.getElementById("urdhvaN2");
  const stepsContainer = document.getElementById("urdhvaSteps");
  const resultDisplay = document.getElementById("urdhvaResult");
  if (!n1Input || !n2Input || !stepsContainer) return;

  const num1 = parseInt(n1Input.value, 10);
  const num2 = parseInt(n2Input.value, 10);

  if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
    stepsContainer.innerHTML = "<div style='color:var(--rose-accent);'>Please enter valid positive integers.</div>";
    return;
  }

  const s1 = String(num1);
  const s2 = String(num2);
  const maxLen = Math.max(s1.length, s2.length);
  const d1 = s1.padStart(maxLen, "0").split("").map(Number);
  const d2 = s2.padStart(maxLen, "0").split("").map(Number);
  const nSteps = 2 * maxLen - 1;

  let rawColumns = [];
  let stepsHtml = "";

  for (let k = 0; k < nSteps; k++) {
    let colSum = 0;
    let pairs = [];
    for (let i = 0; i < maxLen; i++) {
      let j = k - i;
      if (j >= 0 && j < maxLen) {
        colSum += d1[i] * d2[j];
        pairs.push(`(${d1[i]}×${d2[j]})`);
      }
    }
    rawColumns.push(colSum);
    stepsHtml += `
      <div class="step-card">
        <div class="step-header">
          <span class="step-badge">Stage ${k + 1} of ${nSteps}</span>
        </div>
        <div class="step-diagram">${pairs.join(" + ") || "0"}</div>
        <div class="step-calc">Sum = ${colSum}</div>
        <div class="step-summary">Cross-product ray summation for column ${k + 1}.</div>
      </div>
    `;
  }

  let finalDigits = [];
  let carry = 0;
  for (let idx = rawColumns.length - 1; idx >= 0; idx--) {
    let tot = rawColumns[idx] + carry;
    let unit = tot % 10;
    carry = Math.floor(tot / 10);
    finalDigits.unshift(unit);
  }
  if (carry > 0) {
    finalDigits.unshift(carry);
  }

  const productStr = finalDigits.join("");
  stepsContainer.innerHTML = stepsHtml;
  if (resultDisplay) {
    resultDisplay.textContent = parseInt(productStr, 10).toLocaleString();
  }
}

// 5. Nikhila Base Multiplication
function runNikhila() {
  const bSelect = document.getElementById("nikhilaBase");
  const n1In = document.getElementById("nikhilaN1");
  const n2In = document.getElementById("nikhilaN2");
  const stepsContainer = document.getElementById("nikhilaSteps");
  const resultDisplay = document.getElementById("nikhilaResult");
  if (!bSelect || !n1In || !n2In || !stepsContainer) return;

  const base = parseInt(bSelect.value, 10);
  const n1 = parseInt(n1In.value, 10);
  const n2 = parseInt(n2In.value, 10);

  if (isNaN(n1) || isNaN(n2)) {
    stepsContainer.innerHTML = "<div style='color:var(--rose-accent);'>Enter valid numbers.</div>";
    return;
  }

  const d1 = n1 - base;
  const d2 = n2 - base;
  const leftSide = n1 + d2; // or n2 + d1
  const rightSide = d1 * d2;
  const baseDigits = String(base).length - 1;
  const finalProduct = (leftSide * base) + rightSide;

  stepsContainer.innerHTML = `
    <div class="step-card">
      <div class="step-header">
        <span class="step-badge">Step 1: Deviations from Base ${base}</span>
      </div>
      <div class="step-diagram">
        ${n1} (${d1 >= 0 ? "+" + d1 : d1})<br>
        ${n2} (${d2 >= 0 ? "+" + d2 : d2})
      </div>
      <div class="step-calc">d₁ = ${d1}, d₂ = ${d2}</div>
      <div class="step-summary">Deviations computed using Nikhilaṁ (All from 9 and last from 10).</div>
    </div>

    <div class="step-card">
      <div class="step-header">
        <span class="step-badge">Step 2: Cross Addition (Left Side)</span>
      </div>
      <div class="step-diagram">${n1} + (${d2}) = ${leftSide}</div>
      <div class="step-calc">Matches: ${n2} + (${d1}) = ${n2 + d1}</div>
      <div class="step-summary">Cross-add number with opposite deviation.</div>
    </div>

    <div class="step-card">
      <div class="step-header">
        <span class="step-badge">Step 3: Vertical Multiply (Right Side)</span>
      </div>
      <div class="step-diagram">(${d1}) × (${d2}) = ${rightSide}</div>
      <div class="step-calc">Width must match base zeros (${baseDigits} digits)</div>
      <div class="step-summary">Right side product: ${rightSide}.</div>
    </div>
  `;

  if (resultDisplay) {
    resultDisplay.textContent = finalProduct.toLocaleString();
  }
}

// 6. Dvandva Yoga (Duplex Squaring of ANY Arbitrary Number)
// D(a) = a²
// D(ab) = 2ab
// D(abc) = 2ac + b²
// D(abcd) = 2ad + 2bc
function computeDuplex(digitsArr) {
  const len = digitsArr.length;
  let sum = 0;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    sum += 2 * digitsArr[i] * digitsArr[len - 1 - i];
  }
  if (len % 2 === 1) {
    const mid = digitsArr[Math.floor(len / 2)];
    sum += mid * mid;
  }
  return sum;
}

function runDuplex() {
  const inElem = document.getElementById("duplexN");
  const container = document.getElementById("duplexSteps");
  const resDisplay = document.getElementById("duplexResult");
  if (!inElem || !container) return;

  const num = parseInt(inElem.value, 10);
  if (isNaN(num) || num <= 0) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>Enter a positive integer (e.g. 43, 312, 5421).</div>";
    if (resDisplay) resDisplay.textContent = "--";
    return;
  }

  const s = String(num);
  const digits = s.split("").map(Number);
  const n = digits.length;
  const numStages = 2 * n - 1;

  let partitions = [];
  let duplexes = [];

  // Generate partitions: 1st, 1st+2nd, ..., all, ..., last+2nd-to-last, last
  for (let k = 1; k <= numStages; k++) {
    let slice = [];
    if (k <= n) {
      slice = digits.slice(0, k);
    } else {
      slice = digits.slice(k - n);
    }
    partitions.push(slice);
    duplexes.push(computeDuplex(slice));
  }

  // Combine with carries from right to left
  let finalDigits = [];
  let carry = 0;
  for (let i = duplexes.length - 1; i >= 0; i--) {
    let tot = duplexes[i] + carry;
    let unit = tot % 10;
    carry = Math.floor(tot / 10);
    finalDigits.unshift(unit);
  }
  if (carry > 0) {
    finalDigits.unshift(carry);
  }

  const calculatedSquare = finalDigits.join("");

  let html = `<table class="duplex-table">
    <thead>
      <tr>
        <th>Stage</th>
        <th>Partition</th>
        <th>Duplex Formula</th>
        <th>Duplex Value D</th>
      </tr>
    </thead>
    <tbody>`;

  partitions.forEach((part, idx) => {
    let formulaDesc = "";
    if (part.length === 1) formulaDesc = `${part[0]}²`;
    else if (part.length === 2) formulaDesc = `2 × (${part[0]} × ${part[1]})`;
    else if (part.length === 3) formulaDesc = `2 × (${part[0]} × ${part[2]}) + ${part[1]}²`;
    else formulaDesc = `2×(${part[0]}×${part[part.length-1]}) + 2×(${part[1]}×${part[part.length-2]})...`;

    html += `<tr>
      <td>${idx + 1}</td>
      <td><strong>${part.join("")}</strong></td>
      <td><code>${formulaDesc}</code></td>
      <td><span style="color:var(--gold-bright); font-weight:700;">${duplexes[idx]}</span></td>
    </tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;

  if (resDisplay) {
    resDisplay.textContent = parseInt(calculatedSquare, 10).toLocaleString();
  }
}

// 7. Yavadunam Near-Base Squaring
function runYavadunam() {
  const inElem = document.getElementById("yavadunamN");
  const bSelect = document.getElementById("yavadunamBase");
  const container = document.getElementById("yavadunamSteps");
  const resDisplay = document.getElementById("yavadunamResult");
  if (!inElem || !bSelect || !container) return;

  const N = parseInt(inElem.value, 10);
  const base = parseInt(bSelect.value, 10);
  if (isNaN(N)) return;

  const dev = N - base;
  const left = N + dev; // or base + 2*dev
  const right = dev * dev;
  const square = N * N;

  container.innerHTML = `
    <div class="step-card">
      <div class="step-badge">1. Deficiency / Surplus</div>
      <div class="step-calc">Dev = ${N} - ${base} = ${dev >= 0 ? "+" + dev : dev}</div>
      <div class="step-summary">Deficiency from base ${base}.</div>
    </div>
    <div class="step-card">
      <div class="step-badge">2. Left Part (Lessen/Add)</div>
      <div class="step-calc">Left = ${N} + (${dev}) = ${left}</div>
      <div class="step-summary">Yāvadūnaṁ tāvadūnīkṛtya (Lessen by deficiency).</div>
    </div>
    <div class="step-card">
      <div class="step-badge">3. Right Part (Square)</div>
      <div class="step-calc">Right = (${dev})² = ${right}</div>
      <div class="step-summary">Vargañca yojayet (and square it).</div>
    </div>
    <div class="step-card">
      <div class="step-badge">Combined Result</div>
      <div class="step-calc">${left} | ${right}</div>
      <div class="step-summary">= <strong>${square.toLocaleString()}</strong></div>
    </div>
  `;

  if (resDisplay) resDisplay.textContent = square.toLocaleString();
}

// 8. Vinculum Algebra (Rekhanka)
function runVinculum() {
  const inElem = document.getElementById("vinculumInput");
  const outArea = document.getElementById("vinculumResultArea");
  if (!inElem || !outArea) return;

  const num = parseInt(inElem.value, 10);
  if (isNaN(num) || num < 0) {
    outArea.innerHTML = "<div style='color:var(--rose-accent);'>Enter a valid positive number.</div>";
    return;
  }

  const s = String(num);
  let vinculumStr = "";
  let carry = 0;
  let parts = [];

  for (let i = s.length - 1; i >= 0; i--) {
    let digit = parseInt(s[i], 10) + carry;
    carry = 0;
    if (digit > 5) {
      let bar = 10 - digit;
      carry = 1;
      vinculumStr = `${bar}̄` + vinculumStr;
      parts.unshift(`Digit ${digit} > 5 ⇒ Bar digit -${bar} with carry +1`);
    } else {
      vinculumStr = String(digit) + vinculumStr;
      parts.unshift(`Digit ${digit} ≤ 5 ⇒ Remains ${digit}`);
    }
  }
  if (carry > 0) {
    vinculumStr = String(carry) + vinculumStr;
  }

  outArea.innerHTML = `
    <div class="result-banner" style="margin-top:0.5rem;">
      <div>
        <span style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase;">Vinculum Representation:</span>
        <div class="result-val" style="color:var(--cyan-accent); font-size:2rem;">${vinculumStr}</div>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted); max-width:380px;">
        All heavy digits (6, 7, 8, 9) replaced by numbers ≤ 5, eliminating multiplication friction.
      </div>
    </div>
    <div style="margin-top:1rem; font-size:0.85rem; color:var(--text-muted);">
      ${parts.map(p => `<div>✦ ${p}</div>`).join("")}
    </div>
  `;
}

// ==========================================
// LEVEL 3: ADVANCED ENGINES
// ==========================================

// 9. Dhvajanka (The Flag Method of Single-Line Division)
function runDhvajanka() {
  const dividendIn = document.getElementById("dhvajaDividend");
  const divisorIn = document.getElementById("dhvajaDivisor");
  const container = document.getElementById("dhvajaSteps");
  const resDisplay = document.getElementById("dhvajaResult");
  if (!dividendIn || !divisorIn || !container) return;

  const dividend = parseInt(dividendIn.value, 10);
  const divisor = parseInt(divisorIn.value, 10);

  if (isNaN(dividend) || isNaN(divisor) || divisor <= 0 || dividend <= 0) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>Enter positive dividend and divisor.</div>";
    if (resDisplay) resDisplay.textContent = "--";
    return;
  }

  if (divisor < 10 || divisor > 99) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>For this interactive visualizer, enter a 2-digit divisor (10 - 99) to clearly see Flag and Operator digits.</div>";
    return;
  }

  const sDiv = String(divisor);
  const operatorDigit = parseInt(sDiv[0], 10);
  const flagDigit = parseInt(sDiv[1], 10);

  const actualQuotient = Math.floor(dividend / divisor);
  const actualRemainder = dividend % divisor;

  const sDvd = String(dividend);
  // Last 1 digit is remainder zone
  const mainPart = sDvd.slice(0, -1);
  const flagPart = sDvd.slice(-1);

  container.innerHTML = `
    <div style="margin-bottom:1rem;">
      <span class="step-badge">Divisor Setup</span>
      <div style="font-size:1.1rem; font-family:var(--font-mono); color:#fff; margin-top:0.3rem;">
        Divisor = ${divisor} ⇒ Operator (D) = <span style="color:var(--gold-bright);">${operatorDigit}</span>, 
        Flag (F) = <sup style="color:var(--cyan-accent); font-weight:700;">${flagDigit}</sup>
      </div>
      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:0.25rem;">
        The flag digit <sup>${flagDigit}</sup> adjusts the remainder column in single-line mental passes.
      </div>
    </div>

    <table class="flag-division-table">
      <thead>
        <tr>
          <th>Zone</th>
          <th>Gross Dividend</th>
          <th>Action</th>
          <th>Quotient / Remainder</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Main Columns (${mainPart})</strong></td>
          <td>${mainPart}</td>
          <td>Divide by Operator ${operatorDigit}, subtract (Quotient × Flag ${flagDigit})</td>
          <td><span style="color:var(--gold-bright); font-weight:700;">Q = ${actualQuotient}</span></td>
        </tr>
        <tr>
          <td><strong>Remainder Column (${flagPart})</strong></td>
          <td>${flagPart}</td>
          <td>Adjust with final flag multiplication</td>
          <td><span style="color:var(--emerald-accent); font-weight:700;">R = ${actualRemainder}</span></td>
        </tr>
      </tbody>
    </table>

    <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.5rem;">
      <em>Verification:</em> (${divisor} × ${actualQuotient}) + ${actualRemainder} = 
      <strong>${divisor * actualQuotient + actualRemainder}</strong> (Matches dividend ${dividend}).
    </div>
  `;

  if (resDisplay) {
    resDisplay.textContent = `Quotient = ${actualQuotient}, Remainder = ${actualRemainder}`;
  }
}

// ==========================================
// LEVEL 4: PRO / GRANDMASTER ENGINES
// ==========================================

// 10. Vilokanam (Cube Root by Inspection in 2 seconds)
function runCubeRoot() {
  const inElem = document.getElementById("cubeRootN");
  const container = document.getElementById("cubeRootSteps");
  const resDisplay = document.getElementById("cubeRootResult");
  if (!inElem || !container) return;

  const N = parseInt(inElem.value, 10);
  if (isNaN(N) || N <= 0 || N > 1000000) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>Enter a positive exact cube up to 1,000,000 (e.g. 1728, 175616, 912673).</div>";
    if (resDisplay) resDisplay.textContent = "--";
    return;
  }

  // Exact cube check
  const approxRoot = Math.round(Math.cbrt(N));
  const isExact = (approxRoot * approxRoot * approxRoot === N);

  const s = String(N);
  const last3 = s.slice(-3);
  const leadingGroup = s.length > 3 ? s.slice(0, -3) : "0";
  const lastDigit = parseInt(s.slice(-1), 10);

  // Vedic ending table:
  // 1->1, 2->8, 3->7, 4->4, 5->5, 6->6, 7->3, 8->2, 9->9, 0->0
  const endingMap = { 0: 0, 1: 1, 2: 8, 3: 7, 4: 4, 5: 5, 6: 6, 7: 3, 8: 2, 9: 9 };
  const unitsDigit = endingMap[lastDigit];

  const leadNum = parseInt(leadingGroup, 10);
  let tensDigit = 0;
  for (let k = 1; k <= 10; k++) {
    if (k * k * k <= leadNum) {
      tensDigit = k;
    } else {
      break;
    }
  }

  const resultRoot = leadNum > 0 ? (tensDigit * 10 + unitsDigit) : unitsDigit;

  container.innerHTML = `
    <div class="step-card">
      <div class="step-badge">1. Grouping (त्रिक)</div>
      <div class="step-diagram">[${leadNum > 0 ? leadingGroup : "0"}] | [${last3}]</div>
      <div class="step-summary">Split into last 3 digits and leading group.</div>
    </div>
    <div class="step-card">
      <div class="step-badge">2. Units Digit (चरम अङ्क)</div>
      <div class="step-calc">Last digit is ${lastDigit} ⇒ Units Root = ${unitsDigit}</div>
      <div class="step-summary">Complementary pair (2↔8, 3↔7) or identical (1,4,5,6,9,0).</div>
    </div>
    <div class="step-card">
      <div class="step-badge">3. Tens Digit (पूर्व अङ्क)</div>
      <div class="step-calc">${tensDigit}³ = ${tensDigit*tensDigit*tensDigit} ≤ ${leadNum} &lt; ${(tensDigit+1)**3}</div>
      <div class="step-summary">Largest cube less than or equal to leading group.</div>
    </div>
    <div class="step-card" style="border-color:${isExact ? 'var(--emerald-accent)' : 'var(--gold-primary)'};">
      <div class="step-badge" style="color:${isExact ? 'var(--emerald-accent)' : 'var(--gold-primary)'};">
        ${isExact ? '✓ Exact Cube' : 'ℹ Approximation'}
      </div>
      <div class="step-calc">Root = <strong>${resultRoot}</strong></div>
      <div class="step-summary">${resultRoot}³ = ${(resultRoot**3).toLocaleString()}</div>
    </div>
  `;

  if (resDisplay) resDisplay.textContent = `∛${N.toLocaleString()} = ${resultRoot}`;
}

// 11. Master Catalog Renderer with Filter
function renderSutrasCatalog(filter = "all") {
  const container = document.getElementById("sutrasGrid");
  if (!container) return;

  let items = [];
  if (filter === "all" || filter === "primary") {
    items = items.concat(VEDIC_SUTRAS.map(s => ({ ...s, isPrimary: true })));
  }
  if (filter === "all" || filter === "sub") {
    items = items.concat(VEDIC_UPASUTRAS.map(s => ({ ...s, isPrimary: false })));
  }

  container.innerHTML = items.map(s => `
    <div class="sutra-card">
      <div class="sutra-num">${s.isPrimary ? `Primary Sūtra ${s.num}` : `Upa-Sūtra ${s.num}`}</div>
      <h4 class="sutra-name-sa">${s.nameSa} ${s.nameTe ? `<span style="display:block; color:var(--gold-bright); font-size:1.05rem; margin-top:0.25rem;">${s.nameTe}</span>` : ""}</h4>
      <div class="sutra-name-en">${s.nameEn}</div>
      <p class="sutra-meaning">"${s.meaning}"</p>
      <div class="sutra-math">
        <strong>Domain:</strong> ${s.appliesTo}<br>
        ${s.formula ? `<strong>Formula:</strong> <code>${s.formula}</code>` : ""}
      </div>
    </div>
  `).join("");
}

// 12. Safe ScrollSpy (avoiding window vertical jumping)
function initVedicScrollSpy() {
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

// ==========================================
// DOM INITIALIZER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderSutrasCatalog("all");
  initVedicScrollSpy();

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      renderSutrasCatalog(f);
    });
  });

  // Level 1: Ekadhikena
  const ekIn = document.getElementById("ekadhikaN");
  if (ekIn) {
    ekIn.addEventListener("input", runEkadhika);
    runEkadhika();
  }

  // Level 1: Ekanyunena
  const nIn = document.getElementById("ekanyunaN");
  const ninesIn = document.getElementById("ekanyunaNines");
  if (nIn && ninesIn) {
    nIn.addEventListener("input", runEkanyunena);
    ninesIn.addEventListener("input", runEkanyunena);
    runEkanyunena();
  }

  // Level 1: Beejank
  const b1 = document.getElementById("beejankN1");
  const b2 = document.getElementById("beejankN2");
  const bOp = document.getElementById("beejankOp");
  if (b1 && b2 && bOp) {
    b1.addEventListener("input", runBeejank);
    b2.addEventListener("input", runBeejank);
    bOp.addEventListener("change", runBeejank);
    runBeejank();
  }

  // Level 2: Urdhva
  const u1 = document.getElementById("urdhvaN1");
  const u2 = document.getElementById("urdhvaN2");
  if (u1 && u2) {
    u1.addEventListener("input", runUrdhva);
    u2.addEventListener("input", runUrdhva);
    runUrdhva();
  }

  // Level 2: Nikhila
  const nk1 = document.getElementById("nikhilaN1");
  const nk2 = document.getElementById("nikhilaN2");
  const nkb = document.getElementById("nikhilaBase");
  if (nk1 && nk2 && nkb) {
    nk1.addEventListener("input", runNikhila);
    nk2.addEventListener("input", runNikhila);
    nkb.addEventListener("change", runNikhila);
    runNikhila();
  }

  // Level 2: Duplex
  const dupIn = document.getElementById("duplexN");
  if (dupIn) {
    dupIn.addEventListener("input", runDuplex);
    runDuplex();
  }

  // Level 2: Yavadunam
  const yvIn = document.getElementById("yavadunamN");
  const yvB = document.getElementById("yavadunamBase");
  if (yvIn && yvB) {
    yvIn.addEventListener("input", runYavadunam);
    yvB.addEventListener("change", runYavadunam);
    runYavadunam();
  }

  // Level 2: Vinculum
  const vincIn = document.getElementById("vinculumInput");
  if (vincIn) {
    vincIn.addEventListener("input", runVinculum);
    runVinculum();
  }

  // Level 3: Dhvajanka
  const dhvDvd = document.getElementById("dhvajaDividend");
  const dhvDiv = document.getElementById("dhvajaDivisor");
  if (dhvDvd && dhvDiv) {
    dhvDvd.addEventListener("input", runDhvajanka);
    dhvDiv.addEventListener("input", runDhvajanka);
    runDhvajanka();
  }

  // Level 4: Vilokanam Cube Root
  const cbIn = document.getElementById("cubeRootN");
  if (cbIn) {
    cbIn.addEventListener("input", runCubeRoot);
    runCubeRoot();
  }
});
