import styles from "./Switch.module.css";
import { useState } from "react";

function CustomSwitch({ onChange }) {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange && onChange();
  };

  return (
    <div className={styles.customSwitch} onClick={toggleSwitch}>
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <span className={styles.customSwitchSlider}></span>
    </div>
  );
}

export default CustomSwitch;
