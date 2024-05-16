import { FC } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Flex, Grid, DropdownMenu, Button, Container } from "@radix-ui/themes";
import Game from "./components/Game";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Board from "./components/Board";

const Root = () => (
  <>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>Open</Button>
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
    <Outlet />
  </>
);

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Board />} />
    <Route path="game" element={<Game />} />
    <Route path="stats" element={<Stats />} />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

const App: FC = () => (
  <Container>
    <Header />
    <RouterProvider router={router} />
  </Container>
);

export default App;
