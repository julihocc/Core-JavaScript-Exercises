type Match = {
  winner: Player | null;
  tie: boolean;
  startTime: DateAsNumber | null;
  endTime: DateAsNumber | null;
};

type MatchState = {
  matches: Match[];
};

type MatchAction = {
  addMatch: (Match: Match) => void;
  resetMatches: () => void;
};

type MatchStore = MatchState & MatchAction;
