import { useState, useEffect } from 'react';
import api from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
}

const useHomeFetch = () => {

  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getMovies = async (page, searchTerm = "") => {
    setLoading(true)
    try {
      const newState = await api.fetchMovies(searchTerm, page)
      setState(prevState => ({
        ...newState,
        results: page > 1
          ? [...prevState.results, ...newState.results]
          : newState.results
      }))
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies(1, searchTerm)
  }, [searchTerm])

  useEffect(() => {
    if (!isLoadingMore) {
      return
    }
    getMovies(state.page + 1, searchTerm)
    setIsLoadingMore(false)
  }, [state.page, searchTerm, isLoadingMore])

  return { state, loading, error, searchTerm, isLoadingMore, setState, setSearchTerm, setIsLoadingMore }
}

export default useHomeFetch
