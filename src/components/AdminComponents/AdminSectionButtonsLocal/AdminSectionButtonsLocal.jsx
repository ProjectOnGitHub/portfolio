import Button from '../../BaseComponents/Button/Button.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function AdminSectionButtonsLocal({
  currentArray,
  deleteItem,
  item,
  editItem,
  setArray,
}) {
  function handleClickDeleteButton() {
    deleteItem(currentArray, item, setArray);
  }

  function handleClickEditButton() {
    editItem(item);
  }
  return (
    <List
      className="admin-section__buttons"
      modifier="local">
      <ListItem className="admin-section__buttons-item">
        <Button
          aria-label="Edit button"
          className="admin-section__button admin-section__button_edit"
          name="button-edit"
          type="submit"
          onClick={handleClickEditButton}>
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
          onClick={handleClickDeleteButton}>
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
