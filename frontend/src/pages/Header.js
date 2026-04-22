import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, user, setIsLoggedIn }) => {
  return (
    <header className="header">
      <h1>InfoMitra</h1>
      <div className="auth-section">
        {isLoggedIn ? (
          <Link to="/profile" className="profile-icon">
            <span>👤 {user.name}</span>
          </Link>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
