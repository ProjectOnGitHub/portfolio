import ExperienceItem from '../../components/PublicComponents/ExperienceItem/ExperienceItem.jsx';
import AdminList from '../../components/AdminComponents/AdminList/AdminList.jsx';
import AdminListItem from '../../components/AdminComponents/AdminListItem/AdminListItem.jsx';
import AdminSectionButtonsAction from '../../components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction.jsx';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection.jsx';

function AdminExperience({
  experience,
  className,
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
            <div
              className={`${className}__wrapper ${className}__wrapper_experience`}>
              <ExperienceItem
                className={className}
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
