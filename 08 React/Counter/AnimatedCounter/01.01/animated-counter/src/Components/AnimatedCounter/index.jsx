import { useEffect, useState, useRef } from "react";
import styles from "./AnimatedCounter.module.css";

const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);
  const counterDisplayRef = useRef(null);
  const setTimeoutRef = useRef(null);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  useEffect(() => {
    if (displayValue !== value) {
      clearTimeout(setTimeoutRef.current);
      setIsAnimating(true);
      setTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        setDisplayValue(value);
      }, 500);
    }
    return () => clearTimeout(setTimeoutRef.current);
  }, [value, displayValue]);

  return (
    <>
      {/* <div className={styles.animatedDisplay}>{value}</div> */}
      <div
        ref={counterDisplayRef}
        className={`
        ${styles.animatedDisplay} 
        ${isAnimating ? styles.slidein : ""}
        `}
      >
        {displayValue}
      </div>
    </>
  );
};

export default AnimatedCounter;
