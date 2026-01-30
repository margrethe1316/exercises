const guessText = document.getElementById("guess");

const startBtn = document.getElementById("startBtn");
const startTekst = document.getElementById("startTekst");
const lowBtn = document.getElementById("lowBtn");
const highBtn = document.getElementById("highBtn");
const korrektBtn = document.getElementById("korrektBtn");

let min = 0;
let max = 100;
let guess = 0;
let antalguess = 0;

lowBtn.disabled = true;
highBtn.disabled = true;
korrektBtn.disabled = true;

startBtn.addEventListener("click", startSpil);

function startSpil() {
  startTekst.classList.add("hidden");

  min = 0;
  max = 100;
  antalguess = 0;

  lowBtn.disabled = false;
  highBtn.disabled = false;
  korrektBtn.disabled = false;

  makeGuess();
}

function makeGuess() {
  guess = Math.floor((min + max) / 2);
  antalguess++;
  guessText.textContent = "Jeg gætter: " + guess;
}

lowBtn.addEventListener("click", () => {
  min = guess + 1;
  makeGuess();
});

highBtn.addEventListener("click", () => {
  max = guess - 1;
  makeGuess();
});

korrektBtn.addEventListener("click", () => {
  guessText.textContent = `Jeg gættede dit tal på ${antalguess} forsøg!`;
  lowBtn.disabled = true;
  highBtn.disabled = true;
  korrektBtn.disabled = true;
});
