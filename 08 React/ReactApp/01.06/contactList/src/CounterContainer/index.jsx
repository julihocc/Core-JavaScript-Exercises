import { useEffect } from "react";
import Counter from "../Counter";
import useSerializable from "../Serializable";

const LOCAL_STORAGE_KEY = "counters";

function counterReducer(state, action) {
  switch (action.type) {
    case "ADD_COUNTER":
      return [...state, 0];
    case "SET_COUNTERS":
      return action.payload;
    case "UPDATE_COUNTER":
      return state.map((count, index) =>
        index === action.index ? action.payload : count
      );
    default:
      return state;
  }
}

function CounterContainer() {
  const [counters, setCounters] = useSerializable(LOCAL_STORAGE_KEY, () =>
    counterReducer([], { type: "SET_COUNTERS", payload: [] })
  );

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(counters));
  }, [counters]);

  const handleAddCounter = () => {
    setCounters([...counters, 0]);
    
  };

  const handleCounterChange = (index, newCount) => {
    setCounters(counters.map((count, i) => (i === index ? newCount : count)));
  };

  return (
    <div>
      {counters.map((count, index) => (
        <Counter
          key={`counter-${index}`}
          id={index}
          count={count}
          onChange={handleCounterChange}
        />
      ))}
      <hr />
      <button onClick={handleAddCounter}>Add Counter</button>
    </div>
  );
}

export default CounterContainer;
