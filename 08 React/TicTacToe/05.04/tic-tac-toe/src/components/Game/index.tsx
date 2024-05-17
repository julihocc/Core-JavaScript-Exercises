import CurrentPlayer from "../CurrentPlayer";
import { Flex } from "@radix-ui/themes";
import Move from "../Move";
import useGameStore from "../../stores/gameStore";
import Reset from "../Reset";
import Undo from "../Undo";

const Game = () => {
  const gameState = useGameStore((state) => state);
  const dispatch = useGameStore((state) => state.dispatch);

  const jumpTo = (step: Step) => {
    dispatch({ type: "JUMP_TO", step });
  };

  const moves = gameState
    ? gameState.history.map((_, move) => {
        const description = move ? "Go to move #" + move : "Go to game start";
        return (
          <Move
            key={`move-${move}`}
            description={description}
            onClick={() => jumpTo(move as Step)}
            isActive={gameState.activeStep === move}
          />
        );
      })
    : [];

  return (
    <Flex direction="column" justify="start" align="center" gapY="2" p="5">
      {gameState && (
        <>
          <CurrentPlayer />
          <Flex direction="column">{moves}</Flex>
          <Reset />
          <Undo />
        </>
      )}
    </Flex>
  );
};

export default Game;
