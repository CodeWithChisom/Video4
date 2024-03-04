import "./style.css";

// dom queries and event listeners
const screen = document.getElementById("screen");
const digits = document.querySelectorAll(".digit");
const symbols = document.querySelectorAll(".symbol");
const clsBtn = document.getElementById("cls");
const eq = document.getElementById("eq");

digits.forEach((digit) => {
  digit.addEventListener("click", insertNum);
});
symbols.forEach((symbol) => {
  symbol.addEventListener("click", selectSym);
});
clsBtn.addEventListener("click", cls);
eq.addEventListener("click", calc);

// store values to be calculated
const store = [];

// taking input
function insertNum(e) {
  screen.value += e.target.textContent.trim();
}

function selectSym(e) {
  if (!isNaN(Number(screen.value)) && screen.value !== "") {
    store.push(Number(screen.value));
  }
  screen.value = "";
  symbols.forEach((sym) => {
    sym.classList.remove("current");
  });
  e.target.classList.add("current");
}

// handling calculations
function calc() {
  const currentSymbol = document.querySelector(".current");
  let result;
  switch (currentSymbol.textContent.trim()) {
    case "+":
      result = store[0] + Number(screen.value);
      break;
    case "-":
      result = store[0] - Number(screen.value);
      break;
    case "x":
      result = store[0] * Number(screen.value);
      break;
    case String.fromCharCode(247):
      result = store[0] / Number(screen.value);
      break;
  }
  screen.value = result;
  // reset
  store.length = 0;
  symbols.forEach((sym) => {
    sym.classList.remove("current");
  });
}

function cls() {
  screen.value = "";
  // reset
  symbols.forEach((sym) => {
    sym.classList.remove("current");
  });
}
