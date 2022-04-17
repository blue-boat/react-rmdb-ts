import { useState, useEffect, useCallback } from "react";
import API from "../API";

const useMovieFetch = (movieId) => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

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
      setState(newState);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [movieId, fetchMovie]);

  return { state, loading, error };
};

export default useMovieFetch;
