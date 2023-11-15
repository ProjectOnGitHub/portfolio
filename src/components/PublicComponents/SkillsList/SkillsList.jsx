import './_SkillsList.scss';
import List from 'components/BaseComponents/List/List';

function SkillsList({ children, title }) {
  return (
    <div className="skills__container">
      <h3 className="skills__subtitle">{title}</h3>
      <List className="skills__list">{children}</List>
    </div>
  );
}

export default SkillsList;
