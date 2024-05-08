type GameState = {
  history: { squares: Chip[] }[];
  stepNumber: Step;
  xIsNext: boolean;
};

type Action =
  | { type: "HANDLE_CLICK"; index: Index }
  | { type: "JUMP_TO"; step: Step };

type GamePresenterProps = {
  gameReducer: (state: GameState, action: Action) => GameState;
  initialState: GameState;
};

type GameReducer = (state: GameState, action: Action) => GameState;
