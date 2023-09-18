import { React } from 'react';
import AdminForm from '../AdminForm/AdminForm.jsx';
import imagesMap from '../../utils/images';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

function AdminProject({ onClick }) {
  return (
    <AdminForm>
      <fieldset className='admin-form__fieldset'>
        <legend className='admin-form__legend'>
          Добавить изображение к проекту
        </legend>
        <div className='admin-form__dropzone'>
          <label className='admin-form__label admin-form__label_button'>
            Добавить изображение
            <input
              accept='image/*'
              className='admin-form__input admin-form__input_hidden'
              name='input-file'
              type='file'
            />
          </label>
          <img
            alt=''
            className='admin-form__dropzone-image'
            src={imagesMap[`./${['background.jpg']}`]}
          />
          <Button
            aria-label='Delete image button'
            className='admin-form__button admin-form__button_delete-image'
            name='button-image-delete'
            type='submit'
            onClick={onClick}>
            <Icon
              className='delete icon__delete_image'
              name='trash'
            />
          </Button>
        </div>
      </fieldset>
      <fieldset className='admin-form__fieldset'>
        <legend className='admin-form__legend'>
          Редактировать данные проекта
        </legend>
        <AdminFormInput
          className='admin-form__input'
          maxLength='16'
          minLength='6'
          name='text'
          placeholder='Название проекта'
          required={true}
          type='text'
        />
        <AdminFormInput
          className='admin-form__input'
          maxLength='16'
          minLength='4'
          name='text'
          placeholder='URL проекта'
          required={true}
          type='text'
        />
        <AdminFormInput
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Ссылка на сайт'
          required={true}
          type='text'
        />
        <AdminFormInput
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Ссылка на GitHub'
          required={false}
          type='text'
        />
        <div className='admin-form__wrapper'>
          <AdminFormInput
            className='admin-form__input'
            maxLength='250'
            minLength='6'
            name='text'
            placeholder='Добавить технологии'
            required={true}
            type='text'
          />
          <ul className='admin-form__tags'>
            <li className='admin-form__tags-item'>
              <Button
                aria-label='Edit button'
                className='admin-form__button admin-form__button_tag'
                name='button-edit'
                type='submit'
                onClick={onClick}>
                HTML{' '}
                <Icon
                  className='delete icon__delete_tag'
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
                onClick={onClick}>
                CSS
                <Icon
                  className='delete icon__delete_tag'
                  name='trash'
                />
              </Button>
            </li>
          </ul>
        </div>
        <AdminFormTextarea
          className='admin-form__textarea'
          maxLength='250'
          minLength='80'
          name='text'
          placeholder='Добавить описание'
          required={true}
          rows='4'
        />
      </fieldset>
      <Button
        aria-label='Delete project button'
        className='admin-form__button admin-form__button_delete-project'
        name='button-project-delete'
        type='submit'
        onClick={onClick}>
        Удалить проект
      </Button>
    </AdminForm>
  );
}

export default AdminProject;
