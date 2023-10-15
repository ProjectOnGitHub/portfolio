import Icon from '../../BaseComponents/Icon/Icon';

function Skill({ className, name, title }) {
  return (
    <>
      <Icon
        className={className}
        modifier={name}
        name={name}
      />
      {title && <span className={`${className}__title`}>{title}</span>}
    </>
  );
}

export default Skill;
