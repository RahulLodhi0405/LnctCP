import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../NavBar/Navbar.css";
import collegeLogo from "../../Assets/CollegeLogo.png";
import "font-awesome/css/font-awesome.min.css";
import { useAuth } from "../../Context/AuthContext"; // Import AuthContext for user state
import DiamondHead from "../../Assets/DiamondHead.jpg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { user } = useAuth(); // Get the current user from the AuthContext
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="https://www.lnct.ac.in" target="_blank" rel="noopener noreferrer">
          <img src={collegeLogo} alt="College Logo" className="college-logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <ul
        className={isMobile ? "navbar-links-mobile" : "navbar-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/opportunities"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Opportunities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/discussion"
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
          >
            Discussion
          </NavLink>
        </li>
        <li>
          
          {user ? (
            <img
              src={DiamondHead}
              alt="Profile"
              className="profile-picture"
              onClick={() => navigate("/profile")} 
            />
          ) : (
            <button
              className="navbar-login-button"
              onClick={() => navigate("/login")} 
            >
              Login
            </button>
          )}
        </li>
      </ul>

      {/* Mobile Menu Icon */}
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
