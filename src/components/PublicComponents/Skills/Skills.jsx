import ListItem from 'components/BaseComponents/ListItem/ListItem';
import SkillsList from 'components/PublicComponents/SkillsList/SkillsList';
import Skill from 'components/PublicComponents/Skill/Skill';
import Section from 'components/PublicComponents/Section/Section';
import useItemInfo from 'hooks/useItemInfo';
import useSortedSkills from 'hooks/useSortedSkills';
import useParsedHTML from 'hooks/useParsedHTML';

import './_Skills.scss';

function Skills() {
  const skills = useItemInfo('skills');
  const { description } = useItemInfo('skills-info');
  const parsedHTML = useParsedHTML(description, 'skills-text');

  const sortedSkills = useSortedSkills(skills);

  return (
    <Section
      className="skills"
      id="skills">
      <h2 className="skills__title">Навыки</h2>
      <div className="skills-text">{parsedHTML}</div>
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
