import GameContainer from "./components/GameContainer";
import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
      <div className="h1">Tic Tac Toe 1.0</div>
      <GameContainer />
    </>
  );
}

export default App;
