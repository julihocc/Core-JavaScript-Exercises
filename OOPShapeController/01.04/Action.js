export default class Action {
  constructor(currentShape, context, direction, deltax, deltay) {
    this.currentShape = currentShape
    this.context = context
    this.direction = direction
    this.deltax = deltax
    this.deltay = deltay
  }
  apply() {
    if (this.currentShape) {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      this.currentShape.move(this.deltax, this.deltay);
      this.currentShape.draw();
    }
  }
  toString() {
    return `deltax: ${this.deltax}, deltay: ${this.deltay}`
  }
}
