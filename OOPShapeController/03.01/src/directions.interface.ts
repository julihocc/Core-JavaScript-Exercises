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

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

export interface Delta {
  deltax: number;
  deltay: number;
}

export type Directions = {
  [key in Direction]?: Delta;
};
