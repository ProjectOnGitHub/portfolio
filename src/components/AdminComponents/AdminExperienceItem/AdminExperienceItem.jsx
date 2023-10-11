import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';

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
