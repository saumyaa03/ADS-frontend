import React from 'react'
import { Link } from 'react-router-dom'

function CategoryToggle() {
  return (
    <div>
        <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </Link>
        {/* We’ll handle dropdown items in CategoryDropdown.jsx */}
      </li>
    </div>
  )
}

export default CategoryToggle