import Icon from '../../BaseComponents/Icon/Icon.jsx';

function Skill({ className, name, title }) {
  return (
    <>
      <Icon
        className={className}
        modificator={name}
        name={name}
      />
      <span className={`${className}__title`}>{title}</span>
    </>
  );
}

export default Skill;
