import { AlertDialog, Button } from "@radix-ui/themes";
import { useState } from "react";

import useRecordStore from "../../stores/recordStore";

const WelcomeScreen = () => {
  const setPlayer = useRecordStore((store) => store.setPlayer);
  const [openWelcome, setOpenWelcome] = useState(true);

  const handleCancel = (player: Player) => {
    setOpenWelcome(false);
    setPlayer(player);
  };

  return (
    <AlertDialog.Root open={openWelcome} onOpenChange={setOpenWelcome}>
      <AlertDialog.Content>
        <AlertDialog.Title>Welcome to Tic Tac Toe</AlertDialog.Title>
        <AlertDialog.Description>
          <AlertDialog.Cancel>
            <Button onClick={() => handleCancel(0)}>Player 0</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Cancel>
            <Button onClick={() => handleCancel(1)}>Player 1</Button>
          </AlertDialog.Cancel>
        </AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default WelcomeScreen;
