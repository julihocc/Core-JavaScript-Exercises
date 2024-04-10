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
