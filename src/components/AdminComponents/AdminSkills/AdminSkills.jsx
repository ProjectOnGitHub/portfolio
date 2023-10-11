import { Fragment } from 'react';
import Skill from '../../PublicComponents/Skill/Skill.jsx';
import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormTextarea from '../AdminFormTextarea/AdminFormTextarea.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminSectionButtonsChoice from '../AdminSectionButtonsChoice/AdminSectionButtonsChoice.jsx';
import AdminSkillsList from '../AdminSkillsList/AdminSkillsList.jsx';
import './_AdminSkills.scss';

function AdminSkills({
  skillsByType,
  editItem,
  skillsText,
  setSkillsText,
  skills,
  setSkills,
  openPopup,
  saveSelectedItemData,
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
                <AdminSectionButtonsChoice
                  currentArray={skillsText}
                  endpoint="skillsText"
                  isEditHide={true}
                  itemId={item.id}
                  openPopup={openPopup}
                  saveSelectedItemData={saveSelectedItemData}
                  setState={setSkillsText}
                />
              </AdminListItem>
            ))}
          </AdminList>
          <AdminSectionButtonAdd>Добавить описание</AdminSectionButtonAdd>
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
                <AdminSectionButtonsChoice
                  currentArray={skills}
                  editItem={editItem}
                  endpoint="skills"
                  itemId={skill.id}
                  openPopup={openPopup}
                  saveSelectedItemData={saveSelectedItemData}
                  setState={setSkills}
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
