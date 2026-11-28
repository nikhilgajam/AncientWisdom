# AI Context & Technical Reference — `YogaShastra/`

## 1. Purpose & Authoritative Source
- **Project**: Yoga Śāstra (योगशास्त्रम् • యోగశాస్త్రము) — *Pātañjala Yoga Sūtras, Haṭha Yoga Pradīpikā & Sūrya Namaskāra*.
- **Canonical Basis**: Strictly grounded in **Patañjali's *Yoga Sūtras*** (all 4 Pādas / 195 Sūtras), **Svātmārāma's *Haṭha Yoga Pradīpikā*** (4 Upadeśas), **12-Step *Sūrya Namaskāra***, and **Vijñāna Bhairava Tantra** (Rudrayāmala Tantra, 112 Dhāraṇās / 163 verses).
- **Tech Stack**: Zero-dependency static HTML5, CSS3 (shared `../SwasaMahaVignanam/style.css` + custom CSS animated stick-figure Āsanas), Vanilla ES6+ JavaScript, SVG, and Web Audio API.
- **Language Support**: Full bilingual toggle via `<body data-lang="dual | telugu | english">` (default `dual`) with `.lang-en`, `.lang-te`, and `.dual-sep` spans.

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 216 | 17,380 | 11-section layout (`sec-overview`..`sec-quiz`) with sticky header, language toggle, drawer nav, and animated CSS Asana styles |
| `yoga.js` | 587 | 63,989 | Canonical Yoga Sūtra & Haṭha datasets, animated CSS posture diagrams for all 15 Āsanas & 12 Sūrya Namaskāra steps, Bhrāmarī Web Audio pacer, and 15-question quiz |
| `favicon.svg` | 8 | 668 | Standalone SVG vector icon |

## 3. Section Map (`index.html` — 11 Sections)
1. `#sec-overview` — 1. Structure of Pātañjala Yoga Sūtras (4 Pādas: Samādhi, Sādhana, Vibhūti, Kaivalya)
2. `#sec-vritti` — 2. Pañca-Vṛtti, Pañca-Kleśa & 9 Antarāyas Analyzer
3. `#sec-ashtanga` — 3. Interactive Aṣṭāṅga 8-Limb Map & 15 Haṭha Āsanas (with step-by-step tutorials & live animated CSS posture figures)
4. `#sec-shatkarma` — 4. Ṣaṭkarmas — The Six Purificatory Practices (Dhauti, Basti, Neti, Trāṭaka, Nauli, Kapālabhāti)
5. `#sec-kumbhaka` — 5. 8 Classical Kumbhakas & Web Audio Bhrāmarī Pacer
6. `#sec-mudra` — 6. 10 Mahā-Mudrās & 4 Nādānusandhāna States
7. `#sec-surya` — 7. Sūrya Namaskāra — 12 Postures, Mantras, Breath Sequence & Animated Tutorial
8. `#sec-diet` — 8. Haṭha Prerequisites, 6 Obstacles/Success Factors, Mitāhāra & Pathya/Apathya Diet (HYP I.12–16, I.58–66)
9. `#sec-nadis` — 9. Nāḍī Śuddhi, 3 Granthis & 10 Inner Nāda Sounds (HYP II.7–19, IV.84–86)
10. `#sec-vibhuti` — 10. Saṁyama Vibhūtis & Kaivalya Pāda Philosophy (YS Books III–IV)
11. `#sec-vbt` — 11. Vijñāna Bhairava Tantra — 112 Dhāraṇās & 3 Upāyas (Rudrayāmala Tantra, 163 Verses)
12. `#sec-quiz` — 12. Yoga Śāstra Mastery Quiz (18 bilingual questions)

## 4. Extension Guidelines for AI
- Keep zero external runtime dependencies; all Āsana & Sūrya Namaskāra figures use pure CSS/SVG animations defined in `index.html` and `yoga.js`.
- Preserve `bi(en, te)` bilingual rendering across all sections and quiz items.
