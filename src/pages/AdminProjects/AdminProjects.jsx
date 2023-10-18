import imagesMap from 'utils/images';
import AdminList from 'components/AdminComponents/AdminList/AdminList';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import AdminSectionButtonsAction from 'components/AdminComponents/AdminSectionButtonsAction/AdminSectionButtonsAction';
import AdminSection from 'components/AdminComponents/AdminSection/AdminSection';

import './_AdminProjects.scss';

function AdminProjects({
  endpoint,
  projects,
  setProjects,
  openPopupDeleteItem,
  saveSelectedItemData,
}) {
  return (
    <AdminSection
      className="projects"
      id="projects"
      modifier="projects"
      title="Редактирование списка проектов">
      <AdminList modifier="projects">
        {projects.map((project) => (
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
              currentArray={projects}
              endpoint={endpoint}
              itemId={project.id}
              openPopupDeleteItem={openPopupDeleteItem}
              saveSelectedItemData={saveSelectedItemData}
              setState={setProjects}
            />
          </AdminListItem>
        ))}
      </AdminList>
    </AdminSection>
  );
}

export default AdminProjects;
