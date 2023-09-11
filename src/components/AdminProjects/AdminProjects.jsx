import { React } from 'react';
import projects from '../../utils/projects';
import ListItem from '../ListItem/ListItem.jsx';
import imagesMap from '../../utils/images';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

import './_AdminProjects.scss';

function AdminProjects(props) {
  return (
    <>
      <ul className='admin-projects__list'>
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className='admin-projects__list-item'>
            <figure className='admin-projects__figure'>
              <img
                alt={item.title}
                className='admin-projects__image'
                src={imagesMap[`./${[item.image]}`]}
              />
              <figcaption className='admin-projects__caption'>
                {item.title}
              </figcaption>
              <Button
                aria-label='Edit button'
                className='admin-projects__button admin-projects__button_edit'
                name='button-edit'
                type='submit'
                onClick={props.onClick}>
                <Icon
                  className='edit'
                  name='edit'
                />
              </Button>
            </figure>
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default AdminProjects;
