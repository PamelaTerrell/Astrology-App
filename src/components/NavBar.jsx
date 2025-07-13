import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${menuActive ? 'active' : ''}`}>
        <Link to="/" className="navbar-logo">
          ✨ Astrology
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-links" onClick={() => setMenuActive(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/compatibility" className="navbar-links" onClick={() => setMenuActive(false)}>Zodiac Compatibility</Link>
          </li>
          <li className="navbar-item">
            <Link to="/love-signs" className="navbar-links" onClick={() => setMenuActive(false)}>Love Signs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
