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
  key: string;
  value: Chip;
  onClick: () => void;
};

type GamePresenterProps = {
  gameReducer: (state: GameState, action: Action) => GameState;
  initialState: GameState;
};

type HistoryProps = {
  moves: JSX.Element[];
};
