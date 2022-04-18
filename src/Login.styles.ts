import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  max-width: 320px;
  height: 80vh;
  margin: 0 auto;
  padding: 20px;
  color: var(--mediumGrey);

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--mediumGrey);
    border-radius: 20px;
    margin: 20px;
  }

  .error {
    color: red;
    margin: 20px;
  }
`;
