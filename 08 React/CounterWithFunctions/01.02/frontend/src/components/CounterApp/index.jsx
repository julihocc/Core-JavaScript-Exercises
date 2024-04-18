import { useState } from "react";
import Counter from "../Counter";

// Refactor to functional component
export default function CounterApp() {
  // const [counts] = useCounterContext();
  // console.log("counts", counts);
  const [inputValue, setInputValue] = useState("");

  function handleOnChangeInput(event) {
    const { target } = event;
    setInputValue(target.value);
  }
  return (
    <>
      <input value={inputValue} onChange={handleOnChangeInput} type="text" />
      <Counter init={inputValue} index={0} />
      <Counter init={inputValue} index={1} />
      <Counter init={inputValue} index={2} />
    </>
  );
}
