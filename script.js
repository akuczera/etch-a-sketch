var container = document.getElementById('container');
var gridSize = 625;  //Auto grid size
var root = document.querySelector(":root");
let mousedown;
let surprise;

//Build grid squares and append to container div.
function buildGrid(x) {
container.replaceChildren();
  for (var i=0; i < x; i++) {
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.appendChild(gridSquare);
  }
  mousedown = false;
  surprise = false;
  hover();
  mouseDown();
}
buildGrid(gridSize);

//Create hover trail effect with mouseover event
function hover() {
  const square = document.querySelectorAll("div.gridSquare");
  square.forEach((div) => {
    div.addEventListener('mouseover', () => {
    if((mousedown === false && surprise === false) || (mousedown === true && surprise === true)) { 
    div.classList.add("trailColor");
    } else if (mousedown === true && surprise === false) {
      //div.classList.add("changeColor");
      div.style.backgroundColor = "black"; 
    } else if (mousedown === false && surprise === true) {
        function random(number) {
        return Math.floor(Math.random() * (number+1));
        }
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      div.style.backgroundColor = rndCol;
    }
  });
  });
}

//Change background with click event
function mouseDown() {
    const square = document.querySelectorAll("div.gridSquare");
    square.forEach((div) => {
    div.addEventListener('click', () => {
    mousedown = !mousedown;
  });
  });
}

//Surprise button, changes background color to random color.
const surpriseButton = document.querySelector("#random");
surpriseButton.addEventListener("click", () => {
  mousedown = !mousedown;
  surprise = !surprise;
});

//Clear button, rebuilds grid to "clear it"
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  buildGrid(gridSize);
});

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