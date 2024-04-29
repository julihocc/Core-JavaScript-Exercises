import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import CustomSwitch from "../CustomSwitch"; // podriamos reemplazarla por otro switch de otra libreria

function CustomSwitchContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>{theme.label}</h1>
      <CustomSwitch
        label="Toggle Theme"
        onChange={() => {
          // console.log("Hi");
          console.log(toggleTheme());
        }}
      />
    </div>
  );
}

export default CustomSwitchContainer;
