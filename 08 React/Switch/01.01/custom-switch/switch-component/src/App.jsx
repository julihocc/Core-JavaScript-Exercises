// import CustomSwitch from "./components/CustomSwitch";
import CustomSwitchContainer from "./components/CustomSwitchContainer";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      <CustomSwitchContainer />
    </div>
  );
}

export default App;
