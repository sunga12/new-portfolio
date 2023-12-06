import React from 'react';
import Project from './Project';
import projects from '../projects/projects';


const Works = () => {
  return (
    <div>
      <h2>Some of my works</h2>

  {projects.map((project, index) => (
    <Project key={index} 
      name={project.name}
      description={project.description}
      featuredImage={project.featuredImage}
      technologies={project.technologies} />
  ))}
    </div>
  )
}

export default Works;
