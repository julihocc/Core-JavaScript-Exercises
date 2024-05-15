import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const handleMatchStore: StateCreator<
  MatchStore,
  [
    ["zustand/immer", never],
    ["zustand/persist", unknown],
    ["zustand/devtools", never]
  ]
> = (set) => ({
  player: null,
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
  setPlayer: (player) =>
    set(
      (state) => {
        state.player = player;
        return state;
      },
      false,
      "setPlayer"
    ),
});

const useMatchStore = create<MatchStore>()(
  devtools(persist(immer(handleMatchStore), { name: "tic-tac-toe-record" }))
);

export default useMatchStore;
