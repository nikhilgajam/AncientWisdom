// Panchanga & Vedic Jyotisha — Universal Astronomical & Muhurta Engine
// Supports any year, any date, any time, and any geographic location.

const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

function norm360(deg) {
  let d = deg % 360;
  return d < 0 ? d + 360 : d;
}

function sinD(deg) { return Math.sin(deg * D2R); }
function cosD(deg) { return Math.cos(deg * D2R); }
function tanD(deg) { return Math.tan(deg * D2R); }
function asinD(x) { return Math.asin(Math.max(-1, Math.min(1, x))) * R2D; }
function acosD(x) { return Math.acos(Math.max(-1, Math.min(1, x))) * R2D; }

// =========================================================================
// 1. REFERENCE DATA (SANSKRIT + TELUGU + ENGLISH)
// =========================================================================

const TITHI_NAMES = [
  "Pratipada (పాడ్యమి)", "Dvitīyā (విదియ)", "Tṛtīyā (తదియ)", "Caturthī (చవితి)",
  "Pañcamī (పంచమి)", "Ṣaṣṭhī (షష్ఠి)", "Saptamī (సప్తమి)", "Aṣṭamī (అష్టమి)",
  "Navamī (నవమి)", "Daśamī (దశమి)", "Ekādaśī (ఏకాదశి)", "Dvādaśī (ద్వాదశి)",
  "Trayodaśī (త్రయోదశి)", "Caturdaśī (చతుర్దశి)", "Pūrṇimā (పూర్ణిమ)",
  "Pratipada (పాడ్యమి)", "Dvitīyā (విదియ)", "Tṛtīyā (తదియ)", "Caturthī (చవితి)",
  "Pañcamī (పంచమి)", "Ṣaṣṭhī (షష్ఠి)", "Saptamī (సప్తమి)", "Aṣṭamī (అష్టమి)",
  "Navamī (నవమి)", "Daśamī (దశమి)", "Ekādaśī (ఏకాదశి)", "Dvādaśī (ద్వాదశి)",
  "Trayodaśī (త్రయోదశి)", "Caturdaśī (చతుర్దశి)", "Amāvāsyā (అమావాస్య)"
];

const VARA_DATA = [
  { name: "Ravivāra (ఆదివారం)", en: "Sunday", graha: "Sūrya (Sun)", color: "#f59e0b" },
  { name: "Somavāra (సోమవారం)", en: "Monday", graha: "Candra (Moon)", color: "#e2e8f0" },
  { name: "Maṅgalavāra (మంగళవారం)", en: "Tuesday", graha: "Maṅgala (Mars)", color: "#ef4444" },
  { name: "Budhavāra (బుధవారం)", en: "Wednesday", graha: "Budha (Mercury)", color: "#10b981" },
  { name: "Guruvāra (గురువారం)", en: "Thursday", graha: "Bṛhaspati (Jupiter)", color: "#eab308" },
  { name: "Śukravāra (శుక్రవారం)", en: "Friday", graha: "Śukra (Venus)", color: "#ec4899" },
  { name: "Śanivāra (శనివారం)", en: "Saturday", graha: "Śani (Saturn)", color: "#6366f1" }
];

const NAKSHATRA_NAMES = [
  "Aśvinī (అశ్విని)", "Bharaṇī (భరణి)", "Kṛttikā (కృత్తిక)", "Rohiṇī (రోహిణి)",
  "Mṛgaśirā (మృగశిర)", "Ārdrā (ఆరుద్ర)", "Punarvasu (పునర్వసు)", "Puṣya (పుష్యమి)",
  "Āśleṣā (ఆశ్లేష)", "Maghā (మఖ)", "Pūrva Phalguṇī (పుబ్బ)", "Uttara Phalguṇī (ఉత్తర)",
  "Hasta (హస్త)", "Citrā (చిత్త)", "Svātī (స్వాతి)", "Viśākhā (విశాఖ)",
  "Anūrādhā (అనూరాధ)", "Jyeṣṭhā (జ్యేష్ఠ)", "Mūla (మూల)", "Pūrva Āṣāḍhā (పూర్వాషాఢ)",
  "Uttara Āṣāḍhā (ఉత్తరాషాఢ)", "Śravaṇa (శ్రవణం)", "Dhaniṣṭhā (ధనిష్ఠ)", "Śatabhiṣa (శతభిషం)",
  "Pūrva Bhādrapadā (పూర్వాభాద్ర)", "Uttara Bhādrapadā (ఉత్తరాభాద్ర)", "Revatī (రేవతి)"
];

const YOGA_NAMES = [
  "Viṣkambha (విష్కంభం)", "Prīti (ప్రీతి)", "Āyuṣmān (ఆయుష్మాన్)", "Saubhāgya (సౌభాగ్యం)",
  "Śobhana (శోభనం)", "Atigaṇḍa (అతిగండం)", "Sukarmā (సుకర్మ)", "Dhṛti (ధృతి)",
  "Śūla (శూలం)", "Gaṇḍa (గండం)", "Vṛddhi (వృద్ధి)", "Dhruva (ధ్రువం)",
  "Vyāghāta (వ్యాఘాతం)", "Harṣaṇa (హర్షణం)", "Vajra (వజ్రం)", "Siddhi (సిద్ధి)",
  "Vyatīpāta (వ్యతీపాతం)", "Varīyān (వరీయాన్)", "Parigha (పరిఘం)", "Śiva (శివం)",
  "Siddha (సిద్ధం)", "Sādhya (సాధ్యం)", "Śubha (శుభం)", "Śukla (శుక్లం)",
  "Brahma (బ్రహ్మం)", "Indra (ఇంద్రం)", "Vaidhṛti (వైధృతి)"
];

const MOVABLE_KARANAS = [
  "Bava (బవ)", "Bālava (బాలవ)", "Kaulava (కౌలవ)", "Taitula (తైతుల)",
  "Garaja (గరజ)", "Vaṇija (వణిజ)", "Viṣṭi / Bhadra (విష్టి)"
];

const FIXED_KARANAS = {
  0: "Kiṃstughna (కింస్తుఘ్నం)",
  57: "Śakuni (శకుని)",
  58: "Catuṣpāda (చతుష్పాద)",
  59: "Nāga (నాగ)"
};

const RASHI_NAMES = [
  "Meṣa (మేషం — Aries)", "Vṛṣabha (వృషభం — Taurus)", "Mithuna (మిథునం — Gemini)",
  "Karkaṭa (కర్కాటకం — Cancer)", "Siṃha (సింహం — Leo)", "Kanyā (కన్య — Virgo)",
  "Tulā (తుల — Libra)", "Vṛścika (వృశ్చికం — Scorpio)", "Dhanu (ధనుస్సు — Sagittarius)",
  "Makara (మకరం — Capricorn)", "Kumbha (కుంభం — Aquarius)", "Mīna (మీనం — Pisces)"
];

const MASA_NAMES = [
  "Caitra (చైత్రం)", "Vaiśākha (వైశాఖం)", "Jyeṣṭha (జ్యేష్ఠం)", "Āṣāḍha (ఆషాఢం)",
  "Śrāvaṇa (శ్రావణం)", "Bhādrapada (భాద్రపదం)", "Āśvayuja (ఆశ్వయుజం)", "Kārtika (కార్తీకం)",
  "Mārgaśira (మార్గశిరం)", "Puṣya (పుష్యం)", "Māgha (మాఘం)", "Phālguna (ఫాల్గుణం)"
];

const RITU_NAMES = [
  "Vasanta (వసంత — Spring)", "Grīṣma (గ్రీష్మ — Summer)", "Varṣa (వర్ష — Monsoon)",
  "Śarad (శరద్ — Autumn)", "Hemanta (హేమంత — Pre-Winter)", "Śiśira (శిశిర — Winter)"
];

const SAMVATSARAS = [
  "Prabhava (ప్రభవ)", "Vibhava (విభవ)", "Śukla (శుక్ల)", "Pramodūta (ప్రమోదూత)", "Prajotpatti (ప్రజోత్పత్తి)",
  "Āṅgīrasa (ఆంగీరస)", "Śrīmukha (శ్రీముఖ)", "Bhāva (భావ)", "Yuva (యువ)", "Dhātu (ధాతు)",
  "Īśvara (ఈశ్వర)", "Bahudhānya (బహుధాన్య)", "Pramāthi (ప్రమాథి)", "Vikrama (విక్రమ)", "Vṛṣa (వృష)",
  "Citrabhānu (చిత్రభాను)", "Svabhānu (స్వభాను)", "Tāraṇa (తారణ)", "Pārthiva (పార్థివ)", "Vyaya (వ్యయ)",
  "Sarvajit (సర్వజిత్)", "Sarvadhāri (సర్వధారి)", "Virodhi (విరోధి)", "Vikṛti (వికృతి)", "Khara (ఖర)",
  "Nandana (నందన)", "Vijaya (విజయ)", "Jaya (జయ)", "Manmatha (మన్మథ)", "Durmukhi (దుర్ముఖి)",
  "Hevilambi (హేవిళంబి)", "Vilambi (విళంబి)", "Vikāri (వికారి)", "Śārvari (శార్వరి)", "Plava (ప్లవ)",
  "Śubhakṛt (శుభకృత్)", "Śobhakṛt (శోభకృత్)", "Krodhi (క్రోధి)", "Viśvāvasu (విశ్వావసు)", "Parābhava (పరాభవ)",
  "Plavaṅga (ప్లవంగ)", "Kīlaka (కీలక)", "Saumya (సౌమ్య)", "Sādhāraṇa (సాధారణ)", "Virodhikṛt (విరోధికృత్)",
  "Parīdhāvi (పరీధావి)", "Pramādīca (ప్రమాదీచ)", "Ānanda (ఆనంద)", "Rākṣasa (రాక్షస)", "Nala (నల)",
  "Piṅgala (పింగళ)", "Kālayukti (కాలయుక్తి)", "Siddhārthi (సిద్ధార్థి)", "Raudri (రౌద్రి)", "Durmati (దుర్మతి)",
  "Dundubhi (దుందుభి)", "Rudhirodgāri (రుధిరోద్గారి)", "Raktākṣi (రక్తాక్షి)", "Krodhana (క్రోధన)", "Akṣaya (అక్షయ)"
];

