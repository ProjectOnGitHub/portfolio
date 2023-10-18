import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';

function AdminContact({ openPopupSaveData }) {
  const item = useItemInfo();
  return (
    <AdminSection
      className="contact"
      id="contact"
      modifier="contact"
      title="Редактирование контакта">
      <AdminFormImage openPopup={openPopupSaveData}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Редактировать название"
            name="title"
            placeholder="Название"
            required={true}
            type="text"
            value={item.title}
          />
          <AdminFormInput
            label="Редактировать ссылку"
            name="type"
            placeholder="Ссылка"
            required={true}
            type="url"
            value={item.url}
          />
          <AdminFormInput
            label="Редактировать название иконки контакта"
            name="name"
            placeholder="Название иконки контакта"
            required={true}
            type="text"
            value={item.name}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminContact;
