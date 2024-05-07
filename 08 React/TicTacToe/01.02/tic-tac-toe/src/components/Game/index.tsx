import styles from "./Game.module.css";
import { useReducer, useEffect, useState } from "react";
import Board from "../Board";

const initialState: GameState = {
  history: [{ squares: Array(9).fill(null) }],
  stepNumber: 0,
  xIsNext: true,
};

const gameReducer = (state: GameState, action: Action) => {
  switch (action.type) {
    case "HANDLE_CLICK": {
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[action.index]) {
        return state;
      }
      squares[action.index] = state.xIsNext ? "X" : "O";
      return {
        history: history.concat([{ squares }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
      };
    }
    case "JUMP_TO": {
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
      };
    }
    default:
      return state;
  }
};

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [gameStatus, setGameStatus] = useState("Next player: X" as string);

  const handleClick = (index: Index) => {
    dispatch({ type: "HANDLE_CLICK", index: index });
  };

  const jumpTo = (step: number) => {
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
        <button onClick={() => jumpTo(move)}>{description}</button>
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

export default Game;
