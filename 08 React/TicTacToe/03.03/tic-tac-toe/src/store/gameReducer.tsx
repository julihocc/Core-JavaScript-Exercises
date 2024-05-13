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
    state.history.push({ squares: newSquares });
    state.currentPlayer = ((state.currentPlayer + 1) % 2) as Player;
    state.activeStep = (state.history.length - 1) as Step;
    const currentSquares = state.history[state.history.length - 1].squares;
    console.log("currentSquares", currentSquares);
    const winner = calculateWinner(currentSquares);
    if (winner !== null) {
      console.log("Winner is", winner);
      state.winner = winner;
    }
    const isDraft =
      currentSquares.every((square) => square !== null) && winner === null;
    if (isDraft) {
      console.log("Draft");
      state.winner = null;
      state.draft = true;
    }
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
    state.draft = false;
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
    state.draft = false;
  }
  return state;
};

export default gameReducer;
