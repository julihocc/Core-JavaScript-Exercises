import { useGameState } from "../Context";
import { FC } from "react";

const History: FC<HistoryProps> = ({ moves }) => {
  const gameState = useGameState();
  const gameStatus = gameState ? gameState.gameStatus : null;

  return (
    // <div>
    //   {/* <div>{gameStatus}</div> */}
    //   {gameStatus && <div>{gameStatus}</div>}
    //   <ol>{moves}</ol>
    // </div>
  );
};

export default History;
