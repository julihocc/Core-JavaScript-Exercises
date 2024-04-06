import type Shape from "./Shape";

export default class Scene {
  shapes: Shape[];
  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }
  select(cb: (shape: Shape) => boolean): Scene {
    return new Scene(this.shapes.filter(cb));
  }
  scaleShape(factor: number) {
    return function (shape: Shape): Shape {
      return shape.clone().scale(factor);
    };
  }
  scale(factor: number) {
    return new Scene(this.shapes.map(this.scaleShape(factor)));
  }
  move(x: number, y: number) {
    return new Scene(this.shapes.map((shape) => shape.clone().move(x, y)));
  }
  draw() {
    // [x] FIXME use canvas to draw the shapes
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach((shape) => {
      ctx.beginPath();
      ctx.arc(shape.x, shape.y, shape.magnitude, 0, Math.PI * 2);
      ctx.fillStyle = shape.color;
      ctx.fill();
    });
  }
}
