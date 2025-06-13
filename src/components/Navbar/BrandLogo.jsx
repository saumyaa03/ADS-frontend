import React from 'react'
import { Link } from 'react-router-dom';

function BrandLogo() {
  return (
    <div>
      <Link to="/" className="navbar-brand">
              <span className="arian-logo">ARIAN</span>
              {/* <span className="arian-sub"> Lifestyle</span> */}
      </Link>
    </div>
  )
}

export default BrandLogo;