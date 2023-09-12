import { React } from 'react';
import AdminForm from '../AdminForm/AdminForm.jsx';
import imagesMap from '../../utils/images';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

import './_AdminProject.scss';

function AdminProject(props) {
  return (
    <AdminForm>
      <fieldset className='admin-form__fieldset'>
        <div className='admin-form__dropzone'>
          <label className='admin-form__label admin-form__label_button'>
            Добавить изображение
            <input
              accept='image/*'
              className='admin-form__input admin-form__input_hidden'
              multiple='false'
              name='input-file'
              type='file'
            />
          </label>
          <img
            alt=''
            className='admin-form__dropzone-image'
            src={imagesMap[`./${['background.jpg']}`]}
          />
        </div>
      </fieldset>
      <fieldset className='admin-form__fieldset'>
        <input
          className='admin-form__input'
          maxLength='16'
          minLength='6'
          name='text'
          placeholder='Название проекта'
          type='text'
          required
        />
        <input
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Ссылка на сайт'
          type='text'
        />
        <input
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Ссылка на GitHub'
          type='text'
        />
        <input
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Добавить технологии'
          type='text'
          required
        />
        <ul className='admin-form__tags'>
          <li className='admin-form__tags-item'>
            <Button
              aria-label='Edit button'
              className='admin-form__button admin-form__button_tag'
              name='button-edit'
              type='submit'
              onClick={props.onClick}>
              HTML{' '}
              <Icon
                className='trash'
                name='trash'
              />
            </Button>
          </li>
          <li className='admin-form__tags-item'>
            <Button
              aria-label='Edit button'
              className='admin-form__button admin-form__button_tag'
              name='button-edit'
              type='submit'
              onClick={props.onClick}>
              CSS
              <Icon
                className='trash'
                name='trash'
              />
            </Button>
          </li>
        </ul>

        <textarea
          className='admin-form__textarea'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Добавить описание'
          rows='10'
          required
        />
      </fieldset>
    </AdminForm>
  );
}

export default AdminProject;
