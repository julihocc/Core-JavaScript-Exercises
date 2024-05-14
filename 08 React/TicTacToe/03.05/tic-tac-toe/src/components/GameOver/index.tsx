// import * as Dialog from "@radix-ui/react-dialog";
import { AlertDialog, Flex, Box, Button, Heading } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useGameStore } from "../../store";
import { animated, useTransition } from "@react-spring/web";

export default function GameOver() {
  const gameState = useGameStore((state) => state);
  const [openModal, setOpenModal] = useState(false);

  const cancelModal = () => {
    gameState.dispatch({ type: "RESET" });
    setOpenModal(false);
  };

  useEffect(() => {
    if (gameState.winner !== null || gameState.tie) {
      setOpenModal(true);
    }
  }, [gameState.winner, gameState.tie]);

  const configObj = {
    from: {
      opacity: 0,
      y: -10,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    leave: {
      opacity: 0,
      y: 10,
    },
    config: {
      duration: 500,
    },
  };

  const transition = useTransition(openModal, configObj);
  const AnimatedAlertDialogContent = animated(AlertDialog.Content);

  const ExternalComponent = () => {
    return (
      <AlertDialog.Root open={openModal} onOpenChange={setOpenModal}>
        {transition((styles, item) =>
          item ? (
            <AnimatedAlertDialogContent forceMount style={styles}>
              <animated.div style={styles}>
                <Flex direction="column" gap="3">
                  <Box>
                    {gameState.winner !== null ? (
                      gameState.winner === 0 ? (
                        <div>
                          <Heading size="3" as="h3">
                            Player {gameState.iconPlayer0()} won
                          </Heading>
                        </div>
                      ) : (
                        <Heading size="3" as="h3">
                          Player {gameState.iconPlayer1()} won
                        </Heading>
                      )
                    ) : gameState.tie ? (
                      <Heading size="3" as="h3">
                        It's a tie
                      </Heading>
                    ) : (
                      <Heading size="3" as="h3">
                        Thanks for playing
                      </Heading>
                    )}
                  </Box>
                  <Box>
                    <AlertDialog.Cancel onClick={cancelModal}>
                      <Button>Close</Button>
                    </AlertDialog.Cancel>
                  </Box>
                </Flex>
              </animated.div>
            </AnimatedAlertDialogContent>
          ) : null
        )}
      </AlertDialog.Root>
    );
  };

  return <ExternalComponent />;
}
