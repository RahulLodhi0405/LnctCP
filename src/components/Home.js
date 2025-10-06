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
import shreyansh from '../Assets/shreyansh.png';

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
          <img src={Logo} alt="Enigma Logo" className="cp-logo" />
          <div className="club-info">
            <h1 className="club-name">Enigma</h1>
            <p className="club-subtitle">AIML Club of LNCT</p>
            <p className="club-tagline">A playground where ideas meet data — learn, build, and deploy intelligent systems.</p>
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
            <img src={about} alt="About Enigma Animation" />
          </motion.div>
          <div className="about-text">
            <br />
            <p>
              Enigma is a community of students passionate about Artificial Intelligence, Machine Learning and Data Science.
              We focus on hands-on learning — workshops, projects, research, and hackathons — so members can build real-world
              ML systems, understand algorithms, and collaborate across domains.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events">
        <h2>Upcoming Events</h2>
        <br />
        <br />
        <div className="event-cards">
          <div className="event-card">
            <h3>AI/ML Hackathon 2025</h3>
            <br />
            <p>Build models, deploy demos, and compete to solve real problems using AI. Teams, mentorship and prizes await.</p>
            <br /><br />
            <a href="#register" className="cta-button">Register Now</a>
          </div>
          <div className="event-card">
            <h3>Workshop: Intro to PyTorch</h3>
            <br />
            <p>Hands-on session to learn deep learning fundamentals and build your first neural network using PyTorch.</p>
            <br /><br />
            <a href="#register" className="cta-button">Participate</a>
          </div>
        </div>
      </section>

      <br /><br /><br /><br />

      <section className="card-grid-section">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Smart Tourist Safety System</h3>
            <p>An IoT + ML system for tourist safety with anomaly detection and multilingual alerts.</p>
          </div>
          <div className="card">
            <h3>Sentiment Analyzer</h3>
            <p>A real-time social media sentiment pipeline using NLP and visual dashboards.</p>
          </div>
          <div className="card">
            <h3>Medical Image Classifier</h3>
            <p>Prototype model to assist in screening using CNNs and explainability tools.</p>
          </div>
          <div className="card">
            <h3>Recommender Engine</h3>
            <p>Personalized recommendation system built with collaborative filtering and embeddings.</p>
          </div>
        </div>
      </section>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      {/* Our Team Section */}
      <section className="our-team">
        <h2>Our Team</h2>
        <br /><br />
        
        {/* Coordinator Section 
        <div className="coordinator">
          <img src={Adarshsir} alt="Faculty Coordinator" />
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

        <br /><br />

        */}
        {/* Team Grid */}
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-member">
            <img src={Priyanshu} alt="President - Enigma" />
            <h3>
              Priyanshu Lohani
              <p>President</p>
              <a href="https://www.linkedin.com/in/priyanshulohani/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/iamlohanip" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/PriDev07" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> 
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://instagram.com/priyanshulohanii" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </h3>

            <p className="role">President</p>
            <div className="social-media"></div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img src={Rahul} alt="Vice President - Enigma" />
            <h3>
              Rahul Lodhi
              <p>Vice President</p>
              <a href="https://linkedin.com/in/rahullodhisdr" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://twitter.com/Rahul_P_A_S" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/RahulLodhi0405" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> 
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://instagram.com/rahullodhi.27" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </h3>

            <p className="role">Vice President</p>
            <div className="social-media"></div>
          </div>
        </div>
      </section>

      <br /><br /><br /><br />
      {/*
      <div className="coordinators-grid">
        <div className="coordinator">
          <img src={shreyansh} alt="Development Lead" />
          <h3>Development Lead</h3>
          <p>Shreyansh Pandit</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/shreyansh-pandit-1b47b2203/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/Shreyanshloop07" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/shreyansh-Geek" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" /> 
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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
        
        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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
        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

        <div className="coordinator">
          <img src={Adarsh} alt="Creative Head" />
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

     <section className="sliding-images-section">
  <div className="sliding-images">
    <div className="image-container-left-to-right">
      <img
        src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 1"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 2"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 3"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010128.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 4"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 5"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040433.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 6"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 7"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 8"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062006.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 9"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/male-programmer-coding-laptop_482257-87912.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 10"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-working-html-computer_23-2150038840.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 11"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010115.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 12"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-software-code-application-technology-concept_53876-123931.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 13"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061960.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 14"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 15"
        className="sliding-image"
      />
    </div>
  </div>
</section>

<section className="sliding-images-section">
  <div className="sliding-images">
    <div className="image-container-right-to-left">
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 1"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/freelancing-cybersecurity-admin-using-computer-prevent-cyber-attacks_482257-82942.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 2"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/cyber-attack-with-unrecognizable-hooded-hacker-using-virtual-reality-digital-glitch-effect_146671-18951.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 3"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 4"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040413.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 5"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170131.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 6"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901781.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 7"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/software-programming-web-development-concept_53876-176752.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 8"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124783.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 9"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/team-database-admins-analyzing-source-code-wall-screen-tv-comparing-errors-using-digital-tablet-busy-server-room-two-cloud-programers-debugging-algorithm-software-innovation-office_482257-43976.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 10"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124097.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 11"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040431.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 12"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010119.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 13"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170126.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 14"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 15"
        className="sliding-image"
      />
      <img
        src="https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18932.jpg?ga=GA1.1.1767342982.1726574862&semt=ais_hybrid"
        alt="Sponsor 16"
        className="sliding-image"
      />
    </div>
  </div>
</section>
*/}
<br />
<br />
<br />
<br />
<br />
<br />
<br />

      

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
            <p>Email: <a href="mailto:enigmaaimlclub@gmail.com">enigmaaimlclub@gmail.com</a></p>
            <p>Phone: +91 12345 67890</p>
            <p>Location: LNCT College, Raisen Road, Bhopal - 462022</p>
          </div>

        <div className="footer-map">
  <iframe
    title="club-location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58652.430412086!2d77.44852714863279!3d23.251204200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2z4KSP4KSy4KSP4KSo4KS44KWA4KSf4KWAIOCkl-CljeCksOClgeCkqiDgpJHgpKsg4KSV4KWJ4KSy4KWH4KSc4KWH4KS4!5e0!3m2!1shi!2sin!4v1759560914642!5m2!1shi!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Enigma – AIML Club | All Rights Reserved</p>
          <div className="footer-terms">
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
