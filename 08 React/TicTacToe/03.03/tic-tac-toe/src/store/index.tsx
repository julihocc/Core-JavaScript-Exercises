import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import gameReducer from "./gameReducer"; // Your existing reducer
import { StarIcon, HeartIcon } from "@radix-ui/react-icons";

export const useGameStore = create<
  GameState & { dispatch: (action: Action) => void }
>()(
  persist(
    devtools(
      immer((set) => ({
        history: [{ squares: Array(9).fill(null) }],
        currentPlayer: 0,
        winner: null,
        activeStep: 0,
        draft: false,
        iconPlayer0: () => <StarIcon />,
        iconPlayer1: () => <HeartIcon />,
        dispatch: (action) =>
          set((state) => gameReducer(state, action), false, action.type),
      }))
    ),
    { name: "tic-tac-toe" }
  )
);
