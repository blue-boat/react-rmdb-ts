import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./Breadcrumbs.styles";

type Props = {
  movieTitle: string;
};

const Breadcrumbs: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default Breadcrumbs;