import { useEffect, useReducer, createContext } from "react";

// Create a new context
export const MovieDataContext = createContext<DataReducerStateMap | null>(null);

const ADD_DATA = "ADD_DATA";

function dataReducer(state: DataReducerStateMap, action: ActionOnMovie) {
  switch (action.type) {
    case ADD_DATA:
      // return action.data;
      return new Map(state).set(action.sourceId, {
        data: action.fetchedData,
        source: action.sourceFilename,
      });
    default:
      console.error("Unhandled action type: ", action.type);
      return state;
  }
}

// Create a provider component
export function MovieDataProvider({ children }: MovieDataProviderProps) {
  // const [data, setData] = useState(null);
  const [data, dispatch] = useReducer(dataReducer, new Map());

  useEffect(() => {
    const fetchData = async (
      sourceId: SourceId,
      sourceFilename: SourceFilename
    ) => {
      console.log("fetching", sourceFilename);
      const response = await fetch(sourceFilename);
      const fetchedData = await response.json();
      console.log("fetched", sourceFilename, fetchedData);
      // setData(fetched);
      dispatch({
        type: ADD_DATA as ActionOnMovieType.ADD_DATA,
        fetchedData,
        sourceId,
        sourceFilename,
      });
    };
    fetchData("movies", "movies.json");
    fetchData("details", "details.json");
    fetchData("directors", "directors.json");
  }, []);

  return (
    <MovieDataContext.Provider value={data}>
      {children}
    </MovieDataContext.Provider>
  );
}
