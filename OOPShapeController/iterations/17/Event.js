export default class Event {
  constructor(currentShape, context, direction, deltax, deltay) {
    this.currentShape = currentShape;
    this.context = context;
    this.direction = direction;
    this.deltax = deltax;
    this.deltay = deltay;
  }

  //[x] Change async transtions to canvas transitions
  apply() {
    // console.log("Is action compressed?", isCompressed);
    if (this.currentShape) {
      if (
        this.currentShape.coordinates.x + this.deltax < 0 ||
        this.currentShape.coordinates.x + this.deltax > canvas.width ||
        this.currentShape.coordinates.y + this.deltay < 0 ||
        this.currentShape.coordinates.y + this.deltay > canvas.height
      ) {
        console.error("Out of bounds");
      } else {
        console.log("Applying action");
        this.currentShape.moveInThisDirection(this.deltax, this.deltay);
      }
    }
  }
  toString() {
    return `
    deltax: ${this.deltax}, deltay: ${this.deltay}
    `;
  }
}
