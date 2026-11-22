# Sūrya Siddhānta (सूर्यसिद्धान्त)
### The Complete Learning & Computational Guide: From Beginner to Pro

> **"अचिन्त्याव्यक्तरूपाय निर्गुणाय गुणात्मने । समस्तजगदाधारमूर्तये ब्रह्मणे नमः ॥"**  
> *"Salutation to the Supreme Consciousness, incomprehensible and unmanifest, embodiment of all attributes and transcendental, the foundation of all cosmic motions."*  
> — **Sūrya Siddhānta (1.1)**

---

## 🌟 Overview

**Sūrya Siddhānta** is one of the most celebrated and mathematically sophisticated canonical treatises of classical Indian astronomy (*Siddhānta Jyotiṣa*). According to textual tradition, it was revealed by a solar manifestation (*Sūryāṁśa-puruṣa*) to the Asura Mayāsura at the end of the Kṛta (Satya) Yuga in the holy city of Romaka.

This module is a **scientifically rigorous, interactive learning and computational system** built with zero-dependency modern HTML5, CSS3, and JavaScript. It guides learners from the ground up:
- **Beginner**: Naked-eye astronomy, cosmic time units, human breath harmonic resonance, spherical Earth (*Bhūgola*), and the 9 systems of time (*Nava Mānāni*).
- **Intermediate**: The continuous civil day count (*Ahargaṇa*), mean planetary coordinates, the 24-Sine (*Jyā*) table with radius $R = 3438'$, and 12-digit gnomon (*Śaṅku*) trigonometry.
- **Astronomer / Pro**: Planetary double-epicycle mechanics (Manda-phala eccentricity + Śīghra-phala heliocentric parallax), retrograde loops (*Vakragati*), solar parallax corrections (*Lambana* & *Nati*), and the armillary sphere (*Golayantra*).

---

## 🚀 Key Interactive Features

### 1. 🔢 Live Ahargaṇa & Mean Planetary Longitude Calculator
- **Astronomical Epoch**: Midnight / Sunrise of **17/18 February 3102 BCE** (Julian Day `588,465.5`), marking the commencement of the Kali Yuga.
- Computes exact **Ahargaṇa** (elapsed civil terrestrial days) for any selected Gregorian date.
- Real-time calculation of mean planetary longitudes for:
  - **Sun (Sūrya)**
  - **Moon (Candra)**
  - **Mars (Maṅgala / Kuja)**
  - **Mercury (Budha)**
  - **Jupiter (Guru / Bṛhaspati)**
  - **Venus (Śukra)**
  - **Saturn (Śani)**
  - **Lunar Apogee (Mandocca)**
  - **Lunar Ascending & Descending Nodes (Rāhu & Ketu - retrograde)**
