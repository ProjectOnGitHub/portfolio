import React from 'react';
import './_Project.scss';

function Project(props) {
  return (
    <>
      <figure className='project__figure'>
        <img
          alt={props.title}
          className='project__image'
          src={props.image}
        />
        <figcaption className='project__title'>{props.title}</figcaption>
      </figure>
      <div className='project__text'>
        <p className='project__paragraph'>{props.description}</p>
        <p className='project__paragraph'>{props.stack}</p>
      </div>
      <a
        className='project__link'
        href={props.url}
        rel='noreferrer'
        target='_blank'
      >
        Перейти
      </a>
    </>
  );
}

export default Project;
