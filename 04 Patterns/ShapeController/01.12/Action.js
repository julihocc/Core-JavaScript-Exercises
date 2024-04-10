export default class Action {
  constructor(currentShape, context, direction, deltax, deltay) {
    this.currentShape = currentShape;
    this.context = context;
    this.direction = direction;
    this.deltax = deltax;
    this.deltay = deltay;
  }

  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //FIXME Change async transtions to canvas transitions
  async apply(isCompressed) {
    console.log("Is action compressed?", isCompressed);
    if (this.currentShape) {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      if (isCompressed) {
        this.moveSlowly();
      } else {
        this.currentShape.move(this.deltax, this.deltay);
      }
      // [x]: action should't be in charge of drawing
      // this.currentShape.draw();
    }
  }
  toString() {
    return `deltax: ${this.deltax}, deltay: ${this.deltay}`;
  }

  async moveSlowly() {
    let repetitions = Math.max(Math.abs(this.deltax), Math.abs(this.deltay));
    // console.log("Repetitions", repetitions);
    let normalizedDeltax = this.deltax / repetitions;
    // console.log("Normalized deltax", normalizedDeltax);
    let normalizedDeltay = this.deltay / repetitions;
    // console.log("Normalized deltay", normalizedDeltay);
    for (let i = 0; i < repetitions; i++) {
      this.currentShape.move(normalizedDeltax, normalizedDeltay);
      // this.currentShape.draw();
      await this.delay(100);
      // console.log("Drawing", i);
      this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
    this.currentShape.move(normalizedDeltax, normalizedDeltax);
  }
}
