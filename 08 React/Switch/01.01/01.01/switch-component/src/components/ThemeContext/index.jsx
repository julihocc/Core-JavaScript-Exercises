import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../Themes"; // Import initial theme

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme.label === "light") {
        return darkTheme;
      } else {
        return lightTheme;
      }
    });
    return "Theme toggled.";
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
