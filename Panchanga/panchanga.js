/**
 * Pañcāṅga (पञ्चाङ्गम् • పంచాంగము) — The Five Limbs of Time Master Engine
 * Authentic Vedic Calculation via Sūrya Siddhānta Ephemeris,
 * Kāla-Māna Units & 60-Year Jovian Samvatsara System
 */

// ==========================================
// 1. TITHI DATA (30 TITHIS)
// ==========================================
const TITHI_NAMES = [
  "Śukla Pratipadā (शुक्ल प्रतिपदा • శుక్ల పాడ్యమి)",
  "Śukla Dvitīyā (शुक्ल द्वितीया • శుక్ల విదియ)",
  "Śukla Tṛtīyā (शुक्ल तृतीया • శుక్ల తదియ)",
  "Śukla Caturthī (शुक्ल चतुर्थी • శుక్ల చవితి)",
  "Śukla Pañcamī (शुक्ल पञ्चमी • శుక్ల పంచమి)",
  "Śukla Ṣaṣṭhī (शुक्ल षष्ठी • శుక్ల షష్ఠి)",
  "Śukla Saptamī (शुक्ल सप्तमी • శుక్ల సప్తమి)",
  "Śukla Aṣṭamī (शुक्ल अष्टमी • శుక్ల అష్టమి)",
  "Śukla Navamī (शुक्ल नवमी • శుక్ల నవమి)",
  "Śukla Daśamī (शुक्ल दशमी • శుక్ల దశమి)",
  "Śukla Ekādaśī (शुक्ल एकादशी • శుక్ల ఏకాదశి)",
  "Śukla Dvādaśī (शुक्ल द्वादशी • శుక్ల ద్వాదశి)",
  "Śukla Trayodaśī (शुक्ल त्रयोदशी • శుక్ల త్రయోదశి)",
  "Śukla Caturdaśī (शुक्ल चतुर्दशी • శుక్ల చతుర్దశి)",
  "Pūrṇimā (पूर्णिमा • పూర్ణిమ - Full Moon)",
  "Kṛṣṇa Pratipadā (कृष्ण प्रतिपदा • కృష్ణ పాడ్యమి)",
  "Kṛṣṇa Dvitīyā (कृष्ण द्वितीया • కృష్ణ విదియ)",
  "Kṛṣṇa Tṛtīyā (कृष्ण तृतीया • కృష్ణ తదియ)",
  "Kṛṣṇa Caturthī (कृष्ण चतुर्थी • కృష్ణ చవితి)",
  "Kṛṣṇa Pañcamī (कृष्ण पञ्चमी • కృష్ణ పంచమి)",
  "Kṛṣṇa Ṣaṣṭhī (कृष्ण षष्ठी • కృష్ణ షష్ఠి)",
  "Kṛṣṇa Saptamī (कृष्ण सप्तमी • కృష్ణ సప్తమి)",
  "Kṛṣṇa Aṣṭamī (कृष्ण अष्टमी • కృష్ణ అష్టమి)",
  "Kṛṣṇa Navamī (कृष्ण नवमी • కృష్ణ నవమి)",
  "Kṛṣṇa Daśamī (कृष्ण दशमी • కృష్ణ దశమి)",
  "Kṛṣṇa Ekādaśī (कृष्ण एकादशी • కృష్ణ ఏకాదశి)",
  "Kṛṣṇa Dvādaśī (कृष्ण द्वादशी • కృష్ణ ద్వాదశి)",
  "Kṛṣṇa Trayodaśī (कृष्ण त्रयोदशी • కృష్ణ త్రయోదశి)",
  "Kṛṣṇa Caturdaśī (कृष्ण चतुर्दशी • కృష్ణ చతుర్దశి)",
  "Amāvāsyā (अमावास्या • అమావాస్య - New Moon)"
];

