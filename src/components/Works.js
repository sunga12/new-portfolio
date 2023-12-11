import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from './Project';
import projects from '../projects/projects';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  shifted: {
    x: '85vw',

  },
  unshifted: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: (window.innerWidth > 768) ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <motion.h1
        variants={containerVariants}
        initial="shifted"
        animate="unshifted"
      >
        Some of my works:
      </motion.h1>

      <motion.h2
        variants={containerVariants}
        initial="shifted"
        animate="unshifted"
      >
        Front-End Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="slides"
      >
        <Slider {...settings}>
          {projects.filter((p) => p.category === 'Front-End').map((project) => (
            <Project
              key={project.id}
              category={project.category}
              name={project.name}
              description={project.description}
              featuredImage={project.featuredImage}
              technologies={project.technologies}
            />
          ))}
        </Slider>
      </motion.div>

      <motion.h2
        variants={containerVariants}
        initial="shifted"
        whileInView="unshifted"
        viewport={{ once: true }}
      >
        Back-End Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="slides"
      >
        {projects.filter((p) => p.category === 'Back-End').map((project) => (
          <Project
            key={project.id}
            category={project.category}
            name={project.name}
            description={project.description}
            featuredImage={project.featuredImage}
            technologies={project.technologies}
          />
        ))}
      </motion.div>

      <motion.h2
        variants={containerVariants}
        initial="shifted"
        whileInView="unshifted"
        viewport={{ once: true }}
      >
        Full-Stack Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="slides"
      >
        <Slider {...settings}>
          {projects.filter((p) => p.category === 'Full-Stack').map((project) => (
            <Project
              key={project.id}
              category={project.category}
              name={project.name}
              description={project.description}
              featuredImage={project.featuredImage}
              technologies={project.technologies}
            />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Works;
