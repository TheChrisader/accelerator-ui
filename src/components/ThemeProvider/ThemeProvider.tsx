import React from "react";
import ThemeContext from "../../context/ThemeContext";
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

export interface ThemeProviderProps {
  theme?: {
    primaryColor?: string;
    primaryTextColor?: string;
    secondaryColor?: string;
    secondaryTextColor?: string;
    successColor?: string;
    successTextColor?: string;
    dangerColor?: string;
    dangerTextColor?: string;
  };
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
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
    <ThemeContext.Provider
      value={{
        primaryColor: theme?.primaryColor || primaryColor,
        primaryTextColor: theme?.primaryTextColor || primaryTextColor,
        secondaryColor: theme?.secondaryColor || secondaryColor,
        secondaryTextColor: theme?.secondaryTextColor || secondaryTextColor,
        successColor: theme?.successColor || successColor,
        successTextColor: theme?.successTextColor || successTextColor,
        dangerColor: theme?.dangerColor || dangerColor,
        dangerTextColor: theme?.dangerTextColor || dangerTextColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
