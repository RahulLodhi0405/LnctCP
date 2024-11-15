import React from "react";
import { motion } from "framer-motion"; // For animations
import "./Home.css"; // Custom styles
import Logo from '../Assets/Logo.png'; // Club logo
import { FaLinkedin, FaDiscord, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Font Awesome Icons
import Rahul from '../Assets/Rahul.png'; // Example team image (replace with actual)
import Priyanshu from '../Assets/Priyanshu.png';
import Adarshsir from '../Assets/Adarshsir.png';
import about from '../Assets/about.png';
import Adarsh from '../Assets/Adarsh.png';

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
          
          <h1 className="club-name">CodersArena</h1>
          <p className="club-subtitle">Competitive Programming Club of LNCT</p>
            <p className="club-tagline">Arena where programming athletes rise, code, and excel.</p>
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


      
<section className="card-grid-section">
  <h2>Featured Projects</h2>
  <div className="card-grid">
    <div className="card">
      <h3>Project 1</h3>
      <p>Explore our latest coding challenges and improve your skills.</p>
    </div>
    <div className="card">
      <h3>Project 2</h3>
      <p>Get involved in competitive programming events and contests.</p>
    </div>
    <div className="card">
      <h3>Project 3</h3>
      <p>Join our hackathons and collaborate on innovative solutions.</p>
    </div>
    <div className="card">
      <h3>Project 4</h3>
      <p>Learn and grow by solving complex algorithm challenges.</p>
    </div>
  </div>
</section>

<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

{/* Our Team Section */}
<section className="our-team">
  <h2>Our Team</h2>
  <br /><br />
  
  {/* Coordinator Section */}
  <div className="coordinator">
    <img src={Adarshsir} alt="Coordinator" />
    <h3>Coordinator</h3>
    <p>Prof. Adarsh Raushan</p>
    <div className="social-media">
    <a href="https://www.linkedin.com/in/adarsh-raushan-a0ba89141/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
           </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" /> 
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://instagram.com/adarshraushan1995" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a> 
    </div>
  </div>
  <br></br><br></br>
  {/* Team Grid */}
  <div className="team-grid">
    
    {/* Team Member 1 */}
    <div className="team-member">
      <img src={Priyanshu} alt="President" />
      <h3>Priyanshu Lohani  <p>President</p> <a href="https://www.linkedin.com/in/priyanshulohani/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com/iamlohanip" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
           </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/PriDev07" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" /> 
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://instagram.com/priyanshulohanii" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>  </h3> 


      <p className="role">President</p> {/* Role */}
      <div className="social-media">
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="team-member">
      <img src={Rahul} alt="Vice President" />
      <h3>Rahul Lodhi <p>Vice President</p> <a href="https://linkedin.com/in/rahullodhisdr" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com/Rahul_P_A_S" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
           </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com/RahulLodhi0405" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" /> 
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://instagram.com/_rahul.lodhi_" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a> </h3>


      <p className="role">Vice President</p> {/* Role */}
      <div className="social-media">
        
      </div>
    </div>

  </div>
</section>
<br></br> <br></br><br></br><br></br>
<div className="coordinator">
    <img src={Adarsh} alt="Coordinator" />
    <h3>Creative Head</h3>
    <p>Adarsh Gupta</p>
    <div className="social-media">
    <a href="https://www.linkedin.com/in/idealgupta/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
           </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" /> 
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a> 
    </div>
    </div>


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
    
    {/* Social Links Section */}
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

    {/* Contact Information */}
    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:cpclub@example.com">LnctCP@club.com</a></p>
      <p>Phone: +123 456 7890</p>
      <p>Location: 462022 Lnct College , Raisen Road , Bhopal</p>
    </div>

    {/* Map Embed */}
    <div className="footer-map">
      <iframe
        title="club-location"
        src="https://www.google.com/maps/embed?pb=..."
        style={{ border: 0, width: "100%", height: "200px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>


  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Competitive Programming Club | All Rights Reserved</p>
    <div className="footer-terms">
      <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;
