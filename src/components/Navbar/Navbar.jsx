import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";
import '../../styles/components/navbar.css';
import SearchBar from "./SearchBar";
import { Context as AppContext } from "../../contexts/AppContext";

const Navbar = ({ onSelectCategory, onSearch }) => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light-theme";
  };

  const [theme, setTheme] = useState(getInitialTheme());
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate(); 

  const isLoggedIn = !!token;

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // Clear context token
    navigate("/login");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
            <BrandLogo />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <NavLinks isLoggedIn={isLoggedIn} onLogout={handleLogout} />

              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <div className="d-flex align-items-center cart">
                <i className="bi bi-cart me-2" style={{ display: "flex", alignItems: "center" }}>
                  Cart
                </i>
                <SearchBar />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
