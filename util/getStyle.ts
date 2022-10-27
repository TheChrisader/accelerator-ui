import { ITheme } from "../src/context/ThemeContext";
import { lightTheme } from "../src/styles";
import { IColorProps } from "../src/context/ThemeContext";

export const getStyle = (
  context: ITheme | undefined,
  variant?: "primary" | "secondary" | "success" | "danger" | undefined
) => {
  let color: IColorProps | any;

  if (variant) {
    color = context?.colors?.main![variant] || lightTheme.colors.main[variant];
  } else {
    color = context?.colors?.main || lightTheme.colors.main;
  }

  let text = context?.colors?.text || lightTheme.colors.text;

  return [color, text];
};
