import { useEffect, useReducer, createContext } from "react";

// Create a new context
export const MovieDataContext = createContext(null);

const ADD_DATA = "ADD_DATA";

function dataReducer(state, action: ActionOnMovie) {
  switch (action.type) {
    case ADD_DATA:
      // return action.data;
      return new Map(state).set(action.id, {
        data: action.data,
        source: action.source,
      });
    default:
      console.error("Unhandled action type: ", action.type);
      return state;
  }
}

// Create a provider component
export function MovieDataProvider({ children }) {
  // const [data, setData] = useState(null);
  const [data, dispatch] = useReducer(dataReducer, new Map());

  useEffect(() => {
    const fetchData = async (id, source) => {
      console.log("fetching", source);
      const response = await fetch(source);
      const fetched = await response.json();
      console.log("fetched", source, fetched);
      // setData(fetched);
      dispatch({ type: ADD_DATA, data: fetched, id, source });
    };
    fetchData("movies", "movies.json");
    fetchData("details", "details.json");
    fetchData("directors", "directors.json");
  }, []);

  return <MovieDataContext.Provider value={data}>{children}</MovieDataContext.Provider>;
}
