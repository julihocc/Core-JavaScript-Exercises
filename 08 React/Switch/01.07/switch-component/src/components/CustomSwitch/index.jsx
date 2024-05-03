import styles from "./Switch.module.css";
import { useState, useRef, useEffect } from "react";

function CustomSwitch({ onChange, leftIcon = null, rightIcon = null }) {
  const [checked, setChecked] = useState(false);
  const switchRef = useRef(null);

  console.log("leftIcon: ", leftIcon);
  console.log("rightIcon: ", rightIcon);
  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange && onChange();
  };


  useEffect(() => {
    if (switchRef.current) {
      switchRef.current.style.setProperty(
        "--image-left-path",
        `url(${leftIcon})`
      );
    }
  }, [leftIcon]);

  return (
    <div
      className={`${styles.customSwitch}
      ${rightIcon ? styles.right : ""}`}
      onClick={toggleSwitch}
      ref={switchRef}
    >
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <span
        className={`${styles.customSwitchSlider} 
       ${leftIcon ? styles.left : ""}`}
      ></span>
    </div>
  );
}

export default CustomSwitch;
