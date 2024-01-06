import { Fragment } from 'react';
import AdminSectionButtonsAction from 'components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import Skill from 'components/PublicComponents/Skill/Skill';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import AdminSkillsList from 'components/AdminComponents/AdminSkillsList/AdminSkillsList';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import useSortedSkills from 'hooks/useSortedSkills';
import usePopup from 'hooks/usePopup';

function AdminSkillsItems({ endpoint }) {
  const skills = useItemInfo(endpoint);
  const { currentPopup, items, openPopup, confirmRemoveItem, setSelectedItem } =
    usePopup(endpoint, skills);
  const sortedSkills = useSortedSkills(items);

  return (
    <>
      <AdminSection
        className="skills"
        confirmAction={confirmRemoveItem}
        currentPopup={currentPopup}
        id="skills"
        modifier="skills"
        title="Редактирование навыков">
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
                    currentArray={items}
                    itemId={skill.id}
                    openPopup={openPopup}
                    saveSelectedItemData={setSelectedItem}
                  />
                </AdminListItem>
              ))}
            </AdminSkillsList>
          </Fragment>
        ))}
      </AdminSection>
    </>
  );
}

export default AdminSkillsItems;
