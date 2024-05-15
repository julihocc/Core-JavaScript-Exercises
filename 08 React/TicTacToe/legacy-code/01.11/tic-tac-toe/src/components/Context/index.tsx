import { createContext, useReducer, useContext, FC, Dispatch } from "react";
import { calculateWinner } from "../../utils/calculateWinner";

export const GameContext = createContext<GameState | null>(null);
export const GameDispatchContext = createContext<Dispatch<Action> | null>(null);

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={gameState}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};

export function useGameState() {
  return useContext(GameContext);
}

export function useDispatch() {
  return useContext(GameDispatchContext);
}

const initialState: GameState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  gameStatus: "Next player: X",
};

const gameReducer: GameReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_CLICK": {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.index]) {
        return state;
      }
      squares[action.index] = state.xIsNext ? "X" : "O";
      const xIsNext = !state.xIsNext;
      const gameStatus = `Next player: ${xIsNext ? "X" : "O"}`;
      return {
        ...state,
        history: [...history, { squares }],
        stepNumber: state.stepNumber + 1,
        xIsNext,
        gameStatus,
      } as GameState;
    }
    case "JUMP_TO": {
      const output = {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
      };
      return output as GameState;
    }
    case "SET_GAME_STATUS": {
      const winner = action.winner;
      const output = {
        ...state,
        gameStatus: winner
          ? `Winner: ${winner}`
          : `Next player: ${state.xIsNext ? "X" : "O"}`,
      };
      return output as GameState;
    }
    default:
      return state;
  }
};