// Classical Varjyam & Amrita Kalam starting ghatis (out of 60 ghatis per Nakshatra, duration = 4 ghatis)
const VARJYAM_GHATIS = [
  50, 24, 30, 40, 14, 21, 30, 20, 32,
  30, 20, 18, 21, 20, 14, 14, 10, 14,
  56, 24, 20, 10, 10, 18, 16, 24, 30
];
const AMRITA_GHATIS = [
  42, 48, 54, 52, 38, 35, 54, 44, 56,
  54, 44, 42, 45, 44, 38, 38, 34, 38,
  44, 48, 44, 34, 34, 42, 40, 48, 54
];

// Classical 8-part daytime slots (1-based) for Rahu, Yama, Gulika by weekday (0=Sun..6=Sat)
const RAHU_SLOTS = [8, 2, 7, 5, 6, 4, 3];
const YAMA_SLOTS = [5, 4, 3, 2, 1, 7, 6];
const GULIKA_SLOTS = [7, 6, 5, 4, 3, 2, 1];

// Classical 15-part daytime Durmuhurtam muhurta indices (1-based) by weekday (0=Sun..6=Sat)
const DURMUHURTA_DAY_SLOTS = {
  0: [14],
  1: [9, 12],
  2: [4],       // + night muhurta 7
  3: [8],
  4: [6, 12],
  5: [4, 9],
  6: [1, 2]
};

const LOCATION_PRESETS = {
  tirupati:    { name: "Tirupati (TTD Standard)", lat: 13.6288, lon: 79.4192, tz: 5.5 },
  hyderabad:   { name: "Hyderabad",               lat: 17.3850, lon: 78.4867, tz: 5.5 },
  vijayawada:  { name: "Vijayawada",              lat: 16.5062, lon: 80.6480, tz: 5.5 },
  visakhapatnam:{ name: "Visakhapatnam",          lat: 17.6868, lon: 83.2185, tz: 5.5 },
  bengaluru:   { name: "Bengaluru",               lat: 12.9716, lon: 77.5946, tz: 5.5 },
  chennai:     { name: "Chennai",                 lat: 13.0827, lon: 80.2707, tz: 5.5 },
  mumbai:      { name: "Mumbai",                  lat: 19.0760, lon: 72.8777, tz: 5.5 },
  delhi:       { name: "New Delhi",               lat: 28.6139, lon: 77.2090, tz: 5.5 },
  varanasi:    { name: "Varanasi (Kāśī)",         lat: 25.3176, lon: 82.9739, tz: 5.5 },
  utc:         { name: "Greenwich (UTC)",         lat: 51.4779, lon: 0.0000,  tz: 0.0 }
};

const TARA_NAMES = [
  { name: "Janma (జన్మ)", auspicious: false, note: "Mixed; avoid major beginnings if possible" },
  { name: "Sampat (సంపత్)", auspicious: true, note: "Wealth, prosperity & auspicious beginnings" },
  { name: "Vipat (విపత్)", auspicious: false, note: "Obstacles & risks; avoid auspicious works" },
  { name: "Kṣema (క్షేమ)", auspicious: true, note: "Well-being, safety & success" },
  { name: "Pratyari (ప్రత్యరి)", auspicious: false, note: "Opposition & delays; avoid new ventures" },
  { name: "Sādhaka (సాధక)", auspicious: true, note: "Achievement, fulfillment & mastery" },
  { name: "Vadha / Naidhana (వధ)", auspicious: false, note: "Highly unfavorable; strictly avoid" },
  { name: "Mitra (మిత్ర)", auspicious: true, note: "Friendly, supportive & harmonious" },
  { name: "Parama Mitra (పరమమిత్ర)", auspicious: true, note: "Supreme harmony & blessing" }
];

// =========================================================================
// 2. HIGH-ACCURACY ASTRONOMICAL EPHEMERIS (MEEUS + LAHIRI AYANAMSA)
// =========================================================================

/**
 * Convert a UTC timestamp (ms since Unix epoch) to Julian Day.
 */
function msToJD(ms) {
  return ms / 86400000 + 2440587.5;
}

function jdToMs(jd) {
  return (jd - 2440587.5) * 86400000;
}

/**
 * Lahiri (Chitrapaksha) Ayanamsa in degrees for a given Julian Day.
 */
function getLahiriAyanamsa(jd) {
  const tCenturies = (jd - 2451545.0) / 36525.0;
  return 23.85305556 + 1.39697128 * tCenturies - 0.0003088 * tCenturies * tCenturies;
}

/**
 * Apparent tropical ecliptic longitude of the Sun (degrees) using Meeus Ch. 25.
 */
function getSunTropicalLon(jd) {
  const T = (jd - 2451545.0) / 36525.0;
  const L0 = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  const M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * sinD(M)
          + (0.019993 - 0.000101 * T) * sinD(2 * M)
          + 0.000289 * sinD(3 * M);
  const trueLon = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  const apparentLon = trueLon - 0.00569 - 0.00478 * sinD(omega);
  return norm360(apparentLon);
}

/**
 * Apparent tropical ecliptic longitude of the Moon (degrees) using Meeus Ch. 47 main terms.
 */
function getMoonTropicalLon(jd) {
  const T = (jd - 2451545.0) / 36525.0;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;

  const Lp = norm360(218.3164477 + 481267.88123421 * T - 0.0015786 * T2 + T3 / 538841 - T4 / 65194000);
  const D  = norm360(297.8501921 + 445267.1114034 * T - 0.0018819 * T2 + T3 / 545868 - T4 / 113065000);
  const M  = norm360(357.5291092 + 35999.0502909 * T - 0.0001536 * T2 + T3 / 24490000);
  const Mp = norm360(134.9633964 + 477198.8675055 * T + 0.0087414 * T2 + T3 / 69699 - T4 / 14712000);
  const F  = norm360(93.2720950  + 483202.0175233 * T - 0.0036539 * T2 - T3 / 3526000 + T4 / 863310000);

  const A1 = norm360(119.75 + 131.849 * T);
  const A2 = norm360(53.09 + 479264.290 * T);
  const E = 1 - 0.002516 * T - 0.0000074 * T2;
  const E2 = E * E;

  // Periodic terms in 10^-6 degrees [d, m, mp, f, coeff]
  const terms = [
    [0, 0, 1, 0, 6288774],
    [2, 0, -1, 0, 1274027],
    [2, 0, 0, 0, 658314],
    [0, 0, 2, 0, 213618],
    [0, 1, 0, 0, -185116],
    [0, 0, 0, 2, -114332],
    [2, 0, -2, 0, 58793],
    [2, -1, -1, 0, 57066],
    [2, 0, 1, 0, 53322],
    [2, -1, 0, 0, 45758],
    [0, 1, -1, 0, -40923],
    [1, 0, 0, 0, -34720],
    [0, 1, 1, 0, -30383],
    [2, 0, 0, -2, 15327],
    [0, 0, 1, 2, -12528],
    [0, 0, 1, -2, 10980],
    [4, 0, -1, 0, 10675],
    [0, 0, 3, 0, 10034],
    [4, 0, -2, 0, 8548],
    [2, 1, -1, 0, -7888],
    [2, 1, 0, 0, -6766],
    [1, 0, -1, 0, -5163],
    [1, 1, 0, 0, 4987],
    [2, -1, 1, 0, 4036],
    [2, 0, 2, 0, 3994],
    [4, 0, 0, 0, 3861],
    [2, 0, -3, 0, 3665],
    [0, 1, -2, 0, -2689],
    [2, 0, -1, 2, -2602],
    [2, -1, -2, 0, 2390],
    [1, 0, 1, 0, -2348],
    [2, -2, 0, 0, 2236],
    [0, 1, 2, 0, -2120],
    [0, 2, 0, 0, -2069],
    [2, -2, -1, 0, 2048],
    [2, 0, 1, -2, -1773],
    [2, 0, 0, 2, -1595],
    [4, -1, -1, 0, 1215],
    [0, 0, 2, 2, -1110],
    [3, 0, -1, 0, -892]
  ];

  let sumL = 0;
  for (let i = 0; i < terms.length; i++) {
    const [cd, cm, cmp, cf, coeff] = terms[i];
    let factor = 1;
    if (Math.abs(cm) === 1) factor = E;
    else if (Math.abs(cm) === 2) factor = E2;
    sumL += coeff * factor * sinD(cd * D + cm * M + cmp * Mp + cf * F);
  }

  sumL += 3958 * sinD(A1) + 1962 * sinD(Lp - F) + 318 * sinD(A2);
  const omega = 125.04452 - 1934.136261 * T;
  const nutation = -0.00478 * sinD(omega);
  return norm360(Lp + sumL / 1000000 + nutation);
}

