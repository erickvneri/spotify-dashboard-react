import { createContext } from "react";

export const themes = {
  dark: {
    // default theme
    background: "#262626",
    color: "#ffffff",
  },
  light: {
    background: "#ffffff",
    color: "#262626",
  },
};

export const ThemeContext = createContext([], () => {});
