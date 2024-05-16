import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const handleRecordStore: StateCreator<
  RecordStore,
  [
    ["zustand/immer", never],
    ["zustand/persist", unknown],
    ["zustand/devtools", never]
  ]
> = (set) => ({
  player: null,
  records: [],
  addRecord: (record) =>
    set(
      (state) => {
        state.records.push(record);
        return state;
      },
      false,
      "addRecord"
    ),
  setPlayer: (player) =>
    set(
      (state) => {
        state.player = player;
        return state;
      },
      false,
      "setPlayer"
    ),
});

const useRecordStore = create<RecordStore>()(
  devtools(persist(immer(handleRecordStore), { name: "tic-tac-toe-record" }))
);

export default useRecordStore;
