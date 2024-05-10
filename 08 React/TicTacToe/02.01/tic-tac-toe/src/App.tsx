import Game from "./components/Game";
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
            <Game />
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;
