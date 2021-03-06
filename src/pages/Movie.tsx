import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import MovieInfo from "../components/MovieInfo";
import Spinner from "../components/Spinner";
import useMovieFetch from "../Hooks/useMovieFetch";

const Movie: React.FC = () => {
  const { movieId } = useParams();

  const { state: movie, loading } = useMovieFetch(
    movieId ? Number(movieId) : NaN
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Breadcrumbs movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
