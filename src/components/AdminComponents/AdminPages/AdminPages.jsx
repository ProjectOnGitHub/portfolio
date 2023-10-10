import { Link } from 'react-router-dom';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import Switcher from '../../BaseComponents/Switcher/Switcher.jsx';

function AdminPages({ pages, togglePageVisibility }) {
  return (
    <>
      <AdminList modifier="pages">
        {pages.map((page) => (
          <AdminListItem
            key={page.id}
            modifier="pages">
            <Icon
              className="drag-dots"
              name="drag-dots"
            />
            <Link
              className="admin-section__link"
              to={`/admin/${page.url}`}>
              {page.anchor}
            </Link>
            <Switcher
              isEnabled={page.isEnabled}
              item={page}
              modifier="pages"
              toggleVisibility={togglePageVisibility}
            />
          </AdminListItem>
        ))}
      </AdminList>
    </>
  );
}

export default AdminPages;
