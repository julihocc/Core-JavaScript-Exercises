import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import Header from "./components/Header";
import { Flex, Grid } from "@radix-ui/themes";
import Stats from "./components/Stats";
import Board from "./components/Board";
import { Theme } from "@radix-ui/themes";
import { useSessionStore } from "./stores/sessionStore";

function App() {
  const theme = useSessionStore((state) => state.theme);
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
        <Header />
        <Grid columns="3" width="auto">
          <Game />
          <Board />
          <Stats />
        </Grid>
      </Flex>
    </Theme>
  );
}

export default App;
