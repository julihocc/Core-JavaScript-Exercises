import React, { useState } from "react";
import Counter from "../Counter";

function CounterContainer() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const handleAddCounter = () => {
    setCounters([...counters, 0]); // Add a new counter with initial value 0
  };

  return (
    <div>
      {counters.map((count, index) => (
        <Counter key={`counter-${index}`} id={`counter-${index}`} />
      ))}
      <hr />
      <button onClick={handleAddCounter}>Add Counter</button>
    </div>
  );
}

export default CounterContainer;
