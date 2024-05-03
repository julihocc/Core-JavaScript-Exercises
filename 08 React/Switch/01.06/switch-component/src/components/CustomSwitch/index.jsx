import styles from "./Switch.module.css";
import { useState } from "react";

function CustomSwitch({ onChange, left = false, right = false }) {
  const [checked, setChecked] = useState(false);
  console.log("left: ", left);
  console.log("right: ", right);
  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange && onChange();
  };

  return (
    <div
      className={`${styles.customSwitch}
      ${right ? styles.right : ""}`}
      onClick={toggleSwitch}
    >
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <span
        className={`${styles.customSwitchSlider} 
       ${left ? styles.left : ""}`}
      ></span>
    </div>
  );
}

export default CustomSwitch;
