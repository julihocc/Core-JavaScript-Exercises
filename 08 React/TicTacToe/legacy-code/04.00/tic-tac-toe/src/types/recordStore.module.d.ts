type Record = {
  winner: Player | null;
  tie: boolean;
  startTime: DateAsNumber;
  endTime: DateAsNumber;
};

type RecordState = {
  player: Player | null;
  records: Record[];
};

type RecordAction = {
  addRecord: (record: Record) => void;
  setPlayer: (player: Player) => void;
};

type RecordStore = RecordState & RecordAction;
