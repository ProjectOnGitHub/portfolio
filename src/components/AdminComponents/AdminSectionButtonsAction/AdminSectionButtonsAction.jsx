import Icon from '../../BaseComponents/Icon/Icon.jsx';
import AdminList from '../AdminList/AdminList.jsx';
import AdminListItem from '../AdminListItem/AdminListItem.jsx';
import AdminSectionButton from '../AdminSectionButton/AdminSectionButton.jsx';

function AdminSectionButtonsAction({
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
    <AdminList modifier="buttons-icon">
      {!isEditHide && (
        <AdminListItem modifier="buttons-icon">
          <AdminSectionButton
            ariaLabel="Редактировать"
            modifier="edit"
            name="edit"
            onClick={handleClickEditButton}>
            <Icon
              className="edit"
              name="edit"
            />
          </AdminSectionButton>
        </AdminListItem>
      )}
      {!isDeleteHide && (
        <AdminListItem modifier="buttons-icon">
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
        </AdminListItem>
      )}
    </AdminList>
  );
}

export default AdminSectionButtonsAction;
