"use strict";

// Vent til hele HTML-dokumentet er indlæst,
// så vi er sikre på at #valg (select) findes
document.addEventListener("DOMContentLoaded", () => {
  // Finder select-elementet (dropdown-menuen)
  const select = document.querySelector("#valg");

  // Funktion der skifter tema
  function changeTheme() {
    // Henter den valgte værdi fra select
    const valgtTheme = select.value;

    // Opdaterer body's data-theme-attribut så CSS automatisk skifter farver
    document.body.dataset.theme = valgtTheme;
  }

  // Når brugeren vælger et nyt tema i select, kaldes skiftTheme-funktionen
  select.addEventListener("change", changeTheme);

  // Sætter start-tema når siden loader
  select.value = "light";
  changeTheme();
});
