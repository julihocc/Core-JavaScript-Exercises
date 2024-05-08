import styles from "./GamePresenter.module.css";
import { useReducer, useEffect, useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../utils/calculateWinner";

const GamePresenter = ({ gameReducer, initialState }: GamePresenterProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [gameStatus, setGameStatus] = useState("Next player: X" as string);

  const handleClick = (index: Index) => {
    dispatch({ type: "HANDLE_CLICK", index: index });
  };

  const jumpTo = (step: Step) => {
    dispatch({ type: "JUMP_TO", step });
  };

  useEffect(() => {
    const current = state.history[state.stepNumber];
    const winner = calculateWinner(current.squares);

    if (winner) {
      // gameStatus = "Winner: " + winner;
      setGameStatus("Winner: " + winner);
    } else {
      // gameStatus = "Next player: " + (state.xIsNext ? "X" : "O");
      setGameStatus("Next player: " + (state.xIsNext ? "X" : "O"));
    }
  }, [state.history, state.stepNumber, state.xIsNext]);

  const moves = state.history.map((_, move) => {
    const description = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move as Step)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <h1>Game</h1>
      <div className={`${styles.game}`}>
        <div className={`${styles.gameBoard}`}>
          <Board
            squares={state.history[state.stepNumber].squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div className={`${styles.gameInfo}`}>
          <div>{gameStatus}</div>
          <ol>{moves}</ol>
        </div>
      </div>{" "}
    </>
  );
};

export default GamePresenter;
