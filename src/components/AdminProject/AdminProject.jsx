import { React } from 'react';
import AdminFormImage from '../AdminFormImage/AdminFormImage.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

function AdminProject({ onClick }) {
  return (
    <AdminFormImage>
      <fieldset className='admin-form__fieldset'>
        <legend className='admin-form__legend'>
          Редактировать данные проекта
        </legend>
        <AdminFormInput
          name='name'
          placeholder='Название проекта'
          required={true}
          type='text'
        />
        <AdminFormInput
          name='alias'
          placeholder='Алиас проекта'
          required={true}
          type='text'
        />
        <AdminFormInput
          name='site'
          placeholder='Ссылка на сайт'
          required={false}
          type='url'
        />
        <AdminFormInput
          name='github'
          placeholder='Ссылка на GitHub'
          required={false}
          type='url'
        />
        <div className='admin-form__wrapper'>
          <AdminFormInput
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
          name='description'
          placeholder='Добавить описание'
          required={true}
        />
      </fieldset>
    </AdminFormImage>
  );
}

export default AdminProject;
