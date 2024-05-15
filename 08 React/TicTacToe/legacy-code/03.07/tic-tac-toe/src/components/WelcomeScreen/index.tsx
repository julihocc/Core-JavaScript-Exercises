import { AlertDialog, Button } from "@radix-ui/themes";
import { useState } from "react";

import useRecordStore from "../../stores/recordStore";

const WelcomeScreen = () => {
  const setPlayer = useRecordStore((store) => store.setPlayer);
  const [openWelcome, setOpenWelcome] = useState(true);

  return (
    <AlertDialog.Root open={openWelcome} onOpenChange={setOpenWelcome}>
      <AlertDialog.Content>
        <AlertDialog.Title>Welcome to Tic Tac Toe</AlertDialog.Title>
        <AlertDialog.Description>
          <AlertDialog.Cancel>
            <Button
              onClick={() => {
                setPlayer(0);
                setOpenWelcome(false);
              }}
            >
              Player 1
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Cancel>
            <Button
              onClick={() => {
                setPlayer(1);
                setOpenWelcome(false);
              }}
            >
              Player 2
            </Button>
          </AlertDialog.Cancel>
        </AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default WelcomeScreen;
