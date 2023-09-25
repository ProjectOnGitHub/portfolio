import AdminFormImage from '../AdminFormImage/AdminFormImage.jsx';
import AdminFormInput from '../AdminFormInput/AdminFormInput.jsx';

function AdminContact() {
  return (
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
  );
}

export default AdminContact;
