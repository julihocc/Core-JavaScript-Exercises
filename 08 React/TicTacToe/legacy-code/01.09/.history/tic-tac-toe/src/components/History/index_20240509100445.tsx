import { useGameState } from "../Context";
import { FC } from "react";
import { Button, Heading, Flex } from "@radix-ui/themes";

const History: FC<HistoryProps> = ({ moves }) => {
  const gameState = useGameState();
  const gameStatus = gameState ? gameState.gameStatus : null;

  return (
    // <div>
    //   {/* <div>{gameStatus}</div> */}
    //   {gameStatus && <div>{gameStatus}</div>}
    //   <ol>{moves}</ol>
    // </div>
    <Button>
      <Heading as="h3" >
        {gameStatus}
      </Heading>
      <Flex as="ol" direction="column" gap="1">
        {moves}
        
    </Button>

  );
};

export default History;
