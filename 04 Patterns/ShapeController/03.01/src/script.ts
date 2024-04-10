import App from "./App.js";

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const context = canvas.getContext("2d")! as CanvasRenderingContext2D;
const shapeSelected = document.getElementById(
  "shape-selected"
)! as HTMLSelectElement;
const compress = document.getElementById("compress")! as HTMLInputElement;

const coordinateFormat = document.getElementById(
  "coordinate-format"
)! as HTMLInputElement;
console.log("coordinateDisplay", coordinateFormat.value);

const coordinateView = document.getElementById(
  "coordinate-view"
)! as HTMLDivElement;
console.log("coordinates", coordinateView.innerText);

const coordinateStyle = document.getElementById(
  "coordinate-style"
)! as HTMLInputElement;
console.log("coordinateStyle", coordinateStyle.value);

const coordinateStyleContainer = document.getElementById(
  "coordinate-style-container"
)! as HTMLDivElement;

const directionsContainer = document.getElementById(
  "directions-container"
)! as HTMLDivElement;
const undoContainer = document.getElementById(
  "undo-container"
)! as HTMLDivElement;

// console.log("compressed", compress.checked);
if (compress) {
  console.log("compressed", compress.checked);
} else {
  console.log("compress is null or undefined");
}

const app = new App(
  canvas,
  context,
  shapeSelected,
  compress,
  directionsContainer,
  coordinateFormat,
  coordinateView,
  coordinateStyle,
  coordinateStyleContainer,
  undoContainer
);
app.init();
