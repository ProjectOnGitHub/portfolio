import React from 'react';
import './_Projects.scss';
import Project from '../Project/Project.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import projects from '../../utils/projects';

function Projects(props) {
  return (
    <>
      <h2 className='projects__title'>{props.title}</h2>
      <ul className='projects__list'>
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className='project'
          >
            <Project
              description={item.description}
              image={item.image}
              stack={item.stack}
              title={item.title}
              url={item.url}
            />
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default Projects;
