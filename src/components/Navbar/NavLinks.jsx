import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import MainNavLinks from "./MainNavLinks";
import CategoryToggle from "./CategoryToggle";


const NavLinks = () => {
  
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <AuthButtons />
      <MainNavLinks />
      <CategoryToggle />
    </ul>
  );
};

export default NavLinks;
