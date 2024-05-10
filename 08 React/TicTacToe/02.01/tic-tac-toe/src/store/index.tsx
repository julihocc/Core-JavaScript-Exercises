import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { calculateWinner } from "../utils/calculateWinner";

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

// export const useStore = create<Store>((set) => ({
//   board: Array(9).fill(''),
//   currentPlayer: 'X',
//   winner: '',
//   setBoard: (board) => set({ board }),
//   setCurrentPlayer: (currentPlayer) => set({ currentPlayer }),
//   setWinner: (winner) => set({ winner }),
// }));

export const useStore = create<GameState>()(
  persist(
    devtools((set) => ({
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
      gameStatus: "",
      dispatch: (action: Action) => set((state) => gameReducer(state, action)),
    })),
    {
      name: "tic-tac-toe-store",
    }
  )
);
