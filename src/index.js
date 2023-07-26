import "./styles.css";

var gameArea = document.getElementById("game-area");
var shape = document.getElementById("shape");
var shapes = ["square", "circle", "triangle", "rectangle"];
var colors = ["red", "green", "blue", "yellow"];

// Function to change the background color randomly
function changeColor() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  gameArea.style.backgroundColor = randomColor;
}

// Function to change the shape randomly
function changeShape() {
  var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  shape.className = "shape " + randomShape;
}

// Attach event listeners to the buttons
var colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", changeColor);

var shapeButton = document.getElementById("shape-button");
shapeButton.addEventListener("click", changeShape);
