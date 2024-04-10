import Circle from "./Circle.js";
import Scene from "./Scene.js";

const ratioInput = document.getElementById("ratioInput");

const smallShapes = (r) => (shape) => shape.r <= r;

ratioInput.addEventListener("input", (e) => {
  const ratio = e.target.value;
  console.log(ratio);
  scene.select(smallShapes(ratio)).scale(10).move(deltaX, deltaY).draw();
});

const circle1 = new Circle(100, 250, 1, "red");
const circle2 = new Circle(200, 250, 2, "green");
const circle3 = new Circle(300, 250, 3, "blue");
const circle4 = new Circle(400, 250, 4, "yellow");
const circle5 = new Circle(500, 250, 5, "orange");
const circle6 = new Circle(600, 250, 6, "purple");
const circle7 = new Circle(700, 250, 7, "black");
const circle8 = new Circle(800, 250, 8, "pink");
const circle9 = new Circle(900, 250, 9, "red");

// const circleCollection = [circle1, circle2, circle3];
const circleCollection = [
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
  circle7,
  circle8,
  circle9,
];

const deltaX = 5;
const deltaY = 10;

const scene = new Scene(circleCollection);
scene
  .select(smallShapes(ratioInput.value))
  .scale(10)
  .move(deltaX, deltaY)
  .draw();
