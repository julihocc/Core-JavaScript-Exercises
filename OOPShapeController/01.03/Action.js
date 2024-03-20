export default class Action {
  constructor(directions, context) {
    if (!directions) {
      throw new Error("You have to provide directions!");
    }
    if (!context) {
      throw new Error("You have to provide a context!");
    }
    this.directions = directions;
    this.direction = null;
    this.steps = 0;
    this.context = context;
  }

  toString() {
    return `direction: ${this.direction}, steps: ${this.steps}`;
  }

  apply() {
    if (this.currentShape) {
      if (this.direction) {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.currentShape.move(
          this.directions[this.direction].deltax * this.steps,
          this.directions[this.direction].deltay * this.steps
        );
        this.currentShape.draw();
      } else {
        console.error("No direction to apply!");
      }
    } else {
      console.error("No shape to apply the action!");
    }
  }
}
