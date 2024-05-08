import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import CustomSwitch from "../CustomSwitch";

function CustomSwitchContainer() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <CustomSwitch onChange={toggleTheme} rightIcon={"/cart.svg"} />
    </div>
  );
}

export default CustomSwitchContainer;
