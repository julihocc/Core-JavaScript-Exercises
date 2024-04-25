import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";
import ListItem from "../ListItem";

export default function ListContainer() {
  const data = useContext(DataContext);
  const moviesInfo = data.get("movies");
  const movies = moviesInfo && moviesInfo.data;
  const moviesDetails = data.get("details");
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

  // return (
  //   <ul>
  //     {movies &&
  //       details &&
  //       movies.map((movie) => {
  //         const movieDetails = details.find((detail) => detail.id === movie.id);
  //         console.log("rendering element: ", movie);
  //         console.log("movieDetails", movieDetails);
  //         return (
  //           <ListItem key={movie.id} movie={movie} details={movieDetails} />
  //         );
  //       })}
  //   </ul>
  // );
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
              <ListItem key={movie.id} movie={movie} details={movieDetails} />
            );
          })}
      </ul>
    </div>
  );
}
