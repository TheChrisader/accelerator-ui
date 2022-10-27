import React from "react";

export interface ITheme {
  mode?: string;
  colors?: {
    main?: {
      primary?: {
        default?: string;
        light?: string;
        dark?: string;
        border?: string;
        background?: string;
      };
      secondary?: {
        default?: string;
        light?: string;
        dark?: string;
        border?: string;
        background?: string;
      };
      success?: {
        default?: string;
        light?: string;
        dark?: string;
        border?: string;
        background?: string;
      };
      danger?: {
        default?: string;
        light?: string;
        dark?: string;
        border?: string;
        background?: string;
      };
      border?: string;
      background?: string;
      white?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      white?: string;
      black?: string;
    };
  };
}

export interface IColorProps {
  default?: string;
  light?: string;
  dark?: string;
  border?: string;
  background?: string;
}

// Create the theme colors state
export default React.createContext<ITheme | undefined>(undefined);
