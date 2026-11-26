# AI Context & Technical Reference — `SuryaSiddhanta/`

## 1. Purpose & Authoritative Source
- **Project**: Sūrya Siddhānta (सूर्यसिद्धान्त • సూర్యసిద్ధాంతః) — *Complete Interactive Learning & Computational Astronomy Laboratory (Beginner to Pro)*.
- **Canonical Basis**: Rev. Ebenezer Burgess (1860) & P.C. Sengupta / P. Gangooly (1935 Calcutta Edition) across all **14 Adhyāyas**, plus *Drik-Gaṇita* (*Bīja*-corrected + Chitrapakṣa/Lahiri Ayanāṁśa) for the *Janma Nakṣatra* Finder.
- **Tech Stack**: Zero-dependency static HTML5, CSS3, Vanilla ES6+ JavaScript, SVG, and HTML5 Canvas.
- **Language Support**: Full bilingual toggle via `<body data-lang="dual | telugu | english">` (`setLanguage()`, `initLanguageSelector()`) with `.lang-en`, `.lang-te`, and `.lang-sa` spans (`Noto Sans Telugu`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 2,123 | 170,986 | 20-section portal with sticky header, segmented language toggle, level filter, and slide-out drawer (`navDrawer`) |
| `style.css` | 1,863 | 38,539 | Deep cosmic gold/cyan/nebula theme, bilingual CSS rules, drawer navigation, canvas containers |
| `surya_siddhanta.js` | 3,531 | 185,743 | Canonical constants, 24-Jyā table, 4-step *Spaṣṭīkaraṇa* & double epicycle simulator, eclipse/parallax/gnomon/Matsya engines, Nakṣatra finder, 14-chapter reader, quiz |
| `favicon.svg` | 53 | 2,784 | Standalone SVG vector icon |
| `README.md` | 82 | 7,911 | Complete 20-section documentation & canonical constants |

## 3. Section Map (`index.html` — 20 Sections)
1. `#foundations` — 1. Cosmic Epochs & Units (*Ch. 1, 12*)
2. `#calculator` — 2. Live *Ahargaṇa* & Mean Planetary Longitudes (*Ch. 1*)
3. `#time-lords` — 3. Lords of Time (*Varṣeśa, Māseśa, Dineśa, Horā*) & 60-Year Jovian Cycle (*Ch. 1, 14*)
4. `#trig` — 4. 24-*Jyā* Trigonometry Lab (`R = 3438'`, `225'` steps) (*Ch. 2*)
5. `#epicycles` — 5. 4-Step True Places (*Spaṣṭīkaraṇa*) & Double Epicycle Retrograde Canvas (*Ch. 2*)
6. `#sundial` — 6. 12-Aṅgula *Śaṅku* (Gnomon) & Latitude Lab (*Ch. 3*)
7. `#matsya-meridian` — 7. *Matsya* Circle & Ujjain Prime Meridian / *Deśāntara* (*Ch. 1, 3*)
8. `#lunar-eclipse` — 8. Lunar Eclipses & Earth's Shadow Cone (*Ch. 4*)
9. `#solar-eclipse` — 9. Solar Eclipse Parallax: *Lambana* & *Nati* (*Ch. 5*)
10. `#chedyaka` — 10. *Chedyaka* Geometric Eclipse Projection & *Valana* (*Ch. 6*)
11. `#conjunctions` — 11. Planetary Conjunctions & *Graha-Yuddha* (*Ch. 7*)
12. `#nakshatra` — 12. 28 Nakṣatras, *Yogatārā* Catalog & Personal *Janma Nakṣatra* Finder (*Ch. 8*)
13. `#udayasta` — 13. Heliacal Risings & Settings (*Kālāṁśa* Combustion Limits) (*Ch. 9*)
14. `#moon-cusp` — 14. Moon Phase & Elevation of Cusps (*Śṛṅgonnati*) (*Ch. 10*)
15. `#mahapata` — 15. *Vyatīpāta* & *Vaidhṛti* (*Mahāpāta*) (*Ch. 11*)
16. `#bhugola` — 16. *Bhūgola* & 4 Equatorial Cities (*Laṅkā, Yamakoṭi, Siddhāpura, Romaka*) (*Ch. 12*)
17. `#instruments` — 17. Armillary Sphere (*Gola-Yantra*) & Ancient Instruments (*Ch. 13*)
18. `#time-systems` — 18. The Nine Systems of Time (*Nava Mānāni*) (*Ch. 14*)
19. `#chapters` — 19. All 14 *Adhyāyas* Syllabus & Burgess Reader
20. `#quiz` — 20. Astronomical Mastery Assessment (10 questions)

## 4. JavaScript Symbols (`surya_siddhanta.js`)
- **Constants**: `SS_CONSTANTS` (`MAHAYUGA_YEARS: 4320000`, `SAVANA_DAYS_MAHAYUGA: 1577917828`, `KALI_EPOCH_JD: 588465.5`, `RADIUS_JYA: 3438`, `REVOLUTIONS`, `EPICYCLES`, `PLANET_DIAMETERS_YOJANA`, `COMBUSTION_LIMITS_DEG`), `RASHIS`, `NAKSHATRAS`, `JOVIAN_YEARS_60`, `YOGATARA_DATA`, `NAKSHATRAS_DETAILED`, `JYA_TABLE`, `CHAPTERS_DATA`, `QUIZ_QUESTIONS`, `TELUGU_CHAPTER_NAMES`, `TELUGU_RASHIS`, `TELUGU_NAKSHATRAS_DATA`.
- **Core Math & Initializers**: `getJulianDay()`, `formatLongitude()`, `calculateSSPlanets()`, `calculateTrigJya()`, `calculate4StepPlanetaryPlace()`, `calculateTimeLords()`, `calculateLunarEclipse()`, `calculateMoonCusp()`, `getSSMoonPosition()`, `initNavDrawer()`, `setLanguage()`, `initLanguageSelector()`, `initLevelFilter()`, `initScrollSpy()`, `initCalculator()`, `initTrigLab()`, `init4StepSolver()`, `initEpicycleSimulator()`, `initGnomonSimulator()`, `initMatsyaCanvas()`, `initDesantaraLab()`, `initLunarEclipseTool()`, `initSolarParallaxSimulator()`, `initChedyakaCanvas()`, `initYuddhaAnalyzer()`, `initMoonCuspVisualizer()`, `initCombustionChecker()`, `initBhugolaCities()`, `initArmillaryCanvas()`, `initChapterViewer()`, `initQuiz()`, `initYogataraTable()`, `initNakshatraToday()`, `initBirthNakshatraTool()`.

## 5. Extension Guidelines for AI
- Preserve `SS_CONSTANTS` verbatim from *Sūrya Siddhānta* (do not substitute modern constants inside classical *Spaṣṭīkaraṇa* solvers).
- Note that in `Dual` mode (`data-lang="dual"`), `style.css` displays `.lang-en` and `.lang-te` (in gold) while hiding `.lang-sa` in body content.
