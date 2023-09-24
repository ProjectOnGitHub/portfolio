import imagesMap from '../../../utils/images';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
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
              <AdminSectionButtonsLocal onClick={onClick} />
            </figure>
          </AdminListItem>
        ))}
        <li className="admin-projects__list-item">
          {' '}
          <Button
            aria-label="Edit button"
            className="admin-projects__button admin-projects__button_add"
            name="button-edit"
            type="submit"
            onClick={onClick}>
            <Icon
              className="add"
              name="add"
            />
          </Button>
        </li>
      </AdminList>
    </>
  );
}

export default AdminProjects;
