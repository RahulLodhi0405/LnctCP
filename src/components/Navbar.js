import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Login from './login/login'

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
        <li><a href="#home">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#members">Blogs</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
        <Link to="/login" style={styles.navLink}>Login</Link>
        <li><a href="#members">Signup</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Navbar;
