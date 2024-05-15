// globals

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Chip = 0 | 1 | null;
type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Player = 0 | 1;

// Move component

type MoveProps = {
  description: string;
  onClick: () => void;
  isActive: boolean;
};

// Board component

type BoardProps = {
  squares: Chip[];
  onClick: (i: Index) => void;
};

// Square component

type SquareProps = {
  value: Chip;
  onClick: () => void;
};

// Game related types

type GameState = {
  history: { squares: Chip[] }[];
  // xIsNext: boolean;
  activeStep: Step;
  currentPlayer: Player;
  winner: Player | null;
};

type Action =
  | { type: "CLICK_ON_SQUARE"; index: Index }
  | { type: "JUMP_TO"; step: Step }
  | { type: "SET_GAME_WINNER"; winner: Player | null }
  | { type: "RESET" }
  | { type: "UNDO" };

type GamePresenterProps = {
  gameReducer: (state: GameState, action: Action) => GameState;
  initialState: GameState;
};

type GameReducer = (state: GameState, action: Action) => GameState;

type HistoryProps = {
  moves: JSX.Element[];
};
