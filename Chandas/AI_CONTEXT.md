# AI Context & Technical Reference — `Chandas/`

## 1. Purpose & Authoritative Source
- **Project**: Chandaḥ-śāstra (छन्दःशास्त्रम् • ఛందశ్శాస్త్రము) — *Acharya Pingala's Combinatorics, The World's Earliest Binary System & Live Metre Scanner*.
- **Canonical Basis**: *Piṅgala Chandaḥ-sūtram* (~3rd–2nd c. BCE) and Halāyudha's *Mṛtasañjīvanī* (10th c. CE), plus modern EEG/MRI neuroscience studies on Vedic chanting.
- **Tech Stack**: Zero-dependency static HTML5, CSS3, Vanilla ES6+ JavaScript, and Web Audio API.
- **Language Support**: Multilingual input & display supporting Devanagari, Telugu (`తెలుగు`), and IAST Latin (`lang_mode: none`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 835 | 65,508 | 9-section layout (`overview` + 8 interactive modules with `#sanskrit-tutor` at top) |
| `style.css` | 772 | 18,857 | Dark indigo/gold prosody theme, syllable Laghu/Guru badges, Meru pyramid layout |
| `chandas.js` | 898 | 35,818 | Multilingual transliterator, syllabifier, metre classifier, Prastāra/Naṣṭa/Uddiṣṭa/Meru algorithms, Web Audio chimes |
| `sanskrit_tutor.js` | 1,001 | 94,201 | Beginner-to-Pro Sanskrit Mastery Studio (Picture-Word Studio across 10 categories incl. 43 Relations, 22 Colors, 40 Animals, 6 Seasons; Flashcards & Spoken Sanskrit; Barakhadi combiner; 23,040+ Sentence Builder; 15-Q Quiz) |
| `swasa_and_guides.js` | 389 | 31,733 | Śvāsa Mahā Vijñānam interactive modules & guides |
| `favicon.svg` | 47 | 2,627 | Standalone SVG vector icon |
| `README.md` | 63 | 5,659 | Module documentation |

## 3. Section Map (`index.html`)
1. `#overview` — Chandaḥ-śāstra & The Science of Metre hero
2. `#sanskrit-tutor` — 1. Learn Sanskrit — Beginner to Pro (`sanskrit_tutor.js`)
3. `#scanner` — 2. Real-Time Metre Scanner & Prosody Analyzer (Devanagari, Telugu, IAST)
4. `#ganas` — 3. The 8 Canonical Gaṇas (*Aṣṭagaṇāḥ*: Ya, Ma, Ta, Ra, Ja, Bha, Na, Sa + La/Ga) & `यमाता राजभानसलगाम्` ring
5. `#binary` — 4. Pingala's Binary System (*Prastāra, Naṣṭa, Uddiṣṭa, Saṅkhyā*)
6. `#meru` — 5. *Meru Prastāra* (Pascal's Triangle) & Fibonacci (*Gopāla-Hemacandra*) Diagonals
7. `#neuroscience` — 6. Cognitive Neuroscience of Mantras & Stotras (EEG Alpha/Theta, Vagus nerve, Hippocampus, Palatal reflexology, DMN, 432/108/528 Hz audio)
8. `#swasa` — 7. *Śvāsa Mahā Vijñānam*: Prāṇas, Breaths, Lifespan & Śaktis
9. `#compendium` — 8. Canonical Metre Compendium

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
