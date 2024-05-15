import Board from "../Board";
import CurrentPlayer from "../CurrentPlayer";
import { Flex } from "@radix-ui/themes";
import Move from "../Move";
import { useGameStore } from "../../stores/gameStore";
import Reset from "../Reset";
import Undo from "../Undo";
import EndGame from "../GameOver";

const Game = () => { 
  const gameState = useGameStore((state) => state); 
  const dispatch = useGameStore((state) => state.dispatch);

  const clickOnSquare = (index: Index) => {
    dispatch({ type: "CLICK_ON_SQUARE", index: index });
  };

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
    <>
      <EndGame />
      <Flex direction="column" align="center" gapY="2">
        {gameState && (
          <>
            <Board
              squares={gameState.history[gameState.activeStep].squares}
              onClick={(i) => clickOnSquare(i)}
            />
            <Flex gap="2">
              <Reset />
              <Undo />
            </Flex>
            <CurrentPlayer />
            <Flex direction="column" gapY="1" align="center">
              {moves}
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};

export default Game;
