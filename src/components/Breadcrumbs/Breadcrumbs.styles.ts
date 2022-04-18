import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--mediumGrey);
  color: var(--white);
  width: 100%;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  justify-content: start;
  margin: 0 auto;
  padding: 20px;

  a {
    color: var(--white) !important;
    text-decoration: none !important;
  }

  span {
    padding-right: 5px;
    font-size: var(--fontMedium);

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