// ==========================================
// 2. VĀRA DATA (7 WEEKDAYS)
// ==========================================
const VARA_DATA = [
  { day: "Ravivāra (रविवार • ఆదివారం - Sunday)", lord: "Sūrya (సూర్యుడు)", energy: "Vitality, authority, health, spirituality, solar worship." },
  { day: "Somavāra (सोमवार • సోమవారం - Monday)", lord: "Candra (చంద్రుడు)", energy: "Receptivity, mind, water ceremonies, emotional healing, family." },
  { day: "Maṅgalavāra (मङ्गलवार • మంగళవారం - Tuesday)", lord: "Maṅgala (కుజుడు)", energy: "Courage, discipline, engineering, decisive breakthroughs, athletics." },
  { day: "Budhavāra (बुधवार • బుధవారం - Wednesday)", lord: "Budha (బుధుడు)", energy: "Intellect, business trade, communication, writing, analytical study." },
  { day: "Guruvāra (गुरुवार • గురువారం - Thursday)", lord: "Guru / Bṛhaspati (బృహస్పతి)", energy: "Wisdom, spiritual initiation, ethics, higher education, expansion." },
  { day: "Śukravāra (शुक्रवार • శుక్రవారం - Friday)", lord: "Śukra (శుక్రుడు)", energy: "Artistic beauty, music, relationships, jewelry, prosperity, romance." },
  { day: "Śanivāra (शनिवार • శనివారం - Saturday)", lord: "Śani (శని)", energy: "Restraint, introspection, grounding, long-term endurance, charity." }
];

// ==========================================
// 3. NAKṢATRA DATA (27 ASTERISMS)
// ==========================================
const NAKSHATRA_NAMES = [
  "Aśvinī (अश्विनी • అశ్విని)", "Bharaṇī (भरणी • భరణి)", "Kṛttikā (कृत्तिका • కృత్తిక)", "Rohiṇī (रोहिणी • రోహిణి)",
  "Mṛgaśīrṣā (मृगशीर्षा • మృగశిర)", "Ārdrā (आर्द्रा • ఆర్ద్ర)", "Punarvasu (पुनर्वसु • పునర్వసు)", "Puṣya (पुष्य • పుష్యమి)",
  "Āśleṣā (आश्लेषा • ఆశ్లేష)", "Maghā (मघा • మఖ)", "Pūrva Phālgunī (पूर्वफाल्गुनी • పుబ్బ)", "Uttara Phālgunī (उत्तरफाल्गुनी • ఉత్తర)",
  "Hasta (हस्त • హస్త)", "Citrā (चित्रा • చిత్త)", "Svātī (स्वाती • స్వాతి)", "Viśākhā (विशाखा • విశాఖ)",
  "Anurādhā (अनुराधा • అనూరాధ)", "Jyeṣṭhā (ज्येष्ठा • జ్యేష్ఠ)", "Mūla (मूल • మూల)", "Pūrvāṣāḍhā (पूर्वाषाढा • పూర్వాషాఢ)",
  "Uttarāṣāḍhā (उत्तराषाढा • ఉత్తరాషాఢ)", "Śravaṇa (श्रवण • శ్రవణం)", "Dhaniṣṭhā (धनिष्ठा • ధనిష్ఠ)", "Śatabhiṣaj (शतभिषज् • శతభిషం)",
  "Pūrva Bhādrapadā (पूर्वभाद्रपदा • పూర్వాభాద్ర)", "Uttara Bhādrapadā (उत्तरभाद्रपदा • ఉత్తరాభాద్ర)", "Revatī (रेवती • రేవతి)"
];

// ==========================================
// 4. YOGA DATA (27 YOGAS)
// ==========================================
const YOGA_NAMES = [
  "1. Viṣkambha (विष्कम्भ • విష్కంభము)", "2. Prīti (प्रीति • ప్రీతి)", "3. Āyuṣmān (आयुष्मान् • ఆయుష్మాన్)", "4. Saubhāgya (सौभाग्य • సౌభాగ్యము)",
  "5. Śobhana (शोभन • శోభనము)", "6. Atigaṇḍa (अतिगण्ड • అతిగండము)", "7. Sukarmā (सुकर्मा • సుకర్మ)", "8. Dhṛti (धृति • ధృతి)",
  "9. Śūla (शूल • శూలము)", "10. Gaṇḍa (गण्ड • గండము)", "11. Vṛddhi (वृद्धि • వృద్ధి)", "12. Dhruva (ध्रुव • ధ్రువము)",
  "13. Vyāghāta (व्याघात • వ్యాఘాతము)", "14. Harṣaṇa (हर्षण • హర్షణము)", "15. Vajra (वज्र • వజ్రము)", "16. Siddhi (सिद्धि • సిద్ధి)",
  "17. Vyatīpāta (व्यतीपात • వ్యతీపాతము)", "18. Varīyān (वरीयान् • వరీయాన్)", "19. Parigha (परिघ • పరిఘము)", "20. Śiva (शिव • శివము)",
  "21. Siddha (सिद्ध • సిద్ధము)", "22. Sādhya (साध्य • సాధ్యము)", "23. Śubha (शुभ • శుభము)", "24. Śukla (शुक्ल • శుక్లము)",
  "25. Brahma (ब्रह्म • బ్రహ్మము)", "26. Māhendra (माहेन्द्र • ఇంద్రము)", "27. Vaidhṛti (वैधृति • వైధృతి)"
];

