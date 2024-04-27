import styles from "./Switch.module.css"; // Import CSS for styling
import { useState } from "react"; // Import useState hook

function CustomSwitch({ onChange, ...otherProps }) {
  const [checked, setChecked] = useState(false); // Add state for checked value

  const toggleSwitch = () => {
    setChecked((prevChecked) => !prevChecked); // Toggle checked value
    onChange && onChange(); // Call onChange prop if provided
  };

  return (
    <div className={styles.customSwitch} onClick={toggleSwitch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}} // Prevent default behavior
        {...otherProps}
      />
      <span className={styles.customSwitchSlider}></span>
    </div>
  );
}

export default CustomSwitch;
