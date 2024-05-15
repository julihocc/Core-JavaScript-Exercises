import { Flex, Heading } from "@radix-ui/themes";
import useMatchStore from "../../stores/matchStore";
import Summary from "../Summary";
const Stats = () => {
  const player = useMatchStore((state) => state.player);

  return (
    <Flex direction="column" align="start" p="5">
      <Heading> Stats for {player} </Heading>
      <Summary />
    </Flex>
  );
};

export default Stats;
