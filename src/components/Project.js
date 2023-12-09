import React from 'react';
import PropTypes from 'prop-types';
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

const Project = ({
  name, description, featuredImage, technologies, category,
}) => (
  <div className={`${category}`}>
    <div>
      <img src={featuredImage} alt="project" />
    </div>
    <h4>{name}</h4>
    <p className="proj-desc">{description}</p>
    <ul className="techs">
      {technologies.map((tech) => (
        <li className="tech" key={tech.id}>{tech}</li>
      ))}
    </ul>
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      type="button"
    >
      More Info
    </motion.button>
  </div>
);

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.string,
  technologies: PropTypes.string,
  category: PropTypes.string,
};

Project.defaultProps = {
  name: '',
  featuredImage: '',
  description: '',
  technologies: '',
  category: '',
};

export default Project;
