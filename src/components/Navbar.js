import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import collegeLogo from '../Assets/CollegeLogo.png'; // Path to your college logo
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://www.lnct.ac.in" target="_blank" rel="noopener noreferrer">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </a>
      </div>
      <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"} onClick={() => setIsMobile(false)}>
        <li><Link to="/">Home</Link></li> {/* Link to Home */}
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/blog">blog</Link></li>
        
        
        <li><Link to="/gallery">Gallery</Link></li> {/* Link to Gallery */}
        <li><a href="#contact">Contact</a></li>
        <li><a href="#members">Discussion</a></li>
        <li><button>Login</button></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
