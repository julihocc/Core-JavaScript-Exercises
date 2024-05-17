import { create, StateCreator } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const handleSessionStore: StateCreator<
  SessionStore,
  [
    ["zustand/immer", never],
    ["zustand/persist", unknown],
    ["zustand/devtools", never]
  ]
> = (set) => ({
  theme: "light",
  player: null,
  welcome: true,
  setTheme: (theme) =>
    set(
      (state) => {
        state.theme = theme;
        return state;
      },
      false,
      "setTheme"
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
  setWelcome: () => set({ welcome: false }),
});

const useSessionStore = create<SessionStore>()(
  devtools(
    persist(immer(handleSessionStore), {
      name: "tic-tac-toe-theme",
      storage: createJSONStorage(() => sessionStorage),
    })
  )
);

export default useSessionStore;
