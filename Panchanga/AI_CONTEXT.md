# AI Context & Technical Reference — `Panchanga/`

## 1. Purpose & Authoritative Source
- **Project**: Pañcāṅga (पञ्चाङ्गम् • పంచాంగము) — *The Five Limbs of Sacred Vedic Time, Kāla-Māna Units & 60-Year Jovian Cycle*.
- **Canonical Basis**: *Sūrya Siddhānta* (1.11–14), *Bhāgavata Purāṇa* (3.11), and *Dṛk-Gaṇita* (Meeus solar/lunar longitudes + Chitrapakṣa/Lahiri Ayanāṁśa) for real-time Tithi, Vāra, Nakṣatra, Yoga, Karaṇa, Sunrise/Sunset, Muhūrta, and Ugādi transitions.
- **Tech Stack**: Zero-dependency static HTML5, CSS3, and Vanilla ES6+ JavaScript.
- **Language Support**: Static multilingual labels (Devanagari, Telugu `తెలుగు`, English) across all tables, 60 Samvatsaras, Tithis, Nakṣatras, and Muhūrtas (`lang_mode: none`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 674 | 45,145 | 9-section layout (`overview` + 8 interactive modules) |
| `style.css` | 457 | 9,430 | Dark purple/gold chronometry theme, Muhūrta timelines, festival & Samvatsara tables |
| `panchanga.js` | 1,303 | 64,847 | Astronomical ephemeris, sunrise/sunset solver, root-finding for Tithi/Nakṣatra/Yoga crossings, Kāla-Māna converter, Tārābala/Candrabala, annual festival finder |
| `favicon.svg` | 43 | 1,952 | Standalone SVG vector icon |
| `README.md` | 77 | 5,653 | Documentation & Kāla-Māna reference table |

## 3. Section Map (`index.html`)
1. `#overview` — Pañcāṅga Master Engine hero
2. `#limbs` — 1. The Five Limbs of Sacred Time (*Tithi, Vāra, Nakṣatra, Yoga, Karaṇa*)
3. `#calculator` — 2. Universal Pañcāṅga & Ephemeris Calculator (Any Year, Date, Time & Location)
4. `#kalamana` — 3. *Kāla-Māna* (Sacred Ancient Time Units converter: Truṭi → Kalpa)
5. `#samvatsara` — 4. The 60-Year Jovian Cycle (*Bṛhaspati Samvatsara*, *Navanāyaka* planetary cabinet)
6. `#muhurta` — 5. Live *Muhūrta* & *Kāla* Windows (*Abhijit, Brāhma, Rāhu Kāla, Yamagaṇḍa, Gulika, Durmuhūrta, Varjyam, Amṛta Ghaṭis*)
7. `#tarabala` — 6. Personal *Tārābala* & *Candrabala* Checker
8. `#festivals` — 7. Any-Year Festivals, *Ekādaśī* & *Saṅkrānti* Finder
9. `#philosophy` — 8. The Philosophy of Sacred Vedic Chronometry

## 4. JavaScript Symbols (`panchanga.js`)
- **Constants**: `D2R`, `R2D`, `TITHI_NAMES`, `VARA_DATA`, `NAKSHATRA_NAMES`, `YOGA_NAMES`, `MOVABLE_KARANAS`, `FIXED_KARANAS`, `RASHI_NAMES`, `MASA_NAMES`, `RITU_NAMES`, `SAMVATSARAS`, `VARJYAM_GHATIS`, `AMRITA_GHATIS`, `RAHU_SLOTS`, `YAMA_SLOTS`, `GULIKA_SLOTS`, `DURMUHURTA_DAY_SLOTS`, `LOCATION_PRESETS`, `TARA_NAMES`, `getElongationFn`, `getMoonSidFn`, `getSunSidFn`, `getYogaAngleFn`, `lastCalculatedData`.
- **Functions**:
  - Ephemeris & Astronomy: `norm360()`, `sinD()`, `cosD()`, `tanD()`, `asinD()`, `acosD()`, `msToJD()`, `jdToMs()`, `getLahiriAyanamsa()`, `getSunTropicalLon()`, `getMoonTropicalLon()`, `getSiderealLongitudes()`, `getSunriseSunsetMs()`, `signedAngleDiff()`, `findAngleCrossing()`, `findNextCrossing()`, `findPrevCrossing()`
  - Calendar & Samvatsara: `getAmantaMasaInfo()`, `findUgadiForYear()`, `getSamvatsaraForDate()`, `formatLocalTime()`, `formatRange()`
  - Engines & UI: `calculatePanchanga()`, `calculateNavanayaka()`, `calculateTarabalaChandrabala()`, `generateAnnualEvents()`, `runKalaManaConverter()`, `renderSamvatsaraCatalog()`, `renderNavanayakaTable()`, `renderAnnualEventsTable()`, `updateTarabalaUI()`, `updatePanchangaUI()`, `initPanchangaScrollSpy()`

## 5. Extension Guidelines for AI
- Keep *Amānta* lunar month & *Ugādi* boundary logic (`findUgadiForYear()`, `getSamvatsaraForDate()`) consistent with `getSiderealLongitudes()`.
- Any new location added to `LOCATION_PRESETS` must include latitude, longitude, and UTC offset.
