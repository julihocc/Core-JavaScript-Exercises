import { calculateWinner } from "../utils/calculateWinner";

const gameReducer: GameReducer = (state, action) => {
  const type = action.type;
  if (type === "HANDLE_CLICK") {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[action.index]) {
      return state;
    }
    squares[action.index] = state.xIsNext ? "X" : "O";
    state.xIsNext = !state.xIsNext;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
    state.activeIndex = history.length as Index;
    state.history = history.concat([{ squares }]);
  }
  if (type === "JUMP_TO") {
    state.stepNumber = action.step;
    state.xIsNext = action.step % 2 === 0;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }
  if (type === "SET_GAME_STATUS") {
    state.gameStatus = action.winner
      ? `Winner: ${action.winner}`
      : `Next player: ${state.xIsNext ? "X" : "O"}`;
  }
  if (type === "RESET") {
    state.history = [{ squares: Array(9).fill(null) }];
    state.stepNumber = 0;
    state.xIsNext = true;
    state.gameStatus = "Next player: X";
    state.activeIndex = null;
  }
  if (type === "UNDO") {
    state.history =
      state.stepNumber === 0
        ? [{ squares: Array(9).fill(null) }]
        : state.history.slice(0, state.stepNumber);
    state.stepNumber = Math.max(0, state.stepNumber - 1) as Step;
    state.xIsNext = !state.xIsNext;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
    state.activeIndex = (state.stepNumber - 1) as Index;
  }
  return state;
};

export default gameReducer;
