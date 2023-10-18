import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useNewItem from 'hooks/useNewItem';

function AdminProfile({
  endpoint,
  profile,
  setProfile,
  openPopupSaveData,
  saveSelectedItemData,
}) {
  const { newItem, handleChangeInput } = useNewItem(profile);

  return (
    <AdminSection
      className="profile"
      id="profile"
      modifier="profile"
      title="Редактирование профиля">
      <AdminForm
        currentItem={profile}
        endpoint={endpoint}
        item={newItem}
        modifier="middle"
        openPopup={openPopupSaveData}
        saveSelectedItemData={saveSelectedItemData}
        setState={setProfile}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Имя"
            name="name"
            placeholder="Имя"
            required={true}
            type="text"
            value={newItem.name || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Должность"
            name="position"
            placeholder="Должность"
            required={true}
            type="text"
            value={newItem.position || ''}
            onChange={handleChangeInput}
          />
          <AdminFormTextarea
            label="Описание"
            name="description"
            placeholder="Описание"
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
