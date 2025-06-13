import React from "react";
import { Link } from "react-router-dom";

const MainNavLinks = () => (
  <>
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/add_product">
        Add Product
      </Link>
    </li>
  </>
);

export default MainNavLinks;
