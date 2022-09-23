import React from "react";
import styled from "styled-components";

import ThemeContext, { Theme } from "../../context/ThemeContext";

import getBtnStyle, { modifyColor } from "./getBtnStyle";

import "./Button.scss";
export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  backgroundColor?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  outlined: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

interface StyledButtonProps {
  mainColor: string;
  textColor: string;
}

interface OutlinedButtonProps {
  mainColor: string;
}

let StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.mainColor};
  color: ${(props) => props.textColor};
  :hover {
    background-color: ${({ mainColor }) =>
      modifyColor(mainColor, "darken", 0.25)};
  }
  :focus,
  :hover {
    background-color: ${({ mainColor }) =>
      modifyColor(mainColor, "darken", 0.1)};
  }
  :-moz-focusring {
    background-color: none;
  }
  :active {
    background-color: ${({ mainColor }) => modifyColor(mainColor, "darken")};
  }
`;

let OutlinedButton = styled.button<OutlinedButtonProps>`
  background-color: white;
  color: ${(props) => props.mainColor};
  border: 1px solid ${(props) => props.mainColor};
  :hover {
    background-color: ${(props) => props.mainColor}15;
  }
  :focus {
    background-color: none;
  }
  :-moz-focusring {
    background-color: none;
  }
  :active {
    background-color: ${(props) => props.mainColor}33;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  backgroundColor,
  className,
  size = "medium",
  label,
  outlined = false,
  type = "button",
  ...props
}) => {
  const currentTheme = React.useContext(ThemeContext);

  const [mainColor, textColor] = getBtnStyle(
    variant,
    outlined,
    currentTheme as Theme
  );

  return outlined ? (
    <OutlinedButton
      type={type}
      className={[
        "aui-button",
        `aui-button-${variant}`,
        `aui-button-${size}`,
        className,
      ].join(" ")}
      mainColor={mainColor}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </OutlinedButton>
  ) : (
    <StyledButton
      type={type}
      className={[
        "aui-button",
        `aui-button-${variant}`,
        `aui-button-${size}`,
        className,
      ].join(" ")}
      mainColor={mainColor}
      textColor={textColor}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
