import { Box, Button } from "@radix-ui/themes";
import { useGameStore } from "../../store";

export default function Square(props: SquareProps) {
  const gameState = useGameStore((state) => state);
  return (
    <Box as="div" width="32px" height="32px" mx="1" onClick={props.onClick}>
      <Button style={{ width: "32px" }} variant="outline">
        {props.value === 0
          ? gameState.iconPlayer0()
          : props.value === 1
          ? gameState.iconPlayer1()
          : null}
      </Button>
    </Box>
  );
}
