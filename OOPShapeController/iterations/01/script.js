import { Square, Circle } from './Shape.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const shapeSelected = document.getElementById('shape-selected');

let currentShape = null;

const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');

shapeSelected.addEventListener('change', function() {  
  const shape = shapeSelected.value;
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (shape === 'circle') {
    currentShape = new Circle(0, 0, 49, context);
    currentShape.draw();
  } else if (shape === 'square') {
    currentShape = new Square(0, 0, 49, context);
    currentShape.draw();
  }
});
