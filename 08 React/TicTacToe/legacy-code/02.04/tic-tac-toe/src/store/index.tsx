import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import gameReducer from "./gameReducer"; // Your existing reducer

export const useGameStore = create<
  GameState & { dispatch: (action: Action) => void }
>()(
  persist(
    devtools(
      immer((set) => ({
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true,
        gameStatus: "Next player: X",
        activeIndex: null,
        dispatch: (action) => set((state) => gameReducer(state, action)),
      }))
    ),
    { name: "tic-tac-toe" }
  )
);
