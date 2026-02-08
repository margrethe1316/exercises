"use strict";

// Eksempel på navnestreng med vilkårlig kombination af store og små bogstaver
const navn = "pETer";

// -----------------------------
// Udtræk de forskellige dele af navnet
// -----------------------------

// Første 2 bogstaver (0. og 1. indeks)
const del1 = navn.substring(0, 2);

// Tredje bogstav (2. indeks)
const del2 = navn.substring(2, 3);

// Resten af navnet (fra indeks 3 til slut)
const del3 = navn.substring(3);

// -----------------------------
// Sæt korrekt store/små bogstaver
// -----------------------------

// Første del: små bogstaver
const del1Små = del1.toLowerCase();

// Tredje bogstav: stort
const del2Stor = del2.toUpperCase();

// Resten: små bogstaver
const del3Små = del3.toLowerCase();

// -----------------------------
// Sæt delene sammen til ny streng
// -----------------------------
const nytNavn = del1Små + del2Stor + del3Små;

// -----------------------------
// Udskriv resultatet
// -----------------------------
console.log(nytNavn); // Eksempel output: "peTer"
