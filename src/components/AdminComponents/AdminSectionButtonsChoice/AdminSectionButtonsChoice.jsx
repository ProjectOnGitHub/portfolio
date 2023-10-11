import Icon from '../../BaseComponents/Icon/Icon.jsx';
import List from '../../BaseComponents/List/List.jsx';
import ListItem from '../../BaseComponents/ListItem/ListItem.jsx';
import AdminSectionButton from '../AdminSectionButton/AdminSectionButton.jsx';

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
          <AdminSectionButton
            ariaLabel="Редактировать"
            modifier="edit"
            name="edit"
            type="button"
            onClick={handleClickEditButton}>
            <Icon
              className="edit"
              name="edit"
            />
          </AdminSectionButton>
        </ListItem>
      )}
      {!isDeleteHide && (
        <ListItem className="admin-section__buttons-item">
          <AdminSectionButton
            ariaLabel="Удалить"
            modifier="delete"
            name="delete"
            onClick={handleClickDeleteButton}>
            <Icon
              className="trash"
              name="trash"
            />
          </AdminSectionButton>
        </ListItem>
      )}
    </List>
  );
}

export default AdminSectionButtonsChoice;
