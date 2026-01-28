"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resultat = document.querySelector("texts");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}

function rockClick() {
  //   console.log("ROCK!");
  skjulResultat();
  userChoice = "rock";
  computerChooses();
}

function paperClick() {
  //   console.log("PAPER!");
  skjulResultat();
  userChoice = "paper";
  computerChooses();
}

function scissorsClick() {
  //   console.log("SCISSORS!");
  skjulResultat();
  userChoice = "scissors";
  computerChooses();
}

function computerChooses() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer chooses", computerChoice);

  handShakeStart();
}

function handShakeStart() {
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", handShakeEnd, { once: true });
  player2.addEventListener("animationend", handShakeEnd, { once: true });
}
function handShakeEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  handsShows();
}

function handsShows() {
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
  console.log("Hændernes vises");
  visResultat();
}

function visResultat() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  if (userChoice === computerChoice) {
    draw.classList.remove("hidden");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    win.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }
}

function skjulResultat() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
}
