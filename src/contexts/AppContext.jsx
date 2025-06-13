// src/context/AppContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // ✅ Theme state
  const getInitialTheme = () => localStorage.getItem("theme") || "light-theme";
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <Context.Provider value={{ token, setToken, theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};
