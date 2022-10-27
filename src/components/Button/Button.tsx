import React from "react";
import styled from "styled-components";

import ThemeContext from "../../context/ThemeContext";

import { getStyle } from "../../../util/getStyle";

import "./Button.scss";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
  backgroundColor?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  outlined?: boolean;
  rounded?: "";
  onClick?: () => void;
}

export interface IColorProps {
  default?: string;
  light?: string;
  dark?: string;
  border?: string;
  background?: string;
}

interface StyledButtonProps {
  mainColor: IColorProps;
}

let StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.mainColor.default};
  color: white;
  border: 0;
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    background-color: ${(props) => props.mainColor.light};
  }
  :active {
    background-color: ${(props) => props.mainColor.dark};
  }
`;

let OutlinedButton = styled.button<StyledButtonProps>`
  background-color: white;
  color: ${(props) => props.mainColor.default};
  border: 1px solid ${(props) => props.mainColor.default};
  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1),
    color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: ${(props) => props.mainColor.default};
    color: white;
  }
  :focus {
    background-color: none;
  }
  :active {
    background-color: ${(props) => props.mainColor.dark};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  backgroundColor,
  className,
  size = "medium",
  children,
  outlined = false,
  onClick,
}) => {
  const currentTheme = React.useContext(ThemeContext);

  const mainColor = getStyle(variant, outlined, currentTheme);

  return outlined ? (
    <OutlinedButton
      className={["aui-button", `aui-button-${size}`, className].join(" ")}
      mainColor={mainColor}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </OutlinedButton>
  ) : (
    <StyledButton
      className={[
        "aui-button",
        `aui-button-${variant}`,
        `aui-button-${size}`,
        className,
      ].join(" ")}
      mainColor={mainColor}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
