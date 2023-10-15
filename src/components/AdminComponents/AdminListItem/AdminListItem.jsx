import ListItem from 'components/BaseComponents/ListItem/ListItem';
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
