import './_SkillsList.scss';
import List from 'components/BaseComponents/List/List';

function SkillsList({ children, type, title }) {
  return (
    <div className={`skills__container skills__container_${type}`}>
      <h3 className="skills__subtitle">{title}</h3>
      <List className="skills__list">{children}</List>
    </div>
  );
}

export default SkillsList;
