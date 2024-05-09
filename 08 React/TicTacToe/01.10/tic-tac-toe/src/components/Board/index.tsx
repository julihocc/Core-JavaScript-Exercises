import Square from "../Square";
import { Grid, Box, Card } from "@radix-ui/themes";

const Board = (props: BoardProps) => {
  const renderSquare = (i: Index) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <Box width="100px" height="100px">
      <Card variant="ghost">
        <Grid columns="3" gap="1">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </Grid>{" "}
      </Card>
    </Box>
  );
};

export default Board;
