import Shape from "./Shape.js";

export default class Circle extends Shape {
  r: number;
  constructor(x: number, y: number, r: number, color = "blue") {
    super(x, y, color);
    this.r = r;
  }
  move(x: number, y: number) {
    this.x += x;
    this.y += y;
    return this;
  }
  scale(factor: number) {
    this.r *= factor;
    return this;
  }
  // draw(ctx) {}
  clone() {
    return new Circle(this.x, this.y, this.r, this.color);
  }
  get magnitude() {
    return this.r;
  }
}
