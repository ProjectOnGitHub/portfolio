import { React } from 'react';
import AdminForm from '../AdminForm/AdminForm.jsx';
import imagesMap from '../../utils/images';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import Icon from '../Icon/Icon.jsx';
import Button from '../Button/Button.jsx';

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
        <AdminFormInput
          className='admin-form__input'
          maxLength='16'
          minLength='6'
          name='text'
          placeholder='Название проекта'
          type='text'
          required
        />
        <AdminFormInput
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Ссылка на сайт'
          type='text'
        />
        <AdminFormInput
          className='admin-form__input'
          maxLength='250'
          minLength='6'
          name='text'
          placeholder='Ссылка на GitHub'
          type='text'
        />
        <AdminFormInput
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
    </AdminForm>
  );
}

export default AdminProject;
