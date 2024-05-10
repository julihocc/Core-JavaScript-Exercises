import { calculateWinner } from "../utils/calculateWinner";

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
      const xIsNext = !state.xIsNext;
      const gameStatus = `Next player: ${xIsNext ? "X" : "O"}`;
      const activeIndex = history.length as Index;
      return {
        ...state,
        history: [...history, { squares }],
        stepNumber: state.stepNumber + 1,
        xIsNext,
        gameStatus,
        activeIndex,
      } as GameState;
    }
    case "JUMP_TO": {
      const output = {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
        activeIndex: action.step,
      };
      return output as GameState;
    }
    case "SET_GAME_STATUS": {
      const winner = action.winner;
      const output = {
        ...state,
        gameStatus: winner
          ? `Winner: ${winner}`
          : `Next player: ${state.xIsNext ? "X" : "O"}`,
      };
      return output as GameState;
    }
    case "RESET": {
      return {
        ...state,
        history: [{ squares: Array(9).fill(null) }],
        stepNumber: 0,
        xIsNext: true,
        gameStatus: "Next player: X",
      };
    }
    case "UNDO": {
      const output = {
        ...state,
        // history: state.history.slice(0, state.stepNumber),
        history:
          state.stepNumber === 0
            ? [{ squares: Array(9).fill(null) }]
            : state.history.slice(0, state.stepNumber),
        stepNumber: state.stepNumber > 0 ? state.stepNumber - 1 : 0,
        xIsNext: !state.xIsNext,
        gameStatus: `Next player: ${!state.xIsNext ? "X" : "O"}`,
        activeIndex: state.stepNumber - 1,
      };
      return output as GameState;
    }
    default:
      return state;
  }
};

export default gameReducer;
