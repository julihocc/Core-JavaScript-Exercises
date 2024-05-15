import { useGameState } from "../Context";
import { FC } from "react";
import { Heading, Flex, Container, Box } from "@radix-ui/themes";

const History: FC<HistoryProps> = ({ moves }) => {
  const gameState = useGameState();
  const gameStatus = gameState ? gameState.gameStatus : null;

  return (
    // <div>
    //   {/* <div>{gameStatus}</div> */}
    //   {gameStatus && <div>{gameStatus}</div>}
    //   <ol>{moves}</ol>
    // </div>
    <Box>
      <Container size="1">
        <Heading as="h3">{gameStatus}</Heading>
        <Flex direction="column" gap="3">
          {moves}
        </Flex>
      </Container>
    </Box>
  );
};

export default History;
