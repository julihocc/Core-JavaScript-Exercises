import { ContactContainer } from "./Components/ContactContainer";
import { CounterContainer } from "./Components/CounterContainer";
import { MovieContainer } from "./Components/MoviesContainer";
import { Error404 } from "./Components/Error404";
import { MovieDataProvider } from "./Context/MovieDataProvider";
import { SWRConfig } from "swr";
import { PokemonContainer } from "./Components/Pokemon/PokemonContainer";
import { fetcher } from "./Components/Pokemon/fetcher";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.css";

function classForActivePath(path, location) {
  console.log(path, location.pathname);
  return `
    nav-link ${
      "/" + path === location.pathname ? "active bg-primary" : "text-light"
    }
  `;
}

const links = [
  { path: "contact-list", label: "Contact List" },
  { path: "counters", label: "Counter" },
  { path: "list-of-movies", label: "List of Movies" },
  { path: "pokedex", label: "Pokedex" },
];

export function App() {
  const Root = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
      <>
        <ul className="nav nav-tabs bg-dark p-3 rounded">
          {links.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                className={classForActivePath(link.path, location)}
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<ContactContainer />} />
        <Route path="contact-list" element={<ContactContainer />} />
        <Route path="counters" element={<CounterContainer />} />
        <Route
          path="list-of-movies"
          element={
            <MovieDataProvider>
              <MovieContainer />
            </MovieDataProvider>
          }
        />
        <Route
          path="pokedex"
          element={
            <SWRConfig
              value={{
                fetcher,
                suspense: true,
              }}
            >
              <PokemonContainer />
            </SWRConfig>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return (
    <div className="App container p-3">
      <h1 className="text-center text-primary">My React App</h1>
      <div className="container-fluid">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
