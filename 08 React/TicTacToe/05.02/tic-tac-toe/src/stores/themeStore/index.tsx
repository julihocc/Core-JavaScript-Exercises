import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// export const useThemeStore = create<ThemeStore>((set) => ({
//   theme: "light",
//   setTheme: (theme: Theme) => set({ theme }),
// }));

const handleThemeStore: StateCreator<
  ThemeStore,
  [
    ["zustand/immer", never],
    ["zustand/persist", unknown],
    ["zustand/devtools", never]
  ]
> = (set) => ({
  theme: "light",
  setTheme: (theme) =>
    set(
      (state) => {
        state.theme = theme;
        return state;
      },
      false,
      "setTheme"
    ),
});

export const useThemeStore = create<ThemeStore>()(
  devtools(persist(immer(handleThemeStore), { name: "tic-tac-toe-theme" }))
);
