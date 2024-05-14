import Board from "../Board";
import CurrentPlayer from "../CurrentPlayer";
import { Flex, Box, Heading } from "@radix-ui/themes";
import Move from "../Move";
import { useGameStore } from "../../store";
import Reset from "../Reset";
import Undo from "../Undo";
import EndGame from "../GameOver";

const Game = () => {
  // const [state, dispatch] = useReducer(gameReducer, initialState);
  const gameState = useGameStore((state) => state);
  // console.log("gameState", gameState);
  // const dispatch = useStore((state) => state.dispatch);
  const dispatch = useGameStore((state) => state.dispatch);

  const clickOnSquare = (index: Index) => {
    dispatch({ type: "CLICK_ON_SQUARE", index: index });
  };

  const jumpTo = (step: Step) => {
    // if (dispatch) {
    //   dispatch({ type: "JUMP_TO", step });
    // }
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
            <Box>
              <Heading size="9" as="h1">
                Tic Tac Toe
              </Heading>
            </Box>
            <Flex gap="2">
              <Reset />
              <Undo />
            </Flex>
            <Board
              squares={gameState.history[gameState.activeStep].squares}
              onClick={(i) => clickOnSquare(i)}
            />{" "}
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
