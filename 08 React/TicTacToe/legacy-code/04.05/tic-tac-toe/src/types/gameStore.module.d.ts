type GameState = {
  history: { squares: Chip[] }[];
  activeStep: Step;
  currentPlayer: Player;
  winner: Player | null;
  tie: boolean;
  startTime: DateAsNumber | null;
  endTime: DateAsNumber | null;
  iconPlayer0: () => React.ReactElement;
  iconPlayer1: () => React.ReactElement;
};

type Action =
  | { type: "CLICK_ON_SQUARE"; index: Index }
  | { type: "JUMP_TO"; step: Step }
  | { type: "RESET" }
  | { type: "UNDO" }  
  | { type: "SET_START_TIME"; startTime: DateAsNumber }
  | { type: "SET_END_TIME"; endTime: DateAsNumber };

type GameReducer = (state: GameState, action: Action) => GameState;

type GameStore = GameState & { dispatch: (action: Action) => void };
