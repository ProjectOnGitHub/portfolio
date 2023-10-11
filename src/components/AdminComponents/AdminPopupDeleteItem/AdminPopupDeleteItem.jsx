import AdminSectionButtonsChoice from '../AdminSectionButtonsChoice/AdminSectionButtonsChoice.jsx';

function AdminPopupDeleteItem({ confirmDeleteItem, title }) {
  function handleClickSaveButton() {
    confirmDeleteItem(true);
  }

  function handleClickResetButton() {
    confirmDeleteItem(false);
  }

  return (
    <>
      <h1 className="admin-section__title">{title}</h1>
      <AdminSectionButtonsChoice
        handleClickResetButton={handleClickResetButton}
        handleClickSaveButton={handleClickSaveButton}
      />
    </>
  );
}

export default AdminPopupDeleteItem;
