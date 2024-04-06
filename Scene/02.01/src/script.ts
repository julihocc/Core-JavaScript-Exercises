import Circle from "./Circle.js";
import Scene from "./Scene.js";
import type Shape from "./Shape.js";

const ratioInput = document.getElementById("ratioInput") as HTMLInputElement;

const smallShapes = (magnitude: number) => (shape: Shape) =>
  shape.magnitude <= magnitude;

ratioInput.addEventListener("input", (e) => {
  if (!e.target) return;
  const target = e.target as HTMLInputElement;
  const ratio = parseFloat(target.value);
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
  .select(smallShapes(parseFloat(ratioInput.value)))
  .scale(10)
  .move(deltaX, deltaY)
  .draw();
