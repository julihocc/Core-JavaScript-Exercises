import styles from "./Switch.module.css";
import { useState, useRef, useEffect, useCallback } from "react";

function CustomSwitch({ onChange, leftIcon = null, rightIcon = null }) {
  const [checked, setChecked] = useState(() => {
    const localChecked = localStorage.getItem("checked");
    return localChecked ? JSON.parse(localChecked) : false;
  });

  const switchLeftRef = useRef(leftIcon);
  const switchRightRef = useRef(rightIcon);

  console.log("leftIcon: ", leftIcon);
  console.log("rightIcon: ", rightIcon);

  const _toggleSwitch = () => {
    console.log("toggleSwitch");
    setChecked((prevChecked) => !prevChecked);
    onChange && onChange();
  };

  const toggleSwitch = useCallback(_toggleSwitch, [setChecked, onChange]);

  useEffect(() => {
    console.log("checked: ", checked);
    localStorage.setItem("checked", checked);
  }, [checked]);

  useEffect(() => {
    if (switchLeftRef.current) {
      switchLeftRef.current.style.setProperty(
        "--image-left-path",
        `url(${leftIcon})`
      );
    }
  }, [leftIcon]);

  useEffect(() => {
    if (switchRightRef.current) {
      switchRightRef.current.style.setProperty(
        "--image-right-path",
        `url(${rightIcon})`
      );
    }
  }, [rightIcon]);

  return (
    <div
      className={`${styles.customSwitch}
      ${rightIcon ? styles.right : ""}`}
      onClick={toggleSwitch}
      ref={switchRightRef}
    >
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <span
        className={`${styles.customSwitchSlider} 
       ${leftIcon ? styles.left : ""}`}
        ref={switchLeftRef}
      ></span>
    </div>
  );
}

export default CustomSwitch;
