import { React } from 'react';
import imagesMap from '../../utils/images';
import './_AdminFormDropzone.scss';

function AdminFormDropzone({ children }) {
  return (
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
      {children}
    </div>
  );
}

export default AdminFormDropzone;
