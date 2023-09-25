import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminSkillsList from '../AdminSkillsList/AdminSkillsList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import Skill from '../../PublicComponents/Skill/Skill.jsx';
import './_AdminSkills.scss';

function AdminSkills({ onClick, skillsByType }) {
  return (
    <>
      <AdminForm modificator="middle">
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать описание раздела Навыки
          </legend>
          <AdminFormTextarea
            name="description"
            placeholder="Добавить описание"
            required={true}
          />
        </fieldset>
      </AdminForm>

      {Object.values(skillsByType).map((group) => (
        <>
          <AdminSkillsList
            key={group.type}
            title={group.sectionTitle}>
            {group.skills.map((item) => (
              <AdminListItem
                key={item.id}
                modificator="skills">
                <Skill
                  className="admin-skills"
                  modificator={item.name}
                  name={item.name}
                />
                <AdminSectionButtonsLocal onClick={onClick} />
              </AdminListItem>
            ))}
          </AdminSkillsList>
          <AdminSectionButtonAdd>Добавить навык</AdminSectionButtonAdd>
        </>
      ))}
    </>
  );
}

export default AdminSkills;
