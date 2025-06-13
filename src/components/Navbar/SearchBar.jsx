import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [noMatches, setNoMatches] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isInputFocused, setInputFocused] = useState(false); // left

  const handleSearch = async (value) => {
    setQuery(value);

    if (value.length >= 1) {
      setDropdownVisible(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/products/search?keyword=${value}`
        );
        const results = response.data;
        setProducts(results);
        setNoMatches(results.length === 0);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setDropdownVisible(false);
      setProducts([]);
      setNoMatches(false);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search products..."
        aria-label="Search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />

      {isDropdownVisible && (
        <ul className="list-group">
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id} className="list-group-item">
                <Link
                  to={`/product/${product.id}`}
                  className="search-result-link"
                >
                  <span>{product.name}</span>
                </Link>
              </li>
            ))
          ) : (
            noMatches && (
              <p className="no-results-message">
                No product with such name
              </p>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
