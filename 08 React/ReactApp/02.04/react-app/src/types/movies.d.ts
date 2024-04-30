interface MovieDataProviderProps {
  children: ReactNode;
}

type Movie = {
  id: ID;
  title: string;
  content: string;
};

type MovieDetails = {
  id: ID;
  director: string;
};

type MovieProps = {
  movie: Movie;
  details: MovieDetails;
};

enum ActionOnMovieType {
  ADD_DATA = "ADD_DATA",
}

type ActionOnMovie = IAddMovieAction;

type SourceId = "movies" | "details" | "directors";

type SourceFilename = "movies.json" | "details.json" | "directors.json";

interface IAddMovieAction {
  type: ActionOnMovieType.ADD_DATA;
  fetchedData: MovieDataType;
  sourceId: SourceId;
  sourceFilename: SourceFilename;
}

type MovieDataType = {
  id: ID;
  title: string;
  content: string;
};

type MovieDetailsType = {
  id: ID;
  title: string;
  year: number;
  director: string;
  duration: string;
  genre: string[];
  rate: number;
};

type DirectorType = Record<string, string>;

type MovieDataType = MovieDataType[] | MovieDetailsType[] | DirectorType[];

type DataReducerState = {
  data: MovieDataType;
  source: SourceFilename;
};

type DataReducerStateMap = Map<SourceID, DataReducerState>;
