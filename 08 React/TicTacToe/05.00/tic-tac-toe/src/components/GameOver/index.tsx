// import * as Dialog from "@radix-ui/react-dialog";
import { AlertDialog, Grid, Button, Heading, Flex } from "@radix-ui/themes";
import { useState, useEffect, useRef } from "react";
import { useGameStore } from "../../stores/gameStore";
import useMatchStore from "../../stores/matchStore";
import { animated, useTransition } from "@react-spring/web";

export default function GameOver() {
  // const gameState = useGameStore((state) => state);
  const winner = useGameStore((state) => state.winner);
  const tie = useGameStore((state) => state.tie);
  const startTime = useGameStore((state) => state.startTime);
  const iconPlayer0 = useGameStore((state) => state.iconPlayer0);
  const iconPlayer1 = useGameStore((state) => state.iconPlayer1);
  const dispatch = useGameStore((state) => state.dispatch);

  const addMatch = useMatchStore((state) => state.addMatch);

  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState<JSX.Element | null>(null);
  const prevMessage = useRef<JSX.Element | null>(null);

  const cancelModal = () => {
    const now = new Date().getTime();
    console.log("Time to close: ", now);
    dispatch({ type: "SET_END_TIME", endTime: now });

    const match: Match = {
      winner: winner,
      tie: tie,
      startTime: startTime,
      endTime: now,
    };
    addMatch(match);
    dispatch({ type: "RESET" });
    setOpenModal(false);
  };

  useEffect(() => {
    if (winner !== null || tie) {
      setOpenModal(true);
    }
  }, [winner, tie]);

  const configObj = {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  };

  useEffect(() => {
    prevMessage.current = message;
  }, [message]);

  useEffect(() => {
    let _message;
    if (winner !== null) {
      if (winner === 0) {
        _message = (
          <div>
            <Heading size="3" as="h3">
              Player {iconPlayer0()} won
            </Heading>
          </div>
        );
      } else {
        _message = (
          <Heading size="3" as="h3">
            Player {iconPlayer1()} won
          </Heading>
        );
      }
    } else if (tie) {
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
  }, [winner, tie, iconPlayer0, iconPlayer1]);

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
