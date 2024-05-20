import { create, StateCreator } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const handleMatchStore: StateCreator<
  MatchStore,
  [
    ["zustand/immer", never],
    ["zustand/persist", unknown],
    ["zustand/devtools", never]
  ]
> = (set, get) => ({
  matches: [],
  addMatch: (match) =>
    set(
      (state) => {
        state.matches.push(match);
        return state;
      },
      false,
      "addRecord"
    ),
  resetMatches: () => set({ matches: [] }),
  totalWins: (player) => {
    if (player) {
      return get().matches.filter((match) => match.winner === player).length;
    }
    return null;
  },
  totalTies: () => get().matches.filter((match) => match.tie).length,
  totalLosses: (player) => {
    if (player) {
      return get().matches.filter(
        (match) => match.winner !== player && !match.tie
      ).length;
    }
    return null;
  },
});

const useMatchStore = create<MatchStore>()(
  devtools(
    persist(immer(handleMatchStore), {
      name: "tic-tac-toe-record",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useMatchStore;
