import AdminFormImage from '../AdminFormImage/AdminFormImage.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';

function AdminSkill() {
  return (
    <AdminSection
      className="skill"
      id="skill"
      modifier="skill"
      title="Редактирование навыка">
      <AdminFormImage>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">Редактировать навык</legend>
          <AdminFormInput
            name="title"
            placeholder="Название навыка"
            required={true}
            type="text"
          />
          <AdminFormInput
            name="type"
            placeholder="Тип навыка"
            required={true}
            type="text"
          />
          <AdminFormInput
            name="name"
            placeholder="Название иконки навыка"
            required={true}
            type="text"
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminSkill;
