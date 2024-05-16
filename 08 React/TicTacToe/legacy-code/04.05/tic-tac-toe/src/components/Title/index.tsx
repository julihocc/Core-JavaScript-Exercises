import { Heading, Section, Switch, Flex } from "@radix-ui/themes";
import { useThemeStore } from "../../stores/themeStore";

export default function Title() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Section size="4">
      <Flex justify="center" align="center" gapX="9">
        <Heading as="h1" size="9">
          Tic Tac Toe
        </Heading>
        <Switch onClick={handleClick}></Switch>
      </Flex>
    </Section>
  );
}
