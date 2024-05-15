import { Box, Button } from "@radix-ui/themes";

export default function Square(props: SquareProps) {
  return (
    <Box width="32px" height="32px" mx="1">
      <Button  variant="soft" radius="full" onClick={props.onClick}>
        {props.value}
      </Button>
    </Box>
  );
}
