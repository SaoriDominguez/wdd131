"use strict";

// ---------- Footer ----------
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastMod = document.getElementById("lastModified");
if (lastMod) {
  lastMod.textContent = `Last Modification: ${document.lastModified}`;
}

// ---------- Weather & Wind Chill ----------

const tempC = 10; // temperatura en °C
const windKmh = 15; // velocidad del viento en km/h

const tempSpan = document.getElementById("temp");
const windSpan = document.getElementById("windSpeed");
const chillSpan = document.getElementById("windChill");

if (tempSpan) tempSpan.textContent = tempC.toString();
if (windSpan) windSpan.textContent = windKmh.toString();

// Función de sensación térmica 
function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  );
}


if (tempC <= 10 && windKmh > 4.8) {
  const chill = calculateWindChill(tempC, windKmh);
  if (chillSpan) {
    chillSpan.textContent = `${chill.toFixed(1)} °C`;
  }
} else {
  if (chillSpan) {
    chillSpan.textContent = "N/A";
  }
}
