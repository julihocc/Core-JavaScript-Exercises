import { Button } from "@radix-ui/themes";
import { useGameStore } from "../../stores/gameStore";

const Reset = () => {
  const dispatch = useGameStore((state) => state.dispatch);
  const handleClick = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <Button onClick={handleClick} variant="surface" style={{ width: "10rem" }}>
      Reset
    </Button>
  );
};

export default Reset;
