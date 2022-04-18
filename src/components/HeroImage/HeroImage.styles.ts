import styled from "styled-components";

type WrapperProps = {
  image: string;
};

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props: WrapperProps) => props.image}), var(--darkGrey);
  height: 600px;
  background-size: cover;
  background-position: 50% 50%;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 100%;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 40px;
  max-width: 700px;
  padding: 0 20px;
  z-index: 100;

  h1 {
    font-size: var(--fontLarge);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--font-medium);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }
`;
