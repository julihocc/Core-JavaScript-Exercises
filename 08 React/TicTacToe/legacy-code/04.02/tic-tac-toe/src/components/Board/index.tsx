import Square from "../Square";
import { Grid, Box } from "@radix-ui/themes";
import { useGameStore } from "../../stores/gameStore";

const Board = () => {
  const activeStep = useGameStore((state) => state.activeStep);
  const history = useGameStore((state) => state.history);
  const dispatch = useGameStore((state) => state.dispatch);

  const squares = history[activeStep].squares;

  const renderSquare = (i: Index) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => dispatch({ type: "CLICK_ON_SQUARE", index: i })}
      />
    );
  };

  return (
    <Box>
      <Grid columns="3" gap="2">
        {squares.map((_, index) => renderSquare(index as Index))}
      </Grid>{" "}
    </Box>
  );
};

export default Board;
