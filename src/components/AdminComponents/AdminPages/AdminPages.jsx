import { Link } from 'react-router-dom';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';

function AdminPages({ pages }) {
  return (
    <>
      <AdminList modifier="pages">
        {pages.map((link) => (
          <AdminListItem
            key={link.id}
            modifier="pages">
            <Icon
              className="drag-dots"
              name="drag-dots"
            />
            <Link
              className="admin-section__link"
              to={`/admin/${link.url}`}>
              {link.anchor}
            </Link>
          </AdminListItem>
        ))}
      </AdminList>
    </>
  );
}

export default AdminPages;
