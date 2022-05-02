
//Get access to <body> of HTML.
const body = document.body;
var container = document.getElementById('container');
var gridSize = 625;  //Auto grid size
var root = document.querySelector(":root");
var sketchSquare;

//Build grid squares and append to container div
function buildGrid(x) {
container.replaceChildren();
//This loop builds our grid.
  for (var i=0; i < x; i++) {
    sketchSquare = document.createElement("div");
    sketchSquare.className = "gridSquare";
    container.appendChild(sketchSquare);
  }
}

//Run buildGrid function
buildGrid(gridSize);

//Hover effect to crate trailing hover tail so user can see what square their mouse is hovering over.
function hoverTrail() {
var div = document.querySelectorAll("div.gridSquare");
div.forEach(div => div.addEventListener("mouseover", () => {
div.className = "trailColor";
clickChange();
}))};


//Run hoverTrail function
hoverTrail();


//Color change effect that changes the color of each div when a use clicks mouse over the div.
function clickChange() {
var div = document.querySelectorAll("div.gridSquare");
div.forEach(div => div.addEventListener("click", () => {div.target.style.backgroundColor = "rgb(148, 38, 226)";}))
}

//Reset button to clear the colors in the gridSquares.
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  let clearDiv = document.querySelectorAll("div.changeColor");
  clearDiv.forEach(element => {
    element.classList.toggle("changeColor");
    element.className = "gridSquare";
  })});

//Grid-size button that asks user how large to make the etch-a-sketch grid.
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