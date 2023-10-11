import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminSectionButtonsChoice from '../AdminSectionButtonsChoice/AdminSectionButtonsChoice.jsx';

function AdminExperience({
  experience,
  className,
  setExperience,
  openPopup,
  saveSelectedItemData,
}) {
  const reversedExperience = [...experience].reverse();
  return (
    <>
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
            <AdminSectionButtonsChoice
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
      <AdminSectionButtonAdd>Добавить опыт работы</AdminSectionButtonAdd>
    </>
  );
}

export default AdminExperience;
