import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`navbar ${menuActive ? 'active' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Astrology App
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/compatibility" className="navbar-links">
              Zodiac Compatibility
            </Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
