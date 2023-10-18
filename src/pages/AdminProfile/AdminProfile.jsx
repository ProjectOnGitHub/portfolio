import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import { useState } from 'react';

function AdminProfile({
  profile,
  setProfile,
  openPopupSaveData,
  saveSelectedItemData,
}) {
  const [newItem, setNewItem] = useState('');

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setNewItem((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <AdminSection
      className="profile"
      id="profile"
      modifier="profile"
      title="Редактирование профиля">
      <AdminForm
        item={newItem}
        modifier="middle"
        openPopup={openPopupSaveData}
        saveSelectedItemData={saveSelectedItemData}
        setState={setProfile}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Редактировать имя"
            name="name"
            placeholder={profile.name}
            required={true}
            type="text"
            value={newItem.name}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Редактировать должность"
            name="position"
            placeholder={profile.position}
            required={true}
            type="text"
            value={newItem.position}
            onChange={handleChangeInput}
          />
          <AdminFormTextarea
            label="Редактировать описание"
            name="description"
            placeholder={profile.description}
            required={true}
            value={newItem.description}
            onChange={handleChangeInput}
          />
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminProfile;
