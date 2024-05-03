import styles from "./Switch.module.css";
import { useState } from "react";

function CustomSwitch({ onChange, leftIcon = false, rightIcon = false }) {
  const [checked, setChecked] = useState(false);
  console.log("leftIcon: ", leftIcon);
  console.log("rightIcon: ", rightIcon);
  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange && onChange();
  };

  return (
    <div
      className={`${styles.customSwitch}
      ${rightIcon ? styles.right : ""}`}
      onClick={toggleSwitch}
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
