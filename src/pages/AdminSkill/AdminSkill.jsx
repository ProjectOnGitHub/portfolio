import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemInfo } from '../../utils/api';
import AdminFormImage from '../../components/AdminComponents/AdminFormImage/AdminFormImage.jsx';
import AdminFormInput from '../../components/AdminComponents/AdminFormInput/AdminFormInput.jsx';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection.jsx';

function AdminSkill() {
  const { id } = useParams();
  const [skill, setSkill] = useState({});
  useEffect(() => {
    getItemInfo('skills', id).then((newSkill) => setSkill(newSkill));
  }, [skill]);

  return (
    <AdminSection
      className="skill"
      id="skill"
      modifier="skill"
      title={`Редактирование навыка ${skill.title}`}>
      <AdminFormImage>
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">Редактировать навык</legend>
          <AdminFormInput
            name="title"
            placeholder="Название навыка"
            required={true}
            type="text"
            value={skill.title}
          />
          <AdminFormInput
            name="type"
            placeholder="Тип навыка"
            required={true}
            type="text"
            value={skill.type}
          />
          <AdminFormInput
            name="name"
            placeholder="Название иконки навыка"
            required={true}
            type="text"
            value={skill.name}
          />
        </fieldset>
      </AdminFormImage>
    </AdminSection>
  );
}

export default AdminSkill;
