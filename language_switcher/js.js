"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#valg");

  function skiftSprog() {
    const locale = select.value;

    texts[locale].texts.forEach((elm) => {
      document.querySelector(elm.location).textContent = elm.text;
    });
  }

  select.addEventListener("change", skiftSprog);

  // standardsprog
  select.value = "da";
  skiftSprog();
});
