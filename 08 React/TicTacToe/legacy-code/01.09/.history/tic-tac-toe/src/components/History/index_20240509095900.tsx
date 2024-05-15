import { useGameState } from "../Context";
import { FC } from "react";
import { Button } from "@radix-ui/themes";

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
