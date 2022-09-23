import React from "react";
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

export default GetContext(Button);