function getSiderealLongitudes(jd) {
  const ayan = getLahiriAyanamsa(jd);
  const sunTrop = getSunTropicalLon(jd);
  const moonTrop = getMoonTropicalLon(jd);
  const sunSid = norm360(sunTrop - ayan);
  const moonSid = norm360(moonTrop - ayan);
  return { sunSid, moonSid, sunTrop, moonTrop, ayan };
}

// =========================================================================
// 3. SUNRISE & SUNSET (NOAA SOLAR CALCULATION FOR ANY LAT/LON/DATE)
// =========================================================================

function getSunriseSunsetMs(year, month, day, lat, lon, tzHours) {
  // Local midnight in UTC ms
  const localMidnightUtcMs = Date.UTC(year, month - 1, day, 0, 0, 0) - tzHours * 3600000;
  const calcEvent = (isSunrise) => {
    // 2-iteration refinement around local solar noon
    let estimateMs = localMidnightUtcMs + (isSunrise ? 6 : 18) * 3600000;
    for (let iter = 0; iter < 3; iter++) {
      const jd = msToJD(estimateMs);
      const T = (jd - 2451545.0) / 36525.0;
      const L0 = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
      const M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
      const e = 0.016708634 - 0.000042037 * T;
      const eps = 23.439291 - 0.0130042 * T;
      const y = Math.pow(tanD(eps / 2), 2);
      const eqTimeMin = 4 * R2D * (
        y * sinD(2 * L0) - 2 * e * sinD(M) + 4 * e * y * sinD(M) * cosD(2 * L0)
        - 0.5 * y * y * sinD(4 * L0) - 1.25 * e * e * sinD(2 * M)
      );
      const sunLon = getSunTropicalLon(jd);
      const decl = asinD(sinD(eps) * sinD(sunLon));
      const cosHA = (cosD(90.833) / (cosD(lat) * cosD(decl))) - tanD(lat) * tanD(decl);
      if (cosHA > 1 || cosHA < -1) return null;
      const ha = acosD(cosHA);
      const solarNoonMin = 720 - 4 * lon - eqTimeMin + tzHours * 60;
      const eventMin = isSunrise ? solarNoonMin - ha * 4 : solarNoonMin + ha * 4;
      estimateMs = localMidnightUtcMs + eventMin * 60000;
    }
    return estimateMs;
  };
  return {
    sunriseMs: calcEvent(true),
    sunsetMs: calcEvent(false)
  };
}

// =========================================================================
// 4. ROOT-FINDING FOR EXACT TRANSITIONS (TITHI, NAKSHATRA, YOGA, KARANA)
// =========================================================================

function signedAngleDiff(a, b) {
  let d = (a - b) % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

/**
 * Find exact JD where fn(jd) crosses targetDeg in [jdStart, jdEnd].
 */
function findAngleCrossing(fn, targetDeg, jdStart, jdEnd, iterations = 26) {
  let lo = jdStart;
  let hi = jdEnd;
  let dLo = signedAngleDiff(fn(lo), targetDeg);
  for (let i = 0; i < iterations; i++) {
    const mid = 0.5 * (lo + hi);
    const dMid = signedAngleDiff(fn(mid), targetDeg);
    if ((dLo <= 0 && dMid <= 0) || (dLo >= 0 && dMid >= 0)) {
      lo = mid;
      dLo = dMid;
    } else {
      hi = mid;
    }
  }
  return 0.5 * (lo + hi);
}

/**
 * Find next crossing of targetDeg after jd0 (within maxDays).
 */
function findNextCrossing(fn, targetDeg, jd0, stepDays = 0.1, maxDays = 35) {
  let prevJd = jd0;
  let prevDiff = signedAngleDiff(fn(prevJd), targetDeg);
  for (let d = stepDays; d <= maxDays; d += stepDays) {
    const curJd = jd0 + d;
    const curDiff = signedAngleDiff(fn(curJd), targetDeg);
    if (prevDiff <= 0 && curDiff >= 0 && Math.abs(curDiff - prevDiff) < 90) {
      return findAngleCrossing(fn, targetDeg, prevJd, curJd);
    }
    prevJd = curJd;
    prevDiff = curDiff;
  }
  return null;
}

/**
 * Find previous crossing of targetDeg before jd0 (within maxDays).
 */
function findPrevCrossing(fn, targetDeg, jd0, stepDays = 0.1, maxDays = 35) {
  let nextJd = jd0;
  let nextDiff = signedAngleDiff(fn(nextJd), targetDeg);
  for (let d = stepDays; d <= maxDays; d += stepDays) {
    const curJd = jd0 - d;
    const curDiff = signedAngleDiff(fn(curJd), targetDeg);
    if (curDiff <= 0 && nextDiff >= 0 && Math.abs(nextDiff - curDiff) < 90) {
      return findAngleCrossing(fn, targetDeg, curJd, nextJd);
    }
    nextJd = curJd;
    nextDiff = curDiff;
  }
  return null;
}

const getElongationFn = (jd) => {
  const { sunSid, moonSid } = getSiderealLongitudes(jd);
  return norm360(moonSid - sunSid);
};
const getMoonSidFn = (jd) => getSiderealLongitudes(jd).moonSid;
const getSunSidFn = (jd) => getSiderealLongitudes(jd).sunSid;
const getYogaAngleFn = (jd) => {
  const { sunSid, moonSid } = getSiderealLongitudes(jd);
  return norm360(sunSid + moonSid);
};

// =========================================================================
// 5. AMANTA LUNAR MASA, ADHIKA MASA, UGADI & SAMVATSARA
// =========================================================================

function getAmantaMasaInfo(jd) {
  // Amanta month is bounded by previous Amavasya (0 deg elongation) and next Amavasya (0 deg).
  const prevAmavJd = findPrevCrossing(getElongationFn, 0, jd, 0.25, 32);
  const nextAmavJd = findNextCrossing(getElongationFn, 0, jd, 0.25, 32);
  if (!prevAmavJd || !nextAmavJd) {
    const sunSid = getSunSidFn(jd);
    return { masaIdx: Math.floor(sunSid / 30) % 12, isAdhika: false };
  }
  const sunAtStart = getSunSidFn(prevAmavJd);
  const sunAtEnd = getSunSidFn(nextAmavJd);
  const rashiStart = Math.floor(sunAtStart / 30);
  const rashiEnd = Math.floor(sunAtEnd / 30);
  // If Sun stayed in the exact same sidereal Rashi from Amavasya to Amavasya -> Adhika Masa!
  const isAdhika = (rashiStart === rashiEnd);
  // In Amanta system: Sun in Mina (11) at start & Mesha (0) at end => Chaitra (0).
  // So Masa index corresponds to rashiEnd! (For Adhika Masa, it takes the name of the next regular month = (rashiEnd + 1) % 12).
  const masaIdx = isAdhika ? (rashiEnd + 1) % 12 : rashiEnd;
  return { masaIdx, isAdhika, prevAmavJd, nextAmavJd };
}

/**
 * Find exact UTC ms of Ugadi (Chaitra Shukla Pratipada Sunrise) for a given Gregorian year.
 */
function findUgadiForYear(year, lat = 13.6288, lon = 79.4192, tzHours = 5.5) {
  // Chaitra Shukla Pratipada occurs just after the Amavasya when Sun is in Mina (330..360 deg), typically mid-March to mid-April.
  // Start searching from March 10 of `year`.
  const march10Ms = Date.UTC(year, 2, 10, 0, 0, 0) - tzHours * 3600000;
  let jd = msToJD(march10Ms);
  for (let i = 0; i < 45; i++) {
    const amavJd = findNextCrossing(getElongationFn, 0, jd, 0.25, 35);
    if (!amavJd) break;
    const sunAtAmav = getSunSidFn(amavJd);
    // Sun in Mina (330..360) means the lunar month starting right after this Amavasya is Chaitra!
    if (sunAtAmav >= 328 && sunAtAmav <= 360) {
      // Find the local day whose Sunrise is immediately after amavJd
      const amavLocalMs = jdToMs(amavJd) + tzHours * 3600000;
      const d = new Date(amavLocalMs);
      for (let offset = 0; offset <= 2; offset++) {
        const cand = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + offset));
        const { sunriseMs } = getSunriseSunsetMs(cand.getUTCFullYear(), cand.getUTCMonth() + 1, cand.getUTCDate(), lat, lon, tzHours);
        if (sunriseMs && msToJD(sunriseMs) > amavJd) {
          return {
            year: cand.getUTCFullYear(),
            month: cand.getUTCMonth() + 1,
            day: cand.getUTCDate(),
            sunriseMs,
            amavJd
          };
        }
      }
    }
    jd = amavJd + 2;
  }
  return { year, month: 3, day: 25, sunriseMs: Date.UTC(year, 2, 25, 0, 30, 0) };
}

function getSamvatsaraForDate(year, month, day, jd, lat = 13.6288, lon = 79.4192, tzHours = 5.5) {
  const ugadi = findUgadiForYear(year, lat, lon, tzHours);
  const currentLocalDateMs = Date.UTC(year, month - 1, day);
  const ugadiLocalDateMs = Date.UTC(ugadi.year, ugadi.month - 1, ugadi.day);
  const effYear = currentLocalDateMs >= ugadiLocalDateMs ? year : year - 1;
  // 2025-26 = Visvavasu (index 38, 39th Samvatsara). (2025 + 11) % 60 = 2036 % 60 = 56? Wait:
  // (1987 + 11) % 60? Let's calibrate: 1987 = Prabhava (index 0). (1987 - 1987) % 60 = 0.
  // 2025 - 1987 = 38 => index 38 = Viśvāvasu! Formula: ((effYear - 1987) % 60 + 60) % 60.
  const idx = ((effYear - 1987) % 60 + 60) % 60;
  return {
    idx,
    name: SAMVATSARAS[idx],
    effYear,
    shakaYear: effYear - 78,
    vikramaYear: effYear + 57,
    ugadi
  };
}

