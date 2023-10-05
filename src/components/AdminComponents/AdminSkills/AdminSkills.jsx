import { Fragment } from 'react';
import Skill from '../../PublicComponents/Skill/Skill.jsx';
import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import AdminSkillsList from '../AdminSkillsList/AdminSkillsList.jsx';
import './_AdminSkills.scss';

function AdminSkills({
  skillsByType,
  editItem,
  deleteItem,
  skillsText,
  setSkillsText,
}) {
  return (
    <>
      <AdminForm modifier="middle">
        <fieldset className="admin-form__fieldset">
          <legend className="admin-form__legend">
            Редактировать описание раздела Навыки
          </legend>
          <AdminList modifier="skills">
            {skillsText.map((item) => (
              <AdminListItem key={item.id}>
                <AdminFormTextarea
                  name="description"
                  placeholder="Добавить описание"
                  required={true}
                  value={item.text}
                />
                <AdminSectionButtonsLocal
                  currentArray={skillsText}
                  deleteItem={deleteItem}
                  editItem={editItem}
                  isEditHide={true}
                  item={item}
                  setArray={setSkillsText}
                />
              </AdminListItem>
            ))}
          </AdminList>
        </fieldset>
      </AdminForm>

      {Object.values(skillsByType).map((group) => (
        <Fragment key={group.type}>
          <AdminSkillsList
            key={group.type}
            title={group.sectionTitle}>
            {group.skills.map((skill) => (
              <AdminListItem
                key={skill.id}
                modifier="skills">
                <Skill
                  className="admin-skills"
                  modifier={skill.name}
                  name={skill.name}
                />
                <AdminSectionButtonsLocal
                  deleteItem={deleteItem}
                  editItem={editItem}
                  item={skill}
                />
              </AdminListItem>
            ))}
          </AdminSkillsList>
          <AdminSectionButtonAdd>Добавить навык</AdminSectionButtonAdd>
        </Fragment>
      ))}
    </>
  );
}

export default AdminSkills;
