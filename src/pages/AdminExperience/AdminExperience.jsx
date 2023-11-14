import AdminSectionButtonsAction from 'components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import ExperienceItem from 'components/PublicComponents/ExperienceItem/ExperienceItem';
import AdminList from 'components/AdminComponents/AdminList/AdminList';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';

function AdminExperience({
  endpoint,
  setExperience,
  openPopupDeleteItem,
  saveSelectedItemData,
}) {
  const experience = useItemInfo('experience');

  return (
    <AdminSection
      className="experience"
      id="experience"
      modifier="experience"
      title="Редактирование опыта работы">
      <AdminList modifier="experience">
        {experience?.length > 0 &&
          [...experience].reverse().map((exp) => (
            <AdminListItem key={exp.id}>
              <div className="admin-section__wrapper admin-section__wrapper_experience">
                <ExperienceItem
                  className="admin-section"
                  end={exp.end}
                  name={exp.name}
                  position={exp.position}
                  start={exp.start}
                  text={exp.text}
                />
              </div>
              <AdminSectionButtonsAction
                currentArray={experience}
                endpoint={endpoint}
                itemId={exp.id}
                openPopupDeleteItem={openPopupDeleteItem}
                saveSelectedItemData={saveSelectedItemData}
                setState={setExperience}
              />
            </AdminListItem>
          ))}
      </AdminList>
    </AdminSection>
  );
}

export default AdminExperience;
