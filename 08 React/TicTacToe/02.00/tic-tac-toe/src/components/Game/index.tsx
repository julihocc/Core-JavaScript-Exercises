import { useEffect, useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../utils/calculateWinner";
import History from "../History";
import { useGameState, useDispatch } from "../Context";
import { Flex } from "@radix-ui/themes";
import Move from "../Move";

const Game = () => {
  // const [state, dispatch] = useReducer(gameReducer, initialState);
  const [winner, setWinner] = useState<string | null>(null);
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
    const current = gameState && gameState.history[gameState.stepNumber];
    const _winner = current && calculateWinner(current.squares);
    setWinner(_winner);
    console.log("winner", winner);
  }, [gameState, winner]);

  useEffect(() => {
    if (winner) {
      if (dispatch) {
        dispatch({ type: "SET_GAME_STATUS", winner: `Winner: ${winner}` });
      }
    }
  }, [winner, dispatch]);

  const moves = gameState
    ? gameState.history.map((_, move) => {
        const description = move ? "Go to move #" + move : "Go to game start";
        return (
          <Move
            key={`move-${move}`}
            description={description}
            onClick={() => jumpTo(move as Step)}
          />
        );
      })
    : [];

  return (
    <>
      <Flex direction="column" align="center" gapY="2">
        {gameState && (
          <>
            <Board
              squares={gameState.history[gameState.stepNumber].squares}
              onClick={(i) => handleClick(i)}
            />
            <History />
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
