import { Fragment } from 'react';
import AdminSectionButtonsAction from '../../components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import Skill from '../../components/PublicComponents/Skill/Skill';
import AdminForm from '../../components/AdminComponents/AdminForm/AdminForm';
import AdminFormTextarea from '../../components/AdminComponents/AdminFormTextarea/AdminFormTextarea';
import AdminList from '../../components/AdminComponents/AdminList/AdminList';
import AdminListItem from '../../components/AdminComponents/AdminListItem/AdminListItem';
import AdminSkillsList from '../../components/AdminComponents/AdminSkillsList/AdminSkillsList';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection';
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
    <AdminSection
      className="skills"
      id="skills"
      modifier="skills"
      title="Редактирование навыков">
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
                <AdminSectionButtonsAction
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
                <AdminSectionButtonsAction
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
        </Fragment>
      ))}
    </AdminSection>
  );
}

export default AdminSkills;
