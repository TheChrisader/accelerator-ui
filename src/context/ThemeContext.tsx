import React from "react";

export interface Theme {
  primaryColor?: string;
  primaryTextColor?: string;
  secondaryColor?: string;
  secondaryTextColor?: string;
  successColor?: string;
  successTextColor?: string;
  dangerColor?: string;
  dangerTextColor?: string;
}

// Create the theme colors state
export default React.createContext<Theme | undefined>({
  primaryColor: "#006eff",
});
