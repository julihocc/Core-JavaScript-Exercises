import GamePresenter from "../GamePresenter";
import { calculateWinner } from "../../utils/calculateWinner";

const GameContainer = () => {
  
  const initialState: GameState = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true,
  };

  const gameReducer: GameReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_CLICK": {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[action.index]) {
          return state;
        }
        squares[action.index] = state.xIsNext ? "X" : "O";
        const output = {
          history: history.concat([{ squares }]),
          stepNumber: history.length,
          xIsNext: !state.xIsNext,
        };
        return output as GameState;
      }
      case "JUMP_TO": {
        const output = {
          ...state,
          stepNumber: action.step,
          xIsNext: action.step % 2 === 0,
        };
        return output as GameState;
      }
      default:
        return state;
    }
  };

  return (
    <GamePresenter
      gameReducer={gameReducer}
      initialState={initialState}
    ></GamePresenter>
  );
};

export default GameContainer;
