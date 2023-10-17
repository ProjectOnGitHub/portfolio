import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemInfo } from 'utils/api';
import AdminFormImage from 'components/AdminComponents/AdminFormImage/AdminFormImage';
import AdminFormInput from 'components/AdminComponents/AdminFormInput/AdminFormInput';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';

function AdminSkill({ openPopupSaveData }) {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItemInfo('skills', id).then((newItem) => setItem(newItem));
  }, [item]);

  return (
    <AdminSection
      className="skill"
      id="skill"
      modifier="skill"
      title={`Редактирование навыка ${item.title}`}>
      <AdminFormImage openPopup={openPopupSaveData}>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">Редактировать навык</legend>
          <AdminFormInput
            name="title"
            placeholder="Название навыка"
            required={true}
            type="text"
            value={item.title}
          />
          <AdminFormInput
            name="type"
            placeholder="Тип навыка"
            required={true}
            type="text"
            value={item.type}
          />
          <AdminFormInput
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