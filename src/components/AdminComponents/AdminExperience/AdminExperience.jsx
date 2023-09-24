import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import List from '../../BaseComponents/List/List.jsx';

function AdminExperience({ experience, className }) {
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
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default AdminExperience;
