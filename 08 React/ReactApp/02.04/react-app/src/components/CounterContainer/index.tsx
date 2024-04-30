import { useEffect } from "react";
import { Counter } from "../Counter";
import { useSerializable } from "../../hooks/useSerializable";

const LOCAL_STORAGE_KEY: Key = "counters";

function counterReducer(state: CounterReducerState, action: ActionOnCounter) {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, 0];
    case "SET_COUNTERS":
      return action.payload;
    case "UPDATE_COUNTER":
      return state.map((count: Count, index: Index) =>
        index === action.index ? action.payload : count
      );
    default:
      return state;
  }
}

export function CounterContainer() {
  const [counters, setCounters] = useSerializable(LOCAL_STORAGE_KEY, () =>
    counterReducer([], {
      type: "SET_COUNTERS" as ActionOnCounterType.SET_COUNTERS,
      payload: [],
    })
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  const handleAddCounter = () => {
    setCounters([...counters, 0]);
  };

  const handleCounterChange = (index: Index, newCount: Count) => {
    setCounters(
      counters.map((count: Count, i: Index) => (i === index ? newCount : count))
    );
  };

  return (
    <div className="container mt-3">
      {counters.map((count: Count, index: Index) => (
        <Counter
          key={`counter-${index}`}
          index={index}
          count={count}
          onChange={handleCounterChange}
        />
      ))}
      <hr />
      <button onClick={handleAddCounter} className="btn btn-primary">
        Add Counter
      </button>
    </div>
  );
}
