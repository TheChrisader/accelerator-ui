import { ITheme } from "../src/context/ThemeContext";
import { lightTheme } from "../src/styles";

export const getStyle = (
  variant: "primary" | "secondary" | "success" | "danger",
  outlined: boolean,
  context?: ITheme
) => {
  let color =
    context?.colors?.main![variant] || lightTheme.colors.main[variant];

  return color;
};
