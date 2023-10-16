import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';

function AdminContact() {
  return (
    <AdminSection
      className="contact"
      id="contact"
      modifier="contact"
      title="Редактирование контакта">
      <AdminFormImage>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">Редактировать контакт</legend>
          <AdminFormInput
            name="title"
            placeholder="Название"
            required={true}
            type="text"
          />
          <AdminFormInput
            name="type"
            placeholder="Ссылка"
            required={true}
            type="url"
          />
          <AdminFormInput
            name="name"
            placeholder="Название иконки контакта"
            required={true}
            type="text"
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminContact;
