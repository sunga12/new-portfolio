import React from 'react';

const Project = ({ name, description, featuredImage, technologies }) => {
  return (
    <div className='project'>
      <div>
        <img src={featuredImage} alt='project image'/>
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <button>More Info</button>
    </div>
  )
}

export default Project;
