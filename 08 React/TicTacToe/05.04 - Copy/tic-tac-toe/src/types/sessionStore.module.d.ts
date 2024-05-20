type SessionStore = {
  theme: Theme;
  player: Player | null;
  welcome: boolean;
  setTheme: (theme: Theme) => void;
  setPlayer: (player: Player) => void;
  setWelcome: () => void;
};
