# AI Context & Technical Reference — `BrihatJataka/`

## 1. Purpose & Authoritative Source
- **Project**: Bṛhat Jātaka (बृहज्जातकम् • బృహజ్జాతకము) — Complete Interactive Treatise on Varāhamihira's Natal Astrology.
- **Canonical Basis**: Strictly derived from **Paṇḍita Bhūṣaṇa V. Subrahmanya Sastri's** English translation and explanatory notes of *Varāhamihira's Bṛhat Jātaka* (2nd Edition, 1996; all **28 Adhyāyas / 588 PDF pages**).
- **Tech Stack**: Zero-dependency static HTML5, CSS3, Vanilla ES6+ JavaScript, SVG, and HTML5 Canvas.
- **Language Support**: Full bilingual engine via `<body data-lang="dual | telugu | english">` with `.lang-en`, `.lang-te`, and `.dual-sep` spans (`Noto Sans Telugu`, `Nirmala UI`, `Gautami`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 588 | 46,781 | 17 interactive sections (`sec-personal`, `sec-ch1`..`sec-ch27-28`, `sec-quiz`), segmented language toggle, and slide-out drawer |
| `style.css` | 802 | 17,068 | Cosmic dark-gold theme, bilingual display rules, `.guide-details` cards, South-Indian 4×4 `.south-chart`, button contrast overrides |
| `data_part1.js` | 430 | 42,517 | Ch. I–VI datasets (`BJ_RASIS`, `BJ_BHAVAS`, `BJ_TRIMSAMSA_ODD/EVEN`, `BJ_PLANETS`, `BJ_CH3_TREES`, `BJ_GESTATION_MONTHS`, `BJ_CH5_HIGHLIGHTS`, `BJ_CH6_BALARISHTA`) |
| `data_part2.js` | 256 | 36,205 | Ch. VII–XV datasets (`BJ_AYURDAYA_DATA`, `BJ_NAISARGIKA_DASAS`, `BJ_DASA_QUALITIES`, `BJ_ASHTAKAVARGA_RULES`, `BJ_KARMAJIVA`, `BJ_RAJAYOGAS_VM`, `BJ_NABHASA_YOGAS`, `BJ_CHANDRA_YOGAS`, `BJ_DVIGRHA_PAIRS`, `BJ_PRAVRAJYA_ORDERS`) |
| `data_part3.js` | 417 | 48,179 | Ch. XVI–XXVIII datasets (`BJ_NAKSHATRAS`, `BJ_PLANETS_IN_SIGNS`, `BJ_DRISHTI_MOON_SIGN`, `BJ_BHAVA_EFFECTS`, `BJ_STRI_TRIMSAMSA`, `BJ_ANISHTA_YOGAS`, `BJ_NASHTA_DIRS`, `BJ_DREKKANAS_36`, `BJ_QUIZ`) |
| `data_te_extra.js` | 198 | 22,588 | Full Telugu translations for all 84 sign placements (`BJ_PLANETS_IN_SIGNS_TE`) and all 84 bhāva placements (`BJ_BHAVA_EFFECTS_TE`) |
| `places.js` | 293 | 32,000+ | `BJ_PLACES` — 275 birth places across Telangana (incl. Medchal-Malkajgiri / Shamirpet, Yadadri Bhuvanagiri / Ramannapeta), Andhra Pradesh, India, and World with `lat`, `lon`, `tz` |
| `ephemeris.js` | 181 | 6,320 | `window.BJ_EPHEMERIS.computeChart(...)` — Julian Day, Chitrapakṣa (Lahiri) Ayanāṁśa, Ascendant (Lagna), Meeus Sun/Moon, and J2000 Keplerian Mars..Saturn |
| `guides.js` | 301 | 47,977 | `injectGuides()` — Injects 5-part beginner guides (What It Means, How to Fill, How to Read, Example, and For Girls/Women) into all 17 sections |
| `brihat_jataka.js` | 1,567 | 113,305 | Main controller powering all 17 sections, SVG/Canvas visuals, calculators, personal horoscope analyzer, and quiz |
| `favicon.svg` | 31 | 1,453 | 12-spoke zodiacal & Horā vector icon |
| `README.md` | 30 | 3,959 | Module documentation |

## 3. Section Map (`index.html`)
1. `#sec-personal` — Personal Birth Chart & Bṛhat Jātaka Reading (live ephemeris, South-Indian Kundali, Ṣaḍvarga & Dignity, Lagna/Drekkaṇa, Nakṣatra, Moon-in-Sign, Karmajīva, 22nd Drekkaṇa/Gati, Strījātaka Ch. XXIV when Female, Yoga Detector, Planets in Signs & Bhāvas, Sync to Āyurdāya & Aṣṭakavarga)
2. `#sec-ch1` — Ch. I: 12-Rāśi Kālapuruṣa SVG Wheel, Ṣaḍvarga Calculator, 12 Bhāva Names
3. `#sec-ch2` — Ch. II: 7 Planets, 8-Direction SVG Compass (`Digbala`), 5-Fold Friendship & Aspect Calculator
4. `#sec-ch3-5` — Ch. III–V: Viyoni & Trees, 10-Month Gestation, Delivery Chamber & Couch SVG
5. `#sec-ch6` — Ch. VI: Bālāriṣṭa (12 Slokas) & Ariṣṭa-Bhaṅga Cancellations
6. `#sec-ch7` — Ch. VII: Piṇḍāyurdāya & Cakrapāta Haraṇa Calculator (with `120y 5d` preset) & Paramāyus
7. `#sec-ch8` — Ch. VIII: Daśā & Antardaśā Fraction Engine (`1`, `1/2`, `1/3`, `1/4`, `1/7`), 8-fold qualities, Naisargika years (`120` yrs)
8. `#sec-ch9` — Ch. IX: Live 336-Bindu Aṣṭakavarga Matrix (`Sun 48, Moon 48, Mars 39, Merc 54, Jup 56, Ven 52, Sat 39`) & Sarvāṣṭakavarga Canvas bar chart
9. `#sec-ch10-11` — Ch. X–XI: Karmajīva & Varāhamihira's Rājayogas
10. `#sec-ch12` — Ch. XII: 32 Nābhasa Yogas Visual Pattern Lab (3 Āśraya, 2 Dala, 20 Ākṛti, 7 Saṅkhyā)
11. `#sec-ch13-15` — Ch. XIII–XV: Candra Yogas, 21 Dvigrha Planet Pairs, 7 Pravrajyā Ascetic Orders
12. `#sec-ch16-18` — Ch. XVI–XVIII: 27 Nakṣatras & 7×12 Planets in Signs
13. `#sec-ch19-21` — Ch. XIX–XXI: Dṛṣṭi-Phala Aspect Matrix, 7×12 Bhāvas, Āśraya/Vargas
14. `#sec-ch22-24` — Ch. XXII–XXIV: Strījātaka Rāśi×Triṁśāṁśa Matrix, Aniṣṭa Yogas, Prakīrṇa
15. `#sec-ch25-26` — Ch. XXV–XXVI: Niryāṇa (22nd Drekkaṇa/Gati/Mokṣa) & Naṣṭajātaka Solver (from Dhaniṣṭhā)
16. `#sec-ch27-28` — Ch. XXVII–XXVIII: Filterable 36-Drekkaṇa Gallery & Varāhamihira's Lineage
17. `#sec-quiz` — 12-Question Bilingual Mastery Quiz

## 4. Key Architecture Notes for AI
- Never assume astrological rules outside the book; `data_part1..3.js` encode the exact Sastri translation.
- All bilingual text uses `bi(en, te)` producing `.lang-en` + `.dual-sep` + `.lang-te`.
- Gold buttons (`.btn-primary`, `.lang-opt.active`) override `.lang-te` color to `#06080d !important` in `style.css` to prevent gold-on-gold invisibility.
- `guides.js` dynamically injects `.guide-details` into every `#sec-*` on `DOMContentLoaded`.
