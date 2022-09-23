import { Theme } from "../../context/ThemeContext";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  successColor,
  successTextColor,
  dangerColor,
  dangerTextColor,
} from "../../styles";

const getBtnStyle = (variant: string, context: Theme) => {
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
};

export default getBtnStyle;
