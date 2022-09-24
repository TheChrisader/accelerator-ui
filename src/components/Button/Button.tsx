import React from "react";
import styled from "styled-components";

import ThemeContext, { Theme } from "../../context/ThemeContext";

import { getStyle, modifyColor } from "../../../util/getStyle";

import "./Button.scss";
export interface ButtonProps {
  label?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
  backgroundColor?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  outlined?: boolean;
  type?: "button" | "submit";
  rounded?: "";
  onClick?: () => void;
}

interface StyledButtonProps {
  mainColor: string;
  textColor: string;
}

let StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.mainColor};
  color: ${(props) => props.textColor};
  border: 0;
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: ${({ mainColor }) =>
      modifyColor(mainColor, "darken", 0.25)};
  }
  :focus {
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

let OutlinedButton = styled.button<StyledButtonProps>`
  background-color: white;
  color: ${(props) => props.mainColor};
  border: 1px solid ${(props) => props.mainColor};
  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1),
    color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: ${(props) => props.mainColor};
    color: ${(props) => props.textColor};
  }
  :focus {
    background-color: none;
  }
  :-moz-focusring {
    background-color: none;
  }
  :active {
    background-color: ${({ mainColor }) => modifyColor(mainColor, "darken")};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  backgroundColor,
  className,
  size = "medium",
  label,
  children,
  outlined = false,
  type = "button",
  onClick,
}) => {
  const currentTheme = React.useContext(ThemeContext);

  const [mainColor, textColor] = getStyle(
    variant,
    outlined,
    currentTheme as Theme
  );

  return outlined ? (
    <OutlinedButton
      type={type}
      className={["aui-button", `aui-button-${size}`, className].join(" ")}
      mainColor={mainColor}
      textColor={textColor}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children ? children : label}
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
      onClick={onClick}
    >
      {children ? children : label}
    </StyledButton>
  );
};

export default Button;
