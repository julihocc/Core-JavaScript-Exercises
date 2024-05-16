import { Box, Button } from "@radix-ui/themes";
import { useGameStore } from "../../stores/gameStore";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import styles from "./Square.module.css";

export default function Square({ value, onClick }: SquareProps) {
  const gameState = useGameStore((state) => state);
  const [isClicked, setIsClicked] = useState(false);

  const rotation = useSpring({
    transform: isClicked
      ? "perspective(600px) rotateY(180deg)"
      : "perspective(600px) rotateY(0deg)",
    config: { mass: 10, tension: 90, friction: 10 },
  });

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <Box as="div" width="32px" height="32px" mx="1" onClick={handleClick}>
      <Button style={{ width: "32px" }} variant="outline">
        {value === 0 ? (
          <animated.div style={rotation} className={styles.parent}>
            {gameState.iconPlayer0()}{" "}
          </animated.div>
        ) : value === 1 ? (
          <animated.div style={rotation} className={styles.parent}>
            {gameState.iconPlayer1()}{" "}
          </animated.div>
        ) : null}
      </Button>
    </Box>
  );
}
