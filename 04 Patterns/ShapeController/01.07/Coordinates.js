export default class Coordinates{
  // Convert cartesian coordinates to polar coordinates
  
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  toString(){
    return `x: ${this.x}, y: ${this.y}`;
  }

  toPolar(){
    let r = Math.sqrt(this.x ** 2 + this.y ** 2);
    let theta = Math.atan2(this.y, this.x);
    return `r: ${r.toFixed(2)}, θ: ${theta.toFixed(2)}`;
  }
}