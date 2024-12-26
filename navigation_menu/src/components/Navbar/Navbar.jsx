import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>MySite</h1>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" width='20px' alt="Menu" />
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" style={{ textDecoration: 'none' }} onClick={toggleMenu}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }} onClick={toggleMenu}>
          <li>About</li>
        </Link>
        <Link to="/services" style={{ textDecoration: 'none' }} onClick={toggleMenu}>
          <li>Services</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={toggleMenu}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
