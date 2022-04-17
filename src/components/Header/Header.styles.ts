import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 20px 0;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;