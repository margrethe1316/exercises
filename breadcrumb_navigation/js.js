const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Finder containeren og knappen //

const breadcrumbContainer = document.getElementById("breadcrumb");
const button = document.getElementById("generate");

// Funktion der genererer breadcrumb //

// Eventlistener på knappen //
button.addEventListener("click", generateBreadcrumb);

function generateBreadcrumb() {
  breadcrumbContainer.innerHTML = ""; // sørger for listen er tom, så man kan gøre det igen og igen

  bc.forEach((item, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    // Det sidste punkt skal være tekst //
    if (index === bc.length - 1) {
      li.textContent = item.name;
    } else {
      a.href = item.link;
      a.textContent = item.name;
      li.appendChild(a);
    }

    breadcrumbContainer.appendChild(li);
  });
}
