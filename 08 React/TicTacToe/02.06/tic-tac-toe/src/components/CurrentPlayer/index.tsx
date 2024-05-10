// import { useGameState } from "../Context";
// import { FC } from "react";
import { useGameStore } from "../../store";
import { Heading, Container, Box } from "@radix-ui/themes";

const CurrentPlayer = () => {
  // const gameState = useGameState();
  const gameState = useGameStore((state) => state);
  const currentPlayer = gameState.currentPlayer;
  const winner = gameState.winner;

  return (
    // <div>
    //   {/* <div>{gameStatus}</div> */}
    //   {gameStatus && <div>{gameStatus}</div>}
    //   <ol>{moves}</ol>
    // </div>
    <Box>
      <Container size="1">
        <Heading as="h3">
          {winner
            ? `Winner: ${winner}`
            : `Now playing ${currentPlayer === 0 ? "X" : "0"}...`}
        </Heading>
      </Container>
    </Box>
  );
};

export default CurrentPlayer;
