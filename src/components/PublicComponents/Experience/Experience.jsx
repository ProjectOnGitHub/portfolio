import './_Experience.scss';
import List from '../../BaseComponents/List/List';
import ListItem from '../../BaseComponents/ListItem/ListItem';
import ExperienceItem from '../ExperienceItem/ExperienceItem';

function Experience({ title, experience }) {
  const reversedExperience = [...experience].reverse();
  return (
    <>
      <h2 className="experience__title">{title}</h2>
      <List className="experience__list">
        {[...reversedExperience].map((item) => (
          <ListItem
            key={item.id}
            className="experience__list-item">
            <ExperienceItem
              className="experience"
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

export default Experience;
