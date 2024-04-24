import { useState, useRef } from "react";
import AnimatedCounter from "../AnimatedCounter";
import styles from "./CounterApp.module.css";

export default function CounterApp() {
  // const [inputValue, setInputValue] = useState("");
  const [isValidField, setIsValidField] = useState(false);
  const [count, setCount] = useState(0);
  const inputValue = useRef("");
  const inputRef = useRef(null);
  const errorMsgRef = useRef(null);

  function onInputChange({ target }) {
    // setInputValue(target.value);
    inputValue.current = target.value;
    const isValid = validation(target.value);
    if (isValid !== isValidField) {
      setIsValidField(isValid);
      if (isValid) {
        inputRef.current.classList.add(styles.valid);
        errorMsgRef.current.classList.add(styles.hide);
      } else {
        inputRef.current.classList.remove(styles.valid);
        errorMsgRef.current.classList.remove(styles.hide);
      }
    }
  }

  function validation(value) {
    return value.length > 0 && value.length < 10;
  }

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.appCounter}>
      <input
        ref={inputRef}
        // className={validation(inputValue) ? styles.valid : styles.invalid}
        className={styles.input}
        // value={inputValue}
        type="text"
        onChange={onInputChange}
      />
      <div ref={errorMsgRef} className={styles.msg}>
        {" "}
        INVALID INPUT
      </div>
      <AnimatedCounter value={count} />
      <button onClick={handleOnClick}>Increment</button>
    </div>
  );
}
