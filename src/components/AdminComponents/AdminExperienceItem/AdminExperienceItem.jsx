import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';

function AdminExperienceItem() {
  return (
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
  );
}

export default AdminExperienceItem;
