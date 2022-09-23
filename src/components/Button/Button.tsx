import React from "react";
import ThemeContext from "../../context/ThemeContext";
import GetContext from "../GetContext";

import "./Button.scss";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger";
  backgroundColor?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  label: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  backgroundColor,
  className,
  size = "medium",
  label,
  type = "button",
  ...props
}) => {
  const currentTheme = React.useContext(ThemeContext);

  React.useEffect(() => {
    const root = document.documentElement;
    if (currentTheme)
      root?.style.setProperty(
        `--aui-button-primaryColor`,
        currentTheme?.primaryColor as string
      );
  }, [currentTheme]);

  return (
    <button
      type={type}
      className={[
        className,
        "aui-button",
        `aui-button-${variant}`,
        `aui-button-${size}`,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
