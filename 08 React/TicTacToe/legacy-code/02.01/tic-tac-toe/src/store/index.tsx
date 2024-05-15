import { create } from "zustand";
import { calculateWinner } from "../utils/calculateWinner";
import { persist, devtools } from "zustand/middleware";

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



export const useGameStore = create<
  GameState & { dispatch: (action: Action) => void }
>()(
  devtools(
    persist(
      (set) => ({
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true,
        gameStatus: "Next player: X",
        dispatch: (action) => set((state) => gameReducer(state, action)),
      }),
      {
        name: "tic-tac-toe",
      }
    )
  )
);
