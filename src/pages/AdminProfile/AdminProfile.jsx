import AdminForm from '../../components/AdminComponents/AdminForm/AdminForm.jsx';
import AdminFormInput from '../../components/AdminComponents/AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../../components/AdminComponents/AdminFormTextarea/AdminFormTextarea.jsx';
import AdminSectionButton from '../../components/AdminComponents/AdminSectionButton/AdminSectionButton.jsx';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection.jsx';

function AdminProfile({ name, position, description, openPopup }) {
  function handleClickSaveButton() {
    const title = 'Сохранить изменения?';
    openPopup(title);
  }

  return (
    <AdminSection
      className="profile"
      id="profile"
      modifier="profile"
      title="Редактирование профиля">
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
        <AdminSectionButton
          modifier="save"
          name="save"
          type="button"
          onClick={handleClickSaveButton}>
          Сохранить
        </AdminSectionButton>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminProfile;
