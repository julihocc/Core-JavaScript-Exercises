class Shape {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
    this.targetX = x;
    this.targetY = y;
    this.animating = false;
  }

  moveTo(x, y) {
    console.log("moveTo(x, y)", x, y);
    this.targetX = x;
    this.targetY = y;
    if (!this.animating) {
      this.animate();
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  animate() {
    // Smoothness factor determines the speed of the animation
    const smoothness = 0.1;
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;

    if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
      this.x += dx * smoothness;
      this.y += dy * smoothness;
      this.draw();
      requestAnimationFrame(this.animate.bind(this));
    } else {
      // Snap to final position and stop animating
      this.context.clearRect(0, 0, canvas.width, canvas.height);

      this.x = this.targetX;
      this.y = this.targetY;
      this.draw();
      this.animating = false;
    }
  }

  moveInThisDirection(dx, dy) {
    this.moveTo(this.x + dx, this.y + dy);
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
  constructor(x, y, context, radius) {
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
  constructor(x, y, context, length) {
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
