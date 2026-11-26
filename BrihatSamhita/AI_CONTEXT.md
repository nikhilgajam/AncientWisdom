# AI Context — `BrihatSamhita/`

## Purpose
Bilingual (`Dual / తెలుగు / English`) interactive encyclopaedia and computational laboratory for **Varāhamihira's *Bṛhat Saṁhitā*** (all 107 Adhyāyas, based on V. Subrahmanya Sastri & M. Ramakrishna Bhat's 1946 Bangalore edition).

## Files
- `index.html`: 11-section layout with language toggle (`Dual / తెలుగు / English`), slide-out drawer, interactive calculators, searchable 107-chapter index, and 12-question quiz.
- `style.css`: Shared dark celestial aesthetic matching `BrihatJataka/`.
- `favicon.svg`: Vāstu + Solar Maṇḍala icon.
- `data_part1.js`: Chapters I–XXXI (3 Skandhas, 5 Siddhāntas, Planetary Courses, Comets/Agastya/Saptarṣi, 9-Region Kūrmavibhāga, Domains/Wars/Year Lords, 195-day Cloud Pregnancy & Droṇa Rainfall).
- `data_part2.js`: Chapters XXXII–LXVII (4 Earthquake Circles, Portents/Crops/Prices, 81-Pada Vāstu Maṇḍala & Rank Dimensions, Dakārgala Well Compass, Vṛkṣāyurveda, 20 Temples, Vajralepa, Idols, Animal Signs).
- `data_part3.js`: Chapters LXVIII–CVII (Pañca Mahāpuruṣa, Perfumes/Gems, 8-Watch Śākuna Cycle, Gocara Benefic Houses, Complete 107-Chapter Index, 12-Question Quiz).
- `brihat_samhita.js`: UI controller (`initHeaderAndLang`, `initIntro`, `initKurma`, `initWeather`, `initPortents`, `initVastu`, `initWaterArts`, `initHumanGems`, `initSakuna`, `initGocara`, `initIndex107`, `initQuiz`).

## Constraints
- Strictly grounded in Varāhamihira's *Bṛhat Saṁhitā*; no invented or non-book rules.
- Maintain bilingual `bi(en, te)` parity across all UI elements.
- Verify JS syntax with `node --check BrihatSamhita\*.js` after edits.
