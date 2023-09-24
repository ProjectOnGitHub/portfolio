import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import './_AdminListItem.scss';

function AdminListItem({ modificator, children }) {
  return (
    <ListItem
      className="admin-section__list-item"
      modificator={modificator}>
      {children}
    </ListItem>
  );
}

export default AdminListItem;
