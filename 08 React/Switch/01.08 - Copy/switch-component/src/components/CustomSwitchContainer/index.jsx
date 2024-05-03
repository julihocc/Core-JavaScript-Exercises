import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import CustomSwitch from "../CustomSwitch";

function CustomSwitchContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>{theme.label}</h1>
      <CustomSwitch
        onChange={toggleTheme}
        leftIcon={"./erase.svg"}
        rightIcon={"/cart.svg"}
      />
    </div>
  );
}

export default CustomSwitchContainer;
