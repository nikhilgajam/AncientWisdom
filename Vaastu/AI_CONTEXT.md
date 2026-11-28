# AI Context & Technical Reference — `Vaastu/`

## 1. Purpose & Authoritative Source
- **Project**: Vāstu-śāstra (వాస్తు శాస్త్రము • वास्तुशास्त्रम्) — *The Secret World of Vaastu*.
- **Canonical Basis**: Authored strictly according to the 352-page work **“The Secret World of Vaastu” (వాస్తు శాస్త్ర వాస్తవాలు)** by **Sri Gouru Thirupati Reddy (గౌరు తిరుపతిరెడ్డి)**, Proddatur, A.P. (8th Edition, 2013).
- **Tech Stack**: Zero-dependency static HTML5, CSS3, Vanilla ES6+ JavaScript, and interactive SVG diagrams.
- **Language Support**: Full bilingual toggle via `<body data-lang="dual | telugu | english">` (`setLanguage()`) with `Noto Sans Telugu` and `Vaastu` drawer standard.

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 1,777 | 156,474 | 15-section layout (`overview`, `zones`..`proverbs`) with sticky header, segmented language toggle (`dual` default), and slide-out drawer |
| `style.css` | 1,567 | 33,161 | Dark architectural cyan/gold theme, bilingual display rules, drawer navigation, expanded 16-zone matrix & SVG containers |
| `vaastu.js` | 6,854 | 541,862 | Complete bilingual datasets, enlarged/centered Vīthi Śūla & Gunakam/Staircase/Multi-Storey SVGs, House Layout Diagnostic, Item/Stair/Duplex/Separate-Floor validators |
| `favicon.svg` | 63 | 3,445 | Standalone SVG vector icon |
| `README.md` | 119 | 10,288 | 10-module documentation & citation |

## 3. Section Map (`index.html` — 15 Sections)
1. `#overview` — Hero & overview
2. `#zones` — 1. 16-Zone Perimeter Matrix (*Uccha* vs *Neecha*, pp. 12–13)
3. `#vithi` — 2. Street Focus & Road Thrust Simulator (*Vīthi Śūla*, p. 76)
4. `#gunakam` — 3. Angular Plots & Set-Square Principle (*Gunakam*, p. 299)
5. `#sitegrades` — 4. Classification & 4 Grades of Building Sites (A, B, C, D; pp. 61–63)
6. `#diagnostic` — 5. Interactive House Layout Validator & Diagnostic Calculator (0–100% score)
7. `#items` — 6. Household Item Placement Guide & Checker
8. `#staircases` — 6B. Steps, Staircase Placement & Lift Note
9. `#multistorey` — 6C. Duplex & Triplex (Multi-Storey) Houses
10. `#separatefloors` — 6D. Separate Floors, Portions & Multi-Storied Apartment Blocks
11. `#temples` — 6. Temple Vaastu Archaeological Case Studies (Tirumala, Srisailam, Srikalahasti, Vijayawada, Hampi, Kashi; pp. 210–243)
12. `#living` — 7. Living Vaastu & Construction Guidelines (Rented houses, sleeping direction, Tulasi, cellars, under-stairs)
13. `#compass` — 8. Magnetic Compass & Tilted Plot Orientation (*Vidisha*, pp. 286–300)
14. `#industrial` — 9. Industrial & Commercial Vaastu Blueprint & Forensic Case Studies (pp. 249, 346)
15. `#proverbs` — 10. Treasury of Thirupati Reddy's Rhyming Golden Proverbs

## 4. JavaScript Symbols (`vaastu.js`)
- **Constants & State**: `VAASTU_16_ZONES`, `VITHI_SHULA_RULES`, `GUNAKAM_CASES`, `SITE_GRADES_DATA`, `HOUSEHOLD_ITEMS_DATA`, `DIRECTIONAL_ITEMS_GUIDE`, `TEMPLE_VAASTU_STUDIES`, `SPECIAL_LIVING_RULES`, `HISTORICAL_GLOBAL_STUDIES`, `COMPASS_TILT_RULES`, `THIRUPATI_REDDY_PROVERBS`, `STAIRCASE_GUIDE_DATA`, `STAIRCASE_BOOK_RULES`, `MULTISTOREY_GUIDE_DATA`, `MULTISTOREY_BOOK_RULES`, `SEPARATE_FLOORS_GUIDE_DATA`, `SEPARATE_FLOORS_BOOK_RULES`, `currentLang`, `selectedZoneId`, `selectedVithiId`, `selectedGunakamId`, `selectedTempleId`, `selectedHistoricalId`, `selectedDirKey`.
- **Functions**: `setLanguage()`, `renderZoneDetail()`, `renderVithiDetail()`, `updateVithiSvg()`, `renderGunakamDetail()`, `updateGunakamSvg()`, `renderTempleTabs()`, `renderTempleDetail()`, `renderHistoricalTabs()`, `renderHistoricalCase()`, `renderSiteGrades()`, `renderSpecialLiving()`, `renderCompassTilt()`, `evaluateHouseVaastu()`, `runHouseDiagnostic()`, `renderProverbs()`, `renderItemChecker()`, `updatePositionOptions()`, `checkItemPlacement()`, `renderDirectionalGuide()`, `renderHouseholdItems()`, `renderStaircaseValidator()`, `updateStairPosOptions()`, `checkStaircasePlacement()`, `renderStaircaseSvg()`, `renderStaircaseCards()`, `renderMultiStoreyValidator()`, `updateMultiOptionOptions()`, `checkMultiStoreyLayout()`, `renderMultiFloorSvg()`, `renderMultiStoreyCards()`, `renderSeparateFloorsValidator()`, `updateSepFloorOptionOptions()`, `checkSeparateFloorLayout()`, `renderSeparateFloorsCards()`, `initNavDrawer()`, `initVaastuScrollSpy()`.

## 5. Extension Guidelines for AI
- Every rule, page citation, and proverb must remain strictly faithful to Sri Gouru Thirupati Reddy's book (empirical geometry & 90° *Gunakam*, non-astrological).
- Preserve bilingual English + Telugu (`Noto Sans Telugu`) fields on all data objects.
