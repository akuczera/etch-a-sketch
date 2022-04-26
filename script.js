
//Get access to <body> of HTML.
const body = document.body;
const gridSize = 16;

function buildGrid(x) {
//Add etch-a-sketch container for all squares, set id attribute.
const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("id", "container");
sketchContainer.className = "grid";
console.log(sketchContainer.id);
body.appendChild(sketchContainer);

var sketchSquare;

//This loop builds our grid.
  for (var i=0; i < x; i++) {
    sketchSquare = document.createElement("div");
    sketchSquare.className = "gridSquare";
    console.log(sketchSquare.className);
    sketchContainer.appendChild(sketchSquare);
  }
}

buildGrid(gridSize);

//Hover effect that changes the color of each div when a use hovers over the div.
var div = document.querySelectorAll("div.gridSquare");

div.forEach(div => div.addEventListener("mouseover", () => {
  div.className = "changeColor";
}));

//Reset button to clear the colors in the gridSquares
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  console.log("clear!");
  var clearDiv = document.querySelectorAll("div.changeColor");
  clearDiv.forEach(element => {
    element.classList.toggle("changeColor");
    element.className = "gridSquare";
  })});