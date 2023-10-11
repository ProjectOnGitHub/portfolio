import Button from '../../BaseComponents/Button/Button.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';

function AdminSectionButtonsChoice({
  endpoint,
  currentArray,
  itemId,
  setState,
  isDeleteHide,
  isEditHide,
  openPopup,
  saveSelectedItemData,
}) {
  function handleClickDeleteButton() {
    openPopup();
    const itemData = {
      endpoint,
      itemId,
      currentArray,
      setState,
    };
    saveSelectedItemData(itemData);
  }

  function handleClickEditButton() {
    console.log('Click to edit button');
  }

  return (
    <List
      className="admin-section__buttons"
      modifier="local">
      {!isEditHide && (
        <ListItem className="admin-section__buttons-item">
          <Button
            ariaLabel="Редактировать"
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
      )}
      {!isDeleteHide && (
        <ListItem className="admin-section__buttons-item">
          <Button
            ariaLabel="Удалить"
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
      )}
    </List>
  );
}

export default AdminSectionButtonsChoice;
