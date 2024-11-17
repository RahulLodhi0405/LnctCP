import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Navbar.css';
import collegeLogo from '../Assets/CollegeLogo.png'; 
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://www.lnct.ac.in" target="_blank" rel="noopener noreferrer">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </a>
      </div>
      <ul
        className={isMobile ? "navbar-links-mobile" : "navbar-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link to="/events" className={isActive("/events") ? "active" : ""}>Events</Link>
        </li>
        <li>
          <Link to="/resources" className={isActive("/resources") ? "active" : ""}>Resources</Link>
        </li>
        <li>
          <Link to="/blog" className={isActive("/blog") ? "active" : ""}>Blog</Link>
        </li>
        <li>
          <Link to="/gallery" className={isActive("/gallery") ? "active" : ""}>Gallery</Link>
        </li>
        <li>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
        </li>
        <li>
          <Link to="/opportunities" className={isActive("/opportunities") ? "active" : ""}>Opportunities</Link>
        </li>
        <li>
          <Link to="/discussion" className={isActive("/discussion") ? "active" : ""}>Discussion</Link>
        </li>
        <li>
          <button>Login</button>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
