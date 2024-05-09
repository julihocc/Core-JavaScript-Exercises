import { GameProvider } from "../Context";
import Game from "../Game";

const GameContainer = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default GameContainer;
