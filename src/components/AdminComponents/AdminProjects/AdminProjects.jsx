import { Link } from 'react-router-dom';
import imagesMap from '../../../utils/images';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonsChoice from '../AdminSectionButtonsChoice/AdminSectionButtonsChoice.jsx';

import './_AdminProjects.scss';

function AdminProjects({
  projects,
  setProjects,
  openPopup,
  saveSelectedItemData,
}) {
  return (
    <>
      <AdminList modifier="projects">
        {projects.map((project) => (
          <AdminListItem
            key={project.id}
            modifier="projects">
            <Link
              key={project.id}
              className="admin-section__link"
              to={`/admin/projects/${project.name}`}>
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
            </Link>
            <AdminSectionButtonsChoice
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
    </>
  );
}

export default AdminProjects;
