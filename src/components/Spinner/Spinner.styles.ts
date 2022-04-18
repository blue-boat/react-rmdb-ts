import styled from "styled-components";

export const Content = styled.div`
  margin: 20px auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid var(--lightGrey);
  border-top-color: var(--dardGrey);
  animation: spin 0.8s infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

`