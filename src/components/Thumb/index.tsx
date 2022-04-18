import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";

type Props = {
  image: string;
  movieId: number;
  clickable: boolean;
};

const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => (
  <>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumbnail" clickable />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumbnail" />
    )}
  </>
);

export default Thumb;
