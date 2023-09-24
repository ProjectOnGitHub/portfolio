import AdminList from '../AdminList/AdminList.jsx';

function AdminSkillsList({ children, title }) {
  return (
    <>
      <h2 className="admin-section__subtitle">{title}</h2>
      <AdminList
        className="admin-skills__list"
        modificator="skills">
        {children}
      </AdminList>
    </>
  );
}

export default AdminSkillsList;
