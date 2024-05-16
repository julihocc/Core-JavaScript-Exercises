import create from "zustand";

type ThemeStore = {
  theme: "light" | "inherit" | "dark" | undefined;
  setTheme: (theme: string) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
