import { calculateWinner } from "../utils/calculateWinner";

const gameReducer: GameReducer = (state, action) => {
  const type = action.type;
  if (type === "CLICK_ON_SQUARE") {
    const currentSquareIndex = action.index;
    const squares = state.history[state.activeStep].squares;
    const isThereAWinner = !!calculateWinner(squares);
    const squareIsFilled = !!squares[currentSquareIndex];
    if (isThereAWinner || squareIsFilled) {
      return state;
    }
    // currentSquare = state.xIsNext ? "X" : "O";
    const newSquares = [...squares];
    newSquares[currentSquareIndex] = state.xIsNext ? "X" : "O";
    state.xIsNext = !state.xIsNext;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
    state.history.push({ squares: newSquares });
    state.activeStep = (state.history.length - 1) as Step;
  }
  if (type === "JUMP_TO") {
    // state.stepNumber = action.step;
    state.xIsNext = action.step % 2 === 0;
    // state.activeIndex = action.step as Index;
    state.activeStep = action.step;
  }
  if (type === "SET_GAME_STATUS") {
    state.gameStatus = action.winner
      ? `Winner: ${action.winner}`
      : `Next player: ${state.xIsNext ? "X" : "O"}`;
  }
  if (type === "RESET") {
    state.history = [{ squares: Array(9).fill(null) }];
    // state.stepNumber = 0;
    state.xIsNext = true;
    state.gameStatus = "Next player: X";
    // state.activeIndex = 0;
    state.activeStep = 0;
  }
  if (type === "UNDO") {
    state.history =
      state.activeStep === 0
        ? [{ squares: Array(9).fill(null) }]
        : state.history.slice(0, state.activeStep);
    // state.activeIndex = Math.max(state.stepNumber - 1, 0) as Index;
    // state.stepNumber = Math.max(0, state.stepNumber - 1) as Step;
    state.activeStep = Math.max(0, state.activeStep - 1) as Step;
    state.xIsNext = !state.xIsNext;
    state.gameStatus = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }
  return state;
};

export default gameReducer;
