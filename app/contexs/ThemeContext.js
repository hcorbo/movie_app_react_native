import React, { Component, createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const themeStyles = {
      backgroundColor: isLightTheme ? "#eee" : "#555",
      color: isLightTheme ? "#222" : "#eee"
  }
  const values = {
      isLightTheme,
      setIsLightTheme,
      themeStyles
  }
  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
