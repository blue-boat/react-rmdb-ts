import React from "react";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
import Thumb from "../Thumb";
import NoImage from "../../images/no_image.jpg";

const blackBackdrop = "#000000";

const Movie = ({ movie }) => (
  <Wrapper
    backdrop={
      movie?.backdrop_path
        ? `url(${IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path})`
        : blackBackdrop
    }
  >
    <Content>
      <Thumb
        movieId={movie?.id}
        image={
          movie?.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie?.title}</h1>
        <h3>PLOT</h3>
        <p>{movie?.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie?.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR{movie?.directors.length > 1 ? "S" : ""}</h3>
            {movie?.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default Movie;
