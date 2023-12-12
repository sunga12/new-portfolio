import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.4,
    },
  },
};

const Contact = () => (
  <div>
    <h1 className="about-title">Contact me</h1>
    <h3 className="contact-comment">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</h3>
    <form action="https://formspree.io/f/mqkoaqdk/" method="POST">
      <ul className="form-list">
        <li>
          <input type="text" name="user-name" id="name" maxLength="30" required placeholder="Full name" />
        </li>
        <li>
          <input type="email" name="user-email" id="mail" required placeholder="Email address" />
        </li>
        <li>
          <textarea name="user-message" id="message" maxLength="500" required placeholder="Write me something..." />
        </li>
        <li className="contact-button">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="form-submit"
            type="submit"
          >
            Get in touch
          </motion.button>
        </li>
        <span id="error" aria-live="polite" />
      </ul>
    </form>
  </div>
);

export default Contact;
