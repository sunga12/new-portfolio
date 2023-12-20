import React, { useState } from 'react';
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
  name, description, featuredImage, technologies, liveLink, sourceLink, category, deployed,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      {modalOpen}
      <div className={`${category} 'project'`}>
        <div className="img-div">
          <img className="proj-img" src={featuredImage} alt="project" />
        </div>
        <h4>{name}</h4>
        <p className="proj-desc">{description}</p>
        <ul className="techs">
          {technologies.map((tech) => (
            <li className="tech" key={tech.id}>{tech}</li>
          ))}
        </ul>
        <a href={sourceLink} target="_blank" rel="noreferrer">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            Source
          </motion.button>
        </a>
        <span> </span>
        {deployed
        && (
        <a href={liveLink} target="_blank" rel="noreferrer">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            Live
          </motion.button>
        </a>
        )}
      </div>
    </>
  );
};

Project.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.string,
  technologies: PropTypes.string,
  liveLink: PropTypes.string,
  sourceLink: PropTypes.string,
  category: PropTypes.string,
  deployed: PropTypes.bool,
};

Project.defaultProps = {
  name: '',
  featuredImage: '',
  description: '',
  technologies: '',
  liveLink: '',
  sourceLink: '',
  category: '',
  deployed: '',
};

export default Project;
