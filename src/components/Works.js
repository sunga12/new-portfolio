import React from 'react';
import Project from './Project';
import projects from '../projects/projects';


const Works = () => {
  return (
    <div>
      <h2>Front-End Projects</h2>

  {projects.filter((project) => project.category === 'Front-End').map((project, index) => (
    <Project key={index} 
      name={project.name}
      description={project.description}
      featuredImage={project.featuredImage}
      technologies={project.technologies} />
  ))}

<h2>Back-End Projects</h2>

{projects.filter((project) => project.category === 'Back-End').map((project, index) => (
    <Project key={index} 
      name={project.name}
      description={project.description}
      featuredImage={project.featuredImage}
      technologies={project.technologies} />
  ))}

<h2>Full-Stack Projects</h2>

{projects.filter((project) => project.category === 'Full-Stack').map((project, index) => (
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
