import { Table, Box } from "@radix-ui/themes";
import useMatchStore from "../../stores/matchStore";
import  useGameStore  from "../../stores/gameStore";

const Summary = () => {
  const matches = useMatchStore((state) => state.matches);
  const iconPlayer0 = useGameStore((state) => state.iconPlayer0);
  const iconPlayer1 = useGameStore((state) => state.iconPlayer1);

  const rowInfo = matches.map(({ winner, tie, startTime, endTime }) => {
    const outcome =
      winner !== null ? (
        winner === 0 ? (
          <Box>Player {iconPlayer0()} wins</Box>
        ) : (
          <Box>Player {iconPlayer1()} wins</Box>
        )
      ) : tie ? (
        "Tie"
      ) : (
        "In progress"
      );
    let duration = null;
    if (startTime && endTime) {
      const diff = endTime - startTime;
      const seconds = Math.floor(diff / 1000);
      duration = `${seconds} seconds`;
    }
    return (
      <Table.Row>
        <Table.RowHeaderCell>{outcome}</Table.RowHeaderCell>
        <Table.Cell>{duration}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Outcome</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Duration</Table.ColumnHeaderCell>
        </Table.Row>
        {rowInfo}
      </Table.Header>
    </Table.Root>
  );
};

export default Summary;
