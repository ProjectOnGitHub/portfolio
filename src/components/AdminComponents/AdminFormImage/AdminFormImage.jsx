import AdminForm from '../AdminForm/AdminForm.jsx';
import AdminFormDropzone from '../AdminFormDropzone/AdminFormDropzone.jsx';
import Icon from '../../BaseComponents/Icon/Icon.jsx';
import Button from '../../BaseComponents/Button/Button.jsx';

function AdminFormImage({ onClick, children }) {
  return (
    <AdminForm modificator="middle">
      <fieldset className="admin-form__fieldset">
        <legend className="admin-form__legend">Добавить изображение</legend>
        <AdminFormDropzone className="AdminFormDropzone">
          <Button
            aria-label="Delete image button"
            className="admin-form__button admin-form__button_delete-image"
            name="button-image-delete"
            type="submit"
            onClick={onClick}>
            <Icon
              className="delete icon__delete_image"
              name="trash"
            />
          </Button>
        </AdminFormDropzone>
      </fieldset>
      {children}
    </AdminForm>
  );
}

export default AdminFormImage;
