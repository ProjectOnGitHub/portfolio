import React from 'react';
import './_Portfolio.scss';
import Project from "../Project/Project";
import projects from '../../utils/projects';

function Portfolio() {
  return (
    <>
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__list">
        {
          projects.map((item) => (
            <Project
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              stack={item.stack}
              url={item.url}
            />))
        }
      </ul>
    </>
  );
}

export default Portfolio;
