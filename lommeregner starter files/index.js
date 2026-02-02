// query selector til displayet
const display = document.querySelector(".display");
// fanger alle kanapperne der kan trykkes på og sætter en klik event på dem(dem der ikke er disabled i HTML)
document.querySelectorAll(".key").forEach((elm) => {
  elm.addEventListener("click", klik);
});
let displayContent = "";
let typeOfInput = "";

let firstNumVal = "";
let secondNumVal = "";
let regneArt = "";

let readyForNewNumber = false;

function klik(evt) {
  // Hent værdien af knappen, fx "1", "+", "=" eller "ac"
  const btnClicked = evt.target.dataset.func;

  // Find ud af hvilken type input det er: num, regneart, ligmed, CLEAR
  typeOfInput = whatTypeOfInput(btnClicked);
  console.log("typeOfInput:", typeOfInput);

  if (typeOfInput === "num") {
    if (readyForNewNumber) {
      // Start ny indtastning efter =, ryd display
      firstNumVal = "";
      displayContent = "";
      readyForNewNumber = false;
    }

    // Hvis vi ikke har valgt en regneart endnu, tilføj tal til firstNumVal
    if (!regneArt) {
      firstNumVal += btnClicked;
      updateScreen(btnClicked);
    } else {
      // Ellers tilføj tal til secondNumVal
      secondNumVal += btnClicked;
      updateScreen(btnClicked);
    }
  } else if (typeOfInput === "regneart") {
    // Gem regneart, kun hvis vi allerede har et første tal
    if (firstNumVal) {
      regneArt = btnClicked;
      updateScreen(btnClicked);
    }
  } else if (typeOfInput === "ligmed") {
    // Når = trykkes, udfør beregningen
    if (firstNumVal && secondNumVal && regneArt) {
      calculate();
    }
  } else if (typeOfInput === "CLEAR") {
    // Nulstil alt
    resetScreen();
  }
}

function whatTypeOfInput(btnClicked) {
  if (
    btnClicked === "0" ||
    btnClicked === "1" ||
    btnClicked === "2" ||
    btnClicked === "3" ||
    btnClicked === "4" ||
    btnClicked === "5" ||
    btnClicked === "6" ||
    btnClicked === "7" ||
    btnClicked === "8" ||
    btnClicked === "9"
  ) {
    return "num";
  } else if (
    btnClicked === "+" ||
    btnClicked === "/" ||
    btnClicked === "*" ||
    btnClicked === "-"
  ) {
    return "regneart";
  } else if (btnClicked === "=") {
    return "ligmed";
  } else if (btnClicked === "ac") {
    return "CLEAR";
  }
}
//// TILFØJET AF MIG /////
function calculate() {
  const a = Number(firstNumVal);
  const b = Number(secondNumVal);
  let result;

  if (regneArt === "+") result = a + b;
  else if (regneArt === "-") result = a - b;
  else if (regneArt === "*") result = a * b;
  else if (regneArt === "/") result = a / b;

  // Vis resultat på display
  displayContent = ""; // nulstil før visning
  display.value = result.toString();

  // Gem resultat som næste firstNum
  firstNumVal = result.toString();
  secondNumVal = "";
  regneArt = "";
  readyForNewNumber = true; // til næste tal
}

function updateScreen(chars) {
  displayContent += chars;
  display.value = displayContent;
}
function resetScreen() {
  displayContent = "";
  display.value = "0";
}
