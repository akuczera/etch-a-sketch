
var container = document.getElementById('container');
var gridSize = 625;  //Auto grid size
var root = document.querySelector(":root");
let mousedown = false;
let surprise = false;

//Build grid squares and append to container div.
function buildGrid(x) {
container.replaceChildren();
  for (var i=0; i < x; i++) {
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.appendChild(gridSquare);
  }
  hover();
  mouseDown();
}
buildGrid(gridSize);

//Create hover trail effect with mouseover event
function hover() {
  const square = document.querySelectorAll("div.gridSquare");
  square.forEach((div) => {
    div.addEventListener('mouseover', () => {
    if(mousedown === false) { 
    div.classList.add("trailColor");
    } else if (mousedown === true) {
      //div.classList.add("changeColor");
      div.style.backgroundColor = "black"; 
    }
  });
  });
}

//Change background with click event
function mouseDown() {
    const square = document.querySelectorAll("div.gridSquare");
  square.forEach((div) => {
    div.addEventListener('click', () => {
    //div.classList.add("changeColor");
    div.style.backgroundColor = "black";
    mousedown = !mousedown;
  });
  });
}

//Surprise button, changes background color to random color.
const surpriseButton = document.querySelector("#random");

surpriseButton.addEventListener("click", () => {
  surprise != surprise;
})

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
  
mousedown = false;
let userInput;
let isValid = false;

  do{
    userInput = prompt("How many columns would you like? Enter 1 - 100");
    if (userInput === null) break;

    userInput = parseInt(userInput);
    isValid = userInput >= 1 && userInput <= 100;
    
  if (isValid) {
    gridSize = userInput * userInput;
    let percCalc = ((1/userInput) * 100) + '%';
    root.style.setProperty("--percent", percCalc);
  } else {
    userInput = parseInt(prompt("Please try again. Enter 1 - 100"));
  }
} while (!isValid);
  
buildGrid(gridSize);
});