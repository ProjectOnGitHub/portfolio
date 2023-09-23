import './_SkillsList.scss';
import Skill from '../Skill/Skill.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function SkillsList({ skills, type, subtitle }) {
  return (
    <div className={`skills__container skills__container_${type}`}>
      <h3 className="skills__subtitle">{subtitle}</h3>
      <ul className="skills__list">
        {skills.map(
          (item) =>
            item.type === type && (
              <ListItem
                key={item.id}
                className="skill">
                <Skill
                  name={item.name}
                  title={item.title}
                  type={item.type}
                />
              </ListItem>
            ),
        )}
      </ul>
    </div>
  );
}

export default SkillsList;
