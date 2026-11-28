# AI Context & Technical Reference — `Ayurveda/`

## 1. Purpose & Authoritative Source
- **Project**: Āyurveda (आयुर्वेदः • ఆయుర్వేదము) — *The Science of Longevity, Tridoṣa & Constitutional Medicine*.
- **Canonical Basis**: *Bṛhat-trayī* (*Charaka Saṁhitā*, *Suśruta Saṁhitā*, *Aṣṭāṅga Hṛdaya*).
- **Tech Stack**: Zero-dependency static HTML5, CSS3, and Vanilla ES6+ JavaScript.
- **Language Support**: Static multilingual labels (Sanskrit Devanagari, Telugu `తెలుగు`, and English) embedded directly in headings and UI cards (`data-lang` toggle not used; `lang_mode: none`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 501 | 30,054 | 12-section layout (`overview` + 10 clinical pillars + Suśruta Saṁhitā section) with sticky header and drawer/scroll navigation |
| `style.css` | 485 | 11,211 | Dark emerald/gold theme, responsive grids, circadian dial, and assessment UI |
| `ayurveda.js` | 538 | 25,565 | Prakṛti & Tri-Guṇa quiz engines, Dinacaryā 24h live clock, Ṛtu-caryā renderer, and ScrollSpy |
| `susruta.js` | 206 | 15,177 | Suśruta Saṁhitā Surgical & Clinical Pillar (Śalya-tantra, 8 Śastra-karmas, 101 Yantras/20 Śastras, 107 Marmas, Agni-kṣāra-jalaukā, 4-stage Vraṇa) |
| `favicon.svg` | 40 | 1,881 | Standalone SVG vector icon |
| `README.md` | 48 | 3,859 | User-facing documentation |

## 3. Section Map (`index.html`)
1. `#overview` — Āyurveda Knowledge Sanctuary hero & introductory verse (*Charaka Saṁhitā Sūtrasthāna 1.41*)
2. `#mahabhuta` — 1. *Pañca Mahābhūta* (Ākāśa, Vāyu, Agni, Jala, Pṛthvī) & sense organs
3. `#doshas` — 2. *Tri-Doṣa Matrix* (Vāta, Pitta, Kapha bio-energetics)
4. `#prakriti` — 3. Interactive *Prakṛti* Diagnostic Assessment (8-question constitutional percentage calculator)
5. `#gunas` — 4. *Tri-Guṇas* (Sattva, Rajas, Tamas psychic bio-energetics & assessment)
6. `#agni` — 5. *Caturvidha Agni & Āma* (Samāgni, Viṣamāgni, Tīkṣṇāgni, Mandāgni & *Dīpana-Pācana*)
7. `#rasas` — 6. *Ṣaḍ-Rasa* (Madhura, Amla, Lavaṇa, Kaṭu, Tikta, Kaṣāya pharmacodynamics)
8. `#dinacharya` — 7. *Dinacaryā* (Live 24-hour circadian doshic clock synced to `new Date().getHours()`)
9. `#rtucarya` — 8. *Ṛtu-caryā* (6 seasonal regimens: Śiśira, Vasanta, Grīṣma, Varṣā, Śarad, Hemanta; *Sañcaya, Prakopa, Praśamana*)
10. `#dhatus` — 9. *Sapta Dhātus* (Rasa → Rakta → Māṁsa → Medas → Asthi → Majjā → Śukra → Ojas)
11. `#branches` — 10. *Aṣṭāṅga Āyurveda* (8 clinical branches)
12. `#susruta` — 11. *Suśruta Saṁhitā* — Surgery, 107 Marmas, 101 Yantras/20 Śastras, 8 *Śastra-karmas* & *Anuśastra* (`susruta.js`)

## 4. JavaScript Symbols (`ayurveda.js`)
- **Top-Level Constants & State**:
  - `PRAKRITI_QUESTIONS` — 8-dimension constitutional questionnaire data
  - `TRIGUNA_QUESTIONS` — Psychic *Sattva / Rajas / Tamas* assessment items
  - `DINACHARYA_CYCLES` — 24-hour Vāta/Pitta/Kapha circadian blocks and lifestyle guidance
  - `RTUCARYA_DATA` — 6 seasonal protocols with dosha accumulation/aggravation/pacification states
  - `userAnswers`, `trigunaAnswers` — In-memory quiz response state
- **Functions**:
  - `initPrakritiQuiz()`, `computePrakriti()` — Renders Prakṛti questions and calculates Vāta/Pitta/Kapha percentages
  - `initTrigunaQuiz()`, `computeTriguna()` — Renders Tri-Guṇa questions and calculates Sattva/Rajas/Tamas profile
  - `renderDinacharya()` — Highlights active circadian window based on local system clock
  - `renderRtucarya()` — Renders the 6 seasonal cards
  - `initAyurvedaScrollSpy()` (with inner `setActive`, `onScroll`) — Syncs navigation highlight with scroll position

## 5. Extension Guidelines for AI
- Keep zero external runtime dependencies (only Google Fonts in `index.html`).
- Preserve Sanskrit Devanagari, Telugu (`తెలుగు`), and English terminology together in any new cards or quiz items.
- Any new clinical pillar should follow the `<section id="...">` pattern and register in `initAyurvedaScrollSpy()`.
