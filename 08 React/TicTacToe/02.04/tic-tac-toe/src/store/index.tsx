import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import gameReducer from "./gameReducer"; // Your existing reducer

const gameStoreHandler = (set) => ({
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
  gameStatus: "Next player: X",
  activeIndex: null,
  dispatch: (action) => set(
    (state) => gameReducer(state, action),
  ),
});

export const useGameStore = create<GameState>(
  immer(gameStoreHandler),
)