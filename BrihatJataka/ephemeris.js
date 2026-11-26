/**
 * Bṛhat Jātaka — Sidereal Ephemeris Engine (Lahiri / Chitrapakṣa Ayanāṁśa)
 * Computes Julian Day, Lagna (Ascendant), Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn
 * using Meeus solar/lunar series + J2000 Keplerian planetary elements.
 */

(function (global) {
  "use strict";

  const RAD = Math.PI / 180;
  const DEG = 180 / Math.PI;

  const norm360 = (d) => ((d % 360) + 360) % 360;

  // J2000 Keplerian orbital elements: [a, e, i, L0, wbar, node, n_deg_per_day]
  // Using standard Meeus/JPL J2000 mean elements + rates per Julian century (T)
  const ELEMENTS = {
    earth: {
      a: 1.000001018,
      e: [0.01670863, -0.000042037],
      i: [0, 0],
      L: [100.466457, 35999.3728565],
      wbar: [102.937348, 0.3225557],
      node: [0, 0]
    },
    mercury: {
      a: 0.38709831,
      e: [0.20563175, 0.000020407],
      i: [7.004986, -0.0059516],
      L: [252.250906, 149472.6746358],
      wbar: [77.456119, 0.1588643],
      node: [48.330893, -0.1254229]
    },
    venus: {
      a: 0.72332982,
      e: [0.00677188, -0.000047766],
      i: [3.394662, -0.0008568],
      L: [181.979801, 58517.8156760],
      wbar: [131.563707, 0.0048646],
      node: [76.679920, -0.2780080]
    },
    mars: {
      a: 1.52367934,
      e: [0.09340062, 0.000090484],
      i: [1.849726, -0.0081479],
      L: [355.433275, 19140.2993424],
      wbar: [336.060234, 0.4438898],
      node: [49.558093, -0.2949846]
    },
    jupiter: {
      a: 5.20260320,
      e: [0.04849485, 0.000163244],
      i: [1.303270, -0.0019872],
      L: [34.351484, 3034.9056746],
      wbar: [14.331309, 0.2155525],
      node: [100.464441, 0.1766828]
    },
    saturn: {
      a: 9.55490919,
      e: [0.05550862, -0.000346818],
      i: [2.488878, 0.0025515],
      L: [50.077471, 1222.1137943],
      wbar: [93.056787, 0.5665496],
      node: [113.665524, -0.2566649]
    }
  };

  function helioCoords(planet, T) {
    const el = ELEMENTS[planet];
    const e = el.e[0] + el.e[1] * T;
    const i = (el.i[0] + el.i[1] * T) * RAD;
    const L = norm360(el.L[0] + el.L[1] * T);
    const wbar = norm360(el.wbar[0] + el.wbar[1] * T);
    const node = norm360(el.node[0] + el.node[1] * T);
    const M = norm360(L - wbar) * RAD;

    // Solve Kepler's equation E - e sin(E) = M
    let E = M + e * Math.sin(M);
    for (let k = 0; k < 6; k++) {
      E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    }

    const xv = el.a * (Math.cos(E) - e);
    const yv = el.a * Math.sqrt(1 - e * e) * Math.sin(E);
    const v = Math.atan2(yv, xv);
    const r = Math.hypot(xv, yv);

    const w = (wbar - node) * RAD;
    const O = node * RAD;
    const u = v + w;

    const x = r * (Math.cos(O) * Math.cos(u) - Math.sin(O) * Math.sin(u) * Math.cos(i));
    const y = r * (Math.sin(O) * Math.cos(u) + Math.cos(O) * Math.sin(u) * Math.cos(i));
    const z = r * (Math.sin(u) * Math.sin(i));
    return { x, y, z };
  }

  function toJulianDay(year, month, day, hourLocal, tzOffsetHours) {
    const utHour = hourLocal - tzOffsetHours;
    let y = year, m = month;
    if (m <= 2) { y -= 1; m += 12; }
    const A = Math.floor(y / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + utHour / 24 + B - 1524.5;
  }

  function computeChart({ year, month, day, hour, minute, tzOffset, lat, lon }) {
    const hourLocal = hour + minute / 60;
    const jd = toJulianDay(year, month, day, hourLocal, tzOffset);
    const T = (jd - 2451545.0) / 36525.0;

    // Chitrapakṣa (Lahiri) Ayanāṁśa (consistent with SuryaSiddhanta/surya_siddhanta.js)
    const ayanamsa = 23.853083 + ((jd - 2451545.0) / 365.25) * (50.29 / 3600.0);

    // 1. Sun (Meeus)
    const Msun = norm360(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T) * RAD;
    const L0sun = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
    const Csun = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(Msun)
               + (0.019993 - 0.000101 * T) * Math.sin(2 * Msun)
               + 0.000289 * Math.sin(3 * Msun);
    const sunTrop = norm360(L0sun + Csun);

    // 2. Moon (Meeus/ELP2000 — identical to SuryaSiddhanta)
    const Lp = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + (T * T * T) / 538841.0;
    const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T;
    const M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
    const Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T;
    const F = 93.2720950 + 483202.0175233 * T - 0.0036539 * T * T;
    const moonTrop = norm360(
      Lp +
      6.288774 * Math.sin(Mp * RAD) +
      1.274027 * Math.sin((2 * D - Mp) * RAD) +
      0.658314 * Math.sin(2 * D * RAD) +
      0.213618 * Math.sin(2 * Mp * RAD) -
      0.185116 * Math.sin(M * RAD) -
      0.114332 * Math.sin(2 * F * RAD) +
      0.058793 * Math.sin((2 * D - 2 * Mp) * RAD) +
      0.057066 * Math.sin((2 * D - M - Mp) * RAD) +
      0.053322 * Math.sin((2 * D + Mp) * RAD) +
      0.045758 * Math.sin((2 * D - M) * RAD) -
      0.040923 * Math.sin((M - Mp) * RAD) -
      0.034720 * Math.sin(D * RAD) -
      0.030383 * Math.sin((M + Mp) * RAD)
    );

    // 3. Geocentric Mars, Mercury, Jupiter, Venus, Saturn
    const earth = helioCoords("earth", T);
    const geoLon = (p) => {
      const h = helioCoords(p, T);
      return norm360(Math.atan2(h.y - earth.y, h.x - earth.x) * DEG);
    };

    // 4. Ascendant (Lagna)
    const gmst = norm360(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T);
    const lst = norm360(gmst + lon) * RAD;
    const eps = (23.439291 - 0.0130042 * T) * RAD;
    const latR = lat * RAD;
    const ascTrop = norm360(
      Math.atan2(
        Math.cos(lst),
        -(Math.sin(lst) * Math.cos(eps) + Math.tan(latR) * Math.sin(eps))
      ) * DEG
    );

    return {
      jd,
      ayanamsa,
      lagna: norm360(ascTrop - ayanamsa),
      sun: norm360(sunTrop - ayanamsa),
      moon: norm360(moonTrop - ayanamsa),
      mars: norm360(geoLon("mars") - ayanamsa),
      mercury: norm360(geoLon("mercury") - ayanamsa),
      jupiter: norm360(geoLon("jupiter") - ayanamsa),
      venus: norm360(geoLon("venus") - ayanamsa),
      saturn: norm360(geoLon("saturn") - ayanamsa)
    };
  }

  global.BJ_EPHEMERIS = { computeChart };
})(window);
