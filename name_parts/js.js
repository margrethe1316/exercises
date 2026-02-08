"use strict";

// En konstant streng med hele navnet.
const navn = "Margrethe Holm Lund Sørensen";

// Finder positionen (indekset) for det FØRSTE mellemrum i strengen.
// Dette markerer slutningen på fornavnet.
const firstSpace = navn.indexOf(" ");

// Finder positionen (indekset) for det SIDSTE mellemrum i strengen.
// Dette markerer starten på efternavnet.
const lastSpace = navn.lastIndexOf(" ");

// Udtrækker fornavnet fra starten af strengen (indeks 0)
// og frem til det første mellemrum.
const forNavn = navn.substring(0, firstSpace);

// Udtrækker mellemnavnet.
// Starter lige efter det første mellemrum
// og slutter ved det sidste mellemrum.
// Dette virker også, hvis der er flere mellemnavne.
const mellemNavn = navn.substring(firstSpace + 1, lastSpace);

// Udtrækker efternavnet.
// Starter lige efter det sidste mellemrum
// og fortsætter til slutningen af strengen.
const efterNavn = navn.substring(lastSpace + 1);

// Udskriver de tre dele i konsollen,
console.log(forNavn);
console.log(mellemNavn);
console.log(efterNavn);
