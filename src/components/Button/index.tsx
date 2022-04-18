import React from "react";
import { Wrapper } from "./Button.styles";

type Props = {
  label: string;
  callback: () => void;
};

const Button: React.FC<Props> = ({ label, callback }) => {
  return <Wrapper onClick={callback}>{label}</Wrapper>;
};

export default Button;
