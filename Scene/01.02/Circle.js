export default class Circle {
  constructor(x, y, r, color = "blue") {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
    return this;
  }
  scale(factor) {
    this.r *= factor;
    return this;
  }
  // draw(ctx) {}
  clone() {
    return new Circle(this.x, this.y, this.r, this.color);
  }
}
