import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import useNewItem from 'hooks/useNewItem';

function AdminContact({ openPopupSaveData }) {
  const item = useItemInfo();

  const { newItem, handleChangeInput } = useNewItem(item);

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
            value={newItem.title || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Редактировать ссылку"
            name="url"
            placeholder="Ссылка"
            required={true}
            type="url"
            value={newItem.url || ''}
            onChange={handleChangeInput}
          />
          <AdminFormInput
            label="Редактировать название иконки контакта"
            name="name"
            placeholder="Название иконки контакта"
            required={true}
            type="text"
            value={newItem.name || ''}
            onChange={handleChangeInput}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminContact;
