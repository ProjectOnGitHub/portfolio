import React from 'react';
import './_Portfolio.scss';
import Slider from '../Slider/Slider';
import projects from '../../utils/projects';

function Portfolio() {
  return (
    <>
      <h2 className="portfolio__title">Portfolio</h2>
      <Slider
        projects={projects}
      />
    </>
  );
}

export default Portfolio;