// =========================================================================
// 6. FORMATTING HELPERS
// =========================================================================

function formatLocalTime(utcMs, tzHours, refYear, refMonth, refDay) {
  if (utcMs === null || utcMs === undefined) return "—";
  const localMs = utcMs + tzHours * 3600000;
  const d = new Date(localMs);
  const hh = d.getUTCHours();
  const mm = d.getUTCMinutes();
  const ampm = hh >= 12 ? "PM" : "AM";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  const timeStr = `${String(h12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ampm}`;

  if (refYear !== undefined) {
    const refDayUtc = Date.UTC(refYear, refMonth - 1, refDay);
    const curDayUtc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    const diffDays = Math.round((curDayUtc - refDayUtc) / 86400000);
    if (diffDays === 1) return `${timeStr} (+1d)`;
    if (diffDays === -1) return `${timeStr} (-1d)`;
    if (diffDays !== 0) return `${timeStr} (${d.getUTCDate()}/${d.getUTCMonth() + 1})`;
  }
  return timeStr;
}

function formatRange(startMs, endMs, tzHours, y, m, d) {
  return `${formatLocalTime(startMs, tzHours, y, m, d)} – ${formatLocalTime(endMs, tzHours, y, m, d)}`;
}

// =========================================================================
// 7. COMPLETE DAILY PANCHANGAM ENGINE
// =========================================================================

function calculatePanchanga(year, month, day, hour = 6, minute = 0, locKey = "tirupati") {
  const loc = LOCATION_PRESETS[locKey] || LOCATION_PRESETS.tirupati;
  const { lat, lon, tz, name: locName } = loc;

  // Target instant in UTC ms
  const targetUtcMs = Date.UTC(year, month - 1, day, hour, minute, 0) - tz * 3600000;
  const jd = msToJD(targetUtcMs);

  // Sunrise & Sunset for the selected calendar date
  const { sunriseMs, sunsetMs } = getSunriseSunsetMs(year, month, day, lat, lon, tz);
  const nextDayDate = new Date(Date.UTC(year, month - 1, day + 1));
  const { sunriseMs: nextSunriseMs } = getSunriseSunsetMs(
    nextDayDate.getUTCFullYear(), nextDayDate.getUTCMonth() + 1, nextDayDate.getUTCDate(),
    lat, lon, tz
  );

  // Astronomical longitudes at selected instant
  const { sunSid, moonSid, ayan } = getSiderealLongitudes(jd);
  const elongation = norm360(moonSid - sunSid);

  // 1. Tithi
  const tithiFloat = elongation / 12;
  const tithiIdx = Math.floor(tithiFloat);
  const tithiDegNext = ((tithiIdx + 1) * 12) % 360;
  const tithiEndJd = findNextCrossing(getElongationFn, tithiDegNext, jd, 0.05, 2.5);
  const paksha = tithiIdx < 15 ? "Śukla Pakṣa (శుక్ల పక్షం)" : "Kṛṣṇa Pakṣa (కృష్ణ పక్షం)";

  // 2. Vara (Vedic day runs Sunrise to Sunrise; note Gregorian weekday for display)
  const gregDate = new Date(Date.UTC(year, month - 1, day));
  const gregWday = gregDate.getUTCDay();
  const isBeforeSunrise = sunriseMs ? targetUtcMs < sunriseMs : false;
  const vedicWday = isBeforeSunrise ? (gregWday + 6) % 7 : gregWday;
  const vara = VARA_DATA[vedicWday];

  // 3. Nakshatra & Pada
  const nakSpan = 360 / 27;
  const nakIdx = Math.floor(moonSid / nakSpan);
  const nakOffset = moonSid - nakIdx * nakSpan;
  const pada = Math.floor(nakOffset / (nakSpan / 4)) + 1;
  const nakStartDeg = nakIdx * nakSpan;
  const nakEndDeg = ((nakIdx + 1) * nakSpan) % 360;
  const nakStartJd = findPrevCrossing(getMoonSidFn, nakStartDeg, jd, 0.05, 2.5);
  const nakEndJd = findNextCrossing(getMoonSidFn, nakEndDeg, jd, 0.05, 2.5);

  // 4. Yoga
  const yogaAngle = norm360(sunSid + moonSid);
  const yogaIdx = Math.floor(yogaAngle / nakSpan);
  const yogaEndDeg = ((yogaIdx + 1) * nakSpan) % 360;
  const yogaEndJd = findNextCrossing(getYogaAngleFn, yogaEndDeg, jd, 0.05, 2.5);

  // 5. Karana
  const karanaNum = Math.floor(elongation / 6);
  const karanaName = FIXED_KARANAS[karanaNum] || MOVABLE_KARANAS[(karanaNum - 1) % 7];
  const karanaEndDeg = ((karanaNum + 1) * 6) % 360;
  const karanaEndJd = findNextCrossing(getElongationFn, karanaEndDeg, jd, 0.03, 1.5);

  // 6. Rashi, Ayana, Ritu, Masa, Samvatsara
  const sunRashiIdx = Math.floor(sunSid / 30);
  const moonRashiIdx = Math.floor(moonSid / 30);
  const ayana = (sunSid >= 270 || sunSid < 90)
    ? "Uttarāyaṇa (ఉత్తరాయణం — Northward)"
    : "Dakṣiṇāyana (దక్షిణాయనం — Southward)";
  const masaInfo = getAmantaMasaInfo(jd);
  const rituIdx = Math.floor(masaInfo.masaIdx / 2);
  const masaDisplay = (masaInfo.isAdhika ? "Adhika (అధిక) " : "") + MASA_NAMES[masaInfo.masaIdx];
  const samvatsara = getSamvatsaraForDate(year, month, day, jd, lat, lon, tz);

  // 7. Dynamic Muhurta & Kaala Timings (for the selected Vedic/Gregorian date's Sunrise–Sunset)
  const dayDur = (sunriseMs && sunsetMs) ? (sunsetMs - sunriseMs) : 12 * 3600000;
  const nightDur = (sunsetMs && nextSunriseMs) ? (nextSunriseMs - sunsetMs) : 12 * 3600000;
  const part8 = dayDur / 8;
  const muhurta15 = dayDur / 15;
  const nightMuhurta15 = nightDur / 15;

  const slotStart = (slot) => sunriseMs + (slot - 1) * part8;
  const rahuStart = slotStart(RAHU_SLOTS[gregWday]);
  const yamaStart = slotStart(YAMA_SLOTS[gregWday]);
  const gulikaStart = slotStart(GULIKA_SLOTS[gregWday]);

  const abhijitStart = sunriseMs + 7 * muhurta15;
  const abhijitEnd = sunriseMs + 8 * muhurta15;

  const brahmaStart = sunriseMs - 96 * 60000;
  const brahmaEnd = sunriseMs - 48 * 60000;

  // Durmuhurtam intervals
  const durSlots = DURMUHURTA_DAY_SLOTS[gregWday] || [];
  const durIntervals = [];
  if (gregWday === 6) {
    // Saturday: 1st and 2nd muhurtas combined
    durIntervals.push(formatRange(sunriseMs, sunriseMs + 2 * muhurta15, tz, year, month, day));
  } else {
    durSlots.forEach(s => {
      durIntervals.push(formatRange(sunriseMs + (s - 1) * muhurta15, sunriseMs + s * muhurta15, tz, year, month, day));
    });
    if (gregWday === 2) {
      // Tuesday also has night 7th muhurta
      durIntervals.push(formatRange(sunsetMs + 6 * nightMuhurta15, sunsetMs + 7 * nightMuhurta15, tz, year, month, day) + " (Night)");
    }
  }

  // Varjyam & Amrita Kalam from active Nakshatra (and check next Nakshatra if active one's Varjyam already passed)
  const calcNakWindow = (nIdx, sJd, eJd, ghatiArr) => {
    if (!sJd || !eJd) return null;
    const durJd = eJd - sJd;
    const gStart = ghatiArr[nIdx];
    const wStartMs = jdToMs(sJd + durJd * (gStart / 60));
    const wEndMs = jdToMs(sJd + durJd * ((gStart + 4) / 60));
    return { wStartMs, wEndMs };
  };
  const varjyamWin = calcNakWindow(nakIdx, nakStartJd, nakEndJd, VARJYAM_GHATIS);
  const amritaWin = calcNakWindow(nakIdx, nakStartJd, nakEndJd, AMRITA_GHATIS);

  // 8. Sidereal Lagna (Ascendant) at selected instant & location
  const T = (jd - 2451545.0) / 36525.0;
  const gmst = norm360(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T);
  const lmst = norm360(gmst + lon);
  const eps = 23.439291 - 0.0130042 * T;
  const ascTrop = norm360(Math.atan2(cosD(lmst), -(sinD(lmst) * cosD(eps) + tanD(lat) * sinD(eps))) * R2D);
  const lagnaSid = norm360(ascTrop - ayan);
  const lagnaRashiIdx = Math.floor(lagnaSid / 30);
  const lagnaDeg = (lagnaSid % 30).toFixed(2);

  // 9. Sun's Nakshatra (Karte) & Kartari check
  const sunNakIdx = Math.floor(sunSid / nakSpan);
  const sunPada = Math.floor((sunSid - sunNakIdx * nakSpan) / (nakSpan / 4)) + 1;
  const isKartari = (sunNakIdx === 1 && sunPada >= 3) || (sunNakIdx === 2) || (sunNakIdx === 3 && sunPada === 1);

  // 10. Active Planetary Hora (Chaldean sequence from Vedic Sunrise)
  const CHALDEAN_GRAHAS = [
    "Sūrya (Sun)", "Śukra (Venus)", "Budha (Mercury)", "Candra (Moon)",
    "Śani (Saturn)", "Bṛhaspati (Jupiter)", "Maṅgala (Mars)"
  ];
  const WDAY_START_CHALDEAN = [0, 3, 6, 2, 5, 1, 4]; // Sun..Sat
  let horaNum = 0;
  let horaStartMs = sunriseMs;
  let horaEndMs = sunriseMs + dayDur / 12;
  if (sunriseMs && sunsetMs && targetUtcMs >= sunriseMs && targetUtcMs < sunsetMs) {
    const hDur = dayDur / 12;
    horaNum = Math.min(11, Math.floor((targetUtcMs - sunriseMs) / hDur));
    horaStartMs = sunriseMs + horaNum * hDur;
    horaEndMs = horaStartMs + hDur;
  } else if (sunsetMs && targetUtcMs >= sunsetMs) {
    const nDur = nightDur / 12;
    const nh = Math.min(11, Math.floor((targetUtcMs - sunsetMs) / nDur));
    horaNum = 12 + nh;
    horaStartMs = sunsetMs + nh * nDur;
    horaEndMs = horaStartMs + nDur;
  } else if (sunriseMs && targetUtcMs < sunriseMs) {
    const nDur = nightDur / 12;
    const nh = Math.max(0, Math.min(11, 11 - Math.floor((sunriseMs - targetUtcMs) / nDur)));
    horaNum = 12 + nh;
    horaStartMs = sunriseMs - (12 - nh) * nDur;
    horaEndMs = horaStartMs + nDur;
  }
  const horaGraha = CHALDEAN_GRAHAS[(WDAY_START_CHALDEAN[vedicWday] + horaNum) % 7];
  const horaStr = `${horaGraha} (${formatRange(horaStartMs, horaEndMs, tz, year, month, day)})`;

  // 11. Daily Special Observances
  const obsList = [];
  if (tithiIdx === 10 || tithiIdx === 25) obsList.push("Ekādaśī");
  if (tithiIdx === 12 || tithiIdx === 27) obsList.push("Pradoṣam");
  if (tithiIdx === 28) obsList.push("Māsaśivarātri");
  if (tithiIdx === 18) obsList.push("Saṅkaṣṭa Caturthī");
  if (tithiIdx === 14) obsList.push("Pūrṇimā");
  if (tithiIdx === 29) obsList.push("Amāvāsyā");
  if (isKartari) obsList.push("Vāstu Kartarī (వాస్తు కర్తరి)");
  if (masaInfo.isAdhika) obsList.push("Adhika Māsa");
  const observancesStr = obsList.length ? obsList.join(" • ") : "Nitya Pañcāṅga Day";

  return {
    year, month, day, hour, minute, locKey, locName, lat, lon, tz,
    jd, ayan,
    sunriseMs, sunsetMs,
    sunriseStr: formatLocalTime(sunriseMs, tz),
    sunsetStr: formatLocalTime(sunsetMs, tz),
    sunSid, moonSid, elongation,
    tithiIdx,
    tithiName: TITHI_NAMES[tithiIdx],
    tithiEndStr: tithiEndJd ? formatLocalTime(jdToMs(tithiEndJd), tz, year, month, day) : "—",
    paksha,
    vedicWday, gregWday, vara,
    nakIdx,
    nakName: NAKSHATRA_NAMES[nakIdx],
    pada,
    nakEndStr: nakEndJd ? formatLocalTime(jdToMs(nakEndJd), tz, year, month, day) : "—",
    yogaIdx,
    yogaName: YOGA_NAMES[yogaIdx],
    yogaEndStr: yogaEndJd ? formatLocalTime(jdToMs(yogaEndJd), tz, year, month, day) : "—",
    karanaName,
    karanaEndStr: karanaEndJd ? formatLocalTime(jdToMs(karanaEndJd), tz, year, month, day) : "—",
    sunRashiIdx,
    sunRashi: RASHI_NAMES[sunRashiIdx],
    moonRashiIdx,
    moonRashi: RASHI_NAMES[moonRashiIdx],
    lagnaRashiIdx,
    lagnaStr: `${RASHI_NAMES[lagnaRashiIdx]} (${lagnaDeg}°)`,
    sunKarteStr: `${NAKSHATRA_NAMES[sunNakIdx]} • Pada ${sunPada}${isKartari ? " (Kartarī Active)" : ""}`,
    observancesStr,
    horaStr,
    masaIdx: masaInfo.masaIdx,
    isAdhikaMasa: masaInfo.isAdhika,
    masaDisplay,
    ritu: RITU_NAMES[rituIdx],
    ayana,
    samvatsara,
    rahuStr: formatRange(rahuStart, rahuStart + part8, tz, year, month, day),
    yamaStr: formatRange(yamaStart, yamaStart + part8, tz, year, month, day),
    gulikaStr: formatRange(gulikaStart, gulikaStart + part8, tz, year, month, day),
    abhijitStr: formatRange(abhijitStart, abhijitEnd, tz, year, month, day) + (gregWday === 3 ? " (Avoid on Wed)" : ""),
    brahmaStr: formatRange(brahmaStart, brahmaEnd, tz, year, month, day),
    durmuhurtaStr: durIntervals.join(" | "),
    varjyamStr: varjyamWin ? formatRange(varjyamWin.wStartMs, varjyamWin.wEndMs, tz, year, month, day) : "—",
    amritaStr: amritaWin ? formatRange(amritaWin.wStartMs, amritaWin.wEndMs, tz, year, month, day) : "—"
  };
}

