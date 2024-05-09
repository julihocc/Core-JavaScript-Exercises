import { Box, Button } from "@radix-ui/themes";

export default function Square(props: SquareProps) {
  return (
    <Box as="div" width="32px" height="32px" mx="1" onClick={props.onClick}>
      <Button style={{ width: "32px" }} variant="outline">
        {props.value}
      </Button>
    </Box>
  );
}
