import { useState } from "react";
import Counter from "../Counter";
import { useCounterContext } from "../../state";

// Refactor to functional component
export default function CounterApp() {
  const [counts] = useCounterContext();
  console.log("counts", counts);
  const [inputValue, setInputValue] = useState("");

  function handleOnChangeInput(event) {
    const { target } = event;
    setInputValue(target.value);
  }
  return (
    <>
      <input value={inputValue} onChange={handleOnChangeInput} type="text" />

      {counts.map((count, index) => (
        <Counter key={index} init={inputValue} count={0} index={index} />
      ))}
    </>
  );
}
