import { createContext } from "react";

export const themes = {
    light: {
      height: '100vh',
      background: "#efefef",
      color: "#232323",
      padding: 10
    },
    dark: {
      height: '100vh',
      background: "#232323",
      color: "#efefef",
      padding: 10
    }
}

export const ThemeContext = createContext();