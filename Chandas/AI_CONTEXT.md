# AI Context & Technical Reference — `Chandas/`

## 1. Purpose & Authoritative Source
- **Project**: Chandaḥ-śāstra (छन्दःशास्त्रम् • ఛందశ్శాస్త్రము) — *Acharya Pingala's Combinatorics, The World's Earliest Binary System & Live Metre Scanner*.
- **Canonical Basis**: *Piṅgala Chandaḥ-sūtram* (~3rd–2nd c. BCE) and Halāyudha's *Mṛtasañjīvanī* (10th c. CE), plus modern EEG/MRI neuroscience studies on Vedic chanting.
- **Tech Stack**: Zero-dependency static HTML5, CSS3, Vanilla ES6+ JavaScript, and Web Audio API.
- **Language Support**: Multilingual input & display supporting Devanagari, Telugu (`తెలుగు`), and IAST Latin (`lang_mode: none`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 667 | 41,667 | 7-section layout (`overview` + 6 core interactive modules) |
| `style.css` | 557 | 11,397 | Dark indigo/gold prosody theme, syllable Laghu/Guru badges, Meru pyramid layout |
| `chandas.js` | 877 | 35,183 | Multilingual transliterator, syllabifier, metre classifier, Prastāra/Naṣṭa/Uddiṣṭa/Meru algorithms, Web Audio chimes |
| `favicon.svg` | 47 | 2,627 | Standalone SVG vector icon |
| `README.md` | 64 | 5,659 | Module documentation |

## 3. Section Map (`index.html`)
1. `#overview` — Chandaḥ-śāstra & The Science of Metre hero
2. `#scanner` — 1. Real-Time Metre Scanner & Prosody Analyzer (Devanagari, Telugu, IAST)
3. `#ganas` — 2. The 8 Canonical Gaṇas (*Aṣṭagaṇāḥ*: Ya, Ma, Ta, Ra, Ja, Bha, Na, Sa + La/Ga) & `यमाता राजभानसलगाम्` ring
4. `#binary` — 3. Pingala's Binary System (*Prastāra, Naṣṭa, Uddiṣṭa, Saṅkhyā*)
5. `#meru` — 4. *Meru Prastāra* (Pascal's Triangle) & Fibonacci (*Gopāla-Hemacandra*) Diagonals
6. `#neuroscience` — 5. Cognitive Neuroscience of Mantras & Stotras (EEG Alpha/Theta, Vagus nerve, Hippocampus, Palatal reflexology, DMN, 432/108/528 Hz audio)
7. `#compendium` — 6. Canonical Metre Compendium

## 4. JavaScript Symbols (`chandas.js`)
- **Top-Level Constants**:
  - `GANAS_DATA` — 8 triplets (binary patterns `011..001`, elements, deities)
  - `METRES_DATABASE` — Canonical Sanskrit & Telugu metres (Anuṣṭubh, Gāyatrī, Indravajrā, Upendravajrā, Upajāti, Vaṁśastha, Bhujaṅgaprayāta, Toṭaka, Vasantatilakā, Mālinī, Pañcacāmara, Śikhariṇī, Mandākrāntā, Śārdūlavikrīḍita, Sragdharā, Utpalamāla, Campakamāla, Mattebhavikrīḍitamu)
  - `PRESETS`, `IAST_LONG_VOWELS`, `IAST_SHORT_VOWELS`, `VOWEL_REGEX`, `devanagariMap`, `teluguMap`, `audioCtx`
- **Functions**:
  - `transliterateToIAST()`, `analyzeProsody()`, `identifyMetre()`, `runMetreScanner()` — Core prosody scanner & classifier
  - `generatePrastara()`, `runPrastaraVisualizer()` — $2^n$ binary matrix generator
  - `nastaAlgorithm()`, `runNastaCalculator()` — Decimal index → Laghu/Guru sequence
  - `uddistaAlgorithm()`, `runUddistaCalculator()` — Laghu/Guru sequence → 1-based row index
  - `generateMeruPrastara()`, `renderMeruPyramid()` — Binomial pyramid & Fibonacci diagonal mapper
  - `playSacredHarmonic()` — Web Audio API sine oscillator (432 Hz, 108 Hz, 528 Hz)
  - `initChandasScrollSpy()` (with `setActive`, `onScroll`)

## 5. Extension Guidelines for AI
- Any new metre added to `METRES_DATABASE` must specify its exact Laghu/Guru pattern (or gaṇa sequence) per syllable count.
- Syllabification in `analyzeProsody()` must preserve *Saṁyoga-para* (vowel before conjunct = Guru), *Anusvāra/Visarga* = Guru, and *Pādānta* rules across Devanagari, Telugu, and IAST.
