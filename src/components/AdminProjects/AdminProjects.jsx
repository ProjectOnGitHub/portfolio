import { Link } from 'react-router-dom';
import projects from '../../utils/projects';
import ListItem from '../ListItem/ListItem.jsx';
import imagesMap from '../../utils/images';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

import './_AdminProjects.scss';

function AdminProjects({ onClick }) {
  return (
    <>
      <ul className='admin-projects__list'>
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className='admin-projects__list-item'>
            <Link
              className='admin-projects__link'
              to='/admin/projects/project'>
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
                  onClick={onClick}>
                  <Icon
                    className='edit'
                    name='edit'
                  />
                </Button>
              </figure>
            </Link>
          </ListItem>
        ))}
        <li className='admin-projects__list-item'>
          {' '}
          <Button
            aria-label='Edit button'
            className='admin-projects__button admin-projects__button_add'
            name='button-edit'
            type='submit'
            onClick={onClick}>
            <Icon
              className='add'
              name='add'
            />
          </Button>
        </li>
      </ul>
    </>
  );
}

export default AdminProjects;