// ==========================================
// 5. KARAṆA DATA
// ==========================================
const MOVABLE_KARANAS = [
  "Bava (बव • బవ)", "Bālava (बालव • బాలవ)", "Kaulava (कौलव • కౌలవ)",
  "Taitila (तैतिल • తైతిల)", "Gara (गर • గరజ)", "Vaṇija (वणिज • వణిజ)", "Viṣṭi / Bhadrā (विष्टि/भद्रा • విష్టి/భద్ర)"
];
const FIXED_KARANAS = {
  1: "Kiṁstughna (किंस्तुघ्न • కింస్తుఘ్నం)",
  58: "Śakuni (शकुनि • శకుని)",
  59: "Catuṣpada (चतुष्पद • చతుష్పాత్)",
  60: "Nāga (नाग • నాగ)"
};

// ==========================================
// 6. 60-YEAR JOVIAN CYCLE (SAMVATSARA)
// ==========================================
const SAMVATSARAS = [
  "1. Prabhava (प्रभव • ప్రభవ)", "2. Vibhava (विभव • విభవ)", "3. Śukla (शुक्ल • శుక్ల)", "4. Pramodadūta (प्रमोदूत • ప్రమోదూత)",
  "5. Prajāpati (प्रजापति • ప్రజాపతి)", "6. Aṅgiras (अङ्गिरा • ఆంగీరస)", "7. Śrīmukha (श्रीमुख • శ్రీముఖ)", "8. Bhāva (भाव • భావ)",
  "9. Yuva (युव • యువ)", "10. Dhātṛ (धाता • ధాత)", "11. Īśvara (ईश्वर • ఈశ్వర)", "12. Bahudhānya (बहुधान्य • బహుధాన్య)",
  "13. Pramāthin (प्रमाथी • ప్రమాథి)", "14. Vikrama (विक्रम • విక్రమ)", "15. Vṛṣa (वृष • వృష)", "16. Citrabhānu (चित्रभानु • చిత్రభాను)",
  "17. Svabhānu (स्वभानु • స్వభాను)", "18. Tāraṇa (तारण • తారణ)", "19. Pārthiva (पार्थिव • పార్థివ)", "20. Vyaya (व्यय • వ్యయ)",
  "21. Sarvajit (सर्वजित् • సర్వజిత్తు)", "22. Sarvadhārin (सर्वधारी • సర్వధారి)", "23. Virodhin (विरोधी • విరోధి)", "24. Vikṛta (विकृत • వికృతి)",
  "25. Khara (खर • ఖర)", "26. Nandana (नन्दन • నందన)", "27. Vijaya (विजय • విజయ)", "28. Jaya (जय • జయ)",
  "29. Manmatha (मन्मथ • మన్మథ)", "30. Durmukha (दुर्मुख • దుర్ముఖి)", "31. Hemalamba (हेमलम्ब • హేవిలంబి)", "32. Vilamba (विलम्ब • విలంబి)",
  "33. Vikārin (विकारी • వికారి)", "34. Śārvarin (शार्वरी • శార్వరి)", "35. Plava (प्लव • ప్లవ)", "36. Śubhakṛt (शुभकृत् • శుభకృతు)",
  "37. Śobhakṛt (शोभकृत् • శోభకృతు)", "38. Krodhin (क्रोधी • క్రోధి)", "39. Viśvāvasu (विश्वावसु • విశ్వావసు)", "40. Parābhava (पराभव • పరాభవ)",
  "41. Plavaṅga (प्लवङ्ग • ప్లవంగ)", "42. Kīlaka (कीलक • కీలక)", "43. Saumya (सौम्य • సౌమ్య)", "44. Sādhāraṇa (साधारण • సాధారణ)",
  "45. Virodhakṛt (विरोधकृत् • విరోధకృతు)", "46. Paridhāvin (परिधावी • పరీధావి)", "47. Pramādin (प्रमादी • ప్రమాదీచ)", "48. Ānanda (आनन्द • ఆనంద)",
  "49. Rākṣasa (राक्षस • రాక్షస)", "50. Anala / Nala (अनल/नल • నల)", "51. Piṅgala (पिङ्गल • పింగళ)", "52. Kālayukti (कालयुक्त • కాలయుక్తి)",
  "53. Siddhārthin (सिद्धार्थी • సిద్ధార్థి)", "54. Raudra (रौद्र • రౌద్రి)", "55. Durmati (दुर्मति • దుర్మతి)", "56. Dundubhi (दुन्दुभि • దుందుభి)",
  "57. Rudhirodgārin (रुधिरोद्गारी • రుధిరోద్గారి)", "58. Raktākṣa (रक्ताक्ष • రక్తాక్షి)", "59. Krodhana (क्रोधन • క్రోధన)", "60. Kṣaya (क्षय • క్షయ)"
];

