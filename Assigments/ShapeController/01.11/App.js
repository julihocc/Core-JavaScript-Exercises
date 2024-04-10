import { Square, Circle } from "./Shape.js";
import Action from "./Action.js";
import ActionQueue from "./ActionQueue.js";
import { Binary, Octal, Hexadecimal, Decimal, Roman } from "./Coordinates.js";

// FIXME: Not use singleton pattern
const App = (function () {
  let instance;
  let step = 20;

  function createInstance(
    canvas,
    context,
    shapeSelected,
    compress,
    directionsContainer,
    coordinateFormat,
    coordinateView,
    coordinateStyle,
    coordinateStyleContainer
  ) {
    // let coordinates = new Coordinates(0, 0);
    let coordinates = new Decimal(0, 0);

    const initShape = function () {
      shapeSelected.value = "square";
      console.log(currentShape.toString());
      currentShape.draw();
    };

    const initCompress = function () {
      actionQueue.compressed = compress.checked;
      compress.addEventListener("click", () => {
        console.log("Compressing");
        actionQueue.compressed = compress.checked;
        console.log(actionQueue.compressed);
      });
    };

    const initShapeDrawer = function () {
      shapeSelected.addEventListener("change", () => {
        const shape = shapeSelected.value;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (shape === "circle") {
          currentShape = new Circle(step / 2, step / 2, step / 2, context);
        } else if (shape === "square") {
          currentShape = new Square(0, 0, step, context);
        }
        console.log(currentShape.toString());
        currentShape.draw();
      });
    };

    const initDirections = function () {
      directionsContainer.addEventListener("click", (event) => {
        const directionElement = event.target;
        const direction = directionElement.id;
        if (directions.hasOwnProperty(direction)) {
          let deltax = directions[direction].deltax;
          let deltay = directions[direction].deltay;
          let action = new Action(
            currentShape,
            context,
            direction,
            deltax,
            deltay
          );
          actionQueue.add(action);
          coordinates.x += deltax;
          coordinates.y += deltay;
          updateCoordinateView();
        }
      });
    };

    const updateCoordinateView = function () {
      if (coordinateFormat.value === "polar") {
        coordinateView.innerText = coordinates.toPolar();
      } else {
        coordinateView.innerText = coordinates.toString();
      }
    };

    const initCoordinates = function () {
      // coordinates = new Coordinates(currentShape.x, currentShape.y);
      coordinates = new Decimal(currentShape.x, currentShape.y);
      updateCoordinateView();
      coordinateFormat.addEventListener("change", () => {
        updateCoordinateView();
      });
    };

    const initCoordinateStyle = function () {
      // FIXME: update coordinate with a single line
      // FIXME: use factory for converters
      coordinateStyle.addEventListener("change", () => {
        if (coordinateStyle.value === "binary") {
          // coordinateView.innerText = coordinates.toString("binary");
          coordinates = new Binary(currentShape.x, currentShape.y);
          coordinateView.innerText = coordinates.toString();
        } else if (coordinateStyle.value === "octal") {
          // coordinateView.innerText = coordinates.toString("octal");
          coordinates = new Octal(currentShape.x, currentShape.y);
          coordinateView.innerText = coordinates.toString();
        } else if (coordinateStyle.value === "hexadecimal") {
          // coordinateView.innerText = coordinates.toString("hexadecimal");
          coordinates = new Hexadecimal(currentShape.x, currentShape.y);
          coordinateView.innerText = coordinates.toString();
        } else if (coordinateStyle.value === "roman") {
          // coordinateView.innerText = coordinates.toString("roman");
          coordinates = new Roman(currentShape.x, currentShape.y);
          coordinateView.innerText = coordinates.toString();
        } else {
          coordinateView.innerText = coordinates.toString();
        }
      });
    };

    const initCoordinateStyleContainer = function () {
      coordinateFormat.addEventListener("change", () => {
        if (coordinateFormat.value === "polar") {
          coordinateStyleContainer.style.display = "none";
        } else {
          coordinateStyleContainer.style.display = "block";
        }
      });
    };

    let currentShape = new Square(0, 0, step, context);
    let actionQueue = new ActionQueue();
    const directions = {
      up: { deltax: 0, deltay: -step },
      down: { deltax: 0, deltay: step },
      left: { deltax: -step, deltay: 0 },
      right: { deltax: step, deltay: 0 },
    };

    return {
      init: function () {
        console.log("App initialized");
        initShape();
        initCompress();
        initShapeDrawer();
        initDirections();
        initCoordinates();
        initCoordinateStyle();
        initCoordinateStyleContainer();
      },
    };
  }

  return {
    getInstance: function (
      canvas,
      context,
      shapeSelected,
      compress,
      directionsContainer,
      coordinateFormat,
      coordinateView,
      coordinateStyle,
      coordinateStyleContainer
    ) {
      if (!instance) {
        instance = createInstance(
          canvas,
          context,
          shapeSelected,
          compress,
          directionsContainer,
          coordinateFormat,
          coordinateView,
          coordinateStyle,
          coordinateStyleContainer
        );
      }
      return instance;
    },
  };
})();

export default App;
