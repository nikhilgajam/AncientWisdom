# AI Context & Technical Reference — `Katapayadi/`

## 1. Purpose & Authoritative Source
- **Project**: KaTaPaYadi Master (कटपयादि • కటపయాది) — *Ancient Indian Alphanumeric Cipher & Mnemonic Studio*.
- **Canonical Basis**: Classical *Kaṭapayādi* verse (*Kādirnava Ṭādirnava Pādipañcaka Yadyaṣṭakam*, *Jñeyā śūnyā svarāḥ*, *Aṅkānāṁ Vāmato Gatiḥ*), Melpathur's *Nārāyaṇīyam*, *Sadratnamālā* ($\pi$ shloka *Gopībhāgyamadhuvrātaḥ*), Mahābhārata's *Jaya = 18*, and *Chandaḥ-śāstra* prosody interlock.
- **Tech Stack**: Zero-dependency static HTML5, CSS3, Vanilla ES6+ JavaScript, Web Audio API + local MP3 audio (`audio/`), and `localStorage` persistence.
- **Language Support**: Multi-script switcher across Devanagari, Telugu (`తెలుగు`), and English (IAST/Phonetic) (`lang_mode: none`).

## 2. File Inventory
| File / Dir | Lines | Bytes | Role |
| :--- | ---: | ---: | :--- |
| `index.html` | 1,183 | 71,782 | 8-section layout (`rules`..`quiz`), virtual keyboard modal, Pi player |
| `style.css` | 3,332 | 63,736 | Dark cyan/gold theme, 10-column matrix, Varṇamālā grid, virtual keyboard |
| `katapayadi.js` | 3,016 | 145,811 | Multi-script tokenizer, cipher encoder/decoder, memory vault, Pi shloka audio sequencer, Chandas interlock, quiz |
| `audio/` | — | — | 94 local MP3s + `oursanskrit/` 50 Varṇamālā recordings |
| `favicon.svg` / `.png` / `.ico` | — | — | Vector & raster icons |
| `README.md` | 135 | 10,249 | Comprehensive documentation |

## 3. Section Map (`index.html`)
1. `#rules` — The 4 Fundamental Rules of KaTaPaYadi (Devanagari & Telugu toggleable)
2. `#matrix` — Dynamic 10-Column Master Matrix (Ka, Ṭa, Pa, Ya series + Vowels)
3. `#varnamala` — Complete 52-Akṣara Sanskrit & Telugu Varṇamālā with articulation (*Kaṇṭhya..Oṣṭhya*), effort (*Alpa/Mahā-prāṇa, Aghoṣa/Ghoṣa, Anunāsika*), and audio
4. `#converter` — Two-Way Converter (Text→Number & Number→Text) + Devanagari↔Telugu Virtual Keyboard
5. `#remember` — "Remember Anything" Memory Studio & `localStorage` Vault (JSON import/export)
6. `#examples` — Historic Masterpieces (*Jaya = 18*, 32-decimal $\pi$ shloka, *Āyurārogyasaukhyam = 1,712,210*, Mādhava Sine Tables, Melakarta Rāgas)
7. `#chandas` — Chandas & KaTaPaYadi Checksum Interlock
8. `#quiz` — Rapid-fire Practice Lab & Flashcard Quiz (Score & Streak)

## 4. JavaScript Symbols (`katapayadi.js`)
- **Key Constants & State**: `KATAPAYADI_DATA`, `DEVANAGARI_CONSONANT_MAP`, `DEVANAGARI_VOWELS`, `DEVANAGARI_MATRAS`, `VIRAMA`, `TELUGU_CONSONANT_MAP`, `TELUGU_VOWELS`, `TELUGU_MATRAS`, `TELUGU_VIRAMA`, `CONSONANT_DEFS`, `KATAPAYADI_DICTIONARY`, `MELAKARTA_RAGAS`, `PI_SHLOKA_DATA`, `VARNAMALA_DATA`, `KATAPAYADI_MNEMONIC_PAIRS`, `KATAPAYADI_SPECIAL_MNEMONICS`, `STORAGE_KEY`, `ASHTA_GANAS`, `CHANDAS_METRES_DATA`, `DEV_TO_AUDIO_MAP`, `VK_DATA`.
- **Key Functions**:
  - Parsing & Cipher: `matchSingleConsonant()`, `parsePhoneticEnglish()`, `parseDevanagari()`, `parseTelugu()`, `tokenizeText()`, `runTextToNumber()`, `runNumberToText()`, `generateMnemonicSentences()`, `verifyPhraseInDecoder()`
  - Memory Vault: `getSavedVault()`, `saveVaultToStorage()`, `getInitialVaultSeed()`, `saveMemoryCard()`, `deleteVaultCard()`, `renderVaultCards()`, `exportVaultJSON()`, `importVaultJSON()`, `clearAllVault()`
  - Pi & Audio: `setPiScriptMode()`, `renderPiGrid()`, `playPiFullRecitation()`, `togglePiAudio()`, `playNextPiSyllable()`, `playHarmonicTone()`, `playAudioFile()`, `playAudioLetter()`, `playVarnaSingle()`, `playVarnaSeries()`
  - Chandas Interlock & Quiz: `scanChandasText()`, `renderGanasRibbon()`, `inspectGana()`, `runChandasScan()`, `renderChandasTable()`, `generateQuizQuestion()`, `checkQuizAnswer()`
  - Virtual Keyboard & UI: `setupMasterMatrixInteractions()`, `setupVirtualKeyboard()`, `setVirtualKeyboardScript()`, `filterVirtualKeyboardCategory()`, `renderVarnamalaGrid()`, `setRulesLanguage()`, `setupNavigationHighlight()`

## 5. Extension Guidelines for AI
- Conjuncts (`Samyuktākṣara` / `వత్తులు`) must always resolve to the **last** consonant before the vowel, and `Vāmato Gatiḥ` reverses syllable digits right-to-left.
- Preserve offline audio paths (`audio/...`) and `localStorage` schema compatibility (`STORAGE_KEY`).
