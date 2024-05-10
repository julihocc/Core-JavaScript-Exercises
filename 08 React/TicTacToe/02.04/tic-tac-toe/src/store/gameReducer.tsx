import { calculateWinner } from "../utils/calculateWinner";

const gameReducer: GameReducer = (state, action) => {
  const type = action.type;
  if (type === "CLICK_ON_SQUARE") {
    const squares = state.history[state.stepNumber].squares;
    if (calculateWinner(squares) || squares[action.index]) {
      return state;
    }
    squares[action.index] = state.xIsNext ? "X" : "O";
    state.xIsNext = !state.xIsNext;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
    state.stepNumber = state.history.length as Step;
    state.activeIndex = state.history.length as Index;
    state.history.push({ squares: squares });
  }
  if (type === "JUMP_TO") {
    state.stepNumber = action.step;
    state.xIsNext = action.step % 2 === 0;
    state.activeIndex = action.step as Index;
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
    state.activeIndex = 0;
  }
  if (type === "UNDO") {
    state.history =
      state.stepNumber === 0
        ? [{ squares: Array(9).fill(null) }]
        : state.history.slice(0, state.stepNumber);
    state.activeIndex = Math.max(state.stepNumber - 1, 0) as Index;
    state.stepNumber = Math.max(0, state.stepNumber - 1) as Step;
    state.xIsNext = !state.xIsNext;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }
  return state;
};

export default gameReducer;
