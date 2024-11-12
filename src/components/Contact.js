import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import { motion } from 'framer-motion'; // For subtle animations

const Contact = () => {
  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="contact-heading">Get in Touch</h2>
        <form className="contact-form" action="https://formspree.io/f/yourform" method="POST">
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
  );
};

export default Contact;