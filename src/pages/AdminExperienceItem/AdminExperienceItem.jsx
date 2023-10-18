import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from 'components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';

function AdminExperienceItem({ openPopupSaveData }) {
  const item = useItemInfo();
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
            placeholder="Должность"
            required={true}
            type="text"
            value={item.position}
          />
          <AdminFormInput
            label="Место работы"
            name="place"
            placeholder="Место работы"
            required={true}
            type="text"
            value={item.name}
          />
          <AdminFormInput
            label="Начало работы"
            name="start"
            placeholder="Начало работы"
            required={true}
            type="text"
            value={item.start}
          />
          <AdminFormInput
            label="Конец работы"
            name="end"
            placeholder="Конец работы"
            required={true}
            type="text"
            value={item.end}
          />
          <label className="admin-form__label">
            Добавить описание
            {item.text &&
              item.text.map((element) => (
                <AdminFormTextarea
                  key={element.id}
                  name="description"
                  placeholder="Добавить описание"
                  required={true}
                  value={element.paragraph}
                />
              ))}
          </label>
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminExperienceItem;
