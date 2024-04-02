"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_js_1 = __importDefault(require("./App.js"));
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const shapeSelected = document.getElementById("shape-selected");
const compress = document.getElementById("compress");
const coordinateFormat = document.getElementById("coordinate-format");
console.log("coordinateDisplay", coordinateFormat.value);
const coordinateView = document.getElementById("coordinate-view");
console.log("coordinates", coordinateView.innerText);
const coordinateStyle = document.getElementById("coordinate-style");
console.log("coordinateStyle", coordinateStyle.value);
const coordinateStyleContainer = document.getElementById("coordinate-style-container");
const directionsContainer = document.getElementById("directions-container");
const undoContainer = document.getElementById("undo-container");
// console.log("compressed", compress.checked);
if (compress) {
    console.log("compressed", compress.checked);
}
else {
    console.log("compress is null or undefined");
}
const app = new App_js_1.default(canvas, context, shapeSelected, compress, directionsContainer, coordinateFormat, coordinateView, coordinateStyle, coordinateStyleContainer, undoContainer);
app.init();
