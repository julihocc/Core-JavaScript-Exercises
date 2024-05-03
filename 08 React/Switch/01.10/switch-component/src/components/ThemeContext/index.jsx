import { createContext, useState, useCallback, useEffect, useRef } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState(() => {
  //   const localTheme = localStorage.getItem("theme");
  //   return localTheme ? localTheme : "light";
  // });

  const [theme, setTheme] = useState("light"); // "light" or "dark"
  // const [theElement, setTheElement] = useState(document.documentElement);
  const theElement = useRef(document.documentElement);

  const _toggleTheme = () => {
    console.log("toggleTheme/before: ", theme);
    if (theme === "light") {
      theElement.current.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      theElement.current.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const toggleTheme = useCallback(_toggleTheme, [theme, theElement]);
  // const toggleTheme = _toggleTheme;

  useEffect(() => {
    console.log("theme/after ", theme);
    theElement.current.setAttribute("data-bs-theme", theme);
  }, [theme]);

  useEffect(() => {
    console.log("theElement.current: ", theElement.current);
    console.log(theElement.current.getAttribute("data-bs-theme"));
  }, [theElement]);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
