import List from 'components/BaseComponents/List/List';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import ExperienceItem from 'components/PublicComponents/ExperienceItem/ExperienceItem';
import Section from 'components/PublicComponents/Section/Section';

import './_Experience.scss';

function Experience({ experience }) {
  const reversedExperience = [...experience].reverse();
  return (
    <Section
      className="experience"
      id="experience">
      <h2 className="experience__title">Опыт работы</h2>
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
    </Section>
  );
}

export default Experience;
