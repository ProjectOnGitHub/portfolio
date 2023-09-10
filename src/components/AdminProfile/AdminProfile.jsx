import React from 'react';
import Button from '../Button/Button.jsx';
import './_AdminProfile.scss';

function AdminProfile(props) {
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
              onClick={props.onClick}></Button>
          </p>

          <Button
            aria-label='Delete button'
            className='admin-profile__button admin-profile__button_add'
            name='button-text-delete'
            type='submit'
            onClick={props.onClick}></Button>
        </div>
        <span className='admin-profile__description admin-profile__description_text'>
          Реактировать текст
        </span>
      </div>
    </>
  );
}

export default AdminProfile;
