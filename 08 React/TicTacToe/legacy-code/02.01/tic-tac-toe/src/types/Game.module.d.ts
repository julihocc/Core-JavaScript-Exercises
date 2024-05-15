type GameState = {
  history: { squares: Chip[] }[];
  stepNumber: Step;
  xIsNext: boolean;
  gameStatus: string;
};

type Action =
  | { type: "HANDLE_CLICK"; index: Index }
  | { type: "JUMP_TO"; step: Step }
  | { type: "SET_GAME_STATUS"; winner: string | null };

type GamePresenterProps = {
  gameReducer: (state: GameState, action: Action) => GameState;
  initialState: GameState;
};

type GameReducer = (state: GameState, action: Action) => GameState;

type HistoryProps = {
  moves: JSX.Element[];
};
