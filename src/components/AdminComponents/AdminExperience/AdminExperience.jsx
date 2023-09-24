import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';

function AdminExperience({ experience, className, onClick }) {
  const reversedExperience = [...experience].reverse();

  return (
    <>
      <AdminList modificator="experience">
        {[...reversedExperience].map((item) => (
          <AdminListItem key={item.id}>
            <div
              className={`${className}__wrapper ${className}__wrapper_experience`}>
              <ExperienceItem
                className={className}
                end={item.end}
                name={item.name}
                start={item.start}
                text={item.text}
                title={item.title}
              />
            </div>
            <AdminSectionButtonsLocal onClick={onClick} />
          </AdminListItem>
        ))}
      </AdminList>
    </>
  );
}

export default AdminExperience;