// =========================================================================
// 8. NAVANAYAKA (9 PLANETARY RULERS OF ANY SAMVATSARA)
// =========================================================================

function calculateNavanayaka(samvatsaraYear, locKey = "tirupati") {
  const loc = LOCATION_PRESETS[locKey] || LOCATION_PRESETS.tirupati;
  const ugadi = findUgadiForYear(samvatsaraYear, loc.lat, loc.lon, loc.tz);
  const ugadiDate = new Date(Date.UTC(ugadi.year, ugadi.month - 1, ugadi.day));
  const rajaWday = ugadiDate.getUTCDay();

  // Helper to find weekday of a solar ingress (sunSid crossing deg) starting from a given month/day
  const findIngressWday = (startMonth, startDay, targetDeg) => {
    const startMs = Date.UTC(samvatsaraYear, startMonth - 1, startDay, 0, 0, 0) - loc.tz * 3600000;
    const crossJd = findNextCrossing(getSunSidFn, targetDeg, msToJD(startMs), 0.25, 25);
    if (!crossJd) return 0;
    const localMs = jdToMs(crossJd) + loc.tz * 3600000;
    const d = new Date(localMs);
    return {
      wday: new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())).getUTCDay(),
      dateStr: `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`
    };
  };

  const mesha = findIngressWday(4, 10, 0);     // Sun enters Mesha (0 deg)
  const ardra = findIngressWday(6, 18, 66.6667); // Sun enters Ardra (66°40')
  const karkata = findIngressWday(7, 12, 90);  // Sun enters Karkata (90 deg)
  const tula = findIngressWday(10, 12, 180);   // Sun enters Tula (180 deg)
  const dhanu = findIngressWday(12, 10, 240);  // Sun enters Dhanu (240 deg)
  const makara = findIngressWday(1, 10, 270);  // Sun enters Makara (270 deg — next Jan)

  const makaraNextMs = Date.UTC(samvatsaraYear + 1, 0, 10, 0, 0, 0) - loc.tz * 3600000;
  const makaraCrossJd = findNextCrossing(getSunSidFn, 270, msToJD(makaraNextMs), 0.25, 15);
  let makaraWday = makara.wday;
  let makaraDateStr = makara.dateStr;
  if (makaraCrossJd) {
    const lm = jdToMs(makaraCrossJd) + loc.tz * 3600000;
    const md = new Date(lm);
    makaraWday = new Date(Date.UTC(md.getUTCFullYear(), md.getUTCMonth(), md.getUTCDate())).getUTCDay();
    makaraDateStr = `${md.getUTCFullYear()}-${String(md.getUTCMonth() + 1).padStart(2, "0")}-${String(md.getUTCDate()).padStart(2, "0")}`;
  }

  return [
    { role: "Rājā (రాజు — King)", basis: `Ugadi (${ugadi.year}-${String(ugadi.month).padStart(2,"0")}-${String(ugadi.day).padStart(2,"0")})`, graha: VARA_DATA[rajaWday].graha, vara: VARA_DATA[rajaWday].en },
    { role: "Mantri (మంత్రి — Minister)", basis: `Meṣa Saṅkrānti (${mesha.dateStr})`, graha: VARA_DATA[mesha.wday].graha, vara: VARA_DATA[mesha.wday].en },
    { role: "Senādhipati (సేనాధిపతి — Commander)", basis: `Ārdrā Praveśa (${ardra.dateStr})`, graha: VARA_DATA[ardra.wday].graha, vara: VARA_DATA[ardra.wday].en },
    { role: "Arghādhipati (అర్ఘాధిపతి — Prices/Trade)", basis: `Ārdrā Praveśa (${ardra.dateStr})`, graha: VARA_DATA[ardra.wday].graha, vara: VARA_DATA[ardra.wday].en },
    { role: "Meghādhipati (మేఘాధిపతి — Rains)", basis: `Ārdrā Praveśa (${ardra.dateStr})`, graha: VARA_DATA[ardra.wday].graha, vara: VARA_DATA[ardra.wday].en },
    { role: "Pūrva Sasyādhipati (పూర్వ సస్యాధిపతి)", basis: `Karkaṭa Saṅkrānti (${karkata.dateStr})`, graha: VARA_DATA[karkata.wday].graha, vara: VARA_DATA[karkata.wday].en },
    { role: "Apara Sasyādhipati (అపర సస్యాధిపతి)", basis: `Tulā Saṅkrānti (${tula.dateStr})`, graha: VARA_DATA[tula.wday].graha, vara: VARA_DATA[tula.wday].en },
    { role: "Rasādhipati (రసాధిపతి — Liquids/Oils)", basis: `Dhanu Saṅkrānti (${dhanu.dateStr})`, graha: VARA_DATA[dhanu.wday].graha, vara: VARA_DATA[dhanu.wday].en },
    { role: "Nīrasādhipati (నీరసాధిపతి — Metals/Cloth)", basis: `Makara Saṅkrānti (${makaraDateStr})`, graha: VARA_DATA[makaraWday].graha, vara: VARA_DATA[makaraWday].en }
  ];
}

