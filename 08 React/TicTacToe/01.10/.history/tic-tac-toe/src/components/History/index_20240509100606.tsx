import { useGameState } from "../Context";
import { FC } from "react";
import { Button, Heading, Flex, Container } from "@radix-ui/themes";

const History: FC<HistoryProps> = ({ moves }) => {
  const gameState = useGameState();
  const gameStatus = gameState ? gameState.gameStatus : null;

  return (
    // <div>
    //   {/* <div>{gameStatus}</div> */}
    //   {gameStatus && <div>{gameStatus}</div>}
    //   <ol>{moves}</ol>
    // </div>
    <Container>
      <Heading as="h3" >
        {gameStatus}
      </Heading>
      <Flex direction="column" gap="3">
        {moves}
      </Flex>
    </Container>


  );
};

export default History;
