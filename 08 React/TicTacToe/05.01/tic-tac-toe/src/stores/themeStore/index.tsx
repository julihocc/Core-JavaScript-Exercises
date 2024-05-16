import { create } from "zustand";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme: Theme) => set({ theme }),
}));