// =========================================================================
// 9. TARABALA & CHANDRABALA COMPATIBILITY
// =========================================================================

function calculateTarabalaChandrabala(janmaNakIdx, janmaRashiIdx, dayNakIdx, dayMoonRashiIdx) {
  const taraCount = ((dayNakIdx - janmaNakIdx + 27) % 27) + 1;
  const taraIdx = (taraCount - 1) % 9;
  const tara = TARA_NAMES[taraIdx];

  const chandraPos = ((dayMoonRashiIdx - janmaRashiIdx + 12) % 12) + 1;
  let chandraStatus = "Medium (మధ్యమం)";
  let chandraGood = true;
  if ([1, 3, 6, 7, 10, 11].includes(chandraPos)) {
    chandraStatus = "Śubha / Auspicious (శుభం)";
    chandraGood = true;
  } else if ([4, 8, 12].includes(chandraPos)) {
    chandraStatus = chandraPos === 8 ? "Candraṣṭama / Avoid (చంద్రాష్టమం)" : "Aśubha / Caution (అశుభం)";
    chandraGood = false;
  }

  return {
    taraCount,
    tara,
    chandraPos,
    chandraStatus,
    chandraGood,
    overallGood: tara.auspicious && chandraGood
  };
}

// =========================================================================
// 10. DYNAMIC ANY-YEAR FESTIVAL, EKADASHI & SANKRANTI GENERATOR
// =========================================================================