// Rāhukāla intervals (8 parts of daytime, approx 6:00 AM to 6:00 PM)
const RAHU_KALA_TABLE = [
  { day: 0, text: "16:30 - 18:00 (Sun • ఆదివారం)" },
  { day: 1, text: "07:30 - 09:00 (Mon • సోమవారం)" },
  { day: 2, text: "15:00 - 16:30 (Tue • మంగళవారం)" },
  { day: 3, text: "12:00 - 13:30 (Wed • బుధవారం)" },
  { day: 4, text: "13:30 - 15:00 (Thu • గురువారం)" },
  { day: 5, text: "10:30 - 12:00 (Fri • శుక్రవారం)" },
  { day: 6, text: "09:00 - 10:30 (Sat • శనివారం)" }
];

// Ephemeris Julian Day & Ahargana constants
const KALI_EPOCH_JD = 588465.5;
const SAVANA_DAYS_MAHAYUGA = 1577917828;

function getJulianDay(year, month, day, hours = 12) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5 + (hours / 24.0);
}

function calculatePanchanga(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours() + date.getMinutes() / 60;

  const currentJD = getJulianDay(year, month, day, hours);
  const ahargana = currentJD - KALI_EPOCH_JD;

  // Mean Sun & Moon
  const sunRev = (ahargana * 4320000) / SAVANA_DAYS_MAHAYUGA;
  const sunLong = (sunRev - Math.floor(sunRev)) * 360;

  const moonRev = (ahargana * 57753336) / SAVANA_DAYS_MAHAYUGA;
  const moonMean = (moonRev - Math.floor(moonRev)) * 360;

  const apogeeRev = (ahargana * 488203) / SAVANA_DAYS_MAHAYUGA;
  const apogeeLong = (apogeeRev - Math.floor(apogeeRev)) * 360;

  // Moon Manda correction
  const anomaly = ((moonMean - apogeeLong) % 360 + 360) % 360;
  const mandaCorr = (32.0 / 360.0) * (180.0 / Math.PI) * Math.sin(anomaly * (Math.PI / 180));
  const moonTrue = ((moonMean - mandaCorr) % 360 + 360) % 360;

  // 1. Tithi: Separation = Moon - Sun
  const separation = ((moonTrue - sunLong) % 360 + 360) % 360;
  const tithiIndex = Math.floor(separation / 12);
  const tithiName = TITHI_NAMES[tithiIndex % 30];
  const tithiProgress = ((separation % 12) / 12 * 100).toFixed(1);

  // 2. Vāra
  const dayOfWeek = date.getDay();
  const varaInfo = VARA_DATA[dayOfWeek];

  // 3. Nakṣatra: Moon longitude / 13°20' (800')
  const moonMinutes = moonTrue * 60;
  const nakIndex = Math.floor(moonMinutes / 800) % 27;
  const pada = Math.floor((moonMinutes % 800) / 200) + 1;
  const nakName = NAKSHATRA_NAMES[nakIndex];

  // 4. Yoga: (Sun + Moon) / 13°20'
  const sumMinutes = (((sunLong + moonTrue) % 360) * 60);
  const yogaIndex = Math.floor(sumMinutes / 800) % 27;
  const yogaName = YOGA_NAMES[yogaIndex];

  // 5. Karaṇa: Half of Tithi = Separation / 6°
  const karanaIndex = Math.floor(separation / 6) + 1; // 1 to 60
  let karanaName = "";
  if (karanaIndex === 1) {
    karanaName = FIXED_KARANAS[1];
  } else if (karanaIndex >= 58) {
    karanaName = FIXED_KARANAS[karanaIndex] || FIXED_KARANAS[60];
  } else {
    const movIdx = (karanaIndex - 2) % 7;
    karanaName = MOVABLE_KARANAS[movIdx];
  }

  // 6. Jovian Year (Samvatsara)
  // Kali year = Ahargana / 365.258756
  // South Indian Jovian cycle begins at Caitra Śukla Pratipadā (Ugadi / Gudi Padwa - late March / early April).
  // Dates before late March fall into the previous Jovian Samvatsara cycle.
  const effYear = (month < 3 || (month === 3 && day < 22)) ? year - 1 : year;
  const samvatsaraIdx = ((effYear - 1987) % 60 + 60) % 60;
  const samvatsaraName = SAMVATSARAS[samvatsaraIdx];

  // 7. Ayana (Sun longitude)
  // Sun moving from 270 deg (Makara) to 90 deg (Karka) is Uttarayana
  let ayanaName = "";
  if (sunLong >= 270 || sunLong < 90) {
    ayanaName = "Uttarāyaṇa (उत्तरायण • ఉత్తరాయణము — Northern Solar Path)";
  } else {
    ayanaName = "Dakṣiṇāyana (दक्षिणायन • దక్షిణాయనము — Southern Solar Path)";
  }

  // 8. Ritu (6 Seasons based on Sun longitude)
  let rituName = "";
  if (sunLong >= 330 || sunLong < 30) {
    rituName = "Vasanta (वसन्त • వసంత ఋతువు — Spring)";
  } else if (sunLong >= 30 && sunLong < 90) {
    rituName = "Grīṣma (ग्रीष्म • గ్రీష్మ ఋతువు — Summer)";
  } else if (sunLong >= 90 && sunLong < 150) {
    rituName = "Varṣā (वर्षा • వర్ష ఋతువు — Monsoon)";
  } else if (sunLong >= 150 && sunLong < 210) {
    rituName = "Śarad (शरद् • శరదృతువు — Autumn)";
  } else if (sunLong >= 210 && sunLong < 270) {
    rituName = "Hemanta (हेमन्त • హేమంత ఋతువు — Early Winter)";
  } else {
    rituName = "Śiśira (शिशिर • శిశిర ఋతువు — Late Winter)";
  }

  // 9. Rāhukāla
  const rahuInfo = RAHU_KALA_TABLE[dayOfWeek].text;

  return {
    tithi: tithiName,
    tithiProgress: `${tithiProgress}% elapsed`,
    vara: varaInfo.day,
    varaLord: varaInfo.lord,
    varaEnergy: varaInfo.energy,
    nakshatra: `${nakName} (Pāda ${pada} • పాదం ${pada})`,
    yoga: yogaName,
    karana: karanaName,
    samvatsara: samvatsaraName,
    samvatsaraIdx: samvatsaraIdx,
    effYear: effYear,
    ayana: ayanaName,
    ritu: rituName,
    rahuKala: rahuInfo,
    sunLong: sunLong.toFixed(2),
    moonLong: moonTrue.toFixed(2)
  };
}

