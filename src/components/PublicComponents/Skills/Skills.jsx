import ListItem from 'components/BaseComponents/ListItem/ListItem';
import SkillsList from 'components/PublicComponents/SkillsList/SkillsList';
import Skill from 'components/PublicComponents/Skill/Skill';
import Section from 'components/PublicComponents/Section/Section';
import useItemInfo from 'hooks/useItemInfo';
import useSortedSkills from 'hooks/useSortedSkills';
import './_Skills.scss';

function Skills() {
  const { items, description } = useItemInfo('skills');
  const sortedSkills = useSortedSkills(items);

  return (
    <Section
      className="skills"
      id="skills">
      <h2 className="skills__title">Навыки</h2>
      <div className="skills__text">
        <p className="skills__paragraph">{description}</p>
      </div>
      {sortedSkills &&
        Object.values(sortedSkills).map((group) => (
          <SkillsList
            key={group.type}
            title={group.sectionTitle}>
            {group.skills.map((item) => (
              <ListItem
                key={item.id}
                className="skill">
                <Skill
                  className="skill"
                  name={item.name}
                  title={item.title}
                  type={item.type}
                />
              </ListItem>
            ))}
          </SkillsList>
        ))}
    </Section>
  );
}

export default Skills;
