import './_Experience.scss';
import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import ExperienceItem from 'components/PublicComponents/ExperienceItem/ExperienceItem';

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
              position={item.position}
              start={item.start}
              text={item.text}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Experience;