// --- Dynamic Samvatsara Catalog Renderer ---
function renderSamvatsaraCatalog(activeIdx, effectiveYear) {
  const grid = document.getElementById("samvatsaraGrid");
  const cycleText = document.getElementById("samvatsaraCycleText");
  const activeBadge = document.getElementById("activeSamvatsaraBadge");

  // South Indian Jovian Prabhava cycle started at 1987 CE
  const cycleOffset = ((effectiveYear - 1987) % 60 + 60) % 60;
  const epochStart = effectiveYear - cycleOffset;
  const epochEnd = epochStart + 60;

  if (cycleText) {
    cycleText.textContent = `${epochStart} – ${epochEnd} CE`;
  }

  const activeName = SAMVATSARAS[activeIdx];
  const activeStart = epochStart + activeIdx;
  const activeEndShort = (activeStart + 1).toString().slice(-2);
  if (activeBadge) {
    activeBadge.innerHTML = `<span>${activeName}</span> <span style="color:var(--emerald-bright); font-size:0.95rem; margin-left:0.5rem; background:rgba(52,211,153,0.15); padding:0.15rem 0.5rem; border-radius:4px; border:1px solid rgba(52,211,153,0.3);">${activeStart}–${activeEndShort} CE</span>`;
  }

  if (!grid) return;
  grid.innerHTML = "";

  const prevIdx = (activeIdx - 1 + 60) % 60;
  const nextIdx = (activeIdx + 1) % 60;

  let activeCardEl = null;

  for (let i = 0; i < 60; i++) {
    const cardYearStart = epochStart + i;
    const cardYearEnd = (cardYearStart + 1).toString().slice(-2);
    const card = document.createElement("div");
    card.className = "card";
    card.style.padding = "0.65rem 0.85rem";
    card.style.fontSize = "0.85rem";
    card.style.transition = "all 0.2s ease";

    const nameText = SAMVATSARAS[i];

    if (i === activeIdx) {
      card.style.borderColor = "var(--emerald-bright)";
      card.style.background = "rgba(52, 211, 153, 0.18)";
      card.style.fontWeight = "700";
      card.style.color = "#fff";
      card.style.boxShadow = "0 0 12px rgba(52, 211, 153, 0.25)";
      card.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
        <span>${nameText}</span>
        <span style="font-size:0.7rem; background:var(--emerald-bright); color:#051e15; font-weight:800; padding:0.15rem 0.45rem; border-radius:3px; margin-left:0.5rem; white-space:nowrap;">● ACTIVE NOW (${cardYearStart}–${cardYearEnd})</span>
      </div>`;
      activeCardEl = card;
    } else if (i === prevIdx) {
      card.style.borderColor = "var(--gold-bright)";
      card.style.background = "rgba(245, 185, 66, 0.08)";
      card.style.fontWeight = "600";
      card.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
        <span>${nameText}</span>
        <span style="font-size:0.7rem; color:var(--gold-bright); margin-left:0.5rem; white-space:nowrap;">Previous (${cardYearStart}–${cardYearEnd})</span>
      </div>`;
    } else if (i === nextIdx) {
      card.style.borderColor = "var(--cyan-accent)";
      card.style.background = "rgba(56, 189, 248, 0.08)";
      card.style.fontWeight = "600";
      card.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
        <span>${nameText}</span>
        <span style="font-size:0.7rem; color:var(--cyan-accent); margin-left:0.5rem; white-space:nowrap;">Upcoming (${cardYearStart}–${cardYearEnd})</span>
      </div>`;
    } else {
      card.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center;">
        <span>${nameText}</span>
        <span style="font-size:0.75rem; color:var(--text-muted); margin-left:0.5rem; white-space:nowrap;">${cardYearStart}–${cardYearEnd}</span>
      </div>`;
    }

    grid.appendChild(card);
  }

  // Smoothly scroll active card into view within the grid
  if (activeCardEl) {
    setTimeout(() => {
      const topPos = activeCardEl.offsetTop - grid.offsetTop - 15;
      grid.scrollTo({ top: Math.max(0, topPos), behavior: "smooth" });
    }, 60);
  }
}

