import { useState, useEffect } from "react";
import api, { Movie } from "../API";

const SESSION_STORAGE_HOME_KEY = "react-rmdb-home";

const initialState = {
  page: 0,
  results: [] as Movie[],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getMovies = async (page: number, searchTerm = "") => {
    setLoading(true);
    try {
      const newState = await api.fetchMovies(searchTerm, page);
      console.log("getting from api");
      setState((prevState) => {
        const updatedState = {
          ...newState,
          results:
            page > 1
              ? [...prevState.results, ...newState.results]
              : newState.results,
        };
        sessionStorage.setItem(
          SESSION_STORAGE_HOME_KEY,
          JSON.stringify(updatedState)
        );
        return updatedState;
      });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Load first page of popular movie (w/wo search term)
  // First page without search term is retrieved from session storage
  useEffect(() => {
    const sessionState = sessionStorage.getItem(SESSION_STORAGE_HOME_KEY);
    if (!searchTerm && sessionState) {
      console.log("Getting from session");
      setState(JSON.parse(sessionState));
      setLoading(false);
    } else {
      getMovies(1, searchTerm);
    }
  }, [searchTerm]);

  // Load subsequent pages of popular movies (w/wo search term)
  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    getMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [state.page, searchTerm, isLoadingMore]);

  return {
    state,
    loading,
    error,
    searchTerm,
    isLoadingMore,
    setState,
    setSearchTerm,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
