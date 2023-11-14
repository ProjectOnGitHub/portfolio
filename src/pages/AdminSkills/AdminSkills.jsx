import { Fragment } from 'react';
import AdminSectionButtonsAction from 'components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import Skill from 'components/PublicComponents/Skill/Skill';
import AdminForm from 'components/AdminComponents/AdminForm/AdminForm';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import AdminSkillsList from 'components/AdminComponents/AdminSkillsList/AdminSkillsList';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import useSortedSkills from 'hooks/useSortedSkills';
import Editor from 'components/BaseComponents/Editor/Editor';
import useNewItem from 'hooks/useNewItem';

import './_AdminSkills.scss';

function AdminSkills({
  endpoint,
  editItem,
  setSkills,
  openPopupDeleteItem,
  saveSelectedItemData,
}) {
  const skills = useItemInfo('skills');
  const sortedSkills = useSortedSkills(skills.items);
  const { newItem, handleChangeInput } = useNewItem(skills);

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
          <Editor
            currentValue={newItem.description}
            handleChangeInput={handleChangeInput}
            name="description"
          />
        </fieldset>
      </AdminForm>

      {Object.values(sortedSkills).map((group) => (
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
                  currentArray={skills.items}
                  editItem={editItem}
                  endpoint={endpoint}
                  itemId={skill.id}
                  openPopupDeleteItem={openPopupDeleteItem}
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
