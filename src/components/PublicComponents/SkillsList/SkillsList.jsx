import './_SkillsList.scss';

function SkillsList({ children, type, title }) {
  return (
    <div className={`skills__container skills__container_${type}`}>
      <h3 className="skills__subtitle">{title}</h3>
      <ul className="skills__list">{children}</ul>
    </div>
  );
}

export default SkillsList;
