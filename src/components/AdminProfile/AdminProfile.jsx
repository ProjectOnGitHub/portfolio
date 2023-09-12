import { React } from 'react';
import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';

function AdminProfile() {
  return (
    <AdminForm>
      <fieldset className='admin-form__fieldset'>
        <AdminFormInput
          className='admin-form__input'
          maxLength='25'
          minLength='2'
          name='text'
          placeholder='Редактировать имя'
          type='text'
          required
        />
        <AdminFormInput
          className='admin-form__input'
          maxLength='64'
          minLength='8'
          name='text'
          placeholder='Редактировать специальность'
          type='text'
          required
        />
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

export default AdminProfile;
