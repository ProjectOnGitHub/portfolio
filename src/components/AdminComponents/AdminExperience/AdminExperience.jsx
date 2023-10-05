import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';

function AdminExperience({
  experience,
  className,
  deleteItem,
  editItem,
  setExperience,
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
            <AdminSectionButtonsLocal
              currentArray={experience}
              deleteItem={deleteItem}
              editItem={editItem}
              item={exp}
              setArray={setExperience}
            />
          </AdminListItem>
        ))}
      </AdminList>
      <AdminSectionButtonAdd>Добавить опыт работы</AdminSectionButtonAdd>
    </>
  );
}

export default AdminExperience;
