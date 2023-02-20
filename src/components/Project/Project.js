import React from 'react';
import './_Project.scss';

function Project(props) {
  return (
    <>
      <figure className="project__figure">
        <img src={props.image} alt={props.title}
          className="project__image" />
        <figcaption className="project__title">{props.title}</figcaption>
      </figure>
      <div className="project__text">
        <p className="project__paragraph">{props.description}</p>
        <p className="project__paragraph">{props.stack}</p>
      </div>
      <a href={props.url} className="project__link">Перейти</a>
    </>
  );
}

export default Project;