- Converts total degrees into:
  - Zodiac Sign (**Rāśi**: Meṣa through Mīna) with symbol
  - Deg/Min/Sec representation
  - Lunar Asterism (**Nakṣatra**: 27 asterisms of $13^\circ 20'$ each)
  - Quarter (**Pāda**: 4 padas of $3^\circ 20'$ each).

### 2. ✨ Interactive Nakshatra (Lunar Asterism) Visualizer & Daily Ephemeris
- **Daily Moon Transit Tracker**: Computes the exact Nakshatra active on any date using Surya Siddhanta True Moon longitude (applying Manda-phala lunar eccentricity correction).
- **Elapsed Progress & Pāda Indicator**: Dynamic progress bar displaying degrees and percentage elapsed within the $13^\circ 20'$ (800') span, highlighting which of the 4 Pādas is active.
- **7-Day Moon Transit Forecast**: Timeline predicting upcoming daily Nakshatra transitions for the week ahead.
- **27 Nakshatras Celestial Catalog**: Comprehensive directory of all 27 asterisms with searchable and filterable attributes:
  - Presiding Deity (*Devatā*), Planet Lord (*Graha*), Symbol (*Chinha*)
  - Western Astronomical Junction Star (*Yogatārā* — e.g. Aldebaran, Betelgeuse, Spica, Antares)
  - Temperament (*Gana*: Deva, Manushya, Rakshasa) & Quality (*Kṣipra, Ugra, Sthira, Cara, Mṛdu, Tīkṣṇa, Miśra*)
  - Five Elements (*Tattva*) & 4 Pāda naming syllables (*Nāmākṣara*)
  - Auspicious daily activities (*Muhūrta / Kritya*)
- **Janma Nakshatra (Birth Star) Finder**: Instant personal birth star and naming syllable calculator.

### 3. 🔄 Double Epicycle & Retrograde Motion (Vakragati) Simulator
- Real-time HTML5 Canvas animation demonstrating the ancient Indian dual epicycle mechanism:
  - **Manda-phala (Eccentricity Correction)**: Compensates for the elliptical orbit and varying orbital velocity (Kepler's 1st and 2nd laws).
  - **Śīghra-phala (Heliocentric Parallax Correction)**: Represents the reflection of Earth's orbital vantage point around the Sun.
- Demonstrates how uniform circular motion on an epicycle naturally produces observed **retrograde loops (Vakragati)**, stationary points (*Kendra*), and accelerated direct motion (*Śīghragati*).

### 3. 📐 Trigonometry: The 24-Jyā (Sine) Table Visualizer
- Complete interactive display of the **24 Sines** recorded in Chapter 2 (verses 15–22) at intervals of $225'$ ($3^\circ 45'$).
- **Trigonometric Radius ($R = 3438'$)**:
  $$\text{Circumference } C = 360^\circ \times 60' = 21,600'$$
  $$R = \frac{C}{2\pi} = \frac{21,600}{2 \times 3.14159265...} \approx 3,437.75' \rightarrow 3,438'$$
- **Second-Order Finite Difference Formula**:
  $$J_{n+1} - J_n = (J_n - J_{n-1}) - \frac{J_n}{225}$$
  Precursor to modern numerical differentiation: $\frac{d^2(\sin \theta)}{d\theta^2} = -\sin \theta$.
- Compares each ancient value with modern $\sin(\theta) \times 3438$ (accuracy exceeds $99.98\%$).

### 4. ☀️ 12-Aṅgula Gnomon (Śaṅku) Interactive Simulator
- Interactive altitude slider ($5^\circ$ to $85^\circ$) showing:
  - Shadow length: $s = 12 \cot(\alpha)$ aṅgulas
  - Hypotenuse: $k = \sqrt{12^2 + s^2}$ aṅgulas
  - Determination of cardinal directions via the Indian circle method (*Dig-sādhana*).

### 5. ⏳ The 9 Systems of Time (Nava-Mānāni)
Detailed breakdown of the 9 chronometric scales in Chapter 14:
1. **Sāvana** (Civil day, sunrise to sunrise)
2. **Saura** (Solar month, zodiac signs)
3. **Cāndra** (Lunar month, tithis)
4. **Nākṣatra** (Sidereal day, star rotations)
5. **Bārhaspatya** (Jovian 60-year cycle)
6. **Paitrya** (Ancestral time, 1 month = 1 pitṛ day)
7. **Daiva** (Divine time, 1 solar year = 1 god day)
8. **Prājāpatya** (Manvantara epochs)
9. **Brāhma** (Kalpas, cosmic creation lifespan = 311.04 trillion years).

### 6. 📜 The 14 Adhyāyas (Chapters) Comprehensive Syllabus
Interactive reader covering the entire text:
1. **Madhyamādhikāra** (Mean Motions of Planets)
2. **Spaṣṭādhikāra** (True Places & Epicycles)
3. **Tripraśnādhikāra** (Direction, Place, Time & Gnomon)
4. **Candragrahaṇādhikāra** (Lunar Eclipses)
5. **Sūryagrahaṇādhikāra** (Solar Eclipses & Parallax: Lambana and Nati)
6. **Chedyakādhikāra** (Eclipse Projections & Valana)
7. **Grahayutyadhikāra** (Planetary Conjunctions)
8. **Bhadhikāra** (Asterisms & Star Catalogs)
9. **Udayāstādhikāra** (Heliacal Risings & Settings)
10. **Candradarśanādhikāra** (Lunar Crescent & Horn Elevation)
11. **Pātādhikāra** (Malign Declination Aspects: Vaidhṛti and Vyatīpāta)
12. **Bhūgolādhyāya** (Cosmogony, Spherical Earth & Gravity)
13. **Yantrādhyāya** (Armillary Sphere & Instruments)
14. **Mānādhyāya** (The Nine Systems of Time).

---

## 🔬 Mathematical Formulas & Core Constants

| Parameter | Sūrya Siddhānta Value | Modern Equivalent |
| :--- | :--- | :--- |
| **Mahāyuga Duration** | $4,320,000$ solar years | $4.32 \times 10^6$ years |
| **Civil Days in Mahāyuga** | $1,577,917,828$ days | $1,577,917,828$ days |
| **Solar Year Length** | $365.258756$ days ($365^\text{d}\ 6^\text{h}\ 12^\text{m}\ 36.6^\text{s}$) | $365.256363$ sidereal days |
| **Lunar Synodic Month** | $29.5305879$ days | $29.530589$ days |
| **Earth's Diameter** | $1,600$ Yojanas | $\approx 12,800$ km |
| **Trigonometric Radius ($R$)** | $3,438'$ | $3,437.75'$ |

---

## 🛠️ How to Run Locally

Open `index.html` directly in any browser:
```powershell
Start-Process index.html
```

Or via the root Ancient Wisdom gateway:
```powershell
cd ..
Start-Process index.html
```

---

## 📚 References & Classical Sources

1. **Burgess, Rev. Ebenezer & Whitney, William D.** (1860). *Translation of the Sūrya-Siddhānta: A Text-Book of Hindu Astronomy*, Journal of the American Oriental Society.
2. **Shukla, K. S.** (1957). *The Sūrya-Siddhānta with the Commentary of Parameśvara*, Lucknow University.
3. **Dvivedi, Sudhakara** (1911). *The Sūrya Siddhānta with the Commentary of Raṅganātha*, Benares Sanskrit Series.
4. **Sarma, K. V.** (1985). *A History of the Kerala School of Hindu Astronomy*, Hoshiarpur.
