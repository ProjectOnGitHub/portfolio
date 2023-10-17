import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';

function AdminProfile({ name, position, description, openPopupSaveData }) {
  return (
    <AdminSection
      className="profile"
      id="profile"
      modifier="profile"
      title="Редактирование профиля">
      <AdminForm
        modifier="middle"
        openPopup={openPopupSaveData}>
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
      </AdminForm>
    </AdminSection>
  );
}

export default AdminProfile;
