import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import Title from "./components/Title";
import { Flex, Grid } from "@radix-ui/themes";
import Stats from "./components/Stats";
import Board from "./components/Board";
import { Theme } from "@radix-ui/themes";
import { useThemeStore } from "./stores/themeStore";

function App() {
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
      <WelcomeScreen />
      <Flex direction="column" justify="center" align="center">
        <Title />
        <Grid columns="3" width="auto">
          <Board />
          <Game />
          <Stats />
        </Grid>
      </Flex>
    </Theme>
  );
}

export default App;
