import imagesMap from '../../../utils/images';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonsAction from '../AdminSectionButtonsAction/AdminSectionButtonsAction.jsx';
import AdminSection from '../AdminSection/AdminSection.jsx';

import './_AdminProjects.scss';

function AdminProjects({
  projects,
  setProjects,
  openPopup,
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
              endpoint="projects"
              itemId={project.id}
              openPopup={openPopup}
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
