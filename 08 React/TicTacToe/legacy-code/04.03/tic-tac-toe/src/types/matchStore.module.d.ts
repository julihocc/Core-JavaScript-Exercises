type Match = {
  winner: Player | null;
  tie: boolean;
  startTime: DateAsNumber | null;
  endTime: DateAsNumber | null;
};

type MatchState = {
  player: Player | null;
  matches: Match[];
};

type MatchAction = {
  addMatch: (Match: Match) => void;
  setPlayer: (player: Player) => void;
};

type MatchStore = MatchState & MatchAction;
