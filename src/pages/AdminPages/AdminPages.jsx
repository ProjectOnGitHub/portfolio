import { Link } from 'react-router-dom';
import AdminList from 'components/AdminComponents/AdminList/AdminList';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import Icon from 'components/BaseComponents/Icon/Icon';
import Switcher from 'components/BaseComponents/Switcher/Switcher';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import * as api from 'utils/api';
import { useEffect, useState } from 'react';

function AdminPages({ pages }) {
  const [items, setItems] = useState(pages);

  useEffect(() => {
    setItems(pages);
  }, [pages]);

  function togglePageVisibility({ id, isEnabled }) {
    api.changePageVisibility(id, !isEnabled).then((updatedPage) => {
      const updatedPages = [...pages];
      const pageIndex = updatedPages.findIndex((page) => page.id === id);
      if (pageIndex !== -1) {
        updatedPages[pageIndex].isEnabled = updatedPage.isEnabled;
        setItems(updatedPages);
      }
    });
  }

  return (
    <AdminSection
      className="pages"
      id="pages"
      modifier="pages"
      title="Редактирование списка страниц">
      <AdminList modifier="pages">
        {items.map((page) => (
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
