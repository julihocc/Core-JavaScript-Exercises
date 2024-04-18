// let count = 0; // dunno this
// import { useState } from "react";

export default function Counter({ init, count, setCount }) {
  // const [count, setCount] = useState(0);
  function addHandler() {
    // count++;
    setCount(count + 1);
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
