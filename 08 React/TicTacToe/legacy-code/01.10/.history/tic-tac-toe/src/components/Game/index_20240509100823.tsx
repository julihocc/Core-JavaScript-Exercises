import styles from "./Game.module.css";
import { useEffect } from "react";
import Board from "../Board";
import { calculateWinner } from "../../utils/calculateWinner";
import History from "../History";
import { useGameState, useDispatch } from "../Context";
import { Button, Flex, Container } from "@radix-ui/themes";

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

    if (winner) {
      // gameStatus = "Winner: " + winner;
      // setGameStatus("Winner: " + winner);
      dispatch({ type: "SET_GAME_STATUS", winner });
    } else {
      // gameStatus = "Next player: " + (state.xIsNext ? "X" : "O");
      // setGameStatus("Next player: " + (state.xIsNext ? "X" : "O"));
      dispatch({ type: "SET_GAME_STATUS", winner });
    }
  }, [gameState, dispatch]);

  const moves = gameState
    ? gameState.history.map((_, move) => {
        const description = move ? "Go to move #" + move : "Go to game start";
        return (
          // <li key={move}>
          //   <button onClick={() => jumpTo(move as Step)}>{description}</button>
          // </li>
          <Button key={move} onClick={() => jumpTo(move as Step)}>
            {description}
          </Button>
        );
      })
    : [];

  return (
    <>
      {/* <div className={`${styles.game}`}>
        {gameState && (
          <>
            <div className={`${styles.gameBoard}`}>
              <Board
                squares={gameState.history[gameState.stepNumber].squares}
                onClick={(i) => handleClick(i)}
              />
            </div>
            <div className={`${styles.gameInfo}`}>
              <History moves={moves} />
            </div>
          </>
        )}
      </div> */}
      <Container>      
        <Flex>
        {gameState && (
          <>
            <Board
              squares={gameState.history[gameState.stepNumber].squares}
              onClick={(i) => handleClick(i)}
            />
            <History moves={moves} />
          </>
        )}
      </Flex>
      </Container>

    </>
  );
};

export default Game;
