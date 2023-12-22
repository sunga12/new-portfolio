import React, { useState } from 'react';
import { motion } from 'framer-motion';
import menu from '../assets/images/Hamburger.png';
import close from '../assets/images/close.png';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="nav-top">
      {!open
      && (
      <button className="hamburger" type="button" onClick={() => setOpen(!open)}>
        <img src={menu} alt="logo" />
      </button>
      )}
      {open
      && (
      <div className="bg">
        <ul className="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#works">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="close" type="button" onClick={() => setOpen(!open)}>
          <img src={close} alt="logo" />
        </button>
      </div>
      )}
    </motion.div>
  );
};

export default Navigation;
