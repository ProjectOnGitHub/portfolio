import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';

function AdminSectionButtonsLocal({ onClick }) {
  return (
    <List
      className="admin-section__buttons"
      modificator="local">
      <ListItem className="admin-section__buttons-item">
        <Button
          aria-label="Edit button"
          className="admin-section__button admin-section__button_edit"
          name="button-edit"
          type="submit"
          onClick={onClick}>
          <Icon
            className="edit"
            name="edit"
          />
        </Button>
      </ListItem>
      <ListItem className="admin-section__buttons-item">
        <Button
          aria-label="Edit button"
          className="admin-section__button admin-section__button_delete"
          name="button-delete"
          type="submit"
          onClick={onClick}>
          <Icon
            className="trash"
            name="trash"
          />
        </Button>
      </ListItem>
    </List>
  );
}

export default AdminSectionButtonsLocal;
