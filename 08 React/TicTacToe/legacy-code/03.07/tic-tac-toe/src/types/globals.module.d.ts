// globals

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Chip = 0 | 1 | null;
type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Player = 0 | 1;
type DateAsNumber = number;

type Record = {
  winner: Player | null;
  draft: boolean;
};

type RecordState = {
  player: Player | null;
  records: Record[];
  initTime: DateAsNumber | null;
  endTime: DateAsNumber | null;
};

type RecordAction = {
  addRecord: (record: Record) => void;
  setPlayer: (player: Player) => void;
  setInitTime: (time: DateAsNumber) => void;
  setEndTime: (time: DateAsNumber) => void;
};

type RecordStore = RecordState & RecordAction;