// --- Render Panchanga to UI ---
function updatePanchangaUI(date) {
  const data = calculatePanchanga(date);

  // Top Limbs Bar
  const tVal = document.getElementById("limbTithiVal");
  const vVal = document.getElementById("limbVaraVal");
  const nVal = document.getElementById("limbNakVal");
  const yVal = document.getElementById("limbYogaVal");
  const kVal = document.getElementById("limbKaranaVal");

  if (tVal) tVal.textContent = data.tithi.split(" (")[0];
  if (vVal) vVal.textContent = data.vara.split(" (")[0];
  if (nVal) nVal.textContent = data.nakshatra.split(" (")[0];
  if (yVal) yVal.textContent = data.yoga.split(" (")[0];
  if (kVal) kVal.textContent = data.karana.split(" (")[0];

  // Daily Calculator Table
  const dtTithi = document.getElementById("calcTithi");
  const dtVara = document.getElementById("calcVara");
  const dtNak = document.getElementById("calcNak");
  const dtYoga = document.getElementById("calcYoga");
  const dtKarana = document.getElementById("calcKarana");
  const dtRahu = document.getElementById("calcRahu");
  const dtSun = document.getElementById("calcSunLong");
  const dtMoon = document.getElementById("calcMoonLong");
  const dtSamvat = document.getElementById("calcSamvatsara");
  const dtAyana = document.getElementById("calcAyana");
  const dtRitu = document.getElementById("calcRitu");

  if (dtTithi) dtTithi.innerHTML = `<strong>${data.tithi}</strong> <span style="font-size:0.78rem; color:var(--text-muted);">(${data.tithiProgress})</span>`;
  if (dtVara) dtVara.innerHTML = `<strong>${data.vara}</strong> <span style="font-size:0.78rem; color:var(--gold-bright);">(Lord: ${data.varaLord})</span>`;
  if (dtNak) dtNak.innerHTML = `<strong>${data.nakshatra}</strong>`;
  if (dtYoga) dtYoga.innerHTML = `<strong>${data.yoga}</strong>`;
  if (dtKarana) dtKarana.innerHTML = `<strong>${data.karana}</strong>`;
  if (dtRahu) dtRahu.innerHTML = `<span style="color:var(--rose-accent); font-weight:700;">${data.rahuKala}</span>`;
  if (dtSun) dtSun.textContent = `${data.sunLong}°`;
  if (dtMoon) dtMoon.textContent = `${data.moonLong}°`;
  if (dtSamvat) dtSamvat.innerHTML = `<strong>${data.samvatsara}</strong>`;
  if (dtAyana) dtAyana.innerHTML = `<strong>${data.ayana}</strong>`;
  if (dtRitu) dtRitu.innerHTML = `<strong>${data.ritu}</strong>`;

  // Render Dynamic Samvatsara 60-year Catalog
  renderSamvatsaraCatalog(data.samvatsaraIdx, data.effYear);
}

