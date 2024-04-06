export default class Scene {
    shapes;
    constructor(shapes) {
        this.shapes = shapes;
    }
    select(cb) {
        return new Scene(this.shapes.filter(cb));
    }
    scaleShape(factor) {
        return function (shape) {
            return shape.clone().scale(factor);
        };
    }
    scale(factor) {
        return new Scene(this.shapes.map(this.scaleShape(factor)));
    }
    move(x, y) {
        return new Scene(this.shapes.map((shape) => shape.clone().move(x, y)));
    }
    draw() {
        // [x] FIXME use canvas to draw the shapes
        const canvas = document.getElementById("canvas");
        if (!canvas) {
            throw new Error("Canvas not found");
        }
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.shapes.forEach((shape) => {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, shape.magnitude, 0, Math.PI * 2);
            ctx.fillStyle = shape.color;
            ctx.fill();
        });
    }
}
