// let count = 0; // dunno this
// import { useState } from "react";
import { useCounterContext } from "../../state";
export default function Counter({ init, index  }) {
  // const [count, setCount] = useState(0);
  const count = useCounterContext()[index];
  function addHandler() {
    // count++;
    // setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      <h1>Hello {init}</h1>
      <h2>{count}</h2>
      <button onClick={addHandler}>Add</button>
    </div>
  );
}
