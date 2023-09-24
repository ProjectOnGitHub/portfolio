import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';

function AdminExperience({ experience, className, onClick }) {
  const reversedExperience = [...experience].reverse();

  return (
    <>
      <AdminList
        className={`${className}__list`}
        modificator="experience">
        {[...reversedExperience].map((item) => (
          <AdminListItem key={item.id}>
            <ExperienceItem
              className={className}
              end={item.end}
              name={item.name}
              start={item.start}
              text={item.text}
              title={item.title}
            />
            <AdminSectionButtonsLocal onClick={onClick} />
          </AdminListItem>
        ))}
      </AdminList>
    </>
  );
}

export default AdminExperience;
