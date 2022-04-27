
//Get access to <body> of HTML.
const body = document.body;
var gridSize = 16;

function buildGrid(x) {
//Add etch-a-sketch container for all squares, set id attribute.
const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("id", "container");
sketchContainer.className = "grid";
body.appendChild(sketchContainer);

let sketchSquare;

//This loop builds our grid.
  for (var i=0; i < x; i++) {
    sketchSquare = document.createElement("div");
    sketchSquare.className = "gridSquare";
    sketchContainer.appendChild(sketchSquare);
  }
}

buildGrid(gridSize);

//Hover effect that changes the color of each div when a use hovers over the div.
let div = document.querySelectorAll("div.gridSquare");

div.forEach(div => div.addEventListener("mouseover", () => {
  div.className = "changeColor";
}));

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
  console.log("Changing grid size!");
  let userInput;
  
  while(true) {
  userInput = parseInt(prompt("How many squares would you like? Enter 1 - 100"));
 
  if (userInput < 1 || userInput > 100) {
    userInput = parseInt(prompt("Please try again. Enter 1 - 100"));
  } else {
    console.log(userInput);
    gridSize = userInput;
    console.log(gridSize);
    buildGrid(gridSize);
    break;
  }
}});