import React from 'react'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "dark-theme" ? (
        <i className="bi bi-moon-fill"></i>
      ) : (
        <i className="bi bi-sun-fill"></i>
      )}
    </button>
  );
};

export default ThemeToggle