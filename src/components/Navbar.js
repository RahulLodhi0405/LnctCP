import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import collegeLogo from '../Assets/CollegeLogo.png';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://www.lnct.ac.in" target="_blank" rel="noopener noreferrer">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </a>
      </div>
      <ul
        className={isMobile ? 'navbar-links-mobile' : 'navbar-links'}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/opportunities"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Opportunities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/discussion"
            className={({ isActive }) =>
              `navbar-link ${isActive ? 'active' : ''}`
            }
          >
            Discussion
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `navbar-link button-link ${isActive ? 'active' : ''}`
            }
          >
            Login
          </NavLink>
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
