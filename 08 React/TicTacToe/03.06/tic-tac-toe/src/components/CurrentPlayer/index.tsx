// import { useGameState } from "../Context";
// import { FC } from "react";
import { useGameStore } from "../../store";
import { Heading, Container, Box } from "@radix-ui/themes";

const CurrentPlayer = () => {
  // const gameState = useGameState();
  const gameState = useGameStore((state) => state);
  const currentPlayer = gameState.currentPlayer;
  const winner = gameState.winner;
  const tie = useGameStore((state) => state.tie);
  let forRender = null;

  if (currentPlayer !== null) {
    forRender = () => (
      <Heading as="h3">
        Waiting for:{" "}
        {currentPlayer === 0
          ? gameState.iconPlayer0()
          : gameState.iconPlayer1()}
      </Heading>
    );
  }

  if (winner !== null || tie !== null) {
    forRender = () => <Heading as="h3">Game over</Heading>;
  }

  return (
    <Box>
      <Container size="1">{forRender()}</Container>
    </Box>
  );
};

export default CurrentPlayer;
