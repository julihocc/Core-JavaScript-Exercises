import { Square, Circle } from "./Shape.js";
import Action from "./Action.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const shapeSelected = document.getElementById("shape-selected");

let currentShape = null;

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

const directions = {
  up: { element: up, deltax: 0, deltay: -10 },
  down: { element: down, deltax: 0, deltay: 10 },
  left: { element: left, deltax: -10, deltay: 0 },
  right: { element: right, deltax: 10, deltay: 0 },
};


const action = new Action(directions, context);

console.string = function (obj) {
  console.log(String(obj));
};


shapeSelected.addEventListener("change", function () {
  const shape = shapeSelected.value;
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (shape === "circle") {
    currentShape = new Circle(0, 0, 49, context);
  } else if (shape === "square") {
    currentShape = new Square(0, 0, 49, context);
  }
  action.currentShape = currentShape;
  currentShape.draw();
});

for (let direction in directions) {
  let element = directions[direction].element;
  let deltax = directions[direction].deltax;
  let deltay = directions[direction].deltay;
  element.addEventListener("click", function () {
    if (action.currentShape) {
      if (action.direction === direction) {
        action.steps++;
      } else {
        action.apply();
        action.direction = direction;
        action.steps = 1;
      }
      console.string(action);
    }
  });
}
