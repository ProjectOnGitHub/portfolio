import './_AdminSkillsList.scss';
import List from '../../BaseComponents/List/List.jsx';

function AdminSkillsList({ children, title }) {
  return (
    <>
      <h2 className="admin-section__subtitle">{title}</h2>
      <List className="admin-skills__list">{children}</List>
    </>
  );
}

export default AdminSkillsList;
