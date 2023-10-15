import AdminSectionButtonsAction from '../../components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import ExperienceItem from '../../components/PublicComponents/ExperienceItem/ExperienceItem';
import AdminList from '../../components/AdminComponents/AdminList/AdminList';
import AdminListItem from '../../components/AdminComponents/AdminListItem/AdminListItem';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection';

function AdminExperience({
  experience,
  setExperience,
  openPopup,
  saveSelectedItemData,
}) {
  const reversedExperience = [...experience].reverse();
  return (
    <AdminSection
      className="experience"
      id="experience"
      modifier="experience"
      title="Редактирование опыта работы">
      <AdminList modifier="experience">
        {[...reversedExperience].map((exp) => (
          <AdminListItem key={exp.id}>
            <div className="admin-section__wrapper admin-section__wrapper_experience">
              <ExperienceItem
                className="admin-section"
                end={exp.end}
                name={exp.name}
                start={exp.start}
                text={exp.text}
                title={exp.title}
              />
            </div>
            <AdminSectionButtonsAction
              currentArray={experience}
              endpoint="experience"
              itemId={exp.id}
              openPopup={openPopup}
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
