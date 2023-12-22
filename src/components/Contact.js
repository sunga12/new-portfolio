import React from 'react';
import { motion } from 'framer-motion';
import wellfound from '../assets/images/angel list.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/Linkedin icon.png';
import medium from '../assets/images/medium.png';

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

const iconVariants = {
  hover: {
    y: -5,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.2,
    },
  },
};

const Contact = () => (
  <div id="contact">
    <h1 className="about-title">Contact me</h1>
    <ul className="icons">
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://www.github.com/sunga12"><img src={github} className="contact-icon" alt="github" /></a>
      </motion.li>
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://www.linkedin.com/in/sungabanja-thawethe-b3419b142"><img src={linkedin} className="contact-icon" alt="linkedIn" /></a>
      </motion.li>
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://wellfound.com/u/sungabanja-thawethe"><img src={wellfound} className="contact-icon" alt="wellfound" /></a>
      </motion.li>
      <motion.li
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
      >
        <a href="https://medium.com/@sungabt"><img src={medium} className="contact-icon" alt="medium" /></a>
      </motion.li>
    </ul>
    <h4 className="contact-comment">I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat please get in touch.</h4>
    <form action="https://formspree.io/f/mqkoaqdk/" method="POST">
      <ul className="form-list">
        <li>
          <input type="text" name="user-name" id="name" maxLength="30" required placeholder="Full name" />
        </li>
        <li>
          <input type="email" name="user-email" id="email" required placeholder="Email address" />
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
    <footer>
      <a href="https://www.freepik.com/free-psd/isolated-tablet-laptop-smartphone-composition_40505824.htm#query=laptop%20ipad%20phone&position=0&from_view=keyword&track=ais&uuid=6ace027a-a553-4fee-b805-4e6f84107415">*SmartSpendr Image by Vectonauta</a>
      on Freepik
    </footer>
  </div>
);

export default Contact;
