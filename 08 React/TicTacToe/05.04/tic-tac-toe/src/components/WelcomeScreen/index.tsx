import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import useGameStore from "../../stores/gameStore";
import useSessionStore from "../../stores/sessionStore";

const WelcomeScreen = () => {
  const setPlayer = useSessionStore((store) => store.setPlayer);
  const welcome = useSessionStore((store) => store.welcome);
  const setWelcome = useSessionStore((store) => store.setWelcome);
  const iconPlayer0 = useGameStore((state) => state.iconPlayer0);
  const iconPlayer1 = useGameStore((state) => state.iconPlayer1);

  const handleCancel = (player: Player) => {
    setWelcome();
    setPlayer(player);
  };

  return (
    <AlertDialog.Root open={welcome} onOpenChange={setWelcome}>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Welcome to Tic Tac Toe</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Please select your player
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button onClick={() => handleCancel(0)}>
              Player {iconPlayer0()}
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Cancel>
            <Button onClick={() => handleCancel(1)}>
              Player {iconPlayer1()}
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default WelcomeScreen;
