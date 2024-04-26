import { ContactContainer } from "./Components/ContactContainer";
import { CounterContainer } from "./Components/CounterContainer";
import { ListContainer } from "./Components/ListContainer";
import { Error404 } from "./Components/Error404";

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
        <Route path="list-of-movies" element={<ListContainer />} />
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
