let min = 0;
let max = 100;
let data = [];

const list = document.querySelector("ul");

function antalKunder() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function lavSoejle(height) {
  const li = document.createElement("li");
  li.style.setProperty("--height", height);
  list.appendChild(li);
}

function update() {
  const kunder = antalKunder();

  // Gem i array
  data.push(kunder);

  if (data.length > 20) {
    data.shift();
  }

  // Lav søjle i DOM
  lavSoejle(kunder);

  // Fjern ældste søjle i DOM
  if (list.children.length > 20) {
    list.removeChild(list.firstElementChild);
  }
}

setInterval(update, 1000);

// Givet på forhånd //

// const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);
