import List from '../../BaseComponents/List/List';
import './_AdminList.scss';

function AdminList({ modifier, children }) {
  return (
    <List
      className="admin-section__list"
      modifier={modifier}>
      {children}
    </List>
  );
}

export default AdminList;
