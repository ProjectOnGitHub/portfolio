import AdminList from '../AdminList/AdminList';
import AdminListItem from '../AdminListItem/AdminListItem';
import AdminSectionButton from '../AdminSectionButton/AdminSectionButton';

function AdminSectionButtonsChoice({
  handleClickResetButton,
  handleClickSaveButton,
}) {
  return (
    <AdminList modifier="buttons-choice">
      <AdminListItem modifier="buttons-choice">
        <AdminSectionButton
          modifier="save"
          name="save"
          type="button"
          onClick={handleClickSaveButton}>
          Да
        </AdminSectionButton>
      </AdminListItem>
      <AdminListItem modifier="buttons-choice">
        <AdminSectionButton
          modifier="reset"
          name="reset"
          type="button"
          onClick={handleClickResetButton}>
          Нет
        </AdminSectionButton>
      </AdminListItem>
    </AdminList>
  );
}

export default AdminSectionButtonsChoice;
