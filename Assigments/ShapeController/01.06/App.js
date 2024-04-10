import { Square, Circle } from "./Shape.js";
import Action from "./Action.js";
import ActionQueue from "./ActionQueue.js";

export default class App {
  constructor(canvas, context, shapeSelected, compress, up, down, left, right){
    this.canvas = canvas;
    this.context = context;
    this.shapeSelected = shapeSelected;
    this.compress = compress;
    this.actionQueue = new ActionQueue();
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    // const actionQueue = new ActionQueue();
    this.actionQueue = new ActionQueue();
    // let currentShape = new Square(0, 0, 49, context);
    this.currentShape = new Square(0, 0, 49, this.context);
    // const directions = {
    //   up: { element: up, deltax: 0, deltay: -20 },
    //   down: { element: down, deltax: 0, deltay: 20 },
    //   left: { element: left, deltax: -20, deltay: 0 },
    //   right: { element: right, deltax: 20, deltay: 0 },
    // };
    this.directions = {
      up: { element: this.up, deltax: 0, deltay: -20 },
      down: { element: this.down, deltax: 0, deltay: 20 },
      left: { element: this.left, deltax: -20, deltay: 0 },
      right: { element: this.right, deltax: 20, deltay: 0 },
    };
  }

  initDirections() {
    // for (let direction in directions) {
    //   let element = directions[direction].element;
    //   let deltax = directions[direction].deltax;
    //   let deltay = directions[direction].deltay;
    //   element.addEventListener("click", function () {
    //     console.log("clicked", direction);
    //     let action = new Action(
    //       currentShape,
    //       context,
    //       direction,
    //       deltax,
    //       deltay
    //     );
    //     actionQueue.add(action);
    //   });
    // }
    for (let direction in this.directions) {
      let element = this.directions[direction].element;
      let deltax = this.directions[direction].deltax;
      let deltay = this.directions[direction].deltay;
      element.addEventListener("click", () => {
        console.log("clicked", direction);
        let action = new Action(
          this.currentShape,
          this.context,
          direction,
          deltax,
          deltay
        );
        this.actionQueue.add(action);
      });
    }
  }
  initShapeDrawer(){
        this.shapeSelected.addEventListener("change", () => {
          const shape = this.shapeSelected.value;
          // Clear the canvas
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          if (shape === "circle") {
            this.currentShape = new Circle(0, 0, 49, this.context);
          } else if (shape === "square") {
            this.currentShape = new Square(0, 0, 49, this.context);
          }
          console.log(this.currentShape.toString());
          this.currentShape.draw();
        });
  }
  initShape() {
    // shapeSelected.value = "square";
    // console.log(currentShape.toString());
    // currentShape.draw();
    this.shapeSelected.value = "square";
    console.log(this.currentShape.toString());
    this.currentShape.draw();
  }
  initCompress(){
        this.compress.addEventListener("click", () => {
          console.log("Compressing");
          this.actionQueue.compressed = this.compress.checked;
          console.log(this.actionQueue.compressed)
        });
  }
  init(){
    console.log("App initialized");
    // compress.addEventListener("click", function () {
    //   actionQueue.compressed = compress.checked;
    // });

    this.initShape();
    // shapeSelected.addEventListener("change", function () {
    //   const shape = shapeSelected.value;
    //   // Clear the canvas
    //   context.clearRect(0, 0, canvas.width, canvas.height);
    //   if (shape === "circle") {
    //     currentShape = new Circle(0, 0, 49, context);
    //   } else if (shape === "square") {
    //     currentShape = new Square(0, 0, 49, context);
    //   }
    //   console.log(currentShape.toString());
    //   currentShape.draw();
    // });
    this.initCompress();
    this.initShapeDrawer();
    this.initDirections();
  }

}
