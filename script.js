
//Get access to <body> of HTML.
const body = document.body;
var gridSize = 50;
var root = document.querySelector(":root");


//Add etch-a-sketch container for all squares, set id attribute.
const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("id", "container");
sketchContainer.className = "grid";
body.appendChild(sketchContainer);

function buildGrid(x) {
sketchContainer.replaceChildren();
var sketchSquare;

//This loop builds our grid.
  for (var i=0; i < x; i++) {
    sketchSquare = document.createElement("div");
    sketchSquare.className = "gridSquare";
    sketchContainer.appendChild(sketchSquare);
  }
}

buildGrid(gridSize);

//Hover effect to crate trailing hover tail.
function hoverTrail() {
var div = document.querySelectorAll("div.gridSquare");

div.forEach(div => div.addEventListener("mouseover", () => {
div.className = "trailColor";
}));
}

hoverTrail();

//Hover effect that changes the color of each div when a use hovers over the div.
function hoverChange() {
var div = document.querySelectorAll("div.gridSquare");

div.forEach(div => div.addEventListener("mouseover", () => {
div.className = "changeColor";
}));
}

//Reset button to clear the colors in the gridSquares.
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  let clearDiv = document.querySelectorAll("div.changeColor");
  clearDiv.forEach(element => {
    element.classList.toggle("changeColor");
    element.className = "gridSquare";
  })});

//Grid size button that asks user how large to make the etch-a-sketch grid.
let gridButton = document.querySelector("#gridSize");

gridButton.addEventListener("click", () => {
  let userInput;
  
  while(true) {
  userInput = parseInt(prompt("How many columns would you like? Enter 1 - 100"));
 
  if (userInput < 1 || userInput > 100) {
    userInput = parseInt(prompt("Please try again. Enter 1 - 100"));
  } else {
    gridSize = userInput * userInput;
    let percCalc = (1/userInput) * 100;
    var perc = percCalc + '%';
    root.style.setProperty("--percent", perc);
    buildGrid(gridSize);
    hoverTrail();
    return;
  }
}});