import { Box, Button } from "@radix-ui/themes";

export default function Square(props: SquareProps) {
  return (
    <Box width="34px" height="34px">
      <Button variant="soft" radius="none" onClick={props.onClick}>
        {props.value}
      </Button>
    </Box>
  );
}
