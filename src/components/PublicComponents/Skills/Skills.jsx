import './_Skills.scss';
import ListItem from 'components/BaseComponents/ListItem/ListItem';
import SkillsList from 'components/PublicComponents/SkillsList/SkillsList';
import Skill from 'components/PublicComponents/Skill/Skill';

function Skills({ title, skillsByType, skillsText }) {
  return (
    <>
      <h2 className="skills__title">{title}</h2>
      <div className="skills__text">
        {skillsText.map((item) => (
          <p
            key={item.id}
            className="skills__paragraph">
            {item.text}
          </p>
        ))}
      </div>

      {Object.values(skillsByType).map((group) => (
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
    </>
  );
}

export default Skills;
