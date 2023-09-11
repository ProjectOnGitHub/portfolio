import { React, useContext } from 'react';
import Button from '../Button/Button.jsx';
import Icon from '../Icon/Icon.jsx';

import DarkThemeContext from '../../contexts/DarkThemeContext.jsx';

import './_AdminProjects.scss';

function AdminProjects(props) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  return (
    <>
      <h1 className='admin-profile__title'>{props.title}</h1>
      <div className='admin-profile__container'>
        <p
          className='admin-profile__name'
          contentEditable='true'>
          Александр
        </p>
        <span className='admin-profile__description admin-profile__description_name'>
          Реактировать имя
        </span>
        <p
          className='admin-profile__position'
          contentEditable='true'>
          HTML-верстальщик
        </p>
        <span className='admin-profile__description admin-profile__description_position'>
          Реактировать должность
        </span>
        <div className='admin-profile__text'>
          <p className='admin-profile__paragraph'>
            <i className='admin-profile__icon'></i>
            <span
              className='admin-profile__paragraph-text'
              contentEditable='true'>
              Ушёл из SEO в разработку
            </span>
            <Button
              aria-label='Delete button'
              className='admin-profile__button admin-profile__button_delete'
              name='button-text-delete'
              type='submit'
              onClick={props.onClick}>
              <Icon
                name='delete'
                className={
                  isDarkTheme ? 'delete icon__delete_theme-dark' : 'delete'
                }
              />
            </Button>
          </p>
          <Button
            aria-label='Delete button'
            className='admin-profile__button admin-profile__button_add'
            name='button-text-delete'
            type='submit'
            onClick={props.onClick}>
            {' '}
            <Icon
              className={isDarkTheme ? 'add icon__add_theme-dark' : 'add'}
              name='add'
            />
          </Button>
        </div>
        <span className='admin-profile__description admin-profile__description_text'>
          Реактировать текст
        </span>
      </div>
    </>
  );
}

export default AdminProjects;
