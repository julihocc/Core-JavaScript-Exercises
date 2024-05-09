import { Box, Button } from "@radix-ui/themes";

type MoveProps = {
  description: string;
  onClick: () => void;
};

const Move = ({ description, onClick }: MoveProps) => {
  return (
    <Box onClick={onClick}>
      <Button size="2" variant="surface">
        {description}
      </Button>
    </Box>
  );
};

export default Move;
