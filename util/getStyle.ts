import Color from "color";

import { Theme } from "../src/context/ThemeContext";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  successColor,
  successTextColor,
  dangerColor,
  dangerTextColor,
} from "../src/styles";

export const modifyColor = (
  color: string,
  type: "darken" | "lighten",
  degree: number = 0.5
) => {
  const currentColor = Color(color);
  let newColor;
  if (type === "darken") {
    newColor = currentColor.darken(degree).string();
  } else {
    newColor = currentColor.lighten(degree).string();
  }
  return newColor;
};

export const getStyle = (
  variant: string,
  outlined: boolean,
  context: Theme
) => {
  let color;
  let backgroundColor;

  if (context) {
    switch (variant) {
      case "primary":
        color = context.primaryTextColor || primaryTextColor;
        backgroundColor = context.primaryColor || primaryColor;
        break;
      case "secondary":
        color = context.secondaryTextColor || secondaryTextColor;
        backgroundColor = context.secondaryColor || secondaryColor;
        break;
      case "success":
        color = context.successTextColor || successTextColor;
        backgroundColor = context.successColor || successColor;
        break;
      case "danger":
        color = context.dangerTextColor || dangerTextColor;
        backgroundColor = context.dangerColor || dangerColor;
        break;
      default:
        color = context.primaryTextColor || primaryTextColor;
        backgroundColor = context.primaryColor || primaryColor;
    }
  } else {
    switch (variant) {
      case "primary":
        color = primaryTextColor;
        backgroundColor = primaryColor;
        break;
      case "secondary":
        color = secondaryTextColor;
        backgroundColor = secondaryColor;
        break;
      case "success":
        color = successTextColor;
        backgroundColor = successColor;
        break;
      case "danger":
        color = dangerTextColor;
        backgroundColor = dangerColor;
        break;
      default:
        color = primaryTextColor;
        backgroundColor = primaryColor;
    }
  }

  return [backgroundColor, color];
};
