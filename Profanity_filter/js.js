const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const button = document.querySelector("#cta_btn");
const paragraph = document.querySelector("#text");
const dialog = document.querySelector("#infoDialog");
const closeDialog = document.querySelector("#closeDialog");

function changeCursewords(text) {
  let dårligeOrd = false;

  curseWords.forEach((curseWord) => {
    if (text.includes(curseWord.bad)) {
      dårligeOrd = true;
      text = text.replaceAll(
        curseWord.bad,
        `<span class="highlight">${curseWord.good}</span>`,
      );
    }
  });

  if (!dårligeOrd) {
    dialog.showModal();
  }

  return text;
}

button.addEventListener("click", () => {
  paragraph.innerHTML = changeCursewords(paragraph.innerHTML);
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});
