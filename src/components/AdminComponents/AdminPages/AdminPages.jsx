import { Link } from 'react-router-dom';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import Switcher from '../../BaseComponents/Switcher/Switcher.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';

function AdminPages({ pages, togglePageVisibility }) {
  return (
    <AdminSection
      className="pages"
      id="pages"
      modifier="pages"
      title="Редактирование списка страниц">
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
    </AdminSection>
  );
}

export default AdminPages;
