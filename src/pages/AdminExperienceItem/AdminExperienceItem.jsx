import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import useNewItem from 'hooks/useNewItem';

function AdminExperienceItem({ openPopupSaveData }) {
  const item = useItemInfo();
  const { newItem, handleChangeInput } = useNewItem(item);
  console.log(newItem);
  return (
    <AdminSection
      className="experience"
      id="experience"
      modifier="experience"
      title="Редактирование опыта работы">
      <AdminForm
        modifier="middle"
        openPopup={openPopupSaveData}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Должность"
            name="position"
            placeholder="Должность"
            required={true}
            type="text"
            value={newItem.position || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Место работы"
            name="name"
            placeholder="Место работы"
            required={true}
            type="text"
            value={newItem.name || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Начало работы"
            name="start"
            placeholder="Начало работы"
            required={true}
            type="text"
            value={newItem.start || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Конец работы"
            name="end"
            placeholder="Конец работы"
            required={true}
            type="text"
            value={newItem.end || ''}
            onChange={handleChangeInput}
          />
          <label className="admin-form__label">
            Добавить описание
            {newItem.text &&
              newItem.text.map((element) => (
                <AdminFormTextarea
                  key={element.id}
                  name="text"
                  placeholder="Добавить описание"
                  required={true}
                  value={element.paragraph || ''}
                  onChange={handleChangeInput}
                />
              ))}
          </label>
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminExperienceItem;
