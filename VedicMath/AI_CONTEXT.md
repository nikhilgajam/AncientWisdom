# AI Context & Technical Reference — `VedicMath/`

## 1. Purpose & Authoritative Source
- **Project**: Vedic Mathematics (वैदिकगणितम् • వైదికగణితము) — *Beginner to Pro Master Computational Studio*.
- **Canonical Basis**: Swami Bharati Krishna Tirtha's 1911–1918 reconstruction (*16 Primary Sūtras* + *13 Upa-Sūtras*).
- **Tech Stack**: Zero-dependency static HTML5, CSS3, and Vanilla ES6+ JavaScript.
- **Language Support**: Static Sanskrit Devanagari, Telugu (`తెలుగు`), and English titles/labels across sections (`lang_mode: none`).

## 2. File Inventory
| File | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 551 | 29,063 | 6-section 4-tier curriculum layout (`overview` + Beginner, Intermediate, Advanced, Pro, Catalog) |
| `style.css` | 637 | 13,535 | Dark emerald/gold math studio theme, step-by-step ray & vinculum displays |
| `vedic_math.js` | 1,185 | 43,750 | Interactive step-by-step mental math engines and 29-aphorism catalog |
| `favicon.svg` | 40 | 1,888 | Standalone SVG vector icon |
| `README.md` | 88 | 5,098 | 4-tier curriculum documentation |

## 3. Section Map (`index.html`)
1. `#overview` — Vedic Mathematics Sanctuary hero
2. `#beginner` — 1. Lightning Mental Shortcuts & Proofs (*Ekādhikena Pūrveṇa*, *Ekanyūnena Pūrveṇa*, *Bījaṅka* mod-9 checksum)
3. `#intermediate` — 2. Universal Multiplication, Duplex Squaring & Vinculum (*Ūrdhva-Tiryagbhyām*, *Nikhilaṁ*, *Dvandva Yoga*, *Yāvadūnam*, *Vinculum / Rekhāṅka*)
4. `#advanced` — 3. *Dhvajāṅka* (The Flag Method — universal single-line division)
5. `#pro` — 4. *Vilokanam* (Instant cube roots $\sqrt[3]{N}$ by inspection)
6. `#catalog` — 5. Complete Canonical Catalog: 16 Primary Sūtras & 13 Upa-Sūtras

## 4. JavaScript Symbols (`vedic_math.js`)
- **Constants**:
  - `VEDIC_SUTRAS` — 16 primary aphorisms (*Mūla-Sūtrāṇi*)
  - `VEDIC_UPASUTRAS` — 13 sub-aphorisms (*Upa-Sūtrāṇi*)
- **Functions**:
  - Level 1 (Beginner): `runEkadhika()`, `runEkanyunena()`, `digitalRoot()`, `runBeejank()`
  - Level 2 (Intermediate): `runUrdhva()`, `runNikhila()`, `computeDuplex()`, `runDuplex()`, `runYavadunam()`, `runVinculum()`
  - Level 3 (Advanced): `runDhvajanka()`
  - Level 4 (Pro & Catalog): `runCubeRoot()`, `renderSutrasCatalog()`
  - Navigation: `initVedicScrollSpy()` (with `setActive`, `onScroll`)

## 5. Extension Guidelines for AI
- Every calculator must render **step-by-step intermediate mental steps** (not just the final numeric answer), matching the pedagogical focus of each Sūtra.
- Preserve `Bījaṅka` (digital root mod 9) verification and `Vilokanam` exact-cube constraints.
