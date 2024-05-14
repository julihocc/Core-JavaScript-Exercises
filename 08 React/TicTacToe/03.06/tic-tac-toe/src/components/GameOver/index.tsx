// import * as Dialog from "@radix-ui/react-dialog";
import {
  AlertDialog,
  Grid,
  Box,
  Button,
  Heading,
  Flex,
} from "@radix-ui/themes";
import { useState, useEffect, useRef } from "react";
import { useGameStore } from "../../store";
import { animated, useTransition } from "@react-spring/web";

export default function GameOver() {
  const gameState = useGameStore((state) => state);
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState<JSX.Element | null>(null);
  const prevMessage = useRef<JSX.Element | null>(null);

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

  useEffect(() => {
    prevMessage.current = message;
  }, [message]);

  useEffect(() => {
    let _message;
    if (gameState.winner !== null) {
      if (gameState.winner === 0) {
        _message = (
          <div>
            <Heading size="3" as="h3">
              Player {gameState.iconPlayer0()} won
            </Heading>
          </div>
        );
      } else {
        _message = (
          <Heading size="3" as="h3">
            Player {gameState.iconPlayer1()} won
          </Heading>
        );
      }
    } else if (gameState.tie) {
      _message = (
        <Heading size="3" as="h3">
          It's a tie
        </Heading>
      );
    } else {
      // _message = null;
      _message = prevMessage.current;
    }
    setMessage(_message);
  }, [gameState]);

  const transition = useTransition(openModal, configObj);
  const AnimatedAlertDialogContent = animated(AlertDialog.Content);

  const ExternalComponent = () => {
    return (
      <AlertDialog.Root open={openModal} onOpenChange={setOpenModal}>
        {transition((styles, item) =>
          item ? (
            <AnimatedAlertDialogContent
              forceMount
              style={styles}
              size="1"
              maxWidth="300px"
            >
              <animated.div style={styles}>
                <Grid columns="2" width="auto">
                  <Flex align="center" justify="center">
                    {message}
                  </Flex>
                  <Flex align="center" justify="end">
                    <AlertDialog.Cancel onClick={cancelModal}>
                      <Button>Close</Button>
                    </AlertDialog.Cancel>
                  </Flex>
                </Grid>
              </animated.div>
            </AnimatedAlertDialogContent>
          ) : null
        )}
      </AlertDialog.Root>
    );
  };

  return <ExternalComponent />;
}
