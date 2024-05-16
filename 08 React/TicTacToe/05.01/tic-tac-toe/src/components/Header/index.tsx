import {
  Heading,
  Section,
  Switch,
  Flex,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import { useThemeStore } from "../../stores/themeStore";
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
        <Link to="/">Home</Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Link to="/game">Game</Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Link to="/stats">Stats</Link>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default function Header() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Flex direction="column" justify="center" align="center">
      <Section size="4">
        <Flex justify="center" align="center" gapX="9">
          <Heading as="h1" size="9">
            Tic Tac Toe
          </Heading>
          <Goto />
          <Switch onClick={handleClick}></Switch>
        </Flex>{" "}
      </Section>
      <Outlet />
    </Flex>
  );
}
