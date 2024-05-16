import { Button } from "@radix-ui/themes";
import { useGameStore } from "../../stores/gameStore";

export const Undo = () => {
  const dispatch = useGameStore((state) => state.dispatch);
  const handleClick = () => {
    dispatch({ type: "UNDO" });
  };
  return (
    <Button onClick={handleClick} variant="surface" style={{ width: "10rem" }}>
      Undo
    </Button>
  );
};

export default Undo;
