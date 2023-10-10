import Button from '../../BaseComponents/Button/Button.jsx';

function AdminSectionButtonAdd({ onClick, children }) {
  return (
    <Button
      className="admin-section__button admin-section__button_add"
      name="button-add"
      type="submit"
      onClick={onClick}>
      {children}
    </Button>
  );
}

export default AdminSectionButtonAdd;
