import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context as AppContext } from '../../contexts/AppContext'; 

function AuthButtons() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);  
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);  
    navigate("/login");
  };

  return (
    <div>
      {isLoggedIn ? (
        <li className='nav-item'>
          <button onClick={handleLogout} className="nav-link btn btn-link">
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </>
      )}
    </div>
  );
}

export default AuthButtons;
