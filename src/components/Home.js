import React from "react";
import { motion } from "framer-motion"; // For animations
import "./Home.css"; // Custom styles
import Logo from '../Assets/Logo.png'; // Club logo
import { FaLinkedin, FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'; // Font Awesome Icons
import Rahul from '../Assets/Rahul.png'; // Example team image (replace with actual)
import Priyanshu from '../Assets/Priyanshu.png';
import Adarshsir from '../Assets/Adarshsir.png';
import about from '../Assets/about.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* Logo Animation */}
        <motion.div
          className="logo-container"
          initial={{ x: '-100vw' }}
          animate={{ x: '0' }}
          transition={{ type: 'spring', stiffness: 30, duration: 4 }}
        >
          <img src={Logo} alt="CP Club Logo" className="cp-logo" />
          <div className="club-info">
            <h1 className="club-name">Competitive Programming Club</h1>
            <p className="club-tagline">Empowering future coders, one problem at a time.</p>
          </div>
        </motion.div>

      </section>
{/* About Us Section */}
<section className="about-us">
  <div className="about-content">
    <motion.div
      className="about-animation"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    > 
    <h2>About Us</h2>
      {/* Futuristic animation or image */}
      <img src={about} alt="About Animation" />
    </motion.div>
    <div className="about-text">
    <br></br>
      <p>
        We are a dedicated community of programmers, passionate about competitive programming.
        Our goal is to foster a collaborative environment where coding skills are honed through
        regular practice, hackathons, and mentorship programs.
      </p>
    </div>
  </div>
</section>


      {/* Upcoming Events Section */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <br></br>
        <br></br>
        <div className="event-cards">
          <div className="event-card">
            <h3>Hackathon 2024</h3><br></br>
            <p>Join us for our annual hackathon! Code, collaborate, and compete for exciting prizes.</p> <br></br> <br></br>
            <a href="#register" className="cta-button">Register Now</a>
          </div>
          <div className="event-card">
            <h3>Coding Challenge</h3> <br></br>
            <p>Test your coding skills and improve by competing in our weekly challenges.</p> <br></br> <br></br>
            <a href="#register" className="cta-button">Participate</a>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Our Team Section */}
      <section className="our-team">
        <h2>Our Team</h2>
        <br></br><br></br>
        <div className="coordinator">
          
          <img src={Adarshsir} alt="Coordinator" />
          <h3>Coordinator</h3>
          <p>Adarsh Raushan </p>
          <div className="social-media">
            <FaLinkedin className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <img src={Priyanshu} alt="President" />
            <h3>President</h3>
            <p>Priyanshu Lohani</p>
            <div className="social-media">
              <FaLinkedin className="social-icon" />
              <FaTwitter className="social-icon" />
            </div>
          </div>
          <div className="team-member">
            <img src={ Rahul} alt="Vice President" />
            <p>Rahul Lodhi</p>
            <h3>V-President</h3>
            
            <div className="social-media">
              <FaGithub className="social-icon" />
              <FaDiscord className="social-icon" />
            </div>
          </div>

        
        </div>
      </section>

      <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="contact-heading">Get in Touch</h2>
        <form className="contact-form" action="https://formspree.io/f/xbljykqe" method="POST">
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder="Your Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" required placeholder="Your Email" className="form-input" />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" required placeholder="Your Message" className="form-input"></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="submit-button"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  


      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>

          <div className="footer-map">
            {/* Add a map embed */}
            <iframe
              title="club-location"
              src="https://www.google.com/maps/embed?pb=..."
              style={{ border: 0, width: "100%", height: "200px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <p>&copy; 2024 Competitive Programming Club | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
