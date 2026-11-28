# AI Context — `SwasaMahaVignanam/`

## Purpose
Bilingual (`Dual / తెలుగు / English`) interactive digital companion and breath-science laboratory for **Aśvinī Sūkta Sahita Śvāsa Mahā Vijñān** (Parts 1 & 2, published by Samartha Sadguru Vedapīṭhamu, Tenali — based on the discourses of Dr. Marella Śrīrāmakṛṣṇa M.Sc., Ph.D. & Pt. Śrīrāma Śarma Ācārya).

## Files
- `index.html`: 11-section layout with language toggle (`Dual / తెలుగు / English`), slide-out navigation drawer, and interactive labs.
- `style.css`: Shared dark celestial aesthetic + `body.red-light-mode` for Aśvinī Sūktam recitation.
- `favicon.svg`: Central Suṣumnā + Iḍā/Piṅgalā Nāḍīs with 7 Chakra bindus.
- `data_part1.js`: Part 1 & Core Science (Yuga Parivartana, Pollution/AICS/Norfloxacin, 2 Pillars Agni & Chakram, Yajnopathy scientific proofs, 21,600 breaths, Animal lifespan table, 12-to-1 Aṅgula Siddhis, 72,000 Nāḍīs / 10 Major Nāḍīs, Pañca Prāṇas, Svara Vijñāna rules, Progeny Matrix, Death Signs, and complete 12-verse Aśvinī Sūktam).
- `data_part2.js`: Part 2 & Advanced Sādhana (Hamsa Gamanam 9-Planet/7-Chakra SVG path, 5 Guided Practices including Drāṁ Sādhana, Kriyā Yoga & Sāvitrī Sādhana 108-cycle & Yukteswar Evolution Math, Three Granthis, Gāyatrī/Karma/WHO/Solar Cycles, Masters & Parables, Complete 54 + 108 Book Index, and 15-question Quiz).
- `swasa.js`: UI controller, SVG Hamsa Gamanam animator, Breath-Rate & Lifespan simulator, 12-Aṅgula slider, Svara Vijñāna checker, Web Audio Guided Breath Pacer + Drāṁ counter, Kriyā Yoga evolution calculator, Red-Light Aśvinī Sūktam reader & timer, searchable 162-topic index, and quiz.

## Constraints
- Strictly grounded in *Swasa Maha Vignanam Telugu.pdf* (Parts 1 & 2); no invented or assumed rules.
- Maintain bilingual `bi(en, te)` parity across all UI elements.
- Verify JS syntax with `node --check SwasaMahaVignanam\*.js` after edits.
