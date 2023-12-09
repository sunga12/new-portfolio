import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Project from './Project';
import projects from '../projects/projects';

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
      <h2>Front-End Projects</h2>
      <div className="slides">
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
      </div>

      <h2>Back-End Projects</h2>
      <div className="slides">
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
        <br />
      </div>

      <h2>Full-Stack Projects</h2>
      <div className="slides">
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
      </div>
    </div>
  );
};

export default Works;
