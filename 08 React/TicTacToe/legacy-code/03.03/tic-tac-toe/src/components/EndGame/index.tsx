// import * as Dialog from "@radix-ui/react-dialog";
import { AlertDialog, Button } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { useGameStore } from "../../store";

export default function EndGame() {
  const gameState = useGameStore((state) => state);
  const [openModal, setOpenModal] = useState(false);

  const cancelModal = () => {
    gameState.dispatch({ type: "RESET" });
    setOpenModal(false);
  };

  useEffect(() => {
    if (gameState.winner !== null || gameState.draft) {
      setOpenModal(true);
    }
  }, [gameState.winner, gameState.draft]);

  return (
    <AlertDialog.Root open={openModal} onOpenChange={setOpenModal}>
      <AlertDialog.Content>
        <AlertDialog.Title> GameOver </AlertDialog.Title>
        <AlertDialog.Description>
          {gameState.winner !== null
            ? `Player ${gameState.winner} wins`
            : "Draft"}
        </AlertDialog.Description>
        <AlertDialog.Cancel>
          <Button color="red" onClick={cancelModal}>
            OK
          </Button>
        </AlertDialog.Cancel>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
