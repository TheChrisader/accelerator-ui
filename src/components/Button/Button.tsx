import React from "react";

import "./Button.scss";

export interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
