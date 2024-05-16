import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import Title from "./components/Title";
import { Flex, Grid } from "@radix-ui/themes";
import Stats from "./components/Stats";
import Board from "./components/Board";

function App() {
  return (
    <>
      <WelcomeScreen />
      <Flex direction="column" justify="center" align="center">
        <Title />
        <Grid columns="3" width="auto">
          <Board />
          <Game />
          <Stats />
        </Grid>
      </Flex>
    </>
  );
}

export default App;
