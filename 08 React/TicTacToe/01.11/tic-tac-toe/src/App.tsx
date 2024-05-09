import GameContainer from "./components/GameContainer";
import { Flex, Container, Heading, Box } from "@radix-ui/themes";

function App() {
  return (
    <>
      <Container>
        <Flex direction="column" gap="3" align="center">
          <Box>
            <Heading size="9" as="h1">
              TicTac Toe 1.0
            </Heading>
          </Box>
          <Box>
            <GameContainer />
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;
