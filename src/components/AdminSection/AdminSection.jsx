import React from 'react';
import './_AdminSection.scss';
import Button from '../Button/Button.jsx';

function AdminSection(props) {
  return (
    <section
      className={`section admin-section admin-section__${props.className}`}
      id={`admin-${props.id}`}>
      <h1 className='admin-section__title'>{props.title}</h1>
      <div
        className={
          props.modificator
            ? `admin-section__container admin-section__container_${props.modificator}`
            : `admin-section__container`
        }>
        {props.children}
      </div>
      <ul className='admin-section__buttons'>
        <li className='admin-section__buttons-item'>
          <Button
            aria-label='Reset button'
            className='admin-section__button admin-section__button_reset'
            name='button-reset'
            type='submit'
            onClick={props.onClick}>
            Сбросить изменения
          </Button>
        </li>
        <li className='admin-section__buttons-item'>
          <Button
            aria-label='Save button'
            className='admin-section__button admin-section__button_save'
            name='button-save'
            type='submit'
            onClick={props.onClick}>
            Сохранить изменения
          </Button>
        </li>
      </ul>
    </section>
  );
}

export default AdminSection;
