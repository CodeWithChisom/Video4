import "./style.css";

// dom queries
const screen = document.getElementById("screen");
const gridButtons = document.querySelectorAll("#grid button");
const symbols = [3, 10, 13, 14];
gridButtons.forEach((btn, index) => {
  if (index > 14) return;
  let text = btn.textContent.trim();
  text = text === "x" ? "*" : text === String.fromCharCode(247) ? "/" : text;
  if (symbols.includes(index)) {
    btn.addEventListener("click", () => insertSym(text));
  } else {
    btn.addEventListener("click", () => insertNum(text));
  }
});
const deleteBtn = document.getElementById("del");
deleteBtn.addEventListener("click", del);
const clsBtn = document.getElementById("cls");
clsBtn.addEventListener("click", cls);
const moreBtn = document.getElementById("more");
moreBtn.addEventListener("click", more);
const equals = document.querySelectorAll(".equals");
equals.forEach((eq) => {
  eq.addEventListener("click", calc);
});
const sqrtBtn = document.getElementById("sqrt");
sqrtBtn.addEventListener("click", sqrt);
const sqrBtn = document.getElementById("sqr");
sqrBtn.addEventListener("click", () => insertNum("**2"));
const cubeBtn = document.getElementById("cube");
cubeBtn.addEventListener("click", () => insertNum("**3"));
const expBtn = document.getElementById("exp");
expBtn.addEventListener("click", () => insertNum("**"));
const logBtn = document.getElementById("log");
logBtn.addEventListener("click", log);
const backBtn = document.getElementById("back");
backBtn.addEventListener("click", back);
const infoBtn = document.getElementById("info");
infoBtn.addEventListener("click", info);

// taking input - numbers
function insertNum(num) {
  screen.value += num;
}

// taking input symbols
function insertSym(sym) {
  screen.value += sym;
}

// handling calculations and return output
function calc() {
  const result = eval(screen.value);
  screen.value = result;
  if (screen.value == "Infinity" || screen.value == "NaN") {
    screen.value = "Math Error";
  }
  if (screen.value == "undefined") {
    screen.value = "";
  }
}

function del() {
  let del = screen.value;
  let del2 = del.substring(0, del.length - 1);
  screen.value = del2;
}

function cls() {
  screen.value = "";
}

function more() {
  var grid = document.getElementById("grid");
  var grid2 = document.getElementById("grid2");
  grid.style.display = "none";
  grid2.style.display = "grid";
}

function back() {
  var grid = document.getElementById("grid");
  var grid2 = document.getElementById("grid2");
  grid.style.display = "grid";
  grid2.style.display = "none";
}

function sqrt() {
  let sqrt = eval(Math.sqrt(screen.value));
  screen.value = sqrt;
  if (screen.value == "NaN") {
    screen.value = "Math Error";
  }
}

function log() {
  let log = eval(Math.log10(screen.value));
  screen.value = log;
  if (screen.value == "-Infinity") {
    screen.value = "Math Error";
  }
  if (screen.value == "NaN") {
    screen.value = "Math Error";
  }
}

function info() {
  alert(
    "How To Use \nClick the square root button after typing the number \nThe same goes for the logarithm(base 10) button \nI believe the remaining buttons can be understood from the get-go \nMade by The Ace 😎"
  );
}
