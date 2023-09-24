import List from '../../BaseComponents/List/List.jsx';
import './_AdminList.scss';

function AdminList({ modificator, children }) {
  return (
    <List
      className="admin-section__list"
      modificator={modificator}>
      {children}
    </List>
  );
}

export default AdminList;
