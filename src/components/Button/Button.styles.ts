import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    margin: 20px auto;
    width: 25%;
    max-width: 600px;
    background-color: var(--darkGrey);
    color: var(--white);
    border-radius: 30px;
    border: none;
    outline: none;
    font-size: var(--fontBig);
    transition: all 0.3s;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
`;