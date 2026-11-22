# Chandaḥ-śāstra (छन्दःशास्त्रम् • ఛందశ్శాస్త్రము)
### Acharya Pingala's Combinatorics, The World's Earliest Binary System & Live Metre Scanner

> "द्वौ द्वौ गच्छतः। लः। गः।" — *पिङ्गल छन्दःसूत्रम् (Pingala Chandaḥ-sūtram)*

A pure client-side computational laboratory celebrating **Acharya Pingala's Chandaḥ-śāstra** (~3rd–2nd Century BCE), the world's earliest documented binary numbering system, the stepped binomial coefficients pyramid (*Meru Prastāra* / Pascal's Triangle), *Mātrāvṛtta* Fibonacci recurrence relations, an algorithmic multilingual metre scanner, and the modern cognitive neuroscience of Sanskrit and Telugu stotra chanting.

---

## 🌟 Core Modules

### 1. 🔍 Real-Time Multilingual Metre Scanner (*Chandas Scanner*)
- **Universal Input**: Processes Devanagari (संस्कृतम्), Telugu (తెలుగు), and IAST Latin.
- **Syllabification & Prosody Rules**:
  - **Laghu (ल / ⏑ / 1 Mātrā)**: Short vowels ($a, i, u, \underset{\circ}{r}, \underset{\circ}{l}$) without conjuncts.
  - **Guru (ग / — / 2 Mātrās)**: Long vowels ($\bar{a}, \bar{i}, \bar{u}, e, ai, o, au$), or vowels followed by Anusvāra ($ṁ$), Visarga ($ḥ$), or consonant conjuncts (*Samyoga-para*), or padānta (*vā padānte*).
- **Automated Metre Classifier**: Identifies Anuṣṭubh, Gāyatrī, Indravajrā, Upendravajrā, Upajāti, Vaṁśastha, Bhujaṅgaprayāta, Toṭaka, Vasantatilakā, Mālinī, Pañcacāmara, Śikhariṇī, Mandākrāntā, Śārdūlavikrīḍita, Sragdharā, Utpalamāla, Campakamāla, and Mattebhavikrīḍitamu.
- **Visual Feedback**: Syllable badges, mātrā tallies, and Gaṇa triplet segmentation.

### 2. 🪘 The 8 Canonical Gaṇas (*Aṣṭagaṇāḥ • అష్టగణములు*)
- **The Mnemonic Ring**: `यमाता राजभानसलगाम्` (ya-mā-tā-rā-ja-bhā-na-sa-la-gāṁ).
- The 8 Triplets:
  1. **Ya (య)**: `⏑ — —` (011) — Jala (Water) • Varuṇa
  2. **Ma (మ)**: `— — —` (111) — Pṛthvī (Earth) • Pṛthvī
  3. **Ta (త)**: `— — ⏑` (110) — Ākāśa (Ether) • Indra
  4. **Ra (ర)**: `— ⏑ —` (101) — Agni (Fire) • Agni
  5. **Ja (జ)**: `⏑ — ⏑` (010) — Sūrya (Sun) • Sūrya
  6. **Bha (భ)**: `— ⏑ ⏑` (100) — Candra (Moon) • Candra
  7. **Na (న)**: `⏑ ⏑ ⏑` (000) — Vāyu (Air) • Vāyu
  8. **Sa (స)**: `⏑ ⏑ —` (001) — Pātāla (Underworld) • Vāsuki
  - Plus singletons: **La (ల)**: `⏑` (Laghu) and **Ga (గ)**: `—` (Guru).

### 3. ⚡ The World's Earliest Binary System (*Pingala's Pratyayas*)
- **Prastāra (प्रस्तार)**: Complete combinatorial binary matrix generation of $2^n$ permutations.
- **Naṣṭa (नष्ट)**: Pingala's decimal-to-binary algorithm determining the exact syllable sequence from a row number.
- **Uddiṣṭa (उद्दिष्ट)**: Binary-to-decimal algorithm computing the index from a sequence of Laghus and Gurus using positional powers of 2 ($2^0, 2^1, 2^2\dots$).
- **Saṅkhyā**: Direct formula for permutation capacity ($2^n$).

### 4. 🔺 Meru Prastāra & Fibonacci Diagonals
- **Pascal's Triangle Precursor**: Mapped in Chapter 8 of *Chandaḥ-śāstra* and detailed by 10th-century scholar Halāyudha in *Mṛtasañjīvanī* (800 years before Blaise Pascal in 1654 CE).
- **Binomial Coefficients**: Each cell $\binom{n}{k}$ represents metres of length $n$ with $k$ Gurus. Row sum is $2^n$.
- **Fibonacci Discovery (*Gopāla-Hemacandra Numbers*)**: In *Mātrāvṛtta* (moraic metres), a line of duration $M$ ending in Laghu (1) has $M-1$ prior morae; ending in Guru (2) has $M-2$ prior morae. Hence $S_M = S_{M-1} + S_{M-2}$, mapping Fibonacci numbers ($1, 1, 2, 3, 5, 8, 13, 21\dots$) along the shallow diagonals!

### 5. 🧠 Cognitive Neuroscience of Mantras & Stotras
- **EEG Brainwave Entrainment**: Periodic metric cadence at 1.5–2.5 Hz induces dominant **Alpha (8–12 Hz)** and **Theta (4–8 Hz)** oscillations.
- **Vagus Nerve (CN X) Stimulation**: Prolonged vocal exhalations and nasal humming (*Anusvāra* ṁ) stimulate the auricular and laryngeal branches of the Vagus nerve, elevating Heart Rate Variability (HRV) and triggering parasympathetic relaxation.
- **"The Sanskrit Effect" & Hippocampal Neuroplasticity**: Dr. James Hartzell's MRI research confirmed bilateral expansion of grey matter density in the **hippocampus** and **right temporal lobe** in Vedic chanters.
- **Palatal Reflexology**: Tongue strikes against the 84 meridian acupressure points on the palate stimulate the hypothalamus and pituitary gland, regulating neurotransmitters (serotonin, dopamine, GABA, melatonin) and reducing cortisol.
- **Default Mode Network (DMN) Deactivation**: Repetitive chanting dampens ego-narrative rumination and anxiety loops in the posterior cingulate cortex (PCC) and medial prefrontal cortex (mPFC).
- **Binaural Harmonic Chimes**: Built-in Web Audio API generator playing 432 Hz, 108 Hz, and 528 Hz tones.

---

## 🛠️ Technology Stack
- **Architecture**: Zero-dependency static client-side web application.
- **Core Languages**: Semantic HTML5, modern CSS3 (Custom Properties, Flexbox, Grid), Vanilla ES6+ JavaScript.
- **Typography**: Google Fonts (*Cinzel*, *Plus Jakarta Sans*, *JetBrains Mono*, *Noto Sans Telugu*).
- **Audio**: Web Audio API sine oscillator for acoustic resonance simulation.

---

## 📜 License
Part of the **AncientWisdom** Digital Sanctuary. Distributed under the MIT License.
