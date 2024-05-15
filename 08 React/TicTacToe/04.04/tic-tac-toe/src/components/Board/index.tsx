import Square from "../Square";
import { Grid } from "@radix-ui/themes";
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
    <Grid columns="3" width="15rem" height="15rem" align="center" >
      {squares.map((_, index) => renderSquare(index as Index))}
    </Grid>
  );
};

export default Board;
