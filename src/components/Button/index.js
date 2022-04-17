import React from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ label, callback }) => {

  return (
    <Wrapper onClick={callback}>
      {label}
    </Wrapper>
  )
}

export default Button