import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";

import HeroImage from "../components/HeroImage";
import Grid from "../components/Grid";
import Thumb from "../components/Thumb";
import Spinner from "../components/Spinner";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

import NoImage from "../images/no_image.jpg";

import useHomeFetch from "../Hooks/useHomeFetch";

const Home: React.FC = () => {
  const { state, loading, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  const movies = state.results;
  const firstMovie = state.results[0];

  return (
    <>
      {!searchTerm && firstMovie && (
        <HeroImage
          image={IMAGE_BASE_URL + BACKDROP_SIZE + firstMovie.backdrop_path}
          title={firstMovie.title}
          text={firstMovie.overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {movies.map((movie) => (
          <Thumb
            key={movie.id}
            movieId={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            clickable
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {!loading && state.page < state.total_pages && (
        <Button label="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
