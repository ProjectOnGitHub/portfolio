import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';

function AdminSkill({ openPopupSaveData }) {
  const item = useItemInfo();

  return (
    <AdminSection
      className="skill"
      id="skill"
      modifier="skill"
      title={`Редактирование навыка ${item.title}`}>
      <AdminFormImage openPopup={openPopupSaveData}>
        <fieldset className="admin-form__fieldset">
          <AdminFormInput
            label="Название навыка"
            name="title"
            placeholder="Название навыка"
            required={true}
            type="text"
            value={item.title}
          />
          <AdminFormInput
            label="Тип навыка"
            name="type"
            placeholder="Тип навыка"
            required={true}
            type="text"
            value={item.type}
          />
          <AdminFormInput
            label="Название иконки навыка"
            name="name"
            placeholder="Название иконки навыка"
            required={true}
            type="text"
            value={item.name}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminSkill;
