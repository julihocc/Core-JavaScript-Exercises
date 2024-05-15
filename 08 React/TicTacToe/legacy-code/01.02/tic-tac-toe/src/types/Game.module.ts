type GameState = {
  history: { squares: string[] }[];
  stepNumber: number;
  xIsNext: boolean;
};

type Action =
  | { type: "HANDLE_CLICK"; index: number }
  | { type: "JUMP_TO"; step: number };
