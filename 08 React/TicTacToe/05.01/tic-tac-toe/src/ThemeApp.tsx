import "@radix-ui/themes/styles.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import { useThemeStore } from "./stores/themeStore";

const ThemeApp = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Theme
      appearance={theme}
      accentColor="crimson"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <App />
    </Theme>
  );
};

export default ThemeApp;
