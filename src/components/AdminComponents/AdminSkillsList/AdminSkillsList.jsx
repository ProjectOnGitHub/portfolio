import AdminList from '../AdminList/AdminList';

function AdminSkillsList({ children, title }) {
  return (
    <>
      <h2 className="admin-section__subtitle">{title}</h2>
      <AdminList
        className="admin-skills__list"
        modifier="skills">
        {children}
      </AdminList>
    </>
  );
}

export default AdminSkillsList;
