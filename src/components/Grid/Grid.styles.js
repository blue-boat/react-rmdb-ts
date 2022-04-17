import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  padding: 0 20px;
  margin: 0 auto;

  h1 {
    color: var(--medGrey);
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;