export default abstract class Shape {
  x: number;
  y: number;
  color: string;
  constructor(x: number, y: number, color = "blue") {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  abstract move(x: number, y: number): Shape;
  abstract clone(): Shape;
  abstract scale(factor: number): Shape;
  abstract get magnitude(): number;
}
