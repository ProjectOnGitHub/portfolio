import Button from 'components/BaseComponents/Button/Button';

function AdminSectionButtonSave({ handleClickSaveButton }) {
  return (
    <Button
      className="admin-section__button admin-section__button_save"
      name="button-save"
      type="button"
      onClick={handleClickSaveButton}>
      Сохранить
    </Button>
  );
}

export default AdminSectionButtonSave;
