import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';

function AdminProfile({ name, position, description }) {
  return (
    <AdminForm modifier="middle">
      <fieldset className="admin-form__fieldset">
        <AdminFormInput
          name="name"
          placeholder="Редактировать имя"
          required={true}
          type="text"
          value={name}
        />
        <AdminFormInput
          name="spec"
          placeholder="Редактировать специальность"
          required={true}
          type="text"
          value={position}
        />
        <AdminFormTextarea
          name="description"
          placeholder="Добавить описание"
          required={true}
          value={description}
        />
      </fieldset>
      <AdminSectionButtonAdd>Сохранить изменения</AdminSectionButtonAdd>
    </AdminForm>
  );
}

export default AdminProfile;
