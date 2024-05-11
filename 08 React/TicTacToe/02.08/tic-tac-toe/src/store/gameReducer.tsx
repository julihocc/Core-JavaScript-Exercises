import { calculateWinner } from "../utils/calculateWinner";

const gameReducer: GameReducer = (state, action) => {
  const type = action.type;
  if (type === "CLICK_ON_SQUARE") {
    const currentSquareIndex = action.index;
    const squares = state.history[state.activeStep].squares;
    const squareIsFilled = squares[currentSquareIndex] !== null;
    if (squareIsFilled) {
      console.log("Square is already filled");
      return state;
    }
    const newSquares = [...squares];
    newSquares[currentSquareIndex] = state.currentPlayer;
    state.currentPlayer = ((state.currentPlayer + 1) % 2) as Player;
    state.history.push({ squares: newSquares });
    state.activeStep = (state.history.length - 1) as Step;
    state.winner = calculateWinner(newSquares);
  }
  if (type === "JUMP_TO") {
    // state.stepNumber = action.step;
    state.currentPlayer = (action.step % 2) as Player;
    // state.activeIndex = action.step as Index;
    state.activeStep = action.step;
  }
  // if (type === "SET_GAME_WINNER") {
  //   state.winner = action.winner;
  // }
  if (type === "RESET") {
    state.history = [{ squares: Array(9).fill(null) }];
    state.currentPlayer = 0;
    state.activeStep = 0;
    state.winner = null;
  }
  if (type === "UNDO") {
    state.history =
      state.activeStep === 0
        ? [{ squares: Array(9).fill(null) }]
        : state.history.slice(0, state.activeStep);
    // state.activeIndex = Math.max(state.stepNumber - 1, 0) as Index;
    // state.stepNumber = Math.max(0, state.stepNumber - 1) as Step;
    state.activeStep = Math.max(0, state.activeStep - 1) as Step;
    // state.xIsNext = !state.xIsNext;
    state.currentPlayer = (state.activeStep % 2) as Player;
    state.winner = null;
  }
  return state;
};

export default gameReducer;
