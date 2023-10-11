import Button from '../../BaseComponents/Button/Button.jsx';

function AdminSectionButton({ onClick, children, modifier }) {
  return (
    <Button
      className={`admin-section__button admin-section__button_${modifier}`}
      name={`button-${modifier}`}
      type="button"
      onClick={onClick}>
      {children}
    </Button>
  );
}

export default AdminSectionButton;
