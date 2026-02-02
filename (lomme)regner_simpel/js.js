const beregn = document.getElementById("regnud");

beregn.addEventListener("click", start);

function start() {
  let tal1 = Number(document.getElementById("tal1").value);
  let tal2 = Number(document.getElementById("tal2").value);
  //   console.log(tal1);
  //   console.log(tal2);

  let op = document.getElementById("operator").value;

  if (op === "+") result = tal1 + tal2;
  else if (op == "-") result = tal1 - tal2;
  else if (op == "*") result = tal1 * tal2;
  else if (op == "/") result = tal1 / tal2;

  document.getElementById("resultat").textContent = "Resultat: " + result;
}
