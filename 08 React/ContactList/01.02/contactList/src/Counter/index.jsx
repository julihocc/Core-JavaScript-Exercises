import React, { useState, useEffect } from "react";
import useSerializable from "../Serializable";

function Counter({ id }) {
  const [storedState, setStoredState] = useSerializable(id, () => ({
    count: 0,
  }));

  const handleIncrement = () => {
    setStoredState({ count: storedState.count + 1 });
  };

  const handleDecrement = () => {
    setStoredState({ count: storedState.count - 1 });
  };

  // Error handling
  if (storedState.count < 0) {
    throw new Error("Negative count!");
  }

  return (
    <div>
      <p>{storedState.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
