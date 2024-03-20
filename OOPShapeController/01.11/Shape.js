class Shape {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  toString() {
    // return `x: ${this.x}, y: ${this.y}`;
    throw new Error("You have to implement the method toString!");
  }

  draw() {
    //developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    throw new Error("You have to implement the method draw!");
  }
}

class Circle extends Shape {
  constructor(x, y, radius, context) {
    super(x, y, context);
    this.radius = radius;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    // this.context.fill();
    this.context.stroke();
  }

  toString() {
    return `Circle x: ${this.x}, y: ${this.y}, radius: ${this.radius}`;
  }
}

class Square extends Shape {
  constructor(x, y, length, context) {
    super(x, y, context);
    this.length = length;
  }
  draw() {
    // this.context.fillRect(this.x, this.y, this.length, this.length);
    // // this.context.strokeRect(this.x, this.y, this.length, this.length);
    // // this.context.clearRect(this.x + 10, this.y + 10, this.length - 20, this.length - 20);

    this.context.beginPath();
    this.context.rect(this.x, this.y, this.length, this.length);
    this.context.stroke();

    // this.context.fillStyle = "red";
    // this.context.fillRect(this.x, this.y, this.length, this.length);
  }
  toString() {
    return `Square x: ${this.x}, y: ${this.y}, length: ${this.length}`;
  }
}

export { Circle, Square };
