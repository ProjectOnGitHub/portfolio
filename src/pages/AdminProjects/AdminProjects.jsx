import imagesMap from 'utils/images';
import AdminList from 'components/AdminComponents/AdminList/AdminList';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import AdminSectionButtonsAction from 'components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';
import useItemInfo from 'hooks/useItemInfo';
import usePopup from 'hooks/usePopup';

import './_AdminProjects.scss';

function AdminProjects({ endpoint }) {
  const projects = useItemInfo(endpoint);
  const { currentPopup, items, openPopup, confirmRemoveItem, setSelectedItem } =
    usePopup(endpoint, projects);

  return (
    <AdminSection
      className="projects"
      confirmAction={confirmRemoveItem}
      currentPopup={currentPopup}
      id="projects"
      modifier="projects"
      title="Редактирование списка проектов">
      <AdminList modifier="projects">
        {items?.length > 0 &&
          items.map((project) => (
            <AdminListItem
              key={project.id}
              modifier="projects">
              <figure className="admin-projects__figure">
                <img
                  alt={project.title}
                  className="admin-projects__image"
                  src={imagesMap[`./${[project.image]}`]}
                />
                <figcaption className="admin-projects__caption">
                  {project.title}
                </figcaption>
              </figure>
              <AdminSectionButtonsAction
                currentArray={items}
                itemId={project.id}
                openPopup={openPopup}
                saveSelectedItemData={setSelectedItem}
              />
            </AdminListItem>
          ))}
      </AdminList>
    </AdminSection>
  );
}

export default AdminProjects;
