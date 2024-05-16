import { Box, Button, Flex } from "@radix-ui/themes";
import { useGameStore } from "../../stores/gameStore";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import styles from "./Square.module.css";

export default function Square({ value, onClick }: SquareProps) {
  // const gameState = useGameStore((state) => state);
  const iconPlayer0 = useGameStore((state) => state.iconPlayer0);
  const iconPlayer1 = useGameStore((state) => state.iconPlayer1);
  const startTime = useGameStore((state) => state.startTime);
  const dispatch = useGameStore((state) => state.dispatch);
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
    const now = new Date().getTime();
    console.log("Time to click: ", now);
    if (!startTime) {
      dispatch({ type: "SET_START_TIME", startTime: now });
      console.log("Start time: ", now);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Box as="div" width="32px" height="32px" mx="1" onClick={handleClick}>
        <Button style={{ width: "32px" }} variant="outline">
          {value === 0 ? (
            <animated.div style={rotation} className={styles.parent}>
              {iconPlayer0()}
            </animated.div>
          ) : value === 1 ? (
            <animated.div style={rotation} className={styles.parent}>
              {iconPlayer1()}
            </animated.div>
          ) : null}
        </Button>
      </Box>
    </Flex>
  );
}
