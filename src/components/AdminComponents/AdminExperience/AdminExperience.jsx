import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import List from '../../BaseComponents/List/List.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';

function AdminExperience({ experience, className, onClick }) {
  const reversedExperience = [...experience].reverse();

  return (
    <>
      <List
        className={`${className}__list`}
        modificator="experience">
        {[...reversedExperience].map((item) => (
          <ListItem
            key={item.id}
            className={`${className}__list-item`}>
            <ExperienceItem
              className={className}
              end={item.end}
              name={item.name}
              start={item.start}
              text={item.text}
              title={item.title}
            />
            <AdminSectionButtonsLocal onClick={onClick} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default AdminExperience;
