import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  name, description, featuredImage, technologies, category,
}) => (
  <div className={`${category}`}>
    <div>
      <img src={featuredImage} alt="project" />
    </div>
    <h4>{name}</h4>
    <p>{description}</p>
    <ul>
      {technologies.map((tech) => (
        <li key={tech.id}>{tech}</li>
      ))}
    </ul>
    <button type="button">More Info</button>
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
