import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { useGameStore } from "../../store";

export default function EndGame() {
  const gameState = useGameStore((state) => state);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (gameState.winner !== null || gameState.draft) {
      setOpenModal(true);
    }
  }, [gameState.winner, gameState.draft]);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Game Over</Dialog.Title>
        <Dialog.Description>
          {gameState.winner !== null
            ? `Winner: ${gameState.winner}`
            : "It's a draw!"}
        </Dialog.Description>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
}
