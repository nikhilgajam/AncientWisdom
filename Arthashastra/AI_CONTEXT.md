# AI Context & Technical Reference — `Arthashastra/`

## 1. Purpose & Authoritative Source
- **Project**: Kauṭilya's Arthaśāstra (कौटिलीय अर्थशास्त्रम् • కౌటిల్య అర్థశాస్త్రము) — *Statecraft, Economics, Law, Diplomacy & Strategy*.
- **Canonical Basis**: Strictly grounded in **Kauṭilya's (Chāṇakya's) *Arthaśāstra*** — all **15 Adhikaraṇas (150 Chapters)** (R. Shamasastry / R.P. Kangle canonical structure).
- **Tech Stack**: Zero-dependency static HTML5, CSS3 (shared `../SwasaMahaVignanam/style.css`), Vanilla ES6+ JavaScript, and interactive SVG diagrams.
- **Language Support**: Full bilingual toggle via `<body data-lang="dual | telugu | english">` (default `dual`) with `.lang-en`, `.lang-te`, and `.dual-sep` spans.

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 203 | 17,690 | 13-section layout (`sec-overview`..`sec-quiz`) with sticky header, language segmented toggle, and slide-out drawer |
| `arthashastra.js` | 701 | 58,877 | Complete Books I–XV datasets, interactive 12-King Rāja-Maṇḍala SVG, Metrology converter, Profit/Interest simulator, Adhyakṣa filter, and 20-question quiz |
| `favicon.svg` | 8 | 558 | Standalone SVG vector icon |

## 3. Section Map (`index.html` — 13 Sections)
1. `#sec-overview` — 1. The 4 Vidyās (`Ānvīkṣikī`, `Trayī`, `Vārttā`, `Daṇḍanīti`) & All 15 Adhikaraṇas
2. `#sec-saptanga` — 2. Saptāṅga (7 Limbs of State, VI.1) & 18 Tīrthas (I.12)
3. `#sec-mandala` — 3. Interactive 12-King Rāja-Maṇḍala SVG, Ṣāḍguṇya (VII.1), 4 Upāyas, 4 Upadhās, 9 Spy Classes & Śakti-traya
4. `#sec-metrology` — 4. Weights, Measures & 5-Year Yuga Calendar (Book II Ch. 19–20)
5. `#sec-wealth` — 5. Wealth Accumulation Cycle (I.4), 7 Revenue Sources (II.6), 40 Embezzlement Traps (II.8) & Kauṭilya Profit/Interest Simulator
6. `#sec-law` — 6. Civil, Commercial, Consumer Law & Interest Rates (Books III–IV)
7. `#sec-calamities` — 7. State Calamities (*Vyasanas*) & The 4 Royal Vices (Book VIII)
8. `#sec-war` — 8. War Formations (*Vyūhas*), *Saṅghas* & Siegecraft (Books IX–XV)
9. `#sec-governance` — 9. Royal 8-Part Day/Night Routine (*Āhnikam*, I.19), 3 Envoy Classes (*Dūta*, I.16) & State Salary Scale (V.3)
10. `#sec-adhyakshas` — 10. Capital City Zoning (*Durganiveśa*, II.3–4) & Filterable 28+ Departmental Superintendents (*Adhyakṣas*, Book II)
11. `#sec-forensics` — 11. Inheritance (*Dāyabhāga*), Guilds, Forensics (*Āśumṛtaka-parīkṣā*, IV.7) & Judicial Torture Exemptions (IV.8)
12. `#sec-treaties-tantra` — 12. Specific Treaties (VII.3–12), Book XIV (*Aupaniṣadika*) & All 32 *Tantrayuktis* (Book XV)
13. `#sec-quiz` — 13. Arthaśāstra Mastery Quiz (20 bilingual questions)

## 4. Extension Guidelines for AI
- Keep zero external runtime dependencies (shared styling via `../SwasaMahaVignanam/style.css`).
- Preserve `bi(en, te)` bilingual rendering for headings, controls, and quiz explanations.
- Any new section must match `<section id="sec-..." class="study-section">` and register in `#navDrawer`.