// ==========================================
// 7. KĀLA-MĀNA CONVERTER (SACRED TIME UNITS)
// ==========================================
// 1 Ahorātra = 24 hours = 86,400 seconds
// 1 Muhūrta = 48 minutes = 2,880 seconds (30 per day)
// 1 Ghaṭikā = 24 minutes = 1,440 seconds (60 per day)
// 1 Pala / Vighaṭikā = 24 seconds (60 per Ghaṭikā)
// 1 Kalā = 96 seconds (1.6 minutes)
// 1 Kāṣṭhā = 3.2 seconds
// 1 Nimeṣa = 16/75 seconds ≈ 0.2133 seconds
// 1 Tatpara = 30 Truṭis ≈ 0.0008888 seconds
// 1 Truṭi = 8/13500 seconds ≈ 0.000029629 seconds (29.629 microseconds)
function runKalaManaConverter() {
  const valIn = document.getElementById("kmInputVal");
  const unitIn = document.getElementById("kmInputUnit");
  const container = document.getElementById("kmResultsGrid");
  if (!valIn || !unitIn || !container) return;

  const num = parseFloat(valIn.value);
  const unit = unitIn.value;

  if (isNaN(num) || num < 0) {
    container.innerHTML = "<div style='color:var(--rose-accent);'>Enter a valid positive number.</div>";
    return;
  }

  // Convert input to total seconds
  let totalSeconds = 0;
  if (unit === "sec") totalSeconds = num;
  else if (unit === "min") totalSeconds = num * 60;
  else if (unit === "hr") totalSeconds = num * 3600;
  else if (unit === "day") totalSeconds = num * 86400;

  const ahoratras = totalSeconds / 86400;
  const muhurtas = totalSeconds / 2880;
  const ghatikas = totalSeconds / 1440;
  const palas = totalSeconds / 24;
  const kalas = totalSeconds / 96;
  const kashtas = totalSeconds / 3.2;
  const nimeshas = totalSeconds / (16 / 75);
  const trutis = totalSeconds / (8 / 13500);

  container.innerHTML = `
    <div class="card" style="padding:1rem; border-color:var(--gold-bright);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Ghaṭikā (घटिका • ఘటిక / 24 min)</div>
      <div style="font-size:1.6rem; font-family:var(--font-mono); font-weight:700; color:var(--gold-bright);">${ghatikas.toFixed(3)}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">60 Ghaṭikās = 1 Ahorātra</div>
    </div>
    <div class="card" style="padding:1rem; border-color:var(--cyan-accent);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Muhūrta (मुहूर्त • ముహూర్తం / 48 min)</div>
      <div style="font-size:1.6rem; font-family:var(--font-mono); font-weight:700; color:var(--cyan-accent);">${muhurtas.toFixed(3)}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">30 Muhūrtas = 1 Ahorātra</div>
    </div>
    <div class="card" style="padding:1rem; border-color:var(--emerald-bright);">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Pala / Vighaṭikā (पल • పలము / 24 sec)</div>
      <div style="font-size:1.6rem; font-family:var(--font-mono); font-weight:700; color:var(--emerald-bright);">${palas.toFixed(2)}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">60 Palas = 1 Ghaṭikā</div>
    </div>
    <div class="card" style="padding:1rem; border-color:#a855f7;">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Kalā (कला • కల / 96 sec)</div>
      <div style="font-size:1.6rem; font-family:var(--font-mono); font-weight:700; color:#c084fc;">${kalas.toFixed(2)}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">30 Kāṣṭhās = 1 Kalā</div>
    </div>
    <div class="card" style="padding:1rem; border-color:#f59e0b;">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Kāṣṭhā (काष्ठा • కాష్ఠ / 3.2 sec)</div>
      <div style="font-size:1.6rem; font-family:var(--font-mono); font-weight:700; color:#fbbf24;">${kashtas.toFixed(2)}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">15 Nimeṣas = 1 Kāṣṭhā</div>
    </div>
    <div class="card" style="padding:1rem; border-color:#ec4899;">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Nimeṣa (निमेष • నిమేషము / 0.213 sec)</div>
      <div style="font-size:1.6rem; font-family:var(--font-mono); font-weight:700; color:#f472b6;">${nimeshas.toFixed(1)}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">1 Eye Blink</div>
    </div>
    <div class="card" style="padding:1rem; border-color:#6366f1;">
      <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Truṭi (त्रुटि • త్రుటి / 29.6 μs)</div>
      <div style="font-size:1.4rem; font-family:var(--font-mono); font-weight:700; color:#818cf8;">${Math.round(trutis).toLocaleString()}</div>
      <div style="font-size:0.8rem; color:#cbd5e1;">Atomic Lotus-piercing unit</div>
    </div>
  `;
}

