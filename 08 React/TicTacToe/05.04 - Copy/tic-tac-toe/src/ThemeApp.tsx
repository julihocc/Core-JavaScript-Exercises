import "@radix-ui/themes/styles.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import useSessionStore from "./stores/sessionStore";
import WelcomeScreen from "./components/WelcomeScreen";

const ThemeApp = () => {
  const theme = useSessionStore((state) => state.theme);
  return (
    <Theme
      appearance={theme}
      accentColor="iris"
      grayColor="gray"
      panelBackground="translucent"
      scaling="100%"
      radius="full"
    >
      <WelcomeScreen />
      <App />
    </Theme>
  );
};

export default ThemeApp;
