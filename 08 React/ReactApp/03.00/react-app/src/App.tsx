import { ContactContainer } from "./components/ContactContainer";
import { CounterContainer } from "./components/CounterContainer";
import { MovieContainer } from "./components/MovieContainer";
import { MovieDataProvider } from "./contexts/MovieDataProvider";
import { PokemonContainer } from "./components/PokedexContainer";
import { fetcher } from "./utils/fetcher";
import { SWRConfig } from "swr";
import { Error404 } from "./components/Error404";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

function classForActivePath(path: string, locationPathname: string) {
  console.log(path, locationPathname);
  return `
    nav-link ${
      "/" + path === locationPathname ? "active bg-primary" : "text-light"
    }
  `;
}

const links = [
  { path: "contact-list", label: "Contact List", element: ContactContainer },
  { path: "counters", label: "Counters", element: CounterContainer },
  { path: "movies", label: "Movies", element: MovieContainer },
  { path: "pokedex", label: "Pokedex", element: PokemonContainer },
];

function App() {
  const Root = () => {
    const location = useLocation();
    const locationPathname = location.pathname;
    console.log(location);
    return (
      <>
        <ul className="nav nav-tabs bg-dark p-3 rounded">
          {links.map((link) => (
            <li className="nav-item" key={link.path}>
              <Link
                className={classForActivePath(link.path, locationPathname)}
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

  const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<ContactContainer />} />
      <Route path="contact-list" element={<ContactContainer />} />
      <Route path="counters" element={<CounterContainer />} />
      <Route
        path="movies"
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
  );

  const router = createBrowserRouter(routesFromElements);

  return (
    <div className="App container p-3">
      <h1 className="text-center text-primary">My React App</h1>
      <div className="container-fluid">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
