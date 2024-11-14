import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import collegeLogo from '../Assets/CollegeLogo.png'; 
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
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/Discussion">Discussion</Link></li>
       
        <li><button>Login</button></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
