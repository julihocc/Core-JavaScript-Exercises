import styles from "./Switch.module.css";
import { useState, useRef, useEffect } from "react";

function CustomSwitch({ onChange, leftIcon = null, rightIcon = null }: CustomSwitchProps) {
  const [checked, setChecked] = useState(false);
  const switchLeftRef = useRef<HTMLSpanElement>(null);
  const switchRightRef = useRef<HTMLDivElement>(null);

  console.log("leftIcon: ", leftIcon);
  console.log("rightIcon: ", rightIcon);

  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange && onChange();
  };

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
