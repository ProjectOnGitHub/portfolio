import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';

function AdminProfile() {
  return (
    <AdminForm modificator='middle'>
      <fieldset className='admin-form__fieldset'>
        <AdminFormInput
          name='name'
          placeholder='Редактировать имя'
          required={true}
          type='text'
        />
        <AdminFormInput
          name='spec'
          placeholder='Редактировать специальность'
          required={true}
          type='text'
        />
        <AdminFormTextarea
          name='description'
          placeholder='Добавить описание'
          required={true}
        />
      </fieldset>
    </AdminForm>
  );
}

export default AdminProfile;
