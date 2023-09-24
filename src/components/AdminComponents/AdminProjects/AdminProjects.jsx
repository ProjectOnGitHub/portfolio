import imagesMap from '../../../utils/images';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import AdminSectionButtonsLocal from '../AdminSectionButtonsLocal/AdminSectionButtonsLocal.jsx';

import './_AdminProjects.scss';

function AdminProjects({ onClick, projects }) {
  return (
    <>
      <List
        className="admin-section__list"
        modificator="projects">
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className="admin-section__list-item"
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
          </ListItem>
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
      </List>
    </>
  );
}

export default AdminProjects;
