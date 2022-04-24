
//Get access to <body> of HTML
const body = document.body;
const gridSize = 16;

function buildGrid(x) {
//Add etch-a-sketch container for all squares, set id attribute
const sketchContainer = document.createElement("div");
sketchContainer.setAttribute("id", "container");
  sketchContainer.className = "grid";
console.log(sketchContainer.id);
body.appendChild(sketchContainer);
var sketchSquare;

//This loop builds our grid
  for (var i=0; i < x; i++) {
    sketchSquare = document.createElement("div");
    sketchSquare.className = "gridSquare";
    sketchContainer.appendChild(sketchSquare);
    console.log(sketchSquare.class);
  }
}

buildGrid(gridSize);