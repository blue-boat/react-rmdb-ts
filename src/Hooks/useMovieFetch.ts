import { useState, useEffect, useCallback } from "react";
import API, { Cast, Crew, Movie } from "../API";

const SESSION_STORAGE_MOVIE_KEY = "react-rmdn-movie-";

export type MovieState = Movie & { actors: Cast[]; directors: Crew[] };

const initialState = {} as MovieState;

const useMovieFetch = (movieId: number) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      const newState = {
        ...movie,
        actors: credits.cast,
        directors: credits.crew.filter((c) => c.job === "Director"),
      };
      sessionStorage.setItem(
        SESSION_STORAGE_MOVIE_KEY + movieId.toString(),
        JSON.stringify(newState)
      );
      setState(newState);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    const sessionState = sessionStorage.getItem(
      SESSION_STORAGE_MOVIE_KEY + movieId.toString()
    );
    if (sessionState) {
      setState(JSON.parse(sessionState));
      setLoading(false);
    } else {
      fetchMovie();
    }
  }, [movieId, fetchMovie]);

  return { state, loading, error };
};

export default useMovieFetch;
