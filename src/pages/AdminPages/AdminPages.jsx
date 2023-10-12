import { Link } from 'react-router-dom';
import AdminList from '../../components/AdminComponents/AdminList/AdminList.jsx';
import AdminListItem from '../../components/AdminComponents/AdminListItem/AdminListItem.jsx';
import Icon from '../../components/BaseComponents/Icon/Icon.jsx';
import Switcher from '../../components/BaseComponents/Switcher/Switcher.jsx';
import AdminSection from '../../components/AdminComponents/AdminSection/AdminSection.jsx';

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
