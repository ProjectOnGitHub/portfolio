import Button from '../../BaseComponents/Button/Button.jsx';

function AdminSectionButtonDeleteItem({ onClick, children }) {
  return (
    <Button
      className="admin-section__button admin-section__button_delete-item"
      name="button-delete-item"
      type="submit"
      onClick={onClick}>
      {children}
    </Button>
  );
}

export default AdminSectionButtonDeleteItem;
