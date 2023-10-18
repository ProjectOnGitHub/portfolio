import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import { useEffect, useState } from 'react';

function AdminProfile({
  profile,
  setProfile,
  openPopupSaveData,
  saveSelectedItemData,
}) {
  const [newItem, setNewItem] = useState({});
  useEffect(() => {
    setNewItem(profile);
  }, [profile]);
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
        currentItem={profile}
        endpoint="profile"
        item={newItem}
        modifier="middle"
        openPopup={openPopupSaveData}
        saveSelectedItemData={saveSelectedItemData}
        setState={setProfile}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Редактировать имя"
            name="name"
            placeholder="Редактировать имя"
            required={true}
            type="text"
            value={newItem.name || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Редактировать должность"
            name="position"
            placeholder="Редактировать должность"
            required={true}
            type="text"
            value={newItem.position || ''}
            onChange={handleChangeInput}
          />
          <AdminFormTextarea
            label="Редактировать описание"
            name="description"
            placeholder="Редактировать описание"
            required={true}
            value={newItem.description || ''}
            onChange={handleChangeInput}
          />
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminProfile;
