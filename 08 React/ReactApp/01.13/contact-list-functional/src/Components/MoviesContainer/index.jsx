import { useContext, useEffect } from "react";
import { MovieDataContext } from "../../Context/MovieDataProvider";
import { Movie } from "../Movie";

export function MovieContainer() {
  const data = useContext(MovieDataContext);
  const moviesInfo = data && data.get("movies");
  const movies = moviesInfo && moviesInfo.data;
  const moviesDetails = data && data.get("details");
  const details = moviesDetails && moviesDetails.data;

  useEffect(() => {
    console.log("data@List", data);
  }, [data]);

  useEffect(() => {
    console.log("movies@List", movies);
  }, [movies]);

  useEffect(() => {
    console.log("details@List", details);
  }, [details]);

  return (
    <div className="container mt-3">
      <ul className="list-unstyled">
        {movies &&
          details &&
          movies.map((movie) => {
            const movieDetails = details.find(
              (detail) => detail.id === movie.id
            );
            console.log("rendering element: ", movie);
            console.log("movieDetails", movieDetails);
            return (
              <Movie key={movie.id} movie={movie} details={movieDetails} />
            );
          })}
      </ul>
    </div>
  );
}
