import { Box, Button } from "@radix-ui/themes";

const Move = ({ description, onClick, isActive }: MoveProps) => {
  const variant = isActive ? "solid" : "outline";
  return (
    <Box onClick={onClick}>
      <Button size="2" variant={variant}>
        {description}
      </Button>
    </Box>
  );
};

export default Move;
