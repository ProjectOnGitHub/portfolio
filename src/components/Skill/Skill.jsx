import './_Skill.scss';
import Icon from '../Icon/Icon.jsx';

function Skill({ name, title }) {
  return (
    <>
      <Icon
        className="skill"
        modificator={name}
        name={name}
      />
      <h4 className="skill__title">{title}</h4>
    </>
  );
}

export default Skill;
