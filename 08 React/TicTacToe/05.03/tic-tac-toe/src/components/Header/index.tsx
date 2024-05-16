import {
  Heading,
  Section,
  Switch,
  Flex,
  DropdownMenu,
  Button,
  Box,
} from "@radix-ui/themes";
import  useSessionStore  from "../../stores/sessionStore";
import { Link, Outlet } from "react-router-dom";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Goto = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Button>
        Go to <ChevronDownIcon />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Link to="/game" style={{ textDecoration: "none" }}>
          Game
        </Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Link to="/stats" style={{ textDecoration: "none" }}>
          Stats
        </Link>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default function Header() {
  const theme = useSessionStore((state) => state.theme);
  const setTheme = useSessionStore((state) => state.setTheme);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Section size="4">
        <Box py="4">
          <Heading as="h1" size="9">
            Tic Tac Toe
          </Heading>
        </Box>
        <Flex justify="center" align="center" gapX="9">
          <Goto />
          <Switch onClick={handleClick} defaultChecked={theme !== "light"} />
        </Flex>
      </Section>
      <Outlet />
    </Flex>
  );
}
