type Match = {
  winner: Player | null;
  tie: boolean;
  startTime: DateAsNumber | null;
  endTime: DateAsNumber | null;
};

type MatchState = {
  player: Player | null;
  matches: Match[];
  welcome: boolean;
};

type MatchAction = {
  addMatch: (Match: Match) => void;
  setPlayer: (player: Player) => void;
  setWelcome: () => void;
};

type MatchStore = MatchState & MatchAction;
