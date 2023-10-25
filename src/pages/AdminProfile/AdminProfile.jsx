import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import Editor from 'components/BaseComponents/Editor/Editor';
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
          <label className="admin-form__label">
            Описание
            <Editor
              currentValue={newItem.description}
              handleChangeInput={handleChangeInput}
              name="description"
            />
          </label>
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminProfile;
