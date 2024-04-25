// let count = 0; // dunno this
// import { useState } from "react";
import { useCallback } from "react";
import { useCounterContext } from "../../state";

const Counter = ({ init, index }) => {
  // const [count, setCount] = useState(0);
  const [counts, setCount] = useCounterContext();
  // function addHandler() {
  //   // count++;
  //   // setCount(count + 1);
  //   console.log(counts);
  //   setCount(index, counts[index] + 1);
  // }
  const addHandler = useCallback(() => {
    setCount(index, counts[index] + 1);
  }, [index, counts, setCount]);
  return (
    <div>
      <h1>Hello {init}</h1>
      <h2>{counts[index]}</h2>
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default Counter;
