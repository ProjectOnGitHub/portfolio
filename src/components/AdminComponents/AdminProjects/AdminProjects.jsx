import imagesMap from '../../../utils/images';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButtonAdd from '../AdminSectionButtonsAdd/AdminSectionButtonAdd.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';

import './_AdminProjects.scss';

function AdminProjects({ onClick, projects }) {
  return (
    <>
      <AdminList modificator="projects">
        {projects.map((item) => (
          <AdminListItem
            key={item.id}
            modificator="projects">
            <figure className="admin-projects__figure">
              <img
                alt={item.title}
                className="admin-projects__image"
                src={imagesMap[`./${[item.image]}`]}
              />
              <figcaption className="admin-projects__caption">
                {item.title}
              </figcaption>
            </figure>
            <AdminSectionButtonsLocal onClick={onClick} />
          </AdminListItem>
        ))}
      </AdminList>
      <AdminSectionButtonAdd>Добавить проект</AdminSectionButtonAdd>
    </>
  );
}

export default AdminProjects;
