import { useGameState } from "../Context";

const History = ({ moves }) => {
  const gameState = useGameState();
  const gameStatus = gameState.gameStatus;

  return (
    <div>
      <div>{gameStatus}</div>
      <ol>{moves}</ol>
    </div>
  );
};

export default History;
