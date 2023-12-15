import React from 'react';
import { motion } from 'framer-motion';
import wellfound from '../assets/images/angel list.png';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/Linkedin icon.png';
import medium from '../assets/images/medium.png';

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '30vw',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 5,
    },
  },
};

const iconVariants = {
  hover: {
    y: -5,
    transition: {
      repeat: 10,
      repeatType: 'mirror',
      duration: 0.2,
    },
  },
};

const Home = () => (
  <div className="headline">
    <h1 className="hello-me">Hey, I&apos;m Sunga.</h1>
    <h3 className="SD">
      A Software Developer.
    </h3>
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
    <p className="info">I deliver exceptional user experiences & and robust solutions. Need help? Get in touch.</p>
    <motion.div
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      className="sliding-text"
    >
      Front-End | Back-End | Full-Stack
    </motion.div>
  </div>
);

export default Home;
