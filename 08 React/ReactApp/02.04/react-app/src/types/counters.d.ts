type CounterProps = {
  index: Index;
  count: Count;
  onChange: (index: Index, count: Count) => void;
};

type CounterReducerState = Count[];

enum ActionOnCounterType {
  ADD_COUNTER = "ADD_COUNTER",
  SET_COUNTERS = "SET_COUNTERS",
  UPDATE_COUNTER = "UPDATE_COUNTER",
}

interface IAddCounterAction {
  type: ActionOnCounterType.ADD_COUNTER;
}

interface ISetCountersAction {
  type: ActionOnCounterType.SET_COUNTERS;
  payload: Count[];
}

interface IUpdateCounterAction {
  type: ActionOnCounterType.UPDATE_COUNTER;
  index: Index;
  payload: Count;
}

type ActionOnCounter =
  | IAddCounterAction
  | ISetCountersAction
  | IUpdateCounterAction;

  
type CounterInitialState = () => CounterReducerState;
