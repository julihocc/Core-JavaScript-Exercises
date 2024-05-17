import { Flex, Heading, Box } from "@radix-ui/themes";
import Summary from "../Summary";
import useGameStore from "../../stores/gameStore";
import useSessionStore from "../../stores/sessionStore";
import ResetMatches from "../ResetMatches";
import useMatchStore from "../../stores/matchStore";

const Stats = () => {
  const player = useSessionStore((state) => state.player);
  const iconPlayer0 = useGameStore((state) => state.iconPlayer0);
  const iconPlayer1 = useGameStore((state) => state.iconPlayer1);
  const totalWins = useMatchStore((state) => state.totalWins(player));
  const totalTies = useMatchStore((state) => state.totalTies());
  const totalLosses = useMatchStore((state) => state.totalLosses(player));

  const icon = player === 0 ? iconPlayer0 : iconPlayer1;

  return (
    <Flex direction="column">
      <Box p="4">
        <Heading> Now playing: {icon()} </Heading>
      </Box>
      <Box p="4">
        <Summary />
      </Box>
      <Box>Total wins: {totalWins}</Box>
      <Box>Total ties: {totalTies}</Box>
      <Box>Total losses: {totalLosses}</Box>
      <Box p="4">
        <ResetMatches />
      </Box>
    </Flex>
  );
};

export default Stats;
