
var container = document.getElementById('container');
var gridSize = 625;  //Auto grid size
var root = document.querySelector(":root");

//Build grid squares and append to container div.
function buildGrid(x) {
container.replaceChildren();
  for (var i=0; i < x; i++) {
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.appendChild(gridSquare);
  }
}
buildGrid(gridSize);

const square = document.querySelectorAll("div.gridSquare");

//Create hover trail effect with mouseover event
square.forEach((div) => {
  div.addEventListener('mouseover', () => {
  if(mousedown === false) { 
  div.classList.add("trailColor");
  } else if (mousedown === true) {
    div.classList.add("changeColor");
  }
});
});

//Change background with click event
square.forEach((div) => {
  div.addEventListener('click', () => {
  mousedown = !mousedown;
});
});

//Clear button, clears all colors from the grid.
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  var clearDiv = document.querySelectorAll("div.changeColor");
  clearDiv.forEach(element => {
  element.className = "gridSquare";
})});


//Grid-size button that asks user how large to make the etch-a-sketch grid.
const gridButton = document.querySelector("#gridSize");

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
    clickChange();
    return;
  }
}});