import { useNavigate } from 'react-router-dom';
import Icon from '../../BaseComponents/Icon/Icon';
import AdminList from '../AdminList/AdminList';
import AdminListItem from '../AdminListItem/AdminListItem';
import AdminSectionButton from '../AdminSectionButton/AdminSectionButton';

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
  const navigate = useNavigate();

  function handleClickDeleteButton() {
    const title = 'Удалить элемент?';
    openPopup(title);
    const itemData = {
      endpoint,
      itemId,
      currentArray,
      setState,
    };
    saveSelectedItemData(itemData);
  }

  function handleClickEditButton() {
    return navigate(`${itemId}`);
  }

  return (
    <AdminList modifier="buttons-action">
      {!isEditHide && (
        <AdminListItem modifier="buttons-action">
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
        <AdminListItem modifier="buttons-action">
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
