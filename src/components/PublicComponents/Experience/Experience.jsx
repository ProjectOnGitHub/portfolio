import './_Experience.scss';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import ExperienceItem from '../ExperienceItem/ExperienceItem.jsx';

function Experience({ title, experience }) {
  const reversedExperience = [...experience].reverse();
  return (
    <>
      <h2 className="experience__title">{title}</h2>
      <ul className="experience__list">
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
      </ul>
    </>
  );
}

export default Experience;
