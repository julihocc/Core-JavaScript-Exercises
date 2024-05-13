// import * as Dialog from "@radix-ui/react-dialog";
import { AlertDialog, Button } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useGameStore } from "../../store";
import { animated, useTransition, useSpring } from "@react-spring/web";

export default function EndGame() {
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

  // const transition = useTransition(openModal, {
  //   from: {
  //     opacity: 0,
  //     y: -50,
  //   },
  //   enter: {
  //     opacity: 0.1,
  //     y: 0,
  //   },
  //   leave: {
  //     opacity: 0,
  //     y: -50,
  //   },
  //   config: {
  //     duration: 2000,
  //   },
  // });

  const configObj = {
    from: {
      opacity: 0,
      y: -50,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    leave: {
      opacity: 0,
      y: 50,
    },
    config: {
      duration: 2000,
    },
  };

  const transition = useTransition(openModal, configObj);
  const AnimatedAlertDialogContent = animated(AlertDialog.Content);

  const ExternalComponent = () => {
    return (
      <AlertDialog.Root open={openModal} onOpenChange={setOpenModal}>
        {transition((styles, item) =>
          item ? (
            <AnimatedAlertDialogContent style={styles}>
              {JSON.stringify(styles)}
              <AlertDialog.Cancel onClick={cancelModal}>
                <Button>Close</Button>
              </AlertDialog.Cancel>
            </AnimatedAlertDialogContent>
          ) : null
        )}
      </AlertDialog.Root>
    );
  };

  const AnimatedDialog = animated(ExternalComponent);

  return <AnimatedDialog />;
}
