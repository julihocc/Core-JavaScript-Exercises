import Square from "../Square";
import { Grid, Flex } from "@radix-ui/themes";
import useGameStore from "../../stores/gameStore";
import CurrentPlayer from "../CurrentPlayer";
import GameOver from "../GameOver";

const Board = () => {
  const activeStep = useGameStore((state) => state.activeStep);
  const history = useGameStore((state) => state.history);
  const dispatch = useGameStore((state) => state.dispatch);

  const squares = history[activeStep].squares;

  const renderSquare = (i: Index) => {
    return (
      <Square
        key={`square-${i}`}
        value={squares[i]}
        onClick={() => dispatch({ type: "CLICK_ON_SQUARE", index: i })}
      />
    );
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <CurrentPlayer />
      <Grid columns="3" width="15rem" height="15rem" align="center">
        {squares.map((_, index) => renderSquare(index as Index))}
      </Grid>
      <GameOver />
    </Flex>
  );
};

export default Board;
