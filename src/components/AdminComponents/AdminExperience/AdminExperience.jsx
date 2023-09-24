import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import ExperienceItem from '../../PublicComponents/ExperienceItem/ExperienceItem.jsx';
import './_AdminExperience.scss';

function AdminExperience({ experience, className }) {
  const reversedExperience = [...experience].reverse();

  return (
    <>
      <ul className={`${className}__list`}>
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
      </ul>
    </>
  );
}

export default AdminExperience;
