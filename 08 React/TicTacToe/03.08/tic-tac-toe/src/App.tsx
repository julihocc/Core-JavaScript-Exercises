import Game from "./components/Game";
import WelcomeScreen from "./components/WelcomeScreen";
import Title from "./components/Title";
import { Flex, Grid } from "@radix-ui/themes";

function App() {
  return (
    <>
      <WelcomeScreen />
      <Flex direction="column" justify="center" align="center">
        <Title />
        <Grid columns="2" width="auto">
          <Game />
        </Grid>
      </Flex>
    </>
  );
}

export default App;