function generateAnnualEvents(year, locKey = "tirupati") {
  const loc = LOCATION_PRESETS[locKey] || LOCATION_PRESETS.tirupati;
  const events = [];
  const startDate = new Date(Date.UTC(year, 0, 1));
  const endDate = new Date(Date.UTC(year + 1, 0, 1));

  let prevSunRashi = null;
  let prevMasaTithiKey = "";
  let prevTithiIdx = null;

  for (let d = new Date(startDate); d < endDate; d.setUTCDate(d.getUTCDate() + 1)) {
    const y = d.getUTCFullYear();
    const m = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    const { sunriseMs } = getSunriseSunsetMs(y, m, day, loc.lat, loc.lon, loc.tz);
    const jdSunrise = msToJD(sunriseMs || (Date.UTC(y, m - 1, day, 0, 30, 0)));
    const { sunSid, moonSid } = getSiderealLongitudes(jdSunrise);
    const elong = norm360(moonSid - sunSid);
    const tithiIdx = Math.floor(elong / 12); // 0..29
    const sunRashi = Math.floor(sunSid / 30);
    const masaInfo = getAmantaMasaInfo(jdSunrise);
    const masaIdx = masaInfo.masaIdx;
    const isAdhika = masaInfo.isAdhika;
    const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const wdayName = VARA_DATA[d.getUTCDay()].en;
    const masaLabel = (isAdhika ? "Adhika " : "") + MASA_NAMES[masaIdx].split(" ")[0];

    // Solar Sankranti check (when Sun enters a new Rashi compared to previous day's sunrise)
    if (prevSunRashi !== null && sunRashi !== prevSunRashi) {
      const sankName = RASHI_NAMES[sunRashi].split(" ")[0];
      let special = "";
      if (sunRashi === 9) special = "Makara Saṅkrānti / Uttarāyaṇa Puṇyakāla";
      else if (sunRashi === 3) special = "Karkaṭa Saṅkrānti / Dakṣiṇāyana Puṇyakāla";
      else if (sunRashi === 0) special = "Meṣa Saṅkrānti (Solar New Year)";
      else special = `${sankName} Saṅkrānti`;
      events.push({ dateStr, wdayName, title: special, masa: masaLabel, category: "sankranti" });
    }
    prevSunRashi = sunRashi;

    const key = `${masaIdx}-${isAdhika}-${tithiIdx}`;
    const isNewTithiAtSunrise = (key !== prevMasaTithiKey);
    prevMasaTithiKey = key;

    const tithisToday = [];
    if (isNewTithiAtSunrise) {
      if (prevTithiIdx !== null && ((prevTithiIdx + 2) % 30) === tithiIdx) {
        tithisToday.push((prevTithiIdx + 1) % 30);
      }
      tithisToday.push(tithiIdx);
    }
    prevTithiIdx = tithiIdx;

    for (const tIdx of tithisToday) {
      // Ekadashi (10 = Shukla, 25 = Krishna)
      if (tIdx === 10 || tIdx === 25) {
        let ekName = `${masaLabel} ${tIdx === 10 ? "Śukla" : "Kṛṣṇa"} Ekādaśī`;
        if (!isAdhika && masaIdx === 3 && tIdx === 10) ekName = "Śayana / Toli Ekādaśī (శయన ఏకాదశి)";
        if (!isAdhika && masaIdx === 7 && tIdx === 10) ekName = "Utthāna / Prabodhinī Ekādaśī";
        if (!isAdhika && masaIdx === 8 && tIdx === 10) ekName = "Vaikuṇṭha / Mokṣada Ekādaśī (వైకుంఠ ఏకాదశి)";
        events.push({ dateStr, wdayName, title: ekName, masa: masaLabel, category: "ekadashi" });
      }

      // Pradosham (12 = Shukla Trayodashi, 27 = Krishna Trayodashi) & Masashivaratri (28 = Krishna Chaturdashi)
      if (tIdx === 12 || tIdx === 27) {
        events.push({ dateStr, wdayName, title: `${masaLabel} ${tIdx === 12 ? "Śukla" : "Kṛṣṇa"} Pradoṣam (ప్రదోషం)`, masa: masaLabel, category: "vrata" });
      }
      if (tIdx === 28) {
        events.push({ dateStr, wdayName, title: `${masaLabel} Māsaśivarātri (మాసశివరాత్రి)`, masa: masaLabel, category: "vrata" });
      }

      // Purnima (14) & Amavasya (29)
      if (tIdx === 14) {
        let pName = `${masaLabel} Pūrṇimā`;
        if (!isAdhika && masaIdx === 3) pName = "Guru Pūrṇimā / Vyāsa Pūrṇimā (గురు పూర్ణిమ)";
        if (!isAdhika && masaIdx === 4) pName = "Śrāvaṇa Pūrṇimā / Rakṣā Bandhan";
        if (!isAdhika && masaIdx === 7) pName = "Kārtika Pūrṇimā (కార్తీక పూర్ణిమ)";
        if (!isAdhika && masaIdx === 11) pName = "Holī / Kāma Dahana Pūrṇimā";
        events.push({ dateStr, wdayName, title: pName, masa: masaLabel, category: "lunar" });
      }
      if (tIdx === 29) {
        let aName = `${masaLabel} Amāvāsyā`;
        if (!isAdhika && masaIdx === 5) aName = "Mahālaya Amāvāsyā (మహాలయ అమావాస్య)";
        if (!isAdhika && masaIdx === 6) aName = "Dīpāvali Amāvāsyā (దీపావళి)";
        events.push({ dateStr, wdayName, title: aName, masa: masaLabel, category: "lunar" });
      }

      // Major Festivals (Non-Adhika months)
      if (!isAdhika) {
        if (masaIdx === 0 && tIdx === 0) events.push({ dateStr, wdayName, title: "Ugādi — Telugu/Vedic New Year (ఉగాది)", masa: masaLabel, category: "festival" });
        if (masaIdx === 0 && tIdx === 8) events.push({ dateStr, wdayName, title: "Śrī Rāma Navami (శ్రీరామ నవమి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 1 && tIdx === 2) events.push({ dateStr, wdayName, title: "Akṣaya Tṛtīyā (అక్షయ తృతీయ)", masa: masaLabel, category: "festival" });
        if (masaIdx === 1 && tIdx === 13) events.push({ dateStr, wdayName, title: "Śrī Narasiṃha Jayantī (నృసింహ జయంతి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 4 && tIdx === 22) events.push({ dateStr, wdayName, title: "Śrī Kṛṣṇa Janmāṣṭamī (శ్రీకృష్ణాష్టమి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 5 && tIdx === 3) events.push({ dateStr, wdayName, title: "Vināyaka Caturthī (వినాయక చవితి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 6 && tIdx === 0) events.push({ dateStr, wdayName, title: "Śarannavarātri Prārambha (శరన్నవరాత్రి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 6 && tIdx === 9) events.push({ dateStr, wdayName, title: "Vijayadaśamī / Daśarā (విజయదశమి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 9 && tIdx === 6) events.push({ dateStr, wdayName, title: "Ratha Saptamī (రథసప్తమి)", masa: masaLabel, category: "festival" });
        if (masaIdx === 10 && tIdx === 28) events.push({ dateStr, wdayName, title: "Mahāśivarātri (మహాశివరాత్రి)", masa: masaLabel, category: "festival" });
      }
    }
  }

  return events;
}

// =========================================================================
// 11. KALA-MANA CONVERTER
// =========================================================================

function runKalaManaConverter() {
  const valInput = document.getElementById("kmInputVal");
  const unitInput = document.getElementById("kmInputUnit");
  const grid = document.getElementById("kmResultsGrid");
  if (!valInput || !unitInput || !grid) return;

  const val = Math.max(0, parseFloat(valInput.value) || 0);
  const unit = unitInput.value;

  let seconds = 0;
  if (unit === "hr" || unit === "hours") seconds = val * 3600;
  else if (unit === "min" || unit === "minutes") seconds = val * 60;
  else if (unit === "sec" || unit === "seconds") seconds = val;
  else if (unit === "day") seconds = val * 86400;

  const fmt = (n) => {
    if (n === 0) return "0";
    if (n >= 1) return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
    if (n >= 0.0001) return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
    return n.toLocaleString("en-US", { maximumFractionDigits: 8 });
  };

  // Standard Surya Siddhanta / classical Vedic time units:
  // 1 Day (Ahoratra) = 86,400 sec = 30 Muhurtas = 60 Ghatikas = 3,600 Vighatikas = 21,600 Pranas
  // Nimesha = 16/75 sec = 0.21333 sec; Truti = 8/13500 sec; Tatpara = 8/405 sec
  const units = [
    { label: "Truṭi (त्रुटि • త్రుటి)", val: seconds * (13500 / 8), note: "8/13,500 sec" },
    { label: "Nimeṣa (निमेष • నిమేషం)", val: seconds * (75 / 16), note: "16/75 sec (1 blink)" },
    { label: "Prāṇa / Asu (प्राण • ప్రాణము)", val: seconds / 4, note: "4 sec (1 breath)" },
    { label: "Vighaṭikā / Pala (विघटिका • విఘటిక)", val: seconds / 24, note: "24 sec (1/60 Ghaṭikā)" },
    { label: "Ghaṭikā / Nāḍī (घटिका • ఘటిక)", val: seconds / 1440, note: "24 min (1/60 Day)" },
    { label: "Muhūrta (मुहूर्त • ముహూర్తము)", val: seconds / 2880, note: "48 min (2 Ghaṭikās)" },
    { label: "Prahara / Yāma (प्रहर • జాము)", val: seconds / 10800, note: "3 hours (7.5 Ghaṭikās)" },
    { label: "Ahorātra (अहोरात्र • అహోరాత్రం)", val: seconds / 86400, note: "24 hours (60 Ghaṭikās)" }
  ];

  grid.innerHTML = units.map(u => `
    <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(245,185,66,0.22); border-radius:10px; padding:0.9rem 1rem;">
      <div style="font-size:0.78rem; color:var(--gold-primary); font-weight:600; margin-bottom:0.25rem;">${u.label}</div>
      <div style="font-family:var(--font-mono); font-size:1.25rem; font-weight:700; color:#fff;">${fmt(u.val)}</div>
      <div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.2rem;">${u.note}</div>
    </div>
  `).join("");
}

// =========================================================================
// 12. DOM RENDERERS & EVENT HANDLERS (BROWSER ONLY)
// =========================================================================

function renderSamvatsaraCatalog(currentIdx, currentEffYear) {
  const grid = document.getElementById("samvatsaraGrid");
  const cycleEl = document.getElementById("samvatsaraCycleText");
  const badgeEl = document.getElementById("activeSamvatsaraBadge");

  const cycleStart = currentEffYear - currentIdx;
  const cycleEnd = cycleStart + 60;
  if (cycleEl) cycleEl.innerText = `${cycleStart} – ${cycleEnd} CE`;
  if (badgeEl) badgeEl.innerText = `#${currentIdx + 1} ${SAMVATSARAS[currentIdx]} (${currentEffYear}–${currentEffYear + 1})`;

  if (!grid) return;

  grid.innerHTML = SAMVATSARAS.map((name, i) => {
    const isCurrent = i === currentIdx;
    const num = i + 1;
    const cycleYear = cycleStart + i;

    return `
      <div ${isCurrent ? 'data-active-samvatsara="true"' : ""} style="background:${isCurrent ? "linear-gradient(135deg, rgba(245,185,66,0.22), rgba(168,85,247,0.18))" : "rgba(255,255,255,0.03)"}; border:1px solid ${isCurrent ? "#ffd700" : "rgba(255,255,255,0.08)"}; border-radius:10px; padding:0.75rem; position:relative;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:${isCurrent ? "#ffd700" : "var(--text-muted)"};">#${num}</span>
          ${isCurrent ? `<span style="background:var(--gold-bright); color:#000; font-size:0.65rem; font-weight:800; padding:0.1rem 0.4rem; border-radius:4px;">ACTIVE</span>` : ""}
        </div>
        <div style="font-weight:700; font-size:0.9rem; color:${isCurrent ? "#fff" : "#e2e8f0"};">${name}</div>
        <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.25rem;">
          ${cycleYear}–${cycleYear + 1}
        </div>
      </div>
    `;
  }).join("");

  const activeCard = grid.querySelector('[data-active-samvatsara="true"]');
  if (activeCard) {
    requestAnimationFrame(() => {
      const targetTop = activeCard.offsetTop - grid.offsetTop - (grid.clientHeight / 2) + (activeCard.clientHeight / 2);
      grid.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
    });
  }
}

function renderNavanayakaTable(samvatsaraYear, locKey) {
  const body = document.getElementById("navanayakaBody");
  const titleEl = document.getElementById("navanayakaTitle");
  if (!body) return;
  const idx = ((samvatsaraYear - 1987) % 60 + 60) % 60;
  if (titleEl) {
    titleEl.textContent = `Navanāyaka (9 Planetary Rulers) — ${SAMVATSARAS[idx]} (${samvatsaraYear}–${samvatsaraYear + 1})`;
  }
  const rows = calculateNavanayaka(samvatsaraYear, locKey);
  body.innerHTML = rows.map(r => `
    <tr>
      <td><strong>${r.role}</strong></td>
      <td style="color:var(--gold-bright); font-weight:700;">${r.graha}</td>
      <td style="color:var(--text-muted); font-size:0.82rem;">${r.basis} (${r.vara})</td>
    </tr>
  `).join("");
}

function renderAnnualEventsTable(year, locKey, filterCat = "all") {
  const body = document.getElementById("annualEventsBody");
  if (!body) return;
  const all = generateAnnualEvents(year, locKey);
  const filtered = filterCat === "all" ? all : all.filter(e => e.category === filterCat);
  if (filtered.length === 0) {
    body.innerHTML = `<tr><td colspan="4" style="color:var(--text-muted); text-align:center;">No events found for this filter.</td></tr>`;
    return;
  }
  body.innerHTML = filtered.map(ev => {
    const badgeClass = ev.category === "festival" ? "tag-auspicious"
      : ev.category === "sankranti" ? "tag-inauspicious" : "";
    return `
      <tr>
        <td style="font-family:var(--font-mono); white-space:nowrap;">${ev.dateStr}</td>
        <td>${ev.wdayName}</td>
        <td><strong style="color:#fff;">${ev.title}</strong></td>
        <td><span class="${badgeClass}" style="font-size:0.78rem; color:var(--gold-primary);">${ev.masa}</span></td>
      </tr>
    `;
  }).join("");
}

let lastCalculatedData = null;

function updateTarabalaUI() {
  if (!lastCalculatedData) return;
  const nakSel = document.getElementById("janmaNakSelect");
  const rashiSel = document.getElementById("janmaRashiSelect");
  const taraLocSel = document.getElementById("tarabalaLocSelect");
  const outEl = document.getElementById("tarabalaOutput");
  if (!nakSel || !rashiSel || !outEl) return;

  const activeLocKey = taraLocSel?.value || lastCalculatedData.locKey;
  const evalData = activeLocKey === lastCalculatedData.locKey
    ? lastCalculatedData
    : calculatePanchanga(
        lastCalculatedData.year,
        lastCalculatedData.month,
        lastCalculatedData.day,
        lastCalculatedData.hour,
        lastCalculatedData.minute,
        activeLocKey
      );

  const jNak = parseInt(nakSel.value, 10) || 0;
  const jRashi = parseInt(rashiSel.value, 10) || 0;
  const res = calculateTarabalaChandrabala(jNak, jRashi, evalData.nakIdx, evalData.moonRashiIdx);

  const ctxPill = document.getElementById("tarabalaContextPill");
  if (ctxPill) {
    const hh = String(evalData.hour).padStart(2, "0");
    const mm = String(evalData.minute).padStart(2, "0");
    const dateStr = `${evalData.year}-${String(evalData.month).padStart(2, "0")}-${String(evalData.day).padStart(2, "0")}`;
    ctxPill.textContent = `Evaluating Selected Moment: ${dateStr} at ${hh}:${mm} (${evalData.locName}) • Transit Nakṣatra: ${evalData.nakName.split(" ")[0]} • Moon Rāśi: ${evalData.moonRashi.split(" ")[0]}`;
  }

  outEl.innerHTML = `
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem;">
      <div class="detail-box" style="border-color:${res.tara.auspicious ? "rgba(16,185,129,0.4)" : "rgba(244,63,94,0.4)"};">
        <label>Tārābala (తారాబలం — Star Strength)</label>
        <div class="val-primary" style="color:${res.tara.auspicious ? "var(--emerald-accent)" : "var(--rose-accent)"};">
          #${res.taraCount}: ${res.tara.name}
        </div>
        <p>${res.tara.note} (Transit: ${evalData.nakName})</p>
      </div>
      <div class="detail-box" style="border-color:${res.chandraGood ? "rgba(16,185,129,0.4)" : "rgba(244,63,94,0.4)"};">
        <label>Candrabala (చంద్రబలం — Moon Transit)</label>
        <div class="val-primary" style="color:${res.chandraGood ? "var(--emerald-accent)" : "var(--rose-accent)"};">
          House ${res.chandraPos}: ${res.chandraStatus}
        </div>
        <p>Transit Moon in ${evalData.moonRashi}</p>
      </div>
    </div>
  `;
}

function updatePanchangaUI(year, month, day, hour, minute, locKey) {
  const data = calculatePanchanga(year, month, day, hour, minute, locKey);
  lastCalculatedData = data;

  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.innerText = txt;
  };

  // Top 5 Limbs
  setText("limbTithiVal", `${data.tithiName.split(" ")[0]} (${data.paksha.split(" ")[0]})`);
  setText("limbVaraVal", data.vara.name);
  setText("limbNakVal", `${data.nakName.split(" ")[0]} (P${data.pada})`);
  setText("limbYogaVal", data.yogaName.split(" ")[0]);
  setText("limbKaranaVal", data.karanaName.split(" ")[0]);

  // Ephemeris Table
  setText("calcMasa", `${data.masaDisplay} • ${data.paksha}`);
  setText("calcTithi", `${data.tithiName} (ends ${data.tithiEndStr})`);
  setText("calcVara", `${data.vara.name} — Ruled by ${data.vara.graha}`);
  setText("calcNak", `${data.nakName} • Pada ${data.pada} (ends ${data.nakEndStr})`);
  setText("calcYoga", `${data.yogaName} (ends ${data.yogaEndStr})`);
  setText("calcKarana", `${data.karanaName} (ends ${data.karanaEndStr})`);
  setText("calcSunTimes", `Sunrise: ${data.sunriseStr}  |  Sunset: ${data.sunsetStr} (${data.locName})`);
  setText("calcSamvatsara", `#${data.samvatsara.idx + 1} ${data.samvatsara.name} | Śaka ${data.samvatsara.shakaYear} | Vikrama ${data.samvatsara.vikramaYear}`);
  setText("calcAyana", `${data.ayana}  |  ${data.ritu}`);
  setText("calcRashi", `Sun: ${data.sunRashi}  |  Moon: ${data.moonRashi}`);
  setText("calcLagna", data.lagnaStr);
  setText("calcSunKarte", data.sunKarteStr);
  setText("calcObservances", data.observancesStr);
  setText("calcSunLong", `${data.sunSid.toFixed(2)}° Sidereal (Lahiri Ayanāṃśa ${data.ayan.toFixed(2)}°)`);
  setText("calcMoonLong", `${data.moonSid.toFixed(2)}° Sidereal (Elongation ${data.elongation.toFixed(2)}°)`);

  // Live Muhurta & Kaala Cards/Table
  setText("muhurtaBrahmaTime", data.brahmaStr);
  setText("muhurtaAbhijitTime", data.abhijitStr);
  setText("muhurtaAmritaTime", data.amritaStr);
  setText("muhurtaHoraTime", data.horaStr);
  setText("muhurtaRahuTime", data.rahuStr);
  setText("muhurtaYamaTime", data.yamaStr);
  setText("muhurtaGulikaTime", data.gulikaStr);
  setText("muhurtaDurTime", data.durmuhurtaStr);
  setText("muhurtaVarjyamTime", data.varjyamStr);

  renderSamvatsaraCatalog(data.samvatsara.idx, data.samvatsara.effYear);
  renderNavanayakaTable(data.samvatsara.effYear, locKey);
  updateTarabalaUI();
}

function initPanchangaScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navContainer = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links .nav-item");
  if (!sections.length || !navLinks.length) return;

  let lastActiveId = null;
  const setActive = (id) => {
    if (id === lastActiveId) return;
    lastActiveId = id;
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
      if (isActive && navContainer) {
        const targetLeft = link.offsetLeft - (navContainer.clientWidth / 2) + (link.clientWidth / 2);
        navContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
      }
    });
  };

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 140;
    let currentId = sections[0].getAttribute("id");
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) currentId = sec.getAttribute("id");
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
      currentId = sections[sections.length - 1].getAttribute("id");
    }
    setActive(currentId);
  }, { passive: true });
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("panchDateInput");
    const timeInput = document.getElementById("panchTimeInput");
    const locSelect = document.getElementById("panchLocSelect");
    const todayBtn = document.getElementById("panchTodayBtn");
    const annualYearInput = document.getElementById("annualYearInput");
    const annualCatSelect = document.getElementById("annualCatSelect");
    const janmaNakSelect = document.getElementById("janmaNakSelect");
    const janmaRashiSelect = document.getElementById("janmaRashiSelect");

    // Populate Janma Nakshatra & Rashi dropdowns
    if (janmaNakSelect) {
      janmaNakSelect.innerHTML = NAKSHATRA_NAMES.map((n, i) => `<option value="${i}">${i + 1}. ${n}</option>`).join("");
    }
    if (janmaRashiSelect) {
      janmaRashiSelect.innerHTML = RASHI_NAMES.map((r, i) => `<option value="${i}">${i + 1}. ${r}</option>`).join("");
    }

    const triggerUpdate = () => {
      const dParts = (dateInput?.value || "").split("-").map(Number);
      const tParts = (timeInput?.value || "06:00").split(":").map(Number);
      if (dParts.length === 3 && !dParts.some(isNaN)) {
        updatePanchangaUI(dParts[0], dParts[1], dParts[2], tParts[0] || 0, tParts[1] || 0, locSelect?.value || "tirupati");
      }
    };

    const setNow = () => {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      if (dateInput) dateInput.value = `${yyyy}-${mm}-${dd}`;
      if (timeInput) timeInput.value = `${hh}:${min}`;
      if (annualYearInput && !annualYearInput.value) annualYearInput.value = yyyy;
      triggerUpdate();
    };

    if (dateInput) dateInput.addEventListener("change", triggerUpdate);
    if (timeInput) timeInput.addEventListener("change", triggerUpdate);
    if (locSelect) locSelect.addEventListener("change", () => {
      const taraLocSel = document.getElementById("tarabalaLocSelect");
      if (taraLocSel) taraLocSel.value = locSelect.value;
      triggerUpdate();
      if (annualYearInput) {
        renderAnnualEventsTable(parseInt(annualYearInput.value, 10) || new Date().getFullYear(), locSelect.value, annualCatSelect?.value || "all");
      }
    });
    if (todayBtn) todayBtn.addEventListener("click", setNow);

    const taraLocSel = document.getElementById("tarabalaLocSelect");
    if (taraLocSel) {
      taraLocSel.innerHTML = Object.entries(LOCATION_PRESETS).map(([key, info]) => {
        const sign = info.tz >= 0 ? "+" : "-";
        const absTz = Math.abs(info.tz);
        const h = String(Math.floor(absTz)).padStart(2, "0");
        const m = String(Math.round((absTz % 1) * 60)).padStart(2, "0");
        return `<option value="${key}">${info.name} (UTC${sign}${h}:${m})</option>`;
      }).join("");
      taraLocSel.value = locSelect?.value || "tirupati";
      taraLocSel.addEventListener("change", updateTarabalaUI);
    }

    if (janmaNakSelect) janmaNakSelect.addEventListener("change", updateTarabalaUI);
    if (janmaRashiSelect) janmaRashiSelect.addEventListener("change", updateTarabalaUI);

    const annualApplyBtn = document.getElementById("annualApplyBtn");
    const refreshAnnual = () => {
      const y = parseInt(annualYearInput?.value, 10) || new Date().getFullYear();
      renderAnnualEventsTable(y, locSelect?.value || "tirupati", annualCatSelect?.value || "all");
    };
    if (annualApplyBtn) annualApplyBtn.addEventListener("click", refreshAnnual);
    if (annualYearInput) {
      annualYearInput.addEventListener("change", refreshAnnual);
      annualYearInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") refreshAnnual();
      });
    }
    if (annualCatSelect) annualCatSelect.addEventListener("change", refreshAnnual);

    const kmVal = document.getElementById("kmInputVal");
    const kmUnit = document.getElementById("kmInputUnit");
    if (kmVal && kmUnit) {
      kmVal.addEventListener("input", runKalaManaConverter);
      kmUnit.addEventListener("change", runKalaManaConverter);
    }

    setNow();
    refreshAnnual();
    runKalaManaConverter();
    initPanchangaScrollSpy();
  });
}

// Export for Node.js verification
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    calculatePanchanga,
    calculateNavanayaka,
    calculateTarabalaChandrabala,
    generateAnnualEvents,
    findUgadiForYear
  };
}
