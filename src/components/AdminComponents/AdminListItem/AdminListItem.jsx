import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import './_AdminListItem.scss';

function AdminListItem({ modifier, children }) {
  return (
    <ListItem
      className="admin-section__list-item"
      modifier={modifier}>
      {children}
    </ListItem>
  );
}

export default AdminListItem;
