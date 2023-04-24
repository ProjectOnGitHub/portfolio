import React from 'react';
import Icon from '../Icon/Icon.jsx';
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
        <a
          className='project__link project__link_image'
          href={props.url ? props.url : props.githubUrl}
          rel='noreferrer'
          target='_blank'></a>
      </figure>
      <div className='project__text'>
        <p className='project__paragraph'>{props.description}</p>
        <p className='project__paragraph'>{props.stack}</p>
      </div>
      <ul className='project__links'>
        {props.url !== '' ? (
          <li className='project__links-item'>
            <Icon
              className='project-link'
              name='link'
            />
            <a
              className='project__link project__link_text'
              href={props.url}
              rel='noreferrer'
              target='_blank'>
              Cайт
            </a>
          </li>
        ) : (
          ''
        )}

        {props.githubUrl !== '' ? (
          <li className='project__links-item'>
            <Icon
              className='project-link'
              name='github'
            />
            <a
              className='project__link project__link_text'
              href={props.githubUrl}
              rel='noreferrer'
              target='_blank'>
              GitHub
            </a>
          </li>
        ) : (
          ''
        )}
      </ul>
    </>
  );
}

export default Project;
