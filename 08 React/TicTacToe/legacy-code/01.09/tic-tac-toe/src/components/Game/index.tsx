import { useEffect } from "react";
import Board from "../Board";
import { calculateWinner } from "../../utils/calculateWinner";
import History from "../History";
import { useGameState, useDispatch } from "../Context";
import { Button, Flex, Container, Box } from "@radix-ui/themes";

const Game = () => {
  // const [state, dispatch] = useReducer(gameReducer, initialState);
  const gameState = useGameState();
  const dispatch = useDispatch();

  const handleClick = (index: Index) => {
    if (dispatch) {
      dispatch({ type: "HANDLE_CLICK", index: index });
    }
  };

  const jumpTo = (step: Step) => {
    if (dispatch) {
      dispatch({ type: "JUMP_TO", step });
    }
  };

  useEffect(() => {
    if (!gameState || !dispatch) {
      return;
    }

    const current = gameState.history[gameState.stepNumber];
    const winner = calculateWinner(current.squares);

    dispatch({ type: "SET_GAME_STATUS", winner });
  }, [gameState, dispatch]);

  const moves = gameState
    ? gameState.history.map((_, move) => {
        const description = move ? "Go to move #" + move : "Go to game start";
        return (
          // <li key={move}>
          //   <button onClick={() => jumpTo(move as Step)}>{description}</button>
          // </li>
          <Box>
            <Button key={move} onClick={() => jumpTo(move as Step)}>
              {description}
            </Button>{" "}
          </Box>
        );
      })
    : [];

  return (
    <>
      <Flex direction="column">
        {gameState && (
          <>
            <Board
              squares={gameState.history[gameState.stepNumber].squares}
              onClick={(i) => handleClick(i)}
            />{" "}
            <Container size="1">
              <History moves={moves} />
            </Container>
          </>
        )}
      </Flex>
    </>
  );
};

export default Game;
