type Match = {
  winner: Player | null;
  tie: boolean;
  startTime: DateAsNumber | null;
  endTime: DateAsNumber | null;
  length: number 
};

type MatchState = {
  matches: Match[];
};

type MatchAction = {
  addMatch: (Match: Match) => void;
  resetMatches: () => void;
  totalWins: (player: Player | null) => number | null;
  totalTies: () => number;
  totalLosses: (player: Player | null) => number | null;
};

type MatchStore = MatchState & MatchAction;
