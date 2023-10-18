import './_AdminForm.scss';
import AdminSectionButtonSave from 'components/AdminComponents/AdminSectionButtonSave/AdminSectionButtonSave';

function AdminForm({
  name,
  children,
  modifier,
  openPopup,
  item,

  saveSelectedItemData,
}) {
  const classes = modifier ? `admin-form admin-form_${modifier}` : `admin-form`;
  function handleClickSaveButton() {
    openPopup();
    saveSelectedItemData(item);
  }
  return (
    <>
      <form
        className={classes}
        name={name}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        {children}
        <AdminSectionButtonSave handleClickSaveButton={handleClickSaveButton} />
      </form>
    </>
  );
}

export default AdminForm;
