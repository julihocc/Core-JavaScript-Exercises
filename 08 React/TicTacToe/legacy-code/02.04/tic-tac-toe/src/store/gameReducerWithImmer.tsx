import { produce } from "immer";
import { calculateWinner } from "../utils/calculateWinner";

const gameReducer: GameReducer = (state, action) => {
  return produce(state, (draft) => {
    // Wrap with produce
    switch (action.type) {
      case "HANDLE_CLICK": {
        const history = draft.history.slice(0, draft.stepNumber + 1); // Use draft for updates
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[action.index]) {
          return; // Return directly to exit early
        }

        squares[action.index] = draft.xIsNext ? "X" : "O";
        draft.xIsNext = !draft.xIsNext; // Modify draft directly
        draft.gameStatus = `Next player: ${draft.xIsNext ? "X" : "O"}`;
        draft.activeIndex = history.length as Index;
        draft.history.push({ squares }); // Add new move to history
        draft.stepNumber++;
        break; // Important: add break after case block
      }
      case "JUMP_TO": {
        draft.stepNumber = action.step;
        draft.xIsNext = action.step % 2 === 0;
        draft.activeIndex = action.step;
        break;
      }
      case "SET_GAME_STATUS": {
        draft.gameStatus = action.winner
          ? `Winner: ${action.winner}`
          : `Next player: ${draft.xIsNext ? "X" : "O"}`;
        break;
      }
      case "RESET": {
        draft.history = [{ squares: Array(9).fill(null) }];
        draft.stepNumber = 0;
        draft.xIsNext = true;
        draft.gameStatus = "Next player: X";
        break;
      }
      case "UNDO": {
        draft.history =
          draft.stepNumber === 0
            ? [{ squares: Array(9).fill(null) }]
            : draft.history.slice(0, draft.stepNumber);
        draft.stepNumber = Math.max(0, draft.stepNumber - 1) as Step; // Ensure stepNumber stays at 0 or above
        draft.xIsNext = !draft.xIsNext;
        draft.gameStatus = `Next player: ${!draft.xIsNext ? "X" : "O"}`;
        draft.activeIndex = Math.max(draft.stepNumber - 1, 0) as Index;
      }
      // No need for default case with Immer
    }
  });
};

export default gameReducer;
