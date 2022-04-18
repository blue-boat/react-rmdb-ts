import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header: React.FC = () => {
  const { user } = useContext(Context);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user.session ? (
          <span>
            Loggin in as <i>{user.username}</i>
          </span>
        ) : (
          <Link to="/login">
            <span>Login</span>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
