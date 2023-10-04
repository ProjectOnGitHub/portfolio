import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';

function AdminExperience({ experience, className, deleteItem, editItem }) {
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
              deleteItem={deleteItem}
              editItem={editItem}
              item={exp}
            />
          </AdminListItem>
        ))}
      </AdminList>
      <AdminSectionButtonAdd>Добавить опыт работы</AdminSectionButtonAdd>
    </>
  );
}

export default AdminExperience;
