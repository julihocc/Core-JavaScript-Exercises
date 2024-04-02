// directions.interface.ts
// export interface Direction {
//   deltax: number;
//   deltay: number;
// }
// export interface Directions {
//   up: Direction;
//   down: Direction;
//   left: Direction;
//   right: Direction;
// }
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }
// interface Directions {
//   [key in Direction]?: { deltax: number, deltay: number };
// }
export var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
