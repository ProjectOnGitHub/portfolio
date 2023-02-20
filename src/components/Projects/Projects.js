import React from 'react';
import './_Projects.scss';
import Project from "../Project/Project";
import ListItem from '../ListItem/ListItem';
import projects from '../../utils/projects';

function Projects(props) {
  return (
    <>
      <h2 className="projects__title">{props.title}</h2>
      <ul className="projects__list">
        {
          projects.map((item) => (
            <ListItem
              className="project"
              key={item.id}>
              <Project
                title={item.title}
                image={item.image}
                description={item.description}
                stack={item.stack}
                url={item.url}
              />
            </ListItem>))
        }
      </ul>
    </>
  );
}

export default Projects;
