"use strict";

// Eksempel på navnestreng med vilkårlig kombination af store og små bogstaver
const navn = "pETer";

// -----------------------------
// Udtræk de forskellige dele af navnet
// -----------------------------

// Første 2 bogstaver (0. og 1. indeks)
const del1 = navn.substring(0, 2);

// Tredje bogstav (2. indeks)
const del2 = navn.substring(2);

// -----------------------------
// Sæt korrekt store/små bogstaver
// -----------------------------

// Første del: små bogstaver
const del1Små = del1.toUpperCase();

// Resten: små bogstaver
const del3Små = del2.toLowerCase();

// -----------------------------
// Sæt delene sammen til ny streng
// -----------------------------
const nytNavn = del1Små + del3Små;

// -----------------------------
// Udskriv resultatet
// -----------------------------
console.log(nytNavn);
