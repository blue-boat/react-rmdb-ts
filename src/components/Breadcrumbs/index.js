import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./Breadcrumbs.styles";

const Breadcrumbs = ({ movieTitle }) => (
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
