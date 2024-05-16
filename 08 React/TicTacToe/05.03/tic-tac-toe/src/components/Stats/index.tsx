import { Flex, Heading } from "@radix-ui/themes";
import Summary from "../Summary";
import useGameStore from "../../stores/gameStore";
import useSessionStore from "../../stores/sessionStore";
import ResetMatches from "../ResetMatches";

const Stats = () => {
  const player = useSessionStore((state) => state.player);
  const iconPlayer0 = useGameStore((state) => state.iconPlayer0);
  const iconPlayer1 = useGameStore((state) => state.iconPlayer1);

  const icon = player === 0 ? iconPlayer0 : iconPlayer1;

  return (
    <Flex direction="column" align="start" p="5">
      <Heading> Now playing: {icon()} </Heading>
      <Summary />
      <ResetMatches />
    </Flex>
  );
};

export default Stats;
