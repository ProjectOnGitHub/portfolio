import AdminForm from '../../components/AdminComponents/AdminForm/AdminForm';
import AdminFormInput from '../../components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminFormTextarea from '../../components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection';

function AdminExperienceItem() {
  return (
    <AdminSection
      className="experience"
      id="experience"
      modifier="experience"
      title="Редактирование опыта работы">
      <AdminForm modifier="middle">
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать опыт работы
          </legend>
          <AdminFormInput
            name="position"
            placeholder="Название должности"
            required={true}
            type="text"
          />
          <AdminFormInput
            name="place"
            placeholder="Место работы"
            required={true}
            type="text"
          />
          <AdminFormInput
            name="date-start"
            placeholder="Начало работы"
            required={true}
            type="date"
          />
          <AdminFormInput
            name="date-end"
            placeholder="Конец работы"
            required={true}
            type="date"
          />

          <AdminFormTextarea
            name="description"
            placeholder="Добавить описание"
            required={true}
          />
        </fieldset>
      </AdminForm>
    </AdminSection>
  );
}

export default AdminExperienceItem;
