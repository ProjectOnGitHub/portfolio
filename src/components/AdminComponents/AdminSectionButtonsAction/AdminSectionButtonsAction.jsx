import { useNavigate } from 'react-router-dom';
import Icon from 'components/BaseComponents/Icon/Icon';
import AdminList from 'components/AdminComponents/AdminList/AdminList';
import AdminListItem from 'components/AdminComponents/AdminListItem/AdminListItem';
import AdminSectionButton from 'components/AdminComponents/AdminSectionButton/AdminSectionButton';

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
