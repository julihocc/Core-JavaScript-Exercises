import Shape from "./Shape.js";
export default class Circle extends Shape {
    r;
    constructor(x, y, r, color = "blue") {
        super(x, y, color);
        this.r = r;
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
    get magnitude() {
        return this.r;
    }
}
