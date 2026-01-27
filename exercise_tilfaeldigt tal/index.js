let tal;

// tal = ("Random",Math.floor(Math.random()*101))

// document.querySelector("#tal").textContent = "Tallet er " + tal;

let hemmeligtTal = 62;
let gæt = Number(document.querySelector("#input").value);
let besked = document.querySelector("#besked");

function tjekTal() {
  if (gæt < hemmeligtTal) {
    besked.textContent = "For lavt!";
  } else if (gæt > hemmeligtTal) {
    besked.textContent = "For højt!";
  } else {
    besked.textContent = "Du gættede tallet! 🎉";
    levelComplete();
  }
}

function levelComplete() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });
}
