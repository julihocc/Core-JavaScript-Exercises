import { useState, memo, useCallback } from "react";
import Counter from "../Counter";

// Refactor to functional component
export default function CounterApp() {
  // const [counts] = useCounterContext();
  // console.log("counts", counts);
  const MemoCounter = memo(Counter);
  const [inputValue, setInputValue] = useState("");

  // function handleOnChangeInput(event) {
  //   const { target } = event;
  //   setInputValue(target.value);
  // }

  const handleOnChangeInput = useCallback((event) => {
    const { target } = event;
    setInputValue(target.value);
  }, []);

  return (
    <>
      <input value={inputValue} onChange={handleOnChangeInput} type="text" />
      <MemoCounter init={inputValue} index={0} />
      <MemoCounter init={inputValue} index={1} />
      <MemoCounter init={inputValue} index={2} />
    </>
  );
}