// --- Safe ScrollSpy ---
function initPanchangaScrollSpy() {
  const navContainer = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");
  const sections = Array.from(document.querySelectorAll("section[id]"));

  if (!navItems.length || !sections.length) return;

  function setActive(id) {
    navItems.forEach(item => {
      const href = item.getAttribute("href");
      if (href === `#${id}`) {
        item.classList.add("active");
        if (navContainer) {
          const itemLeft = item.offsetLeft;
          const itemWidth = item.offsetWidth;
          const containerWidth = navContainer.clientWidth;
          navContainer.scrollTo({
            left: itemLeft - (containerWidth / 2) + (itemWidth / 2),
            behavior: "smooth"
          });
        }
      } else {
        item.classList.remove("active");
      }
    });
  }

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= docHeight - 50) {
      setActive(sections[sections.length - 1].id);
      return;
    }

    const headerOffset = 90;
    let currentId = sections[0].id;

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      if (scrollY >= sec.offsetTop - headerOffset) {
        currentId = sec.id;
      } else {
        break;
      }
    }

    setActive(currentId);
  }

  navItems.forEach(item => {
    item.addEventListener("click", e => {
      const href = item.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          navItems.forEach(n => n.classList.remove("active"));
          item.classList.add("active");
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - 65;
          window.scrollTo({ top: targetTop, behavior: "smooth" });
        }
      }
    });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

// --- DOM Initializer ---
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("panchDateInput");
  const todayBtn = document.getElementById("panchTodayBtn");

  const today = new Date();
  if (dateInput) {
    dateInput.value = today.toISOString().split("T")[0];
    dateInput.addEventListener("change", () => {
      const selected = new Date(dateInput.value + "T12:00:00");
      updatePanchangaUI(selected);
    });
  }

  if (todayBtn && dateInput) {
    todayBtn.addEventListener("click", () => {
      const n = new Date();
      dateInput.value = n.toISOString().split("T")[0];
      updatePanchangaUI(n);
    });
  }

  // Kala-Mana converter listeners
  const kmVal = document.getElementById("kmInputVal");
  const kmUnit = document.getElementById("kmInputUnit");
  if (kmVal && kmUnit) {
    kmVal.addEventListener("input", runKalaManaConverter);
    kmUnit.addEventListener("change", runKalaManaConverter);
    runKalaManaConverter();
  }

  updatePanchangaUI(today);
  initPanchangaScrollSpy();
});
