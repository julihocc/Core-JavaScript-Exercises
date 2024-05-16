import { FC } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Game from "./components/Game";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Board from "./components/Board";

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<Header />}>
    <Route index element={<Board />} />
    <Route path="game" element={<Game />} />
    <Route path="stats" element={<Stats />} />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

const App: FC = () => (
    <RouterProvider router={router} />
);

export default App;
