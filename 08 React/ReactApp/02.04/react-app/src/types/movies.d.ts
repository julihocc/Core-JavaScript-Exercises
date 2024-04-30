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
  ADD_DATA = "add_data",
}

interface IAddMovieAction {
  type: ActionOnMovieType.ADD;
  id: ID;
  data: any;
  source: string;
}

type ActionOnMovie = IAddMovieAction;

type SourceId = "movies" | "details" | "directors";

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

type MovieDataType =
  | MovieDataType[]
  | MovieDetailsType[]
  | DirectorType[]
  | null;

type DataReducerState = Map<ID, { data: MovieDataType; source: SourceId }>;
