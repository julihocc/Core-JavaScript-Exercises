import useMatchStore from "../../stores/matchStore";
import { Button } from "@radix-ui/themes";

const ResetMatches = () => {
  const resetMatches = useMatchStore((state) => state.resetMatches);

  return <Button onClick={resetMatches}>Reset Matches</Button>;
};

export default ResetMatches;
