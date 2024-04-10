export default class Scene {
  constructor(shapes) {
    this.shapes = shapes;
  }
  select(cb) {
    return new Scene(this.shapes.filter(cb));
  }
  scaleShape(factor) {
    return function (shape) {
      const clonedShape = shape.clone();
      clonedShape.scale(factor);
      return clonedShape;
    };
  }
  scale(factor) {
    return new Scene(this.shapes.map(this.scaleShape(factor))); //currying
    // return new Scene(this.shapes.map((shape)=>scaleShape(factor)(shape))); //currying, partially applied
  }
  move(x, y) {
    return new Scene(this.shapes.map((shape) => shape.clone().move(x, y)));
  }
  draw() {
    const svg = d3.select("svg"); // Assuming you have an <svg> element in your HTML
    svg
      .selectAll("circle")
      .data(this.shapes)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.r)
      .style("fill", (d) => d.color); // Just as an example, setting all circles to blue
  }
}

// have the draw to compose all the scene with the changes made to the selected shapes
