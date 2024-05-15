import { Button } from "@radix-ui/themes";
import { useGameStore } from "../../store";

export const Undo = () => {
  const dispatch = useGameStore((state) => state.dispatch);
  const handleClick = () => {
    dispatch({ type: "UNDO" });
  };
  return <Button onClick={handleClick}>Undo</Button>;
};

export default Undo;
