// src/components/Navbar/ThemeToggle.jsx
import React, { useContext } from "react";
import { Context as AppContext } from "../../contexts/AppContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "dark-theme" ? (
        <i className="bi bi-moon-fill"></i>
      ) : (
        <i className="bi bi-sun-fill"></i>
      )}
    </button>
  );
}

export default ThemeToggle;
