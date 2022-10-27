import React from "react";
import ThemeContext from "../../context/ThemeContext";
import { ITheme } from "../../context/ThemeContext";
import { lightTheme } from "../../styles";

export interface ThemeProviderProps {
  theme?: ITheme;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider
      value={{
        mode: theme?.mode || lightTheme.mode,
        colors: {
          main: {
            primary: {
              default:
                theme?.colors?.main?.primary?.default ||
                lightTheme.colors.main.primary.default,
              light:
                theme?.colors?.main?.primary?.light ||
                lightTheme.colors.main.primary?.light,
              dark:
                theme?.colors?.main?.primary?.dark ||
                lightTheme.colors.main.primary?.dark,
              border:
                theme?.colors?.main?.primary?.border ||
                lightTheme.colors.main.primary?.border,
              background:
                theme?.colors?.main?.primary?.background ||
                lightTheme.colors.main.primary?.background,
            },
            secondary: {
              default:
                theme?.colors?.main?.secondary?.default ||
                lightTheme.colors.main.secondary.default,
              light:
                theme?.colors?.main?.secondary?.light ||
                lightTheme.colors.main.secondary?.light,
              dark:
                theme?.colors?.main?.secondary?.dark ||
                lightTheme.colors.main.secondary?.dark,
              border:
                theme?.colors?.main?.secondary?.border ||
                lightTheme.colors.main.secondary?.border,
              background:
                theme?.colors?.main?.secondary?.background ||
                lightTheme.colors.main.secondary?.background,
            },
            success: {
              default:
                theme?.colors?.main?.success?.default ||
                lightTheme.colors.main?.success?.default,
              light:
                theme?.colors?.main?.success?.light ||
                lightTheme.colors.main?.success?.light,
              dark:
                theme?.colors?.main?.success?.dark ||
                lightTheme.colors.main?.success?.dark,
              border:
                theme?.colors?.main?.success?.border ||
                lightTheme.colors.main?.success?.border,
              background:
                theme?.colors?.main?.success?.background ||
                lightTheme.colors.main?.success?.background,
            },
            danger: {
              default:
                theme?.colors?.main?.danger?.default ||
                lightTheme.colors.main?.danger?.default,
              light:
                theme?.colors?.main?.danger?.light ||
                lightTheme.colors.main?.danger?.light,
              dark:
                theme?.colors?.main?.danger?.dark ||
                lightTheme.colors.main?.danger?.dark,
              border:
                theme?.colors?.main?.danger?.border ||
                lightTheme.colors.main?.danger?.border,
              background:
                theme?.colors?.main?.danger?.background ||
                lightTheme.colors.main?.danger?.background,
            },
            border:
              theme?.colors?.main?.border || lightTheme.colors.main?.border,
            background:
              theme?.colors?.main?.background ||
              lightTheme.colors.main?.background,
            white: theme?.colors?.main?.white || lightTheme.colors.main?.white,
          },
          text: {
            primary:
              theme?.colors?.text?.primary || lightTheme.colors.text.primary,
            secondary:
              theme?.colors?.text?.secondary ||
              lightTheme.colors.text.secondary,
            white: theme?.colors?.text?.white || lightTheme.colors.text.white,
            black: theme?.colors?.text?.black || lightTheme.colors.text.black,
          },
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
