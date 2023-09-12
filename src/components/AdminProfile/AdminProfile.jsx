import { React } from 'react';
import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';

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
      </fieldset>
    </AdminForm>
  );
}

export default AdminProfile;
