import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 16px rgb(255,255,255)',
    boxShadow: '0px 0px 16px rgb(255,255,255)',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.4,
    },
  },
};

const openResume = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1w6tg-esOivXjZ0izzSLLaS1Tf7EvQyjDWNKVFFEPppk/edit?usp=sharing';
  window.open(resumeUrl, '_blank');
};

const About = () => (
  <div id="about">
    <h1 className="about-title">About me</h1>
    <p className="ab-info">I&apos;m a Full-stack developer! I love music, and mentoring! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don&apos;t hesitate to contact me.</p>
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      type="button"
      className="resume-link"
      target="_blank"
      onClick={openResume}
    >
      Get My Resume
    </motion.button>
  </div>
);

export default About;
