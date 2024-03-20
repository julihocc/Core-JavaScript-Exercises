import App from "./App.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const shapeSelected = document.getElementById("shape-selected");
const compress = document.getElementById("compress");

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

const app = new App(canvas, context, shapeSelected, compress, up, down, left, right);

app.init()


