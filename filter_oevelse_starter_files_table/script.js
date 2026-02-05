const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = ""; // ryd tabellen først så filterets elementer ikke bliver lagt i forlængelse af de andre

  arr.forEach((each) => {
    // Håndter undefined eller tomme felter
    const type = each.type || "-";
    const fuel = each.fuel || "-";
    const passengers = each.passengers !== undefined ? each.passengers : "-";
    const stops = each.stops ? each.stops.join(", ") : "-";
    const ownedBy = each.ownedBy || "-";
    const isElectric =
      each.isElectric === true ? "Ja" : each.isElectric === false ? "Nej" : "-";
    const isTandem =
      each.isTandem === true ? "Ja" : each.isTandem === false ? "Nej" : "-";

    tbodyPointer.innerHTML += `<tr>
      <td>${type}</td>
      <td>${fuel}</td>
      <td>${passengers}</td> 
      <td>${stops}</td>
      <td>${ownedBy}</td>
      <td>${isElectric}</td>
      <td>${isTandem}</td>
    </tr>`;
  });
}

//// FILTER /////

const electricVehicles = vehicles.filter(isElectric);

function isElectric(vehicle) {
  if (vehicle.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

function moreThanTwoSeats(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  } else {
    return false;
  }
}

function electricOwnedByJonas(vehicle) {
  if (vehicle.isElectric === true && vehicle.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

function rugbrodMoreThanOne(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  } else {
    return false;
  }
}

// BUTTON EVENT LISTENERS
document.querySelector("#showAll").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

document.querySelector("#electricBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(isElectric));
});

document.querySelector("#moreThan2Btn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(moreThanTwoSeats));
});

document.querySelector("#electricJonasBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(electricOwnedByJonas));
});

document.querySelector("#rugbrodBtn").addEventListener("click", () => {
  showTheseVehicles(vehicles.filter(rugbrodMoreThanOne));
});

// Man kan også burge target til at lave knapper //

function klik(evt) {
  evt.target;
  console.log("electricVeh", electricVeh);
  if (evt.target.da) console.log("klik", evt.target.dataset.filter);

  showTheseVehicles(vehicles.filter(isElectric));
}
