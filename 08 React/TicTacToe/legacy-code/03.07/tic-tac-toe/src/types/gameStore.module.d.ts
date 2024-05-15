type GameState = {
  history: { squares: Chip[] }[];
  activeStep: Step;
  currentPlayer: Player;
  winner: Player | null;
  tie: boolean;
  iconPlayer0: () => React.ReactElement;
  iconPlayer1: () => React.ReactElement;
};

type Action =
  | { type: "CLICK_ON_SQUARE"; index: Index }
  | { type: "JUMP_TO"; step: Step }
  // | { type: "SET_GAME_WINNER"; winner: Player | null }
  | { type: "RESET" }
  | { type: "UNDO" };

type GameReducer = (state: GameState, action: Action) => GameState;

type GameStore = GameState & { dispatch: (action: Action) => void };
