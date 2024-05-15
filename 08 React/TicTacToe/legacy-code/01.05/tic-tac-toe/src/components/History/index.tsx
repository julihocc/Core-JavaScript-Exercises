import { useGameState } from "../Context";

const History = ({ moves }) => {
  const gameState = useGameState();
  const gameStatus = gameState.gameStatus;

  return (
    <div>
      <h2>History</h2>
      <div>{gameStatus}</div>
      <ol>{moves}</ol>
    </div>
  );
};

export default History;
